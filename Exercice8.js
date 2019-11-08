// Exercices de mises à jour

// db.collection.update(query, update, options)

// Reprendre la base paris

// On ajoute un champ 'acces_handicape' à true aux piscines du 13ème

// Par défaut update() ne modifie que le premier élément qui matche

//Il faut ajouter l'option multi:true pour que la mise à jour se fasse pour tous les enregistrements

 db.velib.update({zipCode : 75013},{ $set : {acces_handicape: true}},{multi : true})

// On peut aussi la méthode updateMany() pour obtenir le même résultat

db.velib.updateMany({zipCode : 75013},{ $set : {acces_handicape: true}})

// L'option upsert : true ajoute un document si aucun document ne correspond ou modifie si un document correspond 

crée si il n'existe pas 
db.velib.update({ zipCode : 75013},{verif : true},{upsert : true}) 


// On peut définir des champs et en supprimer dans la meme requete
// Ajouter un champ verif à true et supprimer l'accès handicapé


db.velib.updateMany({zipCode : 75013},{ $set : {verif: true},  $unset : { acces_handicape : true } })

