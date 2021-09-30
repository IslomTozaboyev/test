import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Header from "../Containers/Header";
import { LeftSideData } from "../data/leftSideData";
import PersonalFlex from "../data/personalFlex";
import HomeWrapper from "../Wrappers/HomeWrapper";
import InputGroup from "../data/inputGroup";
import Inputs from "../Components/inputs/inputs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pointer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <HomeWrapper>
        {/* ========== leftside ========== */}
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

        {/* ======== SideBar ========== */}
        <div className="SideBar">
          <h1 className="registration mb-0">Registration</h1>
          <div className="d-flex align-items-center">
            {PersonalFlex.map((value, index) => {
              return (
                <div
                  key={index}
                  className={`personal_flex d-flex align-items-center ${value.className}`}
                >
                  <img
                    className={`circle ${value.circle}`}
                    src={value.img}
                    alt="check"
                  />
                  <p className={`subtitle mb-0 ${value.className}`}>
                    {value.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* form-inputs */}
          <form className="form d-flex" action="#">
            <div className="d-flex flex-wrap align-items-center ">
              {InputGroup.map((value, index) => {
                return (
                  <Inputs
                    key={index}
                    width={`${value.width}`}
                    img={`${value.img ? value.img : ""}`}
                    placeholder={`${value.placeholder}`}
                    inputClass={`${value.inputClass}`}
                    imgClass={`${value.imgClass}`}
                  />
                );
              })}
              <img className="calendar1" src="calendar.svg" alt="photo" />
              <img className="vactor" src="vactor.svg" alt="photo" />
              <img className="calendar2" src="calendar.svg" alt="photo" />
            </div>
            {/* //rightSide */}
            <div className="rightSide">
              <div>
                <img className="user" src="user.svg" alt="bigUser" />
                <button className="upload_btn">
                  <img className="plus" src="plus.svg" alt="plus" />
                  <p className="mb-0 subtitle">Upload image </p>
                </button>
              </div>
              <div className="radio_group">
                <img src="gender.svg" alt="gender" />
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <p className="mb-0 subtitle">Male</p>
                    <img src="active_radio.svg" alt="radio" />
                  </div>
                  <div className="d-flex align-items-center ms-4">
                    <p
                      className="mb-0 subtitle"
                      style={{ marginRight: "10px" }}
                    >
                      Female
                    </p>
                    <img src="radio.svg" alt="radio" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </HomeWrapper>
    </div>
  );
}
