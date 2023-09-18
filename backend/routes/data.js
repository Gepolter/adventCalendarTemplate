const express = require('express')
const router = express.Router()
//const uuid = require("uuid")
const {Counter, Account} = require('../models/data')
const mongoose = require('mongoose')

router.get('/', (req,res)=>{
    res.send("Our advent route")
    console.log("adventRoute")
})



router.get("/countersAll", function(req, res) {
    console.log("calledStuff")
    Counter.find({}, function(err, counter){
        var counterMap = []
        counter.forEach(function(counter){
            counterMap[counter._id] = counter
            console.log(counter._id)
        })
        res.send(counterMap)
    })
}),

router.get('/counters/:_name', async (req,res) =>{
    const { _name } = req.params
    const counter = await Counter.find({}, function(err, counter){
        var counterMap = []
        counter.forEach(function(counter){
            counterMap[counter._name] = counter
        })
        res.send(counterMap)
    })
})
router.get("/accountsAll", function(req, res){
    Account.find({}, function(err, account) {
        var accountMap = []
        account.forEach(element => {
            //console.log(element)
            accountMap.push(element)
            //console.log(accountMap)
        });
        res.send(accountMap)
    })
})
router.get("/id/:_id/pw/:_pw", function(req,res){
    let pipeline = [
        {$match: {'account_data.accountID': req.params._id}},
        {$match:  {'account_data.accountPW': req.params._pw}}
    ]
    
    let result
    Account.find({}, async function(err, accounts){
        result = await Account.aggregate(pipeline)
        /*
        accounts.forEach(function(account){
            console.log(account)
            console.log(req.params)
            if(account.account_data.accountID == req.params._id && account.account_data.accountPW == req.params._pw){
                foundAccount = account
            }
        })*/
        console.log(result)
        res.send(result)
    })
})
// test search anna URL: http://localhost:3051/advent/id/637a1de1d9a21a0e68e29328/person/637a2381d9a21a0e68e29329
router.get("/id/:_id/person/:_person_id", function(req, res) {
    

    Account.find({}, function(err, accounts) {
        var foundPerson
        accounts.forEach(function(account){
            if(account._id == req.params._id){
                //console.log(account)
                account._people.forEach(function(person){
                    //console.log(person._person_id)
                    if(person._person_id == req.params._person_id) {
                        foundPerson = person
                    }
                })
            }
        })
        //console.log(foundPerson)
        res.send(foundPerson)
    })
})

//setter routes
router.put('/clickInc/id/:_id/person/:_person_id', async function (req, res) {
    console.log("try put")
    const idObj = mongoose.Types.ObjectId(req.params._id)
    const idPers = mongoose.Types.ObjectId(req.params._person_id)
    const acc = await Account.findOneAndUpdate(
        {_id: idObj},
        {$inc: { "_people.$[elem]._clicks" : 1} },
        {arrayFilters: [ { "elem._person_id": idPers } ] }
    )
    //console.log(acc)
    res.send(acc)
})

/*
router.get("/armorAll", function(req, res) {
    Armor.find({}, function(err, armor){
        var armorMap = []
        armor.forEach(function(armor){
            armorMap[armor._id] = armor
        })
        res.send(armorMap)
    })
})
*/
/*
router.get("/plotPrnFilter", function(req, res) {
    let filter = req.params.filter 
    let value = req.params.value
    
    PlotPrnData
})
*/
//time -> moment.isAfter(date: String, 'day')
//text.substr(0,10)
//Ebenen



//get requests for specific weeks / months
//"/dataEntries?Week=x&Month=y&Year=z"

//ONE GET REQUEST PER PLOT!!!
/*
    by configuring the get request params in frontend
*/


module.exports = router
