import{S as Zt,i as en,s as tn,y as nn,a as u,k as o,q as t,z as an,c as p,l,m as i,r as n,h as a,n as y,A as on,b as Xt,C as e,F as ln,g as rn,d as sn,B as cn,o as mn}from"../chunks/index.5437a47d.js";import{S as un}from"../chunks/Seo.81a06601.js";function pn(yt){let _,E,m,P,T,ee,te,j,ne,ae,C,oe,le,k,ie,re,r,$,se,ce,A,v,me,gt="{",ue,pe,vt="}",de,he,fe,w,_e,W,ye,ge,Y,ve,be,we,z,b,Ee,bt="{",xe,Te,wt="}",Ie,Pe,je,O,R,Ce,ke,Oe,q,De,Me,g,B,Ne,Le,V,Se,Fe,G,$e,Ae,U,We,Ye,H,ze,Re,I,qe,Q,Be,Ve,Ge,J,s,Ue,Et="{",He,Qe,xt="}",Je,Ke,Tt="{",Xe,Ze,It="}",et,tt,Pt="{",nt,at,jt="}",ot,lt,Ct="{",it,rt,kt="}",st,ct,mt,D,K,ut,pt,dt,M,N,ht,X;return _=new un({props:{title:"functools.partial - Alex Wang",description:"functools.partial for elegant function composition and cleaner code"}}),{c(){nn(_.$$.fragment),E=u(),m=o("article"),P=o("div"),T=o("a"),ee=t("← Back to Python"),te=u(),j=o("h1"),ne=t("functools.partial"),ae=u(),C=o("div"),oe=t("December 3, 2024 • 5 min read"),le=u(),k=o("div"),ie=t(`Master Python's functools.partial for elegant function composition and
    cleaner code. Learn how to eliminate repetitive function calls and create
    more maintainable codebases.`),re=u(),r=o("div"),$=o("p"),se=t(`You may find yourself in a situation where you need to call the same
      function repeatedly with mostly identical parameters. For instance,
      imagine you're building an application that frequently sends notifications
      through an email service. You might need to send emails with specific
      sender information, SMTP configuration, formatting preferences, retry
      settings, and logging options. This results in you calling the email
      function over and over with the same fixed arguments:`),ce=u(),A=o("pre"),v=o("code"),me=t(`# You end up with repetitive calls like this throughout your codebase
send_email(
    smtp_host='smtp.company.com',
    smtp_port=587,
    sender_email='noreply@company.com',
    sender_name='Company Notifications',
    use_tls=True,
    retry_attempts=3,
    retry_delay=30,
    log_level='INFO',
    template_engine='jinja2',
    to_email='user1@example.com',
    subject='Welcome to our service',
    template='welcome_email.html',
    context=`),ue=t(gt),pe=t("username': 'john_doe'"),de=t(vt),he=t(`
)`),fe=u(),w=o("p"),_e=t("This repetition creates several problems: your code becomes "),W=o("strong"),ye=t("verbose"),ge=t(`
      and `),Y=o("strong"),ve=t("harder to scan"),be=t(`, you're constantly filling in the same
      parameter values, and if you need to change the common settings (like the
      SMTP host or retry configuration), you'd have to hunt down and update
      every single function call. This makes your code less maintainable and
      difficult to read/write.`),we=u(),z=o("pre"),b=o("code"),Ee=t(`from functools import partial

# Create a partial function with all the common email configuration
company_email = partial(
    send_email,
    smtp_host='smtp.company.com',
    smtp_port=587,
    sender_email='noreply@company.com',
    sender_name='Company Notifications',
    use_tls=True,
    retry_attempts=3,
    retry_delay=30,
    log_level='INFO',
    template_engine='jinja2'
)

# You can also create more specific partials for different use cases
urgent_notification = partial(
    company_email,
    retry_attempts=5,
    retry_delay=10,
    template='urgent_alert.html'
)


# Now your calls become much cleaner and focused.
welcome_email(to_email='newuser@example.com', context=`),xe=t(bt),Te=t("username': 'jane_smith'"),Ie=t(wt),Pe=t(")"),je=u(),O=o("p"),R=o("code"),Ce=t("functools.partial"),ke=t(` allows you to "freeze" arguments and keywords,
      creating a simplified function with fewer parameters. When configuration values
      stay constant across multiple calls, partial eliminates the repetitive boilerplate.`),Oe=u(),q=o("p"),De=t("This may be useful for:"),Me=u(),g=o("ul"),B=o("li"),Ne=t("API clients with consistent authentication headers"),Le=u(),V=o("li"),Se=t("Database connections with standard timeout and pool settings"),Fe=u(),G=o("li"),$e=t("File processors with common parsing configurations"),Ae=u(),U=o("li"),We=t("Test fixtures requiring repeated setup parameters"),Ye=u(),H=o("h2"),ze=t("Important Behavior with Mutable vs Immutable Arguments"),Re=u(),I=o("p"),qe=t("When declaring "),Q=o("code"),Be=t("functools.partial"),Ve=t(`, recognize that any
      immutable argument types will use the values declared at creation time,
      while changes to mutable argument types do affect partials.`),Ge=u(),J=o("pre"),s=o("code"),Ue=t(`# 1. Immutable vs Mutable behavior
def process_data(base_value, multiplier):
    return base_value * multiplier

# Immutable example - value frozen at creation time
initial_base = 10
multiply_by_base = partial(process_data, initial_base)

initial_base = 20  # This won't affect the partial
print(multiply_by_base(5))  # Output: 50 (still uses 10)

# Mutable example - changes affect the partial
config_dict = `),He=t(Et),Qe=t("timeout': 30"),Je=t(xt),Ke=t(`

def connect_database(host, port, config):
    return f"Connecting to `),Xe=t(Tt),Ze=t("host"),et=t(It),tt=t(":"),nt=t(Pt),at=t("port"),ot=t(jt),lt=t(" with timeout "),it=t(Ct),rt=t("config['timeout']"),st=t(kt),ct=t(`"

db_connector = partial(connect_database, config=config_dict)

config_dict['timeout'] = 60  # This WILL affect the partial
print(db_connector('localhost', 5432))  # Output: "...timeout 60"`),mt=u(),D=o("p"),K=o("strong"),ut=t("Tip:"),pt=t(" Use keyword arguments in your partials for readability."),dt=u(),M=o("div"),N=o("p"),ht=t("Questions or feedback? Feel free to reach out!"),this.h()},l(f){an(_.$$.fragment,f),E=p(f),m=l(f,"ARTICLE",{class:!0});var h=i(m);P=l(h,"DIV",{class:!0});var Ot=i(P);T=l(Ot,"A",{href:!0,class:!0});var Dt=i(T);ee=n(Dt,"← Back to Python"),Dt.forEach(a),Ot.forEach(a),te=p(h),j=l(h,"H1",{class:!0});var Mt=i(j);ne=n(Mt,"functools.partial"),Mt.forEach(a),ae=p(h),C=l(h,"DIV",{class:!0});var Nt=i(C);oe=n(Nt,"December 3, 2024 • 5 min read"),Nt.forEach(a),le=p(h),k=l(h,"DIV",{class:!0});var Lt=i(k);ie=n(Lt,`Master Python's functools.partial for elegant function composition and
    cleaner code. Learn how to eliminate repetitive function calls and create
    more maintainable codebases.`),Lt.forEach(a),re=p(h),r=l(h,"DIV",{class:!0});var c=i(r);$=l(c,"P",{});var St=i($);se=n(St,`You may find yourself in a situation where you need to call the same
      function repeatedly with mostly identical parameters. For instance,
      imagine you're building an application that frequently sends notifications
      through an email service. You might need to send emails with specific
      sender information, SMTP configuration, formatting preferences, retry
      settings, and logging options. This results in you calling the email
      function over and over with the same fixed arguments:`),St.forEach(a),ce=p(c),A=l(c,"PRE",{});var Ft=i(A);v=l(Ft,"CODE",{class:!0});var L=i(v);me=n(L,`# You end up with repetitive calls like this throughout your codebase
send_email(
    smtp_host='smtp.company.com',
    smtp_port=587,
    sender_email='noreply@company.com',
    sender_name='Company Notifications',
    use_tls=True,
    retry_attempts=3,
    retry_delay=30,
    log_level='INFO',
    template_engine='jinja2',
    to_email='user1@example.com',
    subject='Welcome to our service',
    template='welcome_email.html',
    context=`),ue=n(L,gt),pe=n(L,"username': 'john_doe'"),de=n(L,vt),he=n(L,`
)`),L.forEach(a),Ft.forEach(a),fe=p(c),w=l(c,"P",{});var S=i(w);_e=n(S,"This repetition creates several problems: your code becomes "),W=l(S,"STRONG",{});var $t=i(W);ye=n($t,"verbose"),$t.forEach(a),ge=n(S,`
      and `),Y=l(S,"STRONG",{});var At=i(Y);ve=n(At,"harder to scan"),At.forEach(a),be=n(S,`, you're constantly filling in the same
      parameter values, and if you need to change the common settings (like the
      SMTP host or retry configuration), you'd have to hunt down and update
      every single function call. This makes your code less maintainable and
      difficult to read/write.`),S.forEach(a),we=p(c),z=l(c,"PRE",{});var Wt=i(z);b=l(Wt,"CODE",{class:!0});var F=i(b);Ee=n(F,`from functools import partial

# Create a partial function with all the common email configuration
company_email = partial(
    send_email,
    smtp_host='smtp.company.com',
    smtp_port=587,
    sender_email='noreply@company.com',
    sender_name='Company Notifications',
    use_tls=True,
    retry_attempts=3,
    retry_delay=30,
    log_level='INFO',
    template_engine='jinja2'
)

# You can also create more specific partials for different use cases
urgent_notification = partial(
    company_email,
    retry_attempts=5,
    retry_delay=10,
    template='urgent_alert.html'
)


# Now your calls become much cleaner and focused.
welcome_email(to_email='newuser@example.com', context=`),xe=n(F,bt),Te=n(F,"username': 'jane_smith'"),Ie=n(F,wt),Pe=n(F,")"),F.forEach(a),Wt.forEach(a),je=p(c),O=l(c,"P",{});var ft=i(O);R=l(ft,"CODE",{});var Yt=i(R);Ce=n(Yt,"functools.partial"),Yt.forEach(a),ke=n(ft,` allows you to "freeze" arguments and keywords,
      creating a simplified function with fewer parameters. When configuration values
      stay constant across multiple calls, partial eliminates the repetitive boilerplate.`),ft.forEach(a),Oe=p(c),q=l(c,"P",{});var zt=i(q);De=n(zt,"This may be useful for:"),zt.forEach(a),Me=p(c),g=l(c,"UL",{});var x=i(g);B=l(x,"LI",{});var Rt=i(B);Ne=n(Rt,"API clients with consistent authentication headers"),Rt.forEach(a),Le=p(x),V=l(x,"LI",{});var qt=i(V);Se=n(qt,"Database connections with standard timeout and pool settings"),qt.forEach(a),Fe=p(x),G=l(x,"LI",{});var Bt=i(G);$e=n(Bt,"File processors with common parsing configurations"),Bt.forEach(a),Ae=p(x),U=l(x,"LI",{});var Vt=i(U);We=n(Vt,"Test fixtures requiring repeated setup parameters"),Vt.forEach(a),x.forEach(a),Ye=p(c),H=l(c,"H2",{});var Gt=i(H);ze=n(Gt,"Important Behavior with Mutable vs Immutable Arguments"),Gt.forEach(a),Re=p(c),I=l(c,"P",{});var Z=i(I);qe=n(Z,"When declaring "),Q=l(Z,"CODE",{});var Ut=i(Q);Be=n(Ut,"functools.partial"),Ut.forEach(a),Ve=n(Z,`, recognize that any
      immutable argument types will use the values declared at creation time,
      while changes to mutable argument types do affect partials.`),Z.forEach(a),Ge=p(c),J=l(c,"PRE",{});var Ht=i(J);s=l(Ht,"CODE",{class:!0});var d=i(s);Ue=n(d,`# 1. Immutable vs Mutable behavior
def process_data(base_value, multiplier):
    return base_value * multiplier

# Immutable example - value frozen at creation time
initial_base = 10
multiply_by_base = partial(process_data, initial_base)

initial_base = 20  # This won't affect the partial
print(multiply_by_base(5))  # Output: 50 (still uses 10)

# Mutable example - changes affect the partial
config_dict = `),He=n(d,Et),Qe=n(d,"timeout': 30"),Je=n(d,xt),Ke=n(d,`

def connect_database(host, port, config):
    return f"Connecting to `),Xe=n(d,Tt),Ze=n(d,"host"),et=n(d,It),tt=n(d,":"),nt=n(d,Pt),at=n(d,"port"),ot=n(d,jt),lt=n(d," with timeout "),it=n(d,Ct),rt=n(d,"config['timeout']"),st=n(d,kt),ct=n(d,`"

db_connector = partial(connect_database, config=config_dict)

config_dict['timeout'] = 60  # This WILL affect the partial
print(db_connector('localhost', 5432))  # Output: "...timeout 60"`),d.forEach(a),Ht.forEach(a),mt=p(c),D=l(c,"P",{});var _t=i(D);K=l(_t,"STRONG",{});var Qt=i(K);ut=n(Qt,"Tip:"),Qt.forEach(a),pt=n(_t," Use keyword arguments in your partials for readability."),_t.forEach(a),c.forEach(a),dt=p(h),M=l(h,"DIV",{class:!0});var Jt=i(M);N=l(Jt,"P",{class:!0});var Kt=i(N);ht=n(Kt,"Questions or feedback? Feel free to reach out!"),Kt.forEach(a),Jt.forEach(a),h.forEach(a),this.h()},h(){y(T,"href","/python"),y(T,"class","text-blue-600 hover:underline text-sm"),y(P,"class","mb-8"),y(j,"class","text-3xl font-bold mb-4"),y(C,"class","text-sm text-neutral-500 mb-8"),y(k,"class","text-lg text-neutral-700 mb-8 leading-relaxed"),y(v,"class","language-python"),y(b,"class","language-python"),y(s,"class","language-python"),y(r,"class","prose prose-neutral max-w-none"),y(N,"class","text-sm text-neutral-500"),y(M,"class","border-t pt-8 mt-12"),y(m,"class","layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b")},m(f,h){on(_,f,h),Xt(f,E,h),Xt(f,m,h),e(m,P),e(P,T),e(T,ee),e(m,te),e(m,j),e(j,ne),e(m,ae),e(m,C),e(C,oe),e(m,le),e(m,k),e(k,ie),e(m,re),e(m,r),e(r,$),e($,se),e(r,ce),e(r,A),e(A,v),e(v,me),e(v,ue),e(v,pe),e(v,de),e(v,he),e(r,fe),e(r,w),e(w,_e),e(w,W),e(W,ye),e(w,ge),e(w,Y),e(Y,ve),e(w,be),e(r,we),e(r,z),e(z,b),e(b,Ee),e(b,xe),e(b,Te),e(b,Ie),e(b,Pe),e(r,je),e(r,O),e(O,R),e(R,Ce),e(O,ke),e(r,Oe),e(r,q),e(q,De),e(r,Me),e(r,g),e(g,B),e(B,Ne),e(g,Le),e(g,V),e(V,Se),e(g,Fe),e(g,G),e(G,$e),e(g,Ae),e(g,U),e(U,We),e(r,Ye),e(r,H),e(H,ze),e(r,Re),e(r,I),e(I,qe),e(I,Q),e(Q,Be),e(I,Ve),e(r,Ge),e(r,J),e(J,s),e(s,Ue),e(s,He),e(s,Qe),e(s,Je),e(s,Ke),e(s,Xe),e(s,Ze),e(s,et),e(s,tt),e(s,nt),e(s,at),e(s,ot),e(s,lt),e(s,it),e(s,rt),e(s,st),e(s,ct),e(r,mt),e(r,D),e(D,K),e(K,ut),e(D,pt),e(m,dt),e(m,M),e(M,N),e(N,ht),X=!0},p:ln,i(f){X||(rn(_.$$.fragment,f),X=!0)},o(f){sn(_.$$.fragment,f),X=!1},d(f){cn(_,f),f&&a(E),f&&a(m)}}}function dn(yt){return mn(async()=>{if(typeof window<"u"&&!window.Prism){const _=document.createElement("link");_.rel="stylesheet",_.href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css",document.head.appendChild(_);const E=document.createElement("script");E.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js",E.onload=()=>{const m=document.createElement("script");m.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js",m.onload=()=>{window.Prism.highlightAll()},document.head.appendChild(m)},document.head.appendChild(E)}}),[]}class _n extends Zt{constructor(_){super(),en(this,_,dn,pn,tn,{})}}export{_n as default};
