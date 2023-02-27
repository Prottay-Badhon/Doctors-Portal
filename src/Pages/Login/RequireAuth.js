import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate,Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const RequireAuth = ({children}) => {
const [user, loading1, error1] = useAuthState(auth);
const navigate = useNavigate()
const location = useLocation()
if(loading1){
    return <Loading></Loading>
}
if(!user){
    return  <Navigate to="/login" state={{from: location}} replace></Navigate>
}

else
return  children
  
}

export default RequireAuth
