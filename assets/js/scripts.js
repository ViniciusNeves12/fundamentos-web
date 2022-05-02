let nome = window.document.getElementById('nome');
let email = window.document.querySelector('#email');
let assunto = window.document.querySelector('#assunto');

nome.style.width = '100%';
email.style.width = '100%';
assunto.style.width = '100%';

function validaNome(){
    let txtNome = document.querySelector("#txtNome")

    if(nome.value.length < 3){
        txtNome.innerHTML= "Nome inválido";
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML= "Nome válido";
        txtNome.style.color = 'green'
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@')== -1 || email.value.indexOf('.')== -1){
        txtEmail.innerHTML= "Email inválido";
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML= "Email válido";
        txtEmail.style.color = 'green'
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if(txtAssunto.value.length >= 100){
        txtAssunto.innerHTML= "Texto é muito grande, digite no maximo 100 caracteres";
        txtAssunto.style.color = 'red'
        
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'

    }
}
