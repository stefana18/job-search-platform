export default function Filter() {
    return (
        <div className="filter">
            <div className="filter-group">
                <h3>Job Type</h3>
                <label><input type="checkbox" /> Full time</label>
                <label><input type="checkbox" /> Part time</label>
                <label><input type="checkbox" /> Internship</label>
            </div>
            <div className="filter-group">
                <h3>Salary range</h3>
                <input type="range" min="1000" max="200000" />
            </div>
            <div className="filter-group">
                <h3>Experience Level</h3>
                <label><input type="checkbox"/> Entry level</label>
                <label><input type="checkbox"/> Intermediate</label>
                <label><input type="checkbox"/> Senior</label>
                <label><input type="checkbox"/> Student</label>
            </div>
        </div>
    )
}