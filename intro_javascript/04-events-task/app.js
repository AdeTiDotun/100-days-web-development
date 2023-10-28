
let inputElement = document.querySelector('input');
let inputChars = document.getElementById('remainingChars');


function updateInputElement() {
    let eneterdText = inputElement.value;
    let textLength = eneterdText.length;
   

    inputChars.textContent = 60 - textLength;
}

inputElement.addEventListener('input', updateInputElement);