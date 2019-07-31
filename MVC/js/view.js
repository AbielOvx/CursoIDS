MVC.View = class View{
    constructor(elem){
        this.eventHandler();
        this.elem = elem;
        console.log(elem);
    }

    eventHandler(){
        document.body.addEventListener("onLoadData",(event) => {
            this.updateView(event.detail);
        })
    }

    notify(data){
        const onLoadDataEvent = new CustomEvent("onLoadData", {detail: data, bubbles: true});
        this.elem.dispatchEvent(onLoadDataEvent);
    }


    updateView(datos){

        for (let key in datos) {
            const node = this.elem.querySelector(`#${key}`);
            if (node != null) {
                console.log(node);
                node.value = datos[key];
            }else
                console.log(`No se encontró ${key}`);
        }
       


        switch (datos.sexo) {
            case "H":
                this.elem.querySelector("#sexo").checked = true;
                break;
            case "M":
                this.elem.querySelector("#sexo2").checked = true;
                break;
            case "O":
                this.elem.querySelector("#sexo3").checked = true;
                break;
        }

        console.log(datos.trabajo.puesto)




    }




}