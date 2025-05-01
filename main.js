window.onload = () => {
    const audio = document.getElementById("bg-music");
    if (audio) {
        audio.play().catch((e) => {
            console.log("Autoplay failed, user interaction needed.");
        });
    }
};
