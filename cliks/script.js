function changeTextOnClick() {
  const button = document.getElementById("myButton");
  const paragraph = document.getElementById("myParagraph");

  const originalText = paragraph.textContent;
  const changedText = "The text has been changed!";

  button.addEventListener("click", () => {
    paragraph.textContent =
      paragraph.textContent === originalText ? changedText : originalText;
  });
}
changeTextOnClick();
