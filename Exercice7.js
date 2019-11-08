// Créer une base de données newyork et une collection restaurants
use newyork
db.newyork.createCollection('restaurants')

// Importer le fichier restaurant.json

mongoimport --db newyork --collection restaurants --file /home/user/Bureau/mongo_CDI_1A/sample_data/restaurants.json 

// sur PC : Se mettre dans le dossier où il y l'executable mongoimport

// Combien y a-t-il de restaurants ?
 db.restaurants.find().count() 50718

// Identique à


// Trouver les restaurants qui sont dans la rue "Morris Park Ave"

db.restaurants.find({"address.street" : "Morris Park Ave"}).pretty()


// Pour aussi récupérer ceux qui ont pour rue "Morris Park Avenue"

db.restaurants.find({"address.street" : "Morris Park Avenue"}).pretty()


// L'utilisation d'une regex permet de récupérer les 2 orthographes (et éventuellement les orthographes alternatives en minuscules avec le flag i(nsensitive) )

db.restaurants.find({"address.street" : /Morris Park Ave/i}).pretty()

// Combien y en-a-t-il ?

db.restaurants.find({"address.street" : /Morris Park Ave/i}).pretty().count()

// Afficher uniquement (sans l'id) les champs quartier, type de cuisine et adresse

db.restaurants.find({"address.street" : /Morris Park Ave/i},{_id: 0,"address.street":1,cuisine : 1,address : 1}).pretty()


// Trouver la liste des restaurants situés à Staten Island qui font des Hamburgers OU de la Bakery.
// Avec un $or
// Avec le $and implicite
// Avec un $in


db.restaurants.find({ 
$and: [
	{ borough : /Staten Island/i},
 	{ $or : [ 
			{ cuisine : /bakery/i }, 
			{cuisine : /hamburgers/i } 
		] 
	} 
] }) 




db.restaurants.find(
	{ borough : /Staten Island/i,$or : [ 
			{ cuisine : /bakery/i }, 
			{cuisine : /hamburgers/i } 
		] 
	} 
 ) 


// La variable restaurants est un objet. Dans mongo, ils appellent cela un curseur...
var restaurants = db.restaurants.find({borough :"Staten Island"})

// Parcours d'un curseur avec un while
while (restaurants.hasNext()){printjson(restaurants.next());}

// Parcours d'un curseur avec un foreach

db.restaurants.find().forEach(function(myResto) { print("cuisine: " + myResto.cuisine);});


// Quel est le type de restaurant le plus présent ?
// Soit vous le faites en pur json

// Autre méthode. Plus élégante ??
// C'est le pipeline d'aggregation

db.restaurants.aggregate( [
  	{$match : {}},
	{$group: { _id: "$cuisine", nbResto: { $sum: 1 }}},
	{$sort : { nbResto:-1 }},
	{$limit: 5 }
] )



// Pour limiter aux restos de Staten Island




db.restaurants.aggregate( [
  	{$match : {borough : /Staten Island/i}},
	{$group: { _id: "$cuisine", nbResto: { $sum: 1 }}},
	{$sort : { nbResto:-1 }},
	{$limit: 5 }
] )



