'use client';
import { useContext, createContext, useState, useEffect, ReactNode } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import {auth} from "@/context/firebase";

interface AuthContextProps {
    children: ReactNode;
}

interface AuthContextValue{
    user: null | object;
}

const AuthContext = createContext({user: null});

export const AuthContextProvider = ({ children }: AuthContextProps) => {

     const [user, setUser] = useState<any>({user: null})

      const googleSignIn = () =>{
          const provider = new GoogleAuthProvider()
          signInWithPopup(auth, provider)
      }

      const logOut = () =>{
          signOut(auth)
      }

      useEffect(() =>{
          const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
                if(user){
                    setUser({user: currentUser})
                }
                else{
                    setUser(null)
                }
          })
          return () => unsubscribe();
      }, [])



    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UseAuth = () => {
    const context = useContext(AuthContext)
    return context
}
