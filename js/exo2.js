/*

À ma guise
==========

Des données nous sont parvenues d'un serveur, mais la structure n'est pas top. 
Changeons le format de ces données !

Objectifs
---------
- Une propriété "name" qui ressemblerait à "Prénom Nom"
- Une propriété "young" qui contiendrait un booléen : 
  `true` quand le personnage a moins de 50 ans, sinon `false`
- Les autres données sont inutiles, on ne les conserve pas

Notions
-------
- Array : map
- String : template strings

*/

const data = [
  {
    firstname: 'Marge',
    lastname: 'Simpson',
    gender: 'Women',
    age: 34,
  },
  {
    firstname: 'Ned',
    lastname: 'Flanders',
    age: 61,
  },
  {
    firstname: 'Charles Montgomery',
    lastname: 'Burns',
    age: 104,
  },
  {
    firstname: 'Waylon',
    lastname: 'Smithers',
    age: 36,
  },
];



// ici on utilise le retour implicite
// si une fonction fléchée contient une seule instruction
// elle retourne le résultat de manière implicite
// si le retourn est un objet, il doit obligatoirement être mis en parenthèse
const convertCharacter = (character) => ({
    name: character.firstname + ' ' + character.lastname,
    young: character.age < 50
});

/*
équivalent à :
const convertCharacter = (character) => {
  // on retourn l'objet construit
  return {
    name: character.firstname + ' ' + character.lastname,
    young: character.age < 50,
  };
};
*/

const characters = data.map(convertCharacter);

// on doit passer en argument à map
// une fonction permettant de décrire la transformation à 
// appliquer aux éléments
// en entrée, on aura à minima besoin d'un paramètre permettant
// de recueillr l'élément à transformer
// en sortie, elle devra retourné l'élément transformé

console.log(characters);










/*
 * Tests
 */
const result = document.getElementById('test');
if (
  // On a désormais `name` et `young`
  characters[0].name === 'Marge Simpson'
  && characters[1].name === 'Ned Flanders'
  && characters[2].name === 'Charles Montgomery Burns'
  && characters[3].name === 'Waylon Smithers'
  && characters[0].young
  && !characters[1].young
  && !characters[2].young
  && characters[3].young

  // Les anciennes props ne doivent plus être définies
  && typeof characters[0].gender === 'undefined'
  && typeof characters[0].firstname === 'undefined'
  && typeof characters[0].lastname === 'undefined'
  && typeof characters[1].firstname === 'undefined'
  && typeof characters[1].lastname === 'undefined'
  && typeof characters[2].firstname === 'undefined'
  && typeof characters[2].lastname === 'undefined'
  && typeof characters[3].firstname === 'undefined'
  && typeof characters[3].lastname === 'undefined'
) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
