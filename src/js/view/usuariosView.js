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

	validaMin(bool) {
		const senhaminusculas = $('#senhaletralower')
		if (bool) {
			senhaminusculas.removeClass("invalido")
            senhaminusculas.addClass("valido")
		} else {
			senhaminusculas.removeClass("valido");
            senhaminusculas.addClass("invalido");
		}
	}

	validaMai(bool) {
		const senhamaiusculas = $('#senhaletracaps')
		if (bool) {
			senhamaiusculas.removeClass("invalido")
            senhamaiusculas.addClass("valido")
		} else {
			senhamaiusculas.removeClass("valido");
            senhamaiusculas.addClass("invalido");
		}
	}


	validaNum(bool) {
		const senhanumeros = $('#senhanumero')
		if (bool) {
			senhanumeros.removeClass("invalido")
            senhanumeros.addClass("valido")
		} else {
			senhanumeros.removeClass("valido");
            senhanumeros.addClass("invalido");
		}
	}


	validaLen(bool) {
		const senhatamanho = $('#senhatamanho')
		if (bool) {
			senhatamanho.removeClass("invalido")
            senhatamanho.addClass("valido")
		} else {
			senhatamanho.removeClass("valido");
            senhatamanho.addClass("invalido");
		}
	}

	validaConfirma(bool) {
		const naoConfereMsg = $('#senhaNaoConfere')
		if (bool) {
			naoConfereMsg.hide()
		} else {
            naoConfereMsg.show();
		}	
	}

}