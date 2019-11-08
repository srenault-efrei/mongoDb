// Dans la collection "piscines" de la base "paris", trouver en utilisant les opérateurs de requête

// les piscines qui sont dans le 13e arrondissement

db.velib.find({zipCode : 75013}).pretty()

// les piscines qui ne sont pas le 13e arrondissement

db.velib.find({zipCode: { $ne: 75013 }}).pretty()


// En affichant uniquement le nom

db.velib.find({zipCode: { $ne: 75013 }},{_id:0,name:1}).pretty()

// les piscines qui sont dans le 13e et celles qui sont dans le 14e arrondissement
// Soit avec un $or
// Soit avec un $in

db.velib.find ( { zipCode: { $in: [75013, 75014] } } ).pretty()


// les piscines qui ne sont pas dans le 15, 16, 17 et 18e arrondissement

db.velib.find({ zipCode : {$nin : [75015,75016,75017,75018] } }).pretty()


// En triant par code postal descendant:

db.velib.find().sort({zipCode : -1}).pretty()


// les piscines dont le code postal est supérieur ou égal à 75013 triés par code postal descendant

db.velib.find({zipCode : {$gte :75013}}).sort({zipCode : -1}).pretty()

// Les piscines situées à l'ouest de Notre Dame de Paris

db.velib.find({lon : {$lt :2.35}}).pretty()

// Et leur nombre

db.velib.find({lon : {$lt :2.35}}).pretty().count()

// Les piscines dont zipCode=75013 ET id=2929 avec l'opérateur $and et $eq

db.velib.find( { $and : [{zipCode : { $eq: 75013 } } , {id : { $eq : 2929 }} ] }).pretty()

// On peut simplifier - uniquement l'opérateur $and

db.velib.find({ $and : [{zipCode : 75013}, {id :2929 }]}).pretty()

// Version la plus courte








