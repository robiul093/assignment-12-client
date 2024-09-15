import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../../firebaseConfig";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }



    const googleLogin = () =>{
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }


    const gitHubLogin = () =>{
        setLoading(true);
        const gitHubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, gitHubProvider)
    }


    const updateUser = (name, imageURL) =>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: imageURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Ne7oVV6Lx9uAnmJDUZrrLcGy8yzo1sXdpQ&s"
          })
    }
    

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return unsubscribe;
    }, [auth])

    const authInfo = {
        createUser,
        userLogin,
        googleLogin,
        gitHubLogin,
        updateUser,
        user,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;