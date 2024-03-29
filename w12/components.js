class SaludoBasicoElement extends HTMLElement{
    constructor(){
        super();
        this.saludo= "Hola, qué tal ";

    }

    connectedCallback(){
        this.pintado = true;
        this.innerHTML = this.saludo;
    }


    static get observedAttibutes(){
        return['nombre'];
    }
}

window.customElements.define("saludo-basico",SaludoBasicoElement)