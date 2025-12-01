/*
// JS Conditions multiples

// Exercice 1 – Compter les multiples de 3 ou 5
// Étape 1 : Créer un tableau vide
let multiples = [];

// Étape 2 : Boucle de 1 à 100 inclus
for (let nombre = 1; nombre <= 100; nombre++) {

    // Condition combinée avec || et utilisation de l'opérateur !
    if (nombre % 3 === 0 || nombre % 5 === 0) {
        multiples.push(nombre); // multiple de 3 ou 5 → on ajoute le nombre
    } else {
        multiples.push("!" + nombre); // sinon on ajoute "!nombre"
    }
}

// Étape 3 : Afficher le tableau final
console.log(multiples);


// Exercice 2 – Filtrer les notes valides

// Étape 1 : Déclaration des tableaux
const notes = [15, -3, 12, 0, 19, 22, 8];
const valides = [];

// Étape 2 : Boucle while avec un index i
let i = 0;
while (i < notes.length) {
    const note = notes[i];
    
    // Condition avec && : note strictement entre 0 et 20 (inclus)
    if (note >= 0 && note <= 20) {
        valides.push(note);   // note valide → on l'ajoute
    }
    // sinon on ne fait rien → la note est écartée
    
    i++; // ne pas oublier l'incrémentation !
}

// Étape 3 : Affichage du résultat
console.log("Notes valides :", valides);
console.log("Nombre d'éléments écartés :", notes.length - valides.length);



// Exercice 3 – Parcourir un objet dʼutilisateurs

const users = {
    alice: 18,
    bob: 25,
    charlie: 17,
    dave: 30
  };
  
  let accesAccordes = 0;  // Compteur pour le nombre total d'accès accordés
  
  for (let nom in users) {
    let age = users[nom];
  
    // Condition demandée : âge == 18 ET âge != 25
    if (age === 18 && age !== 25) {
      console.log(nom);           // Affiche juste le nom
      accesAccordes++;
    } else {
      console.log("Accès refusé : " + nom);
    }
  }
  
  // Affichage final du total
  console.log("Nombre total d'accès accordés : " + accesAccordes);

  

// Exercice 4 – Addition sélective dans un tableau

const nombres = [2, 7, 10, 21, 14, 3];
const resultats = [];

let somme = 0;

for (let n of nombres) {
  // Condition demandée :
  // - pair ET ≤ 5    OU
  // - impair ET > 10
  if ( (n % 2 === 0 && n <= 5) || (n % 2 !== 0 && n > 10) ) {
    somme += n;         // on additionne à la somme
    resultats.push(n);  // on ajoute le nombre dans le tableau
  }
}

console.log("Somme :", somme);
console.log("Résultats :", resultats);



// Exercice 5 – Inventaire en boucle while

const stock =  {pommes: 4, bananes: 0, poires: 3, mangues: 1};
const rupture = [];

// Parcours de l'objet avec for...in
for (let fruit in stock) {
  // Tant que la quantité est > 0
  while (stock[fruit] > 0) {
    stock[fruit]--;                                // on décrémente
    console.log(`${fruit}: ${stock[fruit]}`);
  }

  // Quand on sort de la boucle while, la quantité est à 0
  // On ajoute le fruit dans rupture UNE SEULE FOIS
  if (stock[fruit] === 0 && !rupture.includes(fruit)) {
    rupture.push(fruit);
  }
}

console.log("Rupture de stock :", rupture);



// Exercice 6 – Tableau de nombres aléatoires et bonus

// Étape 1 : Créer un tableau de 20 nombres aléatoires entre 1 et 30
const nums = [];

// Boucle for classique pour remplir le tableau
for (let i = 0; i < 20; i++) {
  const aleatoire = Math.floor(Math.random() * 30) + 1; // 1 à 30 inclus
  nums.push(aleatoire);
}

console.log("Tableau initial :", nums);

// Étape 2 : Parcourir et modifier selon les règles
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];

  // Règle 1 : multiple de 4 OU multiple de 6 → on multiplie par 2
  if (n % 4 === 0 || n % 6 === 0) {
    nums[i] = n * 2;
  }
  // Règle 2 : sinon, si le nombre est impair (pas pair) → on met 1
  else if (n % 2 !== 0) {   // n % 2 !== 0  →  c'est l'opérateur ! demandé
    nums[i] = 1;
  }
  // Sinon (pair mais pas multiple de 4 ni de 6) → on ne touche pas
}

console.log("Tableau final :", nums);



// Exercice 7 – Fusion dʼobjets sans fonction

// Étape 1 : déclarations
const o1 = { a: 1, b: 2, c: 3 };
const o2 = { b: 4, c: 3, d: 5 };

const fusion = {};

// Étape 2 : copier toutes les propriétés de o1 dans fusion
for (let key in o1) {
  fusion[key] = o1[key];
}

// Étape 3 : parcourir o2 et appliquer les règles demandées
for (let key in o2) {
  // Condition exacte demandée :
  // - la clé n'existe pas encore dans fusion   OU
  // - la clé existe mais la valeur est différente
  if (!(key in fusion) || fusion[key] !== o2[key]) {
    fusion[key] = o2[key];        // on écrase / on ajoute
  }
  // sinon (clé existe et même valeur) → on ne fait rien
}

// Étape 4 : affichage du résultat
console.log(fusion);



// Exercice 8 – Recherche dans un tableau dʼobjets

const produits = [
    { nom: "stylo",   prix: 1.2, dispo: true },
    { nom: "cahier",  prix: 2.5, dispo: false },
    { nom: "crayon",  prix: 0.8, dispo: true },
    { nom: "gomme",   prix: 0.5, dispo: true }
  ];
  
  const achats = [];
  const ignores = [];
  
  for (let i = 0; i < produits.length; i++) {
    const produit = produits[i];
  
    // Condition 1 : disponible ET prix ≤ 2
    if (produit.dispo && produit.prix <= 2) {
      achats.push(produit.nom);
    }
    // Condition 2 : indisponible OU prix > 2
    else if (!produit.dispo || produit.prix > 2) {
      ignores.push(produit.nom);
    }
  }
  
  console.log("Achats :", achats);
  console.log("Ignorés :", ignores);

  


// Exercice 9 – Palindrome simplifié (sans fonction)

const mot = "kayak";

const chars = [];
// Étape 1 : on met chaque lettre dans un tableau
for (let i = 0; i < mot.length; i++) {
  chars.push(mot[i]);
}

const inverse = [];
// Étape 2 : on remplit inverse dans l'ordre inverse
for (let i = chars.length - 1; i >= 0; i--) {
  inverse.push(chars[i]);
}

let estPalindrome = true;

// Étape 3 : comparaison caractère par caractère
for (let i = 0; i < chars.length; i++) {
  // Si un caractère diffère OU si l'un des deux n'existe pas
  if (chars[i] !== inverse[i] || !chars[i]) {
    estPalindrome = false;
    break; // on peut sortir dès qu'on trouve une différence
  }
}

console.log(`"${mot}" est un palindrome : ${estPalindrome}`);



// Exercice 10 – Somme conditionnelle avec for of

const grilles = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  let somme = 0;
  
  // On parcourt chaque sous-tableau
  for (let ligne of grilles) {
    // On parcourt chaque nombre dans la ligne
    for (let nombre of ligne) {
      // Condition demandée :
      // pair ET ≥ 4   OU   impair ET ≤ 5
      if ((nombre % 2 === 0 && nombre >= 4) || (nombre % 2 !== 0 && nombre <= 5)) {
        somme += nombre;
      }
    }
  }
  
  console.log("Somme conditionnelle :", somme);

  */
