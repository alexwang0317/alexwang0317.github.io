import{S as vt,i as bt,s as _t,y as Et,a as d,k as a,q as o,z as It,c as m,l as s,m as r,r as l,h as t,n as p,A as gt,b as yt,C as e,F as wt,g as Ot,d as xt,B as Ct,o as Ut}from"../chunks/index.5437a47d.js";import{S as Pt}from"../chunks/Seo.81a06601.js";function kt(Ve){let f,v,i,w,_,Y,Z,O,ee,te,x,ae,se,C,re,ne,n,T,oe,le,S,U,ce,ie,$,de,me,E,he,j,ue,pe,fe,L,P,ye,ve,I,be,R,_e,Ee,Ie,F,k,ge,we,g,Oe,M,xe,Ce,Ue,z,B,Pe,ke,H,Be,Ae,y,V,De,Te,q,Se,$e,Q,je,Le,W,Re,Fe,G,Me,ze,A,D,He,J;return f=new Pt({props:{title:"Interface Stubs - Alex Wang",description:"Resolve circular import issues using Python's Abstract Base Classes for cleaner module dependencies"}}),{c(){Et(f.$$.fragment),v=d(),i=a("article"),w=a("div"),_=a("a"),Y=o("← Back to Python"),Z=d(),O=a("h1"),ee=o("Interface Stubs"),te=d(),x=a("div"),ae=o("September 1, 2025 • 4 min read"),se=d(),C=a("div"),re=o(`Learn how to resolve circular import dependencies using Python's Abstract
    Base Classes (ABC). Create clean module boundaries with interface stubs that
    break dependency cycles while maintaining type safety.`),ne=d(),n=a("div"),T=a("p"),oe=o(`Imagine you are building two separate modules, but within each one you
      declare two different dataclasses as such:`),le=d(),S=a("pre"),U=a("code"),ce=o(`@dataclass
class Order:
    user: User
    item: str

@dataclass
class User:
    name: str
    
    def create_order(self, item: str) -> Order:
        return Order(self, item)`),ie=d(),$=a("p"),de=o(`However, the only problem is that, if these are in different modules,
      you'll have a circular import issue due to each class relying on
      definitions present in the other.`),me=d(),E=a("p"),he=o(`To resolve this, create interface stubs with abstract classes for the core
      data structures and then use them as type hints for the actual concrete
      class. For the above example, you may create a new file `),j=a("code"),ue=o("interface.py"),pe=o(" which contains this implementation:"),fe=d(),L=a("pre"),P=a("code"),ye=o(`import abc

class IOrder(metaclass=abc.ABCMeta):
    user: 'IUser'
    item: str

class IUser(metaclass=abc.ABCMeta):
    name: str
    
    @abc.abstractmethod
    def create_order(self, item: str) -> IOrder:
        ...`),ve=d(),I=a("p"),be=o(`Then you can have the actual concrete class implementations to use said
      interfaces to allow for modularization in separate files. First, define `),R=a("code"),_e=o("Order"),Ee=o(" as:"),Ie=d(),F=a("pre"),k=a("code"),ge=o(`from dataclasses import dataclass
from interface import IOrder, IUser

@dataclass
class Order(IOrder):
    user: IUser
    item: str`),we=d(),g=a("p"),Oe=o("Then define the "),M=a("code"),xe=o("User"),Ce=o(" in a separate file as such:"),Ue=d(),z=a("pre"),B=a("code"),Pe=o(`from dataclasses import dataclass
from interface import IUser, IOrder

@dataclass
class User(IUser):
    name: str
    
    def create_order(self, item: str) -> IOrder:
        return IOrder(self, item)`),ke=d(),H=a("p"),Be=o("Here are a list of benefits:"),Ae=d(),y=a("ul"),V=a("li"),De=o("Breaks circular dependencies"),Te=d(),q=a("li"),Se=o("Improves testability with mocking interfaces"),$e=d(),Q=a("li"),je=o("Reduces dependency bloat"),Le=d(),W=a("li"),Re=o("More clearly documented + modularized"),Fe=d(),G=a("p"),Me=o(`This pattern is particularly useful in larger codebases where you have
      complex relationships between modules. By defining abstract interfaces,
      you create a contract that both modules can depend on without directly
      importing each other. This makes your code more maintainable and easier to
      test, as you can mock the interfaces during unit testing.`),ze=d(),A=a("div"),D=a("p"),He=o("Questions or feedback? Feel free to reach out!"),this.h()},l(u){It(f.$$.fragment,u),v=m(u),i=s(u,"ARTICLE",{class:!0});var h=r(i);w=s(h,"DIV",{class:!0});var qe=r(w);_=s(qe,"A",{href:!0,class:!0});var Qe=r(_);Y=l(Qe,"← Back to Python"),Qe.forEach(t),qe.forEach(t),Z=m(h),O=s(h,"H1",{class:!0});var We=r(O);ee=l(We,"Interface Stubs"),We.forEach(t),te=m(h),x=s(h,"DIV",{class:!0});var Ge=r(x);ae=l(Ge,"September 1, 2025 • 4 min read"),Ge.forEach(t),se=m(h),C=s(h,"DIV",{class:!0});var Je=r(C);re=l(Je,`Learn how to resolve circular import dependencies using Python's Abstract
    Base Classes (ABC). Create clean module boundaries with interface stubs that
    break dependency cycles while maintaining type safety.`),Je.forEach(t),ne=m(h),n=s(h,"DIV",{class:!0});var c=r(n);T=s(c,"P",{});var Ke=r(T);oe=l(Ke,`Imagine you are building two separate modules, but within each one you
      declare two different dataclasses as such:`),Ke.forEach(t),le=m(c),S=s(c,"PRE",{});var Ne=r(S);U=s(Ne,"CODE",{class:!0});var Xe=r(U);ce=l(Xe,`@dataclass
class Order:
    user: User
    item: str

@dataclass
class User:
    name: str
    
    def create_order(self, item: str) -> Order:
        return Order(self, item)`),Xe.forEach(t),Ne.forEach(t),ie=m(c),$=s(c,"P",{});var Ye=r($);de=l(Ye,`However, the only problem is that, if these are in different modules,
      you'll have a circular import issue due to each class relying on
      definitions present in the other.`),Ye.forEach(t),me=m(c),E=s(c,"P",{});var K=r(E);he=l(K,`To resolve this, create interface stubs with abstract classes for the core
      data structures and then use them as type hints for the actual concrete
      class. For the above example, you may create a new file `),j=s(K,"CODE",{});var Ze=r(j);ue=l(Ze,"interface.py"),Ze.forEach(t),pe=l(K," which contains this implementation:"),K.forEach(t),fe=m(c),L=s(c,"PRE",{});var et=r(L);P=s(et,"CODE",{class:!0});var tt=r(P);ye=l(tt,`import abc

class IOrder(metaclass=abc.ABCMeta):
    user: 'IUser'
    item: str

class IUser(metaclass=abc.ABCMeta):
    name: str
    
    @abc.abstractmethod
    def create_order(self, item: str) -> IOrder:
        ...`),tt.forEach(t),et.forEach(t),ve=m(c),I=s(c,"P",{});var N=r(I);be=l(N,`Then you can have the actual concrete class implementations to use said
      interfaces to allow for modularization in separate files. First, define `),R=s(N,"CODE",{});var at=r(R);_e=l(at,"Order"),at.forEach(t),Ee=l(N," as:"),N.forEach(t),Ie=m(c),F=s(c,"PRE",{});var st=r(F);k=s(st,"CODE",{class:!0});var rt=r(k);ge=l(rt,`from dataclasses import dataclass
from interface import IOrder, IUser

@dataclass
class Order(IOrder):
    user: IUser
    item: str`),rt.forEach(t),st.forEach(t),we=m(c),g=s(c,"P",{});var X=r(g);Oe=l(X,"Then define the "),M=s(X,"CODE",{});var nt=r(M);xe=l(nt,"User"),nt.forEach(t),Ce=l(X," in a separate file as such:"),X.forEach(t),Ue=m(c),z=s(c,"PRE",{});var ot=r(z);B=s(ot,"CODE",{class:!0});var lt=r(B);Pe=l(lt,`from dataclasses import dataclass
from interface import IUser, IOrder

@dataclass
class User(IUser):
    name: str
    
    def create_order(self, item: str) -> IOrder:
        return IOrder(self, item)`),lt.forEach(t),ot.forEach(t),ke=m(c),H=s(c,"P",{});var ct=r(H);Be=l(ct,"Here are a list of benefits:"),ct.forEach(t),Ae=m(c),y=s(c,"UL",{});var b=r(y);V=s(b,"LI",{});var it=r(V);De=l(it,"Breaks circular dependencies"),it.forEach(t),Te=m(b),q=s(b,"LI",{});var dt=r(q);Se=l(dt,"Improves testability with mocking interfaces"),dt.forEach(t),$e=m(b),Q=s(b,"LI",{});var mt=r(Q);je=l(mt,"Reduces dependency bloat"),mt.forEach(t),Le=m(b),W=s(b,"LI",{});var ht=r(W);Re=l(ht,"More clearly documented + modularized"),ht.forEach(t),b.forEach(t),Fe=m(c),G=s(c,"P",{});var ut=r(G);Me=l(ut,`This pattern is particularly useful in larger codebases where you have
      complex relationships between modules. By defining abstract interfaces,
      you create a contract that both modules can depend on without directly
      importing each other. This makes your code more maintainable and easier to
      test, as you can mock the interfaces during unit testing.`),ut.forEach(t),c.forEach(t),ze=m(h),A=s(h,"DIV",{class:!0});var pt=r(A);D=s(pt,"P",{class:!0});var ft=r(D);He=l(ft,"Questions or feedback? Feel free to reach out!"),ft.forEach(t),pt.forEach(t),h.forEach(t),this.h()},h(){p(_,"href","/python"),p(_,"class","text-blue-600 hover:underline text-sm"),p(w,"class","mb-8"),p(O,"class","text-3xl font-bold mb-4"),p(x,"class","text-sm text-neutral-500 mb-8"),p(C,"class","text-lg text-neutral-700 mb-8 leading-relaxed"),p(U,"class","language-python"),p(P,"class","language-python"),p(k,"class","language-python"),p(B,"class","language-python"),p(n,"class","prose prose-neutral max-w-none"),p(D,"class","text-sm text-neutral-500"),p(A,"class","border-t pt-8 mt-12"),p(i,"class","layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b")},m(u,h){gt(f,u,h),yt(u,v,h),yt(u,i,h),e(i,w),e(w,_),e(_,Y),e(i,Z),e(i,O),e(O,ee),e(i,te),e(i,x),e(x,ae),e(i,se),e(i,C),e(C,re),e(i,ne),e(i,n),e(n,T),e(T,oe),e(n,le),e(n,S),e(S,U),e(U,ce),e(n,ie),e(n,$),e($,de),e(n,me),e(n,E),e(E,he),e(E,j),e(j,ue),e(E,pe),e(n,fe),e(n,L),e(L,P),e(P,ye),e(n,ve),e(n,I),e(I,be),e(I,R),e(R,_e),e(I,Ee),e(n,Ie),e(n,F),e(F,k),e(k,ge),e(n,we),e(n,g),e(g,Oe),e(g,M),e(M,xe),e(g,Ce),e(n,Ue),e(n,z),e(z,B),e(B,Pe),e(n,ke),e(n,H),e(H,Be),e(n,Ae),e(n,y),e(y,V),e(V,De),e(y,Te),e(y,q),e(q,Se),e(y,$e),e(y,Q),e(Q,je),e(y,Le),e(y,W),e(W,Re),e(n,Fe),e(n,G),e(G,Me),e(i,ze),e(i,A),e(A,D),e(D,He),J=!0},p:wt,i(u){J||(Ot(f.$$.fragment,u),J=!0)},o(u){xt(f.$$.fragment,u),J=!1},d(u){Ct(f,u),u&&t(v),u&&t(i)}}}function Bt(Ve){return Ut(async()=>{if(typeof window<"u"&&!window.Prism){const f=document.createElement("link");f.rel="stylesheet",f.href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css",document.head.appendChild(f);const v=document.createElement("script");v.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js",v.onload=()=>{const i=document.createElement("script");i.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js",i.onload=()=>{window.Prism.highlightAll()},document.head.appendChild(i)},document.head.appendChild(v)}}),[]}class Tt extends vt{constructor(f){super(),bt(this,f,Bt,kt,_t,{})}}export{Tt as default};
