class MyRecipe extends HTMLElement {
  constructor() {
    super();
    console.log("Ich wurde instanziiert");
  }
}

customElements.define("recipe", MyRecipe);
