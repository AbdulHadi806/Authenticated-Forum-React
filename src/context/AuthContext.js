import React, {useContext, useState, useEffect} from 'react'
import { auth } from '../firebase'

export const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}


export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [Loading, setLoading] = useState()

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
      }
      const Login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
      }
      const logOut = () => {
        return auth.signOut()
      }
      const resetPassword = (email) => {
        return auth.sendPasswordResetEmail(email)
      }
      const updateEmail = (email) => {
        return currentUser.updateEmail(email)
      }
      const updatePassword = (password) => {
        return currentUser.updatePassword(password)
      }
     useEffect(()=> {
         const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
         })
         return unsubscribe
     }, [])



    const value = {
        currentUser,
        Login,
        updatePassword,
        updateEmail,
        logOut,
        resetPassword,
        signup
    }
    return (
    <AuthContext.Provider value = {value}>
        {!Loading && children}
    </AuthContext.Provider>
  )
}
