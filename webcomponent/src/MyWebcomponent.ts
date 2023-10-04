type CounterEvent = {
  count: number;
};

class MyWebcomponent extends HTMLElement {
  counter = 0;

  constructor() {
    super();

    const template = document.getElementById("my-template");
    const templateContent = template.content;

    this.attachShadow({ mode: "open" }).appendChild(
      templateContent.cloneNode(true)
    );

    const initCount = this.getAttribute("initCount");
    this.counter = Number(initCount);
  }

  inc = () => {
    this.counter = this.counter + 1;
    this.dispatchEvent(
      new CustomEvent<CounterEvent>("count", {
        detail: { count: this.counter },
      })
    );
  };

  connectedCallback() {
    this.shadowRoot!.querySelector("button")!.onclick = () => this.inc();
  }
}

customElements.define("my-webcomponent", MyWebcomponent);
