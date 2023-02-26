import React from 'react'
import appointment from "../../assets/images/appointment.png"
import PrimaryButton from '../Shared/Navbar/PrimaryButton'
const ContactUs = () => {
  return (
    <div style={{backgroundImage: `url(${appointment})`,backgroundSize: "cover",backgroundPosition:"center"}} className="py-10">
        <h3 className='text-xl text-secondary text-center'>Contact Us</h3>
        <h1 className='text-3xl text-center text-white'>Stay Connected With us</h1>
       
        <form action="" className='flex flex-col items-center justify-around gap-y-5 '>
        <input type="email" placeholder="Email Address" className="input w-full mt-5 max-w-xs" />
        <input type="text" placeholder="Subject" className="input w-full max-w-xs" />
        <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
        <PrimaryButton type="submit">Submit</PrimaryButton>
        </form>
    </div>
  )
}

export default ContactUs
