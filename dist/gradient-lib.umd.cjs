(function($){typeof define=="function"&&define.amd?define($):$()})(function(){"use strict";var Or=Object.defineProperty;var Vr=($,T,W)=>T in $?Or($,T,{enumerable:!0,configurable:!0,writable:!0,value:W}):$[T]=W;var De=($,T,W)=>(Vr($,typeof T!="symbol"?T+"":T,W),W);/* @license twgl.js 5.5.4 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */let $=Float32Array;function T(e,t,i){const n=new $(3);return e&&(n[0]=e),t&&(n[1]=t),i&&(n[2]=i),n}function W(e,t,i){return i=i||new $(3),i[0]=e[0]-t[0],i[1]=e[1]-t[1],i[2]=e[2]-t[2],i}function Rt(e,t,i){i=i||new $(3);const n=e[2]*t[0]-e[0]*t[2],r=e[0]*t[1]-e[1]*t[0];return i[0]=e[1]*t[2]-e[2]*t[1],i[1]=n,i[2]=r,i}function gt(e,t){t=t||new $(3);const i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=Math.sqrt(i);return n>1e-5?(t[0]=e[0]/n,t[1]=e[1]/n,t[2]=e[2]/n):(t[0]=0,t[1]=0,t[2]=0),t}let x=Float32Array;function ke(e){const t=x;return x=e,t}function Le(e,t){return t=t||new x(16),t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t[4]=-e[4],t[5]=-e[5],t[6]=-e[6],t[7]=-e[7],t[8]=-e[8],t[9]=-e[9],t[10]=-e[10],t[11]=-e[11],t[12]=-e[12],t[13]=-e[13],t[14]=-e[14],t[15]=-e[15],t}function Ue(){return new x(16).fill(0)}function Mt(e,t){return t=t||new x(16),t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function Dt(e){return e=e||new x(16),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Ne(e,t){if(t=t||new x(16),t===e){let p;return p=e[1],e[1]=e[4],e[4]=p,p=e[2],e[2]=e[8],e[8]=p,p=e[3],e[3]=e[12],e[12]=p,p=e[6],e[6]=e[9],e[9]=p,p=e[7],e[7]=e[13],e[13]=p,p=e[11],e[11]=e[14],e[14]=p,t}const i=e[0*4+0],n=e[0*4+1],r=e[0*4+2],o=e[0*4+3],s=e[1*4+0],a=e[1*4+1],c=e[1*4+2],l=e[1*4+3],f=e[2*4+0],u=e[2*4+1],h=e[2*4+2],m=e[2*4+3],v=e[3*4+0],A=e[3*4+1],_=e[3*4+2],g=e[3*4+3];return t[0]=i,t[1]=s,t[2]=f,t[3]=v,t[4]=n,t[5]=a,t[6]=u,t[7]=A,t[8]=r,t[9]=c,t[10]=h,t[11]=_,t[12]=o,t[13]=l,t[14]=m,t[15]=g,t}function kt(e,t){t=t||new x(16);const i=e[0*4+0],n=e[0*4+1],r=e[0*4+2],o=e[0*4+3],s=e[1*4+0],a=e[1*4+1],c=e[1*4+2],l=e[1*4+3],f=e[2*4+0],u=e[2*4+1],h=e[2*4+2],m=e[2*4+3],v=e[3*4+0],A=e[3*4+1],_=e[3*4+2],g=e[3*4+3],p=h*g,y=_*m,b=c*g,w=_*l,z=c*m,I=h*l,B=r*g,P=_*o,R=r*m,M=h*o,D=r*l,k=c*o,L=f*A,U=v*u,N=s*A,O=v*a,V=s*u,at=f*a,ct=i*A,lt=v*n,ut=i*u,ht=f*n,ft=i*a,pt=s*n,Be=p*a+w*u+z*A-(y*a+b*u+I*A),Pe=y*n+B*u+M*A-(p*n+P*u+R*A),Re=b*n+P*a+D*A-(w*n+B*a+k*A),Me=I*n+R*a+k*u-(z*n+M*a+D*u),S=1/(i*Be+s*Pe+f*Re+v*Me);return t[0]=S*Be,t[1]=S*Pe,t[2]=S*Re,t[3]=S*Me,t[4]=S*(y*s+b*f+I*v-(p*s+w*f+z*v)),t[5]=S*(p*i+P*f+R*v-(y*i+B*f+M*v)),t[6]=S*(w*i+B*s+k*v-(b*i+P*s+D*v)),t[7]=S*(z*i+M*s+D*f-(I*i+R*s+k*f)),t[8]=S*(L*l+O*m+V*g-(U*l+N*m+at*g)),t[9]=S*(U*o+ct*m+ht*g-(L*o+lt*m+ut*g)),t[10]=S*(N*o+lt*l+ft*g-(O*o+ct*l+pt*g)),t[11]=S*(at*o+ut*l+pt*m-(V*o+ht*l+ft*m)),t[12]=S*(N*h+at*_+U*c-(V*_+L*c+O*h)),t[13]=S*(ut*_+L*r+lt*h-(ct*h+ht*_+U*r)),t[14]=S*(ct*c+pt*_+O*r-(ft*_+N*r+lt*c)),t[15]=S*(ft*h+V*r+ht*c-(ut*c+pt*h+at*r)),t}function Oe(e,t,i){i=i||new x(16);const n=e[0],r=e[1],o=e[2],s=e[3],a=e[4+0],c=e[4+1],l=e[4+2],f=e[4+3],u=e[8+0],h=e[8+1],m=e[8+2],v=e[8+3],A=e[12+0],_=e[12+1],g=e[12+2],p=e[12+3],y=t[0],b=t[1],w=t[2],z=t[3],I=t[4+0],B=t[4+1],P=t[4+2],R=t[4+3],M=t[8+0],D=t[8+1],k=t[8+2],L=t[8+3],U=t[12+0],N=t[12+1],O=t[12+2],V=t[12+3];return i[0]=n*y+a*b+u*w+A*z,i[1]=r*y+c*b+h*w+_*z,i[2]=o*y+l*b+m*w+g*z,i[3]=s*y+f*b+v*w+p*z,i[4]=n*I+a*B+u*P+A*R,i[5]=r*I+c*B+h*P+_*R,i[6]=o*I+l*B+m*P+g*R,i[7]=s*I+f*B+v*P+p*R,i[8]=n*M+a*D+u*k+A*L,i[9]=r*M+c*D+h*k+_*L,i[10]=o*M+l*D+m*k+g*L,i[11]=s*M+f*D+v*k+p*L,i[12]=n*U+a*N+u*O+A*V,i[13]=r*U+c*N+h*O+_*V,i[14]=o*U+l*N+m*O+g*V,i[15]=s*U+f*N+v*O+p*V,i}function Ve(e,t,i){return i=i||Dt(),e!==i&&(i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=e[11]),i[12]=t[0],i[13]=t[1],i[14]=t[2],i[15]=1,i}function Ge(e,t){return t=t||T(),t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function He(e,t,i){i=i||T();const n=t*4;return i[0]=e[n+0],i[1]=e[n+1],i[2]=e[n+2],i}function Ye(e,t,i,n){n!==e&&(n=Mt(e,n));const r=i*4;return n[r+0]=t[0],n[r+1]=t[1],n[r+2]=t[2],n}function Xe(e,t,i,n,r){r=r||new x(16);const o=Math.tan(Math.PI*.5-.5*e),s=1/(i-n);return r[0]=o/t,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=o,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=(i+n)*s,r[11]=-1,r[12]=0,r[13]=0,r[14]=i*n*s*2,r[15]=0,r}function We(e,t,i,n,r,o,s){return s=s||new x(16),s[0]=2/(t-e),s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/(n-i),s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2/(r-o),s[11]=0,s[12]=(t+e)/(e-t),s[13]=(n+i)/(i-n),s[14]=(o+r)/(r-o),s[15]=1,s}function je(e,t,i,n,r,o,s){s=s||new x(16);const a=t-e,c=n-i,l=r-o;return s[0]=2*r/a,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2*r/c,s[6]=0,s[7]=0,s[8]=(e+t)/a,s[9]=(n+i)/c,s[10]=o/l,s[11]=-1,s[12]=0,s[13]=0,s[14]=r*o/l,s[15]=0,s}let Y,j,H;function Ke(e,t,i,n){return n=n||new x(16),Y=Y||T(),j=j||T(),H=H||T(),gt(W(e,t,H),H),gt(Rt(i,H,Y),Y),gt(Rt(H,Y,j),j),n[0]=Y[0],n[1]=Y[1],n[2]=Y[2],n[3]=0,n[4]=j[0],n[5]=j[1],n[6]=j[2],n[7]=0,n[8]=H[0],n[9]=H[1],n[10]=H[2],n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function Qe(e,t){return t=t||new x(16),t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function qe(e,t,i){i=i||new x(16);const n=t[0],r=t[1],o=t[2],s=e[0],a=e[1],c=e[2],l=e[3],f=e[1*4+0],u=e[1*4+1],h=e[1*4+2],m=e[1*4+3],v=e[2*4+0],A=e[2*4+1],_=e[2*4+2],g=e[2*4+3],p=e[3*4+0],y=e[3*4+1],b=e[3*4+2],w=e[3*4+3];return e!==i&&(i[0]=s,i[1]=a,i[2]=c,i[3]=l,i[4]=f,i[5]=u,i[6]=h,i[7]=m,i[8]=v,i[9]=A,i[10]=_,i[11]=g),i[12]=s*n+f*r+v*o+p,i[13]=a*n+u*r+A*o+y,i[14]=c*n+h*r+_*o+b,i[15]=l*n+m*r+g*o+w,i}function Je(e,t){t=t||new x(16);const i=Math.cos(e),n=Math.sin(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Ze(e,t,i){i=i||new x(16);const n=e[4],r=e[5],o=e[6],s=e[7],a=e[8],c=e[9],l=e[10],f=e[11],u=Math.cos(t),h=Math.sin(t);return i[4]=u*n+h*a,i[5]=u*r+h*c,i[6]=u*o+h*l,i[7]=u*s+h*f,i[8]=u*a-h*n,i[9]=u*c-h*r,i[10]=u*l-h*o,i[11]=u*f-h*s,e!==i&&(i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function ti(e,t){t=t||new x(16);const i=Math.cos(e),n=Math.sin(e);return t[0]=i,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function ei(e,t,i){i=i||new x(16);const n=e[0*4+0],r=e[0*4+1],o=e[0*4+2],s=e[0*4+3],a=e[2*4+0],c=e[2*4+1],l=e[2*4+2],f=e[2*4+3],u=Math.cos(t),h=Math.sin(t);return i[0]=u*n-h*a,i[1]=u*r-h*c,i[2]=u*o-h*l,i[3]=u*s-h*f,i[8]=u*a+h*n,i[9]=u*c+h*r,i[10]=u*l+h*o,i[11]=u*f+h*s,e!==i&&(i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function ii(e,t){t=t||new x(16);const i=Math.cos(e),n=Math.sin(e);return t[0]=i,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function ni(e,t,i){i=i||new x(16);const n=e[0*4+0],r=e[0*4+1],o=e[0*4+2],s=e[0*4+3],a=e[1*4+0],c=e[1*4+1],l=e[1*4+2],f=e[1*4+3],u=Math.cos(t),h=Math.sin(t);return i[0]=u*n+h*a,i[1]=u*r+h*c,i[2]=u*o+h*l,i[3]=u*s+h*f,i[4]=u*a-h*n,i[5]=u*c-h*r,i[6]=u*l-h*o,i[7]=u*f-h*s,e!==i&&(i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=e[11],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function ri(e,t,i){i=i||new x(16);let n=e[0],r=e[1],o=e[2];const s=Math.sqrt(n*n+r*r+o*o);n/=s,r/=s,o/=s;const a=n*n,c=r*r,l=o*o,f=Math.cos(t),u=Math.sin(t),h=1-f;return i[0]=a+(1-a)*f,i[1]=n*r*h+o*u,i[2]=n*o*h-r*u,i[3]=0,i[4]=n*r*h-o*u,i[5]=c+(1-c)*f,i[6]=r*o*h+n*u,i[7]=0,i[8]=n*o*h+r*u,i[9]=r*o*h-n*u,i[10]=l+(1-l)*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function oi(e,t,i,n){n=n||new x(16);let r=t[0],o=t[1],s=t[2];const a=Math.sqrt(r*r+o*o+s*s);r/=a,o/=a,s/=a;const c=r*r,l=o*o,f=s*s,u=Math.cos(i),h=Math.sin(i),m=1-u,v=c+(1-c)*u,A=r*o*m+s*h,_=r*s*m-o*h,g=r*o*m-s*h,p=l+(1-l)*u,y=o*s*m+r*h,b=r*s*m+o*h,w=o*s*m-r*h,z=f+(1-f)*u,I=e[0],B=e[1],P=e[2],R=e[3],M=e[4],D=e[5],k=e[6],L=e[7],U=e[8],N=e[9],O=e[10],V=e[11];return n[0]=v*I+A*M+_*U,n[1]=v*B+A*D+_*N,n[2]=v*P+A*k+_*O,n[3]=v*R+A*L+_*V,n[4]=g*I+p*M+y*U,n[5]=g*B+p*D+y*N,n[6]=g*P+p*k+y*O,n[7]=g*R+p*L+y*V,n[8]=b*I+w*M+z*U,n[9]=b*B+w*D+z*N,n[10]=b*P+w*k+z*O,n[11]=b*R+w*L+z*V,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function si(e,t){return t=t||new x(16),t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function ai(e,t,i){i=i||new x(16);const n=t[0],r=t[1],o=t[2];return i[0]=n*e[0*4+0],i[1]=n*e[0*4+1],i[2]=n*e[0*4+2],i[3]=n*e[0*4+3],i[4]=r*e[1*4+0],i[5]=r*e[1*4+1],i[6]=r*e[1*4+2],i[7]=r*e[1*4+3],i[8]=o*e[2*4+0],i[9]=o*e[2*4+1],i[10]=o*e[2*4+2],i[11]=o*e[2*4+3],e!==i&&(i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function ci(e,t,i){i=i||T();const n=t[0],r=t[1],o=t[2],s=n*e[0*4+3]+r*e[1*4+3]+o*e[2*4+3]+e[3*4+3];return i[0]=(n*e[0*4+0]+r*e[1*4+0]+o*e[2*4+0]+e[3*4+0])/s,i[1]=(n*e[0*4+1]+r*e[1*4+1]+o*e[2*4+1]+e[3*4+1])/s,i[2]=(n*e[0*4+2]+r*e[1*4+2]+o*e[2*4+2]+e[3*4+2])/s,i}function li(e,t,i){i=i||T();const n=t[0],r=t[1],o=t[2];return i[0]=n*e[0*4+0]+r*e[1*4+0]+o*e[2*4+0],i[1]=n*e[0*4+1]+r*e[1*4+1]+o*e[2*4+1],i[2]=n*e[0*4+2]+r*e[1*4+2]+o*e[2*4+2],i}function ui(e,t,i){i=i||T();const n=kt(e),r=t[0],o=t[1],s=t[2];return i[0]=r*n[0*4+0]+o*n[0*4+1]+s*n[0*4+2],i[1]=r*n[1*4+0]+o*n[1*4+1]+s*n[1*4+2],i[2]=r*n[2*4+0]+o*n[2*4+1]+s*n[2*4+2],i}var Lt=Object.freeze({__proto__:null,axisRotate:oi,axisRotation:ri,copy:Mt,create:Ue,frustum:je,getAxis:He,getTranslation:Ge,identity:Dt,inverse:kt,lookAt:Ke,multiply:Oe,negate:Le,ortho:We,perspective:Xe,rotateX:Ze,rotateY:ei,rotateZ:ni,rotationX:Je,rotationY:ti,rotationZ:ii,scale:ai,scaling:si,setAxis:Ye,setDefaultType:ke,setTranslation:Ve,transformDirection:li,transformNormal:ui,transformPoint:ci,translate:qe,translation:Qe,transpose:Ne});const dt=5120,q=5121,mt=5122,vt=5123,At=5124,yt=5125,_t=5126,hi=32819,fi=32820,pi=33635,gi=5131,di=33640,mi=35899,vi=35902,Ai=36269,yi=34042,Ut={};{const e=Ut;e[dt]=Int8Array,e[q]=Uint8Array,e[mt]=Int16Array,e[vt]=Uint16Array,e[At]=Int32Array,e[yt]=Uint32Array,e[_t]=Float32Array,e[hi]=Uint16Array,e[fi]=Uint16Array,e[pi]=Uint16Array,e[gi]=Uint16Array,e[di]=Uint32Array,e[mi]=Uint32Array,e[vi]=Uint32Array,e[Ai]=Uint32Array,e[yi]=Uint32Array}function Nt(e){if(e instanceof Int8Array)return dt;if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)return q;if(e instanceof Int16Array)return mt;if(e instanceof Uint16Array)return vt;if(e instanceof Int32Array)return At;if(e instanceof Uint32Array)return yt;if(e instanceof Float32Array)return _t;throw new Error("unsupported typed array type")}function Ot(e){if(e===Int8Array)return dt;if(e===Uint8Array||e===Uint8ClampedArray)return q;if(e===Int16Array)return mt;if(e===Uint16Array)return vt;if(e===Int32Array)return At;if(e===Uint32Array)return yt;if(e===Float32Array)return _t;throw new Error("unsupported typed array type")}function _i(e){const t=Ut[e];if(!t)throw new Error("unknown gl type");return t}const xt=typeof SharedArrayBuffer<"u"?function(t){return t&&t.buffer&&(t.buffer instanceof ArrayBuffer||t.buffer instanceof SharedArrayBuffer)}:function(t){return t&&t.buffer&&t.buffer instanceof ArrayBuffer};function xi(...e){console.error(...e)}const Vt=new Map;function Gt(e,t){if(!e||typeof e!="object")return!1;let i=Vt.get(t);i||(i=new WeakMap,Vt.set(t,i));let n=i.get(e);if(n===void 0){const r=Object.prototype.toString.call(e);n=r.substring(8,r.length-1)===t,i.set(e,n)}return n}function bi(e,t){return typeof WebGLBuffer<"u"&&Gt(t,"WebGLBuffer")}function Ht(e,t){return typeof WebGLTexture<"u"&&Gt(t,"WebGLTexture")}const Yt=35044,K=34962,Ei=34963,wi=34660,Ti=5120,Si=5121,Ci=5122,Fi=5123,zi=5124,$i=5125,Xt=5126,Wt={attribPrefix:""};function Ii(e,t,i,n,r){e.bindBuffer(t,i),e.bufferData(t,n,r||Yt)}function jt(e,t,i,n){if(bi(e,t))return t;i=i||K;const r=e.createBuffer();return Ii(e,i,r,t,n),r}function Kt(e){return e==="indices"}function Bi(e){return e===Int8Array||e===Uint8Array}function Pi(e){return e.length?e:e.data}const Ri=/coord|texture/i,Mi=/color|colour/i;function Di(e,t){let i;if(Ri.test(e)?i=2:Mi.test(e)?i=4:i=3,t%i>0)throw new Error(`Can not guess numComponents for attribute '${e}'. Tried ${i} but ${t} values is not evenly divisible by ${i}. You should specify it.`);return i}function ki(e,t,i){return e.numComponents||e.size||Di(t,i||Pi(e).length)}function Qt(e,t){if(xt(e))return e;if(xt(e.data))return e.data;Array.isArray(e)&&(e={data:e});let i=e.type?bt(e.type):void 0;return i||(Kt(t)?i=Uint16Array:i=Float32Array),new i(e.data)}function Li(e){return typeof e=="number"?e:e?Ot(e):Xt}function bt(e){return typeof e=="number"?_i(e):e||Float32Array}function Ui(e,t){return{buffer:t.buffer,numValues:2*3*4,type:Li(t.type),arrayType:bt(t.type)}}function Ni(e,t){const i=t.data||t,n=bt(t.type),r=i*n.BYTES_PER_ELEMENT,o=e.createBuffer();return e.bindBuffer(K,o),e.bufferData(K,r,t.drawType||Yt),{buffer:o,numValues:i,type:Ot(n),arrayType:n}}function Oi(e,t,i){const n=Qt(t,i);return{arrayType:n.constructor,buffer:jt(e,n,void 0,t.drawType),type:Nt(n),numValues:0}}function Vi(e,t){const i={};return Object.keys(t).forEach(function(n){if(!Kt(n)){const r=t[n],o=r.attrib||r.name||r.attribName||Wt.attribPrefix+n;if(r.value){if(!Array.isArray(r.value)&&!xt(r.value))throw new Error("array.value is not array or typedarray");i[o]={value:r.value}}else{let s;r.buffer&&r.buffer instanceof WebGLBuffer?s=Ui:typeof r=="number"||typeof r.data=="number"?s=Ni:s=Oi;const{buffer:a,type:c,numValues:l,arrayType:f}=s(e,r,n),u=r.normalize!==void 0?r.normalize:Bi(f),h=ki(r,n,l);i[o]={buffer:a,numComponents:h,type:c,normalize:u,stride:r.stride||0,offset:r.offset||0,divisor:r.divisor===void 0?void 0:r.divisor,drawType:r.drawType}}}}),e.bindBuffer(K,null),i}function Gi(e,t){return t===Ti||t===Si?1:t===Ci||t===Fi?2:t===zi||t===$i||t===Xt?4:0}const Et=["position","positions","a_position"];function Hi(e,t){let i,n;for(n=0;n<Et.length&&(i=Et[n],!(i in t||(i=Wt.attribPrefix+i,i in t)));++n);n===Et.length&&(i=Object.keys(t)[0]);const r=t[i];if(!r.buffer)return 1;e.bindBuffer(K,r.buffer);const o=e.getBufferParameter(K,wi);e.bindBuffer(K,null);const s=Gi(e,r.type),a=o/s,c=r.numComponents||r.size,l=a/c;if(l%1!==0)throw new Error(`numComponents ${c} not correct for length ${length}`);return l}function qt(e,t,i){const n=Vi(e,t),r=Object.assign({},i||{});r.attribs=Object.assign({},i?i.attribs:{},n);const o=t.indices;if(o){const s=Qt(o,"indices");r.indices=jt(e,s,Ei),r.numElements=s.length,r.elementType=Nt(s)}else r.numElements||(r.numElements=Hi(e,r.attribs));return r}function wt(e){return!!e.texStorage2D}const Yi=function(){const e={},t={};function i(n){const r=n.constructor.name;if(!e[r]){for(const o in n)if(typeof n[o]=="number"){const s=t[n[o]];t[n[o]]=s?`${s} | ${o}`:o}e[r]=!0}}return function(r,o){return i(r),t[o]||(typeof o=="number"?`0x${o.toString(16)}`:o)}}(),Tt=xi;function Jt(e){return typeof document<"u"&&document.getElementById?document.getElementById(e):null}const Z=33984,tt=34962,Xi=34963,Wi=35713,ji=35714,Ki=35632,Qi=35633,qi=35981,Zt=35718,Ji=35721,Zi=35971,tn=35382,en=35396,nn=35398,rn=35392,on=35395,et=5126,te=35664,ee=35665,ie=35666,St=5124,ne=35667,re=35668,oe=35669,se=35670,ae=35671,ce=35672,le=35673,ue=35674,he=35675,fe=35676,sn=35678,an=35680,cn=35679,ln=35682,un=35685,hn=35686,fn=35687,pn=35688,gn=35689,dn=35690,mn=36289,vn=36292,An=36293,Ct=5125,pe=36294,ge=36295,de=36296,yn=36298,_n=36299,xn=36300,bn=36303,En=36306,wn=36307,Tn=36308,Sn=36311,it=3553,nt=34067,Ft=32879,rt=35866,d={};function me(e,t){return d[t].bindPoint}function Cn(e,t){return function(i){e.uniform1f(t,i)}}function Fn(e,t){return function(i){e.uniform1fv(t,i)}}function zn(e,t){return function(i){e.uniform2fv(t,i)}}function $n(e,t){return function(i){e.uniform3fv(t,i)}}function In(e,t){return function(i){e.uniform4fv(t,i)}}function ve(e,t){return function(i){e.uniform1i(t,i)}}function Ae(e,t){return function(i){e.uniform1iv(t,i)}}function ye(e,t){return function(i){e.uniform2iv(t,i)}}function _e(e,t){return function(i){e.uniform3iv(t,i)}}function xe(e,t){return function(i){e.uniform4iv(t,i)}}function Bn(e,t){return function(i){e.uniform1ui(t,i)}}function Pn(e,t){return function(i){e.uniform1uiv(t,i)}}function Rn(e,t){return function(i){e.uniform2uiv(t,i)}}function Mn(e,t){return function(i){e.uniform3uiv(t,i)}}function Dn(e,t){return function(i){e.uniform4uiv(t,i)}}function kn(e,t){return function(i){e.uniformMatrix2fv(t,!1,i)}}function Ln(e,t){return function(i){e.uniformMatrix3fv(t,!1,i)}}function Un(e,t){return function(i){e.uniformMatrix4fv(t,!1,i)}}function Nn(e,t){return function(i){e.uniformMatrix2x3fv(t,!1,i)}}function On(e,t){return function(i){e.uniformMatrix3x2fv(t,!1,i)}}function Vn(e,t){return function(i){e.uniformMatrix2x4fv(t,!1,i)}}function Gn(e,t){return function(i){e.uniformMatrix4x2fv(t,!1,i)}}function Hn(e,t){return function(i){e.uniformMatrix3x4fv(t,!1,i)}}function Yn(e,t){return function(i){e.uniformMatrix4x3fv(t,!1,i)}}function C(e,t,i,n){const r=me(e,t);return wt(e)?function(o){let s,a;!o||Ht(e,o)?(s=o,a=null):(s=o.texture,a=o.sampler),e.uniform1i(n,i),e.activeTexture(Z+i),e.bindTexture(r,s),e.bindSampler(i,a)}:function(o){e.uniform1i(n,i),e.activeTexture(Z+i),e.bindTexture(r,o)}}function F(e,t,i,n,r){const o=me(e,t),s=new Int32Array(r);for(let a=0;a<r;++a)s[a]=i+a;return wt(e)?function(a){e.uniform1iv(n,s),a.forEach(function(c,l){e.activeTexture(Z+s[l]);let f,u;!c||Ht(e,c)?(f=c,u=null):(f=c.texture,u=c.sampler),e.bindSampler(i,u),e.bindTexture(o,f)})}:function(a){e.uniform1iv(n,s),a.forEach(function(c,l){e.activeTexture(Z+s[l]),e.bindTexture(o,c)})}}d[et]={Type:Float32Array,size:4,setter:Cn,arraySetter:Fn},d[te]={Type:Float32Array,size:8,setter:zn,cols:2},d[ee]={Type:Float32Array,size:12,setter:$n,cols:3},d[ie]={Type:Float32Array,size:16,setter:In,cols:4},d[St]={Type:Int32Array,size:4,setter:ve,arraySetter:Ae},d[ne]={Type:Int32Array,size:8,setter:ye,cols:2},d[re]={Type:Int32Array,size:12,setter:_e,cols:3},d[oe]={Type:Int32Array,size:16,setter:xe,cols:4},d[Ct]={Type:Uint32Array,size:4,setter:Bn,arraySetter:Pn},d[pe]={Type:Uint32Array,size:8,setter:Rn,cols:2},d[ge]={Type:Uint32Array,size:12,setter:Mn,cols:3},d[de]={Type:Uint32Array,size:16,setter:Dn,cols:4},d[se]={Type:Uint32Array,size:4,setter:ve,arraySetter:Ae},d[ae]={Type:Uint32Array,size:8,setter:ye,cols:2},d[ce]={Type:Uint32Array,size:12,setter:_e,cols:3},d[le]={Type:Uint32Array,size:16,setter:xe,cols:4},d[ue]={Type:Float32Array,size:32,setter:kn,rows:2,cols:2},d[he]={Type:Float32Array,size:48,setter:Ln,rows:3,cols:3},d[fe]={Type:Float32Array,size:64,setter:Un,rows:4,cols:4},d[un]={Type:Float32Array,size:32,setter:Nn,rows:2,cols:3},d[hn]={Type:Float32Array,size:32,setter:Vn,rows:2,cols:4},d[fn]={Type:Float32Array,size:48,setter:On,rows:3,cols:2},d[pn]={Type:Float32Array,size:48,setter:Hn,rows:3,cols:4},d[gn]={Type:Float32Array,size:64,setter:Gn,rows:4,cols:2},d[dn]={Type:Float32Array,size:64,setter:Yn,rows:4,cols:3},d[sn]={Type:null,size:0,setter:C,arraySetter:F,bindPoint:it},d[an]={Type:null,size:0,setter:C,arraySetter:F,bindPoint:nt},d[cn]={Type:null,size:0,setter:C,arraySetter:F,bindPoint:Ft},d[ln]={Type:null,size:0,setter:C,arraySetter:F,bindPoint:it},d[mn]={Type:null,size:0,setter:C,arraySetter:F,bindPoint:rt},d[vn]={Type:null,size:0,setter:C,arraySetter:F,bindPoint:rt},d[An]={Type:null,size:0,setter:C,arraySetter:F,bindPoint:nt},d[yn]={Type:null,size:0,setter:C,arraySetter:F,bindPoint:it},d[_n]={Type:null,size:0,setter:C,arraySetter:F,bindPoint:Ft},d[xn]={Type:null,size:0,setter:C,arraySetter:F,bindPoint:nt},d[bn]={Type:null,size:0,setter:C,arraySetter:F,bindPoint:rt},d[En]={Type:null,size:0,setter:C,arraySetter:F,bindPoint:it},d[wn]={Type:null,size:0,setter:C,arraySetter:F,bindPoint:Ft},d[Tn]={Type:null,size:0,setter:C,arraySetter:F,bindPoint:nt},d[Sn]={Type:null,size:0,setter:C,arraySetter:F,bindPoint:rt};function ot(e,t){return function(i){if(i.value)switch(e.disableVertexAttribArray(t),i.value.length){case 4:e.vertexAttrib4fv(t,i.value);break;case 3:e.vertexAttrib3fv(t,i.value);break;case 2:e.vertexAttrib2fv(t,i.value);break;case 1:e.vertexAttrib1fv(t,i.value);break;default:throw new Error("the length of a float constant value must be between 1 and 4!")}else e.bindBuffer(tt,i.buffer),e.enableVertexAttribArray(t),e.vertexAttribPointer(t,i.numComponents||i.size,i.type||et,i.normalize||!1,i.stride||0,i.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(t,i.divisor||0)}}function X(e,t){return function(i){if(i.value)if(e.disableVertexAttribArray(t),i.value.length===4)e.vertexAttrib4iv(t,i.value);else throw new Error("The length of an integer constant value must be 4!");else e.bindBuffer(tt,i.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,i.numComponents||i.size,i.type||St,i.stride||0,i.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(t,i.divisor||0)}}function st(e,t){return function(i){if(i.value)if(e.disableVertexAttribArray(t),i.value.length===4)e.vertexAttrib4uiv(t,i.value);else throw new Error("The length of an unsigned integer constant value must be 4!");else e.bindBuffer(tt,i.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,i.numComponents||i.size,i.type||Ct,i.stride||0,i.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(t,i.divisor||0)}}function zt(e,t,i){const n=i.size,r=i.count;return function(o){e.bindBuffer(tt,o.buffer);const s=o.size||o.numComponents||n,a=s/r,c=o.type||et,f=d[c].size*s,u=o.normalize||!1,h=o.offset||0,m=f/r;for(let v=0;v<r;++v)e.enableVertexAttribArray(t+v),e.vertexAttribPointer(t+v,a,c,u,f,h+m*v),e.vertexAttribDivisor&&e.vertexAttribDivisor(t+v,o.divisor||0)}}const E={};E[et]={size:4,setter:ot},E[te]={size:8,setter:ot},E[ee]={size:12,setter:ot},E[ie]={size:16,setter:ot},E[St]={size:4,setter:X},E[ne]={size:8,setter:X},E[re]={size:12,setter:X},E[oe]={size:16,setter:X},E[Ct]={size:4,setter:st},E[pe]={size:8,setter:st},E[ge]={size:12,setter:st},E[de]={size:16,setter:st},E[se]={size:4,setter:X},E[ae]={size:8,setter:X},E[ce]={size:12,setter:X},E[le]={size:16,setter:X},E[ue]={size:4,setter:zt,count:2},E[he]={size:9,setter:zt,count:3},E[fe]={size:16,setter:zt,count:4};const Xn=/ERROR:\s*\d+:(\d+)/gi;function Wn(e,t="",i=0){const n=[...t.matchAll(Xn)],r=new Map(n.map((o,s)=>{const a=parseInt(o[1]),c=n[s+1],l=c?c.index:t.length,f=t.substring(o.index,l);return[a-1,f]}));return e.split(`
`).map((o,s)=>{const a=r.get(s);return`${s+1+i}: ${o}${a?`

^^^ ${a}`:""}`}).join(`
`)}const be=/^[ \t]*\n/;function Ee(e){let t=0;return be.test(e)&&(t=1,e=e.replace(be,"")),{lineOffset:t,shaderSource:e}}function jn(e,t){return e.errorCallback(t),e.callback&&setTimeout(()=>{e.callback(`${t}
${e.errors.join(`
`)}`)}),null}function Kn(e,t,i,n){if(n=n||Tt,!e.getShaderParameter(i,Wi)){const o=e.getShaderInfoLog(i),{lineOffset:s,shaderSource:a}=Ee(e.getShaderSource(i)),c=`${Wn(a,o,s)}
Error compiling ${Yi(e,t)}: ${o}`;return n(c),c}return""}function $t(e,t,i){let n,r,o;if(typeof t=="function"&&(i=t,t=void 0),typeof e=="function")i=e,e=void 0;else if(e&&!Array.isArray(e)){const l=e;i=l.errorCallback,e=l.attribLocations,n=l.transformFeedbackVaryings,r=l.transformFeedbackMode,o=l.callback}const s=i||Tt,a=[],c={errorCallback(l,...f){a.push(l),s(l,...f)},transformFeedbackVaryings:n,transformFeedbackMode:r,callback:o,errors:a};{let l={};Array.isArray(e)?e.forEach(function(f,u){l[f]=t?t[u]:u}):l=e||{},c.attribLocations=l}return c}const Qn=["VERTEX_SHADER","FRAGMENT_SHADER"];function qn(e,t){if(t.indexOf("frag")>=0)return Ki;if(t.indexOf("vert")>=0)return Qi}function Jn(e,t,i){const n=e.getAttachedShaders(t);for(const r of n)i.has(r)&&e.deleteShader(r);e.deleteProgram(t)}const Zn=(e=0)=>new Promise(t=>setTimeout(t,e));function tr(e,t,i){const n=e.createProgram(),{attribLocations:r,transformFeedbackVaryings:o,transformFeedbackMode:s}=$t(i);for(let a=0;a<t.length;++a){let c=t[a];if(typeof c=="string"){const l=Jt(c),f=l?l.text:c;let u=e[Qn[a]];l&&l.type&&(u=qn(e,l.type)||u),c=e.createShader(u),e.shaderSource(c,Ee(f).shaderSource),e.compileShader(c),e.attachShader(n,c)}}Object.entries(r).forEach(([a,c])=>e.bindAttribLocation(n,c,a));{let a=o;a&&(a.attribs&&(a=a.attribs),Array.isArray(a)||(a=Object.keys(a)),e.transformFeedbackVaryings(n,a,s||qi))}return e.linkProgram(n),n}function er(e,t,i,n,r){const o=$t(i,n,r),s=new Set(t),a=tr(e,t,o);function c(l,f){const u=nr(l,f,o.errorCallback);return u&&Jn(l,f,s),u}if(o.callback){ir(e,a).then(()=>{const l=c(e,a);o.callback(l,l?void 0:a)});return}return c(e,a)?void 0:a}async function ir(e,t){const i=e.getExtension("KHR_parallel_shader_compile"),n=i?(o,s)=>o.getProgramParameter(s,i.COMPLETION_STATUS_KHR):()=>!0;let r=0;do await Zn(r),r=1e3/60;while(!n(e,t))}function nr(e,t,i){if(i=i||Tt,!e.getProgramParameter(t,ji)){const r=e.getProgramInfoLog(t);i(`Error in program linking: ${r}`);const s=e.getAttachedShaders(t).map(a=>Kn(e,e.getShaderParameter(a,e.SHADER_TYPE),a,i));return`${r}
${s.filter(a=>a).join(`
`)}`}}function rr(e,t,i,n,r){return er(e,t,i,n,r)}function we(e){const t=e.name;return t.startsWith("gl_")||t.startsWith("webgl_")}const or=/(\.|\[|]|\w+)/g,sr=e=>e>="0"&&e<="9";function ar(e,t,i,n){const r=e.split(or).filter(a=>a!=="");let o=0,s="";for(;;){const a=r[o++];s+=a;const c=sr(a[0]),l=c?parseInt(a):a;if(c&&(s+=r[o++]),o===r.length){i[l]=t;break}else{const u=r[o++],h=u==="[",m=i[l]||(h?[]:{});i[l]=m,i=m,n[s]=n[s]||function(v){return function(A){Te(v,A)}}(m),s+=u}}}function cr(e,t){let i=0;function n(a,c,l){const f=c.name.endsWith("[0]"),u=c.type,h=d[u];if(!h)throw new Error(`unknown type: 0x${u.toString(16)}`);let m;if(h.bindPoint){const v=i;i+=c.size,f?m=h.arraySetter(e,u,v,l,c.size):m=h.setter(e,u,v,l,c.size)}else h.arraySetter&&f?m=h.arraySetter(e,l):m=h.setter(e,l);return m.location=l,m}const r={},o={},s=e.getProgramParameter(t,Zt);for(let a=0;a<s;++a){const c=e.getActiveUniform(t,a);if(we(c))continue;let l=c.name;l.endsWith("[0]")&&(l=l.substr(0,l.length-3));const f=e.getUniformLocation(t,c.name);if(f){const u=n(t,c,f);r[l]=u,ar(l,u,o,r)}}return r}function lr(e,t){const i={},n=e.getProgramParameter(t,Zi);for(let r=0;r<n;++r){const o=e.getTransformFeedbackVarying(t,r);i[o.name]={index:r,type:o.type,size:o.size}}return i}function ur(e,t){const i=e.getProgramParameter(t,Zt),n=[],r=[];for(let a=0;a<i;++a){r.push(a),n.push({});const c=e.getActiveUniform(t,a);n[a].name=c.name}[["UNIFORM_TYPE","type"],["UNIFORM_SIZE","size"],["UNIFORM_BLOCK_INDEX","blockNdx"],["UNIFORM_OFFSET","offset"]].forEach(function(a){const c=a[0],l=a[1];e.getActiveUniforms(t,r,e[c]).forEach(function(f,u){n[u][l]=f})});const o={},s=e.getProgramParameter(t,tn);for(let a=0;a<s;++a){const c=e.getActiveUniformBlockName(t,a),l={index:e.getUniformBlockIndex(t,c),usedByVertexShader:e.getActiveUniformBlockParameter(t,a,en),usedByFragmentShader:e.getActiveUniformBlockParameter(t,a,nn),size:e.getActiveUniformBlockParameter(t,a,rn),uniformIndices:e.getActiveUniformBlockParameter(t,a,on)};l.used=l.usedByVertexShader||l.usedByFragmentShader,o[c]=l}return{blockSpecs:o,uniformData:n}}function Te(e,t){for(const i in t){const n=e[i];typeof n=="function"?n(t[i]):Te(e[i],t[i])}}function Q(e,...t){const i=e.uniformSetters||e,n=t.length;for(let r=0;r<n;++r){const o=t[r];if(Array.isArray(o)){const s=o.length;for(let a=0;a<s;++a)Q(i,o[a])}else for(const s in o){const a=i[s];a&&a(o[s])}}}function hr(e,t){const i={},n=e.getProgramParameter(t,Ji);for(let r=0;r<n;++r){const o=e.getActiveAttrib(t,r);if(we(o))continue;const s=e.getAttribLocation(t,o.name),a=E[o.type],c=a.setter(e,s,a);c.location=s,i[o.name]=c}return i}function fr(e,t){for(const i in t){const n=e[i];n&&n(t[i])}}function Se(e,t,i){i.vertexArrayObject?e.bindVertexArray(i.vertexArrayObject):(fr(t.attribSetters||t,i.attribs),i.indices&&e.bindBuffer(Xi,i.indices))}function Ce(e,t){const i=cr(e,t),n=hr(e,t),r={program:t,uniformSetters:i,attribSetters:n};return wt(e)&&(r.uniformBlockSpec=ur(e,t),r.transformFeedbackInfo=lr(e,t)),r}const pr=/\s|{|}|;/;function Fe(e,t,i,n,r){const o=$t(i,n,r),s=[];if(t=t.map(function(l){if(!pr.test(l)){const f=Jt(l);if(f)l=f.text;else{const u=`no element with id: ${l}`;o.errorCallback(u),s.push(u)}}return l}),s.length)return jn(o,"");const a=o.callback;a&&(o.callback=(l,f)=>{a(l,l?void 0:Ce(e,f))});const c=rr(e,t,o);return c?Ce(e,c):null}const gr=4,ze=5123;function $e(e,t,i,n,r,o){i=i===void 0?gr:i;const s=t.indices,a=t.elementType,c=n===void 0?t.numElements:n;r=r===void 0?0:r,a||s?o!==void 0?e.drawElementsInstanced(i,c,a===void 0?ze:t.elementType,r,o):e.drawElements(i,c,a===void 0?ze:t.elementType,r):o!==void 0?e.drawArraysInstanced(i,r,c,o):e.drawArrays(i,r,c)}function dr(e,t){t=t||1,t=Math.max(0,t);const i=e.clientWidth*t|0,n=e.clientHeight*t|0;return e.width!==i||e.height!==n?(e.width=i,e.height=n,!0):!1}class mr{constructor(t){this.gl=t,this.y=0,this.isActive=this.canScroll,document.onscroll=i=>this.onScroll(i)}onScroll(t){this.isActive&&(this.y=window.scrollY*this.gl.vp.px)}resize(t){this.gl=t,this.isActive=this.canScroll,this.y=window.scrollY*this.gl.vp.px}get canScroll(){return document.documentElement.scrollHeight>window.innerHeight}}class vr{constructor(t,i={z:-9,fov:.6,near:1,far:1024}){i.fov=Ar(35),this.camera=i}get(t){return this.camera.mat=Lt.translate(Lt.perspective(this.camera.fov,t.canvas.width/t.canvas.height,this.camera.near,this.camera.far),[0,0,this.camera.z]),this.camera}}function Ar(e){return e*Math.PI/180}var yr=`attribute vec4 position;

varying vec2 v_xy;

void main() {\r
  gl_Position = position;\r
  v_xy = position.xy;\r
}`,_r=`precision mediump float;

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
}`;const xr=[yr,_r];class br{constructor(t,i={}){this.gl=t,this.data=i,this.shaders=xr,this.programInfo=Fe(this.gl,this.shaders),this.a={mode:0,swap:0},this.gl.useProgram(this.programInfo.program),this.setBuffAtt(),this.setUniforms()}setBuffAtt(){const t={position:[-1,-1,0,1,-1,0,-1,1,0,-1,1,0,1,-1,0,1,1,0]};this.bufferInfo=qt(this.gl,t)}applyPreset(t){this.data=t,this.setUniforms(),console.log("Current background params:",this.data)}setUniforms(){this.uniforms={u_res:[this.gl.canvas.width,this.gl.canvas.height],u_time:0,u_params:[this.data.multx,this.data.multy,this.data.hue,this.data.brightness],u_params2:[this.data.mouse,this.data.scale,this.data.noise,this.data.bw],u_altparams:[this.data.scale2,this.data.bw2,0,0],u_color:this.data.color,u_color2:this.data.color2,u_mode:this.a.mode,u_swap:this.a.swap},this.gl.useProgram(this.programInfo.program),Q(this.programInfo,this.uniforms)}render(t,{x:i,y:n}){this.gl.useProgram(this.programInfo.program),Se(this.gl,this.programInfo,this.bufferInfo),Q(this.programInfo,{u_time:t*this.data.time,u_mouse:[i,n],u_mode:this.a.mode,u_swap:this.a.swap}),$e(this.gl,this.bufferInfo)}resize(t){this.gl=t,this.gl.useProgram(this.programInfo.program),Q(this.programInfo,{u_res:[this.gl.canvas.width,this.gl.canvas.height]})}mode(t){t==="light"?this.a.mode=1:t==="dark"?this.a.mode=0:this.a.mode===0?this.a.mode=1:this.a.mode=0,console.log(t,this.uniforms.u_mode),this.setUniforms()}swap(t,{d:i}){t===0||t===1||this.a.swap,this.setUniforms()}}class Er{constructor(t,i,n){this.gl=t,this.params=i,this.preset=n,this.computeParams(),this.events(),this.create()}events(){this.mouse={x:0,y:0,wx:window.innerWidth,wy:window.innerHeight},document.addEventListener("mousemove",t=>{this.mouse.x=t.clientX/this.mouse.wx*2-1,this.mouse.y=-(t.clientY/this.mouse.wy)*2+1})}create(){this.data=this.params[this.preset],this.quad=new br(this.gl,this.data)}setNewParams(t){this.params=t,this.applyPreset(this.preset)}applyPreset(t){this.preset=t,this.data=this.params[t],this.quad.applyPreset(this.data)}render(t,i){this.quad&&this.quad.render(t,this.mouse)}resize(t){this.gl=t,this.mouse.wx=window.innerWidth,this.mouse.wy=window.innerHeight,this.quad&&this.quad.resize(this.gl)}computeParams(){document.querySelector('[data-gradient="wrapper"]'),console.log(this.params)}}var wr=`attribute vec4 position;

void main() {\r
  vec4 pos = position;\r
  gl_Position = position;\r
}`,Tr=`precision mediump float;

uniform vec2 u_res;\r
uniform float u_time;

uniform sampler2D u_diff;

void main() {\r
  vec2 uv = gl_FragCoord.xy / u_res;

  vec3 img = texture2D(u_diff, uv).rgb;

  

  gl_FragColor.rgb = img.rgb;\r
  gl_FragColor.a = 1.;\r
}`;const Sr=[wr,Tr];class Cr{constructor(t,i={}){this.gl=t,this.data=i,this.shaders=Sr,this.programInfo=Fe(this.gl,this.shaders),this.gl.useProgram(this.programInfo.program),this.setBuffAtt(),this.setUniforms()}setBuffAtt(){const t={position:[-1,-1,0,1,-1,0,-1,1,0,-1,1,0,1,-1,0,1,1,0]};this.bufferInfo=qt(this.gl,t)}setUniforms(){this.uniforms={u_res:[this.gl.canvas.width,this.gl.canvas.height],u_time:0},this.gl.useProgram(this.programInfo.program),Q(this.programInfo,this.uniforms)}render(t,i=null){this.gl.useProgram(this.programInfo.program),Se(this.gl,this.programInfo,this.bufferInfo),Q(this.programInfo,{u_time:t,u_diff:i}),$e(this.gl,this.bufferInfo)}resize(t){this.gl=t,this.gl.useProgram(this.programInfo.program),Q(this.programInfo,{u_res:[this.gl.canvas.width,this.gl.canvas.height]})}}class Fr{constructor(t){this.gl=t}create(){this.fbi=this.gl.createFramebuffer(),this.texture=this.gl.createTexture(),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.canvas.width,this.gl.canvas.height,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.depthBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,this.gl.canvas.width,this.gl.canvas.height),this.attach(),this.createPlane(),this.unbind()}attach(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbi),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.texture,0),this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,this.depthBuffer)}unbind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null)}createPlane(){this.quad=new Cr(this.gl)}setupRender(){this.isActive&&(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbi),this.gl.clear(this.gl.COLOR_BUFFER_BIT||this.gl.DEPTH_BUFFER_BIT))}render(t){this.isActive&&(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.quad&&this.quad.render(t,this.texture))}resize(t){this.gl=t,this.create(),this.quad&&this.quad.resize(this.gl)}}class zr{constructor(t,i,n){this.params=i,this.preset=n,this.canvas=document.getElementById(t),this.gl=this.canvas.getContext("webgl"),this.gl.clearColor(.04,.04,.04,1),this.gl.vp={dpr:Math.min(window.devicePixelRatio,2)},this.camera=new vr(this.gl),this.gl.camera=this.camera.get(this.gl),new ResizeObserver(r=>this.resize(r[0].contentRect)).observe(this.canvas),this.resize(),this.scroll=new mr(this.gl),this.time=0,this.create(),this.render(),this.resize()}create(){this.post=new Fr(this.gl),this.post.isActive=!1,this.scene=new Er(this.gl,this.params,this.preset),window.dispatchEvent(new Event("gradientReady"))}applyPreset(t){this.scene.applyPreset(t)}render(){this.time+=.01,this.gl.clear(this.gl.COLOR_BUFFER_BIT||this.gl.DEPTH_BUFFER_BIT),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.post&&this.post.isActive&&this.post.setupRender(),this.scene&&this.scene.render(this.time,this.scroll.y),this.post&&this.post.isActive&&this.post.render(this.time),requestAnimationFrame(this.render.bind(this))}resize(){dr(this.gl.canvas,this.gl.vp.dpr),this.gl.vp={viewSize:this.viewSize,px:this.pixelSize,inner:[window.innerWidth,window.innerHeight],scroll:window.scrollY},this.gl.camera&&(this.gl.camera=this.camera.get(this.gl)),this.scroll&&this.scroll.resize(this.gl),this.post&&this.post.resize(this.gl),this.scene&&this.scene.resize(this.gl)}get viewSize(){const t=Math.abs(this.gl.camera.z*Math.tan(this.gl.camera.fov/2)*2);return[t*(this.gl.canvas.width/this.gl.canvas.height),t]}get pixelSize(){return this.viewSize[0]/window.innerWidth}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.2
 * @author George Michael Brower
 * @license MIT
 */class G{constructor(t,i,n,r,o="div"){this.parent=t,this.object=i,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),G.nextNameID=G.nextNameID||0,this.$name.id=`lil-gui-name-${++G.nextNameID}`,this.$widget=document.createElement(o),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",s=>s.stopPropagation()),this.domElement.addEventListener("keyup",s=>s.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const i=this.parent.add(this.object,this.property,t);return i.name(this._name),this.destroy(),i}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class $r extends G{constructor(t,i,n){super(t,i,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function It(e){let t,i;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?i=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),i?"#"+i:!1}const Ir={isPrimitive:!0,match:e=>typeof e=="string",fromHexString:It,toHexString:It},J={isPrimitive:!0,match:e=>typeof e=="number",fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>"#"+e.toString(16).padStart(6,0)},Br=[Ir,J,{isPrimitive:!1,match:e=>Array.isArray(e),fromHexString(e,t,i=1){const n=J.fromHexString(e);t[0]=(n>>16&255)/255*i,t[1]=(n>>8&255)/255*i,t[2]=(n&255)/255*i},toHexString([e,t,i],n=1){n=255/n;const r=e*n<<16^t*n<<8^i*n<<0;return J.toHexString(r)}},{isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,i=1){const n=J.fromHexString(e);t.r=(n>>16&255)/255*i,t.g=(n>>8&255)/255*i,t.b=(n&255)/255*i},toHexString({r:e,g:t,b:i},n=1){n=255/n;const r=e*n<<16^t*n<<8^i*n<<0;return J.toHexString(r)}}];function Pr(e){return Br.find(t=>t.match(e))}class Rr extends G{constructor(t,i,n,r){super(t,i,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Pr(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=It(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const i=this._format.fromHexString(t);this.setValue(i)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Bt extends G{constructor(t,i,n){super(t,i,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Mr extends G{constructor(t,i,n,r,o,s){super(t,i,n,"number"),this._initInput(),this.min(r),this.max(o);const a=s!==void 0;this.step(a?s:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,i=!0){return this._step=t,this._stepExplicit=i,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let i=(t-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=i*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const i=()=>{let p=parseFloat(this.$input.value);isNaN(p)||(this._stepExplicit&&(p=this._snap(p)),this.setValue(this._clamp(p)))},n=p=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+p),this.$input.value=this.getValue())},r=p=>{p.key==="Enter"&&this.$input.blur(),p.code==="ArrowUp"&&(p.preventDefault(),n(this._step*this._arrowKeyMultiplier(p))),p.code==="ArrowDown"&&(p.preventDefault(),n(this._step*this._arrowKeyMultiplier(p)*-1))},o=p=>{this._inputFocused&&(p.preventDefault(),n(this._step*this._normalizeMouseWheel(p)))};let s=!1,a,c,l,f,u;const h=5,m=p=>{a=p.clientX,c=l=p.clientY,s=!0,f=this.getValue(),u=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",A)},v=p=>{if(s){const y=p.clientX-a,b=p.clientY-c;Math.abs(b)>h?(p.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>h&&A()}if(!s){const y=p.clientY-l;u-=y*this._step*this._arrowKeyMultiplier(p),f+u>this._max?u=this._max-f:f+u<this._min&&(u=this._min-f),this._snapClampSetValue(f+u)}l=p.clientY},A=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",A)},_=()=>{this._inputFocused=!0},g=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",i),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",o,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",_),this.$input.addEventListener("blur",g)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(g,p,y,b,w)=>(g-p)/(y-p)*(w-b)+b,i=g=>{const p=this.$slider.getBoundingClientRect();let y=t(g,p.left,p.right,this._min,this._max);this._snapClampSetValue(y)},n=g=>{this._setDraggingStyle(!0),i(g.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",o)},r=g=>{i(g.clientX)},o=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",o)};let s=!1,a,c;const l=g=>{g.preventDefault(),this._setDraggingStyle(!0),i(g.touches[0].clientX),s=!1},f=g=>{g.touches.length>1||(this._hasScrollBar?(a=g.touches[0].clientX,c=g.touches[0].clientY,s=!0):l(g),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",h))},u=g=>{if(s){const p=g.touches[0].clientX-a,y=g.touches[0].clientY-c;Math.abs(p)>Math.abs(y)?l(g):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",h))}else g.preventDefault(),i(g.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",h)},m=this._callOnFinishChange.bind(this),v=400;let A;const _=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const y=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(A),A=setTimeout(m,v)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",f,{passive:!1}),this.$slider.addEventListener("wheel",_,{passive:!1})}_setDraggingStyle(t,i="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${i}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:i,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(i=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),i+-n}_arrowKeyMultiplier(t){let i=this._stepExplicit?1:10;return t.shiftKey?i*=10:t.altKey&&(i/=10),i}_snap(t){const i=Math.round(t/this._step)*this._step;return parseFloat(i.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Dr extends G{constructor(t,i,n,r){super(t,i,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(o=>{const s=document.createElement("option");s.innerHTML=o,this.$select.appendChild(s)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),i=this._values.indexOf(t);return this.$select.selectedIndex=i,this.$display.innerHTML=i===-1?t:this._names[i],this}}class kr extends G{constructor(t,i,n){super(t,i,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Lr=`.lil-gui {
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
}`;function Ur(e){const t=document.createElement("style");t.innerHTML=e;const i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(t,i):document.head.appendChild(t)}let Ie=!1;class Pt{constructor({parent:t,autoPlace:i=t===void 0,container:n,width:r,title:o="Controls",closeFolders:s=!1,injectStyles:a=!0,touchStyles:c=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(o),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),c&&this.domElement.classList.add("allow-touch-styles"),!Ie&&a&&(Ur(Lr),Ie=!0),n?n.appendChild(this.domElement):i&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=s}add(t,i,n,r,o){if(Object(n)===n)return new Dr(this,t,i,n);const s=t[i];switch(typeof s){case"number":return new Mr(this,t,i,n,r,o);case"boolean":return new $r(this,t,i);case"string":return new kr(this,t,i);case"function":return new Bt(this,t,i)}console.error(`gui.add failed
	property:`,i,`
	object:`,t,`
	value:`,s)}addColor(t,i,n=1){return new Rr(this,t,i,n)}addFolder(t){const i=new Pt({parent:this,title:t});return this.root._closeFolders&&i.close(),i}load(t,i=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Bt||n._name in t.controllers&&n.load(t.controllers[n._name])}),i&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const i={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Bt)){if(n._name in i.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);i.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in i.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);i.folders[n._title]=n.save()}),i}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("transition");const n=o=>{o.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(i=>{t=t.concat(i.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(i=>{t=t.concat(i.foldersRecursive())}),t}}const Nr=Pt;(()=>{class e{constructor(r,o,s){De(this,"presets",{"Preset 0":()=>{this.gl.applyPreset(0),this.initGui(this.params[0])},"Preset 1":()=>{this.gl.applyPreset(1),this.initGui(this.params[1])}});this.params=r,this.call={mode:a=>{console.log("light mode",a),this.gl.scene.quad.mode(a)},swap:(a,c={d:0})=>{console.log("swap",a,c),this.gl.scene.quad.swap(a,c)}},this.gl=new zr("c",r,o),this.gl.applyPreset(0),s&&this.initGui(r[o])}setNewParams(r){this.params=r,this.gl.scene.setNewParams(r)}setUniforms(){this.gl.scene.quad.setUniforms()}initGui(r){this.data=r,this.gui=new Nr,this.gui.add(this.presets,"Preset 0"),this.gui.add(this.presets,"Preset 1"),this.gui.add(this.data,"multx",0,10).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"multy",0,10).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"hue",0,1).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"brightness",0,1,.01).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"mouse",-1,1).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"scale",0,10).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"noise",0,10).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"bw",0,1).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"time",0,1)}}let t={0:{multx:.2,multy:.8,hue:0,brightness:.74,mouse:1,scale:.29,scale2:.2,noise:1,color:[0,.33,.66],color2:[0,0,0],bw:1,bw2:1,time:.5},1:{multx:.2,multy:.8,hue:0,brightness:.8,mouse:1,scale:.2,scale2:.2,noise:1,color:[0,.33,.66],color2:[0,0,0],bw:0,bw2:0,time:1}};const i=new e(t,0,!0);window.gradient=i,window.Gradient=i})()});
