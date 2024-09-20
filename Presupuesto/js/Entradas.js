class Entradas extends Cuenta
{
    _idMes;

    constructor(){}

    constructor(descripcion, monto, idMes)
    {
        super(descripcion, monto);
        this._idMes = idMes;
    }

    get getIdMes(){
        return this._idMes;
    }

    set setIdMes(value){
        this._idMes = value;
    }
}