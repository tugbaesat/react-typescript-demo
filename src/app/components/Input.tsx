'use client'
type InputProps = {
  value: string;
};

const Input = (props: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <input
      type="text"
      name=""
      id=""
      value={props.value}
      onChange={handleChange}
    />
  );
};

export default Input;
