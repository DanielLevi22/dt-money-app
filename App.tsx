import { AuthContextProvider } from "@/context/auth-context";
import "./src/global.css";
import { NavigationRoutes } from "@/routes/index";
import { SnackBarContextProvider } from "@/context/snackbar-context";
import { Snackbar } from "@/components/snackbar";

export default function App() {
  return (
    <AuthContextProvider>
      <SnackBarContextProvider>
        <NavigationRoutes />
        <Snackbar />
      </SnackBarContextProvider>
    </AuthContextProvider>
  );
}
