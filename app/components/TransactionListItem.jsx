var React = require('react');
var {connect} = require('react-redux');

export var TransactionListItem = React.createClass({
  render: function(){
    var {id, bank_id, amount, from_acc, to_acc, amount} = this.props;
    return (
      <div>
        <div className="app-table-body-row">
                <div className="app-table-column-tran">
                  {id.toString()}
                </div>
                <div className="app-table-column-tran">
                  {bank_id.toString()}
                </div>
                <div className="app-table-column-tran">
                  {from_acc.toString()}
                </div>
                <div className="app-table-column-tran">
                  {to_acc.toString()}
                </div>
                <div className="app-table-column-tran">
                  {amount && amount.toString()}
                </div>
              </div>
      </div>
    );
  }
});

export default connect()(TransactionListItem);
