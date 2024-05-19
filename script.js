"use strict";
const passs1 = document.getElementById("password-1");
const passs2 = document.getElementById("password-2");
function renderValidation(ev) {
  ev.preventDefault();
  const pass1 = document.getElementById("password-1").value;
  const pass2 = document.getElementById("password-2").value;
  const msg = document.getElementById("pass-error");
  const cor = document.getElementById("pass-cor");
  if (pass1 !== pass2) {
    msg.textContent = "Passwords do not match!";
    cor.textContent = "";
    passs1.classList.remove("error");
    passs2.classList.remove("error");
    passs1.classList.remove("correct");
    passs2.classList.remove("correct");
    passs1.classList.add("error");
    passs2.classList.add("error");
  } else {
    cor.textContent = "Passwords match!";
    msg.textContent = "";
    passs1.classList.remove("error");
    passs2.classList.remove("error");
    passs1.classList.remove("correct");
    passs2.classList.remove("correct");
    passs1.classList.add("correct");
    passs2.classList.add("correct");
  }
}

passs1.addEventListener("keyup", renderValidation);
passs2.addEventListener("keyup", renderValidation);
