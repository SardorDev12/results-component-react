import "./App.scss";
import ResultCard from "./components/ResultCard";
import SummaryCard from "./components/SummaryCard";
const App = ({ title }) => {
  return (
    <div className="container">
      <ResultCard title={title} />
      <SummaryCard title={title} />
    </div>
  );
};

export default App;
