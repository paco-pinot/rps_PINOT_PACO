import "./main.css"
import Scissors from "../../images/icon-scissors.svg"
import Paper from "../../images/icon-paper.svg"
import Rock from "../../images/icon-rock.svg"
import Ppc from "../PierrePapierCiseaux/Ppc"
import {useState,useEffect} from "react"
import Duel from "../duel/Duel"
function Main(props) {
    const [ChoixJoueur, setChoixJoueur] = useState( false);
    const [Pick, setPick] = useState();
    const [ChoixAdversaire,setChoixAdversaire] = useState("");
    const [AdversaireString,setAdversaireString] = useState("");
    let fctHasard =()=>{
        let tabHasard = ["rock","paper","scisor"][Math.floor(Math.random()*3)] 
        switch (tabHasard) {
            case "rock":
                setChoixAdversaire( <Ppc type={"rock"} img={Rock} choix ={ChoixJoueur} setChoix ={setChoixJoueur} />)
                setAdversaireString("rock")
                break;
            case "paper":
                setChoixAdversaire(  <Ppc type={"paper"} img={Paper} choix ={ChoixJoueur} setChoix ={setChoixJoueur} />)
                setAdversaireString("paper")
            break;
            case "scisor":
                setChoixAdversaire( <Ppc type={"scisor"} img={Scissors} choix ={ChoixJoueur} setChoix ={setChoixJoueur}  />)
                setAdversaireString("scisor")
            break;
            default:
                break;
        }
    }
const [PickDuJoueur, setPickDuJoueur] = useState("");
let playAgain =()=>{
    setChoixJoueur(!ChoixJoueur)
}
    
    return (
        <main>
        {ChoixJoueur===false?
            <div className="containerMain">
                <div className="paperScisor">
                    <div onClick={()=>{setPick(<Ppc type={"paper"} img={Paper} choix ={ChoixJoueur} setChoix ={setChoixJoueur} />) ; fctHasard() ;  setPickDuJoueur("paper")}}>
                    <Ppc type={"paper"} img={Paper} choix ={ChoixJoueur} setChoix ={setChoixJoueur}  />
                    </div>
                    <div onClick={()=>{setPick( <Ppc type={"scisor"} img={Scissors} choix ={ChoixJoueur} setChoix ={setChoixJoueur} />) ; fctHasard() ;  setPickDuJoueur("scisor")}}>
                    <Ppc type={"scisor"} img={Scissors} choix ={ChoixJoueur} setChoix ={setChoixJoueur} />
                    </div>

                </div>
                <div className="rockContainer">
                    <div onClick={()=>{setPick( <Ppc type={"rock"} img={Rock} choix ={ChoixJoueur} setChoix ={setChoixJoueur} />) ; fctHasard() ;  setPickDuJoueur("rock")}}>
                    <Ppc type={"rock"} img={Rock} choix ={ChoixJoueur} setChoix ={setChoixJoueur} />
                    </div>
                </div>
            </div>
            :
            <Duel Pick={Pick} ChoixAdversaire={ChoixAdversaire} AdversaireString={AdversaireString} PickDuJoueur={PickDuJoueur} playAgain={playAgain} textWin={props.textWin} settextWin={props.settextWin} Scoree={props.Scoree} setScoree={props.setScoree}
            />
        }
        </main>
    );
  }
  
  export default Main;