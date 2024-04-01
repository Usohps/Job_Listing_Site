import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobList from "../components/JobList";

import ViewAll from "../components/ViewAll";
function Home() {
  return (
    <>
      <Hero
        title=" Become a React Dev"
        subTitle="Find the React job that fits your skills and needs"
      />
      {/* <!-- Developers and Employers --> */}
      <HomeCards />
      {/* <!-- Browse Jobs --> */}
      <JobList isHome={true} />

      <ViewAll />
    </>
  );
}

export default Home;
