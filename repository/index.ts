import type { $Fetch } from "nitropack";
import Auth from "./modules/auth";
import User from "./modules/user";
import Event from "./modules/event";

export const apiModules = (fetcher: $Fetch) => {
  const AuthModule = new Auth(fetcher);
  const UserModule = new User(fetcher);
  const EventModule = new Event(fetcher);
  return {
    auth: AuthModule,
    user: UserModule,
    event: EventModule,
  };
};
