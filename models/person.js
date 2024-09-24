const mongoose = require('mongoose');

// Création du modèle de schéma Person
const personSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: true 
        },
        age: {
            type: Number, // Correction ici : spécifiez le type correctement
            required: true 
        },
        favoriteFoods: {
            type: [String],
            required: true
        } 
    },
    {
        timestamps: true // Ajout des timestamps createdAt et updatedAt
    }
);

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
