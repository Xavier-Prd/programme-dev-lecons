// =============================================================
// SESSION JS/NEXT.JS — 2026-05-12
// Thème      : JavaScript moderne
// Difficulté : débutant
// Durée estimée : ~1h-1h30
// =============================================================

// -------------------------------------------------------------
// INTRO — JavaScript moderne (ES6+)
// -------------------------------------------------------------
// JavaScript "moderne" désigne les fonctionnalités introduites à partir
// d'ES6 (2015). Elles rendent le code plus lisible et plus concis.
//
// LES POINTS CLÉS :
//
// 1. const / let (à la place de var)
//    - `const` : valeur qui ne sera pas réassignée (à privilégier)
//    - `let`   : valeur qui peut changer
//    const nom = "Alice";
//    let age = 25;
//    age = 26; // OK
//
// 2. Arrow functions (fonctions fléchées)
//    Syntaxe plus courte pour définir des fonctions.
//    // Classique :
//    function double(n) { return n * 2; }
//    // Fléchée :
//    const double = (n) => n * 2;
//    // Si un seul paramètre, parenthèses optionnelles :
//    const triple = n => n * 3;
//
// 3. Destructuring (déstructuration)
//    Extraire des valeurs d'un tableau ou d'un objet en une ligne.
//    const [a, b] = [1, 2];          // a=1, b=2
//    const { nom, age } = personne;  // extrait nom et age de l'objet
//
// 4. Spread operator (...)
//    Étaler le contenu d'un tableau ou d'un objet.
//    const arr2 = [...arr1, 4, 5];
//    const obj2 = { ...obj1, ville: "Paris" };
//
// Exemple minimal (ne pas copier comme correction des exercices) :
//   const saluer = nom => `Bonjour, ${nom} !`;
//   console.log(saluer("Alice")); // "Bonjour, Alice !"


// -------------------------------------------------------------
// EXERCICE 1 — const / let et template literals
// -------------------------------------------------------------
// Déclare les variables suivantes avec const ou let selon le cas :
//   - ton prénom (ne changera pas)
//   - ton âge (peut changer)
//   - l'année actuelle (ne changera pas dans ce script)
//
// Ensuite, utilise un template literal (backticks + ${}) pour afficher :
// "Je m'appelle [prénom], j'ai [âge] ans et nous sommes en [année]."
//
// Critères de réussite :
// - Utiliser const pour les valeurs fixes, let pour les variables
// - Utiliser les backticks (`) et ${} pour l'interpolation
// - console.log affiche la phrase complète

// Ton code ici :


// -------------------------------------------------------------
// EXERCICE 2 — Arrow functions
// -------------------------------------------------------------
// Réécris les deux fonctions ci-dessous en arrow functions.
// Puis ajoute une troisième arrow function `calculerTVA` qui prend
// un prix HT et retourne le prix TTC (TVA à 20%).
//
// Fonctions originales à convertir :
function additionner(a, b) {
  return a + b;
}

function estPair(n) {
  return n % 2 === 0;
}
//
// Critères de réussite :
// - additionner et estPair réécrites en arrow functions (avec const)
// - calculerTVA écrite en arrow function, avec un seul paramètre
// - console.log pour tester :
//   additionner(3, 4)    // 7
//   estPair(6)           // true
//   calculerTVA(100)     // 120

// Ton code ici :


// -------------------------------------------------------------
// EXERCICE 3 — Destructuring tableau
// -------------------------------------------------------------
// Tu as le tableau suivant :
const couleurs = ["rouge", "vert", "bleu", "jaune", "violet"];
//
// En utilisant la déstructuration :
// 1. Extrais la première et la deuxième couleur dans des variables
//    `premiere` et `deuxieme`
// 2. Ignore la troisième et extrais la quatrième dans `quatrieme`
// 3. Extrais le reste dans un tableau `autresCouleurs`
//
// Critères de réussite :
// - Tout se fait en UNE seule ligne de déstructuration
// - console.log(premiere)       // "rouge"
// - console.log(deuxieme)       // "vert"
// - console.log(quatrieme)      // "jaune"
// - console.log(autresCouleurs) // ["violet"]

// Ton code ici :


// -------------------------------------------------------------
// EXERCICE 4 — Destructuring objet
// -------------------------------------------------------------
// Tu as l'objet suivant :
const utilisateur = {
  id: 42,
  nom: "Dupont",
  prenom: "Marie",
  ville: "Lyon",
  age: 31
};
//
// 1. Extrais `nom`, `prenom` et `ville` par déstructuration
// 2. Extrais `age` mais renomme-la en variable `annees`
// 3. Affiche avec console.log : "Marie Dupont, 31 ans, habite à Lyon"
//    (utilise les variables déstructurées + template literal)
//
// Critères de réussite :
// - Une seule ligne de déstructuration (tu peux en faire 2 séparées si plus clair)
// - La variable s'appelle `annees` et non `age`
// - Le console.log affiche la phrase attendue

// Ton code ici :


// -------------------------------------------------------------
// EXERCICE 5 — Spread operator
// -------------------------------------------------------------
// 5a. Tu as deux tableaux :
const fruitsRouges = ["fraise", "cerise", "framboise"];
const fruitsJaunes = ["banane", "citron", "mangue"];
// Crée `tousFruits` en combinant les deux tableaux avec le spread operator.
// Ajoute également "pomme" à la fin.
// console.log(tousFruits) devra afficher les 7 fruits.

// 5b. Tu as l'objet de base d'un profil :
const profilBase = { role: "user", actif: true, theme: "clair" };
// Crée un nouvel objet `profilAdmin` qui copie profilBase,
// mais surcharge `role` par "admin" et ajoute une propriété `niveau: 5`.
// console.log(profilAdmin) // { role: "admin", actif: true, theme: "clair", niveau: 5 }
//
// Critères de réussite :
// - Utiliser ... (spread) dans les deux cas
// - Ne pas modifier les objets/tableaux originaux
// - Les console.log affichent les résultats attendus

// Ton code ici :


// -------------------------------------------------------------
// EXERCICE 6 — Combinaison (plus difficile)
// -------------------------------------------------------------
// Tu as une liste de produits :
const produits = [
  { id: 1, nom: "Clavier", prix: 89, categorie: "informatique" },
  { id: 2, nom: "Souris",  prix: 45, categorie: "informatique" },
  { id: 3, nom: "Lampe",   prix: 30, categorie: "bureau" },
  { id: 4, nom: "Stylo",   prix: 5,  categorie: "bureau" },
  { id: 5, nom: "Écran",   prix: 350, categorie: "informatique" },
];
//
// En utilisant les arrow functions et la déstructuration :
// 1. Filtre les produits "informatique" seulement (utilise .filter())
// 2. Pour chaque produit filtré, crée un nouvel objet avec spread
//    qui ajoute une propriété `prixTTC` = prix * 1.2 (arrondi à 2 décimales)
// 3. Affiche avec console.log le tableau final
//
// Résultat attendu :
// [
//   { id: 1, nom: "Clavier", prix: 89, categorie: "informatique", prixTTC: 106.8 },
//   { id: 2, nom: "Souris",  prix: 45, categorie: "informatique", prixTTC: 54 },
//   { id: 5, nom: "Écran",   prix: 350, categorie: "informatique", prixTTC: 420 },
// ]
//
// Critères de réussite :
// - Utiliser .filter() avec une arrow function
// - Utiliser .map() avec une arrow function + spread + déstructuring
// - Ne pas modifier le tableau `produits` original

// Ton code ici :
