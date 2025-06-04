const amountInput = document.getElementById('amount')
const currencySelect = document.getElementById('currency')
const result = document.getElementById('result')

async function fetchRates() {
    const res = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL")
    const data = await res.json()
    return{
        USD: parseFloat(data.USDBRL.bid),
        EUR: parseFloat(data.EURBRL.bid),
        BTC: parseFloat(data.BTCBRL.bid)
    }
}

async function convert() {
    const amount = parseFloat(amountInput.value)
    const currency = currencySelect.value

    if(isNaN(amount) || amount <= 0 ){
        result.textContent = "Digite um valor válido."
        return
    }

    const rates = await fetchRates()
    const rate = rates[currency]
    const converted = amount / rate

    const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency
    }).format(converted)

    result.textContent = `Valor convertido: ${formatted}`
}

amountInput.addEventListener("input", convert)
currencySelect.addEventListener("change", convert)
