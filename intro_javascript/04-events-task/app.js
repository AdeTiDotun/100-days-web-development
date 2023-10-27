
let inputElement = document.querySelector('input');

function updateInputElement() {
    let eneterdText = inputElement.value;
    console.log(eneterdText);
}
inputElement.addEventListener('input', updateInputElement);