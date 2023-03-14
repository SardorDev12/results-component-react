const Button = ({ title }) => {
  return (
    <button type="button" className={`btn ${title}-btn`}>
      {title}
    </button>
  );
};

export default Button;
