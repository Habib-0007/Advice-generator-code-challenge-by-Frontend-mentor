let generateBtn = document.querySelector(".generateBtn");
let adviceNo = document.querySelector(".advice-no");
let advice = document.querySelector(".advice");

generateBtn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
  .then(res => res.json())
  .then(data => {
      adviceNo.innerText = `ADVICE #${data.slip.id}`;
      advice.innerHTML = `&ldquo;${data.slip.advice}&rdquo;`;
      })
});