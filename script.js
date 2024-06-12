document.getElementById('uploadMinhasFotos').addEventListener('change', function(event) {
    handleFiles(event.target.files, 'minhasFotosContainer');
});

document.getElementById('uploadFotosDela').addEventListener('change', function(event) {
    handleFiles(event.target.files, 'fotosDelaContainer');
});

function handleFiles(files, containerId) {
    const container = document.getElementById(containerId);
    for (let file of files) {
        if (file.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            container.appendChild(img);
        }
    }
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Abrir a aba padrão
document.querySelector('.tablink').click();
