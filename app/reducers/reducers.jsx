export var transactionListReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_TRANACTION':
    return [
      ...state,
      action.transaction
    ];
    case 'ADD_TRANSACTIONS':
    return [
      ...action.transactions
    ];
    default:
    return state;
  }
}

export var blockListReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_BLOCK':
    return [
      ...state,
      ...action.block
    ];
    case 'ADD_BLOCKS':
    return [
      ...action.blocks
    ];
    default:
    return state;
  }
}

export var blockStateReducer = (state = '', action) => {
  switch(action.type){
    case 'SAVE_BLOCK_STATE':
      return action.blockId;
    default:
      return state;
  }
}

export var appTypeReducer = (state = '', action) => {
  switch(action.type){
    case 'SET_APP_TYPE':
      return action.appType;
    default:
      return state;
  }
}

export var activeTabReducer = (state = 'BLOCKS', action) => {
  switch(action.type){
    case 'SET_ACTIVE_TAB':
      return action.activeTab;
    default:
      return state;
  }
}

export var loadingStateReducer = (state = false, action) => {
  switch(action.type){
    case 'SET_LOADING_STATE':
      return action.loadingState;
    default:
      return state;
  }
}
