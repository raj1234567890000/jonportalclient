import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { setUser } from "@/Redux/authSlice";
import axios from "axios";
import { LogOut, Menu, User2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { motion } from "framer-motion";


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
          <img
              src="http://localhost:5173/src/Assets/carrernest.jpg"
              alt="CareerNest Logo"
              className="h-10 rounded-full"
            />
            <h1 className="ml-2 text-3xl font-normal">
              Career<span className="">Nest</span>
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {user && user.role === "recruiter" ? (
              <>
                <Link to="/admin/companies" className="hover:text-yellow-300">
                  Companies
                </Link>
                <Link to="/admin/jobs" className="hover:text-yellow-300">
                  Jobs
                </Link>
              </>
            ) : user && user.role === "student" ? (
              <>
                <Link to="/" className="hover:text-yellow-300">
                  Home
                </Link>
                <Link to="/job" className="hover:text-yellow-300">
                  Jobs
                </Link>
                <Link to="/browser" className="hover:text-yellow-300">
                  Browser
                </Link>
                <Link to="/helpus" className="hover:text-yellow-300">
                  Help
                </Link>
              </>
            ) : null}
          </nav>

          {/* User Profile or Login/Register */}
          <div className="flex items-center gap-4">
            {!user ? (
              <div className="flex gap-4">
                <Link to="/login">
                  <Button className="bg-white text-purple-700 hover:bg-purple-700 hover:text-white">
                    Login
                  </Button>
                </Link>
                <Link to="/singup">
                  <Button className="bg-white text-purple-700 hover:bg-purple-700 hover:text-white">
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
                    <div className="flex items-center gap-4 p-4">
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
                        <div className="flex items-center gap-2">
                          <User2 className="text-purple-600" />
                          <Link to="/profile" className="hover:underline">
                            View Profile
                          </Link>
                        </div>
                      )}
                      <div
                        className="flex items-center gap-2 mt-3 cursor-pointer"
                        onClick={LogOutHandler}
                      >
                        <LogOut className="text-purple-600" />
                        <Link  className="hover:underline">
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
          <div className="md:hidden">
            <Popover>
              <PopoverTrigger>
                <Button variant="ghost">
                  <Menu className="text-white" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="bg-white text-black w-64 shadow-lg">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <nav className="flex flex-col gap-4 p-4 text-orange-500 text-center">
                    {user && user.role === "recruiter" ? (
                      <>
                        <Link to="/admin/companies">Companies</Link>
                        <Link to="/admin/jobs">Jobs</Link>
                      </>
                    ) : user && user.role === "student" ? (
                      <>
                        <Link to="/">Home</Link>
                        <Link to="/job">Jobs</Link>
                        <Link to="/browser">Browser</Link>
                        <Link to="/helpus">Help</Link>
                      </>
                    ) : null}
                  </nav>
                </motion.div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Nav;
