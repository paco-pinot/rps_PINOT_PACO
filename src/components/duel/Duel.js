import Ppc from "../PierrePapierCiseaux/Ppc"
import {useState,useEffect} from "react"
import "./duel.css"

function Duel(props) {
  const [compteur, setcompteur] = useState(3);
  const [compteurState, setcompteurState] = useState(false);
  const [Wl, setWl] = useState("");
  let fctGagnant =()=>{
    if (props.PickDuJoueur===props.AdversaireString ) {
        console.log("égalité");
        props.settextWin("DRAW")
        setWl("draw")
    }else if (props.PickDuJoueur !== props.AdversaireString){
        let rock = "rock"
        let paper = "paper"
        let scisor = "scisor"
        if (props.PickDuJoueur === rock && props.AdversaireString === paper) {
            console.log("tu as perdu");
            props.settextWin("YOU LOOSE")
            props.setScoree(props.Scoree -1)
            setWl("loose")
        }else if (props.PickDuJoueur === paper && props.AdversaireString === rock){
          props.settextWin("YOU WIN") 
          props.setScoree( props.Scoree +1 )
          console.log("tu as gagner");
          
        }else if (props.PickDuJoueur === rock && props.AdversaireString === scisor){
          props.settextWin("YOU WIN")
          props.setScoree( props.Scoree +1 )   
          console.log("tu as gagner");
          setWl("win")
        }else if (props.PickDuJoueur === scisor && props.AdversaireString === paper){
          props.settextWin("YOU WIN") 
          props.setScoree( props.Scoree +1 )  
          console.log("tu as gagner");
          setWl("win")
        }else if (props.PickDuJoueur === scisor && props.AdversaireString===rock){
          props.settextWin("YOU LOOSE")  
          console.log("tu as perdu");
          props.setScoree(props.Scoree -1)
          setWl("loose")
        }else if (props.PickDuJoueur === paper && props.AdversaireString===scisor){
          props.settextWin("YOU LOOSE")  
          console.log("tu as perdu");
          props.setScoree(props.Scoree -1)
          setWl("loose")
        }
    }
}
useEffect(()=>{
  let timer = setTimeout(() => {
    setcompteur(compteur-1)
    }, 1000);
    if (compteur===0) {
      clearTimeout(timer)
      setcompteur(0)
      setcompteurState(!compteurState)
      fctGagnant()
  }
},[compteur,props.ChoixAdversaire])
    return (
      <div className="alignDuel">
        <div className="duel">
          <div className="Joueur">
            <div className="youPicked">
              YOU PICKED
            </div>
            <div className="youPickedImg">
              {props.Pick}
            </div>
          </div>
        

        {compteur===0 ? 
          <div className="midDuel">
          <div className="hDuel">
              {props.textWin}
          </div>
          <div onClick={()=>{props.playAgain()}} className="playAgain">
            <button>PLAY AGAIN</button>
          </div>
        </div>
        :""}
      
        <div className="adversaire">
          <div className="youPicked">
              THE HOUSE PICKED
            </div>
            <div className="youPickedImg">
            <div className={compteur===0?"":"pasChoisi"}>
              {compteurState===false ? compteur : props.ChoixAdversaire}
              </div>
            </div>
        </div>
        </div>
      </div>
    );
  }
  
  export default Duel;