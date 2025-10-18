import type { FormLoginParams } from "@/screens/login/login-form";
import { dtMoneyApi } from "@/shared/api/dt-money";
import type { IAuthenticateResponse } from "@/shared/intefaces/https/authenticate-response";

export const authenticate = async (
  userData: FormLoginParams
): Promise<IAuthenticateResponse> => {
  const { data } = await dtMoneyApi.post<IAuthenticateResponse>(
    "/auth/login",
    userData
  );

  return data;
};
