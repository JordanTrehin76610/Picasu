let nbPhoto = 16

for (i = 0; i < nbPhoto; i++) {
    hauteur = (Math.floor(Math.random() * 2))+2;
    largeur = (Math.floor(Math.random() * 2))+2;
    random = (Math.floor(Math.random() * 600))+2;
    document.getElementById("galerie").innerHTML += `<div class="mx-auto my-2 photo"><a href="https://picsum.photos/id/${random}/1000/1000" data-lightbox="galerie" data-title="Photo par Claire Montfort" class="zoomOut"><img src="https://picsum.photos/id/${random}/${hauteur}00/${largeur}00"></a></div>`
}