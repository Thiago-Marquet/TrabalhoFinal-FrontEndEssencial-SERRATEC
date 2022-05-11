let user = localStorage.getItem("user")

function login(user) {
    if (user) {
        document.getElementById("txtUser").innerHTML=user;
        document.getElementById("txtLogin").innerHTML="Sair";
    } else {
        document.getElementById("txtLogin").innerHTML="Login";
    }
}

login(user)