import React from "react";
import { LeftSideData } from "../../data/leftSideData";
import LeftSideWrapper from "../../Wrappers/leftSideWrapper";

const Leftside = () => {
  return (
    <LeftSideWrapper>
      <div className="LeftSide">
        <img className="bars" src="bars.svg" alt="bars" />
        <div className="d-flex align-items-center firstList">
          <img className="firstList_photo" src="li1.svg" alt="photo" />
          <p className="list_subtitle mb-0 subtitle">Registration</p>
        </div>
        <ul className="res1">
          <li className="d-flex align-items-center list_subtitle active">
            <img
              className="small_photo"
              src="small_photo.svg"
              alt="small_photo"
            />
            <p className="mb-0">Student</p>
          </li>
          <li className="list_subtitle mb-0">Teacher</li>
          <li className="list_subtitle mb-0">Worker</li>
        </ul>
        {LeftSideData.map((value, index) => {
          return (
            <ul className={`left_group ${value.exit}`} key={index}>
              <li className="d-flex align-items-center">
                <img
                  className={value.className}
                  src={value.img}
                  alt="photo"
                  style={{ width: `${value.width}`, height: `28px` }}
                />
                <p className="list_subtitle mb-0">{value.title}</p>
              </li>
            </ul>
          );
        })}
      </div>
    </LeftSideWrapper>
  );
};

export default Leftside;
