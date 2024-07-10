

const Banner = () => {
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



    <div
    className="hero min-h-screen"
    style={{
      backgroundImage:
        "url(https://i.ibb.co/hR6S4Yd/istockphoto-1400986326-2048x2048.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md rounded-lg">
        <h1 className="mb-5 text-5xl font-bold">
          "Elevate Your Fitness Journey"
        </h1>
        <p className="mb-5">
          "Discover the perfect blend of quality and performance with our
          premium range of gym equipment and accessories. Whether you're a
          beginner or a seasoned athlete, our products are designed to
          support your fitness goals and help you achieve peak performance.
          From durable weights to ergonomic accessories, find everything you
          need to build your ideal workout space and elevate your fitness
          journey to the next level."
        </p>
      </div>
    </div>
  </div>
  );
};

export default Banner;
