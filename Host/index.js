
/* Se extiende de HTMLElement para crear una etiqueta personalizada */
class Header extends HTMLElement {

    constructor() {
        super();
        /* Crear un shadowDOM para nuestro componente */
        this.attachShadow(
            { mode: 'open' }
        )
    }

    getTemplate() {
        const template = document.createElement('template');
        /* Slot hereda el contenido de la etiqueta del elemento de HTML */
        template.innerHTML = `
            <section>
                <h1>
                    <slot name="title"></slot>
                </h1>
                <p>
                    <slot name="description"></slot>
                </p>
            </section>
            <style>
                ${this.getStyles()}
            </style>
        `
        return template;
    }

    getStyles() {
        return `
            :host{
                display: inline-block;
                max-width: 450px;
                padding: 20px;
                background-color: grey;
            }
            /* Aplicar style segun selector */
            :host(.blue){
                background-color: blue;
            }
            /* Aplicar style segun atributo */
            :host([salmon]){
                background-color: salmon;
            }
            /* Aplicar style segun contexto */
            :host-context(article.article--hello){
                background-color: yellow;
            }
            :host-context(article.article--hello) h1{
                color: red;
            }
        `;
    }

    render() {
        /* Agrega nuestra etiqueta template al HTML */
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
        const title = this.shadowRoot.getElementById('title')
    }

    /* Evento cuando se renderiza el componente */
    connectedCallback() {
        this.render();
    }

    /* Evento cuando cambian los atributos del componente */
    attributeChangedCallback() {

    }

    /* Evento cuando se elimina el componente del DOM */
    disconnectedCallback() {

    }
}

/* Definición del custom element*/
customElements.define('header-principal', Header);

