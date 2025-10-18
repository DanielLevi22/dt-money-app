import type { IUSer } from "../user-interface";

export interface IAuthenticateResponse {
  user: IUSer;
  token: string;
}
