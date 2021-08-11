/*

Chacun son tour
===============

Un intégrateur nous a gentiment préparé des div en `display: none`. 
C'est à nous de les afficher en JS.

Objectifs
---------
- Cibler les div avec la classe CSS `.box`
- Afficher les div une à une avec 1 seconde entre chaque

Notions
-------
- DOM : document.querySelectorAll ou getElementsByClassName
- JS : for ou forEach / setTimeout

*/

const boxes = document.querySelectorAll('.box');
console.log(boxes);

/*
boxes.forEach(
    (box, index) => {
        setTimeout(
            () => {
                box.style.display = 'block';
            },
            (index + 1) * 1000,
        );
    }
);
*/

// on peut aussi faire la même chose avec une boucle for
// et un incrément de boucle déclarée en let
// mais attention, ce genre de traitement ne fonctionne pas avec 
// une variable déclarée en var
for (let index = 0; index < boxes.length; index++){
    setTimeout(
        () => {
            boxes[index].style.display = 'block';
        },
        (index + 1) * 1000,
    );
}


