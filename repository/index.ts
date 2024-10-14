import type { $Fetch } from "nitropack";
import Auth from "./modules/auth";

export const apiModules = (fetcher: $Fetch) => {
  const AuthModule = new Auth(fetcher);

  return {
    auth: AuthModule,
  };
};
