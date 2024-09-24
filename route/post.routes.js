const router = require('express').Router()
const { setPersons, getPersons } = require('../controlle/person');
const { modifPersons, suppPersons } = require('../controlle/person');

//************* CRUD ***********
//Récupérer les données en json
router.get("/search", getPersons)

//Envoyer les données en json
router.post("/create", setPersons)

//Modifier les données en json
router.put("/modif/:id", modifPersons)

//Suprimer les données en json
router.delete("/sup/:id", suppPersons)

module.exports = router