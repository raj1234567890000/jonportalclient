import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/Redux/jobSlices";
import { useNavigate } from "react-router-dom";
import Typed from 'typed.js';
import { motion } from "framer-motion"; // Import motion from framer-motion

const Herosection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browser");
  };

  // Typed.js for typing animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i><i/>'],
      typeSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy(); // Cleanup Typed.js instance
    };
  }, []);

  return (
    <div className="herosection">
      <div className="ml-0 sm:ml-10 md:ml-20 lg:ml-40 p-4 sm:p-6 md:p-8 mr-28 mt-5">
        <div className="text-center">
          <div className="flex flex-col gap-5 my-10">
            <motion.span
              className="mx-auto px-4 py-2 rounded-full bg-black text-white font-medium text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              No.1 Job Hunt Website
            </motion.span>

            <motion.h1
              className="text-lg md:text-2xl font-bold mt-10"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Search, Apply & <br className="hidden md:block" /> Get your{" "}
              <span className="text-[#B38FB9]">Dream Jobs</span>
            </motion.h1>

            <motion.p
              className="font-bold md:text-base lg:text-lg px-2 md:px-10 lg:px-20 text-[#2b8f93] h-40 typed-js"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Our job portal application is a powerful platform designed to connect job seekers with their ideal employers, streamlining the hiring process and making it accessible, efficient, and engaging. The app caters to a wide range of users—from fresh graduates to seasoned professionals and employers of all sizes
              <span ref={el} />
            </motion.p>

            <motion.div
              className="flex w-full sm:w-[80%] md:w-[60%] lg:w-[40%] shadow-xl border border-gray-500 pl-3 rounded-full items-center gap-4 mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <input
                type="text"
                placeholder="Find Your Dream Jobs"
                className="outline-none border-none w-full text-sm md:text-base px-2"
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button
                className="rounded-r-full bg-[#B38FB9] p-2 md:p-3"
                onClick={searchJobHandler}
              >
                <Search className="h-7 w-7" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
