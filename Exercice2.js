mongoimport --db paris --collection piscines --file piscines_paris.json

db.collection.find(query, projection)

use paris

// Pour compter les éléments

db.velib.count()

// ou


// Pour les piscines du 11ème

> db.velib.find({
zipCode : 75011}).count()


// Pour les piscines du 11ème, n'affichez que les champs nom et code postal

db.velib.find({
zipCode : 75011},
{name:1,zipCode:1}).pretty()



// La projection sert à limiter les champs renvoyés par une requête


// Par défaut, le champ _id est présent. Il faut l'exclure explicitement

db.velib.find({
zipCode : 75011},
{_id:0,name:1,zipCode:1}).pretty()


// Pour limiter le nombre de résultats, on utilise limit()

db.velib.find({
zipCode : 75011},
{_id:0,name:1,zipCode:1}).limit(1).pretty()


// Pour trier par nom, on utilise sort()

db.velib.find().sort({name:1}).pretty()







