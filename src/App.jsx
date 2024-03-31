import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobList from "./components/JobList";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <!-- Hero --> */}
      <Hero
        title=" Become a React Dev"
        subTitle="Find the React job that fits your skills and needs"
      />
      {/* <!-- Developers and Employers --> */}
      <HomeCards />
      {/* <!-- Browse Jobs --> */}
      <JobList/>

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
};

export default App;
