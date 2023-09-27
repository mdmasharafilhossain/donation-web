import { useState } from "react";



const Banner = () => {
const [search,setSearch] = useState("");
    return (
        <div className=" w-full bg-fuchsia-600 mt-5">
           <div className="hero h-[600px] " style={{backgroundImage: 'url(https://i.ibb.co/vYsy9Dh/1695741571425.jpg'}}>
  <div className="hero-overlay bg-white bg-opacity-90"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-3xl md:text-[40px] lg:text-5xl  w-full text-center font-bold text-black">I Grow By Helping People In Need</h1>
     <div className="flex text-center justify-center mt-10">
     <input type="text" placeholder="Search here..."  className="input input-bordered w-full max-w-sm" />
     <button  className="btn bg-[#FF444A] hover:bg-red-400 text-white">Search</button>
     </div>
      
      
    </div>
  </div>
</div> 
        </div>
    );
};

export default Banner;