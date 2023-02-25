import React from 'react'
import doctor from "../../assets/images/doctor.png"
import appointment from "../../assets/images/appointment.png"
import PrimaryButton from '../Shared/Navbar/PrimaryButton'
const MakeApoinment = () => {
  return (
    <section className='flex justify-center items-center' style={{backgroundImage: `url(${appointment})`}}>
      <div className="flex-1 mt-[-150px] hidden lg:block">
        <img src={doctor} alt="" />
      </div>
      <div className="flex-1 p-5">
        <h3 className='text-xl text-secondary'>Appointment</h3>
        <h2 className='text-white text-3xl mt-4'>Make Appointment Today</h2>
        <p className='text-white py-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum repellendus facere, dolorum asperiores ex ipsum voluptatum ut blanditiis, assumenda totam nihil eligendi reprehenderit culpa veniam modi odit molestiae quidem qui eveniet aperiam! Distinctio fugit consequatur pariatur maiores laudantium illo eaque.</p>

       <PrimaryButton className="mt-5">Get started</PrimaryButton>
      </div>
    </section>
  )
}

export default MakeApoinment
