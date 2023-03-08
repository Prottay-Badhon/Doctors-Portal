import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
  const {
    data: appointment,
    isLoading,
    refetch,
  } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        'authorization': `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  const stripePromise = loadStripe('pk_test_51Mj7BmFOl9rI2usVBeqFZr4xDcglmrqoRTscNb17mueez8ZWx5qRZIYdwlAc6GKz4txhqX6cgrRmpmyPWxwv0khT00JuFPWQWM');
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-success text-2xl">Hello, {appointment.patientName}</h2>
          <h2 className="card-title">Pay for {appointment.treatment}
          </h2>
          <p>We will see you on <span className="text-orange-700">{appointment.date}</span> <span>{appointment.slot}</span></p>
          <p>Please pay ${appointment.price}</p>
        </div>
        
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mt-12">
        <div className="card-body">
          <Elements stripe={stripePromise}>
                <CheckoutForm appointment={appointment}></CheckoutForm>
          </Elements>
        </div>
        </div>

    </div>
  );
};

export default Payment;
