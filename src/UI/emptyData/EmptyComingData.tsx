import React from "react";
import {useDispatch} from "react-redux";
import photo from "../photo.jpg";
import {setStartFilteredValues} from "../../bll/reducers/data-reducer";

export const EmptyComingData: React.FC<any> = () => {
  const dispatch = useDispatch()
  const dataFilter = {
    quantityStars: 2,
    quantityFeedBacks: 12,
    minPrice: 10000,
    maxPrice: 90000,
  }
  return (
    <div>
      <img width='200px' height='150px' src={photo} alt=""/>
      <button onClick={() => {
        dispatch(setStartFilteredValues(dataFilter))
      }}>Очистить фильтр
      </button>
    </div>
  )
}
