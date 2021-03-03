import React from 'react'
import Cards1 from '../components/Cards1';
import Slider from '../components/Slider';
import mileStone from '../images/Milestone.png'
const FindWorker = () => {

    // const [value, setvalue] = useState({
    //     jobCategory:"",
    //     noOfPeople:"",
    //     location:[],
    //     startDate:"",
    //     endDate: "",
    //     description: "",
    //     redirect: false,
    //     success:false,
    //     error:true
    // });
    const onSubmit = () => (
        <>
            
        </>
    )

    const handleChange = () => (
        <>
        
        </>
    )
    const findWorkerForm = () =>(
        <>
            <div style={{marginTop:"4rem"}}>
            <img className="milestone" src={mileStone}></img>
            <div className="pos">
                <h1>Finish Your requirement</h1>
                <p style={{color:'grey'}}>select the Job Category you Require</p>
              <div className="boxes">  
              <ul className="ks-cboxtags">
                <li><input type="checkbox" id="one" value="Marketing"/><label for="one">Marketing</label></li>
                <li><input type="checkbox" id="two" value="Operations"/><label for="two">Operations</label></li>
                <li><input type="checkbox" id="three" value="Products"/><label for="three">Products</label></li>
                <br></br>
                <li><input type="checkbox" id="four" value="Research"/><label for="four">Research</label></li>
                <li><input type="checkbox" id="five" value="Sales"/><label for="five">Sales</label></li>
                <li><input type="checkbox" id="six" value="Recruiting"/><label for="six">Recruiting</label></li>
              </ul>
              </div>
              <div>
                <div>
                    <label htmlFor="">No of People Required?</label><br/>
                    <input type="text" name="" id=""/>
                </div>
                <div>
                    <label htmlFor="">Gig Location (Choose Multiple)</label><br/>
                    <input type="text" name="" id=""/>
                </div>
              </div>
                <div>
                    <div>
                        <label htmlFor="">Start Date</label><br/>
                        <input type="date" name="" id=""/>
                    </div>
                    <div>
                        <label htmlFor="">End Date</label>
                        <input type="date" name="" id=""/>
                    </div>
                </div>
                

                <p className="t-area-p" style={{color:'grey'}}>Additional Information</p>
                <textarea className="t-area" type="text" placeholder="Describe the responsibilities of the job required Work experience Skills, or education"></textarea>
                <br></br>
                <button className="t-area-button">GET A QUOTE </button>
                </div>
        </div>
        </>
    )
    const successMessage = () => (
        <>
        
        </>
    )
    const errorMessage = () => (
        <></>
    )

    return (
        <>
            {findWorkerForm()}
            {successMessage()}
            {errorMessage()}
            <Slider />
            <Cards1 />
        </>
    )
}

export default FindWorker
