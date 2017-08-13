import axios from 'axios';
var actions = require('actions');
var {hashHistory} = require('react-router');

module.exports = {
  getAllTransactions : (dispatch) => {
    axios.get('/transactions/').then((response) => {
      dispatch(actions.addTransactions(response.data));
    }).catch((err) => {
      dispatch(actions.addTransactions([])); 
      console.log(`Error Fetching Transactions - ${err}`)
    });
     
  },
  getAllBlocks : (dispatch) => {
    axios.get('/blocks').then((response) => {
      dispatch(actions.addBlocks(response.data)); 
    }).catch((err) => {
      dispatch(actions.addBlocks([])); 
      console.log(`Error Fetching blocks - ${err}`)
    }); 
  },
  getBlocksForBank : (bank_id,dispatch) => {
    axios.get(`/blocks/${bank_id}`).then((response) => {
      dispatch(actions.addBlocks(response.data)); 
    }).catch((err) => {
      dispatch(actions.addBlocks([])); 
      console.log(`Error Fetching blocks for a specific bank - ${err}`)
    }); 
  },
  getTransactionsForBank : (bank_id,dispatch) => {
    axios.get(`/transactions/${bank_id}`).then((response) => {
      dispatch(actions.addTransactions(response.data)); 
    }).catch((err) => {
      dispatch(actions.addTransactions([])); 
      console.log(`Error Fetching Transactions for a specific bank - ${err}`)
    }); 
  },
  createTransaction: (data, dispatch) => {
    axios.post('/transactions', data).then((response) => {
        hashHistory.push('/transactions')
    }).catch((err) => {
        console.log(`Error creating transaction - ${err}`)
    })
  }
}