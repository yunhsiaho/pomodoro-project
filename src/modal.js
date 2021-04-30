import React, {useState, useEffect} from "react";

import Modal from 'react-modal';


const customStyles = {
content : {
top                   : '50%',
left                  : '50%',
right                 : 'auto',
bottom                : 'auto',
marginRight           : '-50%',
transform             : 'translate(-50%, -50%)'
}
};

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

export default function ModalApp({setState, state}){
    const {isBreak,displayMessage,start,repeatBreak} = state;
    let subtitle;
    const [modalIsOpen,setIsOpen] = useState(false);

    const openModal =() => {
            setIsOpen(true);
    }

    const afterOpenModal =() => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#FFFFFF';
    }

    const closeModal =() =>{
    setIsOpen(false);
    }

    const refreshPage = () => {
        window.location.reload(false);
        console.log("refresh page");
    }

    useEffect(()=>{
    if(!start && repeatBreak!==0){
        openModal();
    }
    }, [isBreak])


return (
    <div>
    {/* <button onClick={openModal}>Open Modal</button> */}
    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
    >
        <div className="modal">
        <h2 ref={_subtitle => (subtitle = _subtitle)}>
        {displayMessage ?  <div className="title1">It's Break Time!</div>: <div className="title1">It's Work Time!</div>} 
        </h2>
        <div>{displayMessage ? <div className="title1">Take a break!</div>: <div className="title1"> Time to be back to work!</div>}</div>
        
        <button className="button1" onClick={closeModal}>close</button>
        <button className="button1" onClick={refreshPage}>Start a new timer</button>
        
        </div>
    </Modal>
    </div>
);
}

