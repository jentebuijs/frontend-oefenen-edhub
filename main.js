

const userNameField = document.getElementById("gebruikersnaam");
const userNameError = document.getElementById("gebruikersnaamErrror");

function handleUserName(e) {
    if (e.target.value.includes("@")) {
        userNameError.textContent = "Gebruikersnaam mag geen @ bevatten";
    } else {
        userNameError.textContent = " ";
    }
}

userNameField.addEventListener("keyup", handleUserName);

const passWordField = document.getElementById("wachtwoord");
const passWordError = document.getElementById("wachtwoordError");

function handlePassWord(e) {
    if (e.target.value.length >= 1 && e.target.value.length < 6) {
        passWordError.textContent = "Wachtwoord is te kort, gebruik minimaal 6 tekens";
    } else {
        passWordError.textContent = " ";
    }
}

passWordField.addEventListener("keyup", handlePassWord);