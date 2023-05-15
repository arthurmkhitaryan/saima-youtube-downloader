import styled from "styled-components";

//images 
import bg from '../../assets/bg.png';

export const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center right;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: calc(100vw - 90vw);
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const LogoTitle = styled.h4`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`;

export const MainContent = styled.div`
  max-width: 720px;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 4rem;

  span {
    color: #5D5FEF;
  }
`;

export const SubTitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  color: #00000099;
  padding-right: 25px;
  margin-top: 10px;
`;

export const Input = styled.input<{ valid?: boolean }>`
  height: 80px;
  width: 100%;
  box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.2);
  border-radius: 100px;
  padding: 35px 0 35px 41px;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  outline: none;
  border: ${({ valid }) => valid ? "none" : "solid 2px red"};

  ::placeholder {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    color: #0000004D;
  }
`;

export const Button = styled.button<{ navigate?: boolean }>`
  position: absolute;
  right: 0;
  height: 80px;
  background: #5D5FEF;
  border-radius: 100px;
  border: none;
  padding: ${({ navigate }) => navigate ? 0 : '25px 40px'};
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  color: white;
  cursor: pointer;

  :hover {
    background-color: #5b5bc2;
    transition: 0.3s;
  }

  a {
    text-decoration: none;
    font-size: 20px;
    width: 100%;
    height: 100%;
    padding: 25px 40px;
    font-weight: 600;
    line-height: 30px;
    color: white;
  }
`;

export const FormWrapper = styled.div`
  margin: 50px 0;
  position: relative;
`;

export const NotValidLink = styled.h3`
  color: red;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  margin-top: 10px;
  margin-left: 50px;
  padding: 0;
`;