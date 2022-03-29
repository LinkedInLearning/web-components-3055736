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
      <figure>
        BILD
        <figcaption>BILDUNTERSCHRIFT</figcaption>
      </figure>
    `;
    shadow.appendChild(imageWrapper);

    // 1. Slot hinzufügen
    // 2. Wenn slot gefüllt ("slotchange" event)
    //     -> Bild-URL auslesen (img.src)
    //        Tipp: slotElement.assignedElements() Methode
    // 3. Bild-URL in figcaption schreiben
  }
}

customElements.define("my-instructions", MyInstructions);

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
