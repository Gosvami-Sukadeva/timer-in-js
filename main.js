const addSec = (start = 0) => {
    let number = start;
    // document.body.textContent = `${number} sekund`;
    const timer = () => {
        number++;
        document.body.textContent = `${number} sekund`;
    }
    return timer;
}
const progres = addSec();
setInterval(progres, 1000);