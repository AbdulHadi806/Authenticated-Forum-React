import React, {useContext, useState, useEffect} from 'react'
import { auth } from '../firebase'

export const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}


export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [Loading, setLoading] = useState()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
      }
      function Login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
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
        signup
    }
    return (
    <AuthContext.Provider value = {value}>
        {!Loading && children}
    </AuthContext.Provider>
  )
}
