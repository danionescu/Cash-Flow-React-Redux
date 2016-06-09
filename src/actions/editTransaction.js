import { EditTransaction } from "./ActionTypes"

const editTransaction = (id, amount, description) => ({
  type: EditTransaction,
  payload: {
    id,
    amount: Number.parseFloat(amount),
    description
  }
})

export default editTransaction
