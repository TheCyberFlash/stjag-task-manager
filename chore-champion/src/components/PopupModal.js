import React, { useEffect, useRef } from "react";

const PopupModal = ({ message, onConfirm, onCancel }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.focus();
        }
    } ,[]);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            onConfirm();
        } else if (event.key === "Escape") {
            onCancel();
        }
    };

    return (
        <div className="modal-overlay">
            <div className="popup-modal" onKeyDown={handleKeyDown} tabIndex="0" ref={modalRef}>
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
