import {EditTransaction, AddTransaction, DeleteTransaction} from '../actions/ActionTypes'
import transaction from './transaction'

const transactions = function(state = [], action) {
  switch (action.type) {
    case AddTransaction:
      return [
        ...state,
        transaction(undefined, action)
      ];

    case EditTransaction:
      return state.map(item => transaction(item, action));

    case DeleteTransaction:
      return state.filter(item => item.id !== action.payload.id);

    default:
      return state;
  }
}

export default transactions
