const cassandra = require('cassandra-driver')

const client = new cassandra.Client({ contactPoints: ['127.0.0.1']})
client.connect().then(() => {
    console.log("Successfully connected to Cassandra db")
}).catch((ex) => {
    console.log(`Error connecting to Cassandra db: ${ex}`);
})

module.exports = client