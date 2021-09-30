import styled from "styled-components";

const LeftSideWrapper = styled.div`
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
`;
export default LeftSideWrapper;
