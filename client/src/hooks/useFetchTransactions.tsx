import TransactionType from "../types/TransactionType";

export const usefetchTransactions = async (
  setTransactions: React.Dispatch<
    React.SetStateAction<TransactionType[] | null>
  >,
  setError: React.Dispatch<React.SetStateAction<boolean>>,
  setTransactionsInitial: React.Dispatch<
    React.SetStateAction<TransactionType[] | null>
  >
) => {
  const response = await fetch("http://localhost:3000/transactions");
  if (response.status === 200) {
    const transactions = await response.json();
    setTransactions(transactions);
    setTransactionsInitial(transactions);
  } else {
    setError(true);
  }
};
