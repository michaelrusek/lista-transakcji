import React, { useEffect, useState } from "react";
import styles from "./Transactions.module.scss";
import TransactionType from "../../types/TransactionType";
import Transaction from "../Transaction/Transaction";
import uuid from "react-uuid";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const transactionsPerPage = 20;
const skeleton = (
  <>
    <Skeleton count={1} style={{ width: "70%" }} />
    <Skeleton count={2} style={{ width: "100%" }} />
  </>
);

type Props = {
  transactions: TransactionType[] | null;
  setTransactions: React.Dispatch<
    React.SetStateAction<TransactionType[] | null>
  >;
  beneficiary: string | undefined;
  setBeneficiary: React.Dispatch<React.SetStateAction<string | undefined>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setTransactionsInitial: React.Dispatch<
    React.SetStateAction<TransactionType[] | null>
  >;
};

const Transactions = ({
  transactions,
  setTransactions,
  beneficiary,
  setBeneficiary,
  error,
  setError,
  loading,
  setLoading,
  setTransactionsInitial,
}: Props) => {
  const [next, setNext] = useState<number>(transactionsPerPage);

  const handleMoreTransactions = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setNext(next + transactionsPerPage);
    }, 1000);
  };

  return (
    <section className="py-[4rem] sm:py-[6rem]">
      <div className="container">
        <h2 className="text-center title mb-[5rem]">Lista transakcji</h2>

        {transactions === null && !error && skeleton}
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-6 py-3 relative rounded-[10px]"
            role="alert"
          >
            <strong className="font-bold">Błąd: </strong>
            <span className="block sm:inline">
              Coś poszło nie tak. Spróbuj ponownie za kilka minut.
            </span>
          </div>
        )}
        {transactions?.length === 0 && <p>Brak wyników</p>}
        {transactions !== null && transactions.length !== 0 && (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Amount</th>
                <th>Beneficiary</th>
                <th>Account</th>
                <th>Address</th>
                <th>Date</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {transactions?.slice(0, next).map((transaction) => (
                <Transaction
                  key={uuid()}
                  transaction={transaction}
                  setTransactions={setTransactions}
                  setTransactionsInitial={setTransactionsInitial}
                  setError={setError}
                />
              ))}
            </tbody>
          </table>
        )}

        {loading && skeleton}
        <div className="mt-10 text-center">
          {transactions && next < transactions?.length && (
            <button
              type="button"
              className="button inline-flex"
              onClick={handleMoreTransactions}
            >
              Załaduj więcej
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Transactions;
