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

const LogOutHnadler=async()=>{
  try{
const res= await axios.get(`http://localhost:8080/api/v1/user/logout`,{withCredentials:true})
if(res.data.sucess){
  const { token } = res.data.success;
  localStorage.removeItem('token', token)
dispatch(setUser(null));
navigate('/')
toast.success(res.data.message);
}
  }catch(err){
    console.log(err);
    toast.error(err.response.data.message)
  }

}

  return (
    <>
      <div className="bg-white">
        <div className="flex item-center justify-between mx-auto max-w-7xl h-16 mt-5 sm:flex items-center">
          <div>
            <h1 className="text-2xl font-bold ml-4 ">
            Career<span className="text-[#f83002]">Nest</span>
            </h1>
          </div>
          <div className="flex items-center gap-12">
            <ul className="flex font-medium items-center gap-5 cursor-pointer ml-3 pl-5">
{
  user && user.role === 'recruiter'?(
    <>
       <Link to='/admin/companies'>Companies</Link>
       <Link to='/admin/jobs'>Jobs</Link>
    </>
  ):(
    <>
       <Link to='/'>Home</Link>
            <Link to='/job'>Jobs</Link>
            <Link to='/browser'>Browser</Link>
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
                    Singup
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
