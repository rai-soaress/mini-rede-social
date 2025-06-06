function cadastro(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("password").value;

   
    if (nome.length < 3) {
        alert("O nome precisa ter mais de 3 caracteres!");
        document.getElementById("nome").focus();
        return false;
    }

    
    if (senha.length < 8) {
        alert("A senha precisa ter no mínimo 8 caracteres!");
        document.getElementById("password").value = "";
        document.getElementById("password").focus();
        return false;
    }

    
    const usuario = { nome, email, senha };
    localStorage.setItem("user", JSON.stringify(usuario));
    alert("Cadastro realizado com sucesso!");
    window.location.replace("/tela-de-login/index.html");
    return true;
}
