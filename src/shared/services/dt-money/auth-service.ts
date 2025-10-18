import type { FormLoginParams } from "@/screens/login/login-form";
import type { FormRegisterParams } from "@/screens/register/register-form";
import { dtMoneyApi } from "@/shared/api/dt-money";
import type { IAuthenticateResponse } from "@/shared/interfaces/https/authenticate-response";

export const authenticate = async (
  userData: FormLoginParams
): Promise<IAuthenticateResponse> => {
  const { data } = await dtMoneyApi.post<IAuthenticateResponse>(
    "/auth/login",
    userData
  );

  return data;
};

export const registerUser = async (userData: FormRegisterParams) => {
  const { data } = await dtMoneyApi.post<IAuthenticateResponse>(
    "/auth/register",
    userData
  );

  return data;
};
