import styled from "styled-components";

const HeaderWrapper = styled.div`
  box-shadow: 0 0 30px 0 rgba(112, 151, 229, 1) !important;
  header {
    background-color: #243047;
    height: 100px;
    width: 100%;
    padding: 0 290px;

    .pointer {
      width: 124px;
      height: 39px;
      object-fit: contain;
    }
    .iconButton,
    .emailButton {
      width: 48px;
      height: 48px;
      object-fit: contain;
      margin-right: 30px;
    }
    .bell {
      width: 32px;
      height: 37.5px;
      margin-right: 30px;
    }
    .circleUser {
      position: relative;
      margin: 25px 0;

      .circle {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      .litteUser {
        width: 24px;
        height: 25px;
        position: absolute;
        top: 40px;
        left: 13px;
      }
      .name {
        font-size: 18px;
        font-weight: 600;
        font-style: normal;
        line-height: 22px;
        color: #79d9ee;
        margin: 28px 0;
      }
    }
  }
`;
export default HeaderWrapper;
