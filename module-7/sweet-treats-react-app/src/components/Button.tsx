interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, color = "outline-primary", onClick }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color + " mt-2"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
