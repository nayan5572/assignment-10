import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRouter = ({ children }) => {
    const location = useLocation();
    const { user } = useContext(AuthContext);

    // if (loading) {
    //     return <progress className="progress w-56 text-center mx-auto"></progress>
    // }
    if (user) {
        return children

    }
    return (
        <Navigate to={"/login"} state={location} replace>

        </Navigate>
    );
};

export default PrivateRouter;