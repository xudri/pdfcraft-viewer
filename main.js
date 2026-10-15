"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => PdfCraftPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// node_modules/fflate/esm/browser.js
var u8 = Uint8Array;
var u16 = Uint16Array;
var i32 = Int32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b = new u16(31);
  for (var i2 = 0; i2 < 31; ++i2) {
    b[i2] = start += 1 << eb[i2 - 1];
  }
  var r = new i32(b[30]);
  for (var i2 = 1; i2 < 30; ++i2) {
    for (var j = b[i2]; j < b[i2 + 1]; ++j) {
      r[j] = j - b[i2] << 5 | i2;
    }
  }
  return { b, r };
};
var _a = freb(fleb, 2);
var fl = _a.b;
var revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0);
var fd = _b.b;
var revfd = _b.r;
var rev = new u16(32768);
for (i = 0; i < 32768; ++i) {
  x = (i & 43690) >> 1 | (i & 21845) << 1;
  x = (x & 52428) >> 2 | (x & 13107) << 2;
  x = (x & 61680) >> 4 | (x & 3855) << 4;
  rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
}
var x;
var i;
var hMap = (function(cd, mb, r) {
  var s = cd.length;
  var i2 = 0;
  var l = new u16(mb);
  for (; i2 < s; ++i2) {
    if (cd[i2])
      ++l[cd[i2] - 1];
  }
  var le = new u16(mb);
  for (i2 = 1; i2 < mb; ++i2) {
    le[i2] = le[i2 - 1] + l[i2 - 1] << 1;
  }
  var co;
  if (r) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i2 = 0; i2 < s; ++i2) {
      if (cd[i2]) {
        var sv = i2 << 4 | cd[i2];
        var r_1 = mb - cd[i2];
        var v = le[cd[i2] - 1]++ << r_1;
        for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
          co[rev[v] >> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s);
    for (i2 = 0; i2 < s; ++i2) {
      if (cd[i2]) {
        co[i2] = rev[le[cd[i2] - 1]++] >> 15 - cd[i2];
      }
    }
  }
  return co;
});
var flt = new u8(288);
for (i = 0; i < 144; ++i)
  flt[i] = 8;
var i;
for (i = 144; i < 256; ++i)
  flt[i] = 9;
var i;
for (i = 256; i < 280; ++i)
  flt[i] = 7;
var i;
for (i = 280; i < 288; ++i)
  flt[i] = 8;
var i;
var fdt = new u8(32);
for (i = 0; i < 32; ++i)
  fdt[i] = 5;
var i;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a) {
  var m = a[0];
  for (var i2 = 1; i2 < a.length; ++i2) {
    if (a[i2] > m)
      m = a[i2];
  }
  return m;
};
var bits = function(d, p, m) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
};
var bits16 = function(d, p) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
};
var shft = function(p) {
  return (p + 7) / 8 | 0;
};
var slc = function(v, s, e) {
  if (s == null || s < 0)
    s = 0;
  if (e == null || e > v.length)
    e = v.length;
  return new u8(v.subarray(s, e));
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  // determined by compression function
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt) {
  var e = new Error(msg || ec[ind]);
  e.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e, err);
  if (!nt)
    throw e;
  return e;
};
var inflt = function(dat, st, buf, dict) {
  var sl = dat.length, dl = dict ? dict.length : 0;
  if (!sl || st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf;
  var resize = noBuf || st.i != 2;
  var noSt = st.i;
  if (noBuf)
    buf = new u8(sl * 3);
  var cbuf = function(l2) {
    var bl = buf.length;
    if (l2 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l2));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
        if (t > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + l);
        buf.set(dat.subarray(s, t), bt);
        st.b = bt += l, st.p = pos = t * 8, st.f = final;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i2 = 0; i2 < hcLen; ++i2) {
          clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i2 = 0; i2 < tl; ) {
          var r = clm[bits(dat, pos, clbmsk)];
          pos += r & 15;
          var s = r >> 4;
          if (s < 16) {
            ldt[i2++] = s;
          } else {
            var c = 0, n = 0;
            if (s == 16)
              n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i2 - 1];
            else if (s == 17)
              n = 3 + bits(dat, pos, 7), pos += 3;
            else if (s == 18)
              n = 11 + bits(dat, pos, 127), pos += 7;
            while (n--)
              ldt[i2++] = c;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (resize)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
      pos += c & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c)
        err(2);
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i2 = sym - 257, b = fleb[i2];
          add = bits(dat, pos, (1 << b) - 1) + fl[i2];
          pos += b;
        }
        var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
        if (!d)
          err(3);
        pos += d & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + 131072);
        var end = bt + add;
        if (bt < dt) {
          var shift = dl - dt, dend = Math.min(dt, end);
          if (shift + bt < 0)
            err(3);
          for (; bt < dend; ++bt)
            buf[bt] = dict[shift + bt];
        }
        for (; bt < end; ++bt)
          buf[bt] = buf[bt - dt];
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
};
var et = /* @__PURE__ */ new u8(0);
var b2 = function(d, b) {
  return d[b] | d[b + 1] << 8;
};
var b4 = function(d, b) {
  return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
};
var b8 = function(d, b) {
  return b4(d, b) + b4(d, b + 4) * 4294967296;
};
function inflateSync(data, opts) {
  return inflt(data, { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e) {
}
var dutf8 = function(d) {
  for (var r = "", i2 = 0; ; ) {
    var c = d[i2++];
    var eb = (c > 127) + (c > 223) + (c > 239);
    if (i2 + eb > d.length)
      return { s: r, r: slc(d, i2 - 1) };
    if (!eb)
      r += String.fromCharCode(c);
    else if (eb == 3) {
      c = ((c & 15) << 18 | (d[i2++] & 63) << 12 | (d[i2++] & 63) << 6 | d[i2++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
    } else if (eb & 1)
      r += String.fromCharCode((c & 31) << 6 | d[i2++] & 63);
    else
      r += String.fromCharCode((c & 15) << 12 | (d[i2++] & 63) << 6 | d[i2++] & 63);
  }
};
function strFromU8(dat, latin1) {
  if (latin1) {
    var r = "";
    for (var i2 = 0; i2 < dat.length; i2 += 16384)
      r += String.fromCharCode.apply(null, dat.subarray(i2, i2 + 16384));
    return r;
  } else if (td) {
    return td.decode(dat);
  } else {
    var _a2 = dutf8(dat), s = _a2.s, r = _a2.r;
    if (r.length)
      err(8);
    return s;
  }
}
var slzh = function(d, b) {
  return b + 30 + b2(d, b + 26) + b2(d, b + 28);
};
var zh = function(d, b, z) {
  var fnl = b2(d, b + 28), efl = b2(d, b + 30), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl;
  var _a2 = z64hs(d, es, efl, z, b4(d, b + 20), b4(d, b + 24), b4(d, b + 42)), sc = _a2[0], su = _a2[1], off = _a2[2];
  return [b2(d, b + 10), sc, su, fn, es + efl + b2(d, b + 32), off];
};
var z64hs = function(d, b, l, z, sc, su, off) {
  var nsc = sc == 4294967295, nsu = su == 4294967295, noff = off == 4294967295, e = b + l;
  var nf = nsc + nsu + noff;
  if (z && nf) {
    for (; b + 4 < e; b += 4 + b2(d, b + 2)) {
      if (b2(d, b) == 1) {
        return [
          nsc ? b8(d, b + 4 + 8 * nsu) : sc,
          nsu ? b8(d, b + 4) : su,
          noff ? b8(d, b + 4 + 8 * (nsu + nsc)) : off,
          1
        ];
      }
    }
    if (z < 2)
      err(13);
  }
  return [sc, su, off, 0];
};
function unzipSync(data, opts) {
  var files = {};
  var e = data.length - 22;
  for (; b4(data, e) != 101010256; --e) {
    if (!e || data.length - e > 65558)
      err(13);
  }
  ;
  var c = b2(data, e + 8);
  if (!c)
    return {};
  var o = b4(data, e + 16);
  var z = b4(data, e - 20) == 117853008;
  if (z) {
    var ze = b4(data, e - 12);
    z = b4(data, ze) == 101075792;
    if (z) {
      c = b4(data, ze + 32);
      o = b4(data, ze + 48);
    }
  }
  var fltr = opts && opts.filter;
  for (var i2 = 0; i2 < c; ++i2) {
    var _a2 = zh(data, o, z), c_2 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data, off);
    o = no;
    if (!fltr || fltr({
      name: fn,
      size: sc,
      originalSize: su,
      compression: c_2
    })) {
      if (!c_2)
        files[fn] = slc(data, b, b + sc);
      else if (c_2 == 8)
        files[fn] = inflateSync(data.subarray(b, b + sc), { out: new u8(su) });
      else
        err(14, "unknown compression type " + c_2);
    }
  }
  return files;
}

// main.ts
var VIEW_TYPE = "pdfcraft-view";
var REPO_API = "https://api.github.com/repos/storytold/pdfcraft/releases/latest";
var DEFAULTS = {
  takeOver: true,
  saveMode: "overwrite",
  backupOnSave: true,
  activeVersion: "",
  renderer: "auto",
  preload: true,
  forwardHotkeys: true,
  enableOnMobile: false,
  linkViewer: "native",
  autoSave: true
};
var sleep = (ms) => new Promise((r) => window.setTimeout(r, ms));
function cmpVersion(a, b) {
  const pa = a.split(/[.\-]/).map((x2) => parseInt(x2, 10) || 0);
  const pb = b.split(/[.\-]/).map((x2) => parseInt(x2, 10) || 0);
  for (let i2 = 0; i2 < Math.max(pa.length, pb.length); i2++) {
    const d = (pa[i2] || 0) - (pb[i2] || 0);
    if (d) return d;
  }
  return 0;
}
function makeHook(renderer) {
  return `<script>
(function () {
  if (${JSON.stringify(renderer)} === "webgl") {
    try { delete Navigator.prototype.gpu; } catch (e) {}
    try { Object.defineProperty(navigator, "gpu", { get: function () { return undefined; }, configurable: true }); } catch (e) {}
  }
  // PdfCraft's web host bridge looks for ?host=parent. This local blob page has
  // no query string, so expose that one parameter while leaving the rest alone.
  var paramsGet = URLSearchParams.prototype.get;
  URLSearchParams.prototype.get = function (key) {
    return key === "host" ? "parent" : paramsGet.call(this, key);
  };
  window.__pdfcraftRequestSave = function () {
    var canvas = document.getElementById("pdfcraft");
    if (!canvas) return false;
    var mac = /Mac|iPhone|iPad/.test(navigator.platform);
    var options = { key: "s", code: "KeyS", ctrlKey: !mac, metaKey: mac, bubbles: true, cancelable: true };
    canvas.dispatchEvent(new KeyboardEvent("keydown", options));
    canvas.dispatchEvent(new KeyboardEvent("keyup", options));
    return true;
  };
  var lastActivity = 0;
  function reportActivity(event) {
    if (!event.isTrusted) return;
    var now = Date.now();
    if (now - lastActivity < 750) return;
    lastActivity = now;
    window.parent.postMessage({ __pdfcraft: "activity" }, "*");
  }
  window.addEventListener("keydown", reportActivity, true);
  window.addEventListener("pointerup", reportActivity, true);
  window.addEventListener("input", reportActivity, true);
  var blobs = new Map();
  var origCreate = URL.createObjectURL.bind(URL);
  var origRevoke = URL.revokeObjectURL.bind(URL);
  URL.createObjectURL = function (obj) {
    var u = origCreate(obj);
    try { if (obj instanceof Blob) blobs.set(u, obj); } catch (e) {}
    return u;
  };
  URL.revokeObjectURL = function (url) {
    blobs.delete(url);
    return origRevoke(url);
  };
  window.addEventListener("keydown", function (e) {
    try {
      var f = window.parent && window.parent.__pdfcraftForwardKey;
      if (f && f(e)) { e.preventDefault(); e.stopImmediatePropagation(); }
    } catch (err) {}
  }, true);
  var origClick = HTMLAnchorElement.prototype.click;
  HTMLAnchorElement.prototype.click = function () {
    try {
      if (this.hasAttribute("download") && /^blob:/.test(this.href)) {
        var b = blobs.get(this.href);
        if (b) {
          var url = this.href;
          window.parent.postMessage({ __pdfcraft: "save", name: this.download || "document.pdf", blob: b }, "*");
          window.setTimeout(function () { URL.revokeObjectURL(url); }, 0);
          return;
        }
      }
    } catch (e) { console.warn("PdfCraft hook:", e); }
    return origClick.apply(this, arguments);
  };
})();
<\/script>`;
}
var _PdfCraftPlugin = class _PdfCraftPlugin extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.settings = { ...DEFAULTS };
    this.buildCache = /* @__PURE__ */ new Map();
    this.tookOver = false;
    this.nativeActions = /* @__PURE__ */ new Map();
    this.preloadTimer = null;
    this.disposed = false;
    this.pendingLinkIntent = null;
    /** Called from inside the PdfCraft page on every key press. Returns true if Obsidian handled it. */
    this.forwardKey = (e) => {
      if (!this.settings.forwardHotkeys || e.isComposing) return false;
      const isFKey = /^F\d{1,2}$/.test(e.key);
      if (!(e.ctrlKey || e.metaKey || e.altKey) && !isFKey) return false;
      if ((e.ctrlKey || e.metaKey) && !e.altKey && _PdfCraftPlugin.RESERVED.has(e.key.toLowerCase())) return false;
      const ev = new KeyboardEvent("keydown", {
        key: e.key,
        code: e.code,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey,
        shiftKey: e.shiftKey,
        repeat: e.repeat,
        bubbles: true,
        cancelable: true,
        composed: true
      });
      document.body.dispatchEvent(ev);
      return ev.defaultPrevented;
    };
  }
  /* ---------------------------- lifecycle ---------------------------- */
  async onload() {
    await this.loadSettings();
    window.__pdfcraftForwardKey = this.forwardKey;
    this.registerView(VIEW_TYPE, (leaf) => new PdfCraftView(leaf, this));
    this.addCommand({
      id: "open-current-pdf",
      name: "Open current PDF in PdfCraft",
      checkCallback: (checking) => {
        if (!this.enabledHere) return false;
        const f = this.app.workspace.getActiveFile();
        if (!f || f.extension.toLowerCase() !== "pdf") return false;
        if (!checking) void this.openInPdfCraft(f);
        return true;
      }
    });
    this.addCommand({
      id: "switch-current-pdf-viewer",
      name: "Switch current PDF viewer",
      checkCallback: (checking) => {
        const leaf = this.app.workspace.activeLeaf;
        const type = leaf?.view?.getViewType();
        if ((type !== "pdf" && type !== VIEW_TYPE) || !this.pdfFileInLeaf(leaf) || type === "pdf" && !this.enabledHere) return false;
        if (!checking) void this.switchLeafViewer(leaf);
        return true;
      }
    });
    this.addCommand({
      id: "download-latest",
      name: "Download latest PdfCraft web build",
      callback: () => void this.downloadLatest()
    });
    this.addSettingTab(new PdfCraftSettingTab(this.app, this));
    this.registerEvent(this.app.workspace.on("active-leaf-change", () => this.refreshNativeActions()));
    this.registerEvent(this.app.workspace.on("layout-change", () => this.refreshNativeActions()));
    this.registerEvent(this.app.workspace.on("file-open", (file) => this.onFileOpen(file)));
    this.registerDomEvent(this.app.workspace.containerEl, "click", (event) => this.onPdfLinkClick(event), true);
    this.app.workspace.onLayoutReady(async () => {
      if (this.disposed) return;
      if (this.settings.takeOver && this.enabledHere) this.applyTakeover(true);
      this.refreshNativeActions();
      if (!this.enabledHere) return;
      const versions = await this.listVersions();
      if (this.disposed) return;
      if (versions.length && this.settings.preload && this.enabledHere) {
        this.preloadTimer = window.setTimeout(async () => {
          this.preloadTimer = null;
          if (this.disposed) return;
          const v = await this.resolveVersion();
          if (v && !this.disposed) this.getBuild(v).catch(() => {
          });
        }, 4e3);
      }
      if (!versions.length) {
        new import_obsidian.Notice(
          "PdfCraft Viewer: no PdfCraft build found. Run the command \u201CDownload latest PdfCraft web build\u201D.",
          1e4
        );
      }
    });
  }
  onunload() {
    this.disposed = true;
    if (this.preloadTimer !== null) window.clearTimeout(this.preloadTimer);
    for (const button of this.nativeActions.values()) button.remove();
    this.nativeActions.clear();
    delete window.__pdfcraftForwardKey;
    if (this.tookOver) this.applyTakeover(false);
    this.releaseBuilds();
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULTS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  refreshAutoSaveSettings() {
    for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE)) {
      const view = leaf.view;
      if (!(view instanceof PdfCraftView)) continue;
      if (this.settings.autoSave && this.settings.saveMode === "overwrite") view.scheduleAutoSave();
      else view.clearAutoSaveTimers();
    }
  }
  get enabledHere() {
    return !import_obsidian.Platform.isMobile || this.settings.enableOnMobile;
  }
  async updateMobileAvailability() {
    if (!import_obsidian.Platform.isMobile) return;
    if (this.enabledHere) {
      if (this.settings.takeOver) this.applyTakeover(true);
      this.refreshNativeActions();
      return;
    }
    if (this.tookOver) this.applyTakeover(false);
    this.refreshNativeActions();
    for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE)) {
      const file = this.pdfFileInLeaf(leaf);
      if (file) await this.switchLeafViewer(leaf);
    }
  }
  /* ----------------------- native viewer takeover ----------------------- */
  applyTakeover(on) {
    const vr = this.app.viewRegistry;
    try {
      if (!vr || !vr.registerExtensions) throw new Error("viewRegistry unavailable");
      try {
        vr.unregisterExtensions(["pdf"]);
      } catch (_) {
      }
      vr.registerExtensions(["pdf"], on ? VIEW_TYPE : "pdf");
      this.tookOver = on;
    } catch (e) {
      console.error("PdfCraft Viewer: could not change PDF handler", e);
      if (on) {
        try {
          this.registerExtensions(["pdf"], VIEW_TYPE);
          this.tookOver = true;
          return;
        } catch (_) {
        }
      }
      new import_obsidian.Notice(
        on ? "PdfCraft Viewer: couldn't replace the built-in PDF viewer. Use the command \u201COpen current PDF in PdfCraft\u201D instead." : "PdfCraft Viewer: couldn't restore the built-in PDF viewer. Restart Obsidian to fix it.",
        1e4
      );
    }
  }
  async openInPdfCraft(file) {
    if (!this.enabledHere) return;
    const leaf = this.app.workspace.getLeaf(false);
    await leaf.setViewState({ type: VIEW_TYPE, state: { file: file.path }, active: true });
  }
  pdfFileInLeaf(leaf) {
    let file = leaf?.view?.file;
    if (!(file instanceof import_obsidian.TFile)) {
      const path = leaf?.getViewState()?.state?.file;
      if (typeof path === "string") file = this.app.vault.getAbstractFileByPath(path);
    }
    return file instanceof import_obsidian.TFile && file.extension.toLowerCase() === "pdf" ? file : null;
  }
  async switchLeafViewer(leaf) {
    const file = this.pdfFileInLeaf(leaf);
    const type = leaf?.view?.getViewType();
    if (!file || type !== "pdf" && type !== VIEW_TYPE || type === "pdf" && !this.enabledHere) return;
    try {
      await leaf.setViewState({
        type: type === "pdf" ? VIEW_TYPE : "pdf",
        state: { file: file.path },
        active: true
      });
      this.refreshNativeActions();
    } catch (error) {
      console.error("PdfCraft Viewer: could not switch PDF viewer", error);
      new import_obsidian.Notice("Could not switch PDF viewer. Try reopening the PDF.");
    }
  }
  refreshNativeActions() {
    if (this.disposed) return;
    const views = new Set(this.enabledHere ? this.app.workspace.getLeavesOfType("pdf").map((leaf) => leaf.view) : []);
    for (const [view, button] of this.nativeActions) {
      if (!views.has(view) || !button.isConnected) {
        button.remove();
        this.nativeActions.delete(view);
      }
    }
    for (const view of views) {
      if (this.nativeActions.has(view) || typeof view?.addAction !== "function" || !this.pdfFileInLeaf(view.leaf)) continue;
      try {
        const button = view.addAction("refresh-cw", "Open in PdfCraft", () => void this.switchLeafViewer(view.leaf));
        if (!button) continue;
        button.setAttribute("aria-label", "Open in PdfCraft");
        this.nativeActions.set(view, button);
      } catch (error) {
        console.warn("PdfCraft Viewer: could not add PDF switch button", error);
      }
    }
  }
  pdfLeaves() {
    return [...this.app.workspace.getLeavesOfType("pdf"), ...this.app.workspace.getLeavesOfType(VIEW_TYPE)];
  }
  onPdfLinkClick(event) {
    if (event.defaultPrevented || event.button !== 0) return;
    const element = event.target?.nodeType === 1 ? event.target : event.target?.parentElement;
    if (element?.closest?.("button, input, textarea, select")) return;
    const link = element?.closest?.(".internal-link[data-href], a.internal-link");
    const linktext = link?.getAttribute("data-href") || link?.getAttribute("href");
    let file = null;
    if (linktext) {
      if (/^[a-z]+:\/\//i.test(linktext)) return;
      const linkpath = linktext.split("#", 1)[0];
      const sourcePath = this.app.workspace.getActiveFile()?.path || "";
      file = this.app.metadataCache.getFirstLinkpathDest(linkpath, sourcePath);
      if (!file && linkpath.includes("%")) {
        try {
          file = this.app.metadataCache.getFirstLinkpathDest(decodeURIComponent(linkpath), sourcePath);
        } catch (_) {
        }
      }
      if (!(file instanceof import_obsidian.TFile) || file.extension.toLowerCase() !== "pdf") return;
    } else if (!element?.closest?.(".cm-hmd-internal-link, .cm-link, .cm-url, .internal-link")) {
      return;
    }
    this.pendingLinkIntent = {
      path: file?.path || null,
      targetType: this.settings.linkViewer === "pdfcraft" && this.enabledHere ? VIEW_TYPE : "pdf",
      existingLeaves: new Set(this.pdfLeaves()),
      time: Date.now(),
      maxAge: file ? 3e3 : 1e3
    };
  }
  pendingNativeLinkFor(file) {
    const intent = this.pendingLinkIntent;
    return intent && (!intent.path || intent.path === file.path) && intent.targetType === "pdf" && Date.now() - intent.time < intent.maxAge;
  }
  onFileOpen(file) {
    window.setTimeout(() => this.refreshNativeActions(), 0);
    const intent = this.pendingLinkIntent;
    if (!intent || Date.now() - intent.time >= intent.maxAge) return;
    if (!file || file.extension.toLowerCase() !== "pdf") {
      if (!intent.path) this.pendingLinkIntent = null;
      return;
    }
    if (intent.path && file.path !== intent.path) return;
    intent.path = file.path;
    this.pendingLinkIntent = null;
    window.setTimeout(() => void this.applyLinkViewer(intent), 0);
  }
  async applyLinkViewer(intent) {
    if (this.disposed) return;
    const candidates = this.pdfLeaves().filter((leaf) => this.pdfFileInLeaf(leaf)?.path === intent.path);
    const leaf = candidates.find((candidate) => !intent.existingLeaves.has(candidate)) ||
      (candidates.includes(this.app.workspace.activeLeaf) ? this.app.workspace.activeLeaf : null) || candidates[0];
    if (!leaf || leaf.view.getViewType() === intent.targetType) return;
    if (intent.targetType === VIEW_TYPE && !this.enabledHere) return;
    try {
      await leaf.setViewState({ type: intent.targetType, state: { file: intent.path }, active: true });
      this.refreshNativeActions();
    } catch (error) {
      console.error("PdfCraft Viewer: could not use the selected PDF link viewer", error);
      new import_obsidian.Notice("Could not open the PDF link in the selected viewer.");
    }
  }
  /* ------------------------------ builds ------------------------------ */
  get webRoot() {
    return (0, import_obsidian.normalizePath)(`${this.manifest.dir}/pdfcraft-web`);
  }
  async listVersions() {
    const ad = this.app.vault.adapter;
    if (!await ad.exists(this.webRoot)) return [];
    const listing = await ad.list(this.webRoot);
    const out = [];
    for (const folder of listing.folders) {
      const name = folder.split("/").pop();
      if (await ad.exists((0, import_obsidian.normalizePath)(`${folder}/index.html`))) out.push(name);
    }
    return out.sort(cmpVersion).reverse();
  }
  async resolveVersion() {
    const versions = await this.listVersions();
    if (!versions.length) return null;
    if (this.settings.activeVersion && versions.includes(this.settings.activeVersion)) {
      return this.settings.activeVersion;
    }
    return versions[0];
  }
  releaseBuilds() {
    for (const p of this.buildCache.values()) p.then((b) => b.urls.forEach((u) => URL.revokeObjectURL(u))).catch(() => {
    });
    this.buildCache.clear();
  }
  /** Builds a self-contained page (srcdoc) from the files of one PdfCraft web build. */
  getBuild(version) {
    let p = this.buildCache.get(version);
    if (!p) {
      p = this.loadBuild(version);
      this.buildCache.set(version, p);
      p.catch(() => this.buildCache.delete(version));
    }
    return p;
  }
  async loadBuild(version) {
    const ad = this.app.vault.adapter;
    const base = (0, import_obsidian.normalizePath)(`${this.webRoot}/${version}`);
    let html = await ad.read(`${base}/index.html`);
    const jsName = (html.match(/['"]\.\/([^'"]+\.js)['"]/) || [])[1];
    const wasmName = (html.match(/['"]\.\/([^'"]+\.wasm)['"]/) || [])[1];
    if (!jsName || !wasmName) throw new Error("Unrecognised PdfCraft index.html layout (can't find .js/.wasm).");
    const jsBytes = await ad.readBinary(`${base}/${jsName}`);
    const wasmBytes = await ad.readBinary(`${base}/${wasmName}`);
    const jsUrl = URL.createObjectURL(new Blob([jsBytes], { type: "text/javascript" }));
    const wasmUrl = URL.createObjectURL(new Blob([wasmBytes], { type: "application/wasm" }));
    html = html.replace(/<link[^>]+rel=["'](?:modulepreload|preload)["'][^>]*>/g, "");
    html = html.split(`./${jsName}`).join(jsUrl).split(`./${wasmName}`).join(wasmUrl);
    html = html.replace(/<head>/i, "<head><!--PDFCRAFT_HOOK-->");
    return { template: html, urls: [jsUrl, wasmUrl] };
  }
  /* ------------------------------ updates ------------------------------ */
  async ensureDir(path) {
    const ad = this.app.vault.adapter;
    const parts = (0, import_obsidian.normalizePath)(path).split("/");
    let cur = "";
    for (const p of parts) {
      cur = cur ? `${cur}/${p}` : p;
      if (!await ad.exists(cur)) await ad.mkdir(cur);
    }
  }
  /** Downloads the newest release into its own folder. Does NOT switch to it. */
  async downloadLatest() {
    try {
      const currentVersion = await this.resolveVersion();
      new import_obsidian.Notice("PdfCraft: checking GitHub for the latest release\u2026");
      const rel = await (0, import_obsidian.requestUrl)({
        url: REPO_API,
        headers: { Accept: "application/vnd.github+json" }
      });
      const tag = rel.json.tag_name;
      const version = tag.replace(/^v/, "");
      const asset = (rel.json.assets || []).find((a) => /^pdfcraft-web-.*\.zip$/.test(a.name));
      if (!asset) throw new Error("No web build found in release " + tag);
      if ((await this.listVersions()).includes(version)) {
        new import_obsidian.Notice(`PdfCraft ${version} is already installed.`);
        return version;
      }
      new import_obsidian.Notice(`PdfCraft: downloading ${version} (about 15 MB)\u2026`);
      const zip = await (0, import_obsidian.requestUrl)({ url: asset.browser_download_url });
      const files = unzipSync(new Uint8Array(zip.arrayBuffer));
      const names = Object.keys(files).filter((n) => !n.endsWith("/"));
      if (!names.length) throw new Error("The downloaded web build is empty.");
      const top = names[0].split("/")[0] + "/";
      const stripTop = names.every((n) => n.startsWith(top));
      const dest = (0, import_obsidian.normalizePath)(`${this.webRoot}/${version}`);
      for (const n of names) {
        const rel2 = stripTop ? n.slice(top.length) : n;
        if (!rel2 || rel2.includes("..")) continue;
        const full = (0, import_obsidian.normalizePath)(`${dest}/${rel2}`);
        await this.ensureDir(full.split("/").slice(0, -1).join("/"));
        const data = files[n];
        await this.app.vault.adapter.writeBinary(
          full,
          data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength)
        );
      }
      if (!this.settings.activeVersion && currentVersion) {
        this.settings.activeVersion = currentVersion;
        await this.saveSettings();
      }
      new import_obsidian.Notice(
        `PdfCraft ${version} downloaded. ${currentVersion ? "Your selected version is unchanged; choose the new one in settings when ready." : "It is ready to use."}`,
        12e3
      );
      return version;
    } catch (e) {
      console.error(e);
      new import_obsidian.Notice("PdfCraft download failed: " + (e?.message || e), 1e4);
      return null;
    }
  }
  /* ------------------------------ saving ------------------------------ */
  async backup(file) {
    const dir = (0, import_obsidian.normalizePath)(`${this.manifest.dir}/backups`);
    await this.ensureDir(dir);
    const data = await this.app.vault.readBinary(file);
    await this.app.vault.adapter.writeBinary(`${dir}/${Date.now()}-${file.name}`, data);
    const list = (await this.app.vault.adapter.list(dir)).files.sort();
    for (const old of list.slice(0, Math.max(0, list.length - 10))) {
      try {
        await this.app.vault.adapter.remove(old);
      } catch (error) {
        console.warn("PdfCraft: could not prune an old backup", error);
      }
    }
  }
  freePath(folder, name) {
    const dot = name.lastIndexOf(".");
    const stem = dot > 0 ? name.slice(0, dot) : name;
    const ext = dot > 0 ? name.slice(dot) : "";
    let n = 0;
    let path = (0, import_obsidian.normalizePath)(`${folder}/${name}`);
    while (this.app.vault.getAbstractFileByPath(path)) {
      n++;
      path = (0, import_obsidian.normalizePath)(`${folder}/${stem} (${n})${ext}`);
    }
    return path;
  }
  /** Called when PdfCraft "downloads" a file. Writes it into the vault. */
  async handleSave(opened, name, blob, forceCopy = false) {
    const data = await blob.arrayBuffer();
    const folder = opened.parent?.path ?? "";
    const safeName = String(name || "document.pdf").split(/[\\/]/).pop().replace(/[\x00-\x1f]/g, "").trim();
    const downloadName = safeName && safeName !== "." && safeName !== ".." ? safeName : "document.pdf";
    const sameFile = downloadName.toLowerCase() === opened.name.toLowerCase();
    if (sameFile && this.settings.saveMode === "overwrite" && !forceCopy) {
      if (this.settings.backupOnSave) {
        try {
          await this.backup(opened);
        } catch (error) {
          throw new Error("Backup failed, so the original PDF was not overwritten.", { cause: error });
        }
      }
      await this.app.vault.modifyBinary(opened, data);
      new import_obsidian.Notice(`Saved ${opened.name}`);
      return;
    }
    const target = sameFile ? this.freePath(folder, opened.basename + " (edited)." + opened.extension) : this.freePath(folder, downloadName);
    await this.app.vault.createBinary(target, data);
    new import_obsidian.Notice(`Saved as ${target}`);
  }
};
/* ------------------- Obsidian hotkeys inside PdfCraft ------------------- */
// Keys PdfCraft keeps for itself (find, copy, paste, undo, zoom...). Everything else
// with Ctrl/Cmd/Alt, and F-keys, is offered to Obsidian first.
_PdfCraftPlugin.RESERVED = /* @__PURE__ */ new Set(["f", "g", "k", "z", "y", "a", "c", "v", "x", "s", "=", "+", "-", "_", "0"]);
var PdfCraftPlugin = _PdfCraftPlugin;
var PdfCraftView = class extends import_obsidian.FileView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.iframe = null;
    this.pageUrl = null;
    this.msgHandler = null;
    this.loadGeneration = 0;
    this.autoSaveTimer = null;
    this.autoSaveWatchdog = null;
    this.autoSaveSupportTimer = null;
    this.autoSavePromise = null;
    this.autoSaveResolve = null;
    this.hostReady = false;
    this.dirty = false;
    this.autoSavePending = false;
    this.autoSaveUnavailable = false;
    this.navigation = true;
    this.allowNoFile = false;
  }
  getViewType() {
    return VIEW_TYPE;
  }
  getDisplayText() {
    return this.file ? this.file.basename : "PdfCraft";
  }
  getIcon() {
    return "file-text";
  }
  canAcceptExtension(ext) {
    return ext.toLowerCase() === "pdf";
  }
  async onOpen() {
    await super.onOpen();
    this.addAction("refresh-cw", "Open in Obsidian PDF viewer", () => void this.plugin.switchLeafViewer(this.leaf));
    this.registerEvent(
      this.app.workspace.on("active-leaf-change", (leaf) => {
        if (leaf === this.leaf) this.focusApp();
      })
    );
  }
  focusApp() {
    try {
      const w = this.iframe?.contentWindow;
      w?.focus();
      w?.document.getElementById("pdfcraft")?.focus();
    } catch (_) {
    }
  }
  async onLoadFile(file) {
    this.teardown();
    const loadGeneration = this.loadGeneration;
    this.contentEl.empty();
    this.contentEl.addClass("pdfcraft-host");
    if (!this.plugin.enabledHere || this.plugin.pendingNativeLinkFor(file)) {
      await this.leaf.setViewState({ type: "pdf", state: { file: file.path }, active: true });
      return;
    }
    const version = await this.plugin.resolveVersion();
    if (loadGeneration !== this.loadGeneration) return;
    if (!version) {
      this.contentEl.createDiv({
        cls: "pdfcraft-msg",
        text: "No PdfCraft build is installed. Run the command \u201CDownload latest PdfCraft web build\u201D, then reopen this PDF."
      });
      return;
    }
    const status = this.contentEl.createDiv({ cls: "pdfcraft-msg", text: "Loading PdfCraft\u2026" });
    const iframe = this.contentEl.createEl("iframe", { cls: "pdfcraft-frame" });
    iframe.setAttr("allow", "fullscreen; clipboard-read; clipboard-write");
    this.iframe = iframe;
    try {
      this.msgHandler = (e) => {
        if (e.source !== iframe.contentWindow) return;
        const d = e.data;
        if (!d || loadGeneration !== this.loadGeneration) return;
        if (d.type === "pdfcraft:ready") {
          this.hostReady = true;
        } else if (d.type === "pdfcraft:dirty") {
          this.dirty = d.dirty === true;
          if (this.dirty) this.scheduleAutoSave();
          else this.clearAutoSaveSchedule();
        } else if (d.type === "pdfcraft:save" && (d.bytes instanceof ArrayBuffer || ArrayBuffer.isView(d.bytes))) {
          const bytes = d.bytes instanceof ArrayBuffer ? d.bytes : d.bytes.buffer.slice(d.bytes.byteOffset, d.bytes.byteOffset + d.bytes.byteLength);
          void this.saveFromFrame(file, d.name, new Blob([bytes], { type: "application/pdf" }), d.saveAs === true);
        } else if (d.__pdfcraft === "activity") {
          if (this.dirty) this.scheduleAutoSave();
        } else if (d.__pdfcraft === "save" && d.blob instanceof Blob) {
          void this.saveFromFrame(file, d.name, d.blob, false);
        }
      };
      window.addEventListener("message", this.msgHandler);
      const build = await this.plugin.getBuild(version);
      if (loadGeneration !== this.loadGeneration) return;
      const page = build.template.replace("<!--PDFCRAFT_HOOK-->", makeHook(this.plugin.settings.renderer));
      this.pageUrl = URL.createObjectURL(new Blob([page], { type: "text/html" }));
      iframe.src = this.pageUrl;
      const bytes = await this.app.vault.readBinary(file);
      if (loadGeneration !== this.loadGeneration) return;
      const ready = await this.waitReady(iframe, 25e3, () => loadGeneration === this.loadGeneration);
      if (loadGeneration !== this.loadGeneration) return;
      if (!ready) {
        status.setText("PdfCraft took too long to start. Try reopening the PDF or switching the renderer to WebGL2 in the plugin settings.");
        new import_obsidian.Notice("PdfCraft took too long to start. Try reopening the PDF or switching Renderer to WebGL2 in the plugin settings.", 1e4);
        return;
      }
      this.dropFile(iframe, file.name, bytes);
      this.autoSaveSupportTimer = window.setTimeout(() => {
        this.autoSaveSupportTimer = null;
        if (this.plugin.settings.autoSave && !this.hostReady) {
          new import_obsidian.Notice("This PdfCraft web build did not enable the host bridge, so automatic saving is unavailable. Use its Save button.", 1e4);
        }
      }, 5e3);
      status.remove();
      this.focusApp();
    } catch (e) {
      if (loadGeneration !== this.loadGeneration) return;
      console.error(e);
      status.setText("Could not start PdfCraft: " + (e?.message || e));
    }
  }
  async onUnloadFile(_file) {
    await this.flushAutoSaveBeforeClose();
    this.teardown();
  }
  async onClose() {
    await this.flushAutoSaveBeforeClose();
    this.teardown();
  }
  async saveFromFrame(file, name, blob, saveAs) {
    const automatic = this.autoSavePending;
    try {
      if (automatic && (name !== file.name || saveAs)) throw new Error("Automatic save was stopped because PdfCraft switched to a different document.");
      await this.plugin.handleSave(file, name, blob, saveAs);
      if (automatic) this.finishAutoSave(true);
      if (this.dirty) this.scheduleAutoSave();
    } catch (error) {
      console.error("PdfCraft: could not save", error);
      this.autoSaveUnavailable = automatic;
      if (automatic) this.finishAutoSave(false);
      new import_obsidian.Notice("PdfCraft: could not save: " + (error?.message || error), 1e4);
    }
  }
  finishAutoSave(saved) {
    if (this.autoSaveWatchdog !== null) window.clearTimeout(this.autoSaveWatchdog);
    this.autoSaveWatchdog = null;
    this.autoSavePending = false;
    this.autoSaveResolve?.(saved);
    this.autoSaveResolve = null;
    this.autoSavePromise = null;
  }
  scheduleAutoSave() {
    if (!this.plugin.settings.autoSave || this.plugin.settings.saveMode !== "overwrite" || !this.hostReady || !this.dirty || this.autoSavePending || this.autoSaveUnavailable) return;
    this.clearAutoSaveSchedule();
    this.autoSaveTimer = window.setTimeout(() => {
      this.autoSaveTimer = null;
      void this.beginAutoSave();
    }, 1e4);
  }
  beginAutoSave() {
    if (this.autoSavePending) return this.autoSavePromise;
    if (!this.plugin.settings.autoSave || this.plugin.settings.saveMode !== "overwrite" || !this.hostReady || !this.dirty || this.autoSaveUnavailable) return Promise.resolve(false);
    this.autoSavePending = true;
    this.autoSavePromise = new Promise((resolve) => { this.autoSaveResolve = resolve; });
    try {
      if (!this.iframe?.contentWindow?.__pdfcraftRequestSave?.()) throw new Error("Save shortcut unavailable");
    } catch (error) {
      this.autoSaveUnavailable = true;
      this.finishAutoSave(false);
      console.warn("PdfCraft: automatic save unavailable", error);
      new import_obsidian.Notice("PdfCraft automatic save could not start. Use PdfCraft's Save button for this PDF.", 1e4);
      return Promise.resolve(false);
    }
    this.autoSaveWatchdog = window.setTimeout(() => {
      if (!this.autoSavePending) return;
      this.autoSaveUnavailable = true;
      this.finishAutoSave(false);
      new import_obsidian.Notice("PdfCraft did not respond to automatic save. Use its Save button for this PDF.", 1e4);
    }, 3e4);
    return this.autoSavePromise;
  }
  async flushAutoSaveBeforeClose() {
    if (!this.dirty || !this.plugin.settings.autoSave || this.plugin.settings.saveMode !== "overwrite") return;
    if (!this.hostReady) {
      new import_obsidian.Notice("PdfCraft still has unsaved changes; this web build did not expose automatic saving. Use PdfCraft's Save button before closing.", 1e4);
      return;
    }
    this.clearAutoSaveSchedule();
    const saved = await Promise.race([this.beginAutoSave(), sleep(5e3).then(() => false)]);
    if (!saved) new import_obsidian.Notice("PdfCraft still has unsaved changes. Reopen the PDF and use PdfCraft's Save button if needed.", 1e4);
  }
  clearAutoSaveSchedule() {
    if (this.autoSaveTimer !== null) window.clearTimeout(this.autoSaveTimer);
    this.autoSaveTimer = null;
  }
  clearAutoSaveTimers() {
    this.clearAutoSaveSchedule();
    if (this.autoSavePending) this.finishAutoSave(false);
    if (this.autoSaveWatchdog !== null) window.clearTimeout(this.autoSaveWatchdog);
    this.autoSaveWatchdog = null;
    if (this.autoSaveSupportTimer !== null) window.clearTimeout(this.autoSaveSupportTimer);
    this.autoSaveSupportTimer = null;
  }
  teardown() {
    this.loadGeneration++;
    this.clearAutoSaveTimers();
    this.hostReady = false;
    this.dirty = false;
    this.autoSaveUnavailable = false;
    if (this.msgHandler) window.removeEventListener("message", this.msgHandler);
    this.msgHandler = null;
    if (this.iframe) {
      this.iframe.src = "about:blank";
      this.iframe.remove();
      this.iframe = null;
    }
    if (this.pageUrl) {
      URL.revokeObjectURL(this.pageUrl);
      this.pageUrl = null;
    }
  }
  /** PdfCraft has no "open this file" API, so we wait for its canvas to come alive and "drop" the PDF on it. */
  async waitReady(iframe, timeoutMs = 25e3, isCurrent = () => true) {
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
      if (!isCurrent()) return false;
      try {
        const c = iframe.contentWindow?.document.getElementById("pdfcraft");
        if (c && (c.width !== 300 || c.height !== 150)) {
          await sleep(400);
          return isCurrent();
        }
      } catch (_) {
      }
      await sleep(100);
    }
    return false;
  }
  dropFile(iframe, name, bytes) {
    const win = iframe.contentWindow;
    const canvas = win.document.getElementById("pdfcraft");
    const file = new win.File([bytes], name, { type: "application/pdf" });
    const dt = new win.DataTransfer();
    dt.items.add(file);
    const fire = (type) => canvas.dispatchEvent(new win.DragEvent(type, { dataTransfer: dt, bubbles: true, cancelable: true }));
    fire("dragenter");
    fire("dragover");
    fire("drop");
  }
};
var PdfCraftSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  async display() {
    const { containerEl } = this;
    containerEl.empty();
    const s = this.plugin.settings;
    const defaultSetting = new import_obsidian.Setting(containerEl).setName("Default viewer when opening a PDF").setDesc("Choose which viewer opens PDFs from the file list. PdfCraft is the default. Existing PDF tabs keep their current viewer; use the switch button in a PDF tab to change one tab.");
    defaultSetting.addButton((button) => {
      button.setButtonText("PdfCraft");
      if (s.takeOver) button.setCta();
      button.onClick(async () => {
        if (s.takeOver) return;
        s.takeOver = true;
        await this.plugin.saveSettings();
        if (this.plugin.enabledHere) this.plugin.applyTakeover(true);
        void this.display();
      });
    });
    defaultSetting.addButton((button) => {
      button.setButtonText("Obsidian");
      if (!s.takeOver) button.setCta();
      button.onClick(async () => {
        if (!s.takeOver) return;
        s.takeOver = false;
        await this.plugin.saveSettings();
        if (this.plugin.enabledHere) this.plugin.applyTakeover(false);
        void this.display();
      });
    });
    const linkSetting = new import_obsidian.Setting(containerEl).setName("Default viewer when clicking a PDF link").setDesc("Choose which viewer opens PDF links in notes. Obsidian's native viewer is the default. The mobile setting below takes precedence when PdfCraft is disabled there.");
    linkSetting.addButton((button) => {
      button.setButtonText("Obsidian");
      if (s.linkViewer !== "pdfcraft") button.setCta();
      button.onClick(async () => {
        if (s.linkViewer === "native") return;
        s.linkViewer = "native";
        await this.plugin.saveSettings();
        void this.display();
      });
    });
    linkSetting.addButton((button) => {
      button.setButtonText("PdfCraft");
      if (s.linkViewer === "pdfcraft") button.setCta();
      button.onClick(async () => {
        if (s.linkViewer === "pdfcraft") return;
        s.linkViewer = "pdfcraft";
        await this.plugin.saveSettings();
        void this.display();
      });
    });
    new import_obsidian.Setting(containerEl).setName("Enable PdfCraft on mobile").setDesc("Off by default. When off, PDFs on mobile use Obsidian's native viewer. Turn on to use the selected default viewer or switch individual PDF tabs to PdfCraft. Mobile support is still experimental.").addToggle(
      (toggle) => toggle.setValue(s.enableOnMobile).onChange(async (value) => {
        s.enableOnMobile = value;
        await this.plugin.saveSettings();
        await this.plugin.updateMobileAvailability();
      })
    );
    const versions = await this.plugin.listVersions();
    new import_obsidian.Setting(containerEl).setName("PdfCraft version in use").setDesc("Old versions are kept, so you can switch back if a new one misbehaves. Reopen your PDF tabs after changing.").addDropdown((d) => {
      d.addOption("", versions.length ? `Newest installed (${versions[0]})` : "None installed");
      versions.forEach((v) => d.addOption(v, v));
      d.setValue(s.activeVersion).onChange(async (v) => {
        s.activeVersion = v;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(containerEl).setName("Get a newer PdfCraft").setDesc("Downloads the latest web build from GitHub next to the old ones. It is not activated until you pick it above. You can also unzip a web build by hand into the plugin's pdfcraft-web folder, in its own sub-folder.").addButton(
      (b) => b.setButtonText("Download latest").onClick(async () => {
        await this.plugin.downloadLatest();
        this.display();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Renderer").setDesc("If PdfCraft feels laggy, try \u201CWebGL2\u201D: it stops PdfCraft from using WebGPU, which can be slow or software-emulated on some computers. Reopen your PDF tabs after changing.").addDropdown(
      (d) => d.addOption("auto", "Automatic (default)").addOption("webgl", "WebGL2").setValue(s.renderer).onChange(async (v) => {
        s.renderer = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Preload PdfCraft at startup").setDesc("Loads PdfCraft's files into memory a few seconds after Obsidian starts, so your first PDF opens faster. Uses roughly 40 MB of memory.").addToggle(
      (t) => t.setValue(s.preload).onChange(async (v) => {
        s.preload = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Let Obsidian hotkeys work inside PdfCraft").setDesc("While PdfCraft has focus, your Obsidian hotkeys (like reload, command palette, switch tab) are passed to Obsidian first. PdfCraft keeps the common editing keys: find, copy, paste, undo, save, zoom.").addToggle(
      (t) => t.setValue(s.forwardHotkeys).onChange(async (v) => {
        s.forwardHotkeys = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("When saving").setDesc("Overwrite the original PDF, or always create a separate \u201C(edited)\u201D copy next to it.").addDropdown(
      (d) => d.addOption("overwrite", "Overwrite original").addOption("copy", "Save as new copy").setValue(s.saveMode).onChange(async (v) => {
        s.saveMode = v;
        await this.plugin.saveSettings();
        this.plugin.refreshAutoSaveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Save changes automatically").setDesc("On by default. When PdfCraft reports unsaved changes, save to the open vault PDF after 10 seconds without input. Requires Overwrite original above and a PdfCraft web build with the host bridge (0.6.0 or newer). Backups still apply.").addToggle(
      (toggle) => toggle.setValue(s.autoSave).onChange(async (value) => {
        s.autoSave = value;
        await this.plugin.saveSettings();
        this.plugin.refreshAutoSaveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Keep a backup before overwriting").setDesc("Stores the last 10 originals in the plugin's backups folder (PdfCraft is still alpha software).").addToggle(
      (t) => t.setValue(s.backupOnSave).onChange(async (v) => {
        s.backupOnSave = v;
        await this.plugin.saveSettings();
      })
    );
  }
};
