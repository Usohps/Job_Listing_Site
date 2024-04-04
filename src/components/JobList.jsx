// import Jobs from "../jobs.json";
import { useState, useEffect } from "react";
import Job from "./Job";
import ArticleSkeleton from "../lib/Skeleton";
function JobList({ isHome = false }) {
  // const JobsListed = isHome ? Jobs.slice(0,3) : Jobs
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const apiURL = isHome ? "/api/job?_limit=3":"/api/job"
      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        setJobs(data);
        console.log({ data });
      } catch (err) {
        console.log("Error Fetching Data", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>
          {
            isLoading ? <ArticleSkeleton/>:
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <Job job={job} key={job.id} />
            ))}
          </div>
          }
        </div>
      </section>
    </div>
  );
}

export default JobList;
