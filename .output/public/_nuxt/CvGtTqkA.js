import { _ as S } from "./C_uAVEpq.js";
import {
  h as w,
  f as E,
  i as k,
  r as $,
  o as c,
  n as g,
  w as l,
  a,
  b as o,
  m as r,
  L as B,
  q as F,
  t as R,
  _ as V,
  s as v,
  p as A,
  c as C,
  v as G,
  d as m,
} from "./ZzYuc5FK.js";
import { _ as h, F as I } from "./CQnnwGri.js";
import { u as O } from "./JJAh6i0j.js";
const P = ["onSubmit"],
  T = w({
    __name: "login-form",
    setup(y) {
      const { $repo: p } = E(),
        { saveAuthUser: e } = k(),
        s = $(!1),
        u = async ({ email: n, password: _ }) => {
          var i, f, x;
          const d = { email: n, password: _ };
          try {
            s.value = !0;
            const t = await p.auth.loginUser(d),
              N = t == null ? void 0 : t.message;
            v({ title: "Success", description: N, variant: "normal" }),
              e(t.data.token, t.data.user),
              (s.value = !1);
            const L =
              ((i = t == null ? void 0 : t.data) == null ? void 0 : i.role) ===
              "host"
                ? "/dashboard"
                : "/search";
            A().push(L);
          } catch (t) {
            (s.value = !1),
              v({
                title: "Failed",
                description:
                  ((f = t == null ? void 0 : t.data) == null
                    ? void 0
                    : f.message) ?? "Invalid credentials",
                variant: "warning",
              }),
              console.error(
                "ERROR LOGGING IN",
                (x = t == null ? void 0 : t.data) == null ? void 0 : x.message
              );
          }
        },
        b = {
          email: (n) => (n ? !0 : "Enter your email"),
          password: (n) => (n ? !0 : "Enter your password"),
        };
      return (n, _) => (
        c(),
        g(
          r(I),
          { "validation-schema": b, as: "div" },
          {
            default: l(({ handleSubmit: d }) => [
              a(
                "form",
                { onSubmit: (i) => d(i, u), class: "space-y-7" },
                [
                  o(h, {
                    name: "email",
                    placeholder: "Enter your email here",
                    label: "Email",
                  }),
                  o(h, {
                    name: "password",
                    placeholder: "Enter your password here",
                    type: "password",
                    label: "Password",
                  }),
                  o(
                    V,
                    {
                      class: "w-full",
                      type: "submit",
                      size: "lg",
                      disabled: r(s),
                    },
                    {
                      default: l(() => [
                        r(s)
                          ? (c(),
                            g(r(B), { key: 0, class: "animate-spin mr-2" }))
                          : F("", !0),
                        a(
                          "span",
                          null,
                          R(r(s) ? "Please wait..." : "Submit"),
                          1
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["disabled"]
                  ),
                ],
                40,
                P
              ),
            ]),
            _: 1,
          }
        )
      );
    },
  }),
  U = { class: "h-full" },
  j = { class: "max-w-[90%] mx-auto w-[400px]" },
  q = { class: "flex justify-center gap-x-4 mt-2" },
  z = { class: "flex gap-x-2" },
  J = w({
    __name: "login",
    setup(y) {
      return (
        O({ title: "Login" }),
        (p, e) => {
          const s = S,
            u = G;
          return (
            c(),
            C("div", U, [
              o(
                u,
                { name: "auth" },
                {
                  default: l(() => [
                    a("div", null, [
                      e[3] ||
                        (e[3] = a(
                          "div",
                          { class: "text-primary text-center mb-2 text-xl" },
                          "Login",
                          -1
                        )),
                      e[4] ||
                        (e[4] = a(
                          "div",
                          {
                            class:
                              "text-4xl lg:text-5xl font-semibold my-4 text-center max-w-[595px] mx-auto font-display",
                          },
                          " Welcome, Log in to your account ",
                          -1
                        )),
                      a("div", j, [
                        o(T),
                        a("div", q, [
                          o(
                            s,
                            {
                              to: "/forgot-password",
                              class: "underline hover:no-underline ml-1",
                            },
                            {
                              default: l(
                                () => e[0] || (e[0] = [m("Forgot password")])
                              ),
                              _: 1,
                            }
                          ),
                          a("div", z, [
                            e[2] || (e[2] = m(" Not a user? ")),
                            o(
                              s,
                              {
                                to: "/signup",
                                class: "underline hover:no-underline",
                              },
                              {
                                default: l(
                                  () => e[1] || (e[1] = [m(" Sign up ")])
                                ),
                                _: 1,
                              }
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  _: 1,
                }
              ),
            ])
          );
        }
      );
    },
  });
export { J as default };
