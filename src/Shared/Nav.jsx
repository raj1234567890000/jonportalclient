import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { setUser } from "@/Redux/authSlice";
import axios from "axios";
import { LogOut, User2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

//import React from 'react'

const Nav = () => {

const{user}=useSelector(store=>store.auth)
const dispatch=useDispatch();
const navigate=useNavigate();

const LogOutHnadler=async(token)=>{
  try{
const res= await axios.get(`https://careernestbackend.onrender.com/api/v1/user/logout`,{withCredentials:true})
if(res.data.sucess){
  localStorage.removeItem("authToken",token)
dispatch(setUser(null));
navigate('/login')
toast.success(res.data.message);
}
  }catch(err){
    console.log(err);
    toast.error(err.response.data.message)
  }

}

  return (
    <>
      <div className="nav-header">
      <div className="svg-background">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 220">
  <path fill="#006666" d="M0,192L60,186.7C120,181,240,171,360,176C480,181,600,203,720,202.7C840,203,960,181,1080,160C1200,139,1320,117,1380,106.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
</svg>
</div>
<div className="flex item-center justify-between mx-auto max-w-7xl h-16 mt-5 sm:flex items-center">
          <div className="flex">
         
            <h1 className="text-2xl font-bold ml-4 mt-3 ">
              
            Career<span className="text-white">Nest</span>
            </h1>
          
          </div>
          <div className="flex items-center gap-12 text-white">
            <ul className="flex font-medium items-center gap-5 cursor-pointer ml-3 pl-5">
{
  user && user.role === 'recruiter'?(
    <>
       <Link to='/admin/companies'>Companies</Link>
       <Link to='/admin/jobs'>Jobs</Link>
    </>
  ):(
    <>
      
    </>
  )
}

{
  user && user.role === 'student'?(
    <>
    <Link to='/'>Home</Link>
            <Link to='/job'>Jobs</Link>
            <Link to='/browser'>Browser</Link>
    </>
  ):(
    <>
       
    </>
  )
}
         
            </ul>
            {!user ? (
              <div className="flex items-center gap-2 login-sinup-button">
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="bg-orange-600 text-white login-text"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/singup">
                  <Button
                    variant="outline"
                    className="bg-orange-600 text-white login-text"
                  >
                    Register
                  </Button>
                </Link>
              </div>
            ) : (
              <div>
              <Popover>
                <PopoverTrigger>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={user?.profile.profilePhoto}/>
                    <AvatarFallback>Profile</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <div className="bg-black">
                <PopoverContent className="w-80 bg-slate-500 text-white">
                  <div className="flex gap-4 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage src={user?.profile.profilePhoto} />
                      <AvatarFallback>Profile</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{user?.fullname}</h4>
                      <p className="text-sm mt-2">{user?.profile.bio} </p>
                    </div>
                  </div>
                  <div className="flex flex-col my-2 text-white">
                  {
  user && user.role==='student' &&(
    <div className="flex w-fit items-center gap-2 cursor-pointer">
    <User2 />
    <Button variant="link"><Link to="/profile">view Profile</Link></Button>
  </div>
  )
}
                  
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut />
                      <Button onClick={LogOutHnadler} variant="link">Logout</Button>
                    </div>
                  </div>
                </PopoverContent>
                </div>
              </Popover>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
