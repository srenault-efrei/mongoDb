// Validation de schéma
// Pour mettre un peu de rigueur (et donc se rapprocher des SGBDR...), il est possible de définir un schéma pour nos collections

db.createCollection("personnes", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "prenom", "nom", "mail", "annee_naissance", "adresse.ville" ],
         properties: {
            prenom: {
               bsonType: "string",
               description: "Requis et doit être un string"
            },
            nom: {
               bsonType: "string",
               description: "Requis et doit être un string"
            },
            annee_naissance: {
               bsonType: "int",
               minimum: 1900,
               maximum: 2019,
               exclusiveMaximum: false,
               description: "must be an integer in [ 1900, 2019 ] and is required"
            },
            "address.ville" : {
               bsonType: "string",
               description: "Requis et doit être un string"
            }
         }
      }
   }
})

// Essayez d'insérer des documents qui respectent ou pas les contraintes ci-dessus

db.createCollection( "contacts",
   { validator: { $or:
      [
         { phone: { $type: "string" } },
         { email: { $regex: /@ifocom\.fr$/ } },
         { status: { $in: [ "Unknown", "Incomplete" ] } }
      ]
   }
} )

// Trouver comment ajouter des règles de validation à postériori sur une collection