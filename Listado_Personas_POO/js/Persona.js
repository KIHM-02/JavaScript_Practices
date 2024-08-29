class Persona
{
    constructor(name, last)
    {
        this._name = name;
        this._last = last;
    }

    get getName(){ return this._name; }
    
    set setName(name) 
    {
        this._name = name;
    }

    get getLast(){ return this._last; }
    
    set setLast(last)
    {
        this._last = last;
    }
}