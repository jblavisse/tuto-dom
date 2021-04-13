
function changeMainTitle() {
    let maintitle = document.querySelector("#titleone");
    console.log(maintitle);
    maintitle.classList.toggle("maintitle");
}

let btn = document.querySelector("#enableBadassTitle");
console.log(btn);

btn.addEventListener("click", changeMainTitle);


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