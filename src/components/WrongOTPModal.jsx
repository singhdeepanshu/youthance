import React from 'react'

const WrongOTPModal = () => {
    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                    <h2 id="transition-modal-title">OOPS</h2>
                    <p id="transition-modal-description">you may have entered the wrong OTP</p>
                </div>
                </Fade>
            </Modal>   
        </>
    )
}

export default WrongOTPModal
