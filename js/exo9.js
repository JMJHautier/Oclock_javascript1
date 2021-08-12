/*
Un peu d'épices…
================
Nous allons faire du "currying", c'est à dire préparer une fonction qui va nous renvoyer une nouvelle fonction préparée.

Objectifs
---------
- Faire une fonction : sayHelloToUser
  - elle prend en paramètre un objet user
  - elle retourne une fonction
  - la fonction retournée doit prendre un paramètre `lang`

WHAAAAAT ?!

Par exemple :
  const sayHelloToJohn = sayHelloToUser({
    firstName: 'John',
    lastName: 'Doe',
    login: 'jdoe',
  });
  sayHelloToJohn('es'); // => renvoie 'Ola John Doe'
Ou bien :
  const sayHelloToToto = sayHelloToUser({
    firstName: 'Toto',
    lastName: 'Dupont',
    login: 'toto',
  });
  sayHelloToToto('fr'); // => renvoie 'Bonjour Toto Dupont'

On pourra utiliser un switch dans la fonction retournée pour déterminer le message en fonction de la langue

Notions
-------
- JS : portée de variable / closure / currying
*/

const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    login: 'jdoe',
  },
  {
    firstName: 'Toto',
    lastName: 'Dupont',
    login: 'toto',
  },
];

// sayHelloToUser renvoie une fonction qui prend en paramètre une langue.
// cette fonction sait dire bonjour à CET utilisateur.
function sayHelloToUser({firstName, lastName}) {
  return function(lang){
    switch(lang){
      case 'fr':
        return `Bonjour ${firstName} ${lastName}`;
      case 'es':
          return `Ola ${firstName} ${lastName}`;
      default:
          return `👋 ${firstName} ${lastName}`;
    }
  };
}

// on récupère le premier utilisateur du tableau (assignation par décomposition)
const [john] = users;
// on exécute la fonction sayHelloToUser et récupère dans helloToJohn.
// la fonction retournée qui a mémorisé son contexte (donc john).
const helloToJohn = sayHelloToUser(john);
// en l'éxécutant, on constate qu'elle se rappelle bien de qui est john !
console.log(helloToJohn('it'));

/*
 * Tests

 */
const result = document.getElementById('test');
const helloJohnFr = sayHelloToUser(users[0])('fr');
const helloTotoEs = sayHelloToUser(users[1])('es');
if (
  helloJohnFr === 'Bonjour John Doe'
  && helloTotoEs === 'Ola Toto Dupont'
) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
