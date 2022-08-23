import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: -10px !important;
  min-height: 100vh !important;
  display: flex;
  z-index: 999;
  flex-direction: column;
  justify-content: space-between;

  background: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
`;

export const Product = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: 27px;
  color: #ffffff;
  font-weight: 700;
  top: 36px;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;

  button {
    background: none;
    border: none;
    cursor: pointer;

    svg {
      width: 38px;
      height: 38px;
    }
  }
`;

export const CardConfig = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ImageProd = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const TitleImage = styled.h4``;

export const Qtd = styled.div``;

export const Price = styled.div``;

export const Finalization = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
`;

export const TotalPrice = styled.div`
  font-weight: 700;
  font-size: 28px;
  color: #ffffff;
`;

export const Value = styled.div`
  font-weight: 700;
  font-size: 28px;
  color: #ffffff;
`;

export const Button = styled.div`
  width: 486px;
  height: 97px;

  bottom: 0px;
  background: #000;
  font-weight: 700;
  font-size: 28px;
  color: #ffffff;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
