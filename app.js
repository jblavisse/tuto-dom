/*
1. Ca va venir questionner le DOM (document) et rechercher 
le premier élément qui correspond au sélecteur CSS mis en paramètre
de la fonction querySelector

2. Une fois que l'élément a été trouvé (null si pas), celui-ci
est transféré dans la variable title
*/

// querySelector: le premier élément qui correspond
let title = document.querySelector("#maintitle");
console.log(title);

// querySelectorAll: tous les éléments qui correspondent
let paras = document.querySelectorAll(".para");
console.log(paras);
