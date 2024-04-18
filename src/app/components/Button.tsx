"use client";
type ButtonProps = {
  id: number;
};

const Button = (props: ButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`Button clicked with ID: ${props.id}`, event);
  };
  return <button onClick={handleClick}>Click</button>;
};

export default Button;
