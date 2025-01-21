import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const name = "Moha Milon";

    // Creating user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign in user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Sign out user

    const signOutUser = () =>{
        signOut(auth);
    }

    // Check if user is logged in
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            setUser(user);
            console.log(user);
        })

        return ()=>{
            unsubscribe();
        }
    }, []);

    const AuthInfo = {
        name,
        createUser,
        signInUser,
        signOutUser,
        user,
    };
    return (
        <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
