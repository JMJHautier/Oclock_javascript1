/*

Compression de user
========================

On a récupéré un objet représentant un utilisateur, il y a plein d'informations dedans et on en utilise seulement certaines, on voudrait récupérer seulement les informations dont on a besoin.

Objectifs
---------
Créer une variable `firstName` dans laquelle on stocke le nom de l'utilisateur, une variable `login` pour son login... Et écrire ça en une seule ligne !

Puis renommer la variable `firstName` en `name`.

Notions
-------
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring
*/

const user = {
  country: 'France',
  firstName: 'Pierre',
  lastName: 'Aldado',
  email: 'p.aldado@oclock.io',
  phone: '0123456789',
  login: 'paldado',
  age: '32',
  lang: 'fr',
};


// l'assignation par décomposition d'objet
// permet d'extraire d'un objet certaines de ses propriétés
// pour les stocker dans des variables.
// c'est équivalent à :
// const firstName = user.firstName;
// const login = user.login;
// const name = firstName;

// const {login, firstName} = user;
// const name = firstName;

// ici on profite de la décomposition 
// pour stocker le contenu de la propriété firstName de l'objet user
// dans une variable nommée name
const {login, firstName: name} = user;


/*
 * Tests

 */
const result = document.getElementById('test');
if (
  name === user.firstName
  && login === user.login
  ) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
