class miBoton extends HTMLElement{
    constructor(){
        super();
        this.addEventListener('click', function(e){
            alert("Hola");
        })
    }
}
customElements.define("mi-boton", miBoton);




customElements.define("mi-boton2",class extends HTMLElement{
    constructor(){
        super();
        this.addEventListener("click", function(e){
            alert("Hola soy señor boton 2");
        })
    }
})