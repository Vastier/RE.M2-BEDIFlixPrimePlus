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




