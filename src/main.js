const content = document.querySelector(".content")
const boton = document.querySelector('#button');
const form = document.querySelector('#form');
const inputEmail = document.querySelector("#email");
const labelEmail = document.querySelector("#labelEmail");
const sectionFirst = document.querySelector('#firstMessege');
const divSectTwo = document.querySelector("#startMessage");

//create structure of section two: Thanks for subscribing!
const contentSuccess = () => {
    const divSuccess = document.createElement('div');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const inputDimiss = document.createElement('input');

    divSuccess.classList.add("success", "contentSucces")
    img.src = `../assets/images/icon-success.svg`;
    h2.textContent = "Thanks for subscribing!";
    p.innerHTML = `A confirmation email has been sent to <b>ash@loremcompany.com.</b>
    Please open it and click the button inside to confirm your subscription.`;
    inputDimiss.classList.add("btn");
    inputDimiss.type = "button";
    inputDimiss.value = "Dismiss message";
    inputDimiss.id = "dimissReturn";

    divSuccess.append(img,h2,p,inputDimiss);
    divSectTwo.appendChild(divSuccess);

    inputDimiss.addEventListener("click", tradeIn)
}

//listening the submit form section one: Stay updated!
form.addEventListener('submit', changeColor)

function changeColor (event) {
    const valiudEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if(valiudEmail.test(inputEmail.value)) {
        console.log("send");
        event.preventDefault();
        console.log(event.target[0].value);
        sectionFirst.classList.add('disable');
        contentSuccess()
    } else {
        event.preventDefault();
        console.log("no send");
        inputEmail.classList.add("invalid-input")
        labelEmail.classList.add("labelEmail")
    }
}

const tradeIn = () => {
    console.log("Comen back friend!")
    divSectTwo.innerHTML = "";
    location.reload();
}