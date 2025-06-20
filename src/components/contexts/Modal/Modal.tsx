
import { useEffect, useRef } from "react";
import '../context.css';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, title, children }) => {
    const overlayRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === overlayRef.current) {
            onClose();
        }
    };

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        if (show) {
            document.addEventListener("keydown", onKeyDown);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [show, onClose]);

    if (!show) return null;

    return (
        <div
            ref={overlayRef}
            className="modal-overlay"
            onClick={handleClickOutside}
            aria-modal="true"
            role="dialog"
            aria-labelledby="modal-title"
        >
            <div className="modal-content">
                <header className="modal-header">
                    <h2 id="modal-title" className="modal-title">
                        {title}
                    </h2>
                    <button
                        onClick={onClose}
                        aria-label="Close modal"
                        className="modal-close-button"
                        type="button"
                    >
                        ✕
                    </button>
                </header>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
