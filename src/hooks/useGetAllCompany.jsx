import { setCompanies,} from "@/Redux/companySlice"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { toast } from "sonner"


const useGetAllCompany= () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        const fetchAllCompany=async()=>{
            try{ const token=localStorage.getItem('authToken')
                const res= await axios.get(`https://careernestbackend.onrender.com/api/v1/company/getcomapny`,{
                    headers:{
                        token: token
                    },
                    withCredentials:true,
                })
                if(res?.data?.success){
                    dispatch(setCompanies(res?.data?.companies))
                }
               // console.log("job",res)

            }catch(error){
                toast.error(error.response.data.message);
                console.error(error)

            }
        }
        fetchAllCompany();
      //eslint-disable-next-line
    },[])
 
}

export default useGetAllCompany
