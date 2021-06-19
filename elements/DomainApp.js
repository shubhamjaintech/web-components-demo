import { LitElement, html, css } from "https://unpkg.com/lit-element?module";
import "./DomainList.js";

class DomainApp extends LitElement {
    constructor() {
        super();
        this.domains = [];
      }
    
  static get properties() {
    return {
      domains: { type: Array },
    };
  }
  static get styles() {
    return css`
      .hero {
        background: linear-gradient(45deg, #111, #444);
        padding-top: 6rem !important;
        padding-bottom: 2rem !important;
        margin: auto;
        text-align: center;
      }

      .heroPitch {
        color: #818181;
        padding-left: 1rem !important;
        padding-right: 1rem !important;
        font-size: 1.5rem !important;
        line-height: 1.8rem;
      }
      #domainSearchKey {
        height: 2rem;
      }
      #domainTld {
        height: 2.3rem;
      }
      #searchBtn {
        margin-left: 2rem;
        padding:0.6rem;
        background: #2881ce;
        color:#ffffff;
      }
    `;
  }
  //connectedCallback is a lifecycle callback in the custom elements API. connectedCallback fires each time a custom element is appended into a document-connected element.
  connectedCallback() {
    super.connectedCallback();
  }


  fetchData() {
    const domainSearchKey = this.shadowRoot.getElementById("domainSearchKey").value;
    const dmnTldElement = this.shadowRoot.getElementById("domainTld");

    const dmnTld = dmnTldElement.options[dmnTldElement.selectedIndex].value;

    let searchObj = { keyword: domainSearchKey, tldFilter: [dmnTld] };

    const url =
      "https://mycorsproxyed.herokuapp.com/https://api.name.com/v4/domains:search";
    const username = "edavate";
    const password = "e2c0417dfbc18d65c323f8b58e7b9be9a3821c55";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Basic " +
          btoa(unescape(encodeURIComponent(username + ":" + password))),
      },
      body: JSON.stringify(searchObj),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Error!!");
        }
        return response.json();
      })
      .then((data) => {
        this.domains = data.results;
        console.log("Success:", data.results);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  render() {
    return html`
      <div class="hero">
        <h1 class="heroPitch">
          Get your Business Live with a Domain of your choice
        </h1>
        <div class="domainSearchContainer">
          <input
            id="domainSearchKey"
            placeholder="Find your Domain Name"
            autofocus
          />
          <select name="domainTld" id="domainTld">
            <option value="com">.com</option>
            <option value="in">.in</option>
            <option value="org">.org</option>
          </select>

          <button @click=${this.fetchData} id="searchBtn">Search</button>
        </div>
      </div>

      <domain-list  .domains=${this.domains}></domain-list>
    `;
  }
}

customElements.define("domain-app", DomainApp);
