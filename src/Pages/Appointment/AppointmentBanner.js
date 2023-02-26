import React, { useState } from 'react'
import chair from "../../assets/images/chair.png"
import bg from "../../assets/images/bg.png"
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppointmentBanner = ({date,setDate}) => {
  return (
    <div class="hero min-h-screen" style={{backgroundImage: `url(${bg})`}}>
    <div class="hero-content flex-col lg:flex-row-reverse gap-x-20">
      <img id="banner-img"
        src={chair}
        class="max-w-lg rounded-lg shadow-2xl"
      alt=""/>
      <div class="">
      <DayPicker
      mode="single"
      selected={date}
      onSelect={setDate}
      />
      </div>
    </div>
  </div>
  )
}

export default AppointmentBanner
