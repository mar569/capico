
import { useState } from "react";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import './context.css';

interface FormData {
    email: string;
    password: string;
}

interface Props {
    onSuccess: () => void;
}

const Login: React.FC<Props> = ({ onSuccess }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (data: FormData) => {
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            toast.success("Вы успешно вошли в систему");
            onSuccess();
        } catch (error) {
            toast.error("Ошибка входа: " + (error as Error).message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
            <div className="relative mt-5 h-18">

                <input
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: "Email обязателен" })}
                    className="input"
                />
            </div>
            {errors.email && <p className="error-message">{errors.email.message}</p>}

            <div className="relative h-18">

                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Пароль"
                    {...register("password", { required: "Пароль обязателен" })}
                    className="input"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="password-toggle"
                >
                    {showPassword ? <AiFillEyeInvisible className="w-6 h-6 cursor-pointer" /> : <AiFillEye className="w-6 h-6 cursor-pointer" />}
                </button>
            </div>
            {errors.password && <p className="error-message">{errors.password.message}</p>}

            <button
                type="submit"
                className="button-submit"
            >
                Войти
            </button>
        </form>
    );
};

export default Login;
