import { AuthContextProvider } from "@/context/auth-context";
import "./src/global.css";
import { NavigationRoutes } from "@/routes/index";
import { SnackBarContextProvider } from "@/context/snackbar-context";

export default function App() {
  return (
    <AuthContextProvider>
      <SnackBarContextProvider>
        <NavigationRoutes />
      </SnackBarContextProvider>
    </AuthContextProvider>
  );
}
