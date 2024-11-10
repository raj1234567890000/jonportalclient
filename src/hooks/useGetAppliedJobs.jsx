import { setAllAppliedJobs } from "@/Redux/jobSlices"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"


const useGetAppliedJobs = () => {
    const dispatch=useDispatch()


useEffect(()=>{
    // fetch data from API
    const fetachApplidJobs=async()=>{
        try{
            const res= await axios.get(`https://jobportal-3-j6fo.onrender.com/a1/v1/application/getapplyjob`,{
                withCredentials:true,
            })
            if(res.data.sucess){
               // console.log(res,"all jobs")
                dispatch(setAllAppliedJobs(res.data.application))

            }
          
        }catch(err){
            console.log(err)
        }

    }
    fetachApplidJobs();
  //eslint-disable-next-line  
},[])

  return (
    <div>
      
    </div>
  )
}

export default useGetAppliedJobs
