class MyRecipe extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add("fade-in");
  }

  disconnectedCallback() {
    this.classList.remove("fade-in");
  }
}

customElements.define("my-recipe", MyRecipe, {
  extends: "article",
});
