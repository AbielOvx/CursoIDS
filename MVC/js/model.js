MVC.Model = class Model{
    constructor(endpoint){
        this.endpoint = endpoint;
        this.modelData = {};
    }

    getPersona(){
        return fetch(`${this.endpoint}`)
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            }
            return Error("No se pudieron obtener los datos");
        })
        .then(data => {
            this.setModelo(data);
            return data;
        })
    }

    setModelo(data){
        this.modelData = data;
    }

}

