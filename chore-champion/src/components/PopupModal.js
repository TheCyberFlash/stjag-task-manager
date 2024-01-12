import React from "react";

const PopupModal = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="popup-modal">
            <p>{message}</p>

            <div className="button-group">
                <button onClick={onConfirm}>Confirm</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default PopupModal;