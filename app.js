const affichageDeCompteur = document.querySelector('h3');
let compteur = 0;

const createurDeBulle =  function () {
    const bulle = document.createElement('span');
    bulle.classList.add('bulle');
    document.body.appendChild(bulle);


    // RANDOM DE LONGUEUR ET DE LA LARGEUR DE CETTE BULLE
    const size = Math.random() * 200 + 100 + "px";
    bulle.style.height = size;
    bulle.style.width = size;

    // RANDOM DE POSITIONNEMENT DE BULLE PAR RAPPORT A GAUCHE ET EN HAUT
    bulle.style.top = Math.random() * 100 + 50 + "%";
    bulle.style.left = Math.random() * 100 + "%";

    // CONDITION POUR LES BULLES
    const plusOuMoins = Math.random() > 0.5 ? 1 : -1
    bulle.style.setProperty('--left', Math.random() * 100 * plusOuMoins + "%");

    setTimeout(() => {
        bulle.remove();
    }, 8000);

    bulle.addEventListener('click' , function () {
        bulle.remove();
        compteur ++;
        affichageDeCompteur.textContent = compteur  
    });

}
setInterval( createurDeBulle, 300);



