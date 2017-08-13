var redux = require('redux');
var {blockListReducer, transactionListReducer, appTypeReducer, activeTabReducer, loadingStateReducer, blockStateReducer} = require('reducers');

export var configure = () => {
  var reducers = redux.combineReducers({
    blockList: blockListReducer,
    transactionList: transactionListReducer,
    appType: appTypeReducer,
    activeTab: activeTabReducer,
    loadingState: loadingStateReducer,
    blockId: blockStateReducer
  });

  return redux.createStore(reducers, redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f));
}
