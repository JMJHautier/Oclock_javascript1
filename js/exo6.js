/*

Coin-coin !
========================

On a récupéré un tableau qui contient des animaux, on voudrait le décomposer pour stocker chaque animal dans une variable

Objectifs
---------
Créer une variable pour chaque animal du tableau (utiliser le nom de l'animal pour nommer la variable), dans laquelle on stocke les informations de cet animal... Et écrire ça en une seule ligne !

Notions
-------
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring
*/

const animaux = [
  {
    name: 'canard',
    type: 'oiseau',
    aliments: ['insecte', 'poisson'],
    cri: 'coin',
  },
  {
    name: 'chat',
    type: 'félin',
    aliments: ['croquette', 'pâtée', 'souris'],
    cri: 'miaou',
  },
  {
    name: 'lion',
    type: 'félin',
    aliments: ['zèbre', 'antilope', 'buffle'],
    cri: 'rooooaaaarrrr',
  },
  {
    name: 'mouton',
    type: 'ovin',
    aliments: ['herbe'],
    cri: 'bêêê',
  }
];

// l'affectation par décomposition
// permet d'effectuer ce genre d'opération
// avec une syntaxe plus compacte
// const canard = animaux[0];
// const chat = animaux[1];
// const lion = animaux[2];
// const mouton = animaux[3];

// dans une assignation par décomposition de tableau
// c'est l'ordre qui compte
// premier élément dans la première variable, etc.
const [canard, chat, lion, mouton] = animaux; 

// on peut si on le souhaite prendre seulement les premiers 
// élément
const [canard2, chat2] = animaux;

console.log(canard2, chat2);

// ou même zapper un élément qui ne nous intéresserait pas
const [canard3, , lion3] = animaux;

console.log(canard3, lion3);

/*
 * Tests
 */
const result = document.getElementById('test');
if (
  canard === animaux[0]
  && chat === animaux[1]
  && lion === animaux[2]
  && mouton === animaux[3]
  ) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
