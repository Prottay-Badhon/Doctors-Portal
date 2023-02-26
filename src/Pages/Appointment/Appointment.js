import React, { useState } from 'react'
import AppointmentBanner from './AppointmentBanner'
import AvailableAppointments from './AvailableAppointments'

const Appointment = () => {
  const [date,setDate]=useState(new Date())
  return (
    <div className='lg:px-12'>
        <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
        <AvailableAppointments date={date} ></AvailableAppointments>
    </div>
  )
}

export default Appointment
