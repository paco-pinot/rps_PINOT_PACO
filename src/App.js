import "./app.css"
import Main from "./components/main/Main"
import Score from "./components/score/Score"
import Duel from "./components/duel/Duel"
import Modal from "./components/modal/Modal"
import Footer from "./components/footer/Footer"
import {useState,useEffect} from "react"
import Scissors from "./images/icon-scissors.svg"
import Paper from "./images/icon-paper.svg"
import Rock from "./images/icon-rock.svg"
import Ppc from "./components/PierrePapierCiseaux/Ppc"
// import Duel from "./components/duel/Duel"
function App() {
  const [ModalState, setModalState] = useState(false);
  const [textWin,settextWin] = useState("");
  let [Scoree, setScoree] = useState(12);
  return (
    <div className="App">
      <div className="containerApp">
        <Score textWin={textWin} settextWin={settextWin} Scoree={Scoree} setScoree={setScoree}/>
        <Main textWin={textWin} settextWin={settextWin} Scoree={Scoree} setScoree={setScoree}/>
        {/* <Duel/> */}
        <Footer ModalState={ModalState} setModalState={setModalState} />
        {/* <Modal/> */}
      </div>
    </div>
  );
}

export default App;
