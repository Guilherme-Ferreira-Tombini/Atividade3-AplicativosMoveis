window.onload = () =>{
    "use strict"
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

calculaPrecoReal = () =>{
    const cDolar = document.getElementById('cDolar').value; 
    const cGuarani = document.getElementById('cGuarani').value;
    const preco = document.getElementById('preco').value;
    const opcao = document.getElementById('moeda').value;

    let resultado = -1; //indicar que não foi preenchido alguma input de forma correta

    if(opcao == "dolar"){
        resultado = cDolar * preco;
    } else if(opcao == "guarani"){
        resultado = cGuarani * preco;
    }

    if(resultado > 0){
        document.getElementById('resultado').innerHTML = "R$" + resultado;
    } else {
        document.getElementById('resultado').innerHTML = "Preencha a cotação";
    }
}

limparCampos = () =>{
    const cDolar = document.getElementById('cDolar'); 
    const cGuarani = document.getElementById('cGuarani');
    const preco = document.getElementById('preco');
    cDolar.value="";
    cGuarani.value="";
    preco.value="";
}
