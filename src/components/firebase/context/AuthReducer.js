import { SIGN_UP } from './Types';
const AuthRecuder=(state,action)=>{

    switch (action.type) {
         case SIGN_UP:
             return {...state,currentuser:action.payload}
        default:
           return  state;
    }
}
export default AuthRecuder