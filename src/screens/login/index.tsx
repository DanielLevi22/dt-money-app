import { DismissKeyboardView } from "@/components/dismiss-keyboard-view";
import { View } from "react-native";
import { LoginForm } from "./login-form";
export const Login = () => {
  return (
    <View className="flex-1 w-full self-center">
      <DismissKeyboardView>
        <LoginForm />
      </DismissKeyboardView>
    </View>
  );
};
