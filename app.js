/*
1. Vous allez récupérer l'article qui a pour id bestart
L'afficher dans la console
*/
let bestArt = document.querySelector("#bestart");
console.log(bestArt);

/*
2. Vous allez récupérer tous les titres qui ont pour classe 
article__title
Les afficher dans la console
*/

let titles = document.querySelectorAll(".article__title");
console.log(titles);

// textContent -> Uniquement Le texte d'un élément (si il trouve des balises, il les enlève)
console.log(titles[0].textContent);

// innerHTML -> L'intégralité de ce qu'il y a dans l'élément
console.log(titles[0].innerHTML);

// Je veux venir modifier le contenu de mon élément HTML
// titles[0].innerHTML = "Youhou la famiilllllleee";


// Petit exo
// Ajouter dans l'HTML un paragraphe (id: spy) ayant pour texte "Je suis un espion"
// Faire en sorte dans mon fichier JS de modifier le texte de ce paragraphe
// Pour mettre à la place "J'ai un message caché"