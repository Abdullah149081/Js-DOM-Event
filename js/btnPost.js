function defaultButton() {
  document.body.style.background = "#f8fafc";
}

function textDefaultText() {
  const changeText = document.getElementById("change-text");
  changeText.innerText = "Default";
  changeText.style.color = "#111827";
  const textColor = document.getElementById("post-comment");
  textColor.style.color = "#111827";
}

// Make Dark

document.getElementById("make-dark").addEventListener("click", function () {
  document.body.style.background = "#111827";

  const changeText = document.getElementById("change-text");
  changeText.innerText = "You Selected  Dark Button";
  changeText.style.color = "#f9fafb";

  const textColor = document.getElementById("post-comment");
  textColor.style.color = "#f9fafb";
});

document.getElementById("btn-post").addEventListener("click", function () {
  //   get textarea

  const PostBox = document.getElementById("post-box");

  const postText = PostBox.value;

  const PostComment = document.getElementById("post-comment");
  //   create <p>
  const pTag = document.createElement("p");
  //   value get postText
  pTag.innerText = postText;

  //   add <p> PostComment
  PostComment.appendChild(pTag);
  //   clear textarea
  PostBox.value = "";
});
