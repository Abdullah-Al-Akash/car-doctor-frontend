import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white"
          />
        </div>
        <div className="lg:w-1/2 space-y-7 lg:p-4 p-2">
          <h3 className="text-3xl font-semibold text-red-500">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-error">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
