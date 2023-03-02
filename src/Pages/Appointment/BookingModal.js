import axios from "axios";
import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingModal = ({ date, treatment,setTreatment,refetch }) => {
  const { _id,name, slots } = treatment;
const [user, loading1, error1] = useAuthState(auth);

  const handleBooking =(event)=>{
        event.preventDefault();
        const slot= event.target.slot.value;
        const formattedDate = format(date, "PP")
        const booking = {
          treatmentId: _id,
          treatment: name,
          date: formattedDate,
          slot: slot,
          patientName: user.displayName,
          patient: user.email,
          phone: event.target.phone.value
        }
        const url = "http://localhost:5000/booking"
        axios.post(url,booking)
        .then(response =>{
          if(response.data.success){
            toast.success(`Appointment is set on ${formattedDate}! at ${slot}`);
          }
          else{
            toast.error(`Already an appointment on ${response.data.booking.data}! at ${response.data.booking.slot}`, {
              theme: "colored",
              });
          }
          refetch()
        })
        .catch(error=>console.log(error));
  }
  return (
    <div className="">
      <ToastContainer />
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking for: {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-5 justify-items-center"
          >
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              className="input w-full mt-5 max-w-xs input-bordered"
            />

            <select name="slot" className="select select-bordered w-full max-w-xs">
             {slots?.map((slot,index)=><option key={index}value={slot}>{slot}</option>)}
            </select>
            <input
              type="text"
              disabled
              value={user?.displayName}
              className="input w-full mt-5 max-w-xs input-bordered "
            />
             <input
              type="email"
              disabled
              value={user?.email}
              className="input w-full mt-5 max-w-xs input-bordered "
            />
            <input
              type="number"
              placeholder="Phone Number"
              name="phone"
              className="input w-full max-w-xs input-bordered"
            />
           

            <input
              type="submit"
              value="submit"
              className=" btn btn-secondary text-white w-[72%]"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
