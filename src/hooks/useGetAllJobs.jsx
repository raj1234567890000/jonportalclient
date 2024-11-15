import { setAllJobs } from "@/Redux/jobSlices"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "sonner"


const useGetAllJobs = () => {
    const dispatch=useDispatch();
    const {searchedQuery} = useSelector(store=>store.job);
    useEffect(()=>{
        const fetchAllJobs=async()=>{
            try{
               
                const token=localStorage.getItem('authToken')
                const res= await axios.get(`https://careernestbackend.onrender.com/a1/v1/job/getallpostjob?keyword=${searchedQuery}`,{
                    headers:{
                        token: token
                    },
                    withCredentials:true,
                })
                if(res.data.success){
                    dispatch(setAllJobs(res.data.jobs))
                }
                //console.log("job",res)

            }catch(error){
                toast.error(error.response.data.message);
                console.error(error)

            }
        }
        fetchAllJobs();
        //eslint-disable-next-line
    },[])
 
}

export default useGetAllJobs
