import React from "react";
import quote from "../../assets/icons/quote.svg"
import people1 from "../../assets/images/people1.png"
import people2 from "../../assets/images/people2.png"
import people3 from "../../assets/images/people3.png"
import Review from "./Review";

const Testimonials = () => {
    const reviews =[
        {
            id: 1,
            name: "Winson Harry",
            review: "",
            location: "California",
            img: people1
        },
        {
            id: 2,
            name: "Winson Harry",
            review: "",
            location: "California",
            img: people2
        },
        {
            id: 3,
            name: "Winson Harry",
            review: "",
            location: "California",
            img: people3
        }
    ]
  return (
    <div className="lg:px-16 py-5">
      <div className="flex justify-between items-center">
        <div>
            <h4 className="text-xl text-primary font-bold">Testimonials</h4>
            <h2 className="text-3xl ">What our patient says</h2>
        </div>
        <div>
            <img src={quote} alt="" className="w-24 lg:w-48"/>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                reviews.map(review => <Review review={review} key={review.id}></Review>)
            }
      </div>
    </div>
  );
};

export default Testimonials;
