import { useState } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Choices from "./components/Choices";
import Rules from "./components/Rules";
import Versus from "./components/Versus";

function App() {
  const [modalState, setModalState] = useState(true)
  const [score, setScore] = useState(0)
  const [choice, setChoice] = useState("scissor")
  const [hidden, setHidden] = useState(false)

  document.body.addEventListener('dragstart', event => {
    event.preventDefault();
  });
  
  document.body.addEventListener('drop', event => {
    event.preventDefault();
  });

  return (
    <div className="bg-gradient-radial w-full h-screen relative overflow-hidden">
      <Modal isOpen={modalState} setModalState={setModalState}></Modal>
      <Header score={score}></Header>
      <Choices choice={choice} setChoice={setChoice} hidden={hidden} setHidden={setHidden}></Choices>
      <Versus choice={choice} hidden={hidden} setHidden={setHidden} score={score} setScore={setScore}></Versus>

      <Rules onOpen={()=>(setModalState(!modalState))}></Rules>
    </div>
  )
}

export default App
