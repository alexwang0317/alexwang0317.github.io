import{S as Vn,i as Hn,s as Qn,y as Wn,a as c,k as n,q as t,z as zn,c as _,l as a,m as l,r as o,h as r,n as p,A as Mn,b as Fn,C as e,F as Jn,g as Kn,d as Xn,B as Yn,o as Zn}from"../chunks/index.dd6ea1d3.js";import{S as ea}from"../chunks/Seo.4277da45.js";function ta(Tr){let u,T,i,U,G,it,ht,F,pt,ft,P,mt,oe,ut,Et,vt,s,V,re,gt,yt,bt,k,ne,It,Nt,ae,Ot,wt,Ct,le,j,Dt,se,xt,Rt,Tt,de,H,Pt,kt,ce,$,Lt,_e,St,Bt,Gt,ie,Q,jt,$t,he,qt,At,C,E,pe,Ut,Ft,fe,Vt,Ht,me,Qt,Wt,ue,zt,Mt,Ee,Jt,Kt,v,ve,Xt,Yt,ge,Zt,eo,ye,to,oo,be,ro,no,Ie,ao,lo,g,Ne,so,co,Oe,_o,io,we,ho,po,Ce,fo,mo,De,uo,Eo,D,vo,xe,go,yo,Re,bo,Io,No,y,f,Te,Oo,wo,Pe,Co,Do,ke,xo,Ro,Le,To,Po,Se,ko,Lo,So,L,Be,Bo,Go,Ge,jo,$o,qo,S,je,Ao,Uo,$e,Fo,Vo,Ho,x,qe,Qo,Wo,Ae,zo,Mo,Ue,Jo,Ko,R,Fe,Xo,Yo,Ve,Zo,er,He,tr,or,q,rr,Qe,nr,ar,lr,We,W,sr,dr,ze,cr,_r,Me,z,ir,hr,B,Je,pr,fr,Ke,mr,ur,Er,Xe,M,vr,gr,Ye,yr,br,Ze,J,Ir,Nr,A,Or,et,wr,Cr,Dr,K,X,xr,at;return u=new ea({props:{title:"NotImplemented - Python Engineering Notes",description:"Use NotImplemented constant for binary operations and method delegation"}}),{c(){Wn(u.$$.fragment),T=c(),i=n("article"),U=n("div"),G=n("a"),it=t("← Back to Python"),ht=c(),F=n("h1"),pt=t("NotImplemented"),ft=c(),P=n("div"),mt=t("Use the "),oe=n("code"),ut=t("NotImplemented"),Et=t(` constant for binary operations and method
    delegation to enable proper operator fallback behavior.`),vt=c(),s=n("div"),V=n("p"),re=n("code"),gt=t("NotImplemented"),yt=t(` is a built-in constant used for binary special
      methods to show that a specific type does not have an implementation. The purpose
      is to tell Python that "I'm not sure what to do with this other type—try the
      other operand's reflected method or fall back".`),bt=c(),k=n("p"),ne=n("strong"),It=t("Important:"),Nt=c(),ae=n("code"),Ot=t("NotImplementedError"),wt=t(` is an exception
      you raise to say that a method exists but has yet to be implemented. Don't
      confuse the two!`),Ct=c(),le=n("p"),j=n("strong"),Dt=t("Do not raise "),se=n("code"),xt=t("NotImplemented"),Rt=t(" as an error:"),Tt=c(),de=n("pre"),H=n("code"),Pt=t(`class Storage:
    def get(self, key):
        raise NotImplemented    # This is wrong!`),kt=c(),ce=n("p"),$=n("strong"),Lt=t("Do not call "),_e=n("code"),St=t("NotImplemented"),Bt=t("—it's not callable:"),Gt=c(),ie=n("pre"),Q=n("code"),jt=t(`>> NotImplemented()
TypeError: "NotImplementedType" object is not callable`),$t=c(),he=n("p"),qt=t(`Binary operators take two operands, with Python defining three different
      hooks:`),At=c(),C=n("ul"),E=n("li"),pe=n("strong"),Ut=t("Left:"),Ft=c(),fe=n("code"),Vt=t("__add__"),Ht=t(", "),me=n("code"),Qt=t("__sub__"),Wt=t(`,
        `),ue=n("code"),zt=t("__mul__"),Mt=t(", "),Ee=n("code"),Jt=t("__truediv__"),Kt=c(),v=n("li"),ve=n("strong"),Xt=t("Right/reflected:"),Yt=c(),ge=n("code"),Zt=t("__radd__"),eo=t(`,
        `),ye=n("code"),to=t("__rsub__"),oo=t(", "),be=n("code"),ro=t("__rmul__"),no=t(", "),Ie=n("code"),ao=t("__rtruediv__"),lo=c(),g=n("li"),Ne=n("strong"),so=t("In-place/augmented assignment:"),co=c(),Oe=n("code"),_o=t("__iadd__"),io=t(`,
        `),we=n("code"),ho=t("__isub__"),po=t(", "),Ce=n("code"),fo=t("__imul__"),mo=t(", "),De=n("code"),uo=t("__itruediv__"),Eo=c(),D=n("p"),vo=t("Python understands that "),xe=n("code"),go=t("NotImplemented"),yo=t(` is a special sentinel
      and follows this strategy for `),Re=n("code"),bo=t("a + b"),Io=t(":"),No=c(),y=n("ol"),f=n("li"),Te=n("strong"),Oo=t("Subclass check:"),wo=t(" If "),Pe=n("code"),Co=t("type(b)"),Do=t(` is a strict
        subclass of `),ke=n("code"),xo=t("type(a)"),Ro=t(" and defines "),Le=n("code"),To=t("__radd__"),Po=t(`, call
        `),Se=n("code"),ko=t("b.__radd__(a)"),Lo=t(" first"),So=c(),L=n("li"),Be=n("strong"),Bo=t("Left side:"),Go=t(" Call "),Ge=n("code"),jo=t("a.__add__(b)"),$o=t(` first (if not
        handled above)`),qo=c(),S=n("li"),je=n("strong"),Ao=t("Check result:"),Uo=t(` If it returns anything except
        `),$e=n("code"),Fo=t("NotImplemented"),Vo=t(", we stop"),Ho=c(),x=n("li"),qe=n("strong"),Qo=t("Right side fallback:"),Wo=t(` If it returns
        `),Ae=n("code"),zo=t("NotImplemented"),Mo=t(", try "),Ue=n("code"),Jo=t("b.__radd__(a)"),Ko=c(),R=n("li"),Fe=n("strong"),Xo=t("TypeError:"),Yo=t(` If both sides return
        `),Ve=n("code"),Zo=t("NotImplemented"),er=t(", raise "),He=n("code"),tr=t("TypeError"),or=c(),q=n("p"),rr=t("Here's an example of "),Qe=n("code"),nr=t("NotImplemented"),ar=t(" being used for binary operators:"),lr=c(),We=n("pre"),W=n("code"),sr=t(`class Left:
    def __add__(self, other):  # left side can't handle it
        return NotImplemented

class Right:
    def __radd__(self, other):  # right side handles the reversed op
        return "Right handled it"

print(Left() + Right())  # works because NotImplemented allowed the call for __radd__`),dr=c(),ze=n("p"),cr=t("For a more complex example showing the full fallback chain:"),_r=c(),Me=n("pre"),z=n("code"),ir=t(`class L:
    def __iadd__(self, other): 
        print("iadd")
        return NotImplemented
    def __add__(self, other):  
        print("add")
        return NotImplemented

class R:
    def __radd__(self, other): 
        print("radd")
        return "handled"

x = L()
x += R()   # prints: iadd -> add -> radd`),hr=c(),B=n("p"),Je=n("code"),pr=t("NotImplemented"),fr=t(` also works with rich comparisons. These are
      "rich" compared to the old single `),Ke=n("code"),mr=t("__cmp__"),ur=t(" from Python 2:"),Er=c(),Xe=n("pre"),M=n("code"),vr=t(`class L:
    def __lt__(self, other):  # can't compare
        return NotImplemented

class R:
    def __gt__(self, other):  # handles reversed "<"
        return True

print(L() < R())  # True (via R.__gt__)`),gr=c(),Ye=n("p"),yr=t("When both sides can handle the operation, the first successful one wins:"),br=c(),Ze=n("pre"),J=n("code"),Ir=t(`class A:
    def __eq__(self, other):
        return NotImplemented

class B:
    def __eq__(self, other):
        return True

print(A() == B())  # True (via B.__eq__)`),Nr=c(),A=n("p"),Or=t("Use "),et=n("code"),wr=t("NotImplemented"),Cr=t(` when your class doesn't know how to handle
      a specific operation with another type. This allows Python to try alternative
      approaches rather than immediately failing, enabling more flexible and extensible
      operator behavior.`),Dr=c(),K=n("div"),X=n("p"),xr=t("Questions or feedback? Feel free to reach out!"),this.h()},l(h){zn(u.$$.fragment,h),T=_(h),i=a(h,"ARTICLE",{class:!0});var m=l(i);U=a(m,"DIV",{class:!0});var Pr=l(U);G=a(Pr,"A",{href:!0,class:!0});var kr=l(G);it=o(kr,"← Back to Python"),kr.forEach(r),Pr.forEach(r),ht=_(m),F=a(m,"H1",{class:!0});var Lr=l(F);pt=o(Lr,"NotImplemented"),Lr.forEach(r),ft=_(m),P=a(m,"DIV",{class:!0});var lt=l(P);mt=o(lt,"Use the "),oe=a(lt,"CODE",{});var Sr=l(oe);ut=o(Sr,"NotImplemented"),Sr.forEach(r),Et=o(lt,` constant for binary operations and method
    delegation to enable proper operator fallback behavior.`),lt.forEach(r),vt=_(m),s=a(m,"DIV",{class:!0});var d=l(s);V=a(d,"P",{});var Rr=l(V);re=a(Rr,"CODE",{});var Br=l(re);gt=o(Br,"NotImplemented"),Br.forEach(r),yt=o(Rr,` is a built-in constant used for binary special
      methods to show that a specific type does not have an implementation. The purpose
      is to tell Python that "I'm not sure what to do with this other type—try the
      other operand's reflected method or fall back".`),Rr.forEach(r),bt=_(d),k=a(d,"P",{});var tt=l(k);ne=a(tt,"STRONG",{});var Gr=l(ne);It=o(Gr,"Important:"),Gr.forEach(r),Nt=_(tt),ae=a(tt,"CODE",{});var jr=l(ae);Ot=o(jr,"NotImplementedError"),jr.forEach(r),wt=o(tt,` is an exception
      you raise to say that a method exists but has yet to be implemented. Don't
      confuse the two!`),tt.forEach(r),Ct=_(d),le=a(d,"P",{});var $r=l(le);j=a($r,"STRONG",{});var st=l(j);Dt=o(st,"Do not raise "),se=a(st,"CODE",{});var qr=l(se);xt=o(qr,"NotImplemented"),qr.forEach(r),Rt=o(st," as an error:"),st.forEach(r),$r.forEach(r),Tt=_(d),de=a(d,"PRE",{});var Ar=l(de);H=a(Ar,"CODE",{class:!0});var Ur=l(H);Pt=o(Ur,`class Storage:
    def get(self, key):
        raise NotImplemented    # This is wrong!`),Ur.forEach(r),Ar.forEach(r),kt=_(d),ce=a(d,"P",{});var Fr=l(ce);$=a(Fr,"STRONG",{});var dt=l($);Lt=o(dt,"Do not call "),_e=a(dt,"CODE",{});var Vr=l(_e);St=o(Vr,"NotImplemented"),Vr.forEach(r),Bt=o(dt,"—it's not callable:"),dt.forEach(r),Fr.forEach(r),Gt=_(d),ie=a(d,"PRE",{});var Hr=l(ie);Q=a(Hr,"CODE",{class:!0});var Qr=l(Q);jt=o(Qr,`>> NotImplemented()
TypeError: "NotImplementedType" object is not callable`),Qr.forEach(r),Hr.forEach(r),$t=_(d),he=a(d,"P",{});var Wr=l(he);qt=o(Wr,`Binary operators take two operands, with Python defining three different
      hooks:`),Wr.forEach(r),At=_(d),C=a(d,"UL",{});var Y=l(C);E=a(Y,"LI",{});var I=l(E);pe=a(I,"STRONG",{});var zr=l(pe);Ut=o(zr,"Left:"),zr.forEach(r),Ft=_(I),fe=a(I,"CODE",{});var Mr=l(fe);Vt=o(Mr,"__add__"),Mr.forEach(r),Ht=o(I,", "),me=a(I,"CODE",{});var Jr=l(me);Qt=o(Jr,"__sub__"),Jr.forEach(r),Wt=o(I,`,
        `),ue=a(I,"CODE",{});var Kr=l(ue);zt=o(Kr,"__mul__"),Kr.forEach(r),Mt=o(I,", "),Ee=a(I,"CODE",{});var Xr=l(Ee);Jt=o(Xr,"__truediv__"),Xr.forEach(r),I.forEach(r),Kt=_(Y),v=a(Y,"LI",{});var N=l(v);ve=a(N,"STRONG",{});var Yr=l(ve);Xt=o(Yr,"Right/reflected:"),Yr.forEach(r),Yt=_(N),ge=a(N,"CODE",{});var Zr=l(ge);Zt=o(Zr,"__radd__"),Zr.forEach(r),eo=o(N,`,
        `),ye=a(N,"CODE",{});var en=l(ye);to=o(en,"__rsub__"),en.forEach(r),oo=o(N,", "),be=a(N,"CODE",{});var tn=l(be);ro=o(tn,"__rmul__"),tn.forEach(r),no=o(N,", "),Ie=a(N,"CODE",{});var on=l(Ie);ao=o(on,"__rtruediv__"),on.forEach(r),N.forEach(r),lo=_(Y),g=a(Y,"LI",{});var O=l(g);Ne=a(O,"STRONG",{});var rn=l(Ne);so=o(rn,"In-place/augmented assignment:"),rn.forEach(r),co=_(O),Oe=a(O,"CODE",{});var nn=l(Oe);_o=o(nn,"__iadd__"),nn.forEach(r),io=o(O,`,
        `),we=a(O,"CODE",{});var an=l(we);ho=o(an,"__isub__"),an.forEach(r),po=o(O,", "),Ce=a(O,"CODE",{});var ln=l(Ce);fo=o(ln,"__imul__"),ln.forEach(r),mo=o(O,", "),De=a(O,"CODE",{});var sn=l(De);uo=o(sn,"__itruediv__"),sn.forEach(r),O.forEach(r),Y.forEach(r),Eo=_(d),D=a(d,"P",{});var Z=l(D);vo=o(Z,"Python understands that "),xe=a(Z,"CODE",{});var dn=l(xe);go=o(dn,"NotImplemented"),dn.forEach(r),yo=o(Z,` is a special sentinel
      and follows this strategy for `),Re=a(Z,"CODE",{});var cn=l(Re);bo=o(cn,"a + b"),cn.forEach(r),Io=o(Z,":"),Z.forEach(r),No=_(d),y=a(d,"OL",{});var w=l(y);f=a(w,"LI",{});var b=l(f);Te=a(b,"STRONG",{});var _n=l(Te);Oo=o(_n,"Subclass check:"),_n.forEach(r),wo=o(b," If "),Pe=a(b,"CODE",{});var hn=l(Pe);Co=o(hn,"type(b)"),hn.forEach(r),Do=o(b,` is a strict
        subclass of `),ke=a(b,"CODE",{});var pn=l(ke);xo=o(pn,"type(a)"),pn.forEach(r),Ro=o(b," and defines "),Le=a(b,"CODE",{});var fn=l(Le);To=o(fn,"__radd__"),fn.forEach(r),Po=o(b,`, call
        `),Se=a(b,"CODE",{});var mn=l(Se);ko=o(mn,"b.__radd__(a)"),mn.forEach(r),Lo=o(b," first"),b.forEach(r),So=_(w),L=a(w,"LI",{});var ot=l(L);Be=a(ot,"STRONG",{});var un=l(Be);Bo=o(un,"Left side:"),un.forEach(r),Go=o(ot," Call "),Ge=a(ot,"CODE",{});var En=l(Ge);jo=o(En,"a.__add__(b)"),En.forEach(r),$o=o(ot,` first (if not
        handled above)`),ot.forEach(r),qo=_(w),S=a(w,"LI",{});var rt=l(S);je=a(rt,"STRONG",{});var vn=l(je);Ao=o(vn,"Check result:"),vn.forEach(r),Uo=o(rt,` If it returns anything except
        `),$e=a(rt,"CODE",{});var gn=l($e);Fo=o(gn,"NotImplemented"),gn.forEach(r),Vo=o(rt,", we stop"),rt.forEach(r),Ho=_(w),x=a(w,"LI",{});var ee=l(x);qe=a(ee,"STRONG",{});var yn=l(qe);Qo=o(yn,"Right side fallback:"),yn.forEach(r),Wo=o(ee,` If it returns
        `),Ae=a(ee,"CODE",{});var bn=l(Ae);zo=o(bn,"NotImplemented"),bn.forEach(r),Mo=o(ee,", try "),Ue=a(ee,"CODE",{});var In=l(Ue);Jo=o(In,"b.__radd__(a)"),In.forEach(r),ee.forEach(r),Ko=_(w),R=a(w,"LI",{});var te=l(R);Fe=a(te,"STRONG",{});var Nn=l(Fe);Xo=o(Nn,"TypeError:"),Nn.forEach(r),Yo=o(te,` If both sides return
        `),Ve=a(te,"CODE",{});var On=l(Ve);Zo=o(On,"NotImplemented"),On.forEach(r),er=o(te,", raise "),He=a(te,"CODE",{});var wn=l(He);tr=o(wn,"TypeError"),wn.forEach(r),te.forEach(r),w.forEach(r),or=_(d),q=a(d,"P",{});var ct=l(q);rr=o(ct,"Here's an example of "),Qe=a(ct,"CODE",{});var Cn=l(Qe);nr=o(Cn,"NotImplemented"),Cn.forEach(r),ar=o(ct," being used for binary operators:"),ct.forEach(r),lr=_(d),We=a(d,"PRE",{});var Dn=l(We);W=a(Dn,"CODE",{class:!0});var xn=l(W);sr=o(xn,`class Left:
    def __add__(self, other):  # left side can't handle it
        return NotImplemented

class Right:
    def __radd__(self, other):  # right side handles the reversed op
        return "Right handled it"

print(Left() + Right())  # works because NotImplemented allowed the call for __radd__`),xn.forEach(r),Dn.forEach(r),dr=_(d),ze=a(d,"P",{});var Rn=l(ze);cr=o(Rn,"For a more complex example showing the full fallback chain:"),Rn.forEach(r),_r=_(d),Me=a(d,"PRE",{});var Tn=l(Me);z=a(Tn,"CODE",{class:!0});var Pn=l(z);ir=o(Pn,`class L:
    def __iadd__(self, other): 
        print("iadd")
        return NotImplemented
    def __add__(self, other):  
        print("add")
        return NotImplemented

class R:
    def __radd__(self, other): 
        print("radd")
        return "handled"

x = L()
x += R()   # prints: iadd -> add -> radd`),Pn.forEach(r),Tn.forEach(r),hr=_(d),B=a(d,"P",{});var nt=l(B);Je=a(nt,"CODE",{});var kn=l(Je);pr=o(kn,"NotImplemented"),kn.forEach(r),fr=o(nt,` also works with rich comparisons. These are
      "rich" compared to the old single `),Ke=a(nt,"CODE",{});var Ln=l(Ke);mr=o(Ln,"__cmp__"),Ln.forEach(r),ur=o(nt," from Python 2:"),nt.forEach(r),Er=_(d),Xe=a(d,"PRE",{});var Sn=l(Xe);M=a(Sn,"CODE",{class:!0});var Bn=l(M);vr=o(Bn,`class L:
    def __lt__(self, other):  # can't compare
        return NotImplemented

class R:
    def __gt__(self, other):  # handles reversed "<"
        return True

print(L() < R())  # True (via R.__gt__)`),Bn.forEach(r),Sn.forEach(r),gr=_(d),Ye=a(d,"P",{});var Gn=l(Ye);yr=o(Gn,"When both sides can handle the operation, the first successful one wins:"),Gn.forEach(r),br=_(d),Ze=a(d,"PRE",{});var jn=l(Ze);J=a(jn,"CODE",{class:!0});var $n=l(J);Ir=o($n,`class A:
    def __eq__(self, other):
        return NotImplemented

class B:
    def __eq__(self, other):
        return True

print(A() == B())  # True (via B.__eq__)`),$n.forEach(r),jn.forEach(r),Nr=_(d),A=a(d,"P",{});var _t=l(A);Or=o(_t,"Use "),et=a(_t,"CODE",{});var qn=l(et);wr=o(qn,"NotImplemented"),qn.forEach(r),Cr=o(_t,` when your class doesn't know how to handle
      a specific operation with another type. This allows Python to try alternative
      approaches rather than immediately failing, enabling more flexible and extensible
      operator behavior.`),_t.forEach(r),d.forEach(r),Dr=_(m),K=a(m,"DIV",{class:!0});var An=l(K);X=a(An,"P",{class:!0});var Un=l(X);xr=o(Un,"Questions or feedback? Feel free to reach out!"),Un.forEach(r),An.forEach(r),m.forEach(r),this.h()},h(){p(G,"href","/python"),p(G,"class","text-blue-600 hover:underline text-sm"),p(U,"class","mb-8"),p(F,"class","text-3xl font-bold mb-4"),p(P,"class","text-lg text-neutral-700 mb-8 leading-relaxed"),p(H,"class","language-python"),p(Q,"class","language-python"),p(W,"class","language-python"),p(z,"class","language-python"),p(M,"class","language-python"),p(J,"class","language-python"),p(s,"class","prose prose-neutral max-w-none"),p(X,"class","text-sm text-neutral-500"),p(K,"class","border-t pt-8 mt-12"),p(i,"class","layout-md py-12 mx-auto max-w-3xl px-6 svelte-gmo5k4")},m(h,m){Mn(u,h,m),Fn(h,T,m),Fn(h,i,m),e(i,U),e(U,G),e(G,it),e(i,ht),e(i,F),e(F,pt),e(i,ft),e(i,P),e(P,mt),e(P,oe),e(oe,ut),e(P,Et),e(i,vt),e(i,s),e(s,V),e(V,re),e(re,gt),e(V,yt),e(s,bt),e(s,k),e(k,ne),e(ne,It),e(k,Nt),e(k,ae),e(ae,Ot),e(k,wt),e(s,Ct),e(s,le),e(le,j),e(j,Dt),e(j,se),e(se,xt),e(j,Rt),e(s,Tt),e(s,de),e(de,H),e(H,Pt),e(s,kt),e(s,ce),e(ce,$),e($,Lt),e($,_e),e(_e,St),e($,Bt),e(s,Gt),e(s,ie),e(ie,Q),e(Q,jt),e(s,$t),e(s,he),e(he,qt),e(s,At),e(s,C),e(C,E),e(E,pe),e(pe,Ut),e(E,Ft),e(E,fe),e(fe,Vt),e(E,Ht),e(E,me),e(me,Qt),e(E,Wt),e(E,ue),e(ue,zt),e(E,Mt),e(E,Ee),e(Ee,Jt),e(C,Kt),e(C,v),e(v,ve),e(ve,Xt),e(v,Yt),e(v,ge),e(ge,Zt),e(v,eo),e(v,ye),e(ye,to),e(v,oo),e(v,be),e(be,ro),e(v,no),e(v,Ie),e(Ie,ao),e(C,lo),e(C,g),e(g,Ne),e(Ne,so),e(g,co),e(g,Oe),e(Oe,_o),e(g,io),e(g,we),e(we,ho),e(g,po),e(g,Ce),e(Ce,fo),e(g,mo),e(g,De),e(De,uo),e(s,Eo),e(s,D),e(D,vo),e(D,xe),e(xe,go),e(D,yo),e(D,Re),e(Re,bo),e(D,Io),e(s,No),e(s,y),e(y,f),e(f,Te),e(Te,Oo),e(f,wo),e(f,Pe),e(Pe,Co),e(f,Do),e(f,ke),e(ke,xo),e(f,Ro),e(f,Le),e(Le,To),e(f,Po),e(f,Se),e(Se,ko),e(f,Lo),e(y,So),e(y,L),e(L,Be),e(Be,Bo),e(L,Go),e(L,Ge),e(Ge,jo),e(L,$o),e(y,qo),e(y,S),e(S,je),e(je,Ao),e(S,Uo),e(S,$e),e($e,Fo),e(S,Vo),e(y,Ho),e(y,x),e(x,qe),e(qe,Qo),e(x,Wo),e(x,Ae),e(Ae,zo),e(x,Mo),e(x,Ue),e(Ue,Jo),e(y,Ko),e(y,R),e(R,Fe),e(Fe,Xo),e(R,Yo),e(R,Ve),e(Ve,Zo),e(R,er),e(R,He),e(He,tr),e(s,or),e(s,q),e(q,rr),e(q,Qe),e(Qe,nr),e(q,ar),e(s,lr),e(s,We),e(We,W),e(W,sr),e(s,dr),e(s,ze),e(ze,cr),e(s,_r),e(s,Me),e(Me,z),e(z,ir),e(s,hr),e(s,B),e(B,Je),e(Je,pr),e(B,fr),e(B,Ke),e(Ke,mr),e(B,ur),e(s,Er),e(s,Xe),e(Xe,M),e(M,vr),e(s,gr),e(s,Ye),e(Ye,yr),e(s,br),e(s,Ze),e(Ze,J),e(J,Ir),e(s,Nr),e(s,A),e(A,Or),e(A,et),e(et,wr),e(A,Cr),e(i,Dr),e(i,K),e(K,X),e(X,xr),at=!0},p:Jn,i(h){at||(Kn(u.$$.fragment,h),at=!0)},o(h){Xn(u.$$.fragment,h),at=!1},d(h){Yn(u,h),h&&r(T),h&&r(i)}}}function oa(Tr){return Zn(async()=>{if(typeof window<"u"&&!window.Prism){const u=document.createElement("link");u.rel="stylesheet",u.href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css",document.head.appendChild(u);const T=document.createElement("script");T.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js",T.onload=()=>{const i=document.createElement("script");i.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js",i.onload=()=>{window.Prism.highlightAll()},document.head.appendChild(i)},document.head.appendChild(T)}}),[]}class aa extends Vn{constructor(u){super(),Hn(this,u,oa,ta,Qn,{})}}export{aa as default};
