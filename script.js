

// Seleção de Elementos ------------------------------------------------------------------------------------------
const geradorNumerosButton = document.querySelector("#gerar-numeros");
const numeroGeradoElement = document.querySelector("#numero-gerado");





// Funções -------------------------------------------------------------------------------------------------------

const getNumber1 = () => {
    return Math.floor(Math.random()*100).toString();
}
const getNumber2 = () => {
    return Math.floor(Math.random()*100).toString();
}

const getNumber3 = () => {
    return Math.floor(Math.random()*100).toString();
}

const getNumber4 = () => {
    return Math.floor(Math.random()*100).toString();
}
const getNumber5 = () => {
    return Math.floor(Math.random()*100).toString();
}

const getNumber6 = () => {
    return Math.floor(Math.random()*100).toString();
}


const generatePassword = (getNumber1, getNumber2, getNumber3, getNumber4, getNumber5, getNumber6) => {
    let password = ""

    const passwordLength = 16

    const generators = [
        getNumber1, 
        getNumber2, 
        getNumber3, 
        getNumber4, 
        getNumber5, 
        getNumber6,
        
    ]

    for(i = 0; i < passwordLength; i = i + 4) {
        generators.forEach(() => {

            const randomValue = generators[Math.floor(Math.random() * generators.length)]();

            password += randomValue + ' ';
        });
    }

    password = password.slice(0, passwordLength)

    numeroGeradoElement.style.display = "block";
    numeroGeradoElement.querySelector("h4").innerText = password;
}




// Eventos --------------------------------------------------------------------------------------------------------

geradorNumerosButton.addEventListener("click", () => {
    generatePassword(
        getNumber1, 
        getNumber2, 
        getNumber3, 
        getNumber4, 
        getNumber5, 
        getNumber6,)
})