import { connect } from 'react-redux'
import TransactionForm from './TransactionForm'
import addTransaction from '../actions/addTransaction'
import { push } from 'react-router-redux'

const mapStateToProps = (state, ownProps) => {
  return {
    title: "Add transaction"
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return  {
    onSubmit: (amount, description) => {
      dispatch(addTransaction(amount, description))
      dispatch(push("/"))
    },
    onCancel: () => {
      dispatch(push("/"))
    }
  }
}

const AddTransaction = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionForm)

export default AddTransaction
