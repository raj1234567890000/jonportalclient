import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Edit, MoreHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
    const{companies,searchCompanyByText}=useSelector(store=>store.company);
    const [filterCompany, setFilterCompany] = useState(companies);
    const navigate=useNavigate();
      useEffect(()=>{
        const filteredCompany = companies.length >= 0 && companies.filter((company)=>{
            if(!searchCompanyByText){
                return true
            };
            return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());

        });
        setFilterCompany(filteredCompany);
    },[companies,searchCompanyByText])

  return (
    <div>
      <Table>
        <TableCaption>All list of your recent register company</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Website</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {
               filterCompany.length <= 0 ? <span className=" font-bold text-red-600">Comapny Not Found</span>:(
                    <>
                    {
                       filterCompany  &&  filterCompany?.map((company, index) => {
                      return(
                        <tr key={index}>
                             
                               
                        <TableCell>
   <Avatar>
     <AvatarImage
       src={company?.logo }
       className="w-12"
     />
   </Avatar>
   </TableCell>
   <TableCell>{company.name}</TableCell>
   <TableCell>{company.createdAt.split("T")[0]}</TableCell>
   <TableCell className="text-blue-600">  <a href={company.website} target="_blank" rel="noopener noreferrer">
    {company.website}
  </a></TableCell>
   <TableCell className="text-right cursor-pointer">
       <Popover>
        <PopoverTrigger>
           <MoreHorizontal/>
        </PopoverTrigger>
        <PopoverContent className="w-32">
               <div onClick={()=>navigate(`/admin/companies/${company._id}`)}  className="flex bg-black text-white w-20 h-8 border rounded-md ml-6">
                   <Edit className="mt-1 ml-2"/>
                   <span className="ml-4 mt-1">Edit</span>
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

export default CompaniesTable;
