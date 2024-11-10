import { useSelector } from "react-redux";
import LatestjobCard from "./LatestjobCard";


const LatestJob = () => {
  const { allJobs } = useSelector((store) => store.job);
  

  return (
    <div className="latest-job">
      <div className="max-w-7xl mx-auto my-300 text-center">
        <h1 className="text-4xl font-bold">
          <span className="text-[#6A38C2]">Latest & Top </span>Job Openings
        </h1>
        <div className="grid gap-4 my-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {allJobs && allJobs.length <= 0 ? (
            <span>No Job Available</span>
          ) : (
            allJobs &&
            allJobs
              ?.slice(0, 6)
              .map((job) =>
               <>
                <div key={job._id}>
                    <LatestjobCard key={job._id} job={job} />
                </div>
               </>
                
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestJob;
