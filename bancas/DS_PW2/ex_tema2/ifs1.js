// Valor atribuído à variável mensagem: “Pode passar”
semaforo = "verde";

if (semaforo == "verde") {
    mensagem = "Pode passar";
}

// Valor atribuído à variável mensagem: “Pare”
semaforo = "vermelho";

if (semaforo == "verde") {
    mensagem = "Pode passar";
} else {
    mensagem = "Pare";
}

// Valor atribuído à variável mensagem: “Atenção”
semaforo = "amarelo";

if (semaforo == "verde") {
    mensagem = "Pode passar";
} else if (semaforo == "vermelho") {
    mensagem = "Pare";
} else {
    mensagem = "Atenção";
}

// Valor impresso no console: “Usuário autenticado”
username = "usuario123";
password = "123456";

if (username == "usuario123" && password == "123456") {
    console.log("Usuário autenticado");
} else {
    console.log("Login e/ou senha incorrretos");
}

// Valor impresso no console: “CPF válido”
cpf = "123.456.678.01";

if (cpf.length == 14) {
    console.log("CPF válido");
} else {
    console.log("CPF inválido");
}

// Usuário direcionado para a página: “homejovem.html”
idade = "16";

if (idade >= 18) {
    window.location.href = "homeprincipal.html";
} else if (idade < 18 && idade >= 15) {
    window.location.href = "homejovem.html";
} else {
    window.location.href = "homeinfantil.html";
}