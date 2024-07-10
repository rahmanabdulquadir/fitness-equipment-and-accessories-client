import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);
  return (
    // <div className="hero min-h-screen">
    //   <div className="hero-content flex-col lg:flex-row-reverse w-full">
    //     <img
    //       src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
    //       className="max-w-sm rounded-lg shadow-2xl"
    //     />
    //     <div className="w-1/2">
    //       <h1 className="text-5xl font-bold">Box Office News!</h1>
    //       <p className="py-6">
    //         Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
    //         excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
    //         a id nisi.
    //       </p>
    //       <button className="btn btn-primary">Get Started</button>
    //     </div>
    //   </div>
    // </div>

    //   <div
    //   className="hero min-h-screen"
    //   style={{
    //     backgroundImage:
    //       "url(https://i.ibb.co/hR6S4Yd/istockphoto-1400986326-2048x2048.jpg)",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // >
    //   <div className="hero-overlay bg-opacity-60"></div>
    //   <div className="hero-content text-neutral-content text-center">
    //     <div className="max-w-md rounded-lg">
    //       <h1 className="mb-5 text-5xl font-bold">
    //         "Elevate Your Fitness Journey"
    //       </h1>
    //       <p className="mb-5">
    //         "Discover the perfect blend of quality and performance with our
    //         premium range of gym equipment and accessories. Whether you're a
    //         beginner or a seasoned athlete, our products are designed to
    //         support your fitness goals and help you achieve peak performance.
    //         From durable weights to ergonomic accessories, find everything you
    //         need to build your ideal workout space and elevate your fitness
    //         journey to the next level."
    //       </p>
    //     </div>
    //   </div>
    // </div>

    <div
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?fitness,gym')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-black to-blue-900 opacity-70"></div>
      <div className="relative container mx-auto p-6 flex flex-col justify-center items-center h-full text-center text-white">
        <h1
          className={`text-5xl md:text-7xl font-bold mb-4 transition-opacity duration-1000 ${
            isVisible ? "opacity-100 animate-bounce" : "opacity-0"
          }`}
        >
          Welcome to FitFlex
        </h1>
        <p
          className={`text-xl md:text-2xl mb-8 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Your Ultimate Destination for Fitness Equipment and Accessories
        </p>

        <NavLink to={"/products"}>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-110 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Shop Now
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Banner;
