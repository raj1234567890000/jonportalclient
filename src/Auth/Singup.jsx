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
import { motion } from "framer-motion";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    phoneNumber: "",
    email: "",
    password: "",
    role: "",
    file: "",
  });
  const [progress, setProgress] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((store) => store.auth);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    calculateProgress();
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
    calculateProgress();
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

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div>
        <Nav />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="signup flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-auto mt-12 ml-40"
        >
          <div className="max-w-4xl mx-auto w-full">
            <motion.form
              onSubmit={submitHandler}
              className="w-full sm:w-3/4 md:w-1/2 lg:w-1/2 border rounded-xl p-8 sm:p-10 bg-white shadow-2xl text-gray-800 ml-52 mb-10 signupform"
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
                Sign Up
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
                className="mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Label className="block text-sm  authtext ">Full Name</Label>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  className=" input-text mt-2 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500 "
                  name="fullname"
                  value={input.fullname}
                  onChange={changeEventHandler}
                />
              </motion.div>

              <motion.div
                className="mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Label className="block text-sm  authtext">Email</Label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className=" input-text mt-2 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500"
                  name="email"
                  value={input.email}
                  onChange={changeEventHandler}
                />
              </motion.div>

              <motion.div
                className="mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Label className="block text-sm  authtext">Phone Number</Label>
                <Input
                  type="text"
                  placeholder="Enter your phone number"
                  className=" input-text mt-2 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500"
                  name="phoneNumber"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                />
              </motion.div>

              <motion.div
                className="mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Label className="block text-sm  authtext">Password</Label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="input-text mt-2 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500"
                  name="password"
                  value={input.password}
                  onChange={changeEventHandler}
                />
              </motion.div>

              <motion.div
                className="mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Label className="block text-sm authtext">Upload Profile Picture</Label>
                <Input
                  type="file"
                  accept="image/*"
                  className="input-text mt-2 w-full cursor-pointer"
                  onChange={changeFileHandler}
                />
              </motion.div>

              <motion.div
                className="flex justify-between items-center mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <RadioGroup className="flex items-center gap-4">
                  <div className="input-text flex items-center space-x-2">
                    <Input
                      type="radio"
                      name="role"
                      value="student"
                      checked={input.role === "student"}
                      onChange={changeEventHandler}
                      className="cursor-pointer"
                    />
                    <Label className="authtext">Student</Label>
                  </div>
                  <div className=" input-text flex items-center space-x-2">
                    <Input
                      type="radio"
                      name="role"
                      value="recruiter"
                      checked={input.role === "recruiter"}
                      onChange={changeEventHandler}
                      className="cursor-pointer"
                    />
                    <Label className="authtext">Recruiter</Label>
                  </div>
                </RadioGroup>
              </motion.div>

              {loading ? (
                <Button className="w-full bg-gray-300 text-gray-600 cursor-not-allowed" disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please Wait
                </Button>
              ) : (
                <Button
                  className={`auth-button w-full py-3 rounded-lg text-white font-bold transition-all ${
                    progress === 100
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={progress !== 100}
                >
                  Sign Up
                </Button>
              )}

              <motion.span
                className="text-center block mt-4  text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
              </motion.span>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Signup;