function identificaIdadeUsuario(idade) {
    if (idade >= 18 && idade < 120) {
        alert("Você é maior de idade");
    } else if (idade >= 120 || idade < 0) {
        alert("Idade inválida");
    } else {
        alert("Você é menor de idade");
    }
    if (typeof idade !== 'number') {
        alert("Idade inválida");
      }
      else {
        alert("Você é menor de idade!")
      }
    }

const idade = parseInt(prompt("Qual a sua idade?"));

identificaIdadeUsuario(idade);
function validaTextoHTML(valor) {
    if (valor >= 18 && valor < 120) {
        document.getElementById("Idade").innerText = `Sua idade é ${valor}`;
    } else {
        document.getElementById("Idade").innerText = "Valor inserido é inválido";
    }
}
