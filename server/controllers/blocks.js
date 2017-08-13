const dbClient = require('../db/cassandra')
const cassandra = require('cassandra-driver')

const prepareInsertStatement = (signatures, transactions) => {
    let sigList = ''
    sigList += signatures.map((signature) => {
        return `{bank_id: '${signature.bank_id}', digsig: '${signature.digsig}'}`
    })
    let tranList = ''
    tranList += transactions.map((transaction) => {
        const tranTimestamp = Math.floor(Date.now() / 1000)
        return `{bank_id: '${transaction.bank_id}', id: ${cassandra.types.uuid()}, amount: ${transaction.amount}, from_acc: '${transaction.from_acc}', timestamp: ${tranTimestamp}, to_acc: '${transaction.to_acc}'}`
    })

    return `Insert into zchain.blocks (bank_id, id, signatures, timestamp, transactions) values (?, ?, {${sigList}}, ?, {${tranList}})`
}

module.exports = {
    getBlocks: async (req, res, next) => {
        const query = "Select * from zchain.blocks"
        try {
            const result = await dbClient.execute(query);
            res.status(200).json(result.rows);
        } catch(err){
            next({status: 500, err});
        }
    },
    getBlock: async (req, res, next) => {
        const query = "Select * from zchain.blocks where bank_id = ?"
        try {
            const result = await dbClient.execute(query, [req.params.id]);
            res.status(200).json(result.rows);
        } catch(err){
            next({status: 500, err});
        }
    },
    newBlock: async(req, res, next) => {
                              
        try{
            const bank_id = req.body["bank_id"]
            const id = cassandra.types.uuid()
            const signatures = req.body["signatures"] // [{}, {}, {}]
            const timestamp = Math.floor(Date.now() / 1000)
            const transactions = req.body["transactions"]

            const query = prepareInsertStatement(signatures, transactions)
            console.log(`query -> ${query}`)
            const result = await dbClient.execute(query, [bank_id, id, timestamp], { prepare : true });
            res.status(200).json();
        }catch(err){
            console.log(JSON.stringify(err, undefined, 2))
            next({status: 500, err});
        }
    }
}