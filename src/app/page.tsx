import Input from "./components/Input";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Container from "./components/Container";
import { LoggedIn } from "./components/state/LoggedIn";
import User from "./components/state/User";
import { Counter } from "./components/state/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Box from "./components/context/Box";

export default function Home() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Peter",
      last: "Parker",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];
  return (
    <main>
      {/* <Greet name="Tugba Esat" messageCount={4} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Heading>Placeholder</Heading>
      <Status status="success" />
      <Oscar>
        <Heading>Oscar goes to ME!</Heading>
      </Oscar>
      <Button id={1} />
      <Input value=" " />
      <Container
        styles={{ border: "1px solid red", padding: "1rem", display: "flex" }}
      />
      <LoggedIn />
      <User />
      <Counter/> */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </main>
  );
}
