class UsuariosView {
	

	/**
	 * Método que preenche a cidade, rua, bairro e estado da página de cadastro.
	 * 
	 * @param {Object} data Dados recebidos da API ViaCep
	 */
	mostrarCep(data){
		$('#inputCidade').val(data.localidade)
		$('#inputRua').val(data.logradouro)
		$('#inputBairro').val(data.bairro)
		$('#inputEstado').val(data.uf)
	}


}