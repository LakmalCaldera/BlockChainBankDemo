var React = require('react');
var AppUtil = require('AppUtil');
var {connect} = require('react-redux');
var rest = require('RestConnector');
var actions = require('actions');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Link, IndexLink} = require('react-router');

var HeaderAction = React.createClass({
  isActiveTab: function(expectingActiveTab){
    let {activeTab, appType} = this.props;
    return appType != "ADMIN" && activeTab == "BLOCKS" ? false : expectingActiveTab == appType;
  },
  render: function(){
    let {dispatch, activeTab, appType} = this.props;

    var getBlocksTabIfAdmin = () => {
      if(appType == "ADMIN"){
      return (
        <IndexLink to="/blocks" className={"header-action-btn " + (activeTab == "BLOCKS" ? "active" : "")} onClick={() => {
            dispatch(actions.setActiveTab('BLOCKS'));
          }}> Blocks
        </IndexLink>
      )
      }
    }
    return (
      <div className={"header-action"}>
        {getBlocksTabIfAdmin()}
        <IndexLink to="/transactions" className={"header-action-btn " + (activeTab == "TRANSACTIONS" ? "active" : "")} onClick={() => {
            dispatch(actions.setActiveTab('TRANSACTIONS'));
          }}>
              Transactions
        </IndexLink>
        <IndexLink to="/create"  className={"header-action-btn " + (activeTab == "CREATE_TRANSACTION" ? "active" : "")} onClick={() => {
            dispatch(actions.setActiveTab('CREATE_TRANSACTION'));
          }}>
              Send Money
        </IndexLink>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state
  }
)(HeaderAction);