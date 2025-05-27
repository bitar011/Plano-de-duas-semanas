let seconds = 0;
let timer = null;

function updateDisplay(){
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    document.getElementById('display').textContent = `${hrs}:${mins}:${secs}`;
}

document.getElementById('start').addEventListener('click', () => {
    if (timer) return;

    timer = setInterval(() => {
        seconds++;
        updateDisplay();
    }, 1000)
});

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    updateDisplay();
});