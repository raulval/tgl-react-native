import {
  CenterText,
  CenterView,
  FirstTitle,
  SecondTitle,
  SloganContainer,
} from "./styles";

const Slogan = () => {
  return (
    <SloganContainer>
      <FirstTitle>The Greatest App</FirstTitle>
      <CenterView>
        <CenterText>for</CenterText>
      </CenterView>
      <SecondTitle>Lottery</SecondTitle>
    </SloganContainer>
  );
};

export default Slogan;
