import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormPhonebook = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  :not(:first-of-type) {
    margin-top: 20px;
  }
  svg {
    position: absolute;
    left: 8px;
  }
`;
export const Input = styled(Field)`
  width: 100%;
  padding: 5px 5px 5px 40px;
  font-size: 16px;
  outline: none;
`;
export const ErrorMsg = styled.div`
  font-size: 12px;
  color: orangered;
`;
export const BtnSubmit = styled.button`
  margin-top: 20px;
`;
