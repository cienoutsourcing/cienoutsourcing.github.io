import{S as qe,i as ze,s as Fe,k as A,e as s,t as p,R as Ve,d as l,m as L,c as _,a as h,h as v,f as je,b as m,g as u,K as i,T as Y,j as we,L as Se,U as Ke,v as Ge,V as Je}from"../chunks/vendor-2de95d2f.js";function Qe(t){let S,o,B,C,T,P,q,D,J,N,I=(t[4]*100).toFixed(2)+"",Q,W,X,M,te,Z,R,f,ae,$,H,r,n,O,U,g,x,z,b,ve,ue,F,c,me,ie,ee,he,se,V,d,be,_e,j,E,ce,ne,le,de,oe,w,k,Ee,fe,K,y,ke,re,G,ye,Ie;return{c(){S=A(),o=s("h1"),B=p("Nomogram to estimate the risk of "),C=s("br"),T=p("Anastomotic Leakage after resection of rectosigmoid colon in ovarian cancer"),P=s("br"),q=A(),D=s("p"),J=p("Estimated risk: "),N=s("b"),Q=p(I),W=p("%"),X=A(),M=s("h3"),te=p("Current Diabetes"),Z=A(),R=s("label"),f=s("input"),ae=p(`
	No`),$=A(),H=s("label"),r=s("input"),n=p(`
	Yes`),O=A(),U=s("h3"),g=p("Accompanying distal pancreatectomy"),x=A(),z=s("label"),b=s("input"),ve=p(`
	No`),ue=A(),F=s("label"),c=s("input"),me=p(`
	Yes`),ie=A(),ee=s("h3"),he=p("Anastomotic level from the anal verge"),se=A(),V=s("label"),d=s("input"),be=p(`
	 < 10cm`),_e=A(),j=s("label"),E=s("input"),ce=p(`
	 \u2265 10cm`),ne=A(),le=s("h3"),de=p("Residual tumor"),oe=A(),w=s("label"),k=s("input"),Ee=p(`
	No residual tunor`),fe=A(),K=s("label"),y=s("input"),ke=p(`
	Macroscopic`),re=A(),G=s("canvas"),this.h()},l(e){Ve('[data-svelte="svelte-1anpopb"]',document.head).forEach(l),S=L(e),o=_(e,"H1",{});var pe=h(o);B=v(pe,"Nomogram to estimate the risk of "),C=_(pe,"BR",{}),T=v(pe,"Anastomotic Leakage after resection of rectosigmoid colon in ovarian cancer"),pe.forEach(l),P=_(e,"BR",{}),q=L(e),D=_(e,"P",{style:!0});var Ae=h(D);J=v(Ae,"Estimated risk: "),N=_(Ae,"B",{});var Le=h(N);Q=v(Le,I),W=v(Le,"%"),Le.forEach(l),Ae.forEach(l),X=L(e),M=_(e,"H3",{});var Re=h(M);te=v(Re,"Current Diabetes"),Re.forEach(l),Z=L(e),R=_(e,"LABEL",{});var Pe=h(R);f=_(Pe,"INPUT",{type:!0,name:!0}),ae=v(Pe,`
	No`),Pe.forEach(l),$=L(e),H=_(e,"LABEL",{});var Ne=h(H);r=_(Ne,"INPUT",{type:!0,name:!0}),n=v(Ne,`
	Yes`),Ne.forEach(l),O=L(e),U=_(e,"H3",{});var He=h(U);g=v(He,"Accompanying distal pancreatectomy"),He.forEach(l),x=L(e),z=_(e,"LABEL",{});var Be=h(z);b=_(Be,"INPUT",{type:!0,name:!0}),ve=v(Be,`
	No`),Be.forEach(l),ue=L(e),F=_(e,"LABEL",{});var Ce=h(F);c=_(Ce,"INPUT",{type:!0,name:!0}),me=v(Ce,`
	Yes`),Ce.forEach(l),ie=L(e),ee=_(e,"H3",{});var Me=h(ee);he=v(Me,"Anastomotic level from the anal verge"),Me.forEach(l),se=L(e),V=_(e,"LABEL",{});var Te=h(V);d=_(Te,"INPUT",{type:!0,name:!0}),be=v(Te,`
	 < 10cm`),Te.forEach(l),_e=L(e),j=_(e,"LABEL",{});var Oe=h(j);E=_(Oe,"INPUT",{type:!0,name:!0}),ce=v(Oe,`
	 \u2265 10cm`),Oe.forEach(l),ne=L(e),le=_(e,"H3",{});var Ye=h(le);de=v(Ye,"Residual tumor"),Ye.forEach(l),oe=L(e),w=_(e,"LABEL",{});var Ue=h(w);k=_(Ue,"INPUT",{type:!0,name:!0}),Ee=v(Ue,`
	No residual tunor`),Ue.forEach(l),fe=L(e),K=_(e,"LABEL",{});var De=h(K);y=_(De,"INPUT",{type:!0,name:!0}),ke=v(De,`
	Macroscopic`),De.forEach(l),re=L(e),G=_(e,"CANVAS",{id:!0}),h(G).forEach(l),this.h()},h(){document.title="Home",je(D,"font-size","28px"),m(f,"type","radio"),m(f,"name","diabetes"),f.__value=!1,f.value=f.__value,t[7][0].push(f),m(r,"type","radio"),m(r,"name","diabetes"),r.__value=!0,r.value=r.__value,t[7][0].push(r),m(b,"type","radio"),m(b,"name","distal"),b.__value=!1,b.value=b.__value,t[7][1].push(b),m(c,"type","radio"),m(c,"name","distal"),c.__value=!0,c.value=c.__value,t[7][1].push(c),m(d,"type","radio"),m(d,"name","anastomotic"),d.__value=!0,d.value=d.__value,t[7][2].push(d),m(E,"type","radio"),m(E,"name","anastomotic"),E.__value=!1,E.value=E.__value,t[7][2].push(E),m(k,"type","radio"),m(k,"name","residual"),k.__value=!1,k.value=k.__value,t[7][3].push(k),m(y,"type","radio"),m(y,"name","residual"),y.__value=!0,y.value=y.__value,t[7][3].push(y),m(G,"id","myChart")},m(e,a){u(e,S,a),u(e,o,a),i(o,B),i(o,C),i(o,T),u(e,P,a),u(e,q,a),u(e,D,a),i(D,J),i(D,N),i(N,Q),i(N,W),u(e,X,a),u(e,M,a),i(M,te),u(e,Z,a),u(e,R,a),i(R,f),f.checked=f.__value===t[3],i(R,ae),u(e,$,a),u(e,H,a),i(H,r),r.checked=r.__value===t[3],i(H,n),u(e,O,a),u(e,U,a),i(U,g),u(e,x,a),u(e,z,a),i(z,b),b.checked=b.__value===t[1],i(z,ve),u(e,ue,a),u(e,F,a),i(F,c),c.checked=c.__value===t[1],i(F,me),u(e,ie,a),u(e,ee,a),i(ee,he),u(e,se,a),u(e,V,a),i(V,d),d.checked=d.__value===t[0],i(V,be),u(e,_e,a),u(e,j,a),i(j,E),E.checked=E.__value===t[0],i(j,ce),u(e,ne,a),u(e,le,a),i(le,de),u(e,oe,a),u(e,w,a),i(w,k),k.checked=k.__value===t[2],i(w,Ee),u(e,fe,a),u(e,K,a),i(K,y),y.checked=y.__value===t[2],i(K,ke),u(e,re,a),u(e,G,a),t[15](G),ye||(Ie=[Y(f,"change",t[6]),Y(r,"change",t[8]),Y(b,"change",t[9]),Y(c,"change",t[10]),Y(d,"change",t[11]),Y(E,"change",t[12]),Y(k,"change",t[13]),Y(y,"change",t[14])],ye=!0)},p(e,[a]){a&16&&I!==(I=(e[4]*100).toFixed(2)+"")&&we(Q,I),a&8&&(f.checked=f.__value===e[3]),a&8&&(r.checked=r.__value===e[3]),a&2&&(b.checked=b.__value===e[1]),a&2&&(c.checked=c.__value===e[1]),a&1&&(d.checked=d.__value===e[0]),a&1&&(E.checked=E.__value===e[0]),a&4&&(k.checked=k.__value===e[2]),a&4&&(y.checked=y.__value===e[2])},i:Se,o:Se,d(e){e&&l(S),e&&l(o),e&&l(P),e&&l(q),e&&l(D),e&&l(X),e&&l(M),e&&l(Z),e&&l(R),t[7][0].splice(t[7][0].indexOf(f),1),e&&l($),e&&l(H),t[7][0].splice(t[7][0].indexOf(r),1),e&&l(O),e&&l(U),e&&l(x),e&&l(z),t[7][1].splice(t[7][1].indexOf(b),1),e&&l(ue),e&&l(F),t[7][1].splice(t[7][1].indexOf(c),1),e&&l(ie),e&&l(ee),e&&l(se),e&&l(V),t[7][2].splice(t[7][2].indexOf(d),1),e&&l(_e),e&&l(j),t[7][2].splice(t[7][2].indexOf(E),1),e&&l(ne),e&&l(le),e&&l(oe),e&&l(w),t[7][3].splice(t[7][3].indexOf(k),1),e&&l(fe),e&&l(K),t[7][3].splice(t[7][3].indexOf(y),1),e&&l(re),e&&l(G),t[15](null),ye=!1,Ke(Ie)}}}const Ze=!0;function We(t,S,o){let B=!1,C=!0,T=!0,P=!0,q,D=["Distal Pancreatectomy Points","Residual tumor Points","Diabetes Points","Anastomotic level from the anal verge Points","Total Points "],J,N,I,Q={animation:{duration:0},legend:{display:!1},scales:{xAxes:[{ticks:{suggestedMax:300}}]}};function W(){I&&I.destroy();let n=C?78:0,O=T?100:0,U=P?66:0,g=B?97:0;var x=[[0,n],[n,n+O],[n+O,n+O+U],[n+O+U,n+O+U+g],[0,n+O+U+g]];!N||(J=N.getContext("2d"),I=new Chart(J,{type:"horizontalBar",data:{labels:D,datasets:[{backgroundColor:"rgb(255, 99, 132)",borderColor:"rgb(255, 99, 132)",data:x}]},options:Q}))}Ge(async n=>{W()});const X=[[],[],[],[]];function M(){P=this.__value,o(3,P)}function te(){P=this.__value,o(3,P)}function Z(){C=this.__value,o(1,C)}function R(){C=this.__value,o(1,C)}function f(){B=this.__value,o(0,B)}function ae(){B=this.__value,o(0,B)}function $(){T=this.__value,o(2,T)}function H(){T=this.__value,o(2,T)}function r(n){Je[n?"unshift":"push"](()=>{N=n,o(5,N)})}return t.$$.update=()=>{if(t.$$.dirty&15){let n=-2.2989;P===!0&&(n+=.6659),C===!0&&(n+=.785),T===!0&&(n+=1.003),B===!0&&(n+=.9735),n=Math.exp(n),o(4,q=n/(1+n)),W()}},[B,C,T,P,q,N,M,X,te,Z,R,f,ae,$,H,r]}class $e extends qe{constructor(S){super();ze(this,S,We,Qe,Fe,{})}}export{$e as default,Ze as prerender};
