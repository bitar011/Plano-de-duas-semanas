const btn = document.querySelector(".btn");
btn.addEventListener("click", function (e) {
    e.preventDefault(); 
    alert("Mensagem enviada com sucesso!");

    document.querySelector("form").reset();
});
