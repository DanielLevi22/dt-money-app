import { DismissKeyboardView } from "@/components/dismiss-keyboard-view";
import type { PublicStackParamsList } from "@/routes/public-routes";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
export const Login = () => {
  const navigation =
    useNavigation<StackNavigationProp<PublicStackParamsList>>();
  return (
    <View className="flex-1 items-center justify-center">
      <DismissKeyboardView />
    </View>
  );
};
