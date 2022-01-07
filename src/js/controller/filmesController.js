class FilmesController{
  
	pegaFilmes() {
		const filmesModel = new FilmesModel();

		const url = 'http://www.omdbapi.com/?apikey=8add9ccd&i=tt1160419'

		filmesModel.pegaFilmes(url, (data) => console.log(data))
		console.log('ok boss');
	}

}