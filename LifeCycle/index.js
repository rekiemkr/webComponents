class Component extends HTMLElement {
    constructor(){
        super();
        console.log('Componente cargado en memoria (Constructor)');
    }

    connectedCallback(){
        console.log('Componente renderizado (connectedCallback)');
    }

    disconnectedCallback(){
        console.log('Componente removido del documento (disconnectedCallback)');
    }

    attributeChangedCallback(att, oldValue, newValue) {

    }
}

customElements.define('my-component', Component);

setTimeout(() => {
    document.querySelector('my-component').remove();
}, 200);