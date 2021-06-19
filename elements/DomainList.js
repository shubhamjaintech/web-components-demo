import { LitElement, html, css } from 'https://unpkg.com/lit-element?module';
import './DomainCard.js'

class DomainList extends LitElement {
  static get properties() {
    return {
      domains: { type: Array }
    };
  }

  static get styles(){
    return css`
    .domainListContainer{
      margin-top:4rem;
    }
    
    `
  }

  render() {
    console.log(this.domains);
    if (!this.domains) {
      return html``;
    }
   
  return html`<div class="domainListContainer">${this.domains.map(item=>html`<domain-card .item=${item} />`)}</div>`;
  }


}

customElements.define('domain-list', DomainList);