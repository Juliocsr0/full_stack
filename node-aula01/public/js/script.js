// 1. Obtenha o elemento onde a imagem será inserida (ex: uma div com id="container")
const container = document.getElementById('container');

// 2. Crie a tag <a> (link) e defina o href
const link = document.createElement('a');
link.href = 'https://secludeddesire.wixsite.com/stories/copy-of-storm-of-passion'; // O link de destino
link.target = '_blank'; // Opcional: abre o link em uma nova aba

// 3. Crie a tag <img> e defina o src e alt
const imagem = document.createElement('img');
imagem.src = 'caminho/para/sua/imagem.jpg'; // O caminho da imagem
imagem.alt = 'Descrição da imagem'; // Texto alternativo

// 4. Adicione a imagem dentro do link
link.appendChild(imagem);

// 5. Adicione o link completo ao container no HTML
container.appendChild(link);
