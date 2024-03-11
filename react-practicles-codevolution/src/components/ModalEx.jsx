import { useState } from "react";
import Modal from 'react-modal'

const ModalEx=()=>{
 const [isModel,setIsModel]=useState(false)
return(<>
 <button onClick={()=>{setIsModel(!isModel)}} >MODAL</button>
<h1>hai</h1>
<Modal isOpen={isModel} style={{overlay:{backgroundColor:'gray'},content:{color:'green'}}} onRequestClose={()=>{setIsModel(!isModel)} }>
<h1>modal data</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nobis?</p>
</Modal>
</>
)
}
export default ModalEx;