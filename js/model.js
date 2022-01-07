$('#cadastrar').on('click', login);
$('#criarConta').on('click', login);
$('#contato').on('click', contato);
$('#sair').on('click', paginaPrincipal)
function quemSomos(){
    window.location.href = './quemsomos.html';
}

function cadastro(){
    window.location.href = './cadastro.html';
}

function login(){
    window.location.href = './login.html';
}

function contato(){
    window.location.href = './contato.html';
}

function paginaPrincipal(){
    window.location.href ='./home.html';
}