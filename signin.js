const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
    // Ici il faudra appeler l'API

    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
        alert("Vous êtes connecté");

        // Il faudra récupérer le vrai token de l'API
        const token = "ssdjkdfhfdsjsfnmlksdfnsmknfdmkdjsnfdgskjnfdgskdfsjnfdlkj";
        setToken(token);
        // Place ce token en cookie

        window.location.replace("/");

    } else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}