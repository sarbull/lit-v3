import {LitElement, html} from 'lit';

export class AnotherElement extends LitElement {
  override render() {
    return html`
      <h1>another-element</h1>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'another-element': AnotherElement;
  }
}
