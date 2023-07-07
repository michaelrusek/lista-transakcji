import React from "react";
import TransactionType from "../../types/TransactionType";

const currentBalance = 10000;

const Balance = ({
  transactions,
}: {
  transactions: TransactionType[] | null;
}) => {
  const getBalance = () => {
    const result = transactions?.reduce(function (acc, obj) {
      return acc - obj.amount;
    }, 0);
    return result !== undefined && Math.floor(currentBalance - result);
  };

  return (
    <div className="mb-[5rem] border p-5 max-w-[30rem]">
      <strong className="pr-[2rem]">Balance:</strong>
      {getBalance()} PLN
    </div>
  );
};

export default Balance;
