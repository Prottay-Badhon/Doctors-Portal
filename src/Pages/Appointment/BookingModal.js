import { format } from "date-fns";
import React from "react";

const BookingModal = ({ date, treatment,setTreatment }) => {
  const { name, slots } = treatment;
  const handleBooking =(event)=>{
        event.preventDefault();
        const slot= event.target.slot.value;
        console.log(slot)
        setTreatment(null)
  }
  return (
    <div className="">
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
             {slots?.map(slot=><option value={slot}>{slot}</option>)}
            </select>
            <input
              type="text"
              placeholder="Full name"
              className="input w-full mt-5 max-w-xs input-bordered "
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input w-full max-w-xs input-bordered"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="input w-full mt-5 max-w-xs input-bordered "
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
