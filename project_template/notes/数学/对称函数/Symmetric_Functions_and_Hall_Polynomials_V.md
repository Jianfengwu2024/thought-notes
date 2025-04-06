# Symmetric Functions and Hall Polynomials V
## VII

## ZONAL POLYNOMIALS

## 1. Gelfand pairs and zonal spherical functions

Let $G$ be a finite group and let $A=\mathbf{C}[G]$ be the complex group algebra of $G$. If $f \in A$, say $f=\sum_{x \in G} f(x) x$, we may identify $f$ with the function $x \mapsto f(x)$ on $G$, and hence $A$ with the space of all complex-valued functions on $G$. From this point of view, the multiplication in $A$ is convolution:

$$
(f g)(x)=\sum_{y z=x} f(y) g(z)
$$

and $G$ acts on $A$ by the rule $(x f)(y)=f\left(x^{-1} y\right)$. The centre of $A$ consists of the functions $f$ on $G$ such that $f(x y)=f(y x)$ for all $x, y \in G$, and has the irreducible characters of $G$ as a basis. The scalar product on $A$ is

$$
\langle f, g\rangle_{G}=\frac{1}{|G|} \sum_{x \in G} f(x) \overline{g(x)}
$$

Let $K$ be a subgroup of $G$ and let

$$
e=e_{K}=\frac{1}{|K|} \sum_{k \in K} k
$$

so that $e^{2}=e$. As a function on $G$, we have $e(x)=|K|^{-1}$ if $x \in K$, and $e(x)=0$ otherwise. If $x_{1}, \ldots, x_{r}$ are representatives of the left cosets $x K$ of $K$ in $G$, the elements $x_{i} e$ are a basis of the left $A$-module $A e$, and the corresponding representation $1_{K}^{G}$ of $G$ is that obtained by inducing the trivial one-dimensional representation of $K$, or equivalently: it is the permutation representation of $G$ on $G / K=\left\{x_{i} K: 1 \leqslant i \leqslant r\right\}$. Since $e$ is idempotent, the endomorphism ring $\operatorname{End}_{A}(A e)$ is anti-isomorphic to $e A e$, the anti-isomorphism being $\varphi \mapsto \varphi(e)$. Now $e A e$ as a subalgebra of $A$ consists of the functions $f$ on $G$ such that $f\left(k x k^{\prime}\right)=f(x)$ for all $x \in G$ and $k, k^{\prime} \in K$, that is to say the functions constant on each double coset $K x K$ in $G$. We shall denote this algebra by $C(G, K)$.

An $A$-module $V$ (or equivalently a representation of $G$ ) is multiplicity-free if it is a direct sum of inequivalent irreducible $A$-modules, that is to say if the intertwining number $\langle V, U\rangle=\operatorname{dim}_{A-m}^{A}(V, U)$ is 0 or 1 for each irreducible $A$-module $U$. By Schur's lemma, $V$ is multiplicity-free if and only if the algebra $\operatorname{End}_{A}(V)$ is commutative. Hence
(1.1) For a subgroup $K$ of $G$, the following conditions are equivalent:
(a) the induced representation $1_{K}^{G}$ is multiplicity-free;
(b) the algebra $C(G, K)$ is commutative.

If these equivalent conditions are satisfied, the pair $(G, K)$ is called a Gelfand pair.
(1.2) Suppose that $K x K=K x^{-1} K$ for all $x \in G$. Then $(G, K)$ is a Gelfand pair.

Proof. We have $f(x)=f\left(x^{-1}\right)$ for all $f \in C(G, K)$ and $x \in G$. Hence if $f$, $g \in C(G, K)$,

$$
\begin{aligned}
(f g)(x) & =\sum_{y \in G} f(y) g\left(y^{-1} x\right)=\sum_{y \in G} g\left(x^{-1} y\right) f\left(y^{-1}\right) \\
& =(g f)\left(x^{-1}\right)=(g f)(x)
\end{aligned}
$$

which shows that $C(G, K)$ is commutative.
Assume from now on that $(G, K)$ is a Gelfand pair. Then with the notation used above, $A e$ is a direct sum of non-isomorphic irreducible $A$-modules, say

$$
A e=\bigoplus_{i=1}^{s} V_{i}
$$

Let $X_{i}$ be the character of $V_{i}$ and let

$$
\omega_{i}=\bar{\chi}_{i} e=e \bar{\chi}_{i}
$$

where $\bar{\chi}_{i}$ is the complex conjugate of $\chi_{i}$. Thus

$$
\begin{equation*}
\omega_{i}(x)=\frac{1}{|K|} \sum_{k \in K} \bar{\chi}_{i}(x k)=\frac{1}{|K|} \sum_{k \in K} \chi_{i}\left(x^{-1} k\right) . \tag{1.3}
\end{equation*}
$$

The functions $\omega_{i}$ are the zonal spherical functions of the Gelfand pair ( $G, K$ ).

Let $d_{i}=\operatorname{dim} V_{i}=\chi_{i}(1)$.
(1.4) (i) $\omega_{i}(1)=1$ and $\omega_{i}\left(x^{-1}\right)=\overline{\omega_{i}(x)}$ for all $x \in G$.
(ii) $\omega_{i} \in C(G, K) \cap V_{i}$.
(iii) $\omega_{i} \omega_{j}=\delta_{i j} c_{i} \omega_{i}$, where $c_{i}=|G| / d_{i}$.
(iv) $\left\langle\omega_{i}, \omega_{j}\right\rangle_{G}=\delta_{i j} d_{i}^{-1}$.
(v) $\left(\omega_{1}, \ldots, \omega_{s}\right)$ is an orthogonal basis of $C(G, K)$.
(vi) The characters of the algebra $C(G, K)$ are $f \mapsto\left(\omega_{i} f\right)(1)$, for $1 \leqslant i \leqslant s$.

Proof. (i) From the definition (1.3) we have

$$
\omega_{i}(1)=\left\langle\chi_{i} \mid K, 1_{K}\right\rangle_{K}=\left\langle\chi_{i}, 1_{K}^{G}\right\rangle_{G}
$$

by Frobenius reciprocity. Hence $\omega_{i}(1)$ is the multiplicity of $V_{i}$ in the $A$-module $A e$, hence is equal to 1 . The relation $\omega_{i}\left(x^{-1}\right)=\overline{\omega_{i}(x)}$ follows from (1.3).
(ii) It is clear from (1.3) that $\omega_{i}(k x)=\omega_{i}(x k)=\omega_{i}(x)$ for $x \in G$ and $k \in K$, so that $\omega_{i} \in C(G, K)$. On the other hand, the $V_{i}$-isotypic component of $A$ is $A \bar{\chi}_{i}$, hence the $V_{i}$-isotypic component of $A e$ is $A e \bar{\chi}_{i}=A \omega_{i}$. Thus $A \omega_{i}=V_{i}$ and consequently $\omega_{i} \in V_{i}$.
(iii) Since $\chi_{i} \chi_{j}=\delta_{i j} c_{i} \chi_{i}$ it follows that

$$
\omega_{i} \omega_{j}=\bar{\chi}_{i} e \bar{\chi}_{j} e=\bar{\chi}_{i} \bar{\chi}_{j} e^{2}=\bar{\chi}_{i} \bar{\chi}_{j} e=\delta_{i j} c_{i} \bar{\chi}_{i} e=\delta_{i j} c_{i} \omega_{i}
$$

(iv) Since $\overline{\omega_{j}(x)}=\omega_{j}\left(x^{-1}\right)$ we have

$$
\left\langle\omega_{i}, \omega_{j}\right\rangle_{G}=\frac{1}{|G|} \omega_{i} \omega_{j}(1)=\frac{1}{|G|} \delta_{i j} c_{i} \omega_{i}(1)=\delta_{i j} d_{i}^{-1}
$$

by (iii) and (i).
(v) It follows from (ii) that the $\omega_{i}$ are linearly independent elements of $C(G, K)$. On the other hand, Schur's lemma shows that the dimension of $C(G, K) \cong \operatorname{End}_{A}(A e)$ is equal to $s$. Hence the $\omega_{i}$ form a basis of $C(G, K)$, and they are pairwise orthogonal by (iv).
(vi) Let $\theta$ be a character of $C(G, K)$. From (iii) we have $\theta\left(\omega_{i}\right) \theta\left(\omega_{j}\right)=0$ if $i \neq j$, and $\theta\left(\omega_{i}\right)^{2}=c_{i} \theta\left(\omega_{i}\right)$. Hence for some $i$ we have $\theta\left(\omega_{j}\right)=\delta_{i j} c_{i}=$ $\left(\omega_{i} \omega_{j}\right)(1)$, and hence by linearity $\theta(f)=\left(\omega_{i} f\right)(1)$ for all $f \in C(G, K)$.

Let $V$ be an irreducible $G$-module (i.e. $A$-module) with character $\chi$, and let $V^{K}$ be the subspace of vectors in $V$ fixed by $K$. The dimension of $V^{K}$ is the multiplicity of the trivial one-dimensional $K$-module in $V$ regarded as a $K$-module, so that

$$
\operatorname{dim} V^{K}=\left\langle\chi \mid K, 1_{K}\right\rangle_{K}=\left\langle\chi, 1_{K}^{G}\right\rangle_{G}
$$

by Frobenius reciprocity. Since $1_{K}^{G}$ is multiplicity-free it follows that, with the previous notation,

$$
\operatorname{dim} V^{K}= \begin{cases}1 & \text { if } V \cong V_{i} \text { for some } i,  \tag{1.5}\\ 0 & \text { otherwise }\end{cases}
$$

Moreover, if $V=V_{i}$, then $\omega_{i}$ is the unique element of the one-dimensional space $V_{i}^{K}$ such that $\omega_{i}(1)=1$, by (1.4)(i) and (ii). The zonal spherical functions $\omega_{i}$ are therefore distinguished generators of the irreducible components $V_{i}$ of the induced representation $A e=1{ }_{K}^{G}$.

Now let $V$ be an irreducible $G$-module such that $V^{K} \neq 0$. Then the zonal spherical function $\omega$ corresponding to $V$ may be constructed as follows:
(1.6) Let $\langle u, v\rangle$ be a positive-definite G-invariant Hermitian scalar product on $V$, and let $v \in V^{K}$ be a unit vector (i.e. $\langle v, v\rangle=1$ ). Then

$$
\omega(x)=\langle v, x v\rangle
$$

for all $x \in G$.
Proof. Choose an orthonormal basis $v_{1}, \ldots, v_{n}$ of $V$ such that $v_{1}=v$. For each $x \in G, x v_{j}$ is a linear combination of the $v_{i}$, say

$$
x v_{j}=\sum_{i=1}^{n} R_{i j}(x) v_{i}
$$

and $x \mapsto\left(R_{i j}(x)\right)$ is an irreducible matrix representation of $G$ afforded by $V$. Moreover $\left\langle v_{i}, x v_{j}\right\rangle=\overline{R_{i j}(x)}$, so that in particular $\langle v, x v\rangle=\overline{R_{11}(x)}$.
Now the space $U$ spanned by the $\bar{R}_{i j}$ is the $V$-isotypic component of the $G$-module $A$, and $e U e$ is one-dimensional, generated by $\omega$. Since $v$ is fixed by $K$ it follows that $\overline{R_{11}(x k)}=\overline{R_{11}(x)}$ and that

$$
\overline{R_{11}(k x)}=\langle v, k x v\rangle=\left\langle k^{-1} v, x v\right\rangle=\overline{R_{11}(x)}
$$

for all $k \in K$ and $x \in G$. Hence $\bar{R}_{11} \in e U e$ and is therefore a scalar multiple of $\omega$. But $\overline{R_{11}(1)}=\langle v, v\rangle=1=\omega(1)$, hence $\bar{R}_{11}=\omega$. $\quad \mid$

A function $f \in A$ is said to be of positive type if

$$
\sum_{x, y \in G} f\left(x^{-1} y\right) g(x) \overline{g(y)}
$$

is real and $\geqslant 0$ for all functions $g \in A$.
(1.7) Let $f \in C(G, K)$. Then $f$ is of positive type if and only if

$$
f=\sum_{i=1}^{s} a_{i} \omega_{i}
$$

with real coefficients $a_{i} \geqslant 0$.
Proof. If $\omega$ is one of the $\omega_{i}$ then with the notation of (1.6) we have $\omega\left(x^{-1} y\right)=\left\langle v, x^{-1} y v\right\rangle=\langle x v, y v\rangle$ and therefore

$$
\sum_{x, y \in G} \omega\left(x^{-1} y\right) g(x) \overline{g(y)}=\langle u, u\rangle \geqslant 0
$$

where $u=\sum_{x \in G} g(x) x v$. Hence each $\omega_{i}$ is of positive type and therefore
so also are all non-negative linear combinations of the $\omega_{i}$.
Conversely, if $f \in C(G, K)$ is of positive type, we may write

$$
f=\sum_{i=1}^{s} a_{i} \omega_{i}
$$

with coefficients $a_{i} \in \mathbf{C}$. Taking $g=\omega_{i}$ in the definition, $\left(\omega_{i} f \omega_{i}\right)(1)$ is real and $\geqslant 0$. But by (1.4) (iii), $\omega_{i} f \omega_{i}=a_{i} \omega_{i}^{3}=a_{i} c_{i}^{2} \omega_{i}$, so that $\left(\omega_{i} f \omega_{i}\right)(1)=a_{i} c_{i}^{2}$. Hence $a_{i}$ is real and $\geqslant 0$.
(1.8) Let $(G, K)$ and $\left(G^{\prime}, K^{\prime}\right)$ be Gelfand pairs such that $G^{\prime}$ is a subgroup of $G$ and $K^{\prime}$ is a subgroup of $K$, and let $\omega$ be a zonal spherical function of $(G, K)$. Then the restriction of $\omega$ to $G^{\prime}$ is a non-negative linear combination of the zonal spherical functions of ( $G^{\prime}, K^{\prime}$ ).

Proof. By (1.7), $\omega \mid G^{\prime}$ is of positive type and belongs to $C\left(G^{\prime}, K^{\prime}\right)$. Hence the result follows from (1.7).

The zonal spherical functions of a Gelfand pair $(G, K)$ may be characterized in other ways:
(1.9) Let $\omega$ be a complex-valued function on $G$. Then the following conditions are equivalent:
(a) $\omega$ is a zonal spherical function of $(G, K)$.
(b) (i) $\omega \in C(G, K)$; (ii) $\omega(1)=1$; (iii) for all $f \in C(G, K), f \omega=\lambda_{f} \omega$ for some $\lambda_{f} \in \mathbf{C}$ (depending on $f$ ).
(c) $\omega \neq 0$ and

$$
\omega(x) \omega(y)=\frac{1}{|K|} \sum_{k \in K} \omega(x k y)
$$

for all $x, y \in G$.
Proof. (a) $\Rightarrow$ (b). Conditions (i) and (ii) follow from (1.4). As to (iii), if $f \in C(G, K)$, say $f=\sum a_{j} \omega_{j}$, then $f \omega_{i}=\sum a_{j} \omega_{j} \omega_{i}$ is a scalar multiple of $\omega_{i}$ by (1.4)(iii).
(b) $\Rightarrow$ (c). Let

$$
\omega_{y}(x)=\frac{1}{|K|} \sum_{k \in K} \omega(x k y) .
$$

From (i) it follows that $\omega_{y} \in C(G, K)$. Next, for each $k \in K$ and $f \in$ $C(G, K)$ we have

$$
\begin{aligned}
\lambda_{f} \omega(y) & =\lambda_{f} \omega(k y)=(f \omega)(k y) \\
& =\sum_{x \in G} f\left(x^{-1}\right) \omega(x k y)
\end{aligned}
$$

and hence, on averaging over $K$,

$$
\begin{equation*}
\lambda_{f} \omega(y)=\left(f \omega_{y}\right)(1)=|G|\left\langle\omega_{y}, f^{*}\right\rangle_{G} \tag{1}
\end{equation*}
$$

where $f^{*}(x)=\overline{f\left(x^{-1}\right)}$. On the other hand,

$$
\begin{equation*}
\lambda_{f}=\lambda_{f} \omega(1)=(f \omega)(1)=|G|\left\langle\omega, f^{*}\right\rangle_{G} \tag{2}
\end{equation*}
$$

From (1) and (2) it follows that

$$
\left\langle\omega_{y}-\omega(y) \omega, f^{*}\right\rangle_{G}=0
$$

for all $f \in C(G, K)$, from which we conclude that $\omega_{y}=\omega(y) \omega$, i.e.

$$
\frac{1}{|K|} \sum_{k \in K} \omega(x k y)=\omega(y) \omega(x)
$$

for all $x, y \in G$.
(c) $\Rightarrow$ (a). If $f, g \in C(G, K)$ we have

$$
\begin{aligned}
(\omega f g)(1) & =\sum_{x, y \in G} \omega(x y) f\left(y^{-1}\right) g\left(x^{-1}\right) \\
& =\sum_{x, y \in G} \omega(x k y) f\left(y^{-1}\right) g\left(x^{-1}\right)
\end{aligned}
$$

for all $k \in K$, and hence on averaging over $K$ we obtain

$$
\begin{aligned}
(\omega f g)(1) & =\sum_{x, y \in G} \omega(x) \omega(y) f\left(y^{-1}\right) g\left(x^{-1}\right) \\
& =(\omega f)(1)(\omega g)(1) .
\end{aligned}
$$

Since $\omega \neq 0$, this shows that $f \mapsto(\omega f)(1)$ is a character of $C(G, K)$, and hence $\omega$ is a zonal spherical function of $(G, K)$ by (1.4)(vi).

Let $K_{1}, K_{2}, \ldots, K_{s}$ be the double cosets of $K$ in $G$, and let $f_{i}(1 \leqslant i \leqslant s)$ be the functions on $G$ defined by

$$
f_{i}(x)= \begin{cases}1 /|K| & \text { if } x \in K_{i} \\ 0 & \text { otherwise }\end{cases}
$$

They form a basis of $C(G, K)$. Hence $f_{i} f_{j}$ is a linear combination of the $f_{k}$, say

$$
f_{i} f_{j}=\sum_{k} a_{i j k} f_{k} .
$$

If $x \in K_{k}$, then

$$
\begin{aligned}
a_{i j k} & =|K| f_{i} f_{j}(x) \\
& =|K| \sum_{y \in G} f_{i}(y) f_{j}\left(y^{-1} x\right)
\end{aligned}
$$

Now $f_{i}(y) f_{j}\left(y^{-1} x\right)$ is zero unless $y \in K_{i} \cap x K_{j}^{-1}$, so that

$$
a_{i j k}=\left|K_{i} \cap x K_{j}^{-1}\right| /|K|
$$

Since both $K_{i}$ and $x K_{j}^{-1}$ are unions of cosets $g K$ of $K$ in $G$, it follows that the structure constants $a_{i j k}$ are integers $\geqslant 0$. We shall use this to prove
(1.10) Let $\omega$ be a zonal spherical function of $(G, K)$, and let $x \in G$. Then $|K x K / K| \omega(x)$ is an algebraic integer.

Proof. Let $\hat{\omega}$ be the character of $C(G, K)$ corresponding to $\omega$, so that $\hat{\omega}(f)=(f \omega)(1)$ by (1.4)(vi). Then we have

$$
\hat{\omega}\left(f_{i}\right) \hat{\omega}\left(f_{j}\right)=\sum_{k} a_{i j k} \hat{\omega}\left(f_{k}\right)
$$

from which it follows that the set of $s$ linear equations (in $s$ unknowns $x_{1}, \ldots, x_{s}$ )

$$
\hat{\omega}\left(f_{i}\right) x_{j}=\sum_{k} a_{i j k} x_{k}
$$

has a non-trivial solution $x_{j}=\hat{\omega}\left(f_{j}\right)$. Hence

$$
\operatorname{det}\left(\hat{\omega}\left(f_{i}\right) \delta_{j k}-a_{i j k}\right)_{j, k}=0
$$

On expanding the determinant, we see that $\hat{\omega}\left(f_{i}\right)$ is an algebraic integer, since the $a_{i j k}$ are integers. But if $x \in K_{i}$ we have

$$
\hat{\omega}\left(f_{i}\right)=\left(f_{i} \omega\right)(1)=|K x K / K| \omega\left(x^{-1}\right)
$$

## Examples

1. If $\omega$ is a zonal spherical function of $(G, K)$, then $|\omega(x)| \leqslant 1$ for all $x \in G$. (Use (1.6) and the Cauchy-Schwarz inequality.)
2. The constant function equal to 1 on $G$ is always a zonal spherical function of (G,K). (Use (1.5).)
3. If $\omega$ is a zonal spherical function of ( $G, K$ ), then so also is its complex conjugate
$\bar{\omega}$. (If $\omega=e \bar{\chi}$ we have $\left\langle\chi, 1_{K}^{G}\right\rangle_{G}=1$, hence also $\left\langle\bar{\chi}, 1_{K}^{G}\right\rangle_{G}=1$.)

In the notation of (1.4), suppose that all the characters $\chi_{i}$ are real-valued. Then each $\omega_{i}$ is real-valued and hence $\omega_{i}\left(x^{-1}\right)=\omega_{i}(x)$ for $1 \leqslant i \leqslant s$ and all $x \in G$. It follows that $f\left(x^{-1}\right)=f(x)$ for all $f \in C(G, K)$, and hence that $K x K=K x^{-1} K$ for all $x \in G$. This is a partial converse of (1.2).
4. Let $(G, K)$ be a Gelfand pair, let $\Omega=\left\{\omega_{1}, \ldots, \omega_{s}\right\}$ be the set of zonal spherical functions of $(G, K)$, and let $C(\Omega)$ denote the algebra of all complex-valued functions on $\Omega$, with pointwise multiplication: $(f g)\left(\omega_{i}\right)=f\left(\omega_{i}\right) g\left(\omega_{i}\right)$. If $f \in$ $C(G, K)$, the spherical transform (or Fourier transform) of $f$ is the function $S f$ on $\Omega$ defined by

$$
(S f)\left(\omega_{i}\right)=\left(f \omega_{i}\right)(1)=\sum_{x \in G} f(x) \overline{\omega_{i}(x)}
$$

Show that $S$ is an algebra isomorphism of $C(G, K)$ onto $C(\Omega)$, with inverse $S^{-1}$ given by

$$
\begin{equation*}
S^{-1} \varphi=\frac{1}{|G|} \sum_{i} \varphi\left(\omega_{i}\right) d_{i} \omega_{i} \tag{1}
\end{equation*}
$$

for $\varphi \in C(\Omega)$, in the notation of (1.4). (From (1.4)(iv) and (v) it follows that

$$
f=\sum_{i}\left\langle f, \omega_{i}\right\rangle_{G} d_{i} \omega_{i}=\frac{1}{|G|} \sum_{i}(S f)\left(\omega_{i}\right) d_{i} \omega_{i}
$$

for $f \in C(G, K)$, whence $S$ is a linear isomorphism whose inverse $S^{-1}$ is given by the formula (1). That $S(f g)=(S f)(S g)$ follows from (1.4)(vi).)
5. If $(G, K)$ and $\left(G^{\prime}, K^{\prime}\right)$ are Gelfand pairs with zonal spherical functions $\omega_{i}(1 \leqslant$ $i \leqslant s), \omega_{j}^{\prime}(1 \leqslant j \leqslant t)$ respectively, then ( $G \times G^{\prime}, K \times K^{\prime}$ ) is a Gelfand pair with zonal spherical functions $\omega_{i} \times \omega_{j}^{\prime}$.
6. (a) Let $G$ be a finite group and let $\sigma$ be an automorphism of $G$ such that $\sigma^{2}=1$. Let $K=\{x \in G: \sigma x=x\}$ and let $P=\left\{x \in G ; \sigma x=x^{-1}\right\} ; K$ is a subgroup of $G$, but $P$ is not, in general. If $G=K P$, show that $(G, K)$ is a Gelfand pair. (Let $x \in G$, say $x=k p$ where $k \in K, p \in P$. Then $\sigma x=k p^{-1}=k x^{-1} k$, so that $\sigma(K x K)=K x^{-1} K$ and hence $f(\sigma x)=f\left(x^{-1}\right)$ for all $f \in C(G, K)$. Hence for $f, g \in$ $C(G, K)$ we have

$$
\begin{aligned}
(f g)(x) & =\sum_{y \in G} f\left(x y^{-1}\right) g(y)=\sum_{y \in G} f\left(\sigma\left(y x^{-1}\right)\right) g\left(\sigma\left(y^{-1}\right)\right) \\
& =(g f)\left(\sigma x^{-1}\right)=g f(x)
\end{aligned}
$$

which shows that $C(G, K)$ is commutative.)
(b) Suppose that $G=K A$ where $K, A$ are subgroups of $G, K \cap A=\{1\}$, and the subgroup $A$ is abelian, normal, and of odd order. Define $\sigma: G \rightarrow G$ by $\sigma(k a)=$ $k a^{-1}$, where $k \in K$ and $a \in A$. Clearly $\sigma^{2}$ is the identity. Moreover, $\sigma$ is a homomorphism, because if $x=k_{1} a_{1}$ and $y=k_{2} a_{2}$ are any elements of $G$, where $k_{1}, k_{2} \in K$ and $a_{1}, a_{2} \in A$, then $x y=k_{1} a_{1} k_{2} a_{2}=k a$ where $k=k_{1} k_{2} \in K$ and $a=\left(k_{2}^{-1} a_{1} k_{2}\right) a_{2}=a_{2}\left(k_{2}^{-1} a_{1} k_{2}\right)$ (because $A$ is abelian); and hence $\sigma(x y)=k a^{-1}=$ $k_{1} k_{2}\left(k_{2}^{-1} a_{1}^{-1} k_{2}\right) a_{2}^{-1}=\left(k_{1} a_{1}^{-1}\right)\left(k_{2} a_{2}^{-1}\right)=\sigma(x) \sigma(y)$. Since $A$ has odd order, the
subgroup of $G$ fixed by $\sigma$ is precisely $K$; also $A \subset P=\left\{x \in G: \sigma x=x^{-1}\right\}$, so that $G=K P$. Hence ( $G, K$ ) is a Gelfand pair, by (a) above.
(c) As an example of (b), let $V$ be a finite-dimensional vector space over a finite field of odd characteristic, and let $K_{0}$ be any subgroup of $G L(V)$. Since $K_{0}$ acts on $V$ we can form the semidirect product $G=V \rtimes K_{0}$, whose elements are pairs $(v, k) \in V \times K_{0}$, with multiplication defined by $(v, k)\left(v^{\prime}, k^{\prime}\right)=\left(v+k v^{\prime}, k k^{\prime}\right)$. The elements $(v, 1)$ form a normal subgroup of $G$ isomorphic to $V$, hence abelian and of odd order, and the elements $(0, k)$ form a subgroup $K$ of $G$ isomorphic to $K_{0}$. By (b) above, $(G, K)$ is a Gelfand pair.
7. In the situation of Example 6(b), every $x \in G$ can be uniquely written in the form $x=k(x) a(x)$, where $k(x) \in K$ and $a(x) \in A$, and we have $K x K=K a(x) K$. The group $K$ acts on $A$ by conjugation, hence also on the character group $\hat{A}$ of $A$. The double cosets of $K$ in $G$ are in one-one correspondence with the $K$-orbits in $A$, the double coset $K x K$ corresponding to the $K$-orbit of $a(x)$.

For each character $\alpha \in \hat{A}$ let $\omega_{\alpha}$ be the function on $G$ defined by

$$
\begin{equation*}
\omega_{\alpha}(x)=\frac{1}{|K|} \sum_{k \in K} \alpha\left(k a(x) k^{-1}\right) \tag{1}
\end{equation*}
$$

Show that $\omega_{\alpha}$ is a zonal spherical function of $(G, K)$. (Verify that $\omega_{\alpha}$ satisfies the functional equation of (1.9)(c).)

It is clear from (1) that $\omega_{\alpha}=\omega_{\beta}$ if $\alpha, \beta \in \hat{A}$ are in the same $K$-orbit. If $S$ is a set of representatives of the $K$-orbits in $\hat{A}$, the $\omega_{\alpha}, \alpha \in S$ are linearly independent (because the characters $\alpha \in \hat{A}$ are linearly independent), and hence are all the zonal spherical functions of $(G, K)$.
8. If $f, g \in C(G, K)$ let $f \cdot g$ denote the pointwise product of $f$ and $g:(f \cdot g)(x)=$ $f(x) g(x)$. Show that the coefficients $a_{i j}^{k}$ defined by

$$
\omega_{i} \cdot \omega_{j}=\sum_{k} a_{i j}^{k} \omega_{k}
$$

(where the $\omega_{i}$ are the zonal spherical functions of $(G, K)$ ) are real and $\geqslant 0$. (We may identify $G$ with its image in $G \times G$ under the diagonal map $x \mapsto(x, x)$. By Example 4, the zonal spherical functions of ( $G \times G, K \times K$ ) are $\omega_{i} \times \omega_{j}$, and $\omega_{i} \cdot \omega_{j}$ is the restriction of $\omega_{i} \times \omega_{j}$ to $G$. Hence the result follows from (1.8).)
9. Let $G$ be any finite group and let $\chi_{i}(1 \leqslant i \leqslant r)$ be the irreducible characters of $G$. Let $G^{*}=\{(x, x): x \in G\}$ be the diagonal subgroup of $G \times G$. The irreducible characters of $G \times G$ are $\chi_{i} \times \chi_{j}:(x, y) \mapsto \chi_{i}(x) \chi_{j}(y)(1 \leqslant i, j \leqslant r)$ and we have

$$
\begin{aligned}
\left\langle\chi_{i} \times \chi_{j}, 1_{G^{*}}^{G \times G}\right\rangle_{G \times G} & =\left\langle\left(\chi_{i} \times \chi_{j}\right) \mid G^{*}, 1_{G^{*}}\right\rangle_{G^{*}} \\
& =\frac{1}{|G|} \sum_{x \in G} \chi_{i}(x) \chi_{j}(x)=\left\langle\chi_{i}, \bar{\chi}_{j}\right\rangle_{G}
\end{aligned}
$$

which is equal to 1 if $\chi_{i}=\bar{\chi}_{j}$, and is zero otherwise. Hence the induced representation $1_{G^{*}}^{G \times G}$ is multiplicity-free, with character

$$
\sum_{i=1}^{r} \bar{\chi}_{i} \times \chi_{i}
$$

Consequently ( $G \times G, G^{*}$ ) is a Gelfand pair, and the zonal spherical functions are $\omega_{i}(1 \leqslant i \leqslant r)$, where

$$
\begin{aligned}
\omega_{i}(x, y) & =\frac{1}{|G|} \sum_{g \in G} \bar{\chi}_{i}(g x) \chi_{i}(g y) \\
& =\frac{1}{|G|} \sum_{g \in G} \chi_{i}\left(x^{-1} g^{-1}\right) \chi_{i}(g y) \\
& =\frac{1}{|G|} \chi_{i}^{2}\left(x^{-1} y\right)=d_{i}^{-1} \chi_{i}\left(x^{-1} y\right)
\end{aligned}
$$

where $d_{i}=\chi_{i}(1)$. Hence $\omega_{i}(1 \times G)=d_{i}^{-1} \chi_{i}$.
The functional equation (1.9)(c) for zonal spherical functions in this case becomes the functional equation for characters:

$$
\chi_{i}(x) \chi_{i}(y)=\frac{\chi_{i}(1)}{|G|} \sum_{g \in G} \chi_{i}\left(g^{-1} x g y\right)
$$

for all $x, y \in G$.
10. Let $G$ be a finite group, $A$ the complex group algebra of $G$; also let $K$ be a subgroup of $G$ and $\varphi$ a linear character of $K$ (i.e. a homomorphism of $K$ into $\mathbf{C}^{*}$ ). Let

$$
e_{\varphi}=\frac{1}{|K|} \sum_{k \in K} \varphi\left(k^{-1}\right) k
$$

so that $e_{\varphi}^{2}=e_{\varphi}$ and the $A$-module $A e_{\varphi}$ affords the induced representation $\varphi^{G}=$ $\operatorname{ind}_{K}^{G} \varphi$. Let $C^{\varphi}(G, K)=e_{\varphi} A e_{\varphi}$, which is anti-isomorphic to the endomorphism algebra $\operatorname{End}_{A}\left(A e_{\varphi}\right)$. As an algebra of functions on $G, C^{\varphi}(G, K)$ consists of the functions $f \in A$ that satisfy $f(k x)=f(x k)=\varphi\left(k^{-1}\right) f(x)$ for all $k \in K$ and $x \in G$. The representation $\varphi^{G}$ is multiplicity-free if and only if $C^{\varphi}(G, K)$ is commutative. If these equivalent conditions are satisfied, as we shall assume from now on, the triple $(G, K, \varphi)$ is called (illogically) a twisted Gelfand pair.

The $A$-module $A e_{\varphi}$ is a direct sum of inequivalent irreducible $A$-modules, say

$$
A e_{\varphi}=\underset{i=1}{\oplus} V_{i} .
$$

Let $\chi_{i}$ be the character of $V_{i}$ and let

$$
\omega_{i}^{\varphi}=\bar{\chi}_{i} e_{\varphi}=e_{\varphi} \bar{\chi}_{i}
$$

or explicitly

$$
\omega_{i}^{\varphi}(x)=\frac{1}{|K|} \sum_{k \in K} \chi_{i}\left(x^{-1} k\right) \varphi\left(k^{-1}\right)
$$

The functions $\omega_{i}^{\varphi}(1 \leqslant i \leqslant s)$ are the $\varphi$-spherical functions of the triple $(G, K, \varphi)$. All the reults in the text, appropriately modified, remain valid in this more general context.
(a) Show that (1.4)(i)-(vi) remain valid if $\omega_{i}$ is replaced by $\omega_{i}^{\varphi}$ and $C(G, K)$ by $C^{\varphi}(G, K)$ throughout.
(b) If $V$ is an irreducible $G$-module, let

$$
V^{\varphi}=\{v \in V: k v=\varphi(k) v \text { for all } k \in K\}
$$

Then $\operatorname{dim} V^{\varphi}=1$ if $V \cong V_{i}$ for some $i$, and $\operatorname{dim} V^{\varphi}=0$ otherwise. The $\varphi$-spherical function $\omega_{i}^{\varphi}$ is the unique element of $V_{i}^{\varphi}$ such that $\omega_{i}^{\varphi}(1)=1$.
(c) If $V$ is an irreducible $G$-module such that $V^{\varphi} \neq 0$, let $\langle u, v\rangle$ be a positive-definite $G$-invariant scalar product on $V$, as in (1.6), and let $v \in V^{\varphi}$ be a unit vector. Then the $\varphi$-spherical function corresponding to $V$ is given by $\omega^{\varphi}(x)=\langle v, x v\rangle$ for all $x \in G$.
(d) The functions $f \in C^{\varphi}(G, K)$ that are of positive type are the non-negative linear combinations of the $\omega_{i}^{\varphi}$.
(e) Show that the following conditions are equivalent, for a complex-valued function $\omega$ on $G$ :
( $\alpha$ ) $\omega$ is a $\varphi$-spherical function for $(G, K, \varphi)$.
（ $\beta$ ） (i) $\omega \in C^{\varphi}(G, K)$; (ii) $\omega(1)=1$; (iii) for all $f \in C^{\varphi}(G, K)$, we have $f \omega=\lambda_{f} \omega$ for some $\lambda_{f} \in \mathbf{C}$.
( $\gamma$ ) $\omega \neq 0$ and

$$
\omega(x) \omega(y)=\frac{1}{|K|} \sum_{k \in K} \omega(x k y) \varphi(k)
$$

for all $x, y \in G$.
11. In continuation of Example 10 , let $\varepsilon$ be a linear character of $G$. Then the mapping $\theta: A \rightarrow A$ defined by $\theta(x)=\varepsilon(x) x$ for $x \in G$ (or, in terms of functions, by $(\theta f)(x)=\varepsilon(x) f(x)$ ) is an automorphism of $A$ and induces an isomorphism of $C^{\varepsilon \varphi}(G, K)$ onto $C^{\varphi}(G, K)$, where $\varepsilon \varphi$ is the character $k \mapsto \varepsilon(k) \varphi(k)$ of $K$. Hence if $(G, K, \varphi)$ is a twisted Gelfand pair so also is $(G, K, \varepsilon \varphi)$, and the spherical functions of $(G, K, \varepsilon \varphi)$ are the images under $\theta^{-1}$ of the spherical functions of $(G, K, \varphi)$.

In particular, if $(G, K)$ is a Gelfand pair, and $\varphi$ is a linear character of $K$ which extends to a linear character of $G$, then $(G, K, \varphi)$ is a twisted Gelfand pair.
12. Let $G$ be a finite group, $K$ a subgroup of $G$. Let $\varphi$ be the character of a (not necessarily irreducible) representation of $K$, and let $\varphi^{G}=\operatorname{ind}_{K}^{G} \varphi$. We regard $\varphi$ as a function on $G$, vanishing outside $K$. Let $\chi$ be an irreducible character of $G$, and let

$$
\omega(x)=\frac{1}{|K|} \sum_{k \in K} \chi\left(x^{-1} k\right) \varphi\left(k^{-1}\right)=\frac{1}{|K|} \chi \varphi\left(x^{-1}\right) .
$$

(a) We have

$$
\omega(1)=\langle\chi \mid K, \varphi\rangle_{K}=\left\langle\chi, \varphi^{G}\right\rangle_{G}
$$

(b) $\overline{\omega(x)}=\omega\left(x^{-1}\right)$ for all $x \in G$.
(c) $\omega^{2}=c \omega$ for some positive scalar $c$ (because $\chi, \varphi$ are positive scalar multiples of commuting idempotents).

It follows that

$$
\langle\omega, \omega\rangle_{G}=\frac{1}{|G|} \omega^{2}(1)=\frac{c}{|G|} \omega(1)
$$

and hence that $\omega \neq 0$ if and only if $\chi$ occurs in the induced representation $\varphi^{G}$.
13. Let $m, n$ be positive integers such that $m \leqslant n$, and let $G=S_{m+n}, K=S_{m} \times S_{n}$. Then (Chapter I, §7)

$$
\operatorname{ch}\left(1_{K}^{G}\right)=h_{m} h_{n}=\sum_{i=0}^{m} s_{(m+n-i, i)}
$$

which shows that $1_{K}^{G}$ is multiplicity free, with character

$$
\sum_{i=0}^{m} \chi^{(m+n-i, i)}
$$

Consequently $(G, K)$ is a Gelfand pair, $\operatorname{dim} C(G, K)=m+1$, and the zonal spherical functions are

$$
\omega_{i}=\chi^{(m+n-i, i)} e_{K} \quad(0 \leqslant i \leqslant m) .
$$

Let $E=\{1,2, \ldots, m\}, F=\{1,2, \ldots, m+n\}$. Under the mapping $w \rightarrow w E$, where $w \in G=S_{m+n}$, the cosets $w K$ of $K$ in $G$ are in one-one correspondence with the $m$-element subsets of $F$. Let

$$
\varphi(w)=|E-w E|=m-|E \cap w E|
$$

for $w \in G$. The function $\varphi$ lies in $C(G, K)$ and takes the values $0,1, \ldots, m$, and the double cosets of $K$ in $G$ are the fibres $K_{r}=\varphi^{-1}(r)$ of $\varphi$. In particular, $K_{0}=K$, and $\left|K_{r}\right| /|K|=\binom{m}{r}\binom{n}{r}$ for $0 \leqslant r \leqslant m$. If $\omega_{i}(r)$ denotes the value of $\omega_{i}$ at elements of $K_{r}$, the orthogonality relation (1.4)(iv) takes the form

$$
\sum_{r=0}^{m}\binom{m}{r}\binom{n}{r} \omega_{i}(r) \omega_{j}(r)=\frac{h(m+n-i, i)}{m!n!} \delta_{i j}
$$

where $h(m+n-i, i)$ is the product of the hook-lengths of the partition $(m+n-i, i)$. The numbers $\omega_{i}(r)$ can be calculated explicitly (see e.g. [B1], p. 218): if

$$
Q_{i}(x)=\sum_{s>0}(-1)^{s} q_{i, s}\binom{x}{s},
$$

where

$$
q_{i, s}=\binom{i}{s}\binom{m+n+1-i}{s} /\binom{m}{s}\binom{n}{s}
$$

so that $Q_{i}(x)$ is a polynomial of degree $i$, then $\omega_{i}(r)=Q_{i}(r)$ for $0 \leqslant i, r \leqslant m$.
14. Let $V$ be a vector space of dimension $m+n$ over the field $\mathbf{F}_{q}$ of $q$ elements, and let $U$ be a subspace of $V$ of dimension $m$, where $m \leqslant n$. Let $G=G L(V) \cong$ $G L_{m+n}\left(\mathbf{F}_{q}\right)$, and let $K=\{g \in G: g U=U\}$, which is a maximal parabolic subgroup of $G$. The induced representation $1_{K}^{G}$ is the permutation representation of $G$ on the Grassmannian $G / K=G_{m, n}$, whose points are the $m$-dimensional subspaces of $V$.
For each $g \in G$ let

$$
\varphi(g)=m-\operatorname{dim}(U \cap g U)
$$

in analogy with Example 10. Then $\varphi \in C(G, K)$ and takes the values $0,1, \ldots, m$, and the double cosets of $K$ in $G$ are the fibres $K_{r}=\varphi^{-1}(r)$ of $\varphi$ : in particular, $K_{0}=K$. Since $\varphi(g)=\varphi\left(g^{-1}\right)$ it follows that $K_{r}=K_{r}^{-1}$ for $0 \leqslant r \leqslant m$ and hence ( $G, K$ ) is a Gelfand pair, by (1.2).

Let $k_{r}=\left|K_{r}\right| /|K|$, so that $k_{r}$ is the number of $m$-dimensional subspaces $U^{\prime}$ of $V$ such that $\operatorname{dim}\left(U \cap U^{\prime}\right)=m-r$. Then we have

$$
k_{r}=q^{r^{2}}\left[\begin{array}{c}
m \\
r
\end{array}\right]\left[\begin{array}{l}
n \\
r
\end{array}\right]
$$

where $\left[\begin{array}{c}m \\ r\end{array}\right]$ and $\left[\begin{array}{l}n \\ r\end{array}\right]$ are $q$-binomial coefficients (Chapter I, §2, Example 3). (Let $E=U \cap U^{\prime}$ and $F=U+U^{\prime}$, so that $E$ is an ( $\left.m-r\right)$-dimensional subspace of $U$, and $F / U$ is an $r$-dimensional subspace of $V / U$. The number of choices for $E$ is $\left[\begin{array}{c}m \\ m-r\end{array}\right]=\left[\begin{array}{c}m \\ r\end{array}\right]$, and the number of choices for $F$ is $\left[\begin{array}{l}n \\ r\end{array}\right]$. Moreover, $U^{\prime} / E$ is a complement of $U / E$ in $F / E$; since $\operatorname{dim}\left(U^{\prime} / E\right)=\operatorname{dim}(U / E)=r$, it follows that for each choice of $E$ and $F$ there are $q^{r^{2}}$ possibilities for $U^{\prime}$.)

From Chapter IV it follows that

$$
\operatorname{ch}\left(1_{K}^{G}\right)=h_{m}(1) h_{n}(1)=\sum_{i=0}^{m} s_{(m+n-i, i)}(1)
$$

and hence the character of $1_{K}^{G}$ is $\sum_{i=0}^{m} \chi_{i}$, where $\chi_{i}$ is the character of $G$ whose characteristic is $s_{(m+n-i, i)}(1)$. Hence the zonal spherical functions of $(G, K)$ are $\omega_{i}=\chi_{i} e_{K}(0 \leqslant i \leqslant m)$. If $\omega_{i}(r)$ denotes the value of $\omega_{i}$ at elements of $K_{r}$, the orthogonality relations (1.4)(iv) take the form

$$
\sum_{r=0}^{m} q^{r^{2}}\left[\begin{array}{c}
m \\
r
\end{array}\right]\left[\begin{array}{l}
n \\
r
\end{array}\right] \omega_{i}(r) \omega_{j}(r)=d_{i}^{-1}\left[\begin{array}{c}
m+n \\
m
\end{array}\right] \delta_{i j}
$$

where $d_{i}$ is the degree of $\chi_{i}$, which by Chapter IV, (6.7) is

$$
d_{i}=q^{i} \psi_{m+n}(q) / \prod_{x \in \lambda}\left(q^{h(x)}-1\right)
$$

where $\lambda$ is the partition $(m+n-i, i)$, and $\psi_{r}(q)=\prod_{i=1}^{r}\left(q^{i}-1\right)$.

## Notes and references

The theory of Gelfand pairs and zonal spherical functions was originally developed in the context of the representation theory of locally compact groups, and in particular Lie groups (see, for example, [H6], Chapter IV). The prototype example is that in which $G=S O(3)$ and $K=S O(2)$, so that $G / K$ may be identified with the 2 -sphere, and the zonal spherical functions are the 'spherical harmonics' or Legendre polynomials (loc. cit., p. 404).

## 2. The Gelfand pair $\left(S_{2 n}, H_{n}\right)$

Let $t \in S_{2 n}$ be the product of the transpositions (12), (34), $\ldots,(2 n-1,2 n)$, and let $H_{n}$ be the centralizer of $t$ in $S_{2 n}$. The group $H_{n}$ is the hyperoctahedral group of degree $n$, of order $2^{n} n!$, and isomorphic to the wreath product of $S_{2}$ with $S_{n}$.
To each permutation $w \in S_{2 n}$ we attach a graph $\Gamma(w)$ with vertices $1,2, \ldots, 2 n$ and edges $\varepsilon_{i}, w \varepsilon_{i}(1 \leqslant i \leqslant n)$, where $\varepsilon_{i}$ joins $2 i-1$ and $2 i$. If we think of the edges $\varepsilon_{i}$ as red and the others as blue, then each vertex of the graph lies on one red edge and one blue edge, and hence the components of $\Gamma(w)$ are cycles of even lengths $2 \rho_{1}, 2 \rho_{2}, \ldots$, where $\rho_{1} \geqslant$ $\rho_{2} \geqslant \ldots$. Thus $w$ gives rise to a partition $\rho=\left(\rho_{1}, \rho_{2}, \ldots\right)$ of $n$, called the coset-type of $w$. This terminology is justified by the following proposition:
(2.1) (i) Two permutations $w, w_{1} \in S_{2 n}$ have the same coset-type if and only if $w_{1} \in H_{n} w H_{n}$.
(ii) $w, w^{-1}$ have the same coset-type.

Proof. (i) The permutations $w, w_{1}$ have the same coset-type if and only if their graphs are isomorphic, that is to say if and only if there is a permutation $h \in S_{2 n}$ that preserves edge-colours and maps $\Gamma(w)$ onto $\Gamma\left(w_{1}\right)$. Since $h$ permutes the red edges $\varepsilon_{i}$, it follows that $h \in H_{n}$; and since the blue edges $w_{1} \varepsilon_{i}$ of $\Gamma\left(w_{1}\right)$ are a permutation of the blue edges $h w \varepsilon_{i}$ of $h \Gamma(w)$, the $\varepsilon_{i}$ are a permutation of the $w_{1}^{-1} h w \varepsilon_{i}$, whence $w_{1}^{-1} h w \in H_{n}$ and consequently $w_{1} \in H_{n} w H_{n}$.
(ii) Since $w \Gamma\left(w^{-1}\right)=\Gamma(w)$, the graphs $\Gamma(w)$ and $\Gamma\left(w^{-1}\right)$ are isomorphic, hence determine the same partition of $n$.

From (2.1)(ii) and (1.2) it follows that
(2.2) $\left(S_{2 n}, H_{n}\right)$ is a Gelfand pair.

From (2.1)(i), the double cosets $H_{n} w H_{n}$ of $H=H_{n}$ in $S_{2 n}$ are indexed by the partitions of $n$. Let

$$
H_{\rho}=H w H
$$

if $w \in S_{2 n}$ has coset-type $\rho$. Then we have

$$
\begin{equation*}
\left|H_{\rho}\right|=\left|H_{n}\right|^{2} / z_{2 \rho}=\left|H_{n}\right|^{2} / 2^{l(\rho)} z_{\rho} . \tag{2.3}
\end{equation*}
$$

Proof. If $w$ has coset-type $\rho$ then

$$
\left|H_{\rho}\right|=|H w H|=\left|H w H w^{-1}\right|=|H| \cdot\left|w H w^{-1}\right| /\left|H \cap w H w^{-1}\right|
$$

so that

$$
\begin{equation*}
\left|H_{\rho}\right|=|H|^{2} /\left|H \cap w H w^{-1}\right| . \tag{1}
\end{equation*}
$$

Now $H \cap w \mathrm{Hw}^{-1}$ is the group of colour-preserving automorphisms of the graph $\Gamma(w)$. On a given cycle in $\Gamma(w)$ of length $2 r$, it acts as the dihedral group of order $2 r$, from which it follows that

$$
\left|H \cap w H w^{-1}\right|=z_{2 \rho}
$$

which together with (1) completes the proof.
From (2.2), the induced representation $1_{H_{n}}^{S_{2 n}}$ of $S_{2 n}$ on the cosets of $H_{n}$ is multiplicity-free. In fact
(2.4) We have

$$
1_{H_{n}}^{S_{2 n}} \cong \underset{|\lambda|=n}{\oplus} M_{2 \lambda}
$$

where $M_{2 \lambda}$ is an irreducible $S_{2 n}$-module corresponding to the partition $2 \lambda=$ ( $2 \lambda_{1}, 2 \lambda_{2}, \ldots$ ).

Proof. With the notation of Chapter I we have

$$
\begin{aligned}
\operatorname{ch}\left(1_{H_{n}}^{S_{2 n}}\right) & =c\left(H_{n}\right)=c\left(S_{2} \sim S_{n}\right)=c\left(S_{n}\right) \circ c\left(S_{2}\right) \\
& =h_{n} \circ h_{2}=\sum_{|\lambda|=n} s_{2 \lambda}
\end{aligned}
$$

by use of Chapter I, §7, Example 4 and §8, Examples 5 and 6(a). I
From (2.4) and (1.5) it follows that
(2.5) Let $\mu$ be a partition of $2 n$ and let $M_{\mu}$ be an irreducible $S_{2 n}$-module corresponding to $\mu$. Then $\operatorname{dim} M_{\mu}^{H_{n}}=1$ if $\mu$ is even (i.e. $\mu=2 \lambda$ ), and $M_{\mu}^{H_{n}}=0$ otherwise.

From (2.4), the zonal spherical functions of the Gelfand pair ( $S_{2 n}, H_{n}$ ) are indexed by the partitions of $n$ : they are

$$
\omega^{\lambda}=\chi^{2 \lambda} \tilde{e}_{n}
$$

where $\chi^{2 \lambda}$ is the character of $M_{2 \lambda}$, and

$$
\tilde{e}_{n}=\frac{1}{\left|H_{n}\right|} \sum_{h \in H_{n}} h
$$

Explicitly, since $\chi^{2 \lambda}$ is real-valued, we have

$$
\begin{equation*}
\omega^{\lambda}(s)=\frac{1}{\left|H_{n}\right|} \sum_{h \in H_{n}} \chi^{2 \lambda}(s h) \tag{2.6}
\end{equation*}
$$

for $s \in S_{2 n}$. Since $\chi^{2 \lambda}$ is integer-valued, $\omega^{\lambda}(s)$ is a rational number for all partitions $\lambda$ of $n$ and all $s \in S_{2 n}$.

For each integer $n \geqslant 0$, let

$$
C_{n}=C\left(S_{2 n}, H_{n}\right)
$$

be the space of complex-valued functions on $S_{2 n}$ that are constant on each double coset $H_{\rho}$, and let

$$
C=\underset{n \geqslant 0}{\oplus} C_{n} .
$$

We define a bilinear multiplication in $C$ as follows: if $f \in C_{m}$ and $g \in C_{n}$, then $f \times g$ is a function on $S_{2 m} \times S_{2 n} \subset S_{2(m+n)}$ (where $S_{2 m}$ permutes the first $2 m$ symbols and $S_{2 n}$ the last $2 n$ symbols), and we define

$$
\begin{equation*}
f * g=\tilde{e}_{m+n}(f \times g) \tilde{e}_{m+n} \tag{2.7}
\end{equation*}
$$

Thus $f * g$ is obtained from $f \times g$ by averaging over $H_{m+n}$ on either side, and lies in $C_{m+n}$.

For each partition $\rho$ of $n$ let

$$
\varphi_{\rho}=\tilde{e}_{n} w_{\rho} \tilde{e}_{n}
$$

where $w_{\rho} \in H_{\rho}$. Thus $\varphi_{\rho}(w)=\left|H_{\rho}\right|^{-1}$ if $w \in H_{\rho}$, and $\varphi_{\rho}(w)=0$ otherwise. Clearly the $\varphi_{\rho}$ such that $|\rho|=n$ form a basis of $C_{n}$, and we have

$$
\begin{equation*}
\varphi_{\rho} * \varphi_{\sigma}=\varphi_{\rho \cup \sigma} \tag{2.8}
\end{equation*}
$$

for any two partitions $\rho, \sigma$.
Proof. Let $|\rho|=m,|\sigma|=n$, and let $u \in H_{\rho}, v \in H_{\sigma}$. Then $\Gamma(u \times v)$ is the
disjoint union of $\Gamma(u)$ and $\Gamma(v)$, hence $u \times v$ has coset-type $\rho \cup \sigma$. Now calculate:

$$
\begin{aligned}
\varphi_{\rho} * \varphi_{\sigma} & =\tilde{e}_{m+n}\left(\left(\tilde{e}_{m} u \tilde{e}_{m}\right) \times\left(\tilde{e}_{n} v \tilde{e}_{n}\right)\right) \tilde{e}_{m+n} \\
& =\tilde{e}_{m+n}\left(\tilde{e}_{m} \times \tilde{e}_{n}\right)(u \times v)\left(\tilde{e}_{m} \times \tilde{e}_{n}\right) \tilde{e}_{m+n} \\
& =\tilde{e}_{m+n}(u \times v) \tilde{e}_{m+n}=\varphi_{\rho} \cup \sigma
\end{aligned}
$$

because $\tilde{e}_{m+n} h=h \tilde{e}_{m+n}=\tilde{e}_{m+n}$ for $h \in H_{m+n}$, and hence $\tilde{e}_{m+n}\left(\tilde{e}_{m} \times \tilde{e}_{n}\right)=$ $\left(\tilde{e}_{m} \times \tilde{e}_{n}\right) \tilde{e}_{m+n}=\tilde{e}_{m+n}$.

From (2.8) it follows that the multiplication (2.7) makes $C$ into a commutative and associative graded $\mathbf{C - a l g e b r a .}$

For each $w \in S_{2 n}$ let $\rho(w)$ denote the coset-type of $w$, and let

$$
\psi^{\prime}(w)=p_{\rho(w)}
$$

in analogy with Chapter I, §7, cycle-type being replaced by coset-type. Note that $\psi^{\prime}(w)=\psi^{\prime}\left(w^{-1}\right)$, by (2.1)(ii). Now define a C-linear mapping

$$
\mathrm{ch}^{\prime}: C \rightarrow \Lambda_{\mathrm{c}}
$$

as follows: if $f \in C_{n}$, then

$$
\operatorname{ch}^{\prime}(f)=\sum_{w \in S_{2 n}} f(w) \psi^{\prime}(w)
$$

From this definition it is clear that

$$
\operatorname{ch}^{\prime}\left(\varphi_{\rho}\right)=p_{\rho}
$$

for all partitions $\rho$, and hence it follows from (2.8) that
(2.9) The mapping ch': $C \rightarrow \Lambda_{\mathbf{C}}$ is an isomorphism of graded $\mathbf{C}$-algebras.

Next, we shall define a scalar product on $C$ : if $f, g \in C$, say $f=\Sigma f_{n}$, $g=\sum g_{n}$ with $f_{n}, g_{n} \in C_{n}$, we define

$$
(f, g)=\sum_{n \geqslant 0}\left(f_{n}, g_{n}\right)
$$

where

$$
\begin{equation*}
\left(f_{n}, g_{n}\right)=\sum_{w \in S_{2 n}} f_{n}(w) \overline{g_{n}(w)} \tag{2.10}
\end{equation*}
$$

(i.e. the usual scalar product, multiplied by $\left|S_{2 n}\right|=(2 n)$ !). On the other hand, we have a scalar product $(u, v)$ on $\Lambda_{\mathrm{C}}$, defined by

$$
\begin{equation*}
\left(p_{\rho}, p_{\sigma}\right)=\delta_{\rho \sigma} z_{2 \rho}=\delta_{\rho \sigma} 2^{1(\rho)} z_{\rho} \tag{2.11}
\end{equation*}
$$

as in Chapter VI, (1.3). For these scalar products, the mapping ch' is almost an isometry:
(2.12) For each $n \geqslant 0$, the mapping

$$
f \mapsto\left|H_{n}\right|^{-1} \mathrm{ch}^{\prime}(f)
$$

is an isometry of $C_{n}$ onto $\Lambda_{\mathrm{c}}^{n}$.
Proof. Let $\rho$ and $\sigma$ be partitions of $n$. Clearly $\left(\varphi_{\rho}, \varphi_{\sigma}\right)=0$ if $\rho \neq \sigma$, and

$$
\left(\varphi_{\rho}, \varphi_{\rho}\right)=\left|H_{\rho}\right|^{-1}=\left|H_{n}\right|^{-2} z_{2 \rho}
$$

by (2.3). Hence

$$
\left(\varphi_{\rho}, \varphi_{\sigma}\right)=\left|H_{n}\right|^{-2}\left(\mathrm{ch}^{\prime} \varphi_{\rho}, \operatorname{ch}^{\prime} \varphi_{\sigma}\right)
$$

for all $\rho, \sigma$, which proves (2.12). |
Now define, for each $n \geqslant 0$ and each partition $\lambda$ of $n$,

$$
\begin{aligned}
Z_{\lambda} & =\left|H_{n}\right|^{-1} \mathrm{ch}^{\prime} \omega^{\lambda} \\
& =\left|H_{n}\right|^{-1} \sum_{s \in S_{2 n}} \omega^{\lambda}(s) \psi^{\prime}(s)
\end{aligned}
$$

i.e.

$$
\begin{equation*}
Z_{\lambda}=\left|H_{n}\right| \sum_{|\rho|=n} z_{2 \rho}^{-1} \omega_{\rho}^{\lambda} p_{\rho} \tag{2.13}
\end{equation*}
$$

where $\omega_{\rho}^{\lambda}$ is the value of $\omega^{\lambda}$ at elements of the double coset $H_{\rho}$. The symmetric functions $Z_{\lambda}$ are called zonal polynomials. $\dagger$ Since the $\omega^{\lambda}$ form a C-basis of $C$, the $Z_{\lambda}$ form a $\mathbf{C}$-basis of $\Lambda_{\mathrm{C}}$.
(2.14) $Z_{\lambda} \in \mathbf{Z}\left[p_{1}, p_{2}, \ldots\right]$ for all partitions $\lambda$.

Proof. We have to show that

$$
\left|H_{n}\right| z_{2 \rho}^{-1} \omega_{\rho}^{\lambda}=\left|H_{n}\right|^{-1}\left|H_{\rho}\right| \omega_{\rho}^{\lambda}
$$

is an integer for all $\lambda, \rho$. It is certainly a rational number, by (2.6), and it is an algebraic integer by (1.10). hence it is indeed an integer.
†'Zonal symmetric functions' would perhaps be a more logical name; but the present terminology is universally used, and I have therefore not sought to change it.

If $\lambda, \mu$ are partitions of $n$, it follows from (1.4)(iv) that

$$
\left(\omega^{\lambda}, \omega^{\mu}\right)=\delta_{\lambda \mu}(2 n)!/ \chi^{2 \lambda}(1)
$$

or

$$
\begin{equation*}
\left(\omega^{\lambda}, \omega^{\mu}\right)=\delta_{\lambda \mu} h(2 \lambda) \tag{2.15}
\end{equation*}
$$

where $h(2 \lambda)$ is the product of the hook-lengths of the partition $2 \lambda$. Hence the matrix ( $\omega_{\rho}^{\lambda}$ ) satisfies the orthogonality relations

$$
\begin{align*}
\sum_{\rho} z_{2 \rho}^{-1} \omega_{\rho}^{\lambda} \omega_{\rho}^{\mu} & =\frac{h(2 \lambda)}{\left|H_{n}\right|^{2}} \delta_{\lambda \mu}, \\
\sum_{\lambda} h(2 \lambda)^{-1} \omega_{\rho}^{\lambda} \omega_{\sigma}^{\lambda} & =\frac{z_{2 \rho}}{\left|H_{n}\right|^{2}} \delta_{\rho \sigma}, \tag{2.15}
\end{align*}
$$

from which and (2.12) we have

$$
\begin{equation*}
p_{\rho}=\left|H_{n}\right| \sum_{\lambda} h(2 \lambda)^{-1} \omega_{\rho}^{\lambda} Z_{\lambda} \tag{2.16}
\end{equation*}
$$

Hence if we define

$$
C_{\lambda}=\frac{\left|H_{n}\right|}{h(2 \lambda)} Z_{\lambda}
$$

the relation (2.16) takes the form

$$
\begin{equation*}
p_{\rho}=\sum_{\rho} \omega_{\rho}^{\lambda} C_{\rho} \tag{2.16'}
\end{equation*}
$$

and in particular

$$
\begin{equation*}
p_{1}^{n}=\sum_{\rho} C_{\rho} \tag{2.16"}
\end{equation*}
$$

This renormalization of the zonal polynomials is often preferred by statisticians.

Next, from (2.12) and (2.15) it follows that

$$
\begin{equation*}
\left(Z_{\lambda}, Z_{\mu}\right)=\delta_{\lambda \mu} h(2 \lambda) \tag{2.17}
\end{equation*}
$$

(2.18) We have

$$
\prod_{i, j}\left(1-x_{i} y_{j}\right)^{-1 / 2}=\sum_{\lambda} h(2 \lambda)^{-1} Z_{\lambda}(x) Z_{\lambda}(y) .
$$

Proof. By (2.17), $\left(Z_{\lambda}\right)$ and $\left(h(2 \lambda)^{-1} Z_{\lambda}\right)$ are dual bases of $\Lambda_{\mathbf{Q}}$ for the scalar
product $(f, g)$, and so also are ( $p_{\rho}$ ) and ( $z_{2 \rho}^{-1} p_{\rho}$ ) by definition (2.11). It follows (cf. Chapter I, (4.6)) that

$$
\begin{aligned}
\sum_{\lambda} h(2 \lambda)^{-1} Z_{\lambda}(x) Z_{\lambda}(y) & =\sum_{\rho} z_{2 \rho}^{-1} p_{\rho}(x) p_{\rho}(y) \\
& =\prod_{r>1} \exp \frac{p_{r}(x y)}{2 r}
\end{aligned}
$$

which in turn is equal to

$$
\exp \frac{1}{2} \log \Pi\left(1-x_{i} y_{j}\right)^{-1}=\Pi\left(1-x_{i} y_{j}\right)^{-1 / 2}
$$

By considering the hook-lengths at $(i, 2 j-1)$ and $(i, 2 j)$ in the diagram of $2 \lambda$, where $(i, j) \in \lambda$, it follows that

$$
h(2 \lambda)=h_{1}(2 \lambda) h_{2}(2 \lambda)
$$

where

$$
\begin{equation*}
h_{i}(2 \lambda)=\prod_{s \in \lambda}(2 a(s)+l(s)+i) \tag{2.19}
\end{equation*}
$$

in the notation of Chapter VI, (6.14). From the results of Chapter VI, §10 it follows that the $Z_{\lambda}$ satisfy the same orthogonality relations as the Jack symmetric functions $J_{\lambda}^{(\alpha)}$ with parameter $\alpha=2$. In fact, $Z_{\lambda}=J_{\lambda}^{(2)}$ for all $\lambda$, as we shall now show.

For each integer $n \geqslant 0$, let

$$
\begin{align*}
g_{n} & =\left|H_{n}\right|^{-1} Z_{(n)} \\
& =\sum_{|\rho|-n} z_{2 \rho}^{-1} p_{\rho} \tag{2.20}
\end{align*}
$$

since $\omega_{\rho}^{(n)}=1$ for all $\rho$. If now $\lambda=\left(\lambda_{1}, \lambda_{2}, \ldots\right)$ is any partition, let $g_{\lambda}=g_{\lambda_{1}} g_{\lambda_{2}} \ldots$. Then we have

$$
\begin{equation*}
\left(g_{\lambda}, m_{\mu}\right)=\delta_{\lambda \mu} \tag{2.21}
\end{equation*}
$$

for all $\lambda, \mu$.
Proof. The generating function for the $g_{n}$ is

$$
\begin{aligned}
\sum_{n>0} g_{n}(x) y^{n} & =\sum_{\rho} z_{2 \rho}^{-1} p_{\rho}(x) y^{|\rho|} \\
& =\prod_{i>1}\left(1-x_{i} y\right)^{-1 / 2}
\end{aligned}
$$

as in the proof of (2.18). It follows that

$$
\prod_{i, j}\left(1-x_{i} y_{j}\right)^{-1 / 2}=\sum_{\lambda} g_{\lambda}(x) m_{\lambda}(y)
$$

and hence that $\left(g_{\lambda}\right),\left(m_{\lambda}\right)$ are dual bases for the scalar product $(f, g), \mid$
(2.22) The transition matrix $M(Z, m)$ is strictly upper triangular.

Proof. The coefficient of $m_{\mu}$ in the expansion of $Z_{\lambda}$ as a linear combination of monomial symmetric functions is equal to $\left(Z_{\lambda}, g_{\mu}\right)$ by (2.21), hence we have to show that $\left(Z_{\lambda}, g_{\mu}\right)=0$ unless $\lambda \geqslant \mu$. From the definition of $g_{\mu}$ and from (2.9) it follows that

$$
g_{\mu}=c_{\mu} \operatorname{ch}^{\prime}\left(\theta^{\mu}\right)
$$

where $c_{\mu}$ is a positive scalar, whose exact value need not concern us, and $\theta^{\mu}=\omega^{\left(\mu_{1}\right)} * \omega^{\left(\mu_{2}\right)} * \ldots$. Hence by (2.12) it is enough to show that ( $\omega^{\lambda}, \theta^{\mu}$ ) $=0$ unless $\lambda \geqslant \mu$.

Now $\theta^{\mu}=\tilde{e}_{n} \eta \tilde{e}_{n}$, where $n=|\mu|$ and $\eta$ is the trivial one-dimensional character of the subgroup $S_{2 \mu}=S_{2 \mu_{1}} \times S_{2 \mu_{2}} \times \ldots$ of $S_{2 n}$. Since left and right multiplications by $\tilde{e}_{n}$ are self-adjoint for the scalar product (2.10), we have

$$
\begin{aligned}
\left(\omega^{\lambda}, \theta^{\mu}\right) & =\left(\tilde{e}_{n} \chi^{2 \lambda}, \tilde{e}_{n} \eta \tilde{e}_{n}\right)=\left(\tilde{e}_{n} \chi^{2 \lambda}, \eta\right) \\
& =\left(\tilde{e}_{n} \chi^{2 \lambda} \eta\right)(1) .
\end{aligned}
$$

Now the element $\chi^{2 \lambda} \eta$ of the group algebra of $S_{2 n}$ generates the $\chi^{2 \lambda}$. isotypic component of the induced representation $\eta^{S_{2 n}}$, which, in the notation of Chapter I, $\S 7$, is $\eta_{2 \mu}$. Hence $\chi^{2 \lambda} \eta=0$ unless $\chi^{2 \lambda}$ occurs in $\eta_{2 \mu}$; and since

$$
\left\langle\chi^{2 \lambda}, \eta_{2 \mu}\right\rangle=\left\langle s_{2 \lambda}, h_{2 \mu}\right\rangle=K_{2 \lambda, 2 \mu}
$$

(Chapter I, §7) is zero unless $2 \lambda \geqslant 2 \mu$, i.e. unless $\lambda \geqslant \mu$, it follows that $\chi^{2 \lambda} \eta=0$ and hence $\left(\omega^{\lambda}, \theta^{\mu}\right)=0$ unless $\lambda \geqslant \mu$. I

From (2.17) and (2.22) it follows (cf. Chapter VI, $\S 1$ ) that $Z_{\lambda}$ is a scalar multiple of $J_{\lambda}^{(2)}$, for each partition $\lambda$. But by (2.13) and Chapter VI, (10.29), the coefficient of $p_{1}^{n}$ in each of $Z_{\lambda}$ and $J_{\lambda}^{(2)}$ (where $n=|\lambda|$ ) is equal to 1 , and therefore
(2.23) $Z_{\lambda}=J_{\lambda}^{(2)}$ for all partitions $\lambda$.

For each partition $\lambda$, let $c_{\lambda}$ denote the polynomial

$$
\begin{align*}
c_{\lambda}(X) & =\prod_{s \in \lambda}\left(X+2 a^{\prime}(s)-l^{\prime}(s)\right)  \tag{2.24}\\
& =\prod_{(i, j) \in \lambda}(X-i+2 j-1)
\end{align*}
$$

Then if $Z_{\lambda}\left(1_{n}\right)$ denotes the value of $Z_{\lambda}\left(x_{1}, \ldots, x_{n}\right)$ at $x_{1}=\ldots=x_{n}=1$, we have

$$
\begin{equation*}
Z_{\lambda}\left(1_{n}\right)=c_{\lambda}(n) \tag{2.25}
\end{equation*}
$$

by (2.23) and Chapter VI, (10.24). For an independent proof of (2.25), see (4.15) below.
(2.26) The coefficient of $x^{\lambda}$ in $Z_{\lambda}(x)$ is

$$
h_{1}(2 \lambda)=\prod_{s \in \lambda}(2 a(s)+l(s)+1)
$$

This follows from (2.23) and the definition (Chapter VI, (10.22)) of $J_{\lambda}^{(\alpha)}$. For another proof, see §3, Example 1 below.
(2.27) If $\mu \leqslant \lambda$, the coefficient of $x^{\mu}$ in $Z_{\lambda}(x)$ is a positive integer divisible by $u_{\mu}=\prod_{i>1} m_{i}(\mu)!$.

Proof. The 'augmented' monomial symmetric functions $\tilde{m}_{\mu}=u_{\mu} m_{\mu}$ are a $\mathbf{Z}$-basis of the subring $\mathbf{Z}\left[p_{1}, p_{2}, \ldots\right]$ of $\Lambda$ (Chapter I, §6, Example 10). Hence it follows from (2.14) that the coefficient of $x^{\mu}$ (or of $m_{\mu}$ ) in $Z_{\lambda}$ is an integer divisible by $u_{\mu}$; moreover it is positive by virtue of (2.23) and Chapter VI, (10.12).
(2.28) Let $\lambda, \mu, v$ be three partitions. Then $\left(Z_{\lambda}, Z_{\mu} Z_{\nu}\right)$ is an integer $\geqslant 0$, and is positive only if $c_{2 \mu, 2 \nu}^{2 \lambda}=\left\langle s_{2 \lambda}, s_{2 \mu} s_{2 \nu}\right\rangle$ (Chapter I, §9) is positive.

Proof. The definition (2.11) of the scalar product shows that it is integervalued on the subring $\mathbf{Z}\left[p_{1}, p_{2}, \ldots\right]$ of $\Lambda$. Hence it follows from (2.14) that $\left(Z_{\lambda}, Z_{\mu} Z_{\nu}\right)$ is an integer. To show that it is non-negative, it is enough by (2.9) and (2.12) to show that ( $\omega^{\lambda}, \omega^{\mu} * \omega^{\nu}$ ) $\geqslant 0$.

Let $|\mu|=m,|\nu|=n,|\lambda|=p$. We may assume that $m+n=p$, otherwise the scalar product is certainly zero. We have

$$
\begin{aligned}
\left(\omega^{\lambda}, \omega^{\mu} * \omega^{\nu}\right) & =\left(\omega^{\lambda}, \tilde{e}_{p}\left(\omega^{\mu} \times \omega^{\nu}\right) \tilde{e}_{p}\right) \\
& =\left(\omega^{\lambda}, \omega^{\mu} \times \omega^{\nu}\right)
\end{aligned}
$$

which up to a positive scalar factor is the coefficient of $\omega^{\mu} \times \omega^{\nu}$ in the restriction of $\omega^{\lambda}$ to $S_{2 m} \times S_{2 n}$, and hence is non-negative by (1.8).

Finally, since

$$
\begin{aligned}
\left(\omega^{\lambda}, \omega^{\mu} \times \omega^{\nu}\right) & =\left(\tilde{e}_{p} \dot{\chi}^{2 \lambda},\left(\tilde{e}_{m} \times \tilde{e}_{n}\right)\left(\chi^{2 \mu} \times \chi^{2 \nu}\right)\right) \\
& =\tilde{e}_{p} \chi^{2 \lambda}\left(\chi^{2 \mu} \times \chi^{2 \nu}\right)(1),
\end{aligned}
$$

for $\left(Z_{\lambda}, Z_{\mu} Z_{\nu}\right)$ to be positive we must have $\chi^{2 \lambda}\left(\chi^{2 \mu} \times \chi^{2 \nu}\right) \neq 0$, which implies that $\chi^{2 \lambda}$ occurs in the character obtained by inducing $\chi^{2 \mu} \times \chi^{2 \nu}$ from $S_{2 m} \times S_{2 n}$ to $S_{2 p}$, i.e. that $\left\langle s_{2 \lambda}, s_{2 \mu} s_{2 \nu}\right\rangle>0$.

Remark. It seems to be an open question whether $\left(Z_{\lambda}, Z_{\mu} Z_{\nu}\right)>0$ if and only if $c_{\mu \nu}^{\lambda}=\left\langle s_{\lambda}, s_{\mu} s_{\nu}\right\rangle>0$.

## Examples

1. If $\lambda=(r \mid s)=\left(r+1,1^{s}\right)$ is a hook, then $Z_{\lambda}$ is equal to the determinant

$$
D(1,2, \ldots, s,-2 r,-2 r+2, \ldots,-2)
$$

in the notation of Chapter VI, §10, Example 4(a).
2. There are explicit formulas for some of the entries in the matrix ( $\omega_{\rho}^{\lambda}$ ).
(a) $\omega_{\rho}^{\lambda}=1$ if $\lambda=(n)$ or $\rho=\left(1^{n}\right)$.
(b) When $\lambda=\left(1^{n}\right)$,

$$
Z_{\lambda}=n!e_{n}=n!\sum_{\rho} \varepsilon_{\rho} z_{\rho}^{-1} p_{\rho}
$$

(Chapter I, (2.14')) and hence

$$
\omega_{\rho}^{\left(I^{(n)}\right)}=(-1)^{n-l(\rho)} / 2^{n-l(\rho)} .
$$

(c) From (2.25) it follows that

$$
\left|H_{n}\right| \sum_{\rho} z_{2 \rho}^{-1} \omega_{\rho}^{\lambda} X^{\prime(\rho)}=c_{\lambda}(X)
$$

and hence, on equating coefficients of $X$ on either side,

$$
\omega_{(n)}^{\lambda}=\frac{1}{\left|H_{n-1}\right|} \prod_{s \in \lambda}^{\prime}\left(2 a^{\prime}(s)-l^{\prime}(s)\right)
$$

where the product omits the square (1,1) (for which $a^{\prime}(s)=l^{\prime}(s)=0$ ). Hence $\omega_{(n)}^{\lambda}=0$ if $\lambda \supset\left(2^{3}\right)$.
(d)

$$
\omega_{\left(21^{n-2}\right)}^{\lambda}=\frac{2 n\left(\lambda^{\prime}\right)-n(\lambda)}{n(n-1)}
$$

where $n(\lambda)=\lambda_{2}+2 \lambda_{3}+\ldots=\Sigma_{s \in \lambda} l^{\prime}(s)$. (Same method as in (c): equate coefficients of $X^{n-1}$.)
(e) Let $\varphi: \Lambda_{\mathbf{Q}} \rightarrow \Lambda_{\mathbf{Q}}$ be the automorphism defined by $\varphi\left(p_{r}\right)=\frac{1}{2} p_{r}$ for all $r \geqslant 1$. Use Example 1 to show that $Z_{(n-1,1)}$ is the image under $\varphi$ of

$$
2^{n-2}\left(\tilde{s}_{(n-1,1)}+h_{1} \tilde{s}_{(n-1)}\right)
$$

where $\tilde{s}_{\mu}=h(\mu) s_{\mu}$ for any partition $\mu$, and deduce that

$$
\omega_{\rho}^{(n-1,1)}=\frac{(2 n-1) m_{1}(\rho)-n}{2 n(n-1)}
$$

where $m_{1}(\rho)$ is the number of parts of $\rho$ equal to 1 :
(f) Show that

$$
\omega_{\rho}^{\left(21^{n-2}\right)}=\omega_{\rho}^{\left(1^{n}\right)} \frac{(n+1) m_{1}(\rho)-2 n}{n(n-1)}
$$

(Same method as in (e).)
3. Let

$$
\square_{n}=\sum_{i=1}^{n} x_{i}^{2} D_{i}^{2}+\sum_{i \neq j}\left(x_{i}-x_{j}\right)^{-1} x_{i}^{2} D_{i}
$$

where $D_{i}=\partial / \partial x_{i}$ (Laplace-Beltrami operator). Then

$$
\square_{n} Z_{\lambda}\left(x_{1}, \ldots, x_{n}\right)=\left(2 n\left(\lambda^{\prime}\right)-n(\lambda)\right) Z_{\lambda}\left(x_{1}, \ldots, x_{n}\right)
$$

for partitions of $\lambda$ of length $\leqslant n$. (Chapter VI, §3, Example 3(e).) The coefficients $a_{\lambda \mu}$ in

$$
Z_{\lambda}=\sum_{\mu<\lambda} a_{\lambda \mu} m_{\mu}
$$

may be computed recursively in terms of $a_{\lambda \lambda}$ by means of this equation (Chapter VI, §4, Example 3(d)).
4. Let $\Delta: \Lambda \rightarrow \Lambda \otimes \Lambda$ be the comultiplication defined in Chapter I, §5, Example 25. Show that

$$
(f, g)=\langle\Delta f, \Delta g\rangle
$$

for all $f, g \in \Lambda$, where the scalar product on the right is that defined loc. cit.
5. Let $X$ denote the set of all graphs with $2 n$ vertices $1,2, \ldots, 2 n$ and $n$ edges, one through each vertex. If $x, y \in X$, the connected components of $x \cup y$ are cycles of even lengths $2 \rho_{1} \geqslant 2 \rho_{2} \geqslant \ldots$. Let $\rho(x, y)$ denote the partition $\left(\rho_{1}, \rho_{2}, \ldots\right)$ of $n$ so defined.

Show that the eigenvalues of the matrix

$$
\left(p_{\rho(x, y)}\right)_{x, y \in X}
$$

are the zonal polynomials $Z_{\lambda}$ such that $|\lambda|=n$, and that the multiplicity of $Z_{\lambda}$ as an eigenvalue is $\chi^{2 \lambda}(1)=(2 n)!/ h(2 \lambda)$.
6. Let $\varepsilon$ denote the sign character of $S_{2 n}$, and let $\varepsilon_{n}$ denote its restriction to $H_{n}$. From $\S 1$, Example 11, the induced character $\varepsilon_{n}^{S_{2 n}}$ is multiplicity-free, so that $\left(S_{2 n}, H_{n}, \varepsilon_{n}\right)$ is a twisted Gelfand pair, and

$$
\varepsilon_{n}^{S_{2 n}}=\sum_{|\lambda|=n} \varepsilon \chi^{2 \lambda}=\sum_{|\lambda|=n} \chi^{(2 \lambda)^{\prime}} .
$$

Hence the irreducible characters that appear in $\varepsilon_{n}^{S_{2 n}}$ are those corresponding to partitions of $2 n$ with all columns of even length. The $\varepsilon$-spherical functions are

$$
\pi^{\lambda^{\prime}}=\chi^{(2 \lambda)^{\prime}} e_{n}^{\prime}
$$

where $e_{n}^{\prime}=\left|H_{n}\right|^{-1} \varepsilon_{n}$ is the idempotent corresponding to $\varepsilon_{n}$.
(a) For each $f \in C_{n}=C\left(S_{2 n}, H_{n}\right)$ let $f^{\varepsilon}$ be the function defined by $f^{\varepsilon}(s)=\varepsilon(s) f(s)$ for $s \in S_{2 n}$. Then the mapping $f \rightarrow f^{\varepsilon}$ is an isometric isomorphism of $C_{n}$ onto $C_{n}^{e}=C^{e}\left(S_{2 n}, H_{n}\right)$, the algebra of functions $f$ on $S_{2 n}$ that satisfy $f(h s)=f(s h)=$ $\varepsilon(h) f(s)$ for all $s \in S_{2 n}$ and $h \in H_{n}$. Under this isomorphism, the zonal spherical function $\omega^{\lambda} \in C_{n}$ is mapped to $\pi^{\lambda^{n}} \in C_{n}^{e}$.
(b) Let

$$
C^{\varepsilon}=\underset{n \geqslant 0}{\oplus} C_{n}^{\varepsilon}
$$

and define a bilinear multiplication on $C^{\varepsilon}$ by the rule

$$
f * g=e_{m+n}^{\prime}(f \times g) e_{m+n}^{\prime}
$$

if $f \in C_{m}^{\varepsilon}$ and $g \in C_{n}^{\varepsilon}$. Then the mapping $f \rightarrow f^{\varepsilon}$ defined above extends to a graded $\mathbf{C}$-algebra isomorphism of $C$ onto $C^{\varepsilon}$. The functions $\varphi_{\rho}^{\varepsilon}$ form a $\mathbf{C}$-basis of $C^{\varepsilon}$, and $\varphi_{\rho}^{\varepsilon} * \varphi_{\sigma}^{\varepsilon}=\varphi_{\rho}^{\varepsilon} \cup \sigma$ for any two partitions $\rho, \sigma$.
(c) Define an embedding $w \rightarrow w^{*}$ (which is not a homomorphism) of $S_{n}$ into $S_{2 n}$ as follows. For each cycle $c=\left(i_{1}, \ldots, i_{r}\right)$ in the cycle-decomposition of $w \in S_{n}$, let $c^{*}$ denote the $2 r$-cycle ( $2 i_{1}-1,2 i_{1}, 2 i_{2}-1,2 i_{2}, \ldots, 2 i_{r}-1,2 i_{r}$ ), and let $w^{*}$ be the product of these $c^{*}$. If $w$ has cycle-type $\rho$, then $w^{*}$ has cycle-type $2 \rho$ and coset-type $\rho$, and $\varepsilon\left(w^{*}\right)=(-1)^{(\rho)}=(-1)^{n} \varepsilon(w)$. For each $f \in C_{n}^{e}$, let $f^{*}$ be the function on $S_{n}$ defined by $f^{*}(w)=f\left(w^{*}\right)$, which is a class function on $S_{n}$.

Now define a C-linear mapping

$$
\mathrm{ch}^{\varepsilon}: C^{\varepsilon} \rightarrow \Lambda_{\mathbf{C}}
$$

as follows: if $f \in C_{n}^{e}$, then $\operatorname{ch}^{e}(f)=(-1)^{n}\left|H_{n}\right|^{2} \operatorname{ch}\left(f^{*}\right)$, where ch is the characteristic map of Chapter I, §7. We have $\operatorname{ch}^{\varepsilon}\left(\varphi_{\rho}^{\varepsilon}\right)=\varepsilon_{\rho} 2^{l(\rho)} p_{\rho}$, from which it follows that $\mathrm{ch}^{\varepsilon}$ is an isomorphism of graded $\mathbf{C}$-algebras.
(d) Define a scalar product $(u, v)^{\prime}$ on $\Lambda_{C}$ by

$$
\left(p_{\rho}, p_{\sigma}\right)^{\prime}=\delta_{\rho \sigma} 2^{-l(\rho)} z_{\rho}
$$

Then $f \rightarrow\left|H_{n}\right|^{-1} \operatorname{ch}^{\varepsilon}(f)$ is an isometry of $C_{n}^{\varepsilon}$ onto $\Lambda_{n, \mathrm{c}}$ for each $n \geqslant 0$.
7. In continuation of Example 6, define

$$
Z_{\lambda}^{\prime}=\left|H_{n}\right|^{-1} \operatorname{ch}^{\varepsilon}\left(\pi^{\lambda}\right)
$$

if $\lambda$ is a partition of $n$. Since

$$
\pi^{\lambda}\left(w^{*}\right)=\varepsilon\left(w^{*}\right) \omega^{\lambda^{\lambda}}\left(w^{*}\right)=(-1)^{n} \varepsilon_{\rho} \omega_{\rho}^{\lambda^{\prime}}
$$

if $w \in S_{n}$ has cycle-type $\rho$, it follows that

$$
\begin{equation*}
Z_{\lambda}^{\prime}=\left|H_{n}\right| \sum_{\rho} \varepsilon_{\rho} z_{\rho}^{-1} \omega_{\rho}^{\lambda^{\prime}} p_{\rho} \tag{1}
\end{equation*}
$$

which is the image of $Z_{\lambda^{\prime}}$, under the automorphism of $\Lambda_{\mathrm{C}}$ which maps each power sum $p_{r}$ to $(-1)^{r-1} 2 p_{r}$, and hence $p_{\rho}$ to $\varepsilon_{\rho} 2^{2(\rho)} p_{\rho}$ for each partition $\rho$. From Chapter VI, (10.24) it follows that

$$
\begin{equation*}
Z_{\lambda}^{\prime}=2^{n} J_{\lambda}^{(1 / 2)} \tag{2}
\end{equation*}
$$

if $\lambda$ is a partition of $n$.
(a) From (1) and (2.15') it follows that

$$
\left(Z_{\lambda}^{\prime}, Z_{\mu}^{\prime}\right)^{\prime}=h\left(2 \lambda^{\prime}\right) \delta_{\lambda \mu}
$$

(b) From Chapter VI, (10.24) we have

$$
Z_{\lambda}^{\prime}\left(1_{n}\right)=\prod_{s \in \lambda}\left(2 n+a^{\prime}(s)-2 l^{\prime}(s)\right)
$$

(c) From Chapter VI, (10.22) the coefficient of $x^{\lambda}$ in $Z_{\lambda}^{\prime}(x)$ is

$$
\prod_{s \in \lambda}(a(s)+2 l(s)+2) .
$$

(d) We have (compare (2.18))

$$
\prod_{i, j}\left(1-x_{i} y_{j}\right)^{-2}=\sum_{\lambda} h\left(2 \lambda^{\prime}\right)^{-1} Z_{\lambda}^{\prime}(x) Z_{\lambda}^{\prime}(y) .
$$

## Notes and references

The zonal polynomials were introduced by L.-K. Hua [H11] and A. T. James [J4] independently, around 1960. There is a large literature devoted to them, mostly due to statisticians: see for example [F3], Chapters 12 and 13, and [M17]; also Takemura's monograph [T1] and the bibliography there.

The proof of (2.23) presented here is due to J. Stembridge [S29]. The formula (2.25) was first proved by A. G. Constantine [C4], and (2.26) is due to A. T. James [J5]. Proposition (2.28) is due to N. Bergeron and A. Garsia [B3].

Example 2. These formulas are due to P. Diaconis and E. Lander [D4]. Example 3. This method of calculating the zonal polynomials is due to A. T. James [J6].

Example 5. I learnt this combinatorial definition of the zonal polynomials from R. Stanley.

The zonal polynomials $Z_{\lambda}$ have been calculated up to weight $|\lambda|=12$ : see [P1].

## 3. The Gelfand pair $\left(G L_{n}(\mathbf{R}), O(n)\right)$

Let $V=\mathbf{R}^{n}$, with standard basis of unit vectors $e_{1}, \ldots, e_{n}$, and let $G=$ $G L(V)=G L_{n}(\mathbf{R})$, acting on $V$ as follows:

$$
g e_{j}=\sum_{i=1}^{n} g_{i j} e_{i}
$$

if $g=\left(g_{i j}\right)$. Let

$$
P(G)=\underset{m \geqslant 0}{\oplus} P^{m}(G)
$$

be the space of all polynomial functions on $G$, as in Chapter I, Appendix A, §8: $P^{m}(G)$ is the subspace of $P(G)$ consisting of the polynomial functions that are homogeneous of degree $m$. The group $G$ acts on $P(G)$ by the rule

$$
\begin{equation*}
(g p)(x)=p(x g) \tag{3.1}
\end{equation*}
$$

for $p \in P(G)$ and $g, x \in G$, and under this action $P(G)$ decomposes as a direct sum

$$
\begin{equation*}
P(G)=\underset{\mu}{\oplus} P_{\mu}, \tag{3.2}
\end{equation*}
$$

where $\mu$ ranges over all partitions of length $\leqslant n$, and $P_{\mu}$ is the subspace of $P(G)$ spanned by the matrix coefficients $R_{i j}^{\mu}$ of an irreducible polynomial representation $R^{\mu}$ of $G$ corresponding to the irreducible $G$-module $F_{\mu}(V)$, in the notation of Chapter I, Appendix A. Moreover we have

$$
\begin{equation*}
P_{\mu} \cong F_{\mu}(V)^{d_{\mu}} \tag{3.3}
\end{equation*}
$$

where $d_{\mu}$ is the dimension of $F_{\mu}(V)$.
Now let $K=O(n)$ be the compact subgroup of $G$ consisting of the orthogonal matrices, and let $e_{K}, e_{K}^{\prime}$ be the operators on $P(G)$ defined by

$$
\begin{aligned}
& \left(e_{K} p\right)(x)=\int_{K} p(k x) \mathrm{d} k, \\
& \left(e_{K}^{\prime} p\right)(x)=\int_{K} p(x k) \mathrm{d} k
\end{aligned}
$$

where the integration is with respect to normalized Haar measure on the
compact group $K$. Clearly $e_{K}$ (but not $e_{K}^{\prime}$ ) commutes with the action (3.1) of $G$. Since

$$
\begin{aligned}
e_{K} R_{i j}^{\mu}(x) & =\int_{K} R_{i j}^{\mu}(k x) \mathrm{d} k \\
& =\sum_{r}\left(\int_{K} R_{i r}^{\mu}(k) \mathrm{d} k\right) R_{r j}^{\mu}(x)
\end{aligned}
$$

it follows that $e_{K} P_{\mu} \subset P_{\mu}$ for each $\mu$, and a similar calculation shows that $e_{K}^{\prime} P_{\mu} \subset P_{\mu}$.

Next, we have $e_{K} p(k x)=e_{K} p(x)$ for all $k \in K$, by the invariance of Haar measure, and therefore

$$
\left(e_{K}^{2} p\right)(x)=\int_{K} e_{K} p(k x) \mathrm{d} k=\int_{K} e_{K} p(x) \mathrm{d} k=e_{K} p(x)
$$

which shows that $e_{K}$ is idempotent, and likewise $e_{K}^{\prime}$ is idempotent. Moreover, the two operators $e_{K}, e_{K}^{\prime}$ are related by

$$
\begin{equation*}
e_{K}^{\prime}=\tau e_{K} \tau \tag{3.4}
\end{equation*}
$$

where $\tau$ is the involution of $P(G)$ defined by $\tau p(x)=p\left(x^{\prime}\right)$, where $x^{\prime}$ is the transpose of the matrix $x \in G$.

Let
(resp.

$$
\begin{aligned}
& P(K \backslash G)=\underset{m>0}{\oplus} P^{m}(K \backslash G) \\
& P(G / K)=\underset{m>0}{\oplus} P^{m}(G / K), \\
& \left.P(G, K)=\underset{m \geqslant 0}{\oplus} P^{m}(G, K)\right)
\end{aligned}
$$

denote the subspace of $P(G)$ consisting of the functions constant on each coset $K x$ (resp. each coset $x K$, each double coset $K x K$ ) of $K$ in $G$. In each case the superscript $m$ denotes the subspace of functions that are homogeneous of degree $m$. Since $-1 \in K$ we have $p(x)=p(-x)$ for $p$ in any of these spaces, and hence $P^{m}(K \backslash G), P^{m}(G / K)$, and $P^{m}(G, K)$ are all zero if $m$ is odd. Also, by (3.1), $P^{m}(G / K)$ is the same thing as $P^{m}(G)^{K}$.
(3.5) (i) For each partition $\mu, e_{K} P_{\mu}$ and $e_{K}^{\prime} P_{\mu}$ are subspaces of $P_{\mu}$ of the same dimension.
(ii) $e_{K}$ (resp. $e_{K}^{\prime}$ ) projects $P(G)$ onto $P(K \backslash G)$ (resp. $P(G / K)$ ).

Proof. (i) From (3.4) it follows that $e_{K}$ and $e_{K^{\prime}}$ are isomorphic projections,
so that their restrictions to each $P_{\mu}$ have the same rank, i.e. $\operatorname{dim}\left(e_{K} P_{\mu}\right)=$ $\operatorname{dim}\left(e_{K}^{\prime} P_{\mu}\right)$.
(ii) If $p \in e_{K} P(G)$ then clearly $p(k x)=p(x)$ for all $k \in K$ and $x \in G$. Conversely, if $p(k x)=p(x)$ for $k \in K$ and $x \in G$, we have $e_{K} p=p$ and hence $p \in e_{K} P(G)$. Hence $e_{K} P(G)=P(K \backslash G)$, and likewise $e_{K}^{\prime} P(G)=$ $P(G / K)$.

Next we have

$$
\begin{equation*}
\operatorname{End}_{G} P(K \backslash G) \cong P(G, K) \tag{3.6}
\end{equation*}
$$

Proof. The proof is best expressed in terms of the Schur algebra $\mathbb{S}^{m}=$ End $_{S_{m}} \mathrm{~T}^{m}(V)$ (Chapter I, Appendix A, §8, Example 6), with $G$-action $g \alpha=\mathrm{T}^{m}(g) \alpha\left(g \in G, \alpha \in \mathbb{S}^{m}\right)$. The mapping $\alpha \mapsto p_{\alpha}$ defined by $p_{\alpha}(g)=$ trace $(g \alpha)$ is a $G$-isomorphism of $\mathbb{S}^{m}$ onto $P^{m}(G)$, and since

$$
\operatorname{trace}(k g \alpha)=\operatorname{trace}\left(\mathrm{T}^{m}(k) \mathrm{T}^{m}(g) \alpha\right)=\operatorname{trace}\left(g \alpha \mathrm{~T}^{m}(k)\right)
$$

it follows that

$$
\begin{aligned}
\left(e_{K} p_{\alpha}\right)(g) & =\int_{K} \operatorname{trace}(k g \alpha) \mathrm{d} k \\
& =\operatorname{trace}\left(g \alpha \varepsilon_{K}\right)
\end{aligned}
$$

where

$$
\varepsilon_{K}=\int_{K} \mathbf{T}^{m}(k) \mathrm{d} k \in \mathbb{S}^{m}
$$

Hence $e_{K} p_{\alpha}=p_{\alpha \varepsilon_{K}}$, and therefore $P^{m}(K \backslash G)=e_{K} P^{m}(G)$ is the image of $\widetilde{S}^{m} \varepsilon_{K}$ under the isomorphism $\alpha \mapsto p_{\alpha}$. Likewise $P^{m}(G / K)$ (resp. $P^{m}(G, K)$ ) is the image of $\varepsilon_{K} \mathbb{S}^{m}$ (resp. $\varepsilon_{K} \mathbb{S}^{m} \varepsilon_{K}$ ). Now $\varepsilon_{K}$ is idempotent, and therefore

$$
\begin{aligned}
\operatorname{End}_{G} P^{m}(K \backslash G) & \cong \operatorname{End}_{G}\left(\mathbb{S}^{m} \varepsilon_{K}\right)=\operatorname{End}_{\Xi^{m}}\left(\mathbb{S}^{m} \varepsilon_{K}\right) \\
& \cong \varepsilon_{K} \mathbb{S}^{m} \varepsilon_{K} \cong P^{m}(G, K) .
\end{aligned}
$$

Consider now the double cosets of $K$ in $G$. We have
(3.7) If $x \in G$, there exists a diagonal matrix $\xi=\operatorname{diag}\left(\xi_{1}, \ldots, \xi_{n}\right)$ such that $x \in K \xi K$, and the eigenvalues of $x^{\prime} x$ are $\xi_{1}^{2}, \ldots, \xi_{n}^{2}$.

Proof. The matrix $x^{\prime} x$ is symmetric and positive definite, hence can be brought to diagonal form by conjugating with an orthogonal matrix, say $x^{\prime} x=k^{\prime} y k$ where $k \in K$ and $y$ is a diagonal matrix whose diagonal entries $y_{i}$ are the eigenvalues of $x^{\prime} x$, and hence are positive real numbers. So if $\xi_{i}$ is a square root of $y_{i}$ for each $i$, and $\xi=\operatorname{diag}\left(\xi_{1}, \ldots, \xi_{n}\right)$, we have
$x^{\prime} x=k^{\prime} \xi^{2} k$, which shows that $k_{1}=x k^{-1} \xi^{-1}$ is orthogonal and hence $x=k_{1} \xi k \in K \xi K$.

From (3.7) it follows that the polynomial functions $p \in P^{2 m}(G, K)$ are determined by their values on the diagonal matrices, and that $p(x)=$ $p^{*}\left(\xi_{1}^{2}, \ldots, \xi_{n}^{2}\right)$ where the $\xi_{i}^{2}$ are the eigenvalues of $x^{\prime} x$, and $p^{*}$ is a symmetric polynomial in $n$ variables, homogeneous of degree $m$. We conclude that
(3.8) The mapping $p \mapsto p^{*}$ is an isomorphism of $P^{2 m}(G, K)$ onto $\Lambda_{n, \mathbf{R}}^{m}$ for each $m \geqslant 0$.

Next, let $\Sigma$ denote the space of real symmetric $n \times n$ matrices, and let

$$
P(\Sigma)=\underset{m \geqslant 0}{\oplus} P^{m}(\Sigma)
$$

denote the space of polynomial functions on $\Sigma$, where $P^{m}(\Sigma)$ consists of the functions that are homogeneous of degree $m$. The group $G$ acts on $P(\Sigma)$ by

$$
(g p)(\sigma)=p\left(g^{\prime} \sigma g\right)
$$

for $g \in G, p \in P(\Sigma)$, and $\sigma \in \Sigma$.
Also let $\mathrm{T}=\mathrm{T}^{2 m}(V)$ be the $2 m$ th tensor power of $V$. The group $G$ acts diagonally on T :

$$
g\left(v_{1} \otimes \ldots \otimes v_{2 m}\right)=g v_{1} \otimes \ldots \otimes g v_{2 m}
$$

and the symmetric group $S_{2 m}$ acts on T by permuting the factors:

$$
w\left(v_{1} \otimes \ldots \otimes v_{2 m}\right)=v_{w^{-1}(1)} \otimes \ldots \otimes v_{w^{-1}(2 m)}
$$

where $g \in G, w \in S_{2 m}$, and $v_{1}, \ldots, v_{2 m} \in V$.
Let $\langle u, v\rangle$ be the standard inner product on $V$ for which $\left\langle e_{i}, e_{j}\right\rangle=\delta_{i j}$, and let $\varphi: \mathrm{T} \rightarrow P^{m}(\Sigma)$ denote the linear mapping defined by

$$
\varphi\left(v_{1} \otimes \ldots \otimes v_{2 m}\right)(\sigma)=\prod_{i=1}^{m}\left\langle v_{2 i-1}, \sigma v_{2 i}\right\rangle .
$$

Clearly $\varphi$ commutes with the actions of $G$ on T and on $P^{m}(\Sigma)$, and since $\langle u, \sigma v\rangle=\langle\sigma u, v\rangle=\langle v, \sigma u\rangle$ it follows that $\varphi(h t)=\varphi(t)$ for $t \in \mathbf{T}$ and $h$ in the hyperoctahedral group $H=H_{m}$. Since $\left\langle e_{i}, \sigma e_{j}\right\rangle=\sigma_{i j}$ is the ( $i, j$ ) element of $\sigma \in \Sigma$, it follows that $\varphi$ is surjective. Hence if

$$
\mathrm{T}^{H}=\{t \in \mathrm{~T}: h t=t \text { for all } h \in H\}
$$

is the subspace of T fixed by $H$, we have
(3.9) The mapping $\varphi$ restricted to $\mathbf{T}^{H}$ is a $G$-isomorphism of $\mathbf{T}^{H}$ onto $P^{\boldsymbol{m}}(\mathbf{\Sigma})$.

From Chapter I, Appendix A, §5, we know that T decomposes under the action of $S_{2 m} \times G$ as follows:

$$
\begin{equation*}
\mathbf{T}=\underset{\mu}{\oplus} \mathbf{T}_{\mu} \tag{3.10}
\end{equation*}
$$

where

$$
\mathbf{T}_{\mu} \cong M_{\mu} \otimes F_{\mu}(V)
$$

Here $\mu$ ranges over the partitions of $2 m$ of length $\leqslant n$, and $M_{\mu}$ is an irreducible $S_{2 m}$-module corresponding to $\mu$. Hence by (2.5) we have

$$
\begin{equation*}
\mathbf{T}^{H} \cong \underset{\lambda}{\oplus} F_{2 \lambda}(V) \tag{3.11}
\end{equation*}
$$

as $G$-module, where $\lambda$ ranges over the partitions of $m$ of length $\leqslant n$.
If $p \in P(\Sigma)$, the function $\tilde{p}$ defined by

$$
\tilde{p}(x)=p\left(x^{\prime} x\right)
$$

is a polynomial function on $G$, and the mapping $p \mapsto \tilde{p}$ commutes with the actions of $G$ on $P(\Sigma)$ and $P(G)$. Moreover, it doubles degrees: if $p \in$ $P^{m}(\Sigma)$ then $\tilde{p} \in P^{2 m}(G)$.
(3.12) The mapping $p \mapsto \tilde{p}$ defined above is a G-isomorphism of $P^{m}(\Sigma)$ onto $P^{2 m}(K \backslash G)$, for each $m \geqslant 0$.

Proof. Since $k^{\prime} k=1$ for $k \in K$, we have $\tilde{p}(k x)=\tilde{p}(x)$ for all $k \in K$ and $x \in G$, and hence $\tilde{p} \in P^{2 m}(K \backslash G)$. Next, each positive definite matrix $\sigma$ can be written in the form $\sigma=x^{\prime} x$ for some $x \in G$. Since the positive definite matrices form a non-empty open subset $\Sigma^{+}$of $\Sigma$, a polynomial function $p \in P^{m}(\Sigma)$ that vanishes on $\Sigma^{+}$must vanish identically, from which it follows that the mapping $p \mapsto \tilde{p}$ is injective.

Now from (3.9) and (3.11) we have

$$
\begin{equation*}
P^{m}(\Sigma) \cong \underset{\lambda}{\oplus} F_{2 \lambda}(V) \tag{1}
\end{equation*}
$$

where $\lambda$ runs through the partitions of $m$ of length $\leqslant n$; and since $e_{K}$ is a $G$-homomorphism it follows from (3.3) that $e_{K} P_{\mu}$ is isomorphic to the direct sum of say $m_{\mu}$ copies of $F_{\mu}(V)$, for each partition $\mu$, so that

$$
\begin{equation*}
P^{2 m}(K \backslash G)=\underset{\mu}{\oplus} e_{K} P_{\mu} \cong \underset{\mu}{\oplus} F_{\mu}(V)^{m_{\mu}}, \tag{2}
\end{equation*}
$$

where $\mu$ runs through the partitions of $2 m$ of length $\leqslant n$. We have
already shown that $P^{m}(\Sigma)$ is isomorphic to a submodule of $P^{2 m}(K \backslash G)$, and hence from (1) and (2) we have $m_{\mu} \geqslant 1$ if $\mu$ is even (i.e. $\mu=2 \lambda$ ).

From (2) we have

$$
\begin{aligned}
\sum_{\mu} m_{\mu}^{2} & =\operatorname{dim} \operatorname{End}_{G} P^{2 m}(K \backslash G) \\
& =\operatorname{dim} P^{2 m}(G, K) \quad \text { by (3.6), }
\end{aligned}
$$

which by (3.8) is equal to the number of partitions $\lambda$ of $m$ of length $\leqslant n$. It follows that $m_{\mu}=1$ if $\mu=2 \lambda$ is even, and $m_{\mu}=0$ otherwise. Hence (1) and (2) show that $P^{m}(\Sigma)$ and $P^{2 m}(K \backslash G)$ have the same dimension, and the proof is complete. |

Remark. Let $v_{1}, \ldots, v_{n} \in V$ be the columns of the matrix $x \in G$, so that the $(i, j)$ element of $x^{\prime} x$ is the scalar product $\left\langle v_{i}, v_{j}\right\rangle=v_{i}^{\prime} v_{j}$ of $v_{i}$ and $v_{j}$. Then (3.12) says that any polynomial function $f\left(v_{1}, \ldots, v_{n}\right)$ such that $f\left(k v_{1}, \ldots, k v_{n}\right)=f\left(v_{1}, \ldots, v_{n}\right)$ for all $k \in K$-that is to say, any polynomial invariant of $n$ vectors $v_{1}, \ldots, v_{n}$ under the orthogonal group-is a polynomial in the scalar products $\left\langle v_{i}, v_{j}\right\rangle$. In this form it is part of the 'first main theorem' of invariant theory for the orthogonal group ([W2], Chapter II, §9).

As a corollary of the proof of (3.12) we record
(3.13) (i) The $G$-module $e_{K} P_{\mu}$ is isomorphic to $F_{\mu}(V)$ if $\mu$ is even, and is zero otherwise.
(ii) We have

$$
e_{K} P(G)=P(K \backslash G) \cong \underset{\lambda}{\oplus} F_{2 \lambda}(V)
$$

where $\lambda$ ranges over all partitions of length $\leqslant n . \mid$
Hence the $G$-module $e_{K} P(G)$ is multiplicity-free. The situation is quite analogous to that of $\S 1$, except that the groups $G, K$ involved are now infinite, and the space of all functions on a finite group is replaced by the space of polynomial functions on $G$. Thus ( $G, K$ ) may be called a Gelfand pair.
(3.14) Let $\mu$ be a partition of length $\leqslant n$. Then

$$
\operatorname{dim} F_{\mu}(V)^{K}= \begin{cases}1 & \text { if } \mu \text { is even } \\ 0 & \text { otherwise }\end{cases}
$$

Proof. From (3.3) we have

$$
\begin{equation*}
\operatorname{dim} P_{\mu}^{K}=d_{\mu} \operatorname{dim} F_{\mu}(V)^{K} \tag{1}
\end{equation*}
$$

and on the other hand, from (3.5) and (3.13),

$$
\begin{align*}
\operatorname{dim} P_{\mu}^{K} & =\operatorname{dim} e_{K}^{\prime} P_{\mu}=\operatorname{dim} e_{K} P_{\mu} \\
& = \begin{cases}d_{\mu} & \text { if } \mu \text { is even }, \\
0 & \text { otherwise }\end{cases} \tag{2}
\end{align*}
$$

The result follows from (1) and (2). |
For each partition $\mu$ of length $\leqslant n$, let

$$
P_{\mu}(G, K)=P_{\mu} \cap P(G, K)=\left(e_{K} P_{\mu}\right)^{K}
$$

(3.15) $P_{\mu}(G, K)$ is one-dimensional if $\mu$ is even, and is zero otherwise. Moreover

$$
P(G, K)=\underset{\lambda}{\oplus} P_{2 \lambda}(G, K)
$$

summed over all partitions $\lambda$ of length $\leqslant n$.
This follows from (3.13) and (3.14).
If $f \in \Lambda_{\mathbf{R}}$ we may regard $f$ as a function on $G$ :

$$
f(x)=f\left(\xi_{1}, \ldots, \xi_{n}\right)
$$

where $\xi_{1}, \ldots, \xi_{n}$ are the eigenvalues of $x \in G$. For example,

$$
\begin{equation*}
p_{r}(x)=\operatorname{trace}\left(x^{r}\right) \tag{3.16}
\end{equation*}
$$

since the eigenvalues of $x^{r}$ are $\xi_{i}^{r}$, and

$$
\begin{equation*}
e_{r}(x)=\operatorname{trace}\left(\Lambda^{r} x\right) \quad(r \geqslant 1) \tag{3.17}
\end{equation*}
$$

Since each $f \in \Lambda_{\mathbf{R}}$ is a polynomial in the $e_{r}$, it follows that $f$ is a polynomial function on $G$ that satisfies

$$
\begin{equation*}
f(x y)=f(y x) \tag{3.18}
\end{equation*}
$$

for all $x, y \in G$ (because $x y$ and $y x=y(x y) y^{-1}$ have the same eigenvalues).
In particular (Chapter I, Appendix A, §8), the character of the irreducible representation $R^{\mu}$ of $G$ is the Schur function $s_{\mu}$ :

$$
s_{\mu}=\sum_{i} R_{i i}^{\mu} \in P_{\mu}
$$

as a function on $G$. From (3.13) we have $e_{K} s_{\mu}=0$ unless $\mu$ is an even partition:

$$
\begin{equation*}
\int_{K} s_{\mu}(x k) \mathrm{d} k=0 \tag{3.19}
\end{equation*}
$$

for all $x \in G$, unless $\mu$ is an even partition.
Let $\Omega_{\lambda}=e_{K} s_{2 \lambda}$, or explicitly

$$
\begin{equation*}
\Omega_{\lambda}(x)=\int_{K} s_{2 \lambda}(x k) \mathrm{d} k=\int_{K} s_{2 \lambda}(k x) \mathrm{d} k \tag{3.20}
\end{equation*}
$$

for any partition $\lambda$ of length $\leqslant n$.
(3.21) (i) $\Omega_{\lambda}(1)=1$.
(ii) $\Omega_{\lambda} \in P_{2 \lambda}(G, K)$ and generates the irreducible $G$-submodule $e_{K} P_{2 \lambda}$ of $P(K \backslash G)$.

Moreover, $\Omega_{\lambda}$ is characterized by these two properties.
Proof. (i) We have

$$
\Omega_{\lambda}(1)=\int_{K} s_{2 \lambda}(k) \mathrm{d} k=\operatorname{dim} F_{2 \lambda}(V)^{K}=1
$$

by (3.14).
(ii) Since $s_{2 \lambda} \in P_{2 \lambda}$, it is clear from (3.20) that $\Omega_{\lambda} \in P_{2 \lambda} \cap P(G, K)=$ $P_{2 \lambda}(G, K)$; and since $\Omega_{\lambda} \neq 0$ (by (i) above) it follows that $\Omega_{\lambda}$ generates the irreducible $G$-module $e_{K} P_{2 \lambda}$.

Conversely, any $f \in P_{2 \lambda}(G, K)$ must be a scalar multiple of $\Omega_{\lambda}$, by (3.15); if also $f(1)=1$, then $f=\Omega_{\lambda}$. ।

The function $\Omega_{\lambda}$ is the zonal spherical function of $(G, K)$ associated with the partition $\lambda$.

We return now to the $S_{2 m} \times G$-module $\mathbf{T}=\mathbf{T}^{2 m}(V)$, where $m \leqslant n=$ $\operatorname{dim} V$. From (3.10) and (3.14) we have

$$
\mathbf{T}^{K}=\underset{\lambda}{\oplus} \mathbf{T}_{2 \lambda}^{K} \cong \underset{\lambda}{\oplus} M_{2 \lambda}
$$

as $S_{2 m}$-module, where $\lambda$ ranges over all partitions of $m$. From (2.4) it follows that $\mathbf{T}^{K}$ is isomorphic to the induced module $1_{H_{3}}^{S_{m}}$. Now the tensor

$$
\delta=\sum_{i=1}^{n} e_{i} \otimes e_{i}
$$

is fixed by $K$, and hence $\delta^{\otimes m}=\delta \otimes \ldots \otimes \delta$ ( $m$ factors) lies in $\mathrm{T}^{K}$. Since the subgroup of $S_{2 m}$ that fixes $\delta^{\otimes m}$ is precisely $H$, it follows that $\delta^{8 m}$ generates $\mathrm{T}^{K}$ as $S_{2 m}$-module. Hence by (1.5) the space

$$
\mathbf{T}_{2 \lambda}^{H \times K}=\left(\mathbf{T}_{2 \lambda}^{K}\right)^{H}=\left(\mathbf{T}_{2 \lambda}^{H}\right)^{K}
$$

is one-dimensional, generated by

$$
\begin{equation*}
\omega^{\lambda} \delta^{\otimes m}=\sum_{w \in S_{2 m}} \omega^{\lambda}(w) \cdot w \delta^{\otimes m} \tag{3.22}
\end{equation*}
$$

We need now to compute the image of this element of $\mathrm{T}^{H}$ under the isomorphism $\varphi: \mathrm{T}^{H} \rightarrow P^{m}(\Sigma)$ (3.9). This is given by

$$
\begin{equation*}
\varphi\left(w \delta^{\circ m}\right)=p_{\rho} \tag{3.23}
\end{equation*}
$$

where $\rho$ is the coset-type of $w$.
Proof. Let $f_{w}=\varphi\left(w \delta^{8 m}\right)$. For any $h \in H$ we have $f_{w h}=f_{w}$, since $h \delta^{8 m}=$ $\delta^{8 m}$; also $f_{h w}=f_{w}$, since $\varphi(h t)=\varphi(t)$ for all $t \in \mathbf{T}$. Hence $f_{w}$ depends only on the double coset $H_{\rho}$ to which $w$ belongs. By taking $w$ to be the product of consecutive cycles of lengths $2 \rho_{1}, 2 \rho_{2}, \ldots$, we reduce to the case where $w$ is the $2 m$-cycle $(1,2, \ldots, 2 m)$. Since

$$
\delta^{\otimes m}=\sum e_{i_{1}} \otimes e_{i_{1}} \otimes \ldots \otimes e_{i_{m}} \otimes e_{i_{m}},
$$

it follows that

$$
w \delta^{\otimes m}=\sum e_{i_{m}} \otimes e_{i_{1}} \otimes e_{i_{1}} \otimes \ldots \otimes e_{i_{m-1}} \otimes e_{i_{m}}
$$

and hence that

$$
\begin{aligned}
f_{w}(\sigma) & =\sum \sigma_{i_{m} i_{1}} \sigma_{i_{1} i_{2}} \ldots \sigma_{i_{m-1} i_{m}} \\
& =\operatorname{trace}\left(\sigma^{m}\right)=p_{m}(\sigma)
\end{aligned}
$$

We can now express the zonal spherical function $\Omega_{\lambda}$ in terms of the zonal polynomial $Z_{\lambda}$ defined in §2:
(3.24) We have

$$
\Omega_{\lambda}(x)=Z_{\lambda}\left(x^{\prime} x\right) / Z_{\lambda}\left(1_{n}\right)
$$

for all $x \in G$.
Proof. Let $\varphi_{\lambda}=\varphi\left(\omega^{\lambda} \delta^{\otimes m}\right)$, and define $\tilde{\varphi}_{\lambda} \in P(G)$ by $\tilde{\varphi}_{\lambda}(x)=\varphi_{\lambda}\left(x^{\prime} x\right)$. It follows from (3.12) that $\tilde{\varphi}_{\lambda}$ is a generator of the one-dimensional space $P_{2 \lambda}(G, K)$ that is the image of $\mathrm{T}_{2 \lambda}^{H \times K}$ under the composite isomorphism

$$
\mathrm{T}^{H} \rightarrow P^{M}(\Sigma) \rightarrow P^{2 m}(K \backslash G)
$$

Hence, by (3.21), $\Omega_{\lambda}$ is a scalar multiple of $\tilde{\varphi}_{\lambda}$, namely

$$
\begin{equation*}
\Omega_{\lambda}(x)=\varphi_{\lambda}\left(x^{\prime} x\right) / \varphi_{\lambda}\left(1_{n}\right) \tag{1}
\end{equation*}
$$

since $\Omega_{\lambda}(1)=1$. On the other hand, it follows from (3.22) and (3.23) that

$$
\begin{equation*}
\varphi_{\lambda}=\sum_{\rho}\left|H_{\rho}\right| \omega_{\rho}^{\lambda} p_{\rho}=\left|H_{m}\right| Z_{\lambda} \tag{2}
\end{equation*}
$$

by (2.3) and (2.12). The result now follows from (1) and (2). |

## Examples

1. (a) Let $\lambda$ be a partition of length $n$ and let $\mu=\left(\lambda_{1}-1, \ldots, \lambda_{n}-1\right)$. If $x \in G$ we have

$$
\begin{aligned}
\Omega_{\lambda}(x) & =\int_{K} s_{2 \lambda}(x k) \mathrm{d} k \\
& =\int_{K}(\operatorname{det} x k)^{2} s_{2 \mu}(x k) \mathrm{d} k \\
& =(\operatorname{det} x)^{2} \Omega_{\mu}(x)
\end{aligned}
$$

and hence if $\xi=\operatorname{diag}\left(\xi_{1}, \ldots, \xi_{n}\right)$ is a diagonal matrix we have

$$
\begin{equation*}
\frac{Z_{\lambda}(\xi)}{Z_{\lambda}\left(1_{n}\right)}=\xi_{1} \ldots \xi_{n} \frac{Z_{\mu}(\xi)}{Z_{\mu}\left(1_{n}\right)} \tag{1}
\end{equation*}
$$

(b) Let $a_{\lambda}$ denote the coefficient of $\xi^{\lambda}$ in $Z_{\lambda}(\xi)$. From (1) above we have

$$
a_{\lambda} / a_{\mu}=Z_{\lambda}\left(1_{n}\right) / Z_{\mu}\left(1_{n}\right)=c_{\lambda}(n) / c_{\mu}(n)
$$

by (2.25). If $s$ is the square ( $i, \lambda_{i}$ ) at the right-hand end of the $i$ th row of $\lambda$, and $t$ is the square ( $i, 1$ ) at the left-hand end of the same row, we have $a^{\prime}(s)=a(t)$ and $n-l^{\prime}(s)=l(t)+1$, from which it follows that

$$
c_{\lambda}(n) / c_{\mu}(n)=h_{1}(2 \lambda) / h_{1}(2 \mu)
$$

and hence, by induction on $|\lambda|$, that $a_{\lambda}=h_{1}(2 \lambda)$ (2.26).
2. Show that if $t \in \mathbf{R}$ and $x \in G$,

$$
\int_{K} \exp (t \operatorname{trace} x k) \mathrm{d} k=\sum_{\lambda} \frac{t^{|2 \lambda|}}{h(2 \lambda)} \Omega_{\lambda}(x) .
$$

(We have

$$
p_{1}^{m}=\sum_{|\mu|=m} \frac{m!}{h(\mu)} s_{\mu}
$$

(Chapter I, §7), hence

$$
\begin{equation*}
\int_{K}(\operatorname{trace} x k)^{m} \mathrm{~d} k=\sum_{\mu} \frac{m!}{h(\mu)} \int_{K} s_{\mu}(x k) \mathrm{d} k \tag{1}
\end{equation*}
$$

summed over the partitions $\mu$ of $m$. The integral on the right is zero unless $\mu=2 \lambda$
for some partition $\lambda$, hence the integral (1) is zero if $m$ is odd; and if $m=2 r$ is even it is equal to

$$
\left.\sum_{|\lambda|=r} \frac{(2 r)!}{h(2 \lambda)} \Omega_{\lambda}(x) .\right)
$$

3. For each partition $\mu$ of length $\leqslant n$, the irreducible $G$-module $F_{\mu}(V)$ has a basis indexed by the column-strict tableaux $T$ of shape $\mu$, such that relative to this basis a diagonal matrix $x=\operatorname{diag}\left(x_{1}, \ldots, x_{n}\right) \in G$ is represented by a diagonal matrix $R^{\mu}(x)$ with diagonal entries $x^{T}$ (Chapter I, Appendix A, §8, Example 2). Hence

$$
\begin{aligned}
s_{\mu}(x k) & =\operatorname{trace} R^{\mu}(x) R^{\mu}(k) \\
& =\sum_{T} x^{T} R_{T, T}^{\mu}(k)
\end{aligned}
$$

and therefore

$$
\begin{aligned}
\Omega_{\lambda}(x) & =\int_{K} s_{2 \lambda}(x k) \mathrm{d} k \\
& =\sum_{T} x^{T} \int_{K} R_{T, T}^{2 \lambda}(k) \mathrm{d} k
\end{aligned}
$$

summed over the column-strict tableaux $T$ of shape $2 \lambda$ that can be formed with the numbers $1,2, \ldots, n$. Each monomial $x^{T}$ in this sum belongs to a monomial symmetric function $m_{\nu}\left(x_{1}, \ldots, x_{n}\right)$, where $\nu \leqslant 2 \lambda$, and hence $\Omega_{\lambda}(x)$ is a linear combination of these, since it is symmetric in $x_{1}, \ldots, x_{n}$. But $\Omega_{\lambda}(x)$ is unaltered by replacing any $x_{i}$ by $-x_{i}$, and hence is a symmetric polynomial in $x_{1}^{2}, \ldots, x_{n}^{2}$. Consequently only the $m_{\nu}$ such that $\nu$ is even, say $\nu=2 \mu$, will occur, and so $\Omega_{\lambda}(x)$ is of the form

$$
\Omega_{\lambda}(x)=\sum_{\mu<\lambda} a_{\lambda \mu} m_{\mu}\left(x_{1}^{2}, \ldots, x_{n}^{2}\right),
$$

since $2 \mu \leqslant 2 \lambda$ if and only if $\mu \leqslant \lambda$. This gives an independent proof of (2.22) and hence of (2.23).

## Notes and references

The material in this section is due to A. T. James [J4].

## 4. Integral formulas

(4.1) Let $f \in P(G), f \neq 0$. Then $f$ is a zonal spherical function of $(G, K)$ if and only if

$$
\int_{K} f(x k y) \mathrm{d} k=f(x) f(y)
$$

for all $x, y \in G$.

Proof. Let $\lambda$ be a partition of length $\leqslant n$, and let

$$
\begin{aligned}
\varphi_{y}(x) & =\int_{K} \Omega_{\lambda}(x k y) \mathrm{d} k \\
& =\int_{K} \int_{K} s_{2 \lambda}\left(x k y k_{1}\right) \mathrm{d} k_{1} \mathrm{~d} k
\end{aligned}
$$

by (3.16). Since $s_{2 \lambda}$, as a function on $G$, lies in $P_{2 \lambda}$ it is clear that $\varphi_{y} \in P_{2 \lambda} \cap P(G, K)=P_{2 \lambda}(G, K)$, and hence by (3.15) and (3.17) it follows that $\varphi_{y}=c \Omega_{\lambda}$ for some $c \in \mathbf{R}$. Since $\Omega_{\lambda}(1)=1$, we have

$$
c=\varphi_{y}(1)=\int_{K} \Omega_{\lambda}(k y) \mathrm{d} k=\Omega_{\lambda}(y)
$$

and hence

$$
\begin{equation*}
\int_{K} \Omega_{\lambda}(x k y) \mathrm{d} k=\Omega_{\lambda}(y) \Omega_{\lambda}(x) \tag{1}
\end{equation*}
$$

for all $x, y \in G$.
Conversely, suppose that $f \in P(G)$ is such that $f \neq 0$ and

$$
\int_{K} f(x k y) \mathrm{d} k=f(x) f(y)
$$

for all $x, y \in G$. By choosing $y$ such that $f(y) \neq 0$ we see that $f\left(x k_{1}\right)=f(x)$ for all $x \in G$ and $k_{1} \in K$, and likewise that $f\left(k_{1} y\right)=f(y)$ for all $y \in G$ and $k_{1} \in K$. Hence $f \in P(G, K)$, say

$$
f=\sum_{\lambda} a_{\lambda} \Omega_{\lambda}
$$

by (3.15) and (3.21). We have then

$$
f(x) f(y)=\int_{K} f(x k y) \mathrm{d} k=\sum_{\lambda} a_{\lambda} \int_{K} \Omega_{\lambda}(x k y) \mathrm{d} k
$$

and hence by (1)

$$
\sum a_{\lambda} \Omega_{\lambda}(x) f(y)=\sum_{\lambda} a_{\lambda} \Omega_{\lambda}(x) \Omega_{\lambda}(y) .
$$

Since the $\Omega_{\lambda}$ are linearly independent, it follows that $a_{\lambda}\left(f-\Omega_{\lambda}\right)=0$ for all $\lambda$. Since not all the $a_{\lambda}$ are zero, we conclude that $f=\Omega_{\lambda}$ for some $\lambda$. |
(4.2) Let $\lambda$ be a partition of length $\leqslant n$. Then

$$
\int_{K} Z_{\lambda}\left(\sigma k \tau k^{\prime}\right) \mathrm{d} k=\frac{Z_{\lambda}(\sigma) Z_{\lambda}(\tau)}{Z_{\lambda}\left(1_{n}\right)}
$$

for all $\sigma, \tau \in \Sigma$.
Proof. Both sides of (4.2) are polynomial functions of $\sigma$ and $\tau$, hence we may assume that $\sigma$ and $\tau$ are positive definite, say $\sigma=x^{\prime} x$ and $\tau=y y^{\prime}$. Then $\sigma k \tau k^{\prime}=x^{\prime} x k y y^{\prime} k^{\prime}$, and hence by (3.18) and (3.24)

$$
Z_{\lambda}\left(\sigma k \tau k^{\prime}\right)=Z_{\lambda}\left(1_{n}\right) \Omega_{\lambda}(x k y) .
$$

(4.2) now follows from (4.1). |

Let $\mathrm{d} x=\prod_{i, j=1}^{n} \mathrm{~d} x_{i j}$ be Lebesgue measure on $G=G L_{n}(\mathbf{R})$, and let

$$
\mathrm{d} \nu(x)=(2 \pi)^{-n^{2} / 2} \exp \left(-\frac{1}{2} \operatorname{trace} x^{\prime} x\right) \mathrm{d} x,
$$

the 'normal distribution' of the statisticians. Since trace $x^{\prime} x=\Sigma_{i, j} x_{i j}^{2}$ and

$$
\int_{-\infty}^{\infty} e^{-t^{2} / 2} \mathrm{~d} t=(2 \pi)^{1 / 2}
$$

it follows that

$$
\int_{G} \mathrm{~d} \nu(x)=1 .
$$

The measure $\nu$ is $K$-invariant, that is to say

$$
\mathrm{d} \nu\left(k_{1} x k_{2}\right)=\mathrm{d} \nu(x)
$$

for $k_{1}, k_{2} \in K$. For if $y=k_{1} x k_{2}$ we have trace $y^{\prime} y=\operatorname{trace} x^{\prime} x$ and $\mathrm{d} y=\mathrm{d} x$.
(4.3) For each integer $m \geqslant 0$ and all $\sigma, \tau \in \Sigma$ we have

$$
\int_{G}\left(\operatorname{trace} \sigma x \tau x^{\prime}\right)^{m} \mathrm{~d} \nu(x)=2^{m} m!\sum_{|\lambda|-m} \frac{Z_{\lambda}(\sigma) Z_{\lambda}(\tau)}{h(2 \lambda)}
$$

where $h(2 \lambda)$ is the product of the hook-lengths of the partition $2 \lambda$.
Proof. We may write

$$
\sigma=k_{1}^{\prime} \xi k_{1}, \quad \tau=k_{2}^{\prime} \eta k_{2}
$$

where $\xi=\operatorname{diag}\left(\xi_{1}, \ldots, \xi_{n}\right)$ and $\eta=\operatorname{diag}\left(\eta_{1}, \ldots, \eta_{n}\right)$ are diagonal matrices, and $k_{1}, k_{2} \in K$. Then

$$
\text { trace } \begin{aligned}
\sigma x \tau x^{\prime} & =\operatorname{trace} k_{1}^{\prime} \xi k_{1} x k_{2}^{\prime} \eta k_{2} x^{\prime} \\
& =\operatorname{trace} \xi y \eta y^{\prime}
\end{aligned}
$$

where $y=k_{1} x k_{2}^{\prime}$, and hence by $K$-invariance of $\nu$

$$
\int_{G}\left(\operatorname{trace} \sigma x \tau x^{\prime}\right)^{m} \mathrm{~d} \nu(x)=\int_{G}\left(\operatorname{trace} \xi x \eta x^{\prime}\right)^{m} \mathrm{~d} \nu(x)
$$

which is the coefficient of $t^{m} / m!$ in

$$
\begin{equation*}
\int_{G} \exp \left(t \text { trace } \xi x \eta x^{\prime}\right) \mathrm{d} \nu(x) . \tag{1}
\end{equation*}
$$

Now

$$
t \text { trace } \xi x \eta x^{\prime}-\frac{1}{2} \text { trace } x^{\prime} x=-\frac{1}{2} \sum_{i, j}\left(1-2 t \xi_{i} \eta_{j}\right) x_{i j}^{2}
$$

Hence the integral (1) is equal to

$$
\prod_{i, j}\left(1-2 t \xi_{i} \eta_{j}\right)^{-1 / 2}
$$

which by (2.18) is equal to

$$
\begin{equation*}
\sum_{\lambda}(2 t)^{|\lambda|} Z_{\lambda}(\sigma) Z_{\lambda}(\tau) / h(2 \lambda) \tag{2}
\end{equation*}
$$

since $Z_{\lambda}(\sigma)=Z_{\lambda}(\xi)$ and $Z_{\lambda}(\tau)=Z_{\lambda}(\eta)$. The result now follows from equating the coefficients of $t^{m}$ in (1) and (2).
(4.4) Let $\sigma, \tau \in \boldsymbol{\Sigma}$. Then

$$
\int_{G} Z_{\lambda}\left(\sigma x \tau x^{\prime}\right) \mathrm{d} \nu(x)=Z_{\lambda}(\sigma) Z_{\lambda}(\tau)
$$

for all partitions $\lambda$ of length $\leqslant n$.
Proof. Let $I_{\lambda}(\sigma, \tau)$ denote the integral on the left. Then we have

$$
\begin{aligned}
I_{\lambda}(\sigma, \tau) & =\int_{K}\left(\int_{G} Z_{\lambda}\left(\sigma k x \tau x^{\prime} k^{\prime}\right) \mathrm{d} \nu(x)\right) \mathrm{d} k \\
& =\int_{G}\left(\int_{K} Z_{\lambda}\left(\sigma k x \tau x^{\prime} k^{\prime}\right) \mathrm{d} k\right) \mathrm{d} \nu(x) \\
& =\int_{G} \frac{Z_{\lambda}(\sigma) Z_{\lambda}\left(x \tau x^{\prime}\right)}{Z_{\lambda}\left(1_{n}\right)} \mathrm{d} \nu(x)
\end{aligned}
$$

by (4.2). Hence

$$
\begin{align*}
I_{\lambda}(\sigma, \tau) & =\frac{Z_{\lambda}(\sigma)}{Z_{\lambda}\left(1_{n}\right)} I_{\lambda}\left(1_{n}, \tau\right) \\
& =\frac{Z_{\lambda}(\sigma) Z_{\lambda}(\tau)}{Z_{\lambda}\left(1_{n}\right)^{2}} I_{\lambda}\left(1_{n}, 1_{n}\right) \tag{1}
\end{align*}
$$

by repeating the argument.

On the other hand we have from (2.16)

$$
p_{1}^{m}=2^{m} m!\sum_{|\lambda|=m} h(2 \lambda)^{-1} Z_{\lambda}
$$

and therefore

$$
\begin{aligned}
\int_{G}\left(\operatorname{trace} \sigma x \tau x^{\prime}\right)^{m} \mathrm{~d} \nu(x) & =2^{m} m!\sum_{|\lambda|=m} h(2 \lambda)^{-1} I_{\lambda}(\sigma, \tau) \\
& =2^{m} m!\sum_{|\lambda|=m} \frac{Z_{\lambda}(\sigma) Z_{\lambda}(\tau)}{h(2 \lambda)} \cdot \frac{I_{\lambda}\left(1_{n}, 1_{n}\right)}{Z_{\lambda}\left(1_{n}\right)^{2}} .
\end{aligned}
$$

It now follows from (4.3) that

$$
I_{\lambda}\left(1_{n}, 1_{n}\right)=Z_{\lambda}\left(1_{n}\right)^{2}
$$

and hence from (1) that $I_{\lambda}(\sigma, \tau)=Z_{\lambda}(\sigma) Z_{\lambda}(\tau)$. |
By taking $\tau=1_{n}$ in (4.4) we have

$$
\begin{equation*}
\int_{G} Z_{\lambda}\left(x^{\prime} \sigma x\right) \mathrm{d} \nu(x)=Z_{\lambda}\left(1_{n}\right) Z_{\lambda}(\sigma) . \tag{4.5}
\end{equation*}
$$

In other words, the $Z_{\lambda}$ are eigenfunctions of the linear operator $U_{n}: \Lambda_{n} \rightarrow$ $\Lambda_{n}$ defined by

$$
\begin{equation*}
\left(U_{n} f\right)(\sigma)=\int_{G} f\left(x^{\prime} \sigma x\right) \mathrm{d} \nu(x) \tag{4.6}
\end{equation*}
$$

and the eigenvalue of $U_{n}$ corresponding to $Z_{\lambda}$ is $Z_{\lambda}\left(1_{n}\right)$.
As in Chapter I, Appendix A, §8, Example 5, for each partition $\mu$ of length $\leqslant n$ let $\Delta_{\mu}$ be the polynomial function on $G$ defined by

$$
\Delta_{\mu}(x)=\prod_{i \geqslant 1} \operatorname{det}\left(x^{\left(\mu_{i}^{\prime}\right)}\right)
$$

for $x=\left(x_{i j}\right) \in G$, where $x^{(r)}=\left(x_{i j}\right)_{1<i, j \leqslant r}$ for $1 \leqslant r \leqslant n$. Then (loc. cit.) the $G$-submodule $E_{\mu}$ of $P(G)$ generated by $\Delta_{\mu}$ is irreducible and isomorphic to $F_{\mu}(V)$. We have

$$
\begin{equation*}
\Delta_{\mu}(x b)=\Delta_{\mu}\left(b^{\prime} x\right)=\Delta_{\mu}(b) \Delta_{\mu}(x) \tag{4.7}
\end{equation*}
$$

if $b \in G$ is upper triangular.
Now let $B^{+}$be the subgroup of $G$ consisting of the upper triangular matrices ( $b_{i j}$ ) with positive diagonal elements $b_{i i}$. If $x \in G$, Gram-Schmidt
orthogonalization applied to the successive columns of the matrix $x$ shows that

$$
\begin{equation*}
x=k b \tag{4.8}
\end{equation*}
$$

with $k \in K$ and $b \in B^{+}$; moreover, this factorization of $x$ is unique, since $K \cap B^{+}=\{1\}$.
(4.9) We have

$$
e_{K} \Delta_{2 \lambda}(x)=c_{\lambda} \Delta_{\lambda}\left(x^{\prime} x\right)
$$

where $c_{\lambda}$ is a positive constant, independent of $x \in G$.
Proof. If $x=k b$ as above then

$$
\begin{aligned}
e_{K} \Delta_{2 \lambda}(k b) & =\int_{K} \Delta_{2 \lambda}\left(k_{1} k b\right) \mathrm{d} k_{1} \\
& =\Delta_{2 \lambda}(b) \int_{K} \Delta_{2 \lambda}\left(k_{1}\right) \mathrm{d} k_{1} \\
& =c_{\lambda} \Delta_{\lambda}\left(b^{\prime} b\right)=c_{\lambda} \Delta_{\lambda}\left(x^{\prime} x\right)
\end{aligned}
$$

by use of (4.7), where

$$
c_{\lambda}=\int_{K} \Delta_{2 \lambda}(k) \mathrm{d} k
$$

is positive, since $\Delta_{2 \lambda}=\Delta_{\lambda}^{2}$ is $\geqslant 0$ on $G$, and is $>0$ on a dense open subset of $K$.
(4.10) We have

$$
\int_{K} \Delta_{\lambda}\left(k^{\prime} \sigma k\right) \mathrm{d} k=Z_{\lambda}(\sigma) / Z_{\lambda}\left(1_{n}\right)
$$

for $\boldsymbol{\sigma} \in \boldsymbol{\Sigma}$.
Proof. We may assume that $\sigma$ is positive definite, say $\sigma=x^{\prime} x(x \in G)$, since both sides of (4.10) are polynomial functions on $\Sigma$. From (4.9) it follows that the function $x \rightarrow \Delta_{\lambda}\left(x^{\prime} x\right)$ generates the irreducible $G$-module $P_{2 \lambda}(K \backslash G) \cong F_{2 \lambda}(V)$, and hence that

$$
\begin{aligned}
\int_{K} \Delta_{\lambda}\left(k^{\prime} x^{\prime} x k\right) \mathrm{d} k & =\Omega_{\lambda}(x) \\
& =Z_{\lambda}\left(x^{\prime} x\right) / Z_{\lambda}\left(1_{n}\right)
\end{aligned}
$$

by (3.24). |
(4.11) We have

$$
\int_{G} \Delta_{\lambda}\left(x^{\prime} \sigma x\right) \mathrm{d} \nu(x)=Z_{\lambda}(\sigma)
$$

for $\boldsymbol{\sigma} \in \boldsymbol{\Sigma}$.
Proof. Since the measure $\nu$ is $K$-invariant we have

$$
\begin{aligned}
\int_{G} \Delta_{\lambda}\left(x^{\prime} \sigma x\right) \mathrm{d} \nu(x) & =\int_{K}\left(\int_{G} \Delta_{\lambda}\left(k^{\prime} x^{\prime} \sigma x k\right) \mathrm{d} \nu(x)\right) \mathrm{d} k \\
& =\int_{G}\left(\int_{K} \Delta_{\lambda}\left(k^{\prime} x^{\prime} \sigma x k\right) \mathrm{d} k\right) \mathrm{d} \nu(x) \\
& =Z_{\lambda}\left(1_{n}\right)^{-1} \int_{G} Z_{\lambda}\left(x^{\prime} \sigma x\right) \mathrm{d} \nu(x) \\
& =Z_{\lambda}(\sigma)
\end{aligned}
$$

by Fubini's theorem, (4.10), and (4.5). |
In particular $\left(\sigma=1_{n}\right)$

$$
\begin{equation*}
Z_{\lambda}\left(1_{n}\right)=\int_{G} \Delta_{\lambda}\left(x^{\prime} x\right) \mathrm{d} \nu(x) \tag{4.12}
\end{equation*}
$$

We shall now calculate this integral directly, using the factorization $x=k b$ (4.8). Let

$$
\mathrm{d} b=\prod_{i<j} \mathrm{~d} b_{i j}
$$

be Lebesgue measure on $B^{+}$, and let

$$
\mathrm{d} \nu(b)=(2 \pi)^{-n(n+1) / 4} \exp \left(-\frac{1}{2} \text { trace } b^{\prime} b\right) \mathrm{d} b
$$

The measures $\mathrm{d} x, \mathrm{~d} k, \mathrm{~d} b$ on $G, K, B^{+}$respectively are related by

$$
\mathrm{d} x=c_{n} \Delta_{\delta}(b) \mathrm{d} k \mathrm{~d} b
$$

where $\delta=(n-1, n-2, \ldots, 1,0)$ and $c_{n}$ is a positive real number depending only on $n$ (see [B7], Chapter VII, §3, or Example 2 below). Since $x=k b$ we have $x^{\prime} x=b^{\prime} b$ and hence

$$
\begin{equation*}
\mathrm{d} \nu(x)=c_{n}^{\prime} \Delta_{\delta}(b) \mathrm{d} k \mathrm{~d} \nu(b) \tag{4.13}
\end{equation*}
$$

where $c_{n}^{\prime}=(2 \pi)^{-n(n-1) / 4} c_{n}$.

From (4.7), (4.12), and (4.13) it follows that

$$
\begin{align*}
Z_{\lambda}\left(1_{n}\right) & =c_{n}^{\prime} \int_{B^{+}} \Delta_{\lambda}(b)^{2} \Delta_{\delta}(b) \mathrm{d} \nu(b) \\
& =c_{n}^{\prime} \prod_{i=1}^{n}(2 \pi)^{-1 / 2} \int_{0}^{\infty} b_{i i}^{2 \lambda_{i}+n-i} e^{-b_{i i}^{2} / 2} \mathrm{~d} b_{i i} \\
& =(2 \pi)^{-n / 2} c_{n}^{\prime} \prod_{i=1}^{n} 2^{\lambda_{1}+(n-i-1) / 2} \Gamma\left(\lambda_{i}+\frac{1}{2}(n-i+1)\right) . \tag{4.14}
\end{align*}
$$

Since $Z_{0}=1$ we obtain

$$
\begin{aligned}
Z_{\lambda}\left(1_{n}\right) & =\frac{Z_{\lambda}\left(1_{n}\right)}{Z_{0}\left(1_{n}\right)}=\prod_{i=1}^{n} 2^{\lambda_{i}} \frac{\Gamma\left(\lambda_{i}+\frac{1}{2}(n-i+1)\right)}{\Gamma\left(\frac{1}{2}(n-i+1)\right)} \\
& =2^{|\lambda|} \prod_{i=1}^{n} \prod_{j=1}^{\lambda_{i}}\left(\frac{1}{2}(n-i+1)+j-1\right)
\end{aligned}
$$

or equivalently

$$
\begin{equation*}
Z_{\lambda}\left(1_{n}\right)=\prod_{s \in \lambda}\left(n+2 a^{\prime}(s)-l^{\prime}(s)\right)=c_{\lambda}(n) \tag{4.15}
\end{equation*}
$$

in agreement with (2.25).

## Examples

1. If $k=\left(k_{i j}\right) \in K$, let

$$
\omega_{i j}(k)=\sum_{r=1}^{n} k_{r i} \mathrm{~d} k_{r j}
$$

a differential 1-form on $K$.
(a) Since $\Sigma_{r} k_{r i} k_{r j}=\delta_{i j}$, it follows that $\omega_{i j}+\omega_{j i}=0$.
(b) If $a$ is a fixed element of $K$ then $\omega_{i j}(a k)=\omega_{i j}(k)$, i.e. the $\omega_{i j}$ are left-invariant differential forms on $K$.
(c) Hence

$$
\omega_{K}=\bigwedge_{i>j} \omega_{i j}
$$

is a left-invariant differential form of degree $\frac{1}{2} n(n-1)=\operatorname{dim} K$ (defined only up to sign, because we have not specified the order of the factors in the exterior product); moreover it is not identically zero, since $\omega_{K}\left(1_{n}\right)=\Lambda_{i>j} \mathrm{~d} k_{i j}$. Hence (see e.g. [D5], (16.24.1)) $\omega_{K}$ determines a Haar measure $\mathrm{d}^{*} k$ on $K$. Since Haar measure is unique up to a positive scalar multiple, it follows that

$$
\mathrm{d}^{*} k=c_{n} \mathrm{~d} k
$$

for some $c_{n}>0$ depending only on $n$. The constant $c_{n}$ is calculated in Example 2(d) below.
2. (a) For $x=\left(x_{i j}\right) \in G$ let

$$
\omega_{G}(x)=\bigwedge_{i, j} \mathrm{~d} x_{i j}
$$

be the differential form on $G$ (defined only up to sign, as in Example 1) that corresponds to Lebesgue measure $\mathrm{d} x$. If $a \in G$ we have

$$
\omega_{G}(a x)= \pm \omega_{G}(x a)= \pm(\operatorname{det} a)^{n} \omega_{G}(x) .
$$

(b) For $b=\left(b_{i j}\right) \in B^{+}$, let

$$
\omega_{B^{+}}(b)=\bigwedge_{i<j} \mathrm{~d} b_{i j}
$$

be the differential form on $B^{+}$that corresponds to Lebesgue measure $\mathrm{d} b$. If $a \in B^{+}$we have

$$
\begin{aligned}
& \omega_{B^{+}}(b a)= \pm(\operatorname{det} a)^{n} \Delta_{\delta}(a)^{-1} \omega_{B^{+}}(b), \\
& \omega_{B^{+}}(a b)= \pm(\operatorname{det} a) \Delta_{\delta}(a) \omega_{B^{+}}(b)
\end{aligned}
$$

(c) From the factorization $x=k b$ (4.8) we have

$$
(\mathrm{d} x)=(\mathrm{d} k) b+k(\mathrm{~d} b)
$$

where ( $\mathrm{d} x$ ) denotes the matrix of differentials ( $\mathrm{d} x_{i j}$ ), and likewise for ( $\mathrm{d} k$ ) and (db). Hence

$$
k^{\prime}(\mathrm{d} x) b^{-1}=k^{\prime}(\mathrm{d} k)+(\mathrm{d} b) b^{-1}
$$

in which the matrix $k^{\prime}(\mathrm{d} k)=\left(\omega_{i j}\right)$ (Example 1) is skew-symmetric, and the matrix ( $\mathrm{d} b$ ) $b^{-1}$ is upper triangular. Deduce from (a) and (b) above that

$$
\omega_{G}= \pm \omega_{K} \wedge \Delta_{\delta} \omega_{B^{+}}
$$

and hence that

$$
\begin{aligned}
\mathrm{d} x & =\mathrm{d}^{*} k \cdot \Delta_{\delta}(b) \mathrm{d} b \\
& =c_{n} \Delta_{\delta}(b) \mathrm{d} k \mathrm{~d} b .
\end{aligned}
$$

(d) Deduce from (4.14) (with $\lambda=0$ ) that

$$
c_{n}=v_{1} v_{2} \ldots v_{n}
$$

where $v_{r}=2 \pi^{r / 2} / \Gamma\left(\frac{1}{2} r\right)$ (which is the 'area' of the unit sphere in $\mathbf{R}^{r}: v_{1}=2$, $\left.v_{2}=2 \pi, v_{3}=4 \pi, \ldots\right)$.
3. Let $A$ be the group of diagonal matrices $\xi=\operatorname{diag}\left(\xi_{1}, \ldots, \xi_{n}\right)$ with diagonal elements $\xi_{i}>0$, and let $\Sigma^{+} \subset \Sigma$ be the cone of positive definite symmetric matrices. Orthogonal reduction of a real symmetric matrix shows that each $\sigma \in \Sigma^{+}$ can be written in the form

$$
\begin{equation*}
\sigma=k \xi k^{\prime} \tag{1}
\end{equation*}
$$

with $k \in K$ and $\xi \in A$. The $\xi_{i}$ are the eigenvalues of $\sigma$, and hence the diagonal matrix $\boldsymbol{\xi}$ is unique up to conjugation by a permutation matrix. Moreover, if the $\boldsymbol{\xi}_{i}$ are all distinct, the columns of $K$ are unique up to sign. From this it follows that the fibre over $\sigma \in \Sigma^{+}$of the mapping $K \times A \rightarrow \Sigma^{+}$defined by (1) is a finite set of cardinality $2^{n} n!=\left|H_{n}\right|$ whenever the discriminant of $\sigma$ does not vanish, hence almost everywhere on $\Sigma^{+}$.

From (1) we have

$$
(\mathrm{d} \sigma)=(\mathrm{d} k) \xi k^{\prime}+k(\mathrm{~d} \xi) k^{\prime}+k \xi(\mathrm{~d} k)^{\prime}
$$

where $(\mathrm{d} \sigma)$ denotes the matrix of differentials $\left(\mathrm{d} \sigma_{i j}\right)$, and likewise for $(\mathrm{d} k),(\mathrm{d} \xi)$. Hence

$$
k^{\prime}(\mathrm{d} \sigma) k=k^{\prime}(\mathrm{d} k) \xi+(\mathrm{d} \xi)+\xi(\mathrm{d} k)^{\prime} k
$$

the $(i, j)$ element of which is the differential 1-form

$$
\omega_{i j} \xi_{j}+\delta_{i j} \mathrm{~d} \xi_{i}+\xi_{i} \omega_{j i}=\left(\xi_{j}-\xi_{i}\right) \omega_{j i}+\delta_{i j} \mathrm{~d} \xi_{i}
$$

in the notation of Example 1. Hence if

$$
\omega_{\Sigma^{+}}=\bigwedge_{i<j} \mathrm{~d} \sigma_{i j}, \quad \omega_{A}=\bigwedge_{i=1}^{n} \mathrm{~d} \xi_{i}
$$

(defined only up to sign, as in Example 2) we have

$$
\begin{equation*}
\omega_{\Sigma^{+}}= \pm \omega_{K} \wedge a_{\delta} \omega_{A} \tag{2}
\end{equation*}
$$

where $a_{\delta}(\xi)=\Pi_{i<j}\left(\xi_{i}-\xi_{j}\right)$. It follows that

$$
\begin{align*}
\mathrm{d} \sigma & =\frac{1}{2^{n} \cdot n!}\left|a_{\delta}(\xi)\right| \mathrm{d} k^{*} \mathrm{~d} \xi \\
& =\frac{c_{n}}{2^{n} \cdot n!}\left|a_{\delta}(\xi)\right| \mathrm{d} k \mathrm{~d} \xi \tag{3}
\end{align*}
$$

4. Let $m \geqslant n$ and let $X=M_{m, n}(\mathbf{R})$ be the vector space of all real matrices $x=\left(x_{i j}\right)$ with $m$ rows and $n$ columns. Also let $\Sigma_{m}$ (resp. $\Sigma_{n}$ ) denote the space of real symmetric matrices of size $m \times m$ (resp. $n \times n$ ).

If $x, y \in X$ we have $\operatorname{trace}\left(x y^{\prime}\right)=\operatorname{trace}\left(y^{\prime} x\right)$, and more generally

$$
\begin{aligned}
e_{r}\left(x y^{\prime}\right) & =\operatorname{trace} \wedge^{r}\left(x y^{\prime}\right)=\operatorname{trace} \wedge^{r}(x) \wedge^{r}\left(y^{\prime}\right) \\
& =\operatorname{trace} \wedge^{r}\left(y^{\prime}\right) \wedge^{r}(x)=e_{r}\left(y^{\prime} x\right)
\end{aligned}
$$

for all $r \geqslant 1$, so that

$$
\begin{equation*}
f\left(x y^{\prime}\right)=f\left(y^{\prime} x\right) \tag{1}
\end{equation*}
$$

for all $f \in \Lambda$ and $x, y \in X$.
Now let $\mathrm{d} x=\Pi_{i, j} \mathrm{~d} x_{i j}$ be Lebesgue measure on $X$, and let

$$
\mathrm{d} \nu(x)=(2 \pi)^{-m n / 2} \exp \left(-\frac{1}{2} \operatorname{trace} x^{\prime} x\right) \mathrm{d} x
$$

be the normal distribution. Let $\sigma \in \Sigma_{m}$ and $\tau \in \Sigma_{n}$. Then
(a) We have

$$
\int_{X}\left(\operatorname{trace} \sigma x \tau x^{\prime}\right)^{r} \mathrm{~d} \nu(x)=2^{r} r!\sum_{|\lambda|=r} \frac{Z_{\lambda}(\sigma) Z_{\lambda}(\tau)}{h(2 \lambda)}
$$

(same proof as (4.3)).
(b) We have

$$
\int_{X} Z_{\lambda}\left(\sigma x \tau x^{\prime}\right) \mathrm{d} \nu(x)=Z_{\lambda}(\sigma) Z_{\lambda}(\tau)
$$

if $l(\lambda) \leqslant n$. (Same proof as (4.4).) In particular,

$$
\int_{X} Z_{\lambda}\left(x x^{\prime}\right) \mathrm{d} \nu(x)=\int_{X} Z_{\lambda}\left(x^{\prime} x\right) \mathrm{d} \nu(x)=Z_{\lambda}\left(1_{m}\right) Z_{\lambda}\left(1_{n}\right) .
$$

(c) Let $U_{m, n}: \Lambda_{m} \rightarrow \Lambda_{m}$ be the operator defined by

$$
\left(U_{m, n} f\right)(\sigma)=\int_{X} f\left(x^{\prime} \sigma x\right) \mathrm{d} \nu(x)
$$

where $\sigma \in \Sigma_{\boldsymbol{m}}$. Then

$$
U_{m, n} Z_{\lambda}=Z_{\lambda}\left(1_{n}\right) Z_{\lambda}
$$

for all partitions $\lambda$ of length $\leqslant n$. (Set $\tau=1_{n}$ in (b) above.) Hence $\rho_{m, n} \circ U_{m, n}=$ $U_{n} \circ \rho_{m, n}$, where $\rho_{m, n}: \Lambda_{m} \rightarrow \Lambda_{n}$ is the restriction homomorphism (Chapter I, $\S$ ).
5. Let $x, y \in G$. Then
(a)

$$
\int_{G} \Omega_{\lambda}(x z y) \mathrm{d} \nu(z)=\Omega_{\lambda}(x) \Omega_{\lambda}(y) Z_{\lambda}\left(1_{n}\right)
$$

if $l(\lambda) \leqslant n$. (Use (3.24), (4.1), and (4.5).)
(b)

$$
\int_{G} s_{2 \lambda}(x z y) \mathrm{d} \nu(z)=\Omega_{\lambda}(y x) Z_{\lambda}\left(1_{n}\right)
$$

if $l(\lambda) \leqslant n$. (Use (3.20) and (a) above.)
6. Let $\mu$ be a positive $K$-invariant measure on the cone $\Sigma^{+}$of positive definite symmetric $n \times n$ matrices, such that

$$
\int_{\Sigma^{+}} f(\sigma) \mathrm{d} \mu(\sigma)<\infty
$$

for all $f \in \Lambda_{n}$. Define an operator $E: \Lambda_{n} \rightarrow \Lambda_{n}$ by

$$
(E f)(\sigma)=\int_{\Sigma^{+}} f(\sigma \tau) \mathrm{d} \mu(\tau)
$$

Then each $Z_{\lambda}$ such that $l(\lambda) \leqslant n$ is an eigenfunction of $E$, with eigenvalue

$$
Z_{\lambda}\left(1_{n}\right)^{-1} \int_{\Sigma^{+}} Z_{\lambda}(\tau) \mathrm{d} \mu(\tau)
$$

(Use (4.2).)
7. (a) Let $\mathrm{d} \sigma=\Pi_{i<j} \mathrm{~d} \sigma_{i j}$ be Lebesgue measure on $\Sigma$. If $x \in G$, the Jacobian of the linear transformation $\sigma \mapsto x^{\prime} \sigma x$ is the symmetric square $\mathbf{S}^{2}(x)$ of $x$. If the eigenvalues of $x$ are $\xi_{1}, \ldots, \xi_{n}$, those of $\mathbf{S}^{2}(x)$ are $\xi_{i} \xi_{j}(1 \leqslant i \leqslant j \leqslant n)$, whence $\operatorname{det}\left(S^{2} x\right)=(\operatorname{det} x)^{n+1}$. Hence

$$
\mathrm{d}\left(x^{\prime} \sigma x\right)=|\operatorname{det} x|^{n+1} \mathrm{~d} \sigma
$$

and therefore

$$
\mathrm{d}^{*} \sigma=(\operatorname{det} \sigma)^{-(n+1) / 2} \mathrm{~d} \sigma
$$

is a $G$-invariant measure on $\Sigma$ (and on $\Sigma^{+}$).
(b) Let $m \geqslant n$ and let $X=M_{m, n}(\mathbf{R})$, as in Example 3. The group $G$ acts on $X$ by right multiplication, and we have

$$
\mathrm{d}(x g)=|\operatorname{det} g|^{m} \mathrm{~d} x
$$

if $g \in G$. Hence

$$
\mathrm{d}^{*} x=\left(\operatorname{det} x^{\prime} x\right)^{-m / 2} \mathrm{~d} x
$$

is a $G$-invariant measure on $X$.
(c) Hence the linear functional

$$
f \mapsto \int_{X} f\left(x^{\prime} x\right) \mathrm{d}^{*} x
$$

defines a $G$-invariant measure on $\Sigma^{+}$. Since $G$-invariant measures on homogeneous spaces (when they exist) are unique up to a positive scalar multiple, it follows from (a) that

$$
\begin{equation*}
\int_{x} f\left(x^{\prime} x\right) \mathrm{d}^{*} x=c_{m, n} \int_{\Sigma^{+}} f(\sigma) \mathrm{d}^{*} \sigma \tag{1}
\end{equation*}
$$

for some real number $c_{m, n}>0$ independent of $f$.
If we take

$$
f(\sigma)=(2 \pi)^{-m n / 2} \exp \left(-\frac{1}{2} \operatorname{trace} \sigma\right)(\operatorname{det} \sigma)^{m / 2} g(\sigma)
$$

in (1), we shall obtain

$$
\begin{equation*}
\int_{X} g\left(x^{\prime} x\right) \mathrm{d} \nu(x)=\int_{\Sigma^{+}} g(\sigma) \mathrm{d} \mu_{m, n}(\sigma) \tag{2}
\end{equation*}
$$

where

$$
\mathrm{d} \mu_{m, n}(\sigma)=c_{m, n}^{\prime} \exp \left(-\frac{1}{2} \operatorname{trace} \sigma\right)(\operatorname{det} \sigma)^{(m-n-1) / 2} \mathrm{~d} \sigma
$$

and $c_{m, n}^{\prime}=(2 \pi)^{-m n / 2} c_{m, n}$.
(d) Each matrix $\sigma \in \Sigma^{+}$is uniquely of the form $\sigma=b^{\prime} b$, with $b \in B^{+}$, and the mapping $b \mapsto \sigma$ is a diffeomorphism of $B^{+}$onto $\Sigma^{+}$. The Jacobian matrix
$\left(\partial \sigma_{i j} / \partial b_{k l}\right)$, with rows and columns arranged in lexicographical order, is lower triangular, so that its determinant is equal to

$$
\prod_{i<j}\left(\partial \sigma_{i j} / \partial b_{i j}\right)=\prod_{i<j}\left(1+\delta_{i j}\right) b_{i i} .
$$

Hence

$$
\begin{equation*}
\mathrm{d} \sigma=2^{n}(\operatorname{det} b) \Delta_{\delta}(b) \mathrm{d} b \tag{3}
\end{equation*}
$$

(e) By taking $f(\sigma)=\exp (-\pi \text { trace } \sigma \text { ) (det } \sigma)^{m}$ in (1) and using (3), deduce that

$$
c_{m, n}=2^{-n} \prod_{i=1}^{n} v_{m-i+1}
$$

where $v_{r}=2 \pi^{r / 2} / \Gamma\left(\frac{1}{2} r\right)$ as in Example 2(d).
8. In this example and the following we shall use the abbreviations

$$
\operatorname{etr}(\sigma)=\exp (\operatorname{trace} \sigma), \quad|\sigma|=\operatorname{det} \sigma
$$

for a square (not necessarily symmetric) matrix $\sigma$.
Let $f=f_{a, \lambda}$ be the function on $\Sigma^{+}$defined by

$$
f(\sigma)=|\sigma|^{a} Z_{\lambda}(\sigma)
$$

where $a \geqslant \frac{1}{2} n$ and $l(\lambda) \leqslant n$.
(a) Show that

$$
\int_{\Sigma^{+}} \operatorname{etr}(-\sigma) f(\sigma) \mathrm{d}^{*} \sigma=Z_{\lambda}\left(1_{n}\right) \Gamma_{n}(a, \lambda)
$$

where $\mathrm{d}^{*} \sigma=|\boldsymbol{\sigma}|^{-(n+1) / 2} \mathrm{~d} \sigma$ as in Example 7, and

$$
\begin{aligned}
\Gamma_{n}(a, \lambda) & =\int_{\Sigma^{+}} \operatorname{etr}(-\sigma)|\sigma|^{a} \Delta_{\lambda^{\prime}}(\sigma) \mathrm{d}^{*} \sigma \\
& =\pi^{n(n-1) / 4} \prod_{i=1}^{n} \Gamma\left(a+\lambda_{i}-\frac{1}{2}(i-1)\right) .
\end{aligned}
$$

(Use (4.10) and Example 7 above.)
(b) Let $\tau \in \Sigma^{+}$and let

$$
g(\tau)=\int_{\Sigma^{+}} \operatorname{etr}(-\sigma \tau) f(\sigma) \mathrm{d}^{*} \sigma
$$

Show that

$$
g(\tau)=\Gamma_{n}(a, \lambda) f\left(\tau^{-1}\right)
$$

(Let $\tau^{1 / 2}$ be the positive definite square root of $\tau$. Under the change of variables $\sigma \mapsto \tau^{1 / 2} \sigma \tau^{1 / 2}$ we obtain

$$
g(\tau)=|\tau|^{-a} \int_{\Sigma^{+}} \operatorname{etr}(-\sigma)|\sigma|^{a} Z_{\lambda}\left(\sigma \tau^{-1}\right) \mathrm{d}^{*} \sigma .
$$

Now replace $\sigma$ by $k \sigma k^{\prime}(k \in K)$, integrate over $K$ and use (4.2) and (a) above.)

This calculation shows that the Laplace transform of the function $f_{a-(n+1) / 2, \lambda}$ is the function $\tau \mapsto \Gamma_{n}(a, \lambda) f_{a, \lambda}\left(\tau^{-1}\right)$.
(c) More generally, if $\rho, \tau \in \Sigma^{+}$show that

$$
\int_{\Sigma^{+}} \operatorname{etr}(-\rho \sigma)|\sigma|^{a} Z_{\lambda}(\sigma \tau) \mathrm{d}^{*} \sigma=\Gamma_{n}(a, \lambda)|\rho|^{-a} Z_{\lambda}\left(\rho^{-1} \tau\right)
$$

9. (a) Let $a, b \geqslant \frac{1}{2} n$ and let $\lambda$ be a partition of length $\leqslant n$. Show that

$$
\begin{equation*}
\int Z_{\lambda}(\sigma \tau)|\sigma|^{a-p}\left|1_{n}-\sigma\right|^{b-p} \mathrm{~d} \sigma=\frac{\Gamma_{n}(a, \lambda) \Gamma_{n}(b, 0)}{\Gamma_{n}(a+b, \lambda)} Z_{\lambda}(\tau) \tag{1}
\end{equation*}
$$

for $\tau \in \Sigma^{+}$, where $p=\frac{1}{2}(n+1)$ and the integral is taken over $\Sigma^{+} \cap\left(1_{n}-\Sigma^{+}\right)$.
(Let $f(\tau)$ denote the left-hand side of (1). By replacing $\sigma$ by $k \sigma k^{\prime}$, where $k \in K$, and then integrating over $K$ and using (4.2), it follows that

$$
\begin{equation*}
f(\tau)=f\left(1_{n}\right) Z_{\lambda}(\tau) \tag{2}
\end{equation*}
$$

Next, from Example 8(a) we have

$$
\begin{equation*}
\Gamma_{n}(a, \lambda) \Gamma_{n}(b, 0) Z_{\lambda}\left(1_{n}\right)=\int \operatorname{etr}(-\sigma-\tau)|\sigma|^{a-p}|\tau|^{b-p} Z_{\lambda}(\sigma) \mathrm{d} \sigma \mathrm{~d} \tau \tag{3}
\end{equation*}
$$

integrated over $\Sigma^{+} \times \Sigma^{+}$. Let

$$
\tau_{1}=\sigma+\tau, \quad \sigma_{1}=\tau_{1}^{-1 / 2} \sigma \tau_{1}^{-1 / 2}
$$

where $\tau_{1}^{1 / 2}$ is the positive definite square root of $\tau_{1}$; then $|\sigma|=\left|\sigma_{1}\right|\left|\tau_{1}\right|$ and $|\tau|=\left|1-\sigma_{1}\right|\left|\tau_{1}\right|$, and $\mathrm{d} \sigma_{1} \mathrm{~d} \tau_{1}=\left|\tau_{1}\right|^{-p} \mathrm{~d} \sigma \mathrm{~d} \tau$. Hence the integral (3) is equal to

$$
\int_{\Sigma^{+}} \operatorname{etr}\left(-\tau_{1}\right)\left|\tau_{1}\right|^{a+b-p} f\left(\tau_{1}\right) \mathrm{d} \tau_{1}
$$

which by (2) above and Example 8(a) is equal to $\Gamma_{n}(a+b, \lambda) Z_{\lambda}\left(1_{n}\right) f_{\lambda}\left(1_{n}\right)$. Hence

$$
f_{\lambda}\left(1_{n}\right)=\frac{\Gamma_{n}(a, \lambda) \Gamma_{n}(b, 0)}{\Gamma_{n}(a+b, \lambda)}
$$

which together with (2) completes the proof.)
(b) Show that

$$
\begin{aligned}
& \int Z_{\lambda}(\xi)|\xi|^{a-p}\left|1_{n}-\xi\right|^{b-p}\left|a_{\delta}(\xi)\right| \mathrm{d} \xi \\
& \quad=\frac{2^{n} n!}{c_{n}} \frac{\Gamma_{n}(a, \lambda) \Gamma_{n}(b, 0)}{\Gamma_{n}(a+b, \lambda)} Z_{\lambda}\left(1_{n}\right)
\end{aligned}
$$

where the integral is taken over $\xi=\operatorname{diag}\left(\xi_{1}, \ldots, \xi_{n}\right)$ such that $0 \leqslant \xi_{i} \leqslant 1$ for $1 \leqslant i \leqslant n$. (Use (a) above and Example 3.)

This integral is the case $\alpha=2$ (i.e. $k=\frac{1}{2}$ ) of the Selberg-type integral of Chapter VI, §10, Example 7.
10. Let $\lambda$ be a partition of length $\leqslant n$, and let $m \geqslant n+2 \lambda_{1}$. Then in the notation of Example 7(c) we have

$$
\int_{\Sigma^{+}} Z_{\lambda}\left(\sigma^{-1} \tau\right) \mathrm{d} \mu_{m, n}(\sigma)=\frac{Z_{\lambda}(-\tau)}{c_{\lambda}(n-m+1)}
$$

for $\tau \in \Sigma$, where $c_{\lambda}$ is the polynomial defined in (2.24) or (4.15). (Let $f(\tau)$ denote the integral above. By replacing $\sigma$ by $k \sigma k^{\prime}$, where $k \in K$, and then integrating over $K$, it follows from (4.2) that $f(\tau)=c Z_{\lambda}(\tau)$, where

$$
c=\int_{\Sigma^{+}} \frac{Z_{\lambda}\left(\sigma^{-1}\right)}{Z_{\lambda}\left(1_{n}\right)} \mathrm{d} \mu_{m, n}(\sigma)=\int_{\Sigma^{+}} \Delta_{\lambda}\left(\sigma^{-1}\right) \mathrm{d} \mu_{m, n}(\sigma)
$$

by (4.10). Evaluate the latter integral by setting $\sigma=b b^{\prime}$, where $b \in B^{+}$.)
11. Let $x$ and $\xi$ be elements of $G$, where $\xi=\operatorname{diag}\left(\xi_{1}, \ldots, \xi_{n}\right)$ is a diagonal matrix. Then the coefficient of $\xi_{1} \ldots \xi_{r}$ in $\operatorname{det}\left(x^{\prime} \xi x\right)^{(r)}$ is $\left(\operatorname{det} x^{(r)}\right)^{2}$, and hence if $l(\lambda) \leqslant n$ the coefficient of $\xi^{\lambda}$ in $\Delta_{\lambda}\left(x^{\prime} \xi x\right)$ is $\Delta_{\lambda}(x)^{2}=\Delta_{2 \lambda}(x)$. From (4.10) and (2.26) it follows that

$$
\int_{G} \Delta_{2 \lambda}(x) \mathrm{d} \nu(x)=h_{1}(2 \lambda),
$$

the coefficient of $\xi^{\lambda}$ in $Z_{\lambda}(\xi)$.
Deduce that

$$
\int_{K} \Delta_{2 \lambda}(k) \mathrm{d} k=h_{1}(2 \lambda) / Z_{\lambda}\left(1_{n}\right) .
$$

(Write $x=k b$ with $k \in K$ and $b \in B^{+}$, and use (4.13) and (4.14).)
12. Let $\lambda$ be a partition of length $\leqslant n$. Show that
(a)

$$
\int_{K \times K} \Delta_{2 \lambda}\left(k_{1} x k_{2}\right) \mathrm{d} k_{1} \mathrm{~d} k_{2}=\frac{h_{1}(2 \lambda) Z_{\lambda}\left(x^{\prime} x\right)}{Z_{\lambda}\left(1_{n}\right)^{2}}
$$

(Let $f_{\lambda}(x)$ denote the integral on the left. Clearly $f_{\lambda} \in P(G, K)$, hence is a linear combination of zonal polynomials, and we may assume that $x=\xi=\operatorname{diag}\left(\xi_{1}, \ldots, \xi_{n}\right)$ is a diagonal matrix. Now the leading term in $\operatorname{det}\left(k_{1} \xi k_{2}\right)^{(r)}$, as a polynomial in the $\xi_{i}$, is $\left(\operatorname{det} k_{1}^{(r)}\right)\left(\operatorname{det} k_{2}^{(r)}\right) \xi_{1} \ldots \xi_{r}$, and hence the leading term in $\Delta_{2 \lambda}\left(k_{1} \xi k_{2}\right)$ as a polynomial in $\xi_{1}, \ldots, \xi_{n}$ is $\Delta_{2 \lambda}\left(k_{1}\right) \Delta_{2 \lambda}\left(k_{2}\right) \xi^{2 \lambda}$. Hence $f_{\lambda}(x)$ is a scalar multiple of $Z_{\lambda}\left(x^{\prime} x\right)$, and the scalar multiple is given by Example 11.)
(b) Show that

$$
\begin{aligned}
\int_{K \times G} \Delta_{2 \lambda}(k x y) \mathrm{d} k \mathrm{~d} \nu(y) & =\frac{h_{1}(2 \lambda) Z_{\lambda}\left(x^{\prime} x\right)}{Z_{\lambda}\left(1_{n}\right)}, \\
\int_{G \times G} \Delta_{2 \lambda}(y x z) \mathrm{d} \nu(y) \mathrm{d} \nu(z) & =h_{1}(2 \lambda) Z_{\lambda}\left(x^{\prime} x\right),
\end{aligned}
$$

(Use (a) above and (4.5).)
13. Let $x_{1}, \ldots, x_{r} \in G$. Then

$$
\int_{G^{r+1}} \Delta_{2 \lambda}\left(y_{0} x_{1} y_{1} x_{2} \ldots y_{r-1} x_{r} y_{r}\right) \mathrm{d} \nu\left(y_{0}\right) \ldots \mathrm{d} \nu\left(y_{r}\right)=h_{1}(2 \lambda) \prod_{i=1}^{r} Z_{\lambda}\left(x_{i}^{\prime} x_{i}\right)
$$

if $l(\lambda) \leqslant n$, where $G^{r+1}=G \times \ldots \times G$ to $r+1$ factors. (Induction on $r$ : the case $r=1$ is Example 12(b). If we denote the integral above by $f_{\lambda}\left(x_{1}, \ldots, x_{r}\right)$ we have

$$
f_{\lambda}\left(x_{1}, \ldots, x_{r+1}\right)=\int_{G} f_{\lambda}\left(x_{1} y x_{2}, x_{3}, \ldots, x_{r+1}\right) \mathrm{d} \nu(y)
$$

if $r \geqslant 1$, and the inductive step is completed by (4.5).)
14. Let $\mu$ be a positive measure on $G$ such that $\mathrm{d} \mu(k x)=\mathrm{d} \mu(x k)=\mathrm{d} \mu(x)$ for all $k \in K$, and such that

$$
\int_{G} f(x) \mathrm{d} \mu(x)<\infty
$$

for all polynomial functions $f$ on $G$. If $l(\lambda) \leqslant n$, show that

$$
\int_{G} \Delta_{\lambda}\left(x^{\prime} \sigma x\right) \mathrm{d} \mu(x)=u_{\lambda} Z_{\lambda}(\sigma)
$$

for all $\sigma \in \Sigma$, where

$$
u_{\lambda}=Z_{\lambda}\left(1_{n}\right)^{-1} \int_{G} \Omega_{\lambda}(x) \mathrm{d} \mu(x) .
$$

(Use (4.10) and (4.2).)
15. Let $\mu_{1}, \mu_{2}$ be positive measures on $G$ satisfying the conditions of Example 14. Show that

$$
\int_{G \times G} \Delta_{2 \lambda}(y x z) \mathrm{d} \mu_{1}(y) \mathrm{d} \mu_{2}(z)=v_{\lambda} \Omega_{\lambda}(x),
$$

where $v_{\lambda}=h_{1}(2 \lambda) \mu_{1}\left(\Omega_{\lambda}\right) \mu_{2}\left(\Omega_{\lambda}\right) / Z_{\lambda}\left(1_{n}\right)$. (Replace $y$ by $k_{1} y k_{3}$ and $z$ by $k_{4} z k_{2}$, where $k_{1}, \ldots, k_{4} \in K$; integrate first with respect to $k_{1}$ and $k_{2}$, and then with respect to $k_{3}$ and $k_{4}$, using Example 12(a) and (4.1).)

## Notes and references

Most of the integral formulas in this section are to be found in Takemura's monograph [T1]. In particular, Proposition (4.1) is a classical criterion for zonal spherical functions, due originally to Gelfand [G7], and (4.2), (4.3) are due to James [J5]. Takemura (loc. cit.) essentially takes (4.6) as his definition of the zonal polynomials (the eigenvalues $Z_{\lambda}\left(1_{n}\right)$, where $\lambda$ runs through the partitions of a fixed number $r$, will be all distinct provided $n$ is large enough). Proposition (4.10) is a particular case of a well-known formula of Harish-Chandra (see, for example [H6], p. 418), and (4.11) is due to Kates [K7] (see [T1], p. 34). Example 7 deals with the 'Wishart density' (see e.g. [F3], p. 53), and Example 8 is due to Constantine [C4].

## 5. The complex case

In this section let $G=G L_{n}(\mathbf{C})$ and let $K$ be the unitary group $U(n)$. We shall show that $(G, K)$ is a Gelfand pair in the sense of $\S 3$, and that the associated zonal spherical functions may be identified, up to a scalar factor, with the Schur functions $s_{\lambda}$, where $\lambda$ is a partition of length $\leqslant n$.

A polynomial function on $G$ is by definition the restriction to $G$ of a (complex-valued) polynomial function $f$ on the space of complex $n \times n$ matrices, regarded as a real vector space of dimension $2 n^{2}$. Thus $f$ is a polynomial in the $2 n^{2}$ algebraically independent functions $X_{i j}, \bar{X}_{i j}$, where $X_{i j}(g)=g_{i j}$ and $\bar{X}_{i j}(g)=\bar{g}_{i j}$ if $g=\left(g_{i j}\right) \in G$.

Let

$$
P(G)=\underset{m \geqslant 0}{\oplus} P^{m}(G)
$$

be the space of all polynomial functions on $G$, where $P^{m}(G)$ is the subspace of $P(G)$ consisting of the $p \in P(G)$ that are homogeneous of degree $m$ (as polynomials in the $X_{i j}$ and $\bar{X}_{i j}$ ). The group $G$ acts on $P(G)$ by the rule

$$
\begin{equation*}
(g p)(x)=p(x g) \tag{5.1}
\end{equation*}
$$

for $p \in P(G)$ and $g, x \in G$. If $p \in P(G)$ then the function $\bar{p}: x \mapsto \overline{p(x)}$ is also in $P(G)$.

Let $Q(G)=\mathbf{C}\left[X_{i j}: 1 \leqslant i, j \leqslant n\right]$. Then we have

$$
P(G) \cong Q(G) \otimes \overline{Q(G)}
$$

and

$$
Q(G)=\underset{\lambda}{\oplus} P_{\lambda}
$$

where $\lambda$ ranges over all partitions of length $\leqslant n$, and $P_{\lambda}$ is the subspace of $Q(G)$ spanned by the matrix coefficients $R_{i j}^{\lambda}$ of an irreducible polynomial representation $R^{\lambda}$ of $G$ (Chapter I, Appendix A). Hence

$$
\begin{equation*}
P(G)=\underset{\lambda, \mu}{\oplus} P_{\lambda, \mu} \tag{5.2}
\end{equation*}
$$

where $\lambda, \mu$ are partitions of length $\leqslant n$, and $P_{\lambda, \mu}$ is the subspace of $P(G)$ spanned by the products $R_{i j}^{\lambda} \bar{R}_{k l}^{\mu}$.

We can now define the operators $e_{K}, e_{K}^{\prime}$ as in $\S 3$ ( $K$ now being the unitary group), and propositions (3.3)-(3.8) will remain valid in the present
context, provided that the transposed matrix $x^{\prime}$ is replaced by the conjugate transposed $x^{*}=\bar{x}^{\prime}$. Correspondingly, $\Sigma$ is now the space of hermitian $n \times n$ matrices, and

$$
P(\Sigma)=\underset{m \geqslant 0}{\oplus} P^{m}(\Sigma)
$$

the space of polynomial functions on $\Sigma$ (regarded as a real vector space of dimension $n+n(n-1)=n^{2}$ ). The group $G$ acts on $P(\Sigma)$ by the rule

$$
(g p)(\sigma)=p\left(g^{*} \sigma g\right)
$$

for $g \in G, p \in P(\Sigma)$, and $\sigma \in \Sigma$.
Let $V$ (resp. $\bar{V}$ ) be a complex vector space of dimension $n$, with basis $e_{1}, \ldots, e_{n}$ (resp. $\bar{e}_{1}, \ldots, \bar{e}_{n}$ ). The group $G$ acts on $V$ and $\bar{V}$ by

$$
\begin{aligned}
& g e_{j}=\sum_{i=1}^{n} g_{i j} e_{i}, \\
& g \bar{e}_{j}=\sum_{i=1}^{n} \bar{g}_{i j} \bar{e}_{i}
\end{aligned}
$$

if $g=\left(g_{i j}\right) \in G$.
The tensor space $\mathrm{T}^{2 m}(V)$ of $\S 3$ is here replaced by $\mathrm{T}=\mathrm{T}^{m}(V) \otimes \mathrm{T}^{m}(\bar{V})$; the group $G$ acts diagonally, as before, and (in place of the symmetric group $S_{2 m}$ ) the group $S_{m} \times S_{m}$ acts by permuting the factors in $\mathbf{T}$.

Let $\langle u, \bar{v}\rangle$ be the bilinear form on $V \times \bar{V}$ for which $\left\langle e_{i}, \bar{e}_{j}\right\rangle=\delta_{i j}$. We have then

$$
\langle g u, \bar{v}\rangle=\left\langle u, g^{*} \bar{v}\right\rangle
$$

for $g \in G, u \in V$, and $\bar{v} \in \bar{V}$.
Let $\varphi: \mathbf{T} \rightarrow P^{m}(\Sigma)$ denote the linear mapping defined by

$$
\varphi\left(u_{1} \otimes \ldots \otimes u_{m} \otimes \bar{v}_{1} \otimes \ldots \otimes \bar{v}_{m}\right)(\sigma)=\prod_{i=1}^{m}\left\langle u_{i}, \sigma \bar{v}_{i}\right\rangle .
$$

From our definitions it follows that $\varphi$ commutes with the actions of $G$ on T and $P^{m}(\Sigma)$. The place of the hyperoctahedral group $H_{m}$ in $\S 3$ is taken here by the diagonal subgroup $\Delta=\Delta_{m}=\left\{(w, w): w \in S_{m}\right\}$ of $S_{m} \times S_{m}$, and it is clear from the definition of $\varphi$ that $\varphi(h t)=\varphi(t)$ for $t \in \mathrm{~T}$ and $h \in \Delta$. If $\mathrm{T}^{\Delta}$ is the subspace of T fixed by $\Delta$, we have as in $\S 3$
(5.3) The mapping $\varphi$ is restricted to $\mathrm{T}^{\Delta}$ is a $G$-isomorphism of $\mathrm{T}^{\Delta}$ onto $P^{m}(\Sigma)$. |

From Chapter I, Appendix A, $\S 5$ it follows that $\mathbf{T}$ decomposes under the action of $\left(S_{m} \times S_{m}\right) \times G$ as follows:

$$
\mathbf{T}=\underset{\lambda, \mu}{\oplus} \mathbf{T}_{\lambda, \mu}
$$

where

$$
\mathrm{T}_{\lambda, \mu} \cong\left(M_{\lambda} \otimes M_{\mu}\right) \otimes\left(F_{\lambda}(V) \otimes F_{\mu}(\bar{V})\right) .
$$

Here $\lambda$ and $\mu$ are partitions of $m$ of length $\leqslant n$, and $M_{\lambda}$ (resp. $M_{\mu}$ ) is an irreducible $S_{m}$-module corresponding to $\lambda$ (resp. $\mu$ ). Since (Chapter I, §7)

$$
\begin{aligned}
\operatorname{dim}\left(M_{\lambda} \otimes M_{\mu}\right)^{\Delta} & =\left\langle\chi^{\lambda} \chi^{\dot{\mu}}, 1\right\rangle_{s_{m}} \\
& =\left\langle\chi^{\lambda}, \chi^{\mu}\right\rangle_{s_{m}}=\delta_{\lambda \mu}
\end{aligned}
$$

it follows that

$$
\begin{equation*}
\mathrm{T}^{\Delta} \cong \underset{\lambda}{\oplus}\left(F_{\lambda}(V) \otimes F_{\lambda}(\bar{V})\right) \tag{5.4}
\end{equation*}
$$

as $G$-module, where $\lambda$ ranges after the partitions of $m$ of length $\leqslant n$.
Now the $G$-modules $F_{\lambda}(V) \otimes F_{\lambda}(\bar{V})$, and more generally $F_{\lambda}(V) \otimes F_{\mu}(\bar{V})$ for any two partitions $\lambda, \mu$ of length $\leqslant n$, are irreducible. For the matrix coefficients $R_{i j}^{\lambda} \in Q(G)$ are linearly independent (Chapter I, Appendix A, (8.1)), and likewise the $\bar{R}_{k l}^{\mu} \in \overline{Q(G)}$ are linearly independent; hence the products $R_{i j}^{\lambda} \bar{R}_{k l}^{\mu}$ are linearly independent functions on $G$, which (loc. cit.) proves the assertion.

If $p \in P(\Sigma)$, the function $\tilde{p}$ defined by

$$
\tilde{p}(x)=p\left(x^{*} x\right)
$$

is a polynomial function on $G$, and the mapping $p \mapsto \tilde{p}$ commutes with the actions of $G$ on $P(\Sigma)$ and $P(G)$. Moreover, it doubles degrees: if $p \in$ $P^{m}(\Sigma)$ then $\tilde{p} \in P^{2 m}(G)$.
(5.5) The mapping $p \mapsto \tilde{p}$ defined above is a $G$-isomorphism of $P^{m}(\Sigma)$ onto $P^{2 m}(K \backslash G)$, for all $m \geqslant 0$.

The proof is the same as that of (3.12), and just as in the real case has the following consequences:
(5.6) (i) The G-module $e_{K} P_{\lambda, \mu}$ is isomorphic to $F_{\lambda}(V) \otimes F_{\lambda}(\bar{V})$ if $\lambda=\mu$, and is zero otherwise.
(ii) We have

$$
e_{K} P(G)=P(K \backslash G)=\underset{\lambda}{\oplus}\left(F_{\lambda}(V) \otimes F_{\lambda}(\bar{V})\right)
$$

where $\lambda$ ranges over all partitions of length $\leqslant n$.
(5.7) Let $\lambda, \mu$ be partitions of length $\leqslant n$. Then

$$
\operatorname{dim}\left(F_{\lambda}(V) \otimes F_{\mu}(\bar{V})\right)^{K}=\left\{\begin{array}{rr}
1 & \text { if } \lambda=\mu \\
0 & \text { otherwise }
\end{array}\right.
$$

(5.8) $P_{\lambda, \mu}(G, K)=P_{\lambda, \mu} \cap P(G, K)$ is one-dimensional if $\lambda=\mu$, and is zero otherwise. Moreover,

$$
P(G, K)=\underset{\lambda}{\oplus} P_{\lambda, \lambda}(G, K)
$$

summed over all partitions $\lambda$ of length $\leqslant n$.
In these statements, $P(K \backslash G), P(G, K)$ etc. are defined exactly as in the real case (§3). In particular, it follows from (5.6)(ii) that the $G$-module $P(K \backslash G)$ is multiplicity-free, so that ( $G, K$ ) is a Gelfand pair.

As in §3, we regard each symmetric function $f \in \Lambda_{\mathrm{C}}$ as a polynomial function on $G$ : if $x \in G$ has eigenvalues $\xi_{1}, \ldots, \xi_{n}$ then $f(x)=f\left(\xi_{1}, \ldots, \xi_{n}\right)$. Then the character of the irreducible $G$-module $F_{\lambda}(V) \otimes F_{\mu}(\bar{V})$ is $s_{\lambda} \bar{s}_{\mu} \in$ $P_{\lambda, \mu}$, and hence by (5.6) we have $e_{K}\left(s_{\lambda} \bar{s}_{\mu}\right)=0$ unless $\lambda=\mu$ :

$$
\begin{equation*}
\int_{K}\left(s_{\lambda} \bar{s}_{\mu}\right)(x k) \mathrm{d} k=0 \tag{5.9}
\end{equation*}
$$

for all $x \in G$, unless $\lambda=\mu . \quad \mid$
Let $\Omega_{\lambda}=e_{K}\left(s_{\lambda} \bar{s}_{\lambda}\right)$, or explicitly

$$
\begin{equation*}
\Omega_{\lambda}(x)=\int_{K} s_{\lambda}(x k) \overline{\bar{\lambda}}_{\lambda}(x k) \mathrm{d} k \tag{5.10}
\end{equation*}
$$

where $\lambda$ is a partition of length $\leqslant n$. As in $\S 3$ we have
(5.11) (i) $\Omega_{\lambda}(1)=1$.
(ii) $\Omega_{\lambda} \in P_{\lambda, \lambda}(G, K)$ and generates the irreducible $G$-submodule $e_{K} P_{\lambda, \lambda}$ of $P(K \backslash G)$.

Moreover, $\Omega_{\lambda}$ is characterized by these two properties. I
These functions $\Omega_{\lambda}$ are the zonal spherical functions of the pair ( $G, K$ ). In order to compute them we return to the ( $S_{m} \times S_{m}$ ) $\times G$-module $\mathbf{T}=$ $\mathbf{T}^{m}(V) \otimes \mathbf{T}^{m}(\bar{V})$, where $m \leqslant n$.

From (5.7) we have

$$
\mathbf{T}^{K}=\underset{\lambda}{\oplus} \mathbf{T}_{\lambda, \lambda}^{K} \cong \underset{\lambda}{\oplus}\left(M_{\lambda} \otimes M_{\lambda}\right)
$$

as $S_{m} \times S_{m}$-module. Hence $\mathrm{T}^{K}$ is isomorphic to the induced module $1_{\Delta}^{S_{m} \times S_{m}}$. Now the tensor

$$
\delta=\sum_{i=1}^{n} e_{i} \otimes \bar{e}_{i} \in V \otimes \bar{V}
$$

is fixed by $K$, and hence

$$
\delta_{m}=\sum_{i_{1}, \ldots, i_{m}} e_{i_{1}} \otimes \ldots \otimes e_{i_{m}} \otimes \bar{e}_{i_{1}} \otimes \ldots \otimes \bar{e}_{i_{m}}
$$

lies in $\mathrm{T}^{K}$. Since the subgroup of $S_{m} \times S_{m}$ that fixes $\delta_{m}$ is precisely $\Delta$, it follows that $\delta_{m}$ generates $\mathrm{T}^{K}$ as $S_{m} \times S_{m}$-module. Hence by (1.5) the space

$$
\mathbf{T}_{\lambda, \lambda}^{\Delta \times K}=\left(\mathbf{T}_{\lambda, \lambda}^{K}\right)^{\Delta}=\left(\mathbf{T}_{\lambda, \lambda}^{\Delta}\right)^{K}
$$

is one-dimensional, generated by $\omega^{\lambda} \delta_{m}$ where $\omega^{\lambda}$ is the zonal spherical function of the Gelfand pair ( $S_{m} \times S_{m}, \Delta$ ) corresponding to the partition $\lambda$. From §1, Example 9 we have

$$
\begin{aligned}
\omega^{\lambda} \delta_{m} & =\chi^{\lambda}(1)^{-1} \sum_{v, w \in S_{m}} \chi^{\lambda}\left(v w^{-1}\right) \cdot(v \times w) \delta_{m} \\
& =\frac{n!}{\chi^{\lambda}(1)} \sum_{w \in S_{m}} \chi^{\lambda}(w) \cdot(w \times 1) \delta_{m}
\end{aligned}
$$

where $\chi^{\lambda}$ is the character of $M_{\lambda}$, since $(v \times w) \delta_{m}=\left(v w^{-1} \times 1\right) \delta_{m}$.
From the definitions of $\delta_{m}$ and the mapping $\varphi: \mathbf{T} \rightarrow P^{m}(\Sigma)$ (5.3) it follows easily that

$$
\varphi\left((w \times 1) \delta_{m}\right)=p_{\rho}
$$

where $\rho$ is the cycle-type of $w \in S_{m}$, and hence

$$
\varphi\left(\omega^{\lambda} \delta_{m}\right)=c_{\lambda} \sum_{\rho} z_{\rho}^{-1} \chi_{\rho}^{\lambda} p_{\rho}=c_{\lambda} s_{\lambda}
$$

in the notation of Chapter I, §7, where $c_{\lambda}=(n!)^{2} / \chi^{\lambda}(1)$. From this it follows, as in (3.24), that
(5.12) We have

$$
\Omega_{\lambda}(x)=s_{\lambda}\left(x^{*} x\right) / s_{\lambda}\left(1_{n}\right)
$$

for all $x \in G$.
Another proof of (5.12) is given in Example 1 below.

## Examples

1. (a) Let $p \in Q(G)$. If $p \mid K=0$ then $p=0$. (Each $g \in G$ can be written as $g=k_{1} x k_{2}$, where $k_{1} k_{2} \in K$ and $x$ is a diagonal matrix, say $x=\operatorname{diag}\left(x_{1}, \ldots, x_{n}\right)$. For fixed $k_{1}, k_{2} \in K$ let $q\left(x_{1}, \ldots, x_{n}\right)=p\left(k_{1} x k_{2}\right)$; then $q$ is a polynomial function of $n$ complex variables $x_{1}, \ldots, x_{n}$ which vanishes whenever $\left|x_{1}\right|=\ldots=\left|x_{n}\right|=1$. Deduce that $q=0$ and hence that $p(g)=0$ for all $g \in G$.)
(b) For each partition $\lambda$ of length $\leqslant n$, the $G$-module $F_{\lambda}(V)$ remains irreducible as a $K$-module. (Consider the matrix coefficients of $F_{\lambda}(V)$, and use (a) above.)
(c) If $g \rightarrow\left(R_{i j}^{\lambda}(g)\right)$ is a matrix representation of $G$ afforded by $F_{\lambda}(V)$, we have ( $x \in G, k \in K$ )

$$
\begin{equation*}
s_{\lambda}(x k)=\sum_{i, j} R_{j i}^{\lambda}(x) R_{i j}^{\lambda}(k) \tag{1}
\end{equation*}
$$

and

$$
\begin{align*}
\bar{s}_{\lambda}(x k) & =s_{\lambda}(\bar{x} \bar{k})=s_{\lambda}\left(k^{-1} x^{*}\right) \\
& =\sum_{r, s} R_{r s}^{\lambda}\left(k^{-1}\right) R_{s r}^{\lambda}\left(x^{*}\right) . \tag{2}
\end{align*}
$$

The matrix coefficients satisfy the orthogonality relations [S12]

$$
\begin{equation*}
\int_{K} R_{i j}^{\lambda}(k) R_{r s}^{\lambda}\left(k^{-1}\right) \mathrm{d} k=d_{\lambda}^{-1} \delta_{i s} \delta_{j r} \tag{3}
\end{equation*}
$$

where $d_{\lambda}=\operatorname{dim} F_{\lambda}(V)=s_{\lambda}\left(1_{n}\right)$, since by (b) above the matrix representation $k \rightarrow$ ( $R_{i j}^{\lambda}(k)$ ) of $K$ is irreducible.
Deduce from (1), (2), and (3) that

$$
\Omega_{\lambda}(x)=\int_{K}\left(s_{\lambda} \bar{s}_{\lambda}\right)(x k) \mathrm{d} k=d_{\lambda}^{-1} s_{\lambda}\left(x x^{*}\right) .
$$

2. Let $f \in P(G)$. Then $f$ is a zonal spherical function of $(G, K)$ if and only if $f \neq 0$ and

$$
\int_{K} f(x k y) \mathrm{d} k=f(x) f(y)
$$

for all $x, y \in G$. (Same proof as for (4.1).)
3. Let $\sigma, \tau \in \Sigma$. Then

$$
\int_{K} s_{\lambda}\left(\sigma k \tau k^{-1}\right) \mathrm{d} k=s_{\lambda}(\sigma) s_{\lambda}(\tau) / s_{\lambda}\left(1_{n}\right) .
$$

In view of (5.12), this follows from Example 2.
4. Let $\mathrm{d} x$ be Lebesgue measure on $G$ and let

$$
\mathrm{d} \nu(x)=(2 \pi)^{-n^{2}} \exp \left(-\frac{1}{2} \operatorname{trace} x^{*} x\right) \mathrm{d} x
$$

so that $\mathrm{d} \nu(x k)=\mathrm{d} \nu(k x)=\mathrm{d} \nu(x)$ for $k \in K$, and $\int_{G} \mathrm{~d} \nu(x)=1$.

Let $\sigma, \tau \in \Sigma$. Then

$$
\int_{G}\left(\operatorname{trace} \sigma x \tau x^{*}\right)^{m} \mathrm{~d} \nu(x)=2^{m} \sum_{\lambda} s_{\lambda}(\sigma) s_{\lambda}(\tau)
$$

summed over partitions $\lambda$ of $m$. (The proof follows that of (4.3).)
5. Let $\sigma, \tau \in \Sigma$. Then

$$
\int_{G} s_{\lambda}\left(\sigma x \tau x^{*}\right) \mathrm{d} \nu(x)=2^{|\lambda|} h(\lambda) s_{\lambda}(\sigma) s_{\lambda}(\tau)
$$

for all partitions $\lambda$ of length $\leqslant n$, where $h(\lambda)$ is the product of the hook-lengths of $\lambda$. (The proof follows the same lines as that of (4.4).)
6 . Let $\lambda$ be a partition of length $\leqslant n$, and let $\Delta_{\lambda}$ be as in $\S 4$.
(a) Show that

$$
e_{K}\left|\Delta_{\lambda}(x)\right|^{2}=c_{\lambda} \Delta_{\lambda}\left(x^{*} x\right)
$$

for $x \in G$, where $c_{\lambda}=\int_{K}\left|\Delta_{\lambda}(k)\right|^{2} \mathrm{~d} k$.
(b) If $\sigma \in \Sigma$, show that

$$
\int_{K} \Delta_{\lambda}\left(k^{-1} \sigma k\right) \mathrm{d} k=s_{\lambda}(\sigma) / s_{\lambda}\left(1_{n}\right),
$$

and that

$$
\int_{G} \Delta_{\lambda}\left(x^{*} \sigma x\right) \mathrm{d} \nu(x)=2^{|\lambda|} h(\lambda) s_{\lambda}(\sigma) .
$$

In particular,

$$
\int_{G} \Delta_{\lambda}\left(x^{*} x\right) \mathrm{d} \nu(x)=2^{|\lambda|} \prod_{s \in \lambda}(n+c(s))
$$

where $c(s)=a^{\prime}(s)-l^{\prime}(s)$ is the content of $s \in \lambda$. (These formulas are the counterparts of (4.9)-(4.12), and may be proved in the same way.)

## Notes and references

James [J5] was aware that the complex zonal polynomials are essentially the Schur functions (5.12). See also Farrell's paper [F3], and [T1], Chapter V.

All the integral formulas of $\S 4$ have their complex counterparts, and Examples 2-6 are merely a sample.

## 6. The quaternionic case

In this section let $G=G L_{n}(\mathrm{H})$, the group of non-singular $n \times n$ matrices over the division ring of quaternions, and let $K=U(n, \mathbf{H})$ be the quaternionic unitary group. We shall show that ( $G, K$ ) is a Gelfand pair in the
sense of $\S 3$, and that the associated zonal spherical functions may be identified, up to a scalar multiple, with the Jack symmetric functions (Chapter VI, §10) with parameter $\alpha=\frac{1}{2}$.

If $x=a+b i+c j+d k \in \mathbf{H}$ in the usual notation for quaternions ( $i^{2}=$ $j^{2}=k^{2}=-1, i j=-j i=k$, etc.), where $a, b, c, d \in \mathbf{R}$, let

$$
\theta(x)=\left(\begin{array}{cc}
a+b i & c+d i  \tag{6.1}\\
-c+d i & a-b i
\end{array}\right)
$$

so that $x \mapsto \theta(x)$ embeds $\mathbf{H}$ in the algebra of complex $2 \times 2$ matrices. More generally, if $g=\left(g_{r s}\right) \in G=G L_{n}(\mathbf{H})$, let

$$
\begin{equation*}
\theta(g)=\left(\theta\left(g_{r s}\right)\right)_{1<r, s<n} \tag{6.2}
\end{equation*}
$$

so that $\theta$ is an injective homomorphism of $G$ into the complex general linear group $G_{\mathrm{C}}=G L_{2 n}(\mathrm{C})$. Observe that $\theta\left(g^{*}\right)=\theta(g)^{*}$, where the asterisks denote the conjugate transpose. We shall usually identify $G$ with its image $\theta(G)$ in $G_{C}$.

A polynomial function $f$ on $G$ is by definition the restriction to $G$ of a (complex-valued) polynomial function on the matrix space $M_{n}(\mathbf{H})$, regarded as a real vector space of dimension $4 n^{2}$. In view of (6.1) and (6.2), $f$ is a polynomial in the $4 n^{2}$ algebraically independent functions

$$
\begin{cases}\frac{1}{2}\left(X_{2 r-1,2 s-1}+X_{2 r, 2 s}\right), & \frac{1}{2 i}\left(X_{2 r-1,2 s-1}-X_{2 r, 2 s}\right),  \tag{6.3}\\ \frac{1}{2}\left(X_{2 r-1,2 s}-X_{2 r, 2 s-1}\right), & \frac{1}{2 i}\left(X_{2 r-1,2 s}+X_{2 r, 2 s-1}\right)\end{cases}
$$

for $r, s=1,2, \ldots, n$, where $X_{p q}(1 \leqslant p, q \leqslant 2 n)$ are the coordinate functions on $G_{\mathrm{C}}$ (i.e. $X_{p q}(g)=g_{p q}$ for $g=\left(g_{p q}\right) \in G_{\mathrm{C}}$ ).

Let $P(G)$ denote the algebra of polynomial functions on $G$, generated over C by the functions (6.3), and let $P\left(G_{\mathrm{C}}\right)$ denote the algebra $\mathrm{C}\left[X_{p q}\right.$ : $1 \leqslant p, q \leqslant 2 n$ ] of polynomial functions on $G_{\mathrm{C}}$.
(6.4) (i) The restriction map $f \mapsto f \mid G$ is an isomorphism of $P\left(G_{\mathrm{C}}\right)$ onto $P(G)$. (ii) Each irreducible polynomial representation of $G_{\mathrm{C}}$ remains irreducible on restriction to $G$.

Proof. (i) Each $f \in P\left(G_{\mathrm{C}}\right)$ is uniquely expressible as a polynomial in the $4 n^{2}$ functions (6.3). If $f \mid G=0$, then $f$ vanishes for all real values of these $4 n^{2}$ functions, hence is identically zero.
(ii) Suppose that $R: g \mapsto\left(R_{i j}(g)\right)$ is a polynomial representation of $G_{\mathrm{C}}$ whose restriction to $G$ is reducible. By replacing $R$ by an equivalent representation, we may assume that for some $r$ such that $1 \leqslant r<d$, where $d$ is the degree of $R$, we have $R_{i j}(g)=0$ for all $(i, j)$ such that $i>r$ and
$j \leqslant r$, and all $g \in G$. By (i) above, it follows that this is so for all $g \in G_{\mathrm{c}}$, and therefore $R$ is reducible.

In view of (6.4), we may identify $P(G)$ and $P\left(G_{\mathrm{C}}\right)$. As in $\S 3, G$ acts on $P(G)$ by the rule

$$
(g p)(x)=p(x g)
$$

where $p \in P(G)$ and $g, x \in G$, and under this action $P(G)=P\left(G_{\mathrm{c}}\right)$ decomposes as a direct sum

$$
P(G)=\underset{\mu}{\oplus} P_{\mu}
$$

where $\mu$ ranges over all partitions of length $\leqslant 2 n$, and $P_{\mu}$ is the subspace of $P(G)$ spanned by the matrix coefficients $R_{i j}^{\mu}$ of an irreducible polynomial representation $R^{\mu}$ of $G$ (or $G_{\mathrm{C}}$ ) corresponding to the irreducible $G$-module $F_{\mu}\left(\mathbf{C}^{2 n}\right)$, in the notation of Chapter I, Appendix A.

Now let

$$
K=U(n, \mathbf{H})=\left\{g \in G: g g^{*}=1\right\}
$$

Since $\theta(K)=\theta(G) \cap U(2 n)$, it follows that $K$ is a bounded closed subgroup of $G$, and hence is compact. The set-up is now entirely analogous to that of $\S 3$, and we need only pay attention to those points in the development that differ from the real case. Propositions (3.3)-(3.8) remain valid in the present context, provided that the transpose $x^{\prime}(x \in G)$ is replaced by $x^{*}$.

Next let $\Sigma$ denote the space of quaternionic hermitian $n \times n$ matrices (i.e. matrices $\sigma$ such that $\sigma^{*}=\sigma$ ), and let

$$
P(\Sigma)=\underset{m \geqslant 0}{\oplus} P^{m}(\Sigma)
$$

denote the space of polynomial functions on $\Sigma$ (regarded as a real vector space of dimension $n+2 n(n-1)$ ), where $P^{m}(\Sigma)$ consists of the functions that are homogeneous of degree $m$. The group $G$ acts on $P(\Sigma)$ by

$$
(g p)(\sigma)=p\left(g^{*} \sigma g\right)
$$

for $g \in G, p \in P(\Sigma)$, and $\sigma \in \Sigma$.
Also let $V=\mathbf{C}^{2 n}$, the elements of $V$ being regarded as column vectors of length $2 n$. The group $G$ acts on $V$ via $\theta: g v=\theta(g) v$ for $g \in G$ and $v \in V$. Let $J=\theta\left(j 1_{n}\right)$, so that $J$ is the diagonal sum of $n$ copies of the $\operatorname{matrix}\left(\begin{array}{rr}0 & 1 \\ -1 & 0\end{array}\right)$, and let

$$
\begin{equation*}
\langle u, v\rangle=u^{\prime} J v \tag{6.5}
\end{equation*}
$$

for $u, v \in V$. The bilinear form so defined on $V$ is skew-symmetric, and we have

$$
\begin{equation*}
\langle g u, v\rangle=\left\langle u, g^{*} v\right\rangle \tag{6.6}
\end{equation*}
$$

for all $g \in G$. For it follows from (6.1) and (6.2) that $\theta(g)^{\prime} J=J \theta\left(g^{*}\right)$, and hence that

$$
\begin{aligned}
\langle g u, v\rangle & =u^{\prime} \theta(g)^{\prime} J v=u^{\prime} J \theta\left(g^{*}\right) v \\
& =\left\langle u, g^{*} v\right\rangle
\end{aligned}
$$

Let $\mathbf{T}=\mathbf{T}^{2 m}(V)$ be the $2 m$ th tensor power of $V$. As in $\S 3$, the group $G$ acts diagonally on $\mathbf{T}$, and the symmetric group $S_{2 m}$ acts by permuting the factors. Let $\varphi: \mathbf{T} \rightarrow P^{m}(\Sigma)$ denote the linear mapping defined by

$$
\varphi\left(v_{1} \otimes \ldots \otimes v_{2 m}\right)(\sigma)=\prod_{i=1}^{m}\left\langle v_{2 i-1}, \sigma v_{2 i}\right\rangle
$$

Clearly $\varphi$ commutes with the actions of $G$ on $\mathbf{T}$ and $P^{m}(\Sigma)$, and since by (6.6) we have

$$
\langle u, \sigma v\rangle=\langle\sigma u, v\rangle=-\langle v, \sigma u\rangle
$$

for $\sigma \in \Sigma$, it follows that

$$
\varphi(h t)=\varepsilon(h) \varphi(t)
$$

for $t \in \mathbf{T}$ and $h \in H=H_{m}$, where $\varepsilon$ is the sign character of $S_{2 m}$. Finally, if $e_{1}, \ldots, e_{2 n}$ is the standard basis of $V=\mathbf{C}^{2 n}$ and $e_{1}^{*}, \ldots, e_{2 n}^{*}$ is the dual basis, so that $\left\langle e_{i}^{*}, e_{j}\right\rangle=\delta_{i j}$, then $\left\langle e_{p}^{*}, \sigma e_{q}\right\rangle$ is the $(p, q)$ element of $\theta(\sigma)$, from which it follows easily that $\varphi$ is surjective. Hence if

$$
\mathbf{T}^{\varepsilon H}=\{t \in \mathbf{T}: h t=\varepsilon(h) t \text { for all } h \in H\}
$$

we have (compare (3.9)):
(6.7) The mapping $\varphi$ restricted to $\mathbf{T}^{\varepsilon H}$ is a G-isomorphism of $\mathbf{T}^{\varepsilon H}$ onto $P^{m}(\Sigma)$. |

Under the action of $S_{2 m} \times G_{\mathrm{C}}, T$ decomposes as

$$
\mathbf{T}=\underset{\mu}{\oplus} \mathbf{T}_{\mu}
$$

where

$$
\mathbf{T}_{\mu} \cong M_{\mu} \otimes F_{\mu}(V)
$$

Here $\mu$ ranges over the partitions of $2 m$ of length $\leqslant 2 n$, and $M_{\mu}$ is an irreducible $S_{2 m}$-module corresponding to $\mu$. By (6.4)(ii), $F_{\mu}(V)$ remains
irreducible as a $G$-module. Since ( $\S 2$, Example 6) $M_{\mu}^{\varepsilon H}$ is one-dimensional if $\mu^{\prime}$ is an even partition (or equivalently if $\mu=\lambda \cup \lambda$ for some partition $\lambda$ of $m$ ) and is zero otherwise, it follows that

$$
\begin{equation*}
\mathbf{T}^{\varepsilon H} \cong \underset{\lambda}{\oplus} F_{\lambda \cup \lambda}(V) \tag{6.8}
\end{equation*}
$$

as $G$-module, where $\lambda$ ranges over the partitions of $m$ of length $\leqslant n$.
If $p \in P(\Sigma)$, the function $\tilde{p}$ defined by

$$
\tilde{p}(x)=p\left(x^{*} x\right)
$$

is a polynomial function on $G$, and the mapping $p \mapsto \tilde{p}$ commutes with the actions of $G$ on $P(\Sigma)$ and $P(G)$. Moreover, it doubles degrees: if $p \in$ $P^{m}(\Sigma)$ then $\tilde{p} \in P^{2 m}(G)$.
(6.9) The mapping $p \mapsto \tilde{p}$ defined above is a $G$-isomorphism of $P^{m}(\Sigma)$ onto $P^{2 m}(K \backslash G)$, for all $m \geqslant 0$.

The proof is the same as that of (3.12), and just as in the real case has the following consequences:
(6.10) (i) The $G$-module $e_{K} P_{\mu}$ is isomorphic to $F_{\mu}(V)$ if $\mu^{\prime}$ is even, and is zero otherwise.
(ii) We have

$$
e_{K} P(G)=P(K \backslash G) \cong \underset{\lambda}{\oplus} F_{\lambda \cup \lambda}(V)
$$

where $\lambda$ ranges over all partitions of length $\leqslant n$.
(6.11) Let $\mu$ be a partition of length $\leqslant 2 n$. Then

$$
\operatorname{dim} F_{\mu}(V)^{K}= \begin{cases}1 & \text { if } \mu^{\prime} \text { is even } \\ 0 & \text { otherwise }\end{cases}
$$

(6.12) $P_{\mu}(G, K)$ is one-dimensional if $\mu^{\prime}$ is even, and is zero otherwise. Moreover,

$$
P(G, K)=\underset{\lambda}{\oplus} P_{\lambda \cup \lambda}(G, K)
$$

summed over all partitions $\lambda$ of length $\leqslant n$.
In these statements, $e_{K}, P(K \backslash G)$ etc. are defined exactly as in the real case.

As in $\S 3$, we may regard each $f \in \Lambda_{\mathrm{C}}$ as a polynomial function on $G_{\mathrm{C}}$ : if
$x \in G_{\mathrm{C}}$ has eigenvalues $\xi_{1}, \ldots, \xi_{2 n}$, then $f(x)=f\left(\xi_{1}, \ldots, \xi_{2 n}\right)$. With this understood, we have as in (3.19)

$$
\begin{equation*}
\int_{K} s_{\mu}(\theta(x k)) \mathrm{d} k=0 \tag{6.13}
\end{equation*}
$$

unless $\mu^{\prime}$ is an even partition.
Let $\lambda$ be a partition of length $\leqslant n$, and define $\Omega_{\lambda} \in P(G)$ by

$$
\begin{equation*}
\Omega_{\lambda}(x)=\int_{K} s_{\lambda \cup \lambda}(\theta(x k)) \mathrm{d} k \tag{6.14}
\end{equation*}
$$

for $x \in G$. Then as in (3.21) we have
(6.15) (i) $\Omega_{\lambda}(1)=1$.
(ii) $\Omega_{\lambda} \in P_{\lambda \cup \lambda}(G, K)$ and generates the irreducible $G$-submodule $e_{K} P_{\lambda \cup \lambda}$ of $P(K \backslash G)$.

Moreover, $\Omega_{\lambda}$ is characterized by these two properties.
The function $\Omega_{\lambda}$ is the zonal spherical function of $(G, K)$ associated with the partition $\lambda$.

We return now to the $S_{2 m} \times G$-module $\mathrm{T}=\mathrm{T}^{2 m}(V)$, where $m \leqslant n$. We have (compare §3)

$$
\mathrm{T}^{K}=\underset{\lambda}{\oplus} \mathrm{T}_{\lambda \cup \lambda}^{K} \cong \underset{\lambda}{\oplus} M_{\lambda \cup \lambda}
$$

as $S_{2 m}$-module, where $\lambda$ ranges over all partitions of $m$. From $\S 2$, Example 6 it follows that $\mathrm{T}^{K}$ is isomorphic to the induced module $\varepsilon_{H}^{S_{2 m}}$, where $\varepsilon_{H}$ is the restriction to $H$ of the sign character of $S_{2 m}$. As before, let $e_{1}, \ldots, e_{2 n}$ be the standard basis of $V=\mathbf{C}^{2 n}$, and let $e_{1}^{*}, \ldots, e_{2 n}^{*}$ be the dual basis, such that $\left\langle e_{p}^{*}, e_{q}\right\rangle=\delta_{p q}$ for $1 \leqslant p, q \leqslant 2 n$. We have $e_{2 r-1}^{*}=-e_{2 r}$ and $e_{2 r}^{*}=e_{2 r-1}$ for $1 \leqslant r \leqslant n$.
The tensor

$$
\begin{equation*}
\delta=\sum_{p=1}^{2 n} e_{p}^{*} \otimes e_{p}=-\sum_{p=1}^{2 n} e_{p} \otimes e_{p}^{*} \tag{6.16}
\end{equation*}
$$

is fixed by $K$, by virtue of (6.6), and hence $\delta^{\otimes m}=\delta \otimes \ldots \otimes \delta$ ( $m$ factors) lies in $\mathrm{T}^{K}$. From (6.16) it follows that $h \delta^{\otimes m}=\varepsilon(h) \delta^{\otimes m}$ for $h \in H$, and hence just as in the real case that $\delta^{8 m}$ generates $\mathrm{T}^{K}$ as $S_{2 m}$-module. Hence ( $\S 2$, Example 6) the space

$$
\mathrm{T}_{\lambda \cup \lambda}^{\varepsilon H \times K}=\left(\mathrm{T}_{\lambda \cup \lambda}^{K}\right)^{\varepsilon H}=\left(\mathrm{T}_{\lambda \cup \lambda}^{\varepsilon H}\right)^{K}
$$

is one-dimensional, generated by

$$
\begin{equation*}
\pi^{\lambda} \delta^{\otimes m}=\sum_{w \in S_{2 m}} \varepsilon(w) \omega^{\lambda^{\prime}}(w) \cdot w \delta^{\otimes m} . \tag{6.17}
\end{equation*}
$$

We have now to compute $\varphi\left(\pi^{\lambda} \delta^{\otimes m}\right) \in P^{m}(\Sigma)$. For this purpose we need to interpret symmetric functions as polynomial functions on $\Sigma$. If $\sigma \in \Sigma$, then $\operatorname{trace}(\sigma) \in \mathbf{R}$, because the diagonal elements of $\sigma$ are real. More generally, trace $\left(\sigma^{r}\right) \in \mathbf{R}$ for each $r \geqslant 1$, since $\sigma^{r} \in \Sigma$. If now $\rho=$ $\left(\rho_{1}, \rho_{2}, \ldots\right)$ is any partition, we define

$$
p_{\rho}(\sigma)=\prod_{i \geqslant 1} \operatorname{trace}\left(\sigma^{\rho_{i}}\right)
$$

thus defining $p_{\rho}$, and hence by linearity any symmetric function, as a polynomial function on $\Sigma$. Since by (6.1) and (6.2) $\operatorname{trace}(\theta(\sigma))=2 \operatorname{trace}(\sigma)$, it follows that

$$
\begin{equation*}
p_{\rho}(\theta(\sigma))=2^{l(\rho)} p_{\rho}(\sigma) . \tag{6.18}
\end{equation*}
$$

In place of (3.23) we now have

$$
\begin{equation*}
\varepsilon(w) \varphi\left(w \delta^{\otimes m}\right)=\varepsilon_{\rho} 2^{l(\rho)} p_{\rho} \tag{6.19}
\end{equation*}
$$

as functions on $\Sigma$, where $\rho$ is the coset-type (§2) of $w \in S_{2 m}$, and $\varepsilon_{\rho}=$ $(-1)^{m-l(\rho)}$.

Proof. Let $f_{w}=\varepsilon(w) \varphi\left(w \delta^{\otimes m}\right)$. For any $h \in H$ we have $f_{w h}=f_{w}$, since $h \delta^{\otimes m}=\varepsilon(h) \delta^{\otimes m} ;$ also $f_{h w}=f_{w}$, since $\varphi(h t)=\varepsilon(h) \varphi(t)$ for any $t \in \mathrm{~T}$. Hence $f_{w}$ depends only on the double coset $H_{\rho}=H w H$. As in the proof of (3.23), we are reduced to the case where $w$ is the $2 m$-cycle $(1,2, \ldots, 2 m$ ). Since

$$
\delta^{\otimes m}=\sum e_{i_{1}}^{*} \otimes e_{i_{1}} \otimes \ldots \otimes e_{i_{m}}^{*} \otimes e_{i_{m}}
$$

summed over $i_{1}, \ldots, i_{m}$ running independently from 1 to $2 n$, we have

$$
w \delta^{\otimes m}=\sum e_{i_{m}} \otimes e_{i_{1}}^{*} \otimes e_{i_{1}} \otimes \ldots \otimes e_{i_{m-1}} \otimes e_{i_{m}}^{*}
$$

and hence (since $\varepsilon(w)=-1$ )

$$
\begin{equation*}
f_{w}(\sigma)=-\sum\left\langle e_{i_{m}}, \sigma e_{i_{1}}^{*}\right\rangle \ldots\left\langle e_{i_{m-1}}, \sigma e_{i_{m}}^{*}\right\rangle . \tag{1}
\end{equation*}
$$

Since

$$
\left\langle e_{i}, \sigma e_{j}^{*}\right\rangle=\left\langle\sigma e_{i}, e_{j}^{*}\right\rangle=-\left\langle e_{j}^{*}, \sigma e_{i}\right\rangle=-\theta(\sigma)_{j i}
$$

it follows from (1) that

$$
\begin{aligned}
f_{w}(\sigma) & =(-1)^{m-1} \sum \theta(\sigma)_{i_{1}, i_{m}} \ldots \theta(\sigma)_{i_{m} i_{m-1}} \\
& =(-1)^{m-1} \operatorname{trace}\left(\theta(\sigma)^{m}\right) \\
& =(-1)^{m-1} 2 \operatorname{trace}\left(\sigma^{m}\right)
\end{aligned}
$$

and hence that $f_{w}=(-1)^{m-1} 2 p_{m}$, which completes the proof. |
We can now express the zonal spherical functions $\Omega_{\lambda}$ in terms of the symmetric functions $Z_{\lambda}^{\prime}$ introduced in §2, Example 7:
(6.20) We have

$$
\Omega_{\lambda}(x)=Z_{\lambda}^{\prime}\left(x^{*} x\right) / Z_{\lambda}^{\prime}\left(1_{n}\right)
$$

for all $x \in G$.
Proof. Let $\varphi_{\lambda}=\varphi\left(\pi^{\lambda} \delta^{\otimes m}\right)$, and define $\tilde{\varphi}_{\lambda} \in P(G)$ by $\tilde{\varphi}_{\lambda}(x)=\varphi_{\lambda}\left(x^{*} x\right)$. It follows from (6.9) that $\tilde{\varphi}_{\lambda}$ is a generator of the one-dimensional space $P_{\lambda U_{\lambda}}(G, K)$ that is the image of $\mathrm{T}^{\varepsilon H \times K}$ under the composite isomorphism $\mathrm{T}^{\varepsilon H} \rightarrow P^{m}(\Sigma) \rightarrow P^{2 m}(K \backslash G)$. Hence by (6.15)(ii) $\Omega_{\lambda}$ is a scalar multiple of $\tilde{\varphi}_{\lambda}$, namely

$$
\begin{equation*}
\Omega_{\lambda}(x)=\varphi_{\lambda}\left(x^{*} x\right) / \varphi_{\lambda}\left(1_{n}\right) \tag{1}
\end{equation*}
$$

since $\Omega_{\lambda}\left(1_{n}\right)=1$.
On the other hand, from (6.17) and (6.19) we have

$$
\begin{aligned}
\varphi_{\lambda} & =\sum_{\rho}\left|H_{\rho}\right| \varepsilon_{\rho} \omega_{\rho}^{\lambda^{\prime}} 2^{l(\rho)} p_{\rho} \\
& =\left|H_{m}\right|^{2} \sum_{\rho} \varepsilon_{\rho} z_{\rho}^{-1} \omega_{\rho}^{\lambda^{\prime}} p_{\rho}
\end{aligned}
$$

and therefore (\$2, Example 7)

$$
\begin{equation*}
\varphi_{\lambda}=\left|H_{m}\right| Z_{\lambda}^{\prime} \tag{2}
\end{equation*}
$$

The result now follows from (1) and (2). |

## Examples

1. Let $f \in P(G)$. Then $f$ is a zonal spherical function of $(G, K)$ if and only if $f \neq 0$ and

$$
\int_{K} f(x k y) \mathrm{d} k=f(x) f(y)
$$

for all $x, y \in G$. (Same proof as for (4.1).)
2. In this and the following Examples we define $p_{\rho}$, for each partition $\rho$, as a function on $G$ by the rule (6.18)

$$
p_{\rho}(x)=2^{-l(\rho)} p_{\rho}(\theta(x)) .
$$

By linearity this defines each symmetric function $f \in \Lambda$ as a polynomial function on $G$, such that $f(x y)=f(y x)$ for all $x, y \in G$. With this definition we have

$$
\int_{K} Z_{\lambda}^{\prime}\left(\sigma k \tau k^{*}\right) \mathrm{d} k=\frac{Z_{\lambda}^{\prime}(\sigma) Z_{\lambda}^{\prime}(\tau)}{Z_{\lambda}^{\prime}\left(1_{n}\right)}
$$

for all $\sigma, \tau \in \mathbf{\Sigma}$. In view of (6.20), this follows from Example 1.
3. Let $\mathrm{d} x$ be Lebesgue measure on $G$ and let

$$
\mathrm{d} \nu(x)=(2 \pi)^{-2 n^{2}} \exp \left(-\frac{1}{2} \operatorname{trace} x^{*} x\right) \mathrm{d} x,
$$

so that $\mathrm{d} \nu(k x)=\mathrm{d} \nu(x k)=\mathrm{d} \nu(x)$ for $k \in K$, and $\int_{G} \mathrm{~d} \nu(x)=1$. Let $\xi, \eta \in G$ be real diagonal matrices. Then trace $\left(\xi x \eta x^{*}\right)$ is a real number for all $x \in G$, and we have

$$
\int_{G}\left(\operatorname{trace} \xi x \eta x^{*}\right)^{m} \mathrm{~d} \nu(x)=2^{m} m!\sum_{|\lambda|=m} \frac{Z_{\lambda}^{\prime}(\xi) Z_{\lambda}^{\prime}(\eta)}{h\left(2 \lambda^{\prime}\right)} .
$$

(The proof follows that of (4.3), using §2, Example 7(d).)
4. Let $\sigma, \tau \in \Sigma$. Then

$$
\begin{equation*}
\int_{G} Z_{\lambda}^{\prime}\left(\sigma x \tau x^{*}\right) \mathrm{d} \nu(x)=2^{|\lambda|} Z_{\lambda}^{\prime}(\sigma) Z_{\lambda}^{\prime}(\tau) \tag{1}
\end{equation*}
$$

In particular,

$$
\begin{equation*}
\int_{G} Z_{\lambda}^{\prime}\left(x^{*} \sigma x\right) \mathrm{d} \nu(x)=2^{|\lambda|} Z_{\lambda}^{\prime}\left(1_{n}\right) Z_{\lambda}^{\prime}(\sigma) \tag{2}
\end{equation*}
$$

(Let $I_{\lambda}(\sigma, \tau)$ denote the integral on the left-hand side of (1). We may assume without loss of generality that $\sigma$ and $\tau$ are real diagonal matrices $\xi, \eta$. Since

$$
p_{1}^{m}=m!\sum_{|\lambda|=m} h\left(2 \lambda^{\prime}\right)^{-1} Z_{\lambda}^{\prime}
$$

(\$2, Example 7) it follows that

$$
\int_{G}\left(\operatorname{trace} \xi x \eta x^{*}\right)^{m} \mathrm{~d} \nu(x)=m!\sum_{|\lambda|=m} h\left(2 \lambda^{\prime}\right)^{-1} I_{\lambda}(\xi, \eta) .
$$

On the other hand, Example 2 shows that $I_{\lambda}(\xi, \eta)$ is a scalar multiple of $Z_{\lambda}^{\prime}(\xi) Z_{\lambda}^{\prime}(\eta)$, and hence the result follows from Example 3.)
5. (a) If $x \in G$, then $\operatorname{det} \theta(x)$ is real and positive. (Let $x=v b$ where $b=\left(b_{i j}\right)$ is upper triangular and $v$ is lower unitriangular. Then $\operatorname{det} \theta(v)=1$ and $\operatorname{det} \theta(b)=$ $\prod_{i=1}^{n}\left|b_{i}\right|^{2}$. Since elements of the form $x=v b$ are dense in $G$, the result follows.)

Define $\operatorname{det} x$ to be the positive square root of $\operatorname{det} \theta(x)$.
(b) If $x=\left(x_{i j}\right) \in G$ (resp. $G_{\mathrm{C}}$ ), let $x^{(r)}=\left(x_{i j}\right)_{1<i, j<r}$ for $1 \leqslant r \leqslant n$ (resp. $1 \leqslant r \leqslant 2 n$ ). Then $\theta\left(x^{(r)}\right)=\theta(x)^{(2 r)}$ and hence

$$
\operatorname{det} \theta(x)^{(2 r)}=\left(\operatorname{det} x^{(r)}\right)^{2}
$$

(c) If $x \in G$ (resp. $G_{\mathrm{C}}$ ) and $\mu$ is a partition of length $\leqslant n$ (resp. $2 n$ ) let

$$
\Delta_{\mu}(x)=\prod_{i \geqslant 1}\left(\operatorname{det} x^{\left(\mu_{i}^{\prime}\right)}\right)
$$

Then we have

$$
\Delta_{\lambda \cup \lambda}(\theta(x))=\Delta_{2 \lambda}(x)
$$

for $x \in G$ and $l(\lambda) \leqslant n$.
(d) Show (as in (4.9)) that

$$
e_{K} \Delta_{2 \lambda}(x)=c_{\lambda} \Delta_{\lambda}\left(x^{*} x\right)
$$

where $c_{\lambda}$ is a positive constant, and deduce that

$$
\int_{K} \Delta_{\lambda}\left(k^{*} \sigma k\right) \mathrm{d} k=Z_{\lambda}^{\prime}(\sigma) / Z_{\lambda}^{\prime}\left(1_{n}\right)
$$

for $\boldsymbol{\sigma} \in \boldsymbol{\Sigma}$.
6. (a) Let $\lambda$ be a partition of length $\leqslant n$. Show that

$$
\int_{G} \Delta_{\lambda}\left(x^{*} \sigma x\right) \mathrm{d} \nu(x)=2^{|\lambda|} Z_{\lambda}^{\prime}(\sigma)
$$

for $\sigma \in \boldsymbol{\Sigma}$. (Use Examples 5(d) and 4.) In particular,

$$
\begin{equation*}
Z_{\lambda}^{\prime}\left(1_{n}\right)=2^{-|\lambda|} \int_{G} \Delta_{\lambda}\left(x^{*} x\right) \mathrm{d} \nu(x) . \tag{1}
\end{equation*}
$$

(b) Let $B^{+}$be the subgroup of $G$ consisting of upper triangular matrices $\left(b_{i j}\right)$ with positive real diagonal elements $b_{i i}$. Each $x \in G$ factorizes uniquely as $x=k b$, where $k \in K$ and $b \in B^{+}$, and we have

$$
\begin{equation*}
\mathrm{d} x=c_{n} \Delta_{\delta}(b) \mathrm{d} k \mathrm{~d} b \tag{2}
\end{equation*}
$$

where $\mathrm{d} k$ is normalized Haar measure on $K, \mathrm{~d} b$ is Lebesgue measure on $B^{+}$, and $\delta=(4 n-1,4 n-5, \ldots, 3)$, and $c_{n}$ is a positive constant. By evaluating the integral (1) show that

$$
Z_{\lambda}^{\prime}\left(1_{n}\right)=\prod_{s \in \lambda}\left(2 n+a^{\prime}(s)-2 l^{\prime}(s)\right)
$$

in agreement with §2, Example 7(b).
(c) Show that the constant $c_{n}$ in (2) is given by

$$
c_{n}=v_{4} v_{8} \ldots v_{4 n}
$$

where $v_{r}=2 \pi^{r / 2} / \Gamma\left(\frac{1}{2} r\right)$ as in $\S 4$, Example 2(d). (Use (2) to evaluate $\int_{G} \mathrm{~d} \nu(x)=1$.)

## Notes and references

As far as I am aware, the quaternionic analogue of James's theory (§3), and in particular the identification of the quaternionic zonal polynomials with the Jack symmetric functions with parameter $\alpha=\frac{1}{2}$, announced in [M5], has not been worked out in print before. See however [G16], where the three cases (real, complex, quaternionic) are handled simultaneously.

As in the complex case, all the integral formulas of $\S 4$ have their quaternionic analogues, and Examples 1-6 provide a sample of these.

## BIBLIOGRAPHY

A1. Aitken, A. C. (1931). Note on dual symmetric functions. Proc. Edin. Math. Soc. (2) 2, 164-7.
A2. Akin, K., Buchsbaum, D. A., and Weyman, J. (1982). Schur functions and Schur complexes. Advances in Math. 44, 207-78.
A3. Andrews, G. E. (1976). The theory of partitions. Encyclopaedia of mathematics and its applications, Vol. 2. Addison-Wesley, Reading, Massachusetts.
A4. Andrews, G. E. (1977). MacMahon's conjecture on symmetric plane partitions. Proc. Natl. Acad. Sci. USA, 74, 426-9.
A5. Andrews, G. E. (1979). Plane partitions (III): the weak Macdonald conjecture. Inv. Math., 53, 193-225.
A6. Aomoto, K. (1987). Jacobi polynomials associated with Selberg integrals. SLAM J. Math. Anal., 18, 545-9.

A7. Askey, R. (1980). Some basic hypergeometric extensions of integrals of Selberg and Andrews. SLAM J. Math. Anal., 11, 938-51.
B1. Bannai, E. and Ito, T. (1984). Algebraic combinatorics I: Association schemes. Benjamin-Cummings, Menlo Park, California.
B2. Berele, A. and Regev, A. (1987). Hook Young diagrams with applications to combinatorics and to representations of Lie superalgebras. Advances in Math., 64, 118-75.
B3. Bergeron, N. and Garsia, A. M. (1988). Zonal polynomials and domino tableaux. Preprint.
B4. Bergeron, N. and Garsia, A. M. (1990). Sergeev's formula and the Littlewood-Richardson rule. Linear and Multilinear Alg., 27, 79-100.
B5. Berthelot, P. (1971). Généralités sur les $\lambda$-anneaux. In SGA6 (Séminaire de Géométrie Algèbrique du Bois-Marie, 1966/7). Springer Lecture Notes, 225.
B6. Borho, W. and MacPherson, R. (1981). Representations of Weyl groups and intersection homology of nilpotent varieties. C.R. Acad. Sci. Paris, 292, 707-10.
B7. Bourbaki, N. (1967). Intégration, Chapters VII and VIII. Hermann, Paris.
B8. Bourbaki, N. (1968). Groupes et algèbres de Lie, Chapters IV, V, and VI. Hermann, Paris.
B9. Burge, W. H. (1974). Four correspondences between graphs and generalized Young tableaux. J. Comb. Theory (A) 17, 12-30.
B10. Butler, L. M. (1986). Combinatorial properties of partially ordered sets associated with partitions and finite abelian groups. Thesis (M.I.T.).
C1. Cartan, H. and Eilenberg, S. (1956). Homological algebra. Princeton University Press.
C2. Chen, Y., Garsia, A. M., and Remmel, J. (1984). Algorithms for plethysm, in Combinatorics and Algebra, Contemporary Math., 34, 109-53.
C3. Comtet, L. (1970). Analyse combinatoire (2 vols.). Presses Universitaires de France, Paris.

C4. Constantine, A. G. (1963). Some non-central distribution problems in multivariate analysis. Ann. Math. Stat., 34, 1270-85.
C5. Curtis, C. W. and Reiner, I. (1962). Representation theory of finite groups and associative algebras. Interscience, New York.
D1. Debiard, A. (1983). Polynômes de Tchébychev et de Jacobi dans un espace euclidien de dimension p. C.R. Acad. Sci. Paris (sér. I), 296, 529-32.
D2. Deligne, P. (1972). Les constantes des equations fonctionelles des fonctions $L$. Springer Lecture Notes, 349, 501-97.
D3. Diaconis, P. (1988). Group representations in probability and statistics. Inst. of Math. Statistics, Hayward, California.
D4. Diaconis, P. and Lander, E. (1992). Some formulas for zonal polynomials. In preparation.
D5. Dieudonné, J. (1972). Treatise on Analysis, Vol. III. Academic Press, New York.
D6. Doubilet, P. (1972). On the foundations of combinatorial theory, VII: Symmetric functions through the theory of distribution and occupancy. Studies in Appl. Math., 51, 377-96.
E1. Eg̈ecioğlu, O. and Remmel, J. (1990). A combinatorial interpretation of the inverse Kostka matrix. Linear and Multilinear Alg., 26, 59-84.
E2. Eg̈ecioglu, O. and Remmel, J. (1991). Brick tabloids and the connection matrices between bases of symmetric functions. Discrete Appl. Math., 34, 107-20.
F1. Farahat, H. K. (1956). On the blocks of characters of symmetric groups. Proc. London Math. Soc., (3) 6, 501-17.
F2. Farahat, H. K. and Higman, G. (1959). The centres of symmetric group rings. Proc. Roy. Soc. (A), 250, 212-21.
F3. Farrell, R. H. (1980). Calculation of complex zonal polynomials, in Multivariate Analysis V (ed. Krishnaiah). North Holland, Amsterdam.
F4. Farrell, R. H. (1985). Multivariate calculation: use of the continuous groups. Springer-Verlag, New York.
F5. Foulkes, H. O. (1949). Differential operators associated with $S$-functions. J. London Math. Soc., 24, 136-43.
F6. Foulkes, H. O. (1954). Plethysm of S-functions. Philos. Trans. Roy. Soc. (A), 246, 555-91.
F7. Foulkes, H. O. (1974). A survey of some combinatorial aspects of symmetric functions, in Permutations. Gauthier-Villars, Paris.
F8. Frame, J. S., Robinson, G. de B., and Thrall, R. M. (1954). The hook graphs of $S_{n}$. Can. J. Math., 6, 316-24.
F9. Franzblau, D. S. and Zeilberger, D. (1982). A bijective proof of the hook-length formula. J. Algorithms, 3, 317-43.
F10. Frobenius, F. G. (1900). Über die Charaktere der symmetrischen Gruppe. Sitzungsberichte der Königlich Preussischen Akademie der Wissenschaften zu Berlin (1900) 516-34 (Ges. Abhandlungen, 3, 148-66).

F11. Frobenius, F. G. (1904). Über die Charaktere der mehrfach transitiven Gruppen. Sitzungsberichte der Königlich Preussischen Akademie der Wissenschaften zu Berlin (1904) 558-71 (Ges. Abhandlungen, 3, 335-48).
G1. Gansner, E. R. (1978). Matrix correspondences and the enumeration of plane. partitions. Thesis, M.I.T.
G2. Garsia, A. M. (1985). Gelfand pairs in finite groups. Preprint.

G3. Garsia, A. M. (1992). Orthogonality of Milne's polynomials and raising operators. Discrete Math., 99, 247-64.
G4. Garsia, A. M. and Haiman, M. (1996). Some natural bigraded $S_{n}$-modules and q,t-Kostka coefficients. Electronic J. Combinatorics, 3, R24, 60; also The Fuata Festschrift, Impruinene Louis-Jean, Gap, France, pp. 561-620.
G5. Gasper, G. and Rahman, M. (1990). Basic hypergeometric series. Encyclopaedia of mathematics and its applications, Vol. 35. Cambridge University Press.
G6. Geissinger, L. (1977). Hopf algebras of symmetric functions and class functions. Springer Lecture Notes, 579, 168-81.
G7. Gelfand, I. M. (1950). Spherical functions on symmetric spaces. Dokl. Akad. Nauk USSR, 70, 5-8.
G8. Giambelli, G. Z. (1903). Alcune proprietà delle funzioni simmetriche caratteristiche. Atti Torino, 38, 823-44.
G9. Goulden, I. P. and Jackson, D. M. (1994). Symmetric functions and Macdonald's result for top connection coefficients in the symmetric group. J. Alg., 166, 364-78.
G10. Gow, R. (1983). Properties of characters of the general linear group related to the transpose-inverse involution, Proc. London Math. Soc., (3) 47, 493-506.
G11. Green, J. A. (1955). The characters of the finite general linear groups. Trans. Am. Math. Soc., 80, 402-47.
G12. Green, J. A. (1956). Les polynômes de Hall et les caractères des groupes GL( $n, q$ ). Colloque d'algèbre supérieure, 207-15 (Brussels).
G13. Green, J. A. (1961). Symmetric functions and p-modules (lecture notes, Manchester).
G14. Green, J. A. (1980). Polynomial representations of $G L_{n}$. Springer Lecture Notes, 830.
G15. Greene, C., Nijenhuis, A., and Wilf, H. S. (1979). A probabilistic proof of a formula for the number of Young tableaux of a given shape. Advances in Math., 31, 104-9.
G16. Gross, K. I. and Richards, D. St. P. (1987). Spherical functions of matrix argument I: algebraic induction, zonal polynomials and hypergeometric functions. Trans. Am. Math. Soc., 301, 781-811.
H1. Hall, P. (1938). A partition formula connected with abelian groups. Comm. Math. Helv., 11, 126-9.
H2. Hall, P. (1940). On groups of automorphisms. J. reine angew. Math., 182, 194-204.
H3. Hall, P. (1959). The algebra of partitions. Proc. 4th Canadian Math. Congress, 147-159. Banff.
H4. Hammond, J. (1883). On the use of certain differential operators in the theory of equations. Proc. London Math. Soc., 14, 119-29.
H5. Hanlon, P. (1988). Jack symmetric functions and some combinatorial properties of Young symmetrizers, J. Comb. Theory (A), 47, 37-70.
H6. Helgason, S. (1984). Groups and geometric analysis. Academic Press, New York.
H7. Hoffman, P. and Humphreys, J. F. (1992). Projective representations of symmetric groups. Oxford Mathematical Monographs.
H8. Hotta, R. and Shimomura, N. (1979). The fixed point subvarieties of unipotent transformations on generalized flag varieties and the Green functions. Math. Annalen, 241, 193-208.
H9. Hotta, R. and Springer, T. A. (1977). A specialization theorem for certain

Weyl group representations and an application to the Green polynomials of unitary groups. Inv. Math., 41, 113-27.
H10. Howe, R. (1987). ( $G L_{n}, G L_{m}$ )-duality and symmetric plethysm. Proc. Indian Acad. Sci. (Math. Sci.), (1987), 85-109.
H11. Hua, L.-K. (1963). Harmonic analysis of functions of several complex variables in the classical domains, AMS Translations, Vol. 6.
H12. Humphreys, J. F. (1986). Blocks of projective representations of the symmetric groups. J. London Math. Soc., (2) 33, 441-52.
J1. Jack, H. (1970). A class of symmetric polynomials with a parameter. Proc. R. Soc. Edinburgh (A), 69, 1-18.
J2. Jack, H. (1972). A surface integral and symmetric functions. Proc. R. Soc. Edinburgh (A), 69, 347-63.
J3. Jacobi, C. G. (1841). De functionibus alternantibus ... . Crelle's Journal, 22, 360-71 (Werke, 3, 439-52).
J4. James, A. T. (1961). Zonal polynomials of the real positive definite matrices. Annals of Math., 74, 456-69.
J5. James, A. T. (1964). Distributions of matrix variates and latent roots derived from normal samples. Ann. Math. Stat., 35, 475-501.
J6. James, A. T. (1968). Calculation of zonal polynomial coefficients by use of the Laplace-Beltrami operator. Ann. Math. Stat., 39, 1711-18.
J7. James, G. D. (1978). The representation theory of the symmetric groups. Springer Lecture Notes, 682.
J8. James, G. D. (1987). The representation theory of the symmetric groups. Proc. of Symposia in Pure Math., 47 part 1, 111-26.
J9. James, G. D. and Kerber, A. (1981). The representation theory of the symmetric groups. Encyclopaedia of mathematics and its applications, Vol. 16. Addison-Wesley, Reading, Massachusetts.
J10. James, G. D. and Peel, M. (1979). Specht series for skew representations of symmetric groups. J. Algebra, 56, 343-64.
J11. Jing, N. (1991). Vertex operators, symmetric functions and the spin group $\Gamma_{n}$. J. Algebra, 138, 340-98.

J12. Jing, N. (1991). Vertex operators and Hall-Littlewood symmetric functions. Advances in Math., 87, 226-48.
J13. Johnsen, K. (1982). On a forgotten note by Ernst Steinitz. Bull. London Math. Soc., 14, 353-5.
J14. Józefiak, T. (1988). Semisimple superalgebras. Springer Lecture Notes, 1352, 96-113.
J15. Józefiak, T. (1989). Characters of projective representations of symmetric groups. Expositiones Math., 7, 193-247.
J16. Józefiak, T. (1991). Schur $Q$-functions and cohomology of isotropic Grassmannians. Math. Proc. Camb. Phil. Soc., 109, 471-8.
J17. Józefiak, T. and Pragacz, P. (1991). A determinantal formula for skew Schur Q-functions. J. London Math. Soc., (2) 43, 76-90.
K1. Kac, V. G. (1980). Simple Lie groups and the Legendre symbol. Springer Lecture Notes, 848, 110-23.
K2. Kac, V. G. (1983). Infinite-dimensional Lie algebras. Birkhäuser, Boston.
K3. Kadell, K. W. J. (1988). A proof of some analogues of Selberg's integral for $k=1$. SLAM J. Math. Anal., 19, 944-68.

K4. Kadell, K. W. J. (1988). The $q$-Selberg polynomials for $n=2$, Trans. Amer. Math. Soc., 310, 535-53.
K5. Kadell, K. W. J. (1992). The Selberg-Jack symmetric functions. Preprint.
K6. Kadell, K. W. J. (1996). An integral for the product of two Selberg-Jack symmetric polynomials. Comp. Math., 87, 5-43.
K7. Kates, L. K. (1980). Zonal polynomials. Thesis, Princeton Univ.
K8. Kerov, S. V. (1984). On the Littlewood-Richardson rule and the Robinson-Schensted-Knuth correspondence (in Russian). Uspekhi Mat. Nauk, 39, 161-2.
K9. Kirillov, A. N. and Reshetikhin, N. Yu. (1988). The Bethe Ansatz and the combinatorics of Young tableaux. J. Soviet Math., 41, 925-55.
K10. Klein, T. (1969). The Hall polynomial. J. Algebra, 12, 61-78.
K11. Kljačko, A. A. (1981). Models for complex representations of $G L(n, q)$ and Weyl groups. Soviet Math. Dokl., 24, 496-9.
K12. Knuth, D. E. (1970). Permutations, matrices and generalized Young tableaux. Pacific J. Math., 34, 709-27.
K13. Knutson, D. (1973). $\lambda$-rings and the representation theory of the symmetric group. Springer Lecture Notes, 308.
K14. Kondo, T. (1963). On Gaussian sums attached to the general linear groups over finite fields. J. Math. Soc. Japan, 15, 244-55.
K15. Koornwinder, T. (1988). Self-duality for $q$-ultraspherical polynomials associated with the root system $A_{n}$. (Unpublished manuscript.)
K16. Kostka, C. (1882). Über den Zusammenhang zwischen einigen Formen von symmetrischen Funktionen. Crelle's Journal, 93, 89-123.
K17. Kostka, C. (1908). Tafeln für symmetrische Funktionen bis zur elften Dimension. Wissenschaftliche Beilage zum Programm des königl. Gymnasiums und Realgymnasiums zu Insterberg.
L1. Lascoux, A. (1978). Classes de Chern d'un produit tensoriel. C.R. Acad. Sci. Paris, 286A, 385-7.
L2. Lascoux, A. and Pragacz, P. (1984). Equerres et fonctions de Schur. C.R. Acad. Sci. Paris (série I), 299, 955-8.
L3. Lascoux, A. and Pragacz, P. (1988). Ribbon Schur functions. Eur. J. Combinatories, 9, 561-74.
L4. Lascoux, A. and Schützenberger, M. P. (1978). Sur une conjecture de H. O. Foulkes. C.R. Acad. Sci. Paris, 286A, 323-4.
L5. Lascoux, A. and Schützenberger, M. P. (1985). Formulaire raisonné de fonctions symétriques. Publ. Math. Univ. Paris, VII.
L6. Lascoux, A., Leclerc, B., and Thibon, J.-Y. (1992). Fonctions de Hall-Littlewood et polynômes de Kostka-Foulkes aux racines de l'unité. Institut Blaise Pascal, Paris.
L7. Littelmann, P. (1990). A generalization of the Littlewood-Richardson rule. J. Algebra, 130, 328-68.
L8. Littelmann, P. (1992). A Littlewood-Richardson rule for symmetrizable Kac-Moody algebras. Preprint.
L9. Littlewood, D. E. (1950). The theory of group characters (2nd edn). Oxford University Press.
L10. Littlewood, D. E. (1951). Modular representations of symmetric groups. Proc. R. Soc., A, 209, 333-53.

L11. Littlewood, D. E. (1956). The Kronecker product of symmetric group representations. J. London Math. Soc., 31, 89-93.
L12. Littlewood, D. E. (1961). On certain symmetric functions, Proc. London Math. Soc., 43, 485-98.
L13. Littlewood, D. E. and Richardson, A. R. (1934). Group characters and algebra. Philos. Trans. R. Soc., A, 233, 99-141.
L14. Luks, E. M. (1966). Spherical functions on $G L_{n}$ over $p$-adic fields. Thesis, M.I.T.

L15. Lusztig, G. (1981). Green polynomials and singularities of unipotent classes, Advances in Math., 42, 169-78.
M1. Macdonald, I. G. (1971). Spherical functions on a group of $p$-adic type. Publ. Ramanujan Inst. No. 2, Madras.
M2. Macdonald, I. G. (1980). Zeta functions attached to finite general linear groups. Math. Annalen, 249, 1-15.
M3. Macdonald, I. G. (1980). Polynomial functors and wreath products, J. Pure Appl. Algebra, 18, 173-204.
M4. Macdonald, I. G. (1984). The algebra of partitions, in Group Theory: essays for Philip Hall (ed. Gruenberg and Roseblade) pp. 315-33. Academic Press, London.
M5. Macdonald, I. G. (1987). Commuting differential operators and zonal spherical functions. Springer Lecture Notes, 1271, 189-200.
M6. Macdonald, I. G. (1988). A new class of symmetric functions. Publ. I.R.M.A. Strasbourg, Actes $20^{e}$ Séminaire Lotharingien, 131-71.
M7. Macdonald, I. G. (1991). Notes on Schubert polynomials. Publications du LACIM, Montreal.
M8. Macdonald, I. G. (1992). Schur functions: theme and variations. Publ. I.R.M.A. Strasbourg, Actes $28^{e}$ Séminaire Lotharingien, 5-39.

M9. MacMahon, P. A. (1915, 1916). Combinatory Analysis I, II. Cambridge University Press. (Reprinted by Chelsea, New York, 1960.)
M10. Mead, D. G. (1993). Generators for the algebra of symmetric polynomials. Am. Math. Monthly, 100, 386-8.
M11. Mills, W. H., Robbins, D. P., and Rumsey, H. (1982). Proof of the Macdonald conjecture. Inv. Math., 66, 73-87.
M12. Morris, A. O. (1963). The characters of the groups $G L(n, q)$. Math. Zeitschrift, 81, 112-23.
M13. Morris, A. O. (1964). A note on the multiplication of Hall functions. J. London Math. Soc., 39, 481-8.
M14. Morris, A. O. (1965). The spin representation of the symmetric group. Can. J. Math., 17, 543-9.

M15. Morris, A. O. (1971). Generalizations of the Cauchy and Schur identities. J. Comb. Theory (A), 11, 163-9.
M16. Morris, A. O. and Yaseen, A. K. (1986). Some combinatorial results involving shifted Young diagrams. Math. Proc. Camb. Phil. Soc., 99, 23-31.
M17. Muirhead, R. J. (1982). Aspects of multivariate statistical theory. Wiley, New York.
M18. Murnaghan, F. D. (1937). The characters of the symmetric group. Am. J. Math., 59, 739-53.
N1. Nakayama, T. (1940). On some modular properties of irreducible representations of a symmetric group I, II. Jap. J. Math., 17, 165-84 and 411-23.

N2. Nimmo, J. J. C. (1990). Hall-Littlewood symmetric functions and the BKP equation. J. Physics (A), 23, 751-60.
P1. Parkhurst, A. M. and James, A. T. (1974). Zonal polynomials of order 1 through 12. Selected tables in math. statistics, Vol. 2. American Math. Society, Providence, Rhode Island.
P2. Pragacz, P. (1991). Algebro-geometric applications of Schur $S$ - and $Q$-polynomials, Séminaire d'Algèbre Dubreil-Malliavin 1989-90. Springer Lecture Notes, 1478, 130-91.
P3. Pragacz, P. and Thorup, A. (1992). On a Jacobi-Trudi formula for supersymmetric polynomials. Advances in Math., 95, 8-17.
P4. Puttaswamaiah, B. M. and Dixon, J. D. (1977). Modular representations of finite groups. Academic Press, New York.
R1. Redfield, J. H. (1927). The theory of group reduced distributions, Am. J. Math., 49, 433-55.
R2. Ringel, C. M. (1990). Hall polynomials for the representation-finite hereditary algebras. Advances in Math., 84, 137-78.
R3. Ringel, C. M. (1990). Hall algebras and quantum groups. Inv. Math., 101, 583-91.
R4. Ringel, C. M. (1991). Hall Algebras, in Topics in Algebra, Banach Centre Publ. 26, Warsaw.
R5. Robinson, G. de B. (1938). On the representations of $S_{n}$, I. Am. J. Math., 60, 745-60.
R6. Robinson, G. de B. (1948). On the representations of the symmetric group, III. Am. J. Math., 70, 277-94.
R7. Robinson, G. de B. (1961). Representation theory of the symmetric group. Edinburgh University Press.
R8. Rota, G.-C. (1964). On the foundations of combinatorial theory I: Theory of Möbius functions. Z. Wahrscheinlichkeitstheorie, 2, 340-68.
R9. Ryser, H. J. (1963). Combinatorial mathematics. Wiley, New York.
S1. Sagan, B. E. (1987). Shifted tableaux, Schur $Q$-functions and a conjecture of R. Stanley. J. Comb. Theory (A), 45, 62-103.
S2. Sagan, B. E. (1991). The symmetric group. Wadsworth and Brooks, Pacific Grove, California.
S3. Satake, I. (1963). Theory of spherical functions on reductive algebraic groups over $p$-adic fields. Publ. Math. IHES, 18, 5-70.
S4. Schur, I. (1901). Über ein Klasse von Matrizen die sich einer gegebenen Matrix zuordnen lassen. Dissertation, Berlin (Ges. Abhandlungen 1, 1-72).
S5. Schur, I. (1911). Über die Darstellung der symmetrischen und der alternierenden Gruppe durch gebrochene lineare Substitutionen. Crelle's Journal, 139, 155-250 (Ges. Abhandlungen, 1, 346-441).
S6. Schur, I. (1927). Über die rationalen Darstellungen der allgemeinen linearen Gruppe. Sitzungsberichte der Preussischen Akademie der Wissenschaften, (1927), 58-75 (Ges. Abhandlungen, 3, 68-85).
S7. Schützenberger, M. P. (1977). La correspondance de Robinson, in Combinatoire et représentations du groupe symétrique, Strasbourg 1976. Springer Lecture Notes, 579, 59-135.
S8. Schützenberger, M. P. (1978). Propriétés nouvelles des tableaux de Young.

Séminaire Delange-Pisot-Poitou, $19^{e}$ année, $1977 / 8$, no. 26. Secrétariat Mathématique, Paris.
S9. Sekiguchi, J. (1977). Zonal spherical functions on some symmetric spaces. Publ. RIMS, Kyoto Univ., 12, 455-9.
S10. Selberg, A. (1944). Bemerkninger om et multipelt integral. Norsk Mat. Tidsskrift, 26, 71-8.
S11. Sergeev, A. N. (1985). The tensor algebra of the identity representation as a module over the Lie superalgebras $g l(n, m)$ and $Q(n)$. Math. USSR Sbornik, 51, 419-27.
S12. Serre, J.-P. (1967). Représentations linéaires des groupes finis. Hermann, Paris.
S13. Serre, J.-P. (1970). Cours d'arithmétique. Presses Universitaires de France, Paris.
S14. Shimomura, N. (1980). A theorem on the fixed point set of a unipotent transformation on the flag manifold. J. Math. Soc. Japan, 32, 55-64.
S15. Shimura, G. (1971). Introduction to the arithmetic theory of automorphic functions. Publ. Math. Soc. Japan, No. 11, Princeton Univ. Press.
S16. Spaltenstein, N. (1976). On the fixed point set of a unipotent transformation on the flag manifold. Proc. Kon. Akad. v. Wetenschappen, 79, 452-6.
S17. Specht, W. (1932). Eine Verallgemeinerung der symmetrischen Gruppe. Schriften Math. Seminar Berlin, 1, 1-32.
S18. Specht, W. (1935). Die irreduziblen Darstellungen der symmetrischen Gruppe. Math. Z., 39, 696-711.
S19. Specht, W. (1960). Die Charaktere der symmetrischen Gruppe. Math. Z., 73, 312-29.
S20. Springer, T. A. (1970). Characters of special groups. Springer Lecture Notes, 131, 121-56.
S21. Springer, T. A. and Zelevinsky, A. V. (1984). Characters of $G L\left(n, \mathbf{F}_{q}\right)$ and Hopf algebras. J. London Math. Soc., (2) 30, 27-43.
S22. Srinivasan, B. (1992). On Macdonald's symmetric functions. Bull. London Math. Soc., 24, 519-25.
S23. Stanley, R. P. (1971). Theory and application of plane partitions I, II. Studies in Appl. Math., 50, 167-88 and 259-79.
S24. Stanley, R. P. (1984). The $q$-Dyson conjecture, generalized exponents, and the internal product of Schur functions. Contemporary Math., 34, 81-93.
S25. Stanley, R. P. (1989). Some combinatorial properties of Jack symmetric functions. Advances in Math., 77, 76-115.
S26. Steinitz, E. (1901). Zur Theorie der Abel'schen Gruppen. Jahresbericht der DMV, 9, 80-5.
S27. Stembridge, J. R. (1985). A characterization of supersymmetric polynomials. J. Algebra, 95, 439-44.

S28. Stembridge, J. R. (1989). Shifted tableaux and the projective representations of symmetric groups. Advances in Math., 74, 87-134.
S29. Stembridge, J. R. (1992). On Schur's $Q$-functions and the primitive idempotents of a commutative Hecke algebra. J. Alg. Combinatorics, 1, 71-95.
S30. Stembridge, J. R. (1995). The enumeration of totally symmetric plane partitions. Advances in Mathematics, 111, 227-43.
S31. Stembridge, J. R. (1994). Some hidden relations involving the ten symmetry classes of plane partitions. J. Comb. Theory Series A, 68, 372-409.

S32. Stembridge, J. R. (1994). Some particular entries of the two-parameter Kostka matrix. Proc. Amer. Math. Soc., 121, 367-73.
T1. Takemura, A. (1984). Zonal polynomials. Inst. of Math. Statistics Lecture Notes -Monograph Series, Vol. 4. Hayward, California.
T2. Tamagawa, T. (1963). On the $\zeta$-functions of a division algebra. Ann. Math., 77, 121-56.
T3. Thoma, E. (1964). Die unzerlegbaren, positiv-definiten Klassenfunktionen der abzählbar unendlichen symmetrischen Gruppe. Math. Z., 85, 40-61.
T4. Thomas, G. P. (1974). Baxter algebras and Schur functions. Thesis, Swansea.
T5. Thrall, R. M. (1942). On symmetrized Kronecker powers and the structure of the free Lie ring. Am. J. Math., 64, 371-8.
T6. Thrall, R. M. (1952). A combinatorial problem. Michigan Math. J., 1, 81-8.
W1. Weil, A. (1949). Number of solutions of equations in finite fields. Bull. Am. Math. Soc., 55, 497-508.
W2. Weyl, H. (1946). The classical groups. Princeton Univ. Press.
W3. White, D. (1981). Some connections between the Littlewood-Richardson rule and a construction of Schensted. J. Comb. Theory (A), 30, 237-47.
W4. Worley, D. R. (1984). A theory of shifted Young tableaux. Thesis, M.I.T.
Y1. You, Y. (1989). Polynomial solutions of the BKP hierarchy and projective representations of symmetric groups, in Infinite-dimensional Lie algebras and groups, pp. 449-464, Adv. Ser. Math. Phys., 7. World Science Publishing, Teaneck, New Jersey.
Y2. Young, A. (1901-1952). Quantitative substitutional analysis I-IX. Proc. London Math. Soc.
Z1. Zeilberger, D. and Bressoud, D. (1985). A proof of Andrews' $q$-Dyson conjecture. Discrete Math., 54, 201-24.
Z2. Zelevinsky, A. V. (1981). Representations of finite classical groups: a Hopf algebra approach. Springer Lecture Notes, 869.
Z3. Zelevinsky, A. V. (1981). A generalization of the Littlewood-Richardson rule and the Robinson-Schensted-Knuth correspondence. J. Algebra, 69, 82-94.

## Notation

## Chapter I

| $l(\lambda)$ | length of a partition $\lambda: \mathrm{I}, 1$ |
| :---: | :---: |
| $\|\lambda\|$ | weight (= sum of parts) of a partition $\lambda: \mathrm{I}, 1$ |
| $\mathscr{P}_{n}$ | the set of partitions of $n: \mathrm{I}, 1$ |
| $\mathscr{P}$ | the set of all partitions: I, 1 |
| $m_{i}(\lambda)$ | multiplicity of $i$ as a part of $\lambda: \mathrm{I}, 1$ |
| $\lambda^{\prime}$ | conjugate of a partition $\lambda: \mathrm{I}, 1$ |
| $n(\lambda)$ | $\sum(i-1) \lambda_{i}=\sum\binom{\lambda_{i}^{\prime}}{2}: \mathrm{I}, 1$ |
| $(\alpha \mid \beta)$ | Frobenius' notation for a partition: I, 1 |
| $\lambda \supset \mu$ | $\lambda_{i} \geqslant \mu_{i}$ for all $i \geqslant 1: \mathrm{I}, 1$ |
| $\lambda-\mu$ | skew diagram: I, 1 |
| $\lambda+\mu$ | partition with parts $\lambda_{i}+\mu_{i}: \mathrm{I}, 1$ |
| $\lambda \cup \mu$ | partition whose parts are those of $\lambda$ and of $\mu: \mathrm{I}, 1$ |
| $\lambda \mu$ | partition with parts $\lambda_{i} \mu_{i}: \mathrm{I}, 1$ |
| $\lambda \times \mu$ | partition with parts $\min \left(\lambda_{i}, \mu_{j}\right): \mathrm{I}, 1$ |
| $\lambda \geqslant \mu$ | $\lambda_{1}+\ldots+\lambda_{i} \geqslant \mu_{1}+\ldots+\mu_{i}$ for all $i \geqslant 1$ : I, 1 |
| $R_{i j}(i<j)$ | raising operator: I, 1 |
| $S_{n}$ | symmetric group on $n$ symbols: I, 1 |
| $\delta$ | ( $n-1, n-2, \ldots, 1,0$ ): I, 1 |
| $h(x)$ | hook length at $x \in \lambda: \mathrm{I}, 1$, Example 1 |
| $c(x)$ | content of $x \in \lambda$ : I, 1, Example 3 |
| $\varphi_{r}(t)$ | $(1-t)\left(1-t^{2}\right) \ldots\left(1-t^{r}\right)$ I I, 1, Example 3 |
| $\lambda^{*}$ | $p$-quotient of $\lambda$ : I, 1, Example 8 |
| i | $p$-core of $\lambda$ : I, 1, Example 8 |
| $\lambda \sim \sim_{p} \mu$ | $\lambda, \mu$ have the same $p$-core: I, 1, Example 8 |
| $h(\lambda)$ | product of the hook-lengths of $\lambda: \mathrm{I}, 1$, Example 10 |
| $c_{\lambda}(X)$ | content polynomial of $\lambda$ : I, 1, Example 11 |
| $\Lambda_{n}$ | $\mathrm{Z}\left[x_{1}, \ldots, x_{n}\right]^{S_{n}: \mathrm{I}}, 2$ |
| $\Lambda$ | ring of symmetric functions: I, 2 |
| $\Lambda_{A}$ | $\Lambda Q_{2} A$ ( $A$ a commutative ring): I, 2 |
| $x^{\alpha}$ | $x_{1}^{\alpha_{1} x_{2}^{\alpha_{2}} \ldots: \text { I, } 2}$ |
| $m_{\lambda}$ | monomial symmetric function generated by $x^{\lambda}$ : I, 2 |
| $e_{r}$ | $r$ th elementary symmetric function: I, 2 |
| $E(t)$ | $\Sigma e_{r} t^{r}=\Pi\left(1+x_{i} t\right): \mathrm{I}, 2$ |
| $e$ | $e_{\lambda_{1}} e_{\lambda_{2}} \ldots: \mathrm{I}, 2$ |
| $h_{r}$ | $r$ th complete symmetric function: I, 2 |
| $H(t)$ | $\Sigma h_{r} t^{r}=\Pi\left(1-x_{i} t\right)^{-1}: \mathrm{I}, 2$ |
| $h_{\lambda}$ | $h_{\lambda_{1}} h_{\lambda_{2}} \ldots: \mathrm{I}, 2$ |
| $\omega$ | involution of $\Lambda$ which interchanges $e_{r}$ and $h_{r}$ : I, 2 |


| $f_{\lambda}$ | 'forgotten' symmetric function $\omega\left(m_{\lambda}\right): \mathrm{I}, 2$ |
| :---: | :---: |
| $p_{r}$ | $r$ th power sum: I, 2 |
| $P(t)$ | $\sum p_{r} t^{r-1}: \mathrm{I}, 2$ |
| $p_{\text {入 }}$ | $p_{\lambda_{1}} p_{\lambda_{2}} \ldots: \mathrm{I}, 2$ |
| $\varepsilon_{\lambda}$ | $(-1)^{\|\lambda\|-l(\lambda)}: \mathrm{I}, 2$ |
| $z_{\lambda}$ | $\Pi_{i>1} i^{m_{l}(\lambda)} \cdot m_{i}(\lambda)!$ I, 2 |
| $\left[\begin{array}{l}n \\ r\end{array}\right]$ | $q$-binomial coefficient $\varphi_{n}(q) / \varphi_{r}(q) \varphi_{n-r}(q): \mathrm{I}, 2$, Example 3 |
| $c(G)$ | cycle indicator of a subgroup $G$ of $S_{n}$ : I, 2, Example 9 |
| $\varepsilon(w)$ | sign of $w \in S_{n}: \mathrm{I}, 3$ |
| $a_{\alpha}$ | skew-symmetric polynomial generated by $x^{\alpha}$ : I, 3 |
| $s_{\lambda}$ | Schur function: I, 3 |
| $\left[\begin{array}{l}n \\ \lambda\end{array}\right]$ | generalized $q$-binomial coefficient: I, 3, Example 1 |
| $H_{\lambda}(q)$ | hook polynomial $\Pi_{s \in \lambda}\left(1-q^{h(s)}\right.$ : I, 3, Example 2 |
| $\binom{X}{\lambda}$ | generalized binomial coefficient: I, 3, Example 4 |
| ![](https://cdn.mathpix.com/cropped/2024_12_08_1df2f08562f6a73c5373g-479.jpg?height=72&width=119&top_left_y=838&top_left_x=155) | 'supersymmetric' Schur function: I, 3, Example 23 skew Schur function: I, 5 |
| $S_{\lambda / \mu}$ |  |
| $c^{\lambda \nu}$ | coefficient of $s_{\lambda}$ in $s_{\mu} s_{\nu}$ : I, 5 |
| $K_{\lambda-\mu, \nu}$ | $\left\langle s_{\lambda / \mu}, h_{\nu}\right\rangle$ I, 5 |
| $f^{\perp}$ | adjoint of multiplication by $f \in \Lambda$ : I, 5, Example 3 |
| $\Delta$ | diagonal map $\Lambda \rightarrow \Lambda \otimes \Lambda$ : I, 5, Example 25 |
| $M(u, v)$ | transition matrix: I, 6 |
| K | Kostan matrix $M(s, m)$ : I, 6 |
| L | $M(p, m): \mathrm{I}, 6$ |
| $\lambda \leqslant_{R} \mu$ | $\lambda$ is a refinement of $\mu$ : $\mathrm{I}, 6$ |
| $x^{\lambda}$ | irreducible character of $S_{n}: \mathrm{I}, 7$ |
| $\chi_{\rho}^{\lambda}$ | value of $\chi^{\lambda}$ at elements of cycle-type $\rho$ : I, 7 |
| $f * g$ | internal product of $f, g \in \Lambda$ : I, 7 |
| $M_{\lambda}$ | Specht module: I, 7, Example 15 |
| $f \circ g$ | plethysm ( $f, g \in \Lambda$ ): I, 8 |
| $F_{\lambda}$ | irreducible polynomial functor: I, Appendix A, 5 |

## Chapter II

$\mathfrak{o}$
$\mathfrak{p}$
$k$
$l(M)$
$a_{\lambda}(q)$
$G_{\mu \nu}^{\lambda}(\mathfrak{o})$
$H(\mathfrak{p})$
$g_{S}(t), g_{\mu \nu}^{\lambda}(t)$
a discrete valuation ring: II, 1
maximal ideal of o : II, 1 . residue field $\mathfrak{o} / \mathfrak{p}$ : II, 1
length of a finite 0 -module $M$ : II, 1
number of automorphisms of a module of type $\lambda: \mathrm{II}, 1$ number of submodules $N$ of an 0 -module $M$ of type $\lambda$, such that $N$ has type $\nu$ and $M / N$ has type $\mu: \mathrm{II}, 2$
Hall algebra of o : II, 2
Hall polynomials: II, 4

Chapter III
![](https://cdn.mathpix.com/cropped/2024_12_08_1df2f08562f6a73c5373g-480.jpg?height=716&width=977&top_left_y=185&top_left_x=154)

## Chapter IV

| k | finite field: IV, 1 |
| :---: | :---: |
| q | number of elements in $k$ : IV, 1 |
| $\vec{k}$ | algebraic closure of $k$ : IV, 1 |
| F | Frobenius automorphism $x \rightarrow x^{q}$ : IV, 1 |
| $k_{n}$ | extension of $k$ of degree $n$ contained in $\bar{k}$ : IV, 1 |
| M | multiplicative group of $\bar{k}$ : IV, 1 |
| $M_{n}$ | multiplicative group of $k_{n}$ : IV, 1 |
| $N_{n, m}$ | norm homomorphism $M_{n} \rightarrow M_{m}$ (where $m$ divides $n$ ): IV, 1 |
| L | $\lim _{\rightarrow} \hat{M}_{n}$ :IV, 1 |
| $L_{n}$ | subgroup of $L$ fixed by $F^{n}$ : IV, 1 |
| $\langle\xi, x\rangle_{n}$ | pairing between $L_{n}$ and $M_{n}$ : IV, 1 |
| $\Phi$ | set of $F$-orbits in $M$, identified with the set of monic irreducible polynomials (other than $t$ ) in $k[t]$ IV, 1 |
| $d(f)$ | degree of $f \in \Phi$ : IV, 1 |
| $G_{n}$ | $G L_{n}(k)$ : IV, 2 |
| 画 | partition-valued function on $\Phi$ : IV, 2 |
| $\\|\boldsymbol{\mu}\\|$ | $\Sigma_{f \in \Phi} d(f)\|\boldsymbol{\mu}(f)\|: \mathrm{IV}, 2$ |
| $c_{\mu}$ | conjugacy class parametrized by $\boldsymbol{\mu}$ : IV, 2 |
| $q_{f}$ | $q^{d(f)}:$ IV, 2 |
| $a_{\mu}$ | $\Pi_{f \in \Phi} a_{\mu(f)}\left(q_{f}\right)=$ order of centralizer of any element of $c_{\mu}: \operatorname{IV}, 2$ |
| $u_{1}{ }^{\circ} \ldots \circ u_{r}$ | induction product of class functions: IV, 3 |
| $\pi_{\mu}$ | characteristic function of $c_{\mu}$ : IV, 3 |


| $A_{n}$ | space of class functions on $G_{n}$ : IV, 3 |
| :---: | :---: |
| A | $\oplus_{n>0} A_{n}$ :IV, 3 |
| $R_{n}$ | Z-module generated by the characters of $G_{n}$ :IV, 3 |
| R | $\oplus_{n>0} R_{n}$ : IV, 3 |
| B | polynomial algebra over $\mathbf{C}$ generated by independen variables $e_{n}(f)(n \geqslant 1, f \in \Phi)$ : IV, 4 |
| $\tilde{P}_{\lambda}(f)$ | $q_{f}^{-n(\lambda)} P_{\lambda}\left(X_{f} ; q_{f}^{-1}\right)$ IV, 4 |
| $\tilde{Q}_{\lambda}(f)$ | $a_{\lambda}\left(q_{f}\right) \tilde{P}_{\lambda}(f)$ : IV, 4 |
| $\tilde{P}_{\mu}$ | $\Pi_{f \in \Phi} \tilde{P}_{\mu(f)}(f)$ :IV, 4 |
| ![](https://cdn.mathpix.com/cropped/2024_12_08_1df2f08562f6a73c5373g-481.jpg?height=72&width=63&top_left_y=481&top_left_x=154) | $\Pi_{f \in \Phi} \tilde{Q}_{\mu(f)}(f)=a_{\mu} \tilde{P}_{\mu}: \operatorname{IV}, 4$ <br> characteristic map: IV, 4 |
| $\tilde{p}_{n}(x)$ | $p_{n / d}(f)(x \in f, n$ a multiple of $d=d(f)$ ): IV, 4 |
| $\tilde{p}_{n}(\xi)$ | $(-1)^{n-1} \Sigma_{x \in M_{n}}\langle\xi, x\rangle_{n} \tilde{p}_{n}(x)$ : IV, 4 |
| $\Theta$ | set of $F$-orbits in L: IV, 4 |
| $d(\varphi)$ | number of elements of $\varphi \in \Theta$ : IV, 4 |
| $p_{r}(\varphi)$ | $\tilde{p}_{r d}(\xi)(\xi \in \varphi, d=d(\varphi)): \mathrm{IV}, 4$ |
| $S_{\lambda}(\varphi)$ | Schur function in the $\varphi$-variables: IV, 4 |
| $\lambda$ | partition-valued function on $\Theta$ : IV, 4 |
| \|| $\lambda \\|$ | $\sum_{\varphi \in \theta} d(\varphi)\|\lambda(\varphi)\|:$ IV, 4 |
| $S_{\lambda}$ | $\Pi_{\varphi \in \boldsymbol{\theta}} s_{\lambda(\varphi)}(\varphi):$ IV, 4 |
| $S$ | Z-submodule of $B$ generated by the $S_{\lambda}$ : IV, 4 |
| $x^{\lambda}$ | irreducible character of $G_{n}$ : IV, 6 |
| $\chi_{\mu}^{\lambda}$ | value of $\chi^{\lambda}$ at the class $c_{\mu}$ :IV, 6 |

Chapter V
$F$
$|a|$
$\mathbf{D}$
$\mathfrak{p}$
$k$
$q$
$\pi$
$v$
$G$
$G^{+}$
$K$
$L(G, K)$ (resp.
$\left.L\left(G^{+}, K\right)\right)$
$f * g$
$H(G, K)($ resp.
$\left.H\left(G^{+}, K\right)\right)$
$\pi^{\lambda}$
$c_{\lambda}$
$\rho$
$\omega$
$\hat{\omega}(f), \hat{f}(\omega)$
non-archimedean local field: V, 1
absolute value of $a \in F: \mathrm{V}, 1$
ring of integers of $F: V, 1$
maximal ideal of $\mathrm{o}: \mathrm{V}, 1$
(finite) residue field $\mathrm{o} / \mathrm{p}: \mathrm{V}, 1$
number of elements in $k: \mathrm{V}, 1$
generator of $\mathfrak{p}: \mathrm{V}, 1$
normalized valuation on $F^{*}$ : $\mathrm{V}, 1$
$G L_{n}(F): V, 2$
$G \cap M_{n}(\mathrm{p}): \mathrm{V}, 2$
$G L_{n}(\mathfrak{D}): \mathbf{V}, 2$
space of complex-valued continuous functions
of compact support on $K \backslash G / K$ (resp. $K \backslash G^{+} / K$ ): V, 2
convolution product in $L(G, K): V, 2$
Hecke ring of $(G, K)$ (resp. $\left(G^{+}, K\right)$ ): V, 2
$\operatorname{diag}\left(\pi^{\lambda_{1}}, \ldots, \pi^{\lambda_{n}}\right): V, 2$
characteristic function of $K \pi^{\lambda} K: V, 2$
$\frac{1}{2}(n-1, n-3, \ldots, 1-n): V, 2$
spherical function on $G$ relative to $K: \mathrm{V}, 3$
Fourier transform of $f \in L(G, K)$ by $\omega: \mathrm{V}, 3$.
$\omega_{s}$
$G_{m}^{+}$
$\tau_{m}$
$\tau(X)$
$\zeta(s, \omega)$

Chapter $V I$
F
$z_{\lambda}(q, t)$
$(a ; q)_{\infty}$
$\Pi(x, y ; q, t)$
$g_{n}(x ; q, t)$
$g_{\lambda}(x ; q, t)$
$\omega_{u, v}$
$T_{4,}$
$D_{1}$
$D_{1}$
${ }_{D_{n}, x}(X ; q, t)$
$D_{n}^{r}$
$A_{i}(x ; t)$
$D_{n}(X ; \alpha)$
$\square_{n}{ }^{\alpha}$
$P_{\lambda}(x ; q, t)$
$b_{\lambda}(q, t)$
$Q_{\lambda}(x ; q, t)$
$\omega_{\alpha}$
$\varphi_{\lambda / \mu}, \varphi_{\lambda / \mu}^{\prime}$,
$\psi_{\lambda / \mu}, \psi_{\lambda / \mu}^{\prime}$
$a(s), a^{\prime}(s)$
$l(s), l^{\prime}(s)$
$\varepsilon_{u,}$
$b_{\lambda}(s ; q, t)$
$f_{\mu \nu}^{\lambda}(q, t)$
$P_{\lambda / \mu}(q, t), Q_{\lambda / \mu}(q, t)$
$c_{\lambda}(q, t)$
$c_{\lambda}^{\prime}(q, t)$
$\dot{J}_{\lambda}(x ; q, t)$
$K_{\lambda \mu}(q, t)$
$p_{\rho}(x ; t)$
$X_{\rho}^{\lambda}(q, t)$
$L_{n}$
$[f]$
$\Delta(x ; q, t)$
$(q, t) \rightarrow_{\alpha}(1,1)$
$g_{n}^{(\alpha)}(x)$
spherical function with parameter $s=\left(s_{1}, \ldots, s_{n}\right): V, 3$
$\left\{x \in G^{+}: v(\operatorname{det} x)=m\right\}: V, 4$
characteristic function of $G_{m}^{+}: V, 4$
Hecke series $\Sigma_{m} \tau_{m} X^{m}: V, 4$
zeta function defined by $\omega: V, 4$
the field $Q(q, t):$ VI, 2
$z_{\lambda} \Pi\left(1-q^{\lambda_{i}}\right) /\left(1-t^{\lambda_{i}}\right): \mathrm{VI}, 2$
$\Pi_{0}^{\infty}\left(1-a q^{r}\right): V I, 2$
$\Pi_{i, j}\left(t x_{i} y_{j} ; q\right)_{\infty} /\left(x_{i} y_{j} ; q\right)_{\infty}:$ VI, 2
coefficient of $y^{n}$ in $\Pi\left(t x_{i} y ; q\right)_{\infty} /\left(x_{i} y ; q\right)_{\infty}$ :VI, 2
$\Pi g_{\lambda_{l}}(x ; q, t): V I, 2$
the endomorphism of $\Lambda_{F}$ defined by
$p_{r} \mapsto(-1)^{r-1} p_{r}\left(1-u^{r}\right) /\left(1-v^{r}\right)(r \geqslant 1): V I, 2$
$f\left(x_{1}, \ldots, x_{n}\right) \mapsto f\left(x_{1}, \ldots, u x_{i}, \ldots, x_{n}\right): V I, 3$
see VI, (3.2)
coefficient of $X^{r}$ in $D_{n}(X ; q, t)$ : VI, 3
$\Pi_{j \neq i}\left(t x_{i}-x_{j}\right) /\left(x_{i}-x_{j}\right): V I, 3$
see VI, 3, Example 3
Laplace-Beltrami operator: VI, 3, Example 3(e)
symmetric functions defined by VI, (4.7)
$\left\langle P_{\lambda}, P_{\lambda}\right\rangle^{-1}$ : IV, 4
$b_{\lambda}(q, t) P_{\lambda}(x ; q, t):$ IV, 4
the automorphism of $\Lambda_{F}$ defined by
$p_{r} \mapsto(-1)^{r-1} \alpha^{r} p_{r}$ : IV, 5, Example 3
coefficients in Pieri formulas: VI, (6.24)
arm length and colength of $s \in \lambda$ : VI, 6
leg length and colength of $s \in \lambda:$ VI, 6
specialization $p_{r} \mapsto\left(1-u^{r}\right) /\left(1-t^{r}\right)$ : VI, 6
$\left(1-q^{a(s)} t^{l(s)+1}\right) /\left(1-q^{a(s)+1} t^{l(s)}\right)$ :VI, 6
coefficient of $P_{\lambda}$ in $P_{\mu} P_{\nu}$ : VI, 7
skew functions: VI, 7
$\Pi_{s \in \lambda}\left(1-q^{a(s)} t^{l(s)+1)}\right): V I, 8$
$\Pi_{s \in \lambda}\left(1-q^{a(s)+1} t^{l(s)}\right): V I, 8$
$c_{\lambda}(q, t) P_{\lambda}(x ; q, t): V I, 8$
coefficient of $S_{\lambda}(x ; t)$ in $J_{\mu}(x ; q, t)$ : VI, 8
$p_{\rho}(x) \Pi\left(1-t^{\left.\rho_{l}\right)}: \mathrm{VI}, 8\right.$
coefficient of $z_{\rho}^{-1} p_{\rho}(x ; t)$ in $J_{\lambda}(x ; q, t)$ : VI, 8
$F\left[x_{1}^{ \pm 1}, \ldots, x_{n}^{ \pm 1}\right]: V I, 9$
$f\left(x_{1}^{-1}, \ldots, x_{n}^{-1}\right)$ if $f=f\left(x_{1}, \ldots, x_{n}\right)$ :VI, 9
constant term in $f \in L_{n}:$ VI, 9
$\Pi_{i \neq j}\left(x_{i} x_{j}^{-1} ; q\right)_{\infty} /\left(t x_{i} x_{j}^{-1} ; q\right)_{\infty}:$ VI, 9
$(q, t) \rightarrow(1,1)$ and $(1-q) /(1-t) \rightarrow \alpha$ VI, 10
coefficient of $y^{n}$ in $\Pi\left(1-x_{i} y\right)^{-1 / \alpha}$ : VI, 10
$g_{\lambda}^{(\alpha)}(x)$
$b_{\lambda}^{(\alpha)}(s)$
$\psi_{\lambda / \mu}^{(\alpha)}$
$P_{\lambda}^{(\alpha)}$
$b_{\lambda}^{(\alpha)}$
$Q_{\lambda}^{(\alpha)}$
$P_{\lambda / \mu}^{(\alpha)}, Q_{\lambda / \mu}^{(\alpha)}$
$f_{\mu \nu}^{\lambda}(\alpha)$
$\varepsilon_{X}$
$c_{\lambda}(\alpha)$
$c_{\lambda}^{\prime}(\alpha)$
$J_{\lambda}^{(\alpha)}$
$\theta_{\rho}^{\lambda}(\alpha)$
$\Pi g_{\Lambda}^{(\alpha)}(x): V I, 10$
$(a(s) \alpha+l(s)+1) /(a(s) \alpha+l(s)+\alpha): V I, 10$
limit of $\psi_{\lambda / \mu}(q, t)$ as $(q, t) \rightarrow_{\alpha}(1,1)$ : VI, 10
Jack symmetric function: VI, 10
$\Pi_{s \in \lambda} b_{\lambda}^{(\alpha)}(s): V I, 10$
$b_{\lambda}^{(\alpha)} P_{\lambda}^{(\alpha)}:$ VI, 10
skew Jack functions: VI, 10
coefficient of $P_{\lambda}^{(\alpha)}$ in $P_{\mu}^{(\alpha)} P_{\nu}^{(\alpha)}$ : VI, 10
$F$-algebra homomorphism $\Lambda_{F} \rightarrow F[X]$ defined by
$p_{r} \rightarrow X(r \geqslant 1): V I, 10$
$\Pi_{s \in \lambda}(a(s) \alpha+l(s)+1): V I, 10$
$\Pi_{s \in \lambda}(a(s) \alpha+l(s)+\alpha): \mathrm{VI}, 10$
$c_{\lambda}(\alpha) P_{\lambda}^{(\alpha)}$ :VI, 10
coefficient of $p_{\rho}$ in $J_{\lambda}^{(\alpha)}: V I, 10$

Chapter VII
$C(G, K)$
$1_{K}^{G}$
$V^{K}$
$H_{n}$
$\Gamma(w)$
$H_{\rho}$
$\omega^{\lambda}$
$\omega_{\rho}^{\lambda}$
$Z_{\lambda}$
$Z_{\lambda}^{\prime}$
$G$
$K$
d $k$
$P(G)$
$P(K \backslash G), P(G / K)$, $P(G, K)$
$\Sigma$
$\Sigma^{+}$
$P(\Sigma)$
T
$\Omega_{\lambda}$
$\mathrm{d} x$
$\mathrm{d} \nu(x)$
$x^{(r)}$
$\Delta_{\mu}$
$B^{+}$
$\Gamma_{n}(a, \lambda)$
space of functions on $G$ constant on the double cosets of K: VII, 1
permutation representation of $G$ on $G / K$ :VII, 1
subspace of vectors $v \in V$ fixed by $K$ : VII, 1
hyperoctahedral subgroup of $S_{2 n}$ : VII, 2
graph attached to $w \in S_{2 n}$ : VII, 2
double coset of $H_{n}$ in $S_{2 n}$ : VII, 2
zonal spherical function of ( $S_{2 n}, H_{n}$ ):VII, 2
value of $\omega^{\lambda}$ at permutations of coset-type $\rho:$ VII, 2
zonal polynomial, equal to $J_{\lambda}^{(2)}$ :VII, 2
$2^{|\lambda| J_{\lambda}^{(1 / 2)}}$ :VII, 2, Example 7
$G L_{n}(\mathbf{R})$ :VII, 3
$O(n)$ :VII, 3
normalized Haar measure on $K$ : VII, 3
space of polynomial functions on $G$ : VII, 3
subspaces of $P(G)$ :VII, 3
space of real symmetric $n \times n$ matrices: VII, 3
cone of positive definite symmetric $n \times n$ matrices: VII, 3
space of polynomial functions on $\mathbf{\Sigma}$ : VII, 3
$2 m$ th tensor power of $V=\mathbf{R}^{n}$ : VII, 3
zonal spherical function of ( $G, K$ ) indexed by $\lambda$ : VII, 3
Lebesgue measure on $G$ : VII, 4
$(2 \pi)^{-n^{2} / 2} \exp \left(-\frac{1}{2}\right.$ trace $\left.x^{\prime} x\right) \mathrm{d} x$ : VII, 4
the $r \times r$ matrix $\left(x_{i j}\right)_{1<i, j<r}(x \in G): V I I, 4$
polynomial function on $G$ defined by $x \rightarrow \Pi\left(\operatorname{det} x^{\left(\mu_{i}^{\prime}\right)}\right)$,
$\mu$ a partition of length $\leqslant n$ :VII, 4
subgroup of $G$ consisting of upper triangular matrices
with positive diagonal elements: VII, 4
$\pi^{n(n-1) / 4} \prod_{i=1}^{n} \Gamma\left(a+\lambda_{i}-\frac{1}{2}(i-1)\right):$ VII, 4, Example 8
abacus: I, 1, Ex. 8
Adams operations: I, 2
addition of partitions: I, 1
antisymmetrization: I, 3
arm length, colength: VI, 6
array: II, Appendix
augmented monomial symmetric function: I, 6, Ex. 9
augmented Schur function: I, 7, Ex. 17
basic characters of $G L_{n}(k)$ IV, 6, Ex. 1
Bell polynomials: I, 2, Ex. 11
bitableau: I, 5, Ex. 23
border of a partition: I, 1
border strip: I, 1

Cauchy's determinant: I, 4, Ex. 6
character polynomial: I, 7, Ex. 14
characteristic map: I, 7 and IV, 4
characters of $S_{n}$ : I, 7
charge of a word or tableau: III, 6
column-strict plane partition: I, 5, Ex. 13
column-strict tableau: I, 1
complement of a partition: I, 1, Ex. 17
complete symmetric functions: I, 2
completely symmetric plane partition: I, 5,
Ex. 18
composition (=plethysm): I, 8 and I, Appendix A, 6
conjugate diagram: I, 1
conjugate partition: I, 1
connected components of a skew diagram: I, 1
content: I, 1, Ex. 3
content polynomial: I, 1, Ex. 11
coset-type of a permutation: VII, 2
cotype: II, 1
cycle indicator: I, 2, Ex. 9
cycle-product: I, Appendix B, 3
cycle-type of a permutation: I, 7
cyclic D-module: I, 2, Ex. 9
cyclically symmetric plane partitions: I, 5, Ex. 18
diagonal map: I, 5, Ex. 25
diagram of a partition: I, 1
Dickson's theorem: I, 2, Ex. 27
dominance partial order on partitions: I, 1
domino: I, 6, Ex. 5
domino tableau: I, 6, Ex. 7
domino tabloid: I, 6, Ex. 5
double diagram of a strict partition: I, 1, Ex. 9
double strip: III, 8, Ex. 11
doubly stochastic matrix: I, 1, Ex. 13
dual of a finite D -module: II, 1
elementary D -module: II, 1
elementary symmetric functions: I, 2
even partition: I, 5, Ex. 5 and VII, 2
exterior powers: I, 2
finite o -module: II, 1
flag manifold: II, 3, Ex.
forgotten symmetric functions: I, 2
Fourier transform: V, 3 and VII, 1, Ex. 4
Frobenius automorphism: IV, 1
Frobenius notation for partitions: I, 1
fundamental theorem on symmetric
functions: I, 2

Gale-Ryser theorem: I, 7, Ex. 9
Gaussian polynomials: 1, 2, Ex. 3
Gelfand pair: VII, 1
generalized binomial coefficients: I, 3,
Ex. 4
generalized tableau: I, 8, Ex. 8
Green's polynomials: III, 7

Hall algebra: II, 2
Hall polynomial: II, 4
Hall-Littlewood functions: III, 2
Hecke ring: V, 2 and V, 5
Hecke series: V, 4 and V, 5
height of a border strip: I, 1
homogeneous polynomial functor: I,
Appendix A, 1
hook-length: I; 1, Ex 1 and Ex. 14
hook polynomial: I, 3, Ex. 2
horizontal strip: I, 1
hyperoctahedral group: VII, 2
induction product: I, Appendix A, 6 and
IV, 3
internal product: I, 7

Jack's symmetric functions: VI, 10
Jacobi-Trudi formula: I, 3
Jordan canonical form: IV, 2, Ex. 1

Kostka numbers: I, 6

Laplace-Beltrami operator: VI, 3, Ex. 3 and VII, 2, Ex. 3
lattice permutation: I, 9
lattice property: III, 8
leg length, colength: VI, 6
length of a finite 0 -module: II, 1
length of a partition: I, 1
linearization of a polynomial functor: I, Appendix A, 3
Littlewood-Richardson rule: I, 9
local field: V, 1
$L R$-sequence: II, 3
marked shifted tableau: III, 8
matrix coefficients of a representation: I,
Appendix A, 8
maximal tori: IV, 2, Ex. 4
metric tensor: VI, 1, Ex.
modified cycle-type: I, 7, Ex. 24
monomial symmetric functions: I, 2
Muirhead's inequalities: I, 2, Ex. 18
multiplication of partitions: I, 1
multiplicative family: VI, 1, Ex.
multiplicity-free representation: VII, 1
Murnaghan-Nakayama rule: I, 7, Ex. 5

Nakayama's conjecture: I, 7, Ex. 19
natural ordering of partitions: I, 1
Newton's formulas: I, 2
normal distribution: VII, 4
odd partition: III, 8
orthogonality relations: III, 7 and VI, 8
parts of a partition: I, 1
parts of a plane partition: I, 5, Ex. 13
p-bar core: I, 1, Ex. 9
$p$-core of a partition: I, 1, Ex. 8
Pfaffian: III, 8
Pieri's formula: I, 5 and VI, 6
plane partition: I, 5, Ex. 13-19
plethysm: I, 8 and I, Appendix A, 6
Polya's theorem: I, 2, Ex. 9
polynomial functor: I, Appendix A, 1
polynomial representation: I, Appendix A, 8
positive type: VII, 1
power sums: I, 2
p-quotient of a partition: I, 1, Ex. 8
p-residue of a partition: I, 1, Ex. 8
p-tableau: I, 5, Ex. 2
$q$-binomial coefficient: I, 2, Ex. 3
quadratic reciprocity: I, 3, Ex. 17
raising operator: I, 1
refinement of a partition: I, 6
reverse lexicographical order on partitions:
I, 1
ribbon: I, 1
rim of a partition: I, 1
ring of integers of a local field: $\mathrm{V}, 1$
ring of symmetric functions: I, 2
row-strict array: II, Appendix
scalar product: I, 4; III, 4; VI, 1
Schur algebra: I, Appendix A, 8, Ex. 6
Schur functions: I, 3
Schur operation: I, 3
Schur $Q$-functions: III, 8
Sergeev-Pragacz formula: I, 3, Ex. 24
shape of a tableau: I, 1
shifted diagram: I, 1, Ex. 9
shifted standard tableau: III, 8, Ex. 12
shifted tableau: III, 8
skew diagram: I, 1
skew Hall-Littlewood functions: III, 5
skew hook: I, 1
skew Schur functions: I, 5
Specht module: I, 7, Ex. 15
special border strip: I, 6, Ex. 4
spherical functions: V, 3
spherical transform: VII, 1, Ex. 4
staircase partition: III, 8, Ex. 3
standard tableau: I, 1
Stirling numbers: I, 2, Ex. 11
strict partition: I, 1, Ex. 9
strictly lower (upper) (uni) triangular: I, 6
symmetric function: I, 2
symmetric polynomial: I, 2
symmetric powers: I, 2
symmetrical plane partitions: I, 5, Ex. 15
tableau: I, 1
transition matrix: I, 6
twisted Gelfand pair: VII, 1, Ex. 10
type of a finite o-module: II, 1
unimodal polynomial: I, 3, Ex. 1 and I, 8, Ex. 4

Vandermonde determinant: I, 3 vertical strip: I, 1
weight of a marked shifted tableau: III, 8 weight of a partition: I, 1
weight of a plane partition: I, 5, Ex. 13 weight of a tableau: I, 1
Weyl's identity: I, 5, Ex. 9

Wishart density: VII, 4, Ex. 7
wreath product: I, Appendix A, 6 and I, Appendix B
zeta function: V, 4, and V, 5 zonal polynomials: VII, 2 zonal spherical functions: VII, 1


[^0]:    †Gordon James [J8] reports that he was once told that 'the Littlewood-Richardson rule helped to get men on the moon, but it was not proved until after they had got there. The first part of this story might be an exaggeration.'

[^1]:    *This Appendix was written by A. Zelevinsky for the Russian version of the first edition of this book, and is reproduced here (in English, for the reader's convenience) with his permission.

