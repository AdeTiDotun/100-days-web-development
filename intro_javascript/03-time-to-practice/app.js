let paragraphElement = document.querySelector('p');


function changeElement() {
  paragraphElement.textContent = 'Clicked';
  console.log ('clicked');
}

paragraphElement.addEventListener ('click', changeElement);

