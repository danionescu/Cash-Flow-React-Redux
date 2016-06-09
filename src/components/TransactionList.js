import React, { Component } from 'react';
import Transaction from './Transaction'

const TransactionList = ({transactions, onTransactionEditClick, onTransactionDeleteClick}) => {
  var rendered;
  var total = transactions.reduce((memo, item) => item.amount + memo, 0);
  var optionsTHStyle = {
    width: "200px"
  };

  if( transactions.length > 0 ) {
    rendered = (
      <table className="table table-hover">
        <tbody>

          <tr>
            <th>Amount</th>
            <th>Description</th>
            <th style={optionsTHStyle}></th>
          </tr>

          {transactions.map(item =>
            <Transaction key={item.id}
            transaction={item}
            onEditClick={() => {
              onTransactionEditClick(item)
            }}
            onDeleteClick={() => {
              onTransactionDeleteClick(item)
            }}
            />
          )}

          <tr>
            <th>
              <span className={total >= 0 ? "" : "text-danger"}>
                Total: {total}
              </span>
            </th>
            <th colSpan="3">
            </th>
          </tr>

        </tbody>
      </table>
    );
  } else {
    rendered = (
      <h2>No transactions added yet.</h2>
    )
  }

  return rendered;
}

export default TransactionList
