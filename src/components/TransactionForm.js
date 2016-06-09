import React, { Component } from 'react';

const TransactionFrom = ({transaction = {}, onSubmit, onCancel, title = ""}) => {
  let amountInput, descriptionInput;

  return (

    <form onSubmit={e => {
      e.preventDefault()

      let hasInputsWithoutTexts = [amountInput, descriptionInput]
      .filter(input => !input.value.trim())
      .length > 0

      if( hasInputsWithoutTexts ) {
        return;
      }

      onSubmit(amountInput.value, descriptionInput.value);
    }}>

      <div>
        <h2>{title}</h2>

        <div className="form-group">
          <label>Amount: (ex. 20 or -5)</label>
          <input
            type="number"
            ref={node => {
              amountInput = node
            }}
            defaultValue={transaction.amount}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <input
            ref={node => {
              descriptionInput = node
            }}
            defaultValue={transaction.description}
            className="form-control"
          />
        </div>
      </div>

      <div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        {" "}
        <button
          onClick={e => {
            e.preventDefault()
            onCancel && onCancel()
          }}
          className="btn btn-default">
          Cancel
        </button>
      </div>

    </form>

  )

}

export default TransactionFrom
