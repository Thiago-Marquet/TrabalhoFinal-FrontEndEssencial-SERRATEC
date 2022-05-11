const btnForm = document.querySelector("#btn-form");
const nome = document.querySelector("#form-name")
const email = document.querySelector("#form-email")
const menssagem = document.querySelector("#form-message");


const alertForm = () =>{
    alert(nome.value + ", o seu formulário foi enviado com sucesso!");
    console.log(nome.value);
    console.log(email.value);
    console.log(menssagem.value);
}

btnForm.addEventListener('click', alertForm);