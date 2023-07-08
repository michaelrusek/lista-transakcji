import React, { useEffect, useState } from "react";
import styles from "./AddTransaction.module.scss";
import { TextField } from "@mui/material";
import TransactionType from "../../types/TransactionType";
import { useForm, SubmitHandler } from "react-hook-form";
import Balance from "../Balance/Balance";
import { usefetchTransactions } from "../../hooks/useFetchTransactions";
import Filter from "../Filter.tsx/Filter";
import Error from "../Error/Error";
import Success from "../Success/Success";
import Props from "./AddTRansactionProps";
import Inputs from "./AddTransactionInputType";

const AddTransaction = ({
  setTransactions,
  beneficiary,
  setBeneficiary,
  setError,
  setLoading,
  transactionsInitial,
  setTransactionsInitial,
}: Props) => {
  const [allowKeyword, setAllowKeyword] = useState<boolean>(true);
  const [submitError, setSubmitError] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>(
    "Coś poszło nie tak. Spróbuj ponownie za kilka minut."
  );

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const date = new Date();
    const reg = new RegExp("^[0-9]+$");

    if (!reg.test(data.amount)) {
      setSubmitError(true);
      setSubmitSuccess(false);
      setMessage(
        "Wpisz kwotę składającą się z samych cyft. Musi to być kwota dodatnia."
      );
      return;
    }

    fetch("http://localhost:3000/transactions", {
      method: "POST",
      body: JSON.stringify({
        amount: -data.amount,
        beneficiary: data.beneficiary,
        account: data.account,
        address: data.address,
        date: date,
        description: data.description,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSubmitError(false);
        setSubmitSuccess(true);
        usefetchTransactions(setTransactions, setError, setTransactionsInitial);
      })
      .catch((err) => {
        setMessage("Coś poszło nie tak. Spróbuj ponownie za kilka minut.");
        setSubmitError(true);
        setSubmitSuccess(true);
      });
  };

  useEffect(() => {
    if (transactionsInitial !== null && beneficiary !== undefined) {
      const oldTransactions: TransactionType[] = [...transactionsInitial];
      const beneficiaryTransactions = oldTransactions.filter((t) =>
        t.beneficiary.includes(beneficiary)
      );
      setTransactions(beneficiaryTransactions);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beneficiary, setBeneficiary]);

  const handleInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);

    if (allowKeyword) {
      setAllowKeyword(false);

      setTimeout(() => {
        setBeneficiary(event.target.value);
        setAllowKeyword(true);
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <section className={`${styles.form} py-[6rem]`}>
      <div className="container grid sm:grid-cols-2 gap-8">
        <div className="flex-col flex">
          <Balance transactions={transactionsInitial} />

          <Filter onChange={handleInput} />
        </div>
        <div>
          <h2 className="mb-5">Add transaction</h2>
          {submitError && <Error message={message} />}
          {submitSuccess && <Success />}

          <form
            className="flex flex-col gap-[2rem] mt-[3rem]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              label="Amount"
              variant="outlined"
              {...register("amount")}
              type="number"
              required
            />

            <TextField
              label="Account number"
              variant="outlined"
              type="number"
              {...register("account")}
              required
            />
            <TextField
              label="Address"
              variant="outlined"
              {...register("address")}
              required
            />
            <TextField
              label="Description"
              variant="outlined"
              {...register("description")}
              multiline={true}
              minRows={4}
              required
            />
            <TextField
              label="Beneficiary"
              variant="outlined"
              {...register("beneficiary")}
              required
            />

            <button className="button max-w-max" type="submit">
              Dodaj transakcję
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddTransaction;
