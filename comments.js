// pegar o formulário pelo id
const commentForm = document.getElementById("comment-form");

// pegar o elemento div pelo id
const commentsDiv = document.getElementById("comments");

// adicionar um event listener para o botão de envio
commentForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  // pegar os dados do formulário
  const username = commentForm.elements.username.value;
  const comment = commentForm.elements.comment.value;
  const font = commentForm.elements.font.value;
  const color = commentForm.elements.color.value;
  
  // criar um novo elemento div para o comentário
  const commentDiv = document.createElement("div");
  
  // adicionar o nome do usuário e o comentário ao elemento div
  commentDiv.innerHTML = `<p><strong>${username}</strong>: ${comment}</p>`;
  commentDiv.style.fontFamily = font;
  commentDiv.style.color = color;
  
  // adicionar o elemento div ao elemento com id "comments"
  commentsDiv.appendChild(commentDiv);
});
