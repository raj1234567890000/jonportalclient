import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setSingleCompany } from "@/Redux/companySlice";
import Nav from "@/Shared/Nav";
//import { COMPANY_API_END_POINT } from "@/utils/constant";
import { Label } from "@radix-ui/react-label";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CreateCompanies = () => {
  const navigate = useNavigate();
  const [companyName, SetCompanyName] = useState();
  const dispatch = useDispatch();
  const registerNewComapny = async() => {
    try {
        const res = await axios.post(`https://jobportal-3-j6fo.onrender.com/api/v1/company/registercompany`, {companyName}, {
            headers:{
                'Content-Type':'application/json'
            },
            withCredentials:true
        });
        if(res?.data?.success){
            dispatch(setSingleCompany(res.data.company));
            toast.success(res.data.message);
            const companyId = res?.data?.company?._id;
            navigate(`/admin/companies/${companyId}`);
        }
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <>
      <div>
        <Nav />
        <div className="max-w-4xl mx-auto">
          <div className="my-10">
            <h1 className="font-bold text-2xl">Your Company Name</h1>
            <p className="text-gray-500">
              What Would You Like To Give Your Company Name? You Can Change This
              Later
            </p>
          </div>
          <Label>Company Name</Label>
          <Input
            type="text"
            className="my-2"
            placeholder="xyz comapny"
            onChange={(e) => SetCompanyName(e.target.value)}
          />
          <div className="flex items-center gap-2 my-10">
            <Button
              className="bg-black text-white"
              varient="outline"
              onClick={registerNewComapny}
            >
              Continous
            </Button>
            <Button
              className="bg-black text-white"
              onClick={() => navigate("/admin/companies")}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCompanies;
