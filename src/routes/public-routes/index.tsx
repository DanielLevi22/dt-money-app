import { Login } from "@/screens/login";
import { Register } from "@/screens/register";
import { createStackNavigator } from "@react-navigation/stack";

export type PublicStackParamsList = {
  login: undefined;
  register: undefined;
};

export const PublicRoutes = () => {
  const PublicStack = createStackNavigator<PublicStackParamsList>();
  return (
    <PublicStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <PublicStack.Screen name="login" component={Login} />
      <PublicStack.Screen name="register" component={Register} />
    </PublicStack.Navigator>
  );
};
