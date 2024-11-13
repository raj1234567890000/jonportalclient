
import { setAllAdminJobs } from "@/Redux/jobSlices";
import axios from "axios"
import { useEffect } from "react"
import { useDispatch,} from "react-redux"
import { toast } from "sonner";


const useGetAllAdminJobs = () => {
    const dispatch=useDispatch();
   
    useEffect(()=>{
        const fetchAllAdminJobs=async()=>{
            try{
                const res= await axios.get(`https://careernestbackend.onrender.com/a1/v1/job/getadminjob`,{
                    withCredentials:true,
                })
                if(res.data.success){
                    dispatch(setAllAdminJobs(res.data.jobs))
                }
               //console.log("Adminjob",res)

            }catch(error){
                toast.error(error.response.data.message);
                console.error(error)

            }
        }
        fetchAllAdminJobs();
        //eslint-disable-next-line
    },[])
 
}

export default useGetAllAdminJobs
