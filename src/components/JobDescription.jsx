import { useParams } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { setSingleJob } from "@/Redux/jobSlices";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { motion } from "framer-motion";
import Nav from "@/Shared/Nav";
import Footer from "./Footer";

const JobDescription = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { singleJob } = useSelector((store) => store.job);
  const { job } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);

  const isInitiallyApplied =
    singleJob?.applications?.some(
      (application) => application.applicant === user?._id
    ) || false;
  const jobId = params.id;

  const [isApplied, setIsApplied] = useState(isInitiallyApplied);

  const applyJobHandler = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const res = await axios.get(
        `https://careernestbackend.onrender.com/a1/v1/application/apply/${jobId}`,
        {
          headers: {
            token: token,
          },
          withCredentials: true,
        }
      );
      if (res) {
        setIsApplied(true);
        toast.success("Job Applied Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchSingleJobs = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const res = await axios.get(
          `https://careernestbackend.onrender.com/a1/v1/job/getuserjob/${jobId}`,
          {
            headers: {
              token: token,
            },
            withCredentials: true,
          }
        );
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
        }
      } catch (error) {
        console.error(error);
        toast.error(error.response.data.message);
      }
    };
    fetchSingleJobs();
  }, [jobId, dispatch, user?._id]);

  return (
    <>
    <Nav/>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto my-10 bg-white shadow-lg rounded-lg p-6 jobdescriptions"
    >
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div>
          <h1 className="font-medium text-lg text-gray-600">
            {job?.company?.name}
          </h1>
          <h1 className="font-bold text-2xl text-gray-900">
            {singleJob?.title}
          </h1>
          <div className="flex items-center gap-3 mt-4">
            <Badge className="bg-blue-100 text-blue-700 font-semibold">
              {singleJob?.position}
            </Badge>
            <Badge className="bg-red-100 text-red-700 font-semibold">
              {singleJob?.jobType}
            </Badge>
            <Badge className="bg-purple-100 text-purple-700 font-semibold">
              {singleJob?.salary}
            </Badge>
          </div>
        </div>
        <Button
          onClick={isApplied ? null : applyJobHandler}
          disabled={isApplied}
          className={`rounded-lg decriptionbutton  ${
            isApplied
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-purple-600 text-white hover:bg-purple-700"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </motion.div>
      <motion.h1
        className="border-b-2 border-gray-200 font-medium py-4 text-lg text-gray-800 mt-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        Job Description
      </motion.h1>
      <motion.div
        className="my-4 space-y-3 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <p>
          <span className="font-bold">Role:</span>
          <span className="pl-4 font-normal">{singleJob?.title}</span>
        </p>
        <p>
          <span className="font-bold">Location:</span>
          <span className="pl-4 font-normal">{singleJob?.location}</span>
        </p>
        <p className="description">
          <span className="font-bold">Description:</span>
          <span className="pl-4 font-normal">{singleJob?.description}</span>
        </p>
        <p>
          <span className="font-bold">Experience:</span>
          <span className="pl-4 font-normal">{singleJob?.experience}</span>
        </p>
        <p>
          <span className="font-bold">Salary:</span>
          <span className="pl-4 font-normal">{singleJob?.salary}</span>
        </p>
        <p>
          <span className="font-bold">Total Applicants:</span>
          <span className="pl-4 font-normal">
            {singleJob?.applications.length}
          </span>
        </p>
        <p>
          <span className="font-bold">Posted Date:</span>
          <span className="pl-4 font-normal">
            {singleJob?.createdAt.split("T")[0]}
          </span>
        </p>
      </motion.div>
    </motion.div>
    <div className="jobdescripton">
      <Footer />
      </div>
    </>
  );
};

export default JobDescription;
