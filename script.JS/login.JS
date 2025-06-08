function login(event) {
    event.preventDefault();

    const newUser = document.getElementById("newUser").value.trim();
    const newPass = document.getElementById("newPass").value;

    const userData = JSON.parse(localStorage.getItem("user"));

    if (userData && newUser === userData.nome && newPass === userData.senha) {

        window.location.href = "../tela-home/home.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }

    return false;
}
