class miBoton extends HTMLElement{
    constructor(){
        super();
        this.addEventListener('click', function(e){
            alert("Hola");
        })
    }
}


customElements.define("mi-boton", miBoton);