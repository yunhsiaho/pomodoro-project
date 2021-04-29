import React, {useState, useEffect, useRef} from "react";
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
    const {workTime, seconds, breakTime, isBreak, minutes, isReset,displayMessage,start} = state;
    let subtitle;
    const [modalIsOpen,setIsOpen] = useState(false);

    const openModal =() => {
            setIsOpen(true);
    }

    const afterOpenModal =() => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
    }

    const closeModal =() =>{
    setIsOpen(false);
    }

    const refreshPage = () => {
        window.location.reload(false);
        console.log("refresh page");
    }

    useEffect(()=>{
    if(!start){
        openModal();
    }
    }, [isBreak])


return (
    <div>
    <button onClick={openModal}>Open Modal</button>
    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
    >

        <h2 ref={_subtitle => (subtitle = _subtitle)}>
        {displayMessage ?  <div>It's Break Time!</div>: <div>It's Work Time!</div>} 
        </h2>
        <div>{displayMessage ?  <div>Take a break!</div>: <div> Go back to work!</div>}</div>
        <form>
        <input />
        <button onClick={closeModal}>close</button>
        <button onClick={refreshPage}>Start a new timer</button> //stop and reset, or refresh the page?
        </form>
    </Modal>
    </div>
);
}

