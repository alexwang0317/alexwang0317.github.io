import{S as Ut,i as Wt,s as Xt,y as Zt,a as d,k as n,q as l,z as en,c as u,l as o,m as a,r,h as t,n as m,A as tn,b as zt,C as e,F as nn,g as on,d as an,B as ln,o as rn}from"../chunks/index.5437a47d.js";import{S as sn}from"../chunks/Seo.81a06601.js";function cn(bt){let f,y,c,C,w,de,ue,D,pe,he,A,fe,_e,O,me,ve,i,H,ge,be,N,k,ye,Ee,I,xe,V,we,Ie,Pe,M,S,Ce,De,g,Ae,q,Oe,ke,J,Se,Te,$e,K,Fe,Le,P,Re,Q,je,Be,Ge,Y,T,He,Ne,b,Ve,z,Me,qe,U,Je,Ke,Qe,W,Ye,ze,_,$,X,Ue,We,Xe,F,Z,Ze,et,tt,E,ee,nt,ot,te,at,lt,rt,L,ne,it,st,ct,x,oe,dt,ut,ae,pt,ht,ft,R,j,_t,ie;return f=new sn({props:{title:"__all__ - Alex Wang",description:"Control module exports explicitly with Python's __all__"}}),{c(){Zt(f.$$.fragment),y=d(),c=n("article"),C=n("div"),w=n("a"),de=l("← Back to Python"),ue=d(),D=n("h1"),pe=l("__all__"),he=d(),A=n("div"),fe=l("January 5, 2025 • 4 min read"),_e=d(),O=n("div"),me=l(`Explicitly control what gets exported from your Python modules with __all__.
    Learn how to create cleaner public APIs and protect against unintended
    imports.`),ve=d(),i=n("div"),H=n("p"),ge=l(`Imagine you're building an API where you have code for both private and
      public consumption. For example, you have a public function that has
      private helper functions.`),be=d(),N=n("pre"),k=n("code"),ye=l(`def public_function(...) -> ...:
    ...
    private_function(...)
    ...

def private_function(...) -> ...:
    ...`),Ee=d(),I=n("p"),xe=l(`In general, the pythonic way of resolving this is to preface with the
      protected prefix `),V=n("code"),we=l("_"),Ie=l(" to indicate internal consumption."),Pe=d(),M=n("pre"),S=n("code"),Ce=l(`def _private_function(...) -> ...:
    ...`),De=d(),g=n("p"),Ae=l(`Clear signaling of what functions are for/not for public consumption is
      helpful for maintaining and calling public APIs. However, on the flip
      side, everything without `),q=n("code"),Oe=l("_"),ke=l(` is assumed to be public
      implicitly. This could allow the import of non-public methods when using
      `),J=n("code"),Se=l("from module import *"),Te=l(". This is error prone."),$e=d(),K=n("h2"),Fe=l("The Solution: __all__"),Le=d(),P=n("p"),Re=l(`Another way to achieve this same effect is to explicitly signal with the
      `),Q=n("code"),je=l("__all__"),Be=l(` module attribute (although it looks like a dunder method,
      it isn't!).`),Ge=d(),Y=n("pre"),T=n("code"),He=l(`def public_func():
    pass

def _private_func_mislabeled():
    pass

def _another_func1():
    pass

def another_func():
    pass

__all__ = ['public_func', '_private_func_mislabeled']  # explicit control

# from mymodule import * will import: public_func, _private_func_mislabeled
# another_func is excluded even though it's "public" by naming
# _another_func1 is also excluded, as it should be.`),Ne=d(),b=n("p"),Ve=l(`This limits the blast radius of any changes to non-public functions, as
      they won't be imported via `),z=n("code"),Me=l("import *"),qe=l(`. For example, if you
      wanted
      `),U=n("code"),Je=l("_another_func1"),Ke=l(` to be async, you could change it without worrying
      about breaking external code that might have accidentally imported it.`),Qe=d(),W=n("h2"),Ye=l("Key Benefits"),ze=d(),_=n("ul"),$=n("li"),X=n("strong"),Ue=l("Explicit API control:"),We=l(` You decide exactly what's part of
        your public API`),Xe=d(),F=n("li"),Z=n("strong"),Ze=l("Protection from accidental exports:"),et=l(` Functions without underscore
        prefixes won't be accidentally exported`),tt=d(),E=n("li"),ee=n("strong"),nt=l("Clear documentation:"),ot=d(),te=n("code"),at=l("__all__"),lt=l(` serves as a single
        source of truth for your module's public interface`),rt=d(),L=n("li"),ne=n("strong"),it=l("Safer refactoring:"),st=l(` Internal functions can be changed without
        worrying about breaking external code`),ct=d(),x=n("li"),oe=n("strong"),dt=l("IDE support:"),ut=l(" Many IDEs use "),ae=n("code"),pt=l("__all__"),ht=l(` to provide
        better autocomplete suggestions`),ft=d(),R=n("div"),j=n("p"),_t=l("Questions or feedback? Feel free to reach out!"),this.h()},l(h){en(f.$$.fragment,h),y=u(h),c=o(h,"ARTICLE",{class:!0});var p=a(c);C=o(p,"DIV",{class:!0});var yt=a(C);w=o(yt,"A",{href:!0,class:!0});var Et=a(w);de=r(Et,"← Back to Python"),Et.forEach(t),yt.forEach(t),ue=u(p),D=o(p,"H1",{class:!0});var xt=a(D);pe=r(xt,"__all__"),xt.forEach(t),he=u(p),A=o(p,"DIV",{class:!0});var wt=a(A);fe=r(wt,"January 5, 2025 • 4 min read"),wt.forEach(t),_e=u(p),O=o(p,"DIV",{class:!0});var It=a(O);me=r(It,`Explicitly control what gets exported from your Python modules with __all__.
    Learn how to create cleaner public APIs and protect against unintended
    imports.`),It.forEach(t),ve=u(p),i=o(p,"DIV",{class:!0});var s=a(i);H=o(s,"P",{});var Pt=a(H);ge=r(Pt,`Imagine you're building an API where you have code for both private and
      public consumption. For example, you have a public function that has
      private helper functions.`),Pt.forEach(t),be=u(s),N=o(s,"PRE",{});var Ct=a(N);k=o(Ct,"CODE",{class:!0});var Dt=a(k);ye=r(Dt,`def public_function(...) -> ...:
    ...
    private_function(...)
    ...

def private_function(...) -> ...:
    ...`),Dt.forEach(t),Ct.forEach(t),Ee=u(s),I=o(s,"P",{});var se=a(I);xe=r(se,`In general, the pythonic way of resolving this is to preface with the
      protected prefix `),V=o(se,"CODE",{});var At=a(V);we=r(At,"_"),At.forEach(t),Ie=r(se," to indicate internal consumption."),se.forEach(t),Pe=u(s),M=o(s,"PRE",{});var Ot=a(M);S=o(Ot,"CODE",{class:!0});var kt=a(S);Ce=r(kt,`def _private_function(...) -> ...:
    ...`),kt.forEach(t),Ot.forEach(t),De=u(s),g=o(s,"P",{});var B=a(g);Ae=r(B,`Clear signaling of what functions are for/not for public consumption is
      helpful for maintaining and calling public APIs. However, on the flip
      side, everything without `),q=o(B,"CODE",{});var St=a(q);Oe=r(St,"_"),St.forEach(t),ke=r(B,` is assumed to be public
      implicitly. This could allow the import of non-public methods when using
      `),J=o(B,"CODE",{});var Tt=a(J);Se=r(Tt,"from module import *"),Tt.forEach(t),Te=r(B,". This is error prone."),B.forEach(t),$e=u(s),K=o(s,"H2",{});var $t=a(K);Fe=r($t,"The Solution: __all__"),$t.forEach(t),Le=u(s),P=o(s,"P",{});var ce=a(P);Re=r(ce,`Another way to achieve this same effect is to explicitly signal with the
      `),Q=o(ce,"CODE",{});var Ft=a(Q);je=r(Ft,"__all__"),Ft.forEach(t),Be=r(ce,` module attribute (although it looks like a dunder method,
      it isn't!).`),ce.forEach(t),Ge=u(s),Y=o(s,"PRE",{});var Lt=a(Y);T=o(Lt,"CODE",{class:!0});var Rt=a(T);He=r(Rt,`def public_func():
    pass

def _private_func_mislabeled():
    pass

def _another_func1():
    pass

def another_func():
    pass

__all__ = ['public_func', '_private_func_mislabeled']  # explicit control

# from mymodule import * will import: public_func, _private_func_mislabeled
# another_func is excluded even though it's "public" by naming
# _another_func1 is also excluded, as it should be.`),Rt.forEach(t),Lt.forEach(t),Ne=u(s),b=o(s,"P",{});var G=a(b);Ve=r(G,`This limits the blast radius of any changes to non-public functions, as
      they won't be imported via `),z=o(G,"CODE",{});var jt=a(z);Me=r(jt,"import *"),jt.forEach(t),qe=r(G,`. For example, if you
      wanted
      `),U=o(G,"CODE",{});var Bt=a(U);Je=r(Bt,"_another_func1"),Bt.forEach(t),Ke=r(G,` to be async, you could change it without worrying
      about breaking external code that might have accidentally imported it.`),G.forEach(t),Qe=u(s),W=o(s,"H2",{});var Gt=a(W);Ye=r(Gt,"Key Benefits"),Gt.forEach(t),ze=u(s),_=o(s,"UL",{});var v=a(_);$=o(v,"LI",{});var mt=a($);X=o(mt,"STRONG",{});var Ht=a(X);Ue=r(Ht,"Explicit API control:"),Ht.forEach(t),We=r(mt,` You decide exactly what's part of
        your public API`),mt.forEach(t),Xe=u(v),F=o(v,"LI",{});var vt=a(F);Z=o(vt,"STRONG",{});var Nt=a(Z);Ze=r(Nt,"Protection from accidental exports:"),Nt.forEach(t),et=r(vt,` Functions without underscore
        prefixes won't be accidentally exported`),vt.forEach(t),tt=u(v),E=o(v,"LI",{});var le=a(E);ee=o(le,"STRONG",{});var Vt=a(ee);nt=r(Vt,"Clear documentation:"),Vt.forEach(t),ot=u(le),te=o(le,"CODE",{});var Mt=a(te);at=r(Mt,"__all__"),Mt.forEach(t),lt=r(le,` serves as a single
        source of truth for your module's public interface`),le.forEach(t),rt=u(v),L=o(v,"LI",{});var gt=a(L);ne=o(gt,"STRONG",{});var qt=a(ne);it=r(qt,"Safer refactoring:"),qt.forEach(t),st=r(gt,` Internal functions can be changed without
        worrying about breaking external code`),gt.forEach(t),ct=u(v),x=o(v,"LI",{});var re=a(x);oe=o(re,"STRONG",{});var Jt=a(oe);dt=r(Jt,"IDE support:"),Jt.forEach(t),ut=r(re," Many IDEs use "),ae=o(re,"CODE",{});var Kt=a(ae);pt=r(Kt,"__all__"),Kt.forEach(t),ht=r(re,` to provide
        better autocomplete suggestions`),re.forEach(t),v.forEach(t),s.forEach(t),ft=u(p),R=o(p,"DIV",{class:!0});var Qt=a(R);j=o(Qt,"P",{class:!0});var Yt=a(j);_t=r(Yt,"Questions or feedback? Feel free to reach out!"),Yt.forEach(t),Qt.forEach(t),p.forEach(t),this.h()},h(){m(w,"href","/python"),m(w,"class","text-blue-600 hover:underline text-sm"),m(C,"class","mb-8"),m(D,"class","text-3xl font-bold mb-4"),m(A,"class","text-sm text-neutral-500 mb-8"),m(O,"class","text-lg text-neutral-700 mb-8 leading-relaxed"),m(k,"class","language-python"),m(S,"class","language-python"),m(T,"class","language-python"),m(i,"class","prose prose-neutral max-w-none"),m(j,"class","text-sm text-neutral-500"),m(R,"class","border-t pt-8 mt-12"),m(c,"class","layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b")},m(h,p){tn(f,h,p),zt(h,y,p),zt(h,c,p),e(c,C),e(C,w),e(w,de),e(c,ue),e(c,D),e(D,pe),e(c,he),e(c,A),e(A,fe),e(c,_e),e(c,O),e(O,me),e(c,ve),e(c,i),e(i,H),e(H,ge),e(i,be),e(i,N),e(N,k),e(k,ye),e(i,Ee),e(i,I),e(I,xe),e(I,V),e(V,we),e(I,Ie),e(i,Pe),e(i,M),e(M,S),e(S,Ce),e(i,De),e(i,g),e(g,Ae),e(g,q),e(q,Oe),e(g,ke),e(g,J),e(J,Se),e(g,Te),e(i,$e),e(i,K),e(K,Fe),e(i,Le),e(i,P),e(P,Re),e(P,Q),e(Q,je),e(P,Be),e(i,Ge),e(i,Y),e(Y,T),e(T,He),e(i,Ne),e(i,b),e(b,Ve),e(b,z),e(z,Me),e(b,qe),e(b,U),e(U,Je),e(b,Ke),e(i,Qe),e(i,W),e(W,Ye),e(i,ze),e(i,_),e(_,$),e($,X),e(X,Ue),e($,We),e(_,Xe),e(_,F),e(F,Z),e(Z,Ze),e(F,et),e(_,tt),e(_,E),e(E,ee),e(ee,nt),e(E,ot),e(E,te),e(te,at),e(E,lt),e(_,rt),e(_,L),e(L,ne),e(ne,it),e(L,st),e(_,ct),e(_,x),e(x,oe),e(oe,dt),e(x,ut),e(x,ae),e(ae,pt),e(x,ht),e(c,ft),e(c,R),e(R,j),e(j,_t),ie=!0},p:nn,i(h){ie||(on(f.$$.fragment,h),ie=!0)},o(h){an(f.$$.fragment,h),ie=!1},d(h){ln(f,h),h&&t(y),h&&t(c)}}}function dn(bt){return rn(async()=>{if(typeof window<"u"&&!window.Prism){const f=document.createElement("link");f.rel="stylesheet",f.href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css",document.head.appendChild(f);const y=document.createElement("script");y.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js",y.onload=()=>{const c=document.createElement("script");c.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js",c.onload=()=>{window.Prism.highlightAll()},document.head.appendChild(c)},document.head.appendChild(y)}}),[]}class hn extends Ut{constructor(f){super(),Wt(this,f,dn,cn,Xt,{})}}export{hn as default};
