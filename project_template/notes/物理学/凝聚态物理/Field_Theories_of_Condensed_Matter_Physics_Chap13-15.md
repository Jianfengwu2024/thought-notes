# Field Theories of Condensed Matter Physics Chap13-15
## 13

## The fractional quantum Hall effect

In this chapter we discuss the theory of the fractional quantum Hall effect (FQHE). The explanation of this phenomenon has required the development of completely new ideas and methods. The concept of fractional statistics has become a crucial element of the theory.

The physical system involves fermions in strong correlation in the absence of time-reversal symmetry. The treatment of systems with these features cannot be achieved successfully within the conventional Hartree-Fock approach to correlations in condensed matter physics. A new condensed state of matter, the Laughlin state, had to be discovered.

The Chern-Simons gauge theory, which has already been discussed in Chapter 10, has come to play an essential role in the theory of the FQHE, both as a way to describe the low-energy phenomena and as a theoretical tool to explain the most important features of the problem.

We begin with a detailed description of the theory of the Laughlin wave function, which is followed by the field-theory approaches to the FQHE.

### 13.1 The Laughlin wave function

In the last two sections of the previous chapter we considered the problem of electrons moving on a 2D surface in the presence of a perpendicular magnetic field. We assumed that the electron density was such that an integer number of Landau levels (or bands) would be completely filled. Because the system has an energy gap, the interactions do not play a very important role. In fact, a perturbative expansion (in powers of the coupling constant) around a state with one filled Landau level (or more) is likely to be well behaved. Since all processes involve exciting one or several electrons across the gap, the energy denominators are always different from zero. The ground-state wave function for the interacting system is smoothly connected to the ground-state wave function of the non-interacting system. The
arguments of the last three sections of Chapter 12 indicate that the topological properties of the wave function for the interacting and the non-interacting systems will then be the same. In other words, naive perturbation theory is a good approximation in this case.

However, if one Landau level (or band) is partially filled, perturbation theory breaks down. Consider for simplicity the case of $N$ particles in a magnetic field $B$ with $N_{\phi}$ quanta of flux piercing the surface. The filling fraction $v=N / N_{\phi}$ is not an integer. We will consider the simpler (and popular) case of $v=1 / m$, where $m$ is an odd integer and for each electron there are $m$ quanta of flux. We further assume that the magnetic field is sufficiently large that all the Zeeman energies are so large that the system is completely spin-polarized. This is the case for most, but not all, of the experimentally accessible systems. In this limit, the electrons behave as charged spinless fermions, each carrying an electric charge of $-e$.

In Section 12.7 we saw that, if just one Landau level is filled ( $m=1$ ), the ground state is non-degenerate and its wave function is a Slater determinant. For $m>1$ only a fraction $1 / m$ of the states in the first Landau level will be occupied. The remaining $(m-1) / m$ states are empty. However, occupied and unoccupied states have exactly the same energy. The actual ground state has then to be determined through some sort of degenerate-perturbation-theory scheme. This procedure is bound to be very complex due to the macroscopic degeneracy of the Landau level. The resulting state is likely to have properties that are completely different from those of the unperturbed state.

The observed phenomenology of the FQHE also suggests the need for a completely different state. A non-interacting fractionally filled state would still exhibit a fractional Hall conductance $\sigma_{x y}$ since, at least for a Galilean-invariant system, the conductance is determined by the amount of charge present. But such a state would not support the very precise plateaus which are seen in experiments, since additional particles can be added at almost no energy cost. The fact that the FQHE is seen only in the purest samples indicates that the effect is the result of electron correlations due to the Coulomb interactions. Moreover, the "quenching" of the single-particle kinetic energies by the magnetic field is telling us that the interactions play a dominant role. The FQHE is the result of the competition between degeneracy and interactions. In this sense, the FQHE is an example of strongly correlated electron systems.

The model which naturally describes the essential features of the physical system consists of an assembly of $N$ electrons that occupy a fraction $v$ of the $N_{\phi}$ states of the lowest Landau level and interact with each other via Coulomb interactions. The ground state of this system must be such that it should not support any gapless excitations (otherwise the plateaux of $\sigma_{x y}$ could not be so sharp) and it should be essentially insensitive to the presence of impurities. The wave function should be
a complex function of the electron coordinates. This requirement follows from the fact that, if a magnetic field is present, time-reversal invariance is broken explicitly. Finally, Fermi statistics demands that the wave function $\Psi_{N}\left(\vec{r}_{1}, \ldots, \vec{r}_{N}\right)$ should be antisymmetric under the permutation of the positions of any pair of particles. Thus, $\Psi_{N}$ vanishes as the positions of two particles approach each other.

We will now construct a wave function that satisfies all these requirements. Here we follow closely Laughlin's construction (Laughlin, 1983, 1987). Let us consider first the low-density limit $v \ll 1(m \gg 1)$. In this limit, the average separation between two electrons is much larger than the single-particle magnetic length $l_{0}\left(a_{0} \gg l_{0}\right)$. The electrons do not venture very far away and interactions further restrict their motion. The natural ground state in this limit is an electron crystal, known as a Wigner crystal. The electrons are able to minimize the total energy by arranging themselves on a triangular lattice. Actually the "guiding center coordinates" form a triangular lattice. A Hartree approximation yields a Wigner crystal state $\Psi_{\mathrm{W}}\left(z_{1}, \ldots, z_{N}\right)$ of the form (Laughlin, 1987)

$$
\begin{equation*}
\Psi_{\mathrm{W}}\left(z_{1}, \ldots, z_{N}\right)=\sum_{P}(-1)^{P} \phi_{j_{1} l_{1}}\left(z_{P_{1}}\right) \ldots \phi_{j_{N} l_{N}}\left(z_{P_{N}}\right) \tag{13.1}
\end{equation*}
$$

where the single-particle states $\phi_{j l}(z)$ are

$$
\begin{equation*}
\phi_{j l}(z) \approx \exp \left(-\frac{1}{4 l_{0}^{2}}\left|z_{j l}^{(0)}\right|^{2}+\frac{1}{2 l_{0}^{2}} \bar{z} z_{j l}^{(0)}-\frac{1}{4 l_{0}^{2}}|z|^{2}\right) \tag{13.2}
\end{equation*}
$$

and $z_{j l}^{(0)}$ are the (complex) coordinates of the $(j, l)$ site of a triangular lattice,

$$
\begin{equation*}
z_{j l}^{(0)}=l_{0} \sqrt{\frac{4 \pi m}{\sqrt{3}}}\left(j+\left(\frac{1}{2}+i \frac{\sqrt{3}}{2}\right) l\right) \tag{13.3}
\end{equation*}
$$

The Wigner crystal state $\Psi_{\mathrm{W}}$ does satisfy a number of the requirements listed above but not all of them. First, it does support elementary excitations with arbitrarily low excitation energy, namely the sound waves of the Wigner crystal. Since the state is a periodic array of charges, the charge density is not uniform and it is strongly affected by the presence of impurities, which can, and do, pin the crystal at the impurity sites. Thus, this pinned state does not support any charge current unless the electric field is larger than some critical threshold value $E_{0}$ determined by the local pinning forces. This behavior is commonly seen in other charge crystals, such as incommensurate charge-density waves. The best-known examples are the quasi-1D system $\mathrm{NbSe}_{3}$ and the quasi-2D system $\mathrm{NbSe}_{2}$.

As the electron density increases (i.e. $m$ grows smaller) the inter-particle separation $a_{0}$ decreases. For a triangular lattice, we have that $a_{0}$ is related to the filling fraction $v$ and the cyclotron length $l_{0}$ through the relation $v=(4 \pi / \sqrt{3})\left(l_{0} / a_{0}\right)^{2}$. As $v$ approaches unity, the ratio $l_{0} / a_{0}$ becomes also a number of order unity. Thus,
as $v$ grows larger, there should be a phase transition from a Wigner crystal to a state that supports a Hall current. Indeed, as $v$ grows larger and the cyclotron length approaches the inter-particle spacing, the quantum fluctuations should increase. The leading fluctuations should involve exchanges of a small number of nearby particles. In particular, there are processes that involve three-particle exchanges around an elementary triangle (or "ring").

Such processes spoil the long-range positional order of the Wigner crystal. If these ring exchanges are able to proliferate, the Wigner crystal melts and there is a transition to a liquid state (Kivelson et al., 1986). This phase transition is most likely to be of first order but, depending on microscopic properties, it can also be of second order. The resulting liquid state is expected to have uniform density. What is more important, and far less trivial to see from this point of view, is that it should have a gap to all excitations. The phonon of the Wigner crystal should disappear from the physical spectrum. This phenomenon is strongly reminiscent of the Higgs mechanism in a superconductor coupled to a dynamical gauge field: the phase mode of the superconductor gets "eaten" by the gauge field, which, in the process, becomes massive. We will see below that the FQHE has a hidden, dynamically generated, gauge field that is responsible for the most striking features of this phenomenon.

The liquid state should be regarded as a new condensed state of matter. Laughlin was the first to realize that this state is fundamentally different from other known condensed states, such as magnetism or superconductivity. Drawing on intuition he gained by studying systems with small numbers of particles, Laughlin proposed the following class of wave functions (Laughlin, 1983):

$$
\begin{equation*}
\Psi_{N}\left(\vec{r}_{1}, \ldots, \vec{r}_{N}\right)=\prod_{1 \leq j<k \leq N} f\left(z_{j}-z_{k}\right) \exp \left(-\sum_{j=1}^{N} \frac{\left|z_{j}\right|^{2}}{4 l_{0}^{2}}\right) \tag{13.4}
\end{equation*}
$$

where $f(z)$ is a suitably chosen analytic function of the complex coordinates $\left\{z_{1}, \ldots, z_{N}\right\}$, i.e. single-particle states from just the lowest Landau level. Fermi statistics demands that $f\left(z_{j}-z_{k}\right)$ be an odd function of $z_{j}-z_{k}$ that vanishes as $z_{j} \rightarrow z_{k}$. These requirements, together with the demand that $\Psi_{N}$ should be an eigenstate of the total $L_{z}$ orbital angular momentum, can be met by the simple choice of $f(z) \sim z^{m}$, where $m$ is an odd integer. We thus arrive at the celebrated Laughlin wave function $\Psi_{m}$,

$$
\begin{equation*}
\Psi_{m}\left(\vec{r}_{1}, \ldots, \vec{r}_{N}\right)=\prod_{1 \leq j<k \leq N}\left(z_{j}-z_{k}\right)^{m} \exp \left(-\sum_{j=1}^{N} \frac{\left|z_{j}\right|^{2}}{4 l_{0}^{2}}\right) \tag{13.5}
\end{equation*}
$$

This wave function is remarkable in several ways. Laughlin has computed the overlap between $\Psi_{m}$ and the exact wave function of a small cluster of electrons
(with $N \leq 3$ ) and interaction pair potentials $u(r)=1 / r,-\ln r, \exp \left(-r^{2} / 2\right)$. He found that in all cases the overlap was better than $99 \%$. For a special potential, namely $u(r)=u_{0} \nabla^{2} \delta(\vec{r})$, Trugman and Kivelson (1985) showed that $\Psi_{m}^{(N)}$ is the exact ground-state wave function for all $m$. Haldane (1983b) constructed a class of Hamiltonians for which Laughlin-like states are the exact ground states (see below). Laughlin originally thought of $\Psi_{m}$ as a variational wave function, with a Jastrow form, which is commonly used to construct variational states for superfluid liquid helium (Feenberg, 1969).

However, $\Psi_{m}$ does not contain any variational parameters! The ground state is determined by just finding the values of $m$ that minimize the energy. But $m$ is in fact determined by the total angular momentum! It is remarkable that this guess works so well. It is an important problem for theorists to explain why this is such a good state. The Laughlin wave function also admits a number of generalizations that describe other filling fractions. These are the hierarchical wave functions of Haldane (1983b) and Halperin (1984). We will consider mostly the $1 / m$ Laughlin states. In the next chapters we will see why these wave functions, and their generalizations, are good representations of fluids that exhibit the FQHE.

### 13.1.1 The plasma analogy

We now follow Laughlin and determine the optimal value of $m$, as well as the nature of the correlations present in $\Psi_{m}$, by using the plasma analogy. Let $\rho\left(z_{1}, \ldots, z_{N}\right)$ be the joint probability distribution function

$$
\begin{equation*}
\rho\left(z_{1}, \ldots, z_{N}\right)=\left|\Psi_{m}\left(z_{1}, \ldots, z_{N}\right)\right|^{2} \tag{13.6}
\end{equation*}
$$

which can be thought of as a classical probability distribution for a one-component plasma with $N$ particles located at $\left\{z_{1}, \ldots, z_{N}\right\}$. Let $U\left(z_{1}, \ldots, z_{N}\right)$ be the classical potential energy, and let $\beta$ be an effective inverse temperature $(\beta=m)$. The potential $U$ is defined by demanding that $\rho$ should have the Gibbs form

$$
\begin{equation*}
\left|\Psi_{m}\left(z_{1}, \ldots, z_{N}\right)\right|^{2}=e^{-\beta U\left(z_{1}, \ldots, z_{N}\right)} \tag{13.7}
\end{equation*}
$$

The classical potential energy $U\left(z_{1}, \ldots, z_{N}\right)$ is given by

$$
\begin{equation*}
U\left(z_{1}, \ldots, z_{N}\right)=-2 \sum_{1 \leq j<k \leq N} \ln \left|z_{j}-z_{k}\right|+\frac{1}{2 m} \sum_{j=1}^{N}\left|z_{j}\right|^{2} \tag{13.8}
\end{equation*}
$$

where we have used units of length such that $l_{0}=1$. The potential $U\left(\left\{z_{j}\right\}\right)$ is equal to the total energy of a gas of classical particles each carrying charge $q=1$, which interact with each other via the 2D Coulomb pair potential,
$V_{C}\left(z_{j}-z_{k}\right)=-\ln \left|z_{j}-z_{k}\right|$, and with a uniform neutralizing background charge of density $\rho_{0}=1 /(2 \pi m)$. The interaction with the background charge is represented in $U(z)$ by the last term. This can be checked by noting that $\nabla^{2}(1 /(2 m))|z|^{2}=$ $2 / m$, which agrees with the density being uniform and equal to $1 /(2 \pi m)$. This is the one-component classical plasma.

The plasma analogy is a very powerful tool for the investigation of the properties of the Laughlin wave function. All expectation values of local operators in the Laughlin state can be represented as an ensemble average in the plasma. There is a well-developed body of knowledge on this subject. For instance, the average electron density at point $z,\langle\rho(z)\rangle$, is

$$
\begin{equation*}
\langle\rho(z)\rangle=\frac{\int d^{2} z_{1} \ldots d^{2} z_{N} \rho(z)\left|\Psi_{m}\left(z_{1}, \ldots, z_{N}\right)\right|^{2}}{\int d^{2} z_{1} \ldots d^{2} z_{N}\left|\Psi_{m}\left(z_{1}, \ldots, z_{N}\right)\right|^{2}} \tag{13.9}
\end{equation*}
$$

where the local charge density $\rho(z)$ is equal to

$$
\begin{equation*}
\rho(z)=\sum_{j=1}^{N} \delta\left(z-z_{j}\right) \tag{13.10}
\end{equation*}
$$

In the plasma analogy, we write the average charge density $\langle\rho(z)\rangle$ in the form of a weighted average over the positions of the classical charges

$$
\begin{equation*}
\langle\rho(z)\rangle=\frac{1}{Z_{\text {plasma }}} \int d^{2} z_{1} \ldots d^{2} z_{N} \rho(z) e^{-\beta U\left(z_{1}, \ldots, z_{N}\right)} \tag{13.11}
\end{equation*}
$$

where $Z_{\text {plasma }}$ is the partition function for a classical one-component plasma. The potential energy $U\left(z_{1}, \ldots, z_{N}\right)$ has a simple form in terms of the density variable $\rho(z)$ :

$$
\begin{equation*}
U[\rho(z)]=\int d^{2} z \int d^{2} z^{\prime}\left(\rho(z)-\rho_{0}\right) V\left(z-z^{\prime}\right)\left(\rho\left(z^{\prime}\right)-\rho_{0}\right) \tag{13.12}
\end{equation*}
$$

where $V\left(z-z^{\prime}\right)$ is the 2D Coulomb pair potential

$$
\begin{equation*}
V\left(z-z^{\prime}\right)=-\ln \left|z-z^{\prime}\right| \tag{13.13}
\end{equation*}
$$

and $\rho_{0}$ is the background charge.
If the density is low, the quantization of the charge of the individual electrons is very important. The dominant configuration in this limit is a Wigner crystal. But, as the density increases, the local density experiences larger fluctuations. As a result, the local average charge is not equal to the electron charge. In other words, at high densities, the local average density $\rho(z)$ becomes a continuous variable. In this limit, any additional local charge will be rapidly screened, and the local average density should become equal to the background charge. Conversely, at low densities, screening is very poor and the local density can deviate significantly from the
value of the background charge density. Thus, the electron liquid corresponds to the (high-density) plasma phase of the one-component Coulomb gas. The approximation in which the local density becomes a continuous variable is known as the Debye-Hückel theory. It is straightforward to verify that in this limit $\langle\rho(z)\rangle=\rho_{0}$. This result is also seen to hold in Monte Carlo simulations, at least for $m \leq 5$. More details on how the plasma methods are applied to the theory of the Laughlin state can be found in Laughlin's article in the book edited by Prange and Girvin (Laughlin, 1987), where he uses extensively the methods described by G. Stell for classical fluids (Stell, 1964).

### 13.1.2 The Haldane Hamiltonians

Let us now discuss Haldane's construction of a class of Hamiltonians that have the Laughlin state as their exact ground state. Haldane begins by noticing that a system with a disk geometry with wave functions that vanish on the boundary (in the thermodynamic limit) is equivalent to a (large) sphere of radius $R$. A uniform magnetic field flows outwards from the sphere. The Laughlin states are then isotropic on the sphere. Since the magnetic field is normal to the sphere, it is the field of a magnetic monopole in the center of the sphere with magnetic charge equal to the total flux. Let $2 S$ be the total flux, in units of the flux quantum $h c / e$. The single-particle states for particles of charge $e$ moving on the surface of the sphere have to be smooth and single-valued. This demand forces the magnetic charge $2 S$ of the monopole to be an integer. This is the famous Dirac quantization condition (Dirac, 1931). We have already encountered this problem in Chapter 7 when we described the path-integral formalism for spin.

The single-particle Hamiltonian $H$ now becomes

$$
\begin{equation*}
H=\frac{\omega_{\mathrm{c}}}{2 \hbar S}\left[\vec{r} \wedge\left(\vec{p}+\frac{e}{c} \vec{A}\right)\right]^{2} \tag{13.14}
\end{equation*}
$$

where $\omega_{\mathrm{c}}$ is the cyclotron frequency. Let $\vec{n}$ be a unit vector normal to the surface of the sphere, i.e. $\vec{n}=\vec{r} / R$. The magnetic field of the monopole is $\vec{\nabla} \wedge \vec{A}=B \vec{n}$, where $B=\hbar c S /\left(e R^{2}\right)$. The vector $\vec{\Lambda}=\vec{n} \wedge(\vec{p}+(e / c) \vec{A})$ satisfies the algebra

$$
\begin{equation*}
\left[\Lambda_{a}, \Lambda_{b}\right]=i \hbar \epsilon_{a b c}\left(\Lambda_{c}-\hbar S n_{c}\right) \tag{13.15}
\end{equation*}
$$

and $\vec{\Lambda} \cdot \vec{n}=\vec{n} \cdot \vec{\Lambda}=0$. Of course, this is the same problem with the gaugecovariant momentum as that which we discussed in Section 12.1. Here too we should define another operator, which should generate the magnetic translations. For the spherical geometry, this is just rotations. The generators of rotations are $\vec{L}=\vec{\Lambda}+\hbar S \vec{n}$ and satisfy the algebra

$$
\begin{align*}
{\left[L_{a}, L_{b}\right] } & =i \hbar \epsilon_{a b c} L_{c} \\
{\left[L_{a}, \vec{L}^{2}\right] } & =0  \tag{13.16}\\
{\left[L_{a}, n_{b}\right] } & =i \hbar \epsilon_{a b c} n_{c} \\
{\left[L_{a}, \Lambda_{b}\right] } & =i \hbar \epsilon_{a b c} \Lambda_{c}
\end{align*}
$$

The last condition implies that $L_{a}$ commutes with $\vec{\Lambda}^{2}$ and hence with $H$. Thus, $L_{a}$ and $H$ can be diagonalized simultaneously. The first two equations are telling us that the operators $L_{a}$ satisfy the algebra of angular momentum. The eigenvalues of $\vec{L}^{2}$ are $\hbar^{2} l(l+1$ ), where $l=S+n, n$ is a positive integer (or zero), and $2 S$ is an integer. This is just the Dirac quantization condition. Thus, $\vec{\Lambda}^{2}$ is equal to $\vec{L}^{2}-\hbar^{2} S^{2}$. We conclude that the single-particle Hamiltonian has eigenstates $|m, l\rangle$ such that

$$
\begin{align*}
L_{3}|m, l\rangle & =\hbar m|m, l\rangle \\
\vec{L}^{2}|m, l\rangle & =\hbar^{2} l(l+1)|m, l\rangle  \tag{13.17}\\
H|m, l\rangle & =\hbar \omega_{\mathrm{c}} \frac{l(l+1)-S}{2 S}|m, l\rangle
\end{align*}
$$

where $|m| \leq l$. Thus, each level is $(2 l+1)$-fold degenerate. In terms of $n$ and $S$ the degeneracy is $2 n+1+2 S$. The lowest energy level, which corresponds to the lowest Landau level, has $n=0(l=S)$, and it is $(2 S+1)$-fold degenerate. If we represent the unit vector $\vec{n}$ in terms of a two-component spinor $\vec{u}=(u, v)$, since $\vec{n}=u_{\alpha}^{*} \vec{\tau}_{\alpha \beta} u_{\beta}\left(\vec{\tau}_{\alpha \beta}\right.$ are the Pauli matrices), then the Hilbert space of the lowest Landau level is spanned by the coherent states $\Psi_{(\alpha, \beta)}^{(S)}(u, v)=\left(\alpha^{*} u+\beta^{*} v\right)^{2 S}$, with $|\alpha|^{2}+|\beta|^{2}=1$, which are polynomials of degree $2 S$.

In this notation the Laughlin states $\Psi_{m}$ are

$$
\begin{equation*}
\Psi_{m}=\prod_{1 \leq j<k \leq N}\left(u_{j} v_{k}-u_{k} v_{k}\right)^{m} \tag{13.18}
\end{equation*}
$$

with $S=\frac{1}{2} m(N-1)$ for states with $N$ particles. It can be readily checked that this state is also an eigenstate of $\vec{L}^{2}=\left(\sum_{j=1}^{N} \vec{L}_{j}\right)^{2}$ with zero eigenvalue since the three operators $L^{+}=\hbar \sum_{j=1}^{N} u_{j} \partial / \partial v_{j}, L^{-}=\hbar \sum_{j=1}^{N} v_{j} \partial / \partial u_{j}$, and $L_{3}=$ $\hbar \sum_{j=1}^{N}\left(u_{j} \partial / \partial u_{j}-v_{j} \partial / \partial v_{j}\right)$ annihilate $\Psi_{m}$. The state $\Psi_{m}$ is thus rotationally and translationally invariant on the sphere.

Haldane further remarked that the states $\Psi_{m}$ are exact eigenstates of a class of Hamiltonians constructed in the following manner. Let $P_{J}(L)$ be a projection operator on states with $\vec{L}^{2}$ eigenvalue equal to $\hbar^{2} J(J+1)$, and let $\Pi_{S}$ be the projection operator onto the Hilbert space of the lowest Landau level. Haldane proposed to write a projected Hamiltonian as

$$
\begin{equation*}
\Pi_{S} H \Pi_{S}=\sum_{1 \leq j<k \leq N}\left\{\sum_{j>2 S-m} P_{J}\left(\vec{L}_{j}+\vec{L}_{k}\right) V_{J}\right\} \tag{13.19}
\end{equation*}
$$

which, by construction, annihilates the state $\Psi_{m}$.

### 13.1.3 Elementary excitations of the Laughlin state

The Laughlin wave function is an accurate approximation for the ground state of the system only if the electron density $\rho_{0}$ and the magnetic field $B$ are such that the filling fraction $v$ is exactly equal to $1 / m$. For densities and fields for which $v$ is close, but not equal, to $1 / m$, it is no longer a good approximation. As we will see below, the states with $\nu \approx 1 / m$ are excited states of the $\nu=1 / m$ state. It is an essential feature of the Laughlin state that these states are not degenerate with the ground state even in the thermodynamic limit. The Laughlin state is found to have a non-zero gap for all elementary excitations. The Laughlin state thus represents a uniform incompressible fluid.

Several excited states are possible. We may change the magnetic field locally without changing the total number of particles. This can be achieved by inserting an infinitesimally thin solenoid, carrying exactly one flux quantum, at one point of the sample (say, the origin $z=0$ ). Or, we may add (or subtract) an electron without changing the external field. Furthermore, we may imagine local density fluctuations that change neither the field nor the total particle number. Among these excitations, there are density fluctuations involving states only in the lowest Landau levels (phonons) or states in the first (or higher) excited Landau levels (plasmons). For the sake of simplicity, in this section I will consider only the state obtained by the addition of a solenoid. This state is a Laughlin quasihole. We will briefly discuss the collective modes in a later section in which we will discuss the fieldtheory picture of the Laughlin state.

The Laughlin state $\Psi_{m}$ for $v=1 / m$ is the product of a polynomial in the particle coordinates and an exponential factor. We can expand $\Psi_{m}$ in a series of the form

$$
\begin{equation*}
\Psi_{m}\left(z_{1}, \ldots, z_{N}\right)=\sum_{\left\{k_{1}, \ldots, k_{N}\right\}} C_{k_{1}, \ldots, k_{N}} z_{1}^{m k_{1}} \ldots z_{N}^{m k_{N}} \exp \left(-\sum_{j=1}^{N} \frac{\left|z_{j}\right|^{2}}{4 l_{0}^{2}}\right) \tag{13.20}
\end{equation*}
$$

The integers $\left\{k_{1}, \ldots, k_{N}\right\}$ run from 0 to $N$ with the restriction

$$
\begin{equation*}
\sum_{j=1}^{N} k_{j}=\frac{1}{2} N(N-1) \tag{13.21}
\end{equation*}
$$

For the wave function to describe a system of fermions, the coefficients $C_{k_{1}, \ldots, k_{N}}$ must be antisymmetric under the permutation of the indices.

Under a rigid rotation of the system as a whole by an angle $\theta$ about the origin, the coordinate $z_{j}$ of each particle is multiplied by a phase factor $e^{i \theta}$. Thus, $\Psi_{m}$ transforms like

$$
\begin{equation*}
\Psi_{m}\left(e^{i \theta} z_{1}, \ldots, e^{i \theta} z_{n}\right)=e^{i m \frac{N}{2}(N-1) \theta} \Psi_{m}\left(z_{1}, \ldots, z_{N}\right) \tag{13.22}
\end{equation*}
$$

which means that the total $L_{z}$ angular momentum of $\Psi_{m}$ is equal to

$$
\begin{equation*}
M_{m}=\frac{1}{2} m N(N-1) \tag{13.23}
\end{equation*}
$$

Let us now imagine that an infinitesimally thin solenoid carrying one unit of flux is introduced adiabatically into the system and pierces the disk at the origin, $z=0$. For flux $\phi$, the single-particle state changes from $z^{n} e^{-|z|^{2} /\left(4 l_{0}^{2}\right)}$ to $z^{n+\alpha} e^{-|z|^{2} /\left(4 l_{0}^{2}\right)}$, where $\alpha=\phi / \phi_{0}$, with $\phi_{0}$ being the flux quantum $h c / e$. Thus, if $\phi=\phi_{0}$, the $n$th state in the first Landau level becomes the $(n+1)$ th state in the same Landau level.

The Laughlin state reacts very much in the same way, by shifting each $z_{j}^{m k_{j}}$ to $z_{j}^{m k_{j}+1}$ and undergoing a change in the coefficients. This process does not alter the exponential factor. If we ignore the change in the coefficients $C_{k_{1}, \ldots, k_{N}}$ the shift can be seen to be the same as a multiplication of $\Psi_{m}$ by a factor of the form $\Pi_{j=1}^{N} z_{j}$. This observation, which was also made first by Laughlin (1983), motivates the choice of the following ansatz for the wave function $\Psi_{m}^{(+)}\left(z_{0} ;\left\{z_{j}\right\}\right)$ of the quasihole state created by the adiabatic insertion of a solenoid:

$$
\begin{equation*}
\Psi_{m}^{(+)}\left(z_{0} ; z_{1}, \ldots, z_{N}\right)=\prod_{j=1}^{N}\left(z_{j}-z_{0}\right) \Psi_{m}\left(z_{1}, \ldots, z_{N}\right) \tag{13.24}
\end{equation*}
$$

This state has angular momentum $M_{m}^{(+)}=M_{m}+N$. Furthermore, the amplitude $\Psi_{m}^{(+)}$vanishes whenever the coordinate $z_{j}$ of any of the $N$ electrons approaches $z_{0}$. Thus, at $z_{0}$ the effect of the solenoid is to deplete the charge density. Hence, this state can be regarded as a quasihole. Naturally, since the total charge is the same as in the Laughlin state and since the charge density away from $z_{0}$ should be uniform, the only place where the charge missing from $z_{0}$ could have gone to is infinity - or, rather, the physical boundary of the system. Thus, the solenoid causes the electron liquid to swell and to spill over the region it had occupied before the solenoid was introduced.

The quasihole excitation energy $\epsilon_{0}$ can be calculated using the plasma analogy. I will not describe this calculation here, since it demands getting into a very technical plasma calculation that is better described elsewhere. The computation is given in considerable detail by Laughlin in his excellent review on the FQHE (Laughlin,
1987). What will matter, for the purposes of our discussion, is that the excitation energy is finite and has a finite limit as $N \rightarrow \infty$. Thus, the spectrum of quasiholes has an energy gap $\epsilon_{0}$.

The charge $q_{0}$ of the quasihole can also be determined using the plasma analogy. It turns out that $q_{0}$ is a fraction of the electron charge, namely $q_{0}=+e / m$. The argument goes as follows. The normalization of the quasihole wave function is

$$
\begin{equation*}
\left|\Psi_{m}^{(+)}\left(z_{0} ; z_{1}, \ldots, z_{N}\right)\right|^{2}=\Pi_{j=1}^{N}\left|z_{j}-z_{0}\right|^{2}\left|\Psi_{m}\left(z_{1}, \ldots, z_{N}\right)\right|^{2} \tag{13.25}
\end{equation*}
$$

We can rewrite this expression in terms of a modified classical potential energy $U\left(z_{0} ; z_{1}, \ldots, z_{N}\right)$, which has the simple form

$$
\begin{equation*}
U\left(z_{0} ; z_{1}, \ldots, z_{N}\right)=U\left(z_{1}, \ldots, z_{N}\right)-\frac{2}{m} \sum_{j=1}^{N} \ln \left|z_{j}-z_{0}\right| \tag{13.26}
\end{equation*}
$$

where $U\left(z_{1}, \ldots, z_{N}\right)$ is the classical potential energy for the one-component plasma.

The potential energy $U\left(z_{0} ; z_{1}, \ldots, z_{N}\right)$ represents a classical one-component plasma interacting with a charge $-1 / m$, which is held fixed at $z=z_{0}$. The most important properties of a plasma are its uniform density (in the absence of external probes) and the exact screening of all external probes. Since the external probe has charge $-1 / m$, it repels the charges of the plasma within a distance $\xi$, which is the plasma screening length. For $\left|z-z_{0}\right|<\xi$, the plasma density is suppressed by the repulsive force due to the probe. The amount of charge expelled from the vicinity of $z_{0}$ is equal to $-1 / m$, so there is a missing charge of $+1 / m$, which neutralizes the charge of the probe. This behavior is indeed seen in detailed calculations, such as the ones reported by Laughlin (1987). Thus, the quasihole behaves like a positive charge $q_{0}=+e / m$. Away from the quasihole, the charge density is uniform and equal to its value in the absence of the quasihole. Where has the missing charge gone? To the boundary, of course! Indeed, if the $N$-particle system occupies an area of radius $R$ in the absence of the quasihole, its presence forces the liquid to expand from $R$ to $R+\delta R$. The extra area occupied by the deformed liquid is $\pi(R+\delta R)^{2}-\pi R^{2}$. Since $R$ is large, the density is uniform and equal to $1 /\left(2 \pi m l_{0}^{2}\right)$. The radius $R$ has to grow just enough to accommodate the extra charge $1 / m$. Thus, we get the relation

$$
\begin{equation*}
\left[\pi(R+\delta R)^{2}-\pi R^{2}\right] \frac{1}{2 \pi m l_{0}^{2}}=\frac{1}{m} \tag{13.27}
\end{equation*}
$$

where $R / l_{0}$ is given by

$$
\begin{equation*}
\frac{R}{l_{0}}=\sqrt{2 m N} \tag{13.28}
\end{equation*}
$$

The total change $\delta R$ of the radius is

$$
\begin{equation*}
\frac{\delta R}{2 l_{0}}=\sqrt{m N+1}-\sqrt{m N} \tag{13.29}
\end{equation*}
$$

By inspecting the expansions in single-particle wave functions both of the Laughlin state and of the quasihole, we see that the highest single-particle angular momentum which enters into the Laughlin state has angular momentum equal to $m N$. For the quasihole the highest occupied state has angular momentum $m N+1$. Indeed, the change $\delta R$ of the radius is exactly the amount necessary to include the $(m N+1)$ th state inside the region occupied by the liquid. On the other hand, had we added or extracted a whole particle from the liquid ( $N \rightarrow \pm 1$ ), the change in the area would have been $m$ times the amount we just calculated. This can be seen quite easily in the expansion of the Laughlin state in single-particle Landau states. We conclude that the quasihole has fractional charge $+e / m$.

The quasi-electron can be constructed (qualitatively) in a similar manner. Instead of adiabatically introducing a solenoid that increases the local magnetic field, the solenoid now carries a flux that decreases the field by exactly one flux quantum. An argument along the lines of what we did above for the quasihole shows that a solenoid carrying a negative flux decreases the angular momentum of each singleparticle state by one unit. Except for the state with angular momentum zero, which gets shifted to a state on the first excited Landau level, the addition of a solenoid with negative flux is equivalent to a downwards shift of the angular momentum of all single-particle states by one unit. At the level of the Laughlin wave function, this is accomplished by a derivative operator that acts on the polynomial factor in the wave function (Laughlin, 1983),

$$
\begin{equation*}
\Psi_{m}^{(-)}\left(z_{0} ;\left\{z_{j}\right\}\right)=\exp \left(-\sum_{j=1}^{N} \frac{\left|z_{j}\right|^{2}}{4 l_{0}^{2}}\right) \prod_{j=1}^{N}\left(2 \frac{\partial}{\partial z_{j}}-\frac{\bar{z}_{0}}{l_{0}^{2}}\right) \prod_{1 \leq j<k \leq N}\left(z_{j}-z_{k}\right)^{m} \tag{13.30}
\end{equation*}
$$

The same line of argument as that used above on the quasihole shows that the charge $q_{0}$ of the quasi-electron is also fractional, but negative, $q_{0}=-e / m$.

The construction of the quasihole, as well as that of the quasi-electron, has a strong resemblance to the construction of soliton states in 1D systems in quantum field theory (Jackiw and Rebbi, 1976) and in 1D condensed matter systems (Su and Schrieffer, 1981; Heeger et al., 1988) (see Chapter 16). However, these two problems are qualitatively different. In fact, the Laughlin states either are non-degenerate, as in the case of a spherical geometry, or have a degeneracy of topological origin, as in the case of a torus. In contrast, the 1D systems which have solitons have ground states that spontaneously break a (discrete) global symmetry.

The degeneracy of their ground states is a consequence of this phenomenon. Nevertheless, the operator which introduces an extra solenoid has some of the characteristic features of a soliton operator. While the short-distance details are unimportant, the topological property of the extra vector potential (i.e. the line integral on a non-contractible loop) is the only essential property of the "solenoid" or quasihole operator. In fact, the addition of the solenoid changes the value of the circulation of the vector potential around the physical boundary of the system. In turn, this change determines the amount of charge which is "spilled over the edge." This extra charge becomes an excitation of the states at the edge of the system.

The quasiholes and quasi-electrons cannot be made in isolation directly by just adding or subtracting electrons. As a matter of fact a hole (not a quasihole) requires the removal of a full electron, which carries integer charge. Thus, electrons and holes are equivalent to bound states of $m$ fractionally charged quasiparticles. For certain definite electron densities, the excess electrons which cannot be accommodated into a $1 / m$ Laughlin state can be placed into a generalized Laughlin state. The excess electrons can be regarded as bound states of quasiholes or quasi-electrons, which, if their number is right, can form a Laughlin state. But this is a Laughlin state for anyons, not electrons. This mechanism is known as the hierarchy scheme of Haldane and Halperin.

The construction of the quasihole also suggests a different interpretation of the Laughlin wave function as well as generalizations that are valid for other filling fractions. Let us write the Laughlin wave function $\Psi_{m}$ in the following suggestive form due to J. Jain (Jain, 1989a, 1989b, 1990):

$$
\begin{equation*}
\Psi_{m}\left(z_{1}, \ldots, z_{N}\right)=\prod_{1 \leq j<k \leq N}\left(z_{j}-z_{k}\right)^{m-1} \Psi_{1}\left(z_{1}, \ldots, z_{N}\right) \tag{13.31}
\end{equation*}
$$

The factor $\Psi_{1}\left(z_{1}, \ldots, z_{N}\right)$ is just the wave function for $N$ particles exactly filling up the lowest Landau level. Following the construction of the quasihole, the factor in front of $\Psi_{1}$ is interpreted as the result of having attached a solenoid to each particle. The flux carried for each solenoid is equal to $(m-1)$ flux quanta. Unlike in the quasihole construction, the solenoids are physically attached to the particles, which fill up the Landau level and move around with them. This factorization, which appears to be quite innocent, has the virtue (and the beauty) of bringing the fractional and integer Hall states together. It is also telling us that the Laughlin state can be viewed as the result of a dynamical generation of a local gauge field that generates the solenoids which partially screen the external magnetic flux. In fact, the amount of screening is sufficient to turn the fractional filling of a Landau level of the bare field into the complete filling of a Landau level of the unscreened part of the field. Later in this chapter we will see that this is the starting point of the field-theoretic description of the FQHE.

In summary, the $1 / m$ Laughlin states are seen to have quasihole and quasielectron excitations that have fractional charge $\pm e / m$ and fractional statistics $\pm \pi / m$. These quasiparticles are obtained by the adiabatic addition or removal of infinitesimally thin solenoids carrying one flux quantum. The adiabatic nature of this process is essential to this construction, since it is necessary to make the fluid swell enough to include one additional Landau orbit without promoting electrons to higher Landau levels or producing ripples in the fluid. All these bulk excitations have finite energy gaps. This is required by the incompressibility of the fluid, which guarantees the accuracy of the adiabatic process.

### 13.1.4 The statistics of quasiparticles in Laughlin's theory

In this section we will discuss the statistics of the quasiholes within the firstquantized picture of the FQHE. In the last section of this chapter we will return to this problem and derive the main results directly from the field theory. The statistics of the quasi-electron can also be discussed along very similar lines.

The quasihole wave function discussed in Section 13.1.3 is given up to a normalization factor. For a single quasihole, the amplitude of this wave function is not very important. However, at the moment we wish to construct a wave function for two or more quasiholes, the normalization begins to play a rather subtle but important role. During a process that involves dragging a single quasihole very slowly around a closed loop, the phase of the quasihole wave function undergoes very important changes. Indeed, since the quasihole carries an electric charge of $-e / m$, we should expect an Aharonov-Bohm effect $1 / m$ times smaller than the value for electrons. In fact, the Aharonov-Bohm effect is perhaps the "operationally correct" way of measuring the charge of a quasiparticle.

The quasihole wave function is physically appealing, but it has several drawbacks. Consider, for example, a naively constructed wave function for two quasiholes located at $z=u$ and $z=w$, respectively,

$$
\begin{equation*}
\Psi^{(+)}\left(u, w, z_{1}, \ldots, z_{N}\right)=N(u, w) \prod_{j=1}^{N}\left(z_{j}-u\right)\left(z_{j}-w\right) \Psi_{m}\left(z_{1}, \ldots, z_{N}\right) \tag{13.32}
\end{equation*}
$$

The factor $N(u, w)$ has a subtle origin. On the one hand, it can be regarded as the normalization constant for the state with two quasiholes. However, if that were indeed the case, $N$ would have to be a function not only of $u$ and $w$, but also of $\bar{u}$ and $\bar{w}$, and it would not be analytic. More importantly, this amplitude has to be determined from the requirement that it represents the physical process of adiabatic insertion of two thin solenoids. In Section 13.1.3 we saw that the form of the wave function for one quasihole was suggested by the observation that the
adiabatic insertion of a solenoid carrying one flux quantum implied an increase of the angular momentum relative to the location of the solenoid by one unit per particle. We also argued that the quasihole carries charge $e / m$. Later in this section we will give a path-integral argument to support this picture.

But let us assume that we have already manufactured one quasihole, which is sitting at $z=u$. We now want to create another quasihole, but this time at $z=w$. The adiabatic addition of the extra solenoid must change the angular momentum of the particle also by one unit, but this time the angular momentum is measured relative to $w$, not to $u$. Furthermore, since the quasihole carries electric charge equal to $e / m$, as we drag one quasihole slowly around the other we should pick up an extra Aharonov-Bohm phase factor. This phase factor should correspond to an Aharonov-Bohm effect for a charge equal to $e / m$ (Kivelson and Roček, 1985).

We are going to determine the amplitude (or "normalization constant") $N(u, w)$ by demanding that the following conditions are met: (a) the wave function should be an analytic function of the coordinates of the electrons $\left\{z_{1}, \ldots, z_{N}\right\}$ and of the quasiholes $u$ and $w$ up to exponential factors; and (b) the normalization of this wave function should be invariant under translations, i.e. it should be a function of differences of the coordinates $\left\{z_{1}, \ldots, z_{N}, u, w\right\}$. The analyticity condition is just the requirement that the wave function should have contributions only from the lowest Landau level. These conditions, as well as the solution, were first proposed by Halperin $(1983,1984)$.

The normalization of the state (or, rather, the probability density with two quasiholes at coordinates $u$ and $w$ ) is

$$
\begin{equation*}
\left|\Psi_{m}^{(+)}\left(u, w, z_{1}, \ldots, z_{N}\right)\right|^{2}=e^{-\beta U_{\operatorname{eff}}\left(u, w, z_{1}, \ldots, z_{N}\right)} \tag{13.33}
\end{equation*}
$$

where the effective potential $U_{\text {eff }}$ is given by

$$
\begin{align*}
U_{\text {eff }}\left(u, w, z_{1}, \ldots, z_{N}\right)= & U\left(z_{1}, \ldots, z_{N}\right)-\frac{2}{m} \sum_{j=1}^{N}\left(\ln \left|u-z_{j}\right|+\ln \left|w-z_{j}\right|\right) \\
& +\frac{2}{m} \ln |N(u, w)| \tag{13.34}
\end{align*}
$$

The translation invariance and analyticity requirements are met by choosing the factor $N(u, w)$ to be

$$
\begin{equation*}
N(u, w)=N_{0}(u-w)^{1 / m} \exp \left(-\frac{|u|^{2}+|w|^{2}}{4 l_{0}^{2} m}\right) \tag{13.35}
\end{equation*}
$$

With this choice, the Halperin wave function for two quasiholes is

$$
\begin{align*}
\Psi_{m}^{(+)}\left(u, w ;\left\{z_{j}\right\}\right)= & N_{0}(u-w)^{1 / m} \prod_{j=1}^{N}\left[\left(u-z_{j}\right)\left(w-z_{j}\right)\right] \\
& \times \exp \left(-\frac{1}{4 m l_{0}^{2}}\left(|u|^{2}+|w|^{2}\right)\right) \Psi_{m}\left(z_{1}, \ldots, z_{N}\right) \tag{13.36}
\end{align*}
$$

and the effective potential $U_{\text {eff }}$ is

$$
\begin{align*}
U_{\text {eff }}\left(u, w ;\left\{z_{j}\right\}\right)= & -2 \sum_{1 \leq j<k \leq N} \ln \left|z_{j}-z_{k}\right| \\
& -\frac{2}{m} \sum_{j=1}^{N}\left(\ln \left|z_{j}-u\right|+\ln \left|z_{j}-w\right|\right)-\frac{2}{m^{2}} \ln |u-w| \\
& +\frac{1}{2 m l_{0}^{2}} \sum_{j=1}^{N}\left|z_{j}\right|^{2}+\frac{1}{2 m^{2} l_{0}^{2}}\left(|u|^{2}+|w|^{2}\right) \tag{13.37}
\end{align*}
$$

In plasma language, this is the potential energy of a set of $N$ classical particles (each carrying charge $(-1)$ ) at sites $\left\{z_{1}, \ldots, z_{N}\right\}$ interacting with two extra particles (each with charge $-1 / m$ ) at $u$ and $w$. All $N+2$ charges are coupled to a neutralizing background charge of density $1 /\left(2 \pi m l_{0}^{2}\right)$. The manifest translation invariance of $U_{\text {eff }}$ takes care of the translation invariance requirement.

The wave function for two quasiholes is a multivalued function of the complex coordinates of the two quasiholes. As a result, if the quasiholes undergo a counterclockwise exchange process, defined as a counterclockwise rotation by $\pi$ of one quasihole around the other followed by a translation that restores the relative position of the quasiholes, the phase of this wave function changes by $\pi / m$,

$$
\begin{equation*}
\Psi_{m}^{(+)}\left(u, w ;\left\{z_{j}\right\}\right)=e^{+\frac{i \pi}{m}} \Psi_{m}^{(+)}\left(w, u ;\left\{z_{j}\right\}\right) \tag{13.38}
\end{equation*}
$$

Thus, the quasiholes are anyons with statistical angle $\delta=\pi / m$ relative to bosons or $\delta=((m-1) / m) \pi$ relative to fermions. This remarkable result suggests that the FQHE can be described in terms of a theory of either bosons or fermions coupled to a hidden (or dynamically generated) Chern-Simons gauge field. In the next section we will describe both a "Landau-Ginzburg" approach to the FQHE and a field theory that are based on this idea.

We conclude that the quasiholes of the Laughlin state carry fractional charge $+e / m$ and have fractional statistics $\pi / m$. This is a very striking result. Arovas, Schrieffer, and Wilczek (Arovas et al., 1984) have given an alternative derivation of both results using an argument based on the concept of Berry phases (Simon, 1983; Berry, 1984). Rather than following that path, we will now construct a path
integral to represent the motion of the quasiholes. The key ingredient of our construction is the observation that the quasihole wave functions are coherent states (Kivelson et al., 1987). Thus, we can adapt the formalism described in Chapter 7 to construct the path integral for spin- $S$ particles, to treat the quantum dynamics of the quasiholes. The reader should keep in mind that the following arguments are heuristic at best. In Sections 13.8 and 13.9 I give a different derivation of the same result, which is based on the field-theory approach to the FQHE. Naturally, the results agree!

Let us begin with the wave function for a single quasihole. Let us define the state $|z\rangle$ as

$$
\begin{equation*}
|z\rangle=\exp \left(-\frac{1}{4 m l_{0}^{2}}|z|^{2}\right) \prod_{j=1}^{N}\left(z_{j}-z\right)|m\rangle \tag{13.39}
\end{equation*}
$$

where $|m\rangle$ is the Laughlin state. The set of states $\{|z\rangle\}$ is over-complete (Laughlin, 1987). The overlap between two states $|z\rangle$ and $|w\rangle$ is

$$
\begin{equation*}
\langle z \mid w\rangle=\exp \left(-\frac{1}{4 m l_{0}^{2}}\left(|z|^{2}+|w|^{2}\right)\right)\langle m| \prod_{j=1}^{N}\left[\left(\bar{z}_{j}-\bar{z}\right)\left(w_{j}-w\right)\right]|m\rangle \tag{13.40}
\end{equation*}
$$

Except for the exponential factor, $\langle z \mid w\rangle$ is an analytic function of $\bar{z}$ and $w$ separately. Thus, $\langle z \mid w\rangle$ can be related to $\langle z \mid z\rangle$ by analytic continuation (Laughlin, 1987). The result is that the inner product is given by

$$
\begin{equation*}
\langle z \mid w\rangle=\exp \left(-\frac{1}{4 m l_{0}^{2}}\left(|z|^{2}+|w|^{2}\right)+\frac{1}{2 m l_{0}^{2}} \bar{z} w\right)\langle z \mid z\rangle \tag{13.41}
\end{equation*}
$$

Indeed, the translation invariance of the 2D one-component plasma guarantees that the overlap $\langle z \mid z\rangle$ is just a constant that is independent of $z$. Also, up to a normalization constant we can write the resolution of the identity

$$
\begin{equation*}
1=\mathcal{N} \int|z\rangle\langle z| d^{2} z \tag{13.42}
\end{equation*}
$$

We consider now a process in which we prepare the quasihole in a coherent state $\left|z_{0}\right\rangle$ at time $t=t_{0}$. We now ask for the quantum-mechanical amplitude $\left\langle z_{0}, t_{0}+\right.$ $T\left|z_{0}, t_{0}\right\rangle$ for the quasihole to return to $\left|z_{0}\right\rangle$ after a very long time $T$. Upon inserting the resolution of identity at $\mathcal{N}_{\tau}$ intermediate times $t_{n}=t_{0}+n \Delta t$ in the limit $\mathcal{N}_{\tau} \rightarrow \infty$ and $\Delta \rightarrow 0$ with $T=\mathcal{N}_{\tau} \Delta t$ fixed, we can write

$$
\begin{equation*}
\left\langle z_{0}, T+t_{0} \mid z_{0}, t_{0}\right\rangle=\mathcal{N} \int \prod_{n=1}^{\mathcal{N}_{\tau}} d^{2} z_{n} \prod_{n=1}^{\mathcal{N}_{\tau}}\left\langle z_{n} \mid z_{n+1}\right\rangle \tag{13.43}
\end{equation*}
$$

where $z_{n}=z\left(t_{0}+n \Delta t\right)$ and $z_{N_{\tau}}=z_{0}$.

In the limit $\Delta t \rightarrow 0$ we can approximate the overlaps by the expression

$$
\begin{equation*}
\left\langle z_{n+1} \mid z_{n}\right\rangle \approx\left\langle z_{n} \mid z_{n}\right\rangle \exp \left[\frac{1}{4 m l_{0}^{2}}\left(\bar{z}_{n} \frac{d z_{n}}{d t}-z_{n} \frac{d \bar{z}_{n}}{d t}\right) \Delta t\right] \tag{13.44}
\end{equation*}
$$

Thus, the path integral for one quasihole is

$$
\begin{equation*}
\left\langle z_{0}, T+t_{0} \mid z_{0}, t_{0}\right\rangle=\mathcal{N} \int \mathcal{D} z \exp \left(\frac{1}{2 m l_{0}^{2}} \int_{0}^{T} d t \bar{z} \frac{d z}{d t}\right) \tag{13.45}
\end{equation*}
$$

By expanding the exponent in its real and imaginary components we get the identity

$$
\begin{equation*}
\frac{1}{2 m l_{0}^{2}} \int_{0}^{T} d t \bar{z} \frac{d z}{d t}=i \frac{e / m}{\hbar c} \oint_{\Gamma} \vec{A}(\vec{x}) \cdot d \vec{x} \tag{13.46}
\end{equation*}
$$

where $\vec{A}$ is the vector potential for the field $B$ in the isotropic gauge and $\Gamma$ is the path. Thus, the amplitude is given by the path integral

$$
\begin{equation*}
\left\langle z_{0}, T+t_{0} \mid z_{0}, t_{0}\right\rangle=\mathcal{N} \int \mathcal{D} \vec{x} \exp \left(i \frac{e / m}{\hbar c} \oint_{\Gamma} d \vec{x} \cdot \vec{A}(\vec{x})\right) \tag{13.47}
\end{equation*}
$$

which is just the path integral for a particle of mass $M$ and charge $e / m$ moving in the field $B=\vec{\nabla} \times \vec{A} \cdot \hat{z}$ in the limit $M \rightarrow 0$. This limit is just the projection onto the lowest Landau level. Notice that the normalization constants $\langle z \mid z\rangle$ have been absorbed into the uninteresting factor $\mathcal{N}$. The amplitude for the path $\Gamma$ of this path integral is just the Aharonov-Bohm phase factor (Arovas et al., 1984). At the end of this chapter we give a derivation of this result that is based on the field-theory approach, which does not require the choice of a set of wave functions with a specific form.

Let us briefly discuss the generalization of this result for the problem of two quasiholes. Let us assume that at some initial time $t_{0}$ the quasiholes are prepared in the state $\left|z_{0}, w_{0}\right\rangle$. Once again we ask for the amplitude $\left\langle z_{0}^{\prime}, w_{0}^{\prime} ; t_{0}+T \mid z_{0}, w_{0} ; t\right\rangle$ after a very long time $T$. The normalized two-quasihole states $|z, w\rangle$ will be taken to be of the Halperin form. The derivation for two quasiholes follows quite closely the arguments given for one quasihole. However, the two results differ in two important aspects: (a) the multivalued phase factors $(z-w)^{1 / m}$ lead to an "induced" gauge interaction, and (b) the diagonal overlaps are no longer constant but functions of $|z-w|$. The final result is

$$
\begin{equation*}
\left\langle\vec{z}_{0}^{\prime}, \vec{w}_{0}^{\prime} \mid \vec{z}_{0}, \vec{w}_{0}\right\rangle=\mathcal{N} \int \mathcal{D} \vec{z} \mathcal{D} \vec{w} \exp \left(\frac{i}{\hbar} S_{\mathrm{eff}}^{(2)}(\vec{z}, \vec{w})\right) \tag{13.48}
\end{equation*}
$$

where $S_{\text {eff }}^{(2)}(\vec{z}, \vec{w})$ is the effective action for two quasiholes.

The integration measure, denoted here by $\mathcal{D} \vec{z} \mathcal{D} \vec{w}$, has absorbed the diagonal overlaps $\prod_{n}\left\langle\vec{z}_{n}, \vec{w}_{n} \mid \vec{z}_{n}, \vec{w}_{n}\right\rangle$. Laughlin (1987) has shown that these factors are constant at long distances but vanish at short distances like $|\vec{z}-\vec{w}|^{2 / m}$. Thus, their main effect is to remove from the path integral the paths in which the particles get to be too close to each other. This feature of the integration measure is essential, since fractional statistics cannot be defined if the paths of the particles are allowed to cross.

The effective action $S_{\text {eff }}^{(2)}$ for two holes is

$$
\begin{align*}
S_{\text {eff }}^{(2)}(\vec{z}, \vec{w})=\int_{t_{0}}^{t_{0}+T} d t\{ & \frac{d \vec{z}}{d t} \cdot\left(\frac{e / m}{c} \vec{A}(\vec{z})+\frac{\hbar}{m} \overrightarrow{\mathcal{A}}(\vec{z}-\vec{w})\right) \\
& \left.+\frac{d \vec{w}}{d t} \cdot\left(\frac{e / m}{c} \vec{A}(\vec{w})+\frac{\hbar}{m} \overrightarrow{\mathcal{A}}(\vec{w}-\vec{z})\right)\right\} \tag{13.49}
\end{align*}
$$

where $m$ is the index of the Laughlin state (not to be confused with a mass!) and $\vec{A}$ is the electromagnetic vector potential. The "induced" vector potential $\overrightarrow{\mathcal{A}}$ arises from the multivalued factors. It is given by the total change of phase accumulated during the process, i.e.

$$
\begin{gather*}
\frac{1}{m} \int_{t_{0}}^{t_{0}+T} d t\left(\overrightarrow{\mathcal{A}}(\vec{z}-\vec{w}) \cdot \frac{d \vec{z}}{d t}+\overrightarrow{\mathcal{A}}(\vec{w}-\vec{z}) \cdot \frac{d \vec{w}}{d t}\right) \\
\quad=\frac{1}{m}\left[\arg \left(z_{0}^{\prime}-w_{0}^{\prime}\right)-\arg \left(z_{0}-w_{0}\right)\right] \tag{13.50}
\end{gather*}
$$

This equation requires only that the "induced" vector potential $\overrightarrow{\mathcal{A}}$ give the correct winding number. It is clear that $\overrightarrow{\mathcal{A}}$ can be represented by an effective Chern-Simons gauge field with an appropriately chosen coupling constant. One possible choice for $\overrightarrow{\mathcal{A}}$ was given by Arovas, Schrieffer, and Wilczek (Arovas et al., 1984) (in the isotropic gauge),

$$
\begin{equation*}
\mathcal{A}_{j}(\vec{z}-\vec{w})=\frac{\epsilon_{j k}(z-w)_{k}}{|\vec{z}-\vec{w}|^{2}} \tag{13.51}
\end{equation*}
$$

which has the quantized circulation

$$
\begin{equation*}
\oint_{C[\vec{w}]} \mathcal{A}_{j}(\vec{z}-\vec{w}) d z_{j}=2 \pi \tag{13.52}
\end{equation*}
$$

for any closed path $C[\vec{w}]$ that encloses the point $\vec{w}$.
Hence, each quasihole carries a solenoid with just one flux quantum. In agreement with our discussion of Section 10.5, these "induced" or statistical gauge fields change the statistics of the quasiparticles. In the problem of spinons in the chiral spin state (see Section 10.4) the quasiparticles are semions or half-fermions. The quasiholes of the FQHE have statistical angle equal to $\pi / m$. This property can
be seen very directly from the coherent-state path integral. Let us consider a process in which two quasiholes undergo a counterclockwise exchange, during which $\Delta\left[\arg \left(z_{0}-w_{0}\right)\right]=\pi$. The amplitude of the path integral picks up a phase of $e^{i \pi / m}$. Below, when we derive the Laughlin theory from a field theory, we will see that these phase factors arise directly from a Chern-Simons gauge field.

### 13.2 Composite particles

In the past sections we discussed the first quantization approach to the FQHE. Here we will discuss an alternative approach that is based on a special form of field theory, the Chern-Simons theory, which we discussed extensively in Chapter 10 in the context of theories of anyons. Here we will show that the Chern-Simons theory is quite useful from two different points of view: (a) as a Landau-Ginzburg theory for the long-distance phenomenology and (b) as a way to derive the Laughlin state from a microscopic theory. For reasons of space and conciseness, in this chapter I will discuss only the simplest case of fully polarized (i.e. "spinless") electrons. Also I will restrict myself for now to the theory of the Laughlin sequence and to the first level of the hierarchy. Generalizations of this theory are discussed in Chapter 14.

In Section 13.1.3 we saw that the construction of the state for the quasihole suggested a different interpretation of the Laughlin wave function that was first proposed by Jain. This structure of the state for the quasihole gave rise to the picture of the FQHE as a ground state of "electrons bound to fluxes." From this point of view, all that the long-range correlations do is make it possible for the electrons to "nucleate" flux. Jain (1989a) realized that, in the Laughlin state, the electrons nucleate enough flux that the bound states exactly fill up an integer number of the Landau levels of the unscreened part of the field. In this formulation, the FQHE is an integer quantum Hall effect of the bound states. Jain proposed writing the Laughlin wave function in the suggestive factorized form

$$
\begin{equation*}
\Psi\left(z_{1}, \ldots, z_{N}\right)=\prod_{i<j}\left(z_{i}-z_{j}\right)^{m-1} \chi_{1}\left(z_{1}, \ldots, z_{N}\right) \tag{13.53}
\end{equation*}
$$

where $\chi_{1}$ is the wave function for a completely filled lowest Landau level

$$
\begin{equation*}
\chi_{1}\left(z_{1}, \ldots, z_{N}\right)=\prod_{i<j}\left(z_{i}-z_{j}\right) \exp \left(-\sum_{i=1}^{N} \frac{\left|z_{i}\right|^{2}}{4 \ell^{2}}\right) \tag{13.54}
\end{equation*}
$$

The phases associated with the factor multiplying $\chi_{1}$ can be regarded as representing an even number $(m-1)$ of fluxes that are attached to each coordinate $z_{i}$ where an electron is present. It is a crucial feature of this picture that the electrons bind to an even number of flux quanta and, in this way, they retain their
fermion character. We will also see below that this approach has allowed a simple description of the so-called hierarchy states in terms of wave functions that have a factorized structure.

In Chapter 10 we saw that there is a natural and local way to attach particles and fluxes together: the Chern-Simons gauge theory. Girvin and MacDonald (1987) were the first to propose that the Laughlin state had a hidden form of off-diagonal long-range order (ODLRO). They suggested an order parameter for the Laughlin state, but it turned out to be non-local. As a matter of fact, the Girvin-MacDonald order parameter is closely related to the anyon operators constructed in Chapter 10. We also saw that it is always possible to map any 2 D fermion system into an equivalent problem with arbitrarily chosen statistics. We are going to use this mapping in two different ways: as a mapping (a) to a theory of bosons and (b) to a theory of fermions (each coupled to a Chern-Simons gauge field with a suitably chosen coupling constant).

The Girvin-MacDonald argument that the Laughlin state has a hidden form of ODLRO goes as follows. The ground-state correlation function $\rho\left(z, z^{\prime}\right)$ for the electron operator (also called the one-particle density matrix) in the $m$ th Laughlin state for a system with $N$ particles $\left|0_{m} ; N\right\rangle$ is given by the expansion

$$
\begin{align*}
\rho\left(z, z^{\prime}\right) & \equiv\left\langle 0_{m} ; N\right| \hat{\psi}^{\dagger}(z) \hat{\psi}\left(z^{\prime}\right)\left|0_{m} ; N\right\rangle \\
& =\sum_{n, k} \varphi_{n}^{*}(z) \varphi_{k}\left(z^{\prime}\right)\left\langle 0_{m} ; N\right| \hat{\psi}_{n}^{\dagger} \hat{\psi}_{k}\left|0_{m} ; N\right\rangle \tag{13.55}
\end{align*}
$$

where $\left\{\varphi_{n}(z)\right\}$ is the set of one-particle wave functions of the lowest Landau level (see Section 12.1), and $n$ and $k$ run over all the occupied states.

Since the states $\left\{\varphi_{n}(z)\right\}$ all have different values of angular momentum, the expectation value $\left\langle 0_{m}\right| \hat{\psi}_{n}^{\dagger} \hat{\psi}_{n}\left|0_{m} ; N\right\rangle$ in an isotropic uniform state, such as the Laughlin state, takes the very simple form

$$
\begin{equation*}
\left\langle 0_{m} ; N\right| \hat{\psi}_{n}^{\dagger} \hat{\psi}_{k}\left|0_{m} ; N\right\rangle=v \delta_{n k} \tag{13.56}
\end{equation*}
$$

where $v$ is the filling fraction. The correlation function $\rho\left(z, z^{\prime}\right)$ can be shown to be given by (Girvin and Jach, 1984)

$$
\begin{equation*}
\rho\left(z, z^{\prime}\right)=\frac{v}{2 \pi} \exp \left(-\frac{\left|z-z^{\prime}\right|^{2}}{4 \ell^{2}}+\frac{1}{4 \ell^{2}}\left(z^{*} z^{\prime}-z^{\prime *} z\right)\right) \tag{13.57}
\end{equation*}
$$

This identity shows that the one-particle electron-correlation function decays exponentially fast in a Laughlin ground state.

Consider now the composite operator $\hat{K}(z)$, which was introduced by Read (1989) (see also Rezayi and Haldane (1988)), who refined the arguments of Girvin
and MacDonald. The operator $\hat{K}(z)$, which creates one electron, together with a solenoid carrying $m$ flux quanta, at point $z$ is

$$
\begin{equation*}
\hat{K}(z)=\hat{\psi}^{\dagger}(z) \hat{U}^{m}(z) \tag{13.58}
\end{equation*}
$$

where $\hat{U}(z)$ is the second-quantized operator that creates a quasihole at $z$.
Each quasihole has charge $1 / m$ and fractional statistics $\pi / m$, and $m$ quasiholes have charge 1 and statistics $\pi$. Thus, $m$ holes have the same quantum numbers as a missing electron. Furthermore, the operator $\hat{K}(z)$ obeys bosonic commutation relations. This implies that the operator $\hat{K}(z)$ must have a non-vanishing expectation value in a ground state with an indefinite number of particles. This property is indeed strongly reminiscent of Bose condensation. More precisely, Read showed that the following identity holds (Read, 1989):

$$
\begin{equation*}
\left\langle 0_{m} ; N\right| \hat{K}^{\dagger}(z) \hat{K}\left(z^{\prime}\right)\left|0_{m} ; N\right\rangle=\frac{1}{\rho_{0}}\left\langle 0_{m} ; N+1\right| \hat{\rho}(z) \hat{\rho}\left(z^{\prime}\right)\left|0_{m} ; N+1\right\rangle \rightarrow \rho_{0} \tag{13.59}
\end{equation*}
$$

where $\hat{\rho}(z)$ is the density operator and its expectation value is $\rho_{0}=1 /(2 \pi m)$. Thus, there is ODLRO in the Laughlin state.

Since ODLRO is the hallmark of superfluidity, its existence suggested the idea that there should be a Landau-Ginzburg theory for the FQHE. However, unlike superfluids, the Laughlin state is an incompressible state and it does not have excitations with arbitrarily low energy (in the bulk!). So, whatever the LandauGinzburg theory happens to be, it cannot describe a system with any Goldstone modes. Now, a system with an order parameter that is complex, as the GirvinMacDonald order parameter is, in principle should have Goldstone modes, unless the order parameter is coupled to a fluctuating gauge field. In this case, the gauge field would "eat" the Goldstone mode and, at the same time, become massive. Hence, there would not be any gapless modes left. This phenomenon, which is usually called the Higgs mechanism, does take place in charged superfluids, i.e. superconductors. This is the Meissner state of a superconductor.

The problem with this picture is that the fractional quantum Hall fluid is not a superconducting state! As we will see, although the Landau-Ginzburg theory of the fractional quantum Hall state is strongly reminiscent of (and suggested by) the physics of a superconductor, it is a theory with a dynamical gauge field that "eats" the would-be Goldstone boson, leaving behind nothing to be eaten by the electromagnetic gauge field. As a consequence, there is no flux expulsion in the Laughlin state and no Meissner effect. Furthermore, the absence of a Goldstone mode from the spectrum of the fractional quantum Hall state also implies that it does not support a Josephson effect, the physical signature of superconducting coherence. Moreover, the non-locality of the Girvin-MacDonald order parameter
is clearly indicating that a naive application of the Higgs mechanism is not possible. So the gauge fields have to arise from the fluctuations about the Laughlin ground state rather than coming from "honest-to-god" electromagnetism. In other words, the gauge field in question has to be self-generated by the correlations that describe this phase of matter. Furthermore, since the Laughlin state is not a superconductor, the mechanism for generation of mass (or gaps) to all excitations should be manifestly gauge-invariant. This fact suggested to Girvin and MacDonald that the gauge field should have a Chern-Simons form.

### 13.3 Landau-Ginzburg theory of the fractional quantum Hall effect

The methods that we have discussed for the field-theoretic treatment of anyons can also be used to study the FQHE. Zhang, Hansson, and Kivelson (Zhang et al., 1989) used a mapping to bosons in terms of a Chern-Simons gauge field. This procedure allowed them to derive the qualitative features of a Landau-Ginzburg theory for the FQHE. Their Landau-Ginzburg approach, which is valid at low energies and long distances, qualitatively confirmed the idea that the FQHE had a hidden form of ODLRO without Goldstone bosons. Read (1989) gave a careful derivation of the Landau-Ginzburg theory directly from the Laughlin wave function.

Let us use now the methods of Chapter 10 to derive the Landau-Ginzburg theory. Consider once again a system of $N$ electrons moving on a plane in the presence of an external uniform magnetic field $B$ perpendicular to the plane. The electrons will be assumed to have an inter-particle interaction governed by a pair potential $V(|\vec{r}|)$, for two electrons separated a distance $|\vec{r}|$ on the plane. The magnetic field will be assumed to be so large that the system is completely polarized and that we can ignore the spin degrees of freedom. The eigenstates $\Psi\left(\vec{x}_{1}, \ldots, \vec{x}_{N}\right)$ are eigenfunctions of the (first-quantized) Hamiltonian $\hat{H}$

$$
\begin{equation*}
\hat{H}=\sum_{i=1}^{N}\left\{\frac{1}{2 M}\left(\vec{p}_{j}-\frac{e}{c} \vec{A}_{j}\left(\vec{x}_{j}\right)\right)^{2}+e A_{0}\left(\vec{x}_{j}\right)\right\}+\sum_{i<j} V\left(\left|\vec{x}_{i}-\vec{x}_{j}\right|\right) \tag{13.60}
\end{equation*}
$$

where we have included the coupling both to the electromagnetic vector potential $\vec{A}$ and to the scalar potential $A_{0}$. Hence, we are dealing with $N$ spinless fermions of charge $-e$ and mass $M$. In second-quantized notation, the electron operator is $\psi(x)$ and the dynamics of the system is governed by the action $\mathcal{S}$

$$
\begin{align*}
\mathcal{S}= & \int d^{3} z\left\{\psi^{*}(z)\left[i D_{0}+\mu\right] \psi(z)+\frac{\hbar^{2}}{2 M}|\vec{D} \psi(z)|^{2}\right\} \\
& -\frac{1}{2} \int d^{3} z \int d^{3} z^{\prime}\left(|\psi(z)|^{2}-\rho_{0}\right) V\left(\left|\vec{z}-\vec{z}^{\prime}\right|\right)\left(\left|\psi\left(z^{\prime}\right)\right|^{2}-\rho_{0}\right) \tag{13.61}
\end{align*}
$$

where $\rho_{0}$ is the average density. The quantum partition function $\mathcal{Z}$ for this system is (at zero temperature and in real time)

$$
\begin{equation*}
\mathcal{Z}=\int \mathcal{D} \psi^{*} \mathcal{D} \psi e^{\frac{i}{\hbar} \mathcal{S}} \tag{13.62}
\end{equation*}
$$

### 13.3.1 Composite bosons

In Chapter 10 we showed that a system of fermions in two dimensions is equivalent to a system of ("composite") bosons coupled to a Chern-Simons gauge field $\mathcal{A}_{\mu}$. The action $\mathcal{S}_{\mathrm{B}}$ for the Bose system is

$$
\begin{align*}
\mathcal{S}_{\mathrm{B}}= & \int d^{3} z\left\{\phi^{*}(z)\left[i D_{0}+\mu\right] \phi(z)+\frac{1}{2 M}|\vec{D} \phi(z)|^{2}+\frac{\theta}{4} \epsilon_{\mu \nu \lambda} \mathcal{A}^{\mu} \mathcal{F}^{\nu \lambda}\right\} \\
& -\frac{1}{2} \int d^{3} z \int d^{3} z^{\prime}\left(|\phi(z)|^{2}-\rho_{0}\right) V\left(\left|\vec{z}-\vec{z}^{\prime}\right|\right)\left(\left|\phi\left(z^{\prime}\right)\right|^{2}-\rho_{0}\right) \tag{13.63}
\end{align*}
$$

The covariant derivatives $D_{\mu}$ in this action contain both electromagnetic and Chern-Simons gauge fields, i.e.

$$
\begin{equation*}
D_{\mu}=\partial_{\mu}+i \frac{e}{\hbar c} A_{\mu}+i \mathcal{A}_{\mu} \tag{13.64}
\end{equation*}
$$

In Eq. (13.63) $\phi(z)$ is the Bose field, $\theta=1 /(2 \pi n)$, and $n$, for the moment, is an arbitrary odd integer. The reader should note that the Chern-Simons coupling constant $\theta=1 /(2 \pi n)$ that we have to use for the flux-attachment transformation formally violates the requirement that it be quantized in order for the theory to be gauge-invariant on closed surfaces. The formulation that we are using here (and in the fermionic version as well) is correct only for a theory defined on a surface with the topology of a large disk. In Section 14.1.1 we will give a consistent formulation of flux attachment on a torus.

It is an implicit assumption of this theory that the bosons must have a hard core since, otherwise, the fractional-statistics transformation does not make sense. It is very difficult to keep track of this constraint in the continuum. On a lattice the hardcore constraint does not pose any serious problem. However, if we are interested only in the long-distance and low-energy behavior, we can replace the hard core by an effective short-distance repulsive force. This change amounts to adding an extra term $\mathcal{S}_{\text {hc }}$ to the action of the form

$$
\begin{equation*}
\mathcal{S}_{\mathrm{hc}}=\int d^{3} z\left(-\lambda|\phi(z)|^{4}\right) \tag{13.65}
\end{equation*}
$$

The total action is $\mathcal{S}_{\text {eff }}=\mathcal{S}_{\mathrm{B}}+\mathcal{S}_{\text {hc }}$ and we have now a bosonic functional integral

$$
\begin{equation*}
\mathcal{Z}=\int \mathcal{D} \phi^{*} \mathcal{D} \phi \mathcal{D} \mathcal{A}_{\mu} \exp \left(\frac{i}{\hbar} \mathcal{S}_{\mathrm{eff}}\left[\phi, \phi^{*}, \mathcal{A}_{\mu} ; A_{\mu}\right]\right) \tag{13.66}
\end{equation*}
$$

This functional integral can be regarded as a Landau-Ginzburg theory and was first proposed by Zhang, Hansson, and Kivelson (Zhang et al., 1989). As in the Bogoliubov theory of the dilute Bose gas, the parameter $\lambda$ cannot be calculated directly from this theory. Zhang, Hansson, and Kivelson dropped the repulsive-pair-potential term altogether and replaced it by the $|\phi|^{4}$ term. We now follow their treatment and extract the low-energy behavior.

### 13.3.2 Landau-Ginzburg theory

The effective theory looks like a theory of bosons coupled to a gauge field. In the absence of the gauge field, the bosons condense and spontaneously break the global $\mathrm{U}(1)$ phase symmetry

$$
\begin{equation*}
\phi(z) \rightarrow e^{i \alpha} \phi(z) \tag{13.67}
\end{equation*}
$$

The system is then a superfluid and its spectrum has a massless excitation, namely the phase $\omega$ of $\phi$, which is the Goldstone boson associated with the broken $\mathrm{U}(1)$ symmetry. We will see now that this Goldstone boson disappears from the spectrum once the system is coupled to the statistical gauge field.

Let us consider the behavior of the system in the semi-classical (mean-field) limit. In that limit, the fluctuations of the amplitude of the Bose field $\phi$ are small. Let us write $\phi$ in the form

$$
\begin{equation*}
\phi(z)=\sqrt{\rho(z)} e^{i \omega(z)} \tag{13.68}
\end{equation*}
$$

The classical equations of motion of the Bose theory (i.e. the mean-field equations) are (in units such that $\hbar=c=e=1$ )

$$
\begin{align*}
\left(i D_{0}+\mu\right) \phi(x)-\frac{1}{2 M} \vec{D}^{2} \phi(x)-2 \lambda|\phi(x)|^{2} \phi(x) & \\
-\phi(x) \int d^{3} x^{\prime} V\left(x-x^{\prime}\right)\left(\left|\phi\left(x^{\prime}\right)\right|^{2}-\rho_{0}\right)^{2} & =0 \\
\theta \mathcal{B}(x)+|\phi(x)|^{2} & =0  \tag{13.69}\\
\theta \epsilon_{i \alpha \beta} \partial^{\alpha} \mathcal{A}^{\beta}+\frac{i}{2 M}\left[\phi^{*}(x) D_{i} \phi(x)-\left(D_{i} \phi(x)\right)^{*} \phi(x)\right] & =0 \\
\int d^{3} x|\phi(x)|^{2} & =\rho_{0} L^{2} T
\end{align*}
$$

where $D_{0}=\partial_{0}-i\left(A_{0}+\mathcal{A}_{0}\right), \vec{D}=\vec{\nabla}-i(\vec{A}+\overrightarrow{\mathcal{A}}), L^{2}$ is the area of the system, and $T$ is the time span.

For a configuration $\phi$ with constant amplitude (the ground state) for a system with (areal) density $\rho_{0}$ these equations become

$$
\begin{align*}
|\phi|^{2} & =\rho_{0} \\
\rho_{0}+\theta\langle\mathcal{B}\rangle & =0 \\
\mu-2 \lambda \rho_{0} & =0  \tag{13.70}\\
\left\langle\mathcal{A}_{\mu}\right\rangle+A_{\mu} & =0 \\
\rho_{0}-\frac{v}{2 \pi \ell_{0}^{2}} & =0
\end{align*}
$$

where $\ell_{0}=1 / \sqrt{B}$ is the cyclotron length and $v=1 / m$ is the filling fraction.
Thus, the average statistical gauge field $\left\langle\mathcal{A}_{\mu}\right\rangle$ exactly cancels out, or screens, the electromagnetic field $A_{\mu}$. Consequently, we get $\langle\mathcal{B}\rangle=-B$. However, the first of the equations of Eq. (13.70) requires the average statistical magnetic field to be proportional to the average particle density. Hence, the density and the field are not independent of each other but satisfy $\rho_{0}=\theta B$. Recall the definition of the filling fraction $v=\left(\rho_{0} / B\right) \phi_{0}$, where $\phi_{0}$ is the flux quantum $\phi_{0}=h c / e$ (in standard units). Thus, the classical equations of motion have uniform solutions only if the filling fraction is $v=\theta /(2 \pi)=1 / m$, with $m$ an odd integer. We can then identify the odd integer $m$ with the index of the Laughlin wave function, which is also odd. Thus, the Landau theory suggests the picture of the FQHE as a problem of bosons in an average magnetic field that is determined by the number of bosons! Notice that, with the identification of $m$ as the index of the Laughlin wave function, the constraint implies that each boson is made of a fermion and $m$ flux quanta. This is precisely what the arguments of Girvin and MacDonald, and Read told us.

### 13.3.3 Low-energy fluctuations

However, this story does not end at the level of mean-field theory. The fluctuations play a very important role in this problem. Mean-field theory told us that the average particle density and average statistical magnetic field are fixed. But the fluctuations of the phase $\omega$ appear to be completely unconstrained. In order to investigate this problem we need an effective action for the slow modes of the phase field. This effective action can be obtained by integrating out the amplitude fluctuations. Indeed, we can write the field $\phi$ in the form

$$
\begin{equation*}
\phi(z)=\sqrt{\rho_{0}+\delta \rho(z)} e^{i \omega(z)} \tag{13.71}
\end{equation*}
$$

The fluctuations of the gauge field are

$$
\begin{equation*}
A_{\mu}+\mathcal{A}_{\mu}=\delta \mathcal{A}_{\mu} \tag{13.72}
\end{equation*}
$$

where we used that $A_{\mu}+\left\langle\mathcal{A}_{\mu}\right\rangle=0$. We now substitute this expression back into the Landau-Ginzburg action to obtain

$$
\begin{align*}
\mathcal{S}_{\mathrm{eff}}\left[\delta \rho, \delta \mathcal{A}_{\mu}, \mu\right]= & \int d^{3} x\left\{\sqrt{\rho_{0}+\delta \rho} e^{-i \omega}\left[i \partial_{0}+\delta \mathcal{A}_{0}+\mu\right] \sqrt{\rho_{0}+\delta \rho} e^{i \omega}\right. \\
& -\frac{1}{2 M}\left|i \vec{\nabla}\left(\sqrt{\rho_{0}+\delta \rho} e^{i \omega}\right)+\delta \overrightarrow{\mathcal{A}} \sqrt{\rho_{0}+\delta \rho} e^{i \omega}\right|^{2} \\
& \left.-\lambda\left(\rho_{0}+\delta \rho\right)^{2}\right\} \\
- & \frac{1}{2} \int d t \int d^{2} x \int d^{2} x^{\prime} \delta \rho(x) V\left(\vec{x}-\vec{x}^{\prime}\right) \delta \rho\left(x^{\prime}\right) \\
& +\int d^{3} x \frac{\theta}{4} \epsilon_{\mu \nu \lambda} \delta \mathcal{A}^{\mu} \delta \mathcal{F}^{\nu \lambda} \tag{13.73}
\end{align*}
$$

We now expand the effective action in powers of the density fluctuation $\delta \rho(z)$ up to second order to get (using Eq. (13.70))

$$
\begin{align*}
\mathcal{S}_{\mathrm{eff}}\left[\delta \rho, \delta \mathcal{A}_{\mu}, \mu\right] \simeq & \int d^{3} x\left[-\frac{1}{8 M \rho_{0}}(\vec{\nabla} \delta \rho)^{2}-\lambda(\delta \rho)^{2}\right] \\
& -\frac{1}{2} \int d t \int d^{2} x \int d^{2} x^{\prime} \delta \rho(x) V\left(\vec{x}-\vec{x}^{\prime}\right) \delta \rho\left(x^{\prime}\right) \\
& +\int d^{3} x(\delta \rho)\left[\left(\delta \mathcal{A}_{0}-\partial_{0} \omega\right)-\frac{1}{2 M}(\vec{\nabla} \omega-\delta \overrightarrow{\mathcal{A}})^{2}\right] \\
& +\int d^{3} x \frac{\theta}{4} \epsilon_{\mu \nu \lambda} \delta \mathcal{A}^{\mu} \delta \mathcal{F}^{\nu \lambda} \tag{13.74}
\end{align*}
$$

We can now integrate out the massive density fluctuations to get the effective Lagrangian for the fluctuations of the phase and statistical gauge fields,

$$
\begin{equation*}
\mathcal{L}_{\text {eff }}=\frac{\kappa}{2}\left(\partial_{0} \omega-\delta \mathcal{A}_{0}\right)^{2}-\frac{\rho_{\mathrm{s}}}{2}(\vec{\nabla} \omega-\delta \overrightarrow{\mathcal{A}})^{2}+\frac{\theta}{4} \epsilon_{\mu \nu \lambda} \mathcal{A}_{\mu} \mathcal{F}_{\nu \lambda} \tag{13.75}
\end{equation*}
$$

where $\kappa$ is the compressibility of this Bose gas, which, with the approximations we made, is

$$
\begin{equation*}
\kappa=\frac{1}{2 \lambda+\bar{V} /\left(4 M \rho_{0}\right)} \tag{13.76}
\end{equation*}
$$

(where we defined an effective short-range interaction $\bar{V}$ ), and $\rho_{\mathrm{s}}$ is the effective superfluid density (of the bosons),

$$
\begin{equation*}
\rho_{\mathrm{s}}=\frac{\rho_{0}}{M} \tag{13.77}
\end{equation*}
$$

However, since the density $\rho_{0}=\theta B$, we can also write the superfluid density $\rho_{\mathrm{s}}$ in terms of the filling fraction $v=1 / m$ and the cyclotron frequency $\omega_{\mathrm{c}}=e B /(M c)$ :

$$
\begin{equation*}
\rho_{\mathrm{s}}=\theta \frac{B}{M}=\frac{v}{2 \pi} \hbar \omega_{\mathrm{c}} \tag{13.78}
\end{equation*}
$$

This effective Lagrangian has the same form as the one we derived for the anyon superconductor in Chapter 10 except for the very important difference that the gauge field here is the statistical one, whereas there it was the electromagnetic field. Nevertheless, the phase field still disappears from the spectrum. Indeed, the phase field $\omega$ can be eliminated by a gauge transformation $\mathcal{A}_{\mu}=\mathcal{A}_{\mu}^{\prime}-\partial_{\mu} \omega$. The resulting theory is that of a gauge field that has just two massive modes. The masses were also calculated in Chapter 10. Thus, this is an incompressible ground state. The two massive modes represent the magneto-phonon and magneto-plasmon which were derived directly from Laughlin's theory by Girvin, MacDonald, and Platzman (Girvin et al., 1986).

### 13.3.4 Hall conductance

Let us now turn to the problem of the electromagnetic response of the Hall fluid and to the computation of the Hall conductivity. The Hall conductivity is a response perpendicular to an applied electric field and hence it does not involve dissipation. Thus, unlike the longitudinal resistivity, the Hall response can be determined in a system in the absence of impurities or phonons. We will compute the Hall conductivity by looking at the response to a weak classical (i.e. unquantized) electromagnetic perturbation in the form of a vector potential $\delta A_{\mu}=\left(\delta A_{0}, \delta \vec{A}\right)$ (not to be confused with the uniform static magnetic field).

The effective Lagrangian in the presence of the electromagnetic field $A_{\mu}$ is dictated by electromagnetic gauge invariance, and it is given by

$$
\begin{align*}
\mathcal{L}_{\mathrm{eff}}\left[\omega, \mathcal{A}_{\mu}, \delta A_{\mu}\right]= & \frac{\kappa}{2}\left(\partial_{0} \omega+\mathcal{A}_{0}+e \delta A_{0}\right)^{2}-\frac{\rho_{\mathrm{s}}}{2}(\vec{\nabla} \omega+\overrightarrow{\mathcal{A}}+e \delta \vec{A})^{2} \\
& +\frac{\theta}{4} \epsilon_{\mu \nu \lambda} \mathcal{A}_{\mu} \mathcal{F}_{\nu \lambda} \tag{13.79}
\end{align*}
$$

The electromagnetic response is obtained from the effective action of the electromagnetic field $S_{\text {eff }}\left[A_{\mu}\right]$,

$$
\begin{equation*}
e^{i S_{\mathrm{eff}[ }\left[\delta A_{\mu}\right]}=\int \mathcal{D} \omega \mathcal{D} \mathcal{A}_{\mu} \exp \left(i \int d^{3} x \mathcal{L}_{\mathrm{eff}}\left[\omega, \mathcal{A}_{\mu}, \delta A_{\mu}\right]\right) \tag{13.80}
\end{equation*}
$$

Since this theory is gauge-invariant and has a dynamical gauge field, namely the statistical field $\mathcal{A}_{\mu}$, we can do this computation in the London gauge, $\omega=0$, in which the Goldstone boson of the Bose field, the phase field $\omega$, is eaten by the dynamical gauge field. This is just the Higgs mechanism. In the London gauge the effective Lagrangian is

$$
\begin{equation*}
\mathcal{L}_{\mathrm{eff}}\left[\mathcal{A}_{\mu}, \delta A_{\mu}\right]=\frac{\kappa}{2}\left(\mathcal{A}_{0}+e \delta A_{0}\right)^{2}-\frac{\rho_{\mathrm{s}}}{2}(\overrightarrow{\mathcal{A}}+e \delta \vec{A})^{2}+\frac{\theta}{4} \epsilon_{\mu \nu \lambda} \mathcal{A}_{\mu} \mathcal{F}_{\nu \lambda} \tag{13.81}
\end{equation*}
$$

This Lagrangian tells us that the phase mode of the Bose field (the phonon of the Bose fluid) is now absent from the spectrum and that the fluctuations of the statistical gauge field $\mathcal{A}_{\mu}$ are now massive (even in the absence of the ChernSimons term) with a mass (squared) given by the superfluid density $\rho_{\mathrm{s}}=\rho_{0} / M$ of the bosons. In other terms there is a Meissner effect of the statistical gauge field. The first term of the effective Lagrangian of Eq. (13.81) implies that there is complete screening of the electric field. For a system with Coulomb interactions, $V(r) \propto 1 / r$, the screening of a 2D electron gas (2DEG) is incomplete.

Upon integrating out the statistical gauge field $\mathcal{A}_{\mu}$ we can now compute the effective action for the external electromagnetic perturbation, $S_{\text {eff }}\left[\delta A_{\mu}\right]$. By keeping only the terms with the fewest derivatives (one!) we find that the effective action of the electromagnetic field is just the Chern-Simons term:

$$
\begin{equation*}
S_{\mathrm{eff}}\left[\delta A_{\mu}\right]=e^{2} \frac{\theta}{2} \int d^{3} x \epsilon_{\mu \nu \lambda} \delta A^{\mu} \partial^{\nu} \delta A^{\lambda}+\cdots \tag{13.82}
\end{equation*}
$$

The induced current $J_{\mu}(x)=\left(J_{0}(x), \vec{J}(x)\right)$ is obtained by differentiation with respect to the electromagnetic field:

$$
\begin{equation*}
J_{\mu}(x)=\theta e^{2} \epsilon_{\mu \nu \lambda} \partial^{\nu} \delta A^{\lambda}(x)+\cdots \tag{13.83}
\end{equation*}
$$

In particular, the spatial components $J_{i}(x)$ of the induced current are

$$
\begin{equation*}
J_{i}(x)=\theta e^{2} \epsilon_{i j} \delta E_{j}(x) \tag{13.84}
\end{equation*}
$$

where $\delta \vec{E}(x)$ is the applied electric field. Thus, we see that the induced current is nothing but the Hall current. From this result we can read off the Hall conductivity $\sigma_{x y}$ as being (after restoring physical units)

$$
\begin{equation*}
\sigma_{x y}=\theta\left(\frac{e^{2}}{\hbar c}\right)=\frac{1}{m}\left(\frac{e^{2}}{h}\right) \tag{13.85}
\end{equation*}
$$

where we used the fact that $\theta=1 /(2 \pi m)$. In other terms, we find that the fluid exhibits the FQHE for a 2DEG with filling fraction $v=1 / m$.

### 13.3.5 Vortices

The classical equations of motion of Eq. (13.70) admit static vortex solutions with the asymptotic behavior

$$
\begin{align*}
\lim _{|\vec{x}| \rightarrow \infty} \phi(\vec{x}) & =\sqrt{\rho_{0}} e^{i \varphi(\vec{x})}  \tag{13.86}\\
\delta \mathcal{A}_{0} & =0  \tag{13.87}\\
\lim _{|\vec{x}| \rightarrow \infty} \delta \mathcal{A}_{i}(\vec{x}) & = \pm \vec{\nabla} \varphi(\vec{x})= \pm \epsilon_{i j} \frac{x_{j}}{|\vec{x}|^{2}} \tag{13.88}
\end{align*}
$$

where $\varphi(\vec{x})$ is the azimuthal angle on the plane,

$$
\begin{equation*}
\varphi(\vec{x})=\tan ^{-1}\left(\frac{y}{x}\right) \tag{13.89}
\end{equation*}
$$

This solution is called a vortex.
In a neutral superfluid (without any gauge fields) the energy of the vortex is (as we saw in Chapter 4)

$$
\begin{equation*}
E_{\mathrm{vortex}}=\frac{\rho_{\mathrm{s}}}{2} \int d^{2} x(\vec{\nabla} \omega(\vec{x}))^{2} \approx \frac{\rho_{\mathrm{s}}}{2} \int \frac{d^{2} x}{|\vec{x}|^{2}} \simeq \frac{\rho_{\mathrm{s}}}{2} \ln \left(\frac{R}{a_{0}}\right) \tag{13.90}
\end{equation*}
$$

where $a_{0}$ is a short-distance cutoff (of the order of the inter-particle spacing) and $R$ is the linear size of the system. Hence, as we discussed in the context of the problem of the Kosterlitz-Thouless transition, isolated vortices are very expensive (energetically speaking) for a neutral superfluid and occur only (as excitations) as vortex-anti-vortex pairs.

However, in the problem at hand we have a dynamical gauge field, the statistical field $\mathcal{A}_{\mu}$, which affects the computation of the energy (much in the same way as in the theory of superconductivity). In this case we find finite-energy vortex solutions provided that the Bose field $\phi(x)$ and the statistical gauge field $\mathcal{A}_{\mu}$ obey the asymptotic behavior

$$
\begin{equation*}
\lim _{|\vec{x}| \rightarrow \infty}|(i \vec{\nabla}-\overrightarrow{\mathcal{A}}) \phi(\vec{x})|^{2}=0 \tag{13.91}
\end{equation*}
$$

which is satisfied by Eq. (13.88). Thus, at very long distances we find the condition of Eq. (13.88), $\overrightarrow{\mathcal{A}}= \pm \vec{\nabla} \omega$. This solution is regular (except at the core of the vortex) and has finite energy, provided that the circulation of the statistical gauge field on any large closed contour $\Gamma$ enclosing the vortex satisfies the flux quantization condition

$$
\begin{equation*}
\oint_{\Gamma} \overrightarrow{\mathcal{A}} \cdot \overrightarrow{d x}= \pm 2 \pi \tag{13.92}
\end{equation*}
$$

However, the Chern-Simons term tells us that a vortex has an associated electric charge, and that it is a dyonic object with an induced charge density $J_{0}(\vec{x})$,

$$
\begin{align*}
J_{0}(\vec{x}) & =-e \frac{\delta S_{\mathrm{eff}}}{\delta A_{0}(\vec{x})}=-e \frac{\delta S_{\mathrm{eff}}}{\delta \mathcal{A}_{0}(\vec{x})} \\
& =+e \frac{\delta S_{\mathrm{CS}}}{\delta A_{0}(\vec{x})}=\theta \epsilon_{i j} \partial_{i} \mathcal{A}_{j}(\vec{x}) \tag{13.93}
\end{align*}
$$

Therefore the total induced (or excess) charge $Q_{\mathrm{v}}$ due to a positive vortex is

$$
\begin{align*}
Q_{\mathrm{v}} & =e \int d^{2} x J_{0}(\vec{x})=\theta \int d^{2} x \epsilon_{i j} \partial_{i} \mathcal{A}_{j}(\vec{x}) \\
& =e \theta \oint_{\Gamma} \vec{d} x \cdot \overrightarrow{\mathcal{A}}(\vec{x}) \\
& =\frac{e}{m} \tag{13.94}
\end{align*}
$$

So we conclude that a positive vortex has a fractional charge $e / m$ and represents a Laughlin quasihole, whereas a negative vortex is a Laughlin quasiparticle with negative fractional charge $-e / m$.

In Section 13.9 we will revisit this problem within the fermion ChernSimons formulation, where we will show that these excitations have fractional statistics.

### 13.3.6 The order parameter

In hindsight, we can construct the order parameter directly in the theory of bosons, without having to rely on the Landau-Ginzburg theory. The first guess is that the order parameter is the Bose field $\phi$ itself. However, $\phi$ is not invariant under gauge transformations of the statistical gauge field. Thus, its expectation value, as well as the expectation values of any product of $\phi$ fields, is zero when averaged over all configurations of the gauge field. It may be argued that this is not much of a problem since one always has to fix the gauge. Since this gauge theory is abelian and non-compact, all small gauge transformations (i.e. those which do not wind around the system) are connected to the identity, and it is possible to fix the gauge completely. Now, the expectation value of products of $\phi$ fields will depend on the gauge in which it is evaluated. Thus, it does not represent a physical observable. However, all we need is an operator that in some convenient gauge reduces to a product of $\phi$ fields. Fortunately, it is quite easy to construct such operators. We discussed a similar question in Chapter 9.

Let us consider the case of the boson-correlation function, which is the expectation value of the product $\phi^{\dagger}(x) \phi(y)$, where $x$ and $y$ are two arbitrary points in $(2+1)$-dimensional space-time. Under a gauge transformation $\phi(x) \rightarrow$ $\exp (i \Lambda(x)) \phi(x)$, the product transforms like

$$
\begin{equation*}
\phi^{\dagger}(x) \phi(y) \rightarrow e^{i(-\Lambda(x)+\Lambda(y))} \phi^{\dagger}(x) \phi(y) \tag{13.95}
\end{equation*}
$$

Thus, we need to find an operator that transforms in the opposite way and cancels out the unwanted phase factor. One possibility is the exponential of the line integral $\int_{\Gamma} \mathcal{A}_{\mu} d x_{\mu}$, where $\Gamma$ is a path that goes from $x$ to $y$. But this is just an

Aharonov-Bohm phase factor, which fluctuates very rapidly and does not vanish in any gauge. It can be shown that the expectation value of the product

$$
\begin{equation*}
\phi^{\dagger}(x) \exp \left(i \int_{\Gamma} \mathcal{A}_{\mu} d x_{\mu}\right) \phi(y) \tag{13.96}
\end{equation*}
$$

decays rapidly as $|x-y| \rightarrow \infty$.
Let us consider the operator $\mathcal{O}^{\dagger}(x) \mathcal{O}(y)$,

$$
\begin{equation*}
\mathcal{O}^{\dagger}(x) \mathcal{O}(y) \equiv e^{i \int d^{3} z \mathcal{A}_{\mu}^{c}(z) B_{\mu}^{c}(z)} \phi^{\dagger}(x) \phi(y) \tag{13.97}
\end{equation*}
$$

where $A_{\mu}^{\mathrm{c}}$ is some suitably chosen fixed classical configuration with field strength $B_{\mu}^{\mathrm{c}}(z)=\epsilon_{\mu \nu \lambda} \partial_{\nu} A_{\lambda}^{\mathrm{c}}$. We will choose $B_{\mu}^{\mathrm{c}}$ in such a way that the product $\mathcal{O}^{\dagger}(x) \mathcal{O}(y)$ is gauge-invariant and that in the Landau-Lorentz gauge $\left(\partial_{\mu} \mathcal{A}_{\mu}=0\right)$ it reduces to the product of local operators $\phi^{\dagger}(x) \phi(y)$. Under a gauge transformation that vanishes at infinity $\lim _{|x| \rightarrow \infty} \Lambda(x)=0$,

$$
\begin{align*}
\phi(x) & =e^{i \Lambda(x)} \phi^{\prime}(x)  \tag{13.98}\\
\mathcal{A}_{\mu}(x) & =\mathcal{A}_{\mu}^{\prime}(x)-\partial_{\mu} \Lambda(x)
\end{align*}
$$

the operator $\mathcal{O}^{\dagger}(x) \mathcal{O}(y)$ transforms as

$$
\begin{equation*}
\mathcal{O}^{\dagger}(x) \mathcal{O}(y)=e^{i \Phi} \mathcal{O}^{\dagger}(x) \mathcal{O}(y) \tag{13.99}
\end{equation*}
$$

where $\Phi$ is given by

$$
\begin{equation*}
\Phi=\Lambda(y)-\Lambda(x)+\int d^{3} z \Lambda(z) \partial_{\mu} B_{\mu}^{\mathrm{c}}(z) \tag{13.100}
\end{equation*}
$$

Gauge invariance demands that $\Phi \equiv 0$ for all gauge transformations $\Lambda(z)$ and for all points $x$ and $y$. The only way to meet these requirements is for $B_{\mu}^{\mathrm{c}}(z)$ to satisfy the equation

$$
\begin{equation*}
\partial_{\mu} B_{\mu}^{\mathrm{c}}(z)=\delta(z-x)-\delta(z-y) \tag{13.101}
\end{equation*}
$$

We can think of $B_{\mu}^{\mathrm{c}}(z)$ as being the classical magnetic field of two magnetic monopoles of (opposite) unit magnetic charge located at $x$ and $y$. If we denote the "potential" by $U(z)$, we get

$$
\begin{align*}
B_{\mu}^{\mathrm{c}}(z) & =\partial_{\mu} U(z)  \tag{13.102}\\
\nabla^{2} U(z) & =\delta(z-x)-\delta(z-y)
\end{align*}
$$

the solution of which is just the electrostatic potential for two unit and opposite charges.

Having checked that it is gauge-invariant, we now want to see what this operator is in the Landau-Lorentz gauge $\left(\partial_{\mu} \mathcal{A}_{\mu}=0\right)$. In this gauge, the argument of the exponential part of the operator vanishes identically,

$$
\begin{equation*}
\int d^{3} z \mathcal{A}_{\mu}(z) B_{\mu}^{\mathrm{c}}(z)=\int d^{3} z \mathcal{A}_{\mu}(z) \partial_{\mu} U(z)=-\int d^{3} z \partial_{\mu} \mathcal{A}_{\mu}(z) U(z)=0 \tag{13.103}
\end{equation*}
$$

Thus, in the Landau-Lorentz gauge, we get

$$
\begin{equation*}
\mathcal{O}^{\dagger}(x) \mathcal{O}(y) \equiv \phi^{\dagger}(x) \phi(y) \tag{13.104}
\end{equation*}
$$

Therefore, the operator $\mathcal{O}(x)$, defined by

$$
\begin{equation*}
\mathcal{O}(x) \equiv \phi(x) \exp \left(i \int d^{3} z \mathcal{A}_{\mu}(z) B_{\mu}^{\mathrm{c}}(z)\right) \tag{13.105}
\end{equation*}
$$

where $B_{\mu}^{\mathrm{c}}(z)=\partial_{\mu} U(z)$ is the field created by a single charge at $x$, is the gaugeinvariant order-parameter operator for this problem in the boson description since, in this gauge, it becomes identical to the field operator of the bosons. Thus, the correlation functions of this operator exhibit long-range order.

In an arbitrary gauge, this operator is highly non-local. But, in the LandauLorentz gauge, it becomes local and just simple. This is not a surprise since, for instance, the order parameter of an ordinary BCS-like superconductor is local only in this gauge. Indeed, it is possible to define an order parameter for a superconductor in the same way. For practical purposes, in the case of a superconductor, this is not very useful since the electromagnetic field is not usually treated as a dynamical field. In the problem of the FQHE, the gauge field is dynamically generated, and it plays an essential role.

### 13.4 Fermion field theory of the fractional quantum Hall effect

In this section we derive a field theory for the FQHE that is based on the fermion picture. These methods, which have been so successful in the treatment of anyon superfluidity (see Chapter 10), are also very useful for the study of the FQHE. They have a great advantage over the boson theories in that there is no difficulty in handling the short-distance behavior, unlike in the case of bosons. It is quite easy to derive an effective action for the fluctuations that explicitly involves Chern-Simons gauge fields. The Landau-Ginzburg theory can be seen to be the dual of the fermion theory in very much the same way as in the case of the anyon superconductor. The fermion field theory was developed by López and myself (López and Fradkin, 1991).

Let us go back to the second-quantized form of the problem of electrons in a magnetic field. In its standard form, the dynamics is governed by the action

$$
\begin{align*}
\mathcal{S}= & \int d^{3} z\left\{\psi^{*}(z)\left[i D_{0}+\mu\right] \psi(z)+\frac{1}{2 M}|\vec{D} \psi(z)|^{2}\right\} \\
& -\frac{1}{2} \int d^{3} z \int d^{3} z^{\prime}\left(|\psi(z)|^{2}-\rho_{0}\right) V\left(\left|\vec{z}-\vec{z}^{\prime}\right|\right)\left(\left|\psi\left(z^{\prime}\right)\right|^{2}-\rho_{0}\right) \tag{13.106}
\end{align*}
$$

Since we are dealing with a problem in which one Landau level is fractionally filled, we do not expect that the semi-classical approximation for this problem will, in general, be very reliable, unless, of course, the ground state of the system is such that there is a gap in the energy spectrum. For example, in the low-density limit, the system can lower its energy by modulating the electron density and forming a Wigner crystal. Wigner crystals can also be studied with a path integral of this section, but we will not do it here.

Let us recall Jain's interpretation of the Laughlin state as a state in which the electrons "nucleate" flux to screen enough of the external magnetic field, so that the bound states of electrons plus fluxes exactly filled an integer number of Landau levels. In this section we are going to use the periodicity property of theories of fermions coupled to Chern-Simons gauge fields, which was Derived in chapter 10, to make this nucleation picture more explicit.

In Chapter 10 we saw that a system of fermion could be mapped into a system of fermions coupled to Chern-Simons gauge fields if the Chern-Simons coupling constant were chosen to be equal to $\theta=1 /(2 \pi n)$, where $n$ is an even integer. Thus, the problem becomes equivalent to a theory with fermions and gauge fields with an action given by

$$
\begin{align*}
\mathcal{S}_{\theta}= & \int d^{3} z\left\{\psi^{*}(z)\left[i D_{0}+\mu\right] \psi(z)+\frac{1}{2 M}|\vec{D} \psi(z)|^{2}+\frac{\theta}{4} \epsilon_{\mu \nu \lambda} \mathcal{A}^{\mu} \mathcal{F}^{\nu \lambda}\right\} \\
& -\frac{1}{2} \int d^{3} z \int d^{3} z^{\prime}\left(|\psi(z)|^{2}-\rho_{0}\right) V\left(\left|\vec{z}-\vec{z}^{\prime}\right|\right)\left(\left|\psi\left(z^{\prime}\right)\right|^{2}-\rho_{0}\right) \tag{13.107}
\end{align*}
$$

where $\psi(z)$ is a second-quantized Fermi field, $\mu$ is the chemical potential, and $D_{\mu}$ is the covariant derivative which couples the fermions both to the external electromagnetic field $A_{\mu}$ and to the statistical gauge field $\mathcal{A}_{\mu}$,

$$
\begin{equation*}
D_{\mu}=\partial_{\mu}+i \frac{e}{c} A_{\mu}+i \mathcal{A}_{\mu} \tag{13.108}
\end{equation*}
$$

We are going to see below that the even integer $n$ has to be identified with $m-1$, where $m$ is the index of the Laughlin state.

### 13.4.1 The semi-classical limit and the Laughlin state

We will show that the semi-classical limit of the theory described by the action $S_{\theta}$, with $1 / \theta=2 \pi(m-1)$, yields the same physics as the Laughlin state. In
order to prove this statement we will develop a semi-classical approach to this problem. In principle, this formalism provides a procedure by which to compute the corrections to the Laughlin approximation. This is, to the best of my knowledge, the first formalism for which the Laughlin ansatz arises as the first of a series of approximations.

The action $\mathcal{S}_{\theta}$ governs the dynamics of a system of spinless fermions interacting through a pair-interaction potential $V\left(\left|\vec{x}-\vec{x}^{\prime}\right|\right)$ coupled both to electromagnetic and to statistical gauge fields. The starting point of the semi-classical approximation maps this FQHE problem into an equivalent IQHE system. This mapping is made possible by the statistical or Chern-Simons gauge fields, which screen out enough of the external magnetic field, to the point that the number of flux quanta of the effective magnetic field which is left is an exact factor of the total number of particles. Naturally, this perfect screening is not possible for arbitrary values of the external magnetic field for a fixed number of electrons. The values of the filling fraction for which this perfect screening can be accomplished happen to be the same as the Laughlin sequence with filling factors $v=1 / m$ and the first level of the hierarchy. For all other cases, there will be some partially filled level left over. As we discussed in Section 10.5, these quasiparticles are anyons.

Consider the quantum partition function for this problem (at $T=0$ ),

$$
\begin{equation*}
\mathcal{Z}=\int \mathcal{D} \psi^{*} \mathcal{D} \psi \mathcal{D} \mathcal{A}_{\mu} e^{i S_{\theta}} \tag{13.109}
\end{equation*}
$$

We will treat this path integral in the semi-classical approximation. In order to do that, we will first integrate out the fermions and treat the resulting theory within the saddle-point expansion. For this procedure to be accurate, there should be a small parameter in the theory to control this expansion. For instance, in Chapter 3 we used a similar procedure to study the magnetic instabilities of a dense Fermi system. In that case the small parameter was $1 / N$, where $N$ was the number of fermion species (orbitals). For spin- $S$ antiferromagnets we used a similar approach, with $1 / S$ being the small parameter.

However, in the case at hand there is no such small parameter. Nevertheless, we will find that we will be able to construct sequences of gapped states corresponding to fractional quantum Hall states. In the presence of an energy gap what we call here a semi-classical approximation, i.e. the average-field approximation with one-loop quantum corrections (conventionally called the random-phase approximation), will yield exact results for universal long-distance quantities protected by symmetries (and sum rules) and topology such as the Hall conductance, and the charge and statistics of the quasiparticles. On the other hand, with the sole exception of the cyclotron resonance which, as we will see, is protected by Galilean invariance, other quantities that are not dimensionless, such as energy gaps, have
large systematic errors that are very difficult to correct. These difficulties become extreme in regimes in which the energy gap vanishes, where the theory has infrared divergences in various quantities of interest.

The root of these problems lies not so much in the lack of a formal small parameter to justify the expansion, but more in the approximations done on the theory with flux attachment. Before flux attachment, one has a theory of fermions partially filling a Landau level. As we saw, a Landau level has an extensive degeneracy, and simple perturbative approaches to dense Fermi systems (such as the Hartree-Fock approach) fail, since in a Landau level all interactions are strong no matter how small the nominal coupling constant is. Flux attachment, i.e. mapping to an equivalent theory of fermions coupled to a Chern-Simons gauge field, sidesteps this problem, but at the price of introducing a large amount of mixing between Landau levels, whose Hilbert spaces are now rearranged in a non-trivial way. We will find that, if the system manages to have a finite energy gap, the effects of Landau-level mixing become negligible in the long-distance and low-energy regime. This is what happens in the fractional quantum Hall states. However, if the system does not have a gap, and hence becomes compressible, the effects of Landau-level mixing cannot be disentangled.

The procedure is almost identical to the theory of anyon superconductivity discussed in Chapter 10. In the absence of electron-electron interactions the fermions can be integrated out immediately, since the action becomes quadratic in Fermi fields. In the presence of interactions, this is no longer possible, since the interaction term makes the action quartic in the Fermi fields. This problem can be sidestepped by means of a Hubbard-Stratonovich transformation by which we trade a quartic form in fermions for a quadratic action coupled to a new Bose field, the density fluctuation. This procedure will allow us to give a full description of the spectrum of collective modes of the FQHE states. Note that, since we are dealing with a gauge theory, a gauge has to be specified in order to make the functional integral well defined. We will assume that a gauge-fixing condition has been imposed, but, for the moment, we will not make any specific choice of gauge.

Before we proceed to integrate out the Fermi degrees of freedom, we need to deal with the interaction term of the action. Here we could perform the HubbardStratonovich transformation in terms of a scalar Bose field $\lambda(x)$. Let $F$ be the weight in the path-integral amplitude which contains in its exponent the terms in the action which are quartic in the Fermi field $\psi$,

$$
\begin{equation*}
F=\exp \left(-i \int d^{3} z \int d^{3} z^{\prime} \frac{1}{2}\left(|\psi(z)|^{2}-\rho_{0}\right) V\left(z-z^{\prime}\right)\left(\left|\psi\left(z^{\prime}\right)\right|^{2}-\rho_{0}\right)\right) \tag{13.110}
\end{equation*}
$$

The Hubbard-Stratonovich transformation allows us to write $F$ as a Gaussian functional integral over a Bose field $\lambda(x)$. However, the Hubbard-Stratonovich $\lambda$ represents density fluctuations and couples linearly to the fermion-density operator. Thus, $\lambda(x)$ enters into the time-covariant derivative in the same way as the time component of the statistical gauge field, $\mathcal{A}_{0}(x)$, and can be integrated out exactly. The net result is that the Hubbard-Stratonovich transformation is equivalent to the replacement of the fermion density $|\psi(x)|^{2}$ in the interaction term by $\theta \mathcal{B}(x)$ (where we used the Chern-Simons constraint). Therefore we can replace the interaction term by the equivalent expression

$$
\begin{equation*}
S_{\mathrm{int}}\left[\mathcal{A}_{\mu}\right]=-\frac{1}{2} \int d^{3} z d^{3} z^{\prime}\left[\theta \mathcal{B}(z)-\rho_{0}\right] V\left(z-z^{\prime}\right)\left[\theta \mathcal{B}\left(z^{\prime}\right)-\rho_{0}\right] \tag{13.111}
\end{equation*}
$$

where $V\left(z-z^{\prime}\right)$ represents the instantaneous pair interaction, i.e.

$$
\begin{equation*}
V\left(z-z^{\prime}\right)=V\left(\left|\vec{z}-\vec{z}^{\prime}\right|\right) \delta\left(t-t^{\prime}\right) \tag{13.112}
\end{equation*}
$$

I will assume that the physics of the FQHE can be studied in a model system in which the pair potential is reasonably local.

The partition function $\mathcal{Z}$ can be written in the form of a functional integral involving the Fermi fields $\psi$ and the statistical gauge fields $\mathcal{A}_{\mu}$. The action for the system is now given by

$$
\begin{align*}
S= & \int d^{3} z\left\{\psi^{*}(z)\left(i D_{0}+\mu\right) \psi(z)+\frac{1}{2 M}|\vec{D} \psi(z)|^{2}\right\} \\
& +\int d^{3} z \frac{\theta}{4} \epsilon_{\mu \nu \lambda} \mathcal{A}^{\mu} \mathcal{F}^{\nu \lambda}+S_{\mathrm{int}}\left[\mathcal{A}_{\mu}\right] \tag{13.113}
\end{align*}
$$

The Fermi fields can be integrated out without any difficulty, yielding a fermion determinant. The resulting partition function can thus be written in terms of an effective action $S_{\text {eff }}$ given by

$$
\begin{equation*}
S_{\mathrm{eff}}=-i \operatorname{tr} \ln \left[i D_{0}+\mu+\lambda+\frac{1}{2 M} \vec{D}^{2}\right]+\theta S_{\mathrm{CS}}\left(\mathcal{A}_{\mu}-A_{\mu}\right)+S_{\mathrm{int}}\left[\mathcal{A}_{\mu}-A_{\mu}\right] \tag{13.114}
\end{equation*}
$$

where $D_{0}$ and $\vec{D}$ are the covariant derivatives and $S_{\mathrm{CS}}$ is the Chern-Simons action for $\theta=1$. The field $A_{\mu}$ represents a small fluctuating electromagnetic field, with vanishing average everywhere, which will be used to probe the system. The electromagnetic currents will be calculated as first derivatives of $\mathcal{Z}$ with respect to $A_{\mu}$. The full electromagnetic response can be obtained in this way.

We are now ready to proceed with the semi-classical approximation. The path integral $\mathcal{Z}$ will be approximated by expanding its degrees of freedom around stationary configurations of the effective action $S_{\text {eff }}$ in powers of the fluctuations. This
is the conventional WKB approximation. The classical configurations $\overline{\mathcal{A}}_{\mu}(z)$ can be obtained by demanding that $S_{\text {eff }}$ be stationary under small fluctuations. This requirement yields the classical equations of motion

$$
\begin{equation*}
\left.\frac{\delta S_{\mathrm{eff}}}{\delta \mathcal{A}_{\mu}(z)}\right|_{\overline{\mathcal{A}}}=0 \tag{13.115}
\end{equation*}
$$

By varying $S_{\text {eff }}$ with respect to $\mathcal{A}_{\mu}(z)$ we get

$$
\begin{equation*}
\left\langle j_{\mu}^{\mathrm{F}}(z)\right\rangle+\frac{\theta}{2} \epsilon_{\mu \nu \lambda}\left[\left\langle\mathcal{F}^{\nu \lambda}(z)\right\rangle-e F^{\nu \lambda}\right]=0 \tag{13.116}
\end{equation*}
$$

In addition, we must fix the particle density to be uniform and equal to $\bar{\rho}$,

$$
\begin{equation*}
\left\langle j_{0}(z)\right\rangle=\rho_{0} \tag{13.117}
\end{equation*}
$$

If the external electromagnetic fluctuation is assumed to have zero average, the only time-independent uniform solutions have uniform average statistical flux $\langle\mathcal{B}\rangle$ and vanishing average statistical electric field $\langle\overrightarrow{\mathcal{E}}\rangle$ (unless there is a non-zero current in the ground state), and satisfy

$$
\begin{equation*}
\langle\mathcal{B}\rangle=-\frac{\rho_{0}}{\theta}, \quad\langle\overrightarrow{\mathcal{E}}\rangle=0 \tag{13.118}
\end{equation*}
$$

The non-uniform solutions have $\left\langle\mathcal{A}_{0}(z)\right\rangle$ a periodic function that induces a periodic modulation of the electron density. These solutions are Wigner crystals and stripe phases. Notice that, in principle, the crystalline solutions have a modulation both in the charge density and in the local statistical flux. We will not discuss these states here.

The equations of motion show that, for a translationally invariant ground state, the effect of the statistical gauge fields, at the level of the saddle-point approximation, is to reduce the effective flux experienced by the fermions. The total effective field is thus reduced from the value of the external field $B$ down to $B_{\text {eff }}$, given by

$$
\begin{equation*}
B_{\mathrm{eff}}=B+\langle\mathcal{B}\rangle=B-\frac{\rho_{0}}{\theta} \tag{13.119}
\end{equation*}
$$

Notice that, since $\rho_{0} / \theta$ can be either smaller or larger than $B$, the effective field $B_{\text {eff }}$ can be parallel or anti-parallel to $B$.

Let us assume that we are trying to find the ground state of $N$ (interacting) electrons in the presence of an external magnetic field of strength $B$. We will further assume that the linear size $L$ of the sample is such that a total of $N_{\phi}$ quanta of the magnetic flux will be piercing the surface. In general, the filling fraction $v=N / N_{\phi}$ is not an integer. Thus, a perturbative approach based on a Slater-determinant wave function of the occupied single-particle states does not yield a stable answer. This is so because there is a macroscopic number of essentially degenerate states that will mix with this trial state. On the other hand, a Laughlin state is known to represent a
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-536.jpg?height=574&width=1148&top_left_y=188&top_left_x=281)

Figure 13.1 The composite-fermion mean-field picture of the Laughlin state at filling fraction $v=1 / 3$. Left panel: electrons in a $1 / 3$-filled lowest Landau level. Right panel: composite fermions in a fully filled, $p=1$, lowest effective Landau level. Full circles, filled states; open circles, empty states; $\omega_{\mathrm{c}}$ and $\omega_{\mathrm{c}}^{\text {eff }}$ are the cyclotron frequency of the electrons and that of the composite fermions. See the text.
state with an energy gap. Thus, the correlations have removed the massive degeneracy of the free electrons. Since this gap is not equal to the Landau gap of the non-interacting electrons, we can expect our saddle-point expansion to succeed only if the effective theory ends up with a non-zero gap.

It is easy to check that the uniform-saddle-point state has a gap only if the effective field $B_{\text {eff }}$ experienced by the $N$ fermions is such that the fermions fill exactly an integer number $p$ of the effective Landau levels, see Fig. 13.1. This is precisely the point of view advocated by Jain: the mean-field state of the 2D electron gas in a fractional quantum Hall state is an integer quantum Hall state of a system of composite fermions, electrons dressed by an even number of flux quanta. However, this condition cannot be met for arbitrary values of the filling fraction $v$ at fixed field (or at fixed density). Let $N_{\phi}^{\text {eff }}$ denote the effective number of flux quanta piercing the surface after screening. It is given by

$$
\begin{equation*}
2 \pi N_{\phi}^{\mathrm{eff}}=2 \pi N_{\phi}-\frac{\rho_{0}}{\theta} L^{2}=2 \pi\left(N_{\phi}-2 s N\right) \tag{13.120}
\end{equation*}
$$

where $2 s$ is an even integer (that before we had denoted by $n$ ). The spectrum supported by this state has an energy gap if the $N$ fermions fill exactly $p$ of the Landau levels created by the effective field $B_{\text {eff }}$. In other words, the effective filling fraction is $\nu_{\text {eff }} \equiv N / N_{\phi}^{\text {eff }}=p$. Using these results, we find that the filling fraction $v$ and the external magnetic field $B$ must satisfy

$$
\begin{equation*}
\frac{N}{p}=\frac{N}{v}-2 s N \tag{13.121}
\end{equation*}
$$

or, equivalently,

$$
\begin{equation*}
\frac{1}{v}=\frac{1}{p}+2 s \tag{13.122}
\end{equation*}
$$

Since the filling fraction $v$ is in general equal to the ratio of two integers, a solution exists for filling fractions on the Jain sequences:

$$
\begin{equation*}
v=\frac{p}{2 s p+1} \tag{13.123}
\end{equation*}
$$

On the other hand, since the effective field $B_{\text {eff }}$ can be positive or negative, the number $p$ of filled effective Landau levels should also take either sign. Hence, we will denote the number of effective filled Landau levels by $\pm p$ (with $p>0$ ) to indicate the case in which $B_{\text {eff }}>0$ or $B_{\text {eff }}<0$. We can regard the case $B_{\text {eff }}<0$ as an integer quantum Hall effect of holes.

In order to allow for both cases we will write Eq. (13.122) in the form

$$
\begin{equation*}
\frac{1}{v}= \pm \frac{1}{p}+2 s \tag{13.124}
\end{equation*}
$$

or, which amounts to the same thing,

$$
\begin{equation*}
v_{ \pm}(p, s)=\frac{p}{2 s p \pm 1} \tag{13.125}
\end{equation*}
$$

In this approximation the ground state is then interpreted as a system of $N$ composite fermions filling up exactly $p$ Landau levels of the effective field $B_{\text {eff }}$,

$$
\begin{equation*}
\left|B_{\mathrm{eff}}\right|=\frac{B}{2 s p+1} \tag{13.126}
\end{equation*}
$$

Similarly, the effective cyclotron frequency, i.e. the gap between effective Landau levels, is also reduced by the same amount,

$$
\begin{equation*}
\omega_{\mathrm{c}}^{\mathrm{eff}}=\frac{\omega_{\mathrm{c}}}{2 s p+1} \tag{13.127}
\end{equation*}
$$

Hence, for a fixed number $2 s$ of attached flux quanta, the splitting of the effective energy levels becomes smaller as the level $p$ in the Jain hierarchy increases.

The states are thus parametrized by two integers, $p$ (the number of filled Landau levels of the effective field) and $2 s$ (the number of flux quanta carried by each fermion). The Laughlin sequence is an obvious solution since, for $p=1$ and $m$ an odd integer, we get the unique solution $p=1$ and $2 s=m-1$. The effective fermions thus fill up exactly one Landau level and $\theta$ has to be chosen to be
$1 / \theta=2 \pi(m-1)$. This result agrees with Jain's theory. At this mean-field level the wave function is the Slater determinant for one filled Landau level $\chi_{1}$. The additional factor, $\prod_{i<j}\left(z_{i}-z_{j}\right)^{m-1}$, is due to the fluctuations of the statistical gauge fields.

Many states of the Jain hierarchy, Eq. (13.125), have been seen in experiments on 2D electron gases in large magnetic fields in quantum wells and heterostructures (see Pan et al. $(2003,2008)$ and Xia et al. (2004)). Of the principal Jain sequence, with $2 s=2$ (i.e. two fluxes attached to each electron) the following states have been seen experimentally (Pan et al., 2008): $1 / 3,2 / 5,3 / 7, \ldots, 10 / 21$ ( $p=1, \ldots, 10$ ); and of the "reverse" (or "hole") sequence: $1,2 / 3,3 / 5,4 / 7, \ldots$, $10 / 19(p=1, \ldots, 10)$. In the experiments the most prominent states have wider plateaus (when sweeping in magnetic field) in their quantum Hall conductances. It is also found that the widths of the plateaus of the fractional quantum Hall states on a given Jain sequence decrease as the order in a given sequence increases. In the experiments, it is also found that the states with the wider plateaus have larger energy gaps (measured from the temperature dependence of the longitudinal resistivity). These observations have given credence to the composite-fermion picture (Heinonen, 1998; Jain, 2007).

All the states mentioned above can also be described by the "bosonic" HaldaneHalperin hierarchy. However, empirically the stronger fractional quantum Hall states, defined by the width of the observed plateau in the Hall conductance, are naturally described by the Jain sequences. On the other hand, there are several observed fractional quantum Hall states that do not fit in the Jain sequences, such as the state at filling fraction $4 / 11$. Such a state can be described as a fractional quantum Hall state in the bosonic hierarchy or as a "next-generation" Jain state, a fractional quantum Hall state of the quasiparticles (vortices) of the primary Jain sequence. More interesting are the states with even denominators, such as at $v=5 / 2$ (Willett et al., 1987; Pan et al., 1999), which cannot be described by either hierarchy. We will see in Chapters 14 and 15 that this is a paired or non-abelian fractional quantum Hall state.

Thus, at the level of the average-field approximation we find that this problem is equivalent to the integer Hall state of a system of composite fermions. But is this the correct answer? We will see shortly that the answer is no. The reason is that fluctuations, even at the (one-loop) Gaussian level, change the physics completely. In particular, we will see that, unlike other mean-field theories, the average-field approximation yields the incorrect quantum numbers of the excitations. The reason is the Chern-Simons constraint that relates flux to charge, which tells us that a charge fluctuation is always accompanied by a flux fluctuation. This fact, and the commutation relations between the gauge fields, lead to profound changes in the spectrum of states and the response of the system.

### 13.4.2 Compressible states

An interesting feature of the Jain sequences is the filling fractions of their limiting values:

$$
\begin{equation*}
v_{\infty}=\lim _{p \rightarrow \infty} \frac{p}{2 s p \pm 1}=\frac{1}{2 s} \tag{13.128}
\end{equation*}
$$

As these limiting values are approached the composite fermion gaps vanish,

$$
\begin{equation*}
\lim _{p \rightarrow \infty} \hbar \omega_{\mathrm{c}}^{\mathrm{eff}}(p, s)=0 \tag{13.129}
\end{equation*}
$$

Thus, in this limit, and at the mean-field level, the composite fermions see a vanishing effective field, $B_{\text {eff }} \rightarrow 0$. If we momentarily ignore the (extremely important!) fact that the fermions are coupled to a Chern-Simons (statistical) gauge field, $\mathcal{A}_{\mu}$, we are led to the conclusion that for $v_{\infty}=1 /(2 s)$ the composite fermions behave as a system of fermions at finite density $\rho_{0}$ in a vanishing magnetic field.

Thus, if this picture is correct, we expect the composite fermions to fill up a Fermi sea, with a finite Fermi momentum $p_{\mathrm{F}}$ determined by the density $\rho_{0}$ of composite fermions (the same as the electron density!), which is related to the filling fraction $v_{\infty}=1 /(2 s)$ and to the magnetic length $\ell_{0}=\sqrt{e B /(\hbar c)}$ by

$$
\begin{equation*}
\rho_{0}=\frac{v_{\infty}}{2 \pi \ell_{0}^{2}} \tag{13.130}
\end{equation*}
$$

We can determine the Fermi momentum $p_{\mathrm{F}}$ by the standard relation

$$
\begin{equation*}
\int_{|\vec{p}| \leq p_{\mathrm{F}}} \frac{d^{2} p}{(2 \pi \hbar)^{2}}=\rho_{0} \tag{13.131}
\end{equation*}
$$

which tells us that we have filled all single composite-fermion states with momentum less than $p_{\mathrm{F}}$. We then find that $p_{\mathrm{F}}$ is given by

$$
\begin{equation*}
p_{\mathrm{F}}=\sqrt{2 v_{\infty}} \frac{\hbar}{\ell_{0}} \tag{13.132}
\end{equation*}
$$

and we have a Fermi energy

$$
\begin{equation*}
E_{\mathrm{F}}=\frac{p_{\mathrm{F}}^{2}}{2 M}=v_{\infty} \frac{\hbar}{M \ell_{0}^{2}} \tag{13.133}
\end{equation*}
$$

Provided that the approximations we just made can be trusted (which is a big "if" since this theory does not have a small parameter), we conclude that at the limiting fractions $v_{\infty}$ behaves as a system of composite fermions filling up a Fermi disk. As we saw in Chapter 2, a state of this type does not have an energy gap. Its low-lying excitations are composite-fermion quasiparticles as well as quasiparticle-quasihole pairs (with arbitrarily low energy).

Naturally this picture is much too naive since the composite fermions (a) interact with each other via the pair interaction and (b) are coupled to a now dynamical gauge field, the statistical gauge field. In the next subsections we will discuss in detail the role of quantum fluctuations for the incompressible states. In that case, although they play a key role, and change the physics in a qualitative way, in the long-distance and low-energy regime these corrections are free of infrared divergences and hence are controlled. Indeed, in the low-energy regime we will find results that are actually exact.

However, the situation is drastically different for the compressible states since they do not have a gap at the level of the average-field approximation. This naturally would lead us to suspect that the corrections may have infrared divergences, which would signal an instability of the mean-field state. If the only important correlations were due to the pair interactions between composite fermions, the result would be a renormalized Fermi-liquid state, a quantum liquid adiabatically connected to the free-fermion state. In this case it is known that the effect of interactions primarily results in a set of renormalized Fermi-liquid parameters that control the forward-scattering interactions of the quasiparticles (Baym and Pethick, 1991; Shankar, 1994). In a weakly coupled Fermi-liquid state, the only possible instability is with respect to a superconducting state (in this case of composite fermions) in the $p_{x}+i p_{y}$ channel (Kohn and Luttinger, 1965; Chubukov, 1993; Raghu and Kivelson, 2011). At any rate, the lack of a small parameter leads one to question the applicability of these results to this case.

A much more serious problem in this system is that the gauge-field fluctuations lead to strong infrared divergences in the forward-scattering channel. The problem of a system of fermions at finite density coupled to dynamical gauge fields is a problem that has been researched in high-energy and condensed matter physics for many years, and it is still an essentially unsolved problem. In spite of the lack of a solution, what is clear is that the main effect of the gauge-field fluctuations is to invalidate the quasiparticle picture and hence put into question the basis of the Fermi-liquid scenario (Halperin et al., 1993; Kwon et al., 1994; Nayak and Wilczek, 1994; Polchinski, 1994).

In spite of these questions, a theory of the compressible state which is based on a Fermi-liquid theory of composite fermions that yields a good phenomenological description of most of the experiments in this regime has been constructed by Halperin, Lee, and Read (Halperin et al., 1993). In this theory it is shown that the gauge-invariant current correlators are free of infrared divergences and can be used to compute response functions that agree qualitatively with the results from experiments. Infrared divergences do appear in the (gauge-dependent) fermion propagators, leading to a divergence of the composite-fermion effective mass and the vanishing of the quasiparticle residue (as discussed in Chapter 2). On the other
hand, numerical simulations with a variational wave function with the form of a Slater determinant of free composite fermions at fixed density, projected onto the lowest Landau level,

$$
\begin{equation*}
\Psi_{\mathrm{FL}}\left[z_{i}\right]=P_{\mathrm{LLL}}\left[\operatorname{det}\left\{e^{i \vec{k} \cdot \vec{r}_{i}}\right\}\right] \prod_{i<j}\left(z_{i}-z_{j}\right)^{2} \tag{13.134}
\end{equation*}
$$

yield results in good agreement with exact diagonalizations of the problem of electrons in a half-filled Landau level. Here $P_{\text {LLL }}$ denotes the projection onto the lowest Landau level and $\left\{\vec{r}_{i}\right\}$ are the electron coordinates. A conceptually serious question is that one expects the quasiparticles to have vanishing charge, but not a vanishing dipole moment. A theory defined directly in the lowest Landau level (without flux attachment) that is based on physical observables, namely the non-commuting guiding center coordinates, has been proposed (Pasquier and Haldane, 1998; Read, 1998). But it has proven to be very difficult to make progress with this approach.

### 13.5 The semi-classical excitation spectrum

We will now consider the role of the Gaussian fluctuations around the classical solutions. This is equivalent to a WKB approximation of the functional integral. We begin by considering the effective action. We showed that the saddle-point approximation has a uniform liquid-like solution. Let $\mathcal{A}_{\mu}(x)$ denote the fluctuations of the statistical vector potential $\mathcal{A}_{\mu}$ (from its average value) and $A_{\mu}(x)$ be an external weak electromagnetic field acting as a probe (not the uniform field). The effective action can be expanded in a series in powers of the fluctuations. We will be interested only in keeping the terms up to quadratic order in the fluctuations. As usual, the linear terms are cancelled out if the saddle-point equations are satisfied. This means that the Chern-Simons piece of the action now has the form $S_{\mathrm{CS}}\left(\mathcal{A}_{\mu}-A_{\mu}\right)$.

At the quadratic (Gaussian) level the effective action has the form

$$
\begin{align*}
S^{(2)}=\frac{1}{2} \int & d^{3} x d^{3} y \mathcal{A}_{\mu}(x) \Pi_{\mathrm{F}}^{\mu \nu}(x, y) \mathcal{A}_{v}(y)+\theta S_{\mathrm{CS}}\left(\mathcal{A}_{\mu}-A_{\mu}\right) \\
& +S_{\mathrm{int}}\left(\mathcal{A}_{\mu}-A_{\mu}\right) \tag{13.135}
\end{align*}
$$

where $S_{\text {int }}$ is the part of the effective action for the interactions. After cancelling the external uniform magnetic field with the average statistical magnetic field, $S_{\text {int }}$ becomes a function of the fluctuations $\mathcal{A}_{\mu}-A_{\mu}$ (where $A_{\mu}$ denotes the external probe electromagnetic field):

$$
\begin{equation*}
S_{\mathrm{int}}\left(\mathcal{A}_{\mu}-A_{\mu}\right)=-\frac{\theta^{2}}{2} \int d^{3} z \int d^{3} z^{\prime}\left[\mathcal{B}_{\mu}(z)-B_{\mu}(z)\right] V\left(z-z^{\prime}\right)\left[\mathcal{B}_{\mu}\left(z^{\prime}\right)-B_{\mu}\left(z^{\prime}\right)\right] \tag{13.136}
\end{equation*}
$$

The general form of the polarization tensor $\Pi_{\mathrm{F}}^{\mu \nu}$ for free fermions in an external field was derived in Section 12.5. For a system with an integer number of Landau levels, the most important properties of $\Pi_{\mu \nu}$ are that it is transverse, i.e. $\partial_{\mu} \Pi_{\mu \nu}=0$, Eq. (12.87), and that it can be expanded in powers of gradients. The latter property is a consequence of the fact that the system has an energy gap. Thus, gauge invariance and locality will be sufficient to fix the form of the effective action for the low-energy fluctuations.

In momentum (and frequency) space the (transverse) polarization tensor of the composite fermions, $\Pi_{\mathrm{F}}^{\mu \nu}(Q)$ (with $Q=\left(Q_{0}, \vec{Q}\right)$, where $Q_{0}=\omega$ is the frequency), has the form of a linear combination of explicitly transverse tensors, of which two are even under parity and time reversal separately, and a third breaks both parity and time reversal (but not their product). When expanded in components, $\Pi^{\mu \nu}(Q)$ has the structure (López and Fradkin, 1991, 1993)

$$
\begin{align*}
\Pi_{00}^{\mathrm{F}} & =\vec{Q}^{2} \Pi_{0}^{\mathrm{F}}(\omega, \vec{Q}) \\
\Pi_{0 j}^{\mathrm{F}} & =\omega \vec{Q}_{j} \Pi_{0}^{\mathrm{F}}(\omega, \vec{Q})+i \epsilon_{j k} Q_{k} \Pi_{1}^{\mathrm{F}}(\omega, \vec{Q}) \\
\Pi_{j 0}^{\mathrm{F}} & =\omega \vec{Q}_{j} \Pi_{0}^{\mathrm{F}}(\omega, \vec{Q})-i \epsilon_{j k} Q_{k} \Pi_{1}^{\mathrm{F}}(\omega, \vec{Q})  \tag{13.137}\\
\Pi_{i j}^{\mathrm{F}} & =\omega^{2} \delta_{i j} \Pi_{0}^{\mathrm{F}}(\omega, \vec{Q})-i \epsilon_{i j} \omega \Pi_{1}^{\mathrm{F}}(\omega, \vec{Q})+\left(\vec{Q}^{2} \delta_{i j}-Q_{i} Q_{j}\right) \Pi_{2}^{\mathrm{F}}(\omega, \vec{Q})
\end{align*}
$$

The kernels $\Pi_{0}^{\mathrm{F}}(Q), \Pi_{1}^{\mathrm{F}}(Q)$, and $\Pi_{2}^{\mathrm{F}}(Q)$ represent charge-conserving fluctuations in the system of composite fermions in the effective magnetic field $B_{\text {eff }} . \Pi_{0}^{\mathrm{F}}$ and $\Pi_{2}^{\mathrm{F}}$ are associated with the parity and time-reversal even processes, while $\Pi_{1}^{\mathrm{F}}$ is associated with the parity and time-reversal odd processes (and has the tensorial structure of the Chern-Simons term of the action).

For a Jain state at level $p \geq 1$, which has a mean-field ground state with $p$ filled effective Landau levels, the tensors have the form of a series of terms, each representing a process with a particle-hole excitation, and have simple poles at the particle-hole excitation energies $\omega_{m n}=(m-n) \omega_{\mathrm{c}}^{\text {eff }}$, with $m>p$ (particle) and $n \leq p$ (hole). Each term has a residue given in terms of powers of $Q^{2}$ (or $\vec{Q}^{2}$ ) and Laguerre polynomials of $Q$ (given in detail in López and Fradkin $(1991,1993)$ ).

In the limit of zero frequency and zero momentum, $\omega=0$ and $\vec{Q}=0$, for a Jain state at level $p$, they take the limiting values

$$
\begin{align*}
\Pi_{0}^{\mathrm{F}}(0,0) & =\frac{1}{2 \pi} \frac{p M}{B_{\text {eff }}} \equiv \epsilon \\
\Pi_{1}^{\mathrm{F}}(0,0) & = \pm \frac{p}{2 \pi} \equiv \sigma_{x y}^{0}  \tag{13.138}\\
\Pi_{1}^{\mathrm{F}}(0,0) & =-\frac{1}{2 \pi} \frac{p^{2}}{M} \equiv-\chi
\end{align*}
$$

To leading order in fluctuations and in gradients, we get the following effective action:

$$
\begin{align*}
S_{\mathrm{eff}}= & \int d^{3} z\left(\frac{\epsilon}{2} \overrightarrow{\mathcal{E}}^{2}-\frac{\chi}{2} \mathcal{B}^{2}\right) \\
& +\left(\sigma_{x y}^{0}+\theta\right) \mathcal{S}_{\mathrm{CS}}\left(\mathcal{A}_{\mu}\right)+\theta \mathcal{S}_{\mathrm{CS}}\left(A_{\mu}\right)-\int d^{3} z \frac{\theta}{2} \epsilon_{\mu \nu \lambda} \mathcal{A}^{\mu} F^{\nu \lambda} \\
& -\int d^{3} z \int d^{3} z^{\prime} \frac{\theta^{2}}{2}(\mathcal{B}(z)-B(z)) V\left(z-z^{\prime}\right)\left(\mathcal{B}\left(z^{\prime}\right)-B\left(z^{\prime}\right)\right) \tag{13.139}
\end{align*}
$$

where we have expanded the Chern-Simons term of the action. Once again, we find that the effective action is parametrized in terms of the three quantities $\epsilon, \chi$, and $\sigma_{x y}^{0}$, which we have already discussed in Chapter 10. Following exactly the same arguments, we expect that $\epsilon$ and $\chi$ will have significant finite renormalizations, but the Hall conductance $\sigma_{x y}^{0}$ will remain unrenormalized at the value predicted by mean-field theory. Thus, we know that, for a state with an integer number $p$ of filled Landau levels, $\sigma_{x y}^{0}= \pm p /(2 \pi)$ (in units of $\left.e^{2} / \hbar\right)$.

### 13.6 The electromagnetic response and collective modes

To determine the full electromagnetic response and the collective modes, we need to calculate the polarization tensor $\Pi_{\mu \nu}$ of the external electromagnetic perturbation $A_{\mu}$, defined from its effective action

$$
\begin{equation*}
S_{\mathrm{eff}}\left[A_{\mu}\right]=\frac{1}{2} \int d^{3} z d^{3} z^{\prime} A_{\mu}(z) \Pi^{\mu v}\left(z, z^{\prime}\right) A_{v}\left(z^{\prime}\right)+\cdots \tag{13.140}
\end{equation*}
$$

To compute this effective action, we return to the action for the quadratic fluctuations of the statistical field $\mathcal{A}_{\mu}$ given in Eq. (13.139). Upon integrating out the Gaussian fluctuations of the statistical gauge field $\mathcal{A}_{\mu}$, we find an effective action for the electromagnetic perturbation $A_{\mu}$ of the form of Eq. (13.140). In momentum and frequency space the polarization tensor $\Pi_{\mu \nu}$ has the same tensorial structure as $\Pi_{\mu \nu}^{\mathrm{F}}$ of Eq. (13.137) (as is required by gauge invariance and charge conservation), but with a new set of kernels, $\Pi_{0}(\omega, \vec{Q}), \Pi_{1}(\omega, \vec{Q})$, and $\Pi_{2}(\omega, \vec{Q})$, given by

$$
\begin{align*}
& \Pi_{0}(\omega, \vec{Q})=-\theta^{2} \frac{\Pi_{0}^{\mathrm{F}}(\omega, \vec{Q})}{D(\omega, \vec{Q})}  \tag{13.141}\\
& \Pi_{1}(\omega, \vec{Q})=\theta+\theta^{2} \frac{\theta+\Pi_{1}^{\mathrm{F}}(\omega, \vec{Q})}{D(\omega, \vec{Q})}+\theta^{3} V(\vec{Q}) \vec{Q}^{2} \frac{\Pi_{0}^{\mathrm{F}}(\omega, \vec{Q})}{D(\omega, \vec{Q})} \tag{13.142}
\end{align*}
$$

$$
\begin{align*}
\Pi_{2}(\omega, \vec{Q})= & -\theta^{2} \frac{\Pi_{2}^{\mathrm{F}}(\omega, \vec{Q})}{D(\omega, \vec{Q})} \\
& +\frac{V(\vec{Q})}{D(\omega, \vec{Q})}\left[\omega^{2} \Pi_{0}^{\mathrm{F}}(\omega, \vec{Q})^{2}-\Pi_{1} F(\omega, \vec{Q})^{2}\right. \\
& \left.+\vec{Q}^{2} \Pi_{0}^{\mathrm{F}}(\omega, \vec{Q}) \Pi_{2}^{\mathrm{F}}(\omega, \vec{Q})\right]  \tag{13.143}\\
D(\omega, \vec{Q})= & \omega^{2}\left(\Pi_{0}^{\mathrm{F}}(\omega, \vec{Q})\right)^{2}-\left(\theta+\Pi_{1}^{\mathrm{F}}(\omega, \vec{Q})\right)^{2} \\
& +\vec{Q}^{2} \Pi_{0}^{\mathrm{F}}(\omega, \vec{Q})\left(\Pi_{2}^{\mathrm{F}}(\omega, \vec{Q})-\theta^{2} V(\vec{Q})\right) \tag{13.144}
\end{align*}
$$

In spite of the complexity of these formulas, some important consequences are easily extracted from them. The physical excitations (the collective modes) are the poles of the kernels $\Pi_{0}(\omega, \vec{Q}), \Pi_{1}(\omega, \vec{Q})$, and $\Pi_{2}(\omega, \vec{Q})$, which are the zeros of the function $D(\omega, \vec{Q})=0$ (defined in Eq. (13.144)).

## The $f$-sum rule and Kohn's theorem

In Chapter 12 we showed that the current-current retarded correlation function of a physical system, $D^{\mathrm{R}}\left(x, x^{\prime}\right)=-i \theta\left(x_{0}-x_{0}^{\prime}\right)\left\langle\left[J_{\mu}(x), J_{v}\left(x^{\prime}\right)\right]\right\rangle$, obeys a set of Ward identities that follow from gauge invariance and the conservation of the current. One of these identities is the $f$-sum rule:

$$
\begin{equation*}
\int_{-\infty}^{\infty} \frac{d \omega}{2 \pi} i \omega D_{00}^{\mathrm{R}}(\omega, \vec{Q})=\frac{\rho_{0}}{M} \vec{Q}^{2} \tag{13.145}
\end{equation*}
$$

with $D_{00}^{\mathrm{R}}(\omega, \vec{Q})=-\Pi_{00}^{\mathrm{R}}(\omega, \vec{Q})$, where the label R means the retarded function. Equation (13.145) follows from Eq. (12.106) after taking Fourier transforms and integrating over frequencies.

What is the leading behavior of $\Pi_{00}(\omega, \vec{Q})$ at small momentum, $\vec{Q} \rightarrow 0$ ? This we can determine from Eq. (13.141) for (the time-ordered) $\Pi_{00}(\omega, \vec{Q})$ at small $\vec{Q}$ with $\omega$ fixed:

$$
\begin{equation*}
\Pi_{00}(\omega, \vec{Q}) \simeq \vec{Q}^{2} \Pi_{0}(\omega, 0)=-\theta^{2} \vec{Q}^{2} \frac{\Pi_{0}^{\mathrm{F}}(\omega, 0)}{D(\omega, 0)}=-\frac{\rho_{0}}{M} \frac{\vec{Q}^{2}}{\omega^{2}-\omega_{\mathrm{c}}^{2}+i \epsilon} \tag{13.146}
\end{equation*}
$$

where $\omega_{\mathrm{c}}$ is the "bare" cyclotron frequency (of electrons!)

$$
\begin{equation*}
\omega_{\mathrm{c}}=\frac{e B}{M c} \equiv \frac{B}{M} \tag{13.147}
\end{equation*}
$$

As we can see, this result is consistent with the $f$-sum rule, Eq. (13.145). It also implies that, in the $\vec{Q} \rightarrow 0$ limit, it has no corrections since the sum rule is saturated. This is, of course, equivalent to Kohn's theorem, which states that for a 2DEG in a Galilean-invariant system, the cyclotron resonance (the denominator of

Eq. (13.146)) lies exactly at the cyclotron frequency $\omega_{\mathrm{c}}$, without any renormalizations due to particle-particle interactions (Kohn, 1961). Physically this means that in a Galilean-invariant system this resonance is due to the motion of the fluid as a whole, namely of its center of mass, which is not affected by the interactions between the particles.

This result also corrects a serious difficulty of the average-field approximation. Indeed, as Kohn's theorem tells us, in a Galilean-invariant system we can replace the entire 2DEG by its center of mass, which behaves as a particle with the total charge of the fluid, $Q=N e$, moving in the perpendicular magnetic field. Therefore the total linear momentum of the fluid $\vec{P}$ (where $\vec{P}$ is the total canonical and gauge-invariant momentum operator) should obey exactly the magnetic algebra of a particle of mass $N M$ and charge $N e$,

$$
\begin{equation*}
\left[P_{i}, P_{j}\right]=i \frac{e \hbar}{c} B \epsilon_{i j} \tag{13.148}
\end{equation*}
$$

and see the full external magnetic field. Instead, the composite fermions (in the average-field approximation) see the partially screened magnetic field, $B_{\text {eff }}<B$. Thus, as we see, the quantum fluctuations, already at the Gaussian level, change this result by restoring the correct magnetic algebra, and yield the exact long-distance limit.

### 13.6.1 The anyon superfluid

We have used a similar approach to describe a theory of anyons at finite density, see Chapter 11. In that case, the value of $\theta$ was such that we found an exact cancellation of the effective coupling constant of the Chern-Simons coupling, $\theta_{\text {eff }}=\sigma_{x y}^{0}+$ $\theta=0$. As we can see from the expression of $D(\omega, \vec{Q})$, in the limit $\vec{Q}=0$, the analog of the Kohn mode is now a linearly dispersing mode with

$$
\begin{equation*}
\omega=v|\vec{Q}|, \quad v=\sqrt{\frac{2 \pi \rho_{0}}{M^{2}}} \tag{13.149}
\end{equation*}
$$

which we identify with the phase mode of the anyon superfluid, with a velocity consistent with the requirements of Galilean invariance.

### 13.6.2 Collective modes

In addition to Kohn's mode, which has an energy at the cyclotron frequency and a residue of the order of $|\vec{Q}|^{2}$, this theory predicts that the lowest-energy collective mode, a magneto-phonon, has an energy at $\vec{Q}=0$ that is a fraction of the cyclotron frequency $\omega_{\mathrm{c}}$. This mode has a residue proportional to $|\vec{Q}|^{4}$. In the case
of the Laughlin state $(p=1)$ Girvin, MacDonald, and Platzman (Girvin et al., 1986) also found a magneto-phonon mode with the same residue. However, in their theory (which works directly in the lowest Landau level using the singlemode approximation) the gap of the mode is given by the Coulomb energy and does not depend on the bare mass $M$ of the particles. In contrast, the calculation we have just described predicts (incorrectly) that the energy depends explicitly on $M$ and not on the Coulomb interaction. This is one of the difficulties of this approach. Indeed, this mode is expected to be corrected by terms higher in the expansion about the average-field approximation that occur at order $|\vec{Q}|^{4}$. Thus, although this theory predicts the correct behavior at long distances, the predictions for dimension-full quantities (such as energy gaps) not protected by symmetries cannot be trusted, even if the qualitative "level scheme" is actually correct. A program to eliminate these systematic problems was developed by Murthy and Shankar (2003).

### 13.7 The Hall conductance and Chern-Simons theory

The effective action of Eq. (13.139) is sufficient to find the Hall conductance, as well as the charge and statistics of the quasiparticles. Notice that, if the electromagnetic fluctuation $A_{v}$ is turned off, the action for the statistical gauge field has a Chern-Simons term with a coupling constant equal to the sum of the bare ( $\theta$ ) and induced ( $\sigma_{x y}$ ) couplings. In the anyon superconductor of Chapter 11, these two contributions cancelled each other out, leading to a compressible state. In a fractional quantum Hall state, they add up, and the state is incompressible. It is also worthy of note that, except for the "Maxwell-like" first two terms, this expression is exact and independent of the gradient fluctuation. In particular, it contains the exact dependence on the interaction pair potential $V$.

I will show now how this formalism can be used to compute the Hall conductance $\sigma_{x y}$ and the statistics of the quasiparticles. Let us first note that the quantity $\sigma_{x y}^{0}$ is the Hall conductance of the effective fermions in mean-field theory and that it is not equal to $\sigma_{x y}$. In particular, it is equal to $\sigma_{x y}^{0}=p /(2 \pi)$, and predicts an integer instead of a fractional Hall conductance. The full Hall conductance is obtained by calculating the electromagnetic response function.

If we are interested only in the behavior at very low frequency and momentum, we can further approximate $S_{\text {eff }}$ by keeping only the terms with the smallest number of derivatives. The Chern-Simons terms have just one derivative, whereas the other terms have at least two. Thus, at long wavelengths and low frequencies, we can use the approximation

$$
\begin{equation*}
S_{\mathrm{eff}}[\mathcal{A}, \tilde{A}] \approx\left(\sigma_{x y}^{0}+\theta\right) \mathcal{S}_{\mathrm{CS}}\left(\mathcal{A}_{\mu}\right)+\theta \mathcal{S}_{\mathrm{CS}}\left(\tilde{A}_{\mu}\right)-\int d^{3} z \frac{\theta}{2} \epsilon_{\mu \nu \lambda} \mathcal{A}^{\mu} \tilde{F}^{\nu \lambda} \tag{13.150}
\end{equation*}
$$

where only the statistical gauge field $\mathcal{A}_{\mu}$ is dynamical. This approximation is sufficient for our purposes. We will see below that this approximate form of the effective action is sufficient to determine the charge and statistics of the quasiparticles as well as the Hall conductance.

The electromagnetic response is calculated from the partition function

$$
\begin{align*}
\mathcal{Z}[\tilde{A}] & =\int \mathcal{D} \mathcal{A}_{\mu} e^{i S_{\mathrm{eff}}[\mathcal{A}, \tilde{A}]} \\
& =\exp \left(\frac{i}{2} \int d^{3} z \int d^{3} z^{\prime} \tilde{A}_{\mu}(z) \Pi_{\mathrm{eff}}^{\mu \nu}\left(z, z^{\prime}\right) \tilde{A}_{v}\left(z^{\prime}\right)\right) \tag{13.151}
\end{align*}
$$

where $\Pi_{\text {eff }}^{\mu \nu}\left(z, z^{\prime}\right)$ is the effective polarization tensor (i.e. the current-current correlation function for the full system) in the Gaussian (RPA) approximation. The calculation is particularly simple in the infrared limit.

In Chapter 10 we showed that a theory with two gauge fields, $\tilde{A}_{\mu}$ and $\mathcal{A}_{\mu}$, with just Chern-Simons terms in the action, with couplings $\theta_{1}=\theta$ and $\theta_{2}=\sigma_{x y}^{0}$, respectively, is equivalent, upon integration over $\mathcal{A}_{\mu}$, to a theory with a Lagrangian $\mathcal{L}_{\text {eff }}[\tilde{A}] \equiv-i \ln \mathcal{Z}[\tilde{A}]$ that has the Chern-Simons form

$$
\begin{equation*}
\mathcal{L}_{\mathrm{eff}}[\tilde{A}] \approx \theta_{\mathrm{eff}} \mathcal{L}_{\mathrm{CS}}[\tilde{A}] \tag{13.152}
\end{equation*}
$$

The effective Chern-Simons coupling $\theta_{\text {eff }}$ is given by

$$
\begin{equation*}
\frac{1}{\theta_{\mathrm{eff}}}=\frac{1}{\theta_{1}}+\frac{1}{\theta_{2}} \tag{13.153}
\end{equation*}
$$

For the values $1 / \theta=2 \pi(2 s)$ and $\sigma_{x y}^{0}=p /(2 \pi)$, which we found above, we get

$$
\begin{equation*}
\frac{1}{\theta_{\mathrm{eff}}}=2 \pi(2 s)+\frac{2 \pi}{p} \tag{13.154}
\end{equation*}
$$

Since in the effective Lagrangian $\mathcal{L}_{\text {eff }}[\tilde{A}]$ we are keeping only the terms with the smallest number of gradients, we are neglecting the (even) Maxwell terms coming both from electrodynamics and from their renormalization by the charge fluctuations.

The (induced) current $J_{\mu}(x)$ is computed by using its usual definition:

$$
\begin{equation*}
J_{\mu}(x)=-i \frac{\delta \ln \mathcal{Z}[\tilde{A}]}{\delta \tilde{A}_{\mu}(x)} \equiv \frac{\delta \mathcal{L}_{\mathrm{eff}}[\tilde{A}]}{\delta \tilde{A}_{\mu}(x)} \tag{13.155}
\end{equation*}
$$

The current $J_{\mu}(x)$ is determined by the Chern-Simons term alone:

$$
\begin{equation*}
J_{\mu}(x)=\frac{\theta_{\mathrm{eff}}}{2} \epsilon_{\mu \nu \lambda} \tilde{F}^{\nu \lambda}(x) \tag{13.156}
\end{equation*}
$$

For a weak external static electric field $\tilde{E}_{j}(\vec{x})$, we find that the induced charge vanishes and that there is a non-zero Hall current, i.e.

$$
\begin{align*}
\rho_{\text {ind }}(\vec{x}) & \equiv J_{0}(\vec{x})=0 \\
J_{k}^{\text {ind }}(\vec{x}) & \equiv \theta_{\text {eff }} \epsilon_{k j} \tilde{E}_{j}(\vec{x}) \tag{13.157}
\end{align*}
$$

The form of the Hall current enables us to identify the Hall conductance $\sigma_{x y}$ with $\theta_{\text {eff. }}$. Thus, the Hall conductance for this ground state is

$$
\begin{equation*}
\sigma_{x y}=\theta_{\mathrm{eff}}=\frac{1}{2 \pi}\left(\frac{p}{2 s p+1}\right) \tag{13.158}
\end{equation*}
$$

For the odd integers $m$, in the sequence $m=2 s p+1$, we can write the Hall conductance as the fraction

$$
\begin{equation*}
\sigma_{x y}=\frac{1}{2 \pi} \frac{p}{m}\left(\frac{e^{2}}{\hbar}\right) \tag{13.159}
\end{equation*}
$$

where we have restored the factor $e^{2} / \hbar$. Hence, we get a fractional quantum Hall effect. The particular choice $p=1$ yields the family of Laughlin states $\Psi_{m}$, with $m=2 s+1$.

### 13.8 Quantum numbers of the quasiparticles: fractional charge

Let us now evaluate the quantum numbers of the quasiparticles within the ChernSimons theory. In particular, we want to compute their charge and statistics. Much of what follows is a rederivation, directly from the path integral, of results that were obtained before using Berry-phase arguments. The path-integral methods have the great advantage that they are very general and widely applicable.

We first need to identify the operators which create the quasiparticles in the Chern-Simons theory. Or, at least, we need to find a set of operators whose correlation functions yield information about the spectrum of the quasiparticles.

We have already identified the collective modes. Let us now identify the quasihole. From Laughlin's theory we know that the quasihole is an anyon that carries fractional charge.

We will now define a gauge-invariant operator that creates an excitation at $\vec{x}$ at time $x_{0}$ and destroys it at $\vec{x}^{\prime}$ at time $x_{0}^{\prime}$, and behaves like a quasihole. Let us consider the gauge-invariant "bilinear" operator

$$
\begin{equation*}
\psi^{\dagger}(x) \exp \left(i \int_{\Gamma\left(x, x^{\prime}\right)}\left(A_{\mu}+\mathcal{A}_{\mu}\right) d x_{\mu}\right) \psi\left(x^{\prime}\right) \tag{13.160}
\end{equation*}
$$

where $\Gamma\left(x, x^{\prime}\right)$ is a path in space-time going from $x$ to $x^{\prime}$. By construction, this operator is invariant under gauge transformations of the statistical gauge field $\mathcal{A}_{\mu}$.

We will assume for the moment that the fluctuating component $\tilde{A}_{\mu}$ of the electromagnetic field is switched off and, therefore, this object feels only the uniform magnetic field $A_{\mu}$ (insofar as electromagnetism is concerned). In any event, the line integral in the exponent of the bilinear depends only on the sum of all the vector potentials. According to the procedure we used above, the fields $\tilde{A}_{\mu}$ and $\lambda$ have already been shifted away, and do not appear explicitly in this operator. Their effect is felt through their coupling to the vector potential $\mathcal{A}_{\mu}$.

Let us evaluate the path-dependent correlation function $G_{\Gamma}\left(x, x^{\prime}\right)$ defined by

$$
\begin{equation*}
G_{\Gamma}\left(x, x^{\prime}\right)=\left\langle T\left[\psi^{\dagger}(x) \exp \left(i \int_{\Gamma\left(x, x^{\prime}\right)}\left(A_{\mu}+\mathcal{A}_{\mu}\right) d x_{\mu}\right) \psi\left(x^{\prime}\right)\right]\right\rangle \tag{13.161}
\end{equation*}
$$

in a fractional quantum Hall state, where $T$ is the time-ordering operator. This correlation function is gauge-invariant but depends on the choice of path $\Gamma$.

In path-integral language, this Green function is given by an average over the histories of Fermi and statistical fields, weighted with the amplitude $\exp \left(i \mathcal{S}_{\theta}\right)$ defined earlier in this section. We now proceed to integrate out the Fermi fields, and find that the Green function is given by the average

$$
\begin{equation*}
G_{\Gamma}\left(x, x^{\prime}\right)=\left\langle G\left(x, x^{\prime} \mid\left\{A_{\mu}+\mathcal{A}_{\mu}\right\}\right) \exp \left(i \int_{\Gamma\left(x, x^{\prime}\right)}\left(A_{\mu}+\mathcal{A}_{\mu}\right) d x_{\mu}\right)\right\rangle_{\mathcal{A}} \tag{13.162}
\end{equation*}
$$

The function $G\left(x, x^{\prime} \mid\left\{A_{\mu}+\mathcal{A}_{\mu}\right\}\right)$ is the one-particle Green function for a problem of fermions in fixed statistical and electromagnetic gauge fields at finite particle density, determined by the chemical potential $\mu$. It is straightforward to see that $G\left(x, x^{\prime} \mid\left\{A_{\mu}+\mathcal{A}_{\mu}\right\}\right)$ is the inverse of the Schrödinger operator, i.e.

$$
\begin{equation*}
G\left(x, x^{\prime} \mid\left\{A_{\mu}+\mathcal{A}_{\mu}\right\}\right)=\langle x| \frac{1}{i D_{0}+\mu+\lambda+(1 /(2 M)) \vec{D}^{2}}\left|x^{\prime}\right\rangle \tag{13.163}
\end{equation*}
$$

From now on we will not write down explicitly in our formulas the constant part of the electromagnetic field, $A_{\mu}$. Its presence will be assumed throughout the rest of the discussion.

The average of any operator $\mathcal{O}[\{\mathcal{A}\}]$ over all configurations of the fields $\mathcal{A}_{\mu}$ is given by the path integral

$$
\begin{equation*}
\langle\mathcal{O}[\{\mathcal{A}\}]\rangle=\frac{1}{\mathcal{Z}} \int \mathcal{D} \mathcal{A}_{\mu} \mathcal{O}[\{\mathcal{A}\}] e^{i \mathcal{S}_{\text {eff }}[\mathcal{A}]} \tag{13.164}
\end{equation*}
$$

where $\mathcal{Z}$ is the partition function and $\mathcal{S}_{\text {eff }}[\mathcal{A}]$ is the effective action, which turns out to be given by

$$
\begin{equation*}
S_{\mathrm{eff}}=-i \operatorname{tr} \ln \left[i D_{0}+\mu+\lambda+\frac{1}{2 M} \vec{D}^{2}\right]+\theta S_{\mathrm{CS}}\left(\mathcal{A}_{\mu}\right)+S_{\mathrm{int}}\left[\mathcal{A}_{\mu}\right] \tag{13.165}
\end{equation*}
$$

Let us now represent the one-particle Green function $G\left(x, x^{\prime} \mid\left\{\mathcal{A}_{\mu}\right\}\right)$ in terms of a Feynman path integral (Feynman and Hibbs, 1965; Polyakov, 1987). We first use the representation of the propagator (or Green function) as an integral of a transition-matrix element, namely

$$
\begin{equation*}
G\left(x, x^{\prime} \mid\left\{\mathcal{A}_{\mu}\right\}\right)=-i \int_{0}^{+\infty} d T\left\langle\vec{x}, 0 \mid \vec{x}^{\prime}, T\right\rangle e^{i \mu T} \tag{13.166}
\end{equation*}
$$

where the weight $\exp (i \mu T)$ serves to fix the number of particles. Since the saddlepoint has $p$ filled Landau levels, the chemical potential has to be set to lie between the levels $p$ and $p+1$. The matrix element $\left\langle\vec{x}, 0 \mid \vec{x}^{\prime}, T\right\rangle$ can be written as a sum over histories by means of the Feynman formula

$$
\begin{equation*}
\left\langle\vec{x}, 0 \mid \vec{x}^{\prime}, \tau\right\rangle=\int \mathcal{D} \vec{z}[t] e^{i S[\vec{z}(t)]} \tag{13.167}
\end{equation*}
$$

with the boundary conditions

$$
\begin{equation*}
\lim _{t \rightarrow 0} \vec{z}(t)=\vec{x}, \quad \lim _{t \rightarrow T} \vec{z}(t)=\vec{x}^{\prime} \tag{13.168}
\end{equation*}
$$

Thus, as usual, the matrix element $\left\langle\vec{x}, 0 \mid \vec{x}^{\prime}, T\right\rangle$ is a sum over all paths $\tilde{\Gamma}$ that go from $\vec{x}$ to $\vec{x}^{\prime}$ in time $T$. The action $S$ in the path integral is the standard action for non-relativistic quantum mechanics for particles coupled to a gauge field,

$$
\begin{equation*}
S=\int_{0}^{\tau} d t\left\{\frac{M}{2}\left(\frac{d \vec{z}}{d t}\right)^{2}+\frac{e}{c} \frac{d z^{\mu}}{d t}(t) A_{\mu}(\vec{z}(t))\right\} \tag{13.169}
\end{equation*}
$$

where we have used the notation $z_{0} \equiv t$. The second term in the integrand is a shorthand notation for the coupling to the electromagnetic and statistical gauge fields,

$$
\begin{align*}
\frac{d \vec{z}}{d t}(t) A_{\mu}(\vec{z}(t)) \equiv & \frac{e}{c} \frac{d \vec{z}}{d t}(t) \cdot \vec{A}(\vec{z}(t))+e A_{0}(\vec{z}(t)) \\
& +\frac{d \vec{z}}{d t}(t) \cdot \overrightarrow{\mathcal{A}}(\vec{z}(t))+\mathcal{A}_{0}(\vec{z}(t))+\lambda(\vec{z}(t)) \tag{13.170}
\end{align*}
$$

Similar-looking formulas can be derived for the two-particle and other manyparticle propagators.

For a problem with an energy gap, the long-distance, long-time limit, $\left|x-x^{\prime}\right| \rightarrow$ $\infty$, of the path integral is dominated by paths close to the solution of the classical equations of motion. Thus, in this case, the dominant trajectories are smooth. Thus, it should be a good approximation for our problem to pull the integral over the trajectories $\{\vec{z}(t)\}$ outside of the functional integral over the statistical gauge fields and over all the configurations of these fields for a fixed path $\gamma$. The averaging over the trajectories of the particle is done at a later stage. We should keep in mind
that these averages are performed around the saddle-point configuration, which has an effective constant uniform magnetic field $B_{\text {eff }}$ and a total number $p$ of Landau levels that are completely filled. Formally, we can write the average in the form

$$
\begin{align*}
G_{\Gamma}\left(x, x^{\prime}\right)= & \int_{0}^{+\infty} d T \int \mathcal{D} \vec{z}(t) e^{i \mu T} \exp \left[i \int_{0}^{T} d t \frac{M}{2}\left(\frac{d \vec{z}}{d t}\right)^{2}\right] \\
& \times\left\langle\exp \left(i \oint_{\gamma} A^{\mu} d z_{\mu}\right)\right\rangle_{\mathcal{A}} \tag{13.171}
\end{align*}
$$

where the set of closed curves $\{\gamma\}$ represents paths that are the oriented sum of the path $\Gamma$ and the histories of the particle $\tilde{\Gamma}$. It is important to keep in mind that this formula is a sum over all trajectories that go from $\vec{x}$ to $\vec{x}^{\prime}$ with a fixed return path $\Gamma$. Notice that the particle does not return to $\vec{x}$; only the gauge fields see the closed paths $\gamma$.

It is straightforward to find a generalization of this formalism for the calculation of the two-particle Green function. The main difference is that, for the two-particle case, there are two sets of trajectories to be summed over. The Grassmann integral automatically antisymmetrizes the two-particle Green function, which comes in the form of a sum over direct and exchange processes with the gauge fields as a fixed background.

In the semi-classical approximation, the exact average is replaced by an expansion around the solutions of the classical equations of motion. Thus, in this approximation, the particle feels only the average of the sum of the electromagnetic and statistical gauge fields. The effective field felt by the particle is equal to $B_{\text {eff }}=B-\rho_{0} / \theta$. Thus, for each closed trajectory $\gamma$, there is a constant factor that can be factored out from the functional integral. This factor corresponds to an Aharonov-Bohm phase factor for a particle moving in the field $B_{\text {eff }}$, not in the external field $B$. It is easy to show that, as a result of the screening of the external magnetic field, the Aharonov-Bohm phase factor is that of a particle of charge $1 / \mathrm{m}$ of the electron charge moving in the unscreened field $B$.

Indeed, we have that the exponent of the Aharonov-Bohm phase factor is $\left(2 \pi / \phi_{0}\right) B_{\text {eff }} A_{\perp}(\gamma)$, where $A_{\perp}(\gamma)$ is the (spatial) cross-sectional area bounded by the path $\gamma$. Since $B_{\text {eff }}=B-\rho_{0} / \theta$, we can define the effective charge (in units of e) $q_{\mathrm{eff}} \equiv 1-\rho_{0} /(\theta B)$ and write $B_{\mathrm{eff}}=q_{\mathrm{eff}} B$. The effective charge $q_{\mathrm{eff}}$ can also be written in the more useful form

$$
\begin{equation*}
q_{\mathrm{eff}}=1-\frac{\rho_{0}}{\theta B}=1-\frac{\rho_{0} L^{2}}{\theta B L^{2}}=1-\frac{N}{2 \pi \theta N_{\phi}} \tag{13.172}
\end{equation*}
$$

where $L$ is the linear size of the system. Thus, we get

$$
\begin{equation*}
q_{\mathrm{eff}}=1-\frac{v}{2 \pi \theta} \tag{13.173}
\end{equation*}
$$

For a filling fraction $v=p / m \equiv p /(2 s p+1)$ and $\theta=1 /(4 \pi s)$, we find that the effective charge is

$$
\begin{equation*}
q_{\mathrm{eff}}=1-\frac{2 s p}{2 s p+1}=\frac{1}{2 s p+1} \equiv \frac{1}{m} \tag{13.174}
\end{equation*}
$$

Hence, the effective charge is $\pm e / m$.

### 13.9 Quantum numbers of the quasiparticles: fractional statistics

The fractional statistics can be studied by considering the two-particle Green function. Recall that now we have to consider two sets of trajectories, one for each particle, which constitute a half-braid such as the one shown in Fig. 13.2. We now consider two paths $\gamma_{1}$ and $\gamma_{2}$, such as the ones discussed in Section 10.5. Here too, the configurations of paths can be classified according to their linking number $\nu_{\mathrm{L}}$. The weights of configurations with different linking numbers have different phase factors. Likewise, configurations of paths from direct and exchange processes also have different linking numbers. While the phase factors themselves depend on the trajectories, and thus on the arbitrarily chosen paths for the two particles, the relative phase depends only on the topological properties of the configurations of paths, and is determined entirely by the relative linking number $\Delta \nu_{\mathrm{L}}$. In particular, we want to compare two paths that form a linked knot with two paths that do not. In this case, the linking number changes by $\Delta \nu_{\mathrm{L}}=1$.

If the paths are very long and wide, such as the dominant paths for the lowenergy excitations, the average over the statistical gauge fields can be calculated using the effective action in the infrared approximation. This effective action
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-552.jpg?height=524&width=530&top_left_y=1512&top_left_x=590)

Figure 13.2 A half-braid of the worldlines of two quasiparticles is equivalent to a counterclockwise exchange.
contains only one Chern-Simons term (if $\tilde{A}=0$ ), with coupling constant $\bar{\theta}$ equal to

$$
\begin{equation*}
\bar{\theta}=\sigma_{x y}^{0}+\theta=\frac{p}{2 \pi}+\frac{1}{4 \pi s} \tag{13.175}
\end{equation*}
$$

The arguments of Section 10.5 show that these two amplitudes differ by a factor $W_{\text {ex }}$, given by

$$
\begin{equation*}
W_{\mathrm{ex}}=-\exp \left(i \frac{\Delta \nu_{\mathrm{L}}}{2 \bar{\theta}}\right) \tag{13.176}
\end{equation*}
$$

Thus, the statistical angle $\delta$ (including the fermion sign) for all fractional quantum Hall states in the Jain sequences, with filling fraction $v=p /(2 s p+1)$, is given by

$$
\begin{equation*}
\delta= \pm\left(\frac{2 s(p-1)+1}{2 s p+1}\right) \pi \quad(\bmod 2 \pi) \tag{13.177}
\end{equation*}
$$

For the special case of the Laughlin states, with $v=1 / m$ (and thus $p=1$ ), the statistical angle reduces to

$$
\begin{equation*}
\delta= \pm \frac{\pi}{m} \tag{13.178}
\end{equation*}
$$

We conclude that the operator we found creates quasiholes (or, conversely, quasiparticles) of charge $\pm(e / m)$ and statistics $\pi / m$. This result agrees with the Berryphase arguments of Arovas, Schrieffer, and Wilczek and with the calculations based on the Laughlin wave function, which we summarized in Section 13.1.4. The power of the derivation that we just gave lies in the fact that it follows directly from the general principles of quantum mechanics (just as the Berry-phase arguments do), but without the need to make any specific ansatz for the wave functions for the ground state and for the quasihole. The adiabatic approximation, which is essential to the Berry-phase argument, is just as important here, since it results from the existence of an energy gap. But the general formula for the path integral is valid even in the absence of a gap.

## 14

## Topological fluids

In this chapter we will develop the effective-field theory of topological fluids, focusing on the fractional quantum Hall states as the prototype.

### 14.1 Quantum Hall fluids on a torus

Quantum Hall states are topological electron fluids whose properties depend on the topology of the surface on which the electrons are bound. In this section we will discuss the case of a fluid confined to a 2D torus. Although considering a 2D electron gas on a torus is of little experimental value, it is a great conceptual (and numerical) tool.

For the Laughlin states we have discussed there is the implicit assumption that the electrons are confined in a simply connected region of the plane by an external confining potential. Thus, the surface on which the electrons live has the topology of a disk or, which is equivalent, a sphere. In this geometry the ground state is unique.

In Section 12.7 we discussed the state of a free-fermion system on a torus with filling factor $v=1$ (a full Landau level), and we showed that the ground state on a torus is also unique. The reason for this is that the filling factor is 1 . Thus, in a translationally invariant system the motion of the center of mass of the electron fluid decouples from the relative motion of the electrons in the fluid. The motion of the center of mass is that of a single particle moving in a magnetic field with one flux quantum. Thus the state is unique.

The situation is different in the case of Laughlin states, since they have a filling fraction $v=1 / m$. Thus the center of mass behaves as a charged particle moving in the field of $m$ flux quanta. Hence we expect that the ground-state wave function should be $m$-fold degenerate. Haldane and Rezayi (1985) gave an explicit construction of the Laughlin state on a torus (essentially the generalization of what we discussed in Section 12.7). These wave functions (in the Landau gauge) have the
same factorized form as that of Eq. (12.157) expressed in terms of theta functions. The difference is that in the case of Laughlin states there are $m$ linearly independent states. Later in this chapter we will see that in the case of the non-abelian quantum Hall states the degeneracy on a torus is not determined solely by the motion of the center of mass of the fluid.

In this section we will see how the topology of the torus affects the concept of flux attachment and the construction of the effective-field theory of the quantum Hall states.

### 14.1.1 Flux attachment on a torus

We will now show how to define flux attachment in a manner compatible with the requirement of quantization of the abelian Chern-Simons coupling constant or, which amounts to the same thing, of invariance under large gauge transformations. Here we follow in detail the work of Fradkin, Nayak, Tsvelik, and Wilczek (Fradkin et al., 1998).

Consider a theory of particles (in first quantization) that interact with each other as they evolve in time. We will assume in what follows that the particles are fermions (in two spatial dimensions) and that their worldlines never cross. The actual choice of statistics is not important in what follows, but the requirement that there is no crossing is important and, for bosons, it implies the assumption that there is a hard-core interaction, whereas for fermions the Pauli principle takes care of this issue automatically. For simplicity, we will assume that the time evolution is periodic, with a very long period.

The worldlines of the particles can be represented by a conserved current $j_{\mu}$. For a given history of the system, the worldlines form braids with well-defined linking numbers $v_{\mathrm{L}}\left[j_{\mu}\right]$, which, as we saw before, are given by

$$
\begin{equation*}
v_{\mathrm{L}}\left[j_{\mu}\right]=\int d^{3} x j_{\mu}(x) B^{\mu}(x) \tag{14.1}
\end{equation*}
$$

where $j_{\mu}$ and $B_{\mu}$ are related through Ampère's law, cf. Eq. (10.109),

$$
\begin{equation*}
\epsilon_{\mu \nu \lambda} \partial^{\nu} B^{\lambda}(x)=j_{\mu}(x) \tag{14.2}
\end{equation*}
$$

Under the assumption of the absence of crossing of the worldlines of the particles, the linking $v_{\mathrm{L}}\left[j_{\mu}\right]$ is a topological invariant. Thus, if $S\left[j_{\mu}\right]$ is the action for a given history, then the quantum-mechanical amplitudes of all physical observables remain unchanged if the action is modified by

$$
\begin{equation*}
S\left[j_{\mu}\right] \rightarrow S\left[j_{\mu}\right]+2 \pi s v_{\mathrm{L}}\left[j_{\mu}\right] \tag{14.3}
\end{equation*}
$$

where $s \in \mathbb{Z}$ is an arbitrary integer.

The quantum-mechanical amplitudes are sums over histories of the particles, and take the form

$$
\begin{equation*}
W\left[\left\{j_{\mu}\right\}\right]=\sum_{\left[j_{\mu}\right]} e^{i S\left[j_{\mu}\right]+2 \pi i s v_{\mathrm{L}}\left[j_{\mu}\right]} e^{i \phi\left[j_{\mu}\right]} \tag{14.4}
\end{equation*}
$$

where $\phi\left[j_{\mu}\right]$ is a phase factor that accounts for the statistics of the particles $(0$ for bosons and $\pi$ for fermions).

However, the amplitudes remain unchanged if in the integrand of Eq. (14.4) we insert the number 1 written as the following expression:

$$
\begin{align*}
1 & \equiv \int \mathcal{D} b_{\mu} \prod_{x} \delta\left(\epsilon_{\mu \nu \lambda} \partial^{\nu} b^{\lambda}-j_{\mu}\right) \\
& =\mathcal{N} \int \mathcal{D} b_{\mu} \mathcal{D} a_{\mu} \exp \left(\frac{i}{2 \pi} \int d^{3} x a^{\mu}\left[\epsilon_{\mu \nu \lambda} \partial^{\nu} b^{\lambda}-j_{\mu}\right]\right) \tag{14.5}
\end{align*}
$$

where $\mathcal{N}$ is a normalization constant and we have used a representation of the delta function in terms of a Lagrange-multiplier vector field $a_{\mu}$. Notice that, since $j_{\mu}$ is locally conserved, i.e. $\partial_{\mu} j^{\mu}=0$, these expressions are invariant under the gauge transformations $a_{\mu}(x) \rightarrow a_{\mu}(x)+\partial_{\mu} \Lambda(x)$.

After using the constraint $j_{\mu}=\epsilon_{\mu \nu \lambda} \partial^{\nu} b^{\lambda}$, the amplitude can also be written in the equivalent form

$$
\begin{align*}
& W\left[\left\{j_{\mu}\right\}\right]=\sum_{\left[j_{\mu}\right]} \int \\
& \mathcal{D} b_{\mu} \mathcal{D} a_{\mu} e^{i S\left[j_{\mu}\right]+2 \pi i s v_{\mathrm{L}}\left[j_{\mu}\right]} e^{i \phi\left[j_{\mu}\right]}  \tag{14.6}\\
& \times \exp \left(i \int d^{3} x a^{\mu}(x) \frac{1}{2 \pi}\left[\epsilon_{\mu \nu \lambda} \partial^{\nu} b^{\lambda}-j_{\mu}\right]\right)
\end{align*}
$$

We can then compute this amplitude as a path integral of a theory in which the particles whose worldlines are represented by the currents $j_{\mu}$ interact with the gauge fields $a_{\mu}$ and $b_{\mu}$. These interactions are encoded in the effective Lagrangian

$$
\begin{equation*}
\mathcal{L}_{\mathrm{eff}}[a, b, j]=\frac{1}{2 \pi} \epsilon_{\mu \nu \lambda} a^{\mu} \partial^{\nu} b^{\lambda}-a^{\mu} j_{\mu}-\frac{2 s}{4 \pi} \epsilon_{\mu \nu \lambda} b^{\mu} \partial^{\nu} b^{\lambda} \tag{14.7}
\end{equation*}
$$

where we have used the constraint $j_{\mu}=\epsilon_{\mu \nu \lambda} \partial^{\nu} b^{\lambda}$ to write the winding number in the form of a Chern-Simons action for the gauge field $b_{\mu}$ (Wilczek and Zee, 1983; Wu and Zee, 1984). Hence, the amplitudes can be written in terms of a path integral over an abelian Chern-Simons gauge field with a correctly quantized coupling constant equal to $2 s /(4 \pi)$. The first term of the effective Lagrangian of Eq. (14.7), the cross term involving both of the gauge fields, $a^{\mu}$ and $b^{\mu}$, is called the BF Lagrangian since it couples a vector potential to the field strength of another field.

As we noted earlier in this chapter, the usual form of the flux-attachment transformation is found by integrating out the gauge field $b_{\mu}$. For vanishing boundary conditions at infinity, which is to say for a system on a surface with the topology of a disk, this leads to an effective action for the field $a_{\mu}$ of the conventional form (López and Fradkin, 1991)

$$
\begin{equation*}
S_{\mathrm{eff}}[a]=\frac{\theta}{2} \int d^{3} x \epsilon_{\mu \nu \lambda} a^{\mu} \partial^{\nu} a^{\lambda}, \quad \theta=\frac{1}{2 \pi \times 2 s} \tag{14.8}
\end{equation*}
$$

which is the expression we have used before for the statistical gauge field. This form of the effective action is not valid for manifolds with non-trivial topology. However, Eq. (14.7) is correct in all cases since it is invariant under both local and large gauge transformations. In addition to being consistent on closed manifolds, the action of Eq. (14.7) treats the statistical gauge field $a_{\mu}$ and its dual $b_{\mu}$ on an equal footing. We will see in the next section that the dual field $b_{\mu}$ arises naturally in a hydrodynamic theory, and plays a central role in Wen's construction of the abelian fractional quantum Hall hierarchy (Wen, 1995).

We can now proceed as before, the only difference being that the (composite) fermions (or bosons, depending on our choice) couple to the gauge field $b_{\mu}$ rather than to the field $a_{\mu}$ (which plays the role of the statistical gauge field). In this fashion the mean-field theory in the composite-fermion language proceeds by first spreading out the field and constructing an effective integer Hall effect of the partially screened magnetic field. The composite-fermions fill up $p$ effective Landau levels. The effective action in the composite-fermion picture is found by integrating out the local particle-hole fluctuations of the fermions about the uniform mean-field state. This leads to an effective-field theory with the following effective Lagrangian (López and Fradkin, 1999):

$$
\begin{align*}
\mathcal{L}= & \frac{p}{4 \pi} \epsilon_{\mu \nu \lambda} a^{\mu} \partial^{\nu} a^{\lambda}-\frac{2 s}{4 \pi} \epsilon_{\mu \nu \lambda} b^{\mu} \partial^{\nu} b^{\lambda}+\frac{1}{4 \pi} \epsilon_{\mu \nu \lambda} c^{\mu} \partial^{\nu} c^{\lambda} \\
& +\frac{1}{2 \pi} \epsilon_{\mu \nu \lambda} a^{\mu} \partial^{\nu} b^{\lambda}-\frac{e}{2 \pi} \epsilon_{\mu \nu \lambda} b^{\mu} \partial^{\nu} A^{\lambda}-a_{\mu} j_{\mathrm{qp}}^{\mu}-e_{\mu} j_{\mathrm{qp}}^{\mu} \tag{14.9}
\end{align*}
$$

where we introduced an additional gauge field $e_{\mu}$ to track the fermion sign of the composite fermions, and $A_{\mu}$ is an external electromagnetic perturbation. The currents $j_{\text {qp }}^{\mu}$ describe the worldlines of the excitations, i.e. the particles outside the condensate. The result is a description of the states in the generalized Jain hierarchies $v_{ \pm}(s, p)=p /(2 s p \pm 1)$, where $p, s \in \mathbb{Z}$ and the $\pm$ signs apply for an electron-like and a hole-like FQH fractional quantum Hall state, respectively.

The low-energy effective Lagrangian for the gauge fields can be written in terms of a $3 \times 3$ matrix of coupling constants (the $K$-matrix of Wen and Zee's generalized fractional quantum Hall fluids (Wen and Zee, 1992), see the next section)

$$
\begin{equation*}
\mathcal{L}_{\mathrm{eff}}=\frac{1}{4 \pi} K_{I J} \epsilon^{\mu \nu \lambda} a_{\mu}^{I} \partial_{\nu} a_{\lambda}^{J}-e \frac{1}{2 \pi} t_{I} \epsilon_{\mu \nu \lambda} a_{I}^{\mu} \partial^{\nu} A^{\lambda}-\ell_{I} j_{\mathrm{qp}}^{\mu} a_{\mu}^{I} \tag{14.10}
\end{equation*}
$$

with $(I, J=1,2,3)$

$$
K_{I J}=\left(\begin{array}{ccc}
-2 s & 1 & 0  \tag{14.11}\\
1 & p & 0 \\
0 & 0 & 1
\end{array}\right)
$$

where $a_{\mu}=a_{\mu}^{1}, b_{\mu}=a_{\mu}^{2}$, and $c_{\mu}=a_{\mu}^{3}$. The charge vector $t_{I}=(1,0,0)$ indicates which gauge field represents the charge current, and the excitation vector $\vec{\ell}=$ $(0,1,-1)$ assigns the quantum numbers to the excitations.

We now notice that this effective theory is globally well defined since the ChernSimons coupling constants are correctly quantized. Indeed, if we integrate out the gauge field $b_{\mu}=a_{\mu}^{2}$, we find the same effective action for $a_{\mu}$ as that of Eq. (13.150). For the Laughlin sequence, with $p=1$, we can integrate out the gauge field $b_{\mu}$ (for a system on a disk!) and recover the effective action for the statistical field $a_{\mu}$ of Eq. (14.8).

### 14.1.2 Chern-Simons on a torus

Chern-Simons gauge theories (both one- and multi-component abelian as well as non-abelian) are topological field theories. We have already seen that this means that they do not have local degrees of freedom and that their energymomentum tensors (and hence their Hamiltonians) are equal to zero. Nevertheless, on topologically non-trivial closed manifolds, such as the torus, they support finite-dimensional Hilbert spaces. The dimension of these Hilbert spaces is their ground-state degeneracy. We will not give here a detailed proof of this statement (Wen, 1989; Witten, 1989; Wen, 1990c; Wen and Niu, 1990; Wesolowski et al., 1994) but present the basic ideas.

Let us consider for concreteness the case of a rectangular torus with coordinates $0 \leq x_{i} \leq L_{i}$ ( $i=1,2$ being the two orthogonal directions on the torus). We will consider an $M$-component Chern-Simons theory with a Lagrangian of the form of Eq. (14.10). In this case we have $M$ gauge fields $a_{\mu}^{I}$ with $I=1, \ldots, M$, and $K_{I J}$ is an $M \times M$ symmetric matrix of integer coefficients. The gauge group in this case is $\mathrm{U}(1)^{M}$. The Gauss-law constraint for this theory, in the absence of sources (temporal Wilson loops), simply states that the vacuum states |vac $\rangle$ satisfy

$$
\begin{equation*}
K_{I J} \epsilon_{i j} \partial_{i} a_{j}^{J}|\mathrm{vac}\rangle=0 \tag{14.12}
\end{equation*}
$$

which is obeyed by pure gauge configurations of the form (with no summation over the spatial label $i$ ) (for each $I=1, \ldots, M$ )

$$
\begin{equation*}
a_{i}^{I}(x)=\partial_{i} \Phi^{I}(x)+\frac{\bar{a}_{i}^{I}}{L_{i}} \tag{14.13}
\end{equation*}
$$

where $\Phi^{I}(x)$ are local ("small") smooth gauge transformations and $\bar{a}_{i}^{I}$ are the two holonomies of the torus (for each field),

$$
\begin{equation*}
\int_{0}^{L_{i}} d x_{i} a_{i}^{I}(x)=\bar{a}_{i}^{I} \tag{14.14}
\end{equation*}
$$

By plugging this solution into a Lagrangian of the form of Eq. (14.10) we find that the holonomies $\bar{a}_{i}^{I}$ obey the effective Lagrangian (not density!) (repeated indices are summed over)

$$
\begin{equation*}
L=\frac{1}{4 \pi} K_{I J} \epsilon_{i j} \bar{a}_{i}^{I} \partial_{0} \bar{a}_{j}^{J}=\frac{1}{4 \pi} K_{I J}\left(\bar{a}_{1}^{I} \partial_{0} \bar{a}_{2}^{J}-\bar{a}_{2}^{I} \partial_{0} \bar{a}_{1}^{J}\right) \tag{14.15}
\end{equation*}
$$

This Lagrangian tells us that the $x$ - and $y$-components of the holonomies form canonical pairs. Upon quantization they become operators acting on the Hilbert space and satisfy the equal-time commutation relations

$$
\begin{equation*}
\left[\bar{a}_{1}^{I}, \bar{a}_{2}^{J}\right]=i 2 \pi K_{I J}^{-1} \tag{14.16}
\end{equation*}
$$

Thus, in the $\bar{a}_{1}^{I}$ representation, the operator $\bar{a}_{2}^{I}$ is a differential operator (and vice versa)

$$
\begin{equation*}
\bar{a}_{2}^{I}=-2 \pi i K_{I J}^{-1} \frac{\partial}{\partial \bar{a}_{1}^{J}} \tag{14.17}
\end{equation*}
$$

Let us now define the Wilson lines for the holonomies, $W_{i}^{I}$ (with no summation over $i$ ):

$$
\begin{equation*}
W_{i}^{I}=\exp \left(i \int_{0}^{L_{i}} d x_{i} a_{i}^{I}\right)=e^{i \bar{a}_{i}^{I}} \tag{14.18}
\end{equation*}
$$

The requirement that the path integral be invariant under both local and large gauge transformations (which is the reason for the quantization of the ChernSimons coupling constants, as we saw in Chapter 10) now implies the invariance of the Wilson lines, $W_{i}^{I}$, under large gauge transformations that shift $\bar{a}_{i}^{I} \rightarrow \bar{a}_{i}^{I}+2 \pi$. This has the effect of compactifying the target space to an $M$-torus. The unitary operators that induce these large gauge transformations are

$$
\begin{equation*}
U_{i}^{I}=e^{i \epsilon_{i j} K_{I J} \bar{a}_{j}^{J}} \tag{14.19}
\end{equation*}
$$

and obey the following algebra:

$$
\begin{align*}
U_{1}^{I} U_{2}^{J} & =e^{-2 \pi i K_{I J}} U_{2}^{J} U_{1}^{I}  \tag{14.20}\\
W_{1}^{I} W_{2}^{J} & =e^{-2 \pi i K_{I J}^{-1} W_{2}^{J} W_{1}^{I}}  \tag{14.21}\\
U_{i}^{I} W_{j}^{J} & =W_{j}^{J} U_{i}^{I} \tag{14.22}
\end{align*}
$$

We recognize the close similarity of this structure to that in our discussion of Wilson and 't Hooft loops in Chapter 9 and also to the magnetic algebra discussed in Chapter 12.

A straightforward (but lengthy) line of argument (Wesolowski et al., 1994), similar to what we did for Landau levels in Chapter 12, shows that the dimension of this (topological) Hilbert space is |det $K \mid$. For a general surface of genus $g$ (with $g$ handles) the degeneracy is (Wen and Zee, 1992; Wen, 1999)

$$
\begin{equation*}
|\operatorname{det} K|^{g} \tag{14.23}
\end{equation*}
$$

Chern-Simons gauge theories with non-abelian gauge groups have a similar ground-state degeneracy on topologically non-trivial manifolds (Witten, 1989).

We conclude that the ground-state degeneracy of Jain states on a torus is the absolute value of the determinant

$$
\begin{equation*}
|\operatorname{det} K|=|2 s p \pm 1| \tag{14.24}
\end{equation*}
$$

Thus, we find that the Jain states are $|2 n p \pm 1|$-fold degenerate on the torus, which is the correct result.

### 14.2 Hydrodynamic theory

The microscopic description of the FQHE of the preceding sections led us to an effective action for the long-distance and low-energy physics involving a ChernSimons action for a gauge field. The validity of this description is based on several key observations.

We begin with the fact of the existence of a set of filling fractions at which the fractional quantum Hall fluid is formed. At those precisely defined densities the 2DEG behaves as an incompressible fluid, and responds as such to an external electromagnetic perturbation. In particular, it exhibits a non-dissipative Hall current. If the number of electrons at fixed magnetic field does not precisely correspond to one of these "magic fractions," the excess (or defect) electrons produce a number of excitations. In the bosonic picture we saw that the excess electrons can be viewed as defects or vortices in the fluid, excitations that carry fractional charge and fractional statistics, anyons. Since the vortex charge is a fraction of the charge
of one electron, adding or removing a full electron is equivalent to adding or removing several quasiparticles (or vortices). Therefore, in a fluid state that exhibits the FQHE, a fractional quantum Hall state, the electron behaves as if it were a composite object, with the quasiparticles being the "fundamental" entities. In other terms, in fractional quantum Hall states the electron fractionalizes. This picture is naturally correct for describing excitations very close to the ground state. At very high energies (or at very short distances) the quasiparticle picture is no longer accurate, and the electron behaves as what it is, an electron.

We will now take a different approach and treat the electron gas in a large magnetic field as an incompressible fluid. The physics of these fluids can be deduced from general basic considerations of symmetries and conservation laws, rather than from a detailed microscopic theory. Since this description is applicable only for the low-energy physics, which describes slowly moving excitations, it is natural to try to reformulate the problem in terms of hydrodynamics. In this section we will develop a theory with this structure. This approach was originally suggested by Fröhlich and Kerler (1991) and Fröhlich and Zee (1991), was developed in full by Wen and Zee (1992), and was further generalized by Wen (1995). Here we will follow in some detail the analysis and notation of Wen (1995).

We begin by considering a system of (for the moment) fully polarized electrons, which we will treat as if they were spinless. The particle-coordinate Heisenberg operators are $\left\{\vec{x}_{i}\right\}$ and the velocity Heisenberg operators are $\left\{\vec{v}_{i}=d \vec{x}_{i} / d t\right\}$ $(i=1, \ldots, N)$. We can define the local density $J_{0}(\vec{x})$ and current $\vec{J}(\vec{x})$ operators by the obvious expressions

$$
\begin{equation*}
J_{0}(\vec{x})=\sum_{i=1}^{N} \delta\left(\vec{x}-\vec{x}_{i}\right), \quad \vec{J}(\vec{x})=\sum_{i=1}^{N} \vec{v}_{i} \delta\left(\vec{x}-\vec{x}_{i}\right) \tag{14.25}
\end{equation*}
$$

The condition of local charge conservation means that the 3-vector $J_{\mu}(x)=\left(J_{0}, \vec{J}\right)$ (with $x=(t, \vec{x})$ ) obeys the continuity equation

$$
\begin{equation*}
\partial_{\mu} J^{\mu}=0 \Leftrightarrow \partial_{t} J_{0}+\vec{\nabla} \cdot \vec{J}=0 \tag{14.26}
\end{equation*}
$$

What we want to do is formulate a theory of the FQHE that is based on hydrodynamics, i.e. a theory of locally conserved currents and densities in a large magnetic field. We will postulate an action that depends only on the distribution of currents and densities, $S\left[J_{\mu}\right]$. Incompressibility of the quantum fluid then implies that the effective action must be a local function of the currents and their derivatives, i.e.

$$
\begin{equation*}
S\left[J_{\mu}\right]=\int d^{3} x \mathcal{L}\left[J_{\mu}\right] \tag{14.27}
\end{equation*}
$$

where $\mathcal{L}\left[J_{\mu}\right]$ is a local Lagrangian density.

On the other hand, since the current $J_{\mu}$ is locally conserved, and hence obeys Eq. (14.26), it can be expressed as the curl of a vector field $b_{\mu}(x)$,

$$
\begin{equation*}
J_{\mu}(x)=\frac{1}{2 \pi} \epsilon_{\mu \nu \lambda} \partial^{\nu} b^{\lambda} \tag{14.28}
\end{equation*}
$$

which guarantees that the current is conserved. Here, as before, $\epsilon_{\mu \nu \lambda}$ is the totally antisymmetric Levi-Civita third-rank tensor. The vector field $b_{\mu}$ is actually a gauge field. Indeed, under a local gauge transformation $\Phi(x)$ (where $\Phi(x)$ is a smooth function of the space-time coordinates), the current distribution remains unchanged,

$$
\begin{equation*}
b_{\mu}(x) \rightarrow b_{\mu}(x)+\partial_{\mu} \Phi(x), \quad J_{\mu}(x) \rightarrow J_{\mu}(x) \tag{14.29}
\end{equation*}
$$

Hence, the effective action of the currents, $S\left[J_{\mu}\right]$, must also be invariant under the gauge transformation, Eq. (14.29). In other words, the hydrodynamic theory of an incompressible fluid with a conserved current is a gauge theory. Locality and gauge invariance now require that the action be a local gauge-invariant function of the hydrodynamic gauge field, $S\left[b_{\mu}\right]$.

What is the form of $S\left[b_{\mu}\right]$ ? A natural guess is to write a Maxwell-type action, which has two derivatives of the gauge field. Since the current and charge densities are dimension-2 operators (since their integrals over finite regions of space must have units of charge), the hydrodynamic gauge field $b_{\mu}$ must be a dimension-1 operator (to be consistent with it being a 1-form). This means that a Maxwell-type Lagrangian density, which has two fields and two derivatives, is a dimension-4 operator. For the action to be dimensionless in $(2+1)$ space-time dimensions, a Maxwell-type term must have a coefficient with the units of length, or, which amounts to the same thing, the inverse of the energy gap of the incompressible fluid. We have already found the same scaling in the theory of the chiral spin liquid, Eq. (10.78).

However, a time-reversal-invariant Maxwell action cannot describe a fluid of charged particles in an external magnetic field, since the latter breaks time-reversal invariance. Only an action with an odd number of time derivatives can do that. There is a unique gauge-invariant action that is odd under both time-reversal invariance and parity (but it is invariant under their product): the Chern-Simons action. The Chern-Simons action not only has the correct transformation properties under time reversal and parity but also has just one derivative. Hence it is more relevant than a Maxwell action. The conclusion of this analysis is that the leading term of the effective action at low energies of the hydrodynamic gauge field must have the Chern-Simons form. However, gauge invariance must also apply to fluids on closed surfaces. We saw in Section 10.4 that the coupling constant of the Chern-Simons action, the level, must obey a quantization condition in order for the path integral to be gauge-invariant on closed surfaces.

Therefore, we are led to postulate that the natural low-energy effective Lagrangian density for an incompressible charged fluid in an external uniform magnetic field is a Chern-Simons Lagrangian for the statistical gauge field $b_{\mu}$,

$$
\begin{equation*}
\mathcal{L}\left[b_{\mu}\right]=-\frac{m}{4 \pi} \epsilon^{\mu \nu \lambda} b_{\mu} \partial_{\nu} b_{\lambda}-\frac{e}{2 \pi} A^{\mu} \epsilon_{\mu \nu \lambda} \partial^{\nu} b^{\lambda} \tag{14.30}
\end{equation*}
$$

where $m \in \mathbb{Z}$ must be an integer in order to satisfy the quantization condition. The last term is the $J_{\mu} A^{\mu}$ coupling of the external electromagnetic field (the total field, not just a probe).

To check whether this hydrodynamic theory is correct, we will now find its predictions. We will first compute the effective action for the electromagnetic field $A_{\mu}$ in order to determine the Hall conductance. Upon integrating out the hydrodynamic gauge field $b_{\mu}$ we find, as expected, that it also has a Chern-Simons form:

$$
\begin{equation*}
\mathcal{L}_{\mathrm{eff}}\left[A_{\mu}\right]=\frac{e^{2}}{4 \pi m} \epsilon_{\mu \nu \lambda} A^{\mu} \partial^{\nu} A^{\lambda} \tag{14.31}
\end{equation*}
$$

The induced current $J_{\mu}^{\text {ind }}$ is

$$
\begin{equation*}
-e J_{\mu}^{\text {ind }}=\frac{\delta \mathcal{L}_{\text {eff }}}{\delta A^{\mu}}=\frac{e^{2}}{2 \pi m} \epsilon_{\mu \nu \lambda} \partial^{\nu} A^{\lambda} \tag{14.32}
\end{equation*}
$$

Therefore the fluid has a Hall conductivity (in units with $\hbar=c=1$ ) of

$$
\begin{equation*}
\sigma_{x y}=\frac{1}{m} \frac{e^{2}}{2 \pi} \tag{14.33}
\end{equation*}
$$

In other words, for $m \neq 1$ the fluid has an FQHE, corresponding to a filling fraction $v=1 / m$.

Notice that these arguments do not require $m$ to be an odd integer, and they work just as well for $m$ even. Thus, they also apply for a system of charged bosons in a magnetic field. Indeed, for a system of charged bosons we can also write the same Laughlin wave function as that of Eq. (13.5). For bosons the wave function must be symmetric under exchange, which requires $m$ to be even. The simplest bosonic Laughlin state has filling factor $v=1 / 2$.

To check this theory further, we will now compute the statistics of the quasiparticles/quasiholes. We will assume that the quasiparticle/quasihole is the lowestenergy excitation of this incompressible fluid. In the low-energy regime the smooth worldlines of these excitations can be represented by a set of currents, $j_{\mu}$, that couple in a gauge-invariant way to the hydrodynamic gauge field $b_{\mu}$. Including the excitations, the total Lagrangian density is (Wen, 1995)

$$
\begin{equation*}
\mathcal{L}\left[b_{\mu}\right]=-\frac{m}{4 \pi} \epsilon^{\mu \nu \lambda} b_{\mu} \partial_{\nu} b_{\lambda}-\frac{e}{2 \pi} A^{\mu} \epsilon_{\mu \nu \lambda} \partial^{\nu} b^{\lambda}+q j^{\mu} b_{\mu} \tag{14.34}
\end{equation*}
$$

where $q= \pm 1$ correspond to the histories of the quasiparticles $(+)$ and quasiholes $(-)$, respectively.

We can now integrate out the hydrodynamic gauge field $b_{\mu}$ to obtain an effective action for the excitations (represented by the quasiparticle current $j_{\mu}$ ) and the total external electromagnetic field $A_{\mu}$ :

$$
\begin{equation*}
\mathcal{L}_{\mathrm{eff}}\left[A_{\mu}, j_{\mu}\right]=\frac{e^{2}}{4 \pi m} \epsilon_{\mu \nu \lambda} A^{\mu} \partial^{\nu} A^{\lambda}-\frac{e}{e m} j_{\mu} A^{\mu}+q^{2} \frac{\pi}{m} j_{\mu} B^{\mu} \tag{14.35}
\end{equation*}
$$

where $B_{\mu}$ is a "magnetostatic" field generated by the quasiparticle current using Ampère's law, $j_{\mu}=\epsilon_{\mu \nu \lambda} \partial^{\nu} B^{\lambda}$.

As in our discussion on fractional statistics in Section 10.5, here too the integral of the last term in Eq. (14.35) is identified with the Hopf invariant, Eq. (10.105):

$$
\begin{equation*}
\int d^{3} x j_{\mu} B^{\mu}=\int d^{3} x \int d^{3} y j_{\mu}(x) \epsilon^{\mu \nu \lambda}\langle x| \frac{1}{\partial^{2}}\left|x^{\prime}\right\rangle \partial_{\lambda}^{y} j_{\nu}(y) \tag{14.36}
\end{equation*}
$$

In fact, the analysis we did in Section 10.5 tells us that the quasiparticles (and quasiholes), represented by their currents $j_{\mu}$, have fractional statistics with a statistical angle given by the prefactor of the Hopf/Chern-Simons term of Eq. (14.35):

$$
\begin{equation*}
\delta=q^{2} \frac{\pi}{m}=\frac{\pi}{m} \tag{14.37}
\end{equation*}
$$

which agrees with our results earlier in this chapter. Here we used the fact that $q^{2}=1$ both for quasiparticles and for quasiholes.

We can now compute the electromagnetic current, $-J_{\mu}$, by differentiating the effective action with respect to the external electromagnetic field:

$$
\begin{equation*}
-e J_{\mu}=\frac{e^{2}}{2 \pi m} \epsilon_{\mu \nu \lambda} \partial^{\nu} A^{\lambda}-\frac{e}{m} j_{\mu} \tag{14.38}
\end{equation*}
$$

where we identify the first term with the current of the ground state (in the presence of external fields) and the second term with a quasiparticle contribution. Let us consider the case in which we have just one static quasiparticle at rest at the origin, which we represent by the quasiparticle density $j_{0}=\delta(\vec{x})$ and current $\vec{j}=0$. Equation (14.38) now becomes (with $B$ being the uniform external magnetic field)

$$
\begin{equation*}
-e J_{0}=\frac{e^{2}}{2 \pi m} B-q \frac{e}{m} \delta(\vec{x}) \tag{14.39}
\end{equation*}
$$

Upon integrating this expression over the region occupied by the fluid, we find the total charge $Q=Q_{\text {gnd }}+Q_{\text {excitation }}$, where

$$
\begin{equation*}
Q_{\mathrm{gnd}}=\frac{e^{2}}{2 \pi m} B L^{2}=\frac{e^{2}}{2 \pi m} N_{\phi} \frac{2 \pi}{e}=e \frac{1}{m} N_{\phi}=e N \tag{14.40}
\end{equation*}
$$

is the ground-state charge (and tells us that the filling fraction is $v=1 / m$ ), and

$$
\begin{equation*}
Q_{\text {excitation }}=q \frac{e}{m} \tag{14.41}
\end{equation*}
$$

is the charge of the excitation. For a quasiparticle the charge is $Q_{\mathrm{qp}}=e / m$, whereas for a quasihole it is $Q_{\mathrm{qh}}=-e / m$. Hence, as we found before, the excitations have fractional charge $\pm e / m$ and fractional statistics $\pi / m$.

Using the arguments of Wilczek and Zee (1983), we can assign an effective fractional spin $S$ to the quasiparticles by demanding consistency with the spinstatistics theorem:

$$
\begin{equation*}
2 \pi S=\delta=\frac{\pi}{m} \quad \Rightarrow \quad S=\frac{1}{2 m} \tag{14.42}
\end{equation*}
$$

This result agrees with the detailed analysis of Einarsson et al. (1995). In this context, fractional spin means that the quasiparticles have an internal structure with an associated fractional intrinsic angular momentum. Unlike the relativistic concept of spin, fractional spin is not associated with a spinor structure and does not require the existence of more degrees of freedom. In this sense, unlike the spin of the electron, the fractional spin is not an independent quantum number of the quasiparticles. Nevertheless, it is possible to couple to the fractional spin of the quasiparticles in some circumstances. One situation in which this matters is a quantum Hall fluid on a sphere, where the fractional spin couples to the curvature of the surface (Wen, 1995). This is important in numerical simulations, which are often done on the sphere. The concept of fractional spin plays a crucial role in the explanation of the physical properties of fractional quantum Hall fluids, such as the (non-dissipative) Hall viscosity (Avron et al., 1995; Read, 2009; Haldane, 2011; Hoyos and Son, 2012).

Notice that if we pick $q=m$ (i.e. $m$ quasiparticles) the corresponding charge of this object is $Q=e$ and the statistical angle is $\delta=m \pi$. Thus, for $m$ odd, the composite object of $m$ quasiparticles has charge $e$ and is a fermion, i.e. it is the electron. Hence, in this theory the electron is fractionalized.

### 14.3 Hierarchical states

We will now briefly describe a generalized hydrodynamic theory that describes the fractional quantum Hall hierarchical states as well as multi-component fluids. Once again we follow the work of Wen (1995).

In this approach the hierarchical states are constructed from a set of nested Bose condensates of quasiparticles, and this method hence follows closely the HaldaneHalperin construction. An equivalent construction can be used for the equivalent Jain generalized hierarchical states.

We begin by allowing the quasiparticles to be dynamical excitations. To this end, we will add a quasiparticle kinetic-energy term $\mathcal{L}_{\text {qp-KE }}\left[j_{\mu}\right]$ to the effective Lagrangian of Eq. (14.34). We will write the total effective Lagrangian as the sum
of a condensate contribution (the first two terms) and a quasiparticle contribution (the last two terms):

$$
\begin{equation*}
\mathcal{L}\left[b_{\mu}, A_{\mu}, j_{\mu}\right]=-\frac{m}{4 \pi} \epsilon^{\mu \nu \lambda} b_{\mu} \partial_{\nu} b_{\lambda}-\frac{e}{2 \pi} A^{\mu} \epsilon_{\mu \nu \lambda} \partial^{\nu} b^{\lambda}+q b_{\mu} j^{\mu}+\mathcal{L}_{\mathrm{qp}-\mathrm{KE}} \tag{14.43}
\end{equation*}
$$

where $q= \pm 1$ (for quasiparticles and quasiholes).
The quasiparticles will be assumed to be in a fractional quantum Hall fluid of their own. Since the quasiparticle current $j_{\mu}$ is conserved, it can also be described by its own hydrodynamic gauge field, which we will denote by $c_{\mu}$, defined by

$$
\begin{equation*}
j_{\mu}=\frac{1}{2 \pi} \epsilon_{\mu \nu \lambda} \partial^{\nu} c^{\lambda} \tag{14.44}
\end{equation*}
$$

The same assumptions as those we made for electrons in a magnetic field now apply to the quasiparticle current. Thus, the field $c_{\mu}$ will be governed by a ChernSimons Lagrangian $\mathcal{L}^{\prime}$, also with a quantized coupling constant, representing the ideal fractional quantum Hall state of the excitations:

$$
\begin{equation*}
\mathcal{L}^{\prime}=-\frac{n}{4 \pi} \epsilon_{\mu \nu \lambda} c^{\mu} \partial^{\nu} c^{\lambda}+\frac{1}{2 \pi} b^{\mu} \epsilon_{\mu \nu \lambda} \partial^{\nu} c^{\lambda} \tag{14.45}
\end{equation*}
$$

where $n$ is an even integer. Thus we will postulate that, in the absence of additional excitations, the effective Lagrangian at the second level of this hierarchy is

$$
\begin{align*}
\mathcal{L}\left[b_{\mu}, A_{\mu}, c_{\mu}\right]= & -\frac{m}{4 \pi} \epsilon^{\mu \nu \lambda} b_{\mu} \partial_{\nu} b_{\lambda}-\frac{e}{2 \pi} A_{\mu} \epsilon^{\mu \nu \lambda} \partial_{\nu} b_{\lambda} \\
& -\frac{n}{4 \pi} \epsilon^{\mu \nu \lambda} c_{\mu} \partial_{\nu} c_{\lambda}+\frac{1}{2 \pi} b_{\mu} \epsilon^{\mu \nu \lambda} \partial_{\nu} c_{\lambda} \tag{14.46}
\end{align*}
$$

What filling fraction does this effective theory describe? To find out, we will derive the Chern-Simons constraint (Gauss's law). Since we now have two gauge fields, $b_{\mu}$ and $c_{\mu}$, we have two constraints:

$$
\begin{align*}
& \frac{\delta \mathcal{L}}{\delta b_{0}}=0 \Rightarrow-e B=m\left\langle\epsilon_{i j} \partial_{i} b_{j}\right\rangle-\left\langle\epsilon_{i j} \partial_{i} c_{j}\right\rangle  \tag{14.47}\\
& \frac{\delta \mathcal{L}}{\delta c_{0}}=0 \Rightarrow n\left\langle\epsilon_{i j} \partial_{i} c_{j}\right\rangle=\left\langle\epsilon_{i j} \partial_{i} b_{j}\right\rangle
\end{align*}
$$

The filling factor is the ratio of the number of electrons, $N_{e}=(1 /(2 \pi)) \times$ $\left\langle\epsilon_{i j} \partial_{i} b_{j}\right\rangle L^{2}$, to the total number of flux quanta, $\left.N_{\phi}=-(e / 2 \pi)\right) B L^{2}$. Hence, from Eq. (14.47) we find that the filling fraction at the second level of the hierarchy is

$$
\begin{equation*}
v=\frac{\left\langle\epsilon_{i j} \partial_{i} b_{j}\right\rangle}{-e B}=\frac{1}{m-1 / n}=\frac{n}{n m-1} \tag{14.48}
\end{equation*}
$$

with the Hall conductance $\sigma_{x y}=v e^{2} / h$. For example, if the "parent" state is the Laughlin state at $v=1 / 3(m=3)$, the first "daughter" state will have $n=2$,
and the total filling fraction is $v=2 / 5$ (which we saw is also describable as a Jain state).

Once again, if the system is not precisely at this filling fraction, the fluid will have a number of excitations. They are also represented by a set of quasiparticle currents, $j_{\mu}^{\mathrm{qp}}$, which are minimally coupled to the two hydrodynamic fields and two integer charges.

It will be convenient to change to a more compact notation introduced by Wen and Zee (1992). We will relabel the gauge fields as $b_{\mu}=b_{\mu}^{1}$ and $c_{\mu}=b_{\mu}^{2}$, and the quasiparticle charges as $q=\ell_{1}$ and $q^{\prime}=\ell_{2}$. We will also introduce a $2 \times 2$ $K$-matrix, $K_{I J}$ (with $I, J=1,2$ ), in this case

$$
K=\left(\begin{array}{cc}
p_{1} & -1  \tag{14.49}\\
-1 & p_{2}
\end{array}\right)
$$

where $m=p_{1}$ and $n=p_{2}$. We will also introduce a charge vector $\vec{t}=(1,0)$ and a vector $\vec{\ell}=\left(\ell_{1}, \ell_{2}\right)$ for the quasiparticle couplings (which we will use to label the quasiparticles). In this notation the effective Lagrangian is (as usual repeated indices are summed over)

$$
\begin{equation*}
\mathcal{L}\left[b_{\mu}^{I}, A_{\mu}\right]=-\frac{m}{4 \pi} K_{I J} \epsilon^{\mu \nu \lambda} b_{\mu}^{I} \partial_{\nu} b_{\lambda}^{J}-\frac{e}{2 \pi} A_{\mu} t_{I} \epsilon^{\mu \nu \lambda} \partial_{\nu} b_{\lambda}^{I}+j_{\mathrm{qp}}^{\mu} \ell_{I} b_{\mu}^{I} \tag{14.50}
\end{equation*}
$$

In this notation, the filling fraction (cf. Eq. (14.48)) becomes

$$
\begin{equation*}
v=\sum_{I, J=1,2} K_{I J}^{-1} t_{I} t_{J} \tag{14.51}
\end{equation*}
$$

where $K^{-1}$ is the inverse of the $K$-matrix of Eq. (14.49).
The results of Section 14.1.2 tell us that the ground-state degeneracy on a torus is

$$
\begin{equation*}
|\operatorname{det} K|=\left|p_{1} p_{2}-1\right| \tag{14.52}
\end{equation*}
$$

The electric charges and statistics of the quasiparticles can be computed with the same methods as above. Thus by integrating out the hydrodynamic gauge fields we find that the quasiparticle (electric) charges are

$$
\begin{equation*}
Q=-e \sum_{I, J=1,2} K_{I J}^{-1} t_{I} \ell_{J}=-e \frac{p_{2} \ell_{1}+\ell_{2}}{p_{1} p_{2}-1} \tag{14.53}
\end{equation*}
$$

and their statistical angles $\delta$ are

$$
\begin{equation*}
\delta=\pi \sum_{I, J=1,2} K_{I J}^{-1} \ell_{I} \ell_{J}=\pi \frac{p_{2} \ell_{1}^{2}+p_{1} \ell_{2}^{2}+2 \ell_{1} \ell_{2}}{p_{1} p_{2}-1} \tag{14.54}
\end{equation*}
$$

For example, for the $v=2 / 5$ fractional quantum Hall state, which is regarded as the daughter state of the $v=1 / 3$ Laughlin state, the $K$-matrix is

$$
K=\left(\begin{array}{cc}
3 & -1  \tag{14.55}\\
-1 & 2
\end{array}\right)
$$

This state thus has a det $K=5$-fold-degenerate ground state on a torus. This analysis then predicts that this fractional quantum Hall state has two types of quasiparticles (and quasiholes): (1) a quasihole $\vec{\ell}=(0,1)$ with fractional charge $Q=e / 5$ and statistics $\delta=3 \pi / 5$, and (2) a quasihole $\vec{\ell}=(1,0)$ with fractional charge $Q=2 e / 5$ and statistics $\delta=2 \pi / 5$. Notice that in this case the quasihole $\vec{\ell}=(1,0)$ can also be regarded as a composite object made of two quasiholes $\vec{\ell}=(0,1)$, which will have the same electric charge and the same statistical angle (modulo $2 \pi$ ), hence $(1,0) \equiv(0,2)$. Similarly, an electron is regarded as a composite excitation made of five elementary quasiparticles. Indeed, the excitation $\vec{\ell}=(0,-5)$ has charge $-e$ and statistics $\pi$ (modulo $2 \pi$ ).

Another interesting example is the fractional quantum Hall state with $v=2 / 3$, which can be regarded as the particle-hole conjugate of the Laughlin state at $v=$ $1 / 3$. However, unlike the $v=1 / 3$ Laughlin state, the $v=2 / 3$ state appears at level 2 in this hierarchical construction, and it is represented by the $2 \times 2 \mathrm{~K}$-matrix

$$
K=\left(\begin{array}{cc}
1 & 1  \tag{14.56}\\
1 & -2
\end{array}\right)
$$

This construction is generalized to arbitrary levels of the hierarchy. For instance, we could now proceed further and consider a state that results from the condensation of a set of quasiparticles of level 2 into a new quantum Hall state to find a new state at level 3, and so on and so forth. Hence the effective Lagrangian $\mathcal{L}_{n}$ at level $n$ of the hierarchy is constructed from the effective Lagrangian $\mathcal{L}_{n-1}$ at level $n-1$. Let $I, J=1, \ldots, n-1$ and let $K_{I J}^{(n-1)}$ be the $K$-matrix at level $n-1$. We will consider a state resulting from condensing the level- $(n-1)$ quasiparticles labeled by $\vec{\ell}^{(n-1)}=\left(\ell_{1}^{(n-1)}, \ldots, \ell_{n-1}^{(n-1)}\right)$ and charge vector $\vec{t}^{(n-1)}$. The effective Lagrangian at level $n$ has the same form as before,

$$
\begin{equation*}
\mathcal{L}=-\sum_{I, J=1}^{n} \frac{1}{4 \pi} K_{I J}^{(n)} \epsilon^{\mu \nu \lambda} b_{\mu}^{I} \partial_{\nu} b_{\lambda}^{J}-\frac{e}{2 \pi} \sum_{I=1}^{n} A_{\mu} t_{I}^{(n)} \epsilon^{\mu \nu \lambda} \partial_{\nu} b_{\lambda}^{I}+\sum_{I=1}^{n} \ell_{I}^{(n)} j^{\mu} b_{\mu}^{I} \tag{14.57}
\end{equation*}
$$

where the level-n $K$-matrix has the block form

$$
K^{(n)}=\left(\begin{array}{cc}
K^{(n-1)} & -\left[\vec{\ell}^{(n-1)}\right]^{t}  \tag{14.58}\\
-\vec{\ell}^{(n-1)} & p_{n}
\end{array}\right)
$$

with a ground-state degeneracy on a torus, cf. Eq. (14.23).

In all cases the filling fraction $v$ of the resulting fractional quantum Hall state and the electric charges and statistical angles of the excitations are given by the obvious generalization of the level-2 expressions of Eq. (14.51), Eq. (14.53), and Eq. (14.54). For example, if we always condense the quasiparticle with smallest charge at level $n-1$ (with vector $\vec{\ell}^{(n-1)}=(0, \ldots, 1)$ ), the $K$-matrix at level $n$ is the tridiagonal matrix

$$
\begin{equation*}
K_{I J}=p_{I} \delta_{I J}-\delta_{I, J-1}-\delta_{I, J+1}, \quad p_{1} \text { odd and } p_{I} \text { even }(I \geq 2) \tag{14.59}
\end{equation*}
$$

with charge vector $t_{I}=\delta_{I, 1}$. In this case the filling fraction has the partial-fraction decomposition (Haldane, 1983b)

$$
\begin{equation*}
v=\frac{1}{p_{1}-\frac{1}{p_{2}-\frac{1}{p_{3}-\cdots}}} \tag{14.60}
\end{equation*}
$$

However, do all the choices of a $K$-matrix and charge vector $\vec{t}$ represent physically distinct quantum Hall fluids? In general the answer to this question is no, since under a suitable change of basis for the gauge fields, i.e. a linear transformation of the form

$$
\begin{equation*}
b_{\mu}^{I} \rightarrow W_{I J} b_{\mu}^{J}=b_{\mu}^{\prime I} \tag{14.61}
\end{equation*}
$$

we can seemingly always bring the $K$-matrix to a diagonal form. However, not all such linear transformations are allowed. The reason is that the set of allowed "independent" quasiparticle vectors, $\left\{\ell^{(I)}\right\}$, with $\ell_{J}^{(I)}=\delta_{I J}$, constitutes a basis that spans the charge lattice, $\ell=\sum_{I=1}^{n} l_{I} \ell^{(I)}$, with integer coefficients $l_{I}$ (required by charge quantization). However, the quasiparticle vectors $\vec{\ell}$ will also transform under a general transformation of Eq. (14.61), namely $\ell_{I}^{\prime}=W_{I J} \ell_{J}$, and, for a general transformation, the transformed vector is not an element of the (integer) charge lattice. Therefore only those transformations $W$ that map the charge lattice into the same charge lattice are allowed. In other terms, the allowed linear transformations are not general linear transformations of $\mathbb{R}^{n}$ but elements of the group $\operatorname{SL}(n, \mathbb{Z})$, the group of integer-valued matrices with unit determinant. Therefore two quantum Hall fluids characterized by two $K$-matrices, $K_{1}$ and $K_{2}$, and two charge vectors, $\vec{t}_{1}$ and $\vec{t}_{2}$, are equivalent (that is, the same state) if there exists a linear transformation $W \in \mathrm{SL}(n, \mathbb{Z})$ such that $K_{2}=W K_{1} W^{\mathrm{T}}$ and $\vec{t}_{2}=W t_{1}$. Here we have neglected the role of the spin vector, which must be considered for a full analysis of the equivalence classes (Wen, 1995).

### 14.4 Multi-component abelian fluids

A very similar effective theory can be developed for multi-component quantum Hall fluids. For simplicity we will consider a two-component system, which we can think of either as a fully polarized electron gas in a bilayer system or as a single-layer system in which the spin is not fully polarized by the magnetic field. The latter case occurs in many heterostructures at high electron density, in which the $g$-factor can be made very small. More complicated systems can be (and have been) considered. Here we will follow the hydrodynamic approach of the previous subsection. One can alternatively use a flux-attachment approach, see e.g. López and Fradkin (1995, 2001).

Wave functions with a Laughlin structure for these systems were proposed long ago by Halperin (1983, 1984). Let us label by $\left\{z_{i}\right\}$ and $\left\{w_{i}\right\}$ (with $i=1, \ldots, N / 2$ ) the complex coordinates of particles of type 1 (say, with spin up) and the complex coordinates of particles of type 2 (say, spin down), respectively. The total number of particles (which I will take to be fermions) is $N$, and the number of flux quanta is $N_{\phi}$. The total filling fraction is $v=N / N_{\phi}$ (as before), which can be written as the sum of the filling fractions of each layer, $v=v_{1}+v_{2}$. For simplicity we are considering the case in which we have the same number of particles for each type. In the spin interpretation (when possible) this state would be spin-unpolarized.

A simple generalization of the Laughlin state is provided by the Halperin wave functions, which have the following form:

$$
\begin{align*}
& \Psi_{m_{1}, m_{2}, n}\left(z_{1}, \ldots, z_{N / 2}, w_{1}, \ldots w_{N / 2}\right) \\
& =\prod_{i<j}\left(z_{i}-z_{j}\right)^{m_{1}} \prod_{i<j}\left(w_{i}-w_{j}\right)^{m_{2}} \prod_{i \leq j}\left(z_{i}-w_{j}\right)^{n} \\
& \quad \times \exp \left(-\frac{1}{4 \ell_{0}^{2}} \sum_{i=1}^{N / 2}\left(\left|z_{i}\right|^{2}+\left|w_{i}\right|^{2}\right)\right) \tag{14.62}
\end{align*}
$$

As in the case of a one-component fluid, we will require the wave function to be completely antisymmetric under exchange. This will require $m_{1}$ and $m_{2}$ to be odd integers and $n$ to be an integer (or zero). We will refer to these as the ( $m_{1}, m_{2}, n$ ) Halperin states.

In the hydrodynamic approach we will define two separate currents, one for each type of electron, $J_{\mu}^{I}$ (with $I=1,2$ ). In a bilayer system without inter-layer tunneling each current is separately conserved. Thus we will define two hydrodynamic gauge fields, $b_{\mu}^{I}(I=1,2)$, whose curls are the two currents:

$$
\begin{equation*}
j_{I}^{\mu}=\frac{1}{2 \pi} \epsilon^{\mu \nu \lambda} \partial_{\nu} b_{\lambda}^{I} \tag{14.63}
\end{equation*}
$$

Thus, in the bilayer systems the two hydrodynamic currents represent distinct degrees of freedom of the electron gas with the label $I=1,2$ indicating the layer (or spin projection) of the electrons. In contrast, in the hierarchical construction the label indicates the order in the hierarchy of a single-layer system of fully polarized electrons. The formal similarities of the effective theories should not obscure the physical differences between the two systems.

The Halperin wave functions also tell us that in addition to intra-Landau-level interactions in each layer (represented in the Halperin wave function by the odd integers $m_{1}$ and $m_{2}$ ), there are also inter-layer interactions, represented by the integer $n$. In our discussion of the fractional Hall effect in terms of flux attachments we saw that the exponents $m_{1}$ and $m_{2}$ mean that we have attached an even number $m_{1}-1$ of fluxes to the electrons in layer 1 and an even number $m_{2}-1$ of fluxes to the electrons in layer 2. The exponent $n$ is telling us that the electrons of the two layers repel each other (since $n>0$ ). It can also be interpreted as saying that the repulsion can be represented by the attachment of $n$ fluxes to an electron in layer 2 due to an electron in layer 1 and vice versa.

There is a natural candidate for the effective Lagrangian of this fractional quantum Hall state that also has the form of a $K$-matrix, namely

$$
\begin{equation*}
\mathcal{L}\left[b_{\mu}^{I}, A_{\mu}\right]=-\frac{1}{4 \pi} K_{I J} \epsilon_{\mu \nu \lambda} b_{I}^{\mu} \partial^{\nu} b_{J}^{\lambda}-\frac{e}{2 \pi} A_{\mu} t_{I} \epsilon_{\mu \nu \lambda} \partial^{\nu} b_{I}^{\lambda} \tag{14.64}
\end{equation*}
$$

where $K$ is a $2 \times 2$ symmetric matrix. We will show that the correct matrix is

$$
K=\left(\begin{array}{cc}
m_{1} & n  \tag{14.65}\\
n & m_{2}
\end{array}\right)
$$

The ground-state degeneracy on a torus for this state is $\left|m_{1} m_{2}-n^{2}\right|$.
The electrons in each layer (or spin projection) must couple in the same way to the external field $A_{\mu}$. Therefore the charge vector $\vec{t}$ must assign the same electric charge to the electrons in each layer. Hence, we must choose

$$
\begin{equation*}
\vec{t}=(1,1) \tag{14.66}
\end{equation*}
$$

If the $K$-matrix is non-singular, i.e. $m_{1} m_{2}-n^{2} \neq 0$, we can use, once again, Eq. (14.51) to read off the filling fraction and the quantum numbers of the excitations of this theory. We find that the two layers have the filling fractions

$$
\begin{equation*}
v_{1}=\frac{m_{2}-n}{m_{1} m_{2}-n^{2}}, \quad v_{2}=\frac{m_{1}-n}{m_{1} m_{2}-n^{2}} \tag{14.67}
\end{equation*}
$$

and hence that the total filling fraction $v$ is

$$
\begin{equation*}
v=\frac{m_{1}+m_{2}-2 n}{m_{1} m_{2}-n^{2}} \tag{14.68}
\end{equation*}
$$

As we see, a state with $m_{1} \neq m_{2}$ represents a system with unequal filling fractions in the two layers, with $\nu_{1}-v_{2}=\left(m-1-m_{2}\right) /\left(m_{1} m_{2}-n^{2}\right)$ being the charge imbalance. In the spin language, the electron gas has a net spin polarization.

In this system we have quasiparticles for each layer with currents $j_{\mu}^{\mathrm{qp} I}$ coupled to the hydrodynamic gauge fields $b_{\mu}^{I}$ by the quasiparticle charge vectors $\vec{\ell}=\left(\ell_{1}, \ell_{2}\right)$. We can determine the fractional electric charges and the statistical angles of the quasiparticles using Eqs. (14.53) and (14.54) for the charge vector $\vec{t}$ of Eq. (14.66). The charges and statistical angles of the excitations are

$$
\begin{align*}
& Q\left(\ell_{1}, \ell_{2}\right)=-e \frac{\left(m_{2}-n\right) \ell_{1}+\left(m_{1}-n\right) \ell_{2}}{m_{1} m_{2}-n^{2}}  \tag{14.69}\\
& \delta\left(\ell_{1}, \ell_{2}\right)=\pi \frac{m_{2} \ell_{1}^{2}+m_{1} \ell_{2}^{2}-2 n \ell_{1} \ell_{2}}{m_{1} m_{2}-n^{2}} \tag{14.70}
\end{align*}
$$

We will now discuss the special case of the ( $m, m, n$ ) symmetric Halperin states. These states have very simple quantum numbers. The filling fractions are ( $v_{1}=$ $v_{2}=v / 2$ )

$$
\begin{equation*}
v=\frac{2}{m+n} \tag{14.71}
\end{equation*}
$$

The fundamental quasiparticles (with smallest charge) are $(1,0)$ and $(0,1)$. Their charges and statistics are

$$
\begin{equation*}
Q= \pm \frac{e}{m+n}, \quad \delta=\pi \frac{m}{m^{2}-n^{2}} \tag{14.72}
\end{equation*}
$$

In the case of the symmetric states $(m, m, n)$ it is convenient to rotate to a new basis in which the fields decouple. This can be done by the orthogonal transformation to the fields, $b_{ \pm}^{\mu}$, given by

$$
\begin{equation*}
b_{ \pm}^{\mu}=\frac{1}{\sqrt{2}}\left(b_{1}^{\mu} \pm b_{2}^{\mu}\right) \tag{14.73}
\end{equation*}
$$

in terms of which the action becomes

$$
\begin{align*}
\mathcal{L}= & \frac{m+n}{4 \pi} \epsilon_{\mu \nu \lambda} b_{+}^{\mu} \partial^{\nu} b_{+}^{\lambda}-\sqrt{2} \frac{e}{2 \pi} \epsilon_{\mu \nu \lambda} A^{\mu} \partial^{\nu} b_{+}^{\lambda} \\
& +\frac{m-n}{4 \pi} \epsilon_{\mu \nu \lambda} b_{-}^{\mu} \partial^{\nu} b_{-}^{\lambda} \\
& +j_{\mu}^{\mathrm{qp}}\left[\frac{1}{\sqrt{2}}\left(\ell_{1}+\ell_{2}\right) b_{+}^{\mu}+\frac{1}{\sqrt{2}}\left(\ell_{1}-\ell_{2}\right) b_{-}^{\mu}\right] \tag{14.74}
\end{align*}
$$

In this basis, the effective Lagrangian decouples into a charge mode, $b_{+}^{\mu}$, and a neutral mode, $b_{-}^{\mu}$. Notice, however, that the quasiparticles carry both quantum numbers.

The most prominent states seen in balanced bilayer systems are the $(3,3,1)$ state with filling fraction $v=1 / 2$, the $(3,3,2)$ state with $v=2 / 5$, and the $(1,1,2)$ state with $v=2 / 3$. The $K$-matrices, charge vectors $\vec{t}$, and ground-state degeneracies (on a torus) for these Halperin states are

$$
\begin{array}{llll}
\text { (331): } & v=\frac{1}{2}, & K=\left(\begin{array}{ll}
3 & 1 \\
1 & 3
\end{array}\right), & \vec{t}=(1,1), \\
\text { (332): } & v=\frac{2}{5}, & K=\left(\begin{array}{ll}
3 & 2 \\
2 & 3
\end{array}\right), & \vec{t}=(1,1),  \tag{14.75}\\
\text { (112): } & v=\frac{2}{3}, & K=\left(\begin{array}{ll}
1 & 2 \\
2 & 1
\end{array}\right), & \vec{t}=(1,1),
\end{array}
$$

The $(3,3,1)$ state is a bilayer state with filling fraction $v=1 / 2$ that occurs when the inter-layer interaction is large enough. It is seen in experiments in wide quantum wells. The elementary quasihole has charge $e / 4$ and statistics $\delta=3 \pi / 5$. As a function of external electric fields (normal to the 2DEG) the system has a phase transition from two essentially decoupled 2DEGs in a compressible "Fermiliquid" state (at low bias), in which each 2DEG is in a Halperin-Lee-Read $v=$ $1 / 2$ compressible state weakly coupled to the other, to a $v=1 / 2$ incompressible fractional quantum Hall state, namely the (3, 3, 1) bilayer state (Eisenstein et al., 1992).

Similar spin transitions have been seen in experiments in single-layer highdensity 2DEGs at filling fraction $v=2 / 3$, namely from an incompressible fully polarized state to a spin-singlet state at the same filling fraction (Eisenstein et al., 1990), presumably a Halperin $(1,1,2)$ state. Similar phase transitions have been seen at $v=2 / 5$, between a fully polarized 2DEG Jain state and a (3, 3, 2) spin-singlet Halperin state (Cho et al., 1998).

What happens if the $K$-matrix is singular? Many of our general expressions are invalid in this case. We will discuss here the simple case of the balanced singular $(m, m, n)$ states. They become singular for $m^{2}-n^{2}=0$ or, which amounts to the same thing, for the $(m, m, m)$ states, with filling fractions $v=1 / m$. In the decoupled basis, the effective theory of the $(m, m, m)$ states has a charge mode with a Chern-Simons coupling $2 m$ and a seemingly absent neutral mode. Of course, in this case the terms which we neglected before (since they were subleading) yield the leading behavior and cannot be dropped. At any rate, the absence of a Chern-Simons term in the neutral mode is telling us that it describes a condensed superfluid state.

The behavior of states of this type has been studied in quite some detail, both theoretically and experimentally, in the simplest example, the $(1,1,1)$ state with filling fraction $v=1$. Hence, this is an integer quantum Hall state. However, in
spite of this, this state cannot be described in terms of free electrons in a magnetic field. It can be realized either as a bilayer system or as a single-layer ferromagnetic quantum Hall state with a weak Zeeman coupling. A unique feature of this $v=1$ "integer" quantum Hall state is that the addition (or subtraction) of an electron results not in an excitation in an excited Landau level (as in the case of a noninteracting system) but, instead, in the formation of a bound state of an electron with enough flux to generate a soliton state known as a skyrmion, as introduced in Chapter 7, a topologically non-trivial spatial texture of the spin of the electrons stabilized by the combined effects of the Zeeman energy and the Coulomb interaction (Sondhi et al., 1993). Skyrmions were detected in this $v=1$ fluid in NMR experiments (Barrett et al., 1995). On the other hand, the absence of a Chern-Simons term in the neutral mode was predicted to give rise to a Goldstone mode (Sondhi et al., 1993; Yang et al., 1994), which was observed as a sharp resonance in tunneling into the $v=1$ state (Spielman et al., 2000). Similar effects have been seen in fully polarized bilayer systems, also at $v=1$, where they are interpreted as evidence of a superfluid state and an exciton condensate (Eisenstein and MacDonald, 2004).

### 14.5 Superconductors as topological fluids

We will make a brief intermission in our analysis of quantum Hall states and examine the properties of a superconductor from a different perspective. We will consider for simplicity an s-wave superconductor. According to the Bardeen-Cooper-Schrieffer (BCS) theory, a superconductor is a ground state of a system of charged spin- $1 / 2$ fermions in which the spin-singlet pair-field operator $\Delta(\vec{x}, \vec{y})=$ $\epsilon_{\sigma \sigma^{\prime}} \psi_{\sigma}^{\dagger}(\vec{x}) \psi_{\sigma^{\prime}}^{\dagger}(\vec{y})$ has a non-vanishing expectation value in the superconducting ground state (Schrieffer, 1964). In the case of a spin-singlet superconductor, in momentum space the pair-field operator for spin-singlet Cooper pairs is $\Delta(\vec{k})=$ $\epsilon_{\sigma \sigma^{\prime}} \psi_{\sigma}^{\dagger}(\vec{k}) \psi_{\sigma^{\prime}}^{\dagger}(-\vec{k})$, where $\vec{k}$ lies on the Fermi surface of the metal whose quasiparticles have paired and condensed. Since the Hamiltonians of all interacting fermionic systems are gauge-invariant, they are also invariant under the global part of the gauge transformation, $\psi_{\sigma}(\vec{x}) \rightarrow e^{i \theta} \psi_{\sigma}(\vec{x})$. The pair-field operators transform under a global gauge transformation as $\Delta \rightarrow e^{i 2 \theta} \Delta$ and hence are not gauge-invariant.

The superconducting ground state is thus a state in which the global $\mathrm{U}(1)$ gauge symmetry is spontaneously broken. For this reason the expectation value of the pair field plays the role of the order parameter for the superconducting state, and it is the basic building block of the Landau-Ginzburg theory (de Gennes, 1966). We will see below that, strictly speaking, the concept of an order parameter is problematic in a superconductor.

The spectrum of the superconducting state has charge-neutral fermionic excitations (Kivelson and Rokhsar, 1990). In an s-wave superconductor, the expectation value of the Cooper-pair condensate is isotropic and hence it is the same for all directions $\vec{k}$. Its fermionic (Bogoliubov) quasiparticles have a finite and isotropic energy gap whose magnitude is the amplitude of the condensate $|\Delta|$. In the case of a fluid of neutral fermions, the phase of the pair-field condensate $\varphi$ is the Goldstone boson of the broken global $U(1)$ symmetry. On the other hand, if the fermions are charged, e.g. are electrons of charge $e$, which couple to the electromagnetic field, then in this case the transverse components (the photon) of the electromagnetic gauge field become massive, and static magnetic fields are expelled. This is the Meissner effect. For the same reasons, the phase field $\varphi$ effectively becomes the longitudinal component of the electromagnetic vector potential and also acquires a finite energy gap, which in a superconductor is the plasma frequency. Hence, in a superconducting state, which is a condensate of electric charges, electric fields are screened and magnetic fields are expelled.

In this (very brief!) description of the superconducting state the electromagnetic gauge field is used as a probe of the condensed state. However the quantum dynamics of the gauge field is ignored. In particular, the order-parameter field is constructed without taking the gauge fields into consideration. In Section 9.12 we discussed the definition of a Higgs phase in a theory that has dynamical matter and gauge fields. In that theory the superconductor pair field plays the role of the Higgs field. It was noted there, following the arguments of Fradkin and Shenker (1979), that it is not possible to construct a gauge-invariant operator that plays the role of the order-parameter field if the gauge group is compact. In that case its deconfined phase (when it exists) is characterized by the behavior of the Wilson and 't Hooft loop operators.

One may object that in the case of a superconductor the electromagnetic gauge field, even if it is considered as a quantum field, is non-compact and, hence, this objection should be moot. If we regard the pair field as a local field $\Delta(\vec{r}, t)$ that transforms under gauge transformations as a charge- $2 e$ field, we can construct a gauge-invariant order-parameter field by creating together with the Cooper pair its static Coulomb field (Dirac, 1955). Thus, the operator (here we are discussing the 2D case) which creates a coherent state of static photons (the Coulomb field) together with the Cooper pair

$$
\begin{equation*}
\mathcal{O}(\vec{x}, \vec{y})=\Delta(\vec{x}, \vec{y}) \exp \left(i e \int d^{2} z \vec{A}(\vec{z}) \cdot \vec{E}_{\mathrm{c}}(\vec{z})\right) \tag{14.76}
\end{equation*}
$$

is gauge-invariant if the classical field $\vec{E}_{\mathrm{c}}(\vec{z})$ satisfies the condition

$$
\begin{equation*}
\vec{\nabla} \cdot \vec{E}_{\mathrm{c}}(\vec{z})=e(\delta(\vec{z}-\vec{x})+\delta(\vec{z}-\vec{y})) \tag{14.77}
\end{equation*}
$$

The classical static field $\vec{E}_{\mathrm{c}}$ is the Coulomb field of the Cooper pair. On the other hand, we can also write $\vec{E}_{\mathrm{c}}(\vec{z})=-\vec{\nabla} U_{\mathrm{c}}(\vec{z})$, where $U(z)$ is the electrostatic potential.

Upon integration by parts, we find that, in the Coulomb gauge, $\vec{\nabla} \cdot \vec{A}=0$, the exponential operator becomes

$$
\begin{equation*}
\exp \left(-i e \int d^{2} z \vec{A}(\vec{z}) \cdot \vec{\nabla} U_{\mathrm{c}}(\vec{z})\right)=\exp \left(i e \int d^{2} z \vec{\nabla} \cdot \vec{A}(\vec{z}) U_{\mathrm{c}}(\vec{z})\right)=1 \tag{14.78}
\end{equation*}
$$

Therefore, in the Coulomb gauge the exponential operator is equivalent to the identity operator. However, it was shown by Kennedy and King (1985) that this non-local operator has a power-law dependence in time, which is inconsistent with the gauge field being massive. So, even in the case of the non-compact gauge theory, this operator cannot represent an order-parameter field. The reader may recognize here the construction that we used in Section 13.3.6 for the Girvin-MacDonald non-local order parameter for the FQHE.

Moreover, the argument that led to Eq. (14.78) holds only if the Coulomb-gauge condition can be consistently imposed. However, the Coulomb-gauge condition cannot be imposed if the gauge group is compact since, even in the case of an abelian theory, the Coulomb-gauge condition can only be imposed modulo $2 \pi$ due to the existence of monopole configurations. This fact was discussed in some detail in Section 9.12, where we showed, following a standard result from gauge theories (Fradkin and Shenker, 1979), that the concept of a spontaneously broken symmetry does not truly exist if the (compact) gauge fields are dynamical.

In an insightful and deep paper, Hansson, Oganesyan, and Sondhi (Hansson et al., 2004) found an additional and more important loophole in the construction. We will follow their analysis closely. In a fermionic superconductor the pair field, which plays the role of the scalar Higgs field, is a composite operator of fermions. Although the fermionic excitations of the superconductor are charge-neutral and as such do not couple directly to the gauge field, they have a non-local behavior with respect to the vortices of the superconductor. Indeed, the vortex of the superconductor carries magnetic flux $h c /(2 e)$. This flux quantization follows from the requirement that the pair field be local (i.e. single-valued). Hence the phase field of the pair field winds by $2 \pi$ on large contours about the core of the vortex. On the other hand, the fermionic quasiparticle is essentially half of the pair field and changes sign on a large contour that encircles the vortex core.

The origin of this phenomenon is the nature of the superconducting state as a pair condensate. Since it is a pair condensate, the Bogoliubov quasiparticles are not conserved since they can emerge from (or be absorbed by) the condensate. However, the parity of the fermion number is an exact quantum number even in the
superconducting state since the excitations can be created and destroyed in pairs. The fermionic Bogoliubov excitations carry zero electric charge (at low energies) and effectively they are Majorana fermions. Therefore the quasiparticle states are sensitive only to a local change in sign. From the point of view of the Bogoliubov quasiparticles, the vortices carry a $\mathbb{Z}_{2}$ charge or, equivalently, they carry a flux of $\pi$. This sign is all that is left of the Aharonov-Bohm phase factor for the fermionic quasiparticles of a superconductor. On the other hand, the $\mathbb{Z}_{2}$ nature of the excitation spectrum suggests that there should be a connection between a superconductor and the deconfined phase of a $\mathbb{Z}_{2}$ gauge theory.

Hansson and coworkers established that the superconductor- $\mathbb{Z}_{2}$ gauge-theory relation exists using the following line of argument. They first showed that a theory in which quasiparticles and vortices have a topological interaction is a topological BF field theory. We have already encountered the BF Lagrangian at the beginning of this chapter in our discussion of flux attachment on a torus in Section 14.1.1. In particular, see the discussion surrounding Eq. (14.7), which is relevant to the problem we are considering. Let us describe the histories of the quasiparticle excitation by a current $j_{\mu}^{\mathrm{qp}}$. Here we are making the simplifying assumption of ignoring the spin of the quasiparticles, which would require us to add extra currents if we took it into account. For the time being we will ignore the fact that this current is not truly conserved, since the quasiparticles can go in and out of the condensate in pairs, and assume that the quasiparticle current is locally conserved and obeys $\partial_{\mu} j_{\mathrm{qp}}^{\mu}=0$. We will come back and fix this problem later. We will further assume that the Bogoliubov quasiparticles have only short-range interactions, which is generally the case. We will see that, in spite of their being charge-neutral, there still is an interaction of topological origin between quasiparticles and vortices. A very transparent and detailed discussion of this problem can be found in the work of Nayak and coworkers (Nayak et al., 2001).

Likewise we will assume that the vortex excitations are light enough that they can be created (in pairs) by quantum-mechanical processes. Let the locally conserved current $j_{\mu}^{v}$ denote the vortex histories and also obey a continuity equation, $\partial^{\mu} j_{\mu}^{v}=0$. We will also make the assumption that the vortices have only short-range interactions. This assumption is correct in a 3D superconductor since it has a complete Meissner state. In 2D this assumption is somewhat problematic since the field lines can escape from the plane wherein the 2D superconductor lies. In practice this problem introduces some degree of non-locality into the interaction, which, as it turns out, is not a serious problem for the argument that we will use here. Thus we will assume that the magnetic interactions are also screened even in 2D (which rigorously should happen only in $(2+1)$-dimensional electrodynamics).

The non-local topological interaction between vortices and quasiparticles can be encoded in an effective Lagrangian in which the quasiparticle current $j_{\mu}^{\mathrm{qp}}$ and
the vortex current $j_{\mu}^{\mathrm{v}}$ couple to two separate gauge fields, $a^{\mu}$ and $b^{\mu}$, whose only coupling has the BF form,

$$
\begin{equation*}
\mathcal{L}_{\text {topo }}\left[a_{\mu}, b_{\mu}\right]=\frac{1}{\pi} \epsilon^{\mu \nu \lambda} a_{\mu} \partial_{\nu} b_{\lambda}-a^{\mu} j_{\mu}^{\mathrm{qp}}-j_{\mu}^{\mathrm{v}} b^{\mu} \tag{14.79}
\end{equation*}
$$

The quantization of electric charge and of the magnetic charge (the vorticity) now implies that the gauge groups for the fields $a_{\mu}$ and $b_{\mu}$ must be compact. Hence, gauge transformations are defined modulo an integer multiple of $2 \pi$, i.e. $a_{\mu} \rightarrow$ $a_{\mu}+\partial_{\mu} \Lambda$ with $\Lambda \equiv \Lambda+2 \pi$ at every point in space-time (and the same for $b_{\mu}$ ) (this argument can be made simpler by working on a Euclidean space-time lattice). However, the fact that the gauge fields $a_{\mu}$ and $b_{\mu}$ are compact implies that one cannot ignore the effects of monopoles in these fields, as in the case of Polyakov's compact electrodynamics (Polyakov, 1977) (see Section 9.11).

This effective Lagrangian has the same form as the theories for multi-component (and hierarchical) fractional quantum Hall fluids but with a $K$-matrix of the form

$$
K=\left(\begin{array}{ll}
0 & 2  \tag{14.80}\\
2 & 0
\end{array}\right)
$$

which is traceless and has determinant -4 . Using the results of Section 14.3, and the general arguments of Wen (1995), one readily finds that the quasiparticles and vortices have a mutual statistical angle $\delta=\pi$. This theory has an explicit selfduality that exchanges quasiparticles with vortices and for the same reason it is also time-reversal-invariant. On the other hand, this effective action describes a topological fluid that has degeneracy 4 on the torus. Thus, if the description of the superconductor could be reduced to Eq. (14.79), we would have shown that it is a topological fluid with these two types of topological excitations, quasiparticles and vortices, and a four-fold degeneracy on the torus.

A two-component Chern-Simons theory with a $K$-matrix with the structure shown in Eq. (14.80) is invariant under time-reversal transformations. This is so since a time reversal is equivalent to the exchange of the two species of gauge fields. This is most apparent on rotating the basis of fields in which the $K$-matrix is diagonal and traceless. Thus a "doubled" Chern-Simons gauge theory can describe time-reversal-invariant topological phases (Freedman et al., 2004).

The alert reader most likely would now notice that this is the same ground state degeneracy and the same mutual statistics as those we found in the deconfined (topological) phase of the $\mathbb{Z}_{2}$ gauge theory discussed in Section 9.9 (where the excitations were holons and visons). We will show below that the topological phase of the $\mathbb{Z}_{2}$ gauge theory is actually the correct effective theory since its excitations are also conserved modulo 2 .

However, there is a more important question we need to address. How do we know that this effective action, or the $\mathbb{Z}_{2}$ gauge theory for this matter, actually has anything to do with a superconductor? It certainly looks very different from the Landau-Ginzburg theory. Hansson et al. offered an impressionistic (but physically correct) derivation of the BF theory. They start with the abelian Higgs model, which is a relativistic field theory of a charged scalar field $\phi$ coupled to the electromagnetic gauge field $A_{\mu}$ whose Lagrangian (in Euclidean (2+1)-continuum space-time dimensions) is

$$
\begin{equation*}
\mathcal{L}=\left(D_{\mu} \phi\right)^{*} D^{\mu} \phi+\frac{1}{4} F_{\mu \nu}^{2}+V\left(\phi^{*} \phi\right)-e A_{\mu} j_{\mathrm{qp}}^{\mu} \tag{14.81}
\end{equation*}
$$

where

$$
\begin{equation*}
D_{\mu}=\partial_{\mu}+i \frac{2 e}{\hbar c} A_{\mu} \tag{14.82}
\end{equation*}
$$

is the covariant derivative for a charge- $2 e$ complex scalar field. In Eq. (14.81) we have added a set of (fermionic) quasiparticle currents $j_{\text {qp }}^{\mu}$ to describe the slow (adiabatic) dynamics of the gapped Bogoliubov quasiparticles. These are absent from the standard abelian Higgs model. Notice that in this Lagrangian they carry charge $-e$, half of the charge of the charged scalar field $\phi$. We will see shortly that, although the charge of the quasiparticle will be completely screened (giving a neutral quasiparticle), there will be a remnant of its magnetic (Aharonov-Bohm) interaction with the vortices of the superconductor.

The potential $V\left(\phi^{*} \phi\right)$ is taken to represent the classical broken-symmetry state: a "Mexican-hat" potential with a deep minimum at $\phi=\sqrt{\rho_{\mathrm{s}}} e^{i \varphi}$, where $\rho_{\mathrm{s}}$ is the superfluid density of the superconductor and, hence, proportional to the magnitude of the superconducting gap, $\rho_{\mathrm{s}} \propto|\Delta|$. We will assume that we are sufficiently deep in the superconducting state that the amplitude of the order parameter or, equivalently, the superfluid density $\rho_{\mathrm{s}}$, can be taken to be essentially uniform in space and time. This theory is, qualitatively, a quantum version of the LandauGinzburg theory of a superconductor.

In this picture the vortices (in $(2+1)$ dimensions) are point-like singularities of the order-parameter field that evolve in time along a set of worldlines. Thus, we will split the phase of the order parameter $\varphi$ into a smooth part, which we will denote by $\eta$, and a singular piece $\chi$ that satisfies

$$
\begin{equation*}
\oint_{\Gamma} d x_{\mu} \partial^{\mu} \chi=(\Delta \chi)_{\Gamma}=2 \pi N_{\mathrm{v}}[\Sigma] \tag{14.83}
\end{equation*}
$$

where $\Gamma$ is a closed contour and $N_{\mathrm{v}}[\Sigma]$ is the number of vortex lines (with their signs) piercing a surface $\Sigma$ whose boundary is $\Gamma=\partial \Sigma$. It will be convenient to define a gauge field $a_{\mu} \equiv \frac{1}{2} \partial_{\mu} \chi$ such that its circulation on the same contour $\Gamma$ is $\pi N_{\mathrm{v}}$. Since the phase field has singularities on the worldlines of the vortices,
the amplitude of the charged scalar field must vanish along these lines. To make the arguments simpler, we will assume that we are dealing with a superconductor with a short enough coherence length $\xi$ that the vanishing of the amplitude of the charged scalar field occurs on very short length scales, as in the case of a strong type II superconductor. It will also be convenient to define a set of vortex currents $j_{\mu}^{\mathrm{V}}$,

$$
\begin{equation*}
j_{\mu}^{\mathrm{v}}=\frac{1}{\pi} \epsilon_{\mu \nu \lambda} \partial^{\nu} a^{\lambda} \tag{14.84}
\end{equation*}
$$

such that the flux of the vortex currents through the surface $\Sigma$ is the vorticity $N_{\mathrm{v}}[\sigma]$ going through that surface,

$$
\begin{equation*}
\int_{\Sigma} d S_{\mu} j_{\mathrm{v}}^{\mu}=N_{\mathrm{v}}[\Sigma] \tag{14.85}
\end{equation*}
$$

On the other hand, the smooth part of the phase field $\eta$ (the "Goldstone boson") can be "eaten" by the electromagnetic gauge field $A_{\mu}$ or, which amounts to the same thing, we can fix the London (or unitary) gauge $\eta=0$. Within these assumptions the Lagrangian now becomes

$$
\begin{equation*}
\mathcal{L}_{\mathrm{eff}}=\frac{1}{4} F_{\mu \nu}^{2}+\frac{m_{\mathrm{s}}^{2}}{2}\left(A_{\mu}-\frac{1}{e} a_{\mu}\right)^{2}-e A_{\mu} j^{\mu}+\cdots \tag{14.86}
\end{equation*}
$$

where $m_{\mathrm{s}}=\lambda_{\mathrm{L}}^{-1}=\rho_{\mathrm{s}}(2 e /(\hbar c))^{2}$ and $\lambda_{\mathrm{L}}$ is the London penetration depth.
We can now resort to the same trick as that we used in Section 14.1.1 and rewrite the partition function in the background of the quasiparticle and vortex currents as

$$
\begin{align*}
Z\left[j_{\mu}^{\mathrm{qp}}, j_{\mu}^{\mathrm{v}}\right] & =\int \mathcal{D} A_{\mu} \mathcal{D} a_{\mu} \delta\left(j_{\mu}^{\mathrm{v}}-\frac{1}{\pi} a_{\mu}\right) \exp \left(-\int d^{3} x \mathcal{L}_{\mathrm{eff}}\left[A_{\mu}, a_{\mu}, b_{\mu}\right]\right) \\
& =\int \mathcal{D} a_{\mu} \mathcal{D} b_{\mu} \exp \left(-\int d^{3} x \mathcal{L}_{\mathrm{eff}}\left[a_{\mu}, b_{\mu}\right]\right) \tag{14.87}
\end{align*}
$$

where in the last line we introduced a representation of the delta function through a Lagrange-multiplier vector field $b_{\mu}$ and subsequently integrated out the fluctuations of the electromagnetic gauge field $A_{\mu}$. The effective action prior to integrating out the electromagnetic field in Minkowski space-time is

$$
\begin{align*}
\mathcal{L}_{\mathrm{eff}}\left[A_{\mu}, a_{\mu}, b_{\mu}\right]= & -\frac{1}{4} F_{\mu \nu}^{2}-\frac{m_{\mathrm{s}}^{2}}{2}\left(A_{\mu}-\frac{1}{e} a_{\mu}\right)^{2}+e A_{\mu} j_{\mathrm{qp}}^{\mu}+b_{\mu} j_{\mathrm{v}}^{\mu} \\
& +\frac{1}{\pi} \epsilon_{\mu \nu \lambda} a^{\mu} \partial^{\nu} b^{\lambda} \tag{14.88}
\end{align*}
$$

Upon integrating out the massive electromagnetic gauge field $A_{\mu}$ and keeping only terms with the lowest order in derivatives we find that the effective action

$$
\begin{equation*}
\mathcal{L}\left[a_{\mu}, b_{\mu}\right]=\mathcal{L}_{\text {topo }}\left[a_{\mu}, b_{\mu}\right]+\cdots \tag{14.89}
\end{equation*}
$$

is precisely the topological BF effective action of Eq. (14.79).

To show that it is a superconductor, we will need to show that all local excitations are massive and in particular that in this theory the photon is massive. Within this local theory this is indeed the case, as one readily finds by setting the quasiparticle and vortex currents to zero and then integrating out the auxiliary field $b_{\mu}$, resulting in the effective action (to second order in derivatives)

$$
\begin{equation*}
\mathcal{L}_{\mathrm{eff}}\left[a_{\mu}\right]=-\frac{1}{4 e^{2}}\left(\partial_{\mu} a_{\nu}-\partial_{\nu} a_{\mu}\right)^{2}-\frac{m_{\mathrm{s}}^{2}}{2 e^{2}} a_{\mu} a^{\mu} \tag{14.90}
\end{equation*}
$$

(again in the London unitary gauge). It is straightforward to derive the London equation of a superconductor from this effective action.

Therefore we have shown that the low-energy effective action of a superconductor with a quantum-mechanical electromagnetic gauge field is indeed a topological field theory! As we noted above, this theory has a four-fold degeneracy on the torus. Here "fractionalization" is realized into terms of the fundamental particles that entered into the pairing instability. This seems to complete our argument.

However, we are not quite yet done, since we still have a debt to pay. It remains to remove the unnecessary assumption that the quasiparticle currents are locally conserved. To remove this assumption, we have to recall that quasiparticles can go in and out of the condensate in pairs. Thus, our partition function must contain instanton processes (in Euclidean space-time) that describe pairs of quasiparticles being removed at some locations in space-time and, likewise, pairs of quasiparticles that are created at some locations in space-time. These processes are monopole configurations in the gauge field $b_{\mu}$. However, these instanton processes do not affect the topological sector of the theory.

Finally, there remains one question to answer: is there an order parameter? The answer to this question depends on whether the electromagnetic gauge field itself is compact and, hence, whether Dirac (or Polyakov) magnetic monopoles play a role. If they do, this problem is mapped exactly into the theory discussed in Sections 9.6 and 9.12, following the results of Fradkin and Shenker (1979). If this were literally the case, the deconfined phase would be strictly topological and no trace of superconductivity would be found. This is so, since vorticity in that $\mathbb{Z}_{2}$ case is also defined modulo 2. On the other hand, as far as we know, the electrodynamics sector of the Standard Model does not appear to have monopoles (or they are so heavy that they do not play a role in experiments). Thus, in this more realistic scenario, although a superconductor is actually a topological state, it still exhibits all the features that define superconductivity.

### 14.6 Non-abelian quantum Hall states

The quantum Hall states we have discussed in this section have excitations with fractional statistics. Thus, the amplitude for a clockwise adiabatic exchange of two
quasiparticles 1 and 2 (a braiding operation of the quasiparticle worldlines; see Fig. 13.2) acquires a phase factor $W(1,2) \rightarrow \exp (i \delta) W(2,1)$. We assigned the statistical phase $\delta$ as a quantum number that characterizes the excitations of the state. A state with several excitations will undergo many such processes under time evolution, and each process will yield an additional phase factor.

In Section 10.8 we discussed briefly the fact that we can regard the sequence of exchange processes as a sequence of concatenated braiding processes during which the linking number of the worldlines of the quasiparticles changes. The successive action of two braiding processes defines a product operation that is closed in the space of braids, i.e. the two successive adiabatic clockwise exchanges yield another braid. Obviously, we can also regard a clockwise exchange as the inverse operation. Thus adiabatic exchanges define a group of transformations known as the braid group. The excitations with anyon or fractional statistics characterized by a single phase $\delta$ are one-dimensional representations of the braid group.

However, as we also noted in Section 10.8, the braid group also has multidimensional representations in which a braid is characterized by a matrix of phase factors instead of a single number. In this section we will discuss a set of quantum Hall states whose excitations transform under a braiding process precisely in this fashion. For this reason these quantum Hall states are said to be non-abelian.

Chern-Simons gauge theories with non-abelian gauge groups have non-abelian representations of the braid group (if the level $k$ of the Chern-Simons theory is greater than $k=1$ ). Thus it is natural to suspect that there is a relation between non-abelian Chern-Simons gauge theory and non-abelian quantum Hall states. We will see that this is the case. On the other hand, Chern-Simons gauge theory (in $(2+1)$ dimensions) has a close connection with chiral conformal field theory in two dimensions (Witten, 1989, 1992). We will see in this section (and in Chapter 15) that there is also a close connection between fractional quantum Hall states and chiral conformal field theory (CFT). This connection will come in two forms, (a) through the universal structure of the ground-state wave functions and (b) through the excitation spectrum of their edge states.

### 14.6.1 Conformal field theory and quantum Hall wave functions

We will begin by rewriting the Laughlin (and Halperin) wave functions in a manner that makes the connection with chiral CFT self-evident. The Jastrow prefactor of the Laughlin wave function

$$
\begin{equation*}
\Psi_{m}\left(z_{1}, \ldots, z_{N}\right)=\prod_{i<j}\left(z_{i}-z_{j}\right)^{m} \exp \left(-\sum_{i=1}^{N} \frac{\left|z_{i}\right|^{2}}{4 \ell_{0}^{2}}\right) \tag{14.91}
\end{equation*}
$$

has a structure reminiscent of the Coulomb-gas expressions discussed in Section 4.6 except for the important fact that the exponent is positive. Thus, the Jastrow factor vanishes at short distances and diverges at long distances, whereas the Coulomb-gas expressions behave in the opposite fashion. In addition the Jastrow factor is a holomorphic function of the complex coordinates $z_{1}, \ldots, z_{N}$, while the Coulomb-gas expressions are a product of holomorphic and anti-holomorphic factors.

The Laughlin wave functions have the peculiar property (for wave functions) of being universal, i.e. independent of the details of the Hamiltonian of the interacting electron gas. The only dimension-full parameter they contain is the magnetic length, which enters only in the Gaussian integrating factor. While these "ideal" wave functions are the exact ground states of a class of local interacting Hamiltonians, they are an outstanding ansatz for a large class of Hamiltonians (including the physically relevant case of the Coulomb interaction). The exact ground-state wave functions for specific Hamiltonians exhibit the same asymptotic behaviors as those of the Laughlin states: they (a) have the same behavior as two electron coordinates approach each other (they have zeros of the same order) and (b) also have the same asymptotic power-law behavior at long distances. Thus, each Laughlin wave function is the universal representative of a phase of the 2DEG, a stable fixed point that has a large basin of attraction. The exact wave functions for generic Hamiltonians in the same phase differ from the Laughlin states by complicated functional dependences that do not affect these universal behaviors. In the language of the renormalization group they differ from the Laughlin states by the action of irrelevant operators.

The universal structure of the Laughlin wave functions naturally motivates the use of a description of these states in the language of a 2D CFT. This approach, which was pioneered by Moore and Read (1991), constitutes an extremely powerful tool to generalize and classify these topological states. Moore and Read showed that it is possible to rewrite the full Laughlin wave function (including the integrating exponential factor) in the following Coulomb-gas expression:

$$
\begin{equation*}
\Psi_{m}\left(z_{1}, \ldots, z_{N}\right)=\left\langle\left(\prod_{i=1}^{N} e^{i \sqrt{m} \varphi\left(z_{i}\right)}\right) \exp \left(-\int d^{2} z^{\prime} \sqrt{m} \rho_{0} \varphi\left(z^{\prime}\right)\right)\right\rangle \tag{14.92}
\end{equation*}
$$

where $\varphi(z)$ is a chiral boson in two Euclidean dimensions whose correlation function is (cf. Eq. (4.70))

$$
\begin{equation*}
\left\langle\varphi(z) \varphi\left(z^{\prime}\right)\right\rangle=-\ln \left(z-z^{\prime}\right) \tag{14.93}
\end{equation*}
$$

A straightforward inspection of the results discussed in Section 4.6 in the context of the Kosterlitz-Thouless theory tells us that this is the propagator of the
holomorphic half of a boson CFT with stiffness $K=1 /(4 \pi)$. In Coulomb-gas language the Jastrow factor of Eq. (14.92) represents a set of positive charges, each of strength $\sqrt{m}$, and the exponential factor represents a uniform background neutralizing charge with areal density $\rho_{0}=1 /(2 \pi m)$ (measured in units in which the magnetic length is $\ell_{0}=1$ ).

Similarly, in this representation the wave function of a state with a quasihole with complex coordinate $w$ is

$$
\begin{align*}
& \Psi_{m}^{+}\left(w, z_{1}, \ldots, z_{N} ; m\right) \\
& \quad=\left\langle\exp \left(\frac{i}{\sqrt{m}} \varphi(w)\right)\left(\prod_{i=1}^{N} e^{i \sqrt{m} \varphi\left(z_{i}\right)}\right) \exp \left(-\int d^{2} z^{\prime} \sqrt{m} \rho_{0} \varphi\left(z^{\prime}\right)\right)\right\rangle \\
& \quad=\prod_{i=1}^{N}\left(z_{i}-w\right) \prod_{i<j}\left(z_{i}-z_{j}\right)^{m} \exp \left(-\frac{1}{4} \sum_{i=1}^{N}\left|z_{i}\right|^{2}-\frac{1}{4 m}|w|^{2}\right) \tag{14.94}
\end{align*}
$$

Thus we conclude that the construction of wave functions of Laughlin states $\Psi_{m}$ is equivalent to the computation of expectation values of a conformal field theory for a free chiral boson $\varphi(z)$. In this construction the action of removing an electron (a hole of positive charge $e$ ) at a complex coordinate $z$ is represented by a chiral vertex operator $V_{\mathrm{e}}(z)$,

$$
\begin{equation*}
V_{\mathrm{e}}(z)=e^{i \sqrt{m} \varphi(z)} \tag{14.95}
\end{equation*}
$$

which we will call the electron operator. Similarly, we can identify the operator which, when acting on a Laughlin state $\Psi_{m}$, creates a quasihole at complex coordinate $w$ with the vertex $V_{1}(w)$ operator of the CFT of a chiral free boson,

$$
\begin{equation*}
V_{1}(w)=\exp \left(\frac{i}{\sqrt{m}} \varphi(w)\right) \tag{14.96}
\end{equation*}
$$

The Halperin wave function for two quasiholes of a Laughlin state, which was presented in Eq. (13.36), can also be represented as a correlator in this chiral CFT involving now the insertion of an additional vertex operator $V_{1}(u)$. This wave function has the same structure in its dependence on the electron coordinates as the Laughlin wave function $\Psi_{m}$; it has a non-local branch cut dependence on the relative coordinates of the quasiholes, $(u-w)^{1 / m}$. Thus, the transport of a quasihole around any of the electron coordinates is trivial. Instead, transporting a quasihole around the other quasihole senses the branch cut. Mathematically this is called a non-trivial monodromy. As we saw, this is a manifestation of fractional statistics.

In other terms, the quasihole operators are not local with respect to each other, but are local with respect to the electron operators. Furthermore, two quasihole operators at coordinates $u$ and $w$ closer to each other than to the other coordinates behave in the same way as the two quasiholes fused together into a quasihole of
twice the charge with vertex operator $V_{2}$. This process has exactly the same structure as the operator-product expansion (OPE) in a CFT (see Sections 4.3 and 7.11). We can continue this fusion process to produce quasiholes of charge $p / m$ (obtained from fusing $p$ fundamental quasiholes).

However, this process cannot be continued indefinitely, since if we fuse $m$ fundamental quasiholes we obtain an electron, or rather a hole, since we are removing an electron from the fluid. Hence, $m$ quasiparticles fuse into the condensate and have essentially the same effect as acting with the identity operator. Only the fusion of quasiholes modulo an electron leads to physically distinct excitations. In the language of an OPE we write

$$
\begin{equation*}
\lim _{w \rightarrow u} V_{p}(u) V_{q}(w) \simeq V_{[p+q]_{m}}(u) \tag{14.97}
\end{equation*}
$$

where $[p]_{m}$ is the integer $p$ modulo a multiple of $m$, i.e. if $p=m r+s$ then $[p]_{m}=s$ (with $r \geq 0$ and $0 \leq s<m$ ). This means that the vertex operators which create physically distinct excitations must be truncated to this set.

In other words, there is a correspondence between the spectrum of allowed excitations of quasiholes in a Laughlin state and the spectrum of primary fields of the chiral boson CFT. This correspondence includes the wave function itself, which is written as a correlator in a chiral rational conformal field theory (RCFT). More precisely, the wave function is the holomorphic half of a correlator of the RCFT. These quantities are known as conformal blocks of the RCFT since the correlators are built from them (see Moore and Seiberg (1989)). The truncation of the spectrum of primary fields (the allowed vertex operators) is equivalent to the statement that the chiral boson is compactified with a compactification radius $R=1 / \sqrt{m}$ determined by the invariance of the electron operator under shifts $\varphi \rightarrow \varphi+2 \pi / \sqrt{m}$. This makes this CFT an RCFT (Ginsparg, 1989; Di Francesco et al., 1997). On the other hand, this construction has the additional feature that all the allowed primary fields are local with respect to the electron operator. In the language of Moore and Read (1991), the electron operator plays the role of a "current" that generates an extended symmetry algebra (of the primary fields). We encountered a similar construction in our discussion of Luttinger liquids in Chapter 6 and of the quantum critical points of 2D quantum dimer models in Chapter 9 (although we were not as explicit as we are here). In Chapter 15 we will see that there is a closely related structure of the edge states of the quantum Hall states. We will use the same principles in the rest of this section to construct generalized quantum Hall states.

This structure is also present in a Chern-Simons gauge theory. Consider a Chern-Simons gauge theory with a $\mathrm{U}(1)$ gauge group

$$
\begin{equation*}
\mathcal{L}\left[a_{\mu}\right]=\frac{m}{4 \pi} \epsilon_{\mu \nu \lambda} a^{\mu} \partial^{\nu} a^{\lambda} \tag{14.98}
\end{equation*}
$$

which we will refer to as a $\mathrm{U}(1)$ level- $m$ Chern-Simons theory and denote by $\mathrm{U}(1)_{m}$. The observables of this theory are Wilson loop operators that carry $p$ units of charge,

$$
\begin{equation*}
W_{\Gamma}^{p}=\exp \left(i p \oint_{\Gamma} d x_{\mu} a^{\mu}\right) \tag{14.99}
\end{equation*}
$$

We have already shown that the Wilson loops represent heavy particles carrying fractional statistics with a statistical angle $\delta_{p}=\pi p^{2} / m$. Thus, in this simple abelian system, fusing $p=m$ particles together is equivalent to an electron (since $\left.\delta_{m}=\pi\right)$. Here too we can define an extended symmetry algebra by defining as being physically distinct the Wilson loop operators modulo the level $m$ of the Chern-Simons theory. Hence, there are only $m$ physically distinct states (including the identity) allowed in this theory. As we saw, this structure is natural when defining the theory on a torus with each physically distinct Wilson loop on a noncontractible path of the torus, labeling each of the $m$ distinct topological sectors of the Hilbert space.

### 14.6.2 Conformal blocks

Armed with the principles we presented above, we can construct many potentially interesting quantum Hall states. The strategy is to find an RCFT that may be of physical relevance and construct the wave functions by application of these principles. In fact, what we did in the preceding subsection can easily be applied to the wave functions of the Halperin states of multi-component systems, for instance to the spin-singlet Halperin states (Balatsky and Fradkin, 1991). It has also been used to suggest wave functions for the hierarchical states (Blok and Wen, 1990; Moore and Read, 1991). The RCFT approach has been a particularly powerful tool to uncover the existence of a class of non-abelian quantum Hall phases with unexpected and extremely interesting properties.

Before we introduce the non-abelian fractional quantum Hall states, let us discuss what is meant by non-abelian fractional (or braiding) statistics. Let us consider an abstract system in two dimensions. An $N$-particle state will be denoted by $\psi_{p ; i_{1}, \ldots, i_{N}}\left(z_{1}, \ldots, z_{N}\right)$ with complex coordinates $z_{1}, \ldots, z_{N}$, where $i_{1}, \ldots, i_{N}$ denote the possible quantum numbers of the particles. The integer $p$ labels the basis in a multi-dimensional vector space of states and it is not related to the quantum numbers of the individual particles (which, as usual, are associated with the states of local observables). Let us consider an exchange process of two of the particles, with labels $k$ and $l$, understood as a quasi-static braiding process under which the particles exchange places. Since these states are assumed to be a basis, the general result of any unitary operation, including braiding processes, must in
general be equivalent to a linear combination of the basis states. Therefore (Moore and Read, 1991)

$$
\begin{align*}
& \psi_{p ; i_{1}, \ldots, i_{s}, \ldots, i_{r}, \ldots, i_{N}}\left(z_{1}, \ldots, z_{s}, \ldots, z_{r}, \ldots, z_{N}\right) \\
& \quad=\sum_{q} B_{p q}\left[i_{1}, \ldots, i_{N}\right] \psi_{q ; i_{1}, \ldots, i_{r}, \ldots, i_{s}, \ldots, i_{N}}\left(z_{1}, \ldots, z_{r}, \ldots, z_{s}, \ldots, z_{N}\right) \tag{14.100}
\end{align*}
$$

where $q$ labels the states in the basis. The two-particle exchange process is then represented by the matrix $B_{p q}$. In other terms, the Hilbert spaces spanned by these basis states are multi-dimensional representations of the braid group. Since these matrices in general do not commute, it is said that the particles ("non-abelions") have non-abelian fractional statistics.

It turns out that the conformal blocks that appear in the correlators in CFTs are analytic functions of the coordinates of the operators and satisfy monodromy properties that are consistent with the transformation law of Eq. (14.100). If the coordinates of the operators are regarded as the coordinates of quantum-mechanical particles on the complex plane, the conformal blocks can be interpreted as the wave functions for anyon-type objects that are multi-dimensional representations of the braid group (Moore and Read, 1991). The rules that we will import from conformal field theory can be used to define in a precise way the laws that govern the behavior of non-abelian anyons as quantum objects in two dimensions (Kitaev, 2003; Preskill, 2004). The mathematical term is a modular tensor category (or modular functor) (Moore and Seiberg, 1989; Freedman, 2003).

Although a full discussion of conformal blocks is beyond the scope of this book (see e.g. Di Francesco et al. (1997)) we will summarize some of their important properties that will be useful for us. Let $\left\{\phi_{j}\right\}$ be the set of primary fields of some CFT. We will assume that this set is finite and that it is an RCFT. As we have seen, in an RCFT the primary fields satisfy a closed operator algebra known as the operator-product expansion (OPE). In an OPE two primary fields, say $\phi_{i}$ and $\phi_{j}$, can be fused together into several possible other operators. The result is a sum over all the possible primaries $\phi_{k}$ with singular coefficients. The label $k$ in this sum runs over all possible primary fields, including the identity, with coefficients $C_{i j k}$. Now, in the fusion of the primary fields $\phi_{i}$ and $\phi_{j}$, the operator $\phi_{k}$ will appear a number of times, which we will denote by the integers $N_{i j}^{k}$. This fact is expressed with the notation

$$
\begin{equation*}
\phi_{i} \star \phi_{j}=\sum_{k} N_{i j}^{k} \phi_{k} \tag{14.101}
\end{equation*}
$$

For instance, in the case of the compactified boson which we discussed above $N_{i j}^{k}=\delta_{k, i+j}$ since only operators with the correct charges will mix. We will see
below that non-abelian fractional statistics arises if the integers $N_{i j}^{k}$ do not vanish for two or more fields.

Since the order of fusion is immaterial, the fusion algebra is commutative,

$$
\begin{equation*}
N_{i j}^{k}=N_{j i}^{k} \tag{14.102}
\end{equation*}
$$

This algebra is also associative,

$$
\begin{equation*}
\left(\phi_{i} \star \phi_{j}\right) \star \phi_{k}=\phi_{i} \star\left(\phi_{j} \star \phi_{k}\right) \tag{14.103}
\end{equation*}
$$

since the order of successive fusions does not matter. This means that the integers $N_{i j}^{k}$ satisfy

$$
\begin{equation*}
\sum_{l} N_{i l}^{m} N_{j k}^{l}=\sum_{n} N_{i j}^{n} N_{n k}^{m} \tag{14.104}
\end{equation*}
$$

The integers $N_{i j}^{k}$ can be regarded as matrix elements in an associative and commutative algebra of matrices known as the Verlinde algebra (Verlinde, 1988).

The requirement of conformal invariance imposes stringent conditions on the analytic structure of the correlation functions. For example the two-point function of the primary field $\phi_{i}$ factorizes into a product of a holomorphic factor and an anti-holomorphic factor (see Section 7.11, Eq. (7.173)),

$$
\begin{equation*}
\left\langle\phi_{i}(z, \bar{z}) \phi_{i}(0,0)\right\rangle=\frac{1}{z^{2 h_{i}} \bar{z}^{2} \bar{h}_{i}} \tag{14.105}
\end{equation*}
$$

where $h_{i}$ and $\bar{h}_{i}$ are the conformal dimensions (where $\Delta_{i}=h_{i}+\bar{h}_{i}$ is the scaling dimension and $s_{i}=h_{i}-\bar{h}_{i}$ is the conformal spin). A factorized analytic structure that can be expressed as a sum of the form

$$
\begin{equation*}
\left\langle\prod_{s=1}^{N} \phi_{i}\left(z_{i_{s}}, \bar{z}_{i_{s}}\right)\right\rangle=\sum_{p}\left|\mathcal{F}_{p ;\left\{i_{j}\right\}}\left(z_{1}, \ldots, z_{N}\right)\right|^{2} \tag{14.106}
\end{equation*}
$$

also applies for more general correlators of primary fields. This expression states that the general correlator of primaries is a sum of terms, each of which can be written as a product of holomorphic and anti-holomorphic functions $\mathcal{F}_{p ;\left\{i_{j}\right\}}\left(z_{1}, \ldots, z_{N}\right)$ known as conformal blocks. The structure of the conformal blocks depends on the number and type of primary fields present in the correlator. For a given set of coordinates $z_{1}, \ldots, z_{N}$ (and labels $i_{1}, \ldots, i_{N}$ ) the conformal blocks are linearly independent holomorphic functions that span a basis of the vector space whose dimension depends on the number of fusion channels of the primary fields $\phi_{i}$ (and hence on the integers $N_{i j}^{k}$ ) (Belavin et al., 1984; Friedan and Shenker, 1987).

If the primary fields $\phi_{i}$ and $\phi_{j}$ have more than one fusion channel (i.e. $N_{i j}^{k} \neq 0$ for more than one $k$ for $i$ and $j$ fixed), the number of conformal blocks in

Eq. (14.106) is $p>1$. The conformal blocks are analytic functions of the coordinates that have isolated singularities. These singularities are such that, as one displaces a coordinate $z_{i}$ along a closed smooth curve on the complex plane which encloses another coordinate $z_{j}$, the conformal blocks transform into linear combinations of each other. This transformation, called a monodromy, is equivalent to two successive braids. In this way non-abelian statistics enters into the structure of the correlators.

In CFT each primary field $\phi_{i}$ labels a space of states generated by a tower of irrelevant operators (its descendants). Let us consider a 2D space with the topology of a torus, defined as a parallelogram of vertices $0,1, \tau$, and $1+\tau$, where the complex number $\tau=i L_{2} / L_{1}$ is the modular parameter of the torus. Let $\vec{a}$ and $\vec{b}$ be the two cycles of the torus and we will pick $\vec{b}$ to denote the direction of time evolution. The partition function restricted to this space of states is the character $\chi_{i}$ of the representation labeled by $\phi_{i}$,

$$
\begin{equation*}
\chi_{i} \equiv \operatorname{tr}_{\left[\phi_{i}\right]} q^{H-c / 24}, \quad q=e^{2 \pi i \tau} \tag{14.107}
\end{equation*}
$$

where $H$ is the Hamiltonian for the right-moving states and $c$ is the central charge. The character $\chi_{i}$ is related to the short-distance behavior of the conformal block $\mathcal{F}_{j}^{i i^{*}}(z-w)\left(\phi_{i}\right.$ and $\phi_{i^{*}}$ are conjugate fields) by (Di Francesco et al., 1997)

$$
\begin{equation*}
\chi_{i}=\lim _{z \rightarrow w}(z-w)^{2 h_{j}} \mathcal{F}_{i}^{j j^{*}}(z-w) \tag{14.108}
\end{equation*}
$$

where $h_{i}$ is the conformal dimension of the primary field $\phi_{i}$.
We can define the modular transformations $T$ and $S$ of the torus:

$$
\begin{equation*}
T: \tau \rightarrow \tau+1, \quad S: \tau \rightarrow-\frac{1}{\tau} \tag{14.109}
\end{equation*}
$$

Verlinde showed that under these transformations the characters $\chi_{i}$ obey the transformation laws

$$
\begin{equation*}
T: \chi_{i} \rightarrow \exp \left[2 \pi i\left(h_{i}-\frac{c}{24}\right)\right] \chi_{i}, \quad S: \chi_{i} \rightarrow \sum_{j} \mathcal{S}_{i}^{j} \chi_{j} \tag{14.110}
\end{equation*}
$$

where the unitary matrix $\mathcal{S}_{i}^{j}$ is called the modular $\mathcal{S}$-matrix. Thus, the conformal blocks also transform under an $S$ modular transformation by the action of the modular $\mathcal{S}$-matrix.

Following Verlinde, we now define the action of inserting a primary field $\phi_{i}$ into the partition function $Z=\chi_{0}$ of the system and moving it along the full closed cycle $\vec{b}$. He showed that the result was

$$
\begin{equation*}
\phi_{i}(\vec{b}) \chi_{0}=\chi_{i} \tag{14.111}
\end{equation*}
$$

If the same operation is carried on the character $\chi_{i}$, one obtains

$$
\begin{equation*}
\phi_{j}(\vec{b}) \chi_{i}=\sum_{k} N_{i j}^{k} \chi_{k} \tag{14.112}
\end{equation*}
$$

with $N_{i j}^{k}$ being the same matrix as that which defines the fusion rules for $\phi_{i}$ and $\phi_{j}$. Using these relations, Verlinde further proved that the coefficients $N_{i j}^{k}$ of the fusion algebra are related to the elements of the modular $\mathcal{S}$-matrix by the Verlinde formula (Verlinde, 1988)

$$
\begin{equation*}
N_{i j}^{k}=\sum_{n} \frac{\mathcal{S}_{j}^{n} \mathcal{S}_{i}^{n}\left(\mathcal{S}^{-1}\right)_{n}^{k}}{\mathcal{S}_{0}^{n}} \tag{14.113}
\end{equation*}
$$

The same modular $\mathcal{S}$-matrix also appears in Chern-Simons gauge theory. Witten showed that the states of a Chern-Simons theory are accounted for by the conformal blocks of a CFT. As a result, the Chern-Simons states are representations of the braid group, and may be identified with the characters of a CFT. The modular $\mathcal{S}$-matrix of the CFT will then enter into calculations of Wilson loop observables in the Chern-Simons theory, as was illustrated by Witten (1989). He showed that in Chern-Simons gauge theory the expectation value of the Wilson loop operator which carries the representation $R_{j}$ in a space-time with the topology of the 3 -sphere $S^{3}$ is given by a matrix element of the modular $\mathcal{S}$-matrix,

$$
\begin{equation*}
Z\left(S^{3}, R_{j}\right)=\mathcal{S}_{0}^{j} \tag{14.114}
\end{equation*}
$$

and that the partition function for the vacuum $Z\left(S^{3}\right)$ is given by

$$
\begin{equation*}
Z\left(S^{3}\right)=\mathcal{S}_{0}^{0} \tag{14.115}
\end{equation*}
$$

For reasons that will become clear shortly, it is convenient to define the quantum dimension $d_{j}$ of the representation $R_{j}$,

$$
\begin{equation*}
d_{j}=\frac{\mathcal{S}_{0}^{j}}{\mathcal{S}_{0}^{0}} \tag{14.116}
\end{equation*}
$$

The unitarity of the modular $\mathcal{S}$-matrix implies that

$$
\begin{equation*}
\left(\mathcal{S}_{0}^{0}\right)^{-1}=\sqrt{\sum_{j}\left|d_{j}\right|^{2}} \equiv \mathcal{D} \tag{14.117}
\end{equation*}
$$

where the quantity $\mathcal{D}$ defines the effective quantum dimension.
The important insight that we will retain is that the conformal blocks are holomorphic functions that span a basis of a finite-dimensional vector space and transform under braiding operations following the law of Eq. (14.100) (Moore and Seiberg, 1989). This observation led Moore and Read to propose the use of conformal blocks of RCFTs to construct holomorphic wave functions (hence those
in the lowest Landau level) whose excitations may realize non-abelian statistics (Moore and Read, 1991). In Section 14.6.1 we saw that the Laughlin states can be recast as expectation values of the chiral CFT of a compactified boson. We will now generalize this construction.

### 14.7 The spin-singlet Halperin states

The spin-singlet Halperin $(n+1, n+1, n)$ states with filling fraction $v=2 /(2 n+1)$ can also be recast as a CFT correlator. To this end, we factorize these wave functions for $N$ electrons (with $N$ even) (Balatsky and Fradkin, 1991; Moore and Read, 1991),

$$
\begin{align*}
\Psi_{(n+1, n+1, n)}\left(\left\{z_{i}^{\uparrow}\right\},\left\{z_{i}^{\downarrow}\right\}\right)= & \prod_{i<j}\left(z_{i}^{\uparrow}-z_{j}^{\uparrow}\right)^{n+1}\left(z_{i}^{\downarrow}-z_{j}^{\downarrow}\right)^{n+1} \prod_{i, j}\left(z_{i}^{\uparrow}-z_{j}^{\downarrow}\right)^{n} \\
& \times \exp \left(-\frac{1}{4 \ell_{0}^{2}} \sum_{i}\left(\left|z_{i}^{\uparrow}\right|^{2}+\left|z_{i}^{\downarrow}\right|^{2}\right)\right) \tag{14.118}
\end{align*}
$$

into a product of a wave function for the charge degrees of freedom, which takes the form of a Laughlin state for semions (with statistical angle $\delta=\pi / 2$ ),

$$
\begin{align*}
\Psi_{m}^{(\pi / 2)}\left(\left\{z_{i}^{\uparrow}\right\},\left\{z_{i}^{\downarrow}\right\}\right)= & \prod_{i<j}\left(z_{i}^{\uparrow}-z_{j}^{\uparrow}\right)^{n+1 / 2}\left(z_{i}^{\downarrow}-z_{j}^{\downarrow}\right)^{n+1 / 2}\left(z_{i}^{\uparrow}-z_{j}^{\downarrow}\right)^{n+1 / 2} \\
& \times \exp \left(-\frac{1}{4 \ell_{0}^{2}} \sum_{i}\left(\left|z_{i}^{\uparrow}\right|^{2}+\left|z_{i}^{\downarrow}\right|^{2}\right)\right) \tag{14.119}
\end{align*}
$$

and the spin-singlet wave function for the spin degrees of freedom,

$$
\begin{equation*}
\Psi_{\text {singlet }}\left(\left\{z_{i}^{\uparrow}\right\},\left\{z_{i}^{\downarrow}\right\}\right)=\prod_{i<j} \frac{\left(z_{i}^{\uparrow}-z_{j}^{\uparrow}\right)^{1 / 2}\left(z_{i}^{\downarrow}-z_{j}^{\downarrow}\right)^{1 / 2}}{\left(z_{i}^{\uparrow}-z_{j}^{\downarrow}\right)^{1 / 2}} \tag{14.120}
\end{equation*}
$$

The Laughlin state for semions can be written as the CFT correlator, a conformal block of a compactified boson RCFT at level $k=2 n+1$,

$$
\begin{align*}
\Psi_{m}^{(\pi / 2)}\left(\left\{z_{i}^{\uparrow}\right\},\left\{z_{i}^{\downarrow}\right\}\right)= & \left\langle\left(\prod_{i=1}^{N} \exp \left(i \sqrt{n+\frac{1}{2}} \varphi\left(z_{i}\right)\right)\right)\right. \\
& \left.\times \exp \left(-\int d^{2} z^{\prime} \sqrt{n+\frac{1}{2}} \rho_{0} \varphi\left(z^{\prime}\right)\right)\right\rangle_{\mathrm{U}(1)_{k}} \tag{14.121}
\end{align*}
$$

where the label $i$ runs over all $N$ particles, irrespective of their spin polarization.
The wave function for the spin sector, $\Psi_{\text {singlet }}$, is equal to the correlation function of the spin-doublet primary field (with $j=1 / 2$ ) in a chiral $\mathrm{SU}(2)_{1}$ Wess-ZuminoWitten (WZW) model discussed in Section 7.12 (see Eq. (7.199) for $\left.\operatorname{SU}(2)_{1}\right)$. If
we denote the spin $j=1 / 2$ doublet primary fields of the $\mathrm{SU}(2)_{1} \mathrm{WZW}$ chiral CFT by $V_{ \pm 1 / 2}(z)$, the spin-singlet wave function is

$$
\begin{equation*}
\Psi_{\text {singlet }}\left(\left\{z_{i}^{\uparrow}\right\},\left\{z_{i}^{\downarrow}\right\}\right)=\left\langle V_{+1 / 2}\left(z_{1}^{\uparrow}\right) \ldots V_{+1 / 2}\left(z_{N / 2}^{\uparrow}\right) V_{-1 / 2}\left(z_{1}^{\downarrow}\right) \ldots V_{-1 / 2}\left(z_{N / 2}^{\downarrow}\right)\right\rangle_{\mathrm{SU}(2)_{1}} \tag{14.122}
\end{equation*}
$$

Interestingly (but not accidentally!), this wave function for the spin sector is the same as the conjectured Kalmeyer-Laughlin wave function for a spin-liquid state of a frustrated quantum antiferromagnet (Kalmeyer and Laughlin, 1987).

Thus, both the charge sector and the spin sector are given by a conformal block of a chiral RCFT, the $\mathrm{U}(1)$ chiral boson at level $k=2 n+1$ for the charge sector and the $\mathrm{SU}(2)_{1}$ chiral WZW CFT for the spin sector. In both cases only one conformal block is involved. This is expected for the $U(1)$ chiral boson, since we showed above that the fusion rules have only one channel.

However, the spin sector requires some discussion. In a sense this result is not surprising since we can picture the spin-singlet states as a special case of a bilayer system that has a $\mathrm{U}(1) \times \mathrm{U}(1)$ symmetry. However, as shown in Balatsky and Fradkin (1991), the spin-singlet fractional quantum Hall states can be constructed as a $\mathrm{U}(1) \times \mathrm{SU}(2)$ Chern-Simons theory whose spin sector has level $k=1$ that has a very simple structure. In a theory with $\operatorname{SU}(2)$ symmetry we expect the states (and also the fields) to be organized into multiplets, namely the irreducible representations of the group $\mathrm{SU}(2)$. Thus, if we have states with angular momenta $j_{1}$ and $j_{2}$, the tensor product decomposes into a sum of states with total angular momentum $j$ ranging from $\left|j_{1}-j_{2}\right|$ to $j_{1}+j_{2}$. However, for the primary fields $\phi_{j}$ of the Kac-Moody current algebra su(2) ${ }_{k}$ (associated with the $\mathrm{SU}(2)_{k}$ WZW model) the corresponding fusion rules are truncated at $j_{\max }=k / 2$,

$$
\begin{equation*}
\phi_{j_{1}} \star \phi_{j_{2}}=\phi_{\left|j_{1}-j_{2}\right|}+\cdots+\phi_{j_{\max }} \tag{14.123}
\end{equation*}
$$

In particular, in the case of $\operatorname{SU}(2)_{1}$, the level is $k=1$ and the fusion is truncated at $j_{\max }=1 / 2$. This means that for $\mathrm{SU}(2)_{1}$ two spin- $1 / 2$ primary fields can only fuse into the $j=0$ identity field since $j=1$ is projected out. Hence, for $\operatorname{SU}(2)_{1}$ we simply write

$$
\begin{equation*}
[1 / 2] \star[1 / 2]=[0], \quad \text { for } \mathrm{SU}(2)_{1} \tag{14.124}
\end{equation*}
$$

This means that, for $\mathrm{SU}(2)_{1}$ (this is also true for $\mathrm{SU}(N)_{1}$ (Knizhnik and Zamolodchikov, 1984)), there is only one fusion channel and hence only one conformal block in the correlator. This also implies that, from the point of view of the braid group, $\mathrm{SU}(2)_{1}$ has only one-dimensional representations and the fractional statistics is abelian (even though the group $\mathrm{SU}(2)$ is non-abelian!).

The conclusion is that $\mathrm{SU}(2)_{1}$ theory (both as a WZW CFT and as a ChernSimons theory) is secretly an abelian theory. But we already know this. In fact,
in our discussion of the Luttinger model in Chapter 6 we found using abelian bosonization that a theory with an $\mathrm{SU}(2)_{1}$ current algebra can be represented in terms of an abelian bosonic theory with a special choice of compactification radius. Thus, the right-moving currents $J_{\mathrm{R}}^{ \pm}$and $J_{\mathrm{R}}^{3}$ can be represented in terms of a single compactified chiral boson $\phi(z)$ (with a suitable choice of normalization)

$$
\begin{equation*}
J_{\mathrm{R}}^{3}(z) \sim i \partial_{z} \phi(z), \quad J_{\mathrm{R}}^{ \pm}(z) \sim e^{ \pm i \sqrt{2} \phi(z)} \tag{14.125}
\end{equation*}
$$

In this representation the spin- $1 / 2$ doublet chiral primary fields are

$$
\begin{equation*}
V_{ \pm 1 / 2}(z) \sim \exp \left( \pm \frac{i}{\sqrt{2}} \phi(z)\right) \tag{14.126}
\end{equation*}
$$

### 14.8 Moore-Read states and their generalizations

Moore and Read (1991) generalized this approach to propose several fractional quantum Hall states with strikingly interesting properties. Specifically they proposed the Pfaffian wave functions for a system of fully polarized electrons that has the form of a product of a Pfaffian and a Laughlin wave function,

$$
\begin{equation*}
\Psi_{\mathrm{MR}}\left(z_{1}, \ldots, z_{N}\right)=\operatorname{Pf}\left(\frac{1}{z_{i}-z_{j}}\right) \prod_{i<j}\left(z_{i}-z_{j}\right)^{n} \exp \left(-\frac{1}{4 \ell_{0}^{2}} \sum_{i}\left|z_{i}\right|^{2}\right) \tag{14.127}
\end{equation*}
$$

This wave function represents a system of electrons in the lowest Landau level at filling factor $v=1 / n$.

The Pfaffian of the antisymmetric matrix $M_{i j}=1 /\left(z_{i}-z_{j}\right)$ is the fully antisymmetrized product of all possible pairs of matrix elements,

$$
\begin{equation*}
\operatorname{Pf}\left(M_{i j}\right)=\frac{1}{2^{N / 2}(N / 2)!} \sum_{P} \operatorname{sgn}(P) \prod_{r=1}^{N / 2} M_{P(2 r-1) P(2 r)}=\mathcal{A}\left(M_{12} \ldots M_{N-1, N}\right) \tag{14.128}
\end{equation*}
$$

where $P$ labels all possible permutations of $N$ elements, and $\mathcal{A}$ denotes the operation of antisymmetrization. Up to an overall sign, the Pfaffian of an antisymmetric matrix is equal to the square root of the determinant of the same matrix,

$$
\begin{equation*}
\operatorname{Pf}(M)= \pm \sqrt{\operatorname{det} M} \tag{14.129}
\end{equation*}
$$

For $n$ even this state is antisymmetric and hence is a candidate wave function for a fractional quantum Hall state for electrons. More interestingly, unlike Laughlin states and its generalizations, for a fermionic state the filling fraction $v=1 / n$ of the Moore-Read states has an even denominator. Conversely, for $n$ odd these wave functions are symmetric under exchange and describe a system of bosons. Since the Pfaffian prefactor is a set of poles it allows the particles to be packed more densely
than a Laughlin-type state. For $n \geq 1$ the Laughlin factor insures the integrability of this wave function. It can also be shown that for a fixed number of particles this state is still a polynomial of the complex coordinates of the particles.

We already know that on a torus the Laughlin state at $v=1 / n$ has $n$ degenerate ground states due to the motion of the center of mass of the system on the torus. The Pfaffian state on a torus is obtained by the replacement (as in the Laughlin state)

$$
\begin{equation*}
\operatorname{Pf}\left(\frac{1}{z_{i}-z_{j}}\right) \longmapsto \operatorname{Pf}\left(\frac{\theta_{a}\left(z_{i}-z_{j}\right)}{\theta_{1}\left(z_{i}-z_{j}\right)}\right) \tag{14.130}
\end{equation*}
$$

where $\theta_{a}(z)$ (with $a=1, \ldots, 4$ ) are the four theta functions. This gives us a total degeneracy of $3 n$ for a Pfaffian state with $v=1 / n$.

The structure of the Pfaffian factor indicates that this state has strong pairing correlations, and for this reason it is often called a paired Hall state (Greiter et al., 1991). Since the Pfaffian factor is a product of single poles, the pairing correlations are similar to those of a BCS-type superconductor with an order parameter with $p_{x}+i p_{y}$ symmetry, similar to the A phase of superfluid ${ }^{3} \mathrm{He}$ : a fully spin-polarized paired state of fermions with orbital angular momentum $l=1$ and $m= \pm 1$ (Leggett, 1975).

Of particular interest is the Moore-Read state at $v=1 / 2(n=2)$. It has been known for many years that in the first Landau level there is a fractional quantum Hall state with filling fraction $v=5 / 2$. We can regard the lowest Landau level (which is completely filled) as having a filling factor of $v=2$. Thus, a $v=5 / 2$ state can then be pictured as a half-filled first Landau level. Currently available numerical results indicate that the Moore-Read state is the most likely candidate to explain the fractional quantum Hall state at 5/2 (Morf, 1998; Rezayi and Haldane, 2000). Although it is possible to have a paired state even in the lowest Landau level (through some version of the Kohn-Luttinger mechanism (Kohn and Luttinger 1965; Chubukov 1993; Raghu and Kivelson, 2011)), so far there is no evidence (experimental or numerical) of paired states in the lowest Landau level. The bosonic Moore-Read state with $n=1$ has been conjectured to occur in a system of ultra-cold bosons rotating at very high angular velocity (Cooper et al., 2001).

An insight into the physical origin of the paired states is gained by noticing that the Moore-Read state has an interesting and physically illuminating connection with the Halperin $(3,3,1)$ state which has the same filling fraction, $v=1 / 2$ :

$$
\begin{align*}
\Psi_{(3,3,1)}\left(z_{1}, \ldots, z_{N / 2}, w_{1}, \ldots w_{N / 2}\right)= & \prod_{i<j}\left(z_{i}-z_{j}\right)^{3} \prod_{i<j}\left(w_{i}-w_{j}\right)^{3} \prod_{i \leq j}\left(z_{i}-w_{j}\right)^{1} \\
& \times \exp \left(-\frac{1}{4 \ell_{0}^{2}} \sum_{i=1}^{N / 2}\left(\left|z_{i}\right|^{2}+\left|w_{i}\right|^{2}\right)\right) \tag{14.131}
\end{align*}
$$

We can regard this state as a wave function for a fully spin-polarized system in a bilayer (with two half-filled layers), or as a spin-unpolarized single-layer system with an explicitly broken $\mathrm{SU}(2)$ spin rotational invariance. The Halperin $(3,3,1)$ wave function is a good state for a bilayer system with weak inter-layer tunneling. This state is not antisymmetric under the exchange of electrons between the two layers (or spin polarizations). As we increase the inter-layer tunneling from weak to strong (or, equivalently, the spin flip rate), the wave function must be antisymmetric in the coordinates of all the electrons.

It is a remarkable fact that the fully antisymmetrized $(3,3,1)$ wave function is equal to the Moore-Read state (Ho, 1995). This can be seen as follows. Let us consider a system of $N$ electrons with both spin orientations. Let $u_{i}$ and $v_{i}$ be the up- and down-spin spinors. In this form the $(3,3,1)$ state can be written as

$$
\begin{align*}
& \Psi_{(3,3,1)}= \operatorname{Pf}\left(\frac{u_{i} v_{j}+u_{j} v_{i}}{z_{i}-z_{j}}\right) \prod_{i<j}\left(z_{i}-z_{j}\right)^{2} \exp \left(-\frac{1}{4 \ell_{0}^{2}} \sum_{i}\left|z_{i}\right|^{2}\right) \\
&=\mathcal{A}\left\{\prod_{i>j}\left(z_{2 i-1}-z_{2 j-1}\right)^{3}\left(z_{2 i}-z_{2 j}\right)^{3} \prod_{i, j}\left(z_{2 i-1}-z_{2 j}\right)^{1}\right. \\
&\left.\times \prod_{i} u_{2 i-1} v_{2 i}\right\} \exp \left(-\frac{1}{4 \ell_{0}^{2}} \sum_{i}\left|z_{i}\right|^{2}\right) \tag{14.132}
\end{align*}
$$

If we now rotate the spin quantization axis to the $x$ axis this wave function becomes

$$
\begin{equation*}
\Psi_{(3,3,1)}=\operatorname{Pf}\left(\frac{u_{i}^{x} u_{j}^{x}-v_{i}^{x} v_{j}^{x}}{z_{i}-z_{j}}\right) \prod_{i<j}\left(z_{i}-z_{j}\right)^{2} \exp \left(-\frac{1}{4 \ell_{0}^{2}} \sum_{i}\left|z_{i}\right|^{2}\right) \tag{14.133}
\end{equation*}
$$

Thus, the Moore-Read (or Pfaffian) state is a $(3,3,1)$ state with its down spins (with respect to the $x$ axis) projected out. This suggests that the Moore-Read state arises in the strong-tunneling limit in a bilayer system.

The other insight into the origin of this non-abelian state comes from thinking of the Moore-Read state as a paired state and making the connection with a 2D $p_{x}+i p_{y}$ superconductor explicit. Greiter, Wen, and Wilczek suggested the existence of a paired state at $v=1 / 2$ and showed that the likely pairing channel has angular momentum $l=-1$ ( p wave) which must be a spin-triplet state (Greiter et al., 1991, 1992). Numerical calculations showed that a system of composite fermions, namely the quasiparticles of the compressible state at $v=1 / 2$, has attractive interactions in the $l=1$ channel (Park et al., 1998). Hence, a state with p-wave pairing of composite fermions is favored. Read and Green (2000) showed that the superconducting analog of the Moore-Read state describes the weak-pairing regime as a BCS superfluid. As the strength of the pairing interactions increases, there is a phase transition to an abelian quantum Hall state of bosonic
pairs ("molecules"). The connection of the Moore-Read state with a $p_{x}+i p_{y}$ superconductor comes from the Pfaffian factor in the wave function (see Read and Green (2000)).

The Moore-Read state also has the structure of a conformal block of a CFT. As we saw, the Laughlin factor has that structure. But so does the Pfaffian factor. In fact, the Pfaffian can be written as a correlator of a free chiral Majorana fermion $\chi(z)$,

$$
\begin{equation*}
\left\langle\chi\left(z_{1}\right) \ldots \chi\left(z_{N}\right)\right\rangle=\operatorname{Pf}\left(\frac{1}{z_{i}-z_{j}}\right) \tag{14.134}
\end{equation*}
$$

This result follows from using Wick's theorem, with the propagator for the (Euclidean) chiral Majorana field being

$$
\begin{equation*}
\langle\chi(z) \chi(w)\rangle=\frac{1}{z-w} \tag{14.135}
\end{equation*}
$$

Recall that a Majorana fermion is a real field and satisfies $\chi^{\dagger}=\chi$. In contrast, for charged (or complex) (Dirac) fermions the correlators are determinants, which is consistent since the square of a Pfaffian is a determinant. Thus the Moore-Read states can be written as

$$
\begin{align*}
\Psi_{\mathrm{MR}}\left[\left\{z_{i}\right\}\right]= & \left\langle\chi\left(z_{1}\right) \ldots \chi\left(z_{N}\right)\right\rangle \\
& \times\left\langle\left(\prod_{i=1}^{N} e^{i \sqrt{n} \phi\left(z_{i}\right)}\right) \exp \left(-\int d^{2} z^{\prime} \sqrt{n} \rho_{0} \phi\left(z^{\prime}\right)\right)\right\rangle_{\mathrm{U}(1)_{n}} \tag{14.136}
\end{align*}
$$

This wave function is the exact ground state of a three-body Hamiltonian of the form (Greiter et al., 1991)

$$
\begin{equation*}
H=\sum_{i ; j \neq i ; k \neq i, j} P_{\mathrm{LLL}} \delta^{\prime}\left(z_{i}-z_{j}\right) \delta^{\prime}\left(z_{i}-z_{k}\right) P_{\mathrm{LLL}} \tag{14.137}
\end{equation*}
$$

where $P_{\text {LLL }}$ denotes the projection onto the lowest Landau level, and it is an excellent wave function for a system of electrons projected onto the first Landau level with Coulomb interactions (Morf, 1998; Rezayi and Haldane, 2000).

The structure of this wave function suggests that the states are constructed by gluing together (with some rules that we will specify shortly) a charge sector represented by a $\mathrm{U}(1)_{n}$ compactified chiral boson $\phi(z)$ and a neutral sector represented in the wave function by the Pfaffian factor. In Chapter 15 we will discuss the edge states and we will find precisely the same construction. The charge of the excitations will be determined by the charge sector, which for this state with filling fraction $v=1 / n$ has a chiral current operator

$$
\begin{equation*}
J(z) \sim \frac{i}{\sqrt{n}} \partial_{z} \phi(z) \tag{14.138}
\end{equation*}
$$

Our next task is to find an RCFT that has a Majorana fermion as a primary field. But we already know the answer: it is the CFT of the 2D Ising model (or $d=1$ quantum)! In fact, in Section 5.3 we discussed the 1D quantum Ising model and saw that it is equivalent to a theory of free Majorana fermions. It has been known since Onsager's solution of the classical Ising model in two dimensions that the partition function is equal to the Pfaffian of a matrix (McCoy and Wu , 1973).

The CFT of the critical point of the 2D Ising model has the following primary fields (Belavin et al., 1984; Friedan et al., 1984; Ginsparg, 1989): (a) the identity $I$, (b) the energy density $\varepsilon$ (the mass term of the Majorana fermion), (c) the Majorana fermion $\chi$, and (d) the Ising field (order parameter) $\sigma$, which have the following values of the scaling dimension $\Delta$ and conformal spin $s:(0,0),(1,0)$, $(1 / 2,1 / 2)$, and $(1 / 8,0)$, respectively. Here we are interested not in the operators of the full critical Ising model but only in its chiral (right-moving) piece represented by the chiral primary fields $I, \chi$, and $\sigma$. Here we have used the fact that the right-moving piece of the energy density $\varepsilon$ is the chiral Majorana fermion $\chi$. These chiral primary fields obey the following chiral fusion algebra (Di Francesco et al., 1997):

$$
\begin{equation*}
\chi \star \chi=I, \quad \sigma \star \sigma=I+\chi, \quad \sigma \star \chi=\chi \tag{14.139}
\end{equation*}
$$

Thus, we now have a case in which the fusion of two $\sigma$ fields has two fusion channels. In turn the $\mathrm{U}(1)_{n}$ CFT of the boson $\phi$ that describes the Laughlin sector has compactification radius $1 / \sqrt{n}$ and has $n$ allowed primary fields.

The Moore-Read (or Pfaffian) quantum Hall state is a special case of a class of non-abelian states. In these generalized states, which were initially proposed by Read and Rezayi (1999), the electrons are not paired but have strong cluster correlations involving three (or more) particles at a time. In the Read-Rezayi states the Pfaffian factor is replaced by a correlator of parafermions (that we discussed in Section 10.7) in CFT. In these states the Laughlin-Jastrow factor is replaced by the wave function with an exponent of $m+2 / k$, i.e. a fractional quantum Hall state of anyons.

The parafermion wave functions are exact zero-energy ground states of a class of local Hamiltonians of the form of Eq. (14.137) but involving $k+1$ delta functions for a system of $N$ electrons, with $N$ being divisible by $k$. Read and Rezayi showed that these states have filling fraction $v=k /(m k+2)$ (with $m \geq 0$ ) with a groundstate degeneracy on a torus of $(k+1)(m k+2) / 2$. For $m$ even the wave functions
are symmetric (and describe bosons), whereas for $m$ odd they are antisymmetric and describe fermions.

The (particle-hole-conjugate) $k=3$ parafermion state is a candidate to represent the quantum Hall plateau that is observed at filling fraction $v=12 / 5$ (i.e. $2+$ $2 / 5)$. However, at that filling fraction there is a competing (abelian) Jain state. In contrast, at $v=5 / 2$ there is essentially no competing abelian state (since this filling fraction has an even denominator) except for a possible trivial paired abelian state, the bosonic Laughlin state of tightly bound pairs. This trivial state is unlikely to be relevant because it requires strong attractive interactions, instead of the weak suppression of repulsion naturally present in the first Landau level.

Parafermions arise in CFT in the context of the critical phenomena of the $\mathbb{Z}_{n}$ clock models (of which the three-state Potts model is a special case). In CFT these operators appear in a subclass of minimal models (Belavin et al., 1984; Friedan et al., 1984). The simplest example is the CFT of the $\mathbb{Z}_{3}$ Potts model (Dotsenko, 1984). Although, unlike Majorana fermions, parafermions cannot be realized as free fields, correlators of parafermions are known from CFT and, in particular, their conformal blocks are also known explicitly.

Returning to the Moore-Read states, we need to determine the states for the quasiparticles/quasiholes. The allowed states must be such that their operators are local with respect to the electron operator (since the fluid is made of electrons!). By inspection of the Moore-Read wave function we see that the operator

$$
\begin{equation*}
\psi_{e}(z) \sim \chi(z) e^{i \sqrt{n} \phi(z)} \tag{14.140}
\end{equation*}
$$

plays the role of the electron. The condition that the allowed operators be local (or single-valued) with respect to the electron operator leads to the following set of allowed states.

1. The identity $I$, which represents the quiescent fluid.
2. The " $\sigma$ particle" (the "non-abelion" or "half-vortex")

$$
\begin{equation*}
\sigma(z) \exp \left(\frac{i}{2 \sqrt{n}} \phi(z)\right) \tag{14.141}
\end{equation*}
$$

where $\sigma(z)$ is the "chiral piece" of the order-parameter field of the Ising model. This state has charge $Q=e /(2 n)$ and (as we will see below) non-abelian braiding statistics. Notice that $\sigma(z)$ is non-local with respect to the Majorana fermion $\chi(z)$ since it changes the fermion boundary conditions from periodic to antiperiodic, and hence it is double-valued. Similarly, the vertex operator from the charge sector is also double-valued. Nevertheless, their product is single-valued (and hence local) with respect to the electron operator $\psi_{\mathrm{e}}$.
3. The Majorana fermion, a fermionic $Q=0$ neutral excitation,

$$
\begin{equation*}
\chi(z) \tag{14.142}
\end{equation*}
$$

4. The Laughlin quasihole (a vortex)

$$
\begin{equation*}
\exp \left(\frac{i}{\sqrt{n}} \phi(z)\right) \tag{14.143}
\end{equation*}
$$

with charge $Q=e / n$ and abelian fractional statistics $\delta=\pi / n$.
The wave function for two quasiholes located with complex coordinates $\eta_{1}$ and $\eta_{2}$ is obtained from the Moore-Read wave function, Eq. (14.127), by the following replacement inside the Pfaffian factor (Greiter et al., 1992; Nayak and Wilczek, 1996):

$$
\begin{equation*}
\operatorname{Pf}\left(\frac{1}{z_{i}-z_{j}}\right) \longmapsto \operatorname{Pf}\left(\frac{\left(z_{i}-\eta_{1}\right)\left(z_{j}-\eta_{2}\right)+(i \leftrightarrow j)}{z_{i}-z_{j}}\right) \tag{14.144}
\end{equation*}
$$

The wave function for two quasiholes in the Moore-Read state can be expressed as the following CFT expectation value:

$$
\begin{align*}
\Psi_{\mathrm{MR}}^{2 \mathrm{qh}}\left[\left\{z_{i}\right\}\right]= & \left\langle\sigma\left(\eta_{1}\right) \sigma\left(\eta_{2}\right) \chi\left(z_{1}\right) \ldots \chi\left(z_{N}\right)\right\rangle_{\text {Ising CFT }} \\
\times & \times\left\langle\left(\exp \left(\frac{i}{2 \sqrt{n}} \phi\left(\eta_{1}\right)\right) \exp \left(\frac{i}{2 \sqrt{n}} \phi\left(\eta_{2}\right)\right) \prod_{i=1}^{N} e^{i \sqrt{n} \phi\left(z_{i}\right)}\right)\right. \\
& \left.\times \exp \left(-\int d^{2} z^{\prime} \sqrt{n} \rho_{0} \phi\left(z^{\prime}\right)\right)\right\rangle_{\mathrm{U}(1)_{n}} \tag{14.145}
\end{align*}
$$

which is then also a conformal block.
Similarly, for four quasiholes with coordinates $\eta_{i}(i=1, \ldots, 4)$ we can write

$$
\begin{align*}
\operatorname{Pf}\left(\frac{1}{z_{i}-z_{j}}\right) & \mapsto \operatorname{Pf}\left(\frac{\left(z_{i}-\eta_{1}\right)\left(z_{i}-\eta_{2}\right)\left(z_{j}-\eta_{3}\right)\left(z_{j}-\eta_{4}\right)+(i \leftrightarrow j)}{z_{i}-z_{j}}\right) \\
& \equiv \operatorname{Pf}_{(12)(34)} \tag{14.146}
\end{align*}
$$

However, this is not the only possible wave function of this type, since the two following pairings, $\mathrm{Pf}_{(13)(24)}$ and $\mathrm{Pf}_{(14)(23)}$, are equally good. In fact these three wave functions are not linearly independent, since the following algebraic identity holds:

$$
\begin{equation*}
\operatorname{Pf}_{(12)(34)}-\operatorname{Pf}_{(14)(23)}=\frac{\eta_{14} \eta_{23}}{\eta_{13} \eta_{24}}\left(\operatorname{Pf}_{(12)(34)}-\operatorname{Pf}_{(13)(24)}\right) \tag{14.147}
\end{equation*}
$$

where $\eta_{i j}=\eta_{i}-\eta_{j}$. Therefore if we specify the coordinates of four quasiholes there are two linearly independent wave functions that span a two-dimensional

Hilbert space. Nayak and Wilczek further showed that there are $2^{p-1}$ linearly independent states with $2 p$ quasiholes.

These Hilbert spaces of states of quasiholes have a topological origin. To see this we will write the states of four quasiholes as the following CFT conformal block:

$$
\begin{align*}
\Psi_{\mathrm{MR}}^{4 \mathrm{qh}}\left[\left\{z_{i}\right\}\right]= & \left\langle\left(\prod_{r=1}^{4} \sigma\left(\eta_{r}\right)\right) \chi\left(z_{1}\right) \ldots \chi\left(z_{N}\right)\right\rangle_{\mathrm{Ising} \mathrm{CFT}} \\
& \times\left\langle\left(\prod_{r=1}^{4} \exp \left(\frac{i}{2 \sqrt{n}} \phi\left(\eta_{r}\right)\right) \prod_{i=1}^{N} e^{i \sqrt{n} \phi\left(z_{i}\right)}\right)\right. \\
& \left.\times \exp \left(-\int d^{2} z^{\prime} \sqrt{n} \rho_{0} \phi\left(z^{\prime}\right)\right)\right\rangle_{\mathrm{U}(1)_{n}} \tag{14.148}
\end{align*}
$$

The origin of the two linearly independent states is the existence of two fusion channels, [0] and [1/2], for the $\sigma$ fields in the Ising model CFT. For the expectation value to be non-vanishing all the operators in the Ising CFT must fuse (together) into the identity, operator $I$. This in turn implies that the four $\sigma$ fields themselves must fuse into the identity, and there are two ways for them to do this. These two possible expectation values are (essentially) the two chiral conformal blocks of the Ising CFT. By means of an explicit (but lengthy) calculation, Nayak and Wilczek obtained the following wave functions for four quasiholes, $\Psi_{[0]}^{4 \mathrm{qh}}$ and $\Psi_{[1 / 2]}^{4 \mathrm{qh}}$ (including the contributions from the charge sector):

$$
\begin{align*}
\Psi_{[0]}^{4 \mathrm{qh}} & =\frac{\left(\eta_{13} \eta_{24}\right)^{1 / 4}}{(1+\sqrt{1-x})^{1 / 2}}\left(\Psi_{(13)(24)}+\sqrt{1-x} \Psi_{(14)(23)}\right) \\
\Psi_{[1 / 2]}^{4 \mathrm{qh}} & =\frac{\left(\eta_{13} \eta_{24}\right)^{1 / 4}}{(1-\sqrt{1-x})^{1 / 2}}\left(\Psi_{(13)(24)}-\sqrt{1-x} \Psi_{(14)(23)}\right) \tag{14.149}
\end{align*}
$$

where $x$ is the cross ratio

$$
\begin{equation*}
x=\frac{\eta_{12} \eta_{34}}{\eta_{13} \eta_{24}} \tag{14.150}
\end{equation*}
$$

The wave functions for four quasiholes $\Psi_{[0]}^{4 \mathrm{qh}}$ and $\Psi_{[1 / 2]}^{4 \mathrm{qh}}$, Eq. (14.149), have a branch-cut structure that is intimately related to non-abelian statistics. Given the coordinates of the four quasiholes, $\eta_{1}, \ldots, \eta_{4}$, we can associate with each one of the two linearly independent wave functions a prescription regarding how to pair the quasiholes by running branch cuts between them (as shown in Fig. 14.1).

Owing to the branch cuts present in the wave functions, under a braiding operation $B$ (a unitary transformation representing a half monodromy) the conformal block wave functions transform into linear combinations of each other. For
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-601.jpg?height=352&width=1019&top_left_y=199&top_left_x=336)

Figure 14.1 The two linearly independent wave functions for four quasiholes in the Moore-Read state have associated with them two inequivalent sets of branch cuts.
instance, an exchange of $\eta_{1}$ and $\eta_{3}$ induces in the degenerate Hilbert space the unitary transformation

$$
U=\frac{1}{\sqrt{2}} \exp \left[i \pi\left(\frac{1}{8}+\frac{1}{4 n}\right)\right]\left(\begin{array}{cc}
1 & 1  \tag{14.151}\\
-1 & 1
\end{array}\right)
$$

Thus, the degenerate Hilbert space of quasiholes provides a two-dimensional representation of the braid group: the exchange (a half-braid) of two quasiholes in a four-quasihole state is represented by the $2 \times 2$ unitary matrix (of statistical angles) of Eq. (14.151). This feature of these states is called non-abelian (fractional) braid statistics.

It is important to stress that what we have done does not mean that each quasihole has an internal Hilbert space. This degeneracy has a topological origin, and it is a non-local shared property of the four quasiholes. In fact, since the dimension of this Hilbert space of $2 p$ quasiholes is $2^{p-1}$ (instead of $2^{2 p}$ as would be the case for an internal degree of freedom with two states), we see that the degeneracy is $\sqrt{2}$ per quasihole! In other words, these degenerate states are not localized (or localizable) on any of the quasiholes which are collectively in a state of this Hilbert space.

The same results arise in $\mathrm{SU}(2)_{k}$ Chern-Simons theory, a non-abelian generalization of the theory we discussed earlier in this book (see Section 10.4). Here we will follow in detail the work of Fradkin et al. (1998) on the connection between braiding in Chern-Simons theory and non-abelian quantum Hall states. The action of a non-abelian Chern-Simons gauge theory is

$$
\begin{equation*}
S_{\mathrm{CS}}\left[A_{\mu}\right]=\frac{k}{4 \pi} \int_{\Sigma \times \mathbb{R}} d^{3} x \epsilon_{\mu \nu \lambda}\left[A_{a}^{\mu} \partial^{\nu} A_{a}^{\lambda}+\frac{2}{3} f_{a b c} A_{a}^{\mu} A_{b}^{\nu} A_{c}^{\lambda}\right] \tag{14.152}
\end{equation*}
$$

where the gauge field $A_{\mu}$ takes values in the algebra of $\operatorname{SU}(N)$, and the integer $k$ is known as the level. In Chern-Simons theory (or in any field theory) the wave function $\Psi[a]$ of the ground state has the path-integral representation

$$
\begin{equation*}
\Psi[a]=\int_{A_{\mu} \mid \Sigma=a_{\mu}} \mathcal{D} A_{\mu} \exp \left[i \frac{k}{4 \pi} \int_{\Sigma \times \mathbb{R}} d^{3} x \epsilon^{\mu \nu \lambda}\left(A_{\mu}^{a} \partial_{\nu} A_{\lambda}^{a}+\frac{2}{3} f_{a b c} A_{\mu}^{a} A_{\nu}^{b} A_{\lambda}^{c}\right)\right] \tag{14.153}
\end{equation*}
$$

where $\Sigma$ is a space-like surface (a sphere $S^{2}$, a disk $D$, a torus $T^{2}$, etc).
The wave functions of Chern-Simons theory on a torus $T^{2}$ correspond to the insertion of Wilson loops that carry the representations $j$ on a non-contractible loop of the torus $T^{2}$. For $\mathrm{SU}(2)_{2}$ there are only three allowed representations: (a) the identity $(j=0)$, (b) the $j=1 / 2$ (doublet) representation, and (c) the $j=1$ (triplet) representation. Thus, the $\mathrm{SU}(2)_{2}$ Chern-Simons theory has three inequivalent states on a torus. The Read-Rezayi state for bosons with $k=3$ is related to the Chern-Simons gauge theory with $\mathrm{SU}(2)_{3}$ (Fradkin et al., 1999) and has four ground states on the torus (since the allowed representations are now $j=0,1 / 2,1,3 / 2$ ). The simplest fermionic Read-Rezayi state has ten sectors.

We can picture the four quasiholes by considering their worldlines $\gamma_{1}, \ldots, \gamma_{4}$. Initially the quasiholes are located at the "punctures" with coordinates $\eta_{1}, \ldots, \eta_{4}$ on the surface $\Sigma$, see Fig. 14.2. Each quasihole carries a representation $j_{1}, \ldots, j_{4}$. In the case of $\mathrm{SU}(2)_{2}$, since the level is $k=2$, there are only three allowed representations, $j=0,1 / 2,1$. Chern-Simons theory provides a beautiful way to understand the braiding properties of the quasiparticles, which are regarded as Wilson lines along a set of worldlines that we will collectively denote by $\gamma$.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-602.jpg?height=647&width=996&top_left_y=1306&top_left_x=343)

Figure 14.2 Four Wilson worldlines in Chern-Simons theory with representations $j_{1}, \ldots, j_{4}$ along the worldlines $\gamma_{1}, \ldots, \gamma_{4}$ puncturing the surface $\Sigma$ at $\eta_{1}, \ldots, \eta_{4}$.

Witten showed that the expectation value of the Wilson lines carrying the fundamental, $j=1 / 2$, representation is given by a topological invariant known as the Jones polynomial $V_{\gamma}(q)$ (with $q=\exp (i \pi / 4)$ ) of the loops $\gamma$ :

$$
\begin{align*}
\int \mathcal{D} A_{\mu} & \operatorname{tr}_{1 / 2}\left\{P \exp \left(i \oint d x_{i} A_{i}^{a} t^{a}\right)\right\} \\
& \times \exp \left[i \frac{k}{4 \pi} \int d^{3} x \epsilon^{\mu \nu \lambda}\left(A_{\mu}^{a} \partial_{\nu} A_{\lambda}^{a}+\frac{2}{3} f_{a b c} A_{\mu}^{a} A_{\nu}^{b} A_{\lambda}^{c}\right)\right]=V_{\gamma}\left(e^{i \pi / 4}\right) \tag{14.154}
\end{align*}
$$

The Jones polynomial is a Laurent series in a variable $q$, which is a topological invariant of a knot, $\gamma$. In Chern-Simons theory the Jones polynomial defines a hierarchy of topological invariants whose first member is the linking number which, as we saw in Chapter 10, determines the phase factor for abelian fractional statistics. The Jones polynomial is defined to be $V_{\gamma}(q)=1$ if $\gamma$ is the unknot and by the skein relation

$$
\begin{equation*}
q^{-1} V_{\gamma}(q)-q V_{\gamma^{\prime \prime}}(q)=\left(q^{1 / 2}-q^{-1 / 2}\right) V_{\gamma^{\prime}}(q) \tag{14.155}
\end{equation*}
$$

where $\gamma^{\prime}$ and $\gamma^{\prime \prime}$ are obtained by performing successive counterclockwise halfbraids of any two worldlines in $\gamma$, as shown in Fig. 14.3.

Equation (14.155) tells us how the quantum-mechanical amplitudes of the quasiholes (represented by the expectation values of the Wilson lines) are modified by braiding operations that take place during the time evolution. Let us consider a state $|\Psi\rangle$ in the two-dimensional Hilbert space of the four quasiholes, and let us denote by $B$ the braiding operator of two quasiholes. In this context the skein relation means

$$
\begin{equation*}
q^{-1}|\Psi\rangle-q B^{2}|\Psi\rangle=\left(q^{1 / 2}-q^{-1 / 2}\right) B|\Psi\rangle \tag{14.156}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-603.jpg?height=416&width=875&top_left_y=1540&top_left_x=413)

Figure 14.3 The loops (a) $\gamma$, (b) $\gamma^{\prime}$, and (c) $\gamma^{\prime \prime}$ that enter into the skein relation. The three loops differ only by the braiding shown here. The shaded area is arbitrary.

This equation implies a quadratic equation for the eigenvalues of the braiding operator $B$. Its eigenvalues are $\exp (-3 \pi i / 8)$ and $\exp (i \pi / 8)$, which is consistent with the unitary transformation defined by Eq. (14.151).

These results imply that non-abelian quantum Hall states have excitations (in the case at hand, a $\sigma$ quasihole or half-vortex) whose braiding properties depend on how many such quasiholes are present. Thus, in a state with $2 p$ quasiholes, successive braiding operations involving different pairs of $\sigma$ particles induce a sequence of different unitary transformations in their degenerate Hilbert space. As we saw, this Hilbert space has a topological origin. This means that local processes that would normally lead to decoherence cannot couple to these finite-dimensional Hilbert spaces of non-abelian quasiholes, which are thereby protected. Similarly, while local disorder may lead to the localization of the quasiholes, it cannot affect their topological Hilbert spaces. These observations led Kitaev to propose in 1997 (Kitaev, 2003) that the states of these topological Hilbert spaces may be used to make a topological quantum computer. This work was subsequently expanded by Freedman et al. (2002b). In this framework the unitary transformations induced by successive braiding operations can be regarded as unitary transformations in a space of topological qubits. In this scheme, a computation is equivalent to a sequence of braiding operations.

We will not discuss here the details of this proposal, since it is beyond the scope of this book and there are excellent reviews on this subject (e.g. Das Sarma et al., 2008). Nevertheless, it is worthwhile to note that it raises several important questions, including in particular that of the conditions under which topological protection works. It should be clear from our discussion that non-abelian statistics (just as much as its abelian cousin) is a long-distance property of the excitations of these systems. Thus, the quasiholes must be far apart from each other (i.e. further apart than all microscopic scales such as the pairing length and the magnetic length) and move slowly enough that the processes of interest are in the adiabatic limit and do not involve the creation of further excitations, and the temperature must be low enough (lower than the quasihole gap) that there are no thermally excited quasiholes. In particular, the number of quasiholes must also be small enough that the quasiholes are sufficiently far apart that the topological degeneracy is not lifted. In addition, one should be able to "address" the topological qubits, that is to find out the result of the computation. However, this is not a trivial matter precisely due to the topological protection which these states enjoy. The simplest (but by no means trivial!) way to interact with these non-abelian excitations is through devices known as quantum interferometers (that are discussed in Chapter 15). This is a subject of intense current research both theoretically and experimentally. We will see that quasihole interferometers in non-abelian quantum Hall states measure directly the Jones polynomial of their worldlines.

### 14.9 Topological superconductors

As part of our discussion of non-abelian states we will now summarize the construction of a topological superconductor, in this case a $p_{x}+i p_{y}$ state, in the BCS theory of superconductivity (Schrieffer, 1964), which is a problem of wider interest. Our main interest here is to understand how non-abelian fractional statistics arises in this system. The beauty of the $p_{x}+i p_{y}$ superconductor is that, as we will see, the concept of non-abelian statistics can be presented explicitly using only standard methods of fermionic systems. The downside is that this approach is very specific to this system and cannot be generalized. In contrast, the more formal but more powerful approach of CFT provides for a more general setting.

The defining property of a superconductor (and for that matter of any superfluid) is that it is a state with a spontaneously broken symmetry, the $U(1)$ phase symmetry associated with local gauge invariance. In the case of all superconductors, and also for fermionic superfluids such as superfluid ${ }^{3} \mathrm{He}$ and in superfluid phases of fermionic cold atoms, the spontaneously broken symmetry is characterized by the existence of an order-parameter field, the pair field (see also Section 2.5)

$$
\begin{equation*}
\Delta_{\sigma_{1}, \sigma_{2}}\left(\vec{r}_{1}, \vec{r}_{2}\right)=\left\langle c_{\sigma_{1}}\left(\vec{r}_{1}\right) c_{\sigma_{2}}\left(\vec{r}_{2}\right)\right\rangle \tag{14.157}
\end{equation*}
$$

which acquires a non-vanishing expectation value in the superfluid (or superconducting) state. Here we have allowed for both spin-singlet and spin-triplet superfluid states. Alternatively, the superconducting state is defined by the existence of the limit (known as off-diagonal long-range order)

$$
\begin{equation*}
\lim _{\vec{R} \rightarrow \infty}\left\langle c_{\sigma_{1}}\left(\vec{r}_{1}\right) c_{\sigma_{2}}\left(\vec{r}_{2}\right) c_{\sigma_{1}}^{\dagger}\left(\vec{r}_{1}+\vec{R}\right) c_{\sigma_{2}}^{\dagger}\left(\vec{r}_{2}+\vec{R}\right)\right\rangle=\left|\Delta_{\sigma_{1}, \sigma_{2}}\left(\vec{r}_{1}, \vec{r}_{2}\right)\right|^{2} \neq 0 \tag{14.158}
\end{equation*}
$$

This definition is independent of the choice of basis or representation, and holds equally in a system with a fixed number of fermions (the canonical ensemble) and in a system in which the number of particles is not fixed (the grand canonical ensemble). The direct consequence of a ground state with a spontaneously broken global symmetry is the existence of a finite stiffness for the phase field in the superfluid state, i.e. the Nambu-Goldstone boson of the spontaneously broken symmetry. The quantum Hamiltonian (and action) of a physical system is invariant under a global phase transformation of the Fermi fields, $c_{\sigma}(\vec{r}) \rightarrow e^{i \phi} c_{\sigma}(\vec{r})$ (where $\phi$ is constant and spin-independent). However, the pair-field operator is not invariant under a global phase transformation and changes as $\Delta_{\sigma_{1}, \sigma_{2}}\left(\vec{r}_{1}, \vec{r}_{2}\right) \rightarrow$ $e^{i 2 \phi} \Delta_{\sigma_{1}, \sigma_{2}}\left(\vec{r}_{1}, \vec{r}_{2}\right)$. This transformation law implies that the pair field couples to an electromagnetic gauge field as a charge- $2 e$ scalar field.

We should keep in mind, as we discussed extensively in Section 13.2, that a superconducting state (topological or not) is not and cannot be equivalent to any quantum Hall state, abelian or non-abelian. In the case of the fermionic

Moore-Read quantum Hall states, the pairing instability involves the composite fermions, which, as we have seen, are strongly coupled to a dynamically generated Chern-Simons gauge field. Thus, the would-be Goldstone boson of the putative superconducting state is already eaten by the Chern-Simons gauge field. This means that, although the Moore-Read states have pairing correlations, it is not a superfluid state.

The construction we are following here relies crucially on the concept of pairing and on regarding the non-abelian state as a paired state. However, it is not obvious that this is a necessary mechanism. In fact, other non-abelian states that are known, such as the Read-Rezayi state, use instead a clustering property that generalizes the concept of pairing.

### 14.9.1 BCS mean-field theory of the $p_{x}+i p_{y}$ state

In the $p_{x}+i p_{y}$ state the fermions are in a spin triplet fully spin-polarized state. It is a 2D analog of the A phase of superfluid ${ }^{3} \mathrm{He}$ (see e.g. Vollhardt and Wölfle (1990)). This will allow us to ignore the spin degree of freedom. Let $c_{\vec{k}}^{\dagger}$ be the fermion operator that creates a fermion with momentum $\vec{k}$ and let $c_{\vec{k}}$ be the adjoint operator (which in the quantum Hall context are interpreted as composite-fermion operators). These operators obey the standard fermionic algebra,

$$
\begin{equation*}
\left\{c_{\vec{k}}^{\dagger}, c_{\vec{q}}\right\}=\delta_{\vec{k}, \vec{q}}, \quad\left\{c_{\vec{k}}^{\dagger}, c_{\vec{q}}^{\dagger}\right\}=0 \tag{14.159}
\end{equation*}
$$

The kinetic energy of the effective fermionic (mean-field) BCS Hamiltonian for the quasiparticles of the superconducting state is

$$
\begin{align*}
H_{\mathrm{F}}= & \int d^{2} x c^{\dagger}(\vec{x}) \hat{h}_{0} c(\vec{x}) \\
& +\int d^{2} x d^{2} x^{\prime}\left[\Delta^{*}\left(\vec{x}, \vec{x}^{\prime}\right) c(\vec{x}) c\left(\vec{x}^{\prime}\right)+\Delta\left(\vec{x}, \vec{x}^{\prime}\right) c^{\dagger}(\vec{x}) c^{\dagger}\left(\vec{x}^{\prime}\right)\right] \tag{14.160}
\end{align*}
$$

where $\hat{h}_{0}$ is the one-particle kinetic-energy operator. For a complex p-wave condensate the complex pair field $\Delta\left(\vec{x}, \vec{x}^{\prime}\right)$ is given by

$$
\begin{equation*}
\Delta\left(\vec{x}, \vec{x}^{\prime}\right) \equiv \Delta\left(\frac{\vec{x}+\vec{x}^{\prime}}{2}\right)\left(i \partial_{x^{\prime}}-\partial_{y^{\prime}}\right) \delta\left(\vec{x}-\vec{x}^{\prime}\right) \tag{14.161}
\end{equation*}
$$

In momentum space the fermionic Hamiltonian becomes

$$
\begin{equation*}
H_{\mathrm{F}}=\int d^{2} k\left[\left(\varepsilon_{\vec{k}}-\mu\right) c_{\vec{k}}^{\dagger} c_{\vec{k}}+\frac{1}{2}\left(\Delta_{\vec{k}}^{*} c_{-\vec{k}} c_{\vec{k}}+\Delta_{\vec{k}} c_{\vec{k}}^{\dagger} c_{-\vec{k}}^{\dagger}\right)\right] \tag{14.162}
\end{equation*}
$$

where $\varepsilon_{\vec{k}}$ is the quasiparticle kinetic energy and $\mu$ is an effective chemical potential. At small momenta $\varepsilon_{\vec{k}} \simeq \vec{k}^{2} /\left(2 m^{*}\right)$, where $m^{*}$ is an effective mass. $\Delta_{\vec{k}}$ is the
gap function, which is proportional to the order parameter of the superconducting state. Since we will not discuss the superconducting instability itself, we will focus only on the kinetic-energy part of the Hamiltonian, Eq. (14.162), and we will not include the terms that involve the fluctuations of the superconducting state (see e.g. Schrieffer (1964)).

For a spatially isotropic system the Fourier transform of the pair field $\Delta_{\vec{k}}$ (the "pair wave function") is an eigenstate of angular momentum. For a $p_{x}+i p_{y}$ state the complex gap function $\Delta_{\vec{k}}$ transforms as the $l=-1$ representation of the group of rotations in two dimensions. In the limit of small momenta, $\vec{k} \rightarrow 0, \Delta_{\vec{k}}$ has the asymptotic behavior

$$
\begin{equation*}
\Delta_{\vec{k}}=\left(k_{x}-i k_{y}\right) \Delta \quad \text { as } \vec{k} \rightarrow 0 \tag{14.163}
\end{equation*}
$$

(where $\Delta$ is a constant pairing amplitude) and vanishes at large momenta.
The mean-field ground state $|G\rangle$ has the standard BCS form

$$
\begin{equation*}
|G\rangle=\prod_{\vec{k}}^{\prime}\left(u_{\vec{k}}+v_{\vec{k}} c_{\vec{k}}^{\dagger} c_{-\vec{k}}^{\dagger}\right)|0\rangle \tag{14.164}
\end{equation*}
$$

where $|0\rangle$ is the state without fermions. The prime on the product symbol in Eq. (14.164) indicates that each pair $(\vec{k},-\vec{k})$ enters only once. The complex amplitudes $u_{\vec{k}}$ and $v_{\vec{k}}$ are determined by a self-consistency condition, which is equivalent to a variational argument, and obey the condition

$$
\begin{equation*}
\left|u_{\vec{k}}\right|^{2}+\left|v_{\vec{k}}\right|^{2}=1 \tag{14.165}
\end{equation*}
$$

which follows from the condition that the ground state $|G\rangle$ is normalized to unity.
In order to diagonalize the kinetic energy of the mean-field Hamiltonian of Eq. (14.162), we will proceed in the same way as we did in the case of the quantum Ising chain in Chapter 5. Let $\eta_{\vec{k}}$ and $\eta_{\vec{k}}^{\dagger}$ be a set of new fermion operators that obey standard fermionic anticommutation relations, and are related to $c_{\vec{k}}$ and $c_{\vec{k}}^{\dagger}$ by the Bogoliubov transformation

$$
\begin{equation*}
\eta_{\vec{k}}=u_{\vec{k}} c_{\vec{k}}-v_{\vec{k}} c_{-\vec{k}}^{\dagger}, \quad \eta_{\vec{k}}^{\dagger}=u_{\vec{k}}^{*} c_{\vec{k}}^{\dagger}-v_{\vec{k}}^{*} c_{-\vec{k}} \tag{14.166}
\end{equation*}
$$

and annihilate the BCS ground state, $\eta_{\vec{k}}|G\rangle=0$. The requirement that the new fermions create the actual eigenstates of the (full) mean-field Hamiltonian,

$$
\begin{equation*}
H=\sum_{\vec{k}} E_{\vec{k}} \eta_{\vec{k}}^{\dagger} \eta_{\vec{k}}+E_{\mathrm{gnd}} \tag{14.167}
\end{equation*}
$$

(where $E_{\vec{k}} \geq 0$ are the quasiparticle excitation energies and $E_{\text {gnd }}$ is the groundstate energy) is met by the condition that the new fermions be eigenoperators of the mean-field Hamiltonian,

$$
\begin{equation*}
\left[\eta_{\vec{k}}, H\right]=E_{\vec{k}} \eta_{\vec{k}} \tag{14.168}
\end{equation*}
$$

As a result the amplitudes $\left(u_{\vec{k}}, v_{\vec{k}}\right)$ (written in a spinor form) obey the Bogoliubov-de Gennes (BdG) equation

$$
\left(\begin{array}{cc}
\xi_{\vec{k}} & -\Delta_{\vec{k}}^{*}  \tag{14.169}\\
-\Delta_{\vec{k}} & -\xi_{\vec{k}}
\end{array}\right)\binom{u_{\vec{k}}}{v_{\vec{k}}} \equiv E_{\vec{k}} \vec{n}_{\vec{k}} \cdot \vec{\sigma}\binom{u_{\vec{k}}}{v_{\vec{k}}}=E_{\vec{k}}\binom{u_{\vec{k}}}{v_{\vec{k}}}
$$

where $\xi_{\vec{k}}=\varepsilon_{\vec{k}}-\mu, \vec{\sigma}=\left(\sigma_{x}, \sigma_{y}, \sigma_{z}\right)$ is a three-component vector made of the three Pauli matrices, and $\vec{n}_{k}$ is the unit vector

$$
\vec{n}_{k}=\left(\begin{array}{ll}
u_{\vec{k}}^{*}, & v_{\vec{k}}^{*} \tag{14.170}
\end{array}\right) \vec{\sigma}\binom{u_{\vec{k}}}{v_{\vec{k}}}=\frac{1}{E_{\vec{k}}}\left(-\operatorname{Re} \Delta_{\vec{k}}, \quad \operatorname{Im} \Delta_{\vec{k}}, \quad \xi_{\vec{k}}\right)
$$

The eigenvalues $E_{\vec{k}}$ and eigenvectors $\left(u_{\vec{k}}, v_{\vec{k}}\right)$ are

$$
\begin{align*}
E_{\vec{k}} & =\sqrt{\xi_{\vec{k}}^{2}+\left|\Delta_{\vec{k}}\right|^{2}}  \tag{14.171}\\
\frac{v_{\vec{k}}}{u_{\vec{k}}} & =-\frac{E_{\vec{k}}-\xi_{\vec{k}}}{\Delta_{\vec{k}}^{*}} \tag{14.172}
\end{align*}
$$

Up to a momentum-dependent phase, the spinor amplitudes are given by

$$
\begin{equation*}
\left|u_{\vec{k}}\right|^{2}=\frac{1}{2}\left(1+\frac{\xi_{\vec{k}}}{E_{\vec{k}}}\right), \quad\left|v_{\vec{k}}\right|^{2}=\frac{1}{2}\left(1-\frac{\xi_{\vec{k}}}{E_{\vec{k}}}\right) \tag{14.173}
\end{equation*}
$$

In the low-momentum regime, $\vec{k} \rightarrow 0, \xi_{\vec{k}} \rightarrow-\mu$ and $\Delta_{\vec{k}}$ has the form of Eq. (14.163). Thus at low momenta the BdG equation takes the form

$$
\left(\begin{array}{cc}
-\mu & -\left(k_{x}+i k_{y}\right) \Delta^{*}  \tag{14.174}\\
-\left(k_{x}-i k_{y}\right) \Delta & \mu
\end{array}\right)\binom{u_{\vec{k}}}{v_{\vec{k}}}=E_{\vec{k}}\binom{u_{\vec{k}}}{v_{\vec{k}}}
$$

which in real space becomes

$$
\begin{align*}
i \partial_{t} u & =-\mu u+\Delta^{*} i\left(\partial_{x}+i \partial_{y}\right) v  \tag{14.175}\\
i \partial_{t} v & =\mu v+\Delta i\left(\partial_{x}-i \partial_{y}\right) u
\end{align*}
$$

We recognize this result as the Dirac equation in $(2+1)$ dimensions, with the constraint that the spinor $(u, v)$ obeys the Majorana condition

$$
(u, v)\left(\begin{array}{ll}
0 & 1  \tag{14.176}\\
1 & 0
\end{array}\right)=\binom{u}{v}^{\dagger}
$$

In other terms, the quasiparticles of the superconductor are Majorana fermions, a result that we also encountered in the solution of the quantum Ising chain in Chapter 5. Notice that in this language the chemical potential $\mu$ became the mass of the Majorana fermion. Furthermore, the BdG equation, Eq. (14.169) (and hence also the Dirac approximation) has the symmetry (with $\sigma_{1}$ being the Pauli matrix)

$$
\sigma_{1}\left(\begin{array}{cc}
\xi_{\vec{k}} & -\Delta_{\vec{k}}^{*}  \tag{14.177}\\
-\Delta_{\vec{k}} & -\xi_{\vec{k}}
\end{array}\right) \sigma_{1}=-\left(\begin{array}{cc}
\xi_{\vec{k}} & -\Delta_{\vec{k}} \\
-\Delta_{\vec{k}}^{*} & -\xi_{\vec{k}}
\end{array}\right)
$$

This implies that, if the spinor $\left(u_{\vec{k}}, v_{\vec{k}}\right)$ is a solution with energy $E_{\vec{k}}$, then the spinor $\left(u_{\vec{k}}^{*}, v_{\vec{k}}^{*}\right) \sigma_{1}$ has energy $-E_{\vec{k}}$ and the spectrum is symmetric. However, the Majorana condition tells us that these two states are the same state. Hence the quasiparticle is its own anti-particle.

Following this line of argument, Read and Green showed that the BCS wave function $|G\rangle$ can be written in the suggestive form of a coherent state of Cooper pairs:

$$
\begin{equation*}
|G\rangle=\left(\prod_{\vec{k}}\left|u_{\vec{k}}\right|^{1 / 2}\right) \exp \left(\frac{1}{2} \sum_{\vec{k}} g(\vec{k}) c_{\vec{k}}^{\dagger} c_{-\vec{k}}^{\dagger}\right)|0\rangle \tag{14.178}
\end{equation*}
$$

where

$$
\begin{equation*}
g(\vec{k})=\frac{v_{\vec{k}}}{u_{\vec{k}}} \tag{14.179}
\end{equation*}
$$

Furthermore, when projected onto a state with $N$ fermions with real-space coordinates $\vec{x}_{i}(i=1, \ldots, N$, with $N$ even) this state has the form of a Pfaffian wave function (Read and Green, 2000):

$$
\begin{equation*}
\Psi\left(\vec{x}_{1}, \ldots, \vec{x}_{N}\right)=\left\langle\vec{x}_{1}, \ldots, \vec{x}_{N} \mid G\right\rangle=\operatorname{Pf}\left(g\left(\vec{x}_{i}-\vec{x}_{j}\right)\right) \tag{14.180}
\end{equation*}
$$

where $g(\vec{x})$ is the Fourier transform of the function $g(\vec{k})$ defined by Eq. (14.179).
The function $g(\vec{k})$ has different possible behaviors at small momenta. The behavior of the amplitudes $u_{\vec{k}}$ and $v_{\vec{k}}$ in this regime depends on how $E_{\vec{k}} \pm \xi_{\vec{k}}$ behaves in this regime. Since, as $\vec{k} \rightarrow 0, \xi_{\vec{k}} \rightarrow-\mu$ and $\Delta_{\vec{k}} \simeq\left(k_{x}-i k_{y}\right) \Delta$, we find

$$
\begin{equation*}
\lim _{\vec{k} \rightarrow 0}\left(E_{\vec{k}} \pm \xi_{\vec{k}}\right)=\lim _{\vec{k} \rightarrow 0}\left(E_{\vec{k}} \pm \operatorname{sgn}\left(\xi_{\vec{k}}\right)\right)=|\mu|(1 \mp \operatorname{sgn}(\mu)) \tag{14.181}
\end{equation*}
$$

Hence, we have three different behaviors depending on whether $\mu>0$ (the weakpairing regime), $\mu<0$ (the strong-pairing regime), or $\mu=0$.

For $\mu>0$, the small-momentum behavior of $g(\vec{k})$ is

$$
\begin{equation*}
g(k) \simeq-\frac{2|\mu|}{\left(k_{x}+i k_{y}\right) \Delta^{*}}, \quad \text { as } \vec{k} \rightarrow 0 \tag{14.182}
\end{equation*}
$$

The Fourier transform to real space of $g(\vec{k})$ has the long-distance behavior

$$
\begin{equation*}
g(z)=\left(\frac{i \mu}{\pi \Delta^{*}}\right) \frac{1}{z} \tag{14.183}
\end{equation*}
$$

where $z=x+i y$. Thus, in the weak-pairing regime, in which $\mu>0$, the function $g(\vec{x})$ has a power-law behavior and is an analytic function of the complex coordinates. In particular, in this regime the wave function of this superconducting state is a Pfaffian with the same analytic dependence in the fermion coordinates as in the Moore-Read fractional quantum Hall state, Eq. (14.127).

On the other hand, for $\mu<0$, the small-momentum behavior of $g(\vec{k})$ is instead

$$
\begin{equation*}
g(k) \simeq-\frac{\left(k_{x}-i k_{y}\right) A}{a_{0}^{-2}+\vec{k}^{2}} \tag{14.184}
\end{equation*}
$$

where

$$
\begin{equation*}
A=\frac{2|\mu| m^{*} \Delta}{2|\mu|+m^{*}|\Delta|^{2}}, \quad a_{0}=\frac{1}{2|\mu|} \sqrt{\frac{2|\mu|}{m^{*}}+|\Delta|^{2}} \tag{14.185}
\end{equation*}
$$

The form of $g(\vec{k})$ in this regime tells us that its Fourier transform in real space exhibits an exponential decay at separations long compared with the length scale $a_{0}$. In the BCS theory of a superconductor the regime with $\mu<0$ means that the chemical potential lies below the band of single-particle states. In this regime the Cooper pairs behave effectively as bosonic "molecules," and the superconducting state can be legitimately regarded as a Bose-Einstein condensate of these bosons.

### 14.9.2 Topology and the superconducting state

Finally, if $\mu=0$, the amplitudes reach constant values at small momenta, $\left|u_{\vec{k}}\right| \rightarrow$ $1 / 2$ and $\left|v_{\vec{k}}\right| \rightarrow 1 / 2$. In this regime the quasiparticle excitation energy vanishes linearly with the momentum, $E_{\vec{k}} \simeq|\vec{k}||\Delta|$, and hence there is no energy gap! Furthermore, it is easy to see that at $\mu=0$ the function $g(\vec{k})$ becomes

$$
\begin{equation*}
g(\vec{k}) \simeq-\frac{|\vec{k}|}{k_{x}+i k_{y}} \frac{|\Delta|}{\Delta^{*}}, \quad \mu=0 \tag{14.186}
\end{equation*}
$$

which, in real space, has the non-analytic behavior

$$
\begin{equation*}
g(z) \simeq\left(\frac{i|\Delta|}{2 \pi \Delta^{*}}\right) \frac{1}{z|z|} \tag{14.187}
\end{equation*}
$$

The scenario we have presented does not occur for a weak-coupling system and, indeed, a large attractive interaction is needed in order for this phase transition to be reached, which is clearly outside the regime of validity of the BCS theory of superconductivity. The BCS theory describes the superconducting state as an instability of the Fermi surface of the quasiparticles of a Fermi liquid that happens for arbitrarily weak attractive interactions in the Fermi sea (Schrieffer, 1964), and it is accurate only in this weak-coupling regime. In this regime the minimum of the quasiparticle excitation energy occurs at the Fermi surface whose wave vector is $|\vec{k}|=k_{\mathrm{F}}$ (i.e. at the chemical potential or Fermi energy), where the $p_{x}+i p_{y}$ state has a full and isotropic energy gap $\sim|\Delta|$. On the other hand, as the interactions grow stronger the value of the chemical potential $\mu$ (the Fermi energy) begins to decrease (from positive values) and the minimum excitation energy progressively
moves to $\vec{k}=0$. Since the spectrum is gapped both for $\mu>0$ and for $\mu<0$, we must conclude that $\mu=0$ represents a (quantum) phase transition inside the superconducting state.

The weak- and strong-pairing phases, with $\mu>0$ and $\mu<0$, respectively, have different topological properties (Volovik, 1988). The solutions of the BdG equation, Eq. (14.169), are the complex spinors ( $u_{\vec{k}}, v_{\vec{k}}$ ) and obey the normalization $\left|u_{\vec{k}}\right|^{2}+\left|v_{\vec{k}}\right|^{2}=1$. In addition, a smooth change in the phase of both components of the spinor does not change the state. Thus, the solutions to the BdG equation are effectively labeled by two real parameters and can thus be regarded as points on a 2 -sphere $S_{2}$. Therefore, the solutions to the BdG equation are mappings of the momentum space (labeled by $\vec{k}$ ) to the unit sphere $S_{2}$. The three-component real unit vector $\vec{n}_{\vec{k}}$ defined in Eq. (14.170) can be used to parametrize the 2 -sphere $S_{2}$. Since $v_{\vec{k}} \rightarrow 0$ for $|\vec{k}| \rightarrow \infty$ (and, hence, $u_{\vec{k}} \rightarrow 1$ as $|\vec{k}| \rightarrow \infty$ ), we can add the point of infinity to the momentum space, by which means it also becomes topologically equivalent to a 2 -sphere, $S_{2}$.

Therefore, we find that the solutions of the BdG equation are smooth mappings of $S_{2} \mapsto S_{2}$. In Section 7.9 we showed that the mappings of the $S_{2}$ base space (momentum space) to the $S_{2}$ target space are classified by homotopy classes associated with the homotopy group $\pi_{2}\left(S_{2}\right) \cong \mathbb{Z}$. Each topological (homotopy) class is labeled by a topological invariant, the Chern number $\mathcal{Q} \in \mathbb{Z}$ :

$$
\begin{equation*}
\mathcal{Q}=\frac{1}{8 \pi} \int d^{2} k \epsilon_{i j} \epsilon_{a b c} n^{a} \partial^{i} n_{b} \partial^{j} n_{c}=\frac{1}{4 \pi} \int d^{2} k \vec{n} \cdot\left(\partial_{k_{x}} \vec{n} \times \partial_{k_{y}} \vec{n}\right) \tag{14.188}
\end{equation*}
$$

Therefore, the solutions to the BdG equation admit the same classification. For this connection with the Chern number, the $p_{x}+i p_{y}$ superconductor is (at the level of the BdG equation) closely related to the theory of topological insulators (even though it is a superconductor!) discussed in Chapter 16.

In the strong-pairing phase, $\mu<0$ and $\xi_{\vec{k}}=\vec{k}^{2} /\left(2 m^{*}\right)-\mu>0$ for all $\vec{k}$. Hence, in this phase the vector $\vec{n}_{\vec{k}}$ takes values only on the northern hemisphere of the sphere $S_{2}$. Therefore, the solutions of the BdG equation with $\mu<0$ can be smoothly deformed to their value at the North Pole, $\vec{n}_{\vec{k}}=(0,0,1)$ (corresponding to the spinor $\left.\left(u_{\vec{k}}, v_{\vec{k}}\right)=(1,0)\right)$, and belong to the topologically trivial homotopy class (with $\mathcal{Q}=0$ ).

On the other hand, in the weak-pairing phase $\mu>0$ and $\xi_{\vec{k}}$ can take all possible real values, both positive and negative. Hence, for $\mu>0$ the solutions of the BdG equation are non-trivial maps of $S_{2} \mapsto S_{2}$ and have a non-vanishing winding number $\mathcal{Q}=1$ (or -1 ). Since the integer-valued topological invariant $\mathcal{Q}$ cannot be smoothly deformed from 0 to $\pm 1$, the strong- and weak-pairing regimes must correspond to separate phases. For this reason, the weak-pairing phase of the $p_{x}+$ $i p_{y}$ state is identified as a topological superconductor.

### 14.9.3 The half-vortex

The vortex excitations of the $p_{x}+i p_{y}$ state have very interesting properties. The vortices of the strong-pairing phase have similar properties to those of conventional superconductors and will not be discussed here. We will focus instead on the vortices of the weak-pairing phase, which, as we will see, have non-abelian statistics. A half-vortex has been observed experimentally in the superconducting phase of $\mathrm{Sr}_{2} \mathrm{RuO}_{4}$, a quasi-2D system (Jang et al., 2011). For an extensive review of the superconducting properties of $\mathrm{Sr}_{2} \mathrm{RuO}_{4}$ see the work of Mackenzie and Maeno (2003).

In the condensed state the amplitude of the superconducting order parameter $\Delta$ is essentially constant in space. However, the pair field couples to a gauge field as a charge- $2 e$ scalar field. For fields stronger than a critical field, usually called $H_{\mathrm{c} 1}$, the uniform Meissner state is destroyed and the system enters the vortex (or mixed) phase, see e.g. de Gennes (1966). Here we will be interested in the long-distance properties of a superconducting vortex. The p-wave superconducting state has to be in a spin-triplet state. In addition to the orbital dependence of Eq. (14.163), the pair field has also a spin dependence. For a p-wave state the spin state must be symmetric (and hence a triplet). If we retain both the orbital components and the spin components, the pair field has the form

$$
\begin{align*}
\Delta= & e^{i \varphi}\left[d_{x}(|\uparrow \uparrow\rangle+|\downarrow \downarrow\rangle)-i d_{y}(|\uparrow \uparrow\rangle-|\downarrow \downarrow\rangle)\right. \\
& \left.+d_{z}(|\uparrow \downarrow\rangle+|\downarrow \uparrow\rangle)\right]\left(k_{x}-i k_{y}\right) \tag{14.189}
\end{align*}
$$

where we introduced the three-component vector $\vec{d}=\left(d_{x}, d_{y}, d_{z}\right)$ (as in the A phase of superfluid ${ }^{3} \mathrm{He}$, see Leggett (1975)). This order parameter is invariant under a shift of the phase by $\pi, \varphi \mapsto \varphi+\pi$, and a simultaneous inversion of the $\vec{d}$ vector, $\vec{d} \mapsto-\vec{d}$. In other terms, the order parameter involves not a vector but a director (as in the description of nematic liquid crystals (Chaikin and Lubensky, 1995)). Thus, the half-vortex is a topological soliton of this condensed state.

We are interested in a 2D system and we will assume a superconducting state in which the $\vec{d}$ vector lies on the plane and is hence normal to the angular momentum of the pair (this is the A phase). Provided that the $\vec{d}$ vector can rotate in the plane, this symmetry allows this superconducting state to support half-vortex excitations. In a half-vortex, depicted in Fig. 14.4, the superconducting phase $\varphi(\vec{x})$ varies slowly on large circle by $\pi$, provided that the $\vec{d}$ vector also rotates by $180^{\circ}$. This state is equivalent to a fully polarized state in which only the phase of the up component of the spin winds by $2 \pi$. Hence, the half-vortex of this state is equivalent to a full $(2 \pi)$ vortex of a $p_{x}+i p_{y}$ condensate of spinless fermions (Ivanov, 2001; Chung et al., 2007; Vakaryuk and Leggett, 2009).

Let us now discuss the spectrum of quasiparticles in the half-vortex state. Here we will use the equivalent description in terms of spinless fermions in the $p_{x}+i p_{y}$
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-613.jpg?height=754&width=794&top_left_y=198&top_left_x=460)

Figure 14.4 A half-vortex in a $p_{x}+i p_{y}$ superconductor. The arrows represent the local direction of the $\vec{d}$ vector. The shaded area represents the core of the half-vortex with a Majorana zero mode $\chi$.
state with a full $2 \pi$ vortex. Since we are interested only in the properties far from the core of the vortex, where the order parameter must vanish, we will assume that the absolute value of the pair field is essentially constant in space. The core of the vortex will be represented by a small region in which there are no quasiparticles, and hence we take the chemical potential $\mu$ to be large and negative in this region, while everywhere else $\mu$ is positive (since we are in the weak-pairing phase). In the presence of a vortex, at long distances the phase of the order parameter winds by $2 \pi$. In addition to propagating quasiparticle states, whose spectrum obeys the symmetry of Eq. (14.177), in the background of a vortex the BdG equation now has a state with exactly zero energy (a "zero mode"), which in polar coordinates $(r, \phi)$ is the solution of (Read and Green, 2000)

$$
\begin{align*}
\Delta i e^{i \phi}\left(\partial_{r}+\frac{i}{r} \partial_{\phi}\right) v & =\mu u \\
\Delta i e^{-i \phi}\left(\partial_{r}-\frac{i}{r} \partial_{\phi}\right) u & =-\mu v \tag{14.190}
\end{align*}
$$

The explicit form of the (normalizable) zero-mode spinor is

$$
\begin{equation*}
\binom{u(r, \phi)}{v(r, \phi)}=\binom{\frac{1}{\sqrt{i}} e^{i \phi / 2}}{\frac{1}{\sqrt{-i}} e^{-i \phi / 2}} \frac{f(r)}{\sqrt{r}} \tag{14.191}
\end{equation*}
$$

where $f(r)$ is given by

$$
\begin{equation*}
f(r) \propto \exp \left(-\int^{r} d r^{\prime} \frac{\mu\left(r^{\prime}\right)}{|\Delta|}\right) \sim \exp \left(-\frac{\mu}{|\Delta|} r\right) \tag{14.192}
\end{equation*}
$$

In particular, we see that the spinor solution is double-valued, $(u(r, \phi+$ $2 \pi), v(r, \phi+2 \pi))=-(u(r, \phi), v(r, \phi))$. This property follows from global phase invariance. Indeed, under a global transformation of the pair field by a uniform phase $\phi$, the fermions must transform with half of that phase,

$$
\begin{equation*}
\Delta(\vec{r}) \rightarrow e^{i \phi} \Delta(\vec{r}), \quad c(x) \rightarrow e^{i \phi / 2} c(\vec{x}), \quad c^{\dagger}(x) \rightarrow e^{-i \phi / 2} c^{\dagger}(\vec{x}) \tag{14.193}
\end{equation*}
$$

Hence, under a change by $\phi=2 \pi$, the fermions must change sign. Consequently, in a $2 \pi$ vortex the spinor solution must be double-valued.

Thus, in the background of a vortex the quasiparticle has a bound state with exactly zero energy that decays exponentially fast away from the vortex location. While states of fermionic quasiparticles bound to vortices are a common occurrence, such states typically have finite energy. What is special about the topological superconductors is that these fermionic bound states have exactly zero energy and that this is a robust topologically protected feature of this superconducting state (Roy, 2010).

In conclusion, the half-vortex is a topological soliton, a non-trivial collective excitation of the $p_{x}+i p_{y}$ condensate that, as we saw, has a zero-energy fermionic bound state. Topological solitons with fermionic zero modes have been discussed in high-energy physics (Jackiw and Rebbi, 1976; Jackiw and Rossi, 1981; Rajaraman, 1985) and in condensed matter physics in the context of 1D conductors (Heeger et al., 1988). In both cases the topological solitons acquire fractional quantum numbers through the occurrence of fermionic zero modes. We will discuss this problem in Chapter 16.

However, in the case of topological superconductors, these topological solitons, the half-vortices, exhibit more unusual properties, one of them being non-abelian statistics, which we will discuss now. At the root of these differences is the nature of the broken-symmetry state. For example, in the case of the 1D conductors such as polyacetylene ( Su and Schrieffer, 1981), the excitation that carries a zero-energy mode is a soliton of the spontaneously broken $\mathbb{Z}_{2}$ symmetry. The existence of a zero mode then implies that the soliton carries fractional charge $\pm e / 2$. In polyacetylene, a system in which charge is locally and globally conserved, the zero mode is associated with a charged fermion state, which can be either unoccupied (corresponding to a positively charged soliton of charge $+e / 2$ ) or occupied (corresponding to a negatively charged soliton of charge $-e / 2$ ) (Heeger et al., 1988).

In contrast, in the case of superconductors, the quasiparticles are charge-neutral (Majorana) fermions (Kivelson and Rokhsar, 1990). Thus, in a system such as a
$p_{x}+i p_{y}$ superconductor, the zero mode of a vortex cannot be occupied or empty since the excitations have no charge. To see how this works, we will follow the construction of Ivanov (2001). We first observe that, since the quasiparticles of a superconductor are Majorana fermions, the vortex with its fermion bound state must also have a Majorana fermion character. In the low-energy limit, the operator that creates a Majorana quasiparticle in the vortex background is reduced to a self-adjoint (Majorana) fermion operator $\gamma_{i}=\gamma_{i}^{\dagger}$, which is the zero mode of each vortex of a $p_{x}+i p_{y}$ superconductor. Let us consider a more general case in which we have $2 n$ vortices with fixed coordinates, sufficiently far apart from each other, compared with the zero-temperature coherence length $\xi_{0} \sim v_{\mathrm{F}} /|\Delta|$ of the superconducting state, that their fermionic zero modes do not mix with each other and hence with exactly degenerate states. In this limit we have a set of $2 n$ Majorana fermions, $\gamma_{i}$ (with $i=1, \ldots, 2 n$ ), with $\left\{\gamma_{i}, \gamma_{j}\right\}=2 \delta_{i j}$ and zero energy.

We can group the $2 n$ Majorana fermions into $n$ pairs. For each pair of Majorana operators we can define a complex (Dirac) fermion operator satisfying the standard anti-commuting algebra,

$$
\begin{equation*}
\psi_{j}=\frac{1}{2}\left(\gamma_{2 j}+i \gamma_{2 j+1}\right), \quad \psi_{j}^{\dagger}=\frac{1}{2}\left(\gamma_{2 j}-i \gamma_{2 j+1}\right), \quad\left\{\psi_{j}, \psi_{k}^{\dagger}\right\}=\delta_{j k} \tag{14.194}
\end{equation*}
$$

Each complex fermion has two states, $\left|0_{i}\right\rangle$ (empty) and $\left|1_{i}\right\rangle$ (occupied), which span a two-dimensional Hilbert space for each pair of vortices. Notice that the state that is either empty or occupied is shared by two vortices, which can be very far apart from each other; it is not associated with each independent vortex, as is the case in the soliton in polyacetylene. This also means that, associated with each configuration of $2 n$ vortex coordinates, there is a Hilbert space of states of dimension $2^{n-1}$ (the degeneracy) associated with the Majorana fermions. As we saw, the existence of this "topological" Hilbert space is the key ingredient of nonabelian statistics. These are the reasons why topological superconductors as well as non-abelian quantum Hall states are primary candidates to realize schemes of topological quantum computing. In this context, the states $|0\rangle_{i}$ and $|1\rangle_{i}$ can be regarded as topological quantum qubits that are immune to the effects of local perturbations such as disorder, phonons, etc.

### 14.10 Braiding and fusion

We will now discuss the braiding properties of non-abelian quasiparticles. For concreteness we will focus on the half-vortices of the $p_{x}+i p_{y}$ 2D superconductor and of the Moore-Read state. These ideas can be extended to the more general cases. We will see that the braiding properties of the non-abelian quasiparticles are intimately related to the fusion rules they obey.

### 14.10.1 Braiding of half-vortices

The way in which we grouped the $2 n$ Majorana fermions into pairs is clearly arbitrary. Different groupings must correspond to physically identical states. To rearrange one grouping into another grouping of pairs, we must swap vortices around slowly enough that no additional quasiparticle states are created. This process amounts to an adiabatic braiding of the vortex worldlines. Since all groupings must describe the same Hilbert space, the process of swapping Majorana fermions (braids) must be equivalent to a set of unitary operators acting on the $2^{n}$-dimensional Hilbert space. In other words, we can construct a representation of the braid group $\mathrm{B}_{2 n}$ (of $2 n$ "particles") in this space of states.

To this end, let $i=1, \ldots, 2 n$ label the set of vortices (and hence of Majorana fermions) on various locations on the plane. For $2 n$ particles we can define a set of $2 n-1$ elementary particle exchanges $\sigma_{i}(i=1, \ldots, 2 n-1)$. Each operation represents the braiding of a pair of particles. Successive braidings define a natural product of these operations. The braid group is generated by the elementary exchange operators $\sigma_{i}$ (not to be confused with a Pauli matrix!) that satisfy the following algebra (shown in Fig. 14.5):

$$
\begin{align*}
\sigma_{i} \sigma_{j} & =\sigma_{j} \sigma_{i}, & & |i-j|>1  \tag{14.195}\\
\sigma_{i} \sigma_{j} \sigma_{i} & =\sigma_{j} \sigma_{i} \sigma_{j}, & & |i-j|=1 \tag{14.196}
\end{align*}
$$

Since the Majorana fermions anti-commute with each other, we will attach a branch cut to each vortex that will indicate how the different vortices are ordered on the plane (see Fig. 14.6). The phase of the superconducting order parameter is single-valued and jumps by $2 \pi$ as the cut is crossed. This construction is very similar to the Jordan-Wigner transformation discussed in Chapter 8. In this picture, an elementary braiding operation amounts to a rearrangement of the branch cuts,
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-616.jpg?height=428&width=790&top_left_y=1617&top_left_x=460)

Figure 14.5 A schematic depiction of the braid-group relation Eq. (14.196) on the worldlines of three vortices. See the text.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-617.jpg?height=199&width=765&top_left_y=195&top_left_x=470)

Figure 14.6 An elementary braid exchange of two vortices. See the text.
as shown in Fig. 14.6, which leads to a change in the phase of the order parameter of one vortex by $2 \pi$ and of the fermion zero mode by $\pi$. This property tells us that the braid operators $\sigma_{i}$ act on the Majorana zero modes as follows:

$$
\begin{align*}
\sigma_{i}: \gamma_{i} & \mapsto \gamma_{i+1} \\
\sigma_{i}: \gamma_{i+1} & \mapsto-\gamma_{i}  \tag{14.197}\\
\sigma_{i}: \gamma_{j} & \mapsto \gamma_{j}, \quad j \neq i, i+1
\end{align*}
$$

We will now find a representation of the braid operations, $\sigma_{i}$, in the $2^{n}$-dimensional Hilbert space $\mathcal{M}_{2 n}$ of the $2 n$ Majorana zero modes. Using an obvious notation, we will denote by $\tau\left(\sigma_{i}\right) \equiv \tau_{i}$ the operators that act on the Hilbert space $\mathcal{M}_{2 n}$. The operators $\tau_{i}$ will be constructed as a unitary representation of the braid group. Hence the braid operator $\tau$ is required to obey

$$
\begin{equation*}
\tau\left(\sigma_{i}\right) \gamma_{j} \tau\left(\sigma_{i}\right)^{-1}=\tau\left(\sigma_{j}\right) \tag{14.198}
\end{equation*}
$$

for $\tau(\gamma)$ defined by Eq. (14.197). It is easy to check that the following operators satisfy the requirements of the Braid group, Eq. (14.196) (Ivanov, 2001):

$$
\begin{equation*}
\tau\left(\sigma_{i}\right)=e^{\frac{\pi}{4} \gamma_{i+1} \gamma_{i}}=\frac{1}{\sqrt{2}}\left(1+\gamma_{i+1} \gamma_{i}\right) \tag{14.199}
\end{equation*}
$$

This result holds also in the case of the Moore-Read state (Nayak and Wilczek, 1996).

On the other hand, since the braid operators of Eq. (14.199) are bilinear functions of the $2 n$ Majorana fermions, they commute with the fermion parity operator,

$$
\begin{equation*}
P=(-1)^{N_{\mathrm{F}}}, \quad N_{\mathrm{F}}=\sum_{j} \psi_{j}^{\dagger} \psi_{j}=\sum_{j} \frac{1}{2}\left(1+\gamma_{2 j} \gamma_{2 j+1}\right) \tag{14.200}
\end{equation*}
$$

Hence, we can consistently restrict the representation to either the sector with $N_{\mathrm{F}}$ even or the sector with $N_{\mathrm{F}}$ odd. We conclude that the total degeneracy of the states supported by $2 n$ vortices is actually $2^{n-1}$ (instead of $2^{n}$ ). This is also the degeneracy found in the case of the Moore-Read state (Nayak and Wilczek, 1996).

As we have seen, a set of $2 n$ half-vortices of a $p_{x}+i p_{y}$ superconductor supports a finite-dimensional Hilbert space of dimension $2^{n-1}$. This Hilbert space has a topological origin. Indeed, provided that the vortices are far from each other,
this degeneracy is not lifted. Furthermore, all other states are separated from this Hilbert space by a finite energy gap. Thus, physical processes in which the vortices are being braided adiabatically do not mix this Hilbert space with the rest of the states of the system. In addition, this degeneracy is also robust against the effects of disorder, which primarily will lead to the localization of the vortices themselves.

### 14.10.2 Fusion of half-vortices

There is another way to think about this degeneracy, which makes contact with the CFT construction of the states. In the CFT approach we identified the Pfaffian factor with a correlator of Majorana chiral fields in a critical classical 2D Ising model. We also noted that the wave functions for the quasiparticles amount to an insertion of the chiral component of the Ising primary field into the fermion correlators. For historical reasons, and at the risk of confusing the reader with notation, we will denote by $\chi$ the Majorana fermion of the Ising model and by $\sigma$ the Ising primary field. In Eq. (14.139) we gave their fusion rules,

$$
\chi \star \chi=I, \quad \sigma \star \sigma=I+\chi, \quad \sigma \star \chi=\chi
$$

We can see immediately that there is a correspondence between the Ising fusion rules and the properties of the Majorana zero modes of the half-vortices. Indeed, if we identify the Ising primary field $\sigma$ with the insertion of a half-vortex, we see that fusing two half-vortices leads either to a state with an occupied fermion state or to a state with an empty fermion state. Thus we can identify the state $|0\rangle$ with the identity field in the Ising CFT and the state $|1\rangle$ with the Majorana fermion $\chi$ in the Ising CFT. The degeneracy then arises from counting how many ways we can fuse a given set of half-vortices into the identity (so it can have an expectation value). For example, if we have $2 n=8$ vortices our analysis predicts a degeneracy of $2^{4-1}=8$. This is also the number of ways in which eight Ising $\sigma$ primary fields can fuse into the identity field $I$.

This result is part of a general rule. We will see in Chapter 15 that the chiral CFT associated with the chiral sector of the Ising CFT is not precisely the level $k=2$ chiral $\mathrm{SU}(2)$ Wess-Zumino-Witten model, but what is known as the (chiral) coset $\mathrm{SU}(2)_{2} / \mathrm{U}(1)_{2}$. We will also see there that the chiral $\mathrm{SU}(2)_{2}$ WZW CFT has a one-to-one correspondence with the level $k=2 \mathrm{SU}(2)$ Chern-Simons gauge theory. On the other hand, we also know that the observables of the $\mathrm{SU}(2)_{k}$ ChernSimons theory are Wilson loops with quantum number $j=0,1 / 2, \ldots, k / 2$ (where $k / 2$ stands for the integer part of $k / 2$ ). Thus, for $k=2$ only three representations are allowed: (a) the singlet $j=0$ representation denoted by [0], (b) the doublet representation $j=1 / 2$, denoted by [1/2]; and (c) the triplet representation $j=1$,
denoted by [1]. The Wilson loop operators with representations [ $j_{1}$ ] and [ $j_{2}$ ] in the $\mathrm{SU}(2)_{k}$ theory obey the fusion rule

$$
\begin{equation*}
\left[j_{1}\right] \star\left[j_{2}\right]=\left[\left|j_{1}-j_{2}\right|\right]+\cdots+\left[\min \left(j_{1}+j_{2}, k-j_{1}-j_{2}\right)\right] \tag{14.201}
\end{equation*}
$$

Thus, in contrast to the case of the $\mathrm{SU}(2)$ group, for which the upper end of the range would have been $j_{1}+j_{2}$, in $\mathrm{SU}(2)_{k}$ the representations are truncated by the level $k$. Mathematical structures that obey these modified rules are called quantum groups (for a detailed treatment of quantum groups see Fuchs (1992)).

For the case of interest, $\mathrm{SU}(2)_{2}$, the non-trivial fusion rules reduce to

$$
\begin{equation*}
[1 / 2] \star[1 / 2]=[0]+[1], \quad[1 / 2] \star[1]=[1 / 2], \quad[1] \star[1]=[0] \tag{14.202}
\end{equation*}
$$

As we can see, the fusion rules are the same as those of the Ising CFT if we identify the identity primary field $I$ with the singlet representation [0], the Ising primary field $\sigma$ with the doublet representation [1/2], and the Majorana primary field with the representation [1]. However, these two CFTs are not identical since, in addition to the scaling dimensions being generally different, in the Ising CFT each primary field appears once, whereas in $\mathrm{SU}(2)_{2}$ they appear in multiplets (Di Francesco et al., 1997). Below we will discuss a quantum Hall state with $\mathrm{SU}(2)_{2}$ symmetry.

Of course, we want not just the dimensions of the Hilbert spaces but also the wave functions themselves. This requires the computation of the conformal blocks, which do depend on other information such as the scaling dimensions, etc. Nevertheless, the conformal blocks of $\mathrm{SU}(2)_{2}$ are part of this construction. We saw a similar example in our discussion of non-abelian bosonization in Section 7.10, where we considered the case of $\mathrm{SU}(2)_{1}$.

The fusion rules provide a simple pictorial way to compute the dimensions of the topological Hilbert spaces $\mathcal{M}_{2 n}$. For instance, let us suppose that we have a state with $2 n$ insertions of the $\sigma$ field. We can begin to fuse pairs of $\sigma$ fields, then fuse the result of their fusion, and so on until we get to the point at which all fields have fused into the identity field $I$. Only the contribution of such a fusion
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-619.jpg?height=343&width=1007&top_left_y=1688&top_left_x=342)

Figure 14.7 The Bratteli diagram for $\mathrm{SU}(2)_{2}$. The numbers at the vertices are the numbers of ways to fuse into this channel (see the text).
process can yield a non-vanishing expectation value resulting in a non-vanishing wave function. The degeneracy of the Hilbert space is the number of ways in which this fusion can be done. This is depicted in the Bratteli diagram shown in Fig. 14.7 for the case of $\mathrm{SU}(2)_{2}$. The vertical axis of the Bratteli diagram has the list of allowed representations, which for $\mathrm{SU}(2)_{2}$ are [0], $\left[\frac{1}{2}\right]$, and [1] (for the Ising CFT they are $I, \sigma$, and $\chi$ ). If we want to know the dimension of the Hilbert space for, say, ten $\sigma$ fields, we must count the number of paths on the Bratteli diagram (16) that will reach $(10,0)$ starting from $(0,0)$. For $\mathrm{SU}(2)_{2}$ this is just the $2^{n-1}$ result (with $N=2 n$ ).

## 15

## Physics at the edge

In an incompressible quantum fluid, such as the Laughlin state, the fluctuations in the bulk induce fluctuations at the boundary. While the local fluctuations in the bulk are associated with local changes in the density, the fluctuations of the states at the boundary are associated with changes in the shape of the "droplet" of the electron fluid, shown in Fig. 15.1. These "edge waves" are the only gapless excitations of the system. It may seem surprising that an incompressible fluid may have gapless modes at the surface, although this is quite common in conventional fluids such as water! In the FQHE the gaplessness arises from the fact that the geometric edge of the fluid coincides with the locus of points in which the Fermi energy crosses the external potential which confines the fluid. Thus, the boundary of the fluid behaves like a "Fermi surface" and, as we move from the edge and into the bulk, we get deeper and deeper in the Fermi sea of occupied states. Because of the presence of the magnetic field, the edge waves are chiral excitations that move at the drift velocity of the particles at that point. Thus, edge states move only in one direction, which is specified by the magnetic field. The importance of the edge states to the observability of the quantum Hall effect was first emphasized by Halperin (1982). The description of the chiral quantum dynamics of the edge states is due to X. G. Wen (Wen, 1990a, 1990b, 1991b) and M. Stone (Stone, 1991).

### 15.1 Edge states of integer quantum Hall fluids

Let us consider the physics of the edge waves in the context of the simplest system: non-interacting electrons filling up the lowest Landau level $(v=1)$. Strictly speaking, we are discussing the behavior of the edge states in a system with an integer quantum Hall effect (IQHE). However, at least within a mean (or average)-field approximation, the fractional quantum Hall effect can also be regarded as an IQHE of an equivalent system of fermions. We will discuss this point of view (originally
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-622.jpg?height=414&width=690&top_left_y=206&top_left_x=510)

Figure 15.1 The two-dimensional electron-gas (2DEG) droplet in an AlAs-GaAs heterostructure in a perpendicular magnetic field $B$.
due to Jain) in this chapter, where we present the Chern-Simons approach to the FQHE. In this section we follow the methods of Stone (1991).

Let us, once again, consider a set of $N$ electrons that are filling up the lowest Landau level of a system with $N_{\phi}=N$ flux quanta piercing the surface. In the absence of any other forces, the system has uniform density $\langle\rho\rangle=B /(2 \pi)$, if the units are such that $\hbar=c=e=1$. But, if no external forces are present, a system with $N$ electrons in an infinite plane cannot have a fixed density. Furthermore, since we are interested in the physics at the edge, we must assume that the $N$ electrons are constrained to remain within some region of the sample by the action of some external force. In the experimental setting, even in the purest samples there are forces as we examine the system close to the edge. So, we should assume that, in addition to experiencing the uniform magnetic field $B$, the electrons also feel an electrostatic potential $V(\vec{x})$ that keeps them inside the sample. We will consider the simple geometry of an infinite strip. The system has finite width $L_{1}$ along the axis $x_{1}$ and length $L_{2}$ along the axis $x_{2}$, with $L_{2} \gg L_{1}$. We can also assume periodic boundary conditions along $x_{2}$. I will also assume that the potential $V$ varies only along $x_{1}$ and that its variation is so slow that locally it can always be approximated by a linear function of $x_{1}, V\left(x_{1}\right) \approx E x_{1}$. In this geometry, it is natural to use the axial-Landau gauge $A_{1}=0, A_{2}=B x_{1}$.

Let us now expand the second-quantized electron field operators $\psi(\vec{x})$ as a sum over states of the lowest Landau level, namely

$$
\begin{equation*}
\psi\left(x_{1}, x_{2}\right)=\sqrt{\frac{B}{\pi L_{2}}} \sum_{n=-\infty}^{+\infty} a_{n} e^{i k_{n} x_{2}} e^{-\frac{B}{2}\left(x_{1}-k_{n} / B\right)^{2}} \tag{15.1}
\end{equation*}
$$

which satisfies the boundary conditions. The allowed momenta $k_{n}$ are $k_{n}=$ $2 \pi n / L_{2}$. The creation and destruction operators, $a_{n}^{\dagger}$ and $a_{n}$, obey the anticommutation relations

$$
\begin{equation*}
\left\{a_{n}, a_{m}^{\dagger}\right\}=\delta_{n m} \tag{15.2}
\end{equation*}
$$

In the presence of an external potential, the degeneracy of the Landau level is lifted. Thus, in perturbation theory the energy of the lowest, $N=0$, Landau level has a first-order shift

$$
\begin{equation*}
E_{0}(k)=\frac{1}{2} \hbar \omega_{\mathrm{c}}+\langle 0, k| V(x)|0, k\rangle+\cdots \tag{15.3}
\end{equation*}
$$

This shift effectively "lifts" the Landau level in the vicinity of the edge where the potential is acting (see Fig. 15.2). For the particular case of the linear potential, the wave functions are the same as the wave functions in the absence of the potential, but the single-particle energies $E_{0}(k)$ become

$$
\begin{equation*}
E_{0}(k)=\frac{E}{B} k \tag{15.4}
\end{equation*}
$$

with a sign determined by the sign of $B$ (for $V\left(x_{1}\right)$ fixed). Thus, the states near the Fermi energy $E_{\mathrm{F}}$ have momentum $k$ along the edge. The Fermi velocity $v_{\mathrm{F}}$ of these states is

$$
\begin{equation*}
v_{\mathrm{F}}=\frac{\partial E_{0}(k)}{\partial k}=\frac{e}{c} \frac{|\vec{E}|}{|B|} \tag{15.5}
\end{equation*}
$$

which is the drift velocity of a charged particle moving in an external magnetic field that is perpendicular to the plane and in an electric field $\vec{E}=-(\partial V / \partial x) e_{x}$ pointing inwards towards the droplet of electron fluid. Here I have assumed that $B>0$. These states are chiral and move with the drift velocity. Semi-classically we can picture the edge states as electrons that move along skipping orbits along the edge (Halperin, 1982).

This expression is accurate for those states whose energies are close to the Fermi energy, which I have set to zero. Away from the boundaries, the potential is
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-623.jpg?height=476&width=756&top_left_y=1536&top_left_x=472)

Figure 15.2 Lifting of the Landau levels by a confining potential $V\left(x_{1}\right)$ (see the text). For a cylindrical geometry, in the Landau gauge the levels are labeled by their momentum. $E_{\mathrm{F}}$ is the Fermi energy and $\hbar \omega_{\mathrm{c}}$ is the cyclotron energy. Bulk and edge regions of the system are shown.
essentially constant and the Landau level effectively has a degeneracy. The origin of my coordinate system is at the point where the potential crosses the Fermi energy. Thus, far to the left of the crossing point, the density is constant, and to the right of the crossing point there are no particles. It is clear from this picture that it takes a negligible amount of energy to add a particle to the system, but the particle is added to the surface, not to the bulk. The low-energy excitations of the system are local changes of density at the surface, the edge waves, as shown in Fig. 15.3. Notice that, since the number of particles is fixed and since the next Landau level is separated from the ground state by a very large energy gap, a lower density at a point on the surface means that there should be an excess density at some other point of the same surface.

As usual, we are interested only in the excitations with low energy. Here, close to the Fermi energy means close to the surface. Let $j\left(x_{2}\right)$ be the operator which measures the amount of charge localized within some region of size $\Lambda$ of the edge,

$$
\begin{equation*}
j\left(x_{2}\right)=\int_{-\infty}^{+\infty} d x_{1} f_{\Lambda}\left(x_{1}\right) \psi^{\dagger}\left(x_{1}, x_{2}\right) \psi\left(x_{1}, x_{2}\right) \tag{15.6}
\end{equation*}
$$

The cutoff function $f_{\Lambda}\left(x_{1}\right)$ must be chosen in such a way that it is vanishingly small in the region $\left|x_{1}\right| \gg \Lambda$, and the cutoff $\Lambda$ must be larger than the typical amplitude fluctuation of the low-energy states. We will choose the cutoff function to be a Gaussian, $f_{\Lambda}\left(x_{1}\right)=(1 /(\sqrt{2 \pi} \Lambda)) \exp \left(-x_{1}^{2} /\left(2 \Lambda^{2}\right)\right)$.

Since we are using periodic boundary conditions in $x_{2}$, it is convenient to consider the Fourier transform of the operator $j\left(x_{2}\right)$, i.e.

$$
\begin{equation*}
j\left(x_{2}\right)=\sum_{n} e^{-i k_{n} x_{2}} j_{n} \tag{15.7}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-624.jpg?height=540&width=516&top_left_y=1473&top_left_x=602)

Figure 15.3 An excitation of the edge states is a deformation of the incompressible charge fluid resulting in a chiral wave propagating along the edge with fixed direction.

Conversely, we can write

$$
\begin{equation*}
j_{n}=\sum_{m=-\infty}^{+\infty} a_{m+n}^{\dagger} a_{m} e^{-\frac{B}{4} k_{n}^{2}} \tag{15.8}
\end{equation*}
$$

It is apparent that the Gaussian factor $\exp \left(-B k_{n}^{2} / 4\right)$ is negligibly small away from the Fermi surface.

If we ignore the Gaussian factor, the density operator $j_{n}$ coincides with the density operator for a system of fermions in one space dimension that are allowed to move only in one direction. In this case the direction is specified by the sign of the magnetic field $B$. Indeed, the dispersion law $\epsilon(k)=v_{\mathrm{F}} k$, with a Fermi velocity $v_{\mathrm{F}}=E / B$, follows from the Hamiltonian

$$
\begin{equation*}
H=\int d x_{2} \psi_{\mathrm{R}}^{\dagger}\left(x_{2}\right)\left(-i v_{\mathrm{F}} \partial_{2}\right) \psi_{\mathrm{R}}\left(x_{2}\right) \tag{15.9}
\end{equation*}
$$

which governs the dynamics of right-moving chiral fermions in one dimension. Notice that this is precisely the same Hamiltonian as that we found in Chapter 5 when we discussed bosonization.

The results of Chapter 5 enable us to write down the commutation relations obeyed by the operators $j_{n}$. There we found that the commutator of the Fouriertransformed density operators is different from zero due to the presence of a Schwinger term,

$$
\begin{equation*}
\left[j_{n}, j_{m}\right]=-n \delta_{n+m, 0} \tag{15.10}
\end{equation*}
$$

Alternatively, in position space we can write

$$
\begin{equation*}
\left[j\left(x_{2}\right), j\left(x_{2}^{\prime}\right)\right]=-\frac{i}{2 \pi} \partial_{2} \delta\left(x_{2}-x_{2}^{\prime}\right) \tag{15.11}
\end{equation*}
$$

This algebra is known as the level-1 $\mathrm{U}(1)$ chiral Kac-Moody algebra. Wen has shown that the spectrum of the edge states is always determined by an appropriate Kac-Moody algebra. For instance, if the fermions were not fully polarized, spin would have to be included in the dynamics. In that case the relevant algebra is the (level-1) $\mathrm{SU}(2) \mathrm{Kac}-\mathrm{Moody}$ algebra. These results are similar to what we already found in Luttinger liquids (except that the states here are chiral), see Chapter 6.

Stone has also given the following explicit construction of the edge density waves. Let $|0\rangle$ denote the ground state, which corresponds to an undisturbed droplet. Let us define the family of coherent states $\left\{\left|\theta\left(x_{2}\right)\right\rangle\right\}$,

$$
\begin{equation*}
\left|\theta\left(x_{2}\right)\right\rangle=e^{i \int d x_{2} \theta\left(x_{2}\right) j\left(x_{2}\right)}|0\rangle \tag{15.12}
\end{equation*}
$$

which represent coherent excitations of the edge states. Throughout it is assumed that the density operator has been normal-ordered relative to the undisturbed state, namely $j\left(x_{2}\right)|0\rangle \equiv 0$.

We now show that the states $\left|\theta\left(x_{2}\right)\right\rangle$ are eigenstates of the (normal-ordered) density operator $j\left(x_{2}\right)$ :

$$
\begin{equation*}
j\left(x_{2}\right)\left|\theta\left(x_{2}\right)\right\rangle=\frac{1}{2 \pi} \partial_{2} \theta\left(x_{2}\right)\left|\theta\left(x_{2}\right)\right\rangle \tag{15.13}
\end{equation*}
$$

This property can be derived by using the identity

$$
\begin{equation*}
e^{-i \int d x_{2}^{\prime} \theta\left(x_{2}^{\prime}\right) j\left(x_{2}^{\prime}\right)} j\left(x_{2}\right) e^{+i \int d x_{2}^{\prime} \theta\left(x_{2}^{\prime}\right) j\left(x_{2}^{\prime}\right)}=j\left(x_{2}\right)+\frac{1}{2 \pi} \partial_{2} \theta\left(x_{2}\right) \tag{15.14}
\end{equation*}
$$

These states represent local changes in the density. This can be seen from the following argument: the state $\left|\theta\left(x_{2}\right)\right\rangle$ has a local excess of charge equal to $(1 /(2 \pi)) \partial_{2} \theta\left(x_{2}\right)$. From the linearity of the energy-momentum relation we know that an extra number of particles means that the local position of the Fermi level has gone from zero to $\partial_{2} \theta$, which is still much less than the Landau gap. Likewise, the momentum $k$ has changed by the same amount. Since we also saw that, for these states, there is a precise relation between the energy of the state and its location on the axis $x_{1}$, we conclude that this state is in fact a local change of the shape of the droplet. Moreover, at least within the accuracy of the linear approximation for the dispersion relation, these states propagate without deformation, since all the excitations propagate at the same speed $v_{\mathrm{F}}$.

Throughout this discussion we have focused on the states close to the edge. But, as we have already warned the reader, the bulk cannot be decoupled from the edge. In fact, theories of chiral fermions, such as the one we are discussing here, are intrinsically sick. The reason is that, if the linear spectrum is taken literally, this system would not be able to keep track of the conservation of charge once it is coupled to a fluctuating vector potential. Indeed, in one dimension, all the components of the vector potential are longitudinal, since there is no way to "enclose flux inside a line." But it is possible to do it if the line closes on itself, forming a closed curve. This is precisely the case of interest to us. For example, in the gauge $A_{0}=0$, the only component we are left with is the component $A_{\|}$tangent to the curve (the edge). By general arguments of gauge invariance we know that the Hamiltonian for the chiral fermions coupled to the gauge field is obtained by the minimal-coupling procedure, which replaces the derivative $\partial_{2}$ by the covariant derivative $D_{2}=\partial_{2}-i e A_{\|}\left(x_{2}\right)$.

Thus, the Hamiltonian picks up an extra term $H_{\text {gauge }}$ of the form

$$
\begin{equation*}
H_{\text {gauge }}=\int d x_{2} e A_{\|}\left(x_{2}\right) \psi_{\mathrm{R}}^{\dagger}\left(x_{2}\right) \psi\left(x_{2}\right) \tag{15.15}
\end{equation*}
$$

This term shows that the local fluctuations of $A_{\|}\left(x_{2}\right)$ will cause the Fermi level to move up and down. Thus, charge has to "leak in" or "leak out" through the bottom of the Fermi sea. For a theory "without a bottom," such as a relativistic field theory,
this is a disaster. The chiral theories are then said to be sick and to break gauge invariance and to have a gauge anomaly. But, in the problem we are considering, the Fermi sea does have a bottom. It is determined by the Landau level, which acts like a reservoir of particles and redistributes the particles from one point of the edge to another.

The configurations with a non-zero circulation of $A_{\|}$have a very interesting meaning: the circulation of $A_{\|}$on a closed curve such as the edge is just the amount of flux enclosed inside the curve. Thus, the uniform field causes the electrons on edge states to move around the system. A change in the circulation means that flux has been added to or removed from the system. Thus, the addition of one quasihole should cause a jump in the circulation by exactly one flux quantum. The edge states see this extra flux as a change of the position of the Fermi level. This is then interpreted as the generation of a net charge at the edge. For a noninteracting problem, the net charge is equal to $e$. But, for a Laughlin state, it is equal to $e / m$. The extra charge accumulated at the edge is interpreted as a lack of charge conservation; that is, as a gauge anomaly of the theory of the edge states. The precise cancellation of the gauge anomaly of the bulk with the gauge anomaly of the edge, which was first discussed by Wen, is a consequence of the gauge invariance of the system as a whole (Wen, 1991b).

### 15.2 Hydrodynamic theory of the edge states

We will now turn to the more interesting case of the edge states of the fractional quantum Hall states on an open geometry, which we will take to be a disk. The fractional quantum Hall ground states on a disk are unique and have a gap to all excited states. As we saw in the non-interacting case, in general we expect that these states will have a gapless spectrum of excitations localized near the edges of the system. We will call all of these states the edge states.

The necessity for the existence of edge states can be seen by invoking an elegant argument due to Wen that is based on gauge invariance (Wen, 1990b; Wen and Zee, 1992). It goes as follows. Let us consider a 2DEG confined to a finite (but large) region of a sample by a confining potential. Such a system in a quantum Hall state (integer or fractional) is an incompressible fluid since all states in the bulk have a gap that can be made arbitrarily large by turning up the external magnetic field (while keeping the filling fraction of the Landau level fixed). In this situation the action of a weak external electromagnetic perturbation on this charge fluid can only have a net effect on its boundary, leading to slow and long-wavelength changes in its shape such as those shown in Fig. 15.3.

Owing to the incompressibility of the fluid, adiabatically adding or removing some amount of charge from the bulk of the fluid is equivalent to adding
or removing the same amount of charge from the edge. In other words, the whole fluid (bulk plus edge) must conserve charge. We will see below that the local conservation of charge leads to a simple and elegant hydrodynamic theory. More importantly, a fluid with local conservation of charge obeys locally a continuity equation, which in turn means that its electromagnetic response must be gauge-invariant (see Chapter 12).

Let us now imagine that we want to define some region of the fluid as the bulk and the rest as the edge region, as in Fig. 15.2. However, the arguments we gave above tell us that charge cannot be conserved in the bulk or the edge separately, but only in the system as a whole. In other terms, the electromagnetic response of the bulk must violate gauge invariance at the boundary of this region. Similarly, the edge region also violates electromagnetic gauge invariance. However, since the system as a whole must be gauge-invariant, the violations of gauge invariance in the bulk and at the edge must exactly cancel each other out. In the language of quantum field theory, the effective theory of the edge states will turn out to be a chiral system that has a gauge anomaly. We will see that the bulk system will be generally described by an effective gauge theory, namely the Chern-Simons gauge theory, which is not gauge-invariant on systems with an open manifold. However, the anomaly of the edge degrees of freedom is (and must be) equal and opposite to the anomaly of the Chern-Simons theory in the bulk. This requirement is the physical basis of the bulk-edge correspondence in quantum Hall fluids and will be discussed in detail in Section 15.4.

In Section 14.2 we showed that it is possible to give a purely hydrodynamic description of the bulk physics of the fractional quantum Hall states. There is a similar and quite powerful hydrodynamic picture of the edge states. This theory, which is largely due to the work of Wen (1995), whose work we will follow here, gives an essentially universal description of the edge states. A key ingredient of this theory is that the incompressibility of the electron fluid in the bulk forces the existence of a one-to-one correspondence with the physics of the edge states, and that the bulk physics is encoded at the edge. A system with these properties is often referred to as being "holographic" ('t Hooft, 1993; Susskind, 1995).

We will assume that the 2DEG is in a fractional quantum Hall fluid state. This state has a gap to all local excitations and hence it is incompressible. We will further assume that the fluid is uniform and hence that the electron density is constant in the bulk, and that it falls to zero smoothly across the edge over a length scale of the order of the magnetic length, $\ell_{0}$. The latter assumption is not trivial since Coulomb interactions can give rise to a modulation of the density of the 2DEG near the edge. This phenomenon is known as edge reconstruction, and when it happens it can alter the properties of the electron gas near the edge substantially from the properties in the bulk of the system. In what follows we will consider a simplified situation
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-629.jpg?height=571&width=808&top_left_y=194&top_left_x=451)

Figure 15.4 The straight edge. Here $\vec{E}$ is the electric field which keeps the electrons in the droplet and $x$ is the coordinate along the edge.
and, for the sake of clarity, ignore the possible effects of edge reconstruction. An excellent and extensive review of the physics of edge states, particularly on the experiments, is given in Chang (2003).

Since the bulk fluid is incompressible, the low-energy fluctuations at the edge which do not change the total number of particles of the system are equivalent to changes in the shape of the edge. In the thermodynamic limit, namely the regime in which the radius $R$ of the electron droplet is much larger than the magnetic length $\ell_{0}$, there are many closely spaced electronic states close to the edge. As in the noninteracting case, these states are closely spaced and their single-particle energies rise smoothly, with an average slope largely determined by the potential that confines the electrons within the interior of the system. Let $\vec{E}$ be the local electrostatic field created by the confining potential (see Fig. 15.4). Since the electrons are moving in an external magnetic field of magnitude $B$ perpendicular to the sample, there is a drift current $\vec{j}=\sigma_{x y} \hat{z} \times \vec{E}$ flowing (with velocity $v=|\vec{E}| c / B$ ) along the edge, where $\sigma_{x y}=(\nu /(2 \pi)) e^{2} / \hbar$ is the Hall conductance and $v$ is the filling fraction.

Regardless of the nature of the excitations, fermionic for filling factor $v=1$ or generally anyonic for $v \neq 1$, the fluctuations of the edge are made up of large numbers of particle-hole excitations. These coherent states are bosonic and behave similarly to the density fluctuations in a 1D electron fluid, except for the important difference that they are chiral: the direction of propagation is determined by the sign of the perpendicular magnetic field. Thus, the edge excitations are chiral waves that propagate only in one direction at the drift velocity. Let $n_{0}$ be the 2D uniform particle density

$$
\begin{equation*}
n_{0}=\frac{v}{2 \pi \ell_{0}^{2}}, \quad \ell_{0}=\sqrt{\frac{\hbar c}{e B}} \tag{15.16}
\end{equation*}
$$

The 1D density along the straight edge is $\rho(x)=n_{0} h(x)$, where $h(x)$ is the local displacement of the edge (as shown in Fig. 15.4). The density wave is chiral if it obeys the classical equation of motion

$$
\begin{equation*}
\partial_{t} \rho(x, t)-v \partial_{x} \rho(x, t)=0 \tag{15.17}
\end{equation*}
$$

where $v$ is the drift velocity. For small deformations $h(x)$ (compared with the radius $R$ of the system), the external electrostatic field $E$ is uniform, and the total electrostatic energy $H$ (the classical Hamiltonian) stored in this edge distortion is

$$
\begin{equation*}
H=\int d x \frac{1}{2} e h \rho(x) E=\int d x \frac{\pi \hbar v}{v} \rho(x)^{2} \tag{15.18}
\end{equation*}
$$

Let $L=2 \pi R$ be the total length of the edge of the electron droplet. For an isolated system the edge is a simply connected closed curve that acts as a boundary. Hence, the density fluctuation must obey periodic boundary conditions

$$
\begin{equation*}
\rho(x)=\rho(x+L) \tag{15.19}
\end{equation*}
$$

We can now consider the Fourier modes of the edge fluctuation and write

$$
\begin{align*}
\rho(x) & =\frac{1}{\sqrt{L}} \sum_{n=-\infty}^{\infty} \exp \left(i \frac{2 \pi n}{L} x\right)_{\rho_{n}}  \tag{15.20}\\
\rho_{n} & =\frac{1}{\sqrt{L}} \int_{0}^{L} d x \exp \left(-i \frac{2 \pi n}{L} x\right)
\end{align*}
$$

In terms of the Fourier modes the classical Hamiltonian is simply given by

$$
\begin{equation*}
H=\frac{\pi}{v} \hbar v \sum_{n=-\infty}^{\infty} \rho_{n} \rho_{-n} \equiv \frac{2 \pi}{v} \hbar v \sum_{k>0} \rho_{k} \rho_{-k} \tag{15.21}
\end{equation*}
$$

where we introduced the edge momentum labels $k_{n}=2 \pi n / L$. The classical equation of motion of the Fourier density modes is

$$
\begin{equation*}
\partial_{t} \rho_{k}=i v k \rho_{k} \tag{15.22}
\end{equation*}
$$

If we compare this equation with Hamilton's equations of a system with coordinate $q$ and momentum $p$,

$$
\begin{equation*}
\dot{q}=\partial_{p} H, \quad \dot{p}=-\partial_{q} H \tag{15.23}
\end{equation*}
$$

we see that we can identify generalized coordinates $Q_{k}$ and generalized canonical momenta $P_{k}$ by writing

$$
\begin{equation*}
Q_{k} \equiv \rho_{k}, \quad P_{k} \equiv-i \frac{2 \pi}{\nu k} \rho_{-k} \tag{15.24}
\end{equation*}
$$

such that

$$
\begin{align*}
\dot{Q}_{k} & =\frac{\partial H}{\partial P_{k}} \\
\dot{P}_{k} & =-\frac{\partial H}{\partial Q_{k}} \tag{15.25}
\end{align*} \quad \Rightarrow \quad \dot{\rho}_{k}=i v k \rho_{k}
$$

which implies that the classical Hamiltonian is

$$
\begin{equation*}
H=i v \sum_{k>0} Q_{k} P_{k} \tag{15.26}
\end{equation*}
$$

To quantize this system we promote the coordinates and momenta to operators in a Hilbert space, and satisfy the canonical equal-time commutation relations

$$
\begin{equation*}
\left[Q_{k}, P_{k^{\prime}}\right]=i \hbar \delta_{k, k^{\prime}} \tag{15.27}
\end{equation*}
$$

with $k=2 \pi n / L$. Hence, the Fourier modes of the density operators satisfy the commutation relation

$$
\begin{equation*}
\left[\rho_{k}, \rho_{k^{\prime}}\right]=\frac{v}{2 \pi} k \delta_{k+k^{\prime}, 0} \tag{15.28}
\end{equation*}
$$

Hence, even in this more general hydrodynamic theory, the edge-mode operators $\rho_{k}$ still satisfy a chiral $\mathrm{U}(1) \mathrm{Kac}-\mathrm{Moody}$ algebra. We will see shortly that the "level" in general is not equal to 1 except for $v=1$. Similarly, the classical Hamiltonian of Eq. (15.21) is promoted to an operator acting on the Hilbert space of states of the edge modes. The (normal-ordered) quantum Hamiltonian generates the time evolution of the density mode operators $\rho_{k}$ which satisfy the Heisenberg equation

$$
\begin{equation*}
\left[H, \rho_{k}\right]=\hbar v k \rho_{k} \tag{15.29}
\end{equation*}
$$

How do we describe in this picture the excitations that change the total charge of the system? For instance, let's say we want an operator that describes the action of adding an electron at a location $x$ of the edge. We will denote the electron-creation operator by $\psi_{\mathrm{e}}^{\dagger}(x)$ and demand that it satisfies the following commutation relation with the (normal-ordered) local number-density operator $\rho(x)$ :

$$
\begin{equation*}
\left[\rho(x), \psi_{e}^{\dagger}\left(x^{\prime}\right)\right]=\delta\left(x-x^{\prime}\right) \psi_{\mathrm{e}}^{\dagger}\left(x^{\prime}\right) \tag{15.30}
\end{equation*}
$$

But we already know how to do this using (abelian) bosonization! (See Chapters 5 and 6.) We represent the Kac-Moody current (and density) field $\rho(x)$ in terms of a Bose (scalar) field $\phi(x)$,

$$
\begin{equation*}
\rho(x)=\frac{1}{2 \pi} \partial_{x} \phi(x) \tag{15.31}
\end{equation*}
$$

where we have assumed a normalization for future convenience. The density operator $\rho(x)$ has been assumed to be normal-ordered with respect to an edge state without excitations (the ground state) of an isolated 2DEG. Thus, if the bulk state
of a 2D electron gas has the precise number of electrons to satisfy exactly the condition that the filling factor is $v=1 / m$, then the normal-ordered total charge of its edge states, measured in units of the electron charge $e$, is exactly zero:

$$
\begin{equation*}
Q=\int_{0}^{L} d x \rho(x)=0 \tag{15.32}
\end{equation*}
$$

This also implies that, since the normal-ordered density of the edge states of an isolated 2DEG obeys periodic boundary conditions, Eq. (15.19), then the chiral boson $\phi(x)$ of an isolated 2DEG also obeys periodic boundary conditions,

$$
\begin{equation*}
\phi(x+L)=\phi(x) \tag{15.33}
\end{equation*}
$$

With these assumptions, the electron operator $\psi_{\mathrm{e}}(x)$ has the boson representation

$$
\begin{equation*}
\psi_{\mathrm{e}}(x) \sim e^{\frac{i}{v} \phi(x)} \tag{15.34}
\end{equation*}
$$

Using the methods we discussed in Chapters 5 and 6, we find that the operators of Eq. (15.34) satisfy the algebra

$$
\begin{equation*}
\psi_{\mathrm{e}}(x) \psi_{\mathrm{e}}\left(x^{\prime}\right)=e^{i \frac{\pi}{v}} \psi_{\mathrm{e}}\left(x^{\prime}\right) \psi_{\mathrm{e}}(x) \tag{15.35}
\end{equation*}
$$

Thus, the operator $\psi_{\mathrm{e}}(x)$ obeys fermionic anticommutation relations only for the filling factor $v=1 / m$ where $m$ is an odd integer:

$$
\begin{equation*}
v=\frac{1}{m} \quad \Rightarrow \quad\left\{\psi_{\mathrm{e}}(x), \psi_{\mathrm{e}}\left(x^{\prime}\right)\right\}=0 \tag{15.36}
\end{equation*}
$$

In contrast, for $m$ even the operator $\psi_{\mathrm{e}}(x)$ represents a boson. We will see that this corresponds to the theory of the edge states of bosonic Laughlin states at filling factor $v=1 / \mathrm{m}$.

We can now relate the scalar field $\phi(x)$ to the edge modes and to the generalized coordinates $Q_{k}$ and canonical momenta $P_{k}$. After a Fourier transform we find

$$
\begin{equation*}
Q_{k}=i \frac{k}{2 \pi} \phi_{k}, \quad P_{k}=-\frac{1}{v} \phi_{k} \tag{15.37}
\end{equation*}
$$

Thus, we find that the Fourier modes of the scalar field satisfy the equal-time commutators

$$
\begin{equation*}
\left[\phi_{k}, \phi_{-k^{\prime}}\right]=i v \delta_{k, k^{\prime}} \tag{15.38}
\end{equation*}
$$

and that the Fourier modes $\phi_{k}$ obey chiral equations of motion (as expected) of the form

$$
\begin{equation*}
\dot{\phi}_{k}=i v k \phi_{k} \tag{15.39}
\end{equation*}
$$

Therefore $\phi(x)$ is a free chiral scalar field whose Hamiltonian (in position space) is (after we set $\hbar=1$, as we will do from now on)

$$
\begin{equation*}
H=\int d x \frac{v}{4 \pi v}\left(\partial_{x} \phi\right)^{2} \tag{15.40}
\end{equation*}
$$

and the associated Lagrangian density $\mathcal{L}$ of the chiral boson is

$$
\begin{equation*}
\mathcal{L}=\frac{m}{4 \pi}\left[\partial_{t} \phi \partial_{x} \phi-v\left(\partial_{x} \phi\right)^{2}\right] \tag{15.41}
\end{equation*}
$$

where we used the fact that $v=1 / m$.
So far we have ignored the effects of interactions on the edge states. Since these states are chiral, and as such can propagate only in a direction fixed by the magnetic field, backscattering processes arising from either electron-electron interactions or localized impurities are forbidden. Thus, the incompressible fluid simply skirts about the location of the impurity without changing the direction of propagation of the edge excitations. This leaves forward-scattering processes as the only allowed interactions. However, as we saw in our discussion of the conventional Luttinger liquid in Chapter 6, forward-scattering processes merely change the velocity of propagation and do not change the scaling dimensions of the operators. In the present context, an interaction term for the edge states becomes

$$
\begin{align*}
H_{\mathrm{int}} & =\frac{1}{2} \int d x \int d x^{\prime} \rho(x) V\left(x-x^{\prime}\right) \rho\left(x^{\prime}\right) \\
& =\frac{1}{8 \pi^{2}} \int d x \int d x^{\prime} \partial_{x} \phi(x) V\left(x-x^{\prime}\right) \partial_{x^{\prime}} \phi\left(x^{\prime}\right) \tag{15.42}
\end{align*}
$$

For short-range interactions, with forward-scattering coupling constant $g$, the only effect is a finite renormalization of the velocity,

$$
\begin{equation*}
v_{\mathrm{eff}}=v+\frac{g}{2 \pi} \tag{15.43}
\end{equation*}
$$

Thus, for short-range interactions the excitations of the edge modes have an energy $\omega(k)=v_{\text {eff }} k$.

On the other hand, in the case of Coulomb interactions, the electrons are coupled by the singular potential $V\left(x-x^{\prime}\right)=e^{2} /\left|x-x^{\prime}\right|$. The Fourier transform at small $k$ of this interaction potential is $V(k)=-e^{2} \ln \left(|k| \ell_{0}\right)+\cdots$. As in the case of short-range interactions, the only effect of Coulomb interactions for chiral fermions is also a renormalization of the excitation energy, albeit with the singular form $\omega(k)=-\left(e^{2} /(2 \pi)\right) k \ln \left(|k| \ell_{0}\right)$. At any rate, even these interactions cannot open a gap in a chiral system, since backscattering processes are not allowed. This feature is the key to the robustness of the edge states. We will see below that, while edge reconstructions may complicate the picture, they do not alter this basic central fact.

Hence, the edge states of a fractional quantum Hall fluid constitute a chiral Luttinger liquid. The scalar field $\phi(x)$ is the chiral (right-moving) half, $\phi_{\mathrm{R}}$, of the conventional scalar field (see Chapter 6). In what follows we will denote by $\phi(x)$ the right-moving (chiral) field. We showed in Eq. (6.121) that the propagator of the chiral boson is (with a different normalization of the scalar field)

$$
\begin{equation*}
\langle T \phi(x, t) \phi(0,0)\rangle=-v \ln \left(\frac{x-v t+i \epsilon}{a_{0}}\right) \tag{15.44}
\end{equation*}
$$

where $T$ denotes time ordering, $a_{0}$ is a short-distance cutoff, and $\epsilon \rightarrow 0^{+}$. Similarly, the electron propagator is

$$
\begin{align*}
G_{\mathrm{F}}(x, t) & =\left\langle T \psi_{\mathrm{e}}^{\dagger}(x, t) \psi_{\mathrm{e}}(0,0)\right\rangle \\
& =\left\langle T e^{-\frac{i}{v} \phi(x, t)} e^{\frac{i}{v} \phi(0,0)}\right\rangle \\
& =e^{\frac{1}{v^{2}}\langle T \phi(x, t) \phi(0,0)\rangle} \\
& \propto \frac{\text { constant }}{(x-v t)^{1 / v}} \tag{15.45}
\end{align*}
$$

(where the $i \epsilon$ has been omitted) up to a prefactor that oscillates with the "Fermi wave vector" of the edge, namely the characteristic average momentum of the states near the edge determined by the location of the edge and the electrostatic confining potential.

Thus, for the edge states of the Laughlin states we find that the electron propagator is

$$
\begin{equation*}
G_{\mathrm{F}}(x, t)=\frac{\text { constant }}{(x-v t)^{m}} \tag{15.46}
\end{equation*}
$$

This propagator is only a function of $x-v t$ and hence it is explicitly chiral. It clearly obeys the condition of being odd (antisymmetric) under the exchange of the coordinates of the electron operators, $x \leftrightarrow-x$ and $t \leftrightarrow-t$,

$$
\begin{equation*}
G_{\mathrm{F}}(x, t)=-G_{\mathrm{F}}(-x,-t) \tag{15.47}
\end{equation*}
$$

as required by the Pauli principle, only if $m$ is an odd integer. On the other hand, the analytic structure is not that of a free-fermion system. Indeed, this propagator reduces to a simple pole of the argument only for the case of the integer Hall effect, for which it reduces to the free-field chiral fermion propagator. This analytic structure with a multiple pole (of order $m$ ) is a direct manifestation of the strongly correlated nature of the 2D electron fluid in a large magnetic field.

In this hydrodynamic theory we have assumed all along that the incompressible fluid has a unique edge with natural properties. The results of this quantized theory are telling us that, without assuming any additional structure, a fractional quantum

Hall state with a single edge can exist only for the Laughlin states at $v=1 / m$. We conclude that for the Laughlin states the electron operator at the edge is given by (up to a normalization)

$$
\begin{equation*}
\psi_{\mathrm{e}}(x)=e^{i m \phi(x)}, \quad \text { for } v=\frac{1}{m} \tag{15.48}
\end{equation*}
$$

Let us consider now a process by which we either add an electron to the 2DEG or remove an electron from the 2DEG. Clearly, in this process the total number of electrons has been changed. Since the bulk is incompressible and uniform, the removal (or addition) of an electron from the bulk must become the same as removal (or addition) of an electron from the edge of the fluid. Since the local edge density operator $\rho(x)$ was assumed to be normal-ordered with respect to the ground state of the 2 DEG with a number of electrons fixed precisely at $v=1 / \mathrm{m}$, this implies that, if $n_{\mathrm{e}}$ electrons are added to the bulk (or removed), the total charge at the edge must now be changed by $n_{\mathrm{e}}$ units,

$$
\begin{equation*}
n_{\mathrm{e}}=\int_{0}^{L} d x \rho(x)=\frac{1}{2 \pi}(\phi(L)-\phi(0)) \tag{15.49}
\end{equation*}
$$

This result tells us that a change in the number of electrons in the bulk (in the same fractional quantum Hall state) leads to a change in the boundary conditions of the chiral boson, which now become "twisted,"

$$
\begin{equation*}
\phi(x+L)-\phi(x)=2 \pi n_{\mathrm{e}} \tag{15.50}
\end{equation*}
$$

This means that the theory of the edge states is a chiral compactified boson with compactification radius $R=1$ (not to be confused with the radius of the fluid droplet!).

As we saw in Chapter 13, the elementary excitations of a fractional quantum Hall fluid in a Laughlin state are not electrons but vortices of the charged fluid with fractional charge $\pm e / m$ and fractional braiding statistics $\delta=\pi / m$. Since we can interact with the 2DEG only in a manner that either does not change the total number of electrons or changes it by an integer number, we can produce or destroy these vortices only in groups of $m$ of them. Nonetheless, since the vortices have very-short-range interactions with each other, the $m$ vortices in each of these groups are not bound to each other but are (qualitatively speaking) essentially free. Since the bulk is gapped, these vortex excitations can only become "light" (gapless) at the edge where the energy gap collapses. Therefore, there should be gapless edge excitations. However, these edge excitations are not arbitrary but the projection at the edge of the bulk state.

This line of argument tells us that $m$ vortex excitations must at the edge coalesce (or fuse) into an electron operator. The unique choice for the quasiparticle (vortex)creation operator at the edge of a Laughlin state that satisfies this condition is

$$
\begin{equation*}
\psi_{\mathrm{qp}}(x) \propto e^{i \phi(x)} \tag{15.51}
\end{equation*}
$$

Indeed, $m$ such quasiparticles fuse into an electron operator! Moreover, the commutator of the quasiparticle operator with the local density $\rho(x)$ is (for $v=$ $1 / m$ )

$$
\begin{equation*}
\left[\rho(x), \psi_{\mathrm{qp}}^{\dagger}\left(x^{\prime}\right)\right]=\frac{1}{m} \delta\left(x-x^{\prime}\right) \psi_{\mathrm{qp}}^{\dagger}\left(x^{\prime}\right) \tag{15.52}
\end{equation*}
$$

Thus, the quasiparticle charge operator creates an excitation of charge $1 / m$ (in units of the electron charge $e$ ).

To determine the statistics of this excitation, we compute the propagator of the quasiparticle operator:

$$
\begin{equation*}
\left\langle T \psi_{\mathrm{qp}}^{\dagger}(x, t) \psi_{\mathrm{qp}}(0,0)\right\rangle=e^{\langle T \phi(x, t) \phi(0,0)\rangle}=\frac{\text { constant }}{(x-v t)^{1 / m}} \tag{15.53}
\end{equation*}
$$

In contrast with the case of the electron propagator, which has a pole of order $m$ (see Eq. (15.46)), the quasiparticle propagator of Eq. (15.53) has a branch-cut singularity with exponent $1 / m$. Consequently, under an exchange of the quasiparticle coordinates, which amounts to setting $x \rightarrow-x$ and $t \rightarrow-t$, the quasiparticle propagator changes by a phase factor,

$$
\begin{equation*}
\left\langle T \psi_{\mathrm{qp}}^{\dagger}(-x,-t) \psi_{\mathrm{qp}}(0,0)\right\rangle \rightarrow e^{ \pm i \frac{\pi}{m}}\left\langle T \psi_{\mathrm{qp}}^{\dagger}(x, t) \psi_{\mathrm{qp}}(0,0)\right\rangle \tag{15.54}
\end{equation*}
$$

Thus, the quasiparticles (and quasiholes) are anyons with statistical angle $\delta=$ $\pi / m$, as expected.

These results imply that we should regard the edge states as a rational chiral conformal field theory (RCFT). In Sections 7.12 and 14.6 we defined an RCFT as a CFT with a finite number of primary fields. The compactified chiral boson is an example of a rational CFT. Why do we have a finite number of primary fields in this case? The reason is that the compactification condition implies that the only admissible operators in this theory must be invariant under the global shift $\phi \mapsto$ $\phi+2 \pi$ (since $R=1$ ). The operators that satisfy this condition are the chiral vertex operators $V_{n}(x)$,

$$
\begin{equation*}
V_{n}(x)=e^{i n \phi(x)} \tag{15.55}
\end{equation*}
$$

where $\phi(x)$ is the chiral boson, since they are all invariant under a phase shift by $2 \pi$,

$$
\begin{equation*}
V_{n}(x) \mapsto V_{n}(x), \quad \text { as } \phi(x) \mapsto \phi(x)+2 \pi \tag{15.56}
\end{equation*}
$$

The electron operator, which, as we saw, satisfies this condition, is just the operator $V_{m}(x)$.

The chiral vertex operators $V_{n}(x)$ with $1 \leq n<m$ have the special property that, in addition to satisfying the compactification condition, they are local with respect to the electron operator, i.e. they commute with the electron operator. However, they are non-local with respect to each other. Indeed, a correlator in which the operators $V_{n}$ and $V_{n^{\prime}}$ are present has a branch cut attached to each of their coordinates. Under a monodromy, namely a smooth displacement of the coordinate of one vertex operator around that of the other one along the closed contour shown in Fig. 15.5, which as we saw is equivalent to a double braid, the correlator changes by the phase factor $\exp \left(i 2 \pi n n^{\prime} / m\right)$. Hence $V_{n}$ is single-valued with respect to $V_{m}=\psi_{\mathrm{e}}$ but not with respect to the other operators.

On the other hand, all operators with $n=l m$ can be regarded as being equivalent to the creation (or removal) of $l$ electrons (with their associated fluxes), which does not change the state, i.e. the filling fraction. Therefore we must consider only chiral vertex operators with "charge" $n$ modulo an integer (or zero) number of electrons. Thus, these conditions amount to restricting the set of distinct primaries to being the set $\left\{V_{n}\right\}$ with $0 \leq n<m$, which has $m$ primary fields, $m$ being the number of linearly independent ground states of the bulk 2DEG on a torus. In the language of CFT what we have done is define an extended or chiral algebra with respect to the electron operator (Moore and Read, 1991).
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-637.jpg?height=701&width=766&top_left_y=1331&top_left_x=465)

Figure 15.5 The chiral vertex operators, which create the excitations at the edge, transform non-trivially under a monodromy. The broken lines are branch cuts.

Therefore, the integer $m$ can be identified with the "level" of the Kac-Moody algebra which restricts the tower of allowed primaries (representations). We will say that the edge state of the $v=1 / m$ Laughlin state is a $\mathrm{U}(1)_{m}$ compactified chiral boson CFT. The $m$ primary fields of this chiral CFT, the chiral vertex operators $V_{n}$, have scaling dimensions

$$
\begin{equation*}
\Delta_{n}=\frac{n^{2}}{2 m} \tag{15.57}
\end{equation*}
$$

with a conformal spin equal to the scaling dimension. Thus, the electron operator has scaling dimension $\Delta_{\mathrm{e}}=\Delta_{m}=m / 2$, while the "fundamental" quasiparticle, $V_{1}$, has scaling dimension $\Delta_{\text {qp }}=\Delta_{1}=1 /(2 m)$. We will see below that there is duality transformation relating the electron and the quasiparticle.

### 15.3 Edges of general abelian quantum Hall states

The hydrodynamic theory of the preceding section describes only the edge states of the Laughlin fractional quantum Hall states. A theory of wider applicability has to take into account the different character of these more general states. We have already discussed the construction of these bulk states in Chapter 14. We will see below that more general fractional quantum Hall states require that more degrees of freedom be included in the description of the edge. Thus, in addition to the edge degree of freedom we used to describe the Laughlin states, which we will call the charge mode, we will need to include in the description one or more neutral modes. While the physical origin of the neutral modes is transparent in the simple edges of multi-component fluids, its appearance in the case of one-component fluids is connected with the hierarchical descriptions of the bulk states. With variants, this is true in all the theories of the edge states.

Two simple and interesting examples of states for which the simple edge description fails are the Jain states at filling fractions $v=2 / 5$ and $v=2 / 3$. As in the preceding section, here we will follow Wen's approach (Wen, 1995), which is based on the Haldane-Halperin hierarchy. An alternative picture has been proposed by López and Fradkin $(1999,2001)$.

We will begin with the $v=2 / 5$ case. In the Haldane-Halperin hierarchy construction, the $v=2 / 5$ state is described as a fractional quantum Hall condensate of quasiparticles of the $v=1 / 3$ Laughlin state. The $v=2 / 5$ state has a larger electronic density than that of the "parent" $v=1 / 3$ Laughlin state. Suppose we have a 2DEG with an overall density close to what is needed for the $v=2 / 5$ state to be the ground state. Although deep in the bulk the density is constant, as the edge is approached the effects of the rising electrostatic potential that keeps the 2DEG inside the sample become more pronounced. In particular, the potential gives rise
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-639.jpg?height=512&width=1221&top_left_y=186&top_left_x=242)

Figure 15.6 (a) Edge and bulk structure of the $\nu=2 / 5$ state with its copropagating chiral edge states. (b) The density profile of the $v=2 / 5$ state.
to a lowering (as gradual as possible) of the electron density, so much so that in some outlying areas of the sample the density is that of the parent $v=1 / 3$ state. Thus, the system tends to "phase separate" into an interior region with a filling fraction of $v=2 / 5$ and an exterior region with filling fraction $v=1 / 3$.

For a rotationally invariant system we thus get a situation such as the one depicted in Fig. 15.6. The 2DEG acquires a layered structure, with an inner droplet (of radius $r_{2}$ ) containing the $v=2 / 5$ state, an annular region (between $r_{2}$ and $r_{1}$ ) with a $v=1 / 3$ state, and the exterior of the sample $\left(r>r_{1}\right)$ labeled by $v=0$. We will picture the $v=2 / 5$ state as a $v=1 / 15$ condensate on top of a $v=1 / 3$ state. For $\left|r_{1}-r_{2}\right| \gg \ell_{0}$ the regions of the sample occupied by the bulk $v=1 / 3$ and $v=2 / 5$ states are macroscopic in size and can be regarded as being in the thermodynamic limit. The "interfaces" between the $\nu=2 / 5$ and $\mu=1 / 3$ regions and between the $v=1 / 3$ region and the exterior of the sample (" $v=0$ ") are the edge states. We will assume that the radial width of each interface (edge) is of the order of the magnetic length, $\ell_{0}$, and hence infinitesimally small compared with the radii $r_{1}$ and $r_{2}$ as well as with $\left|r_{1}-r_{2}\right|$. Since the 2DEG in each region is in an incompressible state, only the fluctuations of the charge densities in the edges (interfaces) have low-energy excitations (as in the Laughlin states).

The $v=2 / 3$ fractional quantum Hall state also has a "layered" structure. In the Haldane-Halperin hierarchy the $v=2 / 3$ state is a $v=1 / 3$ Laughlin condensate of holes of the integer quantum Hall state at $v=1$, i.e. it is the particle-hole version of the $v=1 / 3$ Laughlin state. For a fixed orientation of the perpendicular magnetic field $B$, this picture is possible if the outer region is the "parent" $v=1$ state and the inner region is viewed as a $v=-1 / 3$ state, a Laughlin state of holes. This leads to a density profile and edge structure for $v=2 / 3$ as shown
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-640.jpg?height=502&width=1222&top_left_y=184&top_left_x=244)

Figure 15.7 (a) Edge and bulk structure of the $v=2 / 3$ state with its counterpropagating chiral edge states. (b) The density profile of the $v=2 / 3$ state. The bulk $v=2 / 3$ state is being described as a $v=-1 / 3$ Laughlin state of holes of the full Landau level.
in Fig. 15.7, with a density that has a non-monotonic dependence on the radial coordinate.

The main (and essentially only) difference between the $v=2 / 3$ case and the $v=2 / 5$ state is that we now must have two counter-propagating modes. Thus, in the $v=2 / 3$ case, the effective electric fields have opposite signs, $\operatorname{sgn} E_{1}^{*}=$ $-\operatorname{sgn} E_{2}^{*}$ (to accommodate the non-monotonic radial dependence of the density), and the edge modes have also velocities with opposite signs, $\operatorname{sgn} v_{1}=-\operatorname{sgn} v_{2}$. Keeping in mind this important difference, we can give a similar description for both (and many other) states.

Let $\rho_{I, k}$ (with $I=1,2$ ) describe the Fourier modes of momentum $k$ of the density fluctuations of the two edges,

$$
\begin{equation*}
\rho_{I, k}=\frac{v_{I}}{2 \pi \ell_{0}^{2}} h_{I} \tag{15.58}
\end{equation*}
$$

where $h_{I}$ is the local displacement of each edge. For each edge these Fourier modes obey a $\mathrm{U}(1)$ Kac-Moody algebra of the form (with $I, J=1,2$ )

$$
\begin{equation*}
\left[\rho_{I, k}, \rho_{J, k^{\prime}}\right]=\frac{\nu_{I}}{2 \pi} k \delta_{I J} \delta_{k+k^{\prime}, 0} \tag{15.59}
\end{equation*}
$$

If the edges are far apart no inter-edge interactions are possible. In this limit, the Hamiltonian of each edge is

$$
\begin{equation*}
H=2 \pi \sum_{I=1,2} \sum_{k>0} \frac{v_{I}}{v_{I}} \rho_{I, k} \rho_{I,-k} \tag{15.60}
\end{equation*}
$$

where $v_{I}$ are the velocities of the two edge modes. For the case of $v=2 / 5$, the effective electrostatic field $E_{I}^{*}$ that develops at each interface that separates two
incompressible bulk states has the same direction (inwards) as the external electric field which keeps the 2DEG inside the sample. Hence, the two edge modes propagate in the same direction, and the signs of the two velocities are the same, $v_{1}>0$ and $v_{2}>0$, with $v_{I}=E_{I}^{*} c / B$. The spectrum of the Hamiltonian Eq. (15.60) is positive (bounded from below) if $v_{I} / v_{I}>0$, which requires that $v_{I}>0$. For $v=2 / 3$ the edge velocities have opposite signs. The Hamiltonian is nevertheless positive, since in this description the inner region has a negative filling factor, $v=-1 / 3$. In what follows we will assume that all intra-edge interactions have been taken into account in the magnitude of the renormalized velocities.

We can now use abelian bosonization and introduce two chiral bosons (scalar fields) $\phi_{I}$ (again with $I=1,2$ ) to parametrize the edge fluctuations,

$$
\begin{equation*}
\rho_{I}(x)=\frac{1}{2 \pi} \partial_{x} \phi_{I}(x) \tag{15.61}
\end{equation*}
$$

and to define an electron operator $\psi_{\mathrm{e}, I}(x)$ for each edge $I$,

$$
\begin{equation*}
\psi_{\mathrm{e}, I}(x) \sim e^{\frac{i}{v_{I}} \phi_{I}(x)} \tag{15.62}
\end{equation*}
$$

The electron propagators of these so-far decoupled edges are

$$
\begin{equation*}
\left\langle T \psi_{\mathrm{e}, I}(x, t) \psi_{\mathrm{e}, I}^{\dagger}(0,0)\right\rangle=\frac{e^{i k_{I} x}}{\left(x-v_{I} t\right)^{1 /\left|\nu_{I}\right|}} \tag{15.63}
\end{equation*}
$$

The electron states on each edge have a characteristic momentum, the Fermi wave vector $k_{I}=r_{I} /\left(2 \ell_{0}^{2}\right)$.

Let us now consider the effects of possible inter-edge interactions. As the edges approach each other, while keeping the inter-edge distance large enough for it to make sense for the intervening region to be regarded as a bulk state, density-density interactions (Coulomb for long-range forces) become increasingly important. Here we will consider for simplicity the case of short-range translation-invariant interactions whose strength is parametrized by the positive-definite and symmetric matrix of coupling constants $V_{I J}$,

$$
\begin{equation*}
H_{\text {inter-edge }}=2 \pi \sum_{I, J} \sum_{k>0} V_{I J} \rho_{I, k} \rho_{J,-k} \tag{15.64}
\end{equation*}
$$

which, using the language of the Luttinger model discussed in Chapter 6, describes only forward-scattering processes. It turns out that for a translationally invariant system no other inter-edge interactions are allowed. We may wonder whether this system may have processes that open energy gaps. In the case of co-propagating edges backscattering processes are simply forbidden, since the states have the same chirality. On the other hand, in the case of counter-propagating states, although backscattering processes can now exist, processes that can open energy gaps are forbidden by momentum conservation. For the same reason electron-tunneling (and
quasiparticle-tunneling) processes are not allowed either. The situation becomes more involved (and richer) in the presence of disorder (Kane et al., 1994). So, up to irrelevant operators, the only allowed interactions have the Luttinger form of Eq. (15.64). An exception to this rule is the case of two 2DEGs separated by a barrier. In this case there is a value of the electron density (the Fermi energy) for which the two oppositely propagating edge states have zero momentum and a gap may open up.

We have thus reduced the problem to a system of coupled chiral Luttinger liquids. In Chapter 6 we discussed the theory of the 1D Luttinger fluids. The problem of coupled edge states is a version of that problem and is solved by the same methods. We will not reproduce these calculations here because they are similar to the Bogoliubov transformations that we used in Chapter 6 (details can be found in Wen (1995)). What matters to us is the main result of these calculations, namely that the only effect of inter-edge interactions is a renormalization of the velocities of the edge modes. However, neither the number of edge states nor their chiralities can be changed by the interactions. We will see in the next section that the chirality of the edge modes has a topological origin. Clearly, this description is generic and can be applied to more diverse systems such as bilayers and partially polarized states as well (among many others).

### 15.4 The bulk-edge correspondence

We will now discuss in detail the connection between the edge states and the properties of the bulk quantum Hall fluid. We will see that there is a one-to-one correspondence between the universal properties of the bulk incompressible fluid and the physics of its edge states (Wen, 1990a, 1991a). In Chapters 13 and 14 we presented in some detail a theory of the bulk fractional quantum Hall states. There we saw that the robust properties (i.e. those which are independent of microscopic details) of the incompressible fluid are describable in terms of an effective-field theory that is a Chern-Simons gauge theory. Furthermore, the Chern-Simons gauge theory is a topological field theory. Its observables are Wilson loop operators carrying the quantum numbers of the representations of the gauge group, whose expectation values are topological invariants. Thus the bulk fractional quantum Hall states are topological fluids. On the other hand, in the preceding section we saw that the edge states of these incompressible topological fluids in open geometries are chiral and scale-invariant 1D systems. In other terms, the edge states are 1D chiral quantum critical systems. As such they are not only scale-invariant but also conformally invariant. We will now see that these universal descriptions of the bulk and the edge are two sides of the same coin.

We will begin by considering a generic effective theory of an abelian fractional quantum Hall state of a possibly multi-component fluid. Let $\mathcal{A}_{\mu I}$ be a set of $n$
$\mathrm{U}(1)$ fields of a hydrodynamic description of a fractional quantum Hall state (as discussed in Chapter 13) with the effective Lagrangian density (Wen and Zee, 1992)

$$
\begin{equation*}
\mathcal{L}=-\frac{1}{4 \pi} K_{I J} \epsilon^{\mu \nu \lambda} \mathcal{A}_{\mu I} \partial_{\nu} \mathcal{A}_{\lambda J}-\frac{e}{2 \pi} t_{I} \epsilon^{\mu \nu \lambda} A_{\mu I} \partial_{\nu} \mathcal{A}_{\lambda J} \tag{15.65}
\end{equation*}
$$

where $\vec{t}=(1, \ldots, 1)$ is the charge vector, $A_{\mu}$ is an external electromagnetic field, and $K_{I J}$ is the symmetric $K$-matrix. Invariance under large gauge transformations for systems on closed manifolds (such as a 2-torus) requires that all the entries of the $K$-matrix be integers. However, for a fermionic fluid the diagonal matrix elements of the $K$-matrix are odd integers. The number of condensates $p$ in the fluid is equal to the rank of the $K$-matrix, which is equal to the number of quasiparticle excitations.

The quasiparticles are vortices of the condensates. A generic quasiparticle is labeled by $k$ integers $l_{I}$ (with $I=1, \ldots, k$ ) and enters into the effective field theory through a source term

$$
\begin{equation*}
\mathcal{L}_{\mathrm{qp}}=l_{I} \mathcal{A}_{\mu I} j_{\mathrm{qp}}^{\mu} \tag{15.66}
\end{equation*}
$$

where the currents $j_{\mathrm{qp}}^{\mu}=\left(j_{\mathrm{qp}}^{0}, \vec{j}_{\mathrm{qp}}\right)$ represent the worldlines of the gapped quasiparticles,

$$
\begin{equation*}
j_{\mathrm{qp}}^{0}=\delta\left(\vec{x}-\vec{x}_{0}(t)\right), \quad \vec{j}_{\mathrm{qp}}=\hat{v} \delta\left(\vec{x}-\vec{x}_{0}(t)\right) \tag{15.67}
\end{equation*}
$$

where $\hat{v}$ is the unit vector tangent to the quasiparticle trajectory.
The density and current of the $I$ th condensate are, by definition,

$$
\begin{equation*}
J_{\mu I}=\frac{1}{2 \pi} \epsilon_{\mu \nu \lambda} \partial^{\nu} \mathcal{A}_{I}^{\lambda} \tag{15.68}
\end{equation*}
$$

As the quasiparticle $\psi_{\vec{l}}$ is created it induces a change in the charge and currents of the condensates. The total induced charge is

$$
\begin{equation*}
Q[\vec{l}]=-e t_{I} \int d^{2} x \delta J_{I}^{0}=\int d^{2} x l_{J} K_{J I}^{-1} j_{\mathrm{qp}}^{0}(x)=-e l_{I} K_{I J}^{-1} t_{J} \tag{15.69}
\end{equation*}
$$

Similarly, the statistical angle $\delta_{\vec{l}}$ is

$$
\begin{equation*}
\delta[\vec{l}]=\pi l_{I} K_{I J}^{-1} l_{J} \tag{15.70}
\end{equation*}
$$

In this effective theory there is always at least one quasiparticle $\psi_{\vec{l}_{\mathrm{e}}}$ (but often several) whose quantum numbers are

$$
\begin{equation*}
l_{\mathrm{e} I}=K_{I J} L_{J}, \quad \sum_{I} L_{I}=1 \tag{15.71}
\end{equation*}
$$

(where $L_{I}$ are integers) that can be identified as an electron. Such quasiparticles are electrons since (a) they have charge $-e$, (b) they are fermions, (c) they are local
with respect to all other quasiparticles (have trivial phase factors with them), and (d) these are the only excitations which satisfy these conditions.

### 15.4.1 The correspondence for the $\boldsymbol{U}(1)_{m}$ Chern-Simons theory

In order to make a connection between the bulk effective-field theory and the edge states, we need to consider the effects of edges (or boundaries). We will discuss this problem first for the Laughlin states. Thus we will consider a Laughlin fractional quantum Hall fluid represented by an effective $U(1)$ Chern-Simons gauge theory on a region $\Omega$ of the plane with a boundary (see Fig. 15.8). The total 3-manifold is then $\Omega \times \mathbb{R}$, where $\mathbb{R}$ is the time evolution.

The action for a $v=1 / m$ Laughlin fractional quantum Hall state with a boundary is

$$
\begin{equation*}
S=\frac{m}{4 \pi} \int_{\Omega \times \mathbb{R}} d^{3} x \epsilon_{\mu \nu \lambda} \mathcal{A}^{\mu} \partial^{\nu} \mathcal{A}^{\lambda} \tag{15.72}
\end{equation*}
$$

Under a gauge transformation $\mathcal{A}_{\mu} \mapsto \mathcal{A}_{\mu}+\partial_{\mu} f$ the Chern-Simons action changes by $S \mapsto S+\Delta S$, where

$$
\begin{align*}
\Delta S & =\frac{m}{4 \pi} \int_{\Omega} d^{2} x \epsilon_{\mu \nu \lambda} \partial^{\mu} f \partial^{\nu} \mathcal{A}^{\lambda} \\
& =\left.\frac{m}{4 \pi} \int d x d t f(x, y, t)\left(\partial_{t} \mathcal{A}_{1}-\partial_{x} \mathcal{A}_{0}\right)\right|_{y=0} \tag{15.73}
\end{align*}
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-644.jpg?height=635&width=632&top_left_y=1359&top_left_x=532)

Figure 15.8 The Chern-Simons theory is defined on a 3-manifold $\Omega \times \mathbb{R}$, where $\Omega$ has the topology of a disk and has a boundary $\partial \Omega$. The shaded area $\Omega$ represents the region occupied by the fractional quantum Hall fluid.

To maintain gauge invariance we must require the gauge transformations to vanish at the boundary,

$$
\begin{equation*}
f(x, y=0, t)=0 \tag{15.74}
\end{equation*}
$$

We know that the states at the edge propagate at a velocity that is fixed by the properties of the edge itself. However, the Chern-Simons theory is an effective long-distance theory and as such has no knowledge of the properties of the edge. There are several ways to incorporate this physics. One way is to construct an effective theory that takes into account the fact that the excitations are actually gapless along the edge (López and Fradkin, 1999). There is another, perhaps more formal, but "more economical," approach to this problem that is due to Wen (1995). It consists in realizing that a topological field theory such as the ChernSimons theory, in addition to being locally gauge-invariant, is also invariant under local coordinate transformations and is independent of the metric of the manifold on which it is defined. Thus, in order for the theory to be completely defined on a manifold $\Omega$ with a boundary, in addition to imposing a gauge-fixing condition (as in all gauge theories) it is also necessary to specify the metric along the boundary. In fact, many gauge-fixing conditions also break general coordinate invariance and serve to specify a metric as well. The same problem arises in defining the wave function in Chern-Simons theory. It is not a gauge-invariant object (although the overlaps are), and depends on the choice of metric (Witten, 1992).

We will follow Wen's approach and impose the generalized axial gauge-fixing condition (everywhere, not just along the edge)

$$
\begin{equation*}
\mathcal{A}_{t}+v \mathcal{A}_{x}=0 \tag{15.75}
\end{equation*}
$$

where $\mathcal{A}_{x}$ is the component of the gauge field $\mathcal{A}_{\mu}$ tangent to the edge (the boundary of $\Omega$ ), and $v$ is an arbitrary parameter with the dimensions of a velocity. Under a change of coordinates

$$
\begin{equation*}
x+v t=\bar{x}, \quad t=\bar{t}, \quad y=\bar{y} \tag{15.76}
\end{equation*}
$$

the gauge fields transform to

$$
\begin{equation*}
\overline{\mathcal{A}}_{\bar{t}}=\mathcal{A}_{t}-v \mathcal{A}_{x}, \quad \overline{\mathcal{A}}_{\bar{x}}=\mathcal{A}_{x}, \quad \overline{\mathcal{A}}_{\bar{y}}=\mathcal{A}_{y} \tag{15.77}
\end{equation*}
$$

Under this coordinate transformation the gauge-fixing condition simply becomes the temporal gauge condition in the new coordinates,

$$
\begin{equation*}
\overline{\mathcal{A}}_{\bar{i}}=0 \tag{15.78}
\end{equation*}
$$

However, the Chern-Simons action does not change under the coordinate transformation (since it satisfies general coordinate invariance),

$$
\begin{equation*}
S=\frac{m}{4 \pi} \int_{\Omega \times \mathbb{R}} d^{3} x \epsilon_{\mu \nu \lambda} \mathcal{A}^{\mu} \partial^{\nu} \mathcal{A}^{\lambda}=\frac{m}{4 \pi} \int_{\Omega \times \mathbb{R}} d^{3} x \epsilon_{\mu \nu \lambda} \overline{\mathcal{A}}^{\mu} \partial^{\nu} \overline{\mathcal{A}}^{\lambda} \tag{15.79}
\end{equation*}
$$

The quantization of Chern-Simons theory in the temporal gauge, $\overline{\mathcal{A}}_{\bar{t}}=0$, is very simple (see Section 10.8). In this gauge the Gauss-law condition becomes the constraint that the allowed states have no gauge flux,

$$
\begin{equation*}
\partial_{\bar{x}} \overline{\mathcal{A}}_{\bar{y}}-\partial_{\bar{y}} \overline{\mathcal{A}}_{\bar{x}}=0 \tag{15.80}
\end{equation*}
$$

which is solved by the flat (pure-gauge) configurations

$$
\begin{equation*}
\overline{\mathcal{A}}_{\bar{x}}=\partial_{\bar{x}} \phi, \quad \overline{\mathcal{A}}_{\bar{y}}=\partial_{\bar{y}} \phi \tag{15.81}
\end{equation*}
$$

On a manifold with a boundary the Chern-Simons action of a pure gauge configuration, Eq. (15.81), does not vanish but is a total derivative and integrates to the boundary,

$$
\begin{equation*}
S=\frac{m}{4 \pi} \int d \bar{x} d \bar{t} \partial_{\bar{x}} \phi \partial_{\bar{t}} \phi=\frac{m}{4 \pi} \int d x d t\left(\partial_{t} \phi \partial_{x} \phi-v\left(\partial_{x} \phi\right)^{2}\right) \tag{15.82}
\end{equation*}
$$

which is precisely the action of the chiral boson theory. Thus, the degrees of freedom of the gauge theory at the edge became the physical degrees of freedom.

We can now apply canonical quantization to this system and find that the canonical momentum $\Pi(x)$ of the chiral boson is

$$
\begin{equation*}
\Pi(x)=\frac{\delta S}{\partial_{t} \phi}=\frac{m}{4 \pi} \partial_{x} \phi \tag{15.83}
\end{equation*}
$$

Then, after demanding that the field and the canonical momentum obey canonical equal-time commutation relations, which for this chiral system are

$$
\begin{equation*}
[\phi(x), \Pi(y)]=\frac{i}{2} \delta(x-y) \tag{15.84}
\end{equation*}
$$

we find that the chiral boson field does not commute with itself at equal times,

$$
\begin{equation*}
[\phi(x), \phi(y)]=i \frac{\pi}{m} \operatorname{sgn}(x-y) \tag{15.85}
\end{equation*}
$$

With $L=\int d x \mathcal{L}$ being the Lagrangian, the Hamiltonian of this system is

$$
\begin{equation*}
H=\int \Pi \partial_{t} \phi-L=\frac{m}{4 \pi} v \int d x\left(\partial_{x} \phi\right)^{2} \tag{15.86}
\end{equation*}
$$

which is positive definite for $m v>0$. Hence, the sign of the velocity, the chirality, is determined by the sign of the Chern-Simons term in the bulk.

To find a connection with physical observables such as the density, we need to couple this theory to the electromagnetic field. This is done through the (gaugeinvariant) source term

$$
\begin{equation*}
\int_{\Omega \times \mathbb{R}} d^{3} x A_{\mu} J^{\mu}=\frac{1}{2 \pi} \int_{\Omega \times \mathbb{R}} d^{3} x \epsilon_{\mu \nu \lambda} A^{\mu} \partial^{\nu} \mathcal{A}^{\lambda}=\frac{1}{2 \pi} \int_{\Omega \times \mathbb{R}} d^{3} x \epsilon_{\mu \nu \lambda} \mathcal{A}^{\mu} \partial^{\nu} A^{\lambda} \tag{15.87}
\end{equation*}
$$

Let $A_{\mu}$ be independent of $y$ and also set $A_{y}=A_{\bar{y}}=0$. Since $\overline{\mathcal{A}}_{\mu}$ is a pure gauge, the source term becomes

$$
\begin{align*}
\frac{1}{2 \pi} \int_{\Omega \times \mathbb{R}} d^{3} x \epsilon_{\mu \nu \lambda} \mathcal{A}^{\mu} \partial^{\nu} A^{\lambda} & =-\int d \bar{x} d \bar{y} d \bar{t} \frac{1}{2 \pi} \partial_{\bar{y}} \phi\left(\partial_{\bar{x}} A_{\bar{t}}-\partial_{\bar{t}} A_{\bar{x}}\right) \\
& \left.=\int d x d t \frac{1}{2 \pi}\left(A_{t}-v A_{x}\right) \partial_{x} \phi\right)\left.\right|_{y=0} \tag{15.88}
\end{align*}
$$

This result allows us to identify the physical edge charge density $\rho(x)$ and current $j(x)$ as

$$
\begin{equation*}
\rho(x)=\frac{\delta S}{\delta A_{t}}=\frac{1}{2 \pi} \partial_{x} \phi, \quad j(x)=\frac{\delta S}{\delta A_{x}}=-\frac{v}{2 \pi} \partial_{x} \phi \tag{15.89}
\end{equation*}
$$

Hence, as expected, for the chiral edge the density and the current are (essentially) the same physical observable.

The observables of the bulk Chern-Simons theory on a manifold without boundaries are Wilson loops on closed curves. On a manifold with a boundary, such as $\Omega \times \mathbb{R}$ that we are discussing here, Wilson loops on open paths are allowed, provided that they are defined on arcs $\Gamma(x, y)$ that begin and end on points $(x$ and $y)$ of the boundary (with $n \in \mathbb{Z}$ )

$$
\begin{equation*}
W_{n}[\Gamma(x, y)]=\left\langle P \exp \left(i n \int_{\Gamma(x, y)} d z_{\mu} \mathcal{A}^{\mu}\right)\right\rangle \tag{15.90}
\end{equation*}
$$

With the definitions on gauge fixing that we used above, the Wilson arc operators become gauge-invariant and are physical observables. Using the condition that the gauge fields are pure gauge configurations, $\mathcal{A}_{\mu}=\partial_{\mu} \phi$, we obtain the result that the Wilson arc is the correlator for the chiral vertex operator $V_{n}=e^{-i n \phi}$,

$$
\begin{equation*}
W_{n}[\Gamma(x, y)]=\left\langle T e^{-i n \phi(x)} e^{i n \phi(y)}\right\rangle \tag{15.91}
\end{equation*}
$$

Thus, the correlators of quasiparticle operators of the edge states are expectation values of Wilson arcs. This result also makes manifest the relation between the compactification radius of the chiral boson and the topological properties of the bulk Chern-Simons gauge theory. See Fig. 15.9.

In summary, what we showed is that there is a one-to-one correspondence between the abelian $\mathrm{U}(1)_{m}$ Chern-Simons gauge theory in the bulk and the RCFT
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-648.jpg?height=746&width=759&top_left_y=197&top_left_x=480)

Figure 15.9 The Wilson arc in $\Omega \times \mathbb{R}$ with endpoints, on the boundary $\partial \Omega$, where the edge operators act (see the text).
of a compactified boson also at level $m$. Here too, by a rescaling of the field $\phi \mapsto \phi / \sqrt{m}$, we can trade the level $m$ of the chiral boson for a change in the compactification radius from $R=1$ to $R=\sqrt{m}$.

### 15.4.2 The general abelian Chern-Simons theory

Let us now describe how the bulk-edge correspondence works for a general abelian case. The effective Lagrangian for the general case is a multi-component ChernSimons gauge theory, given in Eq. (15.65). It has a $\mathrm{U}(1)^{p}$ gauge invariance, where $p$ is the rank of the $K$-matrix. The only difference is that we now need to impose $p$ gauge-fixing conditions. Once again, on a manifold such as $\Omega \times \mathbb{R}$ this system is equivalent to a theory of $k$ chiral bosons defined at the edge with the effective action

$$
\begin{equation*}
S_{\text {edge }}=\frac{1}{4 \pi} \int d x d t\left[K_{I J} \partial_{t} \phi_{I} \partial_{x} \phi_{J}-V_{I J} \partial_{x} \phi_{I} \partial_{x} \phi_{J}\right] \tag{15.92}
\end{equation*}
$$

with a Hamiltonian for the edge states

$$
\begin{equation*}
H=\frac{1}{4 \pi} \int d x V_{I J} \partial_{x} \phi_{I} \partial_{x} \phi_{J} \tag{15.93}
\end{equation*}
$$

where the matrix $V_{I J}$ is positive definite. In this effective theory the eigenmodes of the $K$-matrix with positive eigenvalue are left-moving states and the eigenmodes with negative eigenvalue are right-moving states.

For example, the $v=2 / 5$ state has a $K$-matrix and charge vector $\vec{t}$

$$
K_{2 / 5}=\left(\begin{array}{ll}
3 & 2  \tag{15.94}\\
2 & 3
\end{array}\right), \quad \vec{t}=\binom{1}{1}
$$

This $K$-matrix has two positive eigenvalues, 5 for the charge mode and 1 for the neutral mode. Thus both the charge and the neutral mode are left-moving.

On the other hand, the $v=2 / 3$ state has

$$
K_{2 / 3}=\left(\begin{array}{cc}
1 & 0  \tag{15.95}\\
0 & -3
\end{array}\right), \quad \vec{t}=\binom{1}{1}
$$

Thus, in this case there are two oppositely moving branches of edge modes.
Armed with these results we can now give a full description of the universal properties of the observables of the edge states in the multi-component case. The Hilbert space of the edge excitations consists of representations of the Kac-Moody algebra for a theory with $p$ components,

$$
\begin{equation*}
\left[\rho_{I, k}, \rho_{J, k^{\prime}}\right]=i K_{I J}^{-1} \frac{1}{2 \pi} k \delta_{k+k^{\prime}, 0} \tag{15.96}
\end{equation*}
$$

where $k, k^{\prime}=2 \pi / L \times$ integer, $I, J=1, \ldots, p$ (the rank of the $K$-matrix), and

$$
\begin{equation*}
\rho_{I}=\frac{1}{2 \pi} \partial_{x} \phi_{I} \tag{15.97}
\end{equation*}
$$

Here we are ignoring several interesting cases, such as the $(n, n, n)$ bilayer states, in which the $K$-matrix is singular and hence is not invertible. After a linear transformation that brings the $K$-matrix into a block-diagonal form, these cases can be treated similarly.

The total electronic density $\rho_{\mathrm{e}}=-e \sum_{I} \rho_{I}$. The Hamiltonian takes the chiral Luttinger form

$$
\begin{equation*}
H=2 \pi \sum_{I, J} \sum_{k>0} V_{I J} \rho_{I, k} \rho_{J,-k} \tag{15.98}
\end{equation*}
$$

The quasiparticle operators for this case can also be constructed from Wilson arcs. The only difference is that each Wilson arc will now carry a quantum number $l_{I}$ telling us how this quasiparticle couples with the $I$ th gauge field. Let us denote by $\psi_{\vec{l}}$, with

$$
\begin{equation*}
\psi_{\vec{l}} \sim \exp \left(i \sum_{I} l_{I} \phi_{I}\right) \tag{15.99}
\end{equation*}
$$

the quasiparticle operators that we obtained in this way. Using the Kac-Moody algebra, we find that

$$
\begin{equation*}
\left[\rho_{I}(x), \psi_{\bar{l}}\left(x^{\prime}\right)\right]=l_{J} K_{J I}^{-1} \psi_{\bar{l}}\left(x^{\prime}\right) \delta\left(x-x^{\prime}\right) \tag{15.100}
\end{equation*}
$$

which says that $\psi_{l}$ is a local operator that creates a quasiparticle of charge

$$
\begin{equation*}
Q_{\vec{l}}=-e \sum_{J} l_{J} K_{J I}^{-1} \tag{15.101}
\end{equation*}
$$

For a theory with a $K$-matrix whose diagonal matrix elements are odd integers, the electron operator is obtained in this way if $l_{I}=\sum_{J} K_{I J} L_{J}$, where $L_{J}$ are integers such that $\sum_{I} L_{I}=1$. Clearly, more than one such electron operator can be constructed in this way and they are all equally physical.

Let us finally compute the propagators of these quasiparticles. The $K$-matrix and the $V$-matrix can be diagonalized simultaneously. To this end, we will perform a unitary transformation, $U_{I J}$, to bring the Hamiltonian to a diagonal form. Under this transformation the densities mix $\tilde{\rho}_{I}=\sum_{J} U_{I J} \rho_{J}$. The new density operators satisfy the commutation relations

$$
\begin{equation*}
\left[\tilde{\rho}_{I, k}, \tilde{\rho}_{J, k^{\prime}}\right]=i \frac{s_{I}}{2 \pi} \delta_{I J} k \delta_{k+k^{\prime}, 0} \tag{15.102}
\end{equation*}
$$

where $s_{I}$ is the sign of the $I$ th eigenvalue of the $K$-matrix. The diagonalized Hamiltonian reads

$$
\begin{equation*}
H=2 \pi \sum_{I}\left|v_{I}\right| \tilde{\rho}_{I, k} \tilde{\rho}_{I,-k} \tag{15.103}
\end{equation*}
$$

where $v_{I}=s_{I}\left|v_{I}\right|$ are the (renormalized) velocities of the modes. The chiral bosons have also rotated to the fields $\tilde{\phi}_{I}$, and we write the quasiparticle operators in the new basis

$$
\begin{equation*}
\psi_{\vec{l}}=\exp \left(i \sum_{I} \tilde{l}_{I} \tilde{\phi}_{I}\right), \quad \tilde{l}_{I}=\sum_{J} l_{J} U_{J I}^{-1} \tag{15.104}
\end{equation*}
$$

We find that the propagators of the quasiparticles are

$$
\begin{equation*}
\left\langle T \psi_{\vec{l}}^{\dagger}(x, t) \psi_{\vec{l}}(0,0)\right\rangle \sim \exp \left(i \sum_{I} k_{I} l_{I} x\right) \prod_{I}\left(x-v_{I} t+i s_{I} \epsilon\right)^{-\tilde{l}_{I}^{2}} \tag{15.105}
\end{equation*}
$$

which leads to the result that the statistical angles are, as before,

$$
\begin{equation*}
\delta[\vec{l}]=\pi \sum_{I, J} l_{I} K_{I J}^{-1} l_{J} \tag{15.106}
\end{equation*}
$$

### 15.4.3 The non-abelian Chern-Simons theory

In Chapter 14 we discussed the non-abelian quantum Hall states. There we explained that there is a close connection between their wave functions and RCFTs associated with the chiral version of the Wess-Zumino-Witten (WZW) model discussed in Chapter 7. We will see here that there is a one-to-one correspondence
between the chiral WZW model, a $(1+1)$-dimensional RCFT, and the $(2+1)$ dimensional non-abelian Chern-Simons gauge theory (Elitzur et al., 1989). In another section we will use this connection to guess the form of the effective-field theory in the bulk for the non-abelian fractional quantum Hall states.

The action of the non-abelian Chern-Simons theory with gauge group $\mathrm{SU}(N)$ at level $k$ on a 3-manifold $\Sigma \times \mathbb{R}$ is (see Section 10.4)

$$
\begin{equation*}
k S_{\mathrm{CS}}\left[A_{\mu}\right]=\frac{k}{4 \pi} \int_{\Sigma \times \mathbb{R}} d^{3} x \epsilon_{\mu \nu \lambda}\left[A_{a}^{\mu} \partial^{\nu} A_{a}^{\lambda}+\frac{2}{3} f_{a b c} A_{a}^{\mu} A_{b}^{\nu} A_{c}^{\lambda}\right] \tag{15.107}
\end{equation*}
$$

As in the case of its abelian counterpart, provided that the level $k$ is quantized to be an integer, this theory is gauge-invariant on a closed 3-manifold (see the discussion at the end of Section 10.4).

Also as in the abelian case, this theory is not gauge-invariant if the manifold has a boundary. This problem can be solved using the same procedure as that which we just used in the abelian theory. Thus, we will fix the gauge in the bulk by imposing Eq. (15.75) on the non-abelian gauge fields, which are matrices in the algebra of the gauge group, and requiring the gauge transformations to approach the identity element in the gauge group $G$ on the boundary (Cabra et al., 2000). In the non-abelian theory, as was the case in the abelian theory, the Gauss-law condition requires the vacuum states to be flat, i.e. to have zero non-abelian flux, $F_{i j}=0$. This means that the gauge fields must be just gauge transformations and thus have the form (with $i=1,2$ being the two spatial components)

$$
\begin{equation*}
A_{i}=-\left(\partial_{i} g\right) g^{-1} \tag{15.108}
\end{equation*}
$$

where $g(x)$ is a gauge transformation. Upon substitution into the Chern-Simons action in the gauge of Eq. (15.75), we find that the Chern-Simons action is once again a total derivative that integrates to the boundary of the manifold $\Omega \times \mathbb{R}$, where it becomes the action for the $\mathrm{SU}(N)_{k}$ chiral WZW model in $(1+1)$ dimensions,

$$
\begin{align*}
S= & \frac{k}{16 \pi} \int_{\partial \Omega \times \mathbb{R}} d^{2} x \operatorname{tr}\left[g^{-1} \partial_{x} g g^{-1}\left(\partial_{t}-v \partial_{x}\right) g\right] \\
& -\frac{k}{24 \pi} \int_{\Omega \times \mathbb{R}} d^{3} x \epsilon_{\mu \nu \lambda} \operatorname{tr}\left(g^{-1} \partial_{\mu} g g^{-1} \partial_{\nu} g g^{-1} \partial_{\lambda} g\right) \tag{15.109}
\end{align*}
$$

Here I use the same normalization of the trace as in Section 7.10, to be consistent with the conventions of Witten $(1984,1989)$.

The arguments in Section 15.4.1 on the bulk-edge correspondence for the $\mathrm{U}(1)_{m}$ abelian Chern-Simons theory apply also, without any essential formal change, to the non-abelian Chern-Simons theory. Thus, a Wilson arc operator, carrying some representation $\lambda$ of the gauge group, with endpoints on the edge manifold $\partial \Omega \times \mathbb{R}$, maps onto the correlator of two primary fields of the chiral WZW model on the edge carrying the same quantum numbers.

We discussed the properties of the CFT of the WZW model in Section 7.12. Although we will not repeat that analysis here, it is useful to recall the main results for the case of $\mathrm{SU}(2)_{k}$, which, as we will now see, is of interest in the theory of fractional non-abelian quantum Hall states (Wen 1999; Read and Rezayi 1999; Fradkin et al. 1998, 1999).

The primary fields of $\mathrm{SU}(2)_{k}, \Phi_{(j, m)}$, with $0 \leq j \leq k / 2$ and with the same restrictions as in Section 7.12, can be factorized into holomorphic (or right-moving) and anti-holomorphic (left-moving) components. For a bulk ChernSimons theory with $k>0$, the edge theory is the chiral $\mathrm{SU}(2)_{k}$ WZW CFT which is built from the holomorphic components of the fields. This theory has a chiral $\mathrm{SU}(2)_{k}$ Kac-Moody algebra of three chiral (holomorphic) currents $J^{a}(z)$ that generate the spectrum physical states. With this caveat in mind, we can then use the result that the scaling dimensions for the representations $(j, m)$ (in the allowed range) are $\Delta_{(j, m)}=j(j+1) /(k+2)$ (see Eq. (7.193)), and are independent of $m$ (due to the $\mathrm{SU}(2)$ symmetry) (for more details see Section 7.12).

We will now discuss two simple cases, with $k=1$ and $k=2$, respectively, and see how they are related to bulk quantum Hall states.

### 15.4.4 The $S U(2)_{1}$ correspondence

The $\operatorname{SU}(2)_{1}$ case is very simple. We have already encountered this case in our discussion of the spin-singlet Halperin states (in Section 14.7). This theory has three currents, all with scaling dimension 1 . Since the level is $k=1$, this theory has two representations: [0] the field $\Phi_{(0,0)}$ (the identity field $I$ ) and [1/2] with primary fields $\Phi_{(1 / 2, \pm 1 / 2)}$, each with scaling dimension $1 / 4$. In Section 14.7 we showed that there is a simple abelian theory that is equivalent, namely the chiral boson $\phi$ with a special choice of compactification radius. Indeed the chiral current of the boson $(1 /(2 \pi)) \partial_{x} \phi$ and the operators $\exp ( \pm i \sqrt{2} \phi)$ have dimension 1 and form an $\mathrm{SU}(2)_{1} \mathrm{Kac}-$ Moody algebra. Thus the propagators of all three currents are

$$
\begin{equation*}
\left\langle T J^{a}(x, t) J^{b}(0,0)\right\rangle \sim \frac{1}{(x-v t)^{2}} \tag{15.110}
\end{equation*}
$$

The only vertex operator which is local with respect to the currents is $V_{ \pm 1 / 2} \sim$ $\exp ( \pm i \phi / \sqrt{2})$, which has scaling dimension $1 / 4$ and carries spin $j=1 / 2$. The propagator of this vertex operator is

$$
\begin{equation*}
\left\langle T V_{1 / 2}(x, t) V_{1 / 2}^{\dagger}(0,0)\right\rangle \sim \frac{1}{(x-v t)^{1 / 2}} \tag{15.111}
\end{equation*}
$$

This is precisely the same result as we found for the quasiparticle propagator in the edge states of the bosonic Laughlin state at $v=1 / 2$ with bulk wave function

$$
\begin{equation*}
\Psi_{2}\left(z_{1}, \ldots, z_{N}\right) \sim \prod_{i<j}\left(z_{i}-z_{j}\right)^{2} \exp \left(-\frac{1}{4 \ell_{0}^{2}} \sum_{j}\left|z_{j}\right|^{2}\right) \tag{15.112}
\end{equation*}
$$

So we see that in this language the currents $J^{ \pm} \sim \exp ( \pm i \sqrt{2} \phi)$ are the boson (instead of fermion) operators and that the current $J^{3}$ is the charge current of the bosonic edge state.

From this analysis we see that the effective theory of the bulk $v=1 / 2$ Laughlin fractional quantum Hall state (of bosons!) can be equivalently described by the abelian $\mathrm{U}(1)_{2}$ Chern-Simons theory at level $m=2$, or by the $\mathrm{SU}(2)_{1}$ ChernSimons theory. At the level of the edge theory, this states the equivalence of the theory of the compactified chiral boson with compactification radius $R=1 / \sqrt{2}$, the " $\mathrm{SU}(2)$ radius" (Ginsparg, 1989), and the $\mathrm{SU}(2)_{1}$ chiral WZW CFT.

However, while these two theories have the same universal content, their equivalence in the bulk does not necessarily hold microscopically. Indeed, as we saw in a system with a one-component fluid, the $\mathrm{U}(1)_{2}$ abelian Chern-Simons theory arises naturally as a description of the fractional quantum Hall state of bosons. On the other hand, although the $\mathrm{SU}(2)$ symmetry of the $\mathrm{SU}(2)_{1}$ Chern-Simons theory could appear naturally in a system of "bosons" with spin $1 / 2$, the equivalence to $\mathrm{U}(1)_{2}$ has to be viewed as a dynamical symmetry (like the accidental $\mathrm{O}(4)$ symmetry in the quantum mechanics of the Kepler problem in the hydrogen atom). Thus, in general, in the bulk this seemingly larger symmetry would require some finetuning. In contrast, the equivalence at the level of the edge states is more robust (although it may require the fine-tuning of the velocities of different modes).

### 15.4.5 The $S U(2)_{2}$ correspondence and the Moore-Read edge states

We will now discuss the $\mathrm{SU}(2)_{2}$ case. The $\mathrm{SU}(2)_{2}$ chiral WZW CFT has central charge $c=3 / 2$ (see Eq. (7.189)). This theory has three representations, [0], [1/2], and [1], with scaling dimensions $0,3 / 16$, and $1 / 2$, respectively.

Let us discuss first the adjoint representation [1], which, as such, is a triplet of hermitian fields. The propagators are (with $m=0, \pm 1$ )

$$
\begin{equation*}
\left\langle T \Phi_{(1, m)}(x, t) \Phi_{(1, m)}(0,0)\right\rangle \sim \frac{1}{x-v t} \tag{15.113}
\end{equation*}
$$

These three propagators are antisymmetric under $(x, t) \mapsto(-x,-t)$. Therefore the spin-1 primary fields $\Phi_{(1, m)}$ can be identified as three chiral Majorana fermions $\chi_{a}(x, t)(a=1,2,3)$. Indeed, a theory of three Majorana fermions generates the $\mathrm{SU}(2)_{2}$ Kac-Moody current algebra with the currents

$$
\begin{equation*}
J^{a} \sim \chi_{b} T_{b c}^{a} \chi_{c} \tag{15.114}
\end{equation*}
$$

where $T_{b c}^{a}=i \epsilon_{a b c}$ are the $\mathrm{SU}(2)$ generators in the adjoint (spin-1) representation and $\epsilon_{a b c}$ is the third-rank Levi-Civita tensor. In this language we can think of $\mathrm{SU}(2)_{2}$ as being $\mathrm{SO}(3)_{1}$, see Di Francesco et al. (1997).

The primary field $\Phi_{(1 / 2, \pm 1 / 2)}$ is the WZW field itself. It is the primary field in the representation [1/2]. It has scaling dimension $\Delta_{(1 / 2, \pm)}=3 / 16$ and its propagator is given by

$$
\begin{equation*}
\left\langle T \Phi_{(1 / 2, \pm 1 / 2)}(x, t) \Phi_{(1 / 2, \pm 1 / 2)}^{\dagger}(0,0)\right\rangle \sim \frac{1}{(x-v t)^{3 / 8}} \tag{15.115}
\end{equation*}
$$

which is not single-valued. In fact, under an exchange process this propagator acquires a phase factor $\delta=3 \pi / 8$. In other terms, the primary fields are associated with particles (solitons) with statistical angle $3 \pi / 8$ that propagate along the edge. The fusion properties of these quasiparticles can be determined from the OPE that these fields satisfy,

$$
\begin{equation*}
[1 / 2] \star[1 / 2]=[0]+[1], \quad \Leftrightarrow \quad \Phi_{1 / 2} \star \Phi_{1 / 2}=\Phi_{0}+\Phi_{1} \tag{15.116}
\end{equation*}
$$

This is the edge version of the fact that there are two fusion channels in this case and hence that there are two conformal blocks, as we discussed in Section 14.8.

Is there a fractional quantum Hall bulk state with the same properties? The answer is yes, the $n=1$ Moore-Read state whose wave function for general $n$ is

$$
\begin{equation*}
\Psi_{\mathrm{MR}}\left(z_{1}, \ldots, z_{N}\right)=\operatorname{Pf}\left(\frac{1}{z_{i}-z_{j}}\right) \prod_{i<j}\left(z_{i}-z_{j}\right)^{n} \exp \left(-\frac{1}{4 \ell_{0}^{2}} \sum_{i}\left|z_{i}\right|^{2}\right) \tag{15.117}
\end{equation*}
$$

This wave function describes a fractional quantum Hall state of bosons at filling factor $v=1 / n$. In Section 14.8 we discussed the fact that the Pfaffian factor can be represented by a Majorana fermion, which here we will denote by $\chi_{3}$. For $n=1$ the "Laughlin factor" is just a Vandermonde determinant, the wave function for a filled Landau level of fermions (with $v=1$ ). We saw at the beginning of this chapter that the edge states of a $v=1$ state are described by a theory of a free chiral Dirac (charged) fermion, which we will denote by $\psi(x)$. This suggests that in the case of the bosonic $n=1$ Moore-Read state the effective field theory in the bulk in the topological limit is the $\mathrm{SU}(2)_{2}$ Chern-Simons gauge theory (Fradkin et al., 1998). This also suggests that for $n>1$ the non-abelian properties of the MooreRead states may also be connected in some way with the $\mathrm{SU}(2)_{2}$ Chern-Simons in the bulk and WZW on the edge. We will now examine how (and whether) this guess is correct.

There is a simple way to describe the edge states for all Moore-Read states, which follows from the structure of the wave function itself (Milovanovic and Read, 1996), and for most purposes it is the most efficient representation. Let us
first bosonize the chiral Dirac fermion and use its representation by the vertex operator $V_{1} \sim \exp (i \phi)$ of a compactified chiral boson $\phi$ with compactification radius $R=1$ (the "fermionic radius" (Ginsparg, 1989)). Hence in this picture, which we saw in Eq. (14.136) is natural from the wave-function viewpoint, at the edge we have a charge mode (the charge boson $\phi$, in this case with compactification radius $R=1$ ) and a neutral mode represented by a chiral Majorana fermion $\chi$. In fact, this argument holds for all $v=1 / n$ Moore-Read states, with the only change being that the level of the chiral boson in the general case is $n$ (or that the compactification radius of the chiral boson is rescaled to $R=\sqrt{n}$ ). Therefore, in this representation the effective Lagrangian of the chiral edge states is the sum of two decoupled terms,

$$
\begin{equation*}
\mathcal{L}=\chi i\left(\partial_{t}-v_{n} \partial_{x}\right) \chi+\frac{n}{4 \pi} \partial_{x} \phi\left(\partial_{t}-v_{\mathrm{c}} \partial_{x}\right) \phi \tag{15.118}
\end{equation*}
$$

In Eq. (15.118) we have allowed the charge and the neutral modes to have different velocities. In this normalization of the charge boson, the charge current is $j=$ $(1 /(2 \pi \sqrt{n})) \partial_{x} \phi$. Since the chiral Majorana fermion is the chiral half of the CFT of the critical Ising model, we say that $\mathbb{Z}_{2} \times \mathrm{U}(1)_{n}$ is the CFT of the edge states of the $v=1 / n$ Moore-Read state.

The effective Lagrangian of Eq. (15.118) is a sum of two apparently decoupled terms. This Lagrangian suggests that the allowed primary fields of these edge states are products of the two sectors. This structure is reminiscent of the phenomenon of spin-charge separation which we discussed in the context of the theory of 1D Luttinger liquids (see Chapter 6). However, this similarity is only superficial. Indeed, while Eq. (15.118) is the correct Lagrangian for these edge states, we still have to impose the condition that the allowed primary fields are local with respect to the "electron" (i.e. the particles the quantum Hall fluid is made of). This selection rule, which reduces the number and type of allowed operators, tells us how to glue the charge and neutral sectors together. In this sense there is no separation between the $\mathrm{U}(1)_{n}$ charge sector and the $\mathbb{Z}_{2}$ neutral sector.

To see how this works, we first identify the operator $\psi_{\mathrm{e}} \sim \chi \exp (i \sqrt{n} \phi)$ with the "electron" operator. This operator has scaling dimension $\Delta_{\mathrm{e}}=n / 2$ and charge $Q=e$. Clearly the Majorana fermion $\chi$, with scaling dimension $\Delta_{\chi}=1 / 2$ and charge $Q=0$, is local with respect to the electron operator, and is an allowed primary field. Similarly the vertex operators $V_{p} \sim \exp (i p \phi / \sqrt{n})$ (with $p=0, \ldots, n-1)$, with scaling dimension $\Delta_{p}=p^{2} /(2 n)$, statistical angle $\delta_{p}=\pi p / n$, and charge $Q=p / n$, satisfy all the requirements and are also allowed primary fields.

However, there are more allowed operators in addition to the ones we considered. Consider the primary field $\sigma$ of the chiral sector of the Ising model. This operator
has scaling dimension $1 / 16$ and charge $Q=0$. However, this operator twists the Majorana fermion, thereby changing its boundary conditions from periodic to antiperiodic (and vice versa), and, for this reason, it is also called the twist field (Dixon et al., 1987). This means that it is double-valued and is not local with respect to the electron (since it is not local with respect to the Majorana fermion). Similarly, the vertex operator $V_{1 / 2} \sim \exp (i \phi / 2 \sqrt{n})$ is not local with respect to the electron either; it is also a "branch-cut operator" and is double-valued. However, the composite operator $\psi_{\mathrm{qp}} \sim \sigma V_{1 / 2}$ is local with respect to the electron operator, and it is an allowed primary field. This operator has scaling dimension $\Delta_{\mathrm{qp}}=1 / 16+1 /(8 n)$, statistical angle $\delta_{\mathrm{qp}}=\pi(n+2) /(8 n)$, and charge $Q=1 /(2 n)$. In addition, given the Ising fusion rule $\sigma \star \sigma=I+\chi$, this primary field has two fusion channels, and thus it has non-abelian braiding statistics. Clearly, any primary field obtained from fusing any pair of operators of the types we considered will lead to another operator that should be on the list. This tower, however, truncates when the operators end up fusing into the electron operator. As relevant examples, in Tables 15.1 and 15.2 we give the list of primary fields (and their scaling dimensions) for the edge states of the $n=1$ bosonic and $n=2$ fermionic Moore-Read states, respectively.

The description of the edge states in terms of a $\mathbb{Z}_{2} \times \mathrm{U}(1)_{n}$ chiral CFT gives a simple and economical way to describe the edge states. However, while the $U(1)$ charge sector has a simple representation in terms of an effective-field theory of the bulk state, in the form of the $\mathrm{U}(1)_{n}$ Chern-Simons abelian gauge theory, it is far

Table 15.1 The $S U(2)_{2}$ quantum numbers, scaling dimension $\Delta$, and $U(1)$ charge $Q$ of the primary fields of the edge states of the bosonic $n=1$ Moore-Read fractional quantum Hall state

|  | $I$ | $\sigma e^{\frac{i}{2} \phi}$ | $e^{ \pm i \phi}$ | $\chi$ | $\chi e^{ \pm i \phi}$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $(j, m)$ | $(0,0)$ | $(1 / 2, \pm 1 / 2)$ | $(1, \pm 1)$ | $(1,0)$ | current |
| $\Delta$ | 0 | $3 / 16$ | $1 / 2$ | $1 / 2$ | 1 |
| $Q$ | 0 | $1 / 2$ | 0 | 1 | $\pm 1$ |

Table 15.2 The scaling dimension $\Delta$ and charge $Q$ (in units of e) of the primary fields of the edge states of the fermionic $n=2$ Moore-Read fractional quantum Hall state

|  | $I$ | $\sigma e^{\frac{i}{2 \sqrt{2}} \phi}$ | $\chi$ | $e^{\frac{i}{\sqrt{2}} \phi}$ | $\chi e^{i \sqrt{2} \phi}$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $\Delta$ | 0 | $1 / 8$ | $1 / 2$ | $1 / 4$ | $3 / 2$ |
| $Q$ | 0 | $1 / 4$ | 0 | $1 / 2$ | 1 |

from obvious what topological field theory in the bulk has a chiral edge Majorana fermion state and how the rules for gluing different representations at the edge manifest themselves in the bulk.

The bulk-edge correspondence between the non-abelian Chern-Simons theory and the chiral WZW model offers a hint on how to do this. This raises the question of how $\mathrm{SU}(2)_{2}$ is related to this description of the edge states. To make this connection explicit, we return to the case of the $n=1$ bosonic Moore-Read state. In this case, the "electron" operators $\chi \exp ( \pm i \phi)$, which create and destroy a boson, have scaling dimension 1 and hence have the same dimension as a chiral current. Indeed, the three operators

$$
\begin{equation*}
J^{ \pm} \sim \chi \exp ( \pm i \phi), \quad J^{3} \sim \partial_{x} \phi \tag{15.119}
\end{equation*}
$$

form an $\mathrm{SU}(2)_{2}$ Kac-Moody current algebra. Thus, the "diagonal" (Cartan) generator $J^{3}$ is the charge density, and its integral is the total charge operator (in units of $e$ )

$$
\begin{equation*}
Q=\int d x J^{3}(x) \propto \int d x \partial_{x} \phi \tag{15.120}
\end{equation*}
$$

This means that the coupling to an external electromagnetic perturbation breaks the $\mathrm{SU}(2)$ symmetry down to $\mathrm{U}(1)$, since it couples only to the $J^{3}$ generator. In this sense $\mathrm{SU}(2)$ is an "accidental symmetry," however useful it may be.

We now recall that a Dirac fermion can be decomposed into two Majorana fermions, $\psi \sim \chi_{2}+i \chi_{3}$, its "real" and "imaginary" parts, and we see that these are just the currents of Eq. (15.114). Hence, the edge states of the $v=1$ bosonic Moore-Read fractional quantum Hall state constitute a theory with three chiral Majorana fermions $\chi_{a}$ (with $a=1,2,3$ ) with Lagrangian

$$
\begin{equation*}
\mathcal{L}=\sum_{a=1}^{3} \chi_{a} i\left(\partial_{t}-v \partial_{x}\right) \chi_{a} \tag{15.121}
\end{equation*}
$$

Since each free chiral Majorana fermion is a CFT with central charge $c=1 / 2$ (as in the chiral sector of the Ising model), the central charge of this theory should be $c=3 / 2$. We also know that the non-abelian quasiparticles of the $n=1$ MooreRead state have statistical angle $\delta=3 \pi / 8$, see Eq. (14.151). This is consistent with what we just found from the analytic properties of the propagator of the WZW field in $\mathrm{SU}(2)_{2}$. More significantly, the four-point function of four WZW primary fields has two conformal blocks (Knizhnik and Zamolodchikov, 1984), which is also consistent with these fields representing particles with non-abelian braiding statistics. Similarly, the Laughlin quasihole (and quasiparticle) operators, the vertex operators $V_{ \pm 1}=\exp ( \pm i \phi)$, in the $v=1$ bosonic Moore-Read state, are Dirac fermions (i.e. made of two Majorana fermions) and have statistical angle $\delta=\pi$.

Thus we conclude that the universal properties of the $n=1$ bosonic Moore-Read state are reproduced by an effective-field theory, the $\mathrm{SU}(2)_{2}$ Chern-Simons theory, in the bulk and the $\mathrm{SU}(2)_{2}$ chiral WZW model at the edge.

This line of argument does not precisely work for $n>1$. The problem is that for $n>1$ the compactification radius of the boson is no longer $R=1$, and the electron operator is no longer an $\operatorname{SU}(2)_{2}$ current (as it is for $n=1$ ). Thus, the general Moore-Read state can be thought of as an $\mathrm{SU}(2)_{2}$ theory in which the compactification radius of the diagonal (Cartan) $\mathrm{U}(1)$ subgroup has been changed. Naturally, this deformation breaks the $S U(2)$ symmetry explicitly. There is, however, a way to make this deformation of $\mathrm{SU}(2)_{2}$ explicit. The answer is to consider a theory with a coset CFT, which is constructed as follows (Gepner, 1987; Di Francesco et al., 1997).

Let us consider a CFT with a Kac-Moody current algebra for a Lie group $G$ at some level $k$, and let $H$ be a subgroup of $G, H \subset G$, which is also a Lie group. Let $J_{G}^{a}$ be the chiral currents that generate the Kac-Moody current algebra of $G_{k}$ and let $J_{H}^{i}$ be the currents that generate the Kac-Moody current algebra for the subgroup $H$. Let us now gauge the subgroup $H$ by coupling its currents to a dynamical gauge field $A_{\mu}$ that takes values in the algebra of the subgroup $H$. In the strong-coupling limit of this $(1+1)$-dimensional gauge theory, the gauge fields do not have an action of their own, and act as Lagrange multiplier fields that set the currents that act on $H$ to zero. In other words, a coset is a theory with a current algebra in which we have made a projection onto the subset of states of the Hilbert space which is annihilated by the currents $J_{H}^{i}$ of the subgroup $H$,

$$
\begin{equation*}
\left.J_{H}^{i} \mid \text { Phys }\right\rangle=0 \tag{15.122}
\end{equation*}
$$

Since the theory with current algebra in the group $G$ at level $k$ is the $G_{k}$ WZW model, the coset is a gauged (chiral) WZW model (in which only the subgroup $H$ has been gauged).

In the case of $\mathrm{SU}(2)_{k}$, we can consider the $\mathrm{U}(1)$ diagonal subgroup, and the resulting coset is $\mathrm{SU}(2)_{k} / \mathrm{U}(1)$. This case was solved in great detail by Gepner (1987), who showed that this CFT is equivalent to the $\mathbb{Z}_{k}$ parafermion CFT. For $k=2$ this is the Ising CFT and for $k=3$ it is the CFT of the critical three-state Potts model. The solution is quite technical for the scope of this book. We will state the main results without giving the details of their derivation.

Since the coset is effectively a constrained version of the original system, the central charge of the CFT (which counts the number of critical degrees of freedom) of the coset $G / H$ is smaller, $c(G / H)=c(G)-c(H)$. Since $H=\mathrm{U}(1)$ and its central charge is $c(\mathrm{U}(1))=1$, we have

$$
\begin{equation*}
c\left(\mathrm{SU}(2)_{k} / \mathrm{U}(1)\right)=\frac{2(k-1)}{k+2} \tag{15.123}
\end{equation*}
$$

Furthermore, the scaling dimensions of the primary fields $\Phi_{(j, m)}$ are also reduced in $\mathrm{SU}(2)_{k} / \mathrm{U}(1)$, to

$$
\begin{equation*}
\Delta_{(j, m)}=\frac{j(j+1)}{k+2}-\frac{m^{2}}{k} \tag{15.124}
\end{equation*}
$$

and now depend not only on $j$ but also on $m$ since the symmetry $\mathrm{SU}(2)$ has been broken explicitly by gauging its diagonal (Cartan) $\mathrm{U}(1)$ subgroup.

The simplest example of a coset theory is $\mathrm{SU}(2)_{2} / \mathrm{U}(1)$. We see that for $k=2$ the central charge is $c\left(\mathrm{SU}(2)_{2} / \mathrm{U}(1)\right)=1 / 2$. Also for $k=2$ the only non-trivial primary fields of this theory are $\Phi_{(1 / 2, \pm 1 / 2)}$ and $\Phi_{(1,0)}$, with scaling dimensions $\Delta_{(1 / 2,1 / 2)}=1 / 16$ and $\Delta_{(1,0)}=1 / 2$. Thus we can identify the fields of the coset $\mathrm{SU}(2)_{2} / \mathrm{U}(1)$ theory with the fields of the Ising CFT, $\mathbb{Z}_{2}, \Phi_{(1 / 2,1 / 2)} \equiv \sigma$ (the twist field of the Ising model), and $\Phi_{(1,0)} \equiv \chi$ (the Majorana fermion). From these results, we conclude that the chiral edge states of the Moore-Read fractional quantum Hall states are described by the chiral CFTs

$$
\begin{equation*}
\mathbb{Z}_{2} \times \mathrm{U}(1)_{n} \simeq\left(\mathrm{SU}(2)_{2} / \mathrm{U}(1)\right) \times \mathrm{U}(1)_{n} \tag{15.125}
\end{equation*}
$$

where the coset $S U(2)_{2} / U(1)$ is a chiral gauged $S U(2)_{2}$ WZW. The coset $\mathrm{SU}(2)_{3} / \mathrm{U}(1) \simeq \mathbb{Z}_{3}$, the CFT of the three-state Potts model, enters into the description of the edge states of the Read-Rezayi states (Read, 1998). Instead of a Majorana fermion, the theory of the Read-Rezayi states involves fields called parafermions, which we defined in Eq. (10.127). The properties of parafermion theories are understood from CFT, and they are never free fields (Dotsenko, 1984). One interesting feature of the Read-Rezayi states is that they are leading candidates to realize a universal quantum computer (Das Sarma et al., 2008).

### 15.5 Effective-field theory of non-abelian states

The use of the bulk-edge correspondence combined with CFT methods enabled us to construct generalized fractional quantum Hall states and to investigate their properties. In the last section we constructed the theory of the edge states using the structure of the wave functions of the bulk states. We will see in the next sections that the CFT description of the edge states is sufficient (and efficient) to study the properties of these states. This is important, since many of the properties of the edge states are directly accessible to (very challenging!) experiments. While the bulkedge correspondence suggests that there should be an effective topological field theory for all of these states, there is no straightforward non-abelian version of the hydrodynamic arguments that we used to formulate the abelian fractional quantum Hall states in terms of abelian Chern-Simons gauge theory in Chapter 14.

What is missing is an effective-field-theory approach to this problem that includes the non-abelian states as well. Such an approach was discussed in detail for the case of the abelian states, for which it provides a general construction, which
amounts to a classification of such states (Wen, 1995). So far no general classification of non-abelian quantum Hall states has been established and, for this reason, there is no generic effective-field theory of non-abelian states either. Nevertheless, there has been some significant progress on this question (Fradkin et al., 1998, 1999; Wen, 1999; Cabra et al., 2000; Barkeshli and Wen, 2010a, b).

The structure of the CFTs of their edge states naturally suggests that the effective-field theory for the bulk must somehow involve an $\mathrm{SU}(2)_{k}$ Chern-Simons gauge theory at some non-trivial level $k$. However, we are now left to explain the physical origin of the $S U(2)$ symmetry in the bulk, how (and whether) it is related to the concept of pairing, and what the bulk counterpart of the concept of "gauging a subgroup" at the edge is. Since the theory of the bulk state is already a gauge theory, one cannot gauge what has already been gauged!

Here we will outline the construction of the effective-field theory of the bulk for the simplest case, the bosonic Moore-Read state at filling factor $v=1$. We will see that the construction can be generalized to the bosonic Read-Rezayi states with filling factor $v=k / 2$. The effective-field theory of the edge states for the $v=1$ bosonic Moore-Read state has $\mathrm{SU}(2)_{2}$ chiral Kac-Moody symmetry, namely the $\mathrm{SU}(2)_{2}$ chiral WZW model. We saw in the preceding section that there is a one-to-one correspondence between the bulk $\mathrm{SU}(2)_{2}$ non-abelian Chern-Simons gauge theory and the chiral $\mathrm{SU}(2)_{2}$ WZW model on the edge.

So in the case of the $v=1$ Moore-Read state the effective-field theory of the bulk is the $\mathrm{SU}(2)_{2}$ Chern-Simons theory. Is this related in any way to the concept of pairing? In Chapter 14 we compared the structure of the wave function of the fermionic Moore-Read state at $v=1 / 2$ with the behavior of the pair field in the BCS theory of a $p_{x}+i p_{y}$ superconductor. There we saw that the Pfaffian factor embodies the physics of this superconducting state. We now want to ask a similar question regarding the bosonic state.

To this end, following the results of Fradkin et al. (1999), we will consider a quantum Hall system with two species of charged bosons in two dimensions. We will assume that each species of charged bosons has sufficiently strong short-range repulsive interactions that each Landau level state can be occupied by only one boson and that each species of bosons is in a Laughlin state with filling fractions $v=1 / 2$. Thus we have a $(2,2,0)$ Halperin state with wave function

$$
\begin{equation*}
\Psi_{(2,2,0)}=\prod_{i<j}\left(z_{i}-z_{j}\right)^{2} \prod_{i<j}\left(w_{i}-w_{j}\right)^{2} e^{-\frac{1}{4 c^{2}} \sum_{i}\left(\left|z_{i}\right|^{2}+\left|w_{i}\right|^{2}\right)} \tag{15.126}
\end{equation*}
$$

where $z_{i}$ are the complex coordinates of type 1 bosons and $w_{i}$ are the complex coordinates of type 2 bosons. Since the two species are decoupled, the effectivefield theory involves two Chern-Simons gauge fields, $\mathcal{A}_{\mu}^{l}$ (with $l=1,2$ ), for the
currents of each species of bosons, and has a $\mathrm{U}(1)_{2} \times \mathrm{U}(1)_{2}$ gauge symmetry. The effective action is

$$
\begin{equation*}
S_{(2,2,0)}^{\text {bulk }}=\frac{2}{4 \pi} \sum_{l=1}^{2} \int_{\Sigma \times \mathbb{R}} d^{3} x \epsilon^{\nu \nu \lambda} \mathcal{A}_{\mu}^{l} \partial_{\nu} \mathcal{A}_{\lambda}^{l} \tag{15.127}
\end{equation*}
$$

where the level of each Chern-Simons theory is $m=2$ since the filling factor is $v=1 / 2$ for each species of bosons. The effective action of the edge states of the $(2,2,0)$ state is then a theory of two chiral bosons $\phi_{a}(l=1,2)$ with the same velocity $v$, also at level $m=2$,

$$
\begin{equation*}
S_{(2,2,0)}^{\text {edge }}=\frac{m}{4 \pi} \sum_{l=1}^{2} \int d x d t \partial_{x} \phi_{l}\left(\partial_{t} \phi_{l}-v \partial_{x} \phi_{l}\right) \tag{15.128}
\end{equation*}
$$

In Section 15.4 .4 we showed that the $\mathrm{U}(1)_{2}$ Chern-Simons theory is equivalent to the $\mathrm{SU}(2)_{1}$ Chern-Simons theory in the sense that they have the same topological invariants. Similarly, the theory of the $\mathrm{U}(1)_{2}$ chiral boson is equivalent to the $\mathrm{SU}(2)_{1}$ chiral WZW model. So the universal (topological) properties of the $(2,2,0)$ bosonic Halperin state are equally described by a sum of two $S U(2)_{1}$ Chern-Simons gauge theories, each with its own $\operatorname{SU}(2)$ gauge field, $\mathcal{A}_{\mu}^{a, l}$, where $a=1,2,3$ runs over the su(2) algebra. In this language the action becomes

$$
\begin{equation*}
S_{(2,2,0)}^{\text {bulk }}=\frac{1}{4 \pi} \sum_{l=1,2} \int_{\Sigma \times \mathbb{R}} d^{3} x \epsilon^{\mu \nu \lambda}\left[\mathcal{A}_{\mu}^{l, a}, \partial_{\nu} \mathcal{A}_{\lambda}^{l, a}+\frac{2}{3} f_{a b c} \mathcal{A}_{\mu}^{l, a} \mathcal{A}_{\nu}^{l, b} \mathcal{A}_{\lambda}^{l, c}\right] \tag{15.129}
\end{equation*}
$$

We return momentarily to the theory of the edge and ask how an $\mathrm{SU}(2)_{2}$ WZW model arises from two decoupled $\mathrm{SU}(2)_{1}$ WZW models. Each $\mathrm{SU}(2)_{1}$ WZW model has an $\mathrm{SU}(2)_{1} \mathrm{Kac-Moody}$ algebra (at level $k=1$ ) of the currents $J^{a, l}$. We now consider perturbing this system by a marginally relevant off-diagonal currentcurrent interaction whose coupling constant flows to a strong-coupling fixed point at which the relative current vanishes

$$
\begin{equation*}
\left.\left(J^{a, 1}-J^{a, 2}\right) \mid \text { Phys }\right\rangle=0 \tag{15.130}
\end{equation*}
$$

We saw at the end of Chapter 7 that this limit is equivalent to coupling the system to a gauge field that projects out all states that violate the constraint of Eq. (15.130), i.e. it is a gauged WZW model. However, this condition is equivalent to imposing that the WZW currents are identified, and hence the WZW fields themselves are also identified, $g^{1}=g^{2} \equiv g$. Since the original action was the sum of two decoupled $\mathrm{SU}(2)_{1}$ WZW models (with fields $g^{1}$ and $g^{2}$ ), the action of the theory at this fixed point is simply an $\mathrm{SU}(2)_{2}$ WZW model for the field $g$. Thus, under the action of this perturbation, the theory flows to the $\mathrm{SU}(2)_{2}$ fixed point, with a single dynamical field $g$, and a Kac-Moody algebra with level raised to $k=2$,

$$
\begin{equation*}
S_{\mathrm{SU}(2)_{1}}^{\mathrm{WZW}}\left[g^{1}\right]+S_{\mathrm{SU}(2)_{1}}^{\mathrm{WZW}}\left[g^{2}\right] \mapsto S_{\mathrm{SU}(2)_{2}}^{\mathrm{WZW}}[g] \tag{15.131}
\end{equation*}
$$

On the other hand, the $\mathrm{SU}(2)_{1}$ currents are just the "electron" (here the boson) operators $V_{ \pm}=\exp ( \pm i \sqrt{2} \phi)$ and the edge current $j=\partial_{x} \phi$. We also saw that, for a Laughlin state of bosons at $v=1 / 2$, these three operators are the generators of the $\mathrm{SU}(2)_{1}$ Kac-Moody algebra, and the boson (and its hole) are part of the $\mathrm{SU}(2)_{1}$ Kac-Moody algebra. Hence, if the $\mathrm{SU}(2)_{1} \mathrm{Kac}-M o o d y$ currents are identified, this means that the bosons themselves are glued together. This picture suggests that the bulk theory must describe a paired state of the bosons!

We can describe this physics from the point of view of the bulk as follows. Let $B_{l}^{a}$ be two three-component real fields ( $a=1,2,3$ ) representing the boson excitations in the bulk for each species of bosons $(l=1,2)$, each made of the fields that create and destroy each type of boson, $B_{l}^{\dagger}=B_{1, l}+i B_{2, l}$ and its complex conjugate, and the local boson density fluctuation, which we denote by $B_{3, l}$. We will assume that the bosons themselves do not undergo Bose condensation but that they can pair. A paired state of "spin- 1 " bosons is naturally represented by the (p-wave) triplet pair field (Fradkin et al., 1999)

$$
\begin{equation*}
\Psi_{a}\left(z_{1}-z_{2}\right)=\epsilon_{a b c} B_{1}^{b}\left(z_{1}\right) B_{2}^{c}\left(z_{2}\right) f\left(z_{1}-z_{2}\right) \tag{15.132}
\end{equation*}
$$

where the kernel has the long-distance behavior $f(z) \sim 1 / z$. This pair field has p-wave symmetry and maximally violates time-reversal invariance. This pair field transforms in the spin-1 (adjoint) representation of each $\mathrm{SU}(2)$ and in the spin-1 representation of the diagonal $S U(2)$ subgroup of $S U(2) \times S U(2)$.

A pair field of two triplet fields can be best understood as a matrix field that transforms under the action of each group. Let $O \sim \exp \left(i T_{l} \Psi_{l}\right)$ (where $T_{a}$ are the three $\mathrm{SU}(2)$ generators in the spin-1 representation) be the $(3 \times 3)$ matrix field. Since it is in the adjoint representation of $\operatorname{SU}(2)$, it is blind under the action of the $\mathbb{Z}_{2}$ center of $\operatorname{SU}(2)$. Hence the field $O$ effectively is an element of $\operatorname{SO}(3)$, and transforms under the action of the groups $G_{1}$ and $G_{2}$ (here both are $\mathrm{SO}(3)$ ) as

$$
\begin{equation*}
O \mapsto G_{1} O G_{2}^{-1} \tag{15.133}
\end{equation*}
$$

We will postulate that the boson pair field has a Landau-Ginzburg action of the form (Fradkin et al., 1999)

$$
\begin{align*}
S= & \int d^{3} x\left\{\kappa \operatorname{tr}\left(O^{-1} D_{\mu} O O^{-1} D^{\mu} O\right)+\lambda B_{1}^{\mathrm{T}} O B_{2}\right\} \\
& +\int d^{3} x \sum_{l=1,2}\left|\left(\partial_{\mu} B_{a, l}+i \epsilon_{a b c} \mathcal{A}_{\mu}^{b} B_{c, l}\right)\right|^{2} \\
& +\frac{1}{4 \pi} \sum_{l=1,2} \int_{\Sigma \times \mathbb{R}} d^{3} x \epsilon^{\mu \nu \lambda}\left[\mathcal{A}_{\mu}^{l, a} \partial_{\nu} \mathcal{A}_{\lambda}^{l, a}+\frac{2}{3} f_{a b c} \mathcal{A}_{\mu}^{l, a} \mathcal{A}_{v}^{l, b} \mathcal{A}_{\lambda}^{l, c}\right] \tag{15.134}
\end{align*}
$$

where $D_{\mu}=\partial_{\mu}+i\left[\mathcal{A}_{\mu, 1}-\mathcal{A}_{\mu, 2}\right]$ is the covariant derivative in the adjoint (spin-1) representation of the diagonal $\mathrm{SU}(2)$ subgroup, and $\kappa$ and $\lambda$ are two coupling constants.

In the phase in which the pair field $O$ acquires an expectation value, $\langle O\rangle=I$, the symmetry is broken spontaneously as

$$
\begin{equation*}
\mathrm{SO}(3) \times \mathrm{SO}(3) \mapsto \mathrm{SO}(3) \tag{15.135}
\end{equation*}
$$

and the symmetry is broken down to the diagonal $\mathrm{SO}(3)$ subgroup. Therefore, in this broken-symmetry phase, the order-parameter manifold is the coset $(\mathrm{SO}(3) \times$ $\mathrm{SO}(3)) / \mathrm{SO}(3)$.

In this phase we have a Higgs mechanism and there is a Meissner effect. Indeed, deep in this phase the first term of the action of Eq. (15.134) reduces to a mass term for the relative gauge field $\propto \kappa\left(\mathcal{A}_{\mu, 1}^{a}-\mathcal{A}_{\mu, 2}^{a}\right)^{2}$. Therefore, in the low-energy limit of the paired phase, the massive relative gauge field is frozen out and the two gauge fields become identified with each other. The direct consequence of this result is that the effective action of the average gauge field $\mathcal{A}_{\mu}^{a}=\left(\mathcal{A}_{\mu, 1}^{a}+\mathcal{A}_{\mu, 2}^{a}\right)$ is an $\mathrm{SU}(2)_{2}$ Chern-Simons gauge theory,

$$
\begin{equation*}
S_{\mathrm{CS}}\left[\mathcal{A}_{\mu, 1}^{a}\right]+S_{\mathrm{CS}}\left[\mathcal{A}_{\mu, 2}^{a}\right] \mapsto 2 S_{\mathrm{CS}}\left[\mathcal{A}_{\mu}^{a}\right] \tag{15.136}
\end{equation*}
$$

This construction is easily generalized to the case of a system with $k$ species of bosons. We start again with a system in which the ground state of each species is a $v=1 / 2$ Laughlin state (of bosons) with symmetry $\mathrm{SU}(2)_{1}$ (as before) and the total filling fraction is $v=k / 2$. We now have $k$ spin- 1 Bose fields, $B_{a, l}$, now with $l=1, \ldots, k$. If the bosons pair up again in a spin-triplet p-wave state with the pattern that $B_{1}$ pairs with $B_{2}, B_{2}$ with $B_{3}, \ldots$, and $B_{k-1}$ pairs with $B_{k}$, we will now have a theory with the following symmetry breaking:

$$
\begin{equation*}
\mathrm{SU}(2)_{1} \times \cdots \times \mathrm{SU}(2)_{1} \mapsto \mathrm{SU}(2)_{k} \tag{15.137}
\end{equation*}
$$

Hence this "clustered" state has an effective-field theory that is the $\mathrm{SU}(2)_{k}$ ChernSimons gauge theory. For $k>2$ the resulting effective-field theory describes the Read-Rezayi parafermionic states (Fradkin et al., 1999; Read and Rezayi, 1999).

The order-parameter field has a non-trivial pattern of spontaneous symmetry breaking, given in Eq. (15.135). This effective non-linear sigma model admits topological skyrmion-like excitations. We can now apply the ideas of homotopy theory that were discussed in Section 7.6 to analyze the nature of the topological defects of the $v=1$ Moore-Read state. However, unlike the conventional nonlinear sigma model discussed in Chapter 7, which had an order-parameter-field manifold $\mathrm{SO}(3) / \mathrm{U}(1) \simeq S_{2}$, the order-parameter manifold for the problem we are now discussing is the non-trivial coset $\mathrm{SO}(3) \times \mathrm{SO}(3) / \mathrm{SO}(3)$. In this case, the
skyrmions are similar to vortices and the topologically non-trivial configurations are classified by the homotopy group (Mermin, 1979)

$$
\begin{equation*}
\pi_{1}(\mathrm{SO}(3) \times \mathrm{SO}(3) / \mathrm{SO}(3)) \simeq \mathbb{Z}_{2} \tag{15.138}
\end{equation*}
$$

The origin of this result can be traced back to the fact the $\mathrm{SO}(3)$ is blind to the center $\mathbb{Z}_{2}$ of $\mathrm{SU}(2)$, or, equivalently, this order parameter is a nematic and it is invariant under a rotation by $\pi$. In contrast, if we had a pair condensate of the fundamental (Laughlin) quasiparticles of the $v=1 / 2$ fluids, the order-parameter manifold would have been instead $\mathrm{SU}(2) \times \mathrm{SU}(2) / \mathrm{SU}(2)$, which has a trivial homotopy class, $\pi_{1}(\mathrm{SU}(2) \times \mathrm{SU}(2) / \mathrm{SU}(2)) \simeq 0$, and hence does not have stable half-vortices.

We then conclude that the pair condensate field $O$ supports skyrmions with a $\mathbb{Z}_{2}$ topological charge. The skyrmions of this theory are vortex solutions of the Landau-Ginzburg theory. On points $(r, \theta)$ of a very large circumference $S_{1}$ of radius $r \rightarrow \infty$, the field $O$ approaches asymptotically a rotation matrix

$$
\begin{equation*}
\lim _{r \rightarrow \infty} O(r, \theta)=\mathcal{R}(\hat{n}, \theta) \tag{15.139}
\end{equation*}
$$

where $\hat{n}$ is a unit vector and $0 \leq \theta<2 \pi$. For the energy of this soliton to be finite the relative gauge field $\mathcal{A}_{1, i}^{a}-\mathcal{A}_{2, i}^{a}$ must have the asymptotic behavior

$$
\begin{equation*}
\lim _{r \rightarrow \infty}\left(\mathcal{A}_{1, i}(r, \theta)-\mathcal{A}_{2, i}(r, \theta)\right)=\mathcal{R}(\hat{n}, \theta)^{-1} \partial_{\theta} \mathcal{R}(\hat{n}, \theta) \tag{15.140}
\end{equation*}
$$

There is a different vortex solution for each unit vector $\hat{n}$. These solutions rotate into each other under the action of the unbroken $\mathrm{SO}(3)$. Thus, at the quantum level the vortices carry an $\mathrm{SO}(3)$ quantum number. However, the $\mathbb{Z}_{2}$ topological charge makes the vortices double-valued and hence they carry the spin- $1 / 2$ representation of $\mathrm{SO}(3)$. This double-valuedness is compensated for by a rotation in real space by $\theta \rightarrow \theta+\pi$. Thus, this vortex solution is actually the same as the half-vortex of the $p_{x}+i p_{y}$ superconductor which we discussed in Section 14.9.3. On the other hand, due to the coupling to the $\mathrm{SU}(2)_{2}$ Chern-Simons gauge field, these soliton states give rise to a representation of a quantum group symmetry and exhibit non-abelian braiding statistics. Thus we identity these half-vortices with the Ising twist field (denoted by $\sigma$ ) of the theory of the edge states.

Similarly, the triplet of unpaired bosons will carry the spin-1 representation of $\mathrm{SO}(3)$. However, due to the coupling of the triplet field to the $\mathrm{SU}(2)_{2}$ ChernSimons gauge theory, these states undergo a statistics transmutation and become a triplet of Majorana fermions, again in agreement with our analysis of the edge states. The boson operator (the "electron") of the $v=1$ Moore-Read state, which at the edge is a current, is obtained by fusing the neutral component of the triplet, $B_{3}$ (a "fermionic dipole"), with one of the other components, say $B^{\dagger}$ (which carries the unit of flux of the $\mathrm{U}(1)$ Cartan subgroup of $\mathrm{SU}(2)$ which we identified with the charge sector).

### 15.6 Tunneling conductance at point contacts

In spite of all the beautiful properties of the fractional quantum Hall fluids, it is experimentally very hard to probe them in the bulk. The reason is that, due to the incompressibility of the fluid, i.e. the large energy gap in the bulk, only two types of experimental probes can access the physics of the bulk. One of these types is transport experiments that measure the Hall and longitudinal conductances. These experiments are used to establish the existence of a quantum Hall fluid by observing a plateau in the Hall conductance (quantized to integer or fractional multiples of $\left.e^{2} / h\right)$ and the energy gap through the temperature dependence of the longitudinal conductance. The other type consists of resonance experiments, microwave resonance, nuclear magnetic resonance, and Raman light scattering, which probe the gapped density fluctuations in the bulk. In practice, experiments of the second type can be done only in the fractional quantum Hall states with the largest energy gaps. These experiments have confirmed that incompressible fractional quantum Hall fluids have density fluctuations, known as magneto-phonons, and that their behavior can be predicted by theories that are based on the Laughlin wave function (Girvin et al., 1986) (see Das Sarma and Pinczuk (1997)), on the existence of skyrmion excitations in quantum Hall ferromagnets (Sondhi et al., 1993; Barrett et al., 1995), and on an exciton Bose-Einstein condensate in bilayer quantum Hall systems (Eisenstein and MacDonald, 2004).

On the other hand, since the edge states are gapless, they offer the opportunity to test the more subtle predictions of the theory. The catch is that these experiments are technically quite challenging. We will now discuss several important experimentally testable (and tested) consequences of the theory of the edge states of quantum Hall fluids (integer and fractional).

The ideal way to test the gapless edge states is to tunnel electrons either into these systems or from one edge to the other. However, the edge states on both integer and fractional quantum Hall fluids have a Fermi momentum, which is determined by the Fermi energy of the quantum Hall fluid subject to the confining potential. Thus momentum conservation allows tunneling of electrons from an external reservoir only if translation invariance is broken, for instance by a defect. Such a tunneling center is called a quantum point contact. Similarly, the edge states at the opposite ends of a fluid have opposite momentum and it is not possible to tunnel (electrons or quasiparticles) unless translation invariance somehow is also broken. In this case translation invariance is typically broken by an external gate at some voltage. Since the fluid is incompressible, the gate creates a constriction in the fluid, as shown schematically in Fig. 15.10(a). This point contact is a quantum Hall junction. Here the tunneling process is internal and occurs across the fractional quantum Hall fluid. Two types of experiments have been done with this setup, concerning transport across the junction in Laughlin states (Milliken et al., 1996;
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-666.jpg?height=390&width=1262&top_left_y=190&top_left_x=224)

Figure 15.10 (a) Internal quasiparticle tunneling between two edges of a fractional quantum Hall fluid at a junction created by a constriction of the 2DEG. (b) Tunneling of electrons from a Fermi liquid (FL) (equivalent to a 2DEG with $v=1$ on the right) to a fractional quantum Hall ( FQH ) Laughlin fluid with filling fraction $v=1 / m$ (on the left) at a point contact with tunneling amplitude $\Gamma$.

Roddaro et al., 2004; Stefano et al., 2004) and in non-abelian states (at $v=5 / 2$ ) (Miller et al., 2007; Radu et al., 2008), and noise in the tunneling current both in Laughlin states (de Picciotto et al., 1997; Saminadayar et al., 1997) and in the nonabelian state at $v=5 / 2$ (Dolev et al., 2008). We will discuss these experiments and the theory below.

The other typical experimental setup involves tunneling from some external reservoir of electrons into the edge of a quantum Hall system. A highly idealized version of this junction is shown in Fig. 15.10(b). A more realistic setup involves a quantum Hall fluid separated by a barrier from a usually 3D electron gas. In this case, tunneling takes place at isolated defects along the barrier, which act as tunneling centers. To the extent that these tunneling centers can be regarded as acting independently of each other, this setup reduces to our idealized case. Since the external electron reservoir is 3D, in most cases of experimental relevance in practice it can be regarded as a Fermi liquid, which is a weakly interacting system. For this reason this tunnel junction is equivalent to a junction between the fractional quantum Hall fluid and an integer quantum Hall state, since the quantum numbers of the latter state are the same as in a Fermi liquid. Transport experiments in Laughlin states have been done in this setup (Chang et al., 1996; Chang, 2003).

### 15.6.1 Tunneling Hamiltonians

Let us begin with a theoretical picture of the problem of tunneling of electrons into a fractional quantum Hall edge (Wen, 1991b). As we saw before, in the general case we have several edge states, which can be regarded as a charged edge state and possibly several neutral edge states. We will discuss the simpler case of the Laughlin states, since they have a unique edge. In all of these cases the edge states
are chiral Luttinger liquids. Thus, the quantum Hall junction is just the chiral version of the setup of a scanning tunneling microscope discussed in Section 6.8.2. The results we derived there for a Luttinger liquid apply to the chiral case with only minor changes.

In the case of a quantum Hall junction with a Fermi liquid (see Fig. 15.10(b)), the tunneling Hamiltonian describes processes of electron tunneling from the external reservoir (the "tip," which we regard as a Fermi liquid) and the edge state of the fractional quantum Hall fluid. This system is formally equivalent to the problem of a spinless (non-chiral) Luttinger liquid coupled to an impurity. In this interpretation, the top and bottom edges are the two chiral components of a spinless Luttinger liquid with Luttinger parameter $K=v=1 / m$ and the constriction represents backscattering at the impurity (Kane and Fisher, 1992).

The tunneling Hamiltonian is (with the point contact at $x=0$ )

$$
\begin{equation*}
H=H_{\mathrm{edge}}+H_{\mathrm{FL}}+\Gamma e^{i \omega_{0} t} \psi_{\mathrm{e}, \mathrm{edge}}^{\dagger}(0, t) \psi_{\mathrm{e}, \mathrm{FL}}(0, t)+\text { h.c. } \tag{15.141}
\end{equation*}
$$

where the "Josephson frequency" is $\omega_{0}=e V / \hbar$, and $\Gamma$ is the tunneling matrix element.

The electron propagator of a Laughlin edge state is

$$
\begin{equation*}
G_{\mathrm{e}}(x, t)=\text { constant } \times \frac{1}{(i(x-v t)+\epsilon)^{m}} \tag{15.142}
\end{equation*}
$$

in the limit $\epsilon \rightarrow 0^{+}$. This exponent leads to a tunneling density of states $N(\omega)$,

$$
\begin{equation*}
N(\omega) \sim \operatorname{Im} \lim _{x \rightarrow 0^{+}} \int_{-\infty}^{\infty} d t G_{\mathrm{e}}(x, t) e^{i \omega t} \sim \mathrm{constant} \times|\omega|^{m-1} \tag{15.143}
\end{equation*}
$$

where we have used that

$$
\begin{equation*}
\int_{-\infty}^{\infty} d t \frac{e^{i \omega t}}{(\beta \pm i t)^{\alpha}}=\frac{2 \pi}{\Gamma(\alpha)}( \pm \omega)^{\alpha-1} e^{\mp \beta \omega} \theta( \pm \omega) \tag{15.144}
\end{equation*}
$$

where $\beta=\epsilon+i x, \alpha$ is real and positive, $\Gamma(x)$ is the Euler gamma function, and $\theta(x)$ is the step function.

This result, combined with Fermi's Golden Rule at a tunnel junction with bias $V$, predicts a tunneling current $I$ for electrons tunneling into a chiral Luttinger liquid (CLL) from a Fermi liquid (FL) (see Eq. (6.166))

$$
\begin{equation*}
I_{\mathrm{e}}(V)=2 \pi \frac{e}{\hbar}|\Gamma|^{2} \int_{-e V}^{0} d E N_{\mathrm{CLL}}(E, T) N_{\mathrm{FL}}(E+e V, T) \propto V^{m} \tag{15.145}
\end{equation*}
$$

and a differential tunneling conductance $G(V)$ (see Eq. (6.168))

$$
\begin{equation*}
G_{\mathrm{e}}(V, T)=\frac{d I}{d V} \simeq \frac{2 \pi e}{\hbar}|\Gamma|^{2} N_{\mathrm{FL}}(0) N_{\mathrm{CLL}}(V, T) \propto V^{m-1} \tag{15.146}
\end{equation*}
$$

Hence, we conclude that tunneling conductance of electrons from an external tip (a Fermi liquid) to the edge of a fractional quantum Hall state has a power-law form with an exponent $\alpha=m-1$. Thus, tunneling is suppressed at low bias and vanishes as $V \rightarrow 0$.

The case of a constriction of a quantum Hall fluid created by an external gate, shown in Fig. 15.10(a), can be understood using a similar approach. The difference is that the tunneling is now internal and takes place between two identical edges across the fractional quantum Hall fluid. More importantly, the "particles" which tunnel are the quasiparticles of the quantum Hall state. The tunneling Hamiltonian for Laughlin quasiparticles is

$$
\begin{equation*}
H=H_{\mathrm{R}}+H_{\mathrm{L}}+\Gamma e^{i \omega_{0}^{*} t} \psi_{\mathrm{qp}, \mathrm{~L}}^{\dagger}(0, t) \psi_{\mathrm{qp}, \mathrm{R}}(0, t)+\text { h.c. } \tag{15.147}
\end{equation*}
$$

where we denoted by $H_{\mathrm{R}}$ and $H_{\mathrm{L}}$ the Hamiltonians of the bottom (right-moving, R) and top edges (left-moving, L), respectively, which have opposite chirality. In this case the "Josephson frequency" is $\omega_{0}^{*}=q^{*} V / \hbar$, where $q^{*}=e / m$ is the (fractional) charge of the Laughlin quasiparticle (or quasihole). Similarly the quasiparticle tunneling current $J_{\mathrm{qp}}$ is

$$
\begin{equation*}
J_{\mathrm{qp}}=i \Gamma \frac{e}{m}\left(\psi_{\mathrm{qp}, \mathrm{~L}}^{\dagger}(0, t) \psi_{\mathrm{qp}, \mathrm{R}}(0, t)-\mathrm{h.c.}\right) \tag{15.148}
\end{equation*}
$$

We can now repeat the same steps to obtain a formula for the tunneling current for Laughlin quasiparticles $G_{\mathrm{qp}}$ with the same form as the Golden Rule expression of Eq. (15.145), with the important difference that the densities of states are now those for Laughlin quasiparticles at each edge. The density of states for Laughlin quasiparticles scales as

$$
\begin{equation*}
N_{\mathrm{qp}}(\omega) \sim|\omega|^{1 / m-1} \tag{15.149}
\end{equation*}
$$

which diverges at low frequencies. On putting it all together, we find that the tunneling current of Laughlin quasiparticles has the voltage dependence

$$
\begin{equation*}
I_{\mathrm{qp}}(V)=2 \pi \frac{e}{m \hbar}|\Gamma|^{2} \int_{-e V}^{0} d E N_{\mathrm{CLL}}(E, T) N_{\mathrm{CLL}}(E+e V, T) \propto V^{2 / m-1} \tag{15.150}
\end{equation*}
$$

Thus, the quasiparticle differential conductance $G_{\mathrm{qp}}(V)$ has the scaling form

$$
\begin{equation*}
G_{\mathrm{qp}}(V)=\frac{d I_{\mathrm{qp}}}{d V} \propto V^{2(1 / m-1)} \tag{15.151}
\end{equation*}
$$

For Laughlin states $v=1 / m<1$. Hence the exponent of the power law of the differential conductance is negative, which seemingly implies that the conductance becomes large (and divergent) as the bias $V \rightarrow 0$. This indicates a breakdown of perturbation theory in the tunneling matrix element $\Gamma$ that we will address below.

### 15.6.2 Scaling behavior

We can understand these results using a simple perturbative RG analysis. Indeed, in all the cases we discussed in the limit of no tunneling, $\Gamma=0$, the theory is scaleinvariant, and hence it is a fixed point. The question is whether this fixed point is stable or unstable or, equivalently, whether the tunneling operator is relevant or irrelevant. The chiral electron and quasiparticle operators have scaling dimensions $\Delta_{\mathrm{e}}=m / 2$ and $\Delta_{\mathrm{qp}}=1 /(2 m)$, respectively.

The scaling dimension of the tunneling operator depends on what is tunneling and between which type of states. In the case of electron tunneling between a Fermi liquid and a Laughlin state with $v=1 / m$, the tunneling operator involves removing an electron from one system and adding it to the other. Since the scaling dimension of the tunneling operator of electrons is the sum of the scaling dimensions of the electron operators of each system, we find that in this case the scaling dimension of the electron tunneling operator is $\Delta_{\mathrm{e}, \text { tunnel }}=(m+1) / 2$. In the case of electron tunneling between the edge states of two $v=1 / m$ Laughlin states the scaling dimension of the electron tunneling operator is $\Delta_{\mathrm{e}, \text { tunnel }}[v=$ $1 / m]=m$. Instead, the scaling dimension of the quasiparticle tunneling operator is $\Delta_{\mathrm{qp}, \text { tunnel }}[v=1 / m]=1 / m$.

By following the same analysis as we did in Chapter 4, we can write down the RG beta function for the tunneling amplitude $\Gamma$. The only difference here is that the tunneling operator acts at only one point, say $x=0$, which means that the term in the action of the tunneling process has a delta function $\delta(x)$ that has scaling dimension 1 . Thus, if we denote by $\Delta$ the scaling dimension of the tunneling operator, we can define a dimensionless tunnel amplitude $g$ by

$$
\begin{equation*}
\Gamma=a^{\Delta-1} g \tag{15.152}
\end{equation*}
$$

where $a$ is a short-distance cutoff. We then find that the beta function, to zeroth ("tree-level") order, is

$$
\begin{equation*}
\beta(g)=a \frac{\partial g}{\partial a}=(1-\Delta) g+O\left(g^{2}\right) \tag{15.153}
\end{equation*}
$$

Notice that the coefficient of the (leading) linear term is not $(2-\Delta)$ (where 2 is the dimension of the space-time) but $1-\Delta$, since the operator acts at only one point. This is characteristic of all quantum impurity problems, the prototype of which is the Kondo problem, which describes the coupling of a magnetic impurity embedded in a metal. We will see below that we are actually discussing a boundary CFT.

The form of the beta function, Eq. (15.153), indicates that a tunneling operator is relevant if its scaling dimension is $\Delta<1$, irrelevant if $\Delta>1$, and marginal if $\Delta=1$. Thus, both in the case of electron tunneling from a Fermi liquid to the
edge state of a Laughlin state and in that of electron tunneling between the edge states of Laughlin states, the tunneling operators are irrelevant since in both cases their scaling dimensions are $\Delta=(m+1) / 2>1$ and $\Delta=m>1$. Hence, in the case of electron tunneling the decoupled fixed point is stable. The exception is the case of $v=1$, for which $\Delta=1$ and the tunneling operator is marginal. In contrast, the tunneling operator of quasiparticles between the edges of Laughlin states has scaling dimension $\Delta=1 / m<1$, the tunneling operator is always relevant, and hence the decoupled fixed point is unstable.

These results can be summarized in the following appealing picture, which is due to Kane and Fisher (1992). Let us consider the case of a fractional quantum Hall state with a constriction, with a quasiparticle tunneling amplitude $\Gamma$. The scaling analysis shows that the decoupled fixed point, $\Gamma=0$, is unstable and hence that the effective tunneling amplitude grows at low energies or, equivalently, that there is a growth in the backscattered current. Since the growth of the tunneling amplitude can be interpreted as a narrowing of the constriction, this leads to the natural assumption that the end result of this process is a state in which the quantum Hall fluid is split in two, as shown in Figs. 15.11(a) and (b). In the limit implied by Fig. 15.11(b) the only tunneling process allowed is that of electrons across vacuum between the two edge states, which is irrelevant.

Hence, the main effect of the constriction is a crossover between an unstable weak-coupling fixed point (dominated by quasiparticle tunneling) and a stable strong-coupling fixed point (dominated by electron tunneling). From the point of view of the bulk quantum Hall fluid, this crossover is a change in the topology of the region occupied by the quantum Hall fluid, which is split in two by the constriction.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-670.jpg?height=262&width=583&top_left_y=1524&top_left_x=212)
(a) weak quasiparticle tunneling
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-670.jpg?height=252&width=645&top_left_y=1534&top_left_x=851)
(b) weak electron tunneling

Figure 15.11 Two limiting regimes of a fractional quantum Hall tunneling junction: (a) in the weak-tunneling regime, $\Gamma$ small, quasiparticles tunnel across the fractional quantum Hall fluid at a constriction; and (b) in the strong-tunneling regime, $\Gamma$ large (or dual $\tilde{\Gamma}$ small), the fractional quantum Hall fluid is split and we get electron tunneling between the two fractional quantum Hall fluids across the "vacuum."

The unstable fixed point of a constriction can be regarded as a (quantum) critical fixed point, following the same logic as in Chapter 4. In particular, in this case there is a characteristic crossover energy scale that characterizes the crossover. In the case of the Kondo problem the two fixed points represent the magnetic impurity decoupled from the metal (the unstable weak-coupling fixed point) and the magnetic impurity being screened (or over-screened, depending on the number of channels in the metal) (the stable strong-coupling fixed point). By analogy with the Kondo problem, in the case of the quantum Hall constriction (and junction) we will refer to the crossover energy scale as the "Kondo scale" and denote it by $T_{\mathrm{K}}(g)$ (even though the scaling is different). A simple RG analysis now tells us that the crossover scale depends on the (dimensionless) tunneling amplitude $g$ through a universal scaling law of the form

$$
\begin{equation*}
T_{\mathrm{K}}(g) \sim g^{1 /(1-\Delta)} \tag{15.154}
\end{equation*}
$$

where $\Delta$ is the scaling dimension of the tunneling operator at the unstable fixed point. The exponent of this scaling law is, as in all cases with a relevant perturbation, given by the reciprocal of the slope of the beta function at the unstable fixed point. Thus, if the junction (or constriction) is probed at an energy scale (voltage or temperature) that is large compared with $T_{\mathrm{K}}(g)$ we access the physics of the weakcoupling fixed point. Conversely, if we probe the junction at energy scales low that are compared with $T_{\mathrm{K}}(g)$ we see the physics of the strong-coupling fixed point. In the case of the Kondo problem of a magnetic impurity coupled by exchange to a metal, the exchange interaction is marginally relevant, and the Kondo scale (conventionally denoted by $T_{\mathrm{K}}$ ) depends on the coupling constant $J$ through an essential singularity $T_{\mathrm{K}} \sim \sqrt{J} \exp (-$ constant $/ J)$ (Anderson, 1970; Wilson, 1975).

### 15.6.3 Effective-field theory and boundary conformal field theory

We will now use the chiral-boson description of the edge states of the Laughlin states to develop a non-perturbative description of all three cases: (a) electron tunneling from a Fermi liquid (" $v=1$ ") to a $v=1 / m$ Laughlin state, (b) electron tunneling between the edges of two identical Laughlin states, and (c) quasiparticle tunneling between the edges of a single Laughlin quantum Hall fluid. In all cases we will denote by $\phi_{1}$ and $\phi_{2}$ the right- and left-moving chiral bosons associated with the two edges. The first two cases, (a) and (b), can be treated in a single unified approach (Chamon and Fradkin, 1997), while case (c) will be treated in a simply related fashion (Kane and Fisher, 1992; Fendley et al., 1995a). We will also see that all of these problems are described by a perturbed boundary CFT (Cardy, 1986).

Extensions of this theory have been made in order to describe constrictions in the $v=5 / 2$ non-abelian quantum Hall state in which the tunneling quasiparticle has non-abelian fractional statistics (Fendley et al., 2006). In this case, as we saw in Section 15.4.5, each edge has a charge sector, which is described by a chiral boson that carries the charge, and a neutral sector, which is described by a chiral Majorana fermion. The non-abelian quasiparticle $\sigma$ is a composite object made of the Majorana fermion and a vertex operator of the chiral boson. We will not discuss this problem here.

To develop this theory we will work with the Lagrangian density rather than the Hamiltonian. For the cases (a) and (b) of electron tunneling between two edges with filling fractions $v_{1}$ and $\nu_{2}$ (with $\nu_{1}=1 / m$ and $\nu_{2}=1$ in case (a), and $\nu_{1}=$ $\nu_{2}=1 / m$ in case (b)) at a point contact (or constriction) the Lagrangian density is given by

$$
\begin{align*}
\mathcal{L}= & \frac{1}{4 \pi} \partial_{x} \phi_{1}\left(\partial_{t} \phi_{1}-\partial_{x} \phi_{1}\right)+\frac{1}{4 \pi} \partial_{x} \phi_{2}\left(\partial_{t} \phi_{2}-\partial_{x} \phi_{2}\right) \\
& +\Gamma_{\mathrm{e}} \delta(x)\left(e^{i \omega_{0} t} e^{i\left(\frac{1}{\sqrt{\sqrt{V 1}}} \phi_{1}-\frac{1}{\sqrt{\sqrt{2}}} \phi_{2}\right)}+\text { h.c. }\right) \tag{15.155}
\end{align*}
$$

where $\Gamma_{\mathrm{e}}$ is the amplitude for electron tunneling at the point contact. For quasiparticle tunneling at a constriction with amplitude $\Gamma_{\mathrm{qp}}$ (case (c)) the Lagrangian is instead given by

$$
\begin{align*}
\mathcal{L}= & \frac{1}{4 \pi} \partial_{x} \phi_{1}\left(\partial_{t} \phi_{1}-\partial_{x} \phi_{1}\right)+\frac{1}{4 \pi} \partial_{x} \phi_{2}\left(\partial_{t} \phi_{2}-\partial_{x} \phi_{2}\right) \\
& +\Gamma_{\mathrm{qp}} \delta(x)\left(e^{i \omega_{0}^{*} t} e^{i \sqrt{v}\left(\phi_{1}-\phi_{2}\right)}+\text { h.c. }\right) \tag{15.156}
\end{align*}
$$

where, as before, $\omega_{0}=e V / \hbar$ and $\omega_{0}^{*}=q^{*} V / \hbar=e V /(m \hbar)$ are the Josephson frequencies.

In Eqs. (15.155) and (15.156) we have omitted the Klein factors that insure that the electron operators of different edges anti-commute with each other and that the quasiparticle operators of different edges obey the anyon algebra, since their product depends on the total combined charge of both edges and it is a constant of motion. Hence these factors can be absorbed (in this case) into a simple redefinition of the tunneling matrix element $\Gamma$. In addition, in both cases we have set the edge velocities to $v=1$, which we can do without loss of generality since we have a single point contact. For the same reason we can also use the same coordinate $x$ to denote the arc lengths along each edge. Also, and for the same reason, both in Eq. (15.155) and in Eq. (15.156) we carried out a parity transformation $x \leftrightarrow-x$ on the left-moving edge (which amounts to flipping the direction of the top edge) and so both chiral bosons are "right-moving." For reasons of clarity we still denote the chiral bosons by $\phi_{1}$ and $\phi_{2}$.

Next, in Eq. (15.155) we perform an orthogonal transformation to new fields $\phi_{1}^{\prime}$ and $\phi_{2}^{\prime}$ to map the problem of electron tunneling between inequivalent edges into a problem of "electron" tunneling between the (equivalent) edges of two fluids with the same effective filling fraction $\bar{v}$. The transformation is

$$
\binom{\phi_{1}^{\prime}}{\phi_{2}^{\prime}}=\left(\begin{array}{cc}
\cos \theta & \sin \theta  \tag{15.157}\\
-\sin \theta & \cos \theta
\end{array}\right)\binom{\phi_{\mathrm{a}}}{\phi_{\mathrm{b}}}
$$

where

$$
\begin{equation*}
\cos \theta=\frac{1}{\sqrt{2}} \frac{\sqrt{v_{1}^{-1}}+\sqrt{v_{2}^{-1}}}{\sqrt{v_{1}^{-1}+v_{2}^{-1}}}, \quad \sin \theta=\frac{1}{\sqrt{2}} \frac{\sqrt{v_{1}^{-1}}-\sqrt{v_{2}^{-1}}}{\sqrt{v_{1}^{-1}+v_{2}^{-1}}} \tag{15.158}
\end{equation*}
$$

The Lagrangian of Eq. (15.155) in terms of the transformed fields becomes

$$
\begin{align*}
\mathcal{L}= & \frac{1}{4 \pi} \partial_{x} \phi_{1}^{\prime}\left(\partial_{t} \phi_{1}^{\prime}-\partial_{x} \phi_{1}^{\prime}\right)+\frac{1}{4 \pi} \partial_{x} \phi_{2}^{\prime}\left(\partial_{t} \phi_{2}^{\prime}-\partial_{x} \phi_{2}^{\prime}\right) \\
& +\Gamma_{\mathrm{e}} \delta(x)\left(e^{i \omega_{0} t} e^{i \frac{1}{\sqrt{\bar{v}}}\left(\phi_{1}^{\prime}-\phi_{2}^{\prime}\right)}+\text { h.c. }\right) \tag{15.159}
\end{align*}
$$

where $\bar{v}$ is given by

$$
\begin{equation*}
\bar{v}^{-1}=\frac{1}{2}\left(v_{1}^{-1}+v_{2}^{-1}\right) \tag{15.160}
\end{equation*}
$$

Thus, the rotated fields describe a problem of a quantum point contact for electron tunneling between two identical edges of filling fraction $\bar{v}$. In particular, the problem of electron tunneling between a Fermi liquid (which we represent as the edge of a quantum Hall state with $\nu_{1}=1$ ) and a Laughlin state with $\nu_{2}=\nu=1 / m$ is equivalent to the tunneling of electrons between two identical quantum Hall fluids with a filling fraction $\bar{v}$ given by

$$
\begin{equation*}
\bar{v}^{-1}=\frac{1+v^{-1}}{2}=\frac{m+1}{2} \tag{15.161}
\end{equation*}
$$

For instance, for $v=1 / 3$ the equivalent system has an effective filling fraction $\bar{v}=1 / 2$, which is equivalent to a problem of tunneling between identical bosonic Laughlin states, and hence the tunneling "electron" becomes a boson of charge 1. For $v=1 / 5$ the equivalent problem has $\bar{v}=1 / 3$, and the tunneling "electron" is a fermion of charge 1.

The mapping to a theory of two identical edges with effective filling fraction $\bar{v}$ suggests that there should exist a quasiparticle of charge $\bar{v}$. However, such a quasiparticle does not exist in each decoupled edge! This is telling us that this innocent-looking orthogonal transformation is gluing together the Hilbert spaces of the individual edges (two macroscopic systems) in a non-trivial way, and that this
quasiparticle has to be interpreted as a soliton of the tunneling process. Actually, it is necessary to enlarge the Hilbert space in order to describe the decoupled edges and the system at finite tunneling amplitude (Hsu et al., 2009a).

In this formulation the problems of electron tunneling (cases (a) and (b)) and of quasiparticle tunneling (case (c)) have very similar forms. In what follows we will drop the primes on the fields for the electron-tunneling cases and set $\phi_{1}^{\prime} \rightarrow \phi_{1}$ and $\phi_{2}^{\prime} \rightarrow \phi_{2}$. Similarly, we will not distinguish the filling factor $v$ of case (a) from the effective filling factor $\bar{v}$ of case (b), and specify which case it is as needed.

We will take advantage now of the form of Eq. (15.159) and Eq. (15.156) to make another orthogonal transformation, to even and odd combinations of the fields, $\phi_{\mathrm{e}}$ and $\phi_{0}$,

$$
\begin{equation*}
\phi_{1}=\frac{1}{\sqrt{2}}\left(\phi_{\mathrm{e}}+\phi_{\mathrm{o}}\right), \quad \phi_{2}=\frac{1}{\sqrt{2}}\left(\phi_{\mathrm{e}}-\phi_{\mathrm{o}}\right) \tag{15.162}
\end{equation*}
$$

In this new basis, the Lagrangian for electron tunneling becomes

$$
\begin{align*}
\mathcal{L}= & \frac{1}{4 \pi} \partial_{x} \phi_{\mathrm{e}}\left(\partial_{t} \phi_{\mathrm{e}}-\partial_{x} \phi_{\mathrm{e}}\right)+\frac{1}{4 \pi} \partial_{x} \phi_{\mathrm{o}}\left(\partial_{t} \phi_{\mathrm{o}}-\partial_{x} \phi_{\mathrm{o}}\right) \\
& +\Gamma_{\mathrm{e}} \delta(x)\left(e^{i \omega_{0} t} e^{i \sqrt{\frac{2}{\nu}} \phi_{\mathrm{o}}}+\text { h.c. }\right) \tag{15.163}
\end{align*}
$$

while the Lagrangian for quasiparticle tunneling is

$$
\begin{align*}
\mathcal{L}= & \frac{1}{4 \pi} \partial_{x} \phi_{\mathrm{e}}\left(\partial_{t} \phi_{\mathrm{e}}-\partial_{x} \phi_{\mathrm{e}}\right)+\frac{1}{4 \pi} \partial_{x} \phi_{\mathrm{o}}\left(\partial_{t} \phi_{\mathrm{o}}-\partial_{x} \phi_{\mathrm{o}}\right) \\
& +\Gamma_{\mathrm{qp}} \delta(x)\left(e^{i \omega_{0}^{*} t} e^{i \sqrt{2 v} \phi_{\mathrm{o}}}+\text { h.c. }\right) \tag{15.164}
\end{align*}
$$

We see that in both electron and quasiparticle tunneling the even field $\phi_{\mathrm{e}}$ is insensitive to the tunneling process and decouples. This is not an accident since the charge defined by the even field is the total charge of both edges, $Q_{\mathrm{e}}=Q_{1}+Q_{2}=$ $Q$, which is conserved by the tunneling process, which involves only the field $\phi_{0}$. Naturally, the tunneling currents both for electrons, $I_{\mathrm{e}}$, and for quasiparticles, $I_{\mathrm{qp}}$, involve only the field $\phi_{0}$,

$$
\begin{equation*}
I_{\mathrm{e}} \sim 2 \mathrm{e} \Gamma_{\mathrm{e}} \sin \left(\sqrt{\frac{2}{v}} \phi_{\mathrm{o}}+\frac{e V}{\hbar} t\right), \quad I_{\mathrm{qp}} \sim 2 \frac{e}{m} \Gamma_{\mathrm{qp}} \sin \left(\sqrt{2 v} \phi_{\mathrm{o}}+\frac{e \nu V}{\hbar} t\right) \tag{15.165}
\end{equation*}
$$

In what follows we will focus on the field $\phi_{0}$, which describes the tunneling process, and drop the decoupled total charge field $\phi_{\mathrm{e}}$.

The odd field $\phi_{0}$ is a chiral boson that is coupled to a vertex operator (the tunneling operator) at $x=0$. We can map this problem to a system described by a non-chiral boson defined (for all times) only on the half-line $x \geq 0$. Let $\varphi(x, t)$ be
a non-chiral boson defined on the half-line. The field $\phi(x, t)$ in turn can be decomposed into two chiral bosons, namely its right- and left-moving components $\varphi_{\mathrm{R}}$ and $\varphi_{\mathrm{L}}$ (as we did in Chapter 6), which are related to the odd field $\phi_{0}$. These fields are now defined on the entire line as follows:

$$
\begin{equation*}
\varphi_{\mathrm{R}}(x, t)=\phi_{0}(x, t), \quad \varphi_{\mathrm{L}}(x, t)=\phi_{0}(-x, t) \tag{15.166}
\end{equation*}
$$

We will refer to this transformation as the "folding" of the $x$ axis on the positive half-line. In terms of the folded field $\varphi$ the Euclidean action for the odd field becomes, for the two electron tunneling cases we discussed,

$$
\begin{equation*}
S=\frac{1}{8 \pi} \int_{-\infty}^{\infty} d t \int_{0}^{\infty} d x\left(\partial_{\mu} \varphi\right)^{2}+\Gamma_{\mathrm{e}} \int_{-\infty}^{\infty} d t \cos \left(\frac{1}{\sqrt{2 v}} \varphi(0, t)\right) \tag{15.167}
\end{equation*}
$$

and, for quasiparticle tunneling,

$$
\begin{equation*}
S=\frac{1}{8 \pi} \int_{-\infty}^{\infty} d t \int_{0}^{\infty} d x\left(\partial_{\mu} \varphi\right)^{2}+\Gamma_{\mathrm{qp}} \int_{-\infty}^{\infty} d t \cos \left(\sqrt{\frac{\nu}{2}} \varphi(0, t)\right) \tag{15.168}
\end{equation*}
$$

The action(s) of Eqs. (15.167) and (15.168) look very similar to the action of the sine-Gordon theory, which was discussed in Chapters 4 and 5, except for the fact that (a) the space is restricted to the half-line $x \geq 0$ and (b) the vertex operator acts only on the boundary of the space-time, $x=0$. For this reason this system is known as the boundary sine-Gordon theory.

The free compactified boson $\varphi$ in two (or $1+1$ ) dimensions is a CFT (see Chapters 4 and 7). In the case at hand this CFT lives on a space that is half the line, $x>0$, and for all times. In its Euclidean version the space-time is the right halfplane. The boundary vertex operators that enter in Eq. (15.167) and Eq. (15.168) can affect only the boundary conditions of the field $\varphi$. Thus, if the vertex operators representing tunneling are absent, the field $\varphi$ obeys Neumann boundary conditions, $\partial_{x} \varphi=0$. More physically, this means that, in the absence of tunneling, the tunneling current must vanish. On the other hand, in the limit of strong tunneling, the field $\varphi$ is pinned at the classical minima of the cosine operators, given by $\varphi=\sqrt{2 \nu} 2 \pi n$ (with $n \in \mathbb{Z}$ ) for electron tunneling and $\varphi=\sqrt{2 / \nu} 2 \pi n$ for quasiparticle tunneling, and hence obeys Dirichlet boundary conditions, $\varphi=$ constant.

Let us consider the case of quasiparticle tunneling at a constriction (case (c)). This situation is described by a theory of a free compactified boson on the halfplane $x>0$, with Neumann boundary conditions, perturbed by the boundary vertex operator $\cos (\sqrt{\nu / 2} \varphi)$, which represents quasiparticle-tunneling processes. We saw above that the scaling dimension of the quasiparticle-tunneling operator is $v=$ $1 / m<1$. Hence it is a relevant perturbation and this fixed point is unstable. To see how this comes about in the boundary sine-Gordon picture, we note first that the Neumann boundary condition changes the correlators of the free boson. We will
work in the Euclidean theory. If we denote by $G_{0}\left(\vec{x}, \vec{x}^{\prime}\right)=G_{0}\left(\vec{x}-\vec{x}^{\prime}\right)$ the correlator of the free boson on the entire plane, we obtain the correlator on the half-plane with Neumann boundary conditions $G_{\mathrm{N}}\left(\vec{x}, \vec{x}^{\prime}\right)$ using the method of image charges,

$$
\begin{equation*}
G_{\mathrm{N}}\left(\vec{x}, \vec{x}^{\prime}\right)=G_{0}\left(x-x^{\prime}, \tau-\tau^{\prime}\right)+G_{0}\left(x+x^{\prime}, \tau-\tau^{\prime}\right) \tag{15.169}
\end{equation*}
$$

which satisfies the Neumann boundary condition. Notice that this propagator is not invariant under translations along the $x$ axis but is invariant under translations along the $\tau$ axis, as it should be. As a result of the boundary (and of the boundary condition), the scaling dimension of the vertex operator on the boundary is twice the scaling dimension in the bulk, $\Delta=2(v / 2)=v$, which is consistent with our earlier analysis.

Since this fixed point is unstable, we guess that it must flow to a regime in which the tunneling amplitude $\Gamma_{\mathrm{qp}}$ becomes large, $\Gamma_{\mathrm{qp}} \rightarrow \infty$, and the boson $\varphi$ now obeys Dirichlet boundary conditions. In other terms, the effect of the boundary vertex operator is to induce a flow in the boundary conditions from Neumann (the unstable fixed point) to Dirichlet (the stable fixed point). On the other hand, in terms of the dual field $\vartheta$, which we introduced in Section 5.6.2, Eqs. (5.278), the Neumann boundary condition maps onto a Dirichlet boundary condition since $\varphi$ and the dual field $\vartheta$ satisfy the dual (Cauchy-Riemann) relations Eq. (5.280) which imply that

$$
\begin{equation*}
\partial_{x} \varphi=-\partial_{\tau} \vartheta, \quad \partial_{\tau} \varphi=\partial_{x} \vartheta \tag{15.170}
\end{equation*}
$$

Hence, Dirichlet boundary conditions for the field $\varphi, \partial_{\tau} \varphi=0$, i.e. $\varphi=$ constant, maps onto Neumann boundary conditions for the dual field, $\partial_{x} \vartheta=0$. This mapping is known as $T$ duality. On the other hand, in our discussion of the Luttinger model in Chapter 6, we saw that under $T$ duality the Luttinger parameter $K=$ $v \mapsto 1 / K=1 / v$. However, in the boundary sine-Gordon system, Eq. (15.167) and Eq. (15.168), we see that we can identify the Luttinger parameter with the filling factor, $K=v$. Thus, $T$ duality maps the quasiparticle operator onto the electron operator and vice versa. Hence, $T$ duality maps the problem of Eq. (15.167) at strong coupling to Eq. (15.168) at weak coupling. The crossover between these two fixed points takes place at the crossover scale (the "Kondo scale") $T_{\mathrm{K}} \sim \Gamma_{\mathrm{qp}}^{1 /(1-\nu)}$, since the boundary scaling dimension of the vertex operator is $v=1 / m$.

Affleck and Ludwig (1991) considered the effects of boundary conditions on the entropy of CFTs. Using the methods of boundary CFT (Cardy, 1986, 1989), they examined the behavior of the thermodynamic entropy of a CFT as a function of temperature $T$ and system size $L$. They showed that in a 1D quantum critical system, i.e. a CFT, in the thermodynamic limit $L \rightarrow \infty$ the entropy has a finite non-extensive limit as $T \rightarrow 0$ given by

$$
\begin{equation*}
S=\ln g \tag{15.171}
\end{equation*}
$$

where $g$ is known as the Affleck-Ludwig degeneracy. Furthermore, Affleck and Ludwig also showed that, if the CFT has a perturbation that acts only at the boundary, it induces a flow in the degeneracy $g$ that has universal values for conformal boundary conditions. This is precisely the case in the boundary sine-Gordon theory we are interested in here. In particular, the Affleck-Ludwig degeneracy vanishes for Dirichlet boundary conditions but is non-zero for Neumann boundary conditions, under which it takes the value $g=\ln \sqrt{m}$. In general the Affleck-Ludwig entropy is determined by the fusion rules of the primary fields associated with the conformal boundary conditions and can be computed from the modular $S$-matrix of the conformal field theory using the Verlinde formula.

It is instructive to construct the perturbation series in powers of the coupling constant $\Gamma_{\mathrm{qp}}$ of the Euclidean form of the path integral for the boundary sineGordon field $\varphi$ obeying Neumann boundary conditions at $x=0$, whose action is given in Eq. (15.168). The correlator of the field $\varphi$ along the imaginary time axis is

$$
\begin{equation*}
\langle N| \varphi(\tau, 0) \varphi(0,0)|N\rangle=-\ln \tau^{2} \tag{15.172}
\end{equation*}
$$

where $|N\rangle$ denotes the ground state of the field $\varphi$ with Neumann boundary conditions. Let $T^{ \pm}$denote the vertex operator for quasiparticle tunneling, $T^{ \pm}=$ $\exp ( \pm i \sqrt{v / 2} \varphi)$. The tunneling term of the action now has the form

$$
\begin{equation*}
S_{\mathrm{tun}}=\int d \tau\left[\Gamma T^{+}(\tau)+\Gamma^{*} T^{-}(\tau)\right] \tag{15.173}
\end{equation*}
$$

The $n$ th-order term of the expansion in powers of the tunneling amplitude $\Gamma_{\mathrm{qp}}$ (where we absorb the oscillatory factor) involves the computation of an expectation value of the $n$ vertex operators $T^{ \pm}$at $n$ (imaginary) times $\tau_{j}(j=1, \ldots, n)$ for a field $\varphi$ with Neumann boundary conditions that has the form of a logarithmic gas along the imaginary-time axis (see Kane and Fisher (1992) and Chamon et al. (2007)),

$$
\begin{equation*}
\langle N| T^{q_{n}} \ldots T_{1}^{q}|N\rangle=\delta\left(\sum_{j} q_{j}\right) \exp \left(v \sum_{j>k} q_{j} q_{k} \ln \left|\tau_{j}-\tau_{k}\right|^{2}\right) \tag{15.174}
\end{equation*}
$$

where we defined the charges $q_{j}= \pm 1$ to represent the insertions of the vertex operators. The delta-function factor enforces charge neutrality.

We can also construct a similar expansion about the strong-coupling fixed point at which the field $\varphi$ is pinned (at the boundary) and obeys Dirichlet boundary conditions, which we will represent as the state $|D\rangle$. This expansion now involves a series of instanton and anti-instanton processes that represent the tunneling between successive vacua of the field $\varphi$ at the boundary. However, we can use $T$ duality to map the limit of strong quasiparticle tunneling to the weak-coupling regime for
tunneling of electrons in terms of the dual field $\vartheta$ obeying Neumann boundary conditions. The propagator of the field now is

$$
\begin{equation*}
\langle D| \varphi(\tau) \varphi(0)|D\rangle=\langle N| \vartheta(\tau) \vartheta(0)|N\rangle=-\ln \tau^{2} \tag{15.175}
\end{equation*}
$$

Hence the new perturbation series now involves the computation of the expectation value of the insertion of $n$ vertex operators of the dual field, $\tilde{T}^{ \pm}=$ $\exp ( \pm i \varphi / \sqrt{2 v})$, which takes the form

$$
\begin{equation*}
\langle D| \tilde{T}^{q_{1}}\left(\tau_{1}\right) \ldots \tilde{T}^{q_{n}}\left(\tau_{n}\right)|D\rangle=\delta\left(\sum_{j} q_{j}\right) \exp \left(\frac{1}{v} \sum_{j>k} q_{j} q_{k} \ln \left|\tau_{j}-\tau_{k}\right|^{2}\right) \tag{15.176}
\end{equation*}
$$

which is the same expression as that which we would have obtained for electron tunneling. Thus, up to a redefinition of the coupling constant, we see that $T$ duality maps quasiparticle tunneling to electron tunneling and vice versa.

It turns out that the boundary sine-Gordon theory is actually an integrable system solvable by the (thermodynamic) Bethe ansatz (Fendley et al., 1994). The exact solution of the boundary sine-Gordon theory is explicitly self-dual. Using this approach, whose details we will not go into here, Fendley, Ludwig, and Saleur (Fendley et al., 1995a, b) showed that at zero temperature, $T=0$, the quasiparticle tunneling current $I_{\mathrm{t}}$ obeys explicitly the duality relation

$$
\begin{equation*}
I_{\mathrm{t}}\left(T_{\mathrm{K}}, V, v\right)=\frac{e^{2}}{h} v V-v^{2} I_{\mathrm{t}}\left(T_{\mathrm{K}}, V, v^{-1}\right) \tag{15.177}
\end{equation*}
$$

Furthermore, the differential tunneling conductance $G_{\mathrm{t}}(V)$ at voltage $V$ can be expressed in terms of two series (related to each other by $T$ duality):

$$
G_{\mathrm{t}}(V)=\left\{\begin{array}{l}
\frac{e^{2}}{h} \sum_{n=1}^{\infty} c_{n}\left(v^{-1}\right)\left(\frac{e V}{T_{\mathrm{K}}}\right)^{2 n\left(v^{-1}-1\right)}, \quad \frac{e V}{T_{\mathrm{K}}}<e^{\delta}  \tag{15.178}\\
\frac{e^{2}}{h} v\left[1-\sum_{n=1}^{\infty} c_{n}(v)\left(\frac{e V}{T_{\mathrm{K}}}\right)^{2 n(v-1)}\right], \quad \frac{e V}{T_{\mathrm{K}}}>e^{\delta}
\end{array}\right.
$$

where, as before, the crossover scale is $T_{\mathrm{K}}=$ constant $\times \Gamma_{\mathrm{qP}}^{1 /(1-\nu)}$. The coefficients $c_{n}$ are

$$
\begin{equation*}
c_{n}(v)=(-1)^{n+1} \frac{\Gamma(n v) \sqrt{\pi}}{\Gamma(n) \Gamma(n(v-1)+1 / 2)} \tag{15.179}
\end{equation*}
$$

where $\Gamma(z)$ is the Euler gamma function, and in this case $\delta=\frac{1}{2} \ln \left(v^{-1}-1\right)-$ $(1 /(2(1-v))) \ln \nu$.

The results of Eq. (15.178) show that in the low-voltage regime the differential conductance is suppressed, and vanishes as $V^{2(m-1)}$. This is consistent with the
low-energy limit being governed by the stable fixed point at which the fluid is split into two parts that are weakly coupled by electron tunneling, which is irrelevant. Conversely, in the large-voltage regime the differential conductance approaches $v e^{2} / h$, the Hall conductance of the bulk fluid. This is consistent with this limit being controlled by the unstable fixed point at which the constriction is open and for which quasiparticle tunneling is relevant. This non-trivial behavior, including the crossover, which was originally proposed by Kane and Fisher (1992), has been verified experimentally by Roddaro and coworkers (Roddaro et al., 2004; Stefano et al., 2004).

The problem of tunneling into a quantum Hall edge state from a Fermi liquid at a point contact has been solved by a similar approach (Chamon and Fradkin, 1997). The crossover behavior for this case was in general terms verified by experiment (Chang et al., 1996; Chang, 2003), although the observed tunneling exponent does not quite agree with the theoretical prediction. Presumably this discrepancy may be due to the fact that in this experiment the setup is closer to a line junction (or, rather, an array of point contacts) instead of a single point contact, which is what the theory actually describes.

### 15.7 Noise and fractional charge

We will now apply the formalism of the preceding section to the problem of shot noise in the tunneling current. The interest of this question is that it gives a direct way to measure the fractional charge of the quasiparticles. Here we will discuss the simplest case, namely the tunneling current in a quantum Hall constriction of a Laughlin state.

The noise spectrum $S(\omega)$ of the quasiparticle-tunneling current $I_{\mathrm{qp}}$ is obtained from the tunneling-current correlation function by the expression (Kane and Fisher, 1994; Chamon et al., 1996)

$$
\begin{equation*}
S(\omega)=\int_{-\infty}^{\infty} d t\left\langle\left\{I_{\mathrm{qp}}(t), I_{\mathrm{qp}}(0)\right\}\right\rangle e^{i \omega t} \tag{15.180}
\end{equation*}
$$

where $I_{\mathrm{qp}}=2 e \nu \Gamma_{\mathrm{qp}} \sin \left(\sqrt{\nu / 2} \varphi+\omega_{0}^{*} t\right)$ is the quasiparticle-tunneling current defined in Eq. (15.165) and $\omega_{0}^{*}=e \nu V / \hbar$.

The quasiparticle-tunneling-current correlator is

$$
\begin{align*}
\left\langle I_{\mathrm{qp}}(t) I_{\mathrm{qp}}(0)\right\rangle= & \left(\frac{e}{m}\right)^{2}\left|\Gamma_{\mathrm{qp}}\right|^{2} e^{i \omega_{0}^{*} t} \\
& \times\left\langle\exp \left(i \sqrt{\frac{\nu}{2}} \varphi(t)\right) \exp \left(-i \sqrt{\frac{\nu}{2}} \varphi(0)\right)\right\rangle+\text { c.c. } \tag{15.181}
\end{align*}
$$

To lowest order in the matrix element $\Gamma_{\mathrm{qp}}$ it is given by

$$
\begin{equation*}
\left\langle I_{\mathrm{qp}}(t) I_{\mathrm{qp}}(0)\right\rangle=(e \nu)^{2}\left|\Gamma_{\mathrm{qp}}\right|^{2} \frac{2 \cos \left(\omega_{0}^{*} t\right)}{(\epsilon+i t)^{2 \nu}} \tag{15.182}
\end{equation*}
$$

Thus, the spectral function $S(\omega)$ is found to be (Chamon et al., 1996)

$$
\begin{equation*}
S(\omega)=(e \nu)^{2} \Gamma_{\mathrm{qp}}^{2}\left[f_{+}\left(\omega_{0}^{*}+\omega\right)+f_{-}\left(\omega_{0}^{*}+\omega\right)+f_{+}\left(\omega_{0}^{*}-\omega\right)+f_{+}\left(\omega_{0}^{*}-\omega\right)\right] \tag{15.183}
\end{equation*}
$$

where

$$
\begin{equation*}
f_{ \pm}(\omega)=\int_{-\infty}^{\infty} d p \frac{e^{i \omega p}}{(\epsilon \mp i p)^{2 v}}=\frac{2 \pi}{\Gamma(2 v)}|\omega|^{2 v-1} e^{-|\omega| \epsilon} \theta( \pm \omega) \tag{15.184}
\end{equation*}
$$

where $\Gamma(x)$ is the Euler gamma function and $\theta(x)$ is the step function. Using the result that the expectation value of the tunneling current at voltage $V$, to lowest order in $\Gamma_{\mathrm{qp}}$, is given by

$$
\begin{equation*}
\left\langle I_{\mathrm{qp}}\right\rangle=\frac{2 \pi}{\Gamma(2 \nu)} e \nu\left|\Gamma_{\mathrm{qp}}\right|^{2} \omega_{0}^{* 2 \nu-1} \tag{15.185}
\end{equation*}
$$

we find that the noise spectrum is

$$
\begin{equation*}
S(\omega)=e v\left\langle I_{\mathrm{qp}}\right\rangle\left[\left(1-\frac{\omega}{\omega_{0}^{*}}\right)^{2 \nu-1}+\left(1+\frac{\omega}{\omega_{0}^{*}}\right)^{2 \nu-1}\right] \tag{15.186}
\end{equation*}
$$

In the limit of zero frequency, the noise spectrum approaches the shot-noise form

$$
\begin{equation*}
\lim _{\omega \rightarrow 0} S(\omega)=2 e^{*}\left\langle I_{\mathrm{qp}}\right\rangle \tag{15.187}
\end{equation*}
$$

with $e^{*}=e v=e / m$. Therefore a measurement of the shot noise of the tunneling current measures directly the fractional charge of the quasiparticles (Kane and Fisher, 1994).

The result of Eq. (15.187) has been used to measure the fractional charge of the quasiparticles in tunneling-current-noise experiments (de Picciotto et al., 1997; Saminadayar et al., 1997) in Laughlin states, and in the non-abelian state with filling fraction 5/2 (Dolev et al., 2008). The experimental results are generally consistent with the quasiparticles having a fractional charge, although there are unresolved questions regarding the experiments.

### 15.8 Quantum interferometers

Constrictions and point-contact tunneling offer a way to measure the fractional charge of the quasiparticles. However, to measure the fractional statistics it is
necessary for the quasiparticles to have more than one interference pathway. In principle the simplest way to measure the fractional statistics is a quantum interferometer of the type shown in Fig. 15.12, which is an idealized description of such a device, a "Fabry-Pérot" interferometer.

The theory of the quantum Hall interferometer for Laughlin states was developed by Chamon et al. (1997). This theory was extended to the case of non-abelian states (Fradkin et al., 1998; Bonderson et al., 2006; Stern and Halperin, 2006; Bishara et al., 2009). Several experimental groups have tested these theoretical results. The predictions of Chamon et al. (1997) for the Laughlin state at $v=1 / 3$ have been tested by Camino et al. (2005), who, up to some interpretation issues, have qualitatively confirmed the theoretical results. The interferometer for the non-abelian quantum Hall state at $v=5 / 2$ has been the focus of challenging experiments that at least qualitatively have produced results agreeing with the theoretical predictions (Willett et al., 2010).

We will consider a Laughlin quantum Hall state with two constrictions, as shown in Fig. 15.12, located at coordinates $x_{j}(j=1,2)$, with the $x$ axis running parallel to the edges. The tunneling-matrix elements are, respectively, $\Gamma_{1}$ and $\Gamma_{2}$. The flux $\Phi$ enclosed in the region $x_{1} \leq x \leq x_{2}$, which enters into the theory through the phase of the tunneling amplitudes, creates a number $N_{\mathrm{q}}$ of Laughlin quasiparticles/quasiholes, and thus controls the deviation of the flux-charge relation for the ideal fractional quantum Hall state. The tunneling currents in the two constrictions are labeled by $I_{1}$ and $I_{2}$.

In the absence of constrictions, the transmitted current along (say) the bottom edge is simply the Hall current $I_{\mathrm{H}}$, with a Hall conductance $v e^{2} / h$. In the presence of the constrictions, the transmitted current is reduced to $I_{\text {trans }}=I_{\mathrm{H}}-\left(I_{1}+I_{2}\right)$. This transmitted current will exhibit oscillations as a function of the flux $\Phi$ due to (a) the Aharonov-Bohm processes affecting the tunneling quasiparticles and (b) an
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-681.jpg?height=400&width=911&top_left_y=1607&top_left_x=395)

Figure 15.12 A fractional quantum Hall (FQH) interferometer.
additional interference due to the fractional statistics of the tunneling quasiparticles with localized quasiparticles in the region between the two constrictions. Which interference process is seen depends on how the interferometer is operated. If we keep the filling fraction fixed as the external magnetic field is varied, the oscillation will be due entirely to the Aharonov-Bohm effect, since no quasiparticles are added to (or subtracted from) the bulk. If, on the other hand, the number of particles in the interference region is held fixed, the oscillations are due to both the AharonovBohm effect and the fractional statistics of the quasiparticles. Since the AharonovBohm oscillation depends on the charge of the tunneling quasiparticle, in this mode the interferometer can also be used to measure the fractional charge. It is in practice hard to control the total charge enclosed in the interference region, and this makes the operation of the interferometer difficult, leading to subtle but revealing effects (Halperin et al., 2011). For simplicity, we will ignore these problems and assume that the ideal conditions can be reproduced in the experiment.

### 15.8.1 Interferometers for abelian quantum Hall states

The theory of the quantum Hall interferometer for abelian (Laughlin) states developed by Chamon et al. (1997), whose work we will follow in this section, is constructed as an extension of the theory of tunneling at quantum Hall constrictions which we presented in the preceding section. Let $\phi_{\mathrm{L}}$ and $\phi_{\mathrm{R}}$ be, respectively, the chiral bosons for the top and bottom edges of the quantum Hall fluid as depicted in Fig. 15.12. We will assume that the tunneling-matrix elements $\Gamma_{1}$ and $\Gamma_{2}$ are weak enough that we can use perturbation theory to describe the interference. However, unlike the case of a single point contact, we will not be able to simplify the discussion by "flipping" the direction of flow along one of the edges. Instead we will regard $\phi_{\mathrm{R}}$ and $\phi_{\mathrm{L}}$ as the two chiral components of a single non-chiral boson $\phi=$ $\phi_{\mathrm{R}}+\phi_{\mathrm{L}}$ as in the bosonized theory of the Luttinger liquid discussed in Chapter 6. In this language, the quasiparticle operators $\Psi_{\mathrm{qp}, \mathrm{R}}$ and $\Psi_{\mathrm{qp}, \mathrm{L}}$ of each edge are

$$
\begin{equation*}
\Psi_{\mathrm{qp}, \mathrm{R}} \propto e^{i \sqrt{v} \phi_{\mathrm{R}}} e^{i k_{\mathrm{F}} x}, \quad \Psi_{\mathrm{qp}, \mathrm{~L}} \propto e^{-i \sqrt{v} \phi_{\mathrm{L}}} e^{-i k_{\mathrm{F}} x} \tag{15.188}
\end{equation*}
$$

where $k_{\mathrm{F}}$ is the momentum of the quasiparticles (which can be neglected for a single point contact). If $A$ is the area of the quantum Hall fluid enclosed between the two point contacts, then the momentum difference of electrons in the top and bottom edges is $2 k_{\mathrm{F}, \mathrm{e}}=2 \pi B A / \phi_{0}$ (where $B A=\Phi$ and $\phi_{0}=h c / e$ is the flux quantum), whereas for quasiparticles it is instead $2 k_{\mathrm{F}}=\nu 2 k_{\mathrm{F}, \mathrm{e}}$. These phase factors can be absorbed into the definition of the tunneling amplitudes,

$$
\begin{equation*}
\Gamma_{1,2}=\bar{\Gamma}_{1,2} e^{ \pm i \pi \nu \Phi / \phi_{0}} \tag{15.189}
\end{equation*}
$$

With these definitions the Lagrangian (density) of the edge states of a Laughlin quantum Hall fluid with two constrictions is

$$
\begin{equation*}
\mathcal{L}=\frac{1}{8 \pi}\left[\left(\partial_{t} \phi\right)^{2}-v^{2}\left(\partial_{x} \phi\right)^{2}\right]-\sum_{j=1,2} \Gamma_{j} e^{-i \omega_{0}^{*} t} \delta\left(x-x_{j}\right) e^{i \sqrt{\nu} \phi\left(t, x_{j}\right)}+\text { h.c. } \tag{15.190}
\end{equation*}
$$

which is also the Lagrangian of a (spinless) Luttinger liquid with two backscattering impurities. Here, as before, the Josephson frequencies are $\omega^{*}=e^{*} V / \hbar$, where $V$ is the voltage across both constrictions and $v$ is the velocity of the edge states.

A straightforward calculation to second order in the tunneling-matrix elements yields the result that the tunneling current $I_{\mathrm{t}}=I_{1}+I_{2}$ at zero temperature is (Chamon et al., 2007)

$$
\begin{equation*}
I_{\mathrm{t}}=e^{*}\left|\Gamma_{\mathrm{eff}}\right|^{2} \frac{2 \pi}{\Gamma(2 \nu)}\left|\omega_{0}^{*}\right|^{2 \nu-1} \operatorname{sgn}\left(\omega_{0}^{*}\right) \tag{15.191}
\end{equation*}
$$

where the "effective" matrix element $\Gamma_{\text {eff }}$ is given by

$$
\begin{equation*}
\left|\Gamma_{\mathrm{eff}}\right|^{2}=\left|\Gamma_{1}\right|^{2}+\left|\Gamma_{2}\right|^{2}+\left(\Gamma_{1} \Gamma_{2}^{*}+\Gamma_{1}^{*} \Gamma_{2}\right) F_{v}\left(\frac{\omega_{0}^{*} a}{v}\right) \tag{15.192}
\end{equation*}
$$

where $a$ is the distance between the two constrictions and

$$
\begin{equation*}
F_{v}(x)=\sqrt{\pi} \frac{\Gamma(2 v)}{\Gamma(v)} \frac{J_{v-1 / 2}(x)}{(2 x)^{v-1 / 2}} \tag{15.193}
\end{equation*}
$$

Here $\Gamma(x)$ is the Euler gamma function and $J_{\nu-1 / 2}(x)$ is the Bessel function of the first kind.

In the presence of $N_{\mathrm{q}}$ quasiholes in the area between the two constrictions, the contribution of the phases of the tunneling-matrix elements gets shifted to

$$
\begin{equation*}
\Gamma_{1}^{*} \Gamma_{2}=\bar{\Gamma}_{1}^{*} \bar{\Gamma}_{2} \exp \left[-i 2 \pi\left(v \frac{\Phi}{\phi_{0}}-N_{\mathrm{q}} v\right)\right] \tag{15.194}
\end{equation*}
$$

where the phase shift $2 \pi \nu N_{\mathrm{q}}$ is the contribution of the fractional statistics of the tunneling quasiparticle as its worldline braids with the $N_{\mathrm{q}}$ localized quasiparticles. Thus, there is an interference contribution to the tunneling current (and hence also to the transmitted current), which is sensitive both to the charge of the quasiparticles and to their fractional statistics.

### 15.8.2 Interferometers for non-abelian quantum Hall states

This analysis has been extended to the case of non-abelian quantum Hall states. Let us consider for concreteness the case of the Moore-Read state at filling factor $v=5 / 2$, which was discussed in Sections 14.8 and 15.4.5. The Moore-Read state
has a composite edge with a charge sector described by a chiral boson $\phi$ and a chiral Majorana fermion $\chi$, each with its own propagation velocity. The fundamental quasiparticle is a composite object of the charge and neutral sectors,

$$
\begin{equation*}
\sigma \sim \chi \exp \left(\frac{i}{2 \sqrt{2}} \phi\right) \tag{15.195}
\end{equation*}
$$

Thus, the main difference is that the quasiparticle which takes part in the tunneling processes, the $\sigma$ quasiparticle, obeys non-abelian braiding statistics.

The tunneling current has an interference component that is directly related to the measurement of expectation values of Wilson loop operators in the effective Chern-Simons gauge theory. To see this we follow the work of Fradkin and coworkers (Fradkin et al., 1998) and consider a quasihole that is injected at point $A$ in the lower edge and then tunnels at the first contact, and arrives at point $B$ at the left end of the top edge in state $|\psi\rangle$ (see Fig. 15.12). Let us now consider a second quasihole also injected at point $A$, but which now tunnels to the top edge at the second constriction, arriving at point $B$ in state $e^{i \alpha} B_{N_{\mathrm{q}}}|\psi\rangle$, where $\alpha$ is the Aharonov-Bohm phase determined by the flux $\Phi$ piercing the interferometer and $B_{N_{\mathrm{q}}}$ is the braiding operator for the second quasihole to encircle the $N_{\mathrm{q}}$ quasiholes in the region between the constrictions.

Then, the longitudinal tunneling conductance measured at point $B$ of Fig. 15.12 is proportional to (Fradkin et al., 1998)

$$
\begin{equation*}
\sigma_{x x} \propto\left|\Gamma_{1}\right|^{2}+\left|\Gamma_{2}\right|^{2}+\operatorname{Re}\left[\Gamma_{1}^{*} \Gamma_{2} e^{i \alpha}\langle\psi| B_{N_{\mathrm{q}}}|\psi\rangle\right] \tag{15.196}
\end{equation*}
$$

The matrix element $\langle\psi| B_{N_{\mathrm{q}}}|\psi\rangle$ is the expectation value of the Wilson loop operators of the tunneling quasiholes braided with the Wilson loops of the static quasiholes in the enclosed region, which is equal to the Jones polynomial $V_{N_{\mathrm{q}}}\left(e^{i \pi / 4}\right)$ (see Section 14.8). Therefore, the oscillatory component of the tunneling current (and conductance) measures a topological invariant!

In the simplest non-abelian quantum Hall state, the Moore-Read state, we saw that the effective-field theory is closely related to the $\mathrm{SU}(2)_{2}$ Chern-Simons gauge theory. In this case the general result of Eq. (15.196) takes the much simpler form. Using the skein relation, Eq. (14.156), the matrix element $\langle\psi| B_{N_{\mathrm{q}}}|\psi\rangle$ can be computed explicitly, with the result (Bonderson et al., 2006; Stern and Halperin, 2006)

$$
\begin{equation*}
\sigma_{x x} \propto\left|\Gamma_{1}\right|^{2}+\left|\Gamma_{2}\right|^{2} \tag{15.197}
\end{equation*}
$$

for $N_{\mathrm{q}}$ odd, and

$$
\begin{equation*}
\sigma_{x x} \propto\left|\Gamma_{1}\right|^{2}+\left|\Gamma_{2}\right|^{2}+2\left|\Gamma_{1}\right|\left|\Gamma_{2}\right|(-1)^{N_{\psi}} \cos \left(\alpha+\arg \left(\frac{\Gamma_{2}}{\Gamma_{1}}\right)+N_{\mathrm{q}} \frac{\pi}{4}\right) \tag{15.198}
\end{equation*}
$$

for $N_{\mathrm{q}}$ even. Here $N_{\psi}=1$ when the $N_{\mathrm{q}}$ quasiholes are (or fuse into) the state $\psi$ and $N_{\psi}=0$ otherwise. The interference term for $N_{\mathrm{q}}$ odd vanishes since an odd number of $\sigma$ particles cannot fuse into the identity $I$. Hence the expectation value vanishes for $N_{\mathrm{q}}$ odd, and the interference disappears if there is an odd number of $\sigma$ quasiholes in the enclosed region.

Thus, in addition to the oscillations due to the Aharonov-Bohm effect and to fractional statistics, in the non-abelian case there is an extra oscillation, which for the Moore-Read state takes different values depending on whether there is an odd or even number of quasiparticles trapped inside the interferometer. The origin of this even-odd effect lies in the fusion rules of the non-abelian excitations. In the case of the Moore-Read states the fundamental quasiparticle, which we denoted by $\sigma$, obeys the Ising fusion algebra: $\sigma \star \sigma=1+\psi, \sigma \star \psi=\psi$, and $\psi \star \psi=1$ (here $\psi$ is a chiral Majorana fermion and 1 is the identity operator). Since $\sigma$ particles can fuse into two different channels, 1 and $\psi$, the expectation value of a set of $\sigma$ operators will vanish if the resulting state is not the identity, 1 . Hence, the even-odd oscillation is a signature of the collective state of these non-abelian quasiparticles. Therefore, the interferometer can also detect non-abelian statistics.

### 15.9 Topological quantum computation

Classical computers (i.e. all the computers we know so far) operate by making sequential binary operations of bits. Bits are physical systems with two possible states, usually denoted by 0 and 1 . There are many quantum-mechanical physical systems that also have two states. We call them two-level systems. One example of such systems is the electron spin, which can assume two possible states, $|\uparrow\rangle$ and $|\downarrow\rangle$. In contrast to the classical bits, these quantum bits or qubits, can be in any linear combination of these two states. In other words, in quantum mechanics we operate on a Hilbert space of states spanned by the basis states of the qubit. This linear feature of quantum mechanics makes the notion of using the quantum evolution of states for a computation a very appealing prospect. There is, however, a drawback (there always is!): decoherence. All physical systems are coupled in one way or another to their physical environment, and in most cases this leads to a loss of coherence, which in this context implies a loss of information. This problem is the main obstacle to most schemes of quantum computation. A beautiful introduction to quantum computing, including topological quantum computing, can be seen in Preskill's lectures (Preskill, 2004).

It was realized first by Kitaev (2003), in a paper that has circulated since 1997, and was later expanded and developed by Freedman and coworkers (Freedman, 2001; Freedman et al., 2002a, b), that topological field theories offer, in principle, a pathway for quantum computation without decoherence. The essence of this
proposal is that topological field theories quite generally have finite-dimensional topologically protected Hilbert spaces. We saw elsewhere in this book that the effective low-energy theory of physical systems in a topological phase is a topological field theory. Thus one is led to the notion of regarding the topologically protected degeneracies of topological phases as the qubits themselves.

For instance, in the case of the Moore-Read state we can consider a system with four $\sigma$ quasiparticles, which, as we saw, supports a two-dimensional topologically protected Hilbert space. A braiding operation by which one $\sigma$ particle is adiabatically transported leads to a state that is a linear combination of the two basis states. In this context, adiabatic means a sufficiently slow process that does not generate states outside this Hilbert space. Hence a braiding operation is represented as a unitary transformation in this Hilbert space. Topological protection here means that local excitations and/or disorder are decoupled from this Hilbert space and, hence, that there is no available mechanism for decoherence.

Since we know that non-abelian quantum Hall states support such non-abelian excitations with topologically protected Hilbert spaces, it is natural to regard these degenerate states as topologically protected qubits. Then the next question is that of how to manipulate these states and how to read off the result of a computation. One possible way is to use variants of the quantum interferometers discussed in the preceding section as devices that manipulate qubits. There is an on-going effort, both experimental and theoretical, to generate devices that allow the controlled manipulation of these degenerate Hilbert spaces (Das Sarma et al., 2008). An idealized qubit based on the $v=5 / 2$ Moore-Read state consists in adding two islands (quantum dots) to the central region of the interferometer of Fig. 15.12 with a control gate in between them. The purpose of the two islands is to trap the $\sigma$ particles, and the control gate monitors the state (Das Sarma et al., 2005).

From the physics point of view this is a fascinating prospect. For this scheme (and its variants) to work, several formidable problems need to be solved. One is the issue that quantum Hall states only occur at very low temperatures and high magnetic fields. It may be possible to circumvent these very practical issues by using devices made of topological insulators, which is currently actively being explored. This is an appealing possibility but with problems of its own (such as making these insulators insulate!). At any rate, at the time of writing this field is still in its infancy.
