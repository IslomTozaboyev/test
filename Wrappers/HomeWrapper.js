import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  /* leftSide css*/
  @media screen and (max-width: 1600px) {
    .LeftSide {
      margin-left: 90px !important;
    }
  }
  .LeftSide {
    width: 298px;
    height: 980px;
    margin-left: 290px;
    padding-top: 66px;
    position: relative;
    border-right: 1px solid #64a3b0;
    .res1 {
      .list_subtitle {
        margin: 40px 80px 40px 82px;
        position: relative;
        &.active {
          color: white;
          margin-right: 10px;
          font-size: 16px;
          line-height: 19.5px;
          margin: 25px 80px 40px 82px;
        }
        .small_photo {
          width: 8px;
          height: 8px;
          position: absolute;
          top: 4px;
          left: -15px;
          border-radius: 1px;
        }
      }
    }
    .exit {
      margin-top: 0 !important;
      padding-top: 160px;
    }
    .left_group {
      margin-top: 49.4px;
      margin-left: 23px;
      .list_subtitle {
        padding-left: 15px;
        font-size: 16px;
        line-height: 19.5px;
      }
    }
    .firstList {
      width: 230px;
      height: 50px;
      background: #64a3b0;
      box-shadow: 0px 6px 12px rgba(51, 215, 225, 0.3);
      border-radius: 5px;
      &,
      .firstList_photo {
        margin-left: 10px;
      }
      .firstList_photo {
        width: 30px;
        height: 22px;
      }
      .subtitle {
        margin-left: 12px;
        color: #f8f8f8;
        font-size: 16px;
        line-height: 20px;
      }
    }
    .subtitle,
    .list_subtitle {
      font-size: 16px;
      font-weight: normal;
      font-style: normal;
      line-height: 20px;
      &.active {
        color: white;
      }
    }
    .bars {
      width: 32px;
      height: 32px;
      position: absolute;
      top: 20px;
      right: 9px;
    }
    .list_subtitle {
      color: rgba(248, 248, 248, 0.4);
    }
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      li {
      }
    }
  }

  /* sidebar css */
  .SideBar {
    width: 1042px;
    height: 800px;
    position: relative;
    .circleActive {
      position: absolute;
      top: 86px;
      left: 25px;
    }
    .registration {
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 44px;
      color: #79d9ee;
      padding: 40px 0 20.8px 40px;
    }

    .personal_flex {
      margin-left: 20px;

      &.activeSubs {
        background: linear-gradient(
          180deg,
          rgba(33, 188, 160, 0) 10.23%,
          rgba(33, 188, 160, 0.2) 100%
        );
        border-bottom: 3px solid #64a3b0;
        border-radius: 4px;
        padding-left: 35px;
        margin-left: 45px;
        padding-bottom: 7px;
      }

      &.education {
        padding-left: 30px;
      }
      &.agreement {
        padding-left: 106px;
      }
      &.finish {
        padding-left: 93px;
      }

      .circle {
        padding-right: 16px;
      }
      .circleActive {
        padding: 0;
      }
      .subtitle {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: rgba(248, 248, 248, 0.2);
        &.active {
          color: white;
        }
      }
    }
    .form {
      margin-top: 30px;
      width: 800px;
      position: relative;
      .vactor {
        position: absolute;
        width: 16px;
        height: 8px;
        bottom: 232px;
        left: 310px;
      }
      .calendar1,
      .calendar2 {
        position: absolute;
        width: 24px;
        height: 24px;
      }
      .calendar1 {
        top: 135px;
        right: 142px;
      }
      .calendar2 {
        bottom: 127px;
        left: 301px;
      }

      .rightSide {
        position: relative;
        .radio_group {
          position: absolute;
          bottom: 130px;
          .subtitle {
            font-weight: bold;
            font-style: normal;
            font-size: 14.8px;
            line-height: 18px;
            color: #f8f8f8;
          }
        }
        .user {
          position: absolute;
          top: 60px;
          right: -165px;
          width: 222px;
          height: 230.22px;
        }
        .upload_btn {
          position: absolute;
          top: 315px;
          right: -200px;
          width: 301px;
          height: 41.11px;
          background: #64a3b0;
          border: 0.8px solid #64a3b0;
          box-sizing: border-box;
          box-shadow: 0px 6px 12px rgba(33, 188, 160, 0.3);
          border-radius: 3.2px;
          display: flex;
          justify-content: center;
          align-items: center;
          .subtitle {
            font-weight: bold !important;
            font-size: 13px;
            line-height: 16px;
            color: #f8f8f8 !important;
            border: 0.8px solid #64a3b0;
          }
          .plus {
            width: 17.2px;
            height: 16.44px;
            margin-right: 8.6px;
          }
        }
      }
    }
  }
`;
export default HomeWrapper;
