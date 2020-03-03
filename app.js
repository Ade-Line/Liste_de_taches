// DOM - Document Object Model

// Définir l'interface

const form = document.querySelector('#course-form')
,    listeTache = document.querySelector('.collection')
,    supprimerListe = document.querySelector('.supprimer-course')
,    contenuTache = document.querySelector('#contenuTache')
,    filter = document.querySelector('#filter');


// Application
maListedeTache()

function maListedeTache() {
    //Ajouter un évènement
    form.addEventListener('submit', ajouterUneTache);

    //Supprimer une tâche
    listeTache.addEventListener('click', supprimerUneTache)

    //Nettoyer la liste de tâche
    supprimerListe.addEventListener('click', nettoyerLaListe)

    //Filtrer les tâches
    filter.addEventListener('keyup', filtrerLesTaches)
}

// Ajouter une tâche
function ajouterUneTache(e) {
    if(contenuTache.value === '') {
        alert ('Ajouter une tâche')
    }

    // Ajouter une balise
    const li = document.createElement('li');

    // Ajouter une class dans le <li>
    li.className = "collection-item";

    //Relier le contenu du formulaire dans <li>
    li.appendChild(document.createTextNode(contenuTache.value));

    // Créer le lien <a>
    const link = document.createElement('a');

    // Ajouter une classe à <a>
    link.className = 'delete-item secondary-content';

    // Ajouter l'icône
    link.innerHTML = '<ion-icon name="close-circle"></ion-icon>';

    // Relier <a> dans le <li>
    li.appendChild(link);

    // Relier <li> à <ul>
    listeTache.appendChild(li);

    contenuTache.value = ''
     
    e.preventDefault()
}

// Supprimer une tâche
function supprimerUneTache(e) {
    if (e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Voulez-vous vraiement supprimer ?'))
        e.target.parentElement.parentElement.remove();        
    }
    
}

// Nettoyer la liste de tâche
function nettoyerLaListe(){
    listeTache.innerHTML = ''
}

// filtrer
function filtrerLesTaches(e) {
    const contenuClavier = e.target.value.toLowerCase()

    document.querySelectorAll('.collection-item').forEach(
        function(tache) {
            const motCle = tache.firstChild.textContent;
            if(motCle.toLocaleLowerCase().indexOf(contenuClavier) != -1) {
                tache.getElementsByClassName.display = 'block'
                } else {
                    tache.style.display = 'none'
                }
            }
        
    );
    console.log(contenuClavier);
    
}