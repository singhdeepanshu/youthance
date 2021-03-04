import React from 'react'

const YouthanceForm = (props) => {
    return (
        <>
         <div className="support-text">
                <div className="contents">
                    <h2 style={{ color: '#5d5d5d', fontWeight: '600' }}>{props.title} YOUTHANCER SUPPORT </h2>
                    <p className="graytext"> {props.subtitle}Facing an issue? Don't worry, tell us here and <br></br>
                     we will get back to you </p>
                </div>
            </div>
            <form name="support-form">
                <div style={{ display: 'flex' }}>
                    <div className="input-container half-width">
                        <label htmlFor="name">Your Name</label>
                        <p style={{ paddingRight: '20px' }}><input placeholder="Your Name" type="text" name="name"></input></p>
                    </div>
                    <div className="input-container half-width">
                        <label htmlFor="contact">Contact Number</label>
                        <p><input placeholder="Contact Number" type="number" name="contact"></input></p>
                    </div>
                </div>

                <br></br>

                <div>
                    <div className="input-container">
                        <label htmlFor="email">Your Email</label>
                        <p><input className="full-width" placeholder="example@gmail.com" type="text" name="email"></input></p>
                    </div>
                </div>

                <br></br>

                <div>
                    <div className="input-container">
                        <label htmlFor="message">Message</label>
                        <p><textarea className="full-width" rows="5" placeholder="Your message here" type="text" name="message"></textarea></p>
                    </div>
                </div>

                <br>
                </br>
                <div>
                    <button type="button" className="youthButton" onClick={props.handleChange}>
                        Get In Touch
                        <hr className="youth_button_line"></hr>
                    </button>
                </div>

            </form>
        </>
    )
}

export default YouthanceForm
