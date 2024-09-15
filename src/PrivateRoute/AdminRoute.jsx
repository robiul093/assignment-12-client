import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useUser from "../hooks/useUser";
import { Navigate } from "react-router-dom";

const AdminRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const { isPending, data: dbUser } = useUser();
    const isExistDbUser = dbUser?.find(item => item?.email === user?.email);
    const isAdmin = isExistDbUser?.role === 'admin';
    

    if (isPending || loading) {
        return <div className="h-full flex justify-center items-center">
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    
    
    if (isAdmin) {
        return children;
    }
    else {
        return <Navigate to="/dashbord" />;
    }
};

export default AdminRoute;