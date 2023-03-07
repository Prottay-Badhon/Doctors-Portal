import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index,refetch,setDeletingDoctor }) => {
  const { name, img, email, specialty } = doctor;
  
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-16 rounded ">
            <img
              src={img}
              alt={name}
            />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <label htmlFor="deletingModal" onClick={()=>{setDeletingDoctor(doctor)}} className="btn btn-error btn-xs">Delete</label>
        
        </td>
    </tr>
  );
};

export default DoctorRow;
