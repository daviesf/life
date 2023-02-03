const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const resultSection = document.getElementById("result-section");

document.getElementById("start-button").addEventListener("click", function() {
  document.getElementById("progress-section").style.display = "block";
  let progress = 0;
  document.getElementById("start-button").style.display = "none";

  const interval = setInterval(() => {
    progress += 1 / (15 * 100);
    progressBar.style.width = `${progress * 100}%`;
    progressText.innerHTML = `${Math.round(progress * 100)}%`;
    if (progress >= 1) {
      clearInterval(interval);
      progressText.innerHTML = "Processo concluído!";
      resultSection.style.display = "block";
      document.getElementById("curry").style.display = "none";
    }
  }, 15);
});
