var oa = Object.defineProperty;
var la = (t, e, r) => e in t ? oa(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var qr = (t, e, r) => la(t, typeof e != "symbol" ? e + "" : e, r);
import { D as Lt, j as a, n as Oe, T as ca, a as de, q as Se, $ as Gn, b as ke, o as te, Q as ua, R as me, J as fa, u as ce, l as Hn, m as Dr, a0 as Te, a1 as we, a2 as Nr, p as Kn } from "./index-Co93OG_r.mjs";
import { B as se } from "./heading-Dvc5EWMZ.mjs";
import { X as Mt, _ as Ye, n as qe, o as Jr, p as Qr, C as Zr, g as nt, i as st, j as at, k as it, m as Re, l as da } from "./dialog-WtZBx3XK.mjs";
import { B as Yn, u as pa, d as ha, e as ma, M as ga, c as ya, f as ba } from "./use-scroll-restoration-D5vF_x0I.mjs";
import { P as va, e as xa, f as _a, C as Tr, g as Rr, h as qn, i as Xr, j as Cr, k as wa, F as Sa } from "./filters-Tzpq2sIL.mjs";
import { S as Ea, P as ja, M as Aa, C as Oa, E as ka, F as Pa, c as Da } from "./search-l86H-Gtw.mjs";
import { P as Na, T as Ta } from "./tags-BcvGjgHH.mjs";
import { a as Ir, b as Fr, g as Ra, d as Jn, e as Ca } from "./hooks-mlEtmlv8.mjs";
import { l as le, j as Qn, k as Zn, c as Ia, D as Fa, T as Xn, g as La, i as Ma, N as $a, h as Ua, M as Ba, P as za, f as Va, S as Wa, A as Ga, C as Ha, b as Ka, a as Ya, d as qa, e as Ja, U as en } from "./index-r1mGKtBO.mjs";
import { L as Ot } from "./loading-indicator-CG7i7j8m.mjs";
import { S as Qa, a as Za, b as Xa, c as ei, f as tn } from "./select-DN11M7u8.mjs";
import { T as ti, a as ri, b as Xt, c as er, d as ni, e as ht } from "./table-GLrmgCKV.mjs";
import { C as si, D as ai, a as ii, E as oi, b as li, c as Ue, f as rn, U as ci } from "./dropdown-menu-BLiKFxLz.mjs";
import { U as ui, M as fi, g as es } from "./get-site-timezone-CJqjzq9t.mjs";
import { a as ts, u as rs, g as mt } from "./settings-DdMGSP5F.mjs";
import { u as di } from "./posts-efiQRBOg.mjs";
import { H as kt, u as pi } from "./use-infinite-virtual-scroll-CIeCe_ZT.mjs";
import { E as nn } from "./empty-indicator-DIt_StlQ.mjs";
function hi(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
function Ze(t) {
  "@babel/helpers - typeof";
  return Ze = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ze(t);
}
const mi = "OffersResponseType", gi = Ir({
  dataType: mi,
  path: "/offers/",
  // offers endpoint doesn't support limit or pagination so we exclude the default ?limit=20
  defaultSearchParams: {}
}), yi = ca(
  "relative block rounded-lg transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border border-border bg-background shadow-sm hover:shadow-md dark:border-gray-900 dark:bg-gray-925",
        gradient: [
          "cursor-pointer border border-gray-100 bg-white dark:border-gray-950 dark:bg-black",
          "shadow-[-7px_-6px_42px_8px_rgb(75_225_226_/_28%),7px_6px_42px_8px_rgb(202_103_255_/_32%)]",
          "dark:shadow-[-7px_-6px_42px_8px_rgb(75_225_226_/_36%),7px_6px_42px_8px_rgb(202_103_255_/_38%)]",
          "hover:shadow-[-7px_-4px_42px_10px_rgb(75_225_226_/_38%),7px_8px_42px_10px_rgb(202_103_255_/_42%)]",
          "dark:hover:shadow-[-7px_-4px_42px_10px_rgb(75_225_226_/_50%),7px_8px_42px_10px_rgb(202_103_255_/_52%)]",
          "hover:translate-y-[-2px] hover:scale-[1.01]"
        ],
        info: "bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800 border",
        success: "bg-green-50 border-green-200 dark:bg-green-950/30 dark:border-green-800 border",
        warning: "bg-yellow-50 border-yellow-200 dark:bg-yellow-950/30 dark:border-yellow-800 border",
        destructive: "bg-white shadow-sm dark:bg-gray-950"
      },
      size: {
        sm: "p-2 text-sm",
        md: "p-3",
        lg: "p-4"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
), ns = Lt(
  (t, e) => {
    const {
      variant: r,
      size: n,
      dismissible: s = !1,
      onDismiss: i,
      role: d = "status",
      className: f,
      children: u,
      ...y
    } = t, E = (w) => {
      w.preventDefault(), w.stopPropagation(), s && i && i();
    };
    return /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: e,
        className: Oe(yi({ variant: r, size: n }), f),
        role: d,
        ...y,
        children: [
          s && /* @__PURE__ */ a.jsx(
            se,
            {
              "aria-label": "Dismiss notification",
              className: "absolute right-1 top-1 size-8 text-gray-600 dark:text-gray-500 dark:hover:text-gray-300",
              size: "icon",
              variant: "ghost",
              onClick: E,
              children: /* @__PURE__ */ a.jsx(Mt, { className: "size-5" })
            }
          ),
          u
        ]
      }
    );
  }
);
ns.displayName = "Banner";
var bi = /* @__PURE__ */ new Map([
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
  ["aac", "audio/aac"],
  ["abw", "application/x-abiword"],
  ["arc", "application/x-freearc"],
  ["avif", "image/avif"],
  ["avi", "video/x-msvideo"],
  ["azw", "application/vnd.amazon.ebook"],
  ["bin", "application/octet-stream"],
  ["bmp", "image/bmp"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["cda", "application/x-cdf"],
  ["csh", "application/x-csh"],
  ["css", "text/css"],
  ["csv", "text/csv"],
  ["doc", "application/msword"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["eot", "application/vnd.ms-fontobject"],
  ["epub", "application/epub+zip"],
  ["gz", "application/gzip"],
  ["gif", "image/gif"],
  ["heic", "image/heic"],
  ["heif", "image/heif"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["ico", "image/vnd.microsoft.icon"],
  ["ics", "text/calendar"],
  ["jar", "application/java-archive"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["js", "text/javascript"],
  ["json", "application/json"],
  ["jsonld", "application/ld+json"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mjs", "text/javascript"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mpeg", "video/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["opus", "audio/opus"],
  ["otf", "font/otf"],
  ["png", "image/png"],
  ["pdf", "application/pdf"],
  ["php", "application/x-httpd-php"],
  ["ppt", "application/vnd.ms-powerpoint"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["rar", "application/vnd.rar"],
  ["rtf", "application/rtf"],
  ["sh", "application/x-sh"],
  ["svg", "image/svg+xml"],
  ["swf", "application/x-shockwave-flash"],
  ["tar", "application/x-tar"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["ts", "video/mp2t"],
  ["ttf", "font/ttf"],
  ["txt", "text/plain"],
  ["vsd", "application/vnd.visio"],
  ["wav", "audio/wav"],
  ["weba", "audio/webm"],
  ["webm", "video/webm"],
  ["webp", "image/webp"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["xhtml", "application/xhtml+xml"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xml", "application/xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["zip", "application/zip"],
  ["7z", "application/x-7z-compressed"],
  // Others
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["msg", "application/vnd.ms-outlook"]
]);
function ot(t, e) {
  var r = vi(t);
  if (typeof r.path != "string") {
    var n = t.webkitRelativePath;
    Object.defineProperty(r, "path", {
      value: typeof e == "string" ? e : typeof n == "string" && n.length > 0 ? n : t.name,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return r;
}
function vi(t) {
  var e = t.name, r = e && e.lastIndexOf(".") !== -1;
  if (r && !t.type) {
    var n = e.split(".").pop().toLowerCase(), s = bi.get(n);
    s && Object.defineProperty(t, "type", {
      value: s,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return t;
}
var xi = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function _i(t) {
  return Ye(this, void 0, void 0, function() {
    return qe(this, function(e) {
      return Pt(t) && wi(t.dataTransfer) ? [2, Ai(t.dataTransfer, t.type)] : Si(t) ? [2, Ei(t)] : Array.isArray(t) && t.every(function(r) {
        return "getFile" in r && typeof r.getFile == "function";
      }) ? [2, ji(t)] : [2, []];
    });
  });
}
function wi(t) {
  return Pt(t);
}
function Si(t) {
  return Pt(t) && Pt(t.target);
}
function Pt(t) {
  return typeof t == "object" && t !== null;
}
function Ei(t) {
  return gr(t.target.files).map(function(e) {
    return ot(e);
  });
}
function ji(t) {
  return Ye(this, void 0, void 0, function() {
    var e;
    return qe(this, function(r) {
      switch (r.label) {
        case 0:
          return [4, Promise.all(t.map(function(n) {
            return n.getFile();
          }))];
        case 1:
          return e = r.sent(), [2, e.map(function(n) {
            return ot(n);
          })];
      }
    });
  });
}
function Ai(t, e) {
  return Ye(this, void 0, void 0, function() {
    var r, n;
    return qe(this, function(s) {
      switch (s.label) {
        case 0:
          return t.items ? (r = gr(t.items).filter(function(i) {
            return i.kind === "file";
          }), e !== "drop" ? [2, r] : [4, Promise.all(r.map(Oi))]) : [3, 2];
        case 1:
          return n = s.sent(), [2, sn(ss(n))];
        case 2:
          return [2, sn(gr(t.files).map(function(i) {
            return ot(i);
          }))];
      }
    });
  });
}
function sn(t) {
  return t.filter(function(e) {
    return xi.indexOf(e.name) === -1;
  });
}
function gr(t) {
  if (t === null)
    return [];
  for (var e = [], r = 0; r < t.length; r++) {
    var n = t[r];
    e.push(n);
  }
  return e;
}
function Oi(t) {
  if (typeof t.webkitGetAsEntry != "function")
    return an(t);
  var e = t.webkitGetAsEntry();
  return e && e.isDirectory ? as(e) : an(t);
}
function ss(t) {
  return t.reduce(function(e, r) {
    return Jr(Jr([], Qr(e), !1), Qr(Array.isArray(r) ? ss(r) : [r]), !1);
  }, []);
}
function an(t) {
  var e = t.getAsFile();
  if (!e)
    return Promise.reject("".concat(t, " is not a File"));
  var r = ot(e);
  return Promise.resolve(r);
}
function ki(t) {
  return Ye(this, void 0, void 0, function() {
    return qe(this, function(e) {
      return [2, t.isDirectory ? as(t) : Pi(t)];
    });
  });
}
function as(t) {
  var e = t.createReader();
  return new Promise(function(r, n) {
    var s = [];
    function i() {
      var d = this;
      e.readEntries(function(f) {
        return Ye(d, void 0, void 0, function() {
          var u, y, E;
          return qe(this, function(w) {
            switch (w.label) {
              case 0:
                if (f.length) return [3, 5];
                w.label = 1;
              case 1:
                return w.trys.push([1, 3, , 4]), [4, Promise.all(s)];
              case 2:
                return u = w.sent(), r(u), [3, 4];
              case 3:
                return y = w.sent(), n(y), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                E = Promise.all(f.map(ki)), s.push(E), i(), w.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(f) {
        n(f);
      });
    }
    i();
  });
}
function Pi(t) {
  return Ye(this, void 0, void 0, function() {
    return qe(this, function(e) {
      return [2, new Promise(function(r, n) {
        t.file(function(s) {
          var i = ot(s, t.fullPath);
          r(i);
        }, function(s) {
          n(s);
        });
      })];
    });
  });
}
var Di = function(t, e) {
  if (t && e) {
    var r = Array.isArray(e) ? e : e.split(",");
    if (r.length === 0)
      return !0;
    var n = t.name || "", s = (t.type || "").toLowerCase(), i = s.replace(/\/.*$/, "");
    return r.some(function(d) {
      var f = d.trim().toLowerCase();
      return f.charAt(0) === "." ? n.toLowerCase().endsWith(f) : f.endsWith("/*") ? i === f.replace(/\/.*$/, "") : s === f;
    });
  }
  return !0;
};
function on(t) {
  return Ri(t) || Ti(t) || os(t) || Ni();
}
function Ni() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ti(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Ri(t) {
  if (Array.isArray(t)) return yr(t);
}
function ln(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ln(Object(r), !0).forEach(function(n) {
      is(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ln(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function is(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function Xe(t, e) {
  return Fi(t) || Ii(t, e) || os(t, e) || Ci();
}
function Ci() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function os(t, e) {
  if (t) {
    if (typeof t == "string") return yr(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yr(t, e);
  }
}
function yr(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function Ii(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], s = !0, i = !1, d, f;
    try {
      for (r = r.call(t); !(s = (d = r.next()).done) && (n.push(d.value), !(e && n.length === e)); s = !0)
        ;
    } catch (u) {
      i = !0, f = u;
    } finally {
      try {
        !s && r.return != null && r.return();
      } finally {
        if (i) throw f;
      }
    }
    return n;
  }
}
function Fi(t) {
  if (Array.isArray(t)) return t;
}
var Li = "file-invalid-type", Mi = "file-too-large", $i = "file-too-small", Ui = "too-many-files", Bi = function(e) {
  e = Array.isArray(e) && e.length === 1 ? e[0] : e;
  var r = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
  return {
    code: Li,
    message: "File type must be ".concat(r)
  };
}, un = function(e) {
  return {
    code: Mi,
    message: "File is larger than ".concat(e, " ").concat(e === 1 ? "byte" : "bytes")
  };
}, fn = function(e) {
  return {
    code: $i,
    message: "File is smaller than ".concat(e, " ").concat(e === 1 ? "byte" : "bytes")
  };
}, zi = {
  code: Ui,
  message: "Too many files"
};
function ls(t, e) {
  var r = t.type === "application/x-moz-file" || Di(t, e);
  return [r, r ? null : Bi(e)];
}
function cs(t, e, r) {
  if (Le(t.size))
    if (Le(e) && Le(r)) {
      if (t.size > r) return [!1, un(r)];
      if (t.size < e) return [!1, fn(e)];
    } else {
      if (Le(e) && t.size < e) return [!1, fn(e)];
      if (Le(r) && t.size > r) return [!1, un(r)];
    }
  return [!0, null];
}
function Le(t) {
  return t != null;
}
function Vi(t) {
  var e = t.files, r = t.accept, n = t.minSize, s = t.maxSize, i = t.multiple, d = t.maxFiles, f = t.validator;
  return !i && e.length > 1 || i && d >= 1 && e.length > d ? !1 : e.every(function(u) {
    var y = ls(u, r), E = Xe(y, 1), w = E[0], O = cs(u, n, s), D = Xe(O, 1), P = D[0], N = f ? f(u) : null;
    return w && P && !N;
  });
}
function Dt(t) {
  return typeof t.isPropagationStopped == "function" ? t.isPropagationStopped() : typeof t.cancelBubble < "u" ? t.cancelBubble : !1;
}
function gt(t) {
  return t.dataTransfer ? Array.prototype.some.call(t.dataTransfer.types, function(e) {
    return e === "Files" || e === "application/x-moz-file";
  }) : !!t.target && !!t.target.files;
}
function dn(t) {
  t.preventDefault();
}
function Wi(t) {
  return t.indexOf("MSIE") !== -1 || t.indexOf("Trident/") !== -1;
}
function Gi(t) {
  return t.indexOf("Edge/") !== -1;
}
function Hi() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return Wi(t) || Gi(t);
}
function Pe() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return function(n) {
    for (var s = arguments.length, i = new Array(s > 1 ? s - 1 : 0), d = 1; d < s; d++)
      i[d - 1] = arguments[d];
    return e.some(function(f) {
      return !Dt(n) && f && f.apply(void 0, [n].concat(i)), Dt(n);
    });
  };
}
function Ki() {
  return "showOpenFilePicker" in window;
}
function Yi(t) {
  if (Le(t)) {
    var e = Object.entries(t).filter(function(r) {
      var n = Xe(r, 2), s = n[0], i = n[1], d = !0;
      return us(s) || (console.warn('Skipped "'.concat(s, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), d = !1), (!Array.isArray(i) || !i.every(fs)) && (console.warn('Skipped "'.concat(s, '" because an invalid file extension was provided.')), d = !1), d;
    }).reduce(function(r, n) {
      var s = Xe(n, 2), i = s[0], d = s[1];
      return cn(cn({}, r), {}, is({}, i, d));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: e
    }];
  }
  return t;
}
function qi(t) {
  if (Le(t))
    return Object.entries(t).reduce(function(e, r) {
      var n = Xe(r, 2), s = n[0], i = n[1];
      return [].concat(on(e), [s], on(i));
    }, []).filter(function(e) {
      return us(e) || fs(e);
    }).join(",");
}
function Ji(t) {
  return t instanceof DOMException && (t.name === "AbortError" || t.code === t.ABORT_ERR);
}
function Qi(t) {
  return t instanceof DOMException && (t.name === "SecurityError" || t.code === t.SECURITY_ERR);
}
function us(t) {
  return t === "audio/*" || t === "video/*" || t === "image/*" || t === "text/*" || /\w+\/[-+.\w]+/g.test(t);
}
function fs(t) {
  return /^.*\.[\w]+$/.test(t);
}
var Zi = ["children"], Xi = ["open"], eo = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], to = ["refKey", "onChange", "onClick"];
function ro(t) {
  return ao(t) || so(t) || ds(t) || no();
}
function no() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function so(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function ao(t) {
  if (Array.isArray(t)) return br(t);
}
function tr(t, e) {
  return lo(t) || oo(t, e) || ds(t, e) || io();
}
function io() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ds(t, e) {
  if (t) {
    if (typeof t == "string") return br(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return br(t, e);
  }
}
function br(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function oo(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], s = !0, i = !1, d, f;
    try {
      for (r = r.call(t); !(s = (d = r.next()).done) && (n.push(d.value), !(e && n.length === e)); s = !0)
        ;
    } catch (u) {
      i = !0, f = u;
    } finally {
      try {
        !s && r.return != null && r.return();
      } finally {
        if (i) throw f;
      }
    }
    return n;
  }
}
function lo(t) {
  if (Array.isArray(t)) return t;
}
function pn(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fe(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? pn(Object(r), !0).forEach(function(n) {
      vr(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : pn(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function vr(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function Nt(t, e) {
  if (t == null) return {};
  var r = co(t, e), n, s;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (s = 0; s < i.length; s++)
      n = i[s], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function co(t, e) {
  if (t == null) return {};
  var r = {}, n = Object.keys(t), s, i;
  for (i = 0; i < n.length; i++)
    s = n[i], !(e.indexOf(s) >= 0) && (r[s] = t[s]);
  return r;
}
var Lr = /* @__PURE__ */ Lt(function(t, e) {
  var r = t.children, n = Nt(t, Zi), s = hs(n), i = s.open, d = Nt(s, Xi);
  return ua(e, function() {
    return {
      open: i
    };
  }, [i]), /* @__PURE__ */ me.createElement(fa, null, r(fe(fe({}, d), {}, {
    open: i
  })));
});
Lr.displayName = "Dropzone";
var ps = {
  disabled: !1,
  getFilesFromEvent: _i,
  maxSize: 1 / 0,
  minSize: 0,
  multiple: !0,
  maxFiles: 0,
  preventDropOnDocument: !0,
  noClick: !1,
  noKeyboard: !1,
  noDrag: !1,
  noDragEventsBubbling: !1,
  validator: null,
  useFsAccessApi: !0,
  autoFocus: !1
};
Lr.defaultProps = ps;
Lr.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: le.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: le.objectOf(le.arrayOf(le.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: le.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: le.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: le.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: le.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: le.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: le.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: le.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: le.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: le.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: le.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: le.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: le.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: le.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: le.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: le.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: le.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: le.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: le.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: le.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: le.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: le.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: le.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: le.func
};
var xr = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function hs() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = fe(fe({}, ps), t), r = e.accept, n = e.disabled, s = e.getFilesFromEvent, i = e.maxSize, d = e.minSize, f = e.multiple, u = e.maxFiles, y = e.onDragEnter, E = e.onDragLeave, w = e.onDragOver, O = e.onDrop, D = e.onDropAccepted, P = e.onDropRejected, N = e.onFileDialogCancel, S = e.onFileDialogOpen, $ = e.useFsAccessApi, U = e.autoFocus, L = e.preventDropOnDocument, W = e.noClick, B = e.noKeyboard, T = e.noDrag, R = e.noDragEventsBubbling, c = e.onError, l = e.validator, x = de(function() {
    return qi(r);
  }, [r]), j = de(function() {
    return Yi(r);
  }, [r]), m = de(function() {
    return typeof S == "function" ? S : hn;
  }, [S]), _ = de(function() {
    return typeof N == "function" ? N : hn;
  }, [N]), h = Se(null), A = Se(null), I = Gn(uo, xr), p = tr(I, 2), ee = p[0], F = p[1], k = ee.isFocused, ae = ee.isFileDialogActive, o = Se(typeof window < "u" && window.isSecureContext && $ && Ki()), g = function() {
    !o.current && ae && setTimeout(function() {
      if (A.current) {
        var G = A.current.files;
        G.length || (F({
          type: "closeDialog"
        }), _());
      }
    }, 300);
  };
  ke(function() {
    return window.addEventListener("focus", g, !1), function() {
      window.removeEventListener("focus", g, !1);
    };
  }, [A, ae, _, o]);
  var b = Se([]), V = function(G) {
    h.current && h.current.contains(G.target) || (G.preventDefault(), b.current = []);
  };
  ke(function() {
    return L && (document.addEventListener("dragover", dn, !1), document.addEventListener("drop", V, !1)), function() {
      L && (document.removeEventListener("dragover", dn), document.removeEventListener("drop", V));
    };
  }, [h, L]), ke(function() {
    return !n && U && h.current && h.current.focus(), function() {
    };
  }, [h, U, n]);
  var H = te(function(M) {
    c ? c(M) : console.error(M);
  }, [c]), q = te(function(M) {
    M.preventDefault(), M.persist(), he(M), b.current = [].concat(ro(b.current), [M.target]), gt(M) && Promise.resolve(s(M)).then(function(G) {
      if (!(Dt(M) && !R)) {
        var ie = G.length, oe = ie > 0 && Vi({
          files: G,
          accept: x,
          minSize: d,
          maxSize: i,
          multiple: f,
          maxFiles: u,
          validator: l
        }), xe = ie > 0 && !oe;
        F({
          isDragAccept: oe,
          isDragReject: xe,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), y && y(M);
      }
    }).catch(function(G) {
      return H(G);
    });
  }, [s, y, H, R, x, d, i, f, u, l]), K = te(function(M) {
    M.preventDefault(), M.persist(), he(M);
    var G = gt(M);
    if (G && M.dataTransfer)
      try {
        M.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return G && w && w(M), !1;
  }, [w, R]), C = te(function(M) {
    M.preventDefault(), M.persist(), he(M);
    var G = b.current.filter(function(oe) {
      return h.current && h.current.contains(oe);
    }), ie = G.indexOf(M.target);
    ie !== -1 && G.splice(ie, 1), b.current = G, !(G.length > 0) && (F({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), gt(M) && E && E(M));
  }, [h, E, R]), z = te(function(M, G) {
    var ie = [], oe = [];
    M.forEach(function(xe) {
      var je = ls(xe, x), Ae = tr(je, 2), De = Ae[0], Kt = Ae[1], Yt = cs(xe, d, i), pt = tr(Yt, 2), qt = pt[0], Jt = pt[1], Qt = l ? l(xe) : null;
      if (De && qt && !Qt)
        ie.push(xe);
      else {
        var Zt = [Kt, Jt];
        Qt && (Zt = Zt.concat(Qt)), oe.push({
          file: xe,
          errors: Zt.filter(function(ia) {
            return ia;
          })
        });
      }
    }), (!f && ie.length > 1 || f && u >= 1 && ie.length > u) && (ie.forEach(function(xe) {
      oe.push({
        file: xe,
        errors: [zi]
      });
    }), ie.splice(0)), F({
      acceptedFiles: ie,
      fileRejections: oe,
      type: "setFiles"
    }), O && O(ie, oe, G), oe.length > 0 && P && P(oe, G), ie.length > 0 && D && D(ie, G);
  }, [F, f, x, d, i, u, O, D, P, l]), J = te(function(M) {
    M.preventDefault(), M.persist(), he(M), b.current = [], gt(M) && Promise.resolve(s(M)).then(function(G) {
      Dt(M) && !R || z(G, M);
    }).catch(function(G) {
      return H(G);
    }), F({
      type: "reset"
    });
  }, [s, z, H, R]), Q = te(function() {
    if (o.current) {
      F({
        type: "openDialog"
      }), m();
      var M = {
        multiple: f,
        types: j
      };
      window.showOpenFilePicker(M).then(function(G) {
        return s(G);
      }).then(function(G) {
        z(G, null), F({
          type: "closeDialog"
        });
      }).catch(function(G) {
        Ji(G) ? (_(G), F({
          type: "closeDialog"
        })) : Qi(G) ? (o.current = !1, A.current ? (A.current.value = null, A.current.click()) : H(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : H(G);
      });
      return;
    }
    A.current && (F({
      type: "openDialog"
    }), m(), A.current.value = null, A.current.click());
  }, [F, m, _, $, z, H, j, f]), Z = te(function(M) {
    !h.current || !h.current.isEqualNode(M.target) || (M.key === " " || M.key === "Enter" || M.keyCode === 32 || M.keyCode === 13) && (M.preventDefault(), Q());
  }, [h, Q]), X = te(function() {
    F({
      type: "focus"
    });
  }, []), ne = te(function() {
    F({
      type: "blur"
    });
  }, []), Y = te(function() {
    W || (Hi() ? setTimeout(Q, 0) : Q());
  }, [W, Q]), ge = function(G) {
    return n ? null : G;
  }, pe = function(G) {
    return B ? null : ge(G);
  }, v = function(G) {
    return T ? null : ge(G);
  }, he = function(G) {
    R && G.stopPropagation();
  }, Ee = de(function() {
    return function() {
      var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, G = M.refKey, ie = G === void 0 ? "ref" : G, oe = M.role, xe = M.onKeyDown, je = M.onFocus, Ae = M.onBlur, De = M.onClick, Kt = M.onDragEnter, Yt = M.onDragOver, pt = M.onDragLeave, qt = M.onDrop, Jt = Nt(M, eo);
      return fe(fe(vr({
        onKeyDown: pe(Pe(xe, Z)),
        onFocus: pe(Pe(je, X)),
        onBlur: pe(Pe(Ae, ne)),
        onClick: ge(Pe(De, Y)),
        onDragEnter: v(Pe(Kt, q)),
        onDragOver: v(Pe(Yt, K)),
        onDragLeave: v(Pe(pt, C)),
        onDrop: v(Pe(qt, J)),
        role: typeof oe == "string" && oe !== "" ? oe : "presentation"
      }, ie, h), !n && !B ? {
        tabIndex: 0
      } : {}), Jt);
    };
  }, [h, Z, X, ne, Y, q, K, C, J, B, T, n]), _e = te(function(M) {
    M.stopPropagation();
  }, []), ye = de(function() {
    return function() {
      var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, G = M.refKey, ie = G === void 0 ? "ref" : G, oe = M.onChange, xe = M.onClick, je = Nt(M, to), Ae = vr({
        accept: x,
        multiple: f,
        type: "file",
        style: {
          display: "none"
        },
        onChange: ge(Pe(oe, J)),
        onClick: ge(Pe(xe, _e)),
        tabIndex: -1
      }, ie, A);
      return fe(fe({}, Ae), je);
    };
  }, [A, r, f, J, n]);
  return fe(fe({}, ee), {}, {
    isFocused: k && !n,
    getRootProps: Ee,
    getInputProps: ye,
    rootRef: h,
    inputRef: A,
    open: ge(Q)
  });
}
function uo(t, e) {
  switch (e.type) {
    case "focus":
      return fe(fe({}, t), {}, {
        isFocused: !0
      });
    case "blur":
      return fe(fe({}, t), {}, {
        isFocused: !1
      });
    case "openDialog":
      return fe(fe({}, xr), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return fe(fe({}, t), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return fe(fe({}, t), {}, {
        isDragActive: e.isDragActive,
        isDragAccept: e.isDragAccept,
        isDragReject: e.isDragReject
      });
    case "setFiles":
      return fe(fe({}, t), {}, {
        acceptedFiles: e.acceptedFiles,
        fileRejections: e.fileRejections
      });
    case "reset":
      return fe({}, xr);
    default:
      return t;
  }
}
function hn() {
}
const ms = Lt(({
  accept: t,
  multiple: e = !1,
  maxFiles: r = e ? 0 : 1,
  disabled: n = !1,
  onDropAccepted: s,
  onDropRejected: i,
  className: d,
  children: f,
  ...u
}, y) => {
  const {
    getRootProps: E,
    getInputProps: w,
    rootRef: O,
    isDragActive: D,
    isDragAccept: P,
    isDragReject: N,
    isFocused: S,
    isFileDialogActive: $,
    open: U
  } = hs({
    accept: t,
    multiple: e,
    maxFiles: r,
    disabled: n,
    onDropAccepted: s,
    onDropRejected: i
  }), L = typeof f == "function" ? f({ isDragActive: D, isDragAccept: P, isDragReject: N, isFocused: S, isFileDialogActive: $, open: U }) : f, W = (c) => {
    O.current = c, typeof y == "function" ? y(c) : y && (y.current = c);
  }, B = E({
    ...u,
    role: "button",
    tabIndex: n ? -1 : 0,
    "aria-disabled": n,
    className: Oe(
      "flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed p-10 transition-colors outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      n && "cursor-not-allowed opacity-60 pointer-events-none",
      N && "border-red-500 bg-red-50 dark:bg-red-950/20",
      D && !N && !n && "border-green-500 bg-green-50 dark:bg-green-950/20",
      !D && (n ? "border-grey-300" : "border-grey-300 hover:border-grey-400"),
      d
    )
  }), { ref: T, ...R } = B;
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      ref: W,
      ...R,
      children: [
        /* @__PURE__ */ a.jsx("input", { ...w() }),
        L
      ]
    }
  );
});
ms.displayName = "Dropzone";
const fo = ({ label: t, onSave: e, onCancel: r, onDelete: n, isDuplicateName: s }) => {
  const [i, d] = ce(t.name), [f, u] = ce(!1), [y, E] = ce(""), [w, O] = ce(!1), [D, P] = ce(!1), N = Se(null), S = w || D;
  ke(() => {
    var B, T;
    (B = N.current) == null || B.focus(), (T = N.current) == null || T.select();
  }, []);
  const $ = (B) => {
    const T = B.trim();
    return T ? s != null && s(T, t.id) ? "A label with this name already exists" : "" : "Name is required";
  }, U = async () => {
    const B = $(i);
    if (B) {
      E(B);
      return;
    }
    O(!0);
    try {
      await e(t.id, i.trim()), r();
    } catch {
      O(!1);
    }
  }, L = (B) => {
    B.key === "Enter" ? (B.preventDefault(), U()) : B.key === "Escape" && (B.preventDefault(), S || r());
  }, W = async () => {
    P(!0);
    try {
      await n(t.id);
    } catch {
      P(!1), u(!1);
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col gap-2 py-1.5", "data-edit-row": !0, children: [
    /* @__PURE__ */ a.jsx(
      "input",
      {
        ref: N,
        className: "outline-hidden h-7 w-full rounded border border-border bg-background px-2 text-sm focus:ring-1 focus:ring-ring disabled:opacity-50",
        disabled: S,
        type: "text",
        value: i,
        onChange: (B) => {
          d(B.target.value), E("");
        },
        onKeyDown: L
      }
    ),
    y && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-destructive", children: y }),
    f ? /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-1 text-sm", children: [
      /* @__PURE__ */ a.jsx("span", { className: "flex-1 font-semibold", children: "Delete label?" }),
      /* @__PURE__ */ a.jsx(
        se,
        {
          className: "h-6 px-2 text-xs",
          disabled: S,
          size: "sm",
          variant: "outline",
          onClick: () => u(!1),
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ a.jsx(
        se,
        {
          className: "h-6 px-2 text-xs",
          disabled: S,
          size: "sm",
          variant: "destructive",
          onClick: W,
          children: D ? "Deleting..." : "Delete"
        }
      )
    ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ a.jsx(
        se,
        {
          className: "h-6 gap-1 px-1.5 text-xs text-red hover:bg-red/5 hover:text-red",
          disabled: S,
          size: "sm",
          variant: "ghost",
          onClick: () => u(!0),
          children: "Delete"
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "ml-auto flex gap-1", children: [
        /* @__PURE__ */ a.jsx(
          se,
          {
            className: "h-6 px-2 text-xs",
            disabled: S,
            size: "sm",
            variant: "outline",
            onClick: r,
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ a.jsx(
          se,
          {
            className: "h-6 px-2 text-xs",
            disabled: S,
            size: "sm",
            onClick: U,
            children: w ? "Saving..." : "Save"
          }
        )
      ] })
    ] })
  ] });
}, po = ({ label: t, isSelected: e, showEdit: r, onToggle: n, onEditClick: s }) => /* @__PURE__ */ a.jsxs(
  Cr,
  {
    className: "group",
    value: t.slug,
    onSelect: () => n(t.slug),
    children: [
      /* @__PURE__ */ a.jsx("span", { className: "flex-1 truncate", children: t.name }),
      r ? /* @__PURE__ */ a.jsxs(
        "button",
        {
          "aria-label": `Edit label ${t.name}`,
          className: "relative ml-1 flex size-5 shrink-0 items-center justify-center rounded text-muted-foreground hover:text-foreground",
          type: "button",
          onClick: (i) => {
            i.stopPropagation(), i.preventDefault(), s();
          },
          children: [
            e && /* @__PURE__ */ a.jsx(Zr, { className: "absolute size-3 text-primary transition-opacity duration-150 group-hover:opacity-0" }),
            /* @__PURE__ */ a.jsx(Na, { className: "absolute size-3 translate-x-2 opacity-0 transition-all duration-150 ease-out group-hover:translate-x-0 group-hover:opacity-100" })
          ]
        }
      ) : e && /* @__PURE__ */ a.jsx(Zr, { className: "size-4 shrink-0 text-primary" })
    ]
  }
), gs = ({
  labels: t,
  selectedSlugs: e,
  search: r,
  onToggle: n,
  onEdit: s,
  onDelete: i,
  isDuplicateName: d,
  canCreateFromSearch: f,
  onCreate: u,
  isCreating: y,
  onSearchClear: E
}) => {
  const [w, O] = ce(null), D = t.filter((L) => L.name.toLowerCase().includes(r.toLowerCase())), P = !!u && r.trim() && (f == null ? void 0 : f(r)), N = !!s, S = async () => {
    if (u) {
      const L = await u(r.trim());
      L && n(L.slug), E == null || E();
    }
  }, $ = async (L, W) => {
    s && await s(L, W);
  }, U = async (L) => {
    i && (await i(L), O(null));
  };
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    !P && D.length === 0 && /* @__PURE__ */ a.jsx(qn, { children: "No labels found" }),
    D.length > 0 && /* @__PURE__ */ a.jsx(Xr, { className: "[&_[cmdk-group-heading]]:hidden", children: D.map((L) => w === L.id ? /* @__PURE__ */ a.jsx(
      fo,
      {
        isDuplicateName: d,
        label: L,
        onCancel: () => O(null),
        onDelete: U,
        onSave: $
      },
      L.id
    ) : /* @__PURE__ */ a.jsx(
      po,
      {
        isSelected: e.includes(L.slug),
        label: L,
        showEdit: N,
        onEditClick: () => O(L.id),
        onToggle: n
      },
      L.id
    )) }),
    P && /* @__PURE__ */ a.jsx(Xr, { className: "[&_[cmdk-group-heading]]:hidden", children: /* @__PURE__ */ a.jsxs(
      Cr,
      {
        disabled: y,
        onSelect: S,
        children: [
          /* @__PURE__ */ a.jsx(ja, { className: "size-4" }),
          y ? "Creating..." : `Create "${r.trim()}"`
        ]
      }
    ) })
  ] });
}, ys = ({ labels: t, onToggle: e }) => /* @__PURE__ */ a.jsx(a.Fragment, { children: t.map((r) => /* @__PURE__ */ a.jsxs(
  Yn,
  {
    className: "cursor-pointer gap-1 pr-1",
    variant: "outline",
    onClick: (n) => {
      n.stopPropagation(), e(r.slug);
    },
    children: [
      r.name,
      /* @__PURE__ */ a.jsx(Mt, { className: "size-3" })
    ]
  },
  r.id
)) }), $t = ({
  labels: t,
  selectedSlugs: e,
  isLoading: r,
  onToggle: n,
  canCreateFromSearch: s,
  onCreate: i,
  isCreating: d,
  onEdit: f,
  onDelete: u,
  isDuplicateName: y,
  inline: E = !1,
  align: w = "start"
}) => {
  const O = e.map((D) => t.find((P) => P.slug === D)).filter((D) => !!D);
  return E ? /* @__PURE__ */ a.jsx(
    ho,
    {
      align: w,
      canCreateFromSearch: s,
      isCreating: d,
      isDuplicateName: y,
      isLoading: r,
      labels: t,
      selectedLabels: O,
      selectedSlugs: e,
      onCreate: i,
      onDelete: u,
      onEdit: f,
      onToggle: n
    }
  ) : /* @__PURE__ */ a.jsx(
    go,
    {
      canCreateFromSearch: s,
      isCreating: d,
      isDuplicateName: y,
      isLoading: r,
      labels: t,
      selectedLabels: O,
      selectedSlugs: e,
      onCreate: i,
      onDelete: u,
      onEdit: f,
      onToggle: n
    }
  );
}, ho = ({
  labels: t,
  selectedLabels: e,
  selectedSlugs: r,
  onToggle: n,
  isLoading: s,
  align: i = "start",
  canCreateFromSearch: d,
  onCreate: f,
  isCreating: u,
  onEdit: y,
  onDelete: E,
  isDuplicateName: w
}) => {
  const O = Se(null), [D, P] = ce(0), N = te(() => {
    const $ = O.current, U = $ == null ? void 0 : $.parentElement;
    if ($ && U) {
      const L = $.getBoundingClientRect(), W = U.getBoundingClientRect();
      P(Math.round(W.left - L.left));
    }
  }, []), S = e.length === 0 ? "Select..." : e.length === 1 ? e[0].name : `${e.length} labels`;
  return /* @__PURE__ */ a.jsxs(
    va,
    {
      onOpenChange: ($) => {
        $ && N();
      },
      children: [
        /* @__PURE__ */ a.jsx(xa, { asChild: !0, children: /* @__PURE__ */ a.jsx(
          "button",
          {
            ref: O,
            className: "flex size-full items-center truncate text-left text-sm",
            type: "button",
            children: S
          }
        ) }),
        /* @__PURE__ */ a.jsx(_a, { align: i, alignOffset: D, className: "w-64 p-0", children: s ? /* @__PURE__ */ a.jsx("div", { className: "flex items-center justify-center py-6 text-sm text-muted-foreground", children: "Loading labels..." }) : /* @__PURE__ */ a.jsx(
          mo,
          {
            canCreateFromSearch: d,
            isCreating: u,
            isDuplicateName: w,
            labels: t,
            selectedLabels: e,
            selectedSlugs: r,
            onCreate: f,
            onDelete: E,
            onEdit: y,
            onToggle: n
          }
        ) })
      ]
    }
  );
}, mo = ({ selectedLabels: t, ...e }) => {
  const [r, n] = ce("");
  return /* @__PURE__ */ a.jsxs(Tr, { shouldFilter: !1, children: [
    t.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-1.5 border-b px-3 py-2", children: /* @__PURE__ */ a.jsx(ys, { labels: t, onToggle: e.onToggle }) }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex items-center border-b px-3", children: [
      /* @__PURE__ */ a.jsx(Ea, { className: "mr-2 size-4 shrink-0 opacity-50" }),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: "outline-hidden flex h-9 w-full bg-transparent py-3 text-sm placeholder:text-muted-foreground",
          placeholder: "Search labels...",
          value: r,
          onChange: (s) => n(s.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx(Rr, { className: "max-h-64 overflow-y-auto", children: /* @__PURE__ */ a.jsx(
      gs,
      {
        ...e,
        search: r,
        onSearchClear: () => n("")
      }
    ) })
  ] });
}, go = ({
  labels: t,
  selectedLabels: e,
  selectedSlugs: r,
  onToggle: n,
  isLoading: s,
  canCreateFromSearch: i,
  onCreate: d,
  isCreating: f,
  onEdit: u,
  onDelete: y,
  isDuplicateName: E
}) => {
  const [w, O] = ce(!1), [D, P] = ce(""), N = Se(null), S = Se(null);
  ke(() => {
    if (!w)
      return;
    const U = (L) => {
      S.current && !S.current.contains(L.target) && O(!1);
    };
    return document.addEventListener("pointerdown", U), () => document.removeEventListener("pointerdown", U);
  }, [w]);
  const $ = (U) => {
    var L;
    U.key === "Backspace" && !D && r.length > 0 && n(r[r.length - 1]), U.key === "Escape" && (O(!1), (L = N.current) == null || L.blur());
  };
  return /* @__PURE__ */ a.jsxs("div", { ref: S, className: "relative", children: [
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border border-transparent bg-gray-150 px-3 py-1 text-sm transition-colors focus-within:border-green focus-within:bg-transparent focus-within:shadow-[0_0_0_2px_rgba(48,207,67,.25)] dark:bg-gray-900",
        role: "combobox",
        onClick: () => {
          var U;
          (U = N.current) == null || U.focus(), O(!0);
        },
        children: [
          /* @__PURE__ */ a.jsx(ys, { labels: e, onToggle: n }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              ref: N,
              className: "outline-hidden min-w-[80px] flex-1 bg-transparent text-sm placeholder:text-muted-foreground",
              placeholder: e.length === 0 ? "Search labels..." : "",
              value: D,
              onChange: (U) => {
                P(U.target.value), w || O(!0);
              },
              onFocus: () => O(!0),
              onKeyDown: $
            }
          )
        ]
      }
    ),
    w && /* @__PURE__ */ a.jsx("div", { className: "absolute left-0 top-full z-50 mt-1 w-full rounded-md border bg-white shadow-md dark:bg-gray-950", children: s ? /* @__PURE__ */ a.jsx("div", { className: "flex items-center justify-center py-6 text-sm text-muted-foreground", children: "Loading labels..." }) : /* @__PURE__ */ a.jsx(Tr, { shouldFilter: !1, children: /* @__PURE__ */ a.jsx(Rr, { className: "max-h-64 overflow-y-auto", children: /* @__PURE__ */ a.jsx(
      gs,
      {
        canCreateFromSearch: i,
        isCreating: f,
        isDuplicateName: E,
        labels: t,
        search: D,
        selectedSlugs: r,
        onCreate: d,
        onDelete: y,
        onEdit: u,
        onSearchClear: () => P(""),
        onToggle: n
      }
    ) }) }) })
  ] });
}, Ut = "LabelsResponseType", bs = Ir({
  dataType: Ut,
  path: "/labels/"
}), yo = Fr({
  method: "POST",
  path: () => "/labels/",
  body: (t) => ({ labels: [t] }),
  updateQueries: {
    dataType: Ut,
    emberUpdateType: "createOrUpdate",
    update: (t, e) => {
      const r = e;
      return r && { ...r, labels: r.labels.concat(t.labels) };
    }
  }
}), bo = Fr({
  method: "PUT",
  path: (t) => `/labels/${t.id}/`,
  body: (t) => ({ labels: [t] }),
  updateQueries: {
    dataType: Ut,
    emberUpdateType: "createOrUpdate",
    update: (t, e) => {
      const r = e;
      return r && {
        ...r,
        labels: r.labels.map((n) => t.labels.find(({ id: s }) => s === n.id) || n)
      };
    }
  }
}), vo = Fr({
  method: "DELETE",
  path: (t) => `/labels/${t}/`,
  updateQueries: {
    dataType: Ut,
    emberUpdateType: "delete",
    update: (t, e, r) => {
      const n = e;
      return n && { ...n, labels: n.labels.filter((s) => s.id !== r) };
    }
  }
});
function Bt({
  selectedSlugs: t,
  onSelectionChange: e
}) {
  const { data: r, isLoading: n } = bs({ searchParams: { limit: "100" } }), s = de(() => (r == null ? void 0 : r.labels) || [], [r]), { mutateAsync: i, isLoading: d } = yo(), { mutateAsync: f } = bo(), { mutateAsync: u } = vo(), y = Se(t);
  y.current = t;
  const E = te((S) => {
    const $ = y.current;
    $.includes(S) ? e($.filter((U) => U !== S)) : e([...$, S]);
  }, [e]), w = te((S, $) => {
    const U = S.trim().toLowerCase();
    return s.some((L) => L.name.toLowerCase() === U && L.id !== $);
  }, [s]), O = te((S) => {
    const $ = S.trim();
    return $ ? !w($) : !1;
  }, [w]), D = te(async (S) => {
    var W;
    const $ = S.trim();
    if (!$ || w($))
      return;
    const U = await i({ name: $ });
    return (W = U == null ? void 0 : U.labels) == null ? void 0 : W[0];
  }, [i, w]), P = te(async (S, $) => {
    var T;
    const U = $.trim();
    if (!U || w(U, S))
      return;
    const L = s.find((R) => R.id === S), W = await f({ id: S, name: U }), B = (T = W == null ? void 0 : W.labels) == null ? void 0 : T[0];
    if (L && B && L.slug !== B.slug) {
      const R = y.current;
      R.includes(L.slug) && e(R.map((c) => c === L.slug ? B.slug : c));
    }
  }, [f, w, s, e]), N = te(async (S) => {
    const $ = s.find((U) => U.id === S);
    if (await u(S), $) {
      const U = y.current;
      U.includes($.slug) && e(U.filter((L) => L !== $.slug));
    }
  }, [u, s, e]);
  return {
    labels: s,
    selectedSlugs: t,
    isLoading: n,
    toggleLabel: E,
    createLabel: D,
    editLabel: P,
    deleteLabel: N,
    isDuplicateName: w,
    canCreateFromSearch: O,
    isCreating: d
  };
}
const xo = ({ values: t, onChange: e }) => {
  const r = Bt({
    selectedSlugs: t,
    onSelectionChange: e
  });
  return /* @__PURE__ */ a.jsx(
    $t,
    {
      isDuplicateName: r.isDuplicateName,
      labels: r.labels,
      selectedSlugs: r.selectedSlugs,
      inline: !0,
      onDelete: r.deleteLabel,
      onEdit: r.editLabel,
      onToggle: r.toggleLabel
    }
  );
};
function _o({
  open: t,
  memberCount: e,
  onOpenChange: r,
  onConfirm: n,
  isLoading: s = !1
}) {
  const [i, d] = ce([]), f = Bt({
    selectedSlugs: i,
    onSelectionChange: d
  }), u = te((E) => {
    E || d([]), r(E);
  }, [r]), y = () => {
    const E = f.labels.filter((w) => i.includes(w.slug)).map((w) => w.id);
    E.length > 0 && n(E);
  };
  return /* @__PURE__ */ a.jsx(nt, { open: t, onOpenChange: u, children: /* @__PURE__ */ a.jsxs(st, { className: "gap-5", onOpenAutoFocus: (E) => E.preventDefault(), children: [
    /* @__PURE__ */ a.jsx(at, { children: /* @__PURE__ */ a.jsxs(it, { children: [
      "Add label to ",
      e.toLocaleString(),
      " ",
      e === 1 ? "member" : "members"
    ] }) }),
    /* @__PURE__ */ a.jsx(
      $t,
      {
        canCreateFromSearch: f.canCreateFromSearch,
        isCreating: f.isCreating,
        isDuplicateName: f.isDuplicateName,
        isLoading: f.isLoading,
        labels: f.labels,
        selectedSlugs: f.selectedSlugs,
        onCreate: f.createLabel,
        onDelete: f.deleteLabel,
        onEdit: f.editLabel,
        onToggle: f.toggleLabel
      }
    ),
    /* @__PURE__ */ a.jsxs(Re, { children: [
      /* @__PURE__ */ a.jsx(se, { variant: "outline", onClick: () => u(!1), children: "Cancel" }),
      /* @__PURE__ */ a.jsx(
        se,
        {
          disabled: i.length === 0 || s,
          onClick: y,
          children: s ? "Adding..." : i.length > 1 ? `Add ${i.length} labels` : "Add label"
        }
      )
    ] })
  ] }) });
}
function wo({
  open: t,
  memberCount: e,
  nql: r,
  search: n,
  onOpenChange: s,
  onConfirm: i,
  isLoading: d = !1
}) {
  const [f, u] = ce([]), { data: y, isLoading: E } = pa({
    searchParams: {
      ...r ? { filter: r } : {},
      ...n ? { search: n } : {},
      include: "labels",
      limit: "all",
      fields: "id"
    },
    enabled: t
  }), w = de(() => {
    const S = /* @__PURE__ */ new Set();
    for (const $ of (y == null ? void 0 : y.members) || [])
      for (const U of $.labels || [])
        S.add(U.slug);
    return S;
  }, [y]), O = Bt({
    selectedSlugs: f,
    onSelectionChange: u
  }), D = de(() => O.labels.filter((S) => w.has(S.slug)), [O.labels, w]), P = te((S) => {
    S || u([]), s(S);
  }, [s]), N = () => {
    const S = O.labels.filter(($) => f.includes($.slug)).map(($) => $.id);
    S.length > 0 && i(S);
  };
  return /* @__PURE__ */ a.jsx(nt, { open: t, onOpenChange: P, children: /* @__PURE__ */ a.jsxs(st, { className: "gap-5", onOpenAutoFocus: (S) => S.preventDefault(), children: [
    /* @__PURE__ */ a.jsx(at, { children: /* @__PURE__ */ a.jsxs(it, { children: [
      "Remove label from ",
      e.toLocaleString(),
      " ",
      e === 1 ? "member" : "members"
    ] }) }),
    /* @__PURE__ */ a.jsx(
      $t,
      {
        isDuplicateName: O.isDuplicateName,
        isLoading: O.isLoading || E,
        labels: D,
        selectedSlugs: O.selectedSlugs,
        onDelete: O.deleteLabel,
        onEdit: O.editLabel,
        onToggle: O.toggleLabel
      }
    ),
    /* @__PURE__ */ a.jsxs(Re, { children: [
      /* @__PURE__ */ a.jsx(se, { variant: "outline", onClick: () => P(!1), children: "Cancel" }),
      /* @__PURE__ */ a.jsx(
        se,
        {
          disabled: f.length === 0 || d,
          onClick: N,
          children: d ? "Removing..." : f.length > 1 ? `Remove ${f.length} labels` : "Remove label"
        }
      )
    ] })
  ] }) });
}
function So({
  open: t,
  newsletters: e,
  memberCount: r,
  onOpenChange: n,
  onConfirm: s,
  isLoading: i = !1
}) {
  const [d, f] = ce("all"), [u, y] = ce([]), [E, w] = ce(""), [O, D] = ce(!1), P = Se(null), N = Se(null);
  ke(() => {
    t || (f("all"), y([]), w(""), D(!1));
  }, [t]), ke(() => {
    if (!O)
      return;
    const T = (R) => {
      P.current && !P.current.contains(R.target) && D(!1);
    };
    return document.addEventListener("pointerdown", T), () => document.removeEventListener("pointerdown", T);
  }, [O]);
  const S = (T) => {
    T || (f("all"), y([]), w(""), D(!1)), n(T);
  }, $ = te((T) => {
    y((R) => R.includes(T) ? R.filter((c) => c !== T) : [...R, T]);
  }, []), U = e.length >= 2, L = () => {
    s(!U || d === "all" ? null : u);
  }, W = i || U && d === "selected" && u.length === 0, B = r === 1 ? "member" : "members";
  return /* @__PURE__ */ a.jsx(nt, { open: t, onOpenChange: S, children: /* @__PURE__ */ a.jsxs(st, { className: "gap-5", children: [
    /* @__PURE__ */ a.jsx(at, { children: /* @__PURE__ */ a.jsx(it, { children: "Unsubscribe members" }) }),
    U ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs(
        "div",
        {
          "aria-label": "Unsubscribe scope",
          className: "flex flex-col gap-3",
          role: "radiogroup",
          children: [
            /* @__PURE__ */ a.jsxs("label", { className: "flex cursor-pointer items-start gap-3", children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  checked: d === "all",
                  className: "mt-0.5 size-4 cursor-pointer accent-black",
                  name: "unsubscribe-mode",
                  type: "radio",
                  value: "all",
                  onChange: () => f("all")
                }
              ),
              /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ a.jsx("span", { className: "text-sm font-semibold", children: "Unsubscribe from all newsletters" }),
                /* @__PURE__ */ a.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                  r.toLocaleString(),
                  " ",
                  B,
                  " will be unsubscribed from",
                  " ",
                  e.length,
                  " ",
                  e.length === 1 ? "newsletter" : "newsletters",
                  "."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ a.jsxs("label", { className: "flex cursor-pointer items-start gap-3", children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  checked: d === "selected",
                  className: "mt-0.5 size-4 cursor-pointer accent-black",
                  name: "unsubscribe-mode",
                  type: "radio",
                  value: "selected",
                  onChange: () => f("selected")
                }
              ),
              /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ a.jsx("span", { className: "text-sm font-semibold", children: "Unsubscribe from selected newsletters" }),
                /* @__PURE__ */ a.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                  "Select which newsletters to unsubscribe",
                  " ",
                  r.toLocaleString(),
                  " ",
                  B,
                  " from."
                ] })
              ] })
            ] })
          ]
        }
      ),
      d === "selected" && /* @__PURE__ */ a.jsxs("div", { ref: P, className: "relative space-y-2", children: [
        /* @__PURE__ */ a.jsx(
          "label",
          {
            className: "text-sm font-semibold",
            htmlFor: "newsletter-search",
            children: "Newsletters"
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: "flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border bg-background px-3 py-1 text-sm",
            onClick: () => {
              var T;
              (T = N.current) == null || T.focus(), D(!0);
            },
            children: [
              u.map((T) => {
                const R = e.find(
                  (c) => c.id === T
                );
                return R ? /* @__PURE__ */ a.jsxs(
                  Yn,
                  {
                    className: "cursor-pointer gap-1 pr-1",
                    variant: "outline",
                    onClick: (c) => {
                      c.stopPropagation(), $(T);
                    },
                    children: [
                      R.name,
                      /* @__PURE__ */ a.jsx(Mt, { className: "size-3" })
                    ]
                  },
                  T
                ) : null;
              }),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  ref: N,
                  className: "outline-hidden min-w-[80px] flex-1 bg-transparent py-1 text-sm placeholder:text-muted-foreground",
                  id: "newsletter-search",
                  placeholder: u.length === 0 ? "Search newsletters..." : "",
                  value: E,
                  onChange: (T) => {
                    w(T.target.value), O || D(!0);
                  },
                  onFocus: () => D(!0),
                  onKeyDown: (T) => {
                    var R;
                    T.key === "Escape" && (D(!1), (R = N.current) == null || R.blur()), T.key === "Backspace" && !E && u.length > 0 && $(
                      u[u.length - 1]
                    );
                  }
                }
              )
            ]
          }
        ),
        O && /* @__PURE__ */ a.jsx("div", { className: "absolute left-0 top-full z-50 mt-1 w-full rounded-md border bg-white shadow-md dark:bg-gray-950", children: /* @__PURE__ */ a.jsx(Tr, { shouldFilter: !1, children: /* @__PURE__ */ a.jsxs(Rr, { className: "max-h-64 overflow-y-auto", children: [
          /* @__PURE__ */ a.jsx(qn, { children: "No newsletters found." }),
          e.filter(
            (T) => T.name.toLowerCase().includes(
              E.toLowerCase()
            )
          ).map((T) => /* @__PURE__ */ a.jsxs(
            Cr,
            {
              value: T.name,
              onSelect: () => $(
                T.id
              ),
              children: [
                T.name,
                u.includes(
                  T.id
                ) && /* @__PURE__ */ a.jsx(wa, {})
              ]
            },
            T.id
          ))
        ] }) }) })
      ] })
    ] }) : /* @__PURE__ */ a.jsxs("p", { className: "text-sm text-muted-foreground", children: [
      "Are you sure you want to unsubscribe",
      " ",
      r.toLocaleString(),
      " ",
      B,
      " from all newsletters? They will no longer receive any email newsletters from you."
    ] }),
    /* @__PURE__ */ a.jsxs(Re, { children: [
      /* @__PURE__ */ a.jsx(
        se,
        {
          variant: "outline",
          onClick: () => S(!1),
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ a.jsx(
        se,
        {
          disabled: W,
          variant: "destructive",
          onClick: L,
          children: i ? "Unsubscribing..." : "Unsubscribe"
        }
      )
    ] })
  ] }) });
}
function Eo({
  open: t,
  memberCount: e,
  onOpenChange: r,
  onConfirm: n,
  onExportBackup: s,
  isLoading: i = !1
}) {
  const [d, f] = ce(!1), u = (E) => {
    E || f(!1), r(E);
  }, y = async () => {
    if (!(e < 1 || i || d))
      try {
        f(!0), await s(), n();
      } catch {
      } finally {
        f(!1);
      }
  };
  return /* @__PURE__ */ a.jsx(nt, { open: t, onOpenChange: u, children: /* @__PURE__ */ a.jsxs(st, { className: "gap-5", children: [
    /* @__PURE__ */ a.jsx(at, { children: /* @__PURE__ */ a.jsx(it, { children: "Delete selected members?" }) }),
    /* @__PURE__ */ a.jsx("div", { className: "text-sm", children: e > 0 ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { children: [
        "You're about to delete ",
        /* @__PURE__ */ a.jsxs("strong", { children: [
          e.toLocaleString(),
          " ",
          e === 1 ? "member" : "members"
        ] }),
        ". This is permanent! All Ghost data will be deleted, this will have no effect on subscriptions in Stripe."
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "mt-4", children: "A backup of your selection will be automatically downloaded to your device before deletion." })
    ] }) : /* @__PURE__ */ a.jsx("p", { children: "No members are selected." }) }),
    /* @__PURE__ */ a.jsxs(Re, { children: [
      /* @__PURE__ */ a.jsx(se, { variant: "outline", onClick: () => u(!1), children: "Cancel" }),
      /* @__PURE__ */ a.jsx(
        se,
        {
          disabled: i || d || e < 1,
          variant: "destructive",
          onClick: y,
          children: i || d ? "Deleting..." : "Download backup & delete members"
        }
      )
    ] })
  ] }) });
}
function jo({ fileError: t, onClose: e, onDropAccepted: r, onDropRejected: n }) {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "mt-5 space-y-5", children: [
      /* @__PURE__ */ a.jsxs(ns, { variant: "info", children: [
        "Need some help? ",
        /* @__PURE__ */ a.jsx("a", { className: "font-semibold underline", href: "https://ghost.org/help/import-members/", rel: "noopener noreferrer", target: "_blank", children: "Learn more" }),
        " about importing members or ",
        /* @__PURE__ */ a.jsx("a", { className: "font-semibold underline", href: "https://static.ghost.org/v4.0.0/files/member-import-template.csv", rel: "noopener noreferrer", target: "_blank", children: "download a sample CSV file" }),
        "."
      ] }),
      t && /* @__PURE__ */ a.jsxs("div", { className: "flex items-start gap-2 text-sm text-red-600", children: [
        /* @__PURE__ */ a.jsx(Qn, { className: "mt-0.5 size-4 shrink-0" }),
        /* @__PURE__ */ a.jsx("p", { children: t })
      ] }),
      /* @__PURE__ */ a.jsx(
        ms,
        {
          accept: {
            "text/csv": [".csv"],
            "application/vnd.ms-excel": [".csv"]
          },
          "aria-label": "Select or drop a CSV file",
          onDropAccepted: (s) => {
            const i = s[0];
            i && r(i);
          },
          onDropRejected: n,
          children: ({ isDragActive: s, isDragReject: i }) => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx(Zn, { className: "mb-2 size-6 text-grey-600" }),
            /* @__PURE__ */ a.jsx("span", { className: "text-sm text-grey-700", children: i ? "The file type you uploaded is not supported" : s ? "Drop CSV file to upload" : "Select or drop a CSV file" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx(Re, { className: "mt-5", children: /* @__PURE__ */ a.jsx(se, { variant: "outline", onClick: e, children: "Close" }) })
  ] });
}
const Ao = [
  { label: "Email", value: "email" },
  { label: "Name", value: "name" },
  { label: "Note", value: "note" },
  { label: "Subscribed to emails", value: "subscribed_to_emails" },
  { label: "Stripe Customer ID", value: "stripe_customer_id" },
  { label: "Complimentary plan", value: "complimentary_plan" },
  { label: "Labels", value: "labels" },
  { label: "Created at", value: "created_at" }
], Oo = [
  "email",
  "name",
  "note",
  "subscribed_to_emails",
  "complimentary_plan",
  "stripe_customer_id",
  "labels",
  "created_at"
], ko = ["email"], Po = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
class Mr {
  constructor(e) {
    qr(this, "_mapping");
    if (this._mapping = {}, e)
      for (const [r, n] of Object.entries(e))
        this._mapping[n] = r;
  }
  get(e) {
    return this._mapping[e] ?? null;
  }
  toJSON() {
    return { ...this._mapping };
  }
  getKeyByValue(e) {
    for (const [r, n] of Object.entries(this._mapping))
      if (n === e)
        return r;
    return null;
  }
  updateMapping(e, r) {
    const n = new Mr({});
    if (n._mapping = { ...this._mapping }, r)
      for (const s in n._mapping)
        n._mapping[s] === r && (n._mapping[s] = null);
    return n._mapping[e] = r, n;
  }
}
function Do(t, e = 30) {
  if (!t || t.length <= e)
    return t;
  const r = [];
  return Object.keys(t[0]).forEach((s) => {
    const i = t.filter((f) => f[s] && f[s].trim() !== "");
    let d = [];
    if (i.length <= e)
      d = i;
    else {
      const f = Math.floor(e / 3), u = f, y = e - f - u, E = i.slice(0, f), w = u > 0 ? i.slice(-u) : [], O = Math.max(0, Math.floor(i.length / 2) - Math.floor(y / 2)), D = i.slice(O, O + y);
      d = [...E, ...D, ...w].slice(0, e);
    }
    d.forEach((f, u) => {
      r[u] || (r[u] = {}), r[u][s] = f[s];
    });
  }), r;
}
function No(t) {
  const e = Do(t), r = {};
  if (t.length > 0)
    for (const s of Object.keys(t[0])) {
      if (!r.name && /name/i.test(s)) {
        r.name = s;
        continue;
      }
      !r[s] && Oo.includes(s) && !ko.includes(s) && (r[s] = s);
    }
  let n = 0;
  for (; n <= e.length - 1 && !r.email; ) {
    const s = e[n];
    for (const [i, d] of Object.entries(s))
      !r.email && d && Po.test(d) && (r.email = i);
    n += 1;
  }
  return r;
}
function To(t) {
  return t.replace(
    "Value in [members.email] cannot be blank.",
    "Missing email address"
  ).replace(
    "Value in [members.note] exceeds maximum length of 2000 characters.",
    "Note is too long"
  ).replace(
    "Value in [members.subscribed] must be one of true, false, 0 or 1.",
    'Value of "Subscribed to emails" must be "true" or "false"'
  ).replace(
    "Validation (isEmail) failed for email",
    "Invalid email address"
  ).replace(
    /No such customer:[^,]*/,
    "Could not find Stripe customer"
  );
}
function Ro({
  status: t,
  fileData: e,
  mapping: r,
  mappingError: n,
  showMappingErrors: s,
  membersCount: i,
  dataPreviewIndex: d,
  hasPrevRecord: f,
  hasNextRecord: u,
  labelPicker: y,
  onUpdateMapping: E,
  onDataPreviewIndexChange: w,
  onStartOver: O,
  onUpload: D
}) {
  const P = e && e.length > 0 && r ? Object.entries(e[d] || {}).map(([N, S]) => ({
    key: N,
    value: S,
    mapTo: r.get(N)
  })) : [];
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx("div", { className: "mt-5 space-y-5", children: e === null ? /* @__PURE__ */ a.jsx("div", { className: "flex items-center justify-center rounded-md border bg-muted p-10", children: /* @__PURE__ */ a.jsx(Ot, { size: "md" }) }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx("div", { className: Oe(
        "overflow-hidden rounded-md border",
        s && n && "border-red-500"
      ), children: /* @__PURE__ */ a.jsx("div", { className: "max-h-[400px] overflow-auto", children: /* @__PURE__ */ a.jsxs(ti, { className: "table-fixed", children: [
        /* @__PURE__ */ a.jsx(ri, { children: /* @__PURE__ */ a.jsxs(Xt, { children: [
          /* @__PURE__ */ a.jsx(er, { className: "w-1/3", children: "Field" }),
          /* @__PURE__ */ a.jsx(er, { className: "w-1/3", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ a.jsxs("span", { children: [
              "Sample data ",
              /* @__PURE__ */ a.jsxs("span", { className: "text-muted-foreground", children: [
                "(#",
                (d + 1).toLocaleString(),
                ")"
              ] })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  "aria-label": "Show previous sample row",
                  className: Oe(
                    "rounded p-0.5 hover:bg-muted",
                    !f && "cursor-default opacity-30"
                  ),
                  disabled: !f || t === "UPLOADING",
                  type: "button",
                  onClick: () => w(d - 1),
                  children: /* @__PURE__ */ a.jsx(Ia, { className: "size-4" })
                }
              ),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  "aria-label": "Show next sample row",
                  className: Oe(
                    "rounded p-0.5 hover:bg-muted",
                    !u && "cursor-default opacity-30"
                  ),
                  disabled: !u || t === "UPLOADING",
                  type: "button",
                  onClick: () => w(d + 1),
                  children: /* @__PURE__ */ a.jsx(si, { className: "size-4" })
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ a.jsx(er, { className: "w-1/3", children: "Import as" })
        ] }) }),
        /* @__PURE__ */ a.jsx(ni, { children: P.length > 0 ? P.map((N) => /* @__PURE__ */ a.jsxs(Xt, { className: Oe(!N.mapTo && "bg-muted"), children: [
          /* @__PURE__ */ a.jsx(ht, { className: "break-all text-sm font-medium", children: N.key }),
          /* @__PURE__ */ a.jsx(ht, { className: Oe("break-all text-sm", !N.value && "text-muted-foreground"), children: N.value || " " }),
          /* @__PURE__ */ a.jsx(ht, { children: /* @__PURE__ */ a.jsxs(
            Qa,
            {
              disabled: t === "UPLOADING",
              value: N.mapTo || "__not_imported__",
              onValueChange: (S) => {
                E(N.key, S === "__not_imported__" ? null : S);
              },
              children: [
                /* @__PURE__ */ a.jsx(Za, { className: Oe("h-8 text-sm", !N.mapTo && "text-muted-foreground"), children: /* @__PURE__ */ a.jsx(Xa, {}) }),
                /* @__PURE__ */ a.jsxs(ei, { children: [
                  /* @__PURE__ */ a.jsx(tn, { value: "__not_imported__", children: "Not imported" }),
                  Ao.map((S) => /* @__PURE__ */ a.jsx(tn, { value: S.value, children: S.label }, S.value))
                ] })
              ]
            }
          ) })
        ] }, N.key)) : /* @__PURE__ */ a.jsx(Xt, { children: /* @__PURE__ */ a.jsx(ht, { className: "text-muted-foreground", colSpan: 3, children: "No data found in the uploaded CSV." }) }) })
      ] }) }) }),
      s && n && /* @__PURE__ */ a.jsx("p", { className: "text-sm text-red-600", children: n }),
      i > 0 && /* @__PURE__ */ a.jsx("p", { className: "text-sm text-muted-foreground", children: "If an email address in your CSV matches an existing member, they will be updated with the mapped values." }),
      /* @__PURE__ */ a.jsxs("div", { className: "mt-5", children: [
        /* @__PURE__ */ a.jsx("label", { className: "mb-1 block text-sm font-semibold", children: "Label these members" }),
        /* @__PURE__ */ a.jsx(
          $t,
          {
            canCreateFromSearch: y.canCreateFromSearch,
            isCreating: y.isCreating,
            isDuplicateName: y.isDuplicateName,
            isLoading: y.isLoading,
            labels: y.labels,
            selectedSlugs: y.selectedSlugs,
            onCreate: y.createLabel,
            onDelete: y.deleteLabel,
            onEdit: y.editLabel,
            onToggle: y.toggleLabel
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsxs(Re, { className: "mt-5", children: [
      /* @__PURE__ */ a.jsx(
        se,
        {
          disabled: t === "UPLOADING",
          variant: "outline",
          onClick: O,
          children: "Start over"
        }
      ),
      /* @__PURE__ */ a.jsx(
        se,
        {
          disabled: t === "UPLOADING" || i === 0,
          onClick: D,
          children: t === "UPLOADING" ? /* @__PURE__ */ a.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ a.jsx(Ot, { color: "light", size: "sm" }),
            "Uploading"
          ] }) : i > 0 ? `Import ${i.toLocaleString()} ${i === 1 ? "member" : "members"}` : "Import members"
        }
      )
    ] })
  ] });
}
function Co({ onUploadAnotherFile: t, onClose: e }) {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx("div", { className: "mt-5", children: /* @__PURE__ */ a.jsx("p", { className: "text-sm", children: "Your import is being processed, and you'll receive a confirmation email as soon as it's complete. Usually this only takes a few minutes, but larger imports may take longer." }) }),
    /* @__PURE__ */ a.jsxs(Re, { className: "mt-5", children: [
      /* @__PURE__ */ a.jsx(se, { variant: "outline", onClick: t, children: "Upload another file" }),
      /* @__PURE__ */ a.jsx(se, { onClick: e, children: "Got it" })
    ] })
  ] });
}
function Io({ importResponse: t, onReset: e, onClose: r }) {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "mt-5 space-y-4", children: [
      t.importedCount === 0 ? /* @__PURE__ */ a.jsxs("p", { className: "text-sm", children: [
        "No members were added",
        t.errorCount > 0 ? " due to the following errors:" : "."
      ] }) : /* @__PURE__ */ a.jsxs("p", { className: "text-sm", children: [
        "A total of ",
        /* @__PURE__ */ a.jsx("strong", { children: t.importedCount.toLocaleString() }),
        " ",
        t.importedCount === 1 ? "person was" : "people were",
        " successfully added or updated in your list of members, and now have access to your site."
      ] }),
      t.errorCount > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        t.importedCount > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("hr", { className: "border-grey-200" }),
          /* @__PURE__ */ a.jsxs("p", { className: "text-sm", children: [
            /* @__PURE__ */ a.jsx("strong", { children: t.errorCount.toLocaleString() }),
            " ",
            t.errorCount === 1 ? "member was" : "members were",
            " skipped due to the following errors:"
          ] })
        ] }),
        /* @__PURE__ */ a.jsx("ul", { className: "list-inside list-disc space-y-1 text-sm text-muted-foreground", children: t.errorList.map((n) => /* @__PURE__ */ a.jsxs("li", { children: [
          n.message,
          " (",
          n.count,
          ")"
        ] }, n.message)) })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(Re, { className: "mt-5", children: t.errorCount > 0 ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(se, { variant: "outline", asChild: !0, children: /* @__PURE__ */ a.jsx("a", { download: t.errorCsvName, href: t.errorCsvUrl, children: "Download error file" }) }),
      t.importedCount === 0 ? /* @__PURE__ */ a.jsx(se, { onClick: e, children: "Try again" }) : /* @__PURE__ */ a.jsx(se, { onClick: r, children: "View members" })
    ] }) : /* @__PURE__ */ a.jsx(a.Fragment, { children: t.importedCount === 0 ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(se, { variant: "outline", onClick: r, children: "Close" }),
      /* @__PURE__ */ a.jsx(se, { onClick: e, children: "Try again" })
    ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(se, { variant: "outline", onClick: e, children: "Upload another file" }),
      /* @__PURE__ */ a.jsx(se, { onClick: r, children: "View members" })
    ] }) }) })
  ] });
}
function Fo({ errorMessage: t, showTryAgainButton: e, onTryAgain: r, onClose: n }) {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx("div", { className: "mt-5", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-start gap-2 text-sm text-red-600", children: [
      /* @__PURE__ */ a.jsx(Qn, { className: "mt-0.5 size-4 shrink-0" }),
      /* @__PURE__ */ a.jsx("p", { children: t })
    ] }) }),
    /* @__PURE__ */ a.jsxs(Re, { className: "mt-5", children: [
      e && /* @__PURE__ */ a.jsx(se, { variant: "outline", onClick: r, children: "Try again" }),
      /* @__PURE__ */ a.jsx(se, { onClick: n, children: "OK" })
    ] })
  ] });
}
var vs = { exports: {} };
/* @license
Papa Parse
v5.3.2
https://github.com/mholt/PapaParse
License: MIT
*/
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(Dr, function r() {
    var n = typeof self < "u" ? self : typeof window < "u" ? window : n !== void 0 ? n : {}, s = !n.document && !!n.postMessage, i = s && /blob:/i.test((n.location || {}).protocol), d = {}, f = 0, u = { parse: function(c, l) {
      var x = (l = l || {}).dynamicTyping || !1;
      if (R(x) && (l.dynamicTypingFunction = x, x = {}), l.dynamicTyping = x, l.transform = !!R(l.transform) && l.transform, l.worker && u.WORKERS_SUPPORTED) {
        var j = function() {
          if (!u.WORKERS_SUPPORTED) return !1;
          var _ = (A = n.URL || n.webkitURL || null, I = r.toString(), u.BLOB_URL || (u.BLOB_URL = A.createObjectURL(new Blob(["(", I, ")();"], { type: "text/javascript" })))), h = new n.Worker(_), A, I;
          return h.onmessage = U, h.id = f++, d[h.id] = h;
        }();
        return j.userStep = l.step, j.userChunk = l.chunk, j.userComplete = l.complete, j.userError = l.error, l.step = R(l.step), l.chunk = R(l.chunk), l.complete = R(l.complete), l.error = R(l.error), delete l.worker, void j.postMessage({ input: c, config: l, workerId: j.id });
      }
      var m = null;
      return u.NODE_STREAM_INPUT, typeof c == "string" ? m = l.download ? new w(l) : new D(l) : c.readable === !0 && R(c.read) && R(c.on) ? m = new P(l) : (n.File && c instanceof File || c instanceof Object) && (m = new O(l)), m.stream(c);
    }, unparse: function(c, l) {
      var x = !1, j = !0, m = ",", _ = `\r
`, h = '"', A = h + h, I = !1, p = null, ee = !1;
      (function() {
        if (typeof l == "object") {
          if (typeof l.delimiter != "string" || u.BAD_DELIMITERS.filter(function(o) {
            return l.delimiter.indexOf(o) !== -1;
          }).length || (m = l.delimiter), (typeof l.quotes == "boolean" || typeof l.quotes == "function" || Array.isArray(l.quotes)) && (x = l.quotes), typeof l.skipEmptyLines != "boolean" && typeof l.skipEmptyLines != "string" || (I = l.skipEmptyLines), typeof l.newline == "string" && (_ = l.newline), typeof l.quoteChar == "string" && (h = l.quoteChar), typeof l.header == "boolean" && (j = l.header), Array.isArray(l.columns)) {
            if (l.columns.length === 0) throw new Error("Option columns is empty");
            p = l.columns;
          }
          l.escapeChar !== void 0 && (A = l.escapeChar + h), (typeof l.escapeFormulae == "boolean" || l.escapeFormulae instanceof RegExp) && (ee = l.escapeFormulae instanceof RegExp ? l.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var F = new RegExp(S(h), "g");
      if (typeof c == "string" && (c = JSON.parse(c)), Array.isArray(c)) {
        if (!c.length || Array.isArray(c[0])) return k(null, c, I);
        if (typeof c[0] == "object") return k(p || Object.keys(c[0]), c, I);
      } else if (typeof c == "object") return typeof c.data == "string" && (c.data = JSON.parse(c.data)), Array.isArray(c.data) && (c.fields || (c.fields = c.meta && c.meta.fields || p), c.fields || (c.fields = Array.isArray(c.data[0]) ? c.fields : typeof c.data[0] == "object" ? Object.keys(c.data[0]) : []), Array.isArray(c.data[0]) || typeof c.data[0] == "object" || (c.data = [c.data])), k(c.fields || [], c.data || [], I);
      throw new Error("Unable to serialize unrecognized input");
      function k(o, g, b) {
        var V = "";
        typeof o == "string" && (o = JSON.parse(o)), typeof g == "string" && (g = JSON.parse(g));
        var H = Array.isArray(o) && 0 < o.length, q = !Array.isArray(g[0]);
        if (H && j) {
          for (var K = 0; K < o.length; K++) 0 < K && (V += m), V += ae(o[K], K);
          0 < g.length && (V += _);
        }
        for (var C = 0; C < g.length; C++) {
          var z = H ? o.length : g[C].length, J = !1, Q = H ? Object.keys(g[C]).length === 0 : g[C].length === 0;
          if (b && !H && (J = b === "greedy" ? g[C].join("").trim() === "" : g[C].length === 1 && g[C][0].length === 0), b === "greedy" && H) {
            for (var Z = [], X = 0; X < z; X++) {
              var ne = q ? o[X] : X;
              Z.push(g[C][ne]);
            }
            J = Z.join("").trim() === "";
          }
          if (!J) {
            for (var Y = 0; Y < z; Y++) {
              0 < Y && !Q && (V += m);
              var ge = H && q ? o[Y] : Y;
              V += ae(g[C][ge], Y);
            }
            C < g.length - 1 && (!b || 0 < z && !Q) && (V += _);
          }
        }
        return V;
      }
      function ae(o, g) {
        if (o == null) return "";
        if (o.constructor === Date) return JSON.stringify(o).slice(1, 25);
        var b = !1;
        ee && typeof o == "string" && ee.test(o) && (o = "'" + o, b = !0);
        var V = o.toString().replace(F, A);
        return (b = b || x === !0 || typeof x == "function" && x(o, g) || Array.isArray(x) && x[g] || function(H, q) {
          for (var K = 0; K < q.length; K++) if (-1 < H.indexOf(q[K])) return !0;
          return !1;
        }(V, u.BAD_DELIMITERS) || -1 < V.indexOf(m) || V.charAt(0) === " " || V.charAt(V.length - 1) === " ") ? h + V + h : V;
      }
    } };
    if (u.RECORD_SEP = "", u.UNIT_SEP = "", u.BYTE_ORDER_MARK = "\uFEFF", u.BAD_DELIMITERS = ["\r", `
`, '"', u.BYTE_ORDER_MARK], u.WORKERS_SUPPORTED = !s && !!n.Worker, u.NODE_STREAM_INPUT = 1, u.LocalChunkSize = 10485760, u.RemoteChunkSize = 5242880, u.DefaultDelimiter = ",", u.Parser = $, u.ParserHandle = N, u.NetworkStreamer = w, u.FileStreamer = O, u.StringStreamer = D, u.ReadableStreamStreamer = P, n.jQuery) {
      var y = n.jQuery;
      y.fn.parse = function(c) {
        var l = c.config || {}, x = [];
        return this.each(function(_) {
          if (!(y(this).prop("tagName").toUpperCase() === "INPUT" && y(this).attr("type").toLowerCase() === "file" && n.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var h = 0; h < this.files.length; h++) x.push({ file: this.files[h], inputElem: this, instanceConfig: y.extend({}, l) });
        }), j(), this;
        function j() {
          if (x.length !== 0) {
            var _, h, A, I, p = x[0];
            if (R(c.before)) {
              var ee = c.before(p.file, p.inputElem);
              if (typeof ee == "object") {
                if (ee.action === "abort") return _ = "AbortError", h = p.file, A = p.inputElem, I = ee.reason, void (R(c.error) && c.error({ name: _ }, h, A, I));
                if (ee.action === "skip") return void m();
                typeof ee.config == "object" && (p.instanceConfig = y.extend(p.instanceConfig, ee.config));
              } else if (ee === "skip") return void m();
            }
            var F = p.instanceConfig.complete;
            p.instanceConfig.complete = function(k) {
              R(F) && F(k, p.file, p.inputElem), m();
            }, u.parse(p.file, p.instanceConfig);
          } else R(c.complete) && c.complete();
        }
        function m() {
          x.splice(0, 1), j();
        }
      };
    }
    function E(c) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(l) {
        var x = B(l);
        x.chunkSize = parseInt(x.chunkSize), l.step || l.chunk || (x.chunkSize = null), this._handle = new N(x), (this._handle.streamer = this)._config = x;
      }).call(this, c), this.parseChunk = function(l, x) {
        if (this.isFirstChunk && R(this._config.beforeFirstChunk)) {
          var j = this._config.beforeFirstChunk(l);
          j !== void 0 && (l = j);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var m = this._partialLine + l;
        this._partialLine = "";
        var _ = this._handle.parse(m, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var h = _.meta.cursor;
          this._finished || (this._partialLine = m.substring(h - this._baseIndex), this._baseIndex = h), _ && _.data && (this._rowCount += _.data.length);
          var A = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (i) n.postMessage({ results: _, workerId: u.WORKER_ID, finished: A });
          else if (R(this._config.chunk) && !x) {
            if (this._config.chunk(_, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
            _ = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(_.data), this._completeResults.errors = this._completeResults.errors.concat(_.errors), this._completeResults.meta = _.meta), this._completed || !A || !R(this._config.complete) || _ && _.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), A || _ && _.meta.paused || this._nextChunk(), _;
        }
        this._halted = !0;
      }, this._sendError = function(l) {
        R(this._config.error) ? this._config.error(l) : i && this._config.error && n.postMessage({ workerId: u.WORKER_ID, error: l, finished: !1 });
      };
    }
    function w(c) {
      var l;
      (c = c || {}).chunkSize || (c.chunkSize = u.RemoteChunkSize), E.call(this, c), this._nextChunk = s ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(x) {
        this._input = x, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished) this._chunkLoaded();
        else {
          if (l = new XMLHttpRequest(), this._config.withCredentials && (l.withCredentials = this._config.withCredentials), s || (l.onload = T(this._chunkLoaded, this), l.onerror = T(this._chunkError, this)), l.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !s), this._config.downloadRequestHeaders) {
            var x = this._config.downloadRequestHeaders;
            for (var j in x) l.setRequestHeader(j, x[j]);
          }
          if (this._config.chunkSize) {
            var m = this._start + this._config.chunkSize - 1;
            l.setRequestHeader("Range", "bytes=" + this._start + "-" + m);
          }
          try {
            l.send(this._config.downloadRequestBody);
          } catch (_) {
            this._chunkError(_.message);
          }
          s && l.status === 0 && this._chunkError();
        }
      }, this._chunkLoaded = function() {
        l.readyState === 4 && (l.status < 200 || 400 <= l.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : l.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(x) {
          var j = x.getResponseHeader("Content-Range");
          return j === null ? -1 : parseInt(j.substring(j.lastIndexOf("/") + 1));
        }(l), this.parseChunk(l.responseText)));
      }, this._chunkError = function(x) {
        var j = l.statusText || x;
        this._sendError(new Error(j));
      };
    }
    function O(c) {
      var l, x;
      (c = c || {}).chunkSize || (c.chunkSize = u.LocalChunkSize), E.call(this, c);
      var j = typeof FileReader < "u";
      this.stream = function(m) {
        this._input = m, x = m.slice || m.webkitSlice || m.mozSlice, j ? ((l = new FileReader()).onload = T(this._chunkLoaded, this), l.onerror = T(this._chunkError, this)) : l = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var m = this._input;
        if (this._config.chunkSize) {
          var _ = Math.min(this._start + this._config.chunkSize, this._input.size);
          m = x.call(m, this._start, _);
        }
        var h = l.readAsText(m, this._config.encoding);
        j || this._chunkLoaded({ target: { result: h } });
      }, this._chunkLoaded = function(m) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(m.target.result);
      }, this._chunkError = function() {
        this._sendError(l.error);
      };
    }
    function D(c) {
      var l;
      E.call(this, c = c || {}), this.stream = function(x) {
        return l = x, this._nextChunk();
      }, this._nextChunk = function() {
        if (!this._finished) {
          var x, j = this._config.chunkSize;
          return j ? (x = l.substring(0, j), l = l.substring(j)) : (x = l, l = ""), this._finished = !l, this.parseChunk(x);
        }
      };
    }
    function P(c) {
      E.call(this, c = c || {});
      var l = [], x = !0, j = !1;
      this.pause = function() {
        E.prototype.pause.apply(this, arguments), this._input.pause();
      }, this.resume = function() {
        E.prototype.resume.apply(this, arguments), this._input.resume();
      }, this.stream = function(m) {
        this._input = m, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function() {
        j && l.length === 1 && (this._finished = !0);
      }, this._nextChunk = function() {
        this._checkIsFinished(), l.length ? this.parseChunk(l.shift()) : x = !0;
      }, this._streamData = T(function(m) {
        try {
          l.push(typeof m == "string" ? m : m.toString(this._config.encoding)), x && (x = !1, this._checkIsFinished(), this.parseChunk(l.shift()));
        } catch (_) {
          this._streamError(_);
        }
      }, this), this._streamError = T(function(m) {
        this._streamCleanUp(), this._sendError(m);
      }, this), this._streamEnd = T(function() {
        this._streamCleanUp(), j = !0, this._streamData("");
      }, this), this._streamCleanUp = T(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function N(c) {
      var l, x, j, m = Math.pow(2, 53), _ = -m, h = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, A = /^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/, I = this, p = 0, ee = 0, F = !1, k = !1, ae = [], o = { data: [], errors: [], meta: {} };
      if (R(c.step)) {
        var g = c.step;
        c.step = function(C) {
          if (o = C, H()) V();
          else {
            if (V(), o.data.length === 0) return;
            p += C.data.length, c.preview && p > c.preview ? x.abort() : (o.data = o.data[0], g(o, I));
          }
        };
      }
      function b(C) {
        return c.skipEmptyLines === "greedy" ? C.join("").trim() === "" : C.length === 1 && C[0].length === 0;
      }
      function V() {
        return o && j && (K("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + u.DefaultDelimiter + "'"), j = !1), c.skipEmptyLines && (o.data = o.data.filter(function(C) {
          return !b(C);
        })), H() && function() {
          if (!o) return;
          function C(J, Q) {
            R(c.transformHeader) && (J = c.transformHeader(J, Q)), ae.push(J);
          }
          if (Array.isArray(o.data[0])) {
            for (var z = 0; H() && z < o.data.length; z++) o.data[z].forEach(C);
            o.data.splice(0, 1);
          } else o.data.forEach(C);
        }(), function() {
          if (!o || !c.header && !c.dynamicTyping && !c.transform) return o;
          function C(J, Q) {
            var Z, X = c.header ? {} : [];
            for (Z = 0; Z < J.length; Z++) {
              var ne = Z, Y = J[Z];
              c.header && (ne = Z >= ae.length ? "__parsed_extra" : ae[Z]), c.transform && (Y = c.transform(Y, ne)), Y = q(ne, Y), ne === "__parsed_extra" ? (X[ne] = X[ne] || [], X[ne].push(Y)) : X[ne] = Y;
            }
            return c.header && (Z > ae.length ? K("FieldMismatch", "TooManyFields", "Too many fields: expected " + ae.length + " fields but parsed " + Z, ee + Q) : Z < ae.length && K("FieldMismatch", "TooFewFields", "Too few fields: expected " + ae.length + " fields but parsed " + Z, ee + Q)), X;
          }
          var z = 1;
          return !o.data.length || Array.isArray(o.data[0]) ? (o.data = o.data.map(C), z = o.data.length) : o.data = C(o.data, 0), c.header && o.meta && (o.meta.fields = ae), ee += z, o;
        }();
      }
      function H() {
        return c.header && ae.length === 0;
      }
      function q(C, z) {
        return J = C, c.dynamicTypingFunction && c.dynamicTyping[J] === void 0 && (c.dynamicTyping[J] = c.dynamicTypingFunction(J)), (c.dynamicTyping[J] || c.dynamicTyping) === !0 ? z === "true" || z === "TRUE" || z !== "false" && z !== "FALSE" && (function(Q) {
          if (h.test(Q)) {
            var Z = parseFloat(Q);
            if (_ < Z && Z < m) return !0;
          }
          return !1;
        }(z) ? parseFloat(z) : A.test(z) ? new Date(z) : z === "" ? null : z) : z;
        var J;
      }
      function K(C, z, J, Q) {
        var Z = { type: C, code: z, message: J };
        Q !== void 0 && (Z.row = Q), o.errors.push(Z);
      }
      this.parse = function(C, z, J) {
        var Q = c.quoteChar || '"';
        if (c.newline || (c.newline = function(ne, Y) {
          ne = ne.substring(0, 1048576);
          var ge = new RegExp(S(Y) + "([^]*?)" + S(Y), "gm"), pe = (ne = ne.replace(ge, "")).split("\r"), v = ne.split(`
`), he = 1 < v.length && v[0].length < pe[0].length;
          if (pe.length === 1 || he) return `
`;
          for (var Ee = 0, _e = 0; _e < pe.length; _e++) pe[_e][0] === `
` && Ee++;
          return Ee >= pe.length / 2 ? `\r
` : "\r";
        }(C, Q)), j = !1, c.delimiter) R(c.delimiter) && (c.delimiter = c.delimiter(C), o.meta.delimiter = c.delimiter);
        else {
          var Z = function(ne, Y, ge, pe, v) {
            var he, Ee, _e, ye;
            v = v || [",", "	", "|", ";", u.RECORD_SEP, u.UNIT_SEP];
            for (var M = 0; M < v.length; M++) {
              var G = v[M], ie = 0, oe = 0, xe = 0;
              _e = void 0;
              for (var je = new $({ comments: pe, delimiter: G, newline: Y, preview: 10 }).parse(ne), Ae = 0; Ae < je.data.length; Ae++) if (ge && b(je.data[Ae])) xe++;
              else {
                var De = je.data[Ae].length;
                oe += De, _e !== void 0 ? 0 < De && (ie += Math.abs(De - _e), _e = De) : _e = De;
              }
              0 < je.data.length && (oe /= je.data.length - xe), (Ee === void 0 || ie <= Ee) && (ye === void 0 || ye < oe) && 1.99 < oe && (Ee = ie, he = G, ye = oe);
            }
            return { successful: !!(c.delimiter = he), bestDelimiter: he };
          }(C, c.newline, c.skipEmptyLines, c.comments, c.delimitersToGuess);
          Z.successful ? c.delimiter = Z.bestDelimiter : (j = !0, c.delimiter = u.DefaultDelimiter), o.meta.delimiter = c.delimiter;
        }
        var X = B(c);
        return c.preview && c.header && X.preview++, l = C, x = new $(X), o = x.parse(l, z, J), V(), F ? { meta: { paused: !0 } } : o || { meta: { paused: !1 } };
      }, this.paused = function() {
        return F;
      }, this.pause = function() {
        F = !0, x.abort(), l = R(c.chunk) ? "" : l.substring(x.getCharIndex());
      }, this.resume = function() {
        I.streamer._halted ? (F = !1, I.streamer.parseChunk(l, !0)) : setTimeout(I.resume, 3);
      }, this.aborted = function() {
        return k;
      }, this.abort = function() {
        k = !0, x.abort(), o.meta.aborted = !0, R(c.complete) && c.complete(o), l = "";
      };
    }
    function S(c) {
      return c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function $(c) {
      var l, x = (c = c || {}).delimiter, j = c.newline, m = c.comments, _ = c.step, h = c.preview, A = c.fastMode, I = l = c.quoteChar === void 0 || c.quoteChar === null ? '"' : c.quoteChar;
      if (c.escapeChar !== void 0 && (I = c.escapeChar), (typeof x != "string" || -1 < u.BAD_DELIMITERS.indexOf(x)) && (x = ","), m === x) throw new Error("Comment character same as delimiter");
      m === !0 ? m = "#" : (typeof m != "string" || -1 < u.BAD_DELIMITERS.indexOf(m)) && (m = !1), j !== `
` && j !== "\r" && j !== `\r
` && (j = `
`);
      var p = 0, ee = !1;
      this.parse = function(F, k, ae) {
        if (typeof F != "string") throw new Error("Input must be a string");
        var o = F.length, g = x.length, b = j.length, V = m.length, H = R(_), q = [], K = [], C = [], z = p = 0;
        if (!F) return ye();
        if (A || A !== !1 && F.indexOf(l) === -1) {
          for (var J = F.split(j), Q = 0; Q < J.length; Q++) {
            if (C = J[Q], p += C.length, Q !== J.length - 1) p += j.length;
            else if (ae) return ye();
            if (!m || C.substring(0, V) !== m) {
              if (H) {
                if (q = [], v(C.split(x)), M(), ee) return ye();
              } else v(C.split(x));
              if (h && h <= Q) return q = q.slice(0, h), ye(!0);
            }
          }
          return ye();
        }
        for (var Z = F.indexOf(x, p), X = F.indexOf(j, p), ne = new RegExp(S(I) + S(l), "g"), Y = F.indexOf(l, p); ; ) if (F[p] !== l) if (m && C.length === 0 && F.substring(p, p + V) === m) {
          if (X === -1) return ye();
          p = X + b, X = F.indexOf(j, p), Z = F.indexOf(x, p);
        } else if (Z !== -1 && (Z < X || X === -1)) C.push(F.substring(p, Z)), p = Z + g, Z = F.indexOf(x, p);
        else {
          if (X === -1) break;
          if (C.push(F.substring(p, X)), _e(X + b), H && (M(), ee)) return ye();
          if (h && q.length >= h) return ye(!0);
        }
        else for (Y = p, p++; ; ) {
          if ((Y = F.indexOf(l, Y + 1)) === -1) return ae || K.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: q.length, index: p }), Ee();
          if (Y === o - 1) return Ee(F.substring(p, Y).replace(ne, l));
          if (l !== I || F[Y + 1] !== I) {
            if (l === I || Y === 0 || F[Y - 1] !== I) {
              Z !== -1 && Z < Y + 1 && (Z = F.indexOf(x, Y + 1)), X !== -1 && X < Y + 1 && (X = F.indexOf(j, Y + 1));
              var ge = he(X === -1 ? Z : Math.min(Z, X));
              if (F.substr(Y + 1 + ge, g) === x) {
                C.push(F.substring(p, Y).replace(ne, l)), F[p = Y + 1 + ge + g] !== l && (Y = F.indexOf(l, p)), Z = F.indexOf(x, p), X = F.indexOf(j, p);
                break;
              }
              var pe = he(X);
              if (F.substring(Y + 1 + pe, Y + 1 + pe + b) === j) {
                if (C.push(F.substring(p, Y).replace(ne, l)), _e(Y + 1 + pe + b), Z = F.indexOf(x, p), Y = F.indexOf(l, p), H && (M(), ee)) return ye();
                if (h && q.length >= h) return ye(!0);
                break;
              }
              K.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: q.length, index: p }), Y++;
            }
          } else Y++;
        }
        return Ee();
        function v(G) {
          q.push(G), z = p;
        }
        function he(G) {
          var ie = 0;
          if (G !== -1) {
            var oe = F.substring(Y + 1, G);
            oe && oe.trim() === "" && (ie = oe.length);
          }
          return ie;
        }
        function Ee(G) {
          return ae || (G === void 0 && (G = F.substring(p)), C.push(G), p = o, v(C), H && M()), ye();
        }
        function _e(G) {
          p = G, v(C), C = [], X = F.indexOf(j, p);
        }
        function ye(G) {
          return { data: q, errors: K, meta: { delimiter: x, linebreak: j, aborted: ee, truncated: !!G, cursor: z + (k || 0) } };
        }
        function M() {
          _(ye()), q = [], K = [];
        }
      }, this.abort = function() {
        ee = !0;
      }, this.getCharIndex = function() {
        return p;
      };
    }
    function U(c) {
      var l = c.data, x = d[l.workerId], j = !1;
      if (l.error) x.userError(l.error, l.file);
      else if (l.results && l.results.data) {
        var m = { abort: function() {
          j = !0, L(l.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: W, resume: W };
        if (R(x.userStep)) {
          for (var _ = 0; _ < l.results.data.length && (x.userStep({ data: l.results.data[_], errors: l.results.errors, meta: l.results.meta }, m), !j); _++) ;
          delete l.results;
        } else R(x.userChunk) && (x.userChunk(l.results, m, l.file), delete l.results);
      }
      l.finished && !j && L(l.workerId, l.results);
    }
    function L(c, l) {
      var x = d[c];
      R(x.userComplete) && x.userComplete(l), x.terminate(), delete d[c];
    }
    function W() {
      throw new Error("Not implemented.");
    }
    function B(c) {
      if (typeof c != "object" || c === null) return c;
      var l = Array.isArray(c) ? [] : {};
      for (var x in c) l[x] = B(c[x]);
      return l;
    }
    function T(c, l) {
      return function() {
        c.apply(l, arguments);
      };
    }
    function R(c) {
      return typeof c == "function";
    }
    return i && (n.onmessage = function(c) {
      var l = c.data;
      if (u.WORKER_ID === void 0 && l && (u.WORKER_ID = l.workerId), typeof l.input == "string") n.postMessage({ workerId: u.WORKER_ID, results: u.parse(l.input, l.config), finished: !0 });
      else if (n.File && l.input instanceof File || l.input instanceof Object) {
        var x = u.parse(l.input, l.config);
        x && n.postMessage({ workerId: u.WORKER_ID, results: x, finished: !0 });
      }
    }), (w.prototype = Object.create(E.prototype)).constructor = w, (O.prototype = Object.create(E.prototype)).constructor = O, (D.prototype = Object.create(D.prototype)).constructor = D, (P.prototype = Object.create(E.prototype)).constructor = P, u;
  });
})(vs);
var Lo = vs.exports;
const xs = /* @__PURE__ */ Hn(Lo);
function Mo(t) {
  const e = xs.parse(t, {
    header: !0,
    skipEmptyLines: !0
  });
  return !e.data || e.data.length < 1 ? [] : e.data.map((r) => {
    const n = {};
    for (const [s, i] of Object.entries(r))
      n[s] = typeof i == "string" ? i : i == null ? "" : String(i);
    return n;
  });
}
function $o(t) {
  return t.length === 0 ? "" : xs.unparse(t, {
    quotes: !0
  });
}
function Uo(t) {
  const e = t.meta.stats.imported, r = t.meta.stats.invalid || [], n = r.length, s = {}, i = r.map((w) => {
    const O = To(w.error);
    return O.split(",").forEach((D) => {
      const P = D.trim();
      s[P] ? s[P].count += 1 : s[P] = { message: P, count: 1 };
    }), { ...w, error: O };
  }), d = $o(i), f = new Blob([d], { type: "text/csv" }), u = URL.createObjectURL(f), y = t.meta.import_label, E = y ? `${y.name} - Errors.csv` : `Import ${Te().format("YYYY-MM-DD HH:mm")} - Errors.csv`;
  return {
    importedCount: e,
    errorCount: n,
    errorCsvUrl: u,
    errorCsvName: E,
    errorList: Object.values(s)
  };
}
const _s = () => ({
  status: "INIT",
  file: null,
  fileData: null,
  mapping: null,
  selectedLabelSlugs: [],
  dataPreviewIndex: 0,
  mappingError: null,
  showMappingErrors: !1,
  importResponse: null,
  errorMessage: null,
  errorHeader: "Import error",
  showTryAgainButton: !0,
  dragOver: !1,
  fileError: null
});
function Bo(t, e) {
  switch (e.type) {
    case "SELECT_FILE":
      return {
        ...t,
        status: "MAPPING",
        file: e.file,
        fileData: null,
        mapping: null,
        dataPreviewIndex: 0,
        mappingError: null,
        showMappingErrors: !1,
        fileError: null
      };
    case "SET_FILE_ERROR":
      return {
        ...t,
        fileError: e.fileError
      };
    case "PARSE_SUCCESS":
      return {
        ...t,
        fileData: e.fileData,
        mapping: e.mapping,
        mappingError: e.mappingError
      };
    case "PARSE_FAILURE":
      return {
        ...t,
        fileData: [],
        mapping: null,
        mappingError: e.mappingError
      };
    case "UPDATE_MAPPING":
      return {
        ...t,
        mapping: e.mapping,
        mappingError: e.mappingError
      };
    case "SET_SELECTED_LABEL_SLUGS":
      return {
        ...t,
        selectedLabelSlugs: e.selectedLabelSlugs
      };
    case "SET_DATA_PREVIEW_INDEX":
      return {
        ...t,
        dataPreviewIndex: e.dataPreviewIndex
      };
    case "SET_SHOW_MAPPING_ERRORS":
      return {
        ...t,
        showMappingErrors: e.showMappingErrors
      };
    case "SET_DRAG_OVER":
      return {
        ...t,
        dragOver: e.dragOver
      };
    case "UPLOAD_START":
      return {
        ...t,
        status: "UPLOADING",
        showMappingErrors: !1
      };
    case "UPLOAD_ACCEPTED":
      return {
        ...t,
        status: "PROCESSING"
      };
    case "UPLOAD_COMPLETE":
      return {
        ...t,
        status: "COMPLETE",
        importResponse: e.importResponse
      };
    case "UPLOAD_ERROR":
      return {
        ...t,
        status: "ERROR",
        errorMessage: e.errorMessage,
        errorHeader: e.errorHeader ?? "Import error",
        showTryAgainButton: e.showTryAgainButton ?? !0
      };
    case "RESET":
      return _s();
    default:
      return t;
  }
}
function zo({
  open: t,
  onOpenChange: e,
  onComplete: r
}) {
  var L;
  const [n, s] = Gn(Bo, void 0, _s), i = Se(null), d = Bt({
    selectedSlugs: n.selectedLabelSlugs,
    onSelectionChange: (W) => s({ type: "SET_SELECTED_LABEL_SLUGS", selectedLabelSlugs: W })
  }), f = te(() => {
    i.current && (URL.revokeObjectURL(i.current), i.current = null);
  }, []), u = te(() => {
    f(), s({ type: "RESET" });
  }, [f]);
  ke(() => () => {
    f();
  }, [f]);
  const y = te((W) => {
    !W && n.status === "UPLOADING" || (W || u(), e(W));
  }, [e, u, n.status]);
  ke(() => {
    if (!n.file)
      return;
    let W = !1;
    const B = new FileReader();
    return B.onload = (T) => {
      var R;
      if (!W)
        try {
          const c = (R = T.target) == null ? void 0 : R.result, l = Mo(c);
          if (l.length > 0) {
            const x = No(l), j = new Mr(x);
            s({
              type: "PARSE_SUCCESS",
              fileData: l,
              mapping: j,
              mappingError: j.getKeyByValue("email") ? null : 'Please map "Email" to one of the fields in the CSV.'
            });
          } else
            s({
              type: "PARSE_SUCCESS",
              fileData: [],
              mapping: null,
              mappingError: "File is empty, nothing to import. Please select a different file."
            });
        } catch {
          s({
            type: "PARSE_FAILURE",
            mappingError: "Failed to parse this file. Please try another CSV file."
          });
        }
    }, B.onerror = () => {
      var T;
      W || s({
        type: "PARSE_FAILURE",
        mappingError: `Failed to read file${(T = B.error) != null && T.message ? `: ${B.error.message}` : ""}`
      });
    }, B.onabort = () => {
      W || s({
        type: "PARSE_FAILURE",
        mappingError: "File read was interrupted. Please try again."
      });
    }, B.readAsText(n.file), () => {
      W = !0, B.readyState === FileReader.LOADING && B.abort();
    };
  }, [n.file]);
  const E = te((W) => {
    const B = /(?:\.([^.]+))?$/.exec(W.name), T = B == null ? void 0 : B[1];
    return !T || T.toLowerCase() !== "csv" ? (s({
      type: "SET_FILE_ERROR",
      fileError: "The file type you uploaded is not supported"
    }), !1) : (s({ type: "SET_FILE_ERROR", fileError: null }), !0);
  }, []), w = te((W) => {
    E(W) && s({ type: "SELECT_FILE", file: W });
  }, [E]), O = te((W, B) => {
    if (!n.mapping)
      return;
    const T = n.mapping.updateMapping(W, B), R = n.fileData && n.fileData.length === 0 ? "File is empty, nothing to import. Please select a different file." : T.getKeyByValue("email") ? null : 'Please map "Email" to one of the fields in the CSV.';
    s({
      type: "UPDATE_MAPPING",
      mapping: T,
      mappingError: R
    });
  }, [n.fileData, n.mapping]), D = te(async () => {
    var B;
    if (!n.file || n.mappingError) {
      s({ type: "SET_SHOW_MAPPING_ERRORS", showMappingErrors: !0 });
      return;
    }
    s({ type: "UPLOAD_START" });
    const W = new FormData();
    W.append("membersfile", n.file);
    for (const T of n.selectedLabelSlugs) {
      const R = d.labels.find((c) => c.slug === T);
      R && W.append("labels", R.name);
    }
    if (n.mapping) {
      const T = n.mapping.toJSON();
      for (const [R, c] of Object.entries(T))
        c && W.append(`mapping[${R}]`, c);
    }
    try {
      const { apiRoot: T } = Ra(), R = await fetch(`${T}/members/upload/`, {
        method: "POST",
        body: W,
        credentials: "include",
        mode: "cors",
        headers: {
          "app-pragma": "no-cache"
        }
      });
      if (R.status === 202) {
        s({ type: "UPLOAD_ACCEPTED" }), r == null || r();
        return;
      }
      if (R.status === 413) {
        s({
          type: "UPLOAD_ERROR",
          errorMessage: "The file you uploaded was larger than the maximum file size your server allows."
        });
        return;
      }
      if (!R.ok) {
        const x = await R.json(), j = (B = x == null ? void 0 : x.errors) == null ? void 0 : B[0];
        if ((j == null ? void 0 : j.type) === "HostLimitError" && (j == null ? void 0 : j.code) === "EMAIL_VERIFICATION_NEEDED") {
          s({
            type: "UPLOAD_ERROR",
            errorMessage: j.message,
            errorHeader: "Woah there cowboy, that's a big list",
            showTryAgainButton: !1
          }), r == null || r();
          return;
        }
        if ((j == null ? void 0 : j.type) === "DataImportError" || (j == null ? void 0 : j.type) === "ValidationError") {
          s({
            type: "UPLOAD_ERROR",
            errorMessage: j.message
          });
          return;
        }
        s({
          type: "UPLOAD_ERROR",
          errorMessage: "An unexpected error occurred, please try again"
        });
        return;
      }
      const c = await R.json(), l = Uo(c);
      f(), i.current = l.errorCsvUrl, s({
        type: "UPLOAD_COMPLETE",
        importResponse: l
      }), r == null || r();
    } catch {
      s({
        type: "UPLOAD_ERROR",
        errorMessage: "An unexpected error occurred, please try again"
      });
    }
  }, [
    n.file,
    n.mapping,
    n.mappingError,
    n.selectedLabelSlugs,
    d.labels,
    f,
    r
  ]), P = n.fileData ? !!n.fileData[n.dataPreviewIndex + 1] : !1, N = n.dataPreviewIndex > 0, S = ((L = n.fileData) == null ? void 0 : L.length) ?? 0, $ = n.status === "MAPPING" || n.status === "UPLOADING", U = de(() => {
    switch (n.status) {
      case "PROCESSING":
        return "Import in progress";
      case "COMPLETE":
        return "Import complete";
      case "ERROR":
        return n.errorHeader;
      default:
        return "Import members";
    }
  }, [n.errorHeader, n.status]);
  return /* @__PURE__ */ a.jsx(nt, { open: t, onOpenChange: y, children: /* @__PURE__ */ a.jsxs(st, { className: Oe("gap-0", $ && "max-w-2xl"), children: [
    /* @__PURE__ */ a.jsxs(at, { children: [
      /* @__PURE__ */ a.jsx(it, { children: U }),
      /* @__PURE__ */ a.jsx(da, { className: "sr-only", children: "Import members from a CSV file." })
    ] }),
    n.status === "INIT" && /* @__PURE__ */ a.jsx(
      jo,
      {
        fileError: n.fileError,
        onClose: () => y(!1),
        onDropAccepted: w,
        onDropRejected: () => s({
          type: "SET_FILE_ERROR",
          fileError: "The file type you uploaded is not supported"
        })
      }
    ),
    (n.status === "MAPPING" || n.status === "UPLOADING") && /* @__PURE__ */ a.jsx(
      Ro,
      {
        dataPreviewIndex: n.dataPreviewIndex,
        fileData: n.fileData,
        hasNextRecord: P,
        hasPrevRecord: N,
        labelPicker: d,
        mapping: n.mapping,
        mappingError: n.mappingError,
        membersCount: S,
        showMappingErrors: n.showMappingErrors,
        status: n.status,
        onDataPreviewIndexChange: (W) => {
          s({
            type: "SET_DATA_PREVIEW_INDEX",
            dataPreviewIndex: W
          });
        },
        onStartOver: u,
        onUpdateMapping: O,
        onUpload: D
      }
    ),
    n.status === "PROCESSING" && /* @__PURE__ */ a.jsx(
      Co,
      {
        onClose: () => y(!1),
        onUploadAnotherFile: u
      }
    ),
    n.status === "COMPLETE" && n.importResponse && /* @__PURE__ */ a.jsx(
      Io,
      {
        importResponse: n.importResponse,
        onClose: () => y(!1),
        onReset: u
      }
    ),
    n.status === "ERROR" && /* @__PURE__ */ a.jsx(
      Fo,
      {
        errorMessage: n.errorMessage,
        showTryAgainButton: n.showTryAgainButton,
        onClose: () => y(!1),
        onTryAgain: u
      }
    )
  ] }) });
}
function et(t) {
  return `'${t.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
}
function Vo(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t) && !(t instanceof RegExp);
}
function Wo(t) {
  const e = Object.keys(t);
  if (e.length !== 1)
    return;
  const [r] = e;
  if (!r.startsWith("$"))
    return r;
}
function zt(t) {
  const e = Wo(t);
  if (!e)
    return;
  const r = t[e];
  if (Vo(r)) {
    const n = Object.entries(r);
    if (n.length !== 1)
      return;
    const [s, i] = n[0];
    return { field: e, operator: s, value: i };
  }
  return {
    field: e,
    operator: "$eq",
    value: r
  };
}
const Go = {
  $eq: "is",
  $ne: "is-not"
}, Ho = {
  $eq: "is",
  $gt: "is-greater",
  $gte: "is-or-greater",
  $lt: "is-less",
  $lte: "is-or-less"
}, Ko = {
  contains: "~",
  "does-not-contain": "-~",
  "starts-with": "~^",
  "does-not-start-with": "-~^",
  "ends-with": "~$",
  "does-not-end-with": "-~$"
}, Yo = {
  is: "",
  "is-greater": ">",
  "is-or-greater": ">=",
  "is-less": "<",
  "is-or-less": "<="
}, qo = {
  "is-any": "",
  "is-not-any": "-"
}, Jo = /^[A-Za-z0-9_.-]+$/;
function Fe(t, e) {
  return (t == null ? void 0 : t.field) ?? e;
}
function Qo(t) {
  return t.map((e) => String(e)).sort((e, r) => e.localeCompare(r));
}
function Tt(t, e) {
  return typeof t == "string" ? e != null && e.quoteStrings || t.startsWith("-") || !Jo.test(t) ? et(t) : t : String(t);
}
function mn(t, e = !1) {
  const r = t.source, n = r.startsWith("^"), s = r.endsWith("$");
  return n && s ? e ? "does-not-contain" : "contains" : n ? e ? "does-not-start-with" : "starts-with" : s ? e ? "does-not-end-with" : "ends-with" : e ? "does-not-contain" : "contains";
}
function gn(t) {
  let e = t.source;
  return e.startsWith("^") && (e = e.slice(1)), e.endsWith("$") && (e = e.slice(0, -1)), e.replace(/\\([\\.^$|?*+()[\]{}\/-])/g, "$1");
}
function Ce(t) {
  return {
    parse(e, r) {
      const n = zt(e), s = Fe(t, r.key);
      if (!n || n.field !== s)
        return null;
      const i = Go[n.operator];
      return i ? {
        field: r.key,
        operator: i,
        values: [n.value]
      } : null;
    },
    serialize(e, r) {
      const n = e.values[0], s = Fe(t, r.key);
      return n == null || n === "" ? null : e.operator === "is" ? [`${s}:${Tt(n, t)}`] : e.operator === "is-not" ? [`${s}:-${Tt(n, t)}`] : null;
    }
  };
}
function yn(t) {
  return {
    parse(e, r) {
      const n = zt(e), s = Fe(t, r.key);
      return !n || n.field !== s ? null : n.operator === "$eq" && typeof n.value == "string" ? {
        field: r.key,
        operator: "is",
        values: [n.value]
      } : n.operator === "$regex" && n.value instanceof RegExp ? {
        field: r.key,
        operator: mn(n.value),
        values: [gn(n.value)]
      } : n.operator === "$not" && n.value instanceof RegExp ? {
        field: r.key,
        operator: mn(n.value, !0),
        values: [gn(n.value)]
      } : null;
    },
    serialize(e, r) {
      const n = e.values[0], s = Fe(t, r.key);
      if (typeof n != "string" || n === "")
        return null;
      if (e.operator === "is")
        return [`${s}:${et(n)}`];
      const i = Ko[e.operator];
      return i ? [`${s}:${i}${et(n)}`] : null;
    }
  };
}
function rr(t) {
  return {
    parse(e, r) {
      const n = zt(e), s = Fe(t, r.key);
      return !n || n.field !== s ? null : n.operator === "$in" && Array.isArray(n.value) ? {
        field: r.key,
        operator: "is-any",
        values: n.value
      } : n.operator === "$nin" && Array.isArray(n.value) ? {
        field: r.key,
        operator: "is-not-any",
        values: n.value
      } : n.operator === "$eq" ? {
        field: r.key,
        operator: "is-any",
        values: [n.value]
      } : n.operator === "$ne" ? {
        field: r.key,
        operator: "is-not-any",
        values: [n.value]
      } : null;
    },
    serialize(e, r) {
      const n = Fe(t, r.key);
      if (!e.values.length)
        return null;
      const s = qo[e.operator];
      if (s === void 0)
        return null;
      const i = Qo(e.values);
      return t != null && t.serializeSingletonAsScalar && i.length === 1 ? [`${n}:${s}${Tt(i[0], t)}`] : [`${n}:${s}[${i.map((d) => Tt(d, t)).join(",")}]`];
    }
  };
}
function nr(t) {
  return {
    parse(e, r) {
      const n = zt(e), s = Fe(t, r.key);
      if (!n || n.field !== s || typeof n.value != "number")
        return null;
      const i = Ho[n.operator];
      return i ? {
        field: r.key,
        operator: i,
        values: [n.value]
      } : null;
    },
    serialize(e, r) {
      const n = e.values[0], s = Fe(t, r.key), i = typeof n == "string" ? n.trim() === "" ? NaN : Number(n) : n;
      if (typeof i != "number" || Number.isNaN(i))
        return null;
      const d = Yo[e.operator];
      return d === void 0 ? null : [`${s}:${d}${i}`];
    }
  };
}
function Zo(t, e) {
  const r = Te.tz(t, "YYYY-MM-DD", e).startOf("day").utc().toISOString(), n = Te.tz(t, "YYYY-MM-DD", e).endOf("day").utc().toISOString();
  return { start: r, end: n };
}
const bn = ["is", "contains", "does-not-contain", "starts-with", "ends-with"], yt = ["is-less", "is-or-less", "is-greater", "is-or-greater"], sr = ["is", "is-greater", "is-less"], Ne = ["is", "is-not"], ar = ["is-any", "is-not-any"], Xo = [
  { value: "active", label: "Active" },
  { value: "trialing", label: "Trialing" },
  { value: "canceled", label: "Canceled" },
  { value: "unpaid", label: "Unpaid" },
  { value: "past_due", label: "Past Due" },
  { value: "incomplete", label: "Incomplete" },
  { value: "incomplete_expired", label: "Incomplete - Expired" }
];
function el(t, e) {
  if (typeof t != "string" || !t)
    return null;
  const r = Te.utc(t, ["YYYY-MM-DD HH:mm:ss.SSS", "YYYY-MM-DD HH:mm:ss"], !0);
  if (r.isValid())
    return r.tz(e).format("YYYY-MM-DD");
  const n = Te.tz(t, Te.ISO_8601, !0, e);
  return n.isValid() ? n.format("YYYY-MM-DD") : null;
}
const bt = {
  parse(t, e) {
    const r = Object.entries(t)[0];
    if (!r || r[0] !== e.key || typeof r[1] != "object" || r[1] === null)
      return null;
    const [n, s] = Object.entries(r[1])[0] ?? [], i = el(s, e.timezone);
    if (!i)
      return null;
    switch (n) {
      case "$lt":
        return { field: e.key, operator: "is-less", values: [i] };
      case "$lte":
        return { field: e.key, operator: "is-or-less", values: [i] };
      case "$gt":
        return { field: e.key, operator: "is-greater", values: [i] };
      case "$gte":
        return { field: e.key, operator: "is-or-greater", values: [i] };
      default:
        return null;
    }
  },
  serialize(t, e) {
    const r = t.values[0];
    if (typeof r != "string" || !r)
      return null;
    const { start: n, end: s } = Zo(r, e.timezone);
    switch (t.operator) {
      case "is-less":
        return [`${e.key}:<'${n}'`];
      case "is-or-less":
        return [`${e.key}:<='${s}'`];
      case "is-greater":
        return [`${e.key}:>'${s}'`];
      case "is-or-greater":
        return [`${e.key}:>='${n}'`];
      default:
        return null;
    }
  }
}, tl = {
  parse() {
    return null;
  },
  serialize(t) {
    const e = t.values[0];
    return t.operator !== "is" && t.operator !== "is-not" ? null : e === "email-disabled" ? t.operator === "is" ? ["(email_disabled:1)"] : ["(email_disabled:0)"] : e === "subscribed" ? t.operator === "is" ? ["(subscribed:true+email_disabled:0)"] : ["(subscribed:false,email_disabled:1)"] : e === "unsubscribed" ? t.operator === "is" ? ["(subscribed:false+email_disabled:0)"] : ["(subscribed:true,email_disabled:1)"] : null;
  }
}, rl = {
  parse() {
    return null;
  },
  serialize(t, e) {
    const r = e.params.slug, n = t.values[0];
    return !r || t.operator !== "is" ? null : n === "subscribed" ? [`(newsletters.slug:${r}+email_disabled:0)`] : n === "unsubscribed" ? [`(newsletters.slug:-${r},email_disabled:1)`] : null;
  }
}, nl = {
  parse() {
    return null;
  },
  serialize(t) {
    const e = t.values[0];
    return typeof e != "string" || !e || t.operator !== "1" && t.operator !== "0" ? null : [`(feedback.post_id:${et(e)}+feedback.score:${t.operator})`];
  }
}, tt = {
  name: {
    operators: bn,
    ui: {
      label: "Name",
      type: "text",
      placeholder: "Enter name...",
      defaultOperator: "contains",
      className: "w-48"
    },
    codec: yn()
  },
  email: {
    operators: bn,
    ui: {
      label: "Email",
      type: "text",
      placeholder: "Enter email...",
      defaultOperator: "contains",
      className: "w-64"
    },
    codec: yn()
  },
  label: {
    operators: ar,
    ui: {
      label: "Label",
      type: "multiselect",
      searchable: !0,
      className: "w-64",
      defaultOperator: "is-any"
    },
    metadata: {
      activeColumn: {
        key: "labels",
        label: "Labels",
        include: "labels"
      }
    },
    codec: rr()
  },
  subscribed: {
    operators: Ne,
    ui: {
      label: "Newsletter subscription",
      type: "select",
      searchable: !1
    },
    options: [
      { value: "subscribed", label: "Subscribed" },
      { value: "unsubscribed", label: "Unsubscribed" },
      { value: "email-disabled", label: "Email disabled" }
    ],
    codec: tl
  },
  last_seen_at: {
    operators: yt,
    ui: {
      label: "Last seen",
      type: "date",
      defaultOperator: "is-or-less",
      className: "w-40"
    },
    codec: bt
  },
  created_at: {
    operators: yt,
    ui: {
      label: "Created",
      type: "date",
      defaultOperator: "is-or-less",
      className: "w-40"
    },
    codec: bt
  },
  signup: {
    operators: Ne,
    ui: {
      label: "Signed up on post/page",
      type: "select",
      searchable: !0,
      placeholder: "Select a post or page...",
      className: "w-64"
    },
    codec: Ce({ quoteStrings: !0 })
  },
  "newsletters.:slug": {
    operators: ["is"],
    ui: {
      label: "Newsletter",
      type: "select",
      searchable: !1,
      hideOperatorSelect: !0
    },
    options: [
      { value: "subscribed", label: "Subscribed" },
      { value: "unsubscribed", label: "Unsubscribed" }
    ],
    codec: rl
  },
  tier_id: {
    operators: ar,
    ui: {
      label: "Membership tier",
      type: "multiselect",
      searchable: !0,
      className: "w-64",
      defaultOperator: "is-any"
    },
    metadata: {
      activeColumn: {
        key: "tiers",
        label: "Tiers",
        include: "tiers"
      }
    },
    codec: rr()
  },
  status: {
    operators: Ne,
    ui: {
      label: "Member status",
      type: "select",
      searchable: !1
    },
    options: [
      { value: "paid", label: "Paid" },
      { value: "free", label: "Free" },
      { value: "comped", label: "Complimentary" }
    ],
    codec: Ce()
  },
  "subscriptions.plan_interval": {
    operators: Ne,
    ui: {
      label: "Billing period",
      type: "select",
      searchable: !1
    },
    options: [
      { value: "month", label: "Monthly" },
      { value: "year", label: "Yearly" }
    ],
    metadata: {
      activeColumn: {
        key: "subscriptions.plan_interval",
        label: "Billing period",
        include: "subscriptions"
      }
    },
    codec: Ce()
  },
  "subscriptions.status": {
    operators: Ne,
    ui: {
      label: "Stripe subscription status",
      type: "select",
      searchable: !1
    },
    options: Xo,
    metadata: {
      activeColumn: {
        key: "subscriptions.status",
        label: "Subscription status",
        include: "subscriptions"
      }
    },
    codec: Ce()
  },
  "subscriptions.start_date": {
    operators: yt,
    ui: {
      label: "Paid start date",
      type: "date",
      defaultOperator: "is-or-less",
      className: "w-40"
    },
    metadata: {
      activeColumn: {
        key: "subscriptions.start_date",
        label: "Paid start date",
        include: "subscriptions"
      }
    },
    codec: bt
  },
  "subscriptions.current_period_end": {
    operators: yt,
    ui: {
      label: "Next billing date",
      type: "date",
      defaultOperator: "is-or-less",
      className: "w-40"
    },
    metadata: {
      activeColumn: {
        key: "subscriptions.current_period_end",
        label: "Next billing date",
        include: "subscriptions"
      }
    },
    codec: bt
  },
  conversion: {
    operators: Ne,
    ui: {
      label: "Subscription started on post/page",
      type: "select",
      searchable: !0,
      placeholder: "Select a post or page...",
      className: "w-64"
    },
    codec: Ce({ quoteStrings: !0 })
  },
  email_count: {
    operators: sr,
    ui: {
      label: "Emails sent (all time)",
      type: "number",
      defaultOperator: "is",
      defaultValue: 0,
      min: 0,
      className: "w-24"
    },
    codec: nr()
  },
  email_opened_count: {
    operators: sr,
    ui: {
      label: "Emails opened (all time)",
      type: "number",
      defaultOperator: "is",
      defaultValue: 0,
      min: 0,
      className: "w-24"
    },
    codec: nr()
  },
  email_open_rate: {
    operators: sr,
    ui: {
      label: "Open rate (all time)",
      type: "number",
      defaultOperator: "is",
      defaultValue: 0,
      min: 0,
      max: 100,
      suffix: "%",
      className: "w-24"
    },
    codec: nr()
  },
  "emails.post_id": {
    operators: Ne,
    ui: {
      label: "Sent email",
      type: "select",
      searchable: !0,
      placeholder: "Select an email...",
      className: "w-64"
    },
    codec: Ce({ quoteStrings: !0 })
  },
  "opened_emails.post_id": {
    operators: Ne,
    ui: {
      label: "Opened email",
      type: "select",
      searchable: !0,
      placeholder: "Select an email...",
      className: "w-64"
    },
    codec: Ce({ quoteStrings: !0 })
  },
  "clicked_links.post_id": {
    operators: Ne,
    ui: {
      label: "Clicked email",
      type: "select",
      searchable: !0,
      placeholder: "Select an email...",
      className: "w-64"
    },
    codec: Ce({ quoteStrings: !0 })
  },
  newsletter_feedback: {
    operators: ["1", "0"],
    ui: {
      label: "Responded with feedback",
      type: "select",
      searchable: !0,
      placeholder: "Select an email...",
      className: "w-64",
      defaultOperator: "1"
    },
    codec: nl
  },
  offer_redemptions: {
    operators: ar,
    ui: {
      label: "Offer",
      type: "multiselect",
      searchable: !0,
      className: "w-64",
      defaultOperator: "is-any"
    },
    metadata: {
      activeColumn: {
        key: "offer_redemptions",
        label: "Offer"
      }
    },
    codec: rr({ quoteStrings: !0, serializeSingletonAsScalar: !0 })
  }
};
function sl(t, e) {
  const r = t.split("."), n = e.split(".");
  if (r.length !== n.length)
    return null;
  const s = {};
  for (let i = 0; i < r.length; i += 1) {
    const d = r[i], f = n[i];
    if (d.startsWith(":")) {
      s[d.slice(1)] = f;
      continue;
    }
    if (d !== f)
      return null;
  }
  return s;
}
function $r(t, e, r) {
  var s;
  const n = t[e];
  if (n)
    return {
      definition: n,
      context: {
        key: e,
        pattern: e,
        params: {},
        timezone: r
      }
    };
  for (const [i, d] of Object.entries(t))
    if ((s = d.parseKeys) != null && s.includes(e))
      return {
        definition: d,
        context: {
          key: i,
          pattern: i,
          params: {},
          timezone: r
        }
      };
  for (const [i, d] of Object.entries(t)) {
    if (!i.includes(":"))
      continue;
    const f = sl(i, e);
    if (f)
      return {
        definition: d,
        context: {
          key: e,
          pattern: i,
          params: f,
          timezone: r
        }
      };
  }
}
function al(t) {
  var r, n;
  const e = /* @__PURE__ */ new Map();
  for (const s of t) {
    const i = (n = (r = $r(tt, s.field, "UTC")) == null ? void 0 : r.definition.metadata) == null ? void 0 : n.activeColumn;
    i && e.set(i.key, i);
  }
  return Array.from(e.values());
}
function il(t) {
  const e = /* @__PURE__ */ new Set(["labels", "tiers"]);
  for (const r of al(t))
    r.include && e.add(r.include);
  return Array.from(e).join(",");
}
function ol({ filters: t, nql: e, search: r }) {
  if (!e && !r)
    return;
  const n = {
    include: il(t),
    limit: "50",
    order: "created_at desc"
  };
  return e && (n.filter = e), r && (n.search = r), n;
}
function ll({ nql: t, search: e }) {
  return !t && !e ? { all: !0 } : {
    ...t ? { filter: t } : {},
    ...e ? { search: e } : {}
  };
}
const cl = "NewslettersResponseType", ws = Jn({
  dataType: cl,
  path: "/newsletters/",
  defaultSearchParams: { include: "count.active_members,count.posts", limit: "50" },
  defaultNextPageParams: (t, e) => {
    var r;
    return {
      ...e,
      page: (((r = t.meta) == null ? void 0 : r.pagination.next) || 1).toString()
    };
  },
  returnData: (t) => {
    const { pages: e } = t, r = e.flatMap((s) => s.newsletters), n = e[e.length - 1].meta;
    return {
      newsletters: r,
      meta: n,
      isEnd: n ? n.pagination.pages === n.pagination.page : !0
    };
  }
});
async function vn(t, e) {
  const r = new URLSearchParams({ limit: "all" });
  t && r.set("filter", t), e && r.set("search", e);
  const n = (/* @__PURE__ */ new Date()).toJSON().substring(0, 10);
  await Ca(`/members/upload/?${r}`, `members.${n}.csv`);
}
const ul = ({
  hasFilterOrSearch: t,
  memberCount: e,
  nql: r,
  search: n,
  canBulkDelete: s,
  onImportComplete: i
}) => {
  const [d, f] = ce(!1), [u, y] = ce(!1), [E, w] = ce(!1), [O, D] = ce(!1), [P, N] = ce(!1), { data: S, isLoading: $ } = ws({
    searchParams: { filter: "status:-archived", limit: "50" }
  }), U = (S == null ? void 0 : S.newsletters) || [], { mutateAsync: L, isLoading: W } = ha(), { mutate: B, isLoading: T } = ma(), [R, c] = ce(!1), l = ll({ nql: r, search: n }), x = te(async () => {
    try {
      await vn(r, n);
    } catch (I) {
      throw we.error("Export failed", {
        description: "There was a problem downloading your member data. Please check your connection and try again."
      }), I;
    }
  }, [r, n]), j = te(async (I) => {
    try {
      for (const p of I)
        await L({
          ...l,
          action: {
            type: "addLabel",
            meta: { label: { id: p } }
          }
        });
      y(!1), we.success(I.length > 1 ? "Labels added successfully" : "Label added successfully");
    } catch {
      we.error("Failed to add label", {
        description: "There was a problem applying this label. Please try again."
      });
    }
  }, [L, l]), m = te(async (I) => {
    try {
      for (const p of I)
        await L({
          ...l,
          action: {
            type: "removeLabel",
            meta: { label: { id: p } }
          }
        });
      w(!1), we.success(I.length > 1 ? "Labels removed successfully" : "Label removed successfully");
    } catch {
      we.error("Failed to remove label", {
        description: "There was a problem removing this label. Please try again."
      });
    }
  }, [L, l]), _ = te(async (I) => {
    const p = l;
    if (I === null) {
      try {
        await L({
          ...p,
          action: { type: "unsubscribe" }
        }), D(!1), we.success("Members unsubscribed successfully");
      } catch {
        we.error("Failed to unsubscribe members", {
          description: "There was a problem unsubscribing these members. Please try again."
        });
      }
      return;
    }
    c(!0);
    try {
      const ee = await Promise.allSettled(
        I.map((ae) => L({
          ...p,
          action: { type: "unsubscribe", newsletter: ae }
        }))
      ), F = ee.filter((ae) => ae.status === "fulfilled").length, k = ee.length;
      D(!1), F === k ? we.success(`Unsubscribed from ${k} ${k === 1 ? "newsletter" : "newsletters"}`) : F > 0 ? we.warning(`Unsubscribed from ${F} of ${k} newsletters`, {
        description: "Some newsletters could not be unsubscribed. Please try again."
      }) : we.error("Failed to unsubscribe members", {
        description: "There was a problem unsubscribing these members. Please try again."
      });
    } catch {
      we.error("Failed to unsubscribe members", {
        description: "There was a problem unsubscribing these members. Please try again."
      });
    } finally {
      c(!1);
    }
  }, [L, l]), h = te(() => {
    B(l, {
      onSuccess: () => {
        N(!1), we.success("Members deleted successfully");
      },
      onError: () => {
        we.error("Failed to delete members", {
          description: "There was a problem deleting these members. Please try again."
        });
      }
    });
  }, [B, l]), A = te(async () => {
    try {
      await vn(r, n);
    } catch (I) {
      throw we.error("Export failed", {
        description: "There was a problem downloading your backup. Please check your connection and try again."
      }), I;
    }
  }, [r, n]);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs(ai, { children: [
      /* @__PURE__ */ a.jsx(ii, { asChild: !0, children: /* @__PURE__ */ a.jsx(se, { "data-testid": "members-actions", variant: "outline", children: /* @__PURE__ */ a.jsx(oi, { className: "size-4" }) }) }),
      /* @__PURE__ */ a.jsxs(li, { align: "end", children: [
        /* @__PURE__ */ a.jsxs(Ue, { onClick: () => f(!0), children: [
          /* @__PURE__ */ a.jsx(Zn, { className: "mr-2 size-4" }),
          "Import members"
        ] }),
        e > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsxs(Ue, { onClick: x, children: [
            /* @__PURE__ */ a.jsx(Fa, { className: "mr-2 size-4" }),
            t ? `Export ${e.toLocaleString()} members` : "Export all members"
          ] }),
          /* @__PURE__ */ a.jsx(rn, {}),
          /* @__PURE__ */ a.jsxs(Ue, { onClick: () => y(!0), children: [
            /* @__PURE__ */ a.jsx(Ta, { className: "mr-2 size-4" }),
            "Add label to ",
            e.toLocaleString(),
            " ",
            e === 1 ? "member" : "members"
          ] }),
          /* @__PURE__ */ a.jsxs(Ue, { onClick: () => w(!0), children: [
            /* @__PURE__ */ a.jsx(Xn, { className: "mr-2 size-4" }),
            "Remove label from ",
            e.toLocaleString(),
            " ",
            e === 1 ? "member" : "members"
          ] }),
          /* @__PURE__ */ a.jsxs(
            Ue,
            {
              disabled: $,
              onClick: () => D(!0),
              children: [
                /* @__PURE__ */ a.jsx(La, { className: "mr-2 size-4" }),
                "Unsubscribe ",
                e.toLocaleString(),
                " ",
                e === 1 ? "member" : "members"
              ]
            }
          ),
          /* @__PURE__ */ a.jsx(rn, {}),
          /* @__PURE__ */ a.jsxs(
            Ue,
            {
              className: "text-destructive focus:text-destructive",
              disabled: !s,
              onClick: () => N(!0),
              children: [
                /* @__PURE__ */ a.jsx(Ma, { className: "mr-2 size-4" }),
                "Delete ",
                e.toLocaleString(),
                " ",
                e === 1 ? "member" : "members"
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(se, { asChild: !0, children: /* @__PURE__ */ a.jsx("a", { className: "font-bold", href: "#/members/new", children: "New member" }) }),
    /* @__PURE__ */ a.jsx(
      zo,
      {
        open: d,
        onComplete: i,
        onOpenChange: f
      }
    ),
    /* @__PURE__ */ a.jsx(
      _o,
      {
        isLoading: W,
        memberCount: e,
        open: u,
        onConfirm: j,
        onOpenChange: y
      }
    ),
    /* @__PURE__ */ a.jsx(
      wo,
      {
        isLoading: W,
        memberCount: e,
        nql: r,
        open: E,
        search: n,
        onConfirm: m,
        onOpenChange: w
      }
    ),
    /* @__PURE__ */ a.jsx(
      So,
      {
        isLoading: W || R,
        memberCount: e,
        newsletters: U,
        open: O,
        onConfirm: _,
        onOpenChange: D
      }
    ),
    /* @__PURE__ */ a.jsx(
      Eo,
      {
        isLoading: T,
        memberCount: e,
        open: P,
        onConfirm: h,
        onExportBackup: A,
        onOpenChange: N
      }
    )
  ] });
}, Ss = ({ children: t, className: e, ...r }) => /* @__PURE__ */ a.jsx("section", { className: Oe("flex gap-6 flex-col p-4 lg:p-8 size-full grow", e), ...r, children: t });
function fl(t, e = {}) {
  const r = e.labels || {};
  return t.map((n) => ({
    value: n,
    label: r[n] ?? n.replaceAll("-", " ")
  }));
}
const dl = {
  "is-any": "is any of",
  "is-not-any": "is none of",
  "does-not-contain": "does not contain",
  "is-less": "before",
  "is-or-less": "on or before",
  "is-greater": "after",
  "is-or-greater": "on or after",
  1: "More like this",
  0: "Less like this"
}, ir = {
  "is-greater": "is greater than",
  "is-less": "is less than"
};
function pl(t) {
  switch (t) {
    case "name":
      return me.createElement(ci, { className: "size-4" });
    case "email":
    case "subscribed":
      return me.createElement(fi, { className: "size-4" });
    case "label":
      return me.createElement(Xn, { className: "size-4" });
    case "last_seen_at":
      return me.createElement(ka, { className: "size-4" });
    case "created_at":
      return me.createElement(Oa, { className: "size-4" });
    case "signup":
      return me.createElement(ui, { className: "size-4" });
    case "tier_id":
    case "subscriptions.status":
      return me.createElement(Ja, { className: "size-4" });
    case "status":
      return me.createElement(qa, { className: "size-4" });
    case "subscriptions.plan_interval":
      return me.createElement(Ya, { className: "size-4" });
    case "subscriptions.start_date":
      return me.createElement(Ka, { className: "size-4" });
    case "subscriptions.current_period_end":
      return me.createElement(Ha, { className: "size-4" });
    case "conversion":
      return me.createElement(Ga, { className: "size-4" });
    case "email_count":
    case "emails.post_id":
      return me.createElement(Wa, { className: "size-4" });
    case "email_opened_count":
    case "opened_emails.post_id":
      return me.createElement(Va, { className: "size-4" });
    case "email_open_rate":
      return me.createElement(za, { className: "size-4" });
    case "clicked_links.post_id":
      return me.createElement(Ba, { className: "size-4" });
    case "newsletter_feedback":
      return me.createElement(Aa, { className: "size-4" });
    case "offer_redemptions":
      return me.createElement(Ua, { className: "size-4" });
    default:
      return t.startsWith("newsletters.") ? me.createElement($a, { className: "size-4" }) : void 0;
  }
}
function ue(t, e = {}, r = dl) {
  const n = t.startsWith("newsletters.") ? tt["newsletters.:slug"] : tt[t];
  return {
    key: t,
    ...n.ui,
    icon: pl(t),
    operators: fl(n.operators, { labels: r }),
    ..."options" in n && n.options ? { options: n.options } : {},
    ...e
  };
}
function vt(t, e) {
  return ue(t, { defaultValue: e });
}
function Be(t, e, r, n) {
  return {
    options: t,
    onSearchChange: e,
    searchValue: r,
    isLoading: t.length === 0 && n
  };
}
function hl(t) {
  const e = /* @__PURE__ */ new Map(), r = [], n = [];
  for (const s of t)
    s.redemption_type === "retention" && (s.cadence === "month" ? r.push(s.id) : s.cadence === "year" && n.push(s.id));
  return r.length > 0 && e.set("retention:month", r), n.length > 0 && e.set("retention:year", n), e;
}
function Es(t) {
  var e;
  return Array.isArray((e = t.metadata) == null ? void 0 : e.offerIds) ? t.metadata.offerIds.filter((r) => typeof r == "string") : null;
}
function js(t) {
  const e = [], r = hl(t);
  for (const n of t)
    n.redemption_type !== "retention" && e.push({ value: n.id, label: n.name });
  return r.has("retention:month") && e.push({
    value: "retention:month",
    label: "Monthly Retention",
    metadata: { offerIds: r.get("retention:month") }
  }), r.has("retention:year") && e.push({
    value: "retention:year",
    label: "Yearly Retention",
    metadata: { offerIds: r.get("retention:year") }
  }), e;
}
function ml(t, e) {
  const r = [], n = /* @__PURE__ */ new Set();
  for (const s of e) {
    const i = Es(s);
    i && i.length > 0 && i.every((d) => t.includes(d)) && (r.push(String(s.value)), i.forEach((d) => {
      n.add(d);
    }));
  }
  for (const s of t)
    n.has(s) || r.push(s);
  return r;
}
function gl(t, e) {
  const r = [];
  for (const n of t) {
    const s = e.find((d) => d.value === n), i = s ? Es(s) : null;
    i ? r.push(...i) : r.push(n);
  }
  return [...new Set(r)];
}
function yl(t) {
  return new Map(t.map((e) => [e.id, e.name]));
}
function bl(t, e, r) {
  const n = t.map((s) => e.find((i) => i.value === s)).filter((s) => !!s);
  return n.length === 1 ? n[0].label : n.length > 1 ? `${n.length} selected` : t.length === 1 ? r.get(t[0]) ?? "Select..." : t.length > 1 ? `${t.length} selected` : "Select...";
}
function vl({
  labelsOptions: t = [],
  tiersOptions: e = [],
  newsletters: r = [],
  hydratedNewsletterSlugs: n = [],
  hasMultipleTiers: s = !1,
  paidMembersEnabled: i = !1,
  emailAnalyticsEnabled: d = !1,
  postResourceOptions: f = [],
  onPostResourceSearchChange: u,
  postResourceSearchValue: y,
  postResourceLoading: E = !1,
  emailResourceOptions: w = [],
  onEmailResourceSearchChange: O,
  emailResourceSearchValue: D,
  emailResourceLoading: P = !1,
  offers: N = [],
  membersTrackSources: S = !1,
  emailTrackOpens: $ = !1,
  emailTrackClicks: U = !1,
  audienceFeedbackEnabled: L = !1,
  siteTimezone: W = "UTC"
}) {
  return de(() => {
    const B = [], T = r.filter((h) => h.status !== "archived"), R = new Set(T.map((h) => h.slug)), c = [...new Set(n)].map((h) => {
      const A = r.find((I) => I.slug === h);
      return {
        slug: h,
        name: (A == null ? void 0 : A.name) ?? h
      };
    }), l = c.filter((h) => !R.has(h.slug)), x = js(N), j = yl(N), m = Te.tz(W).format("YYYY-MM-DD"), _ = [
      ue("name"),
      ue("email")
    ];
    if (t.length > 0 && _.push(ue("label", {
      type: "select",
      options: t,
      customRenderer: (h) => me.createElement(xo, h)
    })), T.length <= 1) {
      _.push(ue("subscribed"));
      for (const h of c)
        _.push(ue(`newsletters.${h.slug}`, {
          label: h.name
        }));
    }
    if (_.push(
      vt("last_seen_at", m),
      vt("created_at", m)
    ), S && _.push(ue("signup", Be(
      f,
      u,
      y,
      E
    ))), B.push({ group: "Basic", fields: _ }), T.length > 1) {
      const h = [
        ue("subscribed", {
          label: "All newsletters",
          options: [
            { value: "subscribed", label: "Subscribed to at least one" },
            { value: "unsubscribed", label: "Unsubscribed from all" },
            { value: "email-disabled", label: "Email disabled" }
          ]
        })
      ];
      for (const A of T)
        h.push(ue(`newsletters.${A.slug}`, {
          label: A.name
        }));
      for (const A of l)
        h.push(ue(`newsletters.${A.slug}`, {
          label: A.name
        }));
      B.push({ group: "Newsletters", fields: h });
    }
    if (i) {
      const h = [];
      s && h.push(ue("tier_id", {
        options: e
      })), h.push(
        ue("status"),
        ue("subscriptions.plan_interval"),
        ue("subscriptions.status"),
        vt("subscriptions.start_date", m),
        vt("subscriptions.current_period_end", m)
      ), S && h.push(ue("conversion", Be(
        f,
        u,
        y,
        E
      ))), N.length > 0 && h.push(ue("offer_redemptions", {
        options: x,
        customValueRenderer: (A) => bl(A, x, j)
      })), B.push({ group: "Subscription", fields: h });
    }
    if (d) {
      const h = [
        ue("email_count", {}, ir),
        ue("email_opened_count", {}, ir)
      ];
      $ && h.push(ue("email_open_rate", {}, ir)), h.push(ue("emails.post_id", Be(
        w,
        O,
        D,
        P
      ))), $ && h.push(ue("opened_emails.post_id", Be(
        w,
        O,
        D,
        P
      ))), U && h.push(ue("clicked_links.post_id", Be(
        w,
        O,
        D,
        P
      ))), L && h.push(ue("newsletter_feedback", Be(
        w,
        O,
        D,
        P
      ))), B.push({ group: "Email", fields: h });
    }
    return B;
  }, [
    L,
    d,
    P,
    w,
    D,
    U,
    $,
    s,
    t,
    S,
    r,
    N,
    n,
    O,
    u,
    i,
    E,
    f,
    y,
    W,
    e
  ]);
}
const xl = "TiersResponseType", _l = Jn({
  dataType: xl,
  path: "/tiers/",
  defaultNextPageParams: (t, e) => {
    var r;
    return {
      ...e,
      page: (((r = t.meta) == null ? void 0 : r.pagination.next) || 1).toString()
    };
  },
  returnData: (t) => {
    const { pages: e } = t, r = e.flatMap((s) => s.tiers), n = e[e.length - 1].meta;
    return {
      tiers: r,
      meta: n,
      isEnd: n ? n.pagination.pages === n.pagination.page : !0
    };
  }
});
function xn(t, e) {
  return e ? `${t}+title:~${et(e)}` : t;
}
const wl = "PagesResponseType", Sl = Ir({
  dataType: wl,
  path: "/pages/"
});
function _n(t) {
  const [e, r] = ce(""), n = t === "post", s = xn(
    n ? "status:published" : "(status:published,status:sent)+newsletter_id:-null",
    e
  ), { data: i, isLoading: d } = di({
    searchParams: {
      filter: s,
      limit: "25",
      fields: "id,title",
      order: "published_at DESC"
    }
  }), { data: f, isLoading: u } = Sl({
    searchParams: {
      filter: xn("status:published", e),
      limit: "25",
      fields: "id,title",
      order: "published_at DESC"
    },
    enabled: n
  }), y = de(() => {
    const w = (i == null ? void 0 : i.posts) || [];
    if (!n)
      return w.map((P) => ({
        value: P.id,
        label: P.title
      }));
    const O = (f == null ? void 0 : f.pages) || [], D = [];
    for (const P of w)
      D.push({ value: P.id, label: P.title });
    for (const P of O)
      D.push({ value: P.id, label: P.title, detail: "Page" });
    return D;
  }, [i, f, n]), E = te((w) => {
    r(w);
  }, []);
  return {
    options: y,
    isLoading: d || n && u,
    searchValue: e,
    onSearchChange: E
  };
}
const El = [];
function wn(t, e) {
  return t.map((r) => r.field !== "offer_redemptions" ? r : {
    ...r,
    values: e(r.values)
  });
}
const Sn = ({
  filters: t,
  onFiltersChange: e
}) => {
  var h, A, I;
  const { data: r } = bs({ searchParams: { limit: "100" } }), { data: n } = _l({ searchParams: { limit: "100" } }), { data: s } = gi({}), { data: i } = ws({ searchParams: { limit: "100" } }), { data: d } = ts({}), { data: f } = rs({}), u = (d == null ? void 0 : d.settings) || [], y = mt(u, "paid_members_enabled") === !0, E = ((h = f == null ? void 0 : f.config) == null ? void 0 : h.emailAnalytics) === !0, w = mt(u, "members_track_sources") === !0, O = mt(u, "email_track_opens") === !0, D = mt(u, "email_track_clicks") === !0, P = ((I = (A = f == null ? void 0 : f.config) == null ? void 0 : A.labs) == null ? void 0 : I.audienceFeedback) === !0, N = es(u), S = (r == null ? void 0 : r.labels) || [], $ = (n == null ? void 0 : n.tiers) || [], U = (i == null ? void 0 : i.newsletters) || [], L = de(() => (s == null ? void 0 : s.offers) ?? El, [s == null ? void 0 : s.offers]), W = $.filter((p) => p.type === "paid" && p.active), B = W.length > 1, T = de(() => js(L), [L]), R = de(() => [...new Set(
    t.map((p) => p.field).filter((p) => p.startsWith("newsletters.")).map((p) => p.slice(12)).filter(Boolean)
  )], [t]), c = de(() => wn(t, (p) => ml(p, T)), [t, T]), l = te((p) => {
    e(wn(p, (ee) => gl(ee, T)));
  }, [e, T]), x = _n("post"), j = _n("email"), m = vl({
    newsletters: U,
    hydratedNewsletterSlugs: R,
    hasMultipleTiers: B,
    paidMembersEnabled: y,
    emailAnalyticsEnabled: E,
    labelsOptions: S.map((p) => ({ value: p.slug, label: p.name })),
    tiersOptions: W.map((p) => ({ value: p.id, label: p.name })),
    offers: L,
    postResourceOptions: x.options,
    onPostResourceSearchChange: x.onSearchChange,
    postResourceSearchValue: x.searchValue,
    postResourceLoading: x.isLoading,
    emailResourceOptions: j.options,
    onEmailResourceSearchChange: j.onSearchChange,
    emailResourceSearchValue: j.searchValue,
    emailResourceLoading: j.isLoading,
    membersTrackSources: w,
    emailTrackOpens: O,
    emailTrackClicks: D,
    audienceFeedbackEnabled: P,
    siteTimezone: N
  }), _ = t.length > 0;
  return /* @__PURE__ */ a.jsx(
    Sa,
    {
      addButtonIcon: _ ? /* @__PURE__ */ a.jsx(Pa, {}) : /* @__PURE__ */ a.jsx(Da, {}),
      addButtonText: _ ? "Add filter" : "Filter",
      allowMultiple: !0,
      className: `[&>button]:order-last ${_ ? "[&>button]:border-none" : "w-auto"}`,
      clearButtonClassName: "font-normal text-muted-foreground",
      clearButtonIcon: /* @__PURE__ */ a.jsx(Mt, {}),
      clearButtonText: "Clear",
      fields: m,
      filters: c,
      keyboardShortcut: "f",
      popoverAlign: _ ? "start" : "end",
      showClearButton: _,
      showSearchInput: !1,
      onChange: l
    }
  );
}, As = ({
  children: t,
  totalMembers: e,
  isLoading: r
}) => /* @__PURE__ */ a.jsxs(kt, { className: "pb-6! relative md:sticky", variant: "inline-nav", children: [
  /* @__PURE__ */ a.jsxs(kt.Title, { children: [
    "Members",
    " ",
    !r && /* @__PURE__ */ a.jsx("span", { className: "font-normal text-muted-foreground", children: e.toLocaleString() })
  ] }),
  t
] }), Os = ({ children: t }) => /* @__PURE__ */ a.jsx("div", { className: "size-full", children: /* @__PURE__ */ a.jsx("div", { className: "relative flex size-full flex-col", children: /* @__PURE__ */ a.jsx("div", { className: "grid w-full grow", children: /* @__PURE__ */ a.jsx("div", { className: "flex h-full flex-col", "data-testid": "members-page", children: t }) }) }) });
function jl(t) {
  if (!t)
    return { text: "Unknown", isKnown: !1 };
  try {
    const e = JSON.parse(t);
    return e.country ? e.country_code === "US" && e.region ? { text: `${e.region}, US`, isKnown: !0 } : { text: e.country, isKnown: !0 } : { text: "Unknown", isKnown: !1 };
  } catch {
    return { text: "Unknown", isKnown: !1 };
  }
}
function Al(t) {
  switch (t) {
    case "paid":
      return "Paid";
    case "comped":
      return "Complimentary";
    default:
      return "Free";
  }
}
function Ol({ item: t }) {
  return /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ a.jsx(
      ga,
      {
        avatarImage: t.avatar_image,
        className: "size-10 min-w-10 md:size-10 md:min-w-10",
        memberId: t.id
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ a.jsx("div", { className: "truncate font-medium", children: t.name || t.email || "Anonymous" }),
      t.name && t.email && /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "truncate text-sm text-muted-foreground",
          "data-testid": "member-email",
          children: t.email
        }
      )
    ] })
  ] });
}
function kl({
  status: t,
  tiers: e
}) {
  const r = e == null ? void 0 : e.map((n) => n.name).join(", ");
  return /* @__PURE__ */ a.jsx("div", { className: "flex min-w-0 justify-end lg:justify-start", children: /* @__PURE__ */ a.jsxs("div", { className: "min-w-0", children: [
    /* @__PURE__ */ a.jsx("div", { className: "text-sm", children: Al(t) }),
    r && /* @__PURE__ */ a.jsx("div", { className: "truncate text-xs text-muted-foreground", children: r })
  ] }) });
}
function Pl({
  emailOpenRate: t
}) {
  const e = t != null;
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: `hidden text-sm lg:block ${e ? "text-foreground" : "text-muted-foreground"}`,
      children: e ? `${Math.round(t)}%` : "N/A"
    }
  );
}
function Dl({
  geolocation: t
}) {
  const e = jl(t);
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: `hidden truncate text-sm lg:block ${e.isKnown ? "text-foreground" : "text-muted-foreground"}`,
      children: e.text
    }
  );
}
function Nl({ createdAt: t }) {
  return /* @__PURE__ */ a.jsxs("div", { className: "hidden lg:block", children: [
    /* @__PURE__ */ a.jsx("div", { className: "text-sm", children: Te.utc(t).format("D MMM YYYY") }),
    /* @__PURE__ */ a.jsx("div", { className: "text-xs text-muted-foreground", children: Te.utc(t).fromNow() })
  ] });
}
function Tl({
  item: t,
  gridCols: e,
  showEmailOpenRate: r,
  onClick: n,
  ...s
}) {
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      ...s,
      className: `hover:bg-muted/50 grid w-full cursor-pointer grid-cols-[minmax(0,1fr)_7rem] items-center gap-2 border-b px-4 py-3 lg:gap-4 ${e}`,
      "data-testid": "members-list-item",
      onClick: () => n(t.id),
      children: [
        /* @__PURE__ */ a.jsx(Ol, { item: t }),
        /* @__PURE__ */ a.jsx(kl, { status: t.status, tiers: t.tiers }),
        r && /* @__PURE__ */ a.jsx(Pl, { emailOpenRate: t.email_open_rate }),
        /* @__PURE__ */ a.jsx(Dl, { geolocation: t.geolocation }),
        /* @__PURE__ */ a.jsx(Nl, { createdAt: t.created_at })
      ]
    }
  );
}
const En = ({ height: t }) => /* @__PURE__ */ a.jsx("div", { "aria-hidden": "true", className: "flex", children: /* @__PURE__ */ a.jsx("div", { className: "flex", style: { height: t } }) }), Rl = Lt(function(e, r) {
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: r,
      ...e,
      "aria-hidden": "true",
      className: "relative flex flex-col",
      children: /* @__PURE__ */ a.jsx("div", { className: "relative z-10 h-[72px] animate-pulse", children: /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "h-full rounded-md bg-muted",
          "data-testid": "loading-placeholder"
        }
      ) })
    }
  );
});
function Cl({
  items: t,
  totalItems: e,
  hasNextPage: r,
  isFetchingNextPage: n,
  fetchNextPage: s,
  isLoading: i,
  showEmailOpenRate: d = !0,
  onRowClick: f
}) {
  const u = Se(null);
  ya({ parentRef: u, isLoading: i });
  const { visibleItems: y, spaceBefore: E, spaceAfter: w } = pi({
    items: t,
    totalItems: e,
    hasNextPage: r,
    isFetchingNextPage: n,
    fetchNextPage: s,
    parentRef: u,
    estimateSize: () => 72
    // Approximate row height
  }), O = (S) => {
    f ? f(S) : window.location.hash = `/members/${S}`;
  }, N = d ? "lg:grid-cols-[3fr_1fr_1fr_1.5fr_1.5fr]" : "lg:grid-cols-[3fr_1fr_1.5fr_1.5fr]";
  return /* @__PURE__ */ a.jsx("div", { ref: u, className: "overflow-hidden", children: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col", "data-testid": "members-list", children: [
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: `sticky top-0 z-10 hidden border-b bg-background lg:grid lg:gap-4 lg:px-4 lg:py-3 ${N}`,
        children: [
          /* @__PURE__ */ a.jsx("div", { className: "text-xs font-medium uppercase tracking-wide text-gray-700", children: "Member" }),
          /* @__PURE__ */ a.jsx("div", { className: "text-xs font-medium uppercase tracking-wide text-gray-700", children: "Status" }),
          d && /* @__PURE__ */ a.jsx("div", { className: "text-xs font-medium uppercase tracking-wide text-gray-700", children: "Open rate" }),
          /* @__PURE__ */ a.jsx("div", { className: "text-xs font-medium uppercase tracking-wide text-gray-700", children: "Location" }),
          /* @__PURE__ */ a.jsx("div", { className: "text-xs font-medium uppercase tracking-wide text-gray-700", children: "Created" })
        ]
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ a.jsx(En, { height: E }),
      y.map(({ key: S, virtualItem: $, item: U, props: L }) => $.index > t.length - 1 ? /* @__PURE__ */ a.jsx(Rl, { ...L }, S) : /* @__PURE__ */ a.jsx(
        Tl,
        {
          ...L,
          gridCols: N,
          item: U,
          showEmailOpenRate: d,
          onClick: O
        },
        S
      )),
      /* @__PURE__ */ a.jsx(En, { height: w })
    ] })
  ] }) });
}
const Il = [
  "subscriptions.plan_interval",
  "subscriptions.status",
  "subscriptions.start_date",
  "subscriptions.current_period_end",
  "conversion",
  "offer_redemptions"
];
function Fl(t, e) {
  return e && t.length === 0 ? !1 : !t.some((r) => Il.includes(r.field));
}
function Ll({
  isFetching: t,
  isFetchingNextPage: e
}) {
  return t && !e;
}
var Ur = {}, _r = { exports: {} };
const Ml = {}, $l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ml
}, Symbol.toStringTag, { value: "Module" })), jn = /* @__PURE__ */ Nr($l);
(function(t, e) {
  var r = function() {
    var n = function(j, m, _, h) {
      for (_ = _ || {}, h = j.length; h--; _[j[h]] = m) ;
      return _;
    }, s = [1, 5], i = [1, 7], d = [1, 8], f = [1, 6, 10], u = [1, 9], y = [1, 6, 8, 10], E = [1, 24], w = [1, 25], O = [1, 26], D = [1, 27], P = [1, 28], N = [1, 29], S = [1, 30], $ = [1, 17], U = [1, 18], L = [1, 19], W = [21, 22, 23, 24, 25, 29, 30], B = [1, 6, 8, 10, 18], T = [1, 47], R = [6, 18], c = {
      trace: function() {
      },
      yy: {},
      symbols_: { error: 2, expressions: 3, expression: 4, andCondition: 5, OR: 6, filterExpr: 7, AND: 8, LPAREN: 9, RPAREN: 10, propExpr: 11, valueExpr: 12, PROP: 13, NOT: 14, REGEXPOP: 15, LBRACKET: 16, inExpr: 17, RBRACKET: 18, OP: 19, VALUE: 20, NULL: 21, TRUE: 22, FALSE: 23, NUMBER: 24, NOW: 25, DATEOP: 26, AMOUNT: 27, INTERVAL: 28, LITERAL: 29, STRING: 30, ADD: 31, SUB: 32, CONTAINS: 33, STARTSWITH: 34, ENDSWITH: 35, GT: 36, LT: 37, GTE: 38, LTE: 39, $accept: 0, $end: 1 },
      terminals_: { 2: "error", 6: "OR", 8: "AND", 9: "LPAREN", 10: "RPAREN", 13: "PROP", 14: "NOT", 16: "LBRACKET", 18: "RBRACKET", 21: "NULL", 22: "TRUE", 23: "FALSE", 24: "NUMBER", 25: "NOW", 27: "AMOUNT", 28: "INTERVAL", 29: "LITERAL", 30: "STRING", 31: "ADD", 32: "SUB", 33: "CONTAINS", 34: "STARTSWITH", 35: "ENDSWITH", 36: "GT", 37: "LT", 38: "GTE", 39: "LTE" },
      productions_: [0, [3, 1], [4, 1], [4, 3], [5, 1], [5, 3], [7, 3], [7, 2], [11, 1], [12, 2], [12, 1], [12, 4], [12, 3], [12, 2], [12, 1], [17, 3], [17, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 4], [20, 1], [20, 1], [26, 1], [26, 1], [15, 2], [15, 2], [15, 2], [19, 1], [19, 1], [19, 1], [19, 1], [19, 1]],
      performAction: function(m, _, h, A, I, p, ee, F) {
        var k = p.length - 1;
        switch (I) {
          case 1:
            return A.debug("expression", p[k]), A.debug("opt", F), p[k] && p[k].yg ? p[k].yg : p[k];
          case 2:
            A.debug("andCondition", p[k]), this.$ = p[k];
            break;
          case 3:
            A.debug("expression OR andCondition", p[k - 2], p[k]), p[k - 2] = p[k - 2].$or ? p[k - 2] : { $or: [A.ungroup(p[k - 2])] }, p[k - 2].$or.push(A.ungroup(p[k])), this.$ = p[k - 2];
            break;
          case 4:
            A.debug("filterExpr", p[k]), this.$ = p[k];
            break;
          case 5:
            A.debug("andCondition AND filterExpr", p[k - 2], p[k]), p[k - 2] = p[k - 2].$and ? p[k - 2] : { $and: [A.ungroup(p[k - 2])] }, p[k - 2].$and.push(A.ungroup(p[k])), this.$ = p[k - 2];
            break;
          case 6:
            A.debug("LPAREN expression RPAREN", p[k - 1]), this.$ = { yg: p[k - 1] };
            break;
          case 7:
            this.$ = { [p[k - 1]]: p[k] };
            break;
          case 8:
            p[k] = p[k].replace(/:$/, ""), p[k] = F.aliases && F.aliases[p[k]] ? F.aliases[p[k]] : p[k], this.$ = p[k];
            break;
          case 9:
            this.$ = { $not: p[k] };
            break;
          case 10:
            this.$ = { $regex: p[k] };
            break;
          case 11:
            this.$ = { $nin: p[k - 1] };
            break;
          case 12:
            this.$ = { $in: p[k - 1] };
            break;
          case 13:
            this.$ = {}, this.$[p[k - 1]] = p[k];
            break;
          case 14:
            this.$ = p[k];
            break;
          case 15:
            this.$.push(p[k]);
            break;
          case 16:
            this.$ = [p[k]];
            break;
          case 17:
            this.$ = null;
            break;
          case 18:
            this.$ = !0;
            break;
          case 19:
            this.$ = !1;
            break;
          case 20:
            this.$ = parseInt(m);
            break;
          case 21:
            this.$ = A.relDateToAbsolute(p[k - 2], p[k - 1], p[k]);
            break;
          case 22:
            this.$ = A.unescape(p[k]);
            break;
          case 23:
            p[k] = p[k].replace(/^'|'$/g, ""), this.$ = A.unescape(p[k]);
            break;
          case 24:
            this.$ = "add";
            break;
          case 25:
            this.$ = "sub";
            break;
          case 26:
            p[k] = p[k].replace(/^'|'$/g, ""), p[k] = A.unescape(p[k]), this.$ = A.stringToRegExp(p[k]);
            break;
          case 27:
            p[k] = p[k].replace(/^'|'$/g, ""), p[k] = A.unescape(p[k]), this.$ = A.stringToRegExp(p[k], "^");
            break;
          case 28:
            p[k] = p[k].replace(/^'|'$/g, ""), p[k] = A.unescape(p[k]), this.$ = A.stringToRegExp(p[k], "$");
            break;
          case 29:
            this.$ = "$ne";
            break;
          case 30:
            this.$ = "$gt";
            break;
          case 31:
            this.$ = "$lt";
            break;
          case 32:
            this.$ = "$gte";
            break;
          case 33:
            this.$ = "$lte";
            break;
        }
      },
      table: [{ 3: 1, 4: 2, 5: 3, 7: 4, 9: s, 11: 6, 13: i }, { 1: [3] }, { 1: [2, 1], 6: d }, n(f, [2, 2], { 8: u }), n(y, [2, 4]), { 4: 10, 5: 3, 7: 4, 9: s, 11: 6, 13: i }, { 12: 11, 14: [1, 12], 15: 13, 16: [1, 14], 19: 15, 20: 16, 21: E, 22: w, 23: O, 24: D, 25: P, 29: N, 30: S, 33: $, 34: U, 35: L, 36: [1, 20], 37: [1, 21], 38: [1, 22], 39: [1, 23] }, n([14, 16, 21, 22, 23, 24, 25, 29, 30, 33, 34, 35, 36, 37, 38, 39], [2, 8]), { 5: 31, 7: 4, 9: s, 11: 6, 13: i }, { 7: 32, 9: s, 11: 6, 13: i }, { 6: d, 10: [1, 33] }, n(y, [2, 7]), n(W, [2, 29], { 15: 34, 16: [1, 35], 33: $, 34: U, 35: L }), n(y, [2, 10]), { 17: 36, 20: 37, 21: E, 22: w, 23: O, 24: D, 25: P, 29: N, 30: S }, { 20: 38, 21: E, 22: w, 23: O, 24: D, 25: P, 29: N, 30: S }, n(y, [2, 14]), { 30: [1, 39] }, { 30: [1, 40] }, { 30: [1, 41] }, n(W, [2, 30]), n(W, [2, 31]), n(W, [2, 32]), n(W, [2, 33]), n(B, [2, 17]), n(B, [2, 18]), n(B, [2, 19]), n(B, [2, 20]), { 26: 42, 31: [1, 43], 32: [1, 44] }, n(B, [2, 22]), n(B, [2, 23]), n(f, [2, 3], { 8: u }), n(y, [2, 5]), n(y, [2, 6]), n(y, [2, 9]), { 17: 45, 20: 37, 21: E, 22: w, 23: O, 24: D, 25: P, 29: N, 30: S }, { 6: T, 18: [1, 46] }, n(R, [2, 16]), n(y, [2, 13]), n(y, [2, 26]), n(y, [2, 27]), n(y, [2, 28]), { 27: [1, 48] }, { 27: [2, 24] }, { 27: [2, 25] }, { 6: T, 18: [1, 49] }, n(y, [2, 12]), { 20: 50, 21: E, 22: w, 23: O, 24: D, 25: P, 29: N, 30: S }, { 28: [1, 51] }, n(y, [2, 11]), n(R, [2, 15]), n(B, [2, 21])],
      defaultActions: { 43: [2, 24], 44: [2, 25] },
      parseError: function(m, _) {
        if (_.recoverable)
          this.trace(m);
        else {
          var h = new Error(m);
          throw h.hash = _, h;
        }
      },
      parse: function(m) {
        var _ = this, h = [0], A = [null], I = [], p = this.table, ee = "", F = 0, k = 0, ae = 2, o = 1, g = I.slice.call(arguments, 1), b = Object.create(this.lexer), V = { yy: {} };
        for (var H in this.yy)
          Object.prototype.hasOwnProperty.call(this.yy, H) && (V.yy[H] = this.yy[H]);
        b.setInput(m, V.yy), V.yy.lexer = b, V.yy.parser = this, typeof b.yylloc > "u" && (b.yylloc = {});
        var q = b.yylloc;
        I.push(q);
        var K = b.options && b.options.ranges;
        typeof V.yy.parseError == "function" ? this.parseError = V.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
        for (var C = function() {
          var he;
          return he = b.lex() || o, typeof he != "number" && (he = _.symbols_[he] || he), he;
        }, z, J, Q, Z, X = {}, ne, Y, ge, pe; ; ) {
          if (J = h[h.length - 1], this.defaultActions[J] ? Q = this.defaultActions[J] : ((z === null || typeof z > "u") && (z = C()), Q = p[J] && p[J][z]), typeof Q > "u" || !Q.length || !Q[0]) {
            var v = "";
            pe = [];
            for (ne in p[J])
              this.terminals_[ne] && ne > ae && pe.push("'" + this.terminals_[ne] + "'");
            b.showPosition ? v = "Parse error on line " + (F + 1) + `:
` + b.showPosition() + `
Expecting ` + pe.join(", ") + ", got '" + (this.terminals_[z] || z) + "'" : v = "Parse error on line " + (F + 1) + ": Unexpected " + (z == o ? "end of input" : "'" + (this.terminals_[z] || z) + "'"), this.parseError(v, {
              text: b.match,
              token: this.terminals_[z] || z,
              line: b.yylineno,
              loc: q,
              expected: pe
            });
          }
          if (Q[0] instanceof Array && Q.length > 1)
            throw new Error("Parse Error: multiple actions possible at state: " + J + ", token: " + z);
          switch (Q[0]) {
            case 1:
              h.push(z), A.push(b.yytext), I.push(b.yylloc), h.push(Q[1]), z = null, k = b.yyleng, ee = b.yytext, F = b.yylineno, q = b.yylloc;
              break;
            case 2:
              if (Y = this.productions_[Q[1]][1], X.$ = A[A.length - Y], X._$ = {
                first_line: I[I.length - (Y || 1)].first_line,
                last_line: I[I.length - 1].last_line,
                first_column: I[I.length - (Y || 1)].first_column,
                last_column: I[I.length - 1].last_column
              }, K && (X._$.range = [
                I[I.length - (Y || 1)].range[0],
                I[I.length - 1].range[1]
              ]), Z = this.performAction.apply(X, [
                ee,
                k,
                F,
                V.yy,
                Q[1],
                A,
                I
              ].concat(g)), typeof Z < "u")
                return Z;
              Y && (h = h.slice(0, -1 * Y * 2), A = A.slice(0, -1 * Y), I = I.slice(0, -1 * Y)), h.push(this.productions_[Q[1]][0]), A.push(X.$), I.push(X._$), ge = p[h[h.length - 2]][h[h.length - 1]], h.push(ge);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }
    };
    c.parseError = function(j, m) {
      var _ = j.split(`
`);
      throw _[0] = "Query Error: unexpected character in filter at char " + (m.loc.first_column + 1), new Error(_.join(`
`));
    };
    var l = function() {
      var j = {
        EOF: 1,
        parseError: function(_, h) {
          if (this.yy.parser)
            this.yy.parser.parseError(_, h);
          else
            throw new Error(_);
        },
        // resets the lexer, sets new input
        setInput: function(m, _) {
          return this.yy = _ || this.yy || {}, this._input = m, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
        },
        // consumes and returns one char from the input
        input: function() {
          var m = this._input[0];
          this.yytext += m, this.yyleng++, this.offset++, this.match += m, this.matched += m;
          var _ = m.match(/(?:\r\n?|\n).*/g);
          return _ ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), m;
        },
        // unshifts one char (or a string) into the input
        unput: function(m) {
          var _ = m.length, h = m.split(/(?:\r\n?|\n)/g);
          this._input = m + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - _), this.offset -= _;
          var A = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), h.length - 1 && (this.yylineno -= h.length - 1);
          var I = this.yylloc.range;
          return this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: h ? (h.length === A.length ? this.yylloc.first_column : 0) + A[A.length - h.length].length - h[0].length : this.yylloc.first_column - _
          }, this.options.ranges && (this.yylloc.range = [I[0], I[0] + this.yyleng - _]), this.yyleng = this.yytext.length, this;
        },
        // When called from action, caches matched text and appends it on next action
        more: function() {
          return this._more = !0, this;
        },
        // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
        reject: function() {
          if (this.options.backtrack_lexer)
            this._backtrack = !0;
          else
            return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
              text: "",
              token: null,
              line: this.yylineno
            });
          return this;
        },
        // retain first n characters of the match
        less: function(m) {
          this.unput(this.match.slice(m));
        },
        // displays already matched input, i.e. for error messages
        pastInput: function() {
          var m = this.matched.substr(0, this.matched.length - this.match.length);
          return (m.length > 20 ? "..." : "") + m.substr(-20).replace(/\n/g, "");
        },
        // displays upcoming input, i.e. for error messages
        upcomingInput: function() {
          var m = this.match;
          return m.length < 20 && (m += this._input.substr(0, 20 - m.length)), (m.substr(0, 20) + (m.length > 20 ? "..." : "")).replace(/\n/g, "");
        },
        // displays the character position where the lexing error occurred, i.e. for error messages
        showPosition: function() {
          var m = this.pastInput(), _ = new Array(m.length + 1).join("-");
          return m + this.upcomingInput() + `
` + _ + "^";
        },
        // test the lexed token: return FALSE when not a match, otherwise return token
        test_match: function(m, _) {
          var h, A, I;
          if (this.options.backtrack_lexer && (I = {
            yylineno: this.yylineno,
            yylloc: {
              first_line: this.yylloc.first_line,
              last_line: this.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column
            },
            yytext: this.yytext,
            match: this.match,
            matches: this.matches,
            matched: this.matched,
            yyleng: this.yyleng,
            offset: this.offset,
            _more: this._more,
            _input: this._input,
            yy: this.yy,
            conditionStack: this.conditionStack.slice(0),
            done: this.done
          }, this.options.ranges && (I.yylloc.range = this.yylloc.range.slice(0))), A = m[0].match(/(?:\r\n?|\n).*/g), A && (this.yylineno += A.length), this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: A ? A[A.length - 1].length - A[A.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + m[0].length
          }, this.yytext += m[0], this.match += m[0], this.matches = m, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(m[0].length), this.matched += m[0], h = this.performAction.call(this, this.yy, this, _, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), h)
            return h;
          if (this._backtrack) {
            for (var p in I)
              this[p] = I[p];
            return !1;
          }
          return !1;
        },
        // return next match in input
        next: function() {
          if (this.done)
            return this.EOF;
          this._input || (this.done = !0);
          var m, _, h, A;
          this._more || (this.yytext = "", this.match = "");
          for (var I = this._currentRules(), p = 0; p < I.length; p++)
            if (h = this._input.match(this.rules[I[p]]), h && (!_ || h[0].length > _[0].length)) {
              if (_ = h, A = p, this.options.backtrack_lexer) {
                if (m = this.test_match(h, I[p]), m !== !1)
                  return m;
                if (this._backtrack) {
                  _ = !1;
                  continue;
                } else
                  return !1;
              } else if (!this.options.flex)
                break;
            }
          return _ ? (m = this.test_match(_, I[A]), m !== !1 ? m : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        },
        // return next match that has a token
        lex: function() {
          var _ = this.next();
          return _ || this.lex();
        },
        // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
        begin: function(_) {
          this.conditionStack.push(_);
        },
        // pop the previously active lexer condition state off the condition stack
        popState: function() {
          var _ = this.conditionStack.length - 1;
          return _ > 0 ? this.conditionStack.pop() : this.conditionStack[0];
        },
        // produce the lexer rule set which is active for the currently active lexer condition state
        _currentRules: function() {
          return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
        },
        // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
        topState: function(_) {
          return _ = this.conditionStack.length - 1 - Math.abs(_ || 0), _ >= 0 ? this.conditionStack[_] : "INITIAL";
        },
        // alias for begin(condition)
        pushState: function(_) {
          this.begin(_);
        },
        // return the number of states currently on the stack
        stateStackSize: function() {
          return this.conditionStack.length;
        },
        options: {},
        performAction: function(_, h, A, I) {
          switch (A) {
            case 0:
              break;
            case 1:
              return 21;
            case 2:
              return 22;
            case 3:
              return 23;
            case 4:
              return 13;
            case 5:
              return 24;
            case 6:
              return 16;
            case 7:
              return 18;
            case 8:
              return this.pushState("reldate"), 25;
            case 9:
              return 32;
            case 10:
              return 31;
            case 11:
              return 27;
            case 12:
              return this.popState(), 28;
            case 13:
              return 29;
            case 14:
              return 30;
            case 15:
              return 9;
            case 16:
              return 10;
            case 17:
              return 6;
            case 18:
              return 8;
            case 19:
              return 14;
            case 20:
              return 38;
            case 21:
              return 39;
            case 22:
              return 36;
            case 23:
              return 37;
            case 24:
              return 34;
            case 25:
              return 35;
            case 26:
              return 33;
            case 27:
              return 29;
          }
        },
        rules: [/^(?:\s+)/, /^(?:(?:null|NULL|Null)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:(?:true|TRUE|True)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:(?:false|FALSE|False)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:[a-zA-Z_][a-zA-Z0-9_\.]*[:])/, /^(?:[0-9]+(\.[0-9]+)?\b(?![\-]))/, /^(?:\[)/, /^(?:\])/, /^(?:now(?=[-+]\d+[dwMyhms](?:([\+\,\(\)\[\]])|$)))/, /^(?:-)/, /^(?:\+)/, /^(?:\d+)/, /^(?:[dwMyhms])/, /^(?:([^\s'"\+\,\(\)\>\<=\[\]\~\-])(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+)/, /^(?:['](\\['"]|[^'"])+?['])/, /^(?:\()/, /^(?:\))/, /^(?:,)/, /^(?:\+)/, /^(?:-)/, /^(?:>=)/, /^(?:<=)/, /^(?:>)/, /^(?:<)/, /^(?:~\^)/, /^(?:~\$)/, /^(?:~)/, /^(?:([a-zA-Z])(?![a-zA-Z'"\,\(\)\>\<=\[\]\~]))/],
        conditions: { reldate: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], inclusive: !0 }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], inclusive: !0 } }
      };
      return j.parseError = function(m, _) {
        var h = m.split(`
`), A, I;
        throw A = h[2].indexOf("^"), I = h[1].charAt(A), h[0] = 'Query Error: unrecognized text "' + I + '" in filter at char ' + (A + 1), Error(h.join(`
`));
      }, j;
    }();
    c.lexer = l;
    function x() {
      this.yy = {};
    }
    return x.prototype = c, c.Parser = x, new x();
  }();
  typeof hi < "u" && (e.parser = r, e.Parser = r.Parser, e.parse = function() {
    return r.parse.apply(r, arguments);
  }, e.main = function(s) {
    s[1] || (console.log("Usage: " + s[0] + " FILE"), process.exit(1));
    var i = jn.readFileSync(jn.normalize(s[1]), "utf8");
    return e.parser.parse(i);
  }, require.main === t && e.main(process.argv.slice(1)));
})(_r, _r.exports);
var Ul = _r.exports, ks = {}, Ps = {}, Ds = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var e = {}, r = Symbol("test"), n = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var s = 42;
  e[r] = s;
  for (var i in e)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
    return !1;
  var d = Object.getOwnPropertySymbols(e);
  if (d.length !== 1 || d[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var f = (
      /** @type {PropertyDescriptor} */
      Object.getOwnPropertyDescriptor(e, r)
    );
    if (f.value !== s || f.enumerable !== !0)
      return !1;
  }
  return !0;
}, Bl = Ds, Vt = function() {
  return Bl() && !!Symbol.toStringTag;
}, Ns = Object, zl = Error, Vl = EvalError, Wl = RangeError, Gl = ReferenceError, Ts = SyntaxError, lt = TypeError, Hl = URIError, Kl = Math.abs, Yl = Math.floor, ql = Math.max, Jl = Math.min, Ql = Math.pow, Zl = Math.round, Xl = Number.isNaN || function(e) {
  return e !== e;
}, ec = Xl, tc = function(e) {
  return ec(e) || e === 0 ? e : e < 0 ? -1 : 1;
}, rc = Object.getOwnPropertyDescriptor, _t = rc;
if (_t)
  try {
    _t([], "length");
  } catch {
    _t = null;
  }
var Je = _t, wt = Object.defineProperty || !1;
if (wt)
  try {
    wt({}, "a", { value: 1 });
  } catch {
    wt = !1;
  }
var Wt = wt, or, An;
function nc() {
  if (An) return or;
  An = 1;
  var t = typeof Symbol < "u" && Symbol, e = Ds;
  return or = function() {
    return typeof t != "function" || typeof Symbol != "function" || typeof t("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : e();
  }, or;
}
var Rs = typeof Reflect < "u" && Reflect.getPrototypeOf || null, sc = Ns, Cs = sc.getPrototypeOf || null, ac = "Function.prototype.bind called on incompatible ", ic = Object.prototype.toString, oc = Math.max, lc = "[object Function]", On = function(e, r) {
  for (var n = [], s = 0; s < e.length; s += 1)
    n[s] = e[s];
  for (var i = 0; i < r.length; i += 1)
    n[i + e.length] = r[i];
  return n;
}, cc = function(e, r) {
  for (var n = [], s = r, i = 0; s < e.length; s += 1, i += 1)
    n[i] = e[s];
  return n;
}, uc = function(t, e) {
  for (var r = "", n = 0; n < t.length; n += 1)
    r += t[n], n + 1 < t.length && (r += e);
  return r;
}, fc = function(e) {
  var r = this;
  if (typeof r != "function" || ic.apply(r) !== lc)
    throw new TypeError(ac + r);
  for (var n = cc(arguments, 1), s, i = function() {
    if (this instanceof s) {
      var E = r.apply(
        this,
        On(n, arguments)
      );
      return Object(E) === E ? E : this;
    }
    return r.apply(
      e,
      On(n, arguments)
    );
  }, d = oc(0, r.length - n.length), f = [], u = 0; u < d; u++)
    f[u] = "$" + u;
  if (s = Function("binder", "return function (" + uc(f, ",") + "){ return binder.apply(this,arguments); }")(i), r.prototype) {
    var y = function() {
    };
    y.prototype = r.prototype, s.prototype = new y(), y.prototype = null;
  }
  return s;
}, dc = fc, ct = Function.prototype.bind || dc, Br = Function.prototype.call, zr = Function.prototype.apply, pc = typeof Reflect < "u" && Reflect && Reflect.apply, hc = ct, mc = zr, gc = Br, yc = pc, Is = yc || hc.call(gc, mc), bc = ct, vc = lt, xc = Br, _c = Is, Vr = function(e) {
  if (e.length < 1 || typeof e[0] != "function")
    throw new vc("a function is required");
  return _c(bc, xc, e);
}, wc = Vr, kn = Je, Fs;
try {
  Fs = /** @type {{ __proto__?: typeof Array.prototype }} */
  [].__proto__ === Array.prototype;
} catch (t) {
  if (!t || typeof t != "object" || !("code" in t) || t.code !== "ERR_PROTO_ACCESS")
    throw t;
}
var lr = !!Fs && kn && kn(
  Object.prototype,
  /** @type {keyof typeof Object.prototype} */
  "__proto__"
), Ls = Object, Pn = Ls.getPrototypeOf, Sc = lr && typeof lr.get == "function" ? wc([lr.get]) : typeof Pn == "function" ? (
  /** @type {import('./get')} */
  function(e) {
    return Pn(e == null ? e : Ls(e));
  }
) : !1, Dn = Rs, Nn = Cs, Tn = Sc, Wr = Dn ? function(e) {
  return Dn(e);
} : Nn ? function(e) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new TypeError("getProto: not an object");
  return Nn(e);
} : Tn ? function(e) {
  return Tn(e);
} : null, Ec = Function.prototype.call, jc = Object.prototype.hasOwnProperty, Ac = ct, Ms = Ac.call(Ec, jc), re, Oc = Ns, kc = zl, Pc = Vl, Dc = Wl, Nc = Gl, Ke = Ts, He = lt, Tc = Hl, Rc = Kl, Cc = Yl, Ic = ql, Fc = Jl, Lc = Ql, Mc = Zl, $c = tc, $s = Function, cr = function(t) {
  try {
    return $s('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, rt = Je, Uc = Wt, ur = function() {
  throw new He();
}, Bc = rt ? function() {
  try {
    return arguments.callee, ur;
  } catch {
    try {
      return rt(arguments, "callee").get;
    } catch {
      return ur;
    }
  }
}() : ur, ze = nc()(), be = Wr, zc = Cs, Vc = Rs, Us = zr, ut = Br, We = {}, Wc = typeof Uint8Array > "u" || !be ? re : be(Uint8Array), Me = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? re : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? re : ArrayBuffer,
  "%ArrayIteratorPrototype%": ze && be ? be([][Symbol.iterator]()) : re,
  "%AsyncFromSyncIteratorPrototype%": re,
  "%AsyncFunction%": We,
  "%AsyncGenerator%": We,
  "%AsyncGeneratorFunction%": We,
  "%AsyncIteratorPrototype%": We,
  "%Atomics%": typeof Atomics > "u" ? re : Atomics,
  "%BigInt%": typeof BigInt > "u" ? re : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? re : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? re : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? re : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": kc,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Pc,
  "%Float16Array%": typeof Float16Array > "u" ? re : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? re : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? re : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? re : FinalizationRegistry,
  "%Function%": $s,
  "%GeneratorFunction%": We,
  "%Int8Array%": typeof Int8Array > "u" ? re : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? re : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? re : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": ze && be ? be(be([][Symbol.iterator]())) : re,
  "%JSON%": typeof JSON == "object" ? JSON : re,
  "%Map%": typeof Map > "u" ? re : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !ze || !be ? re : be((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Oc,
  "%Object.getOwnPropertyDescriptor%": rt,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? re : Promise,
  "%Proxy%": typeof Proxy > "u" ? re : Proxy,
  "%RangeError%": Dc,
  "%ReferenceError%": Nc,
  "%Reflect%": typeof Reflect > "u" ? re : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? re : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !ze || !be ? re : be((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? re : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": ze && be ? be(""[Symbol.iterator]()) : re,
  "%Symbol%": ze ? Symbol : re,
  "%SyntaxError%": Ke,
  "%ThrowTypeError%": Bc,
  "%TypedArray%": Wc,
  "%TypeError%": He,
  "%Uint8Array%": typeof Uint8Array > "u" ? re : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? re : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? re : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? re : Uint32Array,
  "%URIError%": Tc,
  "%WeakMap%": typeof WeakMap > "u" ? re : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? re : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? re : WeakSet,
  "%Function.prototype.call%": ut,
  "%Function.prototype.apply%": Us,
  "%Object.defineProperty%": Uc,
  "%Object.getPrototypeOf%": zc,
  "%Math.abs%": Rc,
  "%Math.floor%": Cc,
  "%Math.max%": Ic,
  "%Math.min%": Fc,
  "%Math.pow%": Lc,
  "%Math.round%": Mc,
  "%Math.sign%": $c,
  "%Reflect.getPrototypeOf%": Vc
};
if (be)
  try {
    null.error;
  } catch (t) {
    var Gc = be(be(t));
    Me["%Error.prototype%"] = Gc;
  }
var Hc = function t(e) {
  var r;
  if (e === "%AsyncFunction%")
    r = cr("async function () {}");
  else if (e === "%GeneratorFunction%")
    r = cr("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    r = cr("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = t("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var s = t("%AsyncGenerator%");
    s && be && (r = be(s.prototype));
  }
  return Me[e] = r, r;
}, Rn = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, ft = ct, Rt = Ms, Kc = ft.call(ut, Array.prototype.concat), Yc = ft.call(Us, Array.prototype.splice), Cn = ft.call(ut, String.prototype.replace), Ct = ft.call(ut, String.prototype.slice), qc = ft.call(ut, RegExp.prototype.exec), Jc = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Qc = /\\(\\)?/g, Zc = function(e) {
  var r = Ct(e, 0, 1), n = Ct(e, -1);
  if (r === "%" && n !== "%")
    throw new Ke("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new Ke("invalid intrinsic syntax, expected opening `%`");
  var s = [];
  return Cn(e, Jc, function(i, d, f, u) {
    s[s.length] = f ? Cn(u, Qc, "$1") : d || i;
  }), s;
}, Xc = function(e, r) {
  var n = e, s;
  if (Rt(Rn, n) && (s = Rn[n], n = "%" + s[0] + "%"), Rt(Me, n)) {
    var i = Me[n];
    if (i === We && (i = Hc(n)), typeof i > "u" && !r)
      throw new He("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: s,
      name: n,
      value: i
    };
  }
  throw new Ke("intrinsic " + e + " does not exist!");
}, Gr = function(e, r) {
  if (typeof e != "string" || e.length === 0)
    throw new He("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new He('"allowMissing" argument must be a boolean');
  if (qc(/^%?[^%]*%?$/, e) === null)
    throw new Ke("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = Zc(e), s = n.length > 0 ? n[0] : "", i = Xc("%" + s + "%", r), d = i.name, f = i.value, u = !1, y = i.alias;
  y && (s = y[0], Yc(n, Kc([0, 1], y)));
  for (var E = 1, w = !0; E < n.length; E += 1) {
    var O = n[E], D = Ct(O, 0, 1), P = Ct(O, -1);
    if ((D === '"' || D === "'" || D === "`" || P === '"' || P === "'" || P === "`") && D !== P)
      throw new Ke("property names with quotes must have matching quotes");
    if ((O === "constructor" || !w) && (u = !0), s += "." + O, d = "%" + s + "%", Rt(Me, d))
      f = Me[d];
    else if (f != null) {
      if (!(O in f)) {
        if (!r)
          throw new He("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (rt && E + 1 >= n.length) {
        var N = rt(f, O);
        w = !!N, w && "get" in N && !("originalValue" in N.get) ? f = N.get : f = f[O];
      } else
        w = Rt(f, O), f = f[O];
      w && !u && (Me[d] = f);
    }
  }
  return f;
}, Bs = { exports: {} }, In = Wt, eu = Ts, Ve = lt, Fn = Je, tu = function(e, r, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new Ve("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new Ve("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new Ve("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new Ve("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new Ve("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new Ve("`loose`, if provided, must be a boolean");
  var s = arguments.length > 3 ? arguments[3] : null, i = arguments.length > 4 ? arguments[4] : null, d = arguments.length > 5 ? arguments[5] : null, f = arguments.length > 6 ? arguments[6] : !1, u = !!Fn && Fn(e, r);
  if (In)
    In(e, r, {
      configurable: d === null && u ? u.configurable : !d,
      enumerable: s === null && u ? u.enumerable : !s,
      value: n,
      writable: i === null && u ? u.writable : !i
    });
  else if (f || !s && !i && !d)
    e[r] = n;
  else
    throw new eu("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, wr = Wt, zs = function() {
  return !!wr;
};
zs.hasArrayLengthDefineBug = function() {
  if (!wr)
    return null;
  try {
    return wr([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var ru = zs, nu = Gr, Ln = tu, su = ru(), Mn = Je, $n = lt, au = nu("%Math.floor%"), iu = function(e, r) {
  if (typeof e != "function")
    throw new $n("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || au(r) !== r)
    throw new $n("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], s = !0, i = !0;
  if ("length" in e && Mn) {
    var d = Mn(e, "length");
    d && !d.configurable && (s = !1), d && !d.writable && (i = !1);
  }
  return (s || i || !n) && (su ? Ln(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r,
    !0,
    !0
  ) : Ln(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r
  )), e;
}, ou = ct, lu = zr, cu = Is, uu = function() {
  return cu(ou, lu, arguments);
};
(function(t) {
  var e = iu, r = Wt, n = Vr, s = uu;
  t.exports = function(d) {
    var f = n(arguments), u = d.length - (arguments.length - 1);
    return e(
      f,
      1 + (u > 0 ? u : 0),
      !0
    );
  }, r ? r(t.exports, "apply", { value: s }) : t.exports.apply = s;
})(Bs);
var Vs = Bs.exports, Ws = Gr, Gs = Vs, fu = Gs(Ws("String.prototype.indexOf")), du = function(e, r) {
  var n = Ws(e, !!r);
  return typeof n == "function" && fu(e, ".prototype.") > -1 ? Gs(n) : n;
}, pu = Vt(), hu = du, Sr = hu("Object.prototype.toString"), Gt = function(e) {
  return pu && e && typeof e == "object" && Symbol.toStringTag in e ? !1 : Sr(e) === "[object Arguments]";
}, Hs = function(e) {
  return Gt(e) ? !0 : e !== null && typeof e == "object" && typeof e.length == "number" && e.length >= 0 && Sr(e) !== "[object Array]" && Sr(e.callee) === "[object Function]";
}, mu = function() {
  return Gt(arguments);
}();
Gt.isLegacyArguments = Hs;
var gu = mu ? Gt : Hs, Ks = Gr, Ys = Vr, yu = Ys([Ks("%String.prototype.indexOf%")]), Ht = function(e, r) {
  var n = (
    /** @type {(this: unknown, ...args: unknown[]) => unknown} */
    Ks(e, !!r)
  );
  return typeof n == "function" && yu(e, ".prototype.") > -1 ? Ys(
    /** @type {const} */
    [n]
  ) : n;
}, Un = Ht, bu = Vt(), vu = Ms, xu = Je, Er;
if (bu) {
  var _u = Un("RegExp.prototype.exec"), Bn = {}, fr = function() {
    throw Bn;
  }, zn = {
    toString: fr,
    valueOf: fr
  };
  typeof Symbol.toPrimitive == "symbol" && (zn[Symbol.toPrimitive] = fr), Er = function(e) {
    if (!e || typeof e != "object")
      return !1;
    var r = (
      /** @type {NonNullable<typeof gOPD>} */
      xu(
        /** @type {{ lastIndex?: unknown }} */
        e,
        "lastIndex"
      )
    ), n = r && vu(r, "value");
    if (!n)
      return !1;
    try {
      _u(
        e,
        /** @type {string} */
        /** @type {unknown} */
        zn
      );
    } catch (s) {
      return s === Bn;
    }
  };
} else {
  var wu = Un("Object.prototype.toString"), Su = "[object RegExp]";
  Er = function(e) {
    return !e || typeof e != "object" && typeof e != "function" ? !1 : wu(e) === Su;
  };
}
var Eu = Er, ju = Ht, Au = Eu, Ou = ju("RegExp.prototype.exec"), ku = lt, Pu = function(e) {
  if (!Au(e))
    throw new ku("`regex` must be a RegExp");
  return function(n) {
    return Ou(e, n) !== null;
  };
}, qs = Ht, Du = Pu, Nu = Du(/^\s*(?:function)?\*/), Js = Vt(), dr = Wr, Tu = qs("Object.prototype.toString"), Ru = qs("Function.prototype.toString"), Cu = function() {
  if (!Js)
    return !1;
  try {
    return Function("return function*() {}")();
  } catch {
  }
}, pr, Iu = function(e) {
  if (typeof e != "function")
    return !1;
  if (Nu(Ru(e)))
    return !0;
  if (!Js) {
    var r = Tu(e);
    return r === "[object GeneratorFunction]";
  }
  if (!dr)
    return !1;
  if (typeof pr > "u") {
    var n = Cu();
    pr = n ? (
      /** @type {GeneratorFunctionConstructor} */
      dr(n)
    ) : !1;
  }
  return dr(e) === pr;
}, Qs = Function.prototype.toString, Ge = typeof Reflect == "object" && Reflect !== null && Reflect.apply, jr, St;
if (typeof Ge == "function" && typeof Object.defineProperty == "function")
  try {
    jr = Object.defineProperty({}, "length", {
      get: function() {
        throw St;
      }
    }), St = {}, Ge(function() {
      throw 42;
    }, null, jr);
  } catch (t) {
    t !== St && (Ge = null);
  }
else
  Ge = null;
var Fu = /^\s*class\b/, Ar = function(e) {
  try {
    var r = Qs.call(e);
    return Fu.test(r);
  } catch {
    return !1;
  }
}, hr = function(e) {
  try {
    return Ar(e) ? !1 : (Qs.call(e), !0);
  } catch {
    return !1;
  }
}, Et = Object.prototype.toString, Lu = "[object Object]", Mu = "[object Function]", $u = "[object GeneratorFunction]", Uu = "[object HTMLAllCollection]", Bu = "[object HTML document.all class]", zu = "[object HTMLCollection]", Vu = typeof Symbol == "function" && !!Symbol.toStringTag, Wu = !(0 in [,]), Or = function() {
  return !1;
};
if (typeof document == "object") {
  var Gu = document.all;
  Et.call(Gu) === Et.call(document.all) && (Or = function(e) {
    if ((Wu || !e) && (typeof e > "u" || typeof e == "object"))
      try {
        var r = Et.call(e);
        return (r === Uu || r === Bu || r === zu || r === Lu) && e("") == null;
      } catch {
      }
    return !1;
  });
}
var Hu = Ge ? function(e) {
  if (Or(e))
    return !0;
  if (!e || typeof e != "function" && typeof e != "object")
    return !1;
  try {
    Ge(e, null, jr);
  } catch (r) {
    if (r !== St)
      return !1;
  }
  return !Ar(e) && hr(e);
} : function(e) {
  if (Or(e))
    return !0;
  if (!e || typeof e != "function" && typeof e != "object")
    return !1;
  if (Vu)
    return hr(e);
  if (Ar(e))
    return !1;
  var r = Et.call(e);
  return r !== Mu && r !== $u && !/^\[object HTML/.test(r) ? !1 : hr(e);
}, Ku = Hu, Yu = Object.prototype.toString, Zs = Object.prototype.hasOwnProperty, qu = function(e, r, n) {
  for (var s = 0, i = e.length; s < i; s++)
    Zs.call(e, s) && (n == null ? r(e[s], s, e) : r.call(n, e[s], s, e));
}, Ju = function(e, r, n) {
  for (var s = 0, i = e.length; s < i; s++)
    n == null ? r(e.charAt(s), s, e) : r.call(n, e.charAt(s), s, e);
}, Qu = function(e, r, n) {
  for (var s in e)
    Zs.call(e, s) && (n == null ? r(e[s], s, e) : r.call(n, e[s], s, e));
};
function Zu(t) {
  return Yu.call(t) === "[object Array]";
}
var Xu = function(e, r, n) {
  if (!Ku(r))
    throw new TypeError("iterator must be a function");
  var s;
  arguments.length >= 3 && (s = n), Zu(e) ? qu(e, r, s) : typeof e == "string" ? Ju(e, r, s) : Qu(e, r, s);
}, ef = [
  "Float16Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Int16Array",
  "Int32Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array"
], mr = ef, tf = typeof globalThis > "u" ? Dr : globalThis, rf = function() {
  for (var e = [], r = 0; r < mr.length; r++)
    typeof tf[mr[r]] == "function" && (e[e.length] = mr[r]);
  return e;
}, It = Xu, nf = rf, Vn = Vs, Hr = Ht, jt = Je, xt = Wr, sf = Hr("Object.prototype.toString"), Xs = Vt(), Wn = typeof globalThis > "u" ? Dr : globalThis, kr = nf(), Kr = Hr("String.prototype.slice"), af = Hr("Array.prototype.indexOf", !0) || function(e, r) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n] === r)
      return n;
  return -1;
}, Ft = { __proto__: null };
Xs && jt && xt ? It(kr, function(t) {
  var e = new Wn[t]();
  if (Symbol.toStringTag in e && xt) {
    var r = xt(e), n = jt(r, Symbol.toStringTag);
    if (!n && r) {
      var s = xt(r);
      n = jt(s, Symbol.toStringTag);
    }
    Ft["$" + t] = Vn(n.get);
  }
}) : It(kr, function(t) {
  var e = new Wn[t](), r = e.slice || e.set;
  r && (Ft[
    /** @type {`$${import('.').TypedArrayName}`} */
    "$" + t
  ] = /** @type {import('./types').BoundSlice | import('./types').BoundSet} */
  // @ts-expect-error TODO FIXME
  Vn(r));
});
var of = function(e) {
  var r = !1;
  return It(
    /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
    Ft,
    /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
    function(n, s) {
      if (!r)
        try {
          "$" + n(e) === s && (r = /** @type {import('.').TypedArrayName} */
          Kr(s, 1));
        } catch {
        }
    }
  ), r;
}, lf = function(e) {
  var r = !1;
  return It(
    /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
    Ft,
    /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
    function(n, s) {
      if (!r)
        try {
          n(e), r = /** @type {import('.').TypedArrayName} */
          Kr(s, 1);
        } catch {
        }
    }
  ), r;
}, ea = function(e) {
  if (!e || typeof e != "object")
    return !1;
  if (!Xs) {
    var r = Kr(sf(e), 8, -1);
    return af(kr, r) > -1 ? r : r !== "Object" ? !1 : lf(e);
  }
  return jt ? of(e) : null;
}, cf = ea, uf = function(e) {
  return !!cf(e);
};
(function(t) {
  var e = gu, r = Iu, n = ea, s = uf;
  function i(v) {
    return v.call.bind(v);
  }
  var d = typeof BigInt < "u", f = typeof Symbol < "u", u = i(Object.prototype.toString), y = i(Number.prototype.valueOf), E = i(String.prototype.valueOf), w = i(Boolean.prototype.valueOf);
  if (d)
    var O = i(BigInt.prototype.valueOf);
  if (f)
    var D = i(Symbol.prototype.valueOf);
  function P(v, he) {
    if (typeof v != "object")
      return !1;
    try {
      return he(v), !0;
    } catch {
      return !1;
    }
  }
  t.isArgumentsObject = e, t.isGeneratorFunction = r, t.isTypedArray = s;
  function N(v) {
    return typeof Promise < "u" && v instanceof Promise || v !== null && typeof v == "object" && typeof v.then == "function" && typeof v.catch == "function";
  }
  t.isPromise = N;
  function S(v) {
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(v) : s(v) || g(v);
  }
  t.isArrayBufferView = S;
  function $(v) {
    return n(v) === "Uint8Array";
  }
  t.isUint8Array = $;
  function U(v) {
    return n(v) === "Uint8ClampedArray";
  }
  t.isUint8ClampedArray = U;
  function L(v) {
    return n(v) === "Uint16Array";
  }
  t.isUint16Array = L;
  function W(v) {
    return n(v) === "Uint32Array";
  }
  t.isUint32Array = W;
  function B(v) {
    return n(v) === "Int8Array";
  }
  t.isInt8Array = B;
  function T(v) {
    return n(v) === "Int16Array";
  }
  t.isInt16Array = T;
  function R(v) {
    return n(v) === "Int32Array";
  }
  t.isInt32Array = R;
  function c(v) {
    return n(v) === "Float32Array";
  }
  t.isFloat32Array = c;
  function l(v) {
    return n(v) === "Float64Array";
  }
  t.isFloat64Array = l;
  function x(v) {
    return n(v) === "BigInt64Array";
  }
  t.isBigInt64Array = x;
  function j(v) {
    return n(v) === "BigUint64Array";
  }
  t.isBigUint64Array = j;
  function m(v) {
    return u(v) === "[object Map]";
  }
  m.working = typeof Map < "u" && m(/* @__PURE__ */ new Map());
  function _(v) {
    return typeof Map > "u" ? !1 : m.working ? m(v) : v instanceof Map;
  }
  t.isMap = _;
  function h(v) {
    return u(v) === "[object Set]";
  }
  h.working = typeof Set < "u" && h(/* @__PURE__ */ new Set());
  function A(v) {
    return typeof Set > "u" ? !1 : h.working ? h(v) : v instanceof Set;
  }
  t.isSet = A;
  function I(v) {
    return u(v) === "[object WeakMap]";
  }
  I.working = typeof WeakMap < "u" && I(/* @__PURE__ */ new WeakMap());
  function p(v) {
    return typeof WeakMap > "u" ? !1 : I.working ? I(v) : v instanceof WeakMap;
  }
  t.isWeakMap = p;
  function ee(v) {
    return u(v) === "[object WeakSet]";
  }
  ee.working = typeof WeakSet < "u" && ee(/* @__PURE__ */ new WeakSet());
  function F(v) {
    return ee(v);
  }
  t.isWeakSet = F;
  function k(v) {
    return u(v) === "[object ArrayBuffer]";
  }
  k.working = typeof ArrayBuffer < "u" && k(new ArrayBuffer());
  function ae(v) {
    return typeof ArrayBuffer > "u" ? !1 : k.working ? k(v) : v instanceof ArrayBuffer;
  }
  t.isArrayBuffer = ae;
  function o(v) {
    return u(v) === "[object DataView]";
  }
  o.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && o(new DataView(new ArrayBuffer(1), 0, 1));
  function g(v) {
    return typeof DataView > "u" ? !1 : o.working ? o(v) : v instanceof DataView;
  }
  t.isDataView = g;
  var b = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
  function V(v) {
    return u(v) === "[object SharedArrayBuffer]";
  }
  function H(v) {
    return typeof b > "u" ? !1 : (typeof V.working > "u" && (V.working = V(new b())), V.working ? V(v) : v instanceof b);
  }
  t.isSharedArrayBuffer = H;
  function q(v) {
    return u(v) === "[object AsyncFunction]";
  }
  t.isAsyncFunction = q;
  function K(v) {
    return u(v) === "[object Map Iterator]";
  }
  t.isMapIterator = K;
  function C(v) {
    return u(v) === "[object Set Iterator]";
  }
  t.isSetIterator = C;
  function z(v) {
    return u(v) === "[object Generator]";
  }
  t.isGeneratorObject = z;
  function J(v) {
    return u(v) === "[object WebAssembly.Module]";
  }
  t.isWebAssemblyCompiledModule = J;
  function Q(v) {
    return P(v, y);
  }
  t.isNumberObject = Q;
  function Z(v) {
    return P(v, E);
  }
  t.isStringObject = Z;
  function X(v) {
    return P(v, w);
  }
  t.isBooleanObject = X;
  function ne(v) {
    return d && P(v, O);
  }
  t.isBigIntObject = ne;
  function Y(v) {
    return f && P(v, D);
  }
  t.isSymbolObject = Y;
  function ge(v) {
    return Q(v) || Z(v) || X(v) || ne(v) || Y(v);
  }
  t.isBoxedPrimitive = ge;
  function pe(v) {
    return typeof Uint8Array < "u" && (ae(v) || H(v));
  }
  t.isAnyArrayBuffer = pe, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(v) {
    Object.defineProperty(t, v, {
      enumerable: !1,
      value: function() {
        throw new Error(v + " is not supported in userland");
      }
    });
  });
})(Ps);
var ff = function(e) {
  return e && typeof e == "object" && typeof e.copy == "function" && typeof e.fill == "function" && typeof e.readUInt8 == "function";
}, Pr = { exports: {} };
typeof Object.create == "function" ? Pr.exports = function(e, r) {
  r && (e.super_ = r, e.prototype = Object.create(r.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }));
} : Pr.exports = function(e, r) {
  if (r) {
    e.super_ = r;
    var n = function() {
    };
    n.prototype = r.prototype, e.prototype = new n(), e.prototype.constructor = e;
  }
};
var df = Pr.exports;
(function(t) {
  var e = Object.getOwnPropertyDescriptors || function(g) {
    for (var b = Object.keys(g), V = {}, H = 0; H < b.length; H++)
      V[b[H]] = Object.getOwnPropertyDescriptor(g, b[H]);
    return V;
  }, r = /%[sdj%]/g;
  t.format = function(o) {
    if (!B(o)) {
      for (var g = [], b = 0; b < arguments.length; b++)
        g.push(d(arguments[b]));
      return g.join(" ");
    }
    for (var b = 1, V = arguments, H = V.length, q = String(o).replace(r, function(C) {
      if (C === "%%") return "%";
      if (b >= H) return C;
      switch (C) {
        case "%s":
          return String(V[b++]);
        case "%d":
          return Number(V[b++]);
        case "%j":
          try {
            return JSON.stringify(V[b++]);
          } catch {
            return "[Circular]";
          }
        default:
          return C;
      }
    }), K = V[b]; b < H; K = V[++b])
      U(K) || !l(K) ? q += " " + K : q += " " + d(K);
    return q;
  }, t.deprecate = function(o, g) {
    if (typeof process < "u" && process.noDeprecation === !0)
      return o;
    if (typeof process > "u")
      return function() {
        return t.deprecate(o, g).apply(this, arguments);
      };
    var b = !1;
    function V() {
      if (!b) {
        if (process.throwDeprecation)
          throw new Error(g);
        process.traceDeprecation ? console.trace(g) : console.error(g), b = !0;
      }
      return o.apply(this, arguments);
    }
    return V;
  };
  var n = {}, s = /^$/;
  if (process.env.NODE_DEBUG) {
    var i = process.env.NODE_DEBUG;
    i = i.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), s = new RegExp("^" + i + "$", "i");
  }
  t.debuglog = function(o) {
    if (o = o.toUpperCase(), !n[o])
      if (s.test(o)) {
        var g = process.pid;
        n[o] = function() {
          var b = t.format.apply(t, arguments);
          console.error("%s %d: %s", o, g, b);
        };
      } else
        n[o] = function() {
        };
    return n[o];
  };
  function d(o, g) {
    var b = {
      seen: [],
      stylize: u
    };
    return arguments.length >= 3 && (b.depth = arguments[2]), arguments.length >= 4 && (b.colors = arguments[3]), $(g) ? b.showHidden = g : g && t._extend(b, g), R(b.showHidden) && (b.showHidden = !1), R(b.depth) && (b.depth = 2), R(b.colors) && (b.colors = !1), R(b.customInspect) && (b.customInspect = !0), b.colors && (b.stylize = f), E(b, o, b.depth);
  }
  t.inspect = d, d.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39]
  }, d.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    // "name": intentionally not styling
    regexp: "red"
  };
  function f(o, g) {
    var b = d.styles[g];
    return b ? "\x1B[" + d.colors[b][0] + "m" + o + "\x1B[" + d.colors[b][1] + "m" : o;
  }
  function u(o, g) {
    return o;
  }
  function y(o) {
    var g = {};
    return o.forEach(function(b, V) {
      g[b] = !0;
    }), g;
  }
  function E(o, g, b) {
    if (o.customInspect && g && m(g.inspect) && // Filter out the util module, it's inspect function is special
    g.inspect !== t.inspect && // Also filter out any prototype objects using the circular check.
    !(g.constructor && g.constructor.prototype === g)) {
      var V = g.inspect(b, o);
      return B(V) || (V = E(o, V, b)), V;
    }
    var H = w(o, g);
    if (H)
      return H;
    var q = Object.keys(g), K = y(q);
    if (o.showHidden && (q = Object.getOwnPropertyNames(g)), j(g) && (q.indexOf("message") >= 0 || q.indexOf("description") >= 0))
      return O(g);
    if (q.length === 0) {
      if (m(g)) {
        var C = g.name ? ": " + g.name : "";
        return o.stylize("[Function" + C + "]", "special");
      }
      if (c(g))
        return o.stylize(RegExp.prototype.toString.call(g), "regexp");
      if (x(g))
        return o.stylize(Date.prototype.toString.call(g), "date");
      if (j(g))
        return O(g);
    }
    var z = "", J = !1, Q = ["{", "}"];
    if (S(g) && (J = !0, Q = ["[", "]"]), m(g)) {
      var Z = g.name ? ": " + g.name : "";
      z = " [Function" + Z + "]";
    }
    if (c(g) && (z = " " + RegExp.prototype.toString.call(g)), x(g) && (z = " " + Date.prototype.toUTCString.call(g)), j(g) && (z = " " + O(g)), q.length === 0 && (!J || g.length == 0))
      return Q[0] + z + Q[1];
    if (b < 0)
      return c(g) ? o.stylize(RegExp.prototype.toString.call(g), "regexp") : o.stylize("[Object]", "special");
    o.seen.push(g);
    var X;
    return J ? X = D(o, g, b, K, q) : X = q.map(function(ne) {
      return P(o, g, b, K, ne, J);
    }), o.seen.pop(), N(X, z, Q);
  }
  function w(o, g) {
    if (R(g))
      return o.stylize("undefined", "undefined");
    if (B(g)) {
      var b = "'" + JSON.stringify(g).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return o.stylize(b, "string");
    }
    if (W(g))
      return o.stylize("" + g, "number");
    if ($(g))
      return o.stylize("" + g, "boolean");
    if (U(g))
      return o.stylize("null", "null");
  }
  function O(o) {
    return "[" + Error.prototype.toString.call(o) + "]";
  }
  function D(o, g, b, V, H) {
    for (var q = [], K = 0, C = g.length; K < C; ++K)
      ee(g, String(K)) ? q.push(P(
        o,
        g,
        b,
        V,
        String(K),
        !0
      )) : q.push("");
    return H.forEach(function(z) {
      z.match(/^\d+$/) || q.push(P(
        o,
        g,
        b,
        V,
        z,
        !0
      ));
    }), q;
  }
  function P(o, g, b, V, H, q) {
    var K, C, z;
    if (z = Object.getOwnPropertyDescriptor(g, H) || { value: g[H] }, z.get ? z.set ? C = o.stylize("[Getter/Setter]", "special") : C = o.stylize("[Getter]", "special") : z.set && (C = o.stylize("[Setter]", "special")), ee(V, H) || (K = "[" + H + "]"), C || (o.seen.indexOf(z.value) < 0 ? (U(b) ? C = E(o, z.value, null) : C = E(o, z.value, b - 1), C.indexOf(`
`) > -1 && (q ? C = C.split(`
`).map(function(J) {
      return "  " + J;
    }).join(`
`).slice(2) : C = `
` + C.split(`
`).map(function(J) {
      return "   " + J;
    }).join(`
`))) : C = o.stylize("[Circular]", "special")), R(K)) {
      if (q && H.match(/^\d+$/))
        return C;
      K = JSON.stringify("" + H), K.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (K = K.slice(1, -1), K = o.stylize(K, "name")) : (K = K.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), K = o.stylize(K, "string"));
    }
    return K + ": " + C;
  }
  function N(o, g, b) {
    var V = o.reduce(function(H, q) {
      return q.indexOf(`
`) >= 0, H + q.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    return V > 60 ? b[0] + (g === "" ? "" : g + `
 `) + " " + o.join(`,
  `) + " " + b[1] : b[0] + g + " " + o.join(", ") + " " + b[1];
  }
  t.types = Ps;
  function S(o) {
    return Array.isArray(o);
  }
  t.isArray = S;
  function $(o) {
    return typeof o == "boolean";
  }
  t.isBoolean = $;
  function U(o) {
    return o === null;
  }
  t.isNull = U;
  function L(o) {
    return o == null;
  }
  t.isNullOrUndefined = L;
  function W(o) {
    return typeof o == "number";
  }
  t.isNumber = W;
  function B(o) {
    return typeof o == "string";
  }
  t.isString = B;
  function T(o) {
    return typeof o == "symbol";
  }
  t.isSymbol = T;
  function R(o) {
    return o === void 0;
  }
  t.isUndefined = R;
  function c(o) {
    return l(o) && h(o) === "[object RegExp]";
  }
  t.isRegExp = c, t.types.isRegExp = c;
  function l(o) {
    return typeof o == "object" && o !== null;
  }
  t.isObject = l;
  function x(o) {
    return l(o) && h(o) === "[object Date]";
  }
  t.isDate = x, t.types.isDate = x;
  function j(o) {
    return l(o) && (h(o) === "[object Error]" || o instanceof Error);
  }
  t.isError = j, t.types.isNativeError = j;
  function m(o) {
    return typeof o == "function";
  }
  t.isFunction = m;
  function _(o) {
    return o === null || typeof o == "boolean" || typeof o == "number" || typeof o == "string" || typeof o == "symbol" || // ES6 symbol
    typeof o > "u";
  }
  t.isPrimitive = _, t.isBuffer = ff;
  function h(o) {
    return Object.prototype.toString.call(o);
  }
  function A(o) {
    return o < 10 ? "0" + o.toString(10) : o.toString(10);
  }
  var I = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  function p() {
    var o = /* @__PURE__ */ new Date(), g = [
      A(o.getHours()),
      A(o.getMinutes()),
      A(o.getSeconds())
    ].join(":");
    return [o.getDate(), I[o.getMonth()], g].join(" ");
  }
  t.log = function() {
    console.log("%s - %s", p(), t.format.apply(t, arguments));
  }, t.inherits = df, t._extend = function(o, g) {
    if (!g || !l(g)) return o;
    for (var b = Object.keys(g), V = b.length; V--; )
      o[b[V]] = g[b[V]];
    return o;
  };
  function ee(o, g) {
    return Object.prototype.hasOwnProperty.call(o, g);
  }
  var F = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
  t.promisify = function(g) {
    if (typeof g != "function")
      throw new TypeError('The "original" argument must be of type Function');
    if (F && g[F]) {
      var b = g[F];
      if (typeof b != "function")
        throw new TypeError('The "util.promisify.custom" argument must be of type Function');
      return Object.defineProperty(b, F, {
        value: b,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), b;
    }
    function b() {
      for (var V, H, q = new Promise(function(z, J) {
        V = z, H = J;
      }), K = [], C = 0; C < arguments.length; C++)
        K.push(arguments[C]);
      K.push(function(z, J) {
        z ? H(z) : V(J);
      });
      try {
        g.apply(this, K);
      } catch (z) {
        H(z);
      }
      return q;
    }
    return Object.setPrototypeOf(b, Object.getPrototypeOf(g)), F && Object.defineProperty(b, F, {
      value: b,
      enumerable: !1,
      writable: !1,
      configurable: !0
    }), Object.defineProperties(
      b,
      e(g)
    );
  }, t.promisify.custom = F;
  function k(o, g) {
    if (!o) {
      var b = new Error("Promise was rejected with a falsy value");
      b.reason = o, o = b;
    }
    return g(o);
  }
  function ae(o) {
    if (typeof o != "function")
      throw new TypeError('The "original" argument must be of type Function');
    function g() {
      for (var b = [], V = 0; V < arguments.length; V++)
        b.push(arguments[V]);
      var H = b.pop();
      if (typeof H != "function")
        throw new TypeError("The last argument must be of type Function");
      var q = this, K = function() {
        return H.apply(q, arguments);
      };
      o.apply(this, b).then(
        function(C) {
          process.nextTick(K.bind(null, null, C));
        },
        function(C) {
          process.nextTick(k.bind(null, C, K));
        }
      );
    }
    return Object.setPrototypeOf(g, Object.getPrototypeOf(o)), Object.defineProperties(
      g,
      e(o)
    ), g;
  }
  t.callbackify = ae;
})(ks);
function ve(t) {
  if (t === null || t === !0 || t === !1)
    return NaN;
  var e = Number(t);
  return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
}
function $e(t, e) {
  if (e.length < t)
    throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + e.length + " present");
}
function Yr(t) {
  $e(1, arguments);
  var e = Object.prototype.toString.call(t);
  return t instanceof Date || Ze(t) === "object" && e === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || e === "[object Number]" ? new Date(t) : ((typeof t == "string" || e === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function ta(t, e) {
  $e(2, arguments);
  var r = Yr(t), n = ve(e);
  return isNaN(n) ? /* @__PURE__ */ new Date(NaN) : (n && r.setDate(r.getDate() + n), r);
}
function ra(t, e) {
  $e(2, arguments);
  var r = Yr(t), n = ve(e);
  if (isNaN(n))
    return /* @__PURE__ */ new Date(NaN);
  if (!n)
    return r;
  var s = r.getDate(), i = new Date(r.getTime());
  i.setMonth(r.getMonth() + n + 1, 0);
  var d = i.getDate();
  return s >= d ? i : (r.setFullYear(i.getFullYear(), i.getMonth(), s), r);
}
function pf(t, e) {
  if ($e(2, arguments), !e || Ze(e) !== "object") return /* @__PURE__ */ new Date(NaN);
  var r = e.years ? ve(e.years) : 0, n = e.months ? ve(e.months) : 0, s = e.weeks ? ve(e.weeks) : 0, i = e.days ? ve(e.days) : 0, d = e.hours ? ve(e.hours) : 0, f = e.minutes ? ve(e.minutes) : 0, u = e.seconds ? ve(e.seconds) : 0, y = Yr(t), E = n || r ? ra(y, n + r * 12) : y, w = i || s ? ta(E, i + s * 7) : E, O = f + d * 60, D = u + O * 60, P = D * 1e3, N = new Date(w.getTime() + P);
  return N;
}
const hf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pf
}, Symbol.toStringTag, { value: "Module" })), mf = /* @__PURE__ */ Nr(hf);
function gf(t, e) {
  $e(2, arguments);
  var r = ve(e);
  return ta(t, -r);
}
function yf(t, e) {
  $e(2, arguments);
  var r = ve(e);
  return ra(t, -r);
}
function bf(t, e) {
  if ($e(2, arguments), !e || Ze(e) !== "object") return /* @__PURE__ */ new Date(NaN);
  var r = e.years ? ve(e.years) : 0, n = e.months ? ve(e.months) : 0, s = e.weeks ? ve(e.weeks) : 0, i = e.days ? ve(e.days) : 0, d = e.hours ? ve(e.hours) : 0, f = e.minutes ? ve(e.minutes) : 0, u = e.seconds ? ve(e.seconds) : 0, y = yf(t, n + r * 12), E = gf(y, i + s * 7), w = f + d * 60, O = u + w * 60, D = O * 1e3, P = new Date(E.getTime() - D);
  return P;
}
const vf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bf
}, Symbol.toStringTag, { value: "Module" })), xf = /* @__PURE__ */ Nr(vf), _f = ks, wf = mf, Sf = xf, Ef = {
  add: wf,
  sub: Sf
}, jf = {
  d: "days",
  w: "weeks",
  M: "months",
  y: "years",
  h: "hours",
  m: "minutes",
  s: "seconds"
}, Af = (t) => t.toISOString().replace("T", " ").replace(/\.[0-9]{3}Z/, "");
var Of = {
  ungroup(t) {
    return t.yg ? t.yg : t;
  },
  unescape(t) {
    const e = new RegExp(`\\\\(['"])`, "g");
    return t.replace(e, "$1");
  },
  stringToRegExp(t, e) {
    let r = t.replace(/[.*+?^$(){}|[\]\\]/g, "\\$&");
    return e === "^" ? r = "^" + r : e === "$" && (r = r + "$"), new RegExp(r, "i");
  },
  relDateToAbsolute(t, e, r) {
    const n = /* @__PURE__ */ new Date(), s = Ef[t](n, { [jf[r]]: e });
    return Af(s);
  },
  debug() {
    if (!process.env.DEBUG || !/nql/.test(process.env.DEBUG))
      return;
    const t = arguments[0], e = Array.prototype.slice.call(arguments, 1), r = [t];
    e.forEach(function(n) {
      r.push(_f.inspect(n, !1, null));
    }), console.log.apply(this, r);
  }
};
const Ie = Ul.parser;
Ie.yy = Of;
Ur.lex = (t) => {
  Ie.lexer.setInput(t);
  let e = Ie.lexer.lex();
  const r = [];
  for (; e !== Ie.lexer.EOF; )
    r.push({ token: Ie.terminals_[e], matched: Ie.lexer.match }), e = Ie.lexer.lex();
  return r;
};
Ur.parse = (t, e) => Ie.parse(t, e || {});
var kf = Ur;
const Pf = /* @__PURE__ */ Hn(kf);
function na(t) {
  if (t)
    try {
      return Pf.parse(t);
    } catch {
      return;
    }
}
function Df(t) {
  return t.map((e, r) => ({
    ...e,
    id: `${e.field}:${r + 1}`
  }));
}
function Nf(t, e, r) {
  return t.flatMap((n) => {
    const s = Object.keys(n);
    if (s.length !== 1 || s[0].startsWith("$"))
      return [];
    const i = $r(e, s[0], r);
    if (i) {
      const d = i.definition.codec.parse(n, i.context);
      if (d)
        return [d];
    }
    return [];
  });
}
function Tf(t) {
  return [...t].sort((e, r) => e.localeCompare(r));
}
function Rf(t, e, r) {
  const n = t.flatMap((s) => {
    const i = $r(e, s.field, r);
    return i ? i.definition.codec.serialize(s, i.context) ?? [] : [];
  });
  if (n.length)
    return Tf(n).join("+");
}
const Cf = /* @__PURE__ */ new Set([
  "last_seen_at",
  "created_at",
  "subscriptions.start_date",
  "subscriptions.current_period_end"
]);
function dt(t) {
  return Array.isArray(t.$and) ? { operator: "$and", children: t.$and } : Array.isArray(t.$or) ? { operator: "$or", children: t.$or } : null;
}
function If(t) {
  if (typeof t.subscribed == "boolean")
    return {
      field: "subscribed",
      operator: "is",
      values: [t.subscribed ? "subscribed" : "unsubscribed"]
    };
  if (typeof t.email_disabled == "number") {
    if (t.email_disabled === 1)
      return {
        field: "subscribed",
        operator: "is",
        values: ["email-disabled"]
      };
    if (t.email_disabled === 0)
      return {
        field: "subscribed",
        operator: "is-not",
        values: ["email-disabled"]
      };
  }
  const e = dt(t);
  if (!e || e.children.length !== 2)
    return null;
  let r, n;
  for (const s of e.children)
    typeof s.subscribed == "boolean" && (r = s.subscribed), typeof s.email_disabled == "number" && (n = s.email_disabled);
  return e.operator === "$and" && n === 0 && r !== void 0 ? {
    field: "subscribed",
    operator: "is",
    values: [r ? "subscribed" : "unsubscribed"]
  } : e.operator === "$or" && n === 1 && r !== void 0 ? {
    field: "subscribed",
    operator: "is-not",
    values: [r ? "unsubscribed" : "subscribed"]
  } : null;
}
function Ff(t) {
  const e = dt(t);
  if (!e || e.children.length !== 2)
    return null;
  let r, n;
  for (const s of e.children) {
    const i = s["newsletters.slug"];
    typeof i == "string" && (r = i), i && typeof i == "object" && !Array.isArray(i) && typeof i.$ne == "string" && (r = i.$ne), typeof s.email_disabled == "number" && (n = s.email_disabled);
  }
  return r ? e.operator === "$and" && n === 0 ? {
    field: `newsletters.${r}`,
    operator: "is",
    values: ["subscribed"]
  } : e.operator === "$or" && n === 1 ? {
    field: `newsletters.${r}`,
    operator: "is",
    values: ["unsubscribed"]
  } : null : null;
}
function Lf(t) {
  const e = dt(t);
  if (!e || e.operator !== "$and" || e.children.length !== 2)
    return null;
  let r, n;
  for (const s of e.children)
    typeof s["feedback.post_id"] == "string" && (r = s["feedback.post_id"]), typeof s["feedback.score"] == "number" && (n = s["feedback.score"]);
  return !r || n !== 0 && n !== 1 ? null : {
    field: "newsletter_feedback",
    operator: String(n),
    values: [r]
  };
}
const Mf = [
  If,
  Ff,
  Lf
];
function At(t) {
  if (Object.keys(t).some((r) => Cf.has(r)))
    return !0;
  const e = dt(t);
  return e ? e.children.some((r) => At(r)) : Object.values(t).some((r) => Array.isArray(r) ? r.some((n) => n !== null && typeof n == "object" && At(n)) : r !== null && typeof r == "object" && At(r));
}
function sa(t, e) {
  for (const n of Mf) {
    const s = n(t);
    if (s)
      return [s];
  }
  const r = dt(t);
  return (r == null ? void 0 : r.operator) === "$and" ? r.children.flatMap((n) => sa(n, e)) : Nf([t], tt, e);
}
function $f(t, e) {
  const r = na(t ?? "");
  return r ? Df(sa(r, e)) : [];
}
function Uf(t) {
  const e = na(t ?? "");
  return e ? At(e) : !1;
}
function aa(t, e) {
  return Rf(t, tt, e);
}
function Bf(t, e, r = !e) {
  return !!t && r && !e && Uf(t);
}
function Qe({ baseSearchParams: t, filters: e, search: r, timezone: n }) {
  const s = new URLSearchParams(t), i = aa(e, n);
  return s.delete("filter"), s.delete("search"), i && s.set("filter", i), r && s.set("search", r), s;
}
function zf(t) {
  const [e, r] = Kn(), n = Se(null), s = de(() => e.get("filter") ?? void 0, [e]), i = de(() => e.toString(), [e]), d = de(() => $f(s, t), [s, t]), [f, u] = ce(d), y = de(() => e.get("search") ?? "", [e]), E = de(() => aa(f, t), [f, t]);
  ke(() => {
    i !== n.current && (u(d), n.current = i);
  }, [i, d]), ke(() => {
    if (n.current !== null && i !== n.current)
      return;
    const N = Qe({
      baseSearchParams: e,
      filters: f,
      search: y,
      timezone: t
    }), S = N.toString();
    S !== i && (n.current = S, r(N, { replace: !0 }));
  }, [i, f, y, e, r, t]);
  const w = te((N, S = {}) => {
    const $ = S.replace ?? !0, U = Qe({
      baseSearchParams: e,
      filters: N,
      search: y,
      timezone: t
    });
    u(N), n.current = U.toString(), r(U, { replace: $ });
  }, [y, e, r, t]), O = te((N, S = {}) => {
    const $ = S.replace ?? !0, U = Qe({
      baseSearchParams: e,
      filters: f,
      search: N,
      timezone: t
    });
    n.current = U.toString(), r(U, { replace: $ });
  }, [f, e, r, t]), D = te(({ replace: N = !0 } = {}) => {
    const S = Qe({
      baseSearchParams: e,
      filters: [],
      search: y,
      timezone: t
    });
    u([]), n.current = S.toString(), r(S, { replace: N });
  }, [y, e, r, t]), P = te(({ replace: N = !0 } = {}) => {
    const S = Qe({
      baseSearchParams: e,
      filters: [],
      search: "",
      timezone: t
    });
    u([]), n.current = S.toString(), r(S, { replace: N });
  }, [e, r, t]);
  return {
    filters: f,
    nql: E,
    search: y,
    setFilters: w,
    setSearch: O,
    clearFilters: D,
    clearAll: P,
    hasFilterOrSearch: !!E || y.length > 0
  };
}
const Vf = ({ timezone: t }) => {
  var T, R, c;
  const { filters: e, nql: r, search: n, setFilters: s, hasFilterOrSearch: i, clearAll: d } = zf(t), { data: f } = rs(), u = ((T = f == null ? void 0 : f.config) == null ? void 0 : T.emailAnalytics) === !0, y = de(() => Fl(e, r), [e, r]), E = de(() => ol({
    filters: e,
    nql: r,
    search: n
  }), [e, r, n]), {
    data: w,
    isError: O,
    isFetching: D,
    isFetchingNextPage: P,
    refetch: N,
    fetchNextPage: S,
    hasNextPage: $
  } = ba({
    searchParams: E,
    keepPreviousData: !0
  }), U = Ll({
    isFetching: D,
    isFetchingNextPage: P
  }), L = ((c = (R = w == null ? void 0 : w.meta) == null ? void 0 : R.pagination) == null ? void 0 : c.total) ?? 0, W = e.length > 0, B = Oe(
    "flex flex-row",
    !W && "items-center gap-2",
    W && "col-span-full row-start-4 pt-5"
  );
  return /* @__PURE__ */ a.jsxs(Os, { children: [
    /* @__PURE__ */ a.jsxs(
      As,
      {
        isLoading: U,
        totalMembers: L,
        children: [
          /* @__PURE__ */ a.jsx(kt.Actions, { children: /* @__PURE__ */ a.jsxs(kt.ActionGroup, { children: [
            !W && /* @__PURE__ */ a.jsx(
              Sn,
              {
                filters: e,
                onFiltersChange: s
              }
            ),
            /* @__PURE__ */ a.jsx(
              ul,
              {
                canBulkDelete: y,
                hasFilterOrSearch: i,
                memberCount: L,
                nql: r,
                search: n,
                onImportComplete: () => {
                  N();
                }
              }
            )
          ] }) }),
          W && /* @__PURE__ */ a.jsx("div", { className: B, children: /* @__PURE__ */ a.jsx(
            Sn,
            {
              filters: e,
              onFiltersChange: s
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ a.jsx(Ss, { children: U ? /* @__PURE__ */ a.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ a.jsx(Ot, { size: "lg" }) }) : O ? /* @__PURE__ */ a.jsxs("div", { className: "mb-16 flex h-full flex-col items-center justify-center", children: [
      /* @__PURE__ */ a.jsx("h2", { className: "mb-2 text-xl font-medium", children: "Error loading members" }),
      /* @__PURE__ */ a.jsx("p", { className: "mb-4 text-muted-foreground", children: "Please reload the page to try again" }),
      /* @__PURE__ */ a.jsx(se, { onClick: () => window.location.reload(), children: "Reload page" })
    ] }) : w != null && w.members.length ? /* @__PURE__ */ a.jsx(
      Cl,
      {
        fetchNextPage: S,
        hasNextPage: $,
        isFetchingNextPage: P,
        isLoading: D && !P,
        items: w.members,
        showEmailOpenRate: u,
        totalItems: L
      }
    ) : /* @__PURE__ */ a.jsx("div", { className: "flex h-full flex-col items-center justify-center", children: i ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(nn, { title: "No matching members found.", children: /* @__PURE__ */ a.jsx(en, {}) }),
      /* @__PURE__ */ a.jsx(
        se,
        {
          className: "mt-4",
          variant: "outline",
          onClick: () => d({ replace: !1 }),
          children: "Show all members"
        }
      )
    ] }) : /* @__PURE__ */ a.jsx(nn, { title: "No members yet", children: /* @__PURE__ */ a.jsx(en, {}) }) }) })
  ] });
}, cd = () => {
  const [t] = Kn(), { data: e, isLoading: r } = ts({}), n = t.get("filter") ?? void 0;
  if (Bf(n, !!e, r))
    return /* @__PURE__ */ a.jsxs(Os, { children: [
      /* @__PURE__ */ a.jsx(
        As,
        {
          isLoading: !0,
          totalMembers: 0
        }
      ),
      /* @__PURE__ */ a.jsx(Ss, { children: /* @__PURE__ */ a.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ a.jsx(Ot, { size: "lg" }) }) })
    ] });
  const i = es((e == null ? void 0 : e.settings) ?? []);
  return /* @__PURE__ */ a.jsx(Vf, { timezone: i });
};
export {
  cd as default
};
//# sourceMappingURL=members-BBYbEWvR.mjs.map
