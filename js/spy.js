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
// monelement.innerHTML = "<span>Le contenu que je veux</span>";
// ex -> titles[0].innerHTML = "Youhou la famiilllllleee";


// Petit exo
// Ajouter dans l'HTML un paragraphe (id: spy) ayant pour texte "Je suis un espion"
// Faire en sorte dans mon fichier JS de modifier le texte de ce paragraphe
// Pour mettre à la place "J'ai un message caché"

function updateTextSpy() {
    let spy = document.querySelector("#spy");
    spy.innerHTML = "<span>J'ai un message</span> pour vous...je suis...sushiman!";
    spy.classList.add("green");
}

setTimeout(updateTextSpy, 3000);

console.log(spy.className);
console.log(spy.classList);

spy.classList.add("truc");
console.log(spy);

spy.classList.remove("moche");
console.log(spy);

if(spy.classList.contains("et")) {
    console.log("J'ai un et dans la classe de mon élément");
}

spy.classList.toggle("bidule");
console.log(spy);

spy.classList.toggle("bidule");
console.log(spy);