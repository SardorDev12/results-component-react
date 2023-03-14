const Button = ({ title }) => {
  return <button className={`btn ${title}-btn`}>{title}</button>;
};

export default Button;
