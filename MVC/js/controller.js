MVC.Controller = class Controller{
    constructor(props){
        this.eventHandler();

        this.model = new props.model(props.endpoint);
        this.view = new props.view(props.contentElement);
    }

    eventHandler(){
        document.body.addEventListener("onloadApp", (event) => {
            this.getData();
        }); 
    }

    getData() {
        this.model.getPersona()
        .then(data => {
            this.view.notify(data);
        })
        .catch(console.log);
    }

    
}