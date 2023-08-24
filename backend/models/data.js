//this can be used to post new entries to database
//is this wanted yet?

const mongoose = require('mongoose')

const counterSchema = new mongoose.Schema({
    "_id": Object,
    "_name": String,
    "_amount": Number
})
const Counter = mongoose.model('counter', counterSchema,) //db collection name "counters"... should connect without specs

const accountSchema = new mongoose.Schema({
    "_id": Object,
    "_people": Array
})
const Account = mongoose.model('account', accountSchema, 'adventData')

module.exports = {Counter, Account}