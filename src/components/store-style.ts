import { styled, createGlobalStyle } from "styled-components";

export const Body = createGlobalStyle`
  body, #root {
    margin: auto;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    box-sizing: border-box;
    height: 100vh;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 100px;
  background-color: #7286f3;
  color: black;
  font-size: 24px;
  font-weight: 600;
  position: fixed;
  top: 0;
  left: 0;
`;

export const SubHeader = styled.div``;
export const SubText = styled.div``;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-top: 100px;
  box-sizing: border-box;
  padding: 30px;
`;

export const Panel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  gap: 30px;
  align-items: stretch;
`;

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 640px;
  box-sizing: border-box;
  height: 663px;
`;

export const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  width: 600px;
  box-sizing: border-box;
  overflow-y: auto;
  border: 4px solid black;
  overflow-x: hidden;
`;

export const Toolbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
  width: 595px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 44px;
  background-color: #06ba79;
  color: black;
  cursor: pointer;
`;

export const SearchProducts = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 44px;
  border-radius: 30px;
  padding: 0 10px;
`;

export const SortBy = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 44px;
  border-radius: 10px;
  padding: 0 10px;
`;

export const Option = styled.option``;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 90%;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-bottom: 20px;
  border: 4px solid black;
  background: #fff;
  cursor: pointer;
`;

export const ProductImage = styled.img`
  width: 100px;
  margin-right: 10px;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.div`
  font-weight: bold;
`;

export const ProductListContainer = styled.div`
  gap: 100px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-left: 300px;
  position: absolute;
  bottom: 340px;
`;

export const NavigationButton = styled.button`
  background-color: transparent;
`;

export const PageInfo = styled.div`
  padding: 5px;
`;

export const ProductImageSelected = styled.img`
  width: 100px;
  margin-top: 10px;
`;

export const ProductNameSelected = styled.h2`
  margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
  margin-bottom: 10px;
`;

export const ProductPrice = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
`;

export const ProductCreationDate = styled.p`
  margin-top: 10px;
`;

export const DeleteButton = styled.button`
  margin-left: auto;
  margin-top: auto;
  background-color: #ff8c00;
`;
