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

customElements.define("my-recipe", MyRecipe, {
  extends: "article",
});

customElements.define("my-taglist", MyTaglist, {
  extends: "footer",
});
