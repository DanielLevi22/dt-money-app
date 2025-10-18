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

type AuthContextType = {
  user: IUSer | null;
  token: string | null;
  handleAuthenticate: (params: FormLoginParams) => Promise<void>;
  handleRegister: (params: FormRegisterParams) => Promise<void>;
  handleLogout: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IUSer | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const handleAuthenticate = async ({ email, password }: FormLoginParams) => {
    const { user, token } = await authService.authenticate({ email, password });
    setUser(user);
    setToken(token);
  };

  const handleRegister = async ({
    confirmPassword,
    email,
    name,
    password,
  }: FormRegisterParams) => {};

  const handleLogout = async () => {};

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        handleAuthenticate,
        handleLogout,
        handleRegister,
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
