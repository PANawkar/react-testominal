import React from "react";
import reviews from "./data";
import Testimonail from "./Components/Testimonial";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl fond-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-1/5 mx-auto mt-1"></div>
        <Testimonail  reviews ={reviews}/>  
      </div>
    </div>
  );
};

export default App;
