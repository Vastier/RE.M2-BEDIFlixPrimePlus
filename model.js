class Model {
    constructor (valorInput){
        this.valorInput = valorInput;
    }

    validaEmail(){
        return this.valorInput.indexOf('@') > -1 ? 'Email valido' : 'Email invalido';
    }
}