
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";


interface PrivateRouteProps {
    component: React.FC;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return <Component />;
};

export default PrivateRoute;
