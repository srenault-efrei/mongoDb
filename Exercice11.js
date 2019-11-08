// Vélib


// Récupérer un fichier json des velib chez jcdecaux developer
// Importer dans la base paris, le fichier jcdecaux.json dans une collection velib

// Cette fois-ci les données sous fournies sous la forme d'un tableau d'objets, il faut donc ajouter l'option --jsonArray pour importer

// syntaxe avec la fonction flèche
allVelib.forEach(oneVelib =>{
    // let's do some stuff
})

// Problème ! On n'a pas de champ codepostal ... On retrouve le code postal dans l'adresse.

// Mettez à jour tous les enregistrements en leur ajoutant un champ zipCode

// Quel est l'arrondissement de Paris ou il y a le plus de stations ? (avec un $in)      

// OU plus élégant 

// Quelle est la ville (hors Paris) qui a le plus de stations

// OU plus élégant

// Cherchez la piscine Dunois .

// Quelles sont les 5 stations velib les plus proches de la piscine Dunois ?
// Première version : en utilisant une fonction de calcul de distance
https://www.geodatasource.com/developers/javascript


// Seconde version : en modifiant la structure de la collection et en utilisant l'opérateur géographique $near
// Pour utiliser $near il faut :
 // - respecter l'organisation de GeoJSON (geoJson.org)
 // - avoir un index de type 2dsphere
 
// Maintenant, on indique que notre champ emplacement est un index de type 2dsphere

// On peut à présent faire notre find() avec l'opérateur $near
 
 


