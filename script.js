const calcular = document.getElementById("calcular");

function imc () {
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if (nome != '' && altura != '' && peso != '') {

        const valorIMC = (peso / (altura*altura)).toFixed(2);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = "Você está abaixo do peso ideal.";
        } else if (valorIMC  < 25) {
            classificacao = "Você está com um peso normal.";
        } else if (valorIMC < 30) {
            classificacao = "Você está com sobrepeso.";
        } else if (valorIMC < 35) {
            classificacao = "Você está com obesidade grau 1.";
        } else if (valorIMC < 40) {
            classificacao = "Você está com obesidade grau 2.";
        } else {
            classificacao = "Você está com obesidade grau 3.";
        }

        resultado.textContent = `${nome}, o valor do seu IMC é igual a ${valorIMC}. ${classificacao}`;

    } else {
        resultado.textContent = "Por favor, preencha todos os campos.";
    }
    
    resultado.classList.remove("fade-in"); //remoção para reiniciar a animação
    void resultado.offsetWidth; //reset da animação
    resultado.classList.add("fade-in"); //adicionando novamente
    
}

calcular.addEventListener("click", imc);