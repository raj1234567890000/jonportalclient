import Nav from "@/Shared/Nav"
import FiterCard from "./FiterCard"
import Job from "./Job"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Footer from "./Footer"





const Jobs = () => {
    const {allJobs,searchedQuery}=useSelector(store=>store.job)
    const [filterJobs,setFilterJobs]=useState(allJobs)
    useEffect(() => {
        if (searchedQuery) {
            const filteredJobs = allJobs.filter((job) => {
                return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.location.toLowerCase().includes(searchedQuery.toLowerCase()) 
                    

                    
            })
            setFilterJobs(filteredJobs)
        } else {
            setFilterJobs(allJobs)
        }
    }, [allJobs, searchedQuery]);
  return (
    <>
    <div>
        <Nav/>
      
       <div className="max-w-7xl mx-auto mt-5">
        <div className=" flex gap-5">
        <div className="w-20%">
        <FiterCard/> 
            </div>   
       
       {
       filterJobs && filterJobs.length<= 0 ?<span>Jobs not found</span>:(
            <div className="flex-1 h-[88vh] overflow-y-auto p-5">
                <div className="grid gap-4 my-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                       filterJobs && filterJobs.map((job) => (
                            <>
                            <motion.div
                            initial={{ opacity: 0 ,x:100}}
                            animate={{ opacity: 1 ,x:0 }}
                            transition={{duration:0.3}}
                            exit={{opacity:0,x:-100}}
                            
                            key={job?._id}>
                                <Job job={job} />
                            </motion.div>
                            </>
                            
                        ))
                    }
                    
                    </div>
               

            </div>
        )
     
       }

        </div>
  

       </div>


    </div>
    <Footer/> 
    </>
  )
}

export default Jobs

