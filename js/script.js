// Função para adicionar um comentário a uma postagem específica
function addComment(postId) {
    const commentInput = document.getElementById(`comment-input-${postId}`);
    const commentList = document.getElementById(`comments-list-${postId}`);
    
    const commentText = commentInput.value.trim();
    if (commentText !== "") {
        const li = document.createElement("li");
        li.textContent = commentText;
        commentList.appendChild(li);
        commentInput.value = "";
    }
}
