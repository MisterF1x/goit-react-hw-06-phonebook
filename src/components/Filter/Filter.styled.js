import styled from '@emotion/styled';
export const FilterGroupBlock = styled.div`
  position: relative;
  display: inline-flex;
`;
export const FilterLabel = styled.label`
  position: relative;
`;
export const FilterSpan = styled.span`
  position: absolute;
  font-size: 12px;
  background-color: #fff;
  left: 8px;
  top: -15px;
  padding: 5px;
`;
export const FilterInput = styled.input`
  font-size: 16px;
  padding: 5px;
  outline: none;
`;
export const FilterBtn = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  color: #666;
`;
