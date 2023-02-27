import React from "react";
import chair from "../../assets/images/chair.png"
import PrimaryButton from "../Shared/Navbar/PrimaryButton";
import bg from "../../assets/images/bg.png"
const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: `url(${bg})`}}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img id="banner-img"
          src={chair}
          className="max-w-lg rounded-lg shadow-2xl"
        alt=""/>
        <div className="">
          <h1 className="text-5xl font-bold">Your new smiles starts here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
