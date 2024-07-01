const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10n h-[200px]">
        <img src={img} alt="img" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-bold text-start">{title}</h2>

        <div className="flex justify-between items-center">
          <h3 className="text-lg text-start font-semibold text-red-500">
            Price: ${price}
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 text-red-500 rounded-full border border-red-500 hover:cursor-pointer hover:bg-red-500 hover:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
