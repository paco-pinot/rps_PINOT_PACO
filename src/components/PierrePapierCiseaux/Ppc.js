import "./ppc.css"
function Ppc(props) {
    let ppc = document.querySelector(".ppc")
    
    return (
        <div onClick={()=>{props.setChoix(true)}} onMouseOver={()=>{}} className={`${props.type} ppc `}>
            <img src={props.img} alt="" />
        </div>
    );
  }
  
  export default Ppc;