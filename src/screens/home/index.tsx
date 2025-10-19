import { AppHeader } from "@/components/ app-header";
import { useAuthContext } from "@/context/auth-context";
import type { PrivateStackParamsList } from "@/routes/private-routes";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export const Home = () => {
  const navigation =
    useNavigation<StackNavigationProp<PrivateStackParamsList>>();

  const { handleLogout } = useAuthContext();
  return (
    <SafeAreaView className="flex-1 bg-background-primary">
      <AppHeader />
      <Text className="text-black text-3xl items-center justify-center ">
        home
      </Text>

      <TouchableOpacity onPress={handleLogout}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
