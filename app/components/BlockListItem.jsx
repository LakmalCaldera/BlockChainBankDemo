var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


export var BlockListItem = React.createClass({
  render: function(){
    var {id, bank_id, signatures, transactions, timestamp, blockId, appType} = this.props;
    var renderTransactionRows = () => {
      return transactions ? transactions.map((transaction) => {
        return (
          <div className="app-table-body-row">
                <div className="app-table-column-block">
                  {transaction.id.toString()}
                </div>
                <div className="app-table-column-block">
                  {transaction.from_acc.toString()}
                </div>
                <div className="app-table-column-block">
                  {transaction.to_acc.toString()}
                </div>
                <div className="app-table-column-block">
                  {transaction.amount && transaction.amount.toString()}
                </div>
              </div>
        )
      }) : []
    }

    return (
      <div className={"my-accord " + ((blockId == id) ? "is-active" : "")} onClick={() => {
       var {dispatch, id, blockId} = this.props;
         console.log(`id -> ${id.toString()}`);
         if(id == blockId){
          dispatch(actions.saveBlockState(''));
         }else {
         dispatch(actions.saveBlockState(id.toString()));
         }
     }}>

      <div className={"my-accord-header " + ((blockId == id) ? "is-active" : "")}>

        <div className="app-table-body-row">
                <div className="app-table-column-block">
                  <img src="/images/right-arrow.svg" className={"right-arrow " + ((blockId == id) ? "down" : "")}/>
                  {id.toString()}
                </div>
                <div className="app-table-column-block">
                  {bank_id.toString()}
                </div>
                <div className="app-table-column-block">
                  {signatures != null ? signatures.map((signature)=>signature.bank_id).join(",") : ''}
                </div>
                <div className="app-table-column-block">
                  {transactions != undefined ? transactions.length : 0}
                </div>
        </div>

      </div>

        <div className={"my-accord-body " + ((blockId == id) ? "is-active" : "")}>
              <div className={"app-table-header "  + (appType == "BOC" ? "header_action_boc" : 
      (appType == "SAMPATH" ? "header_action_sampath" : 
      (appType == "HNB" ? "header_action_hnb" : "header_action_admin")))}>
                <div className="app-table-column-block">
                  Transaction ID
                </div>
                <div className="app-table-column-block">
                  From Acc
                </div>
                <div className="app-table-column-block">
                  To Acc
                </div>
                <div className="app-table-column-block">
                  Amount
                </div>
              </div>
              <div className="app-table-body">
                {renderTransactionRows()}
              </div>
        </div>

      </div>
    );
  }
});

export default connect(
  (state) => {
    return state
  }
)(BlockListItem);
