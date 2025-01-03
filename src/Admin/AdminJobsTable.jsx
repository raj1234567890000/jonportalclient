import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

  

  import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import axios from "axios";
  import { Delete, Edit, Eye, MoreHorizontal } from "lucide-react";
  import { useEffect, useState } from "react";
  import { useSelector } from "react-redux";
  import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
  
  const AdminJobsTable = () => {
 
     
      const{allAdminJobs,searchJobByText}=useSelector(store=>store.job);
      const [filterJobs, setFilterJobs] = useState(allAdminJobs);
      const navigate=useNavigate();
      useEffect(()=>{ 
        console.log('called');
        const filteredJobs = allAdminJobs.filter((job)=>{
            if(!searchJobByText){
                return true;
            };
            return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());

        });
        setFilterJobs(filteredJobs);
    },[allAdminJobs,searchJobByText])

        
    //delte job

    const handleDelete=async(id)=>{
    
      try{
       const {data}=await axios.delete(`https://careernestbackend.onrender.com/a1/v1/job/jobdelete/${id}`);
       if(data.success){
        alert("Are you sure")
        toast.success(`Job is deleted successyully`)
       }else{
        toast.error(data.message);
       }
      
      }catch(error){
      console.log(error)
      toast.error("Something Went Wrong In delte Job");
      }
        }
  
    return (
      <div>
        <Table>
          <TableCaption>All list of your recent Posted job</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Company name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Date</TableHead>
           
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
              {
                 filterJobs.length <= 0 ? <span className=" font-bold text-red-600">Job Not Found</span>:(
                      <>
                      {
                         filterJobs &&  filterJobs?.map((job, index) => {
                        return(
                          <tr key={index}>
                               
                                 
   
     <TableCell>{job?.company?.name}</TableCell>
     <TableCell>{job?.title}</TableCell>
     <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
     <TableCell className="text-right cursor-pointer">
         <Popover>
          <PopoverTrigger>
             <MoreHorizontal/>
          </PopoverTrigger>
          <PopoverContent className="w-32">
                 <div onClick={()=>navigate(`/admin/jobs/${job._id}`)}  className="flex bg-black text-white w-20 h-8 border rounded-md ml-6">
                     <Edit className="mt-1 ml-2"/>
                     <span className="ml-4 mt-1">Edit</span>
                 </div>
                 <div className="flex items-center  gap-2 cursor-pointer mt-2 bg-black text-white w-28 h-8 border rounded-md ml-6" onClick={()=>navigate(`/admin/jobs/${job._id}/applicants`)}>
                    <Eye className="ml-2"/>
                    <span >Applicants</span>
                 </div>
                 <div onClick={()=>handleDelete(job._id)}  className="flex bg-black text-white w-24 h-8 border rounded-md ml-6 mt-2">
                   <Delete className="mt-1 ml-2" />
                   <span className="ml-2 mt-1">Delete</span>
                  
               </div>
  
             </PopoverContent>
         </Popover>
     </TableCell>
     </tr>
                        )
                              
                            
                          })
                      }
                       
           
                      </>
                  )
                           
              }
          
          </TableBody>
        </Table>
      </div>
    );
  };
  
  export default AdminJobsTable
  
