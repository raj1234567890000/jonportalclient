import Nav from "@/Shared/Nav";
import Job from "./Job";
import { useEffect } from "react";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/Redux/jobSlices";
import { motion } from "framer-motion";
import Footer from "./Footer";

const Browser = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
    // eslint-disable-next-line
  }, []);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const jobCardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <>
      <div>
        <Nav />
        <div className="max-w-7xl mx-auto my-10 px-4 browser">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-2xl my-10 text-gray-800"
          >
            Search Results ({allJobs?.length || 0})
          </motion.h1>

          {allJobs && allJobs.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-6 my-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              {allJobs.map((job) => (
                <motion.div
                  key={job._id}
                  variants={jobCardVariants}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Job job={job} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center h-64 bg-gray-100 rounded-lg"
            >
              <span className="text-gray-500 text-lg font-medium">
                No jobs available.
              </span>
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Browser;
