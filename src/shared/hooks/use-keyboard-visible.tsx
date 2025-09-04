import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

export const useKeyBoardVisible = () => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyBoardShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setIsKeyboardVisible(true);
    });

    const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setIsKeyboardVisible(false);
    });

    return () => {
      keyboardHideListener.remove();
      keyBoardShowListener.remove();
    };
  }, []);

  return isKeyboardVisible;
};
