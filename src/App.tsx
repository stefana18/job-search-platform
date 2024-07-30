import { useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import Header from './components/Header'
import JobList from './components/JobList'
import jobData from "./data.json"

function App() {

  const [searchTitle, setSearchTitle] = useState("");
    const [searchLocation, setSearchLocation] = useState("");

    const handleSearchTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTitle(event.target.value);
    };

    const handleSearchLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchLocation(event.target.value);
    };

    const filteredJobs = jobData.filter(job => {
        const titleMatch = job.title.toLowerCase().includes(searchTitle.toLowerCase());
        const locationMatch = job.location.toLowerCase().includes(searchLocation.toLowerCase());
        return (searchTitle === "" || titleMatch) && (searchLocation === "" || locationMatch);
    });
    
  return (
    <>
      <main>
        <Header
        onTitleChange={handleSearchTitleChange}
        onLocationChange={handleSearchLocationChange}/>
        <div className="container">
        <h1>Recommended jobs</h1>
        <Filter/>
        <JobList jobs={filteredJobs}/>
    </div>
      </main>
    </>
  )
}

export default App
