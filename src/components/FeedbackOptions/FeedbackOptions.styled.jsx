import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: inline-flex;
  margin-bottom: 30px;
`;

export const FeedbackItem = styled.li`
  margin-right: 10px;
`;

export const Button = styled.button`
  box-shadow: 0px 0px 0px 2px #9fb4f2;
  background: linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);
  background-color: #7892c2;
  border-radius: 10px;
  border: 1px solid #4e6096;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 19px;
  padding: 12px 37px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #283966;

  :hover {
    background: linear-gradient(to bottom, #476e9e 5%, #7892c2 100%);
    background-color: #476e9e;
  }
`;
