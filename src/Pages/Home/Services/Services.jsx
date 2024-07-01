import { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  });
  return (
    <div className="text-center py-8 space-y-3">
      <h3 className="text-lg text-red-500 font-bold">Service</h3>
      <h2 className="text-3xl font-bold">Our Service Area</h2>
      <p>
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which don't look even slightly believable.{" "}
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="py-6 flex justify-center">
        <button className="btn btn-outline btn-error text-2xl hover:text-white">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
