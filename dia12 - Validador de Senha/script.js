const passwordInput = document.getElementById("password")

const lenghtEl = document.getElementById("length")
const uppercaseEl = document.getElementById("uppercase")
const numberEl = document.getElementById("number")
const specialEl = document.getElementById("special")

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
})

function updateValidation(element, isValid){
    if(isValid  ){
        element.textContent = "🟢 " + element.textContent.slice(2)
    } else {
        element.textContent = "🔴" + element.textContent.slice(2)
    }
}