import styled from '@emotion/styled';

export const Title = styled.h2`
  font-weight: initial;
  margin-top: 30px;
  margin-bottom: 20px;
`;
export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 8px;
  color: #565656;
  transition: color, 250ms linear;
  :hover {
    color: #000;
  }
`;

export const TrashBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #b1b1b1;
  margin-left: auto;
`;
export const ContactParagraph = styled.p`
  flex: 1;
`;
