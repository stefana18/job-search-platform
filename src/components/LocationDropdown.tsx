type LocationDropdownProps = {
    placeholder: string;
    icon: JSX.Element;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function LocationDropdown({placeholder, icon, onChange}: LocationDropdownProps) {
    return (
        <div className="input-container">
            {icon}
        <input type="text" className="location-dropdown" placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}