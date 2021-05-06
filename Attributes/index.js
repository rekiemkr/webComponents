
/* Se extiende de HTMLElement para crear una etiqueta personalizada */
class Header extends HTMLElement {

    constructor() {
        super();
        /* Crear un shadowDOM para nuestro componente */
        this.attachShadow(
            { mode: 'open' }
        )

        this.title = this.getAttribute('title');
        this.paragraph = this.getAttribute('paragraph');
    }

    
    static get observedAttributes() {
        /* Que atributos vamos a observarg */
        return ['title', 'paragraph'];
    }

    getTemplate() {
        const template = document.createElement('template');
        /* Hereda el contenido de la etiqueta del elemento de HTML */
        template.innerHTML = `
            <section>
                <h1 id="title">
                 ${this.title}
                </h1>
                <p>
                 ${this.paragraph}
                </p>
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
        const title = this.shadowRoot.getElementById('title');
        console.log(title);
    }

    /* Evento cuando se renderiza el componente */
    connectedCallback() {
        this.render();
    }

    /* Evento cuando cambian los atributos del componente */
    attributeChangedCallback(attr, oldAttr, newAttr) {
        if(oldAttr !== newAttr){
            if(attr === 'title'){
                this.title = newAttr;
            }
            if(attr === 'paragraph'){
                this.title = newAttr;
            }
        }
    }

    /* Evento cuando se elimina el componente del DOM */
    disconnectedCallback() {
        console.log('Me voy de aquí prros')
    }
}

/* Definición del custom element*/
customElements.define('header-principal', Header);

/* Elimina el componente del HTML */
setTimeout(() => {
    document.querySelector('header-principal').remove();
}, 3000);
