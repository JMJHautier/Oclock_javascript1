/*

For Hitch
=========

Utilisons le tableau de chaînes de caractères `items` pour présenter chaque entrée dans le DOM.

Objectifs
---------
- Contruire une liste HTML (avec des <li>)
- Ajouter la liste dans le ul#result déjà présent dans le HTML

Notions
-------
- DOM : document.getElementById / document.createElement / appendChild
- Array : forEach

*/

const items = ['Sunglasses', 'Suit', 'Business card', 'Jet ski'];

// on stocke un référene à l'élément du dom dans 
// lequel on va attacher nos li
const resultElement = document.getElementById('result');

items.forEach(
    (item) => {
        // on crée un nouveau li
        const liElement = document.createElement('li');
        // on positionne son contenu textuel
        liElement.textContent = item;
        // on accroche le li fraîchement créé dans le dom en tant qu'enfant de resultElement
        resultElement.appendChild(liElement);
    }
);

