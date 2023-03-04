import React from 'react'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../../firebase.init';
const Navbar = () => {
const [user, loading1, error1] = useAuthState(auth);
const [signOut, loading2, error2] = useSignOut(auth);
const navigate = useNavigate();
const LogoutHandler=async()=>{
  const success = await signOut(auth);
  localStorage.removeItem("accessToken")
  if(success){
      navigate("/")
  }
}
    const menuItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/">Reviews</Link></li>
        <li><Link to="/">Contact Us</Link></li>
        {
          user && <li><Link to="/dashboard">Dashboard</Link></li> 
        }
        <li>
          {
            user? <Link onClick={LogoutHandler}>Logout</Link> : <Link to="/login">Login</Link>
          }
        </li>
        <li><Link to="/">{user?.displayName}</Link></li>

    
    </>
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabindex="0" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {
            menuItem
        }
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {
            menuItem
        }      
      </ul>
    </div>
    <div className="navbar-end">
    <label htmlFor="my-drawer-2" tabindex="1" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
    </div>
   
  </div>
  )
}

export default Navbar
