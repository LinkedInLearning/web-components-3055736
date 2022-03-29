class MyRecipe extends HTMLElement {
  constructor(templateName = "myRecipeTemplate") {
    super();
    const template = document.getElementById(templateName);
    const copiedTemplate = template.content.cloneNode(true);
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(copiedTemplate);

    if (templateName != "myRecipeTemplatev2") {
      console.warn(
        "This version is deprecated, please switch to my-recipe-v2"
      );
    }
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

class MyRecipe2 extends MyRecipe {
  constructor() {
    super("myRecipeTemplatev2");
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

class MyIngredient extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById(
      "ingredientTemplate"
    );
    const copiedTemplate = template.content.cloneNode(true);
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(copiedTemplate);
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
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
    .ingredients-list {
      border-left: 5px solid salmon;
      line-height: 1.7;
    }
    `;
    shadowDom.appendChild(styleTag);
    shadowDom.appendChild(h2);
    shadowDom.appendChild(this.children[0]);
  }
}

class MyInstructions extends HTMLElement {
  constructor() {
    super();
    const instructions =
      this.querySelector(".instructions");
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(instructions);
    const imageWrapper = document.createElement("div");
    imageWrapper.innerHTML = `
      <style>
      figure, ::slotted(img) {
        max-width: 400px;
      }
      </style>
      <figure>
        <slot name="image"></slot>
        <figcaption></figcaption>
      </figure>
    `;
    shadow.appendChild(imageWrapper);
    const slot = shadow.querySelector("slot");
    slot.addEventListener("slotchange", () => {
      shadow.querySelector("figcaption").innerText =
        slot.assignedElements()[0].src;
    });
  }
}

customElements.define("my-instructions", MyInstructions);

customElements.define("my-ingredients", MyIngredients);

customElements.define("my-recipe", MyRecipe, {
  extends: "article",
});

customElements.define("my-recipe-v2", MyRecipe2, {
  extends: "article",
});

customElements.define("my-taglist", MyTaglist, {
  extends: "footer",
});

customElements.define("my-ingredient", MyIngredient);
