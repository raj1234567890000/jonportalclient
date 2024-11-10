//import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { setLoading, setUser } from "@/Redux/authSlice";
import Nav from "@/Shared/Nav";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";


const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
    
  });
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading,user } = useSelector((store) => store.auth);

  const submitHandler = async (e,) => {
    e.preventDefault();
    //console.log(input);
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`https://jobportal-3-j6fo.onrender.com/api/v1/user/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
       withCredentials:true,
      });
      if (res.data.sucess) {
      dispatch(setUser(res.data.user))
        navigate("/");
        toast.success(res.data.message);
      }

      //console.log(res);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
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
        <div className="login">
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-auto ">
          <form
            onSubmit={submitHandler}
            className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 border border-gray-200 rounded-md p-6 sm:p-8 lg:p-10 my-10 shadow-md"
          >
            <h1 className="font-bold text-xl mb-5">Login</h1>

            <div className="my-2">
              <Label className="ml-2">Email</Label>
              <Input
                type="email"
                placeholder=" Enter your Email"
                className="mt-1"
                name="email"
                value={input.email}
                onChange={changeEventHandler}
              />
            </div>

            <div className="my-2">
              <Label className="ml-2">Password</Label>
              <Input
                type="password"
                placeholder=" Enter your password"
                className="mt-1"
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
            {loading ? (
              <Button className="w-full my-4 bg-gray-900 cursor-not-allowed text-white">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please Wait
              </Button>
            ) : (
              <Button className="bg-black text-white w-full my-4">Login</Button>
            )}

            <span className="text-sm">
              Already have an account?
              <Link to="/singup" className="text-blue-600">
                singup
              </Link>
            </span>
          </form>
        </div>
        </div>
      </div>
    </>
  );
};

export default Login;
