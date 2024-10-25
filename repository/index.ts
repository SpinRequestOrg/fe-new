import type { $Fetch } from "nitropack";
import Auth from "./modules/auth";
import User from "./modules/user";
import Event from "./modules/event";
import Payment from "./modules/payment";

export const apiModules = (fetcher: $Fetch) => {
  const AuthModule = new Auth(fetcher);
  const UserModule = new User(fetcher);
  const EventModule = new Event(fetcher);
  const PaymentModule = new Payment(fetcher);
  return {
    auth: AuthModule,
    user: UserModule,
    event: EventModule,
    payment: PaymentModule,
  };
};
