import { connect } from 'react-redux'
import TransactionForm from './TransactionForm'
import editTransaction from '../actions/editTransaction'
import { push } from 'react-router-redux'


const mapStateToProps = (state, ownProps) => {
  return {
    transaction: state.transactions.find(transaction => transaction.id == ownProps.params.id),
    title: "Edit transaction"
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return  {
    onSubmit: (amount, description) => {
      dispatch(editTransaction(ownProps.params.id, amount, description))
      dispatch(push("/"))
    },
    onCancel: () => {
      dispatch(push("/"))
    }
  }
}

const EditTransaction = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionForm)

export default EditTransaction
