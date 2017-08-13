var React = require('react');
var {connect} = require('react-redux');
var Nav = require('Nav');
var rest = require('RestConnector');
import Header from 'Header';
import HeaderAction from 'HeaderAction';
import Home from 'Home';
import * as Redux from 'react-redux';
var actions = require('actions');

var App = React.createClass({
  render: function(){
    var {appType} = this.props;
    var renderAppBaseOnType = () => {
      if (appType){
          return (<div>
      <Header/>
      <HeaderAction/>
        <div>
            {this.props.children}
        </div>
      </div>)
      }else{
          return (<Home/>)
      }
    }

    return (
      renderAppBaseOnType()
    );
  }
});

export default connect(
  (state) => {
    return state
  }
)(App);
