import { DeleteTransaction } from "./ActionTypes"

const deleteTransaction = (id) => ({
  type: DeleteTransaction,
  payload: {
    id
  }
})

export default deleteTransaction
