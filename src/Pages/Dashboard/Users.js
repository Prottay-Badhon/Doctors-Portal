import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ToastContainer } from "react-toastify";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const url = "http://localhost:5000/users";
    const{data: users,isLoading,refetch}=useQuery("users", () => fetch(url,{
        method: "GET",
        headers: {
                authorization : `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then((res) => res.json()));
  
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
        <ToastContainer></ToastContainer>

      <h2>Users {users.length}</h2>
      <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Id</th>
        <th>Email</th>
        <th></th>
        <th></th>

      </tr>
    </thead>
    <tbody>
     {
        users.map((user,index)=> <UserRow user={user} key={user._id} refetch={refetch} index={index}></UserRow> )
     }
        
    </tbody>
  </table>
</div>
    </div>
  );
};

export default Users;
