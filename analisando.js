
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista(n, l) {

    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function adicionar() {
    
     if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML= ''
    } else {
        window.alert('valor invalido ou ja encontrado na lista')
    }
    num.value='' // COMANDO PARA APAGAR O CAMPO DE TEXTO DEPOIS DE DIGITADO
    num.focus() // COMANDO PARA O MARCADOR VOLTAR PARA CAIXA DE INSERIR NUMEROS
}


function finalizar(){
        if (valores.length == 0) {
            window.alert('adicione valores antes de finalizar')
        
        } else {
                let tot = valores.length
                let maior = valores[0]
                let menor = valores[0]
                let soma = 0
                let media = 0

            for (let pos in valores){
                if(valores[pos]> maior) // VERIFICA QUAL E O MAIOR
                maior += valores[pos]
                if(valores[pos] < menor ) // VERIFICA QUAL E O MENOR
                menor = valores[pos]
                
            }
                
                media = soma / tot
                res.innerHTML = ''
                res.innerHTML += `<p> Ao todo são ${tot} numeros cadastrados. </p> ` 
                res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
                res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
                res.innerHTML += `<p> A médias dos valores informados é: ${media}.</p>`
                res.innerHTML += '<p></p>'
        }

}