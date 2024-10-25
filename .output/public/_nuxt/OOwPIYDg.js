import { _ as S } from "./C_uAVEpq.js";
import {
  h as g,
  f as N,
  i as A,
  r as E,
  o as u,
  n as x,
  w as r,
  b as s,
  m as o,
  L as k,
  q as C,
  a as n,
  t as L,
  _ as O,
  s as h,
  p as P,
  c as R,
  v as $,
  d as y,
} from "./ZzYuc5FK.js";
import { _ as B } from "./Bmu_YX42.js";
import { _ as m, F } from "./CQnnwGri.js";
import { _ as H } from "./g0X8cRiG.js";
import { H as G } from "./gIOIMY9f.js";
import { u as I } from "./JJAh6i0j.js";
import "./CMGZsJ3l.js";
import "./-_7v7zer.js";
const V = ["DJ", "MC", "Artist", "Hype Man", "Radio Host", "Business", "Other"],
  M = g({
    __name: "host-signup-form",
    setup(v) {
      const {
          $repo: { auth: c },
        } = N(),
        { saveAuthUser: t } = A(),
        a = E(!1),
        i = async (l) => {
          var p, _, f;
          a.value = !0;
          const d = { ...l, password_confirmation: l.password };
          try {
            a.value = !0;
            const e = await c.registerHost(d),
              w = e == null ? void 0 : e.message;
            h({
              title: w,
              description: "Follow the link in your email to verify your email",
              variant: "normal",
              duration: 8e4,
            }),
              (a.value = !1),
              t(e.data.token, e.data.user);
            const b =
              ((p = e == null ? void 0 : e.data) == null ? void 0 : p.role) ===
              "host"
                ? "/profile"
                : "/search";
            P().push(b);
          } catch (e) {
            (a.value = !1),
              h({
                title: "Failed",
                description:
                  ((_ = e == null ? void 0 : e.data) == null
                    ? void 0
                    : _.message) ?? "Sign up failed. Please try again",
                variant: "warning",
              }),
              console.error(
                "ERROR LOGGING IN",
                (f = e == null ? void 0 : e.data) == null ? void 0 : f.message
              );
          }
        };
      return (l, d) => (
        u(),
        x(
          o(F),
          { "validation-schema": o(G), onSubmit: i, class: "space-y-7" },
          {
            default: r(() => [
              s(m, {
                name: "email",
                placeholder: "Enter your email",
                label: "Email",
                type: "email",
              }),
              s(m, {
                name: "stage_name",
                placeholder: "Enter your stage name",
                label: "Stage name",
              }),
              s(
                H,
                {
                  options: [...o(V)],
                  name: "profession",
                  placeholder: "Choose your profession",
                  label: "Profession",
                },
                null,
                8,
                ["options"]
              ),
              s(m, {
                name: "password",
                placeholder: "Enter your password",
                type: "password",
                label: "Password",
              }),
              s(
                O,
                { class: "w-full", type: "submit", size: "lg", disabled: o(a) },
                {
                  default: r(() => [
                    o(a)
                      ? (u(), x(o(k), { key: 0, class: "animate-spin mr-2" }))
                      : C("", !0),
                    n("span", null, L(o(a) ? "Please wait..." : "Submit"), 1),
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
        )
      );
    },
  }),
  T = { class: "h-full" },
  D = { class: "fixed top-12 left-0" },
  U = { class: "pt-2" },
  q = { class: "max-w-[90%] mx-auto w-[400px]" },
  z = { class: "text-center mt-2" },
  ae = g({
    __name: "host",
    setup(v) {
      return (
        I({ title: "Sign Up As A host" }),
        (c, t) => {
          const a = S,
            i = $;
          return (
            u(),
            R("div", T, [
              s(
                i,
                { name: "auth" },
                {
                  default: r(() => [
                    n("div", D, [s(B, { to: "/signup" })]),
                    n("div", U, [
                      t[2] ||
                        (t[2] = n(
                          "div",
                          { class: "text-primary text-center my-2 text-xl" },
                          " Create your account ",
                          -1
                        )),
                      t[3] ||
                        (t[3] = n(
                          "div",
                          {
                            class:
                              "text-4xl lg:text-5xl font-semibold my-4 text-center max-w-[595px] mx-auto font-display",
                          },
                          " Create your free host account ",
                          -1
                        )),
                      n("div", q, [
                        s(M),
                        n("div", z, [
                          t[1] || (t[1] = y(" Already a user? ")),
                          s(
                            a,
                            {
                              to: "/login",
                              class: "underline hover:no-underline ml-1",
                            },
                            {
                              default: r(() => t[0] || (t[0] = [y("LOGIN")])),
                              _: 1,
                            }
                          ),
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
export { ae as default };
