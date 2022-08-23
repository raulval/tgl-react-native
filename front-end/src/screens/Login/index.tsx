import { ScrollView } from "react-native";
import { IBodyAuth } from "shared/interfaces";
import Form from "../../components/Form";
import Slogan from "../../components/Slogan";
import { LoginContainer } from "./styles";

const Login = () => {
  const handleSubmit = async ({ email, password }: IBodyAuth) => {
    console.log(email, password);
  };

  return (
    <ScrollView>
      <LoginContainer>
        <Slogan />
        <Form login onSubmit={handleSubmit} />
      </LoginContainer>
    </ScrollView>
  );
};

export default Login;
