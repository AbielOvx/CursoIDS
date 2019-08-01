class MiMensaje extends HTMLElement{
    constructor(){
        super();
        this.addEventListener("click", function(e){
            alert("click en mensaje");
        })
        console.log("Constructor: cuando el elemento es creado");
    }


    static get observedAttributes(){
        return ['msj','casi-visible'];
    }


    connectedCallback(){
        console.log("ConnectedCallbak: Cuando el elemento es insertado en el documento");
    }

    disconnectedCallback(){
        alert("disconnected: Cuando el elemento es eliminado del documento");
    }

    adoptedCallback(){
        alert("adoptedCallback: Cuando el elemento es adoptado por otro documento")
    }

    attributeChangedCallback(attrName, oldVal, newVal){
        console.log("attributeChangedCallback: Cuando cambia un atributo");
        if (attrName === "msj") {
            this.pintarMensaje(newVal);
        }
        if (attrName === "casi-visible") {
            this.setCasiVisible();
        }
    }

    pintarMensaje(msj){
        this.innerHTML = msj;
    }

    get msj(){
        return this.getAttribute("msj");
    }

    set msj(val){
        this.setAttribute("msj",val);
    }


    get casiVisible(){
        return this.hasAttribute("casi-visible");
    }

    set casiVisible(value){
        if (value) {
            this.setAttribute("casi-visible", "");
        }else
            this.removeAttribute("casi-visible");
    }


    setCasiVisible(){
        if (this.casiVisible) {
            this.style.opacity = 0.1;
        }else
            this.style.opacity = 1;
    }

}


customElements.define('mi-mensaje', MiMensaje)



let miMensaje = document.createElement('mi-mensaje');
miMensaje.msj = "otro mensaje";
document.body.appendChild(miMensaje);

let tercerMensaje = new MiMensaje();
tercerMensaje.msj = "Tecer mensaje";
document.body.appendChild(tercerMensaje);



