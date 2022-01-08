

/**
 * Função que é rodada após o documento ser carregado.
 */
$( document ).ready(function() {
    console.log('Tudo carregado e ok na Main por enquanto.');

    
    /**
     * Toda vez que alguma tecla for apertada com o campo Cep selecionado checa se tem 8 digitos, caso tenha faz o pedido para a controller resolver o Cep (Resolver = criar link, fazer pedido usando o link e preencher os campos do formulário de acordo com a resposta)
     */
    $('#inputCep').on('keyup', async ()=>{
        const inputCep = $('#inputCep')[0]
        const usuarios = new UsuariosController

        if (inputCep.value.length === 8) {
            
            usuarios.resolveCep(inputCep.value);

        } // <- if inputCep

        } // <- callback quando dá certo

    ) // <- InputCep.On.Keyup 

})  // << - Document.ready function

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