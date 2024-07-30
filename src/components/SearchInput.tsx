type SearchInputProps = {
    placeholder:string;
    icon: JSX.Element;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({placeholder, icon, onChange}: SearchInputProps){
    return (
        <div className="input-container">
            {icon}
        <input type="text" className="search-input" placeholder={placeholder} onChange={onChange}/>
        </div>
    )

}