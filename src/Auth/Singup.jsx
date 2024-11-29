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
import { motion } from "framer-motion"; // Import motion from framer-motion

const Singup = () => {
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
          className="singup"
        >
          <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-auto mt-3">
            <motion.form
              onSubmit={submitHandler}
              className="border rounded-md p-4 my-10 sm:w-1/3 singup-form border-white bg-[#006666] text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                className="font-bold text-xl mb-5 text-white hh1"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Sign up
              </motion.h1>

              <div className="progress-container">
                <progress id="progress-bar" className="w-full" value={progress} max="100"></progress>
              </div>

              <motion.div
                className="my-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Label className="ml-2">Full Name</Label>
                <Input
                  id="fullname"
                  type="text"
                  placeholder="Enter your full name"
                  className="mt-1 text-black"
                  name="fullname"
                  value={input.fullname}
                  onChange={changeEventHandler}
                />
              </motion.div>

              <motion.div
                className="my-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Label className="ml-2">Email</Label>
                <Input
                  type="email"
                  placeholder="Enter your Email"
                  className="mt-1 text-black"
                  id="email"
                  name="email"
                  value={input.email}
                  onChange={changeEventHandler}
                />
              </motion.div>

              <motion.div
                className="my-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Label className="ml-2">Phone number</Label>
                <Input
                  type="text"
                  placeholder="+918907857453"
                  className="mt-1 text-black"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                />
              </motion.div>

              <motion.div
                className="my-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Label className="ml-2">Password</Label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1 text-black"
                  id="password"
                  name="password"
                  value={input.password}
                  onChange={changeEventHandler}
                />
              </motion.div>

              <motion.div
                className="flex items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <RadioGroup className="flex items-center gap-4 my-5">
                  <div className="flex items-center space-x-2">
                    <Input
                      type="radio"
                      name="role"
                      id="role"
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
                      id="role"
                      value="recruiter"
                      className="cursor-pointer"
                      checked={input.role === "recruiter"}
                      onChange={changeEventHandler}
                    />
                    <Label htmlFor="r2">Recruiter</Label>
                  </div>
                </RadioGroup>
              </motion.div>

              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Label htmlFor="r1">Profile</Label>
                <Input
                  id="file"
                  accept="image/*"
                  type="file"
                  className="cursor-pointer"
                  onChange={changeFileHandler}
                />
              </motion.div>

              {loading ? (
                <Button className="w-full my-4 bg-gray-900 text-white cursor-not-allowed">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please Wait
                </Button>
              ) : (
                <Button className="bg-black text-white w-full my-4" disabled={progress !== 100}>
                  Sign up
                </Button>
              )}

              <motion.span
                className="text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Already have an account?
                <Link to="/login" className="text-blue-600">
                  Login
                </Link>
              </motion.span>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Singup;
