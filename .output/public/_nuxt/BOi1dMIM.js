import { _ as R } from "./Bmu_YX42.js";
import { _ as w, F as S } from "./CQnnwGri.js";
import {
  h as b,
  f as k,
  r as C,
  k as B,
  o as f,
  c as N,
  b as n,
  a as l,
  w as _,
  m as e,
  s as x,
  p as E,
  _ as P,
  n as F,
  L as $,
  q,
  t as I,
} from "./ZzYuc5FK.js";
import { R as T } from "./gIOIMY9f.js";
import { u as V } from "./JJAh6i0j.js";
import "./C_uAVEpq.js";
import "./-_7v7zer.js";
const z = { class: "container pt-8" },
  A = { class: "max-w-[90%] mx-auto w-[400px]" },
  H = b({
    __name: "reset-password",
    setup(D) {
      var d, c;
      const {
          $repo: { auth: g },
        } = k(),
        a = C(!1),
        t = B(),
        m = (d = t == null ? void 0 : t.query) == null ? void 0 : d.token,
        h = decodeURIComponent(
          (c = t == null ? void 0 : t.query) == null ? void 0 : c.email
        ),
        y = async ({ password: p, password_confirmation: o }) => {
          var r, u;
          try {
            const s = {
              password: p,
              password_confirmation: o,
              token: m,
              email: h,
            };
            a.value = !0;
            const i = await g.resetPassword(s),
              v = i == null ? void 0 : i.message;
            x({ title: "Success", description: v, variant: "normal" }),
              E().push("/login"),
              (a.value = !1);
          } catch (s) {
            (a.value = !1),
              x({
                title: "Failed",
                description:
                  ((r = s == null ? void 0 : s.data) == null
                    ? void 0
                    : r.message) ?? "Failed to send reset link",
                variant: "warning",
              }),
              console.error(
                "ERROR RESETTING PASSWORD",
                (u = s == null ? void 0 : s.data) == null ? void 0 : u.message
              );
          }
        };
      return (
        V({ title: "Input New Password" }),
        (p, o) => {
          const r = R;
          return (
            f(),
            N("div", z, [
              n(r, { to: "/login" }),
              o[0] ||
                (o[0] = l(
                  "div",
                  {
                    class:
                      "text-4xl lg:text-5xl font-semibold my-4 text-center max-w-[595px] mx-auto",
                  },
                  " Change password ",
                  -1
                )),
              o[1] ||
                (o[1] = l(
                  "div",
                  { class: "text-muted-foreground text-center mb-6" },
                  " Create a new password ",
                  -1
                )),
              l("div", A, [
                n(
                  e(S),
                  {
                    "validation-schema": e(T),
                    onSubmit: y,
                    class: "space-y-8",
                  },
                  {
                    default: _(() => [
                      n(w, {
                        type: "password",
                        name: "password",
                        placeholder: "Enter your new password",
                        label: "Set new password",
                      }),
                      n(w, {
                        type: "password",
                        name: "password_confirmation",
                        placeholder: "Confirm password",
                        label: "Confirm password",
                      }),
                      n(
                        P,
                        {
                          class: "w-full flex mt-6",
                          size: "lg",
                          disabled: e(a) || !e(m),
                        },
                        {
                          default: _(() => [
                            e(a)
                              ? (f(),
                                F(e($), {
                                  key: 0,
                                  class: "size-4 animate-spin mr-2",
                                }))
                              : q("", !0),
                            l(
                              "span",
                              null,
                              I(e(a) ? "Please wait" : "Reset password"),
                              1
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["disabled"]
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["validation-schema"]
                ),
              ]),
            ])
          );
        }
      );
    },
  });
export { H as default };
