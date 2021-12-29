import React from "react";
import {useDispatch} from "react-redux";
import photo from "../photo.jpg";
import {setStartFilteredValues} from "../../bll/reducers/data-reducer";

export const EmptyComingData: React.FC<any> = () => {

  return (
    <div>
      <img width='200px' height='150px' src={photo} alt=""/>

    </div>
  )
}
