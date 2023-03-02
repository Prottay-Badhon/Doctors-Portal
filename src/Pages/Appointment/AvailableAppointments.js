import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState({});
  const formattedDate = format(date, "PP");
  
  const url = `http://localhost:5000/available?date=${formattedDate}`;
  const{data: services,isLoading,refetch}=useQuery(["available",formattedDate], () => fetch(url).then((res) => res.json()));
  // useEffect(()=>{
  //     const url = `http://localhost:5000/available?date=${formattedDate}`
  //     fetch(url)
  //     .then(res => res.json())
  //     .then(data => setServices(data))
  // },[formattedDate])
  return (
    <div className="my-12">
      <h2 className="text-secondary text-center text-xl font-bold my-12">
        Available Appointments on {format(date, "PP")}.
      </h2>
      <h2 className="text-center mt-3 text-gray-400">
        Please select a service
      </h2>
      {isLoading && <Loading></Loading>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
