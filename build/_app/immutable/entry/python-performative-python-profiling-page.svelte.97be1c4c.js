import{S as Dl,i as Hl,s as Fl,y as $l,a as c,k as i,q as t,z as Nl,c as h,l as r,m as a,r as n,h as o,n as m,J as Gl,A as Vl,b as Sl,C as e,F as Ul,g as ql,d as Wl,B as Yl,o as Zl}from"../chunks/index.dd6ea1d3.js";import{S as Kl}from"../chunks/Seo.4277da45.js";function Ql(Ia){let _,T,u,b,O,rn,an,q,sn,ln,W,cn,hn,Y,mn,un,s,Ie,pn,dn,Re,fn,gn,Oe,yn,_n,M,Z,je,wn,vn,bn,K,Le,En,xn,Pn,Q,Se,kn,Bn,Mn,De,zn,An,He,Cn,Tn,Fe,In,Rn,$e,On,jn,Ne,E,Ln,Ra="{",Sn,Dn,Oa="}",Hn,Fn,$n,Ge,Nn,Gn,Ve,y,Vn,ja="{",Un,qn,La="}",Wn,Yn,Sa="{",Zn,Kn,Da="}",Qn,Jn,Xn,Ue,eo,to,z,no,qe,oo,io,We,ro,ao,so,Ye,J,lo,co,Ze,ho,mo,j,uo,Ke,po,fo,go,Qe,yo,_o,Je,wo,vo,Xe,bo,Eo,et,xo,Po,L,ko,S,Bo,Mo,zo,tt,X,Ao,Co,nt,To,Io,ot,ee,Ro,Oo,it,jo,Lo,te,x,So,Ha="{",Do,Ho,Fa="}",Fo,$o,ne,No,p,Go,$a="{",Vo,Uo,Na="}",qo,Wo,Ga="{",Yo,Zo,Va="}",Ko,Qo,Ua="{",Jo,Xo,qa="}",ei,ti,oe,ni,D,oi,ie,ii,ri,rt,ai,si,w,re,at,li,ci,hi,ae,st,mi,ui,pi,se,lt,di,fi,gi,le,ct,yi,_i,wi,ce,ht,vi,bi,Ei,mt,xi,Pi,ut,ki,Bi,pt,he,Mi,zi,A,Ai,dt,Ci,Ti,ft,Ii,Ri,Oi,gt,ji,Li,yt,Si,Di,_t,me,Hi,Fi,H,$i,wt,Ni,Gi,Vi,vt,ue,Ui,qi,bt,Wi,Yi,F,Wa,Zi,Et,Ki,Qi,xt,Ji,Xi,Pt,er,tr,kt,pe,nr,or,C,ir,Bt,rr,ar,$,sr,lr,cr,Mt,de,hr,mr,zt,ur,pr,fe,At,dr,fr,Ct,gr,yr,v,ge,Tt,_r,wr,vr,ye,It,br,Er,xr,_e,Rt,Pr,kr,Br,we,Ot,Mr,zr,Ar,ve,jt,Cr,Tr,Ir,N,Rr,Lt,Or,jr,Lr,St,Sr,Dr,Dt,Hr,Fr,Ht,$r,Nr,Ft,be,Gr,Vr,G,Ur,$t,qr,Wr,Yr,Nt,Ee,Zr,Kr,Gt,Qr,Jr,xe,Vt,Xr,ea,Ut,ta,na,qt,oa,ia,Pe,Wt,ra,aa,Yt,sa,la,ke,Zt,ca,ha,I,R,ma,V,ua,pa,da,Be,fa,Kt;return _=new Kl({props:{title:"Python Profiling - Alex Wang",description:"Master Python profiling techniques to optimize performance and avoid premature optimization"}}),{c(){$l(_.$$.fragment),T=c(),u=i("article"),b=i("div"),O=i("a"),rn=t("← Back to Python"),an=c(),q=i("h1"),sn=t("HPP Blog #1: Python Profiling"),ln=c(),W=i("div"),cn=t("September 5, 2025 • 15 min read"),hn=c(),Y=i("div"),mn=t('"Premature optimization is the root of all evil" - Donald Knuth'),un=c(),s=i("div"),Ie=i("p"),pn=t(`In this post, which will be the first in a series, I will go over the
      basics of Python profiling in a way that you were probably never taught in
      school! I was never taught this explicitly, and only through interactions
      with people much smarter than me did I recognize its importance.`),dn=c(),Re=i("h2"),fn=t("Why is Profiling Important?"),gn=c(),Oe=i("p"),yn=t(`At the moment, these are the reasons why I personally think profiling is
      becoming more important:`),_n=c(),M=i("ul"),Z=i("li"),je=i("strong"),wn=t("Don't over-optimize the wrong thing."),vn=t(` Most problems have
        several approaches with very different ceilings. Meticulous tuning of a weak
        solution rarely beats starting with a better design. Profile to see which
        path deserves the effort.`),bn=c(),K=i("li"),Le=i("strong"),En=t("Fix what you believe is the problem."),xn=t(` Oftentimes, you skip
        profiling and guess, but for a program of any significant complexity, you
        will probably fix the wrong thing. Profiling oftentimes can actually be the
        "lazy" and more efficient solution. Don't spend hours speeding up a part
        of your code that's already fast, only to realize that the slowest part was
        somewhere else instead.`),Pn=c(),Q=i("li"),Se=i("strong"),kn=t("Rise of vibe coding."),Bn=t(` Vibe coding/AI coding is not inherently
        bad, but, due to the inherent stochastic nature of LLMs, you're probably
        getting a very suboptimal initial solution, that you may not even understand
        is bad.`),Mn=c(),De=i("p"),zn=t(`As a heads-up, the implementation that is used here is deliberately the
      simplest/least-optimal one. Feel free to follow along in this jupyter
      notebook.`),An=c(),He=i("h2"),Cn=t("Print & Time Statements"),Tn=c(),Fe=i("p"),In=t(`The simplest way to profile would most definitely be to just use time and
      print statements. Print statements are already super useful in debugging,
      so why not profiling as well?`),Rn=c(),$e=i("p"),On=t(`The simplest way to go about using time and print statements is simply
      something along the lines of:`),jn=c(),Ne=i("pre"),E=i("code"),Ln=t(`t1 = time.time()
result = fn(*args, **kwargs)
t2 = time.time()
print(f"Function took `),Sn=t(Ra),Dn=t("t2-t1"),Hn=t(Oa),Fn=t(' seconds")'),$n=c(),Ge=i("p"),Nn=t(`A better way of doing this is to define some type of decorator in order to
      automate our timing measurements.`),Gn=c(),Ve=i("pre"),y=i("code"),Vn=t(`from functools import wraps 

def timePrintFn(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = fn(*args, **kwargs)
        end = time.time()
        print(f"`),Un=t(ja),qn=t("fn.__name__"),Wn=t(La),Yn=t(" took "),Zn=t(Sa),Kn=t("end-start:.4f"),Qn=t(Da),Jn=t(` seconds")
        return result
    return wrapper`),Xn=c(),Ue=i("p"),eo=t(`Of note, on other texts, such as the textbook High Performance Python,
      there is a reference to the decorator being slightly faster, however, this
      is likely just noise in the measurement and doesn't seem to consistently
      be the case. In fact, it is the other way around, the decorator adds
      additional function overhead and thus should be slightly slower.
      Individual test cases may appear faster/slower when comparing the two
      because of statistical noise, but averaged over long time-series the
      decorator should be, on-average, slower.`),to=c(),z=i("p"),no=t("Another general method for doing this is using the "),qe=i("code"),oo=t("%timeit"),io=t(`
      method. The `),We=i("code"),ro=t("%timeit"),ao=t(`
      method is simply using the Python command and running it in the command line.
      With two major flags, you choose how many times to call the function consecutively
      where the final time is the total time for all the calls divided by the number
      of calls. Then you specify the number of runs which is the number of times
      the above operation is conducted.`),so=c(),Ye=i("pre"),J=i("code"),lo=t(`N = 1  # of times run consecutively per run
R = 1  # of runs 

%timeit -n N -r R multiply_matrices_pure_python(matrix_a, matrix_b)`),co=c(),Ze=i("p"),ho=t("This then returns the fastest of all the runs, or the outer loop."),mo=c(),j=i("p"),uo=t("You can also try "),Ke=i("code"),po=t("%%time"),fo=t(`, which basically times an entire cell
      in a jupyter notebook.`),go=c(),Qe=i("p"),yo=t(`First, when measuring functions this way, it's helpful to remove the first
      test-case time because of import statements and other noise present in the
      first measurement. A warm-up run of the function/code is helpful to run
      before actual testing. Then you should run it a couple of times, usually
      around 5, depending on what the use case is of course, and how fast you
      want results.`),_o=c(),Je=i("h2"),wo=t("cProfile"),vo=c(),Xe=i("p"),bo=t(`cProfile is the faster of the two profilers in the standard Python library
      because it's written in C.`),Eo=c(),et=i("p"),xo=t(`Before you profile anything, you should probably first make a guess, or
      hypothesis, about the speed of different parts of your code. This helps
      you figure out where you are consistently wrong at guessing the speed of a
      program and improves your coding intuition.`),Po=c(),L=i("p"),ko=t(`One of the ways to use cProfile is as a command-line argument. The CLI
      definition can be found
      `),S=i("a"),Bo=t("here"),Mo=t(`
      but the general gist is:`),zo=c(),tt=i("pre"),X=i("code"),Ao=t("$ python -m cProfile [options] script.py [script_args...]"),Co=c(),nt=i("p"),To=t(`The one that I think is most useful is to use the cumulative flag, which
      gets you the total time spent within a specific function.`),Io=c(),ot=i("pre"),ee=i("code"),Ro=t("$ python -m cProfile -s cumulative script.py [script_args...]"),Oo=c(),it=i("p"),jo=t(`If you are in the repo, and run it on the matmul.py script, you will get
      something like this:`),Lo=c(),te=i("pre"),x=i("code"),So=t(`$ USER Profiling % python -m cProfile -s cumulative matmul.py 
Generating two 1000x1000 matrices...
Sample from matrix A (top-left 3x3):
[56, 77, 49]
[74, 21, 89]
[19, 57, 31]
Sample from matrix B (top-left 3x3):
[25, 11, 37]
[13, 58, 50]
[55, 98, 21]
Starting matrix multiplication...
Matrix multiplication completed!
Result matrix size: 1000x1000
Sample from result matrix (top-left 3x3):
[2488413, 2460504, 2424927]
[2501376, 2440835, 2462731]
[2465470, 2417773, 2460009]
         16539727 function calls (16539695 primitive calls) in 123.430 seconds

   Ordered by: cumulative time

   ncalls  tottime  percall  cumtime  percall filename:lineno(function)
      3/1    0.000    0.000  123.457  123.457 `),Do=t(Ha),Ho=t("built-in method builtins.exec"),Fo=t(Fa),$o=t(`
        1    0.007    0.007  123.457  123.457 matmul.py:1(`),ne=i("module"),No=t(`)
        1    0.000    0.000  123.444  123.444 matmul.py:55(main)
        1  121.197  121.197  121.224  121.224 matmul.py:26(multiply_matrices_pure_python)
        2    0.001    0.001    2.220    1.110 matmul.py:9(generate_matrix)
     2000    0.258    0.000    2.219    0.001 matmul.py:21(`),p=i("listcomp"),Go=t(`)
  2000000    0.302    0.000    1.961    0.000 random.py:358(randint)
  2000000    0.806    0.000    1.659    0.000 random.py:284(randrange)
  2000000    0.513    0.000    0.673    0.000 random.py:235(_randbelow_with_getrandbits)
  6000000    0.180    0.000    0.180    0.000 `),Vo=t($a),Uo=t("built-in method _operator.index"),qo=t(Na),Wo=t(`
  2534239    0.094    0.000    0.094    0.000 `),Yo=t(Ga),Zo=t("method 'getrandbits' of '_random.Random' objects"),Ko=t(Va),Qo=t(`
  2000000    0.066    0.000    0.066    0.000 `),Jo=t(Ua),Xo=t("method 'bit_length' of 'int' objects"),ei=t(qa),ti=t(`
        1    0.001    0.001    0.027    0.027 matmul.py:41(`),oe=i("listcomp"),ni=t(`)
      6/1    0.000    0.000    0.005    0.005 `),D=i("frozen"),oi=t(`:1167(_find_and_load)
      6/1    0.000    0.000    0.005    0.005 `),ie=i("frozen"),ii=t(":1122(_find_and_load_unlocked)"),ri=c(),rt=i("p"),ai=t(`If you compare, we've about doubled our time (this new one took ~120
      seconds) just simply because we are profiling the script itself. As we've
      sorted by execution time, we can assess where it's mostly spent. Here is
      how to go about reading this:`),si=c(),w=i("ul"),re=i("li"),at=i("strong"),li=t("ncalls:"),ci=t(` total number of calls. The first number is the total
        number of calls, while the second number is the primitive calls––basically
        any call that was not recursive`),hi=c(),ae=i("li"),st=i("strong"),mi=t("tottime:"),ui=t(` time spent in that function excluding the function
        call itself`),pi=c(),se=i("li"),lt=i("strong"),di=t("percall:"),fi=t(" tottime/ncalls"),gi=c(),le=i("li"),ct=i("strong"),yi=t("cumtime:"),_i=t(" across all sub-functions called included"),wi=c(),ce=i("li"),ht=i("strong"),vi=t("percall:"),bi=t(" cumtime/ncalls"),Ei=c(),mt=i("p"),xi=t(`Looking at the above code, it's clear that the heavy lifting is being done
      primarily by the multiply_matrices which makes sense as it's 121 seconds.
      Also because tottime ≈ cumtime, we can see that it's not calling expensive
      functions, and most of the work is being done in these nested for-loops
      which is crushing the performance. We can also read the matrix generation
      runs, which call the generate_matrix and other which is relatively costly,
      but costly because of calls to other operations due to the delta in the
      tottime and cumtime values. It's clear that in the generation, randrange
      is the most expensive step as well, with each step adding a little bit of
      overhead.`),Pi=c(),ut=i("p"),ki=t(`Then to get further analysis, we can run the following to save it into a
      statistics folder:`),Bi=c(),pt=i("pre"),he=i("code"),Mi=t("$ python -m cProfile -o matmul.stats matmul.py"),zi=c(),A=i("p"),Ai=t(`After doing this, feel free to check out the jupyter notebook on
      profiling. Then afterwards you can see that we can call `),dt=i("code"),Ci=t("print_callers()"),Ti=t(`
      as well as `),ft=i("code"),Ii=t("print_callees()"),Ri=t(`. This gives you a list on the left
      of which functions called which other functions and how many times and
      vice versa. The caller and callees list may be extremely helpful when
      looking for cached calls or when something is called much more than you
      would expect.`),Oi=c(),gt=i("h2"),ji=t("SnakeViz"),Li=c(),yt=i("p"),Si=t(`SnakeViz is a way to draw the output of cProfile as flame graph. The
      larger the box, the longer that specific part of the code takes to run.
      This package you need to:`),Di=c(),_t=i("pre"),me=i("code"),Hi=t("$ pip install snakeviz"),Fi=c(),H=i("p"),$i=t("Then run "),wt=i("code"),Ni=t("!snakeviz"),Gi=t(` in jupyter notebook or then calling it in CLI
      in the following form:`),Vi=c(),vt=i("pre"),ue=i("code"),Ui=t(`$ snakeviz matmul.prof
# Or 
$ snakeviz matmul.stat`),qi=c(),bt=i("p"),Wi=t("You can then sort by various strategies like cumtime, percall, or ncalls."),Yi=c(),F=i("img"),Zi=c(),Et=i("h2"),Ki=t("Line Profiler"),Qi=c(),xt=i("p"),Ji=t(`Line profiler is more granular method of profiling functions, and works by
      going line-by-line. Use it primarily as a tool for profiling after
      determining which functions you need to understand more.`),Xi=c(),Pt=i("p"),er=t("To use it. First install:"),tr=c(),kt=i("pre"),pe=i("code"),nr=t("$ pip install line_profiler"),or=c(),C=i("p"),ir=t("Then mark the function you want to profile with the decorator "),Bt=i("code"),rr=t("@profile"),ar=t(`, then run it with the following command (details
      `),$=i("a"),sr=t("here"),lr=t("):"),cr=c(),Mt=i("pre"),de=i("code"),hr=t("$ kernprof -l -v matmul_line_profiler.py"),mr=c(),zt=i("p"),ur=t(`Of note, this takes significantly more time, so you may want to edit the
      original script to use a 300 × 300 matrix instead for the multiplication.
      Here is what the output looks like for a simple example:`),pr=c(),fe=i("pre"),At=i("code"),dr=t(`Total time: 13.9963 s
File: matmul_line_profiler.py
Function: multiply_matrices_pure_python at line 25

Line #      Hits         Time  Per Hit   % Time  Line Contents
==============================================================
    25                                           @profile
    26                                           def multiply_matrices_pure_python(A, B):
    27                                               """
    28                                               Multiplies two matrices using pure Python nested loops.
    29                                               
    30                                               Args:
    31                                                   A (list): First matrix (2D list)
    32                                                   B (list): Second matrix (2D list)
    33                                                   
    34                                               Returns:
    35                                                   list: Result matrix C where C = A * B
    36                                               """
    37                                               # Get the size of the matrices (assuming they are square and of the same size)
    38         1          1.0      1.0      0.0      size = len(A)
    39                                               
    40                                               # Initialize the result matrix with zeros
    41         1       1400.0   1400.0      0.0      C = [[0 for _ in range(size)] for _ in range(size)]
    42                                               
    43                                               # Perform matrix multiplication
    44                                               # Iterate through rows of A
    45       301        329.0      1.1      0.0      for i in range(size):
    46                                                   # Iterate through columns of B
    47     90300      22110.0      0.2      0.2          for j in range(size):
    48                                                       # Iterate through rows of B
    49  27090000    6350531.0      0.2     45.4              for k in range(size):
    50  27000000    7621961.0      0.3     54.5                  C[i][j] += A[i][k] * B[k][j]
    51                                                           
    52         1          6.0      6.0      0.0      return C`),fr=c(),Ct=i("p"),gr=t("How do we read this?"),yr=c(),v=i("ul"),ge=i("li"),Tt=i("strong"),_r=t("Line #:"),wr=t(" The line number in the source file"),vr=c(),ye=i("li"),It=i("strong"),br=t("Hits:"),Er=t(` Basically how many times this particular line was
        run`),xr=c(),_e=i("li"),Rt=i("strong"),Pr=t("Time:"),kr=t(` Amount of time units is an arbitrary measurement (different
        OSes use diff measurements), this is useful for comparing different lines,
        and also you can calculate the exact units by comparing with the total time.`),Br=c(),we=i("li"),Ot=i("strong"),Mr=t("Per Hit:"),zr=t(` Time / Hits, basically how many time units per
        hit took on average.`),Ar=c(),ve=i("li"),jt=i("strong"),Cr=t("% Time:"),Tr=t(` what percentage of the total time was spent in this
        line.`),Ir=c(),N=i("p"),Rr=t(`Afterwards, if you want even more granular flow, for different programs,
      it's possible that the program can be rewritten in as to break up
      different steps or converting each line into it's own unit. Such as
      breaking up any ands and or statements in a way that allows you to, more
      easily, dissect the counts. Afterwards, you can also test individual lines
      or components with the
      `),Lt=i("code"),Or=t("%timeit"),jr=t(" components."),Lr=c(),St=i("h2"),Sr=t("Memory Profiler"),Dr=c(),Dt=i("p"),Hr=t(`Memory usage helps you 1. Minimize RAM usage and 2. Optimize RAM vs. CPU
      cycles (i.e. determining if RAM caching makes sense). Memory profiler is
      similar but slower than line profiler. Memory profiling is generally much
      less clear-cut than line profiling. In general, it is much harder to
      pinpoint why/where memory is allocated for what, and it's difficult to see
      cascading effects. Instead, focus on hot spots and trends rather than line
      by line.`),Fr=c(),Ht=i("p"),$r=t("To use it. First install it using:"),Nr=c(),Ft=i("pre"),be=i("code"),Gr=t("$ pip install memory_profiler"),Vr=c(),G=i("p"),Ur=t("You use the same "),$t=i("code"),qr=t("@profile"),Wr=t(" header as before. So simply call:"),Yr=c(),Nt=i("pre"),Ee=i("code"),Zr=t("$ python -m memory_profiler matmul_profiler.py"),Kr=c(),Gt=i("p"),Qr=t("The result looks something like this:"),Jr=c(),xe=i("pre"),Vt=i("code"),Xr=t(`Line #    Mem usage    Increment  Occurrences   Line Contents
=============================================================
    25   53.172 MiB   53.172 MiB           1   @profile
    26                                         def multiply_matrices_pure_python(A, B):
    27                                             """
    28                                             Multiplies two matrices using pure Python nested loops.
    29                                             
    30                                             Args:
    31                                                 A (list): First matrix (2D list)
    32                                                 B (list): Second matrix (2D list)
    33                                                 
    34                                             Returns:
    35                                                 list: Result matrix C where C = A * B
    36                                             """
    37                                             # Get the size of the matrices (assuming they are square and of the same size)
    38   53.172 MiB    0.000 MiB           1       size = len(A)
    39                                             
    40                                             # Initialize the result matrix with zeros
    41   53.234 MiB    0.062 MiB       10101       C = [[0 for _ in range(size)] for _ in range(size)]
    42                                             
    43                                             # Perform matrix multiplication
    44                                             # Iterate through rows of A
    45   53.672 MiB    0.000 MiB         101       for i in range(size):
    46                                                 # Iterate through columns of B
    47   53.672 MiB    0.000 MiB       10100           for j in range(size):
    48                                                     # Iterate through rows of B
    49   53.672 MiB    0.031 MiB     1010000               for k in range(size):
    50   53.672 MiB    0.406 MiB     1000000                   C[i][j] += A[i][k] * B[k][j]
    51                                                         
    52   53.672 MiB    0.000 MiB           1       return C`),ea=c(),Ut=i("p"),ta=t(`However, we can make a RAM memory for speed tradeoff by storing the rows
      and the columns so the number of calls for each row is not significantly
      more.`),na=c(),qt=i("p"),oa=t(`This new implementation with caching the rows of the first matrix and the
      columns of the second matrix is 0.5 seconds faster for a 300 by 300
      matrix, by using slightly more RAM (on the order of 0.1 MiB) allowing for
      faster I/O operations. This makes sense as the primary indexing is only a
      small bottleneck compared to the actual mathematical operations.`),ia=c(),Pe=i("pre"),Wt=i("code"),ra=t(`Total time: 13.4543 s
File: matmul_profiler_RAM.py
Function: multiply_matrices_cached_vectors at line 25

Line #      Hits         Time  Per Hit   % Time  Line Contents
==============================================================
...
    46  27090000    6321061.0      0.2     47.0              for k in range(size):
    47  27000000    7077302.0      0.3     52.6                  C[i][j] += A_row[k] * B_col[k]
    48         1          1.0      1.0      0.0      return C`),aa=c(),Yt=i("p"),sa=t("Here is the new RAM:"),la=c(),ke=i("pre"),Zt=i("code"),ca=t(`Line #    Mem usage    Increment  Occurrences   Line Contents
=============================================================
    25   53.234 MiB   53.234 MiB           1   @profile
    26                                         def multiply_matrices_cached_vectors(A, B):
    27                                             """
    28                                             Cache entire rows/columns to avoid repeated indexing.
    29                                             Memory cost: Extra storage for row/column vectors
    30                                             Speed gain: 30-50% faster due to reduced indexing overhead
    31                                             """
    32   53.234 MiB    0.000 MiB           1       size = len(A)
    33   53.312 MiB    0.078 MiB       10101       C = [[0 for _ in range(size)] for _ in range(size)]
    34                                             
    35                                             # Pre-extract all rows of A (extra memory)
    36   53.312 MiB    0.000 MiB         101       A_rows = [A[i] for i in range(size)]
    37                                             
    38                                             # Pre-extract all columns of B (extra memory)  
    39   53.391 MiB    0.078 MiB       10101       B_cols = [[B[k][j] for k in range(size)] for j in range(size)]
    40                                             
    41   53.766 MiB    0.000 MiB         101       for i in range(size):
    42   53.766 MiB    0.000 MiB         100           A_row = A_rows[i]  # Cache the row
    43   53.766 MiB    0.000 MiB       10100           for j in range(size):
    44   53.766 MiB    0.000 MiB       10000               B_col = B_cols[j]  # Cache the column
    45                                                     # Now do dot product of cached vectors
    46   53.766 MiB    0.062 MiB     1010000               for k in range(size):
    47   53.766 MiB    0.312 MiB     1000000                   C[i][j] += A_row[k] * B_col[k]
    48   53.766 MiB    0.000 MiB           1       return C`),ha=c(),I=i("div"),R=i("p"),ma=t("Thanks to "),V=i("a"),ua=t("David Zhang"),pa=t(" for the helpful comments."),da=c(),Be=i("p"),fa=t("Questions or feedback? Feel free to reach out!"),this.h()},l(f){Nl(_.$$.fragment,f),T=h(f),u=r(f,"ARTICLE",{class:!0});var d=a(u);b=r(d,"DIV",{class:!0});var Ya=a(b);O=r(Ya,"A",{href:!0,class:!0});var Za=a(O);rn=n(Za,"← Back to Python"),Za.forEach(o),Ya.forEach(o),an=h(d),q=r(d,"H1",{class:!0});var Ka=a(q);sn=n(Ka,"HPP Blog #1: Python Profiling"),Ka.forEach(o),ln=h(d),W=r(d,"DIV",{class:!0});var Qa=a(W);cn=n(Qa,"September 5, 2025 • 15 min read"),Qa.forEach(o),hn=h(d),Y=r(d,"DIV",{class:!0});var Ja=a(Y);mn=n(Ja,'"Premature optimization is the root of all evil" - Donald Knuth'),Ja.forEach(o),un=h(d),s=r(d,"DIV",{class:!0});var l=a(s);Ie=r(l,"P",{});var Xa=a(Ie);pn=n(Xa,`In this post, which will be the first in a series, I will go over the
      basics of Python profiling in a way that you were probably never taught in
      school! I was never taught this explicitly, and only through interactions
      with people much smarter than me did I recognize its importance.`),Xa.forEach(o),dn=h(l),Re=r(l,"H2",{});var es=a(Re);fn=n(es,"Why is Profiling Important?"),es.forEach(o),gn=h(l),Oe=r(l,"P",{});var ts=a(Oe);yn=n(ts,`At the moment, these are the reasons why I personally think profiling is
      becoming more important:`),ts.forEach(o),_n=h(l),M=r(l,"UL",{});var Me=a(M);Z=r(Me,"LI",{});var ga=a(Z);je=r(ga,"STRONG",{});var ns=a(je);wn=n(ns,"Don't over-optimize the wrong thing."),ns.forEach(o),vn=n(ga,` Most problems have
        several approaches with very different ceilings. Meticulous tuning of a weak
        solution rarely beats starting with a better design. Profile to see which
        path deserves the effort.`),ga.forEach(o),bn=h(Me),K=r(Me,"LI",{});var ya=a(K);Le=r(ya,"STRONG",{});var os=a(Le);En=n(os,"Fix what you believe is the problem."),os.forEach(o),xn=n(ya,` Oftentimes, you skip
        profiling and guess, but for a program of any significant complexity, you
        will probably fix the wrong thing. Profiling oftentimes can actually be the
        "lazy" and more efficient solution. Don't spend hours speeding up a part
        of your code that's already fast, only to realize that the slowest part was
        somewhere else instead.`),ya.forEach(o),Pn=h(Me),Q=r(Me,"LI",{});var _a=a(Q);Se=r(_a,"STRONG",{});var is=a(Se);kn=n(is,"Rise of vibe coding."),is.forEach(o),Bn=n(_a,` Vibe coding/AI coding is not inherently
        bad, but, due to the inherent stochastic nature of LLMs, you're probably
        getting a very suboptimal initial solution, that you may not even understand
        is bad.`),_a.forEach(o),Me.forEach(o),Mn=h(l),De=r(l,"P",{});var rs=a(De);zn=n(rs,`As a heads-up, the implementation that is used here is deliberately the
      simplest/least-optimal one. Feel free to follow along in this jupyter
      notebook.`),rs.forEach(o),An=h(l),He=r(l,"H2",{});var as=a(He);Cn=n(as,"Print & Time Statements"),as.forEach(o),Tn=h(l),Fe=r(l,"P",{});var ss=a(Fe);In=n(ss,`The simplest way to profile would most definitely be to just use time and
      print statements. Print statements are already super useful in debugging,
      so why not profiling as well?`),ss.forEach(o),Rn=h(l),$e=r(l,"P",{});var ls=a($e);On=n(ls,`The simplest way to go about using time and print statements is simply
      something along the lines of:`),ls.forEach(o),jn=h(l),Ne=r(l,"PRE",{});var cs=a(Ne);E=r(cs,"CODE",{class:!0});var ze=a(E);Ln=n(ze,`t1 = time.time()
result = fn(*args, **kwargs)
t2 = time.time()
print(f"Function took `),Sn=n(ze,Ra),Dn=n(ze,"t2-t1"),Hn=n(ze,Oa),Fn=n(ze,' seconds")'),ze.forEach(o),cs.forEach(o),$n=h(l),Ge=r(l,"P",{});var hs=a(Ge);Nn=n(hs,`A better way of doing this is to define some type of decorator in order to
      automate our timing measurements.`),hs.forEach(o),Gn=h(l),Ve=r(l,"PRE",{});var ms=a(Ve);y=r(ms,"CODE",{class:!0});var P=a(y);Vn=n(P,`from functools import wraps 

def timePrintFn(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = fn(*args, **kwargs)
        end = time.time()
        print(f"`),Un=n(P,ja),qn=n(P,"fn.__name__"),Wn=n(P,La),Yn=n(P," took "),Zn=n(P,Sa),Kn=n(P,"end-start:.4f"),Qn=n(P,Da),Jn=n(P,` seconds")
        return result
    return wrapper`),P.forEach(o),ms.forEach(o),Xn=h(l),Ue=r(l,"P",{});var us=a(Ue);eo=n(us,`Of note, on other texts, such as the textbook High Performance Python,
      there is a reference to the decorator being slightly faster, however, this
      is likely just noise in the measurement and doesn't seem to consistently
      be the case. In fact, it is the other way around, the decorator adds
      additional function overhead and thus should be slightly slower.
      Individual test cases may appear faster/slower when comparing the two
      because of statistical noise, but averaged over long time-series the
      decorator should be, on-average, slower.`),us.forEach(o),to=h(l),z=r(l,"P",{});var Ae=a(z);no=n(Ae,"Another general method for doing this is using the "),qe=r(Ae,"CODE",{});var ps=a(qe);oo=n(ps,"%timeit"),ps.forEach(o),io=n(Ae,`
      method. The `),We=r(Ae,"CODE",{});var ds=a(We);ro=n(ds,"%timeit"),ds.forEach(o),ao=n(Ae,`
      method is simply using the Python command and running it in the command line.
      With two major flags, you choose how many times to call the function consecutively
      where the final time is the total time for all the calls divided by the number
      of calls. Then you specify the number of runs which is the number of times
      the above operation is conducted.`),Ae.forEach(o),so=h(l),Ye=r(l,"PRE",{});var fs=a(Ye);J=r(fs,"CODE",{class:!0});var gs=a(J);lo=n(gs,`N = 1  # of times run consecutively per run
R = 1  # of runs 

%timeit -n N -r R multiply_matrices_pure_python(matrix_a, matrix_b)`),gs.forEach(o),fs.forEach(o),co=h(l),Ze=r(l,"P",{});var ys=a(Ze);ho=n(ys,"This then returns the fastest of all the runs, or the outer loop."),ys.forEach(o),mo=h(l),j=r(l,"P",{});var Qt=a(j);uo=n(Qt,"You can also try "),Ke=r(Qt,"CODE",{});var _s=a(Ke);po=n(_s,"%%time"),_s.forEach(o),fo=n(Qt,`, which basically times an entire cell
      in a jupyter notebook.`),Qt.forEach(o),go=h(l),Qe=r(l,"P",{});var ws=a(Qe);yo=n(ws,`First, when measuring functions this way, it's helpful to remove the first
      test-case time because of import statements and other noise present in the
      first measurement. A warm-up run of the function/code is helpful to run
      before actual testing. Then you should run it a couple of times, usually
      around 5, depending on what the use case is of course, and how fast you
      want results.`),ws.forEach(o),_o=h(l),Je=r(l,"H2",{});var vs=a(Je);wo=n(vs,"cProfile"),vs.forEach(o),vo=h(l),Xe=r(l,"P",{});var bs=a(Xe);bo=n(bs,`cProfile is the faster of the two profilers in the standard Python library
      because it's written in C.`),bs.forEach(o),Eo=h(l),et=r(l,"P",{});var Es=a(et);xo=n(Es,`Before you profile anything, you should probably first make a guess, or
      hypothesis, about the speed of different parts of your code. This helps
      you figure out where you are consistently wrong at guessing the speed of a
      program and improves your coding intuition.`),Es.forEach(o),Po=h(l),L=r(l,"P",{});var Jt=a(L);ko=n(Jt,`One of the ways to use cProfile is as a command-line argument. The CLI
      definition can be found
      `),S=r(Jt,"A",{href:!0,class:!0});var xs=a(S);Bo=n(xs,"here"),xs.forEach(o),Mo=n(Jt,`
      but the general gist is:`),Jt.forEach(o),zo=h(l),tt=r(l,"PRE",{});var Ps=a(tt);X=r(Ps,"CODE",{class:!0});var ks=a(X);Ao=n(ks,"$ python -m cProfile [options] script.py [script_args...]"),ks.forEach(o),Ps.forEach(o),Co=h(l),nt=r(l,"P",{});var Bs=a(nt);To=n(Bs,`The one that I think is most useful is to use the cumulative flag, which
      gets you the total time spent within a specific function.`),Bs.forEach(o),Io=h(l),ot=r(l,"PRE",{});var Ms=a(ot);ee=r(Ms,"CODE",{class:!0});var zs=a(ee);Ro=n(zs,"$ python -m cProfile -s cumulative script.py [script_args...]"),zs.forEach(o),Ms.forEach(o),Oo=h(l),it=r(l,"P",{});var As=a(it);jo=n(As,`If you are in the repo, and run it on the matmul.py script, you will get
      something like this:`),As.forEach(o),Lo=h(l),te=r(l,"PRE",{class:!0});var Cs=a(te);x=r(Cs,"CODE",{});var U=a(x);So=n(U,`$ USER Profiling % python -m cProfile -s cumulative matmul.py 
Generating two 1000x1000 matrices...
Sample from matrix A (top-left 3x3):
[56, 77, 49]
[74, 21, 89]
[19, 57, 31]
Sample from matrix B (top-left 3x3):
[25, 11, 37]
[13, 58, 50]
[55, 98, 21]
Starting matrix multiplication...
Matrix multiplication completed!
Result matrix size: 1000x1000
Sample from result matrix (top-left 3x3):
[2488413, 2460504, 2424927]
[2501376, 2440835, 2462731]
[2465470, 2417773, 2460009]
         16539727 function calls (16539695 primitive calls) in 123.430 seconds

   Ordered by: cumulative time

   ncalls  tottime  percall  cumtime  percall filename:lineno(function)
      3/1    0.000    0.000  123.457  123.457 `),Do=n(U,Ha),Ho=n(U,"built-in method builtins.exec"),Fo=n(U,Fa),$o=n(U,`
        1    0.007    0.007  123.457  123.457 matmul.py:1(`),ne=r(U,"MODULE",{});var wa=a(ne);No=n(wa,`)
        1    0.000    0.000  123.444  123.444 matmul.py:55(main)
        1  121.197  121.197  121.224  121.224 matmul.py:26(multiply_matrices_pure_python)
        2    0.001    0.001    2.220    1.110 matmul.py:9(generate_matrix)
     2000    0.258    0.000    2.219    0.001 matmul.py:21(`),p=r(wa,"LISTCOMP",{});var g=a(p);Go=n(g,`)
  2000000    0.302    0.000    1.961    0.000 random.py:358(randint)
  2000000    0.806    0.000    1.659    0.000 random.py:284(randrange)
  2000000    0.513    0.000    0.673    0.000 random.py:235(_randbelow_with_getrandbits)
  6000000    0.180    0.000    0.180    0.000 `),Vo=n(g,$a),Uo=n(g,"built-in method _operator.index"),qo=n(g,Na),Wo=n(g,`
  2534239    0.094    0.000    0.094    0.000 `),Yo=n(g,Ga),Zo=n(g,"method 'getrandbits' of '_random.Random' objects"),Ko=n(g,Va),Qo=n(g,`
  2000000    0.066    0.000    0.066    0.000 `),Jo=n(g,Ua),Xo=n(g,"method 'bit_length' of 'int' objects"),ei=n(g,qa),ti=n(g,`
        1    0.001    0.001    0.027    0.027 matmul.py:41(`),oe=r(g,"LISTCOMP",{});var va=a(oe);ni=n(va,`)
      6/1    0.000    0.000    0.005    0.005 `),D=r(va,"FROZEN",{"importlib._bootstrap":!0});var ba=a(D);oi=n(ba,`:1167(_find_and_load)
      6/1    0.000    0.000    0.005    0.005 `),ie=r(ba,"FROZEN",{"importlib._bootstrap":!0});var Ts=a(ie);ii=n(Ts,":1122(_find_and_load_unlocked)"),Ts.forEach(o),ba.forEach(o),va.forEach(o),g.forEach(o),wa.forEach(o),U.forEach(o),Cs.forEach(o),ri=h(l),rt=r(l,"P",{});var Is=a(rt);ai=n(Is,`If you compare, we've about doubled our time (this new one took ~120
      seconds) just simply because we are profiling the script itself. As we've
      sorted by execution time, we can assess where it's mostly spent. Here is
      how to go about reading this:`),Is.forEach(o),si=h(l),w=r(l,"UL",{});var k=a(w);re=r(k,"LI",{});var Ea=a(re);at=r(Ea,"STRONG",{});var Rs=a(at);li=n(Rs,"ncalls:"),Rs.forEach(o),ci=n(Ea,` total number of calls. The first number is the total
        number of calls, while the second number is the primitive calls––basically
        any call that was not recursive`),Ea.forEach(o),hi=h(k),ae=r(k,"LI",{});var xa=a(ae);st=r(xa,"STRONG",{});var Os=a(st);mi=n(Os,"tottime:"),Os.forEach(o),ui=n(xa,` time spent in that function excluding the function
        call itself`),xa.forEach(o),pi=h(k),se=r(k,"LI",{});var Pa=a(se);lt=r(Pa,"STRONG",{});var js=a(lt);di=n(js,"percall:"),js.forEach(o),fi=n(Pa," tottime/ncalls"),Pa.forEach(o),gi=h(k),le=r(k,"LI",{});var ka=a(le);ct=r(ka,"STRONG",{});var Ls=a(ct);yi=n(Ls,"cumtime:"),Ls.forEach(o),_i=n(ka," across all sub-functions called included"),ka.forEach(o),wi=h(k),ce=r(k,"LI",{});var Ba=a(ce);ht=r(Ba,"STRONG",{});var Ss=a(ht);vi=n(Ss,"percall:"),Ss.forEach(o),bi=n(Ba," cumtime/ncalls"),Ba.forEach(o),k.forEach(o),Ei=h(l),mt=r(l,"P",{});var Ds=a(mt);xi=n(Ds,`Looking at the above code, it's clear that the heavy lifting is being done
      primarily by the multiply_matrices which makes sense as it's 121 seconds.
      Also because tottime ≈ cumtime, we can see that it's not calling expensive
      functions, and most of the work is being done in these nested for-loops
      which is crushing the performance. We can also read the matrix generation
      runs, which call the generate_matrix and other which is relatively costly,
      but costly because of calls to other operations due to the delta in the
      tottime and cumtime values. It's clear that in the generation, randrange
      is the most expensive step as well, with each step adding a little bit of
      overhead.`),Ds.forEach(o),Pi=h(l),ut=r(l,"P",{});var Hs=a(ut);ki=n(Hs,`Then to get further analysis, we can run the following to save it into a
      statistics folder:`),Hs.forEach(o),Bi=h(l),pt=r(l,"PRE",{});var Fs=a(pt);he=r(Fs,"CODE",{class:!0});var $s=a(he);Mi=n($s,"$ python -m cProfile -o matmul.stats matmul.py"),$s.forEach(o),Fs.forEach(o),zi=h(l),A=r(l,"P",{});var Ce=a(A);Ai=n(Ce,`After doing this, feel free to check out the jupyter notebook on
      profiling. Then afterwards you can see that we can call `),dt=r(Ce,"CODE",{});var Ns=a(dt);Ci=n(Ns,"print_callers()"),Ns.forEach(o),Ti=n(Ce,`
      as well as `),ft=r(Ce,"CODE",{});var Gs=a(ft);Ii=n(Gs,"print_callees()"),Gs.forEach(o),Ri=n(Ce,`. This gives you a list on the left
      of which functions called which other functions and how many times and
      vice versa. The caller and callees list may be extremely helpful when
      looking for cached calls or when something is called much more than you
      would expect.`),Ce.forEach(o),Oi=h(l),gt=r(l,"H2",{});var Vs=a(gt);ji=n(Vs,"SnakeViz"),Vs.forEach(o),Li=h(l),yt=r(l,"P",{});var Us=a(yt);Si=n(Us,`SnakeViz is a way to draw the output of cProfile as flame graph. The
      larger the box, the longer that specific part of the code takes to run.
      This package you need to:`),Us.forEach(o),Di=h(l),_t=r(l,"PRE",{});var qs=a(_t);me=r(qs,"CODE",{class:!0});var Ws=a(me);Hi=n(Ws,"$ pip install snakeviz"),Ws.forEach(o),qs.forEach(o),Fi=h(l),H=r(l,"P",{});var Xt=a(H);$i=n(Xt,"Then run "),wt=r(Xt,"CODE",{});var Ys=a(wt);Ni=n(Ys,"!snakeviz"),Ys.forEach(o),Gi=n(Xt,` in jupyter notebook or then calling it in CLI
      in the following form:`),Xt.forEach(o),Vi=h(l),vt=r(l,"PRE",{});var Zs=a(vt);ue=r(Zs,"CODE",{class:!0});var Ks=a(ue);Ui=n(Ks,`$ snakeviz matmul.prof
# Or 
$ snakeviz matmul.stat`),Ks.forEach(o),Zs.forEach(o),qi=h(l),bt=r(l,"P",{});var Qs=a(bt);Wi=n(Qs,"You can then sort by various strategies like cumtime, percall, or ncalls."),Qs.forEach(o),Yi=h(l),F=r(l,"IMG",{src:!0,alt:!0,class:!0}),Zi=h(l),Et=r(l,"H2",{});var Js=a(Et);Ki=n(Js,"Line Profiler"),Js.forEach(o),Qi=h(l),xt=r(l,"P",{});var Xs=a(xt);Ji=n(Xs,`Line profiler is more granular method of profiling functions, and works by
      going line-by-line. Use it primarily as a tool for profiling after
      determining which functions you need to understand more.`),Xs.forEach(o),Xi=h(l),Pt=r(l,"P",{});var el=a(Pt);er=n(el,"To use it. First install:"),el.forEach(o),tr=h(l),kt=r(l,"PRE",{});var tl=a(kt);pe=r(tl,"CODE",{class:!0});var nl=a(pe);nr=n(nl,"$ pip install line_profiler"),nl.forEach(o),tl.forEach(o),or=h(l),C=r(l,"P",{});var Te=a(C);ir=n(Te,"Then mark the function you want to profile with the decorator "),Bt=r(Te,"CODE",{});var ol=a(Bt);rr=n(ol,"@profile"),ol.forEach(o),ar=n(Te,`, then run it with the following command (details
      `),$=r(Te,"A",{href:!0,class:!0});var il=a($);sr=n(il,"here"),il.forEach(o),lr=n(Te,"):"),Te.forEach(o),cr=h(l),Mt=r(l,"PRE",{});var rl=a(Mt);de=r(rl,"CODE",{class:!0});var al=a(de);hr=n(al,"$ kernprof -l -v matmul_line_profiler.py"),al.forEach(o),rl.forEach(o),mr=h(l),zt=r(l,"P",{});var sl=a(zt);ur=n(sl,`Of note, this takes significantly more time, so you may want to edit the
      original script to use a 300 × 300 matrix instead for the multiplication.
      Here is what the output looks like for a simple example:`),sl.forEach(o),pr=h(l),fe=r(l,"PRE",{class:!0});var ll=a(fe);At=r(ll,"CODE",{});var cl=a(At);dr=n(cl,`Total time: 13.9963 s
File: matmul_line_profiler.py
Function: multiply_matrices_pure_python at line 25

Line #      Hits         Time  Per Hit   % Time  Line Contents
==============================================================
    25                                           @profile
    26                                           def multiply_matrices_pure_python(A, B):
    27                                               """
    28                                               Multiplies two matrices using pure Python nested loops.
    29                                               
    30                                               Args:
    31                                                   A (list): First matrix (2D list)
    32                                                   B (list): Second matrix (2D list)
    33                                                   
    34                                               Returns:
    35                                                   list: Result matrix C where C = A * B
    36                                               """
    37                                               # Get the size of the matrices (assuming they are square and of the same size)
    38         1          1.0      1.0      0.0      size = len(A)
    39                                               
    40                                               # Initialize the result matrix with zeros
    41         1       1400.0   1400.0      0.0      C = [[0 for _ in range(size)] for _ in range(size)]
    42                                               
    43                                               # Perform matrix multiplication
    44                                               # Iterate through rows of A
    45       301        329.0      1.1      0.0      for i in range(size):
    46                                                   # Iterate through columns of B
    47     90300      22110.0      0.2      0.2          for j in range(size):
    48                                                       # Iterate through rows of B
    49  27090000    6350531.0      0.2     45.4              for k in range(size):
    50  27000000    7621961.0      0.3     54.5                  C[i][j] += A[i][k] * B[k][j]
    51                                                           
    52         1          6.0      6.0      0.0      return C`),cl.forEach(o),ll.forEach(o),fr=h(l),Ct=r(l,"P",{});var hl=a(Ct);gr=n(hl,"How do we read this?"),hl.forEach(o),yr=h(l),v=r(l,"UL",{});var B=a(v);ge=r(B,"LI",{});var Ma=a(ge);Tt=r(Ma,"STRONG",{});var ml=a(Tt);_r=n(ml,"Line #:"),ml.forEach(o),wr=n(Ma," The line number in the source file"),Ma.forEach(o),vr=h(B),ye=r(B,"LI",{});var za=a(ye);It=r(za,"STRONG",{});var ul=a(It);br=n(ul,"Hits:"),ul.forEach(o),Er=n(za,` Basically how many times this particular line was
        run`),za.forEach(o),xr=h(B),_e=r(B,"LI",{});var Aa=a(_e);Rt=r(Aa,"STRONG",{});var pl=a(Rt);Pr=n(pl,"Time:"),pl.forEach(o),kr=n(Aa,` Amount of time units is an arbitrary measurement (different
        OSes use diff measurements), this is useful for comparing different lines,
        and also you can calculate the exact units by comparing with the total time.`),Aa.forEach(o),Br=h(B),we=r(B,"LI",{});var Ca=a(we);Ot=r(Ca,"STRONG",{});var dl=a(Ot);Mr=n(dl,"Per Hit:"),dl.forEach(o),zr=n(Ca,` Time / Hits, basically how many time units per
        hit took on average.`),Ca.forEach(o),Ar=h(B),ve=r(B,"LI",{});var Ta=a(ve);jt=r(Ta,"STRONG",{});var fl=a(jt);Cr=n(fl,"% Time:"),fl.forEach(o),Tr=n(Ta,` what percentage of the total time was spent in this
        line.`),Ta.forEach(o),B.forEach(o),Ir=h(l),N=r(l,"P",{});var en=a(N);Rr=n(en,`Afterwards, if you want even more granular flow, for different programs,
      it's possible that the program can be rewritten in as to break up
      different steps or converting each line into it's own unit. Such as
      breaking up any ands and or statements in a way that allows you to, more
      easily, dissect the counts. Afterwards, you can also test individual lines
      or components with the
      `),Lt=r(en,"CODE",{});var gl=a(Lt);Or=n(gl,"%timeit"),gl.forEach(o),jr=n(en," components."),en.forEach(o),Lr=h(l),St=r(l,"H2",{});var yl=a(St);Sr=n(yl,"Memory Profiler"),yl.forEach(o),Dr=h(l),Dt=r(l,"P",{});var _l=a(Dt);Hr=n(_l,`Memory usage helps you 1. Minimize RAM usage and 2. Optimize RAM vs. CPU
      cycles (i.e. determining if RAM caching makes sense). Memory profiler is
      similar but slower than line profiler. Memory profiling is generally much
      less clear-cut than line profiling. In general, it is much harder to
      pinpoint why/where memory is allocated for what, and it's difficult to see
      cascading effects. Instead, focus on hot spots and trends rather than line
      by line.`),_l.forEach(o),Fr=h(l),Ht=r(l,"P",{});var wl=a(Ht);$r=n(wl,"To use it. First install it using:"),wl.forEach(o),Nr=h(l),Ft=r(l,"PRE",{});var vl=a(Ft);be=r(vl,"CODE",{class:!0});var bl=a(be);Gr=n(bl,"$ pip install memory_profiler"),bl.forEach(o),vl.forEach(o),Vr=h(l),G=r(l,"P",{});var tn=a(G);Ur=n(tn,"You use the same "),$t=r(tn,"CODE",{});var El=a($t);qr=n(El,"@profile"),El.forEach(o),Wr=n(tn," header as before. So simply call:"),tn.forEach(o),Yr=h(l),Nt=r(l,"PRE",{});var xl=a(Nt);Ee=r(xl,"CODE",{class:!0});var Pl=a(Ee);Zr=n(Pl,"$ python -m memory_profiler matmul_profiler.py"),Pl.forEach(o),xl.forEach(o),Kr=h(l),Gt=r(l,"P",{});var kl=a(Gt);Qr=n(kl,"The result looks something like this:"),kl.forEach(o),Jr=h(l),xe=r(l,"PRE",{class:!0});var Bl=a(xe);Vt=r(Bl,"CODE",{});var Ml=a(Vt);Xr=n(Ml,`Line #    Mem usage    Increment  Occurrences   Line Contents
=============================================================
    25   53.172 MiB   53.172 MiB           1   @profile
    26                                         def multiply_matrices_pure_python(A, B):
    27                                             """
    28                                             Multiplies two matrices using pure Python nested loops.
    29                                             
    30                                             Args:
    31                                                 A (list): First matrix (2D list)
    32                                                 B (list): Second matrix (2D list)
    33                                                 
    34                                             Returns:
    35                                                 list: Result matrix C where C = A * B
    36                                             """
    37                                             # Get the size of the matrices (assuming they are square and of the same size)
    38   53.172 MiB    0.000 MiB           1       size = len(A)
    39                                             
    40                                             # Initialize the result matrix with zeros
    41   53.234 MiB    0.062 MiB       10101       C = [[0 for _ in range(size)] for _ in range(size)]
    42                                             
    43                                             # Perform matrix multiplication
    44                                             # Iterate through rows of A
    45   53.672 MiB    0.000 MiB         101       for i in range(size):
    46                                                 # Iterate through columns of B
    47   53.672 MiB    0.000 MiB       10100           for j in range(size):
    48                                                     # Iterate through rows of B
    49   53.672 MiB    0.031 MiB     1010000               for k in range(size):
    50   53.672 MiB    0.406 MiB     1000000                   C[i][j] += A[i][k] * B[k][j]
    51                                                         
    52   53.672 MiB    0.000 MiB           1       return C`),Ml.forEach(o),Bl.forEach(o),ea=h(l),Ut=r(l,"P",{});var zl=a(Ut);ta=n(zl,`However, we can make a RAM memory for speed tradeoff by storing the rows
      and the columns so the number of calls for each row is not significantly
      more.`),zl.forEach(o),na=h(l),qt=r(l,"P",{});var Al=a(qt);oa=n(Al,`This new implementation with caching the rows of the first matrix and the
      columns of the second matrix is 0.5 seconds faster for a 300 by 300
      matrix, by using slightly more RAM (on the order of 0.1 MiB) allowing for
      faster I/O operations. This makes sense as the primary indexing is only a
      small bottleneck compared to the actual mathematical operations.`),Al.forEach(o),ia=h(l),Pe=r(l,"PRE",{class:!0});var Cl=a(Pe);Wt=r(Cl,"CODE",{});var Tl=a(Wt);ra=n(Tl,`Total time: 13.4543 s
File: matmul_profiler_RAM.py
Function: multiply_matrices_cached_vectors at line 25

Line #      Hits         Time  Per Hit   % Time  Line Contents
==============================================================
...
    46  27090000    6321061.0      0.2     47.0              for k in range(size):
    47  27000000    7077302.0      0.3     52.6                  C[i][j] += A_row[k] * B_col[k]
    48         1          1.0      1.0      0.0      return C`),Tl.forEach(o),Cl.forEach(o),aa=h(l),Yt=r(l,"P",{});var Il=a(Yt);sa=n(Il,"Here is the new RAM:"),Il.forEach(o),la=h(l),ke=r(l,"PRE",{class:!0});var Rl=a(ke);Zt=r(Rl,"CODE",{});var Ol=a(Zt);ca=n(Ol,`Line #    Mem usage    Increment  Occurrences   Line Contents
=============================================================
    25   53.234 MiB   53.234 MiB           1   @profile
    26                                         def multiply_matrices_cached_vectors(A, B):
    27                                             """
    28                                             Cache entire rows/columns to avoid repeated indexing.
    29                                             Memory cost: Extra storage for row/column vectors
    30                                             Speed gain: 30-50% faster due to reduced indexing overhead
    31                                             """
    32   53.234 MiB    0.000 MiB           1       size = len(A)
    33   53.312 MiB    0.078 MiB       10101       C = [[0 for _ in range(size)] for _ in range(size)]
    34                                             
    35                                             # Pre-extract all rows of A (extra memory)
    36   53.312 MiB    0.000 MiB         101       A_rows = [A[i] for i in range(size)]
    37                                             
    38                                             # Pre-extract all columns of B (extra memory)  
    39   53.391 MiB    0.078 MiB       10101       B_cols = [[B[k][j] for k in range(size)] for j in range(size)]
    40                                             
    41   53.766 MiB    0.000 MiB         101       for i in range(size):
    42   53.766 MiB    0.000 MiB         100           A_row = A_rows[i]  # Cache the row
    43   53.766 MiB    0.000 MiB       10100           for j in range(size):
    44   53.766 MiB    0.000 MiB       10000               B_col = B_cols[j]  # Cache the column
    45                                                     # Now do dot product of cached vectors
    46   53.766 MiB    0.062 MiB     1010000               for k in range(size):
    47   53.766 MiB    0.312 MiB     1000000                   C[i][j] += A_row[k] * B_col[k]
    48   53.766 MiB    0.000 MiB           1       return C`),Ol.forEach(o),Rl.forEach(o),l.forEach(o),ha=h(d),I=r(d,"DIV",{class:!0});var nn=a(I);R=r(nn,"P",{class:!0});var on=a(R);ma=n(on,"Thanks to "),V=r(on,"A",{href:!0,class:!0});var jl=a(V);ua=n(jl,"David Zhang"),jl.forEach(o),pa=n(on," for the helpful comments."),on.forEach(o),da=h(nn),Be=r(nn,"P",{class:!0});var Ll=a(Be);fa=n(Ll,"Questions or feedback? Feel free to reach out!"),Ll.forEach(o),nn.forEach(o),d.forEach(o),this.h()},h(){m(O,"href","/python"),m(O,"class","text-blue-600 hover:underline text-sm"),m(b,"class","mb-8"),m(q,"class","text-3xl font-bold mb-4"),m(W,"class","text-sm text-neutral-500 mb-8"),m(Y,"class","text-lg text-neutral-700 mb-8 leading-relaxed italic"),m(E,"class","language-python"),m(y,"class","language-python"),m(J,"class","language-python"),m(S,"href","https://docs.python.org/3/library/profile.html"),m(S,"class","text-blue-600 hover:underline"),m(X,"class","language-bash"),m(ee,"class","language-bash"),m(ie,"importlib._bootstrap",""),m(D,"importlib._bootstrap",""),m(te,"class","terminal"),m(he,"class","language-bash"),m(me,"class","language-bash"),m(ue,"class","language-bash"),Gl(F.src,Wa="/assets/images/Flame_graph.png")||m(F,"src",Wa),m(F,"alt","SnakeViz flame graph visualization"),m(F,"class","w-full rounded-lg shadow-lg my-6"),m(pe,"class","language-bash"),m($,"href","https://kernprof.readthedocs.io/en/latest/auto/kernprof.html"),m($,"class","text-blue-600 hover:underline"),m(de,"class","language-bash"),m(fe,"class","terminal"),m(be,"class","language-bash"),m(Ee,"class","language-bash"),m(xe,"class","terminal"),m(Pe,"class","terminal"),m(ke,"class","terminal"),m(s,"class","prose prose-neutral max-w-none"),m(V,"href","https://www.dkzhang.com/"),m(V,"class","text-blue-600 hover:underline"),m(R,"class","text-sm text-neutral-600 mb-4"),m(Be,"class","text-sm text-neutral-500"),m(I,"class","border-t pt-8 mt-12"),m(u,"class","layout-md py-12 mx-auto max-w-3xl px-6 svelte-1tg8pcv")},m(f,d){Vl(_,f,d),Sl(f,T,d),Sl(f,u,d),e(u,b),e(b,O),e(O,rn),e(u,an),e(u,q),e(q,sn),e(u,ln),e(u,W),e(W,cn),e(u,hn),e(u,Y),e(Y,mn),e(u,un),e(u,s),e(s,Ie),e(Ie,pn),e(s,dn),e(s,Re),e(Re,fn),e(s,gn),e(s,Oe),e(Oe,yn),e(s,_n),e(s,M),e(M,Z),e(Z,je),e(je,wn),e(Z,vn),e(M,bn),e(M,K),e(K,Le),e(Le,En),e(K,xn),e(M,Pn),e(M,Q),e(Q,Se),e(Se,kn),e(Q,Bn),e(s,Mn),e(s,De),e(De,zn),e(s,An),e(s,He),e(He,Cn),e(s,Tn),e(s,Fe),e(Fe,In),e(s,Rn),e(s,$e),e($e,On),e(s,jn),e(s,Ne),e(Ne,E),e(E,Ln),e(E,Sn),e(E,Dn),e(E,Hn),e(E,Fn),e(s,$n),e(s,Ge),e(Ge,Nn),e(s,Gn),e(s,Ve),e(Ve,y),e(y,Vn),e(y,Un),e(y,qn),e(y,Wn),e(y,Yn),e(y,Zn),e(y,Kn),e(y,Qn),e(y,Jn),e(s,Xn),e(s,Ue),e(Ue,eo),e(s,to),e(s,z),e(z,no),e(z,qe),e(qe,oo),e(z,io),e(z,We),e(We,ro),e(z,ao),e(s,so),e(s,Ye),e(Ye,J),e(J,lo),e(s,co),e(s,Ze),e(Ze,ho),e(s,mo),e(s,j),e(j,uo),e(j,Ke),e(Ke,po),e(j,fo),e(s,go),e(s,Qe),e(Qe,yo),e(s,_o),e(s,Je),e(Je,wo),e(s,vo),e(s,Xe),e(Xe,bo),e(s,Eo),e(s,et),e(et,xo),e(s,Po),e(s,L),e(L,ko),e(L,S),e(S,Bo),e(L,Mo),e(s,zo),e(s,tt),e(tt,X),e(X,Ao),e(s,Co),e(s,nt),e(nt,To),e(s,Io),e(s,ot),e(ot,ee),e(ee,Ro),e(s,Oo),e(s,it),e(it,jo),e(s,Lo),e(s,te),e(te,x),e(x,So),e(x,Do),e(x,Ho),e(x,Fo),e(x,$o),e(x,ne),e(ne,No),e(ne,p),e(p,Go),e(p,Vo),e(p,Uo),e(p,qo),e(p,Wo),e(p,Yo),e(p,Zo),e(p,Ko),e(p,Qo),e(p,Jo),e(p,Xo),e(p,ei),e(p,ti),e(p,oe),e(oe,ni),e(oe,D),e(D,oi),e(D,ie),e(ie,ii),e(s,ri),e(s,rt),e(rt,ai),e(s,si),e(s,w),e(w,re),e(re,at),e(at,li),e(re,ci),e(w,hi),e(w,ae),e(ae,st),e(st,mi),e(ae,ui),e(w,pi),e(w,se),e(se,lt),e(lt,di),e(se,fi),e(w,gi),e(w,le),e(le,ct),e(ct,yi),e(le,_i),e(w,wi),e(w,ce),e(ce,ht),e(ht,vi),e(ce,bi),e(s,Ei),e(s,mt),e(mt,xi),e(s,Pi),e(s,ut),e(ut,ki),e(s,Bi),e(s,pt),e(pt,he),e(he,Mi),e(s,zi),e(s,A),e(A,Ai),e(A,dt),e(dt,Ci),e(A,Ti),e(A,ft),e(ft,Ii),e(A,Ri),e(s,Oi),e(s,gt),e(gt,ji),e(s,Li),e(s,yt),e(yt,Si),e(s,Di),e(s,_t),e(_t,me),e(me,Hi),e(s,Fi),e(s,H),e(H,$i),e(H,wt),e(wt,Ni),e(H,Gi),e(s,Vi),e(s,vt),e(vt,ue),e(ue,Ui),e(s,qi),e(s,bt),e(bt,Wi),e(s,Yi),e(s,F),e(s,Zi),e(s,Et),e(Et,Ki),e(s,Qi),e(s,xt),e(xt,Ji),e(s,Xi),e(s,Pt),e(Pt,er),e(s,tr),e(s,kt),e(kt,pe),e(pe,nr),e(s,or),e(s,C),e(C,ir),e(C,Bt),e(Bt,rr),e(C,ar),e(C,$),e($,sr),e(C,lr),e(s,cr),e(s,Mt),e(Mt,de),e(de,hr),e(s,mr),e(s,zt),e(zt,ur),e(s,pr),e(s,fe),e(fe,At),e(At,dr),e(s,fr),e(s,Ct),e(Ct,gr),e(s,yr),e(s,v),e(v,ge),e(ge,Tt),e(Tt,_r),e(ge,wr),e(v,vr),e(v,ye),e(ye,It),e(It,br),e(ye,Er),e(v,xr),e(v,_e),e(_e,Rt),e(Rt,Pr),e(_e,kr),e(v,Br),e(v,we),e(we,Ot),e(Ot,Mr),e(we,zr),e(v,Ar),e(v,ve),e(ve,jt),e(jt,Cr),e(ve,Tr),e(s,Ir),e(s,N),e(N,Rr),e(N,Lt),e(Lt,Or),e(N,jr),e(s,Lr),e(s,St),e(St,Sr),e(s,Dr),e(s,Dt),e(Dt,Hr),e(s,Fr),e(s,Ht),e(Ht,$r),e(s,Nr),e(s,Ft),e(Ft,be),e(be,Gr),e(s,Vr),e(s,G),e(G,Ur),e(G,$t),e($t,qr),e(G,Wr),e(s,Yr),e(s,Nt),e(Nt,Ee),e(Ee,Zr),e(s,Kr),e(s,Gt),e(Gt,Qr),e(s,Jr),e(s,xe),e(xe,Vt),e(Vt,Xr),e(s,ea),e(s,Ut),e(Ut,ta),e(s,na),e(s,qt),e(qt,oa),e(s,ia),e(s,Pe),e(Pe,Wt),e(Wt,ra),e(s,aa),e(s,Yt),e(Yt,sa),e(s,la),e(s,ke),e(ke,Zt),e(Zt,ca),e(u,ha),e(u,I),e(I,R),e(R,ma),e(R,V),e(V,ua),e(R,pa),e(I,da),e(I,Be),e(Be,fa),Kt=!0},p:Ul,i(f){Kt||(ql(_.$$.fragment,f),Kt=!0)},o(f){Wl(_.$$.fragment,f),Kt=!1},d(f){Yl(_,f),f&&o(T),f&&o(u)}}}function Jl(Ia){return Zl(async()=>{if(typeof window<"u"&&!window.Prism){const _=document.createElement("link");_.rel="stylesheet",_.href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css",document.head.appendChild(_);const T=document.createElement("script");T.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js",T.onload=()=>{const u=document.createElement("script");u.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js",u.onload=()=>{const b=document.createElement("script");b.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-bash.min.js",b.onload=()=>{window.Prism.highlightAll()},document.head.appendChild(b)},document.head.appendChild(u)},document.head.appendChild(T)}}),[]}class tc extends Dl{constructor(_){super(),Hl(this,_,Jl,Ql,Fl,{})}}export{tc as default};
