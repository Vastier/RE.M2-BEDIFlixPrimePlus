
$( document ).ready(function() {
   console.log('Tudo carregado e ok na Main por enquanto.');



//    Hackeadamente usando o Jquery pra fazer o pedido e ajustando pra funcionar, remodelar futuramente para o modelo MVC
    $('#inputCep').on('keyup', async function(){

        const inputCep = $('#inputCep')[0]
        
        if(inputCep.value.length === 8){

            const cep = inputCep.value
            const url = `https://viacep.com.br/ws/${cep}/json/`
            $.get(url, (data) => {
                
                $('#inputCidade').val(data.localidade)
                $('#inputRua').val(data.logradouro)
                $('#inputBairro').val(data.bairro)
                $('#inputEstado').val(data.uf)

            }) // < Jquery callback de sucesso.
        } // < InputCep.On.Keyup

    })

}) // << - Document.ready function

// ##### main.js da page de cadastro {

    


// function validarEmail(){
//     let email = document.querySelector('#inputEmail');
//     let error = document.querySelector('#error-email');

//     if(!email.checkValidity()){
//         error.innerHTML = 'Email inválido';
//     }
// }

// function redefinirMsg(){
//     let error = document.querySelector('#error-email');
//     if(error.innerHTML == 'Email inválido'){
//         error.innerHTML = '';
//     }
// }

// function validarSenha(){
//     let senha = document.querySelector('#inputSenha').value;
//     let confirmSenha = document.querySelector('#inputConfirmSenha').value;
//     let errorSenha = document.querySelector('#error-senha');
//     let senhaNaoConfere = document.querySelector('#senhaNaoConfere');

//     if(senha.length <= 5){
//         errorSenha.innerHTML = 'Senha inválida!'
//     }else{
//         errorSenha.innerHTML = ''
//     }
//     if(senha.length > 5 &&  senha != confirmSenha){
//         senhaNaoConfere.innerHTML = 'As senhas são diferentes!'
//     }
//     else{
//         senhaNaoConfere.innerHTML = '';
//     }
// }





// $('#login').on('click', login);
// function login(){
//     window.location.href = './login.html';
// }
    
    
    // #####  } < Fim do Main.js da pagina de cadastro