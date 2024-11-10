import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const LatestjobCard = ({job}) => {
  const navigate=useNavigate();
  return (
    <>
      <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200 cursor-pointer " onClick={()=>navigate(`/description/${job._id}`)}>
        
        <div >
   <div className="mb-3">
   <Button  variant="outline" size="icon">
        <Avatar>
            <AvatarImage src={job?.company?.logo}/>

            
        </Avatar>
     </Button>
   </div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="tetx-sm text-gray-500">India</p>
        </div>
        <div>
          <h1 className="font-bold text-lg my-2">{job?.title}</h1>
          <p className="tetx-sm text-gray-600">
            {job?.description}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-4 ml-16">
          <Badge className={"text-blue-700 font-bold"} variant="ghost">
           {job?.position} Position
          </Badge>
          <Badge className={"text-[#F83002] font-bold"} variant="ghost">
            {job?.jobType}
          </Badge>
          <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
            {job?.salary}LPA
          </Badge>
        </div>
      </div>
    </>
  );
};

export default LatestjobCard;


