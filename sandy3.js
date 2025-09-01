// عناصر النافذة المنبثقة
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("modal-caption");
const span = document.getElementsByClassName("close")[0];

// عند الضغط على بطاقة
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = card.querySelector("img").src;
        captionText.innerHTML = card.getAttribute("data-info");
    });
});

// إغلاق النافذة
span.onclick = function() {
    modal.style.display = "none";
}
