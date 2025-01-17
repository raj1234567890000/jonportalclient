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
import { motion } from "framer-motion";
import Logo from "../Assets/Logo.jpg";

const Nav = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LogOutHandler=async(token)=>{
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

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        className="nav-header bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        variants={navVariants}
      >
        <div className="container mx-auto max-w-7xl px-4 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
          <div>
            <img src={Logo}alt="Logo" className="h-12 rounded-3xl"/>
          </div>
            <h1 className="ml-2 text-3xl font-normal textlogo">
              Next<span className="">Career</span>
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="md:flex items-center gap-8 navlink ">
            {user && user.role === "recruiter" ? (
              <>
                <Link to="/admin/companies" className="hover:text-yellow-300 navlinks">
                  Companies
                </Link>
                <Link to="/admin/jobs" className="hover:text-yellow-300 navlinks">
                  Jobs
                </Link>
              </>
            ) : user && user.role === "student" ? (
              <>
                <Link to="/" className="hover:text-yellow-300 navlinks">
                  Home
                </Link>
                <Link to="/job" className="hover:text-yellow-300 navlinks">
                  Jobs
                </Link>
                <Link to="/browser" className="hover:text-yellow-300 navlinks">
                  Browser
                </Link>
                <Link to="/helpus" className="hover:text-yellow-300 navlinks">
                  Help
                </Link>
              </>
            ) : null}
          </nav>

          {/* User Profile or Login/Register */}
          <div className="flex items-center gap-4 ">
            {!user ? (
              <div className="flex gap-4">
                <Link to="/login">
                  <Button className="bg-white text-purple-700 hover:bg-purple-700 hover:text-white userlogin">
                    Login
                  </Button>
                </Link>
                <Link to="/singup">
                  <Button className="bg-white text-purple-700 hover:bg-purple-700 hover:text-white userlogin">
                    Register
                  </Button>
                </Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={user?.profile?.profilePhoto} />
                    <AvatarFallback>Profile</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="bg-white text-black w-72 shadow-lg">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-4 p-4 navprofile">
                      <Avatar className="cursor-pointer">
                        <AvatarImage src={user?.profile?.profilePhoto} />
                        <AvatarFallback>Profile</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium text-lg">{user?.fullname}</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {user?.profile?.bio}
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      {user && user.role === "student" && (
                        <div className="flex items-center gap-2 ">
                          <User2 className="text-purple-600" />
                          <Link to="/profile" className="hover:underline view">
                            View Profile
                          </Link>
                        </div>
                      )}
                      <div
                        className="flex items-center gap-2 mt-3 cursor-pointer"
                        onClick={LogOutHandler}
                      >
                        <LogOut className="text-purple-600" />
                        <Link  className="hover:underline view">
                            LogOut
                          </Link>
                      </div>
                    </div>
                  </motion.div>
                </PopoverContent>
              </Popover>
            )}
          </div>

          {/* Mobile Menu */}
          
        
        </div>
      </motion.div>
    </>
  );
};

export default Nav;
