const updateText = () => {
    const userText = document.getElementById('userText');
    const memeText = document.getElementById('memeText');

    memeText.innerHTML = userText.value;
}

const updateImage = () => {
    const img = document.getElementById('memeImage');
    const file = document.querySelector('input[type=file]').files[0];

    img.src = window.URL.createObjectURL(file);
}