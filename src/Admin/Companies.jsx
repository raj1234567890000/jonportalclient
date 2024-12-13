import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Nav from "@/Shared/Nav"
import CompaniesTable from "./CompaniesTable"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setsearchCompanyByText } from "@/Redux/companySlice"
import useGetAllCompany from "@/hooks/useGetAllCompany"
import Footer from "@/components/Footer"


const Companies = () => {
useGetAllCompany();
    const[input,setInput]=useState('');
    const navigate=useNavigate();
    const dispatch=useDispatch();
    useEffect(()=>{
dispatch(setsearchCompanyByText(input))
    },[input,dispatch])
  return (
<>
<div>
        <Nav/>
    
    <div className="max-w-6xl mx-auto my-10 company ">
        <div className="flex items-center justify-between my-5">
        <Input 
        className="w-fit"
        placeholder="fiter by name"
        onChange={(e)=>setInput(e.target.value)}
        />
        <Button className="bg-black text-white" onClick={()=>navigate('/admin/companies/create')} >New company</Button>
        </div>
   <CompaniesTable/>
        
    </div>
    </div>
    <div className="contactFooter">
      <Footer />
      </div>
    </>
  )
}


export default Companies
