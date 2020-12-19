const startBtn = document.getElementById("start-btn");
const two = document.querySelector(".two");
const helpTextHeading = document.getElementById("help-text-heading");
const helpTextContent = document.getElementById("help-text-content");
const firstArrow = document.querySelector(".first-arrow");
const thirdArrow = document.querySelector(".third-arrow");
startBtn.addEventListener("click",() => {
    two.style.display = "block";
    startBtn.innerHTML = "Best of Luck";
    helpTextHeading.innerHTML = "Well Done!!!";
    helpTextContent.innerHTML = "You are one step closer, we hope you achieve your dreams..";
    startBtn.disabled = "true";
    firstArrow.style.color = "red";
    firstArrow.style.transform = "rotateZ(270deg)";
    thirdArrow.style.color = "red";
    thirdArrow.style.transform = "rotateZ(270deg)";
})

