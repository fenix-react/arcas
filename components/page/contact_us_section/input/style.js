import styled from '@emotion/styled';

export const Style = styled.div`
  position: relative;
  input {
    border: none;
    background-color: #e9e9e9;
    border-radius: 6px;
    height: 44px;
    width: 307px;
    color: #404040;
    font-size: 14px;
    font-weight: 500;
    padding-left: 20px;
    margin-bottom: 30px;
    &::placeholder {
      color: #acacac;
      text-align: center;
    }
    &:focus {
      outline: 1px solid #d2d2d2;
      background-color: #f9f9f9;
    }
    &:focus-visible {
      outline: 1px solid #d2d2d2;
      background-color: #f9f9f9;
    }
  }
  .no-outline {
    background-color: #f9f9f9;
  }
  .no-outline:focus {
    outline: none;
  }
  .no-outline:focus-visible {
    outline: none;
  }
  .label {
    position: absolute;
    left: 2px;
    top: -14px;
    margin: 0;
    color: #808080;
    font-size: 14px;
    font-weight: 500;
  }
`;
