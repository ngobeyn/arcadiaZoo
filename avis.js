const pseudo = document.getElementById("pseudo");
const commentaire = document.getElementById("commentaire");
const avisForm = document.getElementById("avisForm");
const btnAvisSubmit = document.getElementById("btn-avisSubmit");

pseudo.addEventListener("keyup", validateForm); 
commentaire.addEventListener("keyup", validateForm);


avisForm.addEventListener("submit", function(event) {
    event.preventDefault();
    avisSubmit();
});

function validateForm(){
    const pseudoOk = validateRequired(pseudo);
    const commentaireOk = validateRequired(commentaire);

    if(pseudoOk && commentaireOk){
        btnAvisSubmit.disabled = false;
    } else {
        btnAvisSubmit.disabled = true;
    }
}

function validateRequired(input){
    if(input.value.trim() !== ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function avisSubmit() {
    const dataForm = new FormData(avisForm);

    const raw = JSON.stringify({
        "pseudo": dataForm.get("pseudo"),
        "commentaire": dataForm.get("commentaire"),
        "approuve": false
    });

    fetch(apiUrl + "createavis", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: raw
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        alert('Merci pour votre avis! Il sera publié après validation.');
        avisForm.reset();
    })
    .catch(error => console.error('Erreur:', error));
}

// Chargement des avis approuvés
chargerAvis();

function chargerAvis() {
    // Requête pour récupérer les avis approuvés
    fetch(apiUrl + 'getavis?approuve=true')
    .then(response => response.json())
    .then(avis => {
        const avisList = document.getElementById('avisList');
        avisList.innerHTML = '';
        
        avis.forEach(avisItem => {
            const avisElement = document.createElement('div');
            avisElement.classList.add('avis');
            avisElement.innerHTML = `<div class="container-avis p-4">
                                        <p class="pseudo-avis">@ ${avisItem.pseudo}</p><p class="date-visite-avis">• Publié le ${new Date(avisItem.createdAt).toLocaleDateString()} •</p><hr>
                                        <p class="comment-avis">${avisItem.commentaire}</p>
                                    </div>`;
            
            avisList.appendChild(avisElement);
        });
    })
    .catch(error => console.error('Erreur:', error));
}