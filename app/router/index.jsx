var React = require('react');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import App from 'App';
import TransactionList from 'TransactionList';
import CreateTransactionForm from 'CreateTransactionForm';
import BlockList from 'BlockList';

export default (
<Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="transactions" component={TransactionList} />
      <Route path="blocks" component={BlockList} />
      <Route path="create" component={CreateTransactionForm} />
      <IndexRoute component={TransactionList}/>
    </Route>
  </Router>
);
