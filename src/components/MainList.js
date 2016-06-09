import { connect } from 'react-redux'
import TransactionList from './TransactionList'
import { push } from 'react-router-redux'
import deleteTransaction from '../actions/deleteTransaction'

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions
  }
}

const mapDispatchToProps = (dispatch) => {
  return  {
    onTransactionEditClick: (transaction) => {
      const path = `/edit/${transaction.id}`
      dispatch(push(path))
    },
    onTransactionDeleteClick: (transaction) => {
      if( confirm("Are you sure you want to delete the transaction \"" + transaction.description + "\"?") ) {
        dispatch(deleteTransaction(transaction.id))
      }
    }
  }
}

const MainList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionList)

export default MainList
