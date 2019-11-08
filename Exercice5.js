// Retrouver les 5 premières piscines par ordre alphabétique ( et dont le champ zipCode existe)

db.velib.find({ zipCode : { $exists : true }}).sort({ name : 1 }).pretty()

// Ajoutez 2 piscines -en une requete - avec un champ nom au lieu de name

db.velib.insert([
{nom : "Piscine Steven Renault",address : "12 ter rue ferrare",zipCode : 75001,lat: 47.65,lon: 2.68},
{nom : "Piscine bis  Steven Renault",address : "12 ter rue ferrare",zipCode : 75005,lat : 47.68,lon:2.58}
])

// Si je compte mes piscines, j'en ai donc 33

db.velib.find().count()


// Compter uniquement les piscines dont le champ name est présent

db.velib.find({name : {$exists : true }}).count()


// équivalent à

// Renvoie toutes les piscines ayant effectivement le champ name
db.velib.find({name : {$exists : true }})

// Limite à 5 résultats

 db.velib.find({name : {$exists : true }}).limit(5).pretty()


// En les triant par ordre alphabétique (case sensitive)

db.velib.find({name : {$exists : true }}).limit(5).sort({name : 1}).pretty()


// En plus en limitant les champs retournés au nom

db.velib.find({name : {$exists : true }},{name : 1}).limit(5).sort({name : 1}).pretty()

