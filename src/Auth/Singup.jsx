//import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { setLoading } from "@/Redux/authSlice";
import Nav from "@/Shared/Nav";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Singup = () => {
  const [input, setInput] = useState({
    fullname: "",
    phoneNumber: "",
    email: "",
    password: "",
    role: "",
    file: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);
  const { loading,user } = useSelector((store) => store.auth);
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    calculateProgress ();
  };
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
    calculateProgress ();
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`https://careernestbackend.onrender.com/api/v1/user/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.sucess) {
        navigate("/login");
        toast.success(res.data.message);
      }

     // console.log(res);
    } catch (error) {
      toast.error(error.response.data.message);

      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  const calculateProgress = () => {
    let progress = 0;
    const fields = Object.values(input);

    fields.forEach((field) => {
      if (field || field === true) {
        progress += 20;
      }
    });

    setProgress(progress);
  };

  useEffect(()=>{
    if(user){
      navigate("/")
    }
    // eslint-disable-next-line
  },[])
  return (
    <>
      <div>
        <Nav />
        <div className="singup">
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-auto mt-3">
          <form
            onSubmit={submitHandler}
            className=" border border-white bg-[#00cba9] text-white rounded-md p-4 my-10  sm:w-1/3 singup-form"
          >
            <h1 className="font-bold text-xl mb-5 text-white">Sing up</h1>
            <div className="progress-container">
          <progress id="progress-bar" className="w-full" value={progress} max="100"></progress>
        </div>
            <div className="my-2">
              <Label className="ml-2">Full Name</Label>
              <Input
                type="text"
                placeholder=" Enter your full name"
                className="mt-1 text-black"
                name="fullname"
                value={input.fullname}
                onChange={changeEventHandler}
              />
            </div>
            <div className="my-2">
              <Label className="ml-2">Email</Label>
              <Input
                type="email"
                placeholder=" Enter your Email"
                className="mt-1 text-black"
                name="email"
                value={input.email}
                onChange={changeEventHandler}
              />
            </div>
            <div className="my-2">
              <Label className="ml-2">Phone number</Label>
              <Input
                type="text"
                placeholder=" +918907857453"
                className="mt-1 text-black"
                name="phoneNumber"
                value={input.phoneNumber}
                onChange={changeEventHandler}
              />
            </div>
            <div className="my-2">
              <Label className="ml-2">Password</Label>
              <Input
                type="password"
                placeholder=" Enter your password"
                className="mt-1 text-black"
                name="password"
                value={input.password}
                onChange={changeEventHandler}
              />
            </div>
            <div className="flex items-center justify-between">
              <RadioGroup className="flex items-center gap-4 my-5">
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="student"
                    className="cursor-pointer"
                    checked={input.role === "student"}
                    onChange={changeEventHandler}
                  />
                  <Label htmlFor="r1">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="recruiter"
                    className="cursor-pointer"
                    checked={input.role === "recruiter"}
                    onChange={changeEventHandler}
                  />
                  <Label htmlFor="r2">Recruiter</Label>
                </div>
              </RadioGroup>
        
            </div>
                 
            <div className="flex items-center gap-2">
                <Label htmlFor="r1">Profile</Label>
                <Input
                  accept="image/*"
                  type="file"
                  className="cursor-pointer"
                  onChange={changeFileHandler}
                />
              </div>
            {loading ? (
              <Button className="w-full my-4 bg-gray-900 text-white cursor-not-allowed">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please Wait
              </Button>
            ) : (
              <Button className="bg-black text-white w-full my-4 " disabled={progress !== 100}>
                Singup
              </Button>
            )}
            <span className="text-sm">
              Already have an account?
              <Link to="/login" className="text-blue-600">
                Login
              </Link>
            </span>
          </form>
        </div>
        </div>
      </div>
    </>
  );
};

export default Singup;
