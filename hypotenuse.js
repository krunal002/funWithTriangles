const inputSide = document.querySelectorAll(".sides");
const checkBtn = document.querySelector("#check-hypotenuse");
const output = document.querySelector("#output");

checkBtn.addEventListener('click', calculateHypotenuse)

function calculateHypotenuse(){
    let sumOfSquareOfSides = calSumOfSquareOfSides(Number(inputSide[0].value), Number(inputSide[1].value));
    let hypotenuse = Math.sqrt(sumOfSquareOfSides);
    output.innerText = "The length of Hypotenuse is "+hypotenuse.toFixed(4);
}

function calSumOfSquareOfSides(a,b){
    var sum = a*a + b*b
    return sum;
}