window.onload = () => {
    document.body.classList.remove("container");

    const music = document.getElementById("bg-music");
    const button = document.getElementById("playMusic");

    if (button && music) {
        button.addEventListener("click", () => {
            music.play();
        });
    }
};
