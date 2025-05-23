const notifyDivElement = document.querySelector('div.notification');
const notifySpanElement = notifyDivElement.querySelector('span');
// console.log(notifySpanElement);

// "Display notification for 3 seconds.";
export function notification(err) {
    notifyDivElement.style.display = 'block';
    notifySpanElement.textContent = err.message;
    setTimeout(() => {
        notifyDivElement.style.display = 'none';
        notifySpanElement.textContent = 'MESSAGE';
    }, '3000');
}