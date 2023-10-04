import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { TodoItem } from "./types";

@customElement("my-todo-app")
export class MyTodoApp extends LitElement {
  @state()
  todoList: TodoItem[] = [
    { name: "Melk", done: false },
    { name: "Sukker", done: false },
  ];

  @state()
  newTodoName = "";

  onAdd = (event: Event) => {
    event.preventDefault();

    this.todoList = [...this.todoList, { name: this.newTodoName, done: false }];
    this.newTodoName = "";
  };

  updateName = (event: Event) => {
    this.newTodoName = event.target.value;
  };

  setToDone = (event: CustomEvent) => {
    const currentTodo = this.todoList[event.detail];
    currentTodo.done = !currentTodo.done;
    this.todoList = [...this.todoList];
  };

  render() {
    return html`
      <form @submit=${this.onAdd}>
        <input
          name="new-todo"
          type="text"
          @change=${this.updateName}
          .value=${this.newTodoName}
        />
        <button type="submit">Legg til</button>
      </form>
      <ul>
        ${this.todoList
          .filter((item) => !item.done)
          .map(
            (item, index) =>
              html`<my-todo-li
                .item=${item}
                index=${index}
                role="button"
                @done=${this.setToDone}
              >
              </my-todo-li>`
          )}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-todo-app": MyTodoApp;
  }
}
