import Nav from "@/Shared/Nav"
import Job from "./Job"

import { useEffect } from "react"

import useGetAllJobs from "@/hooks/useGetAllJobs"
import { useDispatch, useSelector } from "react-redux"
import { setSearchedQuery } from "@/Redux/jobSlices"
import { motion } from "framer-motion"
import Footer from "./Footer"


const Browser = () => {
   useGetAllJobs();
    const {allJobs} = useSelector(store=>store.job);
    const dispatch = useDispatch();
    useEffect(()=>{
        return ()=>{
            dispatch(setSearchedQuery(""));
        }
   
//eslint-disable-next-line
},[])

  return (
    <>
    <div>
        <Nav/>
        <div className="max-w-7xl mx-auto my-10">
            <h1 className="font-bold text-xl my-10">Search Results({allJobs?.length})</h1>
            <div className="grid gap-4 my-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {
               allJobs && allJobs.map((job)=>{
                    return(
                        <>
                    <motion.div
                      initial={{ opacity: 0 ,x:100}}
                            animate={{ opacity: 1 ,x:0 }}
                            transition={{duration:0.3,ease: "easeInOut"}}
                            exit={{opacity:0,x:-100}}
                    >
                    <Job key={job._id} job={job} />
                    
                    </motion.div>

                   
                        </>
                    )
                })
            } 

            </div>
       
        </div>
    </div>
   
   <Footer/>  
  
    </>
  )
}

export default Browser
