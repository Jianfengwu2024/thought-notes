# Field Theories of Condensed Matter Physics Chap4-6


## 4 The renormalization group and scaling

### 4.1 Scale invariance

The renormalization group is a central conceptual framework for understanding the behavior of strongly coupled and critical systems. It was originally formulated in the context of perturbative quantum field theory (particularly in relation to quantum electrodynamics), and found its crisper and most powerful realization in the explanation of critical phenomena in statistical physics. The most important ideas derived from the renormalization group are the concepts of a fixed point and universality. These ideas, due primarily to Wilson and Kadanoff, in turn provided a definition of a quantum field theory outside the framework of perturbation theory. In this chapter we will present a brief exposition of the main ideas and tools of the renormalization group and their application to problems of interest in strongly correlated and quantum critical systems (Cardy, 1996).

Many problems in condensed matter physics can be described in terms of a Hamiltonian that is a sum of two terms, $H=H^{*}+H^{\prime}$. Equivalently, in terms of the action, we can write $S=S^{*}+S^{\prime}$, where the action $S$ is a function of some macroscopic number of degrees of freedom, which we will represent in terms of a field $\phi(x)$ and its derivatives (in space and time). The field $\phi$ may obey Fermi or Bose statistics, in which case it will be represented by a set of Grassmann or scalar (or vector) fields, depending on the case. Both in classical statistical mechanics and in a quantum field theory we can formally represent the system in terms of a path integral

$$
\begin{equation*}
\mathcal{Z}=\int \mathcal{D} \phi e^{-S(\phi)} \tag{4.1}
\end{equation*}
$$

In what follows we will work in imaginary time. In the following chapters we will discuss many systems that admit a representation of this form. The degrees of freedom may be spins (classical or quantum) or fermions, as well as gauge fields.

In its simplest representation the renormalization group is a transformation that maps a system with a set of coupling constants and a scale (representing the shortdistance or high-energy cutoff) to another equivalent system with a different set of ("renormalized") coupling constants and a different scale. This is done by a procedure known as a "block-spin" transformation (in the language of classical statistical mechanics), by which some of the degrees of freedom, representing the short-distance physics, are integrated out and a subsequent scale transformation is performed to restore the original scale (or units).

The field $\phi(x, t) \equiv \phi(x)$ has many Fourier components (in $D$-dimensional space-time)

$$
\begin{equation*}
\phi(x)=\int \frac{d^{D} k}{(2 \pi)^{D}} e^{i k \cdot x} \phi(k) \tag{4.2}
\end{equation*}
$$

The large-momentum (-frequency) components correspond to configurations with larger action than those with lower momentum $k \equiv(\omega, \vec{k})$. If the high- $(k, \omega)$ components, represented by $\phi_{>}(x)$, are integrated out, then we can find an effective action (or Hamiltonian) for the configurations $\phi_{<}(x)$ with lower $(k, \omega)$. In real space-time we are eliminating degrees of freedom at short distances, or rather we are defining configurations averaged over a short distance scale $b a$ ( $a$ is the lattice constant) or with wave vectors $|k|<\Lambda / b$ (where $\Lambda$ is a high-energy cutoff).

In most cases $S(\phi)$ will change upon a process of this sort

$$
\begin{equation*}
\mathcal{Z}=\int \mathcal{D} \phi e^{-S(\phi)}=\int \mathcal{D} \phi_{<} \mathcal{D} \phi_{>} e^{-S\left(\phi_{<}+\phi_{>}\right)} \tag{4.3}
\end{equation*}
$$

where

$$
\begin{equation*}
\phi=\phi_{<}+\phi_{>} \tag{4.4}
\end{equation*}
$$

Hence,

$$
\begin{equation*}
\mathcal{Z} \equiv \int \mathcal{D} \phi_{<} e^{-S_{\mathrm{eff}}\left(\phi_{<}\right)} \tag{4.5}
\end{equation*}
$$

where we have defined an effective action $S_{\text {eff }}$

$$
\begin{equation*}
e^{-S_{\mathrm{eff}}\left(\phi_{<}\right)} \equiv \int \mathcal{D} \phi_{>} e^{-S\left(\phi_{<}+\phi_{>}\right)} \tag{4.6}
\end{equation*}
$$

This is, formally, our "block-spin" transformation.
However, now we have a new short-distance cutoff $a^{\prime} \equiv b a$ (with $b>1$ ) or, equivalently, a high-energy cutoff $\Lambda^{\prime} \equiv \Lambda / b<\Lambda$. Thus, we need to rescale the lengths (and time) in order to restore the units. In order to compensate for the change in the definition of units, we rescale lengths and momenta as follows:

$$
\begin{equation*}
x^{\prime}=\frac{x}{b} \quad \text { or } \quad k^{\prime}=k b \tag{4.7}
\end{equation*}
$$

such that $\left|k^{\prime}\right|<\Lambda$ or $|x|^{\prime}>a$ back again.

Clearly many transformations of this type can be defined and the form of the effective action will depend on this definition. Nevertheless, these transformations must obey some basic principles. The most important one is that this procedure should be compatible with the underlying symmetries of the physical system. Thus, if the system has a tendency to become anisotropic (either in space or in spacetime) the rescaling will have to be consistent with this fact. For simplicity, in what follows we will assume that the rescaling is isotropic both in space and in spacetime. Thus, we are assuming that there will be an effective Lorentz invariance in the system of interest.

Suppose that we are able to find an action $S^{*}$ such that it remains invariant under the renormalization-group (RG) transformation:

$$
\begin{equation*}
S_{\mathrm{eff}}^{*}\left(\phi_{<}\right)=S^{*}(\phi) \tag{4.8}
\end{equation*}
$$

We will call this action a fixed point of the RG.
At a fixed point the action and the Hamiltonian reproduce themselves under an RG transformation. Thus a system at a fixed point has a new symmetry: scale invariance. This means that there can be no scales left in the problem. Therefore, a fixed-point action describes either
(1) a system with a vanishing correlation length, $\xi \rightarrow 0$, and hence a divergent energy gap, $E_{\mathrm{G}} \rightarrow \infty$, or
(2) a system with a divergent correlation length, $\xi \rightarrow \infty$, and hence a vanishing energy gap, $E_{\mathrm{G}} \rightarrow 0$.

Fixed points with vanishing correlation lengths (and divergent energy gaps) describe stable phases of matter. Conversely, fixed points with diverging correlation lengths (and vanishing energy gaps) describe systems at criticality (quantum or thermal), and thus correspond to phase transitions. We will see that fixed points with vanishing correlation lengths are stable under the action of all (local) perturbations, and are hence known as stable fixed points. In contrast, fixed points with divergent correlation lengths are unstable at least with respect to one local perturbation (or more), and are known as unstable fixed points.

Let us consider now a system close to a fixed point. Quite generally we can write the action of the system in the form

$$
\begin{equation*}
\left.S(\phi)=S^{*}(\phi)+\int d x^{D} \sum_{n} \lambda_{n} \phi_{n}(x)\right) \tag{4.9}
\end{equation*}
$$

where $\left\{\phi_{n}(x)\right\}$ is a complete set of operators defined in the fixed-point theory. Here $\left\{\lambda_{n}\right\}$ are the associated coupling constants. Under a renormalization-group transformation consisting of
(1) integrating out high-energy modes $\Lambda \rightarrow b \Lambda(b<1)$ and
(2) rescaling lengths $x \rightarrow b^{-1} x$
the action $S^{*}(\phi)$ remains invariant since it is a fixed point. The operators $\left\{\phi_{n}(x)\right\}$ transform irreducibly under rescalings as

$$
\begin{equation*}
\phi_{n}\left(x b^{-1}\right)=b^{\Delta_{n}} \phi_{n}(x) \tag{4.10}
\end{equation*}
$$

where $\Delta_{n}$ is the scaling dimension of this operator. Operators that transform irreducibly (i.e. homogeneously) under rescalings are called primary (scaling) fields. Then, under the action of the RG the perturbation transforms as

$$
\begin{equation*}
\int d x^{D} \sum_{n} \lambda_{n} \phi_{n}(x) \rightarrow \int d x^{D} \sum_{n} b^{-D+\Delta_{n}} \lambda_{n} \phi_{n}(x) \tag{4.11}
\end{equation*}
$$

Thus, the RG transformation is equivalent to a rescaling of the coupling constants

$$
\begin{equation*}
\lambda_{n}^{\prime}=\lambda_{n} b^{\Delta_{n}-D} \equiv \lambda_{n}(b) \tag{4.12}
\end{equation*}
$$

Since $b \rightarrow 1^{-}$, we can write $b=e^{-\delta \ell}$ and turn the transformation into a differential change of the coupling constants of terms of the beta function

$$
\begin{equation*}
\beta\left(\lambda_{n}\right)=\frac{\partial \lambda_{n}}{\partial \ell}=\left(D-\Delta_{n}\right) \lambda_{n}+\cdots \tag{4.13}
\end{equation*}
$$

where the ellipsis denotes higher-order contributions to the beta function that we will discuss shortly. This result, Eq. (4.13), is usually called the tree-level beta function.

Alternatively, we can define dimensionless coupling constants $\bar{\lambda}_{n}=\lambda_{n} a^{D-\Delta_{n}}$. We now ask how we have to change the dimensionless coupling constants as the UV cutoff changes, $\Lambda \rightarrow b \Lambda$ or $a \rightarrow b^{-1} a$, while keeping the dimensional couplings $\lambda_{n}$ fixed. For an infinitesimal change $a \rightarrow a+d a$ this can be expressed as the condition

$$
\begin{equation*}
a \frac{\partial \lambda_{n}}{\partial a}=0 \Rightarrow \beta\left(\bar{\lambda}_{n}\right)=\left.a \frac{\partial \bar{\lambda}_{n}}{\partial a}\right|_{\lambda_{n}}=\left(D-\Delta_{n}\right) \bar{\lambda}_{n}+O\left(\bar{\lambda}_{n}^{2}\right) \tag{4.14}
\end{equation*}
$$

From now on $\lambda_{n}$ will always denote dimensionless coupling constants, and we will always express the renormalization-group flows in terms of the changes of the dimensionless coupling constants. The physical reason for this is that dimensional parameters depend on the (arbitrary) choice of units.

We now see the following.

1. If $D-\Delta_{n}>0$, the dimensionless coupling $\lambda_{n}$ grows as the momentum scale decreases. In this case $\phi_{n}(x)$ is a relevant operator $\left(\Delta_{n}<D\right)$ and drives the system away from the fixed-point action $S^{*}$, into a phase characterized by a new (stable) fixed point.
2. If $D-\Delta_{n}<0$, the dimensionless coupling $\lambda_{n}$ shrinks as the momentum scale decreases. In this case $\phi_{n}(x)$ is an irrelevant operator $\left(\Delta_{n}>D\right)$, whose effects become asymptotically negligible at long distances and low energies.
3. If $D-\Delta_{n}=0$, to leading order, the dimensionless coupling $\lambda_{n}$ does not change as the momentum scale decreases. In this case $\phi_{n}(x)$ is a marginal operator $\left(\Delta_{n}=D\right)$. To assess its effects, a higher-order calculation needs to be done. If this operator remains exactly marginal, then it should be included in the fixedpoint action.

We will now see how this structure works in some simple examples of physical interest.

### 4.2 Examples of fixed points

### 4.2.1 The free-scalar-field-theory fixed point

A simple example of a fixed-point action is a free scalar field in $D$ dimensions. The case $D=2$, which represents either a classical statistical-mechanical system in two space dimensions or a quantum field theory in $(1+1)$ (Euclidean) dimensions, will be of special interest. In the next chapters we will see that this theory plays a key role in the theory of quantum antiferromagnets in one dimension and Luttinger liquids, which we discuss in Chapters 5 and 6. In classical statistical mechanics this is the theory of critical phenomena originally proposed by Landau (and Ginzburg) and eventually developed by Wilson and Fisher and by Kadanoff.

The action of a scalar field $\phi(x)$ in $D$ dimensions is

$$
\begin{equation*}
S(\phi)=\frac{1}{2} \int d^{D} x(\partial \phi)^{2}=\int^{\Lambda} \frac{d^{D} k}{(2 \pi)^{D}} \frac{k^{2}}{2}|\phi(k)|^{2} \tag{4.15}
\end{equation*}
$$

where we have also introduced the expression in terms of the Fourier components of the field. Here $\Lambda$ is the large-momentum (or short-distance) cutoff.

Let us now proceed to split the field into its slow and fast components,

$$
\begin{equation*}
\phi(x)=\phi_{<}(x)+\phi_{>}(x) \tag{4.16}
\end{equation*}
$$

where (in terms of a slicing parameter $b<1$ )

$$
\begin{equation*}
\phi_{<}(x) \equiv \int^{b \Lambda} \frac{d^{D} k}{(2 \pi)^{D}} \phi(k) e^{i k \cdot x} \tag{4.17}
\end{equation*}
$$

represents the slow components, and

$$
\begin{equation*}
\phi_{>}(x) \equiv \int_{b \Lambda}^{\Lambda} \frac{d^{D} k}{(2 \pi)^{D}} \phi(k) e^{i k \cdot x} \tag{4.18}
\end{equation*}
$$

represents the fast components. In terms of the Fourier transform of the slow and fast fields the action takes the form

$$
\begin{align*}
S_{\Lambda} & =S_{<}+S_{>} \\
& =\int^{b \Lambda} \frac{d^{D} k}{(2 \pi)^{D}} \frac{k^{2}}{2}\left|\phi_{<}(k)\right|^{2}+\int_{b \Lambda}^{\Lambda} \frac{d^{D} k}{(2 \pi)^{D}} \frac{k^{2}}{2}\left|\phi_{>}(k)\right|^{2} \tag{4.19}
\end{align*}
$$

where we have labeled the action with the cutoff $\Lambda$. Thus, for a free field (and only for a free field), the total action is the sum of the actions for the slow and fast modes independently. In this simple case we can integrate out the fast fields and obtain an effective action for the slow fields:

$$
\begin{equation*}
\int \mathcal{D} \phi_{>} e^{-S_{\Lambda}(\phi)}=\mathrm{constant} \times e^{-S_{b \Lambda}\left(\phi_{<}\right)} \tag{4.20}
\end{equation*}
$$

We now must make a scale transformation to restore the value of the cutoff to its original value:

$$
\begin{equation*}
x^{\prime}=b^{-1} x, \quad k^{\prime}=b k, \quad \phi\left(x^{\prime}\right)=b^{\Delta} \phi(x) \tag{4.21}
\end{equation*}
$$

where $\Delta$ is the scaling dimension of the field $\phi$. Thus, under a scale transformation,

$$
\begin{align*}
\int d^{D} x \frac{1}{2}\left(\frac{\partial \phi}{\partial \vec{x}}\right)^{2} & =\int d^{D} x^{\prime} b^{2-D} \frac{1}{2}\left(\frac{\partial \phi\left(\vec{x}^{\prime} b^{-1}\right)}{\partial \vec{x}^{\prime}}\right)^{2} \\
& =\int d^{D} x^{\prime} \frac{1}{2}\left(\frac{\partial \phi\left(\vec{x}^{\prime}\right)}{\partial \vec{x}^{\prime}}\right)^{2} \tag{4.22}
\end{align*}
$$

Thus, the action is invariant under scale transformation, provided that the scaling dimension of the field $\phi$ is $\Delta=(D-2) / 2$. The case $D=2$ is special in that $\phi$ has scaling dimension zero (i.e. it is dimensionless, and so are all powers of the field $\phi^{n}$ ).

Let us examine now simple perturbations at this fixed point. The mass term is the operator $\int d^{D} x\left(m^{2} / 2\right) \phi^{2}$, which is not invariant under rescalings, since the volume element scales as $\int d^{2} x \rightarrow d^{D} x^{\prime} b^{-D}$ and $\phi^{2} \rightarrow b^{2 \Delta} \phi^{2}$. Thus, the mass scales as $m^{\prime 2}=b^{2 \Delta-D} m^{2}=b^{-2} m^{2}$, and as $b$ decreases the "coupling" $m^{2}$ "flows" to larger values under renormalization.

Similarly, the couplings to higher-derivative operators decrease as $b$ decreases,

$$
\begin{equation*}
\int d^{D} x g\left(\partial^{2} \phi\right)^{2}=\int d^{D} x^{\prime} b^{2} g\left(\partial^{\prime 2} \phi^{\prime}\right)^{2} \tag{4.23}
\end{equation*}
$$

Hence $g^{\prime}=g b^{2}$, and we conclude that under the RG $g$ decreases as $b$ decreases. This is an irrelevant operator. Obviously, operators with higher derivatives are even
more irrelevant. This is consistent with the intuition that the effective-field theory at long distances must contain only operators with the smallest possible number of derivatives compatible with the symmetries of the system.

The same conclusions also follow simply from naive dimensional analysis. Thus, by demanding that the free-field action be dimensionless, we see that the units of the scalar field are $[\phi]=L^{-\Delta}$, where $\Delta=(D-2) / 2$ is the scaling dimension. Similarly, the mass $m$ has units of $L^{-1}$ (as it should). The same line of reasoning determines the scaling of interaction terms. Thus, demanding once again that this term also be dimensionless, we find $L^{D}\left[\lambda_{r}\right][\phi]^{r}=1$ Thus, the scaling dimension of the operator $\phi^{r}$ is $\Delta_{r}=r \Delta=r(D-2) / 2$. Hence, the units of its coupling constant are $\left[\lambda_{r}\right]=L^{-D+r \Delta}=L^{(r / 2)(D-2)-D}$, e.g. $\left[\lambda_{4}\right]=L^{D-4}$, and it is dimensionless at $D=4$. We can also write down the (tree-level) beta function for the (dimensionless) coupling $\lambda_{r}$ :

$$
\begin{equation*}
\beta\left(\lambda_{r}\right)=\left(D-\Delta_{r}\right) \lambda_{r}+O\left(\lambda_{r}^{2}\right) \tag{4.24}
\end{equation*}
$$

Therefore the free-massless-scalar-field fixed point is stable provided that $D-$ $\Delta_{r}<0$. However, since

$$
\begin{equation*}
D-\Delta_{r}=\frac{r-2}{2}\left(-D+\frac{2 r}{r-2}\right) \tag{4.25}
\end{equation*}
$$

the fixed point is stable only if $D>2 r /(r-2)$. In particular, the operator $\phi^{4}$ is irrelevant only for $D>4$ and the free-field fixed point is unstable for fewer than four dimensions.

### 4.2.2 The non-linear sigma model

In Chapter 7 we will discuss the case of a non-linear sigma model as the field theory of a quantum antiferromagnet, i.e. an $N$-component scalar field that satisfies the constraint $\vec{n}^{2}=1$. Owing to the constraint, this theory is no longer a free field. Also, the constraint forces the field $\vec{n}$ to be dimensionless. The action of the non-linear sigma model is

$$
\begin{equation*}
S=\frac{1}{2 g} \int d^{D} x\left(\partial_{\mu} \vec{n}\right)^{2} \tag{4.26}
\end{equation*}
$$

with $\mu=1, \ldots, D$. The only operator in this action has scaling dimension $\Delta=2$. Notice that, due to the symmetry, only derivative operators are allowed in this case, and operators with higher derivatives will correspondingly have a larger scaling dimension. By dimensional analysis we see that the coupling constant has units of [ $g$ ] $=L^{D-2}$, and hence it is dimensionless in $D=2$. The tree-level beta function for the coupling constant $g$ is $\beta(g)=-(D-2) g+\cdots$. Hence, dimensional
analysis predicts that the fixed point at $g \rightarrow 0$, the classical theory, describes a stable phase for $D>2$. We will discuss this problem in some detail in Chapter 7.

### 4.2.3 Anisotropic scaling

As we noted above, there are many circumstances in which space and time scale differently. One such example is the theory of a quantum ferromagnet that will be discussed in Chapter 7. There we will see that the effective action contains Berry-phase-like terms (that we refer to as Wess-Zumino terms) that are of first order in time derivatives, whereas the spatial dependence comes from terms with two space derivatives. Thus, in the case of a quantum ferromagnet time scales as two powers of length, $T \sim L^{2}$. This system has a dynamical critical exponent $z=2$. This behavior is manifest in the structure of the Landau-Lifshitz equation and in the dispersion of the magnons, i.e. Bloch waves.

Yet another system in which anisotropic scaling arises is quantum dimer models at criticality. In this problem, which will be discussed in Chapter 9, the effectivefield theory also has dynamical critical exponent $z=2$. However, in contrast to the case of the ferromagnet, this theory is time-reversal-invariant. Consequently the dynamics is manifest through operators that are quadratic in time derivatives. However, since these systems have spatially anisotropic phases, at quantum criticality their spatial dependence comes from operators that are quartic in space derivatives, which is why $z=2$. More generally, there are many systems in which spatial and temporal fluctuations scale with a non-trivial exponent $z \neq 1$. One example of this type of behavior is Fermi fluids at a nematic quantum critical point, which has $z=3$ (Oganesyan et al., 2001).

### 4.2.4 Scaling in Fermi liquids

A Fermi liquid is a system of fermions at finite density whose interactions, in many circumstances, with the notable exception of the case of one dimension, become very weak at low energies due to the kinematical constraints imposed by the existence of a Fermi surface. In this limit, the interacting system is smoothly connected to the physics of non-interacting fermionic quasiparticles. This is reflected in the simple scaling behavior that these systems exhibit and it is the essence of the Landau theory of the Fermi liquid (Baym and Pethick, 1991).

A system of non-interacting fermions is described by an action for the Fermi field whose kinetic energy is defined by the single-particle spectrum $\varepsilon(\vec{p})$. The Fermi surface is the locus of points $\{\vec{p}\}$ where $\varepsilon(\vec{p})=E_{\mathrm{F}}$, the Fermi energy. At low enough energies, i.e. close to the Fermi energy, the allowed momenta of the fermion states are restricted to being close to the Fermi surface and the energy of
these excitations differs little from $E_{\mathrm{F}}$. In this regime it is legitimate to approximate the single-particle spectrum by $\varepsilon(\vec{p})=v_{\mathrm{F}}\left(|\vec{p}|-p_{\mathrm{F}}\right)+\cdots$, where $v_{\mathrm{F}}$ is the Fermi velocity and $p_{\mathrm{F}}$ is the Fermi momentum (assuming, for simplicity, an isotropic Fermi surface). Thus, in this limit the energy and the momentum scale in the same way, and hence space and time scale in the same way as well (Polchinski, 1993; Shankar, 1994), $T \sim L$, and the dynamic critical exponent is $z=1$. Notice, however, that only the normal component of the momentum enters in the scaling, since the tangential components do not change the energy. In this regime the interactions between the quasiparticles become actually irrelevant (with the important exception of the Cooper channel, the BCS interaction). The generic irrelevance of essentially all interactions is the reason for the robustness of the Landau theory of the Fermi liquid.

### 4.2.5 The free-relativistic-fermion theory

Relativistic free-fermionic systems obey the Dirac equation as their equation of motion. In condensed matter physics interacting Dirac fermions appear naturally in the theory of one-dimensional Fermi systems such as Luttinger liquids. They also appear as topological excitations (or solitons) of one-dimensional antiferromagnets. Dirac fermions give a natural description of the low-energy electronic states in two-dimensional semi-metals made of carbon layers (graphene), and of the fermionic quasiparticles of d-wave superconductors and in flux phases (which will be discussed in subsequent chapters).

Dirac fermions are spinor fields. Dirac fermions in one and two space dimensions are two-component complex Fermi fields, whereas in three space dimensions they are four-component fields. Let $\psi_{\alpha}(x)$, with $\alpha=1,2$, denote a two-component Fermi field in $D=1+1$ and $D=2+1$ space dimensions. In $D=1+1$ dimensions, the two components correspond to right- and left-moving fermions. The Hamiltonian density for massless Dirac fermions in $D=1+1$ is

$$
\begin{equation*}
\mathcal{H}=v_{\mathrm{F}} \psi_{\alpha}^{\dagger}(x) i \sigma_{3}^{\alpha \beta} \partial_{x} \psi_{\beta}(x) \tag{4.27}
\end{equation*}
$$

where $\sigma_{3}$ is the (diagonal) $2 \times 2$ Pauli matrix. The single-particle spectrum has the relativistic form $E(p)=v_{\mathrm{F}} p$. In the massless (gapless) limit, the spectrum is linear. Hence, time and space scale the same way, $T \sim L$, as required by relativistic invariance: Dirac fermions have dynamic exponent $z=1$.

The action of a free Dirac field is

$$
\begin{equation*}
S=\int d^{2} x \bar{\psi}_{\alpha}(x) i \gamma_{\alpha \beta}^{\mu} \partial_{\mu} \psi_{\beta}(x) \tag{4.28}
\end{equation*}
$$

where we have used the Dirac $\gamma$-matrices, $\gamma_{0}=\sigma_{1}$ and $\gamma_{1}=-i \sigma_{2}$, and the notation $\bar{\psi}=\psi^{\dagger} \gamma^{0}$ (see Chapters 5 and 6 ). We have also used the convention that
repeated indices are summed. In this relativistic notation the Fermi velocity $v_{\mathrm{F}}$ (the "speed of light") is absorbed in a redefinition of the time coordinate as $x_{0}=v_{\mathrm{F}} t$ or, equivalently, set to 1 by an appropriate choice of units.

The theory of free massless Dirac fermions is scale-invariant. The only quantity with units in Eq. (4.27) is the velocity $v_{\mathrm{F}}$, which, as we said, can be set to 1 . It is straightforward to determine the scaling behavior of various local operators at this fixed point. By first generalizing the action of Eq. (4.28) to $D$ space-time dimensions, which now involve a set of $D$ anticommuting gamma matrices $\gamma_{\mu}$ (whose rank depends on the dimension), we see that the Dirac field must scale as $[\psi]=L^{-(D-1) / 2}$. It is easy to determine the scaling of simple local operators. The mass term, $\bar{\psi} \psi$, has scaling dimension $\Delta=D-1$, and the Dirac mass scales as $[m]=L^{-1}$, as expected. This scaling analysis shows that the Dirac current $j_{\mu}=\bar{\psi} \gamma_{\mu} \psi$ has scaling dimension $D-1$.

Local interactions of Dirac fermions have the form of four-fermion operators, such as $\left(\bar{\psi} \gamma_{\mu} \psi\right)^{2}$ and $(\bar{\psi} \psi)^{2}$, which have scaling dimension $\Delta=2(D-1)$. In particular, in $D=1+1$ dimensions, the current has dimension 1 and the fourFermi operators have dimension 2. Therefore, in $D=2$ space dimensions the four-fermion interactions are marginal and are irrelevant for $D>2$. The associated coupling constant $g$ scales as $[g]=L^{D-2}$. Hence, the tree-level beta function is

$$
\begin{equation*}
\beta(g)=-(D-2) g+O\left(g^{2}\right) \tag{4.29}
\end{equation*}
$$

and behaves similarly to the non-linear sigma model.
Thus, a theory of free massless Dirac fermions is a fixed point of the renormalization group. At this level this fixed point is marginally stable in $D=1+1$. Much as in the case of the non-linear sigma model, we will see that determining the actual stability of this fixed point requires us to take into account the effects of fluctuations which appear at order $O\left(g^{2}\right)$ in the beta function. On the other hand, for $D>2$ the free-massless-Dirac-fermion fixed point is stable under small local perturbations and defines a stable phase. Thus, for $D>2$ space-time dimensions a theory of relativistic fermions with local four-Fermi couplings is perturbatively stable (in the infrared) and has a phase transition to a phase with a non-vanishing mass gap at a critical value of the coupling constant (Wilson, 1973). An example of this is the case of graphene. For $D<4$ the free Dirac fixed point is unstable with respect to the coupling to a dynamical gauge field. The nature of the fixed point which controls the infrared behavior of this theory is not well understood.

### 4.3 Scaling behavior of physical observables

One powerful consequence of the renormalization group is that, provided the structure of fixed points is understood, it will enable us to understand how physical
observables behave in a physical system. This is the basis of the theory of critical phenomena, both in classical and in quantum-mechanical systems.

### 4.3.1 The correlation length

We will begin by considering first the behavior of the correlation length $\xi$ for a theory close to a fixed point. The distance to the fixed point is controlled by the (dimensionless) coupling constant $\lambda$ of a local operator of the theory. By dimensional analysis we can write $\xi$ in the form

$$
\begin{equation*}
\xi=a f(\lambda) \tag{4.30}
\end{equation*}
$$

where $f(\lambda)$ is a so-far-undetermined dimensionless function of the coupling constant; $a$ is the ultraviolet (UV) cutoff.

By demanding that physical dimensional quantities, such as the correlation length $\xi$, remain fixed (invariant) under the action of the renormalization group, we can derive a flow equation that will allow us to determine, in principle, the function $f(\lambda)$. Thus, the condition

$$
\begin{equation*}
\frac{\partial \xi}{\partial \ln a}=0=\frac{\partial}{\partial \ln a}(a f(\lambda)) \tag{4.31}
\end{equation*}
$$

leads to the differential flow equation for $f(\lambda)$

$$
\begin{equation*}
0=a f(\lambda)+a \frac{\partial f}{\partial \lambda} \frac{\partial \lambda}{\partial \ln a} \tag{4.32}
\end{equation*}
$$

where we recognize the presence of the (Gell-Mann-Low) beta function, $\beta(\lambda)=$ $a \partial \lambda / \partial a$ in the last term of Eq. (4.32). We can now write the flow equation as

$$
\begin{equation*}
0=f(\lambda)+\frac{\partial f}{\partial \lambda} \beta(\lambda) \tag{4.33}
\end{equation*}
$$

Flow equations of this type are known as Callan-Symanzik, or renormalizationgroup, equations.

It is trivial to solve these flow equations, if the beta function is known, since they are first-order partial differential equations. In this simple case we easily find

$$
\begin{equation*}
\frac{\partial \ln f}{\partial \lambda}=-\frac{1}{\beta(\lambda)} \tag{4.34}
\end{equation*}
$$

which implies that $f(\lambda)$ must be such that

$$
\begin{equation*}
\ln f(\lambda)=\mathrm{constant}-\int \frac{d \lambda^{\prime}}{\beta\left(\lambda^{\prime}\right)} \tag{4.35}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-092.jpg?height=139&width=728&top_left_y=201&top_left_x=467)

Figure 4.1 Schematic RG flow with a single relevant coupling constant. Here $\lambda^{*}$ is the fixed point. See the text for details.

By integrating between two values $\lambda$ and $\lambda_{0}$ of the coupling constant we obtain the following solution:

$$
\begin{equation*}
\ln \left(\frac{f(\lambda)}{f\left(\lambda_{0}\right)}\right)=-\int_{\lambda_{0}}^{\lambda} \frac{d \lambda^{\prime}}{\beta\left(\lambda^{\prime}\right)} \tag{4.36}
\end{equation*}
$$

We will now consider a theory with a fixed point at a particular value $\lambda^{*}$ of the dimensionless coupling constant. A fixed point is defined as the value $\lambda^{*}$ at which the beta function vanishes, $\beta\left(\lambda^{*}\right)=0$. See Figure 4.1.

Let us consider the system at two values of the dimensionless coupling constant $\lambda_{1}$ and $\lambda_{2}$, where the correlation length takes the values $\xi\left(\lambda_{1}\right)=a f\left(\lambda_{1}\right)$ and $\xi\left(\lambda_{2}\right)=a f\left(\lambda_{2}\right)$, respectively. Then, $f\left(\lambda_{1}\right)$ and $f\left(\lambda_{2}\right)$ have the form

$$
\begin{equation*}
f\left(\lambda_{1}\right)=f(\tilde{\lambda}) \exp \left(\int_{\lambda_{1}}^{\tilde{\lambda}} \frac{d \lambda}{\beta(\lambda)}\right) \tag{4.37}
\end{equation*}
$$

and

$$
\begin{equation*}
f\left(\lambda_{2}\right)=f(\tilde{\lambda}) \exp \left(\int_{\lambda_{2}}^{\tilde{\lambda}} \frac{d \lambda}{\beta(\lambda)}\right) \tag{4.38}
\end{equation*}
$$

where $\tilde{\lambda}$ is some other value of the coupling constant. Thus, the ratio of the correlation lengths $\xi\left(\lambda_{1}\right)$ and $\xi\left(\lambda_{2}\right)$ is determined by the change of the coupling constant:

$$
\begin{equation*}
\frac{\xi\left(\lambda_{1}\right)}{\xi\left(\lambda_{2}\right)}=\exp \left(\int_{\lambda_{1}}^{\tilde{\lambda}} \frac{d \lambda}{\beta(\lambda)}-\int_{\lambda_{2}}^{\tilde{\lambda}} \frac{d \lambda}{\beta(\lambda)}\right)=\exp \left(\int_{\lambda_{1}}^{\lambda_{2}} \frac{d \lambda}{\beta(\lambda)}\right) \tag{4.39}
\end{equation*}
$$

Therefore we find that

$$
\begin{equation*}
\xi\left(\lambda_{1}\right)=\xi\left(\lambda_{2}\right) \exp \left(\int_{\lambda_{1}}^{\lambda_{2}} \frac{d \lambda}{\beta(\lambda)}\right) \tag{4.40}
\end{equation*}
$$

Close enough to the fixed point at $\lambda^{*}$, we can approximate the beta function as

$$
\begin{equation*}
\beta(\lambda)=\beta^{\prime}\left(\lambda^{*}\right)\left(\lambda-\lambda^{*}\right)+O\left(\left(\lambda-\lambda^{*}\right)^{2}\right) \tag{4.41}
\end{equation*}
$$

where $\beta^{\prime}\left(\lambda^{*}\right)=(d \beta / d \lambda)\left(\lambda^{*}\right)$ is the slope of the beta function at the fixed point. If we take $\left|\lambda_{1}-\lambda^{*}\right| \ll \lambda^{*}$ to be very close to the fixed point and $\left|\lambda_{2}-\lambda^{*}\right| \approx \lambda^{*}$ at some finite distance from it, Eq. (4.39) becomes

$$
\begin{align*}
\xi\left(\lambda_{1}\right) & =\xi\left(\lambda_{2}\right) \exp \left(\int_{\lambda_{1}}^{\lambda_{2}} \frac{d \lambda}{\beta^{\prime}\left(\lambda^{*}\right)\left(\lambda-\lambda^{*}\right)+\cdots}\right) \\
& =\xi\left(\lambda_{2}\right) \exp \left[\frac{1}{\beta^{\prime}\left(\lambda^{*}\right)} \ln \left(\frac{\lambda_{2}-\lambda^{*}}{\lambda_{1}-\lambda^{*}}\right)+\cdots\right] \\
& =\xi\left(\lambda_{2}\right)\left(\frac{\lambda_{2}-\lambda^{*}}{\lambda_{1}-\lambda^{*}}\right)^{1 / \beta^{\prime}\left(\lambda^{*}\right)}(1+\cdots) \tag{4.42}
\end{align*}
$$

If the operator with coupling constant $\lambda$ is a relevant operator, then the slope of the beta function must be positive, $\beta^{\prime}\left(\lambda^{*}\right)>0$. In this case, provided that this relevant operator drives the system to a phase with a finite correlation length, which we can take to be $\xi\left(\lambda_{2}\right) \approx a$, Eq. (4.42) implies that the correlation length $\xi(\lambda)$ must diverge with a power law as the fixed point is approached, $\lambda \rightarrow \lambda^{*}$,

$$
\begin{equation*}
\xi(\lambda) \approx a\left|\frac{\lambda_{2}-\lambda^{*}}{\lambda-\lambda^{*}}\right|^{\nu} \tag{4.43}
\end{equation*}
$$

where

$$
\begin{equation*}
v=\frac{1}{\beta^{\prime}\left(\lambda^{*}\right)} \tag{4.44}
\end{equation*}
$$

is the universal critical exponent of the correlation length. By universal we mean that $v$ is independent of the microscopic physics of the systems and, in particular, of the choice of the short-distance cutoff $a$. In conclusion, the correlation length must diverge $\xi(\lambda) \rightarrow \infty$ as the fixed point is approached $\lambda \rightarrow \lambda^{*}$ with a universal critical exponent $\nu$.

### 4.4 General consequences of scale invariance

We will now discuss some general and important properties of a theory at a fixed point. We noted before that at a fixed point the system becomes scale-invariant, a new symmetry that holds precisely only at the fixed point. We will also assume that the system is spatially homogeneous and isotropic. In what follows we will assume that at this fixed point the correlation length is infinite, $\lim _{\lambda \rightarrow \lambda^{*}} \xi(\lambda)=\infty$ and hence is much bigger than the short-distance cutoff $a$ (the lattice spacing). In this regime we must be able to replace the lattice system with an effective-field theory without a lattice, i.e. we have effectively a continuum system. In quantum field theory, a system with these properties is said to be a conformal field theory.

In this discussion we will adopt a heuristic approach and we will not give a formal proof of a number of (important!) properties that will prove to be very useful. Many of these proofs (and arguments) can be found in the literature, see
e.g. Polyakov (1987) and Cardy (1996). However, we will need these properties in order to show the generality of the approach that is used.

Let $\left\{\phi_{n}(\vec{r})\right\}$ be a set of operators of a system at a fixed point with a scaleinvariant action $S^{*}$. Here $n$ is a set of labels that depends on the system. We will assume that under scale transformations these operators transform as $\phi_{n}(b \vec{r})=$ $b^{-\Delta_{n}} \phi_{n}(\vec{r})$. Operators that transform irreducibly under scale transformations are called primary operators (or fields). The transformation property of the operators under scale transformations dictates the transformation properties of their correlation functions. Thus, scale invariance of the action (and of the partition function) demands that under a global change of scale $\vec{r} \rightarrow b \vec{r}$ the correlation functions of all operators will transform simply under scale transformations. This means that all expectation values at the fixed point must be homogeneous functions of the coordinates. A function $F(x)$ is homogeneous of degree $k$ if, under a scale transformation of its variables $x \rightarrow b x$, it transforms as $F(b x)=b^{k} F(x)$.

### 4.4.1 Scale invariance and correlation functions

Let us now apply this concept to the correlation function of the operator $\phi_{n}(\vec{r})$ at a fixed point $S^{*}$. Below we will denote all expectation values at the fixed point as $\langle\ldots\rangle_{*}$. We will further assume that the operator is normal ordered at the fixed point, $\left\langle\phi_{n}(\vec{r})\right\rangle_{*}=0$, and that the (connected) correlation function decays at long separations $\left|\vec{r}-\vec{r}^{\prime}\right|$. Then, the assumption of translation, rotation, and scale invariance means that the correlator must have a power-law dependence of the distance $\left|\vec{r}-\vec{r}^{\prime}\right|$

$$
\begin{equation*}
\left\langle\phi_{n}(\vec{r}) \phi_{n}\left(\vec{r}^{\prime}\right)\right\rangle_{*}=\frac{1}{\left|\vec{r}-\vec{r}^{\prime}\right|^{2 \Delta_{n}}} \tag{4.45}
\end{equation*}
$$

where $\Delta_{n}$ is the scaling dimension of operator $\phi_{n}(\vec{r})$ at the fixed point, i.e. $\left[\phi_{n}\right]=$ $L^{-\Delta_{n}}$. Here $-2 \Delta_{n}$ is the degree of the correlator as a homogeneous function. We have normalized the operator so that the possible constant factor in the numerator is set to 1 .

The scaling dimension of a local operator can be regarded as a quantum number. Indeed, in treating scale invariance as a symmetry we are implicitly assuming that the operators can be chosen to transform irreducibly under these transformations, much as angular momentum labels the representations of the group of rotations, and describe how physical observables transform. More generally, scale transformations are a special case of the group of global conformal transformations. Systems that are homogeneous, isotropic, and scale-invariant are also invariant under general global conformal transformations. The operators of a system at a fixed point are then classified by the way they transform under all of these symmetries.

Much as in the case of the group of rotations, operators in a scale-invariant system obey a generalized orthogonality property. Namely, if we consider two operators $\phi_{n}(\vec{r})$ and $\phi_{m}\left(\vec{r}^{\prime}\right)$ with scaling dimensions $\Delta_{n}$ and $\Delta_{m}$, respectively, then the correlator at the fixed point must have the following form:

$$
\begin{equation*}
\left\langle\phi_{n}\left(\vec{x}_{1}\right) \phi_{m}\left(\vec{x}_{2}\right)\right\rangle_{*}=\frac{\delta_{\Delta_{n}, \Delta_{m}}}{\left|\vec{x}_{1}-\vec{x}_{2}\right|^{2 \Delta_{n}}} \tag{4.46}
\end{equation*}
$$

i.e. the correlation function of operators with different scaling dimensions vanishes. This orthogonality condition follows from the following simple observations. Translation and rotational invariance require that the correlator of Eq. (4.46) be a function only of the distance $\left|\vec{x}_{1}-\vec{x}_{2}\right|$. Scale invariance now requires that it be a homogeneous function of a distance, i.e. a power law. Thus it cannot be a separate function of each scaling dimension; the only solution is that the two scaling dimensions must be the same and that, otherwise, the correlation function must vanish. From a quantum-mechanical (or field-theory) perspective this relation states that the states created by the action of the operator $\phi_{n}(\vec{r})$ on the ground state are orthogonal to the states created by the action of $\phi_{m}\left(\vec{r}^{\prime}\right)$ on the same ground state if these operators transform differently under scale transformations, i.e. if their scaling dimensions are not equal.

Global scale invariance also constrains the form of three-point correlators. Let $\phi_{n}\left(\vec{x}_{1}\right), \phi_{m}\left(\vec{x}_{2}\right)$, and $\phi_{k}\left(\vec{x}_{3}\right)$ be three operators with scaling dimensions $\Delta_{n}$, $\Delta_{m}$, and $\Delta_{k}$, respectively. It can be shown that scale and conformal invariance require (Belavin et al., 1984; Polyakov, 1987) that the three-point function of these operators must have the form

$$
\begin{equation*}
\left\langle\phi_{n}\left(\vec{x}_{1}\right) \phi_{m}\left(\vec{x}_{2}\right) \phi_{k}\left(\vec{x}_{3}\right)\right\rangle_{*}=\frac{C_{n m k}}{\left|\vec{x}_{1}-\vec{x}_{2}\right|^{\Delta_{n m}}\left|\vec{x}_{2}-\vec{x}_{3}\right|^{\Delta_{m k}}\left|\vec{x}_{3}-\vec{x}_{1}\right|^{\Delta_{k n}}} \tag{4.47}
\end{equation*}
$$

where the exponents are

$$
\begin{align*}
\Delta_{n m} & =\Delta_{n}+\Delta_{m}-\Delta_{k} \\
\Delta_{m k} & =\Delta_{m}+\Delta_{k}-\Delta_{n}  \tag{4.48}\\
\Delta_{k n} & =\Delta_{k}+\Delta_{n}-\Delta_{m}
\end{align*}
$$

With the normalization we chose for the two-point functions, the constant $C_{n m k}$ in Eq. (4.47) is a universal amplitude .

### 4.4.2 The operator-product expansion

Let us consider now a general correlation function at a fixed point of the form $\left\langle\ldots \phi_{n}\left(\vec{x}_{n}\right) \ldots \phi_{m}\left(\vec{x}_{m}\right) \ldots\right\rangle^{*}$. We will say that the set of operators $\left\{\phi_{n}(\vec{x})\right\}$ is "complete" if inside a general expectation value of this type we can replace the
product of a pair of these operators by a series of terms involving operators of the same set, i.e.

$$
\begin{equation*}
\lim _{\vec{x}_{m} \rightarrow \vec{x}_{n}} \phi_{m}\left(\vec{x}_{m}\right) \phi_{n}\left(\vec{x}_{n}\right) \equiv \lim _{\vec{x}_{m} \rightarrow \vec{x}_{n}} \sum_{k} \frac{C_{n m k}}{\left|\vec{x}_{n}-\vec{x}_{m}\right|^{\Delta_{m}+\Delta_{n}-\Delta_{k}}} \phi_{k}\left(\frac{\vec{x}_{n}+\vec{x}_{m}}{2}\right) \tag{4.49}
\end{equation*}
$$

Here the limit is understood to mean that the distance $\left|\vec{x}_{n}-\vec{x}_{m}\right|$ between the operators $\phi_{n}$ and $\phi_{m}$ is much smaller than their distances from all other operators in the general expectation value. This identity is known as the operator productexpansion (or OPE). In particular, the terms of the OPE tell us how different operators fuse with another. Thus, the OPE can be understood as a set of fusion rules dictated by the scaling dimensions of the operators, $\left\{\Delta_{n}\right\}$, and by the coefficients $\left\{C_{n m k}\right\}$, which are known as the structure constants of the OPE, the universal amplitudes of the three-point function of the operators $\phi_{n}, \phi_{m}$, and $\phi_{k}$. The fusion of two fields $\phi_{n}$ and $\phi_{m}$, denoted by the operation $\star$, is summarized in the expression

$$
\begin{equation*}
\phi_{n} \star \phi_{m}=\sum_{k} C_{n m k} \phi_{k} \tag{4.50}
\end{equation*}
$$

### 4.5 Perturbative renormalization group about a fixed point

We will now see that the scaling dimensions of the operators and the structure constants of the OPE completely determine the form of the renormalization-group beta functions in the vicinity of this fixed point. Let $S$ be the action of a system close to a fixed point with action $S^{*}$ :

$$
\begin{equation*}
S=S^{*}+\delta S=S^{*}+\int d^{D} x \sum_{n} g_{n} a^{\Delta_{n}-D} \phi_{n}(\vec{x}) \tag{4.51}
\end{equation*}
$$

where, as before, $\left\{\Delta_{n}\right\}$ are the scaling dimensions of the operators $\left\{\phi_{n}\right\},\left\{g_{n}\right\}$ are dimensionless coupling constants, and $a \sim \Lambda^{-1}$ is the short-distance cutoff. We will assume that the perturbing operators $\left\{\phi_{n}(\vec{r})\right\}$ are primary and obey the properties we listed above.

We will now consider the effects of the perturbations contained in $\delta S$ on the partition function of the system close to the fixed point $S^{*}$ :

$$
\begin{equation*}
Z=\operatorname{tr} e^{-S(\phi)}=\operatorname{tr}\left[e^{-S^{*}(\phi)} e^{-\sum_{n} \int d^{D} x g_{n} a^{\Delta_{n}-D} \phi_{n}(\vec{x})}\right] \tag{4.52}
\end{equation*}
$$

where the trace indicates a sum (in the sense of a path integral) over the configurations (or histories) of the fields of the system. By expanding in powers of the couplings to low orders, we find

$$
\begin{align*}
\frac{Z}{Z^{*}}= & 1+\sum_{n} \int \frac{d^{D} x}{a^{D-\Delta_{n}}} g_{n}\left\langle\phi_{n}(\vec{x})\right\rangle^{*} \\
& +\frac{1}{2!} \sum_{n, m} \int \frac{d^{D} x_{1}}{a^{D-\Delta_{n}}} \int \frac{d^{D} x_{2}}{a^{D-\Delta_{m}}} g_{n} g_{m}\left\langle\phi_{n}\left(\vec{x}_{1}\right) \phi_{m}\left(\vec{x}_{2}\right)\right\rangle^{*} \\
& -\frac{1}{3!} \sum_{n m k} \int \frac{d^{D} x_{1}}{a^{D-\Delta_{n}}} \int \frac{d^{D} x_{2}}{a^{D-\Delta_{m}}} \int \frac{d^{D} x_{3}}{a^{D-\Delta_{k}}} \\
& \times g_{n} g_{m} g_{k}\left\langle\phi_{n}\left(\vec{x}_{1}\right) \phi_{m}\left(\vec{x}_{2}\right) \phi_{k}\left(\vec{x}_{3}\right)\right\rangle^{*}+\cdots \tag{4.53}
\end{align*}
$$

where

$$
\begin{equation*}
Z^{*} \equiv \operatorname{tr} e^{-S^{*}(\phi)} \tag{4.54}
\end{equation*}
$$

is the partition function at a fixed point $S^{*}$.
At the fixed point the correlators of the operators $\left\{\phi_{n}(x)\right\}$ acquire the scaling form of Eq. (4.46) and Eq. (4.47) and, as a result, the integrals that appear in each term of this expansion are typically singular. Two types of singularities are present: (a) long-distance or infrared (IR) divergences, which are cut off by a finite size $L$, and (b) short-distance or ultraviolet (UV) divergences, which are regulated by the short-distance cutoff $a$. In this form, the expansion formally looks like a partition function of a "gas" of "particles" located at coordinates $\left\{\vec{x}_{k}\right\}$, with the index of the operator $n$ labeling the different "species" of particles. This picture goes back to the formulation of the RG by Kosterlitz. We will work in the regime where the coordinates of these "particles" are separated from each other by distances large compared with the short-distance cutoff and small compared with the linear size of the system, $L \gg\left|x_{1}-x_{2}\right| \gg a$.

An RG transformation consists of (a) a change in the short-distance cutoff $a \rightarrow$ $b a$ (with $b>1$ ) and (b) a rescaling of all (dimensionless!) coupling constants to compensate for this change. In the process we will keep the partition function and the linear size of the system $L$ (the IR cutoff) fixed.

We first rescale the cutoff $a \rightarrow b a(b>1)$ and parametrize the change as $b=e^{\delta l}$ or, equivalently, $\delta l=\ln b$. (See Fig. 4.2.) Hence, $\delta l \rightarrow 0$ as $b \rightarrow 1$. We will change the UV cutoff $a$ by an amount $b$ in the integrals and we will compensate by changing the couplings while keeping $Z$ fixed. How do we change the coupling constants $g_{n}$ with $Z$ fixed? To proceed we note that the UV cutoff $a$ appears
(1) in the factors $a^{D-\Delta_{n}}$ in the action,
(2) as the cutoff in the integrals, and
(3) in the $L$ dependence $(L / a)$ of the integrals.

The effect of the change of the cutoff $a$ in the factors of the action is readily compensated for by a rescaling of the coupling constants $g_{n}$. Indeed, under a change
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-098.jpg?height=649&width=785&top_left_y=203&top_left_x=467)

Figure 4.2 Changing the cutoff $a$ by the annular region (shaded) of radial thickness a $\delta l$.
$a \rightarrow b a$ the factor involving the coupling constant $g_{n}$ changes as

$$
\begin{equation*}
\frac{g_{n}}{a^{D-\Delta_{n}}} \rightarrow \frac{g_{n}}{a^{D-\Delta_{n}} b^{D-\Delta_{n}}} \tag{4.55}
\end{equation*}
$$

For an infinitesimal change $\delta l=\delta a / a$, this change can be compensated for by a rescaling of the coupling constant $g_{n}$ :

$$
\begin{equation*}
g_{n} \rightarrow b^{D-\Delta_{n}} g_{n}=g_{n}\left(1+(\delta l)\left(D-\Delta_{n}\right)+\cdots\right) \tag{4.56}
\end{equation*}
$$

Hence, at this level, the change in the coupling constant $g_{n}$

$$
\begin{equation*}
g_{n} \rightarrow g_{n}+\left(D-\Delta_{n}\right) g_{n} \delta l+\cdots \tag{4.57}
\end{equation*}
$$

is dictated by the scaling dimension $\Delta_{n}$ and the dimensionality $D$. It is easy to see that this change is equivalent to the tree-level approximation to the beta function for $g_{n}$ that we discussed above.

Next we look at the effect of changing the UV cutoff $a$ in the integrals. The cutoff is brought into the integrals by restricting the integrations over the coordinates $\left\{\vec{x}_{j}\right\}$ to the range $\left|\vec{x}_{j}-\vec{x}_{k}\right|>a$. Thus, the integral over two of these coordinates, say $\vec{x}_{j}$ and $\vec{x}_{k}$, becomes modified as follows:

$$
\begin{align*}
& \int_{\left|\vec{x}_{j}-\vec{x}_{k}\right|>a(1+\delta l)} d^{D} x_{j} d^{D} x_{k} F\left(\vec{x}_{j}, \vec{x}_{k}\right) \\
& =\int_{\left|\vec{x}_{j}-\vec{x}_{k}\right|>a} d^{D} x_{j} d^{D} x_{k} F\left(\vec{x}_{j}, \vec{x}_{k}\right)-\int_{a(1+\delta l)>\left|\vec{x}_{j}-\vec{x}_{k}\right|>a} d^{D} x_{j} d^{D} x_{k} F\left(\vec{x}_{j}, \vec{x}_{k}\right) \tag{4.58}
\end{align*}
$$

The change we need to evaluate is then the integral over the annular region $a(1+$ $\delta l)>\left|\vec{x}_{j}-\vec{x}_{k}\right|>a$. We will now examine this in each term in the expansion of Eq. (4.53)

The first term of the series of Eq. (4.53) has no singular terms and is affected only by the change of the cutoff in the prefactors that we discussed above. Upon implementing this rescaling, we recover the original contribution to $Z$. In the second term, in addition to the prefactor rescaling, we get singular contributions in the two-point functions. Here, the change in the UV cutoff leads to the evaluation of the integral over an annular region. Inside each annular region we can compute the two-point function using the OPE, Eq. (4.49),

$$
\begin{align*}
& \frac{1}{2} \sum_{n, m} \int d^{D} x_{1} d^{D} x_{2} \frac{g_{n}}{a^{D-\Delta_{n}}} \frac{g_{m}}{a^{D-\Delta_{m}}}\left\langle\phi_{n}\left(\vec{x}_{1}\right) \phi_{m}\left(\vec{x}_{2}\right)\right\rangle^{*} \\
& \quad \equiv \frac{1}{2} \sum_{n, m, k} \int d^{D} x_{1} d^{D} x_{2} \frac{g_{n} g_{m}}{a^{2 D-\Delta_{n}-\Delta_{m}}} \frac{C_{n m k}\left\langle\phi_{k}\left(\frac{1}{2}\left(\vec{x}_{1}+\vec{x}_{2}\right)\right)\right\rangle^{*}}{\left|\vec{x}_{1}-\vec{x}_{2}\right|^{\Delta_{n}+\Delta_{m}-\Delta_{k}}+\cdots} \\
& \quad=\sum_{n m k} C_{n m k} a^{\Delta_{k}-\Delta_{n}-\Delta_{m}} g_{n} g_{m} \int d^{D} x\left\langle\phi_{k}(\vec{x})\right\rangle^{*} \frac{S_{D} a^{D} \delta l}{a^{2 D-\Delta_{n}-\Delta_{m}}}+\cdots \\
& \quad \equiv \frac{1}{2} \sum_{n, m} \sum_{k} g_{n} g_{m} C_{n m k} \int \frac{d^{D} x}{a^{D-\Delta_{k}}}\left\langle\phi_{k}(\vec{x})\right\rangle^{*} S_{D} \delta l \tag{4.59}
\end{align*}
$$

where $S_{D}=2 \pi^{D / 2} / \Gamma(D / 2)$ is the area of a hypersphere in $D$ dimensions, and $\Gamma(z)$ is the Euler gamma function.

From the form of Eq. (4.59), we see that the net effect of the second-order ("oneloop") contributions amounts to an additional rescaling (or renormalization) of the coupling constants

$$
\begin{equation*}
g_{k} \rightarrow g_{k}-\frac{1}{2} S_{D} \sum_{n, m} g_{n} g_{m} C_{n m k} \delta l+\cdots \tag{4.60}
\end{equation*}
$$

It is straightforward to see that this repeats to all orders (cf. cubic terms and higher in Eq. (4.53)).

By combining the tree-level and one-loop rescalings we obtain a general form of the beta functions for all the coupling constants $\left\{g_{k}\right\}$ :

$$
\begin{equation*}
\frac{d g_{k}}{d l}=\left(D-\Delta_{k}\right) g_{k}-\frac{1}{2} S_{D} \sum_{n m} C_{n m k} g_{n} g_{m}+\cdots \tag{4.61}
\end{equation*}
$$

We can simplify this expression by absorbing the phase-space factors in a further simple redefinition of the coupling constants, $g_{k} \rightarrow\left(2 / S_{D}\right) g_{k}$, and find the final
form of the one-loop beta functions

$$
\begin{equation*}
\beta\left(g_{k}\right)=\frac{d g_{k}}{d l}=\left(D-\Delta_{k}\right) g_{k}-\sum_{n m} C_{n m k} g_{n} g_{m}+\cdots \tag{4.62}
\end{equation*}
$$

We see that, in addition to the linear term which follows from knowledge of the scaling dimensions $\left\{\Delta_{k}\right\}$ (and the dimensionality $D$ ), the one-loop contribution amounts to quadratic (bilinear) terms in the coupling constants whose coefficients are given by the structure constants of the OPE, $\left\{C_{n m k}\right\}$. All one-loop beta functions of all perturbative RG transformations have this structure.

### 4.6 The Kosterlitz renormalization group

We will use this approach to derive the RG flow for the sine-Gordon (SG) model in $1+1$ dimensions. This is the Kosterlitz RG flow (Kosterlitz, 1974). As will be explained in Chapters 5 and 6, this RG appears in the theory of one-dimensional (1D) quantum antiferromagnets and Luttinger liquids. It was derived originally by Kosterlitz to explain the Kosterlitz-Thouless transition in two-dimensional (2D) classical superfluids and XY magnets (Kosterlitz and Thouless, 1973; José et al., 1977). An RG with the same structure was found some years earlier by Anderson and Anderson, Yuval, and Hamann in their work on the Kondo problem (Anderson, 1970; Anderson et al., 1970).

The SG model is a theory of a scalar field $\phi$ in $1+1$ dimensions whose Lagrangian density (in Euclidean space-time) is

$$
\begin{equation*}
\mathcal{L}=\frac{1}{2}(\partial \phi)^{2}+\frac{u}{a^{2}} \cos (\beta \phi) \tag{4.63}
\end{equation*}
$$

Here $u$ is the dimensionless coupling constant and $\beta$ is a (real) parameter. The first (free-field) term of the SG Lagrangian, Eq. (4.63), is invariant under shifts of the field, $\phi \rightarrow \phi+\alpha$, where $\alpha$ is arbitrary. The cosine term of the SG Lagrangian breaks this continuous symmetry to a discrete symmetry,

$$
\begin{equation*}
\phi \rightarrow \phi+2 \pi n R \tag{4.64}
\end{equation*}
$$

where $n$ is an integer and $R=1 / \beta$ is known as the "compactification radius," using a terminology borrowed from string theory. Alternatively, we can define a rescaled field $\varphi, \beta \phi=\varphi$, which has compactification radius 1. The SG (Euclidean) Lagrangian takes the form

$$
\begin{equation*}
\mathcal{L}=\frac{K}{2}(\partial \varphi)^{2}+\frac{u}{a^{2}} \cos \varphi \tag{4.65}
\end{equation*}
$$

where we introduced the stiffness $K=1 / \beta^{2}$. This form of the SG Lagrangian will be useful for our discussion of its behavior under scaling.

To construct a renormalization group transformation for the SG theory we will follow the approach discussed in the preceding sections. We will consider this problem in 2D Euclidean space, where it becomes equivalent to a problem in classical statistical mechanics. In a 2D Euclidean space-time it is convenient to express the Cartesian coordinates in terms of the complex coordinates $z=x+i y$ and the complex conjugate $\bar{z}=x-i y$.

The expansion of the partition function of the SG theory in powers of the coupling constant $g$ has the same form as Eq. (4.53). On writing the cosine as a sum of two vertex operators, $\cos \varphi=\frac{1}{2}\left(e^{i \varphi}+e^{-i \varphi}\right)$, we see that the equivalent gas of particles has now two "species" or charges, $\pm 1$, one for each type of vertex operator. On the other hand, since we are expanding about the fixed "point" (actually a fixed line, as we will see below) of the free massless scalar field in two Euclidean spacetime dimensions, the propagator is a logarithmic function of the distance, and the effective interaction between the charges is also logarithmic. Therefore, the equivalent system is a 2D two-component Coulomb gas at total charge neutrality with the partition function

$$
\begin{equation*}
Z_{\mathrm{CG}}^{(2)}=\sum_{\{m(\vec{r})= \pm 1\}}^{\prime} z^{\sum_{\vec{r}} m^{2}(\vec{r})} \exp \left(-\frac{1}{2 T_{\mathrm{eff}}} \sum_{\vec{r}, \vec{r}^{\prime}} m(\vec{r}) U_{\mathrm{eff}}\left(\left|\vec{r}-\vec{r}^{\prime}\right|\right) m\left(\vec{r}^{\prime}\right)\right) \tag{4.66}
\end{equation*}
$$

The effective interaction of the 2D Coulomb gas is

$$
\begin{equation*}
U_{\mathrm{eff}}(r)=\frac{1}{4 \pi} \ln \left(\frac{r}{a}\right) \tag{4.67}
\end{equation*}
$$

with an effective "temperature" $T_{\text {eff }}$ and "fugacity" $z$

$$
\begin{equation*}
T_{\mathrm{eff}}=K=\frac{1}{\beta^{2}}, \quad z=\frac{u}{2 a^{2}} \tag{4.68}
\end{equation*}
$$

Since the effective interaction diverges logarithmically at large distances, the weight of the configurations $\{m(\vec{r})\}$ that do not obey the charge-neutrality condition, $\sum_{\vec{r}} m(\vec{r})=0$, vanishes identically. The prime label on the sum of Eq. (4.66) indicates that the sum runs only over overall charge-neutral configurations. On the other hand, the effective interaction also diverges (logarithmically) at short distances and hence needs to be regularized. This is done by imposing a short-distance cutoff in the integrals, which, as in the preceding section, amounts to a "hard-core" condition at some short distance $a$. Thus we will cut off the integrals at that distance and absorb the short-distance behavior of the interaction in a redefinition of the fugacity.

This problem was first solved by Kosterlitz and Thouless (1973) in their theory of the thermal superfluid phase transition in two dimensions. In the superfluid case (as in the physically equivalent classical 2D $X Y$ model), the Coulomb
charges represent topologically non-trivial configurations known as vortices. In the SG theory (and in 1D antiferromagnets and Luttinger liquids) the Coulomb charges are instantons. This is the Kosterlitz-Thouless transition (which also describes the roughening transition of crystal surfaces). The general problem of the $D$-dimensional two-component Coulomb gas was solved (using a perturbative RG) by Kosterlitz (1977).

This system has two phases separated by a (Kosterlitz-Thouless) phase transition. For low $T_{\text {eff }} \leq T_{\mathrm{c}}$ (where $T_{\mathrm{c}}$ is an effective critical temperature), the logarithmic interaction forces the Coulomb charges to be rare and to be bound in neutral dipole configurations. This is the dielectric phase of the 2D neutral Coulomb gas, i.e. the " 2 D superfluid" phase. In contrast, for $T_{\text {eff }}>T_{\mathrm{c}}$ the Coulomb charges proliferate and the long-range Coulomb interaction becomes (Debye) screened. This is the plasma phase of the 2D Coulomb gas. This is the normal phase, with a finite correlation length, namely the screening length of the Coulomb gas.

Here we will use the OPE approach to the perturbative RG discussed in the preceding section. It requires us (as in Kosterlitz's analysis) to expand about a specific value of the stiffness $K$ where the cosine operator is marginal. We will see below how this physically intuitive picture works out in this approach.

The correlation function of the free field $\varphi$ can be expressed as the sum of a holomorphic function $G_{\mathrm{R}}(z)$ and an anti-holomorphic function $G_{\mathrm{L}}(\bar{z})$,

$$
\begin{equation*}
\langle\varphi(0,0) \varphi(\vec{x})\rangle \equiv G(\vec{x})=G_{\mathrm{R}}(z)+G_{\mathrm{L}}(\bar{z}) \tag{4.69}
\end{equation*}
$$

where

$$
\begin{equation*}
G_{\mathrm{R}}(z)=-\frac{1}{4 \pi K} \ln z \tag{4.70}
\end{equation*}
$$

and likewise for $G_{\mathrm{L}}(\bar{z})$. Similarly, the field $\varphi(x, y)$ can be decomposed into a sum of holomorphic $\varphi_{\mathrm{R}}$ and anti-holomorphic $\varphi_{\mathrm{L}}$ components,

$$
\begin{equation*}
\varphi(x, y) \equiv \varphi_{\mathrm{R}}(z)+\varphi_{\mathrm{L}}(\bar{z}) \tag{4.71}
\end{equation*}
$$

which satisfy

$$
\begin{equation*}
\partial_{\bar{z}} \varphi_{\mathrm{R}}=\partial_{z} \varphi_{\mathrm{L}}=0 \tag{4.72}
\end{equation*}
$$

and whose correlators are given by

$$
\begin{equation*}
\left\langle\varphi_{\mathrm{R}}(0) \varphi_{\mathrm{R}}(z)\right\rangle=G_{\mathrm{R}}(z), \quad\left\langle\varphi_{\mathrm{L}}(0) \varphi_{\mathrm{L}}(z)\right\rangle=G_{\mathrm{L}}(\bar{z}) \tag{4.73}
\end{equation*}
$$

Upon analytic continuation from 2D Euclidean space to $(1+1)$-dimensional Minkowski space-time, i.e. real time $i y \rightarrow-v t$ (with velocity $v$ ), we can identify the holomorphic component of the field with its right-moving component, which is
a function of $x-v t$, and the anti-holomorphic component with its left-moving component, which is a function only of $x+v t$. The holomorphic and anti-holomorphic components, $\varphi_{\mathrm{R}}$ and $\varphi_{\mathrm{L}}$, are known as chiral bosons and will play an important role in our discussion of several systems.

In order to construct an RG transformation we first need to determine the scaling dimensions of the operators of interest. We begin with the vertex operator $V_{n}(x)=$ $\exp (\operatorname{in\varphi }(x))$, whose correlation functions are

$$
\begin{equation*}
\left\langle e^{i n \varphi(0)} e^{-i n \varphi(\vec{x})}\right\rangle=\exp \left(-\frac{n^{2}}{2}\left\langle(\varphi(0)-\varphi(|\vec{x}|))^{2}\right\rangle\right) \tag{4.74}
\end{equation*}
$$

This expression has a formal singularity in the $G(0)$ and requires a regularization (or cutoff). We will introduce the regularized correlation function

$$
\begin{equation*}
G_{\mathrm{reg}}(x) \equiv-\frac{1}{4 \pi K} \ln \left(\frac{|\vec{x}|^{2}+a^{2}}{a^{2}}\right) \tag{4.75}
\end{equation*}
$$

where $a$ is the short-distance cutoff, and by virtue of which $G_{\text {reg }}(0)=0$. The correlation function of the vertex operators becomes

$$
\begin{align*}
\left\langle e^{i n \varphi(0)} e^{-i n \varphi(\vec{x})}\right\rangle & =e^{n^{2}\left(G_{\mathrm{reg}}(|\vec{x}|)-G_{\mathrm{reg}}(0)\right)} \\
& =\exp \left[-\frac{n^{2}}{4 \pi K} \ln \left(\frac{|\vec{x}|^{2}+a^{2}}{a^{2}}\right)\right] \\
& =\left(\frac{1}{|\vec{x}|}\right)^{n^{2} /(2 \pi K)}=\left(\frac{1}{z}\right)^{n^{2} /(4 \pi K)}\left(\frac{1}{\bar{z}}\right)^{n^{2} /(4 \pi K)} \tag{4.76}
\end{align*}
$$

where we have rescaled the operator to absorb the power of the cutoff $a$.
From this result we can read off the scaling dimension $\Delta_{n}$ of the vertex operator $V_{n}(\vec{x})$ to be

$$
\begin{equation*}
\Delta_{n}=\frac{n^{2}}{4 \pi K}=\frac{n^{2} \beta^{2}}{4 \pi} \tag{4.77}
\end{equation*}
$$

According to our general rules, the cosine operator $\frac{1}{2}\left(V_{1}+V_{-1}\right)$ is irrelevant if $\Delta_{1}>2$, relevant if $\Delta_{1}<2$, and marginal if $\Delta_{1}=2$. Hence, there is a critical value of the stiffness $K_{\mathrm{c}}=1 /(8 \pi)$ or, equivalently, $\beta_{\mathrm{c}}=1 / R_{\mathrm{c}}=\sqrt{8 \pi}$, at which the cosine operator is marginal. Since we are constructing a perturbative RG, we will have to assume that the stiffness $K$ is close to its critical value $K_{\mathrm{c}}$. This is the Kosterlitz-Thouless (KT) transition.

This theory has an exactly marginal operator for all values of $K$. To see this, let us compute the scaling dimension $\Delta_{0}$ of the (normal-ordered) operator, : $(\partial \varphi)^{2}: \equiv$ $(\partial \varphi)^{2}-\left\langle(\partial \varphi)^{2}\right\rangle$. We need to compute the correlation function

$$
\begin{equation*}
\left\langle:(\partial \varphi)^{2}(\vec{x})::(\partial \varphi)^{2}(\vec{y}):\right\rangle=\left(\frac{1}{\pi K}\right)^{2} \frac{1}{|\vec{x}-\vec{y}|^{4}} \tag{4.78}
\end{equation*}
$$

which tells us that its scaling dimension is $\Delta_{0}=2$. Hence, this is a marginal operator.

Since the free-field action $S_{*}=\int(K / 2)(\partial \varphi)^{2}$ is scale-invariant for all values of $K$, and since the scaling dimension of the vertex operator $O_{n}$ varies continuously with $K$, we conclude that this theory has a line of fixed points rather than an isolated fixed point. Notice that the scaling dimension of $(\partial \varphi)^{2}$ does not vary and hence it remains marginal.

Our next task is to compute the coefficients of the OPE. We begin with the marginal operator $O_{0}$. Since the fixed-point action is a free field, the three-point function of the operator : $(\partial \varphi)^{2}$ : with itself vanishes. It then follows that the OPE coefficient of this operator with itself also vanishes,

$$
\begin{equation*}
C_{0,0,0}=0 \tag{4.79}
\end{equation*}
$$

On the other hand, the OPE of the vertex operators $V_{n}(\vec{x})$ is

$$
\begin{align*}
& \lim _{\vec{y} \rightarrow \vec{x}}: V_{n}(\vec{x}):: V_{-n}(\vec{y}):=\frac{1}{|\vec{x}|^{2 \Delta_{n}}}-\frac{1}{|\vec{x}-\vec{y}|^{2 \Delta_{n}-2}} \frac{n^{2}}{4 K}:(\partial \varphi(\vec{x}))^{2}:+\cdots  \tag{4.80}\\
& \lim _{\vec{y} \rightarrow \vec{x}}: V_{n}(\vec{x}):: V_{m}(\vec{y}):=\frac{1}{|\vec{x}-\vec{y}|^{\Delta_{n}+\Delta_{m}-\Delta_{n+m}}}: V_{n+m}(\vec{x}):+\cdots \tag{4.81}
\end{align*}
$$

From Eq. (4.80) and Eq. (4.81), we see that the non-vanishing OPE coefficients $C_{n,-n, 0}$ and $C_{n, m,-(n+m)}$ are

$$
\begin{equation*}
C_{n,-n, 0}=-\frac{n^{2}}{4 K}=-\pi \Delta_{n}, \quad C_{n, m,-(n+m)}=1 \tag{4.82}
\end{equation*}
$$

In particular, Eq. (4.80) implies that there is a finite renormalization of the stiffness. On the other hand, since the scaling dimension of the vertex operators is a continuous function of the stiffness, there is also a non-linear feedback on their scaling behavior as well.

We can now derive our perturbative RG . We will consider a general perturbation of the form

$$
\begin{equation*}
\mathcal{L}_{\mathrm{int}}=u \cos (n \varphi(x))=\frac{u}{2}\left(V_{n}(x)+V_{-n}(x)\right) \tag{4.83}
\end{equation*}
$$

although in this chapter we are interested only in the case $n=1$. Since our procedure is perturbative, we will expand about the critical value of the stiffness $K_{n}=n^{2} /(8 \pi)$ at which the operators $V_{ \pm n}$ are marginal. Let us parametrize the distance to this critical value by $x(K)=2-\Delta_{n}(K)=2-n^{2} /(4 \pi K)$, which satisfies $x\left(K_{n}\right)=0$. The perturbative RG equations are

$$
\begin{equation*}
a \frac{d u}{d a}=\left(2-\Delta_{n}(K)\right) u+\cdots \tag{4.84}
\end{equation*}
$$

The OPE of the vertex operators $V_{ \pm n}$ generates a renormalization of the stiffness

$$
\begin{equation*}
a \frac{d K}{d a}=-4 \pi C_{n,-n, 0}\left(K_{n}\right) \frac{u^{2}}{4}=\frac{n^{2} \pi}{4 K} \tag{4.85}
\end{equation*}
$$

where the factor of $4 \pi$ arises from two contributions, a space phase factor and the definition of the stiffness. On the other hand, from the definition of the variable $x$, we have

$$
\begin{equation*}
a \frac{d x}{d a}=\left(\frac{n^{2}}{4 \pi K^{2}}\right) a \frac{d K}{d a}=\frac{n^{4}}{16 K^{3}} u^{2}+\cdots \tag{4.86}
\end{equation*}
$$

Near marginality, where these results are reliable, the RG beta functions, Eq. (4.84) and Eq. (4.86), can be recast in the more compact form

$$
\begin{align*}
& a \frac{d u}{d a}=x u+\cdots  \tag{4.87}\\
& a \frac{d x}{d a}=A(n)^{2} u^{2}+\cdots \tag{4.88}
\end{align*}
$$

where $A(n)^{2}=32 \pi^{2} / n^{2}$. Up to a redefinition of the coupling constant, these RG equations are known as the Kosterlitz renormalization group.

The RG flows of the SG theory are the solutions of the Kosterlitz RG equations and are shown in Fig. 4.3. With the sign conventions we are using the direction of
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-105.jpg?height=685&width=922&top_left_y=1270&top_left_x=382)

Figure 4.3 The Kosterlitz RG flow and phase diagram; $u$ is the SG dimensionless coupling constant and $x=2-n^{2} /(4 \pi K)$, where $K$ is the stiffness. The phase boundaries are the asymptotes $u= \pm x / A(n)$ for $x<0$. Here $P=A(n) \sqrt{|C|}$, $P^{\prime}=-A(n) \sqrt{|C|}, Q=\sqrt{|C|}$, and $Q^{\prime}=-\sqrt{|C|}$.
the flows is towards the infrared (long distances). It is straightforward to show that the RG trajectories are the hyperbolas

$$
\begin{equation*}
u^{2}-\frac{x^{2}}{A(n)^{2}}=C \tag{4.89}
\end{equation*}
$$

For $C>0$ these hyperbolas intersect the $u$ axis, whereas for $C<0$ they intersect the $x$ axis. The solutions of the RG equations are

$$
\begin{align*}
& x(\ell)=A(n) \sqrt{C} \tan (A(n) \sqrt{C} \ell), \quad u(\ell)= \pm \frac{\sqrt{C}}{\cos (A(n) \sqrt{C} \ell)}, \quad C>0 \quad(4.90  \tag{4.90}\\
& x(\ell)=A(n) \sqrt{|C|} \operatorname{coth}(A(n) \sqrt{|C|} \ell), \quad u(\ell)= \pm \frac{\sqrt{|C|}}{\sinh (A(n) \sqrt{|C|} \ell)}, \quad C<0 \tag{4.91}
\end{align*}
$$

whereas for $C=0$ they degenerate into the asymptotes $u= \pm x / A(n)$.
We will now discuss the case $n=1$, although (with some minor changes) the conclusions are general. The RG flow is clearly symmetric with respect to the $x$ axis. This is natural since the changing of the sign of the coupling constant $g \rightarrow-g$ can be compensated for by a shift of the field $\varphi \rightarrow \varphi+\pi$. Hence, it is sufficient to consider only the upper half-plane, $u \geq 0$. The most important feature of these flows is that for values of $u$ and $x$ located below or at the asymptote $u=-x / A(1)$ the cosine term in the Lagrangian is irrelevant and the system flows towards the stable line of fixed points at $u=0$ and $x \leq 0$. For values outside this region (including the unstable line $u=0$ and $x>0$ ) the cosine term is relevant and the system flows to large (and positive) values of $u$ and $x$, converging on the other asymptote, $u=x / A(1)$. Thus the SG theory describes two phases (see Fig. 4.3):
(a) a critical phase and (b) a massive phase.

1. In the critical phase all correlation functions exhibit power-law behavior with a non-universal exponent equal to twice the scaling dimension of the operator. The exponent is non-universal and varies continuously with the stiffness, reaching a universal value at the end of the fixed line at $x=0$ (i.e. at $K_{\mathrm{c}}=$ $1 /(8 \pi))$.
2. In the massive phase the cosine operator is relevant and the system flows to strong coupling. In this regime the continuous shift symmetry of the field is broken and (qualitatively) the field is pinned at values $2 \pi n(n \in \mathbb{Z})$. In this phase the fluctuations are massive and the correlation length is finite. In this system the way the correlation length $\xi$ scales is more complex than what we discussed in the preceding sections. Thus, along the unstable trajectory on the asymptote $u=$ $x / A(1)$, the correlation length diverges as $x \rightarrow 0^{+}$with an essential singularity $\xi(x) \sim \exp (1 / x)$, whereas away from the asymptote it has a different behavior
(still with an essential singularity!) given by $\xi(x) \sim \exp (A / \sqrt{|\delta x|})$, where $\delta x$ is the distance to the stable asymptote (the phase boundary of Fig. 4.3) and $A>0$ is a non-universal constant. These results follow from the solutions of the RG flow.
3. How do we know that the correlation length is finite in the regime in which the cosine operator becomes relevant? Or, which amounts to the same thing, that the 2D Coulomb gas has a plasma phase with a finite screening length? At the level of the perturbative RG we are implementing this is an assumption whose justification is beyond the reaches of perturbation theory. We know that this is correct for several reasons. One is that the (quantum) SG field theory is integrable and its spectrum (and scattering matrix) have been computed explicitly using a Bethe-ansatz approach similar to the one we will discuss in the next chapter. From the Bethe-ansatz results in SG theory (Zamolodchikov and Zamolodchikov, 1979; Faddeev, 1984) and in the (equivalent) massive Thirring model (Bergknoff and Thacker, 1979) and earlier semi-classical results (Dashen et al., 1975; Rajaraman, 1985), it is known that, in the regime in which the cosine operators become relevant, $\beta^{2}<8 \pi$, the spectrum of the SG theory is massive. It consists of a boson of (renormalized) mass $M$ (i.e. the fluctuations about any one of the classical ground states of the SG theory), which, as discussed above, generally vanishes as $M \sim \exp (-A / \sqrt{|\delta x|})$ as $\beta^{2} \rightarrow 8 \pi$ from below. In addition to these boson states, for $\beta^{2} \leq 4 \pi$ there is also a set of soliton states (and soliton bound states) with a finite mass $M_{n}$ given by

$$
\begin{equation*}
M_{n}=M \sin \left(n \frac{\pi \beta^{2} / 2}{\sqrt{1-\beta^{2} / 8 \pi}}\right), \quad n=1, \ldots<\frac{8 \pi}{\beta^{2}} \sqrt{1-\frac{\beta^{2}}{8 \pi}} \tag{4.92}
\end{equation*}
$$

We will see in Chapter 5 that abelian bosonization methods show that at $\beta^{2}=$ $4 \pi$ the SG theory is equivalent to a theory of massive free Dirac fermions.

This analysis implies that there is a finite mass (energy) gap in the spectrum and hence that the correlation length is finite. Notice that, as expected, the mass gap vanishes as $\beta^{2} \rightarrow 8 \pi$ (from below) Similarly, from the behavior of the lattice models of interest we know that in this regime the system flows to a phase with a finite energy gap and a finite correlation length.

We will see in Chapters 5 and 6 that the set of trajectories that are important (and therefore the scaling behavior) depends on the problem of interest.

## 5

## One-dimensional quantum antiferromagnets

In this chapter we will discuss the physical behavior of 1D quantum antiferromagnets. It is worthwhile to study them for several reasons: (a) in many cases we have exact solutions (which are lacking in higher dimensions), (b) they exhibit a wealth of ground states, including disordered phases, and (c) they are a natural testing ground for methods and approximations. We shall first discuss the spin one-half Heisenberg chain and later discuss its generalization to (a) higher spin- $S$ and (b) other symmetry groups.

### 5.1 The spin-1/2 Heisenberg chain

Consider the Heisenberg model on a one-dimensional chain of $N$ sites. The Hamiltonian is

$$
\begin{equation*}
H=J \sum_{n=1}^{N} \vec{S}(n) \cdot \vec{S}(n+1) \tag{5.1}
\end{equation*}
$$

where $J>0$. I will assume that $N$ is an even integer and that we have periodic boundary conditions. Much of what we know about this system comes from (a) the Bethe-ansatz solution for the ground state (Bethe, 1931) and excitation spectrum (Yang and Yang, 1969), (b) mapping to the sine-Gordon theory (Luther and Peschel, 1975), (c) non-abelian bosonization (Affleck, 1985), and (d) mapping to the sigma model (Haldane, 1983a, c).

The exact solution via Bethe ansatz is very peculiar to one-dimensional integrable systems and hence is not generalizable. The other methods are also very specific to one dimension but they are more generally applicable, and higherdimensional versions of them are currently being developed. Thus we shall concentrate mainly on them. The mapping to the sine-Gordon system is based on the abelian bosonization transformation (Lieb and Mattis, 1965; Coleman, 1975; Luther and Peschel, 1975; Mandelstam, 1975). In a deep sense, it is a particular
case of the non-abelian bosonization developed by Witten (1984) and by Polyakov and Wiegmann (1984), and applied to spin systems by Affleck (1985). The main advantage of all these approaches is that they are non-perturbative: they yield the exact behavior of the ground-state properties at long distances, and, in principle, one can find the low-energy spectrum. One important feature is the existence, in addition to spin waves, of soliton states. These states are highly extended configurations of spins that cannot be created locally and that comprise the lowest portion of the spectrum of these systems.

### 5.1.1 The Bethe-ansatz solution

I will not attempt to give a detailed description of the Bethe-ansatz solution, which is fairly technical. A good summary can be found in the Les Houches Lectures of 1982, in particular the articles by Faddeev (1984) and Lowenstein (1984).

Here I will review very quickly the method as given by Lowenstein. The main idea is to consider the wave function for a pure state of $N$ spins one-half, each labeled by an index $s(n)= \pm \frac{1}{2}(n=1, \ldots, N)$. The total spin of the system is $\vec{S}=\sum_{n=1}^{N} \vec{S}(n)$. We will consider states $\Psi(s(1), \ldots, s(n))$ in which $(N-M)$ spins are up $\left(+\frac{1}{2}\right)$ and $M$ are down $\left(-\frac{1}{2}\right)$. Thus, the total $z$-component of the spin is

$$
\begin{equation*}
S_{z} \Psi(s(1), \ldots, s(N))=\left(\sum_{n=1}^{N} s(n)\right) \Psi(s(1), \ldots, s(N)) \tag{5.2}
\end{equation*}
$$

with

$$
\begin{equation*}
\sum_{n=1}^{N} s(n)=\frac{N}{2}-M \tag{5.3}
\end{equation*}
$$

We shall denote by

$$
\begin{equation*}
\Psi(s(1), \ldots, s(N)) \equiv \phi\left(x_{1}, \ldots, x_{M}\right) \tag{5.4}
\end{equation*}
$$

a state with the $j$ th down spin located at the site $x_{j}\left(1 \leq x_{1} \leq \ldots \leq x_{j} \leq \ldots \leq\right.$ $\left.x_{M} \leq N\right)$. Thus, if $\Psi_{0}$ is the ferromagnetic state

$$
\begin{equation*}
\Psi_{0}=|\uparrow \ldots \uparrow\rangle \tag{5.5}
\end{equation*}
$$

the most general state with $M$ spins down has the form

$$
\begin{equation*}
\Psi=\sum_{\left\{x_{j}\right\}} \phi\left(x_{1}, \ldots, x_{M}\right) S^{-}\left(x_{1}\right) \ldots S^{-}\left(x_{M}\right) \Psi_{0} \tag{5.6}
\end{equation*}
$$

where $S^{-}(n)$ is the lowering operator at site $n$.

The Heisenberg model is translationally invariant and on a chain with periodic boundary conditions has the translation symmetry in which the $n$th site is identified with the $(N+n)$ th site. Thus we can look for a basis in which not only are $\vec{S}^{2}$ and $S_{z}$ diagonal but also the cyclic permutation operator $\tilde{P}$, given by

$$
\begin{equation*}
\tilde{P} \Psi(s(1), \ldots, s(N))=\Psi(s(N), s(1), \ldots, s(N-1)) \tag{5.7}
\end{equation*}
$$

is diagonal.

### 5.1.2 The basis functions

Bethe's method begins by first writing the Hamiltonian in terms of a spin-exchange operator $P_{n, m}$, where

$$
\begin{align*}
& P_{n, m} \Psi(s(1), \ldots, s(n), \ldots, s(m), \ldots, s(N)) \\
& \quad=\Psi(s(1), \ldots, s(m), \ldots, s(n), \ldots, s(N)) \tag{5.8}
\end{align*}
$$

in the form

$$
\begin{equation*}
H=J \sum_{n=1}^{N}\left(P_{n, n+1}-1\right) \tag{5.9}
\end{equation*}
$$

with periodic boundary conditions. Consider first a state with one spin down

$$
\begin{equation*}
\Psi\left(s_{1}, \ldots, s_{N}\right)=\sum_{p=1}^{N} \phi(p)|\uparrow \ldots \downarrow \ldots \uparrow\rangle \tag{5.10}
\end{equation*}
$$

where the spin at site $p$ is down.
By using the cyclic translation operator $\tilde{P}$ we see that its main effect is just to shift the location of the down spin by one. Thus an eigenstate of $\tilde{P}$ with eigenvalue $\mu$ should satisfy

$$
\begin{equation*}
\tilde{P} \phi(p)=\phi(p+1)=\mu \phi(p) \quad \text { for } \quad p=1, \ldots, N-1 \tag{5.11}
\end{equation*}
$$

and

$$
\begin{equation*}
\tilde{P} \phi(N)=\phi(1)=\mu \phi(N) \tag{5.12}
\end{equation*}
$$

Hence

$$
\begin{equation*}
\phi(p)=\mu^{p-1} \phi(1) \tag{5.13}
\end{equation*}
$$

and, if we set $\phi(1)=1$, we get

$$
\begin{equation*}
\phi(p)=\mu^{p-1} \tag{5.14}
\end{equation*}
$$

and in particular $\mu$ must satisfy

$$
\begin{equation*}
1=\phi(1)=\phi(N+1)=\mu^{N} \tag{5.15}
\end{equation*}
$$

i.e. it is an $N$ th root of unity.

Now, a state with one spin down can be a member either of the multiplet with highest total spin $N / 2$ or of the multiplet with total spin $N / 2-1$. In the latter case the state is the highest-weight state in the multiplet and satisfies

$$
\begin{equation*}
S^{+} \Psi=0 \tag{5.16}
\end{equation*}
$$

where

$$
\begin{equation*}
S^{+}=\sum_{n=1}^{N} S^{+}(n) \tag{5.17}
\end{equation*}
$$

Thus we get

$$
\begin{align*}
S^{+} \Psi & =\sum_{p=1}^{N} \phi(p) S^{+}|\uparrow \ldots \downarrow \ldots \uparrow\rangle \\
& =\sum_{p=1}^{N} \phi(p) S^{+}(p)|\uparrow \ldots \downarrow \ldots \uparrow\rangle \\
& =\left(\sum_{p=1}^{N} \phi(p)\right) \Psi_{0} \tag{5.18}
\end{align*}
$$

Using Eqs. (5.14) and (5.16), we obtain

$$
\begin{equation*}
0=\sum_{p=1}^{N} \phi(p)=\sum_{p=1}^{N} \mu^{p-1}=\frac{1-\mu^{N}}{1-\mu} \tag{5.19}
\end{equation*}
$$

Thus $\mu^{N}=1$ and $\mu \neq 1$. Hence we found $N-1$ members of the spin- $(N / 2-1)$ multiplet (the other members of the multiplet can be found by applying $S^{-}$). The case $\mu=1$ represents the state $S=N / 2$ which belongs to the multiplet of the ferromagnetic state.

If we now consider the case of $M$ spins down, we can still find states with $S=$ $S_{z}$. They satisfy

$$
\begin{equation*}
\tilde{P} \phi\left(p_{1}, \ldots, p_{M}\right)=\phi\left(p_{1}+1, \ldots, p_{M}+1\right)=\lambda \phi\left(p_{1}, \ldots, p_{M}\right) \quad\left(p_{M}<N\right) \tag{5.20}
\end{equation*}
$$

and

$$
\begin{equation*}
\tilde{P} \phi\left(p_{1}, \ldots, p_{M-1}, N\right)=\phi\left(1, p_{1}+1, \ldots, p_{M-1}+1\right)=\lambda \phi\left(p_{1}, \ldots, p_{M-1}, N\right) \tag{5.21}
\end{equation*}
$$

We look for wave functions that are products of single down-spin wave functions

$$
\begin{equation*}
\phi\left(p_{1}, \ldots, p_{M}\right)=\mu_{1}^{p_{1}-1} \ldots \mu_{M}^{p_{M}-1} \tag{5.22}
\end{equation*}
$$

By choosing

$$
\begin{equation*}
\lambda=\prod_{j=1}^{M} \mu_{j} \tag{5.23}
\end{equation*}
$$

we can satisfy Eq. (5.20). However, as it stands, this ansatz does not satisfy Eq. (5.21), but if we permute the order of the parameters $\mu_{1}, \ldots, \mu_{M}$ we can find a solution. Thus, Bethe introduced the Bethe-ansatz solution

$$
\begin{equation*}
\phi\left(p_{1}, \ldots, p_{M}\right)=\sum_{P \in \mathcal{S}_{M}} A_{P} \mu_{P 1}^{n_{1}} \ldots \mu_{P M}^{n_{M}} \tag{5.24}
\end{equation*}
$$

where $n_{j}=p_{j}-1$, and $P$ belongs to the permutation group $\mathcal{S}_{M}$ (i.e. $(P 1, \ldots, P M)$ is a permutation of $(1, \ldots, M))$. Now everything is consistent, provided that the identity

$$
\begin{equation*}
A_{P \tilde{Q}^{-1}} \equiv A_{P M, P 1, \ldots, P(M-1)}=A_{P} \mu_{P M}^{N} \tag{5.25}
\end{equation*}
$$

where $(\tilde{Q} 1, \tilde{Q} 2, \tilde{Q} 3, \ldots, \tilde{Q} M)=(2,3,4, \ldots, M, 1)$ holds. The demand that $\phi$ be a highest-weight state with $S=N / 2-M \equiv S_{z}$ yields the constraint (Lowenstein, 1984)

$$
\begin{equation*}
\frac{A_{P^{\prime}}}{A_{P}}=-\frac{2 \mu_{P(k+1)}-\mu_{P k} \mu_{P(k+1)}-1}{2 \mu_{P k}-\mu_{P k} \mu_{P(k+1)}-1} \tag{5.26}
\end{equation*}
$$

for all $k$ and for all pairs of permutations $P$ and $P^{\prime}$ such that $\left(P^{\prime} 1 \ldots P^{\prime} k P^{\prime}(k\right.$ $\left.+1) \ldots P^{\prime} M\right) \equiv(P 1 \ldots P(k+1) P k \ldots P M)$.

Define $\chi_{j}$,

$$
\begin{equation*}
\mu_{j}=\frac{\chi_{j}+i \pi / 2}{\chi_{j}-i \pi / 2} \tag{5.27}
\end{equation*}
$$

Then one finds

$$
\begin{equation*}
\frac{A_{P^{\prime}}}{A_{P}}=\frac{\chi_{P^{\prime} j}-\chi_{P j}+i \pi}{\chi_{P^{\prime} j}-\chi_{P j}-i \pi} \tag{5.28}
\end{equation*}
$$

By combining Eqs. (5.27) and (5.25) we get

$$
\begin{equation*}
\left(\frac{\chi_{P M}+i \pi / 2}{\chi_{P M}-i \pi / 2}\right)^{N}=\frac{A_{P M P 1 \ldots P(M-1)}}{A_{P 1 P 2 \ldots P M}} \tag{5.29}
\end{equation*}
$$

By using Eq. (5.28) repeatedly we obtain

$$
\begin{equation*}
\left(\frac{\chi_{P M}+i \pi / 2}{\chi_{P M}-i \pi / 2}\right)^{N}=\prod_{j=1}^{M-1}\left(\frac{\chi_{P M}-\chi_{P j}+i \pi}{\chi_{P M}-\chi_{P j}-i \pi}\right) \tag{5.30}
\end{equation*}
$$

Since this equation should be valid for all permutations $P$, we get the Bethe-ansatz equations

$$
\begin{equation*}
\left(\frac{\chi_{j}+i \pi / 2}{\chi_{j}-i \pi / 2}\right)^{N}=-\prod_{l=1}^{M}\left(\frac{\chi_{j}-\chi_{l}+i \pi}{\chi_{j}-\chi_{l}-i \pi}\right) \tag{5.31}
\end{equation*}
$$

Also we see that

$$
\begin{equation*}
\lambda^{N} \equiv \prod_{j}\left(\frac{\chi_{j}+i \pi / 2}{\chi_{j}-i \pi / 2}\right)^{N}=1 \tag{5.32}
\end{equation*}
$$

Thus, for all $M$, the eigenvalue of $\tilde{P}$ is an $N$ th root of unity. For a given value of $S=N / 2-M$, the Hilbert space with given $S$ and $\tilde{P}$ has a huge size. It is thus generally unlikely that this basis will diagonalize a randomly chosen Hamiltonian. It is now known that systems that can be diagonalized in this basis, such as the nearest-neighbor Heisenberg chain, have this property because they are completely integrable, i.e. obey an infinite number of conservation laws (Faddeev, 1984).

### 5.1.3 The spectrum

Let us now act with the Heisenberg Hamiltonian on a Bethe-ansatz wave function. The result is

$$
\begin{align*}
H \phi\left(p_{1}, \ldots, p_{M}\right)= & J \sum_{\substack{j=1 \\
p_{j} \neq p_{j+1}-1}}^{M} \phi\left(p_{1}, \ldots, p_{j}+1, \ldots, p_{M}\right) \\
& +J \sum_{\substack{j=1 \\
p_{j} \neq p_{j-1}+1}}^{M} \phi\left(p_{1}, \ldots, p_{j}-1, \ldots, p_{M}\right) \\
& +(N-2 M) J \phi\left(p_{1}, \ldots, p_{M}\right) \\
& +2 J \sum_{\substack{j=1 \\
p_{j} \neq p_{j+1}-1}}^{M} \phi\left(p_{1}, \ldots, p_{j}, \ldots, p_{M}\right)-N J \phi\left(p_{1}, \ldots, p_{M}\right) \tag{5.33}
\end{align*}
$$

The first and second terms come from acting with $\sum_{n} P_{n, n+1}$ on $\uparrow \downarrow$ and $\downarrow \uparrow$ pairs. The third and fourth terms come from acting with $\sum_{n} P_{n, n+1}$ on $\uparrow \uparrow$ and $\downarrow \downarrow$ pairs.

Using the Bethe ansatz, Eq. (5.24) and Eq. (5.31), we can put Eq. (5.33) into the form

$$
H \phi\left(p_{1}, \ldots, p_{M}\right)=J \sum_{j=1}^{M}\left[\mu\left(\chi_{j}\right)+\mu^{-1}\left(\chi_{j}\right)-2\right] \phi\left(p_{1}, \ldots, p_{M}\right)
$$

$$
\begin{align*}
& -J \sum_{j=1}^{M}\left[\phi\left(\ldots p_{j}+1, p_{j}+1 \ldots\right)+\phi\left(\ldots p_{j}, p_{j} \ldots\right)\right. \\
& \left.-2 \phi\left(\ldots p_{j}, p_{j+1} \ldots\right)\right] \tag{5.34}
\end{align*}
$$

The last term (in brackets) is found to vanish. Thus the Bethe-ansatz state, Eq. (5.24), is an eigenstate of the Heisenberg model with eigenvalue $E$ given by

$$
\begin{equation*}
E=J \sum_{j=1}^{M}\left[\mu\left(\chi_{j}\right)+\mu^{-1}\left(\chi_{j}\right)-2\right]=-J \sum_{j=1}^{M} \frac{\pi^{2}}{\chi_{j}^{2}+(\pi / 2)^{2}} \tag{5.35}
\end{equation*}
$$

We must now find solutions to the Bethe-ansatz equation, Eq. (5.31). Intuitively, if $J>0$ (an antiferromagnet), we expect the ground state to have $S_{z}=0$ ("Néel") and thus $M / N=\frac{1}{2}$. Let us assume that the solutions of the Bethe-ansatz equations are real roots $\chi_{j}$. By taking logarithms we can write the Bethe-ansatz equations in the form

$$
\begin{equation*}
2 N \tan ^{-1}\left(\frac{\chi_{j}}{\pi / 2}\right)-2 \sum_{i=1}^{M} \tan ^{-1}\left(\frac{\chi_{j}-\chi_{i}}{\pi}\right)=2 \pi I_{j} \tag{5.36}
\end{equation*}
$$

for $j=1, \ldots, M$ and where $I_{j}$ are integers (half-integers) for $N-M$ odd (even).
Let us now assume that $\left\{\chi_{j}\right\}$ is a set of real roots with $N-M$ odd. The function $J(\chi)$

$$
\begin{equation*}
J(\chi)=\frac{1}{2 \pi}\left(2 N \tan ^{-1}\left(\frac{\chi}{\pi / 2}\right)-2 \sum_{i=1}^{M} \tan ^{-1}\left(\frac{\chi-\chi_{i}}{\pi}\right)\right) \tag{5.37}
\end{equation*}
$$

is a monotonically increasing function of $\chi$. If $J$ happens to take the value of one of the integers $I_{i}, J^{-1}\left(I_{i}\right)=\chi$ will be equal to the corresponding root $\chi_{i}$. However, it may happen that for some integers the value of $\chi$ might not be in the set $\left\{\chi_{j}\right\}$. Such a $\chi$ is called a hole (not to be confused with the "holes" of a more general context). If the roots are closely spaced (i.e. their separation vanishes in the thermodynamic $N \rightarrow \infty$ limit), we should be able to define a distribution of roots and holes $\rho(\chi)$

$$
\begin{equation*}
\rho(\chi)=\frac{d J(\chi)}{d \chi} \tag{5.38}
\end{equation*}
$$

or, equivalently,

$$
\begin{equation*}
J(\chi)=J(-\infty)+\int_{-\infty}^{\chi} d \chi^{\prime} \rho\left(\chi^{\prime}\right) \tag{5.39}
\end{equation*}
$$

Now $d J / d \chi$ is given by differentiating Eq. (5.37),

$$
\begin{equation*}
\frac{d J}{d \chi}=\rho(\chi)=\frac{N / 2}{\chi^{2}+(\pi / 2)^{2}}-\sum_{j=1}^{M} \frac{1}{\left(\chi-\chi_{i}\right)^{2}+\pi^{2}} \tag{5.40}
\end{equation*}
$$

Let $\left\{\theta_{j}\right\}_{j=1 \ldots n}$ denote the positions of the holes. In the $N \rightarrow \infty$ limit the following approximation is valid:

$$
\begin{equation*}
\sum_{i=1}^{M} f\left(\chi_{i}\right)=\int_{-\infty}^{+\infty} d \chi \rho(\chi) f(\chi)-\sum_{i=1}^{n} f\left(\theta_{i}\right) \tag{5.41}
\end{equation*}
$$

where $n$ is the number of holes. By using these results we find the integral equation

$$
\begin{equation*}
\rho(\chi)+\int_{-\infty}^{+\infty} d \chi^{\prime} \frac{\rho\left(\chi^{\prime}\right)}{\left(\chi-\chi^{\prime}\right)^{2}+\pi^{2}}=\frac{N / 2}{\chi^{2}+(\pi / 2)^{2}}+\sum_{j=1}^{n} \frac{1}{\left(\chi-\theta_{j}\right)^{2}+\pi^{2}} \tag{5.42}
\end{equation*}
$$

Consider now the set $\left\{\chi_{1}, \ldots, \chi_{M}, \theta_{1}, \ldots, \theta_{n}\right\}$ of roots and holes and let $\xi_{k}$ denote the $k$ th element in this set, counting from left to right on the $\chi$ axis. This element is defined by

$$
\begin{equation*}
\int_{-\infty}^{\xi_{k}} \rho(\chi) d \chi=J\left(\xi_{k}\right)-J(-\infty)=I_{k}-\frac{M-N}{2} \tag{5.43}
\end{equation*}
$$

The integral equation is solved by taking a Fourier transform:

$$
\begin{equation*}
\rho(\chi)=\int_{-\infty}^{+\infty} \frac{d p}{2 \pi} e^{i p \chi} \tilde{\rho}(p) \tag{5.44}
\end{equation*}
$$

One finds the solution

$$
\begin{equation*}
\tilde{\rho}(p)=\tilde{\rho}_{0}(p)+\sum_{j=1}^{n} \frac{e^{-i p \theta_{j}-\frac{\pi|p|}{2}}}{2 \cosh (\pi p / 2)} \tag{5.45}
\end{equation*}
$$

with

$$
\begin{equation*}
\tilde{\rho}_{0}(p)=\frac{N / 2}{2 \cosh (\pi p / 2)} \tag{5.46}
\end{equation*}
$$

Thus

$$
\begin{equation*}
\rho(\chi)=\rho_{0}(\chi)+\sum_{j} \rho_{\mathrm{hole}}\left(\chi-\theta_{j}\right) \tag{5.47}
\end{equation*}
$$

and

$$
\begin{equation*}
\rho_{0}(\chi)=\frac{N}{2 \cosh \chi} \tag{5.48}
\end{equation*}
$$

The total number of roots $M$ in a state with $n$ holes is

$$
\begin{equation*}
M=\int_{-\infty}^{+\infty} d \chi \rho(\chi)-n=\tilde{\rho}(0)-n=\frac{N-n}{2} \tag{5.49}
\end{equation*}
$$

Since $M$ is an integer, $n$ must be even (odd) for $N$ even (odd). This state has the energy eigenvalue

$$
\begin{equation*}
E=-J \pi^{2} \int d \chi \frac{\sigma(\chi)}{\chi^{2}+(\pi / 2)^{2}} \tag{5.50}
\end{equation*}
$$

Here I introduced the density of roots for the Bethe-ansatz equations

$$
\begin{equation*}
\sigma(\chi)=\rho(\chi)-\sum_{i=1}^{n} \delta\left(\chi-\theta_{i}\right) \tag{5.51}
\end{equation*}
$$

In Fourier space, we get

$$
\begin{equation*}
E=-J \pi \int d p \tilde{\sigma}(-p) e^{-\frac{\pi|p|}{2}} \tag{5.52}
\end{equation*}
$$

with

$$
\begin{equation*}
\tilde{\sigma}(p)=\tilde{\rho}(p)-\sum_{i=1}^{n} e^{-i p \theta_{i}} \tag{5.53}
\end{equation*}
$$

We find the result

$$
\begin{equation*}
E=E_{0}+\sum_{i=1}^{n} E_{h}\left(\theta_{i}\right) \tag{5.54}
\end{equation*}
$$

where $E_{0}=-2 N J \ln 2$ is the ground energy state, and the "excitation energy" (i.e. that for "holes") is

$$
\begin{equation*}
E_{h}(\theta)=\frac{\pi J}{\cosh \theta} \tag{5.55}
\end{equation*}
$$

Thus, we can minimize the energy by choosing the solution with real roots and no holes (complex roots are irrelevant to this issue (Lowenstein, 1984)). The total spin $S$ for this state when $N$ is even is obtained from Eqs. (5.3) and (5.49)

$$
\begin{equation*}
S=\frac{N}{2}-M=0 \tag{5.56}
\end{equation*}
$$

Thus the ground state is a singlet $(S=0)$. The excitations are "holes" with energy $\pi J / \cosh \theta$. For a lattice with $N$ sites, $N$ even (odd), there is an even (odd) number of holes. A state with one hole constructed in this manner carries $S_{z}=+\frac{1}{2}$. The spin-reversed hole is found by acting with $S^{-}$on this state. These states are degenerate, as required by the $S U(2)$ symmetry.

The momentum of these states can be calculated by noting that the operator $\tilde{P}$ that translates the wave function by one lattice spacing is related to the total momentum $\bar{P}$ of the state by

$$
\begin{equation*}
\tilde{P} \phi\left(p_{1}, \ldots, p_{M}\right)=e^{i \bar{P}} \phi\left(p_{1}, \ldots, p_{M}\right) \tag{5.57}
\end{equation*}
$$

Before we found that the eigenvalue of $\tilde{P}$ was $\lambda$. Hence

$$
\begin{equation*}
\bar{P}=-i \ln \lambda=-i \sum_{j=1}^{M} \ln \mu_{j}=-i \sum_{j=1}^{M} \ln \left(\frac{\chi_{j}+i \pi / 2}{\chi_{j}-i \pi / 2}\right) \tag{5.58}
\end{equation*}
$$

We can also write

$$
\begin{equation*}
\bar{P}=-2 \sum_{j=1}^{M} \tan ^{-1}\left(\frac{2 \chi_{j}}{\pi}\right)+M \pi \tag{5.59}
\end{equation*}
$$

In terms of "holes" $\theta_{i}$ and the distribution $\rho(\chi)$ we can write $\bar{P}$ in the form

$$
\begin{equation*}
\bar{P}=\bar{P}_{0}+\sum_{i=1}^{n} \bar{P}_{i} \tag{5.60}
\end{equation*}
$$

where $\bar{P}_{0}$ is the total momentum of the ground state,

$$
\begin{equation*}
\bar{P}_{0}=-\int_{-\infty}^{+\infty} d \chi \rho_{0}(\chi) 2 \tan ^{-1}\left(\frac{2 \chi}{\pi}\right)+M \pi \tag{5.61}
\end{equation*}
$$

and $\bar{P}_{i}$ is the contribution from the $i$ th "hole" (see Eq. (5.45)),

$$
\begin{equation*}
\bar{P}_{i}=\int_{-\infty}^{+\infty} d \chi \int \frac{d p}{2 \pi} 2 \tan ^{-1}\left(\frac{2 \chi}{\pi}\right) \frac{e^{i p\left(\chi-\theta_{i}\right)}}{1+e^{-\pi|p|}} \tag{5.62}
\end{equation*}
$$

Since $\rho_{0}(\chi)$ is even (see Eq. (5.48)), the total momentum of the ground state is $(\bmod 2 \pi)$

$$
\begin{equation*}
\bar{P}_{0}=M \pi \tag{5.63}
\end{equation*}
$$

as predicted by Marshall's theorem (Marshall, 1955).
What is the momentum of the first excited state? From mean-field theory, which yields a Néel state, we expect that the lowest excited state should be a spin wave with wave vector $Q=\pi$ (i.e. momentum $\bar{P}=\pi$ ) and vanishing energy. From the excitation energy, Eq. (5.54), we learn that there are massless excitations (i.e. $E \rightarrow E_{0}$ ) if $\theta \rightarrow \pm \infty$. But, in this limit, $\bar{P}_{i}$ has the value

$$
\begin{align*}
\lim _{\theta_{i} \rightarrow \pm \infty} \bar{P}_{i} & =+\lim _{\theta_{i} \rightarrow \pm \infty} \int d \chi \int \frac{d p}{2 \pi} 2 \tan ^{-1}\left(\frac{2 \chi}{\pi}\right) \frac{e^{i p\left(\chi-\theta_{i}\right)}}{1+e^{-\pi|p|}} \\
& =+\lim _{\theta_{i} \rightarrow \pm \infty} \int d \chi \int \frac{d p}{2 \pi} 2 \tan ^{-1}\left(\frac{2}{\pi}\left(\chi+\theta_{i}\right)\right) \frac{e^{i p \chi}}{1+e^{-\pi|p|}} \\
& = \pm \pi \int d \chi \int \frac{d p}{2 \pi} \frac{e^{i p \chi}}{1+e^{-\pi|p|}} \\
& = \pm \pi \int d p \frac{\delta(p)}{1+e^{-\pi|p|}} \tag{5.64}
\end{align*}
$$

Thus we get

$$
\begin{equation*}
\lim _{\theta_{i} \rightarrow \pm \infty} \bar{P}_{i}= \pm \frac{\pi}{2} \tag{5.65}
\end{equation*}
$$

This result means that the lowest excited state of a chain with $N$ even, which has two "holes," has total momentum equal either to zero or to $\pi(\bmod 2 \pi)$. In fact we can view this state as the sum of two "single" particle states (i.e. "holes"), each with momenta $\pm \pi / 2$. In other words, this state is not a spin wave with momentum $\pi$. Rather, the system behaves as if its elementary excitations had momenta close to $\pm \pi / 2$. This resembles the physics of one-dimensional fermions on a half-filled chain. The Fermi "surface" is just two points, $k_{\mathrm{F}}= \pm \pi / 2$. The elementary excitations are particle-hole pairs with momenta close to the Fermi points. We will see below that this system, with purely bosonic degrees of freedom, does indeed have fermions in its spectrum.

### 5.2 Fermions and the Heisenberg model

### 5.2.1 The Jordan-Wigner transformation

At first sight it may appear to be obvious that there should be fermions in the spectrum of the Heisenberg model. After all, we derived the Heisenberg model as the strong-coupling limit of a purely fermionic system, namely the half-filled Hubbard model. However, the fermions found in the last section are not the "constituent" band (Hubbard) fermions. For one thing, these states carry no electric charge. The spin-up and spin-down species are only degenerate precisely at the Heisenberg isotropic point. Furthermore, it is not possible to write the spin operators $S^{ \pm}$as local bilinears in those fermions.

One may also argue that the states of the spin system can be viewed as a collection of bosons with hard cores: a spin can be flipped once only. The algebra of the Pauli matrices, on the other hand, seems to have mixed properties: they commute on different sites and they anti-commute on the same sites. The anticommutativity of the Pauli matrices guarantees that the bosons do indeed have hard cores.

More formally, let us imagine that we are going to use a set of basis vectors in which $S_{z} \equiv S_{3}$ is diagonal. We can also consider the raising and lowering operators, at each site $n, S^{ \pm}(n)$

$$
\begin{equation*}
S^{ \pm}(n)=S_{1}(n) \pm i S_{2}(n) \tag{5.66}
\end{equation*}
$$

where I am using the notation

$$
\begin{equation*}
S_{i} \equiv \frac{1}{2} \sigma_{i}, \quad i=1,2,3 \tag{5.67}
\end{equation*}
$$

and the $\sigma_{i} \mathrm{~s}$ are the three Pauli matrices

$$
\sigma_{1}=\left(\begin{array}{cc}
0 & 1  \tag{5.68}\\
1 & 0
\end{array}\right), \quad \sigma_{2}=\left(\begin{array}{cc}
0 & -i \\
i & 0
\end{array}\right), \quad \sigma_{3}=\left(\begin{array}{cc}
1 & 0 \\
0 & -1
\end{array}\right)
$$

The operators $S^{ \pm}(n)$ commute on different sites

$$
\begin{equation*}
\left[S^{+}(n), S^{+}(m)\right]=\left[S^{-}(n), S^{-}(m)\right]=\left[S^{+}(n), S^{-}(m)\right]=0 \tag{5.69}
\end{equation*}
$$

for $m \neq n$. But on the same sites they anti-commute

$$
\begin{gather*}
\left\{S^{+}(n), S^{-}(n)\right\}=1  \tag{5.70}\\
\left\{S^{+}(n), S^{+}(n)\right\}=\left\{S^{-}(n), S^{-}(n)\right\}=0 \tag{5.71}
\end{gather*}
$$

This last condition implies that, if $|F\rangle$ is an arbitrary state not annihilated by $S^{+}(n)$, then it is annihilated by $S^{+}(n)^{2}$

$$
\begin{equation*}
S^{+}(n)\left[S^{+}(n)|F\rangle\right]=0 \tag{5.72}
\end{equation*}
$$

In other words, $S^{+}(n)$ creates bosonic excitation at the $n$th site but it is not possible to have two such excitations at the same site. This is the hard-core condition.

Consider now the kink or soliton operators $K(n)$

$$
\begin{equation*}
K(n)=\exp \left(i \pi \sum_{j=1}^{n-1} S^{+}(j) S^{-}(j)\right) \tag{5.73}
\end{equation*}
$$

In terms of $S_{3}(n)$ we can write

$$
\begin{equation*}
K(n)=\exp \left(i \pi \sum_{j=1}^{n-1}\left(S_{3}(j)+\frac{1}{2}\right)\right) \equiv i^{n-1} \exp \left(i \pi \sum_{j=1}^{n-1} S_{3}(j)\right) \tag{5.74}
\end{equation*}
$$

Thus $K(n)$ is a unitary operator which, up to a phase factor, rotates the spin configurations by $\pi$ around the $z$ axis on all sites to the left of the $n$th site. Thus the state $\left.\backslash \frac{1}{2} \ldots \frac{1}{2}\right\rangle$, an eigenstate of $S_{1}$ on all sites, becomes

$$
\begin{equation*}
K(n)\left|\frac{1}{2} \ldots \frac{1}{2}\right\rangle=i^{n-1}\left|-\frac{1}{2} \ldots-\frac{1}{2}, \frac{1}{2} \ldots \frac{1}{2}\right\rangle \tag{5.75}
\end{equation*}
$$

where the last flipped spin is at the site $n-1$. The operator $K(n)$ is said to create a kink in the spin configuration. Clearly this operator cannot have a non-vanishing expectation value in any state exhibiting long-range order. On the other hand, it may have an expectation value on states without long-range order. For this reason these operators are usually called disorder operators (Kadanoff and Ceva, 1971;

Fradkin and Susskind, 1978). Consider now the operators $c^{\dagger}(n)$ and $c(n)$ obtained by flipping a spin and creating a kink at the same place (Jordan and Wigner, 1928):

$$
\begin{align*}
c(n) & \equiv K(n) S^{-}(n)=e^{i \pi \sum_{j=1}^{n-1} S^{+}(j) S^{-}(j)} S^{-}(n) r \\
c^{\dagger}(n) & \equiv S^{+}(n) K^{\dagger}(n)=S^{+}(n) e^{-i \pi \sum_{j=1}^{n-1} S^{+}(j) S^{-}(j)} \tag{5.76}
\end{align*}
$$

The following results are easy to prove (Lieb et al., 1961).
First of all,

$$
\begin{align*}
& c^{\dagger}(n) c(n)=S^{+}(n) K^{\dagger}(n) K(n) S^{-}(n) \\
& c(n) c^{\dagger}(n)=K(n) S^{-}(n) S^{+}(n) K^{\dagger}(n) \tag{5.77}
\end{align*}
$$

But the kink operator is unitary,

$$
\begin{equation*}
K^{\dagger}(n) K(n)=K(n) K^{\dagger}(n)=1 \tag{5.78}
\end{equation*}
$$

and, because $S^{ \pm}(n)$ and $K(n)$ commute, one finds

$$
\begin{align*}
& c^{\dagger}(n) c(n)=S^{+}(n) S^{-}(n)=\frac{1}{2}+S_{3}(n) \\
& c(n) c^{\dagger}(n)=S^{-}(n) S^{+}(n)=\frac{1}{2}-S_{3}(n) \tag{5.79}
\end{align*}
$$

Moreover, the hard-core condition $\left(S^{ \pm}\right)^{2}=0$ implies that the same property holds for the fermion operators,

$$
\begin{equation*}
\left(c^{\dagger}(n)\right)^{2}=(c(n))^{2}=0 \tag{5.80}
\end{equation*}
$$

What are the commutation relations obeyed by the operators $c^{\dagger}(n)$ and $c(m)$ ? Let us compute the products $c(n) c(m)$ and $c(m) c(n)$, say for $m>n$. Clearly $S^{-}(n)$ commutes with all the operators in $K(m)$ except for those at the site $j=n$, and therefore

$$
\begin{equation*}
S^{-}(n) K(m)=\prod_{j=1, j \neq n}^{m-1} e^{i \pi S^{+}(j) S^{-}(j)} S^{-}(n) e^{i \pi S^{+}(n) S^{-}(n)} \tag{5.81}
\end{equation*}
$$

By making use of the identity

$$
\begin{equation*}
e^{ \pm i \pi S^{+}(n) S^{-}(n)}=e^{ \pm i \pi\left(\frac{1}{2}+S_{3}(n)\right)}=-2 S_{3}(n) \tag{5.82}
\end{equation*}
$$

we get

$$
\begin{equation*}
S^{-}(n) K(m)=-K(m) S^{-}(n) \tag{5.83}
\end{equation*}
$$

since $\left\{S^{-}(n), S_{3}(n)\right\}=0$ on the same site. Thus

$$
\begin{align*}
c(n) c(m) & =K(n) S^{-}(n) K(m) S^{-}(m) \\
& =-K(n) K(m) S^{-}(n) S^{-}(m) \\
& =-K(m) S^{-}(m) K(n) S^{-}(n) \\
& =-c(m) c(n) \tag{5.84}
\end{align*}
$$

Similarly, we can also prove $(n \neq m)$

$$
\begin{align*}
c^{\dagger}(n) c(m) & =S^{+}(n) K^{\dagger}(n) K(m) S^{-}(m) \\
& =-K(m) S^{-}(m) S^{+}(n) K^{\dagger}(n) \\
& =-c(m) c^{\dagger}(n) \tag{5.85}
\end{align*}
$$

In summary, the operators $c^{\dagger}(n)$ and $c(n)$ obey canonical anticommutation relations

$$
\begin{equation*}
\{c(n), c(m)\}=\left\{c^{\dagger}(n), c^{\dagger}(m)\right\}=0 \tag{5.86}
\end{equation*}
$$

and

$$
\begin{equation*}
\left\{c(n), c^{\dagger}(m)\right\}=\delta_{n, m} \tag{5.87}
\end{equation*}
$$

Thus the operator $c^{\dagger}(n)(c(n))$ creates (destroys) a fermion at site $n$. These operators are highly non-local. The states created by $c^{\dagger}(n)$ are fermions. Conversely, we can also write the inverse of the Jordan-Wigner transformation:

$$
\begin{align*}
& S^{-}(n)=e^{-i \pi \sum_{j=1}^{n-1} c^{\dagger}(j) c(j)} c(n) \\
& S^{+}(n)=c^{\dagger}(n) e^{i \pi \sum_{j=1}^{n-1} c^{\dagger}(j) c(j)} \tag{5.88}
\end{align*}
$$

### 5.2.2 The Heisenberg chain: fermion representation

Let us apply these results to the Heisenberg model. In terms of $S^{+}$and $S^{-}$, the Heisenberg Hamiltonian (with anisotropy $\gamma$ ) is

$$
\begin{align*}
H= & \frac{1}{2} J \sum_{j=1}^{N}\left(S^{+}(j) S^{-}(j+1)+S^{-}(j) S^{+}(j+1)\right) \\
& +\gamma J \sum_{j=1}^{N}\left(S^{+}(j) S^{-}(j)-\frac{1}{2}\right)\left(S^{+}(j+1) S^{-}(j+1)-\frac{1}{2}\right) \tag{5.89}
\end{align*}
$$

For $\gamma=1$ we recover the isotropic Heisenberg model. The case $\gamma=0$ is known as the spin one-half $X Y$ model.

We can now use the Jordan-Wigner transformation, Eq. (5.88), to get

$$
\begin{align*}
S^{+}(j) S^{-}(j+1) & =c^{\dagger}(j) e^{-i \pi c^{\dagger}(j) c(j)} c(j+1) \\
& =c^{\dagger}(j)\left(1-2 c^{\dagger}(j) c(j)\right) c(j+1) \\
& =c^{\dagger}(j) c(j+1) \tag{5.90}
\end{align*}
$$

and

$$
\begin{align*}
S^{-}(j) S^{+}(j+1) & =c(j) e^{+i \pi c^{\dagger}(j) c(j)} c^{\dagger}(j+1) \\
& =c(j)\left(1-2 c^{\dagger}(j) c(j)\right) c^{\dagger}(j+1) \\
& =c(j) c^{\dagger}(j+1)-2 c(j) c^{\dagger}(j) c(j) c^{\dagger}(j+1) \\
& =c(j+1) c(j) \tag{5.91}
\end{align*}
$$

The Heisenberg Hamiltonian takes the simple form (Luther and Peschel, 1975)

$$
\begin{equation*}
H=\frac{J}{2} \sum_{j=1}^{N}\left(c^{\dagger}(j) c(j+1)+\text { h.c. }\right)+\gamma J \sum_{j=1}^{N}\left(n(j)-\frac{1}{2}\right)\left(n(j+1)-\frac{1}{2}\right) \tag{5.92}
\end{equation*}
$$

where $n(j)$ is the density (or occupation number) for spinless fermions

$$
\begin{equation*}
n(j)=c^{\dagger}(j) c(j) \tag{5.93}
\end{equation*}
$$

What boundary conditions do the $c(j)$ operators obey? Suppose that the spin problem has periodic boundary conditions, i.e.

$$
\begin{equation*}
S_{i}(N+1)=S_{i}(1) \quad \text { for } i=1,2,3 \tag{5.94}
\end{equation*}
$$

In the fermion case, the periodic boundary conditions on the spin degrees of freedom imply

$$
\begin{align*}
c(N+1) & =\exp \left(i \pi \sum_{j=1}^{N} S^{+}(j) S^{-}(j)\right) S^{-}(N+1) \\
& =\exp \left[i \pi \sum_{j=1}^{N}\left(\frac{1}{2}+S_{3}(j)\right)\right] S^{-}(1) \tag{5.95}
\end{align*}
$$

where

$$
\begin{equation*}
c(1) \equiv S^{-}(1) \tag{5.96}
\end{equation*}
$$

Thus, the boundary condition on the fermionic degrees of freedom is

$$
\begin{equation*}
c(N+1)=i^{N} e^{i \pi S_{3}} c(1) \tag{5.97}
\end{equation*}
$$

where $S_{3}$ is the total $z$-component of the spin. But $\sum_{j=1}^{N} S^{+}(j) S^{-}(j)$ is just the total fermion number $N_{\mathrm{F}}$, so $S_{3}$ and $N_{\mathrm{F}}$ are related by

$$
\begin{equation*}
S_{3}=\sum_{j=1}^{N} c^{\dagger}(j) c(j)-\frac{N}{2}=N_{\mathrm{F}}-\frac{N}{2} \tag{5.98}
\end{equation*}
$$

Hence, the $S_{3}=0$ sector maps into the half-filled sector for the fermions under the Jordan-Wigner transformation:

$$
\begin{equation*}
S_{3}=0 \Rightarrow N_{\mathrm{F}}=\frac{N}{2} \tag{5.99}
\end{equation*}
$$

provided that $N$ is even. Conversely, the state with $S_{3}=\frac{1}{2}$ has $N_{\mathrm{F}}=$ $(N+1) / 2$ provided that $N$ is odd. The boundary condition, Eq. (5.97), depends on the $z$-component of the total spin $S_{3}$ or, alternatively, on the total number of fermions $N_{\mathrm{F}}$

$$
\begin{equation*}
c(N+1)=e^{i \pi N_{\mathrm{F}}} c(1) \tag{5.100}
\end{equation*}
$$

For a lattice with $N$ even and $S_{3}=0$ (i.e. $N_{\mathrm{F}}=N / 2$ ) we get periodic (antiperiodic) boundary conditions if $N / 2$ is even (odd). Thus the many-body fermion wave functions obey different boundary conditions depending on whether $N_{\mathrm{F}}$ is even or odd.

The Hamiltonian, Eq. (5.92), has quartic terms and is not readily solvable except, of course, by Bethe's method. We can gain some insight by considering the case $\gamma=0$, the $X Y$ model.

For $\gamma=0$, the Hamiltonian is simply

$$
\begin{equation*}
H_{0}=\frac{J}{2} \sum_{j=1}^{N}\left(c^{\dagger}(j) c(j+1)+\text { h.c. }\right) \tag{5.101}
\end{equation*}
$$

This is a trivial problem. The fermions are free. As we saw before, this problem can be solved by taking the Fourier transform. Let $c(k)$ denote the Fourier modes, with $|k| \leq \pi$. The eigenvalues for a system with periodic boundary conditions are

$$
\begin{equation*}
H_{0}=\int_{-\pi}^{\pi} \frac{d k}{2 \pi} \epsilon(k) c^{\dagger}(k) c(k) \tag{5.102}
\end{equation*}
$$

where

$$
\begin{equation*}
\epsilon(k)=J \cos k \tag{5.103}
\end{equation*}
$$

The ground state is found by filling up the negative-energy modes. In the case of $N_{\mathrm{F}}=N / 2$, we get two Fermi points, $k_{\mathrm{F}}= \pm \pi / 2$. The negative-energy states have $k$ in the interval $\pi>|k| \geq \pi / 2$.

This system is gapless. In fact, there are no massive excitations in the onedimensional spin one-half spin chain. This system is critical in the sense that all its correlation functions fall off as a power of the distance. We will discuss this issue below. Also, there is no long-range order in the sense that (at equal times)

$$
\begin{equation*}
\lim _{|m-n| \rightarrow \infty}\left\langle S^{+}(n) S^{-}(m)\right\rangle \approx(-1)^{m-n} \frac{\text { constant }}{|m-n|^{\eta}} \longrightarrow 0 \tag{5.104}
\end{equation*}
$$

with an exponent $\eta$ that will be computed below. Thus there is no Neel order for the chain. (Kennedy, Lieb, and Shastri (Kennedy et al., 1988) have shown that for the square lattice the spin one-half $X Y$ model does have long-range order $\left\langle S^{+}\right\rangle \neq 0$.)

### 5.2.3 The continuum limit of the one-dimensional quantum Heisenberg antiferromagnet

We are interested in the physics at large distances compared with the lattice constant and at frequencies much lower than, say, $J$. In this limit some sort of continuum theory should emerge. We will see now that the continuum theory associated with this 1D system of fermions looks like a theory of "relativistic" fermions moving at the speed of "light" (with $c=v_{\mathrm{F}}=J a_{0}$, the Fermi velocity, with $a_{0}$ being the lattice spacing). These results apply not only to the Hamiltonian of Eq. (5.92) but, in fact, to all 1D Fermi systems with local hopping Hamiltonians. A similar situation develops for fermions in a flux phase in two dimensions, as we will see in Chapter 8.

Consider first the non-interacting problem

$$
\begin{equation*}
H_{0}=\frac{J}{2} \sum_{n=1}^{N}\left(c^{\dagger}(n) c(n+1)+\text { h.c. }\right) \tag{5.105}
\end{equation*}
$$

which is equivalent to the $X Y$ model. We are assuming periodic boundary conditions. The dispersion law for this system is

$$
\begin{equation*}
\epsilon(k)=J \cos k \tag{5.106}
\end{equation*}
$$

with Fermi points at $k_{\mathrm{F}}= \pm \pi / 2$. The elementary excitations will have a characteristic momentum of $\pm k_{\mathrm{F}}$ and we should expect that the correlation functions of the fermions should have a rapid variation of the type $e^{i k_{\mathrm{F} n}}=i^{n}$ with a slow variation on top. It is then natural to define new fermionic variables $a(n)$ that should exhibit only a slow variation in $n$ and hence should have a simple continuum limit. Define

$$
\begin{equation*}
a(n)=i^{-n} c(n) \tag{5.107}
\end{equation*}
$$

The Hamiltonian $H_{0}$ now reads

$$
\begin{align*}
H_{0} & =\frac{J}{2} \sum_{n=1}^{N}\left(i^{-n} a^{\dagger}(n) i^{(n+1)} a(n+1)+\text { h.c. }\right) \\
& =\frac{J}{2} \sum_{n=1}^{N}\left(i a^{\dagger}(n) a(n+1)+\text { h.c. }\right) \\
& =\frac{J}{2} \sum_{n=1}^{N} i a^{\dagger}(n)(a(n+1)-a(n-1)) \tag{5.108}
\end{align*}
$$

where we have used the periodic boundary conditions in the last step. By separating the sum into even and odd sites, one finds for $N$ even

$$
\begin{equation*}
H_{0}=\frac{J}{2} \sum_{s=1}^{N / 2} i\left\{a^{\dagger}(2 s)(a(2 s+1)-a(2 s-1))+a^{\dagger}(2 s+1)(a(2 s+2)-a(2 s))\right\} \tag{5.109}
\end{equation*}
$$

We see that even sites couple to odd sites (and vice versa) but there is no even-even or odd-odd coupling.

Define now the spinor field $\phi_{\alpha}(\alpha=1,2)$, by

$$
\phi_{\alpha}(n)= \begin{cases}\phi_{1}(n)=a(2 s) & n \text { even }  \tag{5.110}\\ \phi_{2}(n)=a(2 s+1) & n \text { odd }\end{cases}
$$

Thus we can write
$H_{0}=i \frac{J}{2} \sum_{s=1}^{N / 2}\left\{\phi_{1}^{\dagger}(2 s)\left[\phi_{2}(2 s+1)-\phi_{2}(2 s-1)\right]+\phi_{2}^{\dagger}(2 s+1)\left[\phi_{1}(2 s+2)-\phi_{1}(2 s)\right]\right\}$
A Fermi field $\psi_{\alpha}(x)$ in the continuum is expected to obey the equal-time canonical anticommutation relations

$$
\begin{equation*}
\left\{\psi_{\alpha}^{\dagger}(x), \psi_{\alpha^{\prime}}\left(x^{\prime}\right)\right\}=\delta_{\alpha \alpha^{\prime}} \delta\left(x-x^{\prime}\right) \tag{5.112}
\end{equation*}
$$

The $\phi_{\alpha}(n)$ fields obey

$$
\begin{equation*}
\left\{\phi_{\alpha}^{\dagger}(n), \phi_{\alpha^{\prime}}\left(n^{\prime}\right)\right\}=\delta_{\alpha \alpha^{\prime}} \delta_{n, n^{\prime}} \tag{5.113}
\end{equation*}
$$

since they are defined on a lattice. We can make these relations compatible by defining

$$
\begin{equation*}
\psi_{\alpha}(x)=\frac{1}{\sqrt{2 a_{0}}} \phi_{\alpha}(n) \tag{5.114}
\end{equation*}
$$

for $x=2 s a_{0}$ and $a_{0}$ the lattice spacing, which will be the unit of length. Thus $\psi_{\alpha}$ has dimensions of [length] ${ }^{-1 / 2}$, whereas $\phi_{\alpha}$ is dimensionless. We have assumed that the distribution $\delta\left(x-x^{\prime}\right)$ is defined by the limit

$$
\begin{equation*}
\delta\left(x-x^{\prime}\right)=\lim _{a_{0} \rightarrow 0} \frac{\delta_{n, n^{\prime}}}{2 a_{0}} \tag{5.115}
\end{equation*}
$$

which, of course, makes sense only as a limit.
By expanding $\phi$, in Eq. (5.111), in a Taylor-series expansion,

$$
\begin{align*}
\phi_{2}(2 s+1)-\phi_{2}(2 s-1) & \approx 2 a_{0}\left(2 a_{0}\right)^{1 / 2} \partial_{x} \psi_{2}(x) \\
\phi_{1}(2 s+2)-\phi_{1}(2 s) & \approx 2 a_{0}\left(2 a_{0}\right)^{1 / 2} \partial_{x} \psi_{1}(x) \tag{5.116}
\end{align*}
$$

and using the fact that

$$
\begin{equation*}
\lim _{a_{0} \rightarrow 0} \sum_{s} 2 a_{0} f(s)=\int d x f(x) \tag{5.117}
\end{equation*}
$$

one finds the effective Hamiltonian in the continuum $\tilde{H}_{0}$ to be given by

$$
\begin{equation*}
\tilde{H}_{0}=\int d x \psi^{\dagger}(x) \alpha i \partial_{x} \psi(x) \tag{5.118}
\end{equation*}
$$

where

$$
\begin{equation*}
\tilde{H}_{0}=\frac{H_{0}}{J a_{0}} \tag{5.119}
\end{equation*}
$$

and the matrix

$$
\alpha \equiv \sigma_{1}=\left(\begin{array}{ll}
0 & 1  \tag{5.120}\\
1 & 0
\end{array}\right)
$$

This is just the Hamiltonian for a Dirac spinor field $\psi_{\alpha}(x)$ in units in which $\hbar$ and the Fermi velocity $v_{\mathrm{F}}$ are set to unity. We will see below that interactions normally lead to finite, non-universal, renormalizations of the Fermi velocity.

The upper (lower) component of $\psi_{\alpha}$ represents the amplitude on even (odd) sites. Alternatively we could have used a basis in which $\sigma_{1}$ is diagonal. In this basis, the upper (lower) component $R(L)$ represents fermions moving towards the right (left) with speed $v_{\mathrm{F}}=1$. It will be, in fact, more convenient to work in the chiral basis

$$
\begin{align*}
& \psi_{1}(x)=\frac{1}{\sqrt{2}}(-R(x)+L(x))  \tag{5.121}\\
& \psi_{2}(x)=\frac{1}{\sqrt{2}}(R(x)+L(x))
\end{align*}
$$

We get

$$
\begin{equation*}
\psi_{1}^{\dagger} i \partial_{x} \psi_{2}+\psi_{2}^{\dagger} i \partial_{x} \psi_{1}=-\left(R^{\dagger} i \partial_{x} R-L^{\dagger} i \partial_{x} L\right) \tag{5.122}
\end{equation*}
$$

In the Dirac theory in $(1+1)$ dimensions one defines the $\gamma$-matrices $\gamma_{0}, \gamma_{1}$, and $\gamma_{5}$ by requiring that they satisfy

$$
\begin{equation*}
\left\{\gamma_{\mu}, \gamma_{\nu}\right\}=2 g_{\mu \nu}, \quad \gamma_{5}=i \gamma_{0} \gamma_{1} \tag{5.123}
\end{equation*}
$$

We can choose the chiral representation, in which

$$
\begin{align*}
& \gamma_{5}=\gamma_{0} \gamma_{1}=\sigma_{3} \\
& \gamma_{0}=\sigma_{1}  \tag{5.124}\\
& \gamma_{1}=-i \sigma_{2}
\end{align*}
$$

It is convenient to define a field $\bar{\psi}$ by

$$
\begin{equation*}
\bar{\psi}=\psi^{\dagger} \gamma_{0} \tag{5.125}
\end{equation*}
$$

The Hamiltonian $\tilde{H}_{0}$ now is

$$
\begin{equation*}
\tilde{H}_{0}=\int d x \bar{\psi}(x) i \gamma_{1} \partial_{x} \psi(x) \tag{5.126}
\end{equation*}
$$

Let us write the interaction terms of Eq. (5.92) in this formalism.
First, we note that we can rewrite

$$
\begin{equation*}
H_{\mathrm{int}}=\gamma J \sum_{j=1}^{N}\left(c^{\dagger}(j) c(j)-\frac{1}{2}\right)\left(c^{\dagger}(j+1) c(j+1)-\frac{1}{2}\right) \tag{5.127}
\end{equation*}
$$

in the form

$$
\begin{equation*}
H_{\mathrm{int}}=-\frac{\gamma J}{2} \sum_{j=1}^{N}\left(c^{\dagger}(j) c(j)-c^{\dagger}(j+1) c(j+1)\right)^{2}+\frac{1}{4} \gamma J N \tag{5.128}
\end{equation*}
$$

Following the same steps as those which led to Eq. (5.126), we find that $\tilde{H}_{\text {int }}$, defined by

$$
\begin{equation*}
\tilde{H}_{\mathrm{int}}=\frac{H_{\mathrm{int}}}{J a_{0}} \tag{5.129}
\end{equation*}
$$

has the form, up to the irrelevant additive constant $\gamma N /\left(4 a_{0}\right)$,

$$
\begin{equation*}
\tilde{H}_{\mathrm{int}}=-2 \gamma \int d x(\bar{\psi}(x) \psi(x))^{2} \tag{5.130}
\end{equation*}
$$

which is the interaction term of the $(1+1)$-dimensional Gross-Neveu model. The expression $\bar{\psi} \psi$ is the continuum limit of

$$
\begin{align*}
\frac{1}{2 a_{0}}(n(2 s+1)-n(2 s)) & \approx-\left(\psi_{1}^{\dagger}(x) \psi_{1}(x)-\psi_{2}^{\dagger}(x) \psi_{2}(x)\right) \\
& =\left(R^{\dagger} L+L^{\dagger} R\right) \equiv \bar{\psi} \psi \tag{5.131}
\end{align*}
$$

Thus a non-zero average for $\bar{\psi} \psi$ breaks chiral (i.e. left-right) symmetry down to its $\mathbb{Z}_{2}$ (Ising) invariance. We see that this is equivalent to the development of a periodic density modulation of the lattice fermion system. Tracing our steps backwards, we interpret this state as a Néel antiferromagnet. In particular, Eq. (5.131) shows that in the continuum limit the $z$-component of the Néel order parameter, the $z$-component of the staggered magnetization $N_{z}$, is essentially the fermion mass term $\bar{\psi} \psi$.

Equation (5.130) can also be written, up to an additive constant, in the form

$$
\begin{equation*}
\tilde{H}_{\mathrm{int}}=\gamma \int d x j_{\mu} j^{\mu}-2 \gamma \int d x\left(\left(R^{\dagger} L\right)^{2}+\left(L^{\dagger} R\right)^{2}\right) \tag{5.132}
\end{equation*}
$$

where we have used the fermionic current $j_{\mu}$,

$$
\begin{equation*}
j_{\mu}=\bar{\psi} \gamma_{\mu} \psi \tag{5.133}
\end{equation*}
$$

which, in the chiral basis, has components

$$
\begin{equation*}
j_{0}=R^{\dagger} R+L^{\dagger} L \tag{5.134}
\end{equation*}
$$

and

$$
\begin{equation*}
j_{1}=R^{\dagger} R-L^{\dagger} L \tag{5.135}
\end{equation*}
$$

Thus $j_{0}$ measures the total number of fermions, i.e. the total density, and $j_{1}$ is the difference in number of left and right movers. A system with the first term of Eq. (5.132) as its only interaction is known as the (massless) Thirring or Luttinger model.

The last term in Eq. (5.132) is peculiar. On the one hand, it appears to be superficially zero, since it is a sum of squares of Fermi fields and Fermi statistics may seem to imply that it is zero. However, all these expressions, written in the continuum, are to be interpreted as a product of operators at short distances. Furthermore, when inserted into the calculation of any expectation value, there should be singular contributions due to the presence of this operator. We are supposed to keep the leading singular term in the product. Thus, expressions such as $(\bar{\psi} \psi)^{2}$ and the like are to be taken in the sense of an operator product expansion (Kadanoff, 1969; Wilson, 1969) in which only the leading singularity is kept.

What is more important the operators $\left(R^{\dagger} L\right)^{2}$ and $\left(L^{\dagger} R\right)^{2}$ break the continuous left-right (chiral) symmetry down to a discrete subgroup. Terms of this sort arise from Umklapp scattering processes (Emery, 1979; Haldane, 1982). In the language of Feynman diagrams, these terms give contributions of the type shown in Fig. 5.1. Such processes violate momentum conservation by $4 k_{\mathrm{F}}$, which equals $2 \pi$ for a half-filled system. Thus $4 k_{\mathrm{F}}$ is a reciprocal-lattice vector and hence the process is allowed, since on a lattice momentum is conserved $\bmod 2 \pi$.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-129.jpg?height=457&width=930&top_left_y=199&top_left_x=385)

Figure 5.1 Umklapp processes.

There is a continuous chiral symmetry

$$
\begin{equation*}
\psi_{\alpha}=\left(e^{i \gamma_{5} \theta}\right)_{\alpha \beta} \psi_{\beta}^{\prime} \tag{5.136}
\end{equation*}
$$

where $\gamma_{5}$ is given by Eq. (5.124), and $\theta$ is an arbitrary constant angle.
It is easy to check that operators, such as the current $\bar{\psi} \gamma_{\mu} \psi$ and $\bar{\psi} i \gamma^{\mu} \partial_{\mu} \psi$, are invariant. Indeed, upon a chiral transformation, $\bar{\psi}$ transforms like

$$
\begin{equation*}
\bar{\psi}=\psi^{\dagger} \gamma_{0}=\psi^{\prime \dagger} e^{-i \gamma_{5} \theta} \gamma_{0}=\bar{\psi}^{\prime} e^{+i \gamma_{5} \theta} \tag{5.137}
\end{equation*}
$$

since $\gamma_{0}$ and $\gamma_{5}$ anti-commute. Thus

$$
\begin{equation*}
\bar{\psi} \gamma_{\mu} \psi=\bar{\psi}^{\prime} \gamma_{\mu} \psi^{\prime} \tag{5.138}
\end{equation*}
$$

and

$$
\begin{equation*}
\bar{\psi} i \gamma_{\mu} \partial^{\mu} \psi=\bar{\psi}^{\prime} i \gamma_{\mu} \partial^{\mu} \psi^{\prime} \tag{5.139}
\end{equation*}
$$

again, since $\left\{\gamma_{5}, \gamma_{\mu}\right\}=0$. However, $\bar{\psi} \psi$ is not invariant since

$$
\begin{equation*}
\bar{\psi} \psi=\bar{\psi}^{\prime} e^{i 2 \gamma_{5} \theta} \psi^{\prime} \equiv \cos (2 \theta) \bar{\psi}^{\prime} \psi^{\prime}+i \sin (2 \theta) \bar{\psi}^{\prime} \gamma_{5} \psi^{\prime} \tag{5.140}
\end{equation*}
$$

In particular $(\bar{\psi} \psi)^{2}$ has only the discrete invariance

$$
\begin{equation*}
\bar{\psi} \psi=-\bar{\psi}^{\prime} \psi^{\prime} \tag{5.141}
\end{equation*}
$$

In other words, $\theta=\pi / 2$. This is not so surprising. The chiral symmetry originates from the two-sublattice structure. There is always an arbitrariness in how we choose a given sublattice. Thus the discrete symmetry is genuine, but the continuous symmetry is a consequence of a carelessly taken continuum limit.

### 5.3 The quantum Ising chain

In this section we will discuss a very simple spin chain of great conceptual (and historical) significance: the 1D quantum Ising model, also known as the Ising model in a transverse field. We will see that the 1D version of this problem (the chain) is closely related (actually equivalent) to the 2D Ising model of classical statistical mechanics.

Let us consider again a 1 D chain of $N_{\mathrm{s}}$ sites. We will take $N_{\mathrm{s}}$ to be an even number. As in the Heisenberg case, on each site $n$ of the chain we define a spin one-half degree of freedom. Thus at each site $n$ we have two states, $|\uparrow\rangle_{n}$ and $|\downarrow\rangle_{n}$, which I will take to be eigenstates of the Pauli matrix $\sigma_{3}(n)$ such that $\sigma_{3}(n)|\sigma(n)\rangle_{n}=\sigma(n)|\sigma(n)\rangle_{n}$. Here $\sigma= \pm 1$, for the $|\uparrow\rangle$ and $|\downarrow\rangle$, respectively. Thus, the dimensionality of the Hilbert space is $2^{N_{s}}$. For convenience we will let the label $n$ run from $-N_{\mathrm{s}} / 2+1$ to $N_{\mathrm{s}} / 2$. We will work with periodic boundary conditions (PBCs). Here this means that the states (and the operators) on the site following the $N_{\mathrm{s}}$ th site, " $N_{\mathrm{s}} / 2+1$," are identified with the states (and operators) on the first site, $-N_{\mathrm{s}} / 2+1$, e.g.

$$
\begin{equation*}
\sigma_{3}\left(\frac{N_{\mathrm{s}}}{2}+1\right) \equiv \sigma_{3}\left(-\frac{N_{\mathrm{s}}}{2}+1\right) \tag{5.142}
\end{equation*}
$$

Thus, the chain is actually a circle of circumference $L=N_{\mathrm{s}} a$, where $a$ is the lattice spacing. For now we will set $a=1$.

The Hamiltonian of the quantum Ising chain (with PBCs) is

$$
\begin{equation*}
H=-\sum_{n=-\frac{N_{\mathrm{s}}}{2}+1}^{\frac{N_{\mathrm{s}}}{2}} \sigma_{1}(n)-\lambda \sum_{n=-\frac{N_{\mathrm{s}}}{2}+1}^{\frac{N_{\mathrm{s}}}{2}} \sigma_{3}(n) \sigma_{3}(n+1)-h \sum_{n=-\frac{N_{\mathrm{s}}}{2}+1}^{\frac{N_{\mathrm{s}}}{2}} \sigma_{3}(n) \tag{5.143}
\end{equation*}
$$

with coupling constant $\lambda$ and symmetry-breaking (longitudinal) field $h$. The Ising model in a transverse field is defined by setting the longitudinal field $h=0$. As before, $\sigma_{1}$ is the off-diagonal real Pauli matrix. In one dimension this model is exactly solvable by means of a Jordan-Wigner transformation to a system of Majorana fermions, which we will explain below.

Let us first discuss the connection between Ising models in transverse fields, for simplicity on a 1D lattice (a chain), and the classical Ising model on a square lattice. Similar relations exist for other lattices in all dimensions. Thus, on each site $x$ of the 2D square lattice we have an Ising spin that can take two values, $\sigma(x)= \pm 1$, which we regard as the two $z$ projections of the spin in a magnet with uniaxial anisotropy. Here $\{x\}$ are a set of two-component vectors that label the sites of the lattice. The classical energy functional for a spin configuration $[\sigma]$ is

$$
\begin{equation*}
E[\sigma]=-\sum_{\left\langle x, x^{\prime}\right\rangle} J \sigma(x) \sigma\left(x^{\prime}\right)-\sum_{x} H \sigma(x) \tag{5.144}
\end{equation*}
$$

where $x$ and $x^{\prime}$ are (for simplicity) nearest-neighboring sites of the 2D square lattice. We have assumed that all the exchange coupling constants $J$ and the external magnetic field $H$ are equal and that the system is translationally invariant. We will restrict our discussion to the case of a system with ferromagnetic interactions, $J>0$.

The partition function for a system at temperature $T$ is the sum over all configurations of the Ising spins with a Gibbs weight for each state $[\sigma]$

$$
\begin{equation*}
Z=\sum_{[\sigma]} e^{-\frac{E[\sigma]}{T}} \tag{5.145}
\end{equation*}
$$

The square lattice is isotropic and hence invariant under the action of the symmetry group of the square, known as $C_{4}$. We will now use this invariance to arbitrarily choose one direction, which will be denoted by $x_{2}=\tau$. In what follows we will further assume that we have imposed PBCs along this direction of the lattice. We will call this the "direction of transfer" or "evolution" and assume that we have a square lattice with $N_{\tau}$ rows, $\tau=1, \ldots, N_{\tau}$, and that each row has $N_{\mathrm{s}}$ sites, $x_{1}=$ $n=1, \ldots, N_{\mathrm{s}}$. Let us write the position vectors of each site as $x=(n, \tau)$, where we will refer to $n$ as the "space coordinate" and to $\tau$ as the "time coordinate." In this representation we can think of a configuration $[\sigma]$ as a "history" (or evolution) of a spatial spin configuration (a state) from one row (labeled by $\tau$ ) to the next (labeled by $\tau+1$ ). We will denote the state of a row by $|[\sigma]\rangle$, where here $[\sigma]$ are the $\sigma_{3}$ eigenvalues at each site $n$ of the row.

In other words, in this language the partition function of the classical system is viewed as the path integral (in discretized imaginary time) of a quantum system in one dimension, which we will see is the quantum Ising model. Using the assumption of PBCs, we will now show that the partition function can be written as the trace of a matrix called the transfer matrix (Schultz et al., 1964), denoted by $\mathcal{T}$. For a system in $D$ dimensions, the transfer matrix $\mathcal{T}$ will play the role of the evolution operator of a quantum problem in $d=D-1$ space dimensions (Fradkin and Susskind, 1978). The transfer matrix $\mathcal{T}$ can be defined to be hermitian for any system in classical statistical mechanics with local and positive Gibbs weights. This feature, hermiticity of the transfer matrix, turns out to be the same as the statement that the equivalent theory in one dimension fewer has a hermitian Hamiltonian and hence a unitary time evolution.

For a system with nearest-neighbor interactions (this can be made more general) we can classify the terms of the classical energy functional $E[\sigma]$, Eq. (5.144), into terms describing the interactions between spins on the same row and others describing interactions between two (neighboring) rows. It will be convenient to break the isotropy of the lattice and to have the intra-row exchange (ferromagnetic) interactions $J_{\mathrm{s}}>0$ be different than the inter-row (also ferromagnetic) interactions $J_{\tau}>0$ (above we had set $J=J_{\mathrm{s}}=J_{\tau}$ ).

Let $\mathcal{T}_{\mathrm{s}}$ and $\mathcal{T}_{\tau}$ be two matrices each of rank $2^{N_{\mathrm{s}}} \times 2^{N_{\mathrm{s}}}$. We will define $\mathcal{T}_{\mathrm{s}}$ to be diagonal in the row states $|\sigma\rangle$ and $\mathcal{T}_{\tau}$ to be off-diagonal in that basis:

$$
\begin{align*}
& \mathcal{T}_{\mathrm{s}}=\exp \left(\beta_{\mathrm{s}} \sum_{n} \sigma_{3}(n) \sigma_{3}(n+1)+\beta_{h} \sum_{n} \sigma_{3}(n)\right)  \tag{5.146}\\
& \mathcal{T}_{\mathrm{s}}=\left[2 \sinh \left(\frac{2 J_{\tau}}{T}\right)\right]^{N_{\mathrm{s}} / 2} \exp \left(\tilde{\beta}_{\tau} \sum_{n} \sigma_{1}(n)\right) \tag{5.147}
\end{align*}
$$

where $n=-N_{\mathrm{s}} / 2+1, \ldots, N_{\mathrm{s}} / 2$, and

$$
\begin{equation*}
\tanh \tilde{\beta}_{\tau}=e^{-2 \beta_{\tau}}, \quad \beta_{\tau} \equiv \frac{J_{\tau}}{T}, \quad \beta_{\mathrm{s}} \equiv \frac{J_{\mathrm{s}}}{T}, \quad \beta_{\mathrm{h}} \equiv \frac{H}{T} \tag{5.148}
\end{equation*}
$$

The transfer matrix $\mathcal{T}$ is defined to be

$$
\begin{equation*}
\mathcal{T}=\mathcal{T}_{\tau}^{1 / 2} \mathcal{T}_{\mathrm{s}} \mathcal{T}_{\tau}^{1 / 2} \tag{5.149}
\end{equation*}
$$

Since the matrices $\mathcal{T}_{\tau}$ and $\mathcal{T}_{\mathrm{s}}$ are separately hermitian, the transfer matrix $\mathcal{T}$ defined above is hermitian as well.

With these definitions it is straightforward to see that, for a system with PBCs along the direction of transfer $\tau$, the partition function is

$$
\begin{equation*}
Z_{\mathrm{PBC}}=Z=\operatorname{tr} \mathcal{T}^{N_{\tau}} \tag{5.150}
\end{equation*}
$$

regardless of the boundary conditions along the "spatial" direction. For a system with fixed boundary conditions along the $\tau$ direction, with initial and final states $\left|[\sigma]_{\tau=1}\right\rangle$ and $\left|[\sigma]_{\tau=N_{\tau}}\right\rangle$, the partition function is

$$
\begin{equation*}
Z_{\mathrm{fixed}}=\left\langle[\sigma]_{\tau=1}\right| \mathcal{T}^{N_{\tau}}\left|[\sigma]_{\tau=N_{\tau}}\right\rangle \tag{5.151}
\end{equation*}
$$

It is straightforward to show that the correlation functions of the classical system

$$
\begin{equation*}
\left\langle\sigma(n, \tau) \sigma\left(n^{\prime}, \tau^{\prime}\right)\right\rangle=\frac{1}{Z} \sum_{[\sigma]} \sigma(n, \tau) \sigma\left(n^{\prime}, \tau^{\prime}\right) \exp \left(-\frac{E[\sigma]}{T}\right) \tag{5.152}
\end{equation*}
$$

are equal to

$$
\begin{equation*}
\left\langle\hat{T}_{\tau}\left(\sigma_{3}(n, \tau) \sigma_{3}\left(n^{\prime}, \tau^{\prime}\right)\right)\right\rangle=\frac{1}{Z} \operatorname{tr}\left[\hat{T}\left(\sigma_{3}(n, \tau) \sigma_{3}\left(n^{\prime}, \tau^{\prime}\right)\right) \mathcal{T}^{N_{\tau}}\right] \tag{5.153}
\end{equation*}
$$

where we used the generalized Heisenberg representation

$$
\begin{equation*}
\sigma_{3}(n, \tau)=\mathcal{T}^{N_{\tau}} \sigma_{3}(n) \mathcal{T}_{\tau}^{-N_{\tau}} \tag{5.154}
\end{equation*}
$$

and the "time-ordering" symbol $\hat{T}$.
The transcription of the classical statistical-mechanical system to this "algebraic" language suggests a mapping to a quantum system in one dimension fewer. Indeed, the formalism we just sketched parallels the relation between the

Hamiltonian (operator) and path-integral formulations of quantum mechanics (and of quantum field theory). Given this observation, we are thus tempted to write the transfer matrix $\mathcal{T}$ as an exponential of (the negative of) a quantum Hamiltonian. The problem is that, since the factor matrices $\mathcal{T}_{\mathrm{s}}$ and $\mathcal{T}_{\tau}$ do not commute with each other, the resulting effective quantum Hamiltonian is not local (it is a sum of nested commutators of increasing order).

However, there is a procedure that will allow us to define a local quantum Hamiltonian (Fradkin and Susskind, 1978). Let us imagine stretching the lattice spacing along the horizontal direction (the rows) and compressing it by a related amount along the vertical direction (the columns). As a result the coupling $J_{\mathrm{s}}$ will become smaller while $J_{\tau}$ will grow bigger. Given the symmetries of this system, it is clear that the partition function $Z\left[J_{s} / T, J_{\tau} / T\right]$ must be the same (invariant) on some curves defined by a relation of the form $f\left(J_{\mathrm{s}} / T, J_{\tau} / T\right)=$ constant. As we carry on with this procedure, the curves on which the correlation functions are constant become increasingly deformed, also being stretched along the horizontal axis ("space") and squashed along the vertical axis ("time"). However, we can now also imagine increasing the number of rows by the precise amount required so that (in lattice units) we restore isotropy. If we continue indefinitely with this procedure, the spacing along the time direction becomes very small but the associated coupling is very large. However, as we can see from the expressions for the matrices $\mathcal{T}_{\mathrm{s}}$ and $\mathcal{T}_{\tau}$, in this limit

$$
\begin{equation*}
\frac{J_{\mathrm{s}}}{T} \rightarrow 0, \quad \tilde{\beta}_{\tau} \simeq \exp \left(-\frac{2 J_{\tau}}{T}\right) \rightarrow 0 \tag{5.155}
\end{equation*}
$$

as well. Therefore, in this asymptotic regime we can write the transfer matrix in the simpler form

$$
\begin{equation*}
\mathcal{T}=\left[2 \sinh \left(\frac{2 J_{\tau}}{T}\right)\right]^{N_{\mathrm{s}} / 2} e^{-\epsilon H+O\left(\epsilon^{2}\right)} \tag{5.156}
\end{equation*}
$$

where $H$ is the Hamiltonian of the quantum Ising model with a symmetry-breaking field. The coupling constant $\lambda$ and the symmetry-breaking field $h$ are given by

$$
\begin{equation*}
\frac{J_{\mathrm{s}}}{T}=\epsilon \lambda, \quad \frac{H}{T}=\epsilon h, \quad \epsilon=\exp \left(-\frac{2 J_{\tau}}{T}\right) \tag{5.157}
\end{equation*}
$$

In the thermodynamic limit, $N_{\mathrm{s}} \rightarrow \infty$ and $N_{\tau} \rightarrow \infty$ (with $N_{\mathrm{s}} / N_{\tau}$ fixed), the partition function becomes

$$
\begin{equation*}
Z=\lim _{\beta \rightarrow \infty} \operatorname{tr} e^{-\beta H} \tag{5.158}
\end{equation*}
$$

where we keep $\beta=N_{\tau} \exp \left(-2 J_{\tau} / T\right)$ fixed as $N_{\tau} \rightarrow \infty$, and $J_{\tau} / T \rightarrow \infty$.

### 5.4 Duality

From now on we will consider the quantum Ising chain of Eq. (5.143) at zero external field, $h=0$. This quantum spin chain has a discrete, $\mathbb{Z}_{2}$ global symmetry. Let $\mathcal{I}$ be the identity transformation, $\mathcal{I}|[\sigma]\rangle \rightarrow|[\sigma]\rangle$, and let $\mathcal{R}$ be a global spin-flip transformation, $\mathcal{R}|[\sigma]\rangle \rightarrow|[-\sigma]\rangle$, where $[\sigma]$ is a configuration of the spin degrees of freedom in the $\sigma_{3}$ basis. Under the composition operation (sequential action), which we will denote by $\star$, of these transformations they form a group with the properties

$$
\begin{equation*}
\mathcal{I} \star \mathcal{I}=\mathcal{R} \star \mathcal{R}=\mathcal{I}, \quad \mathcal{I} \star \mathcal{R}=\mathcal{R} \star \mathcal{I}=\mathcal{R} \tag{5.159}
\end{equation*}
$$

Thus, this is the group $\mathbb{Z}_{2}$, the permutation group of two elements, $\mathcal{I}$ and $\mathcal{R}$.
If we denote by $I(n)$ the identity operator on the $n$th site, we can construct a representation for the symmetry operators $\mathcal{I}$ and $\mathcal{R}$ in terms of the states of the quantum Ising spin chain,

$$
\begin{equation*}
\mathcal{I}=\mathcal{I}^{-1}=\prod_{n} \otimes I(n), \quad \mathcal{R}=\mathcal{R}^{-1}=\prod_{n} \otimes \sigma_{1}(n) \tag{5.160}
\end{equation*}
$$

These operators act on the spin operators as follows:

$$
\begin{align*}
\mathcal{I} \sigma_{1}(n) \mathcal{I}^{-1} & =\sigma_{1}(n), & \mathcal{I} \sigma_{3}(n) \mathcal{I}^{-1} & =\sigma_{3}(n) \\
\mathcal{R} \sigma_{1}(n) \mathcal{R}^{-1} & =\sigma_{1}(n), & \mathcal{R} \sigma_{3}(n) \mathcal{R}^{-1} & =-\sigma_{3}(n) \tag{5.161}
\end{align*}
$$

Since, at $h=0$, both operators commute with the Hamiltonian of Eq. (5.143), $[\mathcal{I}, H]=[\mathcal{R}, H]=0$, we conclude that the Ising model in a transverse field is invariant under a global $\mathbb{Z}_{2}$ transformation.

As a function of the coupling constant $\lambda$, the quantum Ising chain has two phases, separated by a quantum phase transition at $\lambda_{\mathrm{c}}=1$.

1. The $\lambda<\lambda_{c}$ phase. This phase is best described in terms of the eigenstates of $\sigma_{1}(n),| \pm, n\rangle$. At $\lambda=0$, the ground state is $\left|\Psi_{0}\right\rangle_{\lambda=0}=\prod_{n}|+, n\rangle$. In this phase $\left\langle\Psi_{0}\right| \sigma_{3}(n)\left|\Psi_{0}\right\rangle=0$ to all orders in perturbation theory (in $\lambda$ ) and all correlators decay exponentially with distance with a finite correlation length $\xi(\lambda)$.
2. The $\lambda>\lambda_{c}$ phase. This phase is best described in terms of the eigenstates of $\sigma_{3}(n)$. For all $\lambda>\lambda_{c}$ this phase has two degenerate ground states, $\left|\Psi_{ \pm}\right\rangle$, related to each other by a global spin flip, $\mathcal{R}\left|\Psi_{ \pm}\right\rangle=\left|\Psi_{\mp}\right\rangle$. Thus in this phase we find the phenomenon of spontaneous symmetry breaking with $\left\langle\Psi_{ \pm}\right| \sigma_{3}(n)\left|\Psi_{ \pm}\right\rangle \equiv$ $\mathcal{M}(\lambda) \neq 0$ which plays the role of the order-parameter field.

Let us introduce the concept of a duality transformation. This transformation was first introduced by Kramers and Wannier (1941) as mapping between the lowand high-temperature phases of the 2D classical Ising model. Here we will use an equivalent mapping of the 1D quantum Hamiltonian (Fradkin and Susskind, 1978).

To this end let us introduce the dual lattice as the set of midpoint lattice sites of a 1D chain (with PBCs). We will denote by $\tilde{n}$ the site of the dual lattice midpoint between the sites $n$ and $n+1$ of the chain. We will now define on each dual lattice site the operators $\tau_{1}(\tilde{n})$ and $\tau_{3}(\tilde{n})$,

$$
\begin{equation*}
\tau_{1}(\tilde{n})=\sigma_{3}(n) \sigma_{3}(n+1), \quad \tau_{3}(\tilde{n})=\prod_{-\frac{N_{s}}{2}+1 \leq p \leq n} \sigma_{1}(p) \tag{5.162}
\end{equation*}
$$

The operators $\tau_{1}(\tilde{n}), \tau_{3}(\tilde{n})$, and $\tau_{2}(\tilde{n})=i \tau_{1}(\tilde{n}) \tau_{3}(\tilde{n})$ form a representation of the algebra of Pauli matrices.

It is trivial to see that

$$
\begin{equation*}
\sigma_{1}(n)=\tau_{3}(\tilde{n}) \tau_{3}(\tilde{n}+1), \quad \sigma_{3}(n) \sigma_{3}(n+1)=\tau_{1}(\tilde{n}) \tag{5.163}
\end{equation*}
$$

We recognize that the dual operator $\tau_{3}(n)$ is essentially equivalent to the kinkcreation operator defined by Eq. (5.74) (up to a factor of $i^{n}$ and a rotation of basis). We will refer to an operator which is the dual of an order parameter as a disorder operator.

Using the identities of Eq. (5.163) it is apparent that the two terms of the Hamiltonian map into each other. Hence, under a duality transformation the Hamiltonian of the quantum Ising chain (at $h=0$ ) at coupling constant $\lambda, H(\lambda)$, transforms into its dual $\tilde{H}(\lambda)$,

$$
\begin{equation*}
\tilde{H}(\lambda)=\lambda H\left(\frac{1}{\lambda}\right) \tag{5.164}
\end{equation*}
$$

Thus, the strong-coupling and weak-coupling phases map into each other: this Hamiltonian is self-dual. If one further assumes (as Kramers and Wannier did and Onsager proved) that the transition is unique, then it must occur at the critical coupling $\lambda_{c}=1$ which is invariant under duality.

Similarly, one immediately finds that the dual of the spin-spin correlation function at coupling constant $\lambda$ is the same as the correlation function of two disorder operators in the dual theory at coupling constant $1 / \lambda$,

$$
\begin{equation*}
\left\langle T\left[\sigma_{3}(n, \tau) \sigma_{3}\left(n^{\prime}, \tau^{\prime}\right)\right]\right\rangle_{\lambda}=\left\langle T\left[\tau_{3}(\tilde{n}, \tau) \tau_{3}\left(\tilde{n}^{\prime}, \tau^{\prime}\right)\right]\right\rangle_{1 / \lambda} \tag{5.165}
\end{equation*}
$$

This result also implies that the disorder operator has an expectation value in the disordered phase of the Ising model (Kadanoff and Ceva, 1971; Fradkin and Susskind, 1978).

Duality also tells us how to relate seemingly dissimilar systems. Let us consider a system of two decoupled quantum Ising models with the same coupling constant $\lambda$ and on chains of the same length. We will depict this system as a single quantum Ising model with only next-nearest-neighbor interactions, i.e. a system with twice as many sites but with interactions only between neighboring even sites for one
chain and between neighboring odd sites for the other. Hence, this is the same as a system of two interpenetrating Ising models. Thus the Hamiltonian is the same as in Eq. (5.143) with the proviso that the interaction acts only at distance $2 a$. This system ostensibly has a $\mathbb{Z}_{2} \times \mathbb{Z}_{2}$ global symmetry, instead of a single $\mathbb{Z}_{2}$.

Let us now look for the dual of the Hamiltonian of this system of two decoupled Ising models using the duality transformation of Eq. (5.163) for the combined system. We find that the Hamiltonian of two decoupled Ising models, $H_{2}$, is the dual of an anisotropic $X Z$ (equivalent to the spin one-half $X Y$ ) model

$$
\begin{align*}
H_{2} & =-\sum_{n} \sigma_{1}(n)-\lambda \sum_{n} \sigma_{3}(n) \sigma_{3}(n+2)  \tag{5.166}\\
& =-\sum_{\tilde{n}} \tau_{3}(\tilde{n}) \tau_{3}(\tilde{n}+1)-\lambda \sum_{\tilde{n}} \tau_{1}(\tilde{n}) \tau_{1}(\tilde{n}+1) \tag{5.167}
\end{align*}
$$

In this language the dual system still has a $\mathbb{Z}_{2} \times \mathbb{Z}_{2}$ global symmetry, and duality reduces to a rotation of the basis. At the self-dual point of each Ising model, $\lambda=1$, the quantum dual $X Y$ model is isotropic and has a global $\mathrm{U}(1)$ symmetry whose infinitesimal generator is $\sum_{\tilde{n}} \tau_{2}(\tilde{n})$. We will shortly see that at $\lambda=1$ the system is critical. This is an example of the enhancement of a symmetry at a critical point.

Finally, we will discuss briefly the transcription of the Ising correlators in this case. However, instead of considering the usual two-point function of a single Ising chain we will consider the following four-point function with two spins on each chain:

$$
\begin{equation*}
\left\langle T\left[\sigma_{3}(n, \tau) \sigma_{3}(n+1, \tau) \sigma_{3}\left(n^{\prime}, \tau^{\prime}\right) \sigma_{3}\left(n^{\prime}+1, \tau^{\prime}\right)\right]\right\rangle=\left\langle T\left[\tau_{1}(\tilde{n}, \tau) \tau_{1}\left(\tilde{n}^{\prime}, \tau^{\prime}\right)\right]\right\rangle \tag{5.168}
\end{equation*}
$$

Hence the correlator of two $\tau_{1}$ spin operators in the dual theory is equal to the product of the correlation functions of the individual Ising chains, i.e. to the square of the spin-spin correlation function of the quantum Ising chain. Later in this chapter we will compute this correlator at $\lambda=1$ using bosonization methods (Bander and Itzykson, 1977; Zuber and Itzykson, 1977).

### 5.5 The quantum Ising chain as a free-Majorana-fermion system

In a seminal paper Schultz, Mattis, and Lieb (Schultz et al., 1964) calculated the partition function of the 2D classical Ising model on an anisotropic square lattice and reproduced, mapping the problem to a theory of fermions, the celebrated Onsager solution (Onsager, 1944). To this effect they used a Jordan-Wigner transformation, such as the one we used earlier in this chapter for the quantum Heisenberg antiferromagnet.

Here we will use a Jordan-Wigner transformation, similar to the one defined in Eq. (5.76), to solve the quantum Ising chain at zero external field, $h=0$. On every
site $n$ we define the operators $\chi_{1}(n)$ and $\chi_{2}(n)$,

$$
\begin{align*}
& \chi_{1}(n)=\sigma_{3}(n) \prod_{j<n} \sigma_{1}(j) \\
& \chi_{2}(n)=i \sigma_{3}(n) \prod_{j \leq n} \sigma_{1}(j) \tag{5.169}
\end{align*}
$$

with the additional definitions $\chi_{1}\left(-N_{\mathrm{s}} / 2+1\right)=\sigma_{1}\left(-N_{\mathrm{s}} / 2+1\right)$ and $\chi_{2}\left(-N_{\mathrm{s}} / 2+\right.$ $1)=-\sigma_{2}\left(-N_{\mathrm{s}} / 2+1\right)$. These operators are self-adjoint, $\chi_{1}^{\dagger}(n)=\chi_{1}(n)$ and $\chi_{2}^{\dagger}(n)=\chi_{2}(n)$, anti-commute with each other and square to the identity. Hence they obey the algebra

$$
\begin{align*}
& \left\{\chi_{1}(j), \chi_{1}\left(j^{\prime}\right)\right\}=\left\{\chi_{1}(j), \chi_{1}\left(j^{\prime}\right)\right\}=\delta_{j, j^{\prime}} \\
& \left\{\chi_{1}(j), \chi_{2}\left(j^{\prime}\right)\right\}=0 \tag{5.170}
\end{align*}
$$

Operators that obey this algebra are known as Majorana fermions.
In terms of the Majorana operators, $\chi_{1}(n)$ and $\chi_{2}(n)$, the Hamiltonian of the quantum Ising chain is

$$
\begin{equation*}
H=-\sum_{n} i \chi_{1}(n) \chi_{2}(n)-\lambda \sum_{n} i \chi_{2}(n) \chi_{1}(n+1) \tag{5.171}
\end{equation*}
$$

The spin-flip operator $\mathcal{R}$, which generates the global $\mathbb{Z}_{2}$ symmetry, takes the form

$$
\begin{equation*}
\mathcal{R}=\prod_{n} \sigma_{1}(n)=i^{N_{\mathrm{s}}} \prod_{n}\left(\chi_{1}(n) \chi_{2}(n)\right) \tag{5.172}
\end{equation*}
$$

which (as it should do) commutes with the Hamiltonian.

### 5.5.1 The Majorana-fermion universality class

It is instructive to derive the (Heisenberg) equations of motion of the Majorana operators:

$$
\begin{align*}
& i \partial_{t} \chi_{1}(n)=i \chi_{2}(n)-i \lambda \chi_{2}(n-1)  \tag{5.173}\\
& i \partial_{t} \chi_{2}(n)=-i \chi_{1}(n)+i \lambda \chi_{1}(n+1)
\end{align*}
$$

These equations of motion are linear. Hence, the Majorana fields $\chi_{1}$ and $\chi_{2}$ are free! In contrast, it is simple to see that the equations of motion of the spin operators $\sigma_{1}(n)$ and $\sigma_{3}(n)$ are not linear, and hence these fields are not free.

We will now restore a lattice constant $a \neq 1$ and set $x_{n}=n a_{0}$ to take the continuum limit of the equations of motion of the Majorana fields, Eq. (5.173),

$$
\begin{align*}
& \chi_{1}(n+1) \approx \chi_{1}\left(x_{n}\right)+a_{0} \partial_{x} \chi_{1}\left(x_{n}\right)+O\left(a_{0}^{2}\right) \\
& \chi_{2}(n-1) \approx \chi_{2}\left(x_{n}\right)-a_{0} \partial_{x} \chi_{2}\left(x_{n}\right)+O\left(a_{0}^{2}\right) \tag{5.174}
\end{align*}
$$

Hence we can rewrite Eqs. (5.173) in the form

$$
\begin{align*}
\frac{1}{a_{0} \lambda} i \partial_{t} \chi_{1} \simeq i\left(\frac{1-\lambda}{a_{0} \lambda}\right) \chi_{2}+i \partial_{x} \chi_{2} \\
\frac{1}{a_{0} \lambda} i \partial_{t} \chi_{2} \simeq-i\left(\frac{1-\lambda}{a_{0} \lambda}\right) \chi_{1}+i \partial_{x} \chi_{1} \tag{5.175}
\end{align*}
$$

We now rescale the time coordinate $t \rightarrow\left(a_{0} \lambda\right) x_{0}$, relabel the space coordinate as $x \rightarrow x_{1}$, and rescale the Majorana fields $\chi_{i}\left(x_{n}\right) \rightarrow\left(1 / \sqrt{2 a_{0}}\right) \chi_{i}\left(x_{1}\right)(i=1,2)$. In this notation the equations of motion of the Majorana fields (in the continuum limit) become

$$
\begin{align*}
& i \partial_{0} \chi_{1}-i \partial_{1} \chi_{2}+i m \chi_{2}=0  \tag{5.176}\\
& i \partial_{0} \chi_{2}-i \partial_{1} \chi_{1}-i m \chi_{1}=0
\end{align*}
$$

where we introduced the Majorana mass $m(\lambda)$ defined by the scaling limit

$$
\begin{equation*}
m=\lim _{\substack{a_{0} \rightarrow 0 \\ \lambda \rightarrow 1}}\left(\frac{1-\lambda}{a_{0} \lambda}\right) \tag{5.177}
\end{equation*}
$$

which vanishes right at $\lambda=1$.
The (continuum) Majorana fields satisfy the equal-time anticommutation relations (with $i, j=1,2$ )

$$
\begin{equation*}
\left\{\chi_{i}(x), \chi_{j}\left(x^{\prime}\right)\right\}=\delta_{i j} \delta\left(x-x^{\prime}\right) \tag{5.178}
\end{equation*}
$$

Equations (5.176) are (in components) the Dirac equation for Majorana fields in $1+1$ dimensions. Indeed, if we define the two-component Majorana spinor field $\chi$,

$$
\begin{equation*}
\chi=\binom{\chi_{1}}{\chi_{2}} \tag{5.179}
\end{equation*}
$$

which satisfies the Majorana condition

$$
\begin{equation*}
\chi^{\dagger}=\chi^{\mathrm{T}}=\sigma_{1} \chi \tag{5.180}
\end{equation*}
$$

we can write the equations of motion in the (Dirac-Majorana) form

$$
\begin{equation*}
i \not \partial \chi-i m \chi^{\mathrm{T}}=0 \tag{5.181}
\end{equation*}
$$

In other terms, we have shown that the quantum Ising chain is equivalent, in the continuum limit, to a theory of free Majorana fermions in $(1+1)$ dimensions with a (Majorana) mass that tunes the distance to the self-dual point $\lambda_{c}=1$. Since at $\lambda_{\mathrm{c}}=1$ the mass $m \rightarrow 0$, we conclude that the Majorana fermions are massless at $\lambda_{\mathrm{c}}$. The mass $m$ also defines a length scale that we will identify with the correlation length,

$$
\begin{equation*}
\xi=\frac{1}{|m|} \sim \frac{1}{\left|\lambda-\lambda_{c}\right|} \tag{5.182}
\end{equation*}
$$

from which we conclude that the correlation-length exponent is $v=1$. Hence the universality class of the Ising quantum chain (and of the 2D classical Ising model) is a theory of massless Majorana fermions.

### 5.5.2 Diagonalization of the Hamiltonian

We will now reexamine these results by diagonalizing the Hamiltonian of the quantum Ising chain explicitly. To do this let us return to the operators $\chi_{1}(n)$ and $\chi_{2}(n)$ of Eq. (5.169). Let us define the canonical (Dirac) fermion operator $\psi(n)$ and its adjoint $\psi^{\dagger}(n)$,

$$
\begin{equation*}
\psi(n)=\frac{1}{\sqrt{2}}\left(\chi_{1}(n)+i \chi_{2}(n)\right), \quad \psi(n)^{\dagger}=\frac{1}{\sqrt{2}}\left(\chi_{1}(n)-i \chi_{2}(n)\right) \tag{5.183}
\end{equation*}
$$

which satisfy the canonical anticommutator algebra

$$
\begin{equation*}
\left\{\psi(n), \psi\left(n^{\prime}\right)^{\dagger}\right\}=\delta_{n, n^{\prime}}, \quad\left\{\psi(n), \psi\left(n^{\prime}\right)\right\}=0 \tag{5.184}
\end{equation*}
$$

In terms of these fermions we obtain a Jordan-Wigner transformation

$$
\begin{align*}
\sigma_{1}(n) & =2 \psi(n)^{\dagger} \psi(n)-1 \\
\sigma_{3}(n) & =\left(\psi(n)^{\dagger}+\psi(n)\right) \exp \left(i \pi \sum_{j<n} \psi(j)^{\dagger} \psi(j)\right) \tag{5.185}
\end{align*}
$$

We will now be more careful with the choice of boundary conditions. We will denote by $\eta=1$ periodic and by $\eta=-1$ anti-periodic boundary conditions of the spins,

$$
\begin{equation*}
\sigma_{3}\left(\frac{N_{\mathrm{s}}}{2}+1\right)=\eta \sigma_{3}\left(-\frac{N_{\mathrm{s}}}{2}+1\right) \tag{5.186}
\end{equation*}
$$

It follows that the fermions satisfy the boundary conditions

$$
\begin{equation*}
\psi\left(\frac{N_{\mathrm{s}}}{2}+1\right)=\mathcal{R} \eta \psi\left(-\frac{N_{\mathrm{s}}}{2}+1\right) \tag{5.187}
\end{equation*}
$$

where $\mathcal{R}$ is the spin-flip operator, which now looks like

$$
\begin{equation*}
\mathcal{R}=e^{i \pi \mathcal{N}} \tag{5.188}
\end{equation*}
$$

where

$$
\begin{equation*}
\mathcal{N}=\sum_{n} \psi(n)^{\dagger} \psi(n) \tag{5.189}
\end{equation*}
$$

is the total fermion number. However, in the Ising chain

$$
\begin{equation*}
[\mathcal{N}, H] \neq 0, \quad \text { but } \quad[\mathcal{R}, H]=0 \tag{5.190}
\end{equation*}
$$

In other terms, the number of fermions $\mathcal{N}$ is not a conserved observable but conserved modulo two. Thus, fermion parity, measured by $\mathcal{R}$, is conserved. This is a natural consequence of the fact that this is actually a theory of real (and hence not complex) fermions, which do not have a conserved charge. Since the choice of periodic (or anti-periodic) boundary conditions for the spins does not completely specify the boundary conditions for the fermions (since their parity needs to be fixed), we conclude that there is a two-to-one relation between the system of fermions and the system of spins.

In terms of the fermion operators the Hamiltonian is

$$
\begin{align*}
H= & -\sum_{n=-\frac{N_{\mathrm{s}}}{2}+1}^{\frac{N_{\mathrm{s}}}{2}}\left[2 \psi^{\dagger}(n) \psi(n)+\lambda\left(\psi^{\dagger}(n)-\psi(n)\right)\left(\psi^{\dagger}(n+1)+\psi(n+1)\right)\right] \\
& +N_{\mathrm{s}}+H_{\mathrm{b}} \tag{5.191}
\end{align*}
$$

where $N_{\mathrm{s}}$ is the number of sites and $H_{\mathrm{b}}$ is a boundary term for the coupling connecting the last with the first site:

$$
\begin{equation*}
H_{\mathrm{b}}=-\lambda \eta \mathcal{R}\left(\psi^{\dagger}\left(N_{\mathrm{s}} / 2\right)-\psi\left(N_{\mathrm{s}} / 2\right)\right)\left(\psi^{\dagger}\left(-N_{\mathrm{s}} / 2+1\right)+\psi\left(-N_{\mathrm{s}} / 2+1\right)\right) \tag{5.192}
\end{equation*}
$$

If we compare the fermion Hamiltonian of Eq. (5.191) with the analogous fermion Hamiltonian for the fermionized version of the (anisotropic) quantum Heisenberg antiferromagnet of Eq. (5.92), we see two important differences: (a) in the Heisenberg case there is a fermion density-interaction term, which makes the system interacting except at the $X Y$-model point; and (b) in the Heisenberg case the fermion number is conserved, whereas in the Ising case only the parity is conserved. In the Heisenberg case fermion-number conservation is due to the existence of the unbroken $U(1)$ global symmetry of the anisotropic Heisenberg antiferromagnet, whereas in the Ising case the global symmetry is $\mathbb{Z}_{2}$, which leads to the conservation of fermion parity.

Since the flip operator $\mathcal{R}$ commutes with the Hamiltonian $H$, the energy eigenstates can be chosen also to be fermion-parity eigenstates. In a system with PBCs, $\eta=+1$, the ground state of the even-fermion-parity sector has lower energy than the ground state of the odd-parity sector. This is so since, in a system with PBCs, the odd-fermion-parity sector has at least one fermion and hence has an odd number of domain walls. Thus, we will work with PBCs for the spin system and within the even-parity fermion sector. This forces also the fermions to obey PBCs. In this sector the Hamiltonian is translationally invariant (and hence defect-free). Since $\left\{\sigma_{3}(n), \mathcal{R}\right\}=0$ (for all $n$ ), the spin operator $\sigma_{3}(n)$ changes the boundary conditions for the fermions from periodic to anti-periodic.

Using the translation invariance of the fermion Hamiltonian, Eq. (5.191), with $\eta=+1$ and $\mathcal{R}=+1$, we will attempt to find its spectrum by means of a Fourier transform,

$$
\begin{equation*}
\psi(n)=\frac{1}{N_{\mathrm{s}}} \sum_{k=-\frac{N_{\mathrm{s}}}{2}+1}^{\frac{N_{\mathrm{s}}}{2}} e^{i 2 \pi k n / N_{\mathrm{s}}} a(k) \tag{5.193}
\end{equation*}
$$

such that the operators $a(k)$ obey the same usual anticommutator algebra

$$
\begin{equation*}
\left\{a(k), a^{\dagger}\left(k^{\prime}\right)\right\}=\delta_{k, k^{\prime}}, \quad\left\{a(k), a\left(k^{\prime}\right)\right\}=\left\{a^{\dagger}(k), a^{\dagger}\left(k^{\prime}\right)\right\}=0 \tag{5.194}
\end{equation*}
$$

In the thermodynamic limit, $N_{\mathrm{s}} \rightarrow \infty$, the integer variable $k$ is replaced by the (lattice) momentum variable $k \equiv 2 \pi k / N_{\mathrm{s}}$, which takes values in the interval $-\pi \leq$ $k<\pi$. In turn, the sums in Eq. (5.193) become momentum integrals

$$
\begin{equation*}
\psi(n)=\int_{-\pi}^{\pi} \frac{d k}{2 \pi} e^{i k n} a(k) \tag{5.195}
\end{equation*}
$$

and the non-vanishing anticommutators now are

$$
\begin{equation*}
\left\{a(k), a^{\dagger}\left(k^{\prime}\right)\right\}=2 \pi \delta\left(k-k^{\prime}\right) \tag{5.196}
\end{equation*}
$$

where $\delta(k)$ is the periodic delta function,

$$
\begin{equation*}
2 \pi \delta(k)=\lim _{N_{\mathrm{s}} \rightarrow \infty} \sum_{n=-\frac{N_{\mathrm{s}}}{2}+1}^{\frac{N_{\mathrm{s}}}{2}} e^{i k n} \tag{5.197}
\end{equation*}
$$

After some straightforward algebra we find that the Hamiltonian becomes

$$
\begin{align*}
H= & N_{\mathrm{s}}-\int_{-\pi}^{\pi} \frac{d k}{2 \pi} 2(1+\lambda \cos k) a^{\dagger}(k) a(k) \\
& -\int_{-\pi}^{\pi} \frac{d k}{2 \pi} \lambda\left(e^{i k} a^{\dagger}(k) a^{\dagger}(-k)-e^{-i k} a(k) a(-k)\right) \tag{5.198}
\end{align*}
$$

This Hamiltonian violates fermion-number conservation but, as it should, conserves fermion parity as fermions are created and destroyed in pairs with equal and opposite momentum. In this language this system is reminiscent of the pairing Hamiltonian of the Bardeen-Cooper-Schrieffer (BCS) theory of superconductivity (Schrieffer, 1964) (at the mean-field level).

It will be convenient to "fold" the momentum interval to $0 \leq k<\pi$ and to rewrite the Hamiltonian in the equivalent form

$$
\begin{align*}
H= & N_{\mathrm{s}}-\int_{0}^{\pi} \frac{d k}{2 \pi} 2(1+\lambda \cos k)\left(a^{\dagger}(k) a(k)+a^{\dagger}(-k) a(-k)\right) \\
& -\int_{-\pi}^{\pi} \frac{d k}{2 \pi} 2 i \lambda \sin k\left(a^{\dagger}(k) a^{\dagger}(-k)+a(k) a(-k)\right) \tag{5.199}
\end{align*}
$$

Let us define the spinor field $\Psi(k)$ and its adjoint $\Psi^{\dagger}(k)$

$$
\begin{equation*}
\Psi(k)=\binom{\psi^{\dagger}(k)}{\psi(-k)}, \quad \Psi^{\dagger}(k)=\left(a(k), a^{\dagger}(-k)\right) \tag{5.200}
\end{equation*}
$$

Notice that the two components of the spinor field $\Psi(k)$ are not independent. Indeed, we find that the spinor field obeys the Majorana condition

$$
\begin{equation*}
\Psi^{\dagger}(k)=\left[\sigma_{1} \Psi(-k)\right]^{\mathrm{T}}=\Psi^{\mathrm{T}}(-k) \sigma_{1} \tag{5.201}
\end{equation*}
$$

where $A^{\mathrm{T}}$ is the transpose of the operator (or matrix) $A$, and $\sigma_{1}$ is the real and symmetric Pauli matrix. We have thus rederived in this language the condition that the fermions of the Ising model (and of superconductors!) are Majorana fermions.

As in the BCS theory of superconductivity, we will diagonalize the (pairing) Hamiltonian of Eq. (5.199) by means of a Bogoliubov transformation to a new set of fermions $\eta(k)$,

$$
\begin{align*}
a(k) & =u(k) \eta(k)-i v(k) \eta^{\dagger}(-k)  \tag{5.202}\\
a(-k) & =u(k) \eta(k)+i v(k) \eta^{\dagger}(k)
\end{align*}
$$

where the amplitudes $u(k)$ and $v(k)$ are chosen to be real functions of $k$. The inverse transformation is

$$
\begin{align*}
\eta(k) & =u(k) a(k)+i v(k) a^{\dagger}(-k) \\
\eta(-k) & =u(k) a(-k)-i v(k) a^{\dagger}(k) \tag{5.203}
\end{align*}
$$

We will choose the amplitudes $u(k)$ so that the transformation is canonical, i.e. so that it preserves the (anti)commutation relations

$$
\begin{equation*}
\left\{a(k), a^{\dagger}(q)\right\}=2 \pi \delta(k-q) \Rightarrow\left\{\eta(k), \eta^{\dagger}(q)\right\}=2 \pi \delta(k-q) \tag{5.204}
\end{equation*}
$$

This condition requires that

$$
\begin{equation*}
u^{2}(k)+v^{2}(k)=1 \tag{5.205}
\end{equation*}
$$

This condition is met by writing $u(k)$ and $v(k)$ in terms of a phase angle $\theta(k)$,

$$
\begin{equation*}
u(k)=\cos \theta(k), \quad v(k)=\sin \theta(k) \tag{5.206}
\end{equation*}
$$

We will choose the phase $\theta(k)$ in such a way that the Hamiltonian for the fermions $\eta(k)$ and $\eta(-k)$ does not contain fermion-non-conserving terms, i.e. we have that in the transformed Hamiltonian the coefficient of terms of the form $i\left(\eta^{\dagger}(k) \eta^{\dagger}(-k)+\eta(k) \eta(-k)\right)$ vanishes identically. This leads to the condition

$$
\begin{equation*}
\tan (2 \theta(k))=\frac{\lambda \sin k}{1+\lambda \cos k} \tag{5.207}
\end{equation*}
$$

With these choices the Hamiltonian becomes

$$
\begin{equation*}
H=\varepsilon_{0}(\lambda) N_{\mathrm{s}}+\int_{0}^{\pi} \frac{d k}{2 \pi} \omega(k)\left(\eta^{\dagger}(k) \eta(k)+\eta^{\dagger}(-k) \eta(-k)\right) \tag{5.208}
\end{equation*}
$$

where $\omega(k)$ is found to be

$$
\begin{equation*}
\omega(k)=2 \sqrt{(1+\lambda \cos k)^{2}+\lambda^{2} \sin ^{2} k} \tag{5.209}
\end{equation*}
$$

The ground state of this system, $|0\rangle$, has no excitations and satisfies

$$
\begin{equation*}
\eta(k)|0\rangle=0, \quad \eta(-k)|0\rangle=0 \tag{5.210}
\end{equation*}
$$

The ground-state energy density, $\varepsilon_{0}(\lambda)$, is found to be

$$
\begin{equation*}
\varepsilon_{0}(\lambda)=-\int_{0}^{\pi} \frac{d k}{2 \pi} \omega(k)<0 \tag{5.211}
\end{equation*}
$$

which is negative. After some algebra we can write the ground-state energy density as

$$
\begin{equation*}
\varepsilon_{0}(\lambda)=-\frac{2}{\pi}(1+\lambda) E\left(\frac{\pi}{2}, \sqrt{1-\gamma^{2}}\right), \quad \gamma=\left|\frac{1-\lambda}{1+\lambda}\right| \tag{5.212}
\end{equation*}
$$

where $E(\pi / 2, k)$ (with $k=\sqrt{1-\gamma^{2}}$ ) is the complete elliptic integral of the second kind

$$
\begin{equation*}
E\left(\frac{\pi}{2}, k\right)=\int_{0}^{\pi / 2} d \theta \sqrt{1-k^{2} \sin ^{2} \theta} \tag{5.213}
\end{equation*}
$$

where $k$ is known as the modulus of the elliptic integral.
The excited states of this system are created by the fermion-creation operators $\eta^{\dagger}(k)$ and $\eta^{\dagger}(-k)$. Thus the lowest-energy excited state is $\eta^{\dagger}(k)|0\rangle$, which has an excitation energy $\omega(k)$. The lowest excited state has $\omega(k)$ smallest, which occurs at $k=\pi$, with excitation energy $E_{\text {gap }}(\lambda)=2|1-\lambda|$. Therefore, as $\lambda \rightarrow 1$ the excitation gap vanishes with a critical exponent $v=1$. As anticipated we will identify $\lambda=1$ with the (quantum) critical point of the quantum Ising chain. The state $\eta^{\dagger}(k)|0\rangle$ has an odd number of fermions, and hence is not in this sector of the Hilbert space. In this sector, the lowest-energy state is a two-fermion state, $|k, p\rangle$, each with both momenta at $\pi$.

In classical statistical mechanics we know that as the critical temperature is approached the specific heat $c(T)$ diverges as

$$
\begin{equation*}
c(T) \simeq \mathrm{constant} \times\left|T-T_{\mathrm{c}}\right|^{-\alpha} \tag{5.214}
\end{equation*}
$$

where $\alpha$ is a universal critical exponent. The ground-state energy density of the quantum Ising model is the same as the free-energy density of the classical problem. Thus, we can determine the singular behavior of the specific heat of the 2 D classical Ising model by looking at the behavior of the ground-state energy density $\varepsilon_{0}(\lambda)$. The quantity related to the singular part of the specific heat of the classical problem is

$$
\begin{equation*}
c_{\operatorname{sing}}\left(\frac{T-T_{\mathrm{c}}}{T_{\mathrm{c}}}\right)=-\frac{\partial^{2} \varepsilon_{0}^{\operatorname{sing}}(\lambda)}{\partial \lambda^{2}} \tag{5.215}
\end{equation*}
$$

We can determine the singular part of the energy density by looking at its behavior as $\lambda \rightarrow 1$ (with $t=|\lambda-1|$ )

$$
\begin{equation*}
\varepsilon_{0}^{\text {sing }}(t)=-\frac{4}{\pi}\left[1+\frac{t^{2}}{8}\left(\ln \left(\frac{8}{|t|}\right)-\frac{1}{2}\right)+\cdots\right] \tag{5.216}
\end{equation*}
$$

which tells us that the specific heat of the classical 2D problem has a logarithmic divergence as $T \rightarrow T_{\mathrm{c}}$,

$$
\begin{equation*}
c_{\mathrm{sing}}(t)=\frac{1}{\pi} \ln \left(\frac{8}{|t|}\right) \tag{5.217}
\end{equation*}
$$

This is the Onsager result. Hence the exponent is $\alpha=0$, as expected since the correlation length exponent is $v=1$.

The computation of the correlation functions of the Ising model is more subtle and technically more demanding than what we have done here (see e.g. McCoy and Wu (1973)). Nevertheless at the end of this chapter we will use bosonization results to compute the square of the spin-spin correlation function at the critical point.

### 5.6 Abelian bosonization

We now return to the fermion representation of the quantum Heisenberg antiferromagnetic chain. We are now going to discuss some subtle but very important properties of 1D Fermi systems. To date, these properties are not known to generalize to higher dimensions.

A very important tool for the understanding of 1D Fermi systems is the bosonization transformation. In its abelian form this transformation was first discussed by Bloch (1933) and Tomonaga (1950). It was rediscovered (and better understood) by Lieb and Mattis (1965) in the 1960s, and by Coleman (1975), Luther and Peschel (1975), and Mandelstam (1975) in the 1970s. Witten (1984) solved the non-abelian version of bosonization in 1984. In this section we will consider only the abelian case. Non-abelian bosonization will be discussed in Chapter 7.

Let us consider first a theory of non-interacting (spinless) fermions with Hamiltonian $H_{0}$ given (in units in which the Fermi velocity is $v_{\mathrm{F}}=1$ ) by

$$
\begin{equation*}
H_{0}=\int d x \psi^{\dagger} i \alpha \partial_{x} \psi \tag{5.218}
\end{equation*}
$$

where $\alpha=\gamma_{5}$ (defined in Section 5.2.3), with canonically quantized Fermi fields, i.e.

$$
\begin{align*}
& \left\{\psi_{\alpha}^{\dagger}(x), \psi_{\alpha^{\prime}}\left(x^{\prime}\right)\right\}=\delta_{\alpha \alpha^{\prime}} \delta\left(x-x^{\prime}\right) \\
& \left\{\psi_{\alpha}(x), \psi_{\alpha^{\prime}}\left(x^{\prime}\right)\right\}=\left\{\psi_{\alpha}^{\dagger}(x), \psi_{\alpha^{\prime}}^{\dagger}\left(x^{\prime}\right)\right\}=0 \tag{5.219}
\end{align*}
$$

at equal times. The Hamiltonian $H_{0}$ and the canonical anticommutation relations follow from canonical quantization (for fermions!) of the system with Lagrangian density

$$
\begin{equation*}
\mathcal{L}_{0}=\bar{\psi} i \gamma^{\mu} \partial_{\mu} \psi=\bar{\psi} i \gamma^{0} \partial_{0} \psi-\bar{\psi} i \gamma^{1} \partial_{1} \psi \tag{5.220}
\end{equation*}
$$

which has the form of the relativistic Dirac Lagrangian density in $(1+1)$ dimensions. All along I have assumed that the metric tensor $g_{\mu \nu}$ is

$$
g_{\mu \nu}=\left(\begin{array}{cc}
1 & 0  \tag{5.221}\\
0 & -1
\end{array}\right)
$$

This Lagrangian density is clearly invariant under global continuous chiral transformations. In fact, the Hamiltonian density, in the chiral basis, is

$$
\begin{equation*}
H_{0}=-\int d x\left(R^{\dagger} i \partial_{x} R-L^{\dagger} i \partial_{x} L\right) \tag{5.222}
\end{equation*}
$$

which implies that the right (left)-moving component $R(L)$ moves towards the right (left) at speed 1 (in units in which $v_{\mathrm{F}}=1$ ).

### 5.6.1 Anomalous commutators

Consider now the "vacuum states" $|0\rangle$ and $|G\rangle$, where $|0\rangle$ is the empty state and $|G\rangle$ is the filled Fermi sea obtained by having occupied all the negative-energy oneparticle eigenstates of the Hamiltonian Eq. (5.222). The Hamiltonian $H_{0}$ relative to both vacua differs by normal-ordering terms. Indeed, for any eigenstate $|F\rangle$ of $H_{0}$ one can write

$$
\begin{equation*}
H_{0}=: H_{0}:+E_{F}|F\rangle\langle F| \tag{5.223}
\end{equation*}
$$

where : $H_{0}$ : is the Hamiltonian normal ordered with respect to $|F\rangle$, i.e.

$$
\begin{equation*}
: H_{0}:|F\rangle=\langle F|: H_{0}:=0 \tag{5.224}
\end{equation*}
$$

and $E_{F}$ is the energy of $|F\rangle$,

$$
\begin{equation*}
H_{0}|F\rangle=E_{F}|F\rangle \tag{5.225}
\end{equation*}
$$

Clearly, if we choose $|0\rangle$ or $|G\rangle$ as the reference state, $E_{F}$ will be different.
The currents and densities also need to be normal-ordered. This is equivalent to the subtraction of the (infinite) background charge of the reference state, say of the filled Fermi sea. We will see that these apparently "formal" manipulations have a profound effect on the physics.

Let us compute the commutator of the charge density and current operators at equal times $\left[j_{0}(x), j_{1}\left(x^{\prime}\right)\right]$. Relative to the empty state $|0\rangle$, both operators are already normal-ordered since a state with no fermions has neither charge nor current, i.e.

$$
\begin{equation*}
j_{0}(x)|0\rangle=0, \quad j_{1}(x)|0\rangle=0 \tag{5.226}
\end{equation*}
$$

It will be useful to consider the right and left components of the current $j_{ \pm}$ defined by

$$
\begin{equation*}
j_{ \pm}=\frac{1}{2}\left(j_{0} \pm j_{1}\right) \tag{5.227}
\end{equation*}
$$

Clearly, we get that

$$
\begin{equation*}
j_{+}=R^{\dagger} R \tag{5.228}
\end{equation*}
$$

is the right-moving current, and

$$
\begin{equation*}
j_{-}=L^{\dagger} L \tag{5.229}
\end{equation*}
$$

is the left-moving current. In Fourier components, we find

$$
\begin{equation*}
j_{+}(p)=\frac{1}{\sqrt{L_{0}}} \sum_{k} R^{\dagger}(k) R(k+p) \tag{5.230}
\end{equation*}
$$

which annihilates the empty state $|0\rangle$. In fact, for any state $|\phi\rangle$ with a finite number of particles, the result is

$$
\begin{equation*}
\left[j_{ \pm}(p), j_{ \pm}\left(p^{\prime}\right)\right]|\phi\rangle=0 \tag{5.231}
\end{equation*}
$$

Consider now the filled Fermi sea, $|G\rangle$. Explicitly we can write

$$
\begin{equation*}
|G\rangle=\prod_{p<0} R^{\dagger}(p) \prod_{q>0} L^{\dagger}(q)|0\rangle \tag{5.232}
\end{equation*}
$$

In other words, in $|G\rangle$ all right-moving states with negative momentum and all left-moving states with positive momentum are filled (see Fig. 5.2).

Let us compute the commutator $\left[j_{+}(x), j_{+}\left(x^{\prime}\right)\right]$ at equal times (see, for instance, Affleck (1986a)). The operator $j_{+}(x)$ is formally equal to a product of fermion
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-147.jpg?height=688&width=637&top_left_y=200&top_left_x=527)

Figure 5.2 Vacuum $|G\rangle$ is obtained by filling the right-moving states with negative momentum (filled circles) and filling the left-moving states with positive momentum (empty circles).
operators at the same point. Since we anticipate divergences, we should "pointsplit" the product

$$
\begin{equation*}
j_{+}(x)=R^{\dagger}(x) R(x)=\lim _{\epsilon \rightarrow 0} R^{\dagger}(x+\epsilon) R(x-\epsilon) \tag{5.233}
\end{equation*}
$$

and write $j_{+}$in terms of a normal-ordered operator : $j_{+}$: and a vacuum expectation value

$$
\begin{equation*}
j_{+}(x)=: j_{+}(x):+\lim _{\epsilon \rightarrow 0}\langle G| R^{\dagger}(x+\epsilon) R(x-\epsilon)|G\rangle \tag{5.234}
\end{equation*}
$$

The singularities are absorbed into the expectation value.
Consider a system on a segment of length $L_{0}$ with PBCs and expand $R(x)$ in Fourier series

$$
\begin{equation*}
R(x)=\frac{1}{\sqrt{L_{0}}} \sum_{p=-\infty}^{+\infty} R_{p} e^{i \frac{2 \pi x p}{L_{0}}} \tag{5.235}
\end{equation*}
$$

The vacuum expectation value to be computed is

$$
\begin{equation*}
\langle G| R^{\dagger}(x+\epsilon) R(x-\epsilon)|G\rangle=\frac{1}{L_{0}} \sum_{p, p^{\prime}=-\infty}^{+\infty} e^{i \frac{2 \pi}{L_{0}}\left[(x-\epsilon) p^{\prime}-(x+\epsilon) p\right]}\langle G| R_{p}^{\dagger} R_{p}|G\rangle \tag{5.236}
\end{equation*}
$$

Using the definition of the filled Fermi sea, we get

$$
\begin{equation*}
\langle G| R_{p}^{\dagger} R_{p^{\prime}}|G\rangle=\delta_{p, p^{\prime}} \theta(-p) \tag{5.237}
\end{equation*}
$$

$$
\begin{equation*}
\langle G| L_{p}^{\dagger} L_{p^{\prime}}|G\rangle=\delta_{p, p^{\prime}} \theta(+p) \tag{5.238}
\end{equation*}
$$

Hence

$$
\begin{equation*}
\langle G| R^{\dagger}(x+\epsilon) R(x-\epsilon)|G\rangle=\frac{1}{L_{0}} \sum_{p=-\infty}^{0} e^{-i \frac{2 \pi p}{L_{0}}(2 \epsilon)} \tag{5.239}
\end{equation*}
$$

This is a conditionally convergent series. In order to make it convergent, we will regulate this series by damping out the contributions due to states deep below the Fermi energy. We can achieve this if we analytically continue $\epsilon$ to the upper half of the complex plane (i.e. $\epsilon \rightarrow \epsilon+i \eta$ ) to get the convergent expression

$$
\begin{align*}
\langle G| R^{\dagger}(x+\epsilon) R(x-\epsilon)|G\rangle & =\lim _{\eta \rightarrow 0} \frac{1}{L_{0}} \sum_{p=0}^{\infty} e^{i \frac{4 \pi p}{L_{0}}(\epsilon+i \eta)} \\
& =\lim _{\eta \rightarrow 0} \frac{1}{L_{0}\left(1-e^{i \frac{4 \pi}{L_{0}}(\epsilon+i \eta)}\right)} \\
& =\lim _{\eta \rightarrow 0} \frac{1}{L_{0}\left(-i\left(4 \pi / L_{0}\right)(\epsilon+i \eta)\right)} \\
& =\frac{i}{4 \pi \epsilon} \tag{5.240}
\end{align*}
$$

Thus, the result is

$$
\begin{equation*}
\langle G| R^{\dagger}(x+\epsilon) R(x-\epsilon)|G\rangle=\frac{i}{4 \pi \epsilon} \tag{5.241}
\end{equation*}
$$

Similarly, the expectation value $\langle G| L^{\dagger}(x+\epsilon) L(x-\epsilon)|G\rangle$ is found to be given by

$$
\begin{equation*}
\langle G| L^{\dagger}(x+\epsilon) L(x-\epsilon)|G\rangle=-\frac{i}{4 \pi \epsilon} \tag{5.242}
\end{equation*}
$$

The current commutator can now be readily evaluated:

$$
\left.\left.\left.\begin{array}{rl}
{\left[j_{+}(x), j_{+}\left(x^{\prime}\right)\right]=} & \lim _{\epsilon, \epsilon^{\prime} \rightarrow 0}
\end{array}\right] R^{\dagger}(x+\epsilon) R(x-\epsilon), R^{\dagger}\left(x^{\prime}-\epsilon^{\prime}\right) R\left(x^{\prime}+\epsilon^{\prime}\right)\right]\right\}=\lim _{\epsilon, \epsilon^{\prime} \rightarrow 0}\left\{\delta\left(x^{\prime}-x+\epsilon^{\prime}+\epsilon\right) R^{\dagger}(x+\epsilon) R\left(x^{\prime}-\epsilon^{\prime}\right)\right\} \text { (x) } \begin{aligned}
& \\
&\left.-\delta\left(x-x^{\prime}+\epsilon^{\prime}+\epsilon\right) R^{\dagger}\left(x^{\prime}+\epsilon^{\prime}\right) R(x-\epsilon)\right\}
\end{aligned}
$$

The contributions from normal-ordered products cancel out (since they are regular). The only non-zero terms are, using Eq. (5.239),

$$
\begin{equation*}
\left[j_{+}(x), j_{+}\left(x^{\prime}\right)\right]=\lim _{\epsilon, \epsilon^{\prime} \rightarrow 0}\left(\frac{i \delta\left(x^{\prime}-x+\epsilon^{\prime}+\epsilon\right)}{2 \pi\left(x-x^{\prime}+\epsilon+\epsilon^{\prime}\right)}-\frac{i \delta\left(x^{\prime}-x+\epsilon+\epsilon^{\prime}\right)}{2 \pi\left(x^{\prime}-x+\epsilon+\epsilon^{\prime}\right)}\right) \tag{5.244}
\end{equation*}
$$

Thus, in this limit we find

$$
\begin{equation*}
\left[j_{+}(x), j_{+}\left(x^{\prime}\right)\right]=-\frac{i}{2 \pi} \partial_{x} \delta\left(x-x^{\prime}\right) \tag{5.245}
\end{equation*}
$$

and

$$
\begin{equation*}
\left[j_{-}(x), j_{-}\left(x^{\prime}\right)\right]=+\frac{i}{2 \pi} \partial_{x} \delta\left(x-x^{\prime}\right) \tag{5.246}
\end{equation*}
$$

In terms of Lorentz components, we get

$$
\begin{equation*}
\left[j_{0}(x), j_{1}\left(x^{\prime}\right)\right]=-\frac{i}{\pi} \partial_{x} \delta\left(x-x^{\prime}\right) \tag{5.247}
\end{equation*}
$$

whereas

$$
\begin{equation*}
\left[j_{0}(x), j_{0}\left(x^{\prime}\right)\right]=\left[j_{1}(x), j_{1}\left(x^{\prime}\right)\right]=0 \tag{5.248}
\end{equation*}
$$

The commutator $\left[j_{0}(x), j_{1}\left(x^{\prime}\right)\right.$ ] has a non-vanishing right-hand side, which is a c-number. These terms are generally known as Schwinger terms. They are pervasive in theories of relativistic fermions. But terms of this sort are also found in non-relativistic systems of fermions at finite densities. In fact, these terms are the key to the derivation of the $f$-sum rule (Pines and Nozières, 1966; Martin, 1967).

### 5.6.2 The bosonization rules

We thus notice that the equal-time current commutator $\left[j_{0}(x), j_{1}\left(x^{\prime}\right)\right]$ acquires a Schwinger term if the currents and densities are normal-ordered relative to the filled Fermi sea. The identity of Eq. (5.247) suggests that there should be a connection between a canonical Fermi field $\psi$ with a filled Fermi sea and a canonical Bose field $\phi$. Let $\Pi(x)$ be the canonical momentum conjugate to $\phi$, i.e. at equal times

$$
\begin{equation*}
\left[\phi(x), \Pi\left(x^{\prime}\right)\right]=i \delta\left(x-x^{\prime}\right) \tag{5.249}
\end{equation*}
$$

If we identify the normal-ordered operators

$$
\begin{equation*}
j_{0}(x)=\frac{1}{\sqrt{\pi}} \partial_{x} \phi(x) \tag{5.250}
\end{equation*}
$$

and

$$
\begin{equation*}
j_{1}(x)=-\frac{1}{\sqrt{\pi}} \partial_{t} \phi(x) \equiv-\frac{1}{\sqrt{\pi}} \Pi(x) \tag{5.251}
\end{equation*}
$$

we see that Eq. (5.249) implies

$$
\begin{equation*}
\frac{1}{\pi}\left[\partial_{x} \phi(x), \Pi\left(x^{\prime}\right)\right]=\frac{i}{\pi} \delta^{\prime}\left(x-x^{\prime}\right) \tag{5.252}
\end{equation*}
$$

which is consistent with the Schwinger term. These equations can be written in the more compact form

$$
\begin{equation*}
j_{\mu}=\frac{1}{\sqrt{\pi}} \epsilon_{\mu \nu} \partial^{\nu} \phi \tag{5.253}
\end{equation*}
$$

where $\epsilon_{\mu \nu}$ is the (antisymmetric) Levi-Civita tensor and we are using from now on the notation $t \rightarrow x_{0}, x \rightarrow x_{1}$, and $x \equiv\left(x_{0}, x_{1}\right)$. We then arrive at the conclusion that the current commutator with a Schwinger term, Eq. (5.247), is equivalent to the statement that there exists a canonical Bose field $\phi$ whose topological current, Eq. (5.253), coincides with the normal-ordered fermion current.

The fermion current $j_{\mu}$ is conserved, i.e.

$$
\begin{equation*}
\partial_{\mu} j^{\mu}=0 \tag{5.254}
\end{equation*}
$$

which is automatically satisfied by Eq. (5.253). In the case of the free theory, the numbers of left and right movers are separately conserved. This means that not only should $j_{\mu}$ be conserved, but also $j_{\mu}^{5}$, defined by

$$
\begin{equation*}
j_{\mu}^{5}=\bar{\psi} \gamma_{\mu} \gamma^{5} \psi \tag{5.255}
\end{equation*}
$$

should be conserved. Using the identity

$$
\begin{equation*}
\gamma_{\mu} \gamma_{5}=\epsilon_{\mu \nu} \gamma^{\nu} \tag{5.256}
\end{equation*}
$$

we see that $j_{\mu}$ and $j_{\mu}^{5}$ are in fact related by

$$
\begin{equation*}
j_{\mu}^{5}=\epsilon_{\mu \nu} j^{\nu} \tag{5.257}
\end{equation*}
$$

The divergence of $j_{\mu}^{5}$ can be computed in terms of the Bose field $\phi$ as follows:

$$
\begin{equation*}
\partial_{\mu} j^{5 \mu}=\epsilon^{\mu \nu} \partial_{\mu} j_{\nu}=\frac{1}{\sqrt{\pi}} \epsilon^{\mu \nu} \epsilon_{\nu \lambda} \partial_{\mu} \partial^{\lambda} \phi=\frac{1}{\sqrt{\pi}} \partial^{2} \phi \tag{5.258}
\end{equation*}
$$

Thus, the conservation of the axial current $j_{\mu}^{5}$ implies that $\phi$ should be a free canonical Bose field

$$
\begin{equation*}
\partial_{\mu} j^{5 \mu}=0 \Rightarrow \partial^{2} \phi=0 \tag{5.259}
\end{equation*}
$$

where

$$
\begin{equation*}
\partial^{2} \equiv \partial_{0}^{2}-\partial_{1}^{2} \tag{5.260}
\end{equation*}
$$

The Lagrangian for these bosons is simply given by

$$
\begin{equation*}
\mathcal{L}_{\mathrm{B}}=\frac{1}{2}\left(\partial_{\mu} \phi\right)^{2} \tag{5.261}
\end{equation*}
$$

Conversely, if $\phi$ is not free $j_{\mu}^{5}$ should not be conserved. We will see below that this is indeed what happens in the Thirring-Luttinger model.

Before doing that, let us consider a set of identities originally derived by Mandelstam (1975). By analogy with the Jordan-Wigner transformation of Section 5.2.1, we should expect that these identities should be highly non-local, although they should have local anticommutation relations. These identities, like all others derived within the bosonization approach, only make sense within the operator-product expansion (OPE): the operators so identified give rise to the same leading singular behavior when arbitrary matrix elements are computed. Also, from the Jordan-Wigner analogy, we should expect that the fermion operators, as seen from their representation in terms of bosons, should act like operators that create solitons.

The free Bose field $\phi$ can be written in terms of creation and annihilation operators. Let $\phi^{+}(x)\left(\phi^{-}(x)\right)$ denote the piece of $\phi(x)$ which depends on the creation (annihilation) operators only,

$$
\begin{equation*}
\phi(x)=\phi^{+}(x)+\phi^{-}(x) \tag{5.262}
\end{equation*}
$$

where $\phi(x)$ is a Heisenberg operator $\left(x \equiv\left(x_{0}, x_{1}\right)\right.$, see Eq. (5.253)). Obviously, $\phi^{-}$annihilates the vacuum of the Bose theory. The operators $\phi^{+}$and $\phi^{-}$obey the commutation relations

$$
\begin{equation*}
\left[\phi^{+}\left(x_{0}, x_{1}\right), \phi^{-}\left(x_{0}^{\prime}, x_{1}^{\prime}\right)\right]=\lim _{\epsilon \rightarrow 0} \Delta_{+}\left(x_{0}-x_{0}^{\prime}, x_{1}-x_{1}^{\prime}\right) \tag{5.263}
\end{equation*}
$$

where $\Delta_{+}$is given by

$$
\begin{equation*}
\Delta_{+}\left(x_{0}-x_{0}^{\prime}, x_{1}-x_{1}^{\prime}\right)=-\frac{1}{4 \pi} \ln \left[\frac{\left(x_{1}-x_{1}^{\prime}\right)^{2}-\left(x_{0}-x_{0}^{\prime}+i \epsilon\right)^{2}}{a^{2}}\right] \tag{5.264}
\end{equation*}
$$

where $a$ is a short-distance cutoff, and it is necessary to make the argument of the logarithm dimensionless.

Consider now the operators $\mathcal{O}_{\alpha}(x)$ and $\mathcal{Q}_{\beta}(x)$ defined by

$$
\begin{equation*}
\mathcal{O}_{\alpha}(x)=e^{i \alpha \phi(x)} \tag{5.265}
\end{equation*}
$$

and

$$
\begin{equation*}
\mathcal{Q}_{\beta}(x)=e^{i \beta \int_{-\infty}^{x_{1}} d x_{1}^{\prime} \partial_{0} \phi\left(x_{0}, x_{1}^{\prime}\right)} \equiv e^{i \beta \int_{-\infty}^{x_{1}} d x_{1}^{\prime} \Pi\left(x_{0}, x_{1}^{\prime}\right)} \tag{5.266}
\end{equation*}
$$

When acting on a state $\left|\left\{\phi\left(x^{\prime}\right)\right\}\right\rangle, \mathcal{O}_{\alpha}(x)$ simply multiplies the state by $e^{i \alpha \phi(x)}$. The operator $\mathcal{Q}_{\beta}(x)$ has quite a different effect. Since $\Pi(x)$ and $\phi(x)$ are conjugate pairs, $\mathcal{Q}_{\beta}(x)$ will shift the value of $\phi\left(x_{0}, x_{1}^{\prime}\right)$ to $\phi\left(x_{0}, x_{1}^{\prime}\right)+\beta$ for all $x_{1}^{\prime}<x_{1}$. Thus, $\mathcal{Q}_{\beta}(x)$ creates a coherent state, which we can call a soliton:

$$
\begin{equation*}
\mathcal{Q}_{\beta}(x)\left|\left\{\phi\left(x_{0}, x_{1}^{\prime}\right)\right\}\right\rangle=\left|\left\{\phi\left(x_{0}, x_{1}^{\prime}\right)+\beta \theta\left(x_{1}-x_{1}^{\prime}\right)\right\}\right\rangle \tag{5.267}
\end{equation*}
$$

Consider now the operator $\psi_{\alpha, \beta}(x)$ of the form

$$
\begin{equation*}
\psi_{\alpha, \beta}(x)=\mathcal{O}_{\alpha}(x) \mathcal{Q}_{\beta}(x)=e^{i \alpha \phi(x)+i \beta \int_{-\infty}^{x_{1}} d x_{1}^{\prime} \partial_{0} \phi\left(x_{0}, x_{1}^{\prime}\right)} \tag{5.268}
\end{equation*}
$$

and compute the product $\psi_{\alpha, \beta}(x) \psi_{\alpha, \beta}\left(x^{\prime}\right)$ at equal times $\left(x_{0}^{\prime}=x_{0}\right)$. Using the Baker-Hausdorff formula

$$
\begin{equation*}
e^{\hat{A}} e^{\hat{B}}=e^{\hat{B}} e^{\hat{A}} e^{-[\hat{A}, \hat{B}]}=e^{\hat{A}+\hat{B}-\frac{1}{2}[\hat{A}, \hat{B}]} \tag{5.269}
\end{equation*}
$$

where $[\hat{A}, \hat{B}]$ is a complex-valued distribution, we get

$$
\begin{equation*}
\psi_{\alpha, \beta}(x) \psi_{\alpha, \beta}\left(x^{\prime}\right)=\psi_{\alpha, \beta}\left(x^{\prime}\right) \psi_{\alpha, \beta}(x) e^{-i \Phi\left(x, x^{\prime}\right)} \tag{5.270}
\end{equation*}
$$

where $\Phi\left(x, x^{\prime}\right)$ is given (all the commutators are understood to be at equal times and $x_{0}=x_{0}^{\prime}$ but $x_{1}^{\prime} \neq x_{1}$ ) by

$$
\begin{align*}
i \Phi\left(x, x^{\prime}\right)= & -\alpha^{2}\left[\phi(x), \phi\left(x^{\prime}\right)\right]-\beta^{2} \int_{-\infty}^{x_{1}} d y_{1} \int_{-\infty}^{x_{1}^{\prime}} d y_{1}^{\prime}\left[\Pi(y), \Pi\left(y^{\prime}\right)\right] \\
& -\alpha \beta \int_{-\infty}^{x_{1}^{\prime}} d y_{1}^{\prime}\left[\phi(x), \Pi\left(y^{\prime}\right)\right]-\alpha \beta \int_{-\infty}^{x_{1}} d y_{1}\left[\Pi(y), \phi\left(x^{\prime}\right)\right] \\
= & -i \alpha \beta \tag{5.271}
\end{align*}
$$

For the operators $\psi_{\alpha, \beta}(x)$ to have fermion commutation relations we need to choose $\alpha \beta= \pm \pi$. It is useful to write left and right components of the Fermi field in the form (Mandelstam, 1975)

$$
\begin{align*}
& R(x)=\frac{1}{\sqrt{2 \pi a}}: e^{-i \frac{2 \pi}{\beta} \int_{-\infty}^{x_{1}} d x_{1}^{\prime} \Pi\left(x_{0}, x_{1}^{\prime}\right)+i \frac{\beta}{2} \phi(x)}:  \tag{5.272}\\
& L(x)=\frac{1}{\sqrt{2 \pi a}}: e^{-i \frac{2 \pi}{\beta} \int_{-\infty}^{x_{1}} d x_{1}^{\prime} \Pi\left(x_{0}, x_{1}^{\prime}\right)-\frac{i \beta}{2} \phi(x)}: \tag{5.273}
\end{align*}
$$

The constant $\beta$ is arbitrary and it can be chosen by demanding that the currents satisfy the operator identity

$$
\begin{equation*}
j_{\mu}=\frac{1}{\sqrt{\pi}} \epsilon_{\mu \nu} \partial^{\nu} \phi \tag{5.274}
\end{equation*}
$$

From Eqs. (5.272) and (5.273), it follows that the free fermionic current is identified with the bosonic operator (Mandelstam, 1975)

$$
\begin{equation*}
j_{\mu}=\frac{\beta}{2 \pi} \epsilon_{\mu \nu} \partial^{\nu} \phi \tag{5.275}
\end{equation*}
$$

Thus, we must choose $\beta=\sqrt{4 \pi}$ for the free-fermion problem.
The free-scalar-field operator $\phi(x)$ and the canonical momentum $\Pi(x)$ have the mode expansions

$$
\begin{align*}
& \phi(x)=\int_{-\infty}^{\infty} \frac{d k}{2 \pi} \frac{1}{2|k|}\left(a(k) e^{i\left(|k| x_{0}-k x_{1}\right)}+a^{\dagger}(k) e^{-i\left(|k| x_{0}-k x_{1}\right)}\right) \\
& \Pi(x)=\int_{-\infty}^{\infty} \frac{d k}{2 \pi} \frac{1}{2|k|}\left(i|k| a(k) e^{i\left(|k| x_{0}-k x_{1}\right)}-i|k| a^{\dagger}(k) e^{-i\left(| | k \mid x_{0}-k x_{1}\right)}\right) \tag{5.276}
\end{align*}
$$

where the creation and annihilation operators obey standard commutation relations, i.e. $\left[a(k), a^{\dagger}\left(k^{\prime}\right)\right]=(2 \pi) 2|k| \delta\left(k-k^{\prime}\right)$.

The field operator $\phi(x)$ and the canonical momentum $\Pi(x)$ admit a decomposition in terms of right- and left-moving chiral bosonic fields, $\phi_{\mathrm{R}}(x) \equiv \phi_{\mathrm{R}}\left(x_{0}-x_{1}\right)$ and $\phi_{\mathrm{L}}(x) \equiv \phi_{\mathrm{L}}\left(x_{0}+x_{1}\right)$, which are given by

$$
\begin{align*}
\phi_{\mathrm{R}}\left(x_{0}-x_{1}\right) & =\int_{0}^{\infty} \frac{d k}{2 \pi} \frac{1}{2 k}\left(a(k) e^{i k\left(x_{0}-x_{1}\right)}+a^{\dagger}(k) e^{-i k\left(x_{0}-x_{1}\right)}\right)  \tag{5.277a}\\
\phi_{\mathrm{L}}\left(x_{0}+x_{1}\right) & =\int_{-\infty}^{0} \frac{d k}{2 \pi} \frac{1}{2 k}\left(-a(k) e^{-i k\left(x_{0}+x_{1}\right)}+a^{\dagger}(k) e^{i k\left(x_{0}+x_{1}\right)}\right) \tag{5.277b}
\end{align*}
$$

It is convenient to introduce the dual field $\vartheta(x)$, defined by

$$
\begin{equation*}
\Pi(x)=\partial_{1} \vartheta(x) \tag{5.278}
\end{equation*}
$$

or, equivalently (up to a suitably defined boundary condition),

$$
\begin{equation*}
\vartheta(x) \equiv \int_{-\infty}^{x_{1}} d x_{1}^{\prime} \Pi\left(x_{0}, x_{1}^{\prime}\right) \tag{5.279}
\end{equation*}
$$

The field operator $\phi(x)$ and the dual field operator $\vartheta(x)$ obey the Cauchy-Riemann equations

$$
\begin{equation*}
\partial_{0} \phi=\partial_{1} \vartheta, \quad \partial_{1} \phi=-\partial_{0} \vartheta \tag{5.280}
\end{equation*}
$$

as operator identities. The chiral decomposition reads

$$
\begin{align*}
& \phi\left(x_{0}, x_{1}\right)=\phi_{\mathrm{R}}\left(x_{0}-x_{1}\right)+\phi_{\mathrm{L}}\left(x_{0}+x_{1}\right)  \tag{5.281}\\
& \vartheta\left(x_{0}, x_{1}\right)=-\phi_{\mathrm{R}}\left(x_{0}-x_{1}\right)+\phi_{\mathrm{L}}\left(x_{0}+x_{1}\right)
\end{align*}
$$

In this subsection we will work primarily with the free-fermion problem. In this case the Mandelstam identities, Eq. (5.272) and Eq. (5.273), take the simpler form

$$
\begin{align*}
& R(x)=\frac{1}{\sqrt{2 \pi a}}: e^{i 2 \sqrt{\pi} \phi_{\mathrm{R}}(x)}: \\
& L(x)=\frac{1}{\sqrt{2 \pi a}}: e^{-i 2 \sqrt{\pi} \phi_{\mathrm{L}}(x)}: \tag{5.282}
\end{align*}
$$

It is interesting to consider products of the form $\lim _{y_{1} \rightarrow x_{1}} R^{\dagger}(x) L(y)$ and $\lim _{y_{1} \rightarrow x_{1}} L^{\dagger}(y) R(x)$ at equal times. We will use Mandelstam's formulas,

Eqs. (5.282), to derive an operator product expansion for $R^{\dagger} L$ and $L^{\dagger} R$, both to leading order. We find

$$
\begin{equation*}
\lim _{y_{1} \rightarrow x_{1}} R^{\dagger}(x) L(y)=\frac{1}{2 \pi a}: e^{i 2 \sqrt{\pi} \phi_{\mathrm{R}}(x)}:: e^{-i 2 \sqrt{\pi} \phi_{\mathrm{L}}(y)}: \tag{5.283}
\end{equation*}
$$

We can make use of the Baker-Hausdorff formula once again, now in the form

$$
\begin{equation*}
: e^{\hat{A}}:: e^{\hat{B}}:=e^{\left[\hat{A}^{+}, \hat{B}^{-}\right]}: e^{\hat{A}+\hat{B}}: \tag{5.284}
\end{equation*}
$$

and write down a bosonic expression for $R^{\dagger} L$. The normal-ordered operator is, by definition, regular. Thus we can take the limit readily to find

$$
\begin{equation*}
\lim _{y \rightarrow x}: e^{\hat{A}+\hat{B}}:=: e^{-i \beta \phi(x)}: \tag{5.285}
\end{equation*}
$$

This operator is multiplied by a singular coefficient that compensates for the fact that $R^{\dagger} L$ and $e^{-i \beta \phi}$ have superficially different scaling dimensions. An explicit calculation gives the operator identity

$$
\begin{equation*}
\lim _{y_{1} \rightarrow x_{1}} R^{\dagger}(x) L(y)=\frac{1}{2 \pi a}: e^{-i 2 \sqrt{\pi} \phi(x)}: \tag{5.286}
\end{equation*}
$$

Similarly, one finds the identification

$$
\begin{equation*}
\lim _{y_{1} \rightarrow x_{1}} L^{\dagger}\left(x_{0}, y_{1}\right) R\left(x_{0}, x_{1}\right)=\frac{1}{2 \pi a}: e^{+i 2 \sqrt{\pi} \phi(x)}: \tag{5.287}
\end{equation*}
$$

To sum up, the Dirac mass bilinear operator $\bar{\psi} \psi$ at $\beta=\sqrt{4 \pi}$ is given by

$$
\begin{equation*}
\bar{\psi}(x) \psi(x) \equiv \lim _{y_{1} \rightarrow x_{1}} \bar{\psi}\left(x_{0}, x_{1}\right) \psi\left(x_{0}, y_{1}\right)=\frac{1}{\pi a}: \cos (\sqrt{4 \pi} \phi(x)): \tag{5.288}
\end{equation*}
$$

In the Ising regime of the Heisenberg model, we expect $\langle\bar{\psi} \psi\rangle$ to be different from zero and therefore the bosonic theory should have a ground state such that the expectation value $\langle\cos (\sqrt{4 \pi} \phi)\rangle$ is not zero. Under a chiral transformation by $\theta=\pi / 2, \bar{\psi} \psi$ transforms as

$$
\begin{equation*}
\bar{\psi} \psi \rightarrow-\bar{\psi} \psi \tag{5.289}
\end{equation*}
$$

which is equivalent to a sublattice exchange. In bosonic language, this transformation amounts to

$$
\begin{equation*}
\phi \rightarrow \phi+\frac{\pi}{\sqrt{4 \pi}} \tag{5.290}
\end{equation*}
$$

The Umklapp operators play a crucial role here (Emery, 1979; den Nijs, 1981; Haldane, 1982). These operators enter the interaction Hamiltonian through terms of the form (see Eq. (5.132))

$$
\begin{equation*}
\int d x_{1}\left\{\left(R^{\dagger} L\right)^{2}+\left(L^{\dagger} R\right)^{2}\right\} \tag{5.291}
\end{equation*}
$$

These terms can be bosonized using the Mandelstam identities Eqs. (5.282). Indeed, we get the (equal-time) operator expansion

$$
\begin{align*}
\lim _{y_{1} \rightarrow x_{1}}\left(R^{\dagger}(x) L(y)\right)^{2} & =\left(\frac{1}{2 \pi a}\right)^{2}: e^{-i \sqrt{4 \pi} \phi(x)}:: e^{-i \sqrt{4 \pi} \phi(y)}: \\
& =\left(\frac{1}{2 \pi a}\right)^{2}: e^{-4 \pi\left[\phi^{+}(x), \phi^{-}(y)\right]}:: e^{-i 2 \sqrt{4 \pi} \phi(x)}: \\
& =\left(\frac{1}{2 \pi a}\right)^{2} e^{-4 \pi \Delta_{+}\left(0^{+}, x_{1}-y_{1}\right)}: e^{-i 2 \sqrt{4 \pi} \phi(x)}: \tag{5.292}
\end{align*}
$$

where Eqs. (5.269) and (5.263) have been used. In short, the bosonized version of the Umklapp terms is (at $\beta=\sqrt{4 \pi}$ )

$$
\begin{equation*}
\lim _{y_{1} \rightarrow x_{1}}\left(R^{\dagger}(x) L(y)\right)^{2}=\left(\frac{1}{2 \pi a}\right)^{2}: e^{-i 4 \sqrt{\pi} \phi(x)}: \tag{5.293}
\end{equation*}
$$

and likewise

$$
\begin{equation*}
\lim _{y_{1} \rightarrow x_{1}}\left(L^{\dagger}(y) R(x)\right)^{2}=\left(\frac{1}{2 \pi a}\right)^{2}: e^{+i 4 \sqrt{\pi} \phi(x)}: \tag{5.294}
\end{equation*}
$$

### 5.6.3 The sine-Gordon theory

Now that we have done all the hard work and derived the necessary identities, we are in position to write down the bosonized form of the Lagrangian. The fermionic Lagrangian density (see Eqs. (5.220) and (5.132))

$$
\begin{equation*}
\mathcal{L}_{\mathrm{F}}=\bar{\psi} i \gamma^{\mu} \partial_{\mu} \psi-\gamma\left(\bar{\psi} \gamma_{\mu} \psi\right)^{2}+2 \gamma\left(\left(R^{\dagger} L\right)^{2}+\left(L^{\dagger} R\right)^{2}\right) \tag{5.295}
\end{equation*}
$$

which we showed was equivalent to the Heisenberg model (in the continuum limit), is thus equivalent to a bosonic theory with Lagrangian density (see Eqs. (5.261) and (5.274))

$$
\begin{equation*}
\mathcal{L}_{\mathrm{B}}=\frac{1}{2}\left(\partial_{\mu} \phi\right)^{2}-\frac{\gamma}{\pi} \epsilon_{\mu \nu} \partial^{\nu} \phi \epsilon^{\mu \lambda} \partial_{\lambda} \phi+\frac{\gamma}{\pi^{2} a^{2}}: \cos (4 \sqrt{\pi} \phi): \tag{5.296}
\end{equation*}
$$

Lorentz invariance is kept in this form of the bosonized Lagrangian. In Chapter 6 we will do a somewhat different analysis in which in addition to a renormalization of the stiffness (or compactification radius) there is a finite non-universal renormalization of the speed.

Using the identity

$$
\begin{equation*}
\epsilon_{\mu \nu} \epsilon^{\mu \lambda}=-\delta_{v}^{\lambda} \tag{5.297}
\end{equation*}
$$

we can write

$$
\begin{equation*}
\mathcal{L}_{\mathrm{B}}=\frac{1}{2}\left(\partial_{\mu} \phi\right)^{2}+\frac{\gamma}{\pi}\left(\partial_{\mu} \phi\right)^{2}+\frac{\gamma}{\pi^{2} a^{2}}: \cos (4 \sqrt{\pi} \phi): \tag{5.298}
\end{equation*}
$$

Thus, the interactions in the fermions give rise to (a) a rescaling of the Bose field $\phi$ and (b) a non-linear term.

This Lagrangian density can be brought into the canonical form by a simple rescaling of the field $\phi(x)$

$$
\begin{equation*}
\left(1+\frac{2 \gamma}{\pi}\right)^{1 / 2} \phi(x) \equiv \varphi(x) \tag{5.299}
\end{equation*}
$$

If we define $\beta$ by the expression

$$
\begin{equation*}
\beta^{2}=\frac{4 \pi}{1+2 \gamma / \pi} \tag{5.300}
\end{equation*}
$$

we can write the Lagrangian in the sine-Gordon form

$$
\begin{equation*}
\mathcal{L}_{\mathrm{B}}=\frac{1}{2}\left(\partial_{\mu} \varphi\right)^{2}+g: \cos (2 \beta \varphi): \tag{5.301}
\end{equation*}
$$

where $g$, the sine-Gordon coupling constant, is given by

$$
\begin{equation*}
g \approx \frac{\gamma}{\pi^{2} a_{0}^{2}} \tag{5.302}
\end{equation*}
$$

up to a finite non-universal multiplicative constant determined by the short-distance cutoff (i.e. we have arbitrarily set $c \mu a_{0}=1$ ). Thus, the effective bosonized theory has the sine-Gordon form, a problem that we discussed in detail in Chapter 4.

The rescaling of $\phi$ implies that the canonical momentum $\Pi$ should also be rescaled so as to keep the form of the canonical commutation relations. Thus $\Pi$ is scaled as

$$
\begin{equation*}
\Pi=\left(1+\frac{2 \gamma}{\pi}\right)^{-1 / 2} \partial_{0} \varphi \tag{5.303}
\end{equation*}
$$

The Mandelstam operators now read (see Eqs. (5.282))

$$
\begin{align*}
& R(x)=\frac{1}{\sqrt{2 \pi a}}: e^{-i \frac{2 \pi}{\beta} \vartheta\left(x_{0}, x_{1}\right)+i \frac{\beta}{2} \varphi(x)}: \\
& L(x)=\frac{1}{\sqrt{2 \pi a}}: e^{-i \frac{2 \pi}{\beta} \vartheta\left(x_{0}, x_{1}\right)-i \frac{\beta}{2} \varphi(x)}: \tag{5.304}
\end{align*}
$$

with $\beta$ given by Eq. (5.300), and $\vartheta$ is the field dual to the field $\varphi$.
Similarly, the order parameter field $\bar{\psi} \psi$ now becomes (see Eqs. (5.285), (5.299), and (5.300))

$$
\begin{equation*}
\bar{\psi}(x) \psi(x)=\frac{1}{\pi a}: \cos (\beta \varphi): \tag{5.305}
\end{equation*}
$$

This formula will help us to determine the correlation function of the staggered longitudinal order parameter at long distances. We can also find bosonized expressions for the transverse components of the order parameter, i.e. $S^{ \pm}(2 s+1)-S^{ \pm}(2 s)$.

The same procedure as that which led to the relation between the (longitudinal) staggered magnetization $S_{z}(2 s+1)-S_{z}(2 s)$ and $\bar{\psi} \psi$, Eq. (5.131) (up to singular prefactors), now yields an operator correspondence for the transverse staggered magnetization

$$
\begin{align*}
N^{+}(x) & =S^{+}(2 s+1)-S^{+}(2 s) \\
& \sim e^{-i \pi \int_{-\infty}^{x_{1}} d x_{1}^{\prime}: \psi^{\dagger}\left(x_{0}, x_{1}^{\prime}\right) \psi\left(x_{0}, x_{1}^{\prime}\right):}\left(\psi_{1}^{\dagger}(x)-\psi_{2}^{\dagger}(x)\right) \tag{5.306}
\end{align*}
$$

which, in the chiral basis, has the form

$$
\begin{equation*}
N^{+}(x) \sim e^{-i \pi \int_{-\infty}^{x_{1}} d x_{1}^{\prime}: j_{0}\left(x_{0}, x_{1}^{\prime}\right):} R^{\dagger}(x) \tag{5.307}
\end{equation*}
$$

The other transverse component, $N^{-}$, is just the hermitian conjugate of $N^{+}=$ $\left(N^{-}\right)^{\dagger}$.

We can use the bosonization identities to find an expression for $N^{ \pm}$in terms of the Bose field $\varphi$. The result is (up to singular coefficients, which we will not make explicit)

$$
\begin{equation*}
N^{ \pm}(x) \sim: e^{ \pm i \frac{2 \pi}{\beta} \vartheta(x)}:+\cdots \tag{5.308}
\end{equation*}
$$

A similar analysis yields the following operator identifications for the three components of the magnetization:

$$
\begin{align*}
M_{z} & \sim \frac{1}{2}\left(S_{z}(2 n)+S_{z}(2 n+1)\right) \sim j_{0}=\frac{\beta}{2 \pi} \partial_{x} \varphi \\
M^{ \pm} & \sim \frac{1}{2}\left(S^{ \pm}(2 n)+S^{ \pm}(2 n)\right) \sim L^{\dagger} e^{i \pi \int_{-\infty}^{x} d x^{\prime}: j_{0}\left(x^{\prime}\right):} \sim e^{i \frac{2 \pi}{\beta} \vartheta+i \beta \varphi} \tag{5.309}
\end{align*}
$$

The sine-Gordon potential $\cos (2 \beta \varphi)$ does not affect the behavior at long distances unless the operator is relevant, in the sense of the renormalization group. This means that the (scaling) dimension $\Delta$ of this operator should be less than or equal to 2 , the dimension of space-time. The dimension $\Delta_{A}$ of an operator $A(x)$ is found by considering the correlation function, say at equal times,

$$
\begin{equation*}
\left\langle A(x) A\left(x^{\prime}\right)\right\rangle \sim \frac{1}{\left|x_{1}-x_{1}^{\prime}\right|^{\eta_{A}}} \tag{5.310}
\end{equation*}
$$

The critical exponent $\eta_{A}$ and the dimension $\Delta_{A}$ are related by

$$
\begin{equation*}
\eta_{A} \equiv 2 \Delta_{A} \tag{5.311}
\end{equation*}
$$

Thus, adding the operator $A(x)$ to the Lagrangian density of the free theory, $\mathcal{L}_{0}=$ $\frac{1}{2}\left(\partial_{\mu} \varphi\right)^{2}$, does not alter the infrared behavior unless $\Delta_{A} \leq 2$. For $\Delta_{A} \leq 2$, the infrared divergences grow more and more severe with the order of perturbation theory in $g_{A}$, the coupling constant for the operator $A(x)$. Conversely, for $\Delta_{A}>2$ the infrared behavior is, at every order of perturbation theory in $g_{A}$, the same as that of a theory with $g_{A}=0$.

In addition to the fermions themselves, two operators $\mathcal{O}_{a}(x)$ and $\mathcal{Q}_{b}(x)$ are of importance to us:

$$
\begin{align*}
\mathcal{O}_{a}(x) & =e^{i a \varphi(x)} \\
\mathcal{Q}_{b}(x) & =e^{i b \vartheta\left(x_{0}, x_{1}\right)} \tag{5.312}
\end{align*}
$$

The equal-time correlation functions for $\mathcal{O}_{a}$ and $\mathcal{Q}_{b}$ are

$$
\begin{equation*}
\langle G|: \mathcal{O}_{a}(x):: \mathcal{O}_{a}^{\dagger}(y):|G\rangle=\mathrm{constant} \times e^{a^{2}\left[\varphi^{+}\left(x_{0}, x_{1}\right), \varphi^{-}\left(x_{0}, y_{1}\right)\right]} \tag{5.313}
\end{equation*}
$$

Similarly, we get

$$
\begin{equation*}
\langle G|: \mathcal{Q}_{b}(x):: \mathcal{Q}_{b}^{\dagger}(y):|G\rangle=\mathrm{constant} \times e^{b^{2}\left[\vartheta^{+}\left(x_{0}, x_{1}\right), \vartheta^{-}\left(x_{0}, y_{1}\right)\right]} \tag{5.314}
\end{equation*}
$$

After a short computation, we get for the equal-time correlation functions

$$
\begin{equation*}
\langle G|: \mathcal{O}_{a}(x):: \mathcal{O}_{a}^{\dagger}(y):|G\rangle=\frac{\text { constant }}{\left|x_{1}-y_{1}\right|^{a^{2} /(2 \pi)}} \tag{5.315}
\end{equation*}
$$

and

$$
\begin{equation*}
\langle G|: \mathcal{Q}_{b}(x):: \mathcal{Q}_{b}^{\dagger}(y):|G\rangle=\frac{\text { constant }}{\left|x_{1}-y_{1}\right|^{b^{2} /(2 \pi)}} \tag{5.316}
\end{equation*}
$$

Thus, the scaling dimension $\Delta$ of the operator : $\cos (2 \beta \varphi)$ : is equal to

$$
\begin{equation*}
\Delta=\frac{\beta^{2}}{\pi} \tag{5.317}
\end{equation*}
$$

For $\Delta \leq 2$ (i.e. $\beta^{2} \leq 2 \pi$ ) this interaction is relevant in the infrared and for $\beta^{2} \geq 2 \pi$ it is infrared-trivial. Thus, for values of the anisotropy $\gamma$ greater than a critical value $\gamma_{\mathrm{c}} \simeq \pi / 2$, we expect the non-linear term to be dominant. In this regime, the field $\varphi$ has small fluctuations around the classical value, which are determined by its equations of motion. The order-parameter field $\bar{\psi} \psi$ has a non-zero expectation value and the ground state is two-fold degenerate. This is the Ising regime of the Heisenberg model.

For the lattice theory one expects, and this is confirmed by a Bethe-ansatz calculation, that $\gamma_{c}$ should be equal to unity (Luther and Peschel, 1975). In other words, the quantum Heisenberg antiferromagnet should be at this critical point. For $\gamma<\gamma_{\mathrm{c}}, X Y$ anisotropy should dominate and the Mermin-Wagner theorem would prohibit the spontaneous breaking of the continuous symmetry of the $X Y$ model. The domain $\gamma<\gamma_{\mathrm{c}}$ is a line (or segment) of critical points. A detailed theory of this phase transition in connection with the Kosterlitz-Thouless transition can be found in the work of Amit, Goldschmidt, and Grinstein (Amit et al., 1980).

### 5.7 Phase diagrams and scaling behavior

We have shown that the one-dimensional (1D) quantum antiferromagnet is equivalent to a sine-Gordon model in $(1+1)$ dimensions. We will now apply the methods and results we derived in Chapter 4 to determine the phase diagram and the scaling behavior of the antiferromagnet.

The RG flows of the sine-Gordon theory were discussed in Chapter 4. There we saw that there is a (Kosterlitz-Thouless) transition when the value of the stiffness $K$ is such that the cosine operator is marginal and its scaling dimension equals 2. In the bosonized treatment of the 1D quantum Heisenberg antiferromagnet this happens at $\gamma_{\mathrm{c}} \simeq \pi / 2$. In the case of the Heisenberg antiferromagnet the bare values of the sine-Gordon coupling constant $g$ and the stiffness $K=1 / \sqrt{2 \beta}$ (notice the factor of 2) are not independent since both of them depend on the coupling constant $\gamma$ of the Luttinger-Thirring model. This relation is not universal and depends on the cutoff scheme used. It is also affected by irrelevant operators, which have been neglected in our analysis. Nevertheless, it is useful to carry on with the analysis taking the parameters at face value.

We also saw that the RG flow, see Eq. (4.88) and Fig. 4.3, has a simple structure when expressed in terms of the SG coupling $g$ and the parameter $x=2-\Delta$, where $\Delta$ is the scaling dimension of the cosine operator, which here depends also on the parameter $\gamma$. Hence the initial values of the RG flow describing the quantum Heisenberg chain lie on a curve $g=g(x)$,

$$
\begin{equation*}
g=\frac{1}{2 \pi} \frac{2+x}{2-x} \tag{5.318}
\end{equation*}
$$

which is easily obtained by eliminating the dependence of $g$ and $K$ (and $\beta$ ) on $\gamma$. The only part of this curve that matters to our analysis lies in the neighborhood of $x=0$. In that neighborhood, $g=g(x)$ is a positive and monotonically increasing function of $x$ that crosses the stable asymptote (see Fig. 4.3) $g=-x / A$ (1) (here $A(1)=\sqrt{32 \pi^{3}}$ ) at a value $x_{\mathrm{c}}$ close to the origin, $x=0$. Thus, for $x<x_{\mathrm{c}}<0$ (i.e. $\gamma<\gamma_{\mathrm{c}}$ ) the RG flows converge on the fixed line: this is the anisotropic Heisenberg model (with $X Y$ anisotropy). In this regime the power-law behaviors we obtained are exact (up to contributions from irrelevant operators). Precisely at $x=x_{\mathrm{c}}$ the system is on the stable asymptote and it flows towards the end of the fixed line. We will see below that there is a special behavior associated with this point. Finally, for $x>x_{\mathrm{c}}\left(\gamma>\gamma_{\mathrm{c}}\right)$ the cosine operator is relevant and the RG flows to strong coupling. This is the Ising regime. In this regime the discrete $\mathbb{Z}_{2}$ Ising symmetry is spontaneously broken, there is long-range antiferromagnetism, and the energy spectrum is massive (gapped).

The correlation functions for all interesting operators on the domain $\gamma \leq \gamma_{c}$ can be calculated. All the expressions listed below acquire logarithmic corrections to

Table 5.1 Scaling dimensions at the isotropic Heisenberg antiferromagnetic point $\left(\beta^{2}=2 \pi\right)$ and at the $X Y$-model point $\left(\beta^{2}=4 \pi\right)$.

|  | $\Delta(\psi)$ | $\Delta\left(N_{z}\right)$ | $\Delta\left(N^{ \pm}\right)$ | $\Delta\left(M_{z}\right)$ | $\Delta\left(M^{ \pm}\right)$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Heisenberg $\left(\beta^{2}=2 \pi\right)$ | $5 / 8$ | $1 / 2$ | $1 / 2$ | 1 | 1 |
| $X Y\left(\beta^{2}=4 \pi\right)$ | $1 / 2$ | 1 | $1 / 4$ | 1 | $5 / 4$ |

the scaling at $\gamma=\gamma_{\mathrm{c}}$. The dimensions of the fermion $\Delta(\psi)$, longitudinal $\Delta\left(N_{z}\right)$ (i.e. of the fermion mass term $\bar{\psi} \psi)$, and transverse $\Delta\left(N^{ \pm}\right)$components of the staggered (Néel) order parameter, and of the components of the uniform magnetization $\left(\Delta\left(M_{z}\right)\right.$ and $\left.\Delta\left(M^{ \pm}\right)\right)$, are found to be

$$
\begin{align*}
\Delta(\psi) & =\frac{\pi}{\beta^{2}}+\frac{\beta^{2}}{16 \pi}  \tag{5.319}\\
\Delta(\bar{\psi} \psi) & =\Delta\left(N_{z}\right)=\frac{\beta^{2}}{4 \pi}, \quad \Delta\left(N^{ \pm}\right)=\frac{\pi}{\beta^{2}}  \tag{5.320}\\
\Delta\left(M_{z}\right) & =1, \quad \Delta\left(M^{ \pm}\right)=\frac{\beta^{2}}{4 \pi}+\frac{\pi}{\beta^{2}} \tag{5.321}
\end{align*}
$$

where we have kept only the contributions with smallest dimension (which are the most relevant). The scaling dimensions of these operators for the isotropic Heisenberg antiferromagnet and for the $X Y$ model (the free-fermion point) are given in Table 5.1.

At $\beta^{2}=4 \pi$, the free-fermion limit, we obtain results for the quantum $X Y$ model which, as we also saw, is equivalent to two decoupled quantum Ising chains. In particular the correlation function

$$
\begin{equation*}
\left\langle T\left(S^{+}(n, \tau) S^{-}\left(n^{\prime}, \tau^{\prime}\right)\right\rangle_{X Y}=2\left\langle T\left(\sigma_{3}(n, \tau) \sigma_{3}\left(n^{\prime}, \tau^{\prime}\right)\right)\right\rangle_{\text {Ising }}^{2}\right. \tag{5.322}
\end{equation*}
$$

The results of Table 5.1 show that at $\beta^{2}=4 \pi$ the scaling dimension of the Néel order parameter, $N^{ \pm}$, which in the $X Y$ model is the same as the spin operators $S^{ \pm}$, is $\Delta=1 / 4$. This result also tells us that the Ising correlator decays with an exponent $\eta=1 / 4$ and therefore that the Ising spin operator $\sigma$ has scaling dimension 1/8 (Bander and Itzykson, 1977; Zuber and Itzykson, 1977),

$$
\begin{equation*}
\left\langle T\left(\sigma_{3}(n, \tau) \sigma_{3}\left(n^{\prime}, \tau^{\prime}\right)\right\rangle \sim \frac{1}{R^{1 / 4}}\right. \tag{5.323}
\end{equation*}
$$

where $R^{2}=\left(n-n^{\prime}\right)^{2}+\left(\tau-\tau^{\prime}\right)^{2}$.
From these results we conclude that the anisotropy disappears at $\gamma=\gamma_{\mathrm{c}}$ since the longitudinal and transverse components of the Néel order parameter, the
staggered magnetizations, have the same correlations functions at the critical point $\gamma=\gamma_{\mathrm{c}}$, where they behave, up to logarithmic corrections, like

$$
\begin{equation*}
\left.\left.\langle G| N^{+}(x) N^{-}(y)|G\rangle\right|_{\gamma_{\mathrm{c}}} \sim\langle G| \bar{\psi}(x) \psi(x) \bar{\psi}(y) \psi(y)|G\rangle\right|_{\gamma_{\mathrm{c}}} \sim \frac{\text { constant }}{\left|x_{1}-y_{1}\right|} \tag{5.324}
\end{equation*}
$$

Similarly, the scaling dimensions of the three components of the uniform magnetization $M_{z}$ and $M^{ \pm}$are also equal to each other (and to 1 ) for $\beta^{2}=2 \pi$. This result is very significant since, as we will see in Chapter 7, these three dimension1 operators generate a (chiral) $\mathrm{SU}(2)$ current algebra. However, the actual scaling behavior is a little more subtle than what our analysis shows. For instance, the three components of the Néel order parameter $N^{z}$ and $N^{ \pm}$have dimension $1 / 2$ on the fixed line but their correlators acquire a (multiplicative) logarithmic correction and behave as (similarly for the transverse components)

$$
\begin{equation*}
\left\langle N^{z}(x) N^{z}(y)\right\rangle \sim \frac{|\ln (|x-y|)|^{1 / 2}}{|x-y|} \tag{5.325}
\end{equation*}
$$

right at $\gamma_{\mathrm{c}}$. This correction to scaling is due to the marginally irrelevant flow along the stable asymptote towards the end of the fixed line (Affleck, 1998). However, the three components of the local magnetization densities $M^{z}$ and $M^{ \pm}$do not acquire such corrections to scaling. This different behavior is due to the fact that the magnetization density is part of a locally conserved $\operatorname{SU}(2)$ current. Thus, although our formalism does not keep track of the global $S U(2)$ symmetry of the Heisenberg model at the isotropic point, it recovers it as an effective ("dynamical") symmetry of the critical point.

For $\gamma<\gamma_{\mathrm{c}}$ the correlation functions are different, although both exhibit an algebraic decay (i.e. power-law behavior) with exponents $\eta_{z}$ and $\eta_{ \pm}$satisfying $\eta_{z}>\eta_{ \pm}$. These exponents are universal in the sense that their numerical values are independent of the short-distance cutoff. However, the coupling constant itself does depend on the precise definition of the cutoff. Thus the value of $\gamma_{c}$, which is equivalent to unity in the lattice system, turns out to be close to $\pi / 2$ for the continuum model. Nevertheless, it is possible to find a relationship between the continuum and lattice coupling constants (Luther and Peschel, 1975).

The fact that the correlation functions exhibit a power-law behavior means that the system, for $\gamma<\gamma_{\mathrm{c}}$, is critical. It has been argued (den Nijs, 1981) that this is a line of critical points ending at $\gamma_{c}$, the Heisenberg point. That the system is critical means that there are no energy gaps; that is, all the excitations are gapless. For $\gamma>\gamma_{\mathrm{c}}$ an energy gap $m(\gamma)$ develops (den Nijs, 1981). The RG analysis we discussed tells us that the energy gap exhibits the Kosterlitz-Thouless behavior

$$
\begin{equation*}
m(\gamma) \sim \text { constant } \times \exp \left(-\frac{\text { constant }}{\sqrt{\gamma-\gamma_{c}}}\right) \tag{5.326}
\end{equation*}
$$

This is the regime with $\beta^{2}<2 \pi$ in the sine-Gordon theory. Renormalizationgroup arguments imply that the operator $e^{i \beta \phi}$ exhibits long-range order and, consequently, that $\langle\bar{\psi} \psi\rangle \neq 0$.

It is natural to ask whether the fact that the spin- $1 / 2$ Heisenberg chain is at a critical point with gapless (neutral) fermions in the spectrum does generalize to other situations such as higher spin or higher dimensions. We will see below that in general the behavior of the half-integer-spin chains is analogous to that of the spin- $1 / 2$ chain, and that, in contrast, the integer-spin chains are not critical.

## 6

## The Luttinger liquid

### 6.1 One-dimensional Fermi systems

We will now consider the case of one-dimensional (1D) Fermi systems for which the Landau theory fails. The way it fails is quite instructive since it reveals that in one dimension these systems are generally at a (quantum) critical point, and it will also teach us valuable lessons on quantum criticality. It will also turn out that the problem of 1D Fermi systems is closely related to the problem of quantum spin chains. This is a problem that has been discussed extensively by many authors, and there are several excellent reviews on the subject (Emery, 1979; Haldane, 1981; Gogolin et al., 1998). Here I follow in some detail the discussion and notation of Carlson and coworkers (Carlson et al., 2004).

One-dimensional (and quasi-1D) systems of fermions occur in several experimentally accessible systems. The simplest one to visualize is a quantum wire. A quantum wire is a system of electrons in a semiconductor, typically a GaAs-AlAs heterostructure built by molecular-beam epitaxy (MBE), in which the electronic motion is laterally confined along two directions, but not along the third. An example of such a channel of length $L$ and width $d$ (here shown as a two-dimensional (2D) system) is seen in Fig. 6.1. Systems of this type can be made with a high degree of purity with very long (elastic) mean free paths, often tens of micrometers or even longer. The resulting electronic system is a 1D electron gas (1DEG). In addition to quantum wires, 1DEGs also arise naturally in carbon nanotubes, where they are typically multi-component (with the number of components being determined by the diameter of the nanotube).

Other 1D Fermi systems include the edge states of two-dimensional electron gases (2DEGs) in large magnetic fields in the regime in which quantum Hall effects are seen. (We will discuss this problem later on.) This case is rather special since these edge states can propagate in only one direction, determined by the sign of the perpendicular magnetic field.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-164.jpg?height=440&width=910&top_left_y=186&top_left_x=400)

Figure 6.1 (a) A long quantum wire of length $L$ and transverse width $d(L \gg d)$ : a channel for the electron fluid. Only the 2D case is shown for simplicity. (b) The square-well spectrum of the transverse quantum single-particle states confined by the finite width $d$ of the wire.

Other (quasi-) 1D systems occur in organic compounds, such as TTFTCNQ, some Bechgaard salts (commonly called the "BEDTs" and the "ETs"), and TMSFs. There are also quasi-1D chalcogenide materials, e.g. $\mathrm{NbSe}_{3}$, as well as complex oxides. There are some oxides, e.g. $\mathrm{Sr}_{14-x} \mathrm{Ca}_{x} \mathrm{Cu}_{24} \mathrm{O}_{41}$, that can be regarded as a set of weakly coupled ladders (instead of chains). Quasi-1D Fermi systems are often used to describe complex ordered states in 2D strongly correlated systems. Typical examples are the stripe phases of the copper oxide high- $T_{\mathrm{c}}$ superconductors, such as $\mathrm{La}_{2-x} \mathrm{Sr}_{x} \mathrm{CuO}_{4}$ and $\mathrm{La}_{2-x} \mathrm{Ba}_{x} \mathrm{CuO}_{4}$.

We will consider first the conceptually simpler example of the quantum wire. We will assume that the electron density is such that the Fermi energy lies below the energy of the first excited state. The result is that the single-particle states with momenta in the range $-p_{\mathrm{F}}<p<p_{\mathrm{F}}$ are occupied and the states outside this range are empty. Thus the Fermi "surface" of this system reduces to two Fermi points at $\pm p_{\mathrm{F}}$. We will assume that the wire is long enough, $L \gg d$, so that the singleparticle states fill up densely the momentum axis, and that the density is high enough that $\Delta p=2 \pi \hbar / L \ll p_{\mathrm{F}}$. On the other hand, we will assume that the wire is narrow enough that the next band of (excited) states can effectively be neglected, $\varepsilon_{\mathrm{F}} \ll \hbar^{2} /\left(2 m d^{2}\right)$. At higher electronic densities, more than one band can intersect the Fermi energy. Each new partially occupied band is labeled by a pair of Fermi points. In practice we will work in a regime in which the following inequality holds:

$$
\begin{equation*}
\frac{L}{d} \gg 1 \gg \frac{d}{\lambda_{\mathrm{F}}} \tag{6.1}
\end{equation*}
$$

where $\lambda_{\mathrm{F}}=\hbar / p_{\mathrm{F}}$ is the Fermi wavelength, and we have only two Fermi points (see Fig. 6.2).
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-165.jpg?height=559&width=858&top_left_y=198&top_left_x=419)

Figure 6.2 Energy-momentum relation of the two lowest bands of propagating non-relativistic free fermions along the length of the quantum wire; $\varepsilon_{\mathrm{F}}$ is the Fermi energy, $\pm p_{\mathrm{F}}$ are the two Fermi points, and $v_{\mathrm{F}}=p_{\mathrm{F}} / m$ is the Fermi velocity. The filled Fermi sea (the occupied states) is shown as a dark segment; $\Delta E$ and $\Delta p$ are the level spacings in a finite wire of length $L$. We have shifted the minimum of the energy of the lowest band to be at zero.

The Hamiltonian for the 1 DEG is $H=H_{0}+H_{\mathrm{int}}$, where

$$
\begin{equation*}
H_{0}=\sum_{\sigma=\uparrow, \downarrow} \int_{0}^{L} d x \psi_{\sigma}^{\dagger}(x)\left(-\frac{\hbar^{2}}{2 m} \frac{\partial^{2}}{\partial x^{2}}-\mu\right) \psi_{\sigma}(x) \tag{6.2}
\end{equation*}
$$

is the free-fermion Hamiltonian and

$$
\begin{equation*}
H_{\mathrm{int}}=\sum_{\sigma, \sigma^{\prime}=\uparrow, \downarrow} \int_{0}^{L} d x \int_{0}^{L} d x^{\prime} \psi_{\sigma}^{\dagger}(x) \psi_{\sigma}(x) U\left(x-x^{\prime}\right) \psi_{\sigma^{\prime}}^{\dagger}\left(x^{\prime}\right) \psi_{\sigma^{\prime}}\left(x^{\prime}\right) \tag{6.3}
\end{equation*}
$$

where $U\left(x-x^{\prime}\right)$ is the interaction potential, which can be Coulomb or short-ranged, depending on the physical situation. In what follows, for simplicity we will use periodic boundary conditions, requiring

$$
\begin{equation*}
\psi_{\sigma}(x+L)=\psi_{\sigma}(x) \tag{6.4}
\end{equation*}
$$

which amounts to wrapping the system ("compactification") onto a circle. Sometimes we may want to use the more physical open boundary conditions.

In many cases we will be interested in lattice systems. So, consider a 1D chain of $N$ sites (atoms) and lattice spacing $a$, and total length $L=N a$. A typical system of interest is the Hubbard model, whose lattice Hamiltonian is

$$
\begin{equation*}
H=\sum_{j=1}^{N} \sum_{\sigma=\uparrow, \downarrow} t\left(\psi_{\sigma}^{\dagger}(j) \psi_{\sigma}(j+1)+\text { h.c. }\right)+\sum_{j=1}^{N} U n_{\uparrow}(j) n_{\downarrow}(j) \tag{6.5}
\end{equation*}
$$

where $n_{\sigma}(j)=\psi_{\sigma}^{\dagger}(j) \psi_{\sigma}(j)$ is the fermion occupation number with spin $\sigma$ at site $j$ and $n(j)=\sum_{\sigma} n_{\sigma}(j)$ is the total occupation number (i.e. the charge) at site $j$. Here $U$ is the on-site (Hubbard) interaction. This model describes a system of electrons with hopping only between nearest neighboring sites; $t$, the hopping amplitude, is the local kinetic energy. This system has only one band of single-particle states with the dispersion relation

$$
\begin{equation*}
\varepsilon(p)=2 t \cos (p a) \tag{6.6}
\end{equation*}
$$

In the thermodynamic limit, $N \rightarrow \infty$, the momenta $p$ lie in the first Brillouin zone, $-\pi / a<p \leq \pi / a$. In general we will be interested in a system either at fixed chemical potential $\mu$ or at fixed density $n=N_{\mathrm{e}} / N$. The effective model for interacting systems that we will discuss will describe equally well (with minor changes) the low-energy physics of both continuum and lattice systems.

What is special about one dimension?

1. In the Landau theory of the Fermi liquid we considered the low-energy states and we saw that they can be described in terms of particle-hole pairs. In dimensions $D>1$ the momentum $\delta \vec{q}$ of the pair is not necessarily parallel to the Fermi wave vector $\mathbf{p}_{\mathrm{F}}$ of the location of the Fermi surface (FS) where the pair is excited. However, in 1D $\delta q$ must be either parallel or anti-parallel to the Fermi momentum $p_{\mathrm{F}}$ since the FS has collapsed to just two (or more) points (see Fig. 6.3).
2. This kinematic restriction implies that particle-hole pairs effectively form longlived bound states, the collective modes, since the particle and the hole move with the same speed (the Fermi velocity). We will see that this implies that the low-energy effective theory is a theory of bosons. This is the main reason why the non-perturbative theory of 1D fermions, bosonization, works.
3. Another insight can be gleaned by looking at the density correlators, whose singularities are the collective modes. In $D>1$ the retarded density-density correlation function $D^{\mathrm{R}}(\mathbf{q}, \omega)$ of a free fermion is

$$
\begin{equation*}
D^{\mathrm{R}}(\mathbf{q}, \omega)=\int \frac{d^{D} p}{(2 \pi)^{D}} \frac{n_{\mathbf{p}}-n_{\mathbf{p}+\mathbf{q}}}{\omega-\varepsilon(\mathbf{p}+\mathbf{q})+\varepsilon(\mathbf{p})+i \eta} \tag{6.7}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-166.jpg?height=124&width=704&top_left_y=1888&top_left_x=503)

Figure 6.3 One-dimensional kinematics: the momentum of a particle-hole pair of momentum $q$ is always parallel (or anti-parallel) to the Fermi wave vector $p_{\mathrm{F}}$.

For low momenta $|\mathbf{q}| \ll p_{\mathrm{F}}$ and at low energies $\omega \ll E_{\mathrm{F}}, D^{\mathrm{R}}(\mathbf{q}, \omega)$ can be written as an integral on the Fermi surface

$$
\begin{align*}
D^{\mathrm{R}}(\mathbf{q}, \omega) & \simeq \int \frac{d^{D} p}{(2 \pi)^{D}} \frac{\mathbf{q} \cdot \widehat{\mathbf{p}}_{\mathrm{F}}}{\omega-\left(\mathbf{q} \cdot \widehat{\mathbf{p}}_{\mathrm{F}}\right) v_{\mathrm{F}}+i \eta} \delta\left(|\mathbf{p}|-p_{\mathrm{F}}\right) \\
& =\frac{p_{\mathrm{F}}^{D-1}}{(2 \pi)^{D}} \oint_{\mathrm{FS}} d \widehat{\mathbf{p}}_{\mathrm{F}} \frac{\mathbf{q} \cdot \widehat{\mathbf{p}}_{\mathrm{F}}}{\omega-\left(\mathbf{q} \cdot \widehat{\mathbf{p}}_{\mathrm{F}}\right) v_{\mathrm{F}}+i \eta} \tag{6.8}
\end{align*}
$$

For $D>1$ the angular integration is a function of $\mathbf{q}$ and $\omega$ that has branch cuts. For instance, in 3D the result is

$$
\begin{equation*}
D^{\mathrm{R}}(\mathbf{q}, \omega) \sim 1+\frac{\omega}{2 q v_{\mathrm{F}}} \ln \left|\frac{\omega-q v_{\mathrm{F}}}{\omega+q v_{\mathrm{F}}}\right|+\cdots \tag{6.9}
\end{equation*}
$$

The branch cuts mean that the collective modes (zero sound) eventually become Landau damped (Abrikosov et al., 1963; Baym and Pethick, 1991).
4. However, in 1D there is no such angular integration (the FS is just two points!) and the result is

$$
\begin{equation*}
D^{\mathrm{R}}(q, \omega) \sim \frac{q}{2 \pi}\left(\frac{1}{\omega-q v_{\mathrm{F}}+i \eta}-\frac{1}{\omega+q v_{\mathrm{F}}+i \eta}\right) \tag{6.10}
\end{equation*}
$$

This expression contains two singularities, two poles, representing bosonic states that move to the right (the first term) or to the left (the second term). It is easy to check that this result is consistent with the $f$-sum rule.

Furthermore, these results suggests that a theory of free fermions in 1D must be, in some sense, equivalent to a theory of a Bose field whose excitations obey the dispersion relation $\omega=p v_{\mathrm{F}}$. In other terms, the bosons are density fluctuations, which in this case are just sound waves.

### 6.2 Dirac fermions and the Luttinger model

We will now proceed to construct an effective low-energy theory by following a procedure similar to what led to the Landau theory of the Fermi liquid. The result, however, will be quite different in 1D.

To this end we will first look at the free-fermion system and focus on the lowenergy excitations. We have already encountered this problem in Section 5.2.3. We will follow a similar line of argument. In 1D, instead of a Fermi surface we have (at least) two Fermi points at $\pm p_{\mathrm{F}}$. The low-energy fermionic states thus have momenta $p \sim \pm p_{\mathrm{F}}$ and a single-particle energy close to $\varepsilon_{\mathrm{F}}$ :

$$
\begin{equation*}
\varepsilon(p) \simeq \varepsilon_{\mathrm{F}}+\left(|p|-p_{\mathrm{F}}\right) v_{\mathrm{F}}+\cdots \tag{6.11}
\end{equation*}
$$

We are interested in the electronic states near the Fermi energy. Thus, consider the fermion operator $\psi_{\sigma}(x)$, whose Fourier expansion is (we will set $\hbar=1$ from now on), in the thermodynamic limit $(L \rightarrow \infty)$,

$$
\begin{equation*}
\psi_{\sigma}(x)=\int \frac{d p}{2 \pi} \psi_{\sigma}(p) e^{i p x} \tag{6.12}
\end{equation*}
$$

Only its Fourier components near $\pm p_{\mathrm{F}}$ describe low-energy states. This suggests that we restrict ourselves to the modes of the momentum expansion in a neighborhood of $\pm p_{\mathrm{F}}$ of width $2 \Lambda$, and that we write

$$
\begin{equation*}
\psi_{\sigma}(x) \simeq \int_{-\Lambda}^{\Lambda} \frac{d p}{2 \pi} e^{i\left(p+p_{\mathrm{F}}\right) x} \psi_{\sigma}\left(p+p_{\mathrm{F}}\right)+\int_{-\Lambda}^{\Lambda} \frac{d p}{2 \pi} e^{i\left(p-p_{\mathrm{F}}\right) x} \psi_{\sigma}\left(p-p_{\mathrm{F}}\right) \tag{6.13}
\end{equation*}
$$

and that we define right- and left-moving fields $\psi_{\sigma, \mathrm{R}}(x)$ and $\psi_{\sigma, \mathrm{L}}(x)$ such that

$$
\begin{equation*}
\psi_{\sigma}(x) \simeq e^{i p_{\mathrm{F}} x} \psi_{\sigma, \mathrm{R}}(x)+e^{-i p_{\mathrm{F}} x} \psi_{\sigma, \mathrm{L}}(x) \tag{6.14}
\end{equation*}
$$

Thus we have split off the rapidly oscillating piece of the field and we focus on the slowly varying parts, $\psi_{\sigma, \mathrm{R}}(x)$ and $\psi_{\sigma, \mathrm{L}}(x)$, whose Fourier transforms are

$$
\begin{equation*}
\psi_{\sigma, \mathrm{R}}(p)=\psi_{\sigma}\left(p+p_{\mathrm{F}}\right) \quad \text { and } \quad \psi_{\sigma, \mathrm{L}}(p)=\psi_{\sigma}\left(p-p_{\mathrm{F}}\right) \tag{6.15}
\end{equation*}
$$

respectively.
The free-fermion Hamiltonian

$$
\begin{equation*}
H_{0}=\sum_{\sigma} \int \frac{d p}{2 \pi} \varepsilon(p) \psi_{\sigma}^{\dagger}(p) \psi_{\sigma}(p) \tag{6.16}
\end{equation*}
$$

becomes

$$
\begin{equation*}
H_{0}=\sum_{\sigma} \int_{-\Lambda}^{\Lambda} \frac{d p}{2 \pi} p v_{\mathrm{F}}\left(\psi_{\sigma, \mathrm{R}}^{\dagger}(p) \psi_{\sigma, \mathrm{R}}(p)-\psi_{\sigma, \mathrm{L}}^{\dagger}(p) \psi_{\sigma, \mathrm{L}}(p)\right) \tag{6.17}
\end{equation*}
$$

where we have linearized the dispersion $\varepsilon(p)$ near the Fermi momenta $\pm p_{\mathrm{F}}$. Let us define the two-component spinor

$$
\begin{equation*}
\psi_{\sigma}(x)=\binom{\psi_{\sigma, \mathrm{R}}(x)}{\psi_{\sigma, \mathrm{L}}(x)} \tag{6.18}
\end{equation*}
$$

in terms of which the free-fermion Hamiltonian is

$$
\begin{equation*}
H_{0}=\sum_{\sigma} \int \frac{d p}{2 \pi} \psi_{\sigma}^{\dagger}(p) \sigma_{3} p v_{\mathrm{F}} \psi_{\sigma}(p)=\sum_{\sigma} \int d x \psi_{\sigma}^{\dagger}(x) \sigma_{3} i v_{\mathrm{F}} \partial_{x} \psi_{\sigma}(x) \tag{6.19}
\end{equation*}
$$

where

$$
\sigma_{3}=\left(\begin{array}{cc}
1 & 0  \tag{6.20}\\
0 & -1
\end{array}\right)
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-169.jpg?height=675&width=518&top_left_y=197&top_left_x=589)

Figure 6.4 The Dirac dispersion; the slope is the Fermi velocity $v_{\mathrm{F}}$. The momentum cutoff is $\Lambda$ and the energy cutoff is $D=v_{\mathrm{F}} \Lambda$.

In this form the effective low-energy Hamiltonian reduces to the (massless) Dirac Hamiltonian in 1D. In Fig. 6.4 we show the dispersion in the spinor notation.

Most of the interaction terms we discussed above can be expressed in terms of the local densities of right- and left-moving fermions

$$
\begin{equation*}
j_{\mathrm{R}, \sigma}(x)=\psi_{\mathrm{R}, \sigma}^{\dagger}(x) \psi_{\mathrm{R}, \sigma}(x), \quad j_{\mathrm{L}, \sigma}(x)=\psi_{\mathrm{L}, \sigma}^{\dagger}(x) \psi_{\mathrm{L}, \sigma}(x) \tag{6.21}
\end{equation*}
$$

from which we can write the slowly varying part of the charge-density operator $j_{0}(x)$ (i.e. with Fourier component with wave vectors close to $p=0$ ) and the charge-current density $j_{1}(x)$ as

$$
\begin{equation*}
j_{0}(x)=j_{\mathrm{R}}(x)+j_{\mathrm{L}}(x), \quad j_{1}(x)=j_{\mathrm{R}}(x)-j_{\mathrm{L}}(x) \tag{6.22}
\end{equation*}
$$

which is a 2 -vector of the form

$$
\begin{equation*}
j_{\mu}(x)=\left(j_{0}, j_{1}\right) \tag{6.23}
\end{equation*}
$$

with $\mu=0,1$ (not to be confused with the chemical potential!). Thus, the coupling to a slowly varying external electromagnetic field $A_{\mu}(x)=\left(A_{0}, A_{1}\right)$ is represented by a term of the form

$$
\begin{equation*}
H_{\mathrm{em}}=\int d x\left(-e A_{0}(x) j_{0}(x)+\frac{e}{c} A_{1}(x) j_{1}(x)\right) \tag{6.24}
\end{equation*}
$$

The actual particle-density operator of the microscopic system,

$$
\begin{equation*}
\rho(x)=\sum_{\sigma} \psi_{\sigma}^{\dagger}(x) \psi_{\sigma}(x) \tag{6.25}
\end{equation*}
$$

can be written in the form (using the decomposition of the Fermi field into right and left movers)

$$
\begin{align*}
\rho(x)= & \rho_{0}+j_{0}(x)+\sum_{\sigma}\left(e^{2 i p_{\mathrm{F}} x} \psi_{\mathrm{R}, \sigma}^{\dagger}(x) \psi_{\mathrm{L}, \sigma}(x)+e^{-2 i p_{\mathrm{F}} x} \psi_{\mathrm{L}, \sigma}^{\dagger}(x) \psi_{\mathrm{R}, \sigma}(x)\right) \\
& +\cdots \tag{6.26}
\end{align*}
$$

where $\rho_{0}=N_{e} / L=2 p_{\mathrm{F}} / \pi$ is the average total density of electrons (including spin), and where $\cdots$ represents terms that oscillate more rapidly for large $p_{\mathrm{F}}$.

The significance of the oscillatory terms can be seen by adding a coupling to a periodic potential $V(x)$ (with wave vector $2 p_{\mathrm{F}}$ ). For simplicity here we consider only potentials with wave vectors commensurate with the fermion density, $Q=$ $2 p_{\mathrm{F}}$. More general cases can also be considered and lead to interesting physical effects. We will take the potential to have the simple form

$$
\begin{equation*}
V(x)=V_{0} \cos \left(2 p_{\mathrm{F}} x\right) \tag{6.27}
\end{equation*}
$$

leading to a new term in the Hamiltonian of the form

$$
\begin{align*}
H_{\mathrm{pot}} & =\int d x V(x) \rho(x) \\
& =-e \int \frac{d p}{2 \pi} \int \frac{d q}{2 \pi} V(q) \psi^{\dagger}(p+q) \psi(p) \\
& =\int \frac{d p}{2 \pi}\left(-e V_{0}\right)\left(\psi_{\mathrm{R}}^{\dagger}(p) \psi_{\mathrm{L}}(p)+\psi_{\mathrm{L}}^{\dagger}(p) \psi_{\mathrm{R}}(p)\right) \\
& =\int d x\left(-e V_{0}\right)\left(\psi_{\mathrm{R}}^{\dagger}(x) \psi_{\mathrm{L}}(x)+\psi_{\mathrm{L}}^{\dagger}(x) \psi_{\mathrm{R}}(x)\right) \tag{6.28}
\end{align*}
$$

In other terms, a periodic potential of wave vector $Q=2 p_{\text {F }}$ causes backscattering: it scatters a right-moving fermion into a left-moving fermion (and vice versa). Similarly, a periodic potential of wave vector $Q \ll 2 p_{\mathrm{F}}$ scatters right movers into right movers (and left movers into left movers). From now on we will drop the spin indices, unless we state the contrary.

Thus, in the case of a free fermion coupled to a periodic potential $V(x)$ with wave vector $Q=2 p_{\mathrm{F}}$, the potential induces backscattering that mixes the two Fermi points at $\pm p_{\mathrm{F}}$. This leads to the existence of an energy gap at the Fermi energy. In terms of the Dirac Hamiltonian, the periodic potential $V(x)$ leads to the Hamiltonian

$$
\begin{equation*}
H=\int d x \psi^{\dagger}(x)\left(i v_{\mathrm{F}} \sigma_{3} \partial_{x}+e V_{0} \sigma_{1}\right) \psi(x) \tag{6.29}
\end{equation*}
$$

where

$$
\sigma_{1}=\left(\begin{array}{ll}
0 & 1  \tag{6.30}\\
1 & 0
\end{array}\right)
$$

In Eq. (6.29) $e V_{0}=\Delta$ is the energy gap, and is usually denoted by $\Delta=m v_{\mathrm{F}}^{2}$.

In the Dirac theory it is useful to define the matrices $\alpha=\sigma_{3}$ (in 1D) and $\beta=\sigma_{1}$, such that the Dirac Hamiltonian reads

$$
\begin{equation*}
H=\int d x \psi^{\dagger}(x)\left(\alpha i v_{\mathrm{F}} \partial_{x}+\beta \Delta\right) \psi(x) \tag{6.31}
\end{equation*}
$$

The single-particle spectrum consists of particles and holes with energy $\varepsilon(p)=$ $\sqrt{v_{\mathrm{F}}^{2} p^{2}+\Delta^{2}}$. In the Dirac theory it is customary to define Dirac's $\gamma$-matrices. In this 1D case there are just two of them, $\gamma_{0}=\beta=\sigma_{1}$ and $\gamma_{1}=\beta \alpha=i \sigma_{2}$. They satisfy the algebra

$$
\begin{equation*}
\left\{\gamma_{0}, \gamma_{1}\right\}=0, \quad \gamma_{0}^{2}=1, \quad \gamma_{1}^{2}=-1 \tag{6.32}
\end{equation*}
$$

If we define $\bar{\psi}=\psi^{\dagger} \gamma_{0}$, the fermion mass term is

$$
\begin{equation*}
\psi_{\mathrm{R}}^{\dagger} \psi_{\mathrm{L}}+\psi_{\mathrm{L}}^{\dagger} \psi_{\mathrm{R}}=\psi^{\dagger} \gamma_{0} \psi=\bar{\psi} \psi \tag{6.33}
\end{equation*}
$$

### 6.3 Order parameters of the one-dimensional electron gas

Similarly we can also define the matrix $\gamma^{5}=\gamma_{0} \gamma_{1}=\sigma_{3}$, and the bilinear $\bar{\psi} \gamma^{5} \psi$ :

$$
\begin{equation*}
\bar{\psi} \gamma_{5} \psi=\psi_{\mathrm{R}}^{\dagger} \psi_{\mathrm{L}}-\psi_{\mathrm{L}}^{\dagger} \psi_{\mathrm{R}} \tag{6.34}
\end{equation*}
$$

It is straightforward to see that the density $\rho(x)$ can be written as

$$
\begin{equation*}
\rho(x)=\rho_{0}+j_{0}(x)+\cos \left(2 p_{\mathrm{F}} x\right) \bar{\psi}(x) \psi(x)+i \sin \left(2 p_{\mathrm{F}} x\right) \bar{\psi}(x) \gamma^{5} \psi(x) \tag{6.35}
\end{equation*}
$$

From here we see that if $\langle\bar{\psi}(x) \psi(x)\rangle \neq 0$ (or $\left.\left\langle\bar{\psi}(x) \gamma_{5} \psi(x)\right\rangle \neq 0\right)$, then the expectation value of the charge density $\langle\rho(x)\rangle$ has a modulated component (over the background $\rho_{0}$ ). If this were to occur spontaneously (i.e. in the absence of an external periodic potential) then the ground state of the system would be a charge-density wave (CDW). Hence, $\langle\bar{\psi} \psi\rangle$ and $\left\langle i \bar{\psi} \gamma^{5} \psi\right\rangle$ play the role of the order parameters of the CDW state. We can also see that the expectation value of the density will be even (invariant) under inversion, $x \rightarrow-x$ (i.e. parity), if $\left\langle\bar{\psi}(x) \gamma^{5} \psi(x)\right\rangle=0$; conversely, if this expectation value is not zero, the density will not be even under parity, which amounts to a phase shift.

In the absence of the periodic potential the original system is translationally invariant. The periodic potential breaks translation invariance. To see how that works, we define the transformation

$$
\begin{equation*}
\psi(x) \rightarrow e^{i \theta \gamma^{5}} \psi(x)=\binom{e^{i \theta} \psi_{\mathrm{R}}(x)}{e^{-i \theta} \psi_{\mathrm{L}}(x)} \tag{6.36}
\end{equation*}
$$

which is known as a chiral transformation. Under this transformation the twocomponent vector

$$
\begin{equation*}
\binom{\bar{\psi} \psi}{i \bar{\psi} \gamma^{5} \psi} \tag{6.37}
\end{equation*}
$$

transforms as a rotation

$$
\binom{\bar{\psi} \psi}{i \bar{\psi} \gamma^{5} \psi} \rightarrow\left(\begin{array}{cc}
\cos (2 \theta) & -\sin (2 \theta)  \tag{6.38}\\
\sin (2 \theta) & \cos (2 \theta)
\end{array}\right)\binom{\bar{\psi} \psi}{i \bar{\psi} \gamma^{5} \psi}
$$

under which the density operator becomes

$$
\begin{align*}
\rho(x) & \rightarrow \rho_{0}+j_{0}(x)+e^{i 2\left(p_{\mathrm{F}} x-\theta\right)} \psi_{\mathrm{R}}^{\dagger}(x) \psi_{\mathrm{L}}(x)+e^{-i 2\left(p_{\mathrm{F}} x-\theta\right)} \psi_{\mathrm{L}}^{\dagger}(x) \psi_{\mathrm{R}}(x) \\
& =\rho\left(x-\frac{\theta}{p_{\mathrm{F}}}\right) \tag{6.39}
\end{align*}
$$

Therefore, a chiral transformation by an angle $\theta$ is equivalent to a translation of the charge density by a distance $d=\theta / p_{\mathrm{F}}$. Notice that transformations by $\theta=n \pi$ have no physical effect since they amount to translations by a distance $n \pi / p_{\mathrm{F}}=$ $2 n \pi / Q=n \ell$, i.e. an integer number of periods $\ell=2 \pi / Q$ of the CDW. Thus only chiral transformations modulo $\pi$ are observable.

In a similar fashion we can define an operator corresponding to a spin-density wave (SDW). Indeed, the local magnetization (or spin-polarization) density is

$$
\begin{equation*}
m^{a}(x)=\psi_{\sigma}^{\dagger}(x) \tau_{\sigma, \sigma^{\prime}}^{a} \psi_{\sigma^{\prime}}(x) \tag{6.40}
\end{equation*}
$$

(where $\tau^{a}$ are the three Pauli matrices, acting only on the spin indices $\sigma$ and $\sigma^{\prime}$ ), which can be expressed as

$$
\begin{equation*}
m^{a}(x)=j_{0}^{a}(x)+e^{2 i p_{\mathrm{F}} x} \psi_{\mathrm{R}, \sigma}^{\dagger}(x) \tau_{\sigma, \sigma^{\prime}}^{a} \psi_{\mathrm{L}, \sigma^{\prime}}(x)+\text { h.c. } \tag{6.41}
\end{equation*}
$$

where $j_{0}^{a}(x)$ is the slowly varying spin density

$$
\begin{equation*}
j_{0}^{a}(x)=\psi_{\mathrm{R}, \sigma}^{\dagger}(x) \tau_{\sigma, \sigma^{\prime}}^{a} \psi_{\mathrm{R}, \sigma^{\prime}}(x)+\psi_{\mathrm{L}, \sigma}^{\dagger}(x) \tau_{\sigma, \sigma^{\prime}}^{a} \psi_{\mathrm{L}, \sigma^{\prime}}(x) \tag{6.42}
\end{equation*}
$$

and, similarly, the spin current is

$$
\begin{equation*}
j_{1}^{a}(x)=\psi_{\mathrm{R}, \sigma}^{\dagger}(x) \tau_{\sigma, \sigma^{\prime}}^{a} \psi_{\mathrm{R}, \sigma^{\prime}}(x)-\psi_{\mathrm{L}, \sigma}^{\dagger}(x) \tau_{\sigma, \sigma^{\prime}}^{a} \psi_{\mathrm{L}, \sigma^{\prime}}(x) \tag{6.43}
\end{equation*}
$$

The SDW order parameters are

$$
\begin{equation*}
N^{a}(x)=\bar{\psi}_{s, \sigma}(x) \tau_{\sigma, \sigma^{\prime}}^{a} \psi_{s, \sigma^{\prime}}(x), \quad N_{\mathrm{c}}^{a}(x)=i \bar{\psi}_{s, \sigma}(x) \tau_{\sigma, \sigma^{\prime}}^{a} \gamma_{s, s^{\prime}}^{5} \psi_{s^{\prime}, \sigma^{\prime}}(x) \tag{6.44}
\end{equation*}
$$

(where $s, s^{\prime}=\mathrm{R}, \mathrm{L}$ ) and describe modulations of the local spin polarization with wave vector $Q=2 p_{\mathrm{F}}$.

Finally let us discuss pairing operators, which are associated with superconductivity. Here we will be interested in pairing operators associated with uniform ground states (although modulated states are also possible). Pairing operators that create a pair of quasiparticles with total momentum (close to) zero have the form

$$
\begin{equation*}
O_{\mathrm{SP}}(x)=\left\langle\psi_{\mathrm{R}, \sigma}^{\dagger}(x) \psi_{\mathrm{L},-\sigma}^{\dagger}(x)\right\rangle, \quad O_{\mathrm{TP}}(x)=\left\langle\psi_{\mathrm{R}, \sigma}^{\dagger}(x) \psi_{\mathrm{L}, \sigma}^{\dagger}(x)\right\rangle \tag{6.45}
\end{equation*}
$$

where $O_{\mathrm{SP}}(x)$ corresponds to (spin) single pairing, and $O_{\mathrm{TP}}(x)$ to (spin) triplet pairing. Differently from all the operators we discussed so far, the pairing operators do not conserve particle number.

We will see below that all of these order parameters break some (generally continuous) symmetry of the system: translation invariance for the CDW, spin rotations and translation invariance for the SDW, and (global) gauge invariance (associated with particle-number conservation) for the superconducting case. There is a theorem, known as the Mermin-Wagner theorem, that states that in a 1D quantum system continuous symmetries cannot be spontaneously broken. More precisely, this theorem states that correlation functions of order parameters that transform under a continuous global symmetry cannot decay more slowly than as a powerlaw function of distance (or time). We will now see that in the case of the Luttinger model the behavior is exactly a power law. We will interpret this as saying that the system is at a (quantum) critical point. (In high-energy physics this theorem is often attributed to S. Coleman.)

### 6.4 The Luttinger model: bosonization

We will now consider the Luttinger (Tomonaga) model (also known as the massless Thirring model in high-energy physics). We will consider first the case of spinless fermions. The Hamiltonian density $\mathcal{H}$ of the Luttinger model is

$$
\begin{equation*}
\mathcal{H}=\psi^{\dagger}(x)\left(\alpha i v_{\mathrm{F}} \partial_{x}+\beta \Delta\right) \psi(x)+2 g_{2} \rho_{\mathrm{R}}(x) \rho_{\mathrm{L}}(x)+g_{4}\left(\rho_{\mathrm{R}}(x)^{2}+\rho_{\mathrm{L}}(x)^{2}\right) \tag{6.46}
\end{equation*}
$$

where $\rho_{\mathrm{R}}(x) \equiv \psi_{\mathrm{R}}^{\dagger}(x) \psi_{\mathrm{R}}(x)$ and $\rho_{\mathrm{L}}(x) \equiv \psi_{\mathrm{L}}^{\dagger}(x) \psi_{\mathrm{L}}(x)$ denote the densities of right and left movers, respectively. Here $g_{2}=\widetilde{V}(0)-\widetilde{V}\left(2 p_{\mathrm{F}}\right)$ and $g_{4}=\widetilde{V}(0) / 2$, where $\widetilde{V}(q)$ is the Fourier transform of the interaction potential. Hence, $g_{2}$ measures the strength of the backscattering interactions and $g_{4}$ that of the forward-scattering interactions. For a model of spinless fermions on a lattice near half-filling with nearest-neighbor interactions with coupling constant $V$, the coupling constants become $g_{2}=2 V$ and $g_{4}=V$.

Notice that the Hamiltonian of the Luttinger model has the same form as that in the Landau theory of the Fermi liquid in which the quasiparticles have only forward-scattering interactions, here represented by $g_{4}$. Here we have also included backscattering processes labeled by $g_{2}$, with a wave vector $2 p_{\mathrm{F}}$ (i.e. across the "Fermi surface"). Owing to the kinematical restrictions of a curved Fermi surface, in the Landau theory backscattering processes have negligible effects. We will see that in 1D (where there is no curvature) they play a key role.

Precisely at half-filling, in addition to the backscattering and forward-scattering interactions (Figs. 3.1(a) and (b)), an Umklapp interaction must also be considered:
this is a scattering process in which momentum conservation is conserved up to a reciprocal-lattice vector $G=2 \pi$ (Fig. 3.1(c)). An Umklapp process has the form

$$
\begin{equation*}
\mathcal{H}_{\text {Umklapp }}=g_{\mathrm{u}} \lim _{y \rightarrow x}\left(\psi_{\mathrm{R}}^{\dagger}(x) \psi_{\mathrm{R}}^{\dagger}(y) \psi_{\mathrm{L}}(x) \psi_{\mathrm{L}}(y)+R \leftrightarrow L\right) \tag{6.47}
\end{equation*}
$$

where $g_{\mathrm{u}}=\widetilde{V}\left(4 p_{\mathrm{F}} \simeq 2 \pi\right)$. This coupling cannot be expressed in terms of densities of right and left movers. Since the Hamiltonian of the Luttinger model is written in terms of $\rho_{\mathrm{R}}(x)$ and $\rho_{\mathrm{L}}(x)$, it is invariant under a continuous chiral transformation, i.e. it is invariant under an arbitrary continuous translation. An Umklapp term reduces this continuous symmetry to the (discrete) symmetry of lattice displacements.

We will now see that the Luttinger model can be solved exactly by abelian bosonization (see Section 5.6). We will now use the identities we derived in Chapter 5 to find the bosonized form of the Hamiltonian of the Luttinger model and of the observables. As we saw, the free-fermion system maps onto the freeboson system (with the same velocity $v_{\mathrm{F}}$ ). Hence the free-fermion Hamiltonian density (the Dirac Hamiltonian density) becomes

$$
\begin{equation*}
\mathcal{H}_{0}=\frac{v_{\mathrm{F}}}{2}\left(\Pi^{2}+\left(\partial_{x} \phi\right)^{2}\right) \tag{6.48}
\end{equation*}
$$

which, in terms of the field $\phi$ and the dual $\vartheta$, has the symmetric (self-dual) form

$$
\begin{equation*}
\mathcal{H}_{0}=\frac{v_{\mathrm{F}}}{2}\left(\left(\partial_{x} \vartheta\right)^{2}+\left(\partial_{x} \phi\right)^{2}\right) \tag{6.49}
\end{equation*}
$$

where $\vartheta$ is the dual field defined in Eqs. (5.278), (5.279), and (5.281). The rightand left-moving (fermion) densities $\rho_{\mathrm{R}}$ and $\rho_{\mathrm{L}}$ map onto

$$
\begin{align*}
& \rho_{\mathrm{R}}=\frac{1}{2 \sqrt{\pi}}\left(\partial_{x} \phi-\Pi\right)  \tag{6.50}\\
& \rho_{\mathrm{L}}=\frac{1}{2 \sqrt{\pi}}\left(\partial_{x} \phi+\Pi\right) \equiv \frac{1}{2 \sqrt{\pi}} \partial_{x}(\phi-\vartheta)  \tag{6.51}\\
& \partial_{x}(\phi+\vartheta)
\end{align*}
$$

In terms of the right- and left-moving densities the Hamiltonian takes the Sugawara form

$$
\begin{equation*}
\mathcal{H}=\left(\pi v_{\mathrm{F}}+g_{4}\right)\left(\rho_{\mathrm{R}}^{2}+\rho_{\mathrm{L}}^{2}\right)+2 g_{2} \rho_{\mathrm{R}} \rho_{\mathrm{L}} \tag{6.52}
\end{equation*}
$$

Hence, the forward-scattering term of the Luttinger Hamiltonian becomes

$$
\begin{equation*}
g_{4}\left(\rho_{\mathrm{R}}^{2}+\rho_{\mathrm{L}}^{2}\right) \rightarrow \frac{g_{4}}{2 \pi}\left(\Pi^{2}+\left(\partial_{x} \phi\right)^{2}\right) \tag{6.53}
\end{equation*}
$$

Similarly, the backscattering term becomes

$$
\begin{equation*}
2 g_{2} \rho_{\mathrm{R}} \rho_{\mathrm{L}} \rightarrow \frac{g_{2}}{2 \pi}\left(\left(\partial_{x} \phi\right)^{2}-\Pi^{2}\right) \tag{6.54}
\end{equation*}
$$

Thus, we see that the Hamiltonian of the Luttinger model can be represented by an effective bosonized theory, which includes the total effects of forward-scattering and backscattering interactions, and which has the (seemingly) free-bosonic Hamiltonian of the form

$$
\begin{equation*}
\mathcal{H} \equiv \frac{v}{2}\left(\frac{1}{K} \Pi^{2}+K\left(\partial_{x} \phi\right)^{2}\right) \tag{6.55}
\end{equation*}
$$

with an effective velocity $v$ and stiffness $K$ (also known as the Luttinger parameter) given by

$$
\begin{align*}
v & =\sqrt{\left(v_{\mathrm{F}}+\frac{g_{4}}{\pi}\right)^{2}-\left(\frac{g_{2}}{\pi}\right)^{2}}  \tag{6.56}\\
K & =\sqrt{\frac{v_{\mathrm{F}}+g_{4} / \pi+g_{2} / \pi}{v_{\mathrm{F}}+g_{4} / \pi-g_{2} / \pi}} \tag{6.57}
\end{align*}
$$

In terms of the field $\phi$ and its dual field $\vartheta$ the bosonized Luttinger Hamiltonian has the symmetric form

$$
\begin{equation*}
\mathcal{H}=\frac{v}{2}\left(\frac{1}{K}\left(\partial_{x} \vartheta\right)^{2}+K\left(\partial_{x} \phi\right)^{2}\right) \tag{6.58}
\end{equation*}
$$

which is manifestly invariant (self-dual) under the duality transformation

$$
\begin{equation*}
\phi \leftrightarrow \vartheta, \quad K \leftrightarrow \frac{1}{K} \tag{6.59}
\end{equation*}
$$

In string theory this transformation is known as T-duality and the Luttinger parameter is known as the compactification radius (see e.g. Polchinski (1998) and Di Francesco et al. (1997)).

Thus, we see that the Luttinger model, which describes the density fluctuations of a 1D interacting fermion system, is effectively equivalent to a free Bose field with (in addition to the renormalized stiffness $K$ ) an effective speed $v$ for the propagation of the bosons (the density fluctuations). We see immediately several effects.

1. The only effect of the forward-scattering interactions, parametrized by the coupling $g_{4}$, is to renormalize the velocity.
2. The backscattering interactions, with coupling $g_{2}$, renormalize the velocity and the stiffness. Furthermore, for repulsive interactions $g_{2}>0$, the stiffness is renormalized upwards, $K>1$, whereas for attractive interactions, $g_{2}<0$, it is renormalized downwards. We will see that these effects are very important.
3. The bosonized form of the Luttinger model has the obvious invariance under $\phi \rightarrow \phi+\theta$, where $\theta$ is arbitrary. This is the bosonized version of the continuous chiral symmetry of the Luttinger model or, equivalently, the invariance of
the original fermionic system under a rigid displacement of the density profile. Owing to this invariance the system has long-lived long-wavelength density (particle-hole) fluctuations that propagate with speed $v$. In other words, the system has long-lived (undamped) sound modes (i.e. phonons) much as a 1D quantum elastic solid would.
4. We saw that in higher dimensions there are similar collective modes, zero sound, which eventually become (Landau) damped. In 1D for a system with a strictly linearized dispersion these modes are never damped.
5. This feature of the Luttinger model is, naturally, spoiled by microscopic effects we have ignored, such as band curvature that can be shown to contribute non-quadratic terms to the bosonized Hamiltonian of the form $\left(\partial_{x} \phi\right)^{3}$ and similar. These non-linear terms have two main effects: (a) they break the inherent particle-hole symmetry of the Luttinger model, and (b) they cause the boson (the sound modes) to interact with each other and decay, which leads to damping.

At half-filling (obviously on a lattice) we have to consider also the Umklapp term, which becomes

$$
\begin{equation*}
\mathcal{H}_{\mathrm{u}} \sim g_{\mathrm{u}} \cos (4 \sqrt{\pi} \phi) \tag{6.60}
\end{equation*}
$$

This term formally breaks the continuous $\mathrm{U}(1)$ chiral symmetry $\phi \rightarrow \phi+\theta$ to a discrete symmetry subgroup $\phi \rightarrow \phi+n \sqrt{\pi} / 4$, where $n \in \mathbb{Z}$. We will see that when the effects of this operator are important ("relevant") there is a density modulation (a CDW) which is commensurate with the underlying lattice and there is a gap in the fermionic spectrum. In its absence, the fermions remain gapless and the CDW correlations are incommensurate.

The local electron density in bosonized form becomes

$$
\begin{equation*}
\rho(x)=\rho_{0}+\frac{1}{\sqrt{\pi}} \partial_{x} \phi+\frac{1}{2 \pi a}\left\{e^{i 2\left(p_{\mathrm{F}} x-\theta\right)} e^{i \sqrt{4 \pi} \phi(x)}+e^{-i 2\left(p_{\mathrm{F}} x-\theta\right)} e^{-i \sqrt{4 \pi} \phi(x)}\right\} \tag{6.61}
\end{equation*}
$$

and the total charge of the system is

$$
\begin{equation*}
Q=-e \int d x j_{0}(x)=-\frac{e}{\sqrt{\pi}} \int d x \partial_{x} \phi(x)=-\frac{e}{\sqrt{\pi}} \Delta \phi \tag{6.62}
\end{equation*}
$$

where $\Delta \phi=\phi(+\infty)-\phi(-\infty)$. Hence, in the charge-neutral sector the system must obey periodic boundary conditions, $\Delta \phi=0$. Conversely, boundary conditions involving the winding of the boson by $\Delta \phi=N \sqrt{\pi}$, where $N \in \mathbb{Z}$, amount to the sector with charge $Q=-N e$.

We now summarize our main operator identifications:

$$
\begin{align*}
j_{0} & \rightarrow \frac{1}{\sqrt{\pi}} \partial_{x} \phi, & j_{1} & \rightarrow-\frac{1}{\sqrt{\pi}} \partial_{x} \vartheta  \tag{6.63}\\
\psi_{\mathrm{R}} & \rightarrow \frac{1}{\sqrt{2 \pi a}} e^{i 2 \sqrt{\pi} \phi_{\mathrm{R}}}, & \psi_{\mathrm{L}} & \rightarrow \frac{1}{\sqrt{2 \pi a}} e^{-i 2 \sqrt{\pi} \phi_{\mathrm{L}}} \\
\bar{\psi} \psi & \rightarrow \frac{1}{\pi a} \cos (2 \sqrt{\pi} \phi), & i \bar{\psi} \gamma^{5} \psi & \rightarrow \frac{1}{\pi a} \sin (2 \sqrt{\pi} \phi)  \tag{6.64}\\
\psi_{\mathrm{R}}^{\dagger} \psi_{\mathrm{L}}^{\dagger} & \rightarrow \frac{1}{\pi a} e^{i 2 \sqrt{\pi} \vartheta} & \psi_{\mathrm{R}}^{\dagger} \psi_{\mathrm{L}}^{\dagger} \psi_{\mathrm{R}} \psi_{\mathrm{L}} & \rightarrow \frac{1}{\pi a} e^{i 4 \sqrt{\pi} \phi}
\end{align*}
$$

### 6.5 Spin and the Luttinger model

We will now consider the case of the Luttinger model for spin- $1 / 2$ fermions, and use the same bosonization approach as before. In this context it is known as abelian bosonization since the $\mathrm{SU}(2)$ symmetry of spin is not treated in full. A more correct (and more sophisticated) approach that involves non-abelian bosonization (Witten, 1984) will be discussed in Section 7.10.

The Hamiltonian density for the Luttinger model for spin-1/2 fermions with both chiralities, denoted below by $s=+1$ (for R ) and $s=-1$ (for L ), is

$$
\begin{align*}
\mathcal{H}= & -i v_{\mathrm{F}} \sum_{\sigma=\uparrow, \downarrow} \sum_{s= \pm 1} s \psi_{s, \sigma}^{\dagger} \partial_{x} \psi_{s, \sigma} \\
& +g_{4} \sum_{\sigma, s} \psi_{s, \sigma}^{\dagger} \psi_{s,-\sigma}^{\dagger} \psi_{s,-\sigma} \psi_{s, \sigma} \\
& +g_{2} \sum_{\sigma, \sigma^{\prime}} \psi_{1, \sigma}^{\dagger} \psi_{-1, \sigma^{\prime}}^{\dagger} \psi_{-1, \sigma^{\prime}} \psi_{1, \sigma} \\
& +g_{1, \|} \sum_{\sigma} \psi_{1, \sigma}^{\dagger} \psi_{-1, \sigma}^{\dagger} \psi_{1, \sigma} \psi_{-1, \sigma} \\
& +g_{1, \perp} \sum_{\sigma} \psi_{1, \sigma}^{\dagger} \psi_{-1,-\sigma}^{\dagger} \psi_{1,-\sigma} \psi_{-1, \sigma} \tag{6.67}
\end{align*}
$$

Here $g_{4}$ represents forward-scattering processes of fermions of the same branch (and opposite spin), $g_{2}$ forward-scattering processes on opposite branches, $g_{1, \|}$ backscattering processes without spin flip, and $g_{1, \perp}$ scattering processes on opposite branches with spin flip. There is also a possible Umklapp scattering term whose form is

$$
\begin{equation*}
\mathcal{H}_{u}=g_{3} e^{i\left(4 p_{\mathrm{F}}-G\right) x} \psi_{-1, \uparrow}^{\dagger} \psi_{-1, \downarrow}^{\dagger} \psi_{1, \downarrow} \psi_{1, \uparrow}+\text { h.c. } \tag{6.68}
\end{equation*}
$$

where $G$ is a reciprocal-lattice vector. As before, we will ignore Umklapp processes unless we are at half-filling. For the special case of the 1D Hubbard model, Eq. (6.5), the relations between the coupling constants of the spin- $1 / 2$ Luttinger
model and the (Hubbard) coupling constant $U$ are $g_{2}=g_{4}=g_{1, \perp}=g_{1, \|}=U$, and $g_{3}=U$ (if the Umklapp process is allowed).

For the system to be manifestly invariant under $\mathrm{SU}(2)$ spin rotations (as the Hubbard model is) it must be possible to rewrite the Hamiltonian in an explicitly $\mathrm{SU}(2)$-invariant form. To see that this is true we introduce the right- and left-moving $\operatorname{SU}(2)$ (chiral) spin currents $J_{\mathrm{R}}^{a}(x)$ and $J_{\mathrm{L}}^{a}(x)(a=1,2,3)$

$$
\begin{equation*}
J_{\mathrm{R}}^{a}(x)=\frac{1}{2} \psi_{\mathrm{R}, \sigma}^{\dagger}(x) \tau_{\sigma, \sigma^{\prime}}^{a} \psi_{\mathrm{R}, \sigma^{\prime}}(x), \quad J_{\mathrm{L}}^{a}(x)=\frac{1}{2} \psi_{\mathrm{L}, \sigma}^{\dagger}(x) \tau_{\sigma, \sigma^{\prime}}^{a} \psi_{\mathrm{L}, \sigma^{\prime}}(x) \tag{6.69}
\end{equation*}
$$

where the $\tau^{a}$ (again with $a=1,2,3$ ) are the three Pauli matrices and the factor of $\frac{1}{2}$ is included in order to use the standard normalization of the $\mathrm{SU}(2)$ generators. The right- and left-moving $\mathrm{U}(1)$ (chiral) charge currents $J_{\mathrm{R}}(x)$ and $J_{\mathrm{L}}(x)$ are given by

$$
\begin{equation*}
J_{\mathrm{R}}(x)=\psi_{\mathrm{R}, \sigma}^{\dagger}(x) \psi_{\mathrm{R}, \sigma}(x), \quad J_{\mathrm{L}}(x)=\psi_{\mathrm{L}, \sigma}^{\dagger}(x) \psi_{\mathrm{L}, \sigma}(x) \tag{6.70}
\end{equation*}
$$

In Chapter 5 we derived the algebra of the chiral currents for the $U(1)$ case, the chiral $\mathrm{U}(1)$ Kac-Moody algebra of Eqs. (5.245) and (5.246). In the $\mathrm{SU}(2) \times \mathrm{U}(1)$ (i.e. $\mathrm{U}(2)$ ) case we are interested in here we find, instead, that the two chiral $\mathrm{SU}(2)$ and $U(1)$ currents obey the Kac-Moody algebras (Witten, 1984)

$$
\begin{align*}
& {\left[J_{\mathrm{R}}^{a}(x), J_{\mathrm{R}}^{b}(y)\right]=i \epsilon^{a b c} J_{\mathrm{R}}^{c}(x) \delta(x-y)+i \frac{k}{4 \pi} \delta^{a b} \delta^{\prime}(x-y)}  \tag{6.71}\\
& {\left[J_{\mathrm{L}}^{a}(x), J_{\mathrm{L}}^{b}(y)\right]=i \epsilon^{a b c} J_{\mathrm{L}}^{c}(x) \delta(x-y)-i \frac{k}{4 \pi} \delta^{a b} \delta^{\prime}(x-y)}
\end{align*}
$$

and

$$
\begin{align*}
{\left[J_{\mathrm{R}}(x), J_{\mathrm{R}}(y)\right] } & =\frac{i}{\pi} \delta^{\prime}(x-y)  \tag{6.72}\\
{\left[J_{\mathrm{L}}(x), J_{\mathrm{L}}(y)\right] } & =-\frac{i}{\pi} \delta^{\prime}(x-y)
\end{align*}
$$

where, once again, the primes in Eqs. (6.71) and (6.72) denote derivatives of the delta functions. The integer $k$ (which in this case is $k=1$ ) is called the level of the $\mathrm{SU}(2)_{k}$ Kac-Moody algebra. The current algebras defined by Eqs. (6.71) are the basis of non-abelian bosonization (Witten, 1984), which we will discuss in Section 7.10. Please note that there is a factor of 2 difference between Eqs. (6.72) and Eqs. (5.245) and (5.246) due to the fact that, for $S U(2) \times U(1)$, the $U(1)$ chiral anomaly (the Schwinger term) is doubled.

The Hamiltonian of Eq. (6.67) is $\operatorname{SU}(2)$-invariant if the couplings satisfy $g_{1, \|}=$ $g_{1, \perp} \equiv g_{1}$. Indeed, if this condition holds it is possible to rewrite the effective Hamiltonian of Eq. (6.67) (i.e. the effective Hamiltonian without Umklapp terms) in the more compact and $\mathrm{SU}(2) \times \mathrm{U}(1)$-invariant form

$$
\begin{align*}
\mathcal{H}= & \frac{\pi}{2} v_{\mathrm{F}}\left(J_{\mathrm{R}}(x) J_{\mathrm{R}}(x)+J_{\mathrm{L}}(x) J_{\mathrm{L}}(x)\right) \\
& +\frac{2 \pi}{3} v_{\mathrm{F}}\left(\vec{J}_{\mathrm{R}}(x) \cdot \vec{J}_{\mathrm{R}}(x)+\vec{J}_{\mathrm{L}}(x) \cdot \vec{J}_{\mathrm{L}}(x)\right) \\
& +\frac{g_{4}}{4}\left(J_{\mathrm{R}}(x) J_{\mathrm{R}}(x)+J_{\mathrm{L}}(x) J_{\mathrm{L}}(x)\right) \\
& -g_{4}\left(\vec{J}_{\mathrm{R}}(x) \cdot \vec{J}_{\mathrm{R}}(x)+\vec{J}_{\mathrm{L}}(x) \cdot \vec{J}_{\mathrm{L}}(x)\right) \\
& +\frac{1}{2}\left(2 g_{2}-g_{1}\right) J_{\mathrm{R}}(x) J_{\mathrm{L}}(x) \\
& -2 g_{1} \vec{J}_{\mathrm{R}}(x) \cdot \vec{J}_{\mathrm{L}}(x) \tag{6.73}
\end{align*}
$$

where we expressed the (free) kinetic-energy term as a quadratic form in the currents (Dashen and Frishman, 1975; Affleck, 1986a). This is the Sugawara form of the Hamiltonian.

It is useful to write this effective-field theory also in the form of a Lagrangian (density) for the two Dirac spinor fields, $\psi_{\mathrm{R}, \sigma}$ and $\psi_{\mathrm{L}, \sigma}$ (with $\sigma=\uparrow, \downarrow$ ). Ignoring the forward-scattering terms (with coupling constant $g_{4}$ ), the effective Lagrangian $\mathcal{L}$ is

$$
\begin{equation*}
\mathcal{L}=\bar{\psi} i \gamma^{\mu} \partial_{\mu} \psi-\frac{1}{8}\left(2 g_{2}-g_{1}\right)\left(\bar{\psi} \gamma^{\mu} \psi\right)^{2}+\frac{g_{1}}{8}\left(\bar{\psi} \gamma_{\mu} \vec{\sigma} \psi\right)^{2} \tag{6.74}
\end{equation*}
$$

where we have dropped the spin indices for clarity. Forward-scattering terms amount to finite renormalizations of the velocity of the collective modes of the charge and spin sectors. Since spin and charge degrees of freedom are effectively split this amounts to a separate rescaling of the dependence on the time (or space) coordinates of these degrees of freedom.

The Lagrangian of Eq. (6.74) is known as the $\mathrm{SU}(2) \times \mathrm{U}(1)$ Thirring model. Using the (Fierz) identity

$$
\begin{equation*}
\left(\bar{\psi} \gamma^{\mu} \vec{\sigma} \psi\right)^{2}+\left(\bar{\psi} \gamma_{\mu} \psi\right)^{2}=-2\left[(\bar{\psi} \psi)^{2}-\left(\bar{\psi} \gamma_{5} \psi\right)^{2}\right] \tag{6.75}
\end{equation*}
$$

the effective Lagrangian of Eq. (6.74) can be written in the equivalent form (again we are dropping the spin indices)

$$
\begin{equation*}
\mathcal{L}=\bar{\psi} i \gamma^{\mu} \partial_{\mu} \psi-\frac{g_{2}}{4}\left(\bar{\psi} \gamma^{\mu} \psi\right)^{2}+\frac{g_{1}}{4}\left[(\bar{\psi} \psi)^{2}-\left(\bar{\psi} \gamma_{5} \psi\right)^{2}\right] \tag{6.76}
\end{equation*}
$$

which is known as the chiral Gross-Neveu model.
The effective Lagrangians of Eq. (6.74) and Eq. (6.76) are invariant under the continuous chiral transformation $\psi \rightarrow \exp \left(i \theta \gamma_{5}\right) \psi$, which, as we saw earlier in this chapter, amounts to a rigid translation in space of the electronic charge density $\rho(x)$ by an amount proportional to the chiral angle $\theta$. As we saw, away from half-filling, this is a symmetry of the Luttinger liquid. At half-filling this global
continuous chiral symmetry is broken down to a discrete symmetry subgroup by the Umklapp term in the Hamiltonian, which, in this notation, has the manifestly $\mathrm{SU}(2) \times \mathrm{U}(1)$-invariant form

$$
\begin{equation*}
\mathcal{L}_{\text {Umklapp }} \sim \epsilon_{\alpha \beta} \psi_{\mathrm{L}, \alpha}^{\dagger} \psi_{\mathrm{L}, \beta}^{\dagger} \epsilon_{\gamma \delta} \psi_{\mathrm{R}, \gamma} \psi_{\mathrm{R}, \delta}+\text { h.c. } \tag{6.77}
\end{equation*}
$$

This interaction term represents a process in which a spin-singlet pair of right movers is destroyed and a spin-singlet pair of left movers is created (and vice versa).

### 6.5.1 Abelian bosonization of the Luttinger liquid

We are now ready to proceed with the (abelian) bosonization of the spin-1/2 Luttinger model. Once again we begin with the free fermion. We then introduce two Bose fields, $\phi_{\uparrow}$ and $\phi_{\downarrow}$, and their respective canonical momenta, $\Pi_{\uparrow}$ and $\Pi_{\downarrow}$. The corresponding free-boson Hamiltonian is

$$
\begin{equation*}
\mathcal{H}_{0}=\frac{v_{\mathrm{F}}}{2} \sum_{\sigma}\left(\Pi_{\sigma}^{2}+\left(\partial_{x} \phi_{\sigma}\right)^{2}\right) \tag{6.78}
\end{equation*}
$$

We now define the charge and spin Bose fields $\phi_{\mathrm{c}}$ and $\phi_{\mathrm{s}}$,

$$
\begin{align*}
\phi_{\mathrm{c}} & =\frac{1}{\sqrt{2}}\left(\phi_{\uparrow}+\phi_{\downarrow}\right)  \tag{6.79}\\
\phi_{\mathrm{s}} & =\frac{1}{\sqrt{2}}\left(\phi_{\uparrow}-\phi_{\downarrow}\right) \tag{6.80}
\end{align*}
$$

in terms of which $\mathcal{H}_{0}$ becomes a sum over the charge and spin sectors

$$
\begin{equation*}
\mathcal{H}_{0}=\frac{v_{\mathrm{F}}}{2}\left(\Pi_{\mathrm{c}}^{2}+\left(\partial_{x} \phi_{\mathrm{c}}\right)^{2}\right)+\frac{v_{\mathrm{F}}}{2}\left(\Pi_{\mathrm{s}}^{2}+\left(\partial_{x} \phi_{\mathrm{s}}\right)^{2}\right) \tag{6.81}
\end{equation*}
$$

where $\Pi_{\mathrm{c}}$ and $\Pi_{\mathrm{s}}$ are the momenta canonically conjugate to $\phi_{\mathrm{c}}$ and $\phi_{\mathrm{s}}$. By analogy with the spinless case we now define for the charge and spin fields $\phi_{\mathrm{c}}$ and $\phi_{\mathrm{s}}$ their respective dual fields $v_{\mathrm{c}}$ and $v_{\mathrm{s}}$ (cf. Eq. (5.278) and Eq. (5.279)).

We now see that the interactions will lead to a finite renormalization of these parameters, leading to the introduction of a charge and a spin velocity, $v_{\mathrm{c}}$ and $v_{\mathrm{s}}$, and of the charge and spin Luttinger parameters $K_{\mathrm{c}}$ and $K_{\mathrm{s}}$.

The charge and spin densities and currents are

$$
\begin{align*}
& j_{0}^{\mathrm{c}}=j_{0}^{\uparrow}+j_{0}^{\downarrow}=\frac{1}{\sqrt{\pi}} \partial_{x}\left(\phi_{\uparrow}+\phi_{\downarrow}\right)=\sqrt{\frac{2}{\pi}} \partial_{x} \phi_{\mathrm{c}}  \tag{6.82}\\
& j_{0}^{\mathrm{s}}=\frac{1}{2}\left(j_{0}^{\uparrow}-j_{0}^{\downarrow}\right)=\frac{1}{\sqrt{\pi}} \partial_{x}\left(\phi_{\uparrow}-\phi_{\downarrow}\right)=\sqrt{\frac{2}{\pi}} \partial_{x} \phi_{\mathrm{s}} \tag{6.83}
\end{align*}
$$

Using the bosonization identities, we can write the Luttinger Hamiltonian in the form

$$
\begin{align*}
\mathcal{H}= & \frac{v_{\mathrm{c}}}{2}\left(\frac{1}{K_{\mathrm{c}}} \Pi_{\mathrm{c}}^{2}+K_{\mathrm{c}}\left(\partial_{x} \phi_{\mathrm{c}}\right)^{2}\right)+\frac{v_{\mathrm{s}}}{2}\left(\frac{1}{K_{\mathrm{s}}} \Pi_{\mathrm{s}}^{2}+K_{\mathrm{s}}\left(\partial_{x} \phi_{\mathrm{s}}\right)^{2}\right) \\
& +V_{\mathrm{c}} \cos \left(2 \sqrt{2 \pi} \phi_{\mathrm{c}}\right)+V_{\mathrm{s}} \cos \left(2 \sqrt{2 \pi} \phi_{\mathrm{s}}\right) \tag{6.84}
\end{align*}
$$

where $v_{\mathrm{c}}$ and $v_{\mathrm{s}}$ are the charge and spin velocities,

$$
\begin{align*}
& v_{\mathrm{c}}=\sqrt{\left(v_{\mathrm{F}}+\frac{g_{4}}{2 \pi}\right)^{2}-\left(\frac{g_{1, \|}}{2 \pi}-\frac{g_{2}}{\pi}\right)^{2}} \\
& v_{\mathrm{s}}=\sqrt{\left(v_{\mathrm{F}}-\frac{g_{4}}{2 \pi}\right)^{2}-\left(\frac{g_{1, \|}}{2 \pi}\right)^{2}} \tag{6.85}
\end{align*}
$$

$K_{\mathrm{c}}$ and $K_{\mathrm{s}}$ are the charge and spin Luttinger parameters,

$$
\begin{equation*}
K_{\mathrm{c}}=\sqrt{\frac{2 \pi v_{\mathrm{F}}+g_{4}+2 g_{2}-g_{1, \|}}{2 \pi v_{\mathrm{F}}+g_{4}-2 g_{2}+g_{1, \|}}}, \quad K_{\mathrm{s}}=\sqrt{\frac{2 \pi v_{\mathrm{F}}-g_{4}-g_{1, \|}}{2 \pi v_{\mathrm{F}}-g_{4}+g_{1, \|}}} \tag{6.86}
\end{equation*}
$$

The couplings $V_{\mathrm{c}}$ and $V_{\mathrm{s}}$, due to Umklapp and backscattering with spin flip, respectively, are given by

$$
\begin{equation*}
V_{\mathrm{c}}=\frac{g_{3}}{2(\pi a)^{2}}, \quad V_{\mathrm{s}}=\frac{g_{1, \perp}}{2(\pi a)^{2}} \tag{6.87}
\end{equation*}
$$

In what follows we will neglect Umklapp processes and hence set $V_{\mathrm{c}}=0$. In the absence of backscattering, $g_{1, \|}=g_{1, \perp}=0$ (and hence $V_{\mathrm{s}}=0$ ); this model is known as the Tomonaga-Luttinger model. Notice that in this case $K_{\mathrm{s}}=1$ automatically. This is a consequence of the $S U(2)$ symmetry of spin.

1. We now see that this model describes a system with charge and spin bosons, the charge and spin collective modes of the fermionic system. In general the charge and spin velocities are different.
2. There is no mixing between charge and spin bosons: spin-charge separation.
3. We also see that for repulsive interactions the charge mode propagates faster than the spin mode, $v_{\mathrm{c}}>v_{\mathrm{s}}$.
4. In the same regime, $K_{\mathrm{c}}>1$ while $K_{\mathrm{s}}<1$. This will have important consequences.
5. The fermion operators, with chirality $\eta= \pm$ (for right and left) and spin $\sigma$ can now be expressed in terms of the right- and left-moving charge and spin Bose fields $\phi_{\eta, \sigma}$ (by using Eq. (5.282)) as

$$
\begin{equation*}
\psi_{\eta, \sigma}=\frac{1}{\sqrt{2 \pi a}} F_{\eta, \sigma} e^{-i \eta \sqrt{2 \pi}\left(\phi_{\eta, \mathrm{c}}+\sigma \phi_{\eta, \mathrm{s}}\right)} \tag{6.88}
\end{equation*}
$$

where $F_{\eta, \sigma}$ are Klein factors that ensure that fermions with different labels anticommute with each other,

$$
\begin{equation*}
\left\{F_{\eta, \sigma}, F_{\eta^{\prime} \sigma^{\prime}}\right\}=\delta_{\eta, \eta^{\prime}} \delta_{\sigma, \sigma^{\prime}} \tag{6.89}
\end{equation*}
$$

and $a$ is a short-distance cutoff.

We can now express all the operators in which we are interested in terms of charge and spin bosons. In the following subsections we will use these expressions to compute their correlation functions and several observables of physical interest.

1. $S U(2)$ spin currents. The $S U(2)$ chiral currents are given by

$$
\begin{align*}
J_{\mathrm{R}}^{3} & =\frac{1}{\sqrt{2 \pi}} \partial_{x} \phi_{\mathrm{R}, s}, & J_{\mathrm{R}}^{ \pm} & =\frac{1}{2 \pi a} e^{\mp i 2 \sqrt{2 \pi} \phi_{\mathrm{R}, s}}  \tag{6.90}\\
J_{\mathrm{L}}^{3} & =\frac{1}{\sqrt{2 \pi}} \partial_{x} \phi_{\mathrm{L}, s}, & J_{\mathrm{L}}^{ \pm} & =\frac{1}{2 \pi a} e^{ \pm i 2 \sqrt{2 \pi} \phi_{\mathrm{L}, s}} \tag{6.91}
\end{align*}
$$

It is straightforward to check that at the free-fermion point all these operators have dimension 1 (as they should), are conserved, and obey the $\mathrm{SU}(2)_{1} \mathrm{Kac}-$ Moody algebra.
2. Charge-density wave. The CDW order parameter has the bosonized expression

$$
\begin{equation*}
\mathcal{O}_{\mathrm{CDW}}=e^{-i 2 p_{\mathrm{F}} x} \sum_{\sigma} \psi_{1, \sigma}^{\dagger}(x) \psi_{-1, \sigma} \rightarrow \frac{1}{\pi a} e^{-i 2 p_{\mathrm{F}} x} \cos \left(\sqrt{2 \pi} \phi_{\mathrm{s}}\right) e^{-i \sqrt{2 \pi} \phi_{\mathrm{c}}(x)} \tag{6.92}
\end{equation*}
$$

3. Spin-density wave. The bosonized forms of the three components of the SDW order parameter are

$$
\begin{align*}
\mathcal{O}_{\mathrm{SDW}}^{(3)} & =e^{-i 2 p_{\mathrm{F}} x} \sum_{\sigma, \sigma^{\prime}} \psi_{1, \sigma}^{\dagger}(x) \tau_{\sigma, \sigma^{\prime}}^{3} \psi_{-1, \sigma^{\prime}} \\
& \rightarrow-\frac{1}{\pi a} e^{-i 2 p_{\mathrm{F}} x} 2 i \sin \left(\sqrt{2 \pi} \phi_{\mathrm{s}}\right) e^{-i \sqrt{2 \pi} \phi_{\mathrm{c}}(x)}  \tag{6.93}\\
\mathcal{O}_{\mathrm{SDW}}^{( \pm)} & =e^{-i 2 p_{\mathrm{F}} x} \sum_{\sigma, \sigma^{\prime}} \psi_{1, \sigma}^{\dagger}(x) \tau_{\sigma, \sigma^{\prime}}^{ \pm} \psi_{-1, \sigma^{\prime}} \\
& \rightarrow \frac{1}{\pi a} e^{-i 2 p_{\mathrm{F}} x} e^{-i \sqrt{2 \pi} \phi_{\mathrm{c}}} e^{ \pm i \sqrt{2 \pi} \vartheta_{\mathrm{s}}(x)} \tag{6.94}
\end{align*}
$$

4. Singlet superconductivity. The singlet superconducting order parameter, i.e. the singlet Cooper-pair amplitude, has the bosonized expression

$$
\begin{equation*}
\mathcal{O}_{\mathrm{SS}}=\psi_{\mathrm{R}, \uparrow}^{\dagger} \psi_{\mathrm{L}, \downarrow}^{\dagger} \rightarrow e^{i \sqrt{2 \pi} \vartheta_{\mathrm{c}}} e^{-i \sqrt{2 \pi} \phi_{\mathrm{s}}} \tag{6.95}
\end{equation*}
$$

5. Triplet superconductivity. The triplet Cooper-pair operator is

$$
\begin{align*}
\mathcal{O}_{\mathrm{TS}}^{(1)} & =\psi_{\mathrm{R}, \uparrow}^{\dagger} \psi_{\mathrm{L}, \uparrow}^{\dagger} \rightarrow e^{i \sqrt{2 \pi} \vartheta_{\mathrm{c}}} e^{i \sqrt{2 \pi} \vartheta_{\mathrm{s}}}  \tag{6.96}\\
\mathcal{O}_{\mathrm{TS}}^{(-1)} & =\psi_{\mathrm{R}, \downarrow}^{\dagger} \psi_{\mathrm{L}, \downarrow}^{\dagger} \rightarrow e^{i \sqrt{2 \pi} \vartheta_{\mathrm{c}}} e^{-i \sqrt{2 \pi} \vartheta_{\mathrm{s}}} \tag{6.97}
\end{align*}
$$

### 6.6 Scaling and renormalization in the Luttinger model

We will now discuss the scaling behavior of the Luttinger model. We saw before that it generally exhibits the phenomenon of spin-charge separation which, at the
level of the effective low-energy Hamiltonian density $\mathcal{H}$, means that it is a sum of two decoupled terms

$$
\begin{equation*}
\mathcal{H}=\mathcal{H}_{\mathrm{c}}+\mathcal{H}_{\mathrm{s}} \tag{6.98}
\end{equation*}
$$

where both the charge sector and the spin sector are represented at low energies by sine-Gordon Hamiltonians. Indeed, the bosonized form of the Hamiltonian density for the charge sector $\mathcal{H}_{\mathrm{c}}$ is

$$
\begin{equation*}
\mathcal{H}_{\mathrm{c}}=\frac{v_{\mathrm{c}}}{2}\left[\frac{1}{K_{\mathrm{s}}} \Pi_{\mathrm{c}}^{2}+K_{\mathrm{s}}\left(\partial_{x} \phi_{\mathrm{c}}\right)^{2}\right]+V_{\mathrm{c}} \cos \left(2 \sqrt{2 \pi} \phi_{\mathrm{c}}\right) \tag{6.99}
\end{equation*}
$$

As we saw above, the last term is present only at half-filling, and is due to an Umklapp process. In its presence the system develops a (Mott) charge gap and it is an insulator.

The bosonized form of the sine-Gordon Hamiltonian density for the spin sector $\mathcal{H}_{\mathrm{s}}$ is

$$
\begin{equation*}
\mathcal{H}_{\mathrm{s}}=\frac{v_{\mathrm{s}}}{2}\left(\frac{1}{K_{\mathrm{s}}} \Pi_{\mathrm{s}}^{2}+K_{\mathrm{s}}\left(\partial_{r} \phi_{\mathrm{s}}\right)^{2}\right)+V_{\mathrm{s}} \cos \left(2 \sqrt{2 \pi} \phi_{\mathrm{s}}\right) \tag{6.100}
\end{equation*}
$$

In contrast to the cosine operator of the charge sector, the last term of the Hamiltonian density of the spin sector $\mathcal{H}_{\mathrm{s}}$ is always present since it represents backscattering processes with spin flip.

Thus, we can use the analysis of the sine-Gordon model to derive scaling laws for the Luttinger model. In the preceding sections we discussed the behavior of several correlation functions and susceptibilities of interest in the absence of the sine-Gordon operators. Following the same analysis as in Chapter 4, we begin by computing the scaling dimensions of the cosine operators both in the charge sector and in the spin sector.

### 6.6.1 The charge sector

The scaling dimension of the cosine operator (charge Umklapp processes) is

$$
\begin{equation*}
\Delta_{\mathrm{c}}(2 \sqrt{2 \pi})=\frac{(2 \sqrt{2 \pi})^{2}}{4 \pi K_{\mathrm{c}}}=\frac{2}{K_{\mathrm{c}}} \tag{6.101}
\end{equation*}
$$

Since it is an Umklapp scattering process it is present only at half-filling. Away from half-filling this process has zero amplitude. For free fermions the charge Luttinger parameter is $K_{\mathrm{c}}=1$, the scaling dimension is $\Delta_{\mathrm{c}}=2$, and Umklapp processes are marginal. For a Luttinger model with repulsive interactions, the charge Luttinger parameter obeys $K_{\mathrm{c}}>1$, the scaling dimension is $\Delta_{\mathrm{c}}=2 / K_{\mathrm{c}}<2$, and Umklapp processes are relevant. This is the case of the 1D Hubbard model at halffilling. Our analysis of the scaling behavior of sine-Gordon theory in Chapter 4 in
terms of the Kosterlitz RG flow tells us that in this case the charge sector flows to strong coupling where the charge boson $\phi_{c}$ is pinned and hence acquires an expectation value. The charge fluctuations become massive and there is an energy gap in the charge spectrum. This is a Mott insulating state. Conversely, for a system with attractive interactions, the charge Luttinger parameter now has $K_{\mathrm{c}}<1$, the scaling dimension is $\Delta_{c}>2$, and Umklapp processes are not allowed by symmetry, and the charge sector remains gapless.

### 6.6.2 The spin sector

In the spin sector we have to look at the relevance or irrelevance of the cosine operator of the bosonized theory representing backscattering processes with spin flip. The scaling dimension is

$$
\begin{equation*}
\Delta_{\mathrm{s}}(2 \sqrt{2 \pi})=\frac{2}{K_{\mathrm{s}}} \tag{6.102}
\end{equation*}
$$

Once again, for free fermions the spin Luttinger parameter is $K_{\mathrm{s}}=1$, the scaling dimension is $\Delta_{s}=2$, and the operator is marginal. In the case of an interacting theory, i.e. in the Luttinger model, for repulsive interactions the spin Luttinger parameter satisfies $K_{\mathrm{s}}<1$, which implies that the scaling dimension is $\Delta_{\mathrm{s}}=2 / K_{\mathrm{s}}>2$ and, thus, these processes are irrelevant. Thus, for repulsive interactions we expect the spin sector to remain gapless, and hence critical. With some caveats (which we address below), this is what happens in the case of the 1D Hubbard model in the repulsive regime. Conversely, for attractive interactions the spin Luttinger parameter now obeys $K_{\mathrm{s}}>1$, the scaling dimension is $\Delta_{\mathrm{s}}<2$, and backscattering processes with spin flip are relevant. In this regime the spin boson $\phi_{\mathrm{s}}$ becomes pinned and its fluctuations are massive. Hence, for attractive interactions we generally expect that the spin sector becomes gapped.

### 6.6.3 Scaling analysis of the one-dimensional Hubbard model

In the case of the 1D Hubbard model all the Luttinger couplings are equal. As we saw above, this condition in part is a consequence of the spin $\mathrm{SU}(2)$ symmetry. However, this symmetry alone does not require that the other couplings be equal. An examination of the charge and spin Luttinger velocities and parameters, Eq. (6.85) and Eq. (6.86), reveals that the Hubbard model has an additional symmetry:

$$
\begin{align*}
K_{\mathrm{c}} & =\sqrt{1+\frac{U}{\pi v_{\mathrm{F}}}}, & K_{\mathrm{s}} & =\sqrt{1-\frac{U}{\pi v_{\mathrm{F}}}}  \tag{6.103}\\
v_{\mathrm{c}} & =\sqrt{\left(v_{\mathrm{F}}+\frac{U}{2 \pi}\right)^{2}-\left(\frac{U}{2 \pi}\right)^{2}}, & v_{\mathrm{s}} & =\sqrt{\left(v_{\mathrm{F}}-\frac{U}{2 \pi}\right)^{2}-\left(\frac{U}{2 \pi}\right)^{2}} \tag{6.104}
\end{align*}
$$

$$
\begin{equation*}
g_{\mathrm{c}}=\frac{U}{2 \pi^{2} v_{\mathrm{c}}}, \quad g_{\mathrm{s}}=\frac{U}{2 \pi^{2} v_{\mathrm{s}}} \tag{6.105}
\end{equation*}
$$

where we introduced the dimensionless (sine-Gordon) couplings $g_{c}$ and $g_{s}$. There is a clear symmetry $U \leftrightarrow-U$, which amounts to exchanging the spin and charge sectors.

However, since the spin sector has an $\mathrm{SU}(2)$ symmetry (and its associated $\mathrm{SU}(2)_{1}$ Kac-Moody current algebra) we guess that there must be a "hidden" $\mathrm{SU}(2)$ symmetry (and a current algebra) in the charge sector as well. Indeed, let us decompose the charged (Dirac) Fermi fields $\psi_{\eta, \sigma}(x)$ into their (real and imaginary) Majorana fermion components,

$$
\begin{equation*}
\psi_{\eta, \sigma}=\xi_{1, \eta, \sigma}+i \xi_{2, \eta, \sigma} \tag{6.106}
\end{equation*}
$$

The Majorana fermions $\xi_{i, \eta, \sigma}(x)$ satisfy the (Majorana) anticommutation relations

$$
\begin{equation*}
\left\{\xi_{i, \eta, \sigma}(x), \xi_{i^{\prime}, \eta^{\prime}, \sigma^{\prime}}\left(x^{\prime}\right)\right\}=\delta_{i, i^{\prime}} \delta\left(x-x^{\prime}\right) \tag{6.107}
\end{equation*}
$$

In terms of these Majorana fermions, the $\mathrm{SU}(2) \times \mathrm{U}(1) \simeq \mathrm{U}(2)$ symmetry actually becomes an $\mathrm{SO}(4)$ symmetry. In fact it is easy to construct an additional set of $\mathrm{SU}(2)$ currents in terms of the Majorana fields $\xi_{i, \eta, \sigma}$. The three generators are the chiral charge current $\psi_{\mathrm{R}, \sigma}^{\dagger} \psi_{\mathrm{R}, \sigma}=2 i \xi_{1, \eta, \sigma} \xi_{2, \eta, \sigma}$ and the chiral pair fields $\psi_{\mathrm{R}, \uparrow}^{\dagger} \psi_{\mathrm{R}, \downarrow}^{\dagger}=-2 i \xi_{1, \eta, \uparrow} \xi_{2, \eta, \downarrow}$. They also obey an $\mathrm{SU}(2)_{1} \mathrm{Kac}-$ Moody algebra (and the same applies to their left-moving counterparts).

This $\mathrm{SO}(4)$ symmetry is not an accident of the continuum Luttinger model, since it is also present in the Hubbard model on general lattices. In the case of the 1D chain, the $\mathrm{SO}(4)$ symmetry plays a key role in its exact solution (see Essler et al. (2005)). In the 1D lattice model, the pairing operator is known as "eta pairing" and is given by

$$
\begin{equation*}
\eta_{n}^{\dagger}=\sum_{n=1}^{N}(-1)^{n} c_{n, \uparrow}^{\dagger} c_{n, \downarrow}^{\dagger} \tag{6.108}
\end{equation*}
$$

which creates a spin-singlet pair on sites with momentum $\pi$.
Let us now apply our RG results (derived in Chapter 4) for the case of the 1D Hubbard model (Fig. 6.5). Insofar as the charge sector is concerned there are two cases: at half-filling (for which the Umklapp operator is present and we expect a Mott (charge) gap) and away from half-filling (for which there is no Umklapp term and there is no charge gap). In the latter case the charge sector remains strictly marginal. However, even in this case, the spin sector still flows because there is always a potentially (marginally) relevant cosine operator.

We consider first the half-filled case. Since the Kosterlitz RG is perturbative, we will need to know only these relations in the weak-coupling regime of small $g_{\mathrm{s}}$ (or, which amounts to the same thing, small Hubbard $U$ ). Clearly the SG couplings,
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-186.jpg?height=433&width=1165&top_left_y=206&top_left_x=277)

Figure 6.5 Schematic RG flows for the (a) charge and (b) spin sectors of the 1D Hubbard model at half-filling. Here $g_{\mathrm{c}}$ and $g_{\mathrm{s}}$ are the effective sine-Gordon coupling constants in the charge and spin sectors, $x_{\mathrm{c}}=2-2 / K_{\mathrm{c}}$, and $x_{\mathrm{s}}=$ $2-2 / K_{\mathrm{s}}$. Attractive means $U<0$ and repulsive $U>0$. Away from half-filling, the charge sector remains marginal and does not flow, and the spin sector has the same flow as in (b).
$g_{\mathrm{c}}$ (which is non-vanishing at half-filling) and $g_{\mathrm{s}}$ (which is always non-zero), and the stiffnesses, $K_{\mathrm{c}}$ and $K_{\mathrm{s}}$, are related to each other. These relations set the allowed initial values of the RG flow and only those points in the ( $x_{\mathrm{c}}, g_{\mathrm{c}}$ ) and ( $x_{\mathrm{s}}, g_{\mathrm{s}}$ ) planes to which the RG flow has access are physically relevant (here we set $x_{\mathrm{c}}=2-2 / K_{\mathrm{c}}$ and $x_{\mathrm{s}}=2-2 / K_{\mathrm{s}}$, respectively). For small $g_{\mathrm{c}}$ and $g_{\mathrm{s}}$ the Luttinger parameters become $K_{\mathrm{c}}=1+\pi g_{\mathrm{c}}+O\left(g_{\mathrm{c}}^{2}\right), K_{\mathrm{s}}=1-\pi g_{\mathrm{s}}+O\left(g_{\mathrm{s}}^{2}\right), x_{\mathrm{c}}=2 \pi g_{\mathrm{c}}+O\left(g_{\mathrm{c}}^{2}\right)$, and $x_{\mathrm{s}}=-2 \pi g_{\mathrm{s}}+O\left(g_{\mathrm{s}}^{2}\right)$. Thus, we find that the initial values of the RG flows must be such that $x= \pm 2 \pi g$ (see Eq. (4.88) and Figs. 4.3 and 6.5 ), which are just the asymptotes of the Kosterlitz RG flows.

Thus, as expected, the charge and spin flows are not identical but are symmetric. For repulsive interactions, $U>0$, the charge flow is on the unstable trajectory on one of the asymptotes, and the spin RG flow is on the stable trajectory, on the opposite asymptote. For attractive interactions, $U<0$, the two sectors switch roles. It is straightforward to see that along the asymptotes the RG flows are given by the beta functions

$$
\begin{equation*}
a \frac{d g_{\mathrm{c}}}{d a}=2 \pi g_{\mathrm{c}}^{2}, \quad a \frac{d g_{\mathrm{s}}}{d a}=-2 \pi g_{\mathrm{s}}^{2} \tag{6.109}
\end{equation*}
$$

Thus, for $U>0$, the RG flow of the charge sector is marginally relevant while the RG flow spin sector is marginally irrelevant, and conversely for $U<0$. In the next chapter we will examine the predictions of asymptotically free beta functions, Eqs. (6.109), and find that in the marginally relevant case there is a gap in the spectrum scaling as

$$
\begin{equation*}
M=\text { constant } \times \exp \left(-\frac{1}{2 \pi g}\right) \tag{6.110}
\end{equation*}
$$

In the opposite case, for a marginally irrelevant operator, the system flows to $g \rightarrow 0$ but very slowly, with logarithmic corrections to scaling. Thus, for a half-filled repulsive Hubbard model, the charge sector is gapped while the spin sector is gapless, and conversely for attractive interactions.

On the other hand, away from half-filling there is no Umklapp operator and the charge sector remains gapless and marginal, and there is no Mott gap. The spin sector is also gapless for repulsive interactions. In this regime the system is a Luttinger liquid. In contrast, for attractive interactions there is a spin gap while the charge sector is gapless. This regime is known as the Luther-Emery liquid.

We close this section by discussing briefly the consequences of breaking the accidental symmetry of the Hubbard model explicitly. We noticed earlier that the hidden $\mathrm{SU}(2)$ symmetry of the charge sector of the Hubbard model is a consequence of the special form of the interaction. Indeed, the addition of a simple interaction $V$ between nearest-neighboring charge densities (i.e. a "Coulomb" interaction) causes this accidental symmetry to become broken explicitly. In this case only the $\mathrm{U}(1)$ charge symmetry remains, in addition to the $\mathrm{SU}(2)$ symmetry of the spin sector. This slightly modified system is known as the extended Hubbard model. In this case the RG flows of the charge sector become the generic Kosterlitz flows and no longer lie precisely on the unstable asymptote. However, unless the coupling $g_{1}$ becomes large enough, the RG flows of the charge sector still approach the unstable asymptote, and the charge sector remains gapped. On the other hand, if the global (but not accidental) $\mathrm{SU}(2)$ symmetry of spin were to be explicitly broken down to a $\mathbb{Z}_{2}$ (easy-axis, Ising symmetry) by a magnetic anisotropy of the material the RG flows of the spin sector would no longer be on the stable asymptote and would, in fact, converge to the stable asymptote, leading to a system with a finite spin gap. Conversely, for an easy-plane ( $X Y$ ) symmetry, the RG flows in the spin sector converge on the line of fixed points and there is no spin gap.

### 6.7 Correlation functions of the Luttinger model

We will now compute the correlation functions of the Luttinger model. We will first consider the spinless case.

### 6.7.1 The spinless case

The bosonized Luttinger Hamiltonian density for spinless fermions is

$$
\begin{equation*}
\mathcal{H}=\left(\pi v_{\mathrm{F}}+g_{4}\right)\left(\rho_{\mathrm{L}}^{2}+\rho_{\mathrm{R}}^{2}\right)+2 g_{2} \rho_{\mathrm{R}} \rho_{\mathrm{L}} \tag{6.111}
\end{equation*}
$$

We will diagonalize this Hamiltonian by means of a Bogoliubov transformation (which is canonical):

$$
\begin{equation*}
\rho_{\mathrm{R}}=\cosh \lambda \tilde{\rho}_{\mathrm{R}}+\sinh \lambda \tilde{\rho}_{\mathrm{L}} \tag{6.112}
\end{equation*}
$$

$$
\begin{equation*}
\rho_{\mathrm{L}}=\sinh \lambda \tilde{\rho}_{\mathrm{R}}+\cosh \lambda \tilde{\rho}_{\mathrm{L}} \tag{6.113}
\end{equation*}
$$

where

$$
\begin{equation*}
\tilde{\rho}_{\mathrm{R}}=\frac{1}{\sqrt{\pi}} \partial_{x} \tilde{\phi}_{\mathrm{R}}, \quad \tilde{\rho}_{\mathrm{L}}=\frac{1}{\sqrt{\pi}} \partial_{x} \tilde{\phi}_{\mathrm{L}} \tag{6.114}
\end{equation*}
$$

With the choice

$$
\begin{equation*}
\tanh (2 \lambda)=-\frac{g_{2}}{\pi v_{\mathrm{F}}+g_{4}} \tag{6.115}
\end{equation*}
$$

the Hamiltonian becomes

$$
\begin{equation*}
\mathcal{H}=\pi v\left(\tilde{\rho}_{\mathrm{R}}^{2}+\tilde{\rho}_{\mathrm{L}}^{2}\right)=\frac{v}{2}\left(\left(\partial_{x} \tilde{\vartheta}\right)^{2}+\left(\partial_{x} \tilde{\phi}\right)^{2}\right) \tag{6.116}
\end{equation*}
$$

where, as before,

$$
\begin{equation*}
\pi v=\sqrt{\left(\pi v_{\mathrm{F}}+g_{4}\right)^{2}-g_{2}^{2}} \tag{6.117}
\end{equation*}
$$

and

$$
\begin{equation*}
\cosh \lambda=\frac{K+1}{2 \sqrt{K}}, \quad \sinh \lambda=\frac{K-1}{2 \sqrt{K}} \tag{6.118}
\end{equation*}
$$

and

$$
\begin{equation*}
K=\sqrt{\frac{\pi v_{\mathrm{F}}+g_{4}+g_{2}}{\pi v_{\mathrm{F}}+g_{4}-g_{2}}} \tag{6.119}
\end{equation*}
$$

The propagator of the field $\tilde{\phi}=\tilde{\phi}_{\mathrm{R}}+\tilde{\phi}_{\mathrm{L}}$, using a regularization in which it vanishes as $x^{\prime} \rightarrow x$ and $t^{\prime} \rightarrow t$, is given by

$$
\begin{equation*}
\left\langle T\left(\tilde{\phi}(x, t) \tilde{\phi}\left(x^{\prime}, t^{\prime}\right)\right)\right\rangle=-\frac{1}{4 \pi} \ln \left(\frac{\left(x-x^{\prime}\right)^{2}-v^{2}\left(t-t^{\prime}\right)^{2}+a_{0}^{2}+i \epsilon}{a_{0}^{2}}\right) \tag{6.120}
\end{equation*}
$$

from which we get

$$
\begin{align*}
\left\langle T\left(\tilde{\phi}_{\mathrm{R}}(x, t) \tilde{\phi}_{\mathrm{R}}\left(x^{\prime}, t^{\prime}\right)\right)\right\rangle & =-\frac{1}{4 \pi} \ln \left(\frac{\left(x-x^{\prime}\right)-v\left(t-t^{\prime}\right)+i \epsilon}{a_{0}}\right) \\
\left\langle T\left(\tilde{\phi}_{\mathrm{L}}(x, t) \tilde{\phi}_{\mathrm{L}}\left(x^{\prime}, t^{\prime}\right)\right)\right\rangle & =-\frac{1}{4 \pi} \ln \left(\frac{\left(x-x^{\prime}\right)+v\left(t-t^{\prime}\right)+i \epsilon}{a_{0}}\right) \tag{6.121}
\end{align*}
$$

Using these expressions, we get

$$
\begin{align*}
& \left\langle T\left(\phi_{\mathrm{R}}(x, t) \phi_{\mathrm{R}}\left(x^{\prime}, t^{\prime}\right)\right)\right\rangle=\alpha\left\langle T\left(\tilde{\phi}_{\mathrm{R}}(x, t) \tilde{\phi}_{\mathrm{R}}\left(x^{\prime}, t^{\prime}\right)\right\rangle+\beta\left\langle T\left(\tilde{\phi}_{\mathrm{L}}(x, t) \tilde{\phi}_{\mathrm{L}}\left(x^{\prime}, t^{\prime}\right)\right\rangle\right.\right. \\
& \left\langle T\left(\phi_{\mathrm{L}}(x, t) \phi_{\mathrm{L}}\left(x^{\prime}, t^{\prime}\right)\right)\right\rangle=\beta\left\langle T\left(\tilde{\phi}_{\mathrm{R}}(x, t) \tilde{\phi}_{\mathrm{R}}\left(x^{\prime}, t^{\prime}\right)\right\rangle+\alpha\left\langle T\left(\tilde{\phi}_{\mathrm{L}}(x, t) \tilde{\phi}_{\mathrm{L}}\left(x^{\prime}, t^{\prime}\right)\right\rangle\right.\right. \tag{6.122}
\end{align*}
$$

with

$$
\begin{equation*}
\alpha=\frac{(K+1)^{2}}{4 K}, \quad \beta=\frac{(K-1)^{2}}{4 K} \tag{6.123}
\end{equation*}
$$

## The fermion propagator

The propagator for right-moving fermions is

$$
\begin{align*}
\left\langle T\left(\psi_{\mathrm{R}}(x, t) \psi_{\mathrm{R}}^{\dagger}\left(x^{\prime}, t^{\prime}\right)\right)\right\rangle \sim & \frac{1}{2 \pi a_{0}}\left\langle T\left(e^{i 2 \sqrt{\pi} \phi_{\mathrm{R}}(x, t)} e^{-i 2 \sqrt{\pi} \phi_{\mathrm{R}}\left(x^{\prime}, t^{\prime}\right)}\right)\right\rangle \\
= & \frac{1}{2 \pi a_{0}} e^{2 \pi\left\langle T\left(\phi_{\mathrm{R}}(x, t) \phi_{\mathrm{R}}\left(x^{\prime}, t^{\prime}\right)\right)\right\rangle} \\
= & \frac{1}{2 \pi a_{0}}\left(\frac{a_{0}}{\left(x-x^{\prime}\right)-v\left(t-t^{\prime}\right)+i \epsilon}\right)^{(K+1)^{2} /(4 K)} \\
& \times\left(\frac{a_{0}}{\left(x-x^{\prime}\right)+v\left(t-t^{\prime}\right)+i \epsilon}\right)^{(K-1)^{2} /(4 K)} \tag{6.124}
\end{align*}
$$

and that for left-moving fermions is

$$
\begin{align*}
\left\langle T\left(\psi_{\mathrm{L}}(x, t) \psi_{\mathrm{L}}^{\dagger}\left(x^{\prime}, t^{\prime}\right)\right)\right\rangle \sim & \frac{1}{2 \pi a_{0}}\left\langle T\left(e^{-i 2 \sqrt{\pi} \phi_{\mathrm{L}}(x, t)} e^{i 2 \sqrt{\pi} \phi_{\mathrm{L}}\left(x^{\prime}, t^{\prime}\right)}\right)\right\rangle \\
= & \frac{1}{2 \pi a_{0}} e^{4 \pi\left\langle T\left(\phi_{\mathrm{L}}(x, t)-\phi_{\mathrm{L}}\left(x^{\prime}, t^{\prime}\right)\right)\right\rangle} \\
= & \frac{1}{2 \pi a_{0}}\left(\frac{a_{0}}{\left(x-x^{\prime}\right)+v\left(t-t^{\prime}\right)+i \epsilon}\right)^{(K+1)^{2} /(4 K)} \\
& \times\left(\frac{a_{0}}{\left(x-x^{\prime}\right)-v\left(t-t^{\prime}\right)+i \epsilon}\right)^{(K-1)^{2} /(4 K)} \tag{6.125}
\end{align*}
$$

In the free-fermion case, $K=1$, for right-moving fermions this propagator just becomes

$$
\begin{equation*}
\left\langle T\left(\psi_{\mathrm{R}}(x, t) \psi_{\mathrm{R}}^{\dagger}\left(x^{\prime}, t^{\prime}\right)\right)\right\rangle=\frac{1}{2 \pi a_{0}} \frac{a_{0}}{\left(x-x^{\prime}\right)-v\left(t-t^{\prime}\right)+i \epsilon} \tag{6.126}
\end{equation*}
$$

(and a similar expression applies for left-moving fermions). We see that while in the free-fermion case the propagator has a simple pole, and hence a finite fermion residue $Z=1$, as soon as the interactions are turned on the pole disappears and is replaced by a branch cut.

We also see that the fermion propagators given by Eqs. (6.124) and (6.125) factorize into right- and left-moving contributions. This happens since the interactions mix the right- and left-moving sectors, which leads to the electron operator acquiring an anomalous dimension. From Eqs. (6.124) and (6.125) we see that the scaling dimension of both right- and left-moving fermions now is

$$
\begin{equation*}
\Delta_{\text {fermion }}=\frac{1}{4}\left(K+\frac{1}{K}\right) \tag{6.127}
\end{equation*}
$$

and it no longer scales as a free fermion. Notice that these fermion propagators still describe fermions since they change sign under a permutation (understood as a rotation by $\pi$ in complex coordinates), i.e. the "spin" $s$ is

$$
\begin{equation*}
s=\frac{(K+1)^{2}}{8 K}-\frac{(K-1)^{2}}{8 K}=\frac{1}{2} \tag{6.128}
\end{equation*}
$$

However, this also has the interpretation that the fermion factorizes (or fractionalizes) into a right-moving soliton, with scaling dimension $\Delta_{\mathrm{R}}$ and "conformal spin" $s_{\mathrm{R}}($ Di Francesco et al., 1997),

$$
\begin{equation*}
\left(\Delta_{\mathrm{R}}, s_{\mathrm{R}}\right)=\left(\frac{(K+1)^{2}}{2 K}, \frac{(K+1)^{2}}{2 K}\right) \tag{6.129}
\end{equation*}
$$

and a left-moving soliton with scaling dimension and spin

$$
\begin{equation*}
\left(\Delta_{\mathrm{L}}, s_{\mathrm{L}}\right)=\left(\frac{(K-1)^{2}}{2 K}, \frac{(K-1)^{2}}{2 K}\right) \tag{6.130}
\end{equation*}
$$

and vice versa for right-moving fermions. In this regime there are no states in the spectrum with the quantum numbers of the electron, and instead the spectrum is described by gapless solitons. Since the quasiparticle residue $Z$ measures the overlap between an asymptotic state with the quantum numbers of a free electron and the actual eigenstates of the interacting system, the vanishing of the quasiparticle residue means that the exact eigenstates are orthogonal to the asymptotic ("incoming") electron. This feature has been dubbed (by P. W. Anderson) the "orthogonality catastrophe."

## Correlators of order parameters

The order parameters also exhibit anomalous dimensions, which can be read off directly from their correlation functions. The correlator of the CDW order parameter is found to be

$$
\begin{equation*}
\frac{1}{\left(2 \pi a_{0}\right)^{2}}\left\langle T\left(e^{i 2 \sqrt{\pi} \phi(x)} e^{-i 2 \sqrt{\pi} \phi(x)}\right)\right\rangle \sim \frac{1}{\left(2 \pi a_{0}\right)^{2}}\left(\frac{a_{0}^{2}}{\left(x-x^{\prime}\right)^{2}-v^{2}\left(t-t^{\prime}\right)^{2}+i \epsilon}\right)^{1 / K} \tag{6.131}
\end{equation*}
$$

Hence the scaling dimension of the CDW order parameter is $\Delta_{\mathrm{CDW}}=1 / K$ and only takes the naive dimension 1 for free fermions $(K=1)$. The correlator for the superconducting order parameter is, instead,

$$
\begin{equation*}
\frac{1}{\left(2 \pi a_{0}\right)^{2}}\left\langle T\left(e^{i 2 \sqrt{\pi} \vartheta(x)} e^{-i 2 \sqrt{\pi} \vartheta(x)}\right)\right\rangle \sim \frac{1}{\left(2 \pi a_{0}\right)^{2}}\left(\frac{a_{0}^{2}}{\left(x-x^{\prime}\right)^{2}-v^{2}\left(t-t^{\prime}\right)^{2}+i \epsilon}\right)^{K} \tag{6.132}
\end{equation*}
$$

Hence, the scaling dimension of the superconducting order parameter is $\Delta_{\mathrm{SC}}=K$. This order parameter only has its naive scaling dimension, 1 , for free fermions.

### 6.7.2 The spin- $1 / 2$ case

The behavior of the correlation functions for the case of spin- $1 / 2$ fermions can be computed similarly. Since the Hamiltonian of the Luttinger model decomposes into a sum of terms for the charge and spin sectors, respectively, we will find that the correlation functions factorize into a contribution from the charge sector and a contribution from the spin sector. We will not examine all possible cases, just the most interesting ones.

Since $\mathcal{H}=\mathcal{H}_{\mathrm{c}}+\mathcal{H}_{s}$, the propagators factorize. In other terms, the system behaves as if the electrons have fractionalized into two independent excitations: (a) a spinless holon with charge $-e$ and (b) a spin- $1 / 2$ charge-neutral spinon. This feature is known as spin-charge separation. It is a robust feature of these 1D systems in the low-energy limit.

We will follow the same approach as in the spinless case, although we will implement it less explicitly. Here too we define the densities of right- and left-moving fermions with either spin polarization,

$$
\begin{equation*}
\rho_{\mathrm{R}, \sigma}=\frac{1}{\sqrt{\pi}} \partial_{x} \phi_{\mathrm{R}, \sigma}, \quad \rho_{\mathrm{L}, \sigma}=\frac{1}{\sqrt{\pi}} \partial_{x} \phi_{\mathrm{L}, \sigma} \tag{6.133}
\end{equation*}
$$

and write the Luttinger Hamiltonian in terms of these densities. It reduces to

$$
\begin{equation*}
\mathcal{H}=\mathcal{H}_{\mathrm{c}}+\mathcal{H}_{\mathrm{s}} \tag{6.134}
\end{equation*}
$$

where

$$
\begin{align*}
\mathcal{H}_{\mathrm{c}} & =\frac{1}{2}\left(\pi v_{\mathrm{F}}+g_{4}\right)\left(\rho_{\mathrm{c}, \mathrm{R}}^{2}+\rho_{\mathrm{c}, \mathrm{~L}}^{2}\right)+\frac{1}{2}\left(2 g_{2}-g_{1, \|}\right) \rho_{\mathrm{c}, \mathrm{R}} \rho_{\mathrm{c}, \mathrm{~L}}  \tag{6.135}\\
\mathcal{H}_{\mathrm{s}} & =\frac{1}{2}\left(\pi v_{\mathrm{F}}-g_{4}\right)\left(\rho_{\mathrm{s}, \mathrm{R}}^{2}+\rho_{\mathrm{s}, \mathrm{~L}}^{2}\right)-\frac{1}{2} g_{1, \|} \rho_{\mathrm{s}, \mathrm{R}} \rho_{\mathrm{s}, \mathrm{~L}} \tag{6.136}
\end{align*}
$$

We now perform Bogoliubov transformations (separately) for charge and spin, whose parameters $\lambda_{\mathrm{c}}$ and $\lambda_{\mathrm{s}}$ are

$$
\begin{align*}
& \tanh \left(2 \lambda_{\mathrm{c}}\right)=-\frac{2 g_{2}-g_{1, \|}}{\pi v_{\mathrm{F}}+g_{4}}  \tag{6.137}\\
& \tanh \left(2 \lambda_{\mathrm{s}}\right)=+\frac{g_{1, \|}}{\pi v_{\mathrm{F}}-g_{4}} \tag{6.138}
\end{align*}
$$

The Luttinger parameters $K_{\mathrm{c}}$ and $K_{\mathrm{s}}$ are

$$
\begin{equation*}
K_{\mathrm{c}}=e^{2 \lambda_{\mathrm{c}}}=\sqrt{\frac{\pi v_{\mathrm{F}}-g_{4}+2 g_{2}-g_{1, \|}}{\pi v_{\mathrm{F}}+g_{4}-2 g_{2}+g_{1, \|}}} \tag{6.139}
\end{equation*}
$$

$$
\begin{equation*}
K_{\mathrm{s}}=e^{2 \lambda_{\mathrm{s}}}=\sqrt{\frac{\pi v_{\mathrm{F}}-g_{4}-g_{1, \|}}{\pi v_{\mathrm{F}}-g_{4}-g_{1, \|}}} \tag{6.140}
\end{equation*}
$$

and

$$
\begin{align*}
& \pi v_{\mathrm{c}}=\sqrt{\left(\pi v_{\mathrm{F}}+g_{4}\right)^{2}-\left(2 g_{2}-g_{1, \|}\right)^{2}}  \tag{6.141}\\
& \pi v_{\mathrm{s}}=\sqrt{\left(\pi v_{\mathrm{F}}-g_{4}\right)^{2}-g_{-1, \|}^{2}} \tag{6.142}
\end{align*}
$$

The transformed densities and bosons are denoted by

$$
\begin{array}{ll}
\tilde{\rho}_{\mathrm{c}, \mathrm{R}}=\frac{1}{\sqrt{\pi}} \partial_{x} \tilde{\phi}_{\mathrm{c}, \mathrm{R}}, & \tilde{\rho}_{\mathrm{c}, \mathrm{~L}}=\frac{1}{\sqrt{\pi}} \partial_{x} \tilde{\phi}_{\mathrm{c}, \mathrm{~L}} \\
\tilde{\rho}_{\mathrm{s}, \mathrm{R}}=\frac{1}{\sqrt{\pi}} \partial_{x} \tilde{\phi}_{\mathrm{s}, \mathrm{R}}, & \tilde{\rho}_{\mathrm{s}, \mathrm{~L}}=\frac{1}{\sqrt{\pi}} \partial_{x} \tilde{\phi}_{\mathrm{s}, \mathrm{~L}} \tag{6.144}
\end{array}
$$

## The fermion propagator

The operators for right- and left-moving fermions with spin $\sigma$ now take the form

$$
\begin{align*}
& \psi_{\mathrm{R}, \sigma} \sim \frac{1}{\sqrt{2 \pi a_{0}}} e^{i \sqrt{2 \pi} \phi_{\mathrm{R}, \mathrm{c}}} e^{i \sigma \sqrt{2 \pi} \phi_{\mathrm{R}, \mathrm{~s}}}  \tag{6.145}\\
& \psi_{\mathrm{L}, \sigma} \sim \frac{1}{\sqrt{2 \pi a_{0}}} e^{-i \sqrt{2 \pi} \phi_{\mathrm{L}, \mathrm{c}}} e^{-i \sigma \sqrt{2 \pi} \phi_{\mathrm{L}, \mathrm{~s}}} \tag{6.146}
\end{align*}
$$

After some algebra we find

$$
\begin{align*}
\left\langle T \psi_{\mathrm{R}, \uparrow}(x, t) \psi_{\mathrm{R}, \uparrow}^{\dagger}(0,0)\right\rangle= & \left\langle T \psi_{\mathrm{R}, \downarrow}(x, t) \psi_{\mathrm{R}, \downarrow}^{\dagger}(0,0)\right\rangle \\
= & \frac{a_{0}^{\gamma_{\mathrm{c}}+\gamma_{\mathrm{s}}}}{2 \pi}\left(a_{0}+i\left(v_{\mathrm{c}} t-x\right)\right)^{-1 / 2}\left(a_{0}+i\left(v_{\mathrm{s}} t-x\right)\right)^{-1 / 2} \\
& \times\left(x^{2}+\left(a_{0}+i v_{\mathrm{c}} t\right)^{2}\right)^{-\gamma_{\mathrm{c}} / 2} \\
& \times\left(x^{2}+\left(a_{0}+i v_{\mathrm{s}} t\right)^{2}\right)^{-\gamma_{\mathrm{s}} / 2} \tag{6.147}
\end{align*}
$$

and

$$
\begin{align*}
\left\langle T \psi_{\mathrm{L}, \uparrow}(x, t) \psi_{\mathrm{L}, \uparrow}^{\dagger}(0,0)\right\rangle= & \left\langle T \psi_{\mathrm{L}, \downarrow}(x, t) \psi_{\mathrm{L}, \downarrow}^{\dagger}(0,0)\right\rangle \\
= & \frac{a_{0}^{\gamma_{\mathrm{c}}+\gamma_{\mathrm{s}}}}{2 \pi}\left(a_{0}+i\left(v_{\mathrm{c}} t+x\right)\right)^{-1 / 2}\left(a_{0}+i\left(v_{\mathrm{s}} t+x\right)\right)^{-1 / 2} \\
& \times\left(x^{2}+\left(a_{0}+i v_{\mathrm{c}} t\right)^{2}\right)^{-\gamma_{\mathrm{c}} / 2} \\
& \times\left(x^{2}+\left(a_{0}+i v_{\mathrm{s}} t\right)^{2}\right)^{-\gamma_{\mathrm{s}} / 2} \tag{6.148}
\end{align*}
$$

where

$$
\begin{equation*}
\gamma_{\mathrm{c}, \mathrm{~s}}=\frac{1}{4}\left(K_{\mathrm{c}, \mathrm{~s}}+\frac{1}{K_{\mathrm{c}, \mathrm{~s}}}\right)-\frac{1}{2} \tag{6.149}
\end{equation*}
$$

Just as in the spinless case, we see that the electron becomes fractionalized and acquires an anomalous dimension, which we can read off immediately as

$$
\begin{equation*}
\Delta_{\text {fermion }}=\frac{1}{8}\left(K_{\mathrm{c}}+\frac{1}{K_{\mathrm{c}}}\right)+\frac{1}{4} \tag{6.150}
\end{equation*}
$$

where we have set the spin Luttinger parameter $K_{\mathrm{s}}=1$ for the $\mathrm{SU}(2)$-invariant system. We have also neglected the logarithmic correction to scaling arising from the spin sector as $K_{\mathrm{s}}$ flows to 1 .

## Correlators of the order parameters

It is now straightforward to find the correlators of the order parameters. The CDW correlator is

$$
\begin{align*}
\langle T & \left.\mathcal{O}_{\mathrm{CDW}}(x, t) \mathcal{O}_{\mathrm{CDW}}^{\dagger}(0,0)\right\rangle \\
= & \frac{1}{\left(\pi a_{0}\right)^{2}}\left\langle T \cos \left(\sqrt{2 \pi} \phi_{\mathrm{s}}(x, t)\right) \cos \left(\sqrt{2 \pi} \phi_{\mathrm{s}}(0,0)\right)\right\rangle \\
& \times\left\langle T e^{-i \sqrt{2 \pi} \phi_{\mathrm{c}}(x, t)} e^{i \sqrt{2 \pi} \phi_{\mathrm{c}}(0,0)}\right\rangle \\
= & \frac{2}{\left(\pi a_{0}\right)^{2}}\left(\frac{a_{0}^{2}}{x^{2}-v_{\mathrm{c}}^{2} t^{2}+a_{0}^{2}+i \epsilon}\right)^{1 /\left(2 K_{\mathrm{c}}\right)}\left(\frac{a_{0}^{2}}{x^{2}-v_{\mathrm{s}}^{2} t^{2}+a_{0}^{2}+i \epsilon}\right)^{1 /\left(2 K_{\mathrm{s}}\right)} \tag{6.151}
\end{align*}
$$

The scaling dimension of the CDW order parameter is

$$
\begin{equation*}
\Delta_{\mathrm{CDW}}=\frac{1}{2}\left(\frac{1}{K_{\mathrm{c}}}+1\right) \tag{6.152}
\end{equation*}
$$

where we set $K_{\mathrm{s}}=1$ for $\mathrm{SU}(2)$-invariance (and also neglected the logarithmic correction).

The (transverse) SDW correlator is

$$
\begin{align*}
& \left\langle T \mathcal{O}_{\mathrm{SDW}}^{( \pm)}(x, t) \mathcal{O}_{\mathrm{SDW}}^{\left.( \pm)^{\dagger}(0,0)\right\rangle}\right. \\
& \quad=\frac{1}{\left(2 \pi a_{0}\right)^{2}}\left\langle T e^{ \pm i \sqrt{2 \pi} \vartheta_{\mathrm{s}}(x, t)} e^{\mp i \sqrt{2 \pi} \vartheta_{\mathrm{s}}(0,0)}\right\rangle\left\langle T e^{-i \sqrt{2 \pi} \phi_{\mathrm{c}}(x, t)} e^{i \sqrt{2 \pi} \phi_{\mathrm{c}}(0,0)}\right\rangle \\
& \quad=\frac{1}{\left(2 \pi a_{0}\right)^{2}}\left(\frac{a_{0}^{2}}{x^{2}-v_{\mathrm{c}}^{2} t^{2}+a_{0}^{2}+i \epsilon}\right)^{1 /\left(2 K_{\mathrm{c}}\right)}\left(\frac{a_{0}^{2}}{x^{2}-v_{\mathrm{s}}^{2} t^{2}+a_{0}^{2}+i \epsilon}\right)^{K_{\mathrm{s}} / 2} \tag{6.153}
\end{align*}
$$

which, for an $\mathrm{SU}(2)$-invariant system, has the same scaling dimension as the CDW order parameter, although the logarithmic correction to scaling is different.

The singlet superconductor correlator is

$$
\begin{align*}
& \left\langle T \mathcal{O}_{\mathrm{SS}}(x, t) \mathcal{O}_{\mathrm{SS}}^{\dagger}(0,0)\right\rangle \\
& \quad=\frac{1}{\left(2 \pi a_{0}\right)^{2}}\left\langle T e^{i \sqrt{2 \pi} \vartheta_{\mathrm{c}}(x, t)} e^{-i \sqrt{2 \pi} \vartheta_{\mathrm{c}}(0,0)}\right\rangle\left\langle T e^{-i \sqrt{2 \pi} \phi_{\mathrm{s}}(x, t)} e^{i \sqrt{2 \pi} \phi_{\mathrm{s}}(0,0)}\right\rangle \\
& \quad=\frac{2}{\left(\pi a_{0}\right)^{2}}\left(\frac{a_{0}^{2}}{x^{2}-v_{\mathrm{c}}^{2} t^{2}+a_{0}^{2}+i \epsilon}\right)^{K_{\mathrm{c}} / 2}\left(\frac{a_{0}^{2}}{x^{2}-v_{\mathrm{S}}^{2} t^{2}+a_{0}^{2}+i \epsilon}\right)^{1 /\left(2 K_{\mathrm{s}}\right)} \tag{6.154}
\end{align*}
$$

with scaling dimension

$$
\begin{equation*}
\Delta_{\mathrm{SC}}=\frac{1}{2}\left(K_{\mathrm{c}}+1\right) \tag{6.155}
\end{equation*}
$$

### 6.8 Susceptibilities of the Luttinger model

### 6.8.1 The fermion spectral function

The fermion (electron) spectral function $\mathcal{A}_{s, \sigma}(p, \omega)$ (where $s=\mathrm{R}, \mathrm{L}$ and $\sigma=\uparrow, \downarrow$ ) is defined by

$$
\begin{align*}
\mathcal{A}_{\mathrm{s}, \sigma}(p, \omega) & \equiv-\frac{1}{\pi} \operatorname{Im} G_{s, \sigma}^{\mathrm{ret}}(p, \omega) \\
& =\frac{1}{2 \pi} \int_{-\infty}^{\infty} d x \int_{-\infty}^{\infty} d t e^{-i(p x-\omega t)}(G(x, t)+G(-x,-t)) \tag{6.156}
\end{align*}
$$

where

$$
\begin{equation*}
G_{s, \sigma}^{\mathrm{ret}}(x, t)=-i \theta(t)\left\langle\left\{\psi_{s, \sigma}(x, t), \psi_{s, \sigma}(0,0)\right\}\right\rangle \tag{6.157}
\end{equation*}
$$

is the fermion retarded Green function, $G(x, t)=G_{\mathrm{R}, \uparrow}(x, t)$ (since the system is invariant under parity and spin-reversal) is the time-ordered propagator we derived before, and $p$ is measured from the Fermi point at $p_{\mathrm{F}}$. The detailed form of the spectral function for the general case is complicated. Explicit expressions are given in Chapter 19 of the book by Gogolin, Nersesyan, and Tsvelik (Gogolin et al., 1998), where they use the notation $\rho_{s, \sigma}(p, \omega)$ for the spectral function. Here we will just quote the main results and analyze its consequences.

For a free-fermion system the Luttinger parameters $K_{\mathrm{c}}=K_{\mathrm{s}}=1$ and hence $\gamma_{\mathrm{c}}=\gamma_{\mathrm{s}}=0$. Similarly, the charge and spin velocities are equal in that case, $v_{\mathrm{c}}=v_{\mathrm{s}}=v_{\mathrm{F}}$. Hence, in the free-fermion case, we see that the spectral function $\mathcal{A}_{s, \sigma}(p, \omega)$ reduces to the sum of two poles (resulting from the poles in the propagator), for right- and left-moving fermions, respectively, each with a quasiparticle residue $Z=1$.

The situation changes dramatically for the interacting case no matter how weak the interactions are. For simplicity we will discuss only the case in which the system has a full $\operatorname{SU}(2)$ spin invariance, in which case $K_{\mathrm{s}}=1$ and $\gamma_{\mathrm{s}}=0$. We see that, instead of poles, the fermion propagator has branch cuts, whose tips are located at $\omega= \pm p v_{\mathrm{c}, \mathrm{s}}$ ( $\pm$ here stands for right- and left-moving fermions). An analysis of the integral shows that close to these singularities the spectral function has the behavior

$$
\begin{align*}
\mathcal{A}\left(p, \omega \simeq p v_{\mathrm{c}}\right) & \sim \theta\left(\omega-p v_{\mathrm{c}}\right)\left(\omega-p v_{\mathrm{c}}\right)^{\left(\gamma_{\mathrm{c}}-1\right) / 2}  \tag{6.158}\\
\mathcal{A}\left(p, \omega \simeq-p v_{\mathrm{c}}\right) & \sim \theta\left(-\omega-p v_{\mathrm{c}}\right)\left(-\omega-p v_{\mathrm{c}}\right)^{\gamma_{\mathrm{c}}}  \tag{6.159}\\
\mathcal{A}\left(p, \omega \simeq p v_{\mathrm{s}}\right) & \sim \theta\left(\omega-p v_{\mathrm{s}}\right)\left(\omega-p v_{\mathrm{s}}\right)^{\gamma_{\mathrm{c}}-1 / 2} \tag{6.160}
\end{align*}
$$

where $p$ is the momentum of the incoming fermion measured from $p_{\mathrm{F}}$. For the $\mathrm{SU}(2)$-symmetric case, $\gamma_{\mathrm{s}}=0$ and there is no singularity at $\omega \sim-p v_{\mathrm{s}}$.

Thus, the free-fermion poles are replaced in the interaction system by powerlaw singularities. These results show clearly the spin-charge separation: an injected electron has decomposed into (soliton-like) excitations, namely holons and spinons, that disperse at characteristic (and different) speeds.

In angle-resolved photoemission spectroscopy (ARPES) high-energy photons impinge on the surface of a system. If the photons' energy is high enough (typically the photons are X-rays from synchrotron radiation of a particle accelerator), there is a finite amplitude for an electron to be ejected from the system (a photo-electron), leaving a hole behind. In an ARPES experiment the energy and momentum (including the direction) of the photo-electron are measured. It turns out that the intensity of the emitted photo-electrons is proportional to the spectral function of the hole left behind at a known momentum and energy. Although it is not technically possible to do an ARPES experiment in a literally 1D system, it is possible to do such experiments in quasi-1D systems, namely arrays of weakly coupled 1DEGs. Experiments of this type have been done in systems of this type, such as the blue bronzes, although their degree of quasi-one-dimensionality is not strong enough for one to see the effects we discuss here.

The data from ARPES experiments are usually presented in terms of cuts of the spectral function: (a) as energy-distribution curves (EDCs), in which case the spectral function at fixed momentum is plotted as a function of energy; and (b) as momentum-distribution curves (MDCs), in which case the spectral function at fixed energy is plotted as a function of momentum (see Figs. 6.6(a)-(d)). Even if an ARPES experiment could be done in a Luttinger liquid, it is important to include the effects of thermal fluctuations since all experiments are done at finite temperature. One important effect is that the singularities of the spectral functions will be rounded at finite temperature. For example, the singularity of the EDC near the charge right-moving branch for $p=0$ (near $p_{\mathrm{F}}$ ), which diverges as $\omega^{\left(\gamma_{\mathrm{c}}-1\right) / 2}$
as $\omega \rightarrow 0$ at $T=0$, saturates at finite temperature $T$ with a maximum $\sim T^{\left(\gamma_{\mathrm{c}}-1\right) / 2}$ (which will increase as $T$ is lowered). The same holds for the EDC at $\omega=0$ as a function of momentum $p$ (at $p_{\mathrm{F}}$ ), which will saturate at a value $\sim\left(T / v_{\mathrm{c}}\right)^{\left(\gamma_{\mathrm{c}}-1\right) / 2}$. A more detailed study of the spectral function at finite temperature $T$ (which must be done numerically) shows that the EDCs are much broader than the MDCs and look like what is shown in Fig. 6.6. Similar behaviors are seen in ARPES experiments in high-temperature superconductors.

### 6.8.2 The tunneling density of states

In a scanning tunneling microscopy (STM) experiment (Fig. 6.7), a (very sharp) metallic tip (typically made of a simple metal such as gold) is placed near a very flat (and clean) surface of an electronic system. There a finite voltage difference $V$ is applied between the tip and the system, and, depending on its sign, electrons will tunnel from the tip to the system or vice versa. An STM instrument is operated by scanning the system (i.e. by displacing the tip) while keeping the tip at a fixed
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-196.jpg?height=984&width=1158&top_left_y=1064&top_left_x=281)

Figure 6.6 ARPES spectra: (a) MDC in a Fermi liquid, (b) EDC in a Fermi liquid, (c) MDC in a Luttinger liquid, and (d) EDC in a Luttinger liquid.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-197.jpg?height=352&width=770&top_left_y=199&top_left_x=463)

Figure 6.7 A sketch of an STM setup.
distance from the surface and at a fixed voltage difference. If the tip is sharp enough the intensity of the measured tunneling current (of electrons), which reflects the local changes of the electronic structure, can be used to map the local environment with atomic precision.

We will now see that the local differential conductance measured in STM contains direct information on the local density of states. To see how this works, let us consider a simple model of the operation of the STM. Let $H_{\text {tip }}$ be the Hamiltonian which describes the electronic states in the tip. Let us denote by $\psi_{\text {tip }}(t)$ the fermionic operator that removes an electron from the tip in some one-particle state (which we will not need to know) close to the tip Fermi energy.

The tunneling process from the tip to the 1 DEG at a point $x=0$ is described by a term in the Hamiltonian of the form

$$
\begin{align*}
\mathcal{H}_{\text {tunnel }} & =\delta(x) \Gamma \sum_{\sigma} \psi_{\sigma}^{\dagger}(0) \psi_{\text {tip }}+\text { h.c. } \\
& \equiv \delta(x) \Gamma \sum_{\sigma}\left(\psi_{\mathrm{R}, \sigma}^{\dagger}(0)+\psi_{\mathrm{L}, \sigma}^{\dagger}(0)\right) \psi_{\text {tip }}+\text { h.c. } \tag{6.161}
\end{align*}
$$

To generate a tunneling current across the contact we need to couple the tip and the system to an infinitesimal external electromagnetic field. Let $A(t)$ be the (line integral of the) component of the electromagnetic time-dependent vector potential connecting the tip and the system at the point contact. By virtue of gauge invariance the electromagnetic coupling at the point contact amounts to modifying the tunneling Hamiltonian by changing the amplitude $\Gamma \rightarrow \Gamma \exp (i e A(t) / \hbar)$. The gauge-invariant tunneling-current operator $J$ at the point contact is given by

$$
\begin{equation*}
J=\left.\hbar \frac{\delta \mathcal{H}_{\text {tunnel }}}{\delta A(t)}\right|_{A(t)=0}=i e \Gamma \sum_{\sigma}\left[\left(\psi_{\mathrm{R}, \sigma}^{\dagger}(0)+\psi_{\mathrm{L}, \sigma}^{\dagger}(0)\right) \psi_{\text {tip }}-\text { h.c. }\right] \tag{6.162}
\end{equation*}
$$

We will assume that the energy of this state is higher than the Fermi energy in the Luttinger liquid by an amount equal to $e V$, where $V$ is the voltage difference. We will assume that this is a rather uninteresting metal well described by a Fermi
liquid with a density of one-particle states $\rho_{\text {tip }}(E)$ that is essentially constant for the range of voltages $V$ used. Hence we can make the approximation that the density of states of the tip is constant, $\rho_{\text {tip }}\left(E_{\mathrm{F}}+e V\right) \simeq \rho_{\text {tip }}\left(E_{\mathrm{F}}\right)$.

A fixed voltage $V$ is equivalent to a difference of the chemical potentials of $e V$ between the tip and the 1DEG. The same physics can be described by assigning to the tunneling matrix element $\Gamma$ the phase factor

$$
\begin{equation*}
\Gamma \rightarrow \Gamma e^{i \frac{e}{\hbar} V t} \tag{6.163}
\end{equation*}
$$

both in the tunneling Hamiltonian and in the definition of a tunneling current. We recognize that the phase factor plays the same role as the vector potential we invoked just above. This is equivalent to a time-dependent gauge transformation of one of the Fermi fields, say that of the tip. The simplest way to see that this is true is to write down the Lagrangian density involving the tip degrees of freedom,

$$
\begin{equation*}
\mathcal{L}_{\text {tip }}=\psi_{\text {tip }}^{\dagger}\left(i \hbar \partial_{t}-e V\right) \psi_{\text {tip }}-\mathcal{H}_{\text {tip }}-\mathcal{H}_{\text {tunnel }} \tag{6.164}
\end{equation*}
$$

and perform the time-dependent transformation

$$
\begin{equation*}
\psi_{\text {tip }} \rightarrow e^{i \frac{e}{\hbar} V t} \psi_{\text {tip }} \tag{6.165}
\end{equation*}
$$

The only terms in $\mathcal{L}_{\text {tip }}$ affected by this transformation are the first (which involves a time derivative) and the tunneling term, $\mathcal{H}_{\text {tunnel }}$. The change of the first term amounts to an extra term, which precisely cancels out the second term, which is where the voltage difference is specified. The change in the tunneling term is equivalent to the substitution given in Eq. (6.163). Notice that the tunneling-current operator, Eq. (6.162), is similarly affected by this transformation.

We now use perturbation theory in powers of the tunneling matrix element $\Gamma$ to find the expectation value of the current operator, which will be denoted by $I$. To the lowest possible order in $\Gamma, I$ is given by

$$
\begin{equation*}
I=2 \pi \frac{e}{\hbar}|\Gamma|^{2} \int_{-e V}^{0} d E \rho_{\mathrm{LL}}(E, T) \rho_{\mathrm{tip}}(E+e V, T) \tag{6.166}
\end{equation*}
$$

which follows from the well-known Fermi golden rule. The differential tunneling conductance $G(V, T)$ is found by differentiation:

$$
\begin{equation*}
G(V, T)=\frac{d I}{d V} \simeq \frac{2 \pi e}{\hbar}|\Gamma|^{2} \rho_{\mathrm{tip}}(0) \rho_{\mathrm{LL}}(E, T) \tag{6.167}
\end{equation*}
$$

Here $\rho_{\mathrm{LL}}(E, T)$ is the one-particle local density of states of the Luttinger liquid

$$
\begin{align*}
\rho_{\mathrm{LL}}(E, T) & =-\frac{1}{\pi} \operatorname{Im} G_{\mathrm{LL}}^{\mathrm{ret}}(x=0, \omega=E, T) \\
& =-\frac{4}{\pi} \operatorname{Im} G_{\mathrm{R}, \uparrow}^{\mathrm{ret}}(x=0, E, T)=4 \int_{-\infty}^{\infty} \frac{d p}{2 \pi} \mathcal{A}_{\mathrm{R}, \uparrow}(p, E, T) \tag{6.168}
\end{align*}
$$

where $\mathcal{A}_{\mathrm{R}, \uparrow}(p, E, T)$ is the spectral function defined above, and the factor of 4 arises since right and left movers (with both spin orientations) contribute equally at equal positions (denoted by $x=0$ ). Alternatively,

$$
\begin{equation*}
\rho_{\mathrm{LL}}(E, T)=-\frac{4}{\pi} \operatorname{Im} \int_{-\infty}^{\infty} d t e^{-i \frac{E}{\hbar} t} G_{\mathrm{R}, \uparrow}^{\mathrm{ret}}(x=0, t, T) \tag{6.169}
\end{equation*}
$$

At $T=0$, by computing this Fourier transform one finds that $\rho_{\mathrm{LL}}(E)$ has a powerlaw behavior,

$$
\begin{equation*}
\rho_{\mathrm{LL}}(E) \propto E^{2\left(\gamma_{\mathrm{c}}+\gamma_{\mathrm{s}}\right)} \tag{6.170}
\end{equation*}
$$

Hence, the differential tunneling conductance essentially measures the local density of states of the Luttinger liquid. Therefore, at $T=0$, the differential tunneling conductance behaves as

$$
\begin{equation*}
G_{\mathrm{LL}}(V) \propto V^{2\left(\gamma_{\mathrm{c}}+\gamma_{\mathrm{s}}\right)} \tag{6.171}
\end{equation*}
$$

whereas for $T>0$ one finds a saturation for $V \ll T$ :

$$
\begin{equation*}
G_{\mathrm{LL}}(V, T) \propto T^{2\left(\gamma_{\mathrm{c}}+\gamma_{\mathrm{s}}\right)} \tag{6.172}
\end{equation*}
$$

The crossover between the $T>0, V \rightarrow 0$ Ohmic behavior and the $T \rightarrow 0, V>0$ Luttinger behavior occurs for $e V \sim k_{\mathrm{B}} T$.

In contrast, for a free fermion (and for a Landau Fermi liquid)

$$
\begin{equation*}
G_{\mathrm{FL}}(V)=\mathrm{constant} \tag{6.173}
\end{equation*}
$$

since in this case $\gamma_{\mathrm{c}}=\gamma_{\mathrm{s}}=0$.
Therefore, for a system of free fermions we find that the point contact is Ohmic, $I \propto V$. For a Luttinger liquid there is instead a power-law suppression of the tunneling differential conductance for $T \ll V$ (see Fig. 6.8), and Ohmic behavior for $T \gg V$ (with a conductance that scales as a power of $T$ ). These behaviors reflect the fact that there are no stable electron-like quasiparticles in the Luttinger liquid: the electron states are orthogonal to the states in the spectrum of the Luttinger liquid, leading to a vanishing of the quasiparticle residue and to characteristic power-law behaviors in many quantities. This fact is known as the orthogonality catastrophe.

### 6.8.3 The fermion momentum distribution function

We will now discuss the fermion momentum distribution functions at zero temperature, $T=0$. Since we have right and left movers, with both spin orientations, in principle we have four such functions. However, the Luttinger liquid state is invariant under global spin flips, $\uparrow \leftrightarrow \downarrow$, and under parity, $R \leftrightarrow L$. Thus all four
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-200.jpg?height=547&width=773&top_left_y=190&top_left_x=466)

Figure 6.8 The differential tunneling conductance $G=d I / d V$ as a function of the bias voltage $V$, in a Fermi liquid (dashed line), and in a Luttinger liquid at $T=0$ (thick line) and at $T>0$ (thin line).
momentum distributions are equal to each other. Let us compute, say, $n_{\mathrm{R}, \uparrow}(p)$, which is given by the equal-time correlator

$$
\begin{align*}
n_{\mathrm{R}, \uparrow}(p)= & \lim _{t^{\prime} \rightarrow t+0^{+}}\left\langle\psi_{\mathrm{R}, \uparrow}^{\dagger}(p, t) \psi_{\mathrm{R}, \uparrow}\left(p, t^{\prime}\right)\right\rangle \\
= & \lim _{L \rightarrow \infty} \frac{1}{L} \int_{-L / 2}^{+L / 2} d x \int_{-L / 2}^{+L / 2} d x^{\prime} e^{-i p\left(x-x^{\prime}\right)} \\
& \times \lim _{t^{\prime} \rightarrow t+0^{+}}\left\langle T \psi_{\mathrm{R}, \uparrow}^{\dagger}(x, t) \psi_{\mathrm{R}, \uparrow}\left(x^{\prime}, t^{\prime}\right)\right\rangle \\
= & \int_{-\infty}^{\infty} \frac{d \omega}{2 \pi} \mathcal{A}_{\mathrm{R}, \uparrow}(p, \omega) \tag{6.174}
\end{align*}
$$

(here $T$ means time-ordering!).
A lengthy computation of the Fourier transforms leads to the result at $T=0$ (here $p$ is measured from $p_{\mathrm{F}}$ ):

$$
\begin{equation*}
n_{\mathrm{R}, \uparrow}(p) \sim \operatorname{constant}+A|p|^{2\left(\gamma_{\mathrm{c}}+\gamma_{\mathrm{s}}\right)} \operatorname{sign}(p) \tag{6.175}
\end{equation*}
$$

where $A$ is a positive non-universal constant. At finite temperature $T>0$ this singularity is rounded by thermal fluctuations, which dominate for momenta $|p| \lesssim$ $k_{\mathrm{B}} T / v_{\mathrm{c}}$, which lead to a smooth momentum dependence in this regime. This is why Luttinger behavior is difficult to detect in the momentum distribution function.

Thus, instead of a jump (or discontinuity) of $Z$ (the quasiparticle residue) at $p_{\mathrm{F}}$ (the Fermi-liquid result), in a Luttinger liquid there is no jump (since $Z=0$ !). Instead we find that the momentum distribution function has a weak singularity at $p_{\mathrm{F}}$ (Fig. 6.9). This is what replaces the "Fermi surface" in a Luttinger liquid. We will show below that this happens since the Luttinger liquid is a (quantum) critical system and the fermions have an anomalous dimension given by $2\left(\gamma_{c}+\gamma_{s}\right)$.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-201.jpg?height=433&width=687&top_left_y=204&top_left_x=502)

Figure 6.9 The fermion momentum distribution function in a Luttinger liquid.

### 6.8.4 Dynamical susceptibilities at finite temperature

Finally, we will discuss the behavior of dynamical susceptibilities at finite $T>0$. In the preceding sections we gave explicit expressions for the correlators (timeordered) of various physical quantities (order parameters and currents) at $T=0$ in real space and time. Here we will need the dynamical susceptibilities, which are the associated retarded (instead of time-ordered) correlators at finite $T>0$ in real momentum and frequency.

We saw earlier that we can determine all of these properties from the temperature correlators, i.e. in imaginary time $\tau$, restricted to the interval $0 \leq \tau<$ $1 / T$ (with $k_{\mathrm{B}}=1$ ). We accomplish this by first implementing the analytic continuation

$$
\begin{equation*}
v t \rightarrow-i v t \tag{6.176}
\end{equation*}
$$

which implies introducing the complex coordinates

$$
\begin{equation*}
x-v t \rightarrow z=x+i v t \text { and } x+v t \rightarrow \bar{z}=x-i v t \tag{6.177}
\end{equation*}
$$

Next we perform the conformal mapping from the complex plane labeled by the coordinates $z$ to the cylinder, labeled by the coordinates $w=x+i v \tau$ (see Fig. 6.10)

$$
\begin{equation*}
x+i v t \rightarrow e^{2 \pi \frac{T}{v}(x+i v \tau)} \tag{6.178}
\end{equation*}
$$

Thus, the long axis of this cylinder is space (labeled by $-\infty \leq x \leq \infty$ ), and the circumference is the imaginary time $\tau, 0 \leq \tau \leq 1 / T$. Under the conformal mapping the boson propagator (in imaginary time $t$ ) tuns out to transform as

$$
\begin{equation*}
\left\langle\phi(x, t) \phi\left(x^{\prime}, t^{\prime}\right)\right\rangle \rightarrow \frac{1}{2 \pi} \ln \left|\frac{\pi T}{\sinh \left(\pi(T / v)\left(w-w^{\prime}\right)\right)}\right| \tag{6.179}
\end{equation*}
$$

where $w=x+i v \tau$. This is discussed in more detail in Section 7.11.
The computation of the correlators of the observables we are interested in is the same as at $T=0$, except that the boson propagator changes as shown above.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-202.jpg?height=459&width=1039&top_left_y=222&top_left_x=347)

Figure 6.10 The conformal mapping $z=e^{2 \pi T w / v}$ which maps the complex plane $z=x+i v t$ to the cylinder $w=x+i v \tau$. Under this mapping the origin O on the plane maps onto $-\infty$ on the cylinder.

The form of the boson propagator on the cylinder insures that the correlators are translation-invariant and periodic (or anti-periodic for fermions). This result can also be derived by an explicit calculation of the propagator (without using conformal mappings).

Thus, to compute the temperature propagators we perform (a) the analytic continuation followed by (b) the conformal mapping. This leads to the following identification for the power-law factors in the correlators (to restore proper units we must set $\left.T / v \rightarrow k_{\mathrm{B}} T /(\hbar v)\right)$ :

$$
\begin{align*}
\left(\frac{1}{\left(x-x^{\prime}\right) \mp v\left(t-t^{\prime}\right)+i \epsilon}\right)^{\gamma} & \rightarrow\left(\frac{1}{\left(x-x^{\prime}\right) \pm i v\left(t-t^{\prime}\right)}\right)^{\gamma} \\
& \rightarrow\left(\frac{\pi T / v}{\sinh \left((\pi T / v)\left[\left(x-x^{\prime}\right) \pm i v\left(\tau-\tau^{\prime}\right)\right]\right)}\right)^{\gamma} \tag{6.180}
\end{align*}
$$

where $\gamma$ is an exponent. Here we use $k_{\mathrm{B}}=\hbar=1$. Notice that the temperature changes the behavior of the boson propagator on distance scales that are long compared with the thermal wavelength $v / T$ to

$$
\begin{equation*}
\left\langle\phi(x, t) \phi\left(x^{\prime}, t^{\prime}\right)\right\rangle \rightarrow \ln \left(\frac{\pi T}{2}\right)-\frac{\pi T}{v}\left|x-x^{\prime}\right|+\cdots \tag{6.181}
\end{equation*}
$$

The long-distance behavior of the boson propagator at finite $T$ changes the behavior of the other correlators as well. In this regime they exhibit exponential decay of correlations over distances that are long compared with the thermal wavelength.

In contrast to what we did in perturbation theory, where the correlators are given in momentum and frequency space, the bosonization approach yields the exact correlators in real space and time. Thus, to compute spectral functions and other quantities of interest we now must perform Fourier transforms on the analytic continuations of these expressions (some of which have a somewhat involved analytic structure). But the expressions we have are not perturbative, they are exact!

## The CDW susceptibility

The thermal CDW correlation function, i.e. the CDW propagator in imaginary time at finite temperature $T$, is

$$
\begin{align*}
D_{\mathrm{CDW}}(x, \tau ; T)= & \left\langle T_{\tau}\left(\mathcal{O}_{\mathrm{CDW}}(x, \tau) \mathcal{O}_{\mathrm{CDW}}^{\dagger}(0,0)\right)\right\rangle \\
\sim & {\left[\frac{\left(\pi T / v_{\mathrm{c}}\right)^{2}}{\sinh \left[\left(\pi T / v_{\mathrm{c}}\right)\left(x+i v_{\mathrm{c}} \tau\right)\right] \sinh \left[\left(\pi T / v_{\mathrm{c}}\right)\left(x-i v_{\mathrm{c}} \tau\right)\right]}\right]^{1 /\left(2 K_{\mathrm{c}}\right)} } \\
& \times\left[\frac{\left(\pi T / v_{\mathrm{s}}\right)^{2}}{\sinh \left[\left(\pi T / v_{\mathrm{s}}\right)\left(x+i v_{\mathrm{s}} \tau\right)\right] \sinh \left[\left(\pi T / v_{\mathrm{s}}\right)\left(x-i v_{\mathrm{s}} \tau\right)\right]}\right]^{1 /\left(2 K_{\mathrm{s}}\right)} \tag{6.182}
\end{align*}
$$

The CDW dynamical susceptibility at finite temperature $\chi_{\mathrm{CDW}}(p, \omega ; T)$ is the Fourier transform of this expression in $x$ and $\tau$ (after an analytic continuation to real time $t$ ). The Fourier transform has a complex analytic structure due to the branch cuts and to the difference in the charge and spin velocities. Of direct physical interest is the imaginary time of the dynamical susceptibility, $\chi_{\text {CDW }}^{\prime \prime}(p, \omega ; T)$ at finite temperature, which is measured by inelastic X-ray scattering (up to a Bose factor $\chi_{\mathrm{CDW}}^{\prime \prime}(p, \omega)$ is proportional to the inelastic cross section).

Although the general form of $\chi_{\text {CDW }}^{\prime \prime}(p, \omega ; T)$ can be determined numerically, a simple expression (which captures the main physics) can be obtained by setting $v_{\mathrm{c}}=v_{\mathrm{s}}=v$ :

$$
\begin{equation*}
\chi_{\mathrm{CDW}}^{\prime \prime}(\omega, p>0 ; T) \sim-\frac{\sin (\pi \gamma)}{T^{2(1-\gamma)}} \operatorname{Im}\left\{f\left(\frac{\omega-p v}{4 \pi T}\right) f\left(\frac{\omega+p v}{4 \pi T}\right)\right\} \tag{6.183}
\end{equation*}
$$

Here $p$ is measured from $2 p_{\mathrm{F}}$, and

$$
\begin{equation*}
\gamma=\frac{1}{2}\left(\frac{1}{K_{\mathrm{c}}}+\frac{1}{K_{\mathrm{s}}}\right) \tag{6.184}
\end{equation*}
$$

The complex function $f(x)$ is given by

$$
\begin{equation*}
f(x)=\frac{\Gamma(\gamma / 2-i x)}{\Gamma(1-\gamma / 2-i x)} \tag{6.185}
\end{equation*}
$$

where $\Gamma(z)$ is the Euler gamma function. At very low temperatures, such that $\mid \omega \pm$ $p v \mid \gg T, \chi_{\mathrm{CDW}}^{\prime \prime}(p, \omega ; T)$ converges to the $T=0$ result:

$$
\begin{equation*}
\chi_{\mathrm{CDW}}^{\prime \prime}(p, \omega ; T=0) \propto\left|\frac{\omega^{2}-p^{2} v^{2}}{4 \pi^{2}}\right|^{-\frac{1}{2}\left(1-1 / K_{\mathrm{c}}\right)}(\theta(\omega-p v)+\theta(-(\omega+p v)) \tag{6.186}
\end{equation*}
$$

where I have set $K_{\mathrm{s}}=1$ (we will see below that this is required by the $\mathrm{SU}(2)$ spin rotational invariance). Since $K_{\mathrm{c}}>1$ (for repulsive interactions) we see that the spectral function is largest near $\omega= \pm p v$ ("on-shell"), where it diverges as a power law. Notice that this is a one-sided singularity since the spectral function vanishes on the other side of the mass-shell condition. This divergence is cut off at finite temperature $T$, where it takes the maximum value determined by $T$.

The same behavior is found for the full static susceptibility at the ordering wave vector (which here means $p=0$ ). Although it can be determined from the general expression for $\chi_{\mathrm{CDW}}^{\prime \prime}(p, \omega ; T)$, it is instructive to determine it more directly by the following simple argument. At finite temperature, the long-distance behavior of the correlators in real space for distances long compared with the thermal wave length $v / T$ is an exponential decay. This behavior effectively cuts off the infrared singularities in many quantities such as the static susceptibility at the ordering wavevector $Q=2 p_{\mathrm{F}}, \chi_{\mathrm{CDW}}(\omega=0, p=0)$ (again, the momentum $p$ is measured from the ordering wave vector). This quantity can be computed directly from a Fourier transform of the thermal CDW correlation function in imaginary time at $T=0$ with a long-distance cutoff of $v / T$ :

$$
\begin{align*}
\chi_{\mathrm{CDW}}(0,0 ; T) & \sim \int_{|x|<v / T} d x \int_{|t|<1 / T} d t D_{\mathrm{CDW}}(x, t ; T=0) \\
& \sim 2 \pi \times \mathrm{constant} \times \int_{a}^{v / T} \frac{r d r}{r^{2 \gamma}} \propto T^{-\left(1-1 / K_{\mathrm{c}}\right)} \tag{6.187}
\end{align*}
$$

where we have set $K_{\mathrm{s}}=1$. Thus, for $K_{\mathrm{c}}>1$ (repulsive interactions) the CDW susceptibility at the ordering wave vector $Q=2 p_{\mathrm{F}}$ diverges as $T \rightarrow 0$. This means that the $T=0$ system is almost ordered. We will see below that this behavior means that it is actually critical at $T=0$, and we will identify the exponent $\gamma$ with the scaling dimension (or dimension in short) of the CDW order parameter.

A similar analysis can be used to find the structure factor $S(p ; T)$ (once again measured from $Q=2 p_{\mathrm{F}}$ ) at temperature $T$, the Fourier transform in space of the equal-time correlation function,

$$
\begin{equation*}
S(p ; T)=\int_{-\infty}^{\infty} d x e^{-i p x} D(x, t=0 ; T) \tag{6.188}
\end{equation*}
$$

$S(p ; T)$ is measured by X-ray-diffraction experiments. An analysis of this Fourier transform (similar to what we did above) leads to the following result:
$S(p ; T) \propto 2 K_{\mathrm{c}} a^{-1 / K_{\mathrm{c}}}-\frac{K_{\mathrm{c}}^{2} \Gamma\left(1 / K_{\mathrm{c}}\right)}{K_{\mathrm{c}}-1} \times\left\{\begin{array}{l}\cos \left[\pi /\left(2 K_{\mathrm{c}}\right)\right]|p|^{1 / K_{\mathrm{c}}}, \quad \text { for } T / v \ll|p| \\ (T / v)^{1 / K_{\mathrm{c}}}, \quad \text { for } T / v \gg|p|\end{array}\right.$
Hence, in contrast with the static susceptibility, the structure factor at $T=0$, $S(p, T=0)$, does not diverge as $T \rightarrow 0$, and instead has a weak singularity (a cusp) at the ordering wave vector.

Finally, we note that for spin-rotational invariant systems (for which $K_{\mathrm{s}} \rightarrow 1$ ) there are logarithmic corrections to these results due to corrections to scaling effects (we will not give a derivation of these corrections here). We can put all of this together in terms of the equal-time density correlation function (including the logarithmic correction):

$$
\begin{equation*}
\langle\rho(x) \rho(0)\rangle=\frac{1}{K_{\mathrm{c}}(\pi x)^{2}}+\text { constant } \times\left.\frac{\cos \left(2 p_{\mathrm{F}} x\right)}{|x|^{1+1 / K_{\mathrm{c}}}}|\ln | x\right|^{-3 / 2}+\cdots \tag{6.190}
\end{equation*}
$$

and the $2 p_{\mathrm{F}}$ static CDW susceptibility (including the logarithmic correction) is

$$
\begin{equation*}
\chi_{\mathrm{CDW}}(T) \sim \frac{|\ln T|^{-3 / 2}}{T^{1-1 / K_{\mathrm{c}}}} \tag{6.191}
\end{equation*}
$$

## The SDW susceptibility

The correlation function of the SDW order parameter can be analyzed in a similar fashion. The dynamical susceptibility is measured by inelastic neutron scattering. Here I will quote only the main results.

The equal-time transverse spin-correlation function turns out to be (setting $K_{\mathrm{s}}=1$ )

$$
\begin{equation*}
\langle\vec{S}(x) \cdot \vec{S}(0)\rangle=\frac{1}{(\pi x)^{2}}+\text { constant } \times \frac{\cos \left(2 p_{\mathrm{F}} x\right)}{|x|^{1+1 / K_{\mathrm{c}}}} \sqrt{|\ln | x| |}+\cdots \tag{6.192}
\end{equation*}
$$

and the SDW transverse susceptibility (at the ordering wavevector $2 p_{\mathrm{F}}$ ) is

$$
\begin{equation*}
\chi_{\mathrm{SDW}}^{\perp}(T) \sim \frac{\sqrt{|\ln T|}}{T^{1-1 / K_{\mathrm{c}}}} \tag{6.193}
\end{equation*}
$$

So, up to logarithmic corrections, it has the same behavior as the CDW correlators and susceptibilities. This is a special property for the spin-rotational invariant system.

## The superconducting susceptibility

Finally, we quote the results for the singlet superconductor equal-time correlation function

$$
\begin{equation*}
\left\langle\mathcal{O}_{\mathrm{SS}}^{\dagger}(x) \mathcal{O}_{\mathrm{SS}}(0)\right\rangle \sim \frac{\text { constant }}{|x|^{1+K_{\mathrm{c}}}}|\ln | x\left|\left.\right|^{-3 / 2}\right. \tag{6.194}
\end{equation*}
$$

and finite-temperature susceptibility

$$
\begin{equation*}
\chi_{\mathrm{SS}}(T) \sim T^{K_{\mathrm{c}}-1}|\ln T|^{-3 / 2} \tag{6.195}
\end{equation*}
$$

Hence, the superconducting static susceptibility does not diverge as $T \rightarrow 0$ for $K_{\mathrm{c}}>1$ (repulsive interactions) but it does for $K_{\mathrm{c}}<1$ (attractive interactions). The different behavior of the superconducting and CDW susceptibilities follows directly from duality.