function login() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
  
    if (usuario === "admin" && senha === "1234") {
      alert("Login bem-sucedido!");
    } else {
      alert("Usuário ou senha incorretos.");
    }
  }
  