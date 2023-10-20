import { createContext, useEffect, useState } from "react";
import app from './../Firebase/Firebase.config';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);



    useEffect(() => {
        const unScribe = onAuthStateChanged(auth, currentUser => {
            console.log('User Auth State Change', currentUser);
            setUser(currentUser);
        });
        return () =>{
            unScribe();
        }
    }, []);
    

    const authInfo = {
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;