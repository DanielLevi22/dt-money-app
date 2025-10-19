import { Image, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/shared/colors";
import { useAuthContext } from "@/context/auth-context";
import { useBottomSheetContext } from "@/context/bottom-sheet-context";
export const AppHeader = () => {
  const { handleLogout } = useAuthContext();
  const { openBottomSheet } = useBottomSheetContext();
  return (
    <View className="w-full flex-row p-8 justify-between">
      <View>
        <Image
          source={require("../../assets/Logo.png")}
          style={{ width: 130, height: 30 }}
        />
        <TouchableOpacity
          className="flex-row items-center  gap-2 mt-2"
          onPress={handleLogout}
        >
          <MaterialIcons name="logout" color={colors.gray["700"]} size={15} />
          <Text className="text-gray-700 text-base">Sair da conta</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        className=" bg-accent-brand w-[130px] items-center justify-center rounded-xl"
        onPress={() => openBottomSheet(<Text>forms</Text>, 0)}
      >
        <Text className="text-white font-bold text-sm">Nova transação</Text>
      </TouchableOpacity>
    </View>
  );
};
