const textArea = document.getElementById("input-text");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const numberCount = document.getElementById("numberCount");
const specialCharCount = document.getElementById("specialCharCount");

textArea.addEventListener("input", function () {
  const text = this.value;

  // Count words
  const words = text.trim().split(/\s+/);
  wordCount.textContent = words.length;

  // Count characters
  charCount.textContent = text.length;

  // Count numbers
  const numbers = text.match(/\d/g);
  numberCount.textContent = numbers ? numbers.length : 0;

  // Count special characters
  const specialChars = text.match(/[^\w\s]/g);
  specialCharCount.textContent = specialChars ? specialChars.length : 0;
});
