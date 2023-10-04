import { createContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentChatUser, setCurrentChatUser] = useState({});

    //Check if there is already a user
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentChatUser) => {
            setCurrentChatUser(currentChatUser);

            console.log("Check current user from ChatAuthContext")
            console.log(currentChatUser);
        });

        return () => {
            unsub();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ currentChatUser }}>
            {children}
        </AuthContext.Provider>
    );
};