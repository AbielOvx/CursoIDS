class MiSaludo extends HTMLElement{
    constructor(){
        
        //se obtiene la unica etiqueta template
        const tpl = document.querySelector("template");

        //Se clona su contenido y se crea una instancia del document fragment
        const tplInst = tpl.content.cloneNode(true);

        //invoca el constructor de la clase padre
        super();

        //se crea un shadow dom para las instancias de mi-saludi
        this.attachShadow({mode: "open"});

        //se agrega el template dentro del shadow dom usando el elemento raiz "shadowRoot"
        this.shadowRoot.appendChild(tplInst); 
    }
}

//se registra el custom element para poder ser utilizado declarativamente en el html
//o imperativamente mediante JS
customElements.define("mi-saludo", MiSaludo);