import { signOut } from 'firebase/auth';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate,Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../Shared/Loading';

const RequireAdmin = ({children}) => {
const [user, loading1, error1] = useAuthState(auth);
const [admin,adminLoading]=useAdmin(user)
const navigate = useNavigate()
const location = useLocation()
if(loading1 || adminLoading){
    return <Loading></Loading>
}
if(!user || !admin){
    signOut(auth)
    return  <Navigate to="/login" state={{from: location}} replace></Navigate>
}

else
return  children
  
}

export default RequireAdmin
