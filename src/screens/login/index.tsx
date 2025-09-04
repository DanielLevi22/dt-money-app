import { DismissKeyboardView } from "@/components/dismiss-keyboard-view";
import { View } from "react-native";
import { LoginForm } from "./login-form";
import { AuthHeader } from "@/components/auth-header";
export const Login = () => {
  return (
    <DismissKeyboardView>
      <View className="flex-1 w-[82%] self-center">
        <AuthHeader />
        <LoginForm />
      </View>
    </DismissKeyboardView>
  );
};
