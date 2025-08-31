import type { PrivateStackParamsList } from "@/routes/private-routes";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { Text, View } from "react-native";
export const Home = () => {
  const navigation =
    useNavigation<StackNavigationProp<PrivateStackParamsList>>();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-black text-3xl items-center justify-center ">
        home
      </Text>
    </View>
  );
};
