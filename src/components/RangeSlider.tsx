import { useRef, useState, useEffect } from "react";
import "./Filter.css"

type RangeSliderProps = {
    min: number;
    max: number;
    value: [number, number];
    step: number;
    onChange: (value: [number, number]) => void;
}

export default function RangeSlider({min, max, value, step, onChange}: RangeSliderProps){
    const [minValue, setMinValue] = useState(value[0]);
    const [maxValue, setMaxValue] = useState(value[1]);
    
    const sliderRefMin = useRef<HTMLInputElement>(null);
    const sliderRefMax = useRef<HTMLInputElement>(null);

    function handleSliderInput() {
        if (sliderRefMin.current && sliderRefMax.current) {
            const newMinValue = Math.min(sliderRefMin.current.valueAsNumber, maxValue - step);
            const newMaxValue = Math.max(sliderRefMax.current!.valueAsNumber, minValue + step);

            setMinValue(newMinValue);
            setMaxValue(newMaxValue);

            onChange([newMinValue, newMaxValue]);
        }
    }

   
    useEffect(()=> {
        handleSliderInput();
    }, [sliderRefMin, sliderRefMax]);

    return (
        <div className="range-slider">
            <div className="slider-values">
                <input 
                type="number" 
                value={minValue}
                onInput={ (e) => {
                    const newMin = Math.max(parseInt((e.target as HTMLInputElement).value), min);
                    setMinValue(newMin);
                    onChange([newMin, maxValue]);
                }}
                min={min} 
                max={maxValue - step}
                step={step}
                className="number-input"/>
                <input
                    type="number"
                    value={maxValue}
                    onInput={(e) => {
                        const newMax = Math.min(parseInt((e.target as HTMLInputElement).value), max);
                        setMaxValue(newMax);
                        onChange([minValue, newMax]);
                    }}
                    min={minValue + step}
                    max={max}
                    step={step}
                    className="number-input"
                />
            </div>
            <div className="slider-container">
                <input 
                type="range"
                onInput={handleSliderInput}
                value={minValue}
                min={min}
                max={max}
                ref={sliderRefMin}
                step={step}
                className="slider"/>
               <input
               type="range"
               onInput={handleSliderInput}
               value={maxValue}
               min={min}
               max={max}
               ref={sliderRefMax}
               step={step}
               className="slider"/>
               <div className="progress" style={{ left: `${((minValue - min) / (max - min)) * 100}%`, width: `${((maxValue - minValue) / (max - min)) * 100}%`}}></div>
            </div>
        </div>
    )

}