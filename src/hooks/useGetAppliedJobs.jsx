import { setAllAppliedJobs } from "@/Redux/jobSlices"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { toast } from "sonner"


const useGetAppliedJobs = () => {
    const dispatch=useDispatch()


useEffect(()=>{
    // fetch data from API
    const fetachApplidJobs=async()=>{
        try{ const token=localStorage.getItem('authToken')
            const res= await axios.get(`https://careernestbackend.onrender.com/a1/v1/application/getapplyjob`,{

               headers:{
                        token: token
                    },
                withCredentials:true,
            })
            if(res.data.sucess){
               // console.log(res,"all jobs")
                dispatch(setAllAppliedJobs(res.data.application))

            }
          
        }catch(error){
          toast.error(error.response.data.message);
            console.log(error)
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
