import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/shared/colors";
import type { FC, PropsWithChildren } from "react";

export const ErroMessage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View className="flex-row items-center mt-1">
      <MaterialIcons
        name="error-outline"
        size={16}
        color={colors["accent-brand-background-primary"]}
        className="mr-11"
      />
      <Text className="text-accent-red-background-primary">{children}</Text>
    </View>
  );
};
