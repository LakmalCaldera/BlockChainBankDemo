var React = require('react');
var Nav = require('Nav');
var Header = require('Header');
var HeaderAction = require('HeaderAction');
import * as Redux from 'react-redux';
var actions = require('actions');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Home = React.createClass({
  render: function(){
    
    var {appType, dispatch} = this.props;

    return (
      <div id="home_page">

      <div className="home_container">
        <img className="home_logo" src="/images/home-logo.png"/>
        <h2 className="home_title">Welcome To The BlockChain Demo App Targeted For Banks.</h2>
        <p className="home_message">Please select the type of client/admin you would like to emulate.</p>
        <div className="home_btns">
        <button className="button expanded home_btn" onClick={()=>{
            dispatch(actions.setAppType("ADMIN"))
            hashHistory.push('/blocks')
        }}>Admin Panel</button>
        <button className="button expanded home_btn" onClick={()=>{
            dispatch(actions.setAppType("SAMPATH"))
            hashHistory.push('/transactions')
        }}>Sampath Bank Block Chain</button>
        <button className="button expanded home_btn" onClick={()=>{
            dispatch(actions.setAppType("HNB"))
            hashHistory.push('/transactions')
        }}>HNB Bank Block Chain</button>
        <button className="button expanded home_btn" onClick={()=>{
            dispatch(actions.setAppType("BOC"))
            hashHistory.push('/transactions')
        }}>BOC Bank Block Chain</button>
        </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(Home);
