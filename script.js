// script.js

function openNav() {
    document.getElementById("myNav").style.width = "18%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

//画像がローテーションで切り替わる
document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "img/stamp1.png",
        "img/stamp2.png",
        "img/stamp3.png",
        "img/stamp4.png",
    ];
    let currentIndex = 0;
    const imageElement = document.getElementById("rotating-image");

    function rotateImage() {
        imageElement.classList.remove("fade");
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
        imageElemet.classList.add("fade");
    }

    setInterval(rotateImage, 5000); // 5秒ごとに画像を切り替え
});
