import Button from "./Button";
import CardTitle from "./CardTitle";
import ResultContainer from "./ResultContainer";

const SummaryCard = () => {
  return (
    <div className="summary-card card">
      <CardTitle title={"Summary"} color={"#2D2757"} />
      <ResultContainer />
      <Button title={"Continue"} />
    </div>
  );
};

export default SummaryCard;
