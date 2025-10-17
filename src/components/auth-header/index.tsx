import { useKeyBoardVisible } from "@/shared/hooks/use-keyboard-visible";
import { Image, View } from "react-native";

export const AuthHeader = () => {
  const keyboardVisible = useKeyBoardVisible();

  if (keyboardVisible) return <></>;
  return (
    <View className="items-center justify-center w-full min-h-40">
      <Image
        source={require("../../assets/Logo.png")}
        style={{ width: 255, height: 48 }}
      />
    </View>
  );
};
