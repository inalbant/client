import React from 'react';
import ReactDOM from 'react-dom';

// grey area is clisked to navigate user to home
// to stop child element from also navigating user, add stopPropagation
const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" onClick={props.onDismiss} >
            <div className="ui standard modal visible active" onClick={(e) => e.stopPropagation()} >
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;