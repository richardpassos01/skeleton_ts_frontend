import api from "@api";
import ENDPOINTS from "./endpoints";
import { Authentication } from "@domain/public/interfaces/Authentication";
import { User } from "@domain/public/interfaces/User";

export const createUser = async (
  name: string,
  email: string,
  password: string
): Promise<void> => {
  await api.post<User>(ENDPOINTS.CREATE_USER, {
    name,
    email,
    password,
  });
};

export const updateUserPassword = async (
  email: string,
  password: string
): Promise<void> => {
  await api.patch<User>(ENDPOINTS.UPDATE_USER_PASSWORD, {
    email,
    password,
  });
};

export const authenticateUser = async (
  email: string,
  password: string
): Promise<Authentication> => {
  const { data } = await api.post<Authentication>(ENDPOINTS.AUTHENTICATE_USER, {
    email,
    password,
  });

  return data;
};
