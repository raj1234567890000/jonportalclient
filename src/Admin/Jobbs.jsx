

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Nav from "@/Shared/Nav"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import AdminJobsTable from "./AdminJobsTable"
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs"
import { setSearchJobByText } from "@/Redux/jobSlices"
import Footer from "@/components/Footer"



const Jobbs= () => {
    useGetAllAdminJobs();
    const[input,setInput]=useState('');
    const navigate=useNavigate();
    const dispatch=useDispatch();
    useEffect(()=>{
dispatch(setSearchJobByText(input))
    },[input,dispatch])
  return (
<>
<div>
        <Nav/>
    
    <div className="max-w-6xl mx-auto my-10 jobbs">
        <div className="flex items-center justify-between my-5">
        <Input 
        className="w-fit"
        placeholder="fiter by name ,role"
        onChange={(e)=>setInput(e.target.value)}
        />
        <Button className="bg-black text-white" onClick={()=>navigate('/admin/jobs/post')} >New Jobs</Button>
        </div>
   <AdminJobsTable/>
        
    </div>
    </div>
    <div className="contactFooter">
      <Footer />
      </div>
    </>
  )
}


export default Jobbs

