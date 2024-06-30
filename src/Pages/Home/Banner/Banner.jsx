import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />
        <div className="text-white absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full lg:ps-12 ps-4">
          <div className="space-y-7 lg:w-1/3">
            <h2 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-error mr-4">Discover More</button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-5 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide4"
            className="btn btn-circle mr-5 bg-red-500 border-black hover:bg-white hover:text-red-500 hover:border-black"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-red-500 border-black hover:bg-white hover:text-red-500 hover:border-black"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="text-white absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full lg:ps-12 ps-4">
          <div className="space-y-7 lg:w-1/3">
            <h2 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-error mr-4">Discover More</button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-5 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide1"
            className="btn btn-circle mr-5 bg-red-500 border-black hover:bg-white hover:text-red-500 hover:border-black"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-red-500 border-black hover:bg-white hover:text-red-500 hover:border-black"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="text-white absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full lg:ps-12 ps-4">
          <div className="space-y-7 lg:w-1/3">
            <h2 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-error mr-4">Discover More</button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-5 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide2"
            className="btn btn-circle mr-5 bg-red-500 border-black hover:bg-white hover:text-red-500 hover:border-black"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-red-500 border-black hover:bg-white hover:text-red-500 hover:border-black"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="text-white absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full lg:ps-12 ps-4">
          <div className="space-y-7 lg:w-1/3">
            <h2 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-error mr-4">Discover More</button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-5 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide3"
            className="btn btn-circle mr-5 bg-red-500 border-black hover:bg-white hover:text-red-500 hover:border-black"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-red-500 border-black hover:bg-white hover:text-red-500 hover:border-black"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;