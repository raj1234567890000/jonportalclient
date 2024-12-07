import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/Redux/jobSlices";
import { useNavigate } from "react-router-dom";
import Typed from "typed.js";
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
      strings: ["Find Your Perfect Job", "Start Your Career Today"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup Typed.js instance
    };
  }, []);

  return (
    <div className="herosection bg-gradient-to-br  py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.span
          className="px-4 py-2 rounded-full bg-black text-white font-medium text-sm md:text-base mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          No.1 Job Hunt Website
        </motion.span>

        <motion.h1
          className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Search, Apply & <br className="hidden md:block" /> Get your{" "}
          <span className="text-orange-400">Dream Job</span>
        </motion.h1>

        <motion.p
          className="text-sm md:text-base lg:text-lg  max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Our job portal connects job seekers with employers, streamlining the
          hiring process and making it efficient and engaging.{" "}
          <span ref={el} className="font-bold text-orange-400"></span>
        </motion.p>

        <motion.div
          className="flex w-full sm:w-[80%] md:w-[60%] lg:w-[40%] shadow-xl border border-gray-200 pl-3 rounded-full items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <input
            type="text"
            placeholder="Find Your Dream Job"
            className="outline-none border-none w-full text-sm md:text-base px-4 py-2 text-black rounded-l-full"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            className="rounded-r-full bg-orange-400 text-black p-3 md:p-4 hover:bg-orange-300"
            onClick={searchJobHandler}
          >
            <Search className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Herosection;
