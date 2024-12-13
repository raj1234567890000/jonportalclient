import Nav from "@/Shared/Nav";
import { Label } from "@radix-ui/react-label";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <Nav />
      <div className="allconatct">
        <motion.div
          className="bg-gray-800 border rounded-md p-5 w-96 contact"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-bold text-white mb-4 text-center">Contact Form</h3>
          <hr />

          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="08ff3a37-a1bc-4e00-b52e-68de6fa14be6"
              className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-indigo-500"
            />

            <motion.div
              className="text-center mt-3 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Label>Name</Label>
              <input
                type="text"
                name="name"
                className="w-full p-2 mb-4 rounded bg-gray-800 border focus:ring-2 focus:ring-indigo-500"
                required
              />
            </motion.div>

            <motion.div
              className="text-center text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Label>Email</Label>
              <input
                type="email"
                name="email"
                className="w-full p-2 mb-4 rounded bg-gray-800 border focus:ring-2 focus:ring-indigo-500"
                required
              />
            </motion.div>

            <motion.div
              className="text-center text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Label className="block mb-2 text-sm font-medium">Contact</Label>
              <input
                type="number"
                name="contact"
                className="w-full p-2 mb-4 rounded bg-gray-800 border focus:ring-2 focus:ring-indigo-500"
                required
              />
            </motion.div>

            <motion.div
              className="text-center text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Label>Message</Label>
              <input
                type="text"
                name="message"
                className="w-full p-2 mb-4 rounded bg-gray-800 border focus:ring-2 focus:ring-indigo-500 h-28"
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
      <div className="contactFooters">
      <Footer />
      </div>
    </>
  );
};

export default Contact;
