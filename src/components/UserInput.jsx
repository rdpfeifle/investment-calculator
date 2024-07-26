export function UserInput({ userInput, onChange }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    userInput;
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={initialInvestment}
            name="initialInvestment"
            onChange={onChange}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={annualInvestment}
            onChange={onChange}
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
              onChange={onChange}
              name="expectedReturn"
              required
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              value={duration}
              onChange={onChange}
              name="duration"
              required
            />
          </p>
        </div>
      </div>
    </section>
  );
}
