// Vérifier si le DOM est chargé avant d'ajouter les événements
document.addEventListener("DOMContentLoaded", function () {
    // Récupérer le lien du CV et y attacher un événement
    let cvLink = document.getElementById("cvLink");
    
    if (cvLink) {
        cvLink.addEventListener("click", function () {
            trackDownload("cv.pdf");
        });
    }
});

// Fonction pour suivre les téléchargements
function trackDownload(fileName) {
    console.log(`Téléchargement de ${fileName} lancé.`);
    alert(`Vous avez téléchargé : ${fileName}`);
}
