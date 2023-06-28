(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = 
    `
    <h1>File Upload</h1>
    <input type="file" name="fileUpload" id="fileUpload">
    <h1>Confirm Data</h1>
    <button type="button" id="myBtn">Import?</button>
    ` ;   
   
    class PerformanceHelp extends HTMLElement {
        constructor() {
            super();
            this.init();           
        }

        init() {            

            let shadowRoot = this.attachShadow({mode: "open"});
            shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this.addEventListener("click", event => {
            var event = new Event("onClick");
            this.fireChanged();           
            this.dispatchEvent(event);
            });           
        }

        fireChanged() {
            const fileUploadInput = document.getElementById('fileUpload');
            //const uploadedFile = fileUploadInput.files[0];
            console.log('Uploaded file:', fileUploadInput.files);
        }    

             
        
    }

    customElements.define('custom-button', PerformanceHelp);
})();