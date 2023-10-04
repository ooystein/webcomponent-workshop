import "./style.css";

class MyWebcomponent extends HTMLElement {
  constructor() {
    super();

    const template = document.getElementById("my-template");
    const templateContent = template.content;

    this.attachShadow({ mode: "open" }).appendChild(
      templateContent.cloneNode(true)
    );
  }
}

customElements.define("my-webcomponent", MyWebcomponent);
