
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
        template.innerHTML = `
            <section>
                <h1>Hola Mundo</h1>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt architecto impedit vero dignissimos
                        repellat, aperiam fugit dolor, aliquid fuga corporis praesentium sit quam doloremque reiciendis
                        quisquam. Rerum repellendus amet voluptas?</p>
                </div>
            </section>
            ${this.getStyles()}
        `
        return template;
    }

    getStyles() {
        return `
            <style>
             h1{
                 color: salmon;
             }
            </style>
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

