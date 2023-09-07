const boton = document.querySelector('#button');
const form = document.querySelector('#form');
const inputEmail = document.querySelector("#email")
const labelEmail = document.querySelector("#labelEmail")

form.addEventListener('submit', changeColor)

function changeColor (event) {
    //console.log("lorem*fadkjsfl;kajdf;laj dslfjadslkfjadsl;kjfalkdsjf;alkdjf ;lkadsjfl;kasdjf;lkasdj;l");
    const valiudEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if(valiudEmail.test(inputEmail.value)) {
        console.log("send");
    } else {
        event.preventDefault();
        console.log("no send");
        inputEmail.classList.add("invalid-input")
        labelEmail.classList.add("labelEmail")
    }
}