const adviceId = document.getElementById("adviceId");
const adviceText = document.getElementById("adviceText");
const diceBtn = document.getElementById("diceBtn");

async function getAdvice() {
  try {
    diceBtn.disabled = true;

    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    adviceId.textContent = data.slip.id;
    adviceText.textContent = `"${data.slip.advice}"`;

  } catch (error) {
    adviceText.textContent = "Failed to load advice. Please try again.";
  } finally {
    diceBtn.disabled = false;
  }
}

diceBtn.addEventListener("click", getAdvice);
