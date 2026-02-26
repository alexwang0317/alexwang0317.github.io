import{S as xn,i as kn,s as On,y as Dn,a as d,k as n,q as t,z as jn,c as i,l,m as s,r as o,h as a,n as C,A as Nn,b as Cn,C as e,F as Ln,g as Pn,d as In,B as Sn,o as An}from"../chunks/index.dd6ea1d3.js";import{S as Fn}from"../chunks/Seo.4277da45.js";function Tn(ma){let p,F,h,Q,q,Je,Ke,Y,Xe,et,Z,tt,ot,c,ae,at,nt,ne,x,lt,Ea="{}",st,ct,ya="{",rt,dt,it,b,ht,le,_t,ut,se,ft,pt,ce,vt,mt,Et,N,T,yt,re,gt,bt,de,wt,Ct,ie,xt,kt,he,Ot,Dt,_e,jt,Nt,v,E,Lt,ue,Pt,It,fe,St,At,pe,Ft,Tt,ve,Ut,$t,y,Bt,me,qt,Rt,Ee,Ht,Vt,ye,zt,Gt,ge,Qt,Yt,_,Zt,be,Mt,Wt,we,Jt,Kt,R,ga="{",Xt,eo,ba="}",to,oo,H,wa="{",ao,no,Ca="}",lo,so,V,xa="{",co,ro,ka="}",io,ho,Ce,_o,uo,k,fo,xe,po,vo,ke,mo,Eo,Oe,yo,go,De,bo,wo,w,Co,je,xo,ko,Ne,Oo,Do,Le,jo,No,Lo,g,Pe,Po,Io,Ie,So,Ao,Se,Fo,To,Ae,Uo,$o,Bo,L,qo,Fe,Ro,Ho,Te,Vo,zo,Go,Ue,O,Qo,Oa="{}",Yo,Zo,Da="{",Mo,Wo,Jo,$e,Ko,Xo,P,U,Be,ea,ta,qe,oa,aa,na,D,Re,la,sa,He,ca,ra,Ve,da,ia,ha,M,ze,_a,ua,fa,W,J,pa,Ye;return p=new Fn({props:{title:"__bool__ - Alex Wang",description:"Understanding Python's __bool__ dunder method for truthiness evaluation"}}),{c(){Dn(p.$$.fragment),F=d(),h=n("article"),Q=n("div"),q=n("a"),Je=t("← Back to Python"),Ke=d(),Y=n("h1"),Xe=t("__bool__"),et=d(),Z=n("div"),tt=t(`Understanding Python's __bool__ dunder method for truthiness evaluation in
    custom classes. Learn how to make your objects work naturally with if
    statements and boolean operations.`),ot=d(),c=n("div"),ae=n("p"),at=t(`Let's say for example you are building a cache class and you want to
      operate on this cache class. However, you want to fetch some user from the
      cache, only if it's there, but you're having problems with this.`),nt=d(),ne=n("pre"),x=n("code"),lt=t(`class SimpleCache:
    def __init__(self):
        self._data = `),st=t(Ea),ct=t(`
    def set(self, key, value):
        self._data[key] = value
    def get(self, key, default=None):
        return self._data.get(key, default)
…

def fetch_user(cache, user_id):
    if not cache:  # natural, just like a dict or list
        print("Cache empty, querying DB...")
        data = `),rt=t(ya),dt=t(`\\"id\\": user_id, \\"name\\": \\"Alex\\"'}'}
        cache.set(user_id, data)
    else:
        print("Using cache")
    return cache.get(user_id)`),it=d(),b=n("p"),ht=t(`One core component of idiomatic python is evaluating truthfulness of
      objects in a Boolean way when using things like `),le=n("code"),_t=t("if"),ut=t(`,
      `),se=n("code"),ft=t("while"),pt=t(", and "),ce=n("code"),vt=t("not"),mt=t(`. For lots of existing types we
      see existing false groups:`),Et=d(),N=n("ul"),T=n("li"),yt=t("Constants such as "),re=n("code"),gt=t("None"),bt=t(" and "),de=n("code"),wt=t("False"),Ct=d(),ie=n("li"),xt=t("Zero of any type"),kt=d(),he=n("li"),Ot=t("Empty Sequence/collections"),Dt=d(),_e=n("p"),jt=t("As well as existing True objects like:"),Nt=d(),v=n("ul"),E=n("li"),Lt=t("Non-zero numbers: "),ue=n("code"),Pt=t("1"),It=t(", "),fe=n("code"),St=t("-2"),At=t(", "),pe=n("code"),Ft=t("0.5"),Tt=t(`,
        `),ve=n("code"),Ut=t("1+0j"),$t=d(),y=n("li"),Bt=t("Non-empty strings: "),me=n("code"),qt=t('"0"'),Rt=t(", "),Ee=n("code"),Ht=t('"False"'),Vt=t(`,
        `),ye=n("code"),zt=t('" "'),Gt=t(", "),ge=n("code"),Qt=t('"hello"'),Yt=d(),_=n("li"),Zt=t("Non-empty collections: "),be=n("code"),Mt=t("[0]"),Wt=t(", "),we=n("code"),Jt=t("(None,)"),Kt=t(`,
        `),R=n("code"),Xt=t(ga),eo=t("0"),to=t(ba),oo=t(", "),H=n("code"),ao=t(wa),no=t('\\"k\\": 1'),lo=t(Ca),so=t(`,
        `),V=n("code"),co=t(xa),ro=t("1"),io=t(ka),ho=t(", "),Ce=n("code"),_o=t("range(1)"),uo=d(),k=n("li"),fo=t("Non-empty bytes-like: "),xe=n("code"),po=t('b"\\x00"'),vo=t(`,
        `),ke=n("code"),mo=t('bytearray(b"\\x00")'),Eo=t(", "),Oe=n("code"),yo=t('memoryview(b"x")'),go=d(),De=n("li"),bo=t("Objects & callables"),wo=d(),w=n("p"),Co=t("For our custom object that we create, Python uses "),je=n("code"),xo=t("__bool__"),ko=t(`
      (or `),Ne=n("code"),Oo=t("__len__"),Do=t(" if "),Le=n("code"),jo=t("__bool__"),No=t(` doesn't exist) to determine
      object truthfulness.`),Lo=d(),g=n("p"),Pe=n("code"),Po=t("__bool__"),Io=t(` is a dunder (double underscore) which basically
      means it's a special function used to define your own python operations.
      Other examples include the widely used `),Ie=n("code"),So=t("__init__"),Ao=t(`,
      `),Se=n("code"),Fo=t("__len__"),To=t(", and "),Ae=n("code"),Uo=t("__str__"),$o=t(" or other operators."),Bo=d(),L=n("p"),qo=t("To use it, we want to return "),Fe=n("code"),Ro=t("True"),Ho=t(" or "),Te=n("code"),Vo=t("False"),zo=t(` based
      on if the instance of that class is should be empty or not a valid instance
      such as in the example that a cache has no data then:`),Go=d(),Ue=n("pre"),O=n("code"),Qo=t(`class SimpleCache:
    def __init__(self):
        self._data = `),Yo=t(Oa),Zo=t(`

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
        data = `),Mo=t(Da),Wo=t(`\\"id\\": user_id, \\"name\\": \\"Alex\\"'}'}
        cache.set(user_id, data)
    else:
        print("Using cache")

    return cache.get(user_id)`),Jo=d(),$e=n("h2"),Ko=t("Advantages of This Approach"),Xo=d(),P=n("ul"),U=n("li"),Be=n("strong"),ea=t("Readability:"),ta=t(" Conditions like "),qe=n("code"),oa=t("if not cache:"),aa=t(`
        are natural and concise when emptiness means "no useful state".`),na=d(),D=n("li"),Re=n("strong"),la=t("Simplified conditionals:"),sa=t(` You avoid sprinkling
        `),He=n("code"),ca=t("len(cache._data) == 0"),ra=t(`
        or `),Ve=n("code"),da=t("not cache._data"),ia=t(" throughout the codebase."),ha=d(),M=n("li"),ze=n("strong"),_a=t("Encapsulation & consistency:"),ua=t(` One canonical definition of
        "empty/invalid" lives in the class, preventing ad-hoc checks that drift over
        time.`),fa=d(),W=n("div"),J=n("p"),pa=t("Questions or feedback? Feel free to reach out!"),this.h()},l(u){jn(p.$$.fragment,u),F=i(u),h=l(u,"ARTICLE",{class:!0});var f=s(h);Q=l(f,"DIV",{class:!0});var ja=s(Q);q=l(ja,"A",{href:!0,class:!0});var Na=s(q);Je=o(Na,"← Back to Python"),Na.forEach(a),ja.forEach(a),Ke=i(f),Y=l(f,"H1",{class:!0});var La=s(Y);Xe=o(La,"__bool__"),La.forEach(a),et=i(f),Z=l(f,"DIV",{class:!0});var Pa=s(Z);tt=o(Pa,`Understanding Python's __bool__ dunder method for truthiness evaluation in
    custom classes. Learn how to make your objects work naturally with if
    statements and boolean operations.`),Pa.forEach(a),ot=i(f),c=l(f,"DIV",{class:!0});var r=s(c);ae=l(r,"P",{});var Ia=s(ae);at=o(Ia,`Let's say for example you are building a cache class and you want to
      operate on this cache class. However, you want to fetch some user from the
      cache, only if it's there, but you're having problems with this.`),Ia.forEach(a),nt=i(r),ne=l(r,"PRE",{});var Sa=s(ne);x=l(Sa,"CODE",{class:!0});var K=s(x);lt=o(K,`class SimpleCache:
    def __init__(self):
        self._data = `),st=o(K,Ea),ct=o(K,`
    def set(self, key, value):
        self._data[key] = value
    def get(self, key, default=None):
        return self._data.get(key, default)
…

def fetch_user(cache, user_id):
    if not cache:  # natural, just like a dict or list
        print("Cache empty, querying DB...")
        data = `),rt=o(K,ya),dt=o(K,`\\"id\\": user_id, \\"name\\": \\"Alex\\"'}'}
        cache.set(user_id, data)
    else:
        print("Using cache")
    return cache.get(user_id)`),K.forEach(a),Sa.forEach(a),it=i(r),b=l(r,"P",{});var $=s(b);ht=o($,`One core component of idiomatic python is evaluating truthfulness of
      objects in a Boolean way when using things like `),le=l($,"CODE",{});var Aa=s(le);_t=o(Aa,"if"),Aa.forEach(a),ut=o($,`,
      `),se=l($,"CODE",{});var Fa=s(se);ft=o(Fa,"while"),Fa.forEach(a),pt=o($,", and "),ce=l($,"CODE",{});var Ta=s(ce);vt=o(Ta,"not"),Ta.forEach(a),mt=o($,`. For lots of existing types we
      see existing false groups:`),$.forEach(a),Et=i(r),N=l(r,"UL",{});var X=s(N);T=l(X,"LI",{});var Ge=s(T);yt=o(Ge,"Constants such as "),re=l(Ge,"CODE",{});var Ua=s(re);gt=o(Ua,"None"),Ua.forEach(a),bt=o(Ge," and "),de=l(Ge,"CODE",{});var $a=s(de);wt=o($a,"False"),$a.forEach(a),Ge.forEach(a),Ct=i(X),ie=l(X,"LI",{});var Ba=s(ie);xt=o(Ba,"Zero of any type"),Ba.forEach(a),kt=i(X),he=l(X,"LI",{});var qa=s(he);Ot=o(qa,"Empty Sequence/collections"),qa.forEach(a),X.forEach(a),Dt=i(r),_e=l(r,"P",{});var Ra=s(_e);jt=o(Ra,"As well as existing True objects like:"),Ra.forEach(a),Nt=i(r),v=l(r,"UL",{});var j=s(v);E=l(j,"LI",{});var I=s(E);Lt=o(I,"Non-zero numbers: "),ue=l(I,"CODE",{});var Ha=s(ue);Pt=o(Ha,"1"),Ha.forEach(a),It=o(I,", "),fe=l(I,"CODE",{});var Va=s(fe);St=o(Va,"-2"),Va.forEach(a),At=o(I,", "),pe=l(I,"CODE",{});var za=s(pe);Ft=o(za,"0.5"),za.forEach(a),Tt=o(I,`,
        `),ve=l(I,"CODE",{});var Ga=s(ve);Ut=o(Ga,"1+0j"),Ga.forEach(a),I.forEach(a),$t=i(j),y=l(j,"LI",{});var S=s(y);Bt=o(S,"Non-empty strings: "),me=l(S,"CODE",{});var Qa=s(me);qt=o(Qa,'"0"'),Qa.forEach(a),Rt=o(S,", "),Ee=l(S,"CODE",{});var Ya=s(Ee);Ht=o(Ya,'"False"'),Ya.forEach(a),Vt=o(S,`,
        `),ye=l(S,"CODE",{});var Za=s(ye);zt=o(Za,'" "'),Za.forEach(a),Gt=o(S,", "),ge=l(S,"CODE",{});var Ma=s(ge);Qt=o(Ma,'"hello"'),Ma.forEach(a),S.forEach(a),Yt=i(j),_=l(j,"LI",{});var m=s(_);Zt=o(m,"Non-empty collections: "),be=l(m,"CODE",{});var Wa=s(be);Mt=o(Wa,"[0]"),Wa.forEach(a),Wt=o(m,", "),we=l(m,"CODE",{});var Ja=s(we);Jt=o(Ja,"(None,)"),Ja.forEach(a),Kt=o(m,`,
        `),R=l(m,"CODE",{});var Ze=s(R);Xt=o(Ze,ga),eo=o(Ze,"0"),to=o(Ze,ba),Ze.forEach(a),oo=o(m,", "),H=l(m,"CODE",{});var Me=s(H);ao=o(Me,wa),no=o(Me,'\\"k\\": 1'),lo=o(Me,Ca),Me.forEach(a),so=o(m,`,
        `),V=l(m,"CODE",{});var We=s(V);co=o(We,xa),ro=o(We,"1"),io=o(We,ka),We.forEach(a),ho=o(m,", "),Ce=l(m,"CODE",{});var Ka=s(Ce);_o=o(Ka,"range(1)"),Ka.forEach(a),m.forEach(a),uo=i(j),k=l(j,"LI",{});var z=s(k);fo=o(z,"Non-empty bytes-like: "),xe=l(z,"CODE",{});var Xa=s(xe);po=o(Xa,'b"\\x00"'),Xa.forEach(a),vo=o(z,`,
        `),ke=l(z,"CODE",{});var en=s(ke);mo=o(en,'bytearray(b"\\x00")'),en.forEach(a),Eo=o(z,", "),Oe=l(z,"CODE",{});var tn=s(Oe);yo=o(tn,'memoryview(b"x")'),tn.forEach(a),z.forEach(a),go=i(j),De=l(j,"LI",{});var on=s(De);bo=o(on,"Objects & callables"),on.forEach(a),j.forEach(a),wo=i(r),w=l(r,"P",{});var B=s(w);Co=o(B,"For our custom object that we create, Python uses "),je=l(B,"CODE",{});var an=s(je);xo=o(an,"__bool__"),an.forEach(a),ko=o(B,`
      (or `),Ne=l(B,"CODE",{});var nn=s(Ne);Oo=o(nn,"__len__"),nn.forEach(a),Do=o(B," if "),Le=l(B,"CODE",{});var ln=s(Le);jo=o(ln,"__bool__"),ln.forEach(a),No=o(B,` doesn't exist) to determine
      object truthfulness.`),B.forEach(a),Lo=i(r),g=l(r,"P",{});var A=s(g);Pe=l(A,"CODE",{});var sn=s(Pe);Po=o(sn,"__bool__"),sn.forEach(a),Io=o(A,` is a dunder (double underscore) which basically
      means it's a special function used to define your own python operations.
      Other examples include the widely used `),Ie=l(A,"CODE",{});var cn=s(Ie);So=o(cn,"__init__"),cn.forEach(a),Ao=o(A,`,
      `),Se=l(A,"CODE",{});var rn=s(Se);Fo=o(rn,"__len__"),rn.forEach(a),To=o(A,", and "),Ae=l(A,"CODE",{});var dn=s(Ae);Uo=o(dn,"__str__"),dn.forEach(a),$o=o(A," or other operators."),A.forEach(a),Bo=i(r),L=l(r,"P",{});var ee=s(L);qo=o(ee,"To use it, we want to return "),Fe=l(ee,"CODE",{});var hn=s(Fe);Ro=o(hn,"True"),hn.forEach(a),Ho=o(ee," or "),Te=l(ee,"CODE",{});var _n=s(Te);Vo=o(_n,"False"),_n.forEach(a),zo=o(ee,` based
      on if the instance of that class is should be empty or not a valid instance
      such as in the example that a cache has no data then:`),ee.forEach(a),Go=i(r),Ue=l(r,"PRE",{});var un=s(Ue);O=l(un,"CODE",{class:!0});var te=s(O);Qo=o(te,`class SimpleCache:
    def __init__(self):
        self._data = `),Yo=o(te,Oa),Zo=o(te,`

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
        data = `),Mo=o(te,Da),Wo=o(te,`\\"id\\": user_id, \\"name\\": \\"Alex\\"'}'}
        cache.set(user_id, data)
    else:
        print("Using cache")

    return cache.get(user_id)`),te.forEach(a),un.forEach(a),Jo=i(r),$e=l(r,"H2",{});var fn=s($e);Ko=o(fn,"Advantages of This Approach"),fn.forEach(a),Xo=i(r),P=l(r,"UL",{});var oe=s(P);U=l(oe,"LI",{});var Qe=s(U);Be=l(Qe,"STRONG",{});var pn=s(Be);ea=o(pn,"Readability:"),pn.forEach(a),ta=o(Qe," Conditions like "),qe=l(Qe,"CODE",{});var vn=s(qe);oa=o(vn,"if not cache:"),vn.forEach(a),aa=o(Qe,`
        are natural and concise when emptiness means "no useful state".`),Qe.forEach(a),na=i(oe),D=l(oe,"LI",{});var G=s(D);Re=l(G,"STRONG",{});var mn=s(Re);la=o(mn,"Simplified conditionals:"),mn.forEach(a),sa=o(G,` You avoid sprinkling
        `),He=l(G,"CODE",{});var En=s(He);ca=o(En,"len(cache._data) == 0"),En.forEach(a),ra=o(G,`
        or `),Ve=l(G,"CODE",{});var yn=s(Ve);da=o(yn,"not cache._data"),yn.forEach(a),ia=o(G," throughout the codebase."),G.forEach(a),ha=i(oe),M=l(oe,"LI",{});var va=s(M);ze=l(va,"STRONG",{});var gn=s(ze);_a=o(gn,"Encapsulation & consistency:"),gn.forEach(a),ua=o(va,` One canonical definition of
        "empty/invalid" lives in the class, preventing ad-hoc checks that drift over
        time.`),va.forEach(a),oe.forEach(a),r.forEach(a),fa=i(f),W=l(f,"DIV",{class:!0});var bn=s(W);J=l(bn,"P",{class:!0});var wn=s(J);pa=o(wn,"Questions or feedback? Feel free to reach out!"),wn.forEach(a),bn.forEach(a),f.forEach(a),this.h()},h(){C(q,"href","/python"),C(q,"class","text-blue-600 hover:underline text-sm"),C(Q,"class","mb-8"),C(Y,"class","text-3xl font-bold mb-4"),C(Z,"class","text-lg text-neutral-700 mb-8 leading-relaxed"),C(x,"class","language-python"),C(O,"class","language-python"),C(c,"class","prose prose-neutral max-w-none"),C(J,"class","text-sm text-neutral-500"),C(W,"class","border-t pt-8 mt-12"),C(h,"class","layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b")},m(u,f){Nn(p,u,f),Cn(u,F,f),Cn(u,h,f),e(h,Q),e(Q,q),e(q,Je),e(h,Ke),e(h,Y),e(Y,Xe),e(h,et),e(h,Z),e(Z,tt),e(h,ot),e(h,c),e(c,ae),e(ae,at),e(c,nt),e(c,ne),e(ne,x),e(x,lt),e(x,st),e(x,ct),e(x,rt),e(x,dt),e(c,it),e(c,b),e(b,ht),e(b,le),e(le,_t),e(b,ut),e(b,se),e(se,ft),e(b,pt),e(b,ce),e(ce,vt),e(b,mt),e(c,Et),e(c,N),e(N,T),e(T,yt),e(T,re),e(re,gt),e(T,bt),e(T,de),e(de,wt),e(N,Ct),e(N,ie),e(ie,xt),e(N,kt),e(N,he),e(he,Ot),e(c,Dt),e(c,_e),e(_e,jt),e(c,Nt),e(c,v),e(v,E),e(E,Lt),e(E,ue),e(ue,Pt),e(E,It),e(E,fe),e(fe,St),e(E,At),e(E,pe),e(pe,Ft),e(E,Tt),e(E,ve),e(ve,Ut),e(v,$t),e(v,y),e(y,Bt),e(y,me),e(me,qt),e(y,Rt),e(y,Ee),e(Ee,Ht),e(y,Vt),e(y,ye),e(ye,zt),e(y,Gt),e(y,ge),e(ge,Qt),e(v,Yt),e(v,_),e(_,Zt),e(_,be),e(be,Mt),e(_,Wt),e(_,we),e(we,Jt),e(_,Kt),e(_,R),e(R,Xt),e(R,eo),e(R,to),e(_,oo),e(_,H),e(H,ao),e(H,no),e(H,lo),e(_,so),e(_,V),e(V,co),e(V,ro),e(V,io),e(_,ho),e(_,Ce),e(Ce,_o),e(v,uo),e(v,k),e(k,fo),e(k,xe),e(xe,po),e(k,vo),e(k,ke),e(ke,mo),e(k,Eo),e(k,Oe),e(Oe,yo),e(v,go),e(v,De),e(De,bo),e(c,wo),e(c,w),e(w,Co),e(w,je),e(je,xo),e(w,ko),e(w,Ne),e(Ne,Oo),e(w,Do),e(w,Le),e(Le,jo),e(w,No),e(c,Lo),e(c,g),e(g,Pe),e(Pe,Po),e(g,Io),e(g,Ie),e(Ie,So),e(g,Ao),e(g,Se),e(Se,Fo),e(g,To),e(g,Ae),e(Ae,Uo),e(g,$o),e(c,Bo),e(c,L),e(L,qo),e(L,Fe),e(Fe,Ro),e(L,Ho),e(L,Te),e(Te,Vo),e(L,zo),e(c,Go),e(c,Ue),e(Ue,O),e(O,Qo),e(O,Yo),e(O,Zo),e(O,Mo),e(O,Wo),e(c,Jo),e(c,$e),e($e,Ko),e(c,Xo),e(c,P),e(P,U),e(U,Be),e(Be,ea),e(U,ta),e(U,qe),e(qe,oa),e(U,aa),e(P,na),e(P,D),e(D,Re),e(Re,la),e(D,sa),e(D,He),e(He,ca),e(D,ra),e(D,Ve),e(Ve,da),e(D,ia),e(P,ha),e(P,M),e(M,ze),e(ze,_a),e(M,ua),e(h,fa),e(h,W),e(W,J),e(J,pa),Ye=!0},p:Ln,i(u){Ye||(Pn(p.$$.fragment,u),Ye=!0)},o(u){In(p.$$.fragment,u),Ye=!1},d(u){Sn(p,u),u&&a(F),u&&a(h)}}}function Un(ma){return An(async()=>{if(typeof window<"u"&&!window.Prism){const p=document.createElement("link");p.rel="stylesheet",p.href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css",document.head.appendChild(p);const F=document.createElement("script");F.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js",F.onload=()=>{const h=document.createElement("script");h.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js",h.onload=()=>{window.Prism.highlightAll()},document.head.appendChild(h)},document.head.appendChild(F)}}),[]}class qn extends xn{constructor(p){super(),kn(this,p,Un,Tn,On,{})}}export{qn as default};
