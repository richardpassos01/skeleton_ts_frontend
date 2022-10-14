import { QueryCache } from "react-query";
import { Authentication } from "@domain/public/interfaces/Authentication";
import publicRoutesApi from "../api/publicRoutesApi";
import { User } from "../interfaces/User";

const useAuthentication = () => {
  const login = async ({ email, password }: User): Promise<Authentication | void> => {
    try {
      const authentication = await publicRoutesApi.authenticateUser(email, password);

      if (authentication) {
        localStorage.setItem("authentication", JSON.stringify(authentication));
      }

      return authentication;
    } catch (err) {
      alert("Unexpected Error");
    }
  };

  const signUp = async ({ name, email, password }: User): Promise<void> => {
    if (!name) {
      return;
    }
    
    return publicRoutesApi.createUser(name, email, password);
  };

  const logout = () => {
    const queryCache = new QueryCache();
    localStorage.removeItem("authentication");
    queryCache.clear();
  };

  const getAccessToken = () => {
    try {
      const authentication = localStorage.getItem("authentication");

      if (authentication) {
        return JSON.parse(authentication).token;
      }
    } catch {
      return null;
    }
  };

  return {
    login,
    logout,
    signUp,
    getAccessToken,
  };
};

export default useAuthentication;
