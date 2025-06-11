const passwordInput = document.getElementById("password")
const togglePassword = document.getElementById("toggle-password")

const lenghtEl = document.getElementById("length")
const uppercaseEl = document.getElementById("uppercase")
const numberEl = document.getElementById("number")
const specialEl = document.getElementById("special")
const strengthEl = document.getElementById("strength");

togglePassword.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password"
    passwordInput.type = type
    togglePassword.textContent = type === "password" ? "👁️" : "🙈"
})

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value

    //critérios
    const hasLength = password.length >=8
    const hasUppercase = /[A-Z]/.test(password)
    const hasNumber = /[0-9]/.test(password)
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password)

    updateValidation(lenghtEl, hasLength)
    updateValidation(uppercaseEl, hasUppercase)
    updateValidation(numberEl, hasNumber)
    updateValidation(specialEl, hasSpecial)
    updateStrength(hasLength, hasUppercase, hasNumber, hasSpecial)
})

function updateValidation(element, isValid){
    element.textContent = (isValid ? "🟢" : "🔴") + element.textContent.slice(2)
}

function updateStrength(hasLength, hasUppercase, hasNumber, hasSpecial) {
    const score = [hasLength, hasUppercase, hasNumber, hasSpecial].filter(Boolean).length

    let strengthText = ""
    let color = ""

    switch(score){
        case 0:
        case 1:
            strengthText = "Senha fraca"
            color = "red"
            break
        case 2:
            strengthText = "Média"
            color = "orange"
            break
        case 3:
        case 4:
            strengthText = "Forte"
            color = "green"
            break
    }

    strengthEl.textContent = `Força: ${strengthText}`
    strengthEl.style.color = color
}