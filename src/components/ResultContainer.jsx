import { useState, useEffect } from "react";
import ResultUnit from "./ResultUnit";

const ResultContainer = () => {
  const [resultUnit, setResultUnit] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./data.json");
      const data = await res.json();
      setResultUnit(data);
    };
    fetchData();
  }, []);
  return (
    <div className="results-container">
      {resultUnit.map((item) => {
        const { bgColor, color, category, icon, score } = item;
        return (
          <ResultUnit
            key={category}
            icon={icon}
            title={category}
            score={score}
            color={color}
            bgColor={bgColor}
          />
        );
      })}
    </div>
  );
};

export default ResultContainer;
