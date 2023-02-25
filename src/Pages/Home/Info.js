import React from 'react'
import InfoCard from './InfoCard'
import clock from "../../assets/icons/clock.svg"
import marker from "../../assets/icons/marker.svg"
import phone from "../../assets/icons/phone.svg"
const Info = () => {
    const infos=[
        {
            img: clock,
            color: "bg-primary",
            gradientFrom: "from-secondary",
            gradientTo: "to-primary",
            title: "Opening Our",
            description: "Any time from 0:0:0 to 24:00"

        },
        {
            img: marker,
            color: "bg-accent",
            gradientFrom: "",
            gradientTo: "",
            title: "Visit Our Location",
            description: "Brooklyn, NY 10036,United States"

        },
        {
            img: phone,
            color: "bg-secondary",
            gradientFrom: "from-secondary",
            gradientTo: "to-primary",
            title: "Contact Us",
            description: "+8801703512032"

        }
    ]
  return (
   <div className="flex flex-col  justify-center lg:flex-row  py-5">
     <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
    {
        infos.map(info=><InfoCard info={info}></InfoCard>)
    }

    </div>
   </div>
  )
}

export default Info
