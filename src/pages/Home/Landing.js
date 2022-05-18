import React from "react"
import bucketGirl from "../../assets/Images/bucketgirl.png"

const Landing = () => {
  return (
      <>
    <div className="hero   md:h-[60vh] bg-accent mt-16">
      <div className="hero-content flex-col lg:flex-row">
        <div >
          <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" className=" text-xl">Best Quality</p>
          <h1 data-aos="fade-right" data-aos-duration="900" data-aos-delay="400" className="text-5xl font-bold">Professional Cleaning Service</h1>
          <p data-aos="fade-right" data-aos-duration="800" data-aos-delay="600" className="py-6 max-w-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has
          </p>
          <button data-aos="zoom-in" data-aos-delay="1300" className="btn btn-primary">Get Started</button>
        </div>
        <div className=" h-[60vh] shrink-0">
          <img alt="hero" src={bucketGirl} className="h-full" />
        </div>
      </div>
    </div>
    <div className=" shadow-lg p-10 w-5/6 bg-base-100 mt-[-30px] z-20 relative rounded-2xl mx-auto">
        <h1 className=" text-2xl mb-5 text-primary">Get Free Estimate</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <input type="text" placeholder="Type here" className="input input-bordered w-[260px]" />
        <input type="text" placeholder="Type here" className="input input-bordered w-[260px]" />
        <input type="text" placeholder="Type here" className="input input-bordered w-[260px]" />
        <input type="text" placeholder="Type here" className="input input-bordered w-[260px]" />
        <input type="text" placeholder="Type here" className="input input-bordered w-[260px]" />
        <input type="text" placeholder="Type here" className="input input-bordered w-[260px]" />
        <input type="text" placeholder="Type here" className="input input-bordered w-[260px]" />
        <input type="text" placeholder="Type here" className="input input-bordered w-[260px]" />
        </div>
        <button className="btn btn-primary mt-6">REQUEST A QOUTE</button>
    </div>
    </>
  );
};

export default Landing;
