import { useSelector } from "react-redux";
import LatestjobCard from "./LatestjobCard";
import { motion } from "framer-motion";

const LatestJob = () => {
  const { allJobs } = useSelector((store) => store.job);

  // Animation variants for the job cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off hidden and slightly below
    visible: { opacity: 1, y: 0 }, // Move into place with full opacity
  };

  return (
    <div className="latest-job">
      <div className="max-w-7xl mx-auto my-300 text-center">
        <h1 className="text-4xl font-bold">
          <span className="text-[#6A38C2]">Latest & Top </span>Job Openings
        </h1>
        <div className="grid gap-4 my-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {allJobs && allJobs.length <= 0 ? (
            <span>No Job Available</span>
          ) : (
            allJobs &&
            allJobs.slice(0, 6).map((job, index) => (
              <motion.div
                key={job._id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible" // Trigger animation when the card comes into view
                viewport={{ once: true, amount: 0.2 }} // Play animation once when 20% of the card is visible
                transition={{
                  delay: index * 0.2, // Stagger animation for each card
                  duration: 0.5, // Duration of the animation
                }}
              >
                <LatestjobCard job={job} />
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestJob;
