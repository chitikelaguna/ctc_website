import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  className = "",
  type = "button",
  onClick,
}) => {
  if (to) {
    return (
      <Link to={to} className={`btn ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;