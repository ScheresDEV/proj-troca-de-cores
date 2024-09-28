//function
 /*1 Quero Aprender Lógica de Programação*/

    /*[] saber quando o botão foi clicado
     [] quem eu tenho que trocar a cor
    []Trocar a Cor do Body*/

    /*2 []Saber que o botão foi clicado
[]Saber onde aplicar a nova cor
[]Gerar uma cor aleatória
[]Colocar no fundo a cor gerada*/

/*3 [] Saber quem é esse input
[] Pegar o valor que tem dentro dele
[] Colocar no fundo a cor digitada no input*/

function  trocaCor(cor) {  
    document.body.style.backgroundImage = 'none'
                     
    document.body.style.backgroundColor = cor
}

function corAleatoria(){
    const red =  Math.floor(Math.random() * 255)
    const green =  Math.floor(Math.random() * 255)
    const blue =  Math.floor(Math.random() * 255) /* Math.random tras um numero aleatorio a constante*/
    
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})` /* `` Template Strings*/ /* ${}variavel de cor*/
    
}

function aplicaCorPersonalizada() {
   const corInput= document.querySelector('.input-cor').value
   trocaCor(corInput)
}

function escolherimagem(imagem) {
    const reader = new FileReader()
    reader.onload= function (evento) {
        const urlImagem = evento.target.result
        document.body.style.backgroundImage = `url('${urlImagem}')`

    }

    reader.readAsDataURL(imagem)
}

