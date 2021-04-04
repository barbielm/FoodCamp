let n_pratos=0;
let n_bebidas=0;
let n_sobremesas=0;

function fechar_pedido(){
    const fechar = document.querySelector(".inferior .fechar_pedido");
    if(n_pratos>0 && n_bebidas>0 && n_sobremesas>0){
        fechar.classList.add("verde");
        fechar.innerHTML = "Fechar Pedido";
    }    
}


function marcar_opcao(id, classe){
    frase = "." + classe + "s" + " " + "." + classe;
    const opcoes = document.querySelectorAll(frase);
    let check;
    for(let i=0;i<opcoes.length;i++){
        opcoes[i].classList.remove("borda-verde");   
        check = opcoes[i].querySelector(".ion-icon"); 
        check.classList.add("oculto");
    }

    const opcao = document.getElementById(id);
    opcao.classList.add("borda-verde");
    check = opcao.querySelector(".ion-icon");
    check.classList.remove("oculto");
    if(classe==="prato"){
        n_pratos++;
    }
    if(classe==="bebida"){
        n_bebidas++;
    }
    if(classe==="sobremesa"){
        n_sobremesas++;
    }
    fechar_pedido()   

}



