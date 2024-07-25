import { useState } from "react";

const initialValues = {
  initialInvestment: 500,
  annualInvestment: 1500,
  expectedReturn: 5,
  duration: 5,
};

export function UserInput() {
  const [userInput, setUserInput] = useState(initialValues);

  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    userInput;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [name]: value,
    }));
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={initialInvestment}
            name="initialInvestment"
            onChange={handleInputChange}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={annualInvestment}
            onChange={handleInputChange}
            name="annualInvestment"
            required
          />
        </p>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              value={expectedReturn}
              onChange={handleInputChange}
              name="expectedReturn"
              required
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              value={duration}
              onChange={handleInputChange}
              name="duration"
              required
            />
          </p>
        </div>
      </div>
    </section>
  );
}
