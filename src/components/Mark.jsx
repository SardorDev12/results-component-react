import { useEffect, useState, memo } from "react";

const Mark = ({ total }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("../../data.json");
      const data = await res.json();
      setScore(() => {
        let score = 0;
        data.map((item) => {
          score = score + item.score;
        });
        return Math.round(score / data.length);
      });
    };
    fetchData();
  });

  return (
    <div className="mark-circle">
      <h2 className="final-mark">{score}</h2>
      <p className="total">of {total}</p>
    </div>
  );
};

export default memo(Mark);
