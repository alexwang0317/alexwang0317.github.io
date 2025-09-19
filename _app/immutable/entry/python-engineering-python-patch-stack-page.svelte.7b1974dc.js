import{S as ka,i as va,s as xa,y as ya,a as d,k as s,q as t,z as ba,c as _,l,m as o,r as a,h as n,n as g,A as Ea,b as ga,C as e,F as wa,g as Ca,d as Sa,B as Ma,o as Ta}from"../chunks/index.5437a47d.js";import{S as Ia}from"../chunks/Seo.81a06601.js";function Pa(Ft){let p,b,f,C,E,ce,ie,S,de,_e,M,fe,ue,T,me,he,r,N,pe,ge,k,B,ke,ve,U,xe,ye,V,be,Ee,W,we,Ce,H,Se,Me,G,Te,Ie,v,x,Pe,Q,Ae,De,X,Fe,Le,Oe,Y,je,qe,I,$e,z,Re,Ne,J,P,Be,Ue,K,Ve,We,y,A,Z,He,Ge,Qe,D,ee,Xe,Ye,ze,F,te,Je,Ke,Ze,ae,et,tt,w,at,ne,nt,st,lt,se,i,ot,Lt="{}",rt,ct,Ot="{",it,dt,jt="}",_t,ft,qt="{",ut,mt,$t="}",ht,pt,Rt="{",gt,kt,Nt="}",vt,xt,Bt="{",yt,bt,Ut="}",Et,wt,Ct,le,St,Mt,L,O,Tt,oe;return p=new Ia({props:{title:"Patch Stack - Alex Wang",description:"ExitStack-powered teardown for reliable tests"}}),{c(){ya(p.$$.fragment),b=d(),f=s("article"),C=s("div"),E=s("a"),ce=t("← Back to Python"),ie=d(),S=s("h1"),de=t("Patch Stack"),_e=d(),M=s("div"),fe=t("September 6, 2025 • 6 min read"),ue=d(),T=s("div"),me=t(`ExitStack-powered teardown for reliable tests when cramming several cases
    into one test method.`),he=d(),r=s("div"),N=s("p"),pe=t(`When you cram several cases into one test method (e.g., via a data
      provider), you get multiple problems:`),ge=d(),k=s("ul"),B=s("li"),ke=t("One flaky case can disable the whole method"),ve=d(),U=s("li"),xe=t("Failures are harder to pin down"),ye=d(),V=s("li"),be=t("Mock setup is duplicated or tangled"),Ee=d(),W=s("p"),we=t(`You should treat each method as a separate test, but to fix this cleanly
      you should split cases into separate methods while keeping them clean by
      deduplicating the mocking.`),Ce=d(),H=s("h2"),Se=t("The Solution: Context Manager for Mocking"),Me=d(),G=s("p"),Te=t(`To solve this, use a context manager for mocking. Create a small callable
      class that:`),Ie=d(),v=s("ul"),x=s("li"),Pe=t("Sets up all patches in "),Q=s("code"),Ae=t("__enter__"),De=t(`, stores the
        `),X=s("code"),Fe=t("MagicMock"),Le=t(" as attributes"),Oe=d(),Y=s("li"),je=t("Accepts arguments to tweak behavior per test"),qe=d(),I=s("li"),$e=t("Tears everything down in "),z=s("code"),Re=t("__exit__"),Ne=d(),J=s("pre"),P=s("code"),Be=t(`from unittest import TestCase
from unittest.mock import patch

class MyMockContext:
    def __init__(self, user_role="member", feature_on=False):
        self.user_role = user_role
        self.feature_on = feature_on

    def __enter__(self):
        self.p_role = patch("app.auth.get_role", return_value=self.user_role)
        self.m_role = self.p_role.start()
        
        self.p_feat = patch("app.features.is_enabled", return_value=self.feature_on)
        self.m_feat = self.p_feat.start()
        
        return self  # expose mocks if you want to assert calls

    def __exit__(self, exc_type, exc, tb):
        self.p_role.stop()
        self.p_feat.stop()

# Example function that uses the mocked dependencies
def do_the_thing():
    from app.auth import get_role
    from app.features import is_enabled
    
    role = get_role()
    if role == "admin" and is_enabled():
        return "admin-feature-enabled"
    elif role == "member":
        return "ok-for-member" 
    else:
        return "guest-access"

class MyServiceTests(TestCase):
    def test_member_default(self):
        with MyMockContext(user_role="member", feature_on=False):
            result = do_the_thing()
            self.assertEqual(result, "ok-for-member")
    
    def test_admin_with_feature(self):
        with MyMockContext(user_role="admin", feature_on=True):
            result = do_the_thing()
            self.assertEqual(result, "admin-feature-enabled")
    
    def test_guest_user(self):
        with MyMockContext(user_role="guest"):
            result = do_the_thing()
            self.assertEqual(result, "guest-access")`),Ue=d(),K=s("h2"),Ve=t("Benefits of This Approach"),We=d(),y=s("ul"),A=s("li"),Z=s("strong"),He=t("Isolation by design:"),Ge=t(` One case per method → TestX can quarantine
        just the flaky one. No data-provider "mega test" taking others down`),Qe=d(),D=s("li"),ee=s("strong"),Xe=t("Teardown you can't forget:"),Ye=t(` The context manager guarantees
        patches stop, preventing state leaks and flaky tests`),ze=d(),F=s("li"),te=s("strong"),Je=t("Refactor + Change friendly:"),Ke=t(` When mocking strategy changes,
        you edit one place; all tests inherit it. Smaller diffs, fewer mistakes`),Ze=d(),ae=s("h2"),et=t("Advanced Usage with ExitStack"),tt=d(),w=s("p"),at=t("For more complex scenarios with multiple patches, you can leverage "),ne=s("code"),nt=t("ExitStack"),st=t(" to manage them all:"),lt=d(),se=s("pre"),i=s("code"),ot=t(`from contextlib import ExitStack
from unittest.mock import patch

class AdvancedMockContext:
    def __init__(self, **kwargs):
        self.config = kwargs
        self.mocks = `),rt=t(Lt),ct=t(`
        
    def __enter__(self):
        self.stack = ExitStack()
        
        # Dynamically create patches based on config
        for key, value in self.config.items():
            if key.startswith('mock_'):
                target = key.replace('mock_', '').replace('_', '.')
                patcher = patch(f"app.`),it=t(Ot),dt=t("target"),_t=t(jt),ft=t(`", return_value=value)
                mock = self.stack.enter_context(patcher)
                self.mocks[key] = mock
                
        return self
        
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.stack.close()

class FlexibleServiceTests(TestCase):
    def test_complex_scenario(self):
        with AdvancedMockContext(
            mock_auth_get_user=`),ut=t(qt),mt=t('\\"id\\": 123, \\"role\\": \\"admin\\"'),ht=t($t),pt=t(`,
            mock_db_fetch_data=[`),gt=t(Rt),kt=t('\\"item\\": 1'),vt=t(Nt),xt=t(", "),yt=t(Bt),bt=t('\\"item\\": 2'),Et=t(Ut),wt=t(`],
            mock_cache_get=None
        ) as ctx:
            result = complex_operation()
            # Can access mocks via ctx.mocks if needed
            ctx.mocks['mock_auth_get_user'].assert_called_once()`),Ct=d(),le=s("p"),St=t(`This pattern ensures your tests remain maintainable, isolated, and
      reliable while reducing boilerplate and preventing common mocking
      pitfalls.`),Mt=d(),L=s("div"),O=s("p"),Tt=t("Questions or feedback? Feel free to reach out!"),this.h()},l(h){ba(p.$$.fragment,h),b=_(h),f=l(h,"ARTICLE",{class:!0});var m=o(f);C=l(m,"DIV",{class:!0});var Vt=o(C);E=l(Vt,"A",{href:!0,class:!0});var Wt=o(E);ce=a(Wt,"← Back to Python"),Wt.forEach(n),Vt.forEach(n),ie=_(m),S=l(m,"H1",{class:!0});var Ht=o(S);de=a(Ht,"Patch Stack"),Ht.forEach(n),_e=_(m),M=l(m,"DIV",{class:!0});var Gt=o(M);fe=a(Gt,"September 6, 2025 • 6 min read"),Gt.forEach(n),ue=_(m),T=l(m,"DIV",{class:!0});var Qt=o(T);me=a(Qt,`ExitStack-powered teardown for reliable tests when cramming several cases
    into one test method.`),Qt.forEach(n),he=_(m),r=l(m,"DIV",{class:!0});var c=o(r);N=l(c,"P",{});var Xt=o(N);pe=a(Xt,`When you cram several cases into one test method (e.g., via a data
      provider), you get multiple problems:`),Xt.forEach(n),ge=_(c),k=l(c,"UL",{});var j=o(k);B=l(j,"LI",{});var Yt=o(B);ke=a(Yt,"One flaky case can disable the whole method"),Yt.forEach(n),ve=_(j),U=l(j,"LI",{});var zt=o(U);xe=a(zt,"Failures are harder to pin down"),zt.forEach(n),ye=_(j),V=l(j,"LI",{});var Jt=o(V);be=a(Jt,"Mock setup is duplicated or tangled"),Jt.forEach(n),j.forEach(n),Ee=_(c),W=l(c,"P",{});var Kt=o(W);we=a(Kt,`You should treat each method as a separate test, but to fix this cleanly
      you should split cases into separate methods while keeping them clean by
      deduplicating the mocking.`),Kt.forEach(n),Ce=_(c),H=l(c,"H2",{});var Zt=o(H);Se=a(Zt,"The Solution: Context Manager for Mocking"),Zt.forEach(n),Me=_(c),G=l(c,"P",{});var ea=o(G);Te=a(ea,`To solve this, use a context manager for mocking. Create a small callable
      class that:`),ea.forEach(n),Ie=_(c),v=l(c,"UL",{});var q=o(v);x=l(q,"LI",{});var $=o(x);Pe=a($,"Sets up all patches in "),Q=l($,"CODE",{});var ta=o(Q);Ae=a(ta,"__enter__"),ta.forEach(n),De=a($,`, stores the
        `),X=l($,"CODE",{});var aa=o(X);Fe=a(aa,"MagicMock"),aa.forEach(n),Le=a($," as attributes"),$.forEach(n),Oe=_(q),Y=l(q,"LI",{});var na=o(Y);je=a(na,"Accepts arguments to tweak behavior per test"),na.forEach(n),qe=_(q),I=l(q,"LI",{});var It=o(I);$e=a(It,"Tears everything down in "),z=l(It,"CODE",{});var sa=o(z);Re=a(sa,"__exit__"),sa.forEach(n),It.forEach(n),q.forEach(n),Ne=_(c),J=l(c,"PRE",{});var la=o(J);P=l(la,"CODE",{class:!0});var oa=o(P);Be=a(oa,`from unittest import TestCase
from unittest.mock import patch

class MyMockContext:
    def __init__(self, user_role="member", feature_on=False):
        self.user_role = user_role
        self.feature_on = feature_on

    def __enter__(self):
        self.p_role = patch("app.auth.get_role", return_value=self.user_role)
        self.m_role = self.p_role.start()
        
        self.p_feat = patch("app.features.is_enabled", return_value=self.feature_on)
        self.m_feat = self.p_feat.start()
        
        return self  # expose mocks if you want to assert calls

    def __exit__(self, exc_type, exc, tb):
        self.p_role.stop()
        self.p_feat.stop()

# Example function that uses the mocked dependencies
def do_the_thing():
    from app.auth import get_role
    from app.features import is_enabled
    
    role = get_role()
    if role == "admin" and is_enabled():
        return "admin-feature-enabled"
    elif role == "member":
        return "ok-for-member" 
    else:
        return "guest-access"

class MyServiceTests(TestCase):
    def test_member_default(self):
        with MyMockContext(user_role="member", feature_on=False):
            result = do_the_thing()
            self.assertEqual(result, "ok-for-member")
    
    def test_admin_with_feature(self):
        with MyMockContext(user_role="admin", feature_on=True):
            result = do_the_thing()
            self.assertEqual(result, "admin-feature-enabled")
    
    def test_guest_user(self):
        with MyMockContext(user_role="guest"):
            result = do_the_thing()
            self.assertEqual(result, "guest-access")`),oa.forEach(n),la.forEach(n),Ue=_(c),K=l(c,"H2",{});var ra=o(K);Ve=a(ra,"Benefits of This Approach"),ra.forEach(n),We=_(c),y=l(c,"UL",{});var R=o(y);A=l(R,"LI",{});var Pt=o(A);Z=l(Pt,"STRONG",{});var ca=o(Z);He=a(ca,"Isolation by design:"),ca.forEach(n),Ge=a(Pt,` One case per method → TestX can quarantine
        just the flaky one. No data-provider "mega test" taking others down`),Pt.forEach(n),Qe=_(R),D=l(R,"LI",{});var At=o(D);ee=l(At,"STRONG",{});var ia=o(ee);Xe=a(ia,"Teardown you can't forget:"),ia.forEach(n),Ye=a(At,` The context manager guarantees
        patches stop, preventing state leaks and flaky tests`),At.forEach(n),ze=_(R),F=l(R,"LI",{});var Dt=o(F);te=l(Dt,"STRONG",{});var da=o(te);Je=a(da,"Refactor + Change friendly:"),da.forEach(n),Ke=a(Dt,` When mocking strategy changes,
        you edit one place; all tests inherit it. Smaller diffs, fewer mistakes`),Dt.forEach(n),R.forEach(n),Ze=_(c),ae=l(c,"H2",{});var _a=o(ae);et=a(_a,"Advanced Usage with ExitStack"),_a.forEach(n),tt=_(c),w=l(c,"P",{});var re=o(w);at=a(re,"For more complex scenarios with multiple patches, you can leverage "),ne=l(re,"CODE",{});var fa=o(ne);nt=a(fa,"ExitStack"),fa.forEach(n),st=a(re," to manage them all:"),re.forEach(n),lt=_(c),se=l(c,"PRE",{});var ua=o(se);i=l(ua,"CODE",{class:!0});var u=o(i);ot=a(u,`from contextlib import ExitStack
from unittest.mock import patch

class AdvancedMockContext:
    def __init__(self, **kwargs):
        self.config = kwargs
        self.mocks = `),rt=a(u,Lt),ct=a(u,`
        
    def __enter__(self):
        self.stack = ExitStack()
        
        # Dynamically create patches based on config
        for key, value in self.config.items():
            if key.startswith('mock_'):
                target = key.replace('mock_', '').replace('_', '.')
                patcher = patch(f"app.`),it=a(u,Ot),dt=a(u,"target"),_t=a(u,jt),ft=a(u,`", return_value=value)
                mock = self.stack.enter_context(patcher)
                self.mocks[key] = mock
                
        return self
        
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.stack.close()

class FlexibleServiceTests(TestCase):
    def test_complex_scenario(self):
        with AdvancedMockContext(
            mock_auth_get_user=`),ut=a(u,qt),mt=a(u,'\\"id\\": 123, \\"role\\": \\"admin\\"'),ht=a(u,$t),pt=a(u,`,
            mock_db_fetch_data=[`),gt=a(u,Rt),kt=a(u,'\\"item\\": 1'),vt=a(u,Nt),xt=a(u,", "),yt=a(u,Bt),bt=a(u,'\\"item\\": 2'),Et=a(u,Ut),wt=a(u,`],
            mock_cache_get=None
        ) as ctx:
            result = complex_operation()
            # Can access mocks via ctx.mocks if needed
            ctx.mocks['mock_auth_get_user'].assert_called_once()`),u.forEach(n),ua.forEach(n),Ct=_(c),le=l(c,"P",{});var ma=o(le);St=a(ma,`This pattern ensures your tests remain maintainable, isolated, and
      reliable while reducing boilerplate and preventing common mocking
      pitfalls.`),ma.forEach(n),c.forEach(n),Mt=_(m),L=l(m,"DIV",{class:!0});var ha=o(L);O=l(ha,"P",{class:!0});var pa=o(O);Tt=a(pa,"Questions or feedback? Feel free to reach out!"),pa.forEach(n),ha.forEach(n),m.forEach(n),this.h()},h(){g(E,"href","/python"),g(E,"class","text-blue-600 hover:underline text-sm"),g(C,"class","mb-8"),g(S,"class","text-3xl font-bold mb-4"),g(M,"class","text-sm text-neutral-500 mb-8"),g(T,"class","text-lg text-neutral-700 mb-8 leading-relaxed"),g(P,"class","language-python"),g(i,"class","language-python"),g(r,"class","prose prose-neutral max-w-none"),g(O,"class","text-sm text-neutral-500"),g(L,"class","border-t pt-8 mt-12"),g(f,"class","layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b")},m(h,m){Ea(p,h,m),ga(h,b,m),ga(h,f,m),e(f,C),e(C,E),e(E,ce),e(f,ie),e(f,S),e(S,de),e(f,_e),e(f,M),e(M,fe),e(f,ue),e(f,T),e(T,me),e(f,he),e(f,r),e(r,N),e(N,pe),e(r,ge),e(r,k),e(k,B),e(B,ke),e(k,ve),e(k,U),e(U,xe),e(k,ye),e(k,V),e(V,be),e(r,Ee),e(r,W),e(W,we),e(r,Ce),e(r,H),e(H,Se),e(r,Me),e(r,G),e(G,Te),e(r,Ie),e(r,v),e(v,x),e(x,Pe),e(x,Q),e(Q,Ae),e(x,De),e(x,X),e(X,Fe),e(x,Le),e(v,Oe),e(v,Y),e(Y,je),e(v,qe),e(v,I),e(I,$e),e(I,z),e(z,Re),e(r,Ne),e(r,J),e(J,P),e(P,Be),e(r,Ue),e(r,K),e(K,Ve),e(r,We),e(r,y),e(y,A),e(A,Z),e(Z,He),e(A,Ge),e(y,Qe),e(y,D),e(D,ee),e(ee,Xe),e(D,Ye),e(y,ze),e(y,F),e(F,te),e(te,Je),e(F,Ke),e(r,Ze),e(r,ae),e(ae,et),e(r,tt),e(r,w),e(w,at),e(w,ne),e(ne,nt),e(w,st),e(r,lt),e(r,se),e(se,i),e(i,ot),e(i,rt),e(i,ct),e(i,it),e(i,dt),e(i,_t),e(i,ft),e(i,ut),e(i,mt),e(i,ht),e(i,pt),e(i,gt),e(i,kt),e(i,vt),e(i,xt),e(i,yt),e(i,bt),e(i,Et),e(i,wt),e(r,Ct),e(r,le),e(le,St),e(f,Mt),e(f,L),e(L,O),e(O,Tt),oe=!0},p:wa,i(h){oe||(Ca(p.$$.fragment,h),oe=!0)},o(h){Sa(p.$$.fragment,h),oe=!1},d(h){Ma(p,h),h&&n(b),h&&n(f)}}}function Aa(Ft){return Ta(async()=>{if(typeof window<"u"&&!window.Prism){const p=document.createElement("link");p.rel="stylesheet",p.href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css",document.head.appendChild(p);const b=document.createElement("script");b.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js",b.onload=()=>{const f=document.createElement("script");f.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js",f.onload=()=>{window.Prism.highlightAll()},document.head.appendChild(f)},document.head.appendChild(b)}}),[]}class La extends ka{constructor(p){super(),va(this,p,Aa,Pa,xa,{})}}export{La as default};
