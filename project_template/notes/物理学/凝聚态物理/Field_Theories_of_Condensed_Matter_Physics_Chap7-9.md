# Field Theories of Condensed Matter Physics Chap7-9

## 7 Sigma models and topological terms

### 7.1 Generalized spin chains: the Haldane conjecture

The phenomenology which emerges from the spin one-half Heisenberg antiferromagnetic chain is quite striking: there is no long-range order, and there are gapless states, in particular, gapless spinless fermions (which, in the Heisenberg picture, are solitons). From the point of view of the Hubbard model, the Heisenberg model occurs at infinite coupling, where the charge-bearing degrees of freedom acquire a gap that is infinitely large. Thus spin and charge degrees of freedom are separated and the spin sector is at a critical point. This phenomenology inspired Anderson (1987) to propose a similar picture for the two-dimensional systems, the resonating-valence-bond (RVB) picture. However, most of this picture surely should not generalize. Critical points are not generic and, in general, it is not possible to have gapless states without the spontaneous breaking of a continuous symmetry except in one dimension due to the Mermin-Wagner theorem. In higher dimensions gapless states without a broken symmetry may be possible in a Coulomb phase of a gauge theory with a continuous gauge group. Thus, the 1D spin one-half case may be more the exception than the rule. For instance, it may be possible that the system is in a state without long-range order, which is likely to be massive. For this reason, it is important to consider generalizations of the Heisenberg model. This problem has been studied extensively. Two different approaches have been considered in one dimension: (a) enlarging the representation (higher spin, same symmetry group $\mathrm{SU}(2)$ ) and (b) higher symmetry groups $(\mathrm{SU}(N)$, for instance).

Haldane considered the generalization to higher spin but keeping the symmetry group $\mathrm{SU}(2)$ (Haldane, 1983a, 1983c, 1985b). He first considered the large-spin limit, which should have semi-classical character. He showed that in this limit the effective Lagrangian was almost the Lagrangian of the quantum non-linear sigma model. That the non-linear sigma model should appear in a semi-classical
$(S \rightarrow \infty)$ limit should be of no surprise: one finds the same answer in mean-field theory. But there is something wrong with this picture. The non-linear sigma model is known to have no long-range order and, in fact, it has a finite correlation length (Polyakov, 1975). Thus, if the sigma model truly was the infrared limit of the Heisenberg model, it could not possibly be a critical system, at least for $S$ sufficiently large. Haldane found that this is indeed the case for spin systems in which $S$ is an integer. For half-integer spins, he found that, in addition to the sigma model, there is an extra term that changes the physics drastically. The extra term turned out to be proportional to a topological invariant, namely the winding number or Pontryagin index of the (smooth) spin configuration. Thus it would appear that integer and half-integer spin chains behave rather differently.

Generalized spin systems with other symmetry groups have also been considered. These include $\operatorname{SU}(N)$ generalizations of the ( $\mathrm{SU}(2)$ ) Heisenberg model for various representations of the group. Affleck studied a large- $N$ limit in which he was able to show that the ground state does not have long-range order and that there are no gapless states (Affleck, 1985). However, other $\operatorname{SU}(N)$ generalizations of the Heisenberg model have been considered. For special choices of parameters, these systems are integrable (in the Bethe-ansatz sense), and they are also at a critical point (Babujian and Tsvelik, 1986). Their critical behavior is, however, different from the one we discussed in the Heisenberg case. Thus, it appears that, at least in one dimension, these systems are either critical or in a disordered state, i.e. a state without long-range order and with only short-range spin correlations.

Let us first discuss the spin- $S$ quantum Heisenberg chain. I will do so by introducing a path-integral method for spin systems that does generalize to higher dimensions, groups, representations, etc.

### 7.2 Path integrals for spin systems: the single-spin problem

In Section 3.2 we developed a path-integral method for Fermi systems of the Hubbard type (i.e. with local interactions). Using a Hubbard-Stratonovich transformation we were able to derive an effective action for the low-energy degrees of freedom, the spin fluctuations. The result was a path-integral representation of the long-range spin fluctuations, the quantum-mechanical non-linear sigma model.

We also showed that, in the strong-coupling limit, the half-filled Hubbard model maps onto the quantum Heisenberg model. In this limit the "band" fermions are tightly bound into localized spins. There is no motion of the fermionic degrees of freedom since, in this limit, the energy gap for charge fluctuations is infinitely large. It is natural to ask for an alternative derivation of the effective action for the spin fluctuations that should not be based on the weak-coupling mean-field theory, as we did in Chapter 3. Also we will now be careful enough to keep terms
of topological significance, something we did not do in Chapter 3, and to assess their importance.

We begin with the discussion of an extremely simple system: a spin- $S$ degree of freedom coupled to an external field through a Zeeman term. From the standard treatment in elementary quantum mechanics (Baym, 1974) we know that the $(2 S+$ 1)-fold degeneracy is lifted by the Zeeman interaction, resulting in $2 S+1$ nondegenerate levels. The path integral will enable us to study the evolution operator between arbitrary initial and final states.

There are several published path-integral treatments of spin degrees of freedom. They all share the feature that they deal with coherent states rather than the more familiar complete states (Schulman, 1981). The method of coherent states has been extensively reviewed by A. Perelomov (1986). We will use a special version of the method of coherent states that keeps the spin symmetry intact, which was first introduced by Wiegmann (1988) and by Fradkin and Stone (1988).

Let us begin by describing the Hilbert space. It is very simple. We have $2 S+1$ states that transform like a spin- $S$ representation of $\mathrm{SU}(2)$. Let $|0\rangle$ denote the highest-weight state in this representation,

$$
\begin{equation*}
|0\rangle=|S, S\rangle \tag{7.1}
\end{equation*}
$$

This state is an eigenstate both of $S_{3}$, the (only) diagonal generator of $\mathrm{SU}(2)$, and of the quadratic Casimir invariant $\vec{S}^{2}$ :

$$
\begin{align*}
& S_{3}|0\rangle=S|0\rangle  \tag{7.2}\\
& \vec{S}^{2}|0\rangle=S(S+1)|0\rangle \tag{7.3}
\end{align*}
$$

Consider now the state $|\vec{n}\rangle$ labeled by the unit vector $\vec{n}$ which is obtained by the rotation (see Fig. 7.1)

$$
\begin{equation*}
|\vec{n}\rangle=e^{i \theta\left(\vec{n}_{0} \times \vec{n}\right) \cdot \vec{S}}|S, S\rangle \tag{7.4}
\end{equation*}
$$

where $\vec{n}_{0}$ is a unit vector along the quantization axis, $\theta$ is the co-latitude

$$
\begin{equation*}
\vec{n} \cdot \vec{n}_{0}=\cos \theta \tag{7.5}
\end{equation*}
$$

and $S_{i}(i=1,2,3)$ are the (three) generators of $\mathrm{SU}(2)$ in the spin- $S$ representation. For a review of $S U(2)$ and its representations, see, for instance, Georgi (1982).

The state $|\vec{n}\rangle$ can be expanded in a complete basis of the spin- $S$ irreducible representation $\{|S, M\rangle\}$, where $M$ labels the eigenvalue of $S_{3}$,

$$
\begin{align*}
& S_{3}|S, M\rangle=m|S, M\rangle  \tag{7.6}\\
& \vec{S}^{2}|S, M\rangle=S(S+1)|S, M\rangle \tag{7.7}
\end{align*}
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-210.jpg?height=578&width=523&top_left_y=191&top_left_x=596)

Figure 7.1 The unit sphere $S_{2}$ and the unit vectors $\vec{n}_{0}$ and $\vec{n}$.
and $-S \leq M \leq S$, in integer steps. The coefficients of the expansion are the representation matrices $D^{(S)}(\vec{n})_{M S}$

$$
\begin{equation*}
|\vec{n}\rangle=\sum_{M=-S}^{S} D^{(S)}(\vec{n})_{M S}|S, M\rangle \tag{7.8}
\end{equation*}
$$

Clearly, there are many other rotations, differing from one another by multiplication on the right by rotations about the $z$ axis. This will give rise to the same state, except for an overall phase. In more formal terms, the observable states are in a one-to-one correspondence with the right cosets $\mathrm{SU}(2) / \mathrm{U}(1)$, where $\mathrm{U}(1)$ represents phase transformations generated by the diagonal generator of $\mathrm{SU}(2)$. Clearly the coset is isomorphic to the 2-sphere: $\mathrm{SU}(2) / \mathrm{U}(1) \simeq S_{2}$. In the language of differential geometry, the coherent states form a hermitian line bundle associated with the Hopf, or monopole, principal bundle.

The matrices $D^{(S)}$ do not form a group but rather satisfy the algebra

$$
\begin{equation*}
D^{(S)}\left(\vec{n}_{1}\right) D^{(S)}\left(\vec{n}_{2}\right)=D^{(S)}\left(\vec{n}_{3}\right) e^{i \Phi\left(\vec{n}_{1}, \vec{n}_{2}, \vec{n}_{3}\right) S_{3}} \tag{7.9}
\end{equation*}
$$

where $\vec{n}_{1}, \vec{n}_{2}$, and $\vec{n}_{3}$ are three arbitrary unit vectors on the unit sphere $S_{2}$, and $\Phi\left(\vec{n}_{1}, \vec{n}_{2}, \vec{n}_{3}\right)$ is the area of the spherical triangle with vertices at $\vec{n}_{1}, \vec{n}_{2}$, and $\vec{n}_{3}$ (see Fig. 7.2). Equation (7.9) is simply saying that the $D^{(S)}$ matrices form a group up to an element generated by the diagonal generators, the Cartan subalgebra. Since the sphere $S_{2}$ is a closed manifold (and hence without boundaries), the area of a spherical triangle is not uniquely defined. The indicated areas of the sphere in Figs. 7.2(a) and (b) are equally good definitions of the area. The difference of
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-211.jpg?height=581&width=1106&top_left_y=187&top_left_x=295)

Figure 7.2 The spherical triangle with vertices at $\vec{n}_{1}, \vec{n}_{2}$, and $\vec{n}_{3}$. Its area is not unambiguously defined. The "inner" area is shown in (a) and the "outer" area in (b).
the oriented areas is $4 \pi$. Since $S_{3}$ has eigenvalues equal to $M$, which is either an integer or a half-integer, this ambiguity has no physical manifestation since

$$
\begin{equation*}
e^{i 4 \pi M}=1 \tag{7.10}
\end{equation*}
$$

We can regard the requirement that the ambiguity in the definition of the area should lead to no physical consequences as the origin of the quantization of spin.

Other useful properties of the spin coherent states $|\vec{n}\rangle$ are the inner product $\left\langle\vec{n}_{1} \mid \vec{n}_{2}\right\rangle$,

$$
\begin{align*}
\left\langle\vec{n}_{1} \mid \vec{n}_{2}\right\rangle & =\langle 0| D^{(S)^{\dagger}}\left(\vec{n}_{1}\right) D^{(S)}\left(\vec{n}_{2}\right)|0\rangle  \tag{7.11}\\
& =e^{i \Phi\left(\vec{n}_{1}, \vec{n}_{2}, \vec{n}_{0}\right) S}\left(\frac{1+\vec{n}_{1} \cdot \vec{n}_{2}}{2}\right)^{S} \tag{7.12}
\end{align*}
$$

the diagonal matrix elements of the $\mathrm{SU}(2)$ generators $\vec{S}$,

$$
\begin{equation*}
\langle\vec{n}| \vec{S}|\vec{n}\rangle=S \vec{n} \tag{7.13}
\end{equation*}
$$

and the "resolution of the identity," which is an expression of the identity operator $\hat{I}$ in terms of the coherent-state operators $|\vec{n}\rangle\langle\vec{n}|$,

$$
\begin{equation*}
\hat{I}=\int d \mu(\vec{n})|\vec{n}\rangle\langle\vec{n}| \tag{7.14}
\end{equation*}
$$

The integration measure $d \mu(\vec{n})$ is given by the invariant measure

$$
\begin{equation*}
d \mu(\vec{n})=\left(\frac{2 s+1}{4 \pi}\right) d^{3} n \delta\left(\vec{n}^{2}-1\right) \tag{7.15}
\end{equation*}
$$

We are now in a position to write down an expression for the path integral in this coherent-state representation. Its generalization to other groups is straightforward and has been given by Wiegmann (1989). Let $H(\vec{S})=\vec{B} \cdot \vec{S}$ be the Zeeman-like Hamiltonian for a spin system with one spin- $S$ degree of freedom. I will consider the representation of the evolution operator in imaginary time:

$$
\begin{equation*}
Z=\operatorname{tr} e^{i H T}=\operatorname{tr} e^{-\beta H} \tag{7.16}
\end{equation*}
$$

In other words, we are assuming that the initial and final states are identified. Let us split the imaginary-time interval into $N_{t}$ steps each of length $\delta t$ and consider the limit $N_{t} \rightarrow \infty$ and $\delta t \rightarrow 0$ while keeping $N_{t} \delta t=\beta$ constant. As usual we make use of the Trotter formula

$$
\begin{equation*}
Z=\operatorname{tr} e^{-\beta H}=\lim _{\substack{N_{t} \rightarrow \infty \\ \delta t \rightarrow 0}}\left(e^{-\delta t H}\right)^{N_{t}} \tag{7.17}
\end{equation*}
$$

and insert the "resolution of identity," Eq. (7.14), at every intermediate time $t_{j}$,

$$
\begin{equation*}
Z=\lim _{\substack{N_{t} \rightarrow \infty \\ \delta t \rightarrow 0}}\left(\prod_{j=1}^{N_{t}} \int d \mu\left(\vec{n}_{j}\right)\right)\left(\prod_{j=1}^{N_{t}}\left\langle\vec{n}\left(t_{j}\right)\right| e^{-\delta t H}\left|\vec{n}\left(t_{j+1}\right)\right\rangle\right) \tag{7.18}
\end{equation*}
$$

with periodic boundary conditions. Here $\left\{t_{j}\right\}$ is a set of intermediate times in the imaginary-time interval $[0, \beta]$. Since $\delta t$ is small we can approximate Eq. (7.18) as

$$
\begin{equation*}
Z=\lim _{\substack{N_{t} \rightarrow \infty \\ \delta t \rightarrow 0}}\left(\prod_{j=1}^{N_{t}} \int d \mu\left(\vec{n}_{j}\right)\right)\left(\prod_{j=1}^{N_{t}}\left[\left\langle\vec{n}\left(t_{j}\right) \mid \vec{n}\left(t_{j+1}\right)\right\rangle-\delta t\left\langle\vec{n}\left(t_{j}\right)\right| H\left|\vec{n}\left(t_{j+1}\right)\right\rangle\right]\right) \tag{7.19}
\end{equation*}
$$

Within the same approximation we can write

$$
\begin{equation*}
\frac{\left\langle\vec{n}\left(t_{j}\right)\right| H\left|\vec{n}\left(t_{j+1}\right)\right\rangle}{\left\langle\vec{n}\left(t_{j}\right) \mid \vec{n}\left(t_{j+1}\right)\right\rangle} \simeq\left\langle\vec{n}\left(t_{j}\right)\right| H\left|\vec{n}\left(t_{j}\right)\right\rangle+O(\delta t) \tag{7.20}
\end{equation*}
$$

Using the inner-product formula, Eq. (7.12), we get

$$
\begin{equation*}
\left\langle\vec{n}\left(t_{j}\right) \mid \vec{n}\left(t_{j+1}\right)\right\rangle=e^{i \Phi\left(\vec{n}\left(t_{j}\right), \vec{n}\left(t_{j+1}\right), \vec{n}_{0}\right) S}\left(\frac{1+\vec{n}\left(t_{j}\right) \cdot \vec{n}\left(t_{j+1}\right)}{2}\right)^{S} \tag{7.21}
\end{equation*}
$$

We now insert Eqs. (7.20) and (7.21) into Eq. (7.19) to find the (formal) expression for the path integral

$$
\begin{equation*}
Z=\lim _{\substack{N_{t} \rightarrow \infty \\ \delta t \rightarrow 0}} \int \mathcal{D} \vec{n} e^{-\mathcal{S}_{\mathrm{E}}[\vec{n}]} \tag{7.22}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-213.jpg?height=511&width=519&top_left_y=203&top_left_x=586)

Figure 7.3 Closed smooth trajectories on $S_{2}$.
where the measure $\mathcal{D} \vec{n}$ is given by

$$
\begin{equation*}
\mathcal{D} \vec{n}=\prod_{j=1}^{N_{t}} d \mu\left(\vec{n}\left(t_{j}\right)\right) \tag{7.23}
\end{equation*}
$$

and the Euclidean action $\mathcal{S}_{\mathrm{E}}[\vec{n}]$ is given by

$$
\begin{align*}
-\mathcal{S}_{\mathrm{E}}[\vec{n}]= & i S \sum_{j=1}^{N_{t}} \Phi\left(\vec{n}\left(t_{j}\right), n\left(t_{j+1}\right), \vec{n}_{0}\right)+S \sum_{j=1}^{N_{t}} \ln \left(\frac{1+\vec{n}\left(t_{j}\right) \cdot \vec{n}\left(t_{j+1}\right)}{2}\right) \\
& -\sum_{j=1}^{N_{t}}\left\langle\vec{n}\left(t_{j}\right)\right| H\left|\vec{n}\left(t_{j}\right)\right\rangle \tag{7.24}
\end{align*}
$$

In this derivation, we have assumed that the unit vectors $\left\{\vec{n}\left(t_{j}\right)\right\}$ are closed trajectories (because $\vec{n}\left(t_{0}\right)=\vec{n}\left(t_{N+1}\right)$ ) on the sphere $S_{2}$ which are sufficiently smooth that all the approximations of Eq. (7.20) make sense (see Fig. 7.3). This is not quite the case, as emphasized by Klauder (1979). But these technicalities, as well as operator-ordering problems, can be taken care of without affecting the physics. We will ignore these difficulties from now on. Our path integral will be as good a mathematical object as any other path integral.

The first term of the effective Euclidean action is complex. It leads to a sum over trajectories weighted by phases (even though we are working in imaginary time!) of the form

$$
\begin{equation*}
e^{i S \mathcal{A}[\vec{n}]} \tag{7.25}
\end{equation*}
$$

where $\mathcal{A}[\vec{n}]$ is the limit

$$
\begin{equation*}
\mathcal{A}[\vec{n}]=\lim _{\substack{N_{t} \rightarrow \infty \\ \delta t \rightarrow 0}} \sum_{j=1}^{N_{t}} \Phi\left(\vec{n}\left(t_{j}\right), \vec{n}\left(t_{j+1}\right), \vec{n}_{0}\right) \tag{7.26}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-214.jpg?height=490&width=497&top_left_y=199&top_left_x=597)

Figure 7.4 The trajectory $\Gamma$ and the caps $\Sigma^{+}$and $\Sigma^{-}$.

Since each term of this sum is the area of the spherical triangle with vertices at $\vec{n}\left(t_{j}\right), \vec{n}\left(t_{j+1}\right)$, and $\vec{n}_{0}$, the sum, i.e. the sum of these areas, is just equal to the total area of the cap $\Sigma^{+}$bounded by the trajectory $\Gamma$ parametrized by $\vec{n}(t)$ (see Fig. 7.4). Once again, since $S_{2}$ has no boundaries, there are two caps, $\Sigma^{+}$and $\Sigma^{-}$. The oriented areas of $\Sigma^{+}$and $\Sigma^{-}$also differ by $4 \pi$,

$$
\begin{equation*}
\mathcal{A}\left(\Sigma^{+}\right)+\mathcal{A}\left(\Sigma^{-}\right)=4 \pi \tag{7.27}
\end{equation*}
$$

This is the same ambiguity as we encountered before. It does not lead us to any observable effects since $S$ is restricted to being an integer or a half-integer. The area of the cap $\Sigma$, say $\Sigma^{+}$, is given by (in the limit $N_{t} \rightarrow \infty, \delta t \rightarrow 0$ )

$$
\begin{equation*}
\mathcal{A}\left(\Sigma^{+}\right)=\int_{0}^{1} d \tau \int_{0}^{\beta} d t \vec{n}(t, \tau) \cdot\left(\partial_{t} \vec{n}(t, \tau) \times \partial_{\tau} \vec{n}(t, \tau)\right) \equiv \mathcal{S}_{\mathrm{WZ}}[\vec{n}] \tag{7.28}
\end{equation*}
$$

where $\vec{n}(t, \tau)$ is an arbitrary, smooth parametrization of the cap $\Sigma^{+}$bounded by $\Gamma$ that satisfies the boundary conditions

$$
\begin{equation*}
\vec{n}(t, 0) \equiv \vec{n}(t), \quad \vec{n}(t, 1) \equiv \vec{n}_{0}, \quad \vec{n}(0, \tau)=\vec{n}(\beta, \tau) \tag{7.29}
\end{equation*}
$$

where $t \in[0, \beta]$ and $\tau \in[0,1]$. Terms of this sort are generically called WessZumino terms, although, for reasons that will be explained later, sometimes they are also referred to as Chern-Simons terms.

We now proceed to take a naive continuum limit $\left(N_{t} \rightarrow \infty, \delta t \rightarrow 0\right)$ and find from Eqs. (7.28) and (7.24) the Euclidean action

$$
\begin{equation*}
\mathcal{S}_{\mathrm{E}}[\vec{n}]=-i S \mathcal{S}_{\mathrm{WZ}}[\vec{n}]+\frac{S \delta t}{4} \int_{0}^{\beta} d t\left(\partial_{t} \vec{n}(t)\right)^{2}+S \int_{0}^{\beta} d t \vec{B} \cdot \vec{n}(t) \tag{7.30}
\end{equation*}
$$

where $\vec{B}$ is an external magnetic field.

We can get back to real time $x_{0}$, with

$$
\begin{equation*}
t=i x_{0}, \quad \beta=i T \tag{7.31}
\end{equation*}
$$

where $T$ is the (imaginary) time span, by writing

$$
\begin{equation*}
Z=\int \mathcal{D} \vec{n} e^{i \mathcal{S}_{\mathrm{M}}[\vec{n}]} \tag{7.32}
\end{equation*}
$$

where $\mathcal{S}_{\mathrm{M}}[\vec{n}]$ is given by

$$
\begin{equation*}
\mathcal{S}_{\mathrm{M}}[\vec{n}]=S \mathcal{S}_{\mathrm{WZ}}[\vec{n}]+\frac{S \delta t}{4} \int_{0}^{T} d x_{0}\left(\partial_{0} \vec{n}\left(x_{0}\right)\right)^{2}-S \int_{0}^{T} d x_{0} \vec{B} \cdot \vec{n}\left(x_{0}\right) \tag{7.33}
\end{equation*}
$$

This expression has a simple mechanical analogy. Let us imagine that $\vec{n}\left(x_{0}\right)$ is the position vector of a charged particle at time $x_{0}$. The particle has a small mass $m=S \delta t / 2$ (with $m \rightarrow 0$ ) and is constrained to move on the surface of the unit sphere, $S_{2}$. A magnetic monopole with magnetic charge $S$ is placed at the center of the sphere. The usual minimal electromagnetic coupling gives a contribution to the action of the form (Landau and Lifshitz, 1975b)

$$
\begin{equation*}
\mathcal{S}_{\mathrm{em}}=\oint d x_{0} \vec{A} \cdot \frac{\partial \vec{n}}{\partial x_{0}} \tag{7.34}
\end{equation*}
$$

where $\vec{A}$ is the vector potential at position $\vec{n}\left(x_{0}\right)$. In order to represent a monopole, the vector potential has to have a singular piece that describes the Dirac string. We can use Stokes' theorem to write $\mathcal{S}_{\mathrm{em}}$ in terms of a two-form instead of the oneform $\vec{A}$. Stokes' theorem simply says that $\mathcal{S}_{\text {em }}$ is given by the flux of the magnetic monopole through the area of $S_{2}$ bounded by the trajectory $\Gamma$ (see Fig. 7.5). This is nothing but the magnetic charge $S$ of the monopole multiplied by the area of $S_{2}$ bounded by $\Gamma$, in other words, the cap $\Sigma$ of Fig. 7.4. This is precisely identical to the first term in the action Eq. (7.33). Ideas of this sort were first popularized by Witten (1983) in his discussion of Wess-Zumino terms; see also Stone (1986).

The magnetic monopole gives rise to a uniform radial magnetic field on the surface of the sphere with total flux equal to the magnetic charge $S$. It is well known that the eigenstates of such a particle are monopole spherical harmonics. The ground state is $(2 S+1)$-fold degenerate and it is separated from the higher-angular-momentum states (i.e. Landau "orbits") by an energy gap that scales with the mass of the particle like $1 / m$. Thus, in the small-mass limit $(m \rightarrow 0)$ the system is projected onto the ground state. In this way the subspace of the "lowest-Landau orbit" on a spherical geometry becomes identical to the space of the spin- $S$ representation of $\operatorname{SU}(2)$. In retrospect, it would have been possible to describe spin in terms of the path integral with Eq. (7.33) for its action directly, without reference to coherent states.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-216.jpg?height=803&width=1227&top_left_y=185&top_left_x=244)

Figure 7.5 A magnetic monopole at the center of the unit sphere in (a) and the flux through the cap $\Sigma^{+}$bounded by the trajectory $\Gamma$ in (b). The thick line represents an infinitely long solenoid of infinitesimal thickness (a Dirac string).

Returning now to Eq. (7.34), we may consider the physical meaning of the vector potential $\vec{A}\left(x_{0}\right)$ in terms of the states of the spin. It is straightforward to show that the circulation of the vector field $\vec{A}\left(x_{0}\right)$ is just the accumulated change in the phase of the spin state under an adiabatic time evolution, i.e.

$$
\begin{equation*}
\oint d \vec{n} \cdot \vec{A}[\vec{n}(t)]=\int_{0}^{T} d t\left\langle\vec{n}(t) \mid \partial_{t} \vec{n}(t)\right\rangle \tag{7.35}
\end{equation*}
$$

(with $|\vec{n}(0)\rangle=|\vec{n}(T)\rangle$ ), which is known as the Berry phase (Avron et al., 1983; Simon, 1983; Berry, 1984), and the vector field $\vec{A}[\vec{n}(t)]$ is known as the Berry connection. In other chapters of this book we will encounter many manifestations of the Berry phase (and of the Berry connection).

### 7.3 The path integral for many-spin systems

It is trivial to generalize the one-spin problem to a many (or infinitely many!)-spin system. Once again, I will follow the treatment of Fradkin and Stone (1988).

The Hilbert space of a many-spin system is just the tensor product of the Hilbert space of the individual spins. Let $H$ be the (Heisenberg) Hamiltonian for a spin- $S$ system on an arbitrary lattice,

$$
\begin{equation*}
H=J \sum_{\left(\vec{r}, \vec{r}^{\prime}\right)} \vec{S}(\vec{r}) \cdot \vec{S}\left(\vec{r}^{\prime}\right) \tag{7.36}
\end{equation*}
$$

where $\left(\vec{r}, \vec{r}^{\prime}\right)$ are pairs of sites on that lattice. We can now use the identity $\langle\vec{n}| \vec{S}|\vec{n}\rangle=$ $S \vec{n}$ to write down the imaginary-time action for the many-spin system

$$
\begin{align*}
\mathcal{S}_{\mathrm{E}}[\vec{n}]= & -i S \sum_{\vec{r}} \mathcal{S}_{\mathrm{WZ}}[\vec{n}(\vec{r})]+\frac{m}{2} \int_{0}^{\beta} d t \sum_{\vec{r}}\left(\partial_{t} \vec{n}(\vec{r}, t)\right)^{2} \\
& +\int_{0}^{\beta} d t \sum_{\left(\vec{r}, \vec{r}^{\prime}\right)} J S^{2} \vec{n}(\vec{r}, t) \cdot \vec{n}\left(\vec{r}^{\prime}, t\right) \tag{7.37}
\end{align*}
$$

where we are supposed to take the limit $m \rightarrow 0$ (it will be dropped from now on). The sums in Eq. (7.37) run over all the sites of the lattice. The first term is just the sum of the Wess-Zumino terms of the individual spins. Note that the only real-time dependence enters through the Wess-Zumino terms.

We can Wick-rotate back to real time, $t=i x_{0}, \beta=i T$, and write the corresponding real-time action, $\mathcal{S}_{\mathrm{M}}$, as

$$
\begin{equation*}
\mathcal{S}_{\mathrm{M}}[\vec{n}]=S \sum_{\vec{r}} \mathcal{S}_{\mathrm{WZ}}[\vec{n}(\vec{r})]-\int_{0}^{T} d x_{0} \sum_{\left(\vec{r}, \vec{r}^{\prime}\right)} J S^{2} \vec{n}\left(\vec{r}, x_{0}\right) \cdot \vec{n}\left(\vec{r}^{\prime}, x_{0}\right) \tag{7.38}
\end{equation*}
$$

The effective action $\mathcal{S}_{\mathrm{M}}[\vec{n}]$ scales like $S$, the spin representation. Thus, in the largespin limit $S \rightarrow \infty$, the path integral

$$
\begin{equation*}
Z=\int \mathcal{D} \vec{n} e^{i \mathcal{S}_{\mathrm{M}}[\vec{n}]} \tag{7.39}
\end{equation*}
$$

should be dominated by the stationary points of the action $\mathcal{S}_{\mathrm{M}}[\vec{n}]$. This is the semi-classical limit. Corrections to the large- $S$ limit can be arranged in an expansion in powers of $1 / S$. This is the content of the Holstein-Primakoff expansion (Holstein and Primakoff, 1940). Note, however, that we did not make use of the semi-classical limit in order to derive the path integral. Let us consider a number of cases of interest.

### 7.4 Quantum ferromagnets

In this case we set $J=-|J|$. I will consider the case of a hypercubic lattice and restrict the sum over pairs of sites to nearest neighbors. The results can be generalized very easily to any other lattice.

I first make use of the constraint $\vec{n}^{2}=1$ to write the action in the form

$$
\begin{equation*}
\mathcal{S}_{\mathrm{M}}[\vec{n}]=S \sum_{\vec{r}} \mathcal{S}_{\mathrm{WZ}}[\vec{n}(\vec{r})]-\frac{|J| S^{2}}{2} \sum_{\left\langle\vec{r}, \vec{r}^{\prime}\right\rangle} \int_{0}^{T} d x_{0}\left[\vec{n}\left(\vec{r}, x_{0}\right)-\vec{n}\left(\vec{r}^{\prime}, x_{0}\right)\right]^{2} \tag{7.40}
\end{equation*}
$$

up to an additive constant. Consider now the long-wavelength limit, in which $\vec{n}\left(\vec{r}, x_{0}\right)$ is a smooth function of the spatial coordinates. If we denote by $a_{0}$ a shortdistance cutoff (i.e. the lattice spacing) we can write an effective continuum action for the long-wavelength fluctuations

$$
\begin{equation*}
\mathcal{S}_{\mathrm{M}}[\vec{n}]=\int d^{d} x \frac{S}{a_{0}^{d}} \mathcal{S}_{\mathrm{WZ}}[\vec{n}]-\frac{|J| S^{2}}{2 a_{0}^{d-2}} \int d^{d} x \int_{0}^{T} d x_{0}\left(\nabla_{i} \cdot \vec{n}\left(\vec{x}, x_{0}\right)\right)^{2} \tag{7.41}
\end{equation*}
$$

It is important to stress that the effective continuum action for the quantum ferromagnet does not have the standard non-linear sigma-model form which is of second order in time derivatives, which leads to Goldstone bosons with a linear dispersion law. As we will see (and as we already saw in Chapter 3), this is the correct result for antiferromagnetic magnons but not for ferromagnetic ones. It is well known that ferromagnetic magnons have a quadratic dispersion relation (Bloch, 1930). Thus, in the ferromagnetic case we expect the effective action to have twice as many spatial derivatives as temporal derivatives of the fields. In other terms, the dynamic critical exponent for a quantum ferromagnet is $z=2$, whereas for an antiferromagnet it is $z=1$.

To see how all this comes about, we will derive the classical equations of motion for the effective action of the quantum ferromagnet, Eq. (7.41). We take care of the local constraint

$$
\begin{equation*}
\vec{n}^{2}\left(\vec{x}, x_{0}\right)=1 \tag{7.42}
\end{equation*}
$$

by introducing the Lagrangian multiplier field $\lambda\left(\vec{x}, x_{0}\right)$ which enforces the constraint in the path integral through an extra term in the action

$$
\begin{equation*}
\mathcal{S}_{\mathrm{extra}}[\vec{n}, \lambda]=\int d^{d} x \int_{0}^{T} d x_{0} \frac{\lambda\left(\vec{x}, x_{0}\right)}{2}\left(\vec{n}^{2}\left(\vec{x}, x_{0}\right)-1\right) \tag{7.43}
\end{equation*}
$$

The classical equations of motion result from demanding that the total action

$$
\begin{equation*}
\mathcal{S}_{\mathrm{tot}}[\vec{n}, \lambda]=\mathcal{S}_{\mathrm{M}}[\vec{n}]+\mathcal{S}_{\mathrm{extra}}[\vec{n}, \lambda] \tag{7.44}
\end{equation*}
$$

be stationary,

$$
\begin{equation*}
\delta \mathcal{S}_{\mathrm{tot}}=0 \tag{7.45}
\end{equation*}
$$

The variation of the local Wess-Zumino action is very simple. Indeed, $\mathcal{S}_{\mathrm{WZ}}$ is essentially the area of the sphere bounded by the trajectory $\vec{n}\left(\vec{x}, x_{0}\right)$ (at each point $\vec{x}$ ) on the "target manifold" (the 2 -sphere $S_{2}$ ). Thus the variation $\delta \mathcal{S}_{\mathrm{WZ}}$ due to a small change of the trajectory $\delta \vec{n}$ is simply equal to

$$
\begin{equation*}
\delta \mathcal{S}_{\mathrm{WZ}}=\delta \vec{n} \cdot\left(\vec{n} \times \partial_{0} \vec{n}\right) \tag{7.46}
\end{equation*}
$$

Hence, we get the classical equations of motion

$$
\begin{equation*}
\frac{\delta \mathcal{S}_{\mathrm{tot}}}{\delta \vec{n}}=\nabla_{i}\left(\frac{\delta \mathcal{S}_{\mathrm{tot}}}{\delta \nabla_{i} \vec{n}}\right) \tag{7.47}
\end{equation*}
$$

supplemented by the constraint Eq. (7.42). More explicitly, we get

$$
\begin{equation*}
\frac{S}{a_{0}^{d}} \vec{n} \times \partial_{0} \vec{n}+\lambda \vec{n}=-\frac{|J| S^{2}}{a_{0}^{d-2}} \nabla^{2} \vec{n} \tag{7.48}
\end{equation*}
$$

The classical value of the Lagrange multiplier field $\lambda$ can be evaluated by computing the scalar product of Eq. (7.48) with $\vec{n}$. The result is

$$
\begin{equation*}
\lambda=-\frac{|J| s^{2}}{a_{0}^{d-2}}\left(\vec{n} \cdot \nabla^{2} \vec{n}\right) \tag{7.49}
\end{equation*}
$$

On substituting Eq. (7.49) back into Eq. (7.48) we get the equation of motion for the quantum ferromagnet:

$$
\begin{equation*}
\frac{S}{a_{0}^{d}} \vec{n} \times \partial_{0} \vec{n}+\frac{|J| S^{2}}{a_{0}^{d-2}}\left(\nabla^{2}-\left(\vec{n} \cdot \nabla^{2} \vec{n}\right)\right) \vec{n}=0 \tag{7.50}
\end{equation*}
$$

By using elementary algebra as well as Eq. (7.42), this equation can be brought to the form

$$
\begin{equation*}
\partial_{0} \vec{n}=|J| S a_{0}^{2} \vec{n} \times \nabla^{2} \vec{n} \tag{7.51}
\end{equation*}
$$

This equation is known as the Landau-Lifshitz equation. The derivation shown here is due to M. Stone.

The Landau-Lifshitz equation has several interesting properties. It is a nonlinear equation with first-order time derivatives and second-order space derivatives. Thus the solutions of Eq. (7.51) have a quadratic dispersion law, as they should. The spins move in a precessional fashion with an angular velocity $\vec{\Omega}$ given by

$$
\begin{equation*}
\vec{\Omega}=-|J| S a_{0}^{2} \nabla^{2} \vec{n} \tag{7.52}
\end{equation*}
$$

The Landau-Lifshitz equations can be solved in the linear regime. Let us parametrize $\vec{n}$ by the components

$$
\begin{equation*}
\vec{n}=\binom{\sigma}{\vec{\pi}} \tag{7.53}
\end{equation*}
$$

where $\sigma$ and $\pi_{i}(i=1,2)$ satisfy the constraint

$$
\begin{equation*}
\sigma^{2}+\vec{\pi}^{2}=1 \tag{7.54}
\end{equation*}
$$

The (linearized) Landau-Lifshitz equations are

$$
\begin{align*}
& \partial_{0} \pi_{1} \approx-|J| S a_{0}^{2} \nabla^{2} \pi_{2} \\
& \partial_{0} \pi_{2} \approx+|J| S a_{0}^{2} \nabla^{2} \pi_{1} \tag{7.55}
\end{align*}
$$

to leading order in $\vec{\pi}$. From Eqs. (7.55) we find the dispersion relation for ferromagnetic spin waves

$$
\begin{equation*}
\left|p_{0}\right| \approx|J| S a_{0}^{2}|\vec{p}|^{2} \tag{7.56}
\end{equation*}
$$

which is known as Bloch's law (Bloch, 1930). As expected, we find that the frequency of the low-energy excitations of a quantum ferromagnet scales as the square of the momentum.

### 7.5 The effective action for one-dimensional quantum antiferromagnets

We will not consider here frustrated systems. Thus, and for the sake of simplicity, we will consider the case of quantum antiferromagnets on bipartite lattices, such as the hypercubic lattice. We will see that, unlike in the case of the ferromagnets, the effective low-energy action is different for 1D systems and for higher-dimensional cases such as the square and cubic lattices. In all cases we will find a non-linear sigma model, in agreement with our previous discussion (see Chapter 3) that was based on a mean-field weak-coupling treatment of the Hubbard model. But we will get more. For the spin-chain case we will find that the action has an extra term, a topological term.

The starting point will be, once again, the real-time action of Eq. (7.39) with a nearest-neighbor antiferromagnetic coupling constant $J>0$. Since we expect that at least the short-range order should have Néel character, it is natural to consider the staggered and uniform components of the spin field $\vec{n}$. This construction, as is, works only for two-sublattice systems close to a Néel state, although it is possible to generalize it to other cases.

Consider a spin chain with an even number of sites $N$ occupied by spin- $S$ degrees of freedom. The sites of the lattice are labeled by an integer $j=1, \ldots, N$. The real-time action is

$$
\begin{equation*}
\mathcal{S}_{\mathrm{M}}[\vec{n}]=S \sum_{j=1}^{N} \mathcal{S}_{\mathrm{WZ}}[\vec{n}(j)]-\int_{0}^{T} d x_{0} \sum_{j=1}^{N} J S^{2} \vec{n}\left(j, x_{0}\right) \cdot \vec{n}\left(j+1, x_{0}\right) \tag{7.57}
\end{equation*}
$$

where we have assumed periodic boundary conditions. Since we expect to be close to a Néel state, we will stagger the configuration

$$
\begin{equation*}
\vec{n}(j) \rightarrow(-1)^{j} \vec{n}(j) \tag{7.58}
\end{equation*}
$$

On a bipartite lattice, the substitution of Eq. (7.58) into Eq. (7.57) will change the sign of the exchange term of the action to a ferromagnetic one. The Wess-Zumino terms are odd under the replacement of Eq. (7.58) and thus become staggered. Thus, it is the Wess-Zumino term, a purely quantum-mechanical effect, which will
distinguish ferromagnets from antiferromagnets. After staggering the spins we get, up to an additive constant,

$$
\begin{equation*}
\mathcal{S}_{\mathrm{M}}[\vec{n}]=S \sum_{j=1}^{N}(-1)^{j} \mathcal{S}_{\mathrm{WZ}}[\vec{n}(j)]-\frac{J S^{2}}{2} \int_{0}^{T} d x_{0} \sum_{j=1}^{N}\left(\vec{n}\left(j, x_{0}\right)-\vec{n}\left(j+1, x_{0}\right)\right)^{2} \tag{7.59}
\end{equation*}
$$

We now split the (staggered) spin field $\vec{n}$ into a slowly varying piece $\vec{m}(j)$, the order parameter field, and a small rapidly varying part, $\vec{l}(j)$, which roughly represents the average spin (Affleck, 1990). Hence, we write

$$
\begin{equation*}
\vec{n}(j)=\vec{m}(j)+(-1)^{j} a_{0} \vec{l}(j) \tag{7.60}
\end{equation*}
$$

The constraint $\vec{n}^{2}=1$ and the requirement that the order-parameter field $\vec{m}$ should obey the same constraint, $\vec{m}^{2}=1$, demand that $\vec{m}$ and $\vec{l}$ be orthogonal vectors:

$$
\begin{equation*}
\vec{m} \cdot \vec{l}=0 \tag{7.61}
\end{equation*}
$$

The Wess-Zumino terms are rewritten as

$$
\begin{equation*}
S \sum_{j=1}^{N}(-1)^{j} \mathcal{S}_{\mathrm{WZ}}[\vec{n}(j)]=S \sum_{r=1}^{N / 2}\left(\mathcal{S}_{\mathrm{WZ}}[\vec{n}(2 r)]-\mathcal{S}_{\mathrm{WZ}}[\vec{n}(2 r-1)]\right) \tag{7.62}
\end{equation*}
$$

which, by making use of the approximation

$$
\begin{align*}
\vec{n}(2 r)-\vec{n}(2 r-1) & =\vec{m}(2 r)-\vec{m}(2 r-1)+a_{0}(\vec{l}(2 r)+\vec{l}(2 r-1)) \\
& =a_{0}\left(\partial_{1} \vec{m}(2 r)+2 \vec{l}(2 r)\right)+O\left(a_{0}^{2}\right) \tag{7.63}
\end{align*}
$$

becomes

$$
\begin{align*}
S \sum_{j=1}^{N}(-1)^{j} \mathcal{S}_{\mathrm{WZ}}[\vec{n}(j)] \approx & S \sum_{r=1}^{N / 2} \int_{0}^{T} d x_{0} \delta \vec{n}\left(2 r, x_{0}\right) \cdot\left(\vec{n}\left(2 r, x_{0}\right) \times \partial_{0} \vec{n}\left(2 r, x_{0}\right)\right) \\
\approx & S \sum_{r=1}^{N / 2} \int_{0}^{T} d x_{0}\left(a_{0} \partial_{1} \vec{m}\left(2 r, x_{0}\right)+2 a_{0} \vec{l}\left(2 r, x_{0}\right)\right) \\
& \times\left(\vec{m}\left(2 r, x_{0}\right) \times \partial_{0} \vec{m}\left(2 r, x_{0}\right)\right) \tag{7.64}
\end{align*}
$$

Thus, in the continuum limit, one finds

$$
\begin{align*}
\lim _{a_{0} \rightarrow 0} S \sum_{j=1}^{N}(-1)^{j} \mathcal{S}_{\mathrm{WZ}}[\vec{n}(j)] \approx & \frac{S}{2} \int d^{2} x \vec{m} \cdot\left(\partial_{0} \vec{m} \times \partial_{1} \vec{m}\right) \\
& +S \int d^{2} x \vec{l} \cdot\left(\vec{m} \times \partial_{0} \vec{m}\right) \tag{7.65}
\end{align*}
$$

Similarly, the continuum limit of the potential-energy terms can also be found to be given by

$$
\begin{align*}
& \lim _{a_{0} \rightarrow 0} \frac{J S^{2}}{2} \sum_{j=1}^{N} \int_{0}^{T} d x_{0}\left(\vec{n}\left(j, x_{0}\right)-\vec{n}\left(j+1, x_{0}\right)\right)^{2} \\
& \simeq \frac{a_{0} J S^{2}}{2} \int d^{2} x\left(\left(\partial_{1} \vec{m}\right)^{2}+4 \vec{l}^{2}\right) \tag{7.66}
\end{align*}
$$

On collecting terms we find a Lagrangian density involving both the orderparameter field $\vec{m}$ and the local spin density $\vec{l}$,

$$
\begin{align*}
\mathcal{L}_{\mathrm{M}}(\vec{m}, \vec{l})= & -2 a_{0} J S^{2} \vec{l}^{2}+s \vec{l} \cdot\left(\vec{m} \times \partial_{0} \vec{m}\right)-\frac{a_{0} J S^{2}}{2}\left(\partial_{1} \vec{m}\right)^{2} \\
& +\frac{S}{2} \vec{m} \cdot\left(\partial_{0} \vec{m} \times \partial_{1} \vec{m}\right) \tag{7.67}
\end{align*}
$$

The fluctuations in the average spin density $\vec{l}$ can be integrated out. The result is the Lagrangian density of the non-linear sigma model,

$$
\begin{equation*}
\mathcal{L}_{\mathrm{M}}(\vec{m})=\frac{1}{2 g}\left(\frac{1}{v_{\mathrm{s}}}\left(\partial_{0} \vec{m}\right)^{2}-v_{\mathrm{S}}\left(\partial_{1} \vec{m}\right)^{2}\right)+\frac{\theta}{8 \pi} \epsilon_{\mu \nu} \vec{m} \cdot\left(\partial_{\mu} \vec{m} \times \partial_{\nu} \vec{m}\right) \tag{7.68}
\end{equation*}
$$

where $g$ and $v_{\mathrm{s}}$ are, respectively, the coupling constant and spin-wave velocity:

$$
\begin{gather*}
g=\frac{2}{S}  \tag{7.69}\\
v_{\mathrm{s}}=2 a_{0} J S \tag{7.70}
\end{gather*}
$$

The last term in Eq. (7.68) has topological significance. We have chosen the normalization so that the coupling constant $\theta$ is given by

$$
\begin{equation*}
\theta=2 \pi S \tag{7.71}
\end{equation*}
$$

The tensor $\epsilon_{\mu \nu}$ is the usual Levi-Civita antisymmetric tensor in two dimensions.
Thus, apart from an anisotropy determined by the spin-wave velocity $v_{\mathrm{s}}$ and apart from the topological term, we find that the effective action for the lowfrequency, long-wavelength fluctuation about a state with short-range Néel order is given by the non-linear sigma model. We reached the same results within the weak-coupling mean-field theory of the half-filled Hubbard model of Chapter 3. Indeed, using that approach, it is also possible to get the topological term (Wen and Zee, 1988).

### 7.6 The role of topology

In the past section we reached the conclusion that the low-energy excitations of a 1D quantum antiferromagnet with short-range Néel order can be described by the path integral of a non-linear sigma model with a topological term

$$
\begin{equation*}
Z=\int \mathcal{D} \vec{m} \prod_{x} \delta\left(\vec{m}^{2}(x)-1\right) e^{i S_{\mathrm{eff}}[\vec{m}(x)]} \tag{7.72}
\end{equation*}
$$

with the effective action obtained from Eq. (7.68). Before considering the role of local quantum fluctuations, which are of fundamental importance here, we look at the role of the last term in the action, the topological term $\mathcal{S}_{\text {topo }}$ :

$$
\begin{equation*}
\mathcal{S}_{\text {topo }}=\frac{\theta}{8 \pi} \int d^{2} x \epsilon_{\mu \nu} \vec{m} \cdot\left(\partial_{\mu} \vec{m} \times \partial_{\nu} \vec{m}\right) \tag{7.73}
\end{equation*}
$$

Let us consider first the Euclidean sector of the theory (i.e. we are back to imaginary time $x_{2}=i x_{0}$ ) with the Lagrangian density $\mathcal{L}_{\mathrm{E}}$,

$$
\begin{equation*}
\mathcal{L}_{\mathrm{E}}=\frac{1}{2 g}\left(v_{\mathrm{s}}\left(\partial_{1} \vec{m}\right)^{2}+\frac{1}{v_{\mathrm{s}}}\left(\partial_{2} \vec{m}\right)^{2}\right)+i \frac{\theta}{8 \pi} \epsilon_{i j} \vec{m} \cdot\left(\partial_{i} \vec{m} \times \partial_{j} \vec{m}\right) \tag{7.74}
\end{equation*}
$$

We now define the Pontryagin index or topological charge (or winding number) $\mathcal{Q}$ of the Euclidean-space spin configuration $\{\vec{m}(x)\}$ by the expression

$$
\begin{equation*}
\mathcal{Q}=\frac{1}{8 \pi} \int d^{2} x \epsilon_{i j} \vec{m} \cdot\left(\partial_{i} \vec{m} \times \partial_{j} \vec{m}\right) \tag{7.75}
\end{equation*}
$$

We impose the boundary condition that the Euclidean action $\int d^{2} x \mathcal{L}_{\mathrm{E}}[\vec{m}]$ be finite. This is equivalent to the requirement that asymptotically $\vec{m}$ becomes a constant (but arbitrary) vector $\vec{m}_{0}$ at spatial-time infinity,

$$
\begin{equation*}
\lim _{|\vec{x}| \rightarrow \infty} \vec{m}(\vec{x})=\vec{m}_{0} \tag{7.76}
\end{equation*}
$$

Thus, topologically, 2D Euclidean space-time is isomorphic to a sphere $S_{2}$ since the fields are identified with $\vec{m}_{0}$ at the point of infinity (Fig. 7.6). However, the orderparameter manifold (the "target space") is also isomorphic to a sphere $S_{2}$, since the constraint $\vec{m}^{2}=1$ has to be satisfied everywhere. Therefore, a field configuration $\vec{m}(x)$ with finite Euclidean action is thus a smooth (differentiable) mapping from the $S_{2}$ of Euclidean space-time to the $S_{2}$ of the order-parameter manifold (the target space) (Fig. 7.7).

The Pontryagin index $\mathcal{Q}[\vec{m}]$ is the topological charge (or winding number) in the sense that it counts how many times the spin configuration $\vec{m}$ has wrapped around the sphere $S_{2}$, as can be checked by comparing the definition of $\mathcal{Q}$, Eq. (7.75), with
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-224.jpg?height=554&width=1044&top_left_y=193&top_left_x=333)

Figure 7.6 A finite-action spin configuration in Euclidean space-time (a) is isomorphic to one on the sphere $S_{2}$ (b).
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-224.jpg?height=359&width=796&top_left_y=875&top_left_x=457)

Figure 7.7 The mapping $\vec{m}(\vec{x}): S_{2} \rightarrow S_{2}$ of the 2 -sphere base space to the 2 -sphere target space.
the area formula of Eq. (7.28). We can make these ideas more concrete by considering a configuration $\vec{m}(x)$ representing an instanton (Fig. 7.8(a)). Let the field at infinity point parallel to $\vec{m}_{0}$, the north pole of $S_{2}$. In the case of an instanton, the field near the origin points oppositely to $\vec{m}_{0}$, i.e. in the direction of the south pole. Alternatively, we can look at the configuration on $S_{2}$. Here it looks like a magnetic monopole or a hairy ball (Fig. 7.8(b)). The winding number $\mathcal{Q}$ of this configuration is determined by the area of the sphere divided by $4 \pi$ (i.e. the "magnetic flux"),

$$
\begin{equation*}
\mathcal{Q}=\left(\frac{1}{4 \pi}\right) 4 \pi=+1 \tag{7.77}
\end{equation*}
$$

Thus, an instanton has winding number (or topological charge) $\mathcal{Q}=+1$. An antiinstanton has $\mathcal{Q}=-1$. It is also possible to find multi-instanton configurations with arbitrary integral winding number $\mathcal{Q}$.

We conclude that the smooth configurations $\vec{m}(x)$ can be classified according to their winding number or topological charge $\mathcal{Q}$ : configurations that can be
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-225.jpg?height=640&width=1265&top_left_y=188&top_left_x=213)

Figure 7.8 (a) An instanton configuration in 2D Euclidean space-time, with topological charge $\mathcal{Q}=1$. In $(2+1)$ dimensions this configuration is known as a skyrmion or hedgehog (see the more artistic version of the skyrmion on the cover of this book). (b) An instanton on $S_{2}$ has the same topology as a monopole, that of a "hairy ball."
smoothly deformed into each other have the same topological charge $\mathcal{Q}$. Thus smooth configurations $\{\vec{m}(x)\}$ can be classified into a discrete set of equivalence classes, each labeled by an integer, their topological charge. Such smooth configurations, known as homotopies, form a group, known as a homotopy group, since the composition of two configurations (two smooth mappings) yields another smooth configuration whose topological charge is the sum (with their signs) of the individual topological charges. In other words, the configurations $\vec{m}(x)$ are mappings of $S_{2}$ into $S_{2}$ with homotopy classes classified by a topological invariant, namely the Pontryagin index $\mathcal{Q}$, which can take only integer values (positive or negative). In mathematical terms this homotopy group is represented by the expression

$$
\begin{equation*}
\pi_{2}\left(S_{2}\right)=\mathbb{Z} \tag{7.78}
\end{equation*}
$$

A clear and detailed explanation of homotopy theory in condensed matter physics is given in Mermin (1979).

Similarly, the vortices of a 2D superfluid (or, equivalently, of a classical $X Y$ model), as discussed in Chapter 4, are topological excitations classified by a topological invariant $n \in \mathbb{Z}$, the winding number of the vortex. This winding number classifies the maps of the phase of the order-parameter field on a large circumference $S_{1}$ onto the target space of the complex order-parameter field itself, which is another $S_{1}$. Hence the homotopy classes for 2D vortices are

$$
\begin{equation*}
\pi_{1}\left(S_{1}\right) \simeq \mathbb{Z} \tag{7.79}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-226.jpg?height=189&width=690&top_left_y=186&top_left_x=510)

Figure 7.9 A half-twist soliton: the circles represent the precession of the spins.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-226.jpg?height=602&width=526&top_left_y=478&top_left_x=592)

Figure 7.10 The history of a half-twist soliton: the circles ("parallels") represent the precession of the spins.

Back in real time we can consider soliton configurations, such as the half-twist of Fig. 7.9. As time goes by, each spin traces a closed path on the target sphere $S_{2}$ and hence it sweeps an area bound by the path. If we define that the area swept by a spin at $-\infty$ is equal to zero, we see that as we move from left to right the spins sweep an increasingly large area. At $+\infty$ the area swept is that of a full sphere, $4 \pi$. It is easy to see that $\mathcal{Q}$ is also equal to 1 for the half-twist. At each point in space, the spins are coherently precessing and keeping their relative angles constant. In other words, the spins trace lines of longitude on a sphere. The global configuration still looks like a monopole and hence also has winding number $\mathcal{Q}=+1$ (Fig. 7.10).

The final conclusion is that the topological term, Eq. (7.73), is proportional to an integer $\mathcal{Q}$. The action in the path integral of Eq. (7.72) has a contribution equal to $2 \pi S \mathcal{Q}$, which should be added to the standard sigma-model term. Since $S$ is an integer or a half-integer, we find that the extra, topological, term gives a contribution to the weight of a configuration in the path integral of

$$
\begin{equation*}
e^{i 2 \pi S \mathcal{Q}}=(-1)^{2 S \mathcal{Q}} \tag{7.80}
\end{equation*}
$$

Thus, if $S$ is an integer, the spin chain is described at low energies by the standard non-linear sigma model, without a topological term. On the other hand, for halfintegral $S$, each topological class contributes to the weight of the path integral with a sign that is positive (negative) if the winding number $\mathcal{Q}$ is even (odd). Note that the sign does not depend on the actual value of the spin $S$, but only on whether it is an integer or a half-integer. This means that the physics of this problem is not analytic in $S$ : the integer- and half-integer-spin chains fall in different universality classes. We will now see that this property implies a very important result, known as Haldane's conjecture, that states that the integer-spin chains are massive (i.e. have an energy gap), whereas the half-integer-spin chains are massless as in the spin one-half case.

### 7.7 Quantum fluctuations and the renormalization group

In the previous section we saw that the configuration space of the non-linear sigma model can be partitioned into classes classified by their winding numbers

$$
\begin{equation*}
\mathcal{Q}=\frac{1}{8 \pi} \int d^{2} x \epsilon_{a b c} \epsilon_{i j} m_{a} \partial_{i} m_{b} \partial_{j} m_{c} \tag{7.81}
\end{equation*}
$$

which is a topological invariant. Thus, the partition function can be represented as a sum over distinct topological sectors, labeled by the topological charge $Q$,

$$
\begin{equation*}
Z=\int \mathcal{D} \vec{m} e^{-\mathcal{S}_{\mathrm{E}}[\vec{m}]}=\sum_{\mathcal{Q}=0}^{\infty} \int_{\mathcal{Q}} \mathcal{D} \vec{m} e^{-\mathcal{S}_{0}^{\mathrm{E}}[\vec{m}]} e^{i 2 \pi S \mathcal{Q}} \tag{7.82}
\end{equation*}
$$

where the subindex $\mathcal{Q}$ indicates that the path integral is to be taken over configurations with a fixed winding number $\mathcal{Q}$ and $\mathcal{S}_{0}^{\mathrm{E}}[\vec{m}]$ is the standard action of the non-linear sigma model

$$
\begin{equation*}
\mathcal{S}_{0}^{\mathrm{E}}[\vec{m}]=\int d^{2} x \frac{1}{2 g}\left(\nabla_{i} \vec{m}\right)^{2} \tag{7.83}
\end{equation*}
$$

where space and time have been rescaled so as to have $v_{\mathrm{s}}=1$.
In this section we will consider the role of quantum fluctuations. We can do so by considering each topological class separately since these quantum fluctuations are local and do not alter the winding number. In other words, the winding number of a class of configurations cannot be changed by local fluctuations, since the former is a global property, whereas the latter are purely local. Naturally, for this picture to hold it is necessary that the short distance (ultraviolet) and the long distance (infrared) of the theory remain separate. We will see that this is not the case in one space dimension. The behavior of the non-linear sigma model is dominated by infrared fluctuations. Thus the actual role, in detail, of topological sectors is unclear.

We will pretend that the fluctuations are local and reasonably small. This assumption amounts to a semi-classical treatment of the path integral. Formally, this can be achieved only if the coupling constant $g$ is small, i.e. in the limit $S \rightarrow \infty$. The standard perturbative treatment of the non-linear sigma model is thus equivalent, at low energies, to the $1 / S$ expansion of the Heisenberg antiferromagnet (Haldane, 1983a, 1983c). The classical action of the non-linear sigma model, Eq. (7.83), has a very important property: it is scale-invariant. In other words the scale transformation

$$
\begin{equation*}
(x, t) \rightarrow \lambda(x, t), \quad \vec{m} \rightarrow \vec{m} \tag{7.84}
\end{equation*}
$$

leaves the action invariant. Recall that $\vec{m}$ is dimensionless, and that the coupling constant $g$ is also dimensionless in $(1+1)$ dimensions. In higher dimensions, $g$ is dimension-full. Let us define the dimensionless coupling constant $u$,

$$
\begin{equation*}
u=g a_{0}^{2-d} \tag{7.85}
\end{equation*}
$$

where $d$ is the dimension of space-time. Thus the action now reads

$$
\begin{equation*}
\mathcal{S}_{0}^{\mathrm{E}}[\vec{m}]=\frac{1}{2 u a_{0}^{d-2}} \int d^{d} x\left(\nabla_{i} \vec{m}\right)^{2} \tag{7.86}
\end{equation*}
$$

where $i=1, \ldots, d$. For the sake of simplicity the discussion will be carried out in Euclidean space (i.e. imaginary time).

In renormalization-group theory (Wilson and Kogut, 1974), which was discussed in detail in Chapter 4, the fact that the classical action is scale-invariant means that $g=0$ is a fixed point of the renormalization group (RG). I will define $a$ renormalization-group transformation for the non-linear sigma model by progressively integrating out the faster modes and obtaining an effective theory for the slower modes. This procedure involves only local degrees of freedom. Topological invariants, such as a $\theta$ term in the Lagrangian of the non-linear sigma model, do not get renormalized under the effects of integrating out local fluctuations. In addition, as we saw before, the value of $\theta=n \pi$ (with $n \in \mathbb{Z}$ ) is fixed by the requirement of time-reversal invariance, a symmetry that the antiferromagnet has (in combination with a unit lattice translation).

In general, the field $\vec{m}$ will have Fourier components with momenta $\vec{p}$ ranging from the infrared $(|\vec{p}| \approx 0)$ to the ultraviolet $\left(|\vec{p}| \approx 1 / a_{0}\right)$. We can also use the constraint $\vec{m}^{2}=1$ to demand that one of the components of the field $\vec{m}$, say $m_{3}$, has only fast components and that it be small (Kogut, 1979). Let $m_{1}$ and $m_{2}$ be parametrized by $m_{3}$ and $\phi(0 \leq \phi \leq 2 \pi)$,

$$
\begin{equation*}
m_{1}=\sqrt{1-m_{3}^{2}} \cos \phi, \quad m_{2}=\sqrt{1-m_{3}^{2}} \sin \phi \tag{7.87}
\end{equation*}
$$

so as to solve the constraint $\vec{m}^{2}=1$. The Euclidean Lagrangian density now reads

$$
\begin{align*}
\mathcal{L}_{0}^{\mathrm{E}} & =\frac{1}{2 u a_{0}^{d-2}}\left(\nabla_{i} \vec{m}\right)^{2} \\
& =\frac{1}{2 u a_{0}^{d-2}}\left[\left(\nabla_{i} m_{3}\right)^{2}+\left(1-m_{3}^{2}\right)\left(\nabla_{i} \phi\right)^{2}+\frac{\left(m_{3} \nabla_{i} m_{3}\right)^{2}}{1-m_{3}^{2}}\right] \tag{7.88}
\end{align*}
$$

Let us rescale the field $m_{3}$,

$$
\begin{equation*}
m_{3}=\sqrt{u a_{0}^{d-2}} \varphi \tag{7.89}
\end{equation*}
$$

and write

$$
\begin{align*}
\mathcal{L}_{0}^{\mathrm{E}}= & \frac{1}{2}\left(\nabla_{i} \varphi\right)^{2}+\frac{1}{2 u a_{0}^{d-2}}\left(1-u a_{0}^{d-2} \varphi^{2}\right)\left(\nabla_{i} \phi\right)^{2} \\
& +\frac{1}{2}\left(\frac{u a_{0}^{d-2}}{1-u a_{0}^{d-2} \varphi^{2}}\right)\left(\varphi \nabla_{i} \varphi\right)^{2} \tag{7.90}
\end{align*}
$$

We will be interested in the behavior for small $g$ (i.e. small $u$ ). In this limit we can approximate $\mathcal{L}_{0}^{\mathrm{E}}$ by the expression

$$
\begin{align*}
\mathcal{L}_{0}^{\mathrm{E}}= & \frac{1}{2}\left(\nabla_{i} \varphi\right)^{2}+\frac{1}{2 u a_{0}^{d-2}}\left(\nabla_{i} \phi\right)^{2}-\frac{1}{2} \varphi^{2}\left(\nabla_{i} \phi\right)^{2} \\
& +\frac{1}{2} u a_{0}^{d-2}\left(\varphi \nabla_{i} \varphi\right)^{2}+\frac{1}{2} u^{2} a_{0}^{2(d-2)} \varphi^{2}\left(\varphi \nabla_{i} \varphi\right)^{2}+O\left(u^{3}\right) \tag{7.91}
\end{align*}
$$

Both $\varphi$ and $\theta$ have Fourier components all the way from zero momentum up to the cutoff $\Lambda \sim 1 / a_{0}$. The behavior at large momenta $|\vec{p}| \sim \Lambda$ should not affect very strongly phenomena taking place for small values of $\vec{p}$. It is then natural to integrate out such fluctuations.

Consider the momentum shell $b \Lambda<|\vec{p}|<\Lambda$ with $b<1$ and the fluctuations with momenta inside that shell (fast modes). We now will carry out the functional integral

$$
\begin{align*}
& \int_{b \Lambda<|\vec{p}|<\Lambda} \mathcal{D} \varphi e^{-\mathcal{S}_{0}^{\mathrm{E}}[\varphi, \phi]} \\
& =\int_{b \Lambda<|\vec{p}|<\Lambda} \mathcal{D} \varphi(\vec{p}) \exp \left[-\frac{1}{2} \int d^{d} x\left(\left(\nabla_{i} \varphi\right)^{2}+\frac{1}{u a_{0}^{d-2}}\left(\nabla_{i} \phi\right)^{2}-\varphi^{2}\left(\nabla_{i} \phi\right)^{2}+O(u)\right)\right] \tag{7.92}
\end{align*}
$$

I will assume that $\phi$ is slowly varying and, hence, that $\left(\nabla_{i} \phi\right)^{2}$ is small and does not have Fourier components in the shell $b \Lambda<|\vec{p}|<\Lambda$ provided that $b \rightarrow 1$. Thus,

$$
\begin{gather*}
\int_{b \Lambda<|\vec{p}|<\Lambda} \mathcal{D} \varphi(\vec{p}) \\
\quad \exp \left(-\frac{1}{2} \int \frac{d^{d} p}{(2 \pi)^{d}} \vec{p}^{2}|\varphi(\vec{p})|^{2}+\frac{1}{2} \int \frac{d^{d} p}{(2 \pi)^{d}}|\varphi(\vec{p})|^{2}\left(\nabla_{i} \phi\right)^{2}\right)  \tag{7.93}\\
\\
\approx \prod_{b \Lambda<|\vec{p}|<\Lambda}\left[\frac{2 \pi}{\vec{p}^{2}-(\nabla \phi)^{2}}\right]^{1 / 2}
\end{gather*}
$$

The right-hand side of Eq. (7.93) can be exponentiated and approximated by the expression

$$
\begin{equation*}
\exp \left[\frac{1}{2} \int_{b \Lambda<|\vec{p}|<\Lambda} \frac{d^{d} p}{(2 \pi)^{d}} \ln \left(\frac{2 \pi}{\vec{p}^{2}}\right)+\frac{1}{2}\left(\nabla_{i} \phi\right)^{2} \int_{b \Lambda<|\vec{p}|<\Lambda} \frac{d^{d} p}{(2 \pi)^{d}} \frac{1}{\vec{p}^{2}}\right] \tag{7.94}
\end{equation*}
$$

To lowest order in $u$, the main effects of integrating out the fast modes in $\varphi$ are twofold: (a) a shift of energy and (b) a shift, or renormalization, of the coupling constant $u$. Indeed, we can recast Eqs. (7.92)-(7.94) into the effective Lagrangian density

$$
\begin{align*}
\mathcal{L}_{\text {eff }}^{\mathrm{E}}[\phi]= & -\frac{1}{2} \int_{b \Lambda<|\vec{p}|<\Lambda} \frac{d^{d} p}{(2 \pi)^{d}} \ln \left(\frac{2 \pi}{\vec{p}^{2}}\right) \\
& +\frac{1}{2}\left(\nabla_{i} \varphi\right)^{2}+\frac{1}{2}\left(\frac{1}{u a_{0}^{d-2}}-\int_{b \Lambda<|\vec{p}|<\Lambda} \frac{d^{d} p}{(2 \pi)^{d}} \frac{1}{\vec{p}^{2}}\right)\left(\nabla_{i} \phi\right)^{2} \\
& -\frac{1}{2} \varphi^{2}\left(\nabla_{i} \phi\right)^{2}+O(u), \tag{7.95}
\end{align*}
$$

with a momentum cutoff $\Lambda^{\prime}$ which has been reduced by $b$. Equivalently, the spatial cutoff $a_{0}^{\prime}$ has been increased by $1 / b$ :

$$
\begin{equation*}
\Lambda^{\prime}=b \Lambda, \quad a_{0}^{\prime}=\frac{a_{0}}{b} \tag{7.96}
\end{equation*}
$$

The effective Lagrangian density for the slow modes $\mathcal{L}_{\text {eff }}^{\mathrm{E}}[\phi]$ has the same form as the old Lagrangian density except for a constant shift (of the energy density), a new rescaled cutoff $a_{0}^{\prime}\left(a_{0}^{\prime}>a_{0}\right)$, and a new renormalized coupling constant $u^{\prime}$ defined by

$$
\begin{equation*}
\frac{1}{u^{\prime} a_{0}^{\prime d-2}}=\frac{1}{u a_{0}^{d-2}}-\int_{b \Lambda<|\vec{p}|<\Lambda} \frac{d^{d} p}{(2 \pi)^{d}} \frac{1}{\vec{p}^{2}} \tag{7.97}
\end{equation*}
$$

After evaluating the integral, we get

$$
\begin{equation*}
\frac{1}{u^{\prime} a_{0}^{\prime d-2}}=\frac{1}{u a_{0}^{d-2}}-\frac{S_{d}}{(2 \pi)^{d}}\left(\frac{1-b^{d-2}}{d-2}\right) \Lambda^{d-2} \tag{7.98}
\end{equation*}
$$

where $S_{d}$ is the area of the $d$-dimensional unit sphere. Since $b \rightarrow 1$ and $a_{0}^{\prime}=a_{0} / b$, we can write

$$
\begin{equation*}
-\ln b=\frac{d a_{0}}{a_{0}} \tag{7.99}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-231.jpg?height=148&width=882&top_left_y=209&top_left_x=409)

Figure 7.11 Renormalization-group infrared flow for 1D quantum spin chains; $u_{0}$ is the bare coupling constant $\left(u_{0}=(2 / S) a_{0}^{2-d}\right)$.
and find the (one-loop) RG $\beta$-function

$$
\begin{equation*}
\beta(u)=a_{0} \frac{d u}{d a_{0}} \tag{7.100}
\end{equation*}
$$

to be given by

$$
\begin{equation*}
\beta(u)=-\epsilon u+\frac{u^{2}}{2 \pi}+O\left(u^{3}\right) \tag{7.101}
\end{equation*}
$$

for $\epsilon=d-2$ small.
In particular in $(1+1)$ dimensions $(d=2)$ we find a positive $\beta$-function (Polyakov, 1975).

$$
\begin{equation*}
\beta(u)=\frac{u^{2}}{2 \pi}+O\left(u^{2}\right) \tag{7.102}
\end{equation*}
$$

This result means that as the cutoff $a_{0}$ is increased, and we look at longer and longer distances, the fluctuations increase the effective value of the coupling constant at such scales (see Fig. 7.11). Thus, even though the bare coupling constant $u_{0} \propto 1 / S$ may be initially small, as we consider the effective theory at lower energies we find that the effective coupling ("effective $S$ ") increases (decreases). From classical statistical mechanics we know that the sigma model at strong coupling (i.e. the classical Heisenberg ferromagnet at high temperatures) is disordered and has a finite correlation length. Thus, in the language of the quantum spin chains, we get that as the "effective $S$ " decreases the semi-classical behavior gets wiped out. Instead we find a state without spontaneous symmetry breaking and with shortrange correlations.

### 7.8 Asymptotic freedom and Haldane's conjecture

In the last section we found the result that the effective coupling constant of the non-linear sigma model in $(1+1)$ dimensions increases with the length scale. We have chosen to present this result in the form of a $\beta$-function, Eq. (7.102), which measures the change of the coupling constant $u$ as the cutoff $a_{0}$ (the lattice constant) is increased and the fast degrees of freedom of the system are progressively integrated out. Alternatively, we could have kept the cutoff fixed and varied
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-232.jpg?height=481&width=994&top_left_y=201&top_left_x=346)

Figure 7.12 Euclidean space-time for a system of length $L$ at temperature $T$. With periodic boundary conditions in imaginary time, the time axis becomes a circle of length $1 / T$ and Euclidean space-time is a cylinder.
a physical scale such as the length $L$ of the chain or an energy scale such as the temperature $T$.

At finite temperature $T$, the system can be viewed (in imaginary time) as a nonlinear sigma model on a strip of length $L$ (the linear size of the chain) and width $1 / T$ with periodic boundary conditions in imaginary time. This is the standard statement that the partition function of a quantum system, with a global symmetry, in $d$ space dimensions is equivalent to a classical mechanics problem in $(d+1)$ dimensions with imaginary time being the extra dimension (Fradkin and Susskind, 1978) (Fig. 7.12). The renormalization group of the last section can easily be generalized to an anisotropic system with spin-wave velocity $v_{\mathrm{s}} \neq 1$, which is kept fixed in the RG process.

We begin our RG process with some lattice constant $a_{0}$, bare coupling $u_{0} \propto 1 / S$, and spin-wave velocity $v_{\mathrm{s}}$. As we integrate out degrees of freedom the effective coupling grows and the spatial cutoff increases. At some point, the cutoff $a$ becomes of the order of $v_{\mathrm{s}} / T$. At this point the quantum fluctuations are negligible since the cutoff is as large as the width of the strip and we have effectively a nonlinear sigma model at finite temperature $T$. In turn the non-linear sigma model, in imaginary time, is identical to the classical Heisenberg model in $d$ space-time Euclidean dimensions. It can be easily proven that a classical Heisenberg model (or non-linear sigma model) in one dimension, like all 1D classical systems with shortrange interactions, has a finite correlation length $\xi_{\mathrm{c}}$ at all temperatures (Landau and Lifshitz, 1975a).

We can now ask how much the effective coupling $u$ differs from the bare coupling $u_{0}$ if the cutoff is changed from $a_{0}$ to $\bar{a}_{0} \sim v_{\mathrm{s}} / T$. The $\beta$-function tells us the dependence of $u$ on the cutoff, at least for small enough $u$. The result of integrating the differential equation

$$
\begin{equation*}
\beta(u) \equiv a_{0} \frac{d u}{d a_{0}}=\frac{u^{2}}{2 \pi} \tag{7.103}
\end{equation*}
$$

is

$$
\begin{equation*}
\frac{1}{u\left(\bar{a}_{0}\right)}=\frac{1}{u\left(a_{0}\right)}+\frac{1}{2 \pi} \ln \left(\frac{a_{0}}{\bar{a}_{0}}\right) \tag{7.104}
\end{equation*}
$$

By choosing $\bar{a}_{0}$ to be of the order of $1 / T$,

$$
\begin{equation*}
\bar{a}_{0}=\frac{v_{\mathrm{s}}}{T} \tag{7.105}
\end{equation*}
$$

we find the temperature dependence of the coupling constant $u$ to be

$$
\begin{equation*}
\frac{1}{u(T)}=\frac{1}{u_{0}}+\frac{1}{2 \pi} \ln \left(\frac{a_{0} T}{v_{\mathrm{s}}}\right) \tag{7.106}
\end{equation*}
$$

Equivalently, we can write

$$
\begin{equation*}
u(T)=\frac{u_{0}}{1+\left(u_{0} /(2 \pi)\right) \ln \left(a_{0} T / v_{s}\right)} \tag{7.107}
\end{equation*}
$$

Thus, at high temperatures, $T \gg v_{\mathrm{s}} / a_{0}$, we find that the effective coupling $u(T)$ becomes small,

$$
\begin{equation*}
u(T) \approx \frac{2 \pi}{\ln \left(a_{0} T / v_{\mathrm{s}}\right)} \rightarrow 0 \quad \text { for } \quad T \rightarrow \infty \tag{7.108}
\end{equation*}
$$

In other words, the effective coupling at short distances or at high temperatures is small. This result is known as asymptotic freedom and, in this context, was first discussed by Polyakov (1975).

Conversely, as the temperature is lowered, the effective coupling $u$ becomes large (Fig. 7.13). Equation (7.107) exhibits an apparent divergence at a temperature $T_{0}$, where

$$
\begin{equation*}
T_{0} \approx \frac{v_{\mathrm{s}}}{a_{0}} e^{-\frac{2 \pi}{u_{0}}}=\frac{v_{\mathrm{s}}}{a_{0}} e^{-\pi S} \tag{7.109}
\end{equation*}
$$

The meaning of $T_{0}$ is that of the temperature at which the weak-coupling (i.e. $1 / S$ ) expansion breaks down. To continue down to lower temperatures, we must take into account the fact that for $T \leq T_{0}$ the sigma model has a large effective coupling. At this point we notice that, at large values of the coupling constant, the sigma model is disordered no matter what the dimensionality of space-time is. Thus we expect a finite, and short, correlation length $\xi$ and a finite mass (or energy) gap $\Delta=v_{\mathrm{s}} / \xi$. The effective coupling should saturate due to lattice effects and the constraint $\vec{m}^{2}=1$. These ideas have been confirmed by Monte Carlo RG studies (Shenker and Tobochnik, 1980).
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-234.jpg?height=466&width=647&top_left_y=197&top_left_x=527)

Figure 7.13 Crossover of the effective (or running) coupling $u_{\mathrm{eff}}(T)$. Here $T$ is the temperature.

We can also use the RG to estimate the dependence of the correlation length $\xi$ on the bare coupling constant $u_{0}=2 / S$. Under the RG, the correlation length $\xi$, like all other physical observables, remains invariant. From dimensional analysis we expect $\xi$, which is a length scale, to have the form

$$
\begin{equation*}
\xi(u)=a_{0} f(u) \tag{7.110}
\end{equation*}
$$

where $f$ is a function of $u$, the coupling constant at the scale $a_{0}$. Being an RG invariant, the correlation length $\xi$ must obey

$$
\begin{equation*}
a_{0} \frac{d \xi}{d a_{0}}=0 \tag{7.111}
\end{equation*}
$$

which implies that $f(u)$ satisfies the differential equation

$$
\begin{equation*}
\beta(u) \frac{d f}{d u}+f(u)=0 \tag{7.112}
\end{equation*}
$$

The solution to Eq. (7.112) is

$$
\begin{equation*}
f(u)=f\left(u^{\prime}\right) \exp \left(-\int_{u^{\prime}}^{u} \frac{d z}{\beta(z)}\right)=f\left(u^{\prime}\right) \exp \left[2 \pi\left(\frac{1}{u}-\frac{1}{u^{\prime}}\right)\right] \tag{7.113}
\end{equation*}
$$

where $u$ and $u^{\prime}$ are connected by the RG flow.
Consider now the correlation length $\xi$ at two different values of $u$, namely $u_{1}$ and $u_{2}$, for the same value of the lattice constant $a_{0}$. Let $u^{*}$ be a large reference value of the coupling $u$. From Eqs. (7.110) and (7.113), we find that the correlation length $\xi$ obeys

$$
\begin{equation*}
\xi\left(u_{i}\right)=a_{0} f\left(u_{i}\right)=a_{0} f\left(u^{*}\right) \exp \left(-\int_{u^{*}}^{u_{1}} \frac{d u}{\beta(u)}\right) \tag{7.114}
\end{equation*}
$$

for $i=1,2$. Thus the ratio of two values of $\xi$ for two different couplings and the same lattice spacing, $a_{0}$, is given by

$$
\begin{equation*}
\frac{\xi\left(u_{1}\right)}{\xi\left(u_{2}\right)}=\frac{a_{0} f\left(u^{*}\right) \exp \left(-\int_{u^{*}}^{u_{1}} \frac{d z}{\beta(z)}\right)}{a_{0} f\left(u^{*}\right) \exp \left(-\int_{u^{*}}^{u_{2}} \frac{d z}{\beta(z)}\right)} \tag{7.115}
\end{equation*}
$$

Thus, we get

$$
\begin{equation*}
\frac{\xi\left(u_{1}\right)}{\xi\left(u_{2}\right)}=\exp \left(-\int_{u_{2}}^{u_{1}} \frac{d z}{\beta(z)}\right) \tag{7.116}
\end{equation*}
$$

The integral can be easily evaluated to find

$$
\begin{equation*}
\frac{\xi\left(u_{1}\right)}{\xi\left(u_{2}\right)}=\exp \left(\frac{2 \pi}{u_{1}}-\frac{2 \pi}{u_{2}}\right) \tag{7.117}
\end{equation*}
$$

For the case in which $u_{1}=u_{0}=2 / S$ and $u_{2}$ is large, we find that

$$
\begin{equation*}
\xi\left(u_{0}\right) \approx \xi\left(u_{2}\right) e^{\pi S} \tag{7.118}
\end{equation*}
$$

What value should we assign to $\lim _{u_{2} \rightarrow \infty} \xi\left(u_{2}\right)$ ? The answer depends on whether the spin is integer or half-integer.

Integer spin. In this case we do not get a topological term. As was emphasized above, the sigma model is always disordered at strong coupling. Thus, we expect $\xi\left(u_{2}\right) \approx a_{0}$ and we find a finite correlation length

$$
\begin{equation*}
\xi_{0}=\xi\left(u_{0}\right) \approx a_{0} e^{\pi S} \tag{7.119}
\end{equation*}
$$

There is no long-range order (i.e. no Néel state). The spectrum has a gap

$$
\begin{equation*}
\Delta=\frac{v_{\mathrm{s}}}{\xi_{0}} \tag{7.120}
\end{equation*}
$$

and the ground state is unique. Equation (7.119) shows that the correlation length is non-perturbative in the $1 / S$ expansion.

Half-integer spin. The sigma-model coupling constant $u$ still scales to strong coupling but the topological term remains unchanged at the value $\theta=2 \pi S(\bmod$ $2 \pi)$. However, the coupling constant $g \propto u$ is related to the spin through $S=2 / g$. Thus strong coupling is equivalent to low spin. Hence the behavior of all half-integral-spin chains is qualitatively identical to the spin one-half case for which $u_{0} \propto 4$. The spin one-half case is gapless, as we saw from the Bethe-ansatz and other approaches. Thus, $\xi(\infty)$ is still infinite. All half-integral-spin chains are at a critical point with infinite correlation length. At first sight, this result seems to be paradoxical. We started with smooth configurations with well-defined winding numbers and a weak coupling $g$. As the energy scale was lowered the effective coupling of the sigma model grew but the topological coupling remained unaffected.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-236.jpg?height=552&width=780&top_left_y=197&top_left_x=467)

Figure 7.14 Schematic RG flows of quantum Heisenberg antiferromagnetic chains for $S=\frac{1}{2}, 1, \frac{3}{2}, 2$. The open circles represent their sigma-model bare coupling constant $u \approx 2 / S$. They all iterate to $u^{*}=\infty$. The difference in their behavior is a consequence of the presence of a $\theta=\pi$ term in the sigma model for the half-integer-spin chains. Notice that the value of $\theta$ does not flow under the $R G$.

Thus, at low energies, the configurations become rough and the actual meaning of the topological term in this situation is unclear. This poses no problems for the integer-spin chains since the topological term does not contribute in this case $(\theta=2 \pi S)$. In contrast, for half-integer-spin chains, this result simply means that, for all half-integer values of $S>\frac{1}{2}$, the systems behave qualitatively in the same way as in the $S=\frac{1}{2}$ case.

This result, namely $S$ integer is disordered and $S$ half-integer is critical, is known as Haldane's conjecture (Haldane, 1983a, 1983c). It has also been checked by accurate numerical calculations using exact diagonalization on finite (but large) chains (Moreo, 1987; Ziman and Schulz, 1987) and by Green-function Monte Carlo simulations (Liang, 1990b). Affleck and Haldane (1987) have also found the same result using non-abelian bosonization (Witten, 1984). The RG flows are shown in Fig. 7.14.

### 7.9 Hopf term or no Hopf term?

The 1D spin chains have a very unusual behavior: disorder (integer spin) or critical (half-integer spin) ground states, neutral fermions that are massless for the half-integer case and massive for $S$ integer, etc. There is nothing in this picture that is remotely close to the physics that emerges from the mean-field theory of Chapter 3. It is then natural to ask whether or not this picture is peculiar to 1D systems or whether there is a natural generalization to higher dimensions. It is a trivial matter to generalize the 1D formalism to the case of a square lattice. The lattice
action is a simple generalization of Eq. (7.57). Let $\vec{r}$ span a square lattice of size $N \times N: \vec{r}=\left(x_{1}, x_{2}\right)$, where $x_{1}, x_{2}=1, \ldots, N$. I will assume that $N$ is even. The action is

$$
\begin{equation*}
\mathcal{S}_{\mathrm{M}}[\vec{n}]=S \sum_{\vec{r}} \mathcal{S}_{\mathrm{WZ}}[\vec{n}(\vec{r})]-\int_{0}^{T} d x_{0} \sum_{\left\langle\vec{r}, \vec{r}^{\prime}\right\rangle} J S^{2} \vec{n}\left(\vec{r}, x_{0}\right) \vec{n}\left(\vec{r}^{\prime}, x_{0}\right) \tag{7.121}
\end{equation*}
$$

where $\vec{r}$ and $\vec{r}^{\prime}$ are nearest-neighboring sites on the square lattice. Since the square lattice is bipartite and we expect short-range Néel order, we will once again stagger the field configurations and find

$$
\begin{equation*}
\mathcal{S}_{\mathrm{M}}[\vec{n}]=S \sum_{\vec{r}}(-1)^{x_{1}+x_{2}} \mathcal{S}_{\mathrm{WZ}}[\vec{n}(\vec{r})]+\int_{0}^{T} d x_{0} \sum_{\left\langle\vec{r}, \vec{r}^{\prime}\right\rangle} J S^{2} \vec{n}\left(\vec{r}, x_{0}\right) \vec{n}\left(\vec{r}^{\prime}, x_{0}\right) \tag{7.122}
\end{equation*}
$$

It is straightforward, but tedious, to derive the effective action for the slowly varying fields. Once again, on the basis of symmetry, we expect a non-linear sigma model. The issue is whether or not there is a topological term in the effective action.

Before deriving the effective action by an explicit calculation, let us consider what topological terms are possible. In the $(1+1)$-dimensional case we saw that the configurations were classified in terms of an index, the topological charge, which labels the homotopy class of the configuration. The existence of such an index was guaranteed by the fact that the configurations fall into homotopy classes that form the group $\pi_{2}\left(S_{2}\right)$ of smooth maps of the 2D Euclidean space-time $S_{2}$ into the $S_{2}$ of the order-parameter manifold. This homotopy group $\pi_{2}\left(S_{2}\right)$ is isomorphic to $\mathbb{Z}$, the group of integers, i.e. the winding numbers of the topological classes. In $(2+1)$ dimensions the situation is rather different. Once again, the Euclidean space-time can be regarded as a sphere $S_{3}$ and the configurations are maps of $S_{3} \rightarrow S_{2}$.

However, there are no smooth solutions of the classical Euclidean equations of motion with non-trivial winding numbers. There are singular solutions known as hedgehogs (see Fig. 7.8(b)), which have a linearly divergent action. Haldane has argued that these hedgehogs may become relevant if the sigma model becomes disordered by some mechanism (Haldane, 1988b). In the next chapter, we will see that a next-nearest-neighbor antiferromagnetic interaction can trigger a quantum phase transition to a dimerized state, a state with a spin gap that does not break the $S U(2)$ symmetry of spin and breaks translation invariance and the pointgroup symmetry of the lattice. A scenario known as deconfined quantum criticality (Senthil et al., 2004a), in which hedgehog configurations may play a central role in this quantum phase transition, has been proposed.

On the other hand, there are non-trivial configurations in Minkowski space-time (i.e. in real time). Consider at some time $t=t_{0}$ a configuration of sigma-model
fields identical to one of the instantons of Section 7.6, see Fig. 7.8(a). Now it represents the snapshot of an eigenstate, a soliton known as a skyrmion. Thus the configuration space of a 2D quantum non-linear sigma model is also a sphere $S_{2}$ and is usually denoted by $\Omega_{2} S_{2}$. Consider now the real-time evolution of such a state with periodic boundary conditions in time, i.e. consider histories in which the initial state is the same as the final state. Thus, a history is a closed curve in the configuration space $\Omega_{2} S_{2}$. In quantum mechanics we are told to sum over all histories and to assign a phase to each history, i.e. to each curve in $\Omega_{2} S_{2}$. Since a phase is an element of $S_{1}$ (the unit circle) we have constructed the set of maps $\pi_{1}\left(\Omega_{2} S_{2}\right)$. However, we know that the configurations at any given time are maps of $S_{2}$ (space) into $S_{2}$ (field), i.e. homotopy classes of $\pi_{2}\left(S_{2}\right)$, which we saw was isomorphic to the group of integers $\mathbb{Z}$. Hence the configuration space $\Omega_{2} S_{2}$ is decomposed into a disjoint union of path-connected pieces, each characterized by the winding number or soliton number $\mathcal{Q}$. Thus each disconnected piece of the Hilbert space will have a separate time evolution and will have to be summed with separate phases. Since the classical paths are continuous curves in $\Omega_{2} S_{2}$ classified by $\pi_{3}\left(S_{2}\right)=\mathbb{Z}$, the relevant issue is now what topological invariant is associated with such histories.

Consider a history of the order-parameter field $\vec{m}(\vec{x}, t)$ in $(2+1)$ dimensions. We can define a topological current $J_{\mu}$ by

$$
\begin{equation*}
J_{\mu}=\frac{1}{8 \pi} \epsilon_{\mu \nu \lambda} \epsilon_{a b c} m_{a} \partial^{\nu} m_{b} \partial^{\lambda} m_{c} \tag{7.123}
\end{equation*}
$$

with $\mu=0,1,2$ and $a, b, c=1,2,3$. The topological current $J_{\mu}$ is clearly conserved,

$$
\begin{equation*}
\partial^{\mu} J_{\mu}=0 \tag{7.124}
\end{equation*}
$$

Therefore the total topological charge $\mathcal{Q}=\int d^{2} x J^{0}(\vec{x}, t)$ is constant in time,

$$
\begin{equation*}
Q=\int d^{2} x J^{0}(\vec{x}, t)=\int d^{2} x \frac{1}{8 \pi} \epsilon_{0 i j} \epsilon_{a b c} m_{a} \partial^{i} m_{b} \partial^{j} m_{c} \tag{7.125}
\end{equation*}
$$

Clearly $\mathcal{Q}$ is identical to the winding number $\mathcal{Q}$ of Eq. (7.75).
Consider now a soliton state with $\mathcal{Q}=1$ (Fig. 7.8(a)). Imagine a time evolution in which the soliton skyrmion rotates slowly around its center and executes exactly $n$ turns during its lifespan. Each point on the equator of the soliton traces a curve ("worldline") which wraps $n$ times around the other curves traced by the other points, a "world-tube" (Fig. 7.15). An easy way to compute the winding number of this history is to imagine that each worldline is a wire carrying a unit of current. As the soliton rotates, the worldlines ("wires") are braided. The natural topological invariant is the linking number of these worldlines (Fig. 7.16). If we denote by $\vec{j}$ the current carried by the wires and by $\vec{B}$ the magnetostatic field they create, the linking number is simply given by Ampère's law
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-239.jpg?height=711&width=894&top_left_y=191&top_left_x=401)

Figure 7.15 A world-tube with linking number +2 .
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-239.jpg?height=571&width=1063&top_left_y=1004&top_left_x=319)

Figure 7.16 (a) Two worldlines $\mathrm{PP}^{\prime}$ and $\mathrm{QQ}^{\prime}$ with linking number +1 . (b) Smooth deformation of the worldline $\mathrm{PP}^{\prime}$ and $\mathrm{QQ}^{\prime}$. (c) Periodic boundary conditions in time are enforced, P and $\mathrm{P}^{\prime}$ as well as Q and $\mathrm{Q}^{\prime}$ are identified and the worldlines form a braid.

$$
\begin{equation*}
\int d^{3} x \vec{j} \cdot \vec{B}=2 \pi n \tag{7.126}
\end{equation*}
$$

where $n$ is an integer that counts the number of turns.
We can make this analogy more precise by using the Hopf map, which maps the 3-sphere $S_{3}$ of Euclidean space-time onto the 2-sphere $S_{2}$ of the target manifold of the $\mathrm{O}(3)$ non-linear sigma model. Let $z_{1}$ and $z_{2}$ be two complex numbers satisfying

$$
\begin{equation*}
\left|z_{1}\right|^{2}+\left|z_{2}\right|^{2}=1 \tag{7.127}
\end{equation*}
$$

Clearly $\left(z_{1}, z_{2}\right)$ span the 3 -sphere $S_{3}$. Define now the spinor $z_{\alpha}(\alpha=1,2)$. The order-parameter field $\vec{m}$ is related to the complex spinor $z_{\alpha}$ through the map

$$
\begin{equation*}
m^{a}=z_{\alpha}^{*} \sigma_{\alpha \beta}^{a} z_{\beta} \tag{7.128}
\end{equation*}
$$

where $\left\{\sigma^{a}\right\}_{a=1,2,3}$ are the Pauli matrices. The order parameter $\vec{m}$ also satisfies $\vec{m}^{2}=1$. This is the Hopf map.

It is clear that $\left(z_{1}, z_{2}\right)$ has three independent parameters, whereas $\vec{m}$ has only two. But one of these parameters, or degrees of freedom, is unobservable since a global charge of phase of the spinor $z_{\alpha}$

$$
\begin{equation*}
\binom{z_{1}}{z_{2}} \rightarrow e^{i \phi}\binom{z_{1}}{z_{2}} \tag{7.129}
\end{equation*}
$$

does not lead to any observable effects because $\vec{m}$ is invariant under such gauge transformations.

Furthermore, the action of the non-linear sigma model itself can be written in terms of the spinor field $z_{\alpha}$. This is the $C P^{1}$ model. To simplify matters I will consider the problem with spin-wave velocity $v_{\mathrm{s}}=1$. Let $z_{\alpha}$ be a $C P^{1}$ field and $A_{\mu}$ an unconstrained gauge field, with Lagrangian density

$$
\begin{equation*}
\mathcal{L}_{C P^{1}}=\frac{1}{2 g}\left|D_{\mu} z\right|^{2} \tag{7.130}
\end{equation*}
$$

where $g$ is a coupling constant and $D_{\mu}$ is the covariant derivative

$$
\begin{equation*}
D_{\mu}=\partial_{\mu}-i A_{\mu} \tag{7.131}
\end{equation*}
$$

The functional integral is

$$
\begin{equation*}
Z=\int \mathcal{D} \bar{z} \mathcal{D} z \delta\left(|z|^{2}-1\right) \int \mathcal{D} A e^{i \mathcal{S}_{C P^{1}}[z, A]} \tag{7.132}
\end{equation*}
$$

Since $\mathcal{L}_{C P^{1}}$ is quadratic in the gauge field $A_{\mu}$, it can be integrated out exactly by a saddle-point calculation. The saddle-point condition

$$
\begin{equation*}
\frac{\delta \mathcal{L}_{C P^{1}}}{\delta A_{\mu}}=0 \tag{7.133}
\end{equation*}
$$

yields the gauge field as a function of the $C P^{1}$ field:

$$
\begin{equation*}
A_{\mu}=\frac{i}{2}\left(z_{\alpha}^{*} \partial_{\mu} z_{\alpha}-z_{\alpha} \partial_{\mu} z_{\alpha}^{*}\right) \equiv-\frac{i}{2} z_{\alpha}^{*} \partial_{\mu}^{\leftrightarrow} z_{\alpha} \tag{7.134}
\end{equation*}
$$

By substituting Eq. (7.134) into the Lagrangian density, Eq. (7.130), one finds

$$
\begin{equation*}
\frac{1}{2 g}\left(\partial_{\mu} \vec{m}\right)^{2}=\frac{1}{g}\left|D_{\mu} z\right|^{2} \tag{7.135}
\end{equation*}
$$

In other words, the $C P^{1}$ model and the $\mathrm{O}(3)$ non-linear sigma model are equivalent.

The topological invariant, or Hopf invariant, has a very simple and natural form in terms of the vector potentials $A_{\mu}$. Consider a term in the Lagrangian density of the form

$$
\begin{equation*}
\mathcal{L}_{\mathrm{CS}}=\frac{\theta}{4 \pi} \epsilon_{\mu \nu \lambda} A^{\mu} F^{\nu \lambda} \tag{7.136}
\end{equation*}
$$

which is known as a Chern-Simons term. The gauge field $A_{\mu}$ is constrained to be given by Eq. (7.134), and its field strength $F_{\mu \nu}$ can be related back to the sigmamodel field $\vec{m}$ by

$$
\begin{equation*}
F_{\mu \nu}=\partial_{\mu} A_{\nu}-\partial_{\nu} A_{\mu} \equiv \vec{m} \cdot\left(\partial_{\mu} \vec{m} \times \partial_{\nu} \vec{m}\right) \tag{7.137}
\end{equation*}
$$

Thus, the flux associated with the gauge field $A_{\mu}$ is simply related to the topological current. The Hopf invariant $H$ is simply

$$
\begin{equation*}
H=\frac{\theta}{8 \pi} \int d^{3} x \epsilon_{\mu \nu \lambda} A^{\mu} F^{\nu \lambda} \tag{7.138}
\end{equation*}
$$

with $A_{\mu}$ and $F_{\nu \lambda}$ given by Eqs. (7.134) and (7.137). We will see in Chapter 9 that a non-zero value of $\theta$ will change the statistics of the solitons (skyrmions).

But is there a Hopf term in the effective action of the quantum Heisenberg antiferromagnet in a 2D square lattice? The only way to determine that is to compute the effective action carefully. Dzyaloshinskii, Polyakov and Wiegmann (Dzyaloshinskii et al., 1988; Wiegmann, 1988) have conjectured that the effective action of the quantum antiferromagnet is a non-linear sigma model with a Hopf term with $\theta=2 \pi S$. This is a subtle business since Wu and Zee have shown that, in its $C P^{1}$ form, the Hopf term is a total derivative that does not alter the equations of motion but changes the spin and statistics of the topological excitations ( Wu and Zee, 1984).

To see whether a Hopf term does (or does not) arise, let us first derive the effective action, following the methods of Fradkin and Stone (1988). The result will be a sigma model without a topological term (Dombre and Read, 1988; Fradkin and Stone, 1988; Haldane, 1988b; Ioffe and Larkin, 1988; Wen and Zee, 1988).

First, we need to integrate out the fast degrees of freedom. We write

$$
\begin{equation*}
\vec{n}(\vec{r})=m(\vec{r})+(-1)^{x_{1}+x_{2}} a_{0} \vec{l}(\vec{r}) \tag{7.139}
\end{equation*}
$$

Following the same procedure as that which in the 1D case led to a sigma model with a topological term (see Eq. (7.67)), we find

$$
\begin{equation*}
\mathcal{L}_{\mathrm{eff}}^{\mathrm{M}}(\vec{m}, \vec{l})=-\frac{J S^{2}}{2}\left(\left(\partial_{i} \vec{m}\right)^{2}+8 \vec{l}^{2}\right)+\frac{S}{a_{0}} \vec{l} \cdot\left(\vec{m} \times \partial_{0} \vec{m}\right) \tag{7.140}
\end{equation*}
$$

If we now proceed to integrate out the fast modes, the $\vec{l}$ field, we find a non-linear sigma model without a topological term. The (bare) coupling constant and (bare) spin-wave velocity are given by (see Eqs. (7.69) and (7.70))

$$
\begin{align*}
g & =\sqrt{2} a_{0} \frac{2}{S} \\
v_{s} & =\sqrt{2} 2 a_{0} J S \tag{7.141}
\end{align*}
$$

The terms which in the 1D case gave rise to the topological term now have cancelled each other out (at least for smooth configurations). The reason for this cancellation can be traced back to the staggered character of the Néel state. Naively, we expect that each row will make a contribution similar to the 1 D result. But neighboring rows are staggered in the opposite way. The result is that the terms originating from each pair of neighboring rows now effectively cancel out. We are assuming a lattice with an even number of rows and columns. In the case of an odd number of rows, we may get a non-zero contribution from the last row. However, this is a boundary-condition effect which, incidentally, was not needed in the case of the chains. But we do expect to see changes in the spectrum of elementary excitations if we change the boundary conditions.

The argument which led to the cancellation is a bit too naive and maybe it is dangerous. We know from the work of Wu and Zee that, at least in the $C P^{1}$ representation, the Hopf term is a total derivative. Thus, a local cancellation is not a sufficient argument for the study of a global effect. Slowly varying configurations may have an accumulated effect near the boundaries and yield a non-zero answer. We can check this by computing the alternating sum $\Phi$,

$$
\begin{equation*}
\Phi=s \sum_{\vec{r}}(-1)^{x_{1}+x_{2}} \mathcal{S}_{\mathrm{WZ}}[\vec{n}(\vec{r})] \tag{7.142}
\end{equation*}
$$

for a configuration that, in the continuum limit, has soliton number $\mathcal{Q}=1$. If we let this soliton configuration rotate slowly around its center such that it turns exactly once during its history, the history of this configuration should have Hopf number or linking number +1 . We should choose a lattice configuration that, in the limit of soliton radius $r_{\mathrm{s}}$ large compared with the lattice spacing $a_{0}$, should go smoothly over to the continuum soliton. Any soliton profile should do the job. For instance, we can imagine a configuration obtained by a stereographic configuration
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-243.jpg?height=542&width=1024&top_left_y=192&top_left_x=331)

Figure 7.17 A soliton configuration can be generated using a stereographic projection. The spin is parallel-transported from the sphere to point $P=(n, m)$. Its history is pictured as an ellipse.
(Fig. 7.17). The area swept by each spin is $a=2 \pi R^{2}(1-\cos \theta)$. Thus the sum $\Phi(N)$, for a system of size $2 N \times 2 N$, is given by

$$
\begin{equation*}
\Phi(N)=\sum_{n, m=-N+1}^{N} 2 \pi s R^{2}(1-\cos \theta(n, m))(-1)^{n+m} \tag{7.143}
\end{equation*}
$$

The sphere has radius $R$ and its south pole, which has coordinates $\left(\alpha_{1}, \alpha_{2}\right)$, is in the first unit cell. The radius of the soliton $r_{\mathrm{s}}$ is equal to the diameter $2 R$ of the sphere, if we define the radius as the location in which the spins are orthogonal to the asymptotic configuration at spatial infinity. Hence we find

$$
\begin{equation*}
\Phi(N)=\sum_{n, m=-N+1}^{N} \frac{16 \pi s R^{4} e^{i \pi(n+m)}}{4 R^{2}+\left(n-\alpha_{1}\right)^{2}+\left(m-\alpha_{2}\right)^{2}} \tag{7.144}
\end{equation*}
$$

In the thermodynamic limit, $N \rightarrow \infty$, and by making use of the Poisson summation formula

$$
\begin{equation*}
\sum_{n=-\infty}^{+\infty} f(n)=\sum_{n=-\infty}^{+\infty} \int_{-\infty}^{+\infty} \frac{d k}{2 \pi} e^{i 2 \pi k n} f(k) \tag{7.145}
\end{equation*}
$$

we get for $\Phi \equiv \lim _{N \rightarrow \infty} \Phi(N)$

$$
\begin{equation*}
\Phi=\int \frac{d^{2} k}{(2 \pi)^{2}} \sum_{\vec{n}} \frac{16 \pi s R^{4} e^{i 2 \pi(\vec{k}+\vec{\alpha}) \cdot(\vec{n}+\vec{G})}}{4 R^{2}+\vec{k}^{2}} \tag{7.146}
\end{equation*}
$$

where $\vec{G}=\left(\frac{1}{2}, \frac{1}{2}\right)$. In the limit $R \rightarrow \infty$ it is easy to see that $\Phi$ is exponentially small since we can write

$$
\begin{equation*}
\Phi=\sum_{n_{1}, n_{2}=-\infty}^{+\infty} 8 s R^{4} e^{i 2 \pi \vec{\alpha} \cdot(\vec{n}+\vec{G})} K_{0}\left(\pi r_{\mathrm{s}}|\vec{n}+\vec{G}|\right) \tag{7.147}
\end{equation*}
$$

where $K_{0}(x)$ is the modified Bessel function. Thus, for $r_{\mathrm{s}} \gg 1$, we may keep just the leading terms:

$$
\begin{equation*}
\Phi \approx 4 s\left(\frac{r_{\mathrm{s}}}{\sqrt{2}}\right)^{5 / 2} e^{-\frac{2 \pi}{\sqrt{2}} r_{\mathrm{s}}+i 2 \pi\left(\alpha_{1}+\alpha_{2}\right)} \cos \left(\pi \alpha_{1}\right) \cos \left(\pi \alpha_{2}\right) \tag{7.148}
\end{equation*}
$$

This expression vanishes exponentially fast for solitons with radius $r_{\mathrm{s}} \gg 1 /(\pi \sqrt{2})$. Notice that even fairly small solitons with radius $r_{\mathrm{s}} \approx 1$ are "large" according to this criterion. We must conclude that if we expect to see Néel order (even if this were true only at short distances!) the effective theory at long distances is given by a non-linear sigma model with renormalized coupling constant and spin-wave velocity. Phenomenologically this is what the experiments in $\mathrm{La}_{2} \mathrm{CuO}_{4}$ indicate (Chakravarty et al., 1988). In Section 7.7 we calculated the one-loop $\beta$-function for the non-linear sigma model in $(2+\epsilon)$ dimensions (here 2 means $(1+1)$ ). We found the result (see Eq. (7.101))

$$
\begin{equation*}
\beta(u)=-\epsilon u+\frac{u^{2}}{2 \pi}+O\left(u^{3}\right) \tag{7.149}
\end{equation*}
$$

For space-time dimensions $D>2$, the fixed point at the origin, $u^{*}=0$, is infraredstable. This means that, if the bare dimensionless coupling constant $u$ is sufficiently small, the effective coupling flows toward the $u=0$ fixed point and we have a Néel state with weakly coupled spin waves. However, for space-time dimensions $D>2$ ( $\epsilon>0$ ), Eq. (7.101) has another fixed point at $u^{*} \approx 2 \pi \epsilon$, which is infraredunstable. This fixed point is the location of a second-order (continuous) quantum phase transition as a function of the coupling constant. Beyond this fixed point, i.e. for $u>u^{*}$, the effective coupling flows toward the $u=\infty$ fixed point just as in the $(1+1)$-dimensional case. However, now we no longer have a topological term. Thus, we must conclude that, for $u>u^{*}$, the system is disordered (and hence has a finite energy gap) at distances longer than some correlation length $\xi \sim\left|u-u^{*}\right|^{-\nu}$, where $v=1 /(D-2)+O(D-2)$, and Néel-like order at scales between the lattice constant $a_{0}$ and the correlation length $\xi$. Such a state is a zero-temperature quantum paramagnet $(\mathrm{QP})$, i.e. a paramagnetic state driven purely by quantum fluctuations, with the absence of thermal fluctuations. A finite correlation length without long-range order means that the ground state is unique, and there is an energy gap $\Delta=v_{\mathrm{s}} / \xi$ for the elementary excitations ("spin waves").

The theory described here, which is based on the $(2+\epsilon)$ expansion, is too crude to reliably predict the value of $u^{*}$, and hence of the gap. Since we saw that our approximations were equivalent to (a resummation of) the $1 / S$ expansion, we must also conclude that $u^{*}$ cannot be calculated with confidence from the $1 / S$ expansion either. Qualitatively, we should still expect a non-trivial fixed point for $\epsilon=1$. The perturbative $\beta$-function predicts that for $\epsilon \approx 1$ even $S=\frac{1}{2}$ on a square lattice is on the Néel side of the phase transition, although not far from it. This result appears to be consistent with existent experimental data on quasi-2D systems believed to be reasonably well described by the $S=\frac{1}{2}$ quantum Heisenberg antiferromagnet such as $\mathrm{La}_{2} \mathrm{CuO}_{4}$. Experimentally (Shirane et al., 1987) one sees a Néel state but with a magnetic moment about $50 \%$ of its classical value. The dynamical structure factor predicted by the non-linear sigma model (Chakravarty et al., 1988) is also consistent with these experiments. Numerical calculations on 2D quantum Heisenberg models also exhibit a similar behavior (Liang et al., 1988; Liang, 1990a; Manousakis, 1991).

### 7.10 The Wess-Zumino-Witten model

We will now go back to the problem of the quantum Heisenberg antiferromagnet in one dimension. In Section 7.5 we found that the effective action for a model with spin degrees of freedom in the spin- $S$ representation is described by a non-linear sigma model with a topological $\theta$ term, Eq. (7.68). Here $\theta=2 \pi S$, which is an even multiple of $\pi$ for $S$ integer and and multiple of $\pi$ for $S$ a half-integer. We saw that the role of the topological term was to weight by $\exp (i \theta \mathcal{Q})$ the contribution to the path integral of configurations with topological charge $\mathcal{Q}$. Since the topological charge is an integer the weight is equal to 1 for integer-spin chains and $(-1)^{\mathcal{Q}}$ for half-integer-spin chains.

A subsequent RG analysis showed that the non-linear sigma model is asymptotically free and hence that the effective coupling constant always flows to strong coupling. For integer-spin chains this implies that there is a finite mass (or energy) gap in the spectrum and that there is no long-range antiferromagnetic order. On the other hand, for half-integer-spin chains the coupling constant still flows to strong coupling under the RG flow, but the topological term does not, since (being topological) it is unaffected by local fluctuations. Hence all half-integer-spin chains flow to the same strong-coupling fixed point, which we identified as that of the spin- $1 / 2$ chain, which is gapless (and hence critical) according to the Bethe ansatz. This is the essence of Haldane's result.

This result is very elegant and clearly shows why the two classes of spin chains must behave differently, but it does not identify the non-trivial fixed point for the half-integer-spin chains. In this section we will show (Affleck, 1986a; Affleck and

Haldane, 1987) that this fixed point is the $\mathrm{SU}(2)_{1}$ ("level 1") Wess-Zumino-Witten (WZW) model (Witten, 1984), which is a scale-invariant field theory in $(1+1)$ dimensions that is exactly solvable using methods of conformal field theory (CFT) (Knizhnik and Zamolodchikov, 1984). We will not go over the full structure of CFT, a subject for which there are extensive reviews (Belavin et al., 1984; Di Francesco et al., 1997), but instead we will discuss the basic results and their physical consequences. Since all half-integer-spin chains flow to the same fixed point, it will be sufficient to study this question for the spin- $1 / 2$ chain. The key tool in the construction of the fixed-point theory of the spin- $1 / 2$ chain is the concept of non-abelian bosonization (Witten, 1984).

We begin with a brief description of non-abelian bosonization. As in the abelian case, discussed in detail in Section 5.6, non-abelian bosonization expresses the algebra of the currents and densities, in this case the spin currents and densities. We will seek a bosonic theory with the same global symmetries as the fermionic theory and whose currents satisfy the same algebra as that satisfied by their fermionic cousins. Thus we consider a system with two chiral fermionic fields $\psi_{\mathrm{R}, \sigma}$ and $\psi_{\mathrm{L}, \sigma}$ (with $\sigma=\uparrow, \downarrow$ ) and the associated spin currents $J_{\mathrm{R}}^{a}(x)=\frac{1}{2} \psi_{\mathrm{R}, \sigma}^{\dagger}(x) \tau_{\sigma, \sigma^{\prime}}^{a} \psi_{\mathrm{R}, \sigma^{\prime}}(x)$ and $J_{\mathrm{L}}^{a}(x)=\frac{1}{2} \psi_{\mathrm{L}, \sigma}^{\dagger}(x) \tau_{\sigma, \sigma^{\prime}}^{a} \psi_{\mathrm{L}, \sigma^{\prime}}(x)$ (with $a=1,2,3$ ) (Eq. (6.69)), which satisfy the $\mathrm{SU}(2)_{1}$ Kac-Moody (current) algebra of Eq. (6.71),

$$
\begin{align*}
& {\left[J_{\mathrm{R}}^{a}(x), J_{\mathrm{R}}^{b}(y)\right]=i \epsilon^{a b c} J_{\mathrm{R}}^{c}(x) \delta(x-y)+i \frac{k}{4 \pi} \delta^{a b} \delta^{\prime}(x-y)}  \tag{7.150}\\
& {\left[J_{\mathrm{L}}^{a}(x), J_{\mathrm{L}}^{b}(y)\right]=i \epsilon^{a b c} J_{\mathrm{L}}^{c}(x) \delta(x-y)-i \frac{k}{4 \pi} \delta^{a b} \delta^{\prime}(x-y)}
\end{align*}
$$

with level $k=1$. Since we are dealing with charged (Dirac) fermions, there are also two chiral currents associated with the global $\mathrm{U}(1)$ symmetry, which we associate with charge and hence with gauge invariance. In the more general case in which there are $N$ chiral fermions (instead of two for the case of spin), the symmetry becomes $\mathrm{SU}(N)$. In this case the $\epsilon^{a b c}$ tensor in Eq. (7.150) (the same as Eq. (6.71)) is replaced by the structure constants $f^{a b c}$ of $\mathrm{SU}(N)$.

Since both up and down fermions contribute to the $\mathrm{U}(1)$ current, the associated $\mathrm{U}(1)$ Kac-Moody algebra has level $k=2$. The total symmetry of the free fermions with spin is thus $\mathrm{U}(1)_{2} \times \mathrm{SU}(2)_{1}$. Equivalently, we can represent each Dirac fermion in terms of a pair of (neutral) Majorana fermions, $\psi_{\mathrm{R}, \sigma}(x)=\chi_{\mathrm{R}, \sigma}(x)+i \eta_{\mathrm{R}, \sigma}(x)$ (and similarly for the left-moving fields). We can regard our set of $2 N$ ( $N=2$ for $\mathrm{SU}(2)$ ) chiral Majorana fermions as forming a vector of $2 N$ components. The symmetry is now (in general) $\mathrm{O}(2 N) \simeq \mathrm{U}(1) \times \mathrm{SU}(N)$ and the fermions transform as the $2 N$ (fundamental) representation of $\mathrm{O}(2 N)$.

Following Witten (1984) we seek a representation of this current algebra in terms of a set of bosonic fields. (An alternative derivation of non-abelian bosonization
using an analysis of field-theoretic anomalies in the path-integral formulation was developed by Polyakov and Wiegmann (1983, 1984).) However, unlike in the abelian case, the bosonic fields are not free. Rather the bosonized theory is a special type of non-linear sigma model whose fields will be denoted by $g(x)$, which, in the case of electrons with spin $1 / 2$, are $2 \times 2$ matrices that take values on the elements of the group $\mathrm{SU}(2)$. In the general case the matrix field $g(x)$ takes values on a compact Lie group $G$. Thus, the non-linear sigma model will in general be given in terms of a matrix-valued field, i.e. an element of a compact Lie group at every point of space-time. In quantum field theory, a non-linear sigma model taking values on a group manifold is known as the principal chiral field (Polyakov, 1987). On the other hand, a matrix-valued field has a larger $G_{\mathrm{L}} \times G_{\mathrm{R}}$ symmetry $g(x) \rightarrow h_{\mathrm{L}} g(x) h_{\mathrm{R}}^{-1}$ since the field can be multiplied by two independent constant matrices $h_{\mathrm{R}}^{-1}$ (multiplying on the right), with $h_{\mathrm{R}} \in G_{\mathrm{R}}$, and $h_{\mathrm{L}}$ (multiplying on the left), with $h_{\mathrm{L}} \in G_{\mathrm{L}}$. We will see that these two symmetries are associated with the two chiral currents.

In what follows we will discuss a theory of $N$ free Dirac (charged) Fermi fields $\psi_{\mathrm{R}}^{i}(x)$ and $\psi_{\mathrm{L}}^{i}(x)$, with $i=1, \ldots, N$, in terms of which we can construct a $\mathrm{U}(1)$ current

$$
\begin{equation*}
J_{\mathrm{R}}=\psi_{\mathrm{R}}^{i \dagger} \psi_{\mathrm{R}}^{i}, \quad J_{\mathrm{L}}=\psi_{\mathrm{L}}^{i \dagger} \psi_{\mathrm{L}}^{i} \tag{7.151}
\end{equation*}
$$

and the $\mathrm{SU}(N)$ currents

$$
\begin{equation*}
J_{\mathrm{R}}^{a}=\psi_{\mathrm{R}}^{i \dagger} t_{i j}^{a} \psi_{\mathrm{R}}^{j}, \quad J_{\mathrm{L}}^{a}=\psi_{\mathrm{L}}^{i \dagger} t_{i j}^{a} \psi_{\mathrm{L}}^{j} \tag{7.152}
\end{equation*}
$$

where $\left\{t_{i j}^{a}\right\}$ are $N \times N$ (hermitian) matrices, the $N^{2}-1$ generators of $\mathrm{SU}(N)$ (in the fundamental representation). (We use the normalization $\operatorname{tr}\left(t^{a} t^{b}\right)=\frac{1}{2} \delta_{a b}$.)

The Lagrangian for free massless Dirac fermions in $(1+1)$ dimensions is

$$
\begin{equation*}
\mathcal{L}=\bar{\psi}_{i}^{\dagger}(x) i \gamma_{\mu} \partial^{\mu} \psi_{i}(x) \tag{7.153}
\end{equation*}
$$

where $\bar{\psi}_{i}=\psi_{i}^{\dagger} \gamma_{0}$. The free massless Dirac fermion Lagrangian of Eq. (7.153) is a fixed point under the renormalization group and it represents a scale-invariant system.

For free (massless) fermions the chiral currents $J_{\mathrm{R}}^{i j}$ and $J_{\mathrm{L}}^{i j}$ obey the conservation laws

$$
\begin{equation*}
\partial_{-} J_{\mathrm{R}}^{i j}=0, \quad \partial_{+} J_{\mathrm{L}}^{i j}=0 \tag{7.154}
\end{equation*}
$$

where I use so-called light-cone components with $x_{ \pm}=(1 / \sqrt{2})\left(x_{0} \pm x_{1}\right)$ and $\partial_{ \pm}=\partial / \partial x_{ \pm}$. These conservation laws can be satisfied by writing (Witten, 1984)

$$
\begin{equation*}
J_{\mathrm{R}}(x)=\frac{i}{2 \pi} g^{-1}(x) \partial_{+} g(x), \quad J_{\mathrm{L}}(x)=-\frac{i}{2 \pi}\left(\partial_{-} g(x)\right) g^{-1}(x) \tag{7.155}
\end{equation*}
$$

where I have suppressed the indices $i, j$. The two conservation laws are now $\partial_{-}\left(g^{-1} \partial_{+} g\right)=0$ and $\partial_{+}\left(\left(\partial_{-} g\right) g^{-1}\right)=0$ (which are equivalent to each other).

Now we ask which action the scalar (bosonic) field $g(x)$ should obey. Witten showed that the simple guess that it should be the action of the principal chiral-field non-linear sigma model (with coupling constant $\lambda$ )

$$
\begin{equation*}
\mathcal{L}=\frac{1}{4 \lambda^{2}} \int d^{2} x \operatorname{tr}\left(\partial_{\mu} g \partial^{\mu} g^{-1}\right) \tag{7.156}
\end{equation*}
$$

(where $t r$ is a matrix trace) does not work, for several reasons. One important reason is that the RG beta function is in general non-vanishing (unless the (Ricci) curvature of the group manifold $G$ vanishes and the manifold is then said to be "Ricci flat") (Friedan, 1985) and hence it is not scale-invariant. For $G=\mathrm{SU}(N)$ the beta function is positive, $\beta(\lambda)>0$, and hence this theory is asymptotically free. Thus, for any $\lambda>0$, the theory of Eq. (7.156) represents a theory with a non-vanishing mass gap while the theory of free fermions is massless. Hence, they cannot be equivalent to each other.

The equivalent bosonized theory turns out to be more subtle. Witten showed that the action of the bosonized theory is the action of the non-linear sigma model of Eq. (7.156) with an additional term, a Wess-Zumino term $\Gamma[g]$, which we will now define. Let us consider for the moment the theory in Euclidean space-time and work with boundary conditions in which the fields take an arbitrary but constant value at infinity. In this case, as we did before in our discussion of the skyrmion and of the instanton, the Euclidean space-time becomes isomorphic to a 2 -sphere $S^{2}$. For any compact Lie group $G$, such as $\mathrm{O}(N)$ or $\mathrm{SU}(N)$, the field configurations are maps $S^{2} \rightarrow G$, which are topologically trivial and have a trivial homotopy group, $\pi_{2}(G)=0$. Hence, it is possible to extend smoothly the field configuration $g(x)$ from $S^{2}$ to a function $\bar{g}(y)$ defined in the ball $B$, the interior of $S^{2}$ (here $y_{i}$ are the coordinates in $B$ ). The Wess-Zumino action is given by

$$
\begin{equation*}
\Gamma[g]=\frac{1}{24 \pi} \int_{B} d^{3} y \epsilon^{i j k} \operatorname{tr}\left(\bar{g}^{-1} \partial_{i} \bar{g} \bar{g}^{-1} \partial_{j} \bar{g} \bar{g}^{-1} \partial_{k} \bar{g}\right) \tag{7.157}
\end{equation*}
$$

However, this action is not single-valued as there are topologically inequivalent ways to extend a configuration $g(x)$ from $S^{2}$ to the ball $B$. To see why this is so, let us consider that, if we work on a compactified 3D space, isomorphic to $S^{3}$, there is an ambiguity in what we regard as the "interior" of the 2 -sphere $S^{2}$, and hence on how to extend the configuration. The difference of two extensions (defined on the "interior" of $S^{2}$ and on the "exterior" of $S^{2}$ ) is a map from $S^{3} \rightarrow G$. For $G=\mathrm{SU}(N)$, such maps are topologically non-trivial and are classified by the homotopy group

$$
\begin{equation*}
\pi_{3}(\mathrm{SU}(N)) \simeq \mathbb{Z} \tag{7.158}
\end{equation*}
$$

It follows from this result that the Wess-Zumino action is multivalued and that for two inequivalent extensions $\Gamma[g]$ is defined only modulo $2 \pi, \Gamma \rightarrow \Gamma+2 \pi r$, with
$r \in \mathbb{Z}$. The reader should by now have seen the close analogy between this line of argument and the one we used in the path integral for spin at the beginning of this chapter.

These considerations led Witten to conjecture that the correct non-linear sigma model has the following action:

$$
\begin{equation*}
S[g]=\frac{1}{4 \lambda^{2}} \int d^{2} x \operatorname{tr}\left(\partial_{\mu} g \partial^{\mu} g^{-1}\right)+k \Gamma[g] \tag{7.159}
\end{equation*}
$$

where $k \in \mathbb{Z}$ for the weight of the path integral to be single-valued. The action of Eq. (7.159) is known as the Wess-Zumino-Witten (WZW) model. The integervalued coupling constant $k$ is known as the level of the WZW model and of the associated Kac-Moody algebra, Eq. (7.150).

For the WZW model to be equivalent to a theory of free fermions (or to some other fixed-point theory) it must have a fixed point for some value of the coupling constant $\lambda$ and of the level $k$. At small $\lambda$ the non-linear sigma-model term dominates and we know that in this regime this theory has a positive beta function and it is asymptotically free. Thus, the fixed point we are looking for must occur at some finite value of the coupling constant. A one-loop computation of the beta function (Witten, 1984) yields the result for $G=\mathrm{SU}(N)$ :

$$
\begin{equation*}
\beta(\lambda, k)=\left(\frac{N}{4 \pi}\right) \lambda^{2}\left[1-\left(\frac{\lambda^{2} k}{4 \pi}\right)^{2}\right]+\cdots \tag{7.160}
\end{equation*}
$$

The constraint that the path integral be single-valued fixes the level $k$ to be an integer. As such, it does not flow under the local fluctuations, and it is invariant under the action of the RG. Nevertheless, the Wess-Zumino term does contribute to the beta function of the coupling constant $\lambda$, as shown in Eq. (7.160).

Thus, provided that this one-loop result turns out to be exact, this result predicts the existence of a stable fixed point at a critical value of the coupling constant $\lambda_{c}^{2}=$ $4 \pi / k$. Furthermore, Witten also showed that at the classical level the WZW model is compatible with the chiral conservation laws of Eq. (7.154) for the bosonized currents of Eq. (7.155) only if the coupling constant $\lambda$ and the level $k$ satisfy $\lambda^{2}=$ $4 \pi / k$. In particular, the level $k$ of the WZW model and that of the Kac-Moody algebra are the same. This led to the conjecture that the WZW model must indeed have an exact fixed point (i.e. an exact zero of the beta function) at this value of the coupling constant even beyond perturbation theory. This was proven to be correct by Knizhnik and Zamolodchikov (1984) using methods of CFT.

Returning to the relation between the free Dirac fermion theory (with $G=$ $\mathrm{SU}(N)$ global symmetry) and the WZW theory, we are led to conclude that this identification should hold for level $k=1$. Thus, a theory of $N$ free Dirac fermions is equivalent to an $\mathrm{SU}(N)_{1}$ WZW model at its fixed point and a $\mathrm{U}(1)$ free boson.

Thus, the conjectured equivalent bosonized action is a sum of two terms, one representing the $\mathrm{U}(1)$ currents and another a WZW model with $\mathrm{SU}(N)$ symmetry

$$
\begin{equation*}
S=\int d^{2} x \frac{1}{2}\left(\partial_{\mu} \varphi\right)^{2}+S_{\mathrm{WZW}}^{k=1}[g] \tag{7.161}
\end{equation*}
$$

where $S_{\mathrm{WZW}}^{k=1}[g]$ is the action of the WZW model at its fixed point $\lambda^{2}=4 \pi / k$ at level $k=1$.

At the operator level this implies that the non-abelian chiral currents of the fermionic theory, Eq. (7.152), must be identified with the chiral currents of the WZW model, Eq. (7.155):

$$
\begin{align*}
& J_{\mathrm{R}}^{a}=\psi_{\mathrm{R}}^{i \dagger} t_{i j}^{a} \psi_{\mathrm{R}}^{j}=\frac{1}{2 \pi} \operatorname{tr}\left(t^{a} g^{-1}\left(\partial_{+} g\right)\right) \\
& J_{\mathrm{L}}^{a}=\psi_{\mathrm{L}}^{i \dagger} t_{i j}^{a} \psi_{\mathrm{R}}^{j}=\frac{1}{2 \pi} \operatorname{tr}\left(t^{a}\left(\partial_{-} g\right) g^{-1}\right) \tag{7.162}
\end{align*}
$$

The abelian $U(1)$ currents are bosonized as before,

$$
\begin{equation*}
J_{\mu}=\sqrt{\frac{N}{\pi}} \epsilon_{\mu \nu} \partial^{v} \varphi \tag{7.163}
\end{equation*}
$$

A similar identification can be made between the currents of the WZW model and the fermionic currents. Indeed, the operators of Eq. (7.162) have the same correlation functions as their fermionic counterparts,

$$
\begin{equation*}
\left\langle J_{\mathrm{R}}^{a}(z) J_{\mathrm{R}}^{b}(0)\right\rangle=\frac{\delta_{a b}}{z^{2}}, \quad\left\langle J_{\mathrm{L}}^{a}(\bar{z}) J_{\mathrm{L}}^{b}(0)\right\rangle=\frac{\delta_{a b}}{\bar{z}^{2}} \tag{7.164}
\end{equation*}
$$

where (in Euclidean space-time) $z=x_{1}+i x_{0}$ and $\bar{z}=x_{1}-i x_{0}$. Hence, the respective operators have the same scaling dimension $\Delta_{J}=1$. They also have the same three-point functions (and hence they also have the same OPEs) because they satisfy the same Kac-Moody algebra (as it turns out, this holds for all values of the level $k$ ). Since the Kac-Moody currents generate the spectrum, their spectra are also the same.

It remains to find an identification (a bosonization identity) for the Dirac fermion bilinears which mix right- and left-moving sectors, i.e. mass terms, of the form $Q^{a}=\operatorname{tr}\left(\psi_{\mathrm{R}}^{i \dagger} t_{i j}^{a} \psi_{\mathrm{L}}^{j}\right)$. In the free-fermion theory this operator has scaling dimension 1 and it transforms as a group element under the $\mathrm{SU}(N) \times \mathrm{U}(1)$ symmetry (both right and left). The natural candidate identification is

$$
\begin{equation*}
\operatorname{tr}\left(\psi_{\mathrm{R}}^{i \dagger} t_{i j}^{a} \psi_{\mathrm{L}}^{j}\right) \propto \operatorname{tr}\left(t^{a} g(x)\right) e^{i \sqrt{\frac{4 \pi}{N}} \varphi(x)} \tag{7.165}
\end{equation*}
$$

The last factor is due to the $\mathrm{U}(1)$ sector and has scaling dimension $1 / N$. On the other hand, since the WZW field $g(x)$ is classically dimensionless, for this identity
to hold it is required that at the quantum level it should have an anomalous dimension $(N-1) / N$ so that the free Dirac bilinear has scaling dimension 1 . We will see that this is indeed the case.

### 7.11 A (brief) introduction to conformal field theory

To prove that the operator identifications we just discussed are correct it is necessary to have an exact solution of the WZW at its fixed point, $\lambda_{c}^{2}=4 \pi / k$. This is a non-trivial problem whose solution was found by Knizhnik and Zamolodchikov (1984) using methods of conformal field theory (CFT). We will not give a derivation of these results, but instead give a brief description suitable for our purposes (Affleck, 1986a, 1990). An in-depth treatment of CFT can be found in several texts, see e.g. Di Francesco et al. (1997) and Polchinski (1998).

In Eq. (6.73) we showed that the free (Dirac)-fermion Hamiltonian density can be written as a Sugawara form, a quadratic form of the $\mathrm{SU}(2)$ and $\mathrm{U}(1)$ currents in which the chiral components are decoupled. For a system with $\mathrm{SU}(N) \times \mathrm{U}(1)$ symmetry the free-Dirac-fermion Hamiltonian density is

$$
\begin{equation*}
\mathcal{H}=T_{\mathrm{R}}+T_{\mathrm{L}} \tag{7.166}
\end{equation*}
$$

where $T_{\mathrm{R}}$ and $T_{\mathrm{L}}$ are the right- and left-moving components of the energymomentum tensor, which in this system can be written in terms of the currents (here we have set the velocities to 1 for simplicity)

$$
\begin{align*}
& T_{\mathrm{R}}=\frac{\pi}{N} J_{\mathrm{R}} J_{\mathrm{R}}+\frac{2 \pi}{N+1} J_{\mathrm{R}}^{a} J_{\mathrm{R}}^{a} \\
& T_{\mathrm{L}}=\frac{\pi}{N} J_{\mathrm{L}} J_{\mathrm{L}}+\frac{2 \pi}{N+1} J_{\mathrm{L}}^{a} J_{\mathrm{L}}^{a} \tag{7.167}
\end{align*}
$$

which implies that the spectrum is generated by the Kac-Moody currents.
In a theory with translation and Lorentz invariance, the energy-momentum tensor $T_{\mu \nu}$ is locally conserved and symmetric,

$$
\begin{equation*}
\partial^{\mu} T_{\mu \nu}=0, \quad T_{\mu \nu}=T_{\nu \mu} \tag{7.168}
\end{equation*}
$$

If the system is also scale-invariant, $T_{\mu \nu}$ is also traceless, $T_{\mu}^{\mu}=0$. Since $T^{00}=$ and $T^{01}$ are the Hamiltonian and linear momentum densities, $\mathcal{H}$ and $\mathcal{P}$, we have

$$
\begin{equation*}
T^{00}=-T^{11}=\mathcal{H}=T_{\mathrm{R}}+T_{\mathrm{L}}, \quad T^{01}=T^{10}=\mathcal{P}=T_{\mathrm{R}}-T_{\mathrm{L}} \tag{7.169}
\end{equation*}
$$

On the other hand, the chiral components of the energy-momentum tensor, $T_{\mathrm{R}}$ and $T_{\mathrm{L}}$, are the local generators of the (infinite-dimensional) group of local conformal transformations in $(1+1)$ dimensions (Di Francesco et al., 1997). They obey the equal-time commutation relations

$$
\begin{align*}
& {\left[T_{\mathrm{R}}(x), T_{\mathrm{R}}\left(x^{\prime}\right)\right]=i \delta\left(x-x^{\prime}\right) T_{\mathrm{R}}^{\prime}(x)+i 2 \delta^{\prime}\left(x-x^{\prime}\right) T_{\mathrm{R}}(x)+i \frac{c}{24 \pi} \delta^{\prime \prime \prime}\left(x-x^{\prime}\right)} \\
& {\left[T_{\mathrm{L}}(x), T_{\mathrm{L}}\left(x^{\prime}\right)\right]=i \delta\left(x-x^{\prime}\right) T_{\mathrm{L}}^{\prime}(x)+i 2 \delta^{\prime}\left(x-x^{\prime}\right) T_{\mathrm{L}}(x)-i \frac{c}{24 \pi} \delta^{\prime \prime \prime}\left(x-x^{\prime}\right)} \tag{7.170}
\end{align*}
$$

These operator identities are known as the Virasoro algebra. The last term is known as the conformal anomaly of the Virasoro algebra, and the (positive) real number $c$ is the central charge of this algebra.

Conformal field theory is a symmetry-based theory of the classification of fixed points in $(1+1)$ dimensions (Belavin et al., 1984; Cardy, 1984; Friedan et al., 1984). It works much in the same way as group theory allows for a classification of wave functions and quantum numbers of states in quantum mechanics without reference to a specific Hamiltonian. A key CFT result is the statement that the fixed-point theories in $(1+1)$-dimensional quantum systems and, equivalently, 2D classical critical statistical-mechanical systems, are representations of the (infinite-dimensional) conformal group generated by the energy-momentum tensor (which satisfies the Virasoro algebra). A given fixed point is characterized by a complete set of operators $\left\{\phi_{\ell}(x)\right\}$, called primary fields, which transform simply (irreducibly) under the action of the conformal group, i.e. under a local scale transformation $x \rightarrow \lambda x$,

$$
\begin{equation*}
\phi_{\ell}(\lambda x) \rightarrow \lambda^{-\Delta_{\ell}} \phi_{\ell}(x) \tag{7.171}
\end{equation*}
$$

where we recognize $\left\{\Delta_{\ell}\right\}$ as the set of the scaling dimensions which play the role of the quantum numbers. Similarly, under a Lorentz transformation (or a rotation in the Euclidean metric), the primary fields transform with a well-defined (conformal) spin, $\left\{s_{\ell}\right\}$. In CFT the chiral components of the energy-momentum tensor, $T_{\mathrm{R}}$ and $T_{\mathrm{L}}$, act independently. This leads to two separate conformal dimensions (or weights), usually denoted by $h_{\ell}$ and $\bar{h}_{\ell}$. For a chirally invariant (symmetric) system, the scaling dimension and spin are expressed as $\Delta_{\ell}=h_{\ell}+\bar{h}_{\ell}$ and $s_{\ell}=h_{\ell}-\bar{h}_{\ell}$. A CFT is given by a specific value of the central charge $c$, a complete set of primary fields, their scaling dimensions (and conformal spins, not to be confused with the conventional spin), and the full set of universal coefficients of their OPE.

The central charge $c$ of the Virasoro algebra, Eq. (7.170), plays a key role in CFT. As we noted above, in a CFT the energy-momentum tensor $T_{\mu \nu}$ is conserved, symmetric, and traceless. These symmetry properties follow from the definition of the energy-momentum tensor as the response to a change of the metric $g_{\mu \nu}$,

$$
\begin{equation*}
T_{\mu \nu}(x)=\frac{\delta S}{\delta g^{\mu \nu}(x)} \tag{7.172}
\end{equation*}
$$

and from the Lorentz invariance of the action (rotational invariance in the Euclidean metric, where it is interpreted as a stress tensor).

We will now consider a general $(1+1)$-dimensional CFT in (2D) Euclidean space-time (i.e. in imaginary time) and consider the system to be defined on a cylinder: an infinitely long strip of width $\beta$ (with periodic boundary conditions along this direction). The path integral of the CFT can be regarded as the partition function of a system in classical statistical mechanics on a finite-sized region or, equivalently, as the quantum partition function of a conformally invariant quantum field theory at temperature $T=\beta^{-1}$. An operator $\phi$ (a primary field) with scaling dimension $\Delta_{\phi}$ has the (connected) correlation function in the infinite Euclidean plane

$$
\begin{equation*}
\left\langle\phi\left(z_{1}\right) \phi\left(z_{2}\right)\right\rangle_{\mathrm{c}}=\frac{1}{\left|z_{1}-z_{2}\right|^{2 \Delta_{\phi}}} \tag{7.173}
\end{equation*}
$$

The correlator on the strip can be found by the conformal mapping

$$
\begin{equation*}
w=\frac{\beta}{2 \pi} \ln z \tag{7.174}
\end{equation*}
$$

Under a conformal mapping the correlator of a primary field obeys the transformation law (Belavin et al., 1984)

$$
\begin{equation*}
\left\langle\phi\left(z_{1}\right) \phi\left(z_{2}\right)\right\rangle=\left|w^{\prime}\left(z_{1}\right)\right|^{\Delta_{\phi}}\left|w^{\prime}\left(z_{2}\right)\right|^{\Delta_{\phi}}\left\langle\phi\left(w\left(z_{1}\right)\right) \phi\left(w\left(z_{2}\right)\right)\right\rangle \tag{7.175}
\end{equation*}
$$

Thus, at "equal times" (the same value of the periodic or compactified coordinate) the correlator becomes

$$
\begin{equation*}
\langle\phi(0) \phi(w)\rangle=\frac{1}{[(\beta / \pi) \sinh (\pi w / \beta)]^{2 \Delta_{\phi}}} \tag{7.176}
\end{equation*}
$$

This shows that on the cylinder (i.e. at finite temperature $T$ ) the correlation function decays exponentially at long separations as

$$
\begin{equation*}
\langle\phi(0) \phi(w)\rangle \sim e^{-|w| / \ell_{\phi}} \tag{7.177}
\end{equation*}
$$

with

$$
\begin{equation*}
\ell_{\phi}=\left(2 \pi T \Delta_{\phi}\right)^{-1} \tag{7.178}
\end{equation*}
$$

If we now regard the cylinder as running along the imaginary-time direction and having circumference $L$, this result can be interpreted as the statement that the autocorrelation function (i.e. at equal position in space) decays exponentially in (imaginary) time, with a characteristic energy gap $\Delta(L)$ for the excitation created by the primary field $\phi$ which scales to zero as $L \rightarrow \infty$ (since the theory in the thermodynamic limit must be gapless to be conformal) with the law

$$
\begin{equation*}
\Delta(L)=\frac{2 \pi \Delta_{\phi}}{L} \tag{7.179}
\end{equation*}
$$

These results offer a direct and practical way to compute scaling dimensions and this method is used extensively in numerical simulations.

The energy-momentum tensor is traceless only if the action, and hence the partition function, is scale-invariant. However, if the metric $g_{\mu \nu}$ has a non-vanishing scalar curvature $R(x)$ (i.e. in the Euclidean case the system is placed on a curved surface), which now supplies a scale, the energy-momentum tensor can have a non-vanishing trace. A key result from CFT is an identity, known as the trace (or conformal) anomaly, that relates the expectation value of the trace of the energymomentum tensor, $\left\langle T_{\mu}^{\mu}(x)\right\rangle$, to the central charge $c$ of the CFT (Polyakov, 1981; Friedan, 1984):

$$
\begin{equation*}
-g^{\mu \nu}(x) \frac{\delta Z}{\delta g^{\mu \nu}(x)}=\left\langle T_{\mu}^{\mu}(x)\right\rangle=\frac{c}{48 \pi}\left(R(x)+\mu^{2}\right) \tag{7.180}
\end{equation*}
$$

where $R(x)$ is the scalar curvature and $\mu^{2}$ is a non-universal constant (of dimension $L^{-2}$ ). This general result has many important consequences.

On an infinitely long strip geometry, the free energy $F=-\ln Z$ for large values of the strip width $\beta$ (i.e. low temperatures in the quantum version) is expected to obey the finite-size scaling behavior

$$
\begin{equation*}
F=f \beta+f^{*}+\frac{A}{\beta}+O\left(\beta^{-2}\right) \tag{7.181}
\end{equation*}
$$

where $f$ is the free energy per unit length, $f^{*}$ is a constant term due to edge contributions (and hence absent for systems with periodic boundary conditions such as a cylinder), and $A$ is a dimensionless constant that is (presumably) universal (though dependent on the choice of boundary conditions).

We will see now that CFT predicts a specific relation between the constant $A$ and the central charge $c: A=-\pi c / 6$ for periodic boundary conditions $(A=-\pi c / 24$ for fixed and free boundary conditions) (Affleck, 1986b; Blöte et al., 1986). We will follow Blöte et al. (1986) and consider a coordinate transformation $x^{\mu} \rightarrow$ $x^{\mu}+\alpha^{\mu}$ (of the strip), which is not a conformal transformation (and hence it is not a symmetry transformation), e.g. a shear distortion. Such a coordinate transformation causes a change in the action $S$ of the system of the form

$$
\begin{equation*}
\delta S=-\int \frac{\partial \alpha^{\mu}}{\partial x_{v}} T_{\mu \nu}(x) d^{2} x \tag{7.182}
\end{equation*}
$$

If we denote the coordinates on the strip by $(u, v)$ we can denote an infinitesimal non-conformal transformation as $u^{\prime}=u(1-\lambda)$ and $v^{\prime}=v(1+\lambda)$ with $\lambda \ll 1$. Indeed, the change in the expectation value of the action (or the internal energy in the classical statistical-mechanical version) is (for a system with periodic boundary conditions)

$$
\begin{equation*}
\delta\langle S\rangle=2 \beta \lambda \int_{-\infty}^{\infty}(\langle T\rangle+\langle\bar{T}\rangle) d u \tag{7.183}
\end{equation*}
$$

The invariance of the partition function implies that there is a compensating change in the free energy $\delta F=-2 \lambda A / \beta$. Therefore, $A=2 \beta^{2}\langle T\rangle$ (since $\langle T\rangle=\langle\bar{T}\rangle$ ). On the other hand, the (response) change in $\langle T\rangle$ to a change $\delta S$ in the action, to lowest order ("linear response"), is

$$
\begin{equation*}
\delta\langle T(0)\rangle=-2 \lambda \int_{-\infty}^{\infty} d u \int_{0}^{\beta} d v\langle T(0,0) T(u, v)\rangle_{\mathrm{c}} \tag{7.184}
\end{equation*}
$$

We now note that the (connected) correlators of the energy-momentum tensor on the strip also obey a scaling law

$$
\begin{equation*}
\langle T(0) T(w)\rangle_{\mathrm{c}}=\frac{c / 2}{[(\beta / \pi) \sinh (\pi w / \beta)]^{4}} \tag{7.185}
\end{equation*}
$$

which follows from the fact that the scaling dimension of the energy-momentum tensor is 2 . This is an exact property of the energy-momentum tensor in all CFTs, which is protected by the fact that it is a conserved current (and hence cannot have an anomalous dimension). The prefactor of $c / 2$ arises from the conformal anomaly of the Virasoro algebra. Here we work in the Euclidean metric and denote $T_{\mathrm{R}}=T$ and $T_{\mathrm{L}}=\bar{T}$, which are holomorphic and antiholomorphic functions of $z=x_{1}+i x_{2}$ and $\bar{z}=x_{1}-i x_{2}$, respectively. Even if $\langle T\rangle=0$ on the infinite plane, it is generally non-vanishing on the strip geometry. It is precisely this change that we will need in order to derive Eq. (7.181) and to evaluate the constant $A$. By evaluating the integrals in Eq. (7.184) we find $\delta\langle T\rangle=\pi^{2} c /\left(6 \beta^{2}\right)$, which must equal $\delta\langle T\rangle=-A \lambda / \beta^{2}$. Hence, $A=-(\pi / 6) c$.

Two conclusions can be drawn from this result. The first is that the groundstate energy density $\varepsilon(L)$ at $T=0$ of a critical system with length $L$ with periodic boundary conditions in space obeys the finite-size scaling behavior (Affleck, 1986b; Blöte et al., 1986)

$$
\begin{equation*}
\varepsilon(L)=\varepsilon_{0}-\frac{\pi c}{6 v L^{2}}+\cdots \tag{7.186}
\end{equation*}
$$

where $\varepsilon_{0}$ is the (non-universal) ground-state energy density, $c$ is the central charge, and $v$ is the speed of the excitations (which above we have set to 1 ). The second term in Eq. (7.186) is the Casimir energy. It represents the leading finite-size correction, and also has the interpretation of an effective interaction between the edges due to the quantum vacuum fluctuations.

For the second case, we now consider an infinite system at finite temperature $T>0$, whereupon this result becomes an asymptotic expansion for the free-energy density $f(T)$ at low temperatures,

$$
\begin{equation*}
f(T)=\varepsilon_{0}-\frac{\pi c}{6 v} T^{2}+\cdots \tag{7.187}
\end{equation*}
$$

From this result it follows that the low-temperature heat capacity $C(T)$ is

$$
\begin{equation*}
\frac{C(T)}{L}=\frac{\pi c k_{\mathrm{B}}^{2} T}{3 \hbar v}+\cdots \tag{7.188}
\end{equation*}
$$

(where we restored standard units). Therefore, the specific heat of a critical (Lorentz-invariant) 1D quantum system has the universal form of Eq. (7.188), and is proportional to the central charge $c$ of the CFT. This result motivates the interpretation of the central charge $c$ as counting the number of degrees of freedom in a physical system.

### 7.12 The Wess-Zumino-Witten conformal field theory

In the case of systems with a locally conserved current (associated with a global continuous symmetry), such as free Dirac fermions (among others), the representations of the Kac-Moody algebras are automatically representations of the Virasoro algebra since the energy-momentum tensor can (in that case) be expressed in terms of the Kac-Moody currents which generate the spectrum. Thus, in this case the central charge $c$, the scaling dimensions of the primary fields, and their OPE coefficients are fully determined in terms of the level $k$ of the Kac-Moody algebra and by the transformation laws of the states under the symmetry generated by these currents. The level $k$ is the central charge (or extension) of the Kac-Moody algebra of the currents.

For example, this is the case for free Dirac fermions with a $U(1)$ symmetry. In the free-Dirac-fermion system the primary fields are the Fermi fields themselves and the composite operators such as fermion bilinears, i.e. the $U(1)$ currents and the order parameters that we discussed in Section 5.6. In that section we introduced abelian bosonization and saw that there is an equivalent bosonic theory in which the operators of the fermionic theory are represented by vertex operators with the form of exponentials of the bosonic field. Both theories, the free Dirac fermion and the free bosonic (scalar) field, are fixed-point theories and are conformally invariant. However, not all possible vertex operators of the bosonic system have a counterpart in the fermionic system. In fact the number of allowed vertex operators is certainly smaller than the set of all possible ones. The way we constructed the set of allowed vertex operators was to first find a mapping of the currents and then a mapping of the fermionic operators themselves in their Mandelstam representation. The other operators were then obtained using the OPE.

We can reverse the logic of this construction and ask which vertex operators of the bosonic theory should be allowed in the first place. The key property obeyed by all the allowed vertex operators we constructed is that they are local with respect to
the Dirac field (or, more properly, with respect to its bosonized version). This property means that at equal times the allowed operators commute (or anti-commute) with the Dirac fermion. The vertex operators which obey this property are those of a bosonic field $\phi(x)$ with compactification radius $R=1 / \sqrt{4 \pi}$ (in the normalization used in Section 5.6), presented in Eqs. (6.63)-(6.66). Recall that the free bosonic field is a scalar field with the global $\mathrm{U}(1)$ shift symmetry $\phi(x) \rightarrow \phi(x)+\alpha$ (with $\alpha$ real and arbitrary).

In the Dirac theory this $\mathrm{U}(1)$ (shift) transformation corresponds to a continuous chiral transformation, $\psi(x) \rightarrow \exp \left(i \alpha \gamma_{5}\right) \psi(x)$, which, as we saw in our discussion of the Luttinger liquid, corresponds to a rigid translation of the charge-density profile. Thus, the quantum numbers of the vertex operators of the bosonic theory are the charges of these operators under the $\mathrm{U}(1)$ chiral symmetry. More importantly, it can be shown (Di Francesco et al., 1997) that the bosonic theory (with compactification radius $R=1 / \sqrt{4 \pi}$ ) and that of the free Dirac fermion have the same partition function and therefore that their spectrum is the same.

Conformal field theory is a theory of fixed points (in the RG sense). Thus, we are interested in looking at the operators that survive under the action of the RG flow. As we know, the only operators that survive the RG flow are either relevant (those whose weight in the effective action grows indefinitely under the action of the RG) or marginal (those whose weight in the action either remains unchanged or changes by a finite amount under the RG). In contrast, the weight of irrelevant operators to the effective action flows to zero under the RG. The counterpart of these observations is that in the OPE of the primary fields irrelevant operators enter in the form of analytic (non-singular) terms that vanish in the asymptotic limit.

These observations motivate the consideration of CFTs with a finite number of primary fields, which are either relevant or marginal, i.e. with scaling dimension less than or equal to 2 , and hence their OPEs are singular. In such a theory each primary field has an associated set of states, called a Verma module, created by the so-called descendants (irrelevant operators) of the primary field. A CFT with a finite number of primary fields is called a rational CFT (RCFT) (Ginsparg, 1989). The bosonized theory of the Dirac fermion is an example of an RCFT.

Perhaps the best-known (and most famous) and simplest example of an RCFT is the fixed-point theory of the classical 2D Ising model (which was solved originally by Onsager in 1944) and its quantum counterpart, the quantum Ising chain in a transverse field (see Chapter 5). The transfer matrix of the classical 2D model, or alternatively the Hamiltonian of the transverse Ising model chain, can be mapped using a Jordan-Wigner transformation to a system of 1D lattice fermions, qualitatively representing domain walls of the spin system (Schultz et al., 1964). However, due to the $\mathbb{Z}_{2}$ symmetry of the Ising model, the quantum Hamiltonian of the equivalent system does not conserve fermion number but only fermionic parity. In the
critical regime, in which the gap of the fermionic spectrum becomes vanishingly small, this system is represented by an effective field theory of Majorana fermions, instead of Dirac fermions, whose mass is tuned to zero at the (quantum) critical point. Since a theory of Majorana fermions has half the number of degrees of freedom of the Dirac field, the central charge of the Ising CFT is $c=1 / 2$ (instead of $c=1$ for Dirac fermions). In addition to the identity operator $I$, the CFT 2D Ising model has only three primary fields: (a) the spin field $\sigma$, the order-parameter field of the Ising model, with scaling dimension $1 / 8$; (b) the Majorana fermion $\psi$ with scaling dimension $1 / 2$; and (c) the energy density $\varepsilon$ of the Ising model (the mass term of the Majorana field) with scaling dimension 1. The spin field is also known as the twist field since it changes the boundary conditions of the Majorana fermion from periodic to anti-periodic. Other examples of RCFTs are the fixed points of the three-state Potts model, the Ising antiferromagnet in an uniform field, and many other so-called "minimal models" (Belavin et al., 1984; Friedan et al., 1984; Ginsparg, 1989; Di Francesco et al., 1997).

The Wess-Zumino-Witten model is another important example of an RCFT (Knizhnik and Zamolodchikov, 1984), which is the main focus of our interest in this chapter. For simplicity we will discuss WZW models with symmetry group $G=\mathrm{SU}(2)$ at general level $k$. We will not derive these results here because this is fairly technical and it is done in several excellent and standard texts devoted to CFT (Di Francesco et al., 1997).

The central charge of $\mathrm{SU}(N)_{k}$ WZW models was found by Knizhnik and Zamolodchikov,

$$
\begin{equation*}
c\left(\mathrm{SU}(N)_{k}\right)=\frac{k \operatorname{dim} G}{k+\mathfrak{g}}=\frac{k\left(N^{2}-1\right)}{k+N} \tag{7.189}
\end{equation*}
$$

where $\operatorname{dim} G$ is the rank of the algebra of $G$ and $\mathfrak{g}$ is the "dual Coxeter number" of $G$. For $\operatorname{SU}(N)$ they are given by $\operatorname{dim} G=N^{2}-1$ and $\mathfrak{g}=N$, respectively. For the special case of $\operatorname{SU}(N)_{1}(k=1)$, the central charge reduces to

$$
\begin{equation*}
c\left(\mathrm{SU}(N)_{1}\right)=N-1 \tag{7.190}
\end{equation*}
$$

which is an integer. Thus, one expects the $\mathrm{SU}(N)_{1}$ WZW models must also be describable as $N-1$ free fields. We will see below that this is indeed the case and that it is the content of non-abelian bosonization.

The one-loop beta function of the WZW model (accurate in the limit $k \rightarrow \infty$ ) was given in Eq. (7.160) and predicted the existence of an infrared-stable fixed point at the value of the coupling constant $\lambda^{2}=4 \pi / k$. This result was (essentially) confirmed by the CFT of the WZW model, which yields the slope of the beta function at the fixed point $\lambda^{2}=4 \pi / k$ as

$$
\begin{equation*}
\left.\frac{d \beta}{d \lambda^{2}}\right|_{\lambda^{2}=4 \pi / k}=-\frac{2 N}{N+k} \tag{7.191}
\end{equation*}
$$

which agrees with the one-loop result for $k$ large and confirms that $\lambda^{2}=4 \pi / k$ is indeed an infrared-stable fixed point (and hence a CFT).

Let us now discuss the primary fields of the WZW CFT (only for $\mathrm{SU}(2)$ ) and their scaling dimensions. Since the global symmetry of WZW models is $\mathrm{SU}(2) \times \mathrm{SU}(2)$ the primary fields carry the labels $(j, m)$ of the representations of the Lie group $\mathrm{SU}(2)$, where $j$ is a positive integer or half-integer and $|m| \leq j$ (in integer steps). Thus, the WZW field $g(x)$ is a $2 \times 2$ unitary matrix whose rows (and columns) transform as the fundamental (spinor) representation of each $\mathrm{SU}(2)$ and hence carries both quantum numbers,

$$
g(x)=\left(\begin{array}{cc}
g_{\frac{1}{2}, \frac{1}{2}} & g_{\frac{1}{2},-\frac{1}{2}}  \tag{7.192}\\
g_{\frac{1}{2},-\frac{1}{2}} & g_{-\frac{1}{2},-\frac{1}{2}}
\end{array}\right)
$$

However, while for the Lie group $\mathrm{SU}(2)$ there is no upper bound to the value of $j$, for an $\mathrm{SU}(2)_{k} \mathrm{WZW}$ model (or equivalently for an $\mathrm{SU}(2)_{k} \mathrm{Kac}-$ Moody algebra) the tower of "angular-momentum" states is truncated at the upper bound $j \leq j_{\max }=k / 2$. In other words, there is a finite number of allowed primary fields labeled by $0 \leq j \leq k / 2$. This is a general feature of WZW models.

Thus, the $\mathrm{SU}(2)_{1}$ WZW model has only two primary fields: (a) the identity $I$ and (b) the spinor representation given by the WZW field $g(x)$ itself. This is also the spectrum of primary fields of the $\mathrm{SU}(N)_{1}$ WZW model. The drastic effects of truncation can be seen in the OPE of the field $g(x)$ with itself: the OPE of $g$ with itself reduces to the identity field. Symbolically we denote this as $1 / 2 \otimes 1 / 2=0$ and we say that two WZW fields fuse into the identity (only for $\mathrm{SU}(2)_{1}$ !). Notice that the (expected) fusion into the spin- 1 representation is absent since this is not allowed by the truncation of the spectrum of primary fields.

More generally, $\mathrm{SU}(2)_{k}$ has the primary fields with quantum numbers $(j, m)$, labeled by $\Phi_{(j, m)}$, where $j$ is an integer or half-integer in the range $0 \leq j \leq k / 2$ for $k$ even (or up to $(k-1) / 2$ if $k$ is odd), $m$ are integers or half-integers in the range $-j \leq m \leq j$, and the identifications $(j, m) \cong(k / 2-j, m+k / 2),(j, m) \cong$ $(j, m+k)$ hold. The fields $\Phi_{(j, m)}$ have scaling dimensions

$$
\begin{equation*}
\Delta_{(j, m)}=\frac{j(j+1)}{k+2} \tag{7.193}
\end{equation*}
$$

In the case of $\mathrm{SU}(2)_{2}$ there are three primary fields: (a) the identity $I$, (b) the WZW field (again the spinor representation) with scaling dimension $\Delta_{(1 / 2, \pm 1 / 2)}=3 / 16$, and (c) the spin-1, or adjoint, representation, with scaling dimension $\Delta_{(1, m)}=\frac{1}{2}$. Thus, at level $k=2$ two WZW fields can now fuse either into the identity $I$ or
into the adjoint primary field. However, due to the truncation, two adjoint primary fields can fuse only into the identity.

The two-point function of the WZW field $g$ is (in Euclidean space-time with $z=x_{1}+i x_{2}$ and $\bar{z}$ being the complex conjugate)

$$
\begin{equation*}
\left\langle g_{\alpha_{1}}^{\beta_{1}}(z, \bar{z}) g^{-1} \beta_{\beta_{2}}^{\alpha_{2}}(0,0)\right\rangle=M^{-2 \Delta_{g}} \frac{\delta_{\alpha_{1}}^{\alpha_{2}} \delta_{\beta_{1}}^{\beta_{2}}}{(z \bar{z})^{\Delta_{g}}} \tag{7.194}
\end{equation*}
$$

where $\Delta_{g}$ is the scaling dimension of the field $g$, and $M$ is an ultraviolet cutoff with units of mass (or length ${ }^{-1}$ ). For an $\mathrm{SU}(N)_{k}$ WZW theory $\Delta_{g}$ is given by

$$
\begin{equation*}
\Delta_{g}\left(\mathrm{SU}(N)_{k}\right)=\frac{N^{2}-1}{N(N+k)} \tag{7.195}
\end{equation*}
$$

The WZW field $g$ (just like the other fields such as the adjoint primary) is classically dimensionless and hence has scaling dimension 0 at the trivial (and unstable) $\lambda \rightarrow 0$ fixed point. Thus, the non-trivial scaling dimension of Eq. (7.195) is the anomalous dimension of the field $g$ at the non-trivial (infrared-stable) fixed point of the WZW model.

From Eq. (7.195) we see that, for $\mathrm{SU}(N)_{1}$, the scaling dimension of the WZW field $g$ is indeed

$$
\begin{equation*}
\Delta_{g}\left(\mathrm{SU}(N)_{1}\right)=\frac{N-1}{N} \tag{7.196}
\end{equation*}
$$

as we deduced it should be the case for non-abelian bosonization to work; see the discussion below Eq. (7.165). Hence, at least at the level of matching the scaling dimensions, this result justifies this operator identification of non-abelian bosonization for fermionic bilinears.

However, to prove that this is an operator identity it is necessary to show not only that the scaling dimensions match but also that their correlation functions are the same. Knizhnik and Zamolodchikov (1984) showed that the correlators of Eq. (7.165) are identical for $\mathrm{SU}(N)_{1}$. In the derivation of this result the important fact that the OPE of the WZW field contains only the identity field (and that no other representations appear) was used. Hence the truncation of the spectrum of primaries is essential in order for the non-abelian bosonization identity to hold.

In general the four-point function of the WZW field has the form $(i=1, \ldots, 4)$

$$
\begin{align*}
G\left[z_{i}, \bar{z}_{i}\right] & =\left\langle g\left(z_{1}, \bar{z}_{1}\right) g^{-1}\left(z_{2}, \bar{z}_{2}\right) g^{-1}\left(z_{3}, \bar{z}_{3}\right) g\left(z_{4}, \bar{z}_{4}\right)\right\rangle  \tag{7.197}\\
& =\left[\left(z_{1}-z_{4}\right)\left(z_{2}-z_{3}\right)\left(\bar{z}_{1}-\bar{z}_{4}\right)\left(\bar{z}_{2}-\bar{z}_{3}\right)\right]^{-\Delta_{g}} G(x, \bar{x})
\end{align*}
$$

where $G(x, \bar{x})$ is a function that depends only on the cross ratio $x$ (and its complex conjugate $\bar{x}$ ),

$$
\begin{equation*}
x=\frac{\left(z_{1}-z_{2}\right)\left(z_{3}-z_{4}\right)}{\left(z_{1}-z_{4}\right)\left(z_{2}-z_{3}\right)} \tag{7.198}
\end{equation*}
$$

For general level $k$ the structure of the function $G(x, \bar{x})$ is complex and reflects the fusion channels available to the primary field. We will return to this problem in Chapters 14 and 15, where we discuss non-abelian quantum Hall states. Here we will focus on the case of $\operatorname{SU}(N)_{1}$, where the structure of $G(x, \bar{x})$ is simple (reflecting the fact that for $k=1$ the WZW field can only fuse into the identity):

$$
\begin{equation*}
G(x, \bar{x})=[x \bar{x}(1-x)(1-\bar{x})]^{1 / N}\left(\frac{\delta_{\alpha_{1}}^{\alpha_{2}} \delta_{\alpha_{3}}^{\alpha_{4}}}{x}+\frac{\delta_{\alpha_{1}}^{\alpha_{4}} \delta_{\alpha_{3}}^{\alpha_{2}}}{1-x}\right)\left(\frac{\delta_{\beta_{2}}^{\beta_{1}} \delta_{\beta_{3}}^{\beta_{4}}}{\bar{x}}+\frac{\delta_{\beta_{2}}^{\beta_{4}} \delta_{\beta_{3}}^{\beta_{1}}}{1-\bar{x}}\right) \tag{7.199}
\end{equation*}
$$

### 7.13 Applications of non-abelian bosonization

We will now discuss a few applications of non-abelian bosonization. Our principal aim is to consider quantum spin chains.

### 7.13.1 Free fermions

We are now ready to discuss the bosonization of free fermions. Again we consider a theory of $N$ free Dirac fields in $(1+1)$ dimensions with both chiralities, i.e. $\psi_{\mathrm{R}, \alpha}$ and $\psi_{\mathrm{L}, \alpha}$ with $\alpha=1, \ldots, N$. The free Dirac theory has a $\mathrm{U}(N)$ symmetry that can be regarded as $\mathrm{U}(N) \simeq \mathrm{SU}(N) \times \mathrm{U}(1)$, where $\mathrm{U}(1)$ is the charge sector and $\mathrm{SU}(N)$ is the "spin" sector. We return to the conjecture that the fermionic bilinears are given by a factorized operator of the form (which is the same as Eq. (7.165))

$$
\begin{equation*}
: \psi_{\mathrm{R}, \alpha}(z) \psi_{\mathrm{L}}^{\dagger \beta}(\bar{z}): \sim M e^{i \sqrt{\frac{4 \pi}{N}} \phi(z, \bar{z})} g_{\alpha}^{\beta}(z, \bar{z}) \tag{7.200}
\end{equation*}
$$

The correlation functions of the right-hand side (r.h.s.) factorize into a contribution of the scalar field $\phi$ and a contribution of the WZW field $g$ since these two fields are decoupled from each other. Using the results of the previous section and similar results for the vertex operator of the $\phi$ field with the lowest charge, $\exp (i \sqrt{4 \pi / N} \phi)$, with scaling dimension $1 / N$, we find that the four-point function of the r.h.s. of Eq. (7.200) has the same form as Eq. (7.197) but with a shifted scaling dimension $\tilde{\Delta}$, which is the sum of the scaling dimensions of the WZW field $g$ and of the vertex operator,

$$
\begin{equation*}
\tilde{\Delta}=\Delta_{g}\left(\mathrm{SU}(N)_{1}\right)+\frac{1}{N}=\frac{N-1}{N}+\frac{1}{N}=1 \tag{7.201}
\end{equation*}
$$

Hence, the composite operator of the r.h.s. of Eq. (7.200) has scaling dimension 1, as it should be for a free-fermion bilinear. However, notice that the individual factors separately have non-trivial scaling dimensions. Similarly, the central charge of the theory is the sum of the central charge of the $\phi$-field and the central
charge of the WZW field. For a level $k=1$ WZW theory we find that the central charge is

$$
\begin{equation*}
c=c(\mathrm{U}(1))+c\left(\mathrm{SU}(N)_{1}\right)=1+N-1=N \tag{7.202}
\end{equation*}
$$

which is the central charge of $N$ free Dirac fields.
These arguments prove that the composite operator of the r.h.s. of Eq. (7.200) is indeed equivalent to the fermionic operator (the l.h.s.), including the $\mathrm{SU}(N)$ group-theoretic tensors given by the function $G(x, \bar{x})$. This completes the proof of non-abelian bosonization.

These results have been generalized to the case of a theory of Dirac fermions with $N_{\mathrm{c}}$ colors and $N_{\mathrm{f}}$ flavors (Affleck, 1986a), $\psi_{\mathrm{R}, i, f}$ and $\psi_{\mathrm{L}, a, \alpha}$ with $i=$ $1, \ldots, N_{\mathrm{c}}$ and $f=1, \ldots, N_{\mathrm{f}}$. This theory has a $\mathrm{U}\left(N_{\mathrm{c}} N_{\mathrm{f}}\right)$ symmetry that can be decomposed into a $\mathrm{U}(1)$ charge sector, an $\mathrm{SU}\left(N_{\mathrm{c}}\right)$ color sector and an $\mathrm{SU}\left(N_{\mathrm{f}}\right)$ flavor sector. The energy-momentum tensor (and the Hamiltonian) decompose again into a sum of right- and left-moving terms, each of which has again a Sugawara form and is expressed as a bilinear of the charge, color and spin currents $J, J^{A}$ (with $A=1, \ldots, N_{\mathrm{c}}^{2}$ ), and $J^{a}$ (with $a=1, \ldots, N_{\mathrm{f}}$ ) respectively. The currents obey a level- $N_{\mathrm{c}} N_{\mathrm{f}} \mathrm{U}(1) \mathrm{Kac}-$ Moody algebra (charge sector), a level- $N_{\mathrm{f}} \mathrm{SU}\left(N_{\mathrm{c}}\right)$ Kac-Moody algebra (color sector), and a level- $N_{\mathrm{c}} \mathrm{SU}\left(N_{\mathrm{f}}\right)$ algebra (flavor sector). Thus we have decomposed a level-1 $\mathrm{U}\left(N_{\mathrm{c}} N_{\mathrm{f}}\right)$ theory as

$$
\begin{equation*}
\mathrm{U}\left(N_{\mathrm{c}} N_{\mathrm{f}}\right)_{1} \simeq \mathrm{U}(1)_{N_{\mathrm{c}} N_{\mathrm{f}}} \times \mathrm{SU}\left(N_{\mathrm{c}}\right)_{N_{\mathrm{f}}} \times \mathrm{SU}\left(N_{\mathrm{f}}\right)_{N_{\mathrm{c}}} \tag{7.203}
\end{equation*}
$$

The Hamiltonian for the right-moving fields is

$$
\begin{equation*}
\mathcal{H}=\frac{\pi}{N_{\mathrm{c}} N_{\mathrm{f}}} J J+\frac{2 \pi}{N_{\mathrm{c}}+N_{\mathrm{f}}} J^{A} J^{A}+\frac{2 \pi}{N_{\mathrm{c}}+N_{\mathrm{f}}} J^{a} J^{a} \tag{7.204}
\end{equation*}
$$

and similarly for the left-moving fields. Each non-abelian sector has a bosonized effective action in terms of $\operatorname{SU}\left(N_{\mathrm{c}}\right)_{N_{\mathrm{f}}}$ and $\operatorname{SU}\left(N_{\mathrm{f}}\right)_{N_{\mathrm{c}}}$ WZW theories (of each chirality). It is easy to see that the (Virasoro) central charges add up to the right value

$$
\begin{align*}
c\left(\mathrm{U}\left(N_{\mathrm{c}} N_{\mathrm{f}}\right)_{1}\right) & =c(\mathrm{U}(1))+c\left(\mathrm{SU}\left(N_{\mathrm{c}}\right)_{N_{\mathrm{f}}}\right)+c\left(\mathrm{SU}\left(N_{\mathrm{f}}\right)_{N_{\mathrm{c}}}\right) \\
& =1+\frac{N_{\mathrm{f}}\left(N_{\mathrm{c}}^{2}-1\right)}{N_{\mathrm{c}}+N_{\mathrm{f}}}+\frac{N_{\mathrm{c}}\left(N_{\mathrm{f}}^{2}-1\right)}{N_{\mathrm{f}}+N_{\mathrm{c}}}=N_{\mathrm{f}} N_{\mathrm{c}} \tag{7.205}
\end{align*}
$$

In particular the generalization of Eq. (7.200) for the fermion bilinears is now

$$
\begin{equation*}
: \psi_{\mathrm{R}, i, f}(z) \psi_{\mathrm{L}}^{\dagger j, l}(\bar{z}): \sim M e^{i \sqrt{\frac{4 \pi}{\mu_{\mathrm{c}} N_{\mathrm{f}}}} \phi(z, \bar{z})} g_{i}^{j}(z, \bar{z}) h_{f}^{l}(z, \bar{z}) \tag{7.206}
\end{equation*}
$$

where $g \in \operatorname{SU}\left(N_{\mathrm{c}}\right)$ and $h \in \mathrm{SU}\left(N_{\mathrm{f}}\right)$. The scaling (trivial!) dimension of the fermion bilinear is the sum of the (non-trivial!) scaling dimensions of the factors.

$$
\begin{equation*}
\Delta=\frac{1}{N_{\mathrm{c}} N_{\mathrm{f}}}+\frac{N_{\mathrm{c}}^{2}-1}{N_{\mathrm{c}}\left(N_{\mathrm{c}}+N_{\mathrm{f}}\right)}+\frac{N_{\mathrm{f}}^{2}-1}{N_{\mathrm{f}}\left(N_{\mathrm{c}}+N_{\mathrm{f}}\right)}=1 \tag{7.207}
\end{equation*}
$$

### 7.13.2 Fermions with repulsive interactions: gapping the charge sector

One physical system in which the fermions acquire a charge gap but not a spin gap is the 1D Hubbard model (see Chapter 6). In the weak-coupling regime the Hubbard model is equivalent to a theory of $N=2$ Dirac fermions with various interactions, cf. Eq. (6.67) and Eq. (6.73). In that framework the gap in the charge sector (with $\mathrm{U}(1)$ symmetry) arises due to an Umklapp process. A key feature of the Hubbard model is spin-charge separation. Thus, the effective interacting fermionic field theory involves two Dirac fermions (one for each spin component) with current-current interactions (as well as an Umklapp term at half-filling), all of which exhibit the phenomenon of spin-charge separation.

As we also saw in Chapter 6, spin-charge separation is also apparent in the abelian bosonization form of the theory in which the effective Lagrangian decouples into a sum of two terms, one for the charge sector and one for the spin sector, with the charge sector becoming gapped at half-filling due to the effects of the marginally relevant Umklapp interaction.

Here we will consider again the same system using the non-abelian bosonization discussed in detail by Affleck and Haldane (1987). To simplify the discussion I will ignore the purely forward-scattering interaction $g_{4}$, which merely renormalizes (in opposite ways) the velocities of the charge and spin modes. (I will also choose "relativistic" units in which the Fermi velocity is set to unity, $v_{\mathrm{F}}=1$.) As we saw earlier in this section, the free-fermion piece of the Hamiltonian of Eq. (6.73) maps into a free scalar $\phi_{\mathrm{c}}$ for the charge sector and an $\mathrm{SU}(2)$ level $k=1$ WZW field $g$ for the spin sector, with the following action:

$$
\begin{equation*}
S_{0}=\int d^{2} x \frac{1}{2}\left(\partial_{\mu} \phi_{\mathrm{c}}\right)^{2}+S_{\mathrm{WZW}}^{k=1}[g] \tag{7.208}
\end{equation*}
$$

The charge sector of the theory has an effective Lagrangian that includes the effects both of the backscattering interaction term of the Lagrangian of the $U(1)$ currents,

$$
\begin{equation*}
\mathcal{L}_{\text {int }}^{\text {charge }}=-\frac{1}{2}\left(2 g_{2}-g_{1}\right) J_{\mathrm{R}} J_{\mathrm{L}} \tag{7.209}
\end{equation*}
$$

a marginal perturbation whose effect is to renormalize the Luttinger charge parameter away from the free-fermion value $K_{\mathrm{c}}=1$, resulting again in $K_{\mathrm{c}}>1$ for repulsive interactions, and of the Umklapp interaction term. Here we have kept the theory

Lorentz-invariant and set the velocity of the charge and spin modes to 1 . Because of this, the resulting expression for $K_{\mathrm{c}}=\left[1+\left(2 g_{2}-g_{1}\right) /(2 \pi)\right]^{1 / 2}$ differs from that given in Eq. (6.139).

After bosonization the Lagrangian for the charge sector changes to

$$
\begin{equation*}
\mathcal{L}_{\text {charge }}\left[\phi_{\mathrm{c}}\right]=\frac{K_{\mathrm{c}}}{2}\left(\partial_{\mu} \phi_{\mathrm{c}}\right)^{2}+\text { constant } \times \cos \left(2 \sqrt{2 \pi} \phi_{\mathrm{c}}\right) \tag{7.210}
\end{equation*}
$$

Here we have used the fact that the Umklapp term describes processes in which a spin-singlet pair of right movers becomes a spin-singlet pair of left movers (and vice versa). Since the operators involved are separately spin singlets, they are independent of the WZW field $g$ (more precisely, they involve det $g$, which is a spin singlet and is equal to 1 for a unitary group). Moreover, as before, the Umklapp term is marginally relevant at the free-fermion fixed point. Thus, the charge sector flows to a strong-coupling fixed point corresponding to the massive phase of a sine-Gordon field theory in which the operator $\cos \left(2 \sqrt{2 \pi} \phi_{c}\right)$ has a non-vanishing expectation value. The mass gap of the sine-Gordon theory is the charge gap of the Hubbard model (in the scaling regime).

Classically this phase corresponds to pinning of the charge boson to the classical ground states $\phi_{\mathrm{c}}=\sqrt{\pi / 2} n_{\mathrm{c}}$, where $n_{\mathrm{c}}$ is an arbitrary integer. Semi-classically, one can qualitatively describe this phase using a harmonic approximation, which amounts to expanding the fluctuations of the charge boson $\phi_{c}$ about these classical ground states, leading to a finite effective mass of the field $\phi_{c}$. A more accurate description uses the mass gap of the quantum sine-Gordon theory, a quantum integrable system which is also solvable by a generalization of the Bethe ansatz (Faddeev, 1984; Rajaraman, 1985). Nevertheless, in spite of this "classical" behavior, the expectation value of the (spin-singlet) CDW order-parameter operator, $\left\langle\psi_{\mathrm{R}, \alpha}^{\dagger} \psi_{\mathrm{L}, \alpha}\right\rangle+$ c.c. $\propto\left\langle\cos \left(\sqrt{2 \pi} \phi_{\mathrm{c}}\right)\right\rangle$, vanishes in this phase since this operator is odd under the exact remaining symmetry of the Hamiltonian, $n_{\mathrm{c}} \rightarrow n_{\mathrm{c}}+1$. Hence, in this phase with a gapped charge sector the charge density remains uniform.

Similarly, the backscattering coupling term of the chiral $\mathrm{SU}(2)$ spin currents leads to a term in the (non-abelian) bosonized action, which now becomes

$$
\begin{equation*}
S_{\mathrm{int}}^{\mathrm{spin}}=S_{\mathrm{WZW}}^{k=1}[g]+\int d^{2} x 2 g_{1} \vec{J}_{\mathrm{R}} \cdot \vec{J}_{\mathrm{L}} \tag{7.211}
\end{equation*}
$$

where the currents are given by their bosonized expressions in Eq. (7.155). We will now compute the one-loop beta function for the coupling constant $g_{1}$ using the perturbative RG method of Section 4.5. As we saw there, we need to know the scaling dimension of the perturbation and the coefficients of the OPE, cf. Eq. (4.61). The fermionic spin currents $\vec{J}_{\mathrm{R}}$ and $\vec{J}_{\mathrm{L}}$ obey the $\mathrm{SU}(2)_{1} \mathrm{Kac}-$ Moody algebra of Eq. (7.150). It is easy to show that as a result they also obey the following OPEs (Knizhnik and Zamolodchikov, 1984; Di Francesco et al., 1997):

$$
\begin{equation*}
J_{\mathrm{R}}^{a}(z) J_{\mathrm{R}}^{b}(w) \sim \frac{1}{2 \pi(z-w)^{2}} \delta_{a b}+i \frac{1}{2 \pi(z-w)} \epsilon^{a b c} J_{\mathrm{R}}^{c}(w) \tag{7.212}
\end{equation*}
$$

and similarly for the left movers. Here $z$ and $w$ are complex coordinates and $\bar{z}$ and $\bar{w}$ are their complex conjugates.

To compute the one-loop beta function we need the OPE of the operator $\vec{J}_{\mathrm{R}} \cdot \vec{J}_{\mathrm{L}}$ with itself fusing into itself,

$$
\begin{equation*}
\left[\vec{J}_{\mathrm{R}}(z) \cdot \vec{J}_{\mathrm{L}}(\bar{z})\right]\left[\vec{J}_{\mathrm{R}}(w) \cdot \vec{J}_{\mathrm{L}}(\bar{w})\right] \sim \frac{C}{|z-w|^{2}} \vec{J}_{\mathrm{R}}(w) \cdot \vec{J}_{\mathrm{L}}(\bar{w}) \tag{7.213}
\end{equation*}
$$

where we have kept only the term we are interested in of this OPE. For $\operatorname{SU}(N)_{1}$ the OPE coefficient $C$ is

$$
\begin{equation*}
C=\frac{N}{2 \pi^{2}} \tag{7.214}
\end{equation*}
$$

where we used the fact that for the group $\mathrm{SU}(N)$ the structure constants $f^{a b c}$ satisfy

$$
\begin{equation*}
\sum_{a, b} f^{a b c} f^{a b d}=2 N \delta_{c d} \tag{7.215}
\end{equation*}
$$

and that the $\mathrm{SU}(N)$ generators $\left\{t^{a}\right\}$ satisfy

$$
\begin{equation*}
\sum_{a} t_{i j}^{a} t_{k l}^{a}=N \delta_{i l} \delta_{j k}-\delta_{i j} \delta_{k l} \tag{7.216}
\end{equation*}
$$

For $\mathrm{SU}(2)$, the structure constants are given by the Levi-Civita tensor, $f^{a b c}=\epsilon^{a b c}$.
On the other hand, the scaling dimension of the chiral current backscattering interaction is $\Delta=2$, which is to say that this is a marginal operator. Hence, Eq. (4.61) tells us that the one-loop beta function for the coupling $g_{1}$ is given by (using that $S_{D}=2 \pi$ for $D=2$ )

$$
\begin{equation*}
\beta\left(g_{1}\right)=-\frac{N}{\pi} g_{1}^{2}+O\left(g_{1}^{3}\right) \tag{7.217}
\end{equation*}
$$

This result implies that for repulsive interactions, for which $g_{1}>0$, the backscattering coupling of the chiral spin currents is a marginally irrelevant operator. Therefore, the effective backscattering coupling in the spin channel flows to zero, although very slowly. The main effect of this slow flow to zero coupling is that there are logarithmic corrections to scaling in the correlators of the (Néel) order parameter.

So, tentatively, we will identify the WZW CFT with the fixed point for the spin sector. There is a possible pitfall in this argument. The WZW theory has a relevant operator, the WZW field $g$, which, as we saw for $\mathrm{SU}(2)$, has scaling dimension $\frac{1}{2}$ (cf. Eq. (7.196)). However, the WZW field $g$ breaks the symmetry $g \rightarrow-g$. This amounts to a change in the sign of the trace of the order parameter, represented here
by the mass term $\psi_{\mathrm{R}, \alpha}^{\dagger} \psi_{\mathrm{L}, \beta}$; see Eq. (7.165). Since this operator involves the mixing of right and left movers, it carries (lattice) momentum $\pi$ and breaks translation invariance. Therefore this operator is not allowed in the Hamiltonian unless translation invariance is explicitly broken in the system, say by a spin-Peierls period-2 modulation of the effective exchange interaction, which is a spin-singlet operator that breaks translation invariance of displacements by one lattice spacing (but not two), or by a staggered magnetic field, which couples linearly to the Néel order parameter, the staggered magnetization, and breaks translation invariance (again of displacements by one lattice spacing) and global $\mathrm{SU}(2)$ symmetry. Thus, if translation and global $\operatorname{SU}(2)$ invariance are global symmetries of the Hamiltonian, the WZW field $g$ cannot appear linearly in the effective field theory. The same argument applies to models with $\mathrm{SU}(N)_{1}$ symmetry.

### 7.13.3 Back to spin chains

We end this discussion by analyzing the implications of these results for the case of the spin $-\frac{1}{2}$ quantum Heisenberg antiferromagnetic chains. From the above analysis we conclude, again up to logarithmic corrections, that the spin sector of the interacting fermionic system is described at low energies by the $\mathrm{SU}(N)_{1}$ WZW fixed point. Since the charge sector is massive (gapped) for $\mathrm{SU}(2)_{1}$, the charge degrees of freedom effectively decouple at low energies and, effectively, are projected out. Thus the WZW CFT is the actual description of the long-distance physics of the 1D Hubbard model at half-filling. Since the charge gap grows monotonically as the interaction increases, this result should apply all the way to the strong-coupling limit where the half-filled Hubbard model reduces to the 1D spin- $\frac{1}{2}$ quantum antiferromagnet, albeit with a finite non-universal renormalization of the spin-wave velocity.

In Section 5.7 we discussed the scaling behavior of the quantum Heisenberg antiferromagnetic chain using abelian bosonization and computed the scaling dimensions of the operators (see Table 5.1). We can now see that the results from non-abelian bosonization are consistent with this analysis. Indeed, the Néel order-parameter operator $N^{a}$ of the interacting fermionic system is given by

$$
\begin{equation*}
N^{a}(x) \sim \psi_{\mathrm{R}, \alpha}^{\dagger}(x) t_{\alpha \beta}^{a} \psi_{\mathrm{L}, \beta}(x)+\text { h.c. } \sim \cos (\sqrt{2 \pi} \phi) \operatorname{tr}\left(t^{a} g(x)\right) \tag{7.218}
\end{equation*}
$$

Since the charge field $\phi$ is effectively massive (due to the charge gap), we can set the factor corresponding to the vertex operator of the charge boson field $\phi$ to its non-vanishing expectation value, $\langle\cos (\sqrt{2 \pi} \phi(x))\rangle=$ constant. Hence, the Néel order-parameter field is effectively the WZW field $g(x), N^{a}(x) \sim \operatorname{tr}\left(t^{a} g(x)\right)$.

This identification allows us to read off the scaling dimension of the Néel order-parameter field given that the correlator of the WZW $g$ field is known from

Eq. (7.194). Thus, we conclude that the scaling dimension of the Néel orderparameter operator is $\Delta=\frac{1}{2}$, which agrees with what we have already found using abelian bosonization. This result was also confirmed numerically (including the effects of the logarithmic corrections to scaling) by Moreo (1987), as well as from a scaling analysis (Essler et al., 2005) of the exact Bethe-ansatz solution of the 1D Hubbard model (Lieb and Wu, 1968). This operator identification also allows us to draw the non-trivial conclusion that the four-point function of the Néel order parameter is given (up to a multiplication constant) by the four-point function of the WZW field, Eq. (7.197) and Eq. (7.199).

### 7.13.4 Fermions with attractive interactions: gapping the spin sector

We can also apply these ideas to the case of a system with generic interactions $g_{1}$ and $g_{2}$. This corresponds to a generalized (or extended) Hubbard model. Before we considered the case of repulsive interactions for which $g_{1}>0$ and saw that, for a half-filled system, the charge sector flows to a gapped state while the spin sector flows to the fixed point of an $\mathrm{SU}(2)_{1}$ WZW model and remains gapless.

Let us consider now the case in which $g_{1}<0$, which for the lattice model corresponds to an attractive Hubbard interaction $U<0$. The RG flow of Eq. (7.217) still applies. However, for $g_{1}<0$ the beta function now has the opposite sign,

$$
\begin{equation*}
\beta\left(\left|g_{1}\right|\right)=+\frac{N}{\pi} g_{1}^{2}+O\left(g_{1}^{3}\right) \tag{7.219}
\end{equation*}
$$

which now has the same form as in the 2D non-linear sigma model. Hence we conclude that for attractive interactions the backscattering interaction of the chiral spin currents is marginally relevant and flows to strong coupling. Therefore, in this regime we expect the spin sector to be massive. Indeed, if $g_{1}<0$ flows to strong (attractive) coupling, the $\mathrm{SU}(2)$ currents, $J_{\mu}(x)^{a} \sim \frac{1}{2} \bar{\psi}_{\alpha}(x) \gamma^{\mu} t_{\alpha \beta}^{a} \psi_{\beta}(x)$, as local operators must vanish when acting on the low-energy Hilbert space of states,

$$
\begin{equation*}
\left.J_{\mu}^{a}(x) \mid \text { Phys }\right\rangle=0 \tag{7.220}
\end{equation*}
$$

Thus, in this phase the ground state is an $\mathrm{SU}(2)$ singlet and all excited states with non-trivial $\mathrm{SU}(2)$ quantum numbers are massive. In the strong-coupling limit, all states with $\operatorname{SU}(2)$ (spin) quantum numbers are effectively projected out, or gauged away, much in the same way as the charge degrees of freedom become projected out in the repulsive case. The effective field theory of the strong-coupling fixed point is a gauged WZW model. In this case it is an $S U(2)$ subgroup that has been gauged.

On the other hand, the fate of the charge sector at half-filling depends now on the sign of the combination of coupling constants $g_{\mathrm{c}}=2 g_{2}-g_{1}$ for the chiral charge
currents. If the microscopic interactions are such that this effective coupling is still repulsive, $g_{\mathrm{c}}>0$, then the Umklapp term will also be marginally relevant and also flows to strong coupling. Thus, in this case both the spin and the charge sectors are massive. An analysis of the lattice model reveals that this phase has a broken symmetry of translations by one lattice spacing, i.e. a period-2 CDW phase such as one with a dimerized ground state. On the other hand, if the effective coupling constant for backscattering interaction of the chiral charge currents also changes sign, $g_{\mathrm{c}}<0$, as in the case of the 1D Hubbard model, the phase diagram for the charge sector now involves the full Kosterlitz-Thouless RG flow, resulting either in a massive phase (dimerized) or in a line of fixed points and a massless charge phase. In the case of the Hubbard model the charge sector is gapless. A uniform phase with gapless charge excitations and gapped spin excitations is a Luther-Emery liquid and is effectively a 1D superconductor.

## 8

## Spin-liquid states

In the previous chapters we discussed mostly ordered Néel-like ground states of spin systems. The sole exception was the case of the spin chains in which the ordered state is always destroyed by quantum fluctuations. In this chapter we begin a discussion of the ground states of quantum magnets, which, as a result of strong fluctuations, lose the long-range order of their spin degrees of freedom. The key driving force behind this quantum disorder is frustration.

### 8.1 Frustration and disordered spin states

It is possible to drive a Heisenberg model toward a disordered state. One way to do that is to add extra interactions, which, if they are strong enough, may destroy the Néel behavior. A popular choice is to consider next-nearest-neighbor interactions with strength $J_{2}$ (Fig. 8.1). These interactions frustrate the system in the sense that, for nearest-neighbor interaction $J_{1}$ close to $J_{2}$, the classical Néel state becomes degenerate in energy with other classical configurations that differ from it by local spin flips. Quantum mechanically, one may expect a substantial increase of fluctuations, which should further decrease the value of the moment.

By following the steps that led to the non-linear sigma model (see Sections 7.5 and 7.9) and to the bare coupling constant $g$ and spin-wave velocity $v_{s}$ (Eq. (7.141)), we can compute the new values of $g$ and $v_{\mathrm{s}}$ if we assume that at least the short-range order has the Néel structure of $J_{2}=0$. Clearly, this assumption is correct only for small $J_{2}$ and should break down for $J_{2} \approx J_{1}$. We find

$$
\begin{align*}
& g^{\prime}=\frac{g}{\sqrt{1-2 J_{2} / J_{1}}} \equiv u^{\prime} a_{0}  \tag{8.1}\\
& v_{\mathrm{s}}^{\prime}=v_{\mathrm{s}} \sqrt{1-2 J_{2} / J_{1}} \tag{8.2}
\end{align*}
$$

Thus, the main effects of frustrating interactions, in the neighborhood of a Néel ordered state, are the increase of the bare coupling $g$ and the decrease of the
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-270.jpg?height=440&width=452&top_left_y=203&top_left_x=634)

Figure 8.1 A square lattice with nearest-neighbor $J_{1}$ and next-nearest-neighbor $J_{2}$ interactions.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-270.jpg?height=450&width=447&top_left_y=777&top_left_x=636)

Figure 8.2 A $\vec{Q}=(\pi, 0)$ Néel state.
spin-wave velocity $v_{\mathrm{s}}$. It is also clear that, for values of $J_{2}$ that are sufficiently large, the bare dimensionless coupling constant $u^{\prime}$ will become larger than the critical value $u^{*}$. Consequently, there should be a critical value of the next-nearest-neighbor coupling strength $J_{2 c}$ beyond which the long-range Néel order is destroyed. This theory would then predict that for $J_{2} \geq J_{2 \mathrm{c}}$ the system becomes a quantum paramagnet.

It is also clear that if $J_{2}$ becomes large enough a new form of long-range order should be found. Indeed, if $J_{2} \gg J_{1}$ a Néel-like state but with wave vector $\vec{Q}=(\pi, 0)$ or $(0, \pi)$ is favored, instead of the usual $\vec{Q}=(\pi, \pi)$ ordered state (Fig. 8.2). This Néel-like state is antiferromagnetic along the $x$ axis but ferromagnetic along the $y$ axis. This form of antiferromagnetism occurs, for instance, in the iron pnictide materials, which are also high-tempertature superconductors.

The low-energy effective action for this state should be a mixture of a sigma model that describes antiferromagnetism and a ferromagnetic Lagrangian of the form of Eq. (7.41). As a matter of fact, the Wess-Zumino terms of the individual
spins do not completely cancel out in this case. A term of the form

$$
\begin{equation*}
\gamma \int d^{3} x \vec{m} \cdot\left(\partial_{0} \vec{m} \times \partial_{1} \vec{m}\right) \tag{8.3}
\end{equation*}
$$

is found, where $\gamma$ is a parameter. However, this is not a topological (Hopf) term. It merely states that nearby chains exhibit the same antiferromagnetic order and that the spins on one chain precess in the average field of the neighboring chains. In reality the effective-field theory of this state is somewhat more complex.

The $\vec{Q}=(\pi, 0)$ state can also be described as two Néel states on two interpenetrating square lattices (rotated by $45^{\circ}$ ) with order parameters $\vec{n}_{1}$ and $\vec{n}_{2}$. The effective action is that of a non-linear sigma model with two coupled fields with an extra coupling $\sim \lambda\left(\vec{n}_{1} \cdot \vec{n}_{2}\right)^{2}$. For $\lambda<0$ this coupling favors a state in which $\vec{n}_{1} \cdot \vec{n}_{2}= \pm 1$. Thus suggests that there is a possible state in which the expectation values $\left\langle\vec{n}_{1}\right\rangle=\left\langle\vec{n}_{2}\right\rangle=0$ but $\left\langle\vec{n}_{1} \cdot \vec{n}_{2}\right\rangle \neq 0$, an (Ising) nematic spin state (Chandra et al., 1990).

These states should also become unstable for values lower than $J_{2} \approx J_{1}$. Thus, near the classically frustrated limit, $J_{1}=2 J_{2}$, new phases should appear. There are several possibilities. One possible phase is a state without long-range magnetic order, with a gap for spin excitations and a unique ground state. This is the usual paramagnetic state in the quantum zero-temperature limit (QP). We can think of other possible states by considering that when the spin-correlation length becomes very short (i.e. of the order of the lattice constant), the ground state is more naturally described in terms of pairs of spins forming $S=0$ singlet states over fairly short distances. These states are dubbed valence-bond (VB) states. Various disordered states that are based on the VB picture have been proposed. They include VB crystals and resonating-valence-bond (RVB) states, of both long- (Anderson, 1987) and short-range (Kivelson et al., 1987) varieties. Yet other proposals entertain the idea of ground states with broken time-reversal invariance. Such is the case of the Kalmeyer-Laughlin (KL) state for the triangular lattice (Kalmeyer and Laughlin, 1987), the chiral spin states for frustrated square lattices of Wen, Wilczek, and Zee (WWZ) (Wen et al., 1989), and states with noncollinear long-range order such as the multi-sublattice Néel states including spirals of Shraiman and Siggia (1989) and of Kane et al. (1990). In this chapter we will deal with the disordered phases. Affleck and collaborators (Affleck et al., 1988b) found a class of lattice models whose exact ground states are disordered.

### 8.2 Valence bonds and disordered spin states

Imagine for the moment a microscopic spin system with interactions which are so strong that the Néel state is destroyed. If the local coupling between the spins is
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-272.jpg?height=369&width=405&top_left_y=200&top_left_x=662)

Figure 8.3 A valence bond $|(i j)\rangle$ on a $4 \times 4$ square lattice.
very strong, we should expect that a picture based on spin waves, even massive ones, will not work very well. An alternative is to pair up the spins into singlet pairs or valence bonds (Anderson, 1973).

Our basic building block will be a singlet pair (valence bond) of two spins at sites $i$ and $j$ of the lattice, which are not necessarily nearest neighbors. Let $|(i j)\rangle$ denote a valence bond pairing up sites $i$ and $j$ (Fig. 8.3). The state $|(i j)\rangle$ is the antisymmetric combination of up and down spins on sites $i$ and $j$ :

$$
\begin{equation*}
|(i j)\rangle=\frac{1}{\sqrt{2}}\left(\left|\uparrow_{i} \downarrow_{j}\right\rangle-\left|\downarrow_{i} \uparrow_{j}\right\rangle\right) \tag{8.4}
\end{equation*}
$$

This is a spin-singlet state with respect to the total spin operators $\vec{S}^{2}$ and $S_{3}$,

$$
\begin{align*}
\vec{S}^{2}|(i j)\rangle & =0  \tag{8.5}\\
S_{3}|(i j)\rangle & =0 \tag{8.6}
\end{align*}
$$

with

$$
\begin{equation*}
\vec{S}=\vec{S}_{i}+\vec{S}_{j} \tag{8.7}
\end{equation*}
$$

Next, we proceed to partition the sites of a lattice (with an even number of sites) into sets of all possible pairs of sites. If we assign a valence bond to each pair of a given partition, we can define a VB state for the partition as a tensor product of the valence bonds for each pair of sites (Fig. 8.4):

$$
\begin{equation*}
|\mathrm{VB}\rangle=\prod_{\text {pairs }}\left|\left(i_{k} j_{k}\right)\right\rangle \tag{8.8}
\end{equation*}
$$

Since each valence bond is odd under the exchange of sites, the overall sign of the VB state is defined only up to a convention regarding how one labels the sites. I will assume that a fixed convention has been chosen. Since each pair is a spin singlet, the total spin of the system is necessarily equal to zero. However, zero total spin is not a good definition of a disordered spin state, as we will see below.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-273.jpg?height=388&width=397&top_left_y=205&top_left_x=647)

Figure 8.4 A VB state $|\mathrm{VB}\rangle$ on a $4 \times 4$ square lattice is the product of eight valence bonds $|(i, j)\rangle$.

A priori we are tempted to consider an arbitrary spin-singlet state as a linear superposition of VB states

$$
\begin{equation*}
|\Psi\rangle=\sum_{P} A(P) \prod_{\text {pairs }}\left|\left(i_{k} j_{k}\right)\right\rangle \tag{8.9}
\end{equation*}
$$

which is a sum over all partitions $P=\left\{\left(i_{k} j_{k}\right)\right\}$ with amplitude $A(P)$. However, we run into a difficulty here. The VB states are not orthogonal and, which is more important, in general they cannot all be linearly independent at the same time. The set of VB states is, in general, an over-complete set of states. Therefore, they are not good states for expanding a general wave function. On the other hand, if one is interested in just constructing a variational wave function, it may be convenient to write expressions of the type of Eq. (8.9) with variational parameters. One popular wave function has a factorized amplitude. In other words, $A(P)$ is written in the form

$$
\begin{equation*}
A(P)=\prod_{\text {pairs }} a\left(i_{k}, j_{k}\right) \tag{8.10}
\end{equation*}
$$

and the total wave function looks like

$$
\begin{equation*}
|\Psi\rangle=\sum_{P} \prod_{\text {pairs }} a\left(i_{k}, j_{k}\right)\left|\left(i_{k} j_{k}\right)\right\rangle \tag{8.11}
\end{equation*}
$$

If we further assume that $a\left(i_{k}, j_{k}\right)$ is only a function of the distance between the paired sites $i_{k}$ and $j_{k}$

$$
\begin{equation*}
a\left(i_{k}, j_{k}\right)=a\left(\left|i_{k}-j_{k}\right|\right) \tag{8.12}
\end{equation*}
$$

we have a resonating-valence-bond (RVB) state (Anderson, 1973). This state has "resonances" in the sense that all valence bonds with sites at the same relative distance enter with the same amplitude. The optimal function $a(|\vec{x}|)$ can be determined by a variational calculation.

The most extensive study of the Heisenberg model using states of this sort was carried out by Liang, Douçot, and Anderson (Liang et al., 1988). The physical properties of a system depend on how fast the function $a(|\vec{x}|)$ decays at infinity. For a power-law ansatz

$$
\begin{equation*}
a(|\vec{x}|) \sim \frac{\text { constant }}{|\vec{x}|^{\sigma}} \quad \text { for large }|\vec{x}| \tag{8.13}
\end{equation*}
$$

They found that for $\sigma<5$ there is Néel long-range order, even though the wave function is a global spin singlet. Conversely, for $\sigma \geq 5$ they do not find Néel order beyond a scale $\xi$, the correlation length, which is finite.

An extreme case of an RVB state is the short-range RVB state, which is defined as follows. Consider the VB states in which the paired sites are nearest neighbors to each other. There is a one-to-one correspondence between the underlying configurations of valence bonds and the configurations of classical dimers (Fig. 8.5) which occupy the bonds. The short-range RVB state, or nearest-neighbor RVB (NNRVB) state, is simply the linear superposition of all such configurations with equal amplitude (Kivelson et al., 1987). Thus, states that differ by a local change in the dimer covering have exactly the same amplitude (resonance).

The NNRVB states have one important useful property: they are linearly independent. However, they are not orthogonal. To see this, consider two dimer coverings (a dimer covering is when every lattice site is connected to exactly one of its nearest neighbors by a dimer) that differ only by a local rearrangement of a few nearby spins, such as the example of Fig. 8.6. I will pick the following convention for the signs of the VB states. We will discuss here the case of a bipartite lattice (square). Later in this chapter, and in the next, we will consider the case of the triangular lattice, which is non-bipartite and frustrated. Since the lattice is bipartite, it can be partitioned into two interpenetrating sublattices called R (red) and B (black). A valence bond, or dimer, always joins a red site to a black site. The sign
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-274.jpg?height=395&width=400&top_left_y=1638&top_left_x=657)

Figure 8.5 A short-range VB state on a $4 \times 4$ square lattice. The dark links ("dimers") are valence bonds.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-275.jpg?height=452&width=1170&top_left_y=185&top_left_x=258)

Figure 8.6 In (a) and (b) are shown two configurations of dimers that differ only in the local arrangement of the dimers at the sites $1,2,3$ and 4 . In (c) is shown the superposition of (a) and (b). The closed loop with non-vanishing area connects the sites $1,2,3$, and 4 with four dimers, and represents the overlap of the nonorthogonal VB states $|a\rangle$ and $|b\rangle$ associated with the dimer covering in (a) and (b).
convention I pick assigns a positive amplitude for every VB state, provided that the red site appears (in the wave function) to the left of the black site. Equivalently, we can give an orientation to the valence bonds: positive for red $\rightarrow$ black and negative for black $\rightarrow$ red (Kivelson et al., 1987). We can picture this either by assigning an arrow to each VB or by coloring the sites, i.e. the endpoints of the bonds.

Once we have picked a sign convention, we can unambiguously compute overlaps. The overlap between the short-range VB states shown in Figs. 8.6(a) and (b), call them $|a\rangle$ and $|b\rangle$, reduces to the overlap between the product of the two valence bonds which have been rearranged, since the other valence bonds have norm 1 by definition. Let sites 1 and 4 (2 and 3) belong to the red (black) sublattice. The overlap $\langle a \mid b\rangle$ is equal to

$$
\begin{equation*}
\langle a \mid b\rangle=\langle\overline{12}, \overline{43} \mid \overline{13}, \overline{42}\rangle \tag{8.14}
\end{equation*}
$$

where $|\overline{12}\rangle$, for instance, denotes the VB

$$
\begin{equation*}
|\overline{12}\rangle=\frac{1}{\sqrt{2}}\left(\left|\uparrow_{1} \downarrow_{2}\right\rangle-\mid \downarrow_{1} \uparrow_{2}\right) \tag{8.15}
\end{equation*}
$$

Thus, $\langle a \mid b\rangle$ is simply given by

$$
\begin{equation*}
\langle a \mid b\rangle=\frac{1}{4}\left(\left\langle\uparrow_{1} \downarrow_{2} \uparrow_{4} \downarrow_{3} \| \uparrow_{1} \downarrow_{2} \uparrow_{4} \downarrow_{3}\right\rangle+\left\langle\downarrow_{1} \uparrow_{2} \downarrow_{4} \uparrow_{3}\right|\left|\downarrow_{1} \uparrow_{2} \downarrow_{4} \uparrow_{3}\right\rangle\right)=\frac{1}{2} \tag{8.16}
\end{equation*}
$$

More generally, overlaps between two arbitrary short-range VB states, say $\left|\Psi_{a}\right\rangle$ and $\left|\Psi_{b}\right\rangle$, will not be zero. These overlaps can be represented, and calculated, as a sum over all the closed loops on the square lattice obtained by superposing the dimer coverings associated with $\left|\Psi_{a}\right\rangle$ and $\left|\Psi_{b}\right\rangle$. The length of a loop $\Gamma$ in units of the lattice spacing is $2 L(\Gamma)$, where $L(\Gamma)=1,2, \ldots$ Its contribution to the overlap
is equal to $2 \times 2^{-L(\Gamma)}$ (the factor $2^{-L(\Gamma)}$ comes from the choice of normalization, Eq. (8.4), while the factor 2 counts the number of ways to antiferromagnetically assign the spins on the sites of a loop) and therefore

$$
\begin{align*}
\left\langle\Psi_{a} \mid \Psi_{b}\right\rangle & =\prod_{\Gamma} 2 \times 2^{-L(\Gamma)}=2^{\sum_{\Gamma}} \times 2^{-\frac{1}{2} \sum_{\Gamma} 2 L(\Gamma)}  \tag{8.17}\\
& =2^{P(a, b)} \times 2^{-N / 2} \tag{8.18}
\end{align*}
$$

where $P(a, b)\left(P_{2 L}(a, b)\right)$ is the total number of loops (of loops of length $2 L$ ) in the loop covering $(a, b)$ and $N$ is the (even) number of sites. For example, the loop covering of the $4 \times 4$ square lattice shown in Fig. 8.6(c) has seven loops: six of length 2 , which, with our normalization, give factors of 1 ; and one of length 4 , which gives a factor of $\frac{1}{2}$. Thus, the NNRVB state $|\Psi\rangle=\sum_{a}\left|\Psi_{a}\right\rangle$ has a wavefunction normalization $\langle\Psi \mid \Psi\rangle$ that can be written as a sum of contributions from loops (Sutherland, 1988) of the form

$$
\begin{align*}
\langle\Psi \mid \Psi\rangle & =\sum_{a, b}\left\langle\Psi_{a} \mid \Psi_{b}\right\rangle  \tag{8.19}\\
& =2^{-N / 2} \sum_{a, b} 2^{P(a, b)} \times 2^{P(a, b)-P_{2}(a, b)}  \tag{8.20}\\
& \equiv 2^{-N / 2} \sum_{a, b} x^{P_{2}(a, b)} y^{P(a, b)-P_{2}(a, b)} \tag{8.21}
\end{align*}
$$

with $x=2$ and $y=4$. Here, the factor $2^{P(a, b)-P_{2}(a, b)}$ accounts for the fact that there are two ways to have a loop of length $2 L>2$ with a given antiferromagnetic spin assignment on the sites of the loop.

Not only can $\langle\Psi \mid \Psi\rangle$ be written as a statistical sum such as Eq. (8.21), but also the staggered spin-spin correlator can be written in a similar form. Let $G(\vec{x})$ denote the staggered correlation function

$$
\begin{equation*}
G(\vec{x})=4(-1)^{x_{1}+x_{2}} \frac{\langle\Psi| \sigma_{z}(\overrightarrow{0}) \sigma_{z}(\vec{x})|\Psi\rangle}{\langle\Psi \mid \Psi\rangle} \tag{8.22}
\end{equation*}
$$

For any loop covering $(a, b)$, there are two possibilities (Kohmoto and Shapir, 1988): (i) the two points $\overrightarrow{0}$ and $\vec{x}$ are on the same loop, in which case, due to the antiferromagnetic ordering on the loop, the contribution to the staggered correlation function is independent of their relative position; and (ii) the two points belong to different loops and the loop covering does not contribute to the correlation function. In other words,

$$
\begin{equation*}
G(\vec{x})=\frac{\sum_{a, b} \chi(\vec{x}) x^{P_{2}(a, b)} y^{P(a, b)-P_{2}(a, b)}}{\sum_{a, b} x^{P_{2}(a, b)} y^{P(a, b)-P_{2}(a, b)}} \tag{8.23}
\end{equation*}
$$

where

$$
\chi(\vec{x})= \begin{cases}1 & \text { if } \overrightarrow{0} \text { and } \vec{x} \text { are on the same loop }  \tag{8.24}\\ 0 & \text { otherwise }\end{cases}
$$

We can recast Eq. (8.23) in terms of sums over loops of non-vanishing area. If $L(a, b)$ is the total length of all loops with non-vanishing area for the loop covering $(a, b)$, then $2 P_{2}(a, b)+L(a, b)=N$. Now,

$$
\begin{equation*}
G(\vec{x})=\frac{\sum \chi(\vec{x}) x^{-L / 2} y^{P-P_{2}} d\left(P_{2}\right)}{\sum x^{-L / 2} y^{P-P_{2}} d\left(P_{2}\right)} \tag{8.25}
\end{equation*}
$$

where the summations are only for configurations of loops with non-vanishing areas and $d\left(P_{2}\right)$ is the number of configurations of loops of length 2 . Thus the staggered correlation function gives us the probability that the two sites belong to the same loop in a "gas" of loops. Since $x$ and $y$ are fairly small, the loop gas is reasonably dilute. A "quick and dirty" argument shows that the leading contribution to $G(\vec{x})$ should come from the smallest loop that contains both $\overrightarrow{0}$ and $\vec{x}$

$$
\begin{equation*}
G(\vec{x})=\frac{x^{\frac{1}{2}\left(N-2\left(|\vec{x}| / a_{0}+1\right)\right)} y^{1}+\cdots}{x^{N / 2} y^{0}+\cdots} \propto e^{-\left(|\vec{x}| / a_{0}\right) \ln 2} \tag{8.26}
\end{equation*}
$$

Kohmoto and Shapir (1988) have given a more refined argument, which shows that $G(\vec{x})$ is bounded from above by an exponentially decreasing function with correlation length $\xi \approx a_{0} e^{+1 / \sqrt{2}}$. Thus, short-range RVB wave functions represent states with total spin equal to zero and exponentially decreasing correlation functions.

But are any of these RVB states, of either short or long range, good approximations to the ground-state wavefunction of a quantum Heisenberg model? The numerical evidence (Liang et al., 1988) indicates that for the unfrustrated model an RVB-like wave function with fairly long range is a good approximation to the ground state, but it is a Néel state! The short-range RVB is not a good approximation for this system. In fact the short-range spin correlations of the (short-range) RVB state indicate that it may describe the ground state of a Hamiltonian with a finite gap to all spin excitations, a spin gap.

The overlaps and the norm of the RVB wave function thus map onto a problem associated with the classical statistical mechanics of loop models on a given lattice. Classical loop models in two dimensions have a rich phase diagram that depends on the lattice on which the loops are defined. The arguments given above imply that the spin-correlation functions are short-ranged. However, the loops themselves have a more complex behavior. Quite generally a loop model will assign to a loop configuration a weight that will depend on the number of loops and on their length (Nienhuis, 1987; Kondev and Henley, 1996; Kondev, 1997; Fendley et al., 2006). We will see in the next chapter that quantum-dimer models, which
have a short-range RVB wave function, are critical on bipartite 2D lattices but not on non-bipartite lattices, such as the triangular lattice. The short-range RVB state on a triangular lattice is gapped and is a $\mathbb{Z}_{2}$ topological fluid (Moessner and Sondhi, 2001b).

In the case of a frustrated system, such as the Heisenberg antiferromagnet on a triangular lattice, the situation is less clear. The best available numerical calculations yield a non-collinear magnetically ordered state in which the moments on the vertices of each triangle are rotated by an angle of $120^{\circ}$ relative to each other (depicted in Fig. 8.7), with a much smaller magnetic moment than that for the square lattice (Singh and Huse, 1992; Elstner et al., 1993). In contrast, the spin-1/2 quantum Heisenberg antiferromagnet on a kagome lattice (the medial lattice of the honeycomb lattice), which is a frustrated system, appears to be quantum disordered and has a spin gap. In this case there is no long-range magnetic order, and it is a good candidate for either a spin liquid phase or a valence-bond solid phase (Elstner et al., 1993; Leung and Elser, 1993).

On the other hand, density-matrix renormalization-group (Jiang et al., 2011) and tensor-product state (Wang et al., 2011) simulations of the $J_{1}-J_{2}$ spin- $1 / 2$ quantum antiferromagnet on a square (frustrated) lattice find strong evidence for a gapped $\mathbb{Z}_{2}$ spin-liquid phase in the region $0.41 \leq J_{2} / J_{1} \leq 0.62$, separating conventional Néel and striped antiferromagnetic states for smaller and larger $J_{2} / J_{1}$, respectively. In 1991 Wen (Wen, 1991c) had proposed using mean-field-theory arguments of the type described later in this chapter (which were later extended by Mudry and Fradkin (1994)) that the $J_{1}-J_{2}$ quantum antiferromagnet may have a $\mathbb{Z}_{2}$ topological (spin) liquid phase qualitatively similar to the short-range RVB state.

Cano and Fendley found an $\mathrm{SU}(2)$-invariant Hamiltonian with local interactions (involving local clusters of eight spins on the square lattice!) for which the shortrange RVB state is the exact ground state (Cano and Fendley, 2010). Although this
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-278.jpg?height=327&width=400&top_left_y=1663&top_left_x=657)

Figure 8.7 The $120^{\circ}$ non-collinear three-sublattice magnetic order on the triangular lattice.
state has a finite spin gap, in the case of the square lattice Monte Carlo simulations of this wave function have found that it has long-range (power-law) correlations of valence-bond operators (Albuquerque and Alet, 2010; Tang et al., 2011b) similar to what it is found in the simpler quantum-dimer models (which will be discussed in the next chapter).

### 8.3 Spinons, holons, and valence-bond states

We will now turn to other states that have been proposed. Since there is good evidence that the Heisenberg antiferromagnet may be in a Néel state, I will take the point of view that these phases may be realized by relatively small modifications of this Hamiltonian. Thus, I will carry out most of the discussion with the Heisenberg (or Hubbard) model in mind as a rather generic example.

At this point, it is convenient to go back to a representation of the spins in terms of either fermion operators or Bose operators. For the most part we have been using a fermion representation of the spins,

$$
\begin{equation*}
\vec{S}(\vec{x})=\frac{1}{2} c_{\alpha}^{\dagger}(\vec{x}) \vec{\sigma}_{\alpha \beta} c_{\beta}(\vec{x}) \tag{8.27}
\end{equation*}
$$

The main motivation for this choice is that the fermion operators $c_{\alpha}^{\dagger}(\vec{x})$ are the fermion operators of the Hubbard model. Equation (8.27) reproduces the angularmomentum algebra for spin $S=\frac{1}{2}$ only if the Hilbert space is restricted by the condition

$$
\begin{equation*}
n(\vec{x})=c_{\alpha}^{\dagger}(\vec{x}) c_{\alpha}(\vec{x})=1 \tag{8.28}
\end{equation*}
$$

which implies that each site is occupied by a single fermion with either up or down spin.

Alternatively we may use bosons to represent spin. Let $a_{\alpha}(\vec{x})$ be a set of bosondestruction operators. The boson bilinears

$$
\begin{equation*}
\vec{S}(\vec{x})=\frac{1}{2} a_{\alpha}^{\dagger}(\vec{x}) \vec{\sigma}_{\alpha \beta} a_{\beta}(\vec{x}) \tag{8.29}
\end{equation*}
$$

obey the angular-momentum algebra for $S=\frac{1}{2}$ only if the bosons obey the hardcore constraint

$$
\begin{equation*}
a_{\alpha}^{\dagger}(\vec{x}) a_{\alpha}(\vec{x})=1 \tag{8.30}
\end{equation*}
$$

These formulas, known as the Schwinger boson representation of the spin-1/2 algebra, are reminiscent of the $C P^{1}$ representation of the non-linear sigma model of Section 7.5. Indeed, it is possible to derive the $C P^{1}$ model using bosons as a starting point. There is an extensive literature on this approach (see Arovas
and Auerbach (1988) and Auerbach (1994)), so we will not do this here. This boson representation is closely related to standard spin-wave theory (Holstein and Primakoff, 1940).

Let us begin by looking for a representation of the valence bonds in terms of fermions. Let $|0\rangle$ represent the empty state. The valence bond on a pair of sites $i$ and $j$ is simply given by

$$
\begin{equation*}
|(i j)\rangle \equiv \epsilon_{\alpha \beta} c_{\alpha}^{\dagger}(i) c_{\beta}^{\dagger}(j)|0\rangle \equiv\left(c_{\uparrow}^{\dagger}(i) c_{\downarrow}^{\dagger}(j)-c_{\downarrow}^{\dagger}(i) c_{\uparrow}^{\dagger}(j)\right)|0\rangle \tag{8.31}
\end{equation*}
$$

We will be interested, for the moment, in the half-filled system. Thus the average number of particles per site is one and, because of the constraint, no doubly occupied sites are allowed. For finite Hubbard $U$ some doubly occupied sites, as well as empty sites, will occur. We may try to solve the constraint of there being no doubly occupied sites by using a "slave-boson" construction (Coleman, 1984; Read and Newns, 1983). This leads to the RVB theories of Baskaran, Zou, and Anderson (BZA) (Baskaran et al., 1987) and Ruckenstein, Hirschfeld, and Appel (Ruckenstein et al., 1987). In principle, there are several ways of implementing the slave-boson approach. Let us consider the fermion operators to be normal ordered with respect to the half-filled state. In other words, we will assume that we are not too far from half-filling. Let us now define a set of Bose and Fermi operators at each site, $b(\vec{x})$ and $f_{\alpha}(\vec{x})$, respectively, satisfying the constraint (at each site)

$$
\begin{equation*}
b^{\dagger}(\vec{x}) b(\vec{x})+f_{\alpha}^{\dagger}(\vec{x}) f_{\alpha}(\vec{x})=1 \tag{8.32}
\end{equation*}
$$

Let $|\overline{0}\rangle$ be the reference state for these operators and define the states $|h\rangle,|\uparrow\rangle$, and $|\downarrow\rangle$ representing a "hole" (or holon) with charge $+e$ and spin zero and a spinon $|\uparrow\rangle(|\downarrow\rangle)$ with spin up (down) and no charge:

$$
\begin{align*}
|h\rangle & \equiv|e, 0\rangle=b^{\dagger}|\overline{0}\rangle \\
|\uparrow\rangle & \equiv|0, \uparrow\rangle=f_{\uparrow}^{\dagger}|\overline{0}\rangle  \tag{8.33}\\
|\downarrow\rangle & \equiv|0, \downarrow\rangle=f_{\downarrow}^{\dagger}|\overline{0}\rangle
\end{align*}
$$

Thus, the only possible states are a holon and a spinon of either orientation. More formally, we can write the operator $c_{\sigma}^{\dagger}(\vec{x})$ which creates a band fermion of charge $e$ and spin $\sigma$ at site $\vec{x}$ in the form

$$
\begin{equation*}
c_{\sigma}^{\dagger}(\vec{x})=b(\vec{x}) f_{\sigma}^{\dagger}(\vec{x}) \tag{8.34}
\end{equation*}
$$

Alternatively, we can also write $c_{\sigma}^{\dagger}(\vec{x})$ in the form

$$
\begin{equation*}
c_{\sigma}^{\dagger}(\vec{x})=a(\vec{x}) z_{\sigma}^{\dagger}(\vec{x}) \tag{8.35}
\end{equation*}
$$

where $a$ is a spinless charged fermion and the $z_{\sigma}$ are Schwinger bosons satisfying the constraint

$$
\begin{equation*}
z_{\alpha}^{\dagger}(\vec{x}) z_{\alpha}(\vec{x})=1 \tag{8.36}
\end{equation*}
$$

In this representation, the hole (or holon) is a fermion and the spinon is a boson. In either representation, at half-filling, there are no holons. Away from half-filling a number of holons will be present. In the boson-holon version, the holons will superficially appear to undergo a condensation transition, which originally was mistakenly confused with "high- $T_{\mathrm{c}}$."

### 8.4 The gauge-field picture of the disordered spin states

I will consider now a particular form of mean-field theory for the Heisenberg antiferromagnet, which was first proposed by Affleck and Marston (1988) and by Kotliar (1988). In this mean-field theory, one focuses on the valence-bond operator of Eq. (8.31). The spin-exchange interaction term, $\vec{S}(\vec{x}) \cdot \vec{S}(\vec{y})$, can be written in the form

$$
\begin{equation*}
\vec{S}(\vec{x}) \cdot \vec{S}(\vec{y})=\frac{1}{2} c_{\alpha}^{\dagger}(\vec{x}) c_{\beta}(\vec{x}) c_{\beta}^{\dagger}(\vec{y}) c_{\alpha}(\vec{y})-\frac{1}{4} n(\vec{x}) n(\vec{y}) \tag{8.37}
\end{equation*}
$$

Thus, up to an additive constant, we have the fermion problem with the Hamiltonian

$$
\begin{equation*}
H=\frac{J}{2} \sum_{\vec{x}, j=1,2} c_{\alpha}^{\dagger}(\vec{x}) c_{\beta}(\vec{x}) c_{\beta}^{\dagger}\left(\vec{x}+e_{j}\right) c_{\alpha}\left(\vec{x}+e_{j}\right) \tag{8.38}
\end{equation*}
$$

which has to be supplemented by the local constraint

$$
\begin{equation*}
n(\vec{x}) \equiv c_{\alpha}^{\dagger}(\vec{x}) c_{\alpha}(\vec{x})=1 \tag{8.39}
\end{equation*}
$$

In Eq. (8.37), an underlying square lattice has been assumed and $j=1,2$ represents the $x_{1}$ and $x_{2}$ directions, with $e_{1}$ and $e_{2}$ being the corresponding unit vectors. This approach can be easily generalized to other lattices as well.

The path-integral picture of this system involves the use of the Lagrangian

$$
\begin{equation*}
L=\sum_{\vec{x}} c_{\alpha}^{\dagger}(\vec{x}, t)\left(i \partial_{t}+\mu\right) c_{\alpha}(\vec{x}, t)+\sum_{\vec{x}} \varphi(\vec{x}, t)\left(c_{\alpha}^{\dagger}(\vec{x}, t) c_{\alpha}(\vec{x}, t)-1\right)-H \tag{8.40}
\end{equation*}
$$

The second term in Eq. (8.40) contains the Lagrange multiplier field $\varphi(\vec{x}, t)$ which enforces the constraint of single occupancy, Eq. (8.39), at all times.

The Affleck-Marston mean-field theory involves a Hubbard-Stratonovich factorization in terms of the link variables $\chi_{j}(\vec{x})$, which are complex Bose (c-number)
fields. The Lagrangian $L^{\prime}$ is given by

$$
\begin{align*}
L^{\prime}= & \sum_{\vec{x}} c_{\alpha}^{\dagger}(x)\left(i \partial_{t}+\mu\right) c_{\alpha}(x)+\sum_{x} \varphi(x)\left(c_{\alpha}^{\dagger}(x) c_{\alpha}(x)-1\right)-\frac{2}{J} \sum_{\vec{x}, j}\left|\chi_{j}(x)\right|^{2} \\
& +\sum_{\vec{x}, j}\left(c_{\alpha}^{\dagger}(\vec{x}, t) \chi_{j}(\vec{x}, t) c_{\alpha}\left(\vec{x}+e_{j}, t\right)+c_{\alpha}^{\dagger}\left(\vec{x}+e_{j}, t\right) \chi_{j}^{*}(\vec{x}, t) c_{\alpha}(\vec{x}, t)\right) \tag{8.41}
\end{align*}
$$

where $x \equiv(\vec{x}, t)$. This Lagrangian is equivalent to $L$ upon a Gaussian integration of the Hubbard-Stratonovich fields $\chi_{j}(x)$. Here, the link variables $\chi_{j}(x)$ satisfy the relations $\chi_{j}(\vec{x}, t)=\chi_{-j}^{*}\left(\vec{x}+e_{j}, t\right)$ since the current operator associated with an electron hopping from $\vec{x}$ to $\vec{x}+e_{j}$ is the adjoint of the operator associated with the (reverse) hopping from $\vec{x}+e_{j}$ back to $\vec{x}$.

The mean-field theory (MFT) consists, as usual, in integrating out the fermions, at a fixed density, and treating the Bose (c-number) fields $\chi_{j}(x)$ within a saddlepoint expansion. The fields $\chi_{j}(x)$, being complex, can be parametrized in terms of two real fields $\rho_{j}(x)$ and $\mathcal{A}_{j}(x)$ representing the amplitude and phase of $\chi_{j}(x)$, respectively. Before carrying out the MFT, it is important to consider the symmetries of this Lagrangian. Consider the local time-dependent gauge transformations

$$
\begin{align*}
\mathcal{A}_{j}(\vec{x}, t) & =\mathcal{A}_{j}^{\prime}(\vec{x}, t)+\Delta_{j} \phi(\vec{x}, t) \\
\varphi(\vec{x}, t) & =\varphi^{\prime}(\vec{x}, t)+\partial_{t} \phi(\vec{x}, t)  \tag{8.42}\\
c_{\alpha}(x) & =e^{i \phi(x)} c_{\alpha}^{\prime}(x)
\end{align*}
$$

These transformations leave the Lagrangian unchanged up to a total time derivative, the term $\sum_{\vec{x}} \partial_{t} \phi$. Thus, the Lagrange multiplier field, $\varphi$, transforms like the time component $\mathcal{A}_{0}$ of a $\mathrm{U}(1)$ gauge field. We must then conclude that this system has a "secret" gauge (local) symmetry.

The effective Lagrangian Eq. (8.41) is reminiscent of the Lagrangians of lattice gauge theories (Kogut, 1984). There are a few significant differences: (a) here the amplitude field $\left|\chi_{j}(x)\right|=\rho_{j}(x)$ fluctuates; (b) there is no explicit kinetic-energy term for the gauge fields $\mathcal{A}_{\mu}$ (i.e. an $F_{\mu \nu}^{2}$ ); and (c) there is an extra term in the Lagrangian that is proportional to $\varphi$, i.e. to $\mathcal{A}_{0}$. This last term may seem to break gauge invariance, since, according to Eq. (8.42), $\varphi$ transforms like $\varphi \rightarrow \varphi^{\prime}+\partial_{t} \phi$. However, we must keep in mind that what matters is not the Lagrangian but the action, $\mathcal{S}$,

$$
\begin{equation*}
\mathcal{S}=\int d t L \tag{8.43}
\end{equation*}
$$

Under a gauge transformation, the extra term will transform the action by

$$
\begin{align*}
\mathcal{S} & \rightarrow \mathcal{S}-\sum_{\vec{x}} \int d t \partial_{t} \phi(\vec{x}, t) \\
& =\mathcal{S}-\sum_{\vec{x}}(\phi(\vec{x}, t \rightarrow+\infty)-\phi(\vec{x}, t \rightarrow-\infty)) \tag{8.44}
\end{align*}
$$

If we impose periodic boundary conditions (in time) on the gauge fields, as we must when computing a trace over Bose (or Fermi) fields, we must allow only for local gauge transformations that respect the boundary conditions. Thus, the field $\phi(\vec{x}, t)$ must obey periodic boundary conditions in time, $\phi(\vec{x}, t \rightarrow+\infty)=\phi(\vec{x}, t \rightarrow$ $-\infty)$, which leave the action unchanged. We can relax this condition to a small extent. Let us notice that the "extra term" can be extracted from the action and written into the integrand in the form of a product of operators of the form

$$
\begin{equation*}
e^{-i \int d t \sum_{\vec{x}} \varphi(\vec{x}, t)} \equiv \prod_{\vec{x}} e^{-i \int d t \varphi(\vec{x}, t)} \tag{8.45}
\end{equation*}
$$

Since $\varphi$ can be identified with $\mathcal{A}_{0}$, the time component of a vector potential $\mathcal{A}_{\mu}$ that obeys periodic boundary conditions, we can write the extra terms in the form of time-ordered exponentials of line integrals over loops $\Gamma(\vec{x})$ that close around the time direction (see Fig. 8.8). These operators are generally called Wilson loops:

$$
\begin{equation*}
e^{-i \sum_{\vec{x}} \int d t \varphi(\vec{x}, t)} \equiv \prod_{\vec{x}} e^{-i \oint d t \mathcal{A}_{0}(\vec{x}, t)} \equiv \prod_{\vec{x}} e^{-i \oint_{\Gamma(\vec{x})} d x_{\mu} \mathcal{A}^{\mu}} \tag{8.46}
\end{equation*}
$$

For the Wilson loops to be gauge-invariant operators,

$$
\begin{equation*}
\oint_{\Gamma(\vec{x})} d x_{\mu} \mathcal{A}^{\mu}=\oint_{\Gamma(\vec{x})} d x_{\mu} \mathcal{A}^{\prime \mu}+\oint_{\Gamma(\vec{x})} d x_{\mu} \partial^{\mu} \phi=\oint_{\Gamma(\vec{x})} d x_{\mu} \mathcal{A}^{\prime \mu} \tag{8.47}
\end{equation*}
$$

it is sufficient that $d \phi$ is exact, i.e. the gauge transformation is non-singular everywhere. Recall that these Wilson loops appeared in our problem since we had to enforce the constraint of single occupancy at every site and at all times.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-283.jpg?height=312&width=645&top_left_y=1701&top_left_x=528)

Figure 8.8 A Wilson loop along the closed curve $\Gamma(\vec{x})$ in the time direction.

Because of the gauge invariance, we need to impose the constraint of single occupancy, Eq. (8.39), only on the configuration space at some initial time surface, $t=t_{0}$. The local gauge invariance implies that the spin configurations at an arbitrary later time $t$ must still obey the same constraint; i.e. they are smooth deformations of the initial configuration. For instance, we cannot try to fix the gauge $\mathcal{A}_{0}=0$ if only non-singular gauge transformations are allowed. This gauge is not consistent with the constraint of single occupancy since a configuration with $\mathcal{A}_{0}=0$ has $\oint d t \mathcal{A}_{0}=0$ and, because of gauge invariance, it cannot evolve into configurations with $\oint d t \mathcal{A}_{0} \neq 0$. At best we can fix $\mathcal{A}_{0}(\vec{x}, t)$ to be a time-independent arbitrary function $\mathcal{A}_{0}(\vec{x})$ through

$$
\begin{equation*}
\oint d t \mathcal{A}_{0}(\vec{x}, t) \equiv T \mathcal{A}_{0}(\vec{x}) \equiv \overline{\mathcal{A}}_{0}(\vec{x}) \tag{8.48}
\end{equation*}
$$

where $T$ is the time span. Alternatively, we may also choose the gauge

$$
\begin{equation*}
\mathcal{A}_{0}^{\prime}(\vec{x}, t) \equiv \overline{\mathcal{A}}_{0}(\vec{x}) \delta\left(t-t_{0}\right) \tag{8.49}
\end{equation*}
$$

which yields the same value of the line integral. This choice means that, at $t=t_{0}$, we restrict the space of configurations to obey the constraint $n(\vec{x})=1$ at all points $\vec{x}$. Gauge invariance then takes care of choosing only the time-evolving configurations which satisfy this property.

However, it is worth noticing that, from the point of view of quantum mechanics, what matters is not the invariance of the action $\mathcal{S}$ but the invariance of the amplitude $e^{i \mathcal{S}}$ assigned to a given history (Feynman and Hibbs, 1965). Thus gauge transformations that change during the time span $T$ by $\Delta \phi(\vec{x})=2 \pi m(\vec{x})$ (an arbitrary integer modulo $2 \pi$ at each point $\vec{x}$ ) are allowed, since they do not change the amplitude, although they do change the action. These are the so-called large gauge transformations. These transformations change the time-like Wilson loops accordingly:

$$
\begin{equation*}
\oint d t \mathcal{A}_{0}=\oint d t \mathcal{A}_{0}^{\prime}+2 \pi m(\vec{x}) \tag{8.50}
\end{equation*}
$$

and thus are singular or large gauge transformations. A correct description of these systems, particularly at non-zero temperatures, requires a careful treatment of these large gauge transformations.

We wish to evaluate the functional integral for a system with a Lagrangian of the form of Eq. (8.41). We will attempt a semi-classical treatment of this theory. One difficulty that we will encounter will be that there is no small parameter to organize this semi-classical expansion. Thus we should have every reason to suspect that the results might not be quite reliable. Indeed, using this approach, it is quite hard to reproduce a Néel state. This is so because the approximations that we will make will be accurate for systems that can be described in terms of valence bonds. In
this representation we deal with local spin singlets and the spins fluctuate very fast. Conversely, in a Néel state, the spins are slow variables but the VBs are fast ones. These are complementary descriptions.

Several systematic procedures have been devised in order to control the fluctuations in this problem. Affleck and Marston (Affleck and Marston, 1988; Marston and Affleck, 1989) proposed studying generalizations of the quantum Heisenberg model to a system with an $\mathrm{SU}(N)$ symmetry by attaching a "color" index $\alpha=1, \ldots, N$ to the fermionic degrees of freedom. The spin-1/2 model was obtained by considering the $N=2(\mathrm{SU}(2))$ case. The Affleck-Marston Lagrangian has, after an RVB decoupling by means of a link variable $\chi_{j}(\vec{x}, t)$, the same form as the Lagrangian of Eq. (8.41) except that (a) $\alpha=1, \ldots, N$ (not just 1 and 2, or $\uparrow$ and $\downarrow$ ) and (b) the local occupancy is equal not to 1 but to a suitably chosen function $n(\vec{x})$,

$$
\begin{equation*}
\sum_{\alpha=1}^{N} c_{\alpha}^{\dagger}(\vec{x}) c_{\alpha}(\vec{x})=n(\vec{x}) \tag{8.51}
\end{equation*}
$$

which they proposed could take one of two forms on a system with two interpenetrating sublattices, $A$ and $B$ (suitable for bipartite lattices such as the square of the honeycomb lattice):

$$
n(\vec{x})= \begin{cases}1 & \vec{x} \in A  \tag{8.52}\\ N-1 & \vec{x} \in B\end{cases}
$$

or

$$
\begin{equation*}
n(\vec{x})=\frac{N}{2} \quad \vec{x} \in A \text { or } \vec{x} \in B \tag{8.53}
\end{equation*}
$$

Read and Sachdev (1989) further generalized this model and considered an $\mathrm{SU}(N)$ "Heisenberg antiferromagnet" of the form

$$
\begin{equation*}
H=\frac{J}{N} \sum_{\left(\vec{x}, \vec{x}^{\prime}\right)} \sum_{\alpha, \beta=1}^{N} S_{\alpha}^{\beta}(\vec{x}) S_{\beta}^{\alpha}\left(\vec{x}^{\prime}\right) \tag{8.54}
\end{equation*}
$$

where $\vec{x} \in A$ and $\vec{x}^{\prime} \in B$. The operators $S_{\beta}^{\alpha}(\vec{x})$ are generators of the Lie group $\mathrm{SU}(N)$. If we choose a representation of $\mathrm{SU}(N)$ with a Young tableau with $m$ rows and $n_{\mathrm{c}}$ columns $(0<m<N)$ on sublattice $A$ and $N-m$ rows and $n_{\mathrm{c}}$ columns on sublattice $B$ (i.e. the conjugate of the representation on sublattice $A$ ) (Fig. 8.9) we can write $S_{\beta}^{\alpha}(\vec{x})$ in terms of fermions as follows:

$$
\begin{equation*}
S_{\alpha}^{\beta}(\vec{x})=\sum_{a=1}^{n_{c}} c_{\alpha a}^{\dagger}(\vec{x}) c^{\beta a}(\vec{x})-\delta_{\alpha}^{\beta} \frac{n_{\mathrm{c}}}{2} \tag{8.55}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-286.jpg?height=348&width=873&top_left_y=206&top_left_x=421)

Figure 8.9 Conjugate representations of $\mathrm{SU}(N)$ on a bipartite lattice. The case shown here is the $\left(m, n_{\mathrm{c}}\right)=(3,5)$ representation of $\mathrm{SU}(8)$ and its conjugate $(5,5)$.
at the price of introducing an extra ("flavor") index $a=1, \ldots, n_{\mathrm{c}}$. The representation is fixed by the constraint (Read and Sachdev, 1989)

$$
\sum_{\alpha=1}^{N} c_{\alpha a}^{\dagger}(\vec{x}) c^{\alpha b}(\vec{x})= \begin{cases}\delta_{a}^{b} m & \vec{x} \in A  \tag{8.56}\\ \delta_{a}^{b}(N-m) & \vec{x} \in B\end{cases}
$$

Hence, there are $m n_{\mathrm{c}}$ fermions on sublattice $A$ and $(N-m) n_{\mathrm{c}}$ fermions on sublattice $B$. For example, for $N=2(\mathrm{SU}(2))$, the only available value of $m$ is 1 and $n_{\mathrm{c}}$ is arbitrary. It is easy to show that this representation has $n_{\mathrm{c}}$ spins one-half. The constraint means that the allowed states are symmetric under a permutation of the spins. This is the representation (or multiplet) with spin $s=n_{\mathrm{c}} / 2$. Thus, all the representations of $S U(2)$ have been included. This is important since the limit $n_{c} \rightarrow \infty, N=2$, is the spin-wave theory. The $1 / S$ expansion discussed in Chapter 7 is simply the $1 / n_{\mathrm{c}}$ expansion here (since $S=n_{\mathrm{c}} / 2$ ).

A general difficulty of using this approach is that it breaks translation invariance if non-self-conjugate representations are placed on the two sublattices, and, even in that case, it can be implemented only for bipartite lattices. To sidestep this problem Read and Sachdev (1991) introduced a different generalization of the Heisenberg model for general, including non-bipartite, lattices, such as the triangular and kagome lattices. This approach amounts to generalizing the $\mathrm{SU}(2)$ spin- $1 / 2$ degrees of freedom to the symplectic group $\operatorname{Sp}(N)$ (instead of the unitary group $\mathrm{SU}(N)$ ): the group of $2 N \times 2 N$ unitary matrices $U$ that leave the (fermion or boson) bilinear, the valence-bond operator on lattice sites $i$ and $j$,

$$
\begin{equation*}
\mathcal{J}_{\sigma \sigma^{\prime}}^{a a^{\prime}} c_{i a \sigma}^{\dagger} c_{j a^{\prime} \sigma^{\prime}}^{\dagger} \tag{8.57}
\end{equation*}
$$

(where $\mathcal{J}_{\sigma \sigma^{\prime}}^{a a^{\prime}}=\delta_{a a^{\prime}} \epsilon_{\sigma \sigma^{\prime}}, \sigma, \sigma^{\prime}=1,2$, and $a, a^{\prime}=1, \ldots, N$ ) under the transformation $c \rightarrow U c$. For $N=1$ this reduces to $\mathrm{SU}(2)$. As in the other generalizations, the number of particles, fermions $n_{\mathrm{f}}$ or bosons $n_{\mathrm{b}}$, must be constrained at every given site to specify the chosen representation of $\operatorname{Sp}(N)$.

Here we will follow the analysis of Affleck and Marston and consider only the case of self-conjugate representations of $\mathrm{SU}(N)$ (i.e. the Young tableaux have the same number of rows $m=N / 2$ for both sublattices). This is possible only for $N$ even. We will consider only the fundamental representation, which has $n_{\mathrm{c}}=1$. The limit $n_{\mathrm{c}}$ large is more conveniently described in terms of Schwinger bosons (Arovas and Auerbach, 1988) or in terms of a coherent-state path integral (Read and Sachdev, 1989). Both representations lead to a generalization of the non-linear sigma model of Chapter 7. We will not pursue this approach here.

The Lagrangian density of Eq. (8.41) now has the form

$$
\begin{align*}
\mathcal{L}^{\prime}= & c_{\alpha a}^{\dagger}(\vec{x}, t)\left(i \partial_{t}+\mu\right) c_{\alpha a}(\vec{x}, t)+\varphi_{a b}(\vec{x}, t)\left(c_{\alpha a}^{\dagger}(\vec{x}, t) c_{\alpha b}(\vec{x}, t)-\delta_{a b} \frac{N}{2}\right) \\
& -\frac{N}{J}\left|\chi_{j}^{a b}(\vec{x}, t)\right|^{2}+c_{\alpha a}^{\dagger}(\vec{x}, t) \chi_{j}^{a b}(\vec{x}, t) c_{\alpha b}\left(\vec{x}+e_{j}, t\right) \\
& +c_{\alpha b}^{\dagger}\left(\vec{x}+e_{j}, t\right) \chi_{j}^{a b}(\vec{x}, t)^{*} c_{\alpha a}(\vec{x}, t) \tag{8.58}
\end{align*}
$$

where $\chi_{j}^{a b}(\vec{x}, t)$ is an $n_{\mathrm{c}} \times n_{\mathrm{c}}$ complex matrix field on each link of the square lattice (labeled by the site $\vec{x}$ and the direction $j=1$, 2) satisfying

$$
\begin{equation*}
\chi_{j}^{a b}(\vec{x}, t)=\chi_{-j}^{b a}\left(\vec{x}+e_{j}, t\right)^{*} \tag{8.59}
\end{equation*}
$$

The field $\chi_{j}^{a b}(\vec{x}, t)$ is a generalization of $\chi_{j}(\vec{x}, t)$ in Eq. (8.41). This Lagrangian density has a non-abelian gauge invariance that is a generalization of Eq. (8.42). The functional integral is

$$
\begin{equation*}
Z=\int \mathcal{D} \chi \mathcal{D} \varphi \mathcal{D} c^{\dagger} \mathcal{D} c e^{i \mathcal{S}} \prod_{\vec{x}} e^{-i \frac{N}{2} \oint d t \varphi_{a a}(\vec{x}, t)} \tag{8.60}
\end{equation*}
$$

The action $\mathcal{S}$ is a bilinear form in fermions. Hence, once again, they can be integrated out at the expense of a determinant. The effective action $\mathcal{S}_{\text {eff }}$, resulting from integrating out the fermions, is

$$
\begin{equation*}
\mathcal{S}_{\mathrm{eff}}\left[\varphi, \chi_{j}\right]=N \overline{\mathcal{S}}\left[\varphi, \chi_{j}\right] \tag{8.61}
\end{equation*}
$$

where

$$
\begin{align*}
\overline{\mathcal{S}}\left[\varphi, \chi_{j}\right]= & -i \operatorname{tr} \ln \left[\left(\left(i \partial_{t}+\mu\right) \delta_{a b}+\varphi_{a b}(\vec{x}, t)\right) \delta_{\vec{x}, \vec{x}^{\prime}} \delta_{t, t^{\prime}}\right. \\
& \left.+\left(\chi_{j}^{a b}(\vec{x}, t) \delta_{\vec{x}^{\prime}, \vec{x}+e_{j}}+\chi_{j}^{b a}\left(\vec{x}-e_{j}, t\right)^{*} \delta_{\delta^{\prime}, \vec{x}-e_{j}}\right) \delta_{t, t^{\prime}}\right] \\
& -\int d t \sum_{\vec{x}} \frac{1}{J}\left|\chi_{j}^{a b}(\vec{x}, t)\right|^{2} \tag{8.62}
\end{align*}
$$

We can also decompose $\chi_{j}^{a b}(\vec{x}, t)$ into an amplitude and a phase,

$$
\begin{equation*}
\chi_{j}^{a b}(\vec{x}, t)=\rho_{j}^{a b}(\vec{x}, t) e^{i \mathcal{A}_{j}^{a b}(\vec{x}, t)} \tag{8.63}
\end{equation*}
$$

where $\rho_{j}^{a b}(\vec{x}, t)$ is a positive-definite real symmetric matrix and $\mathcal{A}_{j}^{a b}(\vec{x}, t)$ is in the Lie algebra of $\operatorname{SU}(N)$ (i.e. $e^{i \mathcal{A}}$ is a group element). Clearly, $\varphi^{a b}(\vec{x}, t)$ can be regarded as the time component $\mathcal{A}_{0}^{a b}(\vec{x}, t)$ of the non-abelian vector potential $\mathcal{A}_{\mu}^{a b}(\vec{x}, t)$, while $\mathcal{A}_{j}^{a b}(\vec{x}, t)$ are its space components. The saddle-point approximation is justified if we take the limit $N \rightarrow \infty$ keeping $n_{\mathrm{c}}<\infty$. In the Bose representation, on the other hand, the limit one is forced to consider has $N<\infty$ and $n_{\mathrm{c}} \rightarrow \infty$. Thus, although the theories should be equivalent, their saddle-point approximations have quite different physics. The limit $n_{\mathrm{c}} \rightarrow \infty$ means high representations and Néel-like behavior. The opposite limit, $N \rightarrow \infty, n_{\mathrm{c}}$ fixed, has VB states and flux phases but no Néel states.

### 8.5 Flux phases, valence-bond crystals, and spin liquids

For the most part I will consider only the case $n_{\mathrm{c}}=1$, which is simplest. However, there are some important new features that arise for $n_{c}>1$, which I will mention in passing. For $n_{\mathrm{c}}=1$, the symmetry is abelian.

The saddle-point approximation implies considering configurations of $\bar{\rho}_{j}(\vec{x}, t)$ and $\overline{\mathcal{A}}_{\mu}(\vec{x}, t)$ such that

$$
\begin{equation*}
\frac{\delta \mathcal{S}_{\mathrm{tot}}}{\delta \bar{\rho}_{j}(\vec{x}, t)}=0 \tag{8.64}
\end{equation*}
$$

and

$$
\begin{equation*}
\frac{\delta \mathcal{S}_{\mathrm{tot}}}{\delta \overline{\mathcal{A}}_{\mu}(\vec{x}, t)}=0 \tag{8.65}
\end{equation*}
$$

where $\mathcal{S}_{\text {tot }}$ is given from Eqs. (8.61) and (8.60) by

$$
\begin{equation*}
\mathcal{S}_{\text {tot }}=\mathcal{S}_{\text {eff }}-\frac{1}{2} \sum_{\vec{x}} \oint d t \mathcal{A}_{0}=\mathcal{S}_{\mathrm{eff}}-\sum_{\vec{x}} \oint d t J_{\mu} \mathcal{A}^{\mu} \tag{8.66}
\end{equation*}
$$

with $J_{\mu}=\frac{1}{2} \delta_{\mu 0}$. Equation (8.64) determines the value (or configuration) of $\rho(\vec{x}, t)$ which extremizes the action. Similarly, Eq. (8.65) implies the absence of fermion currents $j_{\mu}^{\mathrm{F}}$ in the ground state

$$
\begin{equation*}
\frac{\delta \mathcal{S}_{\mathrm{tot}}}{\delta \overline{\mathcal{A}}_{\mu}(x)}=\frac{\delta \mathcal{S}_{\mathrm{eff}}}{\delta \overline{\mathcal{A}}_{\mu}(x)}-J_{\mu}(x) \equiv j_{\mu}^{\mathrm{F}}(x)-J_{\mu}(x)=0 \tag{8.67}
\end{equation*}
$$

In other words, the average fermion density is equal to unity, as required by the constraint, and the average current vanishes.

Two types of solutions have been proposed to solve the saddle-point equations: (i) flux phases and (ii) valence-bond-crystal (or Peierls) phases.

Let us look first for solutions of the saddle-point equations with maximal symmetry. For instance, we want solutions of Eq. (8.64) that are independent of $(\vec{x}, t)$ and of $j$ :

$$
\begin{equation*}
\bar{\rho}_{j}(\vec{x}, t)=\bar{\rho} \tag{8.68}
\end{equation*}
$$

We may also ask for a possible solution with non-zero value of $\overline{\mathcal{A}}_{j}(\vec{x}, t)$ but with $\overline{\mathcal{A}}_{0}=0$. The value of $\overline{\mathcal{A}}_{j}(\vec{x}, t)$ may be chosen to be time-independent but not constant in space since, in that case, it would be gauge equivalent to zero. Thus we require that the circulation of $\overline{\mathcal{A}}_{j}(\vec{x}, t)$, or flux $\overline{\mathcal{B}}$, around any elementary plaquette be constant,

$$
\begin{equation*}
\sum_{\text {plaquette }} \overline{\mathcal{A}}_{j}(\vec{x}, t)=\overline{\mathcal{B}} \tag{8.69}
\end{equation*}
$$

In general, a non-zero flux $\overline{\mathcal{B}}$ violates time-reversal invariance since the timereversal transformation maps $\overline{\mathcal{B}} \rightarrow-\overline{\mathcal{B}}$. But this system is periodic in $\mathcal{A}_{j}$, i.e. $\mathcal{A}_{j}$ and $\mathcal{A}_{j}^{\prime}=\mathcal{A}_{j}+2 \pi n_{j}$ (here $n_{j}$ is an arbitrary integer) cannot be distinguished. Thus $\overline{\mathcal{B}}$ is defined up to an integer multiple of $2 \pi$. There are two values of $\overline{\mathcal{B}}$ compatible with time-reversal invariance: $\overline{\mathcal{B}}=0, \pi$. Any other value of $\overline{\mathcal{B}}$ represents a state with broken time-reversal symmetry, and the state is chiral. We will see below that phases of this type can arise in frustrated quantum antiferromagnets. These phases are called chiral spin liquids, and will be discussed in Chapter 10.

On the other hand, there are also solutions that break translation and/or rotation invariance, namely valence-bond crystals. In these VB states, the field $\bar{\chi}_{j}(\vec{x}, t)$ has an amplitude $\bar{\rho}_{j}(\vec{x}, t)$ that takes non-zero values only on dimer configurations: $\bar{\rho}_{j}(\vec{x}, t)=\bar{\rho}$ on those links covered by dimers and zero elsewhere. In Chapter 9 we will see that the quantum fluctuations of dimer configurations are described by quantum-dimer models. These models have crystalline phases. They also have phases in which translation and rotation invariance are restored. These are $\mathbb{Z}_{2}$ spinliquid phases.

Let us consider the saddle-point equations for $n_{\mathrm{c}}=1$ in more detail. We look for solutions that are time-independent and have $\overline{\mathcal{A}}_{0}=0$. Thus, $\bar{\rho}_{j}$ and $\overline{\mathcal{B}}$ are constant in time. From Eq. (8.58) we infer that the dynamics of the fermions, the spinons of this system, is governed by the effective Hamiltonian

$$
\begin{align*}
H_{\mathrm{MF}}= & -\sum_{\vec{x}, j} \bar{\rho}_{j}(\vec{x})\left(c_{\alpha}^{\dagger}(\vec{x}) e^{i \overline{\mathcal{A}}_{j}(\vec{x})} c_{\alpha}\left(\vec{x}+e_{j}\right)+c_{\alpha}^{\dagger}\left(\vec{x}+e_{j}\right) e^{-i \overline{\mathcal{A}}_{j}(\vec{x})} c_{\alpha}(\vec{x})\right) \\
& +\frac{N}{J} \sum_{\vec{x}, j} \bar{\rho}_{j}^{2}(\vec{x}) \tag{8.70}
\end{align*}
$$

in the background $\left\{\bar{\rho}_{j}(\vec{x}), \overline{\mathcal{B}}(\vec{x})\right\}$. Here, we have $\frac{1}{2} N L^{2}$ fermions in a system with the linear dimension $L$.

The BZA phases. Let us consider first the uniform solutions which have $\bar{\rho}_{j}(\vec{x})=$ $\bar{\rho}$ (constant). We saw above that there are only two allowed values of $\overline{\mathcal{B}}$ consistent with time-reversal invariance. For $\overline{\mathcal{B}}=0$, the spinons have a square Fermi surface (see Fig. 2.2). This is the state found by Baskaran, Zou, and Anderson (BZA). The total energy of the BZA state is

$$
\begin{equation*}
E_{\mathrm{BZA}}=\frac{2 N L^{2}}{J} \bar{\rho}^{2}-\frac{8}{\pi^{2}} N L^{2} \bar{\rho} \tag{8.71}
\end{equation*}
$$

The minimum is attained for $\bar{\rho}=2 J / \pi^{2}$ and $E_{\mathrm{BZA}}=-8 N L^{2} J / \pi^{4}$. Superficially, this state looks like a Fermi liquid of spinons. However, the fluctuations are likely to destroy this state. There are, naturally, amplitude fluctuations, $\tilde{\rho}_{j}(x)=\rho_{j}(x)-\bar{\rho}$. These fluctuations are essentially local in character and may trigger an instability towards a Peierls state in which $\bar{\rho}$ may have a periodic component in space. More importantly, the gauge fields are completely unconstrained. The result is a state in which the constraint of single occupancy is enforced and in which there is no current flow.

Flux phases. The state with $\bar{\rho}_{j}(\vec{x})=\bar{\rho}$ (constant) and $\overline{\mathcal{B}}=\pi$, everywhere, is called the flux phase. In the flux phase, the dynamics of the spinons is also governed by a mean-field Hamiltonian $H_{\text {flux }}$ of the form of Eq. (8.70),

$$
\begin{align*}
H_{\text {flux }}= & -\bar{\rho} \sum_{\vec{x}, j}\left(c_{\alpha}^{\dagger}(\vec{x}) e^{i \overline{\mathcal{A}}_{j}(\vec{x})} c_{\alpha}\left(\vec{x}+e_{j}\right)+c_{\alpha}^{\dagger}\left(\vec{x}+e_{j}\right) e^{-i \overline{\mathcal{A}}_{j}(\vec{x})} c_{\alpha}(\vec{x})\right) \\
& +\frac{2 N L^{2}}{J} \bar{\rho}^{2} \tag{8.72}
\end{align*}
$$

The vector potentials $\overline{\mathcal{A}}_{j}(\vec{x})$ should have circulation equal to $\pi$ around every elementary plaquette,

$$
\begin{equation*}
\sum_{\text {plaquette }} \overline{\mathcal{A}}_{j}(\vec{x})=\pi \tag{8.73}
\end{equation*}
$$

We can solve this requirement by the (gauge-dependent) choice

$$
\begin{align*}
& \overline{\mathcal{A}}_{1}(\vec{x})=+\frac{\pi}{2} \\
& \overline{\mathcal{A}}_{2}(\vec{x})=-\frac{\pi}{2}(-1)^{x_{1}} \tag{8.74}
\end{align*}
$$

In this phase, the (spinon) Fermi fields $c_{\alpha}(\vec{x}, t)$ satisfy the equation of motion

$$
\begin{align*}
i \partial_{t} c_{\alpha}(\vec{x}, t) & =\left[c_{\alpha}(\vec{x}, t), H_{\text {flux }}\right] \\
& =-\bar{\rho} \sum_{j=1,2}\left(e^{i \overline{\mathcal{A}}_{j}(\vec{x})} c_{\alpha}\left(\vec{x}+e_{j}, t\right)+e^{-i \overline{\mathcal{A}}_{j}\left(\vec{x}-e_{j}\right)} c_{\alpha}\left(\vec{x}-e_{j}, t\right)\right) \tag{8.75}
\end{align*}
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-291.jpg?height=431&width=486&top_left_y=193&top_left_x=605)

Figure 8.10 The four sublattices associated with a flux phase; (e, e), (e, o), (o, e) and ( $\mathrm{o}, \mathrm{o}$ ) denote four sublattices with $x_{1}$ even (e) or odd (o), and $x_{2}$ even or odd, respectively.

It is convenient to split the square lattice into four sublattices, as shown in Fig. 8.10, and to introduce a separate amplitude $f_{\alpha}$ (with $\alpha=1, \ldots, 4$ ) for each sublattice

$$
\begin{align*}
i \partial_{0} f_{\alpha}^{(1)}(\vec{x})= & -i \bar{\rho}\left[f_{\alpha}^{(2)}\left(\vec{x}+e_{1}\right)-f_{\alpha}^{(2)}\left(\vec{x}-e_{1}\right)\right] \\
& +i \bar{\rho}\left[f_{\alpha}^{(3)}\left(\vec{x}+e_{2}\right)-f_{\alpha}^{(3)}\left(\vec{x}-e_{2}\right)\right] \\
i \partial_{0} f_{\alpha}^{(2)}\left(\vec{x}+e_{1}\right)= & -i \bar{\rho}\left[f_{\alpha}^{(1)}\left(\vec{x}+2 e_{1}\right)-f_{\alpha}^{(1)}(\vec{x})\right] \\
& -i \bar{\rho}\left[f_{\alpha}^{(4)}\left(\vec{x}+e_{1}+e_{2}\right)-f_{\alpha}^{(4)}\left(\vec{x}+e_{1}-e_{2}\right)\right]  \tag{8.76}\\
i \partial_{0} f_{\alpha}^{(3)}\left(\vec{x}+e_{2}\right)= & -i \bar{\rho}\left[f_{\alpha}^{(4)}\left(\vec{x}+e_{1}+e_{2}\right)-f_{\alpha}^{(4)}\left(\vec{x}-e_{1}+e_{2}\right)\right] \\
& +i \bar{\rho}\left[f_{\alpha}^{(1)}\left(\vec{x}+2 e_{2}\right)-f_{\alpha}^{(1)}(\vec{x})\right] \\
i \partial_{0} f_{\alpha}^{(4)}\left(\vec{x}+e_{1}+e_{2}\right)= & -i \bar{\rho}\left[f_{\alpha}^{(3)}\left(\vec{x}+2 e_{1}+e_{2}\right)-f_{\alpha}^{(3)}\left(\vec{x}+e_{2}\right)\right] \\
& -i \bar{\rho}\left[f_{\alpha}^{(2)}\left(\vec{x}+e_{1}+2 e_{2}\right)-f_{\alpha}^{(2)}\left(\vec{x}+e_{1}\right)\right]
\end{align*}
$$

If we denote by $\Delta_{j} \phi(\vec{x}, t)$ the finite symmetric difference

$$
\begin{equation*}
\Delta_{j} \phi(\vec{x}, t)=\phi\left(\vec{x}+e_{j}, t\right)-\phi\left(\vec{x}-e_{j}, t\right) \tag{8.77}
\end{equation*}
$$

we can write the equation of motion, Eq. (8.76), in vector form (with $a=$ $1,2,3,4)$,

$$
\begin{equation*}
i \partial_{t} f_{\alpha}^{(a)}(\vec{x}, t)=-i \bar{\rho} M^{a b} f_{\alpha}^{(b)}(\vec{x}, t) \tag{8.78}
\end{equation*}
$$

provided that $\vec{x}$ stands for an (e, e) site and the $f^{(1)}, f^{(2)}, f^{(3)}$, and $f^{(4)}$ components have the coordinates shown in Fig. 8.10. The matrix $M^{a b}$ is given in terms of the symmetric difference operators $\Delta_{j}(j=1,2)$ by

$$
M^{a b}=\left(\begin{array}{cccc}
0 & \Delta_{1} & -\Delta_{2} & 0  \tag{8.79}\\
\Delta_{1} & 0 & 0 & \Delta_{2} \\
-\Delta_{2} & 0 & 0 & \Delta_{1} \\
0 & \Delta_{2} & \Delta_{1} & 0
\end{array}\right)
$$

Consider now the linear combinations, the two-component spinor $u^{(a)}$

$$
\begin{align*}
u_{\alpha}^{(1)}(\vec{x}, t) & =f_{\alpha}^{(1)}(\vec{x}, t)+f_{\alpha}^{(2)}\left(\vec{x}+e_{1}, t\right) \\
u_{\alpha}^{(2)}(\vec{x}, t) & =f_{\alpha}^{(3)}\left(\vec{x}+e_{2}, t\right)-f_{\alpha}^{(4)}\left(\vec{x}+e_{1}+e_{2}, t\right) \tag{8.80}
\end{align*}
$$

and $v^{(a)}$

$$
\begin{align*}
v_{\alpha}^{(1)}(\vec{x}, t) & =f_{\alpha}^{(3)}\left(\vec{x}+e_{2}, t\right)+f_{\alpha}^{(4)}\left(\vec{x}+e_{1}+e_{2}, t\right) \\
v_{\alpha}^{(2)}(\vec{x}, t) & =f_{\alpha}^{(1)}(\vec{x}, t)-f_{\alpha}^{(2)}\left(\vec{x}+e_{1}, t\right) \tag{8.81}
\end{align*}
$$

In terms of the spinors $u_{\alpha}^{(a)}$ and $v_{\alpha}^{(a)}(a=1,2)$ we can write the equation of motion in the standard (two-component) Dirac form

$$
\begin{equation*}
i \partial_{0} u_{\alpha}^{(a)}(\vec{x}, t)=-i \bar{\rho}\left(\sigma_{3}\right)_{a b} \Delta_{1} u_{\alpha}^{(b)}(\vec{x}, t)+i \bar{\rho}\left(\sigma_{1}\right)_{a b} \Delta_{2} u_{\alpha}^{(b)}(\vec{x}, t) \tag{8.82}
\end{equation*}
$$

and the same equation for $v_{\alpha}^{(a)}(\vec{x}, t)$.
Let us now define the $2 \times 2$ Dirac matrices $\gamma_{0}, \gamma_{1}$, and $\gamma_{2}$ :

$$
\begin{equation*}
\gamma_{0}=-\sigma_{2}, \quad \gamma_{1}=-i \sigma_{1}, \quad \gamma_{2}=-i \sigma_{3} \tag{8.83}
\end{equation*}
$$

In this notation Eq. (8.76) has the simpler form

$$
\begin{align*}
& i\left(\gamma_{0} \partial_{0}-v_{\mathrm{F}} \vec{\gamma} \cdot \vec{\nabla}\right)_{a b} u_{\alpha}^{(b)}=0  \tag{8.84}\\
& i\left(\gamma_{0} \partial_{0}-v_{\mathrm{F}} \vec{\gamma} \cdot \vec{\nabla}\right)_{a b} v_{\alpha}^{(b)}=0
\end{align*}
$$

where I have taken the continuum limit and the Fermi velocity $v_{\mathrm{F}}$ is

$$
\begin{equation*}
v_{\mathrm{F}}=2 a_{0} \bar{\rho} \tag{8.85}
\end{equation*}
$$

The eigenvalues of these Dirac operators are, in momentum space,

$$
\begin{equation*}
\epsilon(\vec{p})= \pm 2 \bar{\rho} \sqrt{\sin ^{2} p_{1}+\sin ^{2} p_{2}} \tag{8.86}
\end{equation*}
$$

with $\left|p_{i}\right| \leq \pi / 2$. These dispersion relations form conical surfaces near $\vec{p}=0$ that are characteristic of a continuum relativistic system (shown in Fig. 8.11). Such "Dirac cones" are also found in the band structure of materials such as graphene, a 2D material of carbon atoms arranged on a honeycomb lattice, and in the quasiparticle spectrum of d-wave superconductors. In other words, the spinon quasiparticles of the mean-field flux phases are Dirac fermions.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-293.jpg?height=792&width=637&top_left_y=193&top_left_x=527)

Figure 8.11 The Dirac cone: the dispersion law for spinons in a flux phase.

The ground-state energy in the flux phase is given by

$$
\begin{align*}
E_{\text {flux }} & =\frac{2 N L^{2}}{J} \bar{\rho}^{2}-2 \times 2 N L^{2} \bar{\rho} \int_{\left|p_{i}\right| \leq \frac{\pi}{2}} \frac{d^{2} p}{(2 \pi)^{2}} \sqrt{\sin ^{2} p_{1}+\sin ^{2} p_{2}} \\
& \equiv \frac{2 N L^{2}}{J} \bar{\rho}^{2}-N L^{2} \alpha \bar{\rho} \tag{8.87}
\end{align*}
$$

where the factor of 2 is due to the contribution of both $u$ and $v$ spinon branches. The minimum is attained at $\bar{\rho}=\frac{1}{4} \alpha J$ and the total energy of the flux phase is

$$
\begin{equation*}
E_{\text {flux }}=-\frac{\alpha^{2}}{8} N L^{2} J \approx-0.115 N L^{2} J \tag{8.88}
\end{equation*}
$$

which is lower than that of the BZA state, namely $E_{\mathrm{BZA}}=-8 N L^{2} J / \pi^{4} \approx$ $-0.082 N L^{2} J$.

Quantum dimer phases. Let us now turn our attention to a different set of solutions of the saddle-point equations, which is based on valence-bond states. Consider a configuration of $\bar{\rho}_{j}(\vec{x})$ that equals $\bar{\rho}$ on a set of links occupied by dimers such as in Figs. 8.12(a) and (b),

$$
\bar{\rho}_{j}(\vec{x})= \begin{cases}\bar{\rho} & \text { if the link }\left(\vec{x}, \vec{x}+e_{j}\right) \text { is occupied by a dimer }  \tag{8.89}\\ 0 & \text { otherwise }\end{cases}
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-294.jpg?height=459&width=870&top_left_y=184&top_left_x=418)

Figure 8.12 Valence-bond crystalline states: (a) one of the four columnar (or Peierls) states and (b) a staggered state.

The mean-field Hamiltonian, Eq. (8.70), with $\bar{\rho}_{j}(\vec{x})$ as given in Eq. (8.89), describes a set of spinons tightly confined (bound) inside the links, the VB states. Thus, we do not have spinon states propagating beyond the size of a dimer (one lattice spacing) in this dimer limit. Fluctuations will enable the effective size of a VB state to grow from the lattice-spacing scale up to some finite length scale $\xi$. This scale is the spin-correlation length for this system in this VB crystal phase. It is also clear that, at the level of mean-field theory, the average flux is not determined. This is simply reflecting the fact that the fluctuations of the gauge field are so strong that the average flux is wiped out. We will see later that, if the effects of the dynamics of holes are taken into account, a flux phase may also develop. The energy of a VB crystal state is

$$
\begin{equation*}
E_{\mathrm{VB}}=\frac{2 N L^{2}}{J} \bar{\rho}^{2}-N L^{2} \bar{\rho} \tag{8.90}
\end{equation*}
$$

which is minimized by the choice

$$
\begin{equation*}
\bar{\rho}=\frac{J}{4} \tag{8.91}
\end{equation*}
$$

and has the ground-state energy

$$
\begin{equation*}
E_{\text {dimer }}=-\frac{J}{8} N L^{2} \tag{8.92}
\end{equation*}
$$

for all dimer configurations. These states clearly have less energy, $-0.125 \mathrm{~J} N$ per site, than both BZA and flux states.

However, now we no longer get a unique ground state at $N=\infty$. This degeneracy is lifted by fluctuations in the amplitude that appear at order $1 / N$. Several possible phases can result from the effects of these fluctuations. For example, Dombre and Kotliar (1989) as well as Read and Sachdev (1989) found that, for the case $n_{\mathrm{c}}=1$, the four columnar or Peierls states are chosen (shown in Fig. 8.12(a)).

However, another possible state is a spin liquid, which in this language appears as a condensate of valence bonds on next-nearest-neighbor bonds. These states are possible in the case of a frustrated antiferromagnet, and formally break the $\mathrm{U}(1)$ local symmetry down to a local $\mathbb{Z}_{2}$ gauge symmetry that can lead to a $\mathbb{Z}_{2}$ spin liquid (Read and Sachdev, 1991; Wen, 1991c; Mudry and Fradkin, 1994). This case will be discussed in Chapter 9.

### 8.6 Is the large- $N$ mean-field theory reliable?

Both BZA and flux solutions have gapless excitations that carry a spin- $\frac{1}{2}$ degree of freedom (for $\mathrm{SU}(2)$ ) or, more generally, $\mathrm{SU}(N)$ color quantum numbers. While this spectrum appears to be stable at the level of mean-field theory, we will find problems once fluctuations are taken into account. First of all, we will find that a set of dimer states has lower energy both than the BZA states and than the flux states. It is plausible, however, that reasonable generalizations of this Hamiltonian such that the flux state may be preferred do exist. Affleck and Marston have indeed found such generalizations.

But what is more serious about these mean-field theories is the fact that they violate the local gauge invariance present in the full theory. In fact, we find spin-non-singlet excitations that are not gauge-invariant: the spinon states themselves. In lattice gauge theories, there is a theorem, known as Elitzur's theorem, which states that, in a theory with local interactions and with local gauge invariance, only locally gauge-invariant operators can have non-zero vacuum expectation values. In other words, the only states present in the spectrum are local gauge singlets.

This result may appear to be puzzling at first glance. After all, even in theories with a global symmetry, such as the Ising model, the low-temperature magnetization is zero if the averages are computed over the entire configuration space. The procedure to remedy this problem is well known, and it is crucial to a correct understanding of spontaneous breaking of global symmetries. First one considers a finite system of linear size $L$ and the allowed space of configurations is reduced either by choosing a boundary condition (that fixes the asymptotic behavior of the spins at spatial infinity) or by turning on a weak external symmetry-breaking field. Next, the thermodynamic limit $L \rightarrow \infty$ is considered in the presence of a fixed symmetry-breaking procedure, which is removed after the thermodynamic limit has been taken. This procedure yields a non-zero magnetization because in the thermodynamic limit it takes an infinite order in the low-temperature expansion, i.e. the expansion around the state with broken symmetry, to mix the two degenerate classes of configurations. Hence, there is no mixing and the magnetization is non-zero if the expansion has a finite radius of convergence.

However, if the symmetry is local, the situation is radically different. It always takes a finite order (of the order of the coordination number) in perturbation theory to mix states related through local gauge transformations. The behavior of the system at the boundaries has little effect on the behavior near its center. The expressions for local expectation values are analytic functions of the coupling fields, even in the thermodynamic limit, $L \rightarrow \infty$. Thus, in the absence of external fields or gauge-fixing conditions, expectation values of locally gauge-non-invariant operators must be zero. This is the content of Elitzur's theorem (see also Chapter 9).

However, a gauge theory may be in a non-confined phase in which a gaugeinvariant operator creates a quark (spinon in the terminology of magnetism) and an antiquark (anti-spinon) at distances $R$, which can be separated all the way to infinity and still yield a non-zero amplitude. But, for that to happen, the fluctuations of the gauge fields, or rather of their field strengths, need to be controlled. This is not the case for the "RVB-type" mean-field theories since there is no term to control the fluctuations of the gauge fields here. The gauge fields fluctuate so strongly that (a) they are able to enforce the local constraint and (b) they project out all current-carrying states. The conclusion is that the BZA and flux states need not only a Gutzwiller projection but also an additional procedure to eliminate all processes involving transport of spin over any significant distance. In conclusion, the physical stability (and significance) of gauge-symmetry-breaking mean-field states, such as the flux phases and their generalizations, the projective-symmetry group states (PSG) (Wen, 2002), must be assessed by a non-perturbative procedure that satisfies the requirements of Elitzur's theorem.

There is a possible loophole in this argument. Although the gauge theory alone may be in a confined phase, it may possibly become confined when it is coupled to a matter field. In Chapter 9 we will see that this scenario is possible only if the matter fields "condense" in such a way that they spontaneously break the $U(1)$ gauge symmetry down to a discrete subgroup such as $\mathbb{Z}_{2}$. In this case the theory effectively becomes a $\mathbb{Z}_{2}$ gauge theory, which in $(2+1)$ dimensions has a deconfined (topological) phase, namely, the $\mathbb{Z}_{2}$ spin liquid, which is a fully gapped phase. Another mechanism that will be discussed extensively in Chapter 10 is to have a phase that breaks time-reversal invariance dynamically. We will see that in this case the monopoles are suppressed and the flux phase is stable, even though it becomes massive.

On the other hand, unless some mechanism is found to suppress the monopole configurations, it is much more difficult to stabilize the gapless phases such as the BZA or flux states. One way to accomplish this goal is to consider a theory with flavor degrees of freedom, which so far we have set to unity. Indeed, if the number of flavors is large enough, it is possible to suppress the monopoles by making them irrelevant. This has been shown to hold in the limit in which the number of flavors
is also taken to infinity (Metlitski et al., 2008). This result is similar, and closely related, to the well-known fact that a gauge theory with a compact gauge group coupled to a large number of fermionic flavors becomes deconfining since it has an infrared-stable perturbative expansion. However, in the case of the BZA state, the suppression of the monopoles is not sufficient, since there remains the coupling between the spinons close to the Fermi surface and long-wavelength gauge fields. This coupling is known to lead to infrared singularities in the fermion propagators (in all gauges). This problem also arises in the context of quantum chromodynamics at finite density (such as in heavy-ion collisions) and in the compressible phases of 2D electron gases in large magnetic fields (i.e. when there are no fractional quantum Hall states allowed). Although many solutions have been proposed (e.g. Kwon et al., 1994; Polchinski, 1994; Lee, 2008; Metlitski and Sachdev, 2010) this is still an unsolved problem. However, the available quantum Monte Carlo data do not favor these scenarios for the case of systems with $\mathrm{SU}(2)$ symmetry such as the quantum Heisenberg antiferromagnets (Assaad, 2005; Armour et al., 2011).

On the other hand, the valence-bond states are manifestly local singlets, are locally gauge-invariant, and are thus free from these problems. Thus gauge-field fluctuations will play a rather small role in this case. We should expect states that are based on a VB description to be more stable. The problem of finding a "true" spin-liquid state, i.e. a state without broken symmetries and with spinon states in its spectrum, is a subtle one and for the most part remains essentially an open issue. We will return to this problem in Chapter 9.

## 8.7 $\mathrm{SU}(2)$ gauge invariance and Heisenberg models

There is something peculiar in the way we have treated the spin degrees of freedom. For the most part, the spin degrees of freedom are either "swallowed" by dimers or appear in an almost trivial factor as in the large- $N$ limit ( $N$ being the number of spin degrees of freedom!). Nowhere in our discussion do we see even a hint of the fact that the spins, say for $S=\frac{1}{2}$, have an $\mathrm{SU}(2)$ symmetry. The reason for this can be traced back to the way we decoupled the quartic interaction in terms of an abelian field $\chi_{i j}$ living on the links. In the past section, we showed that, for $N=2$, there are two types of spinors, up and down, coupled to amplitudes and gauge fields. (In reality, there are four because of the doubling.) It may seem that, if there are spinons in the excitation spectrum, then even without doubling there should be four elementary excitations bearing spin: spinon particles and holes of either spin orientation. The gauge fields, however, make sure that the constraint of single occupancy is strictly enforced. Thus, at each site, only two, not four, degrees of freedom are allowed, each allowed by the orientation of the spin. We must conclude that the particle and hole excitations of the spinons cannot possibly
be independent degrees of freedom. We also know that, in the absence of holes, particle-hole symmetry is strictly respected. Hence, the natural conclusion is that the spinon hole with, say, spin down must be the same physical excitation as the spinon particle with spin up, and vice versa. It is clear, then, that a combination of particle-hole and spin symmetries is playing a fundamental role in these systems. The gauge symmetry must then be larger than the local $\mathrm{U}(1)$ symmetry implied by the $1 / N$ expansion or, for that matter, by any RVB-like abelian decoupling of the Heisenberg interaction.

We will show now that a spin- $\frac{1}{2}$ Heisenberg antiferromagnet, on any lattice and in any dimension, is equivalent to the strong-coupling limit of an $\mathrm{SU}(2)$ gauge theory coupled to fermions (Affleck et al., 1988a; Dagotto et al., 1988). Let $\vec{x}$ and $\vec{x}^{\prime}$ be two sites of a lattice. The term in the Heisenberg Hamiltonian which describes the antiferromagnetic coupling between spins at points $\vec{x}$ and $\vec{x}^{\prime}$ (not necessarily nearest neighbors) is

$$
\begin{equation*}
J \vec{S}(\vec{x}) \cdot \vec{S}\left(\vec{x}^{\prime}\right) \tag{8.93}
\end{equation*}
$$

Once again, we will use a fermion description of the spins,

$$
\begin{equation*}
\vec{S}(\vec{x})=c_{\alpha}^{\dagger}(\vec{x}) \vec{\tau}_{\alpha \beta} c_{\beta}(\vec{x}) \tag{8.94}
\end{equation*}
$$

where $\vec{\tau}$ is the set of $2 \times 2$ Pauli matrices and we require single occupancy at $\vec{x}$ and $\vec{x}^{\prime}$ :

$$
\begin{equation*}
1=c_{\alpha}^{\dagger}(\vec{x}) c_{\alpha}(\vec{x})=c_{\alpha}^{\dagger}\left(\vec{x}^{\prime}\right) c_{\alpha}\left(\vec{x}^{\prime}\right) \tag{8.95}
\end{equation*}
$$

Let us perform a particle-hole transformation at every site so as to ensure that the reference state satisfies Eq. (8.95). We define new fermion operators $\psi_{1}(\vec{x})$ and $\psi_{2}(\vec{x})$ given by the relationships

$$
\begin{array}{ll}
c_{\uparrow}(\vec{x})=\psi_{1}(\vec{x}), & c_{\uparrow}^{\dagger}(\vec{x})=\psi_{1}^{\dagger}(\vec{x})  \tag{8.96}\\
c_{\downarrow}(\vec{x})=\psi_{2}^{\dagger}(\vec{x}), & c_{\downarrow}^{\dagger}(\vec{x})=\psi_{2}(\vec{x})
\end{array}
$$

This canonical transformation amounts to an "exchange" of charge and spin operators since

$$
\begin{align*}
& c_{\uparrow}^{\dagger}(\vec{x}) c_{\uparrow}(\vec{x})+c_{\downarrow}^{\dagger}(\vec{x}) c_{\downarrow}(\vec{x})=\psi_{1}^{\dagger}(\vec{x}) \psi_{1}(\vec{x})-\psi_{2}^{\dagger}(\vec{x}) \psi_{2}(\vec{x})+1  \tag{8.97}\\
& c_{\uparrow}^{\dagger}(\vec{x}) c_{\uparrow}(\vec{x})-c_{\downarrow}^{\dagger}(\vec{x}) c_{\downarrow}(\vec{x})=\psi_{1}^{\dagger}(\vec{x}) \psi_{1}(\vec{x})+\psi_{2}^{\dagger}(\vec{x}) \psi_{2}(\vec{x})-1
\end{align*}
$$

Hence, the constraint

$$
\begin{equation*}
c_{\uparrow}^{\dagger}(\vec{x}) c_{\uparrow}(\vec{x})+c_{\downarrow}^{\dagger}(\vec{x}) c_{\downarrow}(\vec{x})=1 \tag{8.98}
\end{equation*}
$$

is equivalent to

$$
\begin{equation*}
\psi_{1}^{\dagger}(\vec{x}) \psi_{1}(\vec{x})-\psi_{2}^{\dagger}(\vec{x}) \psi_{2}(\vec{x})=0 \tag{8.99}
\end{equation*}
$$

In other words, we are projecting onto the subspace with an equal number of quantum numbers 1 and 2 per site. Such states are denoted by |Phys $\rangle$. The constraint, Eq. (8.99), has the equivalent form

$$
\begin{equation*}
\left.\psi^{\dagger}(\vec{x}) \tau_{3} \psi(\vec{x}) \mid \text { Phys }\right\rangle=0 \tag{8.100}
\end{equation*}
$$

However, Eq. (8.99) implies that the following identities must also hold:

$$
\begin{align*}
\left.\psi^{\dagger}(\vec{x}) \tau_{1} \psi(\vec{x}) \mid \text { Phys }\right\rangle & \left.=\left(\psi_{1}^{\dagger}(\vec{x}) \psi_{2}(\vec{x})+\psi_{2}^{\dagger}(\vec{x}) \psi_{1}(\vec{x})\right) \mid \text { Phys }\right\rangle=0  \tag{8.101}\\
\left.\psi^{\dagger}(\vec{x}) \tau_{2} \psi(\vec{x}) \mid \text { Phys }\right\rangle & =i\left(\psi_{1}^{\dagger}(\vec{x}) \psi_{2}(\vec{x})-\psi_{2}^{\dagger}(\vec{x}) \psi_{1}(\vec{x})\right)|\mathrm{Phys}\rangle=0
\end{align*}
$$

Indeed, Eq. (8.101) is equivalent to the statements

$$
\begin{align*}
\left(c_{\uparrow}^{\dagger}(\vec{x}) c_{\downarrow}^{\dagger}(\vec{x})+c_{\downarrow}(\vec{x}) c_{\uparrow}(\vec{x})\right)|\mathrm{Phys}\rangle & =0  \tag{8.102}\\
i\left(c_{\uparrow}^{\dagger}(\vec{x}) c_{\downarrow}^{\dagger}(\vec{x})-c_{\downarrow}(\vec{x}) c_{\uparrow}(\vec{x})\right)|\mathrm{Phys}\rangle & =0
\end{align*}
$$

which are true since the states $|\mathrm{Phys}\rangle$ are singly occupied. Therefore, we have the local constraint on the space of allowed states

$$
\begin{equation*}
\left.\psi^{\dagger}(\vec{x}) \vec{\tau} \psi(\vec{x}) \mid \text { Phys }\right\rangle=0 \tag{8.103}
\end{equation*}
$$

at each site of the lattice. Note, however, that $\psi^{\dagger}(\vec{x}) \vec{\tau} \psi(\vec{x})$ is not a spin operator. Rather, the spin operators $S_{a}(\vec{x}), a=1,2,3$, are now given by

$$
\begin{align*}
& S_{1}(\vec{x}) \equiv c_{\uparrow}^{\dagger}(\vec{x}) c_{\downarrow}(\vec{x})+c_{\downarrow}^{\dagger}(\vec{x}) c_{\uparrow}(\vec{x})=\psi_{1}^{\dagger}(\vec{x}) \psi_{2}^{\dagger}(\vec{x})+\psi_{2}(\vec{x}) \psi_{1}(\vec{x}) \\
& S_{2}(\vec{x}) \equiv i\left(c_{\uparrow}^{\dagger}(\vec{x}) c_{\downarrow}(\vec{x})-c_{\downarrow}^{\dagger}(\vec{x}) c_{\uparrow}(\vec{x})\right)=i\left(\psi_{1}^{\dagger}(\vec{x}) \psi_{2}^{\dagger}(\vec{x})-\psi_{2}(\vec{x}) \psi_{1}(\vec{x})\right) \\
& S_{3}(\vec{x}) \equiv c_{\uparrow}^{\dagger}(\vec{x}) c_{\uparrow}(\vec{x})-c_{\downarrow}^{\dagger}(\vec{x}) c_{\downarrow}(\vec{x})=\psi_{1}^{\dagger}(\vec{x}) \psi_{1}(\vec{x})+\psi_{2}^{\dagger}(\vec{x}) \psi_{2}(\vec{x})-1 \tag{8.104}
\end{align*}
$$

This set of operators has a remarkable local symmetry. Let $\psi^{\prime}(\vec{x})$ be a new spinor related to $\psi(\vec{x})$ by means of an $\mathrm{SU}(2)$ transformation $U(\vec{x})$ :

$$
\begin{equation*}
\psi_{\alpha}^{\prime}(\vec{x})=U_{\alpha \beta}(\vec{x}) \psi_{\beta}(\vec{x}) \tag{8.105}
\end{equation*}
$$

Clearly, under such a transformation, we have

$$
\begin{align*}
\psi_{\alpha}^{\prime \dagger}(\vec{x}) \tau_{\alpha \beta}^{a} \psi_{\beta}^{\prime}(\vec{x}) & =\psi_{\alpha}^{\dagger}(\vec{x})\left(U^{-1}(\vec{x}) \tau^{a} U(\vec{x})\right)_{\alpha \beta} \psi_{\beta}(\vec{x}) \\
& \equiv R^{a b}(\vec{x}) \psi_{\alpha}^{\dagger}(\vec{x}) \tau_{\alpha \beta}^{b} \psi_{\beta}(\vec{x}) \tag{8.106}
\end{align*}
$$

where $R(\vec{x})$ is the $\mathrm{SO}(3)$ rotation associated with the $\mathrm{SU}(2)$ transformation $U(\vec{x})$.
The spin operators $S_{a}(\vec{x}), a=1,2,3$, are invariant under this $\mathrm{SU}(2)$ transformation. First, $S_{3}(\vec{x})$ is clearly invariant:

$$
\begin{equation*}
S_{3}(\vec{x})=\psi_{\alpha}^{\dagger}(\vec{x}) \psi_{\alpha}(\vec{x})-1=\psi_{\alpha}^{\prime \dagger}(\vec{x}) \psi_{\alpha}^{\prime}(\vec{x})-1 \tag{8.107}
\end{equation*}
$$

Secondly, the invariance of $S_{1}(\vec{x})$ and $S_{2}(\vec{x})$ follows from the fact that the operators $\chi(\vec{x})$ and $\chi^{\dagger}(\vec{x})$, defined by

$$
\begin{equation*}
\chi(\vec{x}) \equiv \frac{1}{2} \epsilon_{i j} \psi_{i}(\vec{x}) \psi_{j}(\vec{x}) \tag{8.108}
\end{equation*}
$$

are also invariant under $\mathrm{SU}(2)$.
It is convenient to introduce the $\mathrm{SU}(2)$-invariant operator $M(\vec{x})$,

$$
\begin{equation*}
M(\vec{x}) \equiv \psi_{\alpha}^{\dagger}(\vec{x}) \psi_{\alpha}(\vec{x}) \tag{8.109}
\end{equation*}
$$

It is easy to show now that the Heisenberg Hamiltonian on any lattice and in any dimension with a translationally invariant interaction $J(\vec{l})(\vec{l}$ is the relative position vector of a pair of spins) is equivalent to the following Hamiltonian:

$$
\begin{align*}
H= & -N_{\mathrm{s}}\left(\sum_{\vec{l}} J(\vec{l})\right)\left(1+2 m_{3}\right) \\
& +\sum_{\vec{x}, \vec{l}} J(\vec{l})\left(M(\vec{x}) M(\vec{x}+\vec{l})+2\left(\chi^{\dagger}(\vec{x}) \chi(\vec{x}+\vec{l})+\chi^{\dagger}(\vec{x}+\vec{l}) \chi(\vec{x})\right)\right) \tag{8.110}
\end{align*}
$$

where $N_{\mathrm{s}}$ is the total number of sites on the lattice and $m_{3}$ is the total polarization of the allowed Hilbert space,

$$
\begin{equation*}
\left.\left.\left.\frac{1}{N_{\mathrm{s}}} \sum_{\vec{x}} S_{3}(\vec{x}) \right\rvert\, \text { Phys }\right\rangle=m_{3} \mid \text { Phys }\right\rangle \tag{8.111}
\end{equation*}
$$

The Heisenberg Hamiltonian in the form given by Eq. (8.110) is manifestly invariant under the local $\mathrm{SU}(2)$ transformations of Eq. (8.105) since it is written in terms of $M(\vec{x}), \chi(\vec{x})$, and $m_{3}$, which are locally invariant.

It is important to stress that this local $\mathrm{SU}(2)$ symmetry, which involves both spin rotations and a particle-hole transformation, is unrelated to the global $\mathrm{SU}(2)$ invariance

$$
\begin{equation*}
c_{\alpha}(\vec{x}) \rightarrow c_{\alpha}^{\prime}(\vec{x})=V_{\alpha \beta} c_{\beta}(\vec{x}) \tag{8.112}
\end{equation*}
$$

which induces global rotations of the spin polarization,

$$
\begin{equation*}
S_{a}(\vec{x}) \rightarrow S_{a}^{\prime}(\vec{x})=R^{a b} S_{b}(\vec{x}) \tag{8.113}
\end{equation*}
$$

In Section 2.3.1, we showed that the Heisenberg antiferromagnet is the $U \rightarrow \infty$ limit of a half-filled Hubbard model. I will now show that it is also the strongcoupling limit of an $\mathrm{SU}(2)$ lattice gauge theory. Consider a system of fermions, with creation and annihilation operators $\psi_{\alpha}^{\dagger}(\vec{x})$ and $\psi_{\alpha}(\vec{x})$, respectively, coupled to a set of $S U(2)$ gauge degrees of freedom $U\left(\vec{x}, \vec{x}^{\prime}\right)$ on the bonds $\left(\vec{x}, \vec{x}^{\prime}\right)$ of a lattice.

The Hilbert space of this system is a tensor product of fermionic states on the sites of the lattice multiplied by states on the links associated with gauge degrees of freedom. Let $A^{a}\left(\vec{x}, \vec{x}^{\prime}\right)$ be an operator that transforms like a vector under $\mathrm{SU}(2)$, i.e. $\vec{A}\left(\vec{x}, \vec{x}^{\prime}\right) \cdot \vec{\tau}$ is an element of the Lie algebra. Let us label the states on the links by the (real) eigenvalues of $A^{a}\left(\vec{x}, \vec{x}^{\prime}\right)$, e.g. $\left|\left\{A^{a}\left(\vec{x}, \vec{x}^{\prime}\right)\right\}\right\rangle$. The operators $U\left(\vec{x}, \vec{x}^{\prime}\right)$ are $2 \times 2$ matrices defined by

$$
\begin{equation*}
U\left(\vec{x}, \vec{x}^{\prime}\right)=e^{i \tau^{a} A^{a}\left(\vec{x}, \vec{x}^{\prime}\right)} \tag{8.114}
\end{equation*}
$$

where the $\tau^{a}$ are the generators of $\mathrm{SU}(2)$ in the fundamental (spinor) representation. Moreover, we demand

$$
\begin{equation*}
A^{a}\left(\vec{x}, \vec{x}^{\prime}\right)=-A^{a}\left(\vec{x}^{\prime}, \vec{x}\right) \tag{8.115}
\end{equation*}
$$

Equivalently, the $U\left(\vec{x}, \vec{x}^{\prime}\right)$ operators must satisfy the condition

$$
\begin{equation*}
U\left(\vec{x}, \vec{x}^{\prime}\right)=U^{\dagger}\left(\vec{x}^{\prime}, \vec{x}\right) \tag{8.116}
\end{equation*}
$$

Let $E^{a}\left(\vec{x}, \vec{x}^{\prime}\right)$ be a set of operators acting on this Hilbert space. We will require that these operators be canonically conjugate to the $A^{a}\left(\vec{x}, \vec{x}^{\prime}\right)$, i.e.

$$
\begin{equation*}
\left[A^{a}\left(\vec{x}, \vec{x}^{\prime}\right), E^{b}\left(\vec{y}, \vec{y}^{\prime}\right)\right]=i \delta^{a b} \cdot \delta_{\vec{x}, \vec{y}} \delta_{\vec{x}^{\prime}, \vec{y}^{\prime}} \tag{8.117}
\end{equation*}
$$

In addition, the operators $E^{a}\left(\vec{x}, \vec{x}^{\prime}\right)$ satisfy the $\mathrm{SU}(2)$ (angular-momentum) algebra

$$
\begin{equation*}
\left[E^{a}\left(\vec{x}, \vec{x}^{\prime}\right), E^{b}\left(\vec{y}, \vec{y}^{\prime}\right)\right]=i \epsilon^{a b c} E^{c}\left(\vec{x}, \vec{x}^{\prime}\right) \cdot \delta_{\vec{x}, \vec{y}} \delta_{\vec{x}^{\prime}, \vec{y}^{\prime}} \tag{8.118}
\end{equation*}
$$

In other words, the operators $E^{a}\left(\vec{x}, \vec{x}^{\prime}\right)$ transform like group generators. Clearly, the operators $E^{a}\left(\vec{x}, \vec{x}^{\prime}\right)$ and the $\mathrm{SU}(2)$ matrices $U\left(\vec{x}, \vec{x}^{\prime}\right)$ satisfy the commutation relations

$$
\begin{equation*}
\left[E^{a}\left(\vec{x}, \vec{x}^{\prime}\right), U\left(\vec{y}, \vec{y}^{\prime}\right)\right]=\tau^{a} U\left(\vec{x}, \vec{x}^{\prime}\right) \cdot \delta_{\vec{x}, \vec{y}} \delta_{\vec{x}^{\prime}, \vec{y}^{\prime}} \tag{8.119}
\end{equation*}
$$

All the commutators so defined (Eqs. (8.117)-(8.119)) vanish if the operators act on the Hilbert spaces associated with different links.

Consider now the Hamiltonian $\tilde{H}$ acting on the Hilbert space of gauge-invariant states:

$$
\begin{equation*}
\tilde{H}=\frac{G}{2} \sum_{\left(\vec{x}, \vec{x}^{\prime}\right) a} E^{a}\left(\vec{x}, \vec{x}^{\prime}\right) E^{a}\left(\vec{x}, \vec{x}^{\prime}\right)+\frac{i}{2} \sum_{\left(\vec{x}, \vec{x}^{\prime}\right) \alpha \beta}\left(\psi_{\alpha}^{\dagger}(\vec{x}) U_{\alpha \beta}\left(\vec{x}, \vec{x}^{\prime}\right) \psi_{\beta}\left(\vec{x}^{\prime}\right)-\text { h.c. }\right) \tag{8.120}
\end{equation*}
$$

where $G$ is a coupling constant and $\left(\vec{x}, \vec{x}^{\prime}\right)$ are pairs of sites on an arbitrary lattice.
On a given lattice, the equivalence between the system described by the Hamiltonian $\tilde{H}$ and the Heisenberg model holds in the limit $G \rightarrow \infty$. The argument goes
as follows. First we note that $\tilde{H}$ is invariant under time-independent local $\operatorname{SU}(2)$ gauge transformations,

$$
\begin{align*}
U_{\alpha \beta}\left(\vec{x}, \vec{x}^{\prime}\right) & =W_{\alpha \gamma}^{-1}(\vec{x}) U_{\gamma \delta}^{\prime}\left(\vec{x}, \vec{x}^{\prime}\right) W_{\delta \beta}\left(\vec{x}^{\prime}\right) \\
\psi_{\alpha}(\vec{x}) & =W_{\alpha \beta}^{-1}(\vec{x}) \psi_{\beta}^{\prime}(\vec{x}) \tag{8.121}
\end{align*}
$$

In the limit $G \rightarrow \infty$, the ground state of the system has a huge degeneracy. In fact, to leading order in an expansion in powers of $1 / G$, the low-lying states are the gauge singlets which satisfy

$$
\begin{equation*}
E^{a}\left(\vec{x}, \vec{x}^{\prime}\right) E^{a}\left(\vec{x}, \vec{x}^{\prime}\right)|\Psi\rangle=0 \tag{8.122}
\end{equation*}
$$

(on all links) and obey the constraint

$$
\begin{equation*}
\mathcal{Q}^{a}(\vec{x})|\Psi\rangle \equiv \psi_{\alpha}^{\dagger}(\vec{x}) \tau_{\alpha \beta}^{a} \psi_{\beta}(\vec{x})|\Psi\rangle=0 \tag{8.123}
\end{equation*}
$$

The last condition implies that at each site $\vec{x}$ we have either a state with no fermion, $|0\rangle$, or a "baryon" state, $|\chi\rangle=\chi^{\dagger}|0\rangle$. We now can apply a degenerate perturbation theory exactly identical to the one we used to derive the Heisenberg model from the Hubbard model. The first available excited state, $\left|\Psi_{\text {exc }}\right\rangle$, has a link excited to a state with angular-momentum quantum number $\frac{1}{2}$,

$$
\begin{equation*}
E^{a}\left(\vec{x}, \vec{x}^{\prime}\right) E^{a}\left(\vec{x}, \vec{x}^{\prime}\right)\left|\Psi_{\mathrm{exc}}\right\rangle=\frac{3}{4}\left|\Psi_{\mathrm{exc}}\right\rangle \tag{8.124}
\end{equation*}
$$

only on that link. The effective Heisenberg exchange interaction thus obtained is equal to $J=2 /(3 G)$.

What is the physical meaning of this symmetry? What we have actually shown is that the strong-correlation limit of the Hubbard model at half-filling has an effective local $\mathrm{SU}(2)$ gauge invariance. This gauge invariance, which is a mixture of a local particle-hole transformation and a spin rotation, merely reflects the fact that in the strong-correlation limit the only excitations left do not violate the local constraint. Hence no charge motion is possible and the system is an insulator. The chargecarrying states are either holes or doubly occupied sites, both of which violate the constraint and pay a large energy penalty of order $U$, the Hubbard coupling constant. The remaining states are charge-neutral states, which may, or might not, carry spin. It is thus no surprise that the gauge theory satisfies not only the constraint

$$
\begin{equation*}
\left.\mathcal{Q}^{a}(\vec{x}) \mid \text { Phys }\right\rangle=0 \tag{8.125}
\end{equation*}
$$

but also the related condition for the current,

$$
\begin{equation*}
\left.J_{i}^{a}(\vec{x}) \mid \text { Phys }\right\rangle=0 \tag{8.126}
\end{equation*}
$$

In other words, the current must also be zero.

In a sense, we can think of the Heisenberg model as a "free-particle" problem with its large Hilbert space projected onto a subspace of states with zero current and zero charge, at the scale of the lattice spacing. The insulating phase of the Hubbard model, on the other hand, satisfies the same condition at length scales larger than the inverse of the charge gap. Thus, the low-energy behavior of the Hubbard insulator is also described by a system with a gauge symmetry. This property is clearly violated once one considers states with non-zero charge. Indeed, the chemical potential, which couples to the charge density $c_{\alpha}^{\dagger}(\vec{x}) c_{\alpha}(\vec{x})$, yields a term in the Hamiltonian $\tilde{H}$ of the form

$$
\begin{equation*}
\tilde{H}_{\text {charge }}=\mu \sum_{\vec{x}} \psi^{\dagger}(\vec{x}) \tau_{3} \psi(\vec{x}) \tag{8.127}
\end{equation*}
$$

which clearly violates the $S U(2)$ symmetry. Similarly, the fermion-hopping term becomes

$$
\begin{equation*}
\tilde{H}_{\mathrm{hop}}=t \sum_{\left\langle\vec{x}, \vec{x}^{\prime}\right\rangle} c_{\sigma}^{\dagger}(\vec{x}) c_{\sigma}\left(\vec{x}^{\prime}\right)=t \sum_{\left\langle\vec{x}, \vec{x}^{\prime}\right\rangle} \psi_{\alpha}^{\dagger}(\vec{x}) \tau_{3}^{\alpha \beta} \psi_{\beta}\left(\vec{x}^{\prime}\right) \tag{8.128}
\end{equation*}
$$

which also violates the local $\mathrm{SU}(2)$ gauge invariance. We will come back to these issues later on. Let us point out now that the symmetry does imply that the spinon particle (hole) state with spin up is the same state as a spinon hole (particle) with spin down. Thus local $S U(2)$ tells us that there are only two spinon states, which is as it should be.

## 9

## Gauge theory, dimer models, and topological phases

In the last chapter we introduced the concept of valence-bond states and discussed several quantum disordered phases in this language. Here we will see that the quantum fluctuations of valence-bond systems are best captured in terms of a much simpler effective theory, the quantum-dimer models. An understanding of these types of phases is best accomplished in terms of gauge theories. The phases of gauge theories and their topological properties will allow us to introduce the concept of a topological phase of matter in a precise way.

### 9.1 Fluctuations of valence bonds: quantum-dimer models

The valence-bond crystal of Section 8.5 has a spin-correlation length of the order of one lattice constant. It represents a quantum paramagnet. However, it is not a translationally invariant state, unlike the equal-amplitude short-range RVB state. It has crystalline order of its valence bonds and it is a four-fold degenerate state.

Alternatively we can imagine that the amplitude fluctuations, which represent transitions to states with broken valence bonds, are suppressed. The only way the system has to minimize its energy is by finding a coherent rearrangement of valence bonds. If the amplitude fluctuations are frozen out, the system has states labeled by quantum numbers that describe the covering of the lattice by dimers. For the rest of our discussion we will ignore the $\mathrm{SU}(N)$ structure. In this approximation the space of states is identified with the set of configurations $\{\mathcal{C}\}$ of dimer coverings of the lattice. In particular we will take this basis to be orthonormal,

$$
\begin{equation*}
\left\langle\mathcal{C} \mid \mathcal{C}^{\prime}\right\rangle=\delta_{\mathcal{C}, \mathcal{C}^{\prime}} \tag{9.1}
\end{equation*}
$$

and complete (although the valence-bond singlet states are over-complete).
Quantum-dimer models also arise in certain limits of frustrated Ising models in transverse fields (Moessner et al., 2000; Moessner and Sondhi, 2001b). Two
examples are the Ising antiferromagnet in a transverse field on a triangular lattice and the fully frustrated Ising model (also in a transverse field). In these cases, as in their classical counterparts, dimer coverings of the lattice represent the configurations of "unsatisfied bonds." These are classically degenerate configurations (states). The quantum-dimer model is the effective quantum Hamiltonian acting on this degenerate manifold of states, much in the same way as the quantum Heisenberg antiferromagnet arises as the strong-coupling limit of the Hubbard model (at half-filling).

The structure of quantum-dimer models and of their phase diagrams depends on whether the lattice is bipartite or not, and, if it is, on the coordination number. We will focus primarily on the cases of the square and triangular lattices. Let us consider first the case of a square lattice and let $l_{j}(\vec{x})$ be an integer-valued variable associated with the bond $\left(\vec{x}, \vec{x}+e_{j}\right)$. The Hilbert space is the space of states of the form $\left\{\left|\left\{l_{j}(\vec{x})\right\}\right\rangle\right\}$, where the integer $l_{j}$ is either equal to zero (no dimer) or one (dimer). Every site has to belong to one and only one dimer. This requirement leads to the local constraint

$$
\begin{equation*}
l_{1}(\vec{x})+l_{2}(\vec{x})+l_{1}\left(\vec{x}-e_{1}\right)+l_{2}\left(\vec{x}-e_{2}\right)=1 \tag{9.2}
\end{equation*}
$$

For the case of the triangular and honeycomb lattices there is an analogous construction with a space of states labeled by an integer $l$, the dimer occupation number of the link, taking the values $l=0,1$. The dimer occupation numbers are subject to the same constraint that their sum on links sharing a given site is fixed to be 1 , indicating that a lattice site belongs to one and only one dimer at a time. Each lattice is composed of sites, nearest-neighboring pairs of which denote the links. Planar lattices are uniformly tiled by plaquettes (squares, triangles, hexagons, etc.).

The Hamiltonian of the quantum-dimer model (QDM) is in all cases a sum of a resonance term (the kinetic energy) and a diagonal term (the potential energy) with a structure that is different for each type of lattice,

$$
\begin{equation*}
H_{\mathrm{QDM}}=H_{\mathrm{res}}+H_{\mathrm{diag}} \tag{9.3}
\end{equation*}
$$

which acts on a space of states subject to the local constraint of Eq. (9.2).
The "resonance" process of Fig. 9.1 is represented by an off-diagonal matrix element in which the integer degrees of freedom $l_{j}$ for parallel bonds of a plaquette are raised from zero to one if the values for the other two bonds are lowered from one to zero. This process can be described by a term in the effective Hamiltonian of the form $H_{\text {res }}$, which for the case of the square lattice is (Rokhsar and Kivelson, 1988)

$$
\begin{equation*}
H_{\mathrm{res}}=\bar{J} \sum_{\text {plaquettes }}(|\square\rangle\langle\square|+|\square\rangle\langle\square|) \tag{9.4}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-306.jpg?height=274&width=664&top_left_y=200&top_left_x=518)

Figure 9.1 The resonance process. The integers $l=0,1$ represent the bond occupation by a dimer (or valence bond).
where $\bar{J}$ is an effective coupling constant, $\bar{J} \propto J$. When acting on a given plaquette, this operator annihilates states with no dimer or only one dimer on that plaquette because these states are orthogonal. For the case of the triangular and hexagonal lattices there is also a resonance term describing resonant processes for dimer configurations covering every other link of the smallest possible plaquettes of the lattice (hexagons for the honeycomb lattice and parallelograms for the triangular lattice) (Moessner and Sondhi, 2001a, 2001b).

The diagonal matrix elements are described by a term in the Hamiltonian $H_{\text {diag }}$, which gives an energy $V$ to a pair of neighboring parallel dimers. For the square lattice it has the form

$$
\begin{equation*}
H_{\text {diag }}=V \sum_{\text {plaquettes }}(|\square\rangle\langle\square|+|\square\rangle\langle\square|) \tag{9.5}
\end{equation*}
$$

This operator assigns a plaquette energy 0 to all states with no dimer or only one dimer on that plaquette. For the case of triangular and hexagonal lattices the structure of $H_{\text {diag }}$ is analogous and it is also associated with the smallest possible plaquettes.

In spite of its apparent simplicity, the QDM is not easy to solve for arbitrary values of the parameters. A partial exact solution exists for a particular set of values of the parameters (which will be discussed below). We will now describe its phases and phase diagrams, which turn out to depend on whether the lattice is bipartite or not. In most (but not all) cases the ground state is a VB crystal. Thus, even the QDM, which was originally proposed by Rokhsar and Kivelson (1988) as a model with a short-range RVB state as its ground state, has, in general, a crystalline ground state.

This is easy to see in the "classical limit" in which $|V| \gg|J|$. Indeed, if $V$ is large and negative, the diagonal term tells us that dimers on parallel links of a plaquette attract each other. Thus in this case we need to maximize the number of parallel dimers on each plaquette (regardless of the lattice structure). For the case of the square lattice the result is the columnar ordered state shown in Fig. 8.12(a). Similar "ideal" ordered phases also occur for the triangular and honeycomb lattices. In the opposite limit, with $V$ large and positive, dimers on parallel links repel each
other. In this limit too the ground state is a VB crystal, which for the case of the square lattice is the staggered crystal shown in Fig. 8.12(b). Again, analogous VB crystalline phases exist for other lattices as well.
From a symmetry point of view, a state with columnar order can be regarded as a phase with a unidirectional modulation of the dimer density, a "VB density wave." Such a phase breaks (spontaneously) translational invariance as well as rotational invariance or, more properly, the point-group symmetry of the lattice. In the cases we discuss here the VB density wave is commensurate with the underlying lattice, and in the particular case of columnar order the period is 2. Valence-bond crystalline states with more complex orders can also exist (Fradkin et al., 2004; Vishwanath et al., 2004; Papanikolaou et al., 2007a). Crystalline phases that respect the point-group symmetry can also exist. One such example is a state with "plaquette" order (Jalabert and Sachdev, 1991), which can be regarded as a state with a bidirectional VB density wave (or as a state in which dimers resonate on a subset of plaquettes).

For general values (and signs) of the coupling constants $V$ and $J$ the QDM Hamiltonian must be diagonalized numerically. This is a numerically hard problem even for this very simple system. Quantum Monte Carlo simulations (Jalabert and Sachdev, 1991) and finite-size exact diagonalizations (Leung et al., 1996) have been performed and confirm the statement that the "generic" ground state is a crystal rather than a liquid. For $V>|\bar{J}|$, the staggered valence-bond crystal of Fig. 8.12(b) is the exact ground state and it has zero energy for all $V>|J|$.

The exact ground state of the QDM is known for a particular value of $\bar{J} / V$, namely $\bar{J} / V=-1$ (with $V>0$ ), which is known as the Rokhsar-Kivelson (RK) point. At this value of $\bar{J} / V$ Rokhsar and Kivelson (1988) found that the shortrange RVB wavefunction is the exact ground-state wave function and that it has zero energy. The reason for this behavior is that precisely at $\bar{J}=-V$ the QDM Hamiltonian (in all planar lattices) can be written as a sum of projection operators that locally project out the linear superposition of the two parallel configurations of dimers on each plaquette. Thus, at the RK point and for all lattices the Hamiltonian is a positive semi-definite hermitian operator whose eigenvalues are non-negative. Hence, all zero-energy states are exact (zero energy!) ground states.

Up to the effects of boundary conditions (which we will discuss below) the ground state of the QDM Hamiltonian at the RK point is the short-range RVB state $\left|\Psi_{\text {sRVB }}\right\rangle$, the equal-amplitude superposition of dimer configurations $\{C\}$,

$$
\begin{equation*}
\left|\Psi_{\mathrm{sRVB}}\right\rangle=\sum_{\{C\}}|C\rangle \tag{9.6}
\end{equation*}
$$

which, at the $R K$ point, clearly obeys

$$
\begin{equation*}
H_{\mathrm{QDM}}\left|\Psi_{\mathrm{sRVB}}\right\rangle=0 \tag{9.7}
\end{equation*}
$$

This state has a number of simple and remarkable properties. Owing to the orthonormality of the dimer configurations,

$$
\begin{equation*}
\left\langle C \mid C^{\prime}\right\rangle=\delta_{C, C^{\prime}} \tag{9.8}
\end{equation*}
$$

the norm of this state, $\left\|\Psi_{\mathrm{sRVB}}\right\|^{2}$, is simply the sum of the dimer configurations on the given lattice. In other terms,

$$
\begin{equation*}
\left\|\Psi_{\mathrm{sRVB}}\right\|^{2}=Z_{\mathrm{dimer}} \tag{9.9}
\end{equation*}
$$

where $Z_{\text {dimer }}$ is the classical dimer partition function for that lattice. In addition, the equal-time correlation functions of local operators of the QDM that are diagonal in the dimer basis, e.g. the local dimer-density operator, is equal to the correlation function of the same physical observable in the classical dimer model about which much is known!

We saw before that the correlation length of the spins in short-ranged valencebond states is short-ranged (Kohmoto and Shapir, 1988). In the dimer limit which we are considering here, the spins are permanently bound inside dimers and the spectrum of spin excitations has effectively an infinite energy gap for all spincarrying excitations. In particular, in this limit the spin-correlation length cannot exceed the size of a dimer and it is effectively zero. However, this does not imply that all other correlation functions must also necessarily be short-ranged. The actual behavior turns out to depend on whether the lattice is bipartite or not.

### 9.2 Bipartite lattices: valence-bond order and quantum criticality

For the square and honeycomb lattices, both of which are bipartite, the RK point dimer-density correlation function is not short-ranged. This correlation function, which measures the probability on finding two dimers separated by some distance $R$ (say on parallel links) on the lattice is, in this state, equal to the correlation function for finding two parallel dimers in a random distribution of classical dimers covering the lattice. For the case of the square lattice, Fisher and Stephenson (1963) solved this problem exactly (using Pfaffian methods), and found that this correlation function, $G(R)$, obeys a power law

$$
\begin{equation*}
G(R) \propto \frac{1}{R^{2}} \tag{9.10}
\end{equation*}
$$

The precise form of the correlation function is actually more complicated. In addition to the power law shown in Eq. (9.10), it depends also on the relative sublattices on which the dimers reside as well as on their relative orientation (Fisher and Stephenson, 1963; Youngblood et al., 1980). The same result essentially also holds for the honeycomb lattice. This result implies that the ground state at the

RK point of the QDM on the square lattice, the short-range RVB state, does not have long-range dimer order and it is not a VB crystal. However, it is not a liquid either, since the connected correlator does not decay exponentially with distance as it should in a liquid state. In fact, both on the square and on the honeycomb lattices the short-range RVB state is at a critical point between two VB crystals, which are dimer solids. Fisher and Stephenson also calculated the correlation function $C(R)$ of two holes (monomers) separated by a distance $R$ and found the result (again up to a dependence on the relative sublattice)

$$
\begin{equation*}
C(R)=\frac{\text { constant }}{R^{\eta}} \tag{9.11}
\end{equation*}
$$

with the anomalous dimension $\eta=\frac{1}{2}$. In the QDM this corresponds to the equaltime correlation function of an operator that creates two holes (or holons) separated by the same distance $R$. In the classical dimer model this corresponds to the correlator of two monomers (Rokhsar and Kivelson, 1988) (a detailed description was given by Papanikolaou and coworkers (Papanikolaou et al., 2007b)).

If the equal-time correlation functions of local operators have a power-law behavior (at long distances) we expect the excitation spectrum to be gapless, with the energy gap scaling as some power $z$ of the momentum of the excitation. In the case of QDMs at the RK point on the square lattice, where the dimer correlation has the power-law decay of Eq. (9.10), a variational calculation by Rokhsar and Kivelson (1988) (using a standard argument due to Feynman (1972)) of the excited state created by the local dimer-density operator predicts the value of the dynamical quantum critical exponent to be $z=2$, i.e. that the "resonon" excitation energy, $\omega_{\text {resonon }}(\vec{p})$, of a state with small momentum $\vec{p}$ (measured from $(\pi, \pi)$ ) scales as

$$
\begin{equation*}
\omega_{\text {resonon }}(\vec{p})=\text { constant } \times|\vec{p}|^{2} \tag{9.12}
\end{equation*}
$$

We will see below why this result is natural and probably exact. However, we expect that the existence of this gapless state is a special feature of the RK point and that this excitation should be unstable with respect to perturbations away from the RK point. We will also see below that the RK point (if it is actually accessible) is a quantum critical point with special properties.

### 9.3 Non-bipartite lattices: topological phases

The behavior is markedly different on a triangular lattice. Numerical simulations (Moessner and Sondhi, 2001b) and exact results (Fendley et al., 2002) (also obtained using Pfaffian methods) for the classical dimer model on the triangular lattice indicate instead that the (connected) dimer correlation function also does not exhibit long-range order but instead is now short-ranged, i.e. it decays exponentially with distance with a correlation length $\xi \sim a$, where $a$ is the lattice
spacing. Thus, the short-range RVB state describes a dimer liquid, a uniform state without any type of long-range order. As we will discuss below, this state is a topological fluid and hence a true spin-liquid state. Similarly, the (connected) monomer (hole) correlation function also decays exponentially at long distances with a finite (and quite short) correlation length.

In the same work, Fendley, Moessner, and Sondhi also investigated the behavior for an anisotropic lattice, namely a square lattice with extra links running along one of the directions of its diagonal bonds (say SW-NW), and assigned a separate fugacity $t$ for dimers on the diagonal bond. For $t=1$ this system is equivalent to the isotropic triangular lattice, while for $t=0$ it reduces to the square lattice. Using the same methods, they found that $t=0$ is indeed a critical point, and that for all $t>0$ the dimer system is in a liquid phase with a correlation length that diverges as the square lattice limit is approached $(t \rightarrow 0)$ as $\xi(t) \sim t^{-1}$.

On the other hand, since the RVB state on the triangular (and, hence, nonbipartite) lattice has a finite correlation length and the Hamiltonian is local, it is natural to expect that the excitation spectrum be gapped. This expectation is known to be correct in systems with a relativistic spectrum in which energy scales like the momentum (and hence these systems have a dynamical exponent $z=1$ ). It is believed to hold more generally, and it is believed to be rigorously correct for generic systems with local interactions. A theorem by Hastings and Koma (2006) proves that algebraically decaying correlators imply a gapless spectrum for local Hamiltonians. Since the energy gap is finite at the RK point, we expect that it will remain finite at least for some neighborhood of the RK point. Thus, the liquid state should describe a phase of the QDM on the triangular lattice.

The ground state on a bipartite lattice turns out to depend in subtle ways on the boundary conditions. For a system with open boundary conditions (essentially a disk or, equivalently, a sphere), the ground state is unique. However, for a system with periodic boundary conditions (a surface that has the topology of a torus) the ground state is four-fold degenerate. This degeneracy is not the result of any broken symmetry, since this state is translationally invariant and the correlation functions of all local operators are short-ranged. More importantly, the degeneracy depends only on the topology of the surface. In Section 9.6 we show that states with these properties are topological phases. This topological phase is known as a $\mathbb{Z}_{2}$ topological fluid.

### 9.4 Generalized quantum-dimer models

It is possible to construct generalized QDMs whose Hamiltonians are also the sum of local projection operators at their respective RK points (Ardonne et al., 2004; Castelnovo et al., 2004; Papanikolaou et al., 2007b). The configuration spaces (the

Hilbert spaces) of these models in some cases are dimer coverings of the lattice, and in others are arrows defined on links. The amplitudes described by these states always have the form of a product of local weights for a given configuration $C$ :

$$
\begin{equation*}
|\Psi\rangle=\sum_{\{C\}} w[C]|C\rangle \tag{9.13}
\end{equation*}
$$

where $w[C]$ is a product of amplitudes assigned to sites, links, plaquettes, etc., of the lattice. For example Papanikolaou et al. (2007b) and Castelnovo et al. (2004) considered a generalized QDM with an exact ground state at its "RK point" of the form of Eq. (9.13) with

$$
\begin{equation*}
w[C]=\prod_{p} e^{-\frac{u}{2} \Phi_{p}[C]} \tag{9.14}
\end{equation*}
$$

where $p$ spans the plaquettes of the square lattice, and $u$ is a parameter. Here $\Phi_{p}[C]=1$ if configuration $C$ has a pair of parallel dimers (vertical or horizontal) on plaquette $p$, and $\Phi_{p}[C]=0$ otherwise. Since this state depends on the arbitrary parameter $u$, the RK point is actually a line. Once again, the norm of this state is a classical partition function, a sum over dimer configurations with a Gibbs weight $|w[C]|^{2}$,

$$
\begin{equation*}
Z=\sum_{\{C\}}|w[C]|^{2} \sim \sum_{\{C\}} e^{-u \sum_{p} \Phi_{p}[C]}=\sum_{\{C\}} e^{-u N_{\|}[C]} \tag{9.15}
\end{equation*}
$$

where $N_{\|}$is the number of plaquettes in configuration $C$ with parallel dimers. Formally, this is a classical dimer problem at "finite temperature" $T=u^{-1}$. This classical system remains critical from the dimer-model limit at $u=1$ up to a critical value $u_{\mathrm{c}}$, where it has a Kosterlitz-Thouless transition. For $u>u_{\mathrm{c}}$ this system has columnar order (Alet et al., 2005; Papanikolaou et al., 2007b). Generalizations of the QDMs whose configurations are loops and nets defined on various lattices have been discussed in the context of topological phases (Freedman et al., 2004; Fendley and Fradkin, 2005; Levin and Wen, 2005; Fidkowski et al., 2009) and will be discussed in a later section.

How much do these results change if instead of dimer configurations we consider a short-range RVB state? This is important since, as we noted, valence-bond states are over-complete and hence do not constitute an orthonormal basis. This problem has been investigated numerically by Monte Carlo simulations (Albuquerque and Alet, 2010; Tang et al., 2011b) for the case of the square lattice. The results of the Monte Carlo simulations show that the correlation function $G_{\mathrm{RVB}}(R)$ of valence-bond densities obeys (on the square lattice) power-law correlations as does $G(R)$, but with an exponent $\alpha_{\mathrm{RVB}} \simeq 1.15$ instead of $\alpha=2$ for the dimer states (see Eq. (9.10)). In a later section we will see that $\alpha=2$ is a consequence of the conservation law of dimer models. Thus, although the RK-type dimer states
and the short-range RVB state have similar power-law correlations, they describe somewhat different physics.

### 9.5 Quantum dimers and gauge theories

We wish to consider the full quantum dynamics of the QDM. We will find it most profitable to map this problem into a lattice gauge theory (Kogut, 1979). In a sense this mapping is suggested by the RVB mean-field decoupling that we have been using all along. Baskaran and Anderson (1988) first introduced a mapping of the static interactions of the RVB mean-field theory to a gauge theory. Here I am following the work by Kivelson and me (Fradkin, 1990b; Fradkin and Kivelson, 1990).

Let us begin by defining an enlarged Hilbert space on the links of the lattice. Let $\left\{l_{j}(\vec{x})\right\}$ be a set of integer-valued variables defined on the links $\left\{\left(\vec{x}, \vec{x}+e_{j}\right)\right\}$ of the lattice. The states $\left|\left\{l_{j}(\vec{x})\right\}\right\rangle$ span the unrestricted Hilbert space. The angularmomentum operators $L_{j}(\vec{x})$ have the integers $l_{j}(\vec{x})$ as their eigenvalues and $\left|\left\{l_{j}(\vec{x})\right\}\right\rangle$ as their eigenstates. If we wish to restrict this Hilbert space to the subspace in which $l_{j}=0,1$, we can do so by assigning an infinite energy to all unwanted states. Thus, let us define a dimer contribution, or kinetic-energy term, which enforces the restriction and is nothing other than a hard-core condition. We can write $H_{\text {dimer }}$ in the form

$$
\begin{equation*}
H_{\text {dimer }}=\frac{1}{2 k} \sum_{\vec{x}, j}\left[\left(L_{j}(\vec{x})-\frac{1}{2}\right)^{2}-\frac{1}{4}\right] \tag{9.16}
\end{equation*}
$$

For any value of the coupling constant $k$, the configurations with $l_{j}=0,1$ have exactly zero energy, while any other state will have energy growing like $1 / k$ as $k \rightarrow 0$.

We need two terms: one for resonance and the other for the diagonal terms. In order to discuss resonance we need to introduce the variable $a_{j}(\vec{x})$ at each link, which should be the eigenvalue of the operator $a_{j}(\vec{x})$ canonically conjugate to $L_{j}(\vec{x})$, i.e.

$$
\begin{equation*}
\left[a_{j}(\vec{x}), L_{j^{\prime}}\left(\vec{x}^{\prime}\right)\right]=i \delta_{j j^{\prime}} \delta_{\vec{x}, \vec{x}^{\prime}} \tag{9.17}
\end{equation*}
$$

Since the spectrum of $L_{j}(\vec{x})$ is the integers $l_{j}(\vec{x}), a_{j}(\vec{x})$ should be an angle

$$
\begin{equation*}
0 \leq a_{j}(\vec{x})<2 \pi \tag{9.18}
\end{equation*}
$$

and the Hilbert space is the space of the periodic functions of $a_{j}(\vec{x})$ with period $2 \pi$, independently at each link. Using the commutation relations Eq. (9.17), we
see that the operator $e^{i m_{j} a_{j}}$ acts like a ladder operator with step size $m_{j}$, where $m_{j}$ is an integer. Indeed, we can write for any site

$$
\begin{equation*}
L_{j} e^{i m_{j} a_{j}}\left|l_{j}\right\rangle=e^{i m_{j} a_{j}}\left(e^{-i m_{j} a_{j}} L_{j} e^{i m_{j} a_{j}}\right)\left|l_{j}\right\rangle \tag{9.19}
\end{equation*}
$$

The commutation relations tell us that the operator within brackets in Eq. (9.19) is the shifted operator

$$
\begin{equation*}
e^{-i m_{j} a_{j}} L_{j} e^{i m_{j} a_{j}}=L_{j}+m_{j} \tag{9.20}
\end{equation*}
$$

Thus, we get

$$
\begin{equation*}
L_{j} e^{i m_{j} a_{j}}\left|l_{j}\right\rangle=e^{i m_{j} a_{j}}\left(l_{j}+m_{j}\right)\left|l_{j}\right\rangle=\left(l_{j}+m_{j}\right) e^{i m_{j} a_{j}}\left|l_{j}\right\rangle \tag{9.21}
\end{equation*}
$$

and we can identify

$$
\begin{equation*}
e^{i m_{j} a_{j}}\left|l_{j}\right\rangle=\left|l_{j}+m_{j}\right\rangle \tag{9.22}
\end{equation*}
$$

The resonance term should remove from a plaquette two parallel dimers and replace them by another pair of parallel dimers but in the orthogonal direction (Fig. 9.1). We can accomplish this by writing, in terms of raising and lowering operators, the term

$$
\begin{align*}
H_{\mathrm{res}}= & \bar{J} \sum_{\vec{x}}\left(e^{i\left[a_{1}(\vec{x})+a_{1}\left(\vec{x}+e_{2}\right)-a_{2}(\vec{x})-a_{2}\left(\vec{x}+e_{1}\right)\right]}\right. \\
& \left.+e^{i\left[a_{2}(\vec{x})+a_{2}\left(\vec{x}+e_{1}\right)-a_{1}(\vec{x})-a_{1}\left(\vec{x}+e_{2}\right)\right]}\right) \tag{9.23}
\end{align*}
$$

The diagonal terms are now

$$
\begin{equation*}
H_{\text {diag }}=V \sum_{\vec{x}}\left(L_{1}(\vec{x}) L_{1}\left(\vec{x}+e_{2}\right)+L_{2}(\vec{x}) L_{2}\left(\vec{x}+e_{1}\right)\right) \tag{9.24}
\end{equation*}
$$

and the constraint is

$$
\begin{equation*}
Q(\vec{x})=L_{1}(\vec{x})+L_{1}\left(\vec{x}-e_{1}\right)+L_{2}(\vec{x})+L_{2}\left(\vec{x}-e_{2}\right)-1=0 \tag{9.25}
\end{equation*}
$$

This equation looks peculiar since the left-hand side is an operator and the righthand side is a number. The meaning of this equation is that the allowed states of the Hilbert states, which I will call |Phys〉, satisfy

$$
\begin{equation*}
Q(\vec{x}) \mid \text { Phys }\rangle=0 \tag{9.26}
\end{equation*}
$$

For this condition to be consistent, $Q(\vec{x})$ should be diagonalizable simultaneously with the total Hamiltonian $H$, i.e.

$$
\begin{equation*}
[Q(\vec{x}), H]=0 \tag{9.27}
\end{equation*}
$$

where

$$
\begin{equation*}
H=H_{\mathrm{dimer}}+H_{\mathrm{res}}+H_{\mathrm{diag}} \tag{9.28}
\end{equation*}
$$

This is indeed the case, since $Q(\vec{x})$ simply counts all the dimers touching a given site and this number is a constant of motion.

The operator $Q(\vec{x})$ generates a set of local time-independent transformations that leave the physical states invariant,

$$
\begin{equation*}
\left.\left.e^{i \sum_{\vec{x}} \alpha(\vec{x}) Q(\vec{x})} \mid \text { Phys }\right\rangle=\mid \text { Phys }\right\rangle \tag{9.29}
\end{equation*}
$$

which therefore leave $H$ unchanged. Since the spectra of the operators $\{Q(\vec{x})\}$ are the integers, the gauge transformations are parametrized by phases, periodic variables $\{\alpha(\vec{x})\}$ defined on the interval $[0,2 \pi)$.

Thus we discover that $H$ has a local gauge symmetry and $Q$ is the generator of local gauge transformations. The constraint equation is simply a version of Gauss's law. This local symmetry simply reflects the fact that we are free to change the phases of the valence bonds on each site independently. In this language, the wave functions which are being considered must have the form

$$
\begin{equation*}
|\Psi\rangle=\sum_{\{c\}} A(c) e^{i \Phi(c)}|c\rangle \tag{9.30}
\end{equation*}
$$

where $\{c\}$ is a set of (linearly independent) VB states (i.e. dimer coverings), $A(c)$ is a real amplitude for configuration $c$, and $\Phi(c)$ is the phase. The phase $\Phi(c)$ depends on the configuration and we have chosen to write $\Phi(c)$ in the form of a sum over links,

$$
\begin{equation*}
\Phi(c)=\sum_{\vec{x}, j} a_{j}(\vec{x}) \tag{9.31}
\end{equation*}
$$

States of the form of Eq. (9.30) are coherent states parametrized by the variables $a_{j}(\vec{x})$.

We can write these formulas in a much more transparent and familiar way, by staggering the configuration $\left\{a_{j}(\vec{x})\right\}$. Clearly this can be done consistently only for a bipartite lattice. Let us define the staggered gauge field $A_{j}(\vec{x})$ and "electric fields" $E_{j}(\vec{x})$ by

$$
\begin{align*}
& A_{j}(\vec{x})=e^{i \vec{Q}_{0} \cdot \vec{x}} a_{j}(\vec{x})  \tag{9.32}\\
& E_{j}(\vec{x})=e^{i \vec{Q}_{0} \cdot \vec{x}} L_{j}(\vec{x}) \tag{9.33}
\end{align*}
$$

with $\vec{Q}_{0}=(\pi, \pi)$. It should be stressed that these fields do not represent the electromagnetic fields. With these definitions, we can rewrite the constraints of Eq. (9.26) in the form

$$
\begin{equation*}
\left.\left[\Delta_{j} E_{j}(\vec{x})-\rho(\vec{x})\right] \mid \text { Phys }\right\rangle=0 \tag{9.34}
\end{equation*}
$$

where $\Delta_{j}$ is the lattice divergence

$$
\begin{equation*}
\Delta_{j} E_{j}(\vec{x}) \equiv E_{1}(\vec{x})-E_{1}\left(\vec{x}-e_{1}\right)+E_{2}(\vec{x})-E_{2}\left(\vec{x}-e_{2}\right) \tag{9.35}
\end{equation*}
$$

and the density $\rho(\vec{x})$ is

$$
\begin{equation*}
\rho(\vec{x})=e^{i \vec{Q}_{0} \cdot \vec{x}} \tag{9.36}
\end{equation*}
$$

Equation (9.34) now has the standard form of Gauss's law. Note that $\rho(\vec{x})$ represents a background staggered charge density that equals $+1(-1)$ on red (black) sites, and enforces the condition that each site should belong to one and only one dimer. In the presence of holes, $\rho(\vec{x})$ will vanish on sites occupied by holes.

In this formulation the Hamiltonian reads

$$
\begin{align*}
H= & \frac{1}{2 k} \sum_{\vec{x}, j}\left(\left[E_{j}(\vec{x})-\alpha_{j}(\vec{x})\right]^{2}-\alpha_{j}^{2}(\vec{x})\right)+2 \bar{J} \sum_{\vec{x}} \cos \left(\sum_{\text {plaquette }} A_{j}(\vec{x})\right) \\
& -V \sum_{\vec{x}}\left(E_{1}(\vec{x}) E_{1}\left(\vec{x}+e_{2}\right)+E_{2}(\vec{x}) E_{2}\left(\vec{x}+e_{2}\right)\right) \tag{9.37}
\end{align*}
$$

where $\sum_{\text {plaquette }} A_{j}(\vec{x})$ stands for the oriented sum of staggered vector potentials $A_{j}(\vec{x})$ around the elementary plaquette labeled by $\vec{x}$ (its southwest corner):

$$
\begin{align*}
\sum_{\text {plaquette }} A_{j}(\vec{x}) & \equiv e^{i \vec{Q}_{0} \cdot \vec{x}}\left(a_{1}(\vec{x})+a_{1}\left(\vec{x}+e_{2}\right)-a_{2}(\vec{x})-a_{2}\left(\vec{x}+e_{1}\right)\right) \\
& =A_{1}(\vec{x})-A_{1}\left(\vec{x}+e_{2}\right)-A_{2}(\vec{x})+A_{2}\left(\vec{x}+e_{1}\right) \\
& =\Delta_{2} A_{1}(\vec{x})-\Delta_{1} A_{2}(\vec{x}) \tag{9.38}
\end{align*}
$$

and is interpreted as a plaquette flux, and $\alpha_{j}(\vec{x})$ is

$$
\begin{equation*}
\alpha_{j}(\vec{x})=\frac{1}{2} e^{i \vec{Q}_{0} \cdot \vec{x}} \tag{9.39}
\end{equation*}
$$

By expanding the square in the first term in Eq. (9.37), and using Eq. (9.39), we can write the first term of the Hamiltonian in the form

$$
\begin{equation*}
\frac{1}{2 k}\left(\sum_{\vec{x}, j} E_{j}^{2}(\vec{x})-\frac{L^{2}}{2}\right) \tag{9.40}
\end{equation*}
$$

where $L$ is the linear size of the square lattice.
We can take all these considerations into account by writing the full Hamiltonian in the form

$$
\begin{align*}
H= & \frac{1}{2 k}\left(\sum_{\vec{x}, j} E_{j}^{2}(\vec{x})-\frac{L^{2}}{2}\right)+2 \bar{J} \sum_{\vec{x}} \cos \left(\sum_{\text {plaquette }} A_{j}(\vec{x})\right) \\
& +\frac{V}{2} \sum_{\vec{x}}\left(\left(\Delta_{1} E_{2}(\vec{x})\right)^{2}+\left(\Delta_{2} E_{1}(\vec{x})\right)^{2}\right)-\frac{V}{2} L^{2} \tag{9.41}
\end{align*}
$$

and considering the limit $k \rightarrow 0$. The states are restricted by demanding that Gauss's law, Eq. (9.34), be exactly satisfied.

### 9.6 The Ising gauge theory

In this section we will discuss results from lattice gauge theory that are relevant to understanding the problem at hand. We will be interested in the spectrum of states and of allowed observables in the different phases that these theories have. Although the problems we are interested in are, as we saw, gauge theories, we will typically be interested not in the vacuum sector but, as we saw in the last section, in sectors with lots of background charges. This sector, which is sometimes called the "odd" gauge-theory sector (Moessner et al., 2001), has distinct properties. Here we will focus on the standard vacuum sector.

The simplest example of a gauge theory is the Ising gauge theory, which, as we will see, is relevant to the problems we discuss here. This is a gauge theory with a discrete gauge group $\mathbb{Z}_{2}$. In this theory the degrees of freedom are Ising variables, the diagonal Pauli matrices $\sigma_{j}^{z}(\vec{x})$, with $j=1,2$. The Hamiltonian for the Ising gauge theory (on a square lattice) is written in terms of the "vector potentials" $\left\{\sigma_{j}^{z}(\vec{x})\right\}$ (defined on the links of the square lattice) and of the "electric fields," the off-diagonal Pauli matrices $\left\{\sigma_{j}^{x}(\vec{x})\right\}$. The Hamiltonian is (Fradkin and Susskind, 1978)

$$
\begin{equation*}
H=-g \sum_{\vec{x}, j} \sigma_{j}^{x}(\vec{x})-\frac{1}{g} \sum_{\vec{x}} \sigma_{1}^{z}(\vec{x}) \sigma_{2}^{z}\left(\vec{x}+e_{1}\right) \sigma_{1}^{z}\left(\vec{x}+e_{2}\right) \sigma_{2}^{z}(\vec{x}) \tag{9.42}
\end{equation*}
$$

In what follows we will refer to the first term in the Hamiltonian as the kinetic energy and to the second term as the potential energy. We will also refer to the first term as the "electric-field" term and to the second as the magnetic (or flip) term.

The gauge-invariant states of this theory satisfy the "Gauss-law" condition, which here takes the form

$$
\begin{equation*}
\left.\left.\sigma_{1}^{x}(\vec{x}) \sigma_{1}^{x}\left(\vec{x}-e_{1}\right) \sigma_{2}^{x}(\vec{x}) \sigma_{2}^{x}\left(\vec{x}-e_{2}\right) \mid \text { Phys }\right\rangle=\mid \text { Phys }\right\rangle \tag{9.43}
\end{equation*}
$$

Indeed, the Hamiltonian of Eq. (9.42) is invariant under the local gauge transformations generated by the operators

$$
\begin{equation*}
Q(\vec{x})=\sigma_{1}^{x}(\vec{x}) \sigma_{1}^{x}\left(\vec{x}-e_{1}\right) \sigma_{2}^{x}(\vec{x}) \sigma_{2}^{x}\left(\vec{x}-e_{2}\right) \tag{9.44}
\end{equation*}
$$

For all $\vec{x}$ these local operators commute with each other, $[Q(\vec{x}), Q(\vec{y})]=0$, and with the Hamiltonian, $[Q(\vec{x}), H]=0$. Hence, for all $\vec{x}$, the eigenstates of the Hamiltonian are also eigenstates of the generators $\{Q(\vec{x})\}$ and satisfy the local constraint of Eq. (9.43).

At every point $\vec{x}$ in space we can define two operators, the identity $I$ and $Q$, where we see that $Q^{2}=I$. Hence the local symmetry group of this problem is the discrete group $\mathbb{Z}_{2}$, the permutation group of two elements. The main (and important) difference between this theory and the standard Ising model in a transverse field is that this theory has a local $\mathbb{Z}_{2}$ symmetry, whereas the Ising model has a global $\mathbb{Z}_{2}$ symmetry.

The most important and central result that we will need is known as Elitzur's theorem (already discussed in Section 8.5), which states that local (gauge) symmetries cannot be spontaneously broken (Elitzur, 1975). A key consequence of this theorem is the fact that only locally gauge-invariant operators can have a nonvanishing expectation value. Thus, in contrast to what happens in systems with global symmetries (such as the antiferromagnets discussed in earlier chapters), the phase diagrams of gauge theories are classified in terms of the behavior of their gauge-invariant operators and the associated spectrum of gauge-invariant states. In particular, except in the trivial case of Maxwell's electrodynamics, a local order parameter does not generally exist (Fradkin and Shenker, 1979).

The gauge-invariant observables of this theory are as follows.

1. The Wilson loop operator on the closed loop $\Gamma$,

$$
\begin{equation*}
W_{\Gamma}=\prod_{(\vec{x}, j) \in \Gamma} \sigma_{j}^{z}(\vec{x}) \tag{9.45}
\end{equation*}
$$

where $\{(\vec{x}, j)\}$ (with $j=1,2$ ) are the links of the loop $\Gamma$. The plaquette operator of the Hamiltonian is a particular case of a Wilson loop.
2. The electric-field operator on link $(\vec{x}, j), \sigma_{j}^{x}(\vec{x})$.
3. An ("electric") charge created at point $\vec{x}$ amounts to requiring that the physical states have $Q(\vec{x})=-1$, where $Q(\vec{x})$ is defined by Eq. (9.44). Owing to the $\mathbb{Z}_{2}$ symmetry, only the parity of the charge is well defined.
4. In a system with periodic boundary conditions (i.e. on a torus) the magnetic 't Hooft loop operator ('t Hooft, 1979) $\tilde{W}_{\tilde{\Gamma}}$ along a non-contractible loop $\tilde{\Gamma}$ on the dual lattice of the torus (shown in Fig. 9.2(a)) is

$$
\begin{equation*}
\tilde{W}_{\tilde{\Gamma}}=\prod_{(\vec{x}, j) \in \tilde{\Gamma}} \sigma_{j}^{x}(\vec{x}) \tag{9.46}
\end{equation*}
$$

This operator represents the product of $\sigma^{x}$ operators of the links of the lattice threaded by the loop $\tilde{\Gamma}$. By gauge invariance, $Q(\vec{x})=1$ everywhere, the actual path is unimportant; only the fact that it is globally non-contractible matters.
5. The magnetic charge operator $\tau^{z}(\vec{r})$

$$
\begin{equation*}
\tau^{z}(\vec{r})=\prod_{(\vec{x}, j) \text { pierced by } \tilde{\gamma}(\vec{r})} \sigma_{j}^{x}(\vec{x}) \tag{9.47}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-318.jpg?height=440&width=814&top_left_y=203&top_left_x=448)

Figure 9.2 (a) A magnetic ('t Hooft) loop on a non-contractible loop $\tilde{\Gamma}$ of the dual lattice; the dark links pierced by the loop represent a product of $\sigma^{x}$ operators on each link. (b) A Dirac string of $\sigma^{x}$ operators on the open path $\tilde{\gamma}$ of the dual lattice creates magnetic charge (a "vison") at the dual site $\vec{r}$.

Here too, in the gauge-invariant sector, with $Q(\vec{x})=1$ everywhere, this operator depends only on the location $\vec{r}$ of the dual lattice and it is independent of the shape of the Dirac string, the rest of the path $\tilde{\gamma}(\vec{r})$ with its endpoint at $\vec{r}$.

It is straightforward to see that the magnetic-charge operator $\tau^{z}(\vec{r})$ on the dual site $\vec{r}$ (the center of a plaquette) anti-commutes with the plaquette Wilson loop operator $W_{p}(\vec{r})$,

$$
\begin{equation*}
\left\{W_{p}(\vec{r}), \tau^{z}(\vec{r})\right\}=0 \tag{9.48}
\end{equation*}
$$

Since $W_{p}(\vec{r})^{2}=1$ and $\tau_{z}(\vec{r})^{2}=1$, we can identify the plaquette Wilson loop operators with the Pauli matrices $W_{p}(\vec{r})=\tau^{x}(\vec{r})$ defined on the dual sites. Similarly, the operator $\sigma_{j}^{x}(\vec{x})$ on a link of the direct lattice is easily seen to be given by

$$
\begin{equation*}
\sigma_{j}^{x}(\vec{x})=\tau^{z}(\vec{r}) \tau^{z}\left(\vec{r}+e_{j}\right) \tag{9.49}
\end{equation*}
$$

which automatically satisfies the condition $Q(\vec{x})=1$ everywhere.
It is now easy to see that, in terms of the operators $\left\{\tau^{z}(\vec{r})\right\}$ and $\left\{\tau^{x}(\vec{r})\right\}$ defined on the dual lattice, the Hamiltonian of the gauge theory becomes

$$
\begin{equation*}
H=-g \sum_{\vec{r}, j} \tau^{z}(\vec{r}) \tau^{z}\left(\vec{r}+e_{j}\right)-\frac{1}{g} \sum_{\vec{r}} \tau^{x}(\vec{r}) \tag{9.50}
\end{equation*}
$$

which we recognize as the Hamiltonian of the Ising model in a transverse field (or quantum Ising model) on a 2D square lattice. What we have done is to prove that the transverse-field Ising model and the Ising gauge theory in $(2+1)$ dimensions are dual to each other. In particular, the operator $\tau^{z}$ plays the role of the order parameter of the transverse-field Ising model and of the magnetic-charge (or monopole) operator in the gauge theory (Fradkin and Susskind, 1978; Kogut, 1979).

As discussed in Chapter 5, the Ising model in a transverse field in $d$ space dimensions is equivalent to to the classical Ising model in $(d+1)$ dimensions (Fradkin and Susskind, 1978). This relationship follows from the fact that the partition function of the classical model in $(d+1)$ dimensions (with periodic boundary conditions) can be written as

$$
\begin{equation*}
Z=\operatorname{tr} T^{N} \tag{9.51}
\end{equation*}
$$

where $T$ is the transfer matrix and $N$ is the number of rows (or hyperplanes) along the discrete "imaginary-time" direction. For the case of the Ising model (in all dimensions) the transfer matrix $T$ has the form of a product of two matrices, each involving the kinetic- and potential-energy terms of the Hamiltonian of Eq. (9.50). A well-defined sequence of approximations (equivalent to taking the time continuum limit) maps the classical problem in $(d+1)$ dimensions to the quantum Hamiltonian in $d$ dimensions (Fradkin and Susskind, 1978).

For a system that satisfies the property of reflection positivity, that is that its correlation functions are real, positive, and invariant under reflection across a hyperplane, the transfer matrix can always be constructed to be a hermitian matrix. This relation is, of course, the same as that between the path-integral and Hamiltonian formulations of quantum field theory, with reflection positivity being the Euclidean version of unitarity. It holds for many problems of interest, not just the Ising model, and it holds in all dimensions. It also holds for the gauge theory. In particular, the dual of the classical Ising model in three dimensions is a 3D theory with a local $\mathbb{Z}_{2}$ invariance, the Ising gauge theory (Wegner, 1971; Balian et al., 1975). In systems that are isotropic, as classical systems in $(d+1)$ dimensions (as are the Ising model and gauge theory), the direction chosen to be the "imaginary-time" direction (i.e. the direction of transfer) is arbitrary. From this it follows that at their critical points these systems are equivalent to Lorentz-invariant field theories. Hence, they have an associated quantum-dynamical critical exponent of $z=1$.

The $\mathbb{Z}_{2}$ gauge theory has two phases: (a) a weak-coupling, $g<g_{\mathrm{c}}$, deconfined phase; and (b) a strong-coupling, $g>g_{c}$, confined phase.

### 9.7 The $\mathbb{Z}_{2}$ confining phase

Let us now turn to the strong-coupling phase, which we will find is confining. Although we will focus our discussion on the case of two space dimensions, the results apply to higher dimensions as well. In the strong-coupling regime, the spectrum can be determined using the strong-coupling expansion. In this expansion, which is conceptually a Brillouin-Wigner expansion similar to the one we used to derive the Heisenberg Hamiltonian from the Hubbard model in Chapter 2, the ground state is approximately an eigenstate of the electric-field operators $\sigma_{j}^{x}(\vec{x})$. To
leading order in an expansion in powers in $1 / g$, the ground state $|G\rangle$ is an eigenstate of the kinetic-energy term, and hence of the link "electric-field" operators $\sigma_{j}^{x}(x)$ :

$$
\begin{equation*}
|G\rangle_{g \rightarrow \infty}=\prod_{(\vec{x}, j)}\left|\sigma_{j}^{x}(\vec{x})=1\right\rangle \tag{9.52}
\end{equation*}
$$

Thus, in this state

$$
\begin{equation*}
\sigma_{j}^{x}(\vec{x})|G\rangle_{g \rightarrow \infty}=+|G\rangle_{g \rightarrow \infty} \tag{9.53}
\end{equation*}
$$

It is also easy to see that there is a finite energy gap. Indeed, due to the Gauss-law condition, Eq. (9.43), the allowed states must have an even number of links sharing site $\vec{x}$ with $\sigma^{x}=-1$ on those links. The allowed states which obey this constraint are closed loops on the lattice, i.e. the set of links on which $\sigma^{x}=-1$. Hence, the spectrum of states in the strong-coupling regime consists of electric loops. Since the energy cost over the ground state of each excited link is $2 g$, the total energy of an allowed excited state consisting of loops of length $\ell$ is $\Delta E_{\text {loop }}=2 g \ell$. Thus, the lowest excited state is the elementary loop or plaquette state, a state created by the magnetic (flip) term, and consists of electric fields being excited on the perimeter of the elementary plaquette. The energy of the plaquette state is $\Delta E_{\text {plaquette }}=8 g$.

Hence, the spectrum of excited states has a finite (and large) energy gap in the strong-coupling limit. It is easy to show that for finite but large $g$ this state is stable in the strong-coupling expansion, and that it is separated from the first excited state by a finite energy gap up to some critical coupling $g_{c}$. Indeed, the general form of the ground state in the strong-coupling phase is a superposition of states with loops of varying length, with the contribution of long loops to the amplitude becoming exponentially small as the length of loop increases. Using this line of argument it is possible, with a moderate amount of work, to show that the strongcoupling expansion has a finite radius of convergence, with the critical coupling $g_{c}$ limiting the convergence of the expansion (Kogut, 1984). Clearly, as the quantum phase transition at $g_{\mathrm{c}}$ is approached, the loops contributing to the ground state progressively grow in length (and number). If the transition at $g_{\mathrm{c}}$ is continuous, their size diverges as $g \rightarrow g_{c}$, and the electric loops proliferate. At the same time, the energy gap $\Delta E_{\text {plaquete }}(g)$ to the lowest excited state, which as we saw is large and of the order of $8 g$ in the strong-coupling regime, becomes smaller as $g \rightarrow g_{\text {c }}$ and vanishes with a universal critical exponent

$$
\begin{equation*}
\Delta E_{\text {plaquette }}(g)=\text { constant } \times\left|g-g_{\mathrm{c}}\right|^{\Delta} \tag{9.54}
\end{equation*}
$$

The critical coupling and the gap exponent have been calculated numerically using quantum Monte Carlo methods (Rieger and Kawashima, 1999) and RG methods (Evenbly and Vidal, 2009) (for the dual Ising model in a transverse field) with
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-321.jpg?height=512&width=517&top_left_y=200&top_left_x=587)

Figure 9.3 The ground state with two charges at $\vec{x}$ and $\vec{y}$ in the confinement phase in which the energy grows linearly with separation; $\sigma^{x}=-1$ on each link of the path $\gamma(\vec{x}, \vec{y})$.
the estimates $1 / g_{c}^{2}=3.044$ and $\Delta=0.622$, which are consistent with a quantum critical point with a Lorentz-invariant value of the dynamic critical exponent $z=1$, and a correlation-length exponent $v=\Delta$.

To see that this phase is confining, we will simply compare the ground-state energy of the vacuum state (without electric charges) with the ground state in the sector with a charge located at $\vec{x}$ and another at $\vec{y},|G ; \vec{x}, \vec{y}\rangle$, i.e. $Q=-1$ at $\vec{x}$ and at $\vec{y}$, and $Q=+1$ everywhere else. The ground state of this sector is defined, to leading order, by $\sigma_{j}^{x}=1$ on every link of the lattice except along the path $\gamma(\vec{x}, \vec{y})$ (shown in Fig. 9.3) stretching from $\vec{x}$ to $\vec{y}$ on whose links $\sigma_{j}^{x}=-1$. Thus, in this sector the ground state has a string along the shortest path $\gamma(\vec{x}, \vec{y})$ between sites $\vec{x}$ and $\vec{y}$. The energy difference between the ground state with the two charges and the vacuum state (the ground state without charges) is $\Delta E=2 g R+O(1 / g)$, where $R$ is the distance (in lattice units) between $\vec{x}$ and $\vec{y}$, which grows linearly with separation. From the convergence of the strong-coupling expansion we expect the same behavior throughout this phase,

$$
\begin{equation*}
\Delta E(R)=\sigma R \tag{9.55}
\end{equation*}
$$

where $\sigma=2 g+O(1 / g)$ is the "string tension." Hence in this phase the energy needed to separate the sources at infinite distance is infinite. Hence, this phase is said to be confining. The string tension has units of energy per unit length. The characteristic energy scale of this system is the energy gap, which scales as ( $g-$ $\left.g_{c}\right)^{\Delta}$, and the characteristic length scale is the correlation length (or confinement scale) $\xi(g)$, which at the quantum phase transition scales as

$$
\begin{equation*}
\xi(g) \sim\left(g-g_{c}\right)^{-v} \tag{9.56}
\end{equation*}
$$

Therefore, the string tension $\sigma(g)$ must scale as

$$
\begin{equation*}
\sigma(g) \sim\left(g-g_{c}\right)^{2 v} \tag{9.57}
\end{equation*}
$$

(since $\Delta=z v=v$ in this case) near the quantum phase transition. Hence, as the quantum critical point at $g_{\mathrm{c}}$ is approached the string tension vanishes.

Similarly, in the strong-coupling phase the Wilson loop operator $W_{\Gamma}$ obeys an area law. Indeed, the action of the Wilson loop on the strong-coupling state $|G\rangle_{g \rightarrow \infty}$ yields an orthogonal state, and hence $\langle G| W_{\Gamma}|G\rangle_{g \rightarrow \infty}=0$. The lowest order in perturbation theory (in powers of $1 / g^{2}$ ) in which these states mix is $n$, which is the number of plaquettes enclosed by the loop $\Gamma$, i.e. the area $A[\Gamma]=n$ of the region inside $\Gamma$. Hence the leading non-vanishing contribution to the expectation value of the Wilson loop operator is

$$
\begin{equation*}
\langle G| W_{\Gamma}|G\rangle=\text { constant } \times\left(\frac{1}{g^{2}}\right)^{n}+\cdots=\text { constant } \times e^{-\mu(g) A[\Gamma]} \tag{9.58}
\end{equation*}
$$

with $\mu(g)=\ln \left(g^{2}\right)+O\left(1 / g^{2}\right)$. The quantity $\mu(g)$ is related to the string tension $\sigma(g)$ and also vanishes as $g \rightarrow g_{c}$ with the same exponent $2 v$.

The duality transformation offers an alternative and intuitive picture of the confining phase. In the dual picture, the strong-coupling phase maps onto the ordered phase of the Ising model, which is the weak-coupling phase of this model. In this phase, the ground-state expectation value of the magnetic-charge (or monopole) operator maps onto the expectation value of the order parameter of the (dual) Ising model, the local magnetization, which in this phase is finite. Hence, in the strong-coupling phase of the gauge theory we find that the magnetic-charge operator has an expectation value of order unity and vanishes as the critical coupling $g_{\mathrm{c}}$ is approached with an exponent

$$
\begin{equation*}
\langle G| \tau^{z}(\vec{r})|G\rangle=\text { constant } \times\left(g-g_{c}\right)^{\beta} \tag{9.59}
\end{equation*}
$$

with $\beta=0.326$ (Rieger and Kawashima, 1999; Evenbly and Vidal, 2009).
We can then picture the confining phase as a condensate of magnetic charges and regard the magnetic-charge operator as a disorder operator, an operator that has an expectation value in the disordered (strong-coupling) phase of the theory. This picture of a quantum disordered phase as a condensate of a disorder operator goes back to the work of Kadanoff and Ceva in the 2D classical Ising model (Kadanoff and Ceva, 1971) and to the work of Susskind and myself (Fradkin and Susskind, 1978) in gauge theory. We have already encountered an analogous disorder operator in the kink operator of the quantum disordered phase of the 1D Ising model in a transverse field, as discussed in Chapter 5. Moreover, in the dual-Ising-model picture, the string tension corresponds to changing the sign of the Ising coupling constant from ferromagnetic to antiferromagnetic on all the bonds
of the dual theory pierced by the path of Fig. 9.3. In the ordered phase of the dual Ising model this is equivalent to a defect favoring a fractional domain wall (of length $R$ ) along that path. In the ordered phase of the Ising model this defect does indeed have an energy cost that is linear in the length of the wall, as in Eq. (9.55).

### 9.8 The Ising deconfining phase: the $\mathbb{Z}_{2}$ topological fluid

Let us now turn to the weak-coupling phase. As with the strong-coupling phase, we will begin with the extreme weak-coupling limit, $g \rightarrow 0$ in this case, and construct the ground state and the spectrum in this regime. After that we will show (or rather argue) that there is a convergent weak-coupling expansion, which implies that the ground state and spectrum found in the $g \rightarrow 0$ limit are stable.

At $g=0$ the eigenstates of the Hamiltonian are eigenstates of the magnetic (flip) operator. The ground state at $g=0$ is in the sector in which all the plaquette operators are equal to one on all the plaquettes of the lattice (i.e. there is no flux). Excited states are created by the monopole (or vison)-creation operator $\tau^{z}(\vec{r})$, which flips the state of the plaquette centered at $\vec{r}$.

In this limit, we can choose the states to be in the representation of the eigenstates of the link operators $\sigma_{j}^{z}(\vec{x})$. This is the analog of the standard representation of the quantum states of quantum electrodynamics in terms of configurations of vector potentials. Since the vector potentials, here represented by the operators $\left\{\sigma_{j}^{z}(\vec{x})\right\}$, are not gauge-invariant (they do not commute with the generators of gauge transformations $\{Q(\vec{x})\}$ ), this representation requires that a gauge be fixed. For a system on a disk (or rectangle) with free boundary conditions, a suitable (but certainly not unique) gauge-fixing condition is to impose that the states satisfy the axial gauge condition $\sigma_{1}^{z}(\vec{x})=1$ on all links in the $x_{1}$ direction. In this gauge, a state is fully specified by giving the states of the $\sigma_{2}^{z}(\vec{x})$ operators on the links in the $x_{2}$ direction. Thus, in the axial gauge the ground state at $g=0$ is simply

$$
\begin{equation*}
|G\rangle_{g=0}=\prod_{\vec{x}, j}\left|\sigma_{j}^{z}(\vec{x})=1\right\rangle \tag{9.60}
\end{equation*}
$$

However, it is also possible to construct an explicitly gauge-invariant state at $g=0$, a state which is simultaneously an eigenstate of all the plaquette (or flip) operators and of the gauge generators $Q(\vec{x})$ (for all $\vec{x}$ ), i.e. to satisfy the $\mathbb{Z}_{2}$ version of the Gauss law everywhere. This state was constructed by Kitaev (2003) in his work on the toric code, which is equivalent to the $g=0$ limit of the $\mathbb{Z}_{2}$ gauge theory. Since the state is required to be an eigenstate of the generators of the time-independent gauge transformation, Kitaev's state is in the "electric-field" representation in which the states are eigenstates of the operators $\sigma_{j}^{x}(\vec{x})$ used above to describe the strong-coupling limit.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-324.jpg?height=466&width=1294&top_left_y=185&top_left_x=213)

Figure 9.4 (a) The eight configurations of $\sigma^{x}$ eigenstates on the links allowed by the $\mathbb{Z}_{2}$ Gauss-law condition, Eq. (9.43). (b) The corresponding loop configurations: broken lines have $\sigma^{x}=1$ and full lines have $\sigma^{x}=-1$.

Let us denote by $\mathcal{C}$ the configurations allowed by the $\mathbb{Z}_{2}$ Gauss law of Eq. (9.43). We can denote a $\sigma^{x}=1$ state on a horizontal link by an arrow pointing to the right, $\rightarrow$, a $\sigma^{x}=-1$ state by a left-pointing arrow on that link, $\leftarrow$, a $\sigma^{x}=1$ state on a vertical link by an up arrow, $\uparrow$, and a $\sigma^{x}=-1$ state by a down arrow, $\downarrow$. The condition that $Q(\vec{x})=1$ at every site $\vec{x}$ implies that the allowed configurations $\mathcal{C}$ have an even number of arrows pointing in or out of the site (or vertex), as shown in Fig. 9.4(a).

We can also give an equivalent graphical representation of the allowed states by painting all links with a $\sigma^{x}=1$ state (states without a $\mathbb{Z}_{2}$ electric field) with a broken line and all links with a $\sigma^{x}=-1$ state with a full line (states with a $\mathbb{Z}_{2}$ electric field), as shown in Fig. 9.4(b). In the latter picture the allowed configurations are the set of possible loop coverings of the square lattice. An example of such a state is the elementary loop excitation created by the magnetic plaquette operator, which we discussed in the strong-coupling phase. Thus the $\mathbb{Z}_{2}$ gauge theory can be viewed as a quantum-loop model.

However, the plaquette operators are not diagonal in this representation. Indeed, the action of a plaquette operator centered at dual site $\vec{r}$ (and with SW corner at the direct site $\vec{x}$ ) on a state in which its links have the general configuration $\left\{\sigma^{x}(i)\right\}$ (with $i=1, \ldots, 4$ the four links of the plaquette) is to flip this state to the opposite configuration, $\left\{-\sigma^{x}(i)\right\}$. The result is that the state is the equal-amplitude superposition of all states of the lattice (in the $\sigma^{x}$ representation) satisfying the Gauss-law condition. Let $\mathcal{C}$ represent the set of all such configurations. The Kitaev state is then

$$
\begin{equation*}
|G\rangle_{\text {Kitaev }}=\sum_{\mathcal{C}}|\mathcal{C}\rangle \tag{9.61}
\end{equation*}
$$

Thus, the Kitaev representation of the ground state at $g=0$ is the linear superposition of all loop configurations $\mathcal{C}$ with equal amplitude. In this phase the loops have
proliferated (or "condensed") and have all possible lengths. In particular this state includes loops stretching between opposite boundaries of the lattice, even in the thermodynamic limit, with the same amplitude as short loops. We will see shortly that the deconfined phase is actually a topological phase and that this is related to the fact that it represents a state in which loops have proliferated (Freedman, 2003; Levin and Wen, 2005).

The Kitaev state and the $|G\rangle_{g=0}$ state constructed above in the $\sigma^{z}$ representation are obviously the same state since the eigenstates of $\sigma^{z}$ are the symmetric and antisymmetric superpositions of the eigenstates of $\sigma^{x}$ (and vice versa). However, although the Kitaev state is formally analogous to the ground state of the QDM at the RK point, i.e. the short-range RVB state, in that they are both the equalamplitude sum over all the allowed configurations, its properties are actually dramatically different on the square lattice but are analogous on the triangular lattice.

To see that the weak-coupling phase is deconfining, we will compute for this case the energy of two point sources separated by a distance $R$. It is easy to see that in the limit $g \rightarrow 0$ this energy vanishes. In this limit we must find first the ground state with two sources, i.e. a state with two points $\vec{x}$ and $\vec{y}$ on the lattice where $Q=-1$. We saw that in the strong-coupling limit the ground state in this sector has a string of smallest possible length $R$, the straight line between $\vec{x}$ and $\vec{y}$ if they lie on the same row or column of the lattice (other cases are similar but more complicated). We also saw that the vacuum sector at $g=0$ (with $Q=1$ everywhere) is the Kitaev state in which loops of all sizes (and numbers) have the same amplitude.

In the sector with two sources the ground state is also a linear superposition (with equal amplitude in the $g \rightarrow 0$ limit) of all possible configurations of closed loops but with an open string stretching from $\vec{x}$ to $\vec{y}$ with all possible lengths. This is so since the plaquette operator acting on a string only deforms the string, yielding another string configuration. Thus the state now is also a superposition of all possible strings (in additions to loops). However, this state has exactly the same energy as that of the vacuum sector. Therefore, the energy cost $\Delta E(R)=0$ at $g=0$. On the other hand, the first-order correction, in an expansion in powers of $g^{2}$ now, of both ground states yields a finite energy cost (which is independent of the distance $R$ for large separations). In general, in this phase $\Delta E(R)$ has the long-distance behavior

$$
\begin{equation*}
\Delta E(R)=2 E_{0}(g)+V(g, R) \tag{9.62}
\end{equation*}
$$

where $E_{0}(g) \propto g^{2}+O\left(g^{4}\right)$ is the self-energy of the sources (which is vanishingly small as $g \rightarrow 0$ ) and

$$
\begin{equation*}
V(g, R) \sim A(g) e^{-R / \xi_{s}(g)} \tag{9.63}
\end{equation*}
$$

is the effective interaction between the sources, which in this phase is screened (as would be expected, since the energy spectrum is gapped) with a screening length $\xi_{\mathrm{s}}(g)$ that vanishes as $g \rightarrow 0$, i.e. in this phase the effective interaction is shortranged. Therefore in the weak-coupling phase the external sources can be separated at an infinite distance with a finite self-energy and a weak (exponentially small) interaction. This is what we mean by deconfinement.

This result can also be understood by computing the expectation value of the Wilson loop operator $W_{\Gamma}$. Since the Wilson loop operator is a product of the $\sigma^{z}$ operators on the perimeter of the loop $\Gamma$, this can be done more easily in the $\sigma^{z}$ representation of the ground-state wave function. Indeed, since in the axial gauge $\left(\sigma_{1}^{z}=1\right)$ the ground state is simply $\sigma^{z}=1$ on all links, the Wilson loop operator is simply

$$
\begin{equation*}
\langle G| W_{\Gamma}|G\rangle_{g=0}=1 \tag{9.64}
\end{equation*}
$$

and we see that the effective interaction vanishes at $g=0$. It is also straightforward to see that for $g>0$ the Wilson loop obeys a perimeter law in this phase,

$$
\begin{equation*}
\langle G| W_{\Gamma}|G\rangle=e^{-\rho(g) L[\Gamma]} \tag{9.65}
\end{equation*}
$$

where $L[\Gamma]$ is the perimeter of the loop $\Gamma$ and $\rho(g)$ is a function of $g$ that vanishes smoothly as $g \rightarrow 0$.

We close this subsection with some comments on the behavior of the Wilson loop and of the effective interaction at the quantum critical point $g_{\mathrm{c}}$. As $g \rightarrow g_{\mathrm{c}}$ from above the string tension $\sigma(g)$ vanishes (following a power law) and the confinement scale $\xi$ diverges (also with a power law), and as $g \rightarrow g_{\mathrm{c}}$ from below the screening length $\xi_{\mathrm{s}}(g)$ diverges. If the quantum phase transition at $g_{\mathrm{c}}$ is continuous, and in this case it is, in both observables we expect to obtain a behavior intermediate between confinement and deconfinement. In the case of the Wilson loop, scale invariance suggests that it should be a universal function of the aspect ratio of the loop. This assumption presumes that the loop is smooth and that it has no corners or cusps. However, on a lattice corners in closed Wilson loops are unavoidable. It is well known that in Wilson loops with corners, corners (and more generally cusps) contribute (logarithmic) singularities that we will not be concerned with here.

An elegant scaling (actually RG) argument (Peskin, 1980) shows that the effective interaction in all dimensions at the quantum critical point has the universal form

$$
\begin{equation*}
V(R)=-\frac{c}{R} \tag{9.66}
\end{equation*}
$$

where $c$ is a universal number. Hence, at $g_{c}$ we expect the effective interaction to obey a universal $1 / R$ ("Coulomb") law even in two dimensions, even in this theory with a discrete symmetry.

Returning to the eight possible configurations of $\sigma_{x}$ eigenstates shown in Fig. 9.4, we can define a generalized eight-vertex wave function of the form (Ardonne et al., 2004)

$$
\begin{equation*}
|\Psi\rangle=\sum_{\mathcal{C}} a^{N_{\mathrm{a}}[\mathcal{C}]} b^{N_{\mathrm{b}}[\mathcal{C}]} c^{N_{\mathrm{c}}[\mathcal{C}]} d^{N_{\mathrm{d}}[\mathcal{C}]}|\mathcal{C}\rangle \tag{9.67}
\end{equation*}
$$

where $a, b, c$, and $d$ are four real and positive amplitudes, and $N_{\mathrm{a}}[\mathcal{C}], N_{\mathrm{b}}[\mathcal{C}], N_{\mathrm{c}}[\mathcal{C}]$, and $N_{\mathrm{d}}[\mathcal{C}]$ are the numbers of vertices of types $\mathrm{a}, \mathrm{b}, \mathrm{c}$ and d present in configuration $\mathcal{C}$, respectively. This eight-vertex state has the property that its norm is equal to the partition function of the 2D classical Baxter eight-vertex model (Baxter, 1982). Therefore this wave function represents a generalized dimer-type model whose phase diagram is that of the classical 2D Baxter (eight-vertex) model. Ardonne and coworkers showed that it is possible to write a quantum Hamiltonian that is the sum of projection operators for which the eight-vertex wave function is the ground state (Ardonne et al., 2004).

A case of special interest is the choice $a=b=1$. The phase diagram for this case is shown in Fig. 9.5. It has two ordered phases and a disordered topological phase, separated by lines of continuous phase transitions with continuously varying exponents. The bottom line of the phase diagram is the scaling limit of the classical six-vertex model. The special point with weights $c=\sqrt{2}$ and $d=0$ is the dimer model on the square lattice, which, as we saw, is a critical system. There is a Kosterlitz-Thouless transition at $\left(c^{2}, d^{2}\right)=(2,0)$ to an ordered phase.

### 9.9 Boundary conditions and topology

Let us now consider the effects of boundary conditions on the phases of the $\mathbb{Z}_{2}$ gauge theory. In the preceding subsections we assumed that the system was defined to be a large disk (or rectangle) with fixed boundary conditions. We will now examine what happens when we impose periodic boundary conditions or, which amounts to the same thing, place the system on a torus.

The choice of boundary condition clearly does not affect the confinement phase in any essential way. Indeed, in our analysis of the state in the strong-coupling regime we found that it has a unique gauge-invariant ground state and, in fact, we did not even have to fix a gauge. Thus, in the strong-coupling phase we expect (and get) a unique ground state regardless of the choice of boundary conditions. However, there is a subtlety. If a link is in the state $\sigma^{x}=1$, then in this state the
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-328.jpg?height=823&width=878&top_left_y=206&top_left_x=416)

Figure 9.5 The phase diagram for the eight-vertex wave function. The phase boundaries are lines of continuous phase transitions. The topological phase is the quantum disordered phase. The Kitaev toric-code state is the special point in the middle of the disordered phase. The bottom line, $d=0$, is the six-vertex model, and the special point $\left(c^{2}, d^{2}\right)=(\sqrt{2}, 0)$ is the dimer model on the square lattice. The effective-field theory along this line is the quantum Lifshitz model discussed at the end of this chapter (Ardonne et al., 2004).
product of the $\tau^{z}$ operators for the two surrounding dual sites must also be equal to 1 . Hence, the strong-coupling state of the gauge theory is equivalent to all the states of the dual Ising model that do not have any domain walls (as these will lead to some $\tau^{z}=-1$ ). There are two domain-wall free states in the dual Ising model: all up and all down. Thus, the duality transformation is a two-to-one mapping and does not distinguish one broken symmetry state from the other.

Another way to see this is to ask how the generator of global $\mathbb{Z}_{2}$ transformations of the dual Ising model, which I will denote by $\tilde{Q}$, behaves in the gauge-theory picture. The generator $\tilde{Q}$ is the product of all the $\tau^{x}(\vec{r})$ of the dual lattice. Under duality this operator maps to the Wilson loop acting on links of the boundary $\Gamma$ of the entire system:

$$
\begin{equation*}
\tilde{Q}=\prod_{\vec{r}} \tau^{x}(\vec{r})=\prod_{(\vec{x}, j) \in \Gamma} \sigma_{j}^{z}(\vec{x}) \tag{9.68}
\end{equation*}
$$

This operator has a vanishing expectation value in the strong-coupling phase of the gauge theory, since the latter is essentially an eigenstate of $\sigma^{x},\langle G| \tilde{Q}|G\rangle_{g \rightarrow \infty}=0$.

This is also the case in the dual Ising model since $\tilde{Q}$ maps one broken symmetry ground state into the other and these states are orthogonal.

In the weak-coupling phase the choice of boundary condition has an even subtler and more interesting effect. We saw that in the weak-coupling phase in the $\sigma^{z}$ representation a gauge-fixing condition is required, and that for a system with an open boundary the axial gauge condition (such as $\sigma_{1}^{z}=1$ ) completely and unambiguously fixes the gauge and defines the state. Notice that in this state the expectation value $\langle G| \tilde{Q}|G\rangle_{g=0}=1$, which is also correct in the dual Ising model in its disordered phase.

Let us now consider the weak-coupling phase for a system on a torus. A torus is a topologically non-trivial surface (or manifold) that has the defining property that it has two non-contractible closed curves (or loops), denoted in Fig. 9.6 by $\gamma_{1}$ and $\gamma_{2}$. The Wilson loop operators on $\gamma_{1}$ and $\gamma_{2}, W_{\gamma_{1}}$ and $W_{\gamma_{2}}$, respectively, are gauge-invariant operators whose expectation values cannot be changed by local gauge-fixing conditions. Since the Wilson loop operators are products of $\sigma_{j}^{z}$ link operators, in the $g=0$ limit $W_{\gamma_{1}}= \pm 1$ and $W_{\gamma_{2}}= \pm 1$. Hence we find four inequivalent versions of the weak-coupling state, and conclude that on a torus the axial gauge condition does not completely specify the state.

We can also define magnetic 't Hooft operators on non-contractible loops, $\tilde{W}_{\gamma_{1}}$ and $\tilde{W}_{\gamma_{2}}$ (as defined in Eq. (9.46) and Fig. 9.2), which are also gauge-invariant, and play a key role in this problem (Moessner et al., 2001). Gauge-invariant observables defined on non-contractible curves of a manifold (such as the torus) define non-trivial (magnetic) holonomies of the system. The Wilson loop and
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-329.jpg?height=633&width=1262&top_left_y=1408&top_left_x=219)

Figure 9.6 A square lattice with periodic boundary conditions is isomorphic to a torus. The two non-contractible loops $\gamma_{1}(\vec{r})$ and $\gamma_{2}(\vec{r})$ are shown.
't Hooft loop operators on non-contractible closed loops obey the commutation relations

$$
\begin{array}{ll}
\left\{W_{\gamma_{1}}, \tilde{W}_{\gamma_{2}}\right\}=0, & \left\{W_{\gamma_{2}}, \tilde{W}_{\gamma_{1}}\right\}=0 \\
{\left[W_{\gamma_{1}}, \tilde{W}_{\gamma_{1}}\right]=0,} & {\left[W_{\gamma_{2}}, \tilde{W}_{\gamma_{2}}\right]=0} \tag{9.69}
\end{array}
$$

In addition the holonomies of the 't Hooft magnetic operators, $\tilde{W}_{\gamma_{j}}$, commute with the Hamiltonian of the $\mathbb{Z}_{2}$ gauge theory. Hence the eigenstates (and consequently the ground states as well) of the Hamiltonian are also eigenstates of the magnetic holonomies.

Precisely at $g=0$ the Wilson loop ("electric") holonomies $W_{\gamma_{j}}$ also commute with the Hamiltonian. Hence, at $g=0$ all four states are exactly degenerate. For all $g>0$ the Wilson loop holonomies no longer commute with the Hamiltonian (although the 't Hooft holonomies still do). Hence these four states are no longer degenerate. However, given their topological nature, on a torus of infinite size (the thermodynamic limit) these four states do not mix at any finite order in this (convergent!) perturbation theory. On a finite-sized torus, of linear size $L$, the mixing is a finite-size effect and it first occurs at order $g^{L}$. Hence the resulting energy splitting is exponentially small, $\sim e^{-|\ln g| L}$, and vanishes in the thermodynamic limit $(L \rightarrow \infty)$. Therefore the ground-state degeneracy is an exact property of the deconfined phase.

We saw that the ground state of the deconfined theory can be written as a Kitaev state, i.e. as a linear superposition of electric-loop configurations. As a consequence of the $\mathbb{Z}_{2}$ Gauss law only the parity of these loops (and not their number) is conserved under the quantum evolution (by the action of the Hamiltonian). On a surface with non-trivial topology, such as the torus, one can classify the states by how many electric-loop operators wind around the non-contractible loops of the manifold. However, only their parity is a conserved quantity. Thus, there are four classes of states: states with an even or odd number of electric loops winding around each holonomy of the torus. Let us denote these classes by ( $s_{1}, s_{2}$ ) with $s_{i}= \pm 1(i=1,2)$ representing states with even $(+1)$ and odd $(-1)$ numbers of winding loops.

Let us consider the class of states $(+,+)$ with an even number of loops winding on each direction. These states are eigenstates of the magnetic holonomies $\tilde{W}_{\gamma_{j}}$ (with $j=1,2$ ) with eigenvalue +1 :

$$
\begin{equation*}
\tilde{W}_{\gamma_{j}}|+,+\rangle=+|+,+\rangle \tag{9.70}
\end{equation*}
$$

Let us also consider the state resulting from the action of the Wilson loop operators $W_{\gamma_{j}}$ on these states. Since these Wilson loop holonomies are products of $\sigma^{z}$ operators on closed non-contractible paths $\gamma_{1}$ and $\gamma_{2}$, they change the parity of the
winding states. Indeed, it is easy to see that, if $|+,+\rangle$ is any state in the $(+,+)$ class, then

$$
\begin{equation*}
\tilde{W}_{\gamma_{2}} W_{\gamma_{1}}|+,+\rangle=-W_{\gamma_{1}} \tilde{W}_{\gamma_{2}}|+,+\rangle=-|-,+\rangle \tag{9.71}
\end{equation*}
$$

Thus the state resulting from the action of $W_{\gamma_{1}}$ maps the class $(+,+)$ onto the class $(-,+)$. Similarly, $W_{\gamma_{2}}$ maps the $(+,+)$ class onto the $(+,-)$ class, and $W_{\gamma_{1}} W_{\gamma_{2}}$ maps the $(+,+)$ class onto the $(-,-)$ class.

Therefore we can construct a total of four Kitaev ground states, each defined by the eigenvalues of the corresponding magnetic holonomy 't Hooft operators. Each of these equally deconfined ground states is linearly independent, and they are orthogonal to each other. We have then to conclude that on a torus the deconfined ground state of the $\mathbb{Z}_{2}$ gauge theory is four-fold degenerate. It is also easy to see that if we consider the theory being placed on a manifold with a more complex topology, say a closed surface with $g$ handles (known as the genus of the surface), the ground-state degeneracy is $4^{g}$. For example, on a surface with no handles (the sphere or the disk) $g=0$ and the theory has a unique ground state.

We are very familiar with the concept of a ground-state degeneracy arising from the spontaneous breaking of a global symmetry (such as the examples discussed in Chapter 3 or in the case of the dual Ising model discussed in this section). In those cases the degenerate sectors are identified with the symmetries broken by the order-parameter field. Thus in an Ising model the two degenerate sectors are labeled by the sign of the expectation value of the order-parameter field in that state. In these systems the degeneracy is determined completely by the nature of the broken symmetry and it is independent of the topology of the surface on which the system lives. In other terms, the degeneracy does not know about topology.

What we just found in the deconfined phase is a very different situation. To begin with, the deconfined phase is not associated with the spontaneous breaking of any symmetry. More important is the fact that the degeneracy is determined by the topology of the surface and grows with its complexity. Phases of matter with these features are called topological phases (Wen, 1990c). However, the deconfined phase does not break any symmetry of the system. In particular the ground-state degeneracy we just found is not the result of spontaneous symmetry breaking. It is, however, the consequence of the topological nature of the state. Indeed, we saw that the deconfined phase is a state in which electric loops proliferate (or condense) and hence the wave functions of these states include states in which the loops wind around the non-contractible loops of the torus. In contrast, the ground state in the confined phase is unique and it is dominated by finite (and typically small) electric loops.

The deconfined phase of the $\mathbb{Z}_{2}$ gauge theory is in fact the simplest topological phase, known as the $\mathbb{Z}_{2}$ topological fluid. In Section 9.3 we saw that QDMs on
non-bipartite lattices are also in topological phases with the same properties as the $\mathbb{Z}_{2}$ topological fluid. Spin-liquid phases, whenever they have been found to be the ground states, are actually deconfined phases and are also topological, as we will see. In later chapters we will discuss the quantum Hall phases of 2D electron gases in large magnetic fields, which are also topological phases. In that context we will see that the low-energy sector of topological phases is described by topological field theories. Density-matrix RG and tensor-product-state results for the spin- $\frac{1}{2}$ quantum Heisenberg antiferromagnet on a frustrated square lattice suggest that it has a $\mathbb{Z}_{2}$ topological phase (Jiang et al., 2012; Wang et al., 2011).

### 9.10 Generalized $\mathbb{Z}_{2}$ gauge theory: matter fields

We will now discuss a more general $\mathbb{Z}_{2}$ gauge theory in which we will include a dynamical matter field. Since the local symmetry is $\mathbb{Z}_{2}$ the matter field must also transform under this symmetry, and the simplest example is just a quantum Ising model. To this end, we define an Ising degree of freedom represented by the Pauli matrix $\tau^{z}(\vec{x})$ on each site $\vec{x}$ of the lattice (not to be confused with the dual Ising model whose degrees of freedom reside on the dual lattice!). The Hamiltonian for the $\mathbb{Z}_{2}$ gauge theory with (Ising) matter is

$$
\begin{align*}
H= & -g \sum_{\vec{x}, j} \sigma_{j}^{x}(\vec{x})-\frac{1}{g} \sum_{\vec{x}} \sigma_{1}^{z}(\vec{x}) \sigma_{2}^{z}\left(\vec{x}+e_{1}\right) \sigma_{1}^{z}\left(\vec{x}+e_{2}\right) \sigma_{2}^{z}(\vec{x}) \\
& -\frac{1}{\lambda} \sum_{\vec{x}} \tau^{x}(\vec{x})-\lambda \sum_{\vec{x}, j} \tau^{z}(\vec{x}) \sigma_{j}^{z}(\vec{x}) \tau^{z}\left(\vec{x}+e_{j}\right) \tag{9.72}
\end{align*}
$$

This Hamiltonian commutes with the new operators $Q(\vec{x})$ (defined on each site $\vec{x}$ of the lattice)

$$
\begin{equation*}
Q(\vec{x})=\sigma_{1}^{x}(\vec{x}) \sigma_{1}^{x}\left(\vec{x}-e_{1}\right) \sigma_{2}^{x}(\vec{x}) \sigma_{2}^{x}\left(\vec{x}-e_{2}\right) \tau^{x}(\vec{x}) \tag{9.73}
\end{equation*}
$$

which square to the identity, $Q^{2}(\vec{x})=1$.
Since these operators commute with each other, $[Q(\vec{x}), Q(\vec{y})]=0$, and with the Hamiltonian, they generate local $\mathbb{Z}_{2}$ gauge transformations. The physical states $\mid$ Phys $\rangle$ are thus simultaneous eigenstates of the Hamiltonian $H$ and of all the generators $Q(\vec{x})$. We will define the new Hilbert space of gauge-invariant states by $Q(\vec{x}) \mid$ Phys $\rangle=\mid$ Phys $\rangle$. However, if we compare the generator $Q(\vec{x})$ as defined by Eq. (9.73) with that of the pure gauge theory, Eq. (9.44), we see that they differ by a factor of $\tau^{x}(\vec{x})$. Thus the new Hilbert space modifies the Gauss-law condition of the pure gauge theory of Eq. (9.43) by allowing for dynamical sources in the form of matter fields.

The presence of dynamical matter fields changes the spectrum in important ways. Thus, in addition to closed $\mathbb{Z}_{2}$ electric loops and $\mathbb{Z}_{2}$ magnetic charges, the spectrum now also contains bound states of matter fields, which can be regarded as open $\mathbb{Z}_{2}$ electric strings. States of the latter type are associated with the gauge-invariant operator

$$
\begin{equation*}
C_{\gamma(\vec{x}, \vec{y})}=\tau^{z}(\vec{x})\left(\prod_{(\vec{z}, j) \in \gamma(\vec{x}, \vec{y})} \sigma_{j}^{z}(\vec{z})\right) \tau^{z}(\vec{y}) \tag{9.74}
\end{equation*}
$$

where $\gamma(\vec{x}, \vec{y})$ is an open path on the lattice with endpoints at $\vec{x}$ and $\vec{y}$. There is still the possibility of the existence of states representing isolated $\mathbb{Z}_{2}$ electric charges. We will see that these states do exist in the deconfined (and topological) phase, although these states are not created by local operators. In some sense, the free $\mathbb{Z}_{2}$ electric charges are solitons of this theory. The existence of such "free" (in the sense of isolated) states in the deconfined phase is a form of "fractionalization" and it is one of the main interests of this theory in the context of possible spin-liquid phases.

Except at $\lambda=0$ and at $g=0$ the states of the system with the Hamiltonian of Eq. (9.72) can be fully specified in the unitary gauge (the analog of the London gauge in superconductivity)

$$
\begin{equation*}
\left.\left.\tau^{z}(\vec{x}) \mid \text { Phys }\right\rangle=\mid \text { Phys }\right\rangle \tag{9.75}
\end{equation*}
$$

Unlike the axial gauge, this gauge is always globally well defined. In this gauge the Ising degrees of freedom can be eliminated (provided that the generalized Gauss law implied by Eq. (9.73) is imposed), resulting in the following effective Hamiltonian involving only the gauge fields:

$$
\begin{align*}
H= & -g \sum_{\vec{x}, j} \sigma_{j}^{x}(\vec{x})-\frac{1}{g} \sum_{\vec{x}} \sigma_{1}^{z}(\vec{x}) \sigma_{2}^{z}\left(\vec{x}+e_{1}\right) \sigma_{1}^{z}\left(\vec{x}+e_{2}\right) \sigma_{2}^{z}(\vec{x}) \\
& -\frac{1}{\lambda} \sum_{\vec{x}} \sigma_{1}^{x}(\vec{x}) \sigma_{1}^{x}\left(\vec{x}-e_{1}\right) \sigma_{2}^{x}(\vec{x}) \sigma_{2}^{x}\left(\vec{x}-e_{2}\right)-\lambda \sum_{\vec{x}, j} \sigma_{j}^{z}(\vec{x}) \tag{9.76}
\end{align*}
$$

where the second term acts on the plaquettes and the third term acts on the sites. Since the degrees of freedom of this Hamiltonian reside on the links of the lattice, it is automatically self-dual in the sense that they also reside on the links of the dual lattice. Thus, a duality transformation effectively amounts to exchanging plaquettes with sites and rotating the basis from $\sigma^{z}$ to $\sigma^{x}$. Under this transformation the Hamiltonian remains invariant up to the replacement

$$
\begin{equation*}
\lambda \leftrightarrow \frac{1}{g} \tag{9.77}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-334.jpg?height=564&width=654&top_left_y=198&top_left_x=528)

Figure 9.7 A schematic phase diagram for the $\mathbb{Z}_{2}$ gauge theory with Ising matter fields. Notice that the confinement phase of the gauge theory and the "Higgs" phase (the ordered phase of the Ising model) are smoothly connected and belong to the same phase. As a consequence of self-duality the phase diagram is symmetric under reflection across the anti-diagonal. P is a critical endpoint and T is a tricritical point. The smooth curves are continuous transitions and the broken line is a line of first-order transitions.

Thus the physics of this system is symmetric under a reflection of the anti-diagonal of the phase diagram of Fig. 9.7. In the limit $g \rightarrow 0$ and $\lambda \rightarrow 0$ the Hamiltonian reduces to the Hamiltonian for the Kitaev toric code (Kitaev, 2003), which is given by the second and third terms of the Hamiltonian Eq. (9.76).

Let us analyze the phase diagram of this system (Fradkin and Shenker, 1979), which is shown in Fig. 9.7. We will do this by looking at extreme regimes of the two coupling constants $g$ and $\lambda$.

We will begin at the bottom of Fig. 9.7. This axis represents the phase diagram of the pure $\mathbb{Z}_{2}$ gauge theory, which, as we saw, has a quantum critical point at a critical value $g_{c}$ of the coupling constant. Right on this axis the coupling constant of the Ising model vanishes, $\lambda=0$. For $\lambda$ small enough the matter fields are massive (have a large energy gap $\sim \lambda^{-1}$ ). Hence their fluctuations can be integrated out, resulting in a finite (and analytic) renormalization of the coupling constant of the gauge theory. Thus, no new phase transitions can possibly occur for $\lambda$ small, and the only significant effect is that the critical coupling $g_{\mathrm{c}}$ becomes a smooth function $\lambda$. There are, however, some qualitative changes at small but finite $\lambda$.

Let us discuss first the confinement regime, $g$ large and $\lambda$ small. We saw before that in this regime the ground state is most easily described in the $\sigma^{x}$ basis. At $\lambda=0$ the ground state and the excitation spectrum can be pictured in terms of small closed electric loops on the square lattice (representing links where $\sigma^{x}=-1$ ). However, if $\lambda>0$, no matter how small, then, in addition to closed loops, we will
have states represented by open strings, and at $\lambda$ small they are suppressed. However, the fact that there are open-string states does not imply deconfinement since the open strings (which carry the quantum numbers of the $\mathbb{Z}_{2}$ Ising matter field at their endpoints) have finite spatial extent. Thus even in this case deconfinement can take place only if the open and closed strings become macroscopic in size.

Nevertheless, the existence of open strings changes the behavior of the Wilson loop operator. Since dynamical $\mathbb{Z}_{2}$ Ising matter fields carry the same charge as the external sources, the Wilson loop operator $W_{\Gamma}$ becomes screened by the fluctuations of the matter field. It is straightforward to see that the lowest-order contribution of the matter field to a Wilson loop of perimeter $L$ is of order $\sim \lambda^{L}$ in an expansion in powers of $\lambda$, which for loops that are large enough always prevails over the area-law contribution, $\sim g^{-A}$. Hence area-law behavior of the pure gauge theory crosses over to a perimeter law for large enough loops (no matter how small $\lambda$ is, provided that it is not zero). Likewise, the ground-state energy of two sources now will grow linearly with separation up to a scale of order $\lambda^{-1}$.

Let us now increase $\lambda$ to arbitrary values (while keeping $g$ large). By examining the Hamiltonian of Eq. (9.76) we see that the ground state and the excitation spectrum evolve smoothly as $\lambda$ increases. Although the basis for the simplest description of the spectrum rotates smoothly from the $\sigma^{x}$ basis at $\lambda=0$ to the $\sigma^{z}$ basis as $\lambda \rightarrow \infty$, this does not require the crossing of any phase boundary: the spectrum has an analytic evolution. In fact, the spectrum evolves with an analytic dependence on $\lambda$ and $g$ on a finite strip of the phase diagram ranging from the confinement regime (the lower-left corner of the phase diagram of Fig. 9.7), up the $\lambda$ axis, turning right along the top of the phase diagram, and stretching all the way to large $\lambda$ and $g \rightarrow 0$ (the upper-right corner of the phase diagram of Fig. 9.7). In particular, this implies that the ground-state energy is an analytic function of $g$ and $\lambda$ in that region. This argument was proved rigorously by Fradkin and Shenker (1979), who showed that these expansions have a finite radius of convergence inside this strip. However, analyticity means that there are no phase transitions (continuous or discontinuous) in this regime. Hence there is no global qualitative difference between the seemingly opposite regimes of $\lambda$ small and $g$ large ("confinement") and $\lambda$ large and $g$ small ("Higgs"), which are as smoothly connected to each other as liquid water is to steam.

On the other hand, on the extreme right of the diagram the gauge coupling vanishes, $g \rightarrow 0$. In this limit the plaquette term of the Hamiltonian forces the gauge fields to be a pure gauge (no flux). Up to the effects of boundary conditions, we can locally fix the gauge $\sigma_{1}^{z}=1$ everywhere and the zero-flux condition then forces that $\sigma_{2}^{z}=1$ also everywhere. Thus, in this limit the gauge fields are frozen out and we recover the Hamiltonian for the Ising model in a transverse field along the entire $\lambda$ axis. At large $\lambda$ the Ising model is ordered and has an order parameter
with a non-vanishing expectation value. However, the Ising order parameter is not locally gauge-invariant, and by Elitzur's theorem its expectation value will vanish for any $g>0$. One may wonder whether there is an operator that, in a suitable gauge, reduces to the order parameter. Such an operator does exist in Maxwell's electrodynamics, which has a non-compact gauge group. In the theory of superconductivity this is the conventional pair field defined in the Coulomb gauge. We will encounter an analog of this operator in the theory of quantum Hall effects. However, for a system with a compact gauge group (such as $\mathbb{Z}_{2}$ ) it is not possible to construct a locally gauge-invariant order parameter. Nevertheless, the spectrum still has an analytic ("adiabatic") evolution reaching all the way to the ordered phase. This is the Higgs phase (Fradkin and Shenker, 1979).

Let us finally discuss the stability of the deconfined phase, the lower-right corner of the phase diagram. Above we constructed the ground state at $\lambda=0$ and showed that in this state the (electric) loops have divergent sizes and proliferate. We also showed that on a torus this phase has a four-fold degenerate ground state, labeled by the eigenvalues of the magnetic 't Hooft loop operators. The expansion in powers of $g$ and $\lambda$ is also convergent with a finite radius of convergence. This is expected since at $g=\lambda=0$ the spectrum has a large energy gap. Thus the deconfined phase occupies a finite region of the phase diagram (as depicted in Fig. 9.7), and the deconfinement phase transition at $g=g_{c}($ and $\lambda=0)$ and the Ising phase transition at $\lambda=\lambda_{\mathrm{c}}($ and $g=0)$ survive at finite $\lambda$ and at finite $g$, respectively. It is a deconfined phase in the sense that there are finite-energy states in the spectrum that carry the $\mathbb{Z}_{2}$ "charge" and are free (and hence are not confined). This is possible since in this phase the electric strings have proliferated and are of macroscopic size. However, this phase is not characterized by a local order parameter. Nevertheless, it is still characterized by a finite ground-state degeneracy on a torus in the thermodynamic limit. This is true even though the 't Hooft magnetic holonomies do not commute with the Hamiltonian for any finite $\lambda>0$.

Thus we conclude that matter fields make qualitative changes in the phase structure. The resulting phase diagram, shown in Fig. 9.7, has two phases: (a) a nontopological phase ranging from the confinement regime to the broken-symmetry regime and (b) a topological deconfined phase. The features of the theory that we described here, including the topology of the phase diagram and the existence of a critical endpoint $P$ and of a tricritical point $T$, have been confirmed by several numerical Monte Carlo simulations (Jongeward et al., 1980; Trebst et al., 2007; Tupitsyn et al., 2010). This phase diagram turns out to be generic for all gauge theories with a compact symmetry group and matter fields that carry the fundamental representation of the gauge group (i.e. the lowest allowed charge). Some important details of the phases do depend on the gauge group. In particular the deconfined phase is topological (i.e. with a finitely degenerate ground state on a torus) only for
discrete gauge groups, but not if the symmetry group is continuous. It also holds for a theory with a compact gauge group spontaneously broken to a discrete subgroup (Krauss and Wilczek, 1989; Preskill and Krauss, 1990; Bais et al., 1992).

### 9.11 Compact quantum electrodynamics

The Hamiltonian of the QDM of Eq. (9.41) is closely related to a problem solved by Polyakov in 1977 (Polyakov, 1977): compact quantum electrodynamics (CQED) in $(2+1)$ dimensions. It is compact in the sense that its degrees of freedom, the gauge fields $A_{j}$, or rather the exponentials $e^{i A_{j}(\vec{x})}$, are elements of the compact Lie group U(1). The Hamiltonian of CQED has the simpler form (Kogut, 1979)

$$
\begin{equation*}
H_{\mathrm{CQED}}=\frac{g}{2} \sum_{\vec{x} ; j} E_{j}^{2}(\vec{x})-\frac{1}{g} \sum_{\vec{x} ; j, k} \cos F_{j k}(\vec{x}) \tag{9.78}
\end{equation*}
$$

where the gauge variables $A_{j}(\vec{x})$ and the conjugate "electric" fields $E_{j}(\vec{x})$ satisfy canonical equal-time commutation relations, $\left[E_{j}(\vec{x}), A_{k}(\vec{y})\right]=i \delta_{j k} \delta_{\vec{x}, \vec{y}}$, and $F_{j k}(\vec{x})=\sum_{\text {plaquette }} A_{j}(\vec{x})$ is the gauge flux for the plaquette $(\vec{x} ; j, k)$.
As before, the local operator $Q(\vec{x})=\Delta_{j} E_{j}(\vec{x})$ is the generator of local timeindependent gauge transformations of the form

$$
\begin{equation*}
U[\alpha(\vec{x})]=\exp \left(i \sum_{\vec{x}} \alpha(\vec{x}) Q(\vec{x})\right) \tag{9.79}
\end{equation*}
$$

which are elements of the gauge group $\mathrm{U}(1)$. Since the gauge generators $\{Q(\vec{x})\}$ commute with each other and with the Hamiltonian,

$$
\begin{equation*}
[Q(\vec{x}), Q(\vec{y})]=0, \quad[Q(\vec{x}), H]=0 \tag{9.80}
\end{equation*}
$$

the states in the Hilbert space of physical states, $\{|\mathrm{Phys}\rangle\}$, are simultaneous eigenstates of all the gauge generators $\{Q(\vec{x})\}$ and hence are gauge-invariant, i.e. they obey Gauss's law

$$
\begin{equation*}
\left.\Delta_{j} E_{j}(\vec{x}) \mid \text { Phys }\right\rangle=0 \tag{9.81}
\end{equation*}
$$

The Hamiltonian of Polyakov's compact QED, Eq. (9.78), differs from the Hamiltonian of the QDM, Eq. (9.41), in that (a) $\bar{J}$ has the wrong sign and (b) the constraint selects a space of states that is not the usual vacuum $(\rho=0)$ but has an array of sources, $\rho(\vec{x})= \pm 1$. The first problem can be solved very easily (in the absence of holes) by shifting the gauge variables $A_{j}=A_{j}^{\prime}+\delta A_{j}$ in such a way that $\sum_{\text {plaquette }} \delta A_{j}=\pi$. For instance, we can shift $A_{1}$ by $\pi$ on every other horizontal row. Once this has been done, the first two terms of the Hamiltonian of Eq. (9.41) become essentially identical to the Hamiltonian for compact electrodynamics (Kogut, 1979). The second caveat, (b), is intrinsic and cannot be done
away with by any redefinition of variables. The shift $\delta A_{j}$ says that Eq. (9.41) represents a system that likes to have flux $\pi$ per plaquette, on average. This result is reminiscent of the flux phase. Thus, in terms of shifted variables, $H$ has exactly the same form but with $\bar{J} \leftrightarrow-\bar{J}$. Thus, although the Hamiltonian QDM can be written as a lattice gauge theory, related to compact QED in this case, the physical sector of the QDM is not the vacuum sector of CQED. We will see below that this makes a significant difference.

In $(2+1)$ dimensions Polyakov's compact electrodynamics is in a confining phase for all values of the coupling constant $g>0$. In fact, the lowest (space-time) dimension for a deconfined phase of a pure gauge theory with a continuous compact gauge group is $D=4(3+1)$, the dimension at which the gauge coupling constant is dimensionless. In $(2+1)$ dimensions all gauge theories (again with a compact gauge group) have only one phase, confinement. This is easy to see in the strong-coupling limit (large $g$ ), where the ground state is an eigenstate of the electric fields on the links (just as we saw in the $\mathbb{Z}_{2}$ gauge theory). In the case of CQED the ground state has $E_{j}(\vec{x})=0$ in all links of the lattice. This state, $\left|\left\{E_{j}(\vec{x})=0\right\}\right\rangle$, obviously satisfies the Gauss-law constraint of Eq. (9.81), and hence it is gaugeinvariant. In the presence of two static sources, say a source with charge +1 at $\vec{x}$ and another one with charge -1 at $\vec{y}$, the ground-state energy will increase by an amount $\Delta E(\vec{x}, \vec{y})$. The lowest-energy state in the strong-coupling limit has $E_{j}(\vec{z})=1$ on the links of the shortest path between $\vec{x}$ and $\vec{y}$, and $E_{j}(\vec{x})=0$ everywhere else. Thus the excess energy is once again linear in the (lattice) distance $R$ between the two sources, $\Delta E(R)=\sigma R$, with $\sigma=g$. Thus, this is the confining phase. The strong-coupling expansion in powers of $1 / g$ is once again convergent, with a finite radius of convergence. Therefore we expect that at sufficiently large coupling the theory will be in a confining phase, just as in the $\mathbb{Z}_{2}$ case.

What is less obvious is the fact that the confining phase extends all the way to $g=0$. This result, which was obtained originally by Polyakov (1977) is based on an analysis of the role of instantons on the imaginary-time path integral. It is a semiclassical analysis that considers the effects of the compact nature of the $U(1)$ group and, hence, of the periodicity requirements on the vector potentials and fluxes. The instantons of this theory are magnetic monopoles and represent tunneling events between vacua with different flux periods. A detailed analysis is given in Section 9.14, where we use the same approach to discuss the physics of the QDM. For a semi-classical description of monopoles see e.g. Rajaraman (1985). An insightful discussion of monopoles was given by Goldhaber (1998).

What matters here is Polyakov's result, which shows that the path integral for compact electrodynamics in $(2+1)$ Euclidean dimensions is equivalent (actually dual) to the partition function of the $3 D$ Coulomb gas. In contrast to the 2D Coulomb gas, a system with a Kosterlitz-Thouless transition, the 3D neutral

Coulomb gas is always in the plasma phase. This is so since the self-energy of a 3D (magnetic) charge is finite in the infrared. Hence, the entropy effects always overwhelm the energy in the partition function. Thus, the 3D neutral Coulomb gas always exhibits Debye screening of external static (magnetic!) charges. On the other hand, since this is a magnetic condensate (or more properly a phase in which monopoles and anti-monopoles proliferate) the electric Wilson loop has an area-law decay due to the violent fluctuations of unbound magnetic charges passing through its area. In the weak-coupling limit the theory is still confining, with an effective potential between two oppositely charged sources that remains a linear function of their separation, with a finite string tension that vanishes with an essential singularity as $g \rightarrow 0, \sigma(g) \sim e^{-A / g}$, where $A$ is a non-universal constant (since in $(2+1)$ dimensions the gauge coupling constant is not dimensionless).

Thus, in the absence of dynamical matter fields, due to the monopoleproliferation mechanism compact electrodynamics (the $\mathrm{U}(1)$ gauge theory) in $(2+1)$ dimensions has only one phase, confinement. All gauge theories with a non-abelian gauge group are confining below four space-time dimensions, the lowest critical dimension for a deconfined phase to occur (Kadanoff, 1977). As is well known, even in four dimensions non-abelian gauge theories are asymptotically free, and hence the non-linearities of these theories are marginally relevant operators that lead to a confined phase at all values of the coupling constant. The $\mathrm{U}(1)$ gauge theory is special in that it also has a deconfined (Maxwell) phase in four dimensions with massless photons and heavy (but free) magnetic monopoles.

### 9.12 Deconfinement and topological phases in the $\mathrm{U}(1)$ gauge theory

Let us now briefly consider the more general problem of compact electrodynamics coupled to charged (bosonic) matter fields with some integer charge $q \in \mathbb{Z}$. In quantum field theory this problem is known as the abelian Higgs model. Many of the arguments we use below apply to the more general case of a theory with a compact gauge group $G$ coupled to a matter (scalar) field that carries the quantum numbers of a representation of $G$ (Fradkin and Shenker, 1979). At the classical level this is the typical situation of what is usually called a gauge theory that is "spontaneously broken" in a Higgs phase. As it stands, this concept is well defined only in perturbation theory. However, it violates Elitzur's theorem since, as we noted above for compact gauge groups, it is not possible to define locally gaugeinvariant order parameters.

We will represent the matter field by an element of the $\mathrm{U}(1)$ group, defined by a set of angle-valued variables $\{\theta(\vec{x})\}$ residing at the sites to the lattice each carrying charge $q$ and coupled minimally to the gauge fields $\left\{A_{j}(\vec{x})\right\}$. Since the matter fields are parametrized by the angular variables $\theta(\vec{x})$, they can be regarded as planar rigid
rotors whose associated canonical conjugate variables are the angular momenta $\{L(\vec{x})\}$ and obey the commutation relations

$$
\begin{equation*}
[\theta(\vec{x}), L(\vec{y})]=i \delta_{\vec{x}, \vec{y}} \tag{9.82}
\end{equation*}
$$

Therefore the spectrum of the momenta $L(\vec{x})$ are the integers and measure the amount of charge at site $\vec{x}$. The rigid-rotor representation is often used to describe Josephson-junction arrays where $\theta(\vec{x})$ is the phase of a superconducting "grain" at $\vec{x}$ and $L(\vec{x})$ is the quantized electric charge, the number of Cooper pairs.

The Hamiltonian for the $\mathrm{U}(1)$ gauge theory coupled to a charge $q \in \mathbb{Z}$ matter field is

$$
\begin{align*}
H= & \sum_{\vec{x}} \frac{1}{2 \lambda} L^{2}(\vec{x})-\sum_{\vec{x}, j=1,2} \lambda \cos \left(\Delta_{j} \theta(\vec{x})-q A_{j}(\vec{x})\right) \\
& +\frac{g}{2} \sum_{\vec{x} ; j} E_{j}^{2}(\vec{x})-\frac{1}{g} \sum_{\vec{x} ; j, k} \cos F_{j k}(\vec{x}) \tag{9.83}
\end{align*}
$$

where $\Delta_{j} \theta(\vec{x})=\theta\left(\vec{x}+e_{j}\right)-\theta(\vec{x})$ is the finite difference along the direction $j$. The generators of time-independent gauge transformations now are

$$
\begin{equation*}
Q(\vec{x})=\Delta_{j} E_{j}(\vec{x})-L(\vec{x}) \tag{9.84}
\end{equation*}
$$

and the gauge-invariant states satisfy $Q(\vec{x}) \mid$ Phys $\rangle=0$.
The physics and phase diagram for the case in which the matter field carries the smallest charge, $q=1$, which we will refer to as "the fundamental representation," are essentially the same as in the $\mathbb{Z}_{2}$ gauge theory shown in Fig. 9.7. In that case only the fundamental "charge" is allowed. However, for a matter field with charge $q>1$ the phase diagram (shown in Fig. 9.8) has important differences that we will now discuss.

The pure gauge theory, obtained in the limit $\lambda=0$, is confining for all values of the gauge coupling constant $g$. Hence in the $\mathrm{U}(1)$ case the bottom axis of the phase diagram of Fig. 9.7 does not have a phase transition. In this case too the confining phase is stable and survives at finite $\lambda>0$. The behavior of the Wilson loops has some subtleties discussed below.

The vertical axis on the right extreme of the phase diagram now describes a quantum-rotor model with global $\mathrm{U}(1)$ symmetry. We will call it the $X Y$ or planar model (not to be confused with the spin-1/2 quantum $X Y$ model discussed in Chapter 5). This model is in the universality class of the 3D classical $X Y$ model, the standard model of the superfluid transition and easy-plane classical ferromagnets. It has a phase transition at a critical coupling constant $\lambda_{c}$. For $\lambda<\lambda_{c}$ the $X Y$ model has a unique ground state, roughly described by setting $L(\vec{x})=0$ on all sites (the exact ground state at $\lambda=0$ ). The spectrum in this disordered phase
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-341.jpg?height=632&width=647&top_left_y=204&top_left_x=529)

Figure 9.8 A schematic phase diagram for the $\mathrm{U}(1)$ gauge theory with charge- $q$ matter fields (with $q \geq 2$ ). The confinement phase of the gauge theory and the "Higgs" phase (the ordered phase of the $X Y$ model) are no longer smoothly connected as in Fig. 9.7. The top of the phase diagram is the $\mathbb{Z}_{q}$ discrete gauge theory and $g_{\mathrm{c}}(q)$ is its critical point. T is a tricritical point. The smooth curves are continuous transitions and the broken line is a line of first-order transitions.
has a finite energy gap $\Delta E(\lambda)>0$. The phase transition at $\lambda_{\mathrm{c}}$ is the universality class of the 3D classical $X Y$ model and hence it is also continuous with universal critical exponents. This transition too is relativistic-like and has a dynamic critical exponent $z=1$. For $\lambda>\lambda_{c}$ this system exhibits long-range order, with $\exp (i \theta)$ playing the role of the order parameter. For $\lambda>\lambda_{c}, M(\lambda)=\left\langle e^{i \theta}\right\rangle \neq 0$. The broken-symmetry phase (the "Higgs" phase) has a gapless Goldstone mode, which propagates with a linear dispersion $\omega(\vec{p})=v_{\mathrm{s}}|\vec{p}|$ for small $|\vec{p}|$.

The behavior at the top end of the phase diagram now depends on the value of the charge $q$ carried by the matter field. This is most easily seen in the unitary gauge, $\theta=0(\bmod 2 \pi)$. This is literally the same as the London gauge of superconductors. In this gauge, in the limit of $\lambda \rightarrow \infty$ the gauge field on each link is constrained to take the values

$$
\begin{equation*}
A_{j}(\vec{x})=\frac{2 \pi}{q} p_{j}(\vec{x}) \tag{9.85}
\end{equation*}
$$

where $p_{j}(\vec{x})=0,1, \ldots, q-1$ are integers $(\bmod q)$. This means that the gauge fields are now $q$ discrete possible angles, the integer multiples of $2 \pi / q$.

Hence, in this limit we obtain a gauge theory with a discrete gauge group $\mathbb{Z}_{q}$. In particular, for $q=2$ the $\mathrm{U}(1)$ gauge group has been "broken" down to $\mathbb{Z}_{2}$, and becomes a $\mathbb{Z}_{2}$ gauge theory. For general $q$, along the top of the phase diagram the $\mathrm{U}(1)$ gauge theory coupled to a charge- $q$ matter field is equivalent to a discrete
gauge theory with gauge group $\mathbb{Z}_{q}$. For $q>1$ this theory has a phase transition at a critical value $g_{\mathrm{c}}(q)$ from a confining strong-coupling phase to a deconfining weak-coupling phase. However, for $q=1$ the gauge fields are effectively frozen out because they have to take the value $0(\bmod 2 \pi)$. Hence, for $q=1$ there is no phase transition along the top of the diagram, whereas there is a (continuous) phase transition for $q \geq 2$ between a confining phase and a deconfining phase.

The behavior of the Wilson loops depends on the charge $q$ of the matter field and on the charge $r$ of the Wilson loop. Let us consider here only the Wilson loops with the smallest charge $r=1$. If the matter fields also carry charge $q=1$ the arguments used in the $\mathbb{Z}_{2}$ case also apply here: the "probe" loop is "algebraically" screened by the dynamical matter field (which carries the same charge) by means of the pair-creation process we described above. Thus for $q=1$ the Wilson loops have a perimeter law but the theory is still confining.

However, for $q \geq 2$ we can either probe the system with a Wilson loop with charge $r=1$ or $r=2$ (or higher). If the Wilson loop carries charge $r=1$, the pair-creation mechanism no longer works since charge-2 particles cannot screen charge- 1 particles (unless the charges condense). Thus, the charge $r=1$ Wilson loop retains its area-law behavior but a charge $r=2$ Wilson loop will obey a perimeter-law scaling. Thus, in $\mathrm{U}(1)$ gauge theories with matter fields that carry charge $q>1$, charge $r=1$ Wilson loops obey an area law in the confining region of the phase diagram. On the other hand, in the deconfined phase all Wilson loops follow a perimeter law, regardless of their charge $r$. The local excitations of the deconfined phase are plaquette excitations with magnetic flux $2 \pi p / q$ (with $p=$ $1, \ldots, q-1)$ and essentially free electric charges that carry charge 1 . Therefore, we do have two distinct phases.

The deconfined phase is topological. It has a non-trivial behavior under the large gauge transformations of the discrete gauge symmetry, $\mathbb{Z}_{q}$. Indeed we can now repeat almost verbatim the arguments we used in the $\mathbb{Z}_{2}$ case. In this system too we can define magnetic 't Hooft holonomies along the two non-contractible paths of the torus. The elementary magnetic ('t Hooft) holonomy now is

$$
\begin{equation*}
\tilde{W}_{j}=e^{i \frac{2 \pi}{q} \sum_{\vec{x}} \Theta\left[\gamma_{j}\right] \epsilon_{j k} L_{k}(\vec{x})} \tag{9.86}
\end{equation*}
$$

where $\gamma_{j}$ are the two non-contractible loops (of the torus) on the dual lattice, with $\Theta\left[\gamma_{j}\right]=1$ on the links of the direct lattice crossed by the path $\gamma_{j}$ and $\Theta\left[\gamma_{j}\right]=0$ otherwise (as in the example depicted in Fig. 9.2(a)). The fundamental Wilson and 't Hooft holonomies now form an algebra that generalizes Eq. (9.69) to

$$
\begin{align*}
& W_{\gamma_{1}} \tilde{W}_{\gamma_{2}}=e^{i \frac{2 \pi}{q}} \tilde{W}_{\gamma_{2}} W_{\gamma_{1}}, \quad W_{\gamma_{2}} \tilde{W}_{\gamma_{1}}=e^{i \frac{2 \pi}{q}} \tilde{W}_{\gamma_{1}} W_{\gamma_{2}}  \tag{9.87}\\
& {\left[W_{\gamma_{1}}, \tilde{W}_{\gamma_{1}}\right]=0, \quad\left[W_{\gamma_{2}}, \tilde{W}_{\gamma_{2}}\right]=0}
\end{align*}
$$

For $q>2$ this type of algebraic structure gives rise to the concept of an anyon.

Deep in the deconfined phase the low-energy states are simultaneous eigenstates of the Hamiltonian and either the electric or the magnetic holonomies (but not both since they don't commute). We can once again take the eigenstates of the Hamiltonian to be eigenstates of the magnetic holonomies. Hence they are eigenstates of $\tilde{W}_{\gamma_{j}}$. It is straightforward to see that their eigenvalues are simply $e^{i 2 \pi p / q}$, with $p=0,1, \ldots, q-1$. Hence on a torus we have a degeneracy of $q^{2}$ since we have two non-contractible loops. These states are created by the repeated action of the two electric Wilson loops, which act as ladder operators. For a surface of genus $g$, i.e., with $g$ handles, the degeneracy is $\left(q^{2}\right)^{g}$.

In the rest of this chapter we will see how the ideas that we presented in the context of these gauge theories apply in the context of the problem of the phases of strongly correlated systems without long-range spin order. We will see that the valence-bond crystal phases result in the confining regimes of the effective gauge theories and that the spin-liquid phases occur when the gauge theory is deconfined. The condensation of objects carrying charges larger than the fundamental charge turns out to be a generic way to generate a deconfined phase. If the charge of the condensing field is such that the remaining gauge symmetry is discrete, the resulting phase is topological.

### 9.13 Duality transformation and dimer models

The suggestive analogy with CQED may lead us to think that the ground state of this system (after shifting) has weakly fluctuating gauge fields. In such a case one may expect that the elementary excitation should have $A_{j}$ small, slowly varying, and gapless, and that there should be a "photon" excitation in the spectrum. However, we must recall that we are working with staggered variables, and hence this "photon" should have wave vectors close to $\vec{Q}_{0}=(\pi, \pi)$. This is the resonon of Kivelson and Rokhsar, who argued that it exists for $-\bar{J}=V$.

However, this choice of couplings is very special. In fact, on the square lattice it represents a quantum critical point, and, away from $|\bar{J}|=V$, the resonon excitation does not exist! This is so since, as Polyakov showed, compact QED is a confining theory. His results, which he derived for the case $\rho(\vec{x})=0$ (i.e. the usual vacuum sector), imply that (i) the ground state is unique and it is a gauge singlet, (ii) the spectrum has a gap, and (iii) only gauge-invariant states are present (in particular, there is no "photon"). We will see now, by following Polyakov's ideas and using the methods of Banks, Myerson, and Kogut (Banks et al., 1977), and Fradkin and Susskind (1978), how these results are modified by the presence of a non-zero $\rho(\vec{x})$. Here I have kept the description, used in the first edition of this book, of QDMs in terms of compact quantum electrodynamics. The QDM can be described equally well by an Ising gauge theory in its "odd" sector, as is is done by Moessner et al. (2001).
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-344.jpg?height=537&width=398&top_left_y=197&top_left_x=661)

Figure 9.9 The sites of the direct lattice (filled circles) are labeled by $\vec{x}$, and the sites of the dual lattice (empty circles) are labeled by $\vec{r}$.

Since we expect, after Polyakov, that the physics of the ground state and lowlying excitations might not be accessible by means of a perturbative expansion around a state with some background classical field $A_{j}$, it is useful to identify the topological excitations of this system. If we consider the Euclidean evolution of the system (i.e. imaginary time), the field configurations which disorder the long-range properties of the classical background state look like Dirac magnetic monopoles with integer charge. Polyakov's observation was, and this will also be crucial to our problem, that fluctuations around a background configuration with monopoles induce an interaction among them that is identical to that of a (neutral) Coulomb gas in three (Euclidean) dimensions. Since the Coulomb gas has the property of screening of external charges for all values of the coupling constant, the ground state is unique and has a gap $\Delta \sim 1 / \xi_{\mathrm{s}}$, where $\xi_{\mathrm{s}}$ is the screening length of the monopole-anti-monopole plasma. Let us rederive these results and, at the same time, keep track of the sources $\rho(\vec{x})$.

The first step is a dual transformation. We will define this transformation in terms of the solution of the constraint equation, Eq. (9.34). Let $\vec{r}$ label the sites of the dual lattice, which is also a square lattice (Fig. 9.9). Let $N(\vec{r})$ be an operator defined on sites of the dual lattice with a spectrum labeled by the integers $N(\vec{r})$. Similarly, $B_{j}(\vec{r})$ is a classical background real-valued field that resides on the links of the dual lattice. I require that

$$
\begin{equation*}
E_{j}(\vec{x})=\epsilon_{j k}\left(\Delta_{k} N(\vec{r})+B_{k}(\vec{r})\right) \tag{9.88}
\end{equation*}
$$

where $\epsilon_{j k}$ is the Levi-Civita tensor and $i, j=1,2$. If we now substitute Eq. (9.88) into the constraint Eq. (9.34), then, in the subspace of physical states, we get

$$
\begin{align*}
\Delta_{j} E_{j}(\vec{x}) & =\epsilon_{j k}\left(\Delta_{j} \Delta_{k} N(\vec{r})+\Delta_{j} B_{k}(\vec{r})\right) \\
& =\epsilon_{j k} \Delta_{j} B_{k}(\vec{r}) \\
& =\rho(\vec{x}) \tag{9.89}
\end{align*}
$$

where I used the antisymmetry of the $\epsilon_{j k}$. Thus, the background fields $B_{k}(\vec{r})$ are determined by the condition

$$
\begin{equation*}
\epsilon_{j k} \Delta_{j} B_{k}(\vec{r})=\rho(\vec{x})=(-1)^{x_{1}+x_{2}} \tag{9.90}
\end{equation*}
$$

Notice that the electrostatic-like constraint Eq. (9.34) (i.e. Gauss's law) has become the magnetostatic constraint Eq. (9.90). This is the usual electric-magnetic duality.

The set of solutions of Eq. (9.90) is in one-to-one correspondence with the dimer configurations of the lattice since this equation is the dual version of the constraint, Eq. (9.26). Moreover, two different solutions $B_{k}(\vec{r})$ and $B_{k}^{\prime}(\vec{r})$ are related through a gauge transformation since their difference $\bar{B}_{k}(\vec{r}) \equiv B_{k}(\vec{r})-B_{k}^{\prime}(\vec{r})$ must satisfy

$$
\begin{align*}
\epsilon_{j k} \Delta_{j} \bar{B}_{k}(\vec{r}) & =\epsilon_{j k} \Delta_{j} B_{k}(\vec{r})-\epsilon_{j k} \Delta_{j} B_{k}^{\prime}(\vec{r}) \\
& =\rho(\vec{x})-\rho(\vec{x}) \\
& =0 \tag{9.91}
\end{align*}
$$

In other words, $\bar{B}_{k}(\vec{r})$ is curl-free. Hence, at least locally, $\bar{B}_{k}(\vec{r})$ must be a pure gradient

$$
\begin{equation*}
\bar{B}_{k}(\vec{r}) \equiv \Delta_{k} \Gamma(\vec{r}) \tag{9.92}
\end{equation*}
$$

Without loss of generality, $\Gamma(\vec{r})$ is taken to be an integer-valued function on the dual lattice.

A local change in the gauge of $B_{k}(\vec{r})$ can thus be absorbed into an appropriate redefinition of the operators $N(\vec{r})$,

$$
\begin{equation*}
N(\vec{r})=N^{\prime}(\vec{r})-\Gamma(\vec{r}) \tag{9.93}
\end{equation*}
$$

There exists, however, a set of $\bar{B}_{k}(\vec{r})$ that cannot be done away with by a suitable redefinition of the variables $N(\vec{r})$. They correspond to large gauge transformations, i.e. gauge transformations that change the value of the line integral (or sum) of $\bar{B}_{k}(\vec{r})$ along a non-contractible loop around the torus (see Fig. 9.6).

There are two generically non-contractible loops: one along the $x_{1}$ direction, $\gamma_{1}(\vec{r})$, and the other along the $x_{2}$ direction, $\gamma_{2}(\vec{r})$; where $\gamma_{1}(\vec{r})$ and $\gamma_{2}(\vec{r})$ go through the dual site $\vec{r}$ (Fig. 9.6). Thus the line integrals $I_{\gamma_{1}(\vec{r})}[\vec{B}]$ and $I_{\gamma_{2}(\vec{r})}[\vec{B}]$, usually referred to as holonomies, defined by

$$
\begin{align*}
& I_{\gamma_{1}(\vec{r})}[\vec{B}] \equiv \sum_{\gamma_{1}(\vec{r})} B_{1}(\vec{r}) \equiv \sum_{n_{1}=1}^{L} B_{1}\left(\vec{r}+n_{1} e_{1}\right)  \tag{9.94}\\
& I_{\gamma_{2}(\vec{r})}[\vec{B}] \equiv \sum_{\gamma_{2}(\vec{r})} B_{2}(\vec{r}) \equiv \sum_{n_{2}=1}^{L} B_{2}\left(\vec{r}+n_{2} e_{2}\right.
\end{align*}
$$

are invariant under ("small") gauge transformations (which satisfy periodic boundary conditions). However, ("large") gauge transformations, which do not respect the periodic boundary conditions, do change the values of $I_{\gamma_{1}(\vec{r})}[\vec{B}]$ and $I_{\gamma_{2}(\vec{r})}[\vec{B}]$.

The constraint of Eq. (9.40)

$$
\begin{equation*}
\sum_{\vec{x}, j} E_{j}^{2}(\vec{x})=\frac{L^{2}}{2} \tag{9.95}
\end{equation*}
$$

requires that there should be no bond occupied by more than one dimer. These restrictions imply that the only allowed large gauge transformations have to satisfy a uniformity condition. For instance, a large gauge transformation that raises $I_{\gamma_{1}(\vec{r})}[\vec{B}]$ by +1 everywhere has the form (see Fig. 9.10)

$$
\begin{equation*}
\bar{B}_{k}(\vec{r})=\delta_{r_{2}, n_{0}} \delta_{k, 1} \tag{9.96}
\end{equation*}
$$

where $n_{0}$ is an integer $1 \leq n_{0} \leq L$.
What is the meaning of these large gauge transformations? Recall that $E_{j}(\vec{x})$ is given by

$$
\begin{equation*}
E_{j}(\vec{x})=\epsilon_{j k}\left(\Delta_{k} N(\vec{r})+B_{k}(\vec{r})\right) \tag{9.97}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-346.jpg?height=642&width=783&top_left_y=1425&top_left_x=473)

Figure 9.10 A large gauge transformation.

If we regard the operators $N(\vec{r})$ as the quantum fluctuations and $B_{k}(\vec{r})$ as a classical background, we see that the configurations with $N(\vec{r})=0$ (or constant) have $E_{j}(\vec{x})=\epsilon_{j k} B_{k}(\vec{r})$. In other words, the classical background fields $B_{k}(\vec{r})$ represent a set of classical dimer configurations that can be regarded as the parent states for the quantum evolution of the system. Indeed, the line integral $I_{\gamma_{i}(\vec{r})}[\vec{B}]$ is then, from Eq. (9.33),

$$
\begin{align*}
I_{\gamma_{i}(\vec{r})}[\vec{B}] & =\sum_{\gamma_{i}(\vec{r})} B_{i}(\vec{r}) \\
& =\sum_{\gamma_{i}(\vec{x})} \epsilon_{j i} E_{j}(\vec{x}) \\
& =\epsilon_{j i} \sum_{n_{i}=1}^{L}(-1)^{x_{1}+x_{2}+n_{i}} L_{j}\left(\vec{x}+n_{i} e_{i}\right) \tag{9.98}
\end{align*}
$$

Thus, $I_{\gamma_{i}(\vec{r})}[\vec{B}]$ is the sum of the differences in the number of dimers occupying neighboring parallel links. This quantity is invariant under the dynamics of the QDM. Solutions that differ by local gauge transformations are equivalent to classical dimer configurations that differ by the "resonating" (or flipping) of a set (or sets) of plaquettes whose boundaries are contractible loops. Large gauge transformations correspond to processes in which a set of valence bonds circulate all the way around a non-contractible loop. Thus, the dimer configurations can be classified by the value of the circulation $\sum_{\gamma_{i}(\vec{r})} B_{i}(\vec{r})$ along a non-contractible loop. We can then identify $I_{\gamma_{i}(\vec{r})}[\vec{B}]$ with the winding number introduced by Rokhsar and Kivelson (1988).

Consider, for instance, configurations that belong to the class with vanishing winding numbers $\sum_{\gamma_{i}(\vec{r})} B_{i}(\vec{r})=0$. In the gauge $B_{1}(\vec{r})=0$, there are two possible solutions to Eq. (9.90):

$$
\begin{array}{ll}
B_{1}^{(1)}(\vec{r})=0, & B_{2}^{(1)}(\vec{r})=-\left(\frac{1+(-1)^{r_{1}}}{2}\right)(-1)^{r_{2}} \\
B_{1}^{(2)}(\vec{r})=0, & B_{2}^{(2)}(\vec{r})=+\left(\frac{1-(-1)^{r_{1}}}{2}\right)(-1)^{r_{2}} \tag{9.100}
\end{array}
$$

In the gauge $B_{2}(\vec{r})=0$, there are also two analogous solutions. It is easy to see that these solutions are in a one-to-one correspondence with the four degenerate columnar or Peierls states (Fig. 9.11). It is clear that there should be a connection between the degeneracy of the ground state and its winding number. Indeed, the number of distinct solutions of Eq. (9.90) for a sector with a given winding number is equal to the degeneracy of the ground state in that sector. Since the line integrals do not change under the dynamics and the $B_{k}$ terms determine the subspaces of states which are being considered, we expect that the winding number should
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-348.jpg?height=512&width=521&top_left_y=200&top_left_x=599)

Figure 9.11 A columnar state and the background configuration of the $B_{k}$ terms associated with it.
determine the ground-state degeneracy of these broken-symmetry states of the full quantum theory unless extra degeneracies occur, as a result of one or more modes becoming gapless. These arguments can be generalized to systems with valence bonds of finite but arbitrary length. In terms of the $1 / N$ expansion, this means that this degeneracy is valid order by order in the $1 / N$ expansion.

There also exist states with non-vanishing winding numbers, $I_{\gamma_{i}(\vec{r})}$. In this case the columns cannot reach all the way to the boundaries. For instance, a typical state with non-zero winding number $I_{\gamma_{2}}$ can be found by taking columnar states of total height $n$ and stacking them on top of each other after a horizontal shift of one lattice unit. States of this type are said to be tilted with a tilt (or slope) of $1 / n$. The staggered state, shown in Fig. 8.12(b), is an example of a tilted state with $n=1$ and has maximal winding number.

The columnar states (tilted or not) can be regarded as unidirectional dimerdensity waves. Their ground-state degeneracies are specified by the period (or wave length) of the density wave. For example, the columnar state has period 2. Other types of phases with bidirectional dimer-density-wave order can also exist. More generic states of this type have non-vanishing winding numbers along the two orthogonal directions. Although in the extreme classical limit not all of these states are allowed, some of them become possible once quantum fluctuations are taken into account. An example is the plaquette state in which the valence bonds resonate on a sublattice of plaquettes with period 2. States of this type are also found in the large- $N$ limit of the $\mathrm{Sp}(N)$ Hamiltonian (Read and Sachdev, 1991) and in some finite-size exact diagonalizations of the QDM (Leung et al., 1996). Numerical results indicate that the QDM on the square lattice has a direct quantum phase transition from a columnar phase to a staggered phase at the RokhsarKivelson (RK) point (with a possible plaquette phase intervening in between).

However, simple short-range modifications of the interactions described in the QDM Hamiltonian also allow a variety of other tilted states to become accessible, including states with asymptotically incommensurate values of the tilt that exhibit complex phase diagrams (Fradkin et al., 2004; Vishwanath et al., 2004; Papanikolaou et al., 2007a).

Now that we have solved the constraint Eq. (9.34), we can write the dual form of the Hamiltonian. I will assume that the constraint has been solved in a sector with winding number $I_{\gamma_{i}(\vec{r})}[\vec{B}], i=1,2$. We will have to find which sector yields the lowest ground-state energy. The solution of the constraint, Eq. (9.34),

$$
\begin{equation*}
E_{j}(\vec{x})=\epsilon_{j k}\left[\Delta_{k} N(\vec{r})+B_{k}(\vec{r})\right] \tag{9.101}
\end{equation*}
$$

is one of the equations we need. We also need to define the momentum $P(\vec{r})$ canonically conjugate to $N(\vec{r})$ such that

$$
\begin{equation*}
\left[P(\vec{r}), N\left(\vec{r}^{\prime}\right)\right]=i \delta_{\vec{r}, \vec{r}^{\prime}} \tag{9.102}
\end{equation*}
$$

Since the spectrum of $N(\vec{r})$ is the set of integers, the operator $P(\vec{r})$ should have eigenvalues $P(\vec{r})$ in the range $0 \leq P(\vec{r})<2 \pi$. It is easy to see that the circulation $\sum_{\text {plaquette }} A_{j}(\vec{x})$, around an elementary plaquette centered at dual site $\vec{r}$, has the same effect on its Hilbert space as $P(\vec{r})$ has on the integer $N(\vec{r})$. More specifically, according to Eqs. (9.22) and (9.33), the raising operator $\exp \left(i \sum_{\text {plaquette }} A_{j}(\vec{x})\right)$ shifts the eigenvalues of $E_{j}(\vec{x})$ by +1 on the oriented path around the plaquette. This has exactly the effect of raising $N(\vec{r})$, on the dual lattice, also by +1 . Thus, we identify

$$
\begin{equation*}
\sum_{\text {plaquette }} A_{j}(\vec{x}) \equiv P(\vec{r}) \tag{9.103}
\end{equation*}
$$

Alternatively, it is easy to check the consistency of this identification by an explicit calculation of the commutation relations.

The Hamiltonian dual to that of Eq. (9.41) is

$$
\begin{align*}
H= & \frac{1}{2 k}\left(\sum_{\vec{r}, k}\left(\Delta_{k} N(\vec{r})+B_{k}(\vec{r})\right)^{2}-\frac{L^{2}}{2}\right)-2 \bar{J} \sum_{\vec{r}} \cos (P(\vec{r})) \\
& +\frac{V}{2} \sum_{\vec{r}}\left[\left(\Delta_{1}\left(\Delta_{1} N(\vec{r})+B_{1}(\vec{r})\right)\right)^{2}+\left(\Delta_{2}\left(\Delta_{2} N(\vec{r})+B_{2}(\vec{r})\right)\right)^{2}\right] \\
& -\frac{V L^{2}}{2} \tag{9.104}
\end{align*}
$$

where the limit $k \rightarrow 0$ is always meant.
Also, in principle, all winding sectors have to be considered. We will keep the sector which minimizes the ground-state energy. All the inequivalent solutions of Eq. (9.90) will represent degenerate states. The manifold of degenerate states is
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-350.jpg?height=671&width=784&top_left_y=187&top_left_x=470)

Figure 9.12 The configuration $\{N(\vec{r})\}$ parametrizes a surface in the solid-on-solid model.
closed under the group of lattice translations and rotations by $\pi / 2$. From now on we will work within a given winding sector.

On comparing the QDM Hamiltonian, Eq. (9.41), and its dual, Eq. (9.104), we notice several features: (i) the kinetic- and potential-energy terms have been exchanged; (ii) the degrees of freedom in Eq. (9.41) are phases (i.e. elements of the group $\mathrm{U}(1)$ ), whereas the degrees of freedom in Eq. (9.104) are integers; and (iii) the Hamiltonian of Eq. (9.104) has a global symmetry $N(\vec{r}) \rightarrow N^{\prime}(\vec{r})+n_{0}$ (with $n_{0}$ an arbitrary integer), whereas Eq. (9.41) has a local gauge symmetry. These features are present for all systems related through a duality transformation except (iii), which holds only in $(2+1)$ dimensions (Fradkin and Susskind, 1978).

A system with integer-valued degrees of freedom is usually referred to as a discrete Gaussian (DG) or solid-on-solid (SOS) model. It was originally introduced by Onsager for the study of the statistical mechanics of classical interfaces (Chaikin and Lubensky, 1995). In that context $N(\vec{r})$ represents the height of a column of identical atoms standing atop the lattice site $\vec{r}$. The set of values of $\{N(\vec{r})\}$ can then be regarded as the surface (or interface) of a 3D solid (Fig. 9.12). The constraint implied by the limit $k \rightarrow 0$ represents a restriction on this DG model. The last term in Eq. (9.104), which represents a next-nearest-neighbor interaction between atoms, has the form of a Laplacian coupling. The second term is responsible for the quantum dynamics of the system. There is a very large body of literature on SOS and DG models. We will not discuss it here. The most studied such system has the classical Hamiltonian

$$
\begin{equation*}
H_{\mathrm{c}}=\frac{\gamma}{2} \sum_{\vec{r}, k=1,2}\left(\Delta_{k} N\left(\vec{r}+e_{k}\right)\right)^{2} \tag{9.105}
\end{equation*}
$$

where $\gamma$ is a constant. Most studies deal with this classical problem, although the role of quantum fluctuations has also been considered.

Classically, systems such as the SOS model usually exhibit two distinct phases. At high temperatures, $T>T_{\mathrm{R}}$, the interface has large transversal fluctuations and the surface is rough: the r.m.s. $\left\langle N^{2}\right\rangle \sim \log L$ (where $L$ is the linear size of the system) and has power-law decaying correlations. Instead, at low temperatures, $T<T_{\mathrm{R}}$, the interface is smooth: the r.m.s. fluctuations of the surface are massive with exponentially decaying correlations. The temperature $T_{\mathrm{R}}$ is the location of a critical point at which this roughening transition takes place. The natural correlation functions of this problem are the height-height correlation function $G\left(\vec{r}-\vec{r}^{\prime}\right)$,

$$
\begin{equation*}
G\left(\vec{r}-\vec{r}^{\prime}\right)=\left\langle N(\vec{r})-N\left(\vec{r}^{\prime}\right)\right\rangle \tag{9.106}
\end{equation*}
$$

and the order-parameter correlation function $g_{\alpha}\left(\vec{r}-\vec{r}^{\prime}\right)$,

$$
\begin{equation*}
g_{\alpha}\left(\vec{r}-\vec{r}^{\prime}\right)=\left\langle e^{i \alpha N(\vec{r})} e^{-i \alpha N\left(\vec{r}^{\prime}\right)}\right\rangle \tag{9.107}
\end{equation*}
$$

where $\alpha$ is an arbitrary angle.
For the classical unrestricted system, one finds the asymptotic behavior of $g_{\alpha}(R)$, where $R \equiv\left|\vec{r}-\vec{r}^{\prime}\right| \gg a_{0}$ ( $a_{0}$ is the lattice constant), to be

$$
g_{\alpha}(R) \approx \begin{cases}M^{2}+\text { constant } \times e^{-\frac{R}{\xi(T)}} & \text { for } T<T_{\mathrm{R}} \text { (smooth phase) }  \tag{9.108}\\ \text { constant } \times R^{-\eta(\alpha, T)} & \text { for } T>T_{\mathrm{R}} \text { (rough phase) }\end{cases}
$$

where $\xi(T)$ is the correlation length, $M^{2}$ is the square of the order parameter, and the exponent $\eta$ is a function of $\alpha$ and the temperature. The corresponding behavior of $G(R)$ is

$$
G(R) \approx \begin{cases}m^{2}+\text { constant } \times e^{-\frac{R}{\xi(T)}} & \text { for } T<T_{\mathrm{R}} \text { (smooth phase) }  \tag{9.109}\\ \operatorname{constant} \times \ln \left(R / a_{0}\right) & \text { for } T<T_{\mathrm{R}} \text { (rough phase) }\end{cases}
$$

where $m^{2}$ represents the square of the average height, $\langle N(\vec{r})\rangle$.
The quantum fluctuations change this picture completely. If we ignore the restriction $(k \rightarrow 0)$ and neglect the effects of frustration (introduced by the fields $B_{k}$ ), we arrive at the quantum DG model.

Let us introduce a path integral for this system. It will be convenient for us to work in imaginary time so that we can also discuss thermal fluctuations. At a non-zero temperature $T$, the partition function of the quantum system is

$$
\begin{equation*}
Z=\operatorname{tr} e^{-\beta H} \tag{9.110}
\end{equation*}
$$

where $\beta=1 / T$ and $H$ is the Hamiltonian of Eq. (9.104). In order to derive a path integral we proceed in the usual fashion (Feynman and Hibbs, 1965). We first split
up the imaginary-time interval $0 \leq \tau \leq \beta$ into $N_{\tau}$ time-steps, each of size $\Delta_{\tau}$, such that

$$
\begin{equation*}
N_{\tau} \Delta_{\tau}=\beta \tag{9.111}
\end{equation*}
$$

The limit $\Delta_{\tau} \rightarrow 0$ and $N_{\tau} \rightarrow \infty$ is always implied. Next, we write

$$
\begin{align*}
Z & =\lim _{\substack{\Delta_{\tau} \rightarrow 0 \\
N_{\tau} \rightarrow \infty}} \operatorname{tr}\left(\left[e^{-\left(\Delta_{\tau}\right) H}\right]^{N_{\tau}}\right) \\
& \equiv \lim _{\substack{\Delta_{\tau} \rightarrow 0 \\
N_{\tau} \rightarrow \infty}} \operatorname{tr}\left(\left[e^{-\left(\Delta_{\tau}\right) H_{\mathrm{kin}}} e^{-\left(\Delta_{\tau}\right) H_{\mathrm{pot}}}\right]^{N_{\tau}}\right) \tag{9.112}
\end{align*}
$$

where we have split the Hamiltonian into a kinetic-energy term (the second term of Eq. (9.104)) $H_{\text {kin }}$ and a potential-energy term $H_{\text {pot }}$ (the rest). The next step is to introduce a resolution of the identity in terms of a complete set of eigenstates $|\{N(\vec{r}, t)\}\rangle$ of the operators $\{N(\vec{r}, t)\}$ between neighboring factors of $e^{-\beta H}$ :

$$
\begin{equation*}
Z=\lim _{\substack{\Delta_{\tau} \rightarrow 0 \\ N_{\tau} \rightarrow \infty}} \sum_{\{N(\vec{r}, j)\}=-\infty}^{+\infty} \prod_{j=1}^{N_{\tau}}\langle\{N(\vec{r}, j)\}| e^{-\Delta_{\tau} H}|\{N(\vec{r}, j+1)\}\rangle \tag{9.113}
\end{equation*}
$$

with periodic boundary conditions in time, i.e.

$$
\begin{equation*}
\left|\left\{N\left(\vec{r}, N_{\tau}+1\right)\right\}\right\rangle \equiv|\{N(\vec{r}, 1)\}\rangle \tag{9.114}
\end{equation*}
$$

In Eq. (9.113) the integer $j$ represents the $j$ th time-step and $\tau_{j}=\tau_{0}+j \Delta_{\tau}$.
Let us compute the matrix elements

$$
\begin{align*}
& \langle\{N(\vec{r}, j)\}| e^{-\Delta_{\tau} H}|\{N(\vec{r}, j+1)\}\rangle \\
& \quad \approx\langle\{N(\vec{r}, j)\}| e^{-\Delta_{\tau} H_{\mathrm{kin}}} e^{-\Delta_{\tau} H_{\mathrm{pot}}}|\{N(\vec{r}, j+1)\}\rangle  \tag{9.115}\\
& \quad=\langle\{N(\vec{r}, j)\}| e^{-\Delta_{\tau} H_{\mathrm{kin}}}|\{N(\vec{r}, j+1)\}\rangle e^{-\Delta_{\tau} H_{\mathrm{pot}}(\{N(\vec{r}, j+1)\})}
\end{align*}
$$

where I used the facts that $\Delta_{\tau}$ is small and that $H_{\mathrm{pot}}$ is diagonal in the basis $|\{N(\vec{r}, j)\}\rangle$. In fact,

$$
\begin{equation*}
e^{-\Delta_{\tau} H_{\mathrm{pot}}}|\{N(\vec{r}, j)\}\rangle=e^{-\Delta_{\tau} H_{\mathrm{pot}}(\{N(\vec{r}, j+1)\})}|\{N(\vec{r}, j)\}\rangle \tag{9.116}
\end{equation*}
$$

with an eigenvalue $H_{\text {pot }}(\{N(\vec{r}, j)\})$ given by

$$
\begin{align*}
H_{\mathrm{pot}}(\{N(\vec{r}, j)\})= & \frac{1}{2 k}\left(\sum_{\vec{r}, k=1,2}\left(\Delta_{k} N(\vec{r}, j)+B_{k}(\vec{r}, j)\right)^{2}-\frac{L^{2}}{2}\right) \\
& +\frac{V}{2} \sum_{\vec{r}, k=1,2}\left(\Delta_{k}^{2} N(\vec{r}, j)+\Delta_{k} B_{k}(\vec{r}, j)\right)^{2}-\frac{V L^{2}}{2} \tag{9.117}
\end{align*}
$$

The off-diagonal matrix elements

$$
\begin{align*}
\langle\{N(\vec{r}, j)\}| e^{-\Delta_{\tau} H_{\mathrm{kin}}} \mid & \{N(\vec{r}, j+1)\}\rangle \\
& =\langle\{N(\vec{r}, j)\}| e^{2\left(\Delta_{\tau}\right) \bar{J} \sum_{\vec{r}} \cos (P(\vec{r}))}|\{N(\vec{r}, j+1)\}\rangle \tag{9.118}
\end{align*}
$$

can be evaluated by repeated use of the expansion

$$
\begin{equation*}
e^{z \cos p}=\sum_{l=-\infty}^{\infty} I_{l}(z) e^{i l p} \tag{9.119}
\end{equation*}
$$

where $I_{l}(z)$ is the Bessel function of order $l$ of imaginary argument. The matrix elements of Eq. (9.118) are products of matrix elements of the form

$$
\begin{equation*}
\left\langle N_{j}\right| e^{2\left(\Delta_{\tau}\right) \bar{J} \cos (P)}\left|N_{j+1}\right\rangle \tag{9.120}
\end{equation*}
$$

which we can write in the form

$$
\begin{equation*}
\sum_{l=-\infty}^{+\infty}\left\langle N_{j}\right| e^{i l P}\left|N_{j+1}\right\rangle I_{l}\left(2 \bar{J} \Delta_{\tau}\right)=I_{\left|N_{j+1}-N_{j}\right|}\left(2 \bar{J} \Delta_{\tau}\right) \tag{9.121}
\end{equation*}
$$

In this equation we have used the orthogonality of the states $\left|N_{j}\right\rangle$. For convenience, and simplicity, we will use the following approximate expression for the Bessel function:

$$
\begin{equation*}
I_{l}(z)=\frac{1}{\sqrt{2 \pi}} e^{z} e^{-\frac{l^{2}}{2 z}}\left(1+O\left(z^{-1}\right)\right) \tag{9.122}
\end{equation*}
$$

On putting it all together, we can write the partition function in the suggestive form

$$
\begin{equation*}
Z=\lim _{\substack{\Delta_{\tau} \rightarrow 0 \\ N_{\tau} \rightarrow \infty}} \sum_{\{N(\vec{r}, j)\}} e^{-\mathcal{S}[N]} \tag{9.123}
\end{equation*}
$$

where the Euclidean (discretized) action $\mathcal{S}[N]$ is given by $\left(j=1, \ldots, N_{\tau}\right)$

$$
\begin{align*}
\mathcal{S}[N]= & \frac{1}{4 \bar{J} \Delta_{\tau}} \sum_{\vec{r}, j}\left[\Delta_{0} N(\vec{r}, j)\right]^{2} \\
& +\frac{\Delta_{\tau}}{2 k}\left(\sum_{\substack{\vec{r}, j \\
l=1,2}}\left(\Delta_{l} N(\vec{r}, j)+B_{l}(\vec{r}, j)\right)^{2}-\frac{L^{2}}{2} N_{\tau}\right) \\
& +\frac{V \Delta_{\tau}}{2} \sum_{\substack{\vec{r}, j \\
l=1,2}}\left(\left(\Delta_{l}^{2} N(\vec{r}, j)+\Delta_{l} B_{l}(\vec{r}, j)\right)^{2}\right) \tag{9.124}
\end{align*}
$$

I have also used the notation

$$
\begin{equation*}
\Delta_{0} N(\vec{r}, j) \equiv N(\vec{r}, j)-N(\vec{r}, j-1) \tag{9.125}
\end{equation*}
$$

Thus the quantum partition function of the dimer model is given by the classical partition function of a discrete Gaussian model in three Euclidean dimensions on a cubic lattice of size $L^{2} N_{\tau}$. This system looks very similar to its 2D classical counterpart Eq. (9.105), except for the fact that it is frustrated ( $B_{k} \neq 0$ ), restricted ( $k \rightarrow 0$ ), and has second-nearest-neighbor interactions $(V \neq 0)$ in space.

If we work in the sector with zero winding number, the configurations with $N(\vec{r}, j)=n_{0}$, which is a constant, represent the columnar states. Conversely, in the sector with maximal winding number, for instance $\sum_{\gamma_{1}(\vec{r})} B_{1}(\vec{r})=L / 2$, the configuration $N(\vec{r}, j)=n_{0}$ is a staggered crystal. Which state dominates can be discerned only by solving the partition function Eq. (9.123). The action $\mathcal{S}[N]$, Eq. (9.124), is such that, for small $\Delta_{\tau}$, the fluctuations of $N(\vec{r}, t)$ in time tend to be suppressed. The columnar states have a finite degeneracy and a finite entropy, whereas the staggered states, due to the constraints, have virtually no excitations. Numerical simulations indicate that, for $V$ small and positive, the columnar state is stable. For large $V$ the staggered state should win, at least at low temperatures. Hence we expect that the QDGM should be in a smooth phase, albeit degenerate (see the discussion above). We will see below that at the quantum phase transition between the columnar (or plaquette) phase and the staggered phase the higher-derivative terms of Eq. (9.124) (associated with $V$ ) play an important role.

### 9.14 Quantum-dimer models and monopole gases

In Section 9.5 we used an intuitive argument which indicated that monopole configurations of the gauge fields play a fundamental role in this problem. We will now examine this issue more closely for the case $V=0$.

The easiest way to relate the QDM to a gas of monopoles is to apply the Poisson summation formula

$$
\begin{equation*}
\sum_{n=-\infty}^{+\infty} f(n)=\sum_{m=-\infty}^{+\infty} \int d \phi e^{i 2 \pi m \phi} f(\phi) \tag{9.126}
\end{equation*}
$$

to the three-dimensional discrete Gaussian model with action Eq. (9.124). This amounts to replacing all the integer variables $\{N(\vec{r}, j)\}$ by a continuous variable $\{\phi(r)\}$ and another set of integers $\{m(r)\}$, where now $r=\left(r_{0}, r_{1}, r_{2}\right)$ are 3D lattice vectors in Euclidean space-time:

$$
Z=\lim _{\substack{\Delta_{\tau} \rightarrow 0 \\ N_{\tau} \rightarrow \infty}} \sum_{\{S\}} e^{-\mathcal{S}[S]}
$$

$$
\begin{align*}
&= \lim _{\substack{\Delta_{\tau} \rightarrow 0 \\
N_{\tau} \rightarrow \infty}} \sum_{\{m(r)\}} \int \mathcal{D} \phi \exp \left(2 \pi i \sum_{r} m(r) \phi(r)-\mathcal{S}[\phi]\right) \\
&=\lim _{\substack{\Delta_{\tau} \rightarrow 0 \\
N_{\tau} \rightarrow \infty}} \sum_{\{m(r)\}} \int \mathcal{D} \phi \exp \left[\frac{\Delta_{\tau}}{2 k}\left(\frac{N_{\tau} L^{2}}{2}-\sum_{r ; l=1,2} B_{l}^{2}(r)\right)\right. \\
&\left.\quad-\frac{V \Delta_{\tau}}{2} \sum_{r ; l=1,2}\left(\Delta_{l} B_{l}(r)\right)^{2}\right] \\
& \times \exp \left\{-\sum_{r}\left[\frac{1}{4 \bar{J} \Delta_{\tau}}\left(\Delta_{0} \phi(r)\right)^{2}\right.\right. \\
&\left.\left.+\frac{\Delta_{\tau}}{2 k} \sum_{l=1,2}\left(\Delta_{l} \phi(r)\right)^{2}+\frac{V \Delta_{\tau}}{2} \sum_{l=1,2}\left(\Delta_{l}^{2} \phi(r)\right)^{2}\right]\right\} \\
& \times \exp \left[-\sum_{r} \phi(r)\left(2 \pi i m(r)+\frac{\Delta_{\tau}}{k} \sum_{l=1,2} \Delta_{l} B_{l}(r)\right.\right.
\end{aligned} \quad \begin{aligned}
& \left.\left.\quad+V \Delta_{\tau} \sum_{l=1,2}\left(\Delta_{l} B_{l}(r)\right)^{2}\right)\right]
\end{align*}
$$

We now notice the important fact that the action of Eq. (9.127) (and the partition function) is invariant under a uniform constant (in space and imaginary time) shift of the field $\phi(r) \rightarrow \phi(r)+\bar{\phi}$, provided that the integer-valued fields $m(r)$ satisfy the "neutrality" condition

$$
\begin{equation*}
\sum_{r} m(r)=0 \tag{9.128}
\end{equation*}
$$

We will see below that this condition translates into the requirement that the monopole gas be neutral.

Since $\mathcal{S}[\phi]$ is quadratic in $\phi$, these fields can be integrated out. Assuming periodic boundary conditions and working in the zero-tilt sector, we obtain the result

$$
\begin{align*}
Z= & \lim _{\substack{\Delta_{\tau} \rightarrow 0 \\
N_{\tau} \rightarrow \infty}} \exp \left[\frac{\Delta_{\tau}}{2 k}\left(\frac{N_{\tau} L^{2}}{2}-\sum_{r, k=1,2} B_{k}^{2}(\vec{r})\right)\right]\left(\frac{\operatorname{Det} M}{2 \pi}\right)^{-1 / 2} \\
& \times \exp \left[+\frac{1}{2}\left(\frac{\Delta_{\tau}}{k}\right)^{2} \sum_{r, r^{\prime}} \epsilon_{\alpha \mu \lambda} \Delta_{\lambda}^{r} B_{\mu}(r) G_{0}\left(r-r^{\prime}\right) \epsilon_{\alpha \nu \rho} \Delta_{v}^{r^{\prime}} B_{\rho}\left(r^{\prime}\right)\right] Z_{\mathrm{CG}} \tag{9.129}
\end{align*}
$$

where $Z_{C G}$ (defined below) is the partition function for a generalized Coulomb gas and

$$
\begin{equation*}
\operatorname{Det} M=\operatorname{Det}\left(\frac{1}{2 \bar{J} \Delta_{\tau}} \Delta_{0}^{2}+\frac{\Delta_{\tau}}{k} \sum_{j=1,2} \Delta_{j}^{2}-V \Delta_{\tau}\left(\sum_{j=1,2} \Delta_{j}^{2}\right)^{2}\right) \tag{9.130}
\end{equation*}
$$

The Green function associated with the operator $M$ is $G_{0}\left(r-r^{\prime}\right)$, the 3D anisotropic lattice Green function, which is defined by

$$
\begin{equation*}
-\left(\frac{1}{2 \bar{J} \Delta_{\tau}} \Delta_{0}^{2}+\frac{\Delta_{\tau}}{k} \sum_{j=1,2} \Delta_{j}^{2}-V \Delta_{\tau}\left(\sum_{j=1,2} \Delta_{j}^{2}\right)^{2}\right) G_{0}\left(r-r^{\prime}\right)=\delta_{r, r^{\prime}} \tag{9.131}
\end{equation*}
$$

(the minus sign comes from a "partial integration").
Then the partition function $Z$ or Eq. (9.129) is, up to an essentially uninteresting factor, proportional to the partition function of a generalized 3D Coulomb gas $Z_{\mathrm{CG}}$, which is given by

$$
\begin{equation*}
Z_{\mathrm{CG}}=\sum_{\{m(r)\}}^{\prime} \exp \left(-2 \pi^{2} \sum_{r, r^{\prime}} m(r) G_{0}\left(r-r^{\prime}\right) m\left(r^{\prime}\right)\right) \exp \left(2 \pi i \sum_{r} m(r) \Psi(r)\right) \tag{9.132}
\end{equation*}
$$

where $r=(\vec{r}, \tau)$ runs over the labels of the 3D cubic lattice. Just as in our discussion of the 2D Coulomb gas of Chapter 4, this partition function is constrained (indicated by the prime label in Eq. (9.132)) to configurations that obey the condition of overall charge (monopole charge in this case) neutrality, Eq. (9.128).

This partition function differs from the usual one for a Coulomb gas by the complex phase factors in Eq. (9.132), which are expressed in terms of the phase $\Psi(r)$,

$$
\begin{equation*}
\Psi(r)=\sum_{r^{\prime}} G_{0}\left(r-r^{\prime}\right) \Delta_{l}^{r^{\prime}} B_{l}\left(r^{\prime}\right) \tag{9.133}
\end{equation*}
$$

In the thermodynamic limit $\left(L, N_{\tau} \rightarrow \infty\right)$ (Banks et al., 1977) and at zero temperature, $G_{0}\left(r-r^{\prime}\right)$ is given by

$$
\begin{align*}
G_{0}\left(r-r^{\prime}\right)= & \int_{-\pi}^{\pi} \frac{d^{3} q}{(2 \pi)^{3}} \\
& \times \frac{\frac{1}{4} e^{i \vec{q} \cdot\left(\vec{r}-\vec{r}^{\prime}\right)}}{\left(1 /\left(2 \bar{J} \Delta_{\tau}\right)\right) \sin ^{2}\left(q_{0} / 2\right)+\sum_{j=1,2}\left(\Delta_{\tau} / k\right) \sin ^{2}\left(q_{j} / 2\right)} \tag{9.134}
\end{align*}
$$

In the time-continuum limit we find $\left(\omega \equiv \Delta_{\tau} q_{0}\right)$

$$
\begin{align*}
\lim _{\Delta_{\tau} \rightarrow 0} G_{0}\left(\vec{r}-\vec{r}^{\prime}, \tau-\tau^{\prime}\right)= & \lim _{\Delta_{\tau} \rightarrow 0} \int_{-\frac{\pi}{\Delta_{\tau}}}^{\frac{\pi}{\Delta_{\tau}}} \frac{d \omega}{2 \pi} \int_{-\pi}^{\pi} \frac{d^{2} q}{(2 \pi)^{2}} \\
& \times \frac{e^{i\left(\omega\left(\tau-\tau^{\prime}\right)+\vec{q} \cdot\left(\vec{r}-\vec{r}^{\prime}\right)\right)}}{\omega^{2} /(2 \bar{J})+\left(4 \Delta_{\tau} / k\right) \sum_{j=1,2} \sin ^{2}\left(q_{j} / 2\right)} \tag{9.135}
\end{align*}
$$

At long distances $\left(R=\left|\vec{r}-\vec{r}^{\prime}\right| \gg a_{0}\right)$, and at long (Euclidean) times $(\bar{\tau}=$ $\left.\left|\tau-\tau^{\prime}\right| \gg \Delta_{\tau}\right), G_{0}(R, \bar{\tau})$ has the asymptotic behavior

$$
\begin{equation*}
G_{0}(R, \bar{\tau}) \approx \frac{k}{4 \pi} \frac{1}{\sqrt{\bar{\tau}^{2}+\left(2 \bar{J} \Delta_{\tau} k\right) R^{2}}} \tag{9.136}
\end{equation*}
$$

Except for the anisotropy $\left(2 \bar{J} \Delta_{\tau} / k \neq 1\right)$, this is just the 3D Coulomb interaction.
Thus, this problem is equivalent to a gas of monopoles (and anti-monopoles) obeying overall (magnetic) charge neutrality. The monopoles behave like a gas of charged particles (of both signs) in three dimensions, with an effective interaction $V_{\text {eff }}$ (again regularized at short distances), which in the long-distance limit is given by

$$
\begin{equation*}
V_{\mathrm{eff}}(R, \bar{\tau})=2 \pi^{2} G_{0}(R, \bar{\tau}) \approx \frac{\pi k}{2} \frac{1}{\sqrt{\bar{\tau}^{2}+\left(2 \bar{J} \Delta_{\tau} / k\right) R^{2}}} \tag{9.137}
\end{equation*}
$$

The total partition function is

$$
\begin{align*}
Z= & \text { constant }\left(\frac{\operatorname{Det} M}{2 \pi}\right)^{-1 / 2} \\
& \times \sum_{\{m(r)\}}^{\prime} \exp \left(-\frac{1}{2} \sum_{r, r^{\prime}} m(r) V_{\mathrm{eff}}\left(r, r^{\prime}\right) m\left(r^{\prime}\right)+2 \pi i m(r) \Psi(r)\right) \tag{9.138}
\end{align*}
$$

where $\operatorname{Det} M$ is given in Eq. (9.130).
The time-independent phase $\theta(r)=2 \pi \Psi(r)$ (see Eq. (9.132)) turns out to take one of four possible values, one for each sublattice:

$$
\theta(r)= \begin{cases}-\pi / 4 & \text { for } r_{1} \text { even, } r_{2} \text { even }  \tag{9.139}\\ +3 \pi / 4 & \text { for } r_{1} \text { odd, } r_{2} \text { odd } \\ +\pi / 4 & \text { for } r_{1} \text { odd, } r_{2} \text { even } \\ -3 \pi / 4 & \text { for } r_{1} \text { even, } r_{2} \text { odd }\end{cases}
$$

The conclusion is that in this case, just as in Polyakov's compact electrodynamics (Polyakov, 1977), the system is also equivalent to a 3D Coulomb gas. The main difference between Polyakov's case (and the 2D case discussed in Section 4.6)
and the present problem is the presence of the phases $\theta(r)$ in the weight factors of the Coulomb gas. These phases can be thought of as Berry phases, since they arise from non-trivial overlaps of the evolution of state of the system at nearby times. They originate from the requirement that every site of the lattice belongs to one (and only one) dimer and that the time evolution can occur only by moving dimers around in a manner compatible with this constraint. In other terms, the Berry phases reflect the fact that the QDMs are described not by the vacuum sector of the gauge theory but by the sector of the Hilbert space with alternating sources on the lattice. Read and Sachdev (1991) derived these phases, following Haldane's original suggestion, by means of an adiabatic-process calculation. It is remarkable that we find the same answer even though we started from a regime in which a non-linear sigma model cannot possibly work. However, the Berry phases make a profound difference both in terms of the nature of the ground states and in terms of the quantum phase transitions.

In Chapter 4 we showed that there is a close connection between the 2D (neutral) Coulomb gas and the sine-Gordon field theory also in two dimensions. The same relationship also exists in three dimensions and it is at the root of Polyakov's analysis. To understand the differences between compact QED and the QDM, we will revisit the derivation of this effective theory and compare the two cases.

Let us return to Eq. (9.127) and, instead of integrating out the fields $\phi(r)$, we will attempt to integrate out the integer-valued monopole fields $m(r)$. We will assume that the monopoles are dilute and we will keep only the lowest charges, $m(r)=$ $\pm 1,0$. This amounts to assuming that the monopole fugacity is low and, at least formally, adding to the action of Eq. (9.127) an extra term of the form

$$
\begin{equation*}
\mathcal{S}_{\text {core }}=u \sum_{r} m(r)^{2} \tag{9.140}
\end{equation*}
$$

where the coupling constant $u$ can be regarded as a core energy of the monopoles and the fugacity is $z=2 e^{-u}$. This term penalizes charges with $|m| \geq 2$.

In the absence of the Berry phase terms of Eq. (9.139) (or, equivalently, if the background fields $B_{l}$ are absent), the gradient terms penalize fluctuations of the field $\phi$ varying on short length scales while the cosine operator will penalize fluctuations of the $\phi$ field away from constant integer values. Thus, in this case it is possible to effectively derive (or to propose) a simple candidate continuum field theory to describe this system, namely the sine-Gordon field theory, with the effective (Euclidean) action

$$
\begin{equation*}
S=\int d^{D} x\left[\frac{K}{2}\left(\partial_{\mu} \phi\right)^{2}-g \cos (2 \pi \phi)\right] \tag{9.141}
\end{equation*}
$$

where once again the sine-Gordon coupling constant $g=z / a^{D}$ is (essentially) the fugacity $z$ of the Coulomb gas, and the stiffness $K$, determined by the parameter $J$, is related to the inverse temperature of the Coulomb gas.

This is Polyakov's result (Polyakov, 1977). The main difference between the 2D and 3D cases is that the 3D Coulomb gas is always in a plasma phase. This can be seen by generalizing the RG that we discussed for the sine-Gordon theory in Section 4.6 for 2D to the 3D case. The extension of the RG for $D>2$ was done by Kosterlitz (1977), who showed that $D=2$ is a special case, and that for $D>2$ the Coulomb gas is always in a screening phase. In the language of the RG, for $D>2$ the cosine term is always relevant and its coupling constant $g$ flows to strong coupling. In this regime the discreteness of the charges of the Coulomb gas is obliterated by the strong fluctuations, leading to a phase with perfect (Debye) screening. For the same reason, the fluctuations of the field $\phi$ become suppressed, since in this phase the cosine operator pins the fluctuations of the coarse-grained height field $\phi$ to one of its minima. Thus, the field $\phi$ is effectively massive. In this phase monopoles with the lowest magnetic charge condense (or proliferate). As shown by Polyakov, monopole condensation implies that the Wilson loop has an area law and fundamental electric charges are confined.

The Berry phases change the structure of the effective-field theory. If we were to proceed naively, we would now integrate out the monopoles and obtain a discretized effective action for the field $\phi$. In this representation (as in the representation in terms of the height fields $N(r)$ ) the action is real, and here the fields $B_{j}$ couple to the field $\phi$ as a background static spatial gauge field whose curl represents the constraints of the quantum dimer model. In contrast, in the monopole-gas representation the action has an imaginary part, the Berry phases $\Psi(r)$, which is due to the background gauge fields $B_{j}$. However, what we want is an effective action for slowly varying fields. The background fields $B_{l}$ (which are the version of the Berry phases in this representation) make the low-energy configurations vary rapidly on the scale of the lattice spacing, corresponding to the changes in the height field needed to describe dimer configurations. In this form, the height configurations are not single-valued.

Thus, in order to derive an effective-field theory for this problem it is necessary to first coarse-grain the $\phi$ field. We note that the Berry phases take different values on different sublattices and hence favor states that break translation invariance. However, the average of the Berry phases on the four sublattices (or equivalently the average of the electric charges in the dual gauge-theory picture) is zero. Thus the "flat" configurations (coarse-grained over blocks of size $2 \times 2$ ) see zero background fields and are suitably slowly varying.

On the other hand, while fluctuations due to unit-charge monopoles are strongly affected by the Berry-phase terms, monopoles with charge multiples of 4 are not
affected by the Berry phases. Now, the Berry phases, and the background gauge fields $B_{l}$ which they represent, reflect the fact that the square lattice has two sublattices and that, in order to represent dimer configurations, we placed equal and opposite unit electric charges on the two sublattices. The redundancy of the height representation with period 4 simply reflects the fact that on a square lattice there are four possible dimer configurations associated with each site. This also means that configurations of the dual-height model are physically equivalent if the height variables are shifted by multiples of 4 . This condition restricts the structure and the allowed operators of the effective theory. In other terms, the effective-field theory we are seeking must describe fluctuations relative to some ideal state such as the columnar configurations. The theory we need must then treat all columnar states and therefore must also be able to describe the spontaneous breaking of rotational and translation invariance.

### 9.15 The quantum Lifshitz model

We have seen that QDMs (and their generalizations) can have different types of ordered and topological phases. We will now discuss the nature of the quantum phase transitions between them. We saw that on the square lattice the QDM at the RK point has a ground state with power-law correlations and gapless excitations. This result is surprising since the surrounding phases are either ordered VB crystals or a topological phase. This seemingly violates a general result from the theory of phase transitions, which is largely based on the analysis of Landau and Ginzburg, and was refined (and extended) by Wilson and Kadanoff (and Fisher) with the development of the RG, which states that (quantum and thermal) phase transitions between ordered phases are typically of first order. Thus we should generally expect that the phase transitions between different ordered dimer phases should also be first-order transitions.

This standard result of critical behavior in classical (Goldenfeld, 1992; Cardy, 1996) and quantum (Sachdev, 1999) critical phenomena, and in quantum field theory (Zinn-Justin, 2002), is based on the notion that the phase transitions occur primarily due to the strong fluctuations of local fields representing order parameters. Since the order parameters break spontaneously global symmetries, the associated field theories in general also have a global symmetry. Gauge theories also have phase transitions, which may be also either of first order or continuous ("second order"). Phase transitions in gauge theories, as we saw, also have universality classes and are classified not according to the behavior of local operators but according to that of their (generally non-local) observables such as Wilson loops. In fact, from an RG perspective, local quantum field theories are defined by the scaling behavior of theories in the vicinity of continuous phase transitions
(with global or local symmetries). It is only in this regime that local field theories (without reference to a "microscopic" cutoff) can be defined as continuum field theories (Wilson, 1973, 1974, 1983; Polchinski, 1984). From this framework it seems that a continuous quantum phase transition between two dimer-ordered phases is a violation of these basic Landau rules.

A conceptually important feature of QDMs is that they have topological defects, namely "holons" and "spinons," which are forbidden to exist (and actually confined into bound states) in the ordered phases but are allowed, and hence "deconfined," as gapless excitations at these quantum critical points. These topological defects are gapped and free in the topological phase. A related problem that has been the focus of a lot of work is that of the possible quantum phase transitions in 2D spin- $1 / 2$ quantum Heisenberg antiferromagnets with four-spin ("ring-exchange") interactions between a Néel phase and a VB crystal (a state with columnar order) at a critical value of the ring-exchange coupling. Extensive numerical quantum Monte Carlo simulations have provided strong evidence both for a first-order transition (Kuklov et al., 2008) and for a continuous phase transition (Sandvik, 2007, 2010) depending on details of the four-spin-interaction term. It has been proposed that these "Landau-forbidden" continuous quantum phase transitions have spin-1/2 gapless excitations, which are thus "deconfined," a form of deconfined quantum criticality (Senthil et al., 2004a, 2004b).

We will now see that the quantum critical points of QDMs are actually the simplest deconfined quantum critical points (Moessner et al., 2001). This interpretation is based on the gauge-theory description of QDMs. A more direct way to derive an effective-field theory is to adapt the methods used in classical dimer and loop models (Nienhuis, 1987; Kondev and Henley, 1996) to the generalized QDMs (Ardonne et al., 2004; Fradkin et al., 2004). We will first take a step back and change the representation of dimers in terms of height models. As before we will assign heights to plaquettes, taking into account the two sublattices (even and odd) of the square lattice. Thus, while going around a site of the even sublattice in a counterclockwise fashion, we will require that the heights on neighboring plaquettes change by +3 if the link they share is occupied by a dimer and by -1 if it is not. Conversely, for a site on the odd sublattice the heights change by -3 if the link is occupied and by +1 if it is empty (see Fig. 9.13). To avoid over-counting we identify the height $h$ with the height $h+4$. Notice that the assigned heights locally have jumps across a dimer. In this language, in a columnar state the average height field, defined by the average of the heights on the four plaquettes surrounding a given site of the original lattice, has a non-vanishing uniform expectation value, and in a staggered (or tilted) state the gradients of the height have an expectation value. Similarly, the action of the plaquette (flip) operator on a plaquette amounts to a shift of the height on that plaquette by one unit, $h \rightarrow h \pm 1$.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-362.jpg?height=213&width=208&top_left_y=207&top_left_x=357)

$$
h=\frac{3}{2}
$$

$$
h=\frac{1}{2}
$$

$$
h=-\frac{1}{2}
$$

$$
h=-\frac{3}{2}
$$

Figure 9.13 Dimer configurations around a site of the even sublattice and their associated heights on the dual lattice. The heights on the dual lattice are defined up to a uniform shift by 4 , and wind around the sites of the direct lattice.

These assignments can also be represented in terms of electric fields (or currents) on the links of the direct lattice. Thus, a dimer on the $x$ link (going from the even site to an odd site) corresponds to an electric field of 3 units leaving the even site, and to three electric fields of unit strength entering the even site on the three remaining links. Thus the allowed configurations of electric fields are $\pm 3$ and $\pm 1$ and satisfy a local conservation law, $\Delta \cdot \vec{E}=0$.

We will now seek an effective continuum field to describe the ordered phases of the QDM and their quantum phase transitions. The degrees of freedom of the effective field theory are coarse-grained height variables, which we will denote by $h$. We will give a heuristic construction of the effective-field theory for the QDMs on the square lattice. It is based on the following requirements (Ardonne et al., 2004; Fradkin et al., 2004) (a similar construction holds for the hexagonal lattice).

1. The Hamiltonian for the field $h$ must select $h \in \mathbb{Z}$ as the preferred values.
2. Field configurations $h$ that differ by integer multiples of 4 (corresponding to the period-4 condition of the lattice heights) must be equivalent. Hence we will make the identification $h \equiv h+4 n$, with $n \in \mathbb{Z}$. This condition defines the compactification radius to be $R=4$.
3. All the allowed operators (including the Hamiltonian) must be blind under the equivalency condition.
4. The effective-field theory must have four classical ("ideal") ground states, $h=$ $0,1,2,3$, each corresponding to the four possible columnar states on the square lattice.
5. For a special value (or values) of the parameter(s) of the effective action, the equal-time correlation functions of the effective-field theory must be equal to the asymptotic long-distance correlation functions of the generalized classical dimer models. This defines the RK point.

In what follows it will be more convenient to work with the rescaled (angular) field $\varphi=(\pi / 2) h$, which is $2 \pi$ periodic and has compactification radius $R=1$. The ideal states are now $\varphi=0, \pi / 2, \pi, 3 \pi / 2$. The states with $\varphi=0, \pi$ correspond (respectively) to the two columnar states modulated along the $x$ axis (i.e. with horizontal dimers), while those with $\varphi=\pi / 2,3 \pi / 2$ correspond to the two columnar states modulated along the $y$ axis (vertical dimers).

### 9.15.1 Field theory for two-dimensional classical dimers

An effective-field theory of the type we are seeking has been known for a long time in 2D classical critical phenomena, where it is known as the Gaussian model, the free "compactified" boson in the language of conformal field theory (CFT). It successfully describes the long-distance behavior of many systems of interest, including dimer models, two decoupled Ising models, Baxter and Ashkin-Teller models, and planar (XY) models (Kadanoff, 1979; Kadanoff and Brown, 1979). The derivation (or "mapping") of the Gaussian model for classical dimer models on bipartite lattices can be found in Nienhuis (1987) and Kondev and Henley (1996). The degree of freedom of the Gaussian model is a free real scalar field $\varphi(\vec{x})$ in 2D (Euclidean) space whose effective action (or "free energy") is simply given by

$$
\begin{equation*}
S_{2 \mathrm{D}}[\varphi]=\int d^{2} x \frac{K}{2}(\vec{\nabla} \varphi(\vec{x}))^{2} \tag{9.142}
\end{equation*}
$$

We have already encountered this model in Chapter 4, where we discussed its connection with the Kosterlitz-Thouless transition, and in Chapters 5 and 6, where it was discussed in the context of the 1D quantum Heisenberg model and of the Luttinger model, respectively. In all of these cases the field $\varphi$ is treated as an angular variable with a compactification radius, which here we will set to be $R=1$. This means that the observables of this theory are the electric and magnetic vertex operators $V_{n}(\vec{x})$ (with an "electric" charge $n$ ) and $\widetilde{V}_{m}(\vec{x})$ (with magnetic charge $m$ )

$$
\begin{equation*}
V_{n}(\vec{x})=e^{i n \varphi(\vec{x})}, \quad \widetilde{V}_{m}(\vec{x})=e^{i m \vartheta(\vec{x})} \tag{9.143}
\end{equation*}
$$

The dual field $\vartheta(\vec{x})$ and the field $\varphi(\vec{x})$ are related by the Cauchy-Riemann relation,

$$
\begin{equation*}
\partial_{i} \vartheta=\epsilon_{i j} \partial_{j} \varphi \tag{9.144}
\end{equation*}
$$

In the case of the free-dimer model on bipartite lattices its correlation functions are known explicitly (Fisher and Stephenson, 1963; Youngblood et al., 1980). An identification of the dimer-model densities on the links $\left(\vec{x}, \vec{x}+e_{x}\right)$ and $\left(\vec{x}, \vec{x}+e_{y}\right)$ of the direct lattice, $n_{x}(\vec{x})$ and $n_{y}(\vec{x})$, in terms of the observables of the Gaussian model (for the case of the square lattice) is (see Fradkin et al. (2004))

$$
\begin{align*}
& n_{x}-\frac{1}{4}=\frac{1}{2 \pi}(-1)^{x+y} \partial_{y} \varphi+\frac{1}{2}\left[(-1)^{x} e^{i \varphi}+\text { h.c. }\right]  \tag{9.145}\\
& n_{y}-\frac{1}{4}=\frac{1}{2 \pi}(-1)^{x+y+1} \partial_{x} \varphi+\frac{1}{2}\left[(-1)^{y} i e^{i \varphi}+\text { h.c. }\right] \tag{9.146}
\end{align*}
$$

where we have used the fact that the average dimer density is $1 / 4$. These expansions of dimer densities are analogous to the expansion we used in Chapter 6 for the electron density in Luttinger liquids, and constitute the standard description of density-wave order (Chaikin and Lubensky, 1995).

Although the system is critical, the bipartite nature of the lattice enters into the structure of the correlation functions. In addition, on finite geometries, such as a long cylinder of finite diameter, the classical dimer model is known to have longrange columnar order (with the columns running around the circumference of the cylinder). Extensive 2D Monte Carlo numerical simulations show that, if dimer interactions are included, the classical dimer model can also exhibit columnar or staggered order below a critical temperature (Alet et al., 2005, 2006; Papanikolaou et al., 2007c).

As in the case of charge-density waves, we will identify the (normalized) $n=1$ electric operator

$$
\begin{equation*}
V_{1}(\vec{x})=e^{i \varphi(\vec{x})} \equiv O_{\mathrm{c}}(\vec{x}) \tag{9.147}
\end{equation*}
$$

(taking the classical values $0, i,-1,-i$ ) with the columnar order parameter $O_{\mathrm{c}}(\vec{x})$. Similarly, the $n=2$ electric operator

$$
\begin{equation*}
V_{2}(\vec{x})=e^{i 2 \varphi(\vec{x})} \equiv O_{\mathrm{o}}(\vec{x}) \tag{9.148}
\end{equation*}
$$

is the order parameter for orientational order, $O_{0}(\vec{x})$. Indeed, this operator takes the values $1,-1,1,-1$ on the respective ideal states and distinguishes the orientation of the dimers but not their displacements.

In Chapter 4 we showed that the (regularized) correlator of the classical field $\varphi$ is

$$
\begin{equation*}
G_{2 \mathrm{D}}(|\vec{x}-\vec{y}|)=\langle\varphi(\vec{x}) \varphi(\vec{y})\rangle=-\frac{1}{4 \pi K} \ln \left(|\vec{x}-\vec{y}|^{2}\right) \tag{9.149}
\end{equation*}
$$

and, as a result, the correlators of the vertex operators $V_{n}(\vec{x})$ and $\widetilde{V}_{m}(\vec{x})$ are

$$
\begin{equation*}
\left\langle V_{n}(\vec{x}) V_{n^{\prime}}(\vec{y})\right\rangle=\frac{\delta_{n,-n^{\prime}}}{|\vec{x}-\vec{y}|^{2 \Delta_{n}}}, \quad\left\langle\tilde{V}_{m}(\vec{x}) \tilde{V}_{m^{\prime}}(\vec{y})\right\rangle=\frac{\delta_{m,-m^{\prime}}}{|\vec{x}-\vec{y}|^{2 \widetilde{\Delta}_{m}}} \tag{9.150}
\end{equation*}
$$

where the scaling dimensions $\Delta_{n}$ and $\widetilde{\Delta}_{m}$ are

$$
\begin{equation*}
\Delta_{n}=\frac{n^{2}}{4 \pi K}, \quad \tilde{\Delta}_{m}=\pi K m^{2} \tag{9.151}
\end{equation*}
$$

Similarly, we find that the slowly varying density operators $\delta n_{j}(\vec{x})=$ $(1 /(2 \pi)) \partial_{j} \varphi(\vec{x})$ have scaling dimension 1 and hence have a power-law decay $\sim 1 /|\vec{x}-\vec{y}|^{2}$.

The expressions for the scaling dimensions of the "electric" and "magnetic" vertex operators, $V_{n}(\vec{x})$ and $\tilde{V}_{m}(\vec{x})$, given in Eqs. (9.150) show that they transform into each other under the duality transformation which maps (Kadanoff, 1979)

$$
\begin{equation*}
K \leftrightarrow \frac{1}{K}, \quad n \leftrightarrow m \tag{9.152}
\end{equation*}
$$

This transformation is closely related to the Kramers-Wannier duality of the 1D quantum Ising model, discussed in Chapter 5, or equivalently to the classical 2D Ising model. It is formally equivalent to the duality (or $T$-duality) symmetry of the Luttinger liquid discussed in Chapter 6.

The exactly known correlators of dimer densities (Youngblood et al., 1980) have a long-distance behavior with a single power law $1 /|\vec{x}-\vec{y}|^{2}$ (with a sublattice structure). Our identification of the dimer-density operators of Eq. (9.145) and Eq. (9.146) predicts the same correlation functions, provided that the charge $n=1$ vertex operator $V_{1}(\vec{x})=O_{\mathrm{c}}(\vec{x})$ has scaling dimension $\Delta_{1}($ free $)=1$ at the freedimer point. This leads us to identify, for the free-dimer model, the (non-universal) stiffness $K_{\text {free }}$ as being given by

$$
\begin{equation*}
K_{\mathrm{free}}=\frac{1}{4 \pi} \tag{9.153}
\end{equation*}
$$

Let us now considered the correlation function of two monomers, two sites of the lattice that do not belong to a dimer. In our language we will call this the hole operator. Fisher and Stephenson (1963) showed that in the free-dimer model (on a square lattice) the correlator of two monomers has instead a power-law decay $\sim 1 / \sqrt{|\vec{x}-\vec{y}|}$. Hence the scaling dimension of a monomer (or hole) is $1 / 4$. We can see by inspection that this is precisely the scaling dimension of the magnetic operator $\widetilde{V}_{1}$ at the free-dimer point. This is not an accident, since magnetic operators correspond to violations of the dimer rule.

The periodic nature of the height variable and the requirement that configurations which differ by 4 units be physically equivalent imply that the charge $n=4$ electric operator $\sim g \cos (4 \varphi)$ should also be allowed in the effective action. However, at the free-dimer point, $K=1 /(4 \pi)$, the charge $n=4$ operator has scaling dimension $\Delta_{4}(1 /(4 \pi))=16$. This operator is strongly irrelevant and hence in practice can be ignored.

Away from the free-dimer point, the interacting-dimer model also maps to a Gaussian CFT with the same compactification radius $R=1$ (and hence the same set of allowed operators), but with a non-universal stiffness $K(u)$, which is now
a (non-universal) function of the interaction parameter $u$. Thus, classical dimer models also have a line of fixed points. Much as in the case of the classical XY model, the interacting-dimer model has a KT transition at some value of the interaction parameter $u_{\mathrm{c}}$ at which $K\left(u_{\mathrm{c}}\right)=2 / \pi$. At this point the charge $n=4$ electric operator has scaling dimension $\Delta_{4}(2 / \pi)=2$ and is marginal. Hence, the interacting-dimer model has a KT phase transition at $u_{\mathrm{c}}$ to an ordered columnar phase (Alet et al., 2005; Papanikolaou et al., 2007a).

### 9.15.2 Field theory for two-dimensional quantum-dimer models

Let us now develop an effective-field theory for quantum-dimer models. We will follow the same approach as in the classical case and use the same operator identifications. However, we will need to define the quantum dynamics of the effective-field theory and to relate that to the Hamiltonians of generalized QDMs (and eight-vertex models).

The degree of freedom of the effective-field theory of the quantum case in $(2+1)$ dimensions will also be the coarse-grained phase field $\varphi(\vec{x}, t)$. Let us define $\Pi(\vec{x})$ to be the momentum canonically conjugate to the field $\varphi(\vec{x})$, which now satisfy standard equal-time commutation relations

$$
\begin{equation*}
[\varphi(\vec{x}), \Pi(\vec{y})]=i \delta^{(2)}(\vec{x}-\vec{y}) \tag{9.154}
\end{equation*}
$$

The simplest translation- and rotation-invariant free Hamiltonian which obeys all the requirements is

$$
\begin{equation*}
H_{0}=\int d^{2} x\left[\frac{1}{2} \Pi(\vec{x})^{2}+\frac{A}{2}(\vec{\nabla} \varphi(\vec{x}))^{2}+\frac{\kappa^{2}}{2}\left(\nabla^{2} \varphi(\vec{x})\right)^{2}\right] \tag{9.155}
\end{equation*}
$$

where $A$ and $\kappa$ are non-universal constants that will be determined shortly using the mapping to the QDM. We will discuss below two cases.

1. $A \neq 0$, in which case space scales the same way as time, $[T]=[L]$, and the dynamic critical exponent is $z=1$. In this case the field has the canonical units of a relativistic field in $(2+1)$ dimensions, $[\varphi]=\left[L^{-1}\right]$, as does the canonical momentum, $[\Pi]=\left[L^{-1}\right]$. We will see that this case describes the ordered phases.
2. $A=0$, in which case time scales as two powers of space, $[T]=\left[L^{2}\right]$, and the dynamic critical exponent is $z=2$. In this case the field $\varphi$ is dimensionless, $[\varphi]=\left[L^{0}\right]$, and the canonical momentum has units of $[\Pi]=\left[L^{-2}\right]$. We will see that this case describes a quantum critical point.

The associated action in $(2+1)$ (Euclidean) dimensions is (with $x=(\vec{x}, \tau)$ )

$$
\begin{equation*}
S_{0}=\int d^{2} x d \tau\left[\frac{1}{2}\left(\partial_{\tau} \varphi(x)\right)^{2}+\frac{A}{2}(\vec{\nabla} \varphi(x))^{2}+\frac{\kappa^{2}}{2}\left(\nabla^{2} \varphi(x)\right)^{2}\right] \tag{9.156}
\end{equation*}
$$

For the effective action (and Hamiltonian) to describe the QDM we need to add to $S_{0}$ (and to $H_{0}$ ) a term of the form

$$
\begin{equation*}
S_{\mathrm{int}}=\int d^{2} x d \tau g \cos (2 \pi h)=\int d^{2} x d \tau g \cos (4 \varphi) \tag{9.157}
\end{equation*}
$$

which enforces the periodicity condition. In this form the partition function is

$$
\begin{equation*}
\mathcal{Z}=\int \mathcal{D} \varphi e^{-S_{0}[\varphi]-S_{\text {int }}[\varphi]} \tag{9.158}
\end{equation*}
$$

Let us consider first the case in which the constant $A>0$. In this case, the $\left(\nabla^{2} \varphi\right)^{2}$ term is irrelevant compared with the $(\nabla \varphi)^{2}$ term, which has two fewer derivatives. The free-field action now looks like a standard free-field theory. However, the cosine operator of $S_{\text {int }}$ is always a relevant operator that must be included. The result is the sine-Gordon theory, and we are back to Polyakov's case:

$$
\begin{equation*}
S_{\mathrm{eff}}=\int d^{2} x d \tau\left[\frac{1}{2}\left(\partial_{\tau} \varphi(x)\right)^{2}+\frac{A}{2}(\vec{\nabla} \varphi(x))^{2}-g \cos (4 \varphi(x))\right] \tag{9.159}
\end{equation*}
$$

This theory is relativistic since space scales the same way as time, and hence we have a dynamic critical exponent $z=1$.

From Polyakov's analysis (or using the Kosterlitz RG) we saw that in this theory the cosine operator is always relevant and that the theory is controlled by a strong-coupling (large-g) fixed point. At this fixed point the field $\varphi$ is pinned at the minima of the cosine operators and its fluctuations are gapped and have a finite effective mass (squared) $m_{\text {eff }}^{2} \simeq 16 g / \sqrt{A}$. We can determine what dimer state is described by this theory (for $A>0$ and all $g$ ) by noting that, if the field $\varphi$ is pinned, the columnar order parameter $O_{\mathrm{c}}=\exp (i \varphi)$ has a non-vanishing expectation value. If we include the effects of quantum fluctuations in the pinned state to lowest (quadratic) order we find that the order parameter takes the values $1, i,-1,-i$ times a function of $\sqrt{A}, g$, and a (sharp) ultraviolet (UV) momentum cutoff $\Lambda$

$$
\begin{equation*}
\left\langle e^{i \varphi}\right\rangle \approx\{1, i,-1,-i\} \times \exp \left(-\frac{1}{2 \pi^{2}} \frac{\Lambda}{\sqrt{A}}\left(\Lambda-\frac{\pi}{2} m_{\mathrm{eff}}\right)\right) \tag{9.160}
\end{equation*}
$$

Therefore, for $A>0$ this effective-field theory describes a state with columnar order.

Let us now consider the special but important case of a theory at $A=0$ and examine a theory with the following effective action:

$$
\begin{equation*}
S_{\mathrm{QLM}}=\int d^{2} x d \tau\left[\frac{1}{2}\left(\partial_{\tau} \varphi\right)^{2}+\frac{\kappa^{2}}{2}\left(\nabla^{2} \varphi\right)^{2}\right] \tag{9.161}
\end{equation*}
$$

We will refer to this action as the quantum Lifshitz model.
On the other hand, for $A<0$ the free-field part of the action (with terms with only two derivatives) is unstable since it has a negative stiffness $(A<0)$. In this case the momentum (or wave vector) of the ordered state shifts away from ( $\pi, 0$ ) or $(0, \pi)$, the ordering wave vector(s) of the columnar states. The stable state (and the shift of the ordering wave vector, $\vec{Q}$ ) is determined by terms not included in the quantum Lifshitz model, Eq. (9.161). The leading perturbations involve the commensurability operator $\cos (4 \varphi)$ (which is already included in the action of Eq. (9.159)) and the quartic operator

$$
\begin{equation*}
S_{4}=\int d^{2} x d \tau g_{4}(\vec{\nabla} \varphi(\vec{x}))^{4} \tag{9.162}
\end{equation*}
$$

We will see shortly that this operator is marginally irrelevant at the quantum critical point described by the quantum Lifshitz model. However, despite being irrelevant, it stabilizes the ordered phase for $A<0$. Indeed, if $A<0$, the minimum-energy state has a wave vector shifted by an amount $\vec{Q}$,

$$
\begin{equation*}
\varphi(x)=\vec{Q} \cdot \vec{x}+\delta \varphi(x) \tag{9.163}
\end{equation*}
$$

which we will describe as the tilt of the columnar state. $\vec{Q}$ is determined by minimizing the action $S_{\mathrm{QLM}}+S_{4}+S_{\mathrm{int}}$. If we assume that $g_{4}>0$ and we momentarily neglect the effects of the commensurability interaction term, $S_{\text {int }}$, we find that the tilt $\vec{Q}$ is

$$
\begin{equation*}
|\vec{Q}|=\sqrt{\frac{|A|}{4 g_{4}}} \tag{9.164}
\end{equation*}
$$

On the other hand, if $g_{4} \leq 0$ the tilt grows without limit and is stabilized by lattice effects as is the case in the QDM, which for $V>J$ has a staggered phase, with wave vector $(\pi, \pi)$. This, however, is not the full story. A tilted phase with $|\vec{Q}|$ varying continuously is an incommensurate state, which is in conflict with the commensurability interaction $S_{\text {int }}$. It turns out that the resulting state is either commensurate and pinned (and hence confining), or incommensurate and not pinned (and gapless) and hence deconfined. However, the incommensurate (deconfined) gapless phases form a Cantor set (of finite measure) (Fradkin et al., 2004).

Let us now discuss the special but important case of $A=0$ which plays the role of the quantum critical point. We call this a quantum Lifshitz model by analogy with the theory of the Lifshitz point in liquid crystals and in helical magnets
(Grinstein, 1981; Chaikin and Lubensky, 1995). If we regard the imaginary-time coordinate as the $z$ coordinate of a 3D system, the field $\varphi(\vec{x}, \tau)$ can be regarded as the spatial modulation of the height of a set of smectic layers of nematic molecules (essentially rod-shaped objects) stacked along the $z$ axis.

The quantum Lifshitz model is dual to a gauge theory. However, since the quantum Lifshitz model has dynamic exponent $z=2$, the dual-gauge theory cannot be the Maxwell theory since the latter has photons (with only one polarization state since we are in $(2+1)$ dimensions) whose energy is a linear function of the momentum. We will show that the Hamiltonian of the dual-gauge theory has the unconventional form

$$
\begin{equation*}
H_{\mathrm{QLM}-\text { gauge }}=\int d^{2} x\left[\frac{\kappa^{2}}{2}(\vec{\nabla} \times \vec{E})^{2}+\frac{1}{2} B^{2}\right] \tag{9.165}
\end{equation*}
$$

where $E_{j}$ is the electric field and $B=\epsilon_{j k} \partial_{j} A_{k}$ is the magnetic field (a pseudoscalar in 2D). The electric field $E_{j}$ and the vector potential $A_{j}$ obey canonical commutation relations in the gauge $A_{0}=0$,

$$
\begin{equation*}
\left[E_{j}(\vec{x}), A_{k}(\vec{y})\right]=i \delta_{j k} \delta^{(2)}(\vec{x}-\vec{y}) \tag{9.166}
\end{equation*}
$$

The physical states, |Phys $\rangle$, as usual obey Gauss's law

$$
\begin{equation*}
\left.\partial_{j} E_{j} \mid \text { Phys }\right\rangle=0 \tag{9.167}
\end{equation*}
$$

In the absence of external sources (or "matter fields") the Gauss-law constraint can be solved trivially by writing

$$
\begin{equation*}
E_{j}=\epsilon_{j k} \partial_{k} \varphi \tag{9.168}
\end{equation*}
$$

where $\varphi$ is a scalar. Then the canonical commutation relation becomes

$$
\begin{equation*}
[\varphi(\vec{x}), B(\vec{y})]=i \delta^{(2)}(\vec{x}-\vec{y}) \tag{9.169}
\end{equation*}
$$

and we identify the magnetic field $B$ with $\Pi$, the momentum canonically conjugate with $\varphi$. Hence, the gauge theory and the quantum Lifshitz model are physically equivalent.

What is the gauge-theory picture of the observables of the quantum Lifshitz model? Let us consider first the operator $O_{n}(\vec{x})$ of the gauge theory that creates a magnetic charge (in the gauge-theory language) of charge $n$ at location $\vec{x} . O_{n}(\vec{x})$ is given by

$$
\begin{align*}
O_{n}(\vec{x}) & =\exp \left(\operatorname{in} \int_{\gamma(\vec{x})} d y_{j} \epsilon_{j k} \theta\left(y_{j}-x_{j}\right) \delta\left(y_{k}-x_{k}\right) E_{k}(\vec{y})\right) \\
& =\exp \left(\operatorname{in} \int_{\gamma(\vec{x})} d x_{j} \partial_{j} \varphi(\vec{y}) \theta\left(y_{j}-x_{j}\right) \delta\left(y_{k}-x_{k}\right)\right) \\
& =e^{i n \varphi(\vec{x})} \tag{9.170}
\end{align*}
$$

where $\gamma(\vec{x})$ is any curve beginning somewhere on the boundary of the system and ending at $\vec{x}$; here $x_{j}$ and $x_{k}$ (and $y_{j}$ and $y_{k}$ ) are the tangent and normal directions to the path $\gamma$. As we can see, it is what we call an electric operator in the quantum Lifshitz model. These vertex operators are consistent with the compactification radius $R=1$ that we have imposed on the field $\varphi$ since they are invariant under shifts of the field variable by integer multiples of $2 \pi$.

Similarly, let us consider an operator that creates an electric charge in the gauge theory, i.e. leads to the condition

$$
\begin{equation*}
\partial_{j} E_{j}(\vec{y})=m \delta^{(2)}(\vec{y}-\vec{x}) \tag{9.171}
\end{equation*}
$$

The solution now is

$$
\begin{equation*}
E_{j}(\vec{y})=\epsilon_{j k}\left(\partial_{k} \varphi(\vec{y})+\mathcal{B}_{k}(\vec{y})\right) \tag{9.172}
\end{equation*}
$$

which requires that

$$
\begin{equation*}
\epsilon_{j k} \partial_{j} \mathcal{B}_{k}(\vec{y})=m \delta^{(2)}(\vec{y}-\vec{x}) \tag{9.173}
\end{equation*}
$$

In other terms, the dual-scalar field $\varphi$ is coupled to a background gauge field $\mathcal{B}_{k}(\vec{y})$ whose magnetic charge is $m$ : this is the magnetic-charge operator of the quantum Lifshitz model.

We now need to determine (or interpret the meaning of) the constants $A$ and $\kappa$. In terms of the QDM we tentatively assign the RK point (which we know is critical) to the point $A=0$ of the effective theory. Hence, close to the RK point we will write $A=c(J-V)$, where $c$ is a constant. To determine the value of $\kappa$ in Eq. (9.161) we will discuss now the behavior of this theory and find a mapping to the RK point. We will do this in two different ways.

Let us first find the wave function of the ground state of the quantum Lifshitz model (Ardonne et al., 2004). To do this, we turn to the Schrödinger representation of the quantum Lifshitz field theory. We will work in the field representation in which the states are eigenstates of the field operator $\varphi(\vec{x})$. In this representation the wave functions (functionals) are

$$
\begin{equation*}
\Psi[\{\varphi(\vec{x})\}]=\langle\Psi \mid\{\varphi(\vec{x})\}\rangle \tag{9.174}
\end{equation*}
$$

Notice that the field representation of the quantum Lifshitz model is the same as the electric-field representation of the states in the gauge theory (instead of the vectorpotential representation). In this representation the canonical momentum $\Pi(\vec{x})$ is a functional differential operator

$$
\begin{equation*}
\Pi(\vec{x})=i \frac{\delta}{\delta \varphi(\vec{x})} \tag{9.175}
\end{equation*}
$$

The quantum Lifshitz Hamiltonian, Eq. (9.155), with $A=0$, now leads to a Schrödinger equation for $\Psi[\varphi]$ of the form

$$
\begin{align*}
H \Psi[\varphi] & =\int d^{2} x\left[-\frac{1}{2} \frac{\delta^{2}}{\delta \varphi(\vec{x})^{2}}+\frac{\kappa^{2}}{2}\left(\nabla^{2} \varphi(\vec{x})\right)^{2}\right] \Psi[\varphi]=E \Psi[\varphi] \\
& =\int d^{2} x \frac{1}{2}\left\{Q[\varphi], Q^{\dagger}[\varphi]\right\} \Psi[\varphi] \tag{9.176}
\end{align*}
$$

where the braces denote (as usual) the anticommutator. Here we introduced the "creation" operator $Q^{\dagger}[\varphi]$ and its adjoint, the "annihilation" operator $Q[\varphi]$, defined by

$$
\begin{equation*}
Q[\varphi]=\frac{1}{\sqrt{2}}\left[-\frac{\delta}{\delta \varphi(\vec{x})}+\kappa \nabla^{2} \varphi(\vec{x})\right] \tag{9.177}
\end{equation*}
$$

As in the theory of the linear harmonic oscillator in quantum mechanics, the ground-state wave function(al) is annihilated by the "annihilation" operator $Q[\varphi]$. This leads to the simple first-order equation

$$
\begin{equation*}
Q \Psi_{0}[\varphi]=\frac{1}{\sqrt{2}}\left[-\frac{\delta}{\delta \varphi(\vec{x})}+\kappa \nabla^{2} \varphi\right] \Psi_{0}[\varphi]=0 \tag{9.178}
\end{equation*}
$$

whose (normalized) solution is

$$
\begin{equation*}
\Psi_{0}[\varphi]=\frac{1}{\sqrt{Z_{0}}} \exp \left(-\int d^{2} x \frac{\kappa}{2}(\vec{\nabla} \varphi(\vec{x}))^{2}\right) \tag{9.179}
\end{equation*}
$$

where $Z_{0}$, the norm (squared) of the wave function, is

$$
\begin{equation*}
Z_{0}=\int \mathcal{D} \varphi \exp \left(-\int d^{2} x \kappa(\vec{\nabla} \varphi(\vec{x}))^{2}\right) \tag{9.180}
\end{equation*}
$$

We see that the amplitude of a field configuration $|[\varphi]\rangle$ in the ground-state wave function $\Psi_{0}[\varphi]$ has the form of the Gibbs weight for a 2D Gaussian model and that its norm $Z_{0}$ has the form of the partition function of the Gaussian model. Thus we find a relation between the stiffness $K$ of the 2D classical Gaussian model (cf. Eq. (9.142)) and the parameter $\kappa$ of the quantum Lifshitz model:

$$
\begin{equation*}
K=2 \kappa \tag{9.181}
\end{equation*}
$$

We find that the ground-state wave function of the quantum Lifshitz model is scaleinvariant! Since 2D classical scale-invariant systems are also conformally invariant (and are examples of CFTs), we will refer to this as a conformal quantum critical point (Ardonne et al., 2004).

We should note that a scale-invariant wave function is not generic of quantum critical systems but rather is a peculiar feature of this theory. Although this means that it represents a quantum critical point, the converse is not true: the ground-state
wave function of a quantum critical system, although it must scale, is not necessarily scale-invariant. A simple counterexample is the Luttinger model (Fradkin et al., 1993).

It is also interesting to rewrite the ground-state wave function $\Psi_{0}[\varphi]$, Eq. (9.179), in the language of the dual-gauge theory. Since the coarse-grained height field $\varphi$ is simply the curl of the dual electric field, $\vec{E}=\vec{\nabla} \times \varphi$, it is easy to show that in the gauge theory the wave function is a state in the electric-field representation:

$$
\begin{equation*}
\Psi_{0}[\vec{E}(\vec{x})]=\frac{1}{\sqrt{Z_{0}}} \exp \left(-\int d^{2} x \frac{\kappa}{2} \vec{E}(\vec{x})^{2}\right) \prod_{\vec{x}} \delta(\vec{\nabla} \cdot \vec{E}(\vec{x})) \tag{9.182}
\end{equation*}
$$

In other terms, it is a simple Gaussian function of the electric-field configuration subject to the Gauss-law constraint without sources.

In this representation the equal-time correlation function of $N$ charge operators $O_{n}(\vec{x})$ in the quantum Lifshitz ground state $\left|\Psi_{0}\right\rangle$ is given by

$$
\begin{align*}
\left\langle\Psi_{0}\right| O_{n_{1}}\left(\vec{x}_{1}\right) & \ldots O_{n_{N}}\left(\vec{x}_{N}\right)\left|\Psi_{0}\right\rangle_{\kappa} \\
& =\frac{1}{Z_{0}} \int \mathcal{D} \varphi O_{n_{1}}\left(\vec{x}_{1}\right) \ldots O_{n_{N}}\left(\vec{x}_{N}\right) \exp \left(-\int d^{2} x \kappa(\vec{\nabla} \varphi(\vec{x}))^{2}\right) \\
& =\left\langle O_{n_{1}}\left(\vec{x}_{1}\right) \ldots O_{n_{N}}\left(\vec{x}_{N}\right)\right\rangle_{K=2 \kappa} \tag{9.183}
\end{align*}
$$

where the last line is the expectation value of the same operators in the classical Gaussian model with stiffness $K=2 \kappa$. Since we know how to relate the stiffness $K$ of the classical model to the "microscopic" (classical) dimer model, this identity shows that the equal-time correlation functions of the quantum Lifshitz model do indeed reproduce the correlation functions of the classical dimer model, provided that we set $\kappa_{\text {free }}=1 /(8 \pi)$. In particular, this mapping also tells us that the scaling dimensions are the same in both theories. Thus, the scaling dimensions of the charge operators $O_{n}[\varphi]$ of the quantum Lifshitz model are

$$
\begin{equation*}
\Delta_{n}=\frac{n^{2}}{8 \pi \kappa} \tag{9.184}
\end{equation*}
$$

We can also find a representation of the magnetic (vortex) operators. The vortex operators are

$$
\begin{equation*}
\tilde{\mathcal{O}}_{m}(\vec{x})=\exp \left(i \int d^{2} z \alpha(\vec{z}) \Pi(\vec{z})\right) \tag{9.185}
\end{equation*}
$$

where

$$
\begin{equation*}
\alpha(\vec{z})=m \arg (\vec{z}-\vec{x}) \tag{9.186}
\end{equation*}
$$

where $0 \leq \arg (\vec{z}-\vec{x}) \leq 2 \pi$ is the argument of the vector $\vec{z}-\vec{x}$ (with a branch cut defined arbitrarily along the negative- $x$ axis). The action of the operator $\tilde{\mathcal{O}}_{m}(\vec{x})$ on an eigenstate of the field operator $|[\varphi]\rangle$ is simply a shift

$$
\begin{equation*}
\exp \left(i \int d^{2} z \alpha(\vec{z}) \Pi(\vec{z})\right)|[\varphi]\rangle=|[\varphi(\vec{x})-\alpha(\vec{x})]\rangle \tag{9.187}
\end{equation*}
$$

In other words, it amounts to a singular gauge transformation. Therefore, its action is equivalent to coupling the field $\varphi$ to a vector potential whose space components $\vec{A}$ satisfy

$$
\begin{equation*}
\oint_{\gamma} d \vec{z} \cdot \vec{A}[\vec{z}]=2 \pi m \tag{9.188}
\end{equation*}
$$

for all closed paths $\gamma$ that have the point $\vec{x}$ in their interior, and zero otherwise. In particular, the wave function of the state resulting from the action of the vortex operator on the ground state is

$$
\begin{equation*}
\Psi_{m}[\vec{x}]=\langle[\varphi]| \tilde{\mathcal{O}}_{m}(\vec{x})\left|\Psi_{0}\right\rangle=\frac{1}{\sqrt{Z_{0}}} \exp \left(-\frac{\kappa}{2} \int d^{2} z(\vec{\nabla} \varphi-\vec{A})^{2}\right) \tag{9.189}
\end{equation*}
$$

where $\vec{A}$ is any vector field that satisfies Eq. (9.188). The (equal-time) ground-state expectation value of a product of vortex operators with magnetic charges $\left\{m_{l}\right\}$, i.e. the overlap of the state with $M$ vortices at locations $\vec{x}_{l}$ and magnetic charge $m_{l}$ with the vortex-free ground-state wave function, is therefore

$$
\begin{align*}
&\left\langle\Psi_{0}\right| \widetilde{\mathcal{O}}_{m_{1}}\left(\vec{x}_{1}\right) \ldots \widetilde{\mathcal{O}}_{m_{M}}\left(\vec{x}_{M}\right)\left|\Psi_{0}\right\rangle_{\kappa} \\
&=\frac{1}{Z_{0}} \int \mathcal{D} \varphi \exp \left(-\kappa \int d^{2} z(\vec{\nabla} \varphi-\vec{A})^{2}\right) \\
&=\left\langle\widetilde{\mathcal{O}}_{m_{1}}\left(\vec{x}_{1}\right) \ldots \widetilde{\mathcal{O}}_{m_{k}}\left(\vec{x}_{M}\right)\right\rangle_{K=2 \kappa} \tag{9.190}
\end{align*}
$$

where $Z_{0}$ is given by Eq. (9.180), and the last line is an expectation value of $M$ vortex operators in the Gaussian model, namely the 2D classical compactified boson. The vector potential in Eq. (9.190) satisfies

$$
\begin{equation*}
\varepsilon_{i j} \partial_{i} A_{j}=2 \pi \sum_{l=1}^{M} m_{l} \delta^{2}\left(\vec{z}-\vec{x}_{l}\right) \tag{9.191}
\end{equation*}
$$

These results also show that the scaling dimensions of the vortex operators $\widetilde{\Delta}_{m}$ are also the same in both theories (if we set $K=2 \kappa$ ). Therefore the scaling dimensions of the vortex operators (or holes) in the quantum Lifshitz model are

$$
\begin{equation*}
\tilde{\Delta}_{m}=2 \pi \kappa m^{2} \tag{9.192}
\end{equation*}
$$

We can also gain insight into this problem by looking at the time dependence of the correlation functions. To this end, we return to the path-integral picture and compute the propagator of the field $\varphi(\vec{x}, \tau)$. It is now easy to see that the boson propagator of this theory, in imaginary time $\tau$, is

$$
\begin{align*}
G\left(\vec{x}-\vec{x}^{\prime}, \tau-\tau^{\prime}\right) & =\left\langle\varphi(\vec{x}, \tau) \varphi\left(\vec{x}^{\prime}, \tau^{\prime}\right)\right\rangle \\
& =\int \frac{d \omega}{2 \pi} \int \frac{d^{2} q}{(2 \pi)^{2}} \frac{e^{i \omega\left(\tau-\tau^{\prime}\right)-i \vec{q} \cdot\left(\vec{x}-\vec{x}^{\prime}\right)}}{\omega^{2}+\kappa^{2}\left(\vec{q}^{2}\right)^{2}} \tag{9.193}
\end{align*}
$$

From the denominator of the integrand of Eq. (9.193) we learn that, in terms of real frequencies, the excitations of the field $\varphi$ are states that propagate with an energymomentum relation $\omega(\vec{q})=\kappa \vec{q}^{2}$. This is the same as the resonon state of Rokhsar and Kivelson (1988).

This propagator has a short-distance logarithmic divergence. From now on we will use instead the regularized (subtracted) propagator

$$
\begin{align*}
G_{\mathrm{reg}}(\vec{x}, \tau) & \equiv G(\vec{x}, \tau)-G(a, 0) \\
& =-\frac{1}{8 \pi \kappa}\left[\ln \left(\frac{|\vec{x}|^{2}}{a^{2}}\right)+\Gamma\left(0, \frac{|\vec{x}|^{2}}{4 \kappa|\tau|}\right)\right] \tag{9.194}
\end{align*}
$$

where $a$ is a short-distance cutoff and $\Gamma(0, z)$ is the incomplete Gamma function

$$
\begin{equation*}
\Gamma(0, z)=\int_{z}^{\infty} \frac{d s}{s} e^{-s} \tag{9.195}
\end{equation*}
$$

The regularized propagator has the asymptotic behaviors

$$
G_{\mathrm{reg}}(\vec{x}, \tau)= \begin{cases}-\frac{1}{4 \pi \kappa} \ln \left(\frac{|\vec{x}|}{a}\right), & \text { for }|t| \rightarrow 0  \tag{9.196}\\ -\frac{1}{8 \pi \kappa} \ln \left(\frac{4 \kappa|\tau|}{a^{2} \gamma}\right), & \text { for }|\vec{x}| \rightarrow a\end{cases}
$$

where $\ln \gamma=\mathbf{C}=0.577 \ldots$ is the Euler constant.
The time-dependent correlation functions of the charge operators are

$$
\begin{equation*}
\left\langle\mathcal{O}_{n}(\vec{x}, \tau)^{\dagger} \mathcal{O}_{n}\left(\vec{x}^{\prime}, \tau^{\prime}\right)\right\rangle=e^{n^{2} G_{\operatorname{reg}}\left(\vec{x}-\vec{x}^{\prime}, \tau-\tau^{\prime}\right)} \tag{9.197}
\end{equation*}
$$

At equal (imaginary) times, $\left|\tau-\tau^{\prime}\right| \rightarrow 0$, it behaves like

$$
\begin{equation*}
\left\langle\mathcal{O}_{n}(\vec{x}, 0)^{\dagger} \mathcal{O}_{n}\left(\vec{x}^{\prime}, 0\right)\right\rangle=\left(\frac{a}{\left|\vec{x}-\vec{x}^{\prime}\right|}\right)^{n^{2} /(4 \pi \kappa)} \tag{9.198}
\end{equation*}
$$

and we recover the result that the operator $\mathcal{O}_{n}$ has (spatial) scaling dimension $\Delta_{n}=$ $n^{2} /(8 \pi \kappa)$. For $\left|\vec{x}-\vec{x}^{\prime}\right| \rightarrow a$, its asymptotic behavior is instead given by

$$
\begin{equation*}
\left\langle\mathcal{O}_{n}(\overrightarrow{0}, \tau)^{\dagger} \mathcal{O}_{n}\left(\overrightarrow{0}, \tau^{\prime}\right)\right\rangle=\left(\frac{a^{2} \gamma}{4 \kappa\left|\tau-\tau^{\prime}\right|}\right)^{n^{2} /(8 \pi \kappa)} \tag{9.199}
\end{equation*}
$$

This behavior is manifestly consistent with a dynamical critical exponent $z=2$. Similar results can be derived for the magnetic (vortex) operators.

### 9.15.3 Scaling at the quantum Lifshitz multicritical point

The scaling properties of this system were studied by Grinstein (1981) in the context of the theory of anisotropic scaling at Lifshitz points in helimagnets and by Grinstein and Pelcovits (1982) in the context of the theory of non-linear elasticity in smectic liquid crystals in three dimensions. As noted by Grinstein (1981), this system is in many ways a 3D analog of the Gaussian model. Hence its phase transitions are very similar to the Kosterlitz-Thouless transition of 2D statistical mechanics.

With some caveats, most of these results from classical statistical mechanics apply to this quantum critical point. Here we list the scaling properties of the main operators and how they affect the physics (Grinstein, 1981; Fradkin et al., 2004; Vishwanath et al., 2004). The quantum Lifshitz model is a 2 D quantum critical system with dynamic critical exponent $z=2$. Thus, its scaling properties are those of a system with total effective (Euclidean) dimension $D=z+d=4$. This tells us that all operators with scaling dimension $\Delta>4$ are irrelevant, whereas operators with scaling dimension $\Delta<4$ are relevant. This system is actually a multicritical point with an exact line of fixed points parametrized by the coupling constant $\kappa$, the stiffness of the operator $\left(\nabla^{2} \varphi\right)^{2}$. This operator has scaling dimension $\Delta=4$ and it is marginal. Since this fixed point is a free-field theory, the operator $\left(\nabla^{2} \varphi\right)^{2}$ is also exactly marginal and, in the absence of all other operators, has a vanishing beta function.

On the other hand, the operator $(\vec{\nabla} \varphi)^{2}$ has scaling dimension $\Delta=2<4$ and it is relevant. As we saw, the sign of its coupling constant $A$ tunes this quantum phase transition. Similarly, the operator $(\vec{\nabla} \varphi)^{4}$ has scaling dimension $\Delta=4$ and is (superficially) marginal. However, Grinstein (1981) showed that the beta function for its coupling constant $g_{4}$ (defined in Eq. (9.162)) is negative,

$$
\begin{equation*}
\beta\left(g_{4}\right)=a \frac{\partial g_{4}}{\partial a}=-c g_{4}^{2}+\cdots \tag{9.200}
\end{equation*}
$$

where $a$ is a length scale and $c$ is a positive dimensionless constant. Therefore, this operator is actually marginally irrelevant and its coupling constant $g_{4}$ scales (logarithmically slowly) to zero at long distances. If $g_{4} \neq 0$ its flow leads to logarithmic corrections to scaling in the correlation functions.

The quantum criticality of the dimer model on the square lattice at the RK point is well described by the quantum Lifshitz model (Fradkin et al., 2004). In this case even the marginally irrelevant coupling $g_{4}$ is absent, so it leads to no corrections to scaling effects. However, for the case of the honeycomb lattice, the quantum Lifshitz model admits a possible cubic term in the action of the form $g_{3}\left(\partial_{x} \varphi\right)\left(\left(\partial_{x} \varphi\right)^{2}-3\left(\partial_{y} \varphi\right)^{2}\right)$, which is invariant under a $\pi / 3$ rotation and an inversion $\varphi \rightarrow-\varphi$. This operator has scaling dimension $\Delta_{3}=3$ and it is relevant. For
$g_{3} \neq 0$ the coupling constant $g_{3}$ grows, and the system flows to a fixed point with a finite correlation length and a first-order phase transition. By symmetry, operators of this type cannot arise for a system on the square lattice.

The scaling dimension of the charge operators $O_{n}[\varphi], \Delta_{n}=n^{2} /(8 \pi \kappa)$, varies continuously as a function of $\kappa$. These operators are irrelevant for $n>\sqrt{32 \pi \kappa}$ and relevant otherwise. For the QDM at the RK point (on the square lattice), all operators with $n>2$ are irrelevant. In particular, at the free-dimer point, $\kappa=1 /(8 \pi)$, the operator $O_{4}$ has dimension $\Delta_{4}=16$ and it is strongly irrelevant. Additional interactions in the lattice model cause dimers to attract each other, leading to an increase in the value of $\kappa>1 /(8 \pi)$ and a decrease of the scaling dimensions. On the other hand, the combined effect of the marginally irrelevant operator $(\vec{\nabla} \varphi)^{4}$ and of the (commensurability) charge operator $O_{4}$ drives the system into a sequence of commensurate phases known as an (incomplete) devil's staircase (Fradkin et al., 2004), thus avoiding the quantum Lifshitz critical point. This, however, is not what happens in the simple QDM on the square lattice where it is accessible.

How about magnetic (vortex) operators $\widetilde{O}_{m}$ ? As we saw, operators of this type violate the dimer constraint. For instance, we associated the operator $\widetilde{O}_{1}$ with the hole-creation operator. Similarly, dimers (or valence bonds) connecting two nearest-neighboring sites of the same sublattice also violate the constraint. On the square lattice operators of this type, formally operators with magnetic charge 2, cause a crossover to the QDM on the triangular lattice (Ardonne et al., 2004), a system that is known to be in a topological phase (Moessner and Sondhi, 2001b) akin to the deconfined phase of the $\mathbb{Z}_{2}$ gauge theory. At the free-dimer point these operators have scaling dimension $\widetilde{\Delta}_{m}=m^{2} / 4$ and are relevant for all $m<4$. In particular, the operators with magnetic charge 2 have dimension 1 , and are strongly relevant. When added to the action, these operators destabilize the quantum Lifshitz fixed point since they cause the magnetic excitations to proliferate. Their condensation caused the gauge symmetry to be reduced to its $\mathbb{Z}_{2}$ subgroup and the system is in a deconfined phase. The mechanism of proliferation (or condensation) of charge-2 operators driving the system into a topological (deconfined) $\mathbb{Z}_{2}$ phase was noted by Sachdev and Read (1991) and by Mudry and Fradkin (1994) on the basis of earlier work in gauge theories by Fradkin and Shenker (1979) that we have already discussed.