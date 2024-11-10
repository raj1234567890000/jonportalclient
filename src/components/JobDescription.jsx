import { useParams } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { setSingleJob } from "@/Redux/jobSlices";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";



const JobDescription = () => {
  const params=useParams();
  const dispatch= useDispatch()
  const {singleJob}=useSelector(store=>store.job);
  const { job } = useSelector((store) => store.job);
 
  const{user}=useSelector(store=>store.auth);
  const isInitallyApplied =singleJob?.applications?.some(application=>application.applicant === user?._id) || false;
  const jobId=params.id;

const [isApplied,setIsApplied]=useState(isInitallyApplied);



const applyJobHandler=async()=>{
  try{
const res= await axios.get(`https://jobportal-3-j6fo.onrender.com/v1/application/getapplyjob/${jobId}`,{withCredentials:true})
//console.log("Apply job",res.data)
if(res){
  setIsApplied(true);
  toast.success("Job Applied Successfully")
}
  }catch(err){
    console.log(err)
    toast.error("You Have Already Applied")
  }

}

  useEffect(()=>{
    const fetchSingleJobs=async()=>{
        try{
            const res= await axios.get(`https://jobportal-3-j6fo.onrender.com/a1/v1/job/getuserjob/${jobId}`,{
                withCredentials:true,
            })
            if(res.data.success){
                dispatch(setSingleJob(res.data.job))
                
            }
            //console.log("job",res)

        }catch(err){
            console.error(err)

        }
    }
    fetchSingleJobs();
    
},[jobId,dispatch,user?._id])


  return (
    <>
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between">
          <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
            <h1 className="font-bold text-xl">{singleJob?.title}</h1>
            <div className="flex items-center gap-2 mt-4">
              <Badge className={"text-blue-700 font-bold"} variant="ghost">
              {singleJob?.position}
              </Badge>
              <Badge className={"text-[#F83002] font-bold"} variant="ghost">
              {singleJob?.jobType}
              </Badge>
              <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
              {singleJob?.salary}
              </Badge>
            </div>
          </div>
          <Button onClick={isApplied ? null : applyJobHandler}
            disabled={isApplied}
            className={`rounded-lg ${
              isApplied
                ? "bg-gray-600 cursor-not-allowed text-white"
                : "bg-[#972a8e] text-white hover:bg-[#5F32ad]"
            }`}
          >
            {isApplied ? "Already Applied" : "Apply Now"}
          </Button>
        </div>
        <h1 className="border-b-2 border-b-gray-300 font-medium py-4">Job Descriptions</h1>
        <div className="my-4" >
<h1 className="font-bold my-1">Role:<span className="pl-4 font-normal text-gray-800">{singleJob?.title}</span></h1>
<h1 className="font-bold my-1">Loaction:<span className="pl-4 font-normal text-gray-800">{singleJob?.location}</span></h1>
<h1 className="font-bold my-1">Descrpition:<span className="pl-4 font-normal text-gray-800">{singleJob?.description}</span></h1>
<h1 className="font-bold my-1">Experience:<span className="pl-4 font-normal text-gray-800"> {singleJob?.experience}</span></h1>
<h1 className="font-bold my-1">Salary:<span className="pl-4 font-normal text-gray-800">{singleJob?.salary}</span></h1>
<h1 className="font-bold my-1">Total Applicants:<span className="pl-4 font-normal text-gray-800">{singleJob?.applications.length}</span></h1>
<h1 className="font-bold my-1">Posted Date:<span className="pl-4 font-normal text-gray-800">{singleJob?.createdAt.split("T")[0]}</span></h1>
        </div>
      </div>
    </>
  );
};

export default JobDescription;
