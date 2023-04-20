const form = document.getElementById("area");
const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");
const mensagem = document.getElementById("msg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (parseInt(campoB.value) >= parseInt(campoA.value)) {
    mensagem.innerText = "Formulário válido!";
    mensagem.style.color = "green";
    } else {
    mensagem.innerText =
        "Formulário inválido! O número B deve ser maior que o número A.";
    mensagem.style.color = "red";
    }
});
