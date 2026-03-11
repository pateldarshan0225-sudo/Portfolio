document.addEventListener("DOMContentLoaded", () => {

const roles = [
"Web Developer",
"Constant Learner",
"Sharp Coder"
];

let roleIndex = 0;
let charIndex = 0;
let typing = document.querySelector(".typing");

function type(){

if(charIndex < roles[roleIndex].length){

typing.textContent += roles[roleIndex].charAt(charIndex);
charIndex++;

setTimeout(type,100);

}

else{

setTimeout(erase,2000);

}

}

function erase(){

if(charIndex > 0){

typing.textContent = roles[roleIndex].substring(0,charIndex-1);
charIndex--;

setTimeout(erase,50);

}

else{

roleIndex++;

if(roleIndex >= roles.length){

roleIndex = 0;

}

setTimeout(type,200);

}

}

type();

});