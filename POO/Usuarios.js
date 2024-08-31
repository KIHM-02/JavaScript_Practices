export class Usuario{

    constructor(nombre,apel){
        this.nombre = nombre;
        this.apel = apel;
    }
    
    get nombre() {

        return this._nombre;
    }

    set nombre(nombre){
        
        this._nombre = nombre;
    }

    get apel(){
        return this._apel;
    }

    set apel(apel){
        this._apel = apel;
    }

    

}

let user = new Usuario(3123,"brambila");

