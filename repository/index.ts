import type { $Fetch } from "nitropack";
import Auth from "./modules/auth";
import User from "./modules/user";
import Event from "./modules/event";
import Payment from "./modules/payment";
import Bank from "./modules/bank";

export const apiModules = (fetcher: $Fetch) => {
  const AuthModule = new Auth(fetcher);
  const UserModule = new User(fetcher);
  const EventModule = new Event(fetcher);
  const PaymentModule = new Payment(fetcher);
  const BankModule = new Bank(fetcher);
  return {
    auth: AuthModule,
    user: UserModule,
    event: EventModule,
    payment: PaymentModule,
    bank: BankModule,
  };
};
