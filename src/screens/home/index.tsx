import { useAuthContext } from "@/context/auth-context";
import type { PrivateStackParamsList } from "@/routes/private-routes";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { Text, TouchableOpacity, View } from "react-native";
export const Home = () => {
  const navigation =
    useNavigation<StackNavigationProp<PrivateStackParamsList>>();

  const { handleLogout } = useAuthContext();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-black text-3xl items-center justify-center ">
        home
      </Text>

      <TouchableOpacity onPress={handleLogout}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};
