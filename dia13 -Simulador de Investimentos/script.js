const capitalInput = document.getElementById("capital")
const taxaInput = document.getElementById("taxa")
const tempoInput = document.getElementById("tempo")
const resultado = document.getElementById("resultado")
const botao = document.getElementById("simular")

botao.addEventListener("click", () => {
    const C = parseFloat(capitalInput.value)
    const i = parseFloat(taxaInput.value) / 100
    const n = parseFloat(tempoInput.value)

    if(isNaN(C) || isNaN(i) || isNaN(n)) {
        resultado.textContent = "Preencha todos os campos corretamente."
        return
    }

    const M = C * Math.pow(1 + i, n)
    resultado.textContent = `Montante:  R$ ${M.toFixed(2)}`
})