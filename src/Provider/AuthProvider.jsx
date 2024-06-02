import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../../firebaseConfig";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }



    const googleLogin = () =>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }


    const gitHubLogin = () =>{
        const gitHubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, gitHubProvider)
    }


    const logOut = () =>{
        return signOut(auth);
    }
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })
        return unsubscribe;
    }, [])

    const authInfo = {
        createUser,
        userLogin,
        googleLogin,
        gitHubLogin,
        user,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;