class FilmesModel{
    
    geraURL() {

    }


    /**
     * 
     * @param {string} url Uma string com a URL para fazer o pedido, use geraURL.
     * @param {Function} cbSucesso Uma função de callback pra lidar com o filme recebido.
     * @param {Function} cbErro Uma callback para lidar com o erro caso dê ruim.
     */
    pegaFilmes( url, cbSucesso, cbErro ) {
        const parametros = {
            url: url,
            success: (dados) => {
                if (dados.response ===  "False") {
                    cbErro(dados);
                    return
                }

                // Dados do filme que iremos ter dentro do objeto filme.

                const dadosDoFilme = [
                    dados.imdbID,
                    dados.Title,
                    dados.Year,
                    dados.Runtime,
                    dados.Genre,
                    dados.Director,
                    dados.Writer,
                    dados.Actors,
                    dados.Plot,
                    dados.Awards,
                    dados.Poster,
                    dados.Metascore,
                    dados.imdbRating,
                ]

                // Cria uma instância da Model que vai receber o filme, passando os dados recebidos pelo pedido.
                const filme = new FilmesModel (...dadosDoFilme);

                // Faz com que ao invés do pedido devolver os dados originais, devolva um objeto filme com os dados 'organizados'
                cbSucesso(filme);

            }
        }

        // Faz o pedido GET usando Jquery passando os parametros estabelecidos acima.
        $.get(parametros);

    }

    constructor (id, titulo, ano, duracao, genero, diretor, escritor, elenco, sinopse, premios, poster, notaMeta, notaIMDB) {
        this._id = id
        this.titulo = titulo
        this.ano = ano
        this.duracao = duracao
        this.genero = genero
        this.diretor = diretor
        this.escritor = escritor
        this.elenco = elenco
        this.sinopse = sinopse
        this.premios = premios
        this.poster = poster
        this.notaMeta = notaMeta
        this.notaIMDB = notaIMDB
    }

}


