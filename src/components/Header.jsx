import logo from "../../src/assets/investment-calculator-logo.png";

export function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Investment logo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}
