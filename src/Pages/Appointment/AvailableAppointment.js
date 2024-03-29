import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");

  // const { data: services, isLoading, refetch } = useQuery('available', () => fetch(`https://doctors-portal-server-lovat-xi.vercel.app/available?date=${formattedDate} `)
  //     .then(res => res.json()))

  const {
    data: services = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", formattedDate],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-portal-server-lovat-xi.vercel.app/available?date=${formattedDate} `
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(services);

  if (isLoading) {
    return <Loading></Loading>;
  }

  // useEffect(() => {
  //     fetch(`https://doctors-portal-server-lovat-xi.vercel.app/available?date=${formattedDate} `)
  //         .then(res => res.json())
  //         .then(data => setServices(data));
  // }, [formattedDate])
  // console.log(services);

  return (
    <div className="my-10">
      <h4 className="text-xl text-accent font-bold  text-center my-12">
        Available Appointments on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
