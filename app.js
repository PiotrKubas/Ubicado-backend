const express = require('express')
const port = process.env.PORT || 3000
const app = express()

const mongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:bxzPfHKYklnE1XQS@cluster0.nvx90.mongodb.net/ubicado?retryWrites=true&w=majority";

mongoClient.connect(uri, {}, (error,client) => {
    if(error){
        client.send('Failed')
    }
    else client.send('Success')

    const db = client.db('ubicado')
  

    

        
})

app.listen(port)









