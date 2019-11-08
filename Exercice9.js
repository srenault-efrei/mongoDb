// Mise à jour -> update

// Dans la liste des restaurants

// Modifier les restaurants dont la cuisine est Hamburgers pour leur ajouter un champ healthy_food égal à 2

db.restaurants.updateMany({cuisine : /hamburgers/i}, { $set : { healthy_food : 2} } )

// Pour les végétariens, leur mettre le champ healthy food à 9.

db.restaurants.updateMany({cuisine : /veg/i}, { $set : { healthy_food : 9} } )

// Vérifier ques tous les restaurants ont un tableau grades

db.restaurants.find({ grades : { $exists : true }}).pretty().count()


// Supprimer le champ building des restaurants situés dans le Bronx et ajouter un booléen

db.restaurants.updateMany({ borough: /Bronx/i},{ $set : { boolean : true}, $unset :{ "address.building" : /./ }})

// équivalent avec Update

db.restaurants.update({ borough: /Bronx/i},{ $set : { boolean : true}, $unset :{ "address.building" : /./ }},{multi : true})

//Vérifier

// Ajouter un champ rating à 5 à tous les restaurants
 db.restaurants.updateMany({},{ $set : {rating : 5} })

// Multiplier le champ rating par 2 pour les restaurants situés dans le Queens

db.restaurants.updateMany({ borough : /Queens/i}, { $mul : { rating:NumberInt(2) }})

// Trouver les restaurants de Brooklyn

db.restaurants.find({borough : /Brooklyn/i}).pretty()

// Limiter les résultats à 100

db.restaurants.find({borough : /Brooklyn/i}).pretty().limit(100)

// Appliquer d'abord un count()

 db.restaurants.find({borough : /Brooklyn/i}).pretty().limit(100).count()


// Puis à la place appliquer un size()
db.restaurants.find({borough : /Brooklyn/i}).pretty().limit(100).size()



// Quelle est la différence ?
size prend en compte le limit et pas le count

// Ajouter une entrée au tableau grades pour le restaurant "Tu-Lu'S Gluten-Free Bakery"

db.restaurants.updateMany({ name : /Tu-Lu/i }, { $push : {grades :{date :new Date("2012-05-23"), grade :"N", score : 10 }  } })

// Vérifier

 db.restaurants.find({ name : /Tu-Lu/i }).pretty()

// Modifier le champ rating pour tous les documents pour qu'il soit égal à la moyenne réelle des grades
// Créer un curseur et le manipuler avec un forEach
 db.restaurants.find().forEach(function(myResto){
	var avg=0
   myResto.grades.forEach(function(grade)
	{
		avg += grade.score;
	})
	avg = avg/myResto.grades.length;
	myResto.rating = avg;

	db.restaurants.save(myResto)	
  }
);


// Quel est le restaurant qui a la meilleure moyenne
