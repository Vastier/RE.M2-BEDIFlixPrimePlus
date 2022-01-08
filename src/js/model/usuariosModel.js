class UsuariosModel {

	/**
	 * Gera um link da API ViaCep dado o cep recebido
	 * 
	 * @param {String} cep uma string contendo o Cep que será criado o link
	 * @returns uma string contendo o link para realizar o pedido do Cep.
	 */
	geraLinkCep(cep) {
		const url = `https://viacep.com.br/ws/${cep}/json/`
		return url
	}

}