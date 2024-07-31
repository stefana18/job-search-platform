import { useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import Header from './components/Header'
import JobList from './components/JobList'
import jobData from "./data.json"

function App() {

  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const [jobTypes, setJobTypes] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState<[number, number]>([1000, 200000]);
  const [experienceLevels, setExperienceLevels] = useState<string[]>([]);

  const handleSearchTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTitle(event.target.value);
  };

  const handleSearchLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchLocation(event.target.value);
  };

  const handleFilterChange = (filters: { jobTypes: string[], salaryRange: [number, number], experienceLevels: string[] }) => {
    setJobTypes(filters.jobTypes);
    setSalaryRange(filters.salaryRange);
    setExperienceLevels(filters.experienceLevels);
  };
  const normalizeString = (str: string) => str.toLowerCase().replace(`/[^a-z0-9]/g`, '');

  const filteredJobs = jobData.filter(job => {
    const normalizedTitle = normalizeString(job.title);
    const normalizedLocation = normalizeString(job.location);
    const normalizedSearchTitle = normalizeString(searchTitle);
    const normalizedSearchLocation = normalizeString(searchLocation);

    // const titleMatch = job.title.toLowerCase().includes(searchTitle.toLowerCase());
    // const locationMatch = job.location.toLowerCase().includes(searchLocation.toLowerCase());
    // const jobTypeMatch = jobTypes.length === 0 || jobTypes.includes(job.type);
    // const salaryMatch = job.salary <= salaryRange[1] && job.salary >= salaryRange[0];
    // const experienceMatch = experienceLevels.length === 0 || experienceLevels.includes(job.levelOfExperience);

    const titleMatch = normalizedTitle.includes(normalizedSearchTitle);
    const locationMatch = normalizedLocation.includes(normalizedSearchLocation);
    const jobTypeMatch = jobTypes.length === 0 || jobTypes.includes(job.type);
    const salaryMatch = job.salary <= salaryRange[1] && job.salary >= salaryRange[0];
    const experienceMatch = experienceLevels.length === 0 || experienceLevels.includes(job.levelOfExperience);
    
    return (
      (searchTitle === "" || titleMatch) &&
      (searchLocation === "" || locationMatch) &&
      jobTypeMatch &&
      salaryMatch &&
      experienceMatch
    )
  })

  //const isFiltering = searchTitle !== "" || searchLocation !=="" || jobTypes.length > 0 || salaryRange !== 1000 || experienceLevels.length > 0;
    
  return (
    <>
      <main>
        <Header
        onTitleChange={handleSearchTitleChange}
        onLocationChange={handleSearchLocationChange}/>
        <div className="container">
        <h1>Recommended jobs</h1>
        <Filter onFilterChange={handleFilterChange}/>

        <JobList jobs={filteredJobs}/>
    </div>
      </main>
    </>
  )
}

export default App
