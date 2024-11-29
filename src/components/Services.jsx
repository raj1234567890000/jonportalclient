import Nav from "@/Shared/Nav";
import Footer from "./Footer";
import { motion } from "framer-motion"; // Importing framer-motion for animation

const Service = () => {
  return (
    <>
      <Nav />
      <section className="text-gray-800 py-16 px-6 lg:px-24">
        <motion.div
          className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8"
          initial={{ opacity: 0, y: 50 }} // Initial state: invisible and below
          animate={{ opacity: 1, y: 0 }} // Final state: visible and in place
          transition={{ duration: 0.6 }} // Smooth transition for the section
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Please read these Terms of Service carefully before using our
            platform. By accessing or using our services, you agree to comply
            with these terms.
          </p>

          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.3, // Stagger animations for each section
                },
              },
            }}
          >
            {/* Mapping through each section with Framer Motion */}
            {[
              {
                title: "1. Acceptance of Terms",
                content:
                  "By using our services, you agree to these terms. If you do not agree, you may not use our platform.",
              },
              {
                title: "2. User Responsibilities",
                content:
                  "Users are responsible for maintaining the confidentiality of their account and password. You agree not to use the service for any unlawful purpose.",
              },
              {
                title: "3. Service Availability",
                content:
                  "We strive to maintain uninterrupted service, but we do not guarantee availability. The service may be interrupted for maintenance, updates, or unforeseen issues.",
              },
              {
                title: "4. Intellectual Property",
                content:
                  "All content, trademarks, and other materials on this platform are owned by us or licensed to us. Unauthorized use of these materials is prohibited.",
              },
              {
                title: "5. Limitation of Liability",
                content:
                  "We are not liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services.",
              },
              {
                title: "6. Modifications to Terms",
                content:
                  "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our platform.",
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 }, // Initial state for the section
                  show: { opacity: 1, y: 0 }, // Final state for the section
                }}
                transition={{ duration: 0.5 }} // Duration of each section's transition
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {section.title}
                </h2>
                <p className="text-gray-600">{section.content}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">
              If you have any questions or concerns about these Terms of Service,
              please contact us at{" "}
              <a
                href="mailto:support@example.com"
                className="text-indigo-600 hover:underline"
              >
                support@example.com
              </a>
              .
            </p>
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default Service;
