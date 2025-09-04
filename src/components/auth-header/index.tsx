import { useKeyBoardVisible } from "@/shared/hooks/use-keyboard-visible";
import { Image, View } from "react-native";

export const AuthHeader = () => {
  const keyboardVisible = useKeyBoardVisible();

  if (keyboardVisible) return <></>;
  return (
    <View className="items-center justify-center w-full min-h-40">
      <Image
        src={require("../../assets/Logo.png")}
        className=" h-[48px] w-[255px]"
      />
    </View>
  );
};
