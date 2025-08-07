var ks = Object.defineProperty;
var Ms = (n, t, e) => t in n ? ks(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var _n = (n, t, e) => (Ms(n, typeof t != "symbol" ? t + "" : t, e), e);
/* @license twgl.js 5.5.4 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */
let Ge = Float32Array;
function Bt(n, t, e) {
  const i = new Ge(3);
  return n && (i[0] = n), t && (i[1] = t), e && (i[2] = e), i;
}
function Ds(n, t, e) {
  return e = e || new Ge(3), e[0] = n[0] - t[0], e[1] = n[1] - t[1], e[2] = n[2] - t[2], e;
}
function dn(n, t, e) {
  e = e || new Ge(3);
  const i = n[2] * t[0] - n[0] * t[2], r = n[0] * t[1] - n[1] * t[0];
  return e[0] = n[1] * t[2] - n[2] * t[1], e[1] = i, e[2] = r, e;
}
function ei(n, t) {
  t = t || new Ge(3);
  const e = n[0] * n[0] + n[1] * n[1] + n[2] * n[2], i = Math.sqrt(e);
  return i > 1e-5 ? (t[0] = n[0] / i, t[1] = n[1] / i, t[2] = n[2] / i) : (t[0] = 0, t[1] = 0, t[2] = 0), t;
}
let $ = Float32Array;
function Os(n) {
  const t = $;
  return $ = n, t;
}
function zs(n, t) {
  return t = t || new $(16), t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = -n[3], t[4] = -n[4], t[5] = -n[5], t[6] = -n[6], t[7] = -n[7], t[8] = -n[8], t[9] = -n[9], t[10] = -n[10], t[11] = -n[11], t[12] = -n[12], t[13] = -n[13], t[14] = -n[14], t[15] = -n[15], t;
}
function Fs() {
  return new $(16).fill(0);
}
function Ln(n, t) {
  return t = t || new $(16), t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t;
}
function $n(n) {
  return n = n || new $(16), n[0] = 1, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 0, n[5] = 1, n[6] = 0, n[7] = 0, n[8] = 0, n[9] = 0, n[10] = 1, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n;
}
function Rs(n, t) {
  if (t = t || new $(16), t === n) {
    let g;
    return g = n[1], n[1] = n[4], n[4] = g, g = n[2], n[2] = n[8], n[8] = g, g = n[3], n[3] = n[12], n[12] = g, g = n[6], n[6] = n[9], n[9] = g, g = n[7], n[7] = n[13], n[13] = g, g = n[11], n[11] = n[14], n[14] = g, t;
  }
  const e = n[0 * 4 + 0], i = n[0 * 4 + 1], r = n[0 * 4 + 2], s = n[0 * 4 + 3], o = n[1 * 4 + 0], a = n[1 * 4 + 1], l = n[1 * 4 + 2], u = n[1 * 4 + 3], c = n[2 * 4 + 0], h = n[2 * 4 + 1], f = n[2 * 4 + 2], d = n[2 * 4 + 3], p = n[3 * 4 + 0], _ = n[3 * 4 + 1], m = n[3 * 4 + 2], v = n[3 * 4 + 3];
  return t[0] = e, t[1] = o, t[2] = c, t[3] = p, t[4] = i, t[5] = a, t[6] = h, t[7] = _, t[8] = r, t[9] = l, t[10] = f, t[11] = m, t[12] = s, t[13] = u, t[14] = d, t[15] = v, t;
}
function Un(n, t) {
  t = t || new $(16);
  const e = n[0 * 4 + 0], i = n[0 * 4 + 1], r = n[0 * 4 + 2], s = n[0 * 4 + 3], o = n[1 * 4 + 0], a = n[1 * 4 + 1], l = n[1 * 4 + 2], u = n[1 * 4 + 3], c = n[2 * 4 + 0], h = n[2 * 4 + 1], f = n[2 * 4 + 2], d = n[2 * 4 + 3], p = n[3 * 4 + 0], _ = n[3 * 4 + 1], m = n[3 * 4 + 2], v = n[3 * 4 + 3], g = f * v, x = m * d, A = l * v, y = m * u, w = l * d, T = f * u, E = r * v, b = m * s, S = r * d, M = f * s, P = r * u, k = l * s, R = c * _, z = p * h, O = o * _, F = p * a, L = o * h, Ct = c * a, xt = e * _, At = p * i, dt = e * h, Gt = c * i, it = e * a, pt = o * i, un = g * a + y * h + w * _ - (x * a + A * h + T * _), cn = x * i + E * h + M * _ - (g * i + b * h + S * _), hn = A * i + b * a + P * _ - (y * i + E * a + k * _), fn = T * i + S * a + k * h - (w * i + M * a + P * h), K = 1 / (e * un + o * cn + c * hn + p * fn);
  return t[0] = K * un, t[1] = K * cn, t[2] = K * hn, t[3] = K * fn, t[4] = K * (x * o + A * c + T * p - (g * o + y * c + w * p)), t[5] = K * (g * e + b * c + S * p - (x * e + E * c + M * p)), t[6] = K * (y * e + E * o + k * p - (A * e + b * o + P * p)), t[7] = K * (w * e + M * o + P * c - (T * e + S * o + k * c)), t[8] = K * (R * u + F * d + L * v - (z * u + O * d + Ct * v)), t[9] = K * (z * s + xt * d + Gt * v - (R * s + At * d + dt * v)), t[10] = K * (O * s + At * u + it * v - (F * s + xt * u + pt * v)), t[11] = K * (Ct * s + dt * u + pt * d - (L * s + Gt * u + it * d)), t[12] = K * (O * f + Ct * m + z * l - (L * m + R * l + F * f)), t[13] = K * (dt * m + R * r + At * f - (xt * f + Gt * m + z * r)), t[14] = K * (xt * l + pt * m + F * r - (it * m + O * r + At * l)), t[15] = K * (it * f + L * r + Gt * l - (dt * l + pt * f + Ct * r)), t;
}
function Is(n, t, e) {
  e = e || new $(16);
  const i = n[0], r = n[1], s = n[2], o = n[3], a = n[4 + 0], l = n[4 + 1], u = n[4 + 2], c = n[4 + 3], h = n[8 + 0], f = n[8 + 1], d = n[8 + 2], p = n[8 + 3], _ = n[12 + 0], m = n[12 + 1], v = n[12 + 2], g = n[12 + 3], x = t[0], A = t[1], y = t[2], w = t[3], T = t[4 + 0], E = t[4 + 1], b = t[4 + 2], S = t[4 + 3], M = t[8 + 0], P = t[8 + 1], k = t[8 + 2], R = t[8 + 3], z = t[12 + 0], O = t[12 + 1], F = t[12 + 2], L = t[12 + 3];
  return e[0] = i * x + a * A + h * y + _ * w, e[1] = r * x + l * A + f * y + m * w, e[2] = s * x + u * A + d * y + v * w, e[3] = o * x + c * A + p * y + g * w, e[4] = i * T + a * E + h * b + _ * S, e[5] = r * T + l * E + f * b + m * S, e[6] = s * T + u * E + d * b + v * S, e[7] = o * T + c * E + p * b + g * S, e[8] = i * M + a * P + h * k + _ * R, e[9] = r * M + l * P + f * k + m * R, e[10] = s * M + u * P + d * k + v * R, e[11] = o * M + c * P + p * k + g * R, e[12] = i * z + a * O + h * F + _ * L, e[13] = r * z + l * O + f * F + m * L, e[14] = s * z + u * O + d * F + v * L, e[15] = o * z + c * O + p * F + g * L, e;
}
function Bs(n, t, e) {
  return e = e || $n(), n !== e && (e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11]), e[12] = t[0], e[13] = t[1], e[14] = t[2], e[15] = 1, e;
}
function Ls(n, t) {
  return t = t || Bt(), t[0] = n[12], t[1] = n[13], t[2] = n[14], t;
}
function $s(n, t, e) {
  e = e || Bt();
  const i = t * 4;
  return e[0] = n[i + 0], e[1] = n[i + 1], e[2] = n[i + 2], e;
}
function Us(n, t, e, i) {
  i !== n && (i = Ln(n, i));
  const r = e * 4;
  return i[r + 0] = t[0], i[r + 1] = t[1], i[r + 2] = t[2], i;
}
function Ns(n, t, e, i, r) {
  r = r || new $(16);
  const s = Math.tan(Math.PI * 0.5 - 0.5 * n), o = 1 / (e - i);
  return r[0] = s / t, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = s, r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = (e + i) * o, r[11] = -1, r[12] = 0, r[13] = 0, r[14] = e * i * o * 2, r[15] = 0, r;
}
function Vs(n, t, e, i, r, s, o) {
  return o = o || new $(16), o[0] = 2 / (t - n), o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = 2 / (i - e), o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[10] = 2 / (r - s), o[11] = 0, o[12] = (t + n) / (n - t), o[13] = (i + e) / (e - i), o[14] = (s + r) / (r - s), o[15] = 1, o;
}
function Ys(n, t, e, i, r, s, o) {
  o = o || new $(16);
  const a = t - n, l = i - e, u = r - s;
  return o[0] = 2 * r / a, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = 2 * r / l, o[6] = 0, o[7] = 0, o[8] = (n + t) / a, o[9] = (i + e) / l, o[10] = s / u, o[11] = -1, o[12] = 0, o[13] = 0, o[14] = r * s / u, o[15] = 0, o;
}
let zt, Ht, Pt;
function Gs(n, t, e, i) {
  return i = i || new $(16), zt = zt || Bt(), Ht = Ht || Bt(), Pt = Pt || Bt(), ei(
    Ds(n, t, Pt),
    Pt
  ), ei(dn(e, Pt, zt), zt), ei(dn(Pt, zt, Ht), Ht), i[0] = zt[0], i[1] = zt[1], i[2] = zt[2], i[3] = 0, i[4] = Ht[0], i[5] = Ht[1], i[6] = Ht[2], i[7] = 0, i[8] = Pt[0], i[9] = Pt[1], i[10] = Pt[2], i[11] = 0, i[12] = n[0], i[13] = n[1], i[14] = n[2], i[15] = 1, i;
}
function Hs(n, t) {
  return t = t || new $(16), t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t;
}
function Xs(n, t, e) {
  e = e || new $(16);
  const i = t[0], r = t[1], s = t[2], o = n[0], a = n[1], l = n[2], u = n[3], c = n[1 * 4 + 0], h = n[1 * 4 + 1], f = n[1 * 4 + 2], d = n[1 * 4 + 3], p = n[2 * 4 + 0], _ = n[2 * 4 + 1], m = n[2 * 4 + 2], v = n[2 * 4 + 3], g = n[3 * 4 + 0], x = n[3 * 4 + 1], A = n[3 * 4 + 2], y = n[3 * 4 + 3];
  return n !== e && (e[0] = o, e[1] = a, e[2] = l, e[3] = u, e[4] = c, e[5] = h, e[6] = f, e[7] = d, e[8] = p, e[9] = _, e[10] = m, e[11] = v), e[12] = o * i + c * r + p * s + g, e[13] = a * i + h * r + _ * s + x, e[14] = l * i + f * r + m * s + A, e[15] = u * i + d * r + v * s + y, e;
}
function Ws(n, t) {
  t = t || new $(16);
  const e = Math.cos(n), i = Math.sin(n);
  return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e, t[6] = i, t[7] = 0, t[8] = 0, t[9] = -i, t[10] = e, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function qs(n, t, e) {
  e = e || new $(16);
  const i = n[4], r = n[5], s = n[6], o = n[7], a = n[8], l = n[9], u = n[10], c = n[11], h = Math.cos(t), f = Math.sin(t);
  return e[4] = h * i + f * a, e[5] = h * r + f * l, e[6] = h * s + f * u, e[7] = h * o + f * c, e[8] = h * a - f * i, e[9] = h * l - f * r, e[10] = h * u - f * s, e[11] = h * c - f * o, n !== e && (e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15]), e;
}
function js(n, t) {
  t = t || new $(16);
  const e = Math.cos(n), i = Math.sin(n);
  return t[0] = e, t[1] = 0, t[2] = -i, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = i, t[9] = 0, t[10] = e, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function Ks(n, t, e) {
  e = e || new $(16);
  const i = n[0 * 4 + 0], r = n[0 * 4 + 1], s = n[0 * 4 + 2], o = n[0 * 4 + 3], a = n[2 * 4 + 0], l = n[2 * 4 + 1], u = n[2 * 4 + 2], c = n[2 * 4 + 3], h = Math.cos(t), f = Math.sin(t);
  return e[0] = h * i - f * a, e[1] = h * r - f * l, e[2] = h * s - f * u, e[3] = h * o - f * c, e[8] = h * a + f * i, e[9] = h * l + f * r, e[10] = h * u + f * s, e[11] = h * c + f * o, n !== e && (e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15]), e;
}
function Qs(n, t) {
  t = t || new $(16);
  const e = Math.cos(n), i = Math.sin(n);
  return t[0] = e, t[1] = i, t[2] = 0, t[3] = 0, t[4] = -i, t[5] = e, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function Zs(n, t, e) {
  e = e || new $(16);
  const i = n[0 * 4 + 0], r = n[0 * 4 + 1], s = n[0 * 4 + 2], o = n[0 * 4 + 3], a = n[1 * 4 + 0], l = n[1 * 4 + 1], u = n[1 * 4 + 2], c = n[1 * 4 + 3], h = Math.cos(t), f = Math.sin(t);
  return e[0] = h * i + f * a, e[1] = h * r + f * l, e[2] = h * s + f * u, e[3] = h * o + f * c, e[4] = h * a - f * i, e[5] = h * l - f * r, e[6] = h * u - f * s, e[7] = h * c - f * o, n !== e && (e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15]), e;
}
function Js(n, t, e) {
  e = e || new $(16);
  let i = n[0], r = n[1], s = n[2];
  const o = Math.sqrt(i * i + r * r + s * s);
  i /= o, r /= o, s /= o;
  const a = i * i, l = r * r, u = s * s, c = Math.cos(t), h = Math.sin(t), f = 1 - c;
  return e[0] = a + (1 - a) * c, e[1] = i * r * f + s * h, e[2] = i * s * f - r * h, e[3] = 0, e[4] = i * r * f - s * h, e[5] = l + (1 - l) * c, e[6] = r * s * f + i * h, e[7] = 0, e[8] = i * s * f + r * h, e[9] = r * s * f - i * h, e[10] = u + (1 - u) * c, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function to(n, t, e, i) {
  i = i || new $(16);
  let r = t[0], s = t[1], o = t[2];
  const a = Math.sqrt(r * r + s * s + o * o);
  r /= a, s /= a, o /= a;
  const l = r * r, u = s * s, c = o * o, h = Math.cos(e), f = Math.sin(e), d = 1 - h, p = l + (1 - l) * h, _ = r * s * d + o * f, m = r * o * d - s * f, v = r * s * d - o * f, g = u + (1 - u) * h, x = s * o * d + r * f, A = r * o * d + s * f, y = s * o * d - r * f, w = c + (1 - c) * h, T = n[0], E = n[1], b = n[2], S = n[3], M = n[4], P = n[5], k = n[6], R = n[7], z = n[8], O = n[9], F = n[10], L = n[11];
  return i[0] = p * T + _ * M + m * z, i[1] = p * E + _ * P + m * O, i[2] = p * b + _ * k + m * F, i[3] = p * S + _ * R + m * L, i[4] = v * T + g * M + x * z, i[5] = v * E + g * P + x * O, i[6] = v * b + g * k + x * F, i[7] = v * S + g * R + x * L, i[8] = A * T + y * M + w * z, i[9] = A * E + y * P + w * O, i[10] = A * b + y * k + w * F, i[11] = A * S + y * R + w * L, n !== i && (i[12] = n[12], i[13] = n[13], i[14] = n[14], i[15] = n[15]), i;
}
function eo(n, t) {
  return t = t || new $(16), t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = n[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function io(n, t, e) {
  e = e || new $(16);
  const i = t[0], r = t[1], s = t[2];
  return e[0] = i * n[0 * 4 + 0], e[1] = i * n[0 * 4 + 1], e[2] = i * n[0 * 4 + 2], e[3] = i * n[0 * 4 + 3], e[4] = r * n[1 * 4 + 0], e[5] = r * n[1 * 4 + 1], e[6] = r * n[1 * 4 + 2], e[7] = r * n[1 * 4 + 3], e[8] = s * n[2 * 4 + 0], e[9] = s * n[2 * 4 + 1], e[10] = s * n[2 * 4 + 2], e[11] = s * n[2 * 4 + 3], n !== e && (e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15]), e;
}
function no(n, t, e) {
  e = e || Bt();
  const i = t[0], r = t[1], s = t[2], o = i * n[0 * 4 + 3] + r * n[1 * 4 + 3] + s * n[2 * 4 + 3] + n[3 * 4 + 3];
  return e[0] = (i * n[0 * 4 + 0] + r * n[1 * 4 + 0] + s * n[2 * 4 + 0] + n[3 * 4 + 0]) / o, e[1] = (i * n[0 * 4 + 1] + r * n[1 * 4 + 1] + s * n[2 * 4 + 1] + n[3 * 4 + 1]) / o, e[2] = (i * n[0 * 4 + 2] + r * n[1 * 4 + 2] + s * n[2 * 4 + 2] + n[3 * 4 + 2]) / o, e;
}
function ro(n, t, e) {
  e = e || Bt();
  const i = t[0], r = t[1], s = t[2];
  return e[0] = i * n[0 * 4 + 0] + r * n[1 * 4 + 0] + s * n[2 * 4 + 0], e[1] = i * n[0 * 4 + 1] + r * n[1 * 4 + 1] + s * n[2 * 4 + 1], e[2] = i * n[0 * 4 + 2] + r * n[1 * 4 + 2] + s * n[2 * 4 + 2], e;
}
function so(n, t, e) {
  e = e || Bt();
  const i = Un(n), r = t[0], s = t[1], o = t[2];
  return e[0] = r * i[0 * 4 + 0] + s * i[0 * 4 + 1] + o * i[0 * 4 + 2], e[1] = r * i[1 * 4 + 0] + s * i[1 * 4 + 1] + o * i[1 * 4 + 2], e[2] = r * i[2 * 4 + 0] + s * i[2 * 4 + 1] + o * i[2 * 4 + 2], e;
}
var pn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  axisRotate: to,
  axisRotation: Js,
  copy: Ln,
  create: Fs,
  frustum: Ys,
  getAxis: $s,
  getTranslation: Ls,
  identity: $n,
  inverse: Un,
  lookAt: Gs,
  multiply: Is,
  negate: zs,
  ortho: Vs,
  perspective: Ns,
  rotateX: qs,
  rotateY: Ks,
  rotateZ: Zs,
  rotationX: Ws,
  rotationY: js,
  rotationZ: Qs,
  scale: io,
  scaling: eo,
  setAxis: Us,
  setDefaultType: Os,
  setTranslation: Bs,
  transformDirection: ro,
  transformNormal: so,
  transformPoint: no,
  translate: Xs,
  translation: Hs,
  transpose: Rs
});
const ki = 5120, be = 5121, Mi = 5122, Di = 5123, Oi = 5124, zi = 5125, Fi = 5126, oo = 32819, ao = 32820, lo = 33635, uo = 5131, co = 33640, ho = 35899, fo = 35902, _o = 36269, po = 34042, Nn = {};
{
  const n = Nn;
  n[ki] = Int8Array, n[be] = Uint8Array, n[Mi] = Int16Array, n[Di] = Uint16Array, n[Oi] = Int32Array, n[zi] = Uint32Array, n[Fi] = Float32Array, n[oo] = Uint16Array, n[ao] = Uint16Array, n[lo] = Uint16Array, n[uo] = Uint16Array, n[co] = Uint32Array, n[ho] = Uint32Array, n[fo] = Uint32Array, n[_o] = Uint32Array, n[po] = Uint32Array;
}
function Vn(n) {
  if (n instanceof Int8Array)
    return ki;
  if (n instanceof Uint8Array || n instanceof Uint8ClampedArray)
    return be;
  if (n instanceof Int16Array)
    return Mi;
  if (n instanceof Uint16Array)
    return Di;
  if (n instanceof Int32Array)
    return Oi;
  if (n instanceof Uint32Array)
    return zi;
  if (n instanceof Float32Array)
    return Fi;
  throw new Error("unsupported typed array type");
}
function Yn(n) {
  if (n === Int8Array)
    return ki;
  if (n === Uint8Array || n === Uint8ClampedArray)
    return be;
  if (n === Int16Array)
    return Mi;
  if (n === Uint16Array)
    return Di;
  if (n === Int32Array)
    return Oi;
  if (n === Uint32Array)
    return zi;
  if (n === Float32Array)
    return Fi;
  throw new Error("unsupported typed array type");
}
function go(n) {
  const t = Nn[n];
  if (!t)
    throw new Error("unknown gl type");
  return t;
}
const fi = typeof SharedArrayBuffer < "u" ? function(t) {
  return t && t.buffer && (t.buffer instanceof ArrayBuffer || t.buffer instanceof SharedArrayBuffer);
} : function(t) {
  return t && t.buffer && t.buffer instanceof ArrayBuffer;
};
function mo(...n) {
  console.error(...n);
}
const gn = /* @__PURE__ */ new Map();
function Gn(n, t) {
  if (!n || typeof n != "object")
    return !1;
  let e = gn.get(t);
  e || (e = /* @__PURE__ */ new WeakMap(), gn.set(t, e));
  let i = e.get(n);
  if (i === void 0) {
    const r = Object.prototype.toString.call(n);
    i = r.substring(8, r.length - 1) === t, e.set(n, i);
  }
  return i;
}
function vo(n, t) {
  return typeof WebGLBuffer < "u" && Gn(t, "WebGLBuffer");
}
function Hn(n, t) {
  return typeof WebGLTexture < "u" && Gn(t, "WebGLTexture");
}
const Xn = 35044, Kt = 34962, yo = 34963, xo = 34660, Ao = 5120, bo = 5121, wo = 5122, To = 5123, Eo = 5124, So = 5125, Wn = 5126, qn = {
  attribPrefix: ""
};
function Co(n, t, e, i, r) {
  n.bindBuffer(t, e), n.bufferData(t, i, r || Xn);
}
function jn(n, t, e, i) {
  if (vo(n, t))
    return t;
  e = e || Kt;
  const r = n.createBuffer();
  return Co(n, e, r, t, i), r;
}
function Kn(n) {
  return n === "indices";
}
function Po(n) {
  return n === Int8Array || n === Uint8Array;
}
function ko(n) {
  return n.length ? n : n.data;
}
const Mo = /coord|texture/i, Do = /color|colour/i;
function Oo(n, t) {
  let e;
  if (Mo.test(n) ? e = 2 : Do.test(n) ? e = 4 : e = 3, t % e > 0)
    throw new Error(`Can not guess numComponents for attribute '${n}'. Tried ${e} but ${t} values is not evenly divisible by ${e}. You should specify it.`);
  return e;
}
function zo(n, t, e) {
  return n.numComponents || n.size || Oo(t, e || ko(n).length);
}
function Qn(n, t) {
  if (fi(n))
    return n;
  if (fi(n.data))
    return n.data;
  Array.isArray(n) && (n = {
    data: n
  });
  let e = n.type ? Ri(n.type) : void 0;
  return e || (Kn(t) ? e = Uint16Array : e = Float32Array), new e(n.data);
}
function Fo(n) {
  return typeof n == "number" ? n : n ? Yn(n) : Wn;
}
function Ri(n) {
  return typeof n == "number" ? go(n) : n || Float32Array;
}
function Ro(n, t) {
  return {
    buffer: t.buffer,
    numValues: 2 * 3 * 4,
    // safely divided by 2, 3, 4
    type: Fo(t.type),
    arrayType: Ri(t.type)
  };
}
function Io(n, t) {
  const e = t.data || t, i = Ri(t.type), r = e * i.BYTES_PER_ELEMENT, s = n.createBuffer();
  return n.bindBuffer(Kt, s), n.bufferData(Kt, r, t.drawType || Xn), {
    buffer: s,
    numValues: e,
    type: Yn(i),
    arrayType: i
  };
}
function Bo(n, t, e) {
  const i = Qn(t, e);
  return {
    arrayType: i.constructor,
    buffer: jn(n, i, void 0, t.drawType),
    type: Vn(i),
    numValues: 0
  };
}
function Lo(n, t) {
  const e = {};
  return Object.keys(t).forEach(function(i) {
    if (!Kn(i)) {
      const r = t[i], s = r.attrib || r.name || r.attribName || qn.attribPrefix + i;
      if (r.value) {
        if (!Array.isArray(r.value) && !fi(r.value))
          throw new Error("array.value is not array or typedarray");
        e[s] = {
          value: r.value
        };
      } else {
        let o;
        r.buffer && r.buffer instanceof WebGLBuffer ? o = Ro : typeof r == "number" || typeof r.data == "number" ? o = Io : o = Bo;
        const { buffer: a, type: l, numValues: u, arrayType: c } = o(n, r, i), h = r.normalize !== void 0 ? r.normalize : Po(c), f = zo(r, i, u);
        e[s] = {
          buffer: a,
          numComponents: f,
          type: l,
          normalize: h,
          stride: r.stride || 0,
          offset: r.offset || 0,
          divisor: r.divisor === void 0 ? void 0 : r.divisor,
          drawType: r.drawType
        };
      }
    }
  }), n.bindBuffer(Kt, null), e;
}
function $o(n, t) {
  return t === Ao || t === bo ? 1 : t === wo || t === To ? 2 : t === Eo || t === So || t === Wn ? 4 : 0;
}
const ii = ["position", "positions", "a_position"];
function Uo(n, t) {
  let e, i;
  for (i = 0; i < ii.length && (e = ii[i], !(e in t || (e = qn.attribPrefix + e, e in t))); ++i)
    ;
  i === ii.length && (e = Object.keys(t)[0]);
  const r = t[e];
  if (!r.buffer)
    return 1;
  n.bindBuffer(Kt, r.buffer);
  const s = n.getBufferParameter(Kt, xo);
  n.bindBuffer(Kt, null);
  const o = $o(n, r.type), a = s / o, l = r.numComponents || r.size, u = a / l;
  if (u % 1 !== 0)
    throw new Error(`numComponents ${l} not correct for length ${length}`);
  return u;
}
function Zn(n, t, e) {
  const i = Lo(n, t), r = Object.assign({}, e || {});
  r.attribs = Object.assign({}, e ? e.attribs : {}, i);
  const s = t.indices;
  if (s) {
    const o = Qn(s, "indices");
    r.indices = jn(n, o, yo), r.numElements = o.length, r.elementType = Vn(o);
  } else
    r.numElements || (r.numElements = Uo(n, r.attribs));
  return r;
}
function Ii(n) {
  return !!n.texStorage2D;
}
const No = function() {
  const n = {}, t = {};
  function e(i) {
    const r = i.constructor.name;
    if (!n[r]) {
      for (const s in i)
        if (typeof i[s] == "number") {
          const o = t[i[s]];
          t[i[s]] = o ? `${o} | ${s}` : s;
        }
      n[r] = !0;
    }
  }
  return function(r, s) {
    return e(r), t[s] || (typeof s == "number" ? `0x${s.toString(16)}` : s);
  };
}(), Bi = mo;
function Jn(n) {
  return typeof document < "u" && document.getElementById ? document.getElementById(n) : null;
}
const Ie = 33984, He = 34962, Vo = 34963, Yo = 35713, Go = 35714, Ho = 35632, Xo = 35633, Wo = 35981, tr = 35718, qo = 35721, jo = 35971, Ko = 35382, Qo = 35396, Zo = 35398, Jo = 35392, ta = 35395, Xe = 5126, er = 35664, ir = 35665, nr = 35666, Li = 5124, rr = 35667, sr = 35668, or = 35669, ar = 35670, lr = 35671, ur = 35672, cr = 35673, hr = 35674, fr = 35675, _r = 35676, ea = 35678, ia = 35680, na = 35679, ra = 35682, sa = 35685, oa = 35686, aa = 35687, la = 35688, ua = 35689, ca = 35690, ha = 36289, fa = 36292, _a = 36293, $i = 5125, dr = 36294, pr = 36295, gr = 36296, da = 36298, pa = 36299, ga = 36300, ma = 36303, va = 36306, ya = 36307, xa = 36308, Aa = 36311, We = 3553, qe = 34067, Ui = 32879, je = 35866, C = {};
function mr(n, t) {
  return C[t].bindPoint;
}
function ba(n, t) {
  return function(e) {
    n.uniform1f(t, e);
  };
}
function wa(n, t) {
  return function(e) {
    n.uniform1fv(t, e);
  };
}
function Ta(n, t) {
  return function(e) {
    n.uniform2fv(t, e);
  };
}
function Ea(n, t) {
  return function(e) {
    n.uniform3fv(t, e);
  };
}
function Sa(n, t) {
  return function(e) {
    n.uniform4fv(t, e);
  };
}
function vr(n, t) {
  return function(e) {
    n.uniform1i(t, e);
  };
}
function yr(n, t) {
  return function(e) {
    n.uniform1iv(t, e);
  };
}
function xr(n, t) {
  return function(e) {
    n.uniform2iv(t, e);
  };
}
function Ar(n, t) {
  return function(e) {
    n.uniform3iv(t, e);
  };
}
function br(n, t) {
  return function(e) {
    n.uniform4iv(t, e);
  };
}
function Ca(n, t) {
  return function(e) {
    n.uniform1ui(t, e);
  };
}
function Pa(n, t) {
  return function(e) {
    n.uniform1uiv(t, e);
  };
}
function ka(n, t) {
  return function(e) {
    n.uniform2uiv(t, e);
  };
}
function Ma(n, t) {
  return function(e) {
    n.uniform3uiv(t, e);
  };
}
function Da(n, t) {
  return function(e) {
    n.uniform4uiv(t, e);
  };
}
function Oa(n, t) {
  return function(e) {
    n.uniformMatrix2fv(t, !1, e);
  };
}
function za(n, t) {
  return function(e) {
    n.uniformMatrix3fv(t, !1, e);
  };
}
function Fa(n, t) {
  return function(e) {
    n.uniformMatrix4fv(t, !1, e);
  };
}
function Ra(n, t) {
  return function(e) {
    n.uniformMatrix2x3fv(t, !1, e);
  };
}
function Ia(n, t) {
  return function(e) {
    n.uniformMatrix3x2fv(t, !1, e);
  };
}
function Ba(n, t) {
  return function(e) {
    n.uniformMatrix2x4fv(t, !1, e);
  };
}
function La(n, t) {
  return function(e) {
    n.uniformMatrix4x2fv(t, !1, e);
  };
}
function $a(n, t) {
  return function(e) {
    n.uniformMatrix3x4fv(t, !1, e);
  };
}
function Ua(n, t) {
  return function(e) {
    n.uniformMatrix4x3fv(t, !1, e);
  };
}
function tt(n, t, e, i) {
  const r = mr(n, t);
  return Ii(n) ? function(s) {
    let o, a;
    !s || Hn(n, s) ? (o = s, a = null) : (o = s.texture, a = s.sampler), n.uniform1i(i, e), n.activeTexture(Ie + e), n.bindTexture(r, o), n.bindSampler(e, a);
  } : function(s) {
    n.uniform1i(i, e), n.activeTexture(Ie + e), n.bindTexture(r, s);
  };
}
function et(n, t, e, i, r) {
  const s = mr(n, t), o = new Int32Array(r);
  for (let a = 0; a < r; ++a)
    o[a] = e + a;
  return Ii(n) ? function(a) {
    n.uniform1iv(i, o), a.forEach(function(l, u) {
      n.activeTexture(Ie + o[u]);
      let c, h;
      !l || Hn(n, l) ? (c = l, h = null) : (c = l.texture, h = l.sampler), n.bindSampler(e, h), n.bindTexture(s, c);
    });
  } : function(a) {
    n.uniform1iv(i, o), a.forEach(function(l, u) {
      n.activeTexture(Ie + o[u]), n.bindTexture(s, l);
    });
  };
}
C[Xe] = { Type: Float32Array, size: 4, setter: ba, arraySetter: wa };
C[er] = { Type: Float32Array, size: 8, setter: Ta, cols: 2 };
C[ir] = { Type: Float32Array, size: 12, setter: Ea, cols: 3 };
C[nr] = { Type: Float32Array, size: 16, setter: Sa, cols: 4 };
C[Li] = { Type: Int32Array, size: 4, setter: vr, arraySetter: yr };
C[rr] = { Type: Int32Array, size: 8, setter: xr, cols: 2 };
C[sr] = { Type: Int32Array, size: 12, setter: Ar, cols: 3 };
C[or] = { Type: Int32Array, size: 16, setter: br, cols: 4 };
C[$i] = { Type: Uint32Array, size: 4, setter: Ca, arraySetter: Pa };
C[dr] = { Type: Uint32Array, size: 8, setter: ka, cols: 2 };
C[pr] = { Type: Uint32Array, size: 12, setter: Ma, cols: 3 };
C[gr] = { Type: Uint32Array, size: 16, setter: Da, cols: 4 };
C[ar] = { Type: Uint32Array, size: 4, setter: vr, arraySetter: yr };
C[lr] = { Type: Uint32Array, size: 8, setter: xr, cols: 2 };
C[ur] = { Type: Uint32Array, size: 12, setter: Ar, cols: 3 };
C[cr] = { Type: Uint32Array, size: 16, setter: br, cols: 4 };
C[hr] = { Type: Float32Array, size: 32, setter: Oa, rows: 2, cols: 2 };
C[fr] = { Type: Float32Array, size: 48, setter: za, rows: 3, cols: 3 };
C[_r] = { Type: Float32Array, size: 64, setter: Fa, rows: 4, cols: 4 };
C[sa] = { Type: Float32Array, size: 32, setter: Ra, rows: 2, cols: 3 };
C[oa] = { Type: Float32Array, size: 32, setter: Ba, rows: 2, cols: 4 };
C[aa] = { Type: Float32Array, size: 48, setter: Ia, rows: 3, cols: 2 };
C[la] = { Type: Float32Array, size: 48, setter: $a, rows: 3, cols: 4 };
C[ua] = { Type: Float32Array, size: 64, setter: La, rows: 4, cols: 2 };
C[ca] = { Type: Float32Array, size: 64, setter: Ua, rows: 4, cols: 3 };
C[ea] = { Type: null, size: 0, setter: tt, arraySetter: et, bindPoint: We };
C[ia] = { Type: null, size: 0, setter: tt, arraySetter: et, bindPoint: qe };
C[na] = { Type: null, size: 0, setter: tt, arraySetter: et, bindPoint: Ui };
C[ra] = { Type: null, size: 0, setter: tt, arraySetter: et, bindPoint: We };
C[ha] = { Type: null, size: 0, setter: tt, arraySetter: et, bindPoint: je };
C[fa] = { Type: null, size: 0, setter: tt, arraySetter: et, bindPoint: je };
C[_a] = { Type: null, size: 0, setter: tt, arraySetter: et, bindPoint: qe };
C[da] = { Type: null, size: 0, setter: tt, arraySetter: et, bindPoint: We };
C[pa] = { Type: null, size: 0, setter: tt, arraySetter: et, bindPoint: Ui };
C[ga] = { Type: null, size: 0, setter: tt, arraySetter: et, bindPoint: qe };
C[ma] = { Type: null, size: 0, setter: tt, arraySetter: et, bindPoint: je };
C[va] = { Type: null, size: 0, setter: tt, arraySetter: et, bindPoint: We };
C[ya] = { Type: null, size: 0, setter: tt, arraySetter: et, bindPoint: Ui };
C[xa] = { Type: null, size: 0, setter: tt, arraySetter: et, bindPoint: qe };
C[Aa] = { Type: null, size: 0, setter: tt, arraySetter: et, bindPoint: je };
function Ke(n, t) {
  return function(e) {
    if (e.value)
      switch (n.disableVertexAttribArray(t), e.value.length) {
        case 4:
          n.vertexAttrib4fv(t, e.value);
          break;
        case 3:
          n.vertexAttrib3fv(t, e.value);
          break;
        case 2:
          n.vertexAttrib2fv(t, e.value);
          break;
        case 1:
          n.vertexAttrib1fv(t, e.value);
          break;
        default:
          throw new Error("the length of a float constant value must be between 1 and 4!");
      }
    else
      n.bindBuffer(He, e.buffer), n.enableVertexAttribArray(t), n.vertexAttribPointer(
        t,
        e.numComponents || e.size,
        e.type || Xe,
        e.normalize || !1,
        e.stride || 0,
        e.offset || 0
      ), n.vertexAttribDivisor && n.vertexAttribDivisor(t, e.divisor || 0);
  };
}
function Vt(n, t) {
  return function(e) {
    if (e.value)
      if (n.disableVertexAttribArray(t), e.value.length === 4)
        n.vertexAttrib4iv(t, e.value);
      else
        throw new Error("The length of an integer constant value must be 4!");
    else
      n.bindBuffer(He, e.buffer), n.enableVertexAttribArray(t), n.vertexAttribIPointer(
        t,
        e.numComponents || e.size,
        e.type || Li,
        e.stride || 0,
        e.offset || 0
      ), n.vertexAttribDivisor && n.vertexAttribDivisor(t, e.divisor || 0);
  };
}
function Qe(n, t) {
  return function(e) {
    if (e.value)
      if (n.disableVertexAttribArray(t), e.value.length === 4)
        n.vertexAttrib4uiv(t, e.value);
      else
        throw new Error("The length of an unsigned integer constant value must be 4!");
    else
      n.bindBuffer(He, e.buffer), n.enableVertexAttribArray(t), n.vertexAttribIPointer(
        t,
        e.numComponents || e.size,
        e.type || $i,
        e.stride || 0,
        e.offset || 0
      ), n.vertexAttribDivisor && n.vertexAttribDivisor(t, e.divisor || 0);
  };
}
function Ni(n, t, e) {
  const i = e.size, r = e.count;
  return function(s) {
    n.bindBuffer(He, s.buffer);
    const o = s.size || s.numComponents || i, a = o / r, l = s.type || Xe, c = C[l].size * o, h = s.normalize || !1, f = s.offset || 0, d = c / r;
    for (let p = 0; p < r; ++p)
      n.enableVertexAttribArray(t + p), n.vertexAttribPointer(
        t + p,
        a,
        l,
        h,
        c,
        f + d * p
      ), n.vertexAttribDivisor && n.vertexAttribDivisor(t + p, s.divisor || 0);
  };
}
const W = {};
W[Xe] = { size: 4, setter: Ke };
W[er] = { size: 8, setter: Ke };
W[ir] = { size: 12, setter: Ke };
W[nr] = { size: 16, setter: Ke };
W[Li] = { size: 4, setter: Vt };
W[rr] = { size: 8, setter: Vt };
W[sr] = { size: 12, setter: Vt };
W[or] = { size: 16, setter: Vt };
W[$i] = { size: 4, setter: Qe };
W[dr] = { size: 8, setter: Qe };
W[pr] = { size: 12, setter: Qe };
W[gr] = { size: 16, setter: Qe };
W[ar] = { size: 4, setter: Vt };
W[lr] = { size: 8, setter: Vt };
W[ur] = { size: 12, setter: Vt };
W[cr] = { size: 16, setter: Vt };
W[hr] = { size: 4, setter: Ni, count: 2 };
W[fr] = { size: 9, setter: Ni, count: 3 };
W[_r] = { size: 16, setter: Ni, count: 4 };
const Na = /ERROR:\s*\d+:(\d+)/gi;
function Va(n, t = "", e = 0) {
  const i = [...t.matchAll(Na)], r = new Map(i.map((s, o) => {
    const a = parseInt(s[1]), l = i[o + 1], u = l ? l.index : t.length, c = t.substring(s.index, u);
    return [a - 1, c];
  }));
  return n.split(`
`).map((s, o) => {
    const a = r.get(o);
    return `${o + 1 + e}: ${s}${a ? `

^^^ ${a}` : ""}`;
  }).join(`
`);
}
const mn = /^[ \t]*\n/;
function wr(n) {
  let t = 0;
  return mn.test(n) && (t = 1, n = n.replace(mn, "")), { lineOffset: t, shaderSource: n };
}
function Ya(n, t) {
  return n.errorCallback(t), n.callback && setTimeout(() => {
    n.callback(`${t}
${n.errors.join(`
`)}`);
  }), null;
}
function Ga(n, t, e, i) {
  if (i = i || Bi, !n.getShaderParameter(e, Yo)) {
    const s = n.getShaderInfoLog(e), { lineOffset: o, shaderSource: a } = wr(n.getShaderSource(e)), l = `${Va(a, s, o)}
Error compiling ${No(n, t)}: ${s}`;
    return i(l), l;
  }
  return "";
}
function Vi(n, t, e) {
  let i, r, s;
  if (typeof t == "function" && (e = t, t = void 0), typeof n == "function")
    e = n, n = void 0;
  else if (n && !Array.isArray(n)) {
    const u = n;
    e = u.errorCallback, n = u.attribLocations, i = u.transformFeedbackVaryings, r = u.transformFeedbackMode, s = u.callback;
  }
  const o = e || Bi, a = [], l = {
    errorCallback(u, ...c) {
      a.push(u), o(u, ...c);
    },
    transformFeedbackVaryings: i,
    transformFeedbackMode: r,
    callback: s,
    errors: a
  };
  {
    let u = {};
    Array.isArray(n) ? n.forEach(function(c, h) {
      u[c] = t ? t[h] : h;
    }) : u = n || {}, l.attribLocations = u;
  }
  return l;
}
const Ha = [
  "VERTEX_SHADER",
  "FRAGMENT_SHADER"
];
function Xa(n, t) {
  if (t.indexOf("frag") >= 0)
    return Ho;
  if (t.indexOf("vert") >= 0)
    return Xo;
}
function Wa(n, t, e) {
  const i = n.getAttachedShaders(t);
  for (const r of i)
    e.has(r) && n.deleteShader(r);
  n.deleteProgram(t);
}
const qa = (n = 0) => new Promise((t) => setTimeout(t, n));
function ja(n, t, e) {
  const i = n.createProgram(), {
    attribLocations: r,
    transformFeedbackVaryings: s,
    transformFeedbackMode: o
  } = Vi(e);
  for (let a = 0; a < t.length; ++a) {
    let l = t[a];
    if (typeof l == "string") {
      const u = Jn(l), c = u ? u.text : l;
      let h = n[Ha[a]];
      u && u.type && (h = Xa(n, u.type) || h), l = n.createShader(h), n.shaderSource(l, wr(c).shaderSource), n.compileShader(l), n.attachShader(i, l);
    }
  }
  Object.entries(r).forEach(([a, l]) => n.bindAttribLocation(i, l, a));
  {
    let a = s;
    a && (a.attribs && (a = a.attribs), Array.isArray(a) || (a = Object.keys(a)), n.transformFeedbackVaryings(i, a, o || Wo));
  }
  return n.linkProgram(i), i;
}
function Ka(n, t, e, i, r) {
  const s = Vi(e, i, r), o = new Set(t), a = ja(n, t, s);
  function l(u, c) {
    const h = Za(u, c, s.errorCallback);
    return h && Wa(u, c, o), h;
  }
  if (s.callback) {
    Qa(n, a).then(() => {
      const u = l(n, a);
      s.callback(u, u ? void 0 : a);
    });
    return;
  }
  return l(n, a) ? void 0 : a;
}
async function Qa(n, t) {
  const e = n.getExtension("KHR_parallel_shader_compile"), i = e ? (s, o) => s.getProgramParameter(o, e.COMPLETION_STATUS_KHR) : () => !0;
  let r = 0;
  do
    await qa(r), r = 1e3 / 60;
  while (!i(n, t));
}
function Za(n, t, e) {
  if (e = e || Bi, !n.getProgramParameter(t, Go)) {
    const r = n.getProgramInfoLog(t);
    e(`Error in program linking: ${r}`);
    const o = n.getAttachedShaders(t).map((a) => Ga(n, n.getShaderParameter(a, n.SHADER_TYPE), a, e));
    return `${r}
${o.filter((a) => a).join(`
`)}`;
  }
}
function Ja(n, t, e, i, r) {
  return Ka(n, t, e, i, r);
}
function Tr(n) {
  const t = n.name;
  return t.startsWith("gl_") || t.startsWith("webgl_");
}
const tl = /(\.|\[|]|\w+)/g, el = (n) => n >= "0" && n <= "9";
function il(n, t, e, i) {
  const r = n.split(tl).filter((a) => a !== "");
  let s = 0, o = "";
  for (; ; ) {
    const a = r[s++];
    o += a;
    const l = el(a[0]), u = l ? parseInt(a) : a;
    if (l && (o += r[s++]), s === r.length) {
      e[u] = t;
      break;
    } else {
      const h = r[s++], f = h === "[", d = e[u] || (f ? [] : {});
      e[u] = d, e = d, i[o] = i[o] || function(p) {
        return function(_) {
          Er(p, _);
        };
      }(d), o += h;
    }
  }
}
function nl(n, t) {
  let e = 0;
  function i(a, l, u) {
    const c = l.name.endsWith("[0]"), h = l.type, f = C[h];
    if (!f)
      throw new Error(`unknown type: 0x${h.toString(16)}`);
    let d;
    if (f.bindPoint) {
      const p = e;
      e += l.size, c ? d = f.arraySetter(n, h, p, u, l.size) : d = f.setter(n, h, p, u, l.size);
    } else
      f.arraySetter && c ? d = f.arraySetter(n, u) : d = f.setter(n, u);
    return d.location = u, d;
  }
  const r = {}, s = {}, o = n.getProgramParameter(t, tr);
  for (let a = 0; a < o; ++a) {
    const l = n.getActiveUniform(t, a);
    if (Tr(l))
      continue;
    let u = l.name;
    u.endsWith("[0]") && (u = u.substr(0, u.length - 3));
    const c = n.getUniformLocation(t, l.name);
    if (c) {
      const h = i(t, l, c);
      r[u] = h, il(u, h, s, r);
    }
  }
  return r;
}
function rl(n, t) {
  const e = {}, i = n.getProgramParameter(t, jo);
  for (let r = 0; r < i; ++r) {
    const s = n.getTransformFeedbackVarying(t, r);
    e[s.name] = {
      index: r,
      type: s.type,
      size: s.size
    };
  }
  return e;
}
function sl(n, t) {
  const e = n.getProgramParameter(t, tr), i = [], r = [];
  for (let a = 0; a < e; ++a) {
    r.push(a), i.push({});
    const l = n.getActiveUniform(t, a);
    i[a].name = l.name;
  }
  [
    ["UNIFORM_TYPE", "type"],
    ["UNIFORM_SIZE", "size"],
    // num elements
    ["UNIFORM_BLOCK_INDEX", "blockNdx"],
    ["UNIFORM_OFFSET", "offset"]
  ].forEach(function(a) {
    const l = a[0], u = a[1];
    n.getActiveUniforms(t, r, n[l]).forEach(function(c, h) {
      i[h][u] = c;
    });
  });
  const s = {}, o = n.getProgramParameter(t, Ko);
  for (let a = 0; a < o; ++a) {
    const l = n.getActiveUniformBlockName(t, a), u = {
      index: n.getUniformBlockIndex(t, l),
      usedByVertexShader: n.getActiveUniformBlockParameter(t, a, Qo),
      usedByFragmentShader: n.getActiveUniformBlockParameter(t, a, Zo),
      size: n.getActiveUniformBlockParameter(t, a, Jo),
      uniformIndices: n.getActiveUniformBlockParameter(t, a, ta)
    };
    u.used = u.usedByVertexShader || u.usedByFragmentShader, s[l] = u;
  }
  return {
    blockSpecs: s,
    uniformData: i
  };
}
function Er(n, t) {
  for (const e in t) {
    const i = n[e];
    typeof i == "function" ? i(t[e]) : Er(n[e], t[e]);
  }
}
function Qt(n, ...t) {
  const e = n.uniformSetters || n, i = t.length;
  for (let r = 0; r < i; ++r) {
    const s = t[r];
    if (Array.isArray(s)) {
      const o = s.length;
      for (let a = 0; a < o; ++a)
        Qt(e, s[a]);
    } else
      for (const o in s) {
        const a = e[o];
        a && a(s[o]);
      }
  }
}
function ol(n, t) {
  const e = {}, i = n.getProgramParameter(t, qo);
  for (let r = 0; r < i; ++r) {
    const s = n.getActiveAttrib(t, r);
    if (Tr(s))
      continue;
    const o = n.getAttribLocation(t, s.name), a = W[s.type], l = a.setter(n, o, a);
    l.location = o, e[s.name] = l;
  }
  return e;
}
function al(n, t) {
  for (const e in t) {
    const i = n[e];
    i && i(t[e]);
  }
}
function Sr(n, t, e) {
  e.vertexArrayObject ? n.bindVertexArray(e.vertexArrayObject) : (al(t.attribSetters || t, e.attribs), e.indices && n.bindBuffer(Vo, e.indices));
}
function vn(n, t) {
  const e = nl(n, t), i = ol(n, t), r = {
    program: t,
    uniformSetters: e,
    attribSetters: i
  };
  return Ii(n) && (r.uniformBlockSpec = sl(n, t), r.transformFeedbackInfo = rl(n, t)), r;
}
const ll = /\s|{|}|;/;
function Cr(n, t, e, i, r) {
  const s = Vi(e, i, r), o = [];
  if (t = t.map(function(u) {
    if (!ll.test(u)) {
      const c = Jn(u);
      if (c)
        u = c.text;
      else {
        const h = `no element with id: ${u}`;
        s.errorCallback(h), o.push(h);
      }
    }
    return u;
  }), o.length)
    return Ya(s, "");
  const a = s.callback;
  a && (s.callback = (u, c) => {
    a(u, u ? void 0 : vn(n, c));
  });
  const l = Ja(n, t, s);
  return l ? vn(n, l) : null;
}
const ul = 4, yn = 5123;
function Pr(n, t, e, i, r, s) {
  e = e === void 0 ? ul : e;
  const o = t.indices, a = t.elementType, l = i === void 0 ? t.numElements : i;
  r = r === void 0 ? 0 : r, a || o ? s !== void 0 ? n.drawElementsInstanced(e, l, a === void 0 ? yn : t.elementType, r, s) : n.drawElements(e, l, a === void 0 ? yn : t.elementType, r) : s !== void 0 ? n.drawArraysInstanced(e, r, l, s) : n.drawArrays(e, r, l);
}
function cl(n, t) {
  t = t || 1, t = Math.max(0, t);
  const e = n.clientWidth * t | 0, i = n.clientHeight * t | 0;
  return n.width !== e || n.height !== i ? (n.width = e, n.height = i, !0) : !1;
}
class hl {
  constructor(t) {
    this.gl = t, this.y = 0, this.isActive = this.canScroll, document.onscroll = (e) => this.onScroll(e);
  }
  onScroll(t) {
    this.isActive && (this.y = window.scrollY * this.gl.vp.px);
  }
  resize(t) {
    this.gl = t, this.isActive = this.canScroll, this.y = window.scrollY * this.gl.vp.px;
  }
  get canScroll() {
    return document.documentElement.scrollHeight > window.innerHeight;
  }
}
class fl {
  constructor(t, e = {
    z: -9,
    fov: 0.6,
    near: 1,
    far: 1024
  }) {
    e.fov = _l(35), this.camera = e;
  }
  get(t) {
    return this.camera.mat = pn.translate(
      pn.perspective(
        this.camera.fov,
        t.canvas.width / t.canvas.height,
        this.camera.near,
        this.camera.far
      ),
      [0, 0, this.camera.z]
    ), this.camera;
  }
}
function _l(n) {
  return n * Math.PI / 180;
}
var dl = `attribute vec4 position;

varying vec2 v_xy;

void main() {\r
  gl_Position = position;\r
  v_xy = position.xy;\r
}`, pl = `precision mediump float;

uniform vec2 u_res;\r
uniform float u_time;\r
uniform vec2 u_mouse;\r
varying vec2 v_xy;

uniform vec4 u_params;\r
uniform vec4 u_params2;\r
uniform vec4 u_altparams;

uniform vec3 u_color;\r
uniform vec3 u_color2;

uniform float u_mode;\r
uniform float u_swap;

const float MPI = 6.28318530718;

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ){\r
    return a + b * cos( 6.28318 * ( c * t + d));\r
}

vec3 hueShift( vec3 color, float hueAdjust ){

    const vec3  kRGBToYPrime = vec3 (0.299, 0.587, 0.114);\r
    const vec3  kRGBToI      = vec3 (0.596, -0.275, -0.321);\r
    const vec3  kRGBToQ      = vec3 (0.212, -0.523, 0.311);

    const vec3  kYIQToR     = vec3 (1.0, 0.956, 0.621);\r
    const vec3  kYIQToG     = vec3 (1.0, -0.272, -0.647);\r
    const vec3  kYIQToB     = vec3 (1.0, -1.107, 1.704);

    float   YPrime  = dot (color, kRGBToYPrime);\r
    float   I       = dot (color, kRGBToI);\r
    float   Q       = dot (color, kRGBToQ);\r
    float   hue     = atan (Q, I);\r
    float   chroma  = sqrt (I * I + Q * Q);

    hue += hueAdjust;

    Q = chroma * sin (hue);\r
    I = chroma * cos (hue);

    vec3    yIQ   = vec3 (YPrime, I, Q);

    return vec3( dot (yIQ, kYIQToR), dot (yIQ, kYIQToG), dot (yIQ, kYIQToB) );

}

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\r
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\r
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec3 P){\r
  vec3 Pi0 = floor(P); 
  vec3 Pi1 = Pi0 + vec3(1.0); 
  Pi0 = mod(Pi0, 289.0);\r
  Pi1 = mod(Pi1, 289.0);\r
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r
  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r
  vec4 iz0 = Pi0.zzzz;\r
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);\r
  vec4 ixy0 = permute(ixy + iz0);\r
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;\r
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\r
  gx0 = fract(gx0);\r
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r
  vec4 sz0 = step(gz0, vec4(0.0));\r
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;\r
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\r
  gx1 = fract(gx1);\r
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r
  vec4 sz1 = step(gz1, vec4(0.0));\r
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r
  g000 *= norm0.x;\r
  g010 *= norm0.y;\r
  g100 *= norm0.z;\r
  g110 *= norm0.w;\r
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r
  g001 *= norm1.x;\r
  g011 *= norm1.y;\r
  g101 *= norm1.z;\r
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);\r
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);\r
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \r
  return 2.2 * n_xyz;\r
}

const vec3 col1 = vec3(0.5, 0.5, 0.5);\r
const vec3 col2 = vec3(0.5, 0.5, 0.5);\r
const vec3 col3 = vec3(1.0, 1.0, 1.0);\r
				

void main() {\r
  
 float MULT_X = u_params.x;\r
 float MULT_Y = u_params.y;\r
 float HUE = u_params.z; 
 float BRIGHTNESS = u_params.w;\r
 float MOUSE_BRIGHTNESS = u_params2.x; 
 float SCALE = mix(u_params2.y, u_altparams.x, u_swap);\r
 float NOISE_FACTOR = u_params2.z;\r
 float BW = mix(u_params2.w, u_altparams.y, u_swap);\r
 

  
  vec2 uv = gl_FragCoord.xy / u_res;\r
  vec2 scale_uv = uv;\r
  scale_uv -= vec2(.5);\r
  scale_uv *= SCALE;\r
  \r
  
  float noise = cnoise(vec3(scale_uv, u_time)) * NOISE_FACTOR;\r
  \r
  
  float c_d = distance(scale_uv.x, .5);\r
  c_d = smoothstep(0., .6, c_d);\r
  vec2 m_uv = scale_uv * (c_d + cos(scale_uv.x * MULT_X) * noise - sin(scale_uv.y * MULT_Y) * noise);

  
  scale_uv += vec2(.5);

  
  vec3 current_color = mix(u_color, u_color2, u_swap);\r
  vec3 col = palette(\r
    u_time + cos((m_uv.x) + (m_uv.y)), \r
    col1, col2, col2, current_color\r
  );

  
  float dist = distance(m_uv, u_mouse * SCALE/2.);\r
  \r
  dist = 1. - dist;\r
  dist = smoothstep(.3, 1., dist);\r

  vec3 shift_col = hueShift(col, sin(u_time * MPI));

  col = mix(\r
    col, \r
    shift_col * col + (dist * MOUSE_BRIGHTNESS), \r
    dist\r
  );

 \r
  
  col = hueShift(col, HUE);\r
  col *= BRIGHTNESS;

  float bw_col = (col.r + col.g + col.b) * .3;\r
  col = mix(col, vec3(bw_col), BW);

  

  if (u_mode > .5) {\r
    col = vec3(1.) - col;\r
  }\r

  gl_FragColor.rgb =  col;\r
  gl_FragColor.a = 1.;\r
}`;
const gl = [dl, pl];
function kt(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function kr(n, t) {
  n.prototype = Object.create(t.prototype), n.prototype.constructor = n, n.__proto__ = t;
}
/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var ht = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, ce = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Yi, j, U, mt = 1e8, B = 1 / mt, _i = Math.PI * 2, ml = _i / 4, vl = 0, Mr = Math.sqrt, yl = Math.cos, xl = Math.sin, q = function(t) {
  return typeof t == "string";
}, Y = function(t) {
  return typeof t == "function";
}, Dt = function(t) {
  return typeof t == "number";
}, Gi = function(t) {
  return typeof t > "u";
}, St = function(t) {
  return typeof t == "object";
}, nt = function(t) {
  return t !== !1;
}, Hi = function() {
  return typeof window < "u";
}, Oe = function(t) {
  return Y(t) || q(t);
}, Dr = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Z = Array.isArray, di = /(?:-?\.?\d|\.)+/gi, Or = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, se = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ni = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, zr = /[+-]=-?[.\d]+/, Fr = /[^,'"\[\]\s]+/gi, Al = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, N, bt, pi, Xi, ft = {}, Be = {}, Rr, Ir = function(t) {
  return (Be = he(t, ft)) && at;
}, Wi = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, we = function(t, e) {
  return !e && console.warn(t);
}, Br = function(t, e) {
  return t && (ft[t] = e) && Be && (Be[t] = e) || ft;
}, Te = function() {
  return 0;
}, bl = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, ze = {
  suppressEvents: !0,
  kill: !1
}, wl = {
  suppressEvents: !0
}, qi = {}, Lt = [], gi = {}, Lr, lt = {}, ri = {}, xn = 30, Fe = [], ji = "", Ki = function(t) {
  var e = t[0], i, r;
  if (St(e) || Y(e) || (t = [t]), !(i = (e._gsap || {}).harness)) {
    for (r = Fe.length; r-- && !Fe[r].targetTest(e); )
      ;
    i = Fe[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new ls(t[r], i))) || t.splice(r, 1);
  return t;
}, Zt = function(t) {
  return t._gsap || Ki(vt(t))[0]._gsap;
}, $r = function(t, e, i) {
  return (i = t[e]) && Y(i) ? t[e]() : Gi(i) && t.getAttribute && t.getAttribute(e) || i;
}, rt = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, G = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, X = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, ae = function(t, e) {
  var i = e.charAt(0), r = parseFloat(e.substr(2));
  return t = parseFloat(t), i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r;
}, Tl = function(t, e) {
  for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; )
    ;
  return r < i;
}, Le = function() {
  var t = Lt.length, e = Lt.slice(0), i, r;
  for (gi = {}, Lt.length = 0, i = 0; i < t; i++)
    r = e[i], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, Qi = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, Ur = function(t, e, i, r) {
  Lt.length && !j && Le(), t.render(e, i, r || !!(j && e < 0 && Qi(t))), Lt.length && !j && Le();
}, Nr = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(Fr).length < 2 ? e : q(t) ? t.trim() : t;
}, Vr = function(t) {
  return t;
}, _t = function(t, e) {
  for (var i in e)
    i in t || (t[i] = e[i]);
  return t;
}, El = function(t) {
  return function(e, i) {
    for (var r in i)
      r in e || r === "duration" && t || r === "ease" || (e[r] = i[r]);
  };
}, he = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, An = function n(t, e) {
  for (var i in e)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = St(e[i]) ? n(t[i] || (t[i] = {}), e[i]) : e[i]);
  return t;
}, $e = function(t, e) {
  var i = {}, r;
  for (r in t)
    r in e || (i[r] = t[r]);
  return i;
}, ye = function(t) {
  var e = t.parent || N, i = t.keyframes ? El(Z(t.keyframes)) : _t;
  if (nt(t.inherit))
    for (; e; )
      i(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, Sl = function(t, e) {
  for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; )
    ;
  return i < 0;
}, Yr = function(t, e, i, r, s) {
  i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
  var o = t[r], a;
  if (s)
    for (a = e[s]; o && o[s] > a; )
      o = o._prev;
  return o ? (e._next = o._next, o._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = o, e.parent = e._dp = t, e;
}, Ze = function(t, e, i, r) {
  i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
  var s = e._prev, o = e._next;
  s ? s._next = o : t[i] === e && (t[i] = o), o ? o._prev = s : t[r] === e && (t[r] = s), e._next = e._prev = e.parent = null;
}, Ut = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, Jt = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var i = t; i; )
      i._dirty = 1, i = i.parent;
  return t;
}, Cl = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, mi = function(t, e, i, r) {
  return t._startAt && (j ? t._startAt.revert(ze) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r));
}, Pl = function n(t) {
  return !t || t._ts && n(t.parent);
}, bn = function(t) {
  return t._repeat ? fe(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, fe = function(t, e) {
  var i = Math.floor(t = X(t / e));
  return t && i === t ? i - 1 : i;
}, Ue = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, Je = function(t) {
  return t._end = X(t._start + (t._tDur / Math.abs(t._ts || t._rts || B) || 0));
}, ti = function(t, e) {
  var i = t._dp;
  return i && i.smoothChildTiming && t._ts && (t._start = X(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Je(t), i._dirty || Jt(i, t)), t;
}, Gr = function(t, e) {
  var i;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = Ue(t.rawTime(), e), (!e._dur || De(0, e.totalDuration(), i) - e._tTime > B) && e.render(i, !0)), Jt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (i = t; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    t._zTime = -B;
  }
}, wt = function(t, e, i, r) {
  return e.parent && Ut(e), e._start = X((Dt(i) ? i : i || t !== N ? gt(t, i, e) : t._time) + e._delay), e._end = X(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Yr(t, e, "_first", "_last", t._sort ? "_start" : 0), vi(e) || (t._recent = e), r || Gr(t, e), t._ts < 0 && ti(t, t._tTime), t;
}, Hr = function(t, e) {
  return (ft.ScrollTrigger || Wi("scrollTrigger", e)) && ft.ScrollTrigger.create(e, t);
}, Xr = function(t, e, i, r, s) {
  if (Ji(t, e, s), !t._initted)
    return 1;
  if (!i && t._pt && !j && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Lr !== ut.frame)
    return Lt.push(t), t._lazy = [s, r], 1;
}, kl = function n(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || n(e));
}, vi = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, Ml = function(t, e, i, r) {
  var s = t.ratio, o = e < 0 || !e && (!t._start && kl(t) && !(!t._initted && vi(t)) || (t._ts < 0 || t._dp._ts < 0) && !vi(t)) ? 0 : 1, a = t._rDelay, l = 0, u, c, h;
  if (a && t._repeat && (l = De(0, t._tDur, e), c = fe(l, a), t._yoyo && c & 1 && (o = 1 - o), c !== fe(t._tTime, a) && (s = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== s || j || r || t._zTime === B || !e && t._zTime) {
    if (!t._initted && Xr(t, e, r, i, l))
      return;
    for (h = t._zTime, t._zTime = e || (i ? B : 0), i || (i = e && !h), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = l, u = t._pt; u; )
      u.r(o, u.d), u = u._next;
    e < 0 && mi(t, e, i, !0), t._onUpdate && !i && ct(t, "onUpdate"), l && t._repeat && !i && t.parent && ct(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && Ut(t, 1), !i && !j && (ct(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else
    t._zTime || (t._zTime = e);
}, Dl = function(t, e, i) {
  var r;
  if (i > e)
    for (r = t._first; r && r._start <= i; ) {
      if (r.data === "isPause" && r._start > e)
        return r;
      r = r._next;
    }
  else
    for (r = t._last; r && r._start >= i; ) {
      if (r.data === "isPause" && r._start < e)
        return r;
      r = r._prev;
    }
}, _e = function(t, e, i, r) {
  var s = t._repeat, o = X(e) || 0, a = t._tTime / t._tDur;
  return a && !r && (t._time *= o / t._dur), t._dur = o, t._tDur = s ? s < 0 ? 1e10 : X(o * (s + 1) + t._rDelay * s) : o, a > 0 && !r && ti(t, t._tTime = t._tDur * a), t.parent && Je(t), i || Jt(t.parent, t), t;
}, wn = function(t) {
  return t instanceof J ? Jt(t) : _e(t, t._dur);
}, Ol = {
  _start: 0,
  endTime: Te,
  totalDuration: Te
}, gt = function n(t, e, i) {
  var r = t.labels, s = t._recent || Ol, o = t.duration() >= mt ? s.endTime(!1) : t._dur, a, l, u;
  return q(e) && (isNaN(e) || e in r) ? (l = e.charAt(0), u = e.substr(-1) === "%", a = e.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (u ? (a < 0 ? s : i).totalDuration() / 100 : 1)) : a < 0 ? (e in r || (r[e] = o), r[e]) : (l = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), u && i && (l = l / 100 * (Z(i) ? i[0] : i).totalDuration()), a > 1 ? n(t, e.substr(0, a - 1), i) + l : o + l)) : e == null ? o : +e;
}, xe = function(t, e, i) {
  var r = Dt(e[1]), s = (r ? 2 : 1) + (t < 2 ? 0 : 1), o = e[s], a, l;
  if (r && (o.duration = e[1]), o.parent = i, t) {
    for (a = o, l = i; l && !("immediateRender" in a); )
      a = l.vars.defaults || {}, l = nt(l.vars.inherit) && l.parent;
    o.immediateRender = nt(a.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[s - 1];
  }
  return new H(e[0], o, e[s + 1]);
}, Yt = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, De = function(t, e, i) {
  return i < t ? t : i > e ? e : i;
}, Q = function(t, e) {
  return !q(t) || !(e = Al.exec(t)) ? "" : e[1];
}, zl = function(t, e, i) {
  return Yt(i, function(r) {
    return De(t, e, r);
  });
}, yi = [].slice, Wr = function(t, e) {
  return t && St(t) && "length" in t && (!e && !t.length || t.length - 1 in t && St(t[0])) && !t.nodeType && t !== bt;
}, Fl = function(t, e, i) {
  return i === void 0 && (i = []), t.forEach(function(r) {
    var s;
    return q(r) && !e || Wr(r, 1) ? (s = i).push.apply(s, vt(r)) : i.push(r);
  }) || i;
}, vt = function(t, e, i) {
  return U && !e && U.selector ? U.selector(t) : q(t) && !i && (pi || !de()) ? yi.call((e || Xi).querySelectorAll(t), 0) : Z(t) ? Fl(t, i) : Wr(t) ? yi.call(t, 0) : t ? [t] : [];
}, xi = function(t) {
  return t = vt(t)[0] || we("Invalid scope") || {}, function(e) {
    var i = t.current || t.nativeElement || t;
    return vt(e, i.querySelectorAll ? i : i === t ? we("Invalid scope") || Xi.createElement("div") : t);
  };
}, qr = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, jr = function(t) {
  if (Y(t))
    return t;
  var e = St(t) ? t : {
    each: t
  }, i = te(e.ease), r = e.from || 0, s = parseFloat(e.base) || 0, o = {}, a = r > 0 && r < 1, l = isNaN(r) || a, u = e.axis, c = r, h = r;
  return q(r) ? c = h = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !a && l && (c = r[0], h = r[1]), function(f, d, p) {
    var _ = (p || e).length, m = o[_], v, g, x, A, y, w, T, E, b;
    if (!m) {
      if (b = e.grid === "auto" ? 0 : (e.grid || [1, mt])[1], !b) {
        for (T = -mt; T < (T = p[b++].getBoundingClientRect().left) && b < _; )
          ;
        b < _ && b--;
      }
      for (m = o[_] = [], v = l ? Math.min(b, _) * c - 0.5 : r % b, g = b === mt ? 0 : l ? _ * h / b - 0.5 : r / b | 0, T = 0, E = mt, w = 0; w < _; w++)
        x = w % b - v, A = g - (w / b | 0), m[w] = y = u ? Math.abs(u === "y" ? A : x) : Mr(x * x + A * A), y > T && (T = y), y < E && (E = y);
      r === "random" && qr(m), m.max = T - E, m.min = E, m.v = _ = (parseFloat(e.amount) || parseFloat(e.each) * (b > _ ? _ - 1 : u ? u === "y" ? _ / b : b : Math.max(b, _ / b)) || 0) * (r === "edges" ? -1 : 1), m.b = _ < 0 ? s - _ : s, m.u = Q(e.amount || e.each) || 0, i = i && _ < 0 ? ss(i) : i;
    }
    return _ = (m[f] - m.min) / m.max || 0, X(m.b + (i ? i(_) : _) * m.v) + m.u;
  };
}, Ai = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(i) {
    var r = X(Math.round(parseFloat(i) / t) * t * e);
    return (r - r % 1) / e + (Dt(i) ? 0 : Q(i));
  };
}, Kr = function(t, e) {
  var i = Z(t), r, s;
  return !i && St(t) && (r = i = t.radius || mt, t.values ? (t = vt(t.values), (s = !Dt(t[0])) && (r *= r)) : t = Ai(t.increment)), Yt(e, i ? Y(t) ? function(o) {
    return s = t(o), Math.abs(s - o) <= r ? s : o;
  } : function(o) {
    for (var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), u = mt, c = 0, h = t.length, f, d; h--; )
      s ? (f = t[h].x - a, d = t[h].y - l, f = f * f + d * d) : f = Math.abs(t[h] - a), f < u && (u = f, c = h);
    return c = !r || u <= r ? t[c] : o, s || c === o || Dt(o) ? c : c + Q(o);
  } : Ai(t));
}, Qr = function(t, e, i, r) {
  return Yt(Z(t) ? !e : i === !0 ? !!(i = 0) : !r, function() {
    return Z(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) * i * r) / r;
  });
}, Rl = function() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  return function(r) {
    return e.reduce(function(s, o) {
      return o(s);
    }, r);
  };
}, Il = function(t, e) {
  return function(i) {
    return t(parseFloat(i)) + (e || Q(i));
  };
}, Bl = function(t, e, i) {
  return Jr(t, e, 0, 1, i);
}, Zr = function(t, e, i) {
  return Yt(i, function(r) {
    return t[~~e(r)];
  });
}, Ll = function n(t, e, i) {
  var r = e - t;
  return Z(t) ? Zr(t, n(0, t.length), e) : Yt(i, function(s) {
    return (r + (s - t) % r) % r + t;
  });
}, $l = function n(t, e, i) {
  var r = e - t, s = r * 2;
  return Z(t) ? Zr(t, n(0, t.length - 1), e) : Yt(i, function(o) {
    return o = (s + (o - t) % s) % s || 0, t + (o > r ? s - o : o);
  });
}, Ee = function(t) {
  for (var e = 0, i = "", r, s, o, a; ~(r = t.indexOf("random(", e)); )
    o = t.indexOf(")", r), a = t.charAt(r + 7) === "[", s = t.substr(r + 7, o - r - 7).match(a ? Fr : di), i += t.substr(e, r - e) + Qr(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5), e = o + 1;
  return i + t.substr(e, t.length - e);
}, Jr = function(t, e, i, r, s) {
  var o = e - t, a = r - i;
  return Yt(s, function(l) {
    return i + ((l - t) / o * a || 0);
  });
}, Ul = function n(t, e, i, r) {
  var s = isNaN(t + e) ? 0 : function(d) {
    return (1 - d) * t + d * e;
  };
  if (!s) {
    var o = q(t), a = {}, l, u, c, h, f;
    if (i === !0 && (r = 1) && (i = null), o)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (Z(t) && !Z(e)) {
      for (c = [], h = t.length, f = h - 2, u = 1; u < h; u++)
        c.push(n(t[u - 1], t[u]));
      h--, s = function(p) {
        p *= h;
        var _ = Math.min(f, ~~p);
        return c[_](p - _);
      }, i = e;
    } else
      r || (t = he(Z(t) ? [] : {}, t));
    if (!c) {
      for (l in e)
        Zi.call(a, t, l, "get", e[l]);
      s = function(p) {
        return nn(p, a) || (o ? t.p : t);
      };
    }
  }
  return Yt(i, s);
}, Tn = function(t, e, i) {
  var r = t.labels, s = mt, o, a, l;
  for (o in r)
    a = r[o] - e, a < 0 == !!i && a && s > (a = Math.abs(a)) && (l = o, s = a);
  return l;
}, ct = function(t, e, i) {
  var r = t.vars, s = r[e], o = U, a = t._ctx, l, u, c;
  if (s)
    return l = r[e + "Params"], u = r.callbackScope || t, i && Lt.length && Le(), a && (U = a), c = l ? s.apply(u, l) : s.call(u), U = o, c;
}, me = function(t) {
  return Ut(t), t.scrollTrigger && t.scrollTrigger.kill(!!j), t.progress() < 1 && ct(t, "onInterrupt"), t;
}, oe, ts = [], es = function(t) {
  if (t)
    if (t = !t.name && t.default || t, Hi() || t.headless) {
      var e = t.name, i = Y(t), r = e && !i && t.init ? function() {
        this._props = [];
      } : t, s = {
        init: Te,
        render: nn,
        add: Zi,
        kill: iu,
        modifier: eu,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: en,
        aliases: {},
        register: 0
      };
      if (de(), t !== r) {
        if (lt[e])
          return;
        _t(r, _t($e(t, s), o)), he(r.prototype, he(s, $e(t, o))), lt[r.prop = e] = r, t.targetTest && (Fe.push(r), qi[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      Br(e, r), t.register && t.register(at, r, st);
    } else
      ts.push(t);
}, I = 255, ve = {
  aqua: [0, I, I],
  lime: [0, I, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, I],
  navy: [0, 0, 128],
  white: [I, I, I],
  olive: [128, 128, 0],
  yellow: [I, I, 0],
  orange: [I, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [I, 0, 0],
  pink: [I, 192, 203],
  cyan: [0, I, I],
  transparent: [I, I, I, 0]
}, si = function(t, e, i) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * I + 0.5 | 0;
}, is = function(t, e, i) {
  var r = t ? Dt(t) ? [t >> 16, t >> 8 & I, t & I] : 0 : ve.black, s, o, a, l, u, c, h, f, d, p;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), ve[t])
      r = ve[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (s = t.charAt(1), o = t.charAt(2), a = t.charAt(3), t = "#" + s + s + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & I, r & I, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & I, t & I];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = p = t.match(di), !e)
        l = +r[0] % 360 / 360, u = +r[1] / 100, c = +r[2] / 100, o = c <= 0.5 ? c * (u + 1) : c + u - c * u, s = c * 2 - o, r.length > 3 && (r[3] *= 1), r[0] = si(l + 1 / 3, s, o), r[1] = si(l, s, o), r[2] = si(l - 1 / 3, s, o);
      else if (~t.indexOf("="))
        return r = t.match(Or), i && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(di) || ve.transparent;
    r = r.map(Number);
  }
  return e && !p && (s = r[0] / I, o = r[1] / I, a = r[2] / I, h = Math.max(s, o, a), f = Math.min(s, o, a), c = (h + f) / 2, h === f ? l = u = 0 : (d = h - f, u = c > 0.5 ? d / (2 - h - f) : d / (h + f), l = h === s ? (o - a) / d + (o < a ? 6 : 0) : h === o ? (a - s) / d + 2 : (s - o) / d + 4, l *= 60), r[0] = ~~(l + 0.5), r[1] = ~~(u * 100 + 0.5), r[2] = ~~(c * 100 + 0.5)), i && r.length < 4 && (r[3] = 1), r;
}, ns = function(t) {
  var e = [], i = [], r = -1;
  return t.split($t).forEach(function(s) {
    var o = s.match(se) || [];
    e.push.apply(e, o), i.push(r += o.length + 1);
  }), e.c = i, e;
}, En = function(t, e, i) {
  var r = "", s = (t + r).match($t), o = e ? "hsla(" : "rgba(", a = 0, l, u, c, h;
  if (!s)
    return t;
  if (s = s.map(function(f) {
    return (f = is(f, e, 1)) && o + (e ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")";
  }), i && (c = ns(t), l = i.c, l.join(r) !== c.c.join(r)))
    for (u = t.replace($t, "1").split(se), h = u.length - 1; a < h; a++)
      r += u[a] + (~l.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (c.length ? c : s.length ? s : i).shift());
  if (!u)
    for (u = t.split($t), h = u.length - 1; a < h; a++)
      r += u[a] + s[a];
  return r + u[h];
}, $t = function() {
  var n = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in ve)
    n += "|" + t + "\\b";
  return new RegExp(n + ")", "gi");
}(), Nl = /hsl[a]?\(/, rs = function(t) {
  var e = t.join(" "), i;
  if ($t.lastIndex = 0, $t.test(e))
    return i = Nl.test(e), t[1] = En(t[1], i), t[0] = En(t[0], i, ns(t[1])), !0;
}, Se, ut = function() {
  var n = Date.now, t = 500, e = 33, i = n(), r = i, s = 1e3 / 240, o = s, a = [], l, u, c, h, f, d, p = function _(m) {
    var v = n() - r, g = m === !0, x, A, y, w;
    if ((v > t || v < 0) && (i += v - e), r += v, y = r - i, x = y - o, (x > 0 || g) && (w = ++h.frame, f = y - h.time * 1e3, h.time = y = y / 1e3, o += x + (x >= s ? 4 : s - x), A = 1), g || (l = u(_)), A)
      for (d = 0; d < a.length; d++)
        a[d](y, f, w, m);
  };
  return h = {
    time: 0,
    frame: 0,
    tick: function() {
      p(!0);
    },
    deltaRatio: function(m) {
      return f / (1e3 / (m || 60));
    },
    wake: function() {
      Rr && (!pi && Hi() && (bt = pi = window, Xi = bt.document || {}, ft.gsap = at, (bt.gsapVersions || (bt.gsapVersions = [])).push(at.version), Ir(Be || bt.GreenSockGlobals || !bt.gsap && bt || {}), ts.forEach(es)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && h.sleep(), u = c || function(m) {
        return setTimeout(m, o - h.time * 1e3 + 1 | 0);
      }, Se = 1, p(2));
    },
    sleep: function() {
      (c ? cancelAnimationFrame : clearTimeout)(l), Se = 0, u = Te;
    },
    lagSmoothing: function(m, v) {
      t = m || 1 / 0, e = Math.min(v || 33, t);
    },
    fps: function(m) {
      s = 1e3 / (m || 240), o = h.time * 1e3 + s;
    },
    add: function(m, v, g) {
      var x = v ? function(A, y, w, T) {
        m(A, y, w, T), h.remove(x);
      } : m;
      return h.remove(m), a[g ? "unshift" : "push"](x), de(), x;
    },
    remove: function(m, v) {
      ~(v = a.indexOf(m)) && a.splice(v, 1) && d >= v && d--;
    },
    _listeners: a
  }, h;
}(), de = function() {
  return !Se && ut.wake();
}, D = {}, Vl = /^[\d.\-M][\d.\-,\s]/, Yl = /["']/g, Gl = function(t) {
  for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], s = 1, o = i.length, a, l, u; s < o; s++)
    l = i[s], a = s !== o - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), e[r] = isNaN(u) ? u.replace(Yl, "").trim() : +u, r = l.substr(a + 1).trim();
  return e;
}, Hl = function(t) {
  var e = t.indexOf("(") + 1, i = t.indexOf(")"), r = t.indexOf("(", e);
  return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
}, Xl = function(t) {
  var e = (t + "").split("("), i = D[e[0]];
  return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [Gl(e[1])] : Hl(t).split(",").map(Nr)) : D._CE && Vl.test(t) ? D._CE("", t) : i;
}, ss = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, os = function n(t, e) {
  for (var i = t._first, r; i; )
    i instanceof J ? n(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? n(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
}, te = function(t, e) {
  return t && (Y(t) ? t : D[t] || Xl(t)) || e;
}, ne = function(t, e, i, r) {
  i === void 0 && (i = function(l) {
    return 1 - e(1 - l);
  }), r === void 0 && (r = function(l) {
    return l < 0.5 ? e(l * 2) / 2 : 1 - e((1 - l) * 2) / 2;
  });
  var s = {
    easeIn: e,
    easeOut: i,
    easeInOut: r
  }, o;
  return rt(t, function(a) {
    D[a] = ft[a] = s, D[o = a.toLowerCase()] = i;
    for (var l in s)
      D[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = D[a + "." + l] = s[l];
  }), s;
}, as = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, oi = function n(t, e, i) {
  var r = e >= 1 ? e : 1, s = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), o = s / _i * (Math.asin(1 / r) || 0), a = function(c) {
    return c === 1 ? 1 : r * Math.pow(2, -10 * c) * xl((c - o) * s) + 1;
  }, l = t === "out" ? a : t === "in" ? function(u) {
    return 1 - a(1 - u);
  } : as(a);
  return s = _i / s, l.config = function(u, c) {
    return n(t, u, c);
  }, l;
}, ai = function n(t, e) {
  e === void 0 && (e = 1.70158);
  var i = function(o) {
    return o ? --o * o * ((e + 1) * o + e) + 1 : 0;
  }, r = t === "out" ? i : t === "in" ? function(s) {
    return 1 - i(1 - s);
  } : as(i);
  return r.config = function(s) {
    return n(t, s);
  }, r;
};
rt("Linear,Quad,Cubic,Quart,Quint,Strong", function(n, t) {
  var e = t < 5 ? t + 1 : t;
  ne(n + ",Power" + (e - 1), t ? function(i) {
    return Math.pow(i, e);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, e);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2;
  });
});
D.Linear.easeNone = D.none = D.Linear.easeIn;
ne("Elastic", oi("in"), oi("out"), oi());
(function(n, t) {
  var e = 1 / t, i = 2 * e, r = 2.5 * e, s = function(a) {
    return a < e ? n * a * a : a < i ? n * Math.pow(a - 1.5 / t, 2) + 0.75 : a < r ? n * (a -= 2.25 / t) * a + 0.9375 : n * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  ne("Bounce", function(o) {
    return 1 - s(1 - o);
  }, s);
})(7.5625, 2.75);
ne("Expo", function(n) {
  return Math.pow(2, 10 * (n - 1)) * n + n * n * n * n * n * n * (1 - n);
});
ne("Circ", function(n) {
  return -(Mr(1 - n * n) - 1);
});
ne("Sine", function(n) {
  return n === 1 ? 1 : -yl(n * ml) + 1;
});
ne("Back", ai("in"), ai("out"), ai());
D.SteppedEase = D.steps = ft.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var i = 1 / t, r = t + (e ? 0 : 1), s = e ? 1 : 0, o = 1 - B;
    return function(a) {
      return ((r * De(0, o, a) | 0) + s) * i;
    };
  }
};
ce.ease = D["quad.out"];
rt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(n) {
  return ji += n + "," + n + "Params,";
});
var ls = function(t, e) {
  this.id = vl++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : $r, this.set = e ? e.getSetter : en;
}, Ce = /* @__PURE__ */ function() {
  function n(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, _e(this, +e.duration, 1, 1), this.data = e.data, U && (this._ctx = U, U.data.push(this)), Se || ut.wake();
  }
  var t = n.prototype;
  return t.delay = function(i) {
    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
  }, t.duration = function(i) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(i) {
    return arguments.length ? (this._dirty = 0, _e(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(i, r) {
    if (de(), !arguments.length)
      return this._tTime;
    var s = this._dp;
    if (s && s.smoothChildTiming && this._ts) {
      for (ti(this, i), !s._dp || s.parent || Gr(s, this); s && s.parent; )
        s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && wt(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === B || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), Ur(this, i, r)), this;
  }, t.time = function(i, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + bn(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(i, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(i, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + bn(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(i, r) {
    var s = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * s, r) : this._repeat ? fe(this._tTime, s) + 1 : 1;
  }, t.timeScale = function(i, r) {
    if (!arguments.length)
      return this._rts === -B ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var s = this.parent && this._ts ? Ue(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -B ? 0 : this._rts, this.totalTime(De(-Math.abs(this._delay), this.totalDuration(), s), r !== !1), Je(this), Cl(this);
  }, t.paused = function(i) {
    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (de(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== B && (this._tTime -= B)))), this) : this._ps;
  }, t.startTime = function(i) {
    if (arguments.length) {
      this._start = i;
      var r = this.parent || this._dp;
      return r && (r._sort || !this.parent) && wt(r, this, i - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(i) {
    return this._start + (nt(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(i) {
    var r = this.parent || this._dp;
    return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ue(r.rawTime(i), this) : this._tTime : this._tTime;
  }, t.revert = function(i) {
    i === void 0 && (i = wl);
    var r = j;
    return j = i, Qi(this) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), j = r, this;
  }, t.globalTime = function(i) {
    for (var r = this, s = arguments.length ? i : r.rawTime(); r; )
      s = r._start + s / (Math.abs(r._ts) || 1), r = r._dp;
    return !this.parent && this._sat ? this._sat.globalTime(i) : s;
  }, t.repeat = function(i) {
    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, wn(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(i) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = i, wn(this), r ? this.time(r) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(i) {
    return arguments.length ? (this._yoyo = i, this) : this._yoyo;
  }, t.seek = function(i, r) {
    return this.totalTime(gt(this, i), nt(r));
  }, t.restart = function(i, r) {
    return this.play().totalTime(i ? -this._delay : 0, nt(r)), this._dur || (this._zTime = -B), this;
  }, t.play = function(i, r) {
    return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
  }, t.reverse = function(i, r) {
    return i != null && this.seek(i || this.totalDuration(), r), this.reversed(!0).paused(!1);
  }, t.pause = function(i, r) {
    return i != null && this.seek(i, r), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(i) {
    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -B : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -B, this;
  }, t.isActive = function() {
    var i = this.parent || this._dp, r = this._start, s;
    return !!(!i || this._ts && this._initted && i.isActive() && (s = i.rawTime(!0)) >= r && s < this.endTime(!0) - B);
  }, t.eventCallback = function(i, r, s) {
    var o = this.vars;
    return arguments.length > 1 ? (r ? (o[i] = r, s && (o[i + "Params"] = s), i === "onUpdate" && (this._onUpdate = r)) : delete o[i], this) : o[i];
  }, t.then = function(i) {
    var r = this;
    return new Promise(function(s) {
      var o = Y(i) ? i : Vr, a = function() {
        var u = r.then;
        r.then = null, Y(o) && (o = o(r)) && (o.then || o === r) && (r.then = u), s(o), r.then = u;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? a() : r._prom = a;
    });
  }, t.kill = function() {
    me(this);
  }, n;
}();
_t(Ce.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -B,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var J = /* @__PURE__ */ function(n) {
  kr(t, n);
  function t(i, r) {
    var s;
    return i === void 0 && (i = {}), s = n.call(this, i) || this, s.labels = {}, s.smoothChildTiming = !!i.smoothChildTiming, s.autoRemoveChildren = !!i.autoRemoveChildren, s._sort = nt(i.sortChildren), N && wt(i.parent || N, kt(s), r), i.reversed && s.reverse(), i.paused && s.paused(!0), i.scrollTrigger && Hr(kt(s), i.scrollTrigger), s;
  }
  var e = t.prototype;
  return e.to = function(r, s, o) {
    return xe(0, arguments, this), this;
  }, e.from = function(r, s, o) {
    return xe(1, arguments, this), this;
  }, e.fromTo = function(r, s, o, a) {
    return xe(2, arguments, this), this;
  }, e.set = function(r, s, o) {
    return s.duration = 0, s.parent = this, ye(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new H(r, s, gt(this, o), 1), this;
  }, e.call = function(r, s, o) {
    return wt(this, H.delayedCall(0, r, s), o);
  }, e.staggerTo = function(r, s, o, a, l, u, c) {
    return o.duration = s, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = c, o.parent = this, new H(r, o, gt(this, l)), this;
  }, e.staggerFrom = function(r, s, o, a, l, u, c) {
    return o.runBackwards = 1, ye(o).immediateRender = nt(o.immediateRender), this.staggerTo(r, s, o, a, l, u, c);
  }, e.staggerFromTo = function(r, s, o, a, l, u, c, h) {
    return a.startAt = o, ye(a).immediateRender = nt(a.immediateRender), this.staggerTo(r, s, a, l, u, c, h);
  }, e.render = function(r, s, o) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = r <= 0 ? 0 : X(r), h = this._zTime < 0 != r < 0 && (this._initted || !u), f, d, p, _, m, v, g, x, A, y, w, T;
    if (this !== N && c > l && r >= 0 && (c = l), c !== this._tTime || o || h) {
      if (a !== this._time && u && (c += this._time - a, r += this._time - a), f = c, A = this._start, x = this._ts, v = !x, h && (u || (a = this._zTime), (r || !s) && (this._zTime = r)), this._repeat) {
        if (w = this._yoyo, m = u + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(m * 100 + r, s, o);
        if (f = X(c % m), c === l ? (_ = this._repeat, f = u) : (y = X(c / m), _ = ~~y, _ && _ === y && (f = u, _--), f > u && (f = u)), y = fe(this._tTime, m), !a && this._tTime && y !== _ && this._tTime - y * m - this._dur <= 0 && (y = _), w && _ & 1 && (f = u - f, T = 1), _ !== y && !this._lock) {
          var E = w && y & 1, b = E === (w && _ & 1);
          if (_ < y && (E = !E), a = E ? 0 : c % u ? u : c, this._lock = 1, this.render(a || (T ? 0 : X(_ * m)), s, !u)._lock = 0, this._tTime = c, !s && this.parent && ct(this, "onRepeat"), this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1), a && a !== this._time || v !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, l = this._tDur, b && (this._lock = 2, a = E ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !T && this.invalidate()), this._lock = 0, !this._ts && !v)
            return this;
          os(this, T);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (g = Dl(this, X(a), X(f)), g && (c -= f - (f = g._start))), this._tTime = c, this._time = f, this._act = !x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && c && !s && !y && (ct(this, "onStart"), this._tTime !== c))
        return this;
      if (f >= a && r >= 0)
        for (d = this._first; d; ) {
          if (p = d._next, (d._act || f >= d._start) && d._ts && g !== d) {
            if (d.parent !== this)
              return this.render(r, s, o);
            if (d.render(d._ts > 0 ? (f - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (f - d._start) * d._ts, s, o), f !== this._time || !this._ts && !v) {
              g = 0, p && (c += this._zTime = -B);
              break;
            }
          }
          d = p;
        }
      else {
        d = this._last;
        for (var S = r < 0 ? r : f; d; ) {
          if (p = d._prev, (d._act || S <= d._end) && d._ts && g !== d) {
            if (d.parent !== this)
              return this.render(r, s, o);
            if (d.render(d._ts > 0 ? (S - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (S - d._start) * d._ts, s, o || j && Qi(d)), f !== this._time || !this._ts && !v) {
              g = 0, p && (c += this._zTime = S ? -B : B);
              break;
            }
          }
          d = p;
        }
      }
      if (g && !s && (this.pause(), g.render(f >= a ? 0 : -B)._zTime = f >= a ? 1 : -1, this._ts))
        return this._start = A, Je(this), this.render(r, s, o);
      this._onUpdate && !s && ct(this, "onUpdate", !0), (c === l && this._tTime >= this.totalDuration() || !c && a) && (A === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((r || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && Ut(this, 1), !s && !(r < 0 && !a) && (c || a || !l) && (ct(this, c === l && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(r, s) {
    var o = this;
    if (Dt(s) || (s = gt(this, s, r)), !(r instanceof Ce)) {
      if (Z(r))
        return r.forEach(function(a) {
          return o.add(a, s);
        }), this;
      if (q(r))
        return this.addLabel(r, s);
      if (Y(r))
        r = H.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? wt(this, r, s) : this;
  }, e.getChildren = function(r, s, o, a) {
    r === void 0 && (r = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), a === void 0 && (a = -mt);
    for (var l = [], u = this._first; u; )
      u._start >= a && (u instanceof H ? s && l.push(u) : (o && l.push(u), r && l.push.apply(l, u.getChildren(!0, s, o)))), u = u._next;
    return l;
  }, e.getById = function(r) {
    for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
      if (s[o].vars.id === r)
        return s[o];
  }, e.remove = function(r) {
    return q(r) ? this.removeLabel(r) : Y(r) ? this.killTweensOf(r) : (r.parent === this && Ze(this, r), r === this._recent && (this._recent = this._last), Jt(this));
  }, e.totalTime = function(r, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = X(ut.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), n.prototype.totalTime.call(this, r, s), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(r, s) {
    return this.labels[r] = gt(this, s), this;
  }, e.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, e.addPause = function(r, s, o) {
    var a = H.delayedCall(0, s || Te, o);
    return a.data = "isPause", this._hasPause = 1, wt(this, a, gt(this, r));
  }, e.removePause = function(r) {
    var s = this._first;
    for (r = gt(this, r); s; )
      s._start === r && s.data === "isPause" && Ut(s), s = s._next;
  }, e.killTweensOf = function(r, s, o) {
    for (var a = this.getTweensOf(r, o), l = a.length; l--; )
      Ft !== a[l] && a[l].kill(r, s);
    return this;
  }, e.getTweensOf = function(r, s) {
    for (var o = [], a = vt(r), l = this._first, u = Dt(s), c; l; )
      l instanceof H ? Tl(l._targets, a) && (u ? (!Ft || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && o.push(l) : (c = l.getTweensOf(a, s)).length && o.push.apply(o, c), l = l._next;
    return o;
  }, e.tweenTo = function(r, s) {
    s = s || {};
    var o = this, a = gt(o, r), l = s, u = l.startAt, c = l.onStart, h = l.onStartParams, f = l.immediateRender, d, p = H.to(o, _t({
      ease: s.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: s.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || B,
      onStart: function() {
        if (o.pause(), !d) {
          var m = s.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
          p._dur !== m && _e(p, m, 0, 1).render(p._time, !0, !0), d = 1;
        }
        c && c.apply(p, h || []);
      }
    }, s));
    return f ? p.render(0) : p;
  }, e.tweenFromTo = function(r, s, o) {
    return this.tweenTo(s, _t({
      startAt: {
        time: gt(this, r)
      }
    }, o));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(r) {
    return r === void 0 && (r = this._time), Tn(this, gt(this, r));
  }, e.previousLabel = function(r) {
    return r === void 0 && (r = this._time), Tn(this, gt(this, r), 1);
  }, e.currentLabel = function(r) {
    return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + B);
  }, e.shiftChildren = function(r, s, o) {
    o === void 0 && (o = 0);
    for (var a = this._first, l = this.labels, u; a; )
      a._start >= o && (a._start += r, a._end += r), a = a._next;
    if (s)
      for (u in l)
        l[u] >= o && (l[u] += r);
    return Jt(this);
  }, e.invalidate = function(r) {
    var s = this._first;
    for (this._lock = 0; s; )
      s.invalidate(r), s = s._next;
    return n.prototype.invalidate.call(this, r);
  }, e.clear = function(r) {
    r === void 0 && (r = !0);
    for (var s = this._first, o; s; )
      o = s._next, this.remove(s), s = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Jt(this);
  }, e.totalDuration = function(r) {
    var s = 0, o = this, a = o._last, l = mt, u, c, h;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -r : r));
    if (o._dirty) {
      for (h = o.parent; a; )
        u = a._prev, a._dirty && a.totalDuration(), c = a._start, c > l && o._sort && a._ts && !o._lock ? (o._lock = 1, wt(o, a, c - a._delay, 1)._lock = 0) : l = c, c < 0 && a._ts && (s -= c, (!h && !o._dp || h && h.smoothChildTiming) && (o._start += c / o._ts, o._time -= c, o._tTime -= c), o.shiftChildren(-c, !1, -1 / 0), l = 0), a._end > s && a._ts && (s = a._end), a = u;
      _e(o, o === N && o._time > s ? o._time : s, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, t.updateRoot = function(r) {
    if (N._ts && (Ur(N, Ue(r, N)), Lr = ut.frame), ut.frame >= xn) {
      xn += ht.autoSleep || 120;
      var s = N._first;
      if ((!s || !s._ts) && ht.autoSleep && ut._listeners.length < 2) {
        for (; s && !s._ts; )
          s = s._next;
        s || ut.sleep();
      }
    }
  }, t;
}(Ce);
_t(J.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Wl = function(t, e, i, r, s, o, a) {
  var l = new st(this._pt, t, e, 0, 1, ds, null, s), u = 0, c = 0, h, f, d, p, _, m, v, g;
  for (l.b = i, l.e = r, i += "", r += "", (v = ~r.indexOf("random(")) && (r = Ee(r)), o && (g = [i, r], o(g, t, e), i = g[0], r = g[1]), f = i.match(ni) || []; h = ni.exec(r); )
    p = h[0], _ = r.substring(u, h.index), d ? d = (d + 1) % 5 : _.substr(-5) === "rgba(" && (d = 1), p !== f[c++] && (m = parseFloat(f[c - 1]) || 0, l._pt = {
      _next: l._pt,
      p: _ || c === 1 ? _ : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: p.charAt(1) === "=" ? ae(m, p) - m : parseFloat(p) - m,
      m: d && d < 4 ? Math.round : 0
    }, u = ni.lastIndex);
  return l.c = u < r.length ? r.substring(u, r.length) : "", l.fp = a, (zr.test(r) || v) && (l.e = 0), this._pt = l, l;
}, Zi = function(t, e, i, r, s, o, a, l, u, c) {
  Y(r) && (r = r(s || 0, t, o));
  var h = t[e], f = i !== "get" ? i : Y(h) ? u ? t[e.indexOf("set") || !Y(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : h, d = Y(h) ? u ? Zl : fs : tn, p;
  if (q(r) && (~r.indexOf("random(") && (r = Ee(r)), r.charAt(1) === "=" && (p = ae(f, r) + (Q(f) || 0), (p || p === 0) && (r = p))), !c || f !== r || bi)
    return !isNaN(f * r) && r !== "" ? (p = new st(this._pt, t, e, +f || 0, r - (f || 0), typeof h == "boolean" ? tu : _s, 0, d), u && (p.fp = u), a && p.modifier(a, this, t), this._pt = p) : (!h && !(e in t) && Wi(e, r), Wl.call(this, t, e, f, r, d, l || ht.stringFilter, u));
}, ql = function(t, e, i, r, s) {
  if (Y(t) && (t = Ae(t, s, e, i, r)), !St(t) || t.style && t.nodeType || Z(t) || Dr(t))
    return q(t) ? Ae(t, s, e, i, r) : t;
  var o = {}, a;
  for (a in t)
    o[a] = Ae(t[a], s, e, i, r);
  return o;
}, us = function(t, e, i, r, s, o) {
  var a, l, u, c;
  if (lt[t] && (a = new lt[t]()).init(s, a.rawVars ? e[t] : ql(e[t], r, s, o, i), i, r, o) !== !1 && (i._pt = l = new st(i._pt, s, t, 0, 1, a.render, a, 0, a.priority), i !== oe))
    for (u = i._ptLookup[i._targets.indexOf(s)], c = a._props.length; c--; )
      u[a._props[c]] = l;
  return a;
}, Ft, bi, Ji = function n(t, e, i) {
  var r = t.vars, s = r.ease, o = r.startAt, a = r.immediateRender, l = r.lazy, u = r.onUpdate, c = r.runBackwards, h = r.yoyoEase, f = r.keyframes, d = r.autoRevert, p = t._dur, _ = t._startAt, m = t._targets, v = t.parent, g = v && v.data === "nested" ? v.vars.targets : m, x = t._overwrite === "auto" && !Yi, A = t.timeline, y, w, T, E, b, S, M, P, k, R, z, O, F;
  if (A && (!f || !s) && (s = "none"), t._ease = te(s, ce.ease), t._yEase = h ? ss(te(h === !0 ? s : h, ce.ease)) : 0, h && t._yoyo && !t._repeat && (h = t._yEase, t._yEase = t._ease, t._ease = h), t._from = !A && !!r.runBackwards, !A || f && !r.stagger) {
    if (P = m[0] ? Zt(m[0]).harness : 0, O = P && r[P.prop], y = $e(r, qi), _ && (_._zTime < 0 && _.progress(1), e < 0 && c && a && !d ? _.render(-1, !0) : _.revert(c && p ? ze : bl), _._lazy = 0), o) {
      if (Ut(t._startAt = H.set(m, _t({
        data: "isStart",
        overwrite: !1,
        parent: v,
        immediateRender: !0,
        lazy: !_ && nt(l),
        startAt: null,
        delay: 0,
        onUpdate: u && function() {
          return ct(t, "onUpdate");
        },
        stagger: 0
      }, o))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (j || !a && !d) && t._startAt.revert(ze), a && p && e <= 0 && i <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (c && p && !_) {
      if (e && (a = !1), T = _t({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !_ && nt(l),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: v
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, y), O && (T[P.prop] = O), Ut(t._startAt = H.set(m, T)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (j ? t._startAt.revert(ze) : t._startAt.render(-1, !0)), t._zTime = e, !a)
        n(t._startAt, B, B);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, l = p && nt(l) || l && !p, w = 0; w < m.length; w++) {
      if (b = m[w], M = b._gsap || Ki(m)[w]._gsap, t._ptLookup[w] = R = {}, gi[M.id] && Lt.length && Le(), z = g === m ? w : g.indexOf(b), P && (k = new P()).init(b, O || y, t, z, g) !== !1 && (t._pt = E = new st(t._pt, b, k.name, 0, 1, k.render, k, 0, k.priority), k._props.forEach(function(L) {
        R[L] = E;
      }), k.priority && (S = 1)), !P || O)
        for (T in y)
          lt[T] && (k = us(T, y, t, z, b, g)) ? k.priority && (S = 1) : R[T] = E = Zi.call(t, b, T, "get", y[T], z, g, 0, r.stringFilter);
      t._op && t._op[w] && t.kill(b, t._op[w]), x && t._pt && (Ft = t, N.killTweensOf(b, R, t.globalTime(e)), F = !t.parent, Ft = 0), t._pt && l && (gi[M.id] = 1);
    }
    S && ps(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = u, t._initted = (!t._op || t._pt) && !F, f && e <= 0 && A.render(mt, !0, !0);
}, jl = function(t, e, i, r, s, o, a, l) {
  var u = (t._pt && t._ptCache || (t._ptCache = {}))[e], c, h, f, d;
  if (!u)
    for (u = t._ptCache[e] = [], f = t._ptLookup, d = t._targets.length; d--; ) {
      if (c = f[d][e], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== e && c.fp !== e; )
          c = c._next;
      if (!c)
        return bi = 1, t.vars[e] = "+=0", Ji(t, a), bi = 0, l ? we(e + " not eligible for reset") : 1;
      u.push(c);
    }
  for (d = u.length; d--; )
    h = u[d], c = h._pt || h, c.s = (r || r === 0) && !s ? r : c.s + (r || 0) + o * c.c, c.c = i - c.s, h.e && (h.e = G(i) + Q(h.e)), h.b && (h.b = c.s + Q(h.b));
}, Kl = function(t, e) {
  var i = t[0] ? Zt(t[0]).harness : 0, r = i && i.aliases, s, o, a, l;
  if (!r)
    return e;
  s = he({}, e);
  for (o in r)
    if (o in s)
      for (l = r[o].split(","), a = l.length; a--; )
        s[l[a]] = s[o];
  return s;
}, Ql = function(t, e, i, r) {
  var s = e.ease || r || "power1.inOut", o, a;
  if (Z(e))
    a = i[t] || (i[t] = []), e.forEach(function(l, u) {
      return a.push({
        t: u / (e.length - 1) * 100,
        v: l,
        e: s
      });
    });
  else
    for (o in e)
      a = i[o] || (i[o] = []), o === "ease" || a.push({
        t: parseFloat(t),
        v: e[o],
        e: s
      });
}, Ae = function(t, e, i, r, s) {
  return Y(t) ? t.call(e, i, r, s) : q(t) && ~t.indexOf("random(") ? Ee(t) : t;
}, cs = ji + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", hs = {};
rt(cs + ",id,stagger,delay,duration,paused,scrollTrigger", function(n) {
  return hs[n] = 1;
});
var H = /* @__PURE__ */ function(n) {
  kr(t, n);
  function t(i, r, s, o) {
    var a;
    typeof r == "number" && (s.duration = r, r = s, s = null), a = n.call(this, o ? r : ye(r)) || this;
    var l = a.vars, u = l.duration, c = l.delay, h = l.immediateRender, f = l.stagger, d = l.overwrite, p = l.keyframes, _ = l.defaults, m = l.scrollTrigger, v = l.yoyoEase, g = r.parent || N, x = (Z(i) || Dr(i) ? Dt(i[0]) : "length" in r) ? [i] : vt(i), A, y, w, T, E, b, S, M;
    if (a._targets = x.length ? Ki(x) : we("GSAP target " + i + " not found. https://gsap.com", !ht.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, p || f || Oe(u) || Oe(c)) {
      if (r = a.vars, A = a.timeline = new J({
        data: "nested",
        defaults: _ || {},
        targets: g && g.data === "nested" ? g.vars.targets : x
      }), A.kill(), A.parent = A._dp = kt(a), A._start = 0, f || Oe(u) || Oe(c)) {
        if (T = x.length, S = f && jr(f), St(f))
          for (E in f)
            ~cs.indexOf(E) && (M || (M = {}), M[E] = f[E]);
        for (y = 0; y < T; y++)
          w = $e(r, hs), w.stagger = 0, v && (w.yoyoEase = v), M && he(w, M), b = x[y], w.duration = +Ae(u, kt(a), y, b, x), w.delay = (+Ae(c, kt(a), y, b, x) || 0) - a._delay, !f && T === 1 && w.delay && (a._delay = c = w.delay, a._start += c, w.delay = 0), A.to(b, w, S ? S(y, b, x) : 0), A._ease = D.none;
        A.duration() ? u = c = 0 : a.timeline = 0;
      } else if (p) {
        ye(_t(A.vars.defaults, {
          ease: "none"
        })), A._ease = te(p.ease || r.ease || "none");
        var P = 0, k, R, z;
        if (Z(p))
          p.forEach(function(O) {
            return A.to(x, O, ">");
          }), A.duration();
        else {
          w = {};
          for (E in p)
            E === "ease" || E === "easeEach" || Ql(E, p[E], w, p.easeEach);
          for (E in w)
            for (k = w[E].sort(function(O, F) {
              return O.t - F.t;
            }), P = 0, y = 0; y < k.length; y++)
              R = k[y], z = {
                ease: R.e,
                duration: (R.t - (y ? k[y - 1].t : 0)) / 100 * u
              }, z[E] = R.v, A.to(x, z, P), P += z.duration;
          A.duration() < u && A.to({}, {
            duration: u - A.duration()
          });
        }
      }
      u || a.duration(u = A.duration());
    } else
      a.timeline = 0;
    return d === !0 && !Yi && (Ft = kt(a), N.killTweensOf(x), Ft = 0), wt(g, kt(a), s), r.reversed && a.reverse(), r.paused && a.paused(!0), (h || !u && !p && a._start === X(g._time) && nt(h) && Pl(kt(a)) && g.data !== "nested") && (a._tTime = -B, a.render(Math.max(0, -c) || 0)), m && Hr(kt(a), m), a;
  }
  var e = t.prototype;
  return e.render = function(r, s, o) {
    var a = this._time, l = this._tDur, u = this._dur, c = r < 0, h = r > l - B && !c ? l : r < B ? 0 : r, f, d, p, _, m, v, g, x, A;
    if (!u)
      Ml(this, r, s, o);
    else if (h !== this._tTime || !r || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
      if (f = h, x = this.timeline, this._repeat) {
        if (_ = u + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(_ * 100 + r, s, o);
        if (f = X(h % _), h === l ? (p = this._repeat, f = u) : (m = X(h / _), p = ~~m, p && p === m ? (f = u, p--) : f > u && (f = u)), v = this._yoyo && p & 1, v && (A = this._yEase, f = u - f), m = fe(this._tTime, _), f === a && !o && this._initted && p === m)
          return this._tTime = h, this;
        p !== m && (x && this._yEase && os(x, v), this.vars.repeatRefresh && !v && !this._lock && f !== _ && this._initted && (this._lock = o = 1, this.render(X(_ * p), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Xr(this, c ? r : f, o, s, h))
          return this._tTime = 0, this;
        if (a !== this._time && !(o && this.vars.repeatRefresh && p !== m))
          return this;
        if (u !== this._dur)
          return this.render(r, s, o);
      }
      if (this._tTime = h, this._time = f, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = g = (A || this._ease)(f / u), this._from && (this.ratio = g = 1 - g), !a && h && !s && !m && (ct(this, "onStart"), this._tTime !== h))
        return this;
      for (d = this._pt; d; )
        d.r(g, d.d), d = d._next;
      x && x.render(r < 0 ? r : x._dur * x._ease(f / this._dur), s, o) || this._startAt && (this._zTime = r), this._onUpdate && !s && (c && mi(this, r, s, o), ct(this, "onUpdate")), this._repeat && p !== m && this.vars.onRepeat && !s && this.parent && ct(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (c && !this._onUpdate && mi(this, r, !0, !0), (r || !u) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && Ut(this, 1), !s && !(c && !a) && (h || a || v) && (ct(this, h === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), n.prototype.invalidate.call(this, r);
  }, e.resetTo = function(r, s, o, a, l) {
    Se || ut.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || Ji(this, u), c = this._ease(u / this._dur), jl(this, r, s, o, a, c, u, l) ? this.resetTo(r, s, o, a, 1) : (ti(this, 0), this.parent || Yr(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(r, s) {
    if (s === void 0 && (s = "all"), !r && (!s || s === "all"))
      return this._lazy = this._pt = 0, this.parent ? me(this) : this.scrollTrigger && this.scrollTrigger.kill(!!j), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, s, Ft && Ft.vars.overwrite !== !0)._first || me(this), this.parent && o !== this.timeline.totalDuration() && _e(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, l = r ? vt(r) : a, u = this._ptLookup, c = this._pt, h, f, d, p, _, m, v;
    if ((!s || s === "all") && Sl(a, l))
      return s === "all" && (this._pt = 0), me(this);
    for (h = this._op = this._op || [], s !== "all" && (q(s) && (_ = {}, rt(s, function(g) {
      return _[g] = 1;
    }), s = _), s = Kl(a, s)), v = a.length; v--; )
      if (~l.indexOf(a[v])) {
        f = u[v], s === "all" ? (h[v] = s, p = f, d = {}) : (d = h[v] = h[v] || {}, p = s);
        for (_ in p)
          m = f && f[_], m && ((!("kill" in m.d) || m.d.kill(_) === !0) && Ze(this, m, "_pt"), delete f[_]), d !== "all" && (d[_] = 1);
      }
    return this._initted && !this._pt && c && me(this), this;
  }, t.to = function(r, s) {
    return new t(r, s, arguments[2]);
  }, t.from = function(r, s) {
    return xe(1, arguments);
  }, t.delayedCall = function(r, s, o, a) {
    return new t(s, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: r,
      onComplete: s,
      onReverseComplete: s,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: a
    });
  }, t.fromTo = function(r, s, o) {
    return xe(2, arguments);
  }, t.set = function(r, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new t(r, s);
  }, t.killTweensOf = function(r, s, o) {
    return N.killTweensOf(r, s, o);
  }, t;
}(Ce);
_t(H.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
rt("staggerTo,staggerFrom,staggerFromTo", function(n) {
  H[n] = function() {
    var t = new J(), e = yi.call(arguments, 0);
    return e.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), t[n].apply(t, e);
  };
});
var tn = function(t, e, i) {
  return t[e] = i;
}, fs = function(t, e, i) {
  return t[e](i);
}, Zl = function(t, e, i, r) {
  return t[e](r.fp, i);
}, Jl = function(t, e, i) {
  return t.setAttribute(e, i);
}, en = function(t, e) {
  return Y(t[e]) ? fs : Gi(t[e]) && t.setAttribute ? Jl : tn;
}, _s = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, tu = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, ds = function(t, e) {
  var i = e._pt, r = "";
  if (!t && e.b)
    r = e.b;
  else if (t === 1 && e.e)
    r = e.e;
  else {
    for (; i; )
      r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r, i = i._next;
    r += e.c;
  }
  e.set(e.t, e.p, r, e);
}, nn = function(t, e) {
  for (var i = e._pt; i; )
    i.r(t, i.d), i = i._next;
}, eu = function(t, e, i, r) {
  for (var s = this._pt, o; s; )
    o = s._next, s.p === r && s.modifier(t, e, i), s = o;
}, iu = function(t) {
  for (var e = this._pt, i, r; e; )
    r = e._next, e.p === t && !e.op || e.op === t ? Ze(this, e, "_pt") : e.dep || (i = 1), e = r;
  return !i;
}, nu = function(t, e, i, r) {
  r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
}, ps = function(t) {
  for (var e = t._pt, i, r, s, o; e; ) {
    for (i = e._next, r = s; r && r.pr > e.pr; )
      r = r._next;
    (e._prev = r ? r._prev : o) ? e._prev._next = e : s = e, (e._next = r) ? r._prev = e : o = e, e = i;
  }
  t._pt = s;
}, st = /* @__PURE__ */ function() {
  function n(e, i, r, s, o, a, l, u, c) {
    this.t = i, this.s = s, this.c = o, this.p = r, this.r = a || _s, this.d = l || this, this.set = u || tn, this.pr = c || 0, this._next = e, e && (e._prev = this);
  }
  var t = n.prototype;
  return t.modifier = function(i, r, s) {
    this.mSet = this.mSet || this.set, this.set = nu, this.m = i, this.mt = s, this.tween = r;
  }, n;
}();
rt(ji + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(n) {
  return qi[n] = 1;
});
ft.TweenMax = ft.TweenLite = H;
ft.TimelineLite = ft.TimelineMax = J;
N = new J({
  sortChildren: !1,
  defaults: ce,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
ht.stringFilter = rs;
var ee = [], Re = {}, ru = [], Sn = 0, su = 0, li = function(t) {
  return (Re[t] || ru).map(function(e) {
    return e();
  });
}, wi = function() {
  var t = Date.now(), e = [];
  t - Sn > 2 && (li("matchMediaInit"), ee.forEach(function(i) {
    var r = i.queries, s = i.conditions, o, a, l, u;
    for (a in r)
      o = bt.matchMedia(r[a]).matches, o && (l = 1), o !== s[a] && (s[a] = o, u = 1);
    u && (i.revert(), l && e.push(i));
  }), li("matchMediaRevert"), e.forEach(function(i) {
    return i.onMatch(i, function(r) {
      return i.add(null, r);
    });
  }), Sn = t, li("matchMedia"));
}, gs = /* @__PURE__ */ function() {
  function n(e, i) {
    this.selector = i && xi(i), this.data = [], this._r = [], this.isReverted = !1, this.id = su++, e && this.add(e);
  }
  var t = n.prototype;
  return t.add = function(i, r, s) {
    Y(i) && (s = r, r = i, i = Y);
    var o = this, a = function() {
      var u = U, c = o.selector, h;
      return u && u !== o && u.data.push(o), s && (o.selector = xi(s)), U = o, h = r.apply(o, arguments), Y(h) && o._r.push(h), U = u, o.selector = c, o.isReverted = !1, h;
    };
    return o.last = a, i === Y ? a(o, function(l) {
      return o.add(null, l);
    }) : i ? o[i] = a : a;
  }, t.ignore = function(i) {
    var r = U;
    U = null, i(this), U = r;
  }, t.getTweens = function() {
    var i = [];
    return this.data.forEach(function(r) {
      return r instanceof n ? i.push.apply(i, r.getTweens()) : r instanceof H && !(r.parent && r.parent.data === "nested") && i.push(r);
    }), i;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(i, r) {
    var s = this;
    if (i ? function() {
      for (var a = s.getTweens(), l = s.data.length, u; l--; )
        u = s.data[l], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(c) {
          return a.splice(a.indexOf(c), 1);
        }));
      for (a.map(function(c) {
        return {
          g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
          t: c
        };
      }).sort(function(c, h) {
        return h.g - c.g || -1 / 0;
      }).forEach(function(c) {
        return c.t.revert(i);
      }), l = s.data.length; l--; )
        u = s.data[l], u instanceof J ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof H) && u.revert && u.revert(i);
      s._r.forEach(function(c) {
        return c(i, s);
      }), s.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), r)
      for (var o = ee.length; o--; )
        ee[o].id === this.id && ee.splice(o, 1);
  }, t.revert = function(i) {
    this.kill(i || {});
  }, n;
}(), ou = /* @__PURE__ */ function() {
  function n(e) {
    this.contexts = [], this.scope = e, U && U.data.push(this);
  }
  var t = n.prototype;
  return t.add = function(i, r, s) {
    St(i) || (i = {
      matches: i
    });
    var o = new gs(0, s || this.scope), a = o.conditions = {}, l, u, c;
    U && !o.selector && (o.selector = U.selector), this.contexts.push(o), r = o.add("onMatch", r), o.queries = i;
    for (u in i)
      u === "all" ? c = 1 : (l = bt.matchMedia(i[u]), l && (ee.indexOf(o) < 0 && ee.push(o), (a[u] = l.matches) && (c = 1), l.addListener ? l.addListener(wi) : l.addEventListener("change", wi)));
    return c && r(o, function(h) {
      return o.add(null, h);
    }), this;
  }, t.revert = function(i) {
    this.kill(i || {});
  }, t.kill = function(i) {
    this.contexts.forEach(function(r) {
      return r.kill(i, !0);
    });
  }, n;
}(), Ne = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    e.forEach(function(r) {
      return es(r);
    });
  },
  timeline: function(t) {
    return new J(t);
  },
  getTweensOf: function(t, e) {
    return N.getTweensOf(t, e);
  },
  getProperty: function(t, e, i, r) {
    q(t) && (t = vt(t)[0]);
    var s = Zt(t || {}).get, o = i ? Vr : Nr;
    return i === "native" && (i = ""), t && (e ? o((lt[e] && lt[e].get || s)(t, e, i, r)) : function(a, l, u) {
      return o((lt[a] && lt[a].get || s)(t, a, l, u));
    });
  },
  quickSetter: function(t, e, i) {
    if (t = vt(t), t.length > 1) {
      var r = t.map(function(c) {
        return at.quickSetter(c, e, i);
      }), s = r.length;
      return function(c) {
        for (var h = s; h--; )
          r[h](c);
      };
    }
    t = t[0] || {};
    var o = lt[e], a = Zt(t), l = a.harness && (a.harness.aliases || {})[e] || e, u = o ? function(c) {
      var h = new o();
      oe._pt = 0, h.init(t, i ? c + i : c, oe, 0, [t]), h.render(1, h), oe._pt && nn(1, oe);
    } : a.set(t, l);
    return o ? u : function(c) {
      return u(t, l, i ? c + i : c, a, 1);
    };
  },
  quickTo: function(t, e, i) {
    var r, s = at.to(t, _t((r = {}, r[e] = "+=0.1", r.paused = !0, r.stagger = 0, r), i || {})), o = function(l, u, c) {
      return s.resetTo(e, l, u, c);
    };
    return o.tween = s, o;
  },
  isTweening: function(t) {
    return N.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = te(t.ease, ce.ease)), An(ce, t || {});
  },
  config: function(t) {
    return An(ht, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, i = t.effect, r = t.plugins, s = t.defaults, o = t.extendTimeline;
    (r || "").split(",").forEach(function(a) {
      return a && !lt[a] && !ft[a] && we(e + " effect requires " + a + " plugin.");
    }), ri[e] = function(a, l, u) {
      return i(vt(a), _t(l || {}, s), u);
    }, o && (J.prototype[e] = function(a, l, u) {
      return this.add(ri[e](a, St(l) ? l : (u = l) && {}, this), u);
    });
  },
  registerEase: function(t, e) {
    D[t] = te(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? te(t, e) : D;
  },
  getById: function(t) {
    return N.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var i = new J(t), r, s;
    for (i.smoothChildTiming = nt(t.smoothChildTiming), N.remove(i), i._dp = 0, i._time = i._tTime = N._time, r = N._first; r; )
      s = r._next, (e || !(!r._dur && r instanceof H && r.vars.onComplete === r._targets[0])) && wt(i, r, r._start - r._delay), r = s;
    return wt(N, i, 0), i;
  },
  context: function(t, e) {
    return t ? new gs(t, e) : U;
  },
  matchMedia: function(t) {
    return new ou(t);
  },
  matchMediaRefresh: function() {
    return ee.forEach(function(t) {
      var e = t.conditions, i, r;
      for (r in e)
        e[r] && (e[r] = !1, i = 1);
      i && t.revert();
    }) || wi();
  },
  addEventListener: function(t, e) {
    var i = Re[t] || (Re[t] = []);
    ~i.indexOf(e) || i.push(e);
  },
  removeEventListener: function(t, e) {
    var i = Re[t], r = i && i.indexOf(e);
    r >= 0 && i.splice(r, 1);
  },
  utils: {
    wrap: Ll,
    wrapYoyo: $l,
    distribute: jr,
    random: Qr,
    snap: Kr,
    normalize: Bl,
    getUnit: Q,
    clamp: zl,
    splitColor: is,
    toArray: vt,
    selector: xi,
    mapRange: Jr,
    pipe: Rl,
    unitize: Il,
    interpolate: Ul,
    shuffle: qr
  },
  install: Ir,
  effects: ri,
  ticker: ut,
  updateRoot: J.updateRoot,
  plugins: lt,
  globalTimeline: N,
  core: {
    PropTween: st,
    globals: Br,
    Tween: H,
    Timeline: J,
    Animation: Ce,
    getCache: Zt,
    _removeLinkedListItem: Ze,
    reverting: function() {
      return j;
    },
    context: function(t) {
      return t && U && (U.data.push(t), t._ctx = U), U;
    },
    suppressOverwrites: function(t) {
      return Yi = t;
    }
  }
};
rt("to,from,fromTo,delayedCall,set,killTweensOf", function(n) {
  return Ne[n] = H[n];
});
ut.add(J.updateRoot);
oe = Ne.to({}, {
  duration: 0
});
var au = function(t, e) {
  for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
    i = i._next;
  return i;
}, lu = function(t, e) {
  var i = t._targets, r, s, o;
  for (r in e)
    for (s = i.length; s--; )
      o = t._ptLookup[s][r], o && (o = o.d) && (o._pt && (o = au(o, r)), o && o.modifier && o.modifier(e[r], t, i[s], r));
}, ui = function(t, e) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(r, s, o) {
      o._onInit = function(a) {
        var l, u;
        if (q(s) && (l = {}, rt(s, function(c) {
          return l[c] = 1;
        }), s = l), e) {
          l = {};
          for (u in s)
            l[u] = e(s[u]);
          s = l;
        }
        lu(a, s);
      };
    }
  };
}, at = Ne.registerPlugin({
  name: "attr",
  init: function(t, e, i, r, s) {
    var o, a, l;
    this.tween = i;
    for (o in e)
      l = t.getAttribute(o) || "", a = this.add(t, "setAttribute", (l || 0) + "", e[o], r, s, 0, 0, o), a.op = o, a.b = l, this._props.push(o);
  },
  render: function(t, e) {
    for (var i = e._pt; i; )
      j ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, e) {
    for (var i = e.length; i--; )
      this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
  }
}, ui("roundProps", Ai), ui("modifiers"), ui("snap", Kr)) || Ne;
H.version = J.version = at.version = "3.13.0";
Rr = 1;
Hi() && de();
D.Power0;
D.Power1;
D.Power2;
D.Power3;
D.Power4;
D.Linear;
D.Quad;
D.Cubic;
D.Quart;
D.Quint;
D.Strong;
D.Elastic;
D.Back;
D.SteppedEase;
D.Bounce;
D.Sine;
D.Expo;
D.Circ;
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Cn, Rt, le, rn, jt, Pn, sn, uu = function() {
  return typeof window < "u";
}, Ot = {}, qt = 180 / Math.PI, ue = Math.PI / 180, re = Math.atan2, kn = 1e8, on = /([A-Z])/g, cu = /(left|right|width|margin|padding|x)/i, hu = /[\s,\(]\S/, Tt = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Ti = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, fu = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, _u = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, du = function(t, e) {
  var i = e.s + e.c * t;
  e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
}, ms = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, vs = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, pu = function(t, e, i) {
  return t.style[e] = i;
}, gu = function(t, e, i) {
  return t.style.setProperty(e, i);
}, mu = function(t, e, i) {
  return t._gsap[e] = i;
}, vu = function(t, e, i) {
  return t._gsap.scaleX = t._gsap.scaleY = i;
}, yu = function(t, e, i, r, s) {
  var o = t._gsap;
  o.scaleX = o.scaleY = i, o.renderTransform(s, o);
}, xu = function(t, e, i, r, s) {
  var o = t._gsap;
  o[e] = i, o.renderTransform(s, o);
}, V = "transform", ot = V + "Origin", Au = function n(t, e) {
  var i = this, r = this.target, s = r.style, o = r._gsap;
  if (t in Ot && s) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = Tt[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
        return i.tfm[a] = Mt(r, a);
      }) : this.tfm[t] = o.x ? o[t] : Mt(r, t), t === ot && (this.tfm.zOrigin = o.zOrigin);
    else
      return Tt.transform.split(",").forEach(function(a) {
        return n.call(i, a, e);
      });
    if (this.props.indexOf(V) >= 0)
      return;
    o.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(ot, e, "")), t = V;
  }
  (s || e) && this.props.push(t, e, s[t]);
}, ys = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, bu = function() {
  var t = this.props, e = this.target, i = e.style, r = e._gsap, s, o;
  for (s = 0; s < t.length; s += 3)
    t[s + 1] ? t[s + 1] === 2 ? e[t[s]](t[s + 2]) : e[t[s]] = t[s + 2] : t[s + 2] ? i[t[s]] = t[s + 2] : i.removeProperty(t[s].substr(0, 2) === "--" ? t[s] : t[s].replace(on, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      r[o] = this.tfm[o];
    r.svg && (r.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), s = sn(), (!s || !s.isStart) && !i[V] && (ys(i), r.zOrigin && i[ot] && (i[ot] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
  }
}, xs = function(t, e) {
  var i = {
    target: t,
    props: [],
    revert: bu,
    save: Au
  };
  return t._gsap || at.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(r) {
    return i.save(r);
  }), i;
}, As, Ei = function(t, e) {
  var i = Rt.createElementNS ? Rt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Rt.createElement(t);
  return i && i.style ? i : Rt.createElement(t);
}, yt = function n(t, e, i) {
  var r = getComputedStyle(t);
  return r[e] || r.getPropertyValue(e.replace(on, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && n(t, pe(e) || e, 1) || "";
}, Mn = "O,Moz,ms,Ms,Webkit".split(","), pe = function(t, e, i) {
  var r = e || jt, s = r.style, o = 5;
  if (t in s && !i)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(Mn[o] + t in s); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Mn[o] : "") + t;
}, Si = function() {
  uu() && window.document && (Cn = window, Rt = Cn.document, le = Rt.documentElement, jt = Ei("div") || {
    style: {}
  }, Ei("div"), V = pe(V), ot = V + "Origin", jt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", As = !!pe("perspective"), sn = at.core.reverting, rn = 1);
}, Dn = function(t) {
  var e = t.ownerSVGElement, i = Ei("svg", e && e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = t.cloneNode(!0), s;
  r.style.display = "block", i.appendChild(r), le.appendChild(i);
  try {
    s = r.getBBox();
  } catch {
  }
  return i.removeChild(r), le.removeChild(i), s;
}, On = function(t, e) {
  for (var i = e.length; i--; )
    if (t.hasAttribute(e[i]))
      return t.getAttribute(e[i]);
}, bs = function(t) {
  var e, i;
  try {
    e = t.getBBox();
  } catch {
    e = Dn(t), i = 1;
  }
  return e && (e.width || e.height) || i || (e = Dn(t)), e && !e.width && !e.x && !e.y ? {
    x: +On(t, ["x", "cx", "x1"]) || 0,
    y: +On(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, ws = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && bs(t));
}, ie = function(t, e) {
  if (e) {
    var i = t.style, r;
    e in Ot && e !== ot && (e = V), i.removeProperty ? (r = e.substr(0, 2), (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(r === "--" ? e : e.replace(on, "-$1").toLowerCase())) : i.removeAttribute(e);
  }
}, It = function(t, e, i, r, s, o) {
  var a = new st(t._pt, e, i, 0, 1, o ? vs : ms);
  return t._pt = a, a.b = r, a.e = s, t._props.push(i), a;
}, zn = {
  deg: 1,
  rad: 1,
  turn: 1
}, wu = {
  grid: 1,
  flex: 1
}, Nt = function n(t, e, i, r) {
  var s = parseFloat(i) || 0, o = (i + "").trim().substr((s + "").length) || "px", a = jt.style, l = cu.test(e), u = t.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (l ? "Width" : "Height"), h = 100, f = r === "px", d = r === "%", p, _, m, v;
  if (r === o || !s || zn[r] || zn[o])
    return s;
  if (o !== "px" && !f && (s = n(t, e, i, "px")), v = t.getCTM && ws(t), (d || o === "%") && (Ot[e] || ~e.indexOf("adius")))
    return p = v ? t.getBBox()[l ? "width" : "height"] : t[c], G(d ? s / p * h : s / 100 * p);
  if (a[l ? "width" : "height"] = h + (f ? o : r), _ = r !== "rem" && ~e.indexOf("adius") || r === "em" && t.appendChild && !u ? t : t.parentNode, v && (_ = (t.ownerSVGElement || {}).parentNode), (!_ || _ === Rt || !_.appendChild) && (_ = Rt.body), m = _._gsap, m && d && m.width && l && m.time === ut.time && !m.uncache)
    return G(s / m.width * h);
  if (d && (e === "height" || e === "width")) {
    var g = t.style[e];
    t.style[e] = h + r, p = t[c], g ? t.style[e] = g : ie(t, e);
  } else
    (d || o === "%") && !wu[yt(_, "display")] && (a.position = yt(t, "position")), _ === t && (a.position = "static"), _.appendChild(jt), p = jt[c], _.removeChild(jt), a.position = "absolute";
  return l && d && (m = Zt(_), m.time = ut.time, m.width = _[c]), G(f ? p * s / h : p && s ? h / p * s : 0);
}, Mt = function(t, e, i, r) {
  var s;
  return rn || Si(), e in Tt && e !== "transform" && (e = Tt[e], ~e.indexOf(",") && (e = e.split(",")[0])), Ot[e] && e !== "transform" ? (s = ke(t, r), s = e !== "transformOrigin" ? s[e] : s.svg ? s.origin : Ye(yt(t, ot)) + " " + s.zOrigin + "px") : (s = t.style[e], (!s || s === "auto" || r || ~(s + "").indexOf("calc(")) && (s = Ve[e] && Ve[e](t, e, i) || yt(t, e) || $r(t, e) || (e === "opacity" ? 1 : 0))), i && !~(s + "").trim().indexOf(" ") ? Nt(t, e, s, i) + i : s;
}, Tu = function(t, e, i, r) {
  if (!i || i === "none") {
    var s = pe(e, t, 1), o = s && yt(t, s, 1);
    o && o !== i ? (e = s, i = o) : e === "borderColor" && (i = yt(t, "borderTopColor"));
  }
  var a = new st(this._pt, t.style, e, 0, 1, ds), l = 0, u = 0, c, h, f, d, p, _, m, v, g, x, A, y;
  if (a.b = i, a.e = r, i += "", r += "", r.substring(0, 6) === "var(--" && (r = yt(t, r.substring(4, r.indexOf(")")))), r === "auto" && (_ = t.style[e], t.style[e] = r, r = yt(t, e) || r, _ ? t.style[e] = _ : ie(t, e)), c = [i, r], rs(c), i = c[0], r = c[1], f = i.match(se) || [], y = r.match(se) || [], y.length) {
    for (; h = se.exec(r); )
      m = h[0], g = r.substring(l, h.index), p ? p = (p + 1) % 5 : (g.substr(-5) === "rgba(" || g.substr(-5) === "hsla(") && (p = 1), m !== (_ = f[u++] || "") && (d = parseFloat(_) || 0, A = _.substr((d + "").length), m.charAt(1) === "=" && (m = ae(d, m) + A), v = parseFloat(m), x = m.substr((v + "").length), l = se.lastIndex - x.length, x || (x = x || ht.units[e] || A, l === r.length && (r += x, a.e += x)), A !== x && (d = Nt(t, e, _, x) || 0), a._pt = {
        _next: a._pt,
        p: g || u === 1 ? g : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: v - d,
        m: p && p < 4 || e === "zIndex" ? Math.round : 0
      });
    a.c = l < r.length ? r.substring(l, r.length) : "";
  } else
    a.r = e === "display" && r === "none" ? vs : ms;
  return zr.test(r) && (a.e = 0), this._pt = a, a;
}, Fn = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Eu = function(t) {
  var e = t.split(" "), i = e[0], r = e[1] || "50%";
  return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i, i = r, r = t), e[0] = Fn[i] || i, e[1] = Fn[r] || r, e.join(" ");
}, Su = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var i = e.t, r = i.style, s = e.u, o = i._gsap, a, l, u;
    if (s === "all" || s === !0)
      r.cssText = "", l = 1;
    else
      for (s = s.split(","), u = s.length; --u > -1; )
        a = s[u], Ot[a] && (l = 1, a = a === "transformOrigin" ? ot : V), ie(i, a);
    l && (ie(i, V), o && (o.svg && i.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", ke(i, 1), o.uncache = 1, ys(r)));
  }
}, Ve = {
  clearProps: function(t, e, i, r, s) {
    if (s.data !== "isFromStart") {
      var o = t._pt = new st(t._pt, e, i, 0, 0, Su);
      return o.u = r, o.pr = -10, o.tween = s, t._props.push(i), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, Pe = [1, 0, 0, 1, 0, 0], Ts = {}, Es = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Rn = function(t) {
  var e = yt(t, V);
  return Es(e) ? Pe : e.substr(7).match(Or).map(G);
}, an = function(t, e) {
  var i = t._gsap || Zt(t), r = t.style, s = Rn(t), o, a, l, u;
  return i.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix, s = [l.a, l.b, l.c, l.d, l.e, l.f], s.join(",") === "1,0,0,1,0,0" ? Pe : s) : (s === Pe && !t.offsetParent && t !== le && !i.svg && (l = r.display, r.display = "block", o = t.parentNode, (!o || !t.offsetParent && !t.getBoundingClientRect().width) && (u = 1, a = t.nextElementSibling, le.appendChild(t)), s = Rn(t), l ? r.display = l : ie(t, "display"), u && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : le.removeChild(t))), e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
}, Ci = function(t, e, i, r, s, o) {
  var a = t._gsap, l = s || an(t, !0), u = a.xOrigin || 0, c = a.yOrigin || 0, h = a.xOffset || 0, f = a.yOffset || 0, d = l[0], p = l[1], _ = l[2], m = l[3], v = l[4], g = l[5], x = e.split(" "), A = parseFloat(x[0]) || 0, y = parseFloat(x[1]) || 0, w, T, E, b;
  i ? l !== Pe && (T = d * m - p * _) && (E = A * (m / T) + y * (-_ / T) + (_ * g - m * v) / T, b = A * (-p / T) + y * (d / T) - (d * g - p * v) / T, A = E, y = b) : (w = bs(t), A = w.x + (~x[0].indexOf("%") ? A / 100 * w.width : A), y = w.y + (~(x[1] || x[0]).indexOf("%") ? y / 100 * w.height : y)), r || r !== !1 && a.smooth ? (v = A - u, g = y - c, a.xOffset = h + (v * d + g * _) - v, a.yOffset = f + (v * p + g * m) - g) : a.xOffset = a.yOffset = 0, a.xOrigin = A, a.yOrigin = y, a.smooth = !!r, a.origin = e, a.originIsAbsolute = !!i, t.style[ot] = "0px 0px", o && (It(o, a, "xOrigin", u, A), It(o, a, "yOrigin", c, y), It(o, a, "xOffset", h, a.xOffset), It(o, a, "yOffset", f, a.yOffset)), t.setAttribute("data-svg-origin", A + " " + y);
}, ke = function(t, e) {
  var i = t._gsap || new ls(t);
  if ("x" in i && !e && !i.uncache)
    return i;
  var r = t.style, s = i.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(t), u = yt(t, ot) || "0", c, h, f, d, p, _, m, v, g, x, A, y, w, T, E, b, S, M, P, k, R, z, O, F, L, Ct, xt, At, dt, Gt, it, pt;
  return c = h = f = _ = m = v = g = x = A = 0, d = p = 1, i.svg = !!(t.getCTM && ws(t)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (r[V] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[V] !== "none" ? l[V] : "")), r.scale = r.rotate = r.translate = "none"), T = an(t, i.svg), i.svg && (i.uncache ? (L = t.getBBox(), u = i.xOrigin - L.x + "px " + (i.yOrigin - L.y) + "px", F = "") : F = !e && t.getAttribute("data-svg-origin"), Ci(t, F || u, !!F || i.originIsAbsolute, i.smooth !== !1, T)), y = i.xOrigin || 0, w = i.yOrigin || 0, T !== Pe && (M = T[0], P = T[1], k = T[2], R = T[3], c = z = T[4], h = O = T[5], T.length === 6 ? (d = Math.sqrt(M * M + P * P), p = Math.sqrt(R * R + k * k), _ = M || P ? re(P, M) * qt : 0, g = k || R ? re(k, R) * qt + _ : 0, g && (p *= Math.abs(Math.cos(g * ue))), i.svg && (c -= y - (y * M + w * k), h -= w - (y * P + w * R))) : (pt = T[6], Gt = T[7], xt = T[8], At = T[9], dt = T[10], it = T[11], c = T[12], h = T[13], f = T[14], E = re(pt, dt), m = E * qt, E && (b = Math.cos(-E), S = Math.sin(-E), F = z * b + xt * S, L = O * b + At * S, Ct = pt * b + dt * S, xt = z * -S + xt * b, At = O * -S + At * b, dt = pt * -S + dt * b, it = Gt * -S + it * b, z = F, O = L, pt = Ct), E = re(-k, dt), v = E * qt, E && (b = Math.cos(-E), S = Math.sin(-E), F = M * b - xt * S, L = P * b - At * S, Ct = k * b - dt * S, it = R * S + it * b, M = F, P = L, k = Ct), E = re(P, M), _ = E * qt, E && (b = Math.cos(E), S = Math.sin(E), F = M * b + P * S, L = z * b + O * S, P = P * b - M * S, O = O * b - z * S, M = F, z = L), m && Math.abs(m) + Math.abs(_) > 359.9 && (m = _ = 0, v = 180 - v), d = G(Math.sqrt(M * M + P * P + k * k)), p = G(Math.sqrt(O * O + pt * pt)), E = re(z, O), g = Math.abs(E) > 2e-4 ? E * qt : 0, A = it ? 1 / (it < 0 ? -it : it) : 0), i.svg && (F = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !Es(yt(t, V)), F && t.setAttribute("transform", F))), Math.abs(g) > 90 && Math.abs(g) < 270 && (s ? (d *= -1, g += _ <= 0 ? 180 : -180, _ += _ <= 0 ? 180 : -180) : (p *= -1, g += g <= 0 ? 180 : -180)), e = e || i.uncache, i.x = c - ((i.xPercent = c && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + o, i.y = h - ((i.yPercent = h && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + o, i.z = f + o, i.scaleX = G(d), i.scaleY = G(p), i.rotation = G(_) + a, i.rotationX = G(m) + a, i.rotationY = G(v) + a, i.skewX = g + a, i.skewY = x + a, i.transformPerspective = A + o, (i.zOrigin = parseFloat(u.split(" ")[2]) || !e && i.zOrigin || 0) && (r[ot] = Ye(u)), i.xOffset = i.yOffset = 0, i.force3D = ht.force3D, i.renderTransform = i.svg ? Pu : As ? Ss : Cu, i.uncache = 0, i;
}, Ye = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, ci = function(t, e, i) {
  var r = Q(e);
  return G(parseFloat(e) + parseFloat(Nt(t, "x", i + "px", r))) + r;
}, Cu = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Ss(t, e);
}, Xt = "0deg", ge = "0px", Wt = ") ", Ss = function(t, e) {
  var i = e || this, r = i.xPercent, s = i.yPercent, o = i.x, a = i.y, l = i.z, u = i.rotation, c = i.rotationY, h = i.rotationX, f = i.skewX, d = i.skewY, p = i.scaleX, _ = i.scaleY, m = i.transformPerspective, v = i.force3D, g = i.target, x = i.zOrigin, A = "", y = v === "auto" && t && t !== 1 || v === !0;
  if (x && (h !== Xt || c !== Xt)) {
    var w = parseFloat(c) * ue, T = Math.sin(w), E = Math.cos(w), b;
    w = parseFloat(h) * ue, b = Math.cos(w), o = ci(g, o, T * b * -x), a = ci(g, a, -Math.sin(w) * -x), l = ci(g, l, E * b * -x + x);
  }
  m !== ge && (A += "perspective(" + m + Wt), (r || s) && (A += "translate(" + r + "%, " + s + "%) "), (y || o !== ge || a !== ge || l !== ge) && (A += l !== ge || y ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Wt), u !== Xt && (A += "rotate(" + u + Wt), c !== Xt && (A += "rotateY(" + c + Wt), h !== Xt && (A += "rotateX(" + h + Wt), (f !== Xt || d !== Xt) && (A += "skew(" + f + ", " + d + Wt), (p !== 1 || _ !== 1) && (A += "scale(" + p + ", " + _ + Wt), g.style[V] = A || "translate(0, 0)";
}, Pu = function(t, e) {
  var i = e || this, r = i.xPercent, s = i.yPercent, o = i.x, a = i.y, l = i.rotation, u = i.skewX, c = i.skewY, h = i.scaleX, f = i.scaleY, d = i.target, p = i.xOrigin, _ = i.yOrigin, m = i.xOffset, v = i.yOffset, g = i.forceCSS, x = parseFloat(o), A = parseFloat(a), y, w, T, E, b;
  l = parseFloat(l), u = parseFloat(u), c = parseFloat(c), c && (c = parseFloat(c), u += c, l += c), l || u ? (l *= ue, u *= ue, y = Math.cos(l) * h, w = Math.sin(l) * h, T = Math.sin(l - u) * -f, E = Math.cos(l - u) * f, u && (c *= ue, b = Math.tan(u - c), b = Math.sqrt(1 + b * b), T *= b, E *= b, c && (b = Math.tan(c), b = Math.sqrt(1 + b * b), y *= b, w *= b)), y = G(y), w = G(w), T = G(T), E = G(E)) : (y = h, E = f, w = T = 0), (x && !~(o + "").indexOf("px") || A && !~(a + "").indexOf("px")) && (x = Nt(d, "x", o, "px"), A = Nt(d, "y", a, "px")), (p || _ || m || v) && (x = G(x + p - (p * y + _ * T) + m), A = G(A + _ - (p * w + _ * E) + v)), (r || s) && (b = d.getBBox(), x = G(x + r / 100 * b.width), A = G(A + s / 100 * b.height)), b = "matrix(" + y + "," + w + "," + T + "," + E + "," + x + "," + A + ")", d.setAttribute("transform", b), g && (d.style[V] = b);
}, ku = function(t, e, i, r, s) {
  var o = 360, a = q(s), l = parseFloat(s) * (a && ~s.indexOf("rad") ? qt : 1), u = l - r, c = r + u + "deg", h, f;
  return a && (h = s.split("_")[1], h === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), h === "cw" && u < 0 ? u = (u + o * kn) % o - ~~(u / o) * o : h === "ccw" && u > 0 && (u = (u - o * kn) % o - ~~(u / o) * o)), t._pt = f = new st(t._pt, e, i, r, u, fu), f.e = c, f.u = "deg", t._props.push(i), f;
}, In = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, Mu = function(t, e, i) {
  var r = In({}, i._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", o = i.style, a, l, u, c, h, f, d, p;
  r.svg ? (u = i.getAttribute("transform"), i.setAttribute("transform", ""), o[V] = e, a = ke(i, 1), ie(i, V), i.setAttribute("transform", u)) : (u = getComputedStyle(i)[V], o[V] = e, a = ke(i, 1), o[V] = u);
  for (l in Ot)
    u = r[l], c = a[l], u !== c && s.indexOf(l) < 0 && (d = Q(u), p = Q(c), h = d !== p ? Nt(i, l, u, p) : parseFloat(u), f = parseFloat(c), t._pt = new st(t._pt, a, l, h, f - h, Ti), t._pt.u = p || 0, t._props.push(l));
  In(a, r);
};
rt("padding,margin,Width,Radius", function(n, t) {
  var e = "Top", i = "Right", r = "Bottom", s = "Left", o = (t < 3 ? [e, i, r, s] : [e + s, e + i, r + i, r + s]).map(function(a) {
    return t < 2 ? n + a : "border" + a + n;
  });
  Ve[t > 1 ? "border" + n : n] = function(a, l, u, c, h) {
    var f, d;
    if (arguments.length < 4)
      return f = o.map(function(p) {
        return Mt(a, p, u);
      }), d = f.join(" "), d.split(f[0]).length === 5 ? f[0] : d;
    f = (c + "").split(" "), d = {}, o.forEach(function(p, _) {
      return d[p] = f[_] = f[_] || f[(_ - 1) / 2 | 0];
    }), a.init(l, d, h);
  };
});
var Cs = {
  name: "css",
  register: Si,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, i, r, s) {
    var o = this._props, a = t.style, l = i.vars.startAt, u, c, h, f, d, p, _, m, v, g, x, A, y, w, T, E;
    rn || Si(), this.styles = this.styles || xs(t), E = this.styles.props, this.tween = i;
    for (_ in e)
      if (_ !== "autoRound" && (c = e[_], !(lt[_] && us(_, e, i, r, t, s)))) {
        if (d = typeof c, p = Ve[_], d === "function" && (c = c.call(i, r, t, s), d = typeof c), d === "string" && ~c.indexOf("random(") && (c = Ee(c)), p)
          p(this, t, _, c, i) && (T = 1);
        else if (_.substr(0, 2) === "--")
          u = (getComputedStyle(t).getPropertyValue(_) + "").trim(), c += "", $t.lastIndex = 0, $t.test(u) || (m = Q(u), v = Q(c)), v ? m !== v && (u = Nt(t, _, u, v) + v) : m && (c += m), this.add(a, "setProperty", u, c, r, s, 0, 0, _), o.push(_), E.push(_, 0, a[_]);
        else if (d !== "undefined") {
          if (l && _ in l ? (u = typeof l[_] == "function" ? l[_].call(i, r, t, s) : l[_], q(u) && ~u.indexOf("random(") && (u = Ee(u)), Q(u + "") || u === "auto" || (u += ht.units[_] || Q(Mt(t, _)) || ""), (u + "").charAt(1) === "=" && (u = Mt(t, _))) : u = Mt(t, _), f = parseFloat(u), g = d === "string" && c.charAt(1) === "=" && c.substr(0, 2), g && (c = c.substr(2)), h = parseFloat(c), _ in Tt && (_ === "autoAlpha" && (f === 1 && Mt(t, "visibility") === "hidden" && h && (f = 0), E.push("visibility", 0, a.visibility), It(this, a, "visibility", f ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), _ !== "scale" && _ !== "transform" && (_ = Tt[_], ~_.indexOf(",") && (_ = _.split(",")[0]))), x = _ in Ot, x) {
            if (this.styles.save(_), d === "string" && c.substring(0, 6) === "var(--" && (c = yt(t, c.substring(4, c.indexOf(")"))), h = parseFloat(c)), A || (y = t._gsap, y.renderTransform && !e.parseTransform || ke(t, e.parseTransform), w = e.smoothOrigin !== !1 && y.smooth, A = this._pt = new st(this._pt, a, V, 0, 1, y.renderTransform, y, 0, -1), A.dep = 1), _ === "scale")
              this._pt = new st(this._pt, y, "scaleY", y.scaleY, (g ? ae(y.scaleY, g + h) : h) - y.scaleY || 0, Ti), this._pt.u = 0, o.push("scaleY", _), _ += "X";
            else if (_ === "transformOrigin") {
              E.push(ot, 0, a[ot]), c = Eu(c), y.svg ? Ci(t, c, 0, w, 0, this) : (v = parseFloat(c.split(" ")[2]) || 0, v !== y.zOrigin && It(this, y, "zOrigin", y.zOrigin, v), It(this, a, _, Ye(u), Ye(c)));
              continue;
            } else if (_ === "svgOrigin") {
              Ci(t, c, 1, w, 0, this);
              continue;
            } else if (_ in Ts) {
              ku(this, y, _, f, g ? ae(f, g + c) : c);
              continue;
            } else if (_ === "smoothOrigin") {
              It(this, y, "smooth", y.smooth, c);
              continue;
            } else if (_ === "force3D") {
              y[_] = c;
              continue;
            } else if (_ === "transform") {
              Mu(this, c, t);
              continue;
            }
          } else
            _ in a || (_ = pe(_) || _);
          if (x || (h || h === 0) && (f || f === 0) && !hu.test(c) && _ in a)
            m = (u + "").substr((f + "").length), h || (h = 0), v = Q(c) || (_ in ht.units ? ht.units[_] : m), m !== v && (f = Nt(t, _, u, v)), this._pt = new st(this._pt, x ? y : a, _, f, (g ? ae(f, g + h) : h) - f, !x && (v === "px" || _ === "zIndex") && e.autoRound !== !1 ? du : Ti), this._pt.u = v || 0, m !== v && v !== "%" && (this._pt.b = u, this._pt.r = _u);
          else if (_ in a)
            Tu.call(this, t, _, u, g ? g + c : c);
          else if (_ in t)
            this.add(t, _, u || t[_], g ? g + c : c, r, s);
          else if (_ !== "parseTransform") {
            Wi(_, c);
            continue;
          }
          x || (_ in a ? E.push(_, 0, a[_]) : typeof t[_] == "function" ? E.push(_, 2, t[_]()) : E.push(_, 1, u || t[_])), o.push(_);
        }
      }
    T && ps(this);
  },
  render: function(t, e) {
    if (e.tween._time || !sn())
      for (var i = e._pt; i; )
        i.r(t, i.d), i = i._next;
    else
      e.styles.revert();
  },
  get: Mt,
  aliases: Tt,
  getSetter: function(t, e, i) {
    var r = Tt[e];
    return r && r.indexOf(",") < 0 && (e = r), e in Ot && e !== ot && (t._gsap.x || Mt(t, "x")) ? i && Pn === i ? e === "scale" ? vu : mu : (Pn = i || {}) && (e === "scale" ? yu : xu) : t.style && !Gi(t.style[e]) ? pu : ~e.indexOf("-") ? gu : en(t, e);
  },
  core: {
    _removeProperty: ie,
    _getMatrix: an
  }
};
at.utils.checkPrefix = pe;
at.core.getStyleSaver = xs;
(function(n, t, e, i) {
  var r = rt(n + "," + t + "," + e, function(s) {
    Ot[s] = 1;
  });
  rt(t, function(s) {
    ht.units[s] = "deg", Ts[s] = 1;
  }), Tt[r[13]] = n + "," + t, rt(i, function(s) {
    var o = s.split(":");
    Tt[o[1]] = r[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
rt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(n) {
  ht.units[n] = "px";
});
at.registerPlugin(Cs);
var Ps = at.registerPlugin(Cs) || at;
Ps.core.Tween;
class Du {
  constructor(t, e = {}) {
    this.gl = t, this.data = e, this.shaders = gl, this.programInfo = Cr(this.gl, this.shaders), this.a = {
      mode: 0,
      swap: 0
    }, this.gl.useProgram(this.programInfo.program), this.setBuffAtt(), this.setUniforms();
  }
  setBuffAtt() {
    const t = {
      position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0]
    };
    this.bufferInfo = Zn(this.gl, t);
  }
  applyPreset(t) {
    this.data = t, this.setUniforms(), console.log("Current background params:", this.data);
  }
  setUniforms() {
    this.uniforms = {
      u_res: [this.gl.canvas.width, this.gl.canvas.height],
      u_time: 0,
      u_params: [this.data.multx, this.data.multy, this.data.hue, this.data.brightness],
      u_params2: [this.data.mouse, this.data.scale, this.data.noise, this.data.bw],
      u_altparams: [this.data.scale2, this.data.bw2, 0, 0],
      u_color: this.data.color,
      u_color2: this.data.color2,
      u_mode: this.a.mode,
      u_swap: this.a.swap
    }, this.gl.useProgram(this.programInfo.program), Qt(this.programInfo, this.uniforms);
  }
  render(t, { x: e, y: i }) {
    this.gl.useProgram(this.programInfo.program), Sr(this.gl, this.programInfo, this.bufferInfo), Qt(this.programInfo, {
      u_time: t * this.data.time,
      u_mouse: [e, i],
      u_mode: this.a.mode,
      u_swap: this.a.swap
    }), Pr(this.gl, this.bufferInfo);
  }
  resize(t) {
    this.gl = t, this.gl.useProgram(this.programInfo.program), Qt(this.programInfo, {
      u_res: [this.gl.canvas.width, this.gl.canvas.height]
    });
  }
  mode(t) {
    t === "light" ? this.a.mode = 1 : t === "dark" ? this.a.mode = 0 : this.a.mode === 0 ? this.a.mode = 1 : this.a.mode = 0, console.log(t, this.uniforms.u_mode), this.setUniforms();
  }
  swap(t, { d: e }) {
    let i = 0;
    t === 0 ? i = 0 : t === 1 || this.a.swap === 0 ? i = 1 : i = 0, Ps.to(this.a, {
      swap: i,
      duration: e
    }), this.setUniforms();
  }
}
class Ou {
  constructor(t, e, i) {
    this.gl = t, this.params = e, this.preset = i, this.computeParams(), this.events(), this.create();
  }
  events() {
    this.mouse = { x: 0, y: 0, wx: window.innerWidth, wy: window.innerHeight }, document.addEventListener("mousemove", (t) => {
      this.mouse.x = t.clientX / this.mouse.wx * 2 - 1, this.mouse.y = -(t.clientY / this.mouse.wy) * 2 + 1;
    });
  }
  create() {
    this.data = this.params[this.preset], this.quad = new Du(this.gl, this.data);
  }
  applyPreset(t) {
    this.data = this.params[t], this.quad.applyPreset(this.data);
  }
  render(t, e) {
    this.quad && this.quad.render(t, this.mouse);
  }
  resize(t) {
    this.gl = t, this.mouse.wx = window.innerWidth, this.mouse.wy = window.innerHeight, this.quad && this.quad.resize(this.gl);
  }
  computeParams() {
    document.querySelector('[data-gradient="wrapper"]'), console.log(this.params);
  }
}
var zu = `attribute vec4 position;

void main() {\r
  vec4 pos = position;\r
  gl_Position = position;\r
}`, Fu = `precision mediump float;

uniform vec2 u_res;\r
uniform float u_time;

uniform sampler2D u_diff;

void main() {\r
  vec2 uv = gl_FragCoord.xy / u_res;

  vec3 img = texture2D(u_diff, uv).rgb;

  

  gl_FragColor.rgb = img.rgb;\r
  gl_FragColor.a = 1.;\r
}`;
const Ru = [zu, Fu];
class Iu {
  constructor(t, e = {}) {
    this.gl = t, this.data = e, this.shaders = Ru, this.programInfo = Cr(this.gl, this.shaders), this.gl.useProgram(this.programInfo.program), this.setBuffAtt(), this.setUniforms();
  }
  setBuffAtt() {
    const t = {
      position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0]
    };
    this.bufferInfo = Zn(this.gl, t);
  }
  setUniforms() {
    this.uniforms = {
      u_res: [this.gl.canvas.width, this.gl.canvas.height],
      u_time: 0
      //  u_diff: null
    }, this.gl.useProgram(this.programInfo.program), Qt(this.programInfo, this.uniforms);
  }
  render(t, e = null) {
    this.gl.useProgram(this.programInfo.program), Sr(this.gl, this.programInfo, this.bufferInfo), Qt(this.programInfo, {
      u_time: t,
      u_diff: e
    }), Pr(this.gl, this.bufferInfo);
  }
  resize(t) {
    this.gl = t, this.gl.useProgram(this.programInfo.program), Qt(this.programInfo, {
      u_res: [this.gl.canvas.width, this.gl.canvas.height]
    });
  }
}
class Bu {
  constructor(t) {
    this.gl = t;
  }
  create() {
    this.fbi = this.gl.createFramebuffer(), this.texture = this.gl.createTexture(), this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture), this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      0,
      this.gl.RGBA,
      this.gl.canvas.width,
      this.gl.canvas.height,
      0,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      null
    ), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE), this.depthBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer), this.gl.renderbufferStorage(
      this.gl.RENDERBUFFER,
      this.gl.DEPTH_COMPONENT16,
      this.gl.canvas.width,
      this.gl.canvas.height
    ), this.attach(), this.createPlane(), this.unbind();
  }
  /**
   * FBO ops
   */
  attach() {
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbi), this.gl.framebufferTexture2D(
      this.gl.FRAMEBUFFER,
      this.gl.COLOR_ATTACHMENT0,
      this.gl.TEXTURE_2D,
      this.texture,
      0
    ), this.gl.framebufferRenderbuffer(
      this.gl.FRAMEBUFFER,
      this.gl.DEPTH_ATTACHMENT,
      this.gl.RENDERBUFFER,
      this.depthBuffer
    );
  }
  unbind() {
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null), this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null);
  }
  /**
   * Geometry ops
   */
  createPlane() {
    this.quad = new Iu(this.gl);
  }
  /**
   * Render Ops
   */
  setupRender() {
    this.isActive && (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbi), this.gl.clear(this.gl.COLOR_BUFFER_BIT || this.gl.DEPTH_BUFFER_BIT));
  }
  render(t) {
    this.isActive && (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null), this.quad && this.quad.render(t, this.texture));
  }
  resize(t) {
    this.gl = t, this.create(), this.quad && this.quad.resize(this.gl);
  }
}
class Lu {
  constructor(t, e, i) {
    this.params = e, this.preset = i, this.canvas = document.getElementById(t), this.gl = this.canvas.getContext("webgl"), this.gl.clearColor(0.04, 0.04, 0.04, 1), this.gl.vp = { dpr: Math.min(window.devicePixelRatio, 2) }, this.camera = new fl(this.gl), this.gl.camera = this.camera.get(this.gl), new ResizeObserver((r) => this.resize(r[0].contentRect)).observe(this.canvas), this.resize(), this.scroll = new hl(this.gl), this.time = 0, this.create(), this.render(), this.resize();
  }
  create() {
    this.post = new Bu(this.gl), this.post.isActive = !1, this.scene = new Ou(this.gl, this.params, this.preset), window.dispatchEvent(new Event("gradientReady"));
  }
  applyPreset(t) {
    this.scene.applyPreset(t);
  }
  render() {
    this.time += 0.01, this.gl.clear(this.gl.COLOR_BUFFER_BIT || this.gl.DEPTH_BUFFER_BIT), this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height), this.post && this.post.isActive && this.post.setupRender(), this.scene && this.scene.render(this.time, this.scroll.y), this.post && this.post.isActive && this.post.render(this.time), requestAnimationFrame(this.render.bind(this));
  }
  resize() {
    cl(this.gl.canvas, this.gl.vp.dpr), this.gl.vp = {
      viewSize: this.viewSize,
      px: this.pixelSize,
      inner: [window.innerWidth, window.innerHeight],
      scroll: window.scrollY
    }, this.gl.camera && (this.gl.camera = this.camera.get(this.gl)), this.scroll && this.scroll.resize(this.gl), this.post && this.post.resize(this.gl), this.scene && this.scene.resize(this.gl);
  }
  /**
   * ----- Utils
   */
  get viewSize() {
    const t = Math.abs(this.gl.camera.z * Math.tan(this.gl.camera.fov / 2) * 2);
    return [t * (this.gl.canvas.width / this.gl.canvas.height), t];
  }
  get pixelSize() {
    return this.viewSize[0] / window.innerWidth;
  }
}
/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.2
 * @author George Michael Brower
 * @license MIT
 */
class Et {
  constructor(t, e, i, r, s = "div") {
    this.parent = t, this.object = e, this.property = i, this._disabled = !1, this._hidden = !1, this.initialValue = this.getValue(), this.domElement = document.createElement("div"), this.domElement.classList.add("controller"), this.domElement.classList.add(r), this.$name = document.createElement("div"), this.$name.classList.add("name"), Et.nextNameID = Et.nextNameID || 0, this.$name.id = `lil-gui-name-${++Et.nextNameID}`, this.$widget = document.createElement(s), this.$widget.classList.add("widget"), this.$disable = this.$widget, this.domElement.appendChild(this.$name), this.domElement.appendChild(this.$widget), this.domElement.addEventListener("keydown", (o) => o.stopPropagation()), this.domElement.addEventListener("keyup", (o) => o.stopPropagation()), this.parent.children.push(this), this.parent.controllers.push(this), this.parent.$children.appendChild(this.domElement), this._listenCallback = this._listenCallback.bind(this), this.name(i);
  }
  /**
   * Sets the name of the controller and its label in the GUI.
   * @param {string} name
   * @returns {this}
   */
  name(t) {
    return this._name = t, this.$name.innerHTML = t, this;
  }
  /**
   * Pass a function to be called whenever the value is modified by this controller.
   * The function receives the new value as its first parameter. The value of `this` will be the
   * controller.
   *
   * For function controllers, the `onChange` callback will be fired on click, after the function
   * executes.
   * @param {Function} callback
   * @returns {this}
   * @example
   * const controller = gui.add( object, 'property' );
   *
   * controller.onChange( function( v ) {
   * 	console.log( 'The value is now ' + v );
   * 	console.assert( this === controller );
   * } );
   */
  onChange(t) {
    return this._onChange = t, this;
  }
  /**
   * Calls the onChange methods of this controller and its parent GUI.
   * @protected
   */
  _callOnChange() {
    this.parent._callOnChange(this), this._onChange !== void 0 && this._onChange.call(this, this.getValue()), this._changed = !0;
  }
  /**
   * Pass a function to be called after this controller has been modified and loses focus.
   * @param {Function} callback
   * @returns {this}
   * @example
   * const controller = gui.add( object, 'property' );
   *
   * controller.onFinishChange( function( v ) {
   * 	console.log( 'Changes complete: ' + v );
   * 	console.assert( this === controller );
   * } );
   */
  onFinishChange(t) {
    return this._onFinishChange = t, this;
  }
  /**
   * Should be called by Controller when its widgets lose focus.
   * @protected
   */
  _callOnFinishChange() {
    this._changed && (this.parent._callOnFinishChange(this), this._onFinishChange !== void 0 && this._onFinishChange.call(this, this.getValue())), this._changed = !1;
  }
  /**
   * Sets the controller back to its initial value.
   * @returns {this}
   */
  reset() {
    return this.setValue(this.initialValue), this._callOnFinishChange(), this;
  }
  /**
   * Enables this controller.
   * @param {boolean} enabled
   * @returns {this}
   * @example
   * controller.enable();
   * controller.enable( false ); // disable
   * controller.enable( controller._disabled ); // toggle
   */
  enable(t = !0) {
    return this.disable(!t);
  }
  /**
   * Disables this controller.
   * @param {boolean} disabled
   * @returns {this}
   * @example
   * controller.disable();
   * controller.disable( false ); // enable
   * controller.disable( !controller._disabled ); // toggle
   */
  disable(t = !0) {
    return t === this._disabled ? this : (this._disabled = t, this.domElement.classList.toggle("disabled", t), this.$disable.toggleAttribute("disabled", t), this);
  }
  /**
   * Shows the Controller after it's been hidden.
   * @param {boolean} show
   * @returns {this}
   * @example
   * controller.show();
   * controller.show( false ); // hide
   * controller.show( controller._hidden ); // toggle
   */
  show(t = !0) {
    return this._hidden = !t, this.domElement.style.display = this._hidden ? "none" : "", this;
  }
  /**
   * Hides the Controller.
   * @returns {this}
   */
  hide() {
    return this.show(!1);
  }
  /**
   * Destroys this controller and replaces it with a new option controller. Provided as a more
   * descriptive syntax for `gui.add`, but primarily for compatibility with dat.gui.
   *
   * Use caution, as this method will destroy old references to this controller. It will also
   * change controller order if called out of sequence, moving the option controller to the end of
   * the GUI.
   * @example
   * // safe usage
   *
   * gui.add( object1, 'property' ).options( [ 'a', 'b', 'c' ] );
   * gui.add( object2, 'property' );
   *
   * // danger
   *
   * const c = gui.add( object1, 'property' );
   * gui.add( object2, 'property' );
   *
   * c.options( [ 'a', 'b', 'c' ] );
   * // controller is now at the end of the GUI even though it was added first
   *
   * assert( c.parent.children.indexOf( c ) === -1 )
   * // c references a controller that no longer exists
   *
   * @param {object|Array} options
   * @returns {Controller}
   */
  options(t) {
    const e = this.parent.add(this.object, this.property, t);
    return e.name(this._name), this.destroy(), e;
  }
  /**
   * Sets the minimum value. Only works on number controllers.
   * @param {number} min
   * @returns {this}
   */
  min(t) {
    return this;
  }
  /**
   * Sets the maximum value. Only works on number controllers.
   * @param {number} max
   * @returns {this}
   */
  max(t) {
    return this;
  }
  /**
   * Values set by this controller will be rounded to multiples of `step`. Only works on number
   * controllers.
   * @param {number} step
   * @returns {this}
   */
  step(t) {
    return this;
  }
  /**
   * Rounds the displayed value to a fixed number of decimals, without affecting the actual value
   * like `step()`. Only works on number controllers.
   * @example
   * gui.add( object, 'property' ).listen().decimals( 4 );
   * @param {number} decimals
   * @returns {this}
   */
  decimals(t) {
    return this;
  }
  /**
   * Calls `updateDisplay()` every animation frame. Pass `false` to stop listening.
   * @param {boolean} listen
   * @returns {this}
   */
  listen(t = !0) {
    return this._listening = t, this._listenCallbackID !== void 0 && (cancelAnimationFrame(this._listenCallbackID), this._listenCallbackID = void 0), this._listening && this._listenCallback(), this;
  }
  _listenCallback() {
    this._listenCallbackID = requestAnimationFrame(this._listenCallback);
    const t = this.save();
    t !== this._listenPrevValue && this.updateDisplay(), this._listenPrevValue = t;
  }
  /**
   * Returns `object[ property ]`.
   * @returns {any}
   */
  getValue() {
    return this.object[this.property];
  }
  /**
   * Sets the value of `object[ property ]`, invokes any `onChange` handlers and updates the display.
   * @param {any} value
   * @returns {this}
   */
  setValue(t) {
    return this.object[this.property] = t, this._callOnChange(), this.updateDisplay(), this;
  }
  /**
   * Updates the display to keep it in sync with the current value. Useful for updating your
   * controllers when their values have been modified outside of the GUI.
   * @returns {this}
   */
  updateDisplay() {
    return this;
  }
  load(t) {
    return this.setValue(t), this._callOnFinishChange(), this;
  }
  save() {
    return this.getValue();
  }
  /**
   * Destroys this controller and removes it from the parent GUI.
   */
  destroy() {
    this.listen(!1), this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1), this.parent.$children.removeChild(this.domElement);
  }
}
class $u extends Et {
  constructor(t, e, i) {
    super(t, e, i, "boolean", "label"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "checkbox"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$input.addEventListener("change", () => {
      this.setValue(this.$input.checked), this._callOnFinishChange();
    }), this.$disable = this.$input, this.updateDisplay();
  }
  updateDisplay() {
    return this.$input.checked = this.getValue(), this;
  }
}
function Pi(n) {
  let t, e;
  return (t = n.match(/(#|0x)?([a-f0-9]{6})/i)) ? e = t[2] : (t = n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/)) ? e = parseInt(t[1]).toString(16).padStart(2, 0) + parseInt(t[2]).toString(16).padStart(2, 0) + parseInt(t[3]).toString(16).padStart(2, 0) : (t = n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) && (e = t[1] + t[1] + t[2] + t[2] + t[3] + t[3]), e ? "#" + e : !1;
}
const Uu = {
  isPrimitive: !0,
  match: (n) => typeof n == "string",
  fromHexString: Pi,
  toHexString: Pi
}, Me = {
  isPrimitive: !0,
  match: (n) => typeof n == "number",
  fromHexString: (n) => parseInt(n.substring(1), 16),
  toHexString: (n) => "#" + n.toString(16).padStart(6, 0)
}, Nu = {
  isPrimitive: !1,
  // The arrow function is here to appease tree shakers like esbuild or webpack.
  // See https://esbuild.github.io/api/#tree-shaking
  match: (n) => Array.isArray(n),
  fromHexString(n, t, e = 1) {
    const i = Me.fromHexString(n);
    t[0] = (i >> 16 & 255) / 255 * e, t[1] = (i >> 8 & 255) / 255 * e, t[2] = (i & 255) / 255 * e;
  },
  toHexString([n, t, e], i = 1) {
    i = 255 / i;
    const r = n * i << 16 ^ t * i << 8 ^ e * i << 0;
    return Me.toHexString(r);
  }
}, Vu = {
  isPrimitive: !1,
  match: (n) => Object(n) === n,
  fromHexString(n, t, e = 1) {
    const i = Me.fromHexString(n);
    t.r = (i >> 16 & 255) / 255 * e, t.g = (i >> 8 & 255) / 255 * e, t.b = (i & 255) / 255 * e;
  },
  toHexString({ r: n, g: t, b: e }, i = 1) {
    i = 255 / i;
    const r = n * i << 16 ^ t * i << 8 ^ e * i << 0;
    return Me.toHexString(r);
  }
}, Yu = [Uu, Me, Nu, Vu];
function Gu(n) {
  return Yu.find((t) => t.match(n));
}
class Hu extends Et {
  constructor(t, e, i, r) {
    super(t, e, i, "color"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "color"), this.$input.setAttribute("tabindex", -1), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$text = document.createElement("input"), this.$text.setAttribute("type", "text"), this.$text.setAttribute("spellcheck", "false"), this.$text.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this.$display.appendChild(this.$input), this.$widget.appendChild(this.$display), this.$widget.appendChild(this.$text), this._format = Gu(this.initialValue), this._rgbScale = r, this._initialValueHexString = this.save(), this._textFocused = !1, this.$input.addEventListener("input", () => {
      this._setValueFromHexString(this.$input.value);
    }), this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    }), this.$text.addEventListener("input", () => {
      const s = Pi(this.$text.value);
      s && this._setValueFromHexString(s);
    }), this.$text.addEventListener("focus", () => {
      this._textFocused = !0, this.$text.select();
    }), this.$text.addEventListener("blur", () => {
      this._textFocused = !1, this.updateDisplay(), this._callOnFinishChange();
    }), this.$disable = this.$text, this.updateDisplay();
  }
  reset() {
    return this._setValueFromHexString(this._initialValueHexString), this;
  }
  _setValueFromHexString(t) {
    if (this._format.isPrimitive) {
      const e = this._format.fromHexString(t);
      this.setValue(e);
    } else
      this._format.fromHexString(t, this.getValue(), this._rgbScale), this._callOnChange(), this.updateDisplay();
  }
  save() {
    return this._format.toHexString(this.getValue(), this._rgbScale);
  }
  load(t) {
    return this._setValueFromHexString(t), this._callOnFinishChange(), this;
  }
  updateDisplay() {
    return this.$input.value = this._format.toHexString(this.getValue(), this._rgbScale), this._textFocused || (this.$text.value = this.$input.value.substring(1)), this.$display.style.backgroundColor = this.$input.value, this;
  }
}
class hi extends Et {
  constructor(t, e, i) {
    super(t, e, i, "function"), this.$button = document.createElement("button"), this.$button.appendChild(this.$name), this.$widget.appendChild(this.$button), this.$button.addEventListener("click", (r) => {
      r.preventDefault(), this.getValue().call(this.object), this._callOnChange();
    }), this.$button.addEventListener("touchstart", () => {
    }, { passive: !0 }), this.$disable = this.$button;
  }
}
class Xu extends Et {
  constructor(t, e, i, r, s, o) {
    super(t, e, i, "number"), this._initInput(), this.min(r), this.max(s);
    const a = o !== void 0;
    this.step(a ? o : this._getImplicitStep(), a), this.updateDisplay();
  }
  decimals(t) {
    return this._decimals = t, this.updateDisplay(), this;
  }
  min(t) {
    return this._min = t, this._onUpdateMinMax(), this;
  }
  max(t) {
    return this._max = t, this._onUpdateMinMax(), this;
  }
  step(t, e = !0) {
    return this._step = t, this._stepExplicit = e, this;
  }
  updateDisplay() {
    const t = this.getValue();
    if (this._hasSlider) {
      let e = (t - this._min) / (this._max - this._min);
      e = Math.max(0, Math.min(e, 1)), this.$fill.style.width = e * 100 + "%";
    }
    return this._inputFocused || (this.$input.value = this._decimals === void 0 ? t : t.toFixed(this._decimals)), this;
  }
  _initInput() {
    this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("aria-labelledby", this.$name.id), window.matchMedia("(pointer: coarse)").matches && (this.$input.setAttribute("type", "number"), this.$input.setAttribute("step", "any")), this.$widget.appendChild(this.$input), this.$disable = this.$input;
    const e = () => {
      let g = parseFloat(this.$input.value);
      isNaN(g) || (this._stepExplicit && (g = this._snap(g)), this.setValue(this._clamp(g)));
    }, i = (g) => {
      const x = parseFloat(this.$input.value);
      isNaN(x) || (this._snapClampSetValue(x + g), this.$input.value = this.getValue());
    }, r = (g) => {
      g.key === "Enter" && this.$input.blur(), g.code === "ArrowUp" && (g.preventDefault(), i(this._step * this._arrowKeyMultiplier(g))), g.code === "ArrowDown" && (g.preventDefault(), i(this._step * this._arrowKeyMultiplier(g) * -1));
    }, s = (g) => {
      this._inputFocused && (g.preventDefault(), i(this._step * this._normalizeMouseWheel(g)));
    };
    let o = !1, a, l, u, c, h;
    const f = 5, d = (g) => {
      a = g.clientX, l = u = g.clientY, o = !0, c = this.getValue(), h = 0, window.addEventListener("mousemove", p), window.addEventListener("mouseup", _);
    }, p = (g) => {
      if (o) {
        const x = g.clientX - a, A = g.clientY - l;
        Math.abs(A) > f ? (g.preventDefault(), this.$input.blur(), o = !1, this._setDraggingStyle(!0, "vertical")) : Math.abs(x) > f && _();
      }
      if (!o) {
        const x = g.clientY - u;
        h -= x * this._step * this._arrowKeyMultiplier(g), c + h > this._max ? h = this._max - c : c + h < this._min && (h = this._min - c), this._snapClampSetValue(c + h);
      }
      u = g.clientY;
    }, _ = () => {
      this._setDraggingStyle(!1, "vertical"), this._callOnFinishChange(), window.removeEventListener("mousemove", p), window.removeEventListener("mouseup", _);
    }, m = () => {
      this._inputFocused = !0;
    }, v = () => {
      this._inputFocused = !1, this.updateDisplay(), this._callOnFinishChange();
    };
    this.$input.addEventListener("input", e), this.$input.addEventListener("keydown", r), this.$input.addEventListener("wheel", s, { passive: !1 }), this.$input.addEventListener("mousedown", d), this.$input.addEventListener("focus", m), this.$input.addEventListener("blur", v);
  }
  _initSlider() {
    this._hasSlider = !0, this.$slider = document.createElement("div"), this.$slider.classList.add("slider"), this.$fill = document.createElement("div"), this.$fill.classList.add("fill"), this.$slider.appendChild(this.$fill), this.$widget.insertBefore(this.$slider, this.$input), this.domElement.classList.add("hasSlider");
    const t = (v, g, x, A, y) => (v - g) / (x - g) * (y - A) + A, e = (v) => {
      const g = this.$slider.getBoundingClientRect();
      let x = t(v, g.left, g.right, this._min, this._max);
      this._snapClampSetValue(x);
    }, i = (v) => {
      this._setDraggingStyle(!0), e(v.clientX), window.addEventListener("mousemove", r), window.addEventListener("mouseup", s);
    }, r = (v) => {
      e(v.clientX);
    }, s = () => {
      this._callOnFinishChange(), this._setDraggingStyle(!1), window.removeEventListener("mousemove", r), window.removeEventListener("mouseup", s);
    };
    let o = !1, a, l;
    const u = (v) => {
      v.preventDefault(), this._setDraggingStyle(!0), e(v.touches[0].clientX), o = !1;
    }, c = (v) => {
      v.touches.length > 1 || (this._hasScrollBar ? (a = v.touches[0].clientX, l = v.touches[0].clientY, o = !0) : u(v), window.addEventListener("touchmove", h, { passive: !1 }), window.addEventListener("touchend", f));
    }, h = (v) => {
      if (o) {
        const g = v.touches[0].clientX - a, x = v.touches[0].clientY - l;
        Math.abs(g) > Math.abs(x) ? u(v) : (window.removeEventListener("touchmove", h), window.removeEventListener("touchend", f));
      } else
        v.preventDefault(), e(v.touches[0].clientX);
    }, f = () => {
      this._callOnFinishChange(), this._setDraggingStyle(!1), window.removeEventListener("touchmove", h), window.removeEventListener("touchend", f);
    }, d = this._callOnFinishChange.bind(this), p = 400;
    let _;
    const m = (v) => {
      if (Math.abs(v.deltaX) < Math.abs(v.deltaY) && this._hasScrollBar)
        return;
      v.preventDefault();
      const x = this._normalizeMouseWheel(v) * this._step;
      this._snapClampSetValue(this.getValue() + x), this.$input.value = this.getValue(), clearTimeout(_), _ = setTimeout(d, p);
    };
    this.$slider.addEventListener("mousedown", i), this.$slider.addEventListener("touchstart", c, { passive: !1 }), this.$slider.addEventListener("wheel", m, { passive: !1 });
  }
  _setDraggingStyle(t, e = "horizontal") {
    this.$slider && this.$slider.classList.toggle("active", t), document.body.classList.toggle("lil-gui-dragging", t), document.body.classList.toggle(`lil-gui-${e}`, t);
  }
  _getImplicitStep() {
    return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : 0.1;
  }
  _onUpdateMinMax() {
    !this._hasSlider && this._hasMin && this._hasMax && (this._stepExplicit || this.step(this._getImplicitStep(), !1), this._initSlider(), this.updateDisplay());
  }
  _normalizeMouseWheel(t) {
    let { deltaX: e, deltaY: i } = t;
    return Math.floor(t.deltaY) !== t.deltaY && t.wheelDelta && (e = 0, i = -t.wheelDelta / 120, i *= this._stepExplicit ? 1 : 10), e + -i;
  }
  _arrowKeyMultiplier(t) {
    let e = this._stepExplicit ? 1 : 10;
    return t.shiftKey ? e *= 10 : t.altKey && (e /= 10), e;
  }
  _snap(t) {
    const e = Math.round(t / this._step) * this._step;
    return parseFloat(e.toPrecision(15));
  }
  _clamp(t) {
    return t < this._min && (t = this._min), t > this._max && (t = this._max), t;
  }
  _snapClampSetValue(t) {
    this.setValue(this._clamp(this._snap(t)));
  }
  get _hasScrollBar() {
    const t = this.parent.root.$children;
    return t.scrollHeight > t.clientHeight;
  }
  get _hasMin() {
    return this._min !== void 0;
  }
  get _hasMax() {
    return this._max !== void 0;
  }
}
class Wu extends Et {
  constructor(t, e, i, r) {
    super(t, e, i, "option"), this.$select = document.createElement("select"), this.$select.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this._values = Array.isArray(r) ? r : Object.values(r), this._names = Array.isArray(r) ? r : Object.keys(r), this._names.forEach((s) => {
      const o = document.createElement("option");
      o.innerHTML = s, this.$select.appendChild(o);
    }), this.$select.addEventListener("change", () => {
      this.setValue(this._values[this.$select.selectedIndex]), this._callOnFinishChange();
    }), this.$select.addEventListener("focus", () => {
      this.$display.classList.add("focus");
    }), this.$select.addEventListener("blur", () => {
      this.$display.classList.remove("focus");
    }), this.$widget.appendChild(this.$select), this.$widget.appendChild(this.$display), this.$disable = this.$select, this.updateDisplay();
  }
  updateDisplay() {
    const t = this.getValue(), e = this._values.indexOf(t);
    return this.$select.selectedIndex = e, this.$display.innerHTML = e === -1 ? t : this._names[e], this;
  }
}
class qu extends Et {
  constructor(t, e, i) {
    super(t, e, i, "string"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$input.addEventListener("input", () => {
      this.setValue(this.$input.value);
    }), this.$input.addEventListener("keydown", (r) => {
      r.code === "Enter" && this.$input.blur();
    }), this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    }), this.$widget.appendChild(this.$input), this.$disable = this.$input, this.updateDisplay();
  }
  updateDisplay() {
    return this.$input.value = this.getValue(), this;
  }
}
const ju = `.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;
function Ku(n) {
  const t = document.createElement("style");
  t.innerHTML = n;
  const e = document.querySelector("head link[rel=stylesheet], head style");
  e ? document.head.insertBefore(t, e) : document.head.appendChild(t);
}
let Bn = !1;
class ln {
  /**
   * Creates a panel that holds controllers.
   * @example
   * new GUI();
   * new GUI( { container: document.getElementById( 'custom' ) } );
   *
   * @param {object} [options]
   * @param {boolean} [options.autoPlace=true]
   * Adds the GUI to `document.body` and fixes it to the top right of the page.
   *
   * @param {HTMLElement} [options.container]
   * Adds the GUI to this DOM element. Overrides `autoPlace`.
   *
   * @param {number} [options.width=245]
   * Width of the GUI in pixels, usually set when name labels become too long. Note that you can make
   * name labels wider in CSS with `.lil‑gui { ‑‑name‑width: 55% }`
   *
   * @param {string} [options.title=Controls]
   * Name to display in the title bar.
   *
   * @param {boolean} [options.closeFolders=false]
   * Pass `true` to close all folders in this GUI by default.
   *
   * @param {boolean} [options.injectStyles=true]
   * Injects the default stylesheet into the page if this is the first GUI.
   * Pass `false` to use your own stylesheet.
   *
   * @param {number} [options.touchStyles=true]
   * Makes controllers larger on touch devices. Pass `false` to disable touch styles.
   *
   * @param {GUI} [options.parent]
   * Adds this GUI as a child in another GUI. Usually this is done for you by `addFolder()`.
   *
   */
  constructor({
    parent: t,
    autoPlace: e = t === void 0,
    container: i,
    width: r,
    title: s = "Controls",
    closeFolders: o = !1,
    injectStyles: a = !0,
    touchStyles: l = !0
  } = {}) {
    if (this.parent = t, this.root = t ? t.root : this, this.children = [], this.controllers = [], this.folders = [], this._closed = !1, this._hidden = !1, this.domElement = document.createElement("div"), this.domElement.classList.add("lil-gui"), this.$title = document.createElement("div"), this.$title.classList.add("title"), this.$title.setAttribute("role", "button"), this.$title.setAttribute("aria-expanded", !0), this.$title.setAttribute("tabindex", 0), this.$title.addEventListener("click", () => this.openAnimated(this._closed)), this.$title.addEventListener("keydown", (u) => {
      (u.code === "Enter" || u.code === "Space") && (u.preventDefault(), this.$title.click());
    }), this.$title.addEventListener("touchstart", () => {
    }, { passive: !0 }), this.$children = document.createElement("div"), this.$children.classList.add("children"), this.domElement.appendChild(this.$title), this.domElement.appendChild(this.$children), this.title(s), this.parent) {
      this.parent.children.push(this), this.parent.folders.push(this), this.parent.$children.appendChild(this.domElement);
      return;
    }
    this.domElement.classList.add("root"), l && this.domElement.classList.add("allow-touch-styles"), !Bn && a && (Ku(ju), Bn = !0), i ? i.appendChild(this.domElement) : e && (this.domElement.classList.add("autoPlace"), document.body.appendChild(this.domElement)), r && this.domElement.style.setProperty("--width", r + "px"), this._closeFolders = o;
  }
  /**
   * Adds a controller to the GUI, inferring controller type using the `typeof` operator.
   * @example
   * gui.add( object, 'property' );
   * gui.add( object, 'number', 0, 100, 1 );
   * gui.add( object, 'options', [ 1, 2, 3 ] );
   *
   * @param {object} object The object the controller will modify.
   * @param {string} property Name of the property to control.
   * @param {number|object|Array} [$1] Minimum value for number controllers, or the set of
   * selectable values for a dropdown.
   * @param {number} [max] Maximum value for number controllers.
   * @param {number} [step] Step value for number controllers.
   * @returns {Controller}
   */
  add(t, e, i, r, s) {
    if (Object(i) === i)
      return new Wu(this, t, e, i);
    const o = t[e];
    switch (typeof o) {
      case "number":
        return new Xu(this, t, e, i, r, s);
      case "boolean":
        return new $u(this, t, e);
      case "string":
        return new qu(this, t, e);
      case "function":
        return new hi(this, t, e);
    }
    console.error(`gui.add failed
	property:`, e, `
	object:`, t, `
	value:`, o);
  }
  /**
   * Adds a color controller to the GUI.
   * @example
   * params = {
   * 	cssColor: '#ff00ff',
   * 	rgbColor: { r: 0, g: 0.2, b: 0.4 },
   * 	customRange: [ 0, 127, 255 ],
   * };
   *
   * gui.addColor( params, 'cssColor' );
   * gui.addColor( params, 'rgbColor' );
   * gui.addColor( params, 'customRange', 255 );
   *
   * @param {object} object The object the controller will modify.
   * @param {string} property Name of the property to control.
   * @param {number} rgbScale Maximum value for a color channel when using an RGB color. You may
   * need to set this to 255 if your colors are too bright.
   * @returns {Controller}
   */
  addColor(t, e, i = 1) {
    return new Hu(this, t, e, i);
  }
  /**
   * Adds a folder to the GUI, which is just another GUI. This method returns
   * the nested GUI so you can add controllers to it.
   * @example
   * const folder = gui.addFolder( 'Position' );
   * folder.add( position, 'x' );
   * folder.add( position, 'y' );
   * folder.add( position, 'z' );
   *
   * @param {string} title Name to display in the folder's title bar.
   * @returns {GUI}
   */
  addFolder(t) {
    const e = new ln({ parent: this, title: t });
    return this.root._closeFolders && e.close(), e;
  }
  /**
   * Recalls values that were saved with `gui.save()`.
   * @param {object} obj
   * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
   * @returns {this}
   */
  load(t, e = !0) {
    return t.controllers && this.controllers.forEach((i) => {
      i instanceof hi || i._name in t.controllers && i.load(t.controllers[i._name]);
    }), e && t.folders && this.folders.forEach((i) => {
      i._title in t.folders && i.load(t.folders[i._title]);
    }), this;
  }
  /**
   * Returns an object mapping controller names to values. The object can be passed to `gui.load()` to
   * recall these values.
   * @example
   * {
   * 	controllers: {
   * 		prop1: 1,
   * 		prop2: 'value',
   * 		...
   * 	},
   * 	folders: {
   * 		folderName1: { controllers, folders },
   * 		folderName2: { controllers, folders }
   * 		...
   * 	}
   * }
   *
   * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
   * @returns {object}
   */
  save(t = !0) {
    const e = {
      controllers: {},
      folders: {}
    };
    return this.controllers.forEach((i) => {
      if (!(i instanceof hi)) {
        if (i._name in e.controllers)
          throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);
        e.controllers[i._name] = i.save();
      }
    }), t && this.folders.forEach((i) => {
      if (i._title in e.folders)
        throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);
      e.folders[i._title] = i.save();
    }), e;
  }
  /**
   * Opens a GUI or folder. GUI and folders are open by default.
   * @param {boolean} open Pass false to close
   * @returns {this}
   * @example
   * gui.open(); // open
   * gui.open( false ); // close
   * gui.open( gui._closed ); // toggle
   */
  open(t = !0) {
    return this._setClosed(!t), this.$title.setAttribute("aria-expanded", !this._closed), this.domElement.classList.toggle("closed", this._closed), this;
  }
  /**
   * Closes the GUI.
   * @returns {this}
   */
  close() {
    return this.open(!1);
  }
  _setClosed(t) {
    this._closed !== t && (this._closed = t, this._callOnOpenClose(this));
  }
  /**
   * Shows the GUI after it's been hidden.
   * @param {boolean} show
   * @returns {this}
   * @example
   * gui.show();
   * gui.show( false ); // hide
   * gui.show( gui._hidden ); // toggle
   */
  show(t = !0) {
    return this._hidden = !t, this.domElement.style.display = this._hidden ? "none" : "", this;
  }
  /**
   * Hides the GUI.
   * @returns {this}
   */
  hide() {
    return this.show(!1);
  }
  openAnimated(t = !0) {
    return this._setClosed(!t), this.$title.setAttribute("aria-expanded", !this._closed), requestAnimationFrame(() => {
      const e = this.$children.clientHeight;
      this.$children.style.height = e + "px", this.domElement.classList.add("transition");
      const i = (s) => {
        s.target === this.$children && (this.$children.style.height = "", this.domElement.classList.remove("transition"), this.$children.removeEventListener("transitionend", i));
      };
      this.$children.addEventListener("transitionend", i);
      const r = t ? this.$children.scrollHeight : 0;
      this.domElement.classList.toggle("closed", !t), requestAnimationFrame(() => {
        this.$children.style.height = r + "px";
      });
    }), this;
  }
  /**
   * Change the title of this GUI.
   * @param {string} title
   * @returns {this}
   */
  title(t) {
    return this._title = t, this.$title.innerHTML = t, this;
  }
  /**
   * Resets all controllers to their initial values.
   * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
   * @returns {this}
   */
  reset(t = !0) {
    return (t ? this.controllersRecursive() : this.controllers).forEach((i) => i.reset()), this;
  }
  /**
   * Pass a function to be called whenever a controller in this GUI changes.
   * @param {function({object:object, property:string, value:any, controller:Controller})} callback
   * @returns {this}
   * @example
   * gui.onChange( event => {
   * 	event.object     // object that was modified
   * 	event.property   // string, name of property
   * 	event.value      // new value of controller
   * 	event.controller // controller that was modified
   * } );
   */
  onChange(t) {
    return this._onChange = t, this;
  }
  _callOnChange(t) {
    this.parent && this.parent._callOnChange(t), this._onChange !== void 0 && this._onChange.call(this, {
      object: t.object,
      property: t.property,
      value: t.getValue(),
      controller: t
    });
  }
  /**
   * Pass a function to be called whenever a controller in this GUI has finished changing.
   * @param {function({object:object, property:string, value:any, controller:Controller})} callback
   * @returns {this}
   * @example
   * gui.onFinishChange( event => {
   * 	event.object     // object that was modified
   * 	event.property   // string, name of property
   * 	event.value      // new value of controller
   * 	event.controller // controller that was modified
   * } );
   */
  onFinishChange(t) {
    return this._onFinishChange = t, this;
  }
  _callOnFinishChange(t) {
    this.parent && this.parent._callOnFinishChange(t), this._onFinishChange !== void 0 && this._onFinishChange.call(this, {
      object: t.object,
      property: t.property,
      value: t.getValue(),
      controller: t
    });
  }
  /**
   * Pass a function to be called when this GUI or its descendants are opened or closed.
   * @param {function(GUI)} callback
   * @returns {this}
   * @example
   * gui.onOpenClose( changedGUI => {
   * 	console.log( changedGUI._closed );
   * } );
   */
  onOpenClose(t) {
    return this._onOpenClose = t, this;
  }
  _callOnOpenClose(t) {
    this.parent && this.parent._callOnOpenClose(t), this._onOpenClose !== void 0 && this._onOpenClose.call(this, t);
  }
  /**
   * Destroys all DOM elements and event listeners associated with this GUI
   */
  destroy() {
    this.parent && (this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.folders.splice(this.parent.folders.indexOf(this), 1)), this.domElement.parentElement && this.domElement.parentElement.removeChild(this.domElement), Array.from(this.children).forEach((t) => t.destroy());
  }
  /**
   * Returns an array of controllers contained by this GUI and its descendents.
   * @returns {Controller[]}
   */
  controllersRecursive() {
    let t = Array.from(this.controllers);
    return this.folders.forEach((e) => {
      t = t.concat(e.controllersRecursive());
    }), t;
  }
  /**
   * Returns an array of folders contained by this GUI and its descendents.
   * @returns {GUI[]}
   */
  foldersRecursive() {
    let t = Array.from(this.folders);
    return this.folders.forEach((e) => {
      t = t.concat(e.foldersRecursive());
    }), t;
  }
}
const Qu = ln;
class Ju {
  constructor(t, e, i) {
    _n(this, "presets", {
      "Preset 0": () => {
        this.gl.applyPreset(0), this.initGui(this.params[0]);
      },
      "Preset 1": () => {
        this.gl.applyPreset(1), this.initGui(this.params[1]);
      }
    });
    this.params = t, this.call = {
      mode: (r) => {
        console.log("light mode", r), this.gl.scene.quad.mode(r);
      },
      swap: (r, s = { d: 0 }) => {
        console.log("swap", r, s), this.gl.scene.quad.swap(r, s);
      }
    }, this.gl = new Lu("c", t, e), this.gl.applyPreset(0), i && this.initGui(t[e]);
  }
  setUniforms() {
    this.gl.scene.quad.setUniforms();
  }
  initGui(t) {
    this.data = t, this.gui = new Qu(), this.gui.add(this.presets, "Preset 0"), this.gui.add(this.presets, "Preset 1"), this.gui.add(this.data, "multx", 0, 10).onChange(() => {
      this.setUniforms();
    }).listen(), this.gui.add(this.data, "multy", 0, 10).onChange(() => {
      this.setUniforms();
    }).listen(), this.gui.add(this.data, "hue", 0, 1).onChange(() => {
      this.setUniforms();
    }).listen(), this.gui.add(this.data, "brightness", 0, 1, 0.01).onChange(() => {
      this.setUniforms();
    }).listen(), this.gui.add(this.data, "mouse", -1, 1).onChange(() => {
      this.setUniforms();
    }).listen(), this.gui.add(this.data, "scale", 0, 10).onChange(() => {
      this.setUniforms();
    }).listen(), this.gui.add(this.data, "noise", 0, 10).onChange(() => {
      this.setUniforms();
    }).listen(), this.gui.add(this.data, "bw", 0, 1).onChange(() => {
      this.setUniforms();
    }).listen(), this.gui.add(this.data, "time", 0, 1);
  }
}
export {
  Ju as Gradient
};
