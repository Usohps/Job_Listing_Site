import Jobs from "../jobs.json";
import Job from "./Job";
function JobList({isHome = false}) {
    const JobsListed = isHome ? Jobs.slice(0,3) : Jobs
  return (
    <div>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs": "Browse Jobs"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {JobsListed.map((job) => (
              <Job job={job} key={job.id}/>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default JobList;
