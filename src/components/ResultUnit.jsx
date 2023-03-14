const ResultUnit = ({ bgColor, icon, title, score, color }) => {
  return (
    <div
      key={title}
      className="result-unit"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className="unit-title">
        <img src={icon} alt={title} />
        <h3
          style={{
            color: color,
          }}
          className="title"
        >
          {title}
        </h3>
      </div>

      <h3 className="result">
        {score} /<span className="total"> 100</span>
      </h3>
    </div>
  );
};

export default ResultUnit;
