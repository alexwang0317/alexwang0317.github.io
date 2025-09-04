import{S as jn,i as Nn,s as Ln,y as Pn,a as r,k as n,q as t,z as In,c as d,l,m as s,r as o,h as a,n as g,A as Sn,b as On,C as e,F as An,g as Fn,d as Tn,B as Un,o as $n}from"../chunks/index.5437a47d.js";import{S as Bn}from"../chunks/Seo.81a06601.js";function qn(ba){let p,F,h,Q,q,Ke,Xe,Y,et,tt,Z,ot,at,M,nt,lt,c,ne,st,ct,le,x,rt,ga="{}",dt,it,wa="{",ht,_t,ut,w,ft,se,pt,mt,ce,vt,Et,re,yt,bt,gt,N,T,wt,de,Ct,xt,ie,Dt,kt,he,Ot,jt,_e,Nt,Lt,ue,Pt,It,m,E,St,fe,At,Ft,pe,Tt,Ut,me,$t,Bt,ve,qt,Rt,y,Vt,Ee,Ht,zt,ye,Gt,Qt,be,Yt,Zt,ge,Mt,Wt,_,Jt,we,Kt,Xt,Ce,eo,to,R,Ca="{",oo,ao,xa="}",no,lo,V,Da="{",so,co,ka="}",ro,io,H,Oa="{",ho,_o,ja="}",uo,fo,xe,po,mo,D,vo,De,Eo,yo,ke,bo,go,Oe,wo,Co,je,xo,Do,C,ko,Ne,Oo,jo,Le,No,Lo,Pe,Po,Io,So,b,Ie,Ao,Fo,Se,To,Uo,Ae,$o,Bo,Fe,qo,Ro,Vo,L,Ho,Te,zo,Go,Ue,Qo,Yo,Zo,$e,k,Mo,Na="{}",Wo,Jo,La="{",Ko,Xo,ea,Be,ta,oa,P,U,qe,aa,na,Re,la,sa,ca,O,Ve,ra,da,He,ia,ha,ze,_a,ua,fa,W,Ge,pa,ma,va,J,K,Ea,Ze;return p=new Bn({props:{title:"__bool__ Dunder - Alex Wang",description:"Understanding Python's __bool__ dunder method for truthiness evaluation"}}),{c(){Pn(p.$$.fragment),F=r(),h=n("article"),Q=n("div"),q=n("a"),Ke=t("← Back to Python"),Xe=r(),Y=n("h1"),et=t("__bool__ Dunder"),tt=r(),Z=n("div"),ot=t("December 3, 2024 • 6 min read"),at=r(),M=n("div"),nt=t(`Understanding Python's __bool__ dunder method for truthiness evaluation in
    custom classes. Learn how to make your objects work naturally with if
    statements and boolean operations.`),lt=r(),c=n("div"),ne=n("p"),st=t(`Let's say for example you are building a cache class and you want to
      operate on this cache class. However, you want to fetch some user from the
      cache, only if it's there, but you're having problems with this.`),ct=r(),le=n("pre"),x=n("code"),rt=t(`class SimpleCache:
    def __init__(self):
        self._data = `),dt=t(ga),it=t(`
    def set(self, key, value):
        self._data[key] = value
    def get(self, key, default=None):
        return self._data.get(key, default)
…

def fetch_user(cache, user_id):
    if not cache:  # natural, just like a dict or list
        print("Cache empty, querying DB...")
        data = `),ht=t(wa),_t=t(`\\"id\\": user_id, \\"name\\": \\"Alex\\"'}'}
        cache.set(user_id, data)
    else:
        print("Using cache")
    return cache.get(user_id)`),ut=r(),w=n("p"),ft=t(`One core component of idiomatic python is evaluating truthfulness of
      objects in a Boolean way when using things like `),se=n("code"),pt=t("if"),mt=t(`,
      `),ce=n("code"),vt=t("while"),Et=t(", and "),re=n("code"),yt=t("not"),bt=t(`. For lots of existing types we
      see existing false groups:`),gt=r(),N=n("ul"),T=n("li"),wt=t("Constants such as "),de=n("code"),Ct=t("None"),xt=t(" and "),ie=n("code"),Dt=t("False"),kt=r(),he=n("li"),Ot=t("Zero of any type"),jt=r(),_e=n("li"),Nt=t("Empty Sequence/collections"),Lt=r(),ue=n("p"),Pt=t("As well as existing True objects like:"),It=r(),m=n("ul"),E=n("li"),St=t("Non-zero numbers: "),fe=n("code"),At=t("1"),Ft=t(", "),pe=n("code"),Tt=t("-2"),Ut=t(", "),me=n("code"),$t=t("0.5"),Bt=t(`,
        `),ve=n("code"),qt=t("1+0j"),Rt=r(),y=n("li"),Vt=t("Non-empty strings: "),Ee=n("code"),Ht=t('"0"'),zt=t(", "),ye=n("code"),Gt=t('"False"'),Qt=t(`,
        `),be=n("code"),Yt=t('" "'),Zt=t(", "),ge=n("code"),Mt=t('"hello"'),Wt=r(),_=n("li"),Jt=t("Non-empty collections: "),we=n("code"),Kt=t("[0]"),Xt=t(", "),Ce=n("code"),eo=t("(None,)"),to=t(`,
        `),R=n("code"),oo=t(Ca),ao=t("0"),no=t(xa),lo=t(", "),V=n("code"),so=t(Da),co=t('\\"k\\": 1'),ro=t(ka),io=t(`,
        `),H=n("code"),ho=t(Oa),_o=t("1"),uo=t(ja),fo=t(", "),xe=n("code"),po=t("range(1)"),mo=r(),D=n("li"),vo=t("Non-empty bytes-like: "),De=n("code"),Eo=t('b"\\x00"'),yo=t(`,
        `),ke=n("code"),bo=t('bytearray(b"\\x00")'),go=t(", "),Oe=n("code"),wo=t('memoryview(b"x")'),Co=r(),je=n("li"),xo=t("Objects & callables"),Do=r(),C=n("p"),ko=t("For our custom object that we create, Python uses "),Ne=n("code"),Oo=t("__bool__"),jo=t(`
      (or `),Le=n("code"),No=t("__len__"),Lo=t(" if "),Pe=n("code"),Po=t("__bool__"),Io=t(` doesn't exist) to determine
      object truthfulness.`),So=r(),b=n("p"),Ie=n("code"),Ao=t("__bool__"),Fo=t(` is a dunder (double underscore) which basically
      means it's a special function used to define your own python operations.
      Other examples include the widely used `),Se=n("code"),To=t("__init__"),Uo=t(`,
      `),Ae=n("code"),$o=t("__len__"),Bo=t(", and "),Fe=n("code"),qo=t("__str__"),Ro=t(" or other operators."),Vo=r(),L=n("p"),Ho=t("To use it, we want to return "),Te=n("code"),zo=t("True"),Go=t(" or "),Ue=n("code"),Qo=t("False"),Yo=t(` based
      on if the instance of that class is should be empty or not a valid instance
      such as in the example that a cache has no data then:`),Zo=r(),$e=n("pre"),k=n("code"),Mo=t(`class SimpleCache:
    def __init__(self):
        self._data = `),Wo=t(Na),Jo=t(`

    def set(self, key, value):
        self._data[key] = value

    def get(self, key, default=None):
        return self._data.get(key, default)

    def __bool__(self):
        return len(self._data) > 0

# Now this function works perfectly!
def fetch_user(cache, user_id):
    if not cache:  # natural, just like a dict or list
        print("Cache empty, querying DB...")
        data = `),Ko=t(La),Xo=t(`\\"id\\": user_id, \\"name\\": \\"Alex\\"'}'}
        cache.set(user_id, data)
    else:
        print("Using cache")

    return cache.get(user_id)`),ea=r(),Be=n("h2"),ta=t("Advantages of This Approach"),oa=r(),P=n("ul"),U=n("li"),qe=n("strong"),aa=t("Readability:"),na=t(" Conditions like "),Re=n("code"),la=t("if not cache:"),sa=t(`
        are natural and concise when emptiness means "no useful state".`),ca=r(),O=n("li"),Ve=n("strong"),ra=t("Simplified conditionals:"),da=t(` You avoid sprinkling
        `),He=n("code"),ia=t("len(cache._data) == 0"),ha=t(`
        or `),ze=n("code"),_a=t("not cache._data"),ua=t(" throughout the codebase."),fa=r(),W=n("li"),Ge=n("strong"),pa=t("Encapsulation & consistency:"),ma=t(` One canonical definition of
        "empty/invalid" lives in the class, preventing ad-hoc checks that drift over
        time.`),va=r(),J=n("div"),K=n("p"),Ea=t("Questions or feedback? Feel free to reach out!"),this.h()},l(f){In(p.$$.fragment,f),F=d(f),h=l(f,"ARTICLE",{class:!0});var u=s(h);Q=l(u,"DIV",{class:!0});var Pa=s(Q);q=l(Pa,"A",{href:!0,class:!0});var Ia=s(q);Ke=o(Ia,"← Back to Python"),Ia.forEach(a),Pa.forEach(a),Xe=d(u),Y=l(u,"H1",{class:!0});var Sa=s(Y);et=o(Sa,"__bool__ Dunder"),Sa.forEach(a),tt=d(u),Z=l(u,"DIV",{class:!0});var Aa=s(Z);ot=o(Aa,"December 3, 2024 • 6 min read"),Aa.forEach(a),at=d(u),M=l(u,"DIV",{class:!0});var Fa=s(M);nt=o(Fa,`Understanding Python's __bool__ dunder method for truthiness evaluation in
    custom classes. Learn how to make your objects work naturally with if
    statements and boolean operations.`),Fa.forEach(a),lt=d(u),c=l(u,"DIV",{class:!0});var i=s(c);ne=l(i,"P",{});var Ta=s(ne);st=o(Ta,`Let's say for example you are building a cache class and you want to
      operate on this cache class. However, you want to fetch some user from the
      cache, only if it's there, but you're having problems with this.`),Ta.forEach(a),ct=d(i),le=l(i,"PRE",{});var Ua=s(le);x=l(Ua,"CODE",{class:!0});var X=s(x);rt=o(X,`class SimpleCache:
    def __init__(self):
        self._data = `),dt=o(X,ga),it=o(X,`
    def set(self, key, value):
        self._data[key] = value
    def get(self, key, default=None):
        return self._data.get(key, default)
…

def fetch_user(cache, user_id):
    if not cache:  # natural, just like a dict or list
        print("Cache empty, querying DB...")
        data = `),ht=o(X,wa),_t=o(X,`\\"id\\": user_id, \\"name\\": \\"Alex\\"'}'}
        cache.set(user_id, data)
    else:
        print("Using cache")
    return cache.get(user_id)`),X.forEach(a),Ua.forEach(a),ut=d(i),w=l(i,"P",{});var $=s(w);ft=o($,`One core component of idiomatic python is evaluating truthfulness of
      objects in a Boolean way when using things like `),se=l($,"CODE",{});var $a=s(se);pt=o($a,"if"),$a.forEach(a),mt=o($,`,
      `),ce=l($,"CODE",{});var Ba=s(ce);vt=o(Ba,"while"),Ba.forEach(a),Et=o($,", and "),re=l($,"CODE",{});var qa=s(re);yt=o(qa,"not"),qa.forEach(a),bt=o($,`. For lots of existing types we
      see existing false groups:`),$.forEach(a),gt=d(i),N=l(i,"UL",{});var ee=s(N);T=l(ee,"LI",{});var Qe=s(T);wt=o(Qe,"Constants such as "),de=l(Qe,"CODE",{});var Ra=s(de);Ct=o(Ra,"None"),Ra.forEach(a),xt=o(Qe," and "),ie=l(Qe,"CODE",{});var Va=s(ie);Dt=o(Va,"False"),Va.forEach(a),Qe.forEach(a),kt=d(ee),he=l(ee,"LI",{});var Ha=s(he);Ot=o(Ha,"Zero of any type"),Ha.forEach(a),jt=d(ee),_e=l(ee,"LI",{});var za=s(_e);Nt=o(za,"Empty Sequence/collections"),za.forEach(a),ee.forEach(a),Lt=d(i),ue=l(i,"P",{});var Ga=s(ue);Pt=o(Ga,"As well as existing True objects like:"),Ga.forEach(a),It=d(i),m=l(i,"UL",{});var j=s(m);E=l(j,"LI",{});var I=s(E);St=o(I,"Non-zero numbers: "),fe=l(I,"CODE",{});var Qa=s(fe);At=o(Qa,"1"),Qa.forEach(a),Ft=o(I,", "),pe=l(I,"CODE",{});var Ya=s(pe);Tt=o(Ya,"-2"),Ya.forEach(a),Ut=o(I,", "),me=l(I,"CODE",{});var Za=s(me);$t=o(Za,"0.5"),Za.forEach(a),Bt=o(I,`,
        `),ve=l(I,"CODE",{});var Ma=s(ve);qt=o(Ma,"1+0j"),Ma.forEach(a),I.forEach(a),Rt=d(j),y=l(j,"LI",{});var S=s(y);Vt=o(S,"Non-empty strings: "),Ee=l(S,"CODE",{});var Wa=s(Ee);Ht=o(Wa,'"0"'),Wa.forEach(a),zt=o(S,", "),ye=l(S,"CODE",{});var Ja=s(ye);Gt=o(Ja,'"False"'),Ja.forEach(a),Qt=o(S,`,
        `),be=l(S,"CODE",{});var Ka=s(be);Yt=o(Ka,'" "'),Ka.forEach(a),Zt=o(S,", "),ge=l(S,"CODE",{});var Xa=s(ge);Mt=o(Xa,'"hello"'),Xa.forEach(a),S.forEach(a),Wt=d(j),_=l(j,"LI",{});var v=s(_);Jt=o(v,"Non-empty collections: "),we=l(v,"CODE",{});var en=s(we);Kt=o(en,"[0]"),en.forEach(a),Xt=o(v,", "),Ce=l(v,"CODE",{});var tn=s(Ce);eo=o(tn,"(None,)"),tn.forEach(a),to=o(v,`,
        `),R=l(v,"CODE",{});var Me=s(R);oo=o(Me,Ca),ao=o(Me,"0"),no=o(Me,xa),Me.forEach(a),lo=o(v,", "),V=l(v,"CODE",{});var We=s(V);so=o(We,Da),co=o(We,'\\"k\\": 1'),ro=o(We,ka),We.forEach(a),io=o(v,`,
        `),H=l(v,"CODE",{});var Je=s(H);ho=o(Je,Oa),_o=o(Je,"1"),uo=o(Je,ja),Je.forEach(a),fo=o(v,", "),xe=l(v,"CODE",{});var on=s(xe);po=o(on,"range(1)"),on.forEach(a),v.forEach(a),mo=d(j),D=l(j,"LI",{});var z=s(D);vo=o(z,"Non-empty bytes-like: "),De=l(z,"CODE",{});var an=s(De);Eo=o(an,'b"\\x00"'),an.forEach(a),yo=o(z,`,
        `),ke=l(z,"CODE",{});var nn=s(ke);bo=o(nn,'bytearray(b"\\x00")'),nn.forEach(a),go=o(z,", "),Oe=l(z,"CODE",{});var ln=s(Oe);wo=o(ln,'memoryview(b"x")'),ln.forEach(a),z.forEach(a),Co=d(j),je=l(j,"LI",{});var sn=s(je);xo=o(sn,"Objects & callables"),sn.forEach(a),j.forEach(a),Do=d(i),C=l(i,"P",{});var B=s(C);ko=o(B,"For our custom object that we create, Python uses "),Ne=l(B,"CODE",{});var cn=s(Ne);Oo=o(cn,"__bool__"),cn.forEach(a),jo=o(B,`
      (or `),Le=l(B,"CODE",{});var rn=s(Le);No=o(rn,"__len__"),rn.forEach(a),Lo=o(B," if "),Pe=l(B,"CODE",{});var dn=s(Pe);Po=o(dn,"__bool__"),dn.forEach(a),Io=o(B,` doesn't exist) to determine
      object truthfulness.`),B.forEach(a),So=d(i),b=l(i,"P",{});var A=s(b);Ie=l(A,"CODE",{});var hn=s(Ie);Ao=o(hn,"__bool__"),hn.forEach(a),Fo=o(A,` is a dunder (double underscore) which basically
      means it's a special function used to define your own python operations.
      Other examples include the widely used `),Se=l(A,"CODE",{});var _n=s(Se);To=o(_n,"__init__"),_n.forEach(a),Uo=o(A,`,
      `),Ae=l(A,"CODE",{});var un=s(Ae);$o=o(un,"__len__"),un.forEach(a),Bo=o(A,", and "),Fe=l(A,"CODE",{});var fn=s(Fe);qo=o(fn,"__str__"),fn.forEach(a),Ro=o(A," or other operators."),A.forEach(a),Vo=d(i),L=l(i,"P",{});var te=s(L);Ho=o(te,"To use it, we want to return "),Te=l(te,"CODE",{});var pn=s(Te);zo=o(pn,"True"),pn.forEach(a),Go=o(te," or "),Ue=l(te,"CODE",{});var mn=s(Ue);Qo=o(mn,"False"),mn.forEach(a),Yo=o(te,` based
      on if the instance of that class is should be empty or not a valid instance
      such as in the example that a cache has no data then:`),te.forEach(a),Zo=d(i),$e=l(i,"PRE",{});var vn=s($e);k=l(vn,"CODE",{class:!0});var oe=s(k);Mo=o(oe,`class SimpleCache:
    def __init__(self):
        self._data = `),Wo=o(oe,Na),Jo=o(oe,`

    def set(self, key, value):
        self._data[key] = value

    def get(self, key, default=None):
        return self._data.get(key, default)

    def __bool__(self):
        return len(self._data) > 0

# Now this function works perfectly!
def fetch_user(cache, user_id):
    if not cache:  # natural, just like a dict or list
        print("Cache empty, querying DB...")
        data = `),Ko=o(oe,La),Xo=o(oe,`\\"id\\": user_id, \\"name\\": \\"Alex\\"'}'}
        cache.set(user_id, data)
    else:
        print("Using cache")

    return cache.get(user_id)`),oe.forEach(a),vn.forEach(a),ea=d(i),Be=l(i,"H2",{});var En=s(Be);ta=o(En,"Advantages of This Approach"),En.forEach(a),oa=d(i),P=l(i,"UL",{});var ae=s(P);U=l(ae,"LI",{});var Ye=s(U);qe=l(Ye,"STRONG",{});var yn=s(qe);aa=o(yn,"Readability:"),yn.forEach(a),na=o(Ye," Conditions like "),Re=l(Ye,"CODE",{});var bn=s(Re);la=o(bn,"if not cache:"),bn.forEach(a),sa=o(Ye,`
        are natural and concise when emptiness means "no useful state".`),Ye.forEach(a),ca=d(ae),O=l(ae,"LI",{});var G=s(O);Ve=l(G,"STRONG",{});var gn=s(Ve);ra=o(gn,"Simplified conditionals:"),gn.forEach(a),da=o(G,` You avoid sprinkling
        `),He=l(G,"CODE",{});var wn=s(He);ia=o(wn,"len(cache._data) == 0"),wn.forEach(a),ha=o(G,`
        or `),ze=l(G,"CODE",{});var Cn=s(ze);_a=o(Cn,"not cache._data"),Cn.forEach(a),ua=o(G," throughout the codebase."),G.forEach(a),fa=d(ae),W=l(ae,"LI",{});var ya=s(W);Ge=l(ya,"STRONG",{});var xn=s(Ge);pa=o(xn,"Encapsulation & consistency:"),xn.forEach(a),ma=o(ya,` One canonical definition of
        "empty/invalid" lives in the class, preventing ad-hoc checks that drift over
        time.`),ya.forEach(a),ae.forEach(a),i.forEach(a),va=d(u),J=l(u,"DIV",{class:!0});var Dn=s(J);K=l(Dn,"P",{class:!0});var kn=s(K);Ea=o(kn,"Questions or feedback? Feel free to reach out!"),kn.forEach(a),Dn.forEach(a),u.forEach(a),this.h()},h(){g(q,"href","/python"),g(q,"class","text-blue-600 hover:underline text-sm"),g(Q,"class","mb-8"),g(Y,"class","text-3xl font-bold mb-4"),g(Z,"class","text-sm text-neutral-500 mb-8"),g(M,"class","text-lg text-neutral-700 mb-8 leading-relaxed"),g(x,"class","language-python"),g(k,"class","language-python"),g(c,"class","prose prose-neutral max-w-none"),g(K,"class","text-sm text-neutral-500"),g(J,"class","border-t pt-8 mt-12"),g(h,"class","layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b")},m(f,u){Sn(p,f,u),On(f,F,u),On(f,h,u),e(h,Q),e(Q,q),e(q,Ke),e(h,Xe),e(h,Y),e(Y,et),e(h,tt),e(h,Z),e(Z,ot),e(h,at),e(h,M),e(M,nt),e(h,lt),e(h,c),e(c,ne),e(ne,st),e(c,ct),e(c,le),e(le,x),e(x,rt),e(x,dt),e(x,it),e(x,ht),e(x,_t),e(c,ut),e(c,w),e(w,ft),e(w,se),e(se,pt),e(w,mt),e(w,ce),e(ce,vt),e(w,Et),e(w,re),e(re,yt),e(w,bt),e(c,gt),e(c,N),e(N,T),e(T,wt),e(T,de),e(de,Ct),e(T,xt),e(T,ie),e(ie,Dt),e(N,kt),e(N,he),e(he,Ot),e(N,jt),e(N,_e),e(_e,Nt),e(c,Lt),e(c,ue),e(ue,Pt),e(c,It),e(c,m),e(m,E),e(E,St),e(E,fe),e(fe,At),e(E,Ft),e(E,pe),e(pe,Tt),e(E,Ut),e(E,me),e(me,$t),e(E,Bt),e(E,ve),e(ve,qt),e(m,Rt),e(m,y),e(y,Vt),e(y,Ee),e(Ee,Ht),e(y,zt),e(y,ye),e(ye,Gt),e(y,Qt),e(y,be),e(be,Yt),e(y,Zt),e(y,ge),e(ge,Mt),e(m,Wt),e(m,_),e(_,Jt),e(_,we),e(we,Kt),e(_,Xt),e(_,Ce),e(Ce,eo),e(_,to),e(_,R),e(R,oo),e(R,ao),e(R,no),e(_,lo),e(_,V),e(V,so),e(V,co),e(V,ro),e(_,io),e(_,H),e(H,ho),e(H,_o),e(H,uo),e(_,fo),e(_,xe),e(xe,po),e(m,mo),e(m,D),e(D,vo),e(D,De),e(De,Eo),e(D,yo),e(D,ke),e(ke,bo),e(D,go),e(D,Oe),e(Oe,wo),e(m,Co),e(m,je),e(je,xo),e(c,Do),e(c,C),e(C,ko),e(C,Ne),e(Ne,Oo),e(C,jo),e(C,Le),e(Le,No),e(C,Lo),e(C,Pe),e(Pe,Po),e(C,Io),e(c,So),e(c,b),e(b,Ie),e(Ie,Ao),e(b,Fo),e(b,Se),e(Se,To),e(b,Uo),e(b,Ae),e(Ae,$o),e(b,Bo),e(b,Fe),e(Fe,qo),e(b,Ro),e(c,Vo),e(c,L),e(L,Ho),e(L,Te),e(Te,zo),e(L,Go),e(L,Ue),e(Ue,Qo),e(L,Yo),e(c,Zo),e(c,$e),e($e,k),e(k,Mo),e(k,Wo),e(k,Jo),e(k,Ko),e(k,Xo),e(c,ea),e(c,Be),e(Be,ta),e(c,oa),e(c,P),e(P,U),e(U,qe),e(qe,aa),e(U,na),e(U,Re),e(Re,la),e(U,sa),e(P,ca),e(P,O),e(O,Ve),e(Ve,ra),e(O,da),e(O,He),e(He,ia),e(O,ha),e(O,ze),e(ze,_a),e(O,ua),e(P,fa),e(P,W),e(W,Ge),e(Ge,pa),e(W,ma),e(h,va),e(h,J),e(J,K),e(K,Ea),Ze=!0},p:An,i(f){Ze||(Fn(p.$$.fragment,f),Ze=!0)},o(f){Tn(p.$$.fragment,f),Ze=!1},d(f){Un(p,f),f&&a(F),f&&a(h)}}}function Rn(ba){return $n(async()=>{if(typeof window<"u"&&!window.Prism){const p=document.createElement("link");p.rel="stylesheet",p.href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css",document.head.appendChild(p);const F=document.createElement("script");F.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js",F.onload=()=>{const h=document.createElement("script");h.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js",h.onload=()=>{window.Prism.highlightAll()},document.head.appendChild(h)},document.head.appendChild(F)}}),[]}class zn extends jn{constructor(p){super(),Nn(this,p,Rn,qn,Ln,{})}}export{zn as default};
