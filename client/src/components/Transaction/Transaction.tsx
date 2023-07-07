import React, { useState, useRef } from "react";
import TransactionType from "../../types/TransactionType";
import { gsap } from "gsap";
import { usefetchTransactions } from "../../hooks/useFetchTransactions";

type Props = {
  transaction: TransactionType;
  setTransactions: React.Dispatch<
    React.SetStateAction<TransactionType[] | null>
  >;
  setTransactionsInitial: React.Dispatch<
    React.SetStateAction<TransactionType[] | null>
  >;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};

const Transaction = ({
  transaction,
  setTransactions,
  setTransactionsInitial,
  setError,
}: Props) => {
  const [errorRow, setErrorRow] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const row = useRef<HTMLTableRowElement | null>(null);

  const removeTransaction = () => {
    const settings = {
      method: "DELETE",
      body: JSON.stringify({}),
      headers: {
        "Content-type": "application/json",
      },
    };
    fetch(`http://localhost:3000/transactions/${transaction.id}`, settings)
      .then((response) => response.json())
      .then((data) => {
        setSuccess(true);
        row.current?.classList.add("hide");
        gsap.to(row.current, {
          opacity: 0,
          height: 0,
          duration: 1,
          onComplete: () => {
            usefetchTransactions(
              setTransactions,
              setError,
              setTransactionsInitial
            );
          },
        });
      })
      .catch((err) => {
        setErrorRow(true);
      });
  };

  return (
    <tr ref={row}>
      <td>{transaction.id}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.beneficiary}</td>
      <td>{transaction.account}</td>
      <td>{transaction.address}</td>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>
        <button
          onClick={removeTransaction}
          type="button"
          className="button button--small"
          arial-aria-label="remove item"
        >
          x
        </button>
        {errorRow && <p style={{ color: "red" }}>Coś poszło nie tak.</p>}
        {success && <p className="text-green">Udało się</p>}
      </td>
    </tr>
  );
};

export default Transaction;
