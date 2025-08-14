var Ne = Object.defineProperty;
var Ve = (t, e, i) => e in t ? Ne(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var Vt = (t, e, i) => (Ve(t, typeof e != "symbol" ? e + "" : e, i), i);
/* @license twgl.js 5.5.4 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */
let ct = Float32Array;
function j(t, e, i) {
  const n = new ct(3);
  return t && (n[0] = t), e && (n[1] = e), i && (n[2] = i), n;
}
function Ge(t, e, i) {
  return i = i || new ct(3), i[0] = t[0] - e[0], i[1] = t[1] - e[1], i[2] = t[2] - e[2], i;
}
function Gt(t, e, i) {
  i = i || new ct(3);
  const n = t[2] * e[0] - t[0] * e[2], r = t[0] * e[1] - t[1] * e[0];
  return i[0] = t[1] * e[2] - t[2] * e[1], i[1] = n, i[2] = r, i;
}
function vt(t, e) {
  e = e || new ct(3);
  const i = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = Math.sqrt(i);
  return n > 1e-5 ? (e[0] = t[0] / n, e[1] = t[1] / n, e[2] = t[2] / n) : (e[0] = 0, e[1] = 0, e[2] = 0), e;
}
let b = Float32Array;
function He(t) {
  const e = b;
  return b = t, e;
}
function Ye(t, e) {
  return e = e || new b(16), e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = -t[3], e[4] = -t[4], e[5] = -t[5], e[6] = -t[6], e[7] = -t[7], e[8] = -t[8], e[9] = -t[9], e[10] = -t[10], e[11] = -t[11], e[12] = -t[12], e[13] = -t[13], e[14] = -t[14], e[15] = -t[15], e;
}
function je() {
  return new b(16).fill(0);
}
function Qt(t, e) {
  return e = e || new b(16), e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
}
function Kt(t) {
  return t = t || new b(16), t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function Xe(t, e) {
  if (e = e || new b(16), e === t) {
    let p;
    return p = t[1], t[1] = t[4], t[4] = p, p = t[2], t[2] = t[8], t[8] = p, p = t[3], t[3] = t[12], t[12] = p, p = t[6], t[6] = t[9], t[9] = p, p = t[7], t[7] = t[13], t[13] = p, p = t[11], t[11] = t[14], t[14] = p, e;
  }
  const i = t[0 * 4 + 0], n = t[0 * 4 + 1], r = t[0 * 4 + 2], s = t[0 * 4 + 3], o = t[1 * 4 + 0], a = t[1 * 4 + 1], l = t[1 * 4 + 2], c = t[1 * 4 + 3], u = t[2 * 4 + 0], h = t[2 * 4 + 1], f = t[2 * 4 + 2], g = t[2 * 4 + 3], m = t[3 * 4 + 0], _ = t[3 * 4 + 1], y = t[3 * 4 + 2], d = t[3 * 4 + 3];
  return e[0] = i, e[1] = o, e[2] = u, e[3] = m, e[4] = n, e[5] = a, e[6] = h, e[7] = _, e[8] = r, e[9] = l, e[10] = f, e[11] = y, e[12] = s, e[13] = c, e[14] = g, e[15] = d, e;
}
function Jt(t, e) {
  e = e || new b(16);
  const i = t[0 * 4 + 0], n = t[0 * 4 + 1], r = t[0 * 4 + 2], s = t[0 * 4 + 3], o = t[1 * 4 + 0], a = t[1 * 4 + 1], l = t[1 * 4 + 2], c = t[1 * 4 + 3], u = t[2 * 4 + 0], h = t[2 * 4 + 1], f = t[2 * 4 + 2], g = t[2 * 4 + 3], m = t[3 * 4 + 0], _ = t[3 * 4 + 1], y = t[3 * 4 + 2], d = t[3 * 4 + 3], p = f * d, A = y * g, x = l * d, E = y * c, I = l * g, F = f * c, P = r * d, z = y * s, R = r * g, M = f * s, $ = r * c, k = l * s, B = u * _, D = m * h, U = o * _, L = m * a, O = o * h, et = u * a, it = i * _, nt = m * n, rt = i * h, st = u * n, ot = i * a, at = o * n, Ut = p * a + E * h + I * _ - (A * a + x * h + F * _), Lt = A * n + P * h + M * _ - (p * n + z * h + R * _), Ot = x * n + z * a + $ * _ - (E * n + P * a + k * _), Nt = F * n + R * a + k * h - (I * n + M * a + $ * h), T = 1 / (i * Ut + o * Lt + u * Ot + m * Nt);
  return e[0] = T * Ut, e[1] = T * Lt, e[2] = T * Ot, e[3] = T * Nt, e[4] = T * (A * o + x * u + F * m - (p * o + E * u + I * m)), e[5] = T * (p * i + z * u + R * m - (A * i + P * u + M * m)), e[6] = T * (E * i + P * o + k * m - (x * i + z * o + $ * m)), e[7] = T * (I * i + M * o + $ * u - (F * i + R * o + k * u)), e[8] = T * (B * c + L * g + O * d - (D * c + U * g + et * d)), e[9] = T * (D * s + it * g + st * d - (B * s + nt * g + rt * d)), e[10] = T * (U * s + nt * c + ot * d - (L * s + it * c + at * d)), e[11] = T * (et * s + rt * c + at * g - (O * s + st * c + ot * g)), e[12] = T * (U * f + et * y + D * l - (O * y + B * l + L * f)), e[13] = T * (rt * y + B * r + nt * f - (it * f + st * y + D * r)), e[14] = T * (it * l + at * y + L * r - (ot * y + U * r + nt * l)), e[15] = T * (ot * f + O * r + st * l - (rt * l + at * f + et * r)), e;
}
function We(t, e, i) {
  i = i || new b(16);
  const n = t[0], r = t[1], s = t[2], o = t[3], a = t[4 + 0], l = t[4 + 1], c = t[4 + 2], u = t[4 + 3], h = t[8 + 0], f = t[8 + 1], g = t[8 + 2], m = t[8 + 3], _ = t[12 + 0], y = t[12 + 1], d = t[12 + 2], p = t[12 + 3], A = e[0], x = e[1], E = e[2], I = e[3], F = e[4 + 0], P = e[4 + 1], z = e[4 + 2], R = e[4 + 3], M = e[8 + 0], $ = e[8 + 1], k = e[8 + 2], B = e[8 + 3], D = e[12 + 0], U = e[12 + 1], L = e[12 + 2], O = e[12 + 3];
  return i[0] = n * A + a * x + h * E + _ * I, i[1] = r * A + l * x + f * E + y * I, i[2] = s * A + c * x + g * E + d * I, i[3] = o * A + u * x + m * E + p * I, i[4] = n * F + a * P + h * z + _ * R, i[5] = r * F + l * P + f * z + y * R, i[6] = s * F + c * P + g * z + d * R, i[7] = o * F + u * P + m * z + p * R, i[8] = n * M + a * $ + h * k + _ * B, i[9] = r * M + l * $ + f * k + y * B, i[10] = s * M + c * $ + g * k + d * B, i[11] = o * M + u * $ + m * k + p * B, i[12] = n * D + a * U + h * L + _ * O, i[13] = r * D + l * U + f * L + y * O, i[14] = s * D + c * U + g * L + d * O, i[15] = o * D + u * U + m * L + p * O, i;
}
function qe(t, e, i) {
  return i = i || Kt(), t !== i && (i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], i[4] = t[4], i[5] = t[5], i[6] = t[6], i[7] = t[7], i[8] = t[8], i[9] = t[9], i[10] = t[10], i[11] = t[11]), i[12] = e[0], i[13] = e[1], i[14] = e[2], i[15] = 1, i;
}
function Qe(t, e) {
  return e = e || j(), e[0] = t[12], e[1] = t[13], e[2] = t[14], e;
}
function Ke(t, e, i) {
  i = i || j();
  const n = e * 4;
  return i[0] = t[n + 0], i[1] = t[n + 1], i[2] = t[n + 2], i;
}
function Je(t, e, i, n) {
  n !== t && (n = Qt(t, n));
  const r = i * 4;
  return n[r + 0] = e[0], n[r + 1] = e[1], n[r + 2] = e[2], n;
}
function Ze(t, e, i, n, r) {
  r = r || new b(16);
  const s = Math.tan(Math.PI * 0.5 - 0.5 * t), o = 1 / (i - n);
  return r[0] = s / e, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = s, r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = (i + n) * o, r[11] = -1, r[12] = 0, r[13] = 0, r[14] = i * n * o * 2, r[15] = 0, r;
}
function ti(t, e, i, n, r, s, o) {
  return o = o || new b(16), o[0] = 2 / (e - t), o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = 2 / (n - i), o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[10] = 2 / (r - s), o[11] = 0, o[12] = (e + t) / (t - e), o[13] = (n + i) / (i - n), o[14] = (s + r) / (r - s), o[15] = 1, o;
}
function ei(t, e, i, n, r, s, o) {
  o = o || new b(16);
  const a = e - t, l = n - i, c = r - s;
  return o[0] = 2 * r / a, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = 2 * r / l, o[6] = 0, o[7] = 0, o[8] = (t + e) / a, o[9] = (n + i) / l, o[10] = s / c, o[11] = -1, o[12] = 0, o[13] = 0, o[14] = r * s / c, o[15] = 0, o;
}
let H, W, G;
function ii(t, e, i, n) {
  return n = n || new b(16), H = H || j(), W = W || j(), G = G || j(), vt(
    Ge(t, e, G),
    G
  ), vt(Gt(i, G, H), H), vt(Gt(G, H, W), W), n[0] = H[0], n[1] = H[1], n[2] = H[2], n[3] = 0, n[4] = W[0], n[5] = W[1], n[6] = W[2], n[7] = 0, n[8] = G[0], n[9] = G[1], n[10] = G[2], n[11] = 0, n[12] = t[0], n[13] = t[1], n[14] = t[2], n[15] = 1, n;
}
function ni(t, e) {
  return e = e || new b(16), e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = t[0], e[13] = t[1], e[14] = t[2], e[15] = 1, e;
}
function ri(t, e, i) {
  i = i || new b(16);
  const n = e[0], r = e[1], s = e[2], o = t[0], a = t[1], l = t[2], c = t[3], u = t[1 * 4 + 0], h = t[1 * 4 + 1], f = t[1 * 4 + 2], g = t[1 * 4 + 3], m = t[2 * 4 + 0], _ = t[2 * 4 + 1], y = t[2 * 4 + 2], d = t[2 * 4 + 3], p = t[3 * 4 + 0], A = t[3 * 4 + 1], x = t[3 * 4 + 2], E = t[3 * 4 + 3];
  return t !== i && (i[0] = o, i[1] = a, i[2] = l, i[3] = c, i[4] = u, i[5] = h, i[6] = f, i[7] = g, i[8] = m, i[9] = _, i[10] = y, i[11] = d), i[12] = o * n + u * r + m * s + p, i[13] = a * n + h * r + _ * s + A, i[14] = l * n + f * r + y * s + x, i[15] = c * n + g * r + d * s + E, i;
}
function si(t, e) {
  e = e || new b(16);
  const i = Math.cos(t), n = Math.sin(t);
  return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = i, e[6] = n, e[7] = 0, e[8] = 0, e[9] = -n, e[10] = i, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function oi(t, e, i) {
  i = i || new b(16);
  const n = t[4], r = t[5], s = t[6], o = t[7], a = t[8], l = t[9], c = t[10], u = t[11], h = Math.cos(e), f = Math.sin(e);
  return i[4] = h * n + f * a, i[5] = h * r + f * l, i[6] = h * s + f * c, i[7] = h * o + f * u, i[8] = h * a - f * n, i[9] = h * l - f * r, i[10] = h * c - f * s, i[11] = h * u - f * o, t !== i && (i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]), i;
}
function ai(t, e) {
  e = e || new b(16);
  const i = Math.cos(t), n = Math.sin(t);
  return e[0] = i, e[1] = 0, e[2] = -n, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = n, e[9] = 0, e[10] = i, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function li(t, e, i) {
  i = i || new b(16);
  const n = t[0 * 4 + 0], r = t[0 * 4 + 1], s = t[0 * 4 + 2], o = t[0 * 4 + 3], a = t[2 * 4 + 0], l = t[2 * 4 + 1], c = t[2 * 4 + 2], u = t[2 * 4 + 3], h = Math.cos(e), f = Math.sin(e);
  return i[0] = h * n - f * a, i[1] = h * r - f * l, i[2] = h * s - f * c, i[3] = h * o - f * u, i[8] = h * a + f * n, i[9] = h * l + f * r, i[10] = h * c + f * s, i[11] = h * u + f * o, t !== i && (i[4] = t[4], i[5] = t[5], i[6] = t[6], i[7] = t[7], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]), i;
}
function ci(t, e) {
  e = e || new b(16);
  const i = Math.cos(t), n = Math.sin(t);
  return e[0] = i, e[1] = n, e[2] = 0, e[3] = 0, e[4] = -n, e[5] = i, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function hi(t, e, i) {
  i = i || new b(16);
  const n = t[0 * 4 + 0], r = t[0 * 4 + 1], s = t[0 * 4 + 2], o = t[0 * 4 + 3], a = t[1 * 4 + 0], l = t[1 * 4 + 1], c = t[1 * 4 + 2], u = t[1 * 4 + 3], h = Math.cos(e), f = Math.sin(e);
  return i[0] = h * n + f * a, i[1] = h * r + f * l, i[2] = h * s + f * c, i[3] = h * o + f * u, i[4] = h * a - f * n, i[5] = h * l - f * r, i[6] = h * c - f * s, i[7] = h * u - f * o, t !== i && (i[8] = t[8], i[9] = t[9], i[10] = t[10], i[11] = t[11], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]), i;
}
function ui(t, e, i) {
  i = i || new b(16);
  let n = t[0], r = t[1], s = t[2];
  const o = Math.sqrt(n * n + r * r + s * s);
  n /= o, r /= o, s /= o;
  const a = n * n, l = r * r, c = s * s, u = Math.cos(e), h = Math.sin(e), f = 1 - u;
  return i[0] = a + (1 - a) * u, i[1] = n * r * f + s * h, i[2] = n * s * f - r * h, i[3] = 0, i[4] = n * r * f - s * h, i[5] = l + (1 - l) * u, i[6] = r * s * f + n * h, i[7] = 0, i[8] = n * s * f + r * h, i[9] = r * s * f - n * h, i[10] = c + (1 - c) * u, i[11] = 0, i[12] = 0, i[13] = 0, i[14] = 0, i[15] = 1, i;
}
function fi(t, e, i, n) {
  n = n || new b(16);
  let r = e[0], s = e[1], o = e[2];
  const a = Math.sqrt(r * r + s * s + o * o);
  r /= a, s /= a, o /= a;
  const l = r * r, c = s * s, u = o * o, h = Math.cos(i), f = Math.sin(i), g = 1 - h, m = l + (1 - l) * h, _ = r * s * g + o * f, y = r * o * g - s * f, d = r * s * g - o * f, p = c + (1 - c) * h, A = s * o * g + r * f, x = r * o * g + s * f, E = s * o * g - r * f, I = u + (1 - u) * h, F = t[0], P = t[1], z = t[2], R = t[3], M = t[4], $ = t[5], k = t[6], B = t[7], D = t[8], U = t[9], L = t[10], O = t[11];
  return n[0] = m * F + _ * M + y * D, n[1] = m * P + _ * $ + y * U, n[2] = m * z + _ * k + y * L, n[3] = m * R + _ * B + y * O, n[4] = d * F + p * M + A * D, n[5] = d * P + p * $ + A * U, n[6] = d * z + p * k + A * L, n[7] = d * R + p * B + A * O, n[8] = x * F + E * M + I * D, n[9] = x * P + E * $ + I * U, n[10] = x * z + E * k + I * L, n[11] = x * R + E * B + I * O, t !== n && (n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15]), n;
}
function pi(t, e) {
  return e = e || new b(16), e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = t[1], e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = t[2], e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function di(t, e, i) {
  i = i || new b(16);
  const n = e[0], r = e[1], s = e[2];
  return i[0] = n * t[0 * 4 + 0], i[1] = n * t[0 * 4 + 1], i[2] = n * t[0 * 4 + 2], i[3] = n * t[0 * 4 + 3], i[4] = r * t[1 * 4 + 0], i[5] = r * t[1 * 4 + 1], i[6] = r * t[1 * 4 + 2], i[7] = r * t[1 * 4 + 3], i[8] = s * t[2 * 4 + 0], i[9] = s * t[2 * 4 + 1], i[10] = s * t[2 * 4 + 2], i[11] = s * t[2 * 4 + 3], t !== i && (i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]), i;
}
function gi(t, e, i) {
  i = i || j();
  const n = e[0], r = e[1], s = e[2], o = n * t[0 * 4 + 3] + r * t[1 * 4 + 3] + s * t[2 * 4 + 3] + t[3 * 4 + 3];
  return i[0] = (n * t[0 * 4 + 0] + r * t[1 * 4 + 0] + s * t[2 * 4 + 0] + t[3 * 4 + 0]) / o, i[1] = (n * t[0 * 4 + 1] + r * t[1 * 4 + 1] + s * t[2 * 4 + 1] + t[3 * 4 + 1]) / o, i[2] = (n * t[0 * 4 + 2] + r * t[1 * 4 + 2] + s * t[2 * 4 + 2] + t[3 * 4 + 2]) / o, i;
}
function mi(t, e, i) {
  i = i || j();
  const n = e[0], r = e[1], s = e[2];
  return i[0] = n * t[0 * 4 + 0] + r * t[1 * 4 + 0] + s * t[2 * 4 + 0], i[1] = n * t[0 * 4 + 1] + r * t[1 * 4 + 1] + s * t[2 * 4 + 1], i[2] = n * t[0 * 4 + 2] + r * t[1 * 4 + 2] + s * t[2 * 4 + 2], i;
}
function vi(t, e, i) {
  i = i || j();
  const n = Jt(t), r = e[0], s = e[1], o = e[2];
  return i[0] = r * n[0 * 4 + 0] + s * n[0 * 4 + 1] + o * n[0 * 4 + 2], i[1] = r * n[1 * 4 + 0] + s * n[1 * 4 + 1] + o * n[1 * 4 + 2], i[2] = r * n[2 * 4 + 0] + s * n[2 * 4 + 1] + o * n[2 * 4 + 2], i;
}
var Ht = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  axisRotate: fi,
  axisRotation: ui,
  copy: Qt,
  create: je,
  frustum: ei,
  getAxis: Ke,
  getTranslation: Qe,
  identity: Kt,
  inverse: Jt,
  lookAt: ii,
  multiply: We,
  negate: Ye,
  ortho: ti,
  perspective: Ze,
  rotateX: oi,
  rotateY: li,
  rotateZ: hi,
  rotationX: si,
  rotationY: ai,
  rotationZ: ci,
  scale: di,
  scaling: pi,
  setAxis: Je,
  setDefaultType: He,
  setTranslation: qe,
  transformDirection: mi,
  transformNormal: vi,
  transformPoint: gi,
  translate: ri,
  translation: ni,
  transpose: Xe
});
const wt = 5120, Z = 5121, Et = 5122, Tt = 5123, St = 5124, Ct = 5125, It = 5126, _i = 32819, yi = 32820, Ai = 33635, bi = 5131, xi = 33640, wi = 35899, Ei = 35902, Ti = 36269, Si = 34042, Zt = {};
{
  const t = Zt;
  t[wt] = Int8Array, t[Z] = Uint8Array, t[Et] = Int16Array, t[Tt] = Uint16Array, t[St] = Int32Array, t[Ct] = Uint32Array, t[It] = Float32Array, t[_i] = Uint16Array, t[yi] = Uint16Array, t[Ai] = Uint16Array, t[bi] = Uint16Array, t[xi] = Uint32Array, t[wi] = Uint32Array, t[Ei] = Uint32Array, t[Ti] = Uint32Array, t[Si] = Uint32Array;
}
function te(t) {
  if (t instanceof Int8Array)
    return wt;
  if (t instanceof Uint8Array || t instanceof Uint8ClampedArray)
    return Z;
  if (t instanceof Int16Array)
    return Et;
  if (t instanceof Uint16Array)
    return Tt;
  if (t instanceof Int32Array)
    return St;
  if (t instanceof Uint32Array)
    return Ct;
  if (t instanceof Float32Array)
    return It;
  throw new Error("unsupported typed array type");
}
function ee(t) {
  if (t === Int8Array)
    return wt;
  if (t === Uint8Array || t === Uint8ClampedArray)
    return Z;
  if (t === Int16Array)
    return Et;
  if (t === Uint16Array)
    return Tt;
  if (t === Int32Array)
    return St;
  if (t === Uint32Array)
    return Ct;
  if (t === Float32Array)
    return It;
  throw new Error("unsupported typed array type");
}
function Ci(t) {
  const e = Zt[t];
  if (!e)
    throw new Error("unknown gl type");
  return e;
}
const At = typeof SharedArrayBuffer < "u" ? function(e) {
  return e && e.buffer && (e.buffer instanceof ArrayBuffer || e.buffer instanceof SharedArrayBuffer);
} : function(e) {
  return e && e.buffer && e.buffer instanceof ArrayBuffer;
};
function Ii(...t) {
  console.error(...t);
}
const Yt = /* @__PURE__ */ new Map();
function ie(t, e) {
  if (!t || typeof t != "object")
    return !1;
  let i = Yt.get(e);
  i || (i = /* @__PURE__ */ new WeakMap(), Yt.set(e, i));
  let n = i.get(t);
  if (n === void 0) {
    const r = Object.prototype.toString.call(t);
    n = r.substring(8, r.length - 1) === e, i.set(t, n);
  }
  return n;
}
function Fi(t, e) {
  return typeof WebGLBuffer < "u" && ie(e, "WebGLBuffer");
}
function ne(t, e) {
  return typeof WebGLTexture < "u" && ie(e, "WebGLTexture");
}
const re = 35044, q = 34962, Pi = 34963, zi = 34660, Ri = 5120, Mi = 5121, $i = 5122, ki = 5123, Bi = 5124, Di = 5125, se = 5126, oe = {
  attribPrefix: ""
};
function Ui(t, e, i, n, r) {
  t.bindBuffer(e, i), t.bufferData(e, n, r || re);
}
function ae(t, e, i, n) {
  if (Fi(t, e))
    return e;
  i = i || q;
  const r = t.createBuffer();
  return Ui(t, i, r, e, n), r;
}
function le(t) {
  return t === "indices";
}
function Li(t) {
  return t === Int8Array || t === Uint8Array;
}
function Oi(t) {
  return t.length ? t : t.data;
}
const Ni = /coord|texture/i, Vi = /color|colour/i;
function Gi(t, e) {
  let i;
  if (Ni.test(t) ? i = 2 : Vi.test(t) ? i = 4 : i = 3, e % i > 0)
    throw new Error(`Can not guess numComponents for attribute '${t}'. Tried ${i} but ${e} values is not evenly divisible by ${i}. You should specify it.`);
  return i;
}
function Hi(t, e, i) {
  return t.numComponents || t.size || Gi(e, i || Oi(t).length);
}
function ce(t, e) {
  if (At(t))
    return t;
  if (At(t.data))
    return t.data;
  Array.isArray(t) && (t = {
    data: t
  });
  let i = t.type ? Ft(t.type) : void 0;
  return i || (le(e) ? i = Uint16Array : i = Float32Array), new i(t.data);
}
function Yi(t) {
  return typeof t == "number" ? t : t ? ee(t) : se;
}
function Ft(t) {
  return typeof t == "number" ? Ci(t) : t || Float32Array;
}
function ji(t, e) {
  return {
    buffer: e.buffer,
    numValues: 2 * 3 * 4,
    // safely divided by 2, 3, 4
    type: Yi(e.type),
    arrayType: Ft(e.type)
  };
}
function Xi(t, e) {
  const i = e.data || e, n = Ft(e.type), r = i * n.BYTES_PER_ELEMENT, s = t.createBuffer();
  return t.bindBuffer(q, s), t.bufferData(q, r, e.drawType || re), {
    buffer: s,
    numValues: i,
    type: ee(n),
    arrayType: n
  };
}
function Wi(t, e, i) {
  const n = ce(e, i);
  return {
    arrayType: n.constructor,
    buffer: ae(t, n, void 0, e.drawType),
    type: te(n),
    numValues: 0
  };
}
function qi(t, e) {
  const i = {};
  return Object.keys(e).forEach(function(n) {
    if (!le(n)) {
      const r = e[n], s = r.attrib || r.name || r.attribName || oe.attribPrefix + n;
      if (r.value) {
        if (!Array.isArray(r.value) && !At(r.value))
          throw new Error("array.value is not array or typedarray");
        i[s] = {
          value: r.value
        };
      } else {
        let o;
        r.buffer && r.buffer instanceof WebGLBuffer ? o = ji : typeof r == "number" || typeof r.data == "number" ? o = Xi : o = Wi;
        const { buffer: a, type: l, numValues: c, arrayType: u } = o(t, r, n), h = r.normalize !== void 0 ? r.normalize : Li(u), f = Hi(r, n, c);
        i[s] = {
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
  }), t.bindBuffer(q, null), i;
}
function Qi(t, e) {
  return e === Ri || e === Mi ? 1 : e === $i || e === ki ? 2 : e === Bi || e === Di || e === se ? 4 : 0;
}
const _t = ["position", "positions", "a_position"];
function Ki(t, e) {
  let i, n;
  for (n = 0; n < _t.length && (i = _t[n], !(i in e || (i = oe.attribPrefix + i, i in e))); ++n)
    ;
  n === _t.length && (i = Object.keys(e)[0]);
  const r = e[i];
  if (!r.buffer)
    return 1;
  t.bindBuffer(q, r.buffer);
  const s = t.getBufferParameter(q, zi);
  t.bindBuffer(q, null);
  const o = Qi(t, r.type), a = s / o, l = r.numComponents || r.size, c = a / l;
  if (c % 1 !== 0)
    throw new Error(`numComponents ${l} not correct for length ${length}`);
  return c;
}
function he(t, e, i) {
  const n = qi(t, e), r = Object.assign({}, i || {});
  r.attribs = Object.assign({}, i ? i.attribs : {}, n);
  const s = e.indices;
  if (s) {
    const o = ce(s, "indices");
    r.indices = ae(t, o, Pi), r.numElements = o.length, r.elementType = te(o);
  } else
    r.numElements || (r.numElements = Ki(t, r.attribs));
  return r;
}
function Pt(t) {
  return !!t.texStorage2D;
}
const Ji = function() {
  const t = {}, e = {};
  function i(n) {
    const r = n.constructor.name;
    if (!t[r]) {
      for (const s in n)
        if (typeof n[s] == "number") {
          const o = e[n[s]];
          e[n[s]] = o ? `${o} | ${s}` : s;
        }
      t[r] = !0;
    }
  }
  return function(r, s) {
    return i(r), e[s] || (typeof s == "number" ? `0x${s.toString(16)}` : s);
  };
}(), zt = Ii;
function ue(t) {
  return typeof document < "u" && document.getElementById ? document.getElementById(t) : null;
}
const lt = 33984, ht = 34962, Zi = 34963, tn = 35713, en = 35714, nn = 35632, rn = 35633, sn = 35981, fe = 35718, on = 35721, an = 35971, ln = 35382, cn = 35396, hn = 35398, un = 35392, fn = 35395, ut = 5126, pe = 35664, de = 35665, ge = 35666, Rt = 5124, me = 35667, ve = 35668, _e = 35669, ye = 35670, Ae = 35671, be = 35672, xe = 35673, we = 35674, Ee = 35675, Te = 35676, pn = 35678, dn = 35680, gn = 35679, mn = 35682, vn = 35685, _n = 35686, yn = 35687, An = 35688, bn = 35689, xn = 35690, wn = 36289, En = 36292, Tn = 36293, Mt = 5125, Se = 36294, Ce = 36295, Ie = 36296, Sn = 36298, Cn = 36299, In = 36300, Fn = 36303, Pn = 36306, zn = 36307, Rn = 36308, Mn = 36311, ft = 3553, pt = 34067, $t = 32879, dt = 35866, v = {};
function Fe(t, e) {
  return v[e].bindPoint;
}
function $n(t, e) {
  return function(i) {
    t.uniform1f(e, i);
  };
}
function kn(t, e) {
  return function(i) {
    t.uniform1fv(e, i);
  };
}
function Bn(t, e) {
  return function(i) {
    t.uniform2fv(e, i);
  };
}
function Dn(t, e) {
  return function(i) {
    t.uniform3fv(e, i);
  };
}
function Un(t, e) {
  return function(i) {
    t.uniform4fv(e, i);
  };
}
function Pe(t, e) {
  return function(i) {
    t.uniform1i(e, i);
  };
}
function ze(t, e) {
  return function(i) {
    t.uniform1iv(e, i);
  };
}
function Re(t, e) {
  return function(i) {
    t.uniform2iv(e, i);
  };
}
function Me(t, e) {
  return function(i) {
    t.uniform3iv(e, i);
  };
}
function $e(t, e) {
  return function(i) {
    t.uniform4iv(e, i);
  };
}
function Ln(t, e) {
  return function(i) {
    t.uniform1ui(e, i);
  };
}
function On(t, e) {
  return function(i) {
    t.uniform1uiv(e, i);
  };
}
function Nn(t, e) {
  return function(i) {
    t.uniform2uiv(e, i);
  };
}
function Vn(t, e) {
  return function(i) {
    t.uniform3uiv(e, i);
  };
}
function Gn(t, e) {
  return function(i) {
    t.uniform4uiv(e, i);
  };
}
function Hn(t, e) {
  return function(i) {
    t.uniformMatrix2fv(e, !1, i);
  };
}
function Yn(t, e) {
  return function(i) {
    t.uniformMatrix3fv(e, !1, i);
  };
}
function jn(t, e) {
  return function(i) {
    t.uniformMatrix4fv(e, !1, i);
  };
}
function Xn(t, e) {
  return function(i) {
    t.uniformMatrix2x3fv(e, !1, i);
  };
}
function Wn(t, e) {
  return function(i) {
    t.uniformMatrix3x2fv(e, !1, i);
  };
}
function qn(t, e) {
  return function(i) {
    t.uniformMatrix2x4fv(e, !1, i);
  };
}
function Qn(t, e) {
  return function(i) {
    t.uniformMatrix4x2fv(e, !1, i);
  };
}
function Kn(t, e) {
  return function(i) {
    t.uniformMatrix3x4fv(e, !1, i);
  };
}
function Jn(t, e) {
  return function(i) {
    t.uniformMatrix4x3fv(e, !1, i);
  };
}
function S(t, e, i, n) {
  const r = Fe(t, e);
  return Pt(t) ? function(s) {
    let o, a;
    !s || ne(t, s) ? (o = s, a = null) : (o = s.texture, a = s.sampler), t.uniform1i(n, i), t.activeTexture(lt + i), t.bindTexture(r, o), t.bindSampler(i, a);
  } : function(s) {
    t.uniform1i(n, i), t.activeTexture(lt + i), t.bindTexture(r, s);
  };
}
function C(t, e, i, n, r) {
  const s = Fe(t, e), o = new Int32Array(r);
  for (let a = 0; a < r; ++a)
    o[a] = i + a;
  return Pt(t) ? function(a) {
    t.uniform1iv(n, o), a.forEach(function(l, c) {
      t.activeTexture(lt + o[c]);
      let u, h;
      !l || ne(t, l) ? (u = l, h = null) : (u = l.texture, h = l.sampler), t.bindSampler(i, h), t.bindTexture(s, u);
    });
  } : function(a) {
    t.uniform1iv(n, o), a.forEach(function(l, c) {
      t.activeTexture(lt + o[c]), t.bindTexture(s, l);
    });
  };
}
v[ut] = { Type: Float32Array, size: 4, setter: $n, arraySetter: kn };
v[pe] = { Type: Float32Array, size: 8, setter: Bn, cols: 2 };
v[de] = { Type: Float32Array, size: 12, setter: Dn, cols: 3 };
v[ge] = { Type: Float32Array, size: 16, setter: Un, cols: 4 };
v[Rt] = { Type: Int32Array, size: 4, setter: Pe, arraySetter: ze };
v[me] = { Type: Int32Array, size: 8, setter: Re, cols: 2 };
v[ve] = { Type: Int32Array, size: 12, setter: Me, cols: 3 };
v[_e] = { Type: Int32Array, size: 16, setter: $e, cols: 4 };
v[Mt] = { Type: Uint32Array, size: 4, setter: Ln, arraySetter: On };
v[Se] = { Type: Uint32Array, size: 8, setter: Nn, cols: 2 };
v[Ce] = { Type: Uint32Array, size: 12, setter: Vn, cols: 3 };
v[Ie] = { Type: Uint32Array, size: 16, setter: Gn, cols: 4 };
v[ye] = { Type: Uint32Array, size: 4, setter: Pe, arraySetter: ze };
v[Ae] = { Type: Uint32Array, size: 8, setter: Re, cols: 2 };
v[be] = { Type: Uint32Array, size: 12, setter: Me, cols: 3 };
v[xe] = { Type: Uint32Array, size: 16, setter: $e, cols: 4 };
v[we] = { Type: Float32Array, size: 32, setter: Hn, rows: 2, cols: 2 };
v[Ee] = { Type: Float32Array, size: 48, setter: Yn, rows: 3, cols: 3 };
v[Te] = { Type: Float32Array, size: 64, setter: jn, rows: 4, cols: 4 };
v[vn] = { Type: Float32Array, size: 32, setter: Xn, rows: 2, cols: 3 };
v[_n] = { Type: Float32Array, size: 32, setter: qn, rows: 2, cols: 4 };
v[yn] = { Type: Float32Array, size: 48, setter: Wn, rows: 3, cols: 2 };
v[An] = { Type: Float32Array, size: 48, setter: Kn, rows: 3, cols: 4 };
v[bn] = { Type: Float32Array, size: 64, setter: Qn, rows: 4, cols: 2 };
v[xn] = { Type: Float32Array, size: 64, setter: Jn, rows: 4, cols: 3 };
v[pn] = { Type: null, size: 0, setter: S, arraySetter: C, bindPoint: ft };
v[dn] = { Type: null, size: 0, setter: S, arraySetter: C, bindPoint: pt };
v[gn] = { Type: null, size: 0, setter: S, arraySetter: C, bindPoint: $t };
v[mn] = { Type: null, size: 0, setter: S, arraySetter: C, bindPoint: ft };
v[wn] = { Type: null, size: 0, setter: S, arraySetter: C, bindPoint: dt };
v[En] = { Type: null, size: 0, setter: S, arraySetter: C, bindPoint: dt };
v[Tn] = { Type: null, size: 0, setter: S, arraySetter: C, bindPoint: pt };
v[Sn] = { Type: null, size: 0, setter: S, arraySetter: C, bindPoint: ft };
v[Cn] = { Type: null, size: 0, setter: S, arraySetter: C, bindPoint: $t };
v[In] = { Type: null, size: 0, setter: S, arraySetter: C, bindPoint: pt };
v[Fn] = { Type: null, size: 0, setter: S, arraySetter: C, bindPoint: dt };
v[Pn] = { Type: null, size: 0, setter: S, arraySetter: C, bindPoint: ft };
v[zn] = { Type: null, size: 0, setter: S, arraySetter: C, bindPoint: $t };
v[Rn] = { Type: null, size: 0, setter: S, arraySetter: C, bindPoint: pt };
v[Mn] = { Type: null, size: 0, setter: S, arraySetter: C, bindPoint: dt };
function gt(t, e) {
  return function(i) {
    if (i.value)
      switch (t.disableVertexAttribArray(e), i.value.length) {
        case 4:
          t.vertexAttrib4fv(e, i.value);
          break;
        case 3:
          t.vertexAttrib3fv(e, i.value);
          break;
        case 2:
          t.vertexAttrib2fv(e, i.value);
          break;
        case 1:
          t.vertexAttrib1fv(e, i.value);
          break;
        default:
          throw new Error("the length of a float constant value must be between 1 and 4!");
      }
    else
      t.bindBuffer(ht, i.buffer), t.enableVertexAttribArray(e), t.vertexAttribPointer(
        e,
        i.numComponents || i.size,
        i.type || ut,
        i.normalize || !1,
        i.stride || 0,
        i.offset || 0
      ), t.vertexAttribDivisor && t.vertexAttribDivisor(e, i.divisor || 0);
  };
}
function X(t, e) {
  return function(i) {
    if (i.value)
      if (t.disableVertexAttribArray(e), i.value.length === 4)
        t.vertexAttrib4iv(e, i.value);
      else
        throw new Error("The length of an integer constant value must be 4!");
    else
      t.bindBuffer(ht, i.buffer), t.enableVertexAttribArray(e), t.vertexAttribIPointer(
        e,
        i.numComponents || i.size,
        i.type || Rt,
        i.stride || 0,
        i.offset || 0
      ), t.vertexAttribDivisor && t.vertexAttribDivisor(e, i.divisor || 0);
  };
}
function mt(t, e) {
  return function(i) {
    if (i.value)
      if (t.disableVertexAttribArray(e), i.value.length === 4)
        t.vertexAttrib4uiv(e, i.value);
      else
        throw new Error("The length of an unsigned integer constant value must be 4!");
    else
      t.bindBuffer(ht, i.buffer), t.enableVertexAttribArray(e), t.vertexAttribIPointer(
        e,
        i.numComponents || i.size,
        i.type || Mt,
        i.stride || 0,
        i.offset || 0
      ), t.vertexAttribDivisor && t.vertexAttribDivisor(e, i.divisor || 0);
  };
}
function kt(t, e, i) {
  const n = i.size, r = i.count;
  return function(s) {
    t.bindBuffer(ht, s.buffer);
    const o = s.size || s.numComponents || n, a = o / r, l = s.type || ut, u = v[l].size * o, h = s.normalize || !1, f = s.offset || 0, g = u / r;
    for (let m = 0; m < r; ++m)
      t.enableVertexAttribArray(e + m), t.vertexAttribPointer(
        e + m,
        a,
        l,
        h,
        u,
        f + g * m
      ), t.vertexAttribDivisor && t.vertexAttribDivisor(e + m, s.divisor || 0);
  };
}
const w = {};
w[ut] = { size: 4, setter: gt };
w[pe] = { size: 8, setter: gt };
w[de] = { size: 12, setter: gt };
w[ge] = { size: 16, setter: gt };
w[Rt] = { size: 4, setter: X };
w[me] = { size: 8, setter: X };
w[ve] = { size: 12, setter: X };
w[_e] = { size: 16, setter: X };
w[Mt] = { size: 4, setter: mt };
w[Se] = { size: 8, setter: mt };
w[Ce] = { size: 12, setter: mt };
w[Ie] = { size: 16, setter: mt };
w[ye] = { size: 4, setter: X };
w[Ae] = { size: 8, setter: X };
w[be] = { size: 12, setter: X };
w[xe] = { size: 16, setter: X };
w[we] = { size: 4, setter: kt, count: 2 };
w[Ee] = { size: 9, setter: kt, count: 3 };
w[Te] = { size: 16, setter: kt, count: 4 };
const Zn = /ERROR:\s*\d+:(\d+)/gi;
function tr(t, e = "", i = 0) {
  const n = [...e.matchAll(Zn)], r = new Map(n.map((s, o) => {
    const a = parseInt(s[1]), l = n[o + 1], c = l ? l.index : e.length, u = e.substring(s.index, c);
    return [a - 1, u];
  }));
  return t.split(`
`).map((s, o) => {
    const a = r.get(o);
    return `${o + 1 + i}: ${s}${a ? `

^^^ ${a}` : ""}`;
  }).join(`
`);
}
const jt = /^[ \t]*\n/;
function ke(t) {
  let e = 0;
  return jt.test(t) && (e = 1, t = t.replace(jt, "")), { lineOffset: e, shaderSource: t };
}
function er(t, e) {
  return t.errorCallback(e), t.callback && setTimeout(() => {
    t.callback(`${e}
${t.errors.join(`
`)}`);
  }), null;
}
function ir(t, e, i, n) {
  if (n = n || zt, !t.getShaderParameter(i, tn)) {
    const s = t.getShaderInfoLog(i), { lineOffset: o, shaderSource: a } = ke(t.getShaderSource(i)), l = `${tr(a, s, o)}
Error compiling ${Ji(t, e)}: ${s}`;
    return n(l), l;
  }
  return "";
}
function Bt(t, e, i) {
  let n, r, s;
  if (typeof e == "function" && (i = e, e = void 0), typeof t == "function")
    i = t, t = void 0;
  else if (t && !Array.isArray(t)) {
    const c = t;
    i = c.errorCallback, t = c.attribLocations, n = c.transformFeedbackVaryings, r = c.transformFeedbackMode, s = c.callback;
  }
  const o = i || zt, a = [], l = {
    errorCallback(c, ...u) {
      a.push(c), o(c, ...u);
    },
    transformFeedbackVaryings: n,
    transformFeedbackMode: r,
    callback: s,
    errors: a
  };
  {
    let c = {};
    Array.isArray(t) ? t.forEach(function(u, h) {
      c[u] = e ? e[h] : h;
    }) : c = t || {}, l.attribLocations = c;
  }
  return l;
}
const nr = [
  "VERTEX_SHADER",
  "FRAGMENT_SHADER"
];
function rr(t, e) {
  if (e.indexOf("frag") >= 0)
    return nn;
  if (e.indexOf("vert") >= 0)
    return rn;
}
function sr(t, e, i) {
  const n = t.getAttachedShaders(e);
  for (const r of n)
    i.has(r) && t.deleteShader(r);
  t.deleteProgram(e);
}
const or = (t = 0) => new Promise((e) => setTimeout(e, t));
function ar(t, e, i) {
  const n = t.createProgram(), {
    attribLocations: r,
    transformFeedbackVaryings: s,
    transformFeedbackMode: o
  } = Bt(i);
  for (let a = 0; a < e.length; ++a) {
    let l = e[a];
    if (typeof l == "string") {
      const c = ue(l), u = c ? c.text : l;
      let h = t[nr[a]];
      c && c.type && (h = rr(t, c.type) || h), l = t.createShader(h), t.shaderSource(l, ke(u).shaderSource), t.compileShader(l), t.attachShader(n, l);
    }
  }
  Object.entries(r).forEach(([a, l]) => t.bindAttribLocation(n, l, a));
  {
    let a = s;
    a && (a.attribs && (a = a.attribs), Array.isArray(a) || (a = Object.keys(a)), t.transformFeedbackVaryings(n, a, o || sn));
  }
  return t.linkProgram(n), n;
}
function lr(t, e, i, n, r) {
  const s = Bt(i, n, r), o = new Set(e), a = ar(t, e, s);
  function l(c, u) {
    const h = hr(c, u, s.errorCallback);
    return h && sr(c, u, o), h;
  }
  if (s.callback) {
    cr(t, a).then(() => {
      const c = l(t, a);
      s.callback(c, c ? void 0 : a);
    });
    return;
  }
  return l(t, a) ? void 0 : a;
}
async function cr(t, e) {
  const i = t.getExtension("KHR_parallel_shader_compile"), n = i ? (s, o) => s.getProgramParameter(o, i.COMPLETION_STATUS_KHR) : () => !0;
  let r = 0;
  do
    await or(r), r = 1e3 / 60;
  while (!n(t, e));
}
function hr(t, e, i) {
  if (i = i || zt, !t.getProgramParameter(e, en)) {
    const r = t.getProgramInfoLog(e);
    i(`Error in program linking: ${r}`);
    const o = t.getAttachedShaders(e).map((a) => ir(t, t.getShaderParameter(a, t.SHADER_TYPE), a, i));
    return `${r}
${o.filter((a) => a).join(`
`)}`;
  }
}
function ur(t, e, i, n, r) {
  return lr(t, e, i, n, r);
}
function Be(t) {
  const e = t.name;
  return e.startsWith("gl_") || e.startsWith("webgl_");
}
const fr = /(\.|\[|]|\w+)/g, pr = (t) => t >= "0" && t <= "9";
function dr(t, e, i, n) {
  const r = t.split(fr).filter((a) => a !== "");
  let s = 0, o = "";
  for (; ; ) {
    const a = r[s++];
    o += a;
    const l = pr(a[0]), c = l ? parseInt(a) : a;
    if (l && (o += r[s++]), s === r.length) {
      i[c] = e;
      break;
    } else {
      const h = r[s++], f = h === "[", g = i[c] || (f ? [] : {});
      i[c] = g, i = g, n[o] = n[o] || function(m) {
        return function(_) {
          De(m, _);
        };
      }(g), o += h;
    }
  }
}
function gr(t, e) {
  let i = 0;
  function n(a, l, c) {
    const u = l.name.endsWith("[0]"), h = l.type, f = v[h];
    if (!f)
      throw new Error(`unknown type: 0x${h.toString(16)}`);
    let g;
    if (f.bindPoint) {
      const m = i;
      i += l.size, u ? g = f.arraySetter(t, h, m, c, l.size) : g = f.setter(t, h, m, c, l.size);
    } else
      f.arraySetter && u ? g = f.arraySetter(t, c) : g = f.setter(t, c);
    return g.location = c, g;
  }
  const r = {}, s = {}, o = t.getProgramParameter(e, fe);
  for (let a = 0; a < o; ++a) {
    const l = t.getActiveUniform(e, a);
    if (Be(l))
      continue;
    let c = l.name;
    c.endsWith("[0]") && (c = c.substr(0, c.length - 3));
    const u = t.getUniformLocation(e, l.name);
    if (u) {
      const h = n(e, l, u);
      r[c] = h, dr(c, h, s, r);
    }
  }
  return r;
}
function mr(t, e) {
  const i = {}, n = t.getProgramParameter(e, an);
  for (let r = 0; r < n; ++r) {
    const s = t.getTransformFeedbackVarying(e, r);
    i[s.name] = {
      index: r,
      type: s.type,
      size: s.size
    };
  }
  return i;
}
function vr(t, e) {
  const i = t.getProgramParameter(e, fe), n = [], r = [];
  for (let a = 0; a < i; ++a) {
    r.push(a), n.push({});
    const l = t.getActiveUniform(e, a);
    n[a].name = l.name;
  }
  [
    ["UNIFORM_TYPE", "type"],
    ["UNIFORM_SIZE", "size"],
    // num elements
    ["UNIFORM_BLOCK_INDEX", "blockNdx"],
    ["UNIFORM_OFFSET", "offset"]
  ].forEach(function(a) {
    const l = a[0], c = a[1];
    t.getActiveUniforms(e, r, t[l]).forEach(function(u, h) {
      n[h][c] = u;
    });
  });
  const s = {}, o = t.getProgramParameter(e, ln);
  for (let a = 0; a < o; ++a) {
    const l = t.getActiveUniformBlockName(e, a), c = {
      index: t.getUniformBlockIndex(e, l),
      usedByVertexShader: t.getActiveUniformBlockParameter(e, a, cn),
      usedByFragmentShader: t.getActiveUniformBlockParameter(e, a, hn),
      size: t.getActiveUniformBlockParameter(e, a, un),
      uniformIndices: t.getActiveUniformBlockParameter(e, a, fn)
    };
    c.used = c.usedByVertexShader || c.usedByFragmentShader, s[l] = c;
  }
  return {
    blockSpecs: s,
    uniformData: n
  };
}
function De(t, e) {
  for (const i in e) {
    const n = t[i];
    typeof n == "function" ? n(e[i]) : De(t[i], e[i]);
  }
}
function Y(t, ...e) {
  const i = t.uniformSetters || t, n = e.length;
  for (let r = 0; r < n; ++r) {
    const s = e[r];
    if (Array.isArray(s)) {
      const o = s.length;
      for (let a = 0; a < o; ++a)
        Y(i, s[a]);
    } else
      for (const o in s) {
        const a = i[o];
        a && a(s[o]);
      }
  }
}
function _r(t, e) {
  const i = {}, n = t.getProgramParameter(e, on);
  for (let r = 0; r < n; ++r) {
    const s = t.getActiveAttrib(e, r);
    if (Be(s))
      continue;
    const o = t.getAttribLocation(e, s.name), a = w[s.type], l = a.setter(t, o, a);
    l.location = o, i[s.name] = l;
  }
  return i;
}
function yr(t, e) {
  for (const i in e) {
    const n = t[i];
    n && n(e[i]);
  }
}
function Ue(t, e, i) {
  i.vertexArrayObject ? t.bindVertexArray(i.vertexArrayObject) : (yr(e.attribSetters || e, i.attribs), i.indices && t.bindBuffer(Zi, i.indices));
}
function Xt(t, e) {
  const i = gr(t, e), n = _r(t, e), r = {
    program: e,
    uniformSetters: i,
    attribSetters: n
  };
  return Pt(t) && (r.uniformBlockSpec = vr(t, e), r.transformFeedbackInfo = mr(t, e)), r;
}
const Ar = /\s|{|}|;/;
function Le(t, e, i, n, r) {
  const s = Bt(i, n, r), o = [];
  if (e = e.map(function(c) {
    if (!Ar.test(c)) {
      const u = ue(c);
      if (u)
        c = u.text;
      else {
        const h = `no element with id: ${c}`;
        s.errorCallback(h), o.push(h);
      }
    }
    return c;
  }), o.length)
    return er(s, "");
  const a = s.callback;
  a && (s.callback = (c, u) => {
    a(c, c ? void 0 : Xt(t, u));
  });
  const l = ur(t, e, s);
  return l ? Xt(t, l) : null;
}
const br = 4, Wt = 5123;
function Oe(t, e, i, n, r, s) {
  i = i === void 0 ? br : i;
  const o = e.indices, a = e.elementType, l = n === void 0 ? e.numElements : n;
  r = r === void 0 ? 0 : r, a || o ? s !== void 0 ? t.drawElementsInstanced(i, l, a === void 0 ? Wt : e.elementType, r, s) : t.drawElements(i, l, a === void 0 ? Wt : e.elementType, r) : s !== void 0 ? t.drawArraysInstanced(i, r, l, s) : t.drawArrays(i, r, l);
}
function xr(t, e) {
  e = e || 1, e = Math.max(0, e);
  const i = t.clientWidth * e | 0, n = t.clientHeight * e | 0;
  return t.width !== i || t.height !== n ? (t.width = i, t.height = n, !0) : !1;
}
class wr {
  constructor(e) {
    this.gl = e, this.y = 0, this.isActive = this.canScroll, document.onscroll = (i) => this.onScroll(i);
  }
  onScroll(e) {
    this.isActive && (this.y = window.scrollY * this.gl.vp.px);
  }
  resize(e) {
    this.gl = e, this.isActive = this.canScroll, this.y = window.scrollY * this.gl.vp.px;
  }
  get canScroll() {
    return document.documentElement.scrollHeight > window.innerHeight;
  }
}
class Er {
  constructor(e, i = {
    z: -9,
    fov: 0.6,
    near: 1,
    far: 1024
  }) {
    i.fov = Tr(35), this.camera = i;
  }
  get(e) {
    return this.camera.mat = Ht.translate(
      Ht.perspective(
        this.camera.fov,
        e.canvas.width / e.canvas.height,
        this.camera.near,
        this.camera.far
      ),
      [0, 0, this.camera.z]
    ), this.camera;
  }
}
function Tr(t) {
  return t * Math.PI / 180;
}
var J = Object.freeze({
  Linear: Object.freeze({
    None: function(t) {
      return t;
    },
    In: function(t) {
      return t;
    },
    Out: function(t) {
      return t;
    },
    InOut: function(t) {
      return t;
    }
  }),
  Quadratic: Object.freeze({
    In: function(t) {
      return t * t;
    },
    Out: function(t) {
      return t * (2 - t);
    },
    InOut: function(t) {
      return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
    }
  }),
  Cubic: Object.freeze({
    In: function(t) {
      return t * t * t;
    },
    Out: function(t) {
      return --t * t * t + 1;
    },
    InOut: function(t) {
      return (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
    }
  }),
  Quartic: Object.freeze({
    In: function(t) {
      return t * t * t * t;
    },
    Out: function(t) {
      return 1 - --t * t * t * t;
    },
    InOut: function(t) {
      return (t *= 2) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
    }
  }),
  Quintic: Object.freeze({
    In: function(t) {
      return t * t * t * t * t;
    },
    Out: function(t) {
      return --t * t * t * t * t + 1;
    },
    InOut: function(t) {
      return (t *= 2) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2);
    }
  }),
  Sinusoidal: Object.freeze({
    In: function(t) {
      return 1 - Math.sin((1 - t) * Math.PI / 2);
    },
    Out: function(t) {
      return Math.sin(t * Math.PI / 2);
    },
    InOut: function(t) {
      return 0.5 * (1 - Math.sin(Math.PI * (0.5 - t)));
    }
  }),
  Exponential: Object.freeze({
    In: function(t) {
      return t === 0 ? 0 : Math.pow(1024, t - 1);
    },
    Out: function(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    },
    InOut: function(t) {
      return t === 0 ? 0 : t === 1 ? 1 : (t *= 2) < 1 ? 0.5 * Math.pow(1024, t - 1) : 0.5 * (-Math.pow(2, -10 * (t - 1)) + 2);
    }
  }),
  Circular: Object.freeze({
    In: function(t) {
      return 1 - Math.sqrt(1 - t * t);
    },
    Out: function(t) {
      return Math.sqrt(1 - --t * t);
    },
    InOut: function(t) {
      return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    }
  }),
  Elastic: Object.freeze({
    In: function(t) {
      return t === 0 ? 0 : t === 1 ? 1 : -Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1.1) * 5 * Math.PI);
    },
    Out: function(t) {
      return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t - 0.1) * 5 * Math.PI) + 1;
    },
    InOut: function(t) {
      return t === 0 ? 0 : t === 1 ? 1 : (t *= 2, t < 1 ? -0.5 * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1.1) * 5 * Math.PI) : 0.5 * Math.pow(2, -10 * (t - 1)) * Math.sin((t - 1.1) * 5 * Math.PI) + 1);
    }
  }),
  Back: Object.freeze({
    In: function(t) {
      var e = 1.70158;
      return t === 1 ? 1 : t * t * ((e + 1) * t - e);
    },
    Out: function(t) {
      var e = 1.70158;
      return t === 0 ? 0 : --t * t * ((e + 1) * t + e) + 1;
    },
    InOut: function(t) {
      var e = 2.5949095;
      return (t *= 2) < 1 ? 0.5 * (t * t * ((e + 1) * t - e)) : 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
    }
  }),
  Bounce: Object.freeze({
    In: function(t) {
      return 1 - J.Bounce.Out(1 - t);
    },
    Out: function(t) {
      return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    },
    InOut: function(t) {
      return t < 0.5 ? J.Bounce.In(t * 2) * 0.5 : J.Bounce.Out(t * 2 - 1) * 0.5 + 0.5;
    }
  }),
  generatePow: function(t) {
    return t === void 0 && (t = 4), t = t < Number.EPSILON ? Number.EPSILON : t, t = t > 1e4 ? 1e4 : t, {
      In: function(e) {
        return Math.pow(e, t);
      },
      Out: function(e) {
        return 1 - Math.pow(1 - e, t);
      },
      InOut: function(e) {
        return e < 0.5 ? Math.pow(e * 2, t) / 2 : (1 - Math.pow(2 - e * 2, t)) / 2 + 0.5;
      }
    };
  }
}), K = function() {
  return performance.now();
}, Sr = (
  /** @class */
  function() {
    function t() {
      for (var e = [], i = 0; i < arguments.length; i++)
        e[i] = arguments[i];
      this._tweens = {}, this._tweensAddedDuringUpdate = {}, this.add.apply(this, e);
    }
    return t.prototype.getAll = function() {
      var e = this;
      return Object.keys(this._tweens).map(function(i) {
        return e._tweens[i];
      });
    }, t.prototype.removeAll = function() {
      this._tweens = {};
    }, t.prototype.add = function() {
      for (var e, i = [], n = 0; n < arguments.length; n++)
        i[n] = arguments[n];
      for (var r = 0, s = i; r < s.length; r++) {
        var o = s[r];
        (e = o._group) === null || e === void 0 || e.remove(o), o._group = this, this._tweens[o.getId()] = o, this._tweensAddedDuringUpdate[o.getId()] = o;
      }
    }, t.prototype.remove = function() {
      for (var e = [], i = 0; i < arguments.length; i++)
        e[i] = arguments[i];
      for (var n = 0, r = e; n < r.length; n++) {
        var s = r[n];
        s._group = void 0, delete this._tweens[s.getId()], delete this._tweensAddedDuringUpdate[s.getId()];
      }
    }, t.prototype.allStopped = function() {
      return this.getAll().every(function(e) {
        return !e.isPlaying();
      });
    }, t.prototype.update = function(e, i) {
      e === void 0 && (e = K()), i === void 0 && (i = !0);
      var n = Object.keys(this._tweens);
      if (n.length !== 0)
        for (; n.length > 0; ) {
          this._tweensAddedDuringUpdate = {};
          for (var r = 0; r < n.length; r++) {
            var s = this._tweens[n[r]], o = !i;
            s && s.update(e, o) === !1 && !i && this.remove(s);
          }
          n = Object.keys(this._tweensAddedDuringUpdate);
        }
    }, t;
  }()
), Q = {
  Linear: function(t, e) {
    var i = t.length - 1, n = i * e, r = Math.floor(n), s = Q.Utils.Linear;
    return e < 0 ? s(t[0], t[1], n) : e > 1 ? s(t[i], t[i - 1], i - n) : s(t[r], t[r + 1 > i ? i : r + 1], n - r);
  },
  Bezier: function(t, e) {
    for (var i = 0, n = t.length - 1, r = Math.pow, s = Q.Utils.Bernstein, o = 0; o <= n; o++)
      i += r(1 - e, n - o) * r(e, o) * t[o] * s(n, o);
    return i;
  },
  CatmullRom: function(t, e) {
    var i = t.length - 1, n = i * e, r = Math.floor(n), s = Q.Utils.CatmullRom;
    return t[0] === t[i] ? (e < 0 && (r = Math.floor(n = i * (1 + e))), s(t[(r - 1 + i) % i], t[r], t[(r + 1) % i], t[(r + 2) % i], n - r)) : e < 0 ? t[0] - (s(t[0], t[0], t[1], t[1], -n) - t[0]) : e > 1 ? t[i] - (s(t[i], t[i], t[i - 1], t[i - 1], n - i) - t[i]) : s(t[r ? r - 1 : 0], t[r], t[i < r + 1 ? i : r + 1], t[i < r + 2 ? i : r + 2], n - r);
  },
  Utils: {
    Linear: function(t, e, i) {
      return (e - t) * i + t;
    },
    Bernstein: function(t, e) {
      var i = Q.Utils.Factorial;
      return i(t) / i(e) / i(t - e);
    },
    Factorial: function() {
      var t = [1];
      return function(e) {
        var i = 1;
        if (t[e])
          return t[e];
        for (var n = e; n > 1; n--)
          i *= n;
        return t[e] = i, i;
      };
    }(),
    CatmullRom: function(t, e, i, n, r) {
      var s = (i - t) * 0.5, o = (n - e) * 0.5, a = r * r, l = r * a;
      return (2 * e - 2 * i + s + o) * l + (-3 * e + 3 * i - 2 * s - o) * a + s * r + e;
    }
  }
}, Cr = (
  /** @class */
  function() {
    function t() {
    }
    return t.nextId = function() {
      return t._nextId++;
    }, t._nextId = 0, t;
  }()
), bt = new Sr(), Ir = (
  /** @class */
  function() {
    function t(e, i) {
      this._isPaused = !1, this._pauseStart = 0, this._valuesStart = {}, this._valuesEnd = {}, this._valuesStartRepeat = {}, this._duration = 1e3, this._isDynamic = !1, this._initialRepeat = 0, this._repeat = 0, this._yoyo = !1, this._isPlaying = !1, this._reversed = !1, this._delayTime = 0, this._startTime = 0, this._easingFunction = J.Linear.None, this._interpolationFunction = Q.Linear, this._chainedTweens = [], this._onStartCallbackFired = !1, this._onEveryStartCallbackFired = !1, this._id = Cr.nextId(), this._isChainStopped = !1, this._propertiesAreSetUp = !1, this._goToEnd = !1, this._object = e, typeof i == "object" ? (this._group = i, i.add(this)) : i === !0 && (this._group = bt, bt.add(this));
    }
    return t.prototype.getId = function() {
      return this._id;
    }, t.prototype.isPlaying = function() {
      return this._isPlaying;
    }, t.prototype.isPaused = function() {
      return this._isPaused;
    }, t.prototype.getDuration = function() {
      return this._duration;
    }, t.prototype.to = function(e, i) {
      if (i === void 0 && (i = 1e3), this._isPlaying)
        throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");
      return this._valuesEnd = e, this._propertiesAreSetUp = !1, this._duration = i < 0 ? 0 : i, this;
    }, t.prototype.duration = function(e) {
      return e === void 0 && (e = 1e3), this._duration = e < 0 ? 0 : e, this;
    }, t.prototype.dynamic = function(e) {
      return e === void 0 && (e = !1), this._isDynamic = e, this;
    }, t.prototype.start = function(e, i) {
      if (e === void 0 && (e = K()), i === void 0 && (i = !1), this._isPlaying)
        return this;
      if (this._repeat = this._initialRepeat, this._reversed) {
        this._reversed = !1;
        for (var n in this._valuesStartRepeat)
          this._swapEndStartRepeatValues(n), this._valuesStart[n] = this._valuesStartRepeat[n];
      }
      if (this._isPlaying = !0, this._isPaused = !1, this._onStartCallbackFired = !1, this._onEveryStartCallbackFired = !1, this._isChainStopped = !1, this._startTime = e, this._startTime += this._delayTime, !this._propertiesAreSetUp || i) {
        if (this._propertiesAreSetUp = !0, !this._isDynamic) {
          var r = {};
          for (var s in this._valuesEnd)
            r[s] = this._valuesEnd[s];
          this._valuesEnd = r;
        }
        this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat, i);
      }
      return this;
    }, t.prototype.startFromCurrentValues = function(e) {
      return this.start(e, !0);
    }, t.prototype._setupProperties = function(e, i, n, r, s) {
      for (var o in n) {
        var a = e[o], l = Array.isArray(a), c = l ? "array" : typeof a, u = !l && Array.isArray(n[o]);
        if (!(c === "undefined" || c === "function")) {
          if (u) {
            var h = n[o];
            if (h.length === 0)
              continue;
            for (var f = [a], g = 0, m = h.length; g < m; g += 1) {
              var _ = this._handleRelativeValue(a, h[g]);
              if (isNaN(_)) {
                u = !1, console.warn("Found invalid interpolation list. Skipping.");
                break;
              }
              f.push(_);
            }
            u && (n[o] = f);
          }
          if ((c === "object" || l) && a && !u) {
            i[o] = l ? [] : {};
            var y = a;
            for (var d in y)
              i[o][d] = y[d];
            r[o] = l ? [] : {};
            var h = n[o];
            if (!this._isDynamic) {
              var p = {};
              for (var d in h)
                p[d] = h[d];
              n[o] = h = p;
            }
            this._setupProperties(y, i[o], h, r[o], s);
          } else
            (typeof i[o] > "u" || s) && (i[o] = a), l || (i[o] *= 1), u ? r[o] = n[o].slice().reverse() : r[o] = i[o] || 0;
        }
      }
    }, t.prototype.stop = function() {
      return this._isChainStopped || (this._isChainStopped = !0, this.stopChainedTweens()), this._isPlaying ? (this._isPlaying = !1, this._isPaused = !1, this._onStopCallback && this._onStopCallback(this._object), this) : this;
    }, t.prototype.end = function() {
      return this._goToEnd = !0, this.update(this._startTime + this._duration), this;
    }, t.prototype.pause = function(e) {
      return e === void 0 && (e = K()), this._isPaused || !this._isPlaying ? this : (this._isPaused = !0, this._pauseStart = e, this);
    }, t.prototype.resume = function(e) {
      return e === void 0 && (e = K()), !this._isPaused || !this._isPlaying ? this : (this._isPaused = !1, this._startTime += e - this._pauseStart, this._pauseStart = 0, this);
    }, t.prototype.stopChainedTweens = function() {
      for (var e = 0, i = this._chainedTweens.length; e < i; e++)
        this._chainedTweens[e].stop();
      return this;
    }, t.prototype.group = function(e) {
      return e ? (e.add(this), this) : (console.warn("tween.group() without args has been removed, use group.add(tween) instead."), this);
    }, t.prototype.remove = function() {
      var e;
      return (e = this._group) === null || e === void 0 || e.remove(this), this;
    }, t.prototype.delay = function(e) {
      return e === void 0 && (e = 0), this._delayTime = e, this;
    }, t.prototype.repeat = function(e) {
      return e === void 0 && (e = 0), this._initialRepeat = e, this._repeat = e, this;
    }, t.prototype.repeatDelay = function(e) {
      return this._repeatDelayTime = e, this;
    }, t.prototype.yoyo = function(e) {
      return e === void 0 && (e = !1), this._yoyo = e, this;
    }, t.prototype.easing = function(e) {
      return e === void 0 && (e = J.Linear.None), this._easingFunction = e, this;
    }, t.prototype.interpolation = function(e) {
      return e === void 0 && (e = Q.Linear), this._interpolationFunction = e, this;
    }, t.prototype.chain = function() {
      for (var e = [], i = 0; i < arguments.length; i++)
        e[i] = arguments[i];
      return this._chainedTweens = e, this;
    }, t.prototype.onStart = function(e) {
      return this._onStartCallback = e, this;
    }, t.prototype.onEveryStart = function(e) {
      return this._onEveryStartCallback = e, this;
    }, t.prototype.onUpdate = function(e) {
      return this._onUpdateCallback = e, this;
    }, t.prototype.onRepeat = function(e) {
      return this._onRepeatCallback = e, this;
    }, t.prototype.onComplete = function(e) {
      return this._onCompleteCallback = e, this;
    }, t.prototype.onStop = function(e) {
      return this._onStopCallback = e, this;
    }, t.prototype.update = function(e, i) {
      var n = this, r;
      if (e === void 0 && (e = K()), i === void 0 && (i = t.autoStartOnUpdate), this._isPaused)
        return !0;
      var s;
      if (!this._goToEnd && !this._isPlaying)
        if (i)
          this.start(e, !0);
        else
          return !1;
      if (this._goToEnd = !1, e < this._startTime)
        return !0;
      this._onStartCallbackFired === !1 && (this._onStartCallback && this._onStartCallback(this._object), this._onStartCallbackFired = !0), this._onEveryStartCallbackFired === !1 && (this._onEveryStartCallback && this._onEveryStartCallback(this._object), this._onEveryStartCallbackFired = !0);
      var o = e - this._startTime, a = this._duration + ((r = this._repeatDelayTime) !== null && r !== void 0 ? r : this._delayTime), l = this._duration + this._repeat * a, c = function() {
        if (n._duration === 0 || o > l)
          return 1;
        var _ = Math.trunc(o / a), y = o - _ * a, d = Math.min(y / n._duration, 1);
        return d === 0 && o === n._duration ? 1 : d;
      }, u = c(), h = this._easingFunction(u);
      if (this._updateProperties(this._object, this._valuesStart, this._valuesEnd, h), this._onUpdateCallback && this._onUpdateCallback(this._object, u), this._duration === 0 || o >= this._duration)
        if (this._repeat > 0) {
          var f = Math.min(Math.trunc((o - this._duration) / a) + 1, this._repeat);
          isFinite(this._repeat) && (this._repeat -= f);
          for (s in this._valuesStartRepeat)
            !this._yoyo && typeof this._valuesEnd[s] == "string" && (this._valuesStartRepeat[s] = // eslint-disable-next-line
            // @ts-ignore FIXME?
            this._valuesStartRepeat[s] + parseFloat(this._valuesEnd[s])), this._yoyo && this._swapEndStartRepeatValues(s), this._valuesStart[s] = this._valuesStartRepeat[s];
          return this._yoyo && (this._reversed = !this._reversed), this._startTime += a * f, this._onRepeatCallback && this._onRepeatCallback(this._object), this._onEveryStartCallbackFired = !1, !0;
        } else {
          this._onCompleteCallback && this._onCompleteCallback(this._object);
          for (var g = 0, m = this._chainedTweens.length; g < m; g++)
            this._chainedTweens[g].start(this._startTime + this._duration, !1);
          return this._isPlaying = !1, !1;
        }
      return !0;
    }, t.prototype._updateProperties = function(e, i, n, r) {
      for (var s in n)
        if (i[s] !== void 0) {
          var o = i[s] || 0, a = n[s], l = Array.isArray(e[s]), c = Array.isArray(a), u = !l && c;
          u ? e[s] = this._interpolationFunction(a, r) : typeof a == "object" && a ? this._updateProperties(e[s], o, a, r) : (a = this._handleRelativeValue(o, a), typeof a == "number" && (e[s] = o + (a - o) * r));
        }
    }, t.prototype._handleRelativeValue = function(e, i) {
      return typeof i != "string" ? i : i.charAt(0) === "+" || i.charAt(0) === "-" ? e + parseFloat(i) : parseFloat(i);
    }, t.prototype._swapEndStartRepeatValues = function(e) {
      var i = this._valuesStartRepeat[e], n = this._valuesEnd[e];
      typeof n == "string" ? this._valuesStartRepeat[e] = this._valuesStartRepeat[e] + parseFloat(n) : this._valuesStartRepeat[e] = this._valuesEnd[e], this._valuesEnd[e] = i;
    }, t.autoStartOnUpdate = !1, t;
  }()
), V = bt;
V.getAll.bind(V);
V.removeAll.bind(V);
V.add.bind(V);
V.remove.bind(V);
V.update.bind(V);
var Fr = `attribute vec4 position;

varying vec2 v_xy;

void main() {\r
  gl_Position = position;\r
  v_xy = position.xy;\r
}`, Pr = `precision mediump float;

uniform vec2 u_res;\r
uniform float u_time;\r
uniform vec2 u_mouse;\r
varying vec2 v_xy;

uniform vec4 u_params;\r
uniform vec3 u_params2;\r
uniform vec4 u_altparams;

uniform float u_bw;

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

vec3 colorShift( vec3 color, vec3 color2, float time ) {

  vec3 cmix = mix(color, color2, time);

  return cmix;

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
 float NOISE_FACTOR = u_params2.z;

 float BW = mix(u_bw, u_altparams.y, u_swap); 

  
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

  

  vec3 current_color = mix(u_color, u_color2, u_swap);

  vec3 col = palette(\r
    u_time + cos((m_uv.x) + (m_uv.y)), \r
    col1, col2, col2, current_color\r
  );

  col = current_color;

  
  float dist = distance(m_uv, u_mouse * SCALE/2.);\r
  \r
  dist = 1. - dist;\r
  dist = smoothstep(.3, 1., dist);\r

  vec3 shift_col = colorShift(u_color, u_color2, sin(u_time * MPI));\r
     

  col = mix(\r
    col, \r
    shift_col * col + (dist * MOUSE_BRIGHTNESS), \r
    dist\r
  );

 \r
  
  
  col *= BRIGHTNESS;

  float bw_col = (col.r + col.g + col.b) * .3;

  float bw_mix = BW * ( u_time + cos((m_uv.x) + (m_uv.y)) );

  col = mix(col, vec3(bw_col), BW);

  

  if (u_mode > .5) {\r
    col = vec3(1.) - col;\r
  }\r

  gl_FragColor.rgb =  col;\r
  gl_FragColor.a = 1.;\r
}`;
const zr = [Fr, Pr];
class Rr {
  constructor(e, i = {}) {
    this.gl = e, this.data = i, this.shaders = zr, this.programInfo = Le(this.gl, this.shaders), this.tween = null, this.a = {
      mode: 0,
      swap: 0
    }, this.gl.useProgram(this.programInfo.program), this.setBuffAtt(), this.setUniforms();
  }
  setBuffAtt() {
    const e = {
      position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0]
    };
    this.bufferInfo = he(this.gl, e);
  }
  applyPreset(e) {
    this.data = e, this.setUniforms(), console.log("Current background params:", this.data);
  }
  tweenTo(e, i) {
    let n = {}, r = {};
    for (const s in this.data)
      this.data.hasOwnProperty(s) && (s.includes("color") ? (typeof this.data[s] == "string" ? n[s] = this.hexToRgbObject(this.data[s]) : typeof this.data[s] == "object" && (n[s] = this.data[s]), typeof e[s] == "string" ? r[s] = this.hexToRgbObject(e[s]) : this.data[s]) : (n[s] = this.data[s], r[s] = e[s]));
    console.log(r), this.data = n, this.tween = new Ir(this.data).to(r, i).onUpdate(() => {
      this.setUniforms();
    }).start();
  }
  hexToRgbObject(e) {
    let i = e.startsWith("#") ? e.slice(1) : e;
    i.length === 3 && (i = i[0] + i[0] + i[1] + i[1] + i[2] + i[2]);
    const n = parseInt(i.substring(0, 2), 16) / 255, r = parseInt(i.substring(2, 4), 16) / 255, s = parseInt(i.substring(4, 6), 16) / 255;
    return { r: n, g: r, b: s };
  }
  hexToRgb(e) {
    let i = e.startsWith("#") ? e.slice(1) : e;
    i.length === 3 && (i = i[0] + i[0] + i[1] + i[1] + i[2] + i[2]);
    const n = parseInt(i.substring(0, 2), 16) / 255, r = parseInt(i.substring(2, 4), 16) / 255, s = parseInt(i.substring(4, 6), 16) / 255;
    return [n, r, s];
  }
  objectToArray(e) {
    let i = [];
    for (const n in e)
      i.push(e[n]);
    return i;
  }
  setUniform(e, i) {
    this.uniforms.u_bw = i, this.gl.useProgram(this.programInfo.program), Y(this.programInfo, this.uniforms);
  }
  setUniforms() {
    let e, i;
    typeof this.data.color == "string" ? (e = this.hexToRgb(this.data.color), i = this.hexToRgb(this.data.color2)) : typeof this.data.color == "object" && (e = this.objectToArray(this.data.color), i = this.objectToArray(this.data.color2)), this.uniforms = {
      u_res: [this.gl.canvas.width, this.gl.canvas.height],
      u_time: 0,
      u_params: [this.data.multx, this.data.multy, this.data.hue, this.data.brightness],
      u_params2: [this.data.mouse, this.data.scale, this.data.noise],
      u_altparams: [this.data.scale2, this.data.bw2, 0, 0],
      u_bw: this.data.bw,
      u_color: e,
      u_color2: i,
      u_mode: this.a.mode,
      u_swap: this.a.swap
    }, this.gl.useProgram(this.programInfo.program), Y(this.programInfo, this.uniforms);
  }
  render(e, { x: i, y: n }) {
    this.tween && this.tween.update(), this.gl.useProgram(this.programInfo.program), Ue(this.gl, this.programInfo, this.bufferInfo), Y(this.programInfo, {
      u_time: e * this.data.time,
      u_mouse: [i, n],
      u_mode: this.a.mode,
      u_swap: this.a.swap
    }), Oe(this.gl, this.bufferInfo);
  }
  resize(e) {
    this.gl = e, this.gl.useProgram(this.programInfo.program), Y(this.programInfo, {
      u_res: [this.gl.canvas.width, this.gl.canvas.height]
    });
  }
  mode(e) {
    e === "light" ? this.a.mode = 1 : e === "dark" ? this.a.mode = 0 : this.a.mode === 0 ? this.a.mode = 1 : this.a.mode = 0, console.log(e, this.uniforms.u_mode), this.setUniforms();
  }
  swap(e, { d: i }) {
    e === 0 || e === 1 || this.a.swap, this.setUniforms();
  }
}
class Mr {
  constructor(e, i, n) {
    this.gl = e, this.params = i, this.preset = n, this.computeParams(), this.events(), this.create();
  }
  events() {
    this.mouse = { x: 0, y: 0, wx: window.innerWidth, wy: window.innerHeight }, document.addEventListener("mousemove", (e) => {
      this.mouse.x = e.clientX / this.mouse.wx * 2 - 1, this.mouse.y = -(e.clientY / this.mouse.wy) * 2 + 1;
    });
  }
  create() {
    this.data = this.params[this.preset], this.quad = new Rr(this.gl, this.data);
  }
  setNewParams(e) {
    this.params = e, this.applyPreset(this.preset);
  }
  applyPreset(e) {
    this.preset = e, this.data = this.params[e], this.quad.applyPreset(this.data);
  }
  render(e, i) {
    this.quad && this.quad.render(e, this.mouse);
  }
  resize(e) {
    this.gl = e, this.mouse.wx = window.innerWidth, this.mouse.wy = window.innerHeight, this.quad && this.quad.resize(this.gl);
  }
  computeParams() {
    document.querySelector('[data-gradient="wrapper"]'), console.log(this.params);
  }
}
var $r = `attribute vec4 position;

void main() {\r
  vec4 pos = position;\r
  gl_Position = position;\r
}`, kr = `precision mediump float;

uniform vec2 u_res;\r
uniform float u_time;

uniform sampler2D u_diff;

void main() {\r
  vec2 uv = gl_FragCoord.xy / u_res;

  vec3 img = texture2D(u_diff, uv).rgb;

  

  gl_FragColor.rgb = img.rgb;\r
  gl_FragColor.a = 1.;\r
}`;
const Br = [$r, kr];
class Dr {
  constructor(e, i = {}) {
    this.gl = e, this.data = i, this.shaders = Br, this.programInfo = Le(this.gl, this.shaders), this.gl.useProgram(this.programInfo.program), this.setBuffAtt(), this.setUniforms();
  }
  setBuffAtt() {
    const e = {
      position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0]
    };
    this.bufferInfo = he(this.gl, e);
  }
  setUniforms() {
    this.uniforms = {
      u_res: [this.gl.canvas.width, this.gl.canvas.height],
      u_time: 0
      //  u_diff: null
    }, this.gl.useProgram(this.programInfo.program), Y(this.programInfo, this.uniforms);
  }
  render(e, i = null) {
    this.gl.useProgram(this.programInfo.program), Ue(this.gl, this.programInfo, this.bufferInfo), Y(this.programInfo, {
      u_time: e,
      u_diff: i
    }), Oe(this.gl, this.bufferInfo);
  }
  resize(e) {
    this.gl = e, this.gl.useProgram(this.programInfo.program), Y(this.programInfo, {
      u_res: [this.gl.canvas.width, this.gl.canvas.height]
    });
  }
}
class Ur {
  constructor(e) {
    this.gl = e;
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
    this.quad = new Dr(this.gl);
  }
  /**
   * Render Ops
   */
  setupRender() {
    this.isActive && (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbi), this.gl.clear(this.gl.COLOR_BUFFER_BIT || this.gl.DEPTH_BUFFER_BIT));
  }
  render(e) {
    this.isActive && (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null), this.quad && this.quad.render(e, this.texture));
  }
  resize(e) {
    this.gl = e, this.create(), this.quad && this.quad.resize(this.gl);
  }
}
class Lr {
  constructor(e, i, n) {
    this.params = i, this.preset = n, this.canvas = document.getElementById(e), this.gl = this.canvas.getContext("webgl"), this.gl.clearColor(0.04, 0.04, 0.04, 1), this.gl.vp = { dpr: Math.min(window.devicePixelRatio, 2) }, this.camera = new Er(this.gl), this.gl.camera = this.camera.get(this.gl), new ResizeObserver((r) => this.resize(r[0].contentRect)).observe(this.canvas), this.resize(), this.scroll = new wr(this.gl), this.time = 0, this.create(), this.render(), this.resize();
  }
  create() {
    this.post = new Ur(this.gl), this.post.isActive = !1, this.scene = new Mr(this.gl, this.params, this.preset), window.dispatchEvent(new Event("gradientReady"));
  }
  applyPreset(e) {
    this.scene.applyPreset(e);
  }
  render() {
    this.time += 0.01, this.gl.clear(this.gl.COLOR_BUFFER_BIT || this.gl.DEPTH_BUFFER_BIT), this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height), this.post && this.post.isActive && this.post.setupRender(), this.scene && this.scene.render(this.time, this.scroll.y), this.post && this.post.isActive && this.post.render(this.time), requestAnimationFrame(this.render.bind(this));
  }
  resize() {
    xr(this.gl.canvas, this.gl.vp.dpr), this.gl.vp = {
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
    const e = Math.abs(this.gl.camera.z * Math.tan(this.gl.camera.fov / 2) * 2);
    return [e * (this.gl.canvas.width / this.gl.canvas.height), e];
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
class N {
  constructor(e, i, n, r, s = "div") {
    this.parent = e, this.object = i, this.property = n, this._disabled = !1, this._hidden = !1, this.initialValue = this.getValue(), this.domElement = document.createElement("div"), this.domElement.classList.add("controller"), this.domElement.classList.add(r), this.$name = document.createElement("div"), this.$name.classList.add("name"), N.nextNameID = N.nextNameID || 0, this.$name.id = `lil-gui-name-${++N.nextNameID}`, this.$widget = document.createElement(s), this.$widget.classList.add("widget"), this.$disable = this.$widget, this.domElement.appendChild(this.$name), this.domElement.appendChild(this.$widget), this.domElement.addEventListener("keydown", (o) => o.stopPropagation()), this.domElement.addEventListener("keyup", (o) => o.stopPropagation()), this.parent.children.push(this), this.parent.controllers.push(this), this.parent.$children.appendChild(this.domElement), this._listenCallback = this._listenCallback.bind(this), this.name(n);
  }
  /**
   * Sets the name of the controller and its label in the GUI.
   * @param {string} name
   * @returns {this}
   */
  name(e) {
    return this._name = e, this.$name.innerHTML = e, this;
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
  onChange(e) {
    return this._onChange = e, this;
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
  onFinishChange(e) {
    return this._onFinishChange = e, this;
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
  enable(e = !0) {
    return this.disable(!e);
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
  disable(e = !0) {
    return e === this._disabled ? this : (this._disabled = e, this.domElement.classList.toggle("disabled", e), this.$disable.toggleAttribute("disabled", e), this);
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
  show(e = !0) {
    return this._hidden = !e, this.domElement.style.display = this._hidden ? "none" : "", this;
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
  options(e) {
    const i = this.parent.add(this.object, this.property, e);
    return i.name(this._name), this.destroy(), i;
  }
  /**
   * Sets the minimum value. Only works on number controllers.
   * @param {number} min
   * @returns {this}
   */
  min(e) {
    return this;
  }
  /**
   * Sets the maximum value. Only works on number controllers.
   * @param {number} max
   * @returns {this}
   */
  max(e) {
    return this;
  }
  /**
   * Values set by this controller will be rounded to multiples of `step`. Only works on number
   * controllers.
   * @param {number} step
   * @returns {this}
   */
  step(e) {
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
  decimals(e) {
    return this;
  }
  /**
   * Calls `updateDisplay()` every animation frame. Pass `false` to stop listening.
   * @param {boolean} listen
   * @returns {this}
   */
  listen(e = !0) {
    return this._listening = e, this._listenCallbackID !== void 0 && (cancelAnimationFrame(this._listenCallbackID), this._listenCallbackID = void 0), this._listening && this._listenCallback(), this;
  }
  _listenCallback() {
    this._listenCallbackID = requestAnimationFrame(this._listenCallback);
    const e = this.save();
    e !== this._listenPrevValue && this.updateDisplay(), this._listenPrevValue = e;
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
  setValue(e) {
    return this.object[this.property] = e, this._callOnChange(), this.updateDisplay(), this;
  }
  /**
   * Updates the display to keep it in sync with the current value. Useful for updating your
   * controllers when their values have been modified outside of the GUI.
   * @returns {this}
   */
  updateDisplay() {
    return this;
  }
  load(e) {
    return this.setValue(e), this._callOnFinishChange(), this;
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
class Or extends N {
  constructor(e, i, n) {
    super(e, i, n, "boolean", "label"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "checkbox"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$input.addEventListener("change", () => {
      this.setValue(this.$input.checked), this._callOnFinishChange();
    }), this.$disable = this.$input, this.updateDisplay();
  }
  updateDisplay() {
    return this.$input.checked = this.getValue(), this;
  }
}
function xt(t) {
  let e, i;
  return (e = t.match(/(#|0x)?([a-f0-9]{6})/i)) ? i = e[2] : (e = t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/)) ? i = parseInt(e[1]).toString(16).padStart(2, 0) + parseInt(e[2]).toString(16).padStart(2, 0) + parseInt(e[3]).toString(16).padStart(2, 0) : (e = t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) && (i = e[1] + e[1] + e[2] + e[2] + e[3] + e[3]), i ? "#" + i : !1;
}
const Nr = {
  isPrimitive: !0,
  match: (t) => typeof t == "string",
  fromHexString: xt,
  toHexString: xt
}, tt = {
  isPrimitive: !0,
  match: (t) => typeof t == "number",
  fromHexString: (t) => parseInt(t.substring(1), 16),
  toHexString: (t) => "#" + t.toString(16).padStart(6, 0)
}, Vr = {
  isPrimitive: !1,
  // The arrow function is here to appease tree shakers like esbuild or webpack.
  // See https://esbuild.github.io/api/#tree-shaking
  match: (t) => Array.isArray(t),
  fromHexString(t, e, i = 1) {
    const n = tt.fromHexString(t);
    e[0] = (n >> 16 & 255) / 255 * i, e[1] = (n >> 8 & 255) / 255 * i, e[2] = (n & 255) / 255 * i;
  },
  toHexString([t, e, i], n = 1) {
    n = 255 / n;
    const r = t * n << 16 ^ e * n << 8 ^ i * n << 0;
    return tt.toHexString(r);
  }
}, Gr = {
  isPrimitive: !1,
  match: (t) => Object(t) === t,
  fromHexString(t, e, i = 1) {
    const n = tt.fromHexString(t);
    e.r = (n >> 16 & 255) / 255 * i, e.g = (n >> 8 & 255) / 255 * i, e.b = (n & 255) / 255 * i;
  },
  toHexString({ r: t, g: e, b: i }, n = 1) {
    n = 255 / n;
    const r = t * n << 16 ^ e * n << 8 ^ i * n << 0;
    return tt.toHexString(r);
  }
}, Hr = [Nr, tt, Vr, Gr];
function Yr(t) {
  return Hr.find((e) => e.match(t));
}
class jr extends N {
  constructor(e, i, n, r) {
    super(e, i, n, "color"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "color"), this.$input.setAttribute("tabindex", -1), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$text = document.createElement("input"), this.$text.setAttribute("type", "text"), this.$text.setAttribute("spellcheck", "false"), this.$text.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this.$display.appendChild(this.$input), this.$widget.appendChild(this.$display), this.$widget.appendChild(this.$text), this._format = Yr(this.initialValue), this._rgbScale = r, this._initialValueHexString = this.save(), this._textFocused = !1, this.$input.addEventListener("input", () => {
      this._setValueFromHexString(this.$input.value);
    }), this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    }), this.$text.addEventListener("input", () => {
      const s = xt(this.$text.value);
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
  _setValueFromHexString(e) {
    if (this._format.isPrimitive) {
      const i = this._format.fromHexString(e);
      this.setValue(i);
    } else
      this._format.fromHexString(e, this.getValue(), this._rgbScale), this._callOnChange(), this.updateDisplay();
  }
  save() {
    return this._format.toHexString(this.getValue(), this._rgbScale);
  }
  load(e) {
    return this._setValueFromHexString(e), this._callOnFinishChange(), this;
  }
  updateDisplay() {
    return this.$input.value = this._format.toHexString(this.getValue(), this._rgbScale), this._textFocused || (this.$text.value = this.$input.value.substring(1)), this.$display.style.backgroundColor = this.$input.value, this;
  }
}
class yt extends N {
  constructor(e, i, n) {
    super(e, i, n, "function"), this.$button = document.createElement("button"), this.$button.appendChild(this.$name), this.$widget.appendChild(this.$button), this.$button.addEventListener("click", (r) => {
      r.preventDefault(), this.getValue().call(this.object), this._callOnChange();
    }), this.$button.addEventListener("touchstart", () => {
    }, { passive: !0 }), this.$disable = this.$button;
  }
}
class Xr extends N {
  constructor(e, i, n, r, s, o) {
    super(e, i, n, "number"), this._initInput(), this.min(r), this.max(s);
    const a = o !== void 0;
    this.step(a ? o : this._getImplicitStep(), a), this.updateDisplay();
  }
  decimals(e) {
    return this._decimals = e, this.updateDisplay(), this;
  }
  min(e) {
    return this._min = e, this._onUpdateMinMax(), this;
  }
  max(e) {
    return this._max = e, this._onUpdateMinMax(), this;
  }
  step(e, i = !0) {
    return this._step = e, this._stepExplicit = i, this;
  }
  updateDisplay() {
    const e = this.getValue();
    if (this._hasSlider) {
      let i = (e - this._min) / (this._max - this._min);
      i = Math.max(0, Math.min(i, 1)), this.$fill.style.width = i * 100 + "%";
    }
    return this._inputFocused || (this.$input.value = this._decimals === void 0 ? e : e.toFixed(this._decimals)), this;
  }
  _initInput() {
    this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("aria-labelledby", this.$name.id), window.matchMedia("(pointer: coarse)").matches && (this.$input.setAttribute("type", "number"), this.$input.setAttribute("step", "any")), this.$widget.appendChild(this.$input), this.$disable = this.$input;
    const i = () => {
      let p = parseFloat(this.$input.value);
      isNaN(p) || (this._stepExplicit && (p = this._snap(p)), this.setValue(this._clamp(p)));
    }, n = (p) => {
      const A = parseFloat(this.$input.value);
      isNaN(A) || (this._snapClampSetValue(A + p), this.$input.value = this.getValue());
    }, r = (p) => {
      p.key === "Enter" && this.$input.blur(), p.code === "ArrowUp" && (p.preventDefault(), n(this._step * this._arrowKeyMultiplier(p))), p.code === "ArrowDown" && (p.preventDefault(), n(this._step * this._arrowKeyMultiplier(p) * -1));
    }, s = (p) => {
      this._inputFocused && (p.preventDefault(), n(this._step * this._normalizeMouseWheel(p)));
    };
    let o = !1, a, l, c, u, h;
    const f = 5, g = (p) => {
      a = p.clientX, l = c = p.clientY, o = !0, u = this.getValue(), h = 0, window.addEventListener("mousemove", m), window.addEventListener("mouseup", _);
    }, m = (p) => {
      if (o) {
        const A = p.clientX - a, x = p.clientY - l;
        Math.abs(x) > f ? (p.preventDefault(), this.$input.blur(), o = !1, this._setDraggingStyle(!0, "vertical")) : Math.abs(A) > f && _();
      }
      if (!o) {
        const A = p.clientY - c;
        h -= A * this._step * this._arrowKeyMultiplier(p), u + h > this._max ? h = this._max - u : u + h < this._min && (h = this._min - u), this._snapClampSetValue(u + h);
      }
      c = p.clientY;
    }, _ = () => {
      this._setDraggingStyle(!1, "vertical"), this._callOnFinishChange(), window.removeEventListener("mousemove", m), window.removeEventListener("mouseup", _);
    }, y = () => {
      this._inputFocused = !0;
    }, d = () => {
      this._inputFocused = !1, this.updateDisplay(), this._callOnFinishChange();
    };
    this.$input.addEventListener("input", i), this.$input.addEventListener("keydown", r), this.$input.addEventListener("wheel", s, { passive: !1 }), this.$input.addEventListener("mousedown", g), this.$input.addEventListener("focus", y), this.$input.addEventListener("blur", d);
  }
  _initSlider() {
    this._hasSlider = !0, this.$slider = document.createElement("div"), this.$slider.classList.add("slider"), this.$fill = document.createElement("div"), this.$fill.classList.add("fill"), this.$slider.appendChild(this.$fill), this.$widget.insertBefore(this.$slider, this.$input), this.domElement.classList.add("hasSlider");
    const e = (d, p, A, x, E) => (d - p) / (A - p) * (E - x) + x, i = (d) => {
      const p = this.$slider.getBoundingClientRect();
      let A = e(d, p.left, p.right, this._min, this._max);
      this._snapClampSetValue(A);
    }, n = (d) => {
      this._setDraggingStyle(!0), i(d.clientX), window.addEventListener("mousemove", r), window.addEventListener("mouseup", s);
    }, r = (d) => {
      i(d.clientX);
    }, s = () => {
      this._callOnFinishChange(), this._setDraggingStyle(!1), window.removeEventListener("mousemove", r), window.removeEventListener("mouseup", s);
    };
    let o = !1, a, l;
    const c = (d) => {
      d.preventDefault(), this._setDraggingStyle(!0), i(d.touches[0].clientX), o = !1;
    }, u = (d) => {
      d.touches.length > 1 || (this._hasScrollBar ? (a = d.touches[0].clientX, l = d.touches[0].clientY, o = !0) : c(d), window.addEventListener("touchmove", h, { passive: !1 }), window.addEventListener("touchend", f));
    }, h = (d) => {
      if (o) {
        const p = d.touches[0].clientX - a, A = d.touches[0].clientY - l;
        Math.abs(p) > Math.abs(A) ? c(d) : (window.removeEventListener("touchmove", h), window.removeEventListener("touchend", f));
      } else
        d.preventDefault(), i(d.touches[0].clientX);
    }, f = () => {
      this._callOnFinishChange(), this._setDraggingStyle(!1), window.removeEventListener("touchmove", h), window.removeEventListener("touchend", f);
    }, g = this._callOnFinishChange.bind(this), m = 400;
    let _;
    const y = (d) => {
      if (Math.abs(d.deltaX) < Math.abs(d.deltaY) && this._hasScrollBar)
        return;
      d.preventDefault();
      const A = this._normalizeMouseWheel(d) * this._step;
      this._snapClampSetValue(this.getValue() + A), this.$input.value = this.getValue(), clearTimeout(_), _ = setTimeout(g, m);
    };
    this.$slider.addEventListener("mousedown", n), this.$slider.addEventListener("touchstart", u, { passive: !1 }), this.$slider.addEventListener("wheel", y, { passive: !1 });
  }
  _setDraggingStyle(e, i = "horizontal") {
    this.$slider && this.$slider.classList.toggle("active", e), document.body.classList.toggle("lil-gui-dragging", e), document.body.classList.toggle(`lil-gui-${i}`, e);
  }
  _getImplicitStep() {
    return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : 0.1;
  }
  _onUpdateMinMax() {
    !this._hasSlider && this._hasMin && this._hasMax && (this._stepExplicit || this.step(this._getImplicitStep(), !1), this._initSlider(), this.updateDisplay());
  }
  _normalizeMouseWheel(e) {
    let { deltaX: i, deltaY: n } = e;
    return Math.floor(e.deltaY) !== e.deltaY && e.wheelDelta && (i = 0, n = -e.wheelDelta / 120, n *= this._stepExplicit ? 1 : 10), i + -n;
  }
  _arrowKeyMultiplier(e) {
    let i = this._stepExplicit ? 1 : 10;
    return e.shiftKey ? i *= 10 : e.altKey && (i /= 10), i;
  }
  _snap(e) {
    const i = Math.round(e / this._step) * this._step;
    return parseFloat(i.toPrecision(15));
  }
  _clamp(e) {
    return e < this._min && (e = this._min), e > this._max && (e = this._max), e;
  }
  _snapClampSetValue(e) {
    this.setValue(this._clamp(this._snap(e)));
  }
  get _hasScrollBar() {
    const e = this.parent.root.$children;
    return e.scrollHeight > e.clientHeight;
  }
  get _hasMin() {
    return this._min !== void 0;
  }
  get _hasMax() {
    return this._max !== void 0;
  }
}
class Wr extends N {
  constructor(e, i, n, r) {
    super(e, i, n, "option"), this.$select = document.createElement("select"), this.$select.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this._values = Array.isArray(r) ? r : Object.values(r), this._names = Array.isArray(r) ? r : Object.keys(r), this._names.forEach((s) => {
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
    const e = this.getValue(), i = this._values.indexOf(e);
    return this.$select.selectedIndex = i, this.$display.innerHTML = i === -1 ? e : this._names[i], this;
  }
}
class qr extends N {
  constructor(e, i, n) {
    super(e, i, n, "string"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$input.addEventListener("input", () => {
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
const Qr = `.lil-gui {
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
function Kr(t) {
  const e = document.createElement("style");
  e.innerHTML = t;
  const i = document.querySelector("head link[rel=stylesheet], head style");
  i ? document.head.insertBefore(e, i) : document.head.appendChild(e);
}
let qt = !1;
class Dt {
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
    parent: e,
    autoPlace: i = e === void 0,
    container: n,
    width: r,
    title: s = "Controls",
    closeFolders: o = !1,
    injectStyles: a = !0,
    touchStyles: l = !0
  } = {}) {
    if (this.parent = e, this.root = e ? e.root : this, this.children = [], this.controllers = [], this.folders = [], this._closed = !1, this._hidden = !1, this.domElement = document.createElement("div"), this.domElement.classList.add("lil-gui"), this.$title = document.createElement("div"), this.$title.classList.add("title"), this.$title.setAttribute("role", "button"), this.$title.setAttribute("aria-expanded", !0), this.$title.setAttribute("tabindex", 0), this.$title.addEventListener("click", () => this.openAnimated(this._closed)), this.$title.addEventListener("keydown", (c) => {
      (c.code === "Enter" || c.code === "Space") && (c.preventDefault(), this.$title.click());
    }), this.$title.addEventListener("touchstart", () => {
    }, { passive: !0 }), this.$children = document.createElement("div"), this.$children.classList.add("children"), this.domElement.appendChild(this.$title), this.domElement.appendChild(this.$children), this.title(s), this.parent) {
      this.parent.children.push(this), this.parent.folders.push(this), this.parent.$children.appendChild(this.domElement);
      return;
    }
    this.domElement.classList.add("root"), l && this.domElement.classList.add("allow-touch-styles"), !qt && a && (Kr(Qr), qt = !0), n ? n.appendChild(this.domElement) : i && (this.domElement.classList.add("autoPlace"), document.body.appendChild(this.domElement)), r && this.domElement.style.setProperty("--width", r + "px"), this._closeFolders = o;
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
  add(e, i, n, r, s) {
    if (Object(n) === n)
      return new Wr(this, e, i, n);
    const o = e[i];
    switch (typeof o) {
      case "number":
        return new Xr(this, e, i, n, r, s);
      case "boolean":
        return new Or(this, e, i);
      case "string":
        return new qr(this, e, i);
      case "function":
        return new yt(this, e, i);
    }
    console.error(`gui.add failed
	property:`, i, `
	object:`, e, `
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
  addColor(e, i, n = 1) {
    return new jr(this, e, i, n);
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
  addFolder(e) {
    const i = new Dt({ parent: this, title: e });
    return this.root._closeFolders && i.close(), i;
  }
  /**
   * Recalls values that were saved with `gui.save()`.
   * @param {object} obj
   * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
   * @returns {this}
   */
  load(e, i = !0) {
    return e.controllers && this.controllers.forEach((n) => {
      n instanceof yt || n._name in e.controllers && n.load(e.controllers[n._name]);
    }), i && e.folders && this.folders.forEach((n) => {
      n._title in e.folders && n.load(e.folders[n._title]);
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
  save(e = !0) {
    const i = {
      controllers: {},
      folders: {}
    };
    return this.controllers.forEach((n) => {
      if (!(n instanceof yt)) {
        if (n._name in i.controllers)
          throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);
        i.controllers[n._name] = n.save();
      }
    }), e && this.folders.forEach((n) => {
      if (n._title in i.folders)
        throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);
      i.folders[n._title] = n.save();
    }), i;
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
  open(e = !0) {
    return this._setClosed(!e), this.$title.setAttribute("aria-expanded", !this._closed), this.domElement.classList.toggle("closed", this._closed), this;
  }
  /**
   * Closes the GUI.
   * @returns {this}
   */
  close() {
    return this.open(!1);
  }
  _setClosed(e) {
    this._closed !== e && (this._closed = e, this._callOnOpenClose(this));
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
  show(e = !0) {
    return this._hidden = !e, this.domElement.style.display = this._hidden ? "none" : "", this;
  }
  /**
   * Hides the GUI.
   * @returns {this}
   */
  hide() {
    return this.show(!1);
  }
  openAnimated(e = !0) {
    return this._setClosed(!e), this.$title.setAttribute("aria-expanded", !this._closed), requestAnimationFrame(() => {
      const i = this.$children.clientHeight;
      this.$children.style.height = i + "px", this.domElement.classList.add("transition");
      const n = (s) => {
        s.target === this.$children && (this.$children.style.height = "", this.domElement.classList.remove("transition"), this.$children.removeEventListener("transitionend", n));
      };
      this.$children.addEventListener("transitionend", n);
      const r = e ? this.$children.scrollHeight : 0;
      this.domElement.classList.toggle("closed", !e), requestAnimationFrame(() => {
        this.$children.style.height = r + "px";
      });
    }), this;
  }
  /**
   * Change the title of this GUI.
   * @param {string} title
   * @returns {this}
   */
  title(e) {
    return this._title = e, this.$title.innerHTML = e, this;
  }
  /**
   * Resets all controllers to their initial values.
   * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
   * @returns {this}
   */
  reset(e = !0) {
    return (e ? this.controllersRecursive() : this.controllers).forEach((n) => n.reset()), this;
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
  onChange(e) {
    return this._onChange = e, this;
  }
  _callOnChange(e) {
    this.parent && this.parent._callOnChange(e), this._onChange !== void 0 && this._onChange.call(this, {
      object: e.object,
      property: e.property,
      value: e.getValue(),
      controller: e
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
  onFinishChange(e) {
    return this._onFinishChange = e, this;
  }
  _callOnFinishChange(e) {
    this.parent && this.parent._callOnFinishChange(e), this._onFinishChange !== void 0 && this._onFinishChange.call(this, {
      object: e.object,
      property: e.property,
      value: e.getValue(),
      controller: e
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
  onOpenClose(e) {
    return this._onOpenClose = e, this;
  }
  _callOnOpenClose(e) {
    this.parent && this.parent._callOnOpenClose(e), this._onOpenClose !== void 0 && this._onOpenClose.call(this, e);
  }
  /**
   * Destroys all DOM elements and event listeners associated with this GUI
   */
  destroy() {
    this.parent && (this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.folders.splice(this.parent.folders.indexOf(this), 1)), this.domElement.parentElement && this.domElement.parentElement.removeChild(this.domElement), Array.from(this.children).forEach((e) => e.destroy());
  }
  /**
   * Returns an array of controllers contained by this GUI and its descendents.
   * @returns {Controller[]}
   */
  controllersRecursive() {
    let e = Array.from(this.controllers);
    return this.folders.forEach((i) => {
      e = e.concat(i.controllersRecursive());
    }), e;
  }
  /**
   * Returns an array of folders contained by this GUI and its descendents.
   * @returns {GUI[]}
   */
  foldersRecursive() {
    let e = Array.from(this.folders);
    return this.folders.forEach((i) => {
      e = e.concat(i.foldersRecursive());
    }), e;
  }
}
const Jr = Dt;
(() => {
  class t {
    constructor(r, s, o) {
      Vt(this, "presets", {
        "Preset 0": () => {
          window.Gradient.gl.scene.quad.tweenTo(e[0], 1e3), this.initGui(this.params[0]);
        },
        "Preset 1": () => {
          window.Gradient.gl.scene.quad.tweenTo(e[1], 1e3), this.initGui(this.params[1]);
        },
        "Preset 2": () => {
          window.Gradient.gl.scene.quad.tweenTo(e[2], 1e3), this.initGui(this.params[2]);
        },
        "Preset 3": () => {
          window.Gradient.gl.scene.quad.tweenTo(e[3], 1e3), this.initGui(this.params[3]);
        }
      });
      this.params = r, this.preset = s, this.call = {
        mode: (a) => {
          console.log("light mode", a), this.gl.scene.quad.mode(a);
        },
        swap: (a, l = { d: 0 }) => {
          console.log("swap", a, l), this.gl.scene.quad.swap(a, l);
        }
      }, this.gl = new Lr("c", r, s), this.gl.applyPreset(0), o && this.initGui(r[s]);
    }
    tweenTo(r, s) {
      this.preset = r, thid.gl.scene.quad.tweenTo(this.params[this.preset], s);
    }
    mapRange(r, s, o, a, l) {
      return (r - s) / (o - s) * (l - a) + a;
    }
    setUniform(r, s) {
      let o = this.params[this.preset][r], a = this.mapRange(s, 0, 1, o, 1);
      this.gl.scene.quad.setUniform(r, a);
    }
    setNewParams(r) {
      this.params = r, this.gl.scene.setNewParams(r);
    }
    setUniforms() {
      this.gl.scene.quad.data = this.data, this.gl.scene.quad.setUniforms();
    }
    initGui(r) {
      this.data = r, this.gui = new Jr(), this.gui.add(this.presets, "Preset 0"), this.gui.add(this.presets, "Preset 1"), this.gui.add(this.presets, "Preset 2"), this.gui.add(this.presets, "Preset 3"), this.gui.add(this.data, "multx", 0, 10).onChange(() => {
        this.setUniforms();
      }).listen(), this.gui.add(this.data, "multy", 0, 10).onChange(() => {
        this.setUniforms();
      }).listen(), this.gui.addColor(this.data, "color").onChange(() => {
        this.setUniforms();
      }).listen(), this.gui.addColor(this.data, "color2").onChange(() => {
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
      }).listen(), this.gui.add(this.data, "bw2", 0, 1).onChange(() => {
        this.setUniforms();
      }).listen(), this.gui.add(this.data, "time", 0, 1);
    }
  }
  let e = {
    0: {
      multx: 0.2,
      multy: 0.8,
      hue: 0,
      brightness: 0.74,
      mouse: 0.7,
      scale: 0.9,
      scale2: 0.2,
      noise: 1.05,
      color: "#b0b0b0",
      color2: "#a25820",
      bw: 0.25,
      bw2: 0,
      time: 0.25
    },
    1: {
      multx: 0.2,
      multy: 0.8,
      hue: 0,
      brightness: 0.8,
      mouse: 0.53,
      scale: 0.9,
      scale2: 0.4,
      noise: 3,
      color: "#0b218e",
      color2: "#0a1732",
      bw: 0.3,
      bw2: 0,
      time: 0.45
    },
    2: {
      multx: 1.2,
      multy: 0.8,
      hue: 0,
      brightness: 0.7,
      mouse: 0.53,
      scale: 1,
      scale2: 0,
      noise: 0.4,
      color: "#0b218e",
      color2: "#0a1732",
      bw: 0.3,
      bw2: 0,
      time: 0
    },
    3: {
      multx: 0.2,
      multy: 0.8,
      hue: 0,
      brightness: 0.8,
      mouse: 0.53,
      scale: 1.15,
      scale2: 0.4,
      noise: 3,
      color: "#0b218e",
      color2: "#0a1732",
      bw: 0.3,
      bw2: 0,
      time: 1
    }
  };
  const i = new t(e, 0, !0);
  window.gradient = i, window.Gradient = i;
})();
