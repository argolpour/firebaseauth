import AuthContext from "./AuthContext"
import { SIGN_UP } from './Types';
import { useEffect, useReducer } from "react";
import AuthRecuder from './AuthReducer'
import {createUserWithEmailAndPassword } from "firebase/auth";
import  {auth} from '../firebase'


const AuthState = ({children}) => {
    const initialState={
        currentUser:{}
    }
    const [state, dispatch] = useReducer(AuthRecuder, initialState)
       const login= (email,password)=>{
         return  createUserWithEmailAndPassword(auth,email,password).then(user=>console.log(user))
     }
        
   useEffect(() => {
    
    const unsubscribe=  auth.onAuthStateChanged(user=>{
           dispatch({type:SIGN_UP,payload:user})
       })
     return unsubscribe
   }, [])
 
        return (
        <AuthContext.Provider value={{...state,login}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthState
