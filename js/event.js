// option:4
const IndigoButton = document.getElementById("Make-Indigo");

IndigoButton.onclick = Indigo;

function Indigo() {
  document.body.style.background = "#6366f1";
}

// option :2 Important use Regular
function Default() {
  document.body.style.background = "#f8fafc";
}

function red() {
  document.body.style.background = "#ef4444";
}

// Method 2
document.getElementById("pink-button").addEventListener("click", function () {
  document.body.style.background = "#ec4899 ";
});

// change Default

function defaultChange() {
  document.getElementById("change-text").innerHTML = "Make Default";
}

// change text red

function redChange() {
  const changeRed = document.getElementById("change-text");
  changeRed.innerText = "You Selected Red Button";
}

// change Indigo text

document.getElementById("Make-Indigo").addEventListener("click", function () {
  const changeIndigo = document.getElementById("change-text");
  changeIndigo.innerHTML = "You Selected Indigo Button";
});

// change Pink Text

document.getElementById("pink-button").addEventListener("click", function () {
  const changePink = document.getElementById("change-text");
  changePink.innerText = "You Selected Pink Button";
});

// input change

document.getElementById("update-btn").addEventListener("click", function () {
  const inputValue = document.getElementById("input-value");
  const inputText = inputValue.value;
  const textChange = document.getElementById("text-change");
  textChange.innerText = inputText;
  textChange.style.color = "#84cc16";
  textChange.style.fontSize = "1.5rem";
  inputValue.value = "";
});

// post box

document.getElementById("btn-post").addEventListener("click", function () {
  const postBox = document.getElementById("post-box");

  const postText = postBox.value;

  const postComment = document.getElementById("post-comment");
  const pTag = document.createElement("p");
  pTag.innerText = postText;
  postComment.appendChild(pTag);
  postBox.value = "";
});
