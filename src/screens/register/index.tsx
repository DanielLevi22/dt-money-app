import { DismissKeyboardView } from "@/components/dismiss-keyboard-view";
import { Text, View } from "react-native";
import { RegisterForm } from "./register-form";
import { AuthHeader } from "@/components/auth-header";

export const Register = () => {
  return (
    <DismissKeyboardView>
      <View className="flex-1 w-[82%] self-center">
        <AuthHeader />
        <RegisterForm />
      </View>
    </DismissKeyboardView>
  );
};
