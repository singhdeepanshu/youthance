import React from 'react'
import logo from '../images/Watch.png'
import brands from '../images/landing_brands.png'
import '../pages/styles.css'
export default function Intro() {
    return (
        <div className="Intro-div">
            <h1 className="intro">Hire On-demand <br></br> Quality Workforce</h1>
            <p className="anytime" style={{}}>Anytime & Anywhere You Want!</p>
            <hr class="new5"></hr>
            <p className="introp">Work with pre-screened and trained talent
            on our scalable, flexible and cost-effective
platform.</p>
            {/* <input className="intro-input" type="text" placeholder="Enter your mail id"></input>
<i class="arrow right"></i> */}
            {/* <h1 className="stories">Watch their lovely stories</h1> */}
            <div className="getstartedButton">
            <button className="youthButton" style={{top: 0}} > 
                                    GET STARTED
                            <hr className="youth_button_line_or flex"></hr>
                            </button>
            </div>

            <img className="watch" src={logo} alt="stories"></img>

            <div className="branding1">
                <h2>Helped 50+ Businesses Scale</h2>
                <img className="br1" src={brands}></img>
            </div>
        </div>

    )
}
