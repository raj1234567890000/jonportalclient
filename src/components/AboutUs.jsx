import Nav from "@/Shared/Nav";
import Footer from "./Footer";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <>
      <Nav />

      <section className="py-12 mt-56">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          exit={{ opacity: 0, x: -100 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading Section */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <h2 className="text-3xl font-extrabold sm:text-4xl">About Us</h2>
              <p className="mt-4 text-lg text-gray-600">
                Dedicated to delivering excellence and creating impactful solutions for our clients.
              </p>
            </motion.div>

            {/* Content Section */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image */}
              <motion.div
                className="flex justify-center items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="https://thumbs.dreamstime.com/b/us-businessman-working-modern-technology-73677146.jpg"
                  alt="About Us"
                  className="rounded-lg shadow-lg w-full md:max-w-md"
                />
              </motion.div>

              {/* Text Content */}
              <motion.div
                className="flex flex-col justify-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
                <p className="text-gray-600 mb-4">
                  We are a team of passionate professionals dedicated to bringing ideas to life.
                  With years of experience across various industries, we strive to create innovative solutions that meet and exceed expectations.
                </p>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To empower individuals and businesses through cutting-edge technologies and
                  tailored strategies that drive growth and success.
                </p>
              </motion.div>
            </div>

            {/* Values Section */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-center mb-8">Our Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Value Cards */}
                <motion.div
                  className="bg-gray-800 rounded-lg p-6 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="text-xl font-bold text-gray-300">Integrity</h4>
                  <p className="text-gray-300 mt-2">
                    We uphold the highest ethical standards in everything we do.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-gray-800 rounded-lg p-6 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="text-xl font-bold text-gray-300">Innovation</h4>
                  <p className="text-gray-300 mt-2">
                    We embrace creativity to deliver transformative solutions.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-gray-800 rounded-lg p-6 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="text-xl font-bold text-gray-300">Excellence</h4>
                  <p className="text-gray-300 mt-2">
                    We strive for exceptional quality in every project we undertake.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-gray-800 rounded-lg p-6 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="text-xl font-bold text-gray-300">Collaboration</h4>
                  <p className="text-gray-300 mt-2">
                    We work together to achieve shared goals and long-lasting success.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
