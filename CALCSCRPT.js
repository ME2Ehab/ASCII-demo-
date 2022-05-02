//declaring global variables.
let sections = document.querySelectorAll('section');
let code = document.getElementById('converter');
let buttony= document.getElementById('generate');
let result =""

//starting to make a button to generate whatever you write down.
buttony.addEventListener('click', work);
//an async functions that waits until the button gets clicked.
async function work(){
let string= code.value;
let length = string.length;
 console.log(string);
 console.log(length);
for (let i = 0; i<length; i++){
    result += i + string.charCodeAt(i) + " / ";
}
console.log(`The ASCII value is: ${result}`);
document.getElementById('do').innerHTML = result;}



