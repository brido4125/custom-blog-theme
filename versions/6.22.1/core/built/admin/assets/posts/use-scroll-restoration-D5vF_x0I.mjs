import { j as i, n as g, T as E, _ as w, u as j, q as k, b as l } from "./index-Co93OG_r.mjs";
import { d as B, c as Q, b as u, a as C } from "./hooks-mlEtmlv8.mjs";
import { U as R } from "./dropdown-menu-BLiKFxLz.mjs";
import { g as z } from "./use-infinite-virtual-scroll-CIeCe_ZT.mjs";
const N = E(
  "focus:outline-hidden inline-flex items-center rounded-xs border px-1.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "text-secondary-foreground/70 border-transparent bg-secondary",
        destructive: "bg-destructive/20 border-transparent text-destructive",
        success: "border-transparent bg-green/20 text-green",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function L({ className: e, variant: t, ...s }) {
  return /* @__PURE__ */ i.jsx("div", { className: g(N({ variant: t }), e), ...s });
}
const c = "MembersResponseType", U = C({
  dataType: c,
  path: "/members/"
}), $ = Q({
  dataType: c,
  path: (e) => `/members/${e}/`
}), q = u({
  method: "POST",
  path: ({ id: e }) => `/members/${e}/commenting/disable`,
  body: ({ reason: e, hideComments: t }) => ({
    reason: e,
    hide_comments: t
  }),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), A = u({
  method: "POST",
  path: ({ id: e }) => `/members/${e}/commenting/enable`,
  body: () => ({}),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), O = B({
  dataType: c,
  path: "/members/",
  defaultSearchParams: {
    include: "labels,tiers",
    limit: "50",
    order: "created_at desc"
  },
  defaultNextPageParams: (e, t) => {
    var s;
    if ((s = e.meta) != null && s.pagination.next)
      return {
        ...t,
        page: e.meta.pagination.next.toString()
      };
  },
  returnData: (e) => {
    const { pages: t } = e, s = t.flatMap((a) => a.members), r = t[t.length - 1].meta;
    return {
      members: s,
      meta: r,
      isEnd: r ? r.pagination.pages === r.pagination.page : !0
    };
  }
});
function h({ filter: e, search: t, all: s }) {
  if (!s && !e && !t)
    throw new Error("Bulk operation requires a filter, search, or all flag");
  const r = {};
  return s && (r.all = "true"), e && (r.filter = e), t && (r.search = t), r;
}
const V = u({
  method: "PUT",
  path: () => "/members/bulk/",
  body: ({ action: e }) => ({
    bulk: {
      action: e.type,
      meta: e.meta || {},
      newsletter: e.newsletter
    }
  }),
  searchParams: h,
  invalidateQueries: { dataType: c }
}), W = u({
  method: "DELETE",
  path: () => "/members/",
  searchParams: h,
  invalidateQueries: { dataType: c }
});
function F({ avatarImage: e, memberId: t, isHidden: s, className: r }) {
  return /* @__PURE__ */ i.jsxs("div", { className: g(
    "relative flex size-6 min-w-6 items-center justify-center overflow-hidden rounded-full bg-accent md:size-8 md:min-w-8",
    s && "opacity-50",
    r
  ), children: [
    t && e && /* @__PURE__ */ i.jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ i.jsx("img", { alt: "Member avatar", src: e }) }),
    /* @__PURE__ */ i.jsx("div", { children: /* @__PURE__ */ i.jsx(R, { className: "size-3! md:size-4! text-muted-foreground", size: 12 }) })
  ] });
}
const b = /* @__PURE__ */ new Map();
function G({ parentRef: e, enabled: t = !0, isLoading: s = !1 }) {
  const r = w(), [a, v] = j(null), d = k(null);
  l(() => {
    if (!t || !e.current)
      return;
    const n = z(e.current);
    v(n);
  }, [t, e]), l(() => {
    if (!t || !a)
      return;
    const n = r.pathname + r.search, o = () => {
      const m = a.scrollTop;
      b.set(n, m);
    };
    return a.addEventListener("scroll", o), () => a.removeEventListener("scroll", o);
  }, [t, r.pathname, r.search, a]), l(() => {
    const n = r.pathname + r.search, o = b.get(n);
    if (!(!t || !a || s)) {
      if (o !== void 0 && d.current !== n) {
        let m = 0;
        const x = 3, p = () => {
          if (m += 1, !a)
            return;
          const M = a.scrollTop, T = a.scrollHeight, P = a.clientHeight, f = T - P;
          if (o > f && m < x) {
            setTimeout(p, 100);
            return;
          }
          if (Math.abs(o - M) > 5) {
            const S = Math.min(o, f);
            a.scrollTop = S;
          }
        }, y = setTimeout(p, 150);
        return () => clearTimeout(y);
      }
      d.current = n;
    }
  }, [t, r.pathname, r.search, a, s]);
}
export {
  L as B,
  F as M,
  q as a,
  A as b,
  G as c,
  V as d,
  W as e,
  O as f,
  $ as g,
  U as u
};
//# sourceMappingURL=use-scroll-restoration-D5vF_x0I.mjs.map
