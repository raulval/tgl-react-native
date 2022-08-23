import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import Form from "../../components/Form";
import Slogan from "../../components/Slogan";
import user from "../../services/user";
import { IBodyAuth, Nav } from "../../shared/interfaces";
import { SignUpContainer } from "./styles";

const SignUp = () => {
  const { navigate } = useNavigation<Nav>();
  const { signup } = user();

  const handleSubmit = async ({ name, email, password }: IBodyAuth) => {};

  const onPressBack = () => {
    navigate("Login");
  };

  return (
    <ScrollView>
      <SignUpContainer>
        <Slogan />
        <Form signup onSubmit={handleSubmit} onPressBack={onPressBack} />
      </SignUpContainer>
    </ScrollView>
  );
};

export default SignUp;
