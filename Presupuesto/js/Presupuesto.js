class Presupuesto extends Cuenta
{
    _idMes;
    _cantReal;

    constructor(){}

    constructor(descripcion, monto, cantReal, idMes)
    {
        super(descripcion, monto);
        this._idMes = idMes;
        this._cantReal = cantReal;
    }

    get getIdMes(){
        return this._idMes;
    }

    set setIdMes(value){
        this._idMes = value;
    }

    get getCantReal(){
        return this._cantReal;
    }

    set setCantReal(value){
        this._cantReal = value;
    }
}