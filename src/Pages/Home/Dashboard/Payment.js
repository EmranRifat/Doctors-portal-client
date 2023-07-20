import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51LazL5IPyK29dBEPejYaz80Qy16MpOwWcDurBOXfV8rGhnQ2NGCIuSoQvEUjVZUNDAUo8K7j9ZyLyCNID4P0JfiE00OjmVWlSs"
);

console.log(stripePromise);
const Payment = () => {
  const { id } = useParams();

  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(
      `https://doctors-portal-server-lovat-xi.vercel.app/booking/${id}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 my-12 ml-12 shadow-xl">
        <div className="card-body">
          <p className="text-success font-bold">
            Hello, {appointment.patientName}
          </p>
          <h2 className="card-title">Pay for {appointment.treatment}</h2>
          <p>
            We will see you{" "}
            <span className="text-orange-700">{appointment.date}</span> at{" "}
            <small>{appointment.slot}</small>
          </p>
          <p>
            Please pay: <span className="font-bold">${appointment.Price}</span>
          </p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50  ml-12  max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
