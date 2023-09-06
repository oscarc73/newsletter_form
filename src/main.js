const boton = document.querySelector('button');

boton.addEventListener('click', changeColor);

function changeColor (element) {
    element.target.classList.toggle("background-color")
}