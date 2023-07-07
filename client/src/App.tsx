import React, { useState, useEffect } from "react";
import Header from "./layout/Header/Header";
import Transactions from "./components/Transactions/Transactions";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import Footer from "./layout/Footer/Footer";
import TransactionType from "./types/TransactionType";
import { usefetchTransactions } from "./hooks/useFetchTransactions";

function App() {
  const [transactions, setTransactions] = useState<TransactionType[] | null>(
    null
  );
  const [transactionsInitial, setTransactionsInitial] = useState<
    TransactionType[] | null
  >(null);
  const [beneficiary, setBeneficiary] = useState<string | undefined>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    usefetchTransactions(setTransactions, setError, setTransactionsInitial);
  }, []);

  return (
    <div className="App">
      <Header />
      <AddTransaction
        transactions={transactions}
        setTransactions={setTransactions}
        beneficiary={beneficiary}
        setBeneficiary={setBeneficiary}
        error={error}
        setError={setError}
        loading={loading}
        setLoading={setLoading}
        transactionsInitial={transactionsInitial}
        setTransactionsInitial={setTransactionsInitial}
      />
      <Transactions
        transactions={transactions}
        setTransactions={setTransactions}
        beneficiary={beneficiary}
        setBeneficiary={setBeneficiary}
        error={error}
        setError={setError}
        loading={loading}
        setLoading={setLoading}
        setTransactionsInitial={setTransactionsInitial}
      />
      <Footer />
    </div>
  );
}

export default App;
