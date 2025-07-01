let nbPhoto = 8 //Attention, faut que la grid sois remplis si on veut le scroll infini

function ajouterPhotos() {
    for (let i = 0; i < nbPhoto; i++) {
        let hauteur = Math.floor(Math.random() * 2) + 2
        let largeur = Math.floor(Math.random() * 2) + 2
        let random = Math.floor(Math.random() * 600) + 2
        let sur = Math.floor(Math.random() * 50) + 2
        
        document.getElementById("galerie").innerHTML += `
            <div class="mx-auto my-lg-2 my-5 photo">
                <a href="https://picsum.photos/id/${random}/1000/1000" onerror="this.src='https://picsum.photos/id/${sur}/1000/1000';" data-lightbox="galerie" data-title="Photo par Claire Montfort" class="zoomOut">
                    <img src="https://picsum.photos/id/${random}/${hauteur}00/${largeur}00" onerror="this.src='https://picsum.photos/id/${sur}/${hauteur}00/${largeur}00';">
                </a>
            </div>
        `
    } //Onerror="patapati" remplace l'img si ce dernier n'arrive pas à charger
}


ajouterPhotos()


window.addEventListener("scroll", () => {  //S'active avec le scroll
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) { // On prend la position de l'utilisateur, on regarde la hauteur de la page et lorsqu'on est a 200px de sa fin
        ajouterPhotos() //On appelle la fonction
    }
})
