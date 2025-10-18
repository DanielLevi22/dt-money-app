import { AuthContextProvider } from "@/context/auth-context";
import "./src/global.css";
import { NavigationRoutes } from "@/routes/index";

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationRoutes />
    </AuthContextProvider>
  );
}
