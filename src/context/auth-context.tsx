import type { FormLoginParams } from "@/screens/login/login-form";
import type { FormRegisterParams } from "@/screens/register/register-form";
import {
  createContext,
  useContext,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";
import * as authService from "@/shared/services/dt-money/auth-service";
import type { IUSer } from "@/shared/interfaces/user-interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { IAuthenticateResponse } from "@/shared/interfaces/https/authenticate-response";

type AuthContextType = {
  user: IUSer | null;
  token: string | null;
  handleAuthenticate: (params: FormLoginParams) => Promise<void>;
  handleRegister: (params: FormRegisterParams) => Promise<void>;
  handleLogout: () => void;
  restoreUserSession: () => Promise<string | null>;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IUSer | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const handleAuthenticate = async ({ email, password }: FormLoginParams) => {
    const { user, token } = await authService.authenticate({ email, password });

    await AsyncStorage.setItem(
      "dt-money-user",
      JSON.stringify({ user, token })
    );
    setUser(user);
    setToken(token);
  };

  const handleRegister = async ({
    confirmPassword,
    email,
    name,
    password,
  }: FormRegisterParams) => {
    const { token, user } = await authService.registerUser({
      confirmPassword,
      email,
      name,
      password,
    });
    await AsyncStorage.setItem(
      "dt-money-user",
      JSON.stringify({ user, token })
    );

    setUser(user);
    setToken(token);
  };

  const handleLogout = async () => {
    await AsyncStorage.clear();
    setUser(null);
    setToken(null);
  };

  const restoreUserSession = async () => {
    const userData = await AsyncStorage.getItem("dt-money-user");

    if (userData) {
      const { token, user } = JSON.parse(userData) as IAuthenticateResponse;
      setUser(user);
      setToken(token);
    }

    return userData;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        handleAuthenticate,
        handleLogout,
        handleRegister,
        restoreUserSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};
