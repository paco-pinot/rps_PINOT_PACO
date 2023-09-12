import "./modal.css"
import ImgModal from "../../images/image-rules.svg"
import Cross from "../../images/icon-close.svg"
function Modal(props) {
    return (
      <div className="modal">
        <div className="containerModalTop">
          <div className="divH2">
            <h2>RULES</h2>
          </div>
          <div onClick={()=>{props.setModalState(false)}} className="crossContainer"> 
            <img className="croixModal" src={Cross} alt="" />
          </div>
        </div>
        <div className="imgModal">
          <img src={ImgModal} alt="" />
        </div>
      </div>
    );
  }
  
  export default Modal;