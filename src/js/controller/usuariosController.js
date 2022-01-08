class UsuariosController {

	/**
	 * Faz o pedido para a model gerar o link de pedido do CEP, depois pede para a view mostrar os dados recebidos.
	 * 
	 * @param {String} cep Uma string contendo o Cep
	 */
	resolveCep(cep) {
		const usrModel = new UsuariosModel
		const usrView = new UsuariosView
		const url = usrModel.geraLinkCep(cep)
			
		$.get(url, (data) => {
			usrView.mostrarCep(data)
		}) //<- Pedido GET Cep

	}	// <- resolveCep

	
	validaSenha() {
		const campoSenha = $('#inputSenha'),
			  confirmaSenha = $('#inputConfirmaSenha')
		
		const usrView = new UsuariosView
        // validar minúsculas 
        const minusculas = /[a-z]/g;
        if (campoSenha[0].value.match(minusculas)) {
            usrView.validaMin(true)
        } else {
            usrView.validaMin(false)
        }
		// valida maiúsculas
        const maiusculas = /[A-Z]/g;
        if (campoSenha[0].value.match(maiusculas)) {
            usrView.validaMai(true)
        } else {
            usrView.validaMai(false)
        }
		// valida números
        const numeros = /[0-9]/g;
        if (campoSenha[0].value.match(numeros)) {
            usrView.validaNum(true)
        } else {
            usrView.validaNum(false)
        }
		// valida tamanho
        if (campoSenha[0].value.length >= 8) {
            usrView.validaLen(true)
        } else {
            usrView.validaLen(false)
        }

	}

	validaConfirmaSenha(){
		const campoSenha = $('#inputSenha'),
			  confirmaSenha = $('#inputConfirmaSenha')

		const usrView = new UsuariosView

			  // valida confirmação
        if (campoSenha[0].value === confirmaSenha[0].value) {
            usrView.validaConfirma(true)
        } else {
            usrView.validaConfirma(false)
        }
	}
	


} // <- UsuariosController




// ##### Model.js da page de cadastro {

// $('#cadastrar').on('click', login);
// $('#criarConta').on('click', login);
// $('#contato').on('click', contato);
// $('#sair').on('click', paginaPrincipal)
// function quemSomos(){
//     window.location.href = './quemsomos.html';
// }

// function cadastro(){
//     window.location.href = './cadastro.html';
// }

// function login(){
//     window.location.href = './login.html';
// }

// function contato(){
//     window.location.href = './contato.html';
// }

// function paginaPrincipal(){
//     window.location.href ='./home.html';
// }

// ##### } < fim da Model.js da page de cadastro




