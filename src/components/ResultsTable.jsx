import { calculateInvestmentResults, formatter } from "../util/investment";

export function ResultsTable({ userInput }) {
  const results = calculateInvestmentResults(userInput);

  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Investment Value</th>
          <th scope="col">Interest (Year)</th>
          <th scope="col">Total Interest</th>
          <th scope="col">Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map(({ year, valueEndOfYear, interest, annualInvestment }) => {
          const totalInterest =
            valueEndOfYear - annualInvestment * year - initialInvestment;

          const totalAmountInvested = valueEndOfYear - totalInterest;

          return (
            <tr key={year}>
              <td>{year}</td>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
