import{S as vo,i as _o,s as bo,y as Eo,a as d,k as n,q as t,z as wo,c as h,l as s,m as l,r as o,h as r,n as y,A as Lo,b as yo,C as e,F as xo,g as ko,d as Oo,B as Po,o as To}from"../chunks/index.5437a47d.js";import{S as Io}from"../chunks/Seo.81a06601.js";function Co(Nt){let u,L,c,C,O,de,he,D,ge,pe,F,fe,me,S,ue,ye,a,v,ve,Y,_e,be,B,Ee,we,H,Le,xe,ke,P,Oe,W,Pe,Te,Ie,q,f,Ce,Mt="{",De,Fe,jt="}",Se,Ge,$t="{",Ne,Me,At="}",je,$e,Ae,w,Re,J,Ve,Ye,Q,Be,He,We,T,qe,z,Je,Qe,ze,U,Ue,Ke,K,m,Xe,Rt="{",Ze,et,Vt="}",tt,ot,Yt="{",rt,nt,Bt="}",st,lt,at,X,it,ct,_,G,Z,dt,ht,gt,N,ee,pt,ft,mt,M,te,ut,yt,vt,j,oe,_t,bt,Et,re,wt,Lt,ne,$,xt,kt,I,Ot,se,Pt,Tt,It,A,R,Ct,le;return u=new Io({props:{title:"@override Decorator - Alex Wang",description:"@override decorator prevents inheritance bugs and makes your code more maintainable"}}),{c(){Eo(u.$$.fragment),L=d(),c=n("article"),C=n("div"),O=n("a"),de=t("← Back to Python"),he=d(),D=n("h2"),ge=t("@override Decorator"),pe=d(),F=n("div"),fe=t("July 8, 2025 • 8 min read"),me=d(),S=n("div"),ue=t(`Python's @override decorator is a simple yet powerful tool to catch
    inheritance bugs before they cause problems in production. Let's explore how
    this feature works and why you should start using it today.`),ye=d(),a=n("div"),v=n("p"),ve=t(`You're refactoring a logging system to add file-specific functionality.
      You have a Logger base class and a FileLogger subclass. You need to
      override the `),Y=n("code"),_e=t("log()"),be=t(` method to handle file-specific logging
      logic. However, in your haste, you make a typo, naming the method
      `),B=n("code"),Ee=t("log_to_file()"),we=t(`
      instead of `),H=n("code"),Le=t("log()"),xe=t("."),ke=d(),P=n("p"),Oe=t("Without any checks, your code will run, but the base class's "),W=n("code"),Pe=t("log()"),Te=t(` method will be called, not your intended override. This can lead to subtle,
      hard-to-debug bugs, as the parent method may not have the file-writing logic
      you've implemented.`),Ie=d(),q=n("pre"),f=n("code"),Ce=t(`class Logger:
    def log(self, message: str) -> None:
        print(f"LOG: `),De=t(Mt),Fe=t("message"),Se=t(jt),Ge=t(`")

class FileLogger(Logger):
    # OOPS! Typo here: method name doesn't match base class
    def log_to_file(self, message: str, filename: str) -> None:
        with open(filename, 'a') as f:
            f.write(f"FILE LOG: `),Ne=t($t),Me=t("message"),je=t(At),$e=t(`\\\\n")

# The user's code expects FileLogger.log to be called, but it won't be!
logger = FileLogger()
logger.log("System started.")
# This will print "LOG: System started."
# NOT write to a file as intended!`),Ae=d(),w=n("p"),Re=t("The "),J=n("code"),Ve=t("@override"),Ye=t(" decorator from the "),Q=n("code"),Be=t("typing"),He=t(` module is
      a simple yet powerful tool for preventing this exact problem. It explicitly
      marks a method as an intended override of a parent class method.`),We=d(),T=n("p"),qe=t("If you use "),z=n("code"),Je=t("@override"),Qe=t(` and the method doesn't actually exist in
      any of the parent classes, type checkers will raise an error. This turns a
      silent, insidious bug into an error that you can fix right away. By flagging
      any misspellings or non-existent overrides, it encourages safer object-oriented
      programming (OOP) practices by reducing accidental bugs.`),ze=d(),U=n("p"),Ue=t("Here is a fixed version of that same code:"),Ke=d(),K=n("pre"),m=n("code"),Xe=t(`from typing import override


class Logger:
    def log(self, message: str) -> None:
        print(f"LOG: `),Ze=t(Rt),et=t("message"),tt=t(Vt),ot=t(`")


class FileLogger(Logger):
    @override  # This will catch the typo!
    def log_to_file(self, message: str, filename: str) -> None:  # Error: no matching method in parent
        with open(filename, 'a') as f:
            f.write(f"FILE LOG: `),rt=t(Yt),nt=t("message"),st=t(Bt),lt=t('\\\\n")'),at=d(),X=n("p"),it=t(`Any popular type checker would help notice this and tell you about the
      error:`),ct=d(),_=n("ul"),G=n("li"),Z=n("strong"),dt=t("mypy"),ht=t(" - Most widely used Python type checker"),gt=d(),N=n("li"),ee=n("strong"),pt=t("pyright/Pylance"),ft=t(` - Microsoft's type checker (default in VS
        Code)`),mt=d(),M=n("li"),te=n("strong"),ut=t("Pyre"),yt=t(" - Meta's type checker"),vt=d(),j=n("li"),oe=n("strong"),_t=t("pytype"),bt=t(" - Google's type checker"),Et=d(),re=n("p"),wt=t("The errors would look like this:"),Lt=d(),ne=n("pre"),$=n("code"),xt=t('# mypy error: Method "log_to_file" marked with @override does not override anything [misc] \n# pyright/Pylance Method "log_to_file" overrides nothing \n# Pyre Invalid override [40]: `log_to_file` is not defined in base classes of `FileLogger`'),kt=d(),I=n("p"),Ot=t(`Any modern Python development setup with type checking enabled will catch
      these `),se=n("code"),Pt=t("@override"),Tt=t(` mistakes before your code ever runs, turning silent
      bugs into immediate, fixable errors.`),It=d(),A=n("div"),R=n("p"),Ct=t("Questions or feedback? Feel free to reach out!"),this.h()},l(p){wo(u.$$.fragment,p),L=h(p),c=s(p,"ARTICLE",{class:!0});var g=l(c);C=s(g,"DIV",{class:!0});var Ht=l(C);O=s(Ht,"A",{href:!0,class:!0});var Wt=l(O);de=o(Wt,"← Back to Python"),Wt.forEach(r),Ht.forEach(r),he=h(g),D=s(g,"H2",{class:!0});var qt=l(D);ge=o(qt,"@override Decorator"),qt.forEach(r),pe=h(g),F=s(g,"DIV",{class:!0});var Jt=l(F);fe=o(Jt,"July 8, 2025 • 8 min read"),Jt.forEach(r),me=h(g),S=s(g,"DIV",{class:!0});var Qt=l(S);ue=o(Qt,`Python's @override decorator is a simple yet powerful tool to catch
    inheritance bugs before they cause problems in production. Let's explore how
    this feature works and why you should start using it today.`),Qt.forEach(r),ye=h(g),a=s(g,"DIV",{class:!0});var i=l(a);v=s(i,"P",{});var x=l(v);ve=o(x,`You're refactoring a logging system to add file-specific functionality.
      You have a Logger base class and a FileLogger subclass. You need to
      override the `),Y=s(x,"CODE",{});var zt=l(Y);_e=o(zt,"log()"),zt.forEach(r),be=o(x,` method to handle file-specific logging
      logic. However, in your haste, you make a typo, naming the method
      `),B=s(x,"CODE",{});var Ut=l(B);Ee=o(Ut,"log_to_file()"),Ut.forEach(r),we=o(x,`
      instead of `),H=s(x,"CODE",{});var Kt=l(H);Le=o(Kt,"log()"),Kt.forEach(r),xe=o(x,"."),x.forEach(r),ke=h(i),P=s(i,"P",{});var ae=l(P);Oe=o(ae,"Without any checks, your code will run, but the base class's "),W=s(ae,"CODE",{});var Xt=l(W);Pe=o(Xt,"log()"),Xt.forEach(r),Te=o(ae,` method will be called, not your intended override. This can lead to subtle,
      hard-to-debug bugs, as the parent method may not have the file-writing logic
      you've implemented.`),ae.forEach(r),Ie=h(i),q=s(i,"PRE",{});var Zt=l(q);f=s(Zt,"CODE",{class:!0});var b=l(f);Ce=o(b,`class Logger:
    def log(self, message: str) -> None:
        print(f"LOG: `),De=o(b,Mt),Fe=o(b,"message"),Se=o(b,jt),Ge=o(b,`")

class FileLogger(Logger):
    # OOPS! Typo here: method name doesn't match base class
    def log_to_file(self, message: str, filename: str) -> None:
        with open(filename, 'a') as f:
            f.write(f"FILE LOG: `),Ne=o(b,$t),Me=o(b,"message"),je=o(b,At),$e=o(b,`\\\\n")

# The user's code expects FileLogger.log to be called, but it won't be!
logger = FileLogger()
logger.log("System started.")
# This will print "LOG: System started."
# NOT write to a file as intended!`),b.forEach(r),Zt.forEach(r),Ae=h(i),w=s(i,"P",{});var V=l(w);Re=o(V,"The "),J=s(V,"CODE",{});var eo=l(J);Ve=o(eo,"@override"),eo.forEach(r),Ye=o(V," decorator from the "),Q=s(V,"CODE",{});var to=l(Q);Be=o(to,"typing"),to.forEach(r),He=o(V,` module is
      a simple yet powerful tool for preventing this exact problem. It explicitly
      marks a method as an intended override of a parent class method.`),V.forEach(r),We=h(i),T=s(i,"P",{});var ie=l(T);qe=o(ie,"If you use "),z=s(ie,"CODE",{});var oo=l(z);Je=o(oo,"@override"),oo.forEach(r),Qe=o(ie,` and the method doesn't actually exist in
      any of the parent classes, type checkers will raise an error. This turns a
      silent, insidious bug into an error that you can fix right away. By flagging
      any misspellings or non-existent overrides, it encourages safer object-oriented
      programming (OOP) practices by reducing accidental bugs.`),ie.forEach(r),ze=h(i),U=s(i,"P",{});var ro=l(U);Ue=o(ro,"Here is a fixed version of that same code:"),ro.forEach(r),Ke=h(i),K=s(i,"PRE",{});var no=l(K);m=s(no,"CODE",{class:!0});var E=l(m);Xe=o(E,`from typing import override


class Logger:
    def log(self, message: str) -> None:
        print(f"LOG: `),Ze=o(E,Rt),et=o(E,"message"),tt=o(E,Vt),ot=o(E,`")


class FileLogger(Logger):
    @override  # This will catch the typo!
    def log_to_file(self, message: str, filename: str) -> None:  # Error: no matching method in parent
        with open(filename, 'a') as f:
            f.write(f"FILE LOG: `),rt=o(E,Yt),nt=o(E,"message"),st=o(E,Bt),lt=o(E,'\\\\n")'),E.forEach(r),no.forEach(r),at=h(i),X=s(i,"P",{});var so=l(X);it=o(so,`Any popular type checker would help notice this and tell you about the
      error:`),so.forEach(r),ct=h(i),_=s(i,"UL",{});var k=l(_);G=s(k,"LI",{});var Dt=l(G);Z=s(Dt,"STRONG",{});var lo=l(Z);dt=o(lo,"mypy"),lo.forEach(r),ht=o(Dt," - Most widely used Python type checker"),Dt.forEach(r),gt=h(k),N=s(k,"LI",{});var Ft=l(N);ee=s(Ft,"STRONG",{});var ao=l(ee);pt=o(ao,"pyright/Pylance"),ao.forEach(r),ft=o(Ft,` - Microsoft's type checker (default in VS
        Code)`),Ft.forEach(r),mt=h(k),M=s(k,"LI",{});var St=l(M);te=s(St,"STRONG",{});var io=l(te);ut=o(io,"Pyre"),io.forEach(r),yt=o(St," - Meta's type checker"),St.forEach(r),vt=h(k),j=s(k,"LI",{});var Gt=l(j);oe=s(Gt,"STRONG",{});var co=l(oe);_t=o(co,"pytype"),co.forEach(r),bt=o(Gt," - Google's type checker"),Gt.forEach(r),k.forEach(r),Et=h(i),re=s(i,"P",{});var ho=l(re);wt=o(ho,"The errors would look like this:"),ho.forEach(r),Lt=h(i),ne=s(i,"PRE",{});var go=l(ne);$=s(go,"CODE",{class:!0});var po=l($);xt=o(po,'# mypy error: Method "log_to_file" marked with @override does not override anything [misc] \n# pyright/Pylance Method "log_to_file" overrides nothing \n# Pyre Invalid override [40]: `log_to_file` is not defined in base classes of `FileLogger`'),po.forEach(r),go.forEach(r),kt=h(i),I=s(i,"P",{});var ce=l(I);Ot=o(ce,`Any modern Python development setup with type checking enabled will catch
      these `),se=s(ce,"CODE",{});var fo=l(se);Pt=o(fo,"@override"),fo.forEach(r),Tt=o(ce,` mistakes before your code ever runs, turning silent
      bugs into immediate, fixable errors.`),ce.forEach(r),i.forEach(r),It=h(g),A=s(g,"DIV",{class:!0});var mo=l(A);R=s(mo,"P",{class:!0});var uo=l(R);Ct=o(uo,"Questions or feedback? Feel free to reach out!"),uo.forEach(r),mo.forEach(r),g.forEach(r),this.h()},h(){y(O,"href","/python"),y(O,"class","text-blue-600 hover:underline text-sm"),y(C,"class","mb-8"),y(D,"class","heading2"),y(F,"class","text-sm text-neutral-500 mb-8"),y(S,"class","text-lg text-neutral-700 mb-8 leading-relaxed"),y(f,"class","language-python"),y(m,"class","language-python"),y($,"class","language-bash"),y(a,"class","prose prose-neutral max-w-none"),y(R,"class","text-sm text-neutral-500"),y(A,"class","border-t pt-8 mt-12"),y(c,"class","layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b")},m(p,g){Lo(u,p,g),yo(p,L,g),yo(p,c,g),e(c,C),e(C,O),e(O,de),e(c,he),e(c,D),e(D,ge),e(c,pe),e(c,F),e(F,fe),e(c,me),e(c,S),e(S,ue),e(c,ye),e(c,a),e(a,v),e(v,ve),e(v,Y),e(Y,_e),e(v,be),e(v,B),e(B,Ee),e(v,we),e(v,H),e(H,Le),e(v,xe),e(a,ke),e(a,P),e(P,Oe),e(P,W),e(W,Pe),e(P,Te),e(a,Ie),e(a,q),e(q,f),e(f,Ce),e(f,De),e(f,Fe),e(f,Se),e(f,Ge),e(f,Ne),e(f,Me),e(f,je),e(f,$e),e(a,Ae),e(a,w),e(w,Re),e(w,J),e(J,Ve),e(w,Ye),e(w,Q),e(Q,Be),e(w,He),e(a,We),e(a,T),e(T,qe),e(T,z),e(z,Je),e(T,Qe),e(a,ze),e(a,U),e(U,Ue),e(a,Ke),e(a,K),e(K,m),e(m,Xe),e(m,Ze),e(m,et),e(m,tt),e(m,ot),e(m,rt),e(m,nt),e(m,st),e(m,lt),e(a,at),e(a,X),e(X,it),e(a,ct),e(a,_),e(_,G),e(G,Z),e(Z,dt),e(G,ht),e(_,gt),e(_,N),e(N,ee),e(ee,pt),e(N,ft),e(_,mt),e(_,M),e(M,te),e(te,ut),e(M,yt),e(_,vt),e(_,j),e(j,oe),e(oe,_t),e(j,bt),e(a,Et),e(a,re),e(re,wt),e(a,Lt),e(a,ne),e(ne,$),e($,xt),e(a,kt),e(a,I),e(I,Ot),e(I,se),e(se,Pt),e(I,Tt),e(c,It),e(c,A),e(A,R),e(R,Ct),le=!0},p:xo,i(p){le||(ko(u.$$.fragment,p),le=!0)},o(p){Oo(u.$$.fragment,p),le=!1},d(p){Po(u,p),p&&r(L),p&&r(c)}}}function Do(Nt){return To(async()=>{if(typeof window<"u"&&!window.Prism){const u=document.createElement("link");u.rel="stylesheet",u.href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css",document.head.appendChild(u);const L=document.createElement("script");L.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js",L.onload=()=>{const c=document.createElement("script");c.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js",c.onload=()=>{window.Prism.highlightAll()},document.head.appendChild(c)},document.head.appendChild(L)}}),[]}class Go extends vo{constructor(u){super(),_o(this,u,Do,Co,bo,{})}}export{Go as default};
