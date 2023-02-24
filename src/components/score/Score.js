import {useState,useEffect} from "react"
import "./score.css"
function Score(props) {
    return (
        <div className="score">
            <div className="scoreContainer">
                <div className="title">
                    <div>ROCK</div>
                    <div>PAPER</div>
                    <div>SCISSORS</div>
                </div>
                <div className="scoreLive">
                    <div className="nomScore">SCORE</div>
                    <div className="chiffreScore">{props.Scoree}</div>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default Score;