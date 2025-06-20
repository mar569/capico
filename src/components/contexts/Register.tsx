
import { useForm } from 'react-hook-form';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import './context.css';

interface RegisterForm {
    email: string;
    password: string;
}

interface RegisterProps {
    onRegisterSuccess?: () => void;
}

export const Register: React.FC<RegisterProps> = ({ onRegisterSuccess }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm>();

    const onSubmit = async (data: RegisterForm) => {
        try {
            await createUserWithEmailAndPassword(auth, data.email, data.password);
            toast.success('Регистрация прошла успешно!');
            if (onRegisterSuccess) onRegisterSuccess();
        } catch (error) {
            toast.error('Ошибка при регистрации: ' + (error as Error).message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
            <h2 className="form-heading">Регистрация</h2>

            <input
                type="email"
                placeholder="Email"
                {...register('email', { required: 'Email обязателен' })}
                className="input"
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}

            <input
                type="password"
                placeholder="Пароль"
                {...register('password', {
                    required: 'Пароль обязателен',
                    minLength: { value: 6, message: 'Пароль должен содержать минимум 6 символов' }
                })}
                className="input"
            />
            {errors.password && <p className="error-message">{errors.password.message}</p>}

            <button
                type="submit"
                className="button"
            >
                Зарегистрироваться
            </button>
        </form>
    );
};


