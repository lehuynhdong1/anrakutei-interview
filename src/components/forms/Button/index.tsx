import './styles.scss';

const Button = ({ children, ...otherProps }: any) => {
  return (
    <button className="btn" {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
