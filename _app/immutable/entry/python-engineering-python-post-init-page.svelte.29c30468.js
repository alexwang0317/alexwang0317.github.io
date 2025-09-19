import{S as it,i as st,s as ot,y as rt,a as p,k as i,q as a,z as lt,c as f,l as s,m as o,r as n,h as t,n as u,A as dt,b as nt,C as e,F as mt,g as ct,d as _t,B as pt,o as ft}from"../chunks/index.5437a47d.js";import{S as ut}from"../chunks/Seo.81a06601.js";function vt(Ae){let _,E,l,w,b,W,G,x,J,K,y,X,F,Y,Z,ee,r,g,te,I,ae,ne,ie,N,C,se,oe,A,re,le,h,de,L,me,ce,M,_e,pe,fe,S,V,ue,ve,j,R,he,Ee,ye,z,v,be,Le="{",ge,we,Me="}",xe,Ce,Ve,P,B,je,Pe,De,D,H,ke,Te,Oe,k,T,$e,q;return _=new ut({props:{title:"__post_init__ - Python Engineering Notes",description:"Validate dataclass fields at instantiation time using __post_init__ for better encapsulation"}}),{c(){rt(_.$$.fragment),E=p(),l=i("article"),w=i("div"),b=i("a"),W=a("← Back to Python"),G=p(),x=i("h1"),J=a("__post_init__"),K=p(),y=i("div"),X=a("Validate dataclass fields at instantiation time using "),F=i("code"),Y=a("__post_init__"),Z=a(` for better encapsulation and data integrity. Learn how to enforce business
    rules right when objects are created.`),ee=p(),r=i("div"),g=i("p"),te=a("Let's say you're building a time-based system and you want to create an "),I=i("code"),ae=a("Event"),ne=a(` class. However, you want to ensure that the event is only valid if the end
      time comes after the start time, and you want this validation to happen at
      instantiation time for proper encapsulation.`),ie=p(),N=i("pre"),C=i("code"),se=a(`from datetime import datetime
from dataclasses import dataclass

@dataclass
class Event:
    name: str
    start_time: datetime
    end_time: datetime

# This creates an invalid event without any validation
event = Event(
    name="Meeting",
    start_time=datetime(2025, 9, 6, 14, 0),
    end_time=datetime(2025, 9, 6, 13, 0)  # Ends before it starts!
)

print("Event duration:", event.end_time - event.start_time)  # Negative duration!`),oe=p(),A=i("p"),re=a(`The issue above is that we can create logically invalid objects. The event
      ends before it starts, which doesn't make sense in our domain. We need to
      validate our data at creation time to maintain data integrity and prevent
      bugs downstream.`),le=p(),h=i("p"),de=a("The "),L=i("code"),me=a("__post_init__"),ce=a(` method is called automatically after the
      dataclass `),M=i("code"),_e=a("__init__"),pe=a(`
      method completes. This is the perfect place to add validation logic that depends
      on multiple fields.`),fe=p(),S=i("pre"),V=i("code"),ue=a(`from datetime import datetime
from dataclasses import dataclass

@dataclass
class Event:
    name: str
    start_time: datetime
    end_time: datetime
    
    def __post_init__(self):
        if self.end_time <= self.start_time:
            raise ValueError("End time must be after start time")

# Now this will raise an error immediately
try:
    event = Event(
        name="Invalid Meeting",
        start_time=datetime(2025, 9, 6, 14, 0),
        end_time=datetime(2025, 9, 6, 13, 0)
    )
except ValueError as e:
    print("Validation error:", e)  # Caught the invalid event!`),ve=p(),j=i("p"),R=i("code"),he=a("__post_init__"),Ee=a(` is also useful for computing derived fields based
      on the input data:`),ye=p(),z=i("pre"),v=i("code"),be=a(`from dataclasses import dataclass, field
from datetime import datetime, timedelta

@dataclass
class Event:
    name: str
    start_time: datetime
    end_time: datetime
    duration: timedelta = field(init=False)  # Not set during init
    is_all_day: bool = field(init=False)
    
    def __post_init__(self):
        # Validation
        if self.end_time <= self.start_time:
            raise ValueError("End time must be after start time")
        
        # Compute derived fields
        self.duration = self.end_time - self.start_time
        
        # Check if it's an all-day event (exactly 24 hours)
        self.is_all_day = self.duration == timedelta(days=1)

event = Event(
    name="Conference",
    start_time=datetime(2025, 9, 6, 9, 0),
    end_time=datetime(2025, 9, 6, 17, 0)
)

print(f"Event '`),ge=a(Le),we=a("event.name"),xe=a(Me),Ce=a(`' lasts", event.duration)
print("All-day event:", event.is_all_day)`),Ve=p(),P=i("p"),B=i("code"),je=a("__post_init__"),Pe=a(` provides immediate validation, clean encapsulation,
      and automatic execution. Use it when you need to validate relationships between
      multiple fields, perform data normalization, compute derived fields, or enforce
      business rules at object creation time.`),De=p(),D=i("p"),H=i("code"),ke=a("__post_init__"),Te=a(` ensures your objects are always in a valid state
      from the moment they're created, leading to more robust and maintainable code.`),Oe=p(),k=i("div"),T=i("p"),$e=a("Questions or feedback? Feel free to reach out!"),this.h()},l(m){lt(_.$$.fragment,m),E=f(m),l=s(m,"ARTICLE",{class:!0});var c=o(l);w=s(c,"DIV",{class:!0});var Se=o(w);b=s(Se,"A",{href:!0,class:!0});var Re=o(b);W=n(Re,"← Back to Python"),Re.forEach(t),Se.forEach(t),G=f(c),x=s(c,"H1",{class:!0});var ze=o(x);J=n(ze,"__post_init__"),ze.forEach(t),K=f(c),y=s(c,"DIV",{class:!0});var Q=o(y);X=n(Q,"Validate dataclass fields at instantiation time using "),F=s(Q,"CODE",{});var Be=o(F);Y=n(Be,"__post_init__"),Be.forEach(t),Z=n(Q,` for better encapsulation and data integrity. Learn how to enforce business
    rules right when objects are created.`),Q.forEach(t),ee=f(c),r=s(c,"DIV",{class:!0});var d=o(r);g=s(d,"P",{});var U=o(g);te=n(U,"Let's say you're building a time-based system and you want to create an "),I=s(U,"CODE",{});var He=o(I);ae=n(He,"Event"),He.forEach(t),ne=n(U,` class. However, you want to ensure that the event is only valid if the end
      time comes after the start time, and you want this validation to happen at
      instantiation time for proper encapsulation.`),U.forEach(t),ie=f(d),N=s(d,"PRE",{});var qe=o(N);C=s(qe,"CODE",{class:!0});var Qe=o(C);se=n(Qe,`from datetime import datetime
from dataclasses import dataclass

@dataclass
class Event:
    name: str
    start_time: datetime
    end_time: datetime

# This creates an invalid event without any validation
event = Event(
    name="Meeting",
    start_time=datetime(2025, 9, 6, 14, 0),
    end_time=datetime(2025, 9, 6, 13, 0)  # Ends before it starts!
)

print("Event duration:", event.end_time - event.start_time)  # Negative duration!`),Qe.forEach(t),qe.forEach(t),oe=f(d),A=s(d,"P",{});var Ue=o(A);re=n(Ue,`The issue above is that we can create logically invalid objects. The event
      ends before it starts, which doesn't make sense in our domain. We need to
      validate our data at creation time to maintain data integrity and prevent
      bugs downstream.`),Ue.forEach(t),le=f(d),h=s(d,"P",{});var O=o(h);de=n(O,"The "),L=s(O,"CODE",{});var We=o(L);me=n(We,"__post_init__"),We.forEach(t),ce=n(O,` method is called automatically after the
      dataclass `),M=s(O,"CODE",{});var Ge=o(M);_e=n(Ge,"__init__"),Ge.forEach(t),pe=n(O,`
      method completes. This is the perfect place to add validation logic that depends
      on multiple fields.`),O.forEach(t),fe=f(d),S=s(d,"PRE",{});var Je=o(S);V=s(Je,"CODE",{class:!0});var Ke=o(V);ue=n(Ke,`from datetime import datetime
from dataclasses import dataclass

@dataclass
class Event:
    name: str
    start_time: datetime
    end_time: datetime
    
    def __post_init__(self):
        if self.end_time <= self.start_time:
            raise ValueError("End time must be after start time")

# Now this will raise an error immediately
try:
    event = Event(
        name="Invalid Meeting",
        start_time=datetime(2025, 9, 6, 14, 0),
        end_time=datetime(2025, 9, 6, 13, 0)
    )
except ValueError as e:
    print("Validation error:", e)  # Caught the invalid event!`),Ke.forEach(t),Je.forEach(t),ve=f(d),j=s(d,"P",{});var Fe=o(j);R=s(Fe,"CODE",{});var Xe=o(R);he=n(Xe,"__post_init__"),Xe.forEach(t),Ee=n(Fe,` is also useful for computing derived fields based
      on the input data:`),Fe.forEach(t),ye=f(d),z=s(d,"PRE",{});var Ye=o(z);v=s(Ye,"CODE",{class:!0});var $=o(v);be=n($,`from dataclasses import dataclass, field
from datetime import datetime, timedelta

@dataclass
class Event:
    name: str
    start_time: datetime
    end_time: datetime
    duration: timedelta = field(init=False)  # Not set during init
    is_all_day: bool = field(init=False)
    
    def __post_init__(self):
        # Validation
        if self.end_time <= self.start_time:
            raise ValueError("End time must be after start time")
        
        # Compute derived fields
        self.duration = self.end_time - self.start_time
        
        # Check if it's an all-day event (exactly 24 hours)
        self.is_all_day = self.duration == timedelta(days=1)

event = Event(
    name="Conference",
    start_time=datetime(2025, 9, 6, 9, 0),
    end_time=datetime(2025, 9, 6, 17, 0)
)

print(f"Event '`),ge=n($,Le),we=n($,"event.name"),xe=n($,Me),Ce=n($,`' lasts", event.duration)
print("All-day event:", event.is_all_day)`),$.forEach(t),Ye.forEach(t),Ve=f(d),P=s(d,"P",{});var Ie=o(P);B=s(Ie,"CODE",{});var Ze=o(B);je=n(Ze,"__post_init__"),Ze.forEach(t),Pe=n(Ie,` provides immediate validation, clean encapsulation,
      and automatic execution. Use it when you need to validate relationships between
      multiple fields, perform data normalization, compute derived fields, or enforce
      business rules at object creation time.`),Ie.forEach(t),De=f(d),D=s(d,"P",{});var Ne=o(D);H=s(Ne,"CODE",{});var et=o(H);ke=n(et,"__post_init__"),et.forEach(t),Te=n(Ne,` ensures your objects are always in a valid state
      from the moment they're created, leading to more robust and maintainable code.`),Ne.forEach(t),d.forEach(t),Oe=f(c),k=s(c,"DIV",{class:!0});var tt=o(k);T=s(tt,"P",{class:!0});var at=o(T);$e=n(at,"Questions or feedback? Feel free to reach out!"),at.forEach(t),tt.forEach(t),c.forEach(t),this.h()},h(){u(b,"href","/python"),u(b,"class","text-blue-600 hover:underline text-sm"),u(w,"class","mb-8"),u(x,"class","text-3xl font-bold mb-4"),u(y,"class","text-lg text-neutral-700 mb-8 leading-relaxed"),u(C,"class","language-python"),u(V,"class","language-python"),u(v,"class","language-python"),u(r,"class","prose prose-neutral max-w-none"),u(T,"class","text-sm text-neutral-500"),u(k,"class","border-t pt-8 mt-12"),u(l,"class","layout-md py-12 mx-auto max-w-3xl px-6 svelte-8bcc0v")},m(m,c){dt(_,m,c),nt(m,E,c),nt(m,l,c),e(l,w),e(w,b),e(b,W),e(l,G),e(l,x),e(x,J),e(l,K),e(l,y),e(y,X),e(y,F),e(F,Y),e(y,Z),e(l,ee),e(l,r),e(r,g),e(g,te),e(g,I),e(I,ae),e(g,ne),e(r,ie),e(r,N),e(N,C),e(C,se),e(r,oe),e(r,A),e(A,re),e(r,le),e(r,h),e(h,de),e(h,L),e(L,me),e(h,ce),e(h,M),e(M,_e),e(h,pe),e(r,fe),e(r,S),e(S,V),e(V,ue),e(r,ve),e(r,j),e(j,R),e(R,he),e(j,Ee),e(r,ye),e(r,z),e(z,v),e(v,be),e(v,ge),e(v,we),e(v,xe),e(v,Ce),e(r,Ve),e(r,P),e(P,B),e(B,je),e(P,Pe),e(r,De),e(r,D),e(D,H),e(H,ke),e(D,Te),e(l,Oe),e(l,k),e(k,T),e(T,$e),q=!0},p:mt,i(m){q||(ct(_.$$.fragment,m),q=!0)},o(m){_t(_.$$.fragment,m),q=!1},d(m){pt(_,m),m&&t(E),m&&t(l)}}}function ht(Ae){return ft(async()=>{if(typeof window<"u"&&!window.Prism){const _=document.createElement("link");_.rel="stylesheet",_.href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css",document.head.appendChild(_);const E=document.createElement("script");E.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js",E.onload=()=>{const l=document.createElement("script");l.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js",l.onload=()=>{window.Prism.highlightAll()},document.head.appendChild(l)},document.head.appendChild(E)}}),[]}class bt extends it{constructor(_){super(),st(this,_,ht,vt,ot,{})}}export{bt as default};
