import { useAuthContext } from "@/context/auth-context";
import { colors } from "@/shared/colors";
import { useEffect, type FC } from "react";
import { ActivityIndicator, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface LoadingProps {
  setLoading: (value: boolean) => void;
}

export const Loading: FC<LoadingProps> = ({ setLoading }) => {
  const { restoreUserSession, handleLogout } = useAuthContext();

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const user = await restoreUserSession();

        if (!user) {
          await handleLogout();
        }
      } catch (error) {
        await handleLogout();
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  return (
    <SafeAreaView className="bg-background-primary items-center justify-center flex-1">
      <>
        <Image
          source={require("../../assets/Logo.png")}
          style={{ width: 255, height: 48 }}
        />
        <ActivityIndicator color={colors.white} className="mt-20" />
      </>
    </SafeAreaView>
  );
};
