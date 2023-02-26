import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          magnam impedit error incidunt quidem at!
        </p>
        <div className="flex items-center gap-2">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100">
              <img src={review.img} alt=""/>
            </div>
          </div>
          <div className="">
            <h4 className="text-xl">{review.name}</h4>
            <p>{review.location}</p>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Review;
