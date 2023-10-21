import { createContext, useEffect, useState } from "react";
import app from './../Firebase/Firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()

    const [user, setUser] = useState(null);

    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        signOut(auth)
    }
    const updateUserinfo = (name, photourl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photourl
        })
    }
    const handelGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }



    useEffect(() => {
        const unScribe = onAuthStateChanged(auth, currentUser => {
            console.log('User Auth State Change', currentUser);
            setUser(currentUser);
        });
        return () => {
            unScribe();
        }
    }, []);


    const authInfo = {
        user,
        googleProvider,
        signUpUser,
        handelGoogleLogin,
        updateUserinfo,
        logout,
        logInUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;