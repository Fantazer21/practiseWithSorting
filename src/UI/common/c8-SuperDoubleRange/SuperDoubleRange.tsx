import React, { useState } from 'react';
import './SuperDoubleRange.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-slider/assets/index.css';
import {useDispatch} from "react-redux";
import {setMaxPriceAC, setMinPriceAC} from '../../../bll/reducers/data-reducer';


const {createSliderWithTooltip} = Slider;
const Range = createSliderWithTooltip(Slider.Range);

type SuperDoubleRangePropsType = {
  onChangeRange?: (value: number[]) => void
  value?: number[]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
  {
    onChangeRange,
  }) => {
   const handleChange = (event: Event, newValue: number[] | number) => {
     onChangeRange && onChangeRange(newValue as number[]);
   };

  const dispatch = useDispatch()
  const [value, setValue] = useState<number[]>([3500, 90000]);

  return (
    <>
      <div className="sliderArea">
        <Range
          marks={{
            0: `0`,
            100000: `100000`,
          }}
          min={0}
          max={100000}
          defaultValue={value}
          tipFormatter={value => `${value}руб`}
          tipProps={{
            placement: 'top',
            visible: true
          }}
          onChange={setValue}
          onAfterChange={() => {
            dispatch(setMinPriceAC(value[0]))
            dispatch(setMaxPriceAC(value[1]))
          }}
        />
      </div>
    </>
  );
}

export default SuperDoubleRange;
