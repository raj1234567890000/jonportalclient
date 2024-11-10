import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/Redux/jobSlices";
import { useNavigate } from "react-router-dom";
import Typed from 'typed.js';

const Herosection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browser");
    
  };


  //typed js start here

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i> Our job portal application is a powerful platform designed to connect job seekers with their ideal employers, streamlining the hiring process and making it accessible, efficient, and engaging. The app caters to a wide range of users—from fresh graduates to seasoned professionals and employers of all sizes.<i/>'],
      typeSpeed: 50,
      loop:true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  

  return (
    <div className="herosection">
       
    <div className="ml-0 sm:ml-10 md:ml-20 lg:ml-40 p-4 sm:p-6 md:p-8">
      <div className="text-center">
        <div className="flex flex-col gap-5 my-10">
          <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium text-sm md:text-base">
            No.1 Job Hunt Website
          </span>
          <h1 className="text-lg md:text-2xl font-bold">
            Search, Apply & <br className="hidden md:block" /> Get your{" "}
            <span className="text-[#6A38C2]">Dreams jobs</span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg px-2 md:px-10 lg:px-20 text-[#6A38C2] h-52 typed-js">
          <span ref={el} />
          </p>
          
          <div className="flex w-full sm:w-[80%] md:w-[60%] lg:w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
            <input
              type="text"
              placeholder="Find Your Dream jobs"
              className="outline-none border-none w-full text-sm md:text-base px-2"
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button
              className="rounded-r-full bg-[#6A38c2] p-2 md:p-3"
              onClick={searchJobHandler}
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Herosection;
