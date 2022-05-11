const btnLogin = document.querySelector("#btn-login")
const email = document.querySelector("#email")
const pass = document.querySelector("#pass")

const emailCadastrado = "email@email.com"
const senhaCadastrado = "senha123"
const userCadastrado = "Usuário"

const handleLogin = () =>{
    if(emailCadastrado == email.value && senhaCadastrado == pass.value){
        window.location.href = "index.html"
        localStorage.setItem("user", userCadastrado)
    }
    else{
        alert("Login ou senha inválidos")
    }

}
btnLogin.addEventListener('click',handleLogin);

localStorage.removeItem("user")


