var React = require('react');
var {connect} = require('react-redux');
import BlockListItem from 'BlockListItem';
import {sortItems} from 'AppUtil';
var rest = require('RestConnector');
var actions = require('actions');

export var BlockList = React.createClass({
  componentWillMount: function(){
    var {dispatch, appType} = this.props;
        dispatch(actions.saveBlockState(''));
        dispatch(actions.setActiveTab('BLOCKS'));
        if (appType == "ADMIN"){
          rest.getAllBlocks(dispatch);
        } else if (appType == "SAMPATH"){

        } else if (appType == "HNB") {

        } else if (appType == "BOC") {

        }
  },
  render: function(){
    var {blockList, appType} = this.props;

    var renderBlockList = () => {
      console.log("Block list -> "+blockList)
      var sortedBlockList = sortItems(blockList);
      if(sortedBlockList.length == 0) {
        let view = (
          <div className="app-table">
            <div className={"app-table-header "  + (appType == "BOC" ? "header_action_boc" : 
      (appType == "SAMPATH" ? "header_action_sampath" : 
      (appType == "HNB" ? "header_action_hnb" : "header_action_admin")))}>
              <div className="app-table-column-block">
                Block ID
              </div>
              <div className="app-table-column-block">
                Bank ID
              </div>
              <div className="app-table-column-block">
                Verfied By
              </div>
              <div className="app-table-column-block">
                No. Of Transactions
              </div>
            </div>
            <div className="app-table-body">

                <div colSpan="6" className="empty-list-message list-height"><span className="text-message"><div>All Blocks</div><div>Blocks occur when you create transactions.</div></span></div>
              
            </div>
            </div>
        )

      return view;
      } else {
        let view = (

          <div className="app-table">
            <div className={"app-table-header "  + (appType == "BOC" ? "header_action_boc" : 
      (appType == "SAMPATH" ? "header_action_sampath" : 
      (appType == "HNB" ? "header_action_hnb" : "header_action_admin")))}>
              <div className="app-table-column-block">
                Block ID
              </div>
              <div className="app-table-column-block">
                Bank ID
              </div>
              <div className="app-table-column-block">
                Verfied By
              </div>
              <div className="app-table-column-block">
                No. Of Transactions
              </div>
            </div>
            <div className="app-table-body list-limit-height">

                {sortedBlockList.map((block) => {
                  if (block.transactions && block.transactions.length > 0){
                    return (<BlockListItem  key={block.id} {...block}/>);
                  }
                 })}
              
            </div>
            </div>
        )

      return view;
    }
    }

    return (
      <div>
        {renderBlockList()}
        </div>
    );
  }
});

export default connect(
  (state) => {
    return state
  }
)(BlockList);