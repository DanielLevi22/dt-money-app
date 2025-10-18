import type { FormLoginParams } from "@/screens/login/login-form";
import type { FormRegisterParams } from "@/screens/register/register-form";
import {
  createContext,
  useContext,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";

type AuthContext = {
  user: null;
  token: string | null;
  handleAuthenticate: (params: FormLoginParams) => Promise<void>;
  handleRegister: (params: FormRegisterParams) => Promise<void>;
  handleLogout: () => void;
};
export const AuthContext = createContext<AuthContext>({} as AuthContext);
const [user, setUser] = useState(null);
const [token, setToken] = useState<string | null>(null);

const handleAuthenticate = async ({ email, password }: FormLoginParams) => {};

const handleRegister = async ({
  confirmPassword,
  email,
  name,
  password,
}: FormRegisterParams) => {};
const handleLogout = async () => {};

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
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
