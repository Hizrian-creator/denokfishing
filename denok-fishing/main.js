function openVideoModal(videoSrc) {
    let modal = document.getElementById("videoModal");
    let video = document.getElementById("modalVideo");

    video.src = videoSrc;
    modal.style.display = "flex";
}

function closeVideoModal() {
    let modal = document.getElementById("videoModal");
    let video = document.getElementById("modalVideo");

    video.pause(); // Hentikan video saat modal ditutup
    video.src = ""; // Hapus sumber video untuk mencegah audio tetap berjalan
    modal.style.display = "none";
}
