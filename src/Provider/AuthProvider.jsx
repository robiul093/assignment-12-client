import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext } from "react";
import { app } from "../../firebaseConfig";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const auth = getAuth(app);
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(email, password);
    }
    
    const authInfo = {
        createUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;