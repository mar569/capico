import { useState } from "react";
import Modal from "./Modal";
import Login from "../Login";
import { Register } from "../Register";

interface AuthModalProps {
    show: boolean;
    onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ show, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);

    const switchMode = () => setIsLogin((prev) => !prev);

    return (
        <Modal show={show} onClose={onClose} title={isLogin ? "Вход" : "Зарегистрироваться"}>
            {isLogin ? <Login onSuccess={onClose} /> : <Register onRegisterSuccess={onClose} />}
            <p style={{ marginTop: 20, textAlign: "center" }}>
                {isLogin ? "Нет аккаунта? " : "Есть аккаунт? "}
                <button
                    onClick={switchMode}
                    type="button"
                    className="modal-button"
                >
                    {isLogin ? "Зарегистрируйтесь" : "Войдите"}
                </button>
            </p>
        </Modal>

    );
};

export default AuthModal;
