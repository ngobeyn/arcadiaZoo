const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");
const formSignin = document.getElementById("formSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
    let dataForm = new FormData(formSignin);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "username": dataForm.get("email"),
        "password": dataForm.get("password")
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(apiUrl+"login", requestOptions)
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            mailInput.classList.add("is-invalid");
            passwordInput.classList.add("is-invalid");
        }
    })
    .then(result => {
        const token = result.apiToken;
        const roleUser = result.roleUser;

        setToken(token);

        // Place le rôle de l'utilisateur en cookie
        setCookie("role", roleUser, 7);

        // Vérifie immédiatement la valeur du cookie
        const roleCookie = getCookie("role");
        if (roleCookie === roleUser) {
            window.location.replace("/");
        } else {
            console.error("Role was not correctly stored in the cookie.");
        }
    })
    .catch(error => console.log('error', error));
}