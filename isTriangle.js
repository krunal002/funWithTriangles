const angle = document.querySelectorAll(".angle-input");
const checkTriangle = document.getElementById("#check-triangle");
const output = document.querySelector("#output");

checkTriangle = addEventListener("click", isTriangle);

function isTriangle(){
    var sumOfAngle = calSumOfAngle(Number(angle[0].value), Number(angle[1].value), Number(angle[2].value));
    if(sumOfAngle === 180){
        output.innerText = "Yeah... Angles form a Triangle!"
    }
    else{
        output.innerText = "You don't have Triangle!";
    }
}

function calSumOfAngle(angle1, angle2, angle3){
    var sum = angle1 + angle2 + angle3;
    return sum;
}
