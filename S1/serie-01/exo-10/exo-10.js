let x =parseInt(prompt("x ?"));
let y = parseInt(prompt("y ?"));

let paragraphe = document.querySelector("#p1");

if (x>y){
    paragraphe.innerHTML = "x est plus grand que y";
}
else{
    paragraphe.innerHTML = "y est égale ou plus grand que x";

}
