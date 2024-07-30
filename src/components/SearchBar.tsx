import LocationDropdown from "./LocationDropdown";
import SearchInput from "./SearchInput";
import "./SearchBar.css";
import { ChangeEvent } from "react";

const SearchIcon = (
    <svg fill="#000000" height="10px" width="10px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
 viewBox="0 0 400 550" xmlSpace="preserve">
<g>
	<g>
		<path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
			s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
			S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
			S381.9,104.65,381.9,203.25z"/>
	</g>
</g>
</svg>
)

const LocationIcon = (
    <svg fill="#000000" height="10px" width="10px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 270 360" xmlSpace="preserve">
<g>
	<g>
		<path d="M184.277,0c-71.683,0-130,58.317-130,130c0,87.26,119.188,229.855,124.263,235.883c1.417,1.685,3.504,2.66,5.705,2.67
			c0.011,0,0.021,0,0.032,0c2.189,0,4.271-0.957,5.696-2.621c5.075-5.926,124.304-146.165,124.304-235.932
			C314.276,58.317,255.96,0,184.277,0z M184.322,349.251C160.385,319.48,69.277,201.453,69.277,130c0-63.411,51.589-115,115-115
			s115,51.589,115,115C299.276,203.49,208.327,319.829,184.322,349.251z"/>
		<path d="M184.277,72.293c-30.476,0-55.269,24.793-55.269,55.269s24.793,55.269,55.269,55.269s55.269-24.793,55.269-55.269
			S214.753,72.293,184.277,72.293z M184.277,167.83c-22.204,0-40.269-18.064-40.269-40.269s18.064-40.269,40.269-40.269
			s40.269,18.064,40.269,40.269S206.48,167.83,184.277,167.83z"/>
	</g>
</g>
</svg>
)

type SearchBarProps = {
    onTitleChange: (event: ChangeEvent<HTMLInputElement>) => void
    onLocationChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function SearchBar({onTitleChange, onLocationChange}: SearchBarProps) {
    return (
        <div className="search-bar">
            <SearchInput icon={SearchIcon} placeholder="Job title" onChange={onTitleChange}/>
            <div className="separator"></div>
            <LocationDropdown icon={LocationIcon} placeholder="Add city" onChange={onLocationChange}/>
            <button className="search-button">Search</button>
        </div>
    )
}