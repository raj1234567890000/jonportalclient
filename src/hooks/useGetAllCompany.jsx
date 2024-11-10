import { setCompanies,} from "@/Redux/companySlice"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"


const useGetAllCompany= () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        const fetchAllCompany=async()=>{
            try{
                const res= await axios.get(`https://jobportal-3-j6fo.onrender.com/api/v1/company/getcomapny`,{
                    withCredentials:true,
                })
                if(res?.data?.success){
                    dispatch(setCompanies(res?.data?.companies))
                }
               // console.log("job",res)

            }catch(err){
                console.error(err)

            }
        }
        fetchAllCompany();
      //eslint-disable-next-line
    },[])
 
}

export default useGetAllCompany
