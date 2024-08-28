import styled from "styled-components";

export const ImageLabel = styled.label`
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100px;
  cursor: pointer;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Errors = styled.div`
  color: red;
  margin-top: 5px;
  margin-left: 40;
`;

export const FormAddProduct = styled.form`
  display: flex;
  margin-left: 20px;
  margin-top: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 500px;
`;

export const InputFields = styled.input`
  border: 2px solid black;
  width: 478px;
  padding: 10px;
  margin-bottom: 5px;
`;

export const TextArea = styled.textarea`
  border: 2px solid black;
  width: 478px;
  padding: 10px;
  margin-bottom: 5px;
  min-height: 100px;
  resize: vertical;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  width: 478px;
`;

export const DigitPrice = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
`;
