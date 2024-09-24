const mongoose = require("mongoose")

// Pour ce connecté avec mongoose
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        // Connection à la basse de données mongoDB
        mongoose.connect(process.env.MONGO_URI, () => {
            console.log('Mongo connecté')
        })
    } catch (err) {
        console.log(err);
        process.exit(-1)
    }
}

module.exports = connectDB