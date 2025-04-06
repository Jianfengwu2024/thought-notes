# Symmetric Functions and Hall Polynomials IV


## V

## THE HECKE RING OF $G L_{n}$ OVER A LOCAL FIELD

## 1. Local fields

Let $F$ be a locally compact topological field. We shall assume that the topology of $F$ is not the discrete topology, since any field whatsoever is locally compact when given the discrete topology. A non-discrete locally compact field is called a local field.

Every local field $F$ carries a canonical absolute value, which can be defined as follows. Let $d x$ be a Haar measure for the additive group of $F$. Then for $a \in F, a \neq 0$, the absolute value $|a|$ is defined by $d(a x)=|a| d x$. Equivalently, for any measurable set $E$ in $F$, the measure of $a E$ is $|a|$ times the measure of $E$. To complete the definition we set $|0|=0$. Then it can be shown that $|a+b| \leqslant|a|+|b|$ for any $a, b \in F$, and that the distance function $d(a, b)=|a-b|$ determines the topology of $F$.

There are now two possibilities. Either the absolute value $|a|$ satisfies the axiom of Archimedes, in which case $F$ is connected and can be shown to be isomorphic to either $\mathbf{R}$ or $\mathbf{C}$ : these are the archimedean local fields. The other possibility is that the absolute value $|a|$ is non-archimedean, in which case $F$ is totally disconnected (the only connected subsets of $F$ are single points): these are the non-archimedean local fields.

The classification of the non-archimedean local fields can be simply described. If $F$ has characteristic 0 , then $F$ is a finite algebraic extension of the field $\mathbf{Q}_{p}$ of $p$-adic numbers, for some prime $p$. If $F$ has characteristic $>0$, then $F$ is a field of formal power series in one variable over a finite field.

From now on, let $F$ be a non-archimedean local field. Let $\mathfrak{D}=$ $\{a \in F:|a| \leqslant 1\}$ and $\mathfrak{p}=\{a \in F:|a|<1\}$. Then $\mathfrak{0}$ and $\mathfrak{p}$ are compact open subsets of $F$; moreover $\mathfrak{o}$ is a subring of $F$, and $\mathfrak{p}$ is an ideal in $\mathfrak{0}$. The ring 0 is the ring of integers of $F$; it is a complete discrete valuation ring, with $F$ as field of fractions; $\mathfrak{p}$ is the maximal ideal of $\mathfrak{o}$, and $k=0 / \mathfrak{p}$ is a finite field (because it is both compact and discrete). Let $q$ denote the number of elements in $k$, and let $\pi$ be a generator of $\mathfrak{p}$. We have $|\pi|=q^{-1}$, and hence the absolute value $|a|$ of any $a \neq 0$ in $F$ is a power (positive or negative) of $q$. The normalized valuation $v: F^{*} \rightarrow \mathbf{Z}$ is defined by

$$
v(x)=n \Leftrightarrow x=u \pi^{n}
$$

with $u$ a unit in o (i.e. $|u|=1$ ).

## 2. The Hecke ring $H(G, K)$

Let $F$ be a non-archimedean local field, and let $G=G L_{n}(F)$ be the group of all invertible $n \times n$ matrices over $F$. Also let

$$
G^{+}=G \cap M_{n}(\mathfrak{D})
$$

be the subsemigroup of $G$ consisting of all matrices $x \in G$ with entries $x_{i j} \in \mathfrak{D}$, and let

$$
K=G L_{n}(\mathfrak{D})=G^{+} \cap\left(G^{+}\right)^{-1}
$$

so that $K$ consists of all $x \in G$ with entries $x_{i j} \in \mathfrak{0}$ and $\operatorname{det}(x)$ a unit in $\mathfrak{D}$.
We may regard $G$ as an open subset of matrix space $M_{n}(F)=F^{n^{2}}$, whence $G$ inherits a topology for which it is a locally compact topological group. Since $\mathfrak{D}$ is compact and open in $F$, it follows that $G^{+}$is compact and open in $G$, and that $K$ is a compact open subgroup of $G$.

A Haar measure on $G$ is given by the formula

$$
d x=\left(\prod_{i, j} d x_{i j}\right) /|\operatorname{det} x|^{n}
$$

and is both left- and right-invariant. In particular, we have $d x=d x^{t}$, where $x^{t}$ is the transpose of $x$.

Let $d x$ henceforth denote the unique Haar measure on $G$ for which $K$ has measure 1.

Next, let $L(G, K)$ (resp. $L\left(G^{+}, K\right)$ ) denote the space of all complexvalued continuous functions of compact support on $G$ (resp. $G^{+}$) which are bi-invariant with respect to $K$, i.e. such that

$$
f\left(k_{1} x k_{2}\right)=f(x)
$$

for all $x \in G$ (resp. $G^{+}$) and $k_{1}, k_{2} \in K$. We may and shall regard $L\left(G^{+}, K\right)$ as a subspace of $L(G, K)$.

We define a multiplication on $L(G, K)$ as follows: for $f, g \in L(G, K)$,

$$
(f * g)(x)=\int_{G} f\left(x y^{-1}\right) g(y) d y .
$$

(Since $f$ and $g$ are compactly supported, the integration is over a compact set.) This product is associative, and we shall see in a moment that it is commutative. Since $G^{+}$is closed under multiplication it follows immediately from the definition that $L\left(G^{+}, K\right)$ is a subring of $L(G, K)$.

Each function $f \in L(G, K)$ is constant on each double coset $K x K$ in $G$. These double cosets are compact, open and mutually disjoint. Since $f$ has compact support, it follows that $f$ takes non-zero values on only finitely many double cosets $K x K$, and hence can be written as a finite linear combination of their characteristic functions. Hence the characteristic functions of the double cosets of $K$ in $G$ form a $\mathbf{C}$-basis of $L(G, K)$. The characteristic function of $K$ is the identity element of $L(G, K)$.

If we vary the definition of the algebra $L(G, K)$ (resp. $L\left(G^{+}, K\right)$ ) by requiring the functions to take their values in $\mathbf{Z}$ instead of $\mathbf{C}$, the resulting ring is called the Hecke ring of $G$ (resp. $G^{+}$), and we denote it by $H(G, K)$ (resp. $H\left(G^{+}, K\right)$ ). Clearly we have
(2.1) $L(G, K) \cong H(G, K) \otimes_{\mathbf{z}} \mathbf{C}, \quad L\left(G^{+}, K\right) \cong H\left(G^{+}, K\right) \otimes_{\mathbf{z}} \mathbf{C}$.

Our first aim is to show that the Hecke ring $H(G, K)$ is closely related to the Hall algebra $H(0)$ of the discrete valuation ring 0.

Consider a double coset $K x K$, where $x \in G$. By multiplying $x$ by a suitable power of $\pi$ (the generator of $\mathfrak{p}$ ) we can bring $x$ into $G^{+}$. The theory of elementary divisors for matrices over a principal ideal domain now shows that by pre- and post-multiplying $x$ by suitable elements of $K$ we can reduce $x$ to a diagonal matrix. Multiplying further by a diagonal matrix belonging to $K$ will produce a diagonal matrix whose entries are powers of $\pi$, and finally conjugation by a permutation matrix will get the exponents in descending order. Hence

## (2.2) Each double coset KxK has a unique representative of the form

$$
\pi^{\lambda}=\operatorname{diag}\left(\pi^{\lambda_{1}}, \ldots, \pi^{\lambda_{n}}\right)
$$

where $\lambda_{1} \geqslant \lambda_{2} \geqslant \ldots \geqslant \lambda_{n}$. We have $\lambda_{n} \geqslant 0$ (so that $\lambda$ is a partition) if and only if $x \in G^{+}$.

Let $c_{\lambda}$ denote the characteristic function of the double coset $K \pi^{\lambda} K$. Then from (2.2) we have
(2.3) The $c_{\lambda}$ (resp. the $c_{\lambda}$ such that $\lambda_{n} \geqslant 0$ ) form a $\mathbf{Z}$-basis of $H(G, K)$ (resp. $H\left(G^{+}, K\right)$ ). The characteristic function $c_{0}$ of $K$ is the identity element of $H(G, K)$ and $H\left(G^{+}, K\right)$. I

We can now prove that $H(G, K)$ (and hence also $H\left(G^{+}, K\right), L(G, K)$ and $L\left(G^{+}, K\right)$ ) is commutative:
(2.4) Let $f, g \in H(G, K)$. Then $f * g=g * f$.

Proof. Let $t: G \rightarrow G$ be the transposition map: $t(x)=x^{t}$. Clearly $K$ is stable under $t$, and since by (2.2) each double coset $K x K$ contains a
diagonal matrix, it follows that $K x K$ is stable under $t$. Hence $f \circ t=f$ for all $f \in H(G, K)$, and therefore

$$
\begin{align*}
(f * g)(x) & =\int_{G} f(x y) g\left(y^{-1}\right) d y \\
& =\int_{G} f\left(y^{t} x^{t}\right) g\left(\left(y^{t}\right)^{-1}\right) d y^{t} \\
& =(g * f)\left(x^{t}\right)=(g * f)(x) . \\
H(G & , K)=H\left(G^{+}, K\right)\left[c_{\left(\left(^{1}\right)\right.}^{-1}\right] . \tag{2.5}
\end{align*}
$$

Proof. Since $\pi^{\left(1^{n}\right)}=\pi 1_{n}$ is in the centre of $G$, an easy calculation shows that, for any $\lambda$ and any integer $r$, we have

$$
c_{\lambda} * c_{\left(r^{n}\right)}=c_{\lambda+\left(r^{n}\right)}
$$

where $\lambda+\left(r^{n}\right)$ is the sequence $\left(\lambda_{1}+r, \ldots, \lambda_{n}+r\right)$. In particular it follows that $c_{\left(1^{n}\right)}$, the characteristic function of $K \pi^{\left(1^{n}\right)} K=\pi K$, is a unit in $H(G, K)$ and that its $r$ th power is $c_{\left(r^{n}\right)}$, for all $r \in \mathbf{Z}$. (2.5) now follows directly.

In view of (2.5), we may concentrate our attention on $H\left(G^{+}, K\right)$, which by (2.3) has a $\mathbf{Z}$-basis consisting of the characteristic functions $c_{\lambda}$, where $\lambda$ runs through all partitions ( $\lambda_{1}, \ldots, \lambda_{n}$ ) of length $\leqslant n$.

Let $\mu, \nu$ be partitions of length $\leqslant n$. The product $c_{\mu} * c_{\nu}$ will be a linear combination of the $c_{\lambda}$. In fact

$$
\begin{equation*}
c_{\mu} * c_{\nu}=\sum_{\lambda} g_{\mu \nu}^{\lambda}(q) c_{\lambda} \tag{2.6}
\end{equation*}
$$

summed over all partitions $\lambda$ of length $\leqslant n$, where $g_{\mu \nu}^{\lambda}(q)$ is the 'Hall polynomial' defined in Chapter II, §2.

Proof. Let $h_{\mu \nu}^{\lambda}$ denote the coefficient of $c_{\lambda}$ in $c_{\mu} * c_{\nu}$. Then

$$
h_{\mu \nu}^{\lambda}=\left(c_{\mu} * c_{\nu}\right)\left(\pi^{\lambda}\right)=\int_{G} c_{\mu}\left(\pi^{\lambda} y^{-1}\right) c_{\nu}(y) d y
$$

Since $c_{\nu}(y)$ vanishes for $y$ outside $K \pi^{\nu} K$, the integration is over this double coset, which we shall write as a union of right cosets, say

$$
K \pi^{\nu} K=\bigcup_{j} K y_{j} \quad\left(y_{j} \in \pi^{\nu} K\right)
$$

Likewise let

$$
K \pi^{\mu} K=\bigcup_{i} K x_{i}, \quad\left(x_{i} \in \pi^{\mu} K\right)
$$

both unions being disjoint. Then we have

$$
\begin{aligned}
h_{\mu \nu}^{\lambda} & =\sum_{j} \int_{K y_{j}} c_{\mu}\left(\pi^{\lambda} y^{-1}\right) d y \\
& =\sum_{j} \int_{K} c_{\mu}\left(\pi^{\lambda} y_{j}^{-1} k\right) d k \\
& =\sum_{j} c_{\mu}\left(\pi^{\lambda} y_{j}^{-1}\right)
\end{aligned}
$$

since $K$ has measure 1.
Now

$$
\begin{aligned}
c_{\mu}\left(\pi^{\lambda} y_{j}^{-1}\right) \neq 0 & \Leftrightarrow \pi^{\lambda} y_{j}^{-1} \in K x_{i} \quad \text { for some } i, \\
& \Leftrightarrow \pi^{\lambda} \in K x_{i} y_{i} \text { for some } i .
\end{aligned}
$$

Hence $h_{\mu \nu}^{\lambda}$ is equal to the number of pairs $(i, j)$ such that

$$
\pi^{\lambda}=k x_{i} y_{j}
$$

for some $k \in K$ (depending on $i, j$ ).
Let $L$ denote the lattice $\mathrm{o}^{n}$ in the vector space $F^{n}$. Let $\xi_{1}, \ldots, \xi_{n}$ be the standard basis of $F^{n}$, and let $G$ act on $F^{n}$ on the right (i.e. we think of the elements of $F^{n}$ as row-vectors rather than column-vectors). Then $L \pi^{\lambda}$ is the sublattice of $L$ generated by the vectors $\pi^{\lambda_{i}}(1 \leqslant i \leqslant n)$, and therefore $M=L / L \pi^{\lambda}$ is a finite 0 -module of type $\lambda$ (Chapter II, $\S 1$ ).

Consider $L x_{i}$. Since $x_{i} \in \pi^{\mu} K$ we have $L x_{i}=L \pi^{\mu} k$ for some $k \in K$, hence $L / L x_{i} \cong L / L \pi^{\mu}$, and is therefore a finite o -module of type $\mu$. Next, consider $N=L x_{i} / L \pi^{\lambda}=L x_{i} / L x_{i} y_{j}$. Since $y_{j} \in \pi^{\nu} K$ it follows as before that $N$ is of type $\nu$. Hence for each pair $(i, j)$ such that $\pi^{\lambda} \in K x_{i} y_{j}$ we have a submodule $N$ of $M$ of cotype $\mu$ and type $\nu$. Conversely, each submodule $N$ of $M$ with cotype $\mu$ and type $\nu$ determines a pair $(i, j)$ such that $\pi^{\lambda} \in K x_{i} y_{j}$. Hence $h_{\mu \nu}^{\lambda}=g_{\mu \nu}^{\lambda}(q)$.

From (2.6) it follows that the mapping $u_{\lambda} \mapsto c_{\lambda}$ is a homomorphism of the Hall algebra $H(0)$ onto $H\left(G^{+}, K\right)$ whose kernel is generated by the $u_{\lambda}$ such that $l(\lambda)>n$. Hence from Chapter III, (3.4) we obtain a structure theorem for $H\left(G^{+}, K\right)$ and $L\left(G^{+}, K\right)$ :
(2.7) Let $\Lambda_{n}\left[q^{-1}\right]$ (resp. $\Lambda_{n, \mathrm{c}}$ ) denote the ring of symmetric polynomials in $n$ variables $x_{1}, \ldots, x_{n}$ with coefficients in $\mathbf{Z}\left[q^{-1}\right]$ (resp. C). Then the $\mathbf{Z}$-linear mapping $\theta$ of $H\left(G^{+}, K\right)$ into $\Lambda_{n}\left[q^{-1}\right]$ (resp. the $\mathbf{C}$-linear mapping of $L\left(G^{+}, K\right)$ into $\left.\Lambda_{n, \mathrm{c}}\right)$ defined by

$$
\theta\left(c_{\lambda}\right)=q^{-n(\lambda)} P_{\lambda}\left(x_{1}, \ldots, x_{n} ; q^{-1}\right)
$$

for all partitions $\lambda$ of length $\leqslant n$, is an injective ring homomorphism (resp. an isomorphism of $\mathbf{C}$-algebras). |

Remark. From (2.7) and Chapter III, (2.8) we have

$$
\theta\left(c_{\left(1^{n}\right)}\right)=q^{-n(n-1) / 2} x_{1} x_{2} \ldots x_{n}
$$

Hence from (2.5) it follows that $\theta$ extends to an injective ring homomorphism of $H(G, K)$ into the algebra of symmetric polynomials in $x_{1}^{ \pm 1}, \ldots, x_{n}^{ \pm 1}$ with coefficients in $\mathrm{Z}\left[q^{-1}\right]$, and to an isomorphism of $L(G, K)$ onto the algebra of symmetric polynomials in $x_{1}^{ \pm 1}, \ldots, x_{n}^{ \pm 1}$ with coefficients in $\mathbf{C}$.

In the next section we shall need to know the measure of a double coset $K \pi^{\lambda} K$. This may be computed as follows. For $f \in L\left(G^{+}, K\right)$, let

$$
\mu(f)=\int_{G} f(x) d x
$$

Then $\mu: L\left(G^{+}, K\right) \rightarrow \mathbf{C}$ is a $\mathbf{C}$-algebra homomorphism, and clearly

$$
\begin{equation*}
\mu\left(c_{\lambda}\right)=\text { measure of } K \pi^{\lambda} K \tag{2.8}
\end{equation*}
$$

In view of (2.7) we may write $\mu=\mu^{\prime} \circ \theta$, where $\mu^{\prime}: \Lambda_{n, \mathrm{C}} \rightarrow \mathbf{C}$ is a $\mathbf{C}$-algebra homomorphism, hence is determined by its effect on the generators $e_{r}$ $(1 \leqslant r \leqslant n)$. Since $e_{r}=P_{\left(1^{\prime}\right)}\left(x_{1}, \ldots, x_{n} ; q^{-1}\right)$ (Chapter III, (2.8)) it is enough to compute the measure of $K \pi^{\lambda} K$ when $\lambda=\left(1^{r}\right)(1 \leqslant r \leqslant n)$.

Now the measure of $K \pi^{\lambda} K$ is equal to the number of cosets $K x_{i}$ contained in $K \pi^{\lambda} K$. For each of these cosets we have a sublattice $L x_{i}$ of $L=\mathfrak{D}^{n}$ such that $L / L x_{i}$ is a finite D -module of type $\lambda$. Hence the measure of $K \pi^{\lambda} K$ is equal to the number of sublattices $L^{\prime}$ of $L$ such that $L / L^{\prime}$ has type $\lambda$. In particular, if $\lambda=\left(1^{r}\right)$, each such $L^{\prime}$ will be such that $\pi\left(L / L^{\prime}\right)=0$, i.e. $\pi L \subset L^{\prime}$. Now $L / \pi L \cong k^{n}$ is an $n$-dimensional vector space over the finite field $k$, and $L^{\prime} / \pi L$ is a vector subspace of codimension $r$. The number of such subspaces is equal to the Gaussian polynomial $\left[\begin{array}{l}n \\ r\end{array}\right](q)$ (Chapter I, §2, Example 3) and therefore

$$
\mu\left(c_{\left(1^{r}\right)}\right)=\left[\begin{array}{l}
n \\
r
\end{array}\right](q) \quad(1 \leqslant r \leqslant n)
$$

From (2.7) it follows that $\mu^{\prime}\left(e_{r}\right)=q^{r(r-1) / 2}\left[\begin{array}{l}n \\ r\end{array}\right](q)$, which (loc. cit.) is the $r$ th elementary symmetric function of $q^{n-1}, q^{n-2}, \ldots, 1$. Hence $\mu^{\prime}$ is the mapping which takes $x_{i}$ to $q^{n-i}(1 \leqslant i \leqslant n)$. It follows therefore from (2.7) and (2.8) that the measure of $K \pi^{\lambda} K$ is $q^{-n(\lambda)} P_{\lambda}\left(q^{n-1}, q^{n-2}, \ldots, 1 ; q^{-1}\right)$, which by Chapter III, $\S 2$, Example 1 is equal to

$$
\left(q^{-n(\lambda)} / v_{\lambda}\left(q^{-1}\right)\right) q^{\Sigma(n-i) \lambda_{l}} v_{n}\left(q^{-1}\right)
$$

Hence we have the formula

$$
\text { measure of } \begin{align*}
K \pi^{\lambda} K & =q^{\Sigma(n-2 i+1) \lambda_{i}} v_{n}\left(q^{-1}\right) / v_{\lambda}\left(q^{-1}\right),  \tag{2.9}\\
& =q^{2\langle\lambda, \rho\rangle} v_{n}\left(q^{-1}\right) / v_{\lambda}\left(q^{-1}\right)
\end{align*}
$$

where $\rho=\frac{1}{2}(n-1, n-3, \ldots, 1-n)$.

## 3. Spherical functions

A spherical function on $G$ relative to $K$ is a complex-valued continuous function $\omega$ on $G$ which satisfies the following conditions:
(a) $\omega$ is bi-invariant with respect to $K$, i.e. $\omega\left(k_{1} x k_{2}\right)=\omega(x)$ for $x \in G$ and $k_{1}, k_{2} \in K$;
(b) $\omega * f=\lambda_{f} \omega$ for each $f \in L(G, K)$, where $\lambda_{f}$ is a complex number: in otherwords, $\omega$ is an eigenfunction of all the convolution operators defined by elements of $L(G, K)$;
(c) $\omega(1)=1$.

From (b) and (c) the scalar $\lambda_{f}$ is given by

$$
\lambda_{f}=(\omega * f)(1)=\int_{G} f(x) \omega\left(x^{-1}\right) d x
$$

Regarded as a function of $\omega, \lambda_{f}$ is called the Fourier transform of $f$ and is written $\hat{f}(\omega)$. Regarded as a function of $f$ for fixed $\omega$, it is written $\hat{\omega}(f)$.

For $f, g \in L(G, K)$ we have from (b)

$$
\lambda_{f * g} \omega=\omega *(f * g)=(\omega * f) * g=\lambda_{f} \lambda_{g} \omega
$$

and hence $\lambda_{f} \cdot g=\lambda_{f} \cdot \lambda_{g}$, or equivalently

$$
\begin{equation*}
\hat{\omega}(f * g)=\hat{\omega}(f) \hat{\omega}(g) \tag{3.1}
\end{equation*}
$$

Also it is clear that $\omega * c_{0}=\omega$, where $c_{0}$ is the identity element of $L(G, K)$ (the characteristic function of $K$ ). Hence $\hat{\omega}\left(c_{0}\right)=1$ and therefore (3.1) shows that

## (3.2) $\hat{\omega}: L(G, K) \rightarrow \mathbf{C}$ is $\boldsymbol{a} \mathbf{C}$-algebra homomorphism.

Conversely, it can be shown that all the $\mathbf{C}$-algebra homomorphisms $L(G, K) \rightarrow \mathbf{C}$ arise in this way from spherical functions, so that the set $\Omega(G, K)$ of spherical functions on $G$ relative to $K$ may be identified with the complex affine algebraic variety whose coordinate ring is $L(G, K)$. From the remark following (2.7), $L(G, K)$ is isomorphic to the $\mathbf{C}$-algebra $\mathbf{C}\left[x_{1}^{ \pm 1}, \ldots, x_{n}^{ \pm 1}\right]^{S_{n}} ;$ now $\mathbf{C}\left[x_{1}^{ \pm 1}, \ldots, x_{n}^{ \pm 1}\right]$ is the coordinate ring of $\left(\mathbf{C}^{*}\right)^{n}$, and therefore $\Omega(G, K)$ may be canonically identified with the $n$th symmetric product of the punctured affine line $\mathbf{C}^{*}$. Hence the spherical functions
may be parametrized by $n$-tuples $z=\left(z_{1}, \ldots, z_{n}\right)$ of non-zero complex numbers, the order of the components $z_{i}$ being immaterial. However, it will be more convenient to take as parameter $s=\left(s_{1}, \ldots, s_{n}\right)$, where $z_{i}=q^{\frac{1}{2}(n-1)-s_{i}}\left(\right.$ so that $\left.s_{i} \in \mathbf{C}(\bmod .2 \pi i \mathbf{Z} / \log q).\right)$
Let $\omega_{s}$ denote the spherical function with parameter $s$. We have $\omega_{s}=\omega_{w s}$ for all $w \in S_{n}$.
(3.3) The Fourier transform of the characteristic function $c_{\lambda}$ is given by

$$
\hat{c}_{\lambda}\left(\omega_{s}\right)=q^{\langle\lambda, \rho\rangle} P_{\lambda}\left(q^{-s_{1}}, \ldots, q^{-s_{n}} ; q^{-1}\right) .
$$

Proof. From the discussion above and (2.7) it is clear that $\hat{\omega}_{s}$ is the composition of $\theta$ with the specialization $x_{i} \mapsto z_{i}=q^{\frac{1}{2}(n-1)-s_{i}}(1 \leqslant i \leqslant n)$. The result therefore follows from (2.7).

Now we have

$$
\begin{aligned}
\hat{c}_{\lambda}\left(\omega_{s}\right) & =\int_{G} c_{\lambda}(x) \omega_{s}\left(x^{-1}\right) d x \\
& =\omega_{s}\left(\pi^{-\lambda}\right) \times \text { measure of } K \pi^{\lambda} K .
\end{aligned}
$$

From (3.3) and (2.9) it follows that

$$
\omega_{s}\left(\pi^{-\lambda}\right)=\frac{q^{-\langle\lambda, \rho\rangle}}{v_{n}\left(q^{-1}\right)} v_{\lambda}\left(q^{-1}\right) P_{\lambda}\left(q^{-s_{1}}, \ldots, q^{-s_{n}} ; q^{-1}\right)
$$

and therefore, from the definition (Chapter III, §2) of the symmetric functions $P_{\lambda}$, we have (always under the assumption that $\lambda_{1} \geqslant \ldots \geqslant \lambda_{n}$ )

$$
\begin{equation*}
\omega_{s}\left(\pi^{-\lambda}\right)=\frac{q^{-\langle\lambda, \rho\rangle}}{v_{n}\left(q^{-1}\right)} \sum_{w \in S_{n}} w\left(q^{-\langle\lambda, s\rangle} \prod_{i<j} \frac{q^{-s_{i}}-q^{-\left(s_{j}+1\right)}}{q^{-s_{i}}-q^{-s_{j}}}\right) . \tag{3.4}
\end{equation*}
$$

Since $\omega_{s}$ is by definition constant on each double coset of $K$ in $G$, the formula (3.4) gives the value of the spherical function $\omega_{s}$ at each element of $G$.
In particular, when $s=\rho$, we have $\omega_{p}\left(\pi^{-\lambda}\right)=1$ for all $\lambda$, so that $\omega_{\rho}$ is the constant function 1 (the trivial spherical function).

From (3.4) it follows easily that

$$
\begin{equation*}
\omega_{s}\left(x^{-1}\right)=\omega_{-s}(x) \tag{3.5}
\end{equation*}
$$

for all $x \in G$.

## Example

$\omega_{s}$ is bounded $\Leftrightarrow \operatorname{Re}(s)$ lies in the convex hull of the set $S_{n} \rho=\left\{w \rho ; w \in S_{n}\right\}$.
Let $\sigma=\operatorname{Re}(s)$, i.e. $\sigma_{i}=\operatorname{Re}\left(s_{i}\right)(1 \leqslant i \leqslant n)$. We may assume, since $\omega_{w s}=\omega_{s}$ for all
$w \in S_{n}$, that $\sigma_{1} \geqslant \ldots \geqslant \sigma_{n}$. Then the leading term in (3.4) is $q^{-\langle\lambda, s+\rho\rangle}$, with absolute value $q^{-\langle\lambda, \sigma+\rho\rangle}$. Hence $\omega_{s}$ is bounded if and only if $q^{-\langle\lambda, \sigma+\rho\rangle} \leqslant 1$ for all $\lambda$ such that $\lambda_{1} \geqslant \ldots \geqslant \lambda_{n}$, that is to say if and only if $\langle\lambda, \sigma+\rho\rangle \geqslant 0$ for all such $\lambda$, and it is easy to see that this condition is equivalent to $\sigma \in \operatorname{Conv}\left(S_{n} \rho\right)$.

## 4. Hecke series and zeta functions for $G L_{n}(F)$

For each integer $m \geqslant 0$ let

$$
G_{m}^{+}=\left\{x \in G^{+}: v(\operatorname{det} x)=m\right\}
$$

where $v$ is the normalized valuation on $F(\S 1)$. The set $G_{m}^{+}$is the disjoint union of the double cosets $K \pi^{\lambda} K$, where $\lambda$ runs through all partitions of $m$ of length $\leqslant n$. In particular, $G_{0}^{+}=K$. Let $\tau_{m}$ denote the characteristic function of $G_{m}^{+}$, so that

$$
\tau_{m}=\sum_{|\lambda|=m} c_{\lambda}
$$

The Hecke series of $(G, K)$ is by definition the formal power series

$$
\begin{equation*}
\tau(X)=\sum_{m=0}^{\infty} \tau_{m} X^{m} \in H\left(G^{+}, K\right)[[X]] \tag{4.1}
\end{equation*}
$$

The results we have obtained enable us to calculate $\tau(X)$ with no difficulty. For by (2.7) we have

$$
\begin{aligned}
\theta\left(\tau_{m}\right) & =\sum_{|\lambda|-m} q^{-n(\lambda)} P_{\lambda}\left(x_{1}, \ldots, x_{n} ; q^{-1}\right) \\
& =h_{m}\left(x_{1}, \ldots, x_{m}\right)
\end{aligned}
$$

by Chapter III, $\S 3$, Example 1. Hence

$$
\begin{equation*}
\sum_{m=0}^{\infty} \theta\left(\tau_{m}\right) X^{m}=\prod_{i=1}^{n}\left(1-x_{i} X\right)^{-1} \tag{4.2}
\end{equation*}
$$

Since

$$
\begin{aligned}
\prod_{i=1}^{n}\left(1-x_{i} X\right) & =\sum_{r=0}^{n}(-1)^{r} e_{r} X^{r} \\
& =\sum_{r=0}^{n}(-1)^{r} P_{\left(1^{\prime}\right)}\left(x_{1}, \ldots, x_{n} ; q^{-1}\right) X^{r} \\
& =\sum_{r=0}^{n}(-1)^{r} q^{r(r-1) / 2} \theta\left(c_{\left(1^{r}\right)}\right) X^{r}
\end{aligned}
$$

by (2.7) again, it follows from (4.2) that

$$
\begin{equation*}
\tau(X)=\left(\sum_{r=0}^{n}(-1)^{r} q^{r(r-1) / 2} c_{\left(1^{\prime}\right)} X^{r}\right)^{-1} \tag{4.3}
\end{equation*}
$$

a formula first obtained by Tamagawa [T2].
Now let $\omega$ be a spherical function on $G$ relative to $K$, and let $s$ be a complex variable. The zeta function $\zeta(s, \omega)$ is defined by

$$
\begin{equation*}
\zeta(s, \omega)=\int_{G} \varphi(x)\|x\|^{s} \omega\left(x^{-1}\right) d x \tag{4.4}
\end{equation*}
$$

where as usual $d x$ is Haar measure on $G$, normalized so that $\int_{K} d x=1 ; \varphi$ is the characteristic function of $G^{+}$, and $\|x\|=|\operatorname{det}(x)|=q^{-\nu(\operatorname{det} x)}$. For the moment we shall ignore questions of convergence and treat $s$ (or rather $q^{-s}$ ) as an indeterminate. We have

$$
\begin{aligned}
\zeta(s, \omega) & =\sum_{m=0}^{\infty} q^{-m s} \int_{G} \tau_{m}(x) \omega\left(x^{-1}\right) d x \\
& =\sum_{m=0}^{\infty} \hat{\omega}\left(\tau_{m}\right) q^{-m s} \\
& =\left(\sum_{r=0}^{n}(-1)^{r} q^{r(r-1) / 2} \hat{\omega}\left(c_{\left(1^{r}\right)}\right) q^{-r s}\right)^{-1}
\end{aligned}
$$

by (4.3).
If $\omega=\omega_{s}$, it follows from (4.2) that

$$
\begin{equation*}
\zeta\left(s, \omega_{s}\right)=\prod_{i-1}^{n}\left(1-q^{\frac{1}{2}(n-1)-s_{i}-s}\right)^{-1} . \tag{4.5}
\end{equation*}
$$

These formal calculations will be valid, and the integral (4.4) will converge, provided that $\left|q^{\frac{1}{2}(n-1)-s_{i}-s}\right|<1$ for $1 \leqslant i \leqslant n$, i.e. provided that $s$ lies in the half-plane $\operatorname{Re}(s)>\sigma_{0}$, where

$$
\sigma_{0}=\max _{1<i<n}\left(\frac{n-1}{2}-\operatorname{Re}\left(s_{i}\right)\right) .
$$

In this half-plane the integral (4.4) defines a meromorphic function of $s$, given by (4.5), which is the analytic continuation of $\zeta(s, \omega)$ to the whole $s$-plane.

In particular, for the trivial spherical function $\omega_{\rho}=1$ we have $s_{i}=$ $\frac{1}{2}(n+1)-i$, and therefore

$$
\begin{equation*}
\zeta(s, 1)=\prod_{i-1}^{n}\left(1-q^{i-1-s}\right)^{-1} \tag{4.6}
\end{equation*}
$$

## 5. Hecke series and zeta functions for $G S p_{2 n}(F)$

In this section we shall show how knowledge of the spherical functions for $G L_{n}(F)$ enables us to compute explicitly the Hecke series for the group of symplectic similitudes $G S p_{2 n}(F)$, thereby completing a calculation started by Satake in [S3], to which we refer for proofs.

Let $i$ denote the $n \times n$ matrix with 1's along the reverse diagonal and zeros elsewhere, and let

$$
j=\left(\begin{array}{cc}
0 & i \\
-i & 0
\end{array}\right) .
$$

The group of symplectic similitudes $G=G S p_{2 n}(F)$ is the group of matrices $x \in G L_{2 n}(F)$ such that $x j x^{t}$ is a scalar multiple of $j$, say

$$
x j x^{t}=\mu(x) j
$$

where $\mu(x) \in F^{*}$. Let

$$
\begin{aligned}
& K=G S p_{2 n}(\mathfrak{o})=G \cap G L_{2 n}(\mathfrak{o}), \\
& G^{+}=G \cap M_{2 n}(\mathfrak{0}) .
\end{aligned}
$$

Then $G$ is a locally compact group, $K$ is a maximal compact subgroup of $G$ and is open in $G$, and $G^{+}$is a subsemigroup of $G$. The Hecke rings $H(G, K), H\left(G^{+}, K\right)$ and the $\mathbf{C}$-algebras $L(G, K) \cong H(G, K) \otimes_{\mathbf{z}} \mathbf{C}, L\left(G^{+}, K\right) \cong H\left(G^{+}, K\right) \otimes_{\mathbf{2}} \mathbf{C}$ are defined as in $\S 2$. The characteristic functions of the double cosets $K x K \subset G$ form a Z-basis of $H(G, K)$. Also $H(G, K)$ is commutative, for the same reason as in the case of $G L_{n}(F)(2.4)$.

Spherical functions $\omega$ on $G$ relative to $K$ are defined as in $\S 3$, and are in one-one correspondence with the C -algebra homomorphisms $\hat{\omega}: L(G, K) \rightarrow \mathrm{C}$. The spherical functions are parametrized by vectors $s=\left(s_{0}, s_{1}, \ldots, s_{n}\right) \in \mathbf{C}^{n+1}$ ([S3], Chapter III).

Define $\varepsilon_{i}: \mathbf{C}^{n+1} \rightarrow \mathbf{C}^{n+1}(1 \leqslant i \leqslant n)$ by

$$
\varepsilon_{i}\left(s_{0}, s_{1}, \ldots, s_{n}\right)=\left(s_{0}+s_{i}, s_{1}, \ldots, s_{i-1},-s_{i}, s_{i+1}, \ldots, s_{n}\right)
$$

The $\varepsilon_{i}$ generate a group $E$ of order $2^{n}$. Also the symmetric group $S_{n}$ acts by permuting $s_{1}, \ldots, s_{n}$. Let $W \subset G L_{n+1}(\mathbf{C})$ be the group generated by $E$ and $S_{n}$, which is the semidirect product $E \times S_{n}$. Then we have [S3]

$$
\omega_{s}=\omega_{w s}
$$

for all $w \in W$, where $\omega_{s}$ is the spherical function on $G=G S p_{2 n}(F)$ with parameter $s$.

Now let

$$
G_{m}^{+}=\left\{x \in G^{+}: v(\mu(x))=m\right\}
$$

for all $n \geqslant 0$, and let $\tau_{m}$ denote the characteristic function of $G_{m}^{+}$. The Hecke series $\tau(X)$ and the series $\hat{\tau}(s, X)$ are defined as in §4:

$$
\begin{aligned}
\tau(X) & =\sum_{m=0}^{\infty} \tau_{m} X^{m} \\
\hat{\tau}(s, X) & =\sum_{m=0}^{\infty} \hat{\tau}_{m}\left(\omega_{s}\right) X^{m}
\end{aligned}
$$

Now from [S3], Appendix 1 we have the following expression for $\hat{\tau}_{m}\left(\omega_{s}\right)$ :

$$
\begin{equation*}
\hat{\tau}_{m}\left(\omega_{s}\right)=\sum_{\lambda} q^{-(\lambda, \rho)} \hat{c}_{\lambda}\left(\omega_{s^{\prime}}\right) q^{m\left(N-s_{0}\right)} \tag{5.1}
\end{equation*}
$$

where $\left.s=s_{0}, s_{1}, \ldots, s_{n}\right), s^{\prime}=\left(s_{1}, \ldots, s_{n}\right), N=\frac{1}{4} n(n+1) ; \hat{c}_{\lambda}\left(\omega_{s^{\prime}}\right)$ has the same meaning as in $\S 3$, and the summation is over all partitions $\lambda$ such that $\lambda_{1} \leqslant m$. From (3.3) and (5.1) it follows that

$$
\hat{\tau}_{m}\left(\omega_{s}\right)=\sum_{\lambda} P_{\lambda}\left(q^{-s_{1}}, \ldots, q^{-s_{n}} ; q^{-1}\right) q^{m\left(N-s_{0}\right)}
$$

and hence that

$$
\begin{equation*}
\hat{\tau}(s, X)=\sum_{m, \lambda} P_{\lambda}\left(q^{-s_{1}}, \ldots, q^{-s_{n}} ; q^{-1}\right)\left(q^{N-s_{0} X}\right)^{m} \tag{5.2}
\end{equation*}
$$

summed over $m \geqslant \lambda_{1} \geqslant \ldots \geqslant \lambda_{n} \geqslant 0$.
Now the sum on the right-hand side of (5.2) is one that we have calculated in Chapter III, $\S 5$, Example 5 . Hence we obtain the following expression for $\hat{\tau}(s, X)$ as a sum of partial fractions:

$$
\begin{equation*}
\hat{\tau}(s, X)=\sum_{w \in E} w\left(\Phi\left(q^{-s_{1}}, \ldots, q^{-s_{n}} ; q^{-1}\right)\left(1-q^{N-s_{0}} X\right)^{-1}\right) \tag{5.3}
\end{equation*}
$$

where

$$
\Phi\left(x_{1}, \ldots, x_{n} ; t\right)=\prod_{i=1}^{n}\left(1-x_{i}\right)^{-1} \prod_{i<j}\left(1-x_{i} x_{j}\right)\left(1-x_{i} x_{j}\right)^{-1}
$$

From (5.3) it follows that $\hat{\tau}(s, X)$ is a rational function $f\left(X_{0}\right) / g\left(X_{0}\right)$ where $X_{0}=q^{N-s_{0}} X$, with denominator

$$
g\left(X_{0}\right)=\prod_{J}\left(1-q^{-s} X_{0}\right),
$$

the product being over all subsets $J$ of $\{1,2, \ldots, n\}$, and $s_{J}=\sum_{i \in J} s_{i}$. Also it is not difficult to show that the degree of the numerator $f\left(X_{0}\right)$ is $2^{n}-2$.
Finally, we can attach to the spherical function $\omega_{s}$ a zeta function as in $\S 4$ : we define as before

$$
\zeta\left(s, \omega_{s}\right)=\int_{G} \varphi(x)\|x\|^{s} \omega_{s}\left(x^{-1}\right) d x
$$

where $s$ is a complex variable, $\varphi$ is the characteristic function of $G^{+}$, and $\|x\|=|\mu(x)|$. Then we have

$$
\begin{aligned}
\zeta\left(s, \omega_{s}\right) & =\sum_{m=0}^{\infty} \hat{\tau}_{m}\left(\omega_{s}\right) q^{-m s} \\
& =\hat{\tau}\left(s, q^{-s}\right)
\end{aligned}
$$

and therefore from (5.3) we obtain the following formula for this zeta function:

$$
\begin{equation*}
\zeta\left(s, \omega_{s}\right)=\sum_{w \in E} w\left(\Phi\left(q^{-s_{1}}, \ldots, q^{-s_{n}} ; q^{-1}\right)\left(1-q^{N-s_{0}-s}\right)^{-1}\right) \tag{5.4}
\end{equation*}
$$

## Notes and references

For background on algebraic groups over local fields, their Hecke rings and spherical functions, we refer to [M1] and [S3] and the references given there.

We have derived the formula (3.4) for the spherical function by exploiting our knowledge of the Hall algebra. It is possible to obtain (3.4) directly by computing the spherical function from an integral formula. This is done in [M1], Chapter IV in much greater generality, and in the case of $G L_{n}$ provides a more natural (though less elementary) proof of the structure theorem (Chapter III, (3.4)) for the Hall algebra.

The formula (3.4) was also obtained by Luks [L14].

## VI

## SYMMETRIC FUNCTIONS WITH TWO PARAMETERS

## 1. Introduction

The Schur functions $s_{\lambda}$ (Chapter I, §3) are characterized by the following two properties:
(a) The transition matrix $M(s, m)$ that expresses the Schur functions in terms of the monomial symmetric functions is strictly upper unitriangular (Chapter I, (6.5)), that is to say $s_{\lambda}$ is of the form

$$
s_{\lambda}=m_{\lambda}+\sum_{\mu<\lambda} K_{\lambda \mu} m_{\mu}
$$

for suitable coefficients $K_{\lambda \mu}$ (the Kostka numbers).
(b) The $s_{\lambda}$ are pairwise orthogonal relative to the scalar product of Chapter I, §4, which may be defined by

$$
\begin{equation*}
\left\langle p_{\lambda}, p_{\mu}\right\rangle=\delta_{\lambda \mu} z_{\lambda} . \tag{1.1}
\end{equation*}
$$

Again, the Hall-Littlewood functions $P_{\lambda}(x ; t)$ (Chapter III, §1) are characterized by the same two properties (a) and (b), except that in (b) the scalar product is now that of Chapter III, §4, defined by

$$
\begin{equation*}
\left\langle p_{\lambda}, p_{\mu}\right\rangle=\delta_{\lambda \mu} z_{\lambda}(t)=\delta_{\lambda \mu} z_{\lambda} \prod_{i=1}^{l(\lambda)}\left(1-t^{\lambda_{i}-1}\right) \tag{1.2}
\end{equation*}
$$

Another example is provided by the zonal polynomials (Chapter VII). Up to a scalar factor they are characterized by the same properties (a) and (b), but with a different choice of scalar product, namely

$$
\begin{equation*}
\left\langle p_{\lambda}, p_{\mu}\right\rangle=2^{l(\lambda)} z_{\lambda} \delta_{\lambda \mu} . \tag{1.3}
\end{equation*}
$$

More generally, Jack's symmetric functions ( $\$ 10$ below) are characterized by (a) and (b), the scalar product now being defined by

$$
\begin{equation*}
\left\langle p_{\lambda}, p_{\mu}\right\rangle=\alpha^{l(\lambda)} z_{\lambda} \delta_{\lambda \mu} \tag{1.4}
\end{equation*}
$$

where $\alpha$ is a positive real number. They reduce to the zonal polynomials when $\alpha=2$, and to the Schur functions when $\alpha=1$.

In this Chapter we shall study a class of symmetric functions $P_{\lambda}(x ; q, t)$ depending rationally on two parameters $q$ and $t$, which include all the examples above as particular cases. They will be characterized by the same two properties (a) and (b), relative now to the scalar product defined by

$$
\begin{equation*}
\left\langle p_{\lambda}, p_{\mu}\right\rangle=\left\langle p_{\lambda}, p_{\mu}\right\rangle_{q, t}=\delta_{\lambda \mu} z_{\lambda} \prod_{i=1}^{l(\lambda)} \frac{1-q^{\lambda_{i}}}{1-t^{\lambda_{i}}} . \tag{1.5}
\end{equation*}
$$

When $q=t$, they reduce to the Schur functions $s_{\lambda}$, and when $q=0$ to the Hall-Littlewood functions $P_{\lambda}(x ; t)$. To obtain Jack's symmetric functions, we set $q=t^{\alpha}$ and let $t \rightarrow 1$, so that $\left(1-q^{r}\right) /\left(1-t^{r}\right) \rightarrow \alpha$ for each $r \geqslant 1$, and hence in the limit the scalar product (1.5) becomes that given by (1.4).

## Example

Let $F$ be a field of characteristic zero, and let 〈 , > be a non-degenerate symmetric $F$-bilinear form on $\Lambda_{F}$ with values in $F$, such that the homogeneous components $\Lambda_{F}^{n}$ of $\Lambda_{F}$ are pairwise orthogonal. If $\left(u_{i}\right),\left(v_{i}\right)$ are dual bases of $\Lambda_{F}^{n}$ (i.e. $\left\langle u_{i}, v_{j}\right\rangle=\delta_{i j}$ ) then

$$
T_{n}(x \mid y)=\sum_{i} u_{i}(x) v_{i}(y)
$$

is independent of the choice of dual bases (so that in particular $T_{n}(x \mid y)=T_{n}(y \mid x)$ ). Let

$$
T(x \mid y)=\sum_{n>0} T_{n}(x \mid y)
$$

(the 'metric tensor').
Let $\Delta: \Lambda_{F} \rightarrow \Lambda_{F} \otimes \Lambda_{F}$ be the diagonal map (or comultipliction) defined by $\Delta f=f(x, y)$ (Chapter I, §5, Example 25).
A family ( $a_{\lambda}$ ) of elements of a commutative monoid, indexed by partitions $\lambda$, will be called multiplicative if $a_{\lambda} a_{\mu}=a_{\lambda \cup \mu}$ for each pair of partitions $\lambda, \mu$. Equivalently, $a_{\lambda}=a_{\lambda_{1}} a_{\lambda_{2}} \ldots$ for each partition $\lambda=\left(\lambda_{1}, \lambda_{2}, \ldots\right)$, where $a_{r}=a_{(r)}$ for each integer $r \geqslant 1$, and $a_{0}=1$. For example, the bases $\left(e_{\lambda}\right),\left(h_{\lambda}\right)$ and $\left(p_{\lambda}\right)$ of $\Lambda_{F}$ are multiplicative.

Show that the following conditions on the scalar product 〈 , > are equivalent:
(a) $\Delta$ is the adjoint of multiplication, i.e.

$$
\langle\Delta f, g \otimes h\rangle=\langle f, g h\rangle
$$

for all $f, g, h \in \Lambda_{F}$.
(b) There exists a multiplicative family $\left(\nu_{\lambda}\right)$ in $F^{*}$ such that

$$
\left\langle p_{\lambda}, p_{\mu}\right\rangle=\delta_{\lambda \mu} z_{\lambda} v_{\lambda}
$$

for all partitions $\lambda, \mu$.
(c) There exists a character (i.e. $F$-algebra homomorphism) $\chi: \Lambda_{F} \rightarrow F$ such that $\chi\left(p_{n}\right) \neq 0$ for all $n \geqslant 1$ and

$$
\langle f, g\rangle=\chi(f * g)
$$

for all $f, g \in \Lambda_{F}$, where $f * g$ is the internal product defined in Chapter I , $\S 7$.
(d) The basis of $\Lambda_{F}$ dual to $\left(m_{\lambda}\right)$ is multiplicative.
(e) The metric tensor $T$ satisfies

$$
T(x \mid y, z)=T(x \mid y) T(x \mid z)
$$

(Let $p_{\lambda}^{*}=z_{\lambda}^{-1} p_{\lambda}$ for all partitions $\lambda$. Then

$$
\Delta p_{\lambda}^{*}=\sum p_{\alpha}^{*} \otimes p_{\beta}^{*}
$$

summed over pairs of partitions ( $\alpha, \beta$ ) such that $\alpha \cup \beta=\lambda$. Hence (a) implies that

$$
\begin{equation*}
\left\langle p_{\lambda}^{*}, p_{\rho} p_{\sigma}\right\rangle=\sum\left\langle p_{\alpha}^{*}, p_{\rho}\right\rangle\left\langle p_{\beta}^{*}, p_{\sigma}\right\rangle \tag{1}
\end{equation*}
$$

summed over $(\alpha, \beta)$ such that $|\alpha|=|\rho|,|\beta|=|\sigma|$ and $\alpha \cup \beta=\lambda$.
By iterating (1) we obtain

$$
\begin{equation*}
\left\langle p_{\lambda}^{*}, p_{\mu}\right\rangle=\sum\left\langle p_{\alpha_{\alpha}^{(1)}}^{*}, p_{\mu_{1}}\right\rangle\left\langle p_{\alpha^{(2)}}^{*}, p_{\mu_{2}}\right\rangle \ldots \tag{2}
\end{equation*}
$$

summed over all sequences ( $\alpha^{(1)}, \alpha^{(2)}, \ldots$ ) of partitions such that $\left|\alpha^{(i)}\right|=\mu_{i}$ for each $i \geqslant 1$, and $\cup \alpha^{(i)}=\lambda$. The sum on the right-hand side of (2) will be zero unless the partition $\lambda$ is a refinement of $\mu$ (Chapter I , §6), hence $\left\langle p_{\lambda}, p_{\mu}\right\rangle=0$ unless $\lambda \leqslant \mu$, and therefore also (by symmetry) unless $\mu \leqslant \lambda$. Thus $\left\langle p_{\lambda}, p_{\mu}\right\rangle=0$ unless $\lambda=\mu$, in which case (2) gives

$$
\left\langle p_{\lambda}^{*}, p_{\lambda}\right\rangle=\prod_{i>1}\left\langle p_{\lambda_{i}}^{*}, p_{\lambda_{i}}\right\rangle
$$

Hence if we define $v_{n}=\left\langle p_{n}^{*}, p_{n}\right\rangle$ for each $n \geqslant 1$ (and $v_{0}=1$ ) we have

$$
\left\langle p_{\lambda}, p_{\mu}\right\rangle=\delta_{\lambda \mu} z_{\lambda} v_{\lambda}
$$

where $v_{\lambda}=v_{\lambda_{1}} v_{\lambda_{2}} \ldots$. Thus (a) implies (b).
Next, since (Chapter I, (7.12)) $p_{\lambda} * p_{\mu}=\delta_{\lambda \mu} z_{\lambda} p_{\lambda}$, it follows easily that (b) and (c) are equivalent, the character $\chi$ being defined by $\chi\left(p_{n}\right)=v_{n}$ for all $n \geqslant 1$.
To show next that (b) implies (d), observe that it follows from (b) that the bases ( $p_{\lambda}$ ) and ( $z_{\lambda}^{-1} v_{\lambda}^{-1} p_{\lambda}$ ) of $\Lambda_{F}$ are dual to each other, so that

$$
\begin{aligned}
T(x \mid y) & =\sum_{\lambda} z_{\lambda}^{-1} v_{\lambda}^{-1} p_{\lambda}(x) p_{\lambda}(y) \\
& =\exp \left(\sum_{n>1} \frac{v_{n}^{-1}}{n} p_{n}(x) p_{n}(y)\right) .
\end{aligned}
$$

Let

$$
\exp \left(\sum_{n>1} \frac{v_{n}^{-1}}{n} p_{n} t^{n}\right)=\sum_{n>0} q_{n} t^{n}
$$

then we have

$$
\begin{aligned}
T(x \mid y) & =\prod_{j}\left(\sum_{n>0} q_{n}(x) y_{j}^{n}\right) \\
& =\sum_{\lambda} q_{\lambda}(x) m_{\lambda}(y)
\end{aligned}
$$

where $q_{\lambda}=q_{\lambda_{1}} q_{\lambda_{2}} \ldots$. This shows that the basis of $\Lambda_{F}$ dual to $\left(m_{\lambda}\right)$ is $\left(q_{\lambda}\right)$, which is multiplicative. Conversely, if $\left(q_{\lambda}\right)$ is multiplicative then we have

$$
T(x \mid y)=\prod_{j} T\left(x \mid y_{j}\right)
$$

and so (d) implies (e).
Finally, to show that (e) implies (a), let $\left(u_{\lambda}\right),\left(v_{\lambda}\right)$ be dual bases of $\Lambda_{F}$, indexed by partitions, and let

$$
\begin{equation*}
v_{\lambda}(y, z)=\sum_{\mu, \nu} a_{\mu \nu}^{\lambda} v_{\mu}(y) v_{\nu}(z) \tag{3}
\end{equation*}
$$

Then
(4)

$$
\begin{aligned}
T(x \mid y, z) & =\sum_{\lambda} u_{\lambda}(x) v_{\lambda}(y, z) \\
& =\sum_{\lambda, \mu, \nu} a_{\mu \nu}^{\lambda} u_{\lambda}(x) v_{\mu}(y) v_{\nu}(z)
\end{aligned}
$$

and on the other hand

$$
\begin{equation*}
T(x \mid y) T(x \mid z)=\sum_{\mu, \nu} u_{\mu}(x) u_{\nu}(x) v_{\mu}(y) v_{\nu}(z) \tag{5}
\end{equation*}
$$

Since the right-hand sides of (4) and (5) are equal, we conclude that

$$
\begin{equation*}
u_{\mu} u_{\nu}=\sum_{\lambda} a_{\mu \nu}^{\lambda} u_{\lambda} \tag{6}
\end{equation*}
$$

From (3) and (6) it follows that

$$
\left\langle\Delta v_{\lambda}, u_{\mu} \otimes u_{\nu}\right\rangle=a_{\mu \nu}^{\lambda}=\left\langle v_{\lambda}, u_{\mu} u_{\nu}\right\rangle
$$

which completes the proof.)
The scalar products considered in the text all satisfy these conditions: we have

$$
\chi\left(p_{n}\right)=1,\left(1-t^{n}\right)^{-1}, 2, \alpha,\left(1-q^{n}\right) /\left(1-t^{n}\right) \quad(n \geqslant 1)
$$

corresponding to (1.1), (1.2), (1.3), (1.4), (1.5) respectively.

## tes and references

earlier account of the symmetric functions $P_{\lambda}(x ; q, t)$ appeared in [M6]. r some indications of the historical background, see the notes and erences at the end of this Chapter.

## Orthogonality

; $q, t$ be independent indeterminates, let $F=\mathbf{Q}(q, t)$ be the field of tional functions in $q$ and $t$, and let $\Lambda_{F}=\Lambda \otimes_{Z} F$ denote the $F$-algebra of mmetric functions with coefficients in $F$. If we define

$$
\begin{equation*}
z_{\lambda}(q, t)=z_{\lambda} \prod_{i=1}^{l(\lambda)} \frac{1-q^{\lambda_{i}}}{1-t^{\lambda_{t}}} \tag{.1}
\end{equation*}
$$

te scalar product (1.5) takes the form

$$
\left\langle p_{\lambda}, p_{\mu}\right\rangle=\left\langle p_{\lambda}, p_{\mu}\right\rangle_{q, t}=\delta_{\lambda \mu} z_{\lambda}(q, t)
$$

n each homogeneous component $\Lambda_{F}^{n}$ of $\Lambda_{F}$, this scalar product differs nly by a scalar factor from that defined by the parameters $q^{-1}, t^{-1}$. For re have

$$
z_{\lambda}\left(q^{-1}, t^{-1}\right)=\left(q^{-1} t\right)^{|\lambda|} z_{\lambda}(q, t)
$$

ind hence

$$
\begin{equation*}
\langle f, g\rangle_{q^{-1}, t^{-1}}=\left(q^{-1} t\right)^{n}\langle f, g\rangle_{q, t} \tag{2.3}
\end{equation*}
$$

for $f, g \in \Lambda_{F}^{n}$.
If $a$ is an indeterminate we denote by $(a ; q)_{\infty}$ the infinite product

$$
\begin{equation*}
(a ; q)_{\infty}=\prod_{r=0}^{\infty}\left(1-a q^{r}\right) \tag{2.4}
\end{equation*}
$$

regarded as a formal power series in $a$ and $q$.
Let now $x=\left(x_{1}, x_{2}, \ldots\right)$ and $y=\left(y_{1}, y_{2}, \ldots\right)$ be two sequences of independent indeterminates, and define

$$
\begin{equation*}
\Pi(x, y ; q, t)=\prod_{i, j} \frac{\left(t x_{i} y_{j} ; q\right)_{\infty}}{\left(x_{i} y_{j} ; q\right)_{\infty}} \tag{2.5}
\end{equation*}
$$

Then we have

$$
\begin{equation*}
\Pi(x, y ; q, t)=\sum_{\lambda} z_{\lambda}(q, t)^{-1} p_{\lambda}(x) p_{\lambda}(y) . \tag{2.6}
\end{equation*}
$$

Proof. We calculate

$$
\begin{aligned}
\log \Pi(x, y ; q, t) & =\sum_{i, j} \sum_{r>0}\left(\log \left(1-q^{r} t x_{i} y_{j}\right)-\log \left(1-q^{r} x_{i} y_{j}\right)\right) \\
& =\sum_{i, j} \sum_{r>0} \sum_{n>1} \frac{1}{n}\left(1-t^{n}\right)\left(q^{r} x_{i} y_{j}\right)^{n} \\
& =\sum_{i, j} \sum_{n>1} \frac{1}{n} \frac{1-t^{n}}{1-q^{n}}\left(x_{i} y_{j}\right)^{n} \\
& =\sum_{n>1} \frac{1}{n} \frac{1-t^{n}}{1-q^{n}} p_{n}(x) p_{n}(y)
\end{aligned}
$$

from which it follows that

$$
\Pi(x, y ; q, t)=\prod_{n>1} \exp \left(\frac{1}{n} \frac{1-t^{n}}{1-q^{n}} p_{n}(x) p_{n}(y)\right)
$$

which as in Chapter III, (4.1) is seen to be equal to the right-hand side of (2.6).
(2.7) For each $n \geqslant 0$, let $\left(u_{\lambda}\right),\left(v_{\lambda}\right)$ be $F$-bases of $\Lambda_{F}^{n}$, indexed by the partitions of $n$. Then the following conditions are equivalent:
(a)

$$
\left\langle u_{\lambda}, v_{\mu}\right\rangle=\delta_{\lambda \mu} \text { for all } \lambda, \mu ;
$$

(b)

$$
\sum_{\lambda} u_{\lambda}(x) v_{\lambda}(y)=\Pi(x, y ; q, t) .
$$

Proof. The proof is almost the same as that of Chapter I, (4.6). Let $p_{\lambda}^{*}=z_{\lambda}(q, t)^{-1} p_{\lambda}$, so that $\left\langle p_{\lambda}^{*}, p_{\mu}\right\rangle=\delta_{\lambda \mu}$. If

$$
u_{\lambda}=\sum_{\rho} a_{\lambda \rho} p_{\rho}^{*}, \quad v_{\mu}=\sum_{\sigma} b_{\mu \sigma} p_{\sigma}
$$

then we have

$$
\left\langle u_{\lambda}, v_{\mu}\right\rangle=\sum_{\rho} a_{\lambda \rho} b_{\mu \rho}
$$

so that (a) is equivalent to

$$
\sum_{\rho} a_{\lambda \rho} b_{\mu \rho}=\delta_{\lambda \mu}
$$

On the other hand, by virtue of (2.6), the condition (b) is equivalent to

$$
\sum_{\lambda} u_{\lambda}(x) u_{\lambda}(y)=\sum_{\rho} p_{\rho}^{*}(x) p_{\rho}(y)
$$

and hence to

$$
\sum_{\lambda} a_{\lambda \rho} b_{\lambda \sigma}=\delta_{\rho \sigma} .
$$

Since ( $a^{\prime}$ ) and ( $b^{\prime}$ ) are equivalent, so are (a) and (b).
Now let $g_{n}(x ; q, t)$ denote the coefficient of $y^{n}$ in the power-series expansion of the infinite product

$$
\begin{equation*}
\prod_{i>1} \frac{\left(t x_{i} y ; q\right)_{\infty}}{\left(x_{i} y ; q\right)_{\infty}}=\sum_{n>0} g_{n}(x ; q, t) y^{n}, \tag{2.8}
\end{equation*}
$$

and for any partition $\lambda=\left(\lambda_{1}, \lambda_{2}, \ldots\right)$ define

$$
g_{\lambda}(x ; q, t)=\prod_{i>1} g_{\lambda_{t}}(x ; q, t)
$$

Then we have

$$
\begin{equation*}
g_{n}(x ; q, t)=\sum_{|\lambda|=n} z_{\lambda}(q, t)^{-1} p_{\lambda}(x) \tag{2.9}
\end{equation*}
$$

by setting $y_{2}=y_{3}=\ldots=0$ in (2.6), and hence

$$
\begin{align*}
\Pi(x, y ; q, t) & =\prod_{j}\left(\sum_{n>0} g_{n}(x ; q, t) y_{j}^{n}\right) \\
& =\sum_{\lambda} g_{\lambda}(x ; q, t) m_{\lambda}(y) \tag{2.10}
\end{align*}
$$

It follows now from (2.7) that

$$
\begin{equation*}
\left\langle g_{\lambda}(x ; q, t), m_{\mu}(x)\right\rangle=\delta_{\lambda \mu} \tag{2.11}
\end{equation*}
$$

so that the $g_{\lambda}$ form a basis of $\Lambda_{F}$ dual to the basis ( $m_{\lambda}$ ). Hence
(2.12) The $g_{n}(n \geqslant 1)$ are algebraically independent over $F$, and $\Lambda_{F}=$ $F\left[g_{1}, g_{2}, \ldots\right]$.

Next we have
(2.13) Let $E: \Lambda_{F} \rightarrow \Lambda_{F}$ be an $F$-linear operator. Then the following conditions on $E$ are equivalent:
(a) $E$ is self-adjoint, i.e. $\langle E f, g\rangle=\langle f, E g\rangle$ for all $f, g \in \Lambda_{F}$;
(b) $E_{x} \Pi(x, y ; q, t)=E_{y} \Pi(x, y ; q, t)$, where the suffix $x$ (resp. $y$ ) indicates operation on the $x$ (resp. y) variables.

Proof. For any two partitions $\lambda, \mu$ let

$$
e_{\lambda \mu}=\left\langle E m_{\lambda}, m_{\mu}\right\rangle .
$$

![](https://cdn.mathpix.com/cropped/2024_12_08_1df2f08562f6a73c5373g-322.jpg?height=77&width=91&top_left_y=1876&top_left_x=1216)

Then (a) is equivalent to

$$
\begin{equation*}
e_{\lambda \mu}=e_{\mu \lambda} \tag{c}
\end{equation*}
$$

Next, from (2.11) we have

$$
E m_{\lambda}=\sum_{\mu} e_{\lambda \mu} g_{\mu}
$$

and since by (2.10)

$$
\Pi(x, y ; q, t)=\sum_{\lambda} m_{\lambda}(x) g_{\lambda}(y)=\sum_{\lambda} m_{\lambda}(y) g_{\lambda}(x)
$$

it follows that (b) is equivalent to

$$
\sum_{\lambda, \mu} e_{\lambda \mu} g_{\mu}(x) g_{\lambda}(y)=\sum_{\lambda, \mu} e_{\lambda \mu} g_{\mu}(y) g_{\lambda}(x)
$$

and hence to (c). I
For $u, v \in F$ such that $v \neq \pm 1$, let $\omega_{u, v}$ denote the $F$-algebra endomorphism of $\Lambda_{F}$ defined by

$$
\begin{equation*}
\omega_{u, v}\left(p_{r}\right)=(-1)^{r-1} \frac{1-u^{r}}{1-v^{r}} p_{r} \tag{2.14}
\end{equation*}
$$

for all $r \geqslant 1$, so that

$$
\omega_{u, v}\left(p_{\lambda}\right)=\varepsilon_{\lambda} p_{\lambda} \prod_{i=1}^{l(\lambda)} \frac{1-u^{\lambda_{i}}}{1-v^{\lambda_{i}}}
$$

for any partition $\lambda$, where $\varepsilon_{\lambda}=(-1)^{|\lambda|-l(\lambda)}$. Clearly

$$
\omega_{\nu, u}=\omega_{u, v}^{-1}
$$

(if $u \neq \pm 1$ ), and $\omega_{u, u}$ is the involution $\omega$ of Chapter I, $\S 2$.
From (2.9) and Chapter I, (2.14') it follows that

$$
\begin{equation*}
\omega_{q, t}\left(g_{n}(x ; q, t)\right)=e_{n}(x) \tag{2.15}
\end{equation*}
$$

the $n$th elementary symmetric function.
The endomorphism $\omega_{u, \nu}$ is self-adjoint:

$$
\begin{equation*}
\left\langle\omega_{u, v} f, g\right\rangle=\left\langle f, \omega_{u, v} g\right\rangle \tag{2.16}
\end{equation*}
$$

for all $f, g \in \Lambda_{F}$. By linearity it is enough to verify this for $f=p_{\lambda}$ and $g=p_{\mu}$, where it is immediate from the definitions.

Also we have

$$
\begin{equation*}
\left\langle\omega_{t, q} f, g\right\rangle_{q, t}=\langle\omega f, g\rangle \tag{2.17}
\end{equation*}
$$

for $f, g \in \Lambda_{F}$, where the scalar product on the right is that of Chapter I. Again we may take $f=p_{\lambda}$ and $g=p_{\mu}$, where the result becomes obvious. From (2.17) it follows, for example, that ( $s_{\lambda}$ ) and ( $\omega_{t, q} s_{\lambda^{\prime}}$ ) are dual bases of $\Lambda_{F}$.

Finally, it follows from (2.6) and Chapter I, (4.1') that

$$
\begin{equation*}
\omega_{q, t} \Pi(x, y ; q, t)=\prod_{i, j}\left(1+x_{i} y_{j}\right) \tag{2.18}
\end{equation*}
$$

where $\omega_{q, t}$ acts on the symmetric functions in the $x$ variables.
So far we have worked in the algebra $\Lambda_{F}$ of symmetric functions in infinitely many variables $x_{1}, x_{2}, \ldots$, with coefficients in $F$. However, in the next section we shall need to work temporarily in $\Lambda_{n, F}=F\left[x_{1}, \ldots, x_{n}\right]^{S_{n}}$, and to adapt the scalar product (1.5) to $\Lambda_{n, F}$. The original definition (1.5) no longer makes sense in the context of $\Lambda_{n, F}$, because when $x=\left(x_{1}, \ldots, x_{n}\right)$ the power sum products $p_{\lambda}(x)$ (for all partitions $\lambda$ ) are no longer linearly independent. We therefore proceed as follows.

## (2.19) The $g_{\lambda}(x ; q, t)$ such that $l(\lambda) \leqslant n$ form an $F$-basis of $\Lambda_{n, F}$.

Proof. Suppose first that $q=t=0$. Then $g_{\lambda}$ becomes $h_{\lambda}$ in the notation of Chapter I, §2, and from Chapter I, §6 we have

$$
\begin{equation*}
h_{\mu}(x)=\sum_{\lambda} K_{\lambda \mu} s_{\lambda}(x) . \tag{1}
\end{equation*}
$$

Now in the ring $\Lambda_{n}$ the Schur function $s_{\lambda}(x)$ is zero if $l(\lambda)>n$, and the $s_{\lambda}(x)$ with $l(\lambda) \leqslant n$ from a Z-basis of $\Lambda_{n}$. Since the matrix ( $K_{\lambda \mu}$ ) is unitriangular, so is its principal submatrix $\left(K_{\lambda \mu}\right)_{l(\lambda), l(\mu)<n}$. Hence it follows from (1) that the $h_{\lambda}(x)$ such that $l(\lambda) \leqslant n$ form a Z-basis of $\Lambda_{n}$.
Now let $q, t$ be arbitrary. Since the monomial symmetric functions $m_{\mu}(x)$ with $l(\mu) \leqslant n$ form a Z-basis of $\Lambda_{n}$, we may write

$$
\begin{equation*}
g_{\lambda}(x ; q, t)=\sum_{\mu} b_{\lambda \mu}(q, t) m_{\mu}(x) \tag{2}
\end{equation*}
$$

with coefficients $b_{\lambda \mu}(q, t) \in F$. From above, the matrix $B(q, t)=$ $\left(b_{\lambda \mu}(q, t)\right)_{l(\lambda), l(\mu)<n}$ is well-defined and nonsingular when $q=t=0$. Hence its determinant, which is a rational function of $q$ and $t$, cannot vanish identically. In other words, the matrix $B(q, t)$ is invertible over $F$, and hence (2) shows that the $g_{\lambda}(x ; q, t)$ with $l(\lambda) \leqslant n$ form an $F$-basis of $\Lambda_{n, F}$, as required.

We now define a (symmetric) scalar product on $\Lambda_{n, F}$ by requiring that the bases $\left(g_{\lambda}\right)_{l(\lambda)<n}$ and $\left(m_{\lambda}\right)_{l(\lambda)<n}$ be dual to each other:

$$
\begin{equation*}
\left\langle g_{\lambda}, m_{\mu}\right\rangle=\delta_{\lambda \mu} \tag{2.20}
\end{equation*}
$$

whenever $\lambda, \mu$ are partitions of length $\leqslant n$. With the obvious modifications, (2.7) remains valid for this scalar product, since by virtue of (2.8) we have

$$
\begin{equation*}
\Pi(x, y ; q, t)=\sum_{l(\lambda)<n} g_{\lambda}(x ; q, t) m_{\lambda}(y) \tag{2.21}
\end{equation*}
$$

when $x=\left(x_{1}, \ldots, x_{n}\right)$ and $y=\left(y_{1}, \ldots, y_{n}\right)$.

## Examples

1. For each integer $m \geqslant 0$ let

$$
\begin{aligned}
(a ; q)_{m} & =\prod_{r=0}^{m-1}\left(1-a q^{r}\right) \\
& =(a ; q)_{\infty} /\left(a q^{m} ; q\right)_{\infty}
\end{aligned}
$$

and for any partition $\mu=\left(\mu_{1}, \mu_{2}, \ldots\right)$ let

$$
(a ; q)_{\mu}=\prod_{i>1}(a ; q)_{\mu_{i}}
$$

Then we have

$$
g_{n}(x ; q, t)=\sum_{|\mu|=n} \frac{(t ; q)_{\mu}}{(q ; q)_{\mu}} m_{\mu}(x) .
$$

This follows from the identity

$$
\frac{(t y ; q)_{\infty}}{(y ; q)_{\infty}}=\sum_{m>0} \frac{(t ; q)_{m}}{(q ; q)_{m}} y^{m}
$$

which is a particular case of Chapter I , $\S 2$, Example 5 (with $a, b, t$ there replaced by $1, t, y$ respectively).
Since $(q ; q)_{n} /(q ; q)_{\mu}$ is a polynomial in $q$ for all partitions $\mu$ of $n$ (because it is a product of Gaussian polynomials), it follows that $(q ; q)_{n} g_{n}(x ; q, t)$ is a linear combination of the monomial symmetric functions with coefficients in $\mathbf{Z}[q, t]$, i.e. it lies in the subring $\Lambda[q, t]$ of $\Lambda_{F}$.
2. Show that

$$
\omega_{q, 1} g_{r}\left(x ; 0 ; t^{-1}\right)=(-t)^{-r} g_{r}(x ; 0, q) .
$$

## 3. The operators $D_{n}^{r}$

In this section we shall work with a finite set of variables $x=\left(x_{1}, \ldots, x_{n}\right)$, and we shall define $F$-linear operators

$$
D_{n}^{r} ; \Lambda_{n, F} \rightarrow \Lambda_{n, F}
$$

for each integer $r$ such that $0 \leqslant r \leqslant n$. It will appear in $\S 4$ that the symmetric functions $P_{\lambda}(x ; q, t)$ are simultaneous eigenfunctions of these operators.
For each $u \in F$ and $1 \leqslant i \leqslant n$ we define the 'shift operator' $T_{u, x_{i}}$ by

$$
\begin{equation*}
\left(T_{u, x_{i}} f\right)\left(x_{1}, \ldots, x_{n}\right)=f\left(x_{1}, \ldots, u x_{i}, \ldots, x_{n}\right) \tag{3.1}
\end{equation*}
$$

for any polynomial $f \in F\left[x_{1}, \ldots, x_{n}\right]$. Next, let $X$ be another indeterminate, and define

$$
\begin{equation*}
D_{n}(X ; q, t)=a_{\delta}(x)^{-1} \sum_{w \in S_{n}} \varepsilon(w) x^{w \delta} \prod_{i=1}^{n}\left(1+X t^{(w \delta)} T_{q, x_{i}}\right) \tag{3.2}
\end{equation*}
$$

where as usual $\delta=(n-1, n-2, \ldots, 1,0), a_{\delta}(x)$ is the Vandermonde determinant (Chapter I, $\S 3$ ), $\varepsilon(w)= \pm 1$ is the sign of $w \in S_{n}$, and $(w \delta)_{i}$ is the $i$ th component of $w \delta$.
For $r=0,1, \ldots, n$ let $D_{n}^{r}$ denote the coefficient of $X^{r}$ in $D_{n}(X ; q, t)$ :

$$
\begin{equation*}
D_{n}(X ; q, t)=\sum_{r=0}^{n} D_{n}^{r} X^{r} \tag{3.3}
\end{equation*}
$$

We have $D_{n}^{0}=1$, and

$$
\begin{equation*}
D_{n}^{1}=\sum_{i=1}^{n} A_{i}(x ; t) T_{q, x_{i}} \tag{3.4}
\end{equation*}
$$

where

$$
\begin{aligned}
A_{i}(x ; t) & =a_{\delta}(x)^{-1} \sum_{w \in S_{n}} \varepsilon(w) t^{(w \delta)} i x^{w \delta} \\
& =a_{\delta}(x)^{-1} T_{t, x_{i}} a_{\delta}(x)
\end{aligned}
$$

so that

$$
\begin{equation*}
A_{i}(x ; t)=\prod_{j \neq i} \frac{x_{i}-x_{j}}{x_{i}-x_{j}} \tag{3.5}
\end{equation*}
$$

More generally, for any $r=0,1, \ldots, n$ we have

$$
\begin{equation*}
D_{n}^{r}=\sum_{I} A_{I}(x ; t) \prod_{i \in I} T_{q, x_{i}} \tag{3.4}
\end{equation*}
$$

summed over all $r$-element subsets $I$ of $\{1,2, \ldots, n\}$, where

$$
\begin{align*}
A_{I}(x ; t) & =a_{\delta}(x)^{-1}\left(\prod_{i \in I} T_{t, x_{i}}\right) a_{\delta}(x) \\
& =t^{r(r-1) / 2} \prod_{\substack{i \in I \\
j \notin I}} \frac{t x_{i}-x_{j}}{x_{i}-x_{j}} \tag{3.5}
\end{align*}
$$

Each of the operators $D_{n}^{r}$ maps symmetric polynomials to symmetric polynomials, and hence is an $F$-linear endomorphism of $\Lambda_{n, F}$. To establish this fact we shall compute $D_{n}(X ; q, t) m_{\lambda}(x)$, where $\lambda=\left(\lambda_{1}, \ldots, \lambda_{n}\right)$ is any partition of length $\leqslant n$. First of all, for any $\nu \in \mathbf{N}^{n}$ we have from (3.2)

$$
D_{n}(X ; q, t) x^{\nu}=\sum_{w_{1} \in S_{n}} \varepsilon\left(w_{1}\right) \prod_{i=1}^{n}\left(1+X t^{\left(w_{1} \delta\right)_{1}} q^{\nu_{i}}\right) x^{w_{1} \delta+\nu}
$$

since $T_{q, x_{1}}\left(x^{\nu}\right)=q^{\nu} x^{\nu}$. Now replace $\nu$ by $w_{2} \lambda$, where $w_{2} \in S_{n}$, and sum over $w_{2}$. We shall obtain

$$
\begin{aligned}
& \left|S_{n}^{\lambda}\right| D_{n}(X ; q, t) m_{\lambda}(x) \\
& \quad=a_{\delta}(x)^{-1} \sum_{w_{1}, w_{2}} \varepsilon\left(w_{1}\right) \prod_{i=1}^{n}\left(1+X t^{\left(w_{1} \delta\right)_{i}} q^{\left.\left(w_{2} \lambda\right)_{i}\right) x^{w_{1} \delta+w_{2} \lambda}}\right.
\end{aligned}
$$

where $S_{n}^{\lambda}$ is the subgroup of $S_{n}$ that fixes $\lambda$.
In the sum on the right, let us put $w_{2}=w_{1} w$. Then it becomes

$$
\begin{gathered}
a_{\delta}(x)^{-1} \sum_{w, w_{1}} \varepsilon\left(w_{1}\right) \prod_{i=1}^{n}\left(1+X t^{n-i} q^{(w \lambda)}\right) x^{w_{1}(w \lambda+\delta)} \\
=\sum_{w \in S_{n}} \prod_{i=1}^{n}\left(1+X t^{n-i} q^{(w \lambda)_{i}}\right) s_{w \lambda}(x)
\end{gathered}
$$

so that finally we have

$$
\begin{equation*}
D_{n}(X ; q, t) m_{\lambda}(x)=\sum_{\alpha} \prod_{i=1}^{n}\left(1+X t^{n-i} q^{\alpha_{i}}\right) s_{\alpha}(x) \tag{3.6}
\end{equation*}
$$

summed over all derangements $\alpha \in \mathbf{N}^{n}$ of $\lambda$.
From this formula we see that each operator $D_{n}^{r}$ is a degree-preserving $F$-linear endomorphism of $\Lambda_{n, F}$. Moreover, since each Schur function $s_{\alpha}$ that occurs on the right-hand side of (3.6) is either zero or else is equal to $\pm s_{\mu}$ for some partition $\mu<\lambda$ (unless $\alpha=\lambda$ ), and since the transition
matrix $M(s, m)$ is strictly upper unitriangular (Chapter I, (6.5)) we conclude from (3.6) that

$$
\begin{equation*}
D_{n}(X ; q, t) m_{\lambda}=\sum_{\mu<\lambda} a_{\lambda \mu}(X ; q, t) m_{\mu} \tag{3.7}
\end{equation*}
$$

with coefficients $a_{\lambda \mu} \in \mathbf{Z}[X, q, t]$, and in particular

$$
\begin{equation*}
a_{\lambda \lambda}(X ; q, t)=\prod_{i=1}^{n}\left(1+X t^{n-i} q^{\lambda_{i}}\right) \tag{3.8}
\end{equation*}
$$

Thus the matrix of each operator $D_{n}^{r}$, relative to the basis of $\Lambda_{n, F}$ formed by the monomial symmetric functions, is strictly upper triangular, and its eigenvalues are the coefficients of $X^{r}$ in the polynomials (3.8). In particular, we have

$$
\begin{equation*}
D_{n}^{1} m_{\lambda}=\sum_{\mu<\lambda} c_{\lambda \mu}(q, t) m_{\mu} \tag{3.9}
\end{equation*}
$$

with coefficients $c_{\lambda \mu} \in \mathbf{Z}[q, t]$, and the eigenvalues of $D_{n}^{1}$ are

$$
\begin{equation*}
c_{\lambda \lambda}(q, t)=\sum_{i=1}^{n} q^{\lambda_{i} t^{n-i}} \tag{3.10}
\end{equation*}
$$

which are visibly all distinct.
The second basic fact about the operators $D_{n}^{r}$ is
(3.11) Each operator $D_{n}^{r}$ is self-adjoint for the scalar product (2.20), that is to say

$$
\left\langle D_{n}^{r} f, g\right\rangle_{n}=\left\langle f, D_{n}^{r} g\right\rangle_{n}
$$

for all $f, g \in \Lambda_{n, F}$ and $0 \leqslant r \leqslant n$.
It follows from (2.13) that (3.11) is equivalent to the identity

$$
\begin{equation*}
D_{n}(X ; q, t)_{x} \Pi(x, y ; q, t)=D_{n}(X ; q, t)_{y} \Pi(x, y ; q, t) \tag{3.12}
\end{equation*}
$$

where $\Pi(x, y ; q, t)$ is the product (2.5) (with $i, j$ running from 1 to $n$ ) and the suffix $x$ (resp. $y$ ) indicates operation on the $x$ (resp. $y$ ) variables.

To prove (3.12) we observe that from the definition (2.5) of $\Pi=$ $\Pi(x, y ; q, t)$ we have

$$
\Pi^{-1} T_{q, x_{i}} \Pi=\prod_{j=1}^{n} \frac{1-x_{i} y_{j}}{1-t x_{i} y_{j}}
$$

which is independent of $q$. It follows now from (3.2) that

$$
\Pi^{-1} D(X ; q, t)_{x} \Pi
$$

is independent of $q$. Hence to prove (3.12), or equivalently (3.11), we may assume that $q=t$.

Now for any polynomial $f\left(x_{1}, \ldots, x_{n}\right)$ and $w \in S_{n}$ we have

$$
x^{w \delta} t^{(w \delta)} T_{t, x_{i}} f=T_{t, x_{i}}\left(x^{w \delta} f\right)
$$

and therefore

$$
x^{w \delta} \prod_{i=1}^{n}\left(1+X t^{(w \delta)} T_{t, x_{i}}\right) f=\prod_{i=1}^{n}\left(1+X T_{t, x_{i}}\right)\left(x^{w \delta} f\right)
$$

so that

$$
D_{n}(X ; t, t) f=a_{\delta}^{-1} \prod_{i=1}^{n}\left(1+X T_{t, x_{i}}\right)\left(a_{\delta} f\right)
$$

In particular, therefore,

$$
\begin{aligned}
D_{n}(X ; t, t) s_{\lambda} & =a_{\delta}^{-1} \prod_{i=1}^{n}\left(1+X T_{t, x_{t}}\right) a_{\lambda+\delta} \\
& =\prod_{i=1}^{n}\left(1+X t^{\lambda_{i}+n-i}\right) s_{\lambda}
\end{aligned}
$$

for any partition $\lambda$ of length $\leqslant n$.
Now the Schur functions $s_{\lambda}$ such that $l(\lambda) \leqslant n$ form an orthonormal basis of $\Lambda_{n, F}$ relative to the scalar product (2.20) when $q=t$, by virtue of the Cauchy formula (Chapter I, (4.3)). Hence we have $\left\langle D_{n}(X ; t, t) s_{\lambda}, s_{\mu}\right\rangle_{n}$ $=0$ if $\lambda \neq \mu$, and therefore

$$
\left\langle D_{n}(X ; t, t) s_{\lambda}, s_{\mu}\right\rangle_{n}=\left\langle s_{\lambda}, D_{n}(X ; t, t) s_{\mu}\right\rangle_{n}
$$

for all $\lambda, \mu$ of length $\leqslant n$. This shows that each operator $D_{n}^{r}$ is self-adjoint when $q=t$, and completes the proof of (3.11).

## Examples

1. (a) The coefficient of $m_{\mu}$ in $D_{n}(X ; q, t) m_{\lambda}$ is explicitly

$$
a_{\lambda \mu}(X ; q, t)=\sum \varepsilon(w) K_{\pi \mu} \prod_{i=1}^{n}\left(1+X q^{\alpha_{i} t^{n-i}}\right)
$$

summed over all triples ( $w, \alpha, \pi$ ) where $w \in S_{n}, \alpha \in \mathbf{N}^{n}$ is a derangement of $\lambda$, and $\pi$ is a partition, such that $\alpha+\delta=w(\pi+\delta)$; and $K_{\pi \mu}$ is a Kostka number (Chapter I, §6).
(b) Suppose that $\lambda_{1}=\mu_{1}$. Deduce from (a) that

$$
a_{\lambda \mu}(X ; q, t)=\left(1+X q^{\lambda_{1} t^{n-1}}\right) a_{\lambda \cdot \mu^{*}} \cdot(X ; q, t)
$$

where $\lambda^{*}=\left(\lambda_{2}, \lambda_{3}, \ldots\right), \mu^{*}=\left(\mu_{2}, \mu_{3}, \ldots\right)$.
2. (a) Show that, if $r \geqslant 0$ and $x=\left(x_{1}, \ldots, x_{n}\right)$,

$$
(t-1) \sum_{i=1}^{n} A_{i}(x ; t) x_{i}^{r}=t^{n} g_{r}\left(x ; 0, t^{-1}\right)-\delta_{0 r}
$$

(Express the product

$$
\prod_{i=1}^{n} \frac{t X-x_{i}}{X-x_{i}}
$$

as a sum of partial fractions.)
(b) Let $\Pi=\Pi(x, y ; q, t)$, where $x=\left(x_{1}, \ldots, x_{n}\right)$ and $y=\left(y_{1}, \ldots, y_{n}\right)$, and let $\Pi_{0}=$ $\omega_{q, t} \Pi=\Pi\left(1+x_{i} y_{i}\right)$ (2.18). Then

$$
\begin{aligned}
\Pi^{-1} T_{q, x_{i}} \Pi & =\sum_{r>0} g_{r}\left(y ; 0, t^{-1}\right) t^{r} x_{i}^{r} \\
\Pi_{0}^{-1} T_{q, x_{i}} \Pi_{0} & =\sum_{r>0}(-1)^{r} g_{r}(y ; 0, q) x_{i}^{r}
\end{aligned}
$$

(c) Let $\tilde{E}=\tilde{E}_{q, t}=t^{-n}\left(1+(t-1) D_{n}^{1}\right)$. Deduce from (a) and (b) that

$$
\begin{aligned}
\Pi^{-1} \tilde{E} \Pi & =\sum_{r>0} g_{r}\left(x ; 0, t^{-1}\right) g_{r}\left(y ; 0, t^{-1}\right) t^{r} \\
\Pi_{0}^{-1} \tilde{E} \Pi_{0} & =\sum_{r>0}(-1)^{r} g_{r}\left(x ; 0, t^{-1}\right) g_{r}(y ; 0, q)
\end{aligned}
$$

where in each case $\tilde{E}$ acts on symmetric functions in the $x$ variables.
(d) Deduce from (c) and §2, Example 2 that

$$
\omega_{q, t}\left(\Pi^{-1} \tilde{E}_{q, t} \Pi\right)=\Pi_{0}^{-1} \tilde{E}_{t^{-1}, q^{-1}} \Pi_{0}
$$

where $\omega_{q, t}$ acts on the $x$-variables, and hence that

$$
\omega_{q, t} \tilde{E}_{q, t}=\tilde{E}_{t^{-1}, q^{-1}} \omega_{q, t}
$$

3. Let $\alpha$ be a positive real number, $X$ an indeterminate and let

$$
D_{n}(X ; \alpha)=a_{\delta}(x)^{-1} \sum_{w \in S_{n}} \varepsilon(w) x^{w \delta} \prod_{i=1}^{n}\left(X+(w \delta)_{i}+\alpha x_{i} D_{i}\right)
$$

in the notation of (3.2), where $D_{i}=\partial / \partial x_{i}$. We have

$$
D_{n}(X ; \alpha)=\sum_{r=0}^{n} X^{n-r} D_{n}^{r}
$$

say, where the $D_{n}^{r}$ are linear differential operators on functions of $x_{1}, \ldots, x_{n}$. In particular, when $\alpha=1$, we have

$$
D_{n}(X ; 1) f=a_{\delta}^{-1} \prod_{i=1}^{n}\left(X+x_{i} D_{i}\right)\left(a_{\delta} f\right)
$$

for a function $f=f\left(x_{1}, \ldots, x_{n}\right)$.
(a) Show that if $\lambda$ is a partition of length $\leqslant n$, then

$$
D_{n}(X ; \alpha) m_{\lambda}(x)=\sum_{\beta} \prod_{i=1}^{n}\left(X+n-i+\alpha \beta_{i}\right) s_{\beta}(x)
$$

summed over all derangements $\beta \in \mathbf{N}^{n}$ of $\lambda$.
(b) Show that each operator $D_{n}^{r}$ is self-adjoint with respect to the scalar product defined by the metric tensor ( $\S 1$, Example) $T(x \mid y)=\Pi_{i, j}\left(1-x_{i} y_{j}\right)^{-\alpha}$.
(The proofs of (a) and (b) are analogous to those of (3.6) and (3.11).)
(c) Let $Y=(t-1) X-1$. Then

$$
\frac{Y+t^{(w \delta)_{i}} T_{q, x_{i}}}{t-1}=X+\frac{1-t^{(w \delta)_{i}}}{1-t}+t^{(w \delta)_{i}} \frac{1-T_{q, x_{i}}}{1-q} \cdot \frac{1-q}{1-t} .
$$

If $(q, t) \rightarrow(1,1)$ in such a way that $(1-q) /(1-t) \rightarrow \alpha$ (for example, if $q=t^{\alpha}$ and $t \rightarrow 1)$, then this operator tends to $X+(w \delta)_{i}+\alpha x_{i} D_{i}$. Hence $D_{n}(X ; \alpha)$ is the limit of $(t-1)^{-n} Y^{n} D_{n}\left(Y^{-1} ; q, t\right)$.
(d) If $f$ is a homogeneous polynomial of degree $r$, show that

$$
\begin{aligned}
& D_{n}^{0} f=f, \\
& D_{n}^{1} f=\left(\alpha r+\frac{1}{2} n(n-1)\right) f, \\
& D_{n}^{2} f=\left(-\alpha^{2} U_{n}-\alpha V_{n}+c_{n}\right) f,
\end{aligned}
$$

where

$$
U_{n}=\frac{1}{2} \sum_{i=1}^{n} x_{i}^{2} D_{i}^{2}, \quad V_{n}=\sum_{i \neq j}\left(x_{i}-x_{j}\right)^{-1} x_{i}^{2} D_{i},
$$

and

$$
c_{n}=\frac{1}{2} \alpha^{2} r(r-1)+\frac{1}{2} \alpha m(n-1)+\frac{1}{24} n(n-1)(n-2)(3 n-1)
$$

(e) The Laplace-Beltrami operator $\square_{n}^{\alpha}$ is defined by

$$
\square_{n}^{\alpha} f=\left(\alpha U_{n}+V_{n}-(n-1) r\right) f
$$

for $f$ homogeneous of degree $r$, as in (d) above. Thus

$$
D_{n}^{2} f=\left(-\alpha \square_{n}^{\alpha}+c_{n}^{\prime}\right) f,
$$

where $c_{n}^{\prime}=c_{n}-\alpha(n-1) r$.
Let $E_{n}^{\alpha}$ be the operator defined by

$$
E_{n}^{\alpha} f=a_{\delta}^{-1 / \alpha} U_{n}\left(a_{\delta}^{1 / \alpha} f\right)-\left(a_{\delta}^{-1 / \alpha} U_{n} a_{\delta}^{1 / \alpha}\right) f
$$

Show that

$$
E_{n}^{\alpha}=U_{n}+\alpha^{-1} V_{n} .
$$

## Notes and references

Example 3. The differential operators $D_{n}^{r}$ (depending on $\alpha$ ) were introduced by Sekiguchi [S9] and later by Debiard [D1]. See also [M5].

## 4. The symmetric functions $P_{\lambda}(x ; q, t)$

The operators $D_{n}^{r}: \Lambda_{n, F} \rightarrow \Lambda_{n, F}$ defined in $\S 3$ are (for fixed $r$ and varying $n$ ) not compatible with the restriction homomorphisms $\rho_{m, n}: \Lambda_{m, F} \rightarrow \Lambda_{n, F}$ of Chapter I, §2. However, at least when $r=1$ (which will be sufficient for our purposes) it is easy to modify them. Let $E_{n}$ be the operator on $\Lambda_{n, F}$ defined by

$$
\begin{equation*}
E_{n}=t^{-n} D_{n}^{1}-\sum_{i=1}^{n} t^{-i} \tag{4.1}
\end{equation*}
$$

If $\lambda=\left(\lambda_{1}, \ldots, \lambda_{n}\right)$ is a partition of length $\leqslant n$, we have

$$
m_{\lambda}=\sum_{\alpha} s_{\alpha}
$$

in $\Lambda_{n}$, where the sum is over all distinct derangements $\alpha \in \mathrm{N}^{n}$ of $\lambda$, as one sees by multiplying $m_{\lambda}=\Sigma x^{\alpha}$ by $a_{\delta}=\Sigma \varepsilon(w) x^{w \delta}$ and rearranging (Chapter I, §6, Example 11). Hence it follows from (3.6) that in $\Lambda_{n, F}$ we have

$$
\begin{equation*}
E_{n} m_{\lambda}=\sum_{\alpha}\left(\sum_{i=1}^{n}\left(q^{\alpha_{i}}-1\right) t^{-i}\right) s_{\alpha} \tag{4.2}
\end{equation*}
$$

summed over derangements $\alpha$ of $\lambda$ as above.
This formula shows that

$$
\rho_{n, n-1} \circ E_{n}=E_{n-1} \circ \rho_{n, n-1}
$$

where $\rho_{n, n-1}: \Lambda_{n, F} \rightarrow \Lambda_{n-1, F}$ is the homomorphism defined by setting $x_{n}=0$ (observe that $s_{\alpha}\left(x_{1}, \ldots, x_{n-1}, 0\right)=0$ if $\alpha_{n} \neq 0$ ). Hence we have a well-defined degree-preserving operator

$$
\begin{equation*}
E=E_{q, t}=\lim _{\leftarrow} E_{n}: \Lambda_{F} \rightarrow \Lambda_{F} \tag{4.3}
\end{equation*}
$$

such that for each partition $\lambda$

$$
\begin{equation*}
E m_{\lambda}=\sum_{\mu<\lambda} e_{\lambda \mu} m_{\mu} \tag{4.4}
\end{equation*}
$$

with coefficients $e_{\lambda \mu} \in \mathbf{Z}\left[q, t^{-1}\right]$, and in particular

$$
\begin{equation*}
e_{\lambda \lambda}=\sum_{i \geqslant 1}\left(q^{\lambda_{t}}-1\right) t^{-i} \tag{4.5}
\end{equation*}
$$

Since $D_{n}^{1}$ is self-adjoint for the scalar product $\langle f, g\rangle_{n}$ (3.11), so is $E_{n}$, and hence
(4.6) $E$ is self-adjoint for the scalar product (1.5) on $\Lambda_{F}$. |

We come now to the main result of this section.
(4.7) For each partition $\lambda$ there is a unique symmetric function $P_{\lambda}=$ $P_{\lambda}(x ; q, t) \in \Lambda_{F}$ such that
(a)

$$
P_{\lambda}=\sum_{\mu<\lambda} u_{\lambda \mu} m_{\mu}
$$

where $u_{\lambda \mu} \in F$ and $u_{\lambda \lambda}=1$,
(b)

$$
\left\langle P_{\lambda}, P_{\mu}\right\rangle=0 \text { if } \lambda \neq \mu
$$

Proof. We shall construct the $P_{\lambda}$ as eigenfunctions of the operator $E$. If $P_{\lambda}$ satisfies (a) above and
(c)

$$
E P_{\lambda}=e_{\lambda \lambda} P_{\lambda}
$$

then by (4.4) we have

$$
e_{\lambda \lambda} u_{\lambda \nu}=\sum_{\nu<\mu<\lambda} u_{\lambda \mu} e_{\mu \nu}
$$

for all pairs of partitions $\nu, \lambda$ such that $\nu<\lambda$, or equivalently

$$
\begin{equation*}
\left(e_{\lambda \lambda}-e_{\nu \nu}\right) u_{\lambda \nu}=\sum_{\nu<\mu<\lambda} u_{\lambda \mu} e_{\mu \nu} \tag{1}
\end{equation*}
$$

Since by (4.5) we have $e_{\lambda \lambda} \neq e_{\nu \nu}$ if $\nu \neq \lambda$ (i.e. the eigenvalues of the operator $E$ are all distinct), this equation determines $u_{\lambda \nu}$ uniquely in terms of the $u_{\lambda \mu}$ such that $\nu<\mu \leqslant \lambda$. Hence symmetric functions $P_{\lambda}$ exist satisfying the conditions (a) and (b). But then we have by (4.6)

$$
\begin{aligned}
e_{\lambda \lambda}\left\langle P_{\lambda}, P_{\mu}\right\rangle & =\left\langle E P_{\lambda}, P_{\mu}\right\rangle \\
& =\left\langle P_{\lambda}, E P_{\mu}\right\rangle=e_{\mu \mu}\left\langle P_{\lambda}, P_{\mu}\right\rangle
\end{aligned}
$$

and since $e_{\lambda \lambda} \neq e_{\mu \mu}$ if $\lambda \neq \mu$, it follows that the $P_{\lambda}$ satisfy condition (b).
Finally, to show that the $P_{\lambda}$ are uniquely determined by (a) and (b), let $\lambda$ be any partition and assume that $P_{\mu}$ is determined for all $\mu<\lambda$. Then by (a), $P_{\lambda}$ must be of the form

$$
P_{\lambda}=m_{\lambda}+\sum_{\mu<\lambda} v_{\lambda \mu} P_{\mu}
$$

taking the scalar product of each side with $P_{\mu}$, we obtain

$$
v_{\lambda \mu}=-\left\langle m_{\lambda}, P_{\mu}\right\rangle /\left\langle P_{\mu}, P_{\mu}\right\rangle
$$

and hence $P_{\lambda}$ is uniquely determined. (Note that $\left\langle P_{\mu}, P_{\mu}\right\rangle \neq 0$, because when $q$ and $t$ are taken to be real numbers between 0 and 1 the scalar product (1.5) is positive definite.)

Remark. In fact, conditions (a) and (b) of (4.7) overdetermine the symmetric functions $P_{\lambda}$. For if we arrange the partitions of each positive integer $n$ in lexicographical order (so that ( $1^{n}$ ) comes first and ( $n$ ) comes last), we can use the Gram-Schmidt orthogonalization process to derive a unique basis $\left(P_{\lambda}\right)$ of $\Lambda_{F}^{n}$ satisfying ( $\mathrm{a}^{\prime}$ ) and (b), where
(a') $P_{\lambda}=m_{\lambda}+$ a linear combination of the $m_{\mu}$ for $\mu$ preceding $\lambda$ in lexicographical order.
If we replace the lexicographical ordering by some other total ordering compatible with the natural partial ordering $\lambda \geqslant \mu$, and apply Gram-Schmidt as before, we shall obtain the same basis ( $P_{\lambda}$ ): this is the content of (4.7).

From (4.7) (a) we have in particular

$$
\begin{equation*}
P_{\left(1^{\prime}\right)}=e_{r} \tag{4.8}
\end{equation*}
$$

(since $m_{\left(1^{r}\right)}=e_{r}$ ). Also

$$
\begin{equation*}
P_{(r)}=\frac{(q ; q)_{r}}{(t ; q)_{r}} g_{r} \tag{4.9}
\end{equation*}
$$

For by (2.11), $g_{r}$ is orthogonal to $m_{\mu}$ for all partitions $\mu \neq(r)$, hence to all $P_{\mu}$ except for $\mu=(r)$. It follows that $g_{r}$ must be a scalar multiple of $P_{(r)}$, and the scalar factor is given by $\S 2$, Example 1.

Next we have

$$
\begin{equation*}
P_{\lambda}\left(x_{1}, \ldots, x_{n} ; q, t\right)=0 \quad \text { if } n<l(\lambda) \tag{4.10}
\end{equation*}
$$

Proof. If $\mu \leqslant \lambda$, then $\mu^{\prime} \geqslant \lambda^{\prime}$ (Chapter I, (1.11)), so that

$$
l(\mu)=\mu_{1}^{\prime} \geqslant \lambda_{1}^{\prime}=l(\lambda)>n,
$$

and hence $m_{\mu}\left(x_{1}, \ldots, x_{n}\right)=0$ for each $\mu \leqslant \lambda$. I

## Let

$$
\begin{equation*}
b_{\lambda}=b_{\lambda}(q, t)=\left\langle P_{\lambda}, P_{\lambda}\right\rangle^{-1} \tag{4.11}
\end{equation*}
$$

and

$$
\begin{equation*}
Q_{\lambda}=b_{\lambda} P_{\lambda} \text {, } \tag{4.12}
\end{equation*}
$$

so that we have

$$
\left\langle P_{\lambda}, Q_{\mu}\right\rangle=\delta_{\lambda \mu}
$$

for all $\lambda, \mu$, i.e. the bases $\left(P_{\lambda}\right),\left(Q_{\lambda}\right)$ of $\Lambda_{F}$ are duals of each other for the scalar product (1.5). Hence by (2.7) we have

$$
\begin{equation*}
\sum_{x} P_{\lambda}(x ; q, t) Q_{\lambda}(y ; q, t)=\Pi(x, y ; q, t) . \tag{4.13}
\end{equation*}
$$

We shall next consider some particular cases.
(4.14) (i) When $q=t$ we have

$$
P_{\lambda}(x ; t, t)=Q_{\lambda}(x ; t, t)=s_{\lambda}(x)
$$

(Chapter I, (4.8) and (6.5)).
(ii) When $q=0$ we have

$$
\begin{aligned}
P_{\lambda}(x ; 0, t) & =P_{\lambda}(x ; t), \\
Q_{\lambda}(x ; 0, t) & =Q_{\lambda}(x ; t),
\end{aligned}
$$

the Hall-Littlewood symmetric functions studied in Chapter III. This follows from Chapter III, (2.6) and (4.9).
(iii) Let $q=t^{\alpha}$ and let $t \rightarrow 1$. The resulting symmetric functions are Jack's symmetric functions, which we shall consider in $\S 10$ below.
(iv) From (2.3) and (4.7) it follows that

$$
\begin{aligned}
& P_{\lambda}\left(x ; q^{-1}, t^{-1}\right)=P_{\lambda}(x ; q, t), \\
& Q_{\lambda}\left(x ; q^{-1}, t^{-1}\right)=\left(q t^{-1}\right)^{|\lambda|} Q_{\lambda}(x ; q, t)
\end{aligned}
$$

(v) When $t=1$, we have

$$
P_{\lambda}(x ; q, 1)=m_{\lambda}(x)
$$

For it follows from (3.2) that $D_{n}(X ; q, 1)=\prod_{i=1}^{n}\left(1+X T_{q, x_{i}}\right)$, so that $D_{n}(X ; q, 1) m_{\lambda}=\Pi\left(1+X q^{\lambda_{i}}\right) m_{\lambda}$. Hence the $m_{\lambda}$ are the eigenfunctions of $D_{n}^{1}$, and hence of $E_{n}$, when $t=1$, which proves the assertion.
(vi) When $q=1$, we have

$$
P_{\lambda}(x, 1, t)=e_{\lambda^{\prime}}(x)
$$

for all $t$. We defer the proof of this statement to $\S 5$.
(4.15) If $x=\left(x_{1}, \ldots, x_{n}\right)$ and $l(\lambda) \leqslant n$, we have

$$
D_{n}(X ; q, t) P_{\lambda}(x ; q, t)=\prod_{i=1}^{n}\left(1+X q^{\lambda_{t} t^{n-i}}\right) P_{\lambda}(x ; q, t)
$$

Proof. As $\mu$ runs through the partitions of length $\leqslant n$, the $m_{\mu}$ form a basis of $\Lambda_{n, F}$; hence so do the $P_{\mu}$, by (4.7) (a), and therefore also the $Q_{\mu}$. Hence $D_{n}(X ; q, t) P_{\lambda}$ is of the form

$$
D_{n}(X ; q, t) P_{\lambda}=\sum_{\mu} v_{\lambda \mu}(X ; q, t) Q_{\mu}
$$

By (4.7) and (3.7), the matrix ( $v_{\lambda \mu}$ ) is strictly upper triangular, and by (3.11) it is symmetric, hence diagonal. It follows that $D_{n}(X ; q, t) P_{\lambda}$ is a scalar multiple of $P_{\lambda}$, and by (3.7), (3.8) the scalar multiple is

$$
\prod_{i=1}^{n}\left(1+X q^{\lambda_{i} t^{n-i}}\right)
$$

(4.16) The operators of $D_{n}^{r}(0 \leqslant r \leqslant n)$ on $\Lambda_{n, F}$ commute with each other.

For by (4.15) they are simultaneously diagonalized by the basis $\left(P_{\lambda}\right)$.
(4.17) Let $\lambda$ be a partition of length $n$. Then

$$
P_{\lambda}\left(x_{1}, \ldots, x_{n} ; q, t\right)=x_{1} \ldots x_{n} P_{\mu}\left(x_{1}, \ldots, x_{n} ; q, t\right)
$$

where $\mu=\left(\lambda_{1}-1, \ldots, \lambda_{n}-1\right)$.
Proof. We have

$$
T_{q, x_{i}}\left(x_{1} \ldots x_{n} P_{\mu}\right)=q x_{1} \ldots x_{n} T_{q, x_{i}}\left(P_{\mu}\right)
$$

and therefore

$$
\begin{aligned}
D_{n}^{1}\left(x_{1} \ldots x_{n} P_{\mu}\right) & =q x_{1} \ldots x_{n} D_{n}^{1}\left(P_{\mu}\right) \\
& =q\left(\sum_{i=1}^{n} q^{\mu_{i} t^{n-i}}\right) x_{1} \ldots x_{n} P_{\mu}
\end{aligned}
$$

by (4.15). Hence both $P_{\lambda}$ and $x_{1} \ldots x_{n} P_{\mu}$ are eigenfunctions of the operator $D_{n}^{1}$ for the eigenvalue $\Sigma q^{\lambda_{i} t^{n-i}}$. Since the eigenvalues of $D_{n}^{1}$ are all distinct, it follows that $P_{\lambda}$ and $x_{1} \ldots x_{n} P_{\mu}$ can differ by at most a scalar factor; but they both have leading term $x^{\lambda}$, and so they are equal. |

## Examples

1. For any partition $\lambda$, the coefficient of $x_{1_{1}}$ in $P_{\lambda}(x ; q, t)$ is equal to $P_{\lambda^{*}}\left(x^{*} ; q, t\right)$, where $\lambda^{*}=\left(\lambda_{2}, \lambda_{3}, \ldots\right)$ and $x^{*}=\left(x_{2}, x_{3}, \ldots\right)$. (With the notation of (4.7), the coefficient of $x_{1}^{\lambda_{1}}$ in $P_{\lambda}$ is equal to

$$
\sum_{\nu} u_{\lambda \nu} m_{\nu^{*}}\left(x^{*}\right)
$$

summed over partitions $\nu \leqslant \lambda$ such that $\nu_{1}=\lambda_{1}$, where $\nu^{*}=\left(\nu_{2}, \nu_{3}, \ldots\right)$. Hence it has to be shown that $u_{\lambda \nu}=u_{\lambda^{*} \nu^{*}}$ for all such partitions. The coefficients $u_{\lambda \nu}$ are determined recursively by the equations (1) in the proof of (4.7). From §3, Example 1 (b) it follows that $e_{\lambda^{*} \mu^{*}}=t e_{\lambda \mu}$ if $\mu<\lambda$, and $e_{\lambda^{*} \lambda^{*}}-e_{\nu^{*} \nu^{*}}=t\left(e_{\lambda \lambda}-e_{\nu \nu}\right)$. Hence $u_{\lambda \nu}=u_{\lambda^{*} \nu^{*}}$, as required.)
2. From §3, Example 3(a) it follows that

$$
D_{n}(X ; \alpha) m_{\lambda}(x)=\sum_{\mu<\lambda} c_{\lambda \mu}(X ; \alpha) m_{\mu}(x)
$$

with coefficients $c_{\lambda \mu} \in \mathbf{Z}[X, \alpha]$ and

$$
c_{\lambda \lambda}=\prod_{i=1}^{n}\left(X+\alpha \lambda_{i}+n-i\right)
$$

Since $\alpha>0$, the sequence $\left(\alpha \lambda_{i}+n-i\right)_{1<i<n}$ is strictly decreasing, and therefore $c_{\lambda \lambda} \neq c_{\mu \mu}$ if $\lambda \neq \mu$.
(a) Let $C$ denote the matrix ( $c_{\lambda \mu}$ ). Show that there is a unique strictly upper unitriangular matrix $U$ such that $U C U^{-1}$ is a diagonal matrix. For each partition $\lambda$ of length $\leqslant n$ define

$$
\begin{equation*}
P_{\lambda}^{\alpha}(x)=\sum_{\mu<\lambda} u_{\lambda \mu} m_{\mu}(x) \tag{1}
\end{equation*}
$$

where $x=\left(x_{1}, \ldots, x_{n}\right)$. Show that

$$
\begin{equation*}
D_{n}(X ; \alpha) P_{\lambda}^{\alpha}=c_{\lambda \lambda}(X ; \alpha) P_{\lambda}^{\alpha} \tag{2}
\end{equation*}
$$

and deduce from §3, Example 3(b) that

$$
\begin{equation*}
\left\langle P_{\lambda}^{\alpha}, P_{\mu}^{\alpha}\right\rangle_{\alpha}=0 \tag{3}
\end{equation*}
$$

if $\lambda \neq \mu$.
(b) The symmetric polynomials $P_{\lambda}^{\alpha}(x)$ so defined are characterized by the properties (1) and (3). Hence the coefficients $u_{\lambda \mu}$ can be computed recursively by the Gram-Schmidt process. Deduce that the $u_{\lambda \mu}$ are rational functions of $\alpha$, independent of $X$ and of $n$. The symmetric functions $P_{\lambda}{ }^{\alpha}$ so defined are Jack's symmetric functions ( $\S 10$ below).
(c) The differential operators $D_{n}^{r}$ defined in $\S 3$, Example 3 commute with each other. (By (2) above, they are simultaneously diagonalized by the $P_{\lambda}{ }^{\alpha}$.)
3. Let $\square_{n}^{\alpha}$ be the Laplace-Beltrami operator ( $\S 3$, Example 3(e)) acting on symmetric polynomials in $x_{1}, \ldots, x_{n}$.
(a) If $\rho=\rho_{n, n-1}: \Lambda_{n} \rightarrow \Lambda_{n-1}$ is the restriction homomorphism, show that for $f \in \Lambda_{n}^{r}$ we have

$$
\begin{aligned}
& \rho\left(U_{n} f\right)=U_{n-1}(\rho f), \\
& \rho\left(V_{n} f\right)=\left(V_{n-1}+r\right)(\rho f)
\end{aligned}
$$

and hence that $\rho \circ \square_{n}^{\alpha}=\square_{n-1}^{\alpha} \circ \rho$. It follows that

$$
\square^{\alpha}=\lim _{\leftarrow} \square_{n}^{\alpha}
$$

is a well-defined operator on $\Lambda_{F}$, where $F=\mathbf{Q}(\alpha)$.
(b) Show that

$$
\square^{\alpha} P_{\lambda}^{\alpha}=e_{\lambda}(\alpha) P_{\lambda}^{\alpha}
$$

where $e_{\lambda}(\alpha)=n\left(\lambda^{\prime}\right) \alpha-n(\lambda)$.
If $\lambda>\mu$ we have $n(\lambda)<n(\mu)$ and $n\left(\lambda^{\prime}\right)>n\left(\mu^{\prime}\right)$, hence $e_{\lambda}(\alpha) \neq e_{\mu}(\alpha)$.
(c) Show that, if $\lambda$ is a partition of length $n$,

$$
\square^{\alpha} m_{\lambda}=e_{\lambda}(\alpha) m_{\lambda}+\sum_{1<i<j \leqslant n}\left(\lambda_{i}-\lambda_{j}\right) \sum_{r \geqslant 1} m_{\left(\lambda-r \varepsilon_{i}+r \varepsilon_{j}\right)^{+}}
$$

where $\left(\lambda-r \varepsilon_{i}+r \varepsilon_{j}\right)^{+}$is the partition obtained by rearranging the sequence $\left(\lambda_{1}, \ldots, \lambda_{i}-r, \ldots, \lambda_{j}+r, \ldots, \lambda_{n}\right)$, and in the inner sum $r$ runs from 1 to $\left[\frac{1}{2}\left(\lambda_{i}-\lambda_{j}\right)\right]$.
(d) Let $u_{\lambda \mu}$ denote the coefficient of $m_{\mu}$ in $P_{\lambda}^{\alpha}$, as in Example 2 above. Deduce from (b) and (c) that if $\mu<\lambda$ we have

$$
u_{\lambda \mu}=\left(e_{\lambda}(\alpha)-e_{\mu}(\alpha)\right)^{-1} \sum\left(\mu_{i}-\mu_{j}+2 r\right) u_{\lambda,\left(\mu+r \varepsilon_{i}-r \varepsilon_{j}\right)^{+}}
$$

summed over $(i, j, r)$ satisfying $1 \leqslant i<j \leqslant l(\mu)$ and $r \geqslant 1$, such that $\left(\mu+r \varepsilon_{i}-r \varepsilon_{j}\right)^{+}$ is a partition $<\lambda$.
The coefficients $u_{\lambda \mu}$ may be computed recursively from this formula. In particular, it shows that $u_{\lambda \mu}$ is a rational function of $\alpha$ whose numerator and denominator are polynomials in $\alpha$ with positive integral coefficients.

## 5. Duality

The effect of the involution $\omega$ (Chapter I, §2) on the Schur functions is given by

$$
\omega s_{\lambda}=s_{\lambda^{\prime}}
$$

(Chapter I, (3.8)). This result is generalized in the following proposition, in which $\omega_{q, t}$ is the automorphism of $\Lambda_{F}$ defined in (2.14):-
(5.1) We have

$$
\begin{aligned}
\omega_{q, t} P_{\lambda}(x ; q, t) & =Q_{\lambda^{\prime}}(x ; t, q), \\
\omega_{q, t} Q_{\lambda}(x ; q, t) & =P_{\lambda^{\prime}}(x ; t, q)
\end{aligned}
$$

Since $\omega_{t, q}=\omega_{q, t}^{-1}$, these two assertions are equivalent.
Clearly (5.1) is equivalent to

$$
\left\langle\omega_{q, t} P_{\lambda^{\prime}}(q, t), P_{\mu}(t, q)\right\rangle_{t, q}=\delta_{\lambda_{\mu}}
$$

and hence by (2.17) to

$$
\left\langle\omega P_{\lambda^{\prime}}(q, t), P_{\mu}(t, q)\right\rangle=\delta_{\lambda \mu}
$$

in which the scalar product is that of Chapter I. Next, let

$$
A(q, t)=M(P(q, t), s)
$$

the transition matrix from the $P$ 's to the Schur functions. Then (5.1') is equivalent to

$$
\begin{equation*}
J A(q, t) J A(t, q)^{\prime}=1 \tag{5.1"}
\end{equation*}
$$

where $J=\left(\delta_{\lambda^{\prime} \mu}\right)$ is the conjugation matrix and $A(t, q)^{\prime}$ is the transpose of $A(t, q)$.

To prove (5.1") we introduce the matrix of scalar products

$$
U(q, t)=\left(\left\langle s_{\lambda}, s_{\mu}\right\rangle_{q, t}\right)
$$

which has the following properties:
(5.2) (a) $U(q, t)=U(t, q)^{-1}$,
(b) $U(q, t)=J U(q, t) J$,
(c) $D(q, t)=A(q, t) U(q, t) A(q, t)^{\prime}$ is a diagonal matrix.

Proof. Let $X=\left(\chi_{\rho}^{\lambda}\right)$ be the matrix of characters of $S_{n}$ (Chapter I, §7). Then the $(\rho, \mu)$ entry of $X U(q, t)$ is

$$
\begin{aligned}
\sum_{\lambda} \chi_{\rho}^{\lambda}\left\langle s_{\lambda}, s_{\mu}\right\rangle_{q, t} & =\left\langle p_{\rho}, s_{\mu}\right\rangle_{q, t} \\
& =\chi_{\rho}^{\mu} \Pi \frac{1-q^{\rho_{i}}}{1-t^{\rho_{i}}}
\end{aligned}
$$

from which it follows that $X U(q, t) X^{-1}$ is a diagonal matrix whose inverse is $X U(t, q) X^{-1}$. This proves (a), and since $X J=\varepsilon X$, where $\varepsilon$ is a diagonal matrix of $\pm 1$ 's, it also proves (b). Finally, (c) expresses the orthogonality of the $P_{\lambda}(q, t)$.

Now the matrix $A(q, t)$ is strictly upper unitriangular, and hence

$$
B=J A(q, t) J A(t, q)^{\prime}
$$

is strictly lower unitriangular. We now compute

$$
\begin{array}{rlr}
C & =D(t, q) B^{-1}=D(t, q) A(t, q)^{\prime-1} J A(q, t)^{-1} J \\
& =A(t, q) U(t, q) J A(q, t)^{-1} J & \text { by (5.2)(c) } \\
& =A(t, q) J U(q, t)^{-1} A(q, t)^{-1} J & \text { by (5.2)(a),(b) } \\
& =A(t, q) J A(q, t)^{\prime} D(q, t)^{-1} J & \text { by (5.2)(c) } \\
& =B^{\prime} J D(q, t)^{-1} J . &
\end{array}
$$

So the matrix $C$ is lower triangular (because $B^{-1}$ is) and upper triangular (because $B^{\prime}$ is), hence diagonal. It follows that $B=1$, which proves (5.1") and hence also (5.1).

In particular, we may take $q=1$ in (5.1'). Then $P_{\mu}(t, 1)=m_{\mu}$ by (4.14)(v), and hence (5.1') shows that $\omega P_{\lambda^{\prime}}(1, t)=h_{\lambda}$, or equivalently $P_{\lambda^{\prime}}(1, t)=e_{\lambda}$, as stated in (4.14)(vi).

From (5.1) and (4.12) it also follows that

$$
\begin{equation*}
b_{\lambda}(q, t) b_{\lambda^{\prime}}(t, q)=1 \tag{5.3}
\end{equation*}
$$

and by applying $\omega_{q, t}$ to both sides of (4.13) that

$$
\begin{align*}
\prod_{i, j}\left(1+x_{i} y_{i}\right) & =\sum_{\lambda} P_{\lambda}(x ; q, t) P_{\lambda^{\prime}}(x ; t, q)  \tag{5.4}\\
& =\sum_{\lambda} Q_{\lambda}(x ; q, t) Q_{\lambda^{\prime}}(x ; t, q) .
\end{align*}
$$

Finally we have

$$
\begin{equation*}
Q_{(n)}(x ; q, t)=g_{n}(x ; q, t) \tag{5.5}
\end{equation*}
$$

by (2.13), (4.8), and (5.1).

## Examples

1. If $\lambda$ is any partition let

$$
f_{\lambda}(q, t)=(1-t) \sum_{i \geqslant 1}\left(q^{\lambda_{i}}-1\right) t^{i-1}
$$

(a) Show that

$$
f_{\lambda}(q, t)=f_{\lambda^{\prime}}(t, q)
$$

where $\lambda^{\prime}$ is the conjugate partition.
(b) The eigenvalues of the operator $(t-1) E(4.3)$ are $f_{\lambda}\left(q, t^{-1}\right)$.
2. We shall use Example 1 above and $\S 3$, Example 2(d) to deduce another proof of the duality theorem (5.1). The operator $\tilde{E}$ of $\S 3$, Example 2 is equal to $1+(t-1) E$, and hence

$$
\begin{aligned}
\tilde{E}_{t^{-1}, q^{-1}} \omega_{q, t} P_{\lambda}(q, t) & =\omega_{q, t} \tilde{E}_{q, t} P_{\lambda}(q, t) \\
& =\left(1+f_{\lambda}\left(q, t^{-1}\right)\right) \omega_{q, t} P_{\lambda}(q, t) \\
& =\left(1+f_{\lambda^{\prime}}\left(t^{-1}, q\right)\right) \omega_{q, t} P_{\lambda}(q, t)
\end{aligned}
$$

It follows that $\omega_{q, t} P_{\lambda}(q, t)$ is an eigenfunction of $\tilde{E}_{t^{-1}, q^{-1}}$ with eigenvalue $1+f_{\lambda^{\prime}}\left(t^{-1}, q\right)$, and hence must be a scalar multiple of $P_{\lambda^{\prime}}\left(t^{-1}, q^{-1}\right)=P_{\lambda^{\prime}}(t, q)$. $\mathrm{T}_{0}$ complete the proof of (5.1) it remains to show that

$$
\left\langle\omega_{q, t} P_{\lambda}(q, t), P_{\lambda^{\prime}}(t, q)\right\rangle_{t, q}=1
$$

or equivalently (2.17) that

$$
\begin{equation*}
\left\langle\omega P_{\lambda}(q, t), P_{\lambda^{\prime}}(t, q)\right\rangle=1 \tag{1}
\end{equation*}
$$

with respect to the scalar product of Chapter I. Finally, prove (1) by expressing $P_{\lambda}(q, t)$ and $P_{\lambda^{\prime}}(q, t)$ as linear combinations of Schur functions, and using the fact that $\omega s_{\mu}=s_{\mu^{\prime}}$.
3. Let $\alpha$ be a positive real number, let $F=\mathbf{Q}(\alpha)$ and let $\omega_{\alpha}$ be the $F$-algebra automorphism of $\Lambda_{\boldsymbol{F}}$ defined by

$$
\omega_{\alpha} p_{r}=(-1)^{r-1} \alpha^{r} p_{r}
$$

for each $r \geqslant 1$.
(a) Show that

$$
\omega_{\alpha} \square^{\alpha} \omega_{\alpha}^{-1}=-\alpha \square^{\alpha^{-1}}
$$

where $\square^{\alpha}$ is the operator defined in $\S 4$, Example 3(a). (Verify that

$$
\begin{aligned}
& U_{n} p_{\lambda}=n\left(\lambda^{\prime}\right) p_{\lambda}+S, \\
& V_{n} p_{\lambda}=\left((n-1)|\lambda|-n\left(\lambda^{\prime}\right)\right) p_{\lambda}+S^{\prime}
\end{aligned}
$$

where $U_{n}, V_{n}$ are the operators defined in §3, Example 3(d) and $S$ (resp. $S^{\prime}$ ) is a linear combination of power-sum products $p_{\mu}$ such that $|\mu|=|\lambda|$ and $l(\mu)=l(\lambda)-1$ (resp. $l(\mu)=l(\lambda)+1)$. Hence show that

$$
\left(\omega_{\alpha} \square^{\alpha}+\alpha \square^{\alpha^{-1}} \omega_{\alpha}\right) p_{\lambda}=0
$$

for all partitions $\lambda$.)
(b) Let $Q_{\lambda}^{\alpha}=\omega_{\alpha}^{-1} P_{\lambda^{\prime}}^{\alpha^{-1}}$ (§4, Example 2(b)). Deduce from (a) that $Q_{\lambda}^{\alpha}$ is an eigenfunction of $\square^{\alpha}$ with eigenvalue $e_{\lambda}(\alpha)(\S 4$, Example 3).
(c) Show that $\left(Q_{\lambda}^{\alpha}\right)$ is the basis dual to $\left(P_{\lambda-1}^{\alpha}\right)$ for the scalar product (1.4). (Let $a_{\lambda \mu}=\left\langle P_{\lambda}^{\alpha}, Q_{\mu}^{\alpha}\right\rangle$. By expressing $P_{\lambda}^{\alpha}$ and $P_{\mu^{\prime}}^{\alpha^{-1}}$ as linear combinations of Schur functions, show that the matrix ( $a_{\lambda \mu}$ ) is strictly upper unitriangular, so that $a_{\lambda \lambda}=1$ and $a_{\lambda \mu}=0$ unless $\lambda \geqslant \mu$. Finally, if $\lambda>\mu$ use the self-adjointness of $\square^{\alpha}$ and the fact that $e_{\lambda}(\alpha) \neq e_{\mu}(\alpha)(\S 4$, Example 3$)$ to conclude that $a_{\lambda \mu}=0$.)

## Notes and references

The proof of the duality theorem (5.1) in the text was suggested by A. Garsia. See [G3].

## 6. Pieri formulas

For any partition $\mu$ and positive integer $r$ we have (Chapter I, (5.16))

$$
s_{\mu} s_{(r)}=\sum_{\lambda} s_{\lambda}
$$

summed over all partitions $\lambda \supset \mu$ such that $\lambda-\mu$ is a horizontal $r$-strip, and dually

$$
s_{\mu} s_{\left(1^{\prime}\right)}=\sum_{\lambda} s_{\lambda}
$$

summed over partitions $\lambda \supset \mu$ such that $\lambda-\mu$ is a vertical $r$-strip. In this section we shall generalize these facts to the symmetric functions $P_{\lambda}(x ; q, t)$.

For each partition $\mu$ of length $\leqslant n$, define a homomorphism (or specialization)

$$
u_{\mu}: F\left[x_{1}, \ldots, x_{n}\right] \rightarrow F
$$

by $u_{\mu}\left(x_{i}\right)=q^{\mu_{i}} t^{n-i}(1 \leqslant i \leqslant n)$. We extend $u_{\mu}$ to those elements of the field $F\left(x_{1}, \ldots, x_{n}\right)$ for which the specialized denominator does not vanish. In particular,

$$
u_{0}(f)=f\left(t^{n-1}, t^{n-2}, \ldots, t, 1\right)
$$

for any polynomial $f \in F\left[x_{1}, \ldots, x_{n}\right]$.
In this notation (4.15) takes the form

$$
\begin{equation*}
D_{n}^{r} P_{\lambda}=u_{\lambda}\left(e_{r}\right) P_{\lambda} \tag{6.1}
\end{equation*}
$$

for $0 \leqslant r \leqslant n$ and $\lambda$ of length $\leqslant n$. Hence by (3.4) we have

$$
\begin{equation*}
u_{\lambda}\left(e_{r}\right) P_{\lambda}=\sum_{I} A_{I}\left(\prod_{i \in I} T_{q, x_{i}}\right) P_{\lambda} \tag{6.2}
\end{equation*}
$$

summed over all $r$-element subsets $I$ of $\{1,2, \ldots, n\}$, where

$$
\begin{aligned}
A_{I} & =a_{\delta}^{-1}\left(\prod_{i \in I} T_{i, x_{i}}\right) a_{\delta} \\
& =\prod_{1<i<j<n} \frac{x_{i} \theta^{\theta_{i}}-x_{j} t^{\theta_{j}}}{x_{i}-x_{j}}
\end{aligned}
$$

where $\theta_{i}=1$ if $i \in I$, and $\theta_{i}=0$ otherwise. Hence for a partition $\mu$ of length $\leqslant n$ we have

$$
u_{\mu}\left(A_{I}\right)=\prod_{i<j} \frac{q^{\mu_{i} t^{n-i+\theta_{i}}-q^{\mu_{i} t^{n-j+\theta_{j}}}}}{q^{\mu_{i} t^{n-i}}-q^{\mu_{i} t^{n-j}}}
$$

(6.3) $u_{\mu}\left(A_{l}\right) \neq 0$ if and only if $\mu+\theta=\left(\mu_{1}+\theta_{1}, \ldots, \mu_{n}+\theta_{n}\right)$ is a partition.

Proof. Suppose that $u_{\mu}\left(A_{I}\right)=0$. Then there exist $i<j$ such that $\mu_{i}=\mu_{j}$ and $i-j=\theta_{i}-\theta_{j}$. Since $\left|\theta_{i}-\theta_{j}\right| \leqslant 1$, it follows that $j=i+1, \theta_{i}=0$, and $\theta_{j}=1$, so that $\mu_{i}=\mu_{i+1}$ and $\mu_{i}+\theta_{i}<\mu_{i+1}+\theta_{i+1}$, which means that $\mu+\theta$ is not a partition.

Conversely, if $\mu+\theta$ is not a partition there exists $i \leqslant n-1$ such that $\mu_{i}=\mu_{i+1}, \theta_{i}=0$, and $\theta_{i+1}=1$, whence $u_{\mu}\left(A_{I}\right)=0$.

Now let $\mu, \nu$ be partitions of length $\leqslant n$ such that $\nu \supset \mu$ and $\theta=\nu-\mu$ is a vertical strip, and define

$$
\begin{equation*}
B_{\nu / \mu}=t^{n(\nu)-n(\mu)} \prod_{1<i<j \leqslant n} \frac{1-q^{\mu_{i}-\mu_{j}} t^{j-i+\theta_{i}-\theta_{j}}}{1-q^{\mu_{i}-\mu_{j} t^{j-i}}} \tag{6.4}
\end{equation*}
$$

so that $B_{\nu / \mu}=u_{\mu}\left(A_{I}\right)$ where $I=\left\{i: \theta_{i}=1\right\}$. Then by applying $u_{\mu}$ to (6.2) we obtain

$$
\begin{equation*}
u_{\lambda}\left(e_{r}\right) u_{\mu}\left(P_{\lambda}\right)=\sum_{\nu} B_{\nu / \mu} u_{\nu}\left(P_{\lambda}\right) \tag{6.5}
\end{equation*}
$$

where by virtue of (6.3) the sum is over partitions $\nu \supset \mu$ of length $\leqslant n$ such that $\nu-\mu$ is a vertical $r$-strip.

Observe next that $u_{0}\left(P_{\lambda}\right)$ is not identically zero, because when $q=t$ we have $u_{0}\left(P_{\lambda}\right)=u_{0}\left(s_{\lambda}\right)=s_{\lambda}\left(t^{n-1}, t^{n-2}, \ldots, 1\right)$ which is not zero (Chapter I, $\S 3$, Example 1). Let us temporarily write

$$
\tilde{P_{\lambda}}=P_{\lambda} / u_{0}\left(P_{\lambda}\right)
$$

We shall now prove simultaneously
(6.6) (Symmetry) For all partitions $\lambda$, $\mu$ of length $\leqslant n$ we have

$$
u_{\lambda}\left(\tilde{P_{\mu}}\right)=u_{\mu}\left(\tilde{P_{\lambda}}\right)
$$

(6.7) (Pieri formula) For all partitions $\sigma$ of length $\leqslant n$ and all positive integers $r$ we have

$$
\tilde{P}_{\sigma} e_{r}=\sum_{\nu} B_{\nu / \sigma} \tilde{P_{\nu}}
$$

summed over partitions $\nu \supset \sigma$ of length $\leqslant n$ such that $\nu-\sigma$ is a vertical $r$-strip.

Proof. We shall proceed by induction. First of all, (6.6) is true for all $\lambda$ when $\mu=0$, because $u_{\lambda}\left(\tilde{P}_{0}\right)=u_{\lambda}(1)=1$ and $u_{0}\left(\tilde{P}_{\lambda}\right)=1$. So let $\mu$ be a non-zero partition of length $\leqslant n$, and assume as inductive hypothesis that
(6.6) is true for all $\lambda$ and for all $\pi$ such that either $|\pi|<|\mu|$, or $|\pi|=|\mu|$ and $\pi<\mu$.

Let $r \geqslant 1$ be such that $\mu_{r}>\mu_{r+1}$ and let $\sigma$ be the partition defined by $\sigma_{i}=\mu_{i}-1$ for $1 \leqslant i \leqslant r$, and $\sigma_{i}=\mu_{i}$ for $i>r$. We shall show that (6.7) is true for this $\sigma$.
Consider the product $\tilde{P}_{\sigma} e_{r}$. The leading monomial in $\tilde{P}_{\sigma}$ is $x^{\sigma}$, and the leading monomial in $e_{r}$ is $x_{1} \ldots x_{r}$. Hence the leading monomial in $\tilde{P}_{\sigma} e_{r}$ is $x^{\mu}$, and therefore we have

$$
\begin{equation*}
e_{r} \tilde{P}_{\sigma}=\sum_{\nu \ll \mu} b_{\nu} \tilde{P}_{\nu} \tag{1}
\end{equation*}
$$

for suitable coefficients $b_{\nu}$. Next, from (6.5) we have, for any partition $\pi$,

$$
\begin{equation*}
u_{\pi}\left(e_{r}\right) u_{\sigma}\left(\tilde{P}_{\pi}\right)=\sum_{\nu} B_{\nu / \sigma} u_{\nu}\left(\tilde{P}_{\pi}\right) \tag{2}
\end{equation*}
$$

summed over partitions $\nu \supset \sigma$ such that $\nu-\sigma$ is a vertical $r$-strip.
Suppose that $|\pi|=|\mu|$ and $\pi \leqslant \mu$. By the inductive hypothesis we have

$$
u_{\sigma}\left(\tilde{P_{\pi}}\right)=u_{\pi}\left(\tilde{P}_{\sigma}\right)
$$

because $|\sigma|<|\mu|$, and

$$
u_{\nu}\left(\tilde{P}_{\pi}\right)=u_{\pi}\left(\tilde{P_{\nu}}\right)
$$

for all $\nu \leqslant \mu$ (this is assured by the inductive hypothesis if either $\pi<\mu$ or $\nu<\mu$, and the only other possibility is $\pi=\nu=\mu$ ). Hence (2) now takes the form

$$
\begin{equation*}
u_{\pi}\left(e_{r} \tilde{P}_{\sigma}\right)=\sum_{\nu} B_{\nu / \sigma} u_{\pi}\left(\tilde{P_{\nu}}\right) . \tag{3}
\end{equation*}
$$

On the other hand, by applying $u_{\pi}$ to both sides of (1) we obtain

$$
\begin{equation*}
u_{\pi}\left(e_{r} \tilde{P_{\sigma}}\right)=\sum_{\nu \ll \mu} b_{\nu} u_{\pi}\left(\tilde{P_{\nu}}\right) \tag{4}
\end{equation*}
$$

At this point we require

$$
\begin{equation*}
\operatorname{det}\left(u_{\pi}\left(\tilde{P}_{\nu}\right)\right)_{\pi, \nu<\mu} \neq 0 \tag{6.8}
\end{equation*}
$$

Assuming this for the moment, it follows from comparison of (3) and (4) that $b_{\nu}=B_{\nu / \sigma}$ if $\nu-\sigma$ is a vertical $r$-strip, and that $b_{\nu}=0$ otherwise, so that (1) becomes

$$
\begin{equation*}
e_{r} \tilde{P_{\sigma}}=\sum_{\nu} B_{\nu / \sigma} \tilde{P_{\nu}} \tag{5}
\end{equation*}
$$

which is (6.7).

Now let $\lambda$ be any partition of length $\leqslant n$, and apply $u_{\lambda}$ to both sides of (5):

$$
\begin{equation*}
u_{\lambda}\left(e_{r}\right) u_{\lambda}\left(\tilde{P}_{\sigma}\right)=\sum_{\nu} B_{\nu / \sigma} u_{\lambda}\left(\tilde{P}_{\nu}\right) . \tag{6}
\end{equation*}
$$

By the inductive hypothesis we have $u_{\lambda}\left(\tilde{P}_{\sigma}\right)=u_{\sigma}\left(\tilde{P_{\lambda}}\right)$ since $|\sigma|<|\mu|$, and $u_{\lambda}\left(\tilde{P}_{\nu}\right)=u_{\nu}\left(\tilde{P}_{\lambda}\right)$ if $\nu \neq \mu$. Hence (6) takes the form

$$
\begin{equation*}
u_{\lambda}\left(e_{r}\right) u_{\sigma}\left(\tilde{P}_{\lambda}\right)=B_{\mu / \sigma} u_{\lambda}\left(\tilde{P}_{\mu}\right)+\sum_{\nu<\mu} B_{\nu / \sigma} u_{\nu}\left(\tilde{P}_{\lambda}\right) \tag{7}
\end{equation*}
$$

On the other hand we have from (6.5)

$$
\begin{equation*}
u_{\lambda}\left(e_{r}\right) u_{\sigma}\left(\tilde{P_{\lambda}}\right)=B_{\mu / \sigma} u_{\mu}\left(\tilde{P_{\lambda}}\right)+\sum_{\nu<\mu} B_{\nu / \sigma} u_{\nu}\left(\tilde{P_{\lambda}}\right) . \tag{8}
\end{equation*}
$$

Since $B_{\mu / \sigma} \neq 0$, comparison of (7) and (8) shows that $u_{\lambda}\left(\tilde{P}_{\mu}\right)=u_{\mu}\left(\tilde{P_{\lambda}}\right)$, and completes the induction step.

Thus it remains only to prove (6.8). In the determinant we may replace $\tilde{P}_{\nu}$ by $P_{\nu}$ and then by $m_{\nu}$, since the transition matrix $M(P, m)$ is unitriangular. So it is enough to show that

$$
\operatorname{det}\left(u_{\pi}\left(m_{\nu}\right)\right)_{\pi, \nu<\mu} \neq 0
$$

Regarded as a polynomial in $t$, the dominant term in $u_{\pi}\left(m_{\nu}\right)$ is $u_{\pi}\left(x^{\nu}\right)=$ $q^{\langle\nu, \pi\rangle} t^{\langle\nu, \delta\rangle}$. Hence it is enough to show that

$$
\operatorname{det}\left(q^{\langle\nu, \pi\rangle}\right)_{\nu, \pi<\mu} \neq 0
$$

which is a particular case of Example 1 below.
We can restate (6.7) in the form

$$
\begin{equation*}
P_{\mu} e_{r}=\sum_{\lambda} \psi_{\lambda / \mu}^{\prime} P_{\lambda} \tag{6.7'}
\end{equation*}
$$

summed over partitions $\lambda \supset \mu$ (of length $\leqslant n$ ) such that $\lambda-\mu$ is a vertical $r$-strip, and

$$
\begin{equation*}
\psi_{\lambda / \mu}^{\prime}=B_{\lambda / \mu} u_{0}\left(P_{\mu}\right) / u_{0}\left(P_{\lambda}\right) \tag{6.9}
\end{equation*}
$$

When $\lambda=\mu+\left(1^{r}\right)$, consideration of the coefficient of $x^{\lambda}$ on either side of (6.7') shows that $\psi_{\lambda / \mu}^{\prime}=1$, and hence

$$
\begin{equation*}
u_{0}\left(P_{\lambda}\right)=B_{\lambda / \mu} u_{0}\left(P_{\mu}\right) \tag{6.10}
\end{equation*}
$$

when $\lambda=\mu+\left(1^{r}\right)$.
Since $B_{\lambda / \mu}$ is given explicitly by (6.4), we can use (6.10) to compute $u_{0}\left(P_{\lambda}\right)$ and then (6.9) to compute the coefficients $\psi_{\lambda / \mu}^{\prime}$ in the Pieri formula
(6.7'), thus making it fully explicit. To state the result, we define

$$
\Delta^{+}=\Delta_{n}^{+}(q, t)=\prod_{1<i<j<n} \frac{\left(x_{i} x_{j}^{-1} ; q\right)_{\infty}}{\left(t x_{i} x_{j}^{-1} ; q\right)_{\infty}} .
$$

Then we have, for any partition $\lambda$ of length $\leqslant n$,

$$
\begin{align*}
u_{0}\left(P_{\lambda}\right) & =P_{\lambda}\left(1, t, \ldots, t^{n-1} ; q, t\right)  \tag{6.11}\\
& =t^{n(\lambda)} u_{\lambda}\left(\Delta^{+}\right) / u_{0}\left(\Delta^{+}\right)
\end{align*}
$$

Proof. Since (6.11) is true when $\lambda=0$ (both sides being equal to 1 ) it is enough by (6.10) to verify that

$$
\begin{equation*}
u_{\lambda}\left(\Delta^{+}\right) / u_{\mu}\left(\Delta^{+}\right)=t^{n(\mu)-n(\lambda)} B_{\lambda / \mu} \tag{1}
\end{equation*}
$$

when $\mu=\left(\lambda_{1}-1, \lambda_{2}-1, \ldots\right)$ is the partition obtained from $\lambda$ by removing the first column. Both sides of (1) are products of terms of the form $\left(1-q^{a} t^{b}\right)^{ \pm 1}$, and to verify (1) and similar identities we shall encounter later it is helpful to switch to additive notation.

Thus, if $P$ is any (finite or infinite) product of the form

$$
P=\prod_{a, b \geqslant 0}\left(1-q^{a} t^{b}\right)^{n_{a b}}
$$

with exponents $n_{a b} \in \mathbf{Z}$ we define

$$
\begin{equation*}
L(P)=\sum_{a, b>0} n_{a b} q^{a} t^{b} \in \mathbf{Z}[[q, t]] \tag{6.12}
\end{equation*}
$$

The mapping $L$ is injective, so that if $P$ and $Q$ are two such products and $L(P)=L(Q)$, we may conclude that $P=Q$.

For example, if $P=\left(q^{a} t^{b} ; q\right)_{\infty}$ we have

$$
L(P)=q^{a} t^{b}\left(1+q+q^{2}+\ldots\right)=\frac{q^{a} t^{b}}{1-q}
$$

Hence

$$
L\left(u_{\lambda}\left(\Delta^{+}\right) / u_{\mu}\left(\Delta^{+}\right)\right)=\sum_{1<i<j<n}\left(u_{\lambda}\left(x_{i} x_{j}^{-1}\right)-u_{\mu}\left(x_{i} x_{j}^{-1}\right)\right) \frac{1-t}{1-q}
$$

and since

$$
\begin{aligned}
u_{\lambda}\left(x_{i} x_{j}^{-1}\right)-u_{\mu}\left(x_{i} x_{j}^{-1}\right) & =\left(q^{\lambda_{i}-\lambda_{j}}-q^{\left.\mu_{i}-\mu_{j}\right) t^{j-i}}\right. \\
& = \begin{cases}q^{\mu_{1}}(q-1) t^{j-i} & \text { if } i \leqslant r<j, \\
0 & \text { otherwise, }\end{cases}
\end{aligned}
$$

where $r=l(\lambda)$, it follows that

$$
\begin{equation*}
L\left(u_{\lambda}\left(\Delta^{+}\right) / u_{\mu}\left(\Delta^{+}\right)\right)=\sum_{i=1}^{r} \sum_{j=r+1}^{n} q^{\mu_{i} t^{j-i}(t-1)} \tag{2}
\end{equation*}
$$

On the other hand, from (6.4) we have

$$
\begin{equation*}
L\left(t^{n(\mu)-n(\lambda)} B_{\lambda / \mu}\right)=\sum_{1<i<j<n} q^{\mu_{i}-\mu_{/ t} j^{j-i}\left(t^{\theta_{i}-\theta_{1}}-1\right)} \tag{3}
\end{equation*}
$$

where $\theta_{i}=1$ if $1 \leqslant i \leqslant r$, and $\theta_{i}=0$ if $i>r$. The right-hand sides of (2) and (3) are visibly equal, and therefore (1) is established.

Next, from (6.9) and (6.11) we have

$$
\begin{aligned}
L\left(\psi_{\lambda / \mu}^{\prime}\right) & =\sum q^{\mu_{i}-\mu_{J} t^{j-i}\left(t^{\theta_{i}-\theta_{j}}-1\right)-\sum q^{\mu_{i}-\mu_{t} t^{j-i}}\left(q^{\theta_{i}-\theta_{j}}-1\right) \frac{1-t}{1-q}} \\
& =\sum q^{\mu_{i}-\mu_{j} j-i}\left(\left(t^{\theta_{i}-\theta_{J}}-1\right)-\left(q^{\theta_{i}-\theta_{J}}-1\right) \frac{1-t}{1-q}\right)
\end{aligned}
$$

all sums being over pairs $(i, j)$ such that $1 \leqslant i<j \leqslant n$. The pairs $(i, j)$ such that $\theta_{i}=\theta_{j}$ give a zero contribution, and so do the pairs $(i, j)$ such that $\theta_{i}=1$ and $\theta_{j}=0$. When $\theta_{i}=0$ and $\theta_{j}=1$, the expression in braces above is equal to

$$
\left(t^{-1}-1\right)-\left(q^{-1}-1\right)(1-t) /(1-q)=t^{-1}+q^{-1} t-1-q^{-1}
$$

and hence we have

$$
\begin{equation*}
\psi_{\lambda / \mu}^{\prime}=\prod \frac{\left(1-q^{\mu_{i}-\mu_{j}} t^{j-i-1}\right)\left(1-q^{\lambda_{i}-\lambda_{j}} t^{j-i+1}\right)}{\left(1-q^{\mu_{i}-\mu_{i} t^{j-i}}\right)\left(1-q^{\lambda_{i}-\lambda_{j} t^{j-i}}\right)} \tag{6.13}
\end{equation*}
$$

where the product is taken over all pairs $(i, j)$ such that $i<j$ and $\lambda_{i}=\mu_{i}$, $\lambda_{j}=\mu_{j}+1$.

When $q=t$, the formula (6.11) reduces to the formula

$$
\begin{equation*}
s_{\lambda}\left(1, t, \ldots, t^{n-1}\right)=t^{n(\lambda)} \prod_{1<i<j<n} \frac{1-t^{\lambda_{i}-\lambda_{j}-i+j}}{1-t^{j-i}} \tag{1}
\end{equation*}
$$

of Chapter I, §3, Example 1. Now (loc. cit.) this can also be written in the form

$$
\begin{equation*}
s_{\lambda}\left(1, t, \ldots, t^{n-1}\right)=t^{n(\lambda)} \prod_{s \in \lambda} \frac{1-t^{n+c(s)}}{1-t^{h(s)}} \tag{2}
\end{equation*}
$$

where $c(s)$ is the content and $h(s)$ the hook-length of the square $s \in \lambda$. In
the first version (1), the dependence on $n$ appears only in the range $1 \leqslant i<j \leqslant n$ of the product, whereas in the second version (2) it appears as an exponent in each factor.

There is a corresponding reformulation of (6.11) that reduces to (2) when $q=t$. For each square $s=(i, j)$ in the diagram of a partition $\lambda$, let

$$
\begin{align*}
a(s) & =a_{\lambda}(s)=\lambda_{i}-j, & a^{\prime}(s)=j-1,  \tag{6.14}\\
l(s) & =l_{\lambda}(s)=\lambda_{j}^{\prime}-i, & l^{\prime}(s)=i-1,
\end{align*}
$$

so that $l^{\prime}(s), l(s), a(s)$, and $a^{\prime}(s)$ are respectively the numbers of squares in the diagram of $\lambda$ to the north, south, east, and west of the square $s$. The numbers $a(s)$ and $a^{\prime}(s)$ may be called respectively the arm-length and the arm-colength of $s$, and $l(s), l^{\prime}(s)$ the leg-length and the leg-colength. The hook length $h(s)$ is thus $a(s)+l(s)+1$, and the content $c(s)$ is $a^{\prime}(s)-l^{\prime}(s)$.

With this notation established, we have

$$
P_{\lambda}\left(1, t, \ldots, t^{n-1} ; q, t\right)=t^{n(\lambda)} \prod_{s \in \lambda} \frac{1-q^{a^{\prime}(s)} t^{n-l^{\prime}(s)}}{1-q^{a(s)} t^{(s)+1}}
$$

Proof. By use of the operator $L$ (6.12) we reduce to showing that

$$
\begin{equation*}
\sum_{s \in \lambda}\left(q^{a^{\prime}(s)} t^{n-l^{\prime}(s)}-q^{a(s)} t^{l(s)+1}\right)=\frac{1-t}{1-q} \sum_{1<i<j \leqslant n}\left(q^{\lambda_{i}-\lambda_{j}}-1\right) t^{j-i} \tag{6.15}
\end{equation*}
$$

for a partition $\lambda$ of length $\leqslant n$. First we have

$$
\sum_{s \in \lambda} q^{a^{\prime}(s)} t^{n-l^{\prime}(s)}=\sum_{i=1}^{r}\left(1+q+\ldots+q^{\lambda_{i}-1}\right) t^{n-i+1}
$$

where $r=l(\lambda)$, so that

$$
\begin{equation*}
(1-q) \sum_{s \in \lambda} q^{a^{\prime}(s)} t^{n-l^{\prime}(s)}=\sum_{i=1}^{n}\left(1-q^{\lambda_{i}}\right) t^{n+1-i} \tag{1}
\end{equation*}
$$

Next consider the sum $\Sigma_{s \in \lambda} q^{a(s)} t^{l(s)+1}$. The contribution to this sum from the squares in the $i$ th row of $\lambda$ is

$$
\begin{aligned}
\sum_{j=i}^{r} & \left(q^{\lambda_{i}-\lambda_{j}}+\ldots+q^{\lambda_{i}-\lambda_{j+1}+1}\right) t^{j-i+1} \\
& =(1-q)^{-1} \sum_{j-i}^{r}\left(q^{\lambda_{i}-\lambda_{j}}-q^{\lambda_{i}-\lambda_{j+1}}\right) t^{j-i+1}
\end{aligned}
$$

Summing for $i=1,2, \ldots, r$ we obtain
(2)

$$
(1-q) \sum_{s \in \lambda} q^{a(s)} t^{(s)+1}=\sum_{i=1}^{n}\left(t-q^{\left.\lambda_{i} t^{n+1-i}\right)}-(1-t) \sum_{1<i<j<n} q^{\lambda_{i}-\lambda_{j} t^{j-i}}\right.
$$

and (6.15) follows from (1) and (2) without difficulty.
Now let $u$ be an indeterminate, and define a homomorphism

$$
\varepsilon_{u, i}: \Lambda_{F} \rightarrow F
$$

by

$$
\begin{equation*}
\varepsilon_{u, t}\left(p_{r}\right)=\frac{1-u^{r}}{1-t^{r}} \tag{6.16}
\end{equation*}
$$

for each integer $r \geqslant 1$. In particular, if $u$ is replaced by $t^{n}$ we have

$$
\varepsilon_{t^{n}, t}\left(p_{r}\right)=\frac{1-t^{n r}}{1-t^{r}}=p_{r}\left(1, t, \ldots, t^{n-1}\right)
$$

and hence for any $f \in \Lambda_{F}$

$$
\varepsilon_{t^{n}, t}(f)=f\left(1, t, \ldots, t^{n-1}\right)
$$

previously denoted by $u_{0}(f)$. We now have

$$
\begin{equation*}
\varepsilon_{u, t} P_{\lambda}=\prod_{s \in \lambda} \frac{t^{l^{\prime}(s)}-q^{a^{(s)} u}}{1-q^{a(s)} t^{l(s)+1}} \tag{6.17}
\end{equation*}
$$

Proof. By (6.11'), this is true when $u=t^{n}$ for any $n \geqslant l(\lambda)$, because $\sum_{s \in \lambda} l^{\prime}(s)=n(\lambda)$. Both sides of (6.17) are polynomials in $u$ with coefficients in $F$, and agree for infinitely many values of $u$, hence are identically equal.

Next, recall ((4.11), (4.12)) that

$$
Q_{\lambda}(q, t)=b_{\lambda}(q, t) P_{\lambda}(q, t)
$$

where

$$
b_{\lambda}(q, t)=\left\langle P_{\lambda}, P_{\lambda}\right\rangle^{-1}
$$

We shall now compute $b_{\lambda}(q, t)$. For this purpose we require
(6.18) Let $f \in \Lambda_{F}$ be homogeneous of degree $r$. Then

$$
\varepsilon_{u, t} \omega_{t, q}(f)=(-q)^{-r} \varepsilon_{u, q^{-1}}(f)
$$

Proof. Since both $\varepsilon_{u, t}$ and $\omega_{\ell, q}$ are algebra homomorphisms it is enough to verify this when $f=p_{r}$, in which case it follows directly from the definitions (6.16), (2.14).

We now calculate

$$
\begin{aligned}
\varepsilon_{u, t} P_{\lambda}(q, t) & =\varepsilon_{u, t} \omega_{t, q} Q_{\lambda^{\prime}}(t, q) \\
& =(-q)^{-|\lambda|} \varepsilon_{u, q^{-1}} Q_{\lambda^{\prime}}(t, q) \\
& =(-q)^{-|\lambda|} b_{\lambda^{\prime}}(t, q) \varepsilon_{u, q^{-1}} P_{\lambda^{\prime}}\left(t^{-1}, q^{-1}\right)
\end{aligned}
$$

by (5.1), (6.18), and (4.14) (iv). From this it follows that

$$
b_{\lambda^{\prime}}(t, q)=\frac{(-q)^{|\lambda|} \varepsilon_{u, t} P_{\lambda}(q, t)}{\varepsilon_{u, q^{-1}} P_{\lambda^{\prime}}\left(t^{-1}, q^{-1}\right)}
$$

in which, by (6.17),

$$
\begin{aligned}
\varepsilon_{u, q^{-1}} P_{\lambda^{\prime}}\left(t^{-1}, q^{-1}\right) & =\prod_{s \in \lambda^{\prime}} \frac{q^{-l^{\prime}(s)}-t^{-a^{\prime}(s)} u}{1-t^{-a(s)} q^{-l(s)-1}} \\
& =(-q)^{|\lambda|} \prod_{s \in \lambda} \frac{t^{l^{\prime}(s)}-q^{a^{\prime}(s)} u}{1-q^{a(s)+1} t^{l(s)}}
\end{aligned}
$$

(since $\sum_{s \in \lambda} a(s)=\sum_{s \in \lambda} a^{\prime}(s)$ and $\Sigma_{s \in \lambda} l(s)=\sum_{s \in \lambda} l^{\prime}(s)$ ). Hence we obtain

$$
b_{\lambda^{\prime}}(t, q)=\prod_{s \in \lambda} \frac{1-q^{a(s)+1} t^{l(s)}}{1-q^{a(s)} t^{l(s)+1}}
$$

or, on replacing $(\lambda, q, t)$ by $\left(\lambda^{\prime}, t, q\right)$,

$$
\begin{equation*}
b_{\lambda}(q, t)=\prod_{s \in \lambda} \frac{1-q^{a(s)} t^{l(s)+1}}{1-q^{a(s)+1} t^{l(s)}} \tag{6.19}
\end{equation*}
$$

Remark. When $q=t$ we obtain $b_{\lambda}(t, t)=1$, in agreement with $\left\langle s_{\lambda}, s_{\lambda}\right\rangle=1$. When $q=0$, the denominator in the product (6.19) is 1 , and the only $s \in \lambda$ that contribute to the numerator are those for which $a(s)=0$, i.e. the end squares of each now. Thus we obtain

$$
b_{\lambda}(0, t)=\prod_{i>1} \prod_{j=1}^{m_{i}(\lambda)}\left(1-t^{j}\right)
$$

in agreement with Chapter III, (2.12).
Let us now return to the Pieri formula (6.7'), in which the coefficients were computed explicitly in (6.13). We shall now give an alternative
expression for $\psi_{\lambda / \mu}^{\prime}$. For this purpose we define, for each partition $\lambda$ and each square $s$,

$$
b_{\lambda}(s)=b_{\lambda}(s ; q, t)= \begin{cases}\frac{1-q^{a_{\lambda}(s)} t_{\lambda}(s)+1}{1-q^{a_{\lambda}(s)+1} t^{l_{\lambda}(s)}} & \text { if } s \in \lambda  \tag{6.20}\\ 1 & \text { otherwise. }\end{cases}
$$

If $s=(i, j) \in \lambda$, let $s^{\prime}=(j, i) \in \lambda^{\prime}$. Then

$$
\begin{equation*}
a_{\lambda}(s)=l_{\lambda^{\prime}}\left(s^{\prime}\right), \quad l_{\lambda}(s)=a_{\lambda^{\prime}}\left(s^{\prime}\right) \tag{6.21}
\end{equation*}
$$

so that

$$
\begin{equation*}
b_{\lambda}(s ; q, t)=b_{\lambda^{\prime}}\left(s^{\prime} ; t, q\right)^{-1} \tag{6.22}
\end{equation*}
$$

Furthermore, if $\lambda$ and $\mu$ are partitions such that $\lambda \supset \mu$, let $C_{\lambda / \mu}$ (resp. $R_{\lambda / \mu}$ ) denote the union of the columns (resp. rows) that intersect $\lambda-\mu$. Then we have

$$
\begin{equation*}
\psi_{\lambda / \mu}^{\prime}=\prod_{s \in C_{\lambda / \mu}-R_{\lambda / \mu}} \frac{b_{\lambda}(s)}{b_{\mu}(s)} \tag{6.23}
\end{equation*}
$$

Proof. From (6.13) we have

$$
L\left(\psi_{\lambda / \mu}^{\prime}\right)=(t-q) \sum q^{\mu_{i}-\mu_{j}-1}\left(t^{j-i}-t^{j-i-1}\right)
$$

summed over all pairs ( $i, j$ ) such that $i<j, \lambda_{i}=\mu_{i}$ and $\lambda_{j}=\mu_{j}+1$. To each such pair we associate the square $s=\left(i, \lambda_{j}\right) \in C_{\lambda / \mu}-R_{\lambda / \mu}$. The contribution to $L\left(\psi_{\lambda / \mu}^{\prime}\right)$ from the pairs $(i, j)$ such that $\left(i, \lambda_{j}\right)=s$ is easily seen to be equal to

$$
(t-q) q^{a_{\lambda}(s)}\left(t^{l_{\lambda}(s)}-t^{l_{\mu}(s)}\right)
$$

and hence $L\left(\psi_{\lambda / \mu}^{\prime}\right)$ is the sum of these expressions, for all $s \in$ $\mu \cap\left(C_{\lambda / \mu}-R_{\lambda / \mu}\right)$. But this is precisely the image under $L$ of the product (6.23).

By applying duality to (6.7') we shall obtain $Q_{\mu} g_{r}$ as a linear combination of the $Q_{\lambda}$. Altogether there are four 'Pieri formulas':
(6.24) Let $\mu$ be a partition and $r$ a positive integer. Then
(i) $P_{\mu} g_{r}=\Sigma_{\lambda} \varphi_{\lambda / \mu} P_{\lambda}$,
(ii) $Q_{\mu} g_{r}=\Sigma_{\lambda} \psi_{\lambda / \mu} Q_{\lambda}$,
(iii) $Q_{\mu} e_{r}=\Sigma_{\lambda} \varphi_{\lambda / \mu}^{\prime} Q_{\lambda}$,
(iv) $P_{\mu} e_{r}=\Sigma_{\lambda} \psi_{\lambda / \mu}^{\prime} P_{\lambda}$.
(i) and (ii) (resp. (iii) and (iv)) the sum is over partitions $\lambda$ such that $\lambda-\mu$ a horizontal (resp. vertical) $r$-strip, and the coefficients are given by

$$
\varphi_{\lambda / \mu}=\prod_{s \in C_{\lambda / \mu}} \frac{b_{\lambda}(s)}{b_{\mu}(s)},
$$

(ii)
(iii)

$$
\begin{aligned}
& \psi_{\lambda / \mu}=\prod_{s \in R_{\lambda / \mu}-c_{\lambda / \mu}} \frac{b_{\mu}(s)}{b_{\lambda}(s)}, \\
& \varphi_{\lambda / \mu}^{\prime}=\prod_{s \in R_{\lambda / \mu}} \frac{b_{\mu}(s)}{b_{\lambda}(s)},
\end{aligned}
$$

(iv)

$$
\psi_{\lambda / \mu}^{\prime}=\prod_{s \in C_{\lambda / \mu}-R_{\lambda / \mu}} \frac{b_{\lambda}(s)}{b_{\mu}(s)} .
$$

Proof. Equation (iv) is a restatement of (6.7') and (6.23). By applying duality (5.1) to (iv) we obtain (ii), with coefficients

$$
\psi_{\lambda / \mu}(q, t)=\psi_{\lambda^{\prime} / \mu^{\prime}}^{\prime}(t, q)
$$

which by virtue of (6.21) and (6.22) shows that $\psi_{\lambda / \mu}$ is given by (ii) above. Finally the coefficients in (i) and (iii) are

$$
\varphi_{\lambda / \mu}=b_{\lambda} b_{\mu}^{-1} \psi_{\lambda / \mu}, \quad \varphi_{\lambda / \mu}^{\prime}=b_{\lambda}^{-1} b_{\mu} \psi_{\lambda / \mu}^{\prime}
$$

and (6.19) shows that they are given by the formulas above.
Remarks. 1. When $q=0, P_{\lambda}$ (resp. $Q_{\lambda}$ ) is the Hall-Littlewood symmetric function denoted by the same symbol in Chapter III, and (6.24) (i), (ii), and (iv) reduce respectively to the formulas (5.7), (5.7'), and (3.2) of Chapter III.
2. We have

$$
\varphi_{\lambda / \mu}^{\prime}(q, t)=\varphi_{\lambda^{\prime} / \mu^{\prime}}(t, q), \quad \psi_{\lambda / \mu}^{\prime}(q, t)=\psi_{\lambda^{\prime} / \mu^{\prime}}(t, q)
$$

## Examples

1. Let $v_{1}, \ldots, v_{n}$ be distinct vectors in a real vector space $V$ equipped with a positive definite scalar product $\langle u, v\rangle$. Then

$$
\sum\left\langle v_{i}-v_{\sigma(i)}, v_{i}-v_{\sigma(i)}\right\rangle>0
$$

for any permutation $\sigma \neq 1$ in $S_{n}$, and hence

$$
\left.\sum\left\langle v_{i}, v_{i}\right\rangle\right\rangle \sum\left\langle v_{i}, v_{\sigma(i)}\right\rangle .
$$

Deduce that $\operatorname{det}\left(q^{\left\langle v_{i}, v_{j}\right\rangle}\right)$ is not identically zero as a function of the real variable $q$.
2. (a) Let $\lambda, \mu$ be partitions such that $\lambda \supset \mu$ and $\lambda-\mu$ is a horizontal strip. Then

$$
L\left(\varphi_{\lambda / \mu}\right)=\frac{t-q}{1-q} \sum\left(q^{\lambda_{i}-\lambda_{j}}-q^{\lambda_{i}-\mu_{j}}-q^{\mu_{i}-\lambda_{j+1}}+q^{\left.\mu_{i}-\mu_{j+1}\right) t^{j-i}}\right.
$$

summed over $1 \leqslant i \leqslant j \leqslant l(\lambda)$, and hence

$$
\varphi_{\lambda / \mu}=\prod_{1<i<j<l(\lambda)} \frac{f\left(q^{\lambda_{i}-\lambda_{j} t^{j-i}}\right) f\left(q^{\mu_{i}-\mu_{j+1} t^{j-i}}\right)}{f\left(q^{\lambda_{i}-\mu_{j} t^{j-i}}\right) f\left(q^{\mu_{i}-\lambda_{j+1} t^{j-i}}\right)}
$$

where $f(u)=(t u ; q)_{\infty} /(q u ; q)_{\infty}$.
(b) With $\lambda, \mu$ as in (a) we have

$$
L\left(\psi_{\lambda / \mu}\right)=\frac{t-q}{1-q} \sum\left(q^{\mu_{i}-\mu_{j}}-q^{\lambda_{i}-\mu_{j}}-q^{\mu_{i}-\lambda_{j+1}}+q^{\lambda_{i}-\lambda_{j+1}}\right) t^{j-i}
$$

summed over $1 \leqslant i \leqslant j \leqslant l(\mu)$, and hence

$$
\psi_{\lambda / \mu}=\prod_{1<i<j<l(\mu)} \frac{f\left(q^{\mu_{i}-\mu_{t} t^{j-i}}\right) f\left(q^{\lambda_{i}-\lambda_{j+1} t^{j-i}}\right)}{f\left(q^{\lambda_{i}-\mu_{t} t^{j-i}}\right) f\left(q^{\mu_{i}-\lambda_{j+1} t^{j-i}}\right)} .
$$

(c) Let $\lambda, \mu$ be partitions such that $\lambda \supset \mu$ and $\lambda-\mu$ is a vertical strip. Then

$$
L\left(\varphi_{\lambda / \mu}^{\prime}\right)=(t-q) \sum q^{\mu_{1}-\mu_{j}\left(t^{j-i}-t^{j-i-1}\right)}
$$

summed over all pairs $(i, j)$ such that $1 \leqslant i<j<\infty$ and $\lambda_{i}>\mu_{i}, \lambda_{j}=\mu_{j}$. Hence

$$
\varphi_{\lambda / \mu}^{\prime}=\Pi \frac{\left(1-q^{\lambda_{i}-\lambda_{j} t^{j-i-1}}\right)\left(1-q^{\mu_{i}-\mu_{j} t^{j-i+1}}\right)}{\left(1-q^{\lambda_{i}-\lambda_{j} t^{j-i}}\right)\left(1-q^{\mu_{i}-\mu_{j} t^{j-i}}\right)}
$$

the product being taken over the same set of pairs $(i, j)$.
3. Let $\lambda=\left(\lambda_{1}, \lambda_{2}, \ldots\right)$ be a partition, thought of as an infinite sequence, and let

$$
G_{\lambda}(q, t)=(1-t)^{2} \sum_{1<i<j<\infty}\left(1-q^{\left.\lambda_{t}-\lambda_{j}\right) t t^{j-i-1}} .\right.
$$

Then

$$
\sum_{s \in \lambda} q^{a(s)} t^{(s)}=\frac{G_{\lambda}(q, t)}{(1-q)(1-t)}
$$

and hence $G_{\lambda}(q, t)=G_{\lambda^{\prime}}(t, q)$.
4. Let $\lambda$ be a partition of length $\leqslant n$ and let

$$
\begin{aligned}
& v_{\lambda}(q, t)=\prod_{1<i<j<n}\left(q^{\lambda_{l}-\lambda_{f} t j-i} ; q\right)_{k} \\
& v_{\lambda}^{\prime}(q, t)=\prod_{1<i<j<n}\left(q^{\lambda_{t}-\lambda_{j}+1_{t} j-i-1} ; q\right)_{k}
\end{aligned}
$$

when $t=q^{k}$. Then

$$
\varepsilon_{u, t}\left(P_{\lambda}\right)=t^{n(\lambda)} \nu_{\lambda}(q, t) \prod_{i=1}^{n} \frac{\left(u t^{1-i} ; q\right)_{\lambda_{i}}}{(t ; q)_{\lambda_{i}+k(n-i)}}
$$

and

$$
\varepsilon_{u, t}\left(Q_{\lambda}\right)=t^{n(\lambda)} v_{\lambda}^{\prime}(q, t) \prod_{i=1}^{n} \frac{\left(u t^{1-i} ; q\right)_{\lambda_{i}}}{(q ; q)_{\lambda_{i}+k(n-i)}} .
$$

5. Show that

$$
\varepsilon_{t^{n}, t}\left(P_{\lambda}(q, t)\right)=t^{n(\lambda)} \prod_{1<i<j<n} \frac{\left(t^{j-i+1} ; q\right)_{\lambda_{i}-\lambda_{j}}}{\left(t^{j-i} ; q\right)_{\lambda_{i}-\lambda_{j}}}
$$

and

$$
\varepsilon_{q^{n-1}, t}\left(Q_{\lambda}(q, t)\right)=t^{n(\lambda)} \prod_{1<i<j<n} \frac{\left(q t^{j-i} ; q\right)_{\lambda_{i}-\lambda_{j}}}{\left(q t^{j-i-1} ; q\right)_{\lambda_{i}-\lambda_{j}}}
$$

if $\lambda$ is a partition of length $\leqslant n$.

## Notes and references

Proposition (6.6), together with the proof of (6.6) and (6.7) given in the text, is due to T. Koornwinder [K15].
7. The skew functions $P_{\lambda / \mu}, Q_{\lambda / \mu}$

For any three partitions $\lambda, \mu, \nu$ let

$$
\begin{equation*}
f_{\mu \nu}^{\lambda}=f_{\mu \nu}^{\lambda}(q, t)=\left\langle Q_{\lambda}, P_{\mu} P_{\nu}\right\rangle \in F . \tag{7.1}
\end{equation*}
$$

Equivalently, $f_{\mu \nu}^{\lambda}$ is the coefficient of $P_{\lambda}$ in the product $P_{\mu} P_{\nu}$ :

$$
P_{\mu} P_{\nu}=\sum_{\lambda} f_{\mu \nu}^{\lambda} P_{\lambda}
$$

In particular:
(7.2) (i) $f_{\mu \nu}^{\lambda}(t, t)$ is the Littlewood-Richardson coefficient $c_{\mu \nu}^{\lambda}=\left\langle s_{\lambda}, s_{\mu} s_{\nu}\right\rangle$ (Chapter I, §9).
(ii) $f_{\mu \nu}^{\lambda}(0, t)$ is the Hall polynomial $f_{\mu \nu}^{\lambda}(t)$ (Chapter III, §3).
(iii) $f_{\mu \nu}^{\lambda}(q, 1)$ is the coefficient of $x^{\lambda}$ in $m_{\mu} m_{\nu}$.
(iv) $f_{\mu \nu}^{\lambda}(1, t)=1$ if $\lambda=\mu+\nu$, and is zero otherwise.
(v) $f_{\mu \nu}^{\lambda}(q, t)=f_{\mu \nu}^{\lambda}\left(q^{-1}, t^{-1}\right)$.

These assertions are all consequences of (4.14). As to (iv), when $q=1$ we have $P_{\lambda}=e_{\lambda^{\prime}}$, hence $P_{\mu} P_{\nu}=e_{\mu^{\prime}} e_{\nu^{\prime}}=e_{\mu^{\prime} \cup \nu^{\prime}}=e_{(\mu+\nu)^{\prime}}$.

By applying $\omega_{q, t}$ to each side of (7.1') and using duality (5.1) we obtain

$$
Q_{\mu^{\prime}}(t, q) Q_{\nu^{\prime}}(t, q)=\sum_{\lambda} f_{\mu \nu}^{\lambda}(q, t) Q_{\lambda^{\prime}}(t, q)
$$

or equivalently

$$
Q_{\mu}(q, t) Q_{\nu}(q, t)=\sum_{\lambda} f_{\mu^{\prime} \nu^{\prime}}^{\lambda^{\prime}}(t, q) Q_{\lambda}(q, t)
$$

Comparison of this relation with (7.1') yields

$$
\begin{equation*}
f_{\mu \nu}^{\lambda}(q, t)=f_{\mu^{\prime} \nu}^{\lambda^{\prime}}(t, q) b_{\lambda}(q, t) / b_{\mu}(q, t) b_{\nu}(q, t) \tag{7.3}
\end{equation*}
$$

Clearly, $f_{\mu \nu}^{\lambda}$ vanishes unless $|\lambda|=|\mu|+|\nu|$, for reasons of degree. Moreover
(7.4) $f_{\mu \nu}^{\lambda}=0$ unless $\lambda \supset \mu$ and $\lambda \supset \nu$.

Proof. For each partition $\mu$, let $I_{\mu}$ denote the subspace of $\Lambda_{F}$ spanned by the $P_{\lambda}$ such that $\lambda \supset \mu$. The Pieri formula (6.24)(i) shows that $g_{r} I_{\mu} \subset I_{\mu}$ for all $r \geqslant 1$. Since by (2.12) the $g_{r}$ generate $\Lambda_{F}$ as an $F$-algebra, it follows that $I_{\mu}$ is an ideal in $\Lambda_{F}$. Hence $P_{\mu} P_{\nu} \in I_{\mu} \cap I_{\nu}$, which proves (7.4).

Now let $\lambda, \mu$ be partitions and define $Q_{\lambda / \mu} \in \Lambda_{F}$ by

$$
\begin{equation*}
Q_{\lambda / \mu}=\sum_{\nu} f_{\mu \nu}^{\lambda} Q_{\nu} \tag{7.5}
\end{equation*}
$$

so that

$$
\begin{equation*}
\left\langle Q_{\lambda / \mu}, P_{\nu}\right\rangle=\left\langle Q_{\lambda}, P_{\mu} P_{\nu}\right\rangle \tag{7.6}
\end{equation*}
$$

(and hence, by linearity, $\left\langle Q_{\lambda / \mu}, f\right\rangle=\left\langle Q_{\lambda}, P_{\mu} f\right\rangle$ for all $f \in \Lambda_{F}$. From (7.4) it follows that
(7.7) (i) $Q_{\lambda / \mu}=0$ unless $\lambda \supset \mu$;
(ii) If $\lambda \supset \mu, Q_{\lambda / \mu}$ is homogeneous of degree $|\lambda|-|\mu|$. |

Likewise we define $P_{\lambda / \mu}$ by interchanging the $P$ 's and $Q$ 's in (7.6):

$$
\left\langle P_{\lambda / \mu}, Q_{\nu}\right\rangle=\left\langle P_{\lambda}, Q_{\mu} Q_{\nu}\right\rangle
$$

Since $Q_{\lambda}=b_{\lambda} P_{\lambda}$ it follows that

$$
\begin{equation*}
Q_{\lambda / \mu}=b_{\lambda} b_{\mu}^{-1} P_{\lambda / \mu} \tag{7.8}
\end{equation*}
$$

From (7.5) we have

$$
\begin{aligned}
\sum_{\lambda} Q_{\lambda / \mu}(x) P_{\lambda}(y) & =\sum_{\lambda, \nu} f_{\mu \nu}^{\lambda} Q_{\nu}(x) P_{\lambda}(y) \\
& =\sum_{\nu} Q_{\nu}(x) P_{\mu}(y) P_{\nu}(y) \\
& =P_{\mu}(y) \Pi(x, y)
\end{aligned}
$$

by (4.13), where $\Pi(x, y)=\Pi(x, y ; q, t)$. Consequently

$$
\begin{aligned}
\sum_{\lambda, \mu} Q_{\lambda / \mu}(x) P_{\lambda}(y) Q_{\mu}(z) & =\sum_{\mu} P_{\mu}(y) Q_{\mu}(z) \Pi(x, y) \\
& =\Pi(x, y) \Pi(y, z)
\end{aligned}
$$

which by (4.13) again is equal to

$$
\sum_{\lambda} Q_{\lambda}(x, z) P_{\lambda}(y)
$$

It follows from this that

$$
\begin{equation*}
Q_{\lambda}(x, z)=\sum_{\mu} Q_{\lambda / \mu}(x) Q_{\mu}(z) \tag{7.9}
\end{equation*}
$$

where the sum on the right is over partitions $\mu \subset \lambda$, by (7.7). Likewise we have

$$
P_{\lambda}(x, z)=\sum_{\mu} P_{\lambda / \mu}(x) P_{\mu}(z)
$$

All of this parallels exactly the developments of Chapter I, §5 (for the Schur functions) and Chapter III, $\S 5$ (for the Hall-Littlewood functions). Just as in those cases, the formulas (7.9) and (7.9') enable us to express the symmetric functions $P_{\lambda / \mu}$ and $Q_{\lambda / \mu}$ explicitly as sums of monomials. Since $\left(m_{\nu}\right)$ and $\left(g_{\nu}\right)$ are dual bases of $\Lambda_{F}$ (2.11), it follows that

$$
\begin{align*}
Q_{\lambda / \mu} & =\sum_{\nu}\left\langle Q_{\lambda / \mu}, g_{\nu}\right\rangle m_{\nu} \\
& =\sum_{\nu}\left\langle Q_{\lambda}, P_{\mu} g_{\nu}\right\rangle m_{\nu} \tag{7.10}
\end{align*}
$$

Now we can use (6.24) (i) to express $P_{\mu} g_{\nu}$ as a linear combination of the $P_{\lambda}$. Let $T$ be a (column-strict) tableau of shape $\lambda-\mu$ and weight $\nu$,
thought of as a sequence of partitions $\left(\lambda^{(0)}, \ldots, \lambda^{(r)}\right)$ such that $\mu=\lambda^{(0)} C$ $\lambda^{(1)} \subset \ldots \subset \lambda^{(r)}=\lambda$ and such that each $\lambda^{(i)}-\lambda^{(i-1)}$ is a horizontal strip. Let

$$
\begin{equation*}
\varphi_{T}(q, t)=\prod_{i=1}^{r} \varphi_{\lambda^{(i)} / \lambda^{(i-1)}}(q, t), \tag{7.11}
\end{equation*}
$$

then iteration of (6.24) (i) shows that

$$
\begin{equation*}
P_{\mu} g_{\nu}=\sum_{\lambda}\left(\sum_{T} \varphi_{T}\right) P_{\lambda} \tag{7.12}
\end{equation*}
$$

summed over all partitions $\lambda \supset \mu$ such that $|\lambda-\mu|=\nu$, the inner sum being over all tableaux $T$ of shape $\lambda-\mu$ and weight $\nu$.

From (7.10) and (7.12) it follows that

$$
\begin{equation*}
Q_{\lambda / \mu}=\sum_{T} \varphi_{T}(q, t) x^{T} \tag{7.13}
\end{equation*}
$$

summed over all tableaux $T$ of shape $\lambda-\mu$, where (as in Chapter I, (5.13)) $x^{T}$ is the monomial defined by the tableau $T$.

Likewise, if we define

$$
\begin{equation*}
\psi_{T}(q, t)=\prod_{i=1}^{r} \psi_{\lambda^{(i)} \lambda^{(i-1)}}(q, t) \tag{7.11'}
\end{equation*}
$$

for a tableau $T$ as above, we have

$$
\begin{equation*}
P_{\lambda / \mu}=\sum_{T} \psi_{T}(q, t) x^{T} \tag{7.13'}
\end{equation*}
$$

summed over tableaux $T$ of shape $\lambda-\mu$, as before.
Remarks. 1. In the case where there is only one variable $x$, (7.13) gives

$$
\begin{equation*}
Q_{\lambda / \mu}(x ; q, t)=\varphi_{\lambda / \mu}(q, t) x^{|\lambda-\mu|} \tag{7.14}
\end{equation*}
$$

if $\lambda-\mu$ is a horizontal strip, and $Q_{\lambda / \mu}(x ; q, t)=0$ otherwise. Likewise, from (7.13'), we have

$$
\begin{equation*}
P_{\lambda / \mu}(x ; q, t)=\psi_{\lambda / \mu}(q, t) x^{|\lambda-\mu|} \tag{7.14'}
\end{equation*}
$$

if $\lambda-\mu$ is a horizontal strip, and $P_{\lambda / \mu}(x ; q, t)=0$ otherwise.
2. If $x=\left(x_{1}, \ldots, x_{n}\right)$, it follows from (7.13) that
(7.15) $Q_{\lambda / \mu}\left(x_{1}, \ldots, x_{n} ; q, t\right)=0$ unless $0 \leqslant \lambda_{i}^{\prime}-\mu_{i}^{\prime} \leqslant n$ for each $i \geqslant 1$.

For if $\lambda_{i}^{\prime}-\mu_{i}^{\prime}>n$ for some $i$, there is no tableau of shape $\lambda-\mu$ formed with the symbols $1,2, \ldots, n$.
3. Duality (5.1) extends to the skew functions $P_{\lambda / \mu}$ and $Q_{\lambda / \mu}$ : namely

$$
\begin{align*}
& \omega_{q, t} P_{\lambda / \mu}(q, t)=Q_{\lambda^{\prime} / \mu^{\prime}}(t, q),  \tag{7.16}\\
& \omega_{q, t} Q_{\lambda / \mu}(q, t)=P_{\lambda^{\prime} / \mu^{\prime}}(t, q)
\end{align*}
$$

For we have

$$
\omega_{q, t} Q_{\lambda / \mu}(q, t)=\sum_{\nu} f_{\mu \nu}^{\lambda}(q, t) P_{\nu},(t, q)
$$

by (7.5) and (5.1), and by (7.3) this is equal to

$$
\begin{aligned}
\sum_{\nu} f_{\mu^{\prime} \nu^{\prime}}^{\lambda^{\prime}}(t, q) & \frac{b_{\mu^{\prime}}(t, q)}{b_{\lambda^{\prime}}^{\prime}(t, q)} Q_{\nu^{\prime}}(t, q) \\
& =\frac{b_{\mu^{\prime}}(t, q)}{b_{\lambda^{\prime}}(t, q)} Q_{\lambda^{\prime} / \mu^{\prime}}(t, q)=P_{\lambda^{\prime} / \mu^{\prime}}(t, q)
\end{aligned}
$$

This proves (7.16'), and (7.16) follows by replacing $(q, t, \lambda, \mu)$ by $\left(t, q, \lambda^{\prime}, \mu^{\prime}\right)$.
4. The explicit calculation of the structure constants $f_{\mu \nu}^{\lambda}(q, t)$ for arbitrary $\lambda, \mu, \nu$ remains an open problem. (The cases where $\mu$ or $\nu$ is a single row or a single column are covered by (6.24).) For example, it is not known to the author whether the vanishing of the Littlewood-Richardson coefficient $c_{\mu \nu}^{\lambda}$ implies the vanishing of $f_{\mu \nu}^{\lambda}(q, t)$.

## Examples

1. In this and the following examples we shall sketch an alternative approach to the results of $\S 6$. We shall not, therefore, make use of any result in $\S 6$ (with the exception of the elementary fact (6.18) in Example 2).
Let $\mu$ be a partition of length $n$, and let $r$ be a positive integer. Then $Q_{\mu} g_{r}$ is a linear combination of the $Q_{\lambda}$, say

$$
\begin{equation*}
Q_{\mu}(x ; q, t) g_{r}(x ; q, t)=\sum_{\lambda} \psi_{\lambda / \mu}(q, t) Q_{\lambda}(x ; q, t) \tag{1}
\end{equation*}
$$

with certain (as yet undetermined) coefficients $\psi_{\lambda / \mu} \in F$. By duality (5.1) we obtain

$$
\begin{equation*}
P_{\mu^{\prime}}(x ; t, q) e_{r}(x)=\sum_{\lambda} \psi_{\lambda / \mu}(q, t) P_{\lambda^{\prime}}(x ; t, q) . \tag{2}
\end{equation*}
$$

(a) Suppose that $\varphi_{\lambda / \mu} \neq 0$. By considering the leading monomials in (1) and (2), show that $\lambda \leqslant \mu+(r)$ and that $\lambda^{\prime} \leqslant \mu^{\prime}+\left(1^{r}\right)$, and hence that $l(\lambda)=n$ or $n+1$.
(b) Suppose first that $l(\lambda)=n$, and let $x=\left(x_{1}, \ldots, x_{n}\right)$. Use $\S 4$, Example 1 to show that

$$
\begin{equation*}
\psi_{\lambda / \mu}=\psi_{\lambda^{*} / \mu^{\prime}} \cdot b_{\lambda} \cdot b_{\mu} / b_{\lambda} b_{\mu^{*}} \tag{3}
\end{equation*}
$$

where $\lambda^{*}=\left(\lambda_{1}-1, \lambda_{2}-1, \ldots\right)$ and $\mu^{*}=\left(\mu_{1}-1, \mu_{2}-1, \ldots\right)$.
(c) Suppose next that $l(\lambda)=n+1$, and consider the coefficient of $x_{1}^{n+1}$ on either side of (2). Use §4, Example 2 to show that

$$
\begin{equation*}
\psi_{\lambda / \mu}=\psi_{\lambda \cdot / \mu^{*}} . \tag{4}
\end{equation*}
$$

(d) Deduce from (b) and (c) that $\psi_{\lambda / \mu}=0$ unless $\lambda \supset \mu$ and $\lambda-\mu$ is a horizontal strip.
2. In this example we shall indicate an alternative proof of the specialization formula (6.17). Let

$$
\Phi_{\lambda}(u ; q, t)=\varepsilon_{u, t} P_{\lambda}(x ; q, t)
$$

which is a polynomial in $u$ with coefficients in $F$, of degree $\leqslant|\lambda|$.
The developments of $\S 7$ use from $\S 6$ only the result of Example 1(d), as the reader may easily verify. In particular, we have from (7.9') and (7.14')

$$
\begin{equation*}
P_{\lambda}(x ; q, t)=\sum_{\mu} \psi_{\lambda / \mu}(q, t) x^{|\lambda-\mu|} P_{\mu}\left(x^{*} ; q, t\right) \tag{1}
\end{equation*}
$$

where $x^{*}=\left(x_{2}, x_{3}, \ldots\right)$.
(a) By setting $x=\left(1, t, \ldots, t^{n-1}\right.$ ) in (1), where $n$ is any positive integer, deduce that the relation

$$
\begin{equation*}
\Phi_{\lambda}(u ; q, t)=\sum_{\mu} \psi_{\lambda / \mu}(q, t) t^{|\mu|} \Phi_{\mu}\left(t^{-1} u ; q, t\right) \tag{2}
\end{equation*}
$$

is true for $u=t, t^{2}, \ldots$ and hence identically.
(b) Use duality (5.1) together with (6.18) to show that

$$
\begin{equation*}
\Phi_{\lambda}(u ; q, t)=(-q)^{-|\lambda|} b_{\lambda^{\prime}}(t, q) \Phi_{\lambda^{\prime}}\left(u ; t^{-1}, q^{-1}\right) . \tag{3}
\end{equation*}
$$

(c) The polynomial $\Phi_{\lambda}(u ; q, t)$ vanishes for $u=1, t, \ldots, t^{l(\lambda)-1}$ by (4.10). Deduce from (3) that $\Phi_{\lambda}(u ; q, t)$ is divisible in $F[u]$ by $\prod_{j=1}^{\lambda_{1}}\left(q^{j-1} u-1\right)$.
(d) In each partition $\mu$ on the right-hand side of (2) we have $\lambda_{1} \geqslant \mu_{1} \geqslant \lambda_{2} \geqslant \ldots$, since $\lambda-\mu$ is a horizontal strip (Example 1(d)). Hence by (c) above each summand on the right of (2) is divisible by the product $\Pi_{j-1}^{\lambda_{2}}\left(q^{j-1} u-t\right)$, and therefore $\Phi_{\lambda}(u ; q, t)$ is also divisible by this product. By repeating this argument, conclude that $\Phi_{\lambda}$ is divisible in $F[u]$ by

$$
\prod_{i=1}^{l(\lambda)} \prod_{j=1}^{\lambda_{i}}\left(q^{j-1} u-t^{i-1}\right)=\prod_{s \in \lambda}\left(q^{a^{\prime}(s)} u-t^{l^{\prime}(s)}\right)
$$

(e) Since the degree in $u$ of $\Phi_{\lambda}$ is at most $|\lambda|$, it follows from (d) that

$$
\begin{equation*}
\Phi_{\lambda}(u ; q, t)=v_{\lambda}(q, t) \prod_{s \in \lambda}\left(q^{a^{\prime}(s)} u-t^{l^{\prime}(s)}\right) \tag{4}
\end{equation*}
$$

for some $v_{\lambda}(q, t) \in F$. If $l(\lambda)=n$ it follows from $\S 4$, Example 1 that

$$
\begin{equation*}
\Phi_{\lambda}\left(t^{n} ; q, t\right)=t^{n(n-1) / 2} \Phi_{\lambda^{*}}\left(t^{n} ; q, t\right) \tag{5}
\end{equation*}
$$

where $\lambda^{*}=\left(\lambda_{1}-1, \ldots, \lambda_{n}-1\right)$. Deduce from (4) and (5) that

$$
v_{\lambda}(q, t)=v_{\lambda} \cdot(q, t) \prod_{i=1}^{n}\left(q^{\lambda_{i}-1} t^{n-i+1}-1\right)^{-1}
$$

and hence that

$$
\begin{equation*}
v_{\lambda}(q, t)=\prod_{s \in \lambda}\left(q^{a(s)} t^{l(s)+1}-1\right)^{-1} . \tag{6}
\end{equation*}
$$

3. From (3), (4), and (6) of Example 2 we can now obtain the formula (6.19) for $b_{\lambda}(q, t)$. Then, knowing $b_{\lambda}$, we can derive the formula (6.24)(ii) for $\psi_{\lambda / \mu}$ by induction from the relations (3) and (4) of Example 1.
4. For each partition $\lambda$, let

$$
b_{\lambda}^{\mathrm{el}}=\prod_{\substack{s \in \lambda \\ l(s) \text { even }}} b_{\lambda}(s), \quad b_{\lambda}^{\text {oa }}=\prod_{\substack{s \in \lambda \\ a(s) \text { odd }}} b_{\lambda}(s)
$$

(the superscripts el and oa stand for 'even legs' and 'odd arms' respectively). Then we have
(i) $\sum_{\nu} b_{\nu}^{\mathrm{el}} P_{\nu}=\prod_{i<j} \frac{\left(t x_{i} x_{j} ; q\right)_{\infty}}{\left(x_{i} x_{j} ; q\right)_{\infty}}$,
(ii) $\sum_{\lambda} b_{\lambda}^{\mathrm{el}} P_{\lambda}=\prod_{i} \frac{\left(t x_{i} ; q\right)_{\infty}}{\left(x_{i} ; q\right)_{\infty}} \prod_{i<j} \frac{\left(t x_{i} x_{j} ; q\right)_{\infty}}{\left(x_{i} x_{j} ; q\right)_{\infty}}$,
(iii) $\sum_{\mu} b_{\mu}^{\mathrm{oa}} P_{\mu}=\prod_{i} \frac{\left(q x_{i}^{2} ; q^{2}\right)_{\infty}}{\left(x_{i}^{2} ; q^{2}\right)_{\infty}} \prod_{i<j} \frac{\left(t x_{i} x_{j} ; q\right)_{\infty}}{\left(x_{i} x_{j} ; q\right)_{\infty}}$,
(iv) $\sum_{\lambda} b_{\lambda}^{\mathrm{oa}} P_{\lambda}=\prod_{i} \frac{\left(q t x_{i}^{2} ; q^{2}\right)_{\infty}}{\left(1-x_{i}\right)\left(q^{2} x_{i}^{2} ; q^{2}\right)_{\infty}} \prod_{i<j} \frac{\left(x_{i} x_{j} ; q\right)_{\infty}}{\left(x_{i} x_{j} ; q\right)_{\infty}}$.

In these sums, $\lambda$ runs through all partitions, $\mu$ through all even partitions (i.e. with all parts even), and $\nu$ through all partitions such that $\nu^{\prime}$ is even (so that all the columns of $\nu$ are of even length).

We shall prove (i) first, and then deduce the other three identities from (i). It is enough to prove (i) for a finite set of variables $x_{1}, \ldots, x_{n}$. By induction on $n$, it is enough to show that if $\Phi(x)$ denotes the left-hand side of (i), then

$$
\begin{equation*}
\Phi\left(x_{1}, \ldots, x_{n}, y\right)=\Phi\left(x_{1}, \ldots, x_{n}\right) \prod_{i=1}^{n} \frac{\left(x_{i} y ; q\right)_{\infty}}{\left(x_{i} y ; q\right)_{\infty}} \tag{1}
\end{equation*}
$$

Now the left-hand side of (1) is by (7.9') and (7.14') equal to

$$
\begin{equation*}
\sum_{\lambda, \mu} b_{\lambda}^{\mathrm{e}} \psi_{\lambda / \mu} P_{\mu}\left(x_{1}, \ldots, x_{n}\right) y^{|\lambda-\mu|} \tag{2}
\end{equation*}
$$

summed over pairs of partitions $\lambda, \mu$ such that $\lambda^{\prime}$ is even, $\lambda \supset \mu$ and $\lambda-\mu$ is a horizontal strip. Again, the right-hand side of (1) is by (2.8) and (6.24) equal to

$$
\begin{align*}
& \sum_{\nu, r} b_{\nu}^{\mathrm{el}} P_{\nu}\left(x_{1}, \ldots, x_{n}\right) g_{r}\left(x_{1}, \ldots, x_{n}\right) y^{r} \\
& \quad=\sum_{\mu, \nu} b_{\nu}^{\mathrm{e}} \varphi_{\mu / \nu} P_{\mu}\left(x_{1}, \ldots, x_{n}\right) y^{|\mu-\nu|} \tag{3}
\end{align*}
$$

summed over pairs of partitions $\mu, \nu$ such that $\nu^{\prime}$ is even, $\mu \supset \nu$ and $\mu-\nu$ is a horizontal strip.
For a given partition $\mu$ of length $\leqslant n$ both the partitions $\lambda$ and $\nu$ are uniquely determined: we have $\lambda_{i}^{\prime}=\nu_{i}^{\prime}=\mu_{i}^{\prime}$ if $\mu_{i}^{\prime}$ is even, and $\lambda_{i}^{\prime}=\mu_{i}^{\prime}+1, \nu_{i}^{\prime}=\mu_{i}^{\prime}-1$ if $\mu_{i}^{\prime}$ is odd. Hence $|\lambda-\mu|=|\mu-\nu|$, and a column contains a square belonging to $\lambda-\mu$ if and only if it contains a square belonging to $\mu-\nu$ : the condition in either case is that it should be a column of odd length in $\mu$.

To prove that (2) and (3) are equal therefore reduces to showing that

$$
\begin{equation*}
b_{\lambda}^{\mathrm{e}} \psi_{\lambda / \mu}=b_{\nu}^{\mathrm{e}} \varphi_{\mu / \nu} \tag{4}
\end{equation*}
$$

For this purpose it is convenient to introduce the following notation: if $\lambda$ is any partition and $S$ is any set of squares, then $b_{\lambda}(S)$ denotes the product of the $b_{\lambda}(s)$ for $s \in S$. With this notation, if $C$ (resp. $\bar{C}$ ) denotes the union of the columns of odd (resp. even) length in $\mu$, we have $\varphi_{\mu / \nu}=b_{\mu}(C) / b_{\nu}(C)$ and $\psi_{\lambda / \mu}=b_{\mu}(\bar{C}) / b_{\lambda}(\bar{C})$ by (6.24). Let $R_{1}$ (resp. $R_{2}$ ) denote the union of the odd (resp. even) numbered rows, and let $C_{i}=C \cap R_{i}, \bar{C}_{i}=\bar{C} \cap R_{i}$. Then $b_{\lambda}^{\text {el }}=b_{\lambda}\left(R_{2}\right)$ and $b_{\nu}^{\text {el }}=b_{\nu}\left(R_{2}\right)$, since all the columns of $\lambda$ and $\nu$ have even length. We may therefore rewrite (4) as

$$
b_{\lambda}\left(R_{2}\right) b_{\mu}(\bar{C}) b_{\nu}(C)=b_{\lambda}(\bar{C}) b_{\mu}(C) b_{\nu}\left(R_{2}\right)
$$

or, since $C=C_{1} \cup C_{2}, \bar{C}=\bar{C}_{1} \cup \bar{C}_{2}, R_{2}=C_{2} \cup \bar{C}_{2}$ (the unions in each case being disjoint) as

$$
\begin{equation*}
b_{\lambda}\left(C_{2}\right) b_{\mu}\left(\bar{C}_{1}\right) b_{\mu}\left(\bar{C}_{2}\right) b_{\nu}\left(C_{1}\right)=b_{\lambda}\left(\bar{C}_{1}\right) b_{\mu}\left(C_{1}\right) b_{\mu}\left(C_{2}\right) b_{\nu}\left(\bar{C}_{2}\right) \tag{5}
\end{equation*}
$$

For each square $s \in \bar{C} \cap \lambda$ we have $l_{\lambda}(s)=l_{\mu}(s)=l_{\nu}(s)$; for each square $s \in$ $R_{1} \cap \lambda$ we have $a_{\lambda}(s)=a_{\mu}(s)$, and for each $s \in R_{2} \cap \mu$ we have $a_{\mu}(s)=a_{\nu}(s)$. Hence we have

$$
\begin{equation*}
b_{\lambda}\left(\bar{C}_{1}\right)=b_{\dot{\mu}}\left(\bar{C}_{1}\right), \quad b_{\mu}\left(\bar{C}_{2}\right)=b_{\nu}\left(\bar{C}_{2}\right) . \tag{6}
\end{equation*}
$$

Furthermore, for each square $s \in C_{2} \cap \lambda$ let $t \in C_{1}$ be the square immediately above $s$. Then we have $a_{\lambda}(s)=a_{\mu}(t)$ and $l_{\lambda}(s)=l_{\mu}(t)$; also $a_{\mu}(s)=a_{\nu}(t)$ and $l_{\mu}(s)=l_{\nu}(t)$, and therefore

$$
\begin{equation*}
b_{\lambda}\left(C_{2}\right)=b_{\mu}\left(C_{1}\right), \quad b_{\mu}\left(C_{2}\right)=b_{\nu}\left(C_{1}\right) . \tag{7}
\end{equation*}
$$

These relations (6) and (7) together imply (5), and complete the proof of (i).
Next consider (ii). By (2.8) and (i), the right-hand side of (ii) is equal to

$$
\begin{equation*}
\sum_{\nu, r} b_{\nu}^{\mathrm{el}} P_{\nu} g_{r}=\sum_{\mu, \nu} b_{\nu}^{\mathrm{e}} \varphi_{\mu / \nu} P_{\mu} \tag{8}
\end{equation*}
$$

summed over partitions $\mu \supset \nu$ such that $\nu^{\prime}$ is even and $\mu-\nu$ is a horizontal strip. From the proof of (i) above we have

$$
\begin{aligned}
b_{\nu}^{\mathrm{e}} \varphi_{\mu / \nu} & =b_{\nu}\left(R_{2}\right) b_{\mu}(C) / b_{\nu}(C) \\
& =b_{\nu}\left(\bar{C}_{2}\right) b_{\mu}\left(C_{1}\right) b_{\mu}\left(C_{2}\right) / b_{\nu}\left(C_{1}\right) \\
& =b_{\mu}\left(C_{1}\right) b_{\mu}\left(\bar{C}_{2}\right)=b_{\mu}^{\mathrm{el}}
\end{aligned}
$$

by (6) and (7). Hence (8) is equal to $\Sigma_{\mu} b_{\mu}^{\text {el }} P_{\mu}$ summed over all partitions $\mu$, which proves (ii).
Finally, (iii) and (iv) are obtained from (i) and (ii) respectively by duality, i.e. by operating on both sides with $\omega_{q,}$ and applying (5.1).
When $q=0$, so that $P_{\lambda}$ becomes the Hall-Littlewood symmetric function, the identities (i)-(iv) above reduce to Examples 3, 4, 2, 1 of Chapter III, §5, respectively.
5. For partitions $\lambda, \mu, \pi$ such that $\lambda \supset \mu$ and $|\lambda|=|\mu|+|\pi|$, let

$$
A_{\lambda / \mu, \pi}=\sum_{T} \varphi_{T}
$$

summed over all (column-strict) tableaux $T$ of shape $\lambda-\mu$ and weight $\pi$, so that by (7.13) we have

$$
\begin{equation*}
Q_{\lambda / \mu}=\sum_{\pi} A_{\lambda / \mu, \pi} m_{\pi} \tag{1}
\end{equation*}
$$

and hence

$$
\begin{equation*}
A_{\lambda / \mu, \pi}=\left\langle Q_{\lambda / \mu}, g_{\pi}\right\rangle \tag{2}
\end{equation*}
$$

from which it follows that

$$
\begin{equation*}
g_{\pi}=\sum_{\nu} A_{\nu \pi} P_{\nu} \tag{3}
\end{equation*}
$$

From (2) and (3) we have

$$
\begin{aligned}
A_{\lambda / \mu, \pi} & =\sum_{\nu} A_{\nu \pi}\left\langle Q_{\lambda / \mu}, P_{\nu}\right\rangle \\
& =\sum_{\nu} A_{\nu \pi}\left\langle Q_{\lambda}, P_{\mu} P_{\nu}\right\rangle \\
& =\sum_{\nu} A_{\nu \pi} f_{\mu \nu}^{\lambda} .
\end{aligned}
$$

The matrix ( $A_{\nu \pi}$ ) is strictly lower triangular and invertible; if its inverse is ( $B_{\nu \pi}$ ) we have

$$
f_{\mu \nu}^{\lambda}=\sum_{\pi} A_{\lambda / \mu, \pi} B_{\pi \nu}
$$

and hence the structure constants $f_{\mu \nu}^{\lambda}$ are in principle computable in terms of the $\varphi_{T}$, which are given explicitly by (7.11) and (6.24).
6. Let $\lambda, \mu$ be partitions. Then
(a) $\sum_{\rho} P_{\rho / \lambda}(x ; q, t) Q_{\rho / \mu}(y ; q, t)=\Pi(x, y ; q, t) \sum_{\sigma} P_{\mu / \sigma}(x ; q, t) Q_{\lambda / \sigma}(y ; q, t)$.

The proof is the same as that of Chapter I, §5, Example 26.
(b) By applying $\omega_{q,}$ to the symmetric functions of the $x$ variables in (a) we obtain

$$
\sum_{\rho} Q_{\rho^{\prime} / \lambda^{\prime}}(x ; t, q) Q_{\rho / \mu}(y ; q, t)=\Pi_{0}(x, y) \sum_{\sigma} Q_{\mu^{\prime} / \sigma^{\prime}}(x ; t, q) Q_{\lambda / \sigma}(y ; q, t),
$$

where $\Pi_{0}(x, y)=\Pi_{i, j}\left(1+x_{i} y_{j}\right)$.
(c) Likewise

$$
\sum_{\rho} P_{\rho / \lambda}(x ; q, t) P_{\rho^{\prime} / \mu^{\prime}}(y ; t, q)=\Pi_{0}(x, y) \sum_{\sigma} P_{\mu / \sigma}(x ; q, t) P_{\lambda^{\prime} / \sigma^{\prime}}(y ; t, q) .
$$

## Notes and references

Examples 1-3. The results of these Examples, in the context of Jack's symmetric functions, are due to R. Stanley [S25].

Example 4(i). This identity, again in the context of Jack's symmetric functions, is due to K . Kadell.

## 8. Integral forms

For each partition $\lambda$ we define

$$
\begin{align*}
& c_{\lambda}(q, t)=\prod_{s \in \lambda}\left(1-q^{a(s)} t^{l(s)+1}\right),  \tag{8.1}\\
& c_{\lambda}^{\prime}(q, t)=\prod_{s \in \lambda}\left(1-q^{a(s)+1} t^{(s)}\right),
\end{align*}
$$

so that

$$
\begin{equation*}
c_{\lambda}^{\prime}(q, t)=c_{\lambda^{\prime}}(t, q) \tag{8.2}
\end{equation*}
$$

and by (6.19)

$$
b_{\lambda}(q, t)=c_{\lambda}(q, t) / c_{\lambda}^{\prime}(q, t)
$$

Now let

$$
\begin{equation*}
J_{\lambda}=J_{\lambda}(x ; q, t)=c_{\lambda}(q, t) P_{\lambda}(x ; q, t)=c_{\lambda}^{\prime}(q, t) Q_{\lambda}(x ; q, t) . \tag{8.3}
\end{equation*}
$$

The symmetric functions $J_{\lambda}$ are in some sense 'integral forms' of the $P_{\lambda}$ (or $Q_{\lambda}$ ). It seems likely that when they are expressed as linear combinations of the monomial symmetric functions, the coefficients are polynomials, not just rational functions, in $q$ and $t$. We shall make a more precise conjecture later in this section.
(8.4) Remarks.
(i) When $q=t$ we have

$$
c_{\lambda}(t, t)=c_{\lambda}^{\prime}(t, t)=\prod_{s \in \lambda}\left(1-t^{h(s)}\right)
$$

the hook polynomial of $\lambda$, denoted by $H_{\lambda}(t)$ in Chapter I, §3, Example 2. Hence $J_{\lambda}=H_{\lambda}(t) s_{\lambda}$ when $q=t$.
(ii) When $q=0$ we have $c_{\lambda}^{\prime}(0, t)=1$ and $c_{\lambda}(0, t)=b_{\lambda}(t)$, so that $J_{\lambda}(x ; 0, t)$ is the Hall-Littlewood function $Q_{\lambda}(x ; t)$.
(iii) When $q=1$,

$$
c_{\lambda}(1, t)=\prod_{s \in \lambda}\left(1-t^{(s)+1}\right)=(t ; t)_{\lambda^{\prime}}
$$

in the notation of §2, Example 1, and hence by (4.14) (vi)

$$
J_{\lambda}(x ; 1, t)=(t ; t)_{\lambda^{\prime}} \cdot e_{\lambda^{\prime}}(x)
$$

(iv) When $t=0, J_{\lambda}(x ; q, 0)=P_{\lambda}(x ; q, 0)$.
(v) When $t=1$ we have $c_{\lambda}(q, 1)=0$ if $\lambda \neq 0$, so that $J_{\lambda}=0$.
(vi) Let $q=t^{\alpha}$ and let $t \rightarrow 1$. The symmetric functions

$$
J_{\lambda}^{(\alpha)}(x)=\lim _{t \rightarrow 1} \frac{J_{\lambda}\left(x ; t^{\alpha}, t\right)}{(1-t)^{|\lambda|}}
$$

are the integral forms of Jack's symmetric functions (see $\S 10$ below).
We have

$$
\begin{aligned}
c_{\lambda}\left(q^{-1}, t^{-1}\right) & =\prod_{s \in \lambda}\left(1-q^{-a(s)} t^{-l(s)-1}\right) \\
& =(-1)^{|\lambda|} q^{-n\left(\lambda^{\prime}\right)} t^{-n(\lambda)-|\lambda|} c_{\lambda}(q, t)
\end{aligned}
$$

since $\Sigma_{s \in \lambda} a(s)=n\left(\lambda^{\prime}\right)$ and $\Sigma_{s \in \lambda} l(s)=n(\lambda)$, and hence

$$
\begin{equation*}
J_{\lambda}\left(x ; q^{-1}, t^{-1}\right)=(-1)^{|\lambda|} q^{-n\left(\lambda^{\prime}\right)} t^{-n(\lambda)-|\lambda|} J_{\lambda}(x ; q, t) \tag{8.5}
\end{equation*}
$$

by virtue of (4.14) (iv).
Next, duality (5.1) now takes the form

$$
\begin{equation*}
\omega_{q, t} J_{\lambda}(q, t)=J_{\lambda^{\prime}}(t, q) \tag{8.6}
\end{equation*}
$$

and we have

$$
\begin{equation*}
\left\langle J_{\lambda}, J_{\lambda}\right\rangle_{q, t}=c_{\lambda}(q, t) c_{\lambda}^{\prime}(q, t)=\left\langle J_{\lambda^{\prime}}, J_{\lambda^{\prime}}\right\rangle_{t, q} . \tag{8.7}
\end{equation*}
$$

The specialization formula (6.17) gives

$$
\varepsilon_{u, t} J_{\lambda}(x ; q, t)=\prod_{s \in \lambda}\left(t^{\prime}(s)-q^{a^{\prime}(s)} u\right)
$$

$$
\begin{equation*}
=\prod_{(i, j) \in \lambda}\left(t^{i-1}-q^{j-1} u\right) \tag{8.8}
\end{equation*}
$$

As in Chapter III, (4.5) let $S_{\lambda}(x ; t)$ denote the Schur functions associated with the product $\Pi\left(1-x_{i}\right) /\left(1-x_{i}\right)$, so that (Chapter $I, \S 7$ )

$$
\begin{equation*}
S_{\lambda}(x ; t)=\sum_{\rho} z_{\rho}^{-1} \chi_{\rho}^{\lambda} p_{\rho}(x ; t) \tag{8.9}
\end{equation*}
$$

where

$$
\begin{equation*}
p_{\rho}(x ; t)=p_{\rho}(x) \prod_{i=1}^{l(\rho)}\left(1-t^{\rho_{l}}\right) . \tag{8.10}
\end{equation*}
$$

The $S_{\lambda}(x ; t)$ form an $F$-basis of $\Lambda_{F}$, and hence we may express the $J_{\mu}(x ; q, t)$ in terms of them, say

$$
\begin{equation*}
J_{\mu}(x ; q, t)=\sum_{\lambda} K_{\lambda \mu}(q, t) S_{\lambda}(x ; t) \tag{8.11}
\end{equation*}
$$

When $q=0$ we have $J_{\mu}(x ; q, t)=Q_{\mu}(x ; t)(8.4$ (ii)), hence

$$
\begin{equation*}
K_{\lambda \mu}(0, t)=K_{\lambda \mu}(t) \tag{8.12}
\end{equation*}
$$

where the $K_{\lambda \mu}(t)$ are the polynomials defined in Chapter III, §6. In particular,

$$
\begin{equation*}
K_{\lambda \mu}(0,0)=\delta_{\lambda \mu}, \quad K_{\lambda \mu}(0,1)=K_{\lambda \mu}, \tag{8.13}
\end{equation*}
$$

where the $K_{\lambda \mu}$ are the Kostka numbers defined in Chapter I, §6, so that $K_{\lambda \mu}$ is the number of (column-strict) tableaux of shape $\lambda$ and weight $\mu$.

From (8.9) and (8.10) it follows that $S_{\lambda}\left(x ; t^{-1}\right)=(-t)^{-|\lambda|} S_{\lambda^{\prime}}(x ; t)$ and hence by (8.5) that

$$
\begin{equation*}
K_{\lambda \mu}(q, t)=q^{n\left(\mu^{\prime}\right)} t^{n(\mu)} K_{\lambda^{\prime} \mu}\left(q^{-1}, t^{-1}\right) \tag{8.14}
\end{equation*}
$$

Again, it follows from (8.9) that

$$
\begin{aligned}
\omega_{q, t} S_{\lambda}(x ; t) & =\sum_{\rho} z_{\rho}^{-1} \chi_{\rho}^{\lambda} \varepsilon_{\rho} p_{\rho}(x ; q) \\
& =S_{\lambda^{\prime}}(x ; q)
\end{aligned}
$$

and hence by (8.6) that

$$
\begin{equation*}
K_{\lambda \mu}(q, t)=K_{\lambda^{\prime} \mu^{\prime}}(t, q) \tag{8.15}
\end{equation*}
$$

For each integer $n \geqslant 0$, let $K_{n}(q, t)$ denote the matrix ( $K_{\lambda \mu}(q, t)$ ) where $\lambda$ and $\mu$ run through the partitions of $n$. Unlike the matrices $K_{n}(t)=$ $K_{n}(0, t)$ of Chapter III, the matrices $K_{n}(q, t)$ (for $n>1$ ) are not upper triangular; indeed, it follows from (8.15) that $K_{\lambda \mu}(q, 0)=K_{\lambda^{\prime} \mu^{\prime}}(q)$, so that $K_{n}(q, 0)$ is lower triangular.

Another special case in

$$
\begin{equation*}
K_{\lambda \mu}(1,1)=\chi_{\left(1^{n}\right)}^{\lambda}=n!/ h(\lambda) \tag{8.16}
\end{equation*}
$$

(where $\lambda, \mu$ are partitions of $n$ ).
Proof. From (8.9) and (8.11) we have

$$
J_{\mu}(x ; q, t)=\sum_{\lambda} K_{\lambda \mu}(q, t) \sum_{\rho} z_{\rho}^{-1} \chi_{\rho}^{\lambda} p_{\rho}(x ; t)
$$

On setting $q=t$ we obtain from (8.4)(i)

$$
H_{\mu}(t) s_{\mu}(x)=\sum_{\lambda, \rho} z_{\rho}^{-1} \chi_{\rho}^{\lambda} K_{\lambda \mu}(t, t) p_{\rho}(x ; t)
$$

But also (Chapter I, §7)

$$
s_{\mu}(x)=\sum_{\rho} z_{\rho}^{-1} \chi_{\rho}^{\mu} p_{\rho}(x)
$$

and therefore

$$
\sum_{\lambda} K_{\lambda \mu}(t, t) \chi_{\rho}^{\lambda}=\chi_{\rho}^{\mu} H_{\mu}(t) / \Pi\left(1-t^{\rho_{i}}\right)
$$

so that we obtain

$$
\begin{equation*}
K_{\lambda \mu}(t, t)=\sum_{\rho} z_{\rho}^{-1} \chi_{\rho}^{\lambda} \chi_{\rho}^{\mu} H_{\mu}(t) / \Pi\left(1-t^{\rho_{1}}\right) \tag{8.17}
\end{equation*}
$$

by orthogonality of the characters of the symmetric group $S_{n}$. Now let $t \rightarrow 1$, and we obtain

$$
K_{\lambda \mu}(1,1)=\chi_{\left(1^{n}\right)}^{\lambda}
$$

since the only term that survives on the right-hand side of (8.17) is that corresponding to the partition $\rho=\left(1^{n}\right)$.

The matrices $K_{n}(q, t)$ have been computed for $n \leqslant 8$. The results suggest the conjecture
(8.18?) $K_{\lambda \mu}(q, t)$ is a polynomial in $q$ and $t$ with positive integral coefficients.

Some further partial evidence in favour of this conjecture is contained in the Examples at the end of this section. In particular, we know from the theorem of Lascoux and Schützenberger (Chapter III, (6.5)) that $K_{\lambda \mu}(0, t)$ is a polynomial in $t$ with positive integral coefficients. By (8.15) the same is true of $K_{\lambda \mu}(q, 0)$.

Since $S_{\lambda}(x ; t)$ is a linear combination of the monomial symmetric functions $m_{\lambda}(x)$ with coefficients in $\mathbf{Z}[t]$ (see the table of transition matrices in Chapter III, §6), the conjecture (8.18?) would imply that the $J_{\lambda}$ are linear combinations of the $m_{\mu}$ with coefficients in $\mathbf{Z}[q, t]$.

On the assumption that (8.18?) is true, the number of monomials $q^{a} t^{b}$ in $K_{\lambda \mu}(q, t)$ would by (8.16) be equal to the number of standard tableaux of shape $\lambda$. One may therefore ask whether there is a combinatorial rule that attaches to each pair $(T, \mu)$, where $T$ is a standard tableau containing $n$ symbols and $\mu$ is a partition of $n$, a monomial $q^{a(T, \mu)} t^{b(T, \mu)}$, so that $K_{\lambda \mu}(q, t)$ is the sum of these monomials as $T$ runs through the standard tableaux of shape $\lambda$.

Finally, we shall introduce generalizations of the polynomials $X_{\rho}^{\lambda}(t)$ of Chapter III, §7. For each pair of partitions $\lambda, \rho$ we define $X_{\rho}^{\lambda}(q, t) \in F$ by

$$
\begin{equation*}
J_{\lambda}(x ; q, t)=\sum_{\rho} z_{\rho}^{-1} X_{\rho}^{\lambda}(q, t) p_{\rho}(x ; t) \tag{8.19}
\end{equation*}
$$

(so that $X_{\rho}^{\lambda}(q, t)=0$ unless $|\lambda|=|\rho|$ ). By (8.4) (ii) and Chapter III, (7.5) we have

$$
X_{\rho}^{\lambda}(0, t)=X_{\rho}^{\lambda}(t)
$$

From (8.9) and (8.11) it follows that

$$
J_{\lambda}(x ; q, t)=\sum_{\mu} K_{\mu \lambda}(q, t) \sum_{\rho} z_{\rho}^{-1} \chi_{\rho}^{\mu} p_{\rho}(x ; t)
$$

and hence that

$$
\begin{equation*}
X_{\rho}^{\lambda}(q, t)=\sum_{\mu} \chi_{\rho}^{\mu} K_{\mu \lambda}(q, t) \tag{8.20}
\end{equation*}
$$

By orthogonality of the characters of the symmetric group, this relation is equivalent to

$$
K_{\mu \lambda}(q, t)=\sum_{\rho} z_{\rho}^{-1} \chi_{\rho}^{\mu} X_{\rho}^{\lambda}(q, t)
$$

The conjecture (8.18?), together with (8.20), would imply that $X_{\rho}^{\lambda}(q, t) \in$ $\mathbf{Z}[q, t]$, since the $\chi_{\rho}^{\mu}$ are integers.

From (8.14) and (8.15) we deduce that

$$
\begin{align*}
X_{\rho}^{\lambda}\left(q^{-1}, t^{-1}\right) & =\varepsilon_{\rho} q^{-n\left(\lambda^{\prime}\right)} t^{-n(\lambda)} X_{\rho}^{\lambda}(q, t),  \tag{8.21}\\
X_{\rho}^{\lambda}(t, q) & =\varepsilon_{\rho} X_{\rho}^{\lambda^{\prime}}(q, t) .
\end{align*}
$$

The $X_{\rho}^{\lambda}(q, t)$ satisfy orthogonality relations that generalize those of Chapter III, §7. Namely, from (2.6), (4.13), and the definition (8.3) of $J_{\lambda}$ we have

$$
\sum_{\rho} z_{\rho}(q, t)^{-1} p_{\rho}(x) p_{\rho}(y)=\sum_{\lambda} c_{\lambda}(q, t)^{-1} c_{\lambda}^{\prime}(q, t)^{-1} J_{\lambda}(x ; q, t) J_{\lambda}(y ; q, t) .
$$

If we now substitute (8.19) in the right-hand side of this relation, and compare the coefficients of $p_{\rho}(x) p_{\sigma}(y)$ on either side, we shall obtain

$$
\begin{equation*}
\sum_{|\lambda|=n} c_{\lambda}(q, t)^{-1} c_{\lambda^{\prime}}(q, t)^{-1} X_{\rho}^{\lambda}(q, t) X_{\sigma}^{\lambda}(q, t)=\delta_{\rho \sigma} \zeta_{\rho}(q, t) \tag{8.23}
\end{equation*}
$$

where

$$
\begin{equation*}
\zeta_{\rho}(q, t)=z_{\rho} \prod_{i=1}^{l(\rho)}\left(1-q^{\rho_{i}}\right)^{-1}\left(1-t^{\rho_{i}}\right)^{-1} \tag{8.24}
\end{equation*}
$$

An equivalent statement is

$$
\begin{equation*}
\sum_{|\rho|=n} \zeta_{\rho}(q, t)^{-1} X_{\rho}^{\lambda}(q, t) X_{\rho}^{\mu}(q, t)=\delta_{\lambda \mu} c_{\lambda}(q, t) c_{\lambda}^{\prime}(q, t) \tag{8.25}
\end{equation*}
$$

Finally, it follows from (8.16) and (8.20) that

$$
X_{\rho}^{\lambda}(1,1)=\sum_{\mu} \chi_{\rho}^{\mu} \chi_{\left(1^{n}\right)}^{\mu}
$$

and therefore by orthogonality of the $\chi_{\rho}^{\mu}$ (Chapter I, §7)

$$
X_{\rho}^{\lambda}(1,1)= \begin{cases}n! & \text { if } \rho=\left(1^{n}\right)  \tag{8.26}\\ 0 & \text { otherwise }\end{cases}
$$

Remark (8.27). Let $V=\mathbf{Z}\left[S_{n}\right]$ be the regular representation of $S_{n}$, and for each partition $\lambda$ of $n$ let $M_{\lambda}$ be an irreducible $S_{n}$-module with character $\chi^{\lambda}$, so that in particular $M_{\left(1^{n}\right)}$ is the one-dimensional module affording the sign character $\varepsilon$. Then the conjecture (8.18?), together with (8.26), would imply that for each partition $\mu$ of $n$ there is a bigrading of the regular representation

$$
V=\underset{h, k}{\oplus} V_{\mu}^{h, k}
$$

where $0 \leqslant h \leqslant n(\mu)$ and $0 \leqslant k \leqslant n\left(\mu^{\prime}\right)$, such that for each $\lambda$ the multiplicity of $M_{\lambda}$ in $V_{\mu}^{h, k}$ is equal to the coefficient of $t^{h} q^{k}$ in $K_{\lambda \mu}(q, t)$. By (8.14) and (8.15) these bigradings would satisfy

$$
V_{\mu}^{h, k} \otimes M_{\left(1^{n}\right)} \cong V_{\mu}^{h^{\prime}, k} \cong V_{\mu^{\prime}}^{k, h},
$$

where $h^{\prime}=n(\mu)-h$ and $k^{\prime}=n\left(\mu^{\prime}\right)-k$.
Recently Garsia and Haiman [G4] have put forward a conjecture in this direction. Let $A=\mathbf{Z}\left[x_{1}, \ldots, x_{n}, y_{1}, \ldots, y_{n}\right]$, where the $x$ 's and $y$ 's are $2 n$ independent indeterminates. The polynomial ring $A$ is bigraded: $A=$ $\oplus_{h, k>0} A^{h, k}$, where $A^{h, k}$ consists of the polynomials $f \in A$ that are homogeneous of degree $h$ (resp. $k$ ) in the $x$ 's (resp. $y$ 's). The symmetric group $S_{n}$ acts diagonally on $A$ :

$$
w f\left(x_{1}, \ldots, x_{n}, y_{1}, \ldots, y_{n}\right)=f\left(x_{w(1)}, \ldots, x_{w(n)}, y_{w(1)}, \ldots, y_{w(n)}\right)
$$

for $w \in S_{n}$ and $f \in A$, and this action respects the bigrading.
Now let $\mu$ be a partition of $n$ and let $\left(p_{1}, q_{1}\right), \ldots,\left(p_{n}, q_{n}\right)$ denote the set of pairs $\{(i-1, j-1):(i, j) \in \mu\}$ arranged in lexicographical order. We have $\Sigma p_{i}=n(\mu)$ and $\Sigma q_{i}=n\left(\mu^{\prime}\right)$. Let

$$
\Delta_{\mu}(x, y)=\operatorname{det}\left(x_{j}^{P_{i}} y_{j}^{q_{i}}\right)_{1<i, j<n} \in A^{n(\mu), n\left(\mu^{\prime}\right)} .
$$

Clearly, $w \Delta_{\mu}=\varepsilon(w) \Delta_{\mu}$ for $w \in S_{n}$. Let $H_{\mu} \subset A$ be the linear span of all the partial derivatives of $\Delta_{\mu}(x, y)$ of all orders with respect to the $x$ 's and $y$ 's. Then $H_{\mu}$ is stable under the action of $S_{n}$, and moreover

$$
H_{\mu}=\underset{h, k}{\oplus} H_{\mu}^{h, k}
$$

where $H_{\mu}^{h, k}=H_{\mu} \cap A^{h, k}$ is $S_{n}$-stable. Let $\varphi_{\mu}^{h, k}$ denote the character of the $S_{n}$-module $H_{\mu}^{h, k}$, and for each partition $\lambda$ of $n$ let

$$
C_{\lambda \mu}(q, t)=\sum_{h, k}\left\langle\chi^{\lambda}, \varphi_{\mu}^{h, k}\right\rangle t^{h} q^{k}
$$

where as in Chapter I, $\S 7$ the $\chi^{\lambda}$ are the irreducible characters of $S_{n}$. Then Garsia and Haiman conjecture (loc. cit.) that

$$
C_{\lambda \mu}(q, t)=K_{\lambda \mu}\left(q, t^{-1}\right) t^{n(\mu)}
$$

In particular they have verified that this is so for all pairs $(\lambda, \mu)$ of partitions of $n \leqslant 6$, and in other special cases.

The matrices $K(q, t)^{\prime}, n \leqslant 6$

|  |  |  |  |  | 3 | 21 | $1^{3}$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|  |  | 2 | $1^{2}$ | 3 | 1 | $q+q^{2}$ | $q^{3}$ |
| 1 | 2 | 1 | 9 | 21 | $t$ | $1+q t$ | 9 |
| 1 1 | $1^{2}$ | t | 1 | $1^{3}$ | $t^{3}$ | $t+t^{2}$ | 1 |


|  | 4 | 31 | $2^{2}$ | $21^{2}$ | $1^{4}$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 4 | 1 | $q+q^{2}+q^{3}$ | $q^{2}+q^{4}$ | $q^{3}+q^{4}+q^{5}$ | $q^{6}$ |
| 31 | t | $1+q t+q^{2} t$ | $q+q^{2} t$ | $q+q^{2}+q^{3} t$ | $q^{3}$ |
| $2^{2}$ | $t^{2}$ | $t+q t+q t^{2}$ | $1+q^{2} t^{2}$ | $q+q t+q^{2} t$ | $q^{2}$ |
| $21^{2}$ | $t^{3}$ | $t+t^{2}+q t^{3}$ | $t+q t^{2}$ | $1+q t+q t^{2}$ | $q$ |
| $1^{4}$ | $t^{6}$ | $t^{3}+t^{4}+t^{5}$ | $t^{2}+t^{4}$ | $t+t^{2}+t^{3}$ | 1 |


|  | 5 | 41 | 32 |
| :---: | :---: | :---: | :---: |
| 5 | 1 | $q+q^{2}+q^{3}+q^{4}$ | $q^{2}+q^{3}+q^{4}+q^{5}+q^{6}$ |
| 41 | t | $1+q t+q^{2} t+q^{3} t$ | $q+q^{2}+q^{2} t+q^{3} t+q^{4} t$ |
| 32 | $t^{2}$ | $t+q t+q t^{2}+q^{2} t^{2}$ | $1+q t+q^{2} t+q^{2} t^{2}+q^{3} t^{2}$ |
| $31^{2}$ | $t^{3}$ | $t+t^{2}+q t^{3}+q^{2} t^{3}$ | $t+\dot{q} t+q t^{2}+q^{2} t^{2}+q^{2} t^{3}$ |
| $2^{21}$ | $t^{4}$ | $t^{2}+t^{3}+q t^{3}+q t^{4}$ | $t+t^{2}+q t^{2}+q t^{3}+q^{2} t^{4}$ |
| $21^{3}$ | $t^{6}$ | $t^{3}+t^{4}+t^{5}+q t^{6}$ | $t^{2}+t^{3}+t^{4}+q t^{4}+q t^{5}$ |
| $1^{5}$ | $t^{10}$ | $t^{6}+t^{7}+t^{8}+t^{9}$ | $t^{4}+t^{5}+t^{6}+t^{7}+t^{8}$ |


|  | $31^{2}$ | $2^{2} 1$ | $21^{3}$ | 1 |
| :---: | :---: | :---: | :---: | :---: |
| 5 | $q^{3}+q^{4}+2 q^{5}+q^{6}+q^{7}$ | $q^{4}+q^{5}+q^{6}+q^{7}+q^{8}$ | $q^{6}+q^{7}+q^{8}+q^{9}$ | $q^{10}$ |
| 41 | $q+q^{2}+q^{3}+q^{3} t+q^{4} t+q^{5} t$ | $q^{2}+q^{3}+q^{4}+q^{4} t+q^{5} t$ | $q^{3}+q^{4}+q^{5}+q^{6} t$ | $q^{6}$ |
| 32 | $q+q t+2 q^{2} t+q^{3} t+q^{3} t^{2}$ | $q+q^{2}+q^{2} t+q^{3} t+q^{4} t^{2}$ | $q^{2}+q^{3}+q^{3} t+q^{4} t$ | $q^{4}$ |
| $31^{2}$ | $1+q t+q^{2} t+q t^{2}+q^{2} t^{2}+q^{3} t^{3}$ | $q+q t+q^{2} t+q^{2} t^{2}+q^{3} t^{2}$ | $q+q^{2}+q^{3} t+q^{3} t^{2}$ | $q^{3}$ |
| $2^{2} 1$ | $t+q t+2 q t^{2}+q t^{3}+q^{2} t^{3}$ | $1+q t+q t^{2}+q^{2} t^{2}+q^{2} t^{3}$ | $q+q t+q^{2} t+q^{2} t^{2}$ | $q^{2}$ |
| $21^{3}$ | $t+t^{2}+t^{3}+q t^{3}+q t^{4}+q t^{5}$ | $t+t^{2}+q t^{2}+q t^{3}+q t^{4}$ | $1+q t+q t^{2}+q t^{3}$ | $q$ |
| $1^{5}$ | $t^{3}+t^{4}+2 t^{5}+t^{6}+t^{7}$ | $t^{2}+t^{3}+t^{4}+t^{5}+t^{6}$ | $t+t^{2}+t^{3}+t^{4}$ | 1 |


|  | 6 | 51 | 42 |
| :---: | :---: | :---: | :---: |
| 6 | 1 | $q+q^{2}+q^{3}+q^{4}+q^{5}$ | $q^{2}+q^{3}+2 q^{4}+q^{5}+2 q^{6}+q^{7}+q^{8}$ |
| 51 | $t$ | $1+q t+q^{2} t+q^{3} t+q^{4} t$ | $q+q^{2}+q^{3}+q^{2} t+q^{3} t+2 q^{4} t+q^{5} t+q^{6} t$ |
| 42 | $t^{2}$ | $t+q t+q t^{2}+q^{2} t^{2}+q^{3} t^{2}$ | $1+q t+2 q^{2} t+q^{3} t+q^{2} t^{2}+q^{3} t^{2}+2 q^{4} t^{2}$ |
| $41^{2}$ | $t^{3}$ | $t+t^{2}+q t^{3}+q^{2} t^{3}+q^{3} t^{3}$ | $t+q t+q^{2} t+q t^{2}+q^{2} t^{2}+q^{3} t^{2}+q^{2} t^{3}+q^{3} t^{3}+q^{4} t^{3}$ |
| $3^{2}$ | $t^{3}$ | $t^{2}+q t^{2}+q^{2} t^{2}+q t^{3}+q^{2} t^{3}$ | $t+q t+q^{2} t+q t^{2}+q^{2} t^{2}+q^{3} t^{2}+q^{2} t^{3}+q^{3} t^{3}+q^{4} t^{3}$ |
| 321 | $t^{4}$ | $t^{2}+t^{3}+q t^{3}+q t^{4}+q^{2} t^{4}$ | $t+t^{2}+2 q t^{2}+q t^{3}+2 q^{2} t^{3}+q^{2} t^{4}+q^{3} t^{4}$ |
| $31^{3}$ | $t^{6}$ | $t^{3}+t^{4}+t^{5}+q t^{6}+q^{2} t^{6}$ | $t^{2}+t^{3}+q t^{3}+t^{4}+q t^{4}+q^{2} t^{4}+q t^{5}+q^{2} t^{5}+q^{2} t^{6}$ |
| $2^{3}$ | $t^{6}$ | $t^{4}+q t^{4}+t^{5}+q t^{5}+q t^{6}$ | $t^{2}+t^{3}+q t^{3}+t^{4}+q t^{4}+q^{2} t^{4}+q t^{5}+q^{2} t^{5}+q^{2} t^{6}$ |
| $2^{2} 1^{2}$ | $t^{7}$ | $t^{4}+t^{5}+t^{6}+q t^{6}+q t^{7}$ | $2 t^{3}+t^{4}+q t^{4}+t^{5}+2 q t^{5}+q t^{6}+q^{2} t^{7}$ |
| $21^{4}$ | $t^{10}$ | $t^{6}+t^{7}+t^{8}+t^{9}+q t^{10}$ | $t^{4}+t^{5}+2 t^{6}+t^{7}+q t^{7}+t^{8}+q t^{8}+q t^{9}$ |
| $1^{6}$ | $t^{15}$ | $t^{10}+t^{11}+t^{12}+t^{13}+t^{14}$ | $t^{7}+t^{8}+2 t^{9}+t^{10}+2 t^{11}+t^{12}+t^{13}$ |

## $41^{2}$

$3^{2}$

| $q^{3}+q^{4}+2 q^{5}+2 q^{6}+2 q^{7}+q^{8}+q^{9}$ | $q^{3}+q^{5}+q^{6}+q^{7}+q^{9}$ |
| :---: | :---: |
| $q+q^{2}+q^{3}+q^{4}+q^{3} t+q^{4} t+2 q^{5} t+q^{6} t+q^{7} t$ | $q^{2}+q^{4}+q^{3} t+q^{5} t+q^{6} t$ |
| $q+q t+2 q^{2} t+2 q^{3} t+q^{4} t+q^{3} t^{2}+q^{4} t^{2}+q^{5} t^{2}$ | $q+q^{2} t+q^{3} t+q^{3} t^{2}+q^{5} t^{2}$ |
| $1+q t+q^{2} t+q^{3} t+q t^{2}+q^{2} t^{2}+q^{3} t^{2}+q^{3} t^{3}+q^{4} t^{3}+q^{5} t^{3}$ | $q t+q^{2} t+q^{2} t^{2}+q^{4} t^{2}+q^{3} t^{3}$ |
| $q t+q^{2} t+q^{3} t+q t^{2}+2 q^{2} t^{2}+2 q^{3} t^{2}+q^{4} t^{2}+q^{3} t^{3}$ | $1+q^{2} t^{2}+q^{3} t^{2}+q^{4} t^{2}+q^{3} t^{3}$ |
| $t+q t+2 q t^{2}+q^{2} t^{2}+q t^{3}+2 q^{2} t^{3}+q^{3} t^{3}+q^{3} t^{4}$ | $t+q t^{2}+q^{2} t^{2}+q^{2} t^{3}+q^{3} t^{4}$ |
| $t+t^{2}+t^{3}+q t^{3}+q^{2} t^{3}+q t^{4}+q^{2} t^{4}+q t^{5}+q^{2} t^{5}+q^{3} t^{6}$ | $q t^{2}+t^{3}+q t^{4}+q^{2} t^{4}+q^{2} t^{5}$ |
| $q t^{2}+t^{3}+2 q t^{3}+q^{2} t^{3}+2 q t^{4}+q^{2} t^{4}+q t^{5}+q^{2} t^{5}$ | $q t^{2}+t^{3}+q t^{3}+q t^{4}+q^{3} t^{6}$ |
| $t^{2}+t^{3}+q t^{3}+t^{4}+2 q t^{4}+2 q t^{5}+q t^{6}+q^{2} t^{6}$ | $t^{2}+t^{4}+q t^{4}+q t^{5}+q^{2} t^{6}$ |
| $t^{3}+t^{4}+2 t^{5}+t^{6}+q t^{6}+t^{7}+q t^{7}+q t^{8}+q t^{9}$ | $t^{4}+t^{5}+q t^{6}+t^{7}+q t^{8}$ |
| $t^{6}+t^{7}+2 t^{8}+2 t^{9}+2 t^{10}+t^{11}+t^{12}$ | $t^{6}+t^{8}+t^{9}+t^{10}+t^{12}$ |

## 321

6

| $q^{4}+2 q^{5}+2 q^{6}+3 q^{7}+3 q^{8}+2 q^{9}+2 q^{10}+q^{11}$ |
| :---: |
| $q^{2}+2 q^{3}+2 q^{4}+2 q^{5}+q^{6}+q^{4} t+2 q^{5} t+2 q^{6} t+2 q^{7} t+q^{8} t$ |
| $q+2 q^{2}+q^{3}+q^{2} t+3 q^{3} t+3 q^{4} t+q^{5} t+q^{4} t^{2}+2 q^{5} t^{2}+q^{6} t^{2}$ |
| $q+q^{2}+q t+2 q^{2} t+2 q^{3} t+q^{4} t+q^{2} t^{2}+2 q^{3} t^{2}+2 q^{4} t^{2}+q^{5} t^{2}+q^{4} t^{3}+q^{5} t^{3}$ |
| $q+q^{2}+q t+2 q^{2} t+2 q^{3} t+q^{4} t+q^{2} t^{2}+2 q^{3} t^{2}+2 q^{4} t^{2}+q^{5} t^{2}+q^{4} t^{3}+q^{5} t^{3}$ |
| $1+3 q t+q^{2} t+q t^{2}+4 q^{2} t^{2}+q^{3} t^{2}+q^{2} t^{3}+3 q^{3} t^{3}+q^{4} t^{4}$ |
| $t+q t+t^{2}+2 q t^{2}+q^{2} t^{2}+2 q t^{3}+2 q^{2} t^{3}+q t^{4}+2 q^{2} t^{4}+q^{3} t^{4}+q^{2} t^{5}+q^{3} t^{5}$ |
| $t+q t+t^{2}+2 q t^{2}+q^{2} t^{2}+2 q t^{3}+2 q^{2} t^{3}+q t^{4}+2 q^{2} t^{4}+q^{3} t^{4}+q^{2} t^{5}+q^{3} t^{5}$ |
| $t+2 t^{2}+q t^{2}+t^{3}+3 q t^{3}+3 q t^{4}+q^{2} t^{4}+q t^{5}+2 q^{2} t^{5}+q^{2} t^{6}$ |
| $t^{2}+2 t^{3}+2 t^{4}+q t^{4}+2 t^{5}+2 q t^{5}+t^{6}+2 q t^{6}+2 q t^{7}+q t^{8}$ |
| $t^{4}+2 t^{5}+2 t^{6}+3 t^{7}+3 t^{8}+2 t^{9}+2 t^{10}+t^{11}$ |


| 6 | $q^{6}+q^{7}+2 q^{8}+2 q^{9}+2 q^{10}+q^{11}+q^{12}$ | $q^{6}+q^{8}+q^{9}+q^{10}+q^{12}$ |
| :---: | :---: | :---: |
| 51 | $q^{3}+q^{4}+2 q^{5}+q^{6}+q^{7}+q^{6} t+q^{7} t+q^{8} t+q^{9} t$ | $q^{4}+q^{5}+q^{7}+q^{6} t+q^{8} t$ |
| 42 | $q^{2}+q^{3}+q^{4}+q^{3} t+2 q^{4} t+2 q^{5} t+q^{6} t+q^{6} t^{2}$ | $q^{2}+q^{4}+q^{4} t+q^{5} t+q^{6} t^{2}$ |
| $41^{2}$ | $q+q^{2}+q^{3}+q^{3} t+q^{4} t+q^{5} t+q^{3} t^{2}+q^{4} t^{2}+q^{5} t^{2}+q^{6} t^{3}$ | $q^{3}+q^{2} t+q^{4} t+q^{4} t^{2}+q^{5} t^{2}$ |
| $3^{2}$ | $q^{3}+q^{2} t+2 q^{3} t+2 q^{4} t+q^{5} t+q^{3} t^{2}+q^{4} t^{2}+q^{5} t^{2}$ | $q^{3}+q^{2} t+q^{3} t+q^{4} t+q^{6} t^{3}$ |
| 321 | $q+q t+2 q^{2} t+q^{3} t+q^{2} t^{2}+2 q^{3} t^{2}+q^{3} t^{3}+q^{4} t^{3}$ | $q+q^{2} t+q^{2} t^{2}+q^{3} t^{2}+q^{4} t^{3}$ |
| $31^{3}$ | $1+q t+q^{2} t+q t^{2}+q^{2} t^{2}+q t^{3}+q^{2} t^{3}+q^{3} t^{3}+q^{3} t^{4}+q^{3} t^{5}$ | $q t+q t^{2}+q^{2} t^{2}+q^{3} t^{3}+q^{2} t^{4}$ |
| $2^{3}$ | $q t+q^{2} t+q t^{2}+2 q^{2} t^{2}+q t^{3}+2 q^{2} t^{3}+q^{3} t^{3}+q^{2} t^{4}$ | $1+q^{2} t^{2}+q^{2} t^{3}+q^{3} t^{3}+q^{2} t^{4}$ |
| $2^{2} 1^{2}$ | $t+q t+2 q t^{2}+2 q t^{3}+q^{2} t^{3}+q t^{4}+q^{2} t^{4}+q^{2} t^{5}$ | $t+q t^{2}+q t^{3}+q^{2} t^{3}+q^{2} t^{5}$ |
| $21^{4}$ | $t+t^{2}+t^{3}+q t^{3}+t^{4}+q t^{4}+2 q t^{5}+q t^{6}+q t^{7}$ | $t^{2}+q t^{3}+t^{4}+q t^{5}+q t^{6}$ |
| $1^{6}$ | $t^{3}+t^{4}+2 t^{5}+2 t^{6}+2 t^{7}+t^{8}+t^{9}$ | $t^{3}+t^{5}+t^{6}+t^{7}+t^{9}$ |


|  | $2^{2} 1^{2}$ | $21^{4}$ | $1^{6}$ |
| :---: | :---: | :---: | :---: |
| 6 | $q^{7}+q^{8}+2 q^{9}+q^{10}+2 q^{11}+q^{12}+q^{13}$ | $q^{10}+q^{11}+q^{12}+q^{13}+q^{14}$ | $q^{15}$ |
| 51 | $q^{4}+q^{5}+2 q^{6}+q^{7}+q^{8}+q^{7} t+q^{8} t+q^{9} t$ | $q^{6}+q^{7}+q^{8}+q^{9}+q^{10} t$ | $q^{10}$ |
| 42 | $2 q^{3}+q^{4}+q^{5}+q^{4} t+2 q^{5} t+q^{6} t+q^{7} t^{2}$ | $q^{4}+q^{5}+q^{6}+q^{6} t+q^{7} t$ | $q^{7}$ |
| $41^{2}$ | $q^{2}+q^{3}+q^{4}+q^{3} t+q^{4} t+q^{5} t+q^{4} t^{2}+q^{5} t^{2}+q^{6} t^{2}$ | $q^{3}+q^{4}+q^{5}+q^{6} t+q^{6} t^{2}$ | $q^{6}$ |
| $3^{2}$ | $q^{2}+q^{3}+q^{4}+q^{3} t+q^{4} t+q^{5} t+q^{4} t^{2}+q^{5} t^{2}+q^{6} t^{2}$ | $q^{4}+q^{5}+q^{4} t+q^{5} t+q^{6} t$ | $q^{6}$ |
| 321 | $q+q^{2}+2 q^{2} t+q^{3} t+2 q^{3} t^{2}+q^{4} t^{2}+q^{4} t^{3}$ | $q^{2}+q^{3}+q^{3} t+q^{4} t+q^{4} t^{2}$ | $q^{4}$ |
| $31^{3}$ | $q+q t+q^{2} t+q t^{2}+q^{2} t^{2}+q^{3} t^{2}+q^{2} t^{3}+q^{3} t^{3}+q^{3} t^{4}$ | $q+q^{2}+q^{3} t+q^{3} t^{2}+q^{3} t^{3}$ | $q^{3}$ |
| $2^{3}$ | $q+q t+q^{2} t+q t^{2}+q^{2} t^{2}+q^{3} t^{2}+q^{2} t^{3}+q^{3} t^{3}+q^{3} t^{4}$ | $q^{2}+q^{2} t+q^{3} t+q^{2} t^{2}+q^{3} t^{2}$ | $q^{3}$ |
| $2^{2} 1^{2}$ | $1+q t+2 q t^{2}+q^{2} t^{2}+q t^{3}+q^{2} t^{3}+2 q^{2} t^{4}$ | $q+q t+q^{2} t+q^{2} t^{2}+q^{2} t^{3}$ | $q^{2}$ |
| $21^{4}$ | $t+t^{2}+q t^{2}+t^{3}+q t^{3}+2 q t^{4}+q t^{5}+q t^{6}$ | $1+q t+q t^{2}+q t^{3}+q t^{4}$ | $q$ |
| $1^{6}$ | $t^{2}+t^{3}+2 t^{4}+t^{5}+2 t^{6}+t^{7}+t^{8}$ | $t+t^{2}+t^{3}+t^{4}+t^{5}$ | 1 |

## Examples

1. We have

$$
\begin{aligned}
\sum_{n>0} g_{n}(x ; q, t) & =\prod_{i, j} \frac{1-t x_{i} q^{j-1}}{1-x_{i} q^{j-1}} \\
& =\sum_{\lambda} s_{\lambda}\left(1, q, q^{2}, \ldots\right) S_{\lambda}(x ; t) \\
& =\sum_{\lambda} q^{n(\lambda)} H_{\lambda}(q)^{-1} S_{\lambda}(x ; t)
\end{aligned}
$$

by Chapter I, (4.3) and Chapter I, §3, Example 2, where $H_{\lambda}(q)=c_{\lambda}(q, q)$ is the hook-length polynomial. Hence

$$
\begin{aligned}
J_{(n)}(x ; q, t) & =(q ; q)_{n} g_{n}(x ; q, t) \\
& =\sum_{|\lambda|=n} \frac{q^{n(\lambda)}(q ; q)_{n}}{H_{\lambda}(q)} S_{\lambda}(x ; t)
\end{aligned}
$$

and therefore

$$
\begin{aligned}
K_{\lambda(n)}(q, t) & =q^{n(\lambda)}(q ; q)_{n} / H_{\lambda}(q) \\
& =\sum_{T} q^{r(T)}
\end{aligned}
$$

(Chapter I, §5, Example 14); the sum is over all standard tableaux $T$ of shape $\lambda$, and $r(T)$ is the sum of the positive integers $k$ such that $k+1$ lies in a lower row than $k$ in $T$.
By duality (8.15) it follows that

$$
K_{\lambda\left(1^{n}\right)}(q, t)=t^{n\left(\lambda^{\prime}\right)}(t ; t)_{n} / H_{\lambda}(t) .
$$

2. Let $\lambda=\left(r+1,1^{s}\right)=(r \mid s)$ in Frobenius notation. For each partition $\mu$ of $n=$ $r+s+1, K_{\lambda \mu}(q, t)$ is the coefficient of $u^{s}$ in the polynomial

$$
\prod_{(i, j)}\left(t^{i-1}+q^{j-1} u\right)
$$

where the product is over all $(i, j) \in \mu$ with the exception of $(i, j)=(1,1)$.
This can be proved by applying the specialization $\varepsilon_{-u, t}$ to both sides of (8.11). By (8.8) we have

$$
\varepsilon_{-u, t} J_{\mu}(x ; q, t)=\prod_{(i, j) \in \mu}\left(t^{i-1}+q^{j-1} u\right)
$$

and

$$
\varepsilon_{-u, t} S_{\lambda}(x ; t)=\sum_{\rho} z_{\rho}^{-1} \chi_{\rho}^{\lambda} \prod_{i=1}^{(\rho)}\left(1-(-u)^{\rho_{i}}\right)
$$

which is the Schur function $s_{\lambda}$ corresponding to the series $\sum h_{n} y^{n}=$ $(1+u y) /(1-y)$, so that $s_{\lambda}=0$ unless $\lambda$ is a hook, and $s_{\lambda}=(1+u) u^{s}$ if $\lambda=(r \mid s)$. It follows that
(*)

$$
\prod_{(i, j) \in \mu}\left(t^{i-1}+q^{j-1} u\right)=\sum_{r+s=n-1} K_{(r \mid s) \mu}(q, t)(1+u) u^{s}
$$

which gives the result stated.
3. Consider the functions $K_{\lambda \mu}(q, t)$ when $q=t$. We have then $J_{\mu}=H_{\mu}(t) s_{\mu}(x)$, so that

$$
H_{\mu}(t) S_{\mu}(x)=\sum_{\lambda} K_{\lambda \mu}(t, t) S_{\lambda}(x ; t) .
$$

Since $\left(s_{\lambda}(x)\right)$ and $\left(S_{\lambda}(x ; t)\right)$ are dual bases for the scalar product $\langle u, v\rangle_{0, t}$, it follows that

$$
K_{\lambda \mu}(t, t)=H_{\mu}(t)\left\langle s_{\lambda}, s_{\mu}\right\rangle_{0, t}
$$

Now

$$
\begin{aligned}
\left\langle s_{\lambda}, s_{\mu}\right\rangle_{0, t} & =\sum_{\rho} z_{\rho}^{-1} \chi_{\rho}^{\lambda} \chi_{\rho}^{\mu} \prod_{i=1}^{l(\rho)}\left(1-t^{\rho_{i}}\right)^{-1} \\
& =\left(s_{\lambda} * s_{\mu}\right)\left(1, t, t^{2}, \ldots\right)
\end{aligned}
$$

where $s_{\lambda} * s_{\mu}$ is the internal product defined in Chapter I, §7.
If $\chi_{\rho}^{\mu} \neq 0$, the polynomial $\Pi\left(1-t^{\rho_{i}}\right)$ divides $H_{\mu}(t)$ (Stanley [S24]), from which it follows that $K_{\lambda \mu}(t, t) \in \mathrm{Q}[t]$. But also $s_{\lambda} * s_{\mu}$ is of the form $\Sigma_{\nu} a_{\nu} s_{\nu}$ with coefficients $a_{\nu} \in \mathbf{N}$, so that

$$
\left\langle s_{\lambda}, s_{\mu}\right\rangle_{0, t}=\sum_{\nu} a_{\nu} t^{n(\nu)} H_{\nu}(t)^{-1} \in \mathbf{Z}[[t]] .
$$

Hence $K_{\lambda \mu}(t, t) \in \mathbf{Q}[t] \cap \mathbf{Z}[[t]]=\mathbf{Z}[t]$.
Also

$$
X_{\rho}^{\lambda}(t, t)=x_{\rho}^{\lambda} H_{\lambda}(t) / \Pi\left(1-t^{\rho_{l}}\right) \in \mathbf{Z}[t] .
$$

4. Let $\lambda$ be a partition. For each square $s$ in the positive quadrant define

$$
\begin{aligned}
& c_{\lambda}(s)=1-q^{a_{\lambda}(s)} t_{\lambda}(s)+1 \\
& c_{\lambda}^{\prime}(s)=1-q^{a_{\lambda}(s)+1} t^{l_{\lambda}(s)}
\end{aligned}
$$

if $s \in \lambda$, and $c_{\lambda}(s)=c_{\lambda}^{\prime}(s)=1$ otherwise. If $S$ is any set of squares, let

$$
c_{\lambda}^{S}=\prod_{s \in S} c_{\lambda}^{\prime}(s) . \prod_{s \notin S} c_{\lambda}(s) .
$$

With this notation we have by (6.24)

$$
J_{\mu} J_{(r)}=\sum_{\lambda} \eta_{\lambda / \mu} J_{\lambda}
$$

summed over partitions $\lambda \supset \mu$ such that $\lambda-\mu$ is a horizontal strip of length $r$, where

$$
\eta_{\lambda / \mu}(q, t)=(q ; q)_{r} c_{\mu}^{S}(q, t) / c_{\lambda}^{S}(q, t)
$$

and $S$ is the union of the columns that contain squares $s \in \lambda-\mu$.
In particular

$$
\left(1-q^{r} t^{s}\right) J_{(r)} J_{\left(1^{s}\right)}=\left(1-t^{s}\right) J_{(r \mid s-1)}+\left(1-q^{r}\right) J_{(r-1 \mid s)}
$$

If $r, s \geqslant 1$.
S. Let $\mu=\left(21^{n-2}\right)$ and let $\lambda$ be a partition of $n$. Then

$$
K_{\lambda \mu}(q, t)=K_{\lambda \mu}(0, t)+q t^{n(\mu)} K_{\lambda^{\prime} \mu}\left(0, t^{-1}\right)
$$

(From the last equation of Example 4 above, when $r=1$ we have

$$
\left(1-t^{n}\right) J_{\mu}=\left(1-q t^{n-1}\right) J_{(1)} J_{\left(1^{n-1}\right)}-(1-q) J_{\left(1^{n}\right)} .
$$

By replacing ( $q, t$ ) by ( $0, t$ ) and then by ( $0, t^{-1}$ ), and eliminating $e_{1} e_{n-1}$ and $e_{n}$ from the three resulting equations, we obtain

$$
J_{\mu}(q, t)=J_{\mu}(0, t)+(-1)^{n} q t^{1+n(n-1) / 2} J_{\mu}\left(0, t^{-1}\right),
$$

from which the result follows by picking out the coefficient of $S_{\lambda}(x ; t)$ on either side, and bearing in mind that $S_{\lambda}\left(x ; t^{-1}\right)=(-t)^{-|\lambda|} S_{\lambda^{\prime}}(x ; t)$ ).
6. We have

$$
\operatorname{det} K_{n}(q, t)=\prod_{|\lambda|=n} F_{\lambda}(q, t)
$$

where

$$
F_{\lambda}(q, t)=\prod_{\substack{s \in \lambda \\ a(s)>0}}\left(1-q^{a(s)} t^{l(s)+1}\right)
$$

For

$$
\begin{aligned}
K(q, t)^{\prime} & =M(J(q, t), S(t)) \\
& =M(J(q, t), P(q, t)) M(P(q, t), m) M(S(t), m)^{-1}
\end{aligned}
$$

where $M(J, P)$ is diagonal, with determinant $\Pi_{\lambda} c_{\lambda}(q, t) ; M(P, m)$ is unitriangular, hence has determinant 1 ; and (Chapter III, §6) $M(S, m)$ has determinant $\Pi_{\lambda} b_{\lambda}(t)=\Pi_{\lambda} c_{\lambda}(0, t)$. It follows that

$$
\operatorname{det} K_{n}(q, t)=\prod_{|\lambda|=n} c_{\lambda}(q, t) / c_{\lambda}(0, t)
$$

which is equivalent to the result stated.
7. When $q=1$ we have $P_{\mu}=e_{\mu^{\prime}}$, so that

$$
\begin{equation*}
J_{\mu}(x ; 1, t)=(t ; t)_{\mu^{\prime}} e_{\mu^{\prime}}(x) . \tag{1}
\end{equation*}
$$

Moreover, it follows from Chapter I, §3, Example 2 and Chapter I, (4.3') that

$$
\begin{equation*}
e_{r}(x)=\sum_{|\lambda|=r} S_{\lambda}(x ; t) t^{n\left(\lambda^{\prime}\right)} / H_{\lambda}(t) . \tag{2}
\end{equation*}
$$

Let us write

$$
\begin{equation*}
u_{\lambda}(t)=t^{n\left(\lambda^{\prime}\right)}(t ; t)_{r} / H_{\lambda}(t) \tag{3}
\end{equation*}
$$

for $\lambda$ a partition of $r$. By Chapter I, $\S 5$, Example 14 we have

$$
\begin{equation*}
u_{\lambda}(t)=\sum_{T} t^{p(T)} \tag{4}
\end{equation*}
$$

summed over the standard tableaux $T$ of shape $\lambda$, where $p(T)$ is the sum of the entries $k$ in $T$ such that $k+1$ lies in a column to the right of $k$. In particular, therefore, $u_{\lambda}(t)$ is a polynomial in $t$ with positive integral coefficients.

From (1), (2), and (3) we have

$$
J_{\mu}(x ; 1, t)=\prod_{i \geqslant 1}\left(\sum u_{\lambda^{i}}(t) S_{\lambda^{i}}(x ; t)\right)
$$

where the inner sum is over partitions $\lambda^{i}$ of $\mu_{i}{ }^{\prime}$. It follows that

$$
\begin{equation*}
K_{\lambda \mu}(1, t)=\sum c_{\lambda^{1} \lambda^{2}} \ldots u_{\lambda^{1}}(t) u_{\lambda^{2}}(t) \ldots \tag{5}
\end{equation*}
$$

(where the $c$ 's are Littlewood-Richardson coefficients), and hence that $K_{\lambda \mu}(1, t)$ is a polynomial in $t$ with positive integral coefficients. Dually, by $(8.15), K_{\lambda \mu}(q, 1)$ is a polynomial in $q$ with positive integral coefficients.
A closer examination of the equation (5), in the context of the 'algebra of tableaux' [S7] shows that

$$
\begin{equation*}
K_{\lambda \mu}(1, t)=\sum_{T} t^{p(T, \mu)} \tag{6}
\end{equation*}
$$

summed over all standard tableaux $T$ of shape $\lambda$, where

$$
p(T, \mu)=\sum_{i \geqslant 1} p\left(\rho_{i} T\right)
$$

and $\rho_{i} T$ is the restriction of $T$ to the $i$ th segment of $[1, n]$, of length $\mu_{i}^{\prime}$, determined by the partition $\mu^{\prime}=\left(\mu_{1}^{\prime}, \mu_{2}^{\prime}, \ldots\right)$. An equivalent formulation is

$$
\begin{equation*}
K_{\lambda \mu}(1, t)=\sum_{T} t^{c(T, \mu)} \tag{7}
\end{equation*}
$$

summed as before over the standard tableaux $T$ of shape $\lambda$, where

$$
c(T, \mu)=\sum_{i \geqslant 1} c\left(\rho_{i} T\right)
$$

and $c\left(\rho_{i} T\right)$ is the charge (Chapter III, (6.5)) of the skew standard tableau $\rho_{i} T$.
It can also be shown that if $w \in S_{n}$ is a transposition,

$$
\begin{aligned}
& \frac{\partial K_{\lambda \mu}}{\partial t}(1,1)=\frac{1}{2}\left(\chi^{\lambda}(1)+\chi^{\lambda}(w)\right) n(\mu), \\
& \frac{\partial K_{\lambda \mu}}{\partial q}(1,1)=\frac{1}{2}\left(\chi^{\lambda}(1)-\chi^{\lambda}(w)\right) n(\mu) .
\end{aligned}
$$

8. (a) Since

$$
J_{(n)}(x ; q, t)=(q ; q)_{n} \sum_{|\rho|=n} z_{\rho}^{-1} p_{\rho}(x) \prod_{i=1}^{l(\rho)} \frac{1-t^{\rho_{i}}}{1-q^{\rho_{i}}},
$$

it follows that

$$
X_{\rho}^{(n)}(q, t)=(q ; q)_{n} \Pi\left(1-q^{p_{l}}\right)^{-1}
$$

for all partitions $\rho$ of $n$. Dually,

$$
X_{\rho}^{\left(I^{n}\right)}(q, t)=\varepsilon_{\rho}(t ; t)_{n} \Pi\left(1-t^{\rho_{i}}\right)^{-1} .
$$

(b) Another special case is

$$
X_{(n)}^{\lambda}(q, t)=\prod_{(i, j)}\left(t^{i-1}-q^{j-1}\right)
$$

where the product is over all $(i, j) \in \lambda$ with the exception of $(1,1)$. For by (8.20) we have

$$
X_{(n)}^{\lambda}(q, t)=\sum_{\mu} \chi_{(n)}^{\mu} K_{\lambda \mu}(q, t)
$$

and $\chi_{(n)}^{\mu}$ is zero unless $\mu$ is a hook $(r \mid s)$, in which case it is equal to $(-1)^{s}$. The result now follows by setting $u=-1$ in the formula (*) of Example 2.
(c) We have

$$
X_{\left(\mathbf{1}^{n}\right)}^{\lambda}(q, t)=\frac{c_{\lambda}^{\prime}(q, t)}{(1-t)^{n}} \sum_{T} \varphi_{T}(q, t)
$$

summed over the standard tableaux $T$ of shape $\lambda$.
9.

$$
J_{\lambda}\left(1, t, t^{2}, \ldots ; q, t\right)=t^{n(\lambda)}
$$

(Set $u=t^{n}$ in (8.8), and then let $n \rightarrow \infty$.)
10. For each partition $\lambda$, let $\Sigma_{\lambda}(x ; q)$ denote the Schur function $s_{\lambda}$ in the variables $x_{i} q^{j-1}(i, j \geqslant 1)$. Then $\left(\Sigma_{\lambda}(x ; q)\right)$ is the basis of $\Lambda_{F}$ dual to the basis $\left(S_{\lambda}(x ; t)\right)$, and hence

$$
K_{\lambda \mu}(q, t)=\left\langle\Sigma_{\lambda}(x ; q), J_{\mu}(x ; q, t)\right\rangle
$$

We can now define

$$
K_{\lambda / \nu, \mu}(q, t)=\left\langle\Sigma_{\lambda / \nu}(x ; q), J_{\mu}(x ; q, t)\right\rangle
$$

where $\lambda \supset \nu$ and $|\lambda|=|\mu|+|\nu|$ (otherwise it is zero). Since

$$
\Sigma_{\lambda / \nu}=\sum_{\pi} c_{\nu \pi}^{\lambda} \Sigma_{\pi}
$$

where the $c$ 's are Littlewood-Richardson coefficients, hence are integers $\geqslant 0$, it follows that

$$
K_{\lambda / \nu, \mu}(q, t)=\sum_{\pi} c_{\nu \pi}^{\lambda} K_{\pi \mu}(q, t)
$$

which will be a polynomial with positive integer coefficients if (8.18?) is true.
Since $\chi^{\lambda / \nu}=\Sigma_{\pi} c_{\nu \pi}^{\lambda} \chi^{\pi}$, it follows from (8.16) that $K_{\lambda / \nu, \mu}(1,1)=\chi^{\lambda / \nu}(1)$, the number of standard tableaux of shape $\lambda-\nu$.

We have

$$
\begin{aligned}
K_{\lambda / \nu, \mu}(t, q) & =K_{\lambda^{\prime} / \nu^{\prime}, \mu^{\prime}}(q, t), \\
K_{\lambda / \nu, \mu}\left(q^{-1}, t^{-1}\right) & =q^{-n\left(\mu^{\prime}\right)} t^{-n(\mu)} K_{\lambda^{\prime} / \nu^{\prime}, \mu}(q, t) .
\end{aligned}
$$

1. In this example we shall assume the truth of (8.18?).
a) Let

$$
J_{\lambda}(x ; q, t)=\sum_{\mu<\lambda} v_{\lambda \mu}(q, t) m_{\mu}(x)
$$

Chen $(1-t)^{-l(\mu)} v_{\lambda \mu}(q, t) \in \mathbf{Z}[q, t]$.
We have already observed that (8.18?) implies that $v_{\lambda \mu} \in \mathbf{Z}[q, t]$. On the other land, we have

$$
\begin{aligned}
J_{\lambda}(x ; q, t) & =\sum_{\mu} K_{\mu \lambda}(q, t) S_{\mu}(x ; t) \\
& =\sum_{\mu} K_{\mu \lambda}(q, t) \sum_{\rho} z_{\rho}^{-1} \chi_{\rho}^{\mu} p_{\rho} \prod_{i=1}^{M(\rho)}\left(1-t^{\left.\rho_{i}\right)}\right)
\end{aligned}
$$

nd

$$
p_{\rho}=\sum_{\sigma>\rho} L_{\rho \sigma} m_{\sigma}
$$

vith coefficients $L_{\rho \sigma} \in \mathrm{N}$. Hence

$$
v_{\lambda \sigma}(q, t)=\sum_{\mu} K_{\mu \lambda}(q, t) \sum_{\rho<\sigma} z_{\rho}^{-1} \chi_{\rho}^{\mu} L_{\rho \sigma} \prod_{i=1}^{l(\rho)}\left(1-t^{\rho_{i}}\right),
$$

Ind since $\rho \leqslant \sigma$ implies that $l(\rho) \geqslant l(\sigma)$, every term in the inner sum is divisible y $(1-t)^{l(\sigma)}$.
b) For any three partitions $\lambda, \mu, \nu$ we have

$$
\left\langle J_{\lambda}, J_{\mu} J_{\nu}\right\rangle \in \mathbf{Z}[q, t]
$$

-again on the assumption that (8.18?) is true. For this it is enough to show that $\left|S_{\lambda}, S_{\mu} S_{\nu}\right\rangle \in \mathbf{Z}[q, t]$, and hence it is enough to show that $\left\langle S_{\lambda}, S_{\mu}\right\rangle \in \mathbf{Z}[q, t]$. But

$$
\begin{aligned}
\left\langle s_{\lambda}, s_{\mu}\right\rangle & =\sum_{\rho} z_{\rho}^{-1} \chi_{\rho}^{\lambda} \chi_{\rho}^{\mu} \prod_{i=1}^{l(\rho)}\left(1-q^{\rho_{i}}\right)\left(1-t^{\rho_{i}}\right) \\
& =\varphi\left(s_{\lambda} * s_{\mu}\right)
\end{aligned}
$$

there $s_{\lambda} * s_{\mu}$ is the internal product defined in Chapter $\mathrm{I}, 87$, and $\varphi$ is the pecialization defined by $\varphi\left(p_{r}\right)=\left(1-q^{\prime}\right)\left(1-t^{r}\right)$ for $r \geqslant 1$. We have then

$$
\sum_{r>0} \varphi\left(h_{r}\right) u^{r}=\frac{(1-q u)(1-t u)}{(1-u)(1-q t u)}
$$

so that $\varphi\left(h_{r}\right) \in \mathbf{Z}[q, t]$ for all $r \geqslant 0$, and hence successively $\varphi\left(s_{\lambda}\right)$ for all $\lambda$ and $\varphi\left(s_{\lambda} * s_{\mu}\right)$ for all $\lambda, \mu$, lie in $\mathbf{Z}[q, t]$.

## Notes and references

For other cases in which $K_{\lambda \mu}(q, t)$ can be shown to be a polynomial, see [S32].

## 9. Another scalar product

In this section we shall work with a finite number of variables $x=$ $\left(x_{1}, \ldots, x_{n}\right)$. We shall also assume, for simplicity of exposition, that $t=q^{k}$ where $k$ is a non-negative integer (see, however, the remarks at the end of the section).

Let $L_{n}=F\left[x_{1}^{ \pm 1}, \ldots, x_{n}^{ \pm 1}\right]$ be the $F$-algebra of Laurent polynomials in $x_{1}, \ldots, x_{n}$ (i.e. polynomials in the $x_{i}$ and $x_{i}^{-1}$ ). If $f=f\left(x_{1}, \ldots, x_{n}\right) \in L_{n}$, let $\bar{f}=f\left(x_{1}^{-1}, \ldots, x_{n}^{-1}\right)$ and let $[f]_{1}$ denote the constant term in $f$. Also recall from $\S 3$ that $T_{q, x_{i}} f\left(x_{1}, \ldots, x_{n}\right)=f\left(x_{1}, \ldots, q x_{i}, \ldots, x_{n}\right)$.
(9.1) Let $f, g \in L_{n}$. Then

$$
\left[\left(T_{q, x_{i}} f\right) \bar{g}\right]_{1}=\left[\left(T_{q, x_{i}} g\right) \bar{f}\right]_{1} .
$$

Proof. Since both sides are linear in each of $f$ and $g$, we may assume that $f$ and $g$ are monomials, and then the result is obvious.

Now let

$$
\begin{align*}
\Delta=\Delta(x ; q, t) & =\prod_{i \neq j}\left(x_{i} x_{j}^{-1} ; q\right)_{\infty} /\left(t x_{i} x_{j}^{-1} ; q\right)_{\infty} \\
& =\prod_{i \neq j} \prod_{r=0}^{k-1}\left(1-q^{r} x_{i} x_{j}^{-1}\right) \tag{9.2}
\end{align*}
$$

since $t=q^{k}$. Clearly $\Delta \in L_{n}$, and is symmetric in $x_{1}, \ldots, x_{n}$. We define a scalar product on $L_{n}$ as follows:

$$
\begin{equation*}
\langle f, g\rangle^{\prime}=\langle f, g\rangle_{n}^{\prime}=\frac{1}{n!}[f g \Delta]_{1} . \tag{9.3}
\end{equation*}
$$

(9.4) Let $f, g \in \Lambda_{n, F}$. Then

$$
\left\langle D_{n}^{1} f, g\right\rangle^{\prime}=\left\langle f, D_{n}^{1} g\right\rangle^{\prime} .
$$

where $D_{n}^{1}$ is the operator defined by (3.4).

Proof. Let

$$
\Delta_{+}=\prod_{i<j}\left(x_{i} x_{j}^{-1} ; q\right)_{\infty} /\left(t x_{i} x_{j}^{-1} ; q\right)_{\infty}
$$

so that $\Delta=\Delta_{+} \bar{\Delta}_{+}$. Then we have

$$
\Delta_{+}^{-1} T_{q, x_{1}} \Delta_{+}=\prod_{j=2}^{n} \frac{1-t x_{1} x_{j}^{-1}}{1-x_{1} x_{j}^{-1}}=A_{1}(x ; t)
$$

in the notation of $\S 3$, so that

$$
\left(A_{1}(x ; t) T_{q, x_{1}} f\right) \Delta_{+}=T_{q, x_{1}}\left(f \Delta_{+}\right)
$$

for all $f \in \Lambda_{n, F}$, and therefore

$$
\left[A_{1}(x ; t)\left(T_{q, x_{1}} f\right) \bar{g} \Delta\right]_{1}=\left[T_{q, x_{1}}\left(f \Delta_{+}\right) \overline{g \Delta_{+}}\right]_{1}
$$

which by (9.1) is symmetrical in $f$ and $g$. By interchanging $x_{1}$ and $x_{i}$, it follows that

$$
\left[A_{i}(x ; t)\left(T_{q, x_{i}} f\right) \bar{g} \Delta\right]_{1}
$$

is symmetrical in $f$ and $g$ for each $i=1,2, \ldots, n$. Hence $\left[\left(D_{n}^{1} f\right) \bar{g} \Delta\right]_{1}$ is symmetrical in $f$ and $g$, which establishes (9.4).
(9.5) The polynomials $P_{\lambda}(x ; q, t)$, where $x=\left(x_{1}, \ldots, x_{n}\right)$ and $l(\lambda) \leqslant n$, are pairwise orthogonal for the scalar product (9.3).

Proof. Since $D_{n}^{1} P_{\lambda}=c_{\lambda \lambda} P_{\lambda}$ by (4.15), where

$$
c_{\lambda \lambda}=\sum_{i=1}^{n} q^{\lambda_{i} t^{n-i}}
$$

it follows from (9.4) that

$$
c_{\lambda \lambda}\left\langle P_{\lambda}, P_{\mu}\right\rangle^{\prime}=c_{\mu \mu}\left\langle P_{\lambda}, P_{\mu}\right\rangle^{\prime} .
$$

Since $c_{\lambda \lambda} \neq c_{\mu \mu}$ if $\lambda \neq \mu$, the result follows.
Remarks. 1. It follows from (9.5) that each of the operators $D_{n}^{r}$ defined in $\$ 3$ is self-adjoint for the scalar product (9.3). For the $P_{\lambda}$ are simultaneous eigenfunctions of these operators, by (4.15). Alternatively, this result can be established by direct computation, using the expression (3.4) ${ }_{r}$ for $D_{n}^{r}$.
2. When $q=t$ (but not otherwise) the two scalar products $\langle f, g\rangle_{n}$ (2.20)
and $\langle f, g\rangle_{n}^{\prime}$ coincide. For $\Delta(x ; t, t)=\Pi_{i \neq j}\left(1-x_{i} x_{j}^{-1}\right)=a_{\delta} \bar{a}_{\delta}$, where $a_{\delta}=$ $\Pi_{i<j}\left(x_{i}-x_{j}\right)$ (Chapter I, §3), and therefore

$$
\begin{aligned}
\left\langle s_{\lambda}, s_{\mu}\right\rangle_{n}^{\prime} & =\frac{1}{n!}\left[s_{\lambda} \bar{s}_{\mu} a_{\delta} \bar{a}_{\delta}\right]_{1} \\
& =\frac{1}{n!}\left[a_{\lambda+\delta} \bar{a}_{\mu+\delta}\right]_{1}=\delta_{\lambda \mu}
\end{aligned}
$$

On the other hand, when $q=t$ the scalar product $\langle f, g\rangle_{n}$ is that of Chapter I, so that $\left\langle s_{\lambda}, s_{\mu}\right\rangle_{n}=\delta_{\lambda \mu}$ by Chapter I, (4.8).

It remains to calculate the scalar product $\left\langle P_{\lambda}, P_{\lambda}\right\rangle^{\prime}$. One form of the answer is, with the notation of (6.14)

$$
\begin{equation*}
\left\langle P_{\lambda}, Q_{\lambda}\right\rangle_{n}^{\prime}=c_{n} \prod_{s \in \lambda} \frac{1-q^{a^{\prime}(s)} t^{n-l^{\prime}(s)}}{1-q^{a^{\prime}(s)+1} t^{n-l^{\prime}(s)-1}} \tag{9.6}
\end{equation*}
$$

where $l(\lambda) \leqslant n$ and

$$
\begin{equation*}
c_{n}=\langle 1,1\rangle_{n}^{\prime}=\frac{1}{n!}[\Delta]_{1} \tag{9.7}
\end{equation*}
$$

Proof. We shall prove (9.6) by induction on $|\lambda|$. Let $\lambda, \mu$ be partitions of length $\leqslant n$ such that $\lambda \supset \mu$ and $\lambda-\mu$ consists of a single square $s$. Also let $\nu=\mu+\left(1^{n}\right)$, so that $\nu \supset \lambda$ and $\nu-\lambda$ is a vertical strip of length $n-1$. Since $e_{n}=x_{1} \ldots x_{n}$ we have $e_{n} \bar{e}_{n}=1$ and hence from the definition (9.3) of the scalar product

$$
\left\langle P_{\lambda}, e_{1} Q_{\mu}\right\rangle^{\prime}=\left\langle\bar{e}_{1} e_{n} P_{\lambda}, e_{n} Q_{\mu}\right\rangle^{\prime}
$$

But $\bar{e}_{1} e_{n}=e_{n-1}$, and $e_{n} Q_{\mu}=b_{\mu} e_{n} P_{\mu}=b_{\mu} P_{\nu}$ (4.17). Hence

$$
\begin{equation*}
\left\langle P_{\lambda}, e_{1} Q_{\mu}\right\rangle^{\prime}=b_{\mu} b_{\nu}^{-1}\left\langle e_{n-1} P_{\lambda}, Q_{\nu}\right\rangle^{\prime} \tag{1}
\end{equation*}
$$

On the other hand, by (6.24) and (9.5) we have

$$
\begin{equation*}
\left\langle P_{\lambda}, e_{1} Q_{\mu}\right\rangle^{\prime}=\varphi_{\lambda / \mu}^{\prime}\left\langle P_{\lambda}, Q_{\lambda}\right\rangle^{\prime}, \tag{2}
\end{equation*}
$$

$$
\begin{equation*}
\left\langle e_{n-1} P_{\lambda}, Q_{\nu}\right\rangle^{\prime}=\psi_{\nu / \lambda}^{\prime}\left\langle P_{\nu}, Q_{\nu}\right\rangle^{\prime}=\psi_{\nu / \lambda}^{\prime} b_{\nu}\left\langle P_{\nu}, P_{\nu}\right\rangle^{\prime} \tag{3}
\end{equation*}
$$

and

$$
\begin{equation*}
\left\langle P_{\nu}, P_{\nu}\right\rangle^{\prime}=\left\langle e_{n} P_{\mu}, e_{n} P_{\mu}\right\rangle^{\prime}=\left\langle P_{\mu}, P_{\mu}\right\rangle^{\prime}=b_{\mu}^{-1}\left\langle P_{\mu}, Q_{\mu}\right\rangle^{\prime} \tag{4}
\end{equation*}
$$

From (1)-(4) we obtain

$$
\begin{equation*}
\varphi_{\lambda / \mu}^{\prime}\left\langle P_{\lambda}, Q_{\lambda}\right\rangle^{\prime}=\psi_{\nu / \lambda}^{\prime}\left\langle P_{\mu}, Q_{\mu}\right\rangle^{\prime} . \tag{5}
\end{equation*}
$$

Now from (6.24) we have

$$
\begin{aligned}
& \psi_{\nu / \lambda}^{\prime}=\prod_{\sigma \in R} b_{\nu}(\sigma) / b_{\lambda}(\sigma), \\
& \varphi_{\lambda / \mu}^{\prime}=\prod_{\sigma \in R} b_{\mu}(\sigma) / b_{\lambda}(\sigma)
\end{aligned}
$$

where $R$ is the row containing the unique square $s \in \lambda-\mu$. Hence

$$
\psi_{\nu / \lambda}^{\prime} / \varphi_{\lambda / \mu}^{\prime}=\prod_{\sigma \in R} b_{\nu}(\sigma) / b_{\mu}(\sigma)
$$

Since $\nu=\mu+\left(1^{n}\right)$ it follows that if $\sigma \in R \cap \mu$ and $\tau$ is the square immediately to the right of $\sigma$, we have $a_{\nu}(\tau)=a_{\mu}(\sigma)$ and $l_{\nu}(\tau)=l_{\mu}(\sigma)$ and therefore $b_{\nu}(\tau)=b_{\mu}(\sigma)$. Hence

$$
\begin{equation*}
\psi_{\nu / \lambda}^{\prime} / \varphi_{\lambda / \mu}^{\prime}=b_{\nu}\left(\sigma_{1}\right) \tag{6}
\end{equation*}
$$

where $\sigma_{1}$ is the leftmost square in the row $R$. For this square we have $a_{\nu}\left(\sigma_{1}\right)=a^{\prime}(s)$ and $l_{\nu}\left(\sigma_{1}\right)=n-1-l^{\prime}(s)$. Hence it follows from (5) and (6) that

$$
\frac{\left\langle P_{\lambda}, Q_{\lambda}\right\rangle^{\prime}}{\left\langle P_{\mu}, Q_{\mu}\right\rangle^{\prime}}=\frac{1-q^{a^{\prime}(s)} t^{n-l^{\prime}(s)}}{1-q^{a^{\prime}(s)+1} t^{n-l^{\prime}(s)-1}}
$$

and the proof of (9.6) is complete. I
Another (equivalent) formula for the scalar product $\left\langle P_{\lambda}, P_{\lambda}\right\rangle_{n}^{\prime}$ is given in Example 1 below.

We shall now renormalize the scalar product (9.3), and define

$$
\begin{equation*}
\langle f, g\rangle_{n}^{\prime \prime}=c_{n}^{-1}\langle f, g\rangle_{n}^{\prime} \tag{9.8}
\end{equation*}
$$

for $f, g \in \Lambda_{n, F}$, so that $\langle 1,1\rangle_{n}^{\prime \prime}=1$. The original scalar product (1.5) is then the limit of the scalar product (9.8) as $n \rightarrow \infty$. Precisely, we have
(9.9) Let $f, g \in \Lambda_{F}$ and let $\rho_{n}: \Lambda_{F} \rightarrow \Lambda_{F, n}$ be the canonical homomorphism (Chapter I, §2). Then

$$
\left\langle\rho_{n} f, \rho_{n} g\right\rangle_{n}^{\prime \prime} \rightarrow\langle f, g\rangle
$$

as $n \rightarrow \infty$, where the scalar product on the right is that defined by (1.5).
Proof. It is enough to verify this when $f=P_{\lambda}$ and $g=Q_{\mu}$. If $\lambda \neq \mu$, both scalar products are zero, by (9.5) and (4.7). If on the other hand $\lambda=\mu$, it follows from (9.6) that $\left\langle P_{\lambda}, Q_{\lambda}\right\rangle_{n}^{\prime \prime} \rightarrow 1$ as $n \rightarrow \infty$. |

Remark. We have assumed throughout this section that $t=q^{k}$ where $k$ is a non-negative integer. This restriction is not essential, and may be avoided as follows. Assume that $q$ is a complex number such that $|q|<1$, so that the infinite product $(z ; q)_{\infty}$ converges for all $z \in \mathbf{C}$, and define

$$
\begin{equation*}
\langle f, g\rangle_{n}^{\prime}=\frac{1}{n!} \int_{T} f(z) \overline{g(z)} \Delta(z ; q, t) d z \tag{9.10}
\end{equation*}
$$

where $T=\left\{z=\left(z_{1}, \ldots, z_{n}\right) \in \mathrm{C}^{n}:\left|z_{i}\right|=1,1 \leqslant i \leqslant n\right\}$ is the $n$-dimensional torus, and $d z$ is normalized Haar measure on $T$. The integrand in (9.10) is a continuous function on $T$, provided that $|t|<1$.

When $t=q^{k}, k \in \mathbf{N}$, this definition agrees with (9.3), since for a Laurent polynomial $f \in L_{n}$ the integral of $f$ over $T$ is equal to the constant term of $f$.

## Examples

1. (a) Let $x=\left(x_{1}, \ldots, x_{n}\right)$ and let

$$
\begin{aligned}
\Delta^{\prime}(x ; q, t) & =\Delta(x ; q, t) \prod_{i<j} \frac{1-t x_{i} x_{j}^{-1}}{1-x_{i} x_{j}^{-1}} \\
& =\prod_{1<i<j<n} \prod_{r=1}^{k}\left(1-q^{r} x_{i} x_{j}^{-1}\right)\left(1-q^{r-1} x_{i}^{-1} x_{j}\right)
\end{aligned}
$$

if $t=q^{k}$. The constant term in $\Delta^{\prime}$ is [Z1] equal to

$$
\prod_{i=2}^{n}\left[\begin{array}{l}
i k \\
k
\end{array}\right]
$$

where the square brackets denote $q$-binomial coefficients (Chapter I, $\S 2$, Example 3).
(b) From Chapter III, (1.3) we have

$$
\sum_{w \in S_{n}} w\left(\prod_{i<j} \frac{1-t x_{i} x_{j}^{-1}}{1-x_{i} x_{j}^{-1}}\right)=\prod_{i=2}^{n} \frac{1-t^{i}}{1-t}
$$

(c) Deduce from (a) and (b) that the constant $c_{n}$ of (9.7) is given by

$$
c_{n}=\prod_{i=2}^{n}\left[\begin{array}{c}
i k-1 \\
k-1
\end{array}\right]
$$

and hence that

$$
L\left(c_{n}\right)=\frac{(1-t)\left(1-q t^{-1}\right)}{1-q} \sum_{i<j} t^{j-i}
$$

where $L$ is the operator (6.12).
(d) From (c) and (9.6) we have

$$
L\left(\left\langle P_{\lambda}, P_{\lambda}\right\rangle_{n}^{\prime}\right)=L\left(c_{n}\right)+\left(1-q t^{-1}\right) \sum_{s \in \lambda}\left(q^{a^{\prime}(s)} t^{n-l^{\prime}(s)}-q^{a(s)} t^{l(s)+1}\right)
$$

which by (6.15) is equal to

$$
\frac{(1-t)\left(1-q t^{-1}\right)}{1-q} \sum_{i<j} q^{\lambda_{i}-\lambda_{j} t t^{j-i}} .
$$

Hence

$$
\begin{aligned}
\left\langle P_{\lambda}, P_{\lambda}\right\rangle_{n}^{\prime} & =\prod_{i<j} \frac{\left(q^{\lambda_{i}-\lambda_{j} t^{j-i}} ; q\right)_{\infty}\left(q^{\lambda_{i}-\lambda_{j}+1} t^{j-i} ; q\right)_{\infty}}{\left(q^{\left.\lambda_{i}-\lambda_{j} t^{j-i+1} ; q\right)_{\infty}\left(q^{\lambda_{i}-\lambda_{j}+1} t^{j-i-1} ; q\right)_{\infty}}\right.} \\
& =\prod_{i<j} \prod_{r=1}^{k-1} \frac{1-q^{\lambda_{i}-\lambda_{j}+r_{r}} t^{j-i}}{1-q^{\lambda_{i}-\lambda_{j}-r} t^{j-i}}
\end{aligned}
$$

if $t=q^{k}$.
2. (a) Let $0<q<1$ and let $f$ be a function defined on the closed interval $[0,1]$. The $q$-integral of $f$ is defined to be

$$
\int_{0}^{1} f(x) d_{q} x=(1-q) \sum_{r=0}^{\infty} q^{r} f\left(q^{r}\right)
$$

for all $f$ such that the series on the right converges. Thus it is the limit as $n \rightarrow \infty$ of the Riemann sums of $f$ corresponding to the subdivisions of $[0,1]$ at the points $q, q^{2}, \ldots, q^{n}$ (provided that $x f(x) \rightarrow 0$ as $x \rightarrow 0$ ). More generally, if $f(x)=$ $f\left(x_{1}, \ldots, x_{n}\right)$ is a function of $n$ variables defined on the unit cube $C_{n}=[0,1]^{n}$, the $q$-integral of $f$ is defined to be

$$
\int_{C_{n}} f(x) d_{q} x=(1-q)^{n} \sum_{\alpha \in \mathbf{N}^{n}} q^{|\alpha|} f\left(q^{\alpha}\right)
$$

where $\alpha=\left(\alpha_{1}, \ldots, \alpha_{n}\right),|\alpha|=\alpha_{1}+\ldots+\alpha_{n}$ and $f\left(q^{\alpha}\right)=f\left(q^{\alpha_{1}}, \ldots, q^{\alpha_{n}}\right)$.
(b) Lét $r, s$ be positive integers (or, more generally, positive real numbers). Then

$$
\begin{align*}
\int_{0}^{1} x^{r-1}(q x ; q)_{s-1} d_{q} x & =\Gamma_{q}(r) \Gamma_{q}(s) / \Gamma_{q}(r+s)  \tag{1}\\
& =B_{q}(r, s)
\end{align*}
$$

where $\Gamma_{q}(r)=(q ; q)_{r-1} /(1-q)^{r-1}$ is the $q$-gamma function. The formula (1) is a $q$-analogue of Euler's beta integral, which is the limiting case as $q \rightarrow 1$. (It is equivalent to Chapter I, $\S 2$, Example 5 , which may be rewritten in the form

$$
\sum_{m>0} a^{m} \frac{\left(q^{m+1} ; q\right)_{\infty}}{\left(a^{-1} b q^{m} ; q\right)_{\infty}}=\frac{(b ; q)_{\infty}(q ; q)_{\infty}}{(a ; q)_{\infty}\left(a^{-1} b ; q\right)_{\infty}}
$$

If we set $a=q^{r}$ and $b=q^{r+s}$, then this sum, multiplied by $1-q$, is just the $q$-integral (1).)
3. Let $x=\left(x_{1}, \ldots, x_{n}\right)$, let $t=q^{k}$ and define

$$
\begin{align*}
\Delta^{*}(x ; q, t) & =\prod_{1<i<j<n} \prod_{r=0}^{k-1}\left(x_{i}-q^{r} x_{j}\right)\left(x_{i}-q^{-r} x_{j}\right) \\
& =(-1)^{A} q^{B}\left(x_{1} \ldots x_{n}\right)^{k(n-1)} \Delta(x ; q, t) \tag{1}
\end{align*}
$$

where $A=\frac{1}{2} k n(n-1)$ and $B=\frac{1}{4} k(k-1) n(n-1)$. In this example we shall evaluate the multiple $q$-integral

$$
I_{\lambda}=\frac{1}{n!} \int_{C_{n}} P_{\lambda}(x ; q, t) \Delta_{r, s}^{*}(x ; q, t) d_{q} x
$$

where

$$
\Delta_{r, s}^{*}(x ; q, t)=\Delta^{*}(x ; q, t) \prod_{i=1}^{n} x_{i}^{r-1}\left(q x_{i} ; q\right)_{s-1}
$$

and $\lambda$ is a partition of length $\leqslant n$. (When $\lambda=0, I_{0}$ is a $q$-analogue of Selberg's integral.)
(a) For this purpose we shall expand $P_{\lambda} \Delta^{*}$ as a sum of monomials, say

$$
\begin{equation*}
P_{\lambda} \Delta^{*}=\sum_{\beta} c_{\lambda \beta} x^{\beta} \tag{2}
\end{equation*}
$$

summed over $\beta \in \mathrm{N}^{n}$ such that $|\beta|=|\lambda|+k n(n-1)$. Then we have

$$
\begin{aligned}
n!I_{\lambda} & =\sum_{\beta} c_{\lambda \beta} \int_{C_{n}} \prod_{i=1}^{n} x_{i}^{r+\beta_{i}-1}\left(q x_{i} ; q\right)_{s-1} d_{q} x_{i} \\
& =\sum_{\beta} c_{\lambda \beta} \prod_{i=1}^{n} \frac{\Gamma_{q}\left(r+\beta_{i}\right) \Gamma_{q}(s)}{\Gamma_{q}\left(r+s+\beta_{i}\right)}
\end{aligned}
$$

by Example 2(b), so that

$$
\begin{equation*}
n!I_{\lambda}=B_{q}(r, s)^{n} \sum_{\beta} c_{\lambda \beta}\left(q^{r} ; q\right)_{\beta} /\left(q^{r+s} ; q\right)_{\beta} \tag{3}
\end{equation*}
$$

where (as in §2, Example 1) $(a ; q)_{\beta}$ means $\Pi(a ; q)_{\beta_{i}}$.
(b) To evaluate the sum in (3) we shall apply the specialization $\varepsilon_{u, t}$ (§6) to the $y$-variables in the Cauchy formula (4.13). In this way we obtain

$$
\begin{equation*}
\sum_{\mu} \varepsilon_{u, t}\left(Q_{\mu}\right) P_{\mu}(x)=\prod_{i=1}^{n} \frac{\left(u x_{i} ; q\right)_{\infty}}{\left(x_{i} ; q\right)_{\infty}} . \tag{4}
\end{equation*}
$$

Let $\mu=\left(\mu_{1}, \ldots, \mu_{n}\right)$ be the partition defined by $\mu_{i}=\lambda_{i}+(n-1) k+a(1 \leqslant i \leqslant n)$, where $a$ is a positive integer to be determined later. From (4) we have

$$
\begin{equation*}
\varepsilon_{u, t}\left(Q_{\mu}\right)\left\langle P_{\mu}, P_{\mu}\right\rangle^{\prime}=\left\langle\prod_{i=1}^{n} \frac{\left(u x_{i} ; q\right)_{\infty}}{\left(x_{i} ; q\right)_{\infty}}, P_{\mu}\right\rangle^{\prime} \tag{5}
\end{equation*}
$$

By (4.17) the right-hand side of (5) is the constant term in

$$
\frac{1}{n!} P_{\lambda}(x ; q, t)\left(x_{1} \ldots x_{n}\right)^{(n-1) k+a} \Delta(x ; q, t) \prod_{i=1}^{n} \frac{\left(u x_{i}^{-1} ; q\right)_{\infty}}{\left(x_{i}^{-1} ; q\right)_{\infty}}
$$

which by (1) and (2) is equal to

$$
\frac{1}{n!}(-1)^{A} q^{B}\left(x_{1} \ldots x_{n}\right)^{a} \sum_{\beta} c_{\lambda \beta} x^{\beta} \prod_{i=1}^{n} \frac{\left(u x_{i}^{-1} ; q\right)_{\infty}}{\left(x_{i}^{-1} ; q\right)_{\infty}}
$$

Now the constant term in $x_{i}^{a+\beta_{1}}\left(u x_{i}^{-1} ; q\right)_{\infty} /\left(x_{i}^{-1} ; q\right)_{\infty}$ is the coefficient of $x_{i}^{a+\beta_{i}}$ in $\left(u x_{i} ; q\right)_{\infty} /\left(x_{i} ; q\right)_{\infty}$, which is (Chapter I, §2, Example 5)

$$
\frac{(u ; q)_{a+\beta_{i}}}{(q ; q)_{a+\beta_{i}}}=\frac{(u ; q)_{a}}{(q ; q)_{a}} \frac{\left(u q^{a} ; q\right)_{\beta_{i}}}{\left(q^{a+1} ; q\right)_{\beta_{i}}} .
$$

Hence from (5) we have

$$
\begin{equation*}
\varepsilon_{u, 1}\left(Q_{\mu}\right)\left\langle P_{\mu}, P_{\mu}\right\rangle^{\prime}=\frac{1}{n!}(-1)^{A} q^{B} \frac{(u ; q)_{a}^{n}}{(q ; q)_{a}^{n}} \sum_{\beta} c_{\lambda \beta} \frac{\left(u q^{a} ; q\right)_{\beta}}{\left(q^{a+1} ; q\right)_{\beta}} \tag{6}
\end{equation*}
$$

(c) The left-hand side of (6) can be evaluated by use of Example 1 above and $\S 6$, Example 4. We thus obtain

$$
\frac{1}{n!} \sum_{\beta} c_{\lambda \beta} \frac{\left(u q^{a} ; q\right)_{\beta}}{\left(q^{a+1} ; q\right)_{\beta}}=(-1)^{A} q^{-B+k n(\mu)} v_{\lambda}(q, t) \prod_{i=1}^{n} \frac{(q ; q)_{a}\left(u q^{k(1-i)} ; q\right)_{\mu_{i}}}{(q ; q)_{\mu_{i}+k(n-i)(u ; q)_{a}}}
$$

where (§6, Example 4)

$$
v_{\lambda}(q, t)=\prod_{1<i<j<n}\left(q^{\lambda_{i}-\lambda_{i} t j-i} ; q\right)_{k} .
$$

Since.

$$
\left(u q^{k(1-i)} ; q\right)_{\mu_{i}}=\left(u q^{k(1-i)} ; q\right)_{k(i-1)}(u ; q)_{a}\left(u q^{a} ; q\right)_{\lambda_{i}+k(n-i)}
$$

and

$$
\left(u q^{k(1-i)} ; q\right)_{k(i-1)}=(-u)^{k(i-1)} q^{-c_{i}\left(q u^{-1} ; q\right)_{k(i-1)}}
$$

where $C_{i}=\frac{1}{2}(i-1) k((i-1) k+1)$, it follows that
(7) $\frac{1}{n!} \sum_{\beta} c_{\lambda \beta} \frac{\left(u q^{a} ; q\right)_{\beta}}{\left(q^{a+1} ; q\right)_{\beta}}=u^{A} q^{E} v_{\lambda}(q, t) \prod_{i=1}^{n} \frac{\left(q u^{-1} ; q\right)_{k(i-1)}\left(u q^{a} ; q\right)_{\lambda_{i}+k(n-i)}}{\left(q^{a+1} ; q\right)_{\lambda_{1}+k(2 n-i-1)}}$
where the exponent of $q$ is

$$
\begin{aligned}
E & =-B+k n(\mu)-\sum_{i=1}^{n} C_{i} \\
& =k\left(n(\lambda)+a\binom{n}{2}\right)+2 k^{2}\binom{n}{3} .
\end{aligned}
$$

(d) Finally, if we now set $a=r+s-1$ and $u=q^{1-s}$ in (7), we shall obtain from (3) and (7) the desired result:

$$
\begin{aligned}
I_{\lambda}= & q^{F} \prod_{i=1}^{n} \frac{\Gamma_{q}\left(\lambda_{i}+r+k(n-i)\right) \Gamma_{q}(s+k(i-1))}{\Gamma_{q}\left(\lambda_{i}+r+s+k(2 n-i-1)\right)} \\
& \times \prod_{1<i<j<n} \frac{\Gamma_{q}\left(\lambda_{i}-\lambda_{j}+k(j-i+1)\right)}{\Gamma_{q}\left(\lambda_{i}-\lambda_{j}+k(j-i)\right)}
\end{aligned}
$$

where $F=k\left(n(\lambda)+\frac{1}{2} m(n-1)\right)+\frac{1}{3} k^{2} n(n-1)(n-2)$.
(e) Deduce from (d) and $\S 6$, Example 4 that

$$
I_{\lambda} / I_{0}=\varepsilon_{u, t}\left(P_{\lambda}\right) \varepsilon_{\nu, t}\left(P_{\lambda}\right) / \varepsilon_{w, t}\left(P_{\lambda}\right),
$$

where $u=q^{r} t^{n-1}, v=t^{n}$, and $w=q^{r+s} t^{2 n-2}$.

## Notes and references

The relationship (9.9) between the two scalar products was first remarked by Kadell, in the context of Jack's symmetric functions. Likewise, Example 3 is a $q$-analogue of an integral formula due to Kadell.

In the definition (9.2) of $\Delta$, and in the scalar product formula of Example 1, the structure of the root system of type $A_{n-1}$ is clearly visible. In fact, this aspect of the theory generalizes to other root systems: see the last section of [M6].

## 10. Jack's symmetric functions

In this section we shall summarize the main properties of Jack's symmetric functions. As we have already observed in $\S 1$, they are obtained from the preceding theory by means of the specialization

$$
q=t^{\alpha}, \quad t \rightarrow 1
$$

Here $q$ and $t$ are to be thought of as real variables, and $\alpha$ as a positive real number.

More generally, let

$$
\begin{equation*}
(q, t) \rightarrow_{\alpha}(1,1) \tag{10.1}
\end{equation*}
$$

mean that $(q, t) \rightarrow(1,1)$ in such a way that $(1-q) /(1-t) \rightarrow \alpha$. (For example, $q=t^{\alpha}$ as above, or again $q=1-\alpha(1-t)$.) Then for any real numbers $a, b, c, d$ (such that $c \alpha+d \neq 0$ ) we have

$$
\begin{equation*}
\frac{1-q^{a} t^{b}}{1-q^{c} t^{d}} \rightarrow \frac{a \alpha+b}{c \alpha+d} \tag{10.2}
\end{equation*}
$$

as $(q, t) \rightarrow_{\alpha}(1,1)$.
(10.3) We have

$$
(t x ; q)_{\infty} /(x ; q)_{\infty} \rightarrow(1-x)^{-1 / \alpha}
$$

as $(q, t) \rightarrow_{\alpha}(1,1)$.
This statement, and others of the same sort that will occur later, is to be interpreted in the sense of termwise convergence of formal power series. The coefficient of $x^{n}$ in $(t x ; q)_{\infty} /(x ; q)_{\infty}$ is (Chapter I, $\S 2$, Example 5)

$$
\frac{(t ; q)_{n}}{(q ; q)_{n}}=\prod_{r=0}^{n-1} \frac{1-q^{r} t}{1-q^{r+1}}
$$

and by (10.2) this tends to the limit

$$
\prod_{r=0}^{n-1} \frac{r \alpha+1}{(r+1) \alpha}=(-1)^{n}\binom{-1 / \alpha}{n}
$$

which is the coefficient of $x^{n}$ in $(1-x)^{-1 / \alpha}$. |
Again, from (10.2) we have

$$
z_{\lambda}(q, t)=z_{\lambda} \prod_{i=1}^{l(\lambda)} \frac{1-q^{\lambda_{i}}}{1-t^{\lambda_{i}}} \rightarrow z_{\lambda} \alpha^{l(\lambda)}
$$

as $(q, t) \rightarrow_{\alpha}(1,1)$, for all partitions $\lambda$. Hence the scalar product $\langle f, g\rangle_{q, t}$ defined by (1.5) becomes in the limit the scalar product $\langle f, g\rangle_{\alpha}$ on $\Lambda_{F}$ (where now $F=\mathbf{Q}(\alpha)$ ) defined by (1.4):

$$
\left\langle p_{\lambda}, p_{\mu}\right\rangle_{\alpha}=\delta_{\lambda \mu} \alpha^{l(\lambda)} z_{\lambda} .
$$

By (10.3), the product $\Pi(x, y ; q, t)$ defined in (2.5) is replaced by

$$
\Pi(x, y ; \alpha)=\prod_{i, j}\left(1-x_{i} y_{j}\right)^{-1 / \alpha}
$$

In place of (2.7) we have
(10.4) For each $n \geqslant 0$, let $\left(u_{\lambda}\right)$ and $\left(v_{\lambda}\right)$ be $F$-bases of $\Lambda_{F}^{n}$, indexed by the partitions of $n$. Then the following conditions are equivalent:
(a) $\left\langle u_{\lambda}, v_{\mu}\right\rangle_{\alpha}=\delta_{\lambda \mu}$ for all $\lambda, \mu$;
(b) $\Sigma_{\lambda} u_{\lambda}(x) u_{\lambda}(y)=\Pi(x, y ; \alpha)$.

The specialization of $g_{n}(x ; q, t)(2.8)$ is $g_{n}^{(\alpha)}(x)$, defined by the generating function

$$
\sum_{n>0} g_{n}^{(\alpha)}(x) y^{n}=\prod_{i}\left(1-x_{i} y\right)^{-1 / \alpha}
$$

As in $\S 2$, we define

$$
g_{\lambda}^{(\alpha)}(x)=\prod_{i>1} g_{\lambda_{1}}^{(\alpha)}(x)
$$

for any partition $\lambda=\left(\lambda_{1}, \lambda_{2}, \ldots\right)$. By specializing (2.9) and (2.11) we obtain

$$
\begin{equation*}
g_{n}^{(\alpha)}=\sum_{|\lambda|=n} z_{\lambda}^{-1} \alpha^{-l(\lambda)} p_{\lambda} \tag{10.5}
\end{equation*}
$$

and

$$
\left\langle g_{\lambda}^{(\alpha)}, m_{\mu}\right\rangle_{\alpha}=\delta_{\lambda \mu}
$$

so that the $g_{\lambda}^{(\alpha)}$ form a basis of $\Lambda_{F}$ dual to the basis $\left(m_{\lambda}\right)$. Hence the $g_{n}^{(\alpha)}, n \geqslant 1$, are algebraically independent over $F=\mathbf{Q}(\alpha)$, and $\Lambda_{F}=$ $F\left[g_{1}^{(\alpha)}, g_{2}^{(\alpha)}, \ldots\right]$.

For each real number $\beta$ let $\omega_{\beta}$ denote the $F$-algebra endomorphism of $\Lambda_{F}$ defined by

$$
\begin{equation*}
\omega_{\beta}\left(p_{r}\right)=(-1)^{r-1} \beta p_{r} \tag{10.6}
\end{equation*}
$$

for $r \geqslant 1$. We have $\omega_{\beta}^{-1}=\omega_{\beta^{-1}}$ if $\beta \neq 0$, and $\omega_{1}$ is the involution $\omega$ of Chapter I. From Chapter I, (2.14)' we have

$$
\begin{equation*}
\omega_{\alpha}\left(g_{n}^{(\alpha)}\right)=e_{n} \tag{10.7}
\end{equation*}
$$

and it follows directly from the definitions (1.4) and (10.6) that $\omega_{\beta}$ is self-adjoint, i.e.

$$
\begin{equation*}
\left\langle\omega_{\beta} f, g\right\rangle_{\alpha}=\left\langle f, \omega_{\beta} g\right\rangle_{\alpha} \tag{10.8}
\end{equation*}
$$

for all $f, g \in \Lambda_{F}$. Moreover we have

$$
\begin{equation*}
\left\langle\omega_{\alpha^{-1}} f, g\right\rangle_{\alpha}=\langle\omega f, g\rangle_{1} \tag{10.9}
\end{equation*}
$$

Consider next the behaviour of $P_{\lambda}(x ; q, t)$ as $(q, t) \rightarrow_{\alpha}(1,1)$. From (7.13'), the coefficient of $m_{\mu}(x)$ in $P_{\lambda}(x ; q, t)$ is

$$
u_{\lambda \mu}(q, t)=\sum_{T} \psi_{T}(q, t)
$$

summed over tableaux $T$ of shape $\lambda$ and weight $\mu$, where $\psi_{T}$ is given explicitly by $\left(7.11^{\prime}\right),(6.24)$, and (6.20). These formulas show that $\psi_{T}(q, t)$ is a product of terms of the form (10.2), and hence has a well-defined limit $\psi_{T}^{(\alpha)}$ as $(q, t) \rightarrow_{\alpha}(1,1)$.
Explicitly, the limit of $b_{\lambda}(s ; q, t)(6.20)$ is

$$
\begin{equation*}
b_{\lambda}^{(\alpha)}(s)=\frac{\alpha a_{\lambda}(s)+l_{\lambda}(s)+1}{\alpha a_{\lambda}(s)+l_{\lambda}(s)+\alpha} \tag{10.10}
\end{equation*}
$$

and the limit of $\psi_{\lambda / \mu}(q, t)(6.24)$ is

$$
\begin{equation*}
\psi_{\lambda / \mu}^{(\alpha)}=\prod_{s \in R_{\lambda / \mu}-c_{\lambda / \mu}} b_{\mu}^{(\alpha)}(s) / b_{\lambda}^{(\alpha)}(s) \tag{10.11}
\end{equation*}
$$

where (loc. cit.) $C_{\lambda / \mu}$ (resp. $R_{\lambda / \mu}$ ) is the union of the columns (resp. rows) that intersect $\lambda-\mu$. Hence (7.11')

$$
\begin{equation*}
\psi_{T}^{(\alpha)}=\prod_{i=1}^{r} \psi_{\lambda}^{(\alpha))^{(1-1)}} \tag{10.12}
\end{equation*}
$$

where $0=\lambda^{(0)} \subset \lambda^{(1)} \subset \ldots \subset \lambda^{(r)}=\lambda$ is the sequence of partitions determined by the tableau $T$ (so that each skew diagram $\lambda^{(i)}-\lambda^{(i-1)}$ is a horizontal strip).

Hence the limit of $u_{\lambda \mu}(q, t)$ as $(q, t) \rightarrow_{\alpha}(1,1)$ is

$$
u_{\lambda \mu}^{(\alpha)}=\sum_{T} \psi_{T}^{(\alpha)}
$$

summed as above over tableaux $T$ of shape $\lambda$ and weight $\mu$, and therefore

$$
\begin{equation*}
P_{\lambda}^{(\alpha)}=m_{\lambda}+\sum_{\mu<\lambda} u_{\lambda \mu}^{(\alpha)} m_{\mu} \tag{10.13}
\end{equation*}
$$

is the limit of $P_{\lambda}(q, t)$ as $(q, t) \rightarrow_{\alpha}(1,1)$. We have

$$
\begin{equation*}
\left\langle P_{\lambda}^{(\alpha)}, P_{\mu}^{(\alpha)}\right\rangle_{\alpha}=0 \tag{10.14}
\end{equation*}
$$

whenever $\lambda \neq \mu$.
The $P_{\lambda}^{(\alpha)}$ are Jack's symmetric functions. They are characterized by the properties (10.13), (10.14). From (10.10)-(10.12) it is clear that $u_{\lambda \mu}^{(\alpha)}$ is a sum of products of the form $(a \alpha+b) /(c \alpha+d)$ where $a, b, c, d$ are nonnegative integers. Also $P_{\lambda}^{(1)}$ is the Schur function $s_{\lambda}$, so that $u_{\lambda \mu}^{(1)}$ is the Kostka number $K_{\lambda \mu}$, hence is positive whenever $\lambda \geqslant \mu$ (Chapter I, §7, Example 9). Hence
(10.15) We have $u_{\lambda \mu}^{(\alpha)}>0$ whenever $\lambda \geqslant \mu$ and $\alpha>0$. |

Another proof of the existence of the $P_{\lambda}^{(\alpha)}$ is indicated in $\S 4$, Example 2. See also §4, Example 3(d).

Let $\left(Q_{\lambda}^{(\alpha)}\right.$ ) be the basis of $\Lambda_{F}$ dual to the basis $\left(P_{\lambda}^{(\alpha)}\right.$, so that

$$
Q_{\lambda}^{(\alpha)}=b_{\lambda}^{(\alpha)} P_{\lambda}^{(\alpha)}
$$

where $b_{\lambda}^{(\alpha)}=\left\langle P_{\lambda}^{(\alpha)}, P_{\lambda}^{(\alpha)}\right\rangle_{\alpha}^{-1} \in F$, so that from (6.19) and (10.2) we have

$$
b_{\lambda}^{(\alpha)}=\prod_{s \in \lambda} b_{\lambda}^{(\alpha)}(s)
$$

$$
\begin{equation*}
=\prod_{s \in \lambda} \frac{\alpha a(s)+l(s)+1}{\alpha a(s)+l(s)+\alpha} . \tag{10.16}
\end{equation*}
$$

In particular we have

$$
P_{\left(\mathbf{I}^{\prime}\right)}^{(\alpha)}=e_{r}, \quad Q_{(r)}^{(\alpha)}=g_{r}^{(\alpha)}
$$

Also it follows from (4.14) that the $P_{\lambda}^{(\alpha)}$ are well-defined at $\alpha=0$ and $\alpha=\infty$, and that

$$
P_{\lambda}^{(0)}=e_{\lambda^{\prime}}, \quad P_{\lambda}^{(1)}=Q_{\lambda}^{(1)}=s_{\lambda}, \quad P_{\lambda}^{(\infty)}=m_{\lambda} .
$$

The duality theorem (5.1) becomes

$$
\begin{equation*}
\omega_{\alpha} P_{\lambda}^{(\alpha)}=Q_{\lambda^{\prime}}^{\left(\alpha^{-1}\right)} \tag{10.17}
\end{equation*}
$$

Next, let $f_{\mu \nu}^{\lambda}(\alpha) \dagger$ denote the coefficient of $P_{\lambda}^{(\alpha)}$ in the product $P_{\mu}^{(\alpha)} P_{\nu}^{(\alpha)}$, so that

$$
f_{\mu \nu}^{\lambda}(\alpha)=\left\langle Q_{\lambda}^{(\alpha)}, P_{\mu}^{(\alpha)} P_{\nu}^{(\alpha)}\right\rangle_{\alpha}
$$

This is a rational function of $\alpha$ that remains finite at $\alpha=0$ and $\alpha=\infty$. By (7.4) it vanishes identically unless $|\lambda|=|\mu|+|\nu|$ and $\lambda \supset \mu, \lambda \supset \nu$.

The skew functions $P_{\lambda / \mu}^{(\alpha)}, Q_{\lambda / \mu}^{(\alpha)}$ are defined as in $\S 7$ by

$$
Q_{\lambda / \mu}^{(\alpha)}=\sum_{\nu} f_{\mu \nu}^{\lambda}(\alpha) Q_{\nu}^{(\alpha)}=\left(b_{\lambda}^{(\alpha)} / b_{\mu}^{(\alpha)}\right) P_{\lambda / \mu}^{(\alpha)}
$$

They are zero unless $\lambda \supset \mu$, in which case they are homogeneous of degree $|\lambda|-|\mu|$. For a finite number of variables $x=\left(x_{1}, \ldots, x_{n}\right)$ we have by (7.15)

$$
\begin{equation*}
Q_{\lambda / \mu}^{(\alpha)}\left(x_{1}, \ldots, x_{n}\right)=0 \tag{10.18}
\end{equation*}
$$

unless $0 \leqslant \lambda_{i}^{\prime}-\mu_{i}^{\prime} \leqslant n$ for each $i \geqslant 1$.
$\dagger$ There is a conflict here with the notation $f_{\mu \nu}^{\lambda}(t)$ of Chapter III, $\S 3$, but it should cause no confusion.

Duality (10.17) generalizes to give

$$
\begin{equation*}
\omega_{\alpha} P_{\lambda / \mu}^{(\alpha)}=Q_{\lambda^{\prime} / \mu^{\prime}}^{\left(\alpha^{-1}\right)} \tag{10.19}
\end{equation*}
$$

Next, let $X$ be an indeterminate and let

$$
\varepsilon_{X}: \Lambda_{F} \rightarrow F[X]
$$

be the $F$-algebra homomorphism defined by $\varepsilon_{X}\left(p_{r}\right)=X$ for all $r \geqslant 1$, so that $\varepsilon_{x}\left(p_{\lambda}\right)=X^{(\lambda)}$. If $X$ is replaced by a positive integer $n$, then $\varepsilon_{X}(f)=$ $f(1, \ldots, 1)$ (with $n 1$ 's) for $f \in \Lambda_{F}$. The specialization theorem (6.17) then gives

$$
\begin{equation*}
\varepsilon_{X} P_{\lambda}^{(\alpha)}=\prod_{s \in \lambda} \frac{X+\alpha a^{\prime}(s)-l^{\prime}(s)}{\alpha a(s)+l(s)+1} \tag{10.20}
\end{equation*}
$$

Let

$$
\begin{align*}
& c_{\lambda}(\alpha)=\prod_{s \in \lambda}(\alpha a(s)+l(s)+1),  \tag{10.21}\\
& c_{\lambda}^{\prime}(\alpha)=\prod_{s \in \lambda}(\alpha a(s)+l(s)+\alpha)
\end{align*}
$$

be respectively the numerator and denominator of $b_{\lambda}^{(\alpha)}(10.16)$. We have

$$
c_{\lambda}^{\prime}(\alpha)=\alpha^{|\lambda|} c_{\lambda^{\prime}}\left(\alpha^{-1}\right) .
$$

Now define

$$
\begin{equation*}
J_{\lambda}^{(\alpha)}=c_{\lambda}(\alpha) P_{\lambda}^{(\alpha)}=c_{\lambda}^{\prime}(\alpha) Q_{\lambda}^{(\alpha)} . \tag{10.22}
\end{equation*}
$$

By comparison with (8.1) and (8.3) it is clear that
(10.23) $J_{\lambda}^{(\alpha)}(x)$ is the limit, as $(q, t) \rightarrow_{\alpha}(1,1)$, of

$$
(1-t)^{-|\lambda|} J_{\lambda}(x ; q, t) .
$$

For the $J_{\lambda}^{(\alpha)}$, duality (10.17) and specialization (10.20) take the forms

$$
\begin{align*}
& \omega_{\alpha} J_{\lambda}^{(\alpha)}=\alpha^{|\lambda|} J_{\lambda^{\prime}}^{\left(\alpha^{-1}\right)},  \tag{10.24}\\
& \varepsilon_{X} J_{\lambda}^{(\alpha)}=\prod_{s \in \lambda}\left(X+a^{\prime}(s) \alpha-l^{\prime}(s)\right)
\end{align*}
$$

For each partition $\lambda$, let $\tilde{m}_{\lambda}=u_{\lambda} m_{\lambda}$ denote the 'augmented' monomial symmetric function corresponding to $\lambda$, where (as in Chapter I, §6, Example 10)

$$
u_{\lambda}=\prod_{i>1} m_{i}(\lambda)!
$$

The transition matrices $M\left(J^{(\alpha)}, \tilde{m}\right)_{n}$ have been computed up to weight $n=7$, and suggest the conjecture
(10.26?) The entries in $M\left(J^{(\alpha)}, \tilde{m}\right)$ are polynomials in $\alpha$ with positive integral coefficients.

Next, let $\theta_{\rho}^{\lambda}(\alpha)$ denote the coefficient of $p_{\rho}$ in $J_{\lambda}^{(\alpha)}$ :

$$
\begin{equation*}
J_{\lambda}^{(\alpha)}=\sum_{\rho} \theta_{\rho}^{\lambda}(\alpha) p_{\rho} \tag{10.27}
\end{equation*}
$$

From (8.19) and (10.23) it follows that

$$
\begin{equation*}
\theta_{\rho}^{\lambda}(\alpha)=\lim _{(q, t) \rightarrow \alpha(1,1)} \frac{X_{\rho}^{\lambda}(q, t)}{(1-t)^{n} z_{\rho}} \prod_{i=1}^{l(\rho)}\left(1-t^{\rho_{i}}\right) . \tag{10.28}
\end{equation*}
$$

In particular,

$$
\theta_{\left(1^{n}\right)}^{\lambda}(\alpha)=\frac{1}{n!} X_{\left(1^{n}\right)}^{\lambda}(1,1)
$$

and hence by (8.26) (or also from (10.25))

$$
\begin{equation*}
\theta_{\left(1^{n}\right)}^{\lambda}(\alpha)=1 \tag{10.29}
\end{equation*}
$$

for all partitions $\lambda$ of $\boldsymbol{n}$.
From (10.24) it follows that

$$
\begin{equation*}
\theta_{\rho}^{\lambda}(\alpha)=\varepsilon_{\rho} \alpha^{n-l(\rho)} \theta_{\rho}^{\lambda^{\lambda}}\left(\alpha^{-1}\right) \tag{10.30}
\end{equation*}
$$

if $\lambda, \rho$ are partitions of $n$.
The $\theta_{\rho}^{\lambda}(\alpha)$ satisfy the orthogonality relations

$$
\begin{align*}
& \sum_{\rho} z_{\rho} \alpha^{l(\rho)} \theta_{\rho}^{\lambda}(\alpha) \theta_{\rho}^{\mu}(\alpha)=\delta_{\lambda \mu} c_{\lambda}(\alpha) c_{\lambda}^{\prime}(\alpha),  \tag{10.31}\\
& \sum_{\lambda} c_{\lambda}(\alpha)^{-1} c_{\lambda}^{\prime}(\alpha)^{-1} \theta_{\rho}^{\lambda}(\alpha) \theta_{\sigma}^{\lambda}(\alpha)=\delta_{\rho \sigma} z_{\rho}^{-1} \alpha^{-l(\rho)} . \tag{10.32}
\end{align*}
$$

For (10.31) follows from (10.26) and the orthogonality of the $J_{\lambda}^{(\alpha)}$, and (10.32) is equivalent to (10.31).
(10.33) Remark. Since the augmented monomial symmetric functions $\tilde{m}_{\lambda}$ form a $\mathbf{Z}$-basis of the subring $\Pi=\mathbf{Z}\left[p_{1}, p_{2}, \ldots\right]$ of $\Lambda$, it would follow from the conjecture (10.26?) that $\theta_{\rho}^{\lambda}(\alpha) \in \mathbf{Z}[\alpha]$ for all $\lambda, \rho$, and hence that $\left\langle J_{\lambda}^{(\alpha)}, J_{\mu}^{(\alpha)} J_{\nu}^{(\alpha)}\right\rangle_{\alpha} \in \mathbf{Z}[\alpha]$ for all $\lambda, \mu, \nu$. Stanley [S25] makes the apparently stronger conjecture that this scalar product should be a polynomial in $\alpha$ with non-negative integer coefficients.

Finally, the function $\Delta$ defined in (9.2) is replaced by

$$
\begin{equation*}
\Delta(x ; \alpha)=\prod_{i \neq j}\left(1-x_{i} x_{j}^{-1}\right)^{1 / \alpha} \tag{10.34}
\end{equation*}
$$

where $x=\left(x_{1}, \ldots, x_{n}\right)$. As in $\S 9$ we define a new scalar product on $\Lambda_{n, F}$ by

$$
\begin{equation*}
\langle f, g\rangle_{n}^{\prime}=\frac{1}{n!} \int_{T} f(z) \overline{g(z)} \Delta(z ; \alpha) d z \tag{10.35}
\end{equation*}
$$

in the notation of (9.10). From (9.5) we have
(10.36) The polynomials $P_{\lambda}^{(\alpha)}\left(x_{1}, \ldots, x_{n}\right)$, where $l(\lambda) \leqslant n$, are pairwise orthogonal for the scalar product (10.35).
Also from (9.6) we have, on passing to the limit as $(q, t) \rightarrow_{\alpha}(1,1)$,

$$
\begin{equation*}
\left\langle P_{\lambda}^{(\alpha)}, Q_{\lambda}^{(\alpha)}\right\rangle_{n}^{\prime}=c_{n} \prod_{s \in \lambda} \frac{n+a^{\prime}(s) \alpha-l^{\prime}(s)}{n+\left(a^{\prime}(s)+1\right) \alpha-l^{\prime}(s)-1} \tag{10.37}
\end{equation*}
$$

where

$$
c_{n}=\frac{1}{n!} \int_{T} \Delta(z ; \alpha) d z
$$

Equivalently, by §9, Example 1(d),

$$
\begin{equation*}
\left\langle P_{\lambda}^{(\alpha)}, P_{\lambda}^{(\alpha)}\right\rangle_{n}^{\prime}=\prod_{1<i<j<n} \frac{\Gamma\left(\xi_{i}-\xi_{j}+k\right) \Gamma\left(\xi_{i}-\xi_{j}-k+1\right)}{\Gamma\left(\xi_{i}-\xi_{j}\right) \Gamma\left(\xi_{i}-\xi_{j}+1\right)} \tag{10.38}
\end{equation*}
$$

where $k=\alpha^{-1}$ and $\xi_{i}=\lambda_{i}+k(n-i), 1 \leqslant i \leqslant n$.
As in $\S 9$, the formula (10.37) shows that the scalar product (1.4) is the limit as $n \rightarrow \infty$ of the scalar product $c_{n}^{-1}\langle f, g\rangle_{n}^{\prime}=\langle f, g\rangle_{n}^{\prime} /\langle 1,1\rangle_{n}^{\prime}$.

## Examples

1. (a) Since $J_{(n)}^{(\alpha)}=n!\alpha^{n} g_{n}^{(\alpha)}$, it follows from (10.5) that

$$
\theta_{\rho}^{(n)}(\alpha)=\frac{n!}{z_{\rho}} \alpha^{n-l(\rho)}
$$

and hence by (10.30) that also

$$
\theta_{\rho}^{\left(1^{(n)}\right.}(\alpha)=\varepsilon_{\rho} n!/ z_{\rho}
$$

(b) Deduce from (10.25) that

$$
\theta_{(n)}^{\lambda}(\alpha)=\Pi(\alpha(j-1)-(i-1))
$$

where the product is over the squares $(i, j) \in \lambda$ with the exception of $(1,1)$, and that

$$
\theta_{\left(21^{n-2}\right)}^{\lambda}(\alpha)=n\left(\lambda^{\prime}\right) \alpha-n(\lambda) .
$$

2. (a) Suppose that $f(q, t) \in \mathbf{Z}[q, t]$ is such that for some positive integer $m$ the limit

$$
L=\lim _{(q, t) \rightarrow \rightarrow_{\alpha}(1,1)} \frac{f(q, t)}{(1-t)^{m}}
$$

exists. Then $L \in \mathbf{Z}[\alpha]$. (We may write $f$ in the form

$$
f(q, t)=\sum_{r, s>0} a_{r s}(1-q)^{r}(1-t)^{s}
$$

with coefficients $a_{r s} \in \mathbf{Z}$, from which it follows that $a_{r s}=0$ if $r+s<m$ and that $L=\sum_{r+s-m} a_{r s} \alpha^{r}$.)
(b) From (8.19) and (10.27) we have

$$
\theta_{\rho}^{\lambda}(\alpha)=u_{\lambda}^{-1} \lim _{(q, t) \rightarrow \rightarrow_{\alpha}(1,1)} \frac{X_{\rho}^{\lambda}(q, t)}{(1-t)^{n-l(\rho)}}
$$

if $\lambda$ and $\rho$ are partitions of $n$, where $u_{\lambda}=\Pi m_{i}(\lambda)$ ! Hence the conjecture (8.18?), which implies that $X_{\rho}^{\lambda}(q, t) \in \mathbf{Z}[q, t]$, also implies that $\theta_{\rho}^{\lambda}(\alpha) \in \mathbb{Q}[\alpha]$.
(c) Let

$$
J_{\lambda}^{(\alpha)}=\sum_{\mu} v_{\lambda \mu}(\alpha) m_{\mu}
$$

so that, in the notation of $\S 8$, Example 11(a) we have

$$
v_{\lambda \mu}(\alpha)=\lim _{(q, t) \rightarrow \rightarrow_{a}(1,1)} \frac{v_{\lambda \mu}(q, t)}{(1-t)^{n}} .
$$

Since (8.18?) implies that $v_{\lambda \mu}(q, t) \in \mathbf{Z}[q, t]$, it also implies that $v_{\lambda \mu}(\alpha) \in \mathbf{Z}[\alpha]$.
(d) If $\lambda, \mu, \nu$ are partitions such that $|\lambda|=|\mu|+|\nu|=n$, we have

$$
\left\langle J_{\lambda}^{(\alpha)}, J_{\mu}^{(\alpha)} J_{\nu}^{(\alpha)}\right\rangle=\lim _{(q, t) \rightarrow \alpha}(1,1) \frac{\left\langle J_{\lambda}, J_{\mu} J_{\nu}\right\rangle_{q, t}}{(1-t)^{2 n}},
$$

Since (8.18?) implies that $\left\langle J_{\lambda}, J_{\mu} J_{\nu}\right\rangle_{q, t} \in \mathbf{Z}[q, t]$ (\$8, Example 11 (b)), it also implies that $\left\langle J_{\lambda}^{(\alpha)}, J_{\mu}^{(\alpha)} J_{\nu}^{(\alpha)}\right\rangle \in \mathbf{Z}[\alpha]$.
3. (a) The coefficient of $\tilde{m}_{\mu}$ in $J_{(n)}^{(a)}$ is

$$
c_{\mu} \prod_{s \in \mu}\left(a_{\mu}(s) \alpha+1\right)
$$

where $a_{\mu}(s)$ is the arm-length at $s \in \mu$, and $c_{\mu}$ is the number of decompositions of a set of $n$ elements into disjoint subsets containing $\mu_{1}, \mu_{2}, \ldots$ elements, as in Chapter I, §2, Example 11.
(b) The coefficient of $\tilde{m}_{\left(1^{n}\right)}=n!e_{n}$ in $J_{\lambda}^{(\alpha)}$ is equal to 1 , and the coefficient of $\tilde{m}_{\left(21^{n-2}\right)}$ in $J_{\lambda}^{\alpha}$ is

$$
\alpha n\left(\lambda^{\prime}\right)-n(\lambda)+\frac{1}{2} n(n-1) .
$$

4. (a) From §8, Example 4 it follows that

$$
(\alpha r+s) J_{(r)}^{(\alpha)} J_{(1)}^{(\alpha)}=s J_{(r \mid s-1)}^{(\alpha)}+r \alpha J_{(r-1 \mid s)}^{(\alpha)} .
$$

Deduce that

$$
J_{(r \mid s)}^{(\alpha)}=D(1,2, \ldots, s,-r \alpha,-(r-1) \alpha, \ldots,-\alpha)
$$

where in general $D\left(a_{1}, a_{2}, \ldots, a_{n}\right)$ denotes the determinant

$$
\left|\begin{array}{ccccc}
p_{1} & a_{1} & 0 & 0 & 0 \\
p_{2} & p_{1} & a_{2} & 0 & 0 \\
\vdots & \vdots & \vdots & \vdots & \vdots \\
p_{n} & p_{n-1} & p_{n-2} & p_{1} & a_{n} \\
p_{n+1} & p_{n} & p_{n-1} & p_{2} & p_{1}
\end{array}\right| .
$$

(b) Another formula for $J_{(r \mid s)}^{(\alpha)}$ is the following, due to P. Hanlon. Fix a standard tableau $T$ of hook shape $(r \mid s)$ and let $R, C$ denote respectively the row and column stabilizers of $T$ (so that $R \cong S_{r+1}$ and $C \cong S_{s+1}$ ). Then

$$
J_{(r \mid s)}^{(\alpha)}=\sum \varepsilon(v) \alpha^{r+1-c(u)} \psi(u v)
$$

summed over $(u, v) \in R \times C$, where $c(u)$ is the number of cycles in $u$, and $\psi$ is as in Chapter I, §7.
5. If $\lambda=\left(2^{r} 1^{s}\right)$ is a partition with two columns, the coefficient of $\tilde{m}_{\mu}$ in $J_{\lambda}^{(\alpha)}$, where $\mu=\left(2^{r-i} 1^{s+2 i}\right)$ and $i \geqslant 0$ is

$$
\binom{r}{i}(\alpha+s+i+1) \ldots(\alpha+s+r)
$$

6. Let $\Delta: \Lambda_{F} \rightarrow \Lambda_{F}$ be the derivation defined by

$$
\Delta p_{r}=r p_{r+1}
$$

for all $r \geqslant 1$. Show that

$$
J_{(n)}^{(\alpha)}=\left(p_{1}+\alpha \Delta\right)^{n}(1)
$$

and that

$$
J_{\left({ }^{n}(\alpha)\right.}^{(\alpha)}=\left(p_{1}-\Delta\right)^{n}(1) .
$$

7. As $(q, t) \rightarrow_{\alpha}(1,1)$, the $q$-integrals of $\S 9$, Examples 2 and 3 become ordinary (Lebesgue) integrals. It follows that (with $k=1 / \alpha$ ) the value of the integral

$$
I_{\lambda}=\frac{1}{n!} \int_{C_{n}} P_{\lambda}^{(1 / k)}(x) a_{\delta}(x)^{2 k} \prod_{i=1}^{n} x_{i}^{r-1}\left(1-x_{i}\right)^{s-1} d x
$$

where $C_{n}=[0,1]^{n}, x=\left(x_{1}, \ldots, x_{n}\right)$, and $d x=d x_{1} \ldots d x_{n}$, is

$$
I_{\lambda}=v_{\lambda}(k) \prod_{i=1}^{n} \frac{\Gamma\left(\lambda_{i}+r+k(n-i)\right) \Gamma(s+k(n-i))}{\Gamma\left(\lambda_{i}+r+s+k(2 n-i-1)\right)}
$$

where

$$
v_{\lambda}(k)=\prod_{1<i<j<n} \frac{\Gamma\left(\lambda_{i}-\lambda_{j}+k(j-i+1)\right)}{\Gamma\left(\lambda_{i}-\lambda_{j}+k(j-i)\right)} .
$$

(a) By making the change of variables $y_{i}=u x_{i}$ and then letting $u \rightarrow \infty$, deduce that

$$
\begin{aligned}
& \frac{1}{n!} \int_{0}^{\infty} \ldots \int_{0}^{\infty} P_{\lambda}^{(1 / k)}(y) a_{\delta}(y)^{2 k}\left(y_{1} \ldots y_{n}\right)^{r-1} e^{-y_{1}-\ldots-y_{n}} d y \\
& \quad=v_{\lambda}(k) \prod_{i=1}^{n} \Gamma\left(\lambda_{i}+r+k(n-i)\right) .
\end{aligned}
$$

(b) By making the change of variables $y_{i}=t x_{i}$ in (a), multiplying by $t^{5} e^{-t}$ and integrating from 0 to $\infty$ with respect to $t$, show that

$$
\begin{gathered}
\frac{1}{n!} \int_{0}^{\infty} \ldots \int_{0}^{\infty} P_{\lambda}^{(1 / k)}(x) a_{\delta}(x)^{2 k}\left(x_{1} \ldots x_{n}\right)^{r-1}\left(1+\sum x_{i}\right)^{-a-s} d x \\
\quad=\frac{\Gamma(s)}{\Gamma(a+s)} v_{\lambda}(k) \prod_{i=1}^{n} \Gamma\left(\lambda_{i}+r+k(n-i)\right)
\end{gathered}
$$

where $a=|\lambda|+n r+n(n-1) k$.
(c) In the integral of (b) above put $x_{i}=y_{i} /\left(1-\Sigma y_{j}\right)(1 \leqslant i \leqslant n)$, so that $1+\Sigma x_{i}=$ $\left(1-\Sigma y_{j}\right)^{-1}=u$ say. We have

$$
\partial x_{i} / \partial y_{j}=\delta_{i j} u+y_{i} u^{2}
$$

and therefore

$$
\begin{aligned}
\operatorname{det}\left(\partial x_{i} / \partial y_{j}\right) & =u^{2} \operatorname{det}\left(\delta_{i j}+y_{i} u\right) \\
& =u^{n}\left(1+u \sum y_{i}\right)=u^{n+1}
\end{aligned}
$$

Deduce from (b) that

$$
\begin{gathered}
\frac{1}{n!} \int_{D_{n}} P_{\lambda}^{(1 / k)}(y) a_{8}(y)^{2 k}\left(y_{1} \ldots y_{n}\right)^{r-1}\left(1-\sum y_{i}\right)^{s-1} d y \\
\quad=\frac{\Gamma(s)}{\Gamma(a+s)} v_{\lambda}(k) \prod_{i=1}^{n} \Gamma\left(\lambda_{i}+r+k(n-i)\right)
\end{gathered}
$$

where $a=|\lambda|+n r+n(n-1) k$ as before, and $D_{n}$ is the simplex in $\mathbf{R}^{n}$ bounded by the hyperplanes $x_{i}=0(1 \leqslant i \leqslant n)$ and $x_{1}+\ldots+x_{n}=1$.
8. Let

$$
J_{\lambda, \mu}(k)=\frac{1}{n!} \int_{C_{n}} P_{\lambda}^{(1 / k)}(x) P_{\mu}^{(1 / k)}(x) a_{\delta}(x)^{2 k} \prod_{i=1}^{n} x_{i}^{r-1}\left(1-x_{i}\right)^{k-1} d x,
$$

where (as in Example 7) $C_{n}=[0,1]^{n}, x=\left(x_{1}, \ldots, x_{n}\right), d x=d x_{1} \ldots d x_{n}$ is Lebesgue measure, and $\lambda, \mu$ are partitions of length $\leqslant n$. Then

$$
J_{\lambda, \mu}(k)=v_{\lambda}(k) v_{\mu}(k)(\Gamma(k))^{n} / \prod_{i, j=1}^{n}\left(\lambda_{i}+\mu_{j}+r+(2 n-i-j) k\right)_{k}
$$

where $v_{\lambda}, v_{\mu}$ are as in Example 7, and $(x)_{k}=\Gamma(x+k) / \Gamma(x)$. (See [K6] for a proof.)

## Notes and references

Jack's symmetric functions were first defined by the statistician Henry Jack in 1969 ([J1], [J2]). He showed that when $\alpha=1$ they reduce to the Schur functions, and conjectured that when $\alpha=2$ they should give the zonal polynomials (Chapter VII). Later, H. O. Foulkes [F7] raised the question of finding a combinatorial interpretation of Jack's symmetric functions. About ten years ago the author began to investigate their properties, taking as a starting point the differential operators of Sekiguchi [S9] (see §3, Example 3), and showed in particular [M5] that they satisfy (10.13), (10.14), and (10.17) (duality). Shortly afterwards R. Stanley [S25] advanced the subject further, and established the scalar product formula (10.16), the Pieri formula, the explicit expression as a sum over tableaux, and the specialization theorem (10.20). (Stanley worked with $J_{\lambda}^{(\alpha)}$ rather than $P_{\lambda}^{(\alpha)}$.)

At about the same time, K. Kadell was investigating generalizations of Selberg's integral [S10] and its extension by Aomoto [A6]: in this way he was led to introduce as integrands a family of symmetric polynomials, depending on a parameter $k$ and indexed by partitions, which he called Selberg polynomials, and which turned out to be precisely Jack's symmetric functions, with parameter $\alpha=1 / k$ [K5]. (The integral formula generalizing Selberg's integral is that given in Example 7 above.) In a different direction, R. Askey [A7] had proposed a $q$-analogue of Selberg's integral, and Kadell ([K3], conjecture 8) was led to conjecture the existence of ' $q$-Selberg polynomials' which would feature in a $q$-analogue of the integral formula above. In the event it turned out that these $q$-Selberg polynomials are our $P_{\lambda}(x ; q, t)$, and the $q$-integral formula is that of $\S 9$, Example 3.

For another method of construction of the $P_{\lambda}(x ; q, t)$, see B. Srinivasan [S22].

