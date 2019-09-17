import styled from "styled-components";

import { device } from "../../utils/styles";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #25064c;
`;

export const BoxLogin = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-15%);

  @media ${device.mobileL} {
    width: 300px;
  }

  @media ${device.mobileM} {
    width: 300px;
  }

  @media ${device.mobileS} {
    width: 224px;
    height: 320px;
    transform: translateY(0);
  }
`;

export const LoginCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #7b52ab, #25064c);
  border-radius: 3px;
  flex: 1;
  width: 100%;

  & h1 {
    margin: 0 0 1.2rem 0;
    padding: 0;
    color: #fff;
    font-size: 2.6rem;
    font-weight: 400;
    line-height: 1.1;
    text-align: center;
    text-shadow: -0.1rem 0.1rem 0.2rem #4527a0;
    text-transform: uppercase;
  }

  & a {
    color: #fff;
    font-weight: 500;
    text-shadow: -0.1rem 0.1rem 0.2rem #4527a0;
  }

  & form {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
  }

  & * {
    margin: 5px;
  }

  & input {
    padding: 0.1rem 0.2rem;
    color: inherit;
    font-family: inherit;
    font-size: 1rem;
    font-weight: inherit;
    border: none;
    border-radius: 3px;
    margin: 5px 10px;
    -webkit-transition: box-shadow 300ms;
    -webkit-transition: box-shadow 300ms;
    transition: box-shadow 300ms;

    &::placeholder {
      color: #b0bec5;
    }

    &:focus {
      outline: none;
      box-shadow: 0.2rem 0.8rem 1.6rem #5e35b1;
    }
  }
`;

export const ButtonLogin = styled.button`
  align-self: center;
  -moz-box-shadow: 0px 4px 12px -6px #9768d1;
  -webkit-box-shadow: 0px 4px 12px -6px #9768d1;
  box-shadow: 0px 4px 12px -6px #9768d1;
  width: 50%;
  background-color: #36175e;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 13px;
  font-weight: bold;
  padding: 5px 16px;
  -webkit-text-decoration: none;
  text-decoration: none;
  text-shadow: 0px 1px 0px #9768d1;

  &:hover {
    background-color: #5f4099;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
