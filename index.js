class MyRecipe extends HTMLElement {
  constructor() {
    super();
    console.log("Ich wurde instanziiert");
  }

  connectedCallback() {
    console.log("i am connected");
    this.classList.add("fade-in");
  }

  disconnectedCallback() {
    console.log("i am disconnected");
    this.classList.remove("fade-in");
  }
}

customElements.define("my-recipe", MyRecipe, {
  extends: "article",
});
