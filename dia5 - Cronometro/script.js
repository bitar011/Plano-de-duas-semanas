let seconds = 0;
let timer = null;
let milliseconds = 0;

function updateDisplay(){
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    const msecs = String(milliseconds / 10).padStart(2, '0'); 
    document.getElementById('display').textContent = `${hrs}:${mins}:${secs}.${msecs}`;
}

document.getElementById('start').addEventListener('click', () => {
    if (timer) return;

  timer = setInterval(() => {
    milliseconds += 100;
    if (milliseconds >= 1000) {
      seconds++;
      milliseconds = 0;
    }
    updateDisplay();
  }, 100);
});

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
});



