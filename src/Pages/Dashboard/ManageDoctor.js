import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'
import DoctorRow from './DoctorRow'
import { toast,ToastContainer } from "react-toastify";
import DeletingModal from './DeletingModal';


const ManageDoctor = () => {
    const [deletingDoctor ,setDeletingDoctor]=useState(null)
    const {data: doctors,isLoading,refetch}=useQuery('doctors',()=> fetch('http://localhost:5000/doctor',{
        headers: {
            authorization : `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
  return (
    <div>
        <ToastContainer></ToastContainer>
      <h2>Manage Doctor</h2>
      <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Specialty</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {doctors.map((doctor,index) => <DoctorRow doctor={doctor} key={doctor._id} index={index} refetch={refetch} setDeletingDoctor={setDeletingDoctor}></DoctorRow>)}
     
     
    </tbody>
  </table>
</div>
{
    deletingDoctor && <DeletingModal deletingDoctor={deletingDoctor}
    setDeletingDoctor={setDeletingDoctor}
    refetch={refetch}></DeletingModal>
}
    </div>
  )
}

export default ManageDoctor
