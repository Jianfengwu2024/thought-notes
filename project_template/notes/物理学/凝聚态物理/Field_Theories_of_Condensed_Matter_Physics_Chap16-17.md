# Field Theories of Condensed Matter Physics Chap16-17

## 16

## Topological insulators

### 16.1 Topological insulators and topological band structures

The term topological insulator refers to a novel (in 2011) class of solid-state systems that have quantized transport properties due to topological properties of their band structures. In this chapter I will provide a description of the salient ideas behind this new and rapidly growing field. I will certainly not attempt to be exhaustive in the presentation. Several specialized reviews have recently become available and the reader is referred to them for more details (including an extensive list of references) (Hasan and Kane, 2010; Hasan and Moore, 2011; Maciejko et al., 2011; Qi and Zhang, 2011).

What is a topological insulator? It is an electronic system that is an insulator but whose band structure is characterized by a topological invariant, i.e. a number that in general is quantized to be an integer. As such, states of this type are robust in the sense that their physical properties are stable (unchanged) under the action of local perturbations of finite size. From this definition it follows that the properties of topological insulators can be characterized at the level of free-fermion systems and are not necessarily the result of strong-correlation physics. They are a generalization of the conceptual framework behind the integer quantum Hall states. However, in spite of the topological properties of their band structures, the ground states of topological insulators are essentially unique and, even when degeneracies may be present, they do not depend on the topology of the space. Hence topological insulators are not topological fluids in the sense of the fractional quantum Hall states or of the deconfined gauge theories (and spin liquids). It is quite likely that, at least in two dimensions, there may exist topological fluids that are generalizations of topological insulators. At the time of writing this is an open area of research whose future is difficult to predict.

As we will see, one important consequence of the topological character of these insulators is the existence of edge states, which are gapless excitations with support
at the edges of the physical system, and cannot be affected in an essential way by the effects of disorder and interactions. Quite surprisingly, in the simplest cases these non-trivial insulators can be characterized at the level of a one-electron theory, that is, by a property of their band structure. In some special, but very interesting, cases, these states arise as the low-lying excitations (or quasiparticles) of condensates, such as certain superfluids and superconductors, as well as in special condensates in the particle-hole channel.

In two dimensions, systems with topologically non-trivial band structures turn out to exhibit a variety of unusual quantized transport properties such as the anomalous Hall effect, i.e. a quantum Hall effect in the absence of an external magnetic field, and the quantum spin Hall effect, which is a similar phenomenon involving instead the spin current rather than the charge current. Experimental evidence for the quantized spin Hall effect has been found in 2D electron gases in $\mathrm{HgTe}-\mathrm{CdTe}$ quantum wells (König et al., 2008). An anomalous quantum Hall effect has been predicted to exist in graphene bilayers, but so far has not been seen experimentally. In three dimensions topological insulators are more subtle, and are characterized by having topologically protected surface (or edge) states whose excitations are gapless chiral Dirac fermions, i.e. the spin of the excitation points along the direction of the momentum in much the same way as the spins of neutrinos were supposed to do (if they were massless, which we now know they are not). Materials that are predicted to be 3D topological insulators include $\mathrm{Bi}_{x} \mathrm{Sb}_{1-x}, \mathrm{Bi}_{2} \mathrm{Se}_{3}$, and $\mathrm{Bi}_{2} \mathrm{Te}_{3}$. Although so far these materials are not insulating in the bulk, the chiral Dirac surface fermions have been detected in angle-resolved photo-emission experiments (Hasan and Kane, 2010; Hasan and Moore, 2011).

In retrospect, the first example of a topological insulator was actually found by Thouless, Kohmoto, Nightingale, and den Nijs (TKNN) (Thouless et al., 1982) in their theory of the integer quantum Hall effect. We discussed this theory in Chapter 12. In addition, the mean-field theory of the chiral spin liquid, which was discussed in Chapter 10, can also be interpreted in hindsight as describing a system with a quantum anomalous Hall effect. The theory of topological insulators is, in essence, a generalization of the TKNN theory to band structures with non-trivial topology in time-reversal-invariant electronic systems. For this reason we will begin with a discussion of the TKNN theory but from a more general perspective.

### 16.2 The integer quantum Hall effect as a topological insulator

The role of topology in band structure is simple to formulate. Here we will revisit the theory of Thouless and coworkers (TKNN) of the integer Hall effect on lattices, the Hofstadter problem, since it is the prototype of the topological insulator. Let us
consider a system of spinless fermions on a 2D lattice. Let us imagine a case in which the system has $M$ electronic bands with eigenvalues $\left\{E_{m}(\vec{k})\right\}$ (with $m=$ $1, \ldots, M)$ and the eigenvectors are the Bloch states $\left\{\left|u_{m}(\vec{k})\right\rangle\right\}$ such that the wave functions are

$$
\begin{equation*}
\psi_{m}(\vec{x})=u_{m}(\vec{k}) e^{i \vec{k} \cdot \vec{x}} \tag{16.1}
\end{equation*}
$$

where $\vec{k}$ is a (quasi-)momentum in the first Brillouin zone of the lattice. The Bloch states will be assumed to be non-degenerate and hence the eigenvalues obey the strict inequality

$$
\begin{equation*}
\left|E_{m}(\vec{k})-E_{n}(\vec{k})\right|>0 \tag{16.2}
\end{equation*}
$$

for all momenta in the first Brillouin zone. Here we will consider the case in which $N<M$ bands are fully occupied, and hence the gap between the $N$ th and $(N+1)$ th bands does not close in the Brillouin zone.

Next we follow TKNN and define the Berry connection $\overrightarrow{\mathcal{A}}_{m}(\vec{k})$, the twocomponent vector field

$$
\begin{equation*}
\mathcal{A}_{i}^{(m)}(\vec{k})=i\left\langle u_{m}(\vec{k})\right| \nabla_{k_{i}}\left|u_{m}(\vec{k})\right\rangle \tag{16.3}
\end{equation*}
$$

where $i=1,2$ are two orthogonal directions in momentum space. A redefinition of the basis of Bloch states $\left\{\left|u_{m}(\vec{k})\right\rangle\right\}$ induces a unitary transformation on the vector $\left\{u_{m}(\vec{k})\right\}$ of occupied bands. In general this is a transformation with gauge group $\mathrm{U}(1)^{N}$. Occasionally degeneracies in the band structure may lead to non-abelian symmetries. $\mathrm{A} \mathrm{U}(1)^{N}$ gauge transformation is induced by a change in the local (on the Brillouin zone) phase of the Bloch state,

$$
\begin{align*}
& \left|u_{m}(\vec{k})\right\rangle \mapsto e^{i f_{m}(\vec{k})}\left|u_{m}(\vec{k})\right\rangle  \tag{16.4}\\
& \mathcal{A}_{i}^{(m)}(\vec{k}) \mapsto \mathcal{A}_{i}^{(m)}(\vec{k})+\nabla_{k_{i}} f_{m}(\vec{k})
\end{align*}
$$

where we assumed that the functions $f_{m}(\vec{k})$ are continuous and differentiable. Since the physics cannot depend on the choice of basis (or, rather, its redefinition), we are led to the conclusion that only gauge-invariant quantities that are invariant under these smooth redefinitions are physically meaningful. Thus, the physical content must be encoded in the curl (or curvature) of the Berry connection, which, in two dimensions, is the pseudo-scalar quantity

$$
\begin{equation*}
\mathcal{F}_{m}(\vec{k})=\epsilon_{i j} \partial_{k_{i}} \mathcal{A}_{j}^{(m)}(\vec{k}) \tag{16.5}
\end{equation*}
$$

The flux of the Berry curvature $\mathcal{F}_{m}$ over the Brillouin zone (BZ) is

$$
\begin{equation*}
\int_{\mathrm{BZ}} d^{2} k \mathcal{F}_{m}(\vec{k})=\oint_{\Gamma} d \vec{k} \cdot \overrightarrow{\mathcal{A}}^{(m)}(\vec{k}) \tag{16.6}
\end{equation*}
$$

where $\Gamma$ is the boundary of the Brillouin zone. However, the circulation of the Berry connection on the boundary $\Gamma$ of the Brillouin zone must obey the (Dirac) quantization condition

$$
\begin{equation*}
\oint_{\Gamma} d \vec{k} \cdot \overrightarrow{\mathcal{A}}^{(m)}(\vec{k})=2 \pi N_{m} \tag{16.7}
\end{equation*}
$$

where $N_{m}$ are integers. This condition is required in order for the Bloch states to be single-valued over the Brillouin zone.

The integers $N_{m}$ are the topological invariants known as the first Chern number. We recognize that these integers are the same as the topological invariants of the TKNN construction for the Hofstadter problem. They are topological in the following sense. The Bloch states are eigenstates of the band Hamiltonian $\mathcal{H}(\vec{k})$,

$$
\begin{equation*}
H=\sum_{n, m} \int_{\mathrm{BZ}} d^{2} k c^{\dagger}(\vec{k}) \mathcal{H}_{n, m}(\vec{k}) c_{m}(\vec{k}) \tag{16.8}
\end{equation*}
$$

where BZ denotes the 2D Brillouin zone.
Let us assume that for a particular band $m$ the Chern number does not vanish, $N_{m} \neq 0$. Then, a smooth change of the parameters of the Hamiltonian $\mathcal{H}_{n, m}(\vec{k})$ cannot change the value of the Chern number (since it is an integer!). The only way to change the Chern number by a smooth deformation of the Hamiltonian is for the gap to close (under the deformation) at some point $\vec{k}_{0}$ of the Brillouin zone. In fact, we have already seen in Section 12.8 that in the TKNN theory of the integer quantum Hall effect the Chern number yields the value of the quantized Hall conductance.

We will now apply these ideas to insulators whose band structures are also characterized by the value of the Chern number, even though these physical 2D systems do not have an applied external magnetic field. Nevertheless, depending on whether they are spin-polarized or not, these insulators exhibit either an anomalous Hall effect, i.e. a quantum Hall effect at zero magnetic field, or a quantum spin Hall effect. Some of these ideas extend to 3D systems. However, in three dimensions the topological invariant is not an integer but instead can take only two possible values. The Berry-phase concept is also useful to describe phases of Fermi fluids with broken time-reversal invariance, with an unquantized anomalous Hall effect (Sun and Fradkin, 2008).

### 16.3 The quantum anomalous Hall effect

Let us consider a 2D non-interacting electronic system with the Fermi energy located at a gap between two of its energy bands. This system has all its bands below the Fermi energy fully occupied and all the bands above the Fermi energy
empty. This is the prototype of a band insulator. From a macroscopic point of view, a band insulator is characterized by having a finite dielectric constant and, at $T=0$, a vanishing conductivity tensor. However, if the insulator breaks timereversal invariance, the Hall conductivity may be non-vanishing even in the absence of an external magnetic field. The existence of a finite Hall conductivity in the absence of an external magnetic field is known as the anomalous Hall effect regardless of whether the system is a metal or an insulator. However, as we will see below, if the system is an insulator, the anomalous Hall conductivity is quantized and we have a quantum anomalous Hall effect.

### 16.3.1 A square lattice with flux $\pi$ per plaquette

There are two simple model systems that have an anomalous quantum Hall effect. One example is a system of spinless fermions on a square lattice with flux $\Phi=\pi$ (half the flux quantum) per plaquette with the following free-fermion Hamiltonian:

$$
\begin{align*}
H= & -t \sum_{\vec{r}, j=1,2}\left(c^{\dagger}(\vec{r}) e^{i A_{j}(\vec{r})} c\left(\vec{r}+\vec{e}_{j}\right)+\text { h.c. }\right) \\
& -t^{\prime} \sum_{\vec{r}}\left(c^{\dagger}(\vec{r}) e^{i \chi+} c\left(\vec{r}+\vec{e}_{1}+\vec{e}_{2}\right)+c\left(\vec{r}+\vec{e}_{2}\right)^{\dagger} e^{i \chi-} c\left(\vec{r}+\vec{e}_{1}\right)+\text { h.c }\right) \tag{16.9}
\end{align*}
$$

where $\vec{r}=\left(x_{1}, x_{2}\right)$ runs over the sites of the square lattice, and the vector field $A_{i}$ is chosen to have flux $\Phi=\pi$ on each plaquette of the square lattice. In the Landau gauge we adopted in Chapter 12, $A_{2}=0, A_{1}=\pi$ for $x_{1}$ even, and $A_{1}=0$ for $x_{1}$ odd, the magnetic unit cell has two inequivalent lattice sites. The $t^{\prime}$ terms open a gap in the spectrum. Here, as in the case of the chiral spin liquid, we will choose the phases along the diagonals of the plaquette to take the values $\chi_{ \pm}= \pm \pi / 2$ in such a way that the flux on every elementary triangle of the square lattice is $+\pi / 2$.

For $t^{\prime}=0$ this is a special case of the Hofstadter problem discussed in Sections 12.2 and 12.8. As we saw in Chapter 8, and in the theory of the chiral spin liquid in Chapter 10, the first two terms of the Hamiltonian of Eq. (16.9) represent a theory of gapless lattice Dirac (or Kogut-Susskind) fermions. Except for the sitepotential term in Eq. (16.9), the spectrum of this system was derived in Section 10.2, and it was given in Eq. (10.50). The spectrum of this Hamiltonian is particle-hole-symmetric and, in the gauge we chose above, it is given by

$$
\begin{equation*}
E_{ \pm}(\vec{k})= \pm \sqrt{\left(2 t \cos k_{1}\right)^{2}+\left(2 t \cos k_{2}\right)^{2}+\left(4 t^{\prime} \sin k_{1} \sin k_{2}\right)^{2}} \tag{16.10}
\end{equation*}
$$

At half-filling the Fermi energy is at $E_{\mathrm{F}}=0$ and the lower band (labeled -) is the filled valence band, while the upper band (labeled + ) is the empty conduction
band. For small $t^{\prime}$ the spectrum has a small energy gap at the Fermi energy located in momentum space near the "nodal" point $(\pi / 2, \pi / 2)$ and its reflections across the three other quadrants of the first Brillouin zone. For $t^{\prime}=0$ the valence and conduction bands cross at these four points. For excitation energies that are small on the scale of the Fermi energy the excitation energies have a linear, relativisticlike, spectrum,

$$
\begin{equation*}
E_{ \pm}(\vec{q})= \pm 2 t|\vec{q}|+O\left(q^{2}\right) \tag{16.11}
\end{equation*}
$$

where the momentum $\vec{q}$ is measured from one of the crossing points.
The low-energy physics of this system is described by a system of two species (or valleys) of two-component Dirac fermions, $u_{a}(x)$ and $v_{a}(x)$ (with $a=1,2$ being the two-spinor index), which for $t^{\prime} \neq 0$ obey a Dirac equation

$$
\begin{align*}
& \left(i \gamma_{0} \partial_{0}-i v_{\mathrm{F}} \vec{\gamma} \cdot \vec{\nabla}+m\right)_{a b} u_{b}(\vec{x})=0  \tag{16.12}\\
& \left(i \gamma_{0} \partial_{0}-i v_{\mathrm{F}} \vec{\gamma} \cdot \vec{\nabla}+m\right)_{a b} v_{b}(\vec{x})=0
\end{align*}
$$

where the 2D Dirac gamma matrices are given in terms of the three $2 \times 2$ Pauli matrices

$$
\begin{equation*}
\gamma_{0}=-\sigma_{2}, \quad \gamma_{1}=-i \sigma_{1}, \quad \gamma_{2}=-i \sigma_{3} \tag{16.13}
\end{equation*}
$$

and obey the Dirac algebra,

$$
\begin{equation*}
\left\{\gamma^{\mu}, \gamma^{\nu}\right\}=2 g^{\mu \nu} \tag{16.14}
\end{equation*}
$$

where $g^{\mu \nu}=\operatorname{diag}(1,-1,-1)$ is the metric tensor of the $(2+1)$-dimensional (Minkowski) space-time. Here we have used the fact that the Fermi velocity is $v_{\mathrm{F}}=2 t a_{0}$ (with $a_{0}$ being the lattice spacing). The mass terms in Eq. (16.12) have the same sign for both species of fermions. While the magnitude of the mass is set by the next-nearest-neighbor hopping amplitude, $m \propto t^{\prime}$, the sign of the mass term is determined by the sign of the $\pi / 2$ flux threading each elementary triangle of the lattice.

A mass term for the two species of fermions can also be generated by a sitepotential energy that alternates between the two sublattices of the square lattice, or by a Peierls unidirectional distortion of the bonds, as shown in Section 10.2. However, the resulting mass terms have opposite signs for the two species. We will see below that the relative sign of the mass terms is related to the role of time-reversal invariance.

### 16.3.2 Graphene

Another simple system with a similar spectrum is graphene. Graphene is a system of carbon atoms arranged into a 2D honeycomb lattice. Although as a conceptual
model 2D carbon had "existed" for many years, the 2D form of carbon known as graphene was only discovered quite recently (Novoselov et al., 2004). Most of the observed transport properties of graphene, both without a magnetic field and with a strong magnetic field, can be explained in terms of its low-energy theory, a system of gapless Dirac fermions (Castro Neto et al., 2009).

In charge-neutral graphene, only one orbital of the carbon atom, the $\pi$ orbital, is partially occupied, while the other orbitals are either empty or full, and hence separated by a large energy gap. The simplest description of the electronic states of graphene is a tight-binding model on the honeycomb lattice with only one orbital (or state) per site. The honeycomb lattice, shown in Fig. 16.1(a), has two sites in each unit cell and hence can be regarded as two interpenetrating triangular lattices, which we label by A and B. Let $\vec{r}_{\mathrm{A}}$ denote the A site of the unit cell. Each A site is separated from its neighboring B sites by the vectors (in units of the spacing between two nearest-neighboring atoms on the same sublattice if $a=1$ )

$$
\begin{equation*}
\vec{d}_{1}=\left(\frac{1}{2 \sqrt{3}}, \frac{1}{2}\right), \quad \vec{d}_{2}=\left(-\frac{1}{\sqrt{3}}, 0\right), \quad \vec{d}_{3}=\left(\frac{1}{2 \sqrt{3}},-\frac{1}{2}\right) \tag{16.15}
\end{equation*}
$$

For future use we will also define the six next-nearest-neighbor displacement vectors $\pm \vec{a}_{i}$ (with $i=1,2,3$ ) by

$$
\begin{equation*}
\vec{a}_{1}=\vec{d}_{2}-\vec{d}_{3}, \quad \vec{a}_{2}=\vec{d}_{3}-\vec{d}_{1}, \quad \vec{a}_{3}=\vec{d}_{1}-\vec{d}_{2} \tag{16.16}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-693.jpg?height=623&width=1143&top_left_y=1294&top_left_x=279)

Figure 16.1 (a) The honeycomb lattice and its two sublattices A and B. The rhombus is the unit cell. The two triangular sublattices are connected by the vectors $\vec{d}_{1}, \vec{d}_{2}$, and $\vec{d}_{3}$, and the three next-nearest-neighbor displacement vectors are $\vec{a}_{1}, \vec{a}_{2}$, and $\vec{a}_{3}$ (see the text). (b) The first Brillouin zone; $\vec{b}_{1}$ and $\vec{b}_{2}$ are the two fundamental reciprocal-lattice vectors (see the text).

Let us denote the fermion operator on the A sites by $\psi\left(\vec{r}_{\mathrm{A}}\right)$ and the fermion operators on the neighboring B sites by $\chi\left(\vec{r}_{\mathrm{A}}+\vec{d}_{i}\right)$ (with $i=1,2,3$ ).

With this notation, the Hamiltonian for this tight-binding model of noninteracting (spinless) electrons with hopping amplitude $t_{1}$ between nearestneighbor sites is (Semenoff, 1984)

$$
\begin{equation*}
H_{0}=t_{1} \sum_{\vec{r}_{\mathrm{A}}, i=1,2,3}\left[\psi^{\dagger}\left(\vec{r}_{\mathrm{A}}\right) \chi\left(\vec{r}_{\mathrm{A}}+\vec{d}_{i}\right)+\text { h.c. }\right] \tag{16.17}
\end{equation*}
$$

For the moment we will consider the case in which the fermions are spinless, or that the spin degree of freedom does not affect the physics beyond the requirements of the Pauli principle. We will shortly consider the effects of the electron spin.

In Fourier space we write

$$
\begin{equation*}
\psi\left(\vec{r}_{\mathrm{A}}\right)=\int_{\mathrm{BZ}} \frac{d^{2} k}{(2 \pi)^{2}} \psi(\vec{k}) e^{i \vec{k} \cdot \vec{r}_{\mathrm{A}}}, \quad \chi\left(\vec{r}_{\mathrm{B}}\right)=\int_{\mathrm{BZ}} \frac{d^{2} k}{(2 \pi)^{2}} \psi(\vec{k}) e^{i \vec{k} \cdot \vec{r}_{\mathrm{B}}} \tag{16.18}
\end{equation*}
$$

where the momentum integrals run over the first Brillouin zone of the honeycomb lattice, shown in Fig. 16.1(b). In Fourier space this free fermion system has the Hamiltonian

$$
\begin{align*}
H_{0}= & \int_{\mathrm{BZ}} \frac{d^{2} k}{(2 \pi)^{2}}\left(\psi^{\dagger}(k), \chi^{\dagger}(\vec{k})\right) \\
& \times\left(\begin{array}{ccc}
0 & t_{1} \sum_{i=1,2,3} e^{i \vec{k} \cdot \vec{d}_{i}} \\
t_{1} \sum_{i=1,2,3} & e^{-i \vec{k} \cdot \vec{d}_{i}} & 0
\end{array}\right)\binom{\psi(\vec{k})}{\chi(\vec{k})} \tag{16.19}
\end{align*}
$$

The single-particle energy eigenvalues of this Hamiltonian are

$$
\begin{equation*}
E_{ \pm}(\vec{k})= \pm t_{1} \sqrt{\left|e^{i \vec{k} \cdot \vec{d}_{1}}+e^{i \vec{k} \cdot \vec{d}_{2}}+e^{i \vec{k} \cdot \vec{d}_{3}}\right|^{2}} \tag{16.20}
\end{equation*}
$$

Hence we have two bands, a valence band of negative-energy states $E_{-}(\vec{k})$, and a conduction band of positive-energy states $E_{+}(\vec{k})$. The energy gap between these two bands vanishes at the zeros of the function $\sum_{i=1,2,3} e^{i \vec{k} \cdot \bar{d}_{i}}$, which occur at the corners of the Brillouin zone, labeled by K and $\mathrm{K}^{\prime}$ in Fig. 16.1(b). Their wave vectors are $\vec{q}_{\mathrm{K}}=(2 \pi / \sqrt{3}, 2 \pi / 3)$ and $\vec{q}_{\mathrm{K}^{\prime}}=-\vec{q}_{\mathrm{K}}$ such that $\vec{q}_{\mathrm{K}} \cdot \vec{d}_{1}=2 \pi / 3$, $\vec{q}_{\mathrm{K}} \cdot \vec{d}_{2}=-2 \pi / 3$, and $\vec{q}_{\mathrm{K}} \cdot \vec{d}_{3}=0$, and similarly for the other equivalent corners of the Brillouin zone obtained by successive rotations of $\vec{q}_{\mathrm{K}}$ (and $\vec{q}_{\mathrm{K}^{\prime}}$ ) by $2 \pi / 3$ (see Fig. 16.1(b)).

For charge-neutral graphene the Fermi energy is at $E_{\mathrm{F}}=0$. In this case the valence band, with dispersion $E_{-}(\vec{k})$, is full, and the conduction band, with dispersion $E_{+}(\vec{k})$, is empty. However, the only states at the Fermi energy are the crossing points K and $\mathrm{K}^{\prime}$ (and their symmetry-related points at the corners of
the first Brillouin zone) of the two bands. Thus graphene is not a semiconductor, since its energy gap is zero, but it is not a metal either, since the Fermi surface reduces to the crossing points. Hence graphene is an example of a (direct) semi-metal.

Near the crossing points K and $\mathrm{K}^{\prime}$ the energy-momentum relations can be linearized and become $E_{ \pm}= \pm t_{1}|\vec{q}|$, where $\vec{q}$ is a small deviation from $\vec{q}_{\mathrm{K}}$ or $\vec{q}_{\mathrm{K}^{\prime}}$. Thus, in the low-energy limit, only the single-particle states with wave vectors close to K and $\mathrm{K}^{\prime}$ (the two "valleys") contribute to the physics of this system. Thus, we are led to define two species (or flavors) of two-component Dirac fermions (or, more properly, Weyl fermions), $\psi_{1}(\vec{k})$ and $\psi_{2}(\vec{k})$,

$$
\begin{equation*}
\psi_{1}(\vec{q})=\binom{e^{-i \frac{\pi}{6}} \psi_{\mathrm{K}}(\vec{q})}{e^{i \frac{\pi}{6}} \chi(\vec{q})}, \quad \psi_{2}(\vec{q})=\binom{e^{-i \frac{\pi}{6}} \chi_{\mathrm{K}^{\prime}}(\vec{q})}{e^{i \frac{\pi}{6}} \psi_{\mathrm{K}^{\prime}}(\vec{q})} \tag{16.21}
\end{equation*}
$$

where we have used the notation for the components of the Fermi fields near the crossing points at K and $\mathrm{K}^{\prime}$ to be, respectively, $\psi_{\mathrm{K}}(\vec{q})=\psi\left(\vec{q}_{\mathrm{K}}+\vec{q}\right), \chi_{\mathrm{K}}(\vec{q})=$ $\chi\left(\vec{q}_{\mathrm{K}}+\vec{q}\right), \psi_{\mathrm{K}^{\prime}}(\vec{q})=\psi\left(\vec{q}_{\mathrm{K}^{\prime}}+\vec{q}\right)$, and $\chi_{\mathrm{K}^{\prime}}(\vec{q})=\chi\left(\vec{q}_{\mathrm{K}^{\prime}}+\vec{q}\right)$.

With this notation the effective low-energy graphene Hamiltonian becomes

$$
\begin{align*}
H_{0} & =\int \frac{d^{2} q}{(2 \pi)^{2}} \sum_{a=1,2} \psi_{a}^{\dagger}(\vec{q}) v_{\mathrm{F}}\left(\sigma_{1} q_{1}+\sigma_{2} q_{2}\right) \psi_{a}(\vec{q}) \\
& =\int d^{2} x \sum_{a=1,2} \psi_{a}^{\dagger}(x) v_{\mathrm{F}}\left(i \sigma_{1} \partial_{1}+i \sigma_{2} \partial_{2}\right) \psi_{a}(x) \tag{16.22}
\end{align*}
$$

where $a=1$, 2 labels the two species (or flavors) of two-component Dirac (Weyl) fermions, and $v_{\mathrm{F}}=(\sqrt{3} / 2) t_{1}$ is the Fermi velocity. Here, as before, $\sigma_{1}$ and $\sigma_{2}$ are the two off-diagonal $2 \times 2$ Pauli matrices.

Let us consider two simple extensions of the simple graphene electronic structure. Thus we will consider adding to the Hamiltonian a site-potential-energy term that assumes two values, $\varepsilon$ on the sites of the A sublattice and $-\varepsilon$ on the sites of the B sublattice. This does not happen in graphene but does happen in graphene grown on boron nitride, which has the same lattice structure. The other case that we will consider is adding a next-nearest-neighbor hopping term that connects A sites with each other and $B$ sites with each other. The amplitude for the next-nearest-neighbor hopping is $t_{2} e^{ \pm i \phi}$ and represents a staggered magnetic flux (as shown in Fig. 16.2). However, differently from the case in the Hofstadter problem we discussed before, the flux through each hexagon is zero. Nevertheless, this flux breaks time-reversal invariance. These time-reversal-symmetry-breaking terms are absent in the case of graphene.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-696.jpg?height=564&width=590&top_left_y=193&top_left_x=560)

Figure 16.2 Next-nearest-neighbor hopping amplitudes on the honeycomb lattice. The arrows represent the orientation of the next-nearest-neighbor links with hopping processes with amplitude $t_{2} e^{i \phi}$. On one hexagon, the flux on the triangles on the A and B sublattices is $-3 \phi$, whereas on all the adjacent triangles of the same sublattice the flux is $+3 \phi$. The total flux on each hexagon is zero.

With these additional terms the free-fermion Hamiltonian in Fourier space has the form (known as the Haldane model (Haldane, 1988a))

$$
\begin{equation*}
H_{0}=\int_{\mathrm{BZ}} \frac{d^{2} k}{(2 \pi)^{2}}\left(\psi^{\dagger}(\vec{k}), \chi^{\dagger}(\vec{k})\right) h(\vec{k})\binom{\psi(\vec{k})}{\chi(\vec{k})} \tag{16.23}
\end{equation*}
$$

where we have defined the one-particle Hamiltonian $h(\vec{k})$, which is a hermitian $2 \times 2$ matrix for each wave vector $\vec{k}$ of the Brillouin zone. As such it can always be expressed as a linear combination of the three Pauli matrices and of the $2 \times 2$ identity matrix $\mathbb{I}$ of the form

$$
\begin{equation*}
h(\vec{k})=h_{0}(\vec{k}) \mathbb{I}+\vec{h}(\vec{k}) \cdot \vec{\sigma} \tag{16.24}
\end{equation*}
$$

which is generic for any two-band system. The same considerations apply for the $\pi$ flux model we discussed before. The one-particle states have energy eigenvalues

$$
\begin{equation*}
E_{ \pm}(\vec{k})=h_{0}(\vec{k}) \pm\|\vec{h}(\vec{k})\| \tag{16.25}
\end{equation*}
$$

where

$$
\begin{equation*}
\|\vec{h}(\vec{k})\|=(\vec{h}(\vec{k}) \cdot \vec{h}(\vec{k}))^{1 / 2} \tag{16.26}
\end{equation*}
$$

is the norm of the vector $\vec{h}(\vec{k})$. The term proportional to the identity matrix $\mathbb{I}$ in Eq. (16.24) reflects the fact that the lattice model with a flux is not invariant under particle-hole conjugation. In what follows we will neglect this term, since it turns out to be unimportant to the physics of the quantum anomalous Hall effect.

In the particular case of the honeycomb lattice the scalar $h_{0}(\vec{k})$ and the threecomponent vector $\vec{h}(\vec{k})$ are given by

$$
\begin{align*}
& h_{0}(\vec{k})=2 t_{2} \cos \phi \sum_{i=1}^{3} \cos \left(\vec{k} \cdot \vec{a}_{i}\right), \quad h_{1}(\vec{k})=t_{1} \sum_{i=1}^{3} \cos \left(\vec{k} \cdot \vec{d}_{i}\right)  \tag{16.27}\\
& h_{2}(\vec{k})=t_{1} \sum_{i=1}^{3} \sin \left(\vec{k} \cdot \vec{d}_{i}\right), \quad h_{3}(\vec{k})=\varepsilon+2 t_{2} \sin \phi \sum_{i=1}^{3} \sin \left(\vec{k} \cdot \vec{a}_{i}\right)
\end{align*}
$$

Since all three Pauli matrices are present, it is not possible to find a coordinate system for the spinors in which the Hamiltonian is real and symmetric. Hence in this system, as expected, time-reversal invariance is broken explicitly, whereas in the absence of the flux it is possible to rotate the spinors to a basis in which the Hamiltonian is real.

Following now the same steps as those which led to the effective low-energy theory for graphene, Eq. (16.22), the effective low-energy Hamiltonian for the Haldane model, after rescaling energies by the Fermi velocity $v_{\mathrm{F}}=(\sqrt{3} / 2) t_{1}$, takes the standard Dirac form

$$
\begin{equation*}
H_{0}=\int d^{2} x \sum_{a=1,2} \psi_{a}^{\dagger}(x)\left(i \alpha_{1} \partial_{1}+i \alpha_{2} \partial_{2}+m_{a} \beta\right) \psi_{a}(x) \tag{16.28}
\end{equation*}
$$

Here we have defined the $2 \times 2$ Dirac matrices $\alpha_{1}=\sigma_{1}, \alpha_{2}=\sigma_{2}$ and $\beta=\sigma_{3}$. In what follows we will use the set of $2 \times 2$ Dirac gamma matrices,

$$
\begin{equation*}
\gamma_{0}=\beta=\sigma_{3}, \quad \gamma_{1}=\beta \alpha_{1}=i \sigma_{2}, \quad \gamma_{2}=\beta \alpha_{2}=-i \sigma_{1} \tag{16.29}
\end{equation*}
$$

which satisfy the Dirac algebra, $\left\{\gamma_{\mu}, \gamma_{\nu}\right\}=2 g_{\mu \nu}$, where $g_{\mu \nu}$ is the standard (Bjorken and Drell) Minkowski metric in $(2+1)$-dimensional space-time. In this notation the low-energy action for this system is that of two Weyl-Dirac fields (with different masses)

$$
\begin{equation*}
S=\int d^{3} x \sum_{a=1,2} \bar{\psi}_{a}\left(i \gamma^{\mu} \partial_{\mu}-m_{a}\right) \psi_{a} \tag{16.30}
\end{equation*}
$$

where, as usual, $\bar{\psi}_{a}=\psi_{a}^{\dagger} \gamma_{0}$.
In the language of the Dirac spinors, time reversal is the operation that flips the spin of the fermion and complex-conjugates the state. Thus, under time reversal, which we will denote by the anti-linear operator $\Theta$, a Dirac fermion in real space transforms as

$$
\begin{equation*}
\Theta \psi(x, y, t)=-\gamma_{1} \psi(-x,-y, t)=-i \sigma_{2} \psi(-x,-y, t) \tag{16.31}
\end{equation*}
$$

whereas under parity the Dirac spinor transforms as

$$
\begin{equation*}
\mathcal{P} \psi(x, y, t)=i \gamma_{2} \psi(x,-y, t)=\sigma_{1} \psi(x,-y, t) \tag{16.32}
\end{equation*}
$$

The (single-particle) Dirac Hamiltonian transforms under time reversal as follows:

$$
\begin{equation*}
\Theta h(\vec{p}, m) \Theta^{-1}=-i \sigma_{2} h^{*}(-\vec{p}, m) i \sigma_{2}=p_{1} \sigma_{1}+p_{2} \sigma_{2}-m \sigma_{3}=h(\vec{p},-m) \tag{16.33}
\end{equation*}
$$

which amounts to saying that the mass term breaks time-reversal invariance in two dimensions. On the other hand, under 2D parity the Dirac Hamiltonian transforms as

$$
\begin{equation*}
\mathcal{P h}(\vec{p}, m) \mathcal{P}^{-1}=\sigma_{1}\left[p_{1} \sigma_{1}-p_{2} \sigma_{2}+m \sigma_{3}\right]=p_{1} \sigma_{1}+p_{2} \sigma_{2}-m \sigma_{3} \tag{16.34}
\end{equation*}
$$

which is equivalent to a time-reversal transformation.
In Eq. (16.28) we denoted the Dirac masses of the two flavors by

$$
\begin{align*}
& m_{1}=\frac{3}{2} \frac{t_{2}}{t_{1}} \sin \phi-\frac{2}{\sqrt{3}} \frac{\varepsilon}{t_{1}}  \tag{16.35}\\
& m_{2}=\frac{3}{2} \frac{t_{2}}{t_{1}} \sin \phi+\frac{2}{\sqrt{3}} \frac{\varepsilon}{t_{1}}
\end{align*}
$$

If $\varepsilon=0$ the two masses of the two flavors of Dirac fermions have the same sign, whereas in the absence of a flux, $\phi=0$, the two flavors have masses with opposite signs. In general $m_{1} \neq m_{2}$ will have different magnitudes and/or signs.

We should note that much of the condensed matter literature, e.g. Haldane (1988a) and Kane and Mele (2005a), uses a convention in which either the $\alpha_{2}$ matrix or the $\alpha_{1}$ matrix, but not both, has opposite signs for the two flavors. In that convention time-reversal symmetry is broken when the Dirac mass terms have opposite signs, which is the opposite convention to that which we have adopted here. In terms of the Dirac gamma matrices, the reason for this difference is that in odd space-time dimensions there is no $\gamma_{5}$ matrix and instead there are two inequivalent frames for the Dirac spinors, which are distinguished from each other by a handedness or helicity. At any rate, it is always possible, and consistent, to define the frames of the Dirac spinors to have the same handedness, as we have done here, and to follow the criterion that time reversal amounts to changing the sign of the mass term. This criterion is also intuitive insofar as, when a mass term is present, the one-particle Dirac Hamiltonian is hermitian (as it should be) but cannot be real and symmetric.

### 16.3.3 Quantization of the anomalous Hall effect

To see that we get an anomalous quantum Hall effect, we will couple the system to a weak electromagnetic field in order to compute the conductance. We will first discuss this calculation at the level of the effective-field theory of Dirac fermions. Thus, we will consider the coupling of the Dirac fermions (either for
the $\pi$ flux model or for the case of Haldane's honeycomb model) to a weak electromagnetic field $A_{\mu}(x)$. This interaction has the standard form of minimal coupling (dictated by gauge invariance). We will consider first the case of one species of two-component Dirac (or Weyl) fermions of mass $m$ for which the Lagrangian is (setting $v_{\mathrm{F}}=1$ )

$$
\begin{equation*}
\mathcal{L}=\bar{\psi}\left(i \gamma^{\mu} \partial_{\mu}-e \gamma^{\mu} A_{\mu}-m\right) \psi \tag{16.36}
\end{equation*}
$$

To compute the conductivity, we first need to compute the polarization tensor $\Pi_{\mu \nu}$, i.e. the current-current correlation functions. However, we have already done this calculation in Section 10.4. There we found that the effective low-energy (compared with the energy gap $m$ ) Lagrangian for the gauge fields is (Redlich, 1984)

$$
\begin{equation*}
\mathcal{L}\left[A_{\mu}\right]=-\frac{1}{4 g^{2}} F_{\mu \nu} F^{\mu \nu}+\frac{\sigma_{x y}}{4} \epsilon_{\mu \nu \lambda} A^{\mu} F^{\nu \lambda} \tag{16.37}
\end{equation*}
$$

where (in standard units) $g^{2}=\pi$ and $\sigma_{x y}=\left(e^{2} /(4 \pi)\right) \operatorname{sgn}(m)$. The presence in the effective Lagrangian of a Chern-Simons term, which is odd under 2D parity and time reversal, is known as the parity anomaly. After restoring standard units, a single two-component Dirac fermion in two space dimensions has a Hall conductivity

$$
\begin{equation*}
\sigma_{x y}=\frac{1}{2} \frac{e^{2}}{h} \operatorname{sgn}(m) \tag{16.38}
\end{equation*}
$$

which is half of the minimum integer Hall conductivity, $e^{2} / h$.
This result seemingly violates the quantization of the Hall conductivity of free fermions that we discussed in the context of the integer quantum Hall effect. Indeed, in Chapter 12 we showed that for systems with a full band of one-particle states the Hall conductivity is quantized and, moreover, that this quantization has a topological meaning insofar as it can be expressed in terms of a topological invariant, the first Chern number, $C_{1}$. We expect that these general arguments should also apply to the $\pi$ flux model and the honeycomb-lattice Haldane model since both are free-fermion lattice models with a filled band. Hence the Hall conductivity should be an integer, not a half-integer.

The loophole in our arguments is that in both models, and, indeed, in all lattice models with band crossings (or models that are close to having band crossings), the number of such crossings must be an even integer (even neglecting other degrees of freedom such as spin), in accordance with the Nielsen-Ninomiya theorem (Nielsen and Ninomiya, 1981; Friedan, 1982). Thus, in both systems, we encountered two flavors of Dirac fermions, and found that each flavor contributes to the total Hall conductivity an amount equal to $\left(e^{2} /(2 h)\right) \operatorname{sgn}(m)$, where $m$ is the mass for that fermion flavor. In both models we found two situations. In one case the mass terms of the Dirac Lagrangian have the same sign, $\operatorname{sgn}\left(m_{1}\right)=\operatorname{sgn}\left(m_{2}\right)$, and the total Hall conductivity is an integer (in accordance with our expectations)

$$
\begin{equation*}
\sigma_{x y}= \pm \frac{e^{2}}{h} \tag{16.39}
\end{equation*}
$$

We encountered a closely related problem in the theory of the chiral spin liquid discussed in Chapter 10.

In this case we have an anomalous quantum Hall effect since the system is an insulator with a vanishing net magnetic field (as in Haldane's honeycomb model) or with half the quantum of flux (as in the $\pi$ flux model). Although the total flux is either zero or $\pi$, in both systems the Hamiltonian has terms that violate timereversal invariance $\mathcal{T}$, as well as 2 D parity $\mathcal{P}$, although the product $\mathcal{T} \mathcal{P}$ is an unbroken symmetry of the Hamiltonian. A system of this type is often called a Chern insulator. Recall that 2D parity is a mirror symmetry, such as $x \rightarrow-x$ and $y \rightarrow y$; it is not inversion symmetry, $\vec{r} \rightarrow-\vec{r}$.

However, in the second case we found that the signs of the mass terms were opposite, $\operatorname{sgn}\left(m_{1}\right)=-\operatorname{sgn}\left(m_{2}\right)$. Hence, in this case the two contributions to the Hall conductivity cancel each other out, and we find that the total Hall conductivity vanishes, $\sigma_{x y}=0$. In this case both time reversal $\mathcal{T}$ and 2 D parity $\mathcal{P}$ are unbroken. In other terms, this system is a conventional insulator.

In what follows we will adopt the physical criterion that a 2 D system is time-reversal-invariant if its physical response to an external electromagnetic field $A_{\mu}$, expressed in terms of the effective action $S\left[A_{\mu}\right]$, is invariant under time reversal, $t \rightarrow-t$. Thus a system that exhibits the anomalous quantum Hall effect has a broken time-reversal invariance since the effective action of the external electromagnetic field has a Chern-Simons term that is odd under time reversal $\mathcal{T}$ and parity $\mathcal{P}$ (but invariant under $\mathcal{P} \mathcal{T}$ ). We will see below that this definition can be extended to systems in three dimensions, where the time-reversal-symmetry-breaking term is more subtle.

It is important to keep in mind that this field-theoretic, or, more properly, macroscopic, definition of time-reversal symmetry is different from what is meant by time reversal microscopically at the level of the one-particle theory (expressed in the band structure). At the level of the single-particle theory time reversal is an antilinear and anti-unitary operator that relates a single-particle state with momentum $\vec{k}$ and spin $\uparrow(\downarrow)$ to a single-particle state with momentum $-\vec{k}$ and spin $\downarrow(\uparrow)$. Thus, both in the $\pi$ flux model and in graphene, the one-particle definition of time reversal is equivalent to the exchange of the handedness of the two flavors (or valleys) of fermions.

### 16.3.4 A two-band topological invariant

Since our discussion has been based largely on results derived from the effective low-energy theory of Dirac fermions, one might suspect that the approximations we
have made may in some subtle way invalidate our analysis. We will now see that there is a way to reach the same conclusions without taking the continuum (or lowenergy) limit by means of a generalization to a two-band insulating system of the topological arguments of Thouless, Kohmoto, Nightingale, and den Nijs (Thouless et al., 1982).

This generalization is based on analysis of the Kubo formula for the Hall conductivity in the two-band case. This result is due to Qi, Wu, and Zhang (Qi et al., 2006b). We will see in the next section that this result plays a key role in the theory of the spin quantum Hall effect. In Chapter 12, see Eq. (12.118), we saw that the Kubo formula for the Hall conductivity implied that the latter is determined as the zero-frequency limit, $\omega \rightarrow 0$, of the $x y$ component of the current-correlation function at $\vec{Q}=0$,

$$
\begin{equation*}
\sigma_{x y}=\lim _{\omega \rightarrow 0} \frac{i}{\omega} \Pi_{x y}(\omega, \vec{Q}=0) \tag{16.40}
\end{equation*}
$$

For a free-fermion system the current correlator $\Pi_{x y}(\omega, \vec{Q}=0)$ is

$$
\begin{equation*}
\Pi_{x y}(\omega, \vec{Q}=0)=\int \frac{d^{2} k}{(2 \pi)^{2}} \int \frac{d \Omega}{2 \pi} \operatorname{tr}\left[J_{x}(\vec{k}) G(\vec{k}, \omega+\Omega) J_{y}(\vec{k}) G(\vec{k}, \Omega)\right] \tag{16.41}
\end{equation*}
$$

which can be calculated from the expressions for the current operators, which in momentum space are given in terms of the one-particle two-band Hamiltonian $h(\vec{k})$ of Eq. (16.24),

$$
\begin{equation*}
J_{l}(\vec{k})=\frac{\partial h(\vec{k})}{\partial \vec{k}}=\frac{\partial h_{0}(\vec{k})}{\partial \vec{k}} \mathbb{I}+\frac{\partial h_{a}(\vec{k})}{\partial \vec{k}} \sigma^{a} \tag{16.42}
\end{equation*}
$$

(with $a=1,2,3$ ), and the free-fermion propagator of the two-band system $G(\vec{k}, \omega)$, which is also a $2 \times 2$ matrix in the band indices,

$$
\begin{equation*}
G(\vec{k}, \omega)=(\omega \mathbb{I}-h(\vec{k})+i \epsilon)^{-1}=\frac{P_{+}(\vec{k})}{\omega-E_{+}(\vec{k})+i \epsilon}+\frac{P_{-}(\vec{k})}{\omega-E_{-}(\vec{k})+i \epsilon} \tag{16.43}
\end{equation*}
$$

where we have used the projection operators $P_{ \pm}(\vec{k})$,

$$
\begin{equation*}
P_{ \pm}(\vec{k})=\frac{1}{2}\left(\mathbb{I} \pm \hat{h}_{a}(\vec{k}) \sigma^{a}\right) \tag{16.44}
\end{equation*}
$$

where $\hat{h}_{a}(\vec{k})$ (with $a=1,2,3$ ) is a unit vector with components

$$
\begin{equation*}
\hat{h}_{a}(\vec{k})=\frac{h_{a}(\vec{k})}{\|\vec{h}(\vec{k})\|} \tag{16.45}
\end{equation*}
$$

After some straightforward algebra it is found that the Hall conductivity is given by the expression

$$
\begin{equation*}
\sigma_{x y}=\frac{e^{2}}{2} \int_{\mathrm{BZ}} \frac{d^{2} k}{(2 \pi)^{2}} \epsilon_{a b c} \frac{\partial \hat{h}_{a}(\vec{k})}{\partial k_{x}} \frac{\partial \hat{h}_{b}(\vec{k})}{\partial k_{y}} \hat{h}_{c}(\vec{k})\left(n_{+}(\vec{k})-n_{-}(\vec{k})\right) \tag{16.46}
\end{equation*}
$$

where $n_{ \pm}(\vec{k})$ are the Fermi functions (at $T=0$ in this case) for the two bands. Since $E_{+}(\vec{k})-E_{-}(\vec{k})=2\|\vec{h}(\vec{k})\|>0$, there is a finite energy gap for the entire Brillouin zone. In the case of an insulating state the Fermi energy is in the gap between the minimum energy of the conduction band $\min _{\mathrm{BZ}}\left\{E_{+}(\vec{k})\right\}$ and the maximum energy of the valence band $\max _{\mathrm{BZ}}\left\{E_{-}(\vec{k})\right\}$, the valence band will be fully occupied, $n_{-}(\vec{k})=1$ (for all $\vec{k}$ in the Brillouin zone), and the conduction band will be empty, $n_{+}(\vec{k})=0$ (again for all $\vec{k}$ in the Brillouin zone). Hence, the Hall conductivity of the insulating state is given by the much simpler expression (Qi et al., 2006b; Yakovenko, 1990)

$$
\begin{equation*}
\sigma_{x y}=-\frac{e^{2}}{8 \pi^{2}} \int_{\mathrm{BZ}} d^{2} k \quad \epsilon_{a b c} \hat{h}_{a}(\vec{k}) \partial_{k_{x}} \hat{h}_{b}(\vec{k}) \partial_{k_{y}} \hat{h}_{c}(\vec{k}) \tag{16.47}
\end{equation*}
$$

We now recall that we encountered essentially the same expression in our discussion of topological terms in 1D quantum antiferromagnets in Section 7.6, where we showed that the topological charge $\mathcal{Q}$ of the mappings of a smooth closed 2-manifold (which in that case was the sphere $S_{2}$ ) to the target space $S_{2}$ of a nonlinear sigma model with global symmetry $\mathrm{O}(3)$ is given by a topological invariant known as the Pontryagin index (or winding number) of Eq. (7.75). The expression for the Pontryagin index $\mathcal{Q}$

$$
\begin{equation*}
\mathcal{Q}=\frac{1}{4 \pi} \int_{\mathrm{BZ}} d^{2} k \epsilon_{a b c} \hat{h}_{a}(\vec{k}) \partial_{k_{x}} \hat{h}_{b}(\vec{k}) \partial_{k_{y}} \hat{h}_{c}(\vec{k}) \tag{16.48}
\end{equation*}
$$

is indeed essentially the same as our result for the Hall conductivity of Eq. (16.47) (up to a prefactor of $e^{2} /(2 \pi)$ ). This is also the same topological invariant as that which we encountered in the theory of the path integral for spin in Chapter 7, where it entered into the Berry phase for a two-level system.

The main difference in the case at hand is that the topological charge $\mathcal{Q}$ now is the integer that classifies the homotopy classes of maps of the first Brillouin zone, the torus $T_{\mathrm{BZ}}^{2}$ (instead of the sphere $S_{2}$ ), onto the target space $S_{2}$ of the unit vector $\hat{h}(\vec{k})$ which parametrizes the one-particle Hamiltonians, i.e. the homotopy class $\pi_{2}\left(S^{2}\right)=\mathbb{Z}$,

$$
\begin{equation*}
\hat{h}(\vec{k}): T_{\mathrm{BZ}}^{2} \mapsto S^{2} \tag{16.49}
\end{equation*}
$$

(Fig. 16.3). Nevertheless, these maps are still classified by a topological charge $\mathcal{Q}$ that can take only integer values. We thus conclude that the Hall conductivity
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-703.jpg?height=412&width=894&top_left_y=198&top_left_x=401)

Figure 16.3 The maps of the Brillouin zone, the torus $T_{\mathrm{BZ}}^{2}$, onto the target space $S^{2}$ that parametrize the one-particle Dirac Hamiltonian, Eq. (16.49).
(in standard units) is given now in terms of the Pontryagin index $\mathcal{Q}$,

$$
\begin{equation*}
\sigma_{x y}=-\frac{e^{2}}{2 \pi \hbar} \mathcal{Q} \tag{16.50}
\end{equation*}
$$

Thus, if the topological charge $\mathcal{Q} \neq 0$ we have a topological insulator with a quantized anomalous Hall effect. Moreover, and more subtly, the topological charge $\mathcal{Q}$ actually computes the TKNN integers of the total curvature of the (abelian) Berry connections of the spinors over the Brillouin zone. Thus, in this case the first Chern number $C_{1}$ is computed by the Pontryagin index $\mathcal{Q}$, i.e. $C_{1}=\mathcal{Q}$.

In the theory of the non-linear sigma model of 1D quantum antiferromagnets the Pontryagin index $\mathcal{Q}$ was used to classify instanton processes, whereas in 2D quantum antiferromagnets it classified soliton states known as skyrmions. In the case of the topological insulators the index $\mathcal{Q}$ classifies one-particle Hamiltonians labeled by the parameters $\hat{h}(\vec{k})$. Thus the vector $\hat{h}(\vec{k})$ is associated with skyrmionlike configurations on the first Brillouin zone.

In particular, this important result implies that the Hall conductivity has to be an integer (in units of $e^{2} / h$ ) and cannot be a half-integer. Naturally, this is consistent with the requirement of the Nielsen-Ninomiya theorem that the number of Dirac flavors must be an even integer. It is interesting to see in this language the origin of the half-integer value of the Hall conductivity for a single Dirac fermion. Let us consider the one-particle (Dirac) Hamiltonian for a two-component Dirac spinor. In momentum space it is (in units with $v_{\mathrm{F}}=1$ and $\hbar=1$ )

$$
\begin{equation*}
h(\vec{p})=\vec{\alpha} \cdot \vec{p}+\beta m=\vec{h} \cdot \sigma \tag{16.51}
\end{equation*}
$$

where we defined the three-component vector $\vec{h}$ by

$$
\begin{equation*}
\vec{h}=\left(p_{x}, p_{y}, m\right) \tag{16.52}
\end{equation*}
$$

The norm of this vector is, of course, the one-particle energy $E(\vec{p})$,

$$
\begin{equation*}
\|\vec{h}(\vec{p})\|=E(\vec{p})=\sqrt{\vec{p}^{2}+m^{2}} \tag{16.53}
\end{equation*}
$$

Let $\hat{h}(\vec{p})$ be the unit vector

$$
\begin{equation*}
\hat{h}(\vec{p})=\frac{\vec{h}(\vec{p})}{\|\vec{h}(\vec{p})\|}=\frac{1}{E(\vec{p})}\left(p_{x}, p_{y}, m\right) \tag{16.54}
\end{equation*}
$$

This unit vector has the limiting behaviors

$$
\begin{equation*}
\lim _{|\vec{p}| \rightarrow \infty} \hat{h}(\vec{p})=\frac{1}{|\vec{p}|}\left(p_{x}, p_{y}, 0\right), \quad \lim _{|\vec{p}| \rightarrow 0} \hat{h}(\vec{p})=\operatorname{sgn}(m)(0,0,1) \tag{16.55}
\end{equation*}
$$

Therefore, we see that $\hat{h}(\vec{k})$ has the form of the meron configuration shown in Fig. 16.4, and corresponds to the case of $m>0$. It is half a skyrmion and as such it sweeps half of the area of the unit sphere, i.e. $2 \pi$. Hence the meron has half of the topological charge, $\mathcal{Q}=-\frac{1}{2}$. Similarly, the anti-meron, which corresponds to the case of $m<0$, also has half of the topological charge but with opposite sign, $\mathcal{Q}=+\frac{1}{2}$. Thus the topological-charge contribution is $\mathcal{Q}=-\frac{1}{2} \operatorname{sgn}(m)$. The general result of Eq. (16.50) then tells us that each twocomponent Dirac fermion contributes to the Hall conductivity (or, which amounts to the same thing, to the coupling constant of the effective Chern-Simons action) with $\sigma_{x y}=\left(e^{2} /(2 h)\right) \operatorname{sgn}(m)$, which is the result we found above.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-704.jpg?height=507&width=841&top_left_y=1466&top_left_x=437)

Figure 16.4 A meron configuration for the unit vector $\hat{h}(\vec{k})$ in momentum space for a two-component Dirac fermion with $m>0$.

### 16.4 The quantum spin Hall effect

The quantum spin Hall effect is a close relative of the quantum anomalous Hall effect. However, unlike the quantum Hall effects (both "normal" and anomalous), the quantum spin Hall effect involves the spin current instead of the charge current. Although the spin Hall effect had been predicted to exist in metallic systems (Hirsch, 1999), we will focus here on the case of insulators, where this effect may be quantized. Indeed, a quantized spin Hall effect was discovered recently in 2DEGs that exist, under suitable circumstances that we will discuss shortly, in $\mathrm{HgTe} / \mathrm{CdTe}$ quantum wells (König et al., 2008). We will see that this is an example of a time-reversal-invariant topological insulator.

However, before we get started we need to clarify what is meant by a spin conductivity and under what circumstances the spin Hall effect may occur. Spin transport is defined by analogy with charge transport, i.e. as a spin accumulation at one end of the sample as a consequence of electronic motion. However, a fundamental difference between spin and charge is that they are related to very different symmetries. Thus, charge conservation is related to the (gauge-invariant) current $J_{\mu}$ which is the generator of the $\mathrm{U}(1)$ electromagnetic (gauge) symmetry, which is abelian. In contrast, a system with an unbroken $\mathrm{SU}(2)$ spin invariance has as many components of the spin currents as generators in the $\mathrm{SU}(2)$ algebra, $J_{\mu}^{a}$, where $a=1,2,3$ runs in the algebra of $\mathrm{SU}(2)$ and $\mu=0,1, \ldots, d$ is the space-time index in $d$ space dimensions. Thus, the spin symmetry is non-abelian and the spin currents generate the (non-abelian) $\mathrm{SU}(2)$ algebra.

In this sense a spin conductivity can be defined only if the spin symmetry is somehow broken down to a $\mathrm{U}(1)$ subgroup so that the $J^{3}$ current is conserved. This is often the case in solid-state systems due to the effects of the (atomic scale) spin-orbit interaction which ties the spin of the conduction electrons to the lattice. However, we will see that it is also possible to have a quantum spin Hall effect even if the spin symmetry is broken down to a $\mathbb{Z}_{2}$ subgroup of the spin symmetry group $S U(2)$. Although in this case a bulk spin Hall conductance can no longer be defined, this state will still be characterized by having gapless edge states that transport spin.

### 16.4.1 The Kane-Mele model

Kane and Mele (2005a) suggested that the quantum spin Hall effect could be observed in graphene. Their proposal relied on an estimate of the magnitude of the spin-orbit interaction in graphene, which, unfortunately, turns out to be much smaller than their estimate - too small, in fact, to matter. Nevertheless, their analysis provides a simple model to study the quantum spin Hall effect.

The Kane-Mele tight-binding (free-fermion) Hamiltonian is a modification of the honeycomb model for graphene, Eq. (16.17), of the form

$$
\begin{align*}
H_{\mathrm{KM}}= & t_{1} \sum_{\vec{r}_{\mathrm{A}} ; i=1,2,3 ; \sigma=\uparrow, \downarrow}\left[\psi_{\sigma}^{\dagger}\left(\vec{r}_{\mathrm{A}}\right) \chi_{\sigma}\left(\vec{r}_{\mathrm{A}}+\vec{d}_{i}\right)+\text { h.c. }\right] \\
& +\sum_{\left\langle\vec{r}_{\mathrm{A}} ; \vec{r}_{\mathrm{A}}^{\prime} ; ; \sigma, \sigma^{\prime}=\uparrow, \downarrow\right.}\left[i t_{2} \psi_{\sigma}^{\dagger}\left(\vec{r}_{\mathrm{A}}\right) \nu\left[\vec{r}_{\mathrm{A}}, \vec{r}_{\mathrm{A}}^{\prime}\right] s_{\sigma \sigma^{\prime}}^{z} \psi_{\sigma^{\prime}}\left(\vec{r}_{\mathrm{A}}^{\prime}\right)+\text { h.c. }\right] \\
& +\sum_{\left\langle\vec{r}_{\mathrm{B}} ; \vec{r}_{\mathrm{B}}^{\prime}\right\rangle ; \sigma, \sigma^{\prime}=\uparrow, \downarrow}\left[i t_{2} \chi_{\sigma}^{\dagger}\left(\vec{r}_{\mathrm{B}}\right) \nu\left[\vec{r}_{\mathrm{B}}, \vec{r}_{\mathrm{B}}^{\prime}\right] s_{\sigma \sigma^{\prime}}^{z} \chi_{\sigma^{\prime}}\left(\vec{r}_{\mathrm{B}}^{\prime}\right)+\text { h.c. }\right] \tag{16.56}
\end{align*}
$$

where $s^{z}$ is the diagonal Pauli matrix $\sigma^{3}$ and acts on the spin labels. Here $\left\langle\vec{r}_{\mathrm{A}} ; \vec{r}_{\mathrm{A}}^{\prime}\right\rangle$ denotes nearest-neighbor sites on the A sublattice (which are second-nearest neighbors for the honeycomb lattice), and similarly for the B sublattice. The amplitude $\nu\left[\vec{r}_{\mathrm{A}}, \vec{r}_{\mathrm{A}}^{\prime}\right]$ takes the values $\pm 1$ depending on the orientation of the two nearestneighbor bonds $\vec{d}_{i}$ and $\vec{d}_{j}$ which the electron traverses in going from site $\vec{r}_{\mathrm{A}}$ to $\vec{r}_{\mathrm{A}}^{\prime}$ (and analogously for sublattice B): $v\left[\vec{r}_{\mathrm{A}}, \vec{r}_{\mathrm{A}}^{\prime}\right]=+1(-1)$ if the electron makes a left (right) turn on the second traversed bond (also with the same rule for sublattice B). In other words, this spin-dependent amplitude is $i \vec{d}_{i} \times \vec{d}_{j} \cdot \vec{s}$ (where $\vec{s}$ is the electron spin), which has also been derived from a microscopic model of graphene that includes the spin-orbit interaction.

We can easily recognize that this tight-binding free-fermion model is simply two copies of a Haldane honeycomb model with flux $\phi=\pi / 2$ for electrons with spin $\uparrow$ and flux $-\pi / 2$ for electrons with spin $\downarrow$. This system is time-reversalinvariant since the time-reversal-violating term, $t_{2}$, has opposite signs for the two spin components.

It is now straightforward to find the effective low-energy theory in terms of Dirac fermions by mimicking our earlier analysis for the Haldane honeycomb model. It is essentially the same as for the Haldane honeycomb model (and also the $\pi$ flux model), but doubled to account for spin. Thus the effective theory now involves Fermi fields that have not only a Dirac (or sublattice) index $a=1,2$ and a flavor (or valley) index $I=1,2$, but also a spin index $\sigma=\uparrow, \downarrow$. The effective Dirac Hamiltonian is simply

$$
\begin{equation*}
\mathcal{H}=-i \hbar v_{\mathrm{F}} \psi^{\dagger}(x)\left(\alpha_{1} \partial_{x}+\alpha_{2} \partial_{y}\right) \psi(x)+\Delta_{\mathrm{so}} \psi^{\dagger}(x) \beta s^{z} \psi(x) \tag{16.57}
\end{equation*}
$$

where $\Delta_{\text {so }}=3 \sqrt{3} t_{2}$ measures the strength of the spin-orbit coupling (Kane and Mele, 2005a). Here we have, once again, used the notation for the two-component Dirac spinors

$$
\begin{equation*}
\psi_{1, \sigma}=\binom{\psi_{\mathrm{K}, \sigma}}{\chi_{\mathrm{K}, \sigma}}, \quad \psi_{2, \sigma}=\binom{-i \chi_{\mathrm{K}^{\prime}, \sigma}}{i \psi_{\mathrm{K}^{\prime}, \sigma}} \tag{16.58}
\end{equation*}
$$

which amounts to a change of basis for the spinor at valley $\mathrm{K}^{\prime}$ relative to the spinor at valley K without changing the spin.

At the level of the effective Dirac theory the energy gap generated by the spinorbit coupling is a mass term, which we denoted by $\Delta_{\text {so }}$ in Eq. (16.57), which has opposite signs for the two spin components of the Dirac fermions. Since the mass term for each spin component signals a violation of time-reversal invariance, we conclude that in this system time reversal is not broken. In particular, if no other terms are included in the Hamiltonian, our earlier analysis implies that the Hall conductivity of this system is zero. This happens since the two spin orientations make equal and opposite contributions to $\sigma_{x y}^{\uparrow, \downarrow}= \pm e^{2} / h$, and cancel each other out,

$$
\begin{equation*}
\sigma_{x y}=\sigma_{x y}^{\uparrow}+\sigma_{x y}^{\downarrow}=\frac{e^{2}}{h}-\frac{e^{2}}{h}=0 \tag{16.59}
\end{equation*}
$$

which is required by time-reversal invariance.
Although the Kane-Mele Hamiltonian is time-reversal-invariant, it has an explicitly broken $\mathrm{SU}(2)$ spin-rotational invariance by virtue of spin-orbit effects. However, unless further terms are included, this Hamiltonian has a conserved $z$ component of the total spin, $S^{z}$, which generates an unbroken $\mathrm{U}(1)$ subgroup of $\mathrm{SU}(2)$. Consequently, in addition to the charge current, the Kane-Mele model also has a conserved $S^{z}$ spin current,

$$
\begin{equation*}
\vec{J}_{\text {spin }}=\frac{\hbar}{2 e}\left(\vec{J}_{\uparrow}-\vec{J}_{\downarrow}\right)=\frac{\hbar}{2 e} \sum_{I=1,2} \psi_{I}^{\dagger} s^{z} \vec{\alpha} \psi_{I}=\frac{\hbar}{2 e} \sum_{I=1,2} \bar{\psi}_{I} s^{z} \vec{\gamma} \psi_{I} \tag{16.60}
\end{equation*}
$$

This means that an external electric field will induce a vanishing Hall current (since $\sigma_{x y}=0$ ), and, at the same time, equal (and opposite) currents of electrons carrying opposite spins are also induced. Hence, at this level it is possible to define a bulk spin Hall conductivity that is the difference of the Hall conductivities for electrons with $\uparrow$ and $\downarrow$ spins. However, since the two spin components have Hall conductivities that are equal but have opposite signs, the spin Hall conductivity is non-vanishing and quantized,

$$
\begin{equation*}
\sigma_{x y}^{\mathrm{spin}}=\frac{\hbar}{2 e}\left(\sigma_{x y}^{\uparrow}-\sigma_{x y}^{\downarrow}\right)=\frac{e}{2 \pi} \tag{16.61}
\end{equation*}
$$

This is the quantum spin Hall effect.
This analysis of the bulk currents induced by electric fields relies on the conservation of the $z$-component of the spin. As noted by Kane and Mele, in the presence of a coupling to an external perpendicular electric field (or to a substrate) graphene admits an additional (Rashba) coupling, which at the level of the graphene model is

$$
\begin{equation*}
H_{\mathrm{R}}=i \lambda_{\mathrm{R}} \sum_{\vec{r}_{\mathrm{A}}, i} \psi^{\dagger}\left(\vec{r}_{\mathrm{A}}\right)\left(\vec{\sigma} \times \vec{d}_{i}\right)_{z} \chi\left(\vec{r}_{\mathrm{A}}+\vec{d}_{i}\right)+\text { h.c. } \tag{16.62}
\end{equation*}
$$

where $\lambda_{\mathrm{R}}$ is the Rashba coupling. This term breaks the mirror symmetry of the plane, $z \rightarrow-z$, and it is also due to spin-orbit interactions. Furthermore, while this term is still consistent with time-reversal invariance, it breaks the spin-conservation law. Although this term is very small in graphene, it means that, strictly speaking, a conserved bulk spin current no longer exists and that the spin Hall effect cannot be defined as we have done above. In terms of the Dirac fermions the Rashba coupling contributes to the effective Hamiltonian a term of the form

$$
\begin{equation*}
\mathcal{H}_{\mathrm{R}}=\lambda_{\mathrm{R}} \sum_{I=1,2} \psi_{I}^{\dagger}(\vec{\sigma} \times \vec{s})_{z} \psi_{I} \tag{16.63}
\end{equation*}
$$

which is a linear combination of the spatial components of the $x$ and $y$ spin currents. However, provided that $\lambda_{\mathrm{R}}<\Delta_{\text {so }}$, the Rashba term cannot close the gap and hence the system remains a topological insulator. We will see below that the more precise way to characterize the quantum spin Hall effect is in terms of its edge states.

### 16.4.2 The quantum spin Hall effect in HgTe quantum wells

The analysis of the Kane-Mele model shows that the natural place to look for the spin quantum Hall effect is in systems that naturally have large spin-orbit effects. Bernevig, Hughes, and Zhang (Bernevig et al., 2006) showed that the quantum spin Hall effect should be observable in a $\mathrm{CdTe} / \mathrm{HgTe} / \mathrm{CdTe}$ quantum well, involving two narrow-gap semiconductors with large spin-orbit coupling. The main predictions of their theory, which we will now discuss, were confirmed in the experiments of Molenkamp and coworkers (König et al., 2007, 2008).

HgTe and CdTe are semiconductors with a narrow gap at the $\Gamma$ point (the center) of their Brillouin zone. In both materials the bands that nearly cross at the $\Gamma$ point are the s-type band $\Gamma_{6}$ and the p-type band which is split by spin-orbit coupling into a $J=3 / 2$ band, $\Gamma_{8}$, and a higher-energy $J=1 / 2$ band, $\Gamma_{7}$. While the details will not be important to us, it will matter that in HgTe the $\Gamma_{8}$ band lies above the $\Gamma_{6}$ band in energy, while in CdTe the order of the bands is reversed.

For the geometry of a quantum well along the $z$ axis, centered at $z=0$ and with width $d$ (the thickness of the HgTe region), Bernevig, Hughes, and Zhang derived an effective Hamiltonian for a $\mathrm{CdTe} / \mathrm{HgTe} / \mathrm{CdTe}$ quantum well that is accurate near the $\Gamma$ point, $\vec{k}=0$, of the Brillouin zone, for the 2 D bands $\left|\mathrm{E} 1, m_{J}=1 / 2\right\rangle$, $\left|\mathrm{H} 1, m_{J}=3 / 2\right\rangle,\left|\mathrm{E} 1, m_{J}=-1 / 2\right\rangle$, and $\left|\mathrm{H} 1, m_{J}=-3 / 2\right\rangle$ (which are linear combinations of the $\Gamma_{6}$ and the $\Gamma_{8}$ states). In this basis, the effective one-particle Hamiltonian near the $\Gamma$ point, $\vec{k}=0$, is a $4 \times 4$ block-diagonal matrix of the form (Bernevig et al., 2006)

$$
H_{\mathrm{eff}}\left(k_{x}, k_{y}\right)=\left(\begin{array}{cc}
h(\vec{k}) & 0  \tag{16.64}\\
0 & h^{*}(-\vec{k})
\end{array}\right)
$$

Here $h(\vec{k})$ is a $2 \times 2$ hermitian matrix

$$
\begin{equation*}
h(\vec{k})=\varepsilon(\vec{k}) \mathbb{I}+\vec{d}(\vec{k}) \cdot \vec{\sigma} \tag{16.65}
\end{equation*}
$$

where $\mathbb{I}=\operatorname{diag}(1,1)$ is the $2 \times 2$ identity matrix. The components of the vector $\vec{d}(\vec{k})$ near the $\Gamma$ point, $\vec{k}=0$, are

$$
\begin{align*}
d_{1} \pm i d_{2} & =A\left(k_{x} \pm i k_{y}\right)+\cdots \\
d_{3} & =M-B \vec{k}^{2}+\cdots  \tag{16.66}\\
\varepsilon(\vec{k}) & =C-D \vec{k}^{2}+\cdots
\end{align*}
$$

where $A, B, C$, and $D$ are real and positive coefficients. The parameter $M$, which opens a gap in the one-particle spectrum, is real (as it should be), and changes sign as the thickness $d$ of the HgTe in the quantum well increases. The effective one-particle Hamiltonian of Eq. (16.64) is manifestly time-reversal-invariant, with the states in the two $2 \times 2$ blocks related by time reversal. By inspection we see that, as expected, these two pairs of states have opposite parity. Thus the system is time-reversal- and parity-invariant.

This effective Hamiltonian has the same structure as that we encountered in the Kane-Mele model. However, there are important differences between the two models. One important difference is that we now have four bands that have near crossings at the $\Gamma$ point, whereas the Kane-Mele model has two bands with two valleys at the vertices K and $\mathrm{K}^{\prime}$ of the Brillouin zone of the honeycomb lattice where they have near crossings. In addition, due to the effects of spin-orbit coupling, spin and orbital angular momentum are not good quantum numbers to label the states. In this context, by "spin" we mean the direction of the projection of the total (atomic) angular momentum $J^{z}$ since the states in the upper block have $m_{J}=1 / 2,3 / 2$ while the states in the lower block have $m_{J}=-1 / 2,-3 / 2$.

In the Kane-Mele model the two flavors of Dirac fermions (at K and $\mathrm{K}^{\prime}$ ) have opposite parity. This led us to the condition (after a redefinition of the spinor at $\mathrm{K}^{\prime}$ ) that the quantized Hall conductivity is $\left(e^{2} /(2 h)\right)\left[\operatorname{sgn}\left(m_{1}\right)+\operatorname{sgn}\left(m_{2}\right)\right]=0, e^{2} / h$, depending on whether the mass terms have opposite signs, and we have an unbroken time-reversal symmetry and a normal insulator, or they have the same sign, and we have a broken time-reversal symmetry and an anomalous quantum Hall effect.

Here we can proceed in the same fashion. The effective Hamiltonian for the upper block, for states with spin $\uparrow$, is parametrized by a vector $\vec{d}_{\uparrow}(\vec{k})$,

$$
\begin{equation*}
\vec{d}_{\uparrow}(\vec{k})=\frac{1}{\sqrt{\vec{k}^{2}+M^{2}}}\left(k_{x}, k_{y}, M\right) \tag{16.67}
\end{equation*}
$$

where we have rescaled all the momenta by $1 / A>0$. Its unit vector $\vec{m}_{\uparrow}(\vec{k})$ has the asymptotic behaviors

$$
\begin{equation*}
\lim _{\vec{k} \rightarrow 0} \vec{m}_{\uparrow}(\vec{k})=\operatorname{sgn}(M)(0,0,1), \quad \lim _{|\vec{k}| \rightarrow \infty} \vec{m}_{\uparrow}(\vec{k})=\frac{1}{|\vec{k}|}\left(k_{x}, k_{y}, 0\right) \tag{16.68}
\end{equation*}
$$

which is a meron with topological charge $\mathcal{Q}_{\uparrow}=-\frac{1}{2} \operatorname{sgn}(M)$.
For the states with spin $\downarrow$, the Hamiltonian is parametrized by $\vec{d}_{\downarrow}(\vec{k})$,

$$
\begin{equation*}
\vec{d}_{\downarrow}(\vec{k})=\frac{1}{\sqrt{\vec{k}^{2}+M^{2}}}\left(-k_{x}, k_{y}, M\right) \tag{16.69}
\end{equation*}
$$

which is the transform of $\vec{d}_{\uparrow}$ by parity, $k_{x} \rightarrow-k_{x}$ and $k_{y} \rightarrow k_{y}$. A rotation of the $\downarrow$ spinor by $\exp \left(i(\pi / 2) \sigma_{2}\right)$ rotates the $\vec{d}_{\downarrow}$ vector about the $k_{y}$ axis to

$$
\begin{equation*}
\vec{d}_{\downarrow} \mapsto \frac{A}{\sqrt{A^{2} \vec{k}^{2}+M^{2}}}\left(k_{x}, k_{y},-M\right) \tag{16.70}
\end{equation*}
$$

Its unit vector $\vec{m}_{\downarrow}(\vec{k})$ has the asymptotic behaviors

$$
\begin{equation*}
\lim _{\vec{k} \rightarrow 0} \vec{m}_{\downarrow}(\vec{k})=-\operatorname{sgn}(M)(0,0,1), \quad \lim _{|\vec{k}| \rightarrow \infty} \vec{m}_{\downarrow}(\vec{k})=\frac{1}{|\vec{k}|}\left(k_{x}, k_{y}, 0\right) \tag{16.71}
\end{equation*}
$$

which is a meron with topological charge $\mathcal{Q}_{\downarrow}=+\frac{1}{2} \operatorname{sgn}(M)$.
Although it would be tempting to proceed as we did in the Kane-Mele model and use the topological charges to compute the conductivities, in this case we would be led to an incorrect conclusion. The reason is that we actually started with a fourband model, instead of a two-band model as in the Kane-Mele model, and we need to determine the contribution (if any) of the rest of the bands away from the $\Gamma$ point to the topological charges. They clearly must contribute, since each band cannot have a fractional Chern number.

Bernevig, Hughes, and Zhang (BHZ) solved this problem by writing down a tight-binding model that, near the $\Gamma$ point, reduces to the Hamiltonian of Eq. (16.64). They proposed to replace each $2 \times 2$ block of the effective band model by the following lattice model with two flavors, $\uparrow$ and $\downarrow$, of two-component fermion spinors on the square lattice. In real space the Hamiltonian for each block of the BHZ model becomes (where we have dropped the spinor indices)

$$
\begin{align*}
H=\sum_{\vec{r}}\{[ & \left.\mp i c^{\dagger}\left(\vec{r}+\hat{e}_{x}\right) \sigma^{x} c(\vec{r})-i c^{\dagger}\left(\vec{r}+\hat{e}_{y}\right) \sigma^{y} c(\vec{r})+\text { h.c. }\right] \\
& +\left[c^{\dagger}\left(\vec{r}+\hat{e}_{x}\right) \sigma^{z} c(\vec{r})+c^{\dagger}\left(\vec{r}+\hat{e}_{y}\right) \sigma^{z} c(\vec{r})+\text { h.c. }\right] \\
& \left.+(M-2) c^{\dagger}(\vec{r}) \sigma^{z} c(\vec{r})\right\} \tag{16.72}
\end{align*}
$$

where the $+(-)$ denotes the $\uparrow(\downarrow)$ spinors.

The (second-quantized) Hamiltonian (in momentum space) is

$$
\begin{align*}
H=\int_{\mathrm{BZ}} \frac{d^{2} k}{(2 \pi)^{2}} \sum_{\alpha, \beta=1,2} & {\left[c_{\alpha, \uparrow}^{\dagger}(\vec{k}) \vec{d}_{\uparrow}(\vec{k}) \cdot \vec{\sigma}_{\alpha \beta} c_{\beta, \uparrow}(\vec{k})\right.} \\
& \left.+c_{\alpha, \downarrow}^{\dagger}(\vec{k}) \vec{d}_{\downarrow}(\vec{k}) \cdot \vec{\sigma}_{\alpha \beta} c_{\beta, \downarrow}(\vec{k})\right] \tag{16.73}
\end{align*}
$$

where the integral runs over the first Brillouin zone of the square lattice, $\left|k_{x}\right| \leq \pi$ and $\left|k_{y}\right| \leq \pi$, and $\vec{\sigma}$ is a three-component vector of the three Pauli matrices. Here we used the notation $\vec{d}_{ \pm}(\vec{k})=\left( \pm \sin k_{x}, \sin k_{y}, M+\cos k_{x}+\cos k_{y}-2\right)$, where + stands for $\uparrow$ and - for $\downarrow$. This form, which makes manifest the fact that the two bands have opposite 2D parities, follows from the requirement that $\vec{d}_{\downarrow}(\vec{k}) \cdot \vec{\sigma}=$ $\vec{d}_{\uparrow}(-\vec{k}) \cdot \vec{\sigma}^{*}$ so that the one-particle Hamiltonian has the form of Eq. (16.64), as is demanded by time-reversal invariance.

This theory looks like a lattice version of the theory of Dirac fermions. There are two ways to discretize the Dirac theory in such a way that it reproduces the standard field theory of relativistic Dirac fermions at low energies. One way is to use KogutSusskind (also known as "staggered") fermions, in which half of the components of the Dirac fermion are assigned to one sublattice (of a bipartite lattice) and the other half to the other sublattice (Kogut and Susskind, 1975; Susskind, 1977; Kogut, 1983). The Hamiltonians of flux phases, and hence of fermions in a lattice with flux $\Phi=\pi$ per plaquette, are examples of Kogut-Susskind fermions.

The other approach is to use Wilson fermions, in which all components of the Dirac fermion are defined at each lattice site (Wilson, 1974; Creutz, 2001). The Hamiltonian of Eq. (16.72) is identical to that of Wilson fermions. However, in both approaches some symmetries of the continuum field theory of massless Dirac fermions are broken in the lattice versions. In $(1+1)$ and $(3+1)$ dimensions, the continuous chiral symmetry, $\psi \rightarrow \exp \left(i \theta \gamma_{5}\right) \psi$, is in general broken to a discrete subgroup by lattice effects. We have discussed the 1D version of this in Chapters 5 and 6 , where we saw that the continuous chiral symmetry is equivalent to a uniform shift of the charge-density profile. In both cases the spontaneous breaking of the discrete chiral symmetry led to the fermions acquiring a gap, a dynamical mass generation as in the example of the Gross-Neveu model.

In $(2+1)$ dimensions these questions have a certain subtlety, since there is no $\gamma_{5}$ Dirac matrix. In fact, as we saw, for two-component fermions the mass term, $\bar{\psi} \psi$, breaks parity and time-reversal invariance. Since the lattice models have "doublers" in the Kogut-Susskind version, the different flavors may also acquire a mass. For instance, this happens in the case of the graphene model with sufficiently strong (but much too large for real graphene) repulsive interactions. In this case the mass term which is generated breaks the sublattice symmetry of graphene and hence breaks its point-group symmetry. If a mass term has Haldane's form, the broken
symmetry is time-reversal-invariance. Likewise, in the case of the Wilson-fermion model, the fermion "doublers," i.e. the massive fermions at the corners of the Brillouin zone, break time-reversal invariance separately. In more formal terms, lattice regularizations generally break symmetries of the continuum field theory of Dirac fermions, while keeping gauge invariance intact. In $(2+1)$ dimensions these considerations lead to the parity anomaly, i.e. the breaking of parity (and time reversal) in a gauge-invariant regularization. In $(1+1)$ and $(3+1)$ dimensions, these gauge-invariant regularizations lead to the breaking of the continuum chiral symmetries.

In order to compute the Hall (and spin Hall) conductivities we need to compute the topological charge for the $\uparrow$ bands and for the $\downarrow$ bands. We can do this by expanding the vectors $\vec{d}_{ \pm}(\vec{k})$ in patches of the Brillouin zone centered at the special time-reversal-invariant points of the Brillouin zone $\vec{Q}=(0,0)$, $(\pi, 0),(0, \pi),(\pi, \pi)$, and then evaluate the contribution of each patch to the topological charge. After setting $\vec{k}=\vec{Q}+\vec{q}$, with $|\vec{q}|$ small, we find both for $\uparrow$ bands and for $\downarrow$ bands

$$
\begin{array}{ll}
\vec{d}_{\uparrow,(0,0)}(\vec{q}) \simeq\left(q_{x}, q_{y}, M\right), & \vec{d}_{\downarrow,(0,0)}(\vec{q}) \simeq\left(-q_{x}, q_{y}, M\right), \\
\vec{d}_{\uparrow,(\pi, 0)}(\vec{q}) \simeq\left(-q_{x}, q_{y}, M-2\right), & \vec{d}_{\downarrow,(\pi, 0)}(\vec{q}) \simeq\left(q_{x}, q_{y}, M-2\right),  \tag{16.74}\\
\vec{d}_{\uparrow,(0, \pi)}(\vec{q}) \simeq\left(q_{x},-q_{y}, M-2\right), & \vec{d}_{\downarrow,(0, \pi)}(\vec{q}) \simeq\left(-q_{x},-q_{y}, M-2\right), \\
\vec{d}_{\uparrow,(\pi, \pi)}(\vec{q}) \simeq\left(-q_{x},-q_{y}, M-4\right), & \vec{d}_{\downarrow,(\pi, \pi)}(\vec{q}) \simeq\left(q_{x},-q_{y}, M-4\right)
\end{array}
$$

Notice, for instance, that the vectors $\vec{d}_{\uparrow,(0,0)}$ and $\vec{d}_{\downarrow,(0,0)}$ indicate that near the $\Gamma$ point the two blocks have opposite 2D parities and hence are also time-reversed. The same feature applies to the three other points.

We can now read off their contributions to the topological charges of the $\uparrow$ and $\downarrow$ bands to be

$$
\begin{array}{ll}
\mathcal{Q}_{(0,0)}^{ \pm}=\mp \frac{1}{2} \operatorname{sgn}(M), & \mathcal{Q}_{(\pi, 0)}^{ \pm}= \pm \frac{1}{2} \operatorname{sgn}(M-2), \\
\mathcal{Q}_{(0, \pi)}^{ \pm}= \pm \frac{1}{2} \operatorname{sgn}(M-2), & \mathcal{Q}_{(\pi, \pi)}^{ \pm}=\mp \frac{1}{2} \operatorname{sgn}(M-4) \tag{16.75}
\end{array}
$$

The total topological charge of the $\pm$ bands is $\mathcal{Q}_{\mathrm{T}}^{ \pm}=\mathcal{Q}_{(0,0)}^{ \pm}+\mathcal{Q}_{(\pi, 0)}^{ \pm}+\mathcal{Q}_{(0, \pi)}^{ \pm}+$ $\mathcal{Q}_{(\pi, \pi)}^{ \pm}$, which can now be computed for each regime. The result is

$$
\mathcal{Q}_{\mathrm{T}}^{ \pm}= \begin{cases}0, & \text { for } M<0  \tag{16.76}\\ \mp 1, & \text { for } 0<M<2 \\ \pm 1, & \text { for } 2<M<4 \\ 0, & \text { for } 4<M\end{cases}
$$

Therefore, in the regimes $M<0$ and $M>4$ both $\uparrow$ bands and $\downarrow$ bands have zero (first) Chern number $\mathcal{Q}^{ \pm}$. This is the trivial (or normal) insulator regime for each band. On the other hand, in the two remaining regimes, $0<M<2$ and $2<M<$ 4 , their Chern numbers $\mathcal{Q}^{ \pm}$are $\pm 1$. Hence, both regimes correspond to a quantum anomalous Hall insulator for each band.

Thus, as $M$ increases continuously from $M<0$ to $M>0$, and the gap closes and opens up again at $(0,0)$, the Chern number of each band jumps discontinuously from 0 to $\pm 1$. The two subsequent jumps predicted by Eq. (16.76) correspond to the gap of the tight-binding model closing at $(\pi, 0)$ (and $(0, \pi)$ ) at $M=2$ and at $(\pi, \pi)$ at $M=4$. Only the first gap closing is relevant to the physics of the quantum well we are discussing here.

By inspection of Eq. (16.76) we see that the total topological charge of the full four-band model is zero,

$$
\begin{equation*}
\mathcal{Q}=\mathcal{Q}_{\mathrm{T}}^{\uparrow}+\mathcal{Q}_{\mathrm{T}}^{\downarrow}=0 \tag{16.77}
\end{equation*}
$$

Therefore, this system has vanishing Hall conductivity, $\sigma_{x y}=0$, as it should, since it is time-reversal-invariant.

On the other hand, the spin Hall conductivity, the difference of the Hall conductivities of the $\uparrow$ and $\downarrow$ bands,

$$
\begin{equation*}
\sigma_{x y}^{\mathrm{QSH}}=\sigma_{x y}^{\uparrow}-\sigma_{x y}^{\downarrow}=-\frac{e^{2}}{h}\left(\mathcal{Q}_{\mathrm{T}}^{\uparrow}-\mathcal{Q}_{\mathrm{T}}^{\downarrow}\right) \tag{16.78}
\end{equation*}
$$

takes the quantized values

$$
\sigma_{x y}^{\mathrm{QSH}}= \begin{cases}0, & \text { for } M<0  \tag{16.79}\\ +\frac{2 e^{2}}{h}, & \text { for } 0<M<2 \\ -\frac{2 e^{2}}{h}, & \text { for } 2<M<4 \\ 0, & \text { for } 4<M\end{cases}
$$

Thus, this simple lattice model exhibits the quantum spin Hall effect.
As we mentioned above, band-structure calculations (Bernevig et al., 2006) show that the sign of the gap $M$ changes as a function of the quantum-well thickness $d$ from negative, $M<0$, where the E 1 and H 1 bands of the quantum well are ordered (in energy) as in bulk CdTe, to positive, $M>0$, where the order of the bands is inverted. Thus, this theory predicts that in the inverted-band regime there is a range of values of the gap within which the quantum well should display a quantum spin Hall effect.

## 16.5 $\mathbb{Z}_{2}$ topological invariants

The Chern number is the topological invariant that classifies the integer quantum Hall states and the quantum anomalous Hall states. In the case of the quantum spin Hall states the Chern number of the spin current cannot be defined since the current in general is not conserved. However, as we saw, a form of parity can be associated with the quantum spin Hall states. We will now consider a more general quantum spin Hall system with $N>1$ right-moving edges with spin $\uparrow$ and $N$ left-moving edges with spin $\downarrow$. The above considerations require that $N$ be an odd integer for a quantum spin Hall insulator, whereas $N$ is even for a normal insulator. In particular, in both cases the only way in which the edge states can become insulating (either by acquiring a gap or by localization due to disorder) requires that the states that become gapped have opposite chiralities. Thus edge states become gapped (and thus "disappear") in pairs.

From this perspective a normal insulator is equivalent, modulo 2, to a state without edge states, whereas the edge states of a generic quantum Hall insulator are equivalent to those of a quantum Hall insulator with only one chiral edge state for a given spin orientation. Hence, only the parity of the number of edge states is well defined. This observation leads to the concept that the quantum spin Hall insulators have $\mathbb{Z}_{2}$ topological invariants. In contrast, the quantum anomalous Hall insulators are classified by an integer, the Chern invariant, which coincides with the number of chiral edge states (as in the integer quantum Hall state).

What we are interested in is the topological classification of time-reversalinvariant insulators. We will follow here the work and notation of Kane, Fu, and Mele (Kane and Mele, 2005b; Fu and Kane, 2006; Fu et al., 2007; Fu and Kane, 2007) as well as the work of Roy (2009), and Moore and Balents (2007). It turns out that these concepts, with some caveats, apply both to 2D and to 3D systems, and hence we will discuss them together. To this end, let us consider a time-reversal-invariant periodic (one-particle) Hamiltonian $\mathcal{H}$ with $2 N$ occupied bands. $\mathcal{H}$ has Bloch wave functions $\left|\psi_{n}(\vec{k})\right\rangle=\exp (i \vec{k} \cdot \vec{r})\left|u_{n}(\vec{k})\right\rangle$, where the states $\left|u_{n}(\vec{k})\right\rangle$ are periodic in the unit cell and are eigenstates of the (reduced) Bloch Hamiltonian $H(\vec{k})$,

$$
\begin{equation*}
H(\vec{k})=e^{-i \vec{k} \cdot \vec{r}} \mathcal{H} e^{i \vec{k} \cdot r} \tag{16.80}
\end{equation*}
$$

If we denote by $\vec{G}$ the reciprocal-lattice vectors, then the eigenstates are periodic, $\left|\psi_{n}(\vec{k}+\vec{G})\right\rangle=\left|\psi_{n}(\vec{k})\right\rangle$, and the Brillouin zone is a torus. Hence $\left|u_{n}(\vec{k}+\vec{G})\right\rangle=$ $\exp (-i \vec{G} \cdot \vec{r})\left|u_{n}(\vec{k})\right\rangle$.

Time reversal is the operation that complex-conjugates the state and reverses the spin of the particle. Thus, when acting on one-particle states with spin $S$, it is represented by the operator $\Theta=\exp \left(i \pi S_{y}\right) \mathcal{K}$, where $S_{y}$ is the $y$-component of the
spin and $\mathcal{K}$ is the complex conjugation. For spin $S=1 / 2$ particles time reversal satisfies $\Theta^{2}=-1$. If the one-particle Hamiltonian $\mathcal{H}$ is time-reversal-invariant, $[\mathcal{H}, \Theta]=0$, then the Bloch Hamiltonian $H(\vec{k})$ satisfies

$$
\begin{equation*}
\Theta H(\vec{k}) \Theta^{-1}=H(-\vec{k}) \tag{16.81}
\end{equation*}
$$

The time-reversal operation induces a transformation in the Hilbert space of Bloch states. Let us assume that the system has two occupied Bloch bands, $\left|u_{i=1,2}(\vec{k})\right\rangle$, for each $\vec{k}$ in the Brillouin zone. Hence the states of the occupied bands form a rank-2 vector bundle over the Brillouin-zone torus. The time-reversal transformation $\mathcal{T}$ induces an involution in the Brillouin zone that identifies the points $\vec{k}$ and $-\vec{k}$. The states at these two points are related by an anti-unitary operator $\Theta$, $\left|u_{i}(-\vec{k})\right\rangle=\Theta\left|u_{i}(\vec{k})\right\rangle$, which implies that the bundle is real. From the condition $\Theta^{2}=-1$, the bundle is found to be twisted. In algebraic topology these bundles are classified by an integer (here the number of occupied bands) and a $\mathbb{Z}_{2}$ index that will allow us to classify the quantum spin Hall insulators, which for this reason are called $\mathbb{Z}_{2}$ topological insulators.

In a periodic lattice there is a set of points of the Brillouin zone that we will denote by $\vec{Q}_{i}$ with the property that they differ from their images under the action of time reversal by a vector $\vec{G}$ of the reciprocal lattice, $-\vec{Q}_{i}=\vec{Q}_{i}+\vec{G}$. There are four such points in 2D and eight in 3D. These time-reversal-invariant points of the Brillouin zone can be labeled by two (three) integers $(\bmod 2) n_{i}=0,1$ in $2 \mathrm{D}(3 \mathrm{D})$, such that $\vec{Q}_{i}=\frac{1}{2} \sum_{j} n_{j} \vec{b}_{j}$, where $\left\{\vec{b}_{j}\right\}$ are the primitive reciprocal-lattice vectors. Kane and Mele defined the unitary $2 N \times 2 N$ antisymmetric matrix $w_{m, n}(\vec{k})$,

$$
\begin{equation*}
w_{m, n}(\vec{k})=\left\langle u_{m}(-\vec{k})\right| \Theta\left|u_{n}(\vec{k})\right\rangle \tag{16.82}
\end{equation*}
$$

and showed that the quantities $\delta_{i}$ are given by

$$
\begin{equation*}
\delta_{i}=\frac{\sqrt{\operatorname{det}\left[w\left(\vec{Q}_{i}\right)\right]}}{\operatorname{Pf}\left[w\left(\vec{Q}_{i}\right)\right]}= \pm 1 \tag{16.83}
\end{equation*}
$$

where $\operatorname{det}[w]$ and $\operatorname{Pf}[w]$ are the determinant and the Pfaffian of the matrix $w$. Recall that $\operatorname{det}[w]=\operatorname{Pf}[w]^{2}$.

Because of the square root, the sign of the quantities $\delta_{i}$ is ambiguous. However, by requiring the states $\left|u_{n}(\vec{k})\right\rangle$ to be continuous, $\sqrt{\operatorname{det}[w(\vec{k})]}$ is defined globally in the Brillouin zone since $\operatorname{det}[w(\vec{k})]$ is single-valued on closed loops $C$ and the square root has no branch cuts. For contractible loops this follows from the continuity of the states $\left|u_{n}(\vec{k})\right\rangle$. For non-contractible loops, which can be deformed from $C$ to $-C$, this follows from $\operatorname{det}[w(\vec{k})]=\operatorname{det}[w(-\vec{k})]$. The quantities $\delta_{i}$ are also gauge-dependent, i.e. changes of the phases of the Bloch states at the invariant points. However, suitable products of them are gauge and are also topological
invariants. In 2D the product of these quantities for the four time-reversal-invariant points is gauge-invariant. This defines the $\mathbb{Z}_{2}$ topological invariant $v$ in 2 D ,

$$
\begin{equation*}
(-1)^{\nu}=\prod_{i=1}^{4} \delta_{i} \tag{16.84}
\end{equation*}
$$

In 3D one can use the quantities $\delta_{i}$ computed from the eight time-reversal-invariant points $Q_{i}$ to construct four $\mathbb{Z}_{2}$ topological invariants, namely $v_{0}$ and $v_{k}, k=1,2,3$. They are given by (Fu and Kane, 2007)

$$
\begin{equation*}
(-1)^{\nu_{0}}=\prod_{i=1}^{8} \delta_{i} \tag{16.85}
\end{equation*}
$$

and

$$
\begin{equation*}
(-1)^{v_{k}}=\prod_{n_{k}=1, n_{j \neq k}=0,1} \delta_{i=\left(n_{1}, n_{2}, n_{3}\right)} \tag{16.86}
\end{equation*}
$$

Clearly, the three invariants $v_{k}$ treat the three orthogonal planes which include four time-reversal-invariant points at a time as 2D projections, and the system as if it were layered. It turns out that these three invariants are weak in the sense that they are not robust in the presence of disorder. In contrast, $\nu_{0}$ is robust and hence "more fundamental." Insulators characterized by $\nu_{0}=1$ are said to be strong topological insulators.

Fu and Kane showed that the computation of the $\mathbb{Z}_{2}$ invariant is simpler in the case of systems with inversion symmetry. If the one-particle Hamiltonian $\mathcal{H}$ is invariant under inversion $P,[\mathcal{H}, P]=0$, where the parity operator $P$ is defined as $P\left|\vec{r}, s_{z}\right\rangle=\left|-\vec{r}, s_{z}\right\rangle$, then the Bloch Hamiltonian satisfies $P H(\vec{k}) P^{-1}=H(-\vec{k})$. Let $\mathcal{A}(\vec{k})$ be the Berry connection

$$
\begin{equation*}
\mathcal{A}(\vec{k})=-i \sum_{i=1}^{2 N}\left\langle u_{n}(\vec{k})\right| \nabla_{\vec{k}}\left|u_{n}(\vec{k})\right\rangle \tag{16.87}
\end{equation*}
$$

and let $\mathcal{F}(\vec{k})$ be the Berry curvature,

$$
\begin{equation*}
\mathcal{F}(\vec{k})=\nabla_{\vec{k}} \times \mathcal{A}(\vec{k}) \tag{16.88}
\end{equation*}
$$

However, the Berry curvature $\mathcal{F}(\vec{k})$ is simultaneously odd under time reversal, $\mathcal{F}(-\vec{k})=-\mathcal{F}(\vec{k})$, and even under inversion, $\mathcal{F}(-\vec{k})=+\mathcal{F}(\vec{k})$. Hence the Berry curvature must vanish, $\mathcal{F}(\vec{k})=0$, in systems that are both time-reversal- and inversion-invariant. In this case, it is possible to choose the phases of the Bloch states, i.e. to make a choice of gauge, so that the Berry connection vanishes as well, $\mathcal{A}(\vec{k})=0$. Fu and Kane found that in this gauge the quantities $\delta_{i}$ are given by (Fu and Kane, 2007) 

$$
\begin{equation*}
\delta_{i}=\prod_{m=1}^{N} \xi_{2 m}\left(\vec{Q}_{i}\right) \tag{16.89}
\end{equation*}
$$

where $\xi_{n}\left(\vec{Q}_{i}\right)= \pm 1$ are the parity eigenvalues of the occupied parity eigenstates $\left|\psi_{n}\left(\vec{Q}_{i}\right)\right\rangle$. They further showed that the strong $\mathbb{Z}_{2}$ invariant $\nu_{0}$, which is the product of the eight (four) $\delta_{i}$ in 3D (2D), does not rely on the existence of inversion symmetry.

We will now focus on the case of a system with two bands (plus spin), for which the Hilbert space at each $\vec{k}$ is four-dimensional. The one-particle Hamiltonian $h(\vec{k})$ can always be expanded in a basis of the space of hermitian $4 \times 4$ matrices. This basis can be chosen to be the $4 \times 4$ identity matrix $I$, the five Dirac hermitian gamma matrices, $\Gamma^{a}$ (with $a=1, \ldots, 5$ ), which satisfy the Clifford algebra $\left\{\Gamma_{a}, \Gamma_{b}\right\}=$ $\delta_{a b} I$, and their ten commutators $\Gamma^{a b}=(1 /(2 i))\left[\Gamma^{a}, \Gamma^{b}\right]$. For example, we can take the $\Gamma^{a}$ matrices to be the standard Dirac matrices

$$
\begin{equation*}
\Gamma_{i} \equiv \alpha_{i}=\sigma_{i} \otimes \tau_{1}, \quad \Gamma_{4} \equiv \beta=\gamma_{0}=I \otimes \tau_{3}, \quad \Gamma_{5} \equiv i \gamma_{0} \gamma_{5}=-I \otimes \tau_{2} \tag{16.90}
\end{equation*}
$$

of the Dirac equation in $(3+1)$ dimensions. As usual, in this notation the first factor acts on the two spin components, while the second factor acts on the two bands (the positive- and negative-energy states of the Dirac equation). In the Dirac basis, the time-reversal operation is represented by $\Theta=\left(i \sigma_{2} \otimes I\right) \mathcal{K}$, where $\mathcal{K}$ is the operation of complex conjugation, and parity by $P=\mathcal{I} \otimes \tau_{3}=\beta$. It is straightforward to see that the five gamma matrices commute with $P \Theta$, while the commutators anti-commute with it.

For general time-reversal- and parity-invariant systems, the two-band Bloch Hamiltonian has the form (both in 2D and in 3D)

$$
\begin{equation*}
H(\vec{k})=d_{0}(\vec{k}) \mathcal{I}+\sum_{a=1}^{5} d_{a}(\vec{k}) \Gamma_{a} \tag{16.91}
\end{equation*}
$$

By symmetry, at the time-reversal- and parity-invariant momenta $Q_{i}$ the Bloch Hamiltonian $H\left(\vec{Q}_{i}\right)$ can depend only on the identity matrix $\mathcal{I}$ and on the gamma matrix $\Gamma_{4}=\beta$,

$$
\begin{equation*}
H\left(\vec{Q}_{i}\right)=d_{0}\left(Q_{i}\right) \mathcal{I}+d_{4}\left(\vec{Q}_{i}\right) \beta \tag{16.92}
\end{equation*}
$$

From this result, and recalling that the parities of the spinors are the eigenstates of the gamma matrix $\beta$, we can read off the parities of the occupied states at each time-reversal-invariant point $\vec{Q}_{i}$, leading to the result that, in this simpler case, the quantities $\delta_{i}$ are simply given by (Fu and Kane, 2007)

$$
\begin{equation*}
\delta_{i}=-\operatorname{sgn}\left[d_{4}\left(\vec{Q}_{i}\right)\right] \tag{16.93}
\end{equation*}
$$

The fact that the $\mathbb{Z}_{2}$ topological invariants are given by the parities of the eigenstates at the time-reversal-invariant points of the Brillouin zone suggests that in the regime in which the two-band model has a small gap, and hence can be approximated by the continuum Dirac equation, there may be a relation with the ground-state expectation value of the Dirac fermion bilinear $\langle\bar{\psi} \psi\rangle$, which is nonzero if there is a mass gap. Indeed, if the two-band model has local gap minima at the invariant points, $\vec{Q}_{i}$, as in the case of the Wilson-fermion model, the computation of $\langle\bar{\psi} \psi\rangle$ for each fermionic species involves the matrix element of the Dirac gamma matrix $\beta$ for the occupied eigenvectors (spinors) whose values are precisely the parities.

It may seem surprising that a global topological property of the band structure, such as the $\mathbb{Z}_{2}$ invariants, can be expressed in terms of the parities at certain invariant points of the Brillouin zone, or equivalently in terms of the expectation values of local operators such as $\bar{\psi} \psi$. This is consistent since the band structure is continuous over the Brillouin zone. This also tells us that it is not possible to determine whether a system is a topological insulator solely by a local analysis near a single band crossing. However, suppose we know that for some range of parameters the system is topologically trivial, and then we find that for some other range of parameters there is a band crossing (and inversion) near some invariant point of the Brillouin zone. Then we can assert that in the second range the system is topologically non-trivial and became a $\mathbb{Z}_{2}$ topological insulator.

On the other hand, if the gaps are essentially of $O(1)$ everywhere in the Brillouin zone, a natural approximation to compute the $\mathbb{Z}_{2}$ invariant is to take a "flat-band" limit of the Hamiltonian, in which its momentum dependence essentially disappears. The computation of the invariants in the flat-band limit is considerably simpler, and it is often used to classify the Hamiltonians (Qi et al., 2008; Kitaev, 2009).

As an example, let us compute the $\mathbb{Z}_{2}$ invariant $v_{0}$ for the BHZ model for the quantum spin Hall effect in 2D. By inspection of Eq. (16.74) and Eq. (16.75) we see that $\delta(0,0)=-\operatorname{sgn}(M), \delta(\pi, 0)=-\operatorname{sgn}(M-2)=\delta(0, \pi)$, and $\delta(\pi, \pi)=$ $-\operatorname{sgn}(M-4)$. Hence the $\mathbb{Z}_{2}$ topological invariant $v_{0}$ is

$$
\begin{equation*}
(-1)^{\nu_{0}}=\delta(0,0) \delta(\pi, 0) \delta(0, \pi) \delta(\pi, \pi)=+\operatorname{sgn}(M) \operatorname{sgn}(M-4) \tag{16.94}
\end{equation*}
$$

In other terms, this system has $v_{0}=0(\bmod 2)$ for $M<0$ and for $M>4$ (since the two signs are equal in these regimes), where it is a trivial insulator. Conversely, it has $v_{0}=1(\bmod 2)$ for $0<M<4$ (where the signs are opposite), which we identify as a $\mathbb{Z}_{2}$ topological insulator. This is the quantum spin Hall regime. Clearly, in this regime the parity of the occupied bands at the $\Gamma$ point is opposite to the parity of the occupied bands at $(\pi, \pi)$. Hence, as expected, we have a case of a band inversion.

While the analysis of the previous section predicted a quantized spin Hall conductance, and in fact two different regimes in which the spin Hall conductance was found to have the quantized value $\pm 2 e^{2} / h$, the $\mathbb{Z}_{2}$ topological invariant has the same value, $v_{0}=1$, regardless of the sign of the spin Hall conductance. The reason is that the characterization of the quantum spin Hall state in terms of a Chern number requires the conservation of the component $S_{z}$ of the spin (and of the associated spin current). In contrast, the $\mathbb{Z}_{2}$ topological insulator is well characterized by the topological invariant $\nu_{0}$ even in the absence of a conservation law for the $S_{z}$ component of the spin. We will see below that a system with a non-trivial value of the $\mathbb{Z}_{2}$ topological invariant, $v_{0}=1(\bmod 2)$, has protected edge states, and a quantum but not quantized spin Hall effect, whereas such edge states are generally absent if $v_{0}=0(\bmod 2)$.

### 16.6 Three-dimensional topological insulators

The construction that we have used in 2D can be extended to 3D topological insulators. Three-dimensional semiconductors with near band crossings, and hence small gaps, at certain symmetry points of their Brillouin zones have been known for a long time. In all cases the systems have strong spin-orbit couplings and hence the continuous $\mathrm{SU}(2)$ spin invariance is broken to a discrete subgroup. One of the first examples investigated with this approach was PbTe , which is not a topological insulator (although it is close to being one). Its bands have near crossings at the $L$ points of the cubic lattice, $( \pm \pi / 2, \pm \pi / 2, \pm \pi / 2)$, which suggests that it can be described by a Kogut-Susskind version of 3D lattice Dirac fermions (Fradkin et al., 1986; Boyanovsky et al., 1987). It was suggested (by the same authors) that the 2 D parity anomaly may occur in these systems. It turns out that this does not happen in PbTe , since it is a standard insulator, not a topological insulator. This can be checked by a direct computation of the $\mathbb{Z}_{2}$ topological invariant ( Fu and Kane, 2007).

Several 3D narrow-gap semiconductors have been proposed to be topological insulators, notably $\mathrm{Bi}_{1-x} \mathrm{Sb}_{x}$ and HgTe (under uniaxial stress) (Fu and Kane, 2007; Fu et al., 2007), $\mathrm{Bi}_{2} \mathrm{Se}_{3}$ and $\mathrm{Bi}_{2} \mathrm{Te}_{3}$ (Zhang et al., 2009). We will see that all these systems exhibit an odd number of surface states that behave as 2D chiral fermions (different odd numbers depending on the material). These surface states have been detected by angle-resolved photoemission spectroscopy (Hasan and Kane, 2010; Hasan and Moore, 2011; Qi and Zhang, 2011). Unfortunately, at the time of writing, the available materials are conducting, not insulating.

The simplest examples of 3D topological insulators are $\mathrm{Bi}_{2} \mathrm{Se}_{3}$ and $\mathrm{Bi}_{2} \mathrm{Te}_{3}$. In both cases spin-orbit coupling is strong and there is a near band crossing at the $\Gamma$ point, the center $(0,0,0)$ of the Brillouin zone. We will not go through the
complications of the band structure. It will be sufficient for us to use the effective two-band model derived by Zhang and coworkers (Zhang et al., 2009), who showed that the minimal model involves two orbitals, $\left|\mathrm{P}_{z}^{+}, \sigma\right\rangle$ and $\left|\mathrm{P}_{z}^{-}, \sigma\right\rangle$, where $\pm$ denotes the parity of the state, and $\sigma=\uparrow, \downarrow$ are the two spin (actually $J_{z}$ ) components. Thus the states can be represented by a four-component spinor, where the two upper components have + parity and the two lower components have - parity. In this basis the one-particle Hamiltonian near the $\Gamma$ point has the standard Dirac form

$$
\begin{equation*}
H=\varepsilon_{0}(\vec{p}) \mathbb{I}+\vec{A}(\vec{p}) \cdot \vec{\alpha}+\mathcal{M}(\vec{p}) \beta \tag{16.95}
\end{equation*}
$$

where $\vec{\alpha}$ and $\beta$ are the standard Dirac matrices (in the Dirac basis used earlier), $\mathbb{I}$ is the $4 \times 4$ identity matrix, and $\mathcal{M}(\vec{p})=M-B p_{z}^{2}-B^{\prime}\left(p_{x}^{2}+p_{y}^{2}\right)$ and $\vec{A}(p)=$ $\left(A p_{x}, A p_{y}, A^{\prime} p_{z}\right)$. The parameters $B, B^{\prime}, A$, and $A^{\prime}$ are positive.

It will be important to our analysis that, reflecting the inversion symmetry and time-reversal invariance of these materials, the effective Hamiltonian does not include the fifth Dirac matrix $\Gamma_{5}=i \beta \gamma_{5}$. One consequence of this is that the spectrum is particle-hole (or charge-conjugation)-invariant. This fact plays an important role in the physics of the "edge states" of these systems and is a necessary condition in order for these states to be gapless Weyl fermions.

The ("Dirac mass") $M$, the gap at the $\Gamma$ point, is positive for $\mathrm{Bi}_{2} \mathrm{Se}_{3}$ ( and $\mathrm{Bi}_{2} \mathrm{Te}_{3}$ ), but it is negative for $\mathrm{Sb}_{2} \mathrm{Se}_{3}$. Hence there is a band inversion at the $\Gamma$ point. By analogy with the 2D quantum spin-Hall-system cousin that we just discussed, these systems are candidates to be $\mathbb{Z}_{2}$ topological insulators, and the order of the bands with opposite band parity is switched in one material relative to the others. This result suggests that $\mathrm{Bi}_{2} \mathrm{Se}_{3}$ and $\mathrm{Bi}_{2} \mathrm{Te}_{3}$ are topological insulators, while $\mathrm{Sb}_{2} \mathrm{Se}_{3}$ is not. That this guess was correct was verified by Zhang et al. (2009) by computating the topological invariant parities introduced by Fu et al. (2007) (which we discussed in the preceding section) at the four inequivalent time-reversal-invariant points of the Brillouin zone, $\Gamma(0,0,0), L(\pi, 0,0), F(\pi, \pi, 0)$, and $Z(\pi, \pi, \pi)$ and verifying that their product is negative for $\mathrm{Bi}_{2} \mathrm{Se}_{3}$ and $\mathrm{Bi}_{2} \mathrm{Te}_{3}$, but positive for $\mathrm{Sb}_{2} \mathrm{Se}_{3}$.

We can give a simpler description by using a Wilson-fermion lattice Hamiltonian (which we have already used in the discussion of the 2D quantum spin Hall effect) on a 3D cubic lattice of the form (with cubic symmetry for simplicity)

$$
\begin{equation*}
H=\sin \vec{p} \cdot \vec{\alpha}+M(\vec{p}) \beta \tag{16.96}
\end{equation*}
$$

where $M(\vec{p})=M+\cos p_{x}+\cos p_{y}+\cos p_{z}-3$. This simpler Hamiltonian has the same qualitative behavior and has the same time-reversal-invariant points as the one derived from band-structure calculations. Thus, e.g. at the $\Gamma$ point, $\vec{p}=$ $(0,0,0)$, if the Dirac mass $M>0$ the positive-energy states have + parity and the
negative-energy states have - parity. For $M<0$ the order of the states is reversed. This construction shows that the $3 \mathrm{D} \mathbb{Z}_{2}$ topological insulators are a generalization of the 2D quantum spin Hall effect.

It is straightforward to compute the $\mathbb{Z}_{2}$ topological invariants for the Wilsonfermion model. The parities at the eight invariant points are $(k=1,2,3)$

$$
\begin{align*}
\delta(0,0,0) & =-\operatorname{sgn}(M) \\
\delta(\pi, 0,0)=\delta(0, \pi, 0)=\delta(0,0, \pi) & =-\operatorname{sgn}(M-2)  \tag{16.97}\\
\delta(\pi, \pi, 0)=\delta(0, \pi, \pi)=\delta(\pi, 0, \pi) & =-\operatorname{sgn}(M-4) \\
\delta(\pi, \pi, \pi) & =-\operatorname{sgn}(M-6)
\end{align*}
$$

and the invariants are

$$
\begin{align*}
& (-1)^{v_{0}}=\operatorname{sgn}(M) \operatorname{sgn}(M-2) \operatorname{sgn}(M-4) \operatorname{sgn}(M-6)  \tag{16.98}\\
& (-1)^{v_{k}}=\operatorname{sgn}(M-2) \operatorname{sgn}(M-6) \tag{16.99}
\end{align*}
$$

from which we find that this model describes a strong topological insulator for $0<M<2$ (with $\mathbb{Z}_{2}$ invariants $\nu_{0}=1(\bmod 2)$ and $\left(\nu_{1}, \nu_{2}, \nu_{3}\right)=(0,0,0)$ $(\bmod 2))$ and $2<M<4\left(\right.$ with $\mathbb{Z}_{2}$ invariants $\nu_{0}=1(\bmod 2)$ and $\left(\nu_{1}, \nu_{2}, \nu_{3}\right)=$ $(1,1,1)(\bmod 2)$ ), a weak topological insulator for $2<M<4$ (with $\mathbb{Z}_{2}$ invariants $v_{0}=0(\bmod 2)$ and $\left.\left(v_{1}, v_{2}, v_{3}\right)=(1,1,1)(\bmod 2)\right)$, and a trivial insulator (with $\mathbb{Z}_{2}$ invariants $\nu_{0}=0(\bmod 2)$ and $\left.\left(v_{1}, \nu_{2}, \nu_{3}\right)=(0,0,0)(\bmod 2)\right)$ for the other regimes.

It is interesting and useful to write the free Dirac field theory of this model. Thus, following the standard Wilson construction at each lattice site $\vec{r}$ of the cubic lattice, and hence at every momentum $\vec{p}$ of the cubic Brillouin zone, we introduce a set of four component fermions, $\psi_{\alpha}(\vec{r})$, with $\alpha=1, \ldots, 4$. Here too, the two upper (lower) components represent the spin $\uparrow$ and $\downarrow$ components of the fermion. However the parities of the valence-band (negative-energy) and conduction-band (positive-energy) states may be different near the $\Gamma$ point and near the corners of the Brillouin zone.

The Hamiltonian of (free) Wilson fermions on a cubic lattice is

$$
\begin{equation*}
H=\int_{\mathrm{BZ}} \frac{d^{3} p}{(2 \pi)^{3}} \sum_{\alpha, \beta} \psi_{\alpha}^{\dagger}(\vec{p})(\sin \vec{p} \cdot \vec{\alpha}+M(\vec{p}) \beta)_{\alpha \beta} \psi_{\beta}(\vec{p}) \tag{16.100}
\end{equation*}
$$

We recall that the covariant definition of the Dirac gamma matrices is

$$
\begin{equation*}
\gamma_{0}=\beta, \quad \gamma^{i}=\beta \alpha^{i}, \quad \gamma_{5}=i \gamma_{0} \gamma_{1} \gamma_{2} \gamma_{3} \tag{16.101}
\end{equation*}
$$

and that they obey the covariant Dirac algebra

$$
\begin{equation*}
\left\{\gamma_{\mu}, \gamma_{\nu}\right\}=2 g_{\mu \nu} \mathcal{I}, \quad\left\{\gamma_{5}, \gamma_{\mu}\right\}=0 \tag{16.102}
\end{equation*}
$$

where $g_{\mu \nu}=\operatorname{diag}(1,-1,-1,-1)$ is the (Bjorken and Drell) Minkowski metric in $(3+1)$ dimensions.

We now observe that the one-particle Dirac Hamiltonian $H$ of Eq. (16.96) (and Eq. (16.95)) (not to be confused with the Hamiltonian of the field theory, Eq. (16.100)) does not involve the Dirac matrix $\gamma_{5}$. Hence $\gamma_{5}$ anti-commutes with the one-particle Dirac Hamiltonian, $\left\{\gamma_{5}, H\right\}=0$. If $u_{\alpha}^{ \pm}(\vec{p}, \sigma)$ (with $\sigma=\uparrow, \downarrow$ ) are the four linearly independent spinors with energies $E_{ \pm}= \pm \sqrt{\sin ^{2} \vec{p}+M(\vec{p})^{2}}$, it is easy to see that the spinors $\gamma_{5} u^{ \pm}(\vec{p}, \sigma)$ have energies $\mp E(\vec{p}, \sigma)$. In other terms, we conclude that $\gamma_{5} u^{ \pm}(\vec{p}, \sigma)=u^{\mp}(\vec{p}, \sigma)$, since they have the same spin projection. Thus, $\gamma_{5}$ maps spinors with positive energy to spinors with negative energy (and vice versa), and hence it also maps spinors with opposite parities into each other.

Wilson introduced the discrete version of Dirac fermions as a regularization of the continuum field theory. From that perspective, only the region of momentum space near $\vec{p}=0$ is physically relevant. In this regime one simply approximates the dispersion by setting $\sin \vec{p} \cdot \vec{\alpha} \simeq \vec{p} \cdot \vec{\alpha}$. The Hamiltonian of the continuum free Dirac theory is

$$
\begin{equation*}
H=\int d^{3} x \psi_{\alpha}^{\dagger}(\vec{p})(\vec{p} \cdot \vec{\alpha}+M \beta) \tag{16.103}
\end{equation*}
$$

and its Lagrangian density has the Lorentz-invariant form

$$
\begin{equation*}
\mathcal{L}=\bar{\psi}(x)\left(i \gamma^{\mu} \partial_{\mu}-M\right) \psi(x) \tag{16.104}
\end{equation*}
$$

where we dropped the Dirac indices and, as usual, $\bar{\psi}=\psi^{\dagger} \gamma_{0}$. In the massless limit, $M=0$, the Dirac Lagrangian is invariant under global continuous chiral transformations,

$$
\begin{equation*}
\psi(x) \rightarrow e^{i \theta \gamma_{5}} \psi(x), \quad \bar{\psi}(x) \rightarrow \bar{\psi}(x) e^{i \theta \gamma_{5}} \tag{16.105}
\end{equation*}
$$

where $0 \leq \theta<2 \pi$.
The Dirac theory admits two types of mass terms. One is the $\bar{\psi} \psi$ operator we already have. The other possible mass term is $i \bar{\psi} \gamma_{5} \psi$. At the level of the oneparticle Dirac Hamiltonian, the $\gamma_{5}$ mass term enters with the matrix $\Gamma_{5}=i \gamma_{0} \gamma_{5}$ (see Eq. (16.90)). If both mass terms are present, charge-conjugation symmetry $C$ is broken and so is parity $P$. Hence $C P$ is broken, which is equivalent to breaking time-reversal invariance, $T$. The global continuous chiral symmetry is broken explicitly by both mass terms, which transform as

$$
\binom{\bar{\psi}(x) \psi(x)}{i \bar{\psi}(x) \gamma_{5} \psi(x)} \rightarrow\left(\begin{array}{cc}
\cos (2 \theta) & \sin (2 \theta)  \tag{16.106}\\
-\sin (2 \theta) & \cos (2 \theta)
\end{array}\right)\binom{\bar{\psi}(x) \psi(x)}{i \bar{\psi}(x) \gamma_{5} \psi(x)}
$$

This transformation has the same form as the one we used in Section 6.3 to represent a translation of a charge-density wave in $(1+1)$ dimensions.

The lattice Hamiltonian, Eq. (16.100), has a broken chiral symmetry even if we fine-tune $\lim _{\vec{p} \rightarrow 0} M(\vec{p})=0$. With this choice there are terms that break the continuous chiral symmetry, but which vanish as $\vec{p} \rightarrow 0$. These operators are irrelevant. However the "doublers," i.e. the states near $(\pi, 0,0)$ and so on, have $O(1)$ mass terms that break the global continuous chiral symmetry. In fact the signs of the operator $\langle\bar{\psi} \psi\rangle$ for the fermion "doublers" are needed, as we saw, in order to determine the $\mathbb{Z}_{2}$ topological class.

### 16.7 Solitons in polyacetylene

In Section 15.1 we discussed the theory of the edge states of the 2DEG in a uniform perpendicular magnetic field in the regime in which the integer quantum Hall effect is observed. There we saw that, due to the incompressibility of the bulk 2DEG in an integer (and fractional) quantum Hall state, its only gapless excitations are edge states (residing, naturally, at the boundary of the 2DEG!). Moreover, due to the explicitly broken time-reversal invariance caused by the external magnetic field, these edge states are chiral and hence propagate in just one direction. We will now see that a similar set of states generically exists in free-fermion systems that display the quantum anomalous Hall effect and the quantum spin Hall effect.

We will also see how this theory explains the chiral surface states of $3 \mathrm{D} \mathbb{Z}_{2}$ topological insulators. The basic conceptual explanation of all these phenomena is based on the concept of anomalies in the Dirac field theory, which has different manifestations in different dimensions. The oldest application of these ideas was in $(1+1)$ dimensions, where it led to a theory of fractional quantum numbers of solitons (Jackiw and Rebbi, 1976; Goldstone and Wilczek, 1981), and was famously applied in a condensed matter context to the theory of solitons in polyacetylene (Su et al., 1979; Jackiw and Schrieffer, 1981; Heeger et al., 1988). The extension of these ideas to higher dimensions is known as the Callan-Harvey effect in fermionic domain walls (Callan and Harvey, 1985), which will also play a key role in our discussion of edge states in topological insulators (with or without time-reversal symmetry).

Domain walls in 1D systems have been studied extensively in the theory of soliton states both in quantum field theory (Dashen et al., 1975; Jackiw and Rebbi, 1976; Rajaraman, 1985) and in condensed matter physics, mostly in the context of 1D conductors such as polyacetylene (Su et al., 1979; Jackiw and Schrieffer, 1981; Heeger et al., 1988). Polyacetylene is a polymer chain of carbon and hydrogen atoms with one hydrogen per carbon. This is denoted as $(\mathrm{CH})_{n}$. In the stable trans configuration, the chain has a zig-zag pattern with the carbon atoms at the vertices and the hydrogen atoms being placed in a staggered fashion to the right and to the left of the carbon atoms. As in the example of graphene, only the electrons in the
$\pi$ orbitals of the carbon atoms are effectively mobile, and the other $\sigma$ bands are occupied and separated by a large energy gap.

Su , Schrieffer, and Heeger (SSH) proposed the following simple 1D lattice model for a single trans polyacetylene chain (Su et al., 1979). Let the integer $n$ denote the position of the carbon atoms along the chain. If we denote by $\psi_{n, \sigma}^{\dagger}$ the fermion operator that creates a $\pi$ electron at site $n$ with spin projection $\sigma=\uparrow, \downarrow$ and by $u_{n}$ the displacement of the CH unit at site $n$ (relative to the equilibrium position), the SSH Hamiltonian for a polyacetylene chain with $N$ sites is

$$
\begin{align*}
H= & -\sum_{n, \sigma}\left(t_{n, n+1} \psi_{n, \sigma}^{\dagger} \psi_{n+1, \sigma}+\text { h.c. }\right)+\sum_{n} \frac{D}{2}\left(u_{n+1}-u_{n}\right)^{2} \\
& +\sum_{n} \frac{P_{n}^{2}}{2 M} \tag{16.107}
\end{align*}
$$

where $P_{n}$ is the momentum of the CH group labeled by $n$, and $M$ and $D$ are the mass of the CH unit and the elastic constant of the chain (due to the $\sigma$ bonding). As usual, the displacements $u_{n}$ and the momenta $P_{n}$ obey equal-time commutation relations, $\left[u_{n}, P_{n^{\prime}}\right]=i \delta_{n, n^{\prime}}$, and the fermion creation and annihilation operators obey the standard anticommutator algebra, $\left\{\psi_{n, \sigma}, \psi_{n^{\prime}, \sigma^{\prime}}^{\dagger}\right\}=\delta_{n, n^{\prime}} \delta_{\sigma, \sigma^{\prime}}$. The position-dependent hopping term reflects the electron-phonon coupling between the electron hopping and the local displacements. For small relative distortions, $\left|u_{n+1}-u_{n}\right| \ll a$ (where $a$ is the lattice spacing), it can be written as

$$
\begin{equation*}
t_{n, n+1}=t-\alpha\left(u_{n+1}-u_{n}\right) \tag{16.108}
\end{equation*}
$$

where $\alpha$ is the electron-phonon-coupling constant.
Undoped polyacetylene has one $\pi$ electron for each CH group. Hence, the chain is at half-filling and the Fermi momenta are at $p_{\mathrm{F}}= \pm \pi / 2$ (in units in which the lattice spacing is $a=1$ ). As is well known, polyacetylene is the prototype of the systems that exhibit the Peierls instability, by which means it lowers its groundstate energy through a lattice distortion that breaks the symmetry of translations by one lattice spacing. Since polyacetylene is half-filled, it can lower the energy by dimerizing the chain, i.e. by the development of an expectation value of the displacement field $\left\langle u_{n}\right\rangle=(-1)^{n} \Delta$ with a staggered pattern. In other words, the effective hopping amplitude has a dimerized pattern, $t_{n, n+1}=t+(-1)^{n} 2 \alpha \Delta$. Since there are two possible patterns (that differ by a rigid displacement of the state by one lattice spacing) this ground state is doubly degenerate. In this ground state the chain looks like a sequence of "single" and "double" bonds (as it is commonly depicted in chemistry) or, in the physicist's language, it is a period-2 commensurate charge-density wave on the bonds of the chain. In other terms, the $\mathbb{Z}_{2}$
symmetry of rigid displacements of the dimerization pattern in trans polyacetylene is spontaneously broken.

We will not present here the detailed theory of polyacetylene, which can be found in excellent reviews (Heeger et al., 1988). We will rather write down an effective-field theory that bears out the physics we just described, which is accurate in the weak-coupling regime but also gives a correct qualitative description of the physics at substantial values of the coupling constant. We will follow the same approach as we used in Chapters 5 and 6 and expand the Fermi fields in fast and slow components (here $x=n a$ )

$$
\begin{equation*}
\psi_{n, \sigma}=e^{i \pi n / 2} \psi_{\mathrm{R}, \sigma}(x)+e^{-i \pi n / 2} \psi_{\mathrm{L}, \sigma}(x) \tag{16.109}
\end{equation*}
$$

where we set $p_{\mathrm{F}}=\pi / 2$. We will use the standard Dirac notation and represent the right- and left-moving fermions by a Dirac doublet, $\psi_{a, \sigma}(x)$ (with $a=\mathrm{R}, \mathrm{L}$ ). For later convenience we will work in the Dirac basis (rather than with chiral components) of the fermions,

$$
\begin{align*}
\psi_{1, \sigma} & =\frac{1}{\sqrt{2}}\left(-\psi_{\mathrm{R}, \sigma}+\psi_{\mathrm{L}, \sigma}\right)  \tag{16.110}\\
\psi_{2, \sigma} & =\frac{1}{\sqrt{2}}\left(\psi_{\mathrm{R}, \sigma}+\psi_{\mathrm{L}, \sigma}\right)
\end{align*}
$$

and denote the doublet Fermi field by $\psi_{a, \sigma}(x)$, with $a=1,2$.
The displacement fields admit an expansion of the form

$$
\begin{equation*}
u_{n}=u_{0}(x)+(-1)^{n} \Delta(x) \tag{16.111}
\end{equation*}
$$

and similarly for the canonical momenta. Here $u_{0}(x)$ represents the smooth long-wavelength fluctuations of "acoustic" phonons, while $\Delta(x)$ represents the fluctuations of "optical" phonons with wave vector $Q=2 p_{\mathrm{F}}=\pi$. Much as in the weak-coupling theory of antiferromagnetism of Chapter 3, the 1D chain at halffilling obeys a nesting condition and is unstable with respect to a Peierls distortion, a backscattering process that is here due to the exchange of phonons with wave vector $Q=2 p_{\mathrm{F}}=\pi$ and hence represented by the fluctuations $\Delta(x)$. In what follows we will focus on the coupling of the fermions to the dimerization field $\Delta(x)$ and neglect the "acoustic" component $u_{0}$ since it essentially decouples.

The Hamiltonian density of the effective continuum theory is (summation over repeated indices is understood) (Fradkin and Hirsch, 1983)

$$
\begin{align*}
\mathcal{H}= & \psi_{a, \sigma}^{\dagger}(x)\left(-i v_{\mathrm{F}} \sigma_{1} \partial_{x}\right) \psi_{a, \sigma}(x)+g \Delta(x) \bar{\psi}_{\sigma}(x) \psi_{\sigma}(x)+\frac{1}{8 M a_{0}^{2}} \Pi^{2}(x) \\
& +\frac{1}{2} \Delta^{2}(x) \tag{16.112}
\end{align*}
$$

where $\Pi(x)$ is the canonical momentum for $\Delta(x)$, and obeys $[\Delta(x), \Pi(y)]=$ $i \delta(x-y)$. This effective Hamiltonian is invariant under the discrete chiral symmetry $\psi \rightarrow \gamma_{5} \psi$ and $\Delta \rightarrow-\Delta$, which on the lattice is a shift by one lattice constant.

In Eq. (16.112) we introduced the effective coupling constant $g \sim \alpha / \sqrt{D t} . M$ is the mass of the CH group and $a_{0}$ is the lattice spacing, $t$ is the hopping amplitude, and the Fermi velocity is $v_{\mathrm{F}}=2 t$. We have used the $2 \times 2$ Dirac matrices in the Dirac basis, $\alpha=\gamma_{5}=\sigma_{1}, \gamma_{0}=\sigma_{3}, \gamma_{1}=i \sigma_{2}$. In this notation the dimerization field $\Delta(x)$ couples to the fermion bilinear $\bar{\psi}(x) \psi(x)$. In the chiral basis, the fermion bilinear is $\bar{\psi}(x) \psi(x)=i \psi_{\mathrm{R}, \sigma}^{\dagger} \psi_{\mathrm{L}, \sigma}+$ h.c. On changing to the Dirac basis (after a subsequent chiral rotation by $\theta=\pi / 4$ ) the fermion bilinear becomes $\bar{\psi} \psi=$ $\psi_{1, \sigma}^{\dagger} \psi_{2, \sigma}+$ h.c.

Two limits of the Hamiltonian of Eq. (16.112) are worth considering. One is the regime in which the mass $M$ of the CH group is taken to be so large that the quantum fluctuations of the dimerization field $\Delta(x)$, i.e. its kinetic-energy term, can be neglected. In this adiabatic limit the dimerization field becomes classical. The ground state of the system is found by finding the value $\Delta(x)=\Delta_{0}$ which minimizes the total energy density $\mathcal{E}$,

$$
\begin{equation*}
\mathcal{E}=\frac{\Delta_{0}^{2}}{2}-\int_{-\Lambda}^{\Lambda} \frac{d p}{2 \pi} \sqrt{p^{2} v_{\mathrm{F}}^{2}+g^{2} \Delta_{0}^{2}} \tag{16.113}
\end{equation*}
$$

where $\Lambda \simeq \pi / a_{0}$ is the momentum cutoff. By requiring that $\Delta_{0}$ be a local extremum of the energy density $\mathcal{E}$ we find the gap equation

$$
\begin{equation*}
\frac{\partial \mathcal{E}}{\partial \Delta_{0}}=0 \Rightarrow \Delta_{0}=\int_{-\Lambda}^{\Lambda} \frac{d p}{2 \pi} \frac{g^{2} \Delta_{0}}{\sqrt{p^{2} v_{\mathrm{F}}^{2}+g^{2} \Delta_{0}^{2}}} \tag{16.114}
\end{equation*}
$$

which has the non-trivial solution

$$
\begin{equation*}
\Delta_{0}=\frac{2 \Lambda v_{\mathrm{F}}}{g} \exp \left(-\frac{\pi v_{\mathrm{F}}}{g^{2}}\right) \tag{16.115}
\end{equation*}
$$

which implies that there is a dynamically generated exponentially small gap in the fermionic spectrum $\sqrt{2} g \Delta_{0}=2 \sqrt{2} \Lambda v_{\mathrm{F}} \exp \left(-\pi v_{\mathrm{F}} / g^{2}\right)$.

The opposite limit of interest is the regime in which the mass of the CH group is taken to be very small, $M \rightarrow 0$. In this regime the quantum fluctuations of the dimerization field are as large as they can be. In fact, in this limit the dimerization field is not only not classical but also can be integrated out (in the path integral). The effective Lagrangian density of the fermions is found to be (Fradkin and Hirsch, 1983) (on setting $v_{\mathrm{F}}=1$ )

$$
\begin{equation*}
\mathcal{L}=\bar{\psi}_{\sigma}(x) i \gamma^{\mu} \partial_{\mu} \psi_{\sigma}(x)+g^{2}\left(\bar{\psi}_{\sigma}(x) \psi_{\sigma}(x)\right)^{2} \tag{16.116}
\end{equation*}
$$

which is the Gross-Neveu model which we encountered in Chapter 5. It turns out that the corrections for taking the $M \rightarrow 0$ limit are irrelevant operators. Nevertheless, the RG beta function of the Gross-Neveu model is

$$
\begin{equation*}
\beta(g)=a_{0} \frac{\partial g}{\partial a_{0}}=\frac{n-1}{\pi} g^{3}+\cdots \tag{16.117}
\end{equation*}
$$

where $n=2$ is the number of spin components. This means that this system is asymptotically free, and that the effective coupling constant grows at low energies, flowing to a strong-coupling fixed point with a spontaneously broken discrete chiral symmetry (i.e. dimerization) and a dynamically generated energy gap (Gross and Neveu, 1974). From semi-classical analyses it is known that, in addition to massive fermions, the Gross-Neveu model has massive solitons. Notice, however, that the spinless case, $n=1$, is different. It turns out that in this case the fermions remain massless until some critical value of the coupling constant at which there is a (Kosterlitz-Thouless) quantum phase transition to massive phase.

We will now discuss the solitons that appear in polyacetylene. The domain walls in polyacetylene are topological solitons since they interpolate between two nontrivial boundary conditions of the manifold of broken-symmetry ground states. In this sense they are close relatives of the skyrmions we discussed elsewhere in this book and of the solitons in sine-Gordon theory. Since the adiabatic limit and the ultra-quantum limit lead to essentially the same physics, we will consider this problem in the simpler adiabatic regime (Su et al., 1979; Jackiw and Schrieffer, 1981). The soliton can be easily constructed in a lattice model. Here we will use a continuum description that is simpler to apply and is accurate if the energy gap is small compared with the Fermi energy.

The soliton can be regarded as a domain wall between two different condensates of the dimerization field $\Delta(x)= \pm \Delta_{0}$. For instance, the soliton may take a profile of the form $\Delta(x)=\Delta_{0} \tanh \left[\left(x-x_{0}\right) / \xi\right]$, where $\xi$ is the correlation length (typically the inverse of the mass gap) and plays the role here of the size of the soliton, while $x_{0}$ is the soliton coordinate. In our discussion we will take $x_{0}$ as being fixed, $x_{0}=0$. However, a soliton is an actual quantum eigenstate of the quantum field theory. Thus the soliton is a topological excitation that has a momentum and an energy. A full computation of these properties in the semi-classical regime is beyond the scope of this book. A thorough discussion can be found in the classic papers of Dashen, Hasslacher, and Neveu (Dashen et al., 1975) or in Rajaraman's book (Rajaraman, 1985).

In what follows we will focus only on the behavior of the single-particle states of the fermionic flavor (or valley) whose mass term is changing sign at $x=0$. Let $H$
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-728.jpg?height=551&width=638&top_left_y=190&top_left_x=536)

Figure 16.5 A soliton in a 1D system is a domain wall that interpolates between two ground states with opposite expectation values of the fermion bilinear $\langle\bar{\psi} \psi\rangle= \pm m$, where $m$ is the dynamically generated mass of the Dirac fermion. In polyacetylene the soliton interpolates between the two ground states of the commensurate (period-2) charge-density wave (see the text).
be the one-particle (Dirac) Hamiltonian for this two-component Dirac fermion with a position-dependent mass term in one space dimension and $m(x)=\sqrt{2} g \Delta(x)$,

$$
H=-i \sigma_{1} \partial_{x}+m(x) \sigma_{3}=\left(\begin{array}{cc}
m(x) & -i \partial_{x}  \tag{16.118}\\
-i \partial_{x} & -m(x)
\end{array}\right)
$$

which is hermitian and real. We will take $m(x)$ to have qualitatively the behavior shown in Fig. 16.5.

It is straightforward to show that the spectrum of the one-particle Hamiltonian $H$ of Eq. (16.118) is particle-hole-symmetric. What is more interesting (and relevant to us) is that $H$ has a normalizable zero mode, a one-particle state with exactly zero energy and wave function $\psi_{0}(x)$,

$$
\begin{equation*}
\psi_{0}(x)=\frac{1}{\sqrt{2}}\binom{-i}{1} \exp \left(-\operatorname{sgn}(m) \int_{0}^{x} d x^{\prime} m\left(x^{\prime}\right)\right) \tag{16.119}
\end{equation*}
$$

In addition, there is a non-normalizable solution, also with $E=0$, which is not part of the spectrum. Another way to think about this problem is to imagine that a soliton-anti-soliton pair is created in some region of space away from the boundaries. The two normalizable zero modes of the isolated solitons now mix, their degeneracy is lifted, and they no longer have zero energy. It is easy to see that, as the two solitons are slowly separated, the zero modes are recovered. It is also easy to see that the un-normalizable solution at the soliton can be regarded as the normalizable solution of the anti-soliton. In what follows we will assume that the domain walls are always sufficiently far apart for their zero modes to remain unmixed.

Likewise, if we add an electron to a polyacetylene chain, it becomes fractionalized into two solitons, each carrying half of the charge of the electron.

In addition to this zero mode the Dirac Hamiltonian has a continuous spectrum of positive-energy states with eigenspinors $u_{p}(x)$ and of negative-energy states with eigenspinors $v_{p}(x)$. (We are neglecting the spin label of the electrons of polyacetylene.) Charge-conjugation invariance (or, rather, $C P$ invariance) implies that for each positive-energy state with momentum $p$ and energy $E(p)$ there is a negativeenergy state with momentum $p$ and energy $-E$. However, the existence of the zero mode changes the completeness relation of the eigenstates to

$$
\begin{equation*}
\int \frac{d p}{2 \pi}\left[u_{p}^{*}(x) u_{p}(y)+v_{p}^{*}(x) v_{p}(y)\right]+\psi_{0}^{*}(x) \psi_{0}(y)=\delta(x-y) \tag{16.120}
\end{equation*}
$$

The existence of the zero mode also changes the mode expansion of the Dirac field. In the standard notation of the Dirac theory the mode expansion is (Jackiw and Rebbi, 1976)

$$
\begin{equation*}
\psi=a \psi_{0}+\sum_{p}\left(b_{p} u_{p}+d_{p}^{\dagger} v_{p}^{*}\right) \tag{16.121}
\end{equation*}
$$

where $b_{p}$ and $d_{p}$ are fermion-annihilation operators, and $a$ is a fermion-annihilation operator for the zero mode. Since the zero mode is a discrete state, the operator $a$ and its adjoint satisfy the standard algebra, $\{a, a\}=\left\{a^{\dagger}, a^{\dagger}\right\}=0$ and $\left\{a, a^{\dagger}\right\}=1$.

We will now compute the charge of the soliton using the method of Jackiw and Rebbi (1976). The charge in the presence of the soliton has to be computed relative to the charge of the uniform ground state which has been normal-ordered to be zero. The normal-ordered charge-density operator is $j_{0}(x)=\frac{1}{2}\left(\psi^{\dagger}(x) \psi(x)-\right.$ $\psi(x) \psi^{\dagger}(x)$ ) (where we have not written down the Dirac indices). The charge of the soliton is the (integral of the) expectation value of the local charge density $j_{0}(x)$ in the state with one soliton, which we will take to be at rest. Let us denote by $\pm$ the soliton and anti-soliton states, where the sign is the sign of the mass at $+\infty$, i.e. the sign of the asymptotic value of $\Delta_{0}(x)$ at $x \rightarrow+\infty$. The total (integrated) soliton charge (in units of the electron charge $-e$ ) is

$$
\begin{align*}
Q_{ \pm} & =-\frac{e}{2}\left\{ \pm \int d x \psi_{0}(x)^{*} \psi_{0}(x)+\int d x \int \frac{d p}{2 \pi}\left[v_{p}^{*}(x) v_{p}(x)-u_{p}^{*}(x) u_{p}(x)\right]\right\} \\
& =\mp \frac{e}{2} \tag{16.122}
\end{align*}
$$

where we have used the completeness relation and the fact that due to charge conjugation symmetry the contributions of the continuum states cancel out exactly, i.e. they have equal and opposite charges. Hence, a soliton has charge $Q_{+}=-e / 2$ and an anti-soliton has charge $Q_{-}=+e / 2$. Notice that charge is not a label but a quantum number of a state. We have encountered this concept in other places
in this book, e.g. in the theory of the fractional quantum Hall states, but charge fractionalization was first discussed in the problem we are now looking at.

The fractional charge result of Eq. (16.122) can be expressed in terms of the spectral asymmetry of the Dirac operator (Jackiw and Schrieffer, 1981). If we denote by $\rho_{0}(E)$ and $\rho_{\mathrm{S}}(E)$ the density of single-particle states in the absence and in the presence of the soliton, the change in the charge of the ground state can be written as

$$
\begin{equation*}
Q=\int_{-\infty}^{0^{-}} d E\left(\rho_{\mathrm{S}}(E)-\rho_{0}(E)\right) \tag{16.123}
\end{equation*}
$$

which, using completeness, becomes

$$
\begin{equation*}
Q=-\frac{1}{2} \int_{0}^{\infty}\left(\rho_{\mathrm{S}}(E)-\rho_{\mathrm{S}}(-E)\right) d E \tag{16.124}
\end{equation*}
$$

Then, as before, the symmetry of the spectrum implies that only the zero mode contributes to the spectral asymmetry, Eq. (16.124), and hence to the charge, Eq. (16.122).

An alternative way to think about fractional quantum numbers is due to Goldstone and Wilczek (1981) and is based on the use of (in this case) the chiral anomaly. Goldstone and Wilczek considered a theory of massless Dirac fermions in $(1+1)$ dimensions coupled to two scalar fields, $\phi_{1}$ and $\phi_{2}$, with Lagrangian (with the speed $v_{\mathrm{F}}=1$ )

$$
\begin{equation*}
\mathcal{L}=\bar{\psi} i \gamma^{\mu} \partial_{\mu} \psi+g \bar{\psi}\left(\phi_{1}+i \gamma_{5} \phi_{2}\right) \psi \tag{16.125}
\end{equation*}
$$

Notice that the one-particle (Dirac) Hamiltonian now becomes

$$
\begin{equation*}
H=i \sigma_{1} \partial_{x}+g \phi_{1} \sigma_{3}+g \phi_{2} \sigma_{2} \tag{16.126}
\end{equation*}
$$

which is no longer a real symmetric matrix but is complex and hermitian. Thus, in the presence of both mass terms $C P$ (or, equivalently, time-reversal) invariance is broken. We will take $\phi_{1}$ and $\phi_{2}$ to be slowly varying and in general everywhere nonzero. For polyacetylene, in the notation we have been using, $\phi_{1}$ is our dimerization field (a charge-density wave on the bonds) and $\phi_{2}$ is a charge-density wave on the sites. By setting $\phi_{1}=|\phi| \cos \theta$ and $\phi_{2}=|\phi| \sin \theta$ we can write the Lagrangian in the suggestive form

$$
\begin{equation*}
\mathcal{L}=\bar{\psi} i \gamma^{\mu} \partial_{\mu} \psi+g|\phi| \bar{\psi} e^{i \nu_{5} \theta} \psi \tag{16.127}
\end{equation*}
$$

Let us now imagine that we start with some constant value of $\phi_{1}$ and $\phi_{2}$, which opens a mass gap in the fermion spectrum of $g \sqrt{\phi_{1}^{2}+\phi_{2}^{2}}$, and that we make an infinitesimal space- and time-dependent smooth local change in the values of both
fields. Goldstone and Wilczek (1981) computed the current $j_{\mu}$ which such a smooth adiabatic change induces, and found the result ( $a, b=1,2$ )

$$
\begin{equation*}
\left\langle j_{\mu}\right\rangle=\frac{1}{2 \pi} \epsilon_{\mu \nu} \epsilon_{a b} \frac{\phi_{a} \partial^{\nu} \phi_{b}}{|\phi|^{2}}=\frac{1}{2 \pi} \epsilon_{\mu \nu} \partial^{\nu} \theta \tag{16.128}
\end{equation*}
$$

where $|\phi|^{2}=\phi_{1}^{2}+\phi_{2}^{2}$ and $\theta(x)=\tan ^{-1}\left(\phi_{2} / \phi_{1}\right)$. Notice that the induced current is locally conserved, $\partial_{\mu}\left\langle j_{\mu}\right\rangle=0$, as required by charge conservation and gauge invariance.

Let us suppose now that we begin with the system in the sector without a soliton, say with $\phi_{1}=$ constant and $\phi_{2}=0$, and that, through a sequence of slow changes, after a long time we arrive at a system with one soliton. To compute the charge of the soliton we can now just integrate the induced charge density $\left\langle j_{0}\right\rangle$,

$$
\begin{equation*}
Q=\int_{-\infty}^{+\infty} d x_{1}\left\langle j_{0}\left(x_{1}\right)\right\rangle=\frac{1}{2 \pi}(\theta(+\infty)-\theta(-\infty)) \equiv \frac{\Delta \theta}{2 \pi} \tag{16.129}
\end{equation*}
$$

Let us now fix the fermion mass to be $m=\phi_{1} / g$ and represent the soliton by a twist in which $\phi_{2}$ slowly changes from $\phi_{2}(-\infty)=-\phi_{0}$ to $\phi_{2}(+\infty)=+\phi_{0}$. The charge now is

$$
\begin{equation*}
Q=\frac{1}{\pi} \tan ^{-1}\left(\frac{g \phi_{0}}{m}\right) \tag{16.130}
\end{equation*}
$$

If we now let $m \rightarrow 0$ (which restores time-reversal invariance) we find the JackiwRebbi result that the charge is $Q=1 / 2$ (in units of the electron charge $-e$ ). Notice, however, that if time-reversal (or $C P$ ) invariance is broken, the Goldstone-Wilczek formula, Eq. (16.129), allows any fractional value of the charge, depending on the value of the twist of the chiral angle $\theta$. We will see shortly below that this result can be extended to higher dimensions.

Finally, let us note that in the special case of $(1+1)$ dimensions we can reach the same conclusion using abelian bosonization (which was discussed in Chapters 5 and 6). In terms of the real scalar field $\varphi$ the Lagrangian of Eq. (16.127) takes the bosonized form

$$
\begin{equation*}
\mathcal{L}=\frac{1}{2}\left(\partial_{\mu} \varphi\right)^{2}+\frac{g|\phi|}{2 \pi a_{0}} \cos (\sqrt{4 \pi} \varphi-\theta) \tag{16.131}
\end{equation*}
$$

Thus, in the presence of a non-trivial chiral twist $\theta\left(x_{1}\right)$, the Bose field takes the value $\varphi\left(x_{1}\right)=\theta\left(x_{1}\right) / \sqrt{4 \pi}$. Using the bosonization identity for the current, cf. Eq. (5.253), we find

$$
\begin{equation*}
j_{\mu}=\frac{1}{\sqrt{\pi}} \epsilon_{\mu \nu} \partial^{\nu} \varphi=\frac{1}{2 \pi} \epsilon_{\mu \nu} \partial^{\nu} \theta \tag{16.132}
\end{equation*}
$$

which agrees with the Goldstone-Wilczek result, Eq. (16.128), which was derived using an adiabatic argument in the massive theory. This result leads again to the

Goldstone-Wilczek formula for the fractional charge in terms of the chiral twist. In some sense this result is not surprising since bosonization is a consequence of the chiral anomaly in the massless theory.

### 16.8 Edge states in the quantum anomalous Hall effect

Let us now consider a 2 D system that on the $x>0$ right-hand half-plane is a topological insulator with a broken time-reversal symmetry (TRS) and displays the quantized anomalous Hall effect, while for the $x<0$ left-hand half-plane it is either a conventional insulator with an unbroken TRS or, more simply, vacuum. This domain wall will be taken to run parallel to the $y$ axis. While this calculation can be done numerically quite efficiently, it is simpler, and conceptually more instructive, to use the effective-field theory of Dirac fermions in two space dimensions to analyze this problem. Indeed, in Section 16.3 .3 we saw that the quantum anomalous-Hall-state insulator can be represented by a system of two flavors of massive (two-component) Dirac fermions with the same sign of the mass, while the trivial insulator can also be represented as two flavors of massive Dirac fermions, but with mass terms with opposite signs. In this language, if we want to represent "vacuum" we will simply send the mass gap of the trivial insulator to infinity. For simplicity, we have represented the edge as a domain wall created by changing the sign of the mass $m_{1}$ of one of the Dirac flavors, which is a smooth monotonically increasing function $m(x)$ that varies only along the $x$ coordinate. The mass term of the other flavor, $m_{2}$, is kept fixed and positive.

We will see below that this procedure yields a set of chiral edge states residing at the interface between the two systems. Microscopically, we can picture a domain wall in Haldane's honeycomb model (for example) as being obtained by changing smoothly across the wall the strength of the site potential $\varepsilon$ relative to the next-nearest-neighbor hopping amplitude $t_{2}$ (see Eq. (16.35)). In this case, in general, both mass terms will vary with position but only one will change sign. Provided that the position dependence is sufficiently smooth, this will not lead to additional bound states (that is, aside from the edge states themselves). It should be stressed that this description of the trivial insulator does not affect the low-energy behavior of these edge states. At any rate the same results are found in numerical simulations that use a conventional description of the trivial insulator.

In two space dimensions the coupling of the two-component spinors to the domain wall is described by the one-particle Dirac Hamiltonian

$$
H=-i \sigma_{1} \partial_{x}-i \sigma_{2} \partial_{y}-m(x) \sigma_{3}=\left(\begin{array}{cc}
m(x) & -i \partial_{x}+\partial_{y}  \tag{16.133}\\
-i \partial_{x}+\partial_{y} & -m(x)
\end{array}\right)
$$

which is hermitian and complex. Since the domain wall is parallel to the $y$ axis and, hence, the mass term is a function of $x$ alone, the component $p_{y}$ of the momentum parallel to the wall is conserved. The one-particle states are thus plane waves along the $y$ direction. We can then take the two-component spinors to be of the form

$$
\begin{equation*}
\psi(x, y)=e^{i p_{y} y}\binom{u_{p_{y}}(x)}{v_{p_{y}}(x)} \tag{16.134}
\end{equation*}
$$

which we will require to be an eigenstate of the one-particle Dirac Hamiltonian, Eq. (16.133), with energy $E$.

We will now consider two cases. In the first case, shown in Fig. 16.6(a), the mass of the Dirac fermion $m(x)$ changes from being negative to the left of the wall, $m(x)<0$ for $x<0$, to being positive to the right of the wall, $m(x)>0$ for $x>0$. In this case the quantum anomalous Hall system is on the right half-plane. In the second case, shown in Fig. 16.6(b), the situation is reversed.

In addition to massive bulk states, it is straightforward to see that the states

$$
\begin{equation*}
\psi(x, y)=\frac{1}{\sqrt{2}} e^{i p_{y} y}\binom{-i}{1} \exp \left(-\operatorname{sgn}(m) \int_{0}^{x} m\left(x^{\prime}\right) d x^{\prime}\right) \tag{16.135}
\end{equation*}
$$

are eigenstates of the Hamiltonian of the Dirac equation with a domain wall, Eq. (16.133). Here we have set $m=\lim _{x \rightarrow \infty} m(x)$ to be the bulk value of the
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-733.jpg?height=638&width=1162&top_left_y=1289&top_left_x=269)

Figure 16.6 Chiral edge states propagating along the domain wall upwards (case (a)) and downwards (case (b)). In case (a) $x<0$ is an insulator with unbroken TRS and $x>0$ is a topological (quantum anomalous-Hall) insulator with broken TRS (see the text).
mass, far away from the domain wall. These states are normalizable eigenstates (along the $x$ direction) of the Dirac Hamiltonian with energy

$$
\begin{equation*}
E\left(p_{y}\right)=\operatorname{sgn}(m) v_{\mathrm{F}} p_{y} \tag{16.136}
\end{equation*}
$$

where we have restored the Fermi velocity. Just as in the case of polyacetylene, there are also non-normalizable states of this form, but with the sign of the exponent of the exponential reversed.

These results tell us that there are states inside the energy gap and that they have support only near the location of the domain wall (or physical edge of the system). The result that the energy-momentum relationship is strictly linear, Eq. (16.136), is exact for the continuum Dirac theory. For the lattice models there are (expected) corrections to the linear dispersion. In addition, at high energies, the edge modes merge with the bulk spectrum.

Using the same line of reasoning as that we used in the theory of the edge states of the integer quantum Hall fluids, we can now deduce that the effective Lagrangian for the chiral Dirac fermions of the 1D edge states bound to the wall for the quantum anomalous Hall state is

$$
\begin{equation*}
\mathcal{L}_{\text {edge }}=\psi(y, t) i\left(\partial_{t}-v_{\mathrm{F}} \operatorname{sgn}(m) \partial_{y}\right) \psi(y, t) \tag{16.137}
\end{equation*}
$$

where $\psi(y, t)$ is a chiral right (left)-moving Dirac fermion in one space dimension for $m>0(m<0)$. As we can see, this is identical to the theory of the chiral edge states for the $v=1$ integer quantum Hall state. Here we have neglected the spin degree of freedom which, if it were included, would lead to two branches of chiral Dirac fermions, one for each spin orientation.

The same line of reasoning can be applied to domain walls of the chiral spin liquid discussed in Chapter 10 and to a domain wall between two states with broken TRS (but with opposite signs). The domain wall will now have two chiral edge Dirac fermions in the case of the quantum anomalous Hall domain wall (obtained by flipping the sign of the flux $\phi$ in half of the system in a Haldane honeycomb model with $\varepsilon=0$ ), and four chiral Dirac edge modes for the case of the chiral spin liquid.

The chiral edge states of topological insulators, such as the quantum anomalous Hall systems we are discussing here, are robust for the same reason as that which explains why they are robust in the case of the integer quantum Hall states: being chiral, no backscattering processes can be induced by impurities, and hence they are immune to localization. Of course, this is not the case for the edge states of systems that do not break time-reversal invariance. In that case the edge states come with both chiralities, and backscattering processes are allowed and localization effects render these states insulating. This difference is completely natural since
there is no topological invariant associated with the insulators with an unbroken time-reversal invariance.

We see that there is a close analogy between the edge states of the quantum Hall effect, discussed in Section 15.1, and the quantum anomalous Hall effect. We can make the connection more apparent by computing the currents induced by an external electromagnetic field $A_{\mu}$ on both sides of the domain wall and on the domain wall itself. Let us begin by looking at the effective action of the gauge field. For the sake of definiteness we will consider the case shown in Fig. 16.6(a), which is a conventional insulator for $x<0$ and a quantum anomalous Hall insulator for $x>0$. Away from the wall the effective action is just the Chern-Simons action

$$
\begin{equation*}
S_{\mathrm{eff}}[A]=\frac{N_{+}-N_{-}}{4 \pi} \int d^{3} x \epsilon_{\mu \nu \lambda} A^{\mu} \partial^{\nu} A^{\lambda} \tag{16.138}
\end{equation*}
$$

where $N_{ \pm}$is the number of fermionic species with topological charge $\pm 1 / 2$. The only difference between the two regions is that the sign of the mass term of one species changes from positive for $x>0$ to negative for $x<0$ and hence $N_{+}=N_{-}$ for $x<0$, but $N_{+}=N_{-}+2$ for $x>0$. Hence, the effective action can be written as

$$
\begin{equation*}
S_{\mathrm{eff}}=\frac{2}{4 \pi} \int_{\Omega} d^{3} x \operatorname{sgn}\left(x_{1}\right) \int d^{3} x \epsilon_{\mu \nu \lambda} A^{\mu} \partial^{\nu} A^{\lambda} \tag{16.139}
\end{equation*}
$$

where $\Omega$ is the 3D space-time excluding the edge-state, namely the 2 D manifold spanned by the $x_{2}$ spatial axis and time $x_{0}$, in order to avoid the singularity of the sign function. However, it is easy to see that this action is not gauge-invariant. Indeed, under a gauge transformation $A_{\mu} \rightarrow A_{\mu}+\partial_{\mu} \Phi$ it changes by (here $\mu, \nu=$ 0,2 only)

$$
\begin{equation*}
S_{\mathrm{eff}}[A+\partial \Phi]-S_{\mathrm{eff}}[A]=-\frac{1}{\pi} \int_{-\infty}^{\infty} d x_{2} \int d x_{0} \Phi\left(x_{1}=0, x_{2}, x_{0}\right) \epsilon_{\mu \nu} \partial^{\mu} A^{\nu} \tag{16.140}
\end{equation*}
$$

and we get, as in the quantum Hall effect, a gauge anomaly. However, here too, we must also include the contribution of the edge states to the effective action. Since the edge states are chiral, they also have a gauge anomaly, which is equal and opposite to the gauge anomaly of the bulk. Hence, they cancel each other out. It is now easy to compute the currents. In the bulk the currents are just those of the anomalous Hall state for $x>0$ and 0 for $x<0$,

$$
\begin{equation*}
j_{\mu}=\frac{\delta S_{\mathrm{eff}}[A]}{\delta a_{\mu}(x)}=\frac{1}{\pi} \epsilon_{\mu \nu \lambda} \partial^{\nu} A^{\lambda} \tag{16.141}
\end{equation*}
$$

For a configuration of gauge fields with zero magnetic field, $B=0$, and electric field parallel to the length of the wall, $E_{2}=E$, the bulk current is the Hall current of the anomalous Hall state and flows towards the wall along the $x_{1}$ axis.

Instead, along the wall we get the edge current, which flows upwards along the $x_{2}$ axis. In this context this argument, which is formally analogous to Wen's anomalycancellation argument for the integer and fractional quantum Hall states, was first formulated by Callan and Harvey (1985), and it is also known as the Callan-Harvey effect.

### 16.9 Edge states and the quantum spin Hall effect

We now turn to a discussion of the edge states in the quantum spin Hall effect. It was stressed by Kane and Mele (2005b) that, since spin is not generally conserved in systems with spin-orbit couplings, the bulk quantum spin Hall effect cannot possibly be a robust feature of these systems. In particular, they argued that, while spin accumulation may take place as a result of applying an electric field, the associated spin Hall conductivity will generally be lower than the idealized calculation predicts. Nevertheless, Kane and Mele found that the edge states still have robust properties.

To see how this works, let us consider a system that is a time-reversal-invariant topological insulator in 2D (and hence one that ideally would display the quantum spin Hall effect) with a boundary. The arguments apply both to the Kane-Mele model and to the $\mathrm{CdTe} / \mathrm{HgTe} / \mathrm{CdTE}$ quantum-well model. As before, the outside vacuum will be described as a normal insulator with a very large and negative energy gap, while the quantum spin Hall insulator will have a positive energy gap. Thus, this system can then be pictured as a domain wall created by a sign change of the mass term. This picture is analogous to the edge of the quantum anomalous Hall insulator shown in Fig. 16.6. The main, and important, difference is that we now have twice as many degrees of freedom (due to the spin), and it is time-reversal invariant.

Thus, there will be one chiral edge state for the $\uparrow$ fermions and one chiral edge state for the $\downarrow$ fermions. However, since these fermions are related by time reversal (and hence parity), the $\uparrow$ fermions have positive chirality, since they have $\mathcal{Q}_{\uparrow}=$ $+1 / 2$ and obey a dispersion $E_{\uparrow}(p)=+v_{\mathrm{F}} p$, while the $\downarrow$ fermions have negative chirality, since they have $\mathcal{Q}_{\downarrow}=+1 / 2$ and obey a dispersion $E_{\downarrow}(p)=-v_{\mathrm{F}} p$.

We conclude that a topological insulator that exhibits the quantum spin Hall effect has a pair of edge states that are chiral Dirac (or Weyl) fermions and have opposite chiralities for $\uparrow$ and $\downarrow$ spins. In other terms, the $\uparrow$ spins are right movers $R_{\uparrow}$ while the $\downarrow$ spins are left movers $L_{\downarrow}$, as shown in Fig. 16.7. A system with this feature is called a "spin-split" metal (Hirsch, 1990) or, more generally, a "helical metal." In contrast, a normal time-reversal-invariant insulator either has no edge states (and hence also the edge is insulating) or it has edges states with both chiralities for each spin orientation. We will see shortly that these "normal" edge states either become localized by disorder or become gapped by interaction effects.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-737.jpg?height=276&width=663&top_left_y=199&top_left_x=514)

Figure 16.7 A two-terminal ( L and R ) setup used to detect the quantum spin Hall (QSH) effect (König et al., 2007). Counter-propagating chiral edge states propagate along the boundary of a quantum spin Hall topological insulator (see the text). The $\uparrow$ spins move to the right and the $\downarrow$ spins move to the left.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-737.jpg?height=533&width=1191&top_left_y=681&top_left_x=255)

Figure 16.8 A schematic plot of the two-terminal conductance $G_{\mathrm{L} / \mathrm{R}}$ as a function of the bias $V$ between the terminals L and R of the device sketched in Fig. 16.7, (a) in the normal regime of the quantum well, where it shows insulating behavior in the energy gap, $d<d_{\mathrm{c}}$, and (b) in the quantum spin Hall regime, $d>d_{\mathrm{c}}$, where it shows quantized edge spin Hall conduction. In the spin Hall regime Molenkamp et al. (König et al., 2007, 2008) measured in $\mathrm{CdTe} / \mathrm{HgTe} / \mathrm{CdTe}$ quantum wells a quantum spin Hall conductance of $2 e^{2} / h$ in agreement with the spin Hall current being carried by the edge states (see the text).

The effective Hamiltonian for the edge states of a quantum spin Hall insulator is

$$
\begin{equation*}
\mathcal{H}_{\mathrm{QSH}} \text { edge }=R_{\uparrow}^{\dagger}(x) i v_{\mathrm{F}} \hbar \partial_{x} R_{\uparrow}(x)-L_{\downarrow}^{\dagger}(x) i v_{\mathrm{F}} \hbar \partial_{x} L_{\downarrow}(x) \tag{16.142}
\end{equation*}
$$

Therefore the edge states of a time-reversal-invariant topological insulator constitute a non-chiral 1D system.

Given that the edge states of a quantum spin Hall insulator have both chiralities, one may suspect that they might not have topological protection. This turns out to be a subtle problem in which time-reversal invariance plays a key role. In a time-reversal-invariant free-fermion system the exact degeneracy between two time-reversed states, $|\uparrow, p\rangle$ and $|\downarrow,-p\rangle$, is guaranteed by Kramers' theorem. It
insures that this degeneracy cannot be lifted unless time-reversal symmetry is broken explicitly since, in this case, there is no symmetry distinction between a normal insulator and a quantum spin Hall insulator. For example, a magnetic field parallel to the edge (say, along the $x$ direction) will induce a spin-flip process. However, in this case a spin-flip process requires one to flip the momentum and hence to exchange a right with a left mover. Thus, this term induces a term at the edge of the form

$$
\begin{equation*}
\mathcal{H}_{\text {flip }}=g B\left(R_{\uparrow}^{\dagger} L_{\downarrow}+L_{\downarrow}^{\dagger} R_{\uparrow}\right) \tag{16.143}
\end{equation*}
$$

With this term, by virtue of mixing right and left movers, the energy spectrum now is $E(p)=\sqrt{p^{2} v_{\mathrm{F}}^{2}+(g B)^{2}}$. Therefore now there is a gap $g|B|$ in the spectrum of edge states and the edge is insulating.

Can interactions open a gap in the spectrum of edge states? We suspect that this may be possible since the edge states in this case are not chiral. This question is equivalent to asking whether time reversal may be broken spontaneously. It is easy to see that in this system a backscattering interaction, which is a fourfermion process, is a marginal operator. In fact, the edge states of this system are identical to those of a spinless Luttinger liquid, which we discussed in depth in Chapters 5 and 6 . This connection tells us that the edge states in general have anomalous dimensions and hence are not the simple free-fermion states we discussed. From this line of argument we can also deduce that the only possible operators that could open an energy gap are Umklapp processes. However, Umklapp processes are allowed only for a half-filled edge and become relevant only for a sufficiently large value of their coupling constant.

What are the effects of disorder on the edge states of the quantum spin Hall insulator? The chiral edge states of the quantum Hall fluid, and of the anomalous Hall insulator, are protected from localization effects since backscattering processes are forbidden. The quantum spin Hall edge states are also stable against localization except in the case of backscattering processes with a spin flip, i.e. magnetic impurities. Thus, magnetic impurities make the quantum spin Hall edge states insulating. In the case of the edge states of a normal insulator, if it has edge states at all, they are not protected, and impurities will generally induce backscattering, turning it into an Anderson insulator due to localization effects.

### 16.10 $\mathbb{Z}_{2}$ topological insulators and the parity anomaly

The last example we will discuss concerns the edge states of $3 \mathrm{D} \mathbb{Z}_{2}$ topological insulators. We will use a continuum-field-theory notation while keeping in mind the central importance of lattice effects associated with fermion doubling. We have already discussed these subjects for the bulk states. An alternative and very elegant
approach that unifies all these effects and phenomena can be found in the beautiful work of Qi, Hughes, and Zhang (Qi et al., 2008), which will be discussed below.

We will imagine now that we have a simply connected region $\Omega$ of 3D space occupied by a $\mathbb{Z}_{2}$ topological insulator, e.g. $\mathrm{Bi}_{2} \mathrm{Se}_{3}$. The boundary of the region, that we will denote by $\Sigma$, is a simply connected closed 2D manifold with the topology of the sphere $S_{2}$. Outside this region we have vacuum or, which amounts to the samething, a trivial insulator with a very large energy gap. To simplify the analysis further, we will take the region $\Omega$ to occupy the entire half-space $x_{3}<0$ of 3D space, and its boundary $\Sigma$ becomes $\mathbb{R}^{2}$, the $x_{1} x_{2}$ plane. We will begin by constructing the zero modes of this system, the 2 D edge states of the $3 \mathrm{D} \mathbb{Z}_{2}$ topological insulator. We will see that the edge states are chiral (Weyl) fermions that move in 2D space, the boundary $\Sigma$. We will follow the work of Callan and Harvey. This problem was considered before (Fradkin et al., 1986; Boyanovsky et al., 1987), except that in that work it was applied to PbTe , which, as it happens, is not a topological insulator. Consequently, it has edge states with both chiralities, and as such does not enjoy any form of topological protection. Nevertheless, their analysis does apply to the case of $\mathbb{Z}_{2}$ topological insulators, which had not yet been discovered at that time.

Once again, we will assume that inside region $\Omega$ we have an even number of species of massive Dirac fermions, as required by the Nielsen-Ninomiya theorem. For the sake of concreteness we will keep in mind the 3D Wilson-fermion model as a simple example of a $\mathbb{Z}_{2}$ topological insulator. Thus we will work with four component spinors that represent states in the conduction and valence bands with both spin projections. We will assume that inside region $\Omega$ the mass parameter of the Wilson-fermion model lies in the regime in which the mass is negative at the $\Gamma$ point and positive at all other time-reversal-invariant points (see Section 16.6), but that it is negative outside region $\Omega$. This can be described in terms of a single four-component Dirac spinor in $(3+1)$ dimensions with a mass term that changes sign across the $x_{1} x_{2}$ plane. Although we will use a continuum description, which is accurate for the states near the $\Gamma$ point, the results are consistent with lattice calculations of Dirac fermions with domain walls.

There is an extensive literature in lattice gauge theory on the subject of "domainwall fermions," which were proposed in connection with the realization of chiral symmetry in lattice systems (see e.g. Kaplan (1992), Jansen (1996), and Creutz (2001)), which has explicitly reproduced the results with Wilson fermions we discuss here. However, while in lattice gauge theory the bulk is a system in $(4+1)$ dimensional space-time and the boundary is $(3+1)$-dimensional space-time, here we will work with one spatial dimension fewer. In the next section we will see that it is also convenient to consider the problem beginning in $(4+1)$ dimensions (Qi et al., 2008).

Let $H$ be the Dirac Hamiltonian in three space dimensions with a domain wall normal to the $x_{3}$ axis. Thus we will assume that the Dirac mass term is a smooth and monotonically decreasing function $m\left(x_{3}\right)$ that changes sign at $x_{3}=0$ and takes the asymptotic values $\lim _{x_{3} \rightarrow \pm \infty} m\left(x_{3}\right)=\mp m$, with $m>0$. The (one-particle) Dirac Hamiltonian is

$$
\begin{equation*}
H=-i \vec{\alpha} \cdot \vec{\nabla}+m\left(x_{3}\right) \beta \tag{16.144}
\end{equation*}
$$

which can be written as

$$
\begin{equation*}
H=H_{\perp}+H_{3} \tag{16.145}
\end{equation*}
$$

where

$$
\begin{equation*}
H_{\perp}=-i \alpha_{1} \partial_{1}-i \alpha_{2} \partial_{2} \tag{16.146}
\end{equation*}
$$

and

$$
\begin{equation*}
H_{3}=-i \alpha_{3} \partial_{3}+m\left(x_{3}\right) \beta \tag{16.147}
\end{equation*}
$$

Let $\psi_{0}^{ \pm}$be an eigenstate of the (anti-hermitian) Dirac matrix $\gamma_{3}=\beta \alpha_{3}$ with eigenvalue $\pm i$,

$$
\begin{equation*}
\gamma_{3} \psi_{0}^{ \pm}= \pm i \psi_{0}^{ \pm} \tag{16.148}
\end{equation*}
$$

We will demand that $\psi_{0}^{ \pm}$be a zero mode of $H_{3}$,

$$
\begin{equation*}
H_{3} \psi_{0}^{ \pm}=0 \quad \Rightarrow \quad \pm \partial_{3} \psi_{0}^{ \pm}+m\left(x_{3}\right) \psi_{0}^{ \pm}=0 \tag{16.149}
\end{equation*}
$$

and a solution of the Dirac equation in $(2+1)$ dimensions,

$$
\begin{equation*}
i \gamma_{0} \partial_{0} \psi_{0}^{ \pm}-i(\vec{\gamma} \cdot \vec{\nabla})_{\perp} \psi_{0}^{ \pm}=0 \tag{16.150}
\end{equation*}
$$

where the label $\perp$ indicates that the space derivatives act only on the domain-wall coordinates $x_{1}$ and $x_{2}$.

We can satisfy these conditions by writing

$$
\begin{equation*}
\psi_{0}^{ \pm}=\eta_{ \pm}\left(x_{0}, x_{1}, x_{2}\right) f\left(x_{3}\right) \tag{16.151}
\end{equation*}
$$

where $f\left(x_{3}\right)$ is the solution of

$$
\begin{equation*}
\pm \partial_{3} f_{ \pm}\left(x_{3}\right)=-m\left(x_{3}\right) f_{ \pm}\left(x_{3}\right) \tag{16.152}
\end{equation*}
$$

which has the form

$$
\begin{equation*}
f_{ \pm}\left(x_{3}\right)=f(0) \exp \left(\mp \int_{0}^{x_{3}} d x_{3}^{\prime} m\left(x_{3}^{\prime}\right)\right) \tag{16.153}
\end{equation*}
$$

Since $m\left(x_{3}\right)<0$ for $x_{3}>0$, it is monotonically decreasing and $\lim _{x_{3} \rightarrow \infty} m\left(x_{3}\right)=$ $m<0$, the requirement that the solution be normalizable implies that we must choose the solution $f_{+}\left(x_{3}\right)$, which decays exponentially fast at long distances
from the wall, $\left|x_{3}\right| \gg m^{-1}$. This also implies that the spinor $\eta_{+}\left(x_{0}, x_{1}, x_{2}\right)$ must be chosen to be an eigenspinor of $\gamma_{3}$ with eigenvalue $-i$. Since in the Dirac basis $\gamma_{3}=i \sigma_{3} \otimes \tau_{1}$, it follows that the spinor $\eta_{+}\left(x_{0}, x_{1}, x_{2}\right)$ is a superposition of positive-energy states (the conduction band of the insulator) with spin $\uparrow$ and negative-energy states (the valence band of the insulator) with spin $\downarrow$, which should also satisfy the massless Dirac equation in $(2+1)$ dimensions, Eq. (16.150).

The nature of the edge states is more easily seen by using a basis of the Dirac gamma matrices in which $\gamma_{3}$ is diagonal. In this basis we have the $4 \times 4$ Dirac gamma matrices are $\gamma_{0}=-\mathcal{I} \otimes \tau_{2}, \gamma_{5}=\mathcal{I} \otimes \tau_{1}$, and $\vec{\gamma}=i \vec{\sigma} \otimes \tau_{3}$. The subspace of spinors with $\gamma_{3}$ eigenvalue $+i$ is spanned by $(1,0,0,0)^{\mathrm{T}}$ and $(0,0,0,1)^{\mathrm{T}}$ (here the label T means transposed), while the subspace in which $\gamma_{3}$ has eigenvalue $-i$ is spanned by the spinors $(0,1,0,0)^{\mathrm{T}}$ and $(0,0,1,0)^{\mathrm{T}}$. We can find the effective Dirac Hamiltonian in each of these two-dimensional subspaces. In the $\gamma_{3}=i$ subspace the matrices $\alpha_{1}=\gamma_{0} \gamma_{1}$ and $\alpha_{2}=\gamma_{0} \gamma_{2}$ become $\alpha_{1}=\sigma_{1}$ and $\alpha_{2}=-\sigma_{2}$. On the other hand, in $\gamma_{3}=-i$ subspace they are instead $\alpha_{1}=\sigma_{1}$ and $\alpha_{2}=+\sigma_{2}$. Thus, in both subspaces the effective Hamiltonian has the form of a Weyl fermion in $(2+1)$ dimensions,

$$
\begin{equation*}
H_{2 \mathrm{D}}=-i \alpha_{1} \partial_{1}-i \alpha_{2} \partial_{2} \tag{16.154}
\end{equation*}
$$

and the states have energy $E(\vec{p})= \pm|\vec{p}|$. However, since in the two subspaces the term that contains the matrix $\alpha_{2}$ has opposite signs, the subspaces have states that are related by a parity transformation. Hence the edge states with $\gamma_{3}=+i$ have positive chirality and those with $\gamma_{3}=-i$ have negative chirality.

We conclude that there are states bound to the wall whose wave functions have the form

$$
\begin{equation*}
\psi_{0}^{+}\left(x_{0}, x_{1}, x_{2}, x_{3}\right)=\eta_{+}\left(x_{0}, x_{1}, x_{2}\right) \exp \left(-\int_{0}^{x_{3}} d x_{3}^{\prime}\left|m\left(x_{3}^{\prime}\right)\right|\right) \tag{16.155}
\end{equation*}
$$

where the spinor $\eta_{+}$satisfies $\gamma_{3} \eta_{+}=i \eta_{+}$and obeys a Dirac equation for bispinors in $(2+1)$ dimensions, $(i \not \partial)_{\perp} \eta_{+}=0$. Therefore, a 3D $\mathbb{Z}_{2}$ topological insulator has chiral edge states, bound states localized at its open surface, which are massless two-component Weyl fermions.

However, since the surface of the insulator is simply connected, this result also means that the opposite surface also has massless two-component Weyl fermions but with the opposite chirality. Hence, in this system the fermiondoubling theorem is satisfied by spatially separating the chiral partners, with the top surface having positive-chirality Weyl fermions and the bottom surface having the negative-chirality Weyl fermions.

In the simple Wilson model, which is qualitatively adequate to describe topological insulators such as $\mathrm{Bi}_{2} \mathrm{Se}_{3}$, there is just one species of Weyl fermion on each
surface. Other topological insulators, such as $\mathrm{Bi}_{1-x} \mathrm{Sb}_{x}$, have a diamond lattice structure and more complex band structure, leading to five Weyl modes on each surface. Nevertheless, what matters is that the number of surface Weyl fermions is odd. Indeed, if there were an even number of edge Weyl modes (as in the case of PbTe ) a mass term would be allowed on the surface even in a system with time-reversal invariance. Hence pairs of Weyl fermions can acquire a gap. Thus insulators with an even number of surface Weyl fermions are $\mathbb{Z}_{2}$-trivial. On the other hand, if the number of surface Weyl modes is odd there will be at least one gapless mode left gapless. This is what happens in the $\mathbb{Z}_{2}$ topologically non-trivial class. The Wilson-fermion model is in this class and can be used as its representative.

Let us explore the consequences of these results by considering the effects of external electromagnetic fields. The coupling to the external electromagnetic field is given by the usual minimal coupling which is dictated by gauge invariance. However, we will have to be careful to include also the Zeeman coupling of the "microscopic" electrons, which in this language is a "non-minimal" coupling, although it is consistent with gauge invariance. Such a term breaks time-reversal invariance since it couples directly to the spin. For simplicity we will take the magnetic field to be normal to the surface, $\vec{B}=B \vec{e}_{3}$. We will work in the gauge $A_{3}=0$.

The one-particle Dirac Hamiltonian in the presence of a domain wall and coupled to the external magnetic field can also be written in the split form of Eq. (16.145), with $H_{\perp}$ and $H_{3}$ now being given by

$$
\begin{align*}
H_{\perp} & =\left[-i \vec{\alpha} \cdot\left(\vec{\nabla}-i \frac{e}{\hbar c} \vec{A}\right)\right]_{\perp}-g B \Sigma_{3}  \tag{16.156}\\
H_{3} & =-i \alpha_{3} \partial_{3}+m\left(x_{3}\right) \beta
\end{align*}
$$

where $g$ is the Zeeman coupling and $\vec{\Sigma}=\operatorname{diag}(\vec{\sigma}, \vec{\sigma})$ is the Dirac spin matrix. Notice that the Zeeman term is equivalent to a mass term for the Weyl fermion with mass $m=-g B$. So the sign of the mass, which sets the sign of the timereversal symmetry breaking, is the opposite of the sign of $B$, the component of the magnetic field perpendicular to the wall.

Since $\Sigma_{3}=\operatorname{diag}\left(\sigma_{3}, \sigma_{3}\right)$, it commutes with $\gamma_{3}$. Thus in the subspace spanned by the normalizable zero modes of $H_{3}$, which above was denoted by $\psi_{0}^{+}$, the effective Hamiltonian in $(2+1)$ dimensions now is

$$
\begin{equation*}
H_{2 \mathrm{D}}=\vec{\alpha} \cdot\left(\vec{p}+\frac{e}{\hbar c} \vec{A}\right)-g B \sigma_{3} \tag{16.157}
\end{equation*}
$$

where $\alpha_{1}=\sigma_{1}, \alpha_{2}=\sigma_{2}$ (given that our spinors satisfy $\gamma_{3}=+i$ ), and $\vec{A}$ denotes the components of the electromagnetic vector potential tangent to the wall, the $x_{1} x_{2}$ plane.

We see that the Zeeman coupling for a field normal to the wall opens a gap in the energy spectrum. Moreover, the Hamiltonian now has all three Pauli matrices and breaks time-reversal invariance. On the other hand, for the same reason an inplane magnetic field does not open a gap in the spectrum and amounts to a shift of the momentum. Thus, an in-plane magnetic field can be thought of as a large gauge transformation or, equivalently, as a twist in the boundary conditions of the spinors. The other way to open a gap in the spectrum of Weyl surface states is to have a term in the bulk Hamiltonian that breaks parity and charge-conjugation symmetry. As we will see below, this term involves the matrix $\beta \gamma_{5}$.

The relativistic energy levels $\varepsilon_{n, \sigma}$ in $(2+1)$ dimensions are (setting $m=-g B$ )

$$
\begin{array}{rlrl}
\varepsilon_{n, \sigma} & = \pm\left((2 n+1) B-\sigma B+m^{2}\right)^{1 / 2}, \quad n=0,1,2, \ldots, & \sigma_{3}= \pm 1 \\
\varepsilon_{0} & =m, \quad n=0, \quad \sigma=+1 \tag{16.158}
\end{array}
$$

It is easy to see that the $n=0, \sigma=1$ states are $N_{\phi}$-fold degenerate, while all other states are $2 N_{\phi}$-fold degenerate. Therefore, in the ground state, which is found by filling up all negative-energy states, the Landau level with $n=0$ and spin $\uparrow$ will be empty if $m>0$ or full if $m<0$. Thus, we expect a charge (and spin) accumulation at the surface by an amount $Q$.

How much charge accumulates? Since the Hamiltonian $H_{3}$ is nothing but the Hamiltonian of a soliton in 1D, we easily find that the induced charge is

$$
\begin{equation*}
Q=\frac{e}{2} \operatorname{sgn}(m) N_{\phi}=\frac{e}{2} \frac{B L^{2}}{\phi_{0}} \operatorname{sgn}(m)=\frac{e^{2}}{\hbar c} \frac{1}{4 \pi} \operatorname{sgn}(m) B L^{2} \tag{16.159}
\end{equation*}
$$

Where does this charge come from? It necessarily has to come from the bulk of the system. However, since the system is isolated and charge is conserved, an equal and opposite amount of charge, $-Q$, has to be somewhere else. Indeed, the "missing charge" is at the opposite surface! As we saw above, at the opposite surface we also get 2D Weyl fermions, but with the opposite "chirality" $\gamma_{3}=-i$. It is straightforward to see that the charge that accumulates at the "anti-domain wall" is indeed $-Q$ and has opposite spin projection. Hence the magnetic field induces a charge polarization in the system. In $\mathbb{Z}_{2}$ topological insulators this effect is known as the topological magneto-electric effect (TME) (Qi et al., 2008; Essin et al., 2009).

If we now impose an additional in-plane electric field $\vec{E}$, we expect that the charge $Q$ (or rather its center of mass) will move at the drift velocity $v=c|\vec{E}| /|B|$, and that the system will have a Hall current $\vec{J}$, perpendicular to both $\vec{B}$ and $\vec{E}$,

$$
\begin{equation*}
J_{i}=\sigma_{x y} \epsilon_{i j} E_{j} \tag{16.160}
\end{equation*}
$$

with a Hall conductance

$$
\begin{equation*}
\sigma_{x y}=\frac{1}{4 \pi} \frac{e^{2}}{\hbar} \operatorname{sgn}(m) \tag{16.161}
\end{equation*}
$$

Hence the Weyl fermions have a Hall conductance $\sigma_{x y}= \pm 1 / 2$ (in units of $e^{2} / h$ )! Since the electric field acts throughout the system (the bulk is an insulator and cannot screen the electric field!), the Hall current has the opposite sign at the opposite surface. Thus, there is no total Hall current, since the currents cancel out in the system as a whole (but not locally!), but there is instead a spin Hall current. We see that this effect is the 3D analog of the quantum spin Hall effect. However, the significant difference is that the chiral partners are spatially separated. This is another manifestation of the Callan-Harvey effect. We see that the system exhibits a parity anomaly at each surface, but that this cancels out in the system as a whole. Equivalently, we have shown that the surface Weyl fermions of a 3D $\mathbb{Z}_{2}$ topological insulator exhibit an anomalous Hall effect with a Hall conductance that is equal to $e^{2} /(2 h)$ (up to a sign), for this case in which there is a single Weyl fermion. For a more general topological insulator the surface Hall conductance is $\left(N_{+}-N_{-}\right) e^{2} /(2 h)$, where $N_{ \pm}$is the number of Weyl fermions of each chirality. The opposite surface has the opposite Hall conductance.

We can recast these conclusions in terms of an effective action for the external electromagnetic field (Qi et al., 2008). From the point of view of the surface states their response to the external electromagnetic field is given by a Chern-Simons action

$$
\begin{align*}
S_{\mathrm{eff}}[A]= & \int_{\partial \Omega^{+} \times \mathbb{R}} d^{3} x\left[\frac{1}{4 \pi} \operatorname{sgn}(m) \epsilon^{\mu \nu \lambda} A_{\mu} \partial_{\nu} A_{\lambda}\right] \\
& -\int_{\partial \Omega^{-} \times \mathbb{R}} d^{3} x\left[\frac{1}{4 \pi} \operatorname{sgn}(m) \epsilon^{\mu \nu \lambda} A_{\mu} \partial_{v} A_{\lambda}\right] \tag{16.162}
\end{align*}
$$

where $\partial \Omega^{ \pm}$are the top $(+)$and bottom ( - ) surfaces of a 3 D region $\Omega$ occupied by the $\mathbb{Z}_{2}$ topological insulator. Here $\mathbb{R}$ represents the time coordinate and $\mu, v, \lambda=$ $0,1,2$. We can express this result in the form of a volume integral (and time)

$$
\begin{equation*}
S_{\mathrm{eff}}[A]=\int_{\Omega \times \mathbb{R}} d^{4} x \frac{\theta}{8 \pi^{2}} \epsilon_{\mu \nu \lambda \rho} \partial^{\mu} A^{\nu} \partial^{\rho} A^{\lambda} \tag{16.163}
\end{equation*}
$$

with $\theta=\operatorname{sgn}(m) \pi$.
It is straightforward to see that the integrand of Eq. (16.163) is a total derivative, which therefore integrates to the boundary (which is what we wanted) and that the effective action at the boundary has the Chern-Simons form. Furthermore, on a 4-manifold without boundaries (topologically equivalent to the 4 -sphere $S_{4}$ ) the Pontryagin index

$$
\begin{equation*}
\mathcal{Q}=\int_{S_{4}} d^{4} x \frac{1}{32 \pi^{2}} F^{\mu \nu} \widetilde{F}_{\mu \nu}=\int_{S_{4}} d^{4} x \frac{1}{32 \pi^{2}} \epsilon_{\mu \nu \lambda \rho} F^{\mu \nu} F^{\lambda \rho} \tag{16.164}
\end{equation*}
$$

is a topological invariant and is quantized to be an integer. Here $F^{\mu \nu}=\partial^{\mu} A^{\nu}-$ $\partial^{\nu} A^{\mu}$ is the field tensor and $\widetilde{F}_{\mu \nu}=\frac{1}{2} \epsilon_{\mu \nu \lambda \rho} F^{\lambda \rho}$ is the dual tensor; $\mu, \nu, \lambda, \rho=$
$0,1,2,3$. It can be shown that in the case of a 4 D gauge theory, the Pontryagin index classifies the smooth maps $S_{4} \mapsto S_{4}$, and thus with homotopy group $\pi_{4}\left(S_{4}\right)=\mathbb{Z}$, which counts the instanton number, as discussed beautifully in Coleman's book (Coleman, 1985) (see also Eguchi et al. (1980)). We see that this topological invariant is the analog of the Pontryagin index of the 2D non-linear sigma model, see Eq. (7.75).

The parameter $\theta$ is called the $\theta$ angle or axion field, and in the case at hand $\theta= \pm \pi$, which (aside from 0 ) is the only value $(\bmod 2 \pi)$ compatible with timereversal invariance. Thus a trivial insulator, which does not have protected surface Weyl fermions, has $\theta=0(\bmod 2 \pi)$, whereas a $\mathbb{Z}_{2} 3 \mathrm{D}$ topological insulator has $\theta=\pi(\bmod 2 \pi)$. We will see shortly that in the context of topological insulators it is closely related to the induced charge polarization. These observations led Qi , Hughes, and Zhang to the conclusion that the effective action of 3D insulators is (Qi et al., 2008)

$$
\begin{align*}
S_{\mathrm{eff}}[A] & =\int d^{4} x\left[-\frac{1}{4 g^{2}} F^{\mu \nu} F_{\mu \nu}+\frac{\theta}{32 \pi^{2}} F^{\mu \nu} \widetilde{F}_{\mu \nu}\right] \\
& =\int d^{4} x\left[\frac{1}{2 g^{2}}\left(\frac{1}{v^{2}} \vec{E}^{2}-\vec{B}^{2}\right)+\frac{\theta}{8 \pi^{2}} \vec{E} \cdot \vec{B}\right] \tag{16.165}
\end{align*}
$$

with $\theta=0, \pi$. The first term in Eq. (16.165) is a Maxwell term, which, for an isotropic system, is parametrized by the dielectric constant and the magnetic susceptibility of the insulator, which we represented in terms of the coupling constant $g \propto e^{2}$ and the speed of light $v$ in the insulator.

Callan and Harvey gave a general descriptions of problems of this type (Callan and Harvey, 1985) by adapting the ideas of Goldstone and Wilczek we discussed in the polyacetylene case. In the present context the Callan-Harvey approach requires one to add a $\gamma_{5}$ mass term to the action or, equivalently, a $\beta \gamma_{5}$ term to the Dirac Hamiltonian. In terms of the topological insulator a bulk term of this type breaks time-reversal invariance (or $C P$ ) explicitly. Thus, we imagine that our Dirac fermion has both a Dirac mass term and a $\gamma_{5}$ mass term, each coupled to two scalar fields, $\phi_{1}$ and $\phi_{2}$, which we will take to be slowly varying. In the 3D case at hand, the Lagrangian is

$$
\begin{equation*}
\mathcal{L}=\bar{\psi} i \not \partial \psi+g \phi_{1} \bar{\psi} \psi+i g \phi_{2} \bar{\psi} \gamma_{5} \psi=\bar{\psi} i \not \partial \psi+g|\phi| \bar{\psi} e^{i \gamma_{5} \theta} \psi \tag{16.166}
\end{equation*}
$$

where $\not \partial=\gamma^{\mu} \partial_{\mu}, \gamma_{5}=i \gamma_{0} \gamma_{1} \gamma_{2} \gamma_{3}$, and $\gamma_{\mu}$ are the four $4 \times 4$ Dirac gamma matrices that satisfy the Dirac algebra, $\left\{\gamma_{\mu}, \gamma_{\nu}\right\}=2 g_{\mu \nu} \mathcal{I}$, with $g_{\mu \nu}=\operatorname{diag}(1,-1,-1,-1)$, and $\left\{\gamma_{\mu}, \gamma_{5}\right\}=0$. Here we have used the fact that $\gamma_{5}^{2}=\mathbb{I}$ and expressed the complex field $\phi=\phi_{1}+i \phi_{2}=|\phi| \exp (i \theta)$ in terms of an amplitude field $|\phi|$ and a phase field, the axion field $\theta$.

Using the same line of argument as that which led Goldstone and Wilczek to the induced current of Eq. (16.128), Callan and Harvey showed that in $(3+1)$ dimensions an electromagnetic field $A^{\mu}$, whose field tensor is $F^{\mu \nu}=\partial^{\mu} A^{\nu}-\partial^{\nu} A^{\mu}$, in the background of a complex scalar field $\phi=\phi_{1}+i \phi_{2}$ induces the charge current $\left\langle j_{\mu}\right\rangle$ given by

$$
\begin{align*}
\left\langle j_{\mu}\right\rangle & =-i \frac{e}{16 \pi^{2}} \epsilon_{\mu \nu \lambda \rho} \frac{\phi^{*} \partial^{\nu} \phi-\phi \partial^{\nu} \phi^{*}}{|\phi|^{2}} F^{\lambda \rho} \\
& =\frac{e}{8 \pi^{2}} \epsilon_{\mu \nu \lambda \rho} \partial^{\nu} \theta F^{\lambda \rho} \tag{16.167}
\end{align*}
$$

which is a consequence of the axial anomaly in $(3+1)$ dimensions. Callan and Harvey considered a rather different problem in which the complex scalar field $\phi$ has a vortex in the 3D space, called an axion string. The vortex has a 1D core and the Callan-Harvey analysis predicts that it has chiral Dirac-Weyl fermions that move along the vortex with the direction determined by the sign of the vorticity.

Here we are interested in the case of a domain wall that is closely related to the soliton that we discussed in Section 16.7. We will proceed similarly. Thus, we will assume that $g \phi_{1}=m$ is the Dirac mass and that $\phi_{2}$ varies slowly (and smoothly) from the value $\phi_{0}$ as $x_{3} \rightarrow-\infty$ to $-\phi_{0}$ as $x_{3} \rightarrow+\infty$. We can compute the total charge accumulated on the wall using the Callan-Harvey result, Eq. (16.167), to find (after restoring units)

$$
\begin{equation*}
Q=e \int d^{3} x\left\langle j_{0}\right\rangle=\frac{e^{2}}{\hbar c} \frac{\Delta \theta}{2 \pi} \frac{B_{3} L^{2}}{2 \pi} \tag{16.168}
\end{equation*}
$$

where we assumed that there is a non-vanishing magnetic field $B_{3}$ perpendicular to the wall. Since the chiral angle $\theta=\tan ^{-1}\left(\phi_{2} / \phi_{1}\right)$ its total variation is

$$
\begin{equation*}
\Delta \theta=\theta\left(x_{3} \rightarrow+\infty\right)-\theta\left(x_{3} \rightarrow-\infty\right)=-2 \tan ^{-1}\left(\frac{g \phi_{0}}{m}\right) \tag{16.169}
\end{equation*}
$$

Then in the time-reversal invariant limit, in which $\Delta \Theta \rightarrow-1 / 2$, the charge $Q$ becomes

$$
\begin{equation*}
\lim _{m \rightarrow 0} Q=-\frac{e^{2}}{\hbar c} \frac{B_{3} L^{2}}{4 \pi} \tag{16.170}
\end{equation*}
$$

which agrees with Eq. (16.159). Similarly, we can easily see that the CallanHarvey current predicts that, if an electric field is applied parallel to the wall, there is an electric current on the wall perpendicular to it. This Hall current is peculiar, since no magnetic field is applied. However, we must be careful to see that it appears in the limit of vanishingly small breaking of time-reversal symmetry. The result is discontinuous, and its sign depends on how the limit is taken.

By now the reader may have wondered whether we have not lost something important using the continuum approximations. In particular, the topological nature of the effects has been to some extent hidden by going to the continuum limit. In fact, the only place where we used the topological nature of the insulator was at the beginning of the section, where we assumed that we would be working close to the point in which a band inversion first appears at the $\Gamma$ point, and relied on the fact that the invariants at the other time-reversal-invariant points of the Brillouin zone were unaffected. Therefore, if we are just "inside" the $\mathbb{Z}_{2}$ topological insulator phase, our assumption that only the 3D Dirac fermion near the $\Gamma$ point has a domain wall (and that the other "species" do not) yields a consistent description of the changes in the electronic structure. On the other hand, it would be desirable to have a more general framework that does not rely on special arguments and, for that matter, on a special form of the Hamiltonian. This was accomplished in the general and elegant work of Qi, Hughes, and Zhang (QHZ) (Qi et al., 2008), whose main ideas we will now describe.

They began their analysis by reexamining the 1D problem of fractionally charged solitons, see Section 16.7, but with a somewhat different perspective. They took the point of view that fractional charge in one dimension is an expression of the problem of quantized charge transport and polarization in 1D insulators (Thouless, 1983; King-Smith and Vanderbilt, 1993; Ortiz and Martin, 1994).

Following the QHZ construction, we will first consider a simple Wilson-fermion model for the anomalous quantum Hall state in $d=2$ space dimensions whose Hamiltonian in real space is

$$
\begin{align*}
H= & \sum_{\vec{r}, j=1,2} \psi^{\dagger}(\vec{r}) i \Gamma_{j}\left(\psi\left(\vec{r}+e_{j}\right)-\psi\left(\vec{r}-e_{j}\right)\right)+m \sum_{\vec{r}} \psi^{\dagger}(\vec{r}) \Gamma_{3} \psi(\vec{r}) \\
& +\sum_{\vec{r}, j=1,2} \psi^{\dagger}(\vec{r}) \Gamma_{3}\left(\psi\left(\vec{r}+e_{j}\right)+\psi\left(\vec{r}-e_{j}\right)-2 \psi(\vec{r})\right) \tag{16.171}
\end{align*}
$$

where $\Gamma_{j}$ (with $j=1,2,3$ ) are the three $2 \times 2$ hermitian matrices, $\Gamma_{1}=\alpha_{1}=\sigma_{1}$, $\Gamma_{2}=\alpha_{2}=\sigma_{2}$, and $\Gamma_{3}=\beta=\sigma_{3}$, and satisfy the Clifford algebra $\left\{\Gamma_{j}, \Gamma_{k}\right\}=\delta_{j k} \mathcal{I}$, where $\mathcal{I}$ is the $2 \times 2$ identity matrix. The last term in Eq. (16.171) is known as the Wilson mass term, and its role is to give a mass gap to all time-reversal-invariant points in the Brillouin zone except the origin (the $\Gamma$ point).

In momentum space this Hamiltonian is

$$
\begin{equation*}
H=\int_{\mathrm{BZ}} \frac{d^{2} k}{(2 \pi)^{2}} \psi^{\dagger}(\vec{k}) \vec{h}(\vec{k}) \cdot \vec{\Gamma} \psi(\vec{k}) \tag{16.172}
\end{equation*}
$$

It is characterized by the vector $\vec{h}(\vec{k})=\left(\sin k_{1}, \sin k_{2}, m+\cos k_{1}+\cos k_{2}-2\right)$ which defines a mapping of the Brillouin zone onto the 2 -sphere $S_{2}$. In Section 16.3.4 we showed that these mappings are classified by the Pontryagin index (or
topological charge) $\mathcal{Q}$ of Eq. (16.48), which in this case computes the (first) Chern number $C_{1}$ of the Berry connection of the spinors on the Brillouin-zone torus. This result is a general property of this class of systems rather than of the specific form of the Wilson Hamiltonian. In this example, the Chern number $C_{1}$ takes the values 1 and -1 for $m<0$ and $0<m<2$, respectively, and 0 otherwise (this result can be derived from Eq. (16.75)). We will focus on the regime $0<m<2$, for which this system displays the anomalous quantum Hall effect with a quantized Hall conductance $\sigma_{x y}=+e^{2} / h$ (Qi et al., 2008).

We also know that the physical response to an external electromagnetic field $A_{\mu}$ of a system with a quantized anomalous quantum Hall effect is given by the Maxwell-Chern-Simons effective action of the form of Eq. (16.37). In this case, however, the coefficient of the Chern-Simons term is quantized and equal to the first Chern number $C_{1}$ of the system. This effective action is gauge-invariant for a system without boundaries, e.g. with periodic boundary conditions. If the system has boundaries the full gauge-invariant effective action also includes the electromagnetic response of the (topologically protected) edge states.

Let us consider the idealized problem of a 2 D system with a quantum anomalous Hall state on a cylinder of length $L_{1}$ and circumference $L_{2}$. We will picture this situation, as in Fig. 16.9, as a compactification of the plane, which has been wrapped into a cylinder. The effective action of the $(2+1)$-dimensional quantum anomalous Hall insulator in the asymptotic low-energy limit is the Chern-Simons action on the cylinder,

$$
\begin{equation*}
S_{2+1}[A]=\frac{C_{1}}{4 \pi} \int_{S_{1} \times S_{1} \times \mathbb{R}} d^{3} x \epsilon_{\mu \nu \lambda} A^{\mu} \partial^{\nu} A^{\lambda} \tag{16.173}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-748.jpg?height=400&width=1029&top_left_y=1569&top_left_x=345)

Figure 16.9 (a) The rectangle of area $L_{1} L_{2}$. (b) The compactified rectangle is a cylinder of length $L_{1}$ and circumference (or period) $L_{2}$. The magnetic flux $\Phi$ going through the cylinder in (b) is a twist in the boundary conditions for the states on the plane in (a).
where we denoted the cylinder as $S_{1} \times S_{1} \times \mathbb{R}$, where the first $S_{1}$ represents time $x_{0}$ (with periodic boundary conditions), the second $S_{1}$ represents the compact (periodic) direction $x_{2}$ (with $0 \leq x_{2}<L_{2}$ ), and $\mathbb{R}$ is the $x_{1}$ direction along the cylinder of length $L_{1}$. Here we have not included the edge-state contribution.

In the "thin-cylinder" limit, in which formally $L_{2} \rightarrow 0$, the Chern-Simons term reduces to the $(1+1)$-dimensional action for the projected gauge field $A_{\mu}=\left(A_{0}, A_{1}\right)$

$$
\begin{equation*}
S_{1+1}[A]=\frac{C_{1}}{2 \pi} \int_{S_{1} \times \mathbb{R}} d x d t \Phi(x, t) \epsilon_{\mu \nu} \partial^{\mu} A^{\nu} \tag{16.174}
\end{equation*}
$$

where the local field $\Phi(x, t)=\oint d x_{2} A_{2}$ is the flux through the cylinder at location $x$ at time $t$. We will now see that there is a $(1+1)$-dimensional interpretation of the flux $\Phi$. Indeed, the action $S_{1+1}[A]$ predicts that the $(1+1)$-dimensional current charge density $j_{0}$ and charge current $j_{1}$ are given by

$$
\begin{equation*}
j_{0}=\frac{\delta S_{1+1}[A]}{\delta A_{0}}=\frac{C_{1}}{2 \pi} \partial_{1} \Phi, \quad j_{1}=\frac{\delta S_{1+1}[A]}{\delta A_{1}}=-\frac{C_{1}}{2 \pi} \partial_{0} \Phi \tag{16.175}
\end{equation*}
$$

In a more compact form, the current $j^{\mu}=\left(j_{0}, j_{1}\right)$ is given by

$$
\begin{equation*}
j^{\mu}=\frac{\delta S_{1+1}[A]}{\delta A_{\mu}}=\frac{C_{1}}{2 \pi} \epsilon^{\mu \nu} \partial_{\nu} \Phi \tag{16.176}
\end{equation*}
$$

We now see that this result is essentially the same as the Goldstone-Wilczek formula, Eq. (16.128), provided that we identify the flux through the cylinder $\Phi$ with the (local) value of the chiral angle $\theta$. Qi, Hughes, and Zhang, who derived this result by means of a dimensional-reduction argument of the fermion Hamiltonian, argued (quite convincingly) that this result implies that we should identify the $\theta$ angle with the polarization of the 1 D insulator. In this language the quantization of the charge in 1D is the same as (or descends from) the quantization of flux in 2 D. Since the only values of the flux compatible with time-reversal invariance are $\Phi=0, \pi(\bmod 2 \pi)$ (in units of the flux quantum $\left.\phi_{0}=h c / e\right)$, the only allowed values of charge in 1 D are 0 and $1 / 2(\bmod 1)$, which is consistent with our previous conclusions.

Qi, Hughes, and Zhang generalized these results to higher-dimensional insulators. They began by considering a topological insulator in $d=4$ space dimensions. For the sake of argument, we can imagine a Wilson-fermion Hamiltonian for fourcomponent spinors on a 4D hypercubic lattice. The simplest model of this type has a one-particle Dirac Hamiltonian $h(\vec{k})=\sum_{i=a}^{5} h_{a}(\vec{k}) \cdot \Gamma_{a}$, which involves all five Dirac $\Gamma$ matrices, reflecting the broken time-reversal invariance of this insulator. Qi, Hughes, and Zhang noted that in systems of this type one can define a non-abelian Berry connection $\mathcal{A}_{i}^{\alpha \beta}(\vec{k})$ on the 4-torus $T^{4}$ of the 4D Brillouin zone, where $\alpha$ and $\beta$ run over the labels of the occupied bands (there are two occupied
bands in the present example), and $i=1, \ldots, 4$ are the four orthogonal coordinates of the 4D Brillouin zone. This non-abelian Berry connection is

$$
\begin{equation*}
\mathcal{A}_{i}^{\alpha \beta}(\vec{k})=-i\langle\alpha, \vec{k}| \partial_{k_{i}}|\beta, \vec{k}\rangle \tag{16.177}
\end{equation*}
$$

which for two occupied bands takes values in the algebra of the gauge group $\mathrm{SU}(2) \times \mathrm{U}(1)$. We can define the (non-abelian) field strength $\mathcal{F}_{i j}^{\alpha \beta}$,

$$
\begin{equation*}
\mathcal{F}_{i j}^{\alpha \beta}=-i\left[D_{i}, D_{j}\right]^{\alpha \beta}=\partial_{i} \mathcal{A}_{j}^{\alpha \beta}-\partial_{j} \mathcal{A}_{i}^{\alpha \beta}+i\left[\mathcal{A}_{i}, \mathcal{A}_{j}\right]^{\alpha \beta} \tag{16.178}
\end{equation*}
$$

where $\partial_{i}=\partial_{k_{i}}$ and $D_{i}$ is the covariant derivative in the adjoint representation of the gauge group $(\mathrm{SU}(2) \times \mathrm{U}(1)$ in the case at hand). In this system we can define a topological invariant called the second Chern number, $C_{2}$, which is given by

$$
\begin{equation*}
C_{2}=\frac{1}{32 \pi^{2}} \int_{\mathrm{BZ}} d^{4} k \epsilon^{i j k l} \operatorname{tr}\left[\mathcal{F}_{i j} \mathcal{F}_{k l}\right] \tag{16.179}
\end{equation*}
$$

On the other hand, given the five-component vector $\vec{h}(\vec{k})$ which defines the Hamiltonian, we can construct the five-component unit vector $\hat{h}(\vec{k})=\vec{h}(\vec{k}) /\|\vec{h}(\vec{k})\|$. This unit vector defines a mapping of the 4-torus $T^{4}$ (the Brillouin zone) into the 4 -sphere $S_{4}$. These mappings can be classified by the homotopy group $\pi_{4}\left(S_{4}\right)=\mathbb{Z}$ whose topological invariant is the Pontryagin index $\mathcal{Q}$,

$$
\begin{equation*}
\mathcal{Q}=\frac{3}{8 \pi^{2}} \int_{\mathrm{BZ}} d^{4} k \epsilon^{i j l m n} \hat{h}_{i}(\vec{k}) \partial_{k_{1}} \hat{h}_{j}(\vec{k}) \partial_{k_{2}} \hat{h}_{l}(\vec{k}) \partial_{k_{3}} \hat{h}_{m}(\vec{k}) \partial_{k_{4}} \hat{h}_{m}(\vec{k}) \tag{16.180}
\end{equation*}
$$

Exactly as in the 2D example we discussed before, the second Chern number $C_{2}$ is computed by the Pontryagin index $\mathcal{Q}$ of Eq. (16.180), i.e. $C_{2}=\mathcal{Q}$.

These results determine the form of the effective action for an external electromagnetic field $A_{\mu}$ (in (4+1) dimensions) for this 4D insulator. The effective action is a Chern-Simons term in $(4+1)$ dimensions,

$$
\begin{equation*}
S_{4+1}[A]=\frac{C_{2}}{24 \pi^{2}} \int d^{5} x \epsilon^{\mu \nu \lambda \rho \sigma} A_{\mu} \partial_{\nu} A_{\lambda} \partial_{\rho} A_{\sigma} \tag{16.181}
\end{equation*}
$$

This result was derived by QHZ (Qi et al., 2008) by computing the non-linear response to the external electromagnetic field, and is a generalization to 4D of the TKNN result that in 2D the Hall conductance is given by the first Chern number. This result was derived earlier on in the high-energy literature by Golterman and coworkers (Golterman et al., 1993), and in the reviews by Jansen (1996) and by Creutz (2001).

We can now proceed to reduce the dimensionality by one by compactifying one of the four directions of 4 D space, say $x_{4}$ (the fifth dimension of the space-time), into a circle $S_{1}$ of circumference $L_{4}$. The manifold now is $S_{1} \times S_{1} \times \mathbb{R}^{3}$. The effective action in the reduced dimension can be deduced by analogy with the arguments that
led to Eq. (16.174). By taking the compact direction to be very small, $L_{4} \rightarrow 0$, we find that the effective action in $(3+1)$ dimensions is

$$
\begin{equation*}
S_{3+1}[A]=\frac{C_{2}}{8 \pi^{2}} \int d^{4} x \Phi(x) \epsilon^{\mu \nu \lambda \rho} \partial_{\mu} A_{\nu} \partial_{\lambda} A_{\rho} \tag{16.182}
\end{equation*}
$$

where $\Phi=\oint d x_{4} A_{4}$ is the flux through the compactified fifth dimension. Naturally, this result can also be derived by direct calculation in $(3+1)$ dimensions.

We have thus reproduced the result of QHZ, Eq. (16.165), who further identified the $\theta$ angle, given here by the flux $\Phi$, with the local polarization (using the notation of QHZ)

$$
\begin{equation*}
P_{3}(\vec{x}, t)=\frac{1}{2 \pi} \Phi(\vec{x}, t) \tag{16.183}
\end{equation*}
$$

It is now straightforward to show that the 4 -current $j_{\mu}$ is given by

$$
\begin{equation*}
j_{\mu}=\frac{\delta S_{3+1}[A]}{\delta A^{\mu}}=\frac{C_{2}}{2 \pi} \epsilon_{\mu \nu \lambda \rho} \partial^{\nu} P_{3} \partial^{\lambda} A^{\rho} \tag{16.184}
\end{equation*}
$$

which is the same as the Callan-Harvey current, Eq. (16.167). Thus, this analysis also predicts the existence of the topological magneto-electric effect.

### 16.11 Topological insulators and interactions

In this chapter we have focused on the properties of insulating systems whose band structures have non-trivial topology. Since our discussion has been done entirely at the level of free-fermion systems, it is worthwhile to raise some important questions.
(a) The first question is whether, and to what extent, these topological properties, and their consequences, are stable if interactions between the electrons are included.
(b) A second important question is whether these topological properties can be the result of a phase transition in a trivial system into a state with non-trivial topology. In other words, can we have a topological Mott insulator?
(c) Finally, a third (but related) question is what is the relation, if any, between topological insulators and the topological phases that we discussed in depth in other chapters of this book?

We will now address the first of these questions: stability. The stability of topological insulators, and for that matter of all insulators, is guaranteed by the energy gap in the spectrum. We have already encountered this issue in other chapters of this book, e.g. the stability of the integer and fractional quantum Hall states in Chapters 12 and 13. Thus, the effects of interaction terms in the Hamiltonian
are suppressed at low energies since perturbation theory is convergent when the system has a gap, provided that the interactions are sufficiently local and the coupling constants are smaller than a non-universal critical value. This fact has been checked by exact diagonalization studies (Varney et al., 2010) in the quantum anomalous Hall state of the Haldane model on the honeycomb lattice for spinless fermions with a repulsive interaction $V$ between fermions on nearest-neighboring sites. Varney et al. found that the repulsive interaction tends to close the gap of the topological insulators and to favor a non-topological insulating Mott state in which the charge density is different on the two sublattices of the honeycomb lattice. This uniform state, which breaks the point-group symmetry of the honeycomb lattice spontaneously, is also the strong-coupling ground state if the time-reversal-symmetry-breaking terms are absent. In other words, in the strong-coupling regime the physics is local and insensitive with regard to the subtleties of the band structure which are relevant at weak coupling.

A similar effect was found in the quantum spin Hall regime of the Kane-MeleHubbard model. Quantum Monte Carlo simulations (Hohenadler et al., 2011, 2012; Zheng et al., 2011) found that the on-site Hubbard interaction with coupling constant $U$ does not affect the quantum spin Hall state, provided that it is smaller than a critical value set by the insulating gap. If the insulating gap of the quantum spin Hall state is increased, the system becomes more stable with respect to Hubbardtype perturbations. When the interactions begin to dominate, these simulations find quantum phase transitions to one of two Mott states, either a $\mathbb{Z}_{2}$ topological spin-liquid phase at intermediate couplings, similar to the ones we discussed in Chapter 9, or a quantum antiferromagnet in a Néel phase (typically at stronger coupling). However, the existence of these Mott states is unrelated to the physics of the topological insulator, since they are also found even if the non-interacting limit is not a topological insulator, see e.g. Meng et al. (2010). Nevertheless, the $\mathbb{Z}_{2}$ topological state seems to compete with the topological insulator since the size of the phase diagram it occupies shrinks (and disappears rapidly) as the strength of the Kane-Mele coupling increases. In contrast, although the threshold to the Néel antiferromagnetic phase is monotonically pushed to stronger couplings with increasing Kane-Mele coupling, it never disappears from the phase diagram.

In other words, the topological insulators that arise from free-fermion systems are stable. In fact, they are as stable as any other band insulator regardless of whether their bands are topological or trivial. This does not mean that topology does not matter. Indeed, unlike trivial insulators, topological insulators have gapless fermionic edge states that are protected.

Since the edge states are gapless, one may wonder whether they are stable with respect to interactions. In the case of 2 D topological insulators in the quantum
anomalous Hall state, the stability of their edge states is guaranteed by the fact that these states are chiral and interactions can lead only to finite renormalizations of the Fermi velocity, exactly as in the case of the integer and fractional quantum Hall states. In the case of the quantum spin Hall states, their stability is guaranteed by time-reversal invariance, which does not allow for mixing between spin-reversed states. Thus, in the quantum spin Hall state the edge states may become Luttinger liquids but will remain gapless, and are always present, provided that the bulk remains in a topological insulator phase. This is consistent with the general arguments on the topological protection and stability of the edge states (Qi et al., 2006a).

Let us now consider the stability of the edge states of $3 \mathrm{D} \mathbb{Z}_{2}$ topological insulators. As we saw earlier in this chapter, their edge states are 2D Weyl fermions that are confined to the surface of the insulator and are also protected, provided that the bulk has a gap of topological origin. Protection of the 2D Weyl fermions works in two ways. On the one hand, they live in $D=2+1$ dimensions. As we saw in Section 4.2.5, the action of relativistic free Dirac (or Weyl) fermions in $D>2$ space-time dimensions is a stable fixed point of the RG in a theory with only local four-fermion interactions (Wilson, 1973). This in fact would also be true if the bulk were not topological but had gapless edge states by virtue of an accidental fine-tuning of the Hamiltonian. Recall that the scaling dimension of a Dirac (and Weyl) fermion is $\Delta_{\psi}=(D-1) / 2$, where $D$ is the dimension of space-time. The scaling dimension of a local four-fermion interaction at the free Dirac fixed point is $\Delta_{4}=2(D-1)$. Hence, for all $D>2$ (space-time) dimensions, the scaling dimension $\Delta_{4}>D$. Hence the four-fermion operator is irrelevant for $D>2$ and the free (Dirac)-fermion fixed point is stable. This scaling argument also protects the Dirac semi-metal phase of single-layer graphene. Coulomb interactions, which are marginally irrelevant here too (as in graphene), cannot open a gap for similar reasons (unless the coupling is too strong).

However, the 2D Weyl-fermion surface states of $3 \mathrm{D} \mathbb{Z}_{2}$ insulators are protected also by the topological nature of the bulk. As we saw in Section 16.10, $3 \mathrm{D} \mathbb{Z}_{2}$ topological insulators have a bulk-edge correspondence in the form of the Callan-Harvey effect, which guarantees that the anomaly of the bulk is exactly compensated by the anomaly of the edge. Since the edge states have an anomaly, many possible interactions are not allowed, since they would violate the bulkedge correspondence. Thus, exactly as in the case of the quantum spin Hall state, time-reversal-invariant interactions can only renormalize the Fermi velocity of the Weyl fermions. Even if time-reversal invariance were broken explicitly, the irrelevance of local interactions would kick in and protect the Weyl surface states.

### 16.12 Topological Mott insulators and nematic phases

Our second question was whether a topological insulator could arise from a nontopological system as a result of a phase transition to a topological Mott insulator. This question was first addressed by Raghu et al. (2008), who considered two related problems. They (mainly) used mean-field theory (Hartree-Fock) in a system of spinless fermions on the honeycomb lattice with repulsive interactions $V_{1}$ and $V_{2}$ between nearest-neighbor and next-nearest-neighbor sites. In the weakcoupling limit this reduces to two species of Dirac fermions with local four-fermion interactions. Since, as we just saw, this interaction is irrelevant at weak coupling, all phase transitions are pushed to finite values of $V_{1}$ and $V_{2}$, presumably of the order of the bandwidth of the free fermions.
The main result of this work was that Raghu et al. found a competition between two phases. For $V_{1}$ larger than a critical value they found a state that they called a "charge-density-wave" (CDW) phase. It is actually a uniform state with intra-unit-cell charge order that breaks spontaneously the point-group symmetry of the honeycomb lattice by an unequal occupation of the two sublattices. This is a nontopological Mott insulator and can be pictured as two Dirac (Weyl) fermions with mass gaps of opposite sign or, equivalently, with opposite 2D parities.

On the other hand, for $V_{2}$ larger than a critical value they found a phase with a dynamically generated quantum anomalous Hall phase. This phase is characterized by the development of a complex expectation value of a next-nearest-neighbor fermion bilinear $\left\langle c_{\mathrm{A}}(\vec{r})^{\dagger} c_{\mathrm{A}}\left(\vec{r}+\vec{a}_{i}\right)\right\rangle$. In other words, the phase with a spontaneous quantum anomalous Hall phase appears when a Haldane term is generated dynamically. This state can be pictured as two Dirac fermions with masses with the same sign and hence with a spontaneously broken time-reversal invariance. In other words, this state has spontaneous circulating currents.
Raghu et al. also found a direct (first-order) transition between the nontopological charge-ordered Mott insulator and the spontaneous quantum anomalous Hall state merging at a bicritical point where $V_{1} \sim V_{2}$. They checked this result using an RG analysis, which is reliable only in the weak-coupling regime. They also considered a graphene system with spin- $1 / 2$ fermions. In this case, in addition to the nearest- and next-nearest-neighbor interactions, $V_{1}$ and $V_{2}$, they also included the on-site repulsive Hubbard $U$ term. In addition to the CDW, spontaneous quantum anomalous Hall, and semi-metal phases of the spinless case, they now also found a Néel phase, or spin-density wave (SDW), and a phase with a spontaneous quantum spin Hall state. The latter state is a time-reversalinvariant phase characterized by an expectation value of the Kane-Mele term. This is a time-reversal-invariant insulating uniform phase that breaks spontaneously the $\mathrm{SU}(2)$ spin symmetry. It should be noted that their mean-field theory (not
surprisingly!) did not find a $\mathbb{Z}_{2}$ spin liquid that is seen in Monte Carlo simulations for $V_{1}=V_{2}=0$ (Meng et al., 2010).

The interesting results of Raghu and coworkers (Raghu et al., 2008) have the drawback of relying on approximations that can be trusted only in the weakcoupling regime. In fact, while the conventional Mott states, namely the CDW phase and three Néel phases, are easily obtained in the strong-coupling limits of large $V_{1}$ or large $U$, the existence of topological phases is far from clear in the regime of very large $V_{2}$. One may wonder whether there are perhaps other systems in which the topological phases appear in the weak-coupling regime and the phases with obvious types of broken symmetry appear in the strong-coupling regime.

The way around the problem we just discussed is to change the band structure so that the four-fermion operators become marginal. This approach was taken by Sun and coworkers (Sun et al., 2009), whose work we will follow here. Let us suppose that we have a system in which the single-particle kinetic energy scales as $L^{-2}$, instead of as $L^{-1}$ in the Dirac theory. This would happen if instead of a linear band crossing we had a system with a quadratic band crossing. In such a system time will have to scale as $L^{z}$, where $z$ is the dynamic critical exponent. Since the fermion operators must still satisfy canonical anticommutation relations, the fermion action must be linear in time derivatives. Since it is also quadratic in the space derivatives, this fixes the dynamic exponent $z=2$. On the other hand, the free-fermion action is a bilinear in the fermionic fields. Hence, if the system is in $d=2$ space dimensions, the scaling dimension of the fermionic field is $\Delta=z / 2=1$. From here it follows that the scaling dimension of all four-fermion operators is $\Delta_{4}=4 \Delta=4$, which happens to be equal to $d+z=4$. Hence this naive scaling, which is correct for a free field, implies that in a system with these scaling properties the four-fermion interactions are marginal, and one has a chance to obtain non-trivial condensates that are accessible by means of a perturbative RG. Or, equivalently, it implies that the new phases result from infinitesimal instabilities.

The catch in this argument is that, unlike linear band crossings, which are generic and are described by a theory of relativistic Dirac fermions, in general quadratic band crossings are accidental degeneracies that require two parameters to be simultaneously tuned to zero. Such accidental degeneracies can be lifted by the addition of an arbitrarily small parameter without violating any symmetries. The way out of this problem is to find a symmetry-protected quadratic band crossing. The key to this question is for the crossing to have a non-trivial Berry phase. Let $|\psi(\vec{k})\rangle$ be a two-component spinor state defined on each point $\vec{k}$ of the Brillouin zone. The Berry connection is $\mathcal{A}_{i}[\vec{k}]=-i\langle\psi(\vec{k})| \partial_{k_{i}}|\psi(\vec{k})\rangle$. Let $\Gamma$ be a closed path on the Brillouin zone. The Berry flux is (see Chapter 12 and Section 16.2)

$$
\begin{equation*}
\Phi_{\Gamma}=-i \oint_{\Gamma} d \vec{k} \cdot\langle\psi(\vec{k})| \partial_{\vec{k}}|\psi(\vec{k})\rangle \tag{16.185}
\end{equation*}
$$

The Berry flux can be non-zero only if the spinors have a singularity at some point $\vec{k}_{0}$ of the Brillouin zone. If the closed path $\Gamma$ does not enclose a singularity, the Berry flux must vanish. If the spinors have a singularity at $\vec{k}_{0}$ then the Berry flux will not vanish for all paths $\Gamma$ that enclose $\vec{k}_{0}$. If the system is further assumed to be time-reversal-invariant then the Berry flux can only be $\Phi_{\Gamma}=n \pi$. We saw before that lattice systems have a special set of momenta for which the Hamiltonian is invariant under time reversal. We called them the time-reversal-invariant momenta. Let us consider a case in which the band crossing occurs at a time-reversal-invariant momentum $\vec{k}_{0}$.

In a system of massless two-component Dirac (Weyl) fermions, the Berry flux is $\pm \pi$. In such a system we cannot open a gap unless time-reversal invariance is broken, since with the extra operator all three Pauli matrices enter into the Hamiltonian. This is the path we followed to discuss the quantum anomalous Hall state. A time-reversal-invariant system with a quadratic band crossing at a time-reversalinvariant point $\vec{k}_{0}$ has a Berry flux that is twice as large, $\Phi_{\Gamma}=2 n \pi$. If the integer is $n=0$ there is no singularity and the quadratic band crossing can be removed without breaking any symmetry. However, if the Berry flux is $\pm 2 \pi$ the quadratic band crossing is protected by time-reversal invariance and cannot be removed without breaking time-reversal invariance.

On the other hand, one can imagine adding operators that "split" (in momentum space) the quadratic band crossing with Berry phase $+2 \pi$ into two Dirac "cones," each with Berry phase $+\pi$. However, such a splitting of the quadratic crossing breaks rotational invariance and makes the system anisotropic. We will see below an example on a square lattice, whose point-group symmetry is $C_{4}$, the symmetry group of the square. In that case, the splitting would amount to the spontaneous breaking of the four-fold $C_{4}$ rotational symmetry down to a two-fold symmetry $C_{2}$ (of rotations by $\pi$ ). We will say that a system with a spontaneous breaking of rotational invariance is in an electronic nematic state (or quantum nematic state), as in the case of nematic liquid crystals (de Gennes and Prost, 1993; Chaikin and Lubensky, 1995). This state would be an example of an electronic liquid-crystal phase (Kivelson et al., 1998). Since the broken symmetry is $\mathbb{Z}_{2}$, this state should be called an "Ising nematic." Below we will give a specific example in which the topological Mott insulator competes with an electronic nematic phase (which here is a semi-metal).

There are many examples of electronic systems that have nematic phases of purely quantum-mechanical origin, such as several high- $T_{\mathrm{c}}$ superconductors, including $\mathrm{YBa}_{2} \mathrm{Cu}_{3} \mathrm{O}_{6+x}$ in much of its "pseudogap" regime, 2D electron gases in the second Landau level (Lilly et al., 1999) (near the center of the Landau level, where the quantum Hall effect is not seen), the bilayer material $\mathrm{Sr}_{3} \mathrm{Ru}_{2} \mathrm{O}_{7}$ in magnetic fields (Borzi et al., 2007), and the "hidden-order" phase of the heavy-fermion
superconductor $\mathrm{URu}_{2} \mathrm{Si}_{2}$. For reasons of space the theory of quantum electronic liquid crystals will not be discussed in this book. A review of the experimental evidence for electronic nematic states and of the theory can be found in Fradkin et al. (2010).

The main difference between these quantum nematic states and their classical cousins is that, while in the latter the constituent degrees of freedom are rodlike molecules ("nematogens"), in the electronic system the constituent degrees of freedom are point particles, electrons! In the electronic case the formation of an anisotropic phase is a result of several possible quantum-mechanical mechanisms, such as the lifting of a high-order degeneracy (as in the quadratic band crossing), the spontaneous distortion of the Fermi surface of a Fermi liquid (the Pomeranchuk instability) (Oganesyan et al., 2001), the spontaneous ordering of "orbital" degrees of freedom, or the quantum-mechanical melting of a stripe phase (a unidirectional CDW) (Kivelson et al., 1998).

Another example with a quadratic band crossing is bilayer graphene. Bilayer graphene is a system of two layers of carbon atoms, with each layer arranged on a honeycomb lattice and stacked in such a way that one sublattice is right on top of the other (Castro Neto et al., 2009). This arrangement is called a Bernal stacking. There is a small tunneling-matrix element for the electrons in one layer to tunnel to the electronic states in the other layer (and vice versa).

The particular features of the Bernal stacking cause the Dirac spectrum of singlelayer graphene to be replaced by a quadratic band crossing at the same points of the Brillouin zone, K and $\mathrm{K}^{*}$. In this case this is an accidental degeneracy, since in principle it is possible to have a term in the Hamiltonian that lifts the quadratic crossing. In bilayer graphene with Bernal stacking this term is caused by a trigonal warping of the crystal structure, which is compatible with the symmetries of bilayer graphene. The trigonal warping term does indeed split each of the quadratic crossings (with Berry flux $2 \pi$ ) into three Dirac cones (each with Berry flux $+\pi$ ) away from the K and $\mathrm{K}^{*}$ points and another Dirac cone with Berry flux $-\pi$. However, although the quadratic crossing in bilayer graphene is not protected by symmetry, it is protected by accident (or by carbon!) since the trigonal warping term is three orders of magnitude smaller than all other terms in the Hamiltonian. So, for all practical purposes it can be ignored. Consequently, many aspects of the theory that we will now discuss also apply in practice for the case of bilayer graphene and, not surprisingly, many of these ideas have also been discussed in that context (Nandkishore and Levitov, 2010; Vafek, 2010; Vafek and Yang, 2010).

Sun and coworkers (Sun et al., 2009) showed that topological insulators (as well as nematic phases) can arise dynamically within a weak-coupling theory by considering a system of fermions (with and without spin) with a symmetry-protected quadratic band crossing. An example of such a system is a half-filled checkerboard
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-758.jpg?height=514&width=518&top_left_y=197&top_left_x=603)

Figure 16.10 The checkerboard lattice is a 2D lattice with corner-sharing tetrahedra, a 2D version of the pyrochlore lattice. The hopping-matrix elements are $t$ along the diagonals, $t_{1}^{\prime}$ along the horizontal and vertical full lines, and $t_{2}^{\prime}$ along the horizontal and vertical broken lines.
lattice, as shown in Fig. 16.10. This lattice can be regarded as a 2D version of the 3D pyrochlore lattice, a lattice of corner-sharing tetrahedra. This is also the lattice of the oxygen sites in the strong-coupling limit of the Emery model for the copper-oxide plane of the high-temperature superconductors (Kivelson et al., 2004; Sun and Fradkin, 2008). (The half-filled case which we will discuss below is not physically meaningful for the copper oxides.)

Before discussing the specific aspects of the lattice model, it is useful to write down a theory of interacting fermions with symmetry-protected quadratic band crossing. Let $\Psi(\vec{r})=\left(\psi_{1}(\vec{r}), \psi_{2}(\vec{r})\right)^{\mathrm{T}}$ be a two-component Fermi field, with or without spin (below the two components will correspond to the sublattice labels), whose low-energy Hamiltonian is

$$
\begin{equation*}
H=\int d \vec{r}\left[\Psi^{\dagger}(\vec{r}) \mathcal{H}_{0} \Psi(\vec{r})+u \psi_{1}^{\dagger}(\mathbf{r}) \psi_{1}(\mathbf{r}) \psi_{2}^{\dagger}(\mathbf{r}) \psi_{2}(\mathbf{r})\right] \tag{16.186}
\end{equation*}
$$

where $\mathcal{H}_{0}$ is the one-particle Hamiltonian for a quadratic band crossing and $u$ is a coupling constant. In momentum space $\mathcal{H}_{0}(\vec{k})$ is

$$
\begin{equation*}
\mathcal{H}_{0}(\mathbf{k})=d_{\mathrm{I}} \mathbb{I}+d_{x} \sigma_{1}+d_{z} \sigma_{3} \tag{16.187}
\end{equation*}
$$

where, as before, $\mathbb{I}$ is the $2 \times 2$ identity matrix and $\sigma_{x}$ and $\sigma_{z}$ are the corresponding Pauli matrices. The coefficients are

$$
\begin{equation*}
d_{\mathrm{I}}=t_{\mathrm{I}}\left(k_{x}^{2}+k_{y}^{2}\right), \quad d_{x}=2 t_{x} k_{x} k_{y}, \quad d_{z}=t_{z}\left(k_{x}^{2}-k_{y}^{2}\right) \tag{16.188}
\end{equation*}
$$

With this "d-wave" (quadrupolar) structure the Berry flux associated with the quadratic band crossing is $2 \pi$ (or $-2 \pi$ depending on the relative signs). If $\left|t_{x}\right|=$
$\left|t_{z}\right|$ the system is rotationally invariant in this continuum approximation and has $C_{6}$ point-group symmetry in the case of a lattice system. This effective Hamiltonian manifestly exhibits the $z=2$ scaling we discussed above. The term proportional to the identity matrix breaks the particle-hole symmetry of this theory. This term is not very important, provided that the parameters of the theory are such that the upper band lies entirely above the lower band, and never crosses the Fermi energy, which we will set to be at zero. Below we will see that in specific lattice models this condition can easily be satisfied. Unless we state the contrary, in what follows we will work with a particle-hole-symmetric theory.

Let us discuss briefly some aspects of the free-fermion system. For simplicity we will take the system to have maximal symmetry and set $\left|t_{x}\right|=\left|t_{y}\right|=t$. The free-fermion theory has the same matrix structure as the relativistic Dirac fermion except that it has dynamic critical exponent $z=2$, and is not relativistically invariant. In Chapter 9 we discussed the quantum Lifshitz model, which is a free scalar field with $z=2$. We will now see that the quadratic band-crossing system is closely related to the quantum Lifshitz model. Let us write the $(2+1)$-dimensional massless Dirac operator in its covariant form $i \not \partial=i \gamma^{\mu} \partial_{\mu}$, where we will take the Dirac gamma matrices to be $\gamma_{0}=\sigma_{2}, \gamma_{1}=-i \sigma_{3}$, and $\gamma_{2}=i \sigma_{1}$. From the algebra of the gamma matrices it follows that the square of the Dirac operator is simply the d'Alembertian,

$$
\begin{equation*}
(i \not \partial)^{2}=-\partial^{2} \tag{16.189}
\end{equation*}
$$

Likewise, from the form of the Hamiltonian of the quadratic band crossing, Eq. (16.187), we see that we can write a $z=2$ version of the Dirac operator in the "covariant" form $i \gamma^{\mu} D_{\mu}$ (here $D_{\mu}$ is not the covariant derivative!) with the same gamma matrices but with $D_{0}=\partial_{0}, D_{1}=t\left(\partial_{x}^{2}-\partial_{y}^{2}\right)$, and $D_{2}=2 t \partial_{x} \partial_{y}$. The square of the $z=2$ "Dirac" operator is

$$
\begin{equation*}
\left(i \gamma^{\mu} D_{\mu}\right)^{2}=-\partial_{0}^{2}+t^{2}\left(\nabla^{2}\right)^{2} \tag{16.190}
\end{equation*}
$$

which we recognize as the $z=2$ version of the d'Alembertian, the differential operator that enters in the action of the quantum Lifshitz model, Eq. (9.161), after setting $t=\kappa$.

Let us now return to the interacting Hamiltonian, Eq. (16.186), and use the RG to see what the effects of the interactions are. The parameter $g=u /\left|t_{x}\right|$ plays the role of the dimensionless coupling constant of this problem, and at the treelevel (i.e. without computing quantum corrections) the four-fermion operator is marginal. Hence, at this level, this theory seems entirely analogous to the theory of the Luttinger liquid of Chapter 6, and the four-fermion interaction looks like the backscattering term in the 1DEG. So one is tempted to guess that here too this superficially marginal operator may remain exactly marginal to all orders in
perturbation theory. However, this guess is incorrect. In $(1+1)$ dimensions the exact marginality of the backscattering interaction is due to the exact cancellation of the bubble diagram against the Cooper channel. This is true at one-loop level and to all orders in perturbation theory. However, this cancellation does not happen in the case of the Hamiltonian of Eq. (16.186). As a result, not only is the beta function for the coupling constant $g$ not zero but already at one-loop level it is given by (Sun et al., 2009)

$$
\begin{equation*}
\beta(g)=\frac{\partial g}{\partial l}=A g^{2}+O\left(g^{3}\right) \tag{16.191}
\end{equation*}
$$

where $l=\ln a$ and $a$ is the short-distance cutoff. The coefficient $A$ is a finite positive function of the ratio $\lambda=t_{z} / t_{x}$ and is given by

$$
\begin{equation*}
A(\lambda)=\frac{1}{2 \pi^{2}} K\left(\sqrt{1-\lambda^{2}}\right) \tag{16.192}
\end{equation*}
$$

where $K(x)$ is the complete elliptic integral

$$
\begin{equation*}
K(x)=\int_{0}^{\pi / 2} \frac{d \theta}{\left(1-x^{2} \sin ^{2} \theta\right)^{1 / 2}} \tag{16.193}
\end{equation*}
$$

where $x=\sqrt{1-\lambda^{2}}$. For the special case of a system with $C_{6}$ symmetry, $\left|t_{x}\right|=\left|t_{z}\right|$ (and hence $\lambda=1$ ), the coefficient is $A(1)=1 /(4 \pi)$. This result for the beta function means that the four-fermion interaction is a marginally relevant operator and the effective coupling constant $g>0$ flows to strong coupling at low energies. This means that the free-fermion ground state of a theory of gapless fermions with a quadratic band crossing is unstable in two space dimensions. To find out what results from this instability one has to know the nature of the stable fixed point to which the RG flow is converging. This cannot be determined in perturbation theory.

To explore the consequences of this instability, we need to investigate using mean-field theory the possible condensates of order parameters expressed in terms of fermion bilinears. In this system they are

$$
\begin{equation*}
\Phi=\left\langle\Psi^{\dagger}(\vec{r}) \sigma_{y} \Psi(\vec{r})\right\rangle, \quad Q_{1}=\left\langle\Psi^{\dagger}(\vec{r}) \sigma_{z} \Psi(\vec{r})\right\rangle, \quad Q_{2}=\left\langle\Psi^{\dagger}(\vec{r}) \sigma_{x} \Psi(\vec{r})\right\rangle \tag{16.194}
\end{equation*}
$$

Here $\Phi$ is the order parameter of a time-reversal-symmetry-breaking gapped phase with a spontaneous quantum anomalous-Hall-state phase. This phase has a zerofield quantized Hall conductivity $\sigma_{x y}=e^{2} / h$. Notice that this is an integer quantum Hall state. This phase is a time-reversal-symmetry-breaking topological Mott insulator similar to the one proposed by Raghu and collaborators (Raghu et al., 2008). The order parameters $Q_{1}$ and $Q_{2}$ describe the nematic phases in which the $C_{4}$ or $C_{6}$ rotational symmetry is broken down to $C_{2}$ by splitting the quadratic band crossing into two types of Dirac points located along the direction of one of the main axes
$\left(Q_{1}\right)$, or along a diagonal $\left(Q_{2}\right)$. The nematic phase is an anisotropic semi-metal. However, unlike in graphene, where the two Dirac points have Berry fluxes $\pi$ and $-\pi$, in this nematic phase the two types of Dirac points have the same Berry flux. In addition, there is also a phase in which the nematic ( $Q_{1} \neq 0$ or $Q_{2} \neq 0$ ) and the quantum anomalous Hall orders $(\Phi \neq 0)$ coexist. This phase is a nematic integer quantum Hall state.

Since there is only one coupling constant, denoted by $u$ in Eq. (16.186), the weak-coupling ordering tendencies are determined by the logarithmically divergent normal-state susceptibilities $\chi_{\Phi}$, for broken time-reversal invariance, and $\chi_{Q_{1}}$ and $\chi_{Q_{2}}$, for the two nematic order parameters. For general $t_{x}$ and $t_{z}$, they can be shown to satisfy the identity $\chi_{\Phi}=\chi_{Q_{1}}+\chi_{Q_{2}}$. Therefore, $\chi_{\Phi}>\chi_{Q_{i}}(i=1,2)$, so the leading weak-coupling instability is with respect to the gapped quantum anomalous Hall state (here we are assuming that all processes have the same coupling constant).

The mean-field Hamiltonian is

$$
\begin{align*}
H_{\mathrm{MF}}= & \int d \vec{r} \Psi^{\dagger}(\vec{r})\left[\mathcal{H}_{0}-\frac{u}{2}\left(Q_{1} \sigma_{z}+Q_{2} \sigma_{x}+\Phi \sigma_{y}\right)\right] \Psi(\vec{r}) \\
& +\frac{V}{4} \int d \vec{r}\left(Q_{1}^{2}+Q_{2}^{2}+\Phi^{2}\right) \tag{16.195}
\end{align*}
$$

By minimizing the ground-state energy of $H_{\mathrm{MF}}$ we find that at weak coupling the ground state is indeed the spontaneous quantum anomalous Hall phase, with a gap $\Delta \sim \Lambda \exp (-2 /(\alpha g))$ (where $\Lambda$ is a cutoff) and a mean-field critical temperature $T_{\mathrm{c}} \sim \Delta$, which is consistent with the scaling predicted by the RG. This mean-field theory also predicts nematic phases, provided that (marginally) irrelevant operators, such as $\int d \vec{r} d \vec{r}^{\prime} \sum_{i=1,2} U\left(\mathbf{r}-\mathbf{r}^{\prime}\right) \psi_{i}^{\dagger}(\vec{r}) \psi_{i}(\vec{r}) \psi_{i}^{\dagger}\left(\vec{r}^{\prime}\right) \psi_{i}\left(\vec{r}^{\prime}\right)$, are also included. The nematic phase $Q_{1}$ is energetically favored at small $V>0$ and $U<0$ if $|U / V|$ is large enough. As $|U / V|$ is reduced, the nematic phase gives way to the quantum anomalous Hall phase (and to a mixed phase).

Sun and coworkers (Sun et al., 2009) found a relatively simple lattice model that exhibits these behaviors. They considered a system of fermions at half-filling (both spinless and spin-1/2) on the checkerboard lattice shown in Fig. 16.10, with Hamiltonian

$$
\begin{equation*}
H=-\sum_{\vec{r}, \vec{r}^{\prime}} t_{\vec{r}, \vec{r}^{\prime}} c^{\dagger}(\vec{r}) c\left(\vec{r}^{\prime}\right)+\sum_{\vec{r}, \vec{r}^{\prime}} V_{\vec{r}, \vec{r}^{\prime}} c^{\dagger}(\vec{r}) c(\vec{r}) c^{\dagger}\left(\vec{r}^{\prime}\right) c\left(\vec{r}^{\prime}\right) \tag{16.196}
\end{equation*}
$$

It is a square lattice (rotated by $45^{\circ}$ ) with hopping-matrix element $t$ for hopping between nearest neighbors, $t_{1}^{\prime}$ for hopping between next-nearest neighbors on half of the plaquettes that share only vertices, and $t_{2}^{\prime}$ for hopping between the next-nearest neighbors on the remaining plaquettes. We will always assume that
$t_{1}^{\prime} \gg t_{2}^{\prime}$. The half-filled system has special properties. Many of the same properties are found on the kagome lattice at one-third filling. The interactions will be taken to be repulsive for nearest neighbors, $V>0$. A next-nearest-neighbor attraction $V_{\mathrm{nnn}}<0$ generates the marginally irrelevant operator discussed above.

Let A and B be the two sublattices of the square lattice and let $\psi_{\mathrm{A}}(\vec{r})$ and $\psi_{\mathrm{B}}(\vec{r})$ be the Fermi fields on sites of the two sublattices. We will consider the spinless case first. The free-fermion term of the Hamiltonian in momentum space has the usual two-band form

$$
\begin{equation*}
H_{0}=\int_{\mathrm{BZ}} \frac{d^{2} p}{(2 \pi)^{2}} \Psi^{\dagger}(\vec{p})\left[h_{\mathrm{I}}(\vec{p}) \mathcal{I}+\vec{h}(\vec{p}) \cdot \vec{\sigma}\right] \Psi(\vec{p}) \tag{16.197}
\end{equation*}
$$

where $\Psi(\vec{p})=\left(\psi_{\mathrm{A}}(\vec{p}), \psi_{\mathrm{B}}(\vec{p})\right)^{\mathrm{T}}$ is a two-component spinor to account for the two sublattices, $\vec{\sigma}=\left(\sigma_{1}, \sigma_{2}, \sigma_{3}\right)$ is a three-component vector of the three Pauli matrices, and $\mathcal{I}$ is the identity matrix. The momentum $\vec{p}$ takes values on the first Brillouin zone of the square lattice. For the problem at hand the components of the vector $\vec{h}(\vec{p})$ are

$$
\begin{align*}
& h_{1}(\vec{p})=-4 t \cos \left(\frac{p_{x}}{2}\right) \cos \left(\frac{p_{y}}{2}\right) \\
& h_{2}(\vec{p})=0  \tag{16.198}\\
& h_{3}(\vec{p})=-\left(t_{1}^{\prime}-t_{2}^{\prime}\right)\left(\cos p_{x}-\cos p_{y}\right)
\end{align*}
$$

and $h_{\mathrm{I}}(\vec{p})=-\left(t_{1}^{\prime}+t_{2}^{\prime}\right)\left(\cos p_{x}+\cos p_{y}\right)$. The condition $h_{2}(\vec{p})=0$ follows from time-reversal invariance. The energy eigenvalues $E_{ \pm}(\vec{p})$ are

$$
\begin{align*}
E_{ \pm}(\vec{p})= & -\left(t_{1}^{\prime}+t_{2}^{\prime}\right)\left(\cos p_{x}+\cos p_{y}\right) \\
& \pm \sqrt{\left(4 t \cos \left(\frac{p_{x}}{2}\right) \cos \left(\frac{p_{y}}{2}\right)\right)^{2}+\left(\left(t_{1}^{\prime}-t_{2}^{\prime}\right)\left(\cos p_{x}-\cos p_{y}\right)\right)^{2}} \tag{16.199}
\end{align*}
$$

Provided that, on the first Brillouin zone, the minimum of $E_{+}(\vec{p})$ is greater than the maximum of $E_{-}(\vec{p})$, the ground state at half-filling of this free-fermion system has the states of the - band occupied and the states of the + band empty. We can choose the parameters for this to be the case.

This system has a band crossing at the zeros of the square-root term in Eq. (16.199), $\vec{p}_{0}=(\pi, \pi)$ (up to reciprocal-lattice vectors). It will be important to what follows that $(\pi, \pi)$ is the only crossing point, which is also a time-reversalinvariant momentum, and that the bands are analytic functions of the momenta everywhere else on the first Brillouin zone. However, unlike the cases we discussed before in this chapter, the dispersion near $(\pi, \pi)$ has a quadratic dependence on the momentum (measured from $(\pi, \pi)$ ), instead of a linear dependence. Thus these spinors are not Dirac fermions. If we put $\vec{q}=\vec{p}-(\pi, \pi)$, the effective one-particle

Hamiltonian near the crossing point is a $2 \times 2$ matrix of the form of Eq. (16.187). The parameters of the continuum Hamiltonian (near the quadratic band crossing) are $t_{I}=\left(t^{\prime}+t^{\prime \prime}\right) / 2, t_{x}=t / 2$, and $t_{z}=\left(t^{\prime}-t^{\prime \prime}\right) / 2$.

The order parameters for the lattice model are

$$
\begin{align*}
Q_{1} & =\frac{1}{4} \sum_{\vec{\delta}}\left\langle c_{\mathrm{A}}^{\dagger}(\vec{r}) c_{\mathrm{A}}(\vec{r})-c_{\mathrm{B}}^{\dagger}(\vec{r}+\vec{\delta}) c_{\mathrm{B}}(\vec{r}+\vec{\delta})\right\rangle \\
Q_{2} & =\frac{1}{2} \sum_{\vec{\delta}} D_{\vec{\delta}} \operatorname{Re}\left\langle c_{\mathrm{A}}^{\dagger}(\vec{r}) c_{\mathrm{B}}(\vec{r}+\vec{\delta})\right\rangle  \tag{16.200}\\
\Phi & =\frac{1}{2} \sum_{\vec{\delta}} D_{\vec{\delta}} \operatorname{Im}\left\langle c_{\mathrm{A}}^{\dagger}(\vec{r}) c_{\mathrm{B}}(\vec{r}+\vec{\delta})\right\rangle
\end{align*}
$$

where $Q_{1}$ is the "site-nematic" order parameter, $Q_{2}$ is the "bond-nematic" order parameter, and $\Phi$ is the quantum anomalous Hall order parameter. Here $\vec{\delta}= \pm \hat{x} / 2 \pm \hat{y} / 2$ connects nearest neighbors, $D_{\vec{\delta}}= \pm 1, D_{ \pm(\hat{x} / 2+\hat{y} / 2)}=1$, and $D_{ \pm(\hat{x} / 2-\hat{y} / 2)}=-1$.

The details of the phase diagram found in mean-field theory depend on the parameters of this model (which has many!). A quantum anomalous Hall phase is found for $V$ small and below a critical temperature. This phase has a zero-field quantized Hall conductivity $e^{2} / h$, and the quasiparticle spectrum has topologically protected chiral edge states, as predicted from general considerations (Qi et al., 2006a). A site nematic is found for $V \sim\left|t_{1}^{\prime}-t_{2}^{\prime}\right|$, while the bond nematic is not favored. For $\left|t_{1}^{\prime}\right| \geq\left|t_{2}^{\prime}\right|$ and $\left|t^{\prime \prime}\right| /\left|t^{\prime}\right| \ll 1$, there is a direct nematic-quantum-anomalous-Hall first-order phase transition. If $\left|t^{\prime \prime}\right| /\left|t^{\prime}\right| \sim 1$, there is also a phase with coexisting quantum anomalous Hall and nematic orders. For other values, one has a direct first-order transition and a coexisting phase.

In summary, if a system has a quadratic band crossing, interaction effects lead to a phase diagram in which the topological insulator appears as a result of repulsive interactions and is a topological Mott insulator. In the spinless case we discussed above, the topological insulator is a state with a spontaneous quantum Hall effect and the other phases are two types of nematic states. If spin is included, in addition to the spin-polarized version of the phases we just discussed, one has also a phase with a spontaneous quantum spin Hall state and phases with spin-triplet versions of the nematic order parameters (Sun et al., 2009). Analogs of these phases can also exist in metallic states (i.e. systems with a Fermi surface) (Wu et al., 2007; Sun and Fradkin, 2008).

### 16.13 Topological insulators and topological phases

We will now come to the third, and most subtle, of our three questions: what is the relation, if any, between topological insulators and topological phases? As we
noted at the beginning of this chapter, topological insulators are states with topologically protected properties but are not topological phases. However, they may be a "springboard" from which to access a topological phase. This can happen in several possible ways.

One possibility is that the topological insulator may become a topological phase, for instance by moving the Fermi energy away from the gap, and that this system may become unstable. For example, the doped topological insulator (which is now a metal with an "interesting" band structure) can become a superconductor. In Section 14.9 we showed that, at least in two dimensions, a superconductor with an order parameter with symmetry $p_{x}+i p_{y}$ is topological, which is a state in which time-reversal invariance is spontaneously broken. In this sense this is a superconducting cousin of a quantum anomalous Hall state. This state is believed to occur in $\mathrm{Sr}_{2} \mathrm{RuO}_{4}$. We have already discussed this state in Chapter 14, where we also discussed its connection with the non-abelian Moore-Read fractional quantum Hall state. There we saw that both condensed states have half-vortices with non-abelian braiding statistics whose origin was traced to the existence of Majorana zero modes in the vortex cores.

This observation motivated Fu and Kane (2008) to ask whether something similar could happen in a superconducting state of a topological insulator. They considered a strong 3D time-reversal-invariant topological insulator in contact with a 3D conventional s-wave superconductor. Since the topological insulator has a gap, the effects of the s-wave superconductor will matter only near their interface. On the other hand, the surface of the strong topological insulator supports gapless Weyl fermions. These surface excitations are charged and hence will couple to the nearby superconductor by a proximity effect.

Here we will follow the work of Fu and Kane (2008). Their argument goes as follows. We will consider only the Weyl fermions at the top surface of a time-reversal-invariant $\mathbb{Z}_{2}$ (strong) topological insulator. The Weyl fermions are described by a two-component spinor field $\psi=\left(\psi_{\uparrow}, \psi_{\downarrow}\right)^{\mathrm{T}}$ with a free gapless fermion 2D Hamiltonian density

$$
\begin{equation*}
\mathcal{H}_{0}=\psi^{\dagger}\left(-i v_{\mathrm{F}} \vec{\sigma} \cdot \vec{\nabla}-\mu\right) \psi \tag{16.201}
\end{equation*}
$$

where $\vec{\sigma}=\left(\sigma_{x}, \sigma_{y}\right)$ and $\mu$ is the chemical potential. Let us imagine now that a standard s-wave superconductor is deposited on the top surface. The superconductor is a ground state of an electronic system with a spontaneously broken $\mathrm{U}(1)$ global symmetry. The superconducting state exists if the pair-field operator $c_{\uparrow}^{\dagger}(\vec{k}) c_{\downarrow}^{\dagger}(-\vec{k})$ has a non-vanishing expectation value or, equivalently, if its real-space counterpart exhibits long-range order. The expectation value of the pair field is the local order parameter of the superconducting state and, if the superconducting state is uniform, it is a condensate of spin-singlet Cooper pairs with total momentum
zero. As in Chapter 14, we will denote the superconducting order parameter by $\Delta=\Delta_{0} e^{i \phi}$. In the case of an s-wave superconductor, the fermionic excitations, which are charge-neutral, have an isotropic energy gap of magnitude $\Delta_{0}$.

Since the superconductor has a finite gap $\Delta_{0}$, electrons from another system cannot tunnel into the superconductor unless their energy is larger than $\Delta_{0}$. On the other hand, pairs of electrons can tunnel into the superconductor since they have a finite amplitude to become part of the superconducting pair condensate. Thus, when a superconductor is placed next to a nearby electronic system, spin-singlet pairs of electrons with total momentum zero can tunnel into the superconductor and, similarly, spin-singlet pairs of electrons of the superconductor can tunnel into the Weyl-fermion surface states. By this mechanism, known as the superconducting proximity effect, the electrons of the nearby system themselves become superconducting. This process cannot affect the bulk states of the nearby system, but affects only those states which are sufficiently close to the superconductor, a distance that typically is of the order of the superconducting coherence length $\xi_{0}$. If the nearby system is a topological insulator, its bulk states cannot become superconducting. However, its surface states can become superconducting since they are gapless and confined to the surface.

The proximity-effect coupling we have just discussed is described by an extra term of the Hamiltonian that describes the spin-singlet Cooper-pair tunneling process (Schrieffer, 1964; de Gennes, 1966), which has the form

$$
\begin{equation*}
\mathcal{H}_{\text {tunnel }}=\Delta \psi_{\uparrow}^{\dagger}(x) \psi_{\downarrow}^{\dagger}(x)+\text { h.c. } \tag{16.202}
\end{equation*}
$$

where $\psi_{\uparrow}(x)$ and $\psi_{\downarrow}(x)$ are the two components of the Weyl spinor. Here we assume that the s-wave superconducting condensate $\Delta$ is fixed by the bulk superconductor and is unaffected by the surface states, although in reality there may be a suppression of $\Delta$ near the surface of the superconductor. Nevertheless, what matters in what follows is that there is a finite value of $\Delta$ at the surface even if it is smaller than in the bulk.

We will use the Nambu four-component spinor notation,

$$
\begin{equation*}
\Psi=\left(\left(\psi_{\uparrow}, \psi_{\downarrow}\right),\left(\psi_{\downarrow}^{\dagger},-\psi_{\uparrow}^{\dagger}\right)\right)^{\mathrm{T}} \tag{16.203}
\end{equation*}
$$

and write the full Hamiltonian density of the surface states in the form (Fu and Kane, 2008)

$$
\begin{equation*}
\mathcal{H}=\Psi^{\dagger}\left[-i v_{\mathrm{F}} \tau_{3} \vec{\sigma} \cdot \vec{\nabla}-\mu \tau_{3}+\Delta_{0}\left(\tau_{1} \cos \phi+\tau_{2} \sin \phi\right)\right] \Psi \tag{16.204}
\end{equation*}
$$

where $\tau_{1}, \tau_{2}$, and $\tau_{3}$ are (as before) the three Pauli matrices that act on the upper, $\psi$, and lower, $\psi^{\dagger}$, Weyl components of the Nambu 4-spinor. It is easy to see that this is the chiral basis for $4 \times 4$ gamma matrices with $\gamma_{0}=\mathbb{I} \otimes \tau_{1}, \gamma_{1}=-i \sigma_{1} \otimes \tau_{2}$,
$\gamma_{2}=-i \sigma_{2} \otimes \tau_{2}, \gamma_{3}=-i \sigma_{3} \otimes \tau_{2}$, and $\gamma_{5}=\mathbb{I} \otimes \tau_{3}$. Time-reversal is represented by the operator $\Theta=i \sigma_{2} \mathcal{K}$, where $\mathcal{K}$ is complex conjugation, and commutes with the Hamiltonian, $[\Theta, \mathcal{H}]=0$.

When $\Delta$ is constant in space, the excitation spectrum in

$$
\begin{equation*}
E(\vec{k})= \pm \sqrt{\left( \pm v_{\mathrm{F}}|\vec{k}|-\mu\right)^{2}+\Delta_{0}^{2}} \tag{16.205}
\end{equation*}
$$

For $\mu \gg \Delta_{0}$ the low-energy spectrum is the same as that of a $p_{x}+i p_{y}$ superconductor, see Section 14.9. This can also be seen by defining the field operators

$$
\begin{equation*}
c(\vec{k})=\frac{1}{\sqrt{2}}\left(\psi_{\uparrow}(\vec{k})+e^{i \arg (\vec{k})} \psi_{\downarrow}(\vec{k})\right) \tag{16.206}
\end{equation*}
$$

where $\arg (\vec{k})=\tan ^{-1}\left(k_{y} / k_{x}\right)$. If we project the Hamiltonian of Eq. (16.204) to act only on the subspace defined by the operators $c(\vec{k})$, we readily find that the projected Hamiltonian becomes

$$
\begin{equation*}
H=\int \frac{d^{2} k}{(2 \pi)^{2}}\left[\left(v_{\mathrm{F}}|\vec{k}|-\mu\right) c^{\dagger}(\vec{k}) c(\vec{k})+\frac{1}{2}\left(\Delta e^{i \arg (\vec{k})} c^{\dagger}(\vec{k}) c^{\dagger}(-\vec{k})+\text { h.c. }\right)\right] \tag{16.207}
\end{equation*}
$$

which is the Hamiltonian of a $p_{x}+i p_{y}$ superconductor for spinless fermions. Fu and Kane further noted that the full Hamiltonian of Eq. (16.204) is invariant under time reversal, whereas the projected Hamiltonian is not.

In Section 14.9 .3 we saw that an $h c /(2 e)$ vortex in a $p_{x}+i p_{y}$ superconductor has an exact Majorana zero mode in its core. We will now see that the junction of an s-wave superconductor with the Weyl surface states of a $3 \mathrm{D} \mathbb{Z}_{2}$ topological insulator also has vortices that have an exact Majorana zero mode in their cores. This problem turns out to be essentially equivalent to the problem of a vortex of a relativistic charged scalar field coupled to Weyl fermions studied long ago by Jackiw and Rossi (1981). The precise mapping between the two problems can be found in the work of Chamon and collaborators (Chamon et al., 2010; Nishida et al., 2010). Let us consider a configuration of the order parameter $\Delta(\vec{r})$ that corresponds to a vortex. In polar coordinates $\vec{r}=(r, \varphi)$ (with $0 \leq \varphi<2 \pi)$, the vortex configuration has the form

$$
\begin{equation*}
\Delta_{ \pm}(r, \varphi)=\Delta(r) e^{ \pm i \varphi} \tag{16.208}
\end{equation*}
$$

where $\lim _{r \rightarrow \infty} \Delta(r)=\Delta_{0}$ in the far field, and $\lim _{r \rightarrow 0} \Delta(r)=0$ deep in the core. Here $\Delta_{ \pm}(r, \theta)$ corresponds to the vortex $(+)$ and to the anti-vortex $(-)$. It is easy to see that the vortex has the exact zero mode (on setting $v_{\mathrm{F}}=1$ )

$$
\eta_{0}^{+}(r, \theta) \sim \exp \left(-\int_{0}^{r} d r^{\prime} \Delta_{0}\left(r^{\prime}\right)\right)\left(\begin{array}{l}
0  \tag{16.209}\\
i \\
1 \\
0
\end{array}\right)
$$

whereas for the anti-vortex the zero mode has the same radial dependence but the spinor now is $(1,0,0,-i)^{\mathrm{T}}$.

These results led Fu and Kane to state, following the arguments of Read and Green (2000) and of Ivanov (2001), that the vortices in this system are non-abelian anyons that exhibit "Ising" fusion rules. Hence, these vortices have the same behavior as that of the half-vortices that we discussed extensively in Section 14.9. This result showed that "hybrid" structures of superconductors and topological insulators offer an alternative approach by means of which to construct topological qubits!

Fu and Kane also considered other geometries. A particularly interesting case was a hybrid Josephson line junction of two superconductors deposited on top of a 3D topological insulator, which also supplied the material for the barrier in the line junction. They showed that, if the phases of the order parameters of the two superconductors differ by $\pi$, a gapless Majorana field propagates along the line junction. In a recent experiment on a device of this type, made with a $\mathrm{Bi}_{2} \mathrm{Se}_{3}$ topological insulator as a "substrate," it was found that the current-phase relation of the Josephson line junction has a sharp resonance when the phase difference between the superconducting leads is exactly equal to $\pi$ (Williams et al., 2012). This feature is suppressed by a low magnetic field, in contradiction with the behavior of conventional Josephson junctions, but in agreement with the predictions of Fu and Kane (2008).

The Fu-Kane result led to an explosion of work whose goal is to find simple condensed matter systems that may support Majorana zero modes. Some time earlier Kitaev (2001) had considered a simple model of a mean-field theory of spinless fermions in one dimension with p-wave superconductivity. In one dimension p-wave simply means that the order parameter is odd under parity. The model considered by Kitaev is a chain of $N$ sites with a spinless fermion operator $c_{j}$ and its adjoint $c_{j}^{\dagger}$ defined at every site. The chain has open boundary conditions. The Hamiltonian of this problem is

$$
\begin{equation*}
H=-\sum_{j=1}^{N} \mu c(j)^{\dagger} c(j)-\sum_{j=1}^{N-1}\left(c(j)^{\dagger} c(j+1)+|\Delta| e^{i \phi} c(j) c(j+1)+\text { h.c. }\right) \tag{16.210}
\end{equation*}
$$

Here $\mu$ is the chemical potential, $t$ is the hopping term, $|\Delta|$ is the amplitude of the superconducting order parameter, and $\phi$ is its phase. Since the superconducting
order parameter is defined on the bonds of the 1D chain, it is odd under parity, defined as inversion with respect to a site of the chain.

The alert reader should at once recognize that this problem is essentially the same as the fermion representation of the quantum Ising chain discussed in Section 5.5. Much as in the case of the 1D quantum Ising model, in this system (as in all pairing Hamiltonians) fermion number is not conserved, but it is conserved modulo 2, i.e. the parity of the fermion number is conserved. Here too this system is equivalent to a system of Majorana fermions. In the simpler case of $\mu=0$ and $t=|\Delta|$ the (Dirac) fermion operator can be decomposed into its two Majorana components. Using the same notation as in Section 5.5, we define two Majorana fermions $\chi_{1}(j)$ and $\chi_{2}(j)$, which are self-adjoint fermions, $\chi_{a}(j)^{\dagger}=\chi_{a}(j)(a=$ $1,2)$, and satisfy the Majorana anticommutation relations $\left\{\chi_{a}(j), \chi_{b}(l)\right\}=2 \delta_{a b} \delta_{j l}$. The Dirac fermion is expressed in terms of the Majorana fermions as

$$
\begin{equation*}
c(j)=\frac{1}{2} e^{-i \phi / 2}\left(\chi_{1}(j)+i \chi_{2}(j)\right), \quad c^{\dagger}(j)=\frac{1}{2} e^{+i \phi / 2}\left(\chi_{1}(j)-i \chi_{2}(j)\right) \tag{16.211}
\end{equation*}
$$

In terms of the Majorana fermions the Hamiltonian of Eq. (16.210) (for $\mu=0$ and $t=|\Delta|$ ) becomes

$$
\begin{equation*}
H=-i t \sum_{j=1}^{N-1} \chi_{2}(j) \chi_{1}(j+1)=2 t \sum_{j=1}^{N-1} d^{\dagger}(j) d(j) \tag{16.212}
\end{equation*}
$$

where we have defined a new Dirac fermion $d(j)=\frac{1}{2}\left(\chi_{1}(j+1)+i \chi_{2}(j)\right)$ by combining one Majorana component on one site with the other Majorana component on the next site. Clearly, this system has local excitations of energy $2 t$. Hence the bulk states are gapped. However, in this construction the Majorana fermions $\chi_{1}(1)$ and $\chi_{2}(N)$ are absent. We can now combine these two Majorana fermions into a single boundary Dirac fermion $d_{0}=\frac{1}{2}\left(\chi_{1}(1)+i \chi_{2}(N)\right)$. The states $|0\rangle$ and $|1\rangle=d^{\dagger}|0\rangle$ are zero-energy states, zero modes, of the Hamiltonian. Hence this system has two degenerate ground states with exactly zero energy, i.e. a qubit. The reader can check that what we have described is the Ising chain with open (instead of periodic) boundary conditions deep in the broken-symmetry states, $\lambda \gg 1$. These zero modes are analogous to the zero modes in polyacetylene except that here they are Majorana fermions and do not carry charge. Alicea and his collaborators showed that this simple model proposed by Kitaev can be realized physically in a 1D semiconductor with strong spin-orbit interactions coupled to an s-wave superconductor. This system has Majorana zero modes at the endpoints of the wire (Alicea et al., 2011).

We close this chapter with a brief discussion of topological fluids emerging from topological insulators. These are open problems and we will merely touch on some
important questions without attempting to give a thorough description. This transition can happen in several possible ways. One possibility is to consider changing the chemical potential in a topological insulator so that it becomes a metal. The question is whether the topological properties of the electronic bands of the single particle states imply that the resulting superconductor should be topological. By topological here we mean that the single-particle states of the Bogoliubovde Gennes equations of the superconductor have topological properties similar to those of the "parent" insulator. Consideration of this problem lead to the realization that the quasiparticle states of the superconductors can also have non-trivial topology (Schnyder et al., 2008; Kitaev, 2009; Roy, 2010; Ryu et al., 2010). However, it turns out that, while this scenario is certainly possible, it is by no means necessary. Thus, the metal obtained by doping a topological insulator can become either a standard superconductor or a topological one.

A very exciting pathway from a topological insulator to a topological phase is via a fractional topological insulator, the fractionalized version of the quantum anomalous Hall state (and of the quantum spin Hall state). If such a state were to exist, it would be a topological fluid in the same sense as the fractional quantum Hall states. Although we do not know (yet) of any experimental examples of this fractionalized phase, there are models with local interactions that have been shown to do the job. Several authors (Neupert et al., 2011; Sheng et al., 2011; Tang et al., 2011a) have looked at models of topological insulators in a regime in which one of the bands with non-trivial topology becomes essentially "flat." They showed that if this flat band with non-trivial Chern number is partially filled the system can develop a spontaneous anomalous quantum Hall state with a fractional Hall conductance. In other words, this system has a fractional quantum Hall state in the absence of a magnetic field. In this case time-reversal invariance is broken spontaneously. In these states, and for the same reasons as in the fractional quantum Hall effect, the electron becomes fractionalized. The new feature here is that the emerging fractional quantum Hall state is the result of spontaneous breaking of time-reversal invariance in the absence of an external magnetic field. Clearly, something very similar can happen in the case of the quantum spin Hall state.

In two dimensions these fractionalized phases are close relatives of the fractional quantum Hall states. Thus, it is possible to write down an effective hydrodynamic field theory of the form of a multi-component Chern-Simons gauge theory as discussed in detail in Section 14.2 (Levin and Stern, 2009; Cho and Moore, 2011; Santos et al., 2011). Time-reversal invariance requires that there should not be a Hall current, a condition that is met by any real symmetric and traceless $K$-matrix. For instance, in the case of the time-reversal-invariant fractional quantum spin Hall states the effective theory must have at least two components and its $K$-matrix must be traceless. In its simpler form the $K$-matrix has the form

$$
K=\left(\begin{array}{ll}
0 & k  \tag{16.213}\\
k & 0
\end{array}\right)
$$

which is both traceless and real. With a matrix of this form the Chern-Simons action implies that the (hydrodynamic) flux of one component couples to the hydrodynamic gauge field of the other component and hence has the form of a BF theory of the type we discussed in Sections 14.1.1 and 14.5. This theory is equivalent to a state of a system of two types of fermions with opposite "charges" (actually spin projections) each at filling fraction $1 / k$. Since the absolute value of the determinant of the $K$-matrix is $k^{2}$, this topological fluid has degeneracy $k^{2}$ on a torus.

What is still missing is a general microscopic theory of these fractionalized phases. Nonetheless, some simple microscopic lattice models that exhibit some of these key features have been constructed (Levin et al., 2011), and many properties of the wave functions for the fractionalized states in 2D have been investigated (Qi, 2011). The extension of these ideas to 3D topological insulators is far less obvious, since the notion of fractional statistics for particles itself cannot be extended to three spatial dimensions because in three dimensions the braid group is trivial (although it may be applicable for extended objects such as strings and domain walls). Nevertheless, the notion of statistical transmutation of bosons into fermions, and vice versa, is still meaningful. A famous example is the case of a spinless particle of charge $e$ that, bound to a Wu-Yang magnetic monopole, becomes a spin- $1 / 2$ particle, a problem we have already discussed in Section 13.1.2. From general principles of local quantum field theory, we expect that if the bound state is described by a local field theory then this particle should be a fermion and should be described by a Dirac field (Wu and Yang, 1975, 1976; Witten, 1979).

## 17

## Quantum entanglement

### 17.1 Classical and quantum criticality

In most cases the phases of quantum field theories, in particular those of interest in condensed matter physics, can be described in terms of the behavior of local observables, such as order parameters or currents that transform properly under the symmetries of the theory. Quantum and thermal phase transitions are characterized by the behavior of these observables as a function of temperature and of the coupling constants of the theory. The phase transitions themselves, quantum or thermal, are classified into universality classes, which are represented by the critical exponents which specify the scaling laws of the expectation values of the observables. Historically, the development of this approach to critical behavior goes back to the Landau theory of critical behavior. It acquired its most complete form with the development of the renormalization group (RG) in the late 1960s and early 1970s. It is the centerpiece of Wilson's approach to quantum field theory, in which all local quantum field theories are defined by the scaling regime of a physical system near a continuous phase transition. From this point of view there is no fundamental difference between classical (or thermal) phase transitions, which are described by the theory of classical critical behavior, and quantum phase transitions.

For example, the expectation value of a local order parameter $\mathcal{M}$ as the thermal phase transition is approached from below behaves as $\mathcal{M} \sim\left(T_{\mathrm{c}}-T\right)^{\beta}$. Here $T_{\mathrm{c}}$ is the critical temperature and $\beta$ is a critical exponent that depends on the universality class of the thermal phase transition and on the dimensionality of space. While quantum mechanics can play a key role in the existence of the ordered phase, e.g. superfluidity and superconductivity are macroscopic manifestations of essentially quantum-mechanical phenomena, the thermal transition itself is governed entirely by classical statistical mechanics, and quantum mechanics plays a role in setting the value of non-universal quantities such as the critical temperature, etc. On the
other hand, in the case of a quantum phase transition, the order parameter $\mathcal{M}$ has a similar scaling behavior as a function of the coupling constant, $\mathcal{M} \sim\left(g_{\mathrm{c}}-g\right)^{\tilde{\beta}}$, where $g$ is the coupling constant, $g_{\mathrm{c}}$ is the critical coupling constant, and $\tilde{\beta}$ is a critical exponent that depends on the universality class of the quantum phase transition. Here we assume that $\mathcal{M}$ has a non-vanishing expectation value only for $g<g_{\mathrm{c}}$.

However, as is apparent in the description of a quantum phase transition in terms of a path integral in imaginary time, quantum phase transitions look like classical phase transitions in a space with an extra dimension, imaginary time. The main difference between the two types of transitions is the existence of a dynamical critical exponent $z$ that specifies how space and time scale in the quantum case. This scaling law is absent in the theory of equilibrium classical critical phenomena. In the case of quantum systems that obey relativistic invariance the dynamical exponent $z=1$, and, in these cases, the quantum transition is literally a classical transition in a space with one additional dimension. Thus, near a continuous quantum phase transition the correlation length diverges with a universal exponent $v$ as $\xi \sim\left|g-g_{\mathrm{c}}\right|^{-\nu}$, while the energy gap $G$ vanishes at the same quantum phase transition as $G \sim\left|g-g_{\mathrm{c}}\right|^{\nu z}$.

Gauge theories, which we discussed in other chapters in connection with the physics of the topological fluids and spin liquids, have a similar description. The crucial difference is that in the case of gauge theory the local nature of the gauge symmetry requires the consideration of non-local gauge-invariant observables, such as the Wilson loop and the 't Hooft loop. As we saw in Chapter 9, the Wilson loop operators have distinct behaviors in different phases of the theory, and obey an area law in a confining phase and a perimeter law in a deconfined phase. Hence, near a continuous phase transition the energy gap of the gauge theory, which is set by the string tension in the confining phase and enters into the definition of the area law, vanishes as a function of the coupling constant with a universal critical exponent.

In Chapter 9 we saw that gauge theories with a compact gauge group have non-trivial topological properties in their deconfined phases. Likewise, ChernSimons gauge theory is a topological field theory, see Chapter 10, and we used it extensively in the field-theoretic description of the fractional quantum Hall fluids. In topological field theories the expectation values of the observables depend only on the topological properties of the observables, such as the linking number of the Wilson loops, and on the global topology of the space. In condensed matter physics topological field theories describe the effective low-energy and long-distance behavior in a topological phase. The best-understood example of a system in a topological phase is a fractional quantum Hall fluid, see Chapters 13 and 14. The consideration of topological phases, and of topological field theories, led us to describe the excitations by their transformation properties under the braid
group, and led to the concept of abelian and non-abelian fractional statistics. More generally, we also had to consider the quantum dimensions of the excitations and their fusion rules.

Although in all cases of interest the quantum phase transition itself can be described in terms of the behavior of local operators, the existence of topological phases tells us that some important features of the theory cannot be reduced to local physics. This raises the question of whether perhaps even at the quantum phase transition some global non-local properties of the quantum field theory may be important. The topological properties of the topological phases have a quantum origin and do not have a counterpart in classical systems. This raises the need to consider other tools to describe topological phases and their phase transitions.

The information on all the static properties of a physical system is stored in its ground-state wave function. This naturally includes the behavior of the equal-time correlators of local operators. Since we can compute their properties directly, we did not need to investigate the properties of the ground-state wave functions. In general, the wave functions do not by themselves play a great role since the wave functions of thermodynamically large systems contain all kinds of information, much of which is highly non-universal and depends on all the microscopic details. In almost all cases very little of the nature of the physical system would change if these microscopic details were to be modified. In addition, it is often more difficult to understand the physical properties of a system by staring at an expression of the wave function than to look at the correlators of the local observables. Of course, if we know the behavior of the observables, we know the information that is encoded in the wave functions. One may nevertheless ask whether there is important physical information encoded in the wave functions that might not be readily accessible via properties gleaned from the behavior of local operators. For instance, the wave function for the ground state of the spin- $1 / 2$ quantum antiferromagnetic Heisenberg chain obtained using the Bethe ansatz (see Chapter 5) has been known since Hans Bethe derived it in 1931. However, the physics that was encoded in this wave function could not be understood until the properties of correlators of local observables were found many years later, beginning in the 1970s.

On the other hand, the wave functions that describe systems in topological phases, e.g. the Laughlin wave function of the fractional quantum Hall effect, have manifestly universal properties that are closely related to the properties and characterization of these phases. We saw in Chapters 13 and 14 that the wave functions of topological phases encode universal non-local properties of these systems such as the braiding fractional statistics of their excitations. Therefore, at least in these cases, we need an understanding of non-local properties of the ground-state wave functions.

### 17.2 Quantum entanglement

The natural tool to investigate the non-local properties stored in the groundstate wave functions is the concept of quantum entanglement and the associated entanglement entropy. In this chapter we will define what is meant by quantum entanglement and its measures, focusing on the entanglement entropy. The concept of quantum entanglement was born with quantum mechanics itself, and predates our motivations by many decades (Einstein et al., 1935).

Historically the concept of quantum entanglement was formulated to describe how a finite quantum system is coupled to its essentially infinite environment. The prime example is the non-local information stored in the wave functions of systems of identical particles. Consider, for instance, a system of two identical spin-1/2 particles, A and B. The wave function of a spin-singlet state, with total spin $S=0$ and $S_{z}=0$, is $|0,0\rangle=(1 / \sqrt{2})(|\uparrow, \downarrow\rangle-|\downarrow, \uparrow\rangle)$. Since this wave function does not contain any length scale, the physical size of the spin singlet can be as large as we want. If we measure the spin of particle A, say on Earth, and find that it is $\uparrow$ then, provided that we know a priori that the state is indeed a spin singlet, we know that the spin of particle B is $\downarrow$ even if particle B is, let us say, on the Moon. On the other hand, if the two spins are in a product state, such as $|1, \pm 1\rangle$, the measurement of the spin of particle $A$ to be $\uparrow$ implies that the spin of particle $B$ is $\uparrow$ only if we know both that $S=1$ and that $S_{z}=1$. For this reason we say that the spins are entangled in the singlet state, while in the product state they are not.

A measure of the degree of entanglement of a quantum state is the von Neumann entanglement entropy, which is defined as follows. Let us consider a partition of a physical system $\Sigma$ into two disjoint subsystems that we will label by $A$ and $B$. Hence, $\Sigma=A \bigcup B$ and the two subsystems have a vanishing intersection, $A \bigcap B=\emptyset$. Let $\mathcal{H}_{A}$ and $\mathcal{H}_{B}$ be the Hilbert spaces of the states with separate support in system $A$ and in system $B$ such that the Hilbert space of the states on $\Sigma$ is $\mathcal{H}_{\Sigma}=\mathcal{H}_{A} \oplus \mathcal{H}_{B}$. Let $|\Psi\rangle$ be a pure quantum state of the system on $A \bigcup B$. As such it can be decomposed as

$$
\begin{equation*}
|\Psi\rangle=\sum_{m, n} M_{m, n}\left|\psi_{n}^{A}\right\rangle\left|\psi_{m}^{B}\right\rangle \tag{17.1}
\end{equation*}
$$

where $\left\{\left|\psi_{n}^{A}\right\rangle\right\}$ and $\left\{\left|\psi_{m}^{B}\right\rangle\right\}$ are orthonormal basis states of $\mathcal{H}_{A}$ and $\mathcal{H}_{B}$, respectively, and $M_{n, m}$ are the matrix elements of an (in general) rectangular matrix M. However, using the singular-value-decomposition theorem, a rectangular matrix can always be written as a product of a unitary matrix $\mathbf{U}$, a diagonal matrix $\mathbf{D}=$ $\operatorname{diag}\left(\lambda_{1}, \ldots, \lambda_{n}, \ldots\right)$, and a rectangular matrix $\mathbf{V}$ (whose rows are orthonormal vectors). Then, after going to the new bases, $\left|\psi_{n}^{A}\right\rangle \rightarrow \mathbf{U}\left|\psi_{n}^{A}\right\rangle$ and $\left|\psi_{m}^{B}\right\rangle \rightarrow \mathbf{V}\left|\psi_{m}^{B}\right\rangle$, we find the Schmidt decomposition of the state vector $|\Psi\rangle$,

$$
\begin{equation*}
|\Psi\rangle=\sum_{n}^{D} \lambda_{n}\left|\psi_{n}^{A}\right\rangle\left|\psi_{n}^{B}\right\rangle \tag{17.2}
\end{equation*}
$$

where $D=\min \left\{d_{A}, d_{B}\right\}$, with $d_{A}$ and $d_{B}$ being the dimensions of the Hilbert spaces $\mathcal{H}_{A}$ abd $\mathcal{H}_{B}$. Also, if the state vector $|\Psi\rangle$ is normalized to unity, $\|\Psi\|=1$, then the set of (generally complex) numbers $\left\{\lambda_{n}\right\}$ must satisfy the sum rule

$$
\begin{equation*}
\sum_{n}^{D}\left|\lambda_{n}\right|^{2}=1 \tag{17.3}
\end{equation*}
$$

Given the pure state $|\Psi\rangle$ of the total system $A \bigcup B$, its (trivial) density matrix is

$$
\begin{equation*}
\rho_{A \cup B}=|\Psi\rangle\langle\Psi| \tag{17.4}
\end{equation*}
$$

We can now define the reduced density matrix for subsystem $A$ to be the partial trace of $\rho_{A \cup B}$ over the degrees of freedom in $B$,

$$
\begin{equation*}
\rho_{A}=\operatorname{tr}_{B} \rho_{A \cup B} \tag{17.5}
\end{equation*}
$$

and similarly for the reduced density matrix $\rho_{B}$. Therefore, if we observe only the subsystem $A$, it is in a mixed state defined by the reduced density matrix $\rho_{A}$, and similarly for $B$.

The von Neumann entanglement entropy $S_{A}$ for subsystem $A$, when the total system is in state $|\Psi\rangle$, is defined to be the entropy of the reduced density matrix,

$$
\begin{equation*}
S_{A} \equiv-\operatorname{tr}_{A}\left(\rho_{A} \ln \rho_{A}\right) \tag{17.6}
\end{equation*}
$$

(For historical reasons in the quantum-information literature the von Neumann entropy uses $\log _{2}$ instead of the standard natural logarithm used in statistical mechanics.)

Using the Schmidt decomposition, Eq. (17.2), we can write the reduced density matrix $\rho_{A}$ as

$$
\begin{equation*}
\rho_{A}=\sum_{n}^{D}\left|\lambda_{n}\right|^{2}\left|\psi_{n}^{A}\right\rangle\left\langle\psi_{n}^{A}\right| \tag{17.7}
\end{equation*}
$$

and similarly for $B$. Hence, the quantities $p_{n} \equiv\left|\lambda_{n}\right|^{2}$ represent the probability of observing the subsystem $A$ in the state $\left|\psi_{n}^{A}\right\rangle$. From these expressions it follows that the reduced density matrices $\rho_{A}$ and $\rho_{B}$ have the same non-zero eigenvalues, that they are given by $p_{n}=\left|\lambda_{n}\right|^{2}$, and that both reduced density matrices have unit trace, $\operatorname{tr}_{A} \rho_{A}=\operatorname{tr}_{B} \rho_{B}=1$.

It also follows that the von Neumann entanglement entropy can be written as

$$
\begin{equation*}
S_{A}=-\operatorname{tr}_{A}\left(\rho_{A} \ln \rho_{A}\right)=-\sum_{n}^{D}\left|\lambda_{n}\right|^{2} \ln \left|\lambda_{n}\right|^{2}=-\operatorname{tr}_{B}\left(\rho_{B} \ln \rho_{B}\right)=S_{B} \tag{17.8}
\end{equation*}
$$

In other words, the entanglement entropy is symmetric in the two (entangled) subsystems. This symmetry property is a consequence of our assumption that the total system $A \bigcup B$ is in a pure state $|\Psi\rangle$. Conversely, the symmetry property of the entanglement entropy does not hold if the total system is in a mixed state, e.g. in a thermal state defined by a Gibbs density matrix. The expression of the von Neumann entanglement entropy in terms of the probabilities $\left\{\left|\lambda_{n}\right|^{2}\right\}$ also tells us that the entanglement entropy can vanish only if the reduced density matrix $\rho_{A}$ (and hence also $\rho_{B}$ ) itself represents a pure state. This can hold only if the state $\Psi$ of the system on $A \bigcup B$ is a product state. In this case the reduced density matrix is diagonal and equal to $\rho_{A}=\operatorname{diag}(1,0, \ldots, 0)$, which has a vanishing entropy. Therefore the von Neumann entropy is a measure of the entanglement of the two subsystems $A$ and $B$ in state $|\Psi\rangle$. The spectrum of (Schmidt) eigenvalues $\left\{\left|\lambda_{n}\right|^{2}\right\}$ of the reduced density matrix is known as the entanglement spectrum.

Finally, the von Neumann entanglement entropy satisfies the following properties. For two regions, $A$ and $B$, the entanglement entropy is subadditive, i.e. $S_{A \cup B} \leq S_{A}+S_{B}$. In addition, for three regions, $A, B$, and $C$, the von Neumann entanglement entropy satisfies the condition of strong subadditivity (of Lieb and Ruskai (1973)), i.e. $S_{A \cup B \cup C} \leq S_{A \cup B}+S_{B \cup C}-S_{B}$.

### 17.3 Entanglement in quantum field theory

For the rest of this chapter we will focus on entanglement entropy, how it is computed, and how it behaves in different systems of interest. We will see that the entanglement entropy is a very efficient and powerful tool to characterize the physics of topological phases in condensed matter and in quantum field theory. We will also discuss in detail the scaling laws obeyed by the entanglement entropy.

How do we compute the entanglement entropy in an extended, macroscopic, system such as a quantum field theory? In systems with few degrees of freedom it is relatively straightforward to construct the reduced density matrices directly from their wave functions. However, except for a few exceptional cases, the wave functions of systems with an infinite number of degrees of freedom are in almost all circumstances forbiddingly complex. There are a few exceptional systems in which the wave functions are known explicitly and have universal properties. However, even for these cases the computation of the entanglement entropy is non-trivial.

For definiteness let us consider a field theory with a Euclidean action $S[\phi]=$ $\int_{\Omega} d^{D} x \mathcal{L}[\phi]$, where $\phi$ is some field and $\mathcal{L}$ is the Lagrangian density. Here $\Omega$ is some $D$-dimensional space-time manifold. In the Euclidean theory the imaginarytime coordinate $\tau$ is periodic (compactified) with period $\beta=1 / T$, while the space directions are for now arbitrary. Thus, we will generally refer to the space-time $\Omega$
as a cylinder of circumference $\beta=1 / T$. What follows does not depend on whether the theory is relativistic or not.

The Gibbs density matrix of the system is $\rho=\exp (-\beta H)$, where $H$ is the quantum Hamiltonian and $\beta=1 / T$. The partition function is

$$
\begin{equation*}
Z=\operatorname{tr} \rho=\operatorname{tr} e^{-\beta H}=\int \mathcal{D} \phi e^{-\int_{\Omega} d^{D} x \mathcal{L}[\phi]} \tag{17.9}
\end{equation*}
$$

In the Euclidean metric the imaginary-time $\tau$ evolution operator is $U(\tau)=$ $\exp (-\tau H)$. For large $\tau$ the Euclidean evolution operator $U(\tau)$ projects any initial state onto the ground-state $|0\rangle$. Therefore, the ground-state wave function $\Psi_{0}[\phi]$ is expressed in terms of a path integral by a similar-looking expression (see Fig. 17.1),

$$
\begin{equation*}
\Psi_{0}[\phi]=\langle\phi \mid 0\rangle=\frac{1}{Z} \int \mathcal{D} \phi e^{-\int_{\Sigma} d^{D} x \mathcal{L}[\phi]} \tag{17.10}
\end{equation*}
$$

where the manifold $\Sigma$ has a boundary at some (imaginary) time $\tau=0$ where we specify that the state is given by the field configuration, $|\phi\rangle$, and where we have taken the zero-temperature limit $T \rightarrow 0$ or, which amounts to the same thing, made the time dimension infinite in size, $\beta \rightarrow \infty$. This last step projects onto the ground state $|0\rangle$, assuming that it is unique. If the ground state is not unique, the evolution will project onto a state that is the linear superposition of the degenerate
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-777.jpg?height=590&width=742&top_left_y=1308&top_left_x=477)

Figure 17.1 The path-integral picture of the wave function as the amplitude for an evolution from some initial state $|[\phi(x)]\rangle$ to the vacuum state $|0\rangle$ of the system. The initial state is a field configuration defined on the boundary of the open space-time manifold $\Sigma$. The boundary is a spatial manifold at the initial imaginary time slice $\tau=0$ of the (Euclidean) evolution.
vacua (ground states), unless of course the degeneracy is explicitly lifted. Similarly, the matrix element of the density matrix $\rho$ between states $|\phi(x)\rangle$ and $\left|\phi^{\prime}(x)\right\rangle$ is

$$
\begin{align*}
& \langle\phi(x)| \rho\left|\phi^{\prime}(x)\right\rangle \\
& \quad=\frac{1}{Z} \int \mathcal{D} \phi \prod_{x} \delta(\phi(x, \tau=0)-\phi(x)) \prod_{x} \delta\left(\phi(x, \tau=\beta)-\phi^{\prime}(x)\right) e^{-S_{\mathrm{E}}[\phi]} \tag{17.11}
\end{align*}
$$

where $S_{\mathrm{E}}[\phi]$ is the Euclidean action of the field theory on a manifold that is a strip of width $\beta$ with the specified boundary conditions.

We can use the same approach to, at least formally, find a path-integral expression for the reduced density matrix. So, once again we will consider a partition of the spatial manifold into two disjoint sets $A$ and $B$. The reduced thermal density matrix $\rho_{A}$ is then obtained by tracing over the degrees of freedom in its complement, region $B$. Hence we will require that in region $B$ the initial and final states are the same and summed over, and the imaginary-time coordinate is periodic with period $\beta$. Thus, in region $B$ the strip is wrapped into a cylinder of circumference $\beta$. Let $\left|\left[\phi_{A}(x)\right]\right\rangle$ and $\left|\left[\phi_{A}^{\prime}(x)\right]\right\rangle$ be two field configurations with support in region $A$. The matrix elements of the reduced density matrix for region $A$ are obtained by computing a trace of the full density matrix restricted to the states in region $B$. However, in region $A$ the states evolve from the state $\left|\left[\phi_{A}(x)\right]\right\rangle$ to $\left|\left[\phi_{A}^{\prime}(x)\right]\right\rangle$. In other words, the new manifold is smooth and periodic on region $B$ but has a cut in region $A$ with a discontinuity expressed in terms of the two configurations specified by the states $\left|\left[\phi_{A}(x)\right]\right\rangle$ and $\left|\left[\phi_{A}^{\prime}(x)\right]\right\rangle$ (see Fig. 17.2),

$$
\begin{equation*}
\left\langle\left[\phi_{A}(x)\right]\right| \rho_{A}\left|\left[\phi_{A}^{\prime}(x)\right]\right\rangle=\left\langle\left[\phi_{A}(x)\right]\right| \operatorname{tr}_{B} \rho\left|\left[\phi_{A}^{\prime}(x)\right]\right\rangle \tag{17.12}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-778.jpg?height=393&width=954&top_left_y=1561&top_left_x=378)

Figure 17.2 The path integral for the reduced density matrix $\rho_{A}$ is defined on a manifold with the topology of a cylinder with a cut, the dark line shown in the figure. Here $\phi_{A}(x)$ and $\phi_{A}^{\prime}(x)$ are two field configurations on region $A$. The origin and end of imaginary time $\tau$ are at $\tau=0$ and $\tau=\beta$.

To compute the entanglement entropy we will use the "replica trick." To this end, we compute first

$$
\begin{equation*}
Z_{n}[A]=\operatorname{tr}_{A} \rho_{A}^{n} \tag{17.13}
\end{equation*}
$$

which is defined for all positive integers $n$. In terms of the spectrum of eigenvalues of the reduced density matrix, $\left\{\lambda_{k}\right\}$ (the entanglement spectrum), it becomes

$$
\begin{equation*}
Z_{n}[A]=\sum_{k}^{D} \lambda_{k}^{n} \tag{17.14}
\end{equation*}
$$

Since the spectrum of eigenvalues lies within the interval $[0,1]$ and obeys the normalization condition $\sum_{k}^{D} \lambda_{k}=1$, the trace (defined by $Z_{n}[A]$ ) is absolutely convergent and analytic for $\operatorname{Re} n>1$. Therefore, $Z_{n}[A]$ can be extended by analytic continuation to the complex- $n$ plane as $Z[n, A]$.

The von Neumann entanglement entropy $S_{A}$ is computed by taking the limit (Callan and Wilczek, 1994; Calabrese and Cardy, 2004)

$$
\begin{equation*}
S_{A}=-\operatorname{tr}\left(\rho_{A} \ln \rho_{A}\right)=-\lim _{n \rightarrow 1^{+}} \frac{\partial}{\partial n} \operatorname{tr}_{A} \rho_{A}^{n} \tag{17.15}
\end{equation*}
$$

We will also define the Rényi entropies $S_{A}^{n}$,

$$
\begin{equation*}
S_{A}^{n}=\frac{1}{1-n} \ln \operatorname{tr} \rho_{A}^{n} \tag{17.16}
\end{equation*}
$$

Since we are taking traces of matrix products, it is clear that the final state in region $A$ of one factor is the initial state of the next factor (also in region $A$ ). The overall trace means that the final state of the last factor is identified with the initial state of the first factor. This means that the manifold on which the path integral is computed can be regarded as an $n$-sheeted Riemann surface in region $A$ with overall imaginary-time span $n \beta$ glued to cylinders defined for region $B$, each with imaginary-time span $\beta$.

Alternatively, we can think of this calculation as involving $n$ identical copies of the field theory, and hence having $n$ copies or replicas of the fields $\phi_{i}(i=$ $1, \ldots, n$ ), each with the same action such that in region $B$ the replicas obey periodic boundary conditions in imaginary time separately, whereas in region $A$ they are identified with each other sequentially and cyclically. More specifically, the replicated fields obey the boundary conditions

$$
\begin{align*}
& \phi_{j}\left(0^{+}, x\right)=\phi_{j+1}\left(0^{-}, x\right), \quad \text { for } x \in A  \tag{17.17}\\
& \phi_{j}\left(0^{+}, x\right)=\phi_{j}\left(0^{-}, x\right), \quad \text { for } x \in B
\end{align*}
$$

A consequence of the boundary conditions that specify how the $n$ replicas are glued to each other is that there exists a set of twist operators that act on the replicated theory and identify the different copies at the cuts. At the common boundary between
regions $A$ and $B$, the fields have a conical singularity. This formulation is originally due to Holzhey, Larsen, and Wilczek (Holzhey et al., 1994), and was developed and extended by Calabrese and Cardy $(2004,2009)$, whose work we follow here.

Following Calabrese and Cardy, we define a partition function with $n$ copies of the field, obeying the boundary conditions of Eq. (17.17). The action of the replicated fields is simply the sum of the actions for each copy,

$$
\begin{equation*}
S\left[\phi_{1}, \ldots, \phi_{n}\right]=\sum_{i=1}^{n} S\left[\phi_{i}\right] \tag{17.18}
\end{equation*}
$$

The path integral, the partition function, is then restricted by the condition that the local fields $\left\{\phi_{i}\right\}$ are glued according to the boundary conditions of Eq. (17.17). The replicated theory thus defined now has a global symmetry since it is invariant under the exchange of the replicas. Local fields that obey these conditions are called twist fields. With the particular structure of the boundary conditions we are using, they are called branch-point twist fields, and are associated with two cyclic permutation symmetries, $\sigma: j \rightarrow j+1(\bmod n)$ and $\sigma^{-1}: j+1 \rightarrow j(\bmod n)($ with $j=1, \ldots, n)$. The branch-cut twist fields that map the different copies across the branch cuts are denoted by $\mathcal{T}_{n} \equiv \mathcal{T}_{\sigma}$, associated with the permutation $\sigma: j \rightarrow j+1$ $(\bmod n)$, and $\tilde{\mathcal{T}}_{n} \equiv \mathcal{T}_{\sigma^{-1}}$, associated with the (inverse) permutation $\sigma^{-1}: j+1 \rightarrow$ $j(\bmod n)$. Thus, the reduced density matrix, which we defined as the partition function with a branch cut on every point along the boundary between regions $A$ and $B$, amounts to a partition function in the replicated theory with insertions of the branch-cut twist fields along the boundary between the two regions. A detailed treatment of this approach can be found in the work of Cardy and coworkers (Cardy et al., 2007). This formulation is particularly powerful in $(1+1)$ dimensions.

### 17.4 The area law

So far, much of the discussion in this chapter has been on the formal aspects of how entanglement and entanglement entropy are defined. As the reader can easily see, the expressions we have presented are rather formal. They are also very nonlocal. Although there are many reasons for being interested in entanglement, the complexity and non-locality of these measures have prevented the development of a comprehensive theory. However, in recent years there has been a sustained effort devoted to understanding the properties of entanglement measures (and of entanglement entropy in particular) in quantum field theory, in gravity, in string theory, and more recently in condensed matter physics. Different motivations have converged on this problem.

One of the main motivations for work on entanglement originates from the physics of black holes. In spite of their origin in a classical theory, the general
theory of relativity, black holes behave as if they were thermodynamic objects that have entropy and temperature. A fundamental result in black-hole physics is the expression for the black-hole entropy (Bekenstein, 1973; Hawking, 1975)

$$
\begin{equation*}
S_{\mathrm{BH}}=\frac{1}{4 \ell_{\mathrm{P}}^{2}} \mathcal{A} \tag{17.19}
\end{equation*}
$$

where $\mathcal{A}$ is the area of the event horizon of the black hole, $\ell_{\mathrm{P}}=\sqrt{\hbar G_{\mathrm{N}} / c^{3}}$ is the Planck length, and $G_{\mathrm{N}}$ is the Newton constant. This formula, known as the Bekenstein-Hawking entropy of the black hole, is most intriguing. Since black holes are some of the most classical objects in the Universe (or universe?), it is unclear what this entropy actually means.

The way the Bekenstein-Hawking formula was originally derived involved the idea that near the strong gravitational fields of a black hole pair production would exist. The existence of these processes then implies that some form of radiation, Hawking radiation, should be produced in the vicinity of the black hole, and hence these objects would acquire thermal properties such as a temperature. In addition, there are many examples in general relativity of so-called extremal black holes, which have entropy but no temperature. In particular, if a particle-anti-particle pair is created by the gravitational field of the black hole, the pair will be in an entangled state. One is then led to assume that the black-hole entropy must have a relation with entanglement entropy.

So the following question arises: if they have entropy, what degrees of freedom are being counted by this entropy? One of the triumphs of modern string theory is that it offers an explanation for the black-hole entropy that is consistent with statistical mechanics (Maldacena and Strominger, 1996). On the other hand, since some fraction of the particles produced by pair production would fall into the black hole and hence disappear for ever, this led to the idea that, once a black hole has formed, the system somehow on its own evolves into a mixed quantum state, since some information seems to be eaten by the black hole. This notion is in conflict with quantum mechanics since it violates unitary time evolution. This problem has led to a profound examination of the relation among gravitation, quantum mechanics, and information (Susskind, 2008).

If one assumes that the black-hole entropy is entanglement entropy, the Bekenstein-Hawking area law motivates the question of whether quantum field theory itself is consistent with this law. This problem was first studied by Bombelli, Koul, and Sorkin (Bombelli et al., 1986) and by Srednicki (1993), who found that in the case of a free massive relativistic scalar field of mass $m$ the von Neumann entanglement entropy of a region $A$ of linear size $\ell$ in the limit $\ell \gg m^{-1}$ behaves as

$$
\begin{equation*}
S[\ell]=\alpha \ell^{d-1} \tag{17.20}
\end{equation*}
$$

where $d$ is the dimensionality of space and $\alpha$ is a dimension-full, and hence nonuniversal, constant. Here, by non-universality we mean that it depends explicitly on the short-distance cutoff, e.g. the lattice spacing $a$ or the momentum cutoff $\Lambda \sim a^{-1}$. The non-universal character of the coefficient of the area law in Eq. (17.20) indicates that it is governed by the short-distance correlations encoded in the wave function. However, in contrast with the Bekenstein-Hawking formula, the area law of the entanglement entropy of local field theories cannot be expressed in terms of a fundamental length and depends on the explicit way in which the theory is cut off at short distances.

For example, in the case of a free scalar field in $(d+1)$ space-time dimensions, the entanglement entropy for a spherical region in $d$ space dimensions can be expressed in terms of the two-point function of the free massive scalar field in the $n$-sheeted geometry, see e.g. Calabrese and Cardy (2004), Casini et al. (2005), and Casini and Huerta $(2005,2009)$, resulting in the expression

$$
\begin{equation*}
\ln \operatorname{tr} \rho_{A}^{n}=\mathcal{A} \frac{1}{24}\left(n-\frac{1}{n}\right) \int \frac{d^{d-1} k_{\perp}}{(2 \pi)^{d-1}} \ln \left(k_{\perp}^{2}+m^{2}\right) \tag{17.21}
\end{equation*}
$$

where $k_{\perp}$ acts on the $d-1$ non-radial coordinates. From here it follows that the von Neumann entanglement entropy for the spherical region has an area law

$$
\begin{equation*}
S=-\frac{\mathcal{A}}{12} \int \frac{d^{d-1} k_{\perp}}{(2 \pi)^{d-1}} \ln \left(\frac{k_{\perp}^{2}+m^{2}}{k_{\perp}^{2}+a^{-2}}\right) \tag{17.22}
\end{equation*}
$$

where $\mathcal{A}$ is the area of the $d$-dimensional hypersphere and $a$ is the short-distance cutoff. This integral diverges as $a^{-(d-1)}$.

In conclusion, the entanglement entropy of free massive scalar fields is subextensive and scales as the area of the observed region, instead of the volume of a region as in the case of the thermodynamic entropy. This result holds essentially for all local theories. Since the area law follows from short-distance physics, it should apply equally to systems in the non-critical regime and to quantum critical systems. The only known exception to the strict area-law scaling is the case of systems of fermions at finite density, i.e. with a Fermi surface, where it has been shown that the entanglement entropy scales instead as $S_{A} \sim L^{d-1} \ln L$ (Gioev and Klich, 2006; Wolf, 2006), which is still sub-extensive. The sub-extensive scaling of the entanglement entropy is a necessary condition for the success of quantum-information-based approaches to the simulation of quantum critical systems such as the projected entangled-pair-state representation of quantum states on 2D lattices (Verstraete et al., 2006).

### 17.5 Entanglement entropy in conformal field theory

The generic existence of the area-law result naturally poses the following question: what scaling law does the entanglement entropy obey in a quantum critical system? In particular, what is the manifestation of the expected universal behavior of a quantum critical system in the entanglement entropy? One expects to find universal contributions to the entanglement entropy. But then the next logical question is to ask what determines these universal contributions and how they are related to the scaling of local observables at a quantum critical point.

To this date there isn't a generally known answer to these questions. However, these issues have been investigated in several important cases: (a) CFTs in $(1+1)$ dimensions, (b) the $(2+1)$-dimensional quantum Lifshitz universality class (see Section 9.15), and (c) $\phi^{4}$ field theory in the $4-\epsilon$ expansion. In this section we will describe the $(1+1)$-dimensional case.

The scaling behavior of the entanglement von Neumann entropy can be determined by general arguments of CFT. We will follow here in detail the arguments and results of Calabrese and Cardy (Calabrese and Cardy, 2004; Calabrese et al., 2009), which in turn are an extension of the early work of Holzhey, Larsen, and Wilczek (Holzhey et al., 1994). We will use the representation of $Z_{n}[A]=\operatorname{tr} \rho_{A}^{n}$ in terms of a path integral with a replicated target space.

For simplicity region $A$ will be a segment of length $\ell$, and region $B$ is the complement. The entire system has length $L \gg \ell$. We will work in the long distance limit and hence assume that $\ell \gg a$, where $a$ is a microscopic spatial cutoff, e.g. the lattice spacing. We will compute $Z_{n}$ and from there we will determine the von Neumann entanglement entropy. This problem was also considered in the context of specific lattice systems, such as quantum spin chains. The main result that we will prove is that in this limit, that provided the system is quantum critical, the entanglement entropy has the behavior

$$
\begin{equation*}
S=\frac{c}{3} \ln \left(\frac{\ell}{a}\right)+\text { finite terms }+O\left(\ell^{-1}\right) \tag{17.23}
\end{equation*}
$$

where $c$ is the central charge of the Virasoro algebra associated with the specific CFT that describes the 1D quantum critical point. From the point of view of the area law this result is expected, since in one dimension the boundaries are sets of points. Hence, as $d \rightarrow 1$, the area law can become a logarithm in one dimension. In this case, a redefinition of the microscopic cutoff will change the $O(1)$ terms in the expansion of Eq. (17.23) but cannot change the prefactor of the logarithm. Hence the prefactor must be a universal quantity, which, we will see, is related to the central charge $c$ discussed in Section 7.11. However, the finite terms have nonuniversal contributions. On the other hand, if the logarithmic contributions were
absent, the finite terms should be universal. We will see below an example of this case in two space dimensions.

The existence of universal terms in the finite-size scaling of the entanglement entropy is important since they signal the existence of large-scale entanglement. Indeed, although the area-law term is the most singular term as a function of the size of the observed region, the (generally subleading) universal term indicates that it measures the contributions to the entanglement entropy from all length scales. We will see that the entanglement entropy generally has a universal term in systems at quantum criticality, i.e. whose effective field theory displays scale and conformal invariance, and in topological phases.

In the replica formulation the replicated fields become twisted by the non-trivial boundary conditions. The fields are twisted by the exchange symmetries, which are represented by the local twist fields $\mathcal{T}_{n}$ and $\mathcal{T}_{n}^{-1}$, respectively. The local twist fields $\mathcal{T}_{n}$ and $\mathcal{T}_{n}^{-1}$ act at the boundary between the two regions $A$ and $B$, and effectively serve to link the different copies of the CFT with each other. In the case of a single interval with endpoints at the spatial coordinates $x=u$ and $x=v$, with $\ell=|u-v|$, the partition function is to be calculated on fields on a Riemann surface with $n$ sheets. In two dimensions we can expect to be able to compute this object as a path integral for replicated fields on the complex plane $\mathbb{C}$ where the Riemann surface is specified by a set of boundary conditions, Eq. (17.17). For the $n$-sheeted Riemann surface along interval $A$ the partition function $Z_{n}[A]$ becomes

$$
\begin{equation*}
Z_{n}[A] \sim\left\langle\mathcal{T}_{n}(u, 0) \mathcal{T}_{n}^{-1}(v, 0)\right\rangle \tag{17.24}
\end{equation*}
$$

where the expectation value is computed from the replica theory on the complex plane. The role of the operators $\mathcal{T}_{n}(u, 0)$ and $\mathcal{T}_{n}^{-1}(v, 0)$ is to enforce the boundary conditions of Eq. (17.17). Similarly, the expectation value of an operator in sheet $i=1, \ldots, n, \mathcal{O}(x, \tau ; i)$, on the $n$-sheeted Riemann surface is

$$
\begin{equation*}
\langle\mathcal{O}(x, \tau ; i)\rangle=\frac{\left\langle\mathcal{O}(x, \tau ; i) \mathcal{T}_{n}(u, 0) \mathcal{T}_{n}^{-1}(v, 0)\right\rangle}{\left\langle\mathcal{T}_{n}(u, 0) \mathcal{T}_{n}^{-1}(v, 0)\right\rangle} \tag{17.25}
\end{equation*}
$$

In the thermodynamic limit in which the length of the system $L \rightarrow \infty$, the conformal mapping

$$
\begin{equation*}
\zeta=\frac{w-u}{w-v} \tag{17.26}
\end{equation*}
$$

(where $w=x+i \tau$ ) maps the branch points to $(0, \infty)$. The conformal mapping

$$
\begin{equation*}
z=\zeta^{1 / n}=\left(\frac{w-u}{w-v}\right)^{1 / n} \tag{17.27}
\end{equation*}
$$

maps the $n$-sheeted Riemann surface onto the complex plane $\mathbb{C}$. In the case of a CFT the energy-momentum tensor (or stress-energy tensor) decomposes into
holomorphic and anti-holomorphic components (see Section 7.11). The holomorphic component of the stress-energy tensor $T(w)$ under a conformal mapping transforms as (Belavin et al., 1984; Di Francesco et al., 1997)

$$
\begin{equation*}
T(w)=\left(\frac{d z}{d w}\right)^{2} T(z)+\frac{c}{12}\{z, w\} \tag{17.28}
\end{equation*}
$$

where $\{z, w\}=\left(z^{\prime \prime \prime} z^{\prime}-\frac{3}{2} z^{\prime \prime 2}\right) / z^{\prime 2}$ is the Schwartzian derivative. However, in the plane $\langle T(z)\rangle_{\mathbb{C}}=0$, since the system is rotational and translation-invariant, it follows that the expectation value of the stress-energy tensor on the $n$-sheeted Riemann surface is

$$
\begin{equation*}
\langle T(w)\rangle=\frac{c}{12}\{z, w\}=\frac{c}{24}\left(1-\frac{1}{n^{2}}\right) \frac{(v-u)^{2}}{(w-u)^{2}(w-v)^{2}} \tag{17.29}
\end{equation*}
$$

But this should be the same as the computation of the expectation value of the stress-energy tensor in the $n$-sheeted Riemann surface. In particular, if the stressenergy tensor for the replicated Lagrangian is $n$ times this answer, this leads to the result

$$
\begin{equation*}
\frac{\left\langle T(w)^{(n)} \mathcal{T}_{n}(u, 0) \mathcal{T}_{n}^{-1}(v, 0)\right\rangle}{\left\langle\mathcal{T}_{n}(u, 0) \mathcal{T}_{n}^{-1}(v, 0)\right\rangle}=\frac{c}{24 n}\left(n^{2}-1\right) \frac{(v-u)^{2}}{(w-u)^{2}(w-v)^{2}} \tag{17.30}
\end{equation*}
$$

In CFT the fields obey a set of conformal Ward identities (Belavin et al., 1984), which in this case take the form (Calabrese and Cardy, 2004; Calabrese et al., 2009)

$$
\begin{align*}
& \left\langle T(w)^{(n)} \mathcal{T}_{n}(u, 0) \mathcal{T}_{n}^{-1}(v, 0)\right\rangle \\
& \quad=\left(\frac{1}{w-u} \partial_{u}+\frac{d_{\mathcal{T}_{n}}}{(w-u)^{2}}+\frac{1}{w-v} \partial_{v}+\frac{d_{\mathcal{T}_{n}^{-1}}}{(w-v)^{2}}\right)\left\langle\mathcal{T}_{n}(u, 0) \mathcal{T}_{n}^{-1}(v, 0)\right\rangle \tag{17.31}
\end{align*}
$$

where $d_{\mathcal{T}_{n}}=d_{\mathcal{T}_{n}^{-1}}$ is the scaling dimension of the primary field $\mathcal{T}_{n}$ (and of $\mathcal{T}_{n}{ }^{-1}$ ). Using that, by definition of the scaling dimension

$$
\begin{equation*}
\left\langle\mathcal{T}_{n}(u, 0) \mathcal{T}_{n}^{-1}(v, 0)\right\rangle=\frac{1}{|u-v|^{2 d_{n}}} \tag{17.32}
\end{equation*}
$$

we can now identify the scaling dimension of the twist fields $d_{n}$ to be

$$
\begin{equation*}
d_{n}=\frac{c}{12}\left(n-\frac{1}{n}\right) \tag{17.33}
\end{equation*}
$$

Since the partition function

$$
\begin{equation*}
\operatorname{tr} \rho_{A}^{n}=\frac{Z_{n}[A]}{Z^{n}} \tag{17.34}
\end{equation*}
$$

is equivalent to the two-point function of the twist fields, Eq. (17.24), it should behave in the same way under conformal transformations. Hence, up to a nonuniversal constant $C_{n}$, we can make the identification

$$
\begin{equation*}
\operatorname{tr} \rho_{A}^{n}=C_{n}\left(\frac{v-u}{a}\right)^{-(c / 6)(n-1 / n)} \tag{17.35}
\end{equation*}
$$

where $a$ is a short-distance cutoff. It then follows that the Rényi and von Neumann entanglement entropies obey the scaling (Holzhey et al., 1994; Calabrese and Cardy, 2004)

$$
\begin{align*}
S_{A}^{(n)} & =\frac{c}{6}\left(1+\frac{1}{n}\right) \ln \left(\frac{\ell}{a}\right)+\text { constant }  \tag{17.36}\\
S_{A} & =\frac{c}{3} \ln \left(\frac{\ell}{a}\right)+\text { constant }
\end{align*}
$$

This is the main result.
Calabrese and Cardy also derived expressions for the entanglement entropy for a system with finite size $L$. In the case of periodic boundary conditions they found the result for a system of length $L$ and an interval $A$ of length $\ell$ :

$$
\begin{equation*}
S_{A}[L, \ell]=\frac{c}{3} \ln \left(\frac{L}{\pi a} \sin \left(\frac{\pi \ell}{L}\right)\right)+\text { constant } \tag{17.37}
\end{equation*}
$$

Using a conformal mapping $w \rightarrow z=(\beta /(2 \pi)) \ln w$ that maps each sheet on the $w$ plane onto an infinitely long cylinder of circumference $\beta$, which plays the role of the inverse temperature, Calabrese and Cardy derived a formula for $\operatorname{tr} \rho_{A}^{n}$ in a thermally mixed state at temperature $\beta^{-1}$ resulting in an entropy

$$
\begin{equation*}
S_{A}(T, \ell)=\frac{c}{3} \ln \left(\frac{\beta}{\pi a} \sinh \left(\frac{\pi \ell}{\beta}\right)\right)+\text { constant } \tag{17.38}
\end{equation*}
$$

At $T=0$ this result reproduces the result for the entanglement entropy in a 1D conformal field theory, Eq. (17.36). It also recovers the (expected) extensive local thermodynamic entropy in the high-temperature limit $T \gg \ell^{-1}$,

$$
\begin{equation*}
S=\frac{\pi c}{3} T \ell+\cdots \tag{17.39}
\end{equation*}
$$

The most powerful numerical method to simulate 1D systems is, at present, the density-matrix renormalization group (DMRG) (White, 1992; Schollwöck, 2005; Hallberg, 2006). The geometry used in DMRG calculations is a half-line with some specified boundary condition at the endpoint. This method involves the computation of the reduced density matrix of some region $A$, which we will take to be the interval $[0, \ell)$. The rest of the system is region $B$, and has length $L-\ell$. In
the case of this geometry Calabrese and Cardy found the following result for the entanglement entropy of region $A$ (Calabrese et al., 2009):

$$
\begin{equation*}
S_{A}[\ell, L]=\frac{c}{6} \ln \left(\frac{2 L}{\pi a} \sin \left(\frac{\pi \ell}{L}\right)\right)+\ln g+\text { constant } \tag{17.40}
\end{equation*}
$$

This result provides the most direct and efficient way to compute the central charge $c$ using numerical DMRG calculations. It shows that the entanglement entropy is a scaling function of $\ell / L$ with a form that allows the determination of the finite-size corrections. The constant term, $\ln g$, is the so-called boundary entropy of Affleck and Ludwig, as discussed in Section 15.6.3, which is a universal quantity that depends only on the boundary conditions. One may object to keeping the constant term, since it is in principle non-universal. However, if two different entanglement entropies are computed using the same regularization, their difference is finite and universal. Thus, the finite universal terms are actually meaningful and universal (in this sense) up to a choice of which conformally invariant boundary condition is considered. We will see in the next sections that in space dimensions $D>1$ the entanglement entropy is characterized by universal constant corrections to the non-universal area-law term.

### 17.6 Entanglement entropy in the quantum Lifshitz universality class

Very few results are known for quantum critical systems in space dimensions $D>1$. A special case in which the scaling behavior of the entanglement entropy in quantum critical systems has been studied in some detail is the quantum Lifshitz universality class, discussed in Section 9.15, which includes the quantum dimer model (QDM) and its generalizations, see Chapter 9. The scaling of the entanglement entropy in the quantum Lifshitz universality class was discussed first by Fradkin and Moore (2006), whose work we follow here in some detail, and was further refined in Fradkin (2009), Hsu and Fradkin (2010), Hsu et al. (2009b), and Oshikawa (2010). The scaling of the entanglement entropy in the quantum critical dimer-model wave function was determined (mostly numerically) by Stéphan and collaborators (Stéphan et al., 2009, 2011).

We will discuss this problem in terms of the ground-state wave function for the quantum Lifshitz model, which is given by (see Eq. (9.179))

$$
\begin{equation*}
\Psi_{0}[\varphi(x)]=\frac{1}{\sqrt{Z_{0}}} \exp \left(-\int d^{2} x \frac{\kappa}{2}(\vec{\nabla} \varphi(x))^{2}\right) \tag{17.41}
\end{equation*}
$$

where $\kappa$ is a parameter of the quantum Lifshitz model, which is specified in Eq. (9.161), and $Z_{0}$ is the norm of this wave function (see Eq. (9.180)),

$$
\begin{equation*}
Z_{0}=\left\|\Psi_{0}\right\|^{2}=\int \mathcal{D} \varphi \exp \left(-\int d^{2} x \kappa(\vec{\nabla} \varphi(\vec{x}))^{2}\right) \tag{17.42}
\end{equation*}
$$

Recall that the field $\varphi$ is compactified with compactification radius $R=1$. The quantum critical point of the Rokhsar-Kivelson QDM is represented by the choice of the parameter $\kappa=1 /(8 \pi)$.

The wave functions of the quantum Lifshitz universality class (and its generalization) have the special property that the weight of a field configuration $[\varphi]$ in the wave function is local and has the form of the Gibbs weights in a conformally invariant classical system in two space dimensions. Consequently, the norm $Z_{0}$ of these wave functions is equivalent to a conformally invariant classical partition function in two dimensions (Ardonne et al., 2004).

Let us first consider the case in which the system is defined on a large disk of diameter $L$ with some boundary conditions at infinity. We will consider the plane geometry shown in Fig. 17.3. In this case the "entangling region" will be a simply connected region $A$ with the topology of a disk of diameter $\ell$ with boundary $\Gamma$. The complement of region $A$ is region $B$. The wave function has the form $\Psi_{0}\left[\varphi_{A}, \varphi_{B}\right]$, where $\left[\varphi_{A}\right]$ and $\left[\varphi_{B}\right]$ label the degrees of freedom on regions $A$ and $B$, respectively.

For conformal quantum critical points, the Hilbert space has an orthonormal basis of states $|\{\varphi\}\rangle$ indexed by classical configurations $\{\varphi\}$, and the ground state $\left|\Psi_{0}\right\rangle$ of the bipartite system is determined by a local CFT action $S[\varphi]$ :
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-788.jpg?height=711&width=644&top_left_y=1274&top_left_x=533)

Figure 17.3 The disk geometry: the observed region $A$ has diameter $\ell$ and the entire system is also a disk of diameter $L . B$ is the annular region and is the complement of the disk $A$.

$$
\begin{equation*}
\left|\Psi_{0}\right\rangle=\frac{1}{\sqrt{Z_{0}}} \int \mathcal{D} \varphi e^{-S(\{\varphi\}) / 2}|\{\varphi\}\rangle \tag{17.43}
\end{equation*}
$$

Here

$$
\begin{equation*}
Z_{0}=\int \mathcal{D} \varphi e^{-S(\{\varphi\})} \tag{17.44}
\end{equation*}
$$

and expectation values in this state reproduce CFT correlators.
Fradkin and Moore (2006) used the "replica trick" to compute the entanglement entropy (Holzhey et al., 1994; Calabrese and Cardy, 2004) for conformally invariant wave functions, and showed that the trace of the $n$th power of the reduced density matrix, $\operatorname{tr} \rho_{A}^{n}$, where $\rho_{A}$ is the reduced density matrix of a region $A$ (where $A$ and $B$ form a partition of the entire system $A \cup B$, and are separated by their common boundary $\Gamma$ ) for the ground state $\Psi_{0}$ on $A \cup B$, is given by

$$
\begin{equation*}
\operatorname{tr} \rho_{A}^{n}=\frac{Z_{n}}{Z^{n}} \tag{17.45}
\end{equation*}
$$

Here $Z_{n}$ is the partition function of $n$ copies of the equivalent 2D classical statistical-mechanical system satisfying the constraint that their degrees of freedom are identified on the boundary $\Gamma$, and $Z^{n}$ is the partition function for $n$ decoupled systems.

In order to construct $\operatorname{tr} \rho_{A}^{n}$, we need an expression for the matrix elements of the reduced density matrix $\left\langle\varphi^{A}\right| \rho_{A}\left|\varphi^{\prime A}\right\rangle$. Since the ground-state wave function is a local function of the field $\varphi(x)$, a general matrix element of the reduced density matrix is a trace of the density matrix of the pure state $\Psi_{\mathrm{GS}}[\varphi]$ over the degrees of freedom of the "unobserved" region $B$, denoted by $\varphi^{B}(x)$. Hence the matrix elements of $\rho_{A}$ take the form

$$
\begin{equation*}
\left\langle\varphi^{A}\right| \hat{\rho}_{A}\left|\varphi^{\prime A}\right\rangle=\frac{1}{Z} \int\left[D \varphi^{B}\right] \exp \left[-\left(\frac{1}{2} S^{A}\left(\varphi^{A}\right)+\frac{1}{2} S^{A}\left(\varphi^{\prime A}\right)+S^{B}\left(\varphi^{B}\right)\right)\right] \tag{17.46}
\end{equation*}
$$

where the degrees of freedom satisfy the boundary condition at the common boundary $\Gamma$ :

$$
\begin{equation*}
B C_{\Gamma}:\left.\quad \varphi^{B}\right|_{\Gamma}=\left.\varphi^{A}\right|_{\Gamma}=\left.\varphi^{\prime A}\right|_{\Gamma} \tag{17.47}
\end{equation*}
$$

Proceeding with the computation of $\operatorname{tr} \rho_{A}^{n}$, one immediately sees that the matrix product requires the condition $\varphi_{i}^{A}=\varphi_{i-1}^{\prime A}$ for $i=1, \ldots, n$, and $\varphi_{n}^{\prime A}=\varphi_{1}^{A}$ from the trace condition. Hence, $\operatorname{tr} \rho_{A}^{n}$ takes the form

$$
\begin{align*}
\operatorname{tr} \rho_{A}^{n} & \equiv \frac{Z_{n}}{Z^{n}} \\
& =\frac{1}{Z^{n}} \int_{B C_{\Gamma}} \prod_{i} D \varphi_{i}^{A} D \varphi_{i}^{B} e^{-\sum_{i=1}^{n}\left(S\left(\varphi_{i}^{A}\right)+S\left(\varphi_{i}^{B}\right)\right)} \tag{17.48}
\end{align*}
$$

subject to the boundary condition $B C_{\Gamma}$ of Eq. (17.47).
This result shows that the numerator of Eq. (17.48), $Z_{n}$, is the partition function of $n 2 \mathrm{D}$ classical systems, each with the same energy functional $S[\varphi]$, whose degrees of freedom are identified with each other on the boundary $\Gamma$ that separates regions $A$ and $B$, but which are otherwise independent. Hence, $Z_{n}$ is the partition function of a classical 2D critical system on the "book" geometry shown in Fig. 17.4. In contrast, the denominator, $Z^{n}$, is the partition functor of the same $n$ decoupled systems. Since the systems are conformally invariant away from their common boundary and since the boundary condition is consistent with the condition of conformal invariance, we have effectively mapped the computation of the entanglement entropies to a problem in 2D boundary CFT.

The expression for $\operatorname{tr} \rho_{A}^{n}$ given in Eq. (17.48) implies that the replicated partition function $Z_{n}$ is invariant under the permutations of the $n$ replicas. Actually, it is invariant under the action of the permutation group $S_{n}$ independently on regions $A$ and $B$. Also, since the fields have to agree on the boundary $\Gamma, Z_{n}$ is also invariant under a simultaneous global shift of all the replicated fields in both regions. This condition implies that nothing physical happens at the common boundary $\Gamma$, which, after all, is an arbitrary device.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-790.jpg?height=630&width=784&top_left_y=1400&top_left_x=463)

Figure 17.4 The book geometry of the replicated system. The fields are identified with each other at the common boundary $\Gamma$ between regions $A$ and $B$.

The specific problem we want to address here is the scaling behavior of the von Neumann entanglement entropy (and of the associated Rényi entropies). To this end, it will be useful to introduce the following notation. Let $F_{1}=-\ln Z$ be the classical partition function of one of the $n$ decoupled copies (or replicas) and $F_{n}=-\ln Z_{n}$ the classical partition function of the system of $n$ replicas identified along $\Gamma$. Then we can formally relate the von Neumann entanglement entropy $S_{A}$ to the expression

$$
\begin{equation*}
S_{A}=\lim _{n \rightarrow 1} \frac{F_{n}-n F_{1}}{n-1} \tag{17.49}
\end{equation*}
$$

where the dependence on $n$ has to be understood as an analytic continuation to the complex- $n$ plane. The free energy of a physical system in two dimensions with a well-defined thermodynamic limit has a leading extensive term, $F=L^{2} f+\ldots$, where $L$ is the linear size of the system and $f$ is the free-energy density. Here the ellipsis indicates the finite-size corrections. These are generally expected to include a perimeter term, $O(L)$, constant terms $O\left(L^{0}\right)$, and possibly a term that depends logarithmically on $L$ (Privman and Fisher, 1984; Privman, 1988),

$$
\begin{equation*}
F=L^{2} f+\sigma L+a \ln L+b+O\left(L^{-1}\right) \tag{17.50}
\end{equation*}
$$

Since the copies in the replicated system are identical away from the contour $\Gamma$, which can be viewed as a "defect" in the replicated system, it is clear that the extensive terms (proportional to the free-energy density) must be the same for $F_{n}$ and for $n F_{1}$ and hence must cancel out exactly. Therefore, in the limit $L \gg \ell \gg a$, we expect the von Neumann entanglement entropy to have the following form:

$$
\begin{equation*}
S_{A}=\alpha \ell+C \ln \left(\frac{\ell}{a}\right)+\Phi\left(\frac{\ell}{L}\right)+O\left(\ell^{-1}\right) \tag{17.51}
\end{equation*}
$$

where the first term is the non-universal "area law" (in 2D it is a perimeter), $C$ is a constant, and $\Phi(x)$ is a dimensionless function of the aspect ratio $\ell / L$. We will see below that this general argument is correct.

As a first step let us consider the case in which the field $\varphi$ is free, which is the case in the quantum Lifshitz model. In this case it is obvious that the field $\varphi=\sum_{j=1}^{n} \varphi_{n}$ decouples and does not see the boundary $\Gamma$. It further obeys the same boundary conditions at spatial infinity as the individual copies. So one expects that it should be possible to write the partition function $Z_{n}$ as a product of two terms, one of which is the partition function of just one copy (the field $\varphi$ ) and the other is a partition function for the remaining $n-1$ copies, $\tilde{Z}_{n-1}$. However, in the partition function $\tilde{Z}_{n-1}$ the replica fields can enter only as the $n-1$ differences, say $\tilde{\varphi}_{j}=\varphi_{j+1}-\varphi_{j}($ for $j=1, \ldots, n-1$ ), and these fields must now vanish
at the common boundary $\Gamma$, which is to say they must obey Dirichlet boundary conditions on $\Gamma$. This assumption implies that the trace of the $n$th power of the reduced density matrix is a simple power, $\operatorname{tr} \rho_{A}^{n} \propto \operatorname{constant}^{n}$. We will see below that this is not quite correct.

If this argument were literally correct, we would be able to write a simpler expression for the entanglement entropy. The partition functions on the r.h.s. of Eq. (17.45) are $Z_{A}=\left\|\Psi_{0}^{A}\right\|^{2}$ with support in region $A$ and $\left\|\Psi_{0}^{B}\right\|^{2}$ with support in region $B$, both satisfying generalized Dirichlet (i.e. fixed) boundary conditions on $\Gamma$ of $A$ and $B$, and $Z_{A \cup B}=\left\|\Psi_{0}\right\|^{2}$ is the norm squared for the full system. The entanglement entropy $S$ is then obtained by an analytic continuation in $n$ (Fradkin and Moore, 2006; Hsu et al., 2009b),

$$
\begin{align*}
S_{A}=-\operatorname{tr}\left(\rho_{A} \ln \rho_{A}\right) & =-\lim _{n \rightarrow 1} \frac{\partial}{\partial n} \operatorname{tr} \rho_{A}^{n}=-\log \left(\frac{Z_{A} Z_{B}}{Z_{A \cup B}}\right) \\
& =F_{A}+F_{B}-F_{A \cup B} \tag{17.52}
\end{align*}
$$

where $F_{A}$ and $F_{B}$ are the free energies of a free field in regions $A$ and $B$ with Dirichlet boundary conditions on $\Gamma$, and $F_{A \cup B}$ is the free energy for the whole system. Hence, the computation of the entanglement entropy is reduced to the computation of a ratio of partition functions in a 2D classical statistical-mechanical problem, a Euclidean CFT in the case of a critical wave function, each satisfying specific boundary conditions. Notice that if these arguments are correct then the ratio $Z_{n} / Z^{n}$ can be written as a simple power of $n$ with no other dependence on $n$ left. We will see below that, while this argument is almost right, there are small but conceptually significant corrections. We will first proceed with the assumption that Eq. (17.52) is an identity.

The dependence of the free energy on the size of the system for different boundary conditions is a problem in boundary CFT. This problem was first discussed by the mathematician Mark Kac (Kac, 1966), who was interested in the problem of spectral geometry. In physics terms Kac was interested in the spectrum of the Laplacian operator in two dimensions in regions of various shapes. He posed this problem as the following question: can you hear the shape of a drum? In the present context we can rephrase the question as "can you hear the shape of a quantum drum?" (or of Schrödinger's cat?). This problem has since been reanalyzed by people working in CFT (and in string theory). The most complete expression of the asymptotic form of the free energy, and the one that will be useful to us, is due to Cardy and Peschel (1988), who showed that the free energy of a 2D Euclidean CFT of central (Virasoro) charge $c$ has the following finite-size dependence in a region of linear size $L$ and smooth boundary $\Gamma$ :

$$
\begin{equation*}
F=f L^{2}+\sigma L-\frac{c}{6} \ln \left(\frac{L}{a}\right)+O\left(L^{0}\right) \tag{17.53}
\end{equation*}
$$

where $f$ is the (non-universal) free-energy density, $\sigma$ is the (non-universal) surface tension, $c$ is the central charge of the conformal field theory, and $\chi$ is the Euler characteristic of the region under consideration,

$$
\begin{equation*}
\chi=2-2 h-b \tag{17.54}
\end{equation*}
$$

where $h$ is the number of handles of the region and $b$ is the number of boundaries.
By direct application of Eq. (17.53), the entanglement entropy $S_{A}$ becomes (using Eq. (17.52))

$$
\begin{equation*}
S_{A}=\alpha \ell-\frac{c}{6} \Delta \chi \ln \left(\frac{\ell}{a}\right)+O(1) \tag{17.55}
\end{equation*}
$$

where the Euler characteristics of the disk $A$, the annular region $B$, and the large disk $A \cup B$ enter through the expression

$$
\begin{equation*}
\Delta \chi=\chi_{A}+\chi_{B}-\chi_{A \cup B} \tag{17.56}
\end{equation*}
$$

However, for a region $A \subset A \cup B$ with a smooth boundary $\Gamma, \Delta \chi=0$ since in this case $\chi_{A}+\chi_{B}=\chi_{A \cup B}$. Hence, this argument predicts that in this case there is no term that scales as $\ln (\ell / a)$. This raises the possibility that the $O(1)$ term may actually be universal.

On the other hand, if the boundary $\Gamma$ is not smooth, logarithmic terms do exist. Imagine, for instance, a simply connected region $A$ whose boundary $\Gamma$ is piecewise smooth but has cusp singularities (corners) at isolated points, with interior angle $\gamma$, $0<\gamma<2 \pi$. In this case, Cardy and Peschel found a logarithmic contribution to the free energy of the form

$$
\begin{equation*}
\Delta F=\frac{c \gamma}{24 \pi}\left(1-\frac{\pi^{2}}{\gamma^{2}}\right) \tag{17.57}
\end{equation*}
$$

Since all other contributions to the entanglement entropy vanish, aside from the "area-law term," we conclude that a corner will give a logarithmic contribution of the form of Eq. (17.57). A similar logarithmic term is found if region $A$ is not fully contained inside region $B$, but its boundary now disconnects the system in two disjoint and simply connected regions. The logarithmic term originates from the conical singularities at the intersection of the boundary $\gamma$ with the outer boundaries of the system (Fradkin and Moore, 2006).

Let us now ask whether the assumptions that led to Eq. (17.52) are actually correct. Let us consider for simplicity the case of the cylinder geometry shown in Fig. 17.5. This problem was discussed by Hsu and collaborators (Hsu et al., 2009b; Hsu and Fradkin, 2010) and by Oshikawa (2010). It was also investigated numerically and analytically by Stéphan and coworkers in the QDM wave functions (Stéphan et al., 2009). A direct application of the result of Eq. (17.52) leads to
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-794.jpg?height=237&width=644&top_left_y=195&top_left_x=540)

Figure 17.5 The cylinder geometry.
the computation of the partition function of a 2D Euclidean scalar field with compactification radius $R=\sqrt{8 \pi \kappa}$, where $\kappa$ is the parameter of the quantum Lifshitz model. Recall that for the QDM $\kappa=1 /(8 \pi)$, and hence $R=1$. For the generalized QDMs (Papanikolaou et al., 2007b) and for the quantum eight-vertex model (Ardonne et al., 2004), the parameter $\kappa$ varies continuously from $\kappa=1 /(8 \pi)$ to $\kappa=1 /(4 \pi)$ at a Kosterlitz-Thouless transition.

I will assume that the system obeys Dirichlet boundary conditions on the circles (each with circumference $\ell$ ) at both ends of the cylinder. Thus in this case $Z_{A}, Z_{B}$, and $Z_{A \cup B}$ obey Dirichlet boundary conditions at both ends. The partition function $Z_{\mathrm{DD}}$ for a free boson on a cylinder with compactification radius $R$ with Dirichlet boundary conditions at both ends of the cylinder is (Fendley et al., 1994)

$$
\begin{equation*}
Z_{\mathrm{DD}}=\frac{\text { constant }}{R} \times \frac{\vartheta_{3}\left(2 \tau / R^{2}\right)}{\eta\left(q^{2}\right)} \tag{17.58}
\end{equation*}
$$

where $\tau=i L / \ell$ is the modular parameter and $q=e^{2 \pi i \tau}$, and where we have introduced the elliptic theta function $\vartheta_{3}(\tau)$ and the Dedekind eta function $\eta(q)$, which are, respectively, given by

$$
\begin{equation*}
\vartheta_{3}(\tau)=\sum_{n=-\infty}^{\infty} q^{n^{2} / 2}, \quad \eta(q)=q^{1 / 24} \prod_{n=1}^{\infty}\left(1-q^{n}\right) \tag{17.59}
\end{equation*}
$$

In general the resulting expression for the entanglement entropy depends on the various aspect ratios $\ell / L$. However, in the limit of long cylinders, $L \gg \ell$, we obtain a simple expression for the $O(1)$ term of the entanglement entropy (Hsu et al., 2009b),

$$
\begin{equation*}
S_{A}^{\text {cylinder }}=\alpha \ell+\ln R \tag{17.60}
\end{equation*}
$$

which is a continuous function of the compactification radius $R$.
A similar computation for the case of the torus (shown in Fig. 17.6) also leads to a finite and universal $O(1)$ term in the entanglement entropy,

$$
\begin{equation*}
S_{A}^{\text {torus }}=\alpha \ell+2 \ln \left(\frac{R^{2}}{2}\right) \tag{17.61}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-795.jpg?height=376&width=618&top_left_y=206&top_left_x=539)

Figure 17.6 The torus geometry.

On the other hand, for the case of the disk geometry of Fig. 17.3, in addition to a universal constant term, one also finds a term that depends explicitly on the aspect ratio $\ell / L$ :

$$
\begin{equation*}
S_{A}^{\mathrm{disk}}=\alpha \ell+\frac{1}{2} \ln \left[\frac{1}{\pi} \ln \left(\frac{L}{\ell}\right)\right]+\ln R \tag{17.62}
\end{equation*}
$$

The origin of the dependence on the aspect ratio $L / \ell$ is the fact that on the disk the boundary has a finite radius of curvature.

These results, which are based on Eq. (17.52), lead to the conclusion that, except for possible functions of the aspect ratio, the entanglement entropy of 2D scaleinvariant wave functions has a universal $O(1)$ term. These results were based on the factorization assumption which implied that the dependence on $n$ of $\operatorname{tr} \rho_{A}^{n}$ is a simple power. It turns out that the correct dependence on $n$ has a $\sqrt{n}$ prefactor. This result was derived by direct computation with the compactified theory by constructing the boundary state for the compactified boson explicitly (Hsu and Fradkin, 2010; Oshikawa, 2010) and leads to the result (for the cylinder geometry)

$$
\begin{equation*}
S_{A}^{\text {cylinder }}=\alpha \ell+\ln R-\frac{1}{2} \tag{17.63}
\end{equation*}
$$

which agrees with the numerical results of Stéphan et al. (2009). The origin of this term is the structure of the compactification lattice of the difference fields, $\tilde{\varphi}_{j}$. Notice that, since the wave function of the quantum Lifshitz model maps onto a 2D Euclidean CFT with central charge $c=1$, this quantity does not appear in our formulas. Nevertheless, they do depend on the compactification radius $R$ which determines the operator content of the theory.

The generalization of this universal condition for generic conformally invariant wave functions is not known at present. Hsu and coworkers (Hsu et al., 2009b) used the (most likely generally incorrect) formula of Eq. (17.48) which relates the universal constant term to the modular $S$-matrix of the 2D CFT of the wave function. It is curious that for the special case of the 2D Ising wave function this
prediction is consistent with the numerical results (Stéphan et al., 2010) (except for a subtle behavior as $n \rightarrow 1$ ). At any rate, these results confirm the expectation that in 2D quantum critical systems the entanglement entropy has a universal $O(1)$ correction to the area-law term. We will see next that conventional relativistic $\phi^{4}$ theory has an entanglement entropy with the same scaling behavior at its quantum critical point. Thus, we expect this to be the generic universal scaling behavior for space dimensions $d>1$, regardless of the type of dynamics the system has.

### 17.7 Entanglement entropy in $\phi^{4}$ theory

The behavior of the entanglement entropy in a generic quantum critical, i.e. relativistically invariant, quantum field theory in $D=d+1>2$ dimensions, where $d$ is the number of space dimensions, is much less well understood than the two previous examples. Aside from the omnipresent area law, in general logarithmic terms are absent unless the region being observed is not smooth (Fursaev, 2006; Casini and Huerta, 2007, 2009). A logarithmic dependence on the linear size of the observed region is also present in systems with a spontaneously broken continuous symmetry, e.g. in the non-linear sigma model for $d>1$ and the related quantum Heisenberg antiferromagnet (discussed in Chapter 7) (Metlitski and Grover, 2011; Ju et al., 2012).

However, we are interested here in the scaling at the quantum critical point of the entanglement entropy. Metlitski, Fuertes, and Sachdev (Metlitski et al., 2009) considered the scaling of the entanglement entropy in the relativistically invariant $O(N) \phi^{4}$ theory in $d=3-\epsilon$ space dimensions. The Euclidean action in $D=d+1$ dimensions, with imaginary time $\tau$, for an $N$-component real field with $O(N)$ global symmetry is given by $(\mu=1, \ldots, D)$

$$
\begin{equation*}
S=\int d^{d} x d \tau\left[\frac{1}{2}\left(\partial_{\mu} \vec{\phi}\right)^{2}+\frac{t}{2} \vec{\phi}^{2}+\frac{\lambda}{4}\left(\vec{\phi}^{2}\right)^{2}\right] \tag{17.64}
\end{equation*}
$$

Here one is interested in the quantum critical theory, which means that we will need to set the renormalized mass (squared) $t_{\mathrm{R}}=0$. Since it is a relativistically invariant theory it has dynamical exponent $z=1$. They considered the cylinder geometry shown in Fig. 17.5. The calculation is technically complex and I will not give the details here.

As in the example of the last section, we divide space (but not time!) into two disjoint but complementary regions $A$ and $B$, with the boundary being a $(d-1)$ dimensional region $\mathcal{B}$. Here we will take $\mathcal{B}$ to be a plane located at the spatial coordinate $x=0$. The coordinates along the boundary directions are denoted by $x_{\perp}$. To compute the entanglement entropies (von Neumann and Rényi) we will use again the replica trick. This means that we will once again compute the partition function $Z_{n}$ for a theory with $n$ copies that are stitched together at the boundary
$\mathcal{B}$. The result is again an $n$-sheeted Riemann surface that lies in the plane spanned by $x_{\|}=(\tau, x)$ and has a conical singularity at $(\tau, x)=(0,0)$. This surface is invariant under translations and rotations along the perpendicular directions $x_{\perp}$. In this geometry it is natural to use polar coordinates in the $x_{\|}$plane, $(r, \theta)$. The metric in these coordinates is simply $d s^{2}=d r^{2}+r^{2} d \theta^{2}+d x_{\perp}^{2}$. This is just the usual Euclidean metric except that the angular variable has a modified period $\theta \rightarrow \theta+2 \pi n$ to reflect the conical singularity.

As a function of the ultraviolet (UV) cutoff $a$ the entanglement entropy has the general scaling form

$$
\begin{equation*}
S_{A}=g_{d-1}(\mathcal{B}) a^{-(d-1)}+g_{d-2}(\mathcal{B}) a^{-(d-2)}+\cdots+g_{0}(\mathcal{B}) \ln \left(\frac{\ell}{a}\right) \tag{17.65}
\end{equation*}
$$

where $\ell$ is the linear size of the region $A$. The first term is the area law discussed before. For $d=3-\epsilon$ Metlitski and collaborators found that the entanglement entropy for the cylinder geometry at the Wilson-Fisher fixed point has the same scaling behavior as what we found in the quantum Lifshitz model,

$$
\begin{equation*}
S_{A}=C\left(\frac{\ell}{a}\right)^{d-1}+\gamma \tag{17.66}
\end{equation*}
$$

To leading order in the $\epsilon$ expansion at the Wilson-Fisher fixed point the universal contribution $\gamma$ is given by

$$
\begin{equation*}
\gamma=-\frac{N \epsilon}{6(N+8)}\left[\ln \left|\vartheta_{1}\left(\frac{\phi}{2 \pi}(1+i), i\right)\right|-\frac{\phi^{2}}{4 \pi}-\ln \eta(i)\right] \tag{17.67}
\end{equation*}
$$

where $i=\sqrt{-1}$, and $\vartheta_{1}$ and $\eta$ are the Jacobi elliptic and Dedekind eta functions. Here $\phi$ is a twist in the boundary conditions along the directions labeled by $x_{\perp}$, which was introduced by Metlitski and coworkers in order to remove a zero mode. They also suggested that for zero twist the result is non-analytic in $\epsilon$,

$$
\begin{equation*}
\gamma=-\frac{N \epsilon}{12(N+8)} \ln \epsilon \tag{17.68}
\end{equation*}
$$

On the other hand, at the infrared (IR)-unstable free-field fixed point in $d=3-\epsilon$ dimensions $\gamma$ is instead given by

$$
\begin{equation*}
\gamma=-\frac{N}{6}\left[\ln \left|\vartheta_{1}\left(\frac{\phi}{2 \pi}(1+i), i\right)\right|-\frac{\phi^{2}}{4 \pi}-\ln \eta(i)\right] \tag{17.69}
\end{equation*}
$$

This result suggests that the universal term $\gamma$ decreases under the RG flow. The decrease of the universal term of the entanglement entropy under the action of the RG flow is reminiscent of Zamolodchikov's $c$ theorem in 2D perturbed CFT (Zamolodchikov, 1986). This behavior of the universal term of the entanglement entropy was also found by Myers and Singh (2012) using the AdS/CFT program that we will discuss in the next section.

### 17.8 Entanglement entropy and holography

A different perspective on the scaling and universal properties of quantum entanglement in quantum field theories, and hence also in strongly coupled systems in condensed matter physics, is related to the concept of holography. Holography here means that the quantum field theories which describe our world are actually holographic images of a theory of gravity in higher dimensions ('t Hooft, 1993; Susskind, 1995). As a concept, holography originally took shape as a way to understand the physics of black holes. It has since become central to the understanding of strongly coupled quantum field theories. In 1997 Maldacena realized that the classical (weak-coupling) limit of a superstring theory in a 5D spacetime with a background anti-de Sitter (AdS) metric is equivalent, or "dual," to the strong-coupling limit of a super-Yang-Mills gauge theory in four (flat) Minkowski space-time dimensions. For this reason the Maldacena conjecture is known as the gauge/gravity duality (Gubser et al., 1998; Maldacena, 1998; Witten, 1998; Aharony et al., 2000; Maldacena, 2012). In this section we will briefly explain the main ideas of holography and then use them to discuss the problem of the scaling of entanglement entropy in general CFTs (Ryu and Takayanagi, 2006a, 2006b; Nishioka et al., 2009). A particularly insightful introduction to this problem is given in McGreevy (2010).

### 17.8.1 The CFT/AdS correspondence

Anti-de Sitter (AdS) space is a space-time with negative curvature in $(d+1)$ dimensions with the metric

$$
\begin{equation*}
d s^{2}=\frac{R^{2}}{u^{2}}\left(d u^{2}-d x_{0}^{2}+\sum_{i=1}^{d-1} d x_{i}^{2}\right) \tag{17.70}
\end{equation*}
$$

In the AdS geometry the limit $u \rightarrow 0$ can be viewed as the boundary of the spacetime, and $u \rightarrow \infty$ corresponds to space-time points deep in this geometry, with a horizon at $u=\infty$. The parameter $R$ is the radius of curvature of the AdS spacetime, measured in units in which the Planck length $\ell_{\mathrm{P}}=1$. The AdS metric has the special property that a scale transformation (dilatations) of the Minkowski part of the metric of the form $x_{\mu} \rightarrow \lambda x_{\mu}$ can be absorbed in a rescaling of the extra dimension on the $\operatorname{AdS}$ space, $u \rightarrow \lambda u$. Hence dilatations are isometries of the AdS geometry. This also means that the limit of $u \rightarrow 0$ can be viewed as the short-distance, UV, limit in Minkowski space-time. Similarly, the $u \rightarrow \infty$ limit corresponds to space-time points deep inside the AdS geometry and represents the long-distance, IR, limit in Minkowski space-time.

The gauge/gravity duality or, more generally, the CFT/gravity duality, is the statement that all the physics in an asymptotically AdS space-time can be described
by a local conformal quantum field theory that resides at the boundary, which looks like flat Minkowski space-time in $d$ space-time dimensions. In particular, the isometries of the AdS geometry act as space-time symmetries on the boundary. These isometries are equivalent to the conformal group in $d$ dimensions, $\mathrm{SO}(2, d)$, which includes the Poincaré group of the flat Minkowski space-time $\mathcal{M}$, the dilatation, and the special conformal transformations. Hence, the quantum field theory on the boundary is a CFT. In particular, the dilatation isometry of the AdS geometry becomes scale invariance of the quantum field theory at the boundary. In this holographic picture the short-distance (UV) behavior of a scale-invariant, conformal, field theory on the boundary of the AdS space maps to the long-distance (IR) behavior of a classical theory of gravity defined deep in the bulk of AdS space-time.

Let us consider the classical field theory of a field $\phi$ in the AdS space-time, and let $\phi_{0}$ be the value of the classical field on the boundary of AdS space-time. We will denote by $Z\left(\phi_{0}\right)$ the partition function of the gravity theory coupled to the field $\phi$, with boundary condition $\phi_{0}$, and by $\mathcal{O}$ a local operator of the CFT defined on the boundary of AdS space-time whose source is $\phi_{0}$. Then, the $\mathrm{CFT} /$ gravity duality is the identification (Gubser et al., 1998; Witten, 1998)

$$
\begin{align*}
Z_{\mathrm{CFT}} & =Z_{\mathrm{AdS} \text { gravity }} \\
\left\langle\exp \left(\int_{\mathcal{M}} d^{d} x \phi_{0}(x) \mathcal{O}(x)\right)\right)_{\mathrm{CFT}} & =Z\left(\phi_{0}\right)_{\mathrm{AdS} \text { gravity }} \tag{17.71}
\end{align*}
$$

The picture of the 4D Minkowski space-time as the boundary or "edge" of the 5D AdS space is somewhat (but not completely) analogous to the bulk-edge correspondence in quantum Hall fluids. In this context, duality is understood, as in other sections of this book, as a mapping relating a weakly coupled theory to another strongly coupled but generally different theory. Here the two theories are so different that they even live in different dimensions!

This CFT/gravity duality further suggests that the AdS coordinate should be regarded as a scale transformation in quantum field theory (Susskind and Witten, 1998; Witten, 1998). In other words, the action of successive RG transformations on a quantum field theory, which, as we saw, makes the coupling constants scaledependent quantities, can be regarded geometrically as defining an extra dimension (the local scale) in addition to the usual space-time dimensions. Hence the family of theories related by RG transformations can be viewed as a single theory defined on a higher-dimensional space-time with an AdS geometry (Heemskerk and Polchinski, 2011). This interpretation of the RG flow is shown in Fig. 17.7. Heemskerk and Polchinski (2011) have shown that there is a precise connection between the Wilsonian construction of the RG in quantum field theory and the holographic RG.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-800.jpg?height=550&width=1222&top_left_y=243&top_left_x=244)

Figure 17.7 The AdS/CFT correspondence: a sequence of RG transformations (left) is equivalent to the AdS geometry (right) (after J. McGreevy (McGreevy, 2010)).

Also, an interesting, explicit, construction of a gravity dual as a theory of a family of RG transformations has been proposed by Lee (2010, 2011).

The CFT/gravity duality (or CFT/AdS correspondence) has been extended from its original formulation relating string theory (or supergravity) to the strongcoupling limit of the large- $N$ limit of super-Yang-Mills theories to describe more general strongly coupled theories. For instance a CFT at finite temperature is described by this duality as a theory of gravity on AdS space-time with a black hole deep in the $(d+1)$-dimensional geometry. This description relates the BekensteinHawking temperature of the black hole to the temperature of the CFT. It also provides an explanation for the Bekenstein-Hawking entropy that is consistent with the requirements of unitarity and the conservation of information. This relation resolved the information paradox posed by Hawking in 1980 (Susskind, 2008). The CFT/AdS correspondence also has important applications to poorly understood problems in condensed matter physics such as the behavior of Fermi fluids near quantum critical points and in so-called "non-Fermi-liquid" phases. We will not discuss here this important problem (since we have not discussed Fermi-liquid theory in the first place!), work on which is rapidly developing (Hartnoll et al., 2010; McGreevy, 2010; Liu et al., 2011; Hartnoll, 2012).

### 17.8.2 Holography and entanglement entropy

We will now apply the ideas of holography to the problem of the scaling of entanglement entropy in CFTs. This problem was first considered by Ryu and

Takayanagi, who used this approach to find a startling result (Ryu and Takayanagi, 2006b).

Let us consider first the CFT/gravity duality for the case of a bulk $\mathrm{AdS}_{3}$. The boundary theory is then a conformal field theory in $(1+1)$ dimensions. In principle, to apply the CFT/AdS gravity correspondence to this problem, using Eq. (17.71), requires one to find the $\mathrm{AdS}_{3}$ geometry that corresponds to the $n$-sheeted Riemann surface on which the $\mathrm{CFT}_{2}$ is defined (as discussed in Section 17.5). Since this is a complex problem, Ryu and Takayanagi opted to conjecture that the following, much simpler, relation applies. It is worth emphasizing that there is strong evidence that this conjecture predicts correct results. For instance, its predictions are consistent with the physical argument that the entanglement entropy should obey strong subadditivity.

For concreteness we will consider the situation shown in Fig. 17.8, in which region A is a segment of length L (on the boundary) and region B is the complement of a CFT defined on a circle, i.e. we have periodic boundary conditions in space. Ryu and Takayanagi conjectured that this geometry is the $n$-sheeted $\mathrm{AdS}_{3}$ and its generalization to higher dimensions, which is defined by putting the deficit angle $\delta=2 \pi(1-n)$ localized on a co-dimension-2 surface $\gamma_{\mathrm{A}}$ (including time). With this assumption they showed that the action for Einstein's gravity on the $n$-sheeted $\mathrm{AdS}_{d+1}$ geometry in general dimension $d$ is the generalization of the EinsteinHilbert action (this assumption was shown to be correct by Casini et al. (2011) for the case in which the entangling surface is $S^{d-1}$ that is bipartitioning the total space $S^{d}$ ),

$$
\begin{equation*}
S_{\mathrm{AdS}}=-\frac{1}{16 \pi G_{\mathrm{N}}^{(d+1)}} \int_{M} d^{d+1} x \sqrt{g}(R+\Lambda)+\cdots \tag{17.72}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-801.jpg?height=646&width=714&top_left_y=1463&top_left_x=486)

Figure 17.8 Entanglement entropy and the CFT/AdS correspondence.
where $G_{\mathrm{N}}^{(d+1)}$ is the Newton constant of the $\mathrm{AdS}_{d+1}$ gravity, and $R$ is the (Ricci scalar) curvature

$$
\begin{equation*}
R=4 \pi(1-n) \delta\left(\gamma_{\mathrm{A}}\right)+R^{0} \tag{17.73}
\end{equation*}
$$

where $R^{0}$ is the scalar curvature of the $\operatorname{AdS}_{d+1}$ space-time.
We will now equate the partition function of the $\mathrm{CFT}_{d}$ on the $n$-sheeted Riemann surface with the partition function for gravity on the modified $\mathrm{AdS}_{d+1}$ geometry we just described. This allows us to find an expression for the entanglement entropy for region A . That is, $S_{\mathrm{A}}$ is given, in the gravity dual, defined on $\mathrm{AdS}_{d+1}(\mathrm{a}(d+$ 1)-dimensional AdS space-time), by the Bekenstein-Hawking entropy of $\operatorname{AdS}_{d+1}$, which involves the area $\mathcal{A}\left(\gamma_{\mathrm{A}}\right)$ of the minimal surface $\gamma_{\mathrm{A}}$. Explicitly, they found the result (Nishioka et al., 2009)

$$
\begin{equation*}
S_{\mathrm{A}}=-\left.\frac{\partial}{\partial n} \ln \operatorname{tr} \rho_{\mathrm{A}}^{n}\right|_{n \rightarrow 1}=-\frac{\partial}{\partial n}\left[\frac{(1-n) \mathcal{A}\left(\gamma_{\mathrm{A}}\right)}{4 G_{\mathrm{N}}^{(d+1)}}\right]_{n \rightarrow 1}=\frac{\mathrm{A}\left(\gamma_{\mathrm{A}}\right)}{4 G_{\mathrm{N}}^{(d+1)}} \tag{17.74}
\end{equation*}
$$

which is the Bekenstein-Hawking formula for the entropy! (cf. Eq. (17.19)).
In the particular case in which the boundary is a 2 D space-time, Eq. (17.74) predicts the entanglement entropy for $\mathrm{CFT}_{2}$ in terms of the Bekenstein-Hawking entropy. To this end, we consider an interval of length $\ell$ on the boundary. The endpoints of this interval will also be the endpoints of a minimal surface in $\mathrm{AdS}_{3}$, which is to say a geodesic between the points $(x, u)=(-\ell / 2, a)$ and $(x, u)=$ $(\ell / 2, a)$, where $a \rightarrow 0$ plays the role of a UV cutoff. This geodesic is given by the half-circle

$$
\begin{equation*}
(x, u)=\frac{\ell}{2}(\cos \varphi, \sin \varphi) \tag{17.75}
\end{equation*}
$$

with $\epsilon \leq \varphi \leq \pi-\epsilon$; here $\epsilon=2 a / \ell \rightarrow 0^{+}$plays the role of the cutoff $a$. The length $\mathcal{A}\left(\gamma_{\mathrm{A}}\right)$ of the circle $\gamma_{\mathrm{A}}$ is

$$
\begin{equation*}
\mathcal{A}\left(\gamma_{\mathrm{A}}\right)=2 R \int_{\epsilon}^{\pi / 2} \frac{d \varphi}{\sin \varphi}=2 R \ln \left(\frac{\ell}{a}\right) \tag{17.76}
\end{equation*}
$$

This result then implies that the entropy is given by

$$
\begin{equation*}
S_{\mathrm{A}}=\frac{R}{2 G_{\mathrm{N}}^{(3)}} \ln \left(\frac{\ell}{a}\right) \tag{17.77}
\end{equation*}
$$

This result has the same scaling as the general expression for the entanglement entropy of an interval in a ( $1+1$ )-dimensional CFT of Eq. (17.36) (Holzhey et al., 1994; Calabrese and Cardy, 2004). This suggests that we identify the central charge of the CFT as being related to its gravity dual by the relation

$$
\begin{equation*}
c=\frac{3 R}{2 G_{\mathrm{N}}^{(3)}} \tag{17.78}
\end{equation*}
$$

However, this identification makes sense only if the AdS radius $R$ is large compared with the Planck length so that the classical description of gravity makes sense. In other words, the $\mathrm{CFT}_{2} / \mathrm{AdS}_{3}$ correspondence makes sense only if the central charge of the CFT is very large. In contrast, the result of Eq. (17.36) is nevertheless valid for all values of the central charge, even for values small enough that the AdS/CFT correspondence does not hold.

The CFT/gravity duality has been used by Ryu and Takayanagi to derive expressions for the entanglement entropy at finite temperatures, in which case there is a black hole deep in the $\mathrm{AdS}_{3}$ geometry, and they found a result that agrees exactly with the expression of Eq. (17.38) obtained by Calabrese and Cardy using $\mathrm{CFT}_{2}$. They also used this approach to obtain results for the entanglement entropy in higher-dimensional CFTs, where they found universal corrections to the area law. These corrections generally depend on scale-invariants of the geometry of the observed region, such as its aspect ratio.

### 17.9 Quantum entanglement and topological phases

We end this chapter with a discussion of the characterization of topological phases in terms of the behavior of the entanglement entropy. We will now see that the defining properties of topological phases are strongly apparent in entanglemententropy measurements. Topological phases of matter are fully gapped states whose low-energy physics is described by a topological quantum field theory. A consequence of this feature is that the entanglement entropy has, in addition to the non-universal area law which is governed by short-distance physics, universal terms that are determined entirely by topological invariants. Here we will focus exclusively on the properties of topological phases in two space dimensions.

Before discussing the behavior of entanglement entropy in topological phases, let us summarize the defining properties of topological phases of matter discussed in Chapters 9 and 14 (see in particular Section 14.6).

1. Topological phases of matter are translationally and rotationally invariant states. Since they do not break any symmetries, neither of space-time nor internal, these fluid states cannot be characterized by a local order parameter. Hence, the ground states of topological phases respect all the symmetries of the system. However, on long length scales, that is, long compared with the lattice constant, the low-energy effective action of a topological phase is given by a topological field theory. The prototype topological field theories are the Chern-Simons gauge theories discussed extensively in Chapter 14 and the discrete gauge theories discussed in Chapter 9. In both cases the effective action has the key feature
that it does not depend on the local metric of the 2D surface on which the system is defined.
2. The ground state of a topological phase is generally not unique and, on a 2 D surface of genus $g$, the number of handles of the surface, the degeneracy of the ground states grows exponentially with the genus as $k^{g}$, where $k$ is an integer.
3. Topological phases come in two types, namely even and odd under time-reversal transformations. Time-reversal-odd topological phases occur in electron fluids in large magnetic fields, as discussed in Chapters 13 and 14, such as the fractional quantum Hall states, and in spin liquids with a spontaneously broken time-reversal invariance, such as the chiral spin liquid discussed in Chapter 10. Examples of time-reversal-invariant topological phases are the deconfined ("Coulomb") phases of discrete gauge theories, topological phases of QDMs, doubled Chern-Simons gauge theories (and BF gauge theories), and Kitaev's toric code (all discussed in Chapter 9) and its generalizations (Freedman et al., 2004; Fendley and Fradkin, 2005; Fidkowski et al., 2009).
4. In a topological phase all the local excitations have a large energy gap and have non-trivial quantum numbers. If the topological phase occurs in a charge fluid, the excitations are charged and their charge is generally fractional. The excitations in a topological phase carry the quantum numbers of non-trivial representations under the braid group, which are determined by their gauge charges in the topological field theory. If these representations are one-dimensional, the excitations are abelian anyons, and if they are multi-dimensional the excitations are non-abelian anyons.
5. The states of the topological field theory are conformal blocks of a 2D Euclidean CFT. The number of non-trivial representations, i.e. the number of non-trivial quasiparticles (including the identity), is equal to the ground-state degeneracy on a torus. The transformation laws of conformal blocks under the action of the modular group are given by the modular $S$-matrix, $\mathcal{S}$, of the CFT . The quasiparticles obey a fusion algebra with the same structure as in conformal field theory. Each quasiparticle state (conformal block) has a quantum dimension $d_{j}$, which is determined by the matrix elements of the modular $S$-matrix (see Eq. (14.116)). The quantum dimension $d_{j}$ governs the rate of growth of the topologically protected Hilbert spaces of multi-quasiparticle states.

Let us consider now the problem of the scaling of the entanglement entropy in a topological phase. Let us consider first the simpler case of a region A of linear size $\ell$ that is simply connected and surrounded by its complement, region B. For simplicity, in Fig. 17.9 I show the case of the sphere. We will assume for now that the boundary $\Gamma$, of perimeter $L(\Gamma)$, is a smooth closed curve. Kitaev and Preskill (2006) and Levin and Wen (2006) showed that in the case of this geometry the
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-805.jpg?height=519&width=528&top_left_y=192&top_left_x=586)

Figure 17.9 The entangling region A is simply connected and has a smooth boundary $\Gamma$.
entanglement entropy of region A has a universal finite correction to the "arealaw" term:

$$
\begin{equation*}
S_{\mathrm{A}}=\alpha L(\Gamma)-\gamma_{\mathrm{topo}} \tag{17.79}
\end{equation*}
$$

where $\alpha$ is non-universal (and hence is not predicted by the effective topological field theory). The quantity $\gamma_{\text {topo }}$ is independent of the size of the region. It is not only universal but also a topological invariant. More specifically, we will see that $\gamma_{\text {topo }}$ is given by certain matrix elements of the modular $S$-matrix of the topological field theory which describes the low-energy physics of the system of interest.

The modular $S$-matrix was introduced in Section 14.6.2. There we recalled the result of Witten's work on Chern-Simons theory (Witten, 1989) that relates the matrix elements of the modular $S$-matrix to the expectation value of Wilson loops in Chern-Simons theory. The same modular $S$-matrix determines the fusion rules of the Wilson loops in Chern-Simons theory and in its associated 2D Euclidean CFT, namely the WZW model. In particular, the quantum dimensions of the primary fields of the CFT, and of the excitations of the topological field theory, are given by the matrix elements of the modular $S$-matrix through Eq. (14.116).

For the case of a singly connected region $A$, with a smooth boundary $\Gamma, \gamma_{\text {topo }}$ is given by

$$
\begin{equation*}
\gamma_{\mathrm{topo}}=\ln \mathcal{D} \tag{17.80}
\end{equation*}
$$

where $\mathcal{D}$ is the effective quantum dimension of the topological field theory, and it is given in terms of the matrix element $\mathcal{S}_{00}$ of the modular $S$-matrix by (see Eq. (14.117))

$$
\begin{equation*}
\mathcal{D}=\left(\mathcal{S}_{00}\right)^{-1}=\sqrt{\sum_{j}\left|d_{j}\right|^{2}} \tag{17.81}
\end{equation*}
$$

where

$$
\begin{equation*}
d_{j}=\frac{\mathcal{S}_{0 j}}{\mathcal{S}_{00}} \tag{17.82}
\end{equation*}
$$

are the quantum dimensions of the states labeled by the representation $j$, and measure the rate of growth of the degenerate Hilbert spaces of particles with that representation. Thus, similarly to the case of quantum criticality which we discussed earlier in this chapter, there is a finite universal term that is a topological invariant (or expressed in terms of invariants), although in this case its contribution to the entanglement entropy is negative.

What will matter to the present discussion is that in his work on the relation between the theory of knots and Chern-Simons gauge theory Witten showed that the computation of the expectation value of a Wilson loop in the gauge theory reduces to the computation of a matrix element of the modular $S$-matrix in CFT (Witten, 1989) (see the discussion following Eq. (14.113) in Section 14.6.2). The following seminal results from Witten's work will be important to our discussion. For concreteness we will consider a Chern-Simons gauge theory with gauge group $G_{k}=\operatorname{SU}(2)_{k}$, where $k$ is the level. The Chern-Simons action is

$$
\begin{equation*}
S(A)=\frac{k}{4 \pi} \int \operatorname{tr}\left(A \wedge d A+\frac{2}{3} A \wedge A \wedge A\right) \tag{17.83}
\end{equation*}
$$

where, as usual, $A_{\mu}$ is a vector field taking values in the algebra of a (compact) gauge group $G$. Here we will be primarily interested in the case of $G=\mathrm{SU}(2)$.

We will need a few important results on the structure of the Chern-Simons theory and its solution. First, following Witten (1989), we realize the states on a closed 2D surface as a path integral over a 3D volume. Witten showed that the ChernSimons states on a spatial manifold $\Sigma$ (which we will take to be closed) are in one-to-one correspondence with the conformal blocks of a Wess-Zumino-Witten (WZW) CFT. Furthermore, the ground-state degeneracy depends on the level $k$ and on the topology of the surface $\Sigma$. The partition functions, i.e. the values of the path integral, depend on the matrix elements of the modular $\mathcal{S}$-matrix, e.g. the partition function on a space-time with the topology of a sphere $S^{3}$ with a Wilson loop in the representation $\rho_{j}$ is

$$
\begin{equation*}
Z\left(S^{3}, \rho_{j}\right)=\mathcal{S}_{0 j} \tag{17.84}
\end{equation*}
$$

We have already encountered the modular $S$-matrix in Section 14.6.2, where we discussed the concept of non-abelian statistics. There we noted that the degenerate states of the topological fluids on a torus have a one-to-one correspondence with
the conformal blocks of an associated 2D CFT. We also discussed the fact that the short-distance behavior of the conformal blocks is equivalent to the characters $\chi_{j}$ of the representations that label the conformal blocks. The modular $S$-matrix is the transformation matrix of the characters under modular transformations of the torus, Eq. (14.109).

We will also need the modular $S$-matrices of the conformal blocks for the theories we are interested in. For the gauge group $\mathrm{U}(1)_{m}, n=0, \ldots, m-1$, the modular $S$-matrix is

$$
\begin{equation*}
\mathcal{S}_{n, n^{\prime}}=\frac{1}{\sqrt{m}} e^{2 \pi i n n^{\prime} / m} \tag{17.85}
\end{equation*}
$$

For the gauge group $\mathrm{SU}(2)_{k}, j, j^{\prime}=0,1 / 2, \ldots, k / 2$, the modular $S$-matrix is

$$
\begin{equation*}
\mathcal{S}_{j, j^{\prime}}^{(k)}=\sqrt{\frac{2}{k+2}} \sin \left(\frac{(2 j+1)\left(2 j^{\prime}+1\right) \pi}{k+2}\right) \tag{17.86}
\end{equation*}
$$

The Chern-Simons path integral, the partition function on various manifolds, can be reduced to its computation on a sphere $S^{3}$ using the method of (ChernSimons) surgeries (Witten, 1989). Using surgeries, it can be shown that, if a 3-manifold $M$ is the connected sum of two 3-manifolds $M_{1}$ and $M_{2}$ joined along an $S^{2}$, then the Chern-Simons partition functions on these manifolds are related by

$$
\begin{equation*}
Z(M) Z\left(S^{3}\right)=Z\left(M_{1}\right) Z\left(M_{2}\right) \tag{17.87}
\end{equation*}
$$

In particular, if $M$ is $M_{1}$ and $M_{2}$ joined along $n S^{2}$ s, the resulting partition function is

$$
\begin{equation*}
Z(M)=\frac{Z\left(M_{1}\right) Z\left(M_{2}\right)}{Z\left(S^{3}\right)^{n}} \tag{17.88}
\end{equation*}
$$

Witten's result can be used to compute the entanglement entropy in various cases of interest, and was used by Kitaev and Preskill (2006) to derive the result of Eq. (17.80) for a simply connected region. The Kitaev-Preskill results were extended and generalized by Dong and coworkers (Dong et al., 2008), who used the replica approach to compute the entanglement entropies for topologically nontrivial regions on a torus and for states with quasiparticles, represented by punctures carrying specific quantum numbers (representation labels).

The replica calculation computes the Chern-Simons partition function on an $n$-sheeted Riemann-surface space-time (as in the previously discussed cases). Although the space-time manifold needed for the replica approach is rather involved, explicit results for the entanglement entropies can nevertheless be obtained using Witten's method of surgeries (Dong et al., 2008).

Let us consider first the simplest case, in which the spatial manifold is a sphere, $\Sigma=S^{2}$, and hence the space-time manifold is just a 3-sphere, $\Sigma \times S^{1} \cong S^{3}$. The

Hilbert space on $S^{3}$ is one-dimensional. Using the method of surgeries, Dong and coworkers (Dong et al., 2008) considered the case of $S^{2}$ with a single boundary between regions A and B , as shown in Fig. 17.9, i.e. the observed region is a hemisphere, and the two regions A and B are two hemispheres (disks). The 3-geometry is a ball.

To construct tr $\rho_{\mathrm{A}}^{n}$ we glue $2 n$ such pieces together. When they are glued together to form $\operatorname{tr} \rho_{\mathrm{A}}^{n}$, one finds a manifold with the topology of $S^{3}$ for all $n$, and therefore has the same partition function. Thus, we find that the (normalized) trace of $\rho_{\mathrm{A}}^{n}$ is

$$
\begin{equation*}
\frac{\operatorname{tr} \rho_{\mathrm{A}\left(S^{2}, 1\right)}^{n}}{\left(\operatorname{tr} \rho_{\mathrm{A}\left(S^{2}, 1\right)}\right)^{n}}=\frac{Z\left(S^{3}\right)}{\left(Z\left(S^{3}\right)\right)^{n}}=\left(Z\left(S^{3}\right)\right)^{1-n}=\mathcal{S}_{00}^{1-n} \tag{17.89}
\end{equation*}
$$

In the replica limit, $n \rightarrow 1$, we obtain for the entanglement entropy

$$
\begin{equation*}
S_{\mathrm{A}}^{\left(S^{2}, 1\right)}=\ln \mathcal{S}_{00}=-\ln \mathcal{D} \tag{17.90}
\end{equation*}
$$

which is the result of Kitaev and Preskill (2006) and Levin and Wen (2006) for the universal topological entanglement entropy. Notice that the topological-fieldtheory calculation computes only the universal contribution. The non-universal, and hence cutoff-dependent, area-law term has been regularized to zero by the methods used by Witten. This is not surprising, since the Chern-Simons gauge theory does not depend on the metric. In other words, the area-law term is given by the non-topological short-distance corrections to the topological field theory.

The result of Eq. (17.90) also holds for surfaces with arbitrary topology, provided that the region A being observed is topologically trivial, regardless of the pure state labeled by the representations $\rho_{j}$. For the case of a sphere $S^{2}$ and a disconnected region A with $p$ boundaries, we trivially find that they are additive, $S_{\mathrm{A}}^{\left(S^{2}, p\right)}=p \ln \mathcal{S}_{00}=-p \ln \mathcal{D}$.

Let us compute the entanglement entropy for a Chern-Simons theory on the torus $T^{2}$. For a torus $T^{2}$ split into two regions we have two cases, shown in Fig. 17.10. If the torus is in the trivial state, that is, without any Wilson loop threading the torus, the entropy for Fig. 17.10(a) is the same as for the sphere, cf. Eq. (17.90), whereas for the case of Fig. 17.10(b) it is twice as large, $S_{\mathrm{A}}\left(T^{2}, 2\right)=2 \ln \mathcal{S}_{00}$. However, if there is a Wilson loop with a non-trivial representation $\rho_{j}$ threading the torus, we obtain the same result for the case depicted in Fig. 17.10(a), but, for the case of Fig. 17.10(b), we obtain instead

$$
\begin{equation*}
S_{\mathrm{A}}\left(T^{2}, 2, \rho_{j}\right)=2 \ln S_{0 \rho_{j}} \tag{17.91}
\end{equation*}
$$

In other words in this case, the entanglement entropy is different for the different degenerate states on the torus, each labeled by a representation $\rho_{j}$ of the Wilson
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-809.jpg?height=405&width=1269&top_left_y=187&top_left_x=213)

Figure 17.10 Entanglement on a torus geometry. (a) Region A is simply connected and the entanglement entropy is independent of the state of the torus. (b) Region A is topologically non-trivial, and its entanglement entropy depends on the ground state of the system on the torus, which is labeled by the representation $\rho_{j}$ of the Wilson loop (the dot-dashed loop).
loop. In addition, if the torus is in a state that is a linear superposition, $|\psi\rangle=$ $\sum_{\rho} \psi_{\rho}|\rho\rangle$, we further find

$$
\begin{equation*}
S_{\mathrm{A}}\left(T^{2}, 2, \psi\right)=2 \ln \mathcal{S}_{00}-\sum_{\rho} d_{\rho}^{2}\left(\frac{\left|\psi_{\rho}\right|^{2}}{d_{\rho}^{2}} \ln \left(\frac{\left|\psi_{\rho}\right|^{2}}{d_{\rho}^{2}}\right)\right) \tag{17.92}
\end{equation*}
$$

Clearly, the entanglement entropy now depends not only on the effective quantum dimension $\mathcal{D}=\mathcal{S}_{00}^{-1}$ but also on the quantum dimension of the excitation labeled by the representation $\rho$, as well as on the particular linear combination of the degenerate ground states on the torus in which the system is prepared.

Following the same line of argument, one can consider other situations of interest. For example, in Fig. 17.11 we consider a simply connected entangling region A on a sphere with four quasiparticles represented here by four punctures. A temporal Wilson loop pierces the sphere $S^{2}$ at each puncture and carries a representation label, $\gamma_{1}, \gamma_{2}, \gamma_{3}$, and $\gamma_{4}$. Dong and coworkers (Dong et al., 2008) showed that the entanglement entropy now depends on the fusion rules of the quasiparticles in the case of Fig. 17.11(b) since the quasiparticles need to fuse across the boundary $\Gamma$, but does not depend on these properties for the case of Fig. 17.11(a), where they must fuse into the identity. The reason for this difference is that the fusion of the quasiparticles amounts to changing the topology of the surface with Wilson loops running around the glued circles, with each fusion channel adding a handle to the surface. In this way the entanglement entropy can detect in which state the set of quasiparticles ("qubits") is. This property is important to the concept of topological quantum computation and is the key to the topological robustness of the state.
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-810.jpg?height=566&width=1067&top_left_y=192&top_left_x=324)

Figure 17.11 States on the sphere with four quasiparticles (punctures) labeled by $\gamma_{i}$ (with $i=1, \ldots, 4$ ). (a) All the quasiparticles are inside the entangling region. (b) Two of the quasiparticles are inside the entangling region and two are outside.

The upshot of this discussion is that the entanglement entropy provides a way to determine all the universal properties of the topological phases, including their degeneracy, their quantum numbers, and their fusion rules.

We close this section with an application of these ideas and results to several cases of physical interest.

The deconfined phase of the $\mathbb{Z}_{2}$ gauge theory. The simplest topological phase is the deconfined phase of the $\mathbb{Z}_{2}$ gauge theory, a.k.a. the $\mathbb{Z}_{2}$ spin liquid. In $(2+$ 1) dimensions this phase is essentially equivalent to Kitaev's toric code and to the topological phase of the quantum dimer model on the triangular lattice. This theory has a four-fold-degenerate ground state on a torus (see Section 9.8). The four states are obtained by acting with the 't Hooft magnetic loops along the two noncontractible loops of the torus. In this case each operator creates a one-dimensional representation of the braid group (hence it is abelian). Therefore this theory has four sectors, each with quantum dimension $d=1$, and the total effective dimension is $\mathcal{D}\left[\mathbb{Z}_{2}\right]=2$. The topological term in the entanglement entropy is

$$
\begin{equation*}
\gamma_{\mathrm{topo}}\left[\mathbb{Z}_{2}\right]=\ln 2 \tag{17.93}
\end{equation*}
$$

This result was obtained by an explicit calculation with the Kitaev state on the lattice by Hamma and coworkers (Hamma et al., 2005a, 2005b) and by Levin and Wen (2006). The validity of this result for the case of the $\mathbb{Z}_{2}$ spin liquid of the QDM on the triangular lattice was shown by Furukawa and Misguich (2007). Papanikolaou and coworkers (Papanikolaou et al., 2007c) extended this result by computing the entanglement entropy for the eight-vertex wave function discussed in Section 9.8, Eq. (9.67). This is a topological phase that includes the Kitaev state as a particular
case. They showed that the topological contribution to the entanglement entropy is given by Eq. (17.93) without correction in the entire topological phase. In contrast, the non-universal area-law term varies continuously throughout the phase.

The Laughlin states of the fractional quantum Hall effect. The Laughlin states of the fractional quantum Hall effect at filling fraction $v=1 / m$ have an $m$-fold degenerate ground state on the torus. As we showed in Chapters 13 and 14, the effective low-energy action for the Laughlin states is a $\mathrm{U}(1)_{m}$ abelian ChernSimons gauge theory. The modular $S$-matrix for this theory is given by Eq. (17.85). Each one-dimensional subspace is assigned to one of the $m$ distinct quasiparticles of the Laughlin states: the identity $I$ (no quasiparticle) and the $m-1$ quasihole states $V_{n}=\exp (-i n \phi(x) / \sqrt{m})$, with $n=1, \ldots, m-1$. These excitations are abelian anyons, with statistical angle $\delta_{n}=n \pi / m$ (and charge $n e / m$ ) and with quantum dimension $d_{n}=1$. Each ground state is created by a Wilson loop operator (in the effective $\mathrm{U}(1)_{m}$ Chern-Simons gauge theory) with gauge charge $n$. Since all the sectors are associated with states with quantum dimension $d=1$ or, equivalently, since $\mathcal{S}_{00}=1 / \sqrt{m}$, the effective quantum dimension $\mathcal{D}$ for the Laughlin states is $\mathcal{D}\left[\mathrm{U}(1)_{m}\right]=\sqrt{m}$, and the topological contribution to the entanglement entropy is

$$
\begin{equation*}
\gamma_{\mathrm{topo}}\left[\mathrm{U}(1)_{m}\right]=\ln \sqrt{m} \tag{17.94}
\end{equation*}
$$

This result was confirmed numerically by Haque and coworkers (Zozulya et al., 2009) using both the Laughlin wave function and the wave function for the Coulomb interaction (which has a large overlap with the Laughlin wave function). This result is trivially extended to all abelian fractional quantum Hall states, such as the hierarchical and multi-component states discussed in Sections 14.3 and 14.4. Indeed, for a generic abelian fractional quantum Hall fluid defined by a $K$-matrix, the number of sectors, and hence the ground-state degeneracy on a torus, is $|\operatorname{det} K|$. Since each sector has quantum dimension 1 (being abelian) the topological contribution to the entanglement entropy is

$$
\begin{equation*}
\gamma_{\text {topo }}[\text { abelian }]=\ln \sqrt{|\operatorname{det} K|} \tag{17.95}
\end{equation*}
$$

The result for the Laughlin states is a particular case.
Abelian double Chern-Simons theories. Abelian double Chern-Simons theories represent time-reversal-invariant fractionalized phases. We encountered this example in our discussion of superconductors as topological fluids in Section 14.5 and in our discussion of fractionalized (abelian) topological insulators in Section 16.13, where it took the form of a "BF theory." The $\mathbb{Z}_{2}$ spin liquid is equivalent to this theory for level $k=2$.

The non-abelian fractional quantum Hall states. We have discussed several nonabelian fractional quantum Hall states and related systems, see Section 14.8. The
simplest non-abelian state is the Moore-Read fractional quantum Hall state for bosons at filling fraction $v=1$. We showed in Sections 14.8 and 15.4.5 that the effective topological field theory for this state is the $\mathrm{SU}(2)_{2}$ non-abelian ChernSimons gauge theory. This system has a three-fold-degenerate ground state on the torus, corresponding to the conformal blocks labeled by the identity $I$, the nonabelion $\sigma e^{i \phi}$, and the Majorana fermion $\psi$. The modular $S$-matrix, $\mathcal{S}$, for this system, in the basis of the conformal blocks listed above, is

$$
\mathcal{S}\left[\mathrm{SU}(2)_{2}\right]=\frac{1}{2}\left(\begin{array}{ccc}
1 & \sqrt{2} & 1  \tag{17.96}\\
\sqrt{2} & 0 & -\sqrt{2} \\
1 & -\sqrt{2} & 1
\end{array}\right)
$$

Thus, we see that the effective quantum dimension is $\mathcal{D}\left[\mathrm{SU}(2)_{2}\right]=\mathcal{S}_{00}^{-1}=\ln 2$, and the topological contribution to the entanglement entropy is

$$
\begin{equation*}
\gamma_{\text {topo }}\left[\mathrm{SU}(2)_{2}\right]=\ln 2 \tag{17.97}
\end{equation*}
$$

Another relevant case is the $p_{x}+i p_{y}$ superconductor, which was discussed in Section 14.9. The CFT associated with this problem is the chiral critical 2D Ising model, which is represented by the $\mathrm{SU}(2)_{2} / \mathrm{U}(1)_{2}$ coset. This chiral CFT has three primaries: the identity $I$, the spin field $\sigma$, and the Majorana fermion $\psi$. The modular $S$-matrix turns out to be the same as in the $\mathrm{SU}(2)_{2}$ case we just discussed (see Dong et al. (2008)). Hence the quantum dimensions are the same, and we conclude that the entanglement entropy of Eq. (17.97) also applies to the $p_{x}+i p_{y}$ chiral superconductor.

The non-abelian fractional quantum Hall Moore-Read fermionic state (with total filling fraction $v=5 / 2$ ) has a six-fold-degenerate ground state on the torus. These six ground states correspond to the conformal blocks of the identity $I$, the nonabelian quasiparticle and quasihole $\sigma e^{ \pm i \phi / 2 \sqrt{2}}$, the Majorana fermion $\psi$, and the abelian (Laughlin) quasiparticle and quasihole $e^{ \pm i \sqrt{2} \phi}$. Except for the non-abelian quasiparticle and quasihole, which have quantum dimension $d_{\sigma}=\sqrt{2}$, all other states are abelian and have quantum dimension $d=1$. The fermionic Moore-Read state is represented by the chiral coset Chern-Simons gauge theory (and chiral $\mathrm{CFT})\left(\mathrm{SU}(2)_{2} / \mathrm{U}(1)_{2}\right) \times \mathrm{U}(1)_{8} \simeq \mathbb{Z}_{2} \times \mathrm{U}(1)_{2}$. Its modular $S$-matrix, in the basis of the conformal block listed above, is given by

$$
\mathcal{S}[\mathrm{MR}]=\frac{1}{2 \sqrt{2}}\left(\begin{array}{cccccc}
1 & 1 & \sqrt{2} & \sqrt{2} & 1 & 1  \tag{17.98}\\
1 & 1 & -\sqrt{2} & -\sqrt{2} & 1 & 1 \\
\sqrt{2} & -\sqrt{2} & 0 & 0 & i \sqrt{2} & -i \sqrt{2} \\
\sqrt{2} & -\sqrt{2} & 0 & 0 & -i \sqrt{2} & i \sqrt{2} \\
1 & 1 & i \sqrt{2} & -i \sqrt{2} & -1 & -1 \\
1 & 1 & -i \sqrt{2} & i \sqrt{2} & -1 & -1
\end{array}\right)
$$

Thus, the total effective dimension of the Moore-Read fermionic state is $\mathcal{S}_{00}^{-1}=$ $\mathcal{D}[\mathrm{MR}]=2 \sqrt{2}$, and the topological contribution to the entanglement entropy now is

$$
\begin{equation*}
\gamma_{\mathrm{topo}}[\mathrm{MR}]=\ln (2 \sqrt{2}) \tag{17.99}
\end{equation*}
$$

Notice that for this non-abelian state the effective quantum dimension is $\mathcal{D}[M R]=\sqrt{8}$ and it is not equal to the square root of the number of degenerate ground states on a torus (six in this case). This is a generic feature of all non-abelian states. Similar, but more complex, expressions can be obtained for the $\mathrm{SU}(2)_{3}$ Read-Rezayi states (both fermionic and bosonic) (Dong et al., 2008). These non-abelian states are candidates for universal topological qubits (Freedman et al., 2002a; Das Sarma et al., 2008).

### 17.10 Outlook

In this chapter we have discussed the role of quantum entanglement in condensed matter physics. We have focused primarily on the scale-dependence of the entanglement entropy as a way to characterize phases and quantum critical points where large-scale entanglement is realized. For this reason we have centered our attention on the behavior of the von Neumann entropy at quantum critical points and in topological phases. It is fair to say that, while the latter case is by now fairly well understood (although, as we will see below, not completely), the understanding of its behavior at quantum criticality is still in its initial stages, except possibly in one dimension.

We have left out many important problems and questions. In our discussion of the scaling of the entanglement entropy in quantum critical systems we have not discussed the effects of perturbations away from the conformal limit (i.e. away from the fixed point). This problem has so far been studied only in the 1D case (Pollmann et al., 2009; Calabrese and Essler, 2010; Cardy and Calabrese, 2010). We have also not discussed the problem of the entanglement of quantum impurities within critical systems. This question was studied in one dimension in detail by Affleck and coworkers (Laflorencie et al., 2006; Sørensen et al., 2007a, 2007b; Affleck, 2010), and independently by Kopp and Chakravarty (Kopp et al., 2007), who showed explicitly how different boundary conditions enter into the universal behavior of the entanglement entropy.

A problem in which the ideas of quantum entanglement will very likely play an important role is the behavior of disordered quantum systems. By disorder here we do not mean uniform systems without long-range order but rather systems that are physically disordered and are best regarded as random systems. This is a notoriously difficult problem, which we have not discussed in this book. It has remained
an open problem even in classical statistical mechanics, which in spite of decades of effort still has a host of so far poorly understood problems such as spin glasses and random field systems.

The quantum version of these problems is certainly no less difficult and the study of the behavior (and role) of quantum entanglement in these systems is in its beginnings. Chakravarty has shown that the scaling of the entanglement entropy can be used to study the Anderson localization-delocalization transition in disordered systems (Jia et al., 2008; Chakravarty, 2010). In a pioneering series of papers Refael and Moore showed that, in the case of random spin chains at their infinite-disorder fixed point (Fisher, 1994, 1995), the (ensemble-average) entanglement entropy of 1D random critical spin chains has a logarithmic dependence on the linear size $\ell$ of the entangling region, $S_{\mathrm{A}} \sim A \ln \ell$ (Refael and Moore, 2004, 2009). The constant $A$ turns out to be universal and to be different only for different universality classes of random fixed points. Although this result has the same form as that in the case of 1D CFT, the random fixed points are not conformal and there is no natural definition of a central charge. So the connection between the universal prefactor $A$ and the critical behavior of local operators at random fixed points is not so far understood.

One question that we have not discussed is that of the so-called entanglement spectrum. The entanglement spectrum is the spectrum of the reduced density matrix of the entangling region. It is typically presented by writing the reduced density matrix in the suggestive exponential form $\rho_{\mathrm{A}}=\exp \left(-\mathcal{H}_{\mathrm{A}}\right)$. Since the eigenvalues of the reduced density matrix, $\left\{\lambda_{i}\right\}$, by definition are real numbers between 0 and 1 , the eigenvalues $\left\{\varepsilon_{i}\right\}$ of the "pseudo-Hamiltonian" $\mathcal{H}_{\mathrm{A}}$ are real positive numbers (or zero). The numerical study of the entanglement spectrum of fractional quantum Hall states has revealed that it contains a wealth of information on the nature of these states. Li and Haldane (2008), who pioneered those studies, found that the degeneracies of the low-energy entanglement spectra of the fractional quantum Hall states agree with the partitions of states encoded in the characters of the associated CFT. This relation extends to much of the spectrum for the "ideal states," namely wave functions constructed using conformal blocks such as the Laughlin and Moore-Read states. However, this relation holds also for the low-energy entanglement spectrum for the "realistic" wave functions obtained by exact diagonalization with Coulomb interactions. For the same reason the Rényi entropies $S_{n}$ have the same behavior in the large- $n$ limit, which selects the low-pseudo-energy portion of the entanglement spectrum.

At the time of writing there isn't a general theory of the entanglement spectrum, at least not a theory developed to the same extent as what we have discussed in this chapter. Nevertheless, what is clear is that the interesting universal features which have been found in numerical studies, such as in Li and Haldane (2008), can also be extracted by studying finite-size effects in the Rényi entropies in the
$n \rightarrow \infty$ regime. Earlier in this chapter we saw that the topological field theory of topological phases computes only the finite, universal, terms in the entanglement entropy. This also follows from the fact that the result we found for $\operatorname{tr} \rho_{\mathrm{A}}^{n}$ is a simple power of $n$, such as $\mathcal{S}_{00}^{n-1}$. Hence, in the topological limit the spectrum of the density matrix ought to consist only of zeros or ones.

On the other hand, this should hardly be surprising since any finite-size effect requires the definition of a distance in the system which the topological field theory does not have (since by definition it is independent of the metric!). To compute these effects requires the computation of (non-topological) corrections to the topological-field-theory results. The empirical evidence that a "ghost" of the topological structure survives in the finite-size corrections is very interesting. This is an important but challenging open problem. To date there isn't a scaling theory of the entanglement spectra, although some very interesting results have been obtained in 1D spin chains (Calabrese and Lefevre, 2008; Pollmann et al., 2010; Pollmann and Moore, 2010), in quantum disordered systems (Fagotti et al., 2011), and in the quantum Lifshitz model (Hsu and Fradkin, 2010).

Finally, we will need to address the most important omission we have made in this chapter, namely, can the entanglement entropy be measured? This is the "elephant in the room" question of this problem. Although we showed that the behavior of large-scale entanglement can be used to characterize phases (and quantum phase transitions), it is far from obvious whether as a matter of principle this quantity can be measured in any reasonable experiment. In contrast to what happens in a system with a small number of degrees of freedom, in which the reduced density matrix can be tested directly in experiment, the reduced density matrix of a large extended system is a very non-local object. It is this non-local nature of the reduced density matrix which makes it useful to characterize large-scale entanglement.

However, most experiments in physics consist in the measurement of local observables, including their time evolution. This is true even for thermodynamic measurements, since these test the behavior of the spatial average of local observables, such as the charge density, current, magnetization, energy density, etc. The entanglement entropy (and, for the same reason, the entanglement spectra) cannot be reduced to measurements of this type. Nevertheless, a few proposals for measuring the entanglement entropy have been put forth.

So far the most practical suggestion has been that made by Klich and Levitov (2009). They proposed the use of an externally driven tunneling point contact between two electronic reservoirs. In their scheme the point contact would be open and closed suddenly and sequentially. They then showed that, at least for a freefermion system, the noise in the tunneling current can detect the entanglement between the two free-fermion reservoirs. This problem was reexamined in detail by Hsu and coworkers (Hsu et al., 2009a), who considered the problem of a quantum
point contact between the edge states in a Laughlin quantum Hall state. This work considered the simpler case of a single sudden opening of the point contact, i.e. a local quantum quench. They showed that the entanglement and the quantum noise are two essentially unrelated quantities that have the same scaling in time for dimensional reasons. In addition, during a quantum quench it is the dynamical entanglement which is being tested, which in the case of a local quench in 1D critical systems has a universal logarithmic growth in time (Calabrese and Cardy, 2007; Hsu et al., 2009a). On the other hand, for systems that do not have a conserved charge, such as the quantum Ising chain, the noise in the energy current has a different time dependence as the entanglement entropy (as required by dimensional analysis). The general problem of the dynamical behavior of entanglement under a quench (both local and global) is of great interest in cold-atomic systems, in which an external manipulation of the effective Hamiltonians is possible.

## References

Abrahams, E., Anderson, P. W., Licciardello, D. C., and Ramakrishnan, T. V. 1979. Scaling theory of localization: Absence of quantum diffusion in two dimensions. Phys. Rev. Lett., 42, 673.
Abrikosov, A. A., Gor'kov, L. P., and Dzyaloshinskii, I. E. 1963. Methods of Quantum Field Theory in Statistical Physics. Englewood Cliffs, NJ: Prentice-Hall.
Affleck, I. 1985. Large- $N$ limit of SU( $N$ ) quantum "spin" chains. Phys. Rev. Lett., 54, 966.
Affleck, I. 1986a. Exact critical exponents for quantum spin chains, non-linear $\sigma$-models at $\theta=\pi$ and the quantum Hall effect. Nucl. Phys. B, 265, 409.
Affleck, I. 1986b. Universal term in the free energy at a critical point and the conformal anomaly. Phys. Rev. Lett., 56, 746.
Affleck, I. 1990. Field theory methods and quantum critical phenomena, in Fields, Strings and Critical Phenomena. Proceedings of the Les Houches Summer School 1988, Session XLIX, E. Brézin and J. Zinn-Justin (eds.). Amsterdam: North-Holland, p. 563.
Affleck, I. 1998. Exact correlation amplitude for the $S=\frac{1}{2}$ Heisenberg antiferromagnetic chain. J. Phys. A: Math. Gen., 31, 4573.
Affleck, I. 2010. Quantum impurity problems in condensed matter physics, in Exact Methods in Low-Dimensional Statistical Physics and Quantum Computing. Proceedings of the Les Houches Summer School 2008, Session LXXXIX, J. Jacobson, S. Ouvry, V. Pasquier, D. Serban, and L. F. Cugliandolo (eds.). Oxford: Oxford University Press.

Affleck, I., and Haldane, F. D. M. 1987. Critical theory of quantum spin chains. Phys. Rev. B, 36, 5291.
Affleck, I., and Ludwig, A. W. W. 1991. Universal noninteger "ground-state degeneracy" in critical quantum systems. Phys. Rev. Lett., 67, 161.
Affleck, I., and Marston, J. B. 1988. Large- $N$ limit of the Heisenberg-Hubbard model: Implications for high- $T_{\mathrm{c}}$ superconductors. Phys. Rev. B, 37, 3774.
Affleck, I., Zou, Z., Hsu, T., and Anderson, P. W. 1988a. SU(2) gauge symmetry of the large- $U$ limit of the Hubbard model. Phys. Rev. B, 38, 745.
Affleck, I., Kennedy, T., Lieb, E. H., and Tasaki, H. 1988b. Valence bond ground states in isotropic quantum antiferromagnets. Commun. Math. Phys., 115, 477.
Affleck, I., Harvey, J., Palla, L., and Semenoff, G. W. 1989. The Chern-Simons term versus the monopole. Nucl. Phys. B, 328, 575.
Aharony, O., Gubser, S. S., Maldacena, J. M., Ooguri, H., and Oz, Y. 2000. Large $N$ field theories, string theory and gravity. Phys. Rep., 323, 183.
Albuquerque, A. F., and Alet, F. 2010. Critical correlations for short-range valence-bond wave functions on the square lattice. Phys. Rev. B, 82, 180408(R).

Alet, F., Jacobsen, J. L., Misguich, G. et al. 2005. Interacting classical dimers on the square lattice. Phys. Rev. Lett., 94, 235702.
Alet, F., Ikhlef, Y., Jacobsen, J. L., Misguich, G., and Pasquier, V. 2006. Classical dimers with aligning interactions on the square lattice. Phys. Rev. E, 74, 041124.
Alicea, J., Oreg, Y., Refael, G., von Oppen, F., and Fisher, M. P. A. 2011. Non-Abelian statistics and topological quantum information processing in 1D wire networks. Nature Phys., 7, 412.
Amit, D. J. 1980. Field Theory, the Renormalization Group and Critical Phenomena. New York, NY: McGraw-Hill.
Amit, D. J., Goldschmidt, Y., and Grinstein, G. 1980. Renormalisation group analysis of the phase transition in the 2D Coulomb gas, sine-Gordon theory and $X Y$-model. J. Phys. A: Math. Gen., 13, 585.
Anderson, P. W. 1958. Absence of diffusion in certain random lattices. Phys. Rev., 109, 1492.

Anderson, P. W. 1970. A poor man's derivation of the scaling laws of the Kondo problem. J. Phys. C: Solid State Phys., 3, 2436.

Anderson, P. W. 1973. Resonating valence bonds: A new kind of insulator? Mater. Res. Bull., 8, 153.
Anderson, P. W. 1987. The resonating valence bond state in $\mathrm{La}_{2} \mathrm{CuO}_{4}$ and superconductivity. Science, 235, 1196.
Anderson, P. W., Yuval, G., and Hamann, D. R. 1970. Exact results in the Kondo problem. II. Scaling theory, qualitatively correct solution, and some new results on one-dimensional classical statistical models. Phys. Rev. B, 1, 4464.
Ardonne, E., Fendley, P., and Fradkin, E. 2004. Topological order and conformal quantum critical points. Ann. Phys., 310, 493.
Armour, W., Hands, S., Kogut, J. B. et al. 2011. Magnetic monopole plasma phase in $(2+1)$ d compact quantum electrodynamics with fermionic matter. Phys. Rev. D, 84, 014502.

Arovas, D., Schrieffer, J. R., and Wilczek, F. 1984. Fractional statistics and the quantum Hall effect. Phys. Rev. Lett., 53, 722.
Arovas, D. P., and Auerbach, A. 1988. Functional integral theories of low-dimensional quantum Heisenberg models. Phys. Rev. B, 38, 316.
Arovas, D. P., Schrieffer, J. R., Wilczek, F., and Zee, A. 1985. Statistical mechanics of anyons. Nucl. Phys. B, 251, 117.
Assaad, F. F. 2005. Phase diagram of the half-filled two-dimensional SU( $N$ ) HubbardHeisenberg model: A quantum Monte Carlo study. Phys. Rev. B, 71, 075103.
Auerbach, A. 1994. Interacting Electrons and Quantum Magnetism, 2nd edn. Berlin: Springer-Verlag.
Avron, J. E., Seiler, R., and Simon, B. 1983. Homotopy and quantization in condensed matter physics. Phys. Rev. Lett., 51, 51.
Avron, J. E., Seiler, R. and Zograf, P. G. 1995. Viscosity in quantum Hall fluids. Phys. Rev. Lett., 75, 697.
Babujian, H. M., and Tsvelik, A. M. 1986. Heisenberg magnet with an arbitrary spin and anisotropic chiral field. Nucl. Phys. B, 265, 24.
Bais, F. A., van Driel, P., and de Wild Propitius, M. 1992. Quantum symmetries in discrete gauge theories. Phys. Lett. B, 280, 63.
Balatsky, A., and Fradkin, E. 1991. Singlet quantum Hall effect and Chern-Simons theories. Phys. Rev. B, 43, 10622.
Balian, R., Drouffe, J. M., and Itzykson, C. 1975. Gauge fields on a lattice. II. Gaugeinvariant Ising model. Phys. Rev. D, 11, 2098.

Bander, M., and Itzykson, C. 1977. Quantum-field-theory calculation of the twodimensional Ising model correlation function. Phys. Rev. D, 15, 463.
Banks, T., and Lykken, J. D. 1990. Landau-Ginzburg description of anyonic superconductors. Nucl. Phys. B, 336, 500.
Banks, T., Myerson, R., and Kogut, J. 1977. Phase transitions in abelian lattice gauge theories. Nucl. Phys. B, 129, 493.
Barkeshli, M., and Wen, X. G. 2010a. Classification of Abelian and non-Abelian multilayer fractional quantum Hall states through the pattern of zeros. Phys. Rev. B, 82, 245301.

Barkeshli, M., and Wen, X. G. 2010b. Effective field theory and projective construction for $\mathbb{Z}_{k}$ parafermion fractional quantum Hall states. Phys. Rev. B, 81, 155302.
Barrett, S. E., Dabbagh, G., Pfeiffer, L. N., West, K. W., and Tycko, R. 1995. Optically pumped NMR evidence for finite-size skyrmions in GaAs quantum wells near Landau level filling $v=1$. Phys. Rev. Lett., 74, 5112.
Baskaran, G., and Anderson, P. W. 1988. Gauge theory of high-temperature superconductors and strongly correlated Fermi systems. Phys. Rev. B, 37, 580.
Baskaran, G., Zou, Z., and Anderson, P. W. 1987. The resonating valence bond state and high $-T_{\mathrm{c}}$ superconductivity - a mean field theory. Solid State Commun., 63, 973.
Baxter, R.J. 1982. Exactly Solved Models in Statistical Mechanics. New York, NY: Academic Press.
Baym, G. 1974. Lectures on Quantum Mechanics. New York, NY: Benjamin.
Baym, G., and Pethick, C. J. 1991. Landau Fermi Liquid Theory. New York, NY: John Wiley \& Sons.
Bekenstein, J. D. 1973. Black holes and entropy. Phys. Rev. D, 7, 2333.
Belavin, A. A., Polyakov, A. M., and Zamolodchikov, A. B. 1984. Infinite conformal symmetry in two-dimensional quantum field theory. Nucl. Phys. B, 241, 333.
Bergknoff, H., and Thacker, H. B. 1979. Structure and solution of the massive Thirring model. Phys. Rev. D, 19, 3666.
Bernevig, B. A., Hughes, T. L., and Zhang, S. C. 2006. Quantum spin Hall effect and topological phase transition in HgTe quantum wells. Science, 314, 1757.
Berry, M. V. 1984. Quantal phase factors accompanying adiabatic changes. Proc. Roy. Soc. London A, 392, 45.
Bethe, H. 1931. Theory of metals. I. Eigenvalues and eigenfunctions of the linear atomic chain. Z. Phys., 71, 205.
Bishara, W., Bonderson, P., Nayak, C., Shtengel, K., and Slingerland, J. K. 2009. Interferometric signature of non-abelian anyons. Phys. Rev. $B, \mathbf{8 0}, 155303$.
Bloch, F. 1930. Theory of ferromagnetism. Z. Phys., 61, 206.
Bloch, F. 1933. Stopping power of atoms with several electrons. Z. Phys., 81, 363.
Blok, B., and Wen, X. G. 1990. Effective theories of the fractional quantum Hall effect: Hierarchy construction. Phys. Rev. B, 42, 8145.
Blöte, H. W. J., Cardy, J. L., and Nightingale, M. P. 1986. Conformal invariance, the central charge, and universal finite-size amplitudes at criticality. Phys. Rev. Lett., 56, 742.
Bombelli, L., Koul, R. K., Lee, J., and Sorkin, R. D. 1986. Quantum source of entropy for black holes. Phys. Rev. D, 34, 373.
Bonderson, P., Kitaev, A., and Shtengel, K. 2006. Detecting non-abelian statistics in the $v=5 / 2$ fractional quantum Hall state. Phys. Rev. Lett., 96, 016803.
Borzi, R. A., Grigera, S. A., Farrell, J. et al. 2007. Formation of a nematic fluid at high fields in $\mathrm{Sr}_{3} \mathrm{Ru}_{2} \mathrm{O}_{7}$. Science, 315, 214.
Boyanovsky, D., Dagotto, E., and Fradkin, E. 1987. Anomalous currents, induced charge and bound states on a domain wall of a semiconductor. Nucl. Phys. B, 285, 340.

Cabra, D. C., Fradkin, E., Rossini, G. L., and Schaposnik, F. A. 2000. Non-abelian fractional quantum Hall states and chiral coset conformal field theories. Int. J. Mod. Phys. A, 30, 4857.
Calabrese, P., and Cardy, J. 2004. Entanglement entropy and quantum field theory. JSTAT J. Statist. Mech.: Theor. Exp. 04, P06002.

Calabrese, P., and Cardy, J. 2007. Entanglement and correlation functions following a local quench: A conformal field theory approach. JSTAT J. Statist. Mech.: Theor. Exp., 2007, P10004.
Calabrese, P., and Cardy, J. 2009. Entanglement entropy and conformal field theory. J. Phys. A: Math. Theor., 42, 504005.

Calabrese, P., and Essler, F. H. L. 2010. Universal corrections to scaling for block entanglement in spin-1/2 $X X$ chains. JSTAT J. Statist. Mech.: Theor. Exp., 2010, P08029.
Calabrese, P., and Lefevre, A. 2008. Entanglement spectrum in one-dimensional systems. Phys. Rev. A, 78, 032329.
Calabrese, P., Cardy, J., and Tonni, E. 2009. Entanglement entropy of two disjoint intervals in conformal field theory. JSTAT J. Statist. Mech.: Theor. Exp., 2009, P11001.
Callan, C. G., and Harvey, J. A. 1985. Anomalies and fermion zero modes on strings and domain walls. Nucl. Phys. B, 250, 427.
Callan, C. G., and Wilczek, F. 1994. On geometric entropy. Phys. Lett. B, 333, 55.
Camino, F. E., Zhou, W., and Goldman, V. J. 2005. Realization of a Laughlin quasiparticle interferometer: Observation of fractional statistics. Phys. Rev. B, 72, 075342.

Cano, J., and Fendley, P. 2010. Spin Hamiltonians with resonating-valence-bond ground states. Phys. Rev. Lett., 105, 067205.
Canright, G. S., Girvin, S. M., and Brass, A. 1989. Statistics and flux in two dimensions. Phys. Rev. Lett., 63, 2291.
Cardy, J. 1996. Scaling and Renormalization in Statistical Physics. Cambridge: Cambridge University Press.
Cardy, J., and Peschel, I. 1988. Finite-size dependence of the free energy in twodimensional critical systems. Nucl. Phys. B, 300, 377.
Cardy, J. L. 1984. Conformal invariance and universality in finite-size scaling. J. Phys. A: Math. Gen., 17, L385.
Cardy, J. L. 1986. Effect of boundary conditions on the operator content of twodimensional conformally invariant theories. Nucl. Phys. B, 275, 200.
Cardy, J. L. 1989. Boundary conditions, fusion rules, and the Verlinde formula. Nucl. Phys. B, 324, 581.
Cardy, J. L., and Calabrese, P. 2010. Unusual corrections to scaling in entanglement entropy. JSTAT J. Statist. Mech.: Theor. Exp., P04023.
Cardy, J. L., Castro-Alvaredo, O. A., and Doyon, B. 2007. Form factors of branch-point twist fields in quantum integrable models and entanglement entropy. J. Stat. Phys., 130, 129.
Carlson, E. W., Emery, V. J., Kivelson, S. A., and Orgad, D. 2004. Concepts in high temperature superconductivity, in The Physics of Conventional and Unconventional Superconductors, K. H. Bennemann and J. B. Ketterson (eds.). Berlin: Springer-Verlag. arXiv:cond-mat/0206217.
Casini, H., and Huerta, M. 2005. Entanglement and alpha entropies for a massive scalar field in two dimensions. JSTAT J. Statist. Mech.: Theor. Exp., 2005, P12012.
Casini, H., and Huerta, M. 2007. Universal terms for the entanglement entropy in $2+1$ dimensions. Nucl. Phys. B, 764, 183.

Casini, H., and Huerta, M. 2009. Entanglement entropy in free quantum field theory. J. Phys. A: Math. Theor, 42, 504007.

Casini, H., Fosco, C. D., and Huerta, M. 2005. Entanglement and alpha entropies for a massive Dirac field in two dimensions. JSTAT J. Statist. Mech.: Theor. Exp., 2005, P07007.
Casini, H., Huerta, M., and Myers, R. C. 2011. Towards a derivation of holographic entanglement entropy. JHEP J. High Energy Phys., 2011, 036.
Castelnovo, C., Chamon, C., Mudry, C., and Pujol, P. 2004. From quantum mechanics to classical statistical physics: Generalized Rokhsar-Kivelson Hamiltonians and the "stochastic matrix form" decomposition. Ann. Phys., 318, 316.
Castro Neto, A. H., Guinea, F., Peres, N. M. R., Novoselov, K. S., and Geim, A. K. 2009. The electronic properties of graphene. Rev. Mod. Phys., 81, 109.
Chaikin, P. M., and Lubensky, T. C. 1995. Principles of Condensed Matter Physics. Cambridge: Cambridge University Press.
Chakravarty, S. 2010. Scaling of von Neumann entropy at the Anderson transition. Int. J. Mod. Phys. B, 24, 1823 (Special volume on Fifty Years of Anderson Localization).

Chakravarty, S., Halperin, B. I., and Nelson, D. R. 1988. Low-temperature behavior of two-dimensional quantum antiferromagnets. Phys. Rev. Lett., 60, 1057.
Chamon, C., Fradkin, E., and López, A. 2007. Fractional statistics and duality: Strong tunneling behavior of edge states of quantum Hall liquids in the Jain sequence. Phys. Rev. Lett., 98, 176801.
Chamon, C., Jackiw, R., Nishida, Y., Pi, S. Y., and Santos, L. 2010. Quantizing Majorana fermions in a superconductor. Phys. Rev. B, 81, 224515.
Chamon, C. de C., and Fradkin, E. 1997. Distinct universal conductances in tunneling to quantum Hall states: The role of contacts. Phys. Rev. B, 56, 2012.
Chamon, C. de C., Freed, D. E., and Wen, X. G. 1996. Nonequilibrium quantum noise in chiral Luttinger liquids. Phys. Rev. B, 53, 4033.
Chamon, C. de C., Freed, D. E., Kivelson, S. A., Sondhi, S. L., and Wen, X. G. 1997. Two-point-contact interferometer for quantum Hall systems. Phys. Rev. B, 55, 2331.
Chandra, P., Coleman, P., and Larkin, A. I. 1990. Ising transition in frustrated Heisenberg models. Phys. Rev. Lett., 64, 88.
Chang, A. M. 2003. Chiral Luttinger liquids at the fractional quantum Hall edge. Rev. Mod. Phys., 75, 1449.
Chang, A. M., Pfeiffer, L. N., and West, K. W. 1996. Observation of chiral Luttinger behavior in electron tunneling into fractional quantum Hall edges. Phys. Rev. Lett., 77, 2538.
Chen, Y.-H., Wilczek, F., Witten, E., and Halperin, B. I. 1989. On anyon superconductivity. Int. J. Mod. Phys. B, 3, 1001.
Cho, G. Y., and Moore, J. E. 2011. Topological BF field theory description of topological insulators. Ann. Phys., 326, 1515.
Cho, H., Young, J. B., Kang, W. et al. 1998. Hysteresis and spin transitions in the fractional quantum Hall effect. Phys. Rev. Lett., 81, 2522.
Chubukov, A. V. 1993. Kohn-Luttinger effect and the instability of a two-dimensional repulsive Fermi liquid at $T=0$. Phys. Rev. B, 48, 1097.
Chung, S. B., Bluhm, H., and Kim, E.-A. 2007. Stability of half-quantum vortices in $p_{x}+$ ipy superconductors. Phys. Rev. Lett., 99, 197002.
Coleman, P. 1984. New approach to the mixed-valence problem. Phys. Rev. B, 29, 3035.
Coleman, S. 1975. Quantum sine-Gordon equation as the massive Thirring model. Phys. Rev. D, 11, 2088.
Coleman, S. 1985. Aspects of Symmetry. Cambridge: Cambridge University Press.

Cooper, N. R., Wilkin, N. K., and Gunn, J. M. F. 2001. Quantum phase of vortices in rotating Bose-Einstein condensates. Phys. Rev. Lett., 87, 120405.
Creutz, M. 2001. Aspects of chiral symmetry and the lattice. Rev. Mod. Phys., 73, 119.
Dagotto, E., and Moreo, A. 1989. Phase diagram of the frustrated spin-1/2 Heisenberg antiferromagnet in 2 dimensions. Phys. Rev. Lett., 63, 2148.
Dagotto, E., Fradkin, E., and Moreo, A. 1988. SU(2) gauge invariance and order parameters in strongly coupled electronic systems. Phys. Rev. B, 38, 2926.
Das Sarma, S., and Pinczuk, A. (eds.). 1997. Perspectives in Quantum Hall Effects: Novel Quantum Liquids in Two-Dimensional Semiconductor Structures. New York, NY: Wiley.
Das Sarma, S., Freedman, M., and Nayak, C. 2005. Topologically protected qubits from a possible non-abelian fractional quantum Hall state. Phys. Rev. Lett., 94, 166802.
Das Sarma, S., Freedman, M., Nayak, C., Simon, S. H., and Stern, A. 2008. Non-abelian anyons and topological quantum computation. Rev. Mod. Phys., 80, 1083.
Dashen, R., and Frishman, Y. 1975. Four-fermion interactions and scale invariance. Phys. Rev. D, 11, 2781.
Dashen, R., Hasslacher, B., and Neveu, A. 1975. Particle spectrum in model field theories from semiclassical functional integral techniques. Phys. Rev. D, 12, 2443.
de Gennes, P. G. 1966. Superconductivity of Metals and Alloys. New York, NY: W. A. Benjamin.
de Gennes, P. G., and Prost, J. 1993. The Physics of Liquid Crystals. Oxford: Oxford Science/Clarendon.
de Picciotto, R., Reznikov, M., Heiblum, M. et al. 1997. Direct observation of a fractional charge. Nature, 389, 162.
den Nijs, M. P. M. 1981. Derivation of extended scaling relations between critical exponents in two-dimensional models from the one-dimensional Luttinger model. Phys. Rev. B, 23, 6111.
Deser, S., Jackiw, R., and Templeton, S. 1982. Three-dimensional massive gauge theories. Phys. Rev. Lett., 48, 975.
Di Francesco, P., Mathieu, P., and Sénéchal, D. 1997. Conformal Field Theory. Berlin: Springer-Verlag.
Dirac, P. A. M. 1931. Quantised singularities in the electromagnetic field. Proc. Roy. Soc. London, 133, 60.
Dirac, P. A. M. 1955. Gauge invariant formulation of quantum electrodynamics. Can. J. Phys., 33, 650.

Dixon, L., Friedan, D., Martinec, E., and Shenker, S. 1987. The conformal field theory of orbifolds. Nucl. Phys. B, 282, 13.
Dolev, M., Heiblum, M., Umansky, V., Stern, A., and Mahalu, D. 2008. Observation of a quarter of an electron charge at the $v=5 / 2$ quantum Hall state. Nature, 452, 829.
Dombre, T., and Kotliar, G. 1989. Instability of the long-range resonating-valence-bond state in the mean-field approach. Phys. Rev. B, 39, 855.
Dombre, T., and Read, N. 1988. Absence of the Hopf invariant in the long-wavelength action of two-dimensional antiferromagnets. Phys. Rev. B, 38, 7181.
Dong, S., Fradkin, E., Leigh, R. G., and Nowling, S. 2008. Topological entanglement entropy in Chern-Simons theories and quantum Hall fluids. JHEP J. High Energy Phys., 05, 016.
Doniach, S., and Sondheimer, E. H. 1974. Green's Functions for Solid State Physicists. New York, NY: Benjamin.
Dotsenko, V. S. 1984. Critical behaviour and associated conformal algebra of the $\mathbb{Z}_{3}$ Potts model. Nucl. Phys. B, 235, 54.

Dyson, F. J. 1956a. General theory of spin-wave interactions. Phys. Rev., 102, 1217.
Dyson, F. J. 1956b. Thermodynamic behavior of an ideal ferromagnet. Phys. Rev., 102, 1230.

Dzyaloshinskii, I., Polyakov, A. M., and Wiegmann, P. B. 1988. Neutral fermions in paramagnetic insulators. Phys. Lett. A, 127, 112.
Eguchi, T., Gilkey, P. B., and Hanson, A. J. 1980. Gravitation, gauge theories and differential geometry. Phys. Rep., 66, 213.
Einarsson, T., Sondhi, S. L., Girvin, S. M., and Arovas, D. P. 1995. Fractional spin for quantum Hall effect quasiparticles. Nucl. Phys. B, 441, 515.
Einstein, A., Podolsky, P., and Rosen, N. 1935. Can quantum-mechanical description of physical reality be considered complete? Phys. Rev., 47, 777.
Eisenstein, J. P., and MacDonald, A. H. 2004. Bose-Einstein condensation of excitons in bilayer electron systems. Nature, 432, 691.
Eisenstein, J. P., Störmer, H. L., Pfeiffer, L. N., and West, K. W. 1990. Evidence for a spin transition in the $v=2 / 3$ fractional quantum Hall effect. Phys. Rev. B, 41, 7910.
Eisenstein, J. P., Boebinger, G. S., Pfeiffer, L. N., West, K. W., and He, S. 1992. New fractional quantum Hall state in double-layer two-dimensional electron systems. Phys. Rev. Lett., 68.
Eliezer, D., and Semenoff, G. W. 1992a. Anyonization of lattice Chern-Simons theory. Ann. Phys., 217, 66.
Eliezer, D., and Semenoff, G. W. 1992b. Intersection forms and the geometry of lattice Chern-Simons theory. Phys. Lett. B, 286, 118.
Elitzur, S. 1975. Impossibility of spontaneous breaking of local symmetries. Phys. Rev. D, 12, 3978.
Elitzur, S., Moore, G., Schwimmer, A., and Seiberg, N. 1989. Remarks on the canonical quantization of the Chern-Simons-Witten theory. Nucl. Phys. B, 326, 108.
Elstner, N., Singh, R. P. P., and Young, A. P. 1993. Finite temperature properties of the spin-1/2 Heisenberg antiferromagnet on the triangular lattice. Phys. Rev. Lett., 71, 1629.

Emery, V. J. 1979. Theory of the one-dimensional electron gas, in Highly Conducting OneDimensional Solids. J. T. Devreese, R. P. Evrard, and V. E. van Doren (eds.). New York, NY: Plenum.
Erdélyi, A. (ed). 1953. Higher Transcendental Functions. New York, NY: McGraw-Hill.
Essin, A. M., Moore, J. E., and Vanderbilt, D. 2009. Magnetoelectric polarizability and axion electrodynamics in crystalline insulators. Phys. Rev. Lett., 102, 146805.

Essler, F. H. L., Frahm, H., Gohmann, F., Klumper, A., and Korepin, V. E. 2005. The One-Dimensional Hubbard Model. Cambridge: Cambridge University Press.
Evenbly, G., and Vidal, G. 2009. Entanglement renormalization in two spatial dimensions. Phys. Rev. Lett., 102, 180406.
Faddeev, L. D. 1976. Introduction to functional methods, in Methods of Field Theory. Proceedings of the Les Houches Summer School 1975, Session XXVIII, R. Stora and J. Zinn-Justin (eds.). Amsterdam: North-Holland.

Faddeev, L. D. 1984. Integrable models in $(1+1)$-dimensional quantum field theory, in Recent Advances in Field Theory and Statistical Mechanics. Proceedings of the 1982 Les Houches Summer School, Session XXXIX, J.-B. Zuber and R. Stora (eds.). Amsterdam: North-Holland.
Fagotti, M., Calabrese, P., and Moore, J. E. 2011. Entanglement spectrum of randomsinglet quantum critical points. Phys. Rev. B, 83, 045110.
Feenberg, E. 1969. Theory of Quantum Fluids. New York, NY: Academic Press.

Fendley, P., and Fradkin, E. 2005. Realizing non-abelian statistics in time-reversal-invariant systems. Phys. Rev. B, 72, 024412.
Fendley, P., Saleur, H., and Warner, N.P. 1994. Exact solution of a massless scalar field with a relevant boundary interaction. Nucl. Phys. B, 430, 577.
Fendley, P., Ludwig, A. W. W., and Saleur, H. 1995a. Exact conductance through point contacts in the $v=1 / 3$ fractional quantum Hall effect. Phys. Rev. Lett., 74, 3005.
Fendley, P., Ludwig, A. W. W., and Saleur, H. 1995b. Exact nonequilibrium transport through point contacts in quantum wires and fractional quantum Hall devices. Phys. Rev. B, 52, 8934.
Fendley, P., Moessner, R., and Sondhi, S. L. 2002. Classical dimers on the triangular lattice. Phys. Rev. B, 66, 214513.
Fendley, P., Fisher, M. P. A., and Nayak, C. 2006. Dynamical disentanglement across a point contact in a non-Abelian quantum Hall state. Phys. Rev. Lett., 97, 036801.
Fetter, A. L., and Walecka, J. D. 1971. Quantum Theory of Many-Particle Systems. New York, NY: McGraw-Hill.
Fetter, A. L., Hanna, C. B., and Laughlin, R. B. 1989. Random-phase approximation in the fractional-statistics gas. Phys. Rev. B, 39, 9679.
Feynman, R. P. 1972. Statistical Mechanics, A Set of Lectures. Reading, MA: W. A. Benjamin Inc.

Feynman, R. P., and Hibbs, A. R. 1965. Path Integrals and Quantum Mechanics. New York, NY: McGraw-Hill.
Fidkowski, L., Freedman, M., Nayak, C., Walker, K., and Wang, Z. 2009. From string nets to nonabelions. Commun. Math. Phys., 287, 805.
Fisher, D. S. 1994. Random antiferromagnetic quantum spin chains. Phys. Rev. B, 50, 3799.
Fisher, D. S. 1995. Critical behavior of random transverse-field Ising spin chains. Phys. Rev. B, 51, 6411.
Fisher, M. E., and Stephenson, J. 1963. Statistical mechanics of dimers on a plane lattice. II. Dimer correlations and monomers. Phys. Rev, 132, 1411.

Fradkin, E. 1989. Jordan-Wigner transformation for quantum-spin systems in two dimensions and fractional statistics. Phys. Rev. Lett., 63, 322.
Fradkin, E. 1990a. Superfluidity of the lattice anyon gas and topological invariance. Phys. Rev. B, 42, 570.
Fradkin, E. 1990b. The spectrum of short range resonating valence bond theories, in Field Theories in Condensed Matter Physics, A Workshop. Proceedings of the Johns Hopkins Workshop on Field Theories in Condensed Matter Physics, Baltimore 1988, Z. Tešanović (ed.). Redwood City, CA: Addison-Wesley, p. 73.

Fradkin, E. 2009. Scaling of entanglement entropy at 2D quantum Lifshitz fixed points and topological fluids. J. Phys. A: Math. Theor, 42, 504011.
Fradkin, E., and Hirsch, J. E. 1983. Phase diagram of one-dimensional electron-phonon systems. I. The Su-Schrieffer-Heeger model. Phys. Rev. B, 27, 1680.
Fradkin, E., and Kadanoff, L. P. 1980. Disorder variables and para-fermions in twodimensional statistical mechanics. Nucl. Phys. B, 170, 1.
Fradkin, E., and Kivelson, S. A. 1990. Short range resonating valence bond theories and superconductivity. Mod. Phys. Lett. B, 4, 225.
Fradkin, E., and Kohmoto, M. 1987. Quantized Hall effect and geometric localization of electrons on lattices. Phys. Rev. B, 35, 6017.
Fradkin, E., and Moore, J. E. 2006. Entanglement entropy of 2D conformal quantum critical points: Hearing the shape of a quantum drum. Phys. Rev. Lett., 97, 050404.
Fradkin, E., and Schaposnik, F. A. 1991. Chern-Simons gauge theories, confinement, and the chiral spin liquid. Phys. Rev. Lett., 66, 276.

Fradkin, E., and Shenker, S. H. 1979. Phase diagrams of lattice gauge theories with Higgs fields. Phys. Rev. D, 19, 3682.
Fradkin, E., and Stone, M. 1988. Topological terms in one- and two-dimensional quantum Heisenberg antiferromagnets. Phys. Rev. B, 38, 7215(R).
Fradkin, E., and Susskind, L. 1978. Order and disorder in gauge systems and magnets. Phys. Rev. D, 17, 2637.
Fradkin, E., Dagotto, E., and Boyanovsky, D. 1986. Physical realization of the parity anomaly in condensed matter physics. Phys. Rev. Lett., 57, 2967. Erratum: Ibid. 58, 961 (1987).
Fradkin, E., Moreno, E., and Schaposnik, F. A. 1993. Ground state wave functions for $1+1$ dimensional fermion field theories. Nucl. Phys. B, 392, 667.
Fradkin, E., Nayak, C., Tsvelik, A., and Wilczek, F. 1998. A Chern-Simons effective field theory for the Pfaffian quantum Hall state. Nucl. Phys. B, 516, 704.
Fradkin, E., Nayak, C., and Schoutens, K. 1999. Landau-Ginzburg theories for nonAbelian quantum Hall states. Nucl. Phys. B, 546, 711.
Fradkin, E., Huse, D., Moessner, R., Oganesyan, V., and Sondhi, S. L. 2004. On bipartite Rokhsar-Kivelson points and Cantor deconfinement. Phys. Rev. B, 69, 224415.
Fradkin, E., Kivelson, S. A., Lawler, M. J., Eisenstein, J. P., and Mackenzie, A. P. 2010. Nematic Fermi fluids in condensed matter physics. Annu. Rev. Condens. Matter Phys., 1, 7.1.
Freedman, M., Nayak, C., Shtengel, K., and Walker, K. 2004. A class of $P$, $T$-invariant topological phases of interacting electrons. Ann. Phys., 310, 428.
Freedman, M. H. 2001. Quantum computation and the localization of modular functors. Found. Comput. Math., 1, 183.
Freedman, M. H. 2003. A magnetic model with a possible Chern-Simons phase. Commun. Math. Phys., 234, 129.
Freedman, M. H., Kitaev, A., and Wang, Z. 2002a. Simulation of topological field theories by quantum computers. Commun. Math. Phys., 227, 587.
Freedman, M. H., Kitaev, A., Larsen, M. J., and Wang, Z. 2002b. Topological quantum computation. Commun. Math. Phys., 227, 605.
Friedan, D. 1982. A proof of the Nielsen-Ninomiya theorem. Commun. Math. Phys., 85, 481.
Friedan, D., and Shenker, S. 1987. The analytic geometry of two-dimensional conformal field theory. Nucl. Phys. B, 281, 509.
Friedan, D. H. 1984. Introduction to Polyakov's string theory, in Recent Advances in Field Theory and Statistical Mechanics. Proceedings of the Les Houches Summer School 1982, Session XXXIX, J.-B. Zuber and R. Stora (eds.). Amsterdam: North-Holland.
Friedan, D. H. 1985. Nonlinear models in $2+\epsilon$ dimensions. Ann. Phys., 163, 318.
Friedan, D. H., Qiu, Z., and Shenker, S. H. 1984. Conformal invariance, unitarity, and critical exponents in two dimensions. Phys. Rev. Lett., 52, 1575.
Fröhlich, J., and Kerler, T. 1991. Universality in quantum Hall systems. Nucl. Phys. B, 354, 369.
Fröhlich, J., and Marchetti, P. A. 1988. Quantum field theory of anyons. Lett. Math. Phys., 16, 347.
Fröhlich, J., and Zee, A. 1991. Large-scale physics of the quantum Hall fluid. Nucl. Phys. B, 364, 517.
Fu, L., and Kane, C. L. 2006. Time reversal polarization and a $Z_{2}$ adiabatic spin pump. Phys. Rev. B, 74, 195312.
Fu, L., and Kane, C. L. 2007. Topological insulators with inversion symmetry. Phys. Rev. B, 76, 045302.

Fu, L., and Kane, C. L. 2008. Superconducting proximity effect and Majorana fermions at the surface of a topological insulator. Phys. Rev. Lett., 100, 096407.
Fu, L., Kane, C. L., and Mele, E. J. 2007. Topological insulators in three dimensions. Phys. Rev. Lett., 98, 106803.
Fuchs, J. 1992. Affine Lie Algebras and Quantum Groups. Cambridge: Cambridge University Press.
Fursaev, D. V. 2006. Entanglement entropy in critical phenomena and analog models of quantum gravity. Phys. Rev. D, 73, 124025.
Furukawa, S., and Misguich, G. 2007. Topological entanglement entropy in the quantum dimer model on the triangular lattice. Phys. Rev. B, 75, 214407.
Georgi, H. 1982. Lie Algebras in Particle Physics. New York, NY: Benjamin/Cummings.
Gepner, D. 1987. New conformal field theories associated with Lie algebras and their partition functions. Nucl. Phys. B, 290, 10.
Ginsparg, P. 1989. Applied conformal field theory, in Fields, Strings and Critical Phenomena. Proceedings of the Les Houches Summer School 1988, Session XLIX, E. Brézin and J. Zinn-Justin (eds.). Amsterdam: North-Holland.
Gioev, D., and Klich, I. 2006. Entanglement entropy of fermions in any dimension and the Widom conjecture. Phys. Rev. Lett., 96, 100503.
Girvin, S. M., and Jach, T. 1984. Formalism for the quantum Hall effect: Hilbert space of analytic functions. Phys. Rev. B, 29, 5617.
Girvin, S. M., and MacDonald, A. H. 1987. Off-diagonal long-range order, oblique confinement, and the fractional quantum Hall effect. Phys. Rev. Lett., 58, 1252.
Girvin, S. M., MacDonald, A. H., and Platzman, P. M. 1986. Magneto-roton theory of collective excitations in the fractional quantum Hall effect. Phys. Rev. B, 33, 2481.
Gogolin, A. O., Nersesyan, A. A., and Tsvelik, A. M. 1998. Bosonization and Strongly Correlated Systems. Cambridge: Cambridge University Press.
Goldenfeld, N. 1992. Lectures on Phase Transitions and the Renormalization Group. Reading, MA: Addison-Wesley.
Goldhaber, A. S. 1998. Hairs on the unicorn: Fine structure of monopoles and other solitons, in Proceedings of the CRM-FIELDS-CAP Workshop "Solitons," Queen's University, Kingston (Ontario, Canada), July 1997. New York: Springer-Verlag. arXiv:9712190.
Goldstone, J., and Wilczek, F. 1981. Fractional quantum numbers on solitons. Phys. Rev. Lett., 47, 986.
Golterman, M. F. L., Jansen, K., and Kaplan, D. B. 1993. Chern-Simons currents and chiral fermions on the lattice. Phys. Lett. B, 301, 219.
Greiter, M., Wen, X. G., and Wilczek, F. 1991. Paired Hall state at half-filling. Phys. Rev. Lett., 66, 3205.
Greiter, M., Wen, X. G., and Wilczek, F. 1992. Paired Hall states. Nucl. Phys. B, 374, 567.
Grinstein, G. 1981. Anisotropic sine-Gordon model and infinite-order phase transitions in three dimensions. Phys. Rev. B, 23, 4615.
Grinstein, G., and Pelcovits, R. A. 1982. Nonlinear elastic theory of smectic liquid crystals. Phys. Rev. A, 26, 915.
Gross, D. J., and Neveu, A. 1974. Dynamical symmetry breaking in asymptotically free field theories. Phys. Rev. D, 10, 3235.
Gubser, S. S., Klebanov, I. R., and Polyakov, A. M. 1998. Gauge theory correlators from non-critical string theory. Phys. Lett. B, 428, 105.
Haldane, F. D. M. 1981. Luttinger liquid theory of one-dimensional quantum fluids. I. Properties of the Luttinger model and their extension to the general 1D interacting spinless Fermi gas. J. Phys. C: Solid State Phys., 14, 2585.

Haldane, F. D. M. 1982. Spontaneous dimerization in the $S=1 / 2$ Heisenberg antiferromagnetic chain with competing interactions. Phys. Rev. B, 25, 4925.
Haldane, F. D. M. 1983a. Continuum dynamics of the 1-D Heisenberg antiferromagnet: Identification with the $\mathrm{O}(3)$ nonlinear sigma model. Phys. Lett. A, 93, 464.
Haldane, F. D. M. 1983b. Fractional quantization of the Hall effect: A hierarchy of incompressible quantum fluid states. Phys. Rev. Lett., 51, 605.
Haldane, F. D. M. 1983c. Nonlinear field theory of large-spin Heisenberg antiferromagnets: Semiclassically quantized solitons of the one-dimensional easy-axis Néel state. Phys. Rev. Lett., 50, 1153.
Haldane, F. D. M. 1985a. Many-particle translational symmetries of two-dimensional electrons at rational Landau-level filling. Phys. Rev. Lett., 55, 2095.
Haldane, F. D. M. 1985b. " $\theta$ Physics" and quantum spin chains. J. Appl. Phys., 57, 3359.
Haldane, F. D. M. 1988a. Model for a quantum Hall effect without Landau levels: Condensed-matter realization of the "parity anomaly." Phys. Rev. Lett., 61, 2015.
Haldane, F. D. M. 1988b. O(3) non-linear $\sigma$ model and the topological distinction between integer- and half-integer-spin antiferromagnets in two dimensions. Phys. Rev. Lett., 61, 1029.
Haldane, F. D. M. 2011. Geometrical description of the fractional quantum Hall effect. Phys. Rev. Lett., 107, 116801.
Haldane, F. D. M., and Rezayi, E. H. 1985. Periodic Laughlin-Jastrow wave functions for the fractional quantized Hall effect. Phys. Rev. B, 31, 2529.
Hallberg, K. 2006. New trends in density matrix renormalization. Adv. Phys., 55, 477.
Halperin, B. I. 1982. Quantized Hall conductance, current-carrying edge states, and the existence of extended states in a two-dimensional disordered potential. Phys. Rev. B, 25, 2185.
Halperin, B. I. 1983. Theory of the quantized Hall conductance. Helv. Phys. Acta, 56, 75.
Halperin, B. I. 1984. Statistics of quasiparticles and the hierarchy of fractional quantized Hall states. Phys. Rev. Lett., 52, 1583.
Halperin, B. I., Lee, P. A., and Read, N. 1993. Theory of the half-filled Landau level. Phys. Rev. B, 47, 7312.
Halperin, B. I., Stern, A., Neder, I., and Rosenow, B. 2011. Theory of the Fabry-Pérot quantum Hall interferometer. Phys. Rev. B, 83, 155440.
Hamma, A., Ionicioiu, R., and Zanardi, P. 2005a. Bipartite entanglement and entropic boundary law in lattice spin systems. Phys. Rev. A, 71, 022315.
Hamma, A., Ionicioiu, R., and Zanardi, P. 2005b. Ground state entanglement and geometric entropy in the Kitaev model. Phys. Lett. A, 337, 22.
Hansson, T. H., Oganesyan, V., and Sondhi, S. L. 2004. Superconductors are topologically ordered. Ann. Phys., 313, 497.
Hartnoll, S. A. 2012. Horizons, holography and condensed matter, in Black Holes in Higher Dimensions, G. Horowitz (ed.). Cambridge: Cambridge University Press. pp. 387-419.
Hartnoll, S. A., Polchinski, J., Silverstein, E., and Tong, D. 2010. Towards strange metal holography. J. High Energy Phys. JHEP, 2010, 120.
Hasan, M. Z., and Kane, C. L. 2010. Colloquium: Topological insulators. Rev. Mod. Phys., 82, 3045.
Hasan, M. Z., and Moore, J. E. 2011. Three-dimensional topological insulators. Annu. Rev. Condens. Matter Phys., 2, 55.
Hastings, M., and Koma, T. 2006. Spectral gap and exponential decay of correlations. Commun. Math. Phys., 265, 781.
Hawking, S. W. 1975. Particle creation by black holes. Commun. Math. Phys., 43, 199.

Heeger, A. J., Kivelson, S., Schrieffer, J. R., and Su, W. P. 1988. Solitons in conducting polymers. Rev. Mod. Phys., 60, 781.
Heemskerk, I., and Polchinski, J. 2011. Holographic and Wilsonian renormalization groups. J. High Energy Phys. JHEP, 2011, 031.
Heinonen, O. (ed.). 1998. Composite Fermions: A Unified View of the Quantum Hall Regime. Singapore: World-Scientific Publishing Co.
Hirsch, J. E. 1990. Spin-split states in metals. Phys. Rev. B, 41, 6820.
Hirsch, J. E. 1999. Spin Hall effect. Phys. Rev. Lett., 83, 1834.
Ho, T. L. 1995. Broken symmetry of two-component $v=1 / 2$ quantum Hall states. Phys. Rev. Lett., 75, 1186.
Hofstadter, D. R. 1976. Energy levels and wave functions of Bloch electrons in rational and irrational magnetic fields. Phys. Rev. $B, \mathbf{1 4}, 2239$.
Hohenadler, M., Lang, T. C., and Assaad, F. F. 2011. Correlation effects in quantum spin-Hall insulators: A quantum Monte Carlo study. Phys. Rev. Lett., 106, 100403.

Hohenadler, M., Meng, Z. Y., Lang, T. C. et al. 2012. Quantum phase transitions in the Kane-Mele-Hubbard model. Phys. Rev. B, 85, 115132.
Holstein, T., and Primakoff, H. 1940. Field dependence of the intrinsic domain magnetization of a ferromagnet. Phys. Rev., 58, 1098.
Holzhey, C., Larsen, F., and Wilczek, F. 1994. Geometric and renormalized entropy in conformal field theory. Nucl. Phys. B, 424, 443.
Hosotani, Y., and Chakravarty, S. 1990. Superconductivity in the anyon model. Phys. Rev. B, 42, 342 .
Hoyos, C., and Son, D. T. 2012. Hall viscosity and electromagnetic response. Phys. Rev. Lett., 108, 066805.
Hsu, B., and Fradkin, E. 2010. Universal behavior of entanglement in 2D quantum critical dimer models. JSTAT J. Statist. Mech.: Theor. Exp., 2010, P09004.
Hsu, B., Grosfeld, E., and Fradkin, E. 2009a. Quantum noise and entanglement generated by a local quantum quench. Phys. Rev. B, 80, 235412.
Hsu, B., Mulligan, M., Fradkin, E., and Kim, E.-A. 2009b. Universal behavior of the entanglement entropy in 2D conformal quantum critical points. Phys. Rev. B, 79, 115421.

Ioffe, L. B., and Larkin, A. I. 1988. Effective action of a two-dimensional antiferromagnet. Int. J. Mod. Phys. B, 2, 203.
Itzykson, C., and Zuber, J. B. 1980. Quantum Field Theory, 1st edn. New York, NY: McGraw-Hill.
Ivanov, D. A. 2001. Non-Abelian statistics of half-quantum vortices in p-wave superconductors. Phys. Rev. Lett., 86, 268.
Jackiw, R., and Rebbi, C. 1976. Solitons with fermion number 1/2. Phys. Rev. D, 13, 3398.
Jackiw, R., and Rossi, P. 1981. Zero modes of the vortex-fermion system. Nucl. Phys. B, 190, 681.
Jackiw, R., and Schrieffer, J. R. 1981. Solitons with fermion number $1 / 2$ in condensed matter and relativistic field theories. Nucl. Phys. B, 190, 253.
Jain, J. K. 1989a. Composite-fermion approach for the fractional quantum Hall effect. Phys. Rev. Lett., 63, 199.
Jain, J. K. 1989b. Incompressible quantum Hall states. Phys. Rev. B, 40, 8079.
Jain, J. K. 1990. Theory of the fractional quantum Hall effect. Phys. Rev. B, 41, 7653.
Jain, J. K. 2007. Composite Fermions, 1st edn. Cambridge: Cambridge University Press.
Jalabert, R. A., and Sachdev, S. 1991. Spontaneous alignment of frustrated bonds in an anisotropic, three-dimensional Ising model. Phys. Rev. B, 44, 686.

Jang, J., Ferguson, D. G., Vakaryuk, V. et al. 2011. Observation of half-height magnetization steps in $\mathrm{Sr}_{2} \mathrm{RuO}_{4}$. Science, 331, 186.
Jansen, K. 1996. Domain wall fermions and chiral gauge theories. Phys. Rep., 273, 1.
Jia, X., Subramanian, A. R., Gruzberg, I. A., and Chakravarty, S. 2008. Entanglement entropy and multifractality at the localization transition. Phys. Rev. B, 77, 014208.
Jiang, H. C., Yao, H., and Balents, L. 2012. Spin liquid ground state of the spin- $1 / 2$ square $J_{1}-J_{2}$ Heisenberg model. Phys. Rev. B, 86, 024424.
Jongeward, G. A., Stack, J. D., and Jayaprakash, C. 1980. Monte Carlo calculations on $Z_{2}$ gauge-Higgs theories. Phys. Rev. D, 21, 3360.
Jordan, P., and Wigner, E. P. 1928. Pauli's equivalence prohibition. Z. Phys., 47, 631.
José, J. V., Kadanoff, L. P., Kirkpatrick, S., and Nelson, D. R. 1977. Renormalization, vortices, and symmetry-breaking perturbations in the two-dimensional planar model. Phys. Rev. B, 16, 1217.
Ju, H., Kallin, A. B., Fendley, P., Hastings, M. B., and Melko, R. G. 2012. Universal largescale entanglement in two-dimensional gapless systems. Phys. Rev. B, 85, 165121.
Kac, M. 1966. Can you hear the shape of a drum? Amer. Math. Monthly, 73, 1.
Kadanoff, L. P. 1969. Operator algebra and the determination of critical indices. Phys. Rev. Lett., 23, 1430.
Kadanoff, L. P. 1977. The application of renormalization group techniques to quarks and strings. Rev. Mod. Phys., 49, 267.
Kadanoff, L. P. 1979. Multicritical behavior at the Kosterlitz-Thouless critical point. Ann. Phys., 120, 39.
Kadanoff, L. P., and Baym, G. 1962. Quantum Statistical Mechanics: Green's Function Methods in Equilibrium and Non-Equilibrium Problems. New York, NY: Benjamin.
Kadanoff, L. P., and Brown, A. C. 1979. Correlation functions on the critical lines of the Baxter and Ashkin-Teller models. Ann. Phys., 121, 318.
Kadanoff, L. P., and Ceva, H. 1971. Determination of an operator algebra for the twodimensional Ising model. Phys. Rev. B, 3, 3918.
Kadanoff, L. P., and Martin, P. C. 1961. Theory of many-particle systems. II. Superconductivity. Phys. Rev., 124, 670.
Kalmeyer, V., and Laughlin, R. B. 1987. Equivalence of the resonating-valence-bond and fractional quantum Hall states. Phys. Rev. Lett., 59, 2095.
Kane, C. L., and Fisher, M. P. A. 1992. Transmission through barriers and resonant tunneling in an interacting one-dimensional electron gas. Phys. Rev. B, 46, 15233.
Kane, C. L., and Fisher, M. P. A. 1994. Nonequilibrium noise and fractional charge in the quantum Hall effect. Phys. Rev. Lett., 72, 724.
Kane, C. L., and Mele, E. J. 2005a. Quantum spin Hall effect in graphene. Phys. Rev. Lett., 95, 226801.
Kane, C. L., and Mele, E. J. 2005b. $Z_{2}$ Topological order and the quantum spin Hall effect. Phys. Rev. Lett., 95, 146802.
Kane, C. L., Lee, P. A., Ng, T. K., Chakraborty, B., and Read, N. 1990. Mean-field theory of the spiral phases of a doped antiferromagnet. Phys. Rev. B, 41, 2653.
Kane, C. L., Fisher, M. P. A., and Polchinski, J. 1994. Randomness at the edge: Theory of quantum Hall transport at filling $v=2 / 3$. Phys. Rev. Lett., 72, 4129.
Kaplan, D. B. 1992. A method for simulating chiral fermions on the lattice. Phys. Lett. B, 288, 342.
Kennedy, T., and King, C. 1985. Symmetry breaking in the lattice Abelian Higgs model. Phys. Rev. Lett., 55, 776.
Kennedy, T., Lieb, E., and Shastri, S. 1988. The XY model has long-range order for all spins and all dimensions greater than one. Phys. Rev. Lett., 61, 2582.

King-Smith, R. D., and Vanderbilt, D. 1993. Theory of polarization of crystalline solids. Phys. Rev. B, 47, 1651.
Kitaev, A. 2009. Periodic table for topological insulators and superconductors, in Advances in Theoretical Physics: Landau Memorial Conference, M. Feigelman (ed.). College Park, MA: AIP Conference Proceedings, for the American Institute of Physics, p. 22.
Kitaev, A., and Preskill, J. 2006. Topological entanglement entropy. Phys. Rev. Lett., 96, 110404.

Kitaev, A. Yu. 2001. Unpaired Majorana fermions in quantum wires. Physics - Uspekhi, 44, 131. (Proceedings of the Mesoscopic and Strongly Correlated Electron Systems Conference (9-16 July 2000, Chernogolovka, Moscow Oblast).)
Kitaev, A. Yu. 2003. Fault-tolerant quantum computation by anyons. Ann. Phys., 303, 2. arXiv:quant-ph/9707021.
Kitazawa, Y., and Murayama, H. 1990. Topological phase transition of anyon systems. Nucl. Phys. B, 338, 777.
Kivelson, S., and Roček, M. 1985. Consequences of gauge invariance for fractionally charged quasi-particles. Phys. Lett. B, 156, 85.
Kivelson, S. A., and Rokhsar, D. S. 1990. Bogoliubov quasiparticles, spinons, and spincharge decoupling in superconductors. Phys. Rev. B, 41, 11693(R).
Kivelson, S. A., Kallin, C., Arovas, D. P., and Schrieffer, J. R. 1986. Cooperative ring exchange theory of the fractional quantized Hall effect. Phys. Rev. Lett., 56, 873.

Kivelson, S. A., Rokhsar, D., and Sethna, J. P. 1987. Topology of the resonating valencebond state: Solitons and high $T_{\mathrm{c}}$ superconductivity. Phys. Rev. B, 35, 865.
Kivelson, S. A., Fradkin, E., and Emery, V. J. 1998. Electronic liquid-crystal phases of a doped Mott insulator. Nature, 393, 550.
Kivelson, S. A., Fradkin, E., and Geballe, T. H. 2004. Quasi-1D dynamics and the nematic phase of the 2D Emery model. Phys. Rev. B, 69, 144505.
Klauder, J. 1979. Path integrals and stationary phase approximations. Phys. Rev. D, 19, 2349.
Klich, I., and Levitov, L. 2009. Quantum noise and an entanglement meter. Phys. Rev. Lett., 102, 100502.
Knizhnik, V. G., and Zamolodchikov, A. B. 1984. Current algebra and Wess-Zumino model in two dimensions. Nucl. Phys. B, 247, 83.
Kogut, J., and Susskind, L. 1975. Hamiltonian formulation of Wilson's lattice gauge theories. Phys. Rev. D, 11, 395.
Kogut, J. B. 1979. An introduction to lattice gauge theory and spin systems. Rev. Mod. Phys., 51, 659.
Kogut, J. B. 1983. The lattice gauge theory approach to quantum chromodynamics. Rev. Mod. Phys., 55, 775.
Kogut, J. B. 1984. A review of the lattice gauge theory approach to quantum chromodynamics, 1982, in Recent Advances in Field Theory and Statistical Mechanics. Proceedings of the Les Houches Summer School in Theoretical Physics, 1982, Session XXXIX, L. B. Zuber and R. Stora (eds.). Amsterdam: North-Holland.
Kohmoto, M. 1983. Metal-insulator transition and scaling for incommensurate systems. Phys. Rev. Lett., 51, 1198.
Kohmoto, M. 1985. Topological invariant and the quantization of the Hall conductance. Ann. Phys., 160, 343.
Kohmoto, M., and Shapir, Y. 1988. Antiferromagnetic correlations of the resonating-valence-bond state. Phys. Rev. B, 37, 9439.

Kohn, W. 1961. Cyclotron resonance and de Haas-van Alphen oscillations of an interacting electron gas. Phys. Rev., 123, 1242.
Kohn, W., and Luttinger, J. M. 1965. New mechanism for superconductivity. Phys. Rev. Lett., 15, 524.
Kondev, J. 1997. Liouville field theory of fluctuating loops. Phys. Rev. Lett., 78, 4320.
Kondev, J., and Henley, C. L. 1996. Kac-Moody symmetries of critical ground states. Nucl. Phys. B, 464, 540.
König, M., Steffen, S., Brüne, C. et al. 2007. Quantum spin Hall insulator state in HgTe quantum wells. Science, 318, 766.
König, M., Buhmann, H., Molenkamp, L. W. et al. 2008. The quantum spin Hall effect: Theory and experiment. J. Phys. Soc. Japan, 77, 031007.
Kopp, A., Jia, X., and Chakravarty, S. 2007. Non-analyticity of von Neumann entropy as a criterion for quantum phase transitions. Ann. Phys. (N.Y.), 322, 1466.
Kosterlitz, J. M. 1974. The critical properties of the two-dimensional XY model. J. Phys. C: Solid State Phys., 7, 1046.
Kosterlitz, J. M. 1977. The $d$-dimensional Coulomb gas and the roughening transition. J. Phys. C: Solid State Phys., 10, 3753.
Kosterlitz, J. M., and Thouless, D. J. 1973. Order, metastability and phase transitions in two-dimensional systems. J. Phys. C: Solid State Phys., 6, 1181.
Kotliar, G. 1988. Resonating valence bonds and d-wave superconductivity. Phys. Rev. B, 37, 3664.
Kramers, H. A., and Wannier, G. H. 1941. Statistics of the two-dimensional ferromagnet. Part I. Phys. Rev., 60, 252.
Krauss, L. M., and Wilczek, F. 1989. Discrete gauge symmetry in continuum theories. Phys. Rev. Lett., 62, 1221.
Kuklov, A. B., Matsumoto, M., Prokof'ev, N. V., Svistunov, B. V., and Troyer, M. 2008. Deconfined criticality: Generic first-order transition in the $\mathrm{SU}(2)$ symmetry case. Phys. Rev. Lett., 101, 050405.
Kwon, H. J., Houghton, A., and Marston, J. B. 1994. Gauge interactions and bosonized fermion liquids. Phys. Rev. Lett., 73, 284.
Laflorencie, N., Sørensen, E. S., Chang, M.-S., and Affleck, I. 2006. Boundary effects in the critical scaling of entanglement entropy in 1D systems. Phys. Rev. Lett., 96, 100603.

Landau, L. D., and Lifshitz, E. M. 1975a. Statistical Physics, 3rd edn. Oxford: Pergamon Press.
Landau, L. D., and Lifshitz, E. M. 1975b. The Classical Theory of Fields, 3rd edn. Oxford: Pergamon Press.
Laughlin, R. B. 1983. Anomalous quantum Hall effect: An incompressible quantum fluid with fractionally charged excitations. Phys. Rev. Lett., 50, 1395.
Laughlin, R. B. 1987. Elementary theory: The incompressible quantum fluid, in The Quantum Hall Effect, R. Prange and S. M. Girvin (eds.). New York, NY: Springer-Verlag, p. 233.

Laughlin, R. B. 1988a. Superconducting ground state of noninteracting particles obeying fractional statistics. Phys. Rev. Lett., 60, 2677.
Laughlin, R. B. 1988b. The relationship between high-temperature superconductivity and the fractional quantum Hall effect. Science, 242, 525.
Lee, D.-H., and Fisher, M. P. A. 1989. Anyon superconductivity and the fractional quantum Hall effect. Phys. Rev. Lett., 63, 903.
Lee, S. S. 2008. Stability of the $\mathrm{U}(1)$ spin liquid with a spinon Fermi surface in $2+1$ dimensions. Phys. Rev. B, 78, 085129.

Lee, S. S. 2010. Holographic description of quantum field theory. Nucl. Phys. B, 832, 567.
Lee, S. S. 2011. Holographic description of large $N$ gauge theory. Nucl. Phys. B, 851, 143.
Leggett, A. J. 1975. A theoretical description of the new phases of liquid ${ }^{3} \mathrm{He}$. Rev. Mod. Phys., 47, 331.
Leinaas, J. M., and Myrheim, J. 1977. On the theory of identical particles. Il Nuovo Cimento, 37B, 1.
Leung, P. W., and Elser, V. 1993. Numerical studies of a 36 -site kagome antiferromagnet. Phys. Rev. B, 47, 5459.
Leung, P. W., Chiu, K. C., and Runge, K. J. 1996. Columnar dimer and plaquette resonating-valence-bond orders in the quantum dimer model. Phys. Rev. B, 54, 12938.
Levin, M., and Stern, A. 2009. Fractional topological insulators. Phys. Rev. Lett., 103, 196803.

Levin, M., and Wen, X.-G. 2005. String-net condensation: A physical mechanism for topological phases. Phys. Rev. B, 71, 045110.
Levin, M., and Wen, X.-G. 2006. Detecting topological order in a ground state wave function. Phys. Rev. Lett., 96, 110405.
Levin, M., Burnell, F. J., Koch-Janusz, M., and Stern, A. 2011. Exactly soluble models for fractional topological insulators in two and three dimensions. Phys. Rev. B, 84, 235145.

Levine, H., Libby, S. B., and Pruisken, A. M. M. 1983. Electron delocalization by a magnetic field in two dimensions. Phys. Rev. Lett., 51, 1915.
Li, H., and Haldane, F. D. M. 2008. Entanglement spectrum as a generalization of entanglement entropy: Identification of topological order in non-Abelian fractional quantum Hall effect states. Phys. Rev. Lett., 101, 010504.
Liang, S. 1990a. Existence of Néel order at $T=0$ in the spin- $1 / 2$ antiferromagnetic Heisenberg model on a square lattice. Phys. Rev. B, 42, 6555.
Liang, S. 1990b. Monte Carlo simulations of the correlation functions for Heisenberg spin chains at $T=0$. Phys. Rev. Lett., 64, 1597.
Liang, S. D., Douçot, B., and Anderson, P. W. 1988. Some new variational resonating-valence-bond-type wave functions for the spin- $1 / 2$ antiferromagnetic Heisenberg model on a square lattice. Phys. Rev. B, 61, 365 .
Lieb, E., and Mattis, D. C. 1965. Exact solution of a many fermion system and its associated boson field. J. Math. Phys., 6, 304.
Lieb, E., Schultz, T., and Mattis, D. C. 1961. Two soluble models of an antiferromagnetic chain. Ann. Phys. (N.Y.), 16, 407.
Lieb, E. H., and Ruskai, M. B. 1973. Proof of the strong subadditivity of quantum mechanical entropy. J. Math. Phys., 14, 1938.
Lieb, E. H., and Wu, F. Y. 1968. Absence of Mott transition in an exact solution of the short-range, one-band model in one dimension. Phys. Rev. Lett., 20, 1445.
Lilly, M. P., Cooper, K. B., Eisenstein, J. P., Pfeiffer, L. N., and West, K. W. 1999. Evidence for an anisotropic state of two-dimensional electrons in high Landau levels. Phys. Rev. Lett., 82, 394.
Liu, H., McGreevy, J., and Vegh, D. 2011. Non-Fermi liquids from holography. Phys. Rev. D, 83, 065029.
López, A., and Fradkin, E. 1991. Fractional quantum Hall effect and Chern-Simons gauge theories. Phys. Rev. B, 44, 5246.
López, A., and Fradkin, E. 1993. Response functions and spectrum of collective excitations of fractional quantum Hall effect systems. Phys. Rev. B, 47, 7080.
López, A., and Fradkin, E. 1995. Fermionic Chern-Simons theory for the fractional quantum Hall effect in bilayers. Phys. Rev. B, 51, 4347.

López, A., and Fradkin, E. 1999. Universal structure of the edge states of the fractional quantum Hall states. Phys. Rev. B, 59, 15323.
López, A., and Fradkin, E. 2001. Effective field theory for the bulk and edge states of quantum Hall states in unpolarized single layer and bilayer systems. Phys. Rev. $B, \mathbf{6 3}$, 085306.

López, A., Rojo, A. G., and Fradkin, E. 1994. Chern-Simons theory of the anisotropic quantum Heisenberg antiferromagnet on a square lattice. Phys. Rev. B, 49, 15139.

Lowenstein, J. 1984. Introduction to the Bethe-Ansatz approach in $(1+1)$-dimensional models, in Recent Advances in Field Theory and Statistical Mechanics. Proceedings of the 1982 Les Houches Summer School, Session XXXIX, J.-B. Zuber and R. Stora (eds.). Amsterdam: North Holland.
Luther, A., and Peschel, I. 1975. Calculation of critical exponents in two dimensions from quantum field theory in one dimension. Phys. Rev. B, 12, 3908.
Maciejko, J., Hughes, T. L., and Zhang, S. C. 2011. The quantum spin Hall effect. Annu. Rev. Condens. Matter Phys., 2, 31.
Mackenzie, A. P., and Maeno, Y. 2003. The superconductivity of $\mathrm{Sr}_{2} \mathrm{RuO}_{4}$ and the physics of spin-triplet pairing. Rev. Mod. Phys., 75, 657.
Mahan, G. 1990. Many-Particle Physics, 2nd edn. New York, NY: Plenum Press.
Maldacena, J. M. 1998. The large $N$ limit of superconformal field theories and supergravity. Adv. Theor. Math. Phys., 2, 231.
Maldacena, J. M. 2012. The gauge/gravity duality, in Black Holes in Higher Dimensions, G. Horowitz (ed.). Cambridge: Cambridge University Press.

Maldacena, J. M., and Strominger, A. 1996. Statistical entropy of four-dimensional extremal black holes. Phys. Rev. Lett., 77, 428.
Maleev, S. V. 1957. Scattering of slow neutrons in ferromagnetics (in Russian). Zh. Éksp. Teor. Fiz., 33, 1010; English translation JETP 6, 776 (1958).
Mandelstam, S. 1975. Soliton operators for the quantized sine-Gordon equation. Phys. Rev. D, 11, 3026.
Manousakis, E. 1991. The spin-1/2 Heisenberg antiferromagnet on a square lattice and its application to the cuprous oxides. Rev. Mod. Phys., 63, 1.
Marshall, W. 1955. Antiferromagnetism. Proc. Roy. Soc. A, 232, 48.
Marston, J. B., and Affleck, I. 1989. Large- $N$ limit of the Hubbard-Heisenberg model. Phys. Rev. B, 39, 11538.
Martin, P. C. 1967. Measurements and Correlation Functions. New York, NY: Gordon \& Breach.
Mattis, D. C. 1965. The Theory of Magnetism. New York, NY: Harper \& Row.
McCoy, B., and Wu, T. T. 1973. The Two-Dimensional Ising Model, 1st edn. Cambridge, MA: Harvard University Press.
McGreevy, J. 2010. Holographic duality with a view toward many-body physics. Adv. High Energy Phys., 2010, 723105.
Melik-Alaverdian, K. Park V., Bonesteel, N. E., and Jain, J. K. 1998. Possibility of p-wave pairing of composite fermions at $v=12$. Phys. Rev. $B, 58$, R10167.
Meng, Z. Y., Lang, T. C., Wessel, S., Assaad, F. F., and Muramatsu, A. 2010. Quantum spin liquid emerging in two-dimensional correlated Dirac fermions. Nature, 464, 847.
Mermin, N. D. 1979. The topological theory of defects in ordered media. Rev. Mod. Phys., 51, 591.
Metlitski, M., Hermele, M., Senthil, T., and M. P. A. Fisher. 2008. Monopoles in $C P^{N-1}$ model via the state-operator correspondence. Phys. Rev. B, 78, 214418.

Metlitski, M. A., and Grover, T. 2011. Entanglement entropy in systems with spontaneously broken continuous symmetry. arXiv: 1112.5166 (unpublished).
Metlitski, M. A., and Sachdev, S. 2010. Quantum phase transitions of metals in two spatial dimensions. I. Ising-nematic order. Phys. Rev. B, 82, 075127.
Metlitski, M. A., Fuertes, C. A., and Sachdev, S. 2009. Entanglement entropy in the $\mathrm{O}(N)$ model. Phys. Rev. B, 80, 115122.
Miller, J. B., Radu, I. P., Zumbühl, D. Z. et al. 2007. Fractional quantum Hall effect in a quantum point contact at filling fraction 5/2. Nature Phys., 3, 561.
Milliken, F. P., Umbach, C. P., and Webb, R. A. 1996. Indications of a Luttinger liquid in the fractional quantum Hall regime. Solid State Commun., 97, 309.
Milovanović, M., and Read, N. 1996. Edge excitations of paired fractional quantum Hall states. Phys. Rev. B, 53, 13559.
Misguich, G., Jolicoeur, Th., and Girvin, S. M. 2001. Magnetization plateaus of $\mathrm{SrCu}_{2}\left(\mathrm{BO}_{3}\right)_{2}$ from a Chern-Simons theory. Phys. Rev. Lett., 87, 097203.
Moessner, R., and Sondhi, S. L. 2001a. Ising models of quantum frustration. Phys. Rev. B, 63, 224401.
Moessner, R., and Sondhi, S. L. 2001b. Resonating valence bond phase in the triangular lattice quantum dimer model. Phys. Rev. Lett., 86, 1881.
Moessner, R., Sondhi, S. L., and Chandra, P. 2000. Two-dimensional periodic frustrated Ising models in a transverse field. Phys. Rev. Lett., 84, 4457.
Moessner, R., Sondhi, S. L., and Fradkin, E. 2001. Short-ranged resonating valence bond physics, quantum dimer models, and Ising gauge theories. Phys. Rev. B, 65, 024504.
Moore, G., and Read, N. 1991. Non-abelions in the fractional quantum Hall effect. Nucl. Phys. B, 360, 362.
Moore, G., and Seiberg, N. 1989. Classical and quantum conformal field theory. Commun. Math. Phys., 123, 177.
Moore, J. E., and Balents, L. 2007. Topological invariants of time-reversal-invariant band structures. Phys. Rev. B, 75, 121306.
Moreo, A. 1987. Conformal anomaly and critical exponents of Heisenberg spin models with half-integer spin. Phys. Rev. B, 36, 8582.
Morf, R. H. 1998. Transition from quantum Hall to compressible states in the second Landau level: New light on the $v=5 / 2$ enigma. Phys. Rev. Lett., 80, 1505.
Mudry, C., and Fradkin, E. 1994. Separation of spin and charge quantum numbers in strongly correlated systems. Phys. Rev. B, 49, 5200.
Murthy, G., and Shankar, R. 2003. Hamiltonian theories of the fractional quantum Hall effect. Rev. Mod. Phys., 75, 1101.
Myers, R. C., and Singh, A. 2012. Comments on holographic entanglement entropy and RG flows. JHEP J. High Energy Phys., 2012, 122.
Nandkishore, R., and Levitov, L. 2010. Quantum anomalous Hall state in bilayer graphene. Phys. Rev. B, 82, 115124.
Nash, C., and Sen, S. 1983. Topology and Geometry for Physicists. New York, NY: Academic Press.
Nayak, C., and Wilczek, F. 1994. Non-Fermi liquid fixed point in $2+1$ dimensions. Nucl. Phys. B, 417, 359.
Nayak, C., and Wilczek, F. 1996. $2 n$ Quasihole states realize $2^{n-1}$-dimensional spinor braiding statistics in paired quantum Hall states. Nucl. Phys. B, 479, 529.
Nayak, C., Shtengel, K., Orgad, D., Fisher, M. P. A., and Girvin, S. M. 2001. Electrical current carried by neutral quasiparticles. Phys. Rev. B, 64, 235113.
Negele, J. W., and Orland, H. 1988. Quantum Many-Particle Systems. New York, NY: Addison-Wesley.

Neupert, T., Santos, L., Chamon, C., and Mudry, C. 2011. Fractional quantum Hall states at zero magnetic field. Phys. Rev. Lett., 106, 236804.
Nielsen, H. B., and Ninomiya, M. 1981. Absence of neutrinos on a lattice: (I). Proof by homotopy theory. Nucl. Phys. B, 185, 20.
Nienhuis, B. 1987. Two dimensional critical phenomena and the Coulomb gas, in Phase Transitions and Critical Phenomena, vol. 11, C. Domb, M. Green, and J. L. Lebowitz (eds.). London: Academic Press.
Nishida, Y., Santos, L., and Chamon, C. 2010. Topological superconductors as nonrelativistic limits of Jackiw-Rossi and Jackiw-Rebbi models. Phys. Rev. B, 82, 144513.

Nishioka, T., Ryu, S., and Takayanagi, T. 2009. Holographic entanglement entropy: An overview. J. Phys. A: Math. Theor, 42, 504008.
Niu, Q., Thouless, D. J., and Wu, Y.-S. 1985. Quantized Hall conductance as a topological invariant. Phys. Rev. B, 31, 3372.
Novoselov, K. S., Geim, A. K., Morozov, S. V. et al. 2004. Electric field effect in atomically thin carbon films. Science, 306, 666.
Oganesyan, V., Kivelson, S. A., and Fradkin, E. 2001. Quantum theory of a nematic Fermi fluid. Phys. Rev. B, 64, 195109.
Onsager, L. 1944. Crystal statistics. I. A two-dimensional model with an order-disorder transition. Phys. Rev., 65, 117.
Ortiz, G., and Martin, R. M. 1994. Macroscopic polarization as a geometric quantum phase: Many-body formulation. Phys. Rev. B, 49, 14202.
Oshikawa, M. 2010. Boundary conformal field theory and entanglement entropy in twodimensional quantum Lifshitz critical point. arXiv:1007.3739v1.
Pan, W., Xia, J. S., Shvarts, V. et al. 1999. Exact quantization of the even-denominator fractional quantum Hall state at $v=5 / 2$ Landau level filling factor. Phys. Rev. Lett., 83, 3530.
Pan, W., Störmer, H. L., Tsui, D. C. et al. 2003. Fractional quantum Hall effect of composite fermions. Phys. Rev. Lett., 90, 016801.
Pan, W., Xia, J. S., Störmer, H. L. et al. 2008. Experimental studies of the fractional quantum Hall effect in the first excited Landau level. Phys. Rev. B, 77, 075307.
Papanikolaou, S., Raman, K. S., and Fradkin, E. 2007a. Devil's staircases, quantum dimer models, and stripe formation in strong coupling models of quantum frustration. Phys. Rev. B, 75, 094406.
Papanikolaou, S., Luijten, E., and Fradkin, E. 2007b. Quantum criticality, lines of fixed points, and phase separation in doped two-dimensional quantum dimer models. Phys. Rev. B, 76, 134514.
Papanikolaou, S., Raman, K. S., and Fradkin, E. 2007c. Topological phases and topological entropy of two-dimensional systems with finite correlation length. Phys. Rev. B, 76, 224421.

Pasquier, V., and Haldane, F. D. M. 1998. A dipole interpretation of the $v=1 / 2$ state. Nucl. Phys. B, 516, 719.
Perelomov, A. 1986. Generalized Coherent States and Their Applications. Berlin: Springer-Verlag.
Peskin, M. E. 1980. Critical point behavior of the Wilson loop. Phys. Lett. B, 94, 161.
Pines, D., and Nozières, P. 1966. The Theory of Quantum Liquids. New York, NY: Benjamin.
Polchinski, J. 1984. Renormalization and effective Lagrangians. Nucl. Phys. B, 231, 269.
Polchinski, J. 1993. Effective field theory and the Fermi surface, in Recent Directions in Particle Theory: From Superstrings and Black Holes to the Standard Model
(TASI-92), J. Harvey and J. Polchinski (eds.). Singapore: World Scientific, for the Theoretical Advanced Study Institute in High Elementary Particle Physics, Boulder, CO.
Polchinski, J. 1994. Low-energy dynamics of the spinon-gauge system. Nucl. Phys. B, 422, 617.
Polchinski, J. 1998. String Theory. Cambridge: Cambridge University Press.
Pollmann, F., and Moore, J. E. 2010. Entanglement spectra of critical and near-critical systems in one dimension. New J. Phys., 12, 025006.
Pollmann, F., Mukerjee, S., Turner, A. M., and Moore, J. E. 2009. Theory of finiteentanglement scaling at one-dimensional quantum critical points. Phys. Rev. Lett., 102, 255701.
Pollmann, F., Turner, A. M., Berg, E., and Oshikawa, M. 2010. Entanglement spectrum of a topological phase in one dimension. Phys. Rev. B, 81, 064439.
Polyakov, A. M. 1975. Interaction of Goldstone particles in two dimensions. Applications to ferromagnets and massive Yang-Mills fields. Phys. Lett. B, 59, 79.
Polyakov, A. M. 1977. Quark confinement and topology of gauge theories. Nucl. Phys. B, 120, 429.
Polyakov, A. M. 1981. Quantum geometry of bosonic strings. Phys. Lett. B, 103, 211.
Polyakov, A. M. 1987. Gauge Fields and Strings. London: Harwood Academic Publishers.
Polyakov, A. M. 1988. Fermi-Bose transmutations induced by gauge fields. Mod. Phys. Lett. A, 3, 325.
Polyakov, A. M., and Wiegmann, P. B. 1983. Theory of non-Abelian Goldstone bosons in 2 dimensions. Phys. Lett. B, 131, 121.
Polyakov, A. M., and Wiegmann, P. B. 1984. Goldstone fields in two dimensions with multivalued actions. Phys. Lett. B, 141, 223.
Prange, R., and Girvin, S. M. 1990. The Quantum Hall Effect, 2nd edn. Berlin: SpringerVerlag.
Preskill, J. 2004. Topological quantum computation, in Lecture Notes for Physics 219: Quantum Computation, Chapter 9; Caltech (unpublished).
Preskill, J., and Krauss, P. 1990. Local discrete symmetry and quantum-mechanical hair. Nucl. Phys. B, 341, 50.
Privman, V. 1988. Universal size dependence of the free energy of finite systems near criticality. Phys. Rev. B, 38, 9261.
Privman, V., and Fisher, M. E. 1984. Universal critical amplitudes in finite-size scaling. Phys. Rev. B, 30, 322.
Pruisken, A. M. M. 1984. On localization in the theory of the quantized Hall effect: A two-dimensional realization of the $\theta$-vacuum. Nucl. Phys. B, 235, 277.
Qi, X. L. 2011. Generic wave-function description of fractional quantum anomalous Hall states and fractional topological insulators. Phys. Rev. Lett., 107, 126803.
Qi, X. L., and Zhang, S. C. 2011. Topological insulators and superconductors. Rev. Mod. Phys., 83, 1057.
Qi, X. L., Wu, Y. S., and Zhang, S. C. 2006a. General theorem relating the bulk topological number to edge states in two-dimensional insulators. Phys. Rev. B, 74, 045125.
Qi, X. L., Wu, Y. S., and Zhang, S. C. 2006b. Topological quantization of the spin Hall effect in two-dimensional paramagnetic semiconductors. Phys. Rev. B, 74, 085308.
Qi, X. L., Hughes, T. L., and Zhang, S. C. 2008. Topological field theory of time-reversal invariant insulators. Phys. Rev. B, 78, 195424.
Radu, I., Miller, J. B., Marcus, C. M. et al. 2008. Quasi-particle properties from tunneling in the $v=5 / 2$ fractional quantum Hall state. Science, 320, 899.

Raghu, S., and Kivelson, S. A. 2011. Superconductivity from repulsive interactions in the two-dimensional electron gas. Phys. Rev. B, 83, 094518.
Raghu, S., Qi, X.-L., Honerkamp, C., and Zhang, S. C. 2008. Topological Mott insulators. Phys. Rev. Lett., 100, 156401.
Rajaraman, R. 1985. Solitons and Instantons. Amsterdam: North-Holland.
Randjbar-Daemi, S., Salam, A., and Strathdee, J. 1990. Chern-Simons superconductivity at finite temperature. Nucl. Phys. B, 340, 403.
Read, N. 1989. Order parameter and Ginzburg-Landau theory for the fractional quantum Hall effect. Phys. Rev. Lett., 62, 86.
Read, N. 1998. Lowest-Landau-level theory of the quantum Hall effect: The Fermi-liquidlike state of bosons at filling factor one. Phys. Rev. B, 58, 16262.
Read, N. 2009. Non-abelian adiabatic statistics and Hall viscosity in quantum Hall states and $p_{x}+i p_{y}$ paired superfluids. Phys. Rev. B, 79, 045308.
Read, N., and Green, D. 2000. Paired states of fermions in two dimensions with breaking of parity and time-reversal symmetries and the fractional quantum Hall effect. Phys. Rev. B, 61, 10267.
Read, N., and Newns, D. M. 1983. On the solution of the Coqblin-Schreiffer Hamiltonian by the large- $N$ expansion technique. J. Phys. C: Solid State Phys., 16, 3273.
Read, N., and Rezayi, E. 1999. Beyond paired quantum Hall states: Parafermions and incompressible states in the first excited Landau level. Phys. Rev. B, 59, 8084.
Read, N., and Sachdev, S. 1989. Some features of the phase diagram of the square lattice $\mathrm{SU}(N)$ antiferromagnet. Nucl. Phys. B, 316, 609.
Read, N., and Sachdev, S. 1991. Large- $N$ expansion for frustrated quantum antiferromagnets. Phys. Rev. Lett., 66, 1773.
Redlich, A. N. 1984. Parity violation and gauge noninvariance of the effective gauge field action in three dimensions. Phys. Rev. D, 29, 2366.
Refael, G., and Moore, J. E. 2004. Entanglement entropy of random quantum critical points in one dimension. Phys. Rev. Lett., 93, 260602.
Refael, G., and Moore, J. E. 2009. Criticality and entanglement in random quantum systems. J. Phys. A: Math. Theor., 42, 504010.
Rezayi, E. H., and Haldane, F. D. M. 1988. Off-diagonal long-range order in fractional quantum-Hall-effect states. Phys. Rev. Lett., 61, 1985.
Rezayi, E. H., and Haldane, F. D. M. 2000. Incompressible paired Hall state, stripe order, and the composite fermion liquid phase in half-filled Landau levels. Phys. Rev. Lett., 84, 4685.
Rieger, H., and Kawashima, N. 1999. Application of a continuous time cluster algorithm to the two-dimensional random quantum Ising ferromagnet. Eur. Phys. J. B - Condens. Matter Complex Systems, 9, 233.
Roddaro, S., Pellegrini, V., Beltram, F., Biasiol, G., and Sorba, L. 2004. Interedge strong-to-weak scattering evolution at a constriction in the fractional quantum Hall regime. Phys. Rev. Lett., 93, 046801.
Rokhsar, D., and Kivelson, S. A. 1988. Superconductivity and the quantum hard-core dimer gas. Phys. Rev. Lett., 61, 2376.
Roy, R. 2009. $Z_{2}$ classification of quantum spin Hall systems: An approach using timereversal invariance. Phys. Rev. B, 79, 195321.
Roy, R. 2010. Topological Majorana and Dirac zero modes in superconducting vortex cores. Phys. Rev. Lett., 105, 186401.
Ruckenstein, A. E., Hirschfeld, P. J., and Appel, J. 1987. Mean-field theory of high- $T_{\mathrm{c}}$ superconductivity: The superexchange mechanism. Phys. Rev. B, 36, 857.

Ryu, S., and Takayanagi, T. 2006a. Aspects of holographic entanglement entropy. JHEP J. High Energy Phys., 08, 045.
Ryu, S., and Takayanagi, T. 2006b. Holographic derivation of entanglement entropy from AdS/CFT. Phys. Rev. Lett., 96, 181602.
Ryu, S., Schnyder, A. P., Furusaki, A., and Ludwig, A. W. W. 2010. Topological insulators and superconductors: Tenfold way and dimensional hierarchy. New J. Phys., 12, 065010.

Sachdev, S. 1999. Quantum Phase Transitions. Cambridge: Cambridge University Press.
Sachdev, S., and Read, N. 1991. Large $N$ expansion for frustrated and doped quantum antiferromagnets. Int. J. Mod. Phys. B, 5, 219.
Saminadayar, L., Glattli, D. C., Jin, Y., and Etienne, B. 1997. Observation of the $e / 3$ fractionally charged Laughlin quasiparticle. Phys. Rev. Lett., 79, 2526.
Sandvik, A. W. 2007. Evidence for deconfined quantum criticality in a two-dimensional Heisenberg model with four-spin interactions. Phys. Rev. Lett., 98, 227202.
Sandvik, A. W. 2010. Continuous quantum phase transition between an antiferromagnet and a valence-bond solid in two dimensions: Evidence for logarithmic corrections to scaling. Phys. Rev. Lett., 104, 177201.
Santos, L., Neupert, T., Ryu, S., Chamon, C., and Mudry, C. 2011. Time-reversal symmetric hierarchy of fractional incompressible liquids. Phys. Rev. B, 84, 165138.
Schnyder, A. P., Ryu, S., Furusaki, A., and Ludwig, A. W. W. 2008. Classification of topological insulators and superconductors in three spatial dimensions. Phys. Rev. B, 78, 195125.

Schollwöck, U. 2005. The density-matrix renormalization group. Rev. Mod. Phys., 77, 259.
Schonfeld, J. F. 1981. A mass term for three-dimensional gauge fields. Nucl. Phys. B, 185, 157.
Schrieffer, J. R. 1964. Theory of Superconductivity. New York, NY: Addison-Wesley.
Schulman, L. S. 1981. Techniques and Applications of Path Integration. New York, NY: Wiley \& Sons.
Schultz, T. D., Mattis., D. C., and Lieb, E. H. 1964. Two-dimensional Ising model as a soluble problem of many fermions. Rev. Mod. Phys., 36, 856.
Semenoff, G. W. 1984. Condensed-matter simulation of a three-dimensional anomaly. Phys. Rev. Lett., 53, 2449.
Semenoff, G. W. 1988. Canonical quantum field theory with exotic statistics. Phys. Rev. Lett., 61, 517.
Semenoff, G. W., Sodano, P., and Wu, Y. S. 1989. Renormalization of the statistics parameter in three-dimensional electrodynamics. Phys. Rev. Lett., 62, 715.
Senthil, T., Vishwanath, A., Balents, L., Sachdev, S., and M. P. A. Fisher. 2004a. Deconfined quantum critical points. Science, 303, 1490.
Senthil, T., Balents, L., Sachdev, S., Vishwanath, A., and M. P. A. Fisher. 2004b. Quantum criticality beyond the Landau-Ginzburg-Wilson paradigm. Phys. Rev. B, 70, 144407.
Shankar, R. 1994. Renormalization-group approach to interacting fermions. Rev. Mod. Phys., 66, 129.
Sheng, D. N., Gu, Z. C., Sun, K., and Sheng, L. 2011. Fractional quantum Hall effect in the absence of Landau levels. Nature Commun., 2, 389.
Shenker, S. H., and Tobochnik, J. 1980. Monte Carlo renormalization group analysis of the classical Heisenberg model in two dimensions. Phys. Rev. B, 22, 4462.
Shirane, G., Endoh, Y., Birgeneau, R., and Kastner, M. 1987. Two-dimensional antiferromagnetic quantum spin-fluid state in $\mathrm{La}_{2} \mathrm{CuO}_{4}$. Phys. Rev. Lett., 59, 1613.
Shraiman, B. I., and Siggia, E. D. 1989. Spiral phase of a doped quantum antiferromagnet. Phys. Rev. Lett., 62, 1564.

Simon, B. 1983. Holonomy, the quantum adiabatic theorem, and Berry's phase. Phys. Rev. Lett., 51, 2167.
Singh, R. R. P., and Huse, D. A. 1992. Three-sublattice order in triangular- and kagomélattice spin-half antiferromagnets. Phys. Rev. Lett., 68, 1766.
Sondhi, S. L., Karlhede, A., Kivelson, S. A., and Rezayi, E. H. 1993. Skyrmions and the crossover from the integer to fractional quantum Hall effect at small Zeeman energies. Phys. Rev. B, 47, 16419.
Sørensen, E. S., Chang, M.-S., Laflorencie, N., and Affleck, I. 2007a. Impurity entanglement entropy and the Kondo screening cloud. JSTAT J. Statist. Mech.: Theor. Exp., 07, L01001.
Sørensen, E. S., Chang, M.-S., Laflorencie, N., and Affleck, I. 2007b. Quantum impurity entanglement. JSTAT J. Statist. Mech.: Theor. Exp., 07, P08003.
Spielman, I. B., Eisenstein, J. P., Pfeiffer, L. N., and West, K. W. 2000. Resonantly enhanced tunneling in a double layer quantum Hall ferromagnet. Phys. Rev. Lett., 84, 5808.
Srednicki, M. 1993. Entropy and area. Phys. Rev. Lett., 71, 666.
Stefano, S., Pellegrini, V., and Beltram, F. 2004. Quasi-particle tunneling at a constriction in a fractional quantum Hall state. Solid State Commun., 131, 565.
Stell, G. 1964. Cluster expansions for classical systems in equilibrium, in The Equilibrium Theory of Classical Fluids, H. L. Frisch and J. L. Lebowitz (eds.). New York, NY: W. A. Benjamin Inc, pp. 171-267.

Stéphan, J. M., Furukawa, S., Misguich, G., and Pasquier, V. 2009. Shannon and entanglement entropies of one- and two-dimensional critical wave functions. Phys. Rev. B, 80, 184421.

Stéphan, J. M., Misguich, G., and Pasquier, V. 2010. Rényi entropy of a line in twodimensional Ising models. Phys. Rev. B, 82, 125455.
Stéphan, J. M., Misguich, G., and Pasquier, V. 2011. Phase transition in the Rényi-Shannon entropy of Luttinger liquids. Phys. Rev. B, 84, 195128.
Stern, A., and Halperin, B. I. 2006. Proposed experiments to probe the non-Abelian $v=$ 5/2 quantum Hall state. Phys. Rev. Lett., 96, 016802.
Stone, M. 1986. Born-Oppenheimer approximation and the origin of Wess-Zumino terms: Some quantum-mechanical examples. Phys. Rev. D, 33, 1191.
Stone, M. 1991. Vertex operators in the quantum Hall effect. Int. J. Mod. Phys. B, 5, 509.
Su, W. P., and Schrieffer, J. R. 1981. Fractionally charged excitations in charge-densitywave systems with commensurability 3. Phys. Rev. Lett., 46, 738.
Su, W. P., Schrieffer, J. R., and Heeger, A. J. 1979. Solitons in polyacetylene. Phys. Rev. Lett., 42, 1698.
Sun, K., and Fradkin, E. 2008. Time-reversal symmetry breaking and spontaneous anomalous Hall effect in Fermi fluids. Phys. Rev. B, 78, 245122.
Sun, K., Yao, H., Fradkin, E., and Kivelson, S. A. 2009. Topological insulators and nematic phases from spontaneous symmetry breaking in 2D Fermi systems with a quadratic band crossing. Phys. Rev. Lett., 103, 046811.
Susskind, L. 1977. Lattice fermions. Phys. Rev. D, 16, 3031.
Susskind, L. 1995. The world as a hologram. J. Math. Phys., 36, 6377.
Susskind, L. 2008. The Black Hole War. New York, NY: Back Bay Books, Little Brown \& Co.
Susskind, L., and Witten, E. 1998. The holographic bound in anti-de Sitter space. arXiv:hep-th/9805114 (unpublished).
Sutherland, B. 1988. Systems with resonating-valence-bond ground states: Correlations and excitations. Phys. Rev. B, 37, 3786.
't Hooft, G. 1978. On the phase transition towards permanent quark confinement. Nucl. Phys. B, 138, 1.
't Hooft, G. 1979. A property of electric and magnetic flux in non-Abelian gauge theories. Nucl. Phys. B, 153, 141.
't Hooft, G. 1993. Dimensional reduction in quantum gravity. arXiv:gr-gc/9310026v2 (unpublished).
Tang, E., Mei, J. W., and Wen, X. G. 2011a. High-temperature fractional quantum Hall states. Phys. Rev. Lett., 106, 236802.
Tang, Y., Sandvik, A. W., and Henley, C. L. 2011b. Properties of resonating-valence-bond spin liquids and critical dimer models. Phys. Rev. B, 84, 174427.
Thouless, D. J. 1983. Quantization of particle transport. Phys. Rev. B, 27, 6083.
Thouless, D. J., Kohmoto, M., Nightingale, M. P., and den Nijs, M. P. M. 1982. Quantized Hall conductance in a two-dimensional periodic potential. Phys. Rev. Lett., 49, 405.

Tomonaga, S. 1950. Remarks on Bloch's method of sound waves applied to many-fermion problems. Prog. Theor. Phys., 5, 544.
Trebst, S., Werner, P., Troyer, M., Shtengel, K., and Nayak, C. 2007. Breakdown of a topological phase: Quantum phase transition in a loop gas model with tension. Phys. Rev. Lett., 98, 070602.
Trugman, S. A. 1983. Localization, percolation, and the quantum Hall effect. Phys. Rev. B, 27, 7539.
Trugman, S. A., and Kivelson, S. 1985. Exact results for the fractional quantum Hall effect with general interactions. Phys. Rev. B, 31, 5280.
Tsui, D. C., Stormer, H. L., and Gossard, A. C. 1982. Two-dimensional magnetotransport in the extreme quantum limit. Phys. Rev. Lett., 48, 1559.
Tupitsyn, I. S., Kitaev, A., Prokof'ev, N. V., and Stamp, P. C. E. 2010. Topological multicritical point in the phase diagram of the toric code model and three-dimensional lattice gauge Higgs model. Phys. Rev. B, 82, 085114.
Vafek, O. 2010. Interacting fermions on the honeycomb bilayer: From weak to strong coupling. Phys. Rev. B, 82, 205106.
Vafek, O., and Yang, K. 2010. Many-body instability of Coulomb interacting bilayer graphene: Renormalization group approach. Phys. Rev. B, 81, 041401(R).
Vakaryuk, V., and Leggett, A. J. 2009. Spin polarization of half-quantum vortex in systems with equal spin pairing. Phys. Rev. Lett., 103, 057003.
Varney, C. N., Sun, K., Rigol, M., and Galitski, V. 2010. Interaction effects and quantum phase transitions in topological insulators. Phys. Rev. $B, \mathbf{8 2}, 115125$.
Verlinde, E. 1988. Fusion rules and modular transformations in 2D conformal field theory. Nucl. Phys. B, 300, 360.
Verstraete, F., Wolf, M. M., Perez-García, D., and Cirac, J. I. 2006. Criticality, the area law, and the computational power of PEPS. Phys. Rev. Lett., 96, 220601.
Vishwanath, A., Balents, L., and Senthil, T. 2004. Quantum criticality and deconfinement in phase transitions between valence bond solids. Phys. Rev. B, 69, 224416.

Vollhardt, D., and Wölfle, P. 1990. The Superfluid Phases of Helium 3. London: Taylor \& Francis.
Volovik, G. E. 1988. An analog of the quantum Hall effect in a superfluid ${ }^{3} \mathrm{He}$ film. Sov. Phys. JETP, 67, 1804.
von Klitzing, K., Dorda, G., and Pepper, M. 1980. New method for high-accuracy determination of the fine-structure constant based on quantized Hall resistance. Phys. Rev. Lett., 45, 494.

Wang, L., Gu, Z. C., Wen, X. G., and Verstraete, F. 2011. Possible spin liquid state in the spin $1 / 2 J_{1}-J_{2}$ antiferromagnetic Heisenberg model on square lattice: A tensor product state approach. arXiv:1112.3331.
Wegner, F. 1979. The mobility edge problem: Continuous symmetry and a conjecture. Z. Phys. B Condens. Matter, 35, 207.

Wegner, F. J. 1971. Duality in generalized Ising models and phase transitions without local order parameters. J. Math. Phys., 12, 2259.
Wen, X. G. 1989. Vacuum degeneracy of chiral spin states in compactified space. Phys. Rev. B, 40, 7387.
Wen, X. G. 1990a. Chiral Luttinger liquid and the edge excitations in the fractional quantum Hall states. Phys. Rev. B, 41, 12838.
Wen, X. G. 1990b. Electrodynamical properties of gapless edge excitations in the fractional quantum Hall states. Phys. Rev. Lett., 64, 2206.
Wen, X. G. 1990c. Topological orders in rigid states. Int. J. Mod. Phys. B, 4, 239.
Wen, X. G. 1991a. Edge excitations in the fractional quantum Hall states at general filling fractions. Mod. Phys. Lett. B, 5, 39.
Wen, X. G. 1991b. Gapless boundary excitations in the quantum Hall states and in the chiral spin states. Phys. Rev. B, 43, 11025.
Wen, X. G. 1991c. Mean-field theory of spin-liquid states with finite energy gap and topological orders. Phys. Rev. B, 44, 2664.
Wen, X. G. 1995. Topological orders and edge excitations in fractional quantum Hall states. Adv. Phys., 44, 405.
Wen, X. G. 1999. Projective construction of non-Abelian quantum Hall liquids. Phys. Rev. B, 60, 8827.
Wen, X.-G. 2002. Quantum orders and symmetric spin liquids. Phys. Rev. B, 65, 165113.
Wen, X. G., and Niu, Q. 1990. Ground-state degeneracy of the fractional quantum Hall states in the presence of a random potential and on high-genus Riemann surfaces. Phys. Rev. B, 41, 9377.
Wen, X. G., and Zee, A. 1988. Spin waves and topological terms in the mean-field theory of two-dimensional ferromagnets and antiferromagnets. Phys. Rev. Lett., 61(1025).
Wen, X. G., and Zee, A. 1989. Winding number, family index theorem, and electron hopping in a magnetic field. Nucl. Phys. B, 316, 641.
Wen, X. G., and Zee, A. 1990. Compressibility and superfluidity in the fractional-statistics liquid. Phys. Rev. B, 41, 240.
Wen, X.-G., and Zee, A. 1992. Classification of Abelian quantum Hall states and matrix formulation of topological fluids. Phys. Rev. B, 46, 2290.
Wen, X. G., Wilczek, F., and Zee, A. 1989. Chiral spin states and superconductivity. Phys. Rev. B, 39, 11413.
Wen, X. G., Dagotto, E., and Fradkin, E. 1990. Anyons on a torus. Phys. Rev. B, 42, 6110.
Wesolowski, D., Hosotani, Y., and Ho, C. L. 1994. Multiple Chern-Simons fields on a torus. Int. J. Mod. Phys., A9, 969.
White, S. R. 1992. Density matrix formulation for quantum renormalization groups. Phys. Rev. Lett., 69, 2863.
Wiegmann, P. B. 1988. Superconductivity in strongly correlated electronic systems and confinement versus deconfinement phenomenon. Phys. Rev. Lett., 60, 821.
Wiegmann, P. B. 1989. Multivalued functionals and geometrical approach for quantization of relativistic particles and strings. Nucl. Phys. B, 323, 311.
Wilczek, F. 1982. Magnetic flux, angular momentum, and statistics. Phys. Rev. Lett., 48, 1144.

Wilczek, F., and Zee, A. 1983. Linking numbers, spin, and statistics of solitons. Phys. Rev. Lett., 51, 2250.
Willett, R., Eisenstein, J. P., Störmer, H. L. et al. 1987. Observation of an even-denominator quantum number in the fractional quantum Hall effect. Phys. Rev. Lett., 59, 1776.
Willett, R. L., 1. N. Pfeiffer, and West, K. W. 2010. Alternation and interchange of $e / 4$ and $e / 2$ period interference oscillations consistent with filling factor 5/2 non-Abelian quasiparticles. Phys. Rev. B, 82, 205301.
Williams, J. R., Bestwick, A. J., Gallagher, P. et al. 2012. Signatures of Majorana fermions in hybrid superconductor-topological insulator devices. Phys. Rev. Lett., 109, 056803.
Wilson, K. G. 1969. Non-Lagrangian models of current algebra. Phys. Rev., 179, 1499.
Wilson, K. G. 1973. Quantum field theory models in less than 4 dimensions. Phys. Rev. D, 7, 2911.
Wilson, K. G. 1974. Confinement of quarks. Phys. Rev. D, 10, 2445.
Wilson, K. G. 1975. The renormalization group: Critical phenomena and the Kondo problem. Rev. Mod. Phys., 47, 773.
Wilson, K. G. 1983. The renormalization group and critical phenomena. Rev. Mod. Phys., 55, 583.
Wilson, K. G., and Kogut, J. B. 1974. The renormalization group and the $\epsilon$ expansion. Physics Reports C, 12, 75.
Witten, E. 1979. Dyons of charge $e \theta / 2 \pi$. Phys. Lett. B, 86, 283.
Witten, E. 1983. Current algebra, baryons, and quark confinement. Nucl. Phys. B, 223, 422.
Witten, E. 1984. Non-Abelian bosonization in two dimensions. Commun. Math. Phys., 92, 455.
Witten, E. 1989. Quantum field theory and the Jones polynomial. Commun. Math. Phys., 121, 351.
Witten, E. 1992. On holomorphic factorization of WZW and coset models. Commun. Math. Phys., 144, 189.
Witten, E. 1998. Anti de Sitter space and holography. Adv. Theor. Math. Phys., 2, 253.
Wolf, M. M. 2006. Violation of the entropic area law for fermions. Phys. Rev. Lett., 96, 010404.

Wu, C., Sun, K., Fradkin, E., and Zhang, S. C. 2007. Fermi liquid instabilities in the spin channel. Phys. Rev. B, 75, 115103.
Wu, T. T., and Yang, C. N. 1975. Concept of nonintegrable phase factors and global formulation of gauge fields. Phys. Rev. D, 12, 3845.
Wu, T. T., and Yang, C. N. 1976. Dirac monopole without strings: Monopole harmonics. Nucl. Phys. B, 107, 365.
Wu, Y. S., and Zee, A. 1984. Comments on the Hopf Lagrangian and fractional statistics of solitons. Phys. Lett. B, 147, 325.
Xia, J. S., Pan, W., Vicente, C. L. et al. 2004. Electron correlation in the second Landau level: A competition between many nearly degenerate quantum phases. Phys. Rev. Lett., 93, 176809.
Yakovenko, V. M. 1990. Chern-Simons terms and $n$ field in Haldane's model for the quantum Hall effect without Landau levels. Phys. Rev. Lett., $65(\mathrm{Jul}), 251$.
Yang, C. N., and Yang, C. P. 1969. Thermodynamics of a one-dimensional system of bosons with repulsive delta-function interaction. J. Math. Phys., 10, 1115.
Yang, K., Warman, L. K., and Girvin, S. M. 1993. Possible spin-liquid states on the triangular and kagomé lattices. Phys. Rev. Lett., 70, 2641.
Yang, K., Moon, K., Zheng, L. et al. 1994. Quantum ferromagnetism and phase transitions in double-layer quantum Hall systems. Phys. Rev. Lett., 72, 732.

Youngblood, R., Axe, J., and McCoy, B. M. 1980. Correlations in ice-rule ferroelectrics. Phys. Rev. B, 21, 5212.
Zak, J. 1964. Magnetic translation group. Phys. Rev., 134, A1602.
Zamolodchikov, A. B. 1986. "Irreversibility" of the flux of the renormalization group in a 2D field theory. Pis'ma Zh. Éksp. Teor. Fiz., 43, 565; JETP Lett. 43, 730 (1986).
Zamolodchikov, A. B., and Zamolodchikov, A. B. 1979. Factorized $S$-matrices in two dimensions as the exact solutions of certain relativistic quantum field theory models. Ann. Phys., 120, 253.
Zhang, H., Liu, C. X., Qi, X. L. et al. 2009. Topological insulators in $\mathrm{Bi}_{2} \mathrm{Se}_{3}, \mathrm{Bi}_{2} \mathrm{Te}_{3}$ and $\mathrm{Sb}_{2} \mathrm{Te}_{3}$ with a single Dirac cone on the surface. Nature Phys., 5, 438.
Zhang, S. C., Hansson, T. H., and Kivelson, S. 1989. Effective-field-theory model for the fractional quantum Hall effect. Phys. Rev. Lett., 62, 82.
Zheng, D., Zhang, G. M., and Wu, C. 2011. Particle-hole symmetry and interaction effects in the Kane-Mele-Hubbard model. Phys. Rev. B, 84, 205121.
Ziman, T., and Schulz, H. J. 1987. Are antiferromagnetic spin chains representations of the higher Wess-Zumino models? Phys. Rev. Lett., 59, 140.
Zinn-Justin, J. 2002. Quantum Field Theory and Critical Phenomena, 4th edn. Oxford: Oxford University Press.
Zozulya, O. S., Haque, M., and Regnault, N. 2009. Entanglement signatures of quantum Hall phase transitions. Phys. Rev. B, 79, 045409.
Zuber, J. B., and Itzykson, C. 1977. Quantum field theory and the two-dimensional Ising model. Phys. Rev. D, 15, 2875.

## Index

$(\mathrm{SO}(3) \times \mathrm{SO}(3)) / \mathrm{SO}(3), 645$
2D
XY model, 83
superfluid transition, 83
Coulomb gas, 83
electron gas, 445
high magnetic field, 445
Ising model, 112, 390
Majorana fermions, 112
Onsager solution, 118
Jordan-Wigner transformation, 412
parity, 394
quantum Heisenberg antiferromagnet, 412
quantum Ising model, 300
quantum magnets, 405
3D
classical Ising model, 300
Coulomb gas, 338
CFT/gravity duality, 780
$C P^{1}$ model, 222, 262
$\mathrm{SU}(2)$ gauge invariance
spin one-half Heisenberg model, 279
SU(2) symmetry, 11
$\mathrm{SU}(2)_{1}, 228$
$\mathrm{SU}(2)_{k}, 160$
SU( $N$ ) Heisenberg antiferromagnet, 267
$\mathrm{SU}(N)_{k}, 228$
$\operatorname{Sp}(N), 268$
$T$ duality, 157, 347, 658
$\mathrm{U}(1)$ connection, 465
U(1) symmetry, 12
XY model, 103
2D, 83
spin one-half, 103, 105, 118
1/ $N$ expansion, 330, 377
$1 / S$ expansion, 227
$1 / n_{\mathrm{c}}$ expansion, 268
$\mathbb{Z}_{2}$ 3D topological insulators, 701
surface anomalous Hall effect, 726

Weyl edge fermions, 722
$\mathbb{Z}_{2}$ gauge theory, 298
't Hooft loop, 299
fractionalization, 315
topological phase and deconfinement, 313
confinement, 301
deconfined phase, 305
degeneracy on a torus, 312
topological phase, 314
duality, 300
electric charge operator, 299
gauge-invariant open string, 315
magnetic charge operator, 299
magnetic condensate, 304
string tension, 303
$\mathbb{Z}_{2}$ topological fluid, 292, 313
$\mathbb{Z}_{2}$ topological insulator, 697
chiral surface states, 705
$\mathbb{Z}_{2}$ topological invariant, 698
$\mathbb{Z}_{N}$ model, 391
$\pi_{1}\left(S_{1}\right), 207$
$\pi_{2}(G), 230$
$\pi_{2}\left(S_{2}\right), 207,220,593,684$
$\pi_{3}(G), 381$
$\pi_{3}(\mathrm{SU}(N)), 230$
$\pi_{3}\left(S_{2}\right), 220$
$\pi_{4}\left(S_{4}\right), 727$
$\theta$ angle, 727
$d$-wave superconductors, 274
$d_{x^{2}-y^{2}}, 25$
$f$-sum rule, 453, 526
$p_{x}+i p_{y}$ superconductor, 25,578
s-wave superconductor, 25
$t-J$ model, 17
abelian Berry connection, 671
abelian bosonization, 89, 126, 156
abelian Higgs model, 321, 561
adiabatic approximation, 457, 535
adiabatic insertion, 489, 493
Affleck-Ludwig entropy, 659, 769
Affleck-Marston mean field theory, 263
Aharonov-Bohm effect, 392, 438, 493, 497
Aharonov-Bohm phase, 497, 511, 533, 559
Ampère's law, 385
amplitude fluctuations, 371, 377
staggered, 372
unstaggered, 372
anomalous dimension, 171, 175, 237
anomalous spin, 409
antiferromagnetism, 25
anyon, $376,388,392,414$
abelian, 388, 495, 535, 546
algebra, 411
fermions and Chern-Simons representation, 398
field theory, 393
gas, 414
finite density, 405
low-energy spectrum, 429
mean-field theory, 414
Hamiltonian, 401
hard-core bosons and Chern-Simons
representation, 398
non-abelian, 569, 580, 583, 598, 749
on a torus, 401
second-quantized Hamiltonian, 406
superconductivity, 376,414
superfluidity, 512
approximation, 29
$1 / N$ expansion, 29
conserving, 30
Hartree-Fock, 29, 48
mean-field, 30, 48
random-phase (RPA), 29
saddle-point (SPA), 423
variational wave function, 29
area law, 304
asymptotic freedom, 168, 230
average-field approximation, 398
averaged Hall conductance, 462
axion field, 727
band crossings, 476
band insulator, 673
Baskaran-Zou-Anderson state, 272
BCS (Bardeen-Cooper-Schrieffer), 25, 39, 589
Bekenstein-Hawking entropy, 763, 784
Bernal stacking, 739
Berry connection, 198, 428, 671, 732
Berry phase, 198, 340, 364, 462, 495, 530, 535
beta function
Gross-Neveu model, 709
interacting quadratic band-crossing model, 742
Kosterlitz RG, 87
non-linear sigma model, 213
one-loop, 82
Ricci curvature, 230

WZW model, 231
Bethe ansatz, 89, 91
basis functions, 92
complex roots, 98
equations, 95
holes, 96
real roots, 96
wave function, 95
BF Lagrangian, 538, 752
bilayer graphene, 739
bipartite lattice, 267
Bloch's law, 202
block spin transformation, 64
Bogoliubov transformation, 124, 169
Bogoliubov-de Gennes equation, 590
Born-Oppenheimer approximation, 457
boson commutation relations, 412
bosonization, 126, 390
abelian, 126, 156
non-abelian, 228
operator identifications, 159
boundary conditions, 459
boundary conformal field theory, 653, 772
boundary sine-Gordon, 657
braid, 387, 393, 406, 534, 564
braid group, 393, 397, 564
non-abelian representation, 569
braid matrix, 583
branch cut, 410
Bratteli diagram, 602
Brillouin zone, 18
magnetic, 441
Brillouin-Wigner perturbation theory, 16, 476
Callan-Harvey effect, 718, 726
Callan-Symanzik equation, 73
canonical Bose field, 390
canonical Dirac-Fermi field, 390
canonical quantization, 395
Cantor set, 442
Cartan subalgebra, 192
Casimir energy, 237
Cauchy-Riemann equation
lattice version, 410
causality, 389
CDW order parameter, 24
center-of-mass coordinates, 470
center-of-mass wave function, 468
central charge
energy-density scaling, 237
specific heat, 238
charge conservation, 454
charge-density wave, 24
charged spinless fermions, 481
Chern insulator, 682
Chern number, 428, 461, 475, 593, 672, 732
Chern-Simons term, 196, 223, 456, 732

Chern-Simons theory, 376, 379, 393, 415, 480, 499, 500, 786
anyon commutation relations, 411
anyon gauge, 408
bosons, 503
braid group, 397
canonical commutators, 395
CFT correspondence, 626
Chern-Simons term, 393
compactified boson, 630
conformal field theory, 564
constraint, 394, 408
Coulomb gauge, 408
coupling constant, 376, 379, 411
doubled, 560, 786
gauge field, 412, 513
gauge invariance, 408
gauge theory, 386
Gauss law, 395
global degrees of freedom, 400
holonomies, 541
Jones polynomial, 585
lattice action, 408
level, 379, 583
mass, 376
modular $\mathcal{S}$-matrix, 572
non-abelian, 583, 633
non-integrable phases, 400
periodicity, 398, 513
quantized coupling constant, 382
quantum Hall effects, 394
raising the level, 643
surgeries, 789
topological field theory, 396
topological quantum computation, 398
torus, 540
vacuum degeneracy, 540
Wilson loop expectation values, 572
chiral, 108
basis, 108
boson, 396, 618
boson propagator, 84
decomposition, 135
operator, 364
order parameter, 138
spin liquids, 445
spin state, $253,359,375,439$
chiral spin liquid, 379
effective action, 377
energy, 369
mean-field theory, 366
symmetry, 108, 111, 453
transformation, 136
chiral anomaly, 160, 712
chirality, 365
classical interfaces, 332
classical potential energy, 484
clock model, 391
parafermions, 391
clockwise exchange process, 393
cocycle, 435
coherent states, 296
coherent-state representation, 194 spin, 194
columnar state, 276, 329, 370
columnar order, 288
order parameter, 346
tilted states, 330
commutation relations
statistical gauge field, 406
compact electrodynamics, 319,339
three dimensions, 319
compactification radius, $82,157,344,567,770$
complex coordinates
Landau problem, 433
components, 466
composite fermions, 520
composite operator, 392
compressible state, 427
compressible system, 376, 423
confinement, 278, 380
confinement of monopoles, 381
confining theory, 325
conformal
anomaly, 234, 237
field theory, 228, 231, 564, 765
invariance, 75
spin, 234
conformal field theory (CFT), 228
conformal blocks, 570
coset, 640
modular $\mathcal{S}$-matrix, 571
rational, 239
Verlinde algebra, 570
connection, 428
constraint, 407
Cooper pair, 25
coordinate transformation, 236
correlation function, 290, 417, 449
current, 377, 452
dimer-density, 290
height-height, 333
correlation length, 73
coset, 192, 640
Coulomb gas
three dimensions, 326,338
two dimensions, 83
neutral, 83
plasma phase, 84
Coulomb interaction, 8
three-dimensional, 339
counterclockwise exchange process, 393
coupling constant
Chern-Simons, 376
covariant derivative, 383, 451
critical fixed point, 65
critical phenomena, 63
critical point, 140, 143, 189
cross ratio, 242
current, 110
correlation function, 377, 452
fermionic, 110
topological, 132
cyclotron length, 457
deconfined quantum criticality, 219, 343
defect, 391
degenerate ground states, 467
degenerate perturbation theory, 475
dimer, 256
density correlation function, 290
density wave, 330
liquid, 292
phases, 277
solid, 291
state, 371
dimerized phase, 219
Diophantine equation, 426, 476, 479
Dirac
cone, 274
fermions
chiral symmetry, 693
flux phases, 274
free-field scaling dimensions, 72
graphene, 274,677
quantum anomalous Hall effect, 681
time-reversal invariance, 694
magnetic monopole, 326, 463
quantization condition, 393
string, 197, 300, 391
discontinuity, 410
discrete Gaussian model, 332, 336
three Euclidean dimensions, 336
discrete magnetic translations, 473
discrete Schrödinger equation, 439
disorder operator, 101, 117
disordered spin states, 263
gauge-field picture, 263
DMRG (density-matrix renormalization group), 768
domain wall, 391
domain-wall fermions, 721
dual
field, 135
lattice, 326
transformation, 326
duality, 116, 156, 157, 188, 347, 429
gauge/gravity, 780
self-duality, 156
dynamic critical exponent
quantum antiferromagnet, 200
quantum ferromagnet, 200
dynamical critical exponent, 70
dyon, 390, 509
edge states, 381, 447, 603
$K$-matrix, 630
$\mathbb{Z}_{2}$ 3D topological insulator, 721
bulk-edge correspondence, 624
charge-density operator, 606
chiral excitations, 603
chiral Luttinger liquid, 616
chiral WZW model, 633
compactification radius, 617
density waves, 607
edge waves, 603
electron operator, 617
gauge anomaly, 609
gauge coupling, 608
Hamiltonian, 607
hydrodynamic theory, 610
quantum anomalous Hall insulator, 714
quantum spin Hall insulator, 718
quasiparticle operator, 618
RCFT construction, 618
Schwinger term, 607
twisted boundary conditions, 617
effective action
Chern-Simons term, 376
chiral spin state, 377
gauge field, 454
electric Wilson loop, 311
electro-magnetic duality, 327
electron fractionalization, 175
electronic liquid crystal, 738
electronic nematic state, 738
electrostatic coupling, 13
Elitzur's theorem, 277, 299, 360, 454
elliptic integral, 125
elliptic theta function, 470
energy-momentum tensor, 233
symmetries, 233
entanglement entropy, 757
$\mathbb{Z}_{2}$ gauge theory, 792
$\mathbb{Z}_{2}$ topological fluid, 792
$\phi^{4}$ theory, 778
after a quench, 797
area law, 758
Chern-Simons gauge theory, 790
conformal field theory, 765
holography, 783
large-scale entanglement, 766
Laughlin states, 793
measurement, 797
non-abelian fractional quantum Hall states, 794
quantum Lifshitz model, 769
topological phases, 785
entanglement spectrum, 758, 761, 796
exact marginal operator, 85
exchange process, 393
extended Hubbard model, 169
extended symmetry algebra, 567

Fermi golden rule, 180, 649
Fermi liquid, 17
irrelevant couplings, 71
Landau theory, 71
relevant couplings, 71
scaling, 70
Fermi liquid theory, 454
Fermi surface, 21
scaling, 70
fermion current
diamagnetic term, 451
fermion current correlation function, 451
fermion doubling, 423
fermion fractionalization, 172
fermion parity conservation, 122
fermion propagator, 378, 417
Coulomb gauge, 430
fermionic current, 110
ferromagnet, 25, 375
order, 25
state, 32, 91
fiber bundle, 192, 428, 444, 460, 461, 465
hermitian line bundle, 192
Hopf principal bundle, 192
monopole principal bundle, 192
Fierz identity, 161
filled Hofstadter bands
Hall conductance, 472
finite density
anyon gas, 405
finite magnetic translations, 434, 440
first Chern number, 460, 465, 672, 685, 695
fixed point, 65
$(1+1)$-dimensional Dirac fermions, 229
free scalar field, 67
gap scaling, 235
non-linear sigma model trivial, 69
non-linear sigma model $D=2+1$
dimensions, 226
quantum Heisenberg chain, 227
stable, 67, 231
thermal length scaling, 235
unstable, 66
WZW, 231
fixed-point action, 65
fluctuation
phase, 505
fluctuations, 371, 376, 505
around chiral spin state, 376
chiral spin state, 377
gauge field, 371, 376
flux attachment, 394, 400, 537
flux state, 270-272, 402
effective Hamiltonian, 271
energy, 275
fluctuations, 371
local gauge invariance, 277
mean-field theory, 272
folding transformation, 657
fractional charge
fractional quantum Hall states, 530
soliton, 712
fractional Hall conductance, 446
fractional quantum Hall effect (FQHE), 402, 446, 480, 512, 514
$K$-matrix, 547
$\mathrm{SL}(n, \mathbb{Z})$ invariance, 551
average electron density, 485
bulk-edge correspondence, 610, 624
CFT construction, 566
charged spinless fermions, 481
Chern-Simons gauge theory, 499
compactified chiral boson, 567
composite bosons, 503
composite fermions, 518, 521
compressible states, 521
conformal field theory, 564
constriction, 647
renormalization-group analysis, 651
dynamical gauge field, 483
edge waves, 603
effective action, 516
electron fractionalization, 547
electron tunnel junction, 648
entanglement entropy, 792
excitation spectrum, 523
excited states, 488
Fermi-liquid-edge tunneling, 649
fermion effective action, 512
fermion field theory, 512
flux attachment on a torus, 537
fractional spin, 547
gauge anomaly cancellation, 609
Gaussian fluctuations, 523
ground-state degeneracy, 542
Haldane models, 484, 486, 487
Halperin states, 552
hierarchy, 492, 500, 547
hydrodynamic theory, 542
incompressible fluid, 488
inserting a solenoid, 488
Landau-Ginzburg theory, 480, 502
Laughlin wave function, 480, 483
non-abelian states, 564
one-component classical plasma, 485
order parameter, 500
paired states, 577
plasma analogy, 484, 490
point-contact tunneling, 647
renormalization-group analysis, 651
quantum interferometers, 663
quasihole, 488, 489
quasihole charge, 490, 491
quasihole propagator, 532
quasihole state, 489
quasiparticle tunnel junction, 648
Read operator, 501
semi-classical limit, 514
short-distance behavior, 512
skyrmion, 556
spherical geometry, 486
strongly correlated system, 481
Trugman and Kivelson model, 484
universality, 565
vortex, 510
fractional statistics, 376, 388, 389, 399, 406, 534
non-abelian, 583
one space dimension, 390
parafermions, 390, 579
fractional topological insulators, 751
fractional vortex, 391
fractionalization, 172, 175
free anyons, 405
free spinon, 376
frustrated
Heisenberg antiferromagnet, 366
lattice, 404
frustration, 251, 366
functional integral, 449
gas of monopoles, 336
gauge field
fluctuations, 278
propagator, 380
fluctuations, 376
mass term, 376
torus, 450
gauge-fixing term, 380
gauge invariance, $13,266,454,511$
flux state, 277
Hubbard model, 13
non-abelian, 269
gauge theory, 263
$\mathbb{Z}_{2}, 298$
Chern-Simons, 393
confinement, 301
deconfinement, 305
duality, 305
Ising, 298
phases, 298
quantum dimer model, 294
quantum Heisenberg antiferromagnet, 263
resonating valence bond, 379
topology, 309
gauge transformation, 264, 411, 462, 463
$C P^{1}$ model, 222
generator of local, 296
large, 266, 327, 438
local time-dependent, 264
non-singular, 265
singular, 266
small, 328, 400, 450
gauge-invariant fermion system, 450
gauge/gravity duality, 780
Gauss's law, 296, 297, 407, 417
generalized boundary conditions, 460
generalized commutation relations, 406
generalized periodic boundary conditions, 466
generalized toroidal boundary conditions, 458
generating functional, 449, 454
genus- $g$ Riemann surface, 468
Ginzburg, 67
global phase invariance, 454
Goldstone boson, 50, 52, 55, 424, 429, 501, 504
Goldstone's theorem, 39
Goldstone-Wilczek formula, 713, 731
gradient expansion, 456
graphene, 71, 369, 674
Green function, 449
Gross-Neveu model, 109, 161, 709
group of magnetic translations, 465
Gutzwiller projection, 278
Haldane's conjecture, 209, 218
half-filling, 35, 39
half-vortex, 580, 646
Hall conductance, 425, 455, 456, 469, 475, 525, 530
$n$th band, 478
filled Hofstadter bands, 472
fractional, 446
Kubo formula, 457, 683
level crossing, 466
negative, 478
plateaus, 445,447
quantization, 456, 685
topological invariance, 457, 461, 683
Hall current, 456, 530
Halperin wave function, 495
happy fraction, 422, 429
hard-core anyons, 406
hard-core bosons, 100, 403
Heisenberg model, 403
hard-core condition, 411, 412
Harper's equation, 442
hedgehogs, 219
height-height correlation function, 333
Heisenberg antiferromagnet, 263
$\mathrm{SU}(N)$ representation, 267
flux state, 271
frustrated/on square lattice, 366
mean-field theory, 263
two-dimensional quantum, 412
Heisenberg model, 90, 103, 190, 279
anisotropic
one-dimensional quantum, 103
classical, 214
one-dimensional quantum, 90
quantum, 190
spin one-half
$\mathrm{SU}(2)$ gauge invariance, 279
heterojunctions, 446

Higgs mechanism, 483, 507
high magnetic field
Hall conductance, 445
high-temperature superconductors, 25
high-energy cutoff, 67
high-frequency modes, 457
high-momentum modes, 457
Hofstadter problem, 422, 472, 673
sublattice structure, 473
wave functions, 438
holes, 17
holography, 610, 780
holomorphic factorization, 84
holon, 262
holonomies, 311, 312, 327, 400, 450, 459
homogeneous function, 76
homotopy, 207, 230
classes, 207, 381, 465, 684
group, 219, 230, 646
Hopf invariant, 385, 546
Hopf map, 222
Hopf term, 218, 223
Hubbard model, 8, 27, 55, 147, 190
$\mathrm{SU}(2)$ symmetry, 10
U(1) symmetry, 12
bipartite lattice, 13
attractive/repulsive, 14
Bethe ansatz, 249
charge motion, 17
electromagnetic coupling, 12
electrostatic coupling, 13
ferromagnetic state, 32
gauge invariance, 13
half-filled, 27, 190
holes, 17
interaction terms, 28
mean-field-theory, 27
Néel state, 35
orbital coupling, 12
particle-hole symmetry, 13
spin-charge separation, 164, 245
strong-coupling limit, 14
away from half-filling, 17
half-filling, 14
transformation symmetries, 10
weak coupling, 27
weak-coupling limit, 17
collective modes, 23
Cooper-pair correlation function, 25
current correlation function, 24
density correlation function, 23
spin correlation function, 24
wave-function renormalization, 23
Zeeman coupling, 12
Hubbard-Stratonovich transformation, 515
incompressible ground state, 507
incompressible state, 402, 501
induced vector field, 462
infinitesimal magnetic translations, 434
instanton, 206, 230, 659
integer quantum Hall effect (IQHE), 424, 445, 514 bilayers, 556
intrinsic spin, 386
irrelevant operator, 67
Ising fermions as domain walls, 122
Ising gauge theory, 298
Ising model, 239
OPE, 579
transfer matrix, 113
two-dimensional, 390
Ising model in a transverse field, 112
Ising nematic, 738
Ising universality class, 121
isotropic gauge, 433
Jones polynomial, 586
Jordan-Wigner transformation, 100, 103, 390, 405
two-dimensional, 412
Kac-Moody algebra, 160, 228, 231, 607, 613
$\mathrm{SU}(2)_{k}, 160$
$\mathrm{U}(1), 160$
Kadanoff, 63, 67
Kalmeyer-Laughlin state, 253, 402
Kane-Mele model, 687
kink, 390
kink operator, 101
Knizhnik-1984, 240
knots, 376, 386, 585
Kohn's theorem, 527
Kondo problem, 82, 651
Kosterlitz RG, 79
beta functions, 87
trajectories, 88
Kosterlitz-Thouless transition, 82, 83, 140, 293, 348
Kramers-Wannier duality, 116
Kubo formula, 458, 460, 474
Hall conductance, 457
ladder operator, 295
Lagrange multiplier field, 394
Landau, 23, 67
charged particle in a magnetic field, 432
complex coordinates, 433
isotropic gauge, 433
magnetic translation group, 433
on a disk, 433
periodic boundary conditions, 437
Fermi liquid, 23
gap, 457
gauge, 439, 469
level, 434, 468
basis functions, 469
degeneracy, 434, 481
filled, 446
"orbits", 197
Landau-Ginzburg theory, 67
fractional quantum Hall Laughlin states, 480, 499, 501, 502
non-abelian fractional quantum Hall states, 644
Landau-Hofstadter bands, 474, 478
Landau-Lifshitz equation, 201
Landau-Lorentz gauge, 511
Laplacian coupling, 332
large gauge transformation, 327, 381, 438
Landau problem, 438
large gauge transformations, 408
lattice Cauchy-Riemann equation, 410
lattice divergence, 296
lattice gauge theory, 264, 294
lattice Green function, 338, 409
lattice magnetic translations, 440
Laughlin sequence, 499, 519
Laughlin state, 402, 447, 480, 499, 513
Laughlin wave function, 480, 502
analyticity, 483
overlap, 484
level, 160, 231
Lifshitz point, 351
linear-response theory, 449
link variables, 263
linking number, 385,387
magnetostatic analogy, 385
relative, 387
liquid state, 483
local constraint, 407
local quantum field theory axioms, 389
locality, 238
low-energy excitations fractional statistics, 376
low-energy spectrum, 429 anyon gas, 429
Luther-Emery liquid, 169
Luttinger liquid, 82
Luttinger model, 110, 239
magnetic 't Hooft loop, 313
magnetic algebra, 435
magnetic Brillouin zone, 441, 474
magnetic monopole, 197, 463
magnetic translation
group, 433
infinitesimal generator, 434
many-body wave function, 465
operator, 459
ray representation, 435
magnetic translation operator, 434
magneto-phonon, 507
magneto-plasmon, 507
magnetostatic analogy
linking number, 385
magnons, 200
antiferromagnetic, 202
ferromagnetic, 200
Majorana fermion, 119, 124, 167, 228, 240, 559, 578, 590, 646
zero mode, 597, 748
Mandelstam formula, 390
Mandelstam operators, 138
marginal operator, 67
Marshall theorem, 99
mass renormalization
spinon, 385
massive modes, 507
mean-field theory, 263
chiral spin state, 366
flux state, 272
Heisenberg antiferromagnet, 263
Hubbard model
weak-coupling limit, 27
valence-bond state, 276
Meissner effect, 419, 508, 645
Meissner state, 501
Mermin-Wagner theorem, 140
meron, 686
model, 90, 103, 189, 262, 419
$C P^{1}, 222$
$\mathrm{SU}(2) \times \mathrm{U}(1)$ Thirring, 161
SU( $N$ ) Heisenberg antiferromagnet, 267
XY, 419
$C P^{1}, 262$
1D transverse-field Ising model, 239
chiral Gross-Neveu, 161
classical 2D Ising, 239
classical Heisenberg, 214
discrete Gaussian, 332, 336
principal chiral field non-linear sigma model, 230
quantum dimer (QDM), 286
quantum Heisenberg, 190
quantum Heisenberg model, 403
quantum non-linear sigma, 189
solid-on-solid, 332
spin one-half $X Y, 103,105$
Thirring/Luttinger, 110
WZW, 231
modular parameter, 469, 571
modular transformation, 571
momentum-space torus, 473
monopole, 320, 380, 383
condensation, 321
gas, 336
plasma, 326
MOSFETs
high magnetic field, 445
multi-component wave functions, 467
multivalued function, 410
multivalued wave function, 388
Néel, 25, 50
Néel antiferromagnet, 39

Néel state, 35, 50, 55, 202
quantum fluctuations, 51, 60
nematic spin phase, 253
nesting, 35
property, 35
vector, 35
Nielsen-Ninomiya theorem, 443, 681, 721
Niu-Thouless-Wu formula, 462, 469
no-renormalization topological invariants, 210
noise spectrum, 661
non-abelian Berry connection, 732
non-abelian bosonization, 218, 228
non-abelion, 569, 580
non-contractible closed loop, 408
non-linear sigma model, 61, 189, 251
asymptotic freedom, 215
beta function, 213
coupling constant, 213
dimensionless coupling constant, 210
effective coupling with frustration, 251
fast modes, 210
momentum-shell integration, 211
quantum, 189
quantum fluctuations, 209, 226
renormalization-group transformation, 210
scale invariance, 210
slow modes, 210
oblique confinement, 509
off-diagonal long-range order (ODLRO), 419, 500, 587
one-component wave functions, 467
one-dimensional Heisenberg model
fixed point, 227
one-dimensional relativistic fermions, 453
one-particle Hamiltonian, 432
one-particle states, 468
Hofstadter problem, 474
Onsager, 239
Onsager fermions, 409
operator, 364
chiral, 364
irrelevant, 67
Mandelstam, 138
marginal, 67
normal ordered, 127
parafermion, 390
point-split product, 129
relevant, 66, 75
soliton, 101, 133
Umklapp, 136
bosonized, 137
vertex, 85
Wilson loop, 383
operator-product expansion (OPE), 78, 110, 133, 238, 569
coefficients, 78
energy operator, 86
quasiholes, 567
vertex operator, 86
operators
free-field fixed point, 68
orbital ferromagnetism, 366
orbital spin currents, 366
order parameter, 57, 138, 202, 500, 510
chiral, 138
gauge-invariant, 512
staggered, 57, 202
orientational order parameter, 346
orthogonality catastrophe, 172
pair-wave functions, 471
paired quantum Hall states, 578
pairing Hamiltonian, 123, 588
parafermion, 390, 640
parity, 368, 371, 375
spontaneous breaking, 368
parity anomaly, $369,423,681,726$
particle-hole symmetry, 14
particles
flux attachment, 394
path integral, 190, 263, 415, 497
Chern-Simons theory, 415
coherent states, 496
discrete Gaussian model, 333
fermion Green function, 449
Heisenberg antiferromagnet, 263
many-spin systems, 198
quasihole propagator, 532
single-spin, 190
spin coherent-state representation, 194
spinon propagator, 382
path-ordered product, 359
Pauli operators, 412
Peierls gap, 370
Peierls instability, 39, 706
Peierls mass, 371
Peierls state, 272, 276, 329, 706
perimeter law, 308
periodic boundary conditions, 473
Landau problem, 437
periodicity, 399
statistical angle, 398
phase factor
inequivalent topological classes, 387
phase twist, 460
phases of matter
fixed points, 65
Poisson summation formula, 225, 336
polarization tensor, 377, 450, 455, 524
polyacetylene, 467, 596, 706
Pomeranchuk instability, 739
Pontryagin index, 190, 205, 684
primary fields, 234
primary scaling field, 66
principal $\mathrm{U}(1)$ bundle, 465
principal chiral field, 229
projective symmetry-group states, 278
propagator
fermion, 378
gauge field, 380
spinon, 382
PSG, 278
punctured plane, 392
quantized Hall conductance, 445
quantum anomalous Hall effect, 673
topological invariant, 685
edge states, 705
quantization, 685
spontaneous, 736
quantum criticality, 63
quantum dimension, 572
quantum dimer model, 286, 336
generalizations, 292
quantum dynamics, 294
RK point, 289
dimer density correlator, 290
holon correlator, 291
RVB wave function, 289
triangular lattice, 291
quantum entanglement, 756
quantum group, 601
quantum Hall effect, 376, 424, 432, 445
fractional, 402, 446
integer, 432, 445
quantum Hall state, 431
quantum Heisenberg model, 15
hard-core boson representation, 403
quantum impurity, 651
quantum Ising model, 112, 239, 300
quantum Lifshitz model, 350, 741
action, 350
correlation functions, 355
entanglement entropy, 769
gauge-theory dual, 351
operator content, 354
quantum-dimer mapping, 352
scaling, 357
wave function, 353
quantum-loop model, 306
quantum magnets, 405
quantum paramagnet, 252, 286
quantum phase transition, 219
quantum quench, 797
quantum spin Hall effect, 687, 726
$\mathbb{Z}_{2}$ topological invariant, 696
Bernevig-Hughes-Zhang model, 690
edge states, 705, 718
Kane-Mele model, 687
spontaneous, 736
quasi-electron, 491
quasihole, 530, 535
anyons, 495
charge, 534
coherent states, 496
excitation energy, 489
linking number, 534
one-particle propagator, 532
path integral, 497
statistics, 535
quasiparticle quantum numbers, 530
Rényi entropy, 761
random-phase approximation (RPA), 419
rational CFT, 239
RCFT, 239
monodromy, 571
relative coordinates, 471
relative linking number, 387
relevant operator, 66, 75, 139
renormalization group, 63
fixed point, 65
Kosterlitz RG, 82
non-linear sigma model, 210
one-loop, 82
perturbative RG, 78
WZW, 231
renormalization-group sine-Gordon, 139
replica trick, 761
representations, 465
group of magnetic translations, 465
resonating valence bond (RVB), 189, 253, 255
gauge-field dynamics, 379
nearest neighbor, 256
short-range, 256, 289, 291
non-orthogonality, 257
spin-spin correlator, 258
staggered correlator, 259
resonon, 291, 325
RG transformation, 65
Riemann surface, 468
genus $g, 468$
roughening transition, 84,333
saddle-point approximation, 48, 270, 419
saddle-point expansion, 264, 514
scale invariance
consequences, 76
scaling dimensions, 76
three-point functions, 77
scaling
anisotropic, 70
Fermi surface, 70
scaling dimension, 139, 232, 234
scattering, 28, 110
backward, 28
forward, 28
Umklapp, 28, 110, 136
Schmidt decomposition, 756
Schwinger bosons, 261, 263
Schwinger term, 131, 160, 453, 607
screening, 518
SDW, 25, 35
SDW order parameter, 25
second Chern number, 732
self-linking number, 386
semi-classical approximation, 514
semions, 388
shear distortion, 236
short-distance cutoff, 67
shot noise, 662
sine-Gordon, 82
coupling constant, 138
Lagrangian, 138
potential, 139
singular gauge transformation, 355
sink, 467
skein relation, 585
skyrmion, 220, 230, 556, 645, 686
Slater determinant, 469
slave-boson representation, 262
small gauge transformation, 328, 400, 450
smectic liquid crystal, 351
smooth deformation, 475
solid-on-solid (SOS) model, 332
soliton, 172, 208, 220, 390, 594, 596, 709
fractional charge, 712
polyacetylene, 705
worldline, 220
soliton operator, 101
source, 467
spectral asymmetry, 712
spin coherent state, 191
spin correlation length, 56
spin current, 366
spin density wave, 25
spin gap, 169, 219, 259
spin liquid
chiral, 379
spin liquid phases, 375
spin one-half $X Y$ model, 419
spin operator, 261
boson representation, 262
fermion representation, 261
spin quantum number
confinement, 380
spin-charge separation, 164
spin-density wave, $29,35,46,49,52$
spin-statistics theorem, 389
spin-wave stiffness, 56
spin-wave theory, 268
spinless fermions, 412
spinon, 262, 271, 274, 376
charge, 379
confinement, 279
doubling, 279, 373, 377
gap, 386
liberation, 380
mass renormalization, 385
propagation amplitude quantum corrections, 385
two spinons, 386
propagator, 382
imaginary time, 383
proper-time representation, 382
statistics, 382
spiral state, 253
spontaneous symmetry breaking, 467
$\mathrm{Sr}_{2} \mathrm{RuO}_{4}, 25$
stable fixed point, 67
staggered amplitude fluctuations, 372
staggered charge density, 297
staggered electric fields, 296
staggered gauge field, 296
staggered magnetic field, 248
staggered magnetization, 26, 49, 202, 248
staggered vector potentials, 297
state, 32, 91, 251, 431
Baskaran-Zou-Anderson, 272
chiral spin, 253
chiral spin liquid, 379
coherent, 43
columnar, 276
disordered spin, 251, 253
eight vertex, 309
ferromagnetic, 32, 34, 91
flux, 271
Kalmeyer-Laughlin, 253, 402
Kitaev toric code, 306
paramagnetic, 34
Peierls, 272, 276, 329
quantum Hall, 431
resonating valence bond, 253, 255
spin coherent, 191
spiral, 253
valence bond, 253, 271
zero-temperature quantum paramagnet, 226, 252
statistical angle, $388,406,411,419,535$
statistical gauge field, 417
commutation relations, 406
statistical vector potential, 394, 523
statistics of the quasiholes, 493
STM, 179
Stokes' theorem, 386, 463
Stoner criterion, 34
stress tensor, 235
stripe order, 24
stripe phases, 146
strong-coupling expansion, 15, 301
strong topological insulators, 698
Sugawara form, 161, 233
superconducting proximity effect, 747
superconductivity
anyons, 376
superconductor, 414
as a topological fluid, 558
non-local order parameter, 557
topological BF theory, 560
susceptibilities, 26
magnetic, 26
static, 26
't Hooft, 392
tadpole term, 452
target manifold, 200
theorem, 39, 99, 140, 277, 443
Elitzur's, 277, 360, 454
Goldstone's, 39
Marshall, 99
Mermin-Wagner, 140
Nielsen-Ninomiya, 443
spin-statistics, 389
Stokes', 386, 463
thermodynamic Bethe ansatz, 660
thermodynamic limit, 410
theta function, 470
thin cylinder limit, 731
Thirring model, 110, 161
tight-binding model, 9, 450
time-dependent Schrödinger equation, 458
time-reversal invariance, $359,368,375$
antiferromagnets, 210
Dirac spinors, 679
quantum spin Hall insulator, 696
spontaneously broken, 368
TKNN integers, 475, 672
topological
charge, 205, 220, 684
classes, 219, 312
current, 132, 220
field theory, 314, 376, 395
fluid, 292
Hopf invariant, 223
inequivalent knots, 387
insulators, 669
invariance, 429, 456, 457, 461
invariant, 207, 210, 381, 385, 473, 478, 585, 683
magneto-electric effect (TME), 725, 733
mass, 376
Mott insulator, 736
obstruction, 387
phase, 314
quantum computation, 586
soliton, 390, 709
structure, 463
superconductor, 593
topological quantum computing, 597
toric code, 305, 306, 315, 786
torus of boundary conditions, 466
transfer matrix, 301
transformation, 100, 126
block spin, 64
bosonization, 126
chiral, 136, 239
Jordan-Wigner, 100, 103, 390
renormalization-group, 65
transition function, 463, 465
transversality condition, 450
trivial holonomies, 467
tunneling density of states, 179
twist field, 240, 638, 641, 646
two-spinon propagation amplitude, 386
Umklapp processes, 28, 110, 136
Hubbard model, 28
Umklapp scattering, 136
unstable fixed point, 66
unstaggered amplitude fluctuations, 372
vacuum persistence amplitude, 40
valence-bond crystal, 270, 271, 288, 291
valence-bond liquid, 292
valence-bond state, 253
energy, 276
fermion representation, 262
fluctuations, 286
mean-field Hamiltonian, 276
overlap, 257
van Hove singularity, 35, 38
Vandermonde determinant, 469
vector potential, 454
statistical, 394
Verlinde formula, 572, 659
vertex operator, 85,238
normal ordering, 85
scaling dimension, 85
Virasoro algebra, 234
central charge, 234
vison, 300
von Neumann, 757
von Neumann entanglement entropy, 756
vortices, 84
topological invariant, 207
Wannier states, 8, 439
Ward identity, 58, 60
current correlator, 453
wave function, 469
zeros, 469
wave-function renormalization, 23
weakly interacting system, 23
Wess-Zumino term, 196, 230, 253
staggered, 202
with frustration, 253
Wess-Zumino-Witten, 228, 231
anomalous dimension, 242
CFT, 240
gauged, 249, 640, 643
level, 231
primary fields, 241
Weyl fermion, 379
Wigner crystal, 482, 483, 513, 517
melting, 483

Wilczek, 392
Wilson, 63
Wilson fermions, 693
Wilson loop, 265, 359, 362, 383, 417
statistical gauge field, 417
Wilson-Fisher, 67
winding number, 190, 205, 329, 445, 464, 475
Witten, 393
WKB approximation, 517
worldline, 220, 383
braiding, 220
linking number, 220, 387
writhing number, 386
writhing number, 386
Wu-Yang monopole, 463
Young tableau, 254
Zeeman coupling, 12
zero-energy eigenstates, 443
multiplicity, 443
zero mode, 595

