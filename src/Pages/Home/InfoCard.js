import React from "react";

const InfoCard = (props) => {
    const { img, color, gradientFrom, gradientTo,title,description}=props.info
  return (
    <div
      class={`card lg:card-side p-5 lg:py-0 shadow-xl ${color} bg-gradient-to-r ${gradientFrom} ${gradientTo}`}
    >
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
