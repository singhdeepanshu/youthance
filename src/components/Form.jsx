import React, { useState } from 'react'
import logo from '../images/Milestone.png'
import Modal from 'react-modal'



export default function Form() {
    const [modalIsOpen,setModalIsOpen] = useState(false)
    return (

        <div className="area">
        <div className="form-pos">
            <img className="milestone"  src={logo} alt="milestone"></img>
            <form>
        <div className="forms">
            <br></br>
            <h1>Welcome!<br></br>
               Let's get your job done!
            </h1>
            <p style={{color:'orangered'}} >&nbsp;&nbsp;&nbsp;You doing so much, relax and let us help!</p>
          
            <div>
                <p></p>
                <p></p>
            <p class="input-names">Your Name</p>
            
            <input className="fill"
             type="text"
              placeholder="Shikhar"/>
              <p class="input-names">Company Name</p>
             <input className="fill" type="text" placeholder="Your Company Name" /> 

              <br/>
             <p className="input-names">Your Work Email</p>
             <input className="fill"
             type="text" 
             placeholder="yourname@company.com"></input>


              <p></p>
              <p className="input-names">Phone Number</p>
             <input className="fill"
             type="text" 
             placeholder="Phone Number"></input>

             <p className="input-names">Location</p>
             <input className="fill"
             type="text" 
             placeholder="Where are you from"></input>

             <p className="input-names">Industry</p>
             <select className="fill">
                 <option className="select">Choose Your Industry</option>
             </select>
             <br></br>
             
                        <button className="youthButton" onClick={() => setModalIsOpen(true)} > 
                                Request OTP
                        <hr className="youth_button_line_or flex"></hr>
                        
                        </button>
                       

             
       </div>
        </div>
        </form>
            </div>
            <Modal isOpen={modalIsOpen}>
                <p>hello</p>
            </Modal>
            </div>
        
    )
}

