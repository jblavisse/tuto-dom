
function changeMainTitle() {
    //Récupère le titre
    let maintitle = document.querySelector("#titleone");
    // L'affiche dans la console pour voir si bien récupéré
    console.log(maintitle);
    // Ajoute (ou supprime) au titre la classe maintitle
    maintitle.classList.toggle("maintitle");
}

// Récupère le bouton qui a pour id enableBadassTitle
let btn = document.querySelector("#enableBadassTitle");
// Affiche le bouton dans la console pour voir si bien récupéré
console.log(btn);

// Ajoute un écouteur d'événement au click qui vient exécuter
// à chaque fois changeMainTitle
btn.addEventListener("click", changeMainTitle);

// Rappel
elem.innerHTML = "Truc"; // Mets "Truc" comme contenu de l'élément elem 
console.log(elemForm.value); // Affiche la valeur du champ texte


function updateTextSpy() {
    let spy = document.querySelector("#spy");
    spy.innerHTML = "<span>J'ai un message</span> pour vous...je suis...sushiman!";
    spy.classList.add("green");
}

let spy = document.querySelector("#spy");
spy.addEventListener("mouseover", updateTextSpy);

let myImg = document.querySelector("#myImg");
console.log(myImg);
console.log(myImg.src);
console.log(myImg.alt);