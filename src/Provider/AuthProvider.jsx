import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext } from "react";
import { app } from "../../firebaseConfig";

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {

    const aj = 'hi'
    const auth = getAuth(app);
    const createUser = (email, password) =>{
        console.log(email);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        createUser,
        aj,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;