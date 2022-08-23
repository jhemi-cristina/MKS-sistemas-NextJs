import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  /* width: 218px;
  height: 285px;
  background-color: #ffff;
  display: flex;
  align-items: flex-end; */
  border-radius: 9px;
  /* border: 2px solid; */
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  max-width: 222px;
  min-height: 279px;
  align-items: flex-end;
  padding-top: 40px;
`;

export const Products = styled.div`
  /* display: block; */
  padding: 15px;
`;

export const ImageProduct = styled(Image)``;

export const ProductTitle = styled.h4`
  color: #2c2c2c;
  font-size: 18px;
  font-weight: 400;
  line-height: 19px;
  min-height: 60px;
  width: 200px;
  text-overflow: ellipsis;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Value = styled.span`
  width: 102px;
  height: 26px;
  font-size: 15px;
  background: #373737;
  border-radius: 5px;
  color: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.p`
  color: #2c2c2c;
  font-size: 12px;
  margin-top: 10px;
  min-height: 85px;
  border: solid 1px #000;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #0f52ba;
  width: 223px;
  height: 33px;
  border-radius: 0px 0px 7px 7px;
  border: none;
  color: #ffffff;
  svg {
    opacity: 0.74;
    width: 17px;
    height: 17px;
  }
`;
