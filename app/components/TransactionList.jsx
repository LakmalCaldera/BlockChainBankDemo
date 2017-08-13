var React = require('react');
var {connect} = require('react-redux');
import TransactionListItem from 'TransactionListItem';
import {sortItems} from 'AppUtil';
var actions = require('actions');
var rest = require('RestConnector');

export var TransactionList = React.createClass({
  componentWillMount: function() {
    var {dispatch, appType} = this.props;
    dispatch(actions.setActiveTab('TRANSACTIONS'));
    if (appType == "ADMIN"){
          rest.getAllTransactions(dispatch);
        } else if (appType == "SAMPATH"){
          rest.getTransactionsForBank("sampath", dispatch);
        } else if (appType == "HNB") {
          rest.getTransactionsForBank("hnb", dispatch);
        } else if (appType == "BOC") {
          rest.getTransactionsForBank("boc", dispatch);
        }
  },
  render: function(){
    var {transactionList, appType} = this.props;
    var renderTransactions = () => {
      var sortedTransactionList = sortItems(transactionList);
      if(sortedTransactionList.length == 0) {
        let view = (
          <div className="app-table">
            <div className={"app-table-header "  + (appType == "BOC" ? "header_action_boc" : 
      (appType == "SAMPATH" ? "header_action_sampath" : 
      (appType == "HNB" ? "header_action_hnb" : "header_action_admin")))}>
              <div className="app-table-column-tran">
                Transaction ID
              </div>
              <div className="app-table-column-tran">
                Bank ID
              </div>
              <div className="app-table-column-tran">
                From Acc
              </div>
              <div className="app-table-column-tran">
                To Acc
              </div>
              <div className="app-table-column-tran">
                Amount
              </div>
            </div>
            <div className="app-table-body">

                <div colSpan="6" className="empty-list-message list-height"><span className="text-message"><div>All Transactions</div><div>Transactions occur when you transfer money between accounts.</div></span></div>
              
            </div>
            </div>
        )

      return view;
      } else {
        let view = (

          <div id="transactions_list" className="app-table">
            <div className={"app-table-header "  + (appType == "BOC" ? "header_action_boc" : 
      (appType == "SAMPATH" ? "header_action_sampath" : 
      (appType == "HNB" ? "header_action_hnb" : "header_action_admin")))}>
              <div className="app-table-column-tran">
                Transaction ID
              </div>
              <div className="app-table-column-tran">
                Bank ID
              </div>
              <div className="app-table-column-tran">
                From Acc
              </div>
              <div className="app-table-column-tran">
                To Acc
              </div>
              <div className="app-table-column-tran">
                Amount
              </div>
            </div>
            <div className="app-table-body list-limit-height">

                {sortedTransactionList.map((transaction) => {
                  return (<TransactionListItem  key={transaction.id} {...transaction}/>);
                 })}
              
            </div>
            </div>
        )

      return view;
    }
    }

    return (
      <div>{renderTransactions()}</div>
    );
  }
});

export default connect(
  (state) => {
    return state
  }
)(TransactionList);