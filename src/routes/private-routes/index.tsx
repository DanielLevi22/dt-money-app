import { Home } from "@/screens/home";
import { createStackNavigator } from "@react-navigation/stack";

export type PrivateStackParamsList = {
  home: undefined;
};

export const PrivateRoutes = () => {
  const PrivateStack = createStackNavigator<PrivateStackParamsList>();
  return (
    <PrivateStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <PrivateStack.Screen name="home" component={Home} />
    </PrivateStack.Navigator>
  );
};
