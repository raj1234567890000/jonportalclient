import { setSingleCompany } from "@/Redux/companySlice"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"


const useGetCompanyById = (companyId) => {
    const dispatch=useDispatch();
    useEffect(()=>{
        const fetchSingleCompany=async()=>{
            try{
                const res= await axios.get(`https://jobportal-3-j6fo.onrender.com/api/v1/company/getcompanybyid/${companyId}`,{
                    withCredentials:true,
                })
                if(res?.data?.success){
                    dispatch(setSingleCompany(res?.data?.company))
                }
               // console.log("job",res)

            }catch(err){
                console.error(err)

            }
        }
        fetchSingleCompany();
      
    },[companyId,dispatch])
 
}

export default useGetCompanyById
