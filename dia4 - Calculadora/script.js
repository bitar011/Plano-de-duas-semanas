const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const value = btn.innerText;

        if (value === "C") {
            display.value = "";
        } else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } else if (value === '.') {
            const parts = display.value.split(/[\+\-\*\/]/);
            const last = parts[parts.length - 1];
            if (!last.includes('.')) {
                display.value += value;
            }
        } else if(value === '%'){
            try{
                display.value = eval(display.value) / 100;
            } catch {
                display.value = "Error";
            }

        } else if (['+', '-', '*', '/'].includes(value)) {
            const lastChar = display.value.slice(-1);
            if (!['+', '-', '*', '/'].includes(lastChar)) {
                display.value += value;
            }
        } else {
            display.value += value;

        }


    });
});

document.addEventListener("keydown", (e) => {
    const key = e.key;

    if(!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)){
        display.value += key;
    } else if (key === 'Enter') {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        display.value = "";
    }
});

document.getElementById("toggleMode").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});