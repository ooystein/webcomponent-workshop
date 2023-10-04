import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { TodoItem } from "./types";

@customElement("my-todo-li")
export class MyTodoLi extends LitElement {
  @property({ type: Object })
  item: TodoItem;

  @property({ type: Number })
  index: number;

  setToDone = () => {
    const doneEvent = new CustomEvent("done", { detail: this.index });
    this.dispatchEvent(doneEvent);
  };

  render() {
    return html`
      <li data-id=${this.index} role="button" @click=${this.setToDone}>
        ${this.item.name}
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-todo-li": MyTodoLi;
  }
}
