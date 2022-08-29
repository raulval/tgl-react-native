import { NumberButton, NumberButtonText } from "./styles";

interface BetNumbersProps {
  range: number;
  selectedNumbers: number[];
  onPress: (selectedNumber: number) => void;
}

const BetNumbers = (props: BetNumbersProps) => {
  const numbers = Array.from(Array(props.range).keys());

  return (
    <>
      {numbers.map((number) => {
        const isActive = props.selectedNumbers.includes(number + 1)
          ? true
          : false;

        return (
          <NumberButton
            key={number}
            onPress={() => props.onPress(number + 1)}
            active={isActive}
          >
            <NumberButtonText>{number + 1}</NumberButtonText>
          </NumberButton>
        );
      })}
    </>
  );
};

export default BetNumbers;
