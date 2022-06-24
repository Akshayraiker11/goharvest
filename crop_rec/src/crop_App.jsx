import styled from "styled-components";
import Button from "./components/crop_button";
import Input from "./components/crop_input";


function App() {

  return (
    <MainContainer>
      <WelcomeText>crop recommendation</WelcomeText>
      <InputContainer>
        <Input type="number" placeholder="Nitrogen" />
        <Input type="number" placeholder="Phosphorous" />
        <Input type="number" placeholder="Potassium" />
        <Input type="number" placeholder="pH level" />
        <Input type="number" placeholder="Rainfall (in mm)" />
        <Input type="text" placeholder="State" />
        <Input type="text" placeholder="city" />
      </InputContainer>
      <ButtonContainer>
        <Button content="Predict" />
      </ButtonContainer>
      
      
     
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(10.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 50vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  wrap content:
  margin: 20rem 0 2rem 0;
  align-items: center;
  width: 100%;
  height: 80px;
  
`;

const ButtonContainer = styled.div`
  margin: 24rem 0 2rem 0;
  width: 50%;
  display: flex;
  align-items: baseline;
  justify-content: center;
`;









export default App;
