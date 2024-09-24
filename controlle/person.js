const { error } = require('console');
const Person = require('../models/person');

// creation d'un module global
module.exports.setPersons = (req, res) => {
    // Vérifier si y à un message
    Person.create(req.body, (err, person) => {
        if (err) {
            return res.status(500).json({ error: 'Error creating person' });
        }
        // Réponse si la création réussit
        res.status(201).json(person);
    });
};

module.exports.getPersons = async (req, res,) => {
    const Persons = await Person.find({});
    res.status(200).json({
        data: Persons
    });
}

module.exports.modifPersons = async (req, res) => {
    //   Mise à jour avec findOneAndUpdate()
    try {
        const id = req.params.id;
        const updatedPerson = await Person.findByIdAndUpdate(id, req.body, {
            new: true,  // Retourne le document mis à jour
            runValidators: true  // Exécute les validateurs définis dans le schéma Mongoose
        });
        if (!updatedPerson) {
            return res.status(404).json({ message: 'Person not found' });
        }
        res.json(updatedPerson);  // Retourne la personne mise à jour
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//   Supprimer une personne par _id

module.exports.suppPersons = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedPerson = await Person.findByIdAndDelete(id);

        if (!deletedPerson) {
            return res.status(404).json({ message: 'Person not found' });
        }

        res.json({ message: 'Person deleted successfully', deletedPerson });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}








/*

// création de plusieurs personnage
const arrayOfPeople = [
    { name: 'Jane Doe', age: 22, favoriteFoods: ['Sushi', 'Tacos'] },
    { name: 'Mike Ross', age: 30, favoriteFoods: ['Steak', 'Pasta'] },
    { name: 'Rachel Zane', age: 28, favoriteFoods: ['Salad', 'Burger'] }
];

Person.create(arrayOfPeople, (err, people) => {
    if (err) return console.error(err);
    console.log('People saved:', people);
});

// Rechercher toutes les personnes avec un prénom donné
Person.find({ name: 'John Doe' }, (err, people) => {
    if (err) return console.error(err);
    console.log('Found people:', people);
});

//   Rechercher une personne par aliment préféré
Person.findOne({ favoriteFoods: 'Pizza' }, (err, person) => {
    if (err) return console.error(err);
    console.log('Found person:', person);
});

//   Rechercher une personne par _id
Person.findById(personId, (err, person) => {
    if (err) return console.error(err);
    console.log('Person by ID:', person);
});

//   Mettre à jour une personne par _id
Person.findById(personId, (err, person) => {
    if (err) return console.error(err);

    person.favoriteFoods.push('Hamburger');
    person.save((err, updatedPerson) => {
        if (err) return console.error(err);
        console.log('Updated person:', updatedPerson);
    });
});

//   Mise à jour avec findOneAndUpdate()
Person.findOneAndUpdate(
    { name: personName },
    { age: 20 },
    { new: true },
    (err, updatedPerson) => {
        if (err) return console.error(err);
        console.log('Updated person:', updatedPerson);
    }
);

//   Supprimer une personne par _id
Person.findByIdAndRemove(personId, (err, removedPerson) => {
    if (err) return console.error(err);
    console.log('Removed person:', removedPerson);
});

//   Supprimer plusieurs personnes avec Model.remove()
Person.remove({ name: 'Mary' }, (err, result) => {
    if (err) return console.error(err);
    console.log('Removed people:', result);
});

//   Rechercher et trier avec des aides de chaîne
Person.find({ favoriteFoods: 'Burritos' })
    .sort('name')
    .limit(2)
    .select('-age')
    .exec((err, data) => {
        if (err) return console.error(err);
        console.log('Filtered people:', data);
    });


*/
