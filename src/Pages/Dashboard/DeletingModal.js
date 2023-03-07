import React from 'react'
import { toast } from 'react-toastify';

const DeletingModal = ({deletingDoctor,refetch,setDeletingDoctor}) => {
    const {name,email}=deletingDoctor;
    const deleteHandler =()=>{
   
        const url = `http://localhost:5000/doctor/${email}`
    
        fetch(url,{
            method: "DELETE",
            headers: {
                authorization : `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount){
                toast.success('Successfully deleted')
                refetch();
                setDeletingDoctor(null)
            }
        })
       
      }
  return (
    <div>
<input type="checkbox" id="deletingModal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-red-500">Are you sure want to delete {name}</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
    <button className="btn btn-error btn-xs" onClick={deleteHandler}>Delete</button>
      <label htmlFor="deletingModal" className="btn btn-xs">Cancel</label>
    </div>
  </div>
</div>
    </div>
  )
}

export default DeletingModal
