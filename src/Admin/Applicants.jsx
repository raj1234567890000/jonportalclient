import Nav from "@/Shared/Nav"
import ApplicantsTable from "./ApplicantsTable"
import { useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setAllApplicants } from "@/Redux/applicationSlice"
import { toast } from "sonner"


const Applicants = () => {
    const params=useParams();
    const dispatch=useDispatch();
    const{applicants}=useSelector(store=>store.application)
    useEffect(()=>{

        const fetchAllApplicants=async()=>{
            try{
const res= await axios.get(`http://careernestbackend.onrender.com/a1/v1/application/${params.id}/applicant`,{withCredentials:true});
if(res?.data.sucess){
   // console.log(res.data);
    dispatch(setAllApplicants(res?.data.job))

}
            }catch(error){
              toast.error(error.response.data.message);
                console.log(error)
            }
        }
fetchAllApplicants();
// eslint-disable-next-line
    },[])
  return (
    <div>
     <Nav/>
     <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-xl my-5">Applicants ({applicants?.applications?.length})</h1>
        <ApplicantsTable/>

     </div>
    </div>
  )
}

export default Applicants

