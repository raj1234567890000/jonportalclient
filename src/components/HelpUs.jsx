import { motion } from "framer-motion";
import Footer from "./Footer";
import Nav from "@/Shared/Nav";

const HelpUs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
    <Nav/>
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 text-white">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
      >
        {/* Page Header */}
        <motion.div variants={fadeInUp}>
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6">
            Help Us Grow Together
          </h1>
          <p className="text-center text-lg sm:text-xl text-gray-200">
            Your support helps us improve and connect more talent to
            opportunities.
          </p>
        </motion.div>

        {/* Three Columns Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={staggerContainer}
        >
          {/* Contribution 1 */}
          <motion.div
            className="p-6 rounded-lg bg-white text-gray-900 shadow-lg"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-indigo-500 text-white rounded-full mx-auto">
              <i className="fas fa-users text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-center mt-4">
              Share Opportunities
            </h3>
            <p className="text-center mt-2">
              Share job openings or internships with us to help connect job
              seekers to opportunities.
            </p>
          </motion.div>

          {/* Contribution 2 */}
          <motion.div
            className="p-6 rounded-lg bg-white text-gray-900 shadow-lg"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-indigo-500 text-white rounded-full mx-auto">
              <i className="fas fa-heart text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-center mt-4">
              Provide Feedback
            </h3>
            <p className="text-center mt-2">
              Help us improve by sharing your valuable suggestions and ideas.
            </p>
          </motion.div>

          {/* Contribution 3 */}
          <motion.div
            className="p-6 rounded-lg bg-white text-gray-900 shadow-lg"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-indigo-500 text-white rounded-full mx-auto">
              <i className="fas fa-hands-helping text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-center mt-4">
              Partner with Us
            </h3>
            <p className="text-center mt-2">
              Collaborate with us to build a thriving job community.
            </p>
          </motion.div>
        </motion.div>

        {/* Call-to-Action Section */}
        <motion.div
          className="mt-16 text-center"
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-gray-200 sm:text-lg mb-6">
            Lets work together to make the job market more accessible and
            transparent.
          </p>
          <a
            href="/contact"
            className="bg-indigo-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-600 transition-all"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>
    </div>
    <Footer/>
    </>
  );
};

export default HelpUs;
