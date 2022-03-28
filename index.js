class MyRecipe extends HTMLElement {
  constructor() {
    super();
    console.log("Ich wurde instanziiert");
  }
}

customElements.whenDefined("my-recipe").then(() => {
  console.log("my-recipe is defined now");
});

setTimeout(() => {
  if (!customElements.get("my-recipe")) {
    console.log("log1");
    customElements.define("my-recipe", MyRecipe, {
      extends: "article",
    });
  }
}, 2000);

// if (!customElements.get("my-recipe")) {
//   console.log("log2");
//   customElements.define("my-recipe", MyRecipe, {
//     extends: "article",
//   });
// }
