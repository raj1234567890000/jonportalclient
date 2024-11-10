//import React from 'react'

import Nav from "@/Shared/Nav";
import Herosection from "./HeroSection";
import CateroryCarousel from "./CateroryCarousel";
import LatestJob from "./LatestJob";
import Footer from "./Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

const Home = () => {
  useGetAllJobs();
  const {user}=useSelector(store=>store.auth)
  const navigate=useNavigate();
  useEffect(()=>{
    if(user?.role==='recruiter'){
      navigate('/admin/companies')
    }
    // eslint-disable-next-line
  },[])
  return (
    <>
        <motion.div
                      initial={{ opacity: 0 ,x:100}}
                            animate={{ opacity: 1 ,x:0 }}
                            transition={{duration:0.3,ease: "easeInOut"}}
                            exit={{opacity:0,x:-100}}
                    >
                      <Nav />
        <Herosection />
        <CateroryCarousel />
        <LatestJob/>
        <Footer/>
                    </motion.div>
    </>
  );
};

export default Home;
