/*function adicionar(produto){ //função para adicionar e multilicar produtos ao total
    const qtd = document.getElementById('qtd_' + produto)
    const valor = document.getElementById('valor_' + produto)
    const total = document.getElementById('total_' + produto)

    qtd.innerHTML++  //adiciona 1 a quantidade de produto
    total.innerHTML = qtd.innerHTML * valor.innerHTML
}

function retirar(produto){ //função para subtrair produtos ao total
    const qtd = document.getElementById('qtd_' + produto)
    const valor = document.getElementById('valor_' + produto)
    const total = document.getElementById('total_' + produto)

    qtd.innerHTML-- //subtrai 1 a quatidade de produto
    total.innerHTML = qtd.innerHTML * valor.innerHTML
}*/

function alterarQtd(produto, acao){ // função com a adicição e subtração dos produtos juntas
    const qtd = document.getElementById('qtd_' + produto)
    const valor = document.getElementById('valor_' + produto)
    const total = document.getElementById('total_' + produto)

    if(acao == '-' && qtd.innerHTML == 0){
        window.alert('Atenção! A quantidade não pode ser menor que 0')
    }else{
        acao == '+' ? qtd.innerHTML++ : qtd.innerHTML-- //acao== é uma condição
    const valorTotal = total.innerHTML = qtd.innerHTML * somenteNumero(valor.innerHTML)
    valor.innerHTML = formatarValor(valorTotal)
    soma() //chamando a função soma, após a soma do total de produtos
    }
}

function soma(){ //função para somar o total dos produtos
    let soma = 0
    
    for(let i =1; 1< 4; i++){
        let numero = somenteNumero(document.getElementById('total_' + 1).innerHTML)
        soma += Number(numero)

    document.getElementById('subtotal').innerHTML = formatarValor(soma)
}
}

function somenteNumero(n){
    return n.replace(/\D/g, '') //pega apenas os numeros, exluindo o cifrão
}

function formatarValor(n){
    return 'R$ ' + n.toLocaleString('pt-BR') // converte um numero para uma string
}