import { AddTransaction } from "./ActionTypes"
import { v4 } from "node-uuid"

const addTransaction = (amount, description) => ({
  type: AddTransaction,
  payload: {
    id: v4(),
    amount: Number.parseFloat(amount),
    description
  }
})

export default addTransaction
