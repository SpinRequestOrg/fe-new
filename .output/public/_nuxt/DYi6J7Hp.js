import { _ } from "./Bmu_YX42.js";
import { _ as x, F as g } from "./CQnnwGri.js";
import {
  h as v,
  f as w,
  r as h,
  o as r,
  c as b,
  b as n,
  a as s,
  w as m,
  m as o,
  s as d,
  p as y,
  _ as E,
  n as k,
  L as S,
  q as B,
  t as F,
} from "./ZzYuc5FK.js";
import { c as R, a as $ } from "./-_7v7zer.js";
import { u as q } from "./JJAh6i0j.js";
import "./C_uAVEpq.js";
const N = { class: "container pt-8" },
  C = { class: "max-w-[90%] mx-auto w-[400px]" },
  D = {
    class:
      "flex justify-center gap-x-1 items-center mt-2 text-muted-foreground",
  },
  L = ["disabled"],
  T = v({
    __name: "index",
    setup(V) {
      const c = R({
          email: $().required("Email is required").email("Enter a valid email"),
        }),
        {
          $repo: { auth: u },
        } = w(),
        t = h(!1),
        p = async ({ email: l }) => {
          var a, i;
          try {
            t.value = !0;
            const e = await u.requestResetLink(l),
              f = e == null ? void 0 : e.message;
            d({ title: "Success", description: f, variant: "normal" }),
              y().push("/login"),
              (t.value = !1);
          } catch (e) {
            (t.value = !1),
              d({
                title: "Failed",
                description:
                  ((a = e == null ? void 0 : e.data) == null
                    ? void 0
                    : a.message) ?? "Failed to send reset link",
                variant: "warning",
              }),
              console.error(
                "ERROR",
                (i = e == null ? void 0 : e.data) == null ? void 0 : i.message
              );
          }
        };
      return (
        q({ title: "Forget Password" }),
        (l, a) => {
          const i = _;
          return (
            r(),
            b("div", N, [
              n(i, { to: "/login" }),
              a[1] ||
                (a[1] = s(
                  "div",
                  {
                    class:
                      "text-4xl lg:text-5xl font-semibold my-4 text-center max-w-[595px] mx-auto",
                  },
                  " Forgot password? ",
                  -1
                )),
              a[2] ||
                (a[2] = s(
                  "div",
                  { class: "text-muted-foreground text-center mb-6" },
                  " Enter your email and we will send you a reset link ",
                  -1
                )),
              s("div", C, [
                n(
                  o(g),
                  { "validation-schema": o(c), onSubmit: p },
                  {
                    default: m(() => [
                      n(x, {
                        type: "email",
                        name: "email",
                        placeholder: "Enter your email",
                        label: "Email",
                      }),
                      n(
                        E,
                        {
                          class: "w-full flex mt-6",
                          size: "lg",
                          disabled: o(t),
                        },
                        {
                          default: m(() => [
                            o(t)
                              ? (r(),
                                k(o(S), {
                                  key: 0,
                                  class: "size-4 animate-spin mr-2",
                                }))
                              : B("", !0),
                            s(
                              "span",
                              null,
                              F(o(t) ? "Please wait" : "Send link"),
                              1
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["disabled"]
                      ),
                      s("div", D, [
                        a[0] ||
                          (a[0] = s(
                            "span",
                            null,
                            "Didn't receive the mail?",
                            -1
                          )),
                        s(
                          "button",
                          {
                            class: "outline-none underline hover:no-underline",
                            disabled: o(t),
                          },
                          " RESEND ",
                          8,
                          L
                        ),
                      ]),
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
export { T as default };
