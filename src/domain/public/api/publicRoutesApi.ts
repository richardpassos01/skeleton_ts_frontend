import api from "@api";
import ENDPOINTS from "./endpoints";
import { Authentication } from "@domain/public/interfaces/Authentication";

export const createUser = async (
  name: string,
  email: string,
  password: string
): Promise<void> => {
  await api.post<Authentication>(ENDPOINTS.CREATE_USER, {
    name,
    email,
    password,
  });
};

export const authenticateUser = async (
  email: string,
  password: string
): Promise<Authentication | void> => {
  const { data } = await api.post<Authentication>(ENDPOINTS.AUTHENTICATE_USER, {
    email,
    password,
  });

  return data;
};

const publicRoutesApi = {
  createUser,
  authenticateUser,
};

export default publicRoutesApi;
