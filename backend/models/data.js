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
    "account": {
        "users": [
          {
            "name": String,
            "clicks": Number,
            "person_id": String
          },
          {
            "name": String,
            "clicks": Number,
            "person_id": String
          }
        ],
        "accountID": String,
        "accountPW": String
    },
    "caldender_content": {
        "day1":[],
        "day2":[],
        "day3":[],
        "day4":[],
        "day5":[],
        "day6":[],
        "day7":[],
        "day8":[],
        "day9":[],
        "day10":[],
        "day11":[],
        "day12":[],
        "day13":[],
        "day14":[],
        "day15":[],
        "day16":[],
        "day17":[],
        "day18":[],
        "day19":[],
        "day20":[],
        "day21":[],
        "day22":[],
        "day23":[],
        "day24":[]
  
    }
})
const Account = mongoose.model('account', accountSchema, 'adventData')

module.exports = {Counter, Account}