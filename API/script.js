//APLICA O TEMA SALVO//

if (localStorage.getItem("tema") ==="dark") {
    document.body.classList.add("dark");
}

//TROCA O TEMA//

function trocarTema() {
    Document.body.classList.toggle("dark");
}

if (document.bosy.classList.contains("dark")) {
    localStorage.setItem("tema, dark");
} else {
    localStorage.setItem("tema", "light");
}

//FETCH NA API LOCAL//

function buscarFrase() {
    fetch("dados.json")
        .then(res => res.json())
        .then(dados => {
            document.getElementById("frase").innerText = dados.frase; 
            console.log("Dados carregados:", dados);
        })
        .catch((erro) => { 
            console.error("Erro:", erro);
            document.getElementById("frase").innerText = "Erro ao carregar dados";
        });
}


