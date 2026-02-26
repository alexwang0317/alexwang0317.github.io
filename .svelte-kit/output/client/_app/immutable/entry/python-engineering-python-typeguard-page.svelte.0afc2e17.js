import{S as Zt,i as en,s as tn,y as nn,a as d,k as a,q as n,z as sn,c as p,l as o,m as r,r as s,h as t,n as y,A as an,b as Yt,C as e,F as on,g as rn,d as ln,B as cn,o as dn}from"../chunks/index.dd6ea1d3.js";import{S as pn}from"../chunks/Seo.4277da45.js";function hn(wt){let _,b,l,I,x,de,pe,k,he,ue,G,fe,_e,D,ye,me,i,j,ve,V,ge,be,Ee,U,C,we,xe,u,je,q,Te,Ie,H,ke,Ge,M,De,Ce,Q,Pe,Oe,z,Se,Ne,Ae,g,Fe,W,Re,$e,J,Le,Be,Ve,K,P,Ue,qe,T,He,X,Me,Qe,ze,Y,O,We,Je,S,Z,Ke,Xe,Ye,N,Ze,ee,et,tt,v,A,te,nt,st,at,F,ne,ot,rt,it,R,se,lt,ct,dt,E,ae,pt,ht,oe,ut,ft,_t,$,L,yt,ie;return _=new pn({props:{title:"TypeGuard - Alex Wang",description:"Understanding Python's TypeGuard for type narrowing and better type safety"}}),{c(){nn(_.$$.fragment),b=d(),l=a("article"),I=a("div"),x=a("a"),de=n("← Back to Python"),pe=d(),k=a("h1"),he=n("TypeGuard"),ue=d(),G=a("div"),fe=n("August 27, 2025 • 7 min read"),_e=d(),D=a("div"),ye=n(`Understanding Python's TypeGuard for type narrowing and better type safety
    in data processing pipelines.`),me=d(),i=a("div"),j=a("p"),ve=n(`Imagine you are writing a data pipeline, one function is for processing a
      list of objects. If the list of objects are `),V=a("em"),ge=n("all"),be=n(` strings or integers
      then you have separate methods for resolving them, else you mark it as invalid
      and discard it. An initial reasonable solution is:`),Ee=d(),U=a("pre"),C=a("code"),we=n(`def process_str(data: list[str]) -> None:
    ...

def process_int(data: list[int]) -> None:
    ...

# Process data if its either a string or a integer
def process_data(data: list[object]) -> None:
    if all(isinstance(x, int) for x in data):
        process_int(data)
    elif all(isinstance(x, str) for x in data):
        process_str(data)
    else:
        print("Invalid data, neither str nor int")`),xe=d(),u=a("p"),je=n(`The problem is, this solution will still cause the typechecker to be
      unhappy as the inputs for both `),q=a("code"),Te=n("process_int"),Ie=n(` and
      `),H=a("code"),ke=n("process_str"),Ge=n(`
      will still be typed as `),M=a("code"),De=n("list[object]"),Ce=n(`. For mutable generics
      like list, subtypes are invariant, so `),Q=a("code"),Pe=n("list[int]"),Oe=n(` is not a
      subtype of `),z=a("code"),Se=n("list[object]"),Ne=n(`, thus invariance exists to protect
      the container.`),Ae=d(),g=a("p"),Fe=n("Instead use "),W=a("code"),Re=n("TypeGuard"),$e=n(`, which is a special typing construct
      which can narrow the type of the object through a function. Recommended to
      narrow the broadest scope of what the object could be, to the narrowest
      scope. In essence, return False if it's not the correct type so
      `),J=a("code"),Le=n("TypeGuard"),Be=n("s would look like this:"),Ve=d(),K=a("pre"),P=a("code"),Ue=n(`from typing import TypeGuard, Iterable

def is_list_of_ints(obj: Iterable[object]) -> TypeGuard[list[int]]:
    if not isinstance(obj, list):
        return False
    return all(isinstance(x, int) for x in obj)

def is_list_of_strs(obj: Iterable[object]) -> TypeGuard[list[str]]:
    if not isinstance(obj, list):
        return False
    return all(isinstance(x, str) for x in obj)`),qe=d(),T=a("p"),He=n("Now, given these "),X=a("code"),Me=n("TypeGuards"),Qe=n(` you can rewrite the above function
      as such:`),ze=d(),Y=a("pre"),O=a("code"),We=n(`# Process data if its either a string or a integer
def process_data(data: Iterable[object]) -> None:
    if is_list_of_ints(data):
        process_int(data)  # Type checker knows data is list[int] here!
    elif is_list_of_strs(data):
        process_str(data)  # Type checker knows data is list[str] here!
    else:
        print("Invalid data, neither str nor int")`),Je=d(),S=a("p"),Z=a("code"),Ke=n("TypeGuard"),Xe=n(` is also useful in checking for narrowing down typing
      to exceptions and validating against a TypeAlias.`),Ye=d(),N=a("h2"),Ze=n("Advantages of "),ee=a("code"),et=n("TypeGuard"),tt=d(),v=a("ul"),A=a("li"),te=a("strong"),nt=n("Type Safety:"),st=n(` Provides compile-time guarantees that runtime
        checks match type annotations`),at=d(),F=a("li"),ne=a("strong"),ot=n("Better IDE Support:"),rt=n(` IDEs can understand the narrowed types
        and provide accurate autocomplete`),it=d(),R=a("li"),se=a("strong"),lt=n("Cleaner Code:"),ct=n(` Separates type checking logic into reusable
        functions`),dt=d(),E=a("li"),ae=a("strong"),pt=n("Documentation:"),ht=d(),oe=a("code"),ut=n("TypeGuard"),ft=n(` functions clearly
        document what conditions narrow types`),_t=d(),$=a("div"),L=a("p"),yt=n("Questions or feedback? Feel free to reach out!"),this.h()},l(f){sn(_.$$.fragment,f),b=p(f),l=o(f,"ARTICLE",{class:!0});var h=r(l);I=o(h,"DIV",{class:!0});var xt=r(I);x=o(xt,"A",{href:!0,class:!0});var jt=r(x);de=s(jt,"← Back to Python"),jt.forEach(t),xt.forEach(t),pe=p(h),k=o(h,"H1",{class:!0});var Tt=r(k);he=s(Tt,"TypeGuard"),Tt.forEach(t),ue=p(h),G=o(h,"DIV",{class:!0});var It=r(G);fe=s(It,"August 27, 2025 • 7 min read"),It.forEach(t),_e=p(h),D=o(h,"DIV",{class:!0});var kt=r(D);ye=s(kt,`Understanding Python's TypeGuard for type narrowing and better type safety
    in data processing pipelines.`),kt.forEach(t),me=p(h),i=o(h,"DIV",{class:!0});var c=r(i);j=o(c,"P",{});var le=r(j);ve=s(le,`Imagine you are writing a data pipeline, one function is for processing a
      list of objects. If the list of objects are `),V=o(le,"EM",{});var Gt=r(V);ge=s(Gt,"all"),Gt.forEach(t),be=s(le,` strings or integers
      then you have separate methods for resolving them, else you mark it as invalid
      and discard it. An initial reasonable solution is:`),le.forEach(t),Ee=p(c),U=o(c,"PRE",{});var Dt=r(U);C=o(Dt,"CODE",{class:!0});var Ct=r(C);we=s(Ct,`def process_str(data: list[str]) -> None:
    ...

def process_int(data: list[int]) -> None:
    ...

# Process data if its either a string or a integer
def process_data(data: list[object]) -> None:
    if all(isinstance(x, int) for x in data):
        process_int(data)
    elif all(isinstance(x, str) for x in data):
        process_str(data)
    else:
        print("Invalid data, neither str nor int")`),Ct.forEach(t),Dt.forEach(t),xe=p(c),u=o(c,"P",{});var m=r(u);je=s(m,`The problem is, this solution will still cause the typechecker to be
      unhappy as the inputs for both `),q=o(m,"CODE",{});var Pt=r(q);Te=s(Pt,"process_int"),Pt.forEach(t),Ie=s(m,` and
      `),H=o(m,"CODE",{});var Ot=r(H);ke=s(Ot,"process_str"),Ot.forEach(t),Ge=s(m,`
      will still be typed as `),M=o(m,"CODE",{});var St=r(M);De=s(St,"list[object]"),St.forEach(t),Ce=s(m,`. For mutable generics
      like list, subtypes are invariant, so `),Q=o(m,"CODE",{});var Nt=r(Q);Pe=s(Nt,"list[int]"),Nt.forEach(t),Oe=s(m,` is not a
      subtype of `),z=o(m,"CODE",{});var At=r(z);Se=s(At,"list[object]"),At.forEach(t),Ne=s(m,`, thus invariance exists to protect
      the container.`),m.forEach(t),Ae=p(c),g=o(c,"P",{});var B=r(g);Fe=s(B,"Instead use "),W=o(B,"CODE",{});var Ft=r(W);Re=s(Ft,"TypeGuard"),Ft.forEach(t),$e=s(B,`, which is a special typing construct
      which can narrow the type of the object through a function. Recommended to
      narrow the broadest scope of what the object could be, to the narrowest
      scope. In essence, return False if it's not the correct type so
      `),J=o(B,"CODE",{});var Rt=r(J);Le=s(Rt,"TypeGuard"),Rt.forEach(t),Be=s(B,"s would look like this:"),B.forEach(t),Ve=p(c),K=o(c,"PRE",{});var $t=r(K);P=o($t,"CODE",{class:!0});var Lt=r(P);Ue=s(Lt,`from typing import TypeGuard, Iterable

def is_list_of_ints(obj: Iterable[object]) -> TypeGuard[list[int]]:
    if not isinstance(obj, list):
        return False
    return all(isinstance(x, int) for x in obj)

def is_list_of_strs(obj: Iterable[object]) -> TypeGuard[list[str]]:
    if not isinstance(obj, list):
        return False
    return all(isinstance(x, str) for x in obj)`),Lt.forEach(t),$t.forEach(t),qe=p(c),T=o(c,"P",{});var ce=r(T);He=s(ce,"Now, given these "),X=o(ce,"CODE",{});var Bt=r(X);Me=s(Bt,"TypeGuards"),Bt.forEach(t),Qe=s(ce,` you can rewrite the above function
      as such:`),ce.forEach(t),ze=p(c),Y=o(c,"PRE",{});var Vt=r(Y);O=o(Vt,"CODE",{class:!0});var Ut=r(O);We=s(Ut,`# Process data if its either a string or a integer
def process_data(data: Iterable[object]) -> None:
    if is_list_of_ints(data):
        process_int(data)  # Type checker knows data is list[int] here!
    elif is_list_of_strs(data):
        process_str(data)  # Type checker knows data is list[str] here!
    else:
        print("Invalid data, neither str nor int")`),Ut.forEach(t),Vt.forEach(t),Je=p(c),S=o(c,"P",{});var mt=r(S);Z=o(mt,"CODE",{});var qt=r(Z);Ke=s(qt,"TypeGuard"),qt.forEach(t),Xe=s(mt,` is also useful in checking for narrowing down typing
      to exceptions and validating against a TypeAlias.`),mt.forEach(t),Ye=p(c),N=o(c,"H2",{});var vt=r(N);Ze=s(vt,"Advantages of "),ee=o(vt,"CODE",{});var Ht=r(ee);et=s(Ht,"TypeGuard"),Ht.forEach(t),vt.forEach(t),tt=p(c),v=o(c,"UL",{});var w=r(v);A=o(w,"LI",{});var gt=r(A);te=o(gt,"STRONG",{});var Mt=r(te);nt=s(Mt,"Type Safety:"),Mt.forEach(t),st=s(gt,` Provides compile-time guarantees that runtime
        checks match type annotations`),gt.forEach(t),at=p(w),F=o(w,"LI",{});var bt=r(F);ne=o(bt,"STRONG",{});var Qt=r(ne);ot=s(Qt,"Better IDE Support:"),Qt.forEach(t),rt=s(bt,` IDEs can understand the narrowed types
        and provide accurate autocomplete`),bt.forEach(t),it=p(w),R=o(w,"LI",{});var Et=r(R);se=o(Et,"STRONG",{});var zt=r(se);lt=s(zt,"Cleaner Code:"),zt.forEach(t),ct=s(Et,` Separates type checking logic into reusable
        functions`),Et.forEach(t),dt=p(w),E=o(w,"LI",{});var re=r(E);ae=o(re,"STRONG",{});var Wt=r(ae);pt=s(Wt,"Documentation:"),Wt.forEach(t),ht=p(re),oe=o(re,"CODE",{});var Jt=r(oe);ut=s(Jt,"TypeGuard"),Jt.forEach(t),ft=s(re,` functions clearly
        document what conditions narrow types`),re.forEach(t),w.forEach(t),c.forEach(t),_t=p(h),$=o(h,"DIV",{class:!0});var Kt=r($);L=o(Kt,"P",{class:!0});var Xt=r(L);yt=s(Xt,"Questions or feedback? Feel free to reach out!"),Xt.forEach(t),Kt.forEach(t),h.forEach(t),this.h()},h(){y(x,"href","/python"),y(x,"class","text-blue-600 hover:underline text-sm"),y(I,"class","mb-8"),y(k,"class","text-3xl font-bold mb-4"),y(G,"class","text-sm text-neutral-500 mb-8"),y(D,"class","text-lg text-neutral-700 mb-8 leading-relaxed"),y(C,"class","language-python"),y(P,"class","language-python"),y(O,"class","language-python"),y(i,"class","prose prose-neutral max-w-none"),y(L,"class","text-sm text-neutral-500"),y($,"class","border-t pt-8 mt-12"),y(l,"class","layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b")},m(f,h){an(_,f,h),Yt(f,b,h),Yt(f,l,h),e(l,I),e(I,x),e(x,de),e(l,pe),e(l,k),e(k,he),e(l,ue),e(l,G),e(G,fe),e(l,_e),e(l,D),e(D,ye),e(l,me),e(l,i),e(i,j),e(j,ve),e(j,V),e(V,ge),e(j,be),e(i,Ee),e(i,U),e(U,C),e(C,we),e(i,xe),e(i,u),e(u,je),e(u,q),e(q,Te),e(u,Ie),e(u,H),e(H,ke),e(u,Ge),e(u,M),e(M,De),e(u,Ce),e(u,Q),e(Q,Pe),e(u,Oe),e(u,z),e(z,Se),e(u,Ne),e(i,Ae),e(i,g),e(g,Fe),e(g,W),e(W,Re),e(g,$e),e(g,J),e(J,Le),e(g,Be),e(i,Ve),e(i,K),e(K,P),e(P,Ue),e(i,qe),e(i,T),e(T,He),e(T,X),e(X,Me),e(T,Qe),e(i,ze),e(i,Y),e(Y,O),e(O,We),e(i,Je),e(i,S),e(S,Z),e(Z,Ke),e(S,Xe),e(i,Ye),e(i,N),e(N,Ze),e(N,ee),e(ee,et),e(i,tt),e(i,v),e(v,A),e(A,te),e(te,nt),e(A,st),e(v,at),e(v,F),e(F,ne),e(ne,ot),e(F,rt),e(v,it),e(v,R),e(R,se),e(se,lt),e(R,ct),e(v,dt),e(v,E),e(E,ae),e(ae,pt),e(E,ht),e(E,oe),e(oe,ut),e(E,ft),e(l,_t),e(l,$),e($,L),e(L,yt),ie=!0},p:on,i(f){ie||(rn(_.$$.fragment,f),ie=!0)},o(f){ln(_.$$.fragment,f),ie=!1},d(f){cn(_,f),f&&t(b),f&&t(l)}}}function un(wt){return dn(async()=>{if(typeof window<"u"&&!window.Prism){const _=document.createElement("link");_.rel="stylesheet",_.href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css",document.head.appendChild(_);const b=document.createElement("script");b.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js",b.onload=()=>{const l=document.createElement("script");l.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js",l.onload=()=>{window.Prism.highlightAll()},document.head.appendChild(l)},document.head.appendChild(b)}}),[]}class yn extends Zt{constructor(_){super(),en(this,_,un,hn,tn,{})}}export{yn as default};
