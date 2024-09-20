class Fecha
{
    _mes;
    _anio;

    constructor(){}

    constructor(mes, anio){
        this._mes = mes;
        this._anio = anio;
    }

    get getMes(){
        return this._mes;
    }

    set setMes(value){
        this._mes = value;
    }

    get getAnio(){
        return this._anio;
    }

    set setAnio(value){
        this._anio = value;
    }
    
}