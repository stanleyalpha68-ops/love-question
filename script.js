document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn  = document.getElementById("noBtn");
    const questionBox = document.getElementById("questionBox");
    const answerBox   = document.getElementById("answerBox");
    const buttonsArea = document.getElementById("buttonsArea");
  
    // YES button shows answer card
    yesBtn.addEventListener("click", () => {
      questionBox.classList.add("hidden");
      answerBox.classList.remove("hidden");
    });
  
    // No button moves fast but stays inside buttons area
    function moveNoNearby() {
      const areaRect = buttonsArea.getBoundingClientRect();
      const btnRect  = noBtn.getBoundingClientRect();
  
      const padding = 5;
      const maxX = areaRect.width - btnRect.width - padding;
      const maxY = areaRect.height - btnRect.height - padding;
  
      const newX = Math.random() * maxX;
      const newY = Math.random() * maxY;
  
      noBtn.style.left = `${Math.round(newX)}px`;
      noBtn.style.top  = `${Math.round(newY)}px`;
    }
  
    // Trigger move on hover, focus, click attempt & touchstart
    ["mouseover","focus","click","touchstart"].forEach(evt => {
      noBtn.addEventListener(evt, e => {
        e.preventDefault();
        moveNoNearby();
      });
    });
  });
  