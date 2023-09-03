const questionButtons = document.querySelectorAll(".question");

questionButtons.forEach((quesBtn) => {
  quesBtn.addEventListener("click", function () {
    const answer = quesBtn.nextElementSibling;

    questionButtons.forEach((btn) => {
      if (btn !== quesBtn) {
        const otherAnswer = btn.nextElementSibling;
        otherAnswer.classList.add("collapse");
        const arrow = btn.querySelector(".arrow");
        arrow.classList.remove("rotate");
      }
    });

    answer.classList.toggle("collapse");

    const arrow = quesBtn.querySelector(".arrow");
    if (answer.classList.contains("collapse")) {
      arrow.classList.remove("rotate");
    } else {
      arrow.classList.add("rotate");
    }

    // Toggle font-weight for the clicked question
    const questionText = quesBtn.querySelector(".question-text");
    if (answer.classList.contains("collapse")) {
      questionText.style.fontWeight = "normal";
    } else {
      questionText.style.fontWeight = "700";
      questionText.style.color = "hsl(238, 29%, 16%)";
    }
  });
});
