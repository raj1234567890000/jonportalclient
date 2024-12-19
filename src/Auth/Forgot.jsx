import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://careernestbackend.onrender.com/api/v1/user/forget-password", { email });
      setMessage(res.data.message);
      setShowPopup(true);
    } catch (err) {
      setMessage(err.response?.data?.message || "An error occurred!");
    } finally {
     
      setLoading(false);
     
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setEmail(""); 
    setMessage("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-8"
      >
        <motion.h2
          className="text-2xl font-bold text-center text-gray-800 mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Forgot Password
        </motion.h2>
        <form onSubmit={handleSubmit} className="space-y-6 forget">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full  text-white py-2 px-4 rounded-md"
          >
                   {loading ? (
                    <>
                   
              <Button className="w-full py-2 bg-gray-900 text-white cursor-none flex items-center justify-center gap-2  transition-none" disabled>
               
               Please Check Your Email
                </Button>
                <p className="text-center text-gray-950 mb-4 mt-5">
              A reset link has been sent to <span className="font-medium">{email}</span>.
            </p>
                <span className="text-red-600 mt-2 block">
   Note : If you don’t see the email in your inbox, please check your spam or junk mail folder.
    </span>
    
                </>
                
              ) : (
                <Button
                  className={`w-full py-2 bg-black text-white rounded-lg  auth-button `}
               
                >
              Submit
                </Button>
                
              )}
              
          </motion.button>
          
        </form>
        
        {message && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 text-center text-sm ${
              message.includes("Error") ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </motion.p>
        )}

      </motion.div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg p-6 shadow-lg w-80"
          >
            <h3 className="text-lg font-bold text-center mb-4 text-gray-800">Success!</h3>
            <p className="text-center text-gray-600 mb-4">
              A reset link has been sent to <span className="font-medium">{email}</span>.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={closePopup}
                className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition"
              >
                OK
              </button>
             
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
