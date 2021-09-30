import React from "react";
import styled from "styled-components";

const InputsWrapper = styled.div`
  /* imgs css */
  .left {
    margin-left: 40px;
  }
  .right {
    margin-left: 29px;
  }
  /* inputs css */
  input {
    width: 301px;
    height: 50px;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: transparent;
    outline: none;
    color: white;
    padding-left: 16px !important;

    &::placeholder {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px !important;
      color: rgba(248, 248, 248, 0.15);
      &.placeholderActive {
        color: white;
      }
    }
    &.active {
      border: 1px solid #64a3b0;
    }
  }
  .leftInput {
    margin: 5px 0 20px 40px;
  }
  .rightInput {
    margin: 5px 0 20px 29px;
  }
  .passport_I {
    width: 100px;
  }
  .number_I {
    width: 181px;
    margin: 0;
    margin-top: 6px;
    margin-left: -23.5px;
  }
  .address_I {
    width: 387px;
  }
`;

export { InputsWrapper };

const Inputs = ({ img, placeholder, inputClass, imgClass, width }) => {
  return (
    <InputsWrapper>
      <div className="d-flex flex-column">
        {img ? (
          <img
            className={imgClass}
            src={img}
            alt="photo"
            style={{ width: `${width}`, height: "22px" }}
          />
        ) : (
          ""
        )}
        <input className={inputClass} placeholder={placeholder} type="text" />
      </div>
    </InputsWrapper>
  );
};

export default Inputs;
