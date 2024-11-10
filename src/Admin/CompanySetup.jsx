import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import useGetCompanyById from "@/hooks/useGetCompanyById"
import Nav from "@/Shared/Nav"
import { Label } from "@radix-ui/react-label"
import axios from "axios"
import { ArrowLeft, Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "sonner"


const CompanySetup = () => {
    const params=useParams();
    useGetCompanyById(params.id);

    const [input,setInput]=useState({
        name: "",
        description:"",
        location:"",
        website:"",
        file:null
    })
    const{singleCompany}=useSelector(store=>store.company)
    const [loading,setLoading]=useState(false);

    const navigate=useNavigate();

    const changeEventHandler=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    const changeFileEventHandler=(e)=>{
        const file=e.target.files[0];
        setInput({...input,file});
    }
    const submitHandler=async(e)=>{
        e.preventDefault();
        //console.log("input",input)
        const formData = new FormData();
        formData.append("name",input.name)
        formData.append("description",input.description)
        formData.append("location",input.location)
        formData.append("website",input.website)
        if(input.file){
            formData.append("file",input.file)
        }
        try{
            setLoading(true)
const res=await axios.put(`https://jobportal-3-j6fo.onrender.com/api/v1/company/upadtecompanybyid/${params.id}`,formData,{
    headers:{
        "Content-Type":"multipart/form-data"
    },
    withCredentials:true
})
if(res?.data?.success){
    toast(res.data.message)
    navigate('/admin/companies')
}
        }catch(err){
            console.log(err)
            toast.error("Something Wrong")
        }finally{
            setLoading(false)
        }

    }

    useEffect(()=>{
        setInput({
            name:singleCompany.name || "",
            description:singleCompany.description || "",
            location: singleCompany.location || "",
            website: singleCompany.website ||"",
            file:singleCompany.file || null

        })
        
    },[singleCompany])
  return (
    <>
      <Nav/>
      <div className="max-w-xl mx-auto my-10">
        <form onSubmit={submitHandler}>
            <div className="flex items-center gap-5 p-8">
            <Button className="flex items-center gap-2 text-white font-semibold bg-black" varient="outline" onClick={()=>navigate('/admin/companies')}>
                <ArrowLeft/>
                <span>Back</span>
                
            </Button>
            <h1 className="font-bold text-xl">Comapny setup</h1>
            </div>
        <div className="grid grid-cols-2 gap-4">
       <div>
         <Label>Comapny Name</Label>
        <Input type="text" name="name" value={input.name} onChange={changeEventHandler}/>
       </div>
       <div>
         <Label>Logo</Label>
        <Input type="file" accept="image/*" className="cursor-pointer"  onChange={changeFileEventHandler}/>
       </div>
       <div>
         <Label>Website</Label>
        <Input type="text" name="website" value={input.website} onChange={changeEventHandler}/>
       </div>
       <div>
         <Label>Loaction</Label>
        <Input type="text" name="location" value={input.location} onChange={changeEventHandler}/>
       </div>
       <div>
         <Label>Description</Label>
        <Input type="text" name="description" value={input.description} onChange={changeEventHandler}/>
       </div>
        </div>
         
        {loading ? (
              <Button className="w-full my-4 bg-black text-white">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please Wait
              </Button>
            ) : (
              <Button className="bg-black text-white w-full my-4">Update</Button>
            )}
        </form>

      </div>
    </>
  )
}

export default CompanySetup
