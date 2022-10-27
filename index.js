const botao =  document.getElementById("btnClique")

botao.addEventListener("click", fnSoma)

function getData() {
    const data = new Date()
    const dia = String(data.getDate()).padStart(2, '0') // vai virar 01, e nao só 1
    const mes = String(data.getMonth() + 1).padStart(2, '0')
    const ano = data.getFullYear()
    
    const dataAtual = `${dia}/${mes}/${ano}`

    return dataAtual
}

function fnSoma() {
    const data = getData()

    alert(`a data de hoje é ${data}`)

    return
}