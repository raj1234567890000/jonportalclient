import { setSingleCompany } from "@/Redux/companySlice"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { toast } from "sonner"


const useGetCompanyById = (companyId) => {
    const dispatch=useDispatch();
    useEffect(()=>{
        const fetchSingleCompany=async()=>{
            try{
                const res= await axios.get(`https://careernestbackend.onrender.com/api/v1/company/getcompanybyid/${companyId}`,{
                    withCredentials:true,
                })
                if(res?.data?.success){
                    dispatch(setSingleCompany(res?.data?.company))
                }
               // console.log("job",res)

            }catch(error){
                toast.error(error.response.data.message);
                console.error(error)

            }
        }
        fetchSingleCompany();
      
    },[companyId,dispatch])
 
}

export default useGetCompanyById
