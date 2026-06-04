const MIN = 1;
const MAX = 45;
const PICK = 6;

function getBallColor(number) {
  if (number <= 10) return "yellow";
  if (number <= 20) return "blue";
  if (number <= 30) return "red";
  if (number <= 40) return "gray";
  return "green";
}

function generateLottoNumbers() {
  const pool = Array.from({ length: MAX }, (_, i) => i + MIN);
  const numbers = [];

  for (let i = 0; i < PICK; i++) {
    const index = Math.floor(Math.random() * pool.length);
    numbers.push(pool.splice(index, 1)[0]);
  }

  return numbers.sort((a, b) => a - b);
}

function renderResults(sets) {
  const results = document.getElementById("results");
  results.innerHTML = sets
    .map(
      (numbers, index) => `
        <div class="result-row">
          <span class="row-label">${index + 1}</span>
          <div class="balls">
            ${numbers
              .map(
                (num) =>
                  `<span class="ball ${getBallColor(num)}">${num}</span>`
              )
              .join("")}
          </div>
        </div>
      `
    )
    .join("");
}

function handleGenerate() {
  const count = Number(document.getElementById("count").value);
  const sets = Array.from({ length: count }, () => generateLottoNumbers());
  renderResults(sets);
}

document.getElementById("generateBtn").addEventListener("click", handleGenerate);
