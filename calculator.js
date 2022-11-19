let num1=prompt("enter a number:");
let num2=prompt("enter a number:");
document.getElementById("one").textContent=num1;
document.getElementById("two").textContent=num2;
function add(){
    let sum=num1+num2;
    document.getElementById('three').textContent=sum;
}
function sub(){
    let diff=num1-num2;
    document.getElementById('three').textContent=diff;
}
function div(){
    let divide=num1/num2;
    document.getElementById('three').textContent=divide;
}
function multi(){
    let product=num1*num2;
    document.getElementById('three').textContent=product;
}
function clear(){
    document.getElementById('three').innerText="0";
}
