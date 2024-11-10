import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { setLoading, setUser } from "@/Redux/authSlice";

const UpdateProfileDialog = ({ open , setOpen }) => {
  const { user } = useSelector((store) => store.auth);
  const { loading } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.map((skill) => skill),
    file: user?.profile?.resume,
  });

  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const FileChageHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("bio", input.bio);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      dispatch(setLoading(true));
      const res = await axios.post(
        `https://jobportal-3-j6fo.onrender.com/api/v1/user/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
     // console.log(res.data.success);
      if (res) {
        dispatch(setUser(res?.data.user));
        toast.success("Profile Update Successfully");
      }
      //console.log("update profile", res);
    } catch (err) {
      console.log(err);
      toast.error("something Wrong");
    } finally {
      dispatch(setLoading(false));
    }
    setOpen(false);
   // console.log(input);
  };

  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle className="text-white text-center">
              Update Profile
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="grid-4 gap-4 py-2">
              <div className="grid grid-cols-4 items-center gap-4 mb-5">
                <label htmlFor="name" className="text-right text-white ml-7">
                  Name :
                </label>
                <input
                  id="name"
                  className="col-span-3 rounded-md h-8 mr-10"
                  name="fullname"
                  type="text"
                  value={input.fullname}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4  mb-5">
                <label htmlFor="bio" className="text-right text-white  ml-7">
                  Bio :
                </label>
                <input
                  id="bio"
                  className="col-span-3 rounded-md h-8  mr-10"
                  name="bio"
                  type="text"
                  value={input.bio}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4  mb-5">
                <label htmlFor="name" className="text-right text-white  ml-7">
                  Email :
                </label>
                <input
                  id="email"
                  className="col-span-3 rounded-md h-8  mr-10"
                  name="email"
                  type="email"
                  value={input.email}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4 mb-5">
                <label htmlFor="name" className="text-right text-white  ml-7">
                  Number :
                </label>
                <input
                  id="number"
                  className="col-span-3 rounded-md h-8  mr-10"
                  name="phoneNumber"
                  type="number"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4 mb-5">
                <label htmlFor="name" className="text-right text-white  ml-7">
                  Skills :
                </label>
                <input
                  id="skills"
                  className="col-span-3 rounded-md h-8  mr-10"
                  name="skills"
                  type="text"
                  value={input.skills}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4 mb-5">
                <label htmlFor="file" className="text-right text-white  ml-7">
                  Resume :
                </label>

                <input
                  id="file"
                  className="col-span-3 bg-white rounded-md  mr-10"
                  name="file"
                  type="file"
                  accept="application/pdf"
                  onChange={FileChageHandler}
                />
              </div>
              <div className="text-center">
                <label className="text-green-200">. jpg/png Only </label>
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <Button className=" bg-gray-900 text-white  w-full my-4 cursor-not-allowed">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please Wait
                </Button>
              ) : (
                <Button className="bg-black text-white w-full my-4">
                  Update Profile
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialog;
