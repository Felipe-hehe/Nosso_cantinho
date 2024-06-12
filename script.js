// Função para adicionar imagens ao container e armazenar localmente
function handleFiles(files, containerId) {
    const container = document.getElementById(containerId);
    for (let file of files) {
        if (file.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            container.appendChild(img);

            // Armazenar a imagem localmente
            saveImageLocally(file);
        }
    }
}

// Função para salvar a imagem localmente
function saveImageLocally(imageFile) {
    // Verificar se o navegador suporta o armazenamento local
    if (typeof(Storage) !== "undefined") {
        // Obter a lista de imagens já armazenadas localmente (se houver)
        let storedImages = localStorage.getItem("savedImages");
        storedImages = storedImages ? JSON.parse(storedImages) : [];

        // Adicionar a nova imagem à lista
        storedImages.push(imageFile.name);

        // Salvar a lista de imagens no armazenamento local
        localStorage.setItem("savedImages", JSON.stringify(storedImages));
    } else {
        console.error("Seu navegador não suporta armazenamento local.");
    }
}

// Função para carregar imagens armazenadas localmente ao carregar a página
window.addEventListener('load', function() {
    // Verificar se o navegador suporta o armazenamento local
    if (typeof(Storage) !== "undefined") {
        // Obter a lista de imagens armazenadas localmente
        let storedImages = localStorage.getItem("savedImages");
        storedImages = storedImages ? JSON.parse(storedImages) : [];

        // Carregar as imagens armazenadas no DOM
        const minhasFotosContainer = document.getElementById('minhasFotosContainer');
        const fotosDelaContainer = document.getElementById('fotosDelaContainer');
        for (let imageName of storedImages) {
            const img = document.createElement('img');
            img.src = imageName;
            minhasFotosContainer.appendChild(img);
            fotosDelaContainer.appendChild(img.cloneNode(true));
        }
    } else {
        console.error("Seu navegador não suporta armazenamento local.");
    }
});
