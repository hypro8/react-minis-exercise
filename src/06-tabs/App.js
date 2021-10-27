import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function TabsApp() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  console.warn("first");
  console.log("jobs in main", jobs);

  const fetchJobs = async () => {
    try {
      console.warn("in fetch jobs 1");

      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      console.log("new jobs in fetch: ", newJobs);
      console.log("jobs in fetch: ", jobs);
      setLoading(false);
      console.warn("in fetch jobs 2");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.warn("in useEffect 1");
    fetchJobs();
    console.warn("in useEffect 2");
  }, []);

  // ! This will not work!
  // ! jobs must be loaded. or all properties would be undefined.
  // const { company, dates, duties, title } = jobs[value];

  if (loading) {
    console.log("in loading...");
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  // ! jobs are loaded after the if (loading) statement.
  // ! This is OK. Destructuring completed, ready to proceed now.
  const { company, dates, duties, title } = jobs[value];
  // console.log(company, dates, duties, title);

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => (
            <button
              key={job.id}
              onClick={() => setValue(index)}
              className={`job-btn ${index === value && "active-btn"}`}
              // className="job-btn"
            >
              {job.company}
            </button>
          ))}
          {/* <button className="active-btn">test button</button> */}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default TabsApp;
