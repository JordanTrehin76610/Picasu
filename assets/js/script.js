let nbPhoto = 16

for (i = 0; i < nbPhoto; i++) {
    hauteur = (Math.floor(Math.random() * 2))+2;
    largeur = (Math.floor(Math.random() * 2))+2;
    document.getElementById("galerie").innerHTML += `<div class="mx-auto my-2 photo"><a href="https://picsum.photos/${hauteur}00/${largeur}00?random=${i}" data-lightbox="galerie" data-title="Photo par Claire Montfort" class="zoomIn"><img src="https://picsum.photos/${hauteur}00/${largeur}00?random=${i}"></a></div>`
}