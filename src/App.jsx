import { Greeting } from "./components/Greeting";
import { Message } from "./components/Message";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <Greeting name="Міша" />
      <Message text="Цікавий текст з App.jsx" />
      <Button onClick={() => console.log("Клік")} />
    </>
  )
}

export default App
