import "./styles.css";
import { CreditInfoForm } from "./CreditInfoForm";

export default function App() {
  var displayAllDetails = (details) => {
    console.log("All the details of the customer are:", details);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CreditInfoForm details={displayAllDetails} />
    </div>
  );
}
