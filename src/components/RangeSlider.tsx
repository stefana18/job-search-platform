import { useRef, useState, useEffect } from "react";
import "./Filter.css"

type RangeSliderProps = {
    min: number;
    max: number;
    value: number;
    step: number;
    onChange: (value: number) => void;
}

export default function RangeSlider({min, max, value, step, onChange}: RangeSliderProps){
    const [sliderRange, setSliderRange] = useState(value);
    const [inputValue, setInputValue] = useState(value);
    const sliderRef = useRef<HTMLInputElement>(null);

    function handleSliderInput() {
        const range = max - min;
        const distance = sliderRef.current!.valueAsNumber - min;
        const percentage = (distance /range) * 100;
        setSliderRange(percentage);
        setInputValue(sliderRef.current!.valueAsNumber);
        onChange(sliderRef.current!.valueAsNumber);
    }

    function handleNumberInput(e:  React.ChangeEvent<HTMLInputElement>) {
        const newValue = parseInt(e.target.value);

        if(newValue < min) {
            setInputValue(min);
            setSliderRange(1000);
        }
        else if(newValue > max) {
            setInputValue(max);
            setSliderRange(200000);
        } else {
            setInputValue(newValue);

            const range= max-min;
            const distance = newValue - min;
            const percentage = (distance / range) * 100;
            setSliderRange(percentage);
        }
    }

    useEffect(()=> {
        handleSliderInput();
    }, [sliderRef]);

    return (
        <div className="range-slider">
            <div className="slider-values">
                <small>{min}</small>
                <input 
                type="number" 
                value={inputValue}
                onInput={handleNumberInput}
                min={min} max={max}
                step={step}
                className="number-input"/>
                <small>{max}</small>
            </div>
            <div className="slider-container">
                <input 
                type="range"
                onInput={handleSliderInput}
                value={inputValue}
                min={min}
                max={max}
                ref={sliderRef}
                step={step}
                className="slider"/>
                <div 
                className="slider-thumb"
                style={{left: `calc(${sliderRange}% - 0.5em)`}}
                ></div>
                <div 
                className="progress"
                style={{ width: `${sliderRange}%`}}
                ></div>
            </div>
        </div>
    )

}