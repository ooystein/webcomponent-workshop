import "./style.css";

document
  .querySelector("my-webcomponent")
  ?.addEventListener("count", (event) => console.log(event.detail.count));
console.log("main");
