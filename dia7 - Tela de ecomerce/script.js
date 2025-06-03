const price = document.getElementById("price")

const prices = {
    p: 29.90,
    m: 39.90,
    g: 49.90
}

document.querySelectorAll(".option").forEach(button => {
    button.addEventListener("click", () => {
        const size = button.dataset.size
        price.textContent = `Preço: R$ ${prices[size].toFixed(2)}`
    })
})