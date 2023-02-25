import React from "react";
import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png"
import PrimaryButton from "../Shared/Navbar/PrimaryButton";
const Services = () => {
  const services = [
    {
      img: fluoride,
      title: "Fluoride Treatment",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex error voluptatibus eius!",
    },
    {
      img: cavity,
      title: "Cavity Filling",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex error voluptatibus eius!",
    },
    {
      img: whitening,
      title: "Teeth Whitening",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex error voluptatibus eius!",
    },
  ];
  return (
    <div className="flex justify-center flex-col items-center py-10 mt-5">
      <h2 className="text-xl text-center uppercase text-secondary font-bold">our services</h2>
      <h2 className="text-4xl text-center capitalize mt-3">
        service we are provided
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service service={service}></Service>
        ))}
      </div>
      <div className="">
        <div className="hero min-h-screen lg:px-16">
          <div className="hero-content flex-col  lg:flex-row">
            <img
              src={treatment}
              className="max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
           


            <div className="lg:ml-20">
              <h1 className="text-5xl font-bold">Exceptional Dental Care on Your Terms</h1>
              <p className="py-6">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
              </p>
                <PrimaryButton>Get started</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
