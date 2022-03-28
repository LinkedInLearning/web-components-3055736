class MyRecipe extends HTMLElement {
  constructor() {
    super();
    console.log("Ich wurde instanziiert");
  }
}

customElements.define("my-recipe", MyRecipe, {
  extends: "article",
});
