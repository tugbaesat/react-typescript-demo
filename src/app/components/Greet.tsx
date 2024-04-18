type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div className="flex justify-center items-center">
      <h1>
        {props.isLoggedIn
          ? `Hello ${props.name}. You've 
          ${messageCount} unread messages!`
          : `Welcome Guest`}
      </h1>
    </div>
  );
};

export default Greet;
