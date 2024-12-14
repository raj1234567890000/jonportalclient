import Nav from "@/Shared/Nav";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedjobTable from "./AppliedjobTable";
import { useState } from "react";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";
import Footer from "./Footer";
import { motion } from "framer-motion"; // Import motion from framer-motion

const isResume = true;

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <>
    <div>
      <Nav />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="profile">
          {/* Profile Info Card */}
          <motion.div
            className="max-w-4xl mx-auto   border border-white rounded-2xl my-5 p-8 shadow-2xl mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={user?.profile.profilePhoto} />
                </Avatar>
                <div>
                  <h1 className="font-medium text-xl">{user?.fullname}</h1>
                  <p>{user?.profile.bio}</p>
                </div>
              </div>
              <Button
                className="text-right"
                variant="outline"
                onClick={() => setOpen(true)}
              >
                <Pen />
              </Button>
            </div>
            <div className="my-5">
              <div className="flex items-center gap-3">
                <Mail />
                <span>{user?.email}</span>
              </div>
              <div className="flex items-center gap-3 my-2">
                <Contact />
                <span>{user?.phoneNumber} </span>
              </div>
            </div>
            <div className="my-5">
              <h1 className="font-bold">Skills</h1>
              <div className="flex items-center gap-1 badge">
                {user?.profile?.skills.length !== 0 ? (
                  user?.profile?.skills.map((item, index) => (
                    <Badge
                      key={index}
                      className={"font-bold ml-2 mt-2 profilebadge"}
                      variant="ghost"
                    >
                      {item}
                    </Badge>
                  ))
                ) : (
                  <span>No skills added</span>
                )}
              </div>
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label className="text-md font-bold">Resume</Label>
              {isResume ? (
                <a
                  target="_blank"
                  href={user?.profile?.resume}
                  className=" w-full hover:underline cursor-pointer resume"
                >
                  {user?.profile?.resumeOriginalName}
                </a>
              ) : (
                <span>NA</span>
              )}
            </div>
          </motion.div>

          {/* Applied Jobs Section */}
          <motion.div
            className="max-w-4xl mx-auto bg-white  border border-white rounded-2xl shadow-2xl mb-10 appliedtable"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-lg font-bold my-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Applied Jobs
            </motion.h1>
            <motion.div
              className="flex-1 h-[40vh] overflow-y-auto p-5 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <AppliedjobTable />
            </motion.div>
          </motion.div>

          {/* Update Profile Dialog */}
          <UpdateProfileDialog open={open} setOpen={setOpen} />

         
        </div>
      </motion.div>
      
    </div>
    <div className="profileFooter">
      <Footer />
      </div>
    </>
  );
};

export default Profile;
