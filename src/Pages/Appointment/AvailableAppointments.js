import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import BookingModal from './BookingModal'
import Service from './Service'

const AvailableAppointments = ({date}) => {
    const [services,setServices]= useState([])
    const [treatment,setTreatment]=useState({});
    useEffect(()=>{
        const url = "http://localhost:5000/services"
        fetch(url)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
  return (
    <div className='my-12'>
    <h2 className='text-secondary text-center text-xl font-bold my-12'>Available Appointments on {format(date, 'PP')}.</h2>
    <h2 className='text-center mt-3 text-gray-400'>Please select a service</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map(service=> <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)}
    </div>
    {
        treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>
    }
    </div>
  )
}

export default AvailableAppointments
