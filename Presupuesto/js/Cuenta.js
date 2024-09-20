class Cuenta
{
    _descricpion;
    _monto;

    constructor(){}

    constructor(descricpion, monto){
        this._descricpion = descricpion;
        this._monto = monto;
    }

    get getDescripcion(){
        return this._descricpion;
    }

    set setDescripcion(value){
        this._descricpion = value;
    }

    get getMonto(){
        return this._monto;
    }

    set setMonto(value){
        this._monto = value;
    }
}