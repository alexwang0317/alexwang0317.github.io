import{S as ra,i as sa,s as na,y as ia,a as m,k as l,q as t,z as da,c as h,l as r,m as s,r as a,h as o,n as E,A as ca,b as la,C as e,F as pa,g as ua,d as fa,B as ma,o as ha}from"../chunks/index.dd6ea1d3.js";import{S as ya}from"../chunks/Seo.4277da45.js";function _a(xt){let _,x,d,A,D,ee,te,I,ae,oe,P,le,re,N,se,ne,p,k,ie,U,de,ce,pe,j,c,ue,bt="{",fe,me,Dt="}",he,ye,kt="{",_e,ve,St="}",ge,Ee,Tt="{",we,xe,At="}",be,De,ke,S,Se,F,Te,Ae,Ie,G,n,Pe,It="{",Ne,Re,Pt="}",Oe,qe,Nt="{",Ce,$e,Rt="}",Ue,je,Ot="{",Fe,Ge,qt="}",Le,Be,Ct="{",Ve,He,$t="}",Je,Me,Ut="{",We,Ke,jt="}",Qe,ze,Xe,L,Ye,Ze,v,b,B,et,tt,V,at,ot,lt,R,H,rt,st,nt,T,J,it,dt,M,ct,pt,O,W,ut,ft,mt,q,K,ht,yt,_t,C,$,vt,z;return _=new ya({props:{title:"TypedDict - Alex Wang",description:"TypedDict for type-safe dictionaries with optional keys in Python"}}),{c(){ia(_.$$.fragment),x=m(),d=l("article"),A=l("div"),D=l("a"),ee=t("← Back to Python"),te=m(),I=l("h1"),ae=t("TypedDict"),oe=m(),P=l("div"),le=t("September 6, 2025 • 5 min read"),re=m(),N=l("div"),se=t(`TypedDict for type-safe dictionaries with optional keys when working with
    API responses and external data.`),ne=m(),p=l("div"),k=l("p"),ie=t(`When you return a JSON from a REST API call, sometimes, modeling that API
      response is difficult. A normal python dictionary is structured as `),U=l("code"),de=t("dict[str, Any]"),ce=t(` which may be too many degrees of freedom for some people. However, a dataclass
      is only suitable for internal data representations with fixed structures, but
      if you're using external, raw/untrusted data, you need less explicit structures.`),pe=m(),j=l("pre"),c=l("code"),ue=t(`# Example function
def process_user(data: dict) -> None:
    # we expect: `),fe=t(bt),me=t('\\"id\\": int, \\"email\\": str (optional)'),he=t(Dt),ye=t(` 
    print(f"User id = `),_e=t(kt),ve=t("data['id']"),ge=t(St),Ee=t(`")
    if "email" in data:
        print(f"Email = `),we=t(Tt),xe=t("data['email']"),be=t(At),De=t('")'),ke=m(),S=l("p"),Se=t("For this case, instead of a dictionary or dataclass, the "),F=l("code"),Te=t("TypedDict"),Ae=t(` would allow you to define a dictionary with specific keys and value types
      which allow you to specify both required and optional keys, which allow for
      stronger type checking during development.`),Ie=m(),G=l("pre"),n=l("code"),Pe=t(`from typing import TypedDict, NotRequired

class UserDict(TypedDict):
    id: int
    email: NotRequired[str]    # now optional

def process_user(data: UserDict) -> None:
    print(f"User id = `),Ne=t(It),Re=t("data['id']"),Oe=t(Pt),qe=t(`")
    if "email" in data:
        print(f"Email = `),Ce=t(Nt),$e=t("data['email']"),Ue=t(Rt),je=t(`")

process_user(`),Fe=t(Ot),Ge=t('\\"id\\": 42'),Le=t(qt),Be=t(`)  # ✅ ok, email optional
process_user(`),Ve=t(Ct),He=t('\\"id\\": 42, \\"email\\": \\"alex@example.com\\"'),Je=t($t),Me=t(`)  # ✅ ok
process_user(`),We=t(Ut),Ke=t('\\"email\\": \\"oops\\"'),Qe=t(jt),ze=t(')  # ❌ type checker error: missing "id"'),Xe=m(),L=l("h2"),Ye=t("Advantages of TypedDict"),Ze=m(),v=l("ul"),b=l("li"),B=l("strong"),et=t("Flexible Structure:"),tt=t(` Better than
        `),V=l("code"),at=t("dict[str, Any]"),ot=t(" but more flexible than dataclasses"),lt=m(),R=l("li"),H=l("strong"),rt=t("API Modeling:"),st=t(` Perfect for modeling JSON responses from REST
        APIs`),nt=m(),T=l("li"),J=l("strong"),it=t("Optional Keys:"),dt=t(` Support for both required and optional
        fields with `),M=l("code"),ct=t("NotRequired"),pt=m(),O=l("li"),W=l("strong"),ut=t("Static Type Safety:"),ft=t(` Get compile-time type checking for dictionary
        access`),mt=m(),q=l("li"),K=l("strong"),ht=t("External Data:"),yt=t(` Ideal for working with external, raw, or
        untrusted data sources`),_t=m(),C=l("div"),$=l("p"),vt=t("Questions or feedback? Feel free to reach out!"),this.h()},l(f){da(_.$$.fragment,f),x=h(f),d=r(f,"ARTICLE",{class:!0});var u=s(d);A=r(u,"DIV",{class:!0});var Ft=s(A);D=r(Ft,"A",{href:!0,class:!0});var Gt=s(D);ee=a(Gt,"← Back to Python"),Gt.forEach(o),Ft.forEach(o),te=h(u),I=r(u,"H1",{class:!0});var Lt=s(I);ae=a(Lt,"TypedDict"),Lt.forEach(o),oe=h(u),P=r(u,"DIV",{class:!0});var Bt=s(P);le=a(Bt,"September 6, 2025 • 5 min read"),Bt.forEach(o),re=h(u),N=r(u,"DIV",{class:!0});var Vt=s(N);se=a(Vt,`TypedDict for type-safe dictionaries with optional keys when working with
    API responses and external data.`),Vt.forEach(o),ne=h(u),p=r(u,"DIV",{class:!0});var g=s(p);k=r(g,"P",{});var X=s(k);ie=a(X,`When you return a JSON from a REST API call, sometimes, modeling that API
      response is difficult. A normal python dictionary is structured as `),U=r(X,"CODE",{});var Ht=s(U);de=a(Ht,"dict[str, Any]"),Ht.forEach(o),ce=a(X,` which may be too many degrees of freedom for some people. However, a dataclass
      is only suitable for internal data representations with fixed structures, but
      if you're using external, raw/untrusted data, you need less explicit structures.`),X.forEach(o),pe=h(g),j=r(g,"PRE",{});var Jt=s(j);c=r(Jt,"CODE",{class:!0});var y=s(c);ue=a(y,`# Example function
def process_user(data: dict) -> None:
    # we expect: `),fe=a(y,bt),me=a(y,'\\"id\\": int, \\"email\\": str (optional)'),he=a(y,Dt),ye=a(y,` 
    print(f"User id = `),_e=a(y,kt),ve=a(y,"data['id']"),ge=a(y,St),Ee=a(y,`")
    if "email" in data:
        print(f"Email = `),we=a(y,Tt),xe=a(y,"data['email']"),be=a(y,At),De=a(y,'")'),y.forEach(o),Jt.forEach(o),ke=h(g),S=r(g,"P",{});var Y=s(S);Se=a(Y,"For this case, instead of a dictionary or dataclass, the "),F=r(Y,"CODE",{});var Mt=s(F);Te=a(Mt,"TypedDict"),Mt.forEach(o),Ae=a(Y,` would allow you to define a dictionary with specific keys and value types
      which allow you to specify both required and optional keys, which allow for
      stronger type checking during development.`),Y.forEach(o),Ie=h(g),G=r(g,"PRE",{});var Wt=s(G);n=r(Wt,"CODE",{class:!0});var i=s(n);Pe=a(i,`from typing import TypedDict, NotRequired

class UserDict(TypedDict):
    id: int
    email: NotRequired[str]    # now optional

def process_user(data: UserDict) -> None:
    print(f"User id = `),Ne=a(i,It),Re=a(i,"data['id']"),Oe=a(i,Pt),qe=a(i,`")
    if "email" in data:
        print(f"Email = `),Ce=a(i,Nt),$e=a(i,"data['email']"),Ue=a(i,Rt),je=a(i,`")

process_user(`),Fe=a(i,Ot),Ge=a(i,'\\"id\\": 42'),Le=a(i,qt),Be=a(i,`)  # ✅ ok, email optional
process_user(`),Ve=a(i,Ct),He=a(i,'\\"id\\": 42, \\"email\\": \\"alex@example.com\\"'),Je=a(i,$t),Me=a(i,`)  # ✅ ok
process_user(`),We=a(i,Ut),Ke=a(i,'\\"email\\": \\"oops\\"'),Qe=a(i,jt),ze=a(i,')  # ❌ type checker error: missing "id"'),i.forEach(o),Wt.forEach(o),Xe=h(g),L=r(g,"H2",{});var Kt=s(L);Ye=a(Kt,"Advantages of TypedDict"),Kt.forEach(o),Ze=h(g),v=r(g,"UL",{});var w=s(v);b=r(w,"LI",{});var Q=s(b);B=r(Q,"STRONG",{});var Qt=s(B);et=a(Qt,"Flexible Structure:"),Qt.forEach(o),tt=a(Q,` Better than
        `),V=r(Q,"CODE",{});var zt=s(V);at=a(zt,"dict[str, Any]"),zt.forEach(o),ot=a(Q," but more flexible than dataclasses"),Q.forEach(o),lt=h(w),R=r(w,"LI",{});var gt=s(R);H=r(gt,"STRONG",{});var Xt=s(H);rt=a(Xt,"API Modeling:"),Xt.forEach(o),st=a(gt,` Perfect for modeling JSON responses from REST
        APIs`),gt.forEach(o),nt=h(w),T=r(w,"LI",{});var Z=s(T);J=r(Z,"STRONG",{});var Yt=s(J);it=a(Yt,"Optional Keys:"),Yt.forEach(o),dt=a(Z,` Support for both required and optional
        fields with `),M=r(Z,"CODE",{});var Zt=s(M);ct=a(Zt,"NotRequired"),Zt.forEach(o),Z.forEach(o),pt=h(w),O=r(w,"LI",{});var Et=s(O);W=r(Et,"STRONG",{});var ea=s(W);ut=a(ea,"Static Type Safety:"),ea.forEach(o),ft=a(Et,` Get compile-time type checking for dictionary
        access`),Et.forEach(o),mt=h(w),q=r(w,"LI",{});var wt=s(q);K=r(wt,"STRONG",{});var ta=s(K);ht=a(ta,"External Data:"),ta.forEach(o),yt=a(wt,` Ideal for working with external, raw, or
        untrusted data sources`),wt.forEach(o),w.forEach(o),g.forEach(o),_t=h(u),C=r(u,"DIV",{class:!0});var aa=s(C);$=r(aa,"P",{class:!0});var oa=s($);vt=a(oa,"Questions or feedback? Feel free to reach out!"),oa.forEach(o),aa.forEach(o),u.forEach(o),this.h()},h(){E(D,"href","/python"),E(D,"class","text-blue-600 hover:underline text-sm"),E(A,"class","mb-8"),E(I,"class","text-3xl font-bold mb-4"),E(P,"class","text-sm text-neutral-500 mb-8"),E(N,"class","text-lg text-neutral-700 mb-8 leading-relaxed"),E(c,"class","language-python"),E(n,"class","language-python"),E(p,"class","prose prose-neutral max-w-none"),E($,"class","text-sm text-neutral-500"),E(C,"class","border-t pt-8 mt-12"),E(d,"class","layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b")},m(f,u){ca(_,f,u),la(f,x,u),la(f,d,u),e(d,A),e(A,D),e(D,ee),e(d,te),e(d,I),e(I,ae),e(d,oe),e(d,P),e(P,le),e(d,re),e(d,N),e(N,se),e(d,ne),e(d,p),e(p,k),e(k,ie),e(k,U),e(U,de),e(k,ce),e(p,pe),e(p,j),e(j,c),e(c,ue),e(c,fe),e(c,me),e(c,he),e(c,ye),e(c,_e),e(c,ve),e(c,ge),e(c,Ee),e(c,we),e(c,xe),e(c,be),e(c,De),e(p,ke),e(p,S),e(S,Se),e(S,F),e(F,Te),e(S,Ae),e(p,Ie),e(p,G),e(G,n),e(n,Pe),e(n,Ne),e(n,Re),e(n,Oe),e(n,qe),e(n,Ce),e(n,$e),e(n,Ue),e(n,je),e(n,Fe),e(n,Ge),e(n,Le),e(n,Be),e(n,Ve),e(n,He),e(n,Je),e(n,Me),e(n,We),e(n,Ke),e(n,Qe),e(n,ze),e(p,Xe),e(p,L),e(L,Ye),e(p,Ze),e(p,v),e(v,b),e(b,B),e(B,et),e(b,tt),e(b,V),e(V,at),e(b,ot),e(v,lt),e(v,R),e(R,H),e(H,rt),e(R,st),e(v,nt),e(v,T),e(T,J),e(J,it),e(T,dt),e(T,M),e(M,ct),e(v,pt),e(v,O),e(O,W),e(W,ut),e(O,ft),e(v,mt),e(v,q),e(q,K),e(K,ht),e(q,yt),e(d,_t),e(d,C),e(C,$),e($,vt),z=!0},p:pa,i(f){z||(ua(_.$$.fragment,f),z=!0)},o(f){fa(_.$$.fragment,f),z=!1},d(f){ma(_,f),f&&o(x),f&&o(d)}}}function va(xt){return ha(async()=>{if(typeof window<"u"&&!window.Prism){const _=document.createElement("link");_.rel="stylesheet",_.href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css",document.head.appendChild(_);const x=document.createElement("script");x.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js",x.onload=()=>{const d=document.createElement("script");d.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js",d.onload=()=>{window.Prism.highlightAll()},document.head.appendChild(d)},document.head.appendChild(x)}}),[]}class wa extends ra{constructor(_){super(),sa(this,_,va,_a,na,{})}}export{wa as default};
