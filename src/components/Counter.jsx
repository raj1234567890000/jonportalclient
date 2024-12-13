import  { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Counter = () => {
  // State to hold the counter values
  const [companies, setCompanies] = useState(0);
  const [jobs, setJobs] = useState(0);
  const [students, setStudents] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Increment values at intervals
    const companyInterval = setInterval(() => {
      setCompanies((prev) => prev + 1);
    },1000); 

    const jobInterval = setInterval(() => {
      setJobs((prev) => prev + 2);
    }, 1000);

    const studentInterval = setInterval(() => {
      setStudents((prev) => prev + 3);
    }, 1000);

    // Cleanup intervals
    return () => {
      clearInterval(companyInterval);
      clearInterval(jobInterval);
      clearInterval(studentInterval);
    };
  }, [isVisible]);

  return (
    <motion.div 
      ref={counterRef} 
      className="counter-container flex flex-col items-center justify-center py-10 bg-gray-100 dark:bg-gray-900 counter"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        <motion.div 
          className="counter-item p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">Companies</h2>
          <p className="text-5xl font-bold text-blue-500 mt-2">{companies}</p>
        </motion.div>

        <motion.div 
          className="counter-item p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">Jobs</h2>
          <p className="text-5xl font-bold text-green-500 mt-2">{jobs}</p>
        </motion.div>

        <motion.div 
          className="counter-item p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">Students</h2>
          <p className="text-5xl font-bold text-red-500 mt-2">{students}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Counter;
