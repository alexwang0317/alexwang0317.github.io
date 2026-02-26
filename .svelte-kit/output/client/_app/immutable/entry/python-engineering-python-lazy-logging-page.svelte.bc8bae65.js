import{S as It,i as Ct,s as At,y as Tt,a as g,k as l,q as n,z as kt,c as d,l as a,m as s,r as o,h as t,n as h,A as Bt,b as Pt,C as e,F as jt,g as $t,d as Rt,B as St,o as Ut}from"../chunks/index.dd6ea1d3.js";import{S as Gt}from"../chunks/Seo.4277da45.js";function Nt(tt){let f,y,c,D,E,ne,oe,L,le,ae,z,se,re,F,ie,ce,r,$,ge,de,R,m,pe,nt="{",ue,he,ot="}",fe,me,ve,S,_e,ye,w,v,Ee,U,we,be,G,xe,De,Le,O,N,ze,Fe,Oe,q,Pe,Ie,H,P,Ce,Ae,b,Te,V,ke,Be,je,W,I,$e,Re,x,Se,Q,Ue,Ge,Ne,_,qe,M,He,Ve,J,We,Qe,Me,K,C,Je,Ke,X,Xe,Ye,A,T,Ze,Y;return f=new Gt({props:{title:"Lazy Logging - Alex Wang",description:"Optimize Python logging performance with lazy evaluation techniques to avoid expensive operations"}}),{c(){Tt(f.$$.fragment),y=g(),c=l("article"),D=l("div"),E=l("a"),ne=n("← Back to Python"),oe=g(),L=l("h1"),le=n("Lazy Logging"),ae=g(),z=l("div"),se=n("September 4, 2025 • 5 min read"),re=g(),F=l("div"),ie=n(`Learn how to optimize Python logging performance with lazy evaluation
    techniques. Avoid expensive operations and unnecessary string formatting
    when logs aren't actually output.`),ce=g(),r=l("div"),$=l("p"),ge=n(`When writing programs, oftentimes during development/production there are
      lots of logging. We may see a common debug log such as the following.
      Expensive function may be some form of large information retrieval or I/O
      process.`),de=g(),R=l("pre"),m=l("code"),pe=n(`import logging
...
logging.debug(f"using `),ue=n(nt),he=n("expensive_func()"),fe=n(ot),me=n(`  currently")
...`),ve=g(),S=l("p"),_e=n(`However, in the case we are using the default log level of INFO in which
      the log message is not actually output, we are wastefully doing two
      things:`),ye=g(),w=l("ul"),v=l("li"),Ee=n("Rendering a log message, and for some objects calling their "),U=l("code"),we=n("__str__"),be=n("/"),G=l("code"),xe=n("__repr__"),De=n(" is expensive."),Le=g(),O=l("li"),N=l("code"),ze=n("expensive_func"),Fe=n(" is called when not needed."),Oe=g(),q=l("p"),Pe=n(`To address problem 1, we can call logging methods with a string literal
      instead of an f-string, with the first argument and the pattern-parameters
      as argument. This prevents f-string rendering and prevents formatting
      until needed.`),Ie=g(),H=l("pre"),P=l("code"),Ce=n(`import logging
...
logging.debug("using %d currently", expensive_func())
...`),Ae=g(),b=l("p"),Te=n("To address problem 2, we can use the "),V=l("code"),ke=n("isEnabledFor()"),Be=n(` method which
      takes the level argument and only returns True if the event would be created
      by the Logger for that specific level of call. This prevents the calling of
      the expensive function unless absolutely needed.`),je=g(),W=l("pre"),I=l("code"),$e=n(`import logging
...
if logger.isEnabledFor(logging.DEBUG):
    logging.debug("using %d currently", expensive_func())
...`),Re=g(),x=l("p"),Se=n("This means that unless the threshold is set above DEBUG level, the call to "),Q=l("code"),Ue=n("expensive_func()"),Ge=n(`
      is never made.`),Ne=g(),_=l("p"),qe=n("If this is consistently called, you can use "),M=l("code"),He=n("LoggerAdapter"),Ve=n(`
      instead. This allows you to avoid clutter by removing the consistent need for
      `),J=l("code"),We=n("isEnabledFor()"),Qe=n("."),Me=g(),K=l("pre"),C=l("code"),Je=n(`from logging import LoggerAdapter

class LazyLoggerAdapter(LoggerAdapter):
    def lazy_log(self, level, msg_or_func, *args, **kwargs):
        # Only call the function if we're actually going to log
        if self.isEnabledFor(level):
            if callable(msg_or_func):
                message = msg_or_func(*args, **kwargs)  # Function called HERE
            else:
                message = msg_or_func
            self.log(level, message)

...

lazy_logger.lazy_log(logging.DEBUG, expensive_operation)  # Function not called!
lazy_logger.lazy_log(logging.INFO, expensive_operation)   # Function IS called!`),Ke=g(),X=l("p"),Xe=n("Now this will only operate if the DEBUG logging is enabled."),Ye=g(),A=l("div"),T=l("p"),Ze=n("Questions or feedback? Feel free to reach out!"),this.h()},l(u){kt(f.$$.fragment,u),y=d(u),c=a(u,"ARTICLE",{class:!0});var p=s(c);D=a(p,"DIV",{class:!0});var lt=s(D);E=a(lt,"A",{href:!0,class:!0});var at=s(E);ne=o(at,"← Back to Python"),at.forEach(t),lt.forEach(t),oe=d(p),L=a(p,"H1",{class:!0});var st=s(L);le=o(st,"Lazy Logging"),st.forEach(t),ae=d(p),z=a(p,"DIV",{class:!0});var rt=s(z);se=o(rt,"September 4, 2025 • 5 min read"),rt.forEach(t),re=d(p),F=a(p,"DIV",{class:!0});var it=s(F);ie=o(it,`Learn how to optimize Python logging performance with lazy evaluation
    techniques. Avoid expensive operations and unnecessary string formatting
    when logs aren't actually output.`),it.forEach(t),ce=d(p),r=a(p,"DIV",{class:!0});var i=s(r);$=a(i,"P",{});var ct=s($);ge=o(ct,`When writing programs, oftentimes during development/production there are
      lots of logging. We may see a common debug log such as the following.
      Expensive function may be some form of large information retrieval or I/O
      process.`),ct.forEach(t),de=d(i),R=a(i,"PRE",{});var gt=s(R);m=a(gt,"CODE",{class:!0});var k=s(m);pe=o(k,`import logging
...
logging.debug(f"using `),ue=o(k,nt),he=o(k,"expensive_func()"),fe=o(k,ot),me=o(k,`  currently")
...`),k.forEach(t),gt.forEach(t),ve=d(i),S=a(i,"P",{});var dt=s(S);_e=o(dt,`However, in the case we are using the default log level of INFO in which
      the log message is not actually output, we are wastefully doing two
      things:`),dt.forEach(t),ye=d(i),w=a(i,"UL",{});var Z=s(w);v=a(Z,"LI",{});var B=s(v);Ee=o(B,"Rendering a log message, and for some objects calling their "),U=a(B,"CODE",{});var pt=s(U);we=o(pt,"__str__"),pt.forEach(t),be=o(B,"/"),G=a(B,"CODE",{});var ut=s(G);xe=o(ut,"__repr__"),ut.forEach(t),De=o(B," is expensive."),B.forEach(t),Le=d(Z),O=a(Z,"LI",{});var et=s(O);N=a(et,"CODE",{});var ht=s(N);ze=o(ht,"expensive_func"),ht.forEach(t),Fe=o(et," is called when not needed."),et.forEach(t),Z.forEach(t),Oe=d(i),q=a(i,"P",{});var ft=s(q);Pe=o(ft,`To address problem 1, we can call logging methods with a string literal
      instead of an f-string, with the first argument and the pattern-parameters
      as argument. This prevents f-string rendering and prevents formatting
      until needed.`),ft.forEach(t),Ie=d(i),H=a(i,"PRE",{});var mt=s(H);P=a(mt,"CODE",{class:!0});var vt=s(P);Ce=o(vt,`import logging
...
logging.debug("using %d currently", expensive_func())
...`),vt.forEach(t),mt.forEach(t),Ae=d(i),b=a(i,"P",{});var ee=s(b);Te=o(ee,"To address problem 2, we can use the "),V=a(ee,"CODE",{});var _t=s(V);ke=o(_t,"isEnabledFor()"),_t.forEach(t),Be=o(ee,` method which
      takes the level argument and only returns True if the event would be created
      by the Logger for that specific level of call. This prevents the calling of
      the expensive function unless absolutely needed.`),ee.forEach(t),je=d(i),W=a(i,"PRE",{});var yt=s(W);I=a(yt,"CODE",{class:!0});var Et=s(I);$e=o(Et,`import logging
...
if logger.isEnabledFor(logging.DEBUG):
    logging.debug("using %d currently", expensive_func())
...`),Et.forEach(t),yt.forEach(t),Re=d(i),x=a(i,"P",{});var te=s(x);Se=o(te,"This means that unless the threshold is set above DEBUG level, the call to "),Q=a(te,"CODE",{});var wt=s(Q);Ue=o(wt,"expensive_func()"),wt.forEach(t),Ge=o(te,`
      is never made.`),te.forEach(t),Ne=d(i),_=a(i,"P",{});var j=s(_);qe=o(j,"If this is consistently called, you can use "),M=a(j,"CODE",{});var bt=s(M);He=o(bt,"LoggerAdapter"),bt.forEach(t),Ve=o(j,`
      instead. This allows you to avoid clutter by removing the consistent need for
      `),J=a(j,"CODE",{});var xt=s(J);We=o(xt,"isEnabledFor()"),xt.forEach(t),Qe=o(j,"."),j.forEach(t),Me=d(i),K=a(i,"PRE",{});var Dt=s(K);C=a(Dt,"CODE",{class:!0});var Lt=s(C);Je=o(Lt,`from logging import LoggerAdapter

class LazyLoggerAdapter(LoggerAdapter):
    def lazy_log(self, level, msg_or_func, *args, **kwargs):
        # Only call the function if we're actually going to log
        if self.isEnabledFor(level):
            if callable(msg_or_func):
                message = msg_or_func(*args, **kwargs)  # Function called HERE
            else:
                message = msg_or_func
            self.log(level, message)

...

lazy_logger.lazy_log(logging.DEBUG, expensive_operation)  # Function not called!
lazy_logger.lazy_log(logging.INFO, expensive_operation)   # Function IS called!`),Lt.forEach(t),Dt.forEach(t),Ke=d(i),X=a(i,"P",{});var zt=s(X);Xe=o(zt,"Now this will only operate if the DEBUG logging is enabled."),zt.forEach(t),i.forEach(t),Ye=d(p),A=a(p,"DIV",{class:!0});var Ft=s(A);T=a(Ft,"P",{class:!0});var Ot=s(T);Ze=o(Ot,"Questions or feedback? Feel free to reach out!"),Ot.forEach(t),Ft.forEach(t),p.forEach(t),this.h()},h(){h(E,"href","/python"),h(E,"class","text-blue-600 hover:underline text-sm"),h(D,"class","mb-8"),h(L,"class","text-3xl font-bold mb-4"),h(z,"class","text-sm text-neutral-500 mb-8"),h(F,"class","text-lg text-neutral-700 mb-8 leading-relaxed"),h(m,"class","language-python"),h(P,"class","language-python"),h(I,"class","language-python"),h(C,"class","language-python"),h(r,"class","prose prose-neutral max-w-none"),h(T,"class","text-sm text-neutral-500"),h(A,"class","border-t pt-8 mt-12"),h(c,"class","layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b")},m(u,p){Bt(f,u,p),Pt(u,y,p),Pt(u,c,p),e(c,D),e(D,E),e(E,ne),e(c,oe),e(c,L),e(L,le),e(c,ae),e(c,z),e(z,se),e(c,re),e(c,F),e(F,ie),e(c,ce),e(c,r),e(r,$),e($,ge),e(r,de),e(r,R),e(R,m),e(m,pe),e(m,ue),e(m,he),e(m,fe),e(m,me),e(r,ve),e(r,S),e(S,_e),e(r,ye),e(r,w),e(w,v),e(v,Ee),e(v,U),e(U,we),e(v,be),e(v,G),e(G,xe),e(v,De),e(w,Le),e(w,O),e(O,N),e(N,ze),e(O,Fe),e(r,Oe),e(r,q),e(q,Pe),e(r,Ie),e(r,H),e(H,P),e(P,Ce),e(r,Ae),e(r,b),e(b,Te),e(b,V),e(V,ke),e(b,Be),e(r,je),e(r,W),e(W,I),e(I,$e),e(r,Re),e(r,x),e(x,Se),e(x,Q),e(Q,Ue),e(x,Ge),e(r,Ne),e(r,_),e(_,qe),e(_,M),e(M,He),e(_,Ve),e(_,J),e(J,We),e(_,Qe),e(r,Me),e(r,K),e(K,C),e(C,Je),e(r,Ke),e(r,X),e(X,Xe),e(c,Ye),e(c,A),e(A,T),e(T,Ze),Y=!0},p:jt,i(u){Y||($t(f.$$.fragment,u),Y=!0)},o(u){Rt(f.$$.fragment,u),Y=!1},d(u){St(f,u),u&&t(y),u&&t(c)}}}function qt(tt){return Ut(async()=>{if(typeof window<"u"&&!window.Prism){const f=document.createElement("link");f.rel="stylesheet",f.href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css",document.head.appendChild(f);const y=document.createElement("script");y.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js",y.onload=()=>{const c=document.createElement("script");c.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js",c.onload=()=>{window.Prism.highlightAll()},document.head.appendChild(c)},document.head.appendChild(y)}}),[]}class Wt extends It{constructor(f){super(),Ct(this,f,qt,Nt,At,{})}}export{Wt as default};
