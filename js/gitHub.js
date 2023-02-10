document.getElementById("btn-update").addEventListener("click", function () {
  //  input get
  const inputUpdate = document.getElementById("input-update");
  const inputText = inputUpdate.value;

  //   text <p> get
  const TextUpdate = document.getElementById("text-remove");

  //    set <p> new value input
  TextUpdate.innerText = inputText;
  //   show display:none
  TextUpdate.style.display = "block";
  //   clear text
  inputUpdate.value = "";
});
// ====================================
// btn display none
document.getElementById("btn-delete").addEventListener("click", function () {
  // input text clear delete
  const inputText = document.getElementById("input-delete");

  //   <p>text remove</p>
  const textRemove = document.getElementById("text-remove");
  textRemove.style.display = "none";
  inputText.value = "";
});

//   input text confirm

document.getElementById("input-delete").addEventListener("keyup", function (event) {
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
