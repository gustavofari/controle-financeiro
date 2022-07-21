import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Form from "./components/Form";

const App = () => {
  const data = localStorage.getItem("transactions"); // Local Storage
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0); //Entradas
  const [expense, setExpense] = useState(0); //Saídas
  const [total, setTotal] = useState(0); // Total

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense) // filtrar as saídas que sejam true
      .map((transaction) => Number(transaction.amount)); // mapear os valores

    const amountIncome = transactionsList
      .filter((item) => !item.expense) // pegar as entradas (diferentes das saídas);
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2); // Soma os valores de saída
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2); // soma os valores de entrada.

    const total = Math.abs(income - expense).toFixed(2); // Arrendondar

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);

    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);
    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
      <GlobalStyle />
    </>
  );
};

export default App;
