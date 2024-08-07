import { useEffect, useState } from "react"
import "./Filter.css"
import RangeSlider from "./RangeSlider"

type FilterProps = {
    onFilterChange: (filters: {
        jobTypes: string[],
        salaryRange: [number, number],
        experienceLevels: string[]
    }) => void
}

const MIN_SALARY = 1000;
const MAX_SALARY = 200000;

export default function Filter({onFilterChange}: FilterProps) {

    const [jobTypes, setJobTypes] = useState<string[]>([]);
    const [salaryRange, setSalaryRange] = useState<[number, number]>([MIN_SALARY, MAX_SALARY]);
    const [experienceLevels, setExperienceLevels] = useState<string[]>([]);

    useEffect(() => {
        onFilterChange({
            jobTypes,
            salaryRange,
            experienceLevels
        })
    }, [jobTypes, salaryRange, experienceLevels, onFilterChange]);

    const handleJobTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setJobTypes((prev) => prev.includes(value) ? prev.filter((type) => type!==value) : [...prev, value]);
    }

    const handleExperienceLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setExperienceLevels((prev) => prev.includes(value) ? prev.filter((level) => level !== value) : [...prev, value]);
    };

    const handleSalaryRangeChange = (value: [number, number]) => {
        setSalaryRange(value);
    }

    const handleSearch = () => {
        onFilterChange({
            jobTypes,
            salaryRange,
            experienceLevels
        });
    };

    return (
        <div className="filter">
            <h1>Filter Jobs</h1>
            <div className="filter-group">
                <h3 className="filter-type">Job Type</h3>
                <div className="separator-filter"></div>
                <label><input type="checkbox" value="Full-time" onChange={handleJobTypeChange}/> Full time</label>
                <label><input type="checkbox" value="Part-time" onChange={handleJobTypeChange}/> Part time</label>
                <label><input type="checkbox" value="Internship" onChange={handleJobTypeChange}/> Internship</label>
            </div>
            <div className="filter-group">
                <h3 className="filter-type">Salary Range</h3>
                <div className="separator-filter"></div>
                <div className="range-slider">
                <RangeSlider
                        min={MIN_SALARY}
                        max={MAX_SALARY}
                        value={salaryRange}
                        step={1000}
                        onChange={handleSalaryRangeChange}
                    />
                </div>
            </div>
            <div className="filter-group">
                <h3 className="filter-type">Experience Level</h3>
                <div className="separator-filter"></div>
                <label><input type="checkbox" value="Entry-level" onChange={handleExperienceLevelChange}/> Entry level</label>
                <label><input type="checkbox" value="Intermediate" onChange={handleExperienceLevelChange}/> Intermediate</label>
                <label><input type="checkbox" value="Senior" onChange={handleExperienceLevelChange}/> Senior</label>
                <label><input type="checkbox" value="Student" onChange={handleExperienceLevelChange}/> Student</label>
            </div>
            <button className="search-button-filter" onClick={handleSearch}>Search</button>
        </div>
    )
}