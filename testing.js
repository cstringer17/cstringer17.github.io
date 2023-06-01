(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML =
        `<button type="button" id="myBtn">Helper Button</button>`;
    customElements.define(name, constructor, options);
    customElements.define('custom-button', PerformanceHelp);
    class PerformanceHelp extends HTMLElement {
        constructor() {
            super();
            this.init();
        }


        init() {

            let shadowRoot = this.attachShadow({ mode: "open" });
            shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this.addEventListener("click", event => {
                var event = new Event("onClick");
                this.fireChanged();
                this.dispatchEvent(event);
            });
        }
    }
}