import { useState } from "react";
import { Header } from "./components/Header";
import { ResultsTable } from "./components/ResultsTable";
import { UserInput } from "./components/UserInput";
// import { calculateInvestmentResults } from "./util/investment";

const initialValues = {
  initialInvestment: 500,
  annualInvestment: 1500,
  expectedReturn: 5,
  duration: 5,
};

function App() {
  const [userInput, setUserInput] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [name]: value,
    }));
  };

  // const calculateInvestments = calculateInvestmentResults(
  //   initialInvestment,
  //   annualInvestment,
  //   expectedReturn,
  //   duration
  // );
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleInputChange} />
      <ResultsTable userInput={userInput} />
    </>
  );
}

export default App;
