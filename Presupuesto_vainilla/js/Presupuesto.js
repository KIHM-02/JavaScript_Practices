class Presupuesto extends Cuenta
{
    _cantReal;

    constructor(descripcion, monto, cantReal)
    {
        super(descripcion, monto);
        this._cantReal = cantReal;
    }

    get getCantReal(){
        return this._cantReal;
    }

    set setCantReal(value){
        this._cantReal = value;
    }
}