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
  setQuantityStarsAC
} from "./bll/reducers/data-reducer";
import Rating from '@mui/material/Rating';
import {TextField} from "@mui/material";
import {EmptyComingData} from "./UI/emptyData/EmptyComingData";


export type doubleRange = Array<number>


function App() {
  const dispatch = useDispatch()
  const dataStars = useSelector<AppRootState, number[]>(state => state.dataFeedback.dataStars)
  const dataFiltered = useSelector<AppRootState, FeedbackType[]>(state => state.dataFeedback.dataFiltered)
  const data = useSelector<AppRootState, FeedbackType[]>(state => state.dataFeedback.dataFeedback)


  //filter values
  const filterQuantityFeedbacks = useSelector<AppRootState, number>(state => state.dataFeedback.setFilter.quantityFeedBacks)
  const filterStars = useSelector<AppRootState, number>(state => state.dataFeedback.setFilter.quantityStars)
  const minPrice = useSelector<AppRootState, number>(state => state.dataFeedback.setFilter.minPrice)
  const maxPrice = useSelector<AppRootState, number>(state => state.dataFeedback.setFilter.maxPrice)

  function onChangeFeedbackQuantity(e: any) {
    const value = Math.floor(Number(e.currentTarget.value))

    if (Number.isInteger(value)) {
      dispatch(setQuantityFeedbacksAC(value))
    }
  }

  function filterFeedback(arr: FeedbackType[]) {
    return arr.filter(el => (el.feedbackStar === filterStars
      && el.quantityFeedBacks > filterQuantityFeedbacks
      && el.price > minPrice && el.price < maxPrice))
  }
  return (
    <div className={s.box}>
      <div className={s.filters}>
        <div className={'quantity'}>
          <h3>Количество звезд</h3>
          <select className={s.select} onChange={(e) => dispatch(setQuantityStarsAC(Number(e.currentTarget.value)))}>
            {dataStars.map((star: number, ind: number) => {
              return <option key={ind + 212} value={star}>{star}</option>
            })}
          </select>
        </div>
        <div>
          <h3>Количество отзывов</h3>
          <TextField
            label="Например от 10"
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


