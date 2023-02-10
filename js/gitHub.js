document.getElementById("btn-update").addEventListener("click", function () {
  const inputUpdate = document.getElementById("input-update");
  const inputText = inputUpdate.value;

  const TextUpdate = document.getElementById("text-remove");

  TextUpdate.innerText = inputText;
  TextUpdate.style.display = "block";
  inputUpdate.value = "";
});

// btn display none
document.getElementById("btn-delete").addEventListener("click", function () {
  const textRemove = document.getElementById("text-remove");
  textRemove.style.display = "none";
});

//   input text confirm

document.getElementById("input-text").addEventListener("keyup", function (event) {
  // input keyup type character
  const text = event.target.value;

  // btn
  const btnConfirm = document.getElementById("btn-delete");

  if (text === "delete") {
    btnConfirm.removeAttribute("disabled");
  } else {
    btnConfirm.setAttribute("disabled", true);
  }
});
