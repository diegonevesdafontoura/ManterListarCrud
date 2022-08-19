export class Contato {
    constructor(){
    }

    public id : number;
    public nome : string;
    public email : string;
    public natural : string;

    toString(){
        return this.id + '' + this.nome + '' + this.email + '' + this.natural;
    }
};