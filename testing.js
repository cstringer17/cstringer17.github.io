(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = 
    `
    <h1>File Upload</h1>
    <input type="file" name="fileUpload" id="fileUpload">
    ` ;   
   
    class PerformanceHelp extends HTMLElement {
        constructor() {
            super();
            this.init();           
        }

        init() {            
              
            let shadowRoot = this.attachShadow({mode: "open"});
            shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this.addEventListener("change", event => {
            var event = new Event("change");
            this.fireChanged();           
            this.dispatchEvent(event);
            });           
        }

        fireChanged() {
            console.log("change Triggered");     
            
        }        
        
    }

    customElements.define('custom-button', PerformanceHelp);
})();