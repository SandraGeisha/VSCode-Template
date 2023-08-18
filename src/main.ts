class SJApp extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" })
    }
  
    connectedCallback() {
      console.log('connected');
      const html = /*html*/`
        <canvas data-cropper>
        </canvas>
        <h1>sdfsdf</h1> 
      `;
  
      if (this.shadowRoot !== null) {
        this.shadowRoot.innerHTML = html; 
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded",()=>{
    customElements.define("sj-cropper", SJApp);
  })