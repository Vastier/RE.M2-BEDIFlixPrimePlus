let envia = document.querySelector('#btnenvia'); 
let recupera = document.querySelector('#campo-recupera');

$(envia).click (function () {
    const controler = new Controller($(recupera).val());
    controler.validandoEmail();
})
