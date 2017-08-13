const dbClient = require('../db/cassandra')
const cassandra = require('cassandra-driver')

module.exports = {
    getTransactions: async (req, res, next) => {
        const query = "Select * from zchain.transactions"
        try {
            const result = await dbClient.execute(query);
            res.status(200).json(result.rows);
        } catch(err){
            next({status: 500, err});
        }
    },
    getTransaction: async (req, res, next) => {
        const query = "Select * from zchain.transactions where bank_id = ?"
        try {
            const result = await dbClient.execute(query, [req.params.id]);
            res.status(200).json(result.rows);
        } catch(err){
            next({status: 500, err});
        }
    },
    newTransaction: async(req, res, next) => {
        const query = "Insert into zchain.transactions (bank_id, id, amount, from_acc, timestamp, to_acc) values (?, ?, ?, ?, ?, ?)"
        try{
            const bank_id = req.body["bank_id"]
            const id = cassandra.types.uuid()
            const amount = req.body["amount"]
            const from_acc = req.body["from_acc"]
            const timestamp = Math.floor(Date.now() / 1000)
            const to_acc = req.body["to_acc"]

            console.log(`bank_id - ${bank_id}, id - ${id}, amount - ${amount}, from_acc - ${from_acc}, timestamp - ${timestamp}, to_acc - ${to_acc}`)

            const result = await dbClient.execute(query, [bank_id, id, amount, from_acc, timestamp, to_acc], { prepare : true });
            res.status(200).json();
        }catch(err){
            console.log(JSON.stringify(err, undefined, 2))
            next({status: 500, err});
        }
    }
}