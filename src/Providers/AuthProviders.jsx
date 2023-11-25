import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Config/Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProviders = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading]= useState(true);
    const axiosPublic = useAxiosPublic()
    const createUser = (email, password)=>{
      return  createUserWithEmailAndPassword(auth,email,password)
    };
    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    const handleUpdateProfile = (name,photo) =>{
        return updateProfile(auth.currentUser,{
            displayName:name, photoURL:photo
        })
    }
    const signInWithGoogle =()=>{
        setLoading(true);
      return  signInWithPopup(auth, googleProvider)

    }

    useEffect(()=>{
     const unsubscribe =   onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            if(currentUser){
                //Todo: set token on localStorage
                const userInfo ={email:currentUser.email}
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                        setLoading(false);
                    }

                })

            }else{
                //Todo: do something later
                setLoading(false)
            }
            setLoading(false)
        });
        return ()=>{
            return unsubscribe()
        }

    },[axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        login,
        handleUpdateProfile,
        signInWithGoogle

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;