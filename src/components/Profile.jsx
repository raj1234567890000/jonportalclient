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

const isResume = true;

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div>
      <Nav />
      <div className="profile">
      <div className="max-w-3xl mx-auto bg-white border border-gray-500 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4 ">
            <Avatar className="h-24 w-24 ">
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
          <div className=" flex items-center gap-3">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber} </span>
          </div>
        </div>
        <div className="my-5">
          <h1 className="font-bold">Skiils</h1>
          <div className="flex items-center gap-1">
            {user?.profile?.skills.length !== 0 ? (
              user?.profile?.skills.map((item, index) => (
                <Badge
                  key={index}
                  className={"text-[#F83002] font-bold ml-2 mt-2"}
                  variant="ghost"
                >
                  {item}
                </Badge>
              ))
            ) : (
              <span></span>
            )}
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="_blank"
              href={user?.profile?.resume}
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white  rounded-2xl ">
        <h1 className="text-lg font-bold my-6">Applied Job</h1>
        <AppliedjobTable />
      </div>

      <UpdateProfileDialog open={open} setOpen={setOpen} />
      <Footer />
    </div>
    </div>
  );
};

export default Profile;
