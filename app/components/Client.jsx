
var React = require('react');

var Client = React.createClass({
  render: function(){
    return (
      <div>
      <Header/>
      <HeaderAction/>
      <Nav/>
        <div className="row">
          <div className="colums medium-6 large-4 small-centered">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Client;
