import { LitElement, html, css } from "https://unpkg.com/lit-element?module";
class DomainCard extends LitElement {
  static get properties() {
    return {
      item: { type: Object },
    };
  }

  constructor() {
    super();
    this.defaultPrice = "7.99";
  }


  static get styles() {
    return css`
      .cardContainer {
        padding: 1rem;
        margin-top: 1rem;
        box-shadow: none !important;
        position: relative;
        min-height: 100px;
        border-top: 1px solid #eee;
        padding-top: 1rem;
      }

      .cardItem {
        margin-bottom: 2.5rem;
        padding: 10px 10px 20px 10px;
        box-shadow: 0 15px 13px rgb(0 0 0 / 10%);
        border-radius: 2px;
        min-height: 160px;
      }
      .domainName {
        color: #7a8285;
        font-weight: 600;
        font-size: 1.3rem;
      }
      .domainPrice {
        font-size: 1.2rem;
        line-height: 1.6rem;
        font-weight: 500;
      }
      .axnBtnDrk {
        background: #333;
        color: #fff;
        letter-spacing: 0.17rem;
        padding: 0.5rem;
        cursor: pointer;
      }
    `;
  }

  bookNow() {
    alert(
      "Your Request has been sent for processing and you will be notified via email shortly."
    );
  }
  render() {
    return html`<div class="cardContainer">
      <div class="cardItem">
        <a style="" class="domainName">
          ${this.item.domainName}</a
        >
        <p class="domainPrice">
          ${
            this.item.purchasePrice ? this.item.purchasePrice : this.defaultPrice
          } $<br />
        </p>
        <div class="axnBtnDrk" @click=${this.bookNow}" style="float:right;">
          Book Now
        </div>
      </div>
    </div>`;
  }
}

customElements.define("domain-card", DomainCard);
