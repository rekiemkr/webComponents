/* Crear custom element*/
const template = document.createElement('header');

/* Template que se va a renderizar */
template.innerHTML = `
    <section class="header--container">
        <figure class="header--img">
            <img src="https://i.picsum.photos/id/25/100/100.jpg?hmac=H8MWlilVupec9GKsPqyGFZdGPQoecAYHYr_Qth8FNdQ"
                alt="Logo">
        </figure>
        <nav class="header--nav" aria-label="Menu Principal">
            <ul><a href="">Inicio</a></ul>
            <ul><a href="">¿Que es derma club?</a></ul>
            <ul><a href="">Experiencia derma club</a></ul>
            <ul><a href="">Descarga la app</a></ul>
            <ul><a href="">Tienda</a></ul>
            <ul><a href="" class="button">Inicia sesion como paciente</a></ul>
        </nav>
    </section>
`;

/* Se extiende de HTMLElement para crear una etiqueta personalizada */
class Header extends HTMLElement {

    constructor() {
        super();
        this.p = document.createElement('p');
    }

    /* Evento cuando se renderiza el componente */
    connectedCallback() {
        this.p.textContent = "Hola Mundo";
        this.appendChild(template);
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