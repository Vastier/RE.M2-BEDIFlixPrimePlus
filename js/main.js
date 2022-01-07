let inputCep = document.querySelector('#inputCep')
inputCep.addEventListener('keyup', async function(){

    if(inputCep.value.length == 8){
        
        let cep = inputCep.value
        const url = `https://viacep.com.br/ws/${cep}/json/`
        let apiResponse = await fetch(url).then(response => response.json());
        console.log(apiResponse)
    
        $('#inputCidade').val(apiResponse.localidade)
        $('#inputRua').val(apiResponse.logradouro)
        $('#inputBairro').val(apiResponse.bairro)
        $('#inputEstado').val(apiResponse.uf)

    }

})

function validarEmail(){
    let email = document.querySelector('#inputEmail');
    let error = document.querySelector('#error-email');

    if(!email.checkValidity()){
        error.innerHTML = 'Email inválido';
    }
}

function redefinirMsg(){
    let error = document.querySelector('#error-email');
    if(error.innerHTML == 'Email inválido'){
        error.innerHTML = '';
    }
}

function validarSenha(){
    let senha = document.querySelector('#inputSenha').value;
    let confirmSenha = document.querySelector('#inputConfirmSenha').value;
    let errorSenha = document.querySelector('#error-senha');
    let senhaNaoConfere = document.querySelector('#senhaNaoConfere');

    if(senha.length <= 5){
        errorSenha.innerHTML = 'Senha inválida!'
    }else{
        errorSenha.innerHTML = ''
    }
    if(senha.length > 5 &&  senha != confirmSenha){
        senhaNaoConfere.innerHTML = 'As senhas são diferentes!'
    }
    else{
        senhaNaoConfere.innerHTML = '';
    }
}





$('#login').on('click', login);
function login(){
    window.location.href = './login.html';
}