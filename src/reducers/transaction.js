import { EditTransaction, AddTransaction } from '../actions/ActionTypes'

function transaction(state = {}, action) {
  switch(action.type) {
    case AddTransaction:
      return action.payload;
    case EditTransaction:
      if (state.id !== action.payload.id) {
        return state;
      }
      return action.payload;

    default:
      return state;
  }
}

export default transaction
