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
import { motion } from "framer-motion"; // Import motion from framer-motion
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    calculateProgress();
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((store) => store.auth);
  const [progress, setProgress] = useState(0);
  const { loginWithRedirect } = useAuth0();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`https://careernestbackend.onrender.com/api/v1/user/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.sucess) {
        const token = res.data.token;
        if (token) {
          localStorage.setItem("authToken", token); // Store the token in localStorage
        }
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
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
        progress += 50;
      }
    });

    setProgress(progress);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <>
      <div>
        <Nav />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="login"
        >
          <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-auto mt-12">
            <motion.form
              onSubmit={submitHandler}
              className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white  border rounded-xl  shadow-2xl p-8 md:p-10 space-y-6 loginform"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                className="font-extrabold text-3xl mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Login
              </motion.h1>

              <div className="relative w-full mb-6">
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-gradient-to-r from-green-400 to-blue-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              <motion.div
                className="my-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Label className="ml-2 text-gray-700 dark:text-gray-300 authtext">Email</Label>
                <Input
                  type="email"
                  placeholder="Enter your Email"
                  className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-900 dark:text-white input-text"
                  id="email"
                  name="email"
                  value={input.email}
                  onChange={changeEventHandler}
                />
              </motion.div>

              <motion.div
                className="my-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Label className="ml-2 text-gray-700 dark:text-gray-300 authtext">Password</Label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-900 dark:text-white input-text"
                  id="password"
                  name="password"
                  value={input.password}
                  onChange={changeEventHandler}
                />
              </motion.div>

              <motion.div
                className="flex items-center justify-between gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <RadioGroup className="flex items-center gap-4 authtext">
                  <div className="input-text flex items-center space-x-2">
                    <Input
                      type="radio"
                      name="role"
                      id="role"
                      value="student"
                      className="cursor-pointer focus:ring-blue-500"
                      checked={input.role === "student"}
                      onChange={changeEventHandler}
                    />
                    <Label htmlFor="r1" className="text-gray-700 dark:text-gray-300 authtext">Student</Label>
                  </div>
                  <div className="input-text flex items-center space-x-2">
                    <Input
                      type="radio"
                      name="role"
                      id="role"
                      value="recruiter"
                      className="cursor-pointer focus:ring-blue-500 authtext"
                      checked={input.role === "recruiter"}
                      onChange={changeEventHandler}
                    />
                    <Label htmlFor="r2" className="text-gray-700 dark:text-gray-300 authtext">Recruiter</Label>
                  </div>
                </RadioGroup>
              </motion.div>

              {loading ? (
                <Button className="w-full py-2 bg-gray-700 text-white flex items-center justify-center gap-2 auth-button" disabled>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Please Wait
                </Button>
              ) : (
                <Button 
                  className={`w-full py-2 rounded-lg transition-colors auth-button ${progress === 100 ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                  disabled={progress !== 100}
                >
                  Login
                </Button>
              )}
              <div>
                <Button onClick={() => loginWithRedirect()} className="auth-button w-full py-2 rounded-lg transition-colors bg-blue-500 hover:bg-blue-600 text-white">
                  Continue with Google
                </Button>
              </div>
<div className="text-center ">
<Button onClick={()=>navigate("/forgetpassword")} className="auth-button w-full py-2 rounded-lg transition-colors bg-blue-500 hover:bg-blue-600 text-white">Forget Password</Button>
</div>
              <motion.span
                className="text-center block mt-4 text-gray-700 dark:text-gray-300 "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Don’t have an account? <Link to="/singup" className="text-blue-500 hover:underline">Signup</Link>

              </motion.span>
            
            </motion.form>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Login;


