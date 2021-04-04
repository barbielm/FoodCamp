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

}

