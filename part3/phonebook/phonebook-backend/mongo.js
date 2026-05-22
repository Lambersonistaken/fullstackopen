require('dotenv').config()
const mongoose = require('mongoose');


if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = process.env.MONGODB_URI

mongoose.set('strictQuery', false)

mongoose.connect(url, {family: 4})

const noteSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
   name: name,
   number: number,
})

note.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
})

Note.find({}).then(result => {
    console.log('phonebook:')
    result.forEach(note => {
        console.log(`${note.name} ${note.number}`)
    })
    mongoose.connection.close()
})