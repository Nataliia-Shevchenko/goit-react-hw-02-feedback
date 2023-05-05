import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const ButtonElement = styled.button`
  min-width: 80px;
  min-height: 30px;
  background-color: #e49898;
  border-radius: 25px;
  border: none;
  font-weight: 600;
  color: #2e0202;
  &:hover {
    background-color: #ee5151;
  }

`;
