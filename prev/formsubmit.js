// Au click du bouton, il se passe quelque chose.

/*
Ce quelque chose c'est
3a. Récupérer le texte qui est dans mon élément de formulaire
3b. Modifier le titre pour incorporer ce texte

/*
Dès qu'on veut un événement associé à mon élément
1. On récupère l'élément HTML
2. On vient lui déposer un addEventListener
3. On crée la fonction qui sera appelé lors du addEventListener
*/

// 3. Je crée la fonction qui sera appelé
function updateNameInTitle() {
    // Voir si mon click fonctionne bien
    console.log("coucouuuuuuuu");

    // 3.a Récupérer mon élément de champ de texte
    let nameElem = document.querySelector("#name");
    // Vérifie dans la console que j'ai bien récupéré l'élément
    console.log(nameElem);
    // Stocker dans une variable la valeur du champ de texte
    let nameText = nameElem.value;

    // 3.b Récupérer mon élement de titre
    let title = document.querySelector("#title");
    // Modifier le titre avec la valeur du champ de texte
    title.innerHTML = "Bonjour..." + nameText;

    // Réinitialiser le champ de formulaire
    nameElem.value = "";
}


// 1. Récupérer l'élément bouton
let myButton = document.querySelector("#btn");
// Vérifier si mon élément boutton est bien récupéré
console.log(myButton);

// 2. J'ai mis en place un écouteur d'événément au click sur mon bouton
myButton.addEventListener("click", updateNameInTitle)