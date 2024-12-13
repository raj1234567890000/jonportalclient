import Nav from "@/Shared/Nav"
import ApplicantsTable from "./ApplicantsTable"
import { useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setAllApplicants } from "@/Redux/applicationSlice"
import { toast } from "sonner"
import Footer from "@/components/Footer"


const Applicants = () => {
    const params=useParams();
    const dispatch=useDispatch();
    const{applicants}=useSelector(store=>store.application)
    useEffect(()=>{

        const fetchAllApplicants=async()=>{
            try{
              const token=localStorage.getItem('authToken')
const res= await axios.get(`https://careernestbackend.onrender.com/a1/v1/application/${params.id}/applicant`,{
  headers:{
    token: token
},
  withCredentials:true
});
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
    <>
    <div>
     <Nav/>
     <div className="max-w-7xl mx-auto applicants">
        <h1 className="font-bold text-xl my-5">Applicants ({applicants?.applications?.length})</h1>
        <ApplicantsTable/>

     </div>
    </div>
    <div className="contactFooter">
      <Footer />
      </div>
    </>
  )
}

export default Applicants

