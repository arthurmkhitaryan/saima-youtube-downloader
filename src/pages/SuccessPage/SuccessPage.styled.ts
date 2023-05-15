import styled from "styled-components";

export const SuccessPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  flex-direction: column;
`;

export const SuccessContent = styled.div`
    max-width: 485px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const SuccessTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  margin: 0;
  padding: 0;
  color: #43434F;
  margin: 17px 0 12px;
`;

export const SuccessMessage = styled.h4`
  color: #8D8D8D;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  margin-bottom: 38px;
`;

export const SuccessButton = styled.button`
  max-width: 400px;
  width: 100%;
  background-color: #7879F1;
  border-radius: 157px;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  border: none;
  padding: 15px 0;
  cursor: pointer;

  :hover {
    background-color: #5b5bc2;
    transition: 0.3s;
  }
`;