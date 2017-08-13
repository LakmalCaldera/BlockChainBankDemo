var rest = require('RestConnector');

export var addTransaction = (transaction) => {
  return {
    type: 'ADD_TRANSACTION',
    transaction
  }
};

export var addTransactions = (transactions) => {
  return {
    type: 'ADD_TRANSACTIONS',
    transactions
  }
};

export var saveBlockState = (blockId) => {
  return {
    type: 'SAVE_BLOCK_STATE',
    blockId
  }
};

export var addBlock = (block) => {
  return {
    type: 'ADD_BLOCK',
    block
  }
};

export var addBlocks = (blocks) => {
  return {
    type: 'ADD_BLOCKS',
    blocks
  }
};

export var setAppType = (appType) => {
  return {
    type: 'SET_APP_TYPE',
    appType
  }
};

export var setActiveTab = (activeTab) => {
  return {
    type: 'SET_ACTIVE_TAB',
    activeTab
  }
};

export var setLoadingState = (loadingState) => {
  return {
    type: 'SET_LOADING_STATE',
    loadingState
  }
};


