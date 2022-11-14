import { LitElement, html } from "lit";

class DateInput extends LitElement {
  render() {
    return html`<input type="date">`;
  }
}

customElements.define("date-input", DateInput);

class MainApp extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <button @click=${this._handlePickNative}>Pick native (Lit)</button>
      <input id="extension-native" type="date" />
      <button @click=${this._handlePickExtensionNative}>Pick extension native</button>
      <date-input></date-input>
      <button @click=${this._handlePickExtensionCustom}>Extension Custom Element Picker</button>
    `;

  }

  _handlePickNative() {
    console.log("showing native picker (lit)");
    document.querySelector("#native-input").showPicker();
  }

  _handlePickExtensionNative() {
    console.log("showing extension native picker");
    this.renderRoot.querySelector("#extension-native").showPicker();
  }

  _handlePickExtensionCustom() {
    console.log("showing extension custom picker");
    this.renderRoot?.querySelector("date-input")?.renderRoot?.querySelector("input")?.showPicker();
  }
}

customElements.define("main-app", MainApp);
