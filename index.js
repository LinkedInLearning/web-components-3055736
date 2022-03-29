class MyRecipe extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add("fade-in");
    const currentCount = document.getElementById(
      "recipeCounterCount"
    ).innerText;

    document.getElementById(
      "recipeCounterCount"
    ).innerText = currentCount * 1 + 1;
  }

  disconnectedCallback() {
    this.classList.remove("fade-in");
    const currentCount = document.getElementById(
      "recipeCounterCount"
    ).innerText;

    document.getElementById(
      "recipeCounterCount"
    ).innerText = currentCount * 1 - 1;
  }
}

class MyTaglist extends HTMLElement {
  static get observedAttributes() {
    return ["green", "warn", "info"];
  }

  constructor() {
    super();
  }

  createTags(attributeName) {
    const infoTags = this.getAttribute(attributeName);

    if (infoTags) {
      infoTags.split(",").forEach((tagText) => {
        const tagDiv = document.createElement("div");
        tagDiv.classList.add("tag", "tag-" + attributeName);
        tagDiv.innerText = tagText;
        this.appendChild(tagDiv);
      });
    }
  }

  createAllTags() {
    this.innerHTML = "";
    this.createTags("info");
    this.createTags("green");
    this.createTags("warn");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.createAllTags();
  }
}

class MyIngredient extends HTMLLIElement {
  constructor() {
    super();
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    this.prepend(input);
  }
}

class MyIngredients extends HTMLElement {
  constructor() {
    super();
    const h2 = document.createElement("h2");
    h2.innerText = "Zutaten:";
    const shadowMode = "closed";
    const shadowDom = this.attachShadow({
      mode: shadowMode,
    });
    shadowDom.appendChild(h2);
    shadowDom.appendChild(this.children[0]);
  }
}

customElements.define("my-ingredients", MyIngredients);

customElements.define("my-recipe", MyRecipe, {
  extends: "article",
});

customElements.define("my-taglist", MyTaglist, {
  extends: "footer",
});

customElements.define("my-ingredient", MyIngredient, {
  extends: "li",
});
