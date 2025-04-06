# Symmetric Functions and Hall Polynomials II
## 6. Transition matrices

In this section we shall be dealing with matrices whose rows and columns are indexed by the partitions of a positive integer $n$. We shall regard the partitions of $n$ as arranged in reverse lexicographical order ( $\S 1$ ), so that ( $n$ ) comes first and ( $1^{n}$ ) comes last. It follows from (1.10) that $\lambda$ precedes $\mu$ if $\lambda \geqslant \mu$ (but not conversely). A matrix ( $M_{\lambda \mu}$ ) indexed by the partitions of $n$ will be said to be strictly upper triangular if $M_{\lambda \mu}=0$ unless $\lambda \geqslant \mu$, and strictly upper unitriangular if also $M_{\lambda \lambda}=1$ for all $\lambda$. Likewise we define strictly lower triangular and strictly lower unitriangular.
Let $U_{n}$ (resp. $U_{n}^{\prime}$ ) denote the set of strictly upper (resp. lower) unitriangular matrices with integer entries, indexed by the partitions of $n$.
(6.1) $U_{n}, U_{n}^{\prime}$ are groups (with respect to matrix multiplication).

Proof. Suppose $M, N \in U_{n}$. Then $(M N)_{\lambda \mu}=\Sigma_{\nu} M_{\lambda \nu} N_{\nu \mu}$ is zero unless there exists a partition $\nu$ such that $\lambda \geqslant \nu \geqslant \mu$, i.e. unless $\lambda \geqslant \mu$. For the same reason, $(M N)_{\lambda \lambda}=M_{\lambda \lambda} N_{\lambda \lambda}=1$. Hence $M N \in U_{n}$.

Now let $M \in U_{n}$. The set of equations

$$
\begin{equation*}
\sum_{\mu} M_{\lambda \mu} x_{\mu}=y_{\lambda} \tag{1}
\end{equation*}
$$

is equivalent to

$$
\begin{equation*}
\sum\left(M^{-1}\right)_{\lambda \mu} y_{\mu}=x_{\lambda} . \tag{2}
\end{equation*}
$$

For a fixed $\lambda$, the equations (1) for $y_{\nu}$ where $\nu \leqslant \lambda$, involve only the $x_{\mu}$ for $\mu \leqslant \nu$, hence for $\mu \leqslant \lambda$. Hence the same is true of the equations (2), and therefore $\left(M^{-1}\right)_{\lambda \mu}=0$ unless $\mu \leqslant \lambda$. It follows that $M^{-1} \in U_{n}$.

Let $J$ denote the transposition matrix:

$$
J_{\lambda \mu}= \begin{cases}1 & \text { if } \lambda^{\prime}=\mu \\ 0 & \text { otherwise }\end{cases}
$$

(6.2) $M$ is strictly upper triangular (resp. unitriangular) if and only if JMJ is strictly lower triangular (resp. unitriangular).

Proof. If $N=J M J$, we have $N_{\lambda \mu}=M_{\lambda^{\prime} \mu^{\prime}}$. By (1.11), $\lambda^{\prime} \geqslant \mu^{\prime}$ if and only if $\mu \geqslant \lambda$, whence the result.

If $\left(u_{\lambda}\right),\left(v_{\lambda}\right)$ are any two $\mathbf{Q}$-bases of $\Lambda^{n}$, each indexed by the partitions of $n$, we denote by $M(u, v)$ the matrix ( $M_{\lambda \mu}$ ) of coefficients in the equations

$$
u_{\lambda}=\sum_{\mu} M_{\lambda \mu} v_{\mu}
$$

$M(u, v)$ is called the transition matrix from the basis $\left(u_{\lambda}\right)$ to the basis $\left(v_{\lambda}\right)$. It is a non-singular matrix of rational numbers.
(6.3) Let $\left(u_{\lambda}\right),\left(\nu_{\lambda}\right),\left(w_{\lambda}\right)$ be $\mathbf{Q}$-bases of $\Lambda^{n}$. Then

$$
\begin{align*}
M(u, v) M(v, w) & =M(u, w),  \tag{1}\\
M(v, u) & =M(u, v)^{-1} \tag{2}
\end{align*}
$$

Let $\left(u_{\lambda}^{\prime}\right),\left(v_{\lambda}^{\prime}\right)$ be the bases dual to $\left(u_{\lambda}\right),\left(v_{\lambda}\right)$ respectively (with respect to the scalar product of §4). Then

$$
\begin{equation*}
M\left(u^{\prime}, v^{\prime}\right)=M(v, u)^{\prime}=M(u, v)^{*} \tag{3}
\end{equation*}
$$

(where $M^{\prime}$ denotes the transpose and $M^{*}$ the transposed inverse of a matrix $M$ ).

$$
\begin{equation*}
M(\omega u, \omega v)=M(u, v) \tag{4}
\end{equation*}
$$

where $\omega: \Lambda \rightarrow \Lambda$ is the involution defined in $\S 2$.
All of these assertions are obvious.
Consider now the five $\mathbf{Z}$-bases of $\Lambda^{n}$ defined in $\S 2$ and $\S 3:\left(e_{\lambda}\right),\left(f_{\lambda}\right)$,
$\left(h_{\lambda}\right),\left(m_{\lambda}\right),\left(s_{\lambda}\right)$ We shall show that all the transition matrices relating pairs of these bases can be expressed in terms of the matrix

$$
K=M(s, m)
$$

and the transposition matrix $J$.
Since $\left(m_{\lambda}\right)$ and $\left(h_{\lambda}\right)$ are dual bases, and the basis $\left(s_{\lambda}\right)$ is self-dual (4.8), we have

$$
M(s, h)=K^{*}
$$

by (6.3)(3). If we now apply the involution $\omega$ and observe that

$$
M(\omega s, s)=J
$$

by virtue of (3.8), we have

$$
M(s, e)=M(\omega s, h)=M(\omega s, s) M(s, h)=J K^{*}
$$

by (6.3)(1) and (4). Finally, by (6.3)(3) again,

$$
M(s, f)=M(s, e)^{*}=\left(J K^{*}\right)^{*}=J K
$$

We can now use (6.3)(1) and (2) to complete the following table of transition matrices, in which the entry in row $u$ and column $v$ is $M(u, \iota)$ :

Table 1

|  | $e$ | $h$ | $m$ | $f$ | $s$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $e$ | 1 | $K^{\prime} J K^{*}$ | $K^{\prime} J K$ | $K^{\prime} K$ | $K^{\prime} J$ |
| $h$ | $K^{\prime} J K^{*}$ | 1 | $K^{\prime} K$ | $K^{\prime} J K$ | $K^{\prime}$ |
| $m$ | $K^{-1} J K^{*}$ | $K^{-1} K^{*}$ | 1 | $K^{-1} J K$ | $K^{-1}$ |
| $f$ | $K^{-1} K^{*}$ | $K^{-1} J K^{*}$ | $K^{-1} J K$ | 1 | $K^{-1} J$ |
| $s$ | $J K^{*}$ | $K^{*}$ | $K$ | $J K$ | 1 |

Some of the transition matrices in Table 1 have combinatorial interpretations. From (5.13) it follows that
(6.4) $K_{\lambda \mu}$ is the number of tableaux of shape $\lambda$ and weight $\mu$. |

The numbers $K_{\lambda \mu}$ are sometimes called Kostka numbers. By (6.4) they are non-negative. Moreover,

## (6.5) The matrix ( $K_{\lambda \mu}$ ) is strictly upper unitriangular.

Proof. If $T$ is a tableau of shape $\lambda$ and weight $\mu$, then for each $r \geqslant 1$ there are altogether $\mu_{1}+\ldots+\mu_{r}$ symbols $\leqslant r$ in $T$, which must all be located in the top $r$ rows of $T$ (because of the condition of strict increase down the columns of a tableau). Hence $\mu_{1}+\ldots+\mu_{r} \leqslant \lambda_{1}+\ldots+\lambda_{r}$ for all $r \geqslant 1$, i.e. $\mu \leqslant \lambda$. Hence $K_{\lambda \mu}=0$ unless $\lambda \geqslant \mu$, and for the same reason $K_{\lambda \lambda}=1$.

From Table 1 and (6.5) we can read off:
(6.6) (i) $M(s, h)$ and $M(h, s)$ are strictly lower unitriangular.
(ii) $M(s, m)$ and $M(m, s)$ are strictly upper unitriangular.
(iii) $M(e, m)=M(h, f)$ and is symmetric.
(iv) $M(e, f)=M(h, m)$ and is symmetric.
(v) $M(e, h)=M(h, e)=M(m, f)^{\prime}=M(f, m)^{\prime}$.
(vi) $M(h, s)=M(s, m)^{\prime}$.
(vii) $M(e, s)=M(s, f)^{\prime}$.

In fact (Example 5 below) $M(e, h)$ is strictly upper triangular (and therefore by (6.6)(v) $M(m, f)$ is strictly lower triangular).
(6.7) (i) $M(e, m)_{\lambda \mu}=\Sigma_{\nu} K_{\nu \lambda} K_{\nu^{\prime} \mu}$ is the number of matrices of zeros and ones with row sums $\lambda_{i}$ and column sums $\mu_{j}$.
(ii) $M(h, m)_{\lambda \mu}=\Sigma_{\nu} K_{\nu \lambda} K_{\nu \mu}$ is the number of matrices of non-negative integers with row sums $\lambda_{i}$ and column sums $\mu_{j}$.
Proof. (i) Consider the coefficient of a monomial $x^{\mu}$ (where $\mu$ is a partition of $n$ ) in $e_{\lambda}=e_{\lambda_{1}} e_{\lambda_{2}} \ldots$. Each monomial in $e_{\lambda_{1}}$ is of the form $\Pi_{j} x_{j}^{a_{i l}}$, where each $a_{i j}$ is 0 or 1 , and $\Sigma_{j} a_{i j}=\lambda_{i}$; hence we must have

$$
\prod_{i, j} x_{j}^{a_{i j}}=\prod_{j} x_{j}^{\mu_{j}}
$$

so that $\sum_{i} a_{i j}=\mu_{j}$. Hence the matrix $\left(a_{i j}\right)$ has row sums $\lambda_{i}$ and column sums $\mu_{j}$.

For (ii) the proof is similar: the only difference is that $e_{\lambda}$ is replaced by $h_{\lambda}$, and consequently the exponents $a_{i j}$ can now be arbitrary integers $\geqslant 0$.
Remark. From (6.4) and (6.7)(i) it follows that the number of ( 0,1 )-matrices with row sums $\lambda_{i}$ and column sums $\mu_{j}$ is equal to the number of pairs of tableaux of conjugate shapes and weights $\lambda, \mu$. In fact one can set up an explicit one-one correspondence between these two sets of objects (Knuth's dual correspondence [K12], [S23]).

Likewise, there is an explicit one-one correspondence, also due to Knuth, between the set of matrices of non-negative integers with row sums $\lambda_{i}$ and column sums $\mu_{j}$, and pairs of tableaux of the same shape and weights $\lambda, \mu$.

We shall now consider transition matrices involving the Q -basis ( $p_{\lambda}$ ). For this purpose we introduce the following notation: if $\lambda$ is a partition of length $r$, and $f$ is any mapping of the interval $[1, r]$ of $\mathbf{Z}$ into the set $\mathbf{N}^{+}$of positive integers, let $f(\lambda)$ denote the vector whose $i$ th component is

$$
f(\lambda)_{i}=\sum_{f(j)-i} \lambda_{j}
$$

for each $i \geqslant 1$.
Let $L$ denote the transition matrix $M(p, m)$ :

$$
\begin{equation*}
p_{\lambda}=\sum_{\mu} L_{\lambda \mu} m_{\mu} \tag{6.8}
\end{equation*}
$$

With the notation introduced above we have.
(6.9) $L_{\lambda \mu}$ is equal to the number of $f$ such that $f(\lambda)=\mu$.

Proof. On multiplying out $p_{\lambda}=p_{\lambda_{1}} p_{\lambda_{2}} \ldots$, we shall obtain a sum of monomials $x_{f(1)}^{\lambda_{1}} x_{f(2)}^{\lambda_{2}} \ldots$, where $f$ is any mapping $[1, l(\lambda)] \rightarrow \mathbf{N}^{+}$. Hence

$$
p_{\lambda}=\sum_{f} x^{f(\lambda)}
$$

from which the result follows, since $L_{\lambda \mu}$ is equal to the coefficient of $x^{\mu}$ in $p_{\lambda}$.

If $\mu=f(\lambda)$ as above, the parts $\mu_{i}$ of $\mu$ are partial sums of the $\lambda_{j}$; equivalently, $\lambda$ is of the form $U_{i>1} \lambda^{(i)}$, where each $\lambda^{(i)}$ is a partition of $\mu_{i}$. We say that $\lambda$ is a refinement of $\mu$, and write $\lambda \leqslant_{R} \mu$ to express this relationship between $\lambda$ and $\mu$. Clearly, $\leqslant_{R}$ is a partial order on the set $\mathscr{P}_{n}$ of partitions of $n$, for each integer $n \geqslant 0$.

$$
\begin{equation*}
\lambda \leqslant_{R} \mu \Rightarrow \lambda \leqslant \mu . \tag{6.10}
\end{equation*}
$$

Proof. Let $I_{k}=f([1, k])$ for $1 \leqslant k \leqslant l(\lambda)$. Since $\mu_{i}=\sum_{f(j)=i} \lambda_{j}$, it follows that

$$
\lambda_{1}+\ldots+\lambda_{k} \leqslant \sum_{i \in I_{k}} \mu_{i} \leqslant \mu_{1}+\ldots+\mu_{k}
$$

the last inequality because $I_{k}$ has at most $k$ elements. $\mid$
Remark. The converse of (6.10) is false, since for example two distinct partitions $\lambda$ and $\mu$ of $n$ such that $l(\lambda)=l(\mu)$ are always incomparable for the relation $\leqslant_{R}$, but may well be comparable for $\leqslant$.

From (6.9) and (6.10) it follows that $L_{\lambda \mu}=0$ unless $\lambda \leqslant_{R} \mu$, hence unless $\lambda \leqslant \mu$. The matrix $L$ is therefore strictly lower triangular.

The transition matrices $M(p, e), M(p, f)$, and $M(p, h)$ may all be expressed in terms of $L$ :
(i) $M(p, e)=\varepsilon z L^{*}$,
(ii) $M(p, f)=\varepsilon L$,
(iii) $M(p, h)=z L^{*}$,
where $L^{*}$ is the transposed inverse of $L$, and $\varepsilon$ (resp. $z$ ) denotes the diagonal matrix $\left(\varepsilon_{\lambda}\right)$ (resp. $\left(z_{\lambda}\right)$ ).

Proof. Since the bases dual to $\left(h_{\lambda}\right)$ and $\left(p_{\lambda}\right)$ are respectively $\left(m_{\lambda}\right)$ and ( $z_{\lambda}^{-1} p_{\lambda}$ ), it follows from (6.3) that

$$
M(p, h)=M\left(z^{-1} p, m\right)^{*}=\left(z^{-1} L\right)^{*}=z L^{*} .
$$

Hence

$$
M(p, e)=M(\omega p, \omega e)=M(\varepsilon p, h)=\varepsilon z L^{*},
$$

and

$$
M(p, f)=M(\omega p, \omega f)=M(\varepsilon p, m)=\varepsilon L
$$

Finally, we have

$$
\begin{equation*}
M(p, s)=M(p, m) M(s, m)^{-1}=L K^{-1} \tag{6.12}
\end{equation*}
$$

We shall see in the next section that $M(p, s)$, restricted to partitions of $n$, is the character table of the symmetric group $S_{n}$.

Finally, the relations between the six bases $e, f, h, m, s$, and $p$ are summarized in the graph below, in which the symbol attached to a directed edge $u v$ is the transition matrix $M(u, v)$. (In the cases where $M(u, v)=$ $M(v, u)$, the edge $u v$ carries no arrow.) For the sake of clarity, the diagonals of the hexagon have been omitted.
![](https://cdn.mathpix.com/cropped/2024_12_08_1df2f08562f6a73c5373g-115.jpg?height=672&width=663&top_left_y=1279&top_left_x=387)

## Examples

1. $M(h, m)_{\lambda \mu}$ is equal to the number of double cosets $S_{\lambda} w S_{\mu}$ in $S_{n}$, where $S_{\lambda}=S_{\lambda_{1}} \times S_{\lambda_{2}} \times \ldots, S_{\mu}=S_{\mu_{1}} \times S_{\mu_{2}} \times \ldots$.
2. For certain choices of $\lambda$ or $\mu$ there are closed formulas for the Kostka number $K_{\lambda \mu}$.
(a) For any partition $\lambda$ of $n, K_{\lambda,\left(1^{n}\right)}$ is by (6.4) the number of standard tableaux of shape $\lambda$, so that by $\S 5$, Example 2 we have $K_{\lambda,\left(1^{n}\right)}=n!/ h(\lambda)$, where $h(\lambda)$ is the product of the hook-lengths of $\lambda$.
(b) Let $\lambda=\left(a, 1^{b}\right)$ be a hook. Then for any partition $\mu$ of $n=a+b$ we have $K_{\lambda \mu}=\binom{l(\mu)-1}{b}$. For the tableaux of shape $\lambda$ and weight $\mu$ are determined by the entries in the first column, which must all be distinct, and the top entry (i.e. the number in the corner square of $\lambda$ ) must be 1 .
(c) Suppose that $\lambda$ and $\mu$ are partitions of $n$ such that each part of $\mu$ is $\geqslant \lambda_{2}$. In any tableau $T$ of shape $\lambda$ and weight $\mu$, the 1 's must occupy the first $\mu_{1}$ squares in the top row, and hence $T$ is determined by its entries in the remaining rows, which constitute a tableau of shape $\nu=\left(\lambda_{2}, \lambda_{3}, \ldots\right)$ and arbitrary weight. Hence it follows from (5.12) and $\S 3$, Example 4 that $K_{\lambda \mu}=\binom{l(\mu)-1}{\nu^{\prime}}$.
3. The (infinite) matrix $K$ is the diagonal sum of matrices $K_{n}(n \geqslant 0)$, where $K_{n}=\left(K_{\lambda \mu}\right)_{\lambda, \mu \in \mathscr{P}_{n}}$. We have $K_{0}=K_{1}=(1)$, and for $n=2,3, \ldots, 6$ the matrices $K_{n}$ are shown on p. 111.
The matrices $K_{n}$ and their inverses have the following stability property, when their rows and columns are ordered in reverse lexicographical order, as in the examples on p . 111. Let $m=\Sigma_{r<n / 2} p(r)$, where $p(r)$ is the number of partitions of $r$; then the principal $m \times m$ submatrix in the top left-hand corner of $K_{n}$ (resp. $K_{n}^{-1}$ ) is equal to the corresponding principal submatrix of $K_{n^{\prime}}\left(\right.$ resp. $K_{n^{\prime}}^{-1}$ ), for all $n^{\prime}>n$.

This is a consequence of the following fact: if $\mu_{1} \geqslant \lambda_{2}$, then $K_{\lambda \mu}=K_{\lambda+(r), \mu+(r)}$ for all $r \geqslant 1$. (Each tableau of shape $\lambda+(r)=\left(\lambda_{1}+r, \lambda_{2}, \lambda_{3}, \ldots\right)$ and weight $\mu+(r)=\left(\mu_{1}+r, \mu_{2}, \mu_{3}, \ldots\right)$ can be obtained from one of shape $\lambda$ and weight $\mu$ by moving the top row $r$ squares to the right and inserting $r$ 1's in the squares vacated.)
4. Let $K_{\lambda \mu}^{(-1)}$ denote the $(\lambda, \mu)$ entry of the inverse Kostka matrix $K^{-1}$. Thus $K_{\lambda \mu}^{(-1)}$ is the coefficient of $h_{\lambda}$ in $s_{\mu}=\operatorname{det}\left(h_{\mu_{i}-i+j}\right)$, and is also the coefficient of $s_{\mu}$ in $m_{\lambda}$ expressed as a sum of Schur functions. We have $K_{\lambda \mu}^{(-1)}=0$ unless $\lambda \geqslant \mu$, by (6.1) and (6.5), and $K_{\lambda \lambda}^{(-1)}=1$.
(a) Let $r, n$ be positive integers. Then

$$
\sum_{\substack{\lambda(\lambda)=r \\|\lambda|=n}} K_{\lambda \mu}^{(-1)}=(-1)^{b+r-1}\binom{b}{r-1}
$$

if $\mu$ is of the form $\left(a, 1^{b}\right)$, where $a+b=n$; and is zero otherwise. (This follows from §4, Example 10.)
(b) Suppose $\mu=\left(a, 1^{m}\right)$ is a hook. Then

$$
K_{\lambda \mu}^{(-1)}=(-1)^{l(\lambda)+l(\mu)} \frac{(l(\lambda)-1)!}{\prod_{i>1} m_{i}(\lambda)!} \lambda_{a}^{\prime}
$$

(By expanding the determinant $\operatorname{det}\left(h_{\mu_{i}-i+j}\right)$ along the top row, we obtain

$$
s_{\mu}=h_{a} e_{m}-h_{a+1} e_{m-1}+\ldots+(-1)^{m} h_{a+m}
$$

from which it follows that $s_{\mu}$ is the coefficient of $t^{n}$ (where $n=a+m=|\mu|$ ) in

$$
\begin{equation*}
(-1)^{m} E(-t) \sum_{r>a} h_{r} t^{r}=(-1)^{m} H(t)^{-1} \sum_{r>a} h_{r} t^{r} . \tag{1}
\end{equation*}
$$

Since

$$
\begin{aligned}
H(t)^{-1} & =\left(1+\sum_{r>1} h_{r} r^{r}\right)^{-1} \\
& =\sum_{n>0}(-1)^{n}\left(\sum_{r>1} h_{r} t^{r}\right)^{n}
\end{aligned}
$$

it follows that (1) is equal to

$$
(-1)^{m}\left(\sum_{r>a} h_{r} r^{r}\right) \sum_{\nu}(-1)^{l(\nu)} \frac{l(\nu)!}{\prod_{i>1} m_{i}(\nu)!} h_{\nu} t^{|\nu|}
$$

the right-hand sum being over all partitions $\nu$. Now $K_{\lambda \mu}^{(-1)}$ is equal to the coefficient of $h_{\lambda}$ in this expression.)
(c) Suppose $\mu$ is a partition of the form $\left(a_{1}, \ldots, a_{r}, 1^{m}\right)$, where $r \geqslant 1, a_{i}-a_{i+1} \geqslant$ $r-2$ for $1 \leqslant i \leqslant r-1$, and $a_{r} \geqslant r$. Then for any partition $\lambda$ of weight $m+$ $a_{1}+\ldots+a_{r}$ we have

$$
K_{\lambda \mu}^{(-1)}=(-1)^{l(\lambda)+l(\mu)} \frac{(l(\lambda)-r)!}{\prod_{i>1} m_{i}(\lambda)!} \operatorname{det}\left(\lambda_{a_{i}-i+j}^{\prime}-i+1\right)_{i<i, j<r}
$$

(By expanding the determinant of the matrix ( $h_{\mu_{i}-i+j}$ ) down the first column, we shall obtain

$$
s_{\mu}=\sum_{i=1}^{r}(-1)^{i-1} h_{a_{i}-i+1} s_{\mu}(i)
$$

where $\mu^{(i)}=\left(a_{1}+1, \ldots, a_{i-1}+1, a_{i+1}, \ldots, a_{r}, 1^{m}\right)$. From this it follows that

$$
K_{\lambda \mu}^{(-1)}=\sum(-1)^{i-1} K_{\lambda-\left(a_{i}-i+1\right), \mu^{(i)}}^{(-1)}
$$

where the sum is over integers $i=1,2, \ldots, r$ such that $a_{i}-i+1$ is a part of $\lambda$, and $\lambda-\left(a_{i}-i+1\right)$ denotes the partition obtained by deleting this part. The formula may now be proved by induction on $r$; the starting point $r=1$ of the induction is the formula of (b) above.)
(d) Let $\mu$ be a partition of length $l$. By expanding the determinant $\operatorname{det}\left(h_{\mu_{i}-i+j}\right)$ down the last column, we shall obtain

$$
s_{\mu}=\sum_{i=1}^{l}(-1)^{l-i} h_{\mu_{i}+l-i} s_{\nu(i)}
$$

where $\nu^{(i)}=\left(\mu_{1}, \ldots, \mu_{i-1}, \mu_{i+1}-1, \ldots, \mu_{l}-1\right)$. These partitions $\nu^{(i)}$ are all contained in $\mu$, and the skew diagram $\mu-\nu^{(i)}$ is a border strip (or ribbon) of length $\mu_{i}+l-i$ and height $l-i$ which starts at the square $(r, 1)$, i.e. intersects the first column. Hence if we define a special border strip to be one that intersects the first column, we have

$$
\begin{equation*}
K_{\lambda \mu}^{(-1)}=\sum_{S}(-1)^{\mathrm{ht}(S)} \tag{2}
\end{equation*}
$$

summed over all sequences $S=\left(\mu^{(0)}, \mu^{(1)}, \ldots, \mu^{(r)}\right)$ of partitions such that $r=l(\lambda)$, $0=\mu^{(0)} \subset \mu^{(1)} \subset \ldots \subset \mu^{(r)}=\mu$, with each $\theta_{i}=\mu^{(i)}-\mu^{(i-1)}$ a special border strip, and such that the lengths of the $\theta_{i}$ are the parts of $\lambda$ in some order; and finally $\mathrm{ht}(S)=\sum_{i=1}^{r} \mathrm{ht}\left(\theta_{i}\right)$.
(e) The combinatorial formula (2) above may be used to derive closed formulas for $K_{\lambda \mu}^{(-1)}$ in certain cases, of which the following is a sample:
(i) if $\mu=\left(a, 1^{m}\right)$ is a hook (as in (b) above), $\theta_{1}$ must be a hook of length $\lambda_{i} \geqslant a$, and $\theta_{2}, \ldots, \theta_{r}$ are vertical strips. Hence the formula (2) leads to the result of (b) above.
(ii) $K_{(n) \mu}^{(-1)}=(-1)^{b}$ if $\mu=\left(a, 1^{b}\right)$, and is zero otherwise.
(iii) If $\lambda=\left(a, 1^{b}\right)$ with $a>1$, then $K_{\lambda \mu}^{(-1)}$ is equal to $(-1)^{a+1}(b+1)$ if $\mu=\left(1^{a+b)}\right)$; to $(-1)^{a-\alpha}$ if $\mu=\left(\alpha, 2^{\beta}, 1^{\gamma}\right)$ with $\alpha+\beta \leqslant a$; and is zero otherwise.
(iv) If $\lambda$ is of the form $\left(r^{s}\right)$, then $K_{\lambda \mu}^{(-1)}=0$ or $\pm 1$, because there is at most one choice for $S$.
5. A domino is a connected horizontal strip, i.e. a set of consecutive squares in the same row. If $\lambda$ and $\mu$ are partitions of $n$, a domino tabloid of shape $\lambda$ and type $\mu$ is a filling of the diagram of $\lambda$ with non-overlapping dominos of lengths $\mu_{1}, \mu_{2}, \ldots$, dominos of the same length being regarded as indistinguishable. Let $d_{\lambda \mu}$ denote the number of domino tabloids of shape $\lambda$ and type $\mu$. Then we have

$$
M(e, h)_{\lambda \mu}=M(h, e)_{\lambda \mu}=\varepsilon_{\mu} d_{\lambda \mu}
$$

where as usual $\varepsilon_{\mu}=(-1)^{|\mu|-l(\mu)}$.
(Since

$$
\begin{aligned}
E(t) & =H(-t)^{-1}=\left(1-\sum_{i>1}(-1)^{i-1} h_{i} t^{i}\right)^{-1} \\
& =\sum_{r \geqslant 0}\left(\sum_{i>1}(-1)^{i-1} h_{i} t^{i}\right)^{r}
\end{aligned}
$$

it follows that, for each integer $n \geqslant 0$,

$$
e_{n}=\sum_{\alpha} \varepsilon_{\alpha} h_{\alpha}
$$

summed over all finite sequences $\alpha=\left(\alpha_{1}, \ldots, \alpha_{r}\right)$ of positive integers such that $\sum \alpha_{i}=n$, where $\varepsilon_{\alpha}=(-1)^{\Sigma\left(\alpha_{i}-1\right)}$. Hence for any partition $\lambda$ we have

$$
e_{\lambda}=\sum_{\beta} \varepsilon_{\beta} h_{\beta}
$$

summed over all sequences $\beta=\left(\beta_{1}, \ldots, \beta_{S}\right)$ of positive integers that can be partitioned into consecutive blocks with sums $\lambda_{1}, \lambda_{2}, \ldots$. Such sequences are in one-one correspondence with domino tabloids of shape $\lambda$.)

It follows that $M(e, h)_{\lambda \mu}=0$ unless $\mu \leqslant_{R} \lambda$, and that $M(e, h)_{\lambda \lambda}=\varepsilon_{\lambda}$. Thus the matrix $M(e, h) \varepsilon$ is a strictly upper unitriangular matrix of non-negative integers.
6. Since by $(6.7)(v)$ the transition matrix $M(f, m)$ is the transpose of $M(e, h)$, it follows from Example 5 that the 'forgotten' symmetric functions $f_{\lambda}$ are given by

$$
f_{\lambda}=\varepsilon_{\lambda} \sum_{\mu} d_{\mu \lambda} m_{\mu}
$$

so that $\varepsilon_{\lambda} f_{\lambda}$ is the generating function for domino tabloids of type $\lambda$. In particular:
(a) $f_{\left(1^{n}\right)}=\sum m_{\mu}=h_{n}$, since for each partition $\mu$ of $n$ there is just one domino tabloid of shape $\mu$ and type ( $1^{n}$ ).
(b) If $\lambda=\left(r 1^{n-r}\right)$ where $r \geqslant 2$ we have

$$
f_{\lambda}=(-1)^{r-1} \sum_{\mu} c_{\mu} m_{\mu}
$$

where $c_{\mu}=\mu_{r}^{\prime}+\mu_{r+1}^{\prime}+\ldots$. For a domino tabloid of shape $\mu$ and type $\left(r 1^{n-r}\right)$ is determined by the position of the single domino of length $r$, which can lie in any row of $\mu$ of length $\mu_{i} \geqslant r$, and has $\mu_{i}-r+1$ possible positions in that row. Hence $c_{\mu}=\Sigma_{\mu_{i}>r}\left(\mu_{i}-r+1\right)=\Sigma_{i \gg r} \mu_{i}^{\prime}$.
7. A domino tableau of shape $\mu$ and type $\lambda$ is a numbering of the squares of the diagram of $\mu$ with positive integers, increasing along each row, and such that for each $i \geqslant 1$ the squares numbered $i$ form a domino (Example 5) of length $\lambda_{i}$. In this
terminology, (6.9) may be restated as follows: the number of domino tableaux of shape $\mu$ and type $\lambda$ is equal to $L_{\lambda \mu}$. (For each such domino tableau determines a mapping $f:[1, l(\lambda)] \rightarrow[1, l(\mu)]$ such that $f(\lambda)=\mu$ by the rule that $f(i)=j$ if the squares numbered $i$ lie in the $j$ th row of $\mu$; and conversely each such mapping determines a domino tableau of shape $\mu$ and type $\lambda$, in which the $\lambda_{i}$ squares numbered $i$ lie in row $f(i)$.)
8. The weight of a domino tabloid (Example 5) is defined to be the product of the lengths of the leftmost dominos in the successive rows. Let $w_{\lambda \mu}$ denote the sum of the weights of all domino tabloids of shape $\lambda$ and type $\mu$. Then we have

$$
\begin{equation*}
M(p, h)_{\lambda \mu}=\varepsilon_{\lambda} \varepsilon_{\mu} w_{\lambda \mu} \tag{1}
\end{equation*}
$$

(Since

$$
\begin{aligned}
P(t) & =H^{\prime}(t) H(t)^{-1} \\
& =\sum_{i \geqslant 0}(-1)^{i}\left(\sum_{r \geqslant 1} h_{r} t^{r}\right)^{i}\left(\sum_{r \geqslant 1} r h_{r} t^{r-1}\right)
\end{aligned}
$$

it follows that, for each integer $n \geqslant 1$,

$$
p_{n}=\sum_{\alpha}(-1)^{l(\alpha)-1} \alpha_{1} h_{\alpha}
$$

summed over all finite sequences $\alpha=\left(\alpha_{1}, \ldots, \alpha_{r}\right)$ of positive integers such that $\sum \alpha_{i}=n$, where $l(\alpha)$ is the length $r$ of the sequence. Hence for any partition $\lambda$ we have

$$
p_{\lambda}=\sum_{\beta}(-1)^{l(\beta)-l(\lambda)} u_{\beta} h_{\beta}
$$

summed over all sequences $\beta=\left(\beta_{1}, \ldots, \beta_{S}\right)$ of positive integers that can be partitioned into consecutive blocks $\left(\beta_{1}, \ldots, \beta_{i_{1}}\right),\left(\beta_{i_{1}+1}, \ldots, \beta_{i_{2}}\right), \ldots$ with sums $\lambda_{1}, \lambda_{2}, \ldots$; where $u_{\beta}$ is the product $\beta_{1} \beta_{i_{1}+1} \beta_{i_{2}+1} \ldots$ of the first terms in each block. As in Example 5, such sequences are in one-one correspondence with domino tabloids of shape $\lambda$, and $u_{\beta}$ is the weight of the tabloid.)

From (1) and (6.11) it follows that $M(p, e)_{\lambda \mu}=\varepsilon_{\mu} w_{\lambda \mu}, M(f, p)_{\lambda \mu}=\varepsilon_{\lambda} z_{\mu}^{-1} w_{\lambda \mu}$ and $M(m, p)_{\lambda \mu}=\varepsilon_{\lambda} \varepsilon_{\mu} z_{\mu}^{-1} w_{\mu \lambda}$. Hence

$$
\varepsilon_{\lambda} f_{\lambda}=\sum_{\mu} z_{\mu}^{-1} w_{\lambda \mu} p_{\mu}
$$

is a polynomial in the power-sums with positive rational coefficients. Also $\varepsilon L^{-1} \varepsilon z$ is a matrix of non-negative integers, with $(\lambda, \mu)$ entry $w_{\mu \lambda}$.
9. From (6.11) we have $M(h, m)=L^{\prime} z^{-1} L$ and $M(m, f)=L^{-1} \varepsilon L$. Comparison with Table 1 shows that the matrices $K$ and $L$ are related by

$$
K^{\prime} K=L^{\prime} z^{-1} L, \quad K^{-1} J K=L^{-1} \varepsilon L
$$

Hence the matrix $X=L K^{-1}=M(p, s)$ satisfies

$$
X X^{\prime}=z, \quad X^{-1} \varepsilon X=J
$$

10. For each partition $\mu$ let

$$
u_{\mu}=\prod_{i>1} m_{i}(\mu)!
$$

and let $U$ denote the diagonal matrix $\left(u_{\mu}\right)$. Then the matrix $L U^{-1}$ is a strictly lower unitriangular matrix of non-negative integers.
(Let $\lambda, \mu$ be partitions of $n$ and let $E_{\lambda \mu}$ denote the set of mappings $f:[1, l(\lambda)] \rightarrow$ $[1, l(\mu)]$ such that $f(\lambda)=\mu$, so that by (6.9) we have $L_{\lambda \mu}=\left|E_{\lambda \mu}\right|$. Also let $S^{\mu}=$ $\Pi S_{m_{i}(\mu)}$ be the subgroup of $S_{l(\mu)}$ that fixes $\mu$. If $f \in E_{\lambda \mu}$ and $w \in S^{\mu}$ it is clear that $w f \in E_{\lambda \mu}$, so that $S^{\mu}$ acts faithfully on $E_{\lambda \mu}$. Hence $L_{\lambda \mu}=\left|E_{\lambda \mu}\right|$ is divisible by $\left|S^{\mu}\right|=u_{\mu}$. Finally if $\lambda=\mu$ we have $E_{\mu \mu}=S^{\mu}$, whence $L_{\mu \mu}=u_{\mu}$.)
The matrix $L u^{-1}$ is the transition matrix $M(p, \tilde{m})$ between the power-sum products and the 'augmented' monomial symmetric functions $\tilde{m}_{\mu}=u_{\mu} m_{\mu}$. We have

$$
\tilde{m}_{\mu}=\sum x_{i_{1}}^{\mu_{1}} \ldots x_{i_{l}}^{\mu_{l}}
$$

where $l=l(\mu)$ and the sum is over all sequences ( $i_{1}, \ldots, i_{l}$ ) of pairwise distinct positive integers. Since $L u^{-1}$ is unitriangular, ( $\tilde{m}_{\mu}$ ) is a $\mathbf{Z}$-basis of the subring $\mathbf{Z}\left[p_{1}, p_{2}, \ldots\right]$ of $\Lambda$.
11. Let $\lambda=\left(\lambda_{1}, \ldots, \lambda_{n}\right)$ be a partition of $n$. Show that

$$
m_{\lambda}=\sum_{\alpha} s_{\alpha}
$$

summed over all derangements $\alpha$ of $\lambda$. (Multiply $m_{\lambda}\left(x_{1}, \ldots, x_{n}\right)=\sum x^{\alpha}$ by $a_{\delta}\left(x_{1}, \ldots, x_{n}\right)$ ) Hence $K_{\lambda \mu}^{(-1)}=r-s$, where $r$ (resp. $s$ ) is the number of derangements $\alpha$ of $\lambda$ such that $s_{\alpha}=s_{\mu}$ (resp. $-s_{\mu}$ ).

## Notes and references

The relations between the various transition matrices contained in Table 1 and (6.6) were known to Kostka [K16], who also computed the matrices $K_{n}$ and $K_{n}^{-1}$ up to $n=11$ [K17]. See also Foulkes [F7]. The formulas in Example 4(a), (b), and (c) are taken from [K17], and those in (d) and (e) from [E1]. The results in Examples 5-8 are due to Eggecioglu and Remmel [E2]. See also [D6].

|  | 2 | $1^{2}$ |
| :---: | :---: | :---: |
| 2 | 1 | 1 |
| $1^{2}$ |  | 1 |
| 3 | 1 | 1 |$\quad$|  | 3 | 21 |
| :--- | :--- | :--- |
| 3 |  | 1 |
| $1^{3}$ |  |  |


|  | 4 | 31 | $2^{2}$ | $21^{2}$ | $1^{4}$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 4 | 1 | 1 | 1 | 1 | 1 |
| 31 |  | 1 | 1 | 2 | 3 |
| $2^{2}$ |  |  | 1 | 1 | 2 |
| $21^{2}$ |  |  |  | 1 | 3 |
| $1^{4}$ |  |  |  |  | 1 |


|  | 5 | 41 | 32 | $31^{2}$ | $2^{2} 1$ | $21^{3}$ | $1^{5}$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 5 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 41 |  | 1 | 1 | 2 | 2 | 3 | 4 |
| 32 |  |  | 1 | 1 | 2 | 3 | 5 |
| $31^{2}$ |  |  |  | 1 | 1 | 3 | 6 |
| $2^{21}$ |  |  |  |  | 1 | 2 | 5 |
| $21^{3}$ |  |  |  |  |  | 1 | 4 |
| $1^{5}$ |  |  |  |  |  |  | 1 |


|  | 6 | 51 | 42 | $41^{2}$ | $3^{2}$ | 321 | $31^{3}$ | $2^{3}$ | $2^{2} 1^{2}$ | $21^{4}$ | $1^{6}$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 6 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 51 |  | 1 | 1 | 2 | 1 | 2 | 3 | 2 | 3 | 4 | 5 |
| 42 |  |  | 1 | 1 | 1 | 2 | 3 | 3 | 4 | 6 | 9 |
| $41^{2}$ |  |  |  | 1 | 0 | 1 | 3 | 1 | 3 | 6 | 10 |
| $3^{2}$ |  |  |  |  | 1 | 1 | 1 | 1 | 2 | 3 | 5 |
| 321 |  |  |  |  |  | 1 | 2 | 2 | 4 | 8 | 16 |
| $31^{3}$ |  |  |  |  |  |  | 1 | 0 | 1 | 4 | 10 |
| $2^{3}$ |  |  |  |  |  |  |  | 1 | 1 | 2 | 5 |
| $2^{2} 1^{2}$ |  |  |  |  |  |  |  |  | 1 | 3 | 9 |
| $21^{4}$ |  |  |  |  |  |  |  |  |  | 1 | 5 |
| $1^{6}$ |  |  |  |  |  |  |  |  |  |  | 1 |

## 7. The characters of the symmetric groups

In this section we shall take for granted the elementary facts about representations and characters of finite groups.

If $G$ is a finite group and $f, g$ are functions on $G$ with values in a commutative Q-algebra, the scalar product of $f$ and $g$ is defined by

$$
\langle f, g\rangle_{G}=\frac{1}{|G|} \sum_{x \in G} f(x) g\left(x^{-1}\right)
$$

If $H$ is a subgroup of $G$ and $f$ is a character of $H$, the induced character of $G$ will be denoted by ind ${ }_{H}^{G}(f)$. If $g$ is a character of $G$, its restriction to $H$ will be denoted by $\operatorname{res}_{G}^{H}(g)$.

Each permutation $w \in S_{n}$ factorizes uniquely as a product of disjoint cycles. If the orders of these cycles are $\rho_{1}, \rho_{2}, \ldots$, where $\rho_{1} \geqslant \rho_{2} \geqslant \ldots$, then $\rho(w)=\left(\rho_{1}, \rho_{2}, \ldots\right)$ is a partition of $n$ called the cycle-type of $w$. It determines $w$ up to conjugacy in $S_{n}$, and the conjugacy classes of $S_{n}$ are indexed in this way by the partitions of $n$.

We define a mapping $\psi: S_{n} \rightarrow \Lambda^{n}$ as follows:

$$
\psi(w)=p_{\rho(w)}
$$

If $m, n$ are positive integers, we may embed $S_{m} \times S_{n}$ in $S_{m+n}$ by making $S_{m}$ and $S_{n}$ act on complementary subsets of $\{1,2, \ldots, m+n\}$. Of course there are many different ways of doing this, but the resulting subgroups of $S_{m+n}$ are all conjugate. Hence if $v \in S_{m}$ and $w \in S_{n}, v \times w \in S_{m+n}$ is well-defined up to conjugacy in $S_{m+n}$, with cycle-type $\rho(v \times w)=\rho(v) \cup$ $\rho(w)$, so that

$$
\begin{equation*}
\psi(v \times w)=\psi(v) \psi(w) \tag{7.1}
\end{equation*}
$$

Let $R^{n}$ denote the $\mathbf{Z}$-module generated by the irreducible characters of $S_{n}$, and let

$$
R=\underset{n \geqslant 0}{\oplus} R^{n}
$$

with the understanding that $S_{0}=\{1\}$, so that $R^{0}=\mathbf{Z}$. The $\mathbf{Z}$-module $R$ has a ring structure, defined as follows. Let $f \in R^{m}, g \in R^{n}$, and embed $S_{m} \times S_{n}$ in $S_{m+n}$. Then $f \times g$ is a character of $S_{m} \times S_{n}$, and we define

$$
f . g=\operatorname{ind}_{S_{m} \times S_{n}}^{S_{m+S_{n}}}(f \times g),
$$

which is a character of $S_{m+n}$, i.e. an element of $R^{m+n}$. Thus we have defined a bilinear multiplication $R^{m} \times R^{n} \rightarrow R^{m+n}$, and it is not difficult to verify that with this multiplication $R$ is a commutative, associative, graded ring with identity element.

Moreover, $R$ carries a scalar product: if $f, g \in R$, say $f=\Sigma f_{n}, g=\Sigma g_{n}$ with $f_{n}, g_{n} \in R^{n}$, we define

$$
\langle f, g\rangle=\sum_{n \geqslant 0}\left\langle f_{n}, g_{n}\right\rangle_{s_{n}} .
$$

Next we define a Z-linear mapping

$$
\operatorname{ch}: R \rightarrow \Lambda_{\mathbf{C}}=\Lambda \otimes_{\mathbf{Z}} \mathbf{C}
$$

as follows: if $f \in R^{n}$, then

$$
\operatorname{ch}(f)=\langle f, \psi\rangle_{s_{n}}=\frac{1}{n!} \sum_{w \in S_{n}} f(w) \psi(w)
$$

(since $\psi(w)=\psi\left(w^{-1}\right)$ ). If $f_{\rho}$ is the value of $f$ at elements of cycle type $\rho$, we have

$$
\begin{equation*}
\operatorname{ch}(f)=\sum_{|\rho|=n} z_{\rho}^{-1} f_{\rho} p_{\rho} \tag{7.2}
\end{equation*}
$$

$\mathrm{ch}(f)$ is called the characteristic of $f$, and ch is the characteristic map. From (7.2) and (4.7) it follows that, for $f$ and $g$ in $R^{n}$,

$$
\langle\operatorname{ch}(f), \operatorname{ch}(g)\rangle=\sum_{|\rho|=n} z_{\rho}^{-1} f_{\rho} g_{\rho}=\langle f, g\rangle_{s_{n}}
$$

and hence that ch is an isometry.
The basic fact is now
(7.3) The characteristic map is an isometric isomorphism of $R$ onto $\Lambda$.

Proof. Let us first verify that ch is a ring homomorphism. If $f \in R^{m}$ and $g \in R^{n}$, we have

$$
\begin{aligned}
\operatorname{ch}(f . g) & =\left\langle\operatorname{ind}_{S_{m} \times S_{n}}^{S_{m+S_{n}}}(f \times g), \psi\right\rangle_{S_{m+n}} \\
& =\left\langle f \times g, \operatorname{res}_{S_{m+n}}^{S_{m} \times S_{n}}(\psi)\right\rangle_{S_{m} \times S_{n}}
\end{aligned}
$$

by Frobenius reciprocity,

$$
=\langle f, \psi\rangle_{S_{m}}\langle g, \psi\rangle_{S_{n}}=\operatorname{ch}(f) \cdot \operatorname{ch}(g)
$$

by (7.1).
Next, let $\eta_{n}$ be the identity character of $S_{n}$. Then

$$
\operatorname{ch}\left(\eta_{n}\right)=\sum_{|\rho|=n} z_{\rho}^{-1} p_{\rho}=h_{n}
$$

by (7.2) and (2.14'). If now $\lambda=\left(\lambda_{1}, \lambda_{2}, \ldots\right)$ is any partition of $n$, let $\eta_{1}$ denote $\eta_{\lambda_{1}} \cdot \eta_{\lambda_{2}} \ldots$. Then $\eta_{\lambda}$ is a character of $S_{n}$, namely the character induced by the identity character of $S_{\lambda}=S_{\lambda_{1}} \times S_{\lambda_{2}} \times \ldots$, and we have $\operatorname{ch}\left(\eta_{\lambda}\right)=h_{\lambda}$.

Now define, for each partition $\lambda$ of $n$,

$$
\begin{equation*}
\chi^{\lambda}=\operatorname{det}\left(\eta_{\lambda_{1}-i+j}\right)_{1<i, j<n} \in R^{n}, \tag{7.4}
\end{equation*}
$$

i.e. $\chi^{\lambda}$ is a (possibly virtual) character of $S_{n}$, and by (3.4) we have

$$
\begin{equation*}
\operatorname{ch}\left(\chi^{\lambda}\right)=s_{\lambda} . \tag{7.5}
\end{equation*}
$$

Since ch is an isometry, it follows from (4.8) that $\left\langle\chi^{\lambda}, \chi^{\mu}\right\rangle=\delta_{\lambda \mu}$ for any two partitions $\lambda, \mu$, and hence in particular that the $\chi^{\lambda}$ are, up to sign, irreducible characters of $S_{n}$. Since the number of conjugacy classes in $S_{n}$ is equal to the number of partitions of $n$, these characters exhaust all the irreducible characters of $S_{n}$; hence the $\chi^{\lambda}$ for $|\lambda|=n$ form a basis of $R^{n}$, and hence ch is an isomorphism of $R^{n}$ onto $\Lambda^{n}$ for each $n$, hence of $R$ onto $\Lambda$.
(7.6) (i) The irreducible characters of $S_{n}$ are $\chi^{\lambda}(|\lambda|=n)$ defined by (7.4).
(ii) The degree of $\chi^{\lambda}$ is $K_{\lambda,\left(1^{n}\right)}$, the number of standard tableaux of shape $\lambda$.

Proof. From the proof of (7.3), we have only to show that $\chi^{\lambda}$ and not $-\chi^{\lambda}$ is an irreducible character; for this purpose it will suffice to show that $x^{\lambda}(1)>0$. Now we have from (7.5) and (7.2)

$$
s_{\lambda}=\operatorname{ch}\left(\chi^{\lambda}\right)=\sum_{\rho} z_{\rho}^{-1} \chi_{\rho}^{\lambda} p_{\rho}
$$

where $\chi_{\rho}^{\lambda}$ is the value of $\chi^{\lambda}$ at elements of cycle-type $\rho$. Hence

$$
\begin{equation*}
\chi_{\rho}^{\lambda}=\left\langle s_{\lambda}, p_{\rho}\right\rangle \tag{7.7}
\end{equation*}
$$

by (4.7), and in particular

$$
\chi^{\lambda}(1)=\chi_{\left(1^{n}\right)}^{\lambda}=\left\langle s_{\lambda}, p_{1}^{n}\right\rangle
$$

so that

$$
h_{1}^{n}=p_{1}^{n}=\sum_{|\lambda|=n} \chi^{\lambda}(1) s_{\lambda}
$$

and therefore $\chi^{\lambda}(1)=M(h, s)_{\left(1^{n}\right), \lambda}=K_{\lambda,\left(1^{n}\right)}$ from Table 1. |
(7.8) The transition matrix $M(p, s)$ is the character table of $S_{n}$, i.e.

$$
p_{\rho}=\sum_{\lambda} \chi_{\rho}^{\lambda} s_{\lambda} .
$$

Hence $\chi_{\rho}^{\lambda}$ is equal to the coefficient of $x^{\lambda+\delta}$ in $a_{\delta} p_{\rho}$.

This is a restatement of (7.7).
Remark. From Table 1 in $\S 6$ we have

$$
\begin{aligned}
& h_{\lambda}=s_{\lambda}+\sum_{\mu>\lambda} K_{\mu \lambda} s_{\mu}, \\
& e_{\lambda^{\prime}}=s_{\lambda}+\sum_{\mu<\lambda} K_{\mu^{\prime} \lambda^{\prime}} s_{\mu} .
\end{aligned}
$$

Hence

$$
\begin{aligned}
& \eta_{\lambda}=\chi^{\lambda}+\sum_{\mu>\lambda} K_{\mu \lambda} \chi^{\mu}, \\
& \varepsilon_{\lambda^{\prime}}=\chi^{\lambda}+\sum_{\mu<\lambda} K_{\mu^{\prime} \lambda^{\prime}} \chi^{\mu} .
\end{aligned}
$$

These relations give the decomposition of the induced modules $H_{\lambda}=$ ind $S_{\lambda^{\prime}}^{S_{n}(1)}$ and $E_{\lambda^{\prime}}=$ ind $S_{\lambda^{\prime}}^{S_{n}}(\varepsilon)$ respectively. It follows that $H_{\lambda}$ and $E_{\lambda^{\prime}}$ have a unique common irreducible component, namely the irreducible $S_{n}$-module with character $\chi^{\lambda}$. This observation leads to a simple construction of the irreducible $S_{n}$-modules: see Example 15 below.

Let $\lambda, \mu, \nu$ be partitions of $n$, and let

$$
\gamma_{\mu \nu}^{\lambda}=\left\langle\chi^{\lambda}, \chi^{\mu} \chi^{\nu}\right\rangle_{s_{n}}=\frac{1}{n!} \sum_{w \in S_{n}} \chi^{\lambda}(w) \chi^{\mu}(w) \chi^{\nu}(w)
$$

which is symmetrical in $\lambda, \mu, \nu$. Then we have, for two sets of variables $x=\left(x_{1}, x_{2}, \ldots\right)$ and $y=\left(y_{1}, y_{2}, \ldots\right)$

$$
\begin{equation*}
s_{\lambda}(x y)=\sum_{\mu, \nu} \gamma_{\mu \nu}^{\lambda} s_{\mu}(x) s_{\nu}(y) \tag{7.9}
\end{equation*}
$$

where ( $x y$ ) means the set of variables $x_{i} y_{j}$. (Compare (5.9).)
Proof. For all partitions $\rho$ we have $p_{\rho}(x y)=p_{\rho}(x) p_{\rho}(y)$ and hence from (7.8)

$$
\sum_{\lambda} \chi^{\lambda} s_{\lambda}(x y)=\sum_{\mu, \nu} \chi^{\mu} \chi^{\nu} s_{\mu}(x) s_{\nu}(y)
$$

so that $s_{\lambda}(x y)$ is the coefficient of $\chi^{\lambda}$ in the right-hand side. I
Let $f, g \in \Lambda^{n}$, say $f=\operatorname{ch}(u), g=\operatorname{ch}(v)$ where $u, v$ are class-functions on $S_{n}$. The internal product of $f$ and $g$ is defined to be

$$
f * g=\operatorname{ch}(u v)
$$

where $u v$ is the function $w \mapsto u(w) v(w)$ on $S_{n}$. With respect to this product, $\Lambda^{n}$ becomes a commutative and associative ring, with identity element $h_{n}$.

It is convenient to extend this product by linearity to the whole of $\Lambda$, and indeed to its completion $\hat{\Lambda}$ (§2); if

$$
f=\sum_{n \geqslant 0} f^{(n)}, \quad g=\sum_{n \geqslant 0} g^{(n)}
$$

with $f^{(n)}, g^{(n)} \in \Lambda^{n}$, we define

$$
f * g=\sum_{n \geqslant 0} f^{(n)} * g^{(n)}
$$

For this product, $\hat{\Lambda}$ is a commutative ring with identity element $\hat{1}=\sum h_{n}$, and $\Lambda$ is a subring (but does not contain this identity element).

If $\lambda, \mu, \nu$ are partitions of $n$, we have

$$
\begin{equation*}
s_{\lambda} * s_{\mu}=\sum_{\nu} \gamma_{\lambda \mu}^{\nu} s_{\nu} \tag{7.10}
\end{equation*}
$$

so that by (7.9) and the symmetry of the coefficients $\gamma_{\lambda \mu}^{\nu}$

$$
\begin{equation*}
s_{\lambda}(x y)=\sum_{\mu} s_{\mu}(x)\left(s_{\lambda} * s_{\mu}\right)(y) \tag{7.11}
\end{equation*}
$$

Also we have

$$
\begin{equation*}
p_{\lambda} * p_{\mu}=\delta_{\lambda \mu} z_{\lambda} p_{\lambda} \tag{7.12}
\end{equation*}
$$

so that the elements $z_{\lambda}^{-1} p_{\lambda} \in \Lambda_{\mathbf{Q}}^{n}$ are pairwise orthogonal idempotents, and their sum over all partitions $\lambda$ of $n$ is by (2.14) the identity element $h_{n}$ of $\Lambda^{n}$.

Finally, for all $f, g \in \Lambda$ we have

$$
\begin{equation*}
\langle f, g\rangle=(f * g)(1) \tag{7.13}
\end{equation*}
$$

where $(f * g)(1)$ means $f * g$ evaluated at $\left(x_{1}, x_{2}, \ldots\right)=(1,0,0, \ldots)$. (By linearity it is enough to verify (7.13) when $f=p_{\lambda}$ and $g=p_{\mu}$, and in that case it follows from (7.12) and (4.7), since $p_{\lambda}(1)=1$ for all partitions $\lambda$.)

## Examples

1. $\chi^{(n)}=\eta_{n}$ is the trivial character of $S_{n}$, and $\chi^{\left(1^{n}\right)}=\varepsilon_{n}=\varepsilon$ is the sign character. (Compare (7.10) with (2.14').)
2. For any partition $\lambda$ of $n, \chi^{\lambda^{\prime}}=\varepsilon_{n} \chi^{\lambda}$. For

$$
\chi_{\rho}^{\lambda^{\prime}}=\left\langle s_{\lambda^{\prime}}, p_{\rho}\right\rangle=\left\langle s_{\lambda}, \varepsilon_{\rho} p_{\rho}\right\rangle=\varepsilon_{\rho} \chi_{\rho}^{\lambda}
$$

since $\omega\left(s_{\lambda^{\prime}}\right)=s_{\lambda}$ and $\omega\left(p_{\rho}\right)=\varepsilon_{\rho} p_{\rho}$. Hence the involution $\omega$ on $\Lambda$ corresponds to multiplication by $\varepsilon_{n}$ in $R^{n}$. Equivalently, $e_{n} * f=\omega(f)$ for all $f \in \Lambda^{n}$.
3. Corresponding to each skew diagram $\lambda-\mu$ of weight $n$, there is a character $\chi^{\lambda / \mu}$ of $S_{n}$ defined by $\operatorname{ch}\left(\chi^{\lambda / \mu}\right)=s_{\lambda / \mu}$. If $|\mu|=m$ we have from (5.1) and (7.3)

$$
\begin{aligned}
\left\langle\chi^{\lambda / \mu}, \chi^{\nu}\right\rangle_{S_{n}} & =\left\langle\chi^{\lambda}, \chi^{\mu} \cdot \chi^{\nu}\right\rangle_{S_{m+n}} \\
& =\left\langle\operatorname{res}_{S_{m+n}}^{S_{m} \times S_{n}} \chi^{\lambda}, \chi^{\mu} \times \chi^{\nu}\right\rangle_{S_{m} \times S_{n}}
\end{aligned}
$$

by Frobenius reciprocity, and therefore the restriction of $\chi^{\lambda}$ to $S_{m} \times S_{n}$ is $\sum_{|\mu|-m} \chi^{\mu} \times \chi^{\lambda / \mu}$.

The degree of $\chi^{\lambda / \mu}$ is equal to $\left\langle s_{\lambda / \mu}, e_{1}^{n}\right\rangle=K_{\lambda / \mu,\left(1^{n}\right)}$, i.e. to the number of standard tableaux of shape $\lambda-\mu$.
4. Let $G$ be a subgroup of $S_{n}$, and let $c(G)$ be the cycle indicator of $G$ ( $\S 2$, Example 9). Then $c(G)=\operatorname{ch}\left(\chi_{G}\right)$, where $\chi_{G}$ is the character of $S_{n}$ induced by the trivial character $1_{G}$ of $G$. For $\left.\operatorname{ch}\left(\chi_{G}\right)=\left\langle\chi_{G}, \psi\right\rangle\right\rangle_{n}=\left\langle 1_{G}, \psi \mid G\right\rangle_{G}$ (by Frobenius reciprocity) $=c(G)$.

If $G, H$ are subgroups of $S_{n},\langle c(G), c(H)\rangle$ is the number of $(G, H)$ double cosets in $S_{n}$.
5. From §3, Example 11 and (7.8) we obtain the following combinatorial rule for computing $\chi_{\rho}^{\lambda}$ :

$$
\chi_{\rho}^{\lambda}=\sum_{S}(-1)^{\mathrm{ht}(S)}
$$

summed over all sequences of partitions $S=\left(\lambda^{(0)}, \lambda^{(1)}, \ldots, \lambda^{(m)}\right)$ such that $m=l(\rho)$, $0=\lambda^{(0)} \subset \lambda^{(1)} \subset \ldots \subset \lambda^{(m)}=\lambda$, and such that each $\lambda^{(i)}-\lambda^{(i-1)}$ is a border strip ( $\S 3$, Example 11) of length $\rho_{i}$, and $\mathrm{ht}(S)=\sum_{i} \mathrm{ht}\left(\lambda^{(i)}-\lambda^{(i-1)}\right)$.
6. The degree $f^{\lambda}=\chi^{\lambda}(1)$ of $\chi^{\lambda}$ may also be computed as follows. By (7.8), it is the coefficient of $x^{\lambda+\delta}$ in $\left(\sum x_{i}\right)^{n} \sum_{w \in S_{n}} \varepsilon(w) x^{w \delta}$. If we put $\mu=\lambda+\delta$ (so that $\mu_{i}=$ $\left.\lambda_{i}+n-i, 1 \leqslant i \leqslant n\right)$, this coefficient is

$$
\sum_{w \in S_{n}} \varepsilon(w) n!/ \prod_{i=1}^{n}\left(\mu_{i}-n+w(i)\right)!
$$

which is the determinant $n!\operatorname{det}\left(1 /\left(\mu_{i}-n+j\right)!\right)$, hence equal to

$$
\begin{aligned}
& \frac{n!}{\mu!} \operatorname{det}\left(\mu_{i}\left(\mu_{i}-1\right) \ldots\left(\mu_{i}-n+j+1\right)\right) \\
& \quad=\frac{n!}{\mu!} \operatorname{det}\left(\mu_{i}^{n-j}\right)=\frac{n!}{\mu!} \Delta\left(\mu_{1}, \ldots, \mu_{n}\right)
\end{aligned}
$$

where $\mu!=\Pi_{i} \mu_{i}!$ and $\Delta\left(\mu_{1}, \ldots, \mu_{n}\right)=\Pi_{i<j}\left(\mu_{i}-\mu_{j}\right)$.
7. Let $\rho=\left(r, 1^{n-r}\right)$, so that $\chi_{\rho}^{\lambda}$ is the value of the character $\chi^{\lambda}$ of $S_{n}$ at an $r$-cycle $(1 \leqslant r \leqslant n)$. By (7.8), $\quad \chi_{\rho}^{\lambda}$ is the coefficient of $x^{\mu}=x^{\lambda+\delta}$ in $\left(\sum x_{i}^{r}\right)\left(\sum x_{i}\right)^{n-r} \sum_{w \in S_{n}} \varepsilon(w) x^{w \delta}$. From the result of Example 6, this coefficient is

$$
\sum_{i} \frac{(n-r)!\Delta\left(\mu_{1}, \ldots, \mu_{i}-r, \ldots, \mu_{n}\right)}{\mu_{1}!\ldots\left(\mu_{i}-r\right)!\ldots \mu_{n}!}
$$

and therefore

$$
\chi_{\rho}^{\lambda} / f^{\lambda}=\frac{(n-r)!}{n!} \sum_{i=1}^{n} \frac{\mu_{i}!}{\left(\mu_{i}-r\right)!} \prod_{j \neq 1} \frac{\mu_{i}-\mu_{j}-r}{\mu_{i}-\mu_{j}} .
$$

If we put $\varphi(x)=\Pi\left(x-\mu_{i}\right)$ and $h_{\rho}=n!/ z_{\rho}=n!/(n-r)!r$, this formula becomes

$$
-r^{2} h_{\rho} \chi_{\rho}^{\lambda} / f^{\lambda}=\sum_{i=1}^{n} \mu_{i}\left(\mu_{i}-1\right) \ldots\left(\mu_{i}-r+1\right) \varphi\left(\mu_{i}-r\right) / \varphi^{\prime}\left(\mu_{i}\right)
$$

which is equal to the coefficient of $x^{-1}$ in the expansion of

$$
x(x-1) \ldots(x-r+1) \varphi(x-r) / \varphi(x)
$$

in descending powers of $x$.
In particular, when $r=2$ we obtain

$$
h_{\rho} \chi_{\rho}^{\lambda} / f^{\lambda}=n\left(\lambda^{\prime}\right)-n(\lambda)
$$

8. If $\lambda$ is a partition of $\boldsymbol{n}$, let

$$
f_{\lambda}(q)=q^{n(\lambda)} \varphi_{n}(q) / \prod_{x \in \lambda}\left(1-q^{h(x)}\right)
$$

Let $w \in S_{n}$ be an $n$-cycle and let $\zeta$ be a primitive complex $n$th root of unity. Then for all $r \geqslant 0$ we have

$$
\begin{equation*}
\chi^{\lambda}\left(w^{r}\right)=f_{\lambda}\left(\zeta^{r}\right) \tag{1}
\end{equation*}
$$

(Since $f_{\lambda}(q)=\varphi_{n}(q) s_{\lambda}\left(1, q, q^{2}, \ldots\right)(\S 3$, Example 2$)$ it follows that

$$
\sum_{|\lambda|=n} f_{\lambda}(q) s_{\lambda}(x)
$$

is equal to the coefficient of $t^{n}$ in $\varphi_{n}(q) \Pi_{i, j}\left(1-x_{i} q^{j-1} t\right)^{-1}$, and hence by the $q$-binomial theorem ( $\S 2$, Example 4) is equal to

$$
\sum_{|\alpha|=n} g_{\alpha}(q) x^{\alpha}
$$

where $g_{\alpha}(q)=\varphi_{n}(q) / \Pi_{i>1} \varphi_{\alpha_{i}}(q)$, and the sum is over all sequences $\alpha=$ $\left(\alpha_{1}, \alpha_{2}, \ldots\right.$ ) of non-negative integers such that $|\alpha|=\sum \alpha_{i}=n$. Now $\zeta^{r}$ is a primitive $s$ th root of unity, where $n / s$ is the highest common factor of $r$ and $n$. Show that $g_{\alpha}\left(\zeta^{r}\right)=0$ unless each $\alpha_{i}$ is divisible by $s$, and that if $\alpha=s \beta$ then $g_{\alpha}\left(\zeta^{\prime}\right)$ is equal to the multinomial coefficient $(n / s)!/ \Pi \beta_{i}$ ! Deduce that

$$
\begin{equation*}
\sum_{|\lambda|=n} f_{\lambda}\left(\zeta^{\prime}\right) s_{\lambda}(x)=\left(\sum x_{i}^{s}\right)^{n / s}=p_{s}^{n / s} \tag{2}
\end{equation*}
$$

on the other hand we have by (7.8)

$$
\begin{equation*}
\sum_{|\lambda|=n} \chi^{\lambda}\left(w^{r}\right) s_{\lambda}(x)=p_{s}^{n / s}, \tag{3}
\end{equation*}
$$

and (1) now follows from comparison of (2) and (3).)
9. (a) Let $\Lambda_{+}^{n} \subset \Lambda^{n}$ denote the semigroup consisting of the non-negative integral linear combinations of the Schur functions $s_{\lambda},|\lambda|=n$, and let $\Lambda_{+}=\oplus_{n>0} \Lambda_{+}^{n}$. If $f \in \Lambda$, then $f \in \Lambda_{+}$if and only if $\langle f, g\rangle \geqslant 0$ for all $g \in \Lambda_{+}$.
By (7.5) and (7.6), $\Lambda_{+}^{n}$ consists of the characteristics of ordinary (not virtual) characters of $S_{n}$. From (7.3) it follows that $\Lambda_{+}^{m} . \Lambda_{+}^{n} \subset \Lambda_{+}^{m+n}$ for all $m, n \geqslant 0$, so that $\Lambda_{+}$is closed under multiplication as well as addition. (Equivalently, the coefficients $c_{\mu \nu}^{\lambda}=\left\langle s_{\lambda}, s_{\mu} s_{\nu}\right\rangle$ are non-negative.) In particular, $h_{\lambda}$ and $e_{\lambda}$ lie in $\Lambda_{+}$ for all partitions $\lambda$. From Examples 2 and 3 it follows that $\Lambda_{+}$is stable under the involution $\omega$, and that $s_{\lambda / \mu} \in \Lambda_{+}$for all partitions $\lambda, \mu$.
(b) Define a partial order on $\Lambda$ by letting $f \geqslant g$ if and only if $f-g \in \Lambda_{+}$. Show that the following conditions on partitions $\lambda, \mu$ of $n$ are equivalent:
(a) $h_{\lambda} \leqslant h_{\mu}$; (a') $e_{\lambda} \leqslant e_{\mu}$;
(b) $s_{\lambda} \leqslant h_{\mu} ;\left(b^{\prime}\right) s_{\lambda^{\prime}} \leqslant e_{\mu}$;
(c) $M(e, m)_{\lambda^{\prime} \mu}>0$; (d) $\lambda \geqslant \mu$.
(Since $\Lambda_{+}$is stable under $\omega$, we see that $(a) \Leftrightarrow\left(a^{\prime}\right)$ and $(b) \Leftrightarrow\left(b^{\prime}\right)$. Next, the relation $h_{\lambda}=\Sigma K_{\mu \lambda} s_{\mu}$ (6.7) shows that $s_{\lambda} \leqslant h_{\lambda}$ and hence that (a) $\Rightarrow$ (b). Since $e_{\lambda^{\prime}} \geqslant s_{\lambda}$ we have $M(e, m)_{\lambda^{\prime} \mu}=\left\langle e_{\lambda^{\prime}}, h_{\mu}\right\rangle \geqslant\left\langle s_{\lambda}, h_{\mu}\right\rangle$, whence (b) $\Rightarrow$ (c). The next implication (c) $\Rightarrow$ (d) follows from (6.6) (i). Finally, to show that (d) $\Rightarrow$ (a) we may by (1.16) assume that $\lambda=R_{i j} \mu$, and then we have

$$
h_{\mu}-h_{\lambda}=h_{\nu}\left(h_{\mu_{l}} h_{\mu_{j}}-h_{\mu_{l}+1} h_{\mu_{j}-1}\right)=h_{\nu} s_{\left(\mu_{i}, \mu_{j}\right)} \geqslant 0,
$$

where $\nu$ is the partition obtained from $\mu$ by deleting $\mu_{i}$ and $\mu_{j}$ )
The equivalence (c) $\Leftrightarrow$ (d) is known as the Gale-Ryser theorem: there exists a matrix of zeros and ones with row sums $\lambda_{i}$ and column sums $\mu_{j}$ if and only if $\lambda^{\prime} \geqslant \mu$ (use (6.6)).
Another combinatorial corollary is the following: if $\lambda \geqslant \mu$ then $K_{\theta \lambda} \leqslant K_{\theta \mu}$ for any skew diagram $\theta$. (Take the scalar product of both sides of (a) with $s_{\theta}$, and use (5.13).) In particular, we have $K_{\lambda \mu}>0$ whenever $\lambda \geqslant \mu$ (because $K_{\lambda \lambda}=1$ ).
10. (a) We have

$$
\sum_{\lambda} s_{\lambda} * s_{\lambda}=\prod_{k>1}\left(1-p_{k}\right)^{-1}
$$

where the sum on the left is over all partitions $\lambda$. For

$$
s_{\lambda} * s_{\lambda}=\sum_{\rho} z_{\rho}^{-1}\left(x_{\rho}^{\lambda}\right)^{2} p_{\rho}
$$

and

$$
\sum_{\lambda}\left(x_{\rho}^{\lambda}\right)^{2}=z_{\rho}
$$

by orthogonality of characters, so that

$$
\sum_{|\lambda|=n} s_{\lambda} * s_{\lambda}=\sum_{|\rho|=n} p_{\rho}
$$

which is equivalent to the result stated.
(b) We have

$$
\begin{aligned}
\prod_{i, j, k}\left(1-x_{i} y_{j} z_{k}\right)^{-1} & =\sum_{\lambda, \mu} s_{\lambda}(x) s_{\mu}(y)\left(s_{\lambda} * s_{\mu}\right)(z) \\
\prod_{i, j, k}\left(1+x_{i} y_{j} z_{k}\right) & =\sum_{\lambda, \mu} s_{\lambda}(x) s_{\mu^{\prime}}(y)\left(s_{\lambda} * s_{\mu}\right)(z)
\end{aligned}
$$

11. Let $\varphi=\Sigma_{|\lambda|-n} \chi^{\lambda}$. If $w \in S_{n}$ has cycle-type $\rho$, then

$$
\varphi(w)=\sum_{\lambda} \chi_{\rho}^{\lambda}=\sum_{\lambda}\left\langle s_{\lambda}, p_{\rho}\right\rangle=\left\langle s, p_{\rho}\right\rangle
$$

where (\$5, Example 4)

$$
s=\prod_{i}\left(1-x_{i}\right)^{-1} \prod_{i<j}\left(1-x_{i} x_{j}\right)^{-1} .
$$

By calculating $\log s$, show that

$$
s=\prod_{n \text { odd }} \exp \left(\frac{p_{n}}{n}+\frac{p_{n}^{2}}{2 n}\right) \prod_{n \text { even }} \exp \frac{p_{n}^{2}}{2 n}
$$

and hence that $\varphi(w)=\Pi_{i>1} a_{i}^{\left(m_{i}(\rho)\right)}$, where $a_{i}^{(m)}$ is the coefficient of $t^{m}$ in $\exp \left(t+\frac{1}{2} i t^{2}\right)$ or $\exp \left(\frac{1}{2} i t^{2}\right)$ according as $i$ is odd or even. In particular, $\varphi(w)=0$ if $w$ contains an odd number of $2 r$-cycles, for any $r \geqslant 1$.
12. Let $C_{n}$ be the cyclic subgroup of $S_{n}$ generated by an $n$-cycle, and let $\theta$ be a faithful character of $C_{n}$. Show that the induced character $\varphi_{n}=\operatorname{ind}_{C_{n}}^{S_{n}}(\theta)$ is independent of the choice of $\theta$, and that

$$
\operatorname{ch}\left(\varphi_{n}\right)=\frac{1}{n} \sum_{d \mid n} \mu(d) p_{d}^{n \mid d}
$$

where $\mu$ is the Möbius function.
(Let $V$ be a finite-dimensional vector space over a field of characteristic 0 , and let $L(V)=\oplus_{n>0} L^{n}(V)$ be the free Lie algebra generated by $V$. Then for each $n \geqslant 0, L^{n}$ is a homogeneous polynomial functor of degree $n$, and $\alpha\left(L_{n}\right)=\varphi_{n}$ in the notation of Appendix A, (5.4).)
13. For each permutation $w$ and each integer $r \geqslant 1$, let $a_{r}(w)$ denote the number of cycles of length $r$ in the cycle decomposition of $w$. The $a_{r}$ are functions on the disjoint union of the symmetric groups $S_{n}$. As such they are algebraically independent over $\mathbf{Q}$, for if $f$ is a polynomial in $r$ variables such that $f\left(a_{1}(w), \ldots, a_{r}(w)\right)=0$
for all permutations $w$, then $f\left(m_{1}, \ldots, m_{r}\right)=0$ for all choices of non-negative integers $m_{i}$, and hence $f$ is the zero polynomial. Hence

$$
A=\mathrm{Q}\left[a_{1}, a_{2}, \ldots\right]
$$

is a polynomial ring. (The multiplication in $A$ is pointwise multiplication of functions: $(f g)(w)=f(w) g(w)$, not the induction product defined in the text.)
(a) For each partition $\rho=\left(1^{m_{1}} 2^{m_{2}} \ldots\right)$ let

$$
\binom{a}{\rho}=\prod_{r \geqslant 1}\binom{a_{r}}{m_{r}}=\prod_{r \geqslant 1} \frac{a_{r}^{\left(m_{r}\right)}}{m_{r}!}
$$

where $a_{r}^{\left(m_{r}\right)}$ is the 'falling factorial'

$$
a_{r}^{\left(m_{r}\right)}=a_{r}\left(a_{r}-1\right) \ldots\left(a_{r}-m_{r}+1\right)
$$

Since the $a_{r}$ are algebraically independent, the monomials $a_{1}^{m_{1}} a_{2}^{m_{2}} \ldots$ form a Q-basis of $A$, and hence the polynomials $\binom{a}{\rho}$ form another $Q$-basis.
Define a linear mapping $\theta: A \rightarrow \hat{\Lambda}_{\mathbf{Q}}$ by

$$
\theta(f)=\sum_{n \geqslant 0} \operatorname{ch}\left(f \mid S_{n}\right)
$$

for $f \in A$. If $f=\binom{a}{\rho}$ then

$$
\operatorname{ch}\left(f \mid S_{n}\right)=\frac{1}{n!} \sum_{w \in S_{n}}\binom{a}{\rho}(w) \psi(w)
$$

If $w$ has cycle-type $\tau=\left(1^{n_{1}} 2^{n_{2}} \ldots\right)$ we have $a_{r}(w)=n_{r}$ and hence $\binom{a}{\rho}(w)=$ $\Pi_{r>1}\binom{n_{r}}{m_{r}}$, which is equal to $z_{\tau} / z_{\rho} z_{\sigma}$ if $\tau=\rho \cup \sigma$ for some partition $\sigma$ (i.e. if $\rho$ is a subsequence of $\tau$ ) and is zero otherwise. It follows that

$$
\begin{aligned}
\theta\binom{a}{\rho} & =\sum_{\sigma} z_{\rho}^{-1} z_{\sigma}^{-1} p_{\rho} p_{\sigma} \\
& =z_{\rho}^{-1} p_{\rho} H
\end{aligned}
$$

where

$$
H=\sum_{\sigma} z_{\sigma}^{-1} p_{\sigma}=\sum_{n>0} h_{n}
$$

(b) Define a linear mapping $\varphi: \Lambda_{\mathbf{Q}} \rightarrow A$ by

$$
\varphi\left(p_{\rho}\right)=z_{\rho}\binom{a}{\rho}=\prod_{r \geqslant 1} r^{m_{r}} a_{r}^{\left(m_{r}\right)}
$$

for each partition $\rho=\left(1^{m_{1}} 2^{m_{2}} \ldots\right.$ ). From (a) above it follows that $\theta \varphi: \Lambda_{Q} \rightarrow \hat{\Lambda}_{Q}$ is multiplication by $H$. The mapping $\varphi$ is bijective and hence defines a new product $f * g$ on $A$ by the rule

$$
f * g=\varphi\left(\varphi^{-1}(f) \varphi^{-1}(g)\right)
$$

We have

$$
\binom{a}{\rho} *\binom{a}{\sigma}=\frac{z_{\rho \cup \sigma}}{z_{\rho} z_{\sigma}}\binom{a}{\rho \cup \sigma}
$$

or equivalently

$$
a^{(m)} * a^{(n)}=a^{(m+n)}
$$

for any two finite vectors $m=\left(m_{1}, m_{2}, \ldots\right), n=\left(n_{1}, n_{2}, \ldots\right)$ of non-negative inte. gers, where $a^{(m)}=a_{1}^{\left(m_{1}\right)} a_{2}^{\left(m_{2}\right)} \ldots$, and likewise for $a^{(n)}$.
(c) Let

$$
P=\prod_{r \geqslant 1}\left(1+p_{r}\right)^{a_{r}}
$$

Then $\varphi(f)=\langle P, f\rangle$ for all $f \in \Lambda$.
(Introducing variables $x=\left(x_{1}, x_{2}, \ldots\right)$, we have

$$
\begin{align*}
P(x) & =\prod_{r \geqslant 1}\left(1+p_{r}(x)\right)^{a_{r}}  \tag{1}\\
& =\prod_{r \geqslant 1} \sum_{m_{r} \geqslant 0}\binom{a_{r}}{m_{r}} p_{r}(x)^{m_{r}} \\
& =\sum_{\rho}\binom{a}{\rho} p_{\rho}(x) .
\end{align*}
$$

Let $C(x, y)=\Pi_{i, j}\left(1-x_{i} y_{j}\right)^{-1}=\Sigma_{\rho} z_{\rho}^{-1} p_{\rho}(x) p_{\rho}(y)$, as in $\S 4$, Example 9. Then it follows from (1) and the definition of $\varphi$ that $P(x)=\varphi_{y} C(x, y)$, where $\varphi_{y}$ acts on symmetric functions in the $y$ 's. Hence (loc. cit.)

$$
\left.\langle P, f\rangle=\varphi_{y}\langle C(x, y), f(x)\rangle=\varphi_{y} f(y)=\varphi(f) .\right)
$$

14. Let $\lambda=\left(\lambda_{1}, \lambda_{2}, \ldots\right)$ be a partition of $n$ and let $(N, \lambda)=(N) \cup \lambda=$ $\left(N, \lambda_{1}, \lambda_{2}, \ldots\right)$ where $N$ is any integer $\geqslant \lambda_{1}$. From (7.8) it follows that, for each $w \in S_{N+n}, \chi^{(N, \lambda)}(w)$ is equal to the coefficient of $x_{0}^{N+n} x_{1}^{\lambda_{1}+n-1} \ldots x_{n}^{\lambda_{n}}$ in the product

$$
\begin{equation*}
a_{\delta}\left(x_{0}, x_{1}, \ldots, x_{n}\right) \prod_{r>1} p_{r}\left(x_{0}, x_{1}, \ldots, x_{n}\right)^{a_{r}(w)} \tag{1}
\end{equation*}
$$

where, as in Example 13, $a_{r}(w)$ is the number of $r$-cycles in the cycle decomposition of $w$. Since the polynomial (1) is homogeneous in $x_{0}, x_{1}, \ldots, x_{n}$, nothing is lost
by setting $x_{0}=1$, which shows that $\chi^{(N, \lambda)}(w)$ is equal to the coefficient of $x_{1}^{\lambda_{1}+n-1} \ldots x_{n}^{\lambda_{n}}$ in

$$
a_{\delta}\left(x_{1}, \ldots, x_{n}\right) \prod_{i=1}^{n}\left(1-x_{i}\right) \prod_{r>1}\left(1+p_{r}\left(x_{1}, \ldots, x_{n}\right)\right)^{a_{r}(w)}
$$

and therefore is equal to the coefficient of $s_{\lambda}$ in

$$
\prod_{i>1}\left(1-x_{i}\right) \prod_{r>1}\left(1+p_{r}\right)^{a_{r}(w)}
$$

It follows that (as functions on $S_{N+n}$ ) we have

$$
\begin{equation*}
\chi^{(N, \lambda)}=\left\langle E P, s_{\lambda}\right\rangle \tag{2}
\end{equation*}
$$

where

$$
E=\prod_{i>1}\left(1-x_{i}\right)=\sum_{r>0}(-1)^{r} e_{r}
$$

and

$$
\begin{equation*}
P=\prod_{r>1}\left(1+p_{r}\right)^{a_{r}}=\sum_{\rho}\binom{a}{\rho} p_{\rho} \tag{3}
\end{equation*}
$$

as in Example 13.
The scalar product $\left\langle E P, s_{\lambda}\right\rangle$ on the right-hand side of (2) is a polynomial $X^{\lambda} \in A=\mathrm{Q}\left[a_{1}, a_{2}, \ldots\right]$ called the character polynomial corresponding to the partition $\lambda$. It has the property that $X^{\lambda} \mid S_{N+n}=\chi^{(N, \lambda)}$ for all $N \geqslant \lambda_{1}$.
There are various explicit formulas for the polynomials $X^{\lambda}$ :
(a) Since by (2.14)

$$
E=\sum_{\sigma}(-1)^{l(\sigma)} z_{\sigma}^{-1} p_{o}
$$

it follows from (3) that

$$
\begin{equation*}
X^{\lambda}=\sum_{\rho, \sigma}(-1)^{l(\sigma)} z_{\sigma}^{-1} \chi_{\rho \cup \sigma}^{\lambda}\binom{a}{\rho} \tag{4}
\end{equation*}
$$

summed over partitions $\rho, \sigma$ such that $|\rho|+|\sigma|=|\lambda|$.
(b) Alternatively, we have

$$
\begin{aligned}
X^{\lambda} & =\sum_{r>0}(-1)^{r}\left\langle e_{r} P, s_{\lambda}\right\rangle \\
& =\sum_{r>0}(-1)^{r}\left\langle P, s_{\lambda /\left(I^{r}\right)}\right\rangle \\
& =\sum_{\mu}(-1)^{|\lambda-\mu|}\left\langle P, s_{\mu}\right\rangle
\end{aligned}
$$

summed over partitions $\mu \subset \lambda$ such that $\lambda-\mu$ is a vertical strip. Hence

$$
\begin{equation*}
X^{\lambda}=\sum_{\mu}(-1)^{|\lambda-\mu|} \sum_{\rho} x_{\rho}^{\mu}\binom{a}{\rho} \tag{5}
\end{equation*}
$$

summed over $\mu$ as above, and $\rho$ such that $|\rho|=|\mu|$.
(c) Let $u_{\lambda}=E^{\perp} s_{\lambda}=\Sigma_{r>0}(-1)^{r} s_{\lambda /\left(I^{\prime}\right)}$. From (5.4) it follows that

$$
u_{\lambda}=\left|\begin{array}{ccc}
1 & 1 & 1  \tag{6}\\
h_{\lambda_{1}-1} & h_{\lambda_{1}} & h_{\lambda_{1}+n-1} \\
h_{\lambda_{2}-2} & h_{\lambda_{2}-1} & h_{\lambda_{2}+n-2} \\
\vdots & \vdots & \vdots \\
h_{\lambda_{n}-n} & h_{\lambda_{n}-n+1} & h_{\lambda_{n}}
\end{array}\right|
$$

From Example 13(c) we have

$$
X^{\lambda}=\left\langle E P, s_{\lambda}\right\rangle=\left\langle P, u_{\lambda}\right\rangle=\varphi\left(u_{\lambda}\right)
$$

where $\varphi: \Lambda_{\mathbf{Q}} \rightarrow A$ is the mapping defined in Example 13(b). Hence if we define

$$
\pi_{r}=\varphi\left(h_{r}\right)=\sum_{|\rho|=r}\binom{a}{\rho} \in A
$$

for all $r$ (so that $\pi_{r}=0$ if $r<0$ ), it follows from (6) that

$$
X^{\lambda}=\left|\begin{array}{ccc}
1 & 1 & 1  \tag{7}\\
\pi_{\lambda_{1}-1} & \pi_{\lambda_{1}} & \pi_{\lambda_{1}+n-1} \\
\pi_{\lambda_{2}-2} & \pi_{\lambda_{2}-1} & \pi_{\lambda_{2}+n-2} \\
\vdots & \vdots & \vdots \\
\pi_{\lambda_{n}-n} & \pi_{\lambda_{n}-n+1} & \pi_{\lambda_{n}}
\end{array}\right|^{*}
$$

where the asterisk indicates that the multiplication in $A$ is that defined in Example 13(b).
(d) By subtracting column from column in the determinant (7) we obtain

$$
\begin{equation*}
X^{\lambda}=\operatorname{det}^{*}\left(\pi_{\lambda_{i}-i+j}^{\prime}\right)_{1<i, j<n} \tag{8}
\end{equation*}
$$

where $\pi_{r}^{\prime}=\pi_{r}-\pi_{r-1}$, and again the asterisk indicates that the determinant is to be expanded using the $*$-product.
15. In general, if $A$ is a ring and $x, y \in A$, then $A x y$ is a submodule of $A y$ and is the image of $A x$ under the homomorphism $a \mapsto a y(a \in A)$, hence is isomorphic to a quotient of $A x$.
(a) Let $\lambda$ be a partition of $n$ and let $T$ be any numbering of the diagram of $\lambda$ with the numbers $1,2, \ldots, n$. Let $R$ (resp. $C$ ) denote the subgroup of $S_{n}$ that stabilizes
each row (resp. column) of $T$, so that $R \cong S_{\lambda}$ and $C \cong S_{\lambda^{\prime}}$. Let $A=\mathrm{Q}\left[S_{n}\right]$ be the group algebra of $S_{n}$ and let

$$
a=\sum_{u \in C} \varepsilon(u) u, \quad s=\sum_{v \in R} v
$$

Then $A s$ is the induced module ind ${ }_{R}^{S_{r}}(1)$, isomorphic to $H_{\lambda}$, and likewise $A a \cong E_{\lambda^{\prime}}$. Let $e=a s \in A$. Since $R \cap C=\{1\}$, the products $u v(u \in C, v \in R)$ are all distinct, and hence

$$
\begin{equation*}
e=1+\ldots \neq 0 \tag{1}
\end{equation*}
$$

From the observation above, $M_{\lambda}=A e$ is a submodule of $A s$ and is isomorphic to a quotient of $A a$. From the remark following (7.8) it follows that $M_{\lambda}$ is the irreducible $A$-module (or $S_{n}$-module) with character $\chi^{\lambda}$.
(b) Let $\varphi: A \rightarrow A$ be right multiplication by $e$. Then $\varphi\left(M_{\lambda}\right)=M_{\lambda} e=A e^{2} \subset A e=M_{\lambda}$. Since $M_{\lambda}$ is irreducible, it follows from Schur's lemma that $\varphi \mid M_{\lambda}$ is a scalar $c \in \mathbf{Q}$, and therefore $e^{2}=\varphi(e)=c e$. Hence $\varphi^{2}=c \varphi$, so the only eigenvalues of $\varphi$ are 0 and $c$, and the eigenvalue $c$ has multiplicity equal to the dimension of $M_{\lambda}$. Hence

$$
\begin{equation*}
\operatorname{trace} \varphi=c \operatorname{dim} M_{\lambda}=c n!/ h(\lambda) \tag{2}
\end{equation*}
$$

by (7.6) and $\S 5$, Example 2. On the other hand, it follows from (1) above that for each $w \in S_{n}$ the coefficient of $w$ in $\varphi(w)=w e$ is equal to 1 ; hence relative to the basis $S_{n}$ of $A$ the matrix of $\varphi$ has all its diagonal elements equal to 1 , and therefore

$$
\begin{equation*}
\text { trace } \varphi=n \text { ! } \tag{3}
\end{equation*}
$$

From (2) and (3) it follows that $c=h(\lambda)$ and hence that $\hat{e}=h(\lambda)^{-1}$ as is a primitive idempotent of $A$ affording the character $\chi^{\lambda}$.
(c) With the notation of (a) above, let $m_{T} \in \mathrm{Q}\left[x_{1}, \ldots, x_{n}\right]$ denote the monomial $x_{1}^{d(1)} \ldots x_{n}^{d(n)}$, where $d(i)=r-1$ if $i$ lies in the $r$ th row of $T$, and let $f_{T}$ denote the product $\Pi\left(x_{i}-x_{j}\right)$ taken over all pairs $(i, j)$ such that $j$ lies due north of $i$ in $T$. Thus $f_{T}$ is the product of the Vandermonde determinants corresponding to the columns of $T$, and $m_{T}$ is its leading term, so that $f_{T}=a m_{T}$.
Let $\theta: A \rightarrow \mathrm{Q}\left[x_{1}, \ldots, x_{n}\right]$ be the mapping $u \rightarrow u m_{T}$. Since $d(i)=d(j)$ if and only if $i$ and $j$ lie in the same row of $T$, it follows that the subgroup of $S_{n}$ that fixes $m_{T}$ is the row-stabilizer $R$, and hence that $\theta(A) \cong A s$. Consequently $\theta \mid M_{\lambda}$ is an isomorphism, and we may therefore identify $M_{\lambda}$ with its image $\theta\left(M_{\lambda}\right)=$ Aasm $_{T}=$ Aam $_{T}=A f_{T}$. In this incarnation $M_{\lambda}$ is the Specht module corresponding to the partition $\lambda$ : it is the $\mathbf{Q}$-vector space spanned by all $n$ ! polynomials $f_{T}$, for all numberings $T$ of the diagram of $\lambda$, and the symmetric group acts by permuting the $x$ 's.
(d) The dimension of $M_{\lambda}$ is equal to the number of standard tableaux of shape $\lambda$, by (7.6). In fact the polynomials $f_{T}$, where $T$ is a standard tableau, are linearly independent over any field, and hence form a basis of $M_{\lambda}$.
(Order the monomials $x^{\alpha}, \alpha \in \mathbf{N}^{n}$ as follows: $x^{\alpha}<x^{\beta}$ if and only if $\alpha$ precedes $\beta$ in the lexicographical order on $\mathbf{N}^{n}$.
(i) Suppose that $i<j$ and $d(i)<d(j)$ in $T$, and let $w$ be the transposition ( $i j$ ). Then $m_{T}<m_{w T}$.
(ii) Deduce from (i) that if $T$ is standard then $f_{T}=m_{T}+$ later monomials.
(iii) Let $T_{1}, \ldots, T_{r}$ be the standard tableaux of shape $\lambda$. The monomials $m_{T_{1}}, \ldots, m_{T}$ are all distinct, and we may assume that $m_{T_{1}}<\ldots<m_{T_{i}}$. Use (ii) to show that the $f_{T_{i}}$ are linearly independent: if $\sum c_{i} f_{T_{1}}=0$, the coefficient of $m_{T_{1}}$ in the left-hand side is equal to $c_{1}$, hence $c_{1}=0$; repeating the argument gives $c_{2}=0$, and so on.)
(e) From (d) it follows that each $f_{T}$ is a linear combination of the $f_{T_{i}}$, say $f_{T}=\sum c_{i} f_{T_{i}}$ with coefficients $c_{i} \in \mathbf{Q}$. Show that each $c_{i}$ is an integer. (Let $m$ be the common denominator of the rational numbers $c_{i}$, and let $c_{i}=m_{i} / m$ where the $m_{i}$ are integers. Then we have

$$
\begin{equation*}
m f_{T}=\sum m_{i} f_{T_{i}} \tag{4}
\end{equation*}
$$

If $m>1$, let $p$ be a prime dividing $m$, and reduce (4) mod. $p$. Since not all the $m_{i}$ are divisible by $p$, we conclude that the $f_{T_{i}}$ are linearly dependent over the field of $p$ elements, contrary to (d) above.)

Hence for each permutation $w \in S_{n}$ the entries in the matrix representing $w$, relative to the basis ( $f_{T_{1}}$ ) of $M_{\lambda}$, are all integers.
16. For each partition $\lambda$ of $n$, let $R_{\lambda}$ be an irreducible matrix representation of $S_{n}$ with character $\chi^{\lambda}$, such that $R_{\lambda}(w)$ is a matrix of integers for each $w \in S_{n}$. (Example 15(c) provides an example.) For each partition $\rho$ of $n$, let $\tilde{c}_{p}$ denote the sum (in the group ring $\mathrm{Z}\left[S_{n}\right]$ ) of all elements of cycle-type $\rho$ in $S_{n}$. Then $\bar{c}_{p}$ commutes with each $w \in S_{n}$, and hence by Schur's lemma $R_{\lambda}\left(\tilde{c}_{\rho}\right)$ is a scalar multiple of the unit matrix, say

$$
\begin{equation*}
R_{\lambda}\left(\tilde{c}_{\rho}\right)=\omega_{\rho}^{\lambda} 1_{d} \tag{1}
\end{equation*}
$$

where $\omega_{\rho}^{\lambda}$ is an integer and $d=n!/ h(\lambda)$ is the degree of $\chi^{\lambda}$. By taking traces in (1) we obtain

$$
\frac{n!}{z_{\rho}} \chi_{\rho}^{\lambda}=\frac{n!}{h(\lambda)} \omega_{\rho}^{\lambda}
$$

and therefore

$$
\begin{equation*}
\omega_{\rho}^{\lambda}=\frac{h(\lambda)}{z_{\rho}} \chi_{\rho}^{\lambda} \tag{2}
\end{equation*}
$$

is an integer for all $\lambda, \rho$.
Let $C_{n}$ denote the centre of the group ring $\mathbf{Z}\left[S_{n}\right]$ : it is a commutative ring with $\mathbf{Z}$-basis $\left(\tilde{c}_{\rho}\right)_{|\rho|-n}$. For each partition $\lambda$ of $n$, the linear mapping $\omega^{\lambda}: C_{n} \rightarrow \mathbf{Z}$ defined by $\omega^{\lambda}\left(\bar{c}_{\rho}\right)=\omega_{\rho}^{\lambda}$ is a ring homomorphism, since $R_{\lambda}\left(\tilde{c}_{\rho} \tilde{c}_{\sigma}\right)=R_{\lambda}\left(\tilde{c}_{\rho}\right) R_{\lambda}\left(\tilde{c}_{\sigma}\right)$. Moreover the $\omega^{\lambda},|\lambda|=n$, are a $\mathbf{Z}$-basis of $\operatorname{Hom}\left(C_{n}, \mathbf{Z}\right)$.
17. (a) For each partition $\lambda$, the 'augmented Schur function' $\bar{S}_{\lambda}$ is defined by

$$
\bar{s}_{\lambda}=h(\lambda) s_{\lambda}=\sum_{\rho} \frac{h(\lambda)}{z_{\rho}} \chi_{\rho}^{\lambda} p_{\rho}=\sum_{\rho} \omega_{\rho}^{\lambda} p_{\rho}
$$

in the notation of Example 16. Thus $\tilde{s}_{\lambda}$ is a polynomial in the power sums $p_{r}$ with integer coefficients, i.e. $\tilde{s}_{\lambda} \in \Psi$, where $\Psi=\mathbf{Z}\left[p_{1}, p_{2}, \ldots\right]$ is the subring of $\Lambda$ generated by the power sums. Moreover, $\tilde{s}_{\lambda}$ is the smallest integer multiple of $s_{\lambda}$ that lies in $\Psi$, since the coefficient of $p_{1}^{n}$ in $\tilde{s}_{\lambda}$ is 1 .
(b) Let $l$ be a prime number (the letter $p$ being preempted) and let $\Psi_{l}^{\prime}$ denote the subring of $\Psi$ generated by the $p_{r}$ with $r$ prime to $l$. Show that $\tilde{s}_{\lambda} \in \Psi_{l}^{\prime}$ if and only if $\lambda$ is an $l$-core ( $\$ 1$, Example 8).
(If $\lambda$ is an $l$-core, all the hook-lengths in $\lambda$ are prime to $l$, and hence all the border strips of $\lambda$ have lengths prime to $l$. From this observation and Example 5 it follows that $\chi_{\rho}^{\lambda}=0$ if $\rho$ has any parts divisible by $l$, and hence that $\bar{s}_{\lambda} \in \Psi_{l}^{\prime}$. Conversely, if $\lambda$ is not an $l$-core, let $\lambda$ and $\lambda^{*}$ denote the $l$-core and $l$-quotient of $\lambda$ ( $\S 1$, Example 8). Let $\left|\lambda^{*}\right|=b \geqslant 1$ and let $|\tilde{\lambda}|=a$. Then for the partition $\rho=\left(l^{b} 1^{a}\right)$ we have $\chi_{\rho}^{\lambda}= \pm a!b!/ h(\tilde{\lambda}) h\left(\lambda^{*}\right) \neq 0$, and hence $\tilde{s}_{\lambda} \notin \Psi_{l}^{\prime}$.)
(c) Let $X$ be an indeterminate and $\varepsilon_{X}: \Psi \rightarrow \mathbf{Z}[X]$ the homomorphism defined by $\varepsilon_{X}\left(p_{r}\right)=X$ for all $r \geqslant 1$. Then

$$
\varepsilon_{X}\left(\tilde{s}_{\lambda}\right)=c_{\lambda}(X)
$$

where $c_{\lambda}(X)$ is the content polynomial of $\lambda$ ( $\S 1$, Example 11).
18. Let $\lambda$ be a partition of $n$, let $l$ be a prime number, and let $\kappa$ be the $l$-core of d. Then

$$
\begin{equation*}
\tilde{s}_{\lambda} \equiv \tilde{s}_{\kappa}\left(p_{1}^{l}-p_{l}\right)^{r} \quad(\bmod . l) \tag{1}
\end{equation*}
$$

in $\Psi=\mathbf{Z}\left[p_{1}, p_{2}, \ldots\right]$, where $r=(n-|\kappa|) / l$ and $\tilde{s}_{\lambda}$ is as defined in Example 17.
The proof of (1) uses some concepts from modular representation theory, for which we refer to [P4]: namely the notion of the defect group of a block (or equivalently of a central character) and the Brauer homomorphism.
Let $F$ denote the field of $l$ elements. For any finite group $G$, let $C(G)$ denote the centre of the group algebra $F[G]$. For each partition $\lambda$ of $n$ we have a character $\omega^{\lambda}: C\left(S_{n}\right) \rightarrow F$ of the $F$-algebra $C\left(S_{n}\right)$, obtained from $\omega^{\lambda}$ (Example 16) by reduction modulo $l$. Each defect group $D^{\lambda}$ of $\boldsymbol{\sigma}^{\lambda}$ is a Sylow $l$-subgroup of the centralizer of an element of cycle-type ( $l^{m}$ ) in $S_{l m} \subset S_{n}$, where $0 \leqslant m \leqslant n / l$ ([J9], 6.2.39). It follows that if $D^{\lambda} \neq\{1\}$, then $D^{\lambda}$ contains a subgroup $Q$ of order $l$, generated by an $l$-cycle. On the other hand, if $D^{\lambda}=\{1\}$, there is a partition $\rho$ of $n$ for which both $z_{\rho}$ and $\omega_{\rho}^{\lambda}$ are prime to $l$, and hence (Example 16) $h(\lambda) \chi_{\rho}^{\lambda}=z_{\rho} \omega_{\rho}^{\lambda}$ is prime to $l$. Consequently $h(\lambda)$ is prime to $l$ and therefore ( $\$ 1$, Example 10) $\lambda$ is an l-core.
Assume now that $\lambda$ is not an $l$-core, so that $D^{\lambda}$ contains $Q$ as above. Let $H=Q \times S_{n-l}$ be the normalizer of $Q$ in $S_{n}$. Then the mapping $\varphi: C\left(S_{n}\right) \rightarrow C(H)$ $=C(Q) \otimes_{F} C\left(S_{n-l}\right)$ defined by restriction to $H$ is an $F$-algebra homomorphism (the Brauer homomorphism), and $\varpi^{\lambda}$ factors through $\varphi$ : say $\varpi^{\lambda}=\left(\varepsilon \otimes \varpi^{\mu}\right) \circ \varphi$, where $\mu$ is some partition of $n-l$, and $\varepsilon$ is the unique (trivial) character of $C(Q)$.
If now $\rho$ is a partition of $n$, the conjugacy class $\tilde{c}_{\rho}$ in $S_{n}$ meets $H$ only if $\rho$ is of the form ( $\left(^{l}\right) \cup \sigma$ or $(l) \cup \sigma$ for some partition $\sigma$ of $n-l$. If $\rho=\left(l^{l}\right) \cup \sigma$ we have $\omega^{\lambda}\left(\tilde{c}_{\rho}\right)=\sigma^{\mu}\left(\tilde{c}_{\sigma}\right)$, and if $\rho=(l) \cup \sigma$ we have $\sigma^{\lambda}\left(\tilde{c}_{\rho}\right)=(l-1) \sigma^{\mu}\left(\tilde{c}_{\sigma}\right)=$ - $\sigma^{\mu}\left(\tilde{c}_{\sigma}\right)$. Since $\omega^{\lambda}\left(\tilde{c}_{\rho}\right)$ is the reduction modulo $l$ of $\omega_{\rho}^{\lambda}$ (Example 16) it follows
that modulo $l$ we have $\omega_{\rho}^{\lambda} \equiv \omega_{\sigma}^{\mu}$ if $\rho=\left(1^{l}\right) \cup \sigma, \omega_{\rho}^{\lambda} \equiv-\omega_{\sigma}^{\mu}$ if $\rho=(l) \cup \sigma$, and $\omega_{\rho}^{\lambda} \equiv 0$ for all other $\rho$. Hence

$$
\tilde{s}_{\lambda}=\sum_{\rho} \omega_{\rho}^{\lambda} p_{\rho} \equiv\left(\sum_{\sigma} \omega_{\sigma}^{\mu} p_{\sigma}\right)\left(p_{1}^{l}-p_{l}\right)
$$

so that

$$
\tilde{s}_{\lambda} \equiv \tilde{s}_{\mu}\left(p_{1}^{\prime}-p_{l}\right) \quad(\bmod . l)
$$

If $\mu$ is not an $l$-core we may repeat the argument. In this way we shall obtain

$$
\begin{equation*}
\tilde{s}_{\lambda} \equiv \tilde{s}_{\nu}\left(p_{1}^{l}-p_{l}\right)^{q} \tag{2}
\end{equation*}
$$

for some integer $q \geqslant 1$ and some $l$-core $\nu$. Now apply the specialization $\varepsilon_{X}: p_{r} \mapsto X$ ( $r \geqslant 1$ ) (Example 17(c)): we obtain

$$
\begin{aligned}
c_{\lambda}(X) & \equiv c_{\nu}(X)\left(X^{l}-X\right)^{q} \quad(\bmod . l) \\
& \equiv c_{\pi}(X)
\end{aligned}
$$

where $\pi=\nu+(l q)$ has $l$-core $\nu$. From $\S 1$, Example 11(c) we now conclude that the partitions $\lambda$ and $\pi$ have the same $l$-core, so that $\nu=\kappa$ and $q=r$, completing the proof.
19. Let $\lambda, \mu$ be partitions of $n$, and let $l$ be a prime number. Then with the notation of Example $17, \tilde{s}_{\lambda} \equiv \tilde{s}_{\mu}$ (mod. $l$ ) if and only if $\lambda, \mu$ have the same $l$-core ('Nakayama's conjecture'). (If $\tilde{s}_{\lambda} \equiv \tilde{s}_{\mu}$, then $c_{\lambda}(X) \equiv c_{\mu}(X)$ by Example 17(c), and hence $\lambda, \mu$ have the same $l$-core by $\S 1$, Example 11(c). Conversely, if $\lambda, \mu$ have the same $l$-core, then it follows from Example 18 that $\tilde{s}_{\lambda} \equiv \tilde{s}_{\mu}$ )
20. As in $\S 5$, Example 25 we shall identify each $f \otimes g \in \Lambda \otimes \Lambda$ with $f(x) g(y)$, where $(x)$ and $(y)$ are two sets of independent variables. Define a comultiplication $\Delta^{*}: \Lambda \rightarrow \Lambda \otimes \Lambda$ and a counit $\varepsilon^{*}: \Lambda \rightarrow \mathbf{Z}$ by

$$
\Delta^{*} f=f(x y)
$$

where $(x y)$ is the set of all products $x_{i} y_{j}$, and

$$
\varepsilon^{*} f=f(1,0,0, \ldots)
$$

for all $f \in \Lambda$.
With respect to $\Delta^{*}$ and $\varepsilon^{*}, \Lambda$ is a cocommutative Hopf algebra over $\mathbf{Z}$; both $\Delta^{*}$ and $\varepsilon^{*}$ are ring homomorphisms, and $\left(1 \otimes \varepsilon^{*}\right) \circ \Delta^{*}$ is the identity mapping.
(a) Show that, for all $n \geqslant 1$,

$$
\begin{array}{ll}
\Delta^{*} h_{n}=\sum_{|\lambda|=n} s_{\lambda} \otimes s_{\lambda}, & \varepsilon^{*} h_{n}=1 \\
\Delta^{*} e_{n}=\sum_{|\lambda|=n} s_{\lambda} \otimes s_{\lambda^{\prime}}, & \varepsilon^{*} e_{n}=\delta_{1 n} \\
\Delta^{*} p_{n}=p_{n} \otimes p_{n}, & \varepsilon^{*} p_{n}=1 \tag{3}
\end{array}
$$

Also we have (7.9)

$$
\begin{equation*}
\Delta^{*} s_{\lambda}=\sum_{\mu, \nu} \gamma_{\mu \nu}^{\lambda} s_{\mu} \otimes s_{\nu} \tag{4}
\end{equation*}
$$

(b) As in $\S 5$, Example 25 define a scalar product on $\Lambda \otimes \Lambda$ by

$$
\left\langle f_{1} \otimes g_{1}, f_{2} \otimes g_{2}\right\rangle=\left\langle f_{1}, f_{2}\right\rangle\left\langle g_{1}, g_{2}\right\rangle
$$

for $f_{1}, f_{2}, g_{1}, g_{2} \in \Lambda$. With respect to this scalar product, $\Delta^{*}$ is the adjoint of the internal product: in other words, we have

$$
\begin{equation*}
\left\langle\Delta^{*} f, g \otimes h\right\rangle=\langle f, g * h\rangle \tag{5}
\end{equation*}
$$

for all $f, g, h \in \Lambda$. (By linearity we may take $f=s_{\lambda}, g=s_{\mu}, h=s_{\nu}$, and then both sides of (5) are equal to $\gamma_{\mu \nu}^{\lambda}$ by (4) above.)
21. For any commutative ring $A$, let $\mathbf{G}(A)$ denote the set of all unital ring homomorphisms $\alpha: \Lambda \rightarrow A$. Each such homomorphism is determined by the formal power series

$$
\alpha H(t)=\sum_{i \geqslant 0} \alpha\left(h_{i}\right) t^{i} \in A[[t]]
$$

with constant term $\alpha\left(h_{0}\right)=1$, and we may therefore identify $\mathbf{G}(A)$ with the set of formal power series in $A[[t]]$ with constant term equal to 1.
(a) The comultiplication $\Delta: \Lambda \rightarrow \Lambda \otimes \Lambda$ defined in §5, Example 25 induces an abelian group structure on $\mathbf{G}(A)$ as follows. If $\alpha, \beta \in \mathbf{G}(A)$, we define

$$
\alpha+\beta=m_{A} \circ(\alpha \otimes \beta) \circ \Delta
$$

where $m_{A}: A \otimes A \rightarrow A$ is the multiplication in $A$. We have then (loc. cit.)

$$
(\alpha+\beta) h_{k}=\sum_{i+j=k} \alpha\left(h_{i}\right) \beta\left(h_{j}\right)
$$

so that

$$
(\alpha+\beta) H(t)=(\alpha H(t))(\beta H(t))
$$

the product of the power series $\alpha H(t)$ and $\beta H(t)$ in $A[[t]]$.
Next let $\varpi: \Lambda \rightarrow \Lambda$ be the involution defined by $\varpi\left(h_{i}\right)=(-1)^{i} e_{i}(i \geqslant 1)$, so that on $\Lambda^{n}$, $\varpi$ is $(-1)^{n} \omega$. Then define

$$
-\alpha=\alpha \circ \varpi ;
$$

we have $(-\alpha) H(t)=\alpha(E(-t))=(\alpha H(t))^{-1}$, so that $(-\alpha)(H(t))$ is the inverse in $A[[t]]$ of the power series $\alpha H(t)$.

Finally, the zero element 0 of $\mathbf{G}(A)$ is induced by the counit $\varepsilon$ : namely $0=e_{A} \circ \varepsilon$, where $e_{A}: \mathbf{Z} \rightarrow A$ is the unique homomorphism of $\mathbf{Z}$ into $A$. Since $\varepsilon\left(h_{i}\right)=0$ for each $i \geqslant 1$, it follows that $0 H(t)=1$.
(b) The comultiplication $\Delta^{*}$ of Example 20 induces a multiplication in $\mathbf{G}(A)$ by the rule

$$
\alpha \beta=m_{A} \circ(\alpha \otimes \beta) \circ \Delta^{*}
$$

This product may be described as follows: if we formally factorize the power series $\alpha H(t)$ and $\beta H(t)$, say

$$
\alpha H(t)=\Pi\left(1+\xi_{i} t\right), \quad \beta H(t)=\Pi\left(1+\eta_{i} t\right),
$$

then

$$
(\alpha \beta) H(t)=\prod_{i, j}\left(1+\xi_{i} \eta_{j} t\right) .
$$

The element $\mathbf{1} \in \mathbf{G}(A)$ defined by

$$
1=e_{A} \circ \varepsilon^{*}
$$

with $\varepsilon^{*}$ the counit defined in Example 20, is the identity element for this multiplication, and $\mathbf{1}(H(t))=(1-t)^{-1}$.
(c) With addition and multiplication as defined in (a) and (b), $\mathbf{G}(A)$ is a commutative ring, with zero element 0 and identity element 1 . If $\varphi: A \rightarrow B$ is a homomorphism of $A$ into a commutative ring $B$, then $\mathbf{G}(\varphi): \mathbf{G}(A) \rightarrow \mathbf{G}(B)$ defined by $\mathbf{G}(\varphi) \alpha=\varphi \circ \alpha$ is a ring homomorphism. Thus $\mathbf{G}$ is a covariant functor on the category of commutative rings.
22. Define an internal product on $\Lambda \otimes \Lambda$ by

$$
\left(f_{1} \otimes f_{2}\right) *\left(g_{1} \otimes g_{2}\right)=\left(f_{1} * g_{1}\right) \otimes\left(f_{2} * g_{2}\right)
$$

for $f_{1}, f_{2}, g_{1}, g_{2} \in \Lambda$. Show that $\Delta(f * g)=(\Delta f) *(\Delta g)$ for all $f, g \in \Lambda$, but that in general $\Delta^{*}(f * g) \neq\left(\Delta^{*} f\right) *\left(\Delta^{*} g\right)$.
23. (a) Let $f, g, h \in \Lambda$. Then the scalar product $\langle f * g, h\rangle$ is symmetrical in $f, g$, and $h$.
(b) Let $\left(u_{\lambda}\right),\left(v_{\lambda}\right)$ be dual bases of $\Lambda$, and let $f \in \Lambda$. Then

$$
\Delta^{*} f=\sum_{\lambda}\left(u_{\lambda} * f\right) \otimes v_{\lambda} .
$$

(For $\left\langle\Delta^{*} f, g \otimes u_{\lambda}\right\rangle=\left\langle f, g * u_{\lambda}\right\rangle=\left\langle u_{\lambda} * f, g\right\rangle$ by (a) above and Example 20(b).).
(c) Let $f, g, h \in \Lambda$ and let $\Delta h=\sum a_{i} \otimes b_{i}$. Then

$$
(f g) * h=\sum\left(f * a_{i}\right)\left(g * b_{i}\right) .
$$

In particular,

$$
(f g) * s_{\lambda}=\sum_{\mu}\left(f * s_{\lambda / \mu}\right)\left(g * s_{\mu}\right) .
$$

(d) Let $\lambda, \mu$ be partitions. Then

$$
h_{\lambda} * s_{\mu}=\sum \prod_{i \geqslant 1} s_{\mu^{(i)} / \mu^{(i-1)}}
$$

summed over all sequences $\left(\mu^{(0)}, \mu^{(1)}, \ldots\right.$ ) of partitions such that $0=\mu^{(0)} \subset \mu^{(1)} \subset$ $\ldots \subset \mu$ and $\left|\mu^{(i)}-\mu^{(i-1)}\right|=\lambda_{i}$ for each $i \geqslant 1$. (Use (c).)
(e) If $M=\left(m_{i j}\right)$ is a matrix of non-negative integers, let $h_{M}=\Pi_{i, j} h_{m_{i j}}$. If $\lambda$ and $\mu$ are partitions, show that

$$
h_{\lambda} * h_{\mu}=\sum h_{M}
$$

summed over all matrices $M$ of non-negative integers with $l(\lambda)$ rows and $l(\mu)$ columns and row sums $\lambda_{i}$, column sums $\mu_{j}$.
24. The symmetric group $S_{n}$ embeds naturally in $S_{n+1}$ as the subgroup that fixes $n+1$. The union

$$
S_{\infty}=\bigcup_{n \geqslant 0} S_{n}
$$

is the group of permutations of the set of positive integers that fix all but a finite subset. If $w \in S_{n}$ has cycle-type $\rho$, where $\rho=\left(\rho_{1}, \ldots, \rho_{r}\right)$ is a partition of length $r$, then when regarded as an element of $S_{n+k}$ the permutation $w$ has cycle type $\left(\rho_{1}, \ldots, \rho_{r}, 1, \ldots, 1\right)=\rho \cup\left(1^{k}\right)$. We are therefore led to define the modified cycle-type of $w$ to be the partition $\left(\rho_{1}-1, \ldots, \rho_{r}-1\right)$. This modified cycle-type is stable under the embedding of $S_{n}$ in $S_{n+k}$.

For each partition $\lambda$, let $C_{\lambda}$ denote the set of all $w \in S_{\infty}$ whose modified cycle-type is $\lambda$. As $\lambda$ runs through all partitions, the $C_{\lambda}$ are the conjugacy classes of the group $S_{\infty}$. For example, $C_{(1)}$ is the class of transpositions, and $C_{0}$ consists of the identity permutation.

For each $n \geqslant 0$, let $Z_{n}$ denote the centre of the group ring $\mathbf{Z}\left[S_{n}\right]$, and for each partition $\lambda$ let $c_{\lambda}(n) \in Z_{n}$ denote the sum of all $w \in S_{n}$ whose modified cycle-type is $\lambda$, i.e. the sum of all $w \in S_{n} \cap C_{\lambda}$. We have $c_{\lambda}(n) \neq 0$ if and only if $|\lambda|+l(\lambda) \leqslant n$.

Now let $\lambda, \mu$ be partitions. The product $c_{\lambda}(n) c_{\mu}(n)$ in $Z_{n}$ will be a linear combination of the $c_{\nu}(n)$, say

$$
\begin{equation*}
c_{\lambda}(n) c_{\mu}(n)=\sum_{\nu} a_{\lambda \mu}^{\nu}(n) c_{\nu}(n) \tag{1}
\end{equation*}
$$

with coefficients $a_{\lambda \mu}^{\nu}(n) \in \mathbf{N}$, and zero unless $|\nu| \leqslant|\lambda|+|\mu|$. For example, when $\lambda=\mu=(1), c_{(1)}(n)^{2}$ is the sum of all products $(i j)(k l)$ of two transpositions in $S_{n}$, and a simple calculation gives

$$
\begin{equation*}
c_{(1)}(n)^{2}=3 c_{(2)}(n)+2 c_{(11)}(n)+\frac{1}{2} n(n-1) c_{0}(n) . \tag{2}
\end{equation*}
$$

In general (see [F2]) the coefficients $a_{\lambda \mu}^{\nu}(n)$ are polynomial functions of $n$, and are independent of $n$ if and only if $|\nu|=|\lambda|+|\mu|$. We may therefore, following [F2], construct a ring as follows. Let $R$ be the subring of the polynomial ring $\mathrm{Q}[t]$ consisting of polynomials that take integer values at all integers (the binomial coefficients $\binom{t}{n}, n \geqslant 0$, form a $\mathbf{Z}$-basis of $R$ ), and let $F$ be the commutative $R$-algebra with $R$-basis $\left(c_{\lambda}\right)$ indexed by partitions $\lambda$ and multiplication defined by

$$
\begin{equation*}
c_{\lambda} c_{\mu}=\sum_{\nu} a_{\lambda \mu}^{\nu} c_{\nu} \tag{3}
\end{equation*}
$$

where $a_{\lambda \mu}^{\nu} \in R$ takes the value $a_{\lambda \mu}^{\nu}(n)$ at the integer $n$, and the sum is over partitions $\nu$ such that $|\nu| \leqslant|\lambda|+|\mu|$. If we assign each $c_{\lambda}$ the degree $|\lambda|, F$ is not a
graded ring, because the right-hand side of (3) is not homogeneous; but it is a filtered ring: if $F^{r}$ is the subspace of $F$ spanned by the $c_{\lambda}$ such that $|\lambda| \leqslant r$, then $F^{r} . F^{s} \subset F^{r+s}$. We may therefore form the associated graded ring $G_{R}=\operatorname{Gr}(F): G_{R}$ is the direct sum $\oplus_{r>0} G_{R}^{r}$, where $G_{R}^{r}=F^{r} / F^{r-1}$, and the multiplication in $G_{R}$ is induced from that in $F$. The effect of passing from $F$ to $G_{R}$ is simply to throw out the terms of lower degree in (3): in $G_{R}$ the multiplication is defined by

$$
\begin{equation*}
c_{\lambda} c_{\mu}=\sum_{|\nu|=|\lambda|+|\mu|} a_{\lambda \mu}^{\nu} c_{\nu} \tag{4}
\end{equation*}
$$

and (as remarked above) the structure constants $a_{\lambda \mu}^{\nu}$ such that $|\nu|=|\lambda|+|\mu|$ are non-negative integers. (For example, in $G_{R}$ we have $c_{(1)}^{2}=3 c_{(2)}+2 c_{(11)}$, from (2) above.) It follows that $G_{R}=R \otimes_{\mathrm{Z}} G$, where $G$ is the free $\mathbf{Z}$-module with basis ( $c_{\lambda}$ ) and multiplicative structure given by (4).
Let us write $c_{r}$ in place of $c_{(r)}, r \geqslant 1\left(c_{0}=1\right.$ is the identity element of $F$ and $\left.G\right)$. Show that
(a) if $|\lambda|+r=m$, then

$$
a_{\lambda(r)}^{(m)}= \begin{cases}(m+1) r!/ \prod_{i>0} m_{i}(\lambda)! & \text { if } l(\lambda) \leqslant r+1,  \tag{5}\\ 0 & \text { otherwise }\end{cases}
$$

where $m_{0}(\lambda)=r+1-l(\lambda)$;
(b) if $|\lambda|+r=|\nu|$ then

$$
\begin{equation*}
a_{\lambda(r)}^{\nu}=\sum a_{\mu(r)}^{\left(\nu_{l}\right)} \tag{6}
\end{equation*}
$$

summed over pairs $(i, \mu)$ such that $\mu \cup \nu=\lambda \cup\left(\nu_{i}\right)$. Deduce that $a_{\lambda(r)}^{\nu}=0$ unless $\nu \geqslant \lambda \cup(r)$, and that $a_{\lambda(r)}^{\lambda}(r)>0$.
From (b) it follows that, for each partition $\lambda=\left(\lambda_{1}, \lambda_{2}, \ldots\right), c_{\lambda_{1}} c_{\lambda_{2}} \ldots$ is of the form

$$
c_{\lambda_{1}} c_{\lambda_{2}} \ldots=\sum_{\mu>\lambda} d_{\lambda \mu} c_{\mu}
$$

with $d_{\lambda \lambda}>0$. Hence $c_{1}, c_{2}, \ldots$ are algebraically independent elements of $G$, and generate $G$ over $\mathbf{Q}$, i.e. $G \otimes \mathbf{Q}=\mathbf{Q}\left[c_{1}, c_{2}, \ldots\right]$. Moreover, the multiplicative structure of $G$ is uniquely determined by (a) and (b).
25 . Let $\psi$ be the involution on $\Lambda$ defined in $\S 2$, Example 24 . With the notation of that Example, the $h_{\lambda}^{*}=\psi\left(h_{\lambda}\right)$ form a Z-basis of $\Lambda$. Let $\left(g_{\lambda}\right)$ be the dual basis, so that $\left\langle g_{\lambda}, h_{\mu}^{*}\right\rangle=\delta_{\lambda \mu}$. Equivalently, $g_{\lambda}=\psi^{\perp}\left(m_{\lambda}\right)$, where $\psi^{\perp}$ is the adjoint of $\psi$ relative to the scalar product. We shall show that, in the notation of Example 24 above, the linear mapping $\varphi: \Lambda \rightarrow G$ defined by $\varphi\left(g_{\lambda}\right)=c_{\lambda}$ for all partitions $\lambda$ is a ring isomorphism.
(a) From §2, Example 24 we have

$$
h_{n}^{*}=-h_{n}+\sum_{\mu<(n)} u_{(n) \mu} h_{\mu}
$$

for suitable integers $u_{(n) \mu}$, and hence $h_{\lambda}^{*}$ is of the form

$$
h_{\lambda}^{*}=(-1)^{l(\lambda)} h_{\lambda}+\sum_{\mu<\lambda} u_{\lambda \mu} h_{\mu}
$$

This shows that the transition matrix $M\left(h^{*}, h\right)\left(=M\left(h, h^{*}\right)\right)$ is strictly upper triangular, with diagonal elements $(-1)^{l(\lambda)}$. By (6.3)(3) we have $M(g, m)=$ $M\left(h, h^{*}\right)^{\prime}$, hence

$$
g_{\lambda}=(-1)^{l(\lambda)} m_{\lambda}+\sum_{\mu>\lambda} u_{\mu \lambda} m_{\mu} .
$$

In particular, $g_{(n)}=-m_{(n)}=-p_{n}$.
(b) Let $b_{\lambda \mu}^{\nu}=\left\langle g_{\lambda} g_{\mu}, h_{\nu}^{*}\right\rangle$ be the coefficient of $g_{\nu}$ in $g_{\lambda} g_{\mu}$. Since the $g_{(n)}=-p_{n}$ generate $\Lambda_{\mathbf{Q}}$, in order to prove that $\varphi$ defined above is a ring isomorphism it will be enough to show that $b_{\lambda \mu}^{\nu}=a_{\lambda \mu}^{\nu}$ whenever $\mu$ is a one-part partition ( $r$ ), and for this purpose it will suffice to show that the $b$ 's satisfy the counterparts of the two relations (5) and (6) of Example 24.
Consider first

$$
\begin{equation*}
b_{\lambda(r)}^{(m)}=-\left\langle g_{\lambda} p_{r}, h_{m}^{*}\right\rangle=-\left\langle g_{\lambda}, p_{r}^{\perp} h_{m}^{*}\right\rangle \tag{1}
\end{equation*}
$$

in the notation of $\S 5$, Example 3. From $\S 2$, Example $24, h_{m}^{*}$ is the coefficient of $t^{m}$ in

$$
\frac{1}{m+1} H(t)^{-m-1}=\frac{1}{m+1} \exp \left(-(m+1) \sum_{r \geqslant 1} \frac{p_{r} t^{r}}{r}\right)
$$

Hence $-p_{r}^{\perp} h_{m}^{*}=-r \partial h_{m}^{*} / \partial p_{r}$ is equal to the coefficient of $t^{m}$ in $t^{r} H(t)^{-m-1}$, that is to say it is the residue of the differential

$$
\begin{equation*}
t^{r} \mathrm{~d} t /(t H(t))^{m+1}=\frac{1}{r+1} \mathrm{~d}\left(t^{r+1}\right) / u^{m+1} \tag{2}
\end{equation*}
$$

where $u=t H(t)$ as in §2, Example 24. Now

$$
\begin{aligned}
t^{r+1} & =u^{r+1}\left(\sum h_{n}^{*} u^{n}\right)^{r+1} \\
& =\sum \frac{(r+1)!}{\prod_{i \geqslant 0} m_{i}(\lambda)!} h_{\lambda}^{*} u^{|\lambda|+r+1}
\end{aligned}
$$

summed over partitions $\lambda$ of length $l(\lambda) \leqslant r+1$, where $m_{0}(\lambda)=r+1-l(\lambda)$. Hence from (2) we obtain

$$
-p_{r}^{\perp} h_{m}^{*}=\sum \frac{r!(m+1)}{\prod_{i \geqslant 0} m_{i}(\lambda)!} h_{\lambda}^{*}
$$

summed over partitions $\lambda$ such that $l(\lambda) \leqslant r+1$ and $|\lambda|=m-r$. From (1) it now follows by comparison with relation (5) of Example 24 that $b_{\lambda(r)}^{(m)}=a_{\lambda(r)}^{(m)}$ whenever $|A|+r=m$.
(c) Finally consider

$$
b_{\lambda(r)}^{\nu}=-\left\langle g_{\lambda} p_{r}, h_{\nu}^{*}\right\rangle=-\left\langle g_{\lambda}, p_{r}{ }^{\perp} h_{\nu}^{*}\right\rangle .
$$

Since $p_{r}^{\perp}=r \partial / \partial p_{r}$ is a derivation ( $\S 5$, Example 3) we have

$$
p_{r}^{\perp} h_{\nu}^{*}=\sum h_{\nu}^{*(i)} p_{r}^{\perp} h_{\nu i}^{*},
$$

where $\nu^{(i)}=\left(\nu_{1}, \ldots, \hat{\nu}_{i}, \ldots\right)$, and the sum is over $i \geqslant 1$ such that $\nu_{i} \leqslant r$. Hence

$$
\begin{equation*}
b_{\lambda(r)}^{\nu}=-\sum\left\langle g_{\lambda}, h_{\nu}^{*}(i) p_{r}^{\perp} h_{\nu_{l}}^{*}\right\rangle, \tag{3}
\end{equation*}
$$

in which the scalar product on the right-hand side is the coefficient of $h_{\lambda}^{*}$ in $h_{\nu}^{*}(i) p_{r}^{\perp} h_{\nu i}^{*}$, hence is zero unless $\lambda=\nu^{(i)} \cup \mu$ for some partition $\mu$, i.e. $\mu \cup \nu=\lambda \cup$ ( $\nu_{i}$ ); and then is equal to the coefficient of $h_{\mu}^{*}$ in $p_{r}^{\perp} h_{\nu_{i}}^{*}$, which is $\left\langle g_{\mu}, p_{r}^{\perp} h_{\nu_{i}}^{*}\right\rangle=$ $-b_{\mu(i)}^{\left(\nu_{i}\right)}$ by (1). Hence (3) takes the form

$$
b_{\lambda(r)}^{\nu}=\sum b_{\mu(r)}^{(\nu)}
$$

summed over pairs $(i, \mu)$ such that $\mu \cup \nu=\lambda \cup\left(\nu_{i}\right)$. We have thus established the counterpart of relation (6) of Example 24, and the proof is complete.
26. Let $\delta: R \rightarrow R \otimes R$ be the comultiplication on $R$ that corresponds to $\Delta: \Lambda \rightarrow$ $\Lambda \otimes \Lambda$ (§5, Example 25) under the characteristic map (so that (ch $\otimes \mathrm{ch}) \circ \delta=\Delta \circ \mathrm{ch}$ ). If $f \in R_{n}$, show that

$$
\delta f=\underset{p+q=n}{\oplus} f \mid S_{p} \times S_{q} .
$$

## Notes and references

The representation theory of finite groups was founded by Frobenius in a series of papers published in the last years of the nineteenth century, and reproduced in Vol. 3 of his collected works; in particular, he obtained the irreducible characters of the symmetric groups in 1900 [F10], and our exposition does not differ substantially from his.

The internal product $f * g$ occurs first (as far as I am aware) in the 1927 paper of Redfield [R1], and later in [L11]. (Littlewood calls it the inner product: we have avoided this terminology, because inner product is sometimes taken as synonymous with scalar product.)

Example 5 is due to Littlewood and Richardson [L13], but is commonly known as the Murnaghan-Nakayama rule ([M18], [N1]). Examples 6 and 7 are due to Frobenius (loc. cit.). Example 9 was contributed by A. Zelevinsky.

Examples 13 and 14. Character polynomials occur already in Frobenius' 1904 paper [F11]. The formulas (7) and (8) are due to Specht [S19].

Examples 24 and 25. For proofs of Example 24(a), (b) see [F2]. A better proof of the result of Example 25 will be found in [G9].

## 8. Plethysm

In this section we shall study briefly another sort of multiplication in $\Lambda$, called plethysm or composition, and defined as follows. Let $f, g \in \Lambda$, and write $g$ as a sum of monomials:

$$
g=\sum_{\alpha} u_{\alpha} x^{\alpha} .
$$

Now introduce the set of fictitious variables $y_{i}$ defined by

$$
\begin{equation*}
\Pi\left(1+y_{i} t\right)=\prod_{\alpha}\left(1+x^{\alpha} t\right)^{u_{\alpha}} \tag{8.1}
\end{equation*}
$$

and define

$$
\begin{equation*}
f \circ g=f\left(y_{1}, y_{2}, \ldots\right) \tag{8.2}
\end{equation*}
$$

If $f \in \Lambda^{m}$ and $g \in \Lambda^{n}$, then clearly $f \circ g \in \Lambda^{m n}$. Also $e_{1}$ acts as a two sided identity: $f \circ e_{1}=e_{1} \circ f=f$ for all $f \in \Lambda$.
From the definition (8.2) it is clear that
(8.3) For each $g \in \Lambda$, the mapping $f \mapsto f \circ g$ is an endomorphism of the ring 1. |

By taking logarithms of both sides of (8.1) we obtain

$$
p_{n}(y)=\sum_{\alpha} u_{\alpha}\left(x^{\alpha}\right)^{n}
$$

so that

$$
\begin{equation*}
p_{n} \circ g=g \circ p_{n}=g\left(x_{1}^{n}, x_{2}^{n}, \ldots\right) \tag{8.4}
\end{equation*}
$$

for all $g \in \Lambda$. In particular,

$$
\begin{equation*}
p_{n} \circ p_{m}=p_{m} \circ p_{n}=p_{m n} \tag{8.5}
\end{equation*}
$$

From (8.4) it follows that
(8.6) For each $n \geqslant 1$, the mapping $g \mapsto p_{n} \circ g$ is an endomorphism of the ring $\Lambda$.

Plethysm is associative: for all $f, g, h \in \Lambda$ we have

$$
\begin{equation*}
(f \circ g) \circ h=f \circ(g \circ h) \tag{8.7}
\end{equation*}
$$

Proof. Since the $p_{n}$ generate $\Lambda_{\mathbf{Q}}$ (2.12), by virtue of (8.3) and (8.6) it is enough to verify associativity when $f=p_{m}$ and $g=p_{n}$, in which case it is obvious from (8.4) and (8.5).

For plethysm involving Schur functions, there are the following formulas: from (5.9) it follows that

$$
\begin{align*}
s_{\lambda} \circ(g+h) & =\sum_{\mu, \nu} c_{\mu \nu}^{\lambda}\left(s_{\mu} \circ g\right)\left(s_{\nu} \circ h\right)  \tag{8.8}\\
& =\sum_{\mu}\left(s_{\lambda / \mu} \circ g\right)\left(s_{\mu} \circ h\right)
\end{align*}
$$

and from (7.9) that

$$
\begin{equation*}
s_{\lambda} \circ(g h)=\sum_{\mu, \nu} \gamma_{\mu \nu}^{\lambda}\left(s_{\mu} \circ g\right)\left(s_{\nu} \circ h\right) \tag{8.9}
\end{equation*}
$$

The sum in (8.8) is over pairs of partitions $\mu, \nu \subset \lambda$, and in (8.9) over pairs of partitions $\mu, \nu$ such that $|\mu|=|\nu|=|\lambda|$.

Finally, let $\lambda, \mu$ be partitions. Then $s_{\lambda} \circ s_{\mu}$ is an integral linear combination of Schur functions, say

$$
\begin{equation*}
s_{\lambda} \circ s_{\mu}=\sum_{\pi} a_{\lambda \mu}^{\pi} s_{\pi} \tag{8.10}
\end{equation*}
$$

summed over partitions $\pi$ such that $|\pi|=|\lambda| .|\mu|$. We shall prove in Appendix A that the coefficients $a_{\lambda \mu}^{\pi}$ are all $\geqslant 0$.

Remarks. 1. We have observed in (3.10) that to each $f \in \Lambda$ there corresponds a natural operation $F$ on the category of $\lambda$-rings. In this correspondence, plethysm corresponds to composition of operations: if $f, g \in \Lambda$ correspond to the natural operations $F, G$, then $f \circ g$ corresponds to $F \circ G$.
2. Plethysm is defined in the ring $R$ of $\S 7$ via the characteristic map: for $u, v \in R, u \circ v$ is defined to be $\operatorname{ch}^{-1}(\operatorname{ch} u \circ \operatorname{ch} v)$. If $u$ (resp. $v$ ) is an irreducible character of $S_{m}$ (resp. $S_{n}$ ), then $u \circ v$ is a character of $S_{m n}$ which may be described as follows: if $U$ (resp. $V$ ) is an $S_{m}$-module with character $u$ (resp. an $S_{n}$-module with character $v$ ), the wreath product $S_{n} \sim S_{m}$ (which is the normalizer of $S_{n}^{m}=S_{n} \times \ldots \times S_{n}$ in $S_{m n}$ ) acts on $U$ and on the $m$ th tensor power $\mathrm{T}^{m}(V)$, hence also on $U \otimes \mathrm{~T}^{m}(V)$; and $u \circ v$ is the character of the $S_{m n}$-module induced by $U \otimes \mathrm{~T}^{m}(V)$. See Appendix A to this Chapter.

## Examples

1. (a) Let $f \in \Lambda^{m}, g \in \Lambda^{n}$. Show that

$$
\omega(f \circ g)= \begin{cases}f \circ(\omega g) & \text { if } n \text { is even, } \\ (\omega f) \circ(\omega g) & \text { if } n \text { is odd }\end{cases}
$$

and that

$$
f \circ(-g)=(-1)^{m}(\omega f) \circ g
$$

(b) If $\lambda, \mu$ are partitions, let $\lambda \circ \mu(=\mu \circ \lambda)$ denote the partition whose parts are $\lambda_{i} \mu_{j}$. Then we have

$$
p_{\lambda}^{\circ} \rho_{\mu}=p_{\mu} \circ p_{\lambda}=p_{\lambda \circ \mu}
$$

(c) Show that $\omega\left(h_{r} \circ p_{s}\right)=(-1)^{r(s-1)} e_{r} \circ p_{s}$.
2. Since $s_{\lambda / \mu}=s_{\mu}^{\perp}\left(s_{\lambda}\right)$ in the notation of $\S 5$, Example 3, it follows from (8.8) that

$$
f \circ(g+h)=\sum_{\mu}\left(\left(s_{\mu}^{\perp} f\right) \circ g\right)\left(s_{\mu} \circ h\right)
$$

for all $f, g, h \in \Lambda$. Also

$$
f \circ(g h)=\sum_{\mu}\left(\left(s_{\mu} * f\right) \circ g\right)\left(s_{\mu} \circ h\right)
$$

3. We have

$$
\begin{aligned}
& h_{n} \circ(f g)=\sum_{|\lambda|=n}\left(s_{\lambda} \circ f\right)\left(s_{\lambda} \circ g\right), \\
& e_{n} \circ(f g)=\sum_{|\lambda|=n}\left(s_{\lambda} \circ f\right)\left(s_{\lambda^{\prime}} \circ g\right) .
\end{aligned}
$$

These formulas are particular cases of (8.9) (and are consequences of (4.3) and (4.3')).
4. Let $\lambda$ be a partition of length $\leqslant n$, and consider $\left(s_{\lambda} \circ s_{(n-1)}\right)\left(x_{1}, x_{2}\right)$. By definition this is equal to $s_{\lambda}\left(x_{1}^{n-1}, x_{1}^{n-2} x_{2}, \ldots, x_{2}^{n-1}\right)$, i.e. to

$$
x_{2}^{(n-1)|\lambda|} s_{\lambda}\left(q^{n-1}, q^{n-2}, \ldots, 1\right)
$$

where $q=x_{1} x_{2}^{-1}$. On the other hand, by the positivity of the coefficients in (8.10), $\left(s_{\lambda} \circ s_{n-1}\right)\left(x_{1}, x_{2}\right)$ is a linear combination of the $s_{\pi}\left(x_{1}, x_{2}\right)$ with non-negative integer coefficients, where $\pi=\left(\pi_{1}, \pi_{2}\right)$ and $\pi_{1}+\pi_{2}=(n-1)|\lambda|=d$ say. Now

$$
\begin{aligned}
s_{\pi}\left(x_{1}, x_{2}\right) & =x_{1}^{\pi_{1}} x_{2}^{\pi_{2}}+x_{1}^{\pi_{1}-1} x_{2}^{\pi_{2}+1}+\ldots+x_{1}^{\pi_{2}} x_{2}^{\pi_{1}} \\
& =x_{2}^{d}\left(q^{\pi_{1}}+q^{\pi_{1}-1}+\ldots+q^{\pi_{2}}\right)
\end{aligned}
$$

Hence $s_{\lambda}\left(q^{n-1}, q^{n-2}, \ldots, 1\right)$ is a non-negative linear combination of the polynomials $q^{\pi_{1}}+q^{\pi_{1}-1}+\ldots+q^{\pi_{2}}$, where $\pi_{1} \geqslant \pi_{2}$ and $\pi_{1}+\pi_{2}=d$. It follows that $s_{\lambda}\left(q^{n-1}, q^{n-2}, \ldots, 1\right)$ is a unimodal symmetrical polynomial in $q$, i.e. that if $a_{i}$ is the coefficient of $q^{i}$ in this polynomial, for $0 \leqslant i \leqslant d$, then $a_{i}+a_{d-i}$ (symmetry) and

$$
a_{0} \leqslant a_{1} \leqslant \ldots \leqslant a_{[d / 2]}
$$

(unimodality).

From §3, Example 1, it follows that the generalized Gaussian polynomial

$$
\left[\begin{array}{l}
n \\
\lambda
\end{array}\right]=\prod_{x \in \lambda} \frac{1-q^{n-c(x)}}{1-q^{h(x)}}
$$

is symmetrical and unimodal for all $n$ and $\lambda$.
5. Let $G$ be a subgroup of $S_{m}$ and $H$ a subgroup of $S_{n}$, so that $G \sim H$ is a subgroup of the wreath product $S_{m} \sim S_{n} \subset S_{m n}$. Then the cycle-indicator ( $\$ 2$, Example 9) of $G \sim H$ is

$$
c(G \sim H)=c(H) \circ c(G)
$$

6. Closed formulas for the plethysms $h_{r} \circ h_{2}, h_{r} \circ e_{2}, e_{r} \circ h_{2}, e_{r} \circ e_{2}$ may be derived from the series expansions of $\S 5$, Examples 5 and 9 :
(a) $h_{r} \circ h_{2}=\Sigma_{\mu} s_{\mu}$, summed over all even partitions $\mu$ of $2 r$ (i.e. partitions with all parts even).
(b) $h_{r} \circ e_{2}=\Sigma_{\mu} s_{\mu^{\prime}}$, summed over even partitions $\mu$, as in (a).
(c) $e_{r} \circ e_{2}=\Sigma_{\pi} s_{\pi}$, summed over partitions $\pi$ of the form $\left(\alpha_{1}-1, \ldots, \alpha_{p}-1 \mid\right.$ $\alpha_{1}, \ldots, \alpha_{p}$ ), where $\alpha_{1}>\ldots>\alpha_{p}>0$ and $\alpha_{1}+\ldots+\alpha_{p}=r$.
(d) $e_{r} \circ h_{2}=\Sigma_{\pi} s_{\pi^{\prime}}$, summed over partitions $\pi$ as in (c).
7. Let $h_{n}^{(r)}=p_{r} \circ h_{n}=h_{n} \circ p_{r}$, so that

$$
h_{n}^{(r)}\left(x_{1}, x_{2}, \ldots\right)=h_{n}\left(x_{1}^{r}, x_{2}^{r}, \ldots\right)
$$

which is the coefficient of $t^{n r}$ in

$$
\prod_{i>1}\left(1-x_{i}^{r} t^{r}\right)^{-1}=\prod_{i>1} \prod_{j=1}^{r}\left(1-x_{i} \omega^{j} t\right)^{-1}
$$

where $\omega=e^{2 \pi i / r}$. By (4.3) this product is equal to

$$
\sum_{\mu} s_{\mu}(x) s_{\mu}\left(1, \omega, \ldots, \omega^{r-1}\right) t^{|\mu|}
$$

Now (§3, Example 17)

$$
s_{\mu}\left(1, \omega, \ldots, \omega^{r-1}\right)=\sigma_{r}(\mu)= \pm 1
$$

if $l(\mu) \leqslant r$ and $\mu$ is an $r$-core, and $s_{\mu}\left(1, \omega, \ldots, \omega^{r-1}\right)=0$ otherwise. It follows that

$$
p_{r} \circ h_{n}=\sum_{\mu} \sigma_{r}(\mu) s_{\mu}
$$

summed over $r$-cores $\mu$ such that $l(\mu) \leqslant r$ and $|\mu|=n r$.
8. More generally, if $\rho$ is any partition, let $h_{n}^{(\rho)}=p_{\rho} \circ h_{n}$, so that

$$
h_{n}^{(\rho)}=\prod_{j>1}\left(p_{\rho_{j}} \circ h_{n}\right)=\prod_{j>1} h_{n}^{\left(\rho_{j}\right)}
$$

is the coefficient of $t^{n \rho}=t_{1}^{n \rho_{1}} t_{2}^{n \rho_{2}} \ldots$ in

$$
\begin{equation*}
\prod_{i, j}\left(1-x p_{i} t_{j}\right)^{-1}=\prod_{i, j} \prod_{k=1}^{\rho_{J}}\left(1-x_{i} \omega_{j}^{k} t_{j}\right)^{-1} \tag{1}
\end{equation*}
$$

where $\omega_{j}=\exp \left(2 \pi i / \rho_{j}\right)$ By (4.3) this product is equal to

$$
\begin{equation*}
\sum_{\mu} s_{\mu}(x) s_{\mu}\left(t_{1} y^{(1)}, \ldots, t_{m} y^{(m)}\right) \tag{2}
\end{equation*}
$$

summed over partitions $\mu$ of length $\leqslant|\rho|$, where $y^{(j)}$ denotes the sequence $\left(\omega_{j}^{k}\right)_{1<k<\rho \rho}$, and $m$ is the length of $\rho$.
By (5.11) we have

$$
\begin{equation*}
s_{\mu}\left(t_{1} y^{(1)}, \ldots, t_{m} y^{(m)}\right)=\sum \prod_{j=1}^{m} t_{j}^{\left[(j)-\nu^{(j-1)} \mid s_{\nu}(j) / \nu^{(j-1)}\right.}\left(y^{(j)}\right) \tag{3}
\end{equation*}
$$

summed over all sequences $\left(\nu^{(0)}, \nu^{(1)}, \ldots, \nu^{(m)}\right.$ ) of partitions such that $0=\nu^{(0)} \subset$ $\nu^{(1)} \subset \ldots \subset \nu^{(m)}=\mu$. Now from $\S 5$, Example 24(b) we have

$$
s_{\left.\nu(j) / \nu^{(j-1)}\right)}\left(y^{(j)}\right)= \begin{cases}\sigma_{\rho_{j}}\left(\nu^{(j)} / \nu^{(j-1)}\right) & \text { if } \nu^{(j)} \approx_{\rho_{j}} \nu^{(j-1)},  \tag{4}\\ 0 & \text { otherwise. }\end{cases}
$$

From (1)-(4) we can pick out the coefficient of each $s_{\mu}$ in $h_{n}^{(\rho)}$. The result may be stated as follows: define a generalized tableau of type $\rho$, shape $\mu$, and weight $n \rho=\left(n \rho_{1}, n \rho_{2}, \ldots, n \rho_{m}\right)$ to be a sequence $T=\left(\nu^{(0)}, \ldots, \nu^{(m)}\right)$ of partitions satisfying the following conditions:
(i) $0=\nu^{(0)} \subset \nu^{(1)} \subset \ldots \subset \nu^{(m)}=\mu$;
(ii) $\left|\nu^{(j)}-\nu^{(j-1)}\right|=n \rho_{j}$ for $1 \leqslant j \leqslant m$;
(iii) $\nu^{(j)} \approx_{\rho_{i}} \nu^{(j-1)}(1 \leqslant j \leqslant m)$. (\$5, Example 24.)
(When $\rho=\left(1^{m}\right)$ these are tableaux in the usual sense, of weight $\left(n^{m}\right)$.)
For such a tableau $T$ let

$$
\sigma(T)=\prod_{j=1}^{m} \sigma_{\rho_{j}}\left(\nu^{(j)} / \nu^{(j-1)}\right)= \pm 1,
$$

and define

$$
K_{\mu, n \rho}^{(\rho)}=\sum_{T} \sigma(T)
$$

summed over all generalized tableaux $T$ of type $\rho$, shape $\mu$, and weight $n \rho$. The integers $K_{\mu, n \rho}^{(\rho)}$ may be regarded as generalized Kostka numbers.
With these definitions, we have

$$
p_{\rho} \circ h_{n}=h_{n}^{(\rho)}=\sum_{\mu} K_{\mu, n \rho}^{(\rho)} s_{\mu},
$$

summed over partitions $\mu$ such that $|\mu|=n|\rho|$ and $l(\mu) \leqslant|\rho|$.
9. Since

$$
s_{\lambda}=\sum_{\rho} z_{\rho}^{-1} \chi_{\rho}^{\lambda} p_{\rho}
$$

it follows from Example 8 that

$$
\begin{aligned}
s_{\lambda} \circ h_{n} & =\sum_{\rho} z_{\rho}^{-1} \chi_{\rho}^{\lambda} p_{\rho} \circ h_{n} \\
& =\sum_{\mu}\left(\sum_{\rho} z_{\rho}^{-1} \chi_{\rho}^{\lambda} K_{\mu, n \rho}^{(\rho)}\right) s_{\mu}
\end{aligned}
$$

the outer sum being over partitions $\mu$ such that $|\mu|=n|\lambda|$ and $l(\mu) \leqslant|\lambda|$.
(a) When $|\lambda|=2$ we have (Example 7)

$$
h_{n}^{(2)}=\sum_{\mu} \sigma_{2}(\mu) s_{\mu}
$$

summed over $|\mu|=2 n, l(\mu) \leqslant 2$, so that $\mu=(2 n-j, j) ; \sigma_{2}(\mu)=s_{\mu}(1,-1)=$ $(-1)^{j}$, and therefore

$$
\begin{equation*}
h_{n}^{(2)}=\sum_{j=0}^{n}(-1)^{j} s_{(2 n-j, j)} . \tag{1}
\end{equation*}
$$

On the other hand,

$$
\begin{equation*}
h_{n}^{\left(1^{2}\right)}=h_{n}^{2}=\sum_{j=0}^{n} s_{(2 n-j, j)} \tag{2}
\end{equation*}
$$

From (1) and (2) it follows that

$$
\begin{aligned}
& h_{2} \circ h_{n}=\sum_{j \mathrm{cven}} s_{(2 n-j, j)} \\
& e_{2} \circ h_{n}=\sum_{j \text { odd }} s_{(2 n-j, j)}
\end{aligned}
$$

By duality (Example 1) we obtain

$$
\begin{aligned}
& h_{2} \circ e_{n}=\sum_{k \text { even }} s_{(n+k, n-k)^{\prime}} \\
& e_{2} \circ e_{n}=\sum_{k \text { odd }} s_{(n+k, n-k)^{\prime}}
\end{aligned}
$$

(b) When $|\lambda|=3$ we have

$$
\begin{aligned}
K_{\mu\left(n^{3}\right)}^{\left(3^{3}\right)} & =\text { number of tableaux of shape } \mu \text { and weight }\left(n^{3}\right) \\
& =1+m(\mu)
\end{aligned}
$$

where $m(\mu)=\min \left(\mu_{1}-\mu_{2}, \mu_{2}-\mu_{3}\right)$, and $l(\mu) \leqslant 3$.

Next, since $h_{n}^{(3)} \equiv h_{n}^{3}(\bmod 3)$, it follows that

$$
K_{\mu(3 n)}^{(3)} \equiv 1+m(\mu)(\bmod 3)
$$

and since $K_{\mu(3 n)}^{(3)}=0$ or $\pm 1$, it is determined by this congruence.
Finally,

$$
h_{n}^{(21)}=h_{n}^{(2)} h_{n}=\sum_{j=0}^{n}(-1)^{j} s_{(2 n-j, j)} h_{n},
$$

from which we obtain

$$
K_{\mu(2 n, n)}^{(21)}= \begin{cases}0 & \text { if } m(\mu) \text { is odd, } \\ (-1)^{\mu_{2}} & \text { if } m(\mu) \text { is even. }\end{cases}
$$

From these values we obtain

$$
\begin{aligned}
& h_{3} \circ h_{n}=\sum_{\mu}\left(\left[\frac{1}{6} m(\mu)\right]+\varepsilon(\mu)\right) s_{\mu}, \\
& s_{21} \circ h_{n}=\sum_{\mu}\left(\left\{\frac{1}{3} m(\mu)\right\} s_{\mu},\right. \\
& e_{3} \circ h_{n}=\sum_{\mu}\left(\left[\frac{1}{6} m(\mu)\right]+\varepsilon(\mu)-(-1)^{\mu_{2}}\right) s_{\mu},
\end{aligned}
$$

summed in each case over partitions $\mu$ such that $|\mu|=3 n$ and $l(\mu) \leqslant 3$, where $\varepsilon(\mu)=1$ if $m(\mu)$ and $\mu_{2}$ are even or if $m(\mu) \equiv 3$ or $5(\bmod 6)$, and $\varepsilon(\mu)=0$ otherwise; and where $\{x\}=-[-x]$ is the least integer $\geqslant x$.
10. Foulkes conjectured that $h_{m} \circ h_{n} \leqslant h_{n} \circ h_{m}$ whenever $m \leqslant n$, with respect to the partial ordering on $\Lambda$ defined in $\S 7$, Example $9(b)$. The results of Example 6 and Example 9 (a) show that this is true for $m=2$ and all $n \geqslant 2$.
11. From §5, Example 4 it follows that

$$
\sum_{\lambda} s_{\lambda}=\sum_{r, s} h_{r}\left(h_{s} \circ e_{2}\right)=\sum_{r, s} e_{r}\left(h_{s} \circ h_{2}\right) .
$$

On passing to representations of $S_{n}$, these formulas give

$$
\begin{equation*}
\sum_{|\lambda|=n} x^{\lambda}=\sum \eta_{r}\left(\eta_{s} \circ \varepsilon_{2}\right)=\sum \varepsilon_{r}\left(\eta_{s} \circ \eta_{2}\right) \tag{1}
\end{equation*}
$$

where $r+2 s=n$ in the second and third sums. Now $\eta_{s}{ }^{\circ} \varepsilon_{2}$ is the character of $S_{2 s}$ induced from the sign character of the wreath product $S_{2} \sim S_{s}$ (the hyperoctahedral group of rank $s$ ), hence $\eta_{r}\left(\eta_{s} \circ \varepsilon_{2}\right)$ is the character of $S_{n}$ induced from the character $\eta_{r} \times\left(\eta_{s}{ }^{\circ} \varepsilon_{2}\right)$ of the group $S_{r} \times\left(S_{2} \sim S_{s}\right)$, which is the centralizer in $S_{n}$ of an involution of cycle-type ( $2^{s} 1^{r}$ ), i.e. a product of $s$ disjoint transpositions. It follows that

$$
\sum_{|\lambda|=n} \chi^{\lambda}=\sum_{c} \xi_{c}
$$

where $c$ runs over the conjugacy classes of elements $w \in S_{n}$ such that $w^{2}=1$, and $\xi_{c}$ is the induced representation from the centralizer of an element $w \in c$ just described. The other sum in (1) may be interpreted analogously.

## Notes and references

Plethysm was introduced by D. E. Littlewood [L9]. His notation for our $s_{\lambda} \circ s_{\mu}$ is $\{\mu\} \otimes\{\lambda\}$. Many authors have computed (or have described algorithms to compute) $s_{\lambda} \circ s_{\mu}$ for particular choices of either $\lambda$ or $\mu$. For their work we refer to the bibliographies in Littlewood [L9] and Robinson [R7], and to [C2]. Examples 9(a) and 9(b) are due to R. M. Thrall [T5]. For the next case $(|\lambda|=4)$ see H. O. Foulkes [F6] and R. Howe [H10].

## 9. The Littlewood-Richardson rule

If $\mu$ and $\nu$ are partitions, the product $s_{\mu} s_{\nu}$ is an integral linear combination of Schur functions:

$$
s_{\mu} s_{\nu}=\sum_{\lambda} c_{\mu \nu}^{\lambda} s_{\lambda}
$$

or equivalently

$$
\begin{equation*}
s_{\lambda / \mu}=\sum_{\nu} c_{\mu \nu}^{\lambda} s_{\nu} \tag{9.1}
\end{equation*}
$$

The coefficients $c_{\mu \nu}^{\lambda}$ are non-negative integers, because by (7.3) and (7.5) $c_{\mu \nu}^{\lambda}=\left\langle\chi^{\lambda}, \chi^{\mu} \cdot \chi^{\nu}\right\rangle^{\nu}$ is the multiplicity of $\chi^{\lambda}$ in the character $\chi^{\mu} \cdot \chi^{\nu}$; also we have $c_{\mu \nu}^{\lambda}=0$ unless $|\lambda|=|\mu|+|\nu|$ and $\mu, \nu \subset \lambda$.

This section is devoted to the statement and proof of a combinatorial rule for computing $c_{\mu \nu}^{\lambda}$, due to Littlewood and Richardson [L13].

Let $T$ be a tableau. From $T$ we derive a word or sequence $w(T)$ by reading the symbols in $T$ from right to left (as in Arabic) in successive rows, starting with the top row. For example, if $T$ is the tableau
![](https://cdn.mathpix.com/cropped/2024_12_08_1df2f08562f6a73c5373g-153.jpg?height=217&width=341&top_left_y=1546&top_left_x=554)
$w(T)$ is the word 32113241.
If a word $w$ arises in this way from a tableau of shape $\lambda-\mu$, we shall say that $w$ is compatible with $\lambda-\mu$.

A word $w=a_{1} a_{2} \ldots a_{N}$ in the symbols $1,2, \ldots, n$ is said to be a lattice permutation if for $1 \leqslant r \leqslant N$ and $1 \leqslant i \leqslant n-1$, the number of occurrences of the symbol $i$ in $a_{1} a_{2} \ldots a_{r}$ is not less than the number of occurrences of $i+1$.
We can now state the Littlewood-Richardson rule:
(9.2) Let $\lambda, \mu, \nu$ be partitions. Then $c_{\mu \nu}^{\lambda}$ is equal to the number of tableaux $T$ of shape $\lambda-\mu$ and weight $\nu$ such that $w(T)$ is a lattice permutation.

The proof we shall give of (9.2) depends on the following proposition. For any partitions $\lambda, \mu, \pi$ such that $\lambda \subset \mu$, let $\operatorname{Tab}(\lambda-\mu, \pi)$ denote the set of tableaux $T$ of shape $\lambda-\mu$ and weight $\pi$, and let $\operatorname{Tab}^{0}(\lambda-\mu, \pi)$ denote the subset of those $T$ such that $w(T)$ is a lattice permutation. From (5.14) we have

$$
\begin{equation*}
|\operatorname{Tab}(\lambda-\mu, \pi)|=K_{\lambda-\mu, \pi}=\left\langle s_{\lambda / \mu}, h_{\pi}\right\rangle . \tag{9.3}
\end{equation*}
$$

We shall prove that
(9.4) There exists a bijection

$$
\operatorname{Tab}(\lambda-\mu, \pi) \xrightarrow{\sim} \coprod_{\nu}\left(\operatorname{Tab}^{0}(\lambda-\mu, \nu) \times \operatorname{Tab}(\nu, \pi)\right) .
$$

Before proving (9.4), let us deduce (9.2) from it. From (9.4) and (9.3), we have

$$
\left\langle s_{\lambda / \mu}, h_{\pi}\right\rangle=\sum_{\nu}\left|\operatorname{Tab}^{0}(\lambda-\mu, \nu)\right|\left\langle s_{\nu}, h_{\pi}\right\rangle
$$

for all partitions $\pi$, and therefore

$$
s_{\lambda / \mu}=\sum_{\nu}\left|\operatorname{Tab}^{0}(\lambda-\mu, \nu)\right|_{\nu}
$$

Comparison of this identity with (9.1) shows that $c_{\mu \nu}^{\lambda}=\left|\operatorname{Tab}^{0}(\lambda-\mu, \nu)\right|$.
To construct a bijection as required for (9.4), we shall follow the method of Littlewood and Robinson [R5], which consists in starting with a tableau $T$ of shape $\lambda-\mu$ and successively modifying it until the word $w(T)$ becomes a lattice permutation, and simultaneously building up a tableau $M$, which serves to record the sequence of moves made.

If $w=a_{1} a_{2} \ldots a_{N}$ is any word in the symbols $1,2, \ldots$, let $m_{r}(w)$ denote the number of occurrences of the symbol $r$ in $w$. For $1 \leqslant p \leqslant N$ and $r \geqslant 2$, the difference $m_{r}\left(a_{1} \ldots a_{p}\right)-m_{r-1}\left(a_{1} \ldots a_{p}\right)$ is called the $r$-index of $a_{p}$ in $w$. Observe that $w$ is a lattice permutation if and only if all indices are $\leqslant 0$.

Let $m$ be the maximum value of the $r$-indices in $w$, and suppose that $m>0$. Take the first element of $w$ at which this maximum is attained (clearly this element will be an $r$ ), and replace it by $r-1$. Denote the result of this operation by $S_{r-1, r}(w)$ (substitution for $r-1$ for $r$ ). Observe that $S_{r-1, r}(w)$ has maximum $r$-index $m-1$ (unless $m=1$, in which case it can be -1).
(9.5) The operation $S_{r-1, r}$ is one-to-one.

Proof. Let $w^{\prime}=S_{r-1, r}(w)$. To reconstruct $w$ from $w^{\prime}$, let $m^{\prime}$ be the maximum $r$-index in $w^{\prime}$. If $m^{\prime} \geqslant 0$, take the last symbol in $w^{\prime}$ with $r$-index $m^{\prime}$, and convert the next symbol (which must be an $r-1$ ) into $r$. If $m^{\prime}<0$, the first symbol in $w^{\prime}$ must be an $r-1$, and this is converted into $r$. In either case the result is $w$, which is therefore uniquely determined by $w^{\prime}$ and $r$. |
(9.6) Let $w^{\prime}=S_{r-1, r}(w)$. Then $w^{\prime}$ is compatible with $\lambda-\mu$ if and only if $w$ is compatible with $\lambda-\mu$.

Proof. Let $w=w(T), w^{\prime}=w\left(T^{\prime}\right)$, where $T$ and $T^{\prime}$ are arrays of shape $\lambda-\mu$. They differ in only one square, say $x$, which in $T$ is occupied by $r$ and in $T^{\prime}$ by $r-1$.

Suppose that $T$ is a tableau. If $T^{\prime}$ is not a tableau there are two possibilities: either (a) the square $y$ immediately to the left of $x$ in $T$ is occupied by $r$, or (b) the square immediately above $x$ is occupied by $r-1$.

In case (a) the symbol $r$ in square $y$ would have a higher $r$-index in $w(T)$ than the $r$ in square $x$, which is impossible. In case (b) the square $x$ in $T$ will be the left-hand end of a string of say $s$ squares occupied by the symbol $r$, and immediately above this string there will be a string of $s$ squares occupied by the symbol $r-1$. It follows that $w(T)$ contains a segment of the form

$$
(r-1)^{s} \ldots r^{s}
$$

where the unwritten symbols in between the two strings are all either $>r$ or $<r-1$, and the last $r$ is the one to be replaced by $r-1$ to form $w^{\prime}$. But the $r$-index of this $r$ is equal to that of the element of $w$ immediately preceding the first of the string of $(r-1)$ 's, and this again is impossible. Hence if $T$ is a tableau, so also is $T^{\prime}$.

The reverse implication is proved similarly, using the recipe of (9.5) for passing back from $w^{\prime}$ to $w$.

Suppose now that the word $w$ has the lattice permutation property with respect to $(1,2, \ldots, r-1)$ but not with respect to $(r-1, r)$, or in other words that all the $s$-indices are $\leqslant 0$ for $2 \leqslant s \leqslant r-1$ but not for $s=r$. This is the only situation in which we shall use the operator $S_{r-1, r}$. The effect of
replacing $r$ by $r-1$ in $w$ as required by $S_{r-1, r}$ may destroy the lattice permutation property with respect to $(r-2, r-1)$, i.e. it may produce some $(r-1)$-indices equal to +1 . In this case we operate with $S_{r-2, r-1}$ to produce

$$
S_{r-2, r}(w)=S_{r-2, r-1} S_{r-1, r}(w)
$$

At this stage the $(r-1)$-indices will all be $\leqslant 0$, but there may be some ( $r-2$ )-indices equal to +1 , and so on. Eventually this process will stop, and we have then say

$$
S_{a, r}(w)=S_{a, a+1} \ldots S_{r-1, r}(w)
$$

for some $a$ such that $1 \leqslant a \leqslant r-1$, and the word $S_{a, r}(w)$ again has the lattice property with respect to $(1,2, \ldots, r-1)$, and maximal $r$-index strictly less than that of $w$.
At this point the following lemma is crucial:
(9.7) If $w, S_{a, r}(w)=w^{\prime}$ and $S_{b, r}\left(w^{\prime}\right)=w^{\prime \prime}$ all have the lattice property with respect to $(1,2, \ldots, r-1)$, then $b \leqslant a$.

Proof. Let $w=x_{1} x_{2} x_{3} \ldots$. We have to study in detail the process of passing from $w$ to $w^{\prime}$. This starts by applying $S_{r-1, r}$, i.e. by replacing the first symbol $r$ in $w$ with $r$-index $m$, where $m$ is the maximum of the $r$-indices, by $r-1$. Suppose that this happens at $x_{p_{0}}$. Then for each $s \geqslant 1$, the ( $r-1$ )-index of $x_{s}$ is unaltered if $s<p_{0}$, and is increased by 1 if $s \geqslant p_{0}$. The element on which $S_{r-2, r-1}$ operates is therefore in the $p_{1}$ th place, where $p_{1}$ is the first integer $\geqslant p_{0}$ for which $x_{p_{1}}$ has $(r-1)$-index in $w$ equal to 0 . Likewise the element on which $S_{r-3, r-2}$ operates is in the $p_{2}$ th place, where $p_{2}$ is the first integer $\geqslant p_{1}$ for which $x_{p_{2}}$ has $(r-2)$-index zero, and so on.
In this way we obtain a sequence

$$
p_{0} \leqslant p_{1} \leqslant \ldots \leqslant p_{r-a-1}
$$

with the property that, for each $i \geqslant 1, x_{p_{i}}$ is the first element not preceding $x_{p_{l-1}}$ for which the $(r-i)$-index is 0 . Observe that in $w^{\prime}$ the element in the $p_{i}$ th place still has ( $r-i$ )-index zero, for each $i \geqslant 1$ (though it will no longer be the first with this property).
Now consider the passage from $w^{\prime}=y_{1} y_{2} y_{3} \ldots$ to $w^{\prime \prime}$. In $w^{\prime}$ the maximum $r$-index is $m-1$ (which by assumption is still positive) and occurs first at say $y_{q_{0}}$, where $q_{0}<p_{0}$. (This is because the $r$-index can by its definition only go up or down in single steps, and therefore the $r$-index $m-1$ occurs first in $w$ at some element to the left of $x_{p_{0}}$; and the elements to the left of the $p_{0}$ th are the same in $w^{\prime}$ as in $w$.) In $w^{\prime}$ the $(r-1)$-index of $y_{p_{1}}$ is zero, and is therefore +1 in $S_{r-1, r}\left(w^{\prime}\right)$. Hence $S_{r-1, r}\left(w^{\prime}\right)$ admits the substitution $S_{r-2, r-1}$, which will operate on the
element in the $q_{1}$ th place, where $q_{1}$ is the first integer $\geqslant q_{0}$ for which the $(r-1)$-index of $y_{q_{1}}$ in $w^{\prime}$ is 0 , so that $q_{0} \leqslant q_{1}<p_{1}$. Continuing in this way we get a sequence

$$
q_{0} \leqslant q_{1} \leqslant q_{2} \leqslant \ldots \leqslant q_{r-a-1}
$$

with $q_{i}<p_{i}$ for all $i \geqslant 0$, and $w^{\prime}$ admits the operator $S_{a, r}$.
If $S_{a, r}\left(w^{\prime}\right)=w^{\prime \prime}$, then $b=a$; if not, then $S_{a, r}\left(w^{\prime}\right)$ admits further substitutions $S_{a-1, a}, \ldots$, until $w^{\prime \prime}=S_{b, r}\left(w^{\prime}\right)$ is attained, so that $b<a$ in this case. In either case we have $b \leqslant a$, as required.

We shall now describe the algorithm of Littlewood and Robinson which constructs from a tableau $T$ of shape $\lambda-\mu$ and weight $\pi$, where $\lambda, \mu, \pi$ are partitions, a pair $(L, M)$ where $L \in \operatorname{Tab}^{0}(\lambda-\mu, \nu)$ for some partition $\nu$, and $M \in \operatorname{Tab}(\nu, \pi)$.

If $A$ is any array-not necessarily a tableau-and $a, r$ are positive integers such that $a<r$, we denote by $R_{a, r}(A)$ the result of raising the right-hand element of the $r$ th row of $A$ up to the right-hand end of the $a$ th row.

The algorithm begins with the word $w_{1}=w(T)$ and the array $M_{1}$ consisting of $\pi_{1} 1$ 's in the first row, $\pi_{2} 2$ 's in the second row, and so on (i.e. $M_{1}$ is the unique tableau of shape $\pi$ and weight $\pi$ ).

Operate on $w_{1}$ with $S_{12}$ until there are no positive 2 -indices, and simultaneously on $M_{1}$ with $R_{12}$ the same number of times: say

$$
w_{2}=S_{12}^{m}\left(w_{1}\right), \quad M_{2}=R_{12}^{m}\left(M_{1}\right)
$$

Next operate on $w_{2}$ with $S_{23}$ or $S_{13}$ as appropriate until there are no positive 2- or 3-indices, and simultaneously operate on $M_{2}$ with $R_{23}$ or $R_{13}$ : say

$$
w_{3}=\ldots S_{a_{2}, 3} S_{a_{1}, 3}\left(w_{2}\right), \quad M_{3}=\ldots R_{a_{2}, 3} R_{a_{1}, 3}\left(M_{2}\right)
$$

where each $a_{1}, a_{2}$ is 1 or 2 .
Continue in this way until we reach ( $w_{l}, M_{l}$ ), where $l=l(\pi)$. Clearly from our construction $w_{l}$ is a lattice permutation. From (9.6) it follows that $w_{l}$ is compatible with $\lambda-\mu$, so that $w_{l}=w(L)$ where $L \in \operatorname{Tab}^{0}(\lambda-\mu, \nu)$ for some partition $\nu$. Next, it is clear from the construction that at each stage the length $l_{i}\left(M_{r}\right)$ of the $i$ th row of the array $M_{r}$ is equal to the multiplicity $m_{i}\left(w_{r}\right)$ of the symbol $i$ in the corresponding word $w_{r}$, so that the final array $M=M_{l}$ has shape $\nu$ and weight $\pi$.

We have to show moreover that $M_{l}$ is a tableau. For this, we shall prove by induction on $r$ that the first $r$ rows of $M_{r}$ form a tableau. This is clear if $r=1$, so assume that $r>1$ and the result is true for $r-1$.

Consider the steps that lead from $M_{r-1}$ to $M_{r}$ : we have, say,

$$
M_{r}=R_{a_{m}, r} \ldots R_{a_{1}, r}\left(M_{r-1}\right)
$$

let us put

$$
M_{r-1, i}=R_{a_{i},}, \ldots R_{a_{1}, r}\left(M_{r-1}\right)
$$

and likewise

$$
w_{r-1, i}=S_{a_{i}, r} \ldots S_{a_{1}, r}\left(w_{r-1}\right)
$$

where each word $w_{r-1, i}$ has the lattice property with respect to $(1,2, \ldots$, $r-1$ ). Each array $M_{r-1, i}$ is obtained from its predecessor $M_{r-1, i-1}$ (or $M_{r-1}$ if $i=1$ ) by moving up a single symbol $r$ from the $r$ th row to the $a_{i}$ th row. By our construction the length $l_{j}\left(M_{r-1, i}\right)$ of the $j$ th row of $M_{r-1, i}$ is equal to the multiplicity $m_{j}\left(w_{r-1, i}\right)$ of $j$ in $w_{r-1, i}$, for each $j \geqslant 1$; and since each word $w_{r-1, i}$ has the lattice property with respect to $(1,2, \ldots, r-1)$, it follows that

$$
l_{1}\left(M_{r-1, i}\right) \geqslant \ldots \geqslant l_{r-1}\left(M_{r-1, i}\right)
$$

Also, by (9.7), the integers $a_{i}$ satisfy $a_{1} \geqslant \ldots \geqslant a_{m}$. It follows that no two symbols $r$ can appear in the same column at any stage, and consequently the first $r$ rows of $M_{r}$ form a tableau.
The algorithm therefore provides a mapping

$$
\operatorname{Tab}(\lambda-\mu, \pi) \rightarrow \coprod_{\nu} \operatorname{Tab}^{0}(\lambda-\mu, \nu) \times \operatorname{Tab}(\nu, \pi)
$$

To complete the proof of (9.4) we have to show that this mapping is a bijection. For this purpose it is enough to show that, for each $r \geqslant 1$, we can unambiguously trace our steps back from ( $w_{r}, M_{r}$ ) to ( $w_{r-1}, M_{r-1}$ ). With the notation used above, we have

$$
w_{r}=S_{a_{m}, r} \ldots S_{a_{1}, r}\left(w_{r-1}\right)
$$

and the sequence $\left(a_{1}, \ldots, a_{m}\right)$ can be read off from the array $M_{r}$, since the $a_{i}$ are the indices $<r$ of the rows in which the symbols $r$ are located in $M_{r}$, arranged in descending order: $a_{1} \geqslant a_{2} \geqslant \ldots \geqslant a_{m}$ (by virtue of (9.7)). Since by (9.5) each $S_{a, r}$ is reversible, it follows that ( $w_{r-1}, M_{r-1}$ ) is uniquely determined by ( $w_{r}, M_{r}$ ). Finally, by (9.6), if $w_{r}$ is compatible with $\lambda-\mu$, then so also is $w_{r-1}$, and the proof is complete.
Q.E.D.

Remark. A lattice permutation $w=a_{1} a_{2} \ldots a_{N}$ of weight $\nu$ may be described by a standard tableau $T(w)$ of shape $\nu$, in which the symbol $r$ occurs in the $a_{r}$ th row, for $1 \leqslant r \leqslant N$ (the fact that $w$ is lattice ensures that $T(w)$ is a tableau). Hence the algorithm described above constructs from a word $w$ a pair of tableaux $T\left(w_{l}\right)$ and $M_{l}$ of the same shape $\nu$, the first of which is standard and the second of weight $\pi$. It may be verified that this algorithm coincides with one described by Burge [B9] (see also Gansner [G1]).

## Notes and references

The Littlewood-Richardson rule (9.2) was first stated, but not proved, in [L13] (p. 119). The proof subsequently published by Robinson [R5], and reproduced in Littlewood's book ([L9], pp. 94-6) is incomplete, and it is this proof that we have endeavoured to complete.

Complete proofs of the rule first appeared in the 1970s ([S7], [T4]). $\dagger$ Since then, many other formulations, proofs and generalizations have appeared, some of which are covered by the following references: Bergeron and Garsia [B4]; James [J7]; James and Peel [J10]; James and Kerber [J9]; Kerov [K8]; Littelmann [L7], [L8]; White [W3]; and Zelevinsky [Z2], [Z3].

[^0]
## APPENDIX A: Polynomial functors and polynomial representations

## 1. Introduction

Let $k$ be a field of characteristic 0 and let $\mathfrak{B}$ denote the category whose objects are finite-dimensional $k$-vector spaces and whose morphisms are $k$-linear maps. A (covariant) functor $F: \mathfrak{B} \rightarrow \mathfrak{B}$ will be said to be a polynomial functor if, for each pair of $k$-vector spaces $X, Y$, the mapping $F: \operatorname{Hom}(X, Y) \rightarrow \operatorname{Hom}(F X, F Y)$ is a polynomial mapping. This condition may be expressed as follows:
(1.1) Let $f_{i}: X \rightarrow Y(1 \leqslant i \leqslant r)$ be morphisms in $\mathfrak{B}$, and let $\lambda_{1}, \ldots, \lambda_{r} \in k$. Then $F\left(\lambda_{1} f_{1}+\ldots+\lambda_{r} f_{r}\right)$ is a polynomial function of $\lambda_{1}, \ldots, \lambda_{r}$, with coefficients in $\operatorname{Hom}(F X, F Y)\left(d e p e n d i n g\right.$ on $f_{1}, \ldots, f_{r}$ ).

If $F\left(\lambda_{1} f_{1}+\ldots+\lambda_{r} f_{r}\right)$ is homogeneous of degree $n$, for all choices of $f_{1}, \ldots, f_{r}$, then $F$ is said to be homogeneous of degree $n$. For example, the $n$th exterior power $\Lambda^{n}$ and the $n$th symmetric power $\mathbf{S}^{n}$ are homogeneous polynomial functors of degree $n$.
Each polynomial functor $F$ is a direct sum $\oplus_{n>0} F_{n}$, where $F_{n}$ is homogeneous of degree $n$ (\$2). We shall show that each $F_{n}$ determines a representation of the symmetric group $S_{n}$ on a finite-dimensional $k$-vector space $E_{n}$, such that

$$
F_{n}(X) \cong\left(E_{n} \otimes X^{\otimes n}\right)^{s_{n}}
$$

functorially in $X$, and that $F_{n} \rightarrow E_{n}$ defines an equivalence of the category of homogeneous polynomial functors of degree $n$ with the category of finite-dimensional $k\left[S_{n}\right]$-modules. In particular, the irreducible polynomial functors correspond to the irreducible representations of symmetric groups, hence are indexed by partitions.
The connection with symmetric functions is the following. Let $u: k^{m} \rightarrow$ $k^{m}$ be a semisimple endomorphism, with eigenvalues $\lambda_{1}, \ldots, \lambda_{m}$ (in some extension of $k$ ). Then trace $F(u)$ is a symmetric polynomial function of $\lambda_{1}, \ldots, \lambda_{m}$, say $\chi_{m}(F)\left(\lambda_{1}, \ldots, \lambda_{m}\right)$, where $\chi_{m}(F) \in \Lambda_{m}$. As $m \rightarrow \infty$, the $\chi_{m}(F)$ determine an element $\chi(F) \in \Lambda$. If $F=F_{\mu}$ is irreducible (where $\mu$ is a partition), it will appear that $\chi\left(F_{\mu}\right)$ is the Schur function $s_{\mu}$.

Notation. If $X \in \mathfrak{B}$ and $\lambda \in k$, we shall denote by $\lambda_{X}$ (or just $\lambda$ if the context permits) multiplication by $\lambda$ in $X$.

## 2. Homogeneity

Let $F$ be a polynomial functor on $\mathfrak{B}$, and let $\lambda \in k$. By (1.1), $F\left(\lambda_{X}\right)$ is a polynomial function of $\lambda$ with coefficients in $\operatorname{End}(F(X))$, say

$$
\begin{equation*}
F\left(\lambda_{X}\right)=\sum_{n>0} u_{n}(X) \lambda^{n} \tag{2.1}
\end{equation*}
$$

Since $F\left((\lambda \mu)_{X}\right)=F\left(\lambda_{X} \mu_{X}\right)=F\left(\lambda_{X}\right) F\left(\mu_{X}\right)$, we have

$$
\sum_{n \geqslant 0} u_{n}(X)(\lambda \mu)^{n}=\left(\sum_{n \geqslant 0} u_{n}(X) \lambda^{n}\right)\left(\sum_{n \geqslant 0} u_{n}(X) \mu^{n}\right)
$$

for all $\lambda, \mu \in k$, and therefore (because $k$ is an infinite field) $u_{n}(X)^{2}=$ $u_{n}(X)$ for all $n \geqslant 0$, and $u_{m}(X) u_{n}(X)=0$ if $m \neq n$. Also

$$
\sum_{n>0} u_{n}(X)=F\left(1_{X}\right)=1_{F(X)}
$$

by taking $\lambda=1$ in (2.1). It follows that the $u_{n}(X)$ determine a direct sum decomposition

$$
\begin{equation*}
F(X)=\underset{n>0}{\oplus} F_{n}(X) \tag{2.2}
\end{equation*}
$$

where $F_{n}(X)$ is the image of $u_{n}(X): F(X) \rightarrow F(X)$. Since $F(X)$ is finitedimensional, all but a finite number of the summands $F_{n}(X)$ in (2.2) will be zero, for any given $X$.

Moreover, if $f: X \rightarrow Y$ is a $k$-linear map, we have $f \lambda_{X}=\lambda_{Y} f$ for all $\lambda \in k$, and hence $F(f) F\left(\lambda_{X}\right)=F\left(\lambda_{Y}\right) F(f)$. From (2.1) it follows that $F(f) u_{n}(X)=u_{n}(Y) F(f)$ for all $n \geqslant 0$, so that each $u_{n}$ is an endomorphism of the functor $F$. Hence $F(f)$ defines by restriction $k$-linear maps $F_{n}(f): F_{n}(X) \rightarrow F_{n}(Y)$, and therefore each $F_{n}$ is a functor, which is clearly polynomial. Consequently we have a direct decomposition

$$
\begin{equation*}
F=\underset{n>0}{\oplus} F_{n} \tag{2.3}
\end{equation*}
$$

in which each $F_{n}$ is a homogeneous polynomial functor of degree $n$.
Remarks. 1. The direct sum (2.3) may well have infinitely many non-zero components, although for any given $X \in \mathfrak{B}$ we must have $F_{n}(X)=0$ for all sufficiently large $n$. An example is the exterior algebra functor $\wedge$.

If $F_{n}=0$ for all sufficiently large $n$, we shall say that $F$ has bounded degree.
2. $F_{0}$ is homogeneous of degree 0 , so that $F_{0}(\lambda)=1$ for all $\lambda \in k$, and in particular $F_{0}(0)=F_{0}(1)$. It follows that for all morphisms $f: X \rightarrow Y$ we have $F_{0}(f)=F_{0}(0)$, which is therefore independent of $f$ and is an isomorphism of $F_{0}(X)$ onto $F_{0}(Y)$. Hence all the objects $F_{0}(X)$ are canonically isomorphic.

More generally, let $r$ be a positive integer and $\mathfrak{B}^{r}=\mathfrak{B} \times \ldots \times \mathfrak{B}$ the category in which the objects are sequences $X=\left(X_{1}, \ldots, X_{r}\right)$ of length $r$ of objects of $\mathfrak{B}$, and $\operatorname{Hom}(X, Y)=\Pi_{i} \operatorname{Hom}\left(X_{i}, Y_{i}\right)$. As before, a functor $F: \mathfrak{B}^{r} \rightarrow \mathfrak{B}$ will be said to be polynomial if $F: \operatorname{Hom}(X, Y) \rightarrow \operatorname{Hom}(F X, F Y)$ is a polynomial mapping for all $X, Y \in \mathfrak{B}^{r}$. If $F$ is polynomial and $(\lambda)=$ $\left(\lambda_{1}, \ldots, \lambda_{r}\right) \in k^{r}$, then $F\left((\lambda)_{X}\right)=F\left(\left(\lambda_{1}\right)_{X_{1}}, \ldots,\left(\lambda_{r}\right)_{X}\right)$ will be a polynomial function of $\lambda_{1}, \ldots, \lambda_{r}$ with coefficients in $\operatorname{End}\left(F\left(X^{\prime}\right)\right.$, say

$$
\begin{equation*}
F\left((\lambda)_{X}\right)=\sum_{m_{1}, \ldots, m_{r}} u_{m_{1} \ldots m_{r}}\left(X_{1}, \ldots, X_{r}\right) \lambda_{1}^{m_{1}} \ldots \lambda_{r}^{m_{r}} \tag{2.4}
\end{equation*}
$$

Exactly as before, we see that the $u_{m_{1} \ldots m_{r}}$ are endomorphisms of $F$, and that if we denote the image of $u_{m_{1} \ldots m_{r}}\left(X_{1}, \ldots, X_{r}\right)$ by $F_{m_{1} \ldots m_{r}}\left(X_{1}, \ldots, X_{r}\right)$, then the $F_{m_{1} \ldots m_{r}}$ are subfunctors of $F$ which give rise to a direct decomposition

$$
\begin{equation*}
F=\underset{m_{1}, \ldots, m_{r}}{\oplus} F_{m_{1} \ldots m_{r}} \tag{2.5}
\end{equation*}
$$

Each $F_{m_{1} \ldots m_{r}}$ is homogeneous of multidegree $\left(m_{1}, \ldots, m_{r}\right)$, i.e. we have $F_{m_{1} \ldots m_{r}}\left(\lambda_{1}, \ldots, \lambda_{r}\right)=\lambda_{1}^{m_{1}} \ldots \lambda_{r}^{m_{r}}$.

## 3. Linearization

Again let $F: \mathfrak{B} \rightarrow \mathfrak{B}$ be a polynomial functor. In view of the decomposition (2.3), we shall assume from now on that $F$ is homogeneous of degree $n>0$. The considerations at the end of $\S 2$ apply to the functor $F^{\prime}: \mathfrak{B}^{n} \rightarrow \mathfrak{B}$ defined by $F^{\prime}\left(X_{1}, \ldots, X_{n}\right)=F\left(X_{1} \oplus \ldots \oplus X_{n}\right)$, and show that there exists a direct sum decomposition, functorial in each variable,

$$
F\left(X_{1} \oplus \ldots \oplus X_{n}\right)=\oplus F_{m_{1} \ldots m_{n}}^{\prime}\left(X_{1}, \ldots, X_{n}\right)
$$

where the direct sum on the right is over all $\left(m_{1}, \ldots, m_{n}\right) \in \mathbf{N}^{n}$ such that $m_{1}+\ldots+m_{n}=n$.

Our main interest will be in the functor $F_{1 \ldots 1}^{\prime}$, the image of the morphism $u_{1 \ldots 1}$. For brevity, we shall write $L_{F}$ and $v$ in place of $F_{1 \ldots 1}^{\prime}$ and $u_{1 \ldots 1}$, respectively. We call $L_{F}$ the linearization of $F$ : it is homogeneous of degree 1 in each variable.

To recapitulate the definitions of $L_{F}$ and $v$, let $Y=X_{1} \oplus \ldots \oplus X_{n}$. Then there are monomorphisms $i_{\alpha}: X_{\alpha} \rightarrow Y$ and epimorphisms $p_{\alpha}: Y \rightarrow X_{\alpha}$ $(1 \leqslant \alpha \leqslant n$ ), satisfying

$$
\begin{equation*}
p_{\alpha} i_{\alpha}=1_{X_{\alpha}}, \quad p_{\alpha} i_{\beta}=0 \quad \text { if } \quad \alpha \neq \beta, \quad \sum_{\alpha} i_{\alpha} p_{\alpha}=1_{Y} \tag{3.1}
\end{equation*}
$$

For each $\lambda=\left(\lambda_{1}, \ldots, \lambda_{n}\right) \in k^{n}$, let $(\lambda)_{Y}$ or $(\lambda)$ denote the morphism $\sum \lambda_{\alpha} i_{\alpha} p_{\alpha}: Y \rightarrow Y$, so that $(\lambda)$ acts as scalar multiplication by $\lambda_{\alpha}$ on the
component $X_{\alpha}$. Then $v\left(X_{1}, \ldots, X_{n}\right)$ is by definition the coefficient of $\lambda_{1} \ldots \lambda_{n}$ in $F\left((\lambda)_{Y}\right)$, and $L_{F}\left(X_{1}, \ldots, X_{n}\right)$ is the image of $v\left(X_{1}, \ldots, X_{n}\right)$, and is a direct summand of $F\left(X_{1} \oplus \ldots \oplus X_{n}\right)$.
(3.2) Example. If $F$ is the $n$th exterior power $\Lambda^{n}$, we have

$$
F\left(X_{1} \oplus \ldots \oplus X_{n}\right) \cong \underset{m_{1}, \ldots, m_{n}}{\oplus} \wedge^{m_{1}}\left(X_{1}\right) \oplus \ldots \oplus \wedge^{m_{n}}\left(X_{n}\right)
$$

summed over all $\left(m_{1}, \ldots, m_{n}\right) \in \mathbf{N}^{n}$ such that $m_{1}+\ldots+m_{n}=n$, and hence $L_{F}\left(X_{1}, \ldots, X_{n}\right) \cong X_{1} \otimes \ldots \otimes X_{n}$.

## 4. The action of the symmetric group

Let $F$ as before be homogeneous of degree $n>0$, and let

$$
L_{F}^{(n)}(X)=L_{F}(X, \ldots, X)
$$

For each element $s$ of the symmetric group $S_{n}$, let $s_{X}$ or $s$ denote the morphism $\sum i_{s(\alpha)} p_{\alpha}: X^{n} \rightarrow X^{n}$, where $X^{n}=X \oplus \ldots \oplus X$, so that $s_{X}$ permutes the summands of $X^{n}$. For any $\lambda=\left(\lambda_{1}, \ldots, \lambda_{n}\right) \in k^{n}$ we have from (3.1)

$$
s_{X}(\lambda)=\sum_{\alpha} \lambda_{\alpha} i_{s(\alpha)} p_{\alpha}=(s \lambda) \cdot s_{X}
$$

where $s \lambda=\left(\lambda_{s^{-1}(1)}, \ldots, \lambda_{s^{-1}(n)}\right)$, and hence

$$
\begin{equation*}
F(s) F((\lambda))=F((s \lambda)) \cdot F(s) . \tag{4.1}
\end{equation*}
$$

By picking out the coefficient of $\lambda_{1} \ldots \lambda_{n}$ on either side, we see that

$$
\begin{equation*}
F(s) v=v F(s) \tag{4.2}
\end{equation*}
$$

from which it follows that $F(s)$ defines by restriction an endomorphism $\tilde{F}(s)$ of $L_{F}^{(n)}$. Explicitly, if

$$
\begin{equation*}
j=j_{X}: L_{F}^{(n)}(X) \rightarrow F\left(X^{n}\right), \quad q=q_{X}: F\left(X^{n}\right) \rightarrow L_{F}^{(n)}(X) \tag{4.3}
\end{equation*}
$$

are the injection and projection associated with the direct summand $L_{F}^{(n)}(X)$ of $F\left(X^{n}\right)$, so that $q j=1$ and $j q=v$, then

$$
\begin{equation*}
\tilde{F}(s)=q F(s) j \tag{4.4}
\end{equation*}
$$

From (4.2) and (4.4) it follows that $\tilde{F}(s t)=\tilde{F}(s) \tilde{F}(t)$ for $s, t \in S_{n}$, so that $s \mapsto \tilde{F}(s)$ is a representation of $S_{n}$ on the vector space $L_{F}^{(n)}(X)$, functorial in $X$.

We shall now show that this representation of $S_{n}$ determines the functor $F$ up to isomorphism, and more precisely that there exists a functorial isomorphism of $F(X)$ onto the subspace of $S_{n}$-invariants of $L_{F}^{(n)}(X)$.

Example. In the example (3.2) we have $L_{F}^{(n)}(X)=\mathrm{T}^{n}(X)$, the $n$th tensor power of $X$ over $k$, and the action of $S_{n}$ on $L_{F}^{(n)}(X)$ in this case is given by

$$
\tilde{F}(s)\left(x_{1} \otimes \ldots \otimes x_{n}\right)=\varepsilon(s) x_{s^{-1}(1)} \otimes \ldots \otimes x_{s^{-1}(n)}
$$

where $\varepsilon(s)$ is the sign of $s \in S_{n}$. Hence $L_{F}^{(n)}(X)^{S_{n}}$ is the space of skewsymmetric tensors in $\mathrm{T}^{n}(X)$, which is isomorphic to $\Lambda^{n}(X)$ since $k$ has characteristic 0 .

Let $i=\sum i_{\alpha}: X \rightarrow X^{n}, p=\sum p_{\alpha}: X^{n} \rightarrow X$. Then we have

$$
\begin{equation*}
v F(i p) v=\sum_{s \in S_{n}} F(s) v \tag{4.5}
\end{equation*}
$$

Proof. Consider linear transformations $f: X^{n} \rightarrow X^{n}$ of the form $f=$ $\Sigma_{\alpha, \beta} \xi_{\alpha \beta} i_{\alpha} p_{\beta}$, with $\xi_{\alpha \beta} \in k ; F(f)$ will be a homogeneous polynomial of degree $n$ in the $n^{2}$ variables $\xi_{\alpha \beta}$, with coefficients in $\operatorname{End}\left(F\left(X^{n}\right)\right.$ ) depending only on $X$ (and $F$ ). For each $s \in S_{n}$, let $w_{s}$ denote the coefficient of $\xi_{s(1) 1} \ldots \xi_{s(n) n}$ in $F(f)$.
We have $F(s) v=v F(s) v$ by (4.2) (since $v^{2}=v$ ), hence $F(s) v$ is the coefficient of $\lambda_{1} \ldots \lambda_{n} \mu_{1} \ldots \mu_{n}$ in

$$
F((\lambda)) F(s) F((\mu))=F((\lambda) s(\mu))=F\left(\sum_{\alpha} \lambda_{s(\alpha)} \mu_{\alpha} i_{s(\alpha)} p_{\alpha}\right)
$$

and therefore $F(s) v=w_{s}$.
On the other hand, $v F(i p) v$ is the coefficient of $\lambda_{1} \ldots \lambda_{n} \mu_{1} \ldots \mu_{n}$ in

$$
F((\lambda)) F(i p) F((\mu))=F((\lambda) i p(\mu))=F\left(\sum_{\alpha, \beta} \lambda_{\alpha} \mu_{\beta} i_{\alpha} p_{\beta}\right)
$$

and this coefficient is clearly

$$
\sum_{s \in s_{n}} w_{s}=\sum_{s} F(s) v .
$$

We now define two morphisms of functors:

$$
\xi=q F(i): F \rightarrow L_{F}^{(n)}, \quad \eta=F(p) j: L_{F}^{(n)} \rightarrow F .
$$

(4.6) We have $\eta \xi=n$ ! (i.e. scalar multiplication by $n!$ ) and $\xi \eta=\Sigma_{s \in S_{n}} \tilde{F}(s)$.

Proof. $\eta \xi=F(p) j q F(i)=F(p) v F(i)$ is the coefficient of $\lambda_{1} \ldots \lambda_{n}$ in $F(p) F((\lambda)) F(i)=F(p(\lambda) i)$. Now $p(\lambda) i: X \rightarrow Y$ is scalar multiplication by $\lambda_{1}+\ldots+\lambda_{n}$, so that $F(p(\lambda) i)$ is scalar multiplication by $\left(\lambda_{1}+\ldots+\lambda_{n}\right)^{n}$, and the coefficient of $\lambda_{1} \ldots \lambda_{n}$ is therefore $n!$.

Next, we have $\xi \eta=q F(i) F(p) j$, so that by (4.3) and (4.5)

$$
j \xi \eta q=v F(i p) v=\sum_{s} F(s) v
$$

and hence $\xi \eta=\Sigma_{s} q F(s) j=\Sigma_{s} \tilde{F}(s)$ by (4.4). ।
Let $L_{F}^{(n)}(X)^{S_{n}}$ denote the subspace of $S_{n}$-invariants in $L_{F}^{(n)}(X)$. From (4.6) it follows that $\sigma=(n!)^{-1} \xi \eta$ is idempotent, with image $L_{F}^{(n)}(X)^{S_{n}}$. Let

$$
\varepsilon: L_{F}^{(n)}(X)^{S_{n}} \rightarrow L_{F}^{(n)}(X), \quad \pi: L_{F}^{(n)}(X) \rightarrow L_{F}^{(n)}(X)^{S_{n}}
$$

be the associated injection and projection, so that $\pi \varepsilon=1$ and $\varepsilon \pi=\sigma$. From (4.6) we have immediately
(4.7) The morphisms

$$
\begin{aligned}
& \xi^{\prime}=\pi \xi: F(X) \rightarrow L_{F}^{(n)}(X)^{s_{n}}, \\
& \eta^{\prime}=\eta \varepsilon: L_{F}^{(n)}(X)^{s_{n}} \rightarrow F(X)
\end{aligned}
$$

are functorial isomorphisms such that $\xi^{\prime} \eta^{\prime}=n!$ and $\eta^{\prime} \xi^{\prime}=n!$.

## 5. Classification of polynomial functors

It follows from (4.7) that every homogeneous polynomial functor of degree $n$ is of the form $X \mapsto L(X, \ldots, X)^{S_{n}}$, where $L: \mathfrak{B}^{n} \rightarrow \mathfrak{B}$ is homogeneous of degree 1 in each variable. The next step, therefore, is to find all such functors.

We shall begin with the case $n=1$, so that $L: \mathfrak{B} \rightarrow \mathfrak{B}$ is homogeneous of degree 1 . From (1.1), $L$ is clearly additive: $L\left(f_{1}+f_{2}\right)=L\left(f_{1}\right)+L\left(f_{2}\right)$.
(5.1) There exists a functorial isomorphism

$$
L(X) \cong L(k) \otimes X
$$

Proof. For each $x \in X$ let $e(x): k \rightarrow X$ denote the mapping $\lambda \mapsto \lambda x$. Let $Y$ be any $k$-vector space, and define

$$
\psi_{X}: \operatorname{Hom}(L(X), Y) \rightarrow \operatorname{Hom}(X, \operatorname{Hom}(L(k), Y))
$$

by $\psi_{X}(f)(x)=f \circ L(e(x))$. Clearly $\psi_{X}$ is functorial in $X$, and to prove (5.1) it is enough to show that $\psi_{X}$ is an isomorphism.

Since $L$ is additive we have $L\left(X_{1} \oplus X_{2}\right) \cong L\left(X_{1}\right) \oplus L\left(X_{2}\right)$. It follows that if $\psi_{X_{1}}$ and $\psi_{X_{2}}$ are isomorphisms, $\psi_{X_{1} \oplus X_{2}}$ is also an isomorphism. Hence it is enough to verify that $\psi_{k}$ is an isomorphism, and this is obvious.

Now let $L: \mathfrak{B}^{n} \rightarrow \mathfrak{B}$ be homogeneous and linear in each variable.
(5.2) There exists a functorial isomorphism

$$
L\left(X_{1}, \ldots, X_{n}\right) \cong L^{(n)}(k) \otimes X_{1} \otimes \ldots \otimes X_{n}
$$

where $L^{(n)}(k)=L(k, \ldots, k)$.
Proof. By repeated applications of (5.1),

$$
\begin{aligned}
& L\left(X_{1}, \ldots, X_{n}\right) \cong L\left(X_{1}, \ldots, X_{n-1}, k\right) \otimes X_{n} \\
& \cong L\left(X_{1}, \ldots, X_{n-2}, k, k\right) \otimes X_{n-1} \otimes X_{n} \\
& \ldots \quad \ldots \\
& \cong L(k, \ldots, k) \otimes X_{1} \otimes X_{2} \otimes \ldots \otimes X_{n} . \quad .
\end{aligned}
$$

From (5.2) and (4.7) we have immediately
(5.3) Let $F$ be a homogeneous polynomial functor of degree $n$. Then there exists an isomorphism of functors

$$
F(X) \cong\left(L_{F}^{(n)}(k) \otimes \mathrm{T}^{n}(X)\right)^{s_{n}}
$$

where $\mathbb{T}^{n}(X)=X \otimes \ldots \otimes X$ is the $n$th tensor power of $X . \mid$
Let $\mathfrak{F}_{n}$ denote the category of homogeneous polynomial functors of degree $n$, and $\mathfrak{B}_{S_{n}}$ the category of finite-dimensional $k\left[S_{n}\right]$-modules.
(5.4) The functors $\alpha: \mathfrak{F}_{n} \rightarrow \mathfrak{B}_{s_{n}}, \beta: \mathfrak{B}_{s_{n}} \rightarrow \mathfrak{Y}_{n}$ defined by

$$
\alpha(F)=L_{F}^{(n)}(k), \quad \beta(M)(X)=\left(M \otimes \mathrm{~T}^{n}(X)\right)^{S_{n}}
$$

constitute an equivalence of categories.
Proof. We have $\beta \alpha \cong 1_{\mathfrak{F} n}$ by (5.3), and we have to verify that $\alpha \beta \cong 1_{\mathfrak{B}_{s_{n}}}$. If $M \in \mathfrak{B}_{S_{n}}$ and $\beta(M)=F$, then

$$
F\left(X_{1} \oplus \ldots \oplus X_{n}\right)=\left(M \otimes T^{n}\left(X_{1} \oplus \ldots \oplus X_{n}\right)\right)^{S_{n}}
$$

and therefore

$$
L_{F}\left(X_{1}, \ldots, X_{n}\right)=\left(M \otimes\left(\underset{s \in S_{n}}{\oplus} X_{s(1)} \otimes \ldots \otimes X_{s(n)}\right)\right)^{S_{n}}
$$

Hence

$$
\alpha \beta(M)=L_{F}^{(n)}(k) \cong\left(M \otimes k\left[S_{n}\right]\right)^{S_{n}} \cong M .
$$

It follows that $\alpha$ and $\beta$ establish a one-one correspondence between the isomorphism classes of homogeneous polynomial functors of degree $n$, and the isomorphism classes of finite-dimensional $k\left[S_{n}\right]$-modules.
In particular, the irreducible polynomial functors (which by (2.3) are necessarily homogeneous) correspond to the irreducible representations of the symmetric groups $S_{n}$, and are therefore naturally indexed by partitions.

For each partition $\lambda$ of $n$, let $M_{\lambda}$ be an irreducible $k\left[S_{n}\right]$-module with character $\chi^{\lambda}$. From (5.4) the irreducible polynomial functor $F_{\lambda}$ indexed by $\lambda$ is given by

$$
\begin{equation*}
F_{\lambda}(X)=\left(M_{\lambda} \otimes \mathrm{T}^{n}(X)\right)^{s_{n}} \tag{5.5}
\end{equation*}
$$

Now if $G$ is any finite group and $U, V$ are finite-dimensional $k[G]$. modules, there is a canonical isomorphism $\left(U^{*} \otimes V\right)^{G} \cong \operatorname{Hom}_{k[G]}(U, V)$, functorial in both $U$ and $V$, where $U^{*}=\operatorname{Hom}_{k}(U, k)$ is the contragredient of $U$. In the present context we have $M_{\lambda}^{*} \cong M_{\lambda}$, and therefore

$$
F_{\lambda}(X) \cong \operatorname{Hom}_{k\left[S_{n}\right]}\left(M_{\lambda}, \mathrm{T}^{n}(X)\right)
$$

Consider $\mathrm{T}^{n}(X)$ as a $k\left[S_{n}\right]$-module. Its decomposition into isotypic components is

$$
\mathbf{T}^{n}(X) \cong \underset{\lambda}{\oplus} M_{\lambda} \otimes \operatorname{Hom}_{k\left[S_{n}\right]}\left(M_{\lambda}, \mathbf{T}^{n}(X)\right)
$$

so that

$$
\begin{equation*}
\mathrm{T}^{n}(X) \cong \underset{\lambda}{\oplus} M_{\lambda} \otimes F_{\lambda}(X) \tag{5.6}
\end{equation*}
$$

functorially in $X$.

## 6. Polynomial functors and $k\left[S_{n}\right]$-modules

We shall need the following facts. Let $G, H$ be finite groups, $M$ a finite-dimensional $k[G]$-module, and $N$ a finite-dimensional $k[H]$. module. Then $M \otimes N$ is a $k[G \times H]$-module, and we have

$$
\begin{equation*}
M^{G} \otimes N^{H}=(M \otimes N)^{G \times H} \tag{A}
\end{equation*}
$$

as subspaces of $M \otimes N$.
Suppose now that $H$ is a subgroup of $G$, and let $\operatorname{ind}_{H}^{G} N=k[G] \otimes_{k[H]} N$ be the $k[G]$-module induced by $N$, and $\operatorname{res}_{G}^{H} M$ the module $M$ regarded as a $k[H]$-module by restriction of scalars. Then
(B)

$$
N^{H} \cong\left(\operatorname{ind}_{H}^{G} N\right)^{G} .
$$

This is a particular case of Frobenius reciprocity:

$$
\operatorname{Hom}_{k[H]}\left(\operatorname{res}_{G}^{H} M, N\right) \cong \operatorname{Hom}_{k[G]}\left(M, \operatorname{ind}_{H}^{G} N\right)
$$

in which $M$ is taken to be the trivial one-dimensional $k[G]$-module.
Suppose again that $H$ is a subgroup of $G$. Then

$$
\begin{equation*}
\operatorname{ind}_{H}^{G}\left(N \otimes \operatorname{res}_{G}^{H} M\right) \cong\left(\operatorname{ind}_{H}^{G} N\right) \otimes M . \tag{C}
\end{equation*}
$$

For both sides are canonically isomorphic to $k[G] \otimes_{k[H]} N \otimes_{k} M$.
Finally, suppose that $H$ is a normal subgroup of $G$, that $M$ is a finite-dimensional $k[G]$-module and $L$ a finite-dimensional $k[G / H]$ module, hence a $k[G]$-module on which $H$ acts trivially. Then

$$
\begin{equation*}
\left(L \otimes M^{H}\right)^{G / H}=(L \otimes M)^{G} \tag{D}
\end{equation*}
$$

as subspaces of $L \otimes M$.
For $L \otimes M^{H}=(L \otimes M)^{H}$ since $H$ acts trivially on $L$, hence

$$
\left(L \otimes M^{H}\right)^{G / H}=\left((L \otimes M)^{H}\right)^{G / H}=(L \otimes M)^{G} .
$$

Now let $E, F$ be homogeneous polynomial functors, of degrees $m$ and $n$ respectively. Then

$$
E \otimes F: X \mapsto E(X) \otimes F(X)
$$

is a homogeneous polynomial functor of degree $m+n$, hence corresponds as in $\S 5$ to a representation of $S_{m+n}$.
Suppose that $E=\beta(M), F=\beta(N)$ in the notation of (5.4). Then

$$
\begin{aligned}
(E \otimes F)(X) & =\left(M \otimes \mathrm{~T}^{m}(X)\right)^{S_{m}} \otimes\left(N \otimes \mathrm{~T}^{n}(X)\right)^{S_{n}} \\
& \cong\left(M \otimes N \otimes \mathrm{~T}^{m+n}(X)\right)^{S_{m} \times S_{n}} \quad \text { by (A) } \\
& \cong\left(\operatorname{ind}_{S_{m} \times S_{n}}^{S_{m+n}}(M \otimes N) \otimes \mathrm{T}^{m+n}(X)\right)^{S_{m+n}} \quad \text { by (B) and (C) }
\end{aligned}
$$

so that $E \otimes F$ corresponds to the $k\left[S_{m+n}\right]$-module

$$
\begin{equation*}
M . N=\operatorname{ind}_{S_{m} \times{ }^{\prime} S_{n}}^{S_{m}}(M \otimes N) \tag{6.1}
\end{equation*}
$$

which we call the induction product of $M$ and $N$.

Since tensor products are commutative and associative up to isomorphism, so is the induction product.

Consider next the composition of polynomial functors. With $E, F$ as before we have

$$
\begin{aligned}
(E \circ F)(X) & =E\left(\left(N \otimes \mathrm{~T}^{n}(X)\right)^{s_{n}}\right) \\
& =\left(M \otimes \mathrm{~T}^{m}\left(\left(N \otimes \mathrm{~T}^{n}(X)\right)^{s_{n}}\right)\right)^{s_{m}} \\
& \cong\left(M \otimes\left(\mathrm{~T}^{m}(N) \otimes \mathrm{T}^{m n}(X)\right)^{s_{m}^{m}}\right)^{s_{m}} \quad \text { by (A) }
\end{aligned}
$$

where $S_{n}^{m}=S_{n} \times \ldots \times S_{n}$ as a subgroup of $S_{m n}$. Now the normalizer of $S_{n}^{m}$ in $S_{m n}$ is the semidirect product $S_{n}^{m} \times S_{m}$, in which $S_{m}$ acts by permuting the factors of $S_{n}^{m}$ : this is the wreath product of $S_{n}$ with $S_{m}$, denoted by $S_{n} \sim S_{m}$. Using (D) it follows that

$$
\begin{aligned}
(E \circ F)(X) & \cong\left(M \otimes \mathrm{~T}^{m}(N) \otimes \mathrm{T}^{m n}(X)\right)^{S_{n} \sim S_{m}} \\
& \cong\left(\operatorname{ind}_{S_{n} \sim S_{m}}^{S_{m}}\left(M \otimes \mathrm{~T}^{m}(N)\right) \otimes \mathrm{T}^{m n}(X)\right)^{S_{m n}}
\end{aligned}
$$

by (B) and (C). Hence $E \circ F$ corresponds to the $k\left[S_{m n}\right]$-module

$$
\begin{equation*}
M \circ N=\operatorname{ind}_{S_{n} \sim S_{m} m}\left(M \otimes \mathbf{T}^{m}(N)\right), \tag{6.2}
\end{equation*}
$$

which we call the composition product or plethysm (Chapter I, §8) of $M$ with $N$. Plethysm is linear in $M$ :

$$
\begin{equation*}
\left(M_{1} \oplus M_{2}\right) \circ N \cong\left(M_{1} \circ N\right) \oplus\left(M_{2} \circ N\right) \tag{6.3}
\end{equation*}
$$

and distributive over the induction product:

$$
\begin{equation*}
\left(M_{1} \circ N\right) \cdot\left(M_{2} \circ N\right) \cong\left(M_{1} \cdot M_{2}\right) \circ N . \tag{6.4}
\end{equation*}
$$

For the corresponding relation for the functors is

$$
\left(E_{1} \circ F\right) \otimes\left(E_{2} \circ F\right)=\left(E_{1} \otimes E_{2}\right) \circ F
$$

which is obvious.

## 7. The characteristic map

If $\mathfrak{A}$ is any abelian category, let $K(\mathfrak{A})$ denote the Grothendieck group of凡.

Let $\mathfrak{F}$ denote the category of polynomial functors of bounded degree $(\xi 2$ ) on $\mathfrak{B}$. From (2.3) and (5.4) it follows that $\mathfrak{F}$ is abelian and semisimple, and that

$$
K(\mathfrak{F}) \cong \underset{n>0}{\oplus} K\left(\mathfrak{F}_{n}\right) \cong \underset{n>0}{\oplus} K\left(\mathfrak{B}_{S_{n}}\right) .
$$

Moreover, $K\left(\mathfrak{B}_{S_{n}}\right)=R^{n}$ in the notation of Chapter I, $\S 7$.
The tensor product (§6) defines a structure of a commutative, associative, graded ring with identity element on $K(\mathfrak{F})$. In view of (6.1), this ring structure agrees with that defined on $R=\oplus R^{n}$ in Chapter I, §7, so that we may identify $K(\mathfrak{F})$ with $R$.
$K(\mathfrak{F})$ also carries a scalar product. If $E, F$ are polynomial functors, then $\operatorname{Hom}(E, F)$ is a finite-dimensional $k$-vector space, and we define

$$
\langle E, F\rangle=\operatorname{dim}_{k} \operatorname{Hom}(E, F) .
$$

Again by (5.4), it is clear that this scalar product is the same as that defined on $R$ in Chapter I, $\S 7$.

We shall now give an intrinsic description of the characteristic map ch: $R \rightarrow \Lambda$, defined in Chapter I, §7. Let $F$ be a polynomial functor on $\mathfrak{B}$. For each $\lambda=\left(\lambda_{1}, \ldots, \lambda_{r}\right) \in k^{r}$, let $(\lambda)$ as before denote the diagonal endomorphism of $k^{r}$ with eigenvalues $\lambda_{1}, \ldots, \lambda_{r}$. Then trace $F((\lambda))$ is a polynomial function of $\lambda_{1}, \ldots, \lambda_{r}$, which is symmetric because by (4.1)

$$
\begin{aligned}
\operatorname{trace} F((s \lambda))=\operatorname{trace} F\left(s(\lambda) s^{-1}\right) & =\operatorname{trace} F(s) F((\lambda)) F(s)^{-1} \\
& =\operatorname{trace} F((\lambda))
\end{aligned}
$$

for all $s \in S_{r}$. Since the trace is additive, it determines a mapping

$$
\chi_{r}: K(\mathfrak{F}) \rightarrow \Lambda_{r}
$$

namely $\chi_{r}(F)\left(\lambda_{1}, \ldots, \lambda_{r}\right)=$ trace $F((\lambda))$; and since the trace is multiplicative with respect to tensor products, $\chi_{r}$ is a homomorphism of graded rings. Moreover, it is clear from the definitions that $\chi_{r}=\rho_{q, r}{ }^{\circ} \chi_{q}$ for $q \geqslant r$, in the notation of Chapter I, §2, and hence the $\chi_{r}$ determine a homomorphism of graded rings

$$
\begin{equation*}
\chi: K(\mathfrak{F}) \rightarrow \Lambda . \tag{7.1}
\end{equation*}
$$

To see that this homomorphism coincides with the characteristic map ch: $R \rightarrow \Lambda$ defined in Chapter I, §7, we need only observe that $\chi\left(\Lambda^{n}\right)=e_{n}$ and that $\Lambda^{n}$ corresponds to the sign representation $\varepsilon_{n}$ of $S_{n}$ in the correspondence (5.4).

Hence from Chapter I, (7.5) and (7.6) it follows that
(7.2) If $F_{\lambda}: \mathfrak{B} \rightarrow \mathfrak{B}$ is the irreducible polynomial functor corresponding to the partition $\lambda$, then $\chi\left(F_{\lambda}\right)$ is the Schur function $s_{\lambda}$.

If $F$ is any polynomial functor, the decomposition (2.5) applied to the functor $F^{\prime}:\left(X_{1}, \ldots, X_{r}\right) \rightarrow F\left(X_{1} \oplus \ldots \oplus X_{r}\right)$ shows that the eigenvalues of $F((\lambda))$ are monomials $\lambda_{1}^{m_{1}} \ldots \lambda_{r}^{m_{r}}$, with corresponding eigenspaces $F_{m_{1} \ldots m_{r}}^{\prime}(k, \ldots, k)$, and therefore

$$
\chi_{r}(F)=\sum_{m_{1}, \ldots, m_{r}} \operatorname{dim} F_{m_{1} \ldots m_{r}}^{\prime}(k, \ldots, k) x_{1}^{m_{1}} \ldots x_{r}^{m_{r}}
$$

From this and the definition of plethysm in Chapter I, §8, it follows that

$$
\begin{equation*}
\chi(E \circ F)=\chi(E) \circ \chi(F) \tag{7.3}
\end{equation*}
$$

for any two polynomial functors $E, F$.
In particular, if $\lambda$ and $\mu$ are partitions, the functor $F_{\lambda} \circ F_{\mu}$ is a direct sum of irreducible functors $F_{\pi}$, so that in $K(\mathfrak{F})$ we have

$$
F_{\lambda} \circ F_{\mu}=\sum_{\pi} a_{\lambda \mu}^{\pi} F_{\pi}
$$

with non-negative integral coefficients $a_{\lambda \mu}^{\pi}$. By (7.2) and (7.3) it follows that

$$
\begin{equation*}
s_{\lambda} \circ s_{\mu}=\sum_{\pi} a_{\lambda \mu}^{\pi} s_{\pi} \tag{7.4}
\end{equation*}
$$

with coefficients $a_{\lambda \mu}^{\pi} \geqslant 0$.

## Example

It follows from $\S 7$ that a polynomial functor $F$ is determined up to isomorphism by its trace $\chi(F)$. Hence identities in the ring $\Lambda$ may be interpreted as statements about polynomial functors. Consider for example the identities of Chapter I, $\S 5$, Examples 5, 7, and 9. From Example 5(a) we obtain

$$
\begin{equation*}
\mathbf{S}^{k}\left(\mathbf{S}^{2} V\right) \cong \underset{\mu}{\oplus} F_{\mu}(V) \tag{1}
\end{equation*}
$$

summed over even partitions $\mu$ of $2 k$, and from Example 5(b)

$$
\begin{equation*}
\mathbf{S}^{k}\left(\Lambda^{2} V\right) \cong \underset{\nu}{\oplus} F_{\nu}(V) \tag{2}
\end{equation*}
$$

summed over partitions $\nu$ of $2 k$ such that $\nu^{\prime}$ is even (i.e. all columns of $\nu$ have even length). Likewise Example 7 gives

$$
\begin{equation*}
\mathbf{S}^{k}\left(V \oplus \wedge^{2} V\right) \cong \underset{\lambda}{\oplus} F_{\lambda}(V) \tag{3}
\end{equation*}
$$

summed over partitions $\lambda$ such that $|\lambda|+c(\lambda)=2 k$, where $c(\lambda)$ (loc. cit.) is the number of columns of odd length in $\lambda$, or equivalently the number of odd parts of $\lambda^{\prime}$. Finally from Example 9(a) and $9($ b) we obtain

$$
\begin{equation*}
\Lambda^{p}\left(\wedge^{2} V\right) \cong \underset{\pi}{\oplus} F_{\pi}(V) \tag{4}
\end{equation*}
$$

summed over partitions $\pi=\left(\alpha_{1}-1, \ldots, \alpha_{p}-1 \mid \alpha_{1}, \ldots, \alpha_{p}\right)$ in Frobenius notation, and

$$
\begin{equation*}
\Lambda^{p}\left(\mathbf{S}^{2} V\right) \cong \underset{p}{\oplus} F_{p}(V) \tag{5}
\end{equation*}
$$

summed over partitions $\rho=\left(\alpha_{1}+1, \ldots, \alpha_{p}+1 \mid \alpha_{1}, \ldots, \alpha_{p}\right)$.

## 8. The polynomial representations of $G L_{m}(k)$

Let $G$ be any group (finite or not) and let $R$ be a matrix representation of $G$ of degree $d$ over an algebraically closed field $k$ of characteristic 0 , the representing matrices being $R(g)=\left(R_{i j}(g)\right), g \in G$. Thus $R$ determines $d^{2}$ functions $R_{i j}: G \rightarrow k$, called the matrix coefficients of $R$. If we replace $R$ by an equivalent representation $g \mapsto A R(g) A^{-1}$, where $A$ is a fixed matrix, the space of functions on $G$ spanned by the matrix coefficients is unaltered. It follows that if $R$ is reducible, the $R_{i j}$ are linearly dependent over $k$, because in an equivalent representation some of them will be zero. Again, if $R$ and $S$ are equivalent irreducible representations of $G$, the matrix coefficients of $S$ are linearly dependent on those of $R$.
(8.1) Let $R^{(1)}, R^{(2)}, \ldots$ be a sequence of matrix representations over $k$ of a group $G$. Then the following are equivalent:
(i) All the matrix coefficients $R_{i j}^{(1)}, R_{i j}^{(2)}, \ldots$ are linearly independent;
(ii) The representations $R^{(1)}, R^{(2)}, \ldots$ are irreducible and pairwise inequivalent.

We have just seen that (i) implies (ii). The reverse implication is a theorem of Frobenius and Schur (see [C5], p. 183).

Now let $V=k^{m}$ and let $G=G L(V)=G L_{m}(k)$. Let $x_{i j}(1 \leqslant i, j \leqslant m)$ be the coordinate functions on $G$, so that $x_{i j}(g)$ is the $(i, j)$ element of the matrix $g \in G$. Let

$$
P=\underset{n \geqslant 0}{\oplus} P^{n}=k\left[x_{i j}: 1 \leqslant i, j \leqslant m\right]
$$

be the algebra of polynomial functions of $G$, where $P^{n}$ consists of the polynomials in the $x_{i j}$ that are homogeneous of degree $n$. A matrix representation $R$ of $G$ is said to be polynomial if its matrix coefficients are polynomials in the $x_{i j}$. Clearly, each polynomial functor $F_{\lambda}$ such that
$l(\lambda) \leqslant m$ (so that $F_{\lambda}(V) \neq 0$ ) gives rise to an equivalence class of polyno. mial representations $R^{\lambda}$ of $G$, in which $g \in G$ acts as $F_{\lambda}(g)$ on $F_{\lambda}(V)$.

We shall show that
(8.2) The representations $R^{\lambda}$ such that $l(\lambda) \leqslant m$ are inequivalent irreducible polynomial representations of $G$, and conversely every irreducible polynomial representation of $G$ is equivalent to some $R^{\lambda}$.

Proof. By (7.2), the dimension of $F_{\lambda}(V)$ is equal to $s_{\lambda}\left(x_{1}, \ldots, x_{m}\right)$ evaluated at $x_{1}=\ldots=x_{m}=1$, and hence by Chapter I, (4.3)

$$
\begin{equation*}
d_{n}=\sum_{|\lambda|=n}\left(\operatorname{dim} F_{\lambda}(V)\right)^{2} \tag{1}
\end{equation*}
$$

is equal to the coefficient of $t^{n}$ in $(1-t)^{-m^{2}}$, so that

$$
\begin{equation*}
d_{n}=\operatorname{dim}_{k} P^{n} \tag{2}
\end{equation*}
$$

On the other hand, the decomposition (5.6)

$$
\mathbf{T}^{n}(V) \cong \underset{|\lambda|-n}{\oplus} M_{\lambda} \otimes F_{\lambda}(V)
$$

shows that the representation of $G$ on $\mathrm{T}^{n}(V)$ is equivalent to the diagonal sum of $\operatorname{dim} M_{\lambda}$ copies of $R^{\lambda}$, for each partition $\lambda$ of $n$ of length $\leqslant m$. Now the matrix coefficients of $T^{n}$ are the monomials of degree $n$ in the $x_{i j}$, hence span $P_{n}$. Consequently the $R_{i j}^{\lambda}$ also span $P^{n}$; but from (1) and (2) above it follows that the total number of these matrix coefficients is $d_{n}=\operatorname{dim}_{k} P^{n}$. Hence the $R_{i j}^{\lambda}$ such that $|\lambda|=n$ and $l(\lambda) \leqslant m$ form a $k$-basis of $P^{n}$, and it follows from (8.1) that the $R^{\lambda}$ are irreducible and pairwise inequivalent.

Finally, if $R$ is any polynomial representation of $G$, the argument of $\S 2$ shows that $R$ is a direct sum of homogeneous polynomial representations. So if $R$ is irreducible, its matrix coefficients $R_{i j}$ are homogeneous of degree say $n$, i.e. $R_{i j} \in P^{n}$. Hence by (8.1) $R$ is equivalent to some $R^{\lambda}$.

In the course of the above proof we have shown that
(8.3) The matrix coefficients $R_{i j}^{\lambda}$, where $\lambda$ ranges over all partitions of length $\leqslant m$, form a $k$-basis of $P$.

If $f \in \Lambda$ is any symmetric function, we may regard $f$ as a function on $G$ by the rule

$$
f(x)=f\left(\xi_{1}, \ldots, \xi_{m}\right)
$$

where $\xi_{1}, \ldots, \xi_{m}$ are the eigenvalues of $x \in G$. For example, $e_{r}(x)=$ trace $\left(\Lambda^{r} x\right)$ is the sum of the principal $r \times r$ minors of the matrix $x$, and
hence is a polynomial function of $x$. Since each $f \in \Lambda$ is a polynomial in the $e_{r}$, it follows that $f$ is a polynomial function on $G$.
(8.4)(i) The character of the representation $R^{\lambda}$ of $G$ is the Schur function $s_{\lambda}$. (ii), A polynomial representation of $G$ is determined up to equivalence by its character.

Proof. (i) From (7.2), $s_{\lambda}(x)$ is the trace of $F_{\lambda}(x)$ if $x \in G$ is a diagonal matrix, and hence also if $x$ is diagonalizable. Since the diagonalizable matrices are Zariski-dense in $G$ (because $x$ is diagonalizable whenever $D(x) \neq 0$, where $D(x)$ is the discriminant of the characteristic polynomial of $x$ ) and both $s_{\lambda}(x)$ and trace $F_{\lambda}(x)$ are polynomial functions of $x$, it follows that $s_{\lambda}(x)=\operatorname{trace} F_{\lambda}(x)$ for all $x \in G$.
(ii) This follows from (i), since the Schur functions $s_{\lambda}$ such that $l(\lambda) \leqslant m$ are linearly independent.

The group $G$ acts on $P$ (and on each $P^{n}$ ) by the rule

$$
(g p)(x)=p(x g)
$$

for $p \in P$ and $g, x \in G$. Hence

$$
g R_{i j}^{\lambda}(x)=R_{i j}^{\lambda}(x g)=\sum_{r} R_{i r}^{\lambda}(x) R_{r j}^{\lambda}(g),
$$

so that

$$
g R_{i j}^{\lambda}=\sum_{r} R_{r j}^{\lambda}(g) R_{i r}^{\lambda} .
$$

This equation shows that for each $i=1,2, \ldots, d_{\lambda}$, where $d_{\lambda}=\operatorname{dim} F_{\lambda}(V)$ is the degree of $R^{\lambda}$, the subspace of $P$ spanned by the $R_{i j}^{\lambda}\left(1 \leqslant j \leqslant d_{\lambda}\right)$ is an irreducible $G$-module affording the representation $R^{\lambda}$, and hence is isomorphic to $F_{\lambda}(V)$. Consequently, if $P_{\lambda}$ is the subspace of $P$ spanned by all the $R_{i j}^{\lambda}$, we have

$$
\begin{equation*}
P=\underset{\lambda}{\oplus} P_{\lambda} \tag{8.5}
\end{equation*}
$$

where $\lambda$ ranges over all partitions of length $\leqslant m$, and $P_{\lambda} \cong F_{\lambda}(V)^{d_{\lambda}}$.

## Examples

1. (a) Let $\lambda$ be a partition of $n$ and let $M_{\lambda}$ (\$7, Example 15) denote the Specht module corresponding to $\lambda$. It has a basis $\left(f_{t}\right)$ indexed by the standard tableaux $t$ of shape $\lambda$, where (loc. cit.) $f_{l}$ is a product of Vandermonde determinants on the columns of $t$, so that

$$
\begin{equation*}
w f_{t}=\varepsilon(w) f_{t} \tag{1}
\end{equation*}
$$

if $w \in S_{n}$ lies in the column stabilizer $C_{t}$ of $t$.

If $v \in S_{n}$, then $v f_{t}$ is a $\mathbf{Z}$-linear combination of the $f_{s}$, say

$$
\begin{equation*}
v f_{t}=\sum_{s} \rho_{s t}^{\lambda}(v) f_{s} \tag{2}
\end{equation*}
$$

summed over standard tableaux $s$ of shape $\lambda$, and the mapping $v \mapsto\left(\rho_{s t}^{\lambda}(v)\right)$ is an irreducible representation of $S_{n}$ by integer matrices.
(b) Let $X$ be a $k$-vector space with basis $x_{1}, \ldots, x_{q}$. Then $\mathrm{T}^{n}(X)$ has a basis consisting of the tensors

$$
x_{\tau}=x_{\tau(1)} \otimes \ldots \otimes x_{\tau(n)}
$$

where $\tau$ runs through all mappings $[1, n] \rightarrow[1, q]$. If $w \in S_{n}$ we have $w\left(x_{\tau}\right)=x_{\tau w^{-1}}$.
Hence $M_{\lambda} \otimes \mathrm{T}^{n}(X)$ has as basis the products $f_{i} \otimes x_{\tau}$, where $t$ is a standard tableau of shape $\lambda$, and $\tau:[1, n] \rightarrow[1, q]$. Now consider $F_{\lambda}(X)=\left(M_{\lambda} \otimes T^{n}(X)\right)^{S_{n}}$ : clearly it will be spanned by the elements

$$
\begin{equation*}
x_{t, \tau}=\sum_{w \in S_{n}} w\left(f_{t} \otimes x_{\tau}\right)=\sum_{w \in S_{n}} w f_{t} \otimes x_{\tau w^{-1}} . \tag{3}
\end{equation*}
$$

Given $\tau$ as above, we may choose $v \in S_{n}$ so that $\sigma=\tau v^{-1}$ is an increasing mapping of $[1, n]$ into $[1, q]$. We then have

$$
\begin{aligned}
x_{t, \tau} & =\sum_{w \in S_{n}} w f_{t} \otimes x_{\sigma v w^{-1}} \\
& =\sum_{w \in S_{n}} w v f_{t} \otimes x_{\sigma w^{-1}}
\end{aligned}
$$

and hence by (2) and (3) we have

$$
\begin{equation*}
x_{t, \tau}=\sum_{s} \rho_{s t}^{\lambda}(v) x_{s, \sigma} \tag{4}
\end{equation*}
$$

and therefore $F_{\lambda}(X)$ is spanned by the elements $x_{t, \tau}$ such that $t$ is a standard tableau of shape $\lambda$ and $\tau:[1, n] \rightarrow[1, q]$ is an increasing mapping.
(c) We regard a standard tableau $t$ of shape $\lambda$ as a bijective mapping of (the shape of) $\lambda$ onto [1, n], so that $t(i, j)$ is the integer occupying the square $(i, j) \in \lambda$. Then $T=\tau \circ t$ is a mapping $\lambda \rightarrow[1, q]$, i.e. it is a filling of the squares of $\lambda$ with the numbers $1,2, \ldots, q$. If $\tau$ is increasing, then $T$ is increasing (in the weak sense) along rows and down columns, and we have $x_{t, \tau}=0$ unless $T$ is a (column-strict) tableau. For if there are two squares $a, b$ in the same column of $\lambda$ such that $T(a)=T(b)$, i.e. $\tau(t(a))=\tau(t(b))$, let $w \in S_{n}$ be the transposition that interchanges $t(a)$ and $t(b)$. Since $w \in C_{t}$ it follows from (1) above that $w f_{t}=-f_{t}$, and since also $w x_{\tau}=x_{\tau}$ we have $w\left(f_{t} \otimes x_{\tau}\right)=-f_{t} \otimes x_{\tau}$, and consequently $x_{t, \tau}=0$.
(d) On the other hand, if $T=\tau \circ t$ is a tableau, then $\tau$ is uniquely determined by $T$, because the sequence ( $\tau(1), \ldots, \tau(n)$ ) is the weight of $T$ (Chapter I, §1). In general the standard tableau $t$ is not uniquely determined by $T$ : for example, if
$T=\frac{1}{2}^{2}$ then $t$ can be either $\frac{1}{3}^{2}$ or $\frac{1}{2}^{3}$. However, if $T=\tau \circ t=\tau \circ t_{1}$ with $t, t_{1}$ standard tableaux, then $t_{1}=v t$ for some $v \in S_{n}$ such that $\tau=\tau \circ v$, and hence

$$
\begin{aligned}
x_{t_{1}, \tau} & =\sum_{w \in S_{n}} w\left(f_{t_{1}} \otimes x_{\tau}\right) \\
& =\sum_{w \in S_{n}} w v\left(f_{t} \otimes x_{\tau}\right)=x_{t, \tau}
\end{aligned}
$$

and we may therefore unambiguously define $x_{T}=x_{t, \tau}$ when $T$ is a column-strict tableau.
(e) It follows from (b) and (c) above that $F_{\lambda}(X)$ is spanned by the elements $x_{T}$, where $T: \lambda \rightarrow[1, q]$ is a column-strict tableau. But now the dimension of $F_{\lambda}(X)$ is by (7.2) equal to the Schur function $s_{\lambda}$ evaluated at $\left(1^{q}\right)=(1, \ldots, 1)$, which by Chapter I, (5.12) is equal to the number of tableaux $T$ as above. Hence the $x_{T}$ from a $k$-basis of $F_{\lambda}(X)$.
2. In continuation of Example 1, let $Y$ be a $k$-vector space with basis $y_{1}, \ldots, y_{p}$, and let $\alpha: X \rightarrow Y$ be a $k$-linear mapping, say

$$
\alpha x_{j}=\sum_{i=1}^{p} a_{i j} y_{i},
$$

so that $\alpha$ is represented by the $p \times q$ matrix $A=\left(a_{i j}\right)$ over $k$, relative to the given bases of $X$ and $Y$. Then $\alpha$ induces $T^{n}(\alpha): T^{n}(X) \rightarrow T^{n}(Y)$, given by

$$
\begin{equation*}
\mathrm{T}^{n}(\alpha) x_{\tau}=\sum_{\sigma} a_{\sigma \tau} y_{\sigma} \tag{5}
\end{equation*}
$$

where $a_{\sigma \tau}=a_{\sigma(1) \tau(1)} \ldots a_{\sigma(n) \tau(n)}$ and in the sum $\sigma$ runs through all mappings $[1, n] \rightarrow[1, p]$.

If now $\lambda$ is a partition of $n$, we have a $k$-linear mapping $F_{\lambda}(\alpha): F_{\lambda}(X) \rightarrow F_{\lambda}(Y)$, say

$$
\begin{equation*}
F_{\lambda}(\alpha) x_{T}=\sum_{S} a_{S T} y_{S} \tag{6}
\end{equation*}
$$

summed over column-strict tableaux $S: \lambda \rightarrow[1, p]$. We shall now compute the matrix coefficients $a_{S T}$.

If $T=\tau \circ t$ as in Example 1, then

$$
\begin{aligned}
F_{\lambda}(\alpha) x_{T} & =\sum_{w \in S_{n}} w\left(f_{t}\right) \otimes T^{n}(\alpha) x_{\tau w^{-1}} \\
& =\sum_{w \in S_{n}} w\left(f_{t}\right) \otimes \sum_{\sigma} a_{\sigma, \tau w^{-1}} y_{\sigma}
\end{aligned}
$$

by (3) and (5) above. By replacing $\sigma$ by $\sigma w^{-1}$ in the inner sum above and observing that $a_{\sigma w^{-1}, \tau w^{-1}}=a_{\sigma, \tau}$, we obtain

$$
\begin{equation*}
F_{\lambda}(\alpha) x_{T}=\sum_{\sigma} a_{\sigma \tau} y_{t, \sigma} \tag{7}
\end{equation*}
$$

summed over $\sigma:[1, n] \rightarrow[1, p]$. For each such $\sigma$, choose $v \in S_{n}$ such that $\sigma_{0}=$ $\sigma v^{-1}$ is an increasing mapping; then by (4) of Example 1 we have

$$
\begin{align*}
y_{t, \sigma} & =\sum_{s} \rho_{s t}^{\lambda}(v) y_{s, \sigma_{0}}  \tag{8}\\
& =\sum_{s} \rho_{s t}^{\lambda}(v) y_{s}
\end{align*}
$$

summed over standard tableaux $s$ such that $S=\sigma_{0} \circ s$ is a tableau. From (7) and (8) we obtain

$$
F_{\lambda}(\alpha) x_{T}=\sum \rho_{s t}^{\lambda}(v) a_{\sigma_{0} v, \tau} y_{S}
$$

summed over all triples $\left(\sigma_{0}, s, v\right)$ such that $\sigma_{0}:[1, n] \rightarrow[1, p]$ is increasing, $s$ is a standard tableau of shape $\lambda, S=\sigma_{0} \circ s$ is a column-strict tableau, and $v \in S_{n}$ runs through a set of representatives of the cosets $G v$ of the stabilizer $G$ of $\sigma_{0}$ in $S_{n}$. Hence finally

$$
a_{S T}=\sum_{s, v} \rho_{s t}^{\lambda}(v) a_{\sigma_{0} v, \tau}
$$

summed over $s, v$ as above. In particular, this formula shows that $a_{S T}$ is a polynomial in the $a_{i j}$ with integer coefficients.
3. As in Chapter I, $\S 7$, Example 15, let $\lambda$ be a partition of $n$ and let $T$ be any numbering of the diagram of $\lambda$ with the numbers $1,2, \ldots, n$. Let $R$ (resp. $C$ ) be the subgroup of $S_{n}$ that stabilizes each row (resp. column) of $T$, and let

$$
e=e_{T}=\sum_{u, v} \varepsilon(u) u v \in k\left[S_{n}\right]
$$

summed over $(u, v) \in C \times R$. Then (loc. cit.) $k\left[S_{n}\right] e_{T}$ is a minimal left ideal of the group algebra $k\left[S_{n}\right]$, isomorphic to $M_{\lambda}$. Deduce from (5.5') that

$$
F_{\lambda}(V) \cong e_{T} \boldsymbol{\top}^{n}(V)
$$

as $G$-modules.
4. Let $e_{1}, \ldots, e_{m}$ be the standard basis of $V=k^{m}$, so that

$$
g e_{j}=\sum_{i=1}^{m} g_{i j} e_{i}
$$

if $g=\left(g_{i j}\right) \in G$. Then $\mathrm{T}=\mathrm{T}^{n}(V)$ has a basis consisting of the tensors $e_{\tau}=$ $e_{\tau(1)} \otimes \ldots \otimes e_{\tau(n)}$, where $\tau$ runs through all mappings of $[1, n]$ into $[1, m]$. Let $\langle u, v\rangle$ be the scalar product on T defined by $\left\langle e_{\sigma}, e_{\tau}\right\rangle=\delta_{\sigma \tau}$, and for each $u \in \mathrm{~T}$ let $\varphi=\varphi_{u}: T \rightarrow P^{n}$ be the linear mapping defined by

$$
\varphi(v)(g)=\langle u, g v\rangle
$$

for $v \in \mathbf{T}$ and $g \in G$. Verify that $\varphi$ is a $G$-module homomorphism and deduce that (in the notation of Example 3) $\varphi\left(e_{T} T\right)$ is either zero or is a $G$-submodule of $P^{n}$ isomorphic to $F_{\lambda}(V)$.
5. If $g=\left(g_{i j}\right) \in G$ let

$$
g^{(r)}=\left(g_{i j}\right)_{1<i, j<r}
$$

for $1 \leqslant r \leqslant m$ (so that $g^{(m)}=g$ ), and for any partition $\lambda$ of length $\leqslant m$ let

$$
\Delta_{\lambda}(g)=\prod_{i>1} \operatorname{det}\left(g^{\left(\lambda_{i}^{\prime}\right)}\right)
$$

Then $\Delta_{\lambda}$ is a polynomial function on $G$. If $b=\left(b_{i j}\right) \in G$ is upper triangular, we have

$$
\Delta_{\lambda}(b)=b_{11}^{\lambda_{1}} \ldots b_{m m}^{\lambda_{m}}
$$

and

$$
\Delta_{\lambda}(g b)=\Delta_{\lambda}\left(b^{\prime} g\right)=\Delta_{\lambda}(g) \Delta_{\lambda}(b)
$$

for all $g \in G$.
Show that the $G$-submodule of $P$ generated by $\Delta_{\lambda}$ is irreducible and isomorphic to $F_{\lambda}(V)$. (This is a particular case of the construction of Example 4. Take $T$ to be the standard tableau of shape $\lambda$ in which the numbers $1,2, \ldots, n=|\lambda|$ occur in order in successive rows, and let $u=e_{\tau}$ where $(\tau(1), \ldots, \tau(n)$ ) is the weakly increasing sequence in which $i$ occurs $\lambda_{i}$ times, for each $i=1,2, \ldots, m$. The subgroup of $S_{n}$ that fixes $u$ is the row-stabilizer $R=S_{\lambda_{1}} \times \ldots \times S_{\lambda_{m}}$ of $T$, so that $\Sigma_{w \in R} w(u)=r u$, where $r=|R|=\lambda_{1}!\ldots \lambda_{m}!$. Hence $\varphi\left(e_{r} u\right)$ is the function on $G$ whose value at $g \in G$ is

$$
r . \sum_{w \in C} \varepsilon(w)\left\langle e_{\tau}, g w e_{\tau}\right\rangle=r \Delta_{\lambda}(g)
$$

where $C$ is the column stabilizer of $T$. Hence $\Delta_{\lambda} \in \varphi\left(e_{T} T\right)$; since $\Delta_{\lambda} \neq 0$, it follows that $\varphi\left(e_{T} T\right)$ is irreducible and isomorphic to $F_{\lambda}(V)$.)
6. The Schur algebra of degree $n$ of $G$ (or $V$ ) is

$$
\mathbb{S}^{n}=\operatorname{End}_{k\left[S_{n}\right]} T^{n}(V) .
$$

For each $g \in G$ we have $\mathrm{T}^{n}(g) \in \mathbb{S}^{n}$, and $G$ acts on $\mathbb{S}^{n}$ by the rule $g \alpha=\mathrm{T}^{n}(g) \circ \alpha$ for $g \in G$ and $\alpha \in \mathbb{S}^{n}$.

If $\alpha \in \mathbb{S}^{n}$, let $p_{\alpha}$ be the function on $G$ defined by

$$
\begin{equation*}
p_{\alpha}(g)=\operatorname{trace}(g \alpha) \tag{1}
\end{equation*}
$$

(a) Show that $p_{\alpha} \in P^{n}$ and that $\alpha \mapsto p_{\alpha}: \mathbb{S}^{n} \rightarrow P^{n}$ is an isomorphism of $G$-modules. (Relative to the basis $\left(e_{\tau}\right)$ of $T^{n}(V)$ (Example 4), each $\alpha \in \mathbb{S}^{n}$ is represented by a matrix $\left(a_{\sigma \tau}\right)$ such that $a_{\sigma w, \tau w}=a_{\sigma \tau}$ for all $w \in S_{n}$. We have trace $(g \sigma)=$ $\sum_{\sigma, \tau} a_{\tau \sigma} g_{\sigma \tau}$ and hence

$$
p_{\alpha}=\sum_{\sigma, \tau} a_{\tau \sigma} x_{\sigma \tau}
$$

where $x_{\sigma \tau}=\prod_{i-1}^{n} x_{\sigma(i), \tau(i)}=x_{\sigma w, \tau w}$ for $w \in S_{n}$. It follows that $\alpha \mapsto p_{\alpha}$ is a linear isomorphism of $\mathbb{S}^{n}$ onto $P^{n}$, and it is clear from (1) that $h p_{\alpha}=p_{h \alpha}$ for $h \in G$.)
(b) The $T^{n}(g), g \in G$, span $\mathbb{S}^{n}$ as a $k$-vector space. (Suppose not, then there exists $\alpha \neq 0$ in $\mathcal{S}^{n}$ such that trace $\left(\top^{n}(g) \alpha\right)=0$ for all $g \in G$, since the bilinear form $(\alpha, \beta) \mapsto \operatorname{trace}(\alpha \beta)$ on $\mathbb{S}^{n}$ is nondegenerate. But then $p_{\alpha}(g)=0$ for all $g \in G$, so that $p_{\alpha}=0$ and therefore $\alpha=0$.)

Hence the $G$-submodules of $\mathbb{S}^{n}$ are precisely the left ideals.
(c) We have

$$
\mathbb{S}^{n} \cong \prod_{\lambda} \operatorname{End}_{k}\left(F_{\lambda}(V)\right)
$$

as $k$-algebras, where the product is taken over all partitions $\lambda$ of $n$ of length $\leqslant m$. (Use (5.6).)

## Notes and references

Practically everything in this Appendix is contained, explicitly or implicitly, in Schur's thesis [S4] and his subsequent 1927 paper [S6]. We have assumed throughout that the ground field $k$ has characteristic zero; for a study of the polynomial representations of $G L_{n}(k)$ when $k$ has positive characteristic, see [G14], and for polynomial functors over $k$ (or indeed over any commutative ring) see [A2].

## APPENDIX B: Characters of wreath products

## 1. Notation

If $G$ is any finite group, let $G_{*}$ denote the set of conjugacy classes in $G$, and let $G^{*}$ denote the set of irreducible complex characters of $G$. If $c \in G_{*}$ and $\gamma \in G^{*}$ we shall denote by $\gamma(c)$ the value of $\gamma$ at an element $x \in c$, and by $\zeta_{c}$ the order of the centralizer of $x$ in $G$, so that the number of elements in $c$ is $|c|=|G| / \zeta_{c}$.
Let $R(G)$ denote the complex vector space spanned by $G^{*}$, or equivalently the space of complex-valued class functions on $G$. We have $\operatorname{dim} R(G)=\left|G^{*}\right|=\left|G_{*}\right|$. On $R(G)$ we have a hermitian scalar product

$$
\begin{equation*}
\langle u, v\rangle_{G}=\frac{1}{|G|} \sum_{x \in G} u(x) \overline{v(x)} \tag{1.1}
\end{equation*}
$$

relative to which $G^{*}$ is an orthonormal basis of $R(G)$, i.e. $\langle\beta, \gamma\rangle_{G}=\delta_{\beta \gamma}$ for $\beta, \gamma \in G^{*}$.
Later we shall encounter families of partitions indexed by $G_{*}$ and by $G^{*}$. In general, if $X$ is a finite set and $\rho=(\rho(x))_{x \in X}$ a family of partitions indexed by $X$, or equivalently a mapping $\rho: X \rightarrow \mathscr{P}$ (where $\mathscr{P}$ is the set of all partitions), we denote by $\|\rho\|$ the sum

$$
\|\rho\|=\sum_{x \in X}|\rho(x)|
$$

and by $\mathscr{P}(X)$ (resp. $\mathscr{P}_{n}(X)$ ) the set of all $\rho: X \rightarrow \mathscr{P D}$ (resp. the set of all $\rho: X \rightarrow \mathscr{P}$ such that $\|\rho\|=n)$. Finally, if $\rho, \sigma \in \mathscr{P}(X)$, then $\rho \cup \sigma$ is the function $x \mapsto \rho(x) \cup \sigma(x)$ for $x \in X$.

## 2. The wreath product $G \sim S_{n}$

Let $G^{n}=G \times \ldots \times G$ be the direct product of $n$ copies of $G$. The symmetric group $S_{n}$ acts on $G^{n}$ by permuting the factors: $s\left(g_{1}, \ldots, g_{n}\right)=$ $\left(g_{s^{-1}(1)}, \ldots, g_{s^{-1}(n)}\right)$. The wreath product $G_{n}=G \sim S_{n}$ is the semidirect product of $G^{n}$ with $S_{n}$ defined by this action, that is to say it is the group whose underlying set is $G^{n} \times S_{n}$, with multiplication defined by $(g, s)(h, t)$ $=(g . s(h), s t)$, where $g, h \in G^{n}$ and $s, t \in S_{n}$. More concretely, the elements of $G_{n}$ may be thought of as permutation matrices with entries in $G$, the matrix corresponding to ( $g, s)$ having $(i, j)$ element $g_{i} \delta_{i, s(j)}$, where $g=\left(g_{1}, \ldots, g_{n}\right)$.

When $n=1, G_{1}$ is just $G$. When $n=0, G_{0}$ is the group of one element. The order of $G_{n}$ is $|G|^{n} . n!$ for all $n \geqslant 0$.

An embedding of $S_{m} \times S_{n}$ in $S_{m+n}$ gives rise to an embedding of $G_{m} \times G_{n}$ in $G_{m+n}$, and any two such embeddings are conjugate in $G_{m+n}$.

## 3. Conjugacy classes and types

Let $x=(g, s) \in G_{n}$, where $g=\left(g_{1}, \ldots, g_{n}\right) \in G^{n}$ and $s \in S_{n}$. The permutation $s$ can be written as a product of disjoint cycles: if $z=\left(i_{1} i_{2} \ldots i_{r}\right)$ is one of these cycles, the element $g_{i_{2}} g_{i_{r-1}} \ldots g_{i_{1}} \in G$ is determined up to conjugacy in $G$ by $g$ and $z$, and is called the cycle-product of $x$ corresponding to the cycle $z$. For each conjugacy class $c \in G_{*}$ and each integer $r \geqslant 1$, let $m_{r}(c)$ denote the number of $r$-cycles in $s$ whose cycle-product lies in $c$. In this way each element $x \in G_{n}$ determines an array $\left(m_{r}(c)\right)_{r>1, c \in G}$ of non-negative integers such that $\sum_{r, c} r m_{r}(c)=n$. Equivalently, if $\rho(c)$ denotes the partition having $m_{r}(c)$ parts equal to $r$, for each $r \geqslant 1$, then $\rho=(\rho(c))_{c \in G_{*}}$ is a partition-valued function on $G_{*}$ such that $\|\rho\|=n$, i.e. $\rho \in \mathscr{P}_{n}\left(G_{*}\right)$ in the notation introduced in $\S 1$. This function $\rho$ is called the type of $x=(g, s) \in G_{n}$. Note that the cycle-type of $s$ in $S_{n}$ is $\sigma=$ $\bigcup_{c \in G_{*}} \rho(c)$.

We shall show that two elements of $G_{n}$ are conjugate if and only if they have the same type.
(a) If $w \in S_{n}$, let $\bar{w}=(1, w) \in G_{n}$. If $x=(g, s) \in G_{n}$ we have $\bar{w} x \bar{w}^{-1}=$ ( $\left.w g, w s w^{-1}\right)$. If $z=\left(i_{1} \ldots i_{r}\right)$ is a cycle in $s$, as above, then $w z w^{-1}=$ $\left(w\left(i_{1}\right) \ldots w\left(i_{r}\right)\right)$ is a cycle of $w s w^{-1}$; moreover $(w g)_{w\left(i_{o}\right)}=g_{i_{o}}$, so that the cycle-product is unaltered, and therefore $x$ and $\bar{w} \bar{w}^{-1}$ have the same type.
(b) Let $h=\left(h_{1}, \ldots, h_{n}\right) \in G^{n}$. Then $h x h^{-1}=\left(h g s\left(h^{-1}\right), s\right)$, and $h g s\left(h^{-1}\right)$ has $i$ th component $h_{i} g_{i} h_{s^{-1}(i)}^{-1}$. Hence the cycle-product of $h x h^{-1}$ corresponding to the cycle $z$ in $s$ is

$$
\left(h_{i_{r}} g_{i_{r}} h_{i_{r-1}}^{-1}\right)\left(h_{i_{r-1}} g_{i_{r-1}} h_{i_{r-2}}^{-1}\right) \ldots\left(h_{i_{1}} g_{i_{1}} h_{i_{r}}^{-1}\right)=h_{i_{r}}\left(g_{i_{r}} \ldots g_{i_{1}}\right) h_{i_{r}}^{-1}
$$

which is conjugate in $G$ to $g_{i}, \ldots g_{i}$. It follows that $x$ and $h x h^{-1}$ have the same type.
(c) From (a) and (b) it follows that conjugate elements in $G_{n}$ have the same type. Conversely, suppose that $x=(g, s)$ and $y=(h, t)$ in $G_{n}$ have the same type. Then $s, t \in S_{n}$ have the same cycle-type $\sigma=\left(\sigma_{1}, \sigma_{2}, \ldots\right)$ and are therefore conjugate in $S_{n}$. Hence by conjugating $y$ by a suitable permutation $w \in S_{n}$ we may assume that $t=s$; then both $x$ and $y$ lie in the same subgroup $G_{\sigma}=G_{\sigma_{1}} \times G_{\sigma_{2}} \times \ldots$ of $G_{n}$, and it is enough to show that they are conjugate in $G_{\sigma}$. This effectively reduces the question to the
case where $s \in S_{n}$ is an $n$-cycle, say $s=(12 \ldots n)$, and the products $\bar{g}=$ ${ }_{3} g_{n-1} \ldots g_{1}, \bar{h}=h_{n} h_{n-1} \ldots h_{1}$ are conjugate in $G$. Now choose $u_{n} \in G$ ${ }_{j u c h}{ }^{3} \delta_{n-1}$ that $\bar{g}=u_{n} \bar{h} u_{n}^{-1}$, and define $u_{1}, \ldots, u_{n-1} \in G$ successively by the equations

$$
g_{1}=u_{1} h_{1} u_{n}^{-1}, g_{2}=u_{2} h_{2} u_{1}^{-1}, \ldots, g_{n-1}=u_{n-1} h_{n-1} u_{n-2}^{-1} .
$$

A simple calculation now shows that $u y u^{-1}=x$, where $u=\left(u_{1}, \ldots, u_{n}\right)$; bence $x$ and $y$ are conjugate in $G_{n}$, and the proof is complete.
(d) We shall now compute the order of the centralizer in $G_{n}$ of an element $x=(g, s)$ of type $\rho \in \mathscr{P}_{n}\left(G_{*}\right)$. First, the number of possibilities for $s \in S_{n}$ is

$$
\begin{equation*}
n!/ \prod_{r \geqslant 1} r^{m_{r}} \cdot m_{r}! \tag{1}
\end{equation*}
$$

where $m_{r}=\Sigma_{c} m_{r}(c)$. Next, for each such $s$ and each $r \geqslant 1$ there are

$$
\begin{equation*}
m_{r}!/ \prod_{c} m_{r}(c)! \tag{2}
\end{equation*}
$$

ways of distributing the $m_{r} r$-cycles among the conjugacy classes of $G$. Finally, for each cycle $z=\left(i_{1} \ldots i_{r}\right)$ in $s$ such that $g_{i}, \ldots g_{i_{1}} \in c$, there are

$$
\begin{equation*}
|G|^{r-1} \cdot|c|=|G|^{r} / \zeta_{c} \tag{3}
\end{equation*}
$$

choices for $\left(g_{i_{i}}, \ldots, g_{i}\right.$ ). From (1), (2), and (3) it follows that the number of elements in $G_{n}$ of type $\rho$ is

$$
\frac{n!}{\prod_{c} z_{\rho(c)}} \cdot \frac{|G|^{n}}{\prod_{c} \zeta_{c}^{l(p(c))}}
$$

and hence that the order of the centralizer in $G_{n}$ of an element of type $\rho$ is

$$
\begin{equation*}
Z_{\rho}=\prod_{c \in G_{*}} z_{\rho(c)} \zeta_{c}^{l(\rho(c))} \tag{3.1}
\end{equation*}
$$

## 4. The algebra $R(G)$

Let

$$
R(G)=\underset{n>0}{\oplus} R\left(G_{n}\right)
$$

We define a multiplication on $R(G)$ as follows. Let $u \in R\left(G_{m}\right), v \in R\left(G_{n}\right)$, and embed $G_{m} \times G_{n}$ in $G_{m+n}$. Then $u \times v$ is an element of $R\left(G_{m} \times G_{n}\right)$, and we define

$$
\begin{equation*}
u v=\operatorname{ind}_{G_{m}^{m} \times G_{n}}^{G_{m}}(u \times v) \tag{4.1}
\end{equation*}
$$

which is an element of $R\left(G_{m+n}\right)$. Thus we have defined a bilinear multipli. cation $R\left(G_{m}\right) \times R\left(G_{n}\right) \rightarrow R\left(G_{m+n}\right)$, and just as in Chapter I, 87 (which deals with the case $G=\{1\}$ ) it is not difficult to verify that with this multiplication $R(G)$ is a commutative, associative, graded $\mathbf{C}$-algebra with identity element.

In addition, $R(G)$ carries a hermitian scalar product; if $u, v \in R(G)$, say $u=\Sigma u_{n}$ and $v=\Sigma v_{n}$ with $u_{n}, v_{n} \in R\left(G_{n}\right)$, we define

$$
\begin{equation*}
\langle u, v\rangle=\sum_{n>0}\left\langle u_{n}, v_{n}\right\rangle_{G_{n}} \tag{4.2}
\end{equation*}
$$

where the scalar product on the right is that defined by (1.1), with $G_{n}$ replacing $G$.

## 5. The algebra $\Lambda(G)$

Let $p_{r}(c)\left(r \geqslant 1, c \in G_{*}\right)$ be independent indeterminates over $\mathbf{C}$, and let

$$
\Lambda(G)=\mathbf{C}\left[p_{r}(c): r \geqslant 1, c \in G_{*}\right] .
$$

For each $c \in G_{*}$ we may think of $p_{r}(c)$ as the $r$ th power sum in a sequence of variables $x_{c}=\left(x_{i c}\right)_{i>1}$. We assign degree $r$ to $p_{r}(c)$, and then $\Lambda(G)$ is a graded $\mathbf{C}$-algebra.

If $\sigma=\left(\sigma_{1}, \sigma_{2}, \ldots\right)$ is any partition, let $p_{\sigma}(c)=p_{\sigma_{1}}(c) p_{\sigma_{2}}(c) \ldots$. If now $\rho$ is any partition-valued function on $G_{*}$, we define

$$
\begin{equation*}
P_{\rho}=\prod_{c \in G_{*}} p_{\rho(c)}(c) . \tag{5.1}
\end{equation*}
$$

Clearly the $P_{\rho}$ form a $\mathbf{C}$-basis of $\Lambda(G)$. If $f \in \Lambda(G)$, say $f=\Sigma_{\rho} f_{\rho} P_{\rho}$ (where all but a finite number of the coefficients $f_{\rho} \in \mathbf{C}$ are zero), let

$$
\begin{equation*}
\bar{f}=\sum_{\boldsymbol{\rho}} \bar{f}_{\rho} P_{\rho} \tag{5.2}
\end{equation*}
$$

so that in particular $\bar{P}_{\rho}=P_{\rho}$.
Next, we define a hermitian scalar product on $\Lambda(G)$ as follows: if $f=\Sigma_{\rho} f_{\rho} P_{\rho}, g=\Sigma_{\rho} g_{\rho} P_{\rho}$ then

$$
\begin{equation*}
\langle f, g\rangle=\sum_{\rho} f_{\rho} \bar{g}_{\rho} Z_{\rho} \tag{5.3}
\end{equation*}
$$

with $Z_{\rho}$ given by (3.1). Equivalently,

$$
\left\langle P_{\rho}, P_{\sigma}\right\rangle=\delta_{\rho \sigma} Z_{\rho}
$$

Finally, let $\Psi: G_{m} \rightarrow \Lambda(G)$ be the mapping defined by $\Psi(x)=P_{\rho}$ if
$x \in G_{m}$ has type $\rho$. If also $y \in G_{n}$ has type $\sigma$, then $x \times y \in G_{m} \times G_{n}$ is well-defined up to conjugacy in $G_{m+n}$, and has type $\rho \cup \sigma$, so that

$$
\begin{equation*}
\Psi(x \times y)=\Psi(x) \Psi(y) \tag{5.4}
\end{equation*}
$$

## 6. The characteristic map

This is a C-linear mapping

$$
\text { ch: } R(G) \rightarrow \Lambda(G)
$$

defined as follows: if $f \in R\left(G_{n}\right)$ then

$$
\begin{align*}
\operatorname{ch}(f) & =\langle f, \Psi\rangle_{G_{n}} \\
& =\frac{1}{\left|G_{n}\right|} \sum_{x \in G_{n}} f(x) \Psi(x) \tag{6.1}
\end{align*}
$$

If $f_{\rho}$ is the value of $f$ at elements of type $\rho$, then

$$
\begin{equation*}
\operatorname{ch}(f)=\sum_{\rho} Z_{\rho}^{-1} f_{\rho} P_{\rho} \tag{6.2}
\end{equation*}
$$

In particular, if $\varphi_{\rho}$ is the characteristic function of the set of elements $x \in G_{n}$ of type $\rho$, we have $\operatorname{ch}\left(\varphi_{\rho}\right)=Z_{\rho}^{-1} P_{\rho}$, from which it follows that ch is a linear isomorphism.

Let $f, g \in G_{n}$. Then from (5.3) and (6.2)

$$
\begin{aligned}
\langle\operatorname{ch}(f), \operatorname{ch}(g)\rangle & =\sum_{\rho} Z_{\rho}^{-1} f_{\rho} \bar{g}_{\rho} \\
& =\langle f, g\rangle_{G_{n}}
\end{aligned}
$$

from which it follows that ch is an isometry for the scalar products on $R(G)$ and $\Lambda(G)$ defined by (4.2) and (5.3).

If $u \in R\left(G_{m}\right), v \in R\left(G_{n}\right)$, then by (4.2) and (6.1)

$$
\begin{aligned}
\operatorname{ch}(u v) & =\left\langle\operatorname{ind}_{G_{m}^{m+n} \times G_{n}}^{G_{m}}(u \times v), \Psi\right\rangle_{G_{m+n}} \\
& =\left\langle u \times v,\left.\Psi\right|_{G_{m} \times G_{n}}\right\rangle_{G_{m} \times G_{n}}
\end{aligned}
$$

by Frobenius reciprocity,

$$
\begin{aligned}
& =\langle u, \Psi\rangle_{G_{m}}\langle v, \Psi\rangle_{G_{n}} \quad \text { by (5.4) } \\
& =\operatorname{ch}(u) \operatorname{ch}(v)
\end{aligned}
$$

Hence we have proved that
(6.3) ch: $R(G) \rightarrow \Lambda(G)$ is an isometric isomorphism of graded C-algebras.

## 7. Change of variables

For each irreducible character $\gamma \in G^{*}$ and each $r \geqslant 1$ let

$$
\begin{equation*}
p_{r}(\gamma)=\sum_{c \in G_{*}} \zeta_{c}^{-1} \gamma(c) p_{r}(c) \tag{7.1}
\end{equation*}
$$

so that (by the orthogonality of the characters of $G$ ) we have

$$
p_{r}(c)=\sum_{\gamma \in G^{*}} \overline{\gamma(c)} p_{r}(\gamma)=\sum_{\gamma \in G^{*}} \gamma(c) \overline{p_{r}(\gamma)} .
$$

The $p_{r}(\gamma)$ are algebraically independent and generate $\Lambda(G)$ as C-algebra. From (7.1') we have

$$
\begin{align*}
\sum_{c} \zeta_{c}^{-1} p_{r}(c) \otimes p_{r}(c) & =\sum_{c} \sum_{\beta, \gamma} \zeta_{c}^{-1} \bar{\gamma}(c) \beta(c) p_{r}(\gamma) \otimes \overline{p_{r}(\beta)} \\
& =\sum_{\beta, \gamma}\langle\beta, \gamma\rangle_{G} p_{r}(\gamma) \otimes \overline{p_{r}(\beta)} \\
& =\sum_{\gamma} p_{r}(\gamma) \otimes \overline{p_{r}(\gamma)} \tag{7.2}
\end{align*}
$$

in $\Lambda(G) \otimes \Lambda(G)$.
We may regard $p_{r}(\gamma)$ as the $r$ th power sum of a new sequence of variables $y_{\gamma}=\left(y_{i \gamma}\right)_{i>1}$, and we may then define, for example, Schur functions $s_{\mu}(\gamma)=s_{\mu}\left(y_{\gamma}\right)$ for any partition $\mu$, and more generally

$$
\begin{equation*}
S_{\lambda}=\prod_{\gamma \in G^{*}} s_{\lambda(\gamma)}(\gamma) \tag{7.3}
\end{equation*}
$$

for any $\lambda \in \mathscr{P}\left(G^{*}\right)$.
(7.4) $\left(S_{\lambda}\right)_{\lambda \in \mathscr{F}\left(G^{*}\right)}$ is an orthonormal basis of $\Lambda(G)$.

Proof. In view of the definition (5.3') of the scalar product on $\Lambda(G)$, it is enough to show that

$$
\begin{equation*}
\sum_{\lambda} S_{\lambda} \otimes \bar{S}_{\lambda}=\sum_{\rho} Z_{\rho}^{-1} P_{\rho} \otimes P_{\rho} \tag{1}
\end{equation*}
$$

where the sum on the left is over all $\lambda \in \mathscr{P}\left(G^{*}\right)$, and that on the right is over all $\rho \in \mathscr{P}\left(G_{*}\right)$. Now the left-hand side of (1) is equal to

$$
\begin{align*}
\prod_{\gamma \in G^{*}}\left(\sum_{\mu} s_{\mu}(\gamma) \otimes \overline{s_{\mu}(\gamma)}\right) & =\prod_{\gamma \in G^{*}}\left(\exp \sum_{r>1} \frac{1}{r} p_{r}(\gamma) \otimes \overline{p_{r}(\gamma)}\right) \\
& =\exp \left(\sum_{r>1} \frac{1}{r} \sum_{\gamma \in G^{*}} p_{r}(\gamma) \otimes \overline{p_{r}(\gamma)}\right) . \tag{2}
\end{align*}
$$

On the other hand, the right-hand side of (1) is by virtue of (3.1) equal to

$$
\begin{align*}
\prod_{c \in G_{*}}\left(\sum_{\sigma} \zeta_{c}^{-l(\sigma)} z_{\sigma}^{-1} p_{\sigma}(c) \otimes p_{\sigma}(c)\right) & =\prod_{c \in G_{*}}\left(\exp \sum_{r>1} \frac{1}{r} \zeta_{c}^{-1} p_{r}(c) \otimes p_{r}(c)\right) \\
& =\exp \left(\sum_{r>1} \frac{1}{r} \sum_{c \in G_{*}} \zeta_{c}^{-1} p_{r}(c) \otimes p_{r}(c)\right) \tag{3}
\end{align*}
$$

Now (7.2) shows that (2) and (3) are equal.

## 8. The characters $\eta_{n, \gamma}$

Let $E_{\gamma}$ be a $G$-module with character $\gamma \in G^{*}$. The group $G_{n}$ acts on the $n$th tensor power $\mathrm{T}^{n}\left(E_{\gamma}\right)=E_{\gamma} \otimes \ldots \otimes E_{\gamma}$ as follows: if $u_{1}, \ldots, u_{n} \in E_{\gamma}$ and $(g, s) \in G_{n}$, where $g=\left(g_{1}, \ldots, g_{n}\right) \in G^{n}$ and $s \in S_{n}$, then

$$
(g, s)\left(u_{1} \otimes \ldots \otimes u_{n}\right)=g_{1} u_{s^{-1}(1)} \otimes \ldots \otimes g_{n} u_{s^{-1}(n)}
$$

We wish to compute the character $\eta_{n}=\eta_{n}(\gamma)$ of this representation of $G_{n}$. First, if $x \in G_{r}$ and $y \in G_{n-r}$, so that $x$ acts on the first $r$ factors of $T^{n}\left(E_{\gamma}\right)$ and $y$ on the last $n-r$ factors, it is clear that

$$
\begin{equation*}
\eta_{n}(x \times y)=\eta_{r}(x) \eta_{n-r}(y) . \tag{8.1}
\end{equation*}
$$

Hence it is enough to compute $\eta_{n}(g, s)$ when $g \in G^{n}$ and $s$ is an $n$-cycle, say $s=(12 \ldots n)$. For this purpose let $e_{1}, \ldots, e_{d}$ be a basis of $E_{\gamma}$ and let

$$
g e_{j}=\sum_{i} a_{i j}(g) e_{i}
$$

so that $g \mapsto a(g)=\left(a_{i j}(g)\right)$ is the matrix representation of $G$ defined by this basis. Then we have

$$
(g, s)\left(e_{j_{1}} \otimes \ldots \otimes e_{j_{n}}\right)=g_{1} e_{j_{n}} \otimes g_{2} e_{j_{1}} \otimes \ldots \otimes g_{n} e_{j_{n-1}}
$$

in which the coefficient of $e_{j_{1}} \otimes \ldots \otimes e_{j_{n}}$ is

$$
\begin{equation*}
a_{j_{1}, j_{n}}\left(g_{1}\right) a_{j_{2} j}\left(g_{2}\right) \ldots a_{j_{n} j_{n-1}}\left(g_{n}\right) \tag{1}
\end{equation*}
$$

To obtain the trace we must sum (1) over all $j_{1}, \ldots, j_{n}$, which gives

$$
\begin{aligned}
\eta_{n}(g, s) & =\operatorname{trace} a\left(g_{n}\right) a\left(g_{n-1}\right) \ldots a\left(g_{1}\right) \\
& =\operatorname{trace} a\left(g_{n} g_{n-1} \ldots g_{1}\right)=\gamma(c)
\end{aligned}
$$

if the cycle-product $g_{n} g_{n-1} \ldots g_{1}$ lies in the conjugacy class $c$. From (8.1) it now follows that if $x \in G_{n}$ has type $\rho$, then

$$
\begin{equation*}
\eta_{n}(\gamma)(x)=\prod_{c} \gamma(c)^{/(\rho(c))} \tag{8.2}
\end{equation*}
$$

We now calculate:

$$
\begin{aligned}
\sum_{n \geqslant 0} \operatorname{ch}\left(\eta_{n}(\gamma)\right) & =\sum_{\rho} Z_{\rho}^{-1} \prod_{c \in G_{*}} \gamma(c)^{/(\rho(c))} p_{\rho(c)}(c) \\
& =\prod_{c \in G_{*}}\left(\sum_{\sigma}\left(\zeta_{c}^{-1} \gamma(c)\right)^{l(\sigma)} z_{\sigma}^{-1} p_{\sigma}(c)\right) \\
& =\prod_{c \in G_{*}} \exp \left(\sum_{r \geqslant 1} \frac{1}{r} \zeta_{c}^{-1} \gamma(c) p_{r}(c)\right) \\
& =\exp \left(\sum_{r \geqslant 1} \frac{1}{r} \sum_{c \in G_{*}} \zeta_{c}^{-1} \gamma(c) p_{r}(c)\right) \\
& =\exp \left(\sum_{r>1} \frac{1}{r} p_{r}(\gamma)\right) \quad \text { by }(7.1) \\
& =\sum_{n \geqslant 0} h_{n}(\gamma) .
\end{aligned}
$$

Hence

$$
\begin{equation*}
\operatorname{ch}\left(\eta_{n}(\gamma)\right)=h_{n}(\gamma) \tag{8.3}
\end{equation*}
$$

for all $\gamma \in G^{*}$ and $n \geqslant 0$.
9. The irreducible characters of $G_{n}$

For each partition $\mu$ of $m$ and each $\gamma \in G^{*}$, let

$$
\begin{equation*}
\chi^{\mu}(\gamma)=\operatorname{det}\left(\eta_{\mu_{i}-i+j}(\gamma)\right) \tag{9.1}
\end{equation*}
$$

This is an alternating sum of induction products of characters, hence is a (perhaps virtual) character of $G_{m}$. From (8.3) and (6.3) we have

$$
\begin{equation*}
\operatorname{ch}\left(\chi^{\mu}(\gamma)\right)=\operatorname{det}\left(h_{\mu_{i}-i+j}(\gamma)\right)=s_{\mu}(\gamma) \tag{9.2}
\end{equation*}
$$

Next, for each $\lambda \in \mathscr{P}_{n}\left(G^{*}\right)$, define

$$
\begin{equation*}
X^{\lambda}=\prod_{\gamma \in G^{*}} \chi^{\lambda(\gamma)}(\gamma) \tag{9.3}
\end{equation*}
$$

which for the same reason is a character of $G_{n}$. From (9.2) it follows that

$$
\begin{equation*}
\operatorname{ch}\left(X^{\lambda}\right)=\prod_{\gamma \in G^{*}} s_{\lambda(\gamma)}(\gamma)=S_{\lambda} \tag{9.4}
\end{equation*}
$$

and since ch is an isometry (6.3) it follows from (7.4) that

$$
\left\langle X^{\lambda}, X^{\mu}\right\rangle_{G_{n}}=\left\langle S_{\lambda}, S_{\mu}\right\rangle=\delta_{\lambda \mu}
$$

for all $\lambda, \mu \in \mathscr{P}_{n}\left(G^{*}\right)$. Hence the $X^{\lambda}$ are, up to sign, distinct irreducible characters of $G_{n}$; and since $\left|\mathscr{P}_{n}\left(G^{*}\right)\right|=\left|\mathscr{P}_{n}\left(G_{*}\right)\right|=\left|\left(G_{n}\right)_{*}\right|$, there are as many of them as there are conjugacy classes in $G_{n}$, so that they are all the irreducible characters of $G_{n}$. It remains to settle the question of sign, which we shall do by computing the degree of each character $X^{\lambda}$.

Let $X_{\rho}^{\lambda}$ denote the value of $X^{\lambda}$ at elements of $G_{n}$ of type $\rho \in \mathscr{P}_{n}\left(G_{*}\right)$. From (9.4) and (6.2) we have

$$
\begin{equation*}
S_{\lambda}=\sum_{\rho} Z_{\rho}^{-1} X_{\rho}^{\lambda} P_{\rho} \tag{9.5}
\end{equation*}
$$

or equivalently

$$
\begin{align*}
X_{\rho}^{\lambda} & =\left\langle S_{\lambda}, P_{\rho}\right\rangle,  \tag{9.5'}\\
P_{\rho} & =\sum_{\lambda} X_{\rho}^{\lambda} \bar{S}_{\lambda}=\sum_{\lambda} \bar{X}_{\rho}^{\lambda} S_{\lambda} . \tag{9.5"}
\end{align*}
$$

Let $c_{0} \in G_{*}$ be the class consisting of the identity element. The type of the identity element of $G_{n}$ is $\rho$ where $\rho\left(c_{0}\right)=\left(1^{n}\right), \rho(c)=0$ if $c \neq c_{0}$. Hence $P_{\rho}=p_{1}\left(c_{0}\right)^{n}$, and since $p_{1}\left(c_{0}\right)=\Sigma_{\gamma} d_{\gamma} p_{1}(\gamma)$, where $d_{\gamma}=\gamma\left(c_{0}\right)$ is the degree of $\gamma$, it follows from ( $9.5^{\prime}$ ) that the degree of $X^{\lambda}$ is equal to the coefficient of $S_{\lambda}$ in $\left(\Sigma_{\gamma} d_{\gamma} p_{1}(\gamma)\right)^{n}$, i.e. to the coefficient of $\Pi_{\gamma} S_{\lambda(\gamma)}(\gamma)$ in

$$
\frac{n!}{\prod_{\gamma}|\lambda(\gamma)|!} \prod_{\gamma}\left(d_{\gamma} p_{1}(\gamma)\right)^{|\lambda(\gamma)|}
$$

which by Chapter I, (7.6) is equal to

$$
\begin{equation*}
n!\prod_{\gamma}\left(d_{\gamma}^{|\lambda(\gamma)|} / h(\lambda(\gamma))\right) \tag{9.6}
\end{equation*}
$$

where $h(\lambda(\gamma))$ is the product of the hook-lengths of the partition $\lambda(\gamma)$. Since this number is positive, it follows that $X^{\lambda}$ (and not $-X^{\lambda}$ ) is an irreducible character. So, finally,
(9.7) The irreducible complex characters of $G_{n}=G \sim S_{n}$ are the $X^{\lambda}$ （ $\lambda \in$ $\left.\mathscr{P}_{n}\left(G^{*}\right)\right)$ defined by (9.3), and the value of $X^{\lambda}$ at elements of type $\rho \in \mathscr{T}_{n}\left(G_{*}\right)$ is

$$
X_{\rho}^{\lambda}=\left\langle S_{\lambda}, P_{\rho}\right\rangle .
$$

Moreover the degree of $X^{\lambda}$ is given by (9.6).

## Example

The simplest nontrivial case of this theory is that in which the group $G$ has two elements $\pm 1$. Then $G_{n}$ is the group of signed permutation matrices, of order $2^{n} n!$, or equivalently the hyperoctahedral group of rank $n$. The conjugacy classes and the irreducible characters of $G_{n}$ are each indexed by pairs of partitions $(\lambda, \mu)$ such that $|\lambda|+|\mu|=n$.
If the power sums corresponding to the identity (resp. non-identity) conjugacy class are denoted by $p_{r}(a)$ (resp. $p_{r}(b)$ ), and those corresponding to the trivial (resp. nontrivial) character by $p_{r}(x)\left(\right.$ resp. $p_{r}(y)$ ), the change of variables formula (7.1') reads

$$
p_{r}(a)=p_{r}(x)+p_{r}(y), \quad p_{r}(b)=p_{r}(x)-p_{r}(y)
$$

and the formula ( $9.5^{\prime \prime}$ ) reads

$$
p_{\rho}(a) p_{\sigma}(b)=\sum_{\lambda, \mu} X_{\rho, \sigma}^{\lambda, \mu} s_{\lambda}(x) s_{\mu}(y)
$$

where $X_{\rho, \sigma}^{\lambda, \mu}$ is the value of the character indexed by $(\lambda, \mu)$ at the class indexed by $(\rho, \sigma)$ (where $|\lambda|+|\mu|=|\rho|+|\sigma|=n)$.

## Notes and references

The characters of the wreath products $G \sim S_{n}$, where $G$ is any finite group, were first worked out by W. Specht in his dissertation [S17], and our account does not differ materially from his. See also [M3].

