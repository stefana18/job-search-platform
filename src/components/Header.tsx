import Profile from "./Profile";
import SearchBar from "./SearchBar";
import './Header.css';

type HeaderProps = {
    onTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onLocationChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Header({onTitleChange, onLocationChange}: HeaderProps) {

    return (
        <header className="header">
            <div className="header-content">
                <h1>Find Your Dream Job Here</h1>
                <Profile username="Profile"/>
            </div>
            <SearchBar onTitleChange={onTitleChange} onLocationChange={onLocationChange}/>
        </header>
    )
}