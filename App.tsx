import { AuthContextProvider } from "@/context/auth-context";
import "./src/global.css";
import { NavigationRoutes } from "@/routes/index";
import { SnackBarContextProvider } from "@/context/snackbar-context";
import { Snackbar } from "@/components/snackbar";
import { BottomSheetProvider } from "@/context/bottom-sheet-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <AuthContextProvider>
        <SnackBarContextProvider>
          <BottomSheetProvider>
            <NavigationRoutes />
          </BottomSheetProvider>
          <Snackbar />
        </SnackBarContextProvider>
      </AuthContextProvider>
    </GestureHandlerRootView>
  );
}
