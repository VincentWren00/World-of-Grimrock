const button = document.querySelector(`button`);
const gate = document.querySelector(`#gate`);
const questionBox = document.querySelector(`questionBox`)

button.addEventListener(`click`, () => {
    button.remove;
    gate.style.opacity = 0;
    questionBox.opacity = 0;
    setTimeout(() => {
        gate.remove();
        questionBox.remove();
    }, 3000);
});