import { NavigationContainer } from "@react-navigation/native";
import { PublicRoutes } from "./public-routes";
import { useCallback, useState } from "react";
import { PrivateRoutes } from "./private-routes";
import { SystemBars } from "react-native-edge-to-edge";
import { useAuthContext } from "@/context/auth-context";

export const NavigationRoutes = () => {
  const { user, token } = useAuthContext();

  const Routes = useCallback(() => {
    if (!user || !token) {
      return <PublicRoutes />;
    } else {
      return <PrivateRoutes />;
    }
  }, [user, token]);

  return (
    <NavigationContainer>
      <SystemBars style="light" />
      <Routes />
    </NavigationContainer>
  );
};
