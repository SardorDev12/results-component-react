import CardTitle from "./CardTitle";
import Mark from "./Mark";

const ResultCard = () => {
  return (
    <div className="card result-card">
      <CardTitle title={"Your Result"} color={"hsl(252, 20%, 87%)"} />
      <Mark total={"100"} />
      <h4>Great</h4>
      <p className="mark-desc">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default ResultCard;
