import "./footer.css"
import Modal from "../modal/Modal";
import {useState,useEffect} from "react"
function Footer(props) {
    return (
        <footer>
        { props.ModalState===true ?<Modal setModalState={props.setModalState} ModalState={props.ModalState}  /> : ""}
            <button onClick={()=>{props.setModalState(true)}}>RULES</button>
        </footer>
    );
  }
  
  export default Footer;