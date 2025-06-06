
const publishBtn = document.querySelector('.publish-button');

publishBtn.addEventListener('click', () => {
    const criador = document.querySelectorAll('.post-title')[0].value.trim();
    const titulo = document.querySelectorAll('.post-title')[1].value.trim();
    const descricao = document.querySelector('.post-text').value.trim();
    const imagemInput = document.querySelector('.post-media');
    const imagem = imagemInput.files[0];

    if (!criador || !titulo || !descricao || !imagem) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    const reader = new FileReader();

    reader.onload = e => {
        const novoPost = document.createElement('div');
        novoPost.classList.add('post');
        novoPost.innerHTML = `
        <p class="user-name">${criador}</p>
        <p class="user-titulo">${titulo}</p>
        <img src="${e.target.result}" class="post-media-display" />
        <p class="post-content">${descricao}</p>
        <div class="post-actions">
            <button class="like-button">Curtir</button>
            <button class="share-button">Compartilhar</button>
        </div>
        `;
        document.querySelector('.posts-container').prepend(novoPost);
        butoes(novoPost);
    };

    reader.readAsDataURL(imagem);

    document.querySelectorAll('.post-title')[0].value = '';
    document.querySelectorAll('.post-title')[1].value = '';
    document.querySelector('.post-text').value = '';
    imagemInput.value = '';
});

function butoes(container) {
    const likeBtn = container.querySelector('.like-button');
    const shareBtn = container.querySelector('.share-button');

    likeBtn.addEventListener('click', () => {
        likeBtn.textContent = 'Curtido!';
        likeBtn.disabled = true;
    });

    shareBtn.addEventListener('click', () => {
        alert('Link copiado para a área de transferência!');
    });
}

document.querySelectorAll('.post').forEach(post => initPostButtons(post));
