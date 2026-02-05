function showMessage() {
  const name = document.getElementById("nameInput").value;
  const output = document.getElementById("output");

  if (name.trim() === "") {
    output.textContent = "Please enter your name.";
    output.style.color = "red";
  } else {
    output.textContent = `Hello ${name}, thanks for visiting!`;
    output.style.color = "green";
  }
}
