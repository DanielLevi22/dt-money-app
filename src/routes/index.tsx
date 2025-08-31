import { NavigationContainer } from "@react-navigation/native";
import { PublicRoutes } from "./public-routes";
import { useCallback, useState } from "react";
import { PrivateRoutes } from "./private-routes";

export const NavigationRoutes = () => {
  const [user, setUser] = useState(undefined);

  const Routes = useCallback(() => {
    if (!user) {
      return <PublicRoutes />;
    } else {
      return <PrivateRoutes />;
    }
  }, [user]);

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};
