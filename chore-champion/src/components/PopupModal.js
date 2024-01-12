import React from "react";

const PopupModal = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="modal-overlay">
            <div className="popup-modal">
            <p>{message}</p>

            <div>
                <button onClick={onConfirm}>Confirm</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
        </div>

    );
}

export default PopupModal;