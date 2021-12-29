import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from './bll/store';
import s from './styles.module.css';
import SuperDoubleRange from "./UI/common/c8-SuperDoubleRange/SuperDoubleRange";
import {
  FeedbackType,
  setFilteredFeedBacks,
  setQuantityFeedbacksAC,
  setStartFilteredValues
} from "./bll/reducers/data-reducer";
import Rating from '@mui/material/Rating';
import {TextField} from "@mui/material";
import {EmptyComingData} from "./UI/emptyData/EmptyComingData";
import MultipleSelectChip from "./UI/MultipleSelect";


export type doubleRange = Array<number>


function App() {
  const dispatch = useDispatch()
  const dataFiltered = useSelector<AppRootState, FeedbackType[]>(state => state.dataFeedback.dataFiltered)
  const data = useSelector<AppRootState, FeedbackType[]>(state => state.dataFeedback.dataFeedback)

  //filter values
  const filterQuantityFeedbacks = useSelector<AppRootState, number>(state => state.dataFeedback.setFilter.quantityFeedBacks)
  const filterStars = useSelector<AppRootState, number[]>(state => state.dataFeedback.setFilter.quantityStars)
  const minPrice = useSelector<AppRootState, number>(state => state.dataFeedback.setFilter.minPrice)
  const maxPrice = useSelector<AppRootState, number>(state => state.dataFeedback.setFilter.maxPrice)


  const StartDataValue = {
    quantityStars: [],
    quantityFeedBacks: 12,
    minPrice: 10000,
    maxPrice: 90000,
  }


  function onChangeFeedbackQuantity(e: any) {
    const value = Math.floor(Number(e.currentTarget.value))

    if (Number.isInteger(value)) {
      dispatch(setQuantityFeedbacksAC(value))
    }
  }

  function filterFeedback(arr: FeedbackType[]) {
    return arr.filter(el => (filterStars.find(st => st === el.feedbackStar)
      && el.quantityFeedBacks > filterQuantityFeedbacks
      && el.price > minPrice && el.price < maxPrice))
  }

  return (

    <div className={s.box}>
      <div className={s.filters}>
        <div className={'quantity'}>
          <h3>Количество звезд</h3>
          <MultipleSelectChip/>
        </div>
        <div>
          <h3>Количество отзывов</h3>
          <TextField
            onChange={onChangeFeedbackQuantity}
            inputProps={{
              type: 'number',
              pattern: "[0-9]", min: 0,
            }}
          />
        </div>
        <div>
          <h3>Цена</h3>
          <div className={s.price}>
          </div>
          <div className={s.doubleInput}>
            <SuperDoubleRange
            />
            <button onClick={() => dispatch(setFilteredFeedBacks(filterFeedback(data)))}
                    className={s.buttonFilter}>ПРИМЕНИТЬ ФИЛЬТР
            </button>
            <button onClick={() => {
              dispatch(setStartFilteredValues(StartDataValue))
              dispatch(setFilteredFeedBacks([]))
            }}
                    className={s.buttonFilter}>Очистить фильтр
            </button>
          </div>
        </div>
      </div>
      {dataFiltered.length !== 0 ? dataFiltered.map((el, ind) => {
        return <div key={ind + 323} className={s.dataFiltered}>
          <div>{el.hotelName}</div>
          <div className={s.dataFilteredAttribute}>
            <div className={s.dataFilteredAttributeItem}>
              <Rating value={el.feedbackStar} readOnly/>
            </div>
            <div>
              {el.quantityFeedBacks}
            </div>
          </div>
          <div className={s.dataFilteredDescription}>{el.description}</div>
          <div className={s.dataFilteredAttribute}>
            {
              !el.status ? <button className={s.buttonUnbooked}>Забронировать</button> :
                <button className={s.buttonBooked}><b>Забронировано</b></button>
            }
            <div className={s.priceAttribute}>{el.price}</div>
          </div>
        </div>
      }) : <EmptyComingData/>}
    </div>
  );
}

export default App;

