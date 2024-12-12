import Nav from "@/Shared/Nav";
import Footer from "./Footer";
import { motion } from "framer-motion";

const AboutUs = () => {
  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }, // Delay the start of child animations
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Nav />

      <section className="py-12 about">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
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
            <motion.div
              className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
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
                variants={childVariants}
              >
                <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
                <p className="text-gray-600 mb-4">
                  We are a team of passionate professionals dedicated to bringing ideas to life.
                  With years of experience across various industries, we strive to create innovative solutions that meet and exceed expectations.
                </p>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To empower individuals and businesses through cutting-edge technologies and tailored strategies that drive growth and success.
                </p>
              </motion.div>
            </motion.div>

            {/* Values Section */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-center mb-8">Our Core Values</h3>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {/* Value Cards */}
                {[
                  { title: "Integrity", description: "We uphold the highest ethical standards in everything we do." },
                  { title: "Innovation", description: "We embrace creativity to deliver transformative solutions." },
                  { title: "Excellence", description: "We strive for exceptional quality in every project we undertake." },
                  { title: "Collaboration", description: "We work together to achieve shared goals and long-lasting success." },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800 rounded-lg p-6 text-center"
                    variants={childVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h4 className="text-xl font-bold text-gray-300">{value.title}</h4>
                    <p className="text-gray-300 mt-2">{value.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
