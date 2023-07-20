import React from "react";
import Service from "../Service/Service";
import fluride from "../../../../assets/images/fluoride.png";
import cavity from "../../../../assets/images/fluoride.png";
import whiteing from "../../../../assets/images/fluoride.png";

const Services = () => {
  const Services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluride,
    },
    {
      _id: 2,
      name: "Cavity Filling ",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: whiteing,
    },
  ];
  return (
    <div className="my-28 mb-4">
      <div className="text-center">
        <progress className="progress progress-success w-56"></progress>
        <br />
        <progress className="progress progress-success w-96"></progress>
      </div>

      <div className="text-center font-bold ">
        <h3 className="text-accent uppercase">Our services</h3>
        <h2 className="text-3xl">Services we provide</h2>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
        {Services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
