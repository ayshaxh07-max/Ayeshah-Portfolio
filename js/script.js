const playButton = document.querySelector(".play-button");

playButton.addEventListener("click", function () {

    if (playButton.textContent === "▶") {
        playButton.textContent = "Ⅱ";
    } else {
        playButton.textContent = "▶";
    }

});