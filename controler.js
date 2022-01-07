class Controller {
    constructor(valorInput) {
        this.valorInput = valorInput;
    }

    validandoEmail() {
        let model = new Model;
        (this.valorInput);

        let view = new View ();
        view.mostraNaTela(model.validaEmail());
    }
}