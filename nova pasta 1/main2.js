// uma loja online cobra frete com base na distâmcia até o cliente 
// elabore uma função que pergunte:
//a distância (em km) até o endereço do cliente
// o peso de encomenda (em kg)
// e aplique as seguintes regas:
// se a distância for até 100 km, o frete base é $10,00; senão, é R$ 20.00
// para cada quilo acima de 5kg,cobra-se R$ 2,00 adicionais
// ao final exiba o valo total do frete

function calcular frete
    const distancia = Number(document.getElementById("distancia").value);
    const peso = Number(document.getElementById("peso").value);

    let frete = distancia <= 100 ? 10 : 20;

    if (peso > 5) {
        frete += (peso - 5) * 2;
    }

    document.getElementById("resultado").textContent =
        `Valor do frete: R$ ${frete.toFixed(2)}`;
});
