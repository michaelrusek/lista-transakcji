import TransactionType from "../../types/TransactionType";

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
  transactionsInitial: TransactionType[] | null;
  setTransactionsInitial: React.Dispatch<
    React.SetStateAction<TransactionType[] | null>
  >;
};

export default Props;
