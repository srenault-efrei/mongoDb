// Revenez sur la base "efrei"

use efrei


// Trouver un film dont le nom contient 'vache' (en utilisant une expression régulière)
db.film.find({titre : { $regex : /vache/ } } ).pretty()
db.film.find({titre : { $in : [/vache/] } } ).pretty()


// équivalent

db.film.find({titre : /vache/  } ).pretty()

// Afficher uniquement le prenom des acteurs de ce film

db.film.find({titre : /vache/  },{_id:0,"acteurs.prenom" : 1} ).pretty()

// Trouver les films dont un acteur s'appelle René

db.film.find({"acteurs.prenom" : /René/  } ).pretty()

// Le flag i veut dire insensitive (grand et petit caractere)


db.film.find({"acteurs.prenom" : /René/i  } ).pretty()

