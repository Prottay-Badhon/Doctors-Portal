import React from "react";
import { toast, ToastContainer } from "react-toastify";

const UserRow = ({user,index,refetch}) => {
    const{_id,email,role}=user
    const makeAdmin =()=>{
        const url = `http://localhost:5000/user/admin/${email}`
        fetch(url,{
            method: 'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
        if( res.status ===403){
            toast.error('Failed to make an admin')
        }
         return res.json()
        })
        .then(data =>{
           if(data.modifiedCount>0){
            refetch()
            toast.success('successfully made an admin');
           }
        })
    }
  return (
    <tr>
      <th>{index+1}</th>
      <td>{email}</td>
      <td>{role !== 'admin' && <button className="btn btn-xs" onClick={makeAdmin}>Make Admin</button>}</td>
      <td><button className="btn btn-xs">Remove User</button></td>
    </tr>

  );
};

export default UserRow;
