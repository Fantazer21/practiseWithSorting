import React from "react";
import photo from "../photo.jpg";

export const EmptyComingData: React.FC<any> = () => {

  return (
    <div>
      <img width='200px' height='150px' src={photo} alt=""/>
    </div>
  )
}
