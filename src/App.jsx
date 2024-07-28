import { useState } from "react";
import { Header } from "./components/Header";
import { ResultsTable } from "./components/ResultsTable";
import { UserInput } from "./components/UserInput";

const initialValues = {
  initialInvestment: 500,
  annualInvestment: 1500,
  expectedReturn: 5,
  duration: 5,
};

function App() {
  const [userInput, setUserInput] = useState(initialValues);

  const isInputValid = userInput.duration >= 1;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [name]: +value,
    }));
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleInputChange} />
      {isInputValid ? (
        <ResultsTable userInput={userInput} />
      ) : (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
