class MiMensaje extends HTMLElement{
    constructor(){
        super();
        this.addEventListener("click", function(e){
            alert("click en mensaje");
        })
        console.log("Constructor: cuando el elemento es creado");
    }


    static get observedAttributes(){
        return ['msj'];
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
        if (attrName == "msj") {
            this.pintarMensaje(newVal);
        }
    }

    pintarMensaje(msj){
        this.innerHTML = msj;
    }
}


customElements.define('mi-mensaje', MiMensaje)