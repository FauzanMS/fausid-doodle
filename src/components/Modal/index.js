import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
import "./modal.css";
const style = {
    position: 'absolute',
    top: window.innerWidth > 500 ? '55%' : '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: window.innerWidth - 50,
    bgcolor: 'background.paper',
    boxShadow: 24,
    border: 'none',
    outline: 'none',
    p: 4,
    overflowY: 'scroll',
    borderRadius: '8px',
    maxWidth: '400px',
    maxHeight: '550px',
    textAlign: 'center'
};

export default function TransitionsModal({ children, open, handleClose }) {


    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div className='modal_close' onClick={() => handleClose()}>
                            <CloseIcon />
                        </div>
                        {children}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
