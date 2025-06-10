const filterButtons = document.querySelectorAll('.filter-btn')
const items = document.querySelectorAll('.galeria .item')

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter

        items.forEach(item => {
            if(filter === 'all' || item.classList.contains(filter)){
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    })
})