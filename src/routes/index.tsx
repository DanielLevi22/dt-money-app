import { NavigationContainer } from "@react-navigation/native";
import { PublicRoutes } from "./public-routes";
import { useCallback, useState } from "react";
import { PrivateRoutes } from "./private-routes";
import { SystemBars } from "react-native-edge-to-edge";
import { useAuthContext } from "@/context/auth-context";
import { Loading } from "@/screens/loading";

export const NavigationRoutes = () => {
  const [loading, setLoading] = useState(true);
  const { user, token } = useAuthContext();

  console.log(loading);
  const Routes = useCallback(() => {
    if (loading) {
      return <Loading setLoading={setLoading} />;
    }
    if (!user || !token) {
      return <PublicRoutes />;
    } else {
      return <PrivateRoutes />;
    }
  }, [user, token, loading]);

  return (
    <NavigationContainer>
      <SystemBars style="light" />
      <Routes />
    </NavigationContainer>
  );
};
