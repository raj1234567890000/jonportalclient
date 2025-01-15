import Nav from "@/Shared/Nav";
import FiterCard from "./FiterCard";
import Job from "./Job";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (searchedQuery) {
      const filteredJobs = allJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchedQuery.toLowerCase())
        );
      });
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchedQuery]);

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

  const noJobsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <div>
        <Nav />

        <div className=" jobs">
          <motion.div
            initial="hidden"
            animate="visible"
            className=" gap-5"
          >
            {/* Filter Card */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-[20%] hidden md:block"
            >
              <FiterCard />
            </motion.div>

            {/* Job List */}
            <div className="flex-1 h-[88vh] overflow-y-auto p-5 bg-gray-50 shadow-lg rounded-lg jobpverflow">
              {filterJobs && filterJobs.length <= 0 ? (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={noJobsVariants}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center items-center h-full text-gray-500"
                >
                  <span className="text-lg font-semibold">No jobs found!</span>
                </motion.div>
              ) : (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={containerVariants}
                  className="grid gap-4 my-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                >
                  {filterJobs &&
                    filterJobs.map((job) => (
                      <motion.div
                        key={job?._id}
                        variants={jobCardVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300  jobs"
                      >
                        <Job job={job} />
                      </motion.div>
                    ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="jobFooter">
      <Footer />
      </div>
    </>
  );
};

export default Jobs;
