let n_pratos = 0
let n_bebidas = 0
let n_sobremesas = 0

let nome_prato
let nome_bebida
let nome_sobremesa

let valor_prato
let valor_bebida
let valor_sobremesa

let message = ""
let valor_total

let telefone = "5585985633070"
let nome 
let endereco





function marcar_opcao(id, classe){
    frase = "." + classe + "s" + " " + "." + classe
    const opcoes = document.querySelectorAll(frase)
    let check
    for(let i=0; i<opcoes.length; i++){
        opcoes[i].classList.remove("borda-verde")   
        check = opcoes[i].querySelector(".ion-icon") 
        check.classList.add("oculto")
    }

    const opcao = document.getElementById(id)
    opcao.classList.add("borda-verde")
    check = opcao.querySelector(".ion-icon")
    check.classList.remove("oculto")
    if(classe==="prato"){
        n_pratos++
        nome_prato = opcao.querySelector(".nome").innerHTML
        valor_prato = opcao.querySelector(".preco").innerHTML
        valor_prato = valor_prato.replace(",",".")
        valor_prato = valor_prato.slice(3,)
        valor_prato = parseFloat(valor_prato)
    }
    if(classe==="bebida"){
        n_bebidas++
        nome_bebida = opcao.querySelector(".nome").innerHTML
        valor_bebida = opcao.querySelector(".preco").innerHTML
        valor_bebida = valor_bebida.replace(",",".")
        valor_bebida = valor_bebida.slice(3,)
        valor_bebida = parseFloat(valor_bebida)
    }
    if(classe==="sobremesa"){
        n_sobremesas++
        nome_sobremesa = opcao.querySelector(".nome").innerHTML
        valor_sobremesa = opcao.querySelector(".preco").innerHTML
        valor_sobremesa = valor_sobremesa.replace(",",".")
        valor_sobremesa = valor_sobremesa.slice(3,)
        valor_sobremesa = parseFloat(valor_sobremesa)
    }
    habilitar_pedido()

}


function habilitar_pedido(){
    const habilitar = document.querySelector(".inferior .fechar_pedido")
    if(n_pratos>0 && n_bebidas>0 && n_sobremesas>0){
        valor_total = valor_prato + valor_bebida + valor_sobremesa
        valor_total = valor_total.toFixed(2)

        habilitar.classList.add("verde")
        let link = document.getElementById("texto-botao")
        link.innerText = "Fechar pedido"

        message += "Olá, gostaria de fazer o pedido:\n" + "- Prato: " + nome_prato + "\n"
        message += "- Bebida: " + nome_bebida + "\n"
        message += "- Sobremesa: " + nome_sobremesa + "\n" 
        message += "Total: R$ " + valor_total
        message = encodeURIComponent(message)
        message = "https://wa.me/" + telefone + "?text=" + message

    }    
}



function solicitacao(){
    nome = prompt("Digite o seu nome: ")
    endereco = prompt("Digite o seu endereço: ")
    message = message + encodeURIComponent("\n\n\n" + "Nome: " + nome + "\n" +"Endereço: " + endereco)
    location.replace(message)
}

