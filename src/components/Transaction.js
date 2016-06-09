import React, { Component } from 'react';

const Transaction = ({transaction, onEditClick, onDeleteClick}) => {
  var isIncome = transaction.amount >= 0;
  return (
    <tr className={isIncome ? "income" : "expense"}>
      <td className="transation-amount">
        <span className={isIncome ? "text-success" : "text-danger"}>
          {transaction.amount}
        </span>
      </td>
      <td className="transation-description">
        {transaction.description}
      </td>
      <td className="transaction-options">
        <button onClick={onEditClick} className="btn btn-default">
           <span className="glyphicon glyphicon-pencil"></span> {" "}
          Edit
        </button>
        {" "}
        <button onClick={onDeleteClick} className="btn btn-danger">
          <span className="glyphicon glyphicon-trash"></span> {" "}
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Transaction
