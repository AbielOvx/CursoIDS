class miBotonExtendido extends HTMLButtonElement{
    constructor(){
        super();
        this.addEventListener("click", (e) => {
            console.log("Evento click: " + this.innerHTML);
            alert("Mi boton extendido");
        })
    }


    static get ceName(){
        return "mi-boton-extendido";
    }

    get is (){
        return this.getAttribute("is");
    }

    set is (value){
        this.setAttribute("is", value || this.ceName);
    }
}

customElements.define("mi-boton-extendido", miBotonExtendido, {extends: "button"});



const miBotonExtendido2 = document.createElement("button", {is: miBotonExtendido.ceName});
miBotonExtendido2.textContent = "Soy un boton extendido 2";
document.body.appendChild(miBotonExtendido2);


const miBotonExtendido3 = document.createElement("button", {is: miBotonExtendido.ceName});
miBotonExtendido3.textContent = "Soy un boton extendido 3";

document.querySelector("#container").appendChild(miBotonExtendido3);

