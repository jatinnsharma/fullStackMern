const {MongoClient} = require('mongodb')
const url = "mongodb://127.0.0.1:27017"

const database = 'review_app'

const client = new MongoClient(url);

async function dbConnection (){ 
    let result = await client.connect()
    let db = result.db(database)
    return db.collection('users');
}

module.exports= dbConnection;
