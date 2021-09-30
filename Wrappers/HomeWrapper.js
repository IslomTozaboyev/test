import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;

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
        border-bottom: 4px solid #64a3b0;
        border-radius: 4px;
        padding: 0 15px 0 35px;
        margin-left: 45px;
        padding-bottom: 7px;
      }

      &.education {
        padding-left: 30px;
        margin-left: 0;
      }
      &.agreement {
        padding-left: 106px;
        margin-left: 0;
      }
      &.finish {
        padding-left: 93px;
        margin-left: 0;
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
        &.activeSubs {
          color: white !important;
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
        bottom: 235px;
        left: 310px;
      }
      .calendar1,
      .calendar2 {
        position: absolute;
        width: 24px;
        height: 24px;
      }
      .calendar1 {
        top: 136px;
        right: 142px;
      }
      .calendar2 {
        bottom: 130px;
        left: 301px;
      }

      .rightSide {
        position: relative;
        .radio_group {
          position: absolute;
          bottom: 124px;
          left: -20px;
          .gender {
            width: 71.12px;
            height: 18.09px;
          }
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
