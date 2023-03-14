const CardTitle = ({ title, color }) => {
  return (
    <h2
      className="card-title"
      style={{
        color: color,
      }}
    >
      {title}
    </h2>
  );
};

export default CardTitle;
