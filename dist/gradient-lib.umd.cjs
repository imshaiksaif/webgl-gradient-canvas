(function(P){typeof define=="function"&&define.amd?define(P):P()})(function(){"use strict";var qr=Object.defineProperty;var Qr=(P,T,q)=>T in P?qr(P,T,{enumerable:!0,configurable:!0,writable:!0,value:q}):P[T]=q;var Ne=(P,T,q)=>(Qr(P,typeof T!="symbol"?T+"":T,q),q);/* @license twgl.js 5.5.4 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */let P=Float32Array;function T(t,e,i){const n=new P(3);return t&&(n[0]=t),e&&(n[1]=e),i&&(n[2]=i),n}function q(t,e,i){return i=i||new P(3),i[0]=t[0]-e[0],i[1]=t[1]-e[1],i[2]=t[2]-e[2],i}function Ot(t,e,i){i=i||new P(3);const n=t[2]*e[0]-t[0]*e[2],r=t[0]*e[1]-t[1]*e[0];return i[0]=t[1]*e[2]-t[2]*e[1],i[1]=n,i[2]=r,i}function _t(t,e){e=e||new P(3);const i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=Math.sqrt(i);return n>1e-5?(e[0]=t[0]/n,e[1]=t[1]/n,e[2]=t[2]/n):(e[0]=0,e[1]=0,e[2]=0),e}let b=Float32Array;function Ve(t){const e=b;return b=t,e}function Ge(t,e){return e=e||new b(16),e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e[4]=-t[4],e[5]=-t[5],e[6]=-t[6],e[7]=-t[7],e[8]=-t[8],e[9]=-t[9],e[10]=-t[10],e[11]=-t[11],e[12]=-t[12],e[13]=-t[13],e[14]=-t[14],e[15]=-t[15],e}function He(){return new b(16).fill(0)}function Lt(t,e){return e=e||new b(16),e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function Nt(t){return t=t||new b(16),t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Ye(t,e){if(e=e||new b(16),e===t){let p;return p=t[1],t[1]=t[4],t[4]=p,p=t[2],t[2]=t[8],t[8]=p,p=t[3],t[3]=t[12],t[12]=p,p=t[6],t[6]=t[9],t[9]=p,p=t[7],t[7]=t[13],t[13]=p,p=t[11],t[11]=t[14],t[14]=p,e}const i=t[0*4+0],n=t[0*4+1],r=t[0*4+2],s=t[0*4+3],o=t[1*4+0],a=t[1*4+1],l=t[1*4+2],c=t[1*4+3],u=t[2*4+0],h=t[2*4+1],f=t[2*4+2],g=t[2*4+3],m=t[3*4+0],_=t[3*4+1],y=t[3*4+2],d=t[3*4+3];return e[0]=i,e[1]=o,e[2]=u,e[3]=m,e[4]=n,e[5]=a,e[6]=h,e[7]=_,e[8]=r,e[9]=l,e[10]=f,e[11]=y,e[12]=s,e[13]=c,e[14]=g,e[15]=d,e}function Vt(t,e){e=e||new b(16);const i=t[0*4+0],n=t[0*4+1],r=t[0*4+2],s=t[0*4+3],o=t[1*4+0],a=t[1*4+1],l=t[1*4+2],c=t[1*4+3],u=t[2*4+0],h=t[2*4+1],f=t[2*4+2],g=t[2*4+3],m=t[3*4+0],_=t[3*4+1],y=t[3*4+2],d=t[3*4+3],p=f*d,A=y*g,x=l*d,E=y*c,F=l*g,z=f*c,R=r*d,M=y*s,$=r*g,k=f*s,B=r*c,D=l*s,U=u*_,O=m*h,L=o*_,N=m*a,V=o*h,ut=u*a,ft=i*_,pt=m*n,dt=i*h,gt=u*n,mt=i*a,vt=o*n,De=p*a+E*h+F*_-(A*a+x*h+z*_),Ue=A*n+R*h+k*_-(p*n+M*h+$*_),Oe=x*n+M*a+B*_-(E*n+R*a+D*_),Le=z*n+$*a+D*h-(F*n+k*a+B*h),S=1/(i*De+o*Ue+u*Oe+m*Le);return e[0]=S*De,e[1]=S*Ue,e[2]=S*Oe,e[3]=S*Le,e[4]=S*(A*o+x*u+z*m-(p*o+E*u+F*m)),e[5]=S*(p*i+M*u+$*m-(A*i+R*u+k*m)),e[6]=S*(E*i+R*o+D*m-(x*i+M*o+B*m)),e[7]=S*(F*i+k*o+B*u-(z*i+$*o+D*u)),e[8]=S*(U*c+N*g+V*d-(O*c+L*g+ut*d)),e[9]=S*(O*s+ft*g+gt*d-(U*s+pt*g+dt*d)),e[10]=S*(L*s+pt*c+mt*d-(N*s+ft*c+vt*d)),e[11]=S*(ut*s+dt*c+vt*g-(V*s+gt*c+mt*g)),e[12]=S*(L*f+ut*y+O*l-(V*y+U*l+N*f)),e[13]=S*(dt*y+U*r+pt*f-(ft*f+gt*y+O*r)),e[14]=S*(ft*l+vt*y+N*r-(mt*y+L*r+pt*l)),e[15]=S*(mt*f+V*r+gt*l-(dt*l+vt*f+ut*r)),e}function je(t,e,i){i=i||new b(16);const n=t[0],r=t[1],s=t[2],o=t[3],a=t[4+0],l=t[4+1],c=t[4+2],u=t[4+3],h=t[8+0],f=t[8+1],g=t[8+2],m=t[8+3],_=t[12+0],y=t[12+1],d=t[12+2],p=t[12+3],A=e[0],x=e[1],E=e[2],F=e[3],z=e[4+0],R=e[4+1],M=e[4+2],$=e[4+3],k=e[8+0],B=e[8+1],D=e[8+2],U=e[8+3],O=e[12+0],L=e[12+1],N=e[12+2],V=e[12+3];return i[0]=n*A+a*x+h*E+_*F,i[1]=r*A+l*x+f*E+y*F,i[2]=s*A+c*x+g*E+d*F,i[3]=o*A+u*x+m*E+p*F,i[4]=n*z+a*R+h*M+_*$,i[5]=r*z+l*R+f*M+y*$,i[6]=s*z+c*R+g*M+d*$,i[7]=o*z+u*R+m*M+p*$,i[8]=n*k+a*B+h*D+_*U,i[9]=r*k+l*B+f*D+y*U,i[10]=s*k+c*B+g*D+d*U,i[11]=o*k+u*B+m*D+p*U,i[12]=n*O+a*L+h*N+_*V,i[13]=r*O+l*L+f*N+y*V,i[14]=s*O+c*L+g*N+d*V,i[15]=o*O+u*L+m*N+p*V,i}function Xe(t,e,i){return i=i||Nt(),t!==i&&(i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],i[4]=t[4],i[5]=t[5],i[6]=t[6],i[7]=t[7],i[8]=t[8],i[9]=t[9],i[10]=t[10],i[11]=t[11]),i[12]=e[0],i[13]=e[1],i[14]=e[2],i[15]=1,i}function We(t,e){return e=e||T(),e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function qe(t,e,i){i=i||T();const n=e*4;return i[0]=t[n+0],i[1]=t[n+1],i[2]=t[n+2],i}function Qe(t,e,i,n){n!==t&&(n=Lt(t,n));const r=i*4;return n[r+0]=e[0],n[r+1]=e[1],n[r+2]=e[2],n}function Ke(t,e,i,n,r){r=r||new b(16);const s=Math.tan(Math.PI*.5-.5*t),o=1/(i-n);return r[0]=s/e,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=s,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=(i+n)*o,r[11]=-1,r[12]=0,r[13]=0,r[14]=i*n*o*2,r[15]=0,r}function Je(t,e,i,n,r,s,o){return o=o||new b(16),o[0]=2/(e-t),o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2/(n-i),o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=2/(r-s),o[11]=0,o[12]=(e+t)/(t-e),o[13]=(n+i)/(i-n),o[14]=(s+r)/(r-s),o[15]=1,o}function Ze(t,e,i,n,r,s,o){o=o||new b(16);const a=e-t,l=n-i,c=r-s;return o[0]=2*r/a,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2*r/l,o[6]=0,o[7]=0,o[8]=(t+e)/a,o[9]=(n+i)/l,o[10]=s/c,o[11]=-1,o[12]=0,o[13]=0,o[14]=r*s/c,o[15]=0,o}let j,Q,Y;function ti(t,e,i,n){return n=n||new b(16),j=j||T(),Q=Q||T(),Y=Y||T(),_t(q(t,e,Y),Y),_t(Ot(i,Y,j),j),_t(Ot(Y,j,Q),Q),n[0]=j[0],n[1]=j[1],n[2]=j[2],n[3]=0,n[4]=Q[0],n[5]=Q[1],n[6]=Q[2],n[7]=0,n[8]=Y[0],n[9]=Y[1],n[10]=Y[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function ei(t,e){return e=e||new b(16),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function ii(t,e,i){i=i||new b(16);const n=e[0],r=e[1],s=e[2],o=t[0],a=t[1],l=t[2],c=t[3],u=t[1*4+0],h=t[1*4+1],f=t[1*4+2],g=t[1*4+3],m=t[2*4+0],_=t[2*4+1],y=t[2*4+2],d=t[2*4+3],p=t[3*4+0],A=t[3*4+1],x=t[3*4+2],E=t[3*4+3];return t!==i&&(i[0]=o,i[1]=a,i[2]=l,i[3]=c,i[4]=u,i[5]=h,i[6]=f,i[7]=g,i[8]=m,i[9]=_,i[10]=y,i[11]=d),i[12]=o*n+u*r+m*s+p,i[13]=a*n+h*r+_*s+A,i[14]=l*n+f*r+y*s+x,i[15]=c*n+g*r+d*s+E,i}function ni(t,e){e=e||new b(16);const i=Math.cos(t),n=Math.sin(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=i,e[6]=n,e[7]=0,e[8]=0,e[9]=-n,e[10]=i,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function ri(t,e,i){i=i||new b(16);const n=t[4],r=t[5],s=t[6],o=t[7],a=t[8],l=t[9],c=t[10],u=t[11],h=Math.cos(e),f=Math.sin(e);return i[4]=h*n+f*a,i[5]=h*r+f*l,i[6]=h*s+f*c,i[7]=h*o+f*u,i[8]=h*a-f*n,i[9]=h*l-f*r,i[10]=h*c-f*s,i[11]=h*u-f*o,t!==i&&(i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15]),i}function si(t,e){e=e||new b(16);const i=Math.cos(t),n=Math.sin(t);return e[0]=i,e[1]=0,e[2]=-n,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=n,e[9]=0,e[10]=i,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function oi(t,e,i){i=i||new b(16);const n=t[0*4+0],r=t[0*4+1],s=t[0*4+2],o=t[0*4+3],a=t[2*4+0],l=t[2*4+1],c=t[2*4+2],u=t[2*4+3],h=Math.cos(e),f=Math.sin(e);return i[0]=h*n-f*a,i[1]=h*r-f*l,i[2]=h*s-f*c,i[3]=h*o-f*u,i[8]=h*a+f*n,i[9]=h*l+f*r,i[10]=h*c+f*s,i[11]=h*u+f*o,t!==i&&(i[4]=t[4],i[5]=t[5],i[6]=t[6],i[7]=t[7],i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15]),i}function ai(t,e){e=e||new b(16);const i=Math.cos(t),n=Math.sin(t);return e[0]=i,e[1]=n,e[2]=0,e[3]=0,e[4]=-n,e[5]=i,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function li(t,e,i){i=i||new b(16);const n=t[0*4+0],r=t[0*4+1],s=t[0*4+2],o=t[0*4+3],a=t[1*4+0],l=t[1*4+1],c=t[1*4+2],u=t[1*4+3],h=Math.cos(e),f=Math.sin(e);return i[0]=h*n+f*a,i[1]=h*r+f*l,i[2]=h*s+f*c,i[3]=h*o+f*u,i[4]=h*a-f*n,i[5]=h*l-f*r,i[6]=h*c-f*s,i[7]=h*u-f*o,t!==i&&(i[8]=t[8],i[9]=t[9],i[10]=t[10],i[11]=t[11],i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15]),i}function ci(t,e,i){i=i||new b(16);let n=t[0],r=t[1],s=t[2];const o=Math.sqrt(n*n+r*r+s*s);n/=o,r/=o,s/=o;const a=n*n,l=r*r,c=s*s,u=Math.cos(e),h=Math.sin(e),f=1-u;return i[0]=a+(1-a)*u,i[1]=n*r*f+s*h,i[2]=n*s*f-r*h,i[3]=0,i[4]=n*r*f-s*h,i[5]=l+(1-l)*u,i[6]=r*s*f+n*h,i[7]=0,i[8]=n*s*f+r*h,i[9]=r*s*f-n*h,i[10]=c+(1-c)*u,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function hi(t,e,i,n){n=n||new b(16);let r=e[0],s=e[1],o=e[2];const a=Math.sqrt(r*r+s*s+o*o);r/=a,s/=a,o/=a;const l=r*r,c=s*s,u=o*o,h=Math.cos(i),f=Math.sin(i),g=1-h,m=l+(1-l)*h,_=r*s*g+o*f,y=r*o*g-s*f,d=r*s*g-o*f,p=c+(1-c)*h,A=s*o*g+r*f,x=r*o*g+s*f,E=s*o*g-r*f,F=u+(1-u)*h,z=t[0],R=t[1],M=t[2],$=t[3],k=t[4],B=t[5],D=t[6],U=t[7],O=t[8],L=t[9],N=t[10],V=t[11];return n[0]=m*z+_*k+y*O,n[1]=m*R+_*B+y*L,n[2]=m*M+_*D+y*N,n[3]=m*$+_*U+y*V,n[4]=d*z+p*k+A*O,n[5]=d*R+p*B+A*L,n[6]=d*M+p*D+A*N,n[7]=d*$+p*U+A*V,n[8]=x*z+E*k+F*O,n[9]=x*R+E*B+F*L,n[10]=x*M+E*D+F*N,n[11]=x*$+E*U+F*V,t!==n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n}function ui(t,e){return e=e||new b(16),e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function fi(t,e,i){i=i||new b(16);const n=e[0],r=e[1],s=e[2];return i[0]=n*t[0*4+0],i[1]=n*t[0*4+1],i[2]=n*t[0*4+2],i[3]=n*t[0*4+3],i[4]=r*t[1*4+0],i[5]=r*t[1*4+1],i[6]=r*t[1*4+2],i[7]=r*t[1*4+3],i[8]=s*t[2*4+0],i[9]=s*t[2*4+1],i[10]=s*t[2*4+2],i[11]=s*t[2*4+3],t!==i&&(i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15]),i}function pi(t,e,i){i=i||T();const n=e[0],r=e[1],s=e[2],o=n*t[0*4+3]+r*t[1*4+3]+s*t[2*4+3]+t[3*4+3];return i[0]=(n*t[0*4+0]+r*t[1*4+0]+s*t[2*4+0]+t[3*4+0])/o,i[1]=(n*t[0*4+1]+r*t[1*4+1]+s*t[2*4+1]+t[3*4+1])/o,i[2]=(n*t[0*4+2]+r*t[1*4+2]+s*t[2*4+2]+t[3*4+2])/o,i}function di(t,e,i){i=i||T();const n=e[0],r=e[1],s=e[2];return i[0]=n*t[0*4+0]+r*t[1*4+0]+s*t[2*4+0],i[1]=n*t[0*4+1]+r*t[1*4+1]+s*t[2*4+1],i[2]=n*t[0*4+2]+r*t[1*4+2]+s*t[2*4+2],i}function gi(t,e,i){i=i||T();const n=Vt(t),r=e[0],s=e[1],o=e[2];return i[0]=r*n[0*4+0]+s*n[0*4+1]+o*n[0*4+2],i[1]=r*n[1*4+0]+s*n[1*4+1]+o*n[1*4+2],i[2]=r*n[2*4+0]+s*n[2*4+1]+o*n[2*4+2],i}var Gt=Object.freeze({__proto__:null,axisRotate:hi,axisRotation:ci,copy:Lt,create:He,frustum:Ze,getAxis:qe,getTranslation:We,identity:Nt,inverse:Vt,lookAt:ti,multiply:je,negate:Ge,ortho:Je,perspective:Ke,rotateX:ri,rotateY:oi,rotateZ:li,rotationX:ni,rotationY:si,rotationZ:ai,scale:fi,scaling:ui,setAxis:Qe,setDefaultType:Ve,setTranslation:Xe,transformDirection:di,transformNormal:gi,transformPoint:pi,translate:ii,translation:ei,transpose:Ye});const yt=5120,Z=5121,At=5122,bt=5123,xt=5124,wt=5125,Et=5126,mi=32819,vi=32820,_i=33635,yi=5131,Ai=33640,bi=35899,xi=35902,wi=36269,Ei=34042,Ht={};{const t=Ht;t[yt]=Int8Array,t[Z]=Uint8Array,t[At]=Int16Array,t[bt]=Uint16Array,t[xt]=Int32Array,t[wt]=Uint32Array,t[Et]=Float32Array,t[mi]=Uint16Array,t[vi]=Uint16Array,t[_i]=Uint16Array,t[yi]=Uint16Array,t[Ai]=Uint32Array,t[bi]=Uint32Array,t[xi]=Uint32Array,t[wi]=Uint32Array,t[Ei]=Uint32Array}function Yt(t){if(t instanceof Int8Array)return yt;if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)return Z;if(t instanceof Int16Array)return At;if(t instanceof Uint16Array)return bt;if(t instanceof Int32Array)return xt;if(t instanceof Uint32Array)return wt;if(t instanceof Float32Array)return Et;throw new Error("unsupported typed array type")}function jt(t){if(t===Int8Array)return yt;if(t===Uint8Array||t===Uint8ClampedArray)return Z;if(t===Int16Array)return At;if(t===Uint16Array)return bt;if(t===Int32Array)return xt;if(t===Uint32Array)return wt;if(t===Float32Array)return Et;throw new Error("unsupported typed array type")}function Ti(t){const e=Ht[t];if(!e)throw new Error("unknown gl type");return e}const Tt=typeof SharedArrayBuffer<"u"?function(e){return e&&e.buffer&&(e.buffer instanceof ArrayBuffer||e.buffer instanceof SharedArrayBuffer)}:function(e){return e&&e.buffer&&e.buffer instanceof ArrayBuffer};function Si(...t){console.error(...t)}const Xt=new Map;function Wt(t,e){if(!t||typeof t!="object")return!1;let i=Xt.get(e);i||(i=new WeakMap,Xt.set(e,i));let n=i.get(t);if(n===void 0){const r=Object.prototype.toString.call(t);n=r.substring(8,r.length-1)===e,i.set(t,n)}return n}function Ci(t,e){return typeof WebGLBuffer<"u"&&Wt(e,"WebGLBuffer")}function qt(t,e){return typeof WebGLTexture<"u"&&Wt(e,"WebGLTexture")}const Qt=35044,K=34962,Ii=34963,Fi=34660,Pi=5120,zi=5121,Ri=5122,Mi=5123,$i=5124,ki=5125,Kt=5126,Jt={attribPrefix:""};function Bi(t,e,i,n,r){t.bindBuffer(e,i),t.bufferData(e,n,r||Qt)}function Zt(t,e,i,n){if(Ci(t,e))return e;i=i||K;const r=t.createBuffer();return Bi(t,i,r,e,n),r}function te(t){return t==="indices"}function Di(t){return t===Int8Array||t===Uint8Array}function Ui(t){return t.length?t:t.data}const Oi=/coord|texture/i,Li=/color|colour/i;function Ni(t,e){let i;if(Oi.test(t)?i=2:Li.test(t)?i=4:i=3,e%i>0)throw new Error(`Can not guess numComponents for attribute '${t}'. Tried ${i} but ${e} values is not evenly divisible by ${i}. You should specify it.`);return i}function Vi(t,e,i){return t.numComponents||t.size||Ni(e,i||Ui(t).length)}function ee(t,e){if(Tt(t))return t;if(Tt(t.data))return t.data;Array.isArray(t)&&(t={data:t});let i=t.type?St(t.type):void 0;return i||(te(e)?i=Uint16Array:i=Float32Array),new i(t.data)}function Gi(t){return typeof t=="number"?t:t?jt(t):Kt}function St(t){return typeof t=="number"?Ti(t):t||Float32Array}function Hi(t,e){return{buffer:e.buffer,numValues:2*3*4,type:Gi(e.type),arrayType:St(e.type)}}function Yi(t,e){const i=e.data||e,n=St(e.type),r=i*n.BYTES_PER_ELEMENT,s=t.createBuffer();return t.bindBuffer(K,s),t.bufferData(K,r,e.drawType||Qt),{buffer:s,numValues:i,type:jt(n),arrayType:n}}function ji(t,e,i){const n=ee(e,i);return{arrayType:n.constructor,buffer:Zt(t,n,void 0,e.drawType),type:Yt(n),numValues:0}}function Xi(t,e){const i={};return Object.keys(e).forEach(function(n){if(!te(n)){const r=e[n],s=r.attrib||r.name||r.attribName||Jt.attribPrefix+n;if(r.value){if(!Array.isArray(r.value)&&!Tt(r.value))throw new Error("array.value is not array or typedarray");i[s]={value:r.value}}else{let o;r.buffer&&r.buffer instanceof WebGLBuffer?o=Hi:typeof r=="number"||typeof r.data=="number"?o=Yi:o=ji;const{buffer:a,type:l,numValues:c,arrayType:u}=o(t,r,n),h=r.normalize!==void 0?r.normalize:Di(u),f=Vi(r,n,c);i[s]={buffer:a,numComponents:f,type:l,normalize:h,stride:r.stride||0,offset:r.offset||0,divisor:r.divisor===void 0?void 0:r.divisor,drawType:r.drawType}}}}),t.bindBuffer(K,null),i}function Wi(t,e){return e===Pi||e===zi?1:e===Ri||e===Mi?2:e===$i||e===ki||e===Kt?4:0}const Ct=["position","positions","a_position"];function qi(t,e){let i,n;for(n=0;n<Ct.length&&(i=Ct[n],!(i in e||(i=Jt.attribPrefix+i,i in e)));++n);n===Ct.length&&(i=Object.keys(e)[0]);const r=e[i];if(!r.buffer)return 1;t.bindBuffer(K,r.buffer);const s=t.getBufferParameter(K,Fi);t.bindBuffer(K,null);const o=Wi(t,r.type),a=s/o,l=r.numComponents||r.size,c=a/l;if(c%1!==0)throw new Error(`numComponents ${l} not correct for length ${length}`);return c}function ie(t,e,i){const n=Xi(t,e),r=Object.assign({},i||{});r.attribs=Object.assign({},i?i.attribs:{},n);const s=e.indices;if(s){const o=ee(s,"indices");r.indices=Zt(t,o,Ii),r.numElements=o.length,r.elementType=Yt(o)}else r.numElements||(r.numElements=qi(t,r.attribs));return r}function It(t){return!!t.texStorage2D}const Qi=function(){const t={},e={};function i(n){const r=n.constructor.name;if(!t[r]){for(const s in n)if(typeof n[s]=="number"){const o=e[n[s]];e[n[s]]=o?`${o} | ${s}`:s}t[r]=!0}}return function(r,s){return i(r),e[s]||(typeof s=="number"?`0x${s.toString(16)}`:s)}}(),Ft=Si;function ne(t){return typeof document<"u"&&document.getElementById?document.getElementById(t):null}const nt=33984,rt=34962,Ki=34963,Ji=35713,Zi=35714,tn=35632,en=35633,nn=35981,re=35718,rn=35721,sn=35971,on=35382,an=35396,ln=35398,cn=35392,hn=35395,st=5126,se=35664,oe=35665,ae=35666,Pt=5124,le=35667,ce=35668,he=35669,ue=35670,fe=35671,pe=35672,de=35673,ge=35674,me=35675,ve=35676,un=35678,fn=35680,pn=35679,dn=35682,gn=35685,mn=35686,vn=35687,_n=35688,yn=35689,An=35690,bn=36289,xn=36292,wn=36293,zt=5125,_e=36294,ye=36295,Ae=36296,En=36298,Tn=36299,Sn=36300,Cn=36303,In=36306,Fn=36307,Pn=36308,zn=36311,ot=3553,at=34067,Rt=32879,lt=35866,v={};function be(t,e){return v[e].bindPoint}function Rn(t,e){return function(i){t.uniform1f(e,i)}}function Mn(t,e){return function(i){t.uniform1fv(e,i)}}function $n(t,e){return function(i){t.uniform2fv(e,i)}}function kn(t,e){return function(i){t.uniform3fv(e,i)}}function Bn(t,e){return function(i){t.uniform4fv(e,i)}}function xe(t,e){return function(i){t.uniform1i(e,i)}}function we(t,e){return function(i){t.uniform1iv(e,i)}}function Ee(t,e){return function(i){t.uniform2iv(e,i)}}function Te(t,e){return function(i){t.uniform3iv(e,i)}}function Se(t,e){return function(i){t.uniform4iv(e,i)}}function Dn(t,e){return function(i){t.uniform1ui(e,i)}}function Un(t,e){return function(i){t.uniform1uiv(e,i)}}function On(t,e){return function(i){t.uniform2uiv(e,i)}}function Ln(t,e){return function(i){t.uniform3uiv(e,i)}}function Nn(t,e){return function(i){t.uniform4uiv(e,i)}}function Vn(t,e){return function(i){t.uniformMatrix2fv(e,!1,i)}}function Gn(t,e){return function(i){t.uniformMatrix3fv(e,!1,i)}}function Hn(t,e){return function(i){t.uniformMatrix4fv(e,!1,i)}}function Yn(t,e){return function(i){t.uniformMatrix2x3fv(e,!1,i)}}function jn(t,e){return function(i){t.uniformMatrix3x2fv(e,!1,i)}}function Xn(t,e){return function(i){t.uniformMatrix2x4fv(e,!1,i)}}function Wn(t,e){return function(i){t.uniformMatrix4x2fv(e,!1,i)}}function qn(t,e){return function(i){t.uniformMatrix3x4fv(e,!1,i)}}function Qn(t,e){return function(i){t.uniformMatrix4x3fv(e,!1,i)}}function C(t,e,i,n){const r=be(t,e);return It(t)?function(s){let o,a;!s||qt(t,s)?(o=s,a=null):(o=s.texture,a=s.sampler),t.uniform1i(n,i),t.activeTexture(nt+i),t.bindTexture(r,o),t.bindSampler(i,a)}:function(s){t.uniform1i(n,i),t.activeTexture(nt+i),t.bindTexture(r,s)}}function I(t,e,i,n,r){const s=be(t,e),o=new Int32Array(r);for(let a=0;a<r;++a)o[a]=i+a;return It(t)?function(a){t.uniform1iv(n,o),a.forEach(function(l,c){t.activeTexture(nt+o[c]);let u,h;!l||qt(t,l)?(u=l,h=null):(u=l.texture,h=l.sampler),t.bindSampler(i,h),t.bindTexture(s,u)})}:function(a){t.uniform1iv(n,o),a.forEach(function(l,c){t.activeTexture(nt+o[c]),t.bindTexture(s,l)})}}v[st]={Type:Float32Array,size:4,setter:Rn,arraySetter:Mn},v[se]={Type:Float32Array,size:8,setter:$n,cols:2},v[oe]={Type:Float32Array,size:12,setter:kn,cols:3},v[ae]={Type:Float32Array,size:16,setter:Bn,cols:4},v[Pt]={Type:Int32Array,size:4,setter:xe,arraySetter:we},v[le]={Type:Int32Array,size:8,setter:Ee,cols:2},v[ce]={Type:Int32Array,size:12,setter:Te,cols:3},v[he]={Type:Int32Array,size:16,setter:Se,cols:4},v[zt]={Type:Uint32Array,size:4,setter:Dn,arraySetter:Un},v[_e]={Type:Uint32Array,size:8,setter:On,cols:2},v[ye]={Type:Uint32Array,size:12,setter:Ln,cols:3},v[Ae]={Type:Uint32Array,size:16,setter:Nn,cols:4},v[ue]={Type:Uint32Array,size:4,setter:xe,arraySetter:we},v[fe]={Type:Uint32Array,size:8,setter:Ee,cols:2},v[pe]={Type:Uint32Array,size:12,setter:Te,cols:3},v[de]={Type:Uint32Array,size:16,setter:Se,cols:4},v[ge]={Type:Float32Array,size:32,setter:Vn,rows:2,cols:2},v[me]={Type:Float32Array,size:48,setter:Gn,rows:3,cols:3},v[ve]={Type:Float32Array,size:64,setter:Hn,rows:4,cols:4},v[gn]={Type:Float32Array,size:32,setter:Yn,rows:2,cols:3},v[mn]={Type:Float32Array,size:32,setter:Xn,rows:2,cols:4},v[vn]={Type:Float32Array,size:48,setter:jn,rows:3,cols:2},v[_n]={Type:Float32Array,size:48,setter:qn,rows:3,cols:4},v[yn]={Type:Float32Array,size:64,setter:Wn,rows:4,cols:2},v[An]={Type:Float32Array,size:64,setter:Qn,rows:4,cols:3},v[un]={Type:null,size:0,setter:C,arraySetter:I,bindPoint:ot},v[fn]={Type:null,size:0,setter:C,arraySetter:I,bindPoint:at},v[pn]={Type:null,size:0,setter:C,arraySetter:I,bindPoint:Rt},v[dn]={Type:null,size:0,setter:C,arraySetter:I,bindPoint:ot},v[bn]={Type:null,size:0,setter:C,arraySetter:I,bindPoint:lt},v[xn]={Type:null,size:0,setter:C,arraySetter:I,bindPoint:lt},v[wn]={Type:null,size:0,setter:C,arraySetter:I,bindPoint:at},v[En]={Type:null,size:0,setter:C,arraySetter:I,bindPoint:ot},v[Tn]={Type:null,size:0,setter:C,arraySetter:I,bindPoint:Rt},v[Sn]={Type:null,size:0,setter:C,arraySetter:I,bindPoint:at},v[Cn]={Type:null,size:0,setter:C,arraySetter:I,bindPoint:lt},v[In]={Type:null,size:0,setter:C,arraySetter:I,bindPoint:ot},v[Fn]={Type:null,size:0,setter:C,arraySetter:I,bindPoint:Rt},v[Pn]={Type:null,size:0,setter:C,arraySetter:I,bindPoint:at},v[zn]={Type:null,size:0,setter:C,arraySetter:I,bindPoint:lt};function ct(t,e){return function(i){if(i.value)switch(t.disableVertexAttribArray(e),i.value.length){case 4:t.vertexAttrib4fv(e,i.value);break;case 3:t.vertexAttrib3fv(e,i.value);break;case 2:t.vertexAttrib2fv(e,i.value);break;case 1:t.vertexAttrib1fv(e,i.value);break;default:throw new Error("the length of a float constant value must be between 1 and 4!")}else t.bindBuffer(rt,i.buffer),t.enableVertexAttribArray(e),t.vertexAttribPointer(e,i.numComponents||i.size,i.type||st,i.normalize||!1,i.stride||0,i.offset||0),t.vertexAttribDivisor&&t.vertexAttribDivisor(e,i.divisor||0)}}function X(t,e){return function(i){if(i.value)if(t.disableVertexAttribArray(e),i.value.length===4)t.vertexAttrib4iv(e,i.value);else throw new Error("The length of an integer constant value must be 4!");else t.bindBuffer(rt,i.buffer),t.enableVertexAttribArray(e),t.vertexAttribIPointer(e,i.numComponents||i.size,i.type||Pt,i.stride||0,i.offset||0),t.vertexAttribDivisor&&t.vertexAttribDivisor(e,i.divisor||0)}}function ht(t,e){return function(i){if(i.value)if(t.disableVertexAttribArray(e),i.value.length===4)t.vertexAttrib4uiv(e,i.value);else throw new Error("The length of an unsigned integer constant value must be 4!");else t.bindBuffer(rt,i.buffer),t.enableVertexAttribArray(e),t.vertexAttribIPointer(e,i.numComponents||i.size,i.type||zt,i.stride||0,i.offset||0),t.vertexAttribDivisor&&t.vertexAttribDivisor(e,i.divisor||0)}}function Mt(t,e,i){const n=i.size,r=i.count;return function(s){t.bindBuffer(rt,s.buffer);const o=s.size||s.numComponents||n,a=o/r,l=s.type||st,u=v[l].size*o,h=s.normalize||!1,f=s.offset||0,g=u/r;for(let m=0;m<r;++m)t.enableVertexAttribArray(e+m),t.vertexAttribPointer(e+m,a,l,h,u,f+g*m),t.vertexAttribDivisor&&t.vertexAttribDivisor(e+m,s.divisor||0)}}const w={};w[st]={size:4,setter:ct},w[se]={size:8,setter:ct},w[oe]={size:12,setter:ct},w[ae]={size:16,setter:ct},w[Pt]={size:4,setter:X},w[le]={size:8,setter:X},w[ce]={size:12,setter:X},w[he]={size:16,setter:X},w[zt]={size:4,setter:ht},w[_e]={size:8,setter:ht},w[ye]={size:12,setter:ht},w[Ae]={size:16,setter:ht},w[ue]={size:4,setter:X},w[fe]={size:8,setter:X},w[pe]={size:12,setter:X},w[de]={size:16,setter:X},w[ge]={size:4,setter:Mt,count:2},w[me]={size:9,setter:Mt,count:3},w[ve]={size:16,setter:Mt,count:4};const Kn=/ERROR:\s*\d+:(\d+)/gi;function Jn(t,e="",i=0){const n=[...e.matchAll(Kn)],r=new Map(n.map((s,o)=>{const a=parseInt(s[1]),l=n[o+1],c=l?l.index:e.length,u=e.substring(s.index,c);return[a-1,u]}));return t.split(`
`).map((s,o)=>{const a=r.get(o);return`${o+1+i}: ${s}${a?`

^^^ ${a}`:""}`}).join(`
`)}const Ce=/^[ \t]*\n/;function Ie(t){let e=0;return Ce.test(t)&&(e=1,t=t.replace(Ce,"")),{lineOffset:e,shaderSource:t}}function Zn(t,e){return t.errorCallback(e),t.callback&&setTimeout(()=>{t.callback(`${e}
${t.errors.join(`
`)}`)}),null}function tr(t,e,i,n){if(n=n||Ft,!t.getShaderParameter(i,Ji)){const s=t.getShaderInfoLog(i),{lineOffset:o,shaderSource:a}=Ie(t.getShaderSource(i)),l=`${Jn(a,s,o)}
Error compiling ${Qi(t,e)}: ${s}`;return n(l),l}return""}function $t(t,e,i){let n,r,s;if(typeof e=="function"&&(i=e,e=void 0),typeof t=="function")i=t,t=void 0;else if(t&&!Array.isArray(t)){const c=t;i=c.errorCallback,t=c.attribLocations,n=c.transformFeedbackVaryings,r=c.transformFeedbackMode,s=c.callback}const o=i||Ft,a=[],l={errorCallback(c,...u){a.push(c),o(c,...u)},transformFeedbackVaryings:n,transformFeedbackMode:r,callback:s,errors:a};{let c={};Array.isArray(t)?t.forEach(function(u,h){c[u]=e?e[h]:h}):c=t||{},l.attribLocations=c}return l}const er=["VERTEX_SHADER","FRAGMENT_SHADER"];function ir(t,e){if(e.indexOf("frag")>=0)return tn;if(e.indexOf("vert")>=0)return en}function nr(t,e,i){const n=t.getAttachedShaders(e);for(const r of n)i.has(r)&&t.deleteShader(r);t.deleteProgram(e)}const rr=(t=0)=>new Promise(e=>setTimeout(e,t));function sr(t,e,i){const n=t.createProgram(),{attribLocations:r,transformFeedbackVaryings:s,transformFeedbackMode:o}=$t(i);for(let a=0;a<e.length;++a){let l=e[a];if(typeof l=="string"){const c=ne(l),u=c?c.text:l;let h=t[er[a]];c&&c.type&&(h=ir(t,c.type)||h),l=t.createShader(h),t.shaderSource(l,Ie(u).shaderSource),t.compileShader(l),t.attachShader(n,l)}}Object.entries(r).forEach(([a,l])=>t.bindAttribLocation(n,l,a));{let a=s;a&&(a.attribs&&(a=a.attribs),Array.isArray(a)||(a=Object.keys(a)),t.transformFeedbackVaryings(n,a,o||nn))}return t.linkProgram(n),n}function or(t,e,i,n,r){const s=$t(i,n,r),o=new Set(e),a=sr(t,e,s);function l(c,u){const h=lr(c,u,s.errorCallback);return h&&nr(c,u,o),h}if(s.callback){ar(t,a).then(()=>{const c=l(t,a);s.callback(c,c?void 0:a)});return}return l(t,a)?void 0:a}async function ar(t,e){const i=t.getExtension("KHR_parallel_shader_compile"),n=i?(s,o)=>s.getProgramParameter(o,i.COMPLETION_STATUS_KHR):()=>!0;let r=0;do await rr(r),r=1e3/60;while(!n(t,e))}function lr(t,e,i){if(i=i||Ft,!t.getProgramParameter(e,Zi)){const r=t.getProgramInfoLog(e);i(`Error in program linking: ${r}`);const o=t.getAttachedShaders(e).map(a=>tr(t,t.getShaderParameter(a,t.SHADER_TYPE),a,i));return`${r}
${o.filter(a=>a).join(`
`)}`}}function cr(t,e,i,n,r){return or(t,e,i,n,r)}function Fe(t){const e=t.name;return e.startsWith("gl_")||e.startsWith("webgl_")}const hr=/(\.|\[|]|\w+)/g,ur=t=>t>="0"&&t<="9";function fr(t,e,i,n){const r=t.split(hr).filter(a=>a!=="");let s=0,o="";for(;;){const a=r[s++];o+=a;const l=ur(a[0]),c=l?parseInt(a):a;if(l&&(o+=r[s++]),s===r.length){i[c]=e;break}else{const h=r[s++],f=h==="[",g=i[c]||(f?[]:{});i[c]=g,i=g,n[o]=n[o]||function(m){return function(_){Pe(m,_)}}(g),o+=h}}}function pr(t,e){let i=0;function n(a,l,c){const u=l.name.endsWith("[0]"),h=l.type,f=v[h];if(!f)throw new Error(`unknown type: 0x${h.toString(16)}`);let g;if(f.bindPoint){const m=i;i+=l.size,u?g=f.arraySetter(t,h,m,c,l.size):g=f.setter(t,h,m,c,l.size)}else f.arraySetter&&u?g=f.arraySetter(t,c):g=f.setter(t,c);return g.location=c,g}const r={},s={},o=t.getProgramParameter(e,re);for(let a=0;a<o;++a){const l=t.getActiveUniform(e,a);if(Fe(l))continue;let c=l.name;c.endsWith("[0]")&&(c=c.substr(0,c.length-3));const u=t.getUniformLocation(e,l.name);if(u){const h=n(e,l,u);r[c]=h,fr(c,h,s,r)}}return r}function dr(t,e){const i={},n=t.getProgramParameter(e,sn);for(let r=0;r<n;++r){const s=t.getTransformFeedbackVarying(e,r);i[s.name]={index:r,type:s.type,size:s.size}}return i}function gr(t,e){const i=t.getProgramParameter(e,re),n=[],r=[];for(let a=0;a<i;++a){r.push(a),n.push({});const l=t.getActiveUniform(e,a);n[a].name=l.name}[["UNIFORM_TYPE","type"],["UNIFORM_SIZE","size"],["UNIFORM_BLOCK_INDEX","blockNdx"],["UNIFORM_OFFSET","offset"]].forEach(function(a){const l=a[0],c=a[1];t.getActiveUniforms(e,r,t[l]).forEach(function(u,h){n[h][c]=u})});const s={},o=t.getProgramParameter(e,on);for(let a=0;a<o;++a){const l=t.getActiveUniformBlockName(e,a),c={index:t.getUniformBlockIndex(e,l),usedByVertexShader:t.getActiveUniformBlockParameter(e,a,an),usedByFragmentShader:t.getActiveUniformBlockParameter(e,a,ln),size:t.getActiveUniformBlockParameter(e,a,cn),uniformIndices:t.getActiveUniformBlockParameter(e,a,hn)};c.used=c.usedByVertexShader||c.usedByFragmentShader,s[l]=c}return{blockSpecs:s,uniformData:n}}function Pe(t,e){for(const i in e){const n=t[i];typeof n=="function"?n(e[i]):Pe(t[i],e[i])}}function W(t,...e){const i=t.uniformSetters||t,n=e.length;for(let r=0;r<n;++r){const s=e[r];if(Array.isArray(s)){const o=s.length;for(let a=0;a<o;++a)W(i,s[a])}else for(const o in s){const a=i[o];a&&a(s[o])}}}function mr(t,e){const i={},n=t.getProgramParameter(e,rn);for(let r=0;r<n;++r){const s=t.getActiveAttrib(e,r);if(Fe(s))continue;const o=t.getAttribLocation(e,s.name),a=w[s.type],l=a.setter(t,o,a);l.location=o,i[s.name]=l}return i}function vr(t,e){for(const i in e){const n=t[i];n&&n(e[i])}}function ze(t,e,i){i.vertexArrayObject?t.bindVertexArray(i.vertexArrayObject):(vr(e.attribSetters||e,i.attribs),i.indices&&t.bindBuffer(Ki,i.indices))}function Re(t,e){const i=pr(t,e),n=mr(t,e),r={program:e,uniformSetters:i,attribSetters:n};return It(t)&&(r.uniformBlockSpec=gr(t,e),r.transformFeedbackInfo=dr(t,e)),r}const _r=/\s|{|}|;/;function Me(t,e,i,n,r){const s=$t(i,n,r),o=[];if(e=e.map(function(c){if(!_r.test(c)){const u=ne(c);if(u)c=u.text;else{const h=`no element with id: ${c}`;s.errorCallback(h),o.push(h)}}return c}),o.length)return Zn(s,"");const a=s.callback;a&&(s.callback=(c,u)=>{a(c,c?void 0:Re(t,u))});const l=cr(t,e,s);return l?Re(t,l):null}const yr=4,$e=5123;function ke(t,e,i,n,r,s){i=i===void 0?yr:i;const o=e.indices,a=e.elementType,l=n===void 0?e.numElements:n;r=r===void 0?0:r,a||o?s!==void 0?t.drawElementsInstanced(i,l,a===void 0?$e:e.elementType,r,s):t.drawElements(i,l,a===void 0?$e:e.elementType,r):s!==void 0?t.drawArraysInstanced(i,r,l,s):t.drawArrays(i,r,l)}function Ar(t,e){e=e||1,e=Math.max(0,e);const i=t.clientWidth*e|0,n=t.clientHeight*e|0;return t.width!==i||t.height!==n?(t.width=i,t.height=n,!0):!1}class br{constructor(e){this.gl=e,this.y=0,this.isActive=this.canScroll,document.onscroll=i=>this.onScroll(i)}onScroll(e){this.isActive&&(this.y=window.scrollY*this.gl.vp.px)}resize(e){this.gl=e,this.isActive=this.canScroll,this.y=window.scrollY*this.gl.vp.px}get canScroll(){return document.documentElement.scrollHeight>window.innerHeight}}class xr{constructor(e,i={z:-9,fov:.6,near:1,far:1024}){i.fov=wr(35),this.camera=i}get(e){return this.camera.mat=Gt.translate(Gt.perspective(this.camera.fov,e.canvas.width/e.canvas.height,this.camera.near,this.camera.far),[0,0,this.camera.z]),this.camera}}function wr(t){return t*Math.PI/180}var tt=Object.freeze({Linear:Object.freeze({None:function(t){return t},In:function(t){return t},Out:function(t){return t},InOut:function(t){return t}}),Quadratic:Object.freeze({In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}}),Cubic:Object.freeze({In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}}),Quartic:Object.freeze({In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}}),Quintic:Object.freeze({In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}}),Sinusoidal:Object.freeze({In:function(t){return 1-Math.sin((1-t)*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.sin(Math.PI*(.5-t)))}}),Exponential:Object.freeze({In:function(t){return t===0?0:Math.pow(1024,t-1)},Out:function(t){return t===1?1:1-Math.pow(2,-10*t)},InOut:function(t){return t===0?0:t===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}}),Circular:Object.freeze({In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}}),Elastic:Object.freeze({In:function(t){return t===0?0:t===1?1:-Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI)},Out:function(t){return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t-.1)*5*Math.PI)+1},InOut:function(t){return t===0?0:t===1?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin((t-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(t){var e=1.70158;return t===1?1:t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return t===0?0:--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}}),Bounce:Object.freeze({In:function(t){return 1-tt.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?tt.Bounce.In(t*2)*.5:tt.Bounce.Out(t*2-1)*.5+.5}}),generatePow:function(t){return t===void 0&&(t=4),t=t<Number.EPSILON?Number.EPSILON:t,t=t>1e4?1e4:t,{In:function(e){return Math.pow(e,t)},Out:function(e){return 1-Math.pow(1-e,t)},InOut:function(e){return e<.5?Math.pow(e*2,t)/2:(1-Math.pow(2-e*2,t))/2+.5}}}}),et=function(){return performance.now()},Er=function(){function t(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,e)}return t.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(i){return e._tweens[i]})},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(){for(var e,i=[],n=0;n<arguments.length;n++)i[n]=arguments[n];for(var r=0,s=i;r<s.length;r++){var o=s[r];(e=o._group)===null||e===void 0||e.remove(o),o._group=this,this._tweens[o.getId()]=o,this._tweensAddedDuringUpdate[o.getId()]=o}},t.prototype.remove=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];for(var n=0,r=e;n<r.length;n++){var s=r[n];s._group=void 0,delete this._tweens[s.getId()],delete this._tweensAddedDuringUpdate[s.getId()]}},t.prototype.allStopped=function(){return this.getAll().every(function(e){return!e.isPlaying()})},t.prototype.update=function(e,i){e===void 0&&(e=et()),i===void 0&&(i=!0);var n=Object.keys(this._tweens);if(n.length!==0)for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<n.length;r++){var s=this._tweens[n[r]],o=!i;s&&s.update(e,o)===!1&&!i&&this.remove(s)}n=Object.keys(this._tweensAddedDuringUpdate)}},t}(),J={Linear:function(t,e){var i=t.length-1,n=i*e,r=Math.floor(n),s=J.Utils.Linear;return e<0?s(t[0],t[1],n):e>1?s(t[i],t[i-1],i-n):s(t[r],t[r+1>i?i:r+1],n-r)},Bezier:function(t,e){for(var i=0,n=t.length-1,r=Math.pow,s=J.Utils.Bernstein,o=0;o<=n;o++)i+=r(1-e,n-o)*r(e,o)*t[o]*s(n,o);return i},CatmullRom:function(t,e){var i=t.length-1,n=i*e,r=Math.floor(n),s=J.Utils.CatmullRom;return t[0]===t[i]?(e<0&&(r=Math.floor(n=i*(1+e))),s(t[(r-1+i)%i],t[r],t[(r+1)%i],t[(r+2)%i],n-r)):e<0?t[0]-(s(t[0],t[0],t[1],t[1],-n)-t[0]):e>1?t[i]-(s(t[i],t[i],t[i-1],t[i-1],n-i)-t[i]):s(t[r?r-1:0],t[r],t[i<r+1?i:r+1],t[i<r+2?i:r+2],n-r)},Utils:{Linear:function(t,e,i){return(e-t)*i+t},Bernstein:function(t,e){var i=J.Utils.Factorial;return i(t)/i(e)/i(t-e)},Factorial:function(){var t=[1];return function(e){var i=1;if(t[e])return t[e];for(var n=e;n>1;n--)i*=n;return t[e]=i,i}}(),CatmullRom:function(t,e,i,n,r){var s=(i-t)*.5,o=(n-e)*.5,a=r*r,l=r*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*r+e}}},Tr=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),kt=new Er,Sr=function(){function t(e,i){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=tt.Linear.None,this._interpolationFunction=J.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Tr.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=e,typeof i=="object"?(this._group=i,i.add(this)):i===!0&&(this._group=kt,kt.add(this))}return t.prototype.getId=function(){return this._id},t.prototype.isPlaying=function(){return this._isPlaying},t.prototype.isPaused=function(){return this._isPaused},t.prototype.getDuration=function(){return this._duration},t.prototype.to=function(e,i){if(i===void 0&&(i=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=i<0?0:i,this},t.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},t.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},t.prototype.start=function(e,i){if(e===void 0&&(e=et()),i===void 0&&(i=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||i){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var s in this._valuesEnd)r[s]=this._valuesEnd[s];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,i)}return this},t.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},t.prototype._setupProperties=function(e,i,n,r,s){for(var o in n){var a=e[o],l=Array.isArray(a),c=l?"array":typeof a,u=!l&&Array.isArray(n[o]);if(!(c==="undefined"||c==="function")){if(u){var h=n[o];if(h.length===0)continue;for(var f=[a],g=0,m=h.length;g<m;g+=1){var _=this._handleRelativeValue(a,h[g]);if(isNaN(_)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(_)}u&&(n[o]=f)}if((c==="object"||l)&&a&&!u){i[o]=l?[]:{};var y=a;for(var d in y)i[o][d]=y[d];r[o]=l?[]:{};var h=n[o];if(!this._isDynamic){var p={};for(var d in h)p[d]=h[d];n[o]=h=p}this._setupProperties(y,i[o],h,r[o],s)}else(typeof i[o]>"u"||s)&&(i[o]=a),l||(i[o]*=1),u?r[o]=n[o].slice().reverse():r[o]=i[o]||0}}},t.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},t.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},t.prototype.pause=function(e){return e===void 0&&(e=et()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this)},t.prototype.resume=function(e){return e===void 0&&(e=et()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this)},t.prototype.stopChainedTweens=function(){for(var e=0,i=this._chainedTweens.length;e<i;e++)this._chainedTweens[e].stop();return this},t.prototype.group=function(e){return e?(e.add(this),this):(console.warn("tween.group() without args has been removed, use group.add(tween) instead."),this)},t.prototype.remove=function(){var e;return(e=this._group)===null||e===void 0||e.remove(this),this},t.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},t.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},t.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},t.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},t.prototype.easing=function(e){return e===void 0&&(e=tt.Linear.None),this._easingFunction=e,this},t.prototype.interpolation=function(e){return e===void 0&&(e=J.Linear),this._interpolationFunction=e,this},t.prototype.chain=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return this._chainedTweens=e,this},t.prototype.onStart=function(e){return this._onStartCallback=e,this},t.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},t.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},t.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},t.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},t.prototype.onStop=function(e){return this._onStopCallback=e,this},t.prototype.update=function(e,i){var n=this,r;if(e===void 0&&(e=et()),i===void 0&&(i=t.autoStartOnUpdate),this._isPaused)return!0;var s;if(!this._goToEnd&&!this._isPlaying)if(i)this.start(e,!0);else return!1;if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var o=e-this._startTime,a=this._duration+((r=this._repeatDelayTime)!==null&&r!==void 0?r:this._delayTime),l=this._duration+this._repeat*a,c=function(){if(n._duration===0||o>l)return 1;var _=Math.trunc(o/a),y=o-_*a,d=Math.min(y/n._duration,1);return d===0&&o===n._duration?1:d},u=c(),h=this._easingFunction(u);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,h),this._onUpdateCallback&&this._onUpdateCallback(this._object,u),this._duration===0||o>=this._duration)if(this._repeat>0){var f=Math.min(Math.trunc((o-this._duration)/a)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=f);for(s in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[s]=="string"&&(this._valuesStartRepeat[s]=this._valuesStartRepeat[s]+parseFloat(this._valuesEnd[s])),this._yoyo&&this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=a*f,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var g=0,m=this._chainedTweens.length;g<m;g++)this._chainedTweens[g].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},t.prototype._updateProperties=function(e,i,n,r){for(var s in n)if(i[s]!==void 0){var o=i[s]||0,a=n[s],l=Array.isArray(e[s]),c=Array.isArray(a),u=!l&&c;u?e[s]=this._interpolationFunction(a,r):typeof a=="object"&&a?this._updateProperties(e[s],o,a,r):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[s]=o+(a-o)*r))}},t.prototype._handleRelativeValue=function(e,i){return typeof i!="string"?i:i.charAt(0)==="+"||i.charAt(0)==="-"?e+parseFloat(i):parseFloat(i)},t.prototype._swapEndStartRepeatValues=function(e){var i=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=i},t.autoStartOnUpdate=!1,t}(),G=kt;G.getAll.bind(G),G.removeAll.bind(G),G.add.bind(G),G.remove.bind(G),G.update.bind(G);var Cr=`attribute vec4 position;

varying vec2 v_xy;

void main() {\r
  gl_Position = position;\r
  v_xy = position.xy;\r
}`,Ir=`precision mediump float;

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
}`;const Fr=[Cr,Ir];class Pr{constructor(e,i={}){this.gl=e,this.data=i,this.shaders=Fr,this.programInfo=Me(this.gl,this.shaders),this.tween=null,this.a={mode:0,swap:0},this.gl.useProgram(this.programInfo.program),this.setBuffAtt(),this.setUniforms()}setBuffAtt(){const e={position:[-1,-1,0,1,-1,0,-1,1,0,-1,1,0,1,-1,0,1,1,0]};this.bufferInfo=ie(this.gl,e)}applyPreset(e){this.data=e,this.setUniforms(),console.log("Current background params:",this.data)}tweenTo(e,i){let n={},r={};for(const s in this.data)this.data.hasOwnProperty(s)&&(s.includes("color")?(typeof this.data[s]=="string"?n[s]=this.hexToRgbObject(this.data[s]):typeof this.data[s]=="object"&&(n[s]=this.data[s]),typeof e[s]=="string"?r[s]=this.hexToRgbObject(e[s]):this.data[s]):(n[s]=this.data[s],r[s]=e[s]));console.log(r),this.data=n,this.tween=new Sr(this.data).to(r,i).onUpdate(()=>{this.setUniforms()}).start()}hexToRgbObject(e){let i=e.startsWith("#")?e.slice(1):e;i.length===3&&(i=i[0]+i[0]+i[1]+i[1]+i[2]+i[2]);const n=parseInt(i.substring(0,2),16)/255,r=parseInt(i.substring(2,4),16)/255,s=parseInt(i.substring(4,6),16)/255;return{r:n,g:r,b:s}}hexToRgb(e){let i=e.startsWith("#")?e.slice(1):e;i.length===3&&(i=i[0]+i[0]+i[1]+i[1]+i[2]+i[2]);const n=parseInt(i.substring(0,2),16)/255,r=parseInt(i.substring(2,4),16)/255,s=parseInt(i.substring(4,6),16)/255;return[n,r,s]}objectToArray(e){let i=[];for(const n in e)i.push(e[n]);return i}setUniform(e,i){this.uniforms.u_bw=i,this.gl.useProgram(this.programInfo.program),W(this.programInfo,this.uniforms)}setUniforms(){let e,i;typeof this.data.color=="string"?(e=this.hexToRgb(this.data.color),i=this.hexToRgb(this.data.color2)):typeof this.data.color=="object"&&(e=this.objectToArray(this.data.color),i=this.objectToArray(this.data.color2)),this.uniforms={u_res:[this.gl.canvas.width,this.gl.canvas.height],u_time:0,u_params:[this.data.multx,this.data.multy,this.data.hue,this.data.brightness],u_params2:[this.data.mouse,this.data.scale,this.data.noise],u_altparams:[this.data.scale2,this.data.bw2,0,0],u_bw:this.data.bw,u_color:e,u_color2:i,u_mode:this.a.mode,u_swap:this.a.swap},this.gl.useProgram(this.programInfo.program),W(this.programInfo,this.uniforms)}render(e,{x:i,y:n}){this.tween&&this.tween.update(),this.gl.useProgram(this.programInfo.program),ze(this.gl,this.programInfo,this.bufferInfo),W(this.programInfo,{u_time:e*this.data.time,u_mouse:[i,n],u_mode:this.a.mode,u_swap:this.a.swap}),ke(this.gl,this.bufferInfo)}resize(e){this.gl=e,this.gl.useProgram(this.programInfo.program),W(this.programInfo,{u_res:[this.gl.canvas.width,this.gl.canvas.height]})}mode(e){e==="light"?this.a.mode=1:e==="dark"?this.a.mode=0:this.a.mode===0?this.a.mode=1:this.a.mode=0,console.log(e,this.uniforms.u_mode),this.setUniforms()}swap(e,{d:i}){e===0||e===1||this.a.swap,this.setUniforms()}}class zr{constructor(e,i,n){this.gl=e,this.params=i,this.preset=n,this.computeParams(),this.events(),this.create()}events(){this.mouse={x:0,y:0,wx:window.innerWidth,wy:window.innerHeight},document.addEventListener("mousemove",e=>{this.mouse.x=e.clientX/this.mouse.wx*2-1,this.mouse.y=-(e.clientY/this.mouse.wy)*2+1})}create(){this.data=this.params[this.preset],this.quad=new Pr(this.gl,this.data)}setNewParams(e){this.params=e,this.applyPreset(this.preset)}applyPreset(e){this.preset=e,this.data=this.params[e],this.quad.applyPreset(this.data)}render(e,i){this.quad&&this.quad.render(e,this.mouse)}resize(e){this.gl=e,this.mouse.wx=window.innerWidth,this.mouse.wy=window.innerHeight,this.quad&&this.quad.resize(this.gl)}computeParams(){document.querySelector('[data-gradient="wrapper"]'),console.log(this.params)}}var Rr=`attribute vec4 position;

void main() {\r
  vec4 pos = position;\r
  gl_Position = position;\r
}`,Mr=`precision mediump float;

uniform vec2 u_res;\r
uniform float u_time;

uniform sampler2D u_diff;

void main() {\r
  vec2 uv = gl_FragCoord.xy / u_res;

  vec3 img = texture2D(u_diff, uv).rgb;

  

  gl_FragColor.rgb = img.rgb;\r
  gl_FragColor.a = 1.;\r
}`;const $r=[Rr,Mr];class kr{constructor(e,i={}){this.gl=e,this.data=i,this.shaders=$r,this.programInfo=Me(this.gl,this.shaders),this.gl.useProgram(this.programInfo.program),this.setBuffAtt(),this.setUniforms()}setBuffAtt(){const e={position:[-1,-1,0,1,-1,0,-1,1,0,-1,1,0,1,-1,0,1,1,0]};this.bufferInfo=ie(this.gl,e)}setUniforms(){this.uniforms={u_res:[this.gl.canvas.width,this.gl.canvas.height],u_time:0},this.gl.useProgram(this.programInfo.program),W(this.programInfo,this.uniforms)}render(e,i=null){this.gl.useProgram(this.programInfo.program),ze(this.gl,this.programInfo,this.bufferInfo),W(this.programInfo,{u_time:e,u_diff:i}),ke(this.gl,this.bufferInfo)}resize(e){this.gl=e,this.gl.useProgram(this.programInfo.program),W(this.programInfo,{u_res:[this.gl.canvas.width,this.gl.canvas.height]})}}class Br{constructor(e){this.gl=e}create(){this.fbi=this.gl.createFramebuffer(),this.texture=this.gl.createTexture(),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.canvas.width,this.gl.canvas.height,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.depthBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,this.gl.canvas.width,this.gl.canvas.height),this.attach(),this.createPlane(),this.unbind()}attach(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbi),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.texture,0),this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,this.depthBuffer)}unbind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null)}createPlane(){this.quad=new kr(this.gl)}setupRender(){this.isActive&&(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbi),this.gl.clear(this.gl.COLOR_BUFFER_BIT||this.gl.DEPTH_BUFFER_BIT))}render(e){this.isActive&&(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.quad&&this.quad.render(e,this.texture))}resize(e){this.gl=e,this.create(),this.quad&&this.quad.resize(this.gl)}}class Dr{constructor(e,i,n){this.params=i,this.preset=n,this.canvas=document.getElementById(e),this.gl=this.canvas.getContext("webgl"),this.gl.clearColor(.04,.04,.04,1),this.gl.vp={dpr:Math.min(window.devicePixelRatio,2)},this.camera=new xr(this.gl),this.gl.camera=this.camera.get(this.gl),new ResizeObserver(r=>this.resize(r[0].contentRect)).observe(this.canvas),this.resize(),this.scroll=new br(this.gl),this.time=0,this.create(),this.render(),this.resize()}create(){this.post=new Br(this.gl),this.post.isActive=!1,this.scene=new zr(this.gl,this.params,this.preset),window.dispatchEvent(new Event("gradientReady"))}applyPreset(e){this.scene.applyPreset(e)}render(){this.time+=.01,this.gl.clear(this.gl.COLOR_BUFFER_BIT||this.gl.DEPTH_BUFFER_BIT),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.post&&this.post.isActive&&this.post.setupRender(),this.scene&&this.scene.render(this.time,this.scroll.y),this.post&&this.post.isActive&&this.post.render(this.time),requestAnimationFrame(this.render.bind(this))}resize(){Ar(this.gl.canvas,this.gl.vp.dpr),this.gl.vp={viewSize:this.viewSize,px:this.pixelSize,inner:[window.innerWidth,window.innerHeight],scroll:window.scrollY},this.gl.camera&&(this.gl.camera=this.camera.get(this.gl)),this.scroll&&this.scroll.resize(this.gl),this.post&&this.post.resize(this.gl),this.scene&&this.scene.resize(this.gl)}get viewSize(){const e=Math.abs(this.gl.camera.z*Math.tan(this.gl.camera.fov/2)*2);return[e*(this.gl.canvas.width/this.gl.canvas.height),e]}get pixelSize(){return this.viewSize[0]/window.innerWidth}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.2
 * @author George Michael Brower
 * @license MIT
 */class H{constructor(e,i,n,r,s="div"){this.parent=e,this.object=i,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),H.nextNameID=H.nextNameID||0,this.$name.id=`lil-gui-name-${++H.nextNameID}`,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const i=this.parent.add(this.object,this.property,e);return i.name(this._name),this.destroy(),i}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ur extends H{constructor(e,i,n){super(e,i,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Bt(t){let e,i;return(e=t.match(/(#|0x)?([a-f0-9]{6})/i))?i=e[2]:(e=t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),i?"#"+i:!1}const Or={isPrimitive:!0,match:t=>typeof t=="string",fromHexString:Bt,toHexString:Bt},it={isPrimitive:!0,match:t=>typeof t=="number",fromHexString:t=>parseInt(t.substring(1),16),toHexString:t=>"#"+t.toString(16).padStart(6,0)},Lr=[Or,it,{isPrimitive:!1,match:t=>Array.isArray(t),fromHexString(t,e,i=1){const n=it.fromHexString(t);e[0]=(n>>16&255)/255*i,e[1]=(n>>8&255)/255*i,e[2]=(n&255)/255*i},toHexString([t,e,i],n=1){n=255/n;const r=t*n<<16^e*n<<8^i*n<<0;return it.toHexString(r)}},{isPrimitive:!1,match:t=>Object(t)===t,fromHexString(t,e,i=1){const n=it.fromHexString(t);e.r=(n>>16&255)/255*i,e.g=(n>>8&255)/255*i,e.b=(n&255)/255*i},toHexString({r:t,g:e,b:i},n=1){n=255/n;const r=t*n<<16^e*n<<8^i*n<<0;return it.toHexString(r)}}];function Nr(t){return Lr.find(e=>e.match(t))}class Vr extends H{constructor(e,i,n,r){super(e,i,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Nr(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Bt(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const i=this._format.fromHexString(e);this.setValue(i)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Dt extends H{constructor(e,i,n){super(e,i,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Gr extends H{constructor(e,i,n,r,s,o){super(e,i,n,"number"),this._initInput(),this.min(r),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,i=!0){return this._step=e,this._stepExplicit=i,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let i=(e-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=i*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const i=()=>{let p=parseFloat(this.$input.value);isNaN(p)||(this._stepExplicit&&(p=this._snap(p)),this.setValue(this._clamp(p)))},n=p=>{const A=parseFloat(this.$input.value);isNaN(A)||(this._snapClampSetValue(A+p),this.$input.value=this.getValue())},r=p=>{p.key==="Enter"&&this.$input.blur(),p.code==="ArrowUp"&&(p.preventDefault(),n(this._step*this._arrowKeyMultiplier(p))),p.code==="ArrowDown"&&(p.preventDefault(),n(this._step*this._arrowKeyMultiplier(p)*-1))},s=p=>{this._inputFocused&&(p.preventDefault(),n(this._step*this._normalizeMouseWheel(p)))};let o=!1,a,l,c,u,h;const f=5,g=p=>{a=p.clientX,l=c=p.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",_)},m=p=>{if(o){const A=p.clientX-a,x=p.clientY-l;Math.abs(x)>f?(p.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(A)>f&&_()}if(!o){const A=p.clientY-c;h-=A*this._step*this._arrowKeyMultiplier(p),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=p.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",_)},y=()=>{this._inputFocused=!0},d=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",i),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",g),this.$input.addEventListener("focus",y),this.$input.addEventListener("blur",d)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(d,p,A,x,E)=>(d-p)/(A-p)*(E-x)+x,i=d=>{const p=this.$slider.getBoundingClientRect();let A=e(d,p.left,p.right,this._min,this._max);this._snapClampSetValue(A)},n=d=>{this._setDraggingStyle(!0),i(d.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=d=>{i(d.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=d=>{d.preventDefault(),this._setDraggingStyle(!0),i(d.touches[0].clientX),o=!1},u=d=>{d.touches.length>1||(this._hasScrollBar?(a=d.touches[0].clientX,l=d.touches[0].clientY,o=!0):c(d),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",f))},h=d=>{if(o){const p=d.touches[0].clientX-a,A=d.touches[0].clientY-l;Math.abs(p)>Math.abs(A)?c(d):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f))}else d.preventDefault(),i(d.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f)},g=this._callOnFinishChange.bind(this),m=400;let _;const y=d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const A=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+A),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(g,m)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",y,{passive:!1})}_setDraggingStyle(e,i="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${i}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:i,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(i=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),i+-n}_arrowKeyMultiplier(e){let i=this._stepExplicit?1:10;return e.shiftKey?i*=10:e.altKey&&(i/=10),i}_snap(e){const i=Math.round(e/this._step)*this._step;return parseFloat(i.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Hr extends H{constructor(e,i,n,r){super(e,i,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(s=>{const o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),i=this._values.indexOf(e);return this.$select.selectedIndex=i,this.$display.innerHTML=i===-1?e:this._names[i],this}}class Yr extends H{constructor(e,i,n){super(e,i,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const jr=`.lil-gui {
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
}`;function Xr(t){const e=document.createElement("style");e.innerHTML=t;const i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(e,i):document.head.appendChild(e)}let Be=!1;class Ut{constructor({parent:e,autoPlace:i=e===void 0,container:n,width:r,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Be&&a&&(Xr(jr),Be=!0),n?n.appendChild(this.domElement):i&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=o}add(e,i,n,r,s){if(Object(n)===n)return new Hr(this,e,i,n);const o=e[i];switch(typeof o){case"number":return new Gr(this,e,i,n,r,s);case"boolean":return new Ur(this,e,i);case"string":return new Yr(this,e,i);case"function":return new Dt(this,e,i)}console.error(`gui.add failed
	property:`,i,`
	object:`,e,`
	value:`,o)}addColor(e,i,n=1){return new Vr(this,e,i,n)}addFolder(e){const i=new Ut({parent:this,title:e});return this.root._closeFolders&&i.close(),i}load(e,i=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Dt||n._name in e.controllers&&n.load(e.controllers[n._name])}),i&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const i={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Dt)){if(n._name in i.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);i.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in i.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);i.folders[n._title]=n.save()}),i}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(i=>{e=e.concat(i.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(i=>{e=e.concat(i.foldersRecursive())}),e}}const Wr=Ut;(()=>{class t{constructor(r,s,o){Ne(this,"presets",{"Preset 0":()=>{window.Gradient.gl.scene.quad.tweenTo(e[0],1e3),this.initGui(this.params[0])},"Preset 1":()=>{window.Gradient.gl.scene.quad.tweenTo(e[1],1e3),this.initGui(this.params[1])},"Preset 2":()=>{window.Gradient.gl.scene.quad.tweenTo(e[2],1e3),this.initGui(this.params[2])},"Preset 3":()=>{window.Gradient.gl.scene.quad.tweenTo(e[3],1e3),this.initGui(this.params[3])}});this.params=r,this.preset=s,this.call={mode:a=>{console.log("light mode",a),this.gl.scene.quad.mode(a)},swap:(a,l={d:0})=>{console.log("swap",a,l),this.gl.scene.quad.swap(a,l)}},this.gl=new Dr("c",r,s),this.gl.applyPreset(0),o&&this.initGui(r[s])}tweenTo(r,s){this.preset=r,thid.gl.scene.quad.tweenTo(this.params[this.preset],s)}mapRange(r,s,o,a,l){return(r-s)/(o-s)*(l-a)+a}setUniform(r,s){let o=this.params[this.preset][r],a=this.mapRange(s,0,1,o,1);this.gl.scene.quad.setUniform(r,a)}setNewParams(r){this.params=r,this.gl.scene.setNewParams(r)}setUniforms(){this.gl.scene.quad.data=this.data,this.gl.scene.quad.setUniforms()}initGui(r){this.data=r,this.gui=new Wr,this.gui.add(this.presets,"Preset 0"),this.gui.add(this.presets,"Preset 1"),this.gui.add(this.presets,"Preset 2"),this.gui.add(this.presets,"Preset 3"),this.gui.add(this.data,"multx",0,10).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"multy",0,10).onChange(()=>{this.setUniforms()}).listen(),this.gui.addColor(this.data,"color").onChange(()=>{this.setUniforms()}).listen(),this.gui.addColor(this.data,"color2").onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"hue",0,1).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"brightness",0,1,.01).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"mouse",-1,1).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"scale",0,10).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"noise",0,10).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"bw",0,1).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"bw2",0,1).onChange(()=>{this.setUniforms()}).listen(),this.gui.add(this.data,"time",0,1)}}let e={0:{multx:.2,multy:.8,hue:0,brightness:.74,mouse:.7,scale:.9,scale2:.2,noise:1.05,color:"#b0b0b0",color2:"#a25820",bw:.25,bw2:0,time:.25},1:{multx:.2,multy:.8,hue:0,brightness:.8,mouse:.53,scale:.9,scale2:.4,noise:3,color:"#0b218e",color2:"#0a1732",bw:.3,bw2:0,time:.45},2:{multx:1.2,multy:.8,hue:0,brightness:.7,mouse:.53,scale:1,scale2:0,noise:.4,color:"#0b218e",color2:"#0a1732",bw:.3,bw2:0,time:0},3:{multx:.2,multy:.8,hue:0,brightness:.8,mouse:.53,scale:1.15,scale2:.4,noise:3,color:"#0b218e",color2:"#0a1732",bw:.3,bw2:0,time:1}};const i=new t(e,0,!0);window.gradient=i,window.Gradient=i})()});
