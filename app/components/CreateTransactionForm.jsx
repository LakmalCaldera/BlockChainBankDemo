var React = require('react');
var {connect} = require('react-redux');
import BlockListItem from 'BlockListItem';
import {sortItems} from 'AppUtil';
var rest = require('RestConnector');
var actions = require('actions');

export var CreateTransactionForm = React.createClass({
  onSubmitForm: function(e){
    e.preventDefault();
    var toAccRef = this.refs.to_acc
    var fromAccRef = this.refs.from_acc
    var amountRef = this.refs.amount
    var bankIdRef = this.refs.bank_id
    var {dispatch} = this.props;
    if(toAccRef.value.length > 0 && fromAccRef.value.length > 0 && amountRef.value.length > 0){
    rest.createTransaction({
        bank_id: bankIdRef.value,
        to_acc: toAccRef.value,
        from_acc: fromAccRef.value,
        amount: amountRef.value
      }, dispatch);
      taskRef.value = '';
    } else {
        alert('All Fields need to be filled.')
    }
  },
  render: function(){
    return(
          <div className="create_form">

          <div className="">
  <div className="login-box">
  <div className="">
  <div className="">
    <form onSubmit={this.onSubmitForm}>
        <h3>Create Transaction Form:</h3>
        <div className="">
         <div className="">
             <label for="bank_id">Enter the bank to which your account belongs:</label>
             <input type="text" name="bank_id" placeholder="Account Bank"  ref="bank_id" />
         </div>
       </div>
       <div className="">
         <div className="">
             <label for="from_acc">Enter your account id:</label>
             <input type="text" name="from_acc" placeholder="Your Account ID"  ref="from_acc" />
         </div>
       </div>
       <div className="">
         <div className="">
             <label for="from_acc">Enter the accound Id to which you want to transfer to:</label>
             <input type="text" name="to_acc" placeholder="Enter Another Account ID"  ref="to_acc"/>
         </div>
       </div>
       <div className="">
         <div className="">
             <label for="from_acc">Enter the amount you want to transfer:</label>
             <input type="text" name="amount" placeholder="Enter Amount"  ref="amount"/>
         </div>
       </div>
      <div className="">
        <div className="">
          <input type="submit" className="button expand" value="Create Transaction"/>
        </div>
      </div>
    </form>
  </div>
</div>
</div>
</div>
           
        </div>
        )
    }
});

export default connect(
  (state) => {
    return state
  }
)(CreateTransactionForm);