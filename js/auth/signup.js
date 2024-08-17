
const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const selectRole = document.getElementById("RoleSelect");
const btnCreateUser = document.getElementById("btn-createUser");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");

inputNom.addEventListener("keyup", validateForm); 
inputPrenom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
selectRole.addEventListener("change", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);


// Function permettant de valider l'ensemble du formulaire
function validateForm(){
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const mailOk = validateMail(inputMail);
    const roleOk = validateSelect(selectRole);
    const passwordOk = validatePassword(inputPassword);
    const passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidationPassword);

// Activation du bouton de validation du formulaire seulement si les champs requis sont corrects
    if(nomOk && prenomOk && mailOk && roleOk && passwordOk && passwordConfirmOk){
        btnCreateUser.disabled = false;
    }
    else {
        btnCreateUser.disabled = true;
    }
}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateMail(input){
    // Définir le Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateSelect(select){
    if(select.value != '' && select.value != 'Sélectionner un Rôle'){
        select.classList.add("is-valid");
        select.classList.remove("is-invalid");
        return true; 
    }
    else{
        select.classList.remove("is-valid");
        select.classList.add("is-invalid");
        return false;
    }
}

function validatePassword(input){
    // Définir le Regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateConfirmationPassword(inputPwd, inputConfirmPwd){
    if(inputPwd.value == inputConfirmPwd.value){
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    }
    else{
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.classList.remove("is-valid");
        return false;
    }
}

function CreateUser() {
    const dataForm = new FormData(formCreateUser);
    
    const raw = JSON.stringify({
        "firstname": dataForm.get("Prenom"),
        "lastname": dataForm.get("Nom"),
        "email": dataForm.get("Email"),
        "password": dataForm.get("Password"),
        "roleUser": dataForm.get("RoleUser")
    });

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: raw,
        redirect: "follow"
    };

    fetch(apiUrl + "registration", requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.text().then(text => {
                    console.error('Erreur serveur:', text);
                    if (text.includes('Duplicate entry')) {
                        throw new Error("L'adresse email existe déjà.");
                    } else {
                        throw new Error("Erreur lors de la création de l'utilisateur.");
                    }
                });
            }
        })
        .then(result => {
            console.log('Résultat reçu:', result);
            alert("L'utilisateur a bien été créé.");
            window.location.href = "/account-adm";
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert('Une erreur est survenue : ' + error.message);
        });
}