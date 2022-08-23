import styled from "styled-components";

export const Container = styled.div`
  padding: 0 80px;
  position: absolute;
  width: 1440px;
  height: 101px;
  left: 0px;
  top: 0px;
  background: #0f52ba;
`;

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

export const LogoTitle = styled.h1``;

export const LogoSubTitle = styled.p`
  font-size: 15px;
  line-height: 19px;
  mix-blend-mode: normal;
  font-style: normal;
  font-weight: 300;
`;

export const Button = styled.button`
  width: 90px;
  height: 45px;
  top: 29px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: #000000;
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  svg {
    width: 19px;
    height: 18px;
    color: #000000;
  }
`;
