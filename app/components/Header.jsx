var React = require('react');
var AppUtil = require('AppUtil');
var {connect} = require('react-redux');
var rest = require('RestConnector');
var actions = require('actions');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Header = React.createClass({
  onSignout: function (){
    let {dispatch} = this.props;
    dispatch(actions.setAppType(''));
    hashHistory.push('/');
  },
  onRefresh: function () {
    let {dispatch, appType} = this.props;
    if (appType == "ADMIN"){
        rest.getAllBlocks(dispatch);
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
    let {appType} = this.props
    return (
      <nav data-topbar role="navigation" className={"header " + (AppUtil.isAdmin(appType) ? "header_theme" : ((appType == "BOC") ? "header_boc" : "header_white"))}>
            <img className="logo" src={"./images/" + AppUtil.getLogoUrl(appType)}/><span className={"bank-logo-title " + AppUtil.getThemeClass(appType)}>{AppUtil.getLogoName(appType)}</span>
           
            <div className="my-right-menu">
              <ul className={"menu " + AppUtil.getThemeClass(appType)}>
                <li onClick={this.onRefresh}>
<svg viewBox="0 0 79.6 90">
<path className="st0" d="M79.6,50.5C79.6,72.3,61.7,90,39.8,90C17.9,90,0,72.3,0,50.5c0-19.7,15.1-36.6,34.6-39.1
	c0.2-5.8,0.6-10.7,1.3-11.2L36.3,0c2.5,0,25.4,14.5,25.4,17.2c0,0.4-0.3,1-1.1,1.7c-4,4.1-21.5,15.4-24.3,15.4l-0.4-0.1
	c-0.4-0.2-0.8-0.8-1.1-4.9c-0.1-1.6-0.2-4-0.2-6.6c-13.4,2.5-23.3,14.1-23.3,27.8c0,15.6,12.8,28.3,28.5,28.3
	c15.7,0,28.5-12.7,28.5-28.3c0-3.1,2.5-5.6,5.6-5.6C77.1,44.9,79.6,47.4,79.6,50.5z"/>
</svg>  
                </li>
                <li><span onClick={this.onSignout}>Sign out</span></li>
              </ul>
            </div>
      </nav>
    );
  }
});

export default connect(
  (state) => {
    return state
  }
)(Header);

