# Field Theories of Condensed Matter Physics Chap10-12

## 10

## Chiral spin states and anyons

### 10.1 Chiral spin liquids

In Chapter 8 we considered solutions of the mean-field equations of quantum antiferromagnets, Eq. (8.64) and Eq. (8.65), that respect time-reversal invariance. We will now consider a frustrated quantum antiferromagnet and look for states for which time-reversal invariance is spontaneously broken. In terms of the mean-field theory of Section 8.4, we will consider situations in which the phase $\overline{\mathcal{A}}_{j}(\vec{x}, t)$ of the link variable $\bar{\chi}_{j}(\vec{x}, t)$ has a non-zero curl $\overline{\mathcal{B}}(\vec{x}, t)$ around an elementary plaquette

$$
\begin{equation*}
\overline{\mathcal{B}}(\vec{x}, t)=\sum_{\text {plaquette }} \overline{\mathcal{A}}_{j}(\vec{x}, t)=\Delta_{1} \overline{\mathcal{A}}_{2}(\vec{x}, t)-\Delta_{2} \overline{\mathcal{A}}_{1}(\vec{x}, t) \tag{10.1}
\end{equation*}
$$

In Section 8.5 we argued that such flux states violate time-reversal invariance unless $\overline{\mathcal{B}}(\vec{x}, t)=0, \pi$. A solution $\bar{\chi}_{j}(\vec{x}, t)$ of the saddle-point equation applied to Eq. (8.41) satisfies

$$
\begin{equation*}
\frac{2}{J}\left\langle\bar{\chi}_{j}^{*}(\vec{x}, t)\right\rangle=\left\langle c_{\alpha}^{\dagger}(\vec{x}, t) c_{\alpha}\left(\vec{x}+\hat{e}_{j}, t\right)\right\rangle \tag{10.2}
\end{equation*}
$$

For a solution with $\bar{\rho}_{j}(\vec{x}, t)=\bar{\rho}_{j}$ a constant and $\overline{\mathcal{A}}_{j}(\vec{x}, t) \neq 0$, we get

$$
\begin{equation*}
\frac{2}{J} \bar{\rho}_{j} e^{-i \overline{\mathcal{A}}_{j}(\vec{x}, t)}=\left\langle c_{\alpha}^{\dagger}(\vec{x}, t) c_{\alpha}\left(\vec{x}+\hat{e}_{j}, t\right)\right\rangle \tag{10.3}
\end{equation*}
$$

Thus a flux phase implies that the product of the band amplitudes $\left\langle c_{\alpha}^{\dagger}(\vec{x}, t) c_{\alpha}\left(\vec{x}+\hat{e}_{j}, t\right)\right\rangle$ around a closed loop $\gamma$ of the lattice should have a phase determined by the flux going through the loop. Alternatively, we can consider not the product (around the loop) of expectation values $\left\langle c_{\alpha}^{\dagger}(\vec{x}, t) c_{\alpha}\left(\vec{x}+\hat{e}_{j}, t\right)\right\rangle$, but the expectation value of the Wilson loop operator, the path-ordered product

$$
\begin{equation*}
W(\gamma)=\left\langle\prod_{\left(\vec{x}, \vec{x}^{\prime}\right) \in \gamma} c_{\alpha}^{\dagger}(\vec{x}, t) c_{\alpha}\left(\vec{x}^{\prime}, t\right)\right\rangle \tag{10.4}
\end{equation*}
$$

where $\left(\vec{x}, \vec{x}^{\prime}\right)$ denotes a link of the lattice, with endpoints at $\vec{x}$ and $\vec{x}^{\prime}$, which belongs to the closed path $\gamma$. The expectation value $\left\langle c_{\alpha}^{\dagger}(\vec{x}, t) c_{\alpha}\left(\vec{x}+\hat{e}_{j}, t\right)\right\rangle$ is not gauge-invariant. Accordingly, Elitzur's theorem implies that this expectation value is actually equal to zero. As a matter of fact, the solutions of the saddlepoint equations are not unique. All the configurations which can be reached by means of a local gauge transformation from a given solution are solutions too. The saddle-point approximation violates this condition. The invariance is restored by fluctuations. The main effect of fluctuations is to rid the system of spurious states that violate gauge invariance. We will come back to this point shortly, when we discuss the spectrum of disordered spin states more generally.

How can we compute expectation values such as $W(\gamma)$ from a path integral written in terms of $\chi_{j}(\vec{x}, t)$ fields? Let us go back to the path integral for this system with the effective Lagrangian density of Eq. (8.58). I will discuss only the simpler $n_{\mathrm{c}}=1$ case. Let us shift the $\mathcal{A}_{0}(\vec{x}, t)$ and $\chi_{j}(\vec{x}, t)$ variables each by a fixed, but arbitrary, amount $\tilde{\mathcal{A}}_{0}(\vec{x}, t)$ and $\tilde{\chi}_{j}(\vec{x}, t)$. This is essentially a mathematical device to compute expectation values involving Fermi field currents. We can regard the $\tilde{\mathcal{A}}_{0}$ and $\tilde{\chi}_{j}$ as external sources in terms of which the shifted Lagrangian density, $\mathcal{L}^{\prime}$, reads (for $n_{\mathrm{c}}=1$ )

$$
\begin{align*}
\mathcal{L}^{\prime}= & c_{\alpha}^{\dagger}(x)\left(i \partial_{t}+\mu\right) c_{\alpha}(x)+\left(\mathcal{A}_{0}(x)+\tilde{\mathcal{A}}_{0}(x)\right)\left(c_{\alpha}^{\dagger}(x) c_{\alpha}(x)-\frac{N}{2}\right) \\
& -\frac{N}{J}\left|\chi_{j}(x)\right|^{2}+c_{\alpha}^{\dagger}(\vec{x}, t)\left(\chi_{j}(\vec{x}, t)+\tilde{\chi}_{j}(\vec{x}, t)\right) c_{\alpha}\left(\vec{x}+\hat{e}_{j}, t\right)+\text { h.c. } \tag{10.5}
\end{align*}
$$

where we recall that according to Eq. (8.59) $\tilde{\chi}_{j}(\vec{x}, t)=\tilde{\chi}_{-j}^{*}\left(\vec{x}+\hat{e}_{j}, t\right)$. Since $\tilde{\chi}_{j}(\vec{x}, t)$ couples to the term for hopping from site $\vec{x}+\hat{e}_{j}$ to site $\vec{x}$, it is clear that the functional differentiation of the action $S$ by $\tilde{\chi}_{j}(\vec{x}, t)$ yields

$$
\begin{equation*}
\frac{\delta S}{\delta \tilde{\chi}_{j}(\vec{x}, t)}=\sum_{\alpha=1}^{N}\left(c_{\alpha}^{\dagger}(\vec{x}, t) c_{\alpha}\left(\vec{x}+\hat{e}_{j}, t\right)\right) \tag{10.6}
\end{equation*}
$$

while functional differentiation with respect to $\tilde{\mathcal{A}}_{0}(\vec{x}, t)$ gives

$$
\begin{equation*}
\frac{\delta S}{\delta \tilde{\mathcal{A}}_{0}(\vec{x}, t)}=\sum_{\alpha=1}^{N} c_{\alpha}^{\dagger}(\vec{x}, t) c_{\alpha}(\vec{x}, t)-\frac{N}{2}=0 \tag{10.7}
\end{equation*}
$$

as follows from the constraint of Eq. (8.56).
Thus, by computing functional derivatives we can compute the desired expectation values. For instance,

$$
\begin{equation*}
\frac{\delta Z}{\delta \tilde{\chi}_{j}(\vec{x}, t)}=\int \mathcal{D} \chi \mathcal{D} \mathcal{A}_{0} \mathcal{D} c^{\dagger} \mathcal{D} c e^{i S} i \frac{\delta S}{\delta \tilde{\chi}_{j}(\vec{x}, t)} \tag{10.8}
\end{equation*}
$$

and

$$
\begin{equation*}
-\frac{i}{Z} \frac{\delta Z}{\delta \tilde{\chi}_{j}(\vec{x}, t)}=\left\langle\frac{\delta S}{\delta \tilde{\chi}_{j}(\vec{x}, t)}\right\rangle=\left\langle\sum_{\alpha=1}^{N}\left(c_{\alpha}^{\dagger}(\vec{x}, t) c_{\alpha}\left(\vec{x}+\hat{e}_{j}, t\right)\right)\right\rangle \tag{10.9}
\end{equation*}
$$

In particular, the path-ordered product $W(\gamma)$ can also be computed. Let $p$ label the $p$ th link on the path $\gamma$ and $\tilde{\chi}(p)$ the corresponding $\chi_{j}(\vec{x}, t)$, i.e. the link $(\vec{x}, \vec{x}+$ $\left.\hat{e}_{j}, t\right)$ is the $p$ th link of the path starting at some arbitrary site $\vec{x}_{0}$ on the path. We can write, for a closed path $\gamma$ with perimeter $L(\gamma)$,

$$
\begin{align*}
\frac{1}{Z} \frac{\delta^{L} Z}{\delta \tilde{\chi}(1) \ldots \delta \tilde{\chi}(L(\gamma))} & =i^{L(\gamma)}\left\langle\prod_{p=1}^{L(\gamma)}\left(\sum_{\alpha=1}^{N} c_{\alpha}^{\dagger}(\vec{x}, t) c_{\alpha}\left(\vec{x}+\hat{e}_{j}, t\right)\right)\right\rangle \\
& \equiv i^{L(\gamma)} W(\gamma) \tag{10.10}
\end{align*}
$$

On the other hand, the $\chi_{j}(\vec{x}, t)$ degrees of freedom can be shifted without affecting the value of the partition function:

$$
\begin{align*}
\mathcal{A}_{0}(\vec{x}, t) & =\mathcal{A}_{0}^{\prime}(\vec{x}, t)-\tilde{\mathcal{A}}_{0}(\vec{x}, t) \\
\chi_{j}(\vec{x}, t) & =\chi_{j}^{\prime}(\vec{x}, t)-\tilde{\chi}_{j}(\vec{x}, t) \tag{10.11}
\end{align*}
$$

After this has been done, all the information about the sources is in the quadratic term of $\mathcal{L}^{\prime}$,

$$
\begin{align*}
\mathcal{L}^{\prime}= & c_{\alpha}^{\dagger}(x)\left(i \partial_{t}+\mu\right) c_{\alpha}(x)+\mathcal{A}_{0}^{\prime}(x)\left(c_{\alpha}^{\dagger}(x) c_{\alpha}(x)-\frac{N}{2}\right) \\
& -\frac{N}{J}\left(\chi_{j}^{\prime}(x)-\tilde{\chi}_{j}(x)\right)\left(\chi_{j}^{\prime *}(x)-\tilde{\chi}_{j}^{*}(x)\right) \\
& +c_{\alpha}^{\dagger}(\vec{x}, t) \chi_{j}^{\prime}(\vec{x}, t) c_{\alpha}\left(\vec{x}+\hat{e}_{j}, t\right)+c_{\alpha}^{\dagger}\left(\vec{x}+\hat{e}_{j}, t\right) \chi_{j}^{\prime *}(\vec{x}, t) c_{\alpha}(\vec{x}, t) \tag{10.12}
\end{align*}
$$

Thus,

$$
\begin{equation*}
\left.\left\langle\frac{\delta S}{\delta \tilde{\chi}_{j}(\vec{x}, t)}\right\rangle\right|_{\tilde{\chi}_{j}=0}=\left\langle\sum_{\alpha=1}^{N} c_{\alpha}^{\dagger}(\vec{x}, t) c_{\alpha}\left(\vec{x}+\hat{e}_{j}, t\right)\right\rangle=\frac{2 N}{J}\left\langle\chi_{j}^{\prime *}(\vec{x}, t)\right\rangle \tag{10.13}
\end{equation*}
$$

Similarly, $W(\gamma)$ is given by

$$
\begin{equation*}
W(\gamma)=\left\langle\prod_{p=1}^{L(\gamma)} \frac{2 N}{J} \chi^{*}(p)\right\rangle \tag{10.14}
\end{equation*}
$$

Notice that there is no quadratic term in the action for $\mathcal{A}_{0}$. Thus, all functional derivatives of $Z$ with respect to $\tilde{\mathcal{A}}_{0}$ are identically equal to zero:

$$
\begin{equation*}
\frac{\delta Z}{\delta \tilde{\mathcal{A}}_{0}}=0 \tag{10.15}
\end{equation*}
$$

This merely means that the constraint

$$
\begin{equation*}
\sum_{\alpha=1}^{N} c_{\alpha}^{\dagger}(\vec{x}, t) c_{\alpha}(\vec{x}, t)-\frac{N}{2}=0 \tag{10.16}
\end{equation*}
$$

is strictly enforced at all times and everywhere.
The quadratic terms in $\mathcal{L}^{\prime}$ express the fluctuations of the amplitude $\rho_{j}(\vec{x}, t)$ of $\chi_{j}(\vec{x}, t)$ but not of its phase, the gauge field $\mathcal{A}_{j}(\vec{x}, t)$. Thus, if we imagine a state with $\bar{\rho}_{j}(\vec{x}, t)=\bar{\rho}$, we will still have the fluctuations of the gauge fields $\mathcal{A}_{j}$ to deal with. The path-ordered product is, in this approximation, equal to

$$
\begin{equation*}
W(\gamma) \approx\left(\frac{2 N}{J} \bar{\rho}\right)^{L(\gamma)}\left\langle e^{i \sum_{l \epsilon \gamma} \overline{\mathcal{A}}(l)}\right\rangle \tag{10.17}
\end{equation*}
$$

This last expectation value, $\left\langle\exp \left(i \sum_{l \epsilon \gamma} \overline{\mathcal{A}}(l)\right)\right\rangle$, is the Wilson loop operator which we have already discussed in Chapter 9. It was introduced in the context of gauge theories of strong interactions (in particle physics) as a way to measure the interaction between quarks. In the present context, it measures the interactions between ideal static spinons that are carried around the loop $\gamma$. The interaction is mediated by the fluctuations of the field $\chi_{j}$. The relevance of Wilson loops for flux spin states was first emphasized by Wiegmann (1988).

If the saddle-point approximation were exact, the fluctuations of the gauge field $\mathcal{A}_{j}$ could be neglected. In this case, $W(\gamma)$ would yield the result

$$
\begin{equation*}
W(\gamma) \approx\left(\frac{2 N}{J} \bar{\rho}\right)^{L(\gamma)}\left\langle e^{i \sum_{l \epsilon \gamma} \overline{\mathcal{A}}(l)}\right\rangle \tag{10.18}
\end{equation*}
$$

Let $a(\gamma)$ be the area of the lattice enclosed by the path $\gamma$. Using Stokes' theorem, we would then get

$$
\begin{equation*}
W(\gamma) \approx\left(\frac{2 N}{J} \bar{\rho}\right)^{L(\gamma)}\left\langle e^{i a(\gamma) \overline{\mathcal{B}}}\right\rangle \tag{10.19}
\end{equation*}
$$

where $\overline{\mathcal{B}}$ is the flux per plaquette. If we denote by $\delta \mathcal{A}_{j}(\vec{x}, t)$ the fluctuating part of the gauge field $\mathcal{A}_{j}(\vec{x}, t)$, i.e. the deviation from the saddle-point configuration, we get for $W(\gamma)$

$$
\begin{equation*}
W(\gamma) \approx\left(\frac{2 N}{J} \bar{\rho}\right)^{L(\gamma)}\left\langle e^{i a(\gamma) \overline{\mathcal{B}}} e^{i \sum_{l \epsilon \gamma} \delta \mathcal{A}(l)}\right\rangle \tag{10.20}
\end{equation*}
$$

where the expectation value involves only the fluctuating pieces. It has been argued that flux phases can generally be defined as phases in which $\ln W(\gamma)$ has an imaginary part that scales like the area enclosed by the loop $\gamma$ (Wiegmann, 1988; Wen et al., 1989). It is also constructive to consider the situation in which an extra
fermion, i.e. a spinon, is added at some site $\vec{x}$ and another one is removed from site $\vec{x}^{\prime}$. The constraints at $\vec{x}$ and $\vec{x}^{\prime}$ are

$$
\begin{equation*}
\sum_{\alpha=1}^{N} c_{\alpha}^{\dagger}(\vec{y}, t) c_{\alpha}(\vec{y}, t)-\frac{N}{2}=\delta_{\vec{y}, \vec{x}}-\delta_{\vec{y}, \vec{x}^{\prime}} \tag{10.21}
\end{equation*}
$$

This means that two extra factors enter into the partition function. They have the form $\exp \left( \pm i \int d t \mathcal{A}_{0}(\vec{x}, t)\right)$. We can close the paths both in the remote past and in the remote future (assuming an adiabatic switching on and off, i.e. a smooth path) and write the extra contribution as an integral over a closed path $\gamma_{t}$,

$$
\begin{equation*}
\left.W\left(\gamma_{t}\right) \propto\left\langle e^{i \sum_{l \epsilon \gamma_{t}} \mathcal{A}(l)}\right\rangle\right|_{\gamma_{t}} \tag{10.22}
\end{equation*}
$$

where $\gamma_{t}$ stands for a space-time closed loop (see Fig. 10.1) of time span $\tau$ and spatial extent $R$. Thus $W\left(\gamma_{t}\right)$ measures the change of the ground-state energy $\Delta E(\vec{x})$ of the system as a result of the presence of the static spinons,

$$
\begin{equation*}
W\left(\gamma_{t}\right)=e^{i \tau \Delta E(\vec{x})} \tag{10.23}
\end{equation*}
$$

This expression is valid for $\tau \gg R$. Thus the effective interaction between static sources $V_{\text {eff }}(\vec{x})$ is

$$
\begin{equation*}
V_{\mathrm{eff}}(\vec{x})=\Delta E(\vec{x})=\lim _{\tau \rightarrow \infty}\left[-\frac{i}{\tau} \ln \left(W\left(\gamma_{t}\right)\right)\right] \tag{10.24}
\end{equation*}
$$

Notice that there is no classical flux associated with space-time loops $\gamma$. Thus $W\left(\gamma_{t}\right)$ does not necessarily exhibit the area law of Eq. (10.19) associated with the flux phase which we found for space loops. In fact, both $W\left(\gamma_{t}\right)$ and the fluctuating
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-381.jpg?height=597&width=642&top_left_y=1454&top_left_x=520)

Figure 10.1 A space-time loop $\gamma_{t}$ of size $R \times \tau$, showing a static spinon (+1) and anti-spinon ( -1 ) separated by a distance $R$.
components of the space-like loops have a phase that decays like the perimeter of the loop, not its area. This is so because, unlike the case of confining gauge theories without dynamical matter fields, we have only gauge fields associated with a dynamical matter field. The gauge fields themselves do not have any other dynamics of their own. We will return to this important point in the next section.

There is an alternative way of understanding the products over closed loops. Consider the case of three spins, $\vec{S}(1), \vec{S}(2)$, and $\vec{S}(3)$. Let us form the mixed product $\hat{E}_{123}$ which Wen, Wilczek, and Zee call the chiral operator,

$$
\begin{equation*}
\hat{E}_{123} \equiv \vec{S}(1) \cdot(\vec{S}(2) \times \vec{S}(3)) \tag{10.25}
\end{equation*}
$$

Under time reversal $\hat{T}$ we have

$$
\begin{equation*}
\hat{T}^{-1} \vec{S} \hat{T}=-\vec{S} \tag{10.26}
\end{equation*}
$$

Thus $\hat{E}_{123}$ is odd under $\hat{T}$,

$$
\begin{equation*}
\hat{T}^{-1} \hat{E}_{123} \hat{T}=-\hat{E}_{123} \tag{10.27}
\end{equation*}
$$

Similarly, under parity, $\hat{P}$, which in two space dimensions is the same as reflection through a link, we have

$$
\begin{align*}
\hat{P}^{-1} \hat{E}_{123} \hat{P} & =\vec{S}(1) \cdot(\vec{S}(3) \times \vec{S}(2)) \\
& =+E_{132}=-\hat{E}_{123} \tag{10.28}
\end{align*}
$$

where we have exchanged sites 2 and 3, keeping site 1 fixed. Thus, for the three spins, parity implies turning an even permutation of the three spins into an odd permutation.

Let us now write $\hat{E}_{123}$ in terms of the link operators $\hat{\chi}(i, j) \equiv c_{\alpha}^{\dagger}(i) c_{\alpha}(j)$. Explicitly one finds (Wen et al., 1989)

$$
\begin{equation*}
\hat{E}_{123}=\frac{i}{4}(\hat{\chi}(1,2) \hat{\chi}(2,3) \hat{\chi}(3,1)-\hat{\chi}(1,3) \hat{\chi}(3,2) \hat{\chi}(2,1)) \tag{10.29}
\end{equation*}
$$

If we consider now four spins, $1,2,3$, and 4 , we get

$$
\begin{align*}
& \hat{\chi}(1,2) \hat{\chi}(2,3) \hat{\chi}(3,4) \hat{\chi}(4,1)-\hat{\chi}(1,4) \hat{\chi}(4,3) \hat{\chi}(3,2) \hat{\chi}(2,1) \\
& \quad=2 i\left(-\hat{E}_{123}-\hat{E}_{134}-\hat{E}_{124}+\hat{E}_{234}\right) \tag{10.30}
\end{align*}
$$

Thus, if $\hat{E}_{123}$ acquires an expectation value, then we should expect the spatial Wilson loops implied by Eq. (10.29) and Eq. (10.30) to exhibit a now-trivial phase (which can be regarded as a Berry phase). At the level of the saddle-point approximation, we expect

$$
\begin{align*}
\left\langle\hat{E}_{123}\right\rangle & =\frac{i}{4}\langle\hat{\chi}(1,2) \hat{\chi}(2,3) \hat{\chi}(3,1)-\hat{\chi}(1,3) \hat{\chi}(3,2) \hat{\chi}(2,1)\rangle \\
& \approx \frac{i}{4}\left(\frac{2 N \bar{\rho}}{J}\right)^{3}\left(e^{i \overline{\mathcal{B}}_{\Delta}}-e^{-i \overline{\mathcal{B}}_{\Delta}}\right) \\
& =-\frac{1}{2}\left(\frac{2 N \bar{\rho}}{J}\right)^{3} \sin \left(\overline{\mathcal{B}}_{\Delta}\right) \tag{10.31}
\end{align*}
$$

where $\overline{\mathcal{B}}_{\Delta}$ is the flux through the triangle with vertices at sites 1,2 , and 3 . Thus, in a chiral phase, $\hat{E}_{123}$ should have a non-zero expectation value. Please notice that for the non-chiral flux phase, $\overline{\mathcal{B}}_{\Delta}=\pi,\left\langle\hat{E}_{123}\right\rangle=0$ since in this case time-reversal invariance is not broken.

For a system with just three spins one-half we can get a very simple interpretation of this statement. For three spins one-half, the Hilbert space is $2^{3}=$ 8-dimensional. The total spin is $\vec{S}=\vec{S}(1)+\vec{S}(2)+\vec{S}(3)$. The quadratic Casimir operator $\vec{S}^{2}$ and, say, $S_{3}$ commute with each other. What is important is that they also commute with $\hat{E}_{123}$. Thus, $\vec{S}^{2}, S_{3}$, and $\hat{E}_{123}$ can be diagonalized simultaneously. I will refer to the eigenvalues of $\hat{E}_{123}$ as the chirality $\chi$ of the state. The states of the three spins will thus be labeled accordingly by $|S, M ; \chi\rangle$, where $S$ is the spin quantum number, $M$ is the total spin $z$-projection, and $\chi$ is the chirality. The total spin $S$ is either $1 / 2$ or $3 / 2$. The spin- $3 / 2$ sector can be obtained trivially by applying the lowering operator $S^{-}$to the highest-weight state $|\uparrow \uparrow \uparrow\rangle$ :

$$
\begin{align*}
|\uparrow \uparrow \uparrow\rangle & =\left|\frac{3}{2}, \frac{3}{2} ; 0\right\rangle \\
\left|\frac{3}{2}, \frac{3}{2}-M ; 0\right\rangle & =\left(S^{-}\right)^{M}\left|\frac{3}{2}, \frac{3}{2} ; 0\right\rangle \tag{10.32}
\end{align*}
$$

The state $|\uparrow \uparrow \uparrow\rangle$ has zero chirality since it is invariant under a permutation of any pair of spins. In terms of raising and lowering operators $S^{ \pm}$and $S_{3}, \hat{E}_{123}$ has the form

$$
\begin{align*}
\hat{E}_{123}=\frac{i}{2}( & -S^{-}(1) S^{+}(2) S_{3}(3)+S^{+}(1) S^{-}(2) S_{3}(3) \\
& +S^{-}(1) S_{3}(2) S^{+}(3)-S^{+}(1) S_{3}(2) S^{-}(3) \\
& \left.-S_{3}(1) S^{-}(2) S^{+}(3)+S_{3}(1) S^{+}(2) S^{-}(3)\right) \tag{10.33}
\end{align*}
$$

Clearly

$$
\begin{equation*}
\hat{E}_{123}\left|\frac{3}{2}, \frac{3}{2} ; \chi\right\rangle=\hat{E}_{123}|\uparrow \uparrow \uparrow\rangle=0 \tag{10.34}
\end{equation*}
$$

which proves that $\chi_{\uparrow \uparrow \uparrow}=0$. From the form of $\hat{E}_{123}$ in Eq. (10.34) we see that all the states in the same multiplet defined by $S$ and $M$ have the same chirality.

There are two, orthogonal, sectors with $S=1 / 2, M= \pm 1 / 2$. They differ by their chirality $\chi$. Consider the state $|+\rangle$, defined by the linear superposition

This state $|+\rangle$ is an eigenstate of $\hat{E}_{123}$ with eigenvalue $\chi_{+}$given by

$$
\begin{equation*}
\hat{E}_{123}|+\rangle=-\frac{1}{2} \sin \left(\frac{2 \pi}{3}\right)|+\rangle \tag{10.36}
\end{equation*}
$$

Thus $\chi_{+}=-\frac{1}{2} \sin (2 \pi / 3)$. Similarly the state $|-\rangle$,
has eigenvalue $\chi_{-}=+\frac{1}{2} \sin (2 \pi / 3)$. Both states, $|+\rangle$ and $|-\rangle$, have $S_{3}=+\frac{1}{2}$. Thus we denote $| \pm\rangle$ as the states $\left|\frac{1}{2}, \frac{1}{2} ; \pm\right\rangle$. Similarly the states with spin down can also have either chirality. These two remaining states are denoted by $\left|\frac{1}{2},-\frac{1}{2} ; \pm\right\rangle$.

The most singlet-like states, i.e. those with smallest spins, can thus be arranged to have non-zero chirality. By inspection of Eq. (10.35) and Eq. (10.37), we see that a state with non-zero chirality is a state in which a spin down moves around the triangle with a non-zero angular momentum $l= \pm 1$. Thus, a state with nonzero chirality is a state in which there is a non-zero spin current since a down spin is being transported, at a fixed rate, around the triangle.

For a macroscopic system, we can picture a situation in which $\left\langle\hat{E}_{123}\right\rangle$ is different from zero everywhere, as in a flux state, by saying that flux states are states in which there are non-vanishing orbital spin currents around every elementary plaquette. If we demand that the flux $\overline{\mathcal{B}}$ be uniform throughout the system, we are in fact requiring that the state should exhibit an orbital ferromagnetism of some sort (Volovik, 1988).

There is one interesting analogy here with the behavior of orbital angular momentum in the A phase of ${ }^{3} \mathrm{He}$. As is well known, ${ }^{3} \mathrm{He}$ becomes a superfluid by forming bound states of two ${ }^{3} \mathrm{He}$ atoms. The bound state has total spin $S=1$ (triplet) and orbital angular momentum $l=1$ (p-wave) (Leggett, 1975). In ${ }^{3} \mathrm{He} \mathrm{A}$, the orbital angular-momentum vector $\vec{l}$ and the spin $\vec{S}$ of the state are orthogonal to each other. In a thin-film geometry, the orbital angular momenta $\vec{l}$ are all parallel to each other and perpendicular to the surface of the film. This superfluid has orbital ferromagnetism.

### 10.2 Mean-field theory of chiral spin liquids

Let us consider the mean-field theory, i.e. the large- $N$ limit, of the frustrated Heisenberg antiferromagnet on a square lattice. We have two coupling constants: $J_{1}$ (for nearest neighbors) and $J_{2}$ (for next-nearest neighbors). We considered this problem in Section 8.1, in which we discussed the effects of $J_{2}$ on the Néel state.

The effective Lagrangian Eq. (8.41) can be easily generalized in order to include the effects of the $J_{2}$ coupling. All we have to do is decouple the next-nearestneighbor term using the same procedure as for the nearest-neighbor term (Wen et al., 1989). The Lagrangian density now is, including both $J_{1}$ and $J_{2}$,

$$
\begin{align*}
\mathcal{L}^{\prime}= & c_{\sigma}^{\dagger}(x)\left(i \partial_{t}+\mu\right) c_{\sigma}(x)+\mathcal{A}_{0}(x)\left(c_{\alpha}^{\dagger}(x) c_{\sigma}(x)-\frac{N}{2}\right) \\
& -\frac{N}{J_{1}}\left|\chi_{j}(x)\right|^{2}-\frac{N}{J_{2}}\left|\chi_{j^{\prime}}(x)\right|^{2} \\
& +c_{\sigma}^{\dagger}(\vec{x}, t) \chi_{j}(\vec{x}, t) c_{\sigma}\left(\vec{x}+\hat{e}_{j}, t\right)+\text { h.c. } \\
& +c_{\sigma}^{\dagger}(\vec{x}, t) \chi_{j^{\prime}}(\vec{x}, t) c_{\sigma}\left(\vec{x}+\hat{e}_{1}+j^{\prime} \hat{e}_{2}, t\right)+\text { h.c. } \tag{10.38}
\end{align*}
$$

where $j^{\prime}= \pm$.
The saddle-point procedure can be carried out along very similar lines. At this level, we assume that the amplitudes $\bar{\chi}_{j}(\vec{x}, t)$ and $\bar{\chi}_{j^{\prime}}(\vec{x}, t)$ are constant in time and as uniform as possible in space. If we choose the gauge of Eq. (8.74), as in our earlier discussion of the flux phase, we get (Wen et al., 1989)

$$
\begin{array}{rlr}
\bar{\chi}_{1}(\vec{x})=\bar{\rho} e^{+i \frac{\pi}{2}}, & \bar{\chi}_{2}(\vec{x})=\bar{\rho} e^{-\sigma i \frac{\pi}{2}} \\
\bar{\chi}_{+}(\vec{x})=\bar{\lambda} e^{+\sigma i \frac{\pi}{2}}, & \bar{\chi}_{-}(\vec{x})=\bar{\lambda} e^{+\sigma i \frac{\pi}{2}} \tag{10.39}
\end{array}
$$

with $\sigma=(-1)^{x_{1}}$. Notice that the flux per plaquette $\mathcal{B}_{\text {plaquette }}=\pi$, but for the triangles we have $\mathcal{B}_{\Delta}=+\pi / 2$ for $\bar{\lambda}>0$ and $\mathcal{B}_{\Delta}=-\pi / 2$ for $\bar{\lambda}<0$ (see Fig. 10.2).
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-385.jpg?height=671&width=645&top_left_y=1322&top_left_x=528)

Figure 10.2 Gauge-field conventions for a chiral spin state on a frustrated square lattice. The lower-left corner is an even-even site. The arrows on the links represent a phase of $\pi / 2$. The flux on a plaquette is $\pi$ if the lower-left corner is on an even column. Otherwise it is $-\pi$.

Thus, this state is chiral. At this level of approximation, the spinons behave like fermions moving on a frustrated lattice with the amplitudes listed in Eq. (10.39). Since the flux on the triangles is $\pm \pi / 2$, some of the amplitudes must be complex no matter what gauge we choose. Thus, the effective one-particle Hamiltonian which controls the motion of spinons is complex (but still hermitian!). This means that time-reversal invariance (and parity) are broken. Since in this system we do not have any terms that explicitly break time-reversal invariance, what we are looking for is states with spontaneously broken time-reversal invariance and parity.

Using once again the notation of Section 8.5 , and the symbol $\Delta_{i}^{+}$, with $i=1,2$, for the symmetric lattice-difference operator $\Delta_{i}^{+} f(\vec{x}) \equiv f\left(\vec{x}+\hat{e}_{i}\right)-f\left(\vec{x}-\hat{e}_{i}\right)$, we can write down the equations of motion Eq. (8.76) including the effects of $\bar{\lambda}$. The new equations of motion are

$$
\begin{align*}
i \partial_{t} f_{\sigma}^{(1)}(\vec{x})= & -i \bar{\rho} \Delta_{1} f_{\sigma}^{(2)}(\vec{x})+i \bar{\rho} \Delta_{2} f_{\sigma}^{(3)}(\vec{x}) \\
& -i \bar{\lambda} \Delta_{2}^{+} f_{\sigma}^{(4)}\left(\vec{x}+\hat{e}_{1}\right)-i \bar{\lambda} \Delta_{2}^{+} f_{\sigma}^{(4)}\left(\vec{x}-\hat{e}_{1}\right) \\
i \partial_{t} f_{\sigma}^{(2)}\left(\vec{x}+\hat{e}_{1}\right)= & -i \bar{\rho} \Delta_{1} f_{\sigma}^{(1)}\left(\vec{x}+\hat{e}_{1}\right)-i \bar{\rho} \Delta_{2} f_{\sigma}^{(4)}\left(\vec{x}+\hat{e}_{1}\right) \\
& +i \bar{\lambda} \Delta_{2}^{+} f_{\sigma}^{(3)}\left(\vec{x}+2 \hat{e}_{1}\right)+i \bar{\lambda} \Delta_{2}^{+} f_{\sigma}^{(3)}(\vec{x}) \\
i \partial_{t} f_{\sigma}^{(3)}\left(\vec{x}+\hat{e}_{2}\right)= & -i \bar{\rho} \Delta_{1} f_{\sigma}^{(4)}\left(\vec{x}+\hat{e}_{2}\right)+i \bar{\rho} \Delta_{2} f_{\sigma}^{(1)}\left(\vec{x}+\hat{e}_{2}\right) \\
& -i \bar{\lambda} \Delta_{2}^{+} f_{\sigma}^{(2)}\left(\vec{x}+\hat{e}_{2}+\hat{e}_{1}\right)-i \bar{\lambda} \Delta_{2}^{+} f_{\sigma}^{(2)}\left(\vec{x}+\hat{e}_{2}-\hat{e}_{1}\right) \\
i \partial_{t} f_{\sigma}^{(4)}\left(\vec{x}+\hat{e}_{1}+\hat{e}_{2}\right)= & -i \bar{\rho} \Delta_{1} f_{\sigma}^{(3)}\left(\vec{x}+\hat{e}_{1}+\hat{e}_{2}\right)-i \bar{\rho} \Delta_{2} f_{\sigma}^{(2)}\left(\vec{x}+\hat{e}_{1}+\hat{e}_{2}\right) \\
& +i \bar{\lambda} \Delta_{2}^{+} f_{\sigma}^{(1)}\left(\vec{x}+2 \hat{e}_{1}+\hat{e}_{2}\right)+i \bar{\lambda} \Delta_{2}^{+} f_{\sigma}^{(1)}\left(\vec{x}+\hat{e}_{2}\right) \tag{10.40}
\end{align*}
$$

In Fourier space, Eq. (10.40) becomes
$i \partial_{t} f_{\sigma}^{(1)}(\vec{p})=2 \bar{\rho} \sin p_{1} f_{\sigma}^{(2)}(\vec{p})-2 \bar{\rho} \sin p_{2} f_{\sigma}^{(3)}(\vec{p})-4 i \bar{\lambda} \cos p_{1} \cos p_{2} f_{\sigma}^{(4)}(\vec{p})$ $i \partial_{t} f_{\sigma}^{(2)}(\vec{p})=2 \bar{\rho} \sin p_{1} f_{\sigma}^{(1)}(\vec{p})+2 \bar{\rho} \sin p_{2} f_{\sigma}^{(4)}(\vec{p})+4 i \bar{\lambda} \cos p_{1} \cos p_{2} f_{\sigma}^{(3)}(\vec{p})$ $i \partial_{t} f_{\sigma}^{(3)}(\vec{p})=2 \bar{\rho} \sin p_{1} f_{\sigma}^{(4)}(\vec{p})-2 \bar{\rho} \sin p_{2} f_{\sigma}^{(1)}(\vec{p})-4 i \bar{\lambda} \cos p_{1} \cos p_{2} f_{\sigma}^{(2)}(\vec{p})$ $i \partial_{t} f_{\sigma}^{(4)}(\vec{p})=2 \bar{\rho} \sin p_{1} f_{\sigma}^{(3)}(\vec{p})+2 \bar{\rho} \sin p_{2} f_{\sigma}^{(2)}(\vec{p})+4 i \bar{\lambda} \cos p_{1} \cos p_{2} f_{\sigma}^{(1)}(\vec{p})$

As with Eq. (8.80) and Eq. (8.81), we define the spinors $u_{\sigma}^{(a)}$ and $v_{\sigma}^{(a)}(a=1,2)$

$$
\begin{align*}
& u_{\sigma}^{(1)}(\vec{p})=f_{\sigma}^{(1)}(\vec{p})+f_{\sigma}^{(2)}(\vec{p})  \tag{10.42}\\
& u_{\sigma}^{(2)}(\vec{p})=f_{\sigma}^{(3)}(\vec{p})-f_{\sigma}^{(4)}(\vec{p}) \tag{10.43}
\end{align*}
$$

and

$$
\begin{align*}
v_{\sigma}^{(1)}(\vec{p}) & =f_{\sigma}^{(3)}(\vec{p})+f_{\sigma}^{(4)}(\vec{p})  \tag{10.44}\\
v_{\sigma}^{(2)}(\vec{p}) & =f_{\sigma}^{(1)}(\vec{p})-f_{\sigma}^{(2)}(\vec{p}) \tag{10.45}
\end{align*}
$$

In matrix notation, we can now write $(a, b=1,2)$

$$
\begin{equation*}
i \partial_{t} u_{\sigma}^{(a)}(\vec{p})=\left(2 \bar{\rho} \sin p_{1} \sigma_{3}-2 \bar{\rho} \sin p_{2} \sigma_{1}-4 \bar{\lambda} \cos p_{1} \cos p_{2} \sigma_{2}\right)_{a b} u_{\sigma}^{(b)}(\vec{p}) \tag{10.46}
\end{equation*}
$$

where $\sigma_{1}, \sigma_{2}$, and $\sigma_{3}$ are the three Pauli matrices. The other spinor, $v_{\sigma}^{(a)}(\vec{p})$, obeys the same equation.

We can also write Eq. (10.46) in a Dirac form by defining the $\alpha$ and $\gamma$ matrices through

$$
\begin{equation*}
\alpha_{1} \equiv \gamma_{0} \gamma_{1} \equiv+\sigma_{3}, \quad \alpha_{2} \equiv \gamma_{0} \gamma_{2} \equiv-\sigma_{1}, \quad \beta \equiv \gamma_{0} \equiv-\sigma_{2} \tag{10.47}
\end{equation*}
$$

In this notation, the equation of motion Eq. (10.46) takes the Dirac form

$$
\begin{equation*}
i \partial_{t} u_{\sigma}^{(a)}(\vec{p})=\left(2 \bar{\rho} \sum_{i=1,2} \sin p_{i} \alpha_{i}+4 \bar{\lambda} \cos p_{1} \cos p_{2} \beta\right)_{a b} u_{\sigma}^{(b)}(\vec{p}) \tag{10.48}
\end{equation*}
$$

Thus, in the small-momentum limit $|\vec{p}| \rightarrow 0$, we obtain the equation for two Dirac spinors, $u_{\sigma}$ and $v_{\sigma}$, in the continuum with the same Fermi velocity $v_{\mathrm{F}}=2 a_{0} \bar{\rho}$ and, more importantly, the same effective mass $m_{\mathrm{c}}=\bar{\lambda} /\left(\bar{\rho}^{2} a_{0}^{2}\right)$. Notice that both species (or "valleys" in the jargon of graphene), $u_{\sigma}$ and $v_{\sigma}$, have the same sign of the effective mass $m_{\mathrm{c}}$. The one-particle Hamiltonian

$$
\begin{equation*}
H_{\text {chiral }}(\vec{p})=2 \bar{\rho} \sum_{i=1,2} \sin p_{i} \alpha_{i}+4 \bar{\lambda} \cos p_{1} \cos p_{2} \beta \tag{10.49}
\end{equation*}
$$

is complex (and hermitian) since all three Pauli matrices are present. This fact is, in turn, the result of the breaking of time-reversal invariance. We will see in another section of this chapter that this result gives rise to a parity anomaly, which greatly changes the behavior of the low-lying excitations.

The eigenvalues of $H_{\text {chiral }}$ are

$$
\begin{equation*}
\epsilon(\vec{p})= \pm \sqrt{4 \bar{\rho}^{2}\left(\sin ^{2} p_{1}+\sin ^{2} p_{2}\right)+16 \bar{\lambda}^{2} \cos ^{2} p_{1} \cos ^{2} p_{2}} \tag{10.50}
\end{equation*}
$$

This is what we found for the flux phase, Eq. (8.86), except for a mass term proportional to the next-nearest amplitude $\bar{\lambda}$. The two branches nearly touch at $\left(p_{1}, p_{2}\right)=(0,0)$.

Thus far, we have not discussed energetics. Wen, Wilczek, and Zee (Wen et al., 1989) studied this problem in some detail. They found that, as $J_{2}$ increases, the energy of the chiral state drops below that of the flux state and becomes close to the energy of the ordered dimer state. For the square lattice, even in the classically frustrated limit $J_{1}=2 J_{2}$, it appears that the dimer states are still preferred, although not by much. Furthermore, at least in the large- $N$ limit, the Néel states are not favored when $J_{1} \approx 2 J_{2}$. There is numerical evidence, from the exact diagonalization of small clusters of up to 30 sites, that the Néel states are not favored for $J_{1} \approx 2 J_{2}$. In fact, at least for such small systems, the columnar states appear
to be the ground states in this regime (Dagotto and Moreo, 1989). Thus, although the chiral states are locally stable, they do not appear to be the global minimum of energy. But it is quite conceivable to imagine slight modifications of the Hamiltonian that will drive the mean-field ground-state energy of the chiral states down and make them a global minimum. Results from more recent density-matrix RG studies strongly indicate that there is a time-reversal-invariant $\mathbb{Z}_{2}$ spin-liquid state in the strong-frustration regime (Jiang et al., 2012).

What appears to be more serious is the fact that the chiral mean-field theory has low-lying excited states, namely the spinons, which are not gauge-invariant. The removal of gauge-non-invariant states is likely to raise the energy of the ground state. We will come back to these issues in the next section.

Finally, it is instructive to consider the effects of a Peierls gap, i.e. the gap which appears in the presence of a columnar state. This problem was studied by Dombre and Kotliar (1989). Consider a columnar state of the type depicted in Fig. 8.12(a). There are four such states. With the choice of gauge, Eq. (10.39), the simplest case to consider has a columnar state with the "dimers" on the $y$ axis and the columns running along the $x$ axis. We can represent such a state by a modulation of the amplitude $\bar{\rho}_{j}(\vec{x})$ such that $\bar{\rho}_{j}(\vec{x})$ equals $\bar{\rho}+\delta \bar{\rho}$ if there is a dimer in the bond ( $\vec{x}, \vec{x}+\hat{e}_{j}$ ) and equals $\bar{\rho}-\delta \bar{\rho}$ if there isn't a dimer in that bond. The next-nearest-neighbor hopping terms have the same form as in Eq. (10.39). Thus, we can consider the competition between the Peierls state and the chiral state. We will see that, unlike the chiral state, which breaks parity and thus leads to a complex Hamiltonian, the Peierls state does not break parity. If we assume that the selected Peierls state has the (vertical) dimers with their lower endpoints on even rows, the modified equations of motion are

$$
\begin{align*}
i \partial_{t} f_{\sigma}^{(1)}(\vec{x})= & -i \bar{\rho} \Delta_{1} f_{\sigma}^{(2)}(\vec{x})+i \bar{\rho} \Delta_{2} f_{\sigma}^{(3)}(\vec{x}) \\
& +i \delta \bar{\rho} \Delta_{2}^{+} f_{\sigma}^{(3)}(\vec{x}) \\
& -i \bar{\lambda} \Delta_{2}^{+} f_{\sigma}^{(4)}\left(\vec{x}+\hat{e}_{1}\right)-i \bar{\lambda} \Delta_{2}^{+} f_{\sigma}^{(4)}\left(\vec{x}-\hat{e}_{1}\right) \\
i \partial_{t} f_{\sigma}^{(2)}\left(\vec{x}+\hat{e}_{1}\right)= & -i \bar{\rho} \Delta_{1} f_{\sigma}^{(1)}\left(\vec{x}+\hat{e}_{1}\right)-i \bar{\rho} \Delta_{2} f_{\sigma}^{(4)}\left(\vec{x}+\hat{e}_{1}\right) \\
& -i \delta \bar{\rho} \Delta_{2}^{+} f_{\sigma}^{(4)}\left(\vec{x}+\hat{e}_{1}\right) \\
& +i \bar{\lambda} \Delta_{2}^{+} f_{\sigma}^{(3)}\left(\vec{x}+2 \hat{e}_{1}\right)+i \bar{\lambda} \Delta_{2}^{+} f_{\sigma}^{(3)}(\vec{x}) \\
i \partial_{t} f_{\sigma}^{(3)}\left(\vec{x}+\hat{e}_{2}\right)= & -i \bar{\rho} \Delta_{1} f_{\sigma}^{(4)}\left(\vec{x}+\hat{e}_{2}\right)+i \bar{\rho} \Delta_{2} f_{\sigma}^{(1)}\left(\vec{x}+\hat{e}_{2}\right)  \tag{10.51}\\
& -i \delta \bar{\rho} \Delta_{2}^{+} f_{\sigma}^{(1)}\left(\vec{x}+\hat{e}_{2}\right) \\
& -i \bar{\lambda} \Delta_{2}^{+} f_{\sigma}^{(2)}\left(\vec{x}+\hat{e}_{2}+\hat{e}_{1}\right)-i \bar{\lambda} \Delta_{2}^{+} f_{\sigma}^{(2)}\left(\vec{x}+\hat{e}_{2}-\hat{e}_{1}\right) \\
i \partial_{t} f_{\sigma}^{(4)}\left(\vec{x}+\hat{e}_{1}+\hat{e}_{2}\right)= & -i \bar{\rho} \Delta_{1} f_{\sigma}^{(3)}\left(\vec{x}+\hat{e}_{1}+\hat{e}_{2}\right)-i \bar{\rho} \Delta_{2} f_{\sigma}^{(2)}\left(\vec{x}+\hat{e}_{1}+\hat{e}_{2}\right) \\
& +i \delta \bar{\rho} \Delta_{2}^{+} f_{\sigma}^{(2)}\left(\vec{x}+\hat{e}_{1}+\hat{e}_{2}\right) \\
& +i \bar{\lambda} \Delta_{2}^{+} f_{\sigma}^{(1)}\left(\vec{x}+2 \hat{e}_{1}+\hat{e}_{2}\right)+i \bar{\lambda} \Delta_{2}^{+} f_{\sigma}^{(1)}\left(\vec{x}+\hat{e}_{2}\right)
\end{align*}
$$

In terms of the spinors $u_{\sigma}$ and $v_{\sigma}$ of Eq. (10.43) and Eq. (10.45), we get a modified mass term, which is different for $u_{\sigma}$ and $v_{\sigma}$.

The one-particle Hamiltonian now is

$$
\begin{equation*}
H_{\text {Peierls }}(\vec{p})=2 \bar{\rho} \sum_{i=1,2} \sin p_{i} \alpha_{i}+\left(4 \bar{\lambda} \cos p_{1} \cos p_{2} \pm 2 \delta \bar{\rho} \cos p_{2}\right) \beta \tag{10.52}
\end{equation*}
$$

where the $+(-)$ sign stands for the $u_{\sigma}\left(v_{\sigma}\right)$ spinor. Thus, the low-energy spectrum still looks like two massive Dirac fermions that are propagating at the same speed but with different masses. What matters here is that the sign of the mass term depends on the relative strengths of $\delta \bar{\rho}$ and $\bar{\lambda}$. Indeed, for $|\vec{p}| \rightarrow 0$, we find that $H_{\text {Peierls }}(\vec{p})$ takes the form

$$
\begin{equation*}
H_{\text {Peierls }}(\vec{p}) \approx 2 \bar{\rho}\left(\sum_{i=1,2} \alpha_{i} p_{i}+\left(m_{\mathrm{c}} \pm \delta m\right) \beta\right) \tag{10.53}
\end{equation*}
$$

where $m_{\mathrm{c}}$ is the chiral mass and $\delta m$ is the splitting $\left(a_{0} \equiv 1\right)$

$$
\begin{equation*}
m_{\mathrm{c}}=\frac{\bar{\lambda}}{\bar{\rho}^{2}}, \quad \delta m=\frac{\delta \bar{\rho}}{2 \bar{\rho}^{2}} \tag{10.54}
\end{equation*}
$$

Hence, for $\delta m<m_{\mathrm{c}}$, the $u_{\alpha}$ and $v_{\alpha}$ have different masses $m_{u}$ and $m_{v}\left(m_{u}>\right.$ $m_{v}$, for $\delta \bar{\rho}>0$ ), both with the same sign. Conversely, for $\delta m>m_{\mathrm{c}}, m_{u}$ and $m_{v}$ are not only different but also have opposite signs. If $\bar{\lambda}$ is set to zero (i.e. there is no chiral state), there is a perfect symmetry. Thus, the Peierls mass does not lead to a complex Hamiltonian and consequently it does not break parity. We will see later in this chapter that the relative sign of the masses of the elementary excitations has very important consequences for the overall behavior of the system in the generalized flux states. The eigenvalues of $H_{\text {Peierls }}$ are

$$
\begin{equation*}
\epsilon(\vec{p})= \pm \sqrt{4 \bar{\rho}^{2}\left(\sin ^{2} p_{1}+\sin ^{2} p_{2}\right)+\left(4 \bar{\lambda} \cos p_{1} \cos p_{2} \pm 2 \delta \bar{\rho} \cos p_{2}\right)^{2}} \tag{10.55}
\end{equation*}
$$

### 10.3 Fluctuations and flux phases

So far we have considered only flux states at the mean-field level and fluctuations have not been taken into account. We have already pointed out that this approach is not consistent, since the fluctuations of the gauge fields, unlike the fluctuations of the amplitude, are completely out of control.

We shall consider first amplitude fluctuations around a flux phase with flux $\pi$ per plaquette. The Lagrangian density of Eq. (10.38) has degrees of freedom which, in addition to inducing both chiral and non-chiral mass terms in the low-energy sector of the theory, can effectively drive the system into a highly anisotropic state, a dimer state. Since we are interested in understanding how these
different mechanisms compete with each other, it is convenient to parametrize the fluctuations of the bond lengths in such a way that these processes are most apparent. Thus, we are led to consider configurations in which the bond amplitudes vary slowly at the scale of the lattice spacing (I will refer to these processes as being uniform or unstaggered). In addition, there are fluctuations that vary rapidly at the scale of the lattice constant. These fast fluctuations induce scattering processes that mix different sublattices very strongly. We will refer to them as staggered amplitude fluctuations. Hence, the bond amplitude for the bond $\left(\vec{x}, \vec{x}+\hat{e}_{j}\right)$ has the form

$$
\begin{equation*}
\rho_{j}(\vec{x})=\rho_{j}^{\mathrm{u}}(\vec{x})+\rho_{j}^{\mathrm{s}}(\vec{x}) \tag{10.56}
\end{equation*}
$$

where $\rho_{j}^{\mathrm{u}}(\vec{x})$ is the unstaggered (or uniform) amplitude and $\rho_{j}^{\mathrm{s}}(\vec{x})$ is the staggered amplitude. While $\rho_{j}^{\mathrm{u}}(\vec{x})$ is slowly varying, $\rho_{j}^{\mathrm{s}}(\vec{x})$ changes its sign from one bond to the next. Since we anticipate that the system may choose an average uniform bond length $\bar{\rho}_{j}$, we write $\rho_{j}^{\mathrm{u}}(\vec{x})$ and $\rho_{j}^{\mathrm{s}}(\vec{x})$ in the form

$$
\begin{align*}
\rho_{j}^{\mathrm{u}}(\vec{x}) & =\bar{\rho}_{j}\left(1+\delta \rho_{j}^{\mathrm{u}}(\vec{x})\right)  \tag{10.57}\\
\rho_{j}^{\mathrm{s}}(\vec{x}) & =\delta \rho_{j}^{\mathrm{s}}(\vec{x})
\end{align*}
$$

Although these amplitudes vary very slowly and over long wavelengths, they can be significantly different from each other. Thus the effective Dirac fermions may have different Fermi velocities along the $x_{1}$ and $x_{2}$ directions. More importantly, since these generalized Heisenberg models do not have any intrinsic length scale, apart from the lattice constant itself, there is an essential "softness" in the system, which favors strong anisotropy. This can be clearly seen by writing down the spinon energy of such a state, which for a non-chiral state has the form (see Eq. (10.55))

$$
\begin{equation*}
\epsilon(\vec{p})= \pm \sqrt{\left(2 \rho_{1}^{\mathrm{u}} \sin p_{1}\right)^{2}+\left(2 \rho_{2}^{\mathrm{u}} \sin p_{2}\right)^{2}+\left(2 \delta \rho_{2}^{\mathrm{s}} \cos p_{2}\right)^{2}} \tag{10.58}
\end{equation*}
$$

This energy can be made large and negative by setting

$$
\begin{equation*}
\delta \rho_{1}^{u}=-1, \quad\left|\delta \rho_{2}^{\mathrm{s}}\right|=\left|\rho_{2}^{\mathrm{u}}\right| \tag{10.59}
\end{equation*}
$$

which is the dimer limit. The symmetric amplitude $\delta \rho_{j}^{\mathrm{u}}$ cannot grow any larger than this without driving the total amplitude into negative values. Thus, this is the saturation limit. In this limit, the spin gap is infinitely large since all spinons are in singlet bond states one lattice spacing long, namely the valence-bond states. The fluctuations of the gauge fields only cause dimer rearrangements, as in our discussion of the QDM. This phase does not break time-reversal invariance.

The tendency to a collapse towards dimers can be suppressed by a suitable local modification of the Hamiltonian (Marston and Affleck, 1989). All that is needed is to have a scale $\bar{\rho}_{0}$ for the average bond amplitude around which they fluctuate. In the $\mathrm{SU}(N)$ model, this involves an interaction that is quartic in the
spins. This possibility is not available for the case of interest, the nearest-neighbor spin one-half Heisenberg model, but it may occur in further-neighbor interactions. There is strong numerical evidence that strong enough four-spin (ring-exchange) interactions do lead to a dimerized state (Sandvik, 2010).

Let us assume for the moment that dimer collapse has been avoided. Now the flux phase may be unstable against the development of both chiral and nonchiral mass terms. In turn, it is easy to write down an effective theory for the low-energy modes. The effective Lagrangian density should include the (doubled) spinon modes ( $u_{\alpha}$ and $v_{\alpha}$ ). It should also contain both staggered amplitudes, which, after normalization, can be denoted by two real Bose fields, $\phi_{1}$ and $\phi_{2}$. The chiral modes are also bosonic and real and can be denoted by $\chi$. The effective Lagrangian density should then have the form

$$
\begin{align*}
\mathcal{L}= & \left(\bar{u}_{\alpha} i \gamma_{\mu} D_{\mu} u_{\alpha}+\bar{v}_{\alpha} i \gamma_{\mu} D_{\mu} v_{\alpha}\right) \\
& -\phi_{1}\left(\bar{u}_{\alpha} v_{\alpha}+\bar{v}_{\alpha} u_{\alpha}\right)-\phi_{2}\left(\bar{u}_{\alpha} u_{\alpha}-\bar{v}_{\alpha} v_{\alpha}\right)-\frac{N}{J} U\left(\phi_{1}^{2}, \phi_{2}^{2}\right) \\
& -\chi\left(\bar{u}_{\alpha} u_{\alpha}+\bar{v}_{\alpha} v_{\alpha}\right)-\frac{N}{J^{\prime}} U^{\prime}\left(\chi^{2}\right) \tag{10.60}
\end{align*}
$$

where the potentials $U$ and $U^{\prime}$ are even functions of $\phi_{1}, \phi_{2}$, and $\chi$ separately. The phases of the bond amplitudes, the gauge fields, have been included through the covariant derivatives $D_{\mu}$,

$$
\begin{equation*}
D_{\mu}=\partial_{\mu}-i \mathcal{A}_{\mu} \tag{10.61}
\end{equation*}
$$

The potentials $U$ and $U^{\prime}$ are assumed to have a sharp minimum at $\phi_{1}=\phi_{2}=$ $\chi=0$ and to grow rapidly as the values of their arguments increase. The latter condition is needed in order to avoid collapse towards a dimer state. The requirement that the potentials $U$ and $U^{\prime}$ be even functions of their arguments implies a four-fold degeneracy of the ground state. In the absence of collapse the symmetric amplitude modes, which represent local fluctuations of the length scale (i.e. the Fermi velocity) and of anisotropy, do not change the qualitative physical properties of the system. The assumption that there is a well-defined, and sharp, average bond amplitude $\bar{\rho}_{0}$ means that local dilatations and shears are strongly suppressed. When integrated out, these fluctuations merely lead to effective interactions of the fermions that involve operators with many derivatives. In an RG sense, such terms are irrelevant. This is equivalent to saying that, if the physics of the system is correctly described by the continuum model, then operators with many derivatives may become important only if the fluctuations have large Fourier components at large values of the momentum. However, the main assumption of the continuum model is precisely that such Fourier components are small, since only smooth configurations are correctly described by this model. Under these assumptions, the
effective Lagrangian density of Eq. (10.60) is a good description of the physics of the system.

The fluctuations which are described in detail by Eq. (10.60) are the fluctuations of the gauge field $\mathcal{A}_{\mu}$ and of the amplitudes $\phi_{i}$ and $\chi$. The fluctuations of the amplitudes $\phi_{i}$ and $\chi$ lead to a phase transition, in which one or several amplitudes have a non-zero expectation value, only if $N$ is not too large. This can be checked by looking for solutions of the saddle-point equations. These equations, in the absence of a dimer solution, do not have a solution with $\left\langle\phi_{0}\right\rangle \neq 0($ or $\langle\chi\rangle \neq 0)$ unless $N$ is smaller than some critical value $N_{\mathrm{c}}$. The value of $N_{\mathrm{c}}$ depends on the details of the model. This regime is still described correctly by the $1 / N$ expansion. Thus, unless one happens to be interested in unphysically large values of $N$, one of $\left\langle\phi_{1}\right\rangle,\left\langle\phi_{2}\right\rangle$ or $\langle\chi\rangle$ will become non-zero. The fluctuations around this state are small and have very short correlation lengths.

From this discussion, we may conclude that, unless $N>N_{\mathrm{c}} \gg 1$, there are spinons in the spectrum but they have a finite gap. This result would hold if we can ignore the fact that the gauge group is compact and hence that there are magneticmonopole configurations in its space of states. Provided that this can be done consistently, we conclude that, for $N>N_{\mathrm{c}}$, the spinons would be massless (i.e. there is no gap) and deconfined. Thus this model appears to predict the existence of electrically neutral spin-bearing excitations. However, this conclusion is not well founded, since the fluctuations of the gauge field $\mathcal{A}_{\mu}$ have been ignored altogether. A massless deconfined phase may still occur in the large- $N$ limit since this is equivalent to increasing the number of flavors rather than the rank of the gauge group. In this limit the monopole operators are irrelevant (Metlitski et al., 2008), and the compact nature of the gauge group is not important. However, monopoles play a dominant role for smaller values of $N$. This problem has been investigated in detail by Monte Carlo simulations. The most recent results indicate that for $N \leq 4$ the ground state is gapped and confining (Armour et al., 2011). We will also see in the next sections that in states that break time-reversal invariance monopoles are suppressed and the results of the large- $N$ theory are at least qualitatively correct even for smaller values of $N$.

What are the effects of the gauge fields $\mathcal{A}_{\mu}$ ? We will examine this problem now assuming that the fluctuations of the gauge fields are arbitrary but smooth enough so that we can ignore monopole configurations. A simple inspection of the effective Lagrangian density, Eq. (10.60), shows that the gauge fields appear only in the kinetic-energy term of the spinons, through the covariant derivatives. There is no separate term in this Lagrangian density that will control the fluctuations of the gauge field, such as $F_{\mu \nu} F^{\mu \nu}$ in electrodynamics. Since the Lagrangian density is linear in the gauge field $\mathcal{A}_{\mu}$, we can integrate the gauge fields out exactly. The integral over the gauge field $\mathcal{A}_{\mu}$ yields

$$
\begin{align*}
\int \mathcal{D} \mathcal{A}_{\mu} e^{i S\left[u, v, \phi_{1}, \phi_{2}, \chi, \mathcal{A}_{\mu}\right]}= & e^{i S\left[u, v, \phi_{1}, \phi_{2}, \chi\right]} \\
& \times \int \mathcal{D} \mathcal{A}_{\mu} \exp \left(i \int d^{3} x \mathcal{A}_{\mu} J^{\mu}\right) \tag{10.62}
\end{align*}
$$

where $J^{\mu}$ is the total spinon gauge current density

$$
\begin{equation*}
J^{\mu}=\bar{u}_{\alpha} \gamma^{\mu} u_{\alpha}+\bar{v}_{\alpha} \gamma^{\mu} v_{\alpha} \tag{10.63}
\end{equation*}
$$

The last factor in Eq. (10.60) shows that the integral over the gauge field $\mathcal{A}_{\mu}$ is just a constraint

$$
\begin{equation*}
\int \mathcal{D} \mathcal{A}_{\mu} \exp \left(i \int d^{3} x \mathcal{A}_{\mu} J^{\mu}\right)=\prod_{x} \delta^{3}\left(J^{\mu}(\vec{x}, t)\right) \tag{10.64}
\end{equation*}
$$

Hence, the only states allowed in the Hilbert space, let's call them |Phys $\rangle$, satisfy

$$
\begin{equation*}
\left.J^{\mu}(\vec{x}, t) \mid \text { Phys }\right\rangle=0 \tag{10.65}
\end{equation*}
$$

which is a local condition. In components, this constraint is equivalent to the statement that the normal-ordered spinon density $j_{0}(\vec{x}, t)$,

$$
\begin{equation*}
j_{0}(\vec{x}, t) \equiv \rho(\vec{x}, t)-\langle\rho(\vec{x}, t)\rangle \tag{10.66}
\end{equation*}
$$

with $\rho(\vec{x}, t)$ being the electron density, and the currents $j_{i}(\vec{x}, t)(i=1,2)$ annihilate the physical states. Thus, the condition of $N / 2$ occupancy is exactly satisfied. However, this also means that the allowed states carry zero spinon current and that there are no states in the spectrum of this system carrying the spinon quantum numbers, i.e. spin one-half in the $\mathrm{SU}(2)$ case. As a result, these spin-liquid phases do not have spinon states in their spectra. This is not to say that the spinons do not have a role. Gauge-invariant spinon bound states do not have spinon quantum numbers and hence are allowed. In spin one-half language, these states are either spin singlets (valence bonds) or triplets. These bound states have large energy gaps, with the singlets being the states of lowest energy.

### 10.4 Chiral spin liquids and Chern-Simons gauge theory

In Section 10.1 we encountered a state, the chiral spin state (CSS), which spontaneously violates time reversal and parity invariance. We will see in this chapter that this feature of the CSS has far-reaching novel consequences. There are other states of condensed matter in which time-reversal invariance is broken. A ferromagnet has such a property. However, unlike the CSS, the ferromagnetic ground state does not violate parity, and its properties are quite different from what we will find in the CSS.

A system of electrons moving on a plane, in the presence of a perpendicular magnetic field, does not have time-reversal invariance. It is explicitly broken by the magnetic field. If the electrons are spin-polarized, then in some sense parity is also broken due to the orbital nature of the coupling. The results are the fascinating properties of the quantum Hall effect (QHE), in its integer and fractional forms. In this chapter and the coming ones, we will discuss the deep connections between the CSS and the QHE. We will see that, as a result of the combined effect of violation of parity and time-reversal invariance, both systems have an extra term, the so-called Chern-Simons term, in the effective Lagrangians for their low-energy degrees of freedom. These Lagrangians also provide a natural phenomenological description of the physics. In particular, both systems have low-energy excitations with fractional statistics or anyons. We will see in the next chapter that, if the system is compressible, these excitations lead to a novel form of superconductivity called anyon superconductivity. Deep and far-reaching connections among the CSS, the QHE, the mathematical theories of knots, and, more generally, topological field theory will be described. We begin this chapter by going beyond the discussion of the previous section on the fluctuations around a CSS.

Under what circumstances should we expect to get "free spinons," i.e. states with finite energy that carry spinon quantum numbers? The arguments at the end of the last section show that this is not possible unless the fluctuations of the gauge fields are somehow suppressed. Terms of the $F_{\mu \nu}^{2}$ type do not efficiently suppress fluctuations. Gauge-field mass terms are, on the other hand, very efficient at suppressing fluctuations. In $(2+1)$ space-time dimensions two gauge-field mass terms can arise. The simplest one, $A_{\mu}^{2}$, explicitly breaks the gauge symmetry and can arise only if the system becomes superconducting. This is a possible scenario at non-zero hole density but not at half-filling.

In $(2+1)$ dimensions, there is another possible source of mass for the gauge fields: the topological or Chern-Simons mass terms (Schonfeld, 1981; Deser et al., 1982). The Chern-Simons term is a locally gauge-invariant Lagrangian that breaks parity $\mathcal{P}$ and time-reversal $\mathcal{T}$ invariance. For the case of an abelian gauge field it has the form

$$
\begin{equation*}
\mathcal{L}_{\mathrm{CS}}=\frac{\theta}{4} \epsilon_{\mu \nu \lambda} A^{\mu} F^{\nu \lambda} \tag{10.67}
\end{equation*}
$$

The coupling constant $\theta$ is dimensionless and measures the strength of $\mathcal{P}$ and $\mathcal{T}$ (but not $\mathcal{C}$ ) violations.

We will see below that a Chern-Simons term arises in the effective action of the RVB gauge field $A_{\mu}$ from the fermionic fluctuations in a CSS. Since the gauge fields now have a mass, one does expect to get spinon states in the spectrum. These states are massive, i.e. have a non-vanishing mass. We will also see in the next chapter that, if holes are allowed, the system develops a novel form of superconductivity
driven by excitations with fractional statistics called anyons. We will also see in later chapters that the Chern-Simons action plays a key role in the theory of the quantum Hall effects.

In the absence of mass terms for the fluctuations of the gauge fields the spinons disappear from the spectrum. The only low-lying excitations of the system are associated with the gauge field $A_{\mu}$. It is then natural to ask for the effective Lagrangian which governs the dynamics of the gauge fields. The $1 / N$ expansion provides a simple way to determine not only the effective action of the gauge field $A_{\mu}$, but also that of the amplitudes $\phi_{i}$ and $\chi$ introduced in Eq. (10.60). This is done by first integrating out the spinon fields and later expanding around one of the saddle-points of the resulting action. The effective action determined in this way is

$$
\begin{align*}
S_{\mathrm{eff}}\left[\phi_{i}, \chi, A_{\mu}\right]= & \int d^{3} x\left(-\frac{N}{J} U\left(\phi_{1}^{2}, \phi_{2}^{2}\right)-\frac{N}{J^{\prime}} U^{\prime}\left(\chi^{2}\right)\right) \\
& -i N \ln \operatorname{det}\left(\begin{array}{cc}
i \gamma_{\mu} D^{\mu}-\chi-\phi_{2} & -\phi_{1} \\
-\phi_{1} & i \gamma_{\mu} D^{\mu}-\chi+\phi_{2}
\end{array}\right) \tag{10.68}
\end{align*}
$$

where the $2 \times 2$ matrix in Eq. (10.68) occurs because of the spinon doubling in terms of $u$ and $v$ components of Eqs. (10.43) and Eq. (10.45). At the saddle-point level we have

$$
\begin{equation*}
\left\langle A_{\mu}\right\rangle=0, \quad\left\langle\phi_{i}\right\rangle=\bar{\phi}_{i}, \quad\langle\chi\rangle=\bar{\chi} \tag{10.69}
\end{equation*}
$$

Let us now consider the effects of fluctuations around this state. Let $\tilde{\phi}_{i}$ and $\tilde{\chi}$ denote the fluctuation components of the amplitude fields. The vector potential $A_{\mu}$ has zero average, Eq. (10.69), and hence it represents a fluctuation. The fluctuations of the amplitude fields are massive and thus do not lead to any new physics, provided, of course, that the saddle-point represents a stable state. We will not consider the effects of such fluctuations here. Qualitatively, amplitude fluctuations are important in the dimer limit. We have already considered such effects in Chapter 8.

The fluctuations of the vector potentials $A_{\mu}$ lead to interesting effects. Their effective action can be calculated by expanding $S_{\text {eff }}$ of Eq. (10.68) in powers of $A_{\mu}$. To second order, we get $S_{\text {gauge }}^{(2)}\left[A_{\mu}\right]$ given by

$$
\begin{equation*}
S_{\text {gauge }}^{(2)}\left[A_{\mu}\right]=\frac{1}{2} \int d^{3} x d^{3} y A^{\mu}(x) \Pi_{\mu \nu}(x, y) A^{\nu}(y) \tag{10.70}
\end{equation*}
$$

where $\Pi_{\mu \nu}(x, y)$ is the one-particle irreducible fermion current-current correlation function (or polarization tensor)

$$
\begin{equation*}
\Pi_{\mu \nu}=\left\langle J_{\mu}(x) J_{v}(y)\right\rangle \tag{10.71}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-396.jpg?height=447&width=656&top_left_y=204&top_left_x=534)

Figure 10.3 The one-loop contribution to the effective action of the gauge field.

In momentum space, we can write $S_{\text {gauge }}^{(2)}\left[A_{\mu}\right]$ in the form

$$
\begin{align*}
S_{\text {gauge }}^{(2)}\left[A_{\mu}\right]= & i \frac{N}{2} \int \frac{d^{3} p}{(2 \pi)^{3}} \int \frac{d^{3} q}{(2 \pi)^{3}} \operatorname{tr}\left[S\left(\frac{p}{2}+q\right) \gamma^{\mu} S\left(-\frac{p}{2}+q\right) \gamma^{\nu}\right] \\
& \times A_{\mu}(p) A_{v}(-p) \tag{10.72}
\end{align*}
$$

in terms of the fermion propagator in momentum space $S(p)$,

$$
\begin{equation*}
S(p)=\frac{1}{p_{\mu} \gamma^{\mu}-\bar{\chi}-\bar{\phi}_{i} T_{i}} \tag{10.73}
\end{equation*}
$$

where the $2 \times 2$ matrices $T_{1}$ and $T_{2}$ are given by the Pauli matrices $\sigma_{1}$ and $\sigma_{3}$, respectively. This one-loop contribution to the effective action of the gauge field can be represented by the Feynman diagram of Fig. 10.3.

An explicit computation of the operator $\Pi_{\mu \nu}(p)$ (in momentum space) yields the result

$$
\begin{align*}
\Pi^{\mu \nu}(p) & =\int \frac{d^{3} q}{(2 \pi)^{3}} i N \operatorname{tr}\left[S\left(q+\frac{p}{2}\right) \gamma^{\mu} S\left(q-\frac{p}{2}\right) \gamma^{\nu}\right]  \tag{10.74}\\
& =\left(p^{2} g^{\mu \nu}-p^{\mu} p^{\nu}\right) \Pi_{0}\left(p^{2}\right)-i \epsilon^{\mu \nu \lambda} p_{\lambda} \Pi_{A}\left(p^{2}\right)
\end{align*}
$$

The kernels $\Pi_{0}\left(p^{2}\right)$ and $\Pi_{A}\left(p^{2}\right)$ have the following explicit forms:

$$
\begin{align*}
\Pi_{0}\left(p^{2}\right)= & -\frac{N\left|m_{+}\right|}{4 \pi p^{2}}+\frac{N}{8 \pi \sqrt{p^{2}}}\left(\frac{4 m_{+}^{2}}{p^{2}}+1\right) \sinh ^{-1}\left(\frac{1}{\sqrt{4 m_{+}^{2} / p^{2}-1}}\right) \\
& +\left(m_{+} \leftrightarrow m_{-}\right)  \tag{10.75}\\
\Pi_{A}\left(p^{2}\right)= & -\frac{m_{+} N}{2 \pi \sqrt{p^{2}}} \sinh ^{-1}\left(\frac{1}{\sqrt{4 m_{+}^{2} / p^{2}-1}}\right)+\left(m_{+} \leftrightarrow m_{-}\right) \tag{10.76}
\end{align*}
$$

where $m_{ \pm}$denotes the mass gaps (from the poles of the propagator of Eq. (10.73)) for the two species of fermions (including their signs),

$$
\begin{equation*}
m_{ \pm}=\bar{\chi} \pm \sqrt{\bar{\phi}_{1}^{2}+\bar{\phi}_{2}^{2}} \tag{10.77}
\end{equation*}
$$

These expressions can now be used to find the effective Lagrangian $\mathcal{L}_{\text {gauge }}^{(2)}\left[A_{\mu}\right]$ that governs the dynamics of the "RVB" gauge field $A_{\mu}$ at low energies. By virtue of gauge invariance we know that only locally gauge-invariant terms can possibly occur. To lowest order in a gradient expansion, i.e. in powers of $p^{2} / m^{2}$, we expect a Maxwell-like term $F_{\mu \nu} F^{\mu \nu}$. However, in $(2+1)$ dimensions a Chern-Simons (CS) term, Eq. (10.67), is also allowed. The CS term, although gauge-invariant, breaks parity $(\mathcal{P})$ and time reversal $(\mathcal{T})$. Thus, it may occur in a chiral spin state. Indeed, this is what actually does happen!

By explicit calculation we find that the effective Lagrangian $\mathcal{L}_{\text {gauge }}^{(2)}\left[A_{\mu}\right]$ does have the low-energy form

$$
\begin{equation*}
\mathcal{L}_{\text {gauge }}^{(2)}\left[A_{\mu}\right]=-\frac{1}{4 g^{2}} F_{\mu \nu} F^{\mu \nu}+\frac{\theta}{4} \epsilon_{\mu \nu \lambda} A^{\mu} F^{\nu \lambda} \tag{10.78}
\end{equation*}
$$

The gauge coupling constant $g^{2}$ ("spinon charge") and the CS coupling constant $\theta$ are equal to

$$
\begin{equation*}
\frac{1}{g^{2}}=\frac{N}{\pi}\left(\frac{1}{\left|m_{+}\right|}+\frac{1}{\left|m_{-}\right|}\right) \tag{10.79}
\end{equation*}
$$

and

$$
\begin{equation*}
\theta=\frac{N}{4 \pi}\left(\operatorname{sgn}\left(m_{+}\right)+\operatorname{sgn}\left(m_{-}\right)\right) \tag{10.80}
\end{equation*}
$$

This result was first obtained by Redlich (1984).
Clearly, $\theta$ vanishes if $\operatorname{sgn}\left(m_{+}\right)=-\operatorname{sgn}\left(m_{-}\right)$. This is to be expected, since time reversal is not violated if the masses have opposite signs. This is the non-chiral spin-liquid state. In the chiral state, $\operatorname{sgn}\left(m_{+}\right)=\operatorname{sgn}\left(m_{-}\right)$and either sign, plus or minus, can occur. Thus, in a chiral spin-liquid state we find that the CS coupling constant is $\theta= \pm N /(2 \pi)$ and does not vanish. In other terms, in a massive relativistic system of Dirac spinors, the effective CS coupling $\theta$ is equal to $1 /(4 \pi)$ per species of Dirac fermion. A two-component Dirac spinor is known as a Weyl spinor. We will see below, in Section 11.5.1, and in more detail in Section 12.5, that the prefactor of the CS term is equal to $\sigma_{x y} / 4$, where $\sigma_{x y}$ is the Hall conductance. Thus this calculation predicts that each species of 2D Weyl fermions has a Hall conductance of $\frac{1}{2} e^{2} / h$. We will return to this question in Chapter 16, where it plays an important role.

We can gain some insight into the meaning of this result by considering the propagator of the gauge field. In particular, we want to know whether there is a
massless "photon" state in the spectrum. If such a state were to be present the whole approach would be in doubt, since in our problem the vector potentials $A_{\mu}$ would fluctuate wildly and, as we showed in Chapter 8 , the spinons would in fact be confined by the monopoles of the field $A_{\mu}$. However, if the field $A_{\mu}$ were to become massive, the scenario would be completely different. Let us consider this question more closely. The propagator of the gauge fields $G_{\mu \nu}\left(x, x^{\prime}\right)$ is

$$
\begin{equation*}
G_{\mu \nu}\left(x, x^{\prime}\right)=\left\langle T A_{\mu}(x) A_{\nu}\left(x^{\prime}\right)\right\rangle \tag{10.81}
\end{equation*}
$$

and it is not gauge-invariant. It only makes sense after a gauge has been fixed. We do this by the standard procedure (Itzykson and Zuber, 1980) of adding to the Lagrangian $\mathcal{L}_{\text {gauge }}^{(2)}\left[A_{\mu}\right]$ a gauge-fixing term of the form

$$
\begin{equation*}
\mathcal{L}_{\text {fixing }}^{(2)}\left[A_{\mu}\right]=\frac{\alpha}{2 g^{2}}\left(\partial_{\mu} A^{\mu}\right)^{2} \tag{10.82}
\end{equation*}
$$

In particular, I will work in the Lorentz gauge in which $\alpha \rightarrow \infty$ (i.e. $\partial^{\mu} A_{\mu}=0$ ). The propagator of the gauge fields, in the Lorentz gauge, is given in momentum space by

$$
\begin{equation*}
G^{\mu \nu}(p)=\frac{g^{2}}{p^{2}-g^{4} \theta^{2}}\left(g^{\mu \nu}-\frac{p^{\mu} p^{\nu}}{p^{2}}\right)-\frac{g^{4} \theta i \epsilon^{\mu \nu \lambda}}{p^{2}\left(p^{2}-g^{4} \theta^{2}\right)} p_{\lambda} \tag{10.83}
\end{equation*}
$$

This propagator has a pole at $p^{2}-g^{4} \theta^{2}=0$. This "photon" state is massive and its mass $m_{\gamma}$ is equal to $g^{2}|\theta|$. Hence a chiral state implies a massive RVB gauge field. This mass term does not spoil gauge invariance, and it does not imply the occurrence of superconductivity. However, it is just as efficient in suppressing the fluctuations of the RVB gauge field. We have already discussed in Chapter 9 how the wild fluctuations of this gauge field, parametrized in terms of monopoles, are responsible for the confinement of excitations bearing the fundamental quantum number, the spin. Conversely, we are led to suspect that the presence of an induced CS term may signal the liberation of the spinons by suppressing the monopoles. We saw that monopoles were responsible for disordering the Wilson loops, leading to confinement, which, in the present context, means a valence-bond crystal. However, the presence of the induced CS term makes a significant difference.

Let us first discuss the fate of the monopoles. Consider a configuration $A_{\mu}^{(\mathrm{c})}$ that represents a set of monopoles (with their strings) and assume that they are well separated. A configuration of monopoles and anti-monopoles is generated by a set of sources in the form of infinitesimally thin solenoids joining each monopole to an anti-monopole. The issue here is the existence of a long-range monopole field in the presence of the (induced) CS term. But the CS term causes the gauge field to be massive. In such a situation, an elementary study of the Euclidean equations of motion reveals that, for instance, in the case of a simple monopole-anti-monopole
pair, the RVB magnetic field does not extend beyond a distance $R \sim 1 /\left(g^{2} \theta\right)$ away from the solenoid. Thus, the dominant contribution to the Euclidean action comes from this effective flux tube. If the linear size of the monopole-anti-monopole pair is $R$, the action of a monopole-anti-monopole pair grows linearly with their separation $R$. Hence, monopoles and anti-monopoles are confined and their contribution to the expectation value of gauge-invariant operators is exponentially small and can be neglected.

There is a further subtlety here. Under a local gauge transformation the CS Lagrangian density changes by a total derivative. If the space-time has boundaries (for instance, if 2D space has the topology of a disk), the CS action is not gaugeinvariant. In that case there are degrees of freedom at the boundary, which play a key role since these are the only low-energy states left. As we will see in later chapters, this is what happens in the quantum Hall states in which there are edge states. On the other hand, we will also see below that even if the space-time manifold is closed (and hence has no boundaries) one has to carefully consider the effects of large gauge transformations, which (as we will see) force the CS coupling constant to be quantized.

The quantization of the coupling constant can be seen in the more general case of a non-abelian gauge field $A_{\mu}$ that takes values in the algebra of a compact Lie group $G$, such as $\mathrm{SU}(N)$. The general form of the CS action is (Deser et al., 1982)

$$
\begin{equation*}
S_{\mathrm{CS}}\left[A_{\mu}\right]=\int_{\Sigma} d^{3} x \frac{\theta}{4} \epsilon_{\mu \nu \lambda} \operatorname{tr}\left[A^{\mu} F^{\nu \lambda}+\frac{2}{3} A^{\mu} A^{\nu} A^{\lambda}\right] \tag{10.84}
\end{equation*}
$$

where $\Sigma$ is a closed 3D manifold, e.g. the sphere, the torus, etc. Under a gauge transformation $U(x) \in G$ the vector potential $A_{\mu}$ transforms as

$$
\begin{equation*}
A_{\mu} \rightarrow U^{-1} A_{\mu} U+U^{-1} \partial_{\mu} U \tag{10.85}
\end{equation*}
$$

Under a local gauge transformation $U(x)$ the CS action is invariant. However, under a large gauge transformation it transforms as

$$
\begin{equation*}
S_{\mathrm{CS}} \rightarrow S_{\mathrm{CS}}+4 \pi^{2} w[U] \tag{10.86}
\end{equation*}
$$

where $w[U]$, given by

$$
\begin{equation*}
w[U]=\frac{1}{24 \pi^{2}} \int_{\Sigma} d^{3} x \epsilon^{\mu \nu \lambda} \operatorname{tr}\left[\left(U^{-1} \partial_{\mu} U\right)\left(U^{-1} \partial_{\nu} U\right)\left(U^{-1} \partial_{\lambda} U\right)\right] \tag{10.87}
\end{equation*}
$$

is a topological invariant of the maps of the manifold $\Sigma$ to the group $G$, known as the winding number (or first Chern invariant). Thus, in the case of the sphere, $\Sigma=$ $S^{3}$, the winding number $w[u]$ labels the homotopy classes $\pi_{3}(G) \simeq \mathbb{Z}$, which we have already encountered in Section 7.10. On the other hand, on physical grounds we must require that the weight of the path integral $\exp \left(i S_{\mathrm{CS}}\right)$ be gauge-invariant,
which can happen only if the coupling constant is quantized, $\theta=k /(2 \pi)$, with $k \in \mathbb{Z}$. The integer $k$ is known as the level of the Chern-Simons gauge theory.

These considerations affect the behavior of this theory in the presence of monopoles (and anti-monopoles). Indeed, from the point of view of the CS action, the core of the monopoles is effectively an edge, and our gauge-fixing procedure fails near the core. A careful consideration of the fermion determinant in the background of gauge-field configurations shows that it vanishes identically if the monopoles are present (Affleck et al., 1989; Fradkin and Schaposnik, 1991). In other terms, the fermion path integral, in a chiral spin state, loses its gauge invariance in the presence of monopoles. The result is the suppression of the monopoles and the deconfinement of the spinons. In consequence, in the chiral spin liquid there is genuine separation of spin and charge.

### 10.5 The statistics of spinons

What properties do liberated spinons have? The best way to address this question is to look at how spinons propagate in this system. Consider the amplitude $W^{(1)}(\vec{x}, \vec{x} ; T)$ for a spinon, of any type, created in the remote past at site $\vec{x}$, to propagate throughout the system and finally return to the same place $\vec{x}$, in the same state, in the remote future, $T \rightarrow \infty$. The (imaginary-time) path integral for this amplitude is

$$
\begin{align*}
\lim _{T \rightarrow \infty} W^{(1)}(\vec{x}, \vec{x} ; T) & =\lim _{T \rightarrow \infty} \operatorname{tr} S_{\mathrm{F}}\left(\vec{x},-\frac{T}{2} ; \vec{x},+\frac{T}{2}\right) \\
& =\int \mathcal{D} A_{\mu} \operatorname{tr}\left\langle\vec{x},-\frac{T}{2}\right| \frac{1}{D_{\mu} \gamma^{\mu}+m}\left|\vec{x}, \frac{T}{2}\right\rangle e^{-S_{\mathrm{eff}}(A)} \tag{10.88}
\end{align*}
$$

where I have used the (imaginary-time) spinon propagator in a fixed background configuration of RVB vector potentials. We can now use the Feynman picture of a sum over paths by first writing (Polyakov, 1987) the spinon propagator in the form

$$
\begin{align*}
\operatorname{tr}\langle\vec{x}, & \left.-\frac{T}{2}\left|\frac{1}{D_{\mu} \gamma^{\mu}+m}\right| \vec{x}, \frac{T}{2}\right\rangle \\
& =\operatorname{tr}\left\langle\vec{x},-\frac{T}{2}\right|\left(-D_{\mu} \gamma^{\mu}+m\right)|z\rangle\langle z| \frac{1}{-D^{2}+m^{2}}\left|\vec{x},+\frac{T}{2}\right\rangle \tag{10.89}
\end{align*}
$$

where we have introduced a complete set of states $|z\rangle$, labeled by the space-time coordinate $z$. The sum (integral) over all values of $z$ is left implicit here and below.

The proper-time representation of the propagator yields the following expression for the trace in Eq. (10.89):

$$
\begin{equation*}
\operatorname{tr}\left\langle x,-\frac{T}{2}\right|\left(-D_{\mu} \gamma^{\mu}+m\right)|z\rangle \int_{0}^{\infty} d \tau\langle z| e^{+\tau D^{2}}\left|\vec{x}, \frac{T}{2}\right\rangle e^{-\tau m^{2}} \tag{10.90}
\end{equation*}
$$

The operator $D_{\mu}$ is the Euclidean covariant derivative, $D_{\mu}=\nabla_{\mu}+i A_{\mu}$. The (Euclidean) Dirac matrices are present only in the prefactors.

Notice that by taking a trace we are effectively summing over all spinon polarizations. A standard path-integral argument now yields an expression for $W^{(1)}(\vec{x}, \vec{x} ; T)$ in terms of sums over paths $\Gamma$, the worldlines of the histories of the quasiparticle, of arbitrary length $\tau$. The boundary conditions that we are using here imply that the sum over paths runs over contributions with paths which close on the imaginary-time direction (i.e. run around the cylinder). The result is the path integral

$$
\begin{equation*}
\langle z| e^{+\tau D^{2}}\left|\vec{x},+\frac{T}{2}\right\rangle=\int \mathcal{D} x \exp \left\{-\int_{0}^{\tau} d t\left[\frac{1}{2}\left(\frac{d \vec{x}}{d t}\right)^{2}+i \vec{A} \cdot \frac{d \vec{x}}{d t}\right]\right\} \tag{10.91}
\end{equation*}
$$

which is the sum over paths $\Gamma$ of length $\tau$ satisfying the boundary condition $x(0)=z$ and $x(\tau)=(\vec{x}, T)$.

The amplitude $W^{(1)}(\vec{x}, \vec{x} ; T)$ can now be written in the form

$$
\begin{align*}
W^{(1)}(\vec{x}, \vec{x} ; T)= & \int \mathcal{D} A_{\mu} e^{-S_{\mathrm{eff}}\left(A_{\mu}\right)} \operatorname{tr}\left\langle\vec{x},-\frac{T}{2}\right|\left(-D_{\mu} \gamma^{\mu}+m\right)|z\rangle \\
& \times \int_{0}^{\infty} d \tau e^{-\tau m^{2}}\langle z| e^{+\tau D^{2}}\left|\vec{x},+\frac{T}{2}\right\rangle \tag{10.92}
\end{align*}
$$

Equivalently, $W^{(1)}(\vec{x}, \vec{x} ; T)$ can be written in the form

$$
\begin{align*}
\int_{0}^{\infty} d \tau e^{-\tau m^{2}} \int \mathcal{D} & x_{\mu} \int \mathcal{D} A_{\mu} \operatorname{tr}\left\langle\vec{x},-\frac{T}{2}\right|\left(-D_{\mu} \gamma^{\mu}+m\right)|z\rangle \\
& \times \exp \left[-\int_{0}^{\tau} d t \frac{1}{2}\left(\frac{d \vec{x}}{d t}\right)^{2}\right] \exp \left(i \oint_{\Gamma} A_{\mu} d x_{\mu}\right) \tag{10.93}
\end{align*}
$$

where I have used the fact that the paths $\Gamma$ are closed and, consequently, the term $\int_{0}^{\tau} d t \vec{A} \cdot d \vec{x} / d t$ is simply the circulation of $\vec{A}$ around $\Gamma$. Notice that this quantity is gauge-invariant and it arises because we are considering paths that close (wrap) around the cylinder. The path integral requires that this amplitude be averaged over all the configurations of the RVB gauge fields, for each path $\Gamma$. After doing that we get, using an obvious notation,

$$
\begin{equation*}
\left\langle W^{(1)}\right\rangle \sim \sum_{\Gamma}(\text { amplitude })_{\Gamma} \times\left\langle e^{i \oint_{\Gamma} d x_{\mu} A^{\mu}}\right\rangle \tag{10.94}
\end{equation*}
$$

which involves the Wilson loop operator.
If we ignore the contribution of the monopoles, the amplitude $W^{(1)}$ can be estimated just by using the effective action of Eq. (10.78). The average in Eq. (10.94), the expectation value of the Wilson loop operator for trajectory $\Gamma$,

$$
\begin{equation*}
\left\langle\exp \left(i \oint_{\Gamma} d x_{\mu} A^{\mu}\right)\right\rangle \tag{10.95}
\end{equation*}
$$

can now be calculated quite easily. Let $J_{\mu}(\Gamma)$ be a current in $(2+1)$-dimensional Euclidean space defined by

$$
J_{\mu}(\Gamma)= \begin{cases}S_{\mu}(x), & x \in \Gamma  \tag{10.96}\\ 0, & \text { otherwise }\end{cases}
$$

where $S_{\mu}(x)$ is the unit vector tangent to the path $\Gamma$ at $x$. The expectation value to be computed has the form

$$
\begin{equation*}
\left\langle\exp \left(i \oint_{\Gamma} d x_{\mu} A^{\mu}\right)\right\rangle=\left\langle\exp \left(i \int d^{3} x J_{\mu}(x) A^{\mu}(x)\right)\right\rangle \tag{10.97}
\end{equation*}
$$

Since the effective action of Eq. (10.78) is quadratic in $A_{\mu}$, the average, Eq. (10.95) is simply given by

$$
\begin{equation*}
\left\langle\exp \left(i \oint_{\Gamma} d x_{\mu} A^{\mu}(x)\right)\right\rangle_{\mathrm{CS}}=\exp \left(-\frac{i}{2} \int d^{3} x \int d^{3} x^{\prime} J_{\mu}(x) G^{\mu \nu}\left(x-x^{\prime}\right) J_{\nu}\left(x^{\prime}\right)\right) \tag{10.98}
\end{equation*}
$$

where the propagator $G_{\mu \nu}\left(x, x^{\prime}\right)$ in the Lorentz gauge has the Fourier transform given in Eq. (10.83). In real space-time $G_{\mu \nu}(x, y)$ is given by

$$
\begin{align*}
G^{\mu \nu}(x, y)= & \int \frac{d^{3} p}{(2 \pi)^{3}} G^{\mu \nu}(p) e^{\overrightarrow{i p} \cdot(\vec{x}-\vec{y})} \\
= & -g^{2}\langle x|\left(\frac{1}{\partial^{2}+g^{4} \theta^{2}}\right)\left(g^{\mu \nu}-\frac{\partial^{\mu} \partial^{\nu}}{\partial^{2}}\right)|y\rangle \\
& +g^{4} \theta \epsilon^{\mu \nu \lambda}\langle x| \frac{1}{\partial^{2}\left(\partial^{2}+g^{4} \theta^{2}\right)} \partial_{\lambda}|y\rangle \tag{10.99}
\end{align*}
$$

Thus, the argument $I$ of the exponential on the right-hand side of Eq. (10.98) reads

$$
\begin{align*}
I \equiv & -\frac{i}{2} \int d^{3} x \int d^{3} y J_{\mu}(x) G^{\mu \nu}(x-y) J_{v}(y) \\
= & -\frac{i g^{2}}{2} \int d^{3} x \int d^{3} y J_{\mu}(x) G_{0}\left(x, y ; m^{2}\right) J^{\mu}(y) \\
& -\frac{i}{2} g^{4} \theta \int d^{3} x \int d^{3} y J_{\mu}(x) \epsilon^{\mu \nu \lambda}\langle x| \frac{1}{\partial^{2}\left(\partial^{2}+g^{4} \theta^{2}\right)} \partial_{\lambda}|y\rangle J_{v}(y) \tag{10.100}
\end{align*}
$$

Here I used $G_{0}\left(x, y ; m^{2}\right)$ as the propagator for a massive field with $m^{2}=g^{4} \theta^{2}$, which obeys

$$
\begin{equation*}
\left(-\partial^{2}-m^{2}\right) G_{0}\left(x, y ; m^{2}\right)=\delta(x-y) \tag{10.101}
\end{equation*}
$$

If we restrict our discussion to long and smooth loops, we can make the longdistance approximation in Eq. (10.101), which now becomes ultra-local

$$
\begin{equation*}
G_{0}\left(x, y ; m^{2}\right) \approx \frac{1}{m^{2}} \delta^{(3)}(x-y) \tag{10.102}
\end{equation*}
$$

In this limit we find the exponent $I$ to be given by

$$
\begin{equation*}
I \simeq-\frac{i L(\Gamma)}{2 g^{2} \theta^{2}}+\frac{i}{2 \theta} \int d^{3} x \int d^{3} y J_{\mu}(x) \epsilon^{\mu \nu \lambda} G_{0}(x, y ; 0) \partial_{\lambda} J_{v}(y) \tag{10.103}
\end{equation*}
$$

where $L(\Gamma)$ is the perimeter of the loop $\Gamma$, and $G_{0}(x, y ; 0)$ is the propagator of a massless scalar field, which, in $(2+1)$ (Euclidean) space-time dimensions, is

$$
\begin{equation*}
G_{0}(x, y ; 0)=\frac{1}{4 \pi|x-y|} \tag{10.104}
\end{equation*}
$$

We will see below that the non-local term in Eq. (10.103) plays a crucial role in the determination of the exponent $I$.

The first term in Eq. (10.103) embodies the quantum corrections to the propagation amplitude of the spinon. Hence it can be interpreted as a finite renormalization of its mass. The second term in Eq. (10.103) is more interesting. Let us examine the quantity $R(\Gamma)$ given by

$$
\begin{equation*}
R(\Gamma)=\int d^{3} x \int d^{3} y J_{\mu}(x) \epsilon^{\mu \nu \lambda} G_{0}(x, y ; 0) \partial_{\lambda}^{y} J_{v}(y) \tag{10.105}
\end{equation*}
$$

Below we will see that $R(\Gamma)$ is in fact a topological invariant known as the Hopf invariant or linking number. After integration by parts and using the definition of the current $J^{\mu}(x)$, we can write $R(\Gamma)$ in the form

$$
\begin{equation*}
R(\Gamma)=\oint_{\Gamma} d x_{\mu} \oint_{\Gamma} d y_{\nu} \epsilon^{\mu \nu \lambda} \partial_{\lambda}^{x} G_{0}(x, y ; 0) \tag{10.106}
\end{equation*}
$$

We can make more sense of $R(\Gamma)$ by means of the following magnetostatic analogy. In order to make these ideas precise, it is necessary to momentarily go to Euclidean space. Now $G_{0}(x, y ; 0)$ is just the inverse Laplacian in three dimensions:

$$
\begin{equation*}
G_{0}(x, y ; 0) \equiv\langle\vec{x}| \frac{1}{-\nabla^{2}}|\vec{y}\rangle \tag{10.107}
\end{equation*}
$$

Let us regard $J_{\mu}(x)$ as an electric current in 3D space. This current establishes the static magnetostatic field $B_{\mu}(x)$, which satisfies

$$
\begin{equation*}
\vec{\nabla} \times \vec{B}=\vec{J}, \quad \vec{\nabla} \cdot \vec{B}=0 \tag{10.108}
\end{equation*}
$$

i.e. Ampère's law. This observation allows us to solve for $B_{\mu}$ by means of the Green function $G_{0}(x, y ; 0)$ in the form

$$
\begin{equation*}
B_{\mu}(x)=\int d^{3} y G_{0}(x, y ; 0) \epsilon_{\mu \nu \lambda} \partial_{\nu} J_{\lambda}(y) \tag{10.109}
\end{equation*}
$$

Thus, $R(\Gamma)$ can be written in the more compact form

$$
\begin{equation*}
R(\Gamma)=\int d^{3} x J_{\mu}(x) B_{\mu}(x) \tag{10.110}
\end{equation*}
$$

where $B_{\mu}$ is the field established by $J_{\mu}$. This is a self-interaction effect. Now we can use the definition of $J_{\mu}$ and Stokes' theorem to get $R(\Gamma)$ in the form of a surface integral,

$$
\begin{equation*}
R(\Gamma)=\oint_{\Gamma} d x_{\mu} B_{\mu}=\int_{\Sigma} d \sigma n_{\mu} \epsilon_{\mu \nu \lambda} \partial_{\nu} B_{\lambda} \tag{10.111}
\end{equation*}
$$

where $\Sigma$ is an open surface whose boundary is $\Gamma$. By substitution of Eq. (10.108) into Eq. (10.111) we get

$$
\begin{equation*}
R(\Gamma)=\int_{\Sigma} d \vec{\sigma} \cdot \vec{J} \tag{10.112}
\end{equation*}
$$

i.e. $R(\Gamma)$ is the flux of $\vec{J}$, the current, through a surface bounded by itself (see Eq. (10.98)).

Thus, at least qualitatively, $R(\Gamma)$ should be equal to the self-linking, or writhing, number of the path $\Gamma$, which measures the number of times a vector normal to $\Gamma$ winds as the loop is traced. Polyakov (1988), who was the first to put these arguments forward, argued that the writhing $R(\Gamma)$ of the path should be interpreted as an intrinsic spin. On the other hand, this spin makes sense only after one has chosen a specific prescription for measuring lengths along the path (i.e. made a choice of metric) and a short-distance regularization of the integrals involved in $R(\Gamma)$. In his seminal work relating the theory of knots and CS gauge theory, Witten (1989) showed that these definitions depend on the choice of regularization at short distances ("the framing of the knot"). In the problem that we are considering here, the CS gauge theory (abelian in our case) appears as the effective theory at distances long compared with the inverse spinon gap of the mean-field theory. It is unclear what regularization one should adopt in this case. It is conceivable that the anomalous spin predicted by Polyakov may, but need not, be present depending on the size of the spinon gap.

Let us consider the properties of spinons upon exchange processes. That is to say, we want to know which statistics they obey. Microscopically, we have defined the spinons to be fermions. The CS term may change that. To see how that can happen, let us consider the propagation amplitude $W^{(2)}(\{\vec{x}, \vec{y}\},\{\vec{x}, \vec{y}\} ; T)$ for two spinons, which in the remote past were located at $\vec{x}$ and $\vec{y}$, either to end up at the same locations in the remote future $(T \rightarrow+\infty)$ or to exchange their positions. Once again, we will carry out the computation in the imaginary-time formalism in which the time direction is real and periodic, i.e. the space-time has, at least, the topology of a cylinder. The two-particle amplitude will be represented as a sum
over paths that close on the time direction. In principle, we will be dealing with two different paths $\Gamma_{1}$ and $\Gamma_{2}$, representing the evolution of each spinon. These paths may, or may not, be linked. In other words, the paths are equivalent to knots or braids. We will see that the path integral can be written as a sum over classes of topologically inequivalent knots. Each class will be characterized by a phase factor. These phase factors can effectively alter the statistics of the spinons. The two-spinon amplitude $W^{(2)}$ has the form

$$
\begin{equation*}
W^{(2)}= \pm \sum_{\nu=0}^{\infty} W_{v}^{(2)} e^{i \phi_{v}} \tag{10.113}
\end{equation*}
$$

where $v$ is the linking number of the paths (or worldlines), to be defined below. The $\pm$ sign represents the two possible processes, direct and exchange. We will primarily be interested in the computation of the phases $\phi_{v}$. The amplitudes $W_{v}^{(2)}$ are renormalizations of the spinon self-energies, scattering amplitudes, etc.

In terms of a sum over paths $\Gamma$, which is the union of the individual paths of the spinons, $W^{(2)}$ has the form

$$
\begin{equation*}
W^{(2)}= \pm \sum_{\Gamma \equiv \Gamma_{1} \cup \Gamma_{2}} \mathcal{A}(\Gamma)\left\langle\exp \left(i \oint_{\Gamma} d x_{\mu} A^{\mu}(x)\right)\right\rangle \tag{10.114}
\end{equation*}
$$

where $\mathcal{A}(\Gamma)$ is the absolute value of the amplitude. After a little algebra we get

$$
\begin{equation*}
W^{(2)}= \pm \sum_{\Gamma} \mathcal{A}(\Gamma) \exp \left(\frac{i}{2} \int d^{3} x \int d^{3} x^{\prime} J_{\mu}(x) G_{\mu \nu}\left(x, x^{\prime}\right) J_{\nu}\left(x^{\prime}\right)\right) \tag{10.115}
\end{equation*}
$$

where $J_{\mu}$ is the sum of the currents which define the paths $\Gamma_{1}$ and $\Gamma_{2}$, and $G_{\mu \nu}\left(x, x^{\prime}\right)$ is the analytic continuation to imaginary time of the propagator of the gauge fields. We will be interested only in the behavior of very large loops in the Euclidean space. The paths for direct and exchange processes become closed on identifying their endpoints. Thus, exchange and direct processes have an extra relative linking number. It is this extra linking number which is responsible for the fractional statistics.

It will be sufficient for our purposes to compute just the relative linking number. Thus, we can consider a simple direct process, in which the paths $\Gamma_{1}$ and $\Gamma_{2}$ are not linked, and a simple exchange process in which the two paths are linked in such a way that they form a single path. Now, the linking number of a single path is its writhing number $R(\Gamma)$. However, there are no regularization ambiguities now, since the path winds around the cylinder exactly once.

The cylinder (of periodic boundary conditions in imaginary time) represents a topological obstruction and no redefinition of the metric on the path (for example by stretching it) can change this number. Thus the exchange process and the direct
process have a relative linking number of $\pm 1$. The sign depends on the process by which we define exchange. If we define exchange by a counterclockwise (clockwise) rotation of one spinon around the other by an angle of $\pi$, followed by a translation equal to their relative separation, the sign is $+1(-1)$.

In the phase of the amplitude of the path integral the relative linking number $R(\Gamma)$ enters multiplying a factor of $1 /(2 \theta)$. Hence, the total amplitude changes by a factor of $-e^{ \pm \frac{i}{2 \theta}}$ when two particles are exchanged, i.e.

$$
\begin{equation*}
W_{\mathrm{d}}^{(2)}=-e^{ \pm \frac{i}{2 \theta}} W_{\mathrm{e}}^{(2)} \tag{10.116}
\end{equation*}
$$

Equation (10.116) implies that the spinons have fractional statistics with a statistical angle $\delta$ equal to

$$
\begin{equation*}
\delta=\frac{1}{2 \theta} \equiv \frac{\pi}{N} \tag{10.117}
\end{equation*}
$$

defined relative to the fermion sign. In particular, Eq. (10.116) and Eq. (10.117) require that the two-spinon state should have a multivalued wave function (Wilczek, 1982)

$$
\begin{equation*}
\psi^{(2)}(1,2)=-e^{ \pm i \delta} \psi(2,1) \tag{10.118}
\end{equation*}
$$

For the case of physical interest, $N=2$, the statistical angle $\delta=\pi / 2$ and the wave function is multiplied by $\pm i$ when two spinons are exchanged. Since this phase factor is exactly half-way between fermions ( - sign) and bosons ( + sign), these excitations have been dubbed semions (Laughlin, 1988b). In general, they are anyons, particles with fractional statistics (Wilczek, 1982). When the anyon is characterized by a single phase factor, it constitutes a one-dimensional representation of the braid group, and it is said to be an abelian anyon. We will see in later chapters that there are multi-dimensional representations in which the anyon is characterized by a matrix of phase factors. Such anyons are non-abelian since the matrices do not commute. For a discussion of the braid group and fractional statistics see Section 10.7.

It remains only to compute the phases $\phi_{\nu}$ in Eq. (10.113) and Eq. (10.115). Let us write the phase $\phi_{v}$ in the form

$$
\begin{equation*}
\phi_{v}=\frac{1}{2 \theta} R\left(\Gamma_{1}, \Gamma_{2}\right) \tag{10.119}
\end{equation*}
$$

Clearly, since $R\left(\Gamma_{1}, \Gamma_{2}\right)$ is bilinear in the currents, we can write $R\left(\Gamma_{1}, \Gamma_{2}\right)$ in terms of the writhing numbers of the individual paths and of the linking number $v=$ $\bar{R}\left(\Gamma_{1}, \Gamma_{2}\right)$,

$$
\begin{equation*}
R\left(\Gamma_{1}, \Gamma_{2}\right)=R\left(\Gamma_{1}\right)+R\left(\Gamma_{2}\right)+2 \bar{R}\left(\Gamma_{1}, \Gamma_{2}\right) \tag{10.120}
\end{equation*}
$$

with

$$
\begin{equation*}
\bar{R}\left(\Gamma_{1}, \Gamma_{2}\right)=\frac{1}{2} \oint_{\Gamma_{1}} d x_{\mu} \oint_{\Gamma_{2}} d x_{v}^{\prime} G_{\mu \nu}\left(x-x^{\prime}\right) \tag{10.121}
\end{equation*}
$$

We can now use the magnetostatic analogy once again. Let $J_{\mu}^{(1)}$ and $J_{\mu}^{(2)}$ be the two currents which establish the static fields $B_{\mu}^{(1)}$ and $B_{\mu}^{(2)}$, respectively. We get

$$
\begin{equation*}
v=\bar{R}\left(\Gamma_{1}, \Gamma_{2}\right)=\int d^{3} x J_{\mu}^{(1)}(x) B_{\mu}^{(2)}(x) \equiv \oint_{\Gamma_{1}} d \vec{x} \cdot \bar{B}^{(2)}(\vec{x}) \tag{10.122}
\end{equation*}
$$

as a circulation of the field $\vec{B}^{(2)}$ (established by $\Gamma_{2}$ ) around $\Gamma_{1}$. Using now Stokes' theorem, we write $\nu$ as the surface integral

$$
\begin{align*}
v & =\oint_{\Gamma_{1}} d \vec{x} \cdot \vec{B}^{(2)}(\vec{x}) \\
& \equiv \int_{\Sigma_{1}} d \sigma \vec{n} \cdot \vec{\nabla} \times \vec{B}^{(2)} \\
& =\int d \sigma \vec{n} \cdot \vec{J} \tag{10.123}
\end{align*}
$$

where $\Sigma_{1}$ is an arbitrary surface with boundary $\Gamma_{1}$. Thus, $v$ counts how many times the loop $\Gamma_{2}$ winds around $\Gamma_{1}$.

After putting it all together, we get a formula for the two-spinon amplitude $W^{(2)}$ of the form

$$
\begin{equation*}
W^{(2)}=\sum_{\Gamma_{1}, \Gamma_{2}}\left[\mathcal{A}(\Gamma) e^{\frac{i}{2 \theta}\left(\left(R\left(\Gamma_{1}\right)+R\left(\Gamma_{2}\right)\right)\right.}\right] e^{\frac{i}{\theta} \nu\left(\Gamma_{1}, \Gamma_{2}\right)} \tag{10.124}
\end{equation*}
$$

which, for an exchange process, acquires an additional factor $-e^{ \pm i \delta}$. The quantity in brackets in Eq. (10.124) is a renormalized amplitude including possibly an anomalous spin. It represents the total two-spinon amplitude in the topological sector with fixed linking number $v$.

In the next sections we will find that the remarkable properties of the spinons in the CS theory are generically present for any system with anyons.

### 10.6 Fractional statistics

One of the fundamental, and most cherished, axioms of local quantum field theory is the spin-statistics theorem. In the way in which it is most commonly stated, it says that particles with integer (half-integer) spin are bosons (fermions) and that the corresponding second-quantized fields obey canonical equal-time commutation (anticommutation) relations. At the root of this theorem is the need to preserve causality in a theory with local interactions, as well as the requirement for the existence of a lowest energy state. Spin can only be integer or half-integer since the fields should transform as an irreducible representation of the Lorentz group in $(3+1)$ dimensions: $\mathrm{SO}(3,1)$. Even in a non-relativistic setting, the same requirements arise since the group of rotations $\mathrm{SO}(3)$ is a subgroup of $\mathrm{SO}(3,1)$.

Furthermore, the many-particle wave functions should be either symmetric or antisymmetric under the exchange of any pair of particles, giving rise again to bosons and fermions. Thus, it may appear that these are the only possibilities.

The situation becomes radically different if the dimension of space-time is less than four. It has been known for a very long time (Jordan and Wigner, 1928) that in one space dimension the statistics is essentially arbitrary. This is basically a kinematic effect. Fermions on a line cannot experience their statistics since they cannot get past each other, and neither can bosons with hard cores. The Jordan-Wigner transformation, which we discussed in Sections 5.2 and 5.5, gives an explicit construction of a boson operator $a^{\dagger}(j)$ at the $j$ th site of a 1D lattice as a non-local function of fermion densities (see Eq. (5.88)),

$$
\begin{equation*}
a^{\dagger}(j)=c^{\dagger}(j) e^{i \pi \sum_{m<j} c^{\dagger}(m) c(m)} \tag{10.125}
\end{equation*}
$$

where the operators $c^{\dagger}(j)$ and $c(j)$ obey canonical anticommutation relations.
In continuum quantum field theory, there exists an analogous construction known as bosonization (see Section 5.6), which yields a connection between a canonical Dirac Fermi field $\psi_{\alpha}(x)(\alpha=1,2)$ and a canonical Bose field $\phi(x)$ in $(1+1)$ dimensions given by the Mandelstam formula (see Eq. (5.272) and Eq. (5.273))

$$
\begin{equation*}
\psi_{\alpha}(x)=e^{\frac{i}{\sqrt{\pi}} \int_{-\infty}^{x} d y \partial_{0} \phi(y) \pm i \sqrt{\pi} \phi(x)} \tag{10.126}
\end{equation*}
$$

with $\alpha=1$ (2) for $+(-)$.
Both constructions are based on the idea that in order to change the statistics one has to multiply an operator that creates a particle, such as $c^{\dagger}(j)$, by an operator that creates a kink, i.e. a topological soliton. This idea, to some extent, can be generalized to higher dimensions. For instance, in $(3+1)$ dimensions a dyon, a bound state of a charged Bose particle and a Dirac magnetic monopole, behaves as a fermion. However, unlike the 1D cases, all the examples in $(3+1)$ dimensions are semiclassical in character. Furthermore, in one space dimension, it is also possible to get fractional statistics (i.e. a case intermediate between Fermi and Bose statistics). A simple way to do that is to change the exponent of the kink operator in the Jordan-Wigner formula by replacing $\pi$ by an arbitrary angle $\delta$. The resulting operators $a^{\dagger}(j)$ do not obey Bose commutation relations, but instead exhibit fractional statistics, i.e.

$$
\begin{equation*}
a(j) a^{\dagger}(k)=\delta_{j k}-e^{i \delta} a^{\dagger}(k) a(j) \tag{10.127}
\end{equation*}
$$

These operators, which are also known as parafermion operators (Fradkin and Kadanoff, 1980), are generalizations of the fermion operators which are essential to the solution of the 2D classical Ising model (Kadanoff and Ceva, 1971). They occur naturally in a number of quantum theories in $(1+1)$ dimensions,
such as the Gross-Neveu model, and in 2D classical statistical mechanics. These operators have been found to play an important role in the critical behavior of the clock ( or $\mathbb{Z}_{N}$ ) models in two dimensions, when studied using the methods of CFT (Dotsenko, 1984).

We will consider now the construction of anyon or parafermion operators more closely (Fradkin and Kadanoff, 1980). From the point of view of our discussion, the interest of this classical construction is that it has a natural generalization to $(2+1)$ dimensions that has turned out to be quite useful. Consider a 2D classical statistical-mechanics model such as the $\mathbb{Z}_{N}$ model on a square lattice. In the $\mathbb{Z}_{N}$ model, one defines an angle-like variable $\theta(\vec{r})$ residing at each site of a lattice. The angle $\theta(\vec{r})$ takes the discrete values $\theta=2 \pi p / N$ at each site, where $p$ and $N$ are positive integers and $p=1, \ldots, N$. The classical Hamiltonian $H$ is chosen to be a local function of the angles $\theta(\vec{r})$ and invariant under global $\mathbb{Z}_{N}$ transformations $\theta(\vec{r}) \rightarrow \theta(\vec{r})+2 \pi m / N$, where $m$ is a constant integer $(1<m \leq N)$. The classical partition function is

$$
\begin{equation*}
\mathcal{Z}=\sum_{\{\theta(\vec{r})\}} e^{\beta \sum_{\vec{r}, \mu} \cos \left(\Delta_{\mu} \theta(\vec{r})\right)} \tag{10.128}
\end{equation*}
$$

where $\beta=1 / T$ is the inverse temperature and $\mu=1,2$. In this case, the parafermion consists of an order operator $\mathcal{O}_{m}(\vec{r})=\exp (i(2 \pi m / N) \phi(\vec{r}))$ that measures the order at a site $\vec{r}$ of the lattice that is the endpoint of a defect or domain wall, which flips the $\mathbb{Z}_{N}$ spins by a fixed angle $2 \pi q / N$. This defect, which tries to create a fractional vortex of strength $2 \pi q / N$, is most easily described by means of a gauge field $\mathcal{A}_{j}(\vec{x})$ defined on all the links of the square lattice. The $\mathbb{Z}_{N}$ spins and the gauge fields are minimally coupled through the covariant difference $\Delta_{j} \theta(\vec{r})+\mathcal{A}_{j}(\vec{r})$. The vector potential can be chosen to have non-vanishing curl equal to $2 \pi q / N$ on any arbitrary closed loop on the lattice that contains the site $\vec{R}$ on the dual lattice at the plaquette north-east of the site $\vec{r}$. A popular choice is to have $\mathcal{A}_{j}=0$ except on a path on the dual lattice ending at $\vec{R}$ (a Dirac string). From this construction it is apparent that the fractional statistics of these operators results from a mechanism closely related to the Aharonov-Bohm effect.

It is now easy to check that the correlation functions of these operators are multivalued. Consider for instance the two-point function $\mathcal{G}_{p q}\left(\vec{r}, \vec{r}^{\prime}\right)$ that measures the correlations between operators $\mathcal{O}_{p}$, in the presence of defects of strengths $\pm 2 \pi q / N$, at sites $\vec{r}$ and $\vec{r}^{\prime}$, respectively. Let $\mathcal{K}_{q}$ be the operator which creates a defect of strength $2 \pi q / N$. Imagine carrying the site $\vec{r}^{\prime}$ around site $\vec{r}$ on a closed loop $\Gamma$. After a full round trip, the spin operators have returned to their original locations but the Dirac strings are now misplaced: if in the original situation the spin at $\vec{r}$ was north of the string, now it is located south of it. The string can be returned to its original position by means of a gauge transformation. However, the
spin operator is not invariant under this operation. As a result, the correlation function acquires a phase of $(4 \pi / N) p q$. Hence the composite operator $\Psi_{p q}=\mathcal{O}_{p} \mathcal{K}_{q}$ creates an excitation that is an anyon with statistical angle $\delta=(2 \pi / N) p q$.

From the discussion outlined above, in terms of a quantum-mechanical interpretation, it is apparent that any statistics is possible in one space dimension. Furthermore, the states created by operators that obey fractional statistics are, up to a boundary condition, completely determined by the coordinates of the particles on the line. In three dimensions, on the other hand, there does not seem to be room for particles with exotic statistics. However, 't Hooft (1978) showed that there can be string-like states in 4D gauge theories that obey commutation relations with fractional statistics.

In two dimensions, however, one finds a very interesting situation. The Lorentz group for a 2D system is $\mathrm{SO}(2,1)$. The rotation group, which is crucial to both relativistic and non-relativistic systems, is $\mathrm{SO}(2)$. This group has only one generator $L_{z}$, the generator of infinitesimal rotations in the plane, and hence it is abelian. Thus, all of its representations are one-dimensional and labeled by the angular-momentum quantum number $\ell$. If the wave functions of the excitations are required to be single-valued, the angular momentum $\ell$ can only be an integer. However, fractional shifts of $\ell$ are also compatible with the algebra of $\mathrm{SO}(2)$. States with fractional angular momentum have multivalued wave functions. In the Hilbert space which represents particles that move on the plane but are not allowed to sit on top of each other (a "punctured" plane) such wave functions are indeed allowed (Leinaas and Myrheim, 1977). The plane becomes isomorphic to a Riemann surface punctured at the locations of the particles, and different points are identified up to a phase determined by the fractional angular momentum. This framework provides for a natural construction of wave functions that obey fractional statistics.

Wilczek (1982) proposed the first fully quantum-mechanical prescription regarding how to make such particles. He dubbed them anyons. Wilczek's model makes use of the Aharonov-Bohm effect experienced by a particle of charge $q$ moving on the plane in the presence of a magnetic solenoid with flux $\phi$ perpendicular to the plane. More precisely, he assumed that each particle is rigidly bound to a solenoid that moves along with it. Consider now two such bound states. Let us perform the Gedankenexperiment of adiabatically carrying one bound state around the other along some closed curve $\Gamma$. Because of the Aharonov-Bohm effect, the wave function $\Psi$ of the bound state changes by an overall phase factor

$$
\begin{equation*}
\Psi \rightarrow \exp \left(i \frac{q e}{\hbar c} \oint_{\Gamma} \vec{A}(\vec{x}) \cdot d \vec{x}\right) \Psi \tag{10.129}
\end{equation*}
$$

where $\vec{A}$ is the vector potential associated with the magnetic flux of the solenoid. The angular momentum $\ell$ of the state is then equal to $(q e /(h c)) \phi$. If we denote by $\phi_{0}$ the flux quantum, $\phi_{0}=h c / e$, we can write the angular momentum $\ell$ in the form $\ell=q \alpha$, where $\alpha=\phi / \phi_{0}$. The angular momentum is not an integer if the Dirac quantization condition is not satisfied. The statistics obeyed by the bound states can be computed by considering an exchange process in which one bound state goes half its way around the other and, afterwards, both objects are shifted rigidly in such a way that they now have exchanged their initial positions. In this process their joint wave function has picked up a phase factor exactly equal to half of that for a full round trip around the other particle, i.e. $e^{i \pi \alpha}$. This definition is peculiar in the sense that the statistics of a state is determined by an adiabatic transport of the bound states in such a way that they never get on top of each other. Clockwise and counterclockwise processes yield complex-conjugate phase factors. These wave functions are not representations of the permutation group. These states form representations of the braid group. These states are not defined in terms of the coordinates of the bound states alone. We have seen in Section 10.5 that the amplitude for the propagation of a pair of spinons in a chiral spin liquid has precisely these properties. In that case, the fractional statistics was a consequence of the presence of an induced Chern-Simons term in the effective action for the low-energy degrees of freedom. We will see below that the Chern-Simons term is the most general local gauge-invariant Lagrangian which binds particles and fluxes together. In Chapter 13 we will see that the quasiholes of the Laughlin ground state for the FQHE have very similar properties.

### 10.7 Chern-Simons gauge theory: a field theory of anyons

In order to make further progress we need a theory that will bind particles and fluxes together. Fluxes are most simply described as curls of a gauge field, which is usually called the statistical gauge field. Also, we want the particles to feel the fluxes through an Aharonov-Bohm mechanism. This means that the particles have to be minimally coupled to the statistical gauge fields through the covariant derivative. There is a problem with this approach. In most cases, a fluxoid that is electromagnetically coupled to a charged particle is not usually bound to it. The Aharonov-Bohm effect is not a bound-state problem. Rather, the amplitudes for the propagation of the particle are modified, by a phase factor, in the presence of flux. Thus, in the usual case, particles and fluxoids move quite independently of each other. In the problem that we are discussing, we want to force particles and fluxes to move together, as if they were the constituents of a bound state. There is a theory that does all of that in a simple and straightforward way, namely the Chern-Simons gauge theory.

Let us imagine that we have a set of $N$ particles. In a path-integral picture, the motion of the particles is described in terms of a set of trajectories $\Gamma=\Gamma_{1}+\cdots+$ $\Gamma_{N}$ with specified initial and final conditions. Quantum mechanics tells us that we have to sum over all possible trajectories, weighting each history by the usual phase factor $\exp ((i / \hbar) S(\gamma))$ in terms of the classical action of that particular history. If the particles have mass $m$, the classical action $S_{m}$ of the particles is

$$
\begin{equation*}
S_{m}(\gamma)=\int_{t_{\mathrm{i}}}^{t_{\mathrm{f}}} d t \sum_{j=1}^{N}\left(\frac{1}{2} m\left(\frac{d \vec{x}_{j}}{d t}\right)^{2}+\frac{d \vec{x}_{j}}{d t} \cdot \overrightarrow{\mathcal{A}}\left(\vec{x}_{j}, t\right)-\mathcal{A}_{0}\left(\vec{x}_{j}, t\right)\right) \tag{10.130}
\end{equation*}
$$

The second term implies that the particle trajectories can also be regarded as a set of currents (and densities) $J_{\mu}=\left(J_{0}, \vec{J}\right)(\mu=0,1,2)$ that are different from zero only on the trajectories of the particles and carry the unit of charge.

What should the action for the statistical gauge fields be? It cannot have the standard Maxwell form since purely electrodynamic processes do not yield bound states of particles and fluxes. What is needed is a constraint that will rigidly bind particles and fluxes. There is only one gauge-invariant, local expression that does the job: the Chern-Simons action. Let us consider a theory of a vector field, $\mathcal{A}_{\mu}$, minimally coupled to a current $J_{\mu}$ (representing matter fields), with the ChernSimons action

$$
\begin{equation*}
S\left[\mathcal{A}_{\mu}\right]=\int d^{3} x \frac{\theta}{4} \epsilon_{\mu \nu \lambda} \mathcal{A}^{\mu} \mathcal{F}^{\nu \lambda}-\int d^{3} x \mathcal{A}_{\mu} J^{\mu} \tag{10.131}
\end{equation*}
$$

The Chern-Simons term, the first term of this action, is the unique local Lagrangian which is locally gauge-invariant (up to some caveats discussed below) with the smallest number of derivatives (one!), that breaks 2D parity $\mathcal{P}, x \rightarrow-x$ and $y \rightarrow$ $y$, and time reversal $\mathcal{T}$, while keeping the product $\mathcal{P} \mathcal{T}$ invariant. We will see in Chapters 12 and 13 that these features of the Chern-Simons term will enable us to construct a natural effective hydrodynamic theory of the quantum Hall effects (integer and fractional).

To clarify the physical implications of this action it is useful to expand it in components. We find, up to total derivatives, that the Lagrangian density is

$$
\begin{equation*}
\mathcal{L}\left[\mathcal{A}_{\mu}\right]=\mathcal{A}_{0}(x)\left[\theta \mathcal{B}(x)-J_{0}(x)\right]-\frac{\theta}{2} \epsilon_{i j} \mathcal{A}_{i}(x) \partial_{0} \mathcal{A}_{j}(x)-J_{i}(x) \mathcal{A}_{i}(x) \tag{10.132}
\end{equation*}
$$

where $\mathcal{B}=\epsilon^{i j} \partial_{i} \mathcal{A}_{j}$ is the local flux (or "magnetic" field).
The binding (or attachment) of particles and fluxes follows from the observation that in the Lagrangian of Eq. (10.132) the time component of the statistical vector potential $\mathcal{A}_{0}$ plays the role of a Lagrange multiplier field, which enforces the local constraint

$$
\begin{equation*}
J_{0}=\frac{\theta}{2} \epsilon_{i j} \mathcal{F}^{i j} \equiv \theta \mathcal{B} \tag{10.133}
\end{equation*}
$$

This constraint simply means that a statistical flux of strength $1 / \theta$ is present wherever there is a particle. In Section 10.5 we saw that the presence of a Chern-Simons term modifies the two particle amplitudes in such a way that they exhibit fractional statistics.

However, as we can also see from Eq. (10.132), the Chern-Simons term does more than attaching particles to fluxes. It also determines the canonical structure of this system. Indeed, we can apply the formalism of canonical quantization, which in a gauge theory is most transparent in the temporal $\left(\mathcal{A}_{0}=0\right)$ gauge. We see that, in this gauge, the canonical momentum conjugate to the component $\mathcal{A}_{1}$ of the gauge field is not the electric field (as is the case in Maxwell's electrodynamics) but (essentially) the other component, $\theta \mathcal{A}_{2}$. Thus the canonical equal-time commutation relations of Chern-Simons gauge theory are

$$
\begin{equation*}
\left[\mathcal{A}_{1}(\vec{x}), \mathcal{A}_{2}(\vec{y})\right]=\frac{i}{\theta} \delta^{(2)}(\vec{x}-\vec{y}) \tag{10.134}
\end{equation*}
$$

In fact, the choice of $\mathcal{A}_{1}$ and $\mathcal{A}_{2}$ as canonical pairs is arbitrary, since we could have chosen other linear combinations (called polarizations). A convenient choice that is often used is the holomorphic polarization with canonical pairs $\mathcal{A}_{z}=\mathcal{A}_{1}+i \mathcal{A}_{2}$ and $\mathcal{A}_{\bar{z}}=\mathcal{A}_{1}-i \mathcal{A}_{2}$ (a deeper and more general discussion can be found in the work of Elitzur et al. (1989)).

In addition, in this gauge, the physical states $\mid$ Phys $\rangle$ are required to satisfy (as usual) the Gauss-law condition, which here reduces to the constraint

$$
\begin{equation*}
\left.\left(\theta \mathcal{B}(\vec{x})-J_{0}(\vec{x})\right) \mid \text { Phys }\right\rangle=0 \tag{10.135}
\end{equation*}
$$

What about the Hamiltonian? From Eq. (10.132) it is easy to see that the Hamiltonian is

$$
\begin{equation*}
H=\int d^{2} x J_{i}(\vec{x}) \mathcal{A}_{i}(\vec{x}) \tag{10.136}
\end{equation*}
$$

Thus, in the absence of external currents (i.e. matter fields), the Hamiltonian of the Chern-Simons theory vanishes identically.

We conclude that the Chern-Simons gauge theory is equivalent to (a) a constraint relating flux to charge, (b) a set of commutation relations, and (c) a vanishing Hamiltonian. These seemingly peculiar properties follow from the fact that the Chern-Simons gauge theory is a topological field theory. As such it is independent of the choice of coordinates of space-time and thus it does not depend of the metric $g_{\mu \nu}$, from which it follows that the energy-momentum tensor must vanish,

$$
\begin{equation*}
T^{\mu \nu}=\frac{\delta S_{\mathrm{CS}}}{\delta g_{\mu \nu}}=0 \tag{10.137}
\end{equation*}
$$

As a consequence, the Hamiltonian vanishes identically. It also follows from the independence of the metric that the choice of polarization (canonical pairs) must
be to a large extent arbitrary since it requires a choice of gauge and a choice of coordinates (all of which explicitly break the topological invariance).

In Section 10.4 we showed that the Chern-Simons action is invariant under local (and smooth) gauge transformations, and that the invariance of the path integral under large gauge transformations requires that the weight of the path integral be single-valued on space-times without boundaries. As we saw, this leads to the quantization of the coupling constant of the Chern-Simons gauge theory, $\theta=k /(2 \pi)$, with $k$ being an integer. Witten showed that the expectation values of the gauge-invariant observables, the Wilson loops, are topological invariants and provided a way to compute them (Witten, 1989). On the other hand, on a spacetime manifold with boundaries, the Chern-Simons action is not invariant under gauge transformations that do not vanish at the boundary.

This observation is relevant in two cases of interest. One is a system defined on a finite region of space (for example a disk $D$ of circumference $L$ ) for all times. In this case the space-time manifold is the filled cylinder $\Sigma=D \times S_{1}$, where the circle $S_{1}$ represents imaginary time. In this case the only states of the Chern-Simons theory (in the absence of matter fields) have vanishing flux, $\mathcal{B}=0$, and hence are gauge transformations, $\mathcal{A}_{\mu}=\partial_{\mu} \phi$ (for the abelian case) and $\mathcal{A}_{\mu}=U^{-1} \partial_{\mu} U$ for the non-abelian case. Furthermore, a set of coordinates must be specified at the boundary. The effective action for these states depends only on the boundary values of $\phi$ (or $U$ ). If we define the boundary to be tangent to the direction $x_{1}$, we can write

$$
\begin{equation*}
S_{\mathrm{CS}}[\phi]=\int d x_{0} \int_{0}^{L} d x_{1} \frac{k}{4 \pi}\left(\partial_{0} \phi \partial_{1} \phi-\left(\partial_{1} \phi\right)^{2}\right) \tag{10.138}
\end{equation*}
$$

which is a $(1+1)$-dimensional scale-invariant (and conformal!) field theory, the chiral boson theory. In the non-abelian case the theory also projects to the boundary with an action

$$
\begin{equation*}
S_{\mathrm{CS}}[U]=k S_{\mathrm{WZW}}[U] \tag{10.139}
\end{equation*}
$$

where $k S_{\mathrm{WZW}}[U]$ is the action of the level- $k$ Wess-Zumino-Witten model (see Chapter 7), another conformal field theory in $(1+1)$ dimensions. Both systems, abelian and non-abelian, will play a key role in the theory of the edge states of quantum Hall fluids. We will discuss this problem in Chapter 13.

The other case of interest is the path integral for the wave functional of ChernSimons theory. By definition, the ground-state wave function $\Psi_{0}$ is the amplitude of the evolution from some specified initial state to the final (vacuum) state. Thus in this case the space-time manifold is open and has a boundary, the initial time surface. This discussion tells us that the wave function depends on a choice of
coordinates to define the initial state (which hence breaks general coordinate invariance) and also on the choice of polarization. Since the path integral is no longer gauge-invariant (it depends on the choice of gauge for the initial state) neither is the wave function. This is analogous to the gauge covariance of the wave functions of charged particles in magnetic fields. Nevertheless, the inner products of these states and the expectation values of (gauge-invariant) physical observables are gauge-invariant (Witten, 1992).

The key result from Witten's development of Chern-Simons gauge theory (Witten, 1989) is the identification of the expectation value of the Wilson loop operators with the topological invariants of the theory of knots, the Jones polynomial. Since the action is topological, the expectation values of the Wilson loops depend not on the shape and size of the loops but only on the topological character of the knots they form. The Wilson loops, on the other hand, are idealized representations of the worldlines of heavy particles in different physical processes (as we have seen earlier in this chapter).

The expectation values of the Wilson loops describe the quantum-mechanical amplitudes for adiabatic processes of these heavy excitations. These adiabatic processes are equivalent to an exchange of the particles, the braiding of their worldlines. For this reason, the fractional statistics that results, Eq. (10.117), is better called (abelian) braiding statistics. Braids satisfy a group property, in the sense that two consecutive braids are equivalent to a braid. This defines the braid group. The Hilbert space of states described by Chern-Simons gauge theory and its observables, the Wilson loops, can be classified by their braiding properties. Thus, these quantum states are representations of the braid group. The spinons of the chiral spin liquid and the quasiparticles of the Laughlin states of the FQHE (which we will discuss later) are one-dimensional representations of the braid group, described by a single phase, the statistical angle. Since these representations are one-dimensional, this type of fractional statistics is said to be abelian since different processes commute with each other.

However, the braid group has finite-dimensional representations. Witten showed that this happens in a Chern-Simons gauge theory with a non-abelian gauge group, such as $\mathrm{SU}(2)$, provided that the level $k>1$. These representations are labeled by a matrix of phases. Consequently exchange processes of particles with this property do not commute. This type of fractional statistics is called non-abelian. We will see in Chapter 13 that the quasihole excitations of certain fractional quantum Hall states are examples of non-abelian fractional statistics. A key feature of these states is that the wave function for $N$ of these particles is not fully specified by their coordinates. This results in a finite degeneracy of these states. A braiding process of two of the particles in one of these states is equivalent to a linear combination of the degenerate states. These different linear combinations define their braiding
matrices. This startling property led Kitaev (2003) and Freedman et al. (2002b) to propose the use of these states to make a topological quantum computer! (Das Sarma et al., 2008).

The previous discussion tells us that Chern-Simons gauge theory does not have local degrees of freedom, which is natural since it is a topological field theory. However, this does not mean that its Hilbert space is trivial. On a closed topologically non-trivial manifold, such as the torus, Chern-Simons gauge theories have a finite-dimensional Hilbert space whose dimension is determined by the quantized coupling constant, the gauge group, and the topology of the manifold (Witten, 1989).

### 10.8 Periodicity and families of Chern-Simons theories

The results of the last section allow us to conclude that a theory of anyons with statistical phase $\delta$ can be defined in terms of a theory of fermions coupled to a Chern-Simons gauge field with a coupling constant $\theta=1 /(2 \delta)$. Likewise, the same theory of anyons can also be defined in terms of a theory of bosons with hard cores coupled to a Chern-Simons gauge field but with a coupling constant $\theta=1 /(2(\delta \pm \pi))$. This equivalence is the starting point of the boson approach.

However, there is an apparent discrepancy between the fermion (or boson) and anyon theories. The problem is that the anyon commutation relations are periodic in the statistical phase $\delta$. Nothing changes in the anyon problem if the statistical phase is shifted by $\delta \rightarrow \delta+2 \pi n$, where $n$ is an arbitrary integer, not necessarily positive. On the other hand, the only information in Chern-Simons theory about the statistics of the particles is in the coupling constant $\theta$. It is not obvious that the Chern-Simons theory is invariant under the change in its coupling constant $1 / \theta \rightarrow$ $1 / \theta+4 \pi n$ as is required by the anyon commutation relations. This issue is of particular importance, since all of the approximations which are commonly made, such as the average-field approximation of Laughlin, work only in one particular period, i.e. for a choice of $n$. Fortunately, it is possible to show that the ChernSimons theory is indeed invariant under shifts. Notice that a shift of $\delta$ by $2 \pi n$ is equivalent to attaching an additional even number $2 n$ of flux quanta to each one of the particles. The argument is the following.

Let us first prove that "an even number of flux quanta is the same as nothing." Consider a system of fermions coupled to a Chern-Simons gauge field with coupling constant $\theta=1 /(4 \pi n)$. In first quantization, the functional integral reduces to a sum over all the histories of the particles and gauge fields. In Section 10.5 we showed that the trajectories of the fermions form braids. If we compare two histories that differ just by the relative braiding of two particles, the propagation amplitude changes just by a phase factor $\exp (i \Delta \nu /(2 \theta))$, where $\Delta \nu$ is
the change in the linking number. Thus, for $\theta=1 /(4 \pi n)$, all scattering amplitudes remain unchanged since the phase change is just an integer multiple of $2 \pi$.

This suggests that, if we want to attach an additional even number of fluxes to each particle, then we have to couple the system of fermions to a new ChernSimons gauge field, let us call it $\mathcal{A}_{\mu}^{\prime}$, with a coupling constant $\theta^{\prime}=1 /(4 \pi n)$. Thus, the fermions end up being coupled to two Chern-Simons gauge fields, of which one is responsible for the fractional statistics and the other for the periodicity.

However, the resulting theory seems to be unnecessarily complicated. This problem can be remedied quite easily. Since the (abelian!) Chern-Simons action is bilinear in the fields, we can integrate out one of the two gauge fields. More precisely, let us consider a problem in which two Chern-Simons gauge fields, $\mathcal{A}_{\mu}$ and $\mathcal{A}_{\mu}^{\prime}$, are both coupled to the same Fermi field $\psi$ through the Lagrangian density $\mathcal{L}$ (I drop the subindex of the gauge fields)

$$
\begin{equation*}
\mathcal{L}=\mathcal{L}_{\mathrm{F}}\left[\psi, \mathcal{A}+\mathcal{A}^{\prime}\right]+\theta_{1} \mathcal{L}_{\mathrm{CS}}[\mathcal{A}]+\theta_{2} \mathcal{L}_{\mathrm{CS}}\left[\mathcal{A}^{\prime}\right] \tag{10.140}
\end{equation*}
$$

where $\mathcal{L}_{\mathrm{F}}\left[\psi, \mathcal{A}+\mathcal{A}^{\prime}\right]$ is the fermion part of the Lagrangian. Note that the fermions are assumed to couple in the same way to both gauge fields. This is needed in order for the fluxes to be additive. We can use the invariance of the integration measure to define a new gauge field $A=\mathcal{A}+\mathcal{A}^{\prime}$. The fermion couples only to the field $A$.

Let us now compute the functional integral over the fields $\mathcal{A}^{\prime}$. After the shift the Lagrangian reads

$$
\begin{align*}
\mathcal{L} & =\mathcal{L}_{\mathrm{F}}[\psi, A]+\theta_{1} \mathcal{L}_{\mathrm{CS}}\left[A-\mathcal{A}^{\prime}\right]+\theta_{2} \mathcal{L}_{\mathrm{CS}}\left[\mathcal{A}^{\prime}\right] \\
& =\mathcal{L}_{\mathrm{F}}[\psi, A]+\left(\theta_{1}+\theta_{2}\right) \mathcal{L}_{\mathrm{CS}}\left[\mathcal{A}^{\prime}\right]+\theta_{1} \mathcal{L}_{\mathrm{CS}}[A]-\frac{\theta_{1}}{2} \epsilon_{\mu \nu \lambda} \mathcal{A}_{\mu}^{\prime} F_{\nu \lambda} \tag{10.141}
\end{align*}
$$

The functional integral over the $\mathcal{A}_{\mu}^{\prime}$ fields can be carried out exactly. As usual, one first shifts the field $\mathcal{A}_{\mu}^{\prime} \rightarrow \mathcal{A}_{\mu}^{\prime}+\tilde{\mathcal{A}}_{\mu}$, and $\tilde{\mathcal{A}}_{\mu}$ is then determined from the condition that the terms linear in $\mathcal{A}_{\mu}^{\prime}$ are exactly cancelled out. This condition yields the result

$$
\begin{equation*}
\tilde{\mathcal{A}}_{\mu}=\left(\frac{\theta_{1}}{\theta_{1}+\theta_{2}}\right) A_{\mu} \tag{10.142}
\end{equation*}
$$

The fermions are coupled to a single Chern-Simons gauge field $A_{\mu}$ with the effective Lagrangian

$$
\begin{equation*}
\mathcal{L}_{\mathrm{eff}}=\mathcal{L}_{\mathrm{F}}\left[\psi, A_{\mu}\right]+\theta_{\mathrm{eff}} \mathcal{L}_{\mathrm{CS}}\left[A_{\mu}\right] \tag{10.143}
\end{equation*}
$$

The effective Chern-Simons coupling $\theta_{\text {eff }}$ given by

$$
\begin{equation*}
\frac{1}{\theta_{\mathrm{eff}}}=\frac{1}{\theta_{1}}+\frac{1}{\theta_{2}} \tag{10.144}
\end{equation*}
$$

If we now make the choice $\theta_{2}=1 /(4 \pi n)$ we get the desired result.

Thus, Chern-Simons theories with coupling constants $\theta$ of the form $1 / \theta=$ $2 \delta+4 \pi n$ have the same physical properties. This result is often called the flux-attachment transformation. Although this equivalence is an exact result, approximations for each member of this sequence yield quite different results. This property will be of great importance for our discussion of the FQHE in Chapter 13.

### 10.9 Quantization of the global degrees of freedom

In this section we consider the role and quantization of global degrees of freedom. Here I follow the results of Wen, Dagotto, and myself (Wen et al., 1990), and of Section 9.9. The global gauge degrees of freedom $\bar{A}_{j}$ are completely unaffected by the Jordan-Wigner transformation, which involves only local transformations. They satisfy the homogeneous constraint equation

$$
\begin{equation*}
\epsilon_{j k} \Delta_{j} \bar{A}_{k}=0 \tag{10.145}
\end{equation*}
$$

As was discussed above, these degrees of freedom cannot be eliminated by local ("small") gauge transformations since they have non-vanishing circulation $\Gamma_{j}$ along any large circles $\mathcal{C}_{j}$ of the torus, i.e. the holonomies of the torus. The "best" we can do, for instance, is to pick the gauge in which the fields $\bar{A}_{j}$ are constant in space (but not in time!),

$$
\begin{equation*}
\bar{A}_{j}=\frac{\Gamma_{j}(t)}{L_{j}} \tag{10.146}
\end{equation*}
$$

(no sum over $j$ is implied).
These relations allow us to derive an effective Lagrangian for the global degrees of freedom $\Gamma_{j}(t)$ and to extract from it the quantum dynamics of the global degrees of freedom. By carrying out the canonical formalism to completion, it is easy to check that the non-integrable phases obey the commutation relations

$$
\begin{equation*}
\left[\Gamma_{1}, \Gamma_{2}\right]=\frac{i}{\theta} \tag{10.147}
\end{equation*}
$$

Hence, $\Gamma_{1}$ and $\theta \Gamma_{2}$ form a canonical pair and cannot be diagonalized simultaneously. This feature is not present in 1D systems, for which there is only one non-integrable phase, which is just a c-number. The global degrees of freedom in one dimension are just boundary conditions. In $(2+1)$ dimensions, we discover that the global degrees of freedom acquire a life of their own. We will see now that, as a result of this feature, the states of anyon systems on a torus are not determined by the location of the particle alone.

It is now easy to check that the operators $\exp \left(i \Gamma_{j}\right)$ satisfy the algebra

$$
\begin{equation*}
e^{i \Gamma_{1}} e^{i \Gamma_{2}}=e^{-\frac{i}{\theta}} e^{i \Gamma_{2}} e^{i \Gamma_{1}} \tag{10.148}
\end{equation*}
$$

Let us denote the exponential operators $\exp \left(i \Gamma_{j}\right)$ by $T_{j}$. These operators will give an extra phase to any state as the anyons move around each other. Furthermore, since $\Gamma_{1}$ and $\Gamma_{2}$ do not commute, the eigenstates of the Hamiltonian are functions of either variable but not of both at the same time. Also, both $\Gamma_{1}$ and $\Gamma_{2}$ enter only through the exponential operators $T_{j}$. Thus we can always choose, say, $\Gamma_{1}$ to be an angle with a range $[0,2 \pi]$. Hence $\theta \Gamma_{2}$ is an angular-momentum-like operator whose spectrum is the set of integers. In all cases of physical interest, the statistical angle $\theta$ can only take the restricted set of values $\theta=m /(2 \pi n)$, where $m$ and $n$ are integers. After all local gauge degrees of freedom have been eliminated, we find that the effective Hamiltonian for the anyon system has the form

$$
\begin{equation*}
H=\sum_{\vec{x}, j=1,2} a^{\dagger}(\vec{x}) \exp \left[i\left(\mathcal{A}_{j}(\vec{x})+\frac{\Gamma_{j}}{L_{j}}\right)\right] a\left(\vec{x}+e_{j}\right)+\text { h.c. } \tag{10.149}
\end{equation*}
$$

where $\mathcal{A}_{j}$ is given by the solution of the local constraint. This Hamiltonian is almost identical to the "free-anyon" Hamiltonian. The only difference here is the presence of the global degrees of freedom $\Gamma_{j}$, which were not included in our original naive expression. We will adopt this generalized version as the definition of the anyon Hamiltonian. In other words, the global degrees of freedom are an intrinsic feature of the anyon system on a torus. Clearly, if the manifold on which the anyons move is not a torus, but some other manifold, the properties of the global degrees of freedom will be different. For instance, if the system is quantized on a manifold with a boundary, such as a disk, there are no global degrees of freedom. Instead, gauge invariance requires the existence of edge states, which have very interesting properties.

The form of the Hamiltonian suggests that its eigenstates are not functions only of the coordinates of the anyons, since $H$ involves the global degrees of freedom as well. Let us denote by $\Psi_{0}$ an eigenstate of $H$. We can also choose $\Psi_{0}$ to be an eigenstate of $\Gamma_{1}$ with zero eigenvalue or, which is equivalent, to be an eigenstate of $T_{1}$ with unit eigenvalue

$$
\begin{equation*}
T_{1} \Psi_{0}=\Psi_{0} \tag{10.150}
\end{equation*}
$$

Thus $\left|\Psi_{0}\right\rangle$ is the "highest-weight state." Let us consider now the state $\Psi_{p}$ defined by

$$
\begin{equation*}
\Psi_{p} \equiv T_{2}^{p} \Psi_{0} \tag{10.151}
\end{equation*}
$$

The state $\Psi_{p}$ is an eigenstate of $T_{1}$,

$$
\begin{equation*}
T_{1} \Psi_{p} \equiv T_{1} T_{2}^{p} \Psi_{0}=e^{-\frac{i p}{\theta}} T_{2}^{p} T_{1} \Psi_{0}=e^{-\frac{i p}{\theta}} \Psi_{p} \tag{10.152}
\end{equation*}
$$

with the eigenvalue $e^{-\frac{i p}{\theta}}$. Thus, for all cases of physical interest $(\theta=m /(2 \pi n))$, there are $m$ distinct eigenstates, each labeled by the integer $p$. The states of the Hilbert space are thus labeled by the anyon coordinates and by the quantum number
$p$ describing the state of the global degrees of freedom. In particular, the condensed states of the anyon system do exhibit this degeneracy. The idea that such topological degeneracies occur quite generally in spin-liquid states and other topological fluid states, which we discussed extensively in Chapter 9, was originally due to Wen (1989).

### 10.10 Flux phases and the fractional quantum Hall effect

In Section 8.5 we considered solutions to the saddle-point equations, Eq. (8.64) and Eq. (8.65), with a spontaneously generated flux of $\pi$ per plaquette. The problem was shown to be equivalent, at the saddle-point level, to a system of fermions moving in a uniform average field with a one-half flux quantum per plaquette. In Section 10.1, we saw that a next-nearest-neighbor exchange coupling, which frustrates the system, effectively lowers the energy of the flux state. Furthermore, it drives the flux state into a chiral phase with spontaneously broken time-reversal invariance. The flux phase has two bands that become degenerate at four points of the Brillouin zone. The chiral states have gaps at those points, and the gaps grow larger as the frustrated regime $J_{1} \simeq 2 J_{2}$ is approached.

If the fluctuations around the mean field are ignored (in the first stage), a flux phase is then equivalent to two species (up and down spinons) of fermions moving in that flux. In the chiral phase we also have a gap, which grows larger as frustration increases (i.e. for increasing $J_{2} / J_{1}$ ). The one-particle spinon states can, in this limit, be approximated by the eigenstates of the lowest Landau level of a continuum problem in which the fermions move in a field with the same total flux. This approximation should be qualitatively correct, provided that no level crossings occur. However, as we stressed previously, it is not possible to ignore the fluctuations around the mean field. Nevertheless, such an analogy offers the possibility of a new sort of spin liquid: a Laughlin state.

Laughlin states (Laughlin, 1983) are condensed states of $N$ fermions moving on a plane in the presence of an external magnetic field. These incompressible states, which have been shown to exhibit the fractional Hall effect, represent a featureless liquid. It is tempting to speculate that the spin-liquid states, which are also incompressible if there is a gap, may be described in terms of a Laughlin wave function, which we will discuss below.

Kalmeyer and Laughlin (1987) showed that, in the case of frustrated quantum spin systems, there is indeed a close analogy with the Hall-effect system except for the fact that, here, we have bosons instead of fermions. Let us discuss the Kalmeyer-Laughlin picture in more detail. Consider a frustrated quantum spin system, such as the square lattice with $J_{1}=2 J_{2}$ or the triangular lattice. Let us assume that the Hamiltonian is still given by the usual Heisenberg exchange Hamiltonian.

Instead of representing spins in terms of constituent bands of fermions, one can use hard-core bosons instead. This idea goes back to Holstein and Primakoff. Let $|F\rangle$ represent the ferromagnetic state, which we will use as a reference state, not necessarily the ground state. Relative to $|F\rangle$, the raising operator $S^{+}(\vec{r})$ acts like a boson-creation operator, a spin-flip being the boson. Since it is not possible to flip a spin twice, the bosons should have hard cores: a site cannot be occupied by more than one boson. More formally, we can write

$$
\begin{align*}
S^{+}(\vec{r}) & =S_{1}(\vec{r})+i S_{2}(\vec{r}) \equiv a^{\dagger}(\vec{r})  \tag{10.153}\\
S^{-}(\vec{r}) & =S_{1}(\vec{r})-i S_{2}(\vec{r}) \equiv a(\vec{r})
\end{align*}
$$

and

$$
\begin{equation*}
S_{z}(\vec{r})=a^{\dagger}(\vec{r}) a(\vec{r})-\frac{1}{2} \tag{10.154}
\end{equation*}
$$

where the operators $a$ and $a^{\dagger}$ are bosons and, hence, satisfy the commutation relations

$$
\begin{equation*}
\left[a(\vec{r}), a^{\dagger}\left(\vec{r}^{\prime}\right)\right]=\delta_{\vec{r}, \vec{r}^{\prime}} \tag{10.155}
\end{equation*}
$$

The Pauli spin algebra requires that these operators also satisfy a hard-core condition,

$$
\begin{equation*}
a^{2}=\left(a^{\dagger}\right)^{2}=0 \tag{10.156}
\end{equation*}
$$

Using these identities, it is now easy to write the Heisenberg Hamiltonian in terms of hard-core bosons. Notice that these identities follow just from the nature of the states at each site. Thus, they hold for any lattice and dimension.

Thus, the quantum Heisenberg antiferromagnet can be written as an equivalent model of hard-core bosons with a Hamiltonian of the form

$$
\begin{align*}
H= & \frac{J}{2} \sum_{\left\langle\vec{r}, \vec{r}^{\prime}\right\rangle}\left(a^{+}(\vec{r}) a\left(\vec{r}^{\prime}\right)+a^{+}\left(\vec{r}^{\prime}\right) a(\vec{r})\right) \\
& -\gamma J \sum_{\vec{r}} a^{+}(\vec{r}) a(\vec{r}) \\
& +J \sum_{\left\langle\vec{r}, \vec{r}^{\prime}\right\rangle} a^{+}(\vec{r}) a(\vec{r}) a^{+}\left(\vec{r}^{\prime}\right) a\left(\vec{r}^{\prime}\right) \\
& +\frac{\gamma N J}{4}+U_{\infty} \sum_{\vec{r}} a^{+}(\vec{r}) a(\vec{r})\left(a^{+}(\vec{r}) a(\vec{r})-1\right) \tag{10.157}
\end{align*}
$$

where $\left\langle\vec{r}, \vec{r}^{\prime}\right\rangle$ stands for the nearest-neighboring sites $\vec{r}$ and $\vec{r}^{\prime}$ (on that lattice), $\gamma$ is the coordination number, and $N$ is the total number of sites. The last term enforces the hard-core condition since at $U_{\infty} \rightarrow \infty$ the only states in the Hilbert space with finite energy are occupied by at most one boson.

We are interested in studying the sector of the Heisenberg model with $S_{z}^{\text {tot }}=0$. This implies that the bosons half-fill the system. Thus, if $N_{\mathrm{B}}$ is the number of bosons, we have

$$
\begin{equation*}
S_{z}^{\mathrm{tot}}=\sum_{\vec{r}}\left(\frac{1}{2}-a^{+}(\vec{r}) a(\vec{r})\right)=\frac{N}{2}-N_{\mathrm{B}}=0 \tag{10.158}
\end{equation*}
$$

i.e. the number of bosons equals half the number of sites, $N_{\mathrm{B}}=N / 2$.

The first term of the Hamiltonian Eq. (10.157) can be regarded as a kineticenergy term for the bosons. However, it has the wrong sign. We can remedy this problem by means of the following trick. Let $A\left(\vec{r}, \vec{r}^{\prime}\right)$ be a fixed gauge field defined on each link. Let us write the Hamiltonian Eq. (10.157) in the form

$$
\begin{align*}
H= & -\frac{J}{2} \sum_{\left\langle\vec{r}, \vec{r}^{\prime}\right\rangle}\left(a^{+}(\vec{r}) e^{i A\left(\vec{r}, \vec{r}^{\prime}\right)} a\left(\vec{r}^{\prime}\right)+\text { h.c. }\right)+J \sum_{\left\langle\vec{r}, \vec{r}^{\prime}\right\rangle} a^{+}(\vec{r}) a(\vec{r}) a^{+}\left(\vec{r}^{\prime}\right) a\left(\vec{r}^{\prime}\right) \\
& +U_{\infty} \sum_{\vec{r}} a^{+}(\vec{r}) a(\vec{r}) a^{+}(\vec{r}) a(\vec{r})-\left(\frac{\gamma N J}{4}+\frac{U_{\infty} N}{2}\right) \tag{10.159}
\end{align*}
$$

This expression is consistent with Eq. (10.157) provided that $A\left(\vec{r}, \vec{r}^{\prime}\right)=\pi$ for all bonds of the lattice. Now, the first term does have the interpretation of the kineticenergy operator for the bosons, but there is an external fixed gauge field $A\left(\vec{r}, \vec{r}^{\prime}\right)$. This gauge field, or rather its circulation, represents the frustration of the spin system. For the case of a bipartite lattice, such as the square lattice, this gauge field can be removed. This is so because the circulation of $A\left(\vec{r}, \vec{r}^{\prime}\right)$ around any elementary plaquette of the square lattice is always equal to $2 \pi$, which, by periodicity, is equivalent to zero. Indeed, on the square lattice, the transformation

$$
\begin{equation*}
a(\vec{r}) \rightarrow(-1)^{x_{1}+x_{2}} a(\vec{r}) \tag{10.160}
\end{equation*}
$$

flips all the signs and we get a kinetic-energy operator with a proper sign.
However, for a frustrated lattice, it is not possible to do this. In the case of a triangular lattice the circulation is $3 \pi$, which is equivalent to $\pi(\bmod 2 \pi)$. Thus, the flux is intrinsic and it is determined by the lattice structure. Moreover, we conclude that the bosons behave like particles of charge $e$ moving in an external magnetic field $B$ with a flux of half of the flux quantum per triangle. This result motivates the following approximation (Kalmeyer and Laughlin, 1987).

Consider a system of hard-core bosons with an effective mass $M$ moving on a plane in the presence of an external magnetic field $B$ and of a periodic potential $V(\vec{r})$ that localizes the bosons on the lattice sites. The bosons also have a shortrange interaction. Now one imagines varying the periodic potential from some weak value to the strong tight-binding limit, in which Eq. (10.159) holds. The magnetic field $B$ is fine-tuned so as to always give one-half of a flux quantum per
triangle. If we denote the lattice spacing by $a_{0}$ and the magnetic (or cyclotron) length by $l_{0}$, we can fulfill the requirements mentioned above by setting $B=1 / l_{0}^{2}$ and $l_{0}=a_{0}(\sqrt{3} /(4 \pi))^{1 / 2}$, in units in which the flux quantum $\phi_{0}$ equals $2 \pi$.

Assume for the moment that we can make the further approximation that the tight-binding (lattice) limit and the weak-potential limit are smoothly connected. In this limit a simple physical picture can be drawn. The problem we are dealing with is that of a set of bosons with hard cores and short-range interactions, which carry the unit of charge and are moving on a plane in the presence of an external magnetic field perpendicular to the plane. Except for the fact that these particles are bosons, this situation appears to be identical to the problem of the fractional quantum Hall effect. In that case fermions (electrons each with charge $e$ ) move on a plane in the presence of a magnetic field $B$ with the same geometry. The electrons have short-range interactions. This problem was solved by Laughlin (1983) who guessed a wave function for it that appears to have exceedingly good properties. It then appears that the chiral spin state and the fractional quantum Hall effect (FQHE) belong to a general class of problems that are characterized by strong correlation and broken time-reversal invariance. In the FQHE case, time reversal is broken explicitly by the presence of the external magnetic field. In the chiral-spin-state case time-reversal symmetry is spontaneously broken. We will see below that, at long distances and low energies, both problems have effective Lagrangians that include a Chern-Simons term. In a sense it is this Chern-Simons term which defines this problem.

### 10.11 Anyons at finite density

In this section we consider a simple model that describes a gas of anyons at finite density. Since we are interested in systems in their thermodynamic limit, this theory is necessarily a field theory of anyons. The model that we will discuss is a system of "free" anyons on a square lattice (in space) with the topology of a torus. We choose to work on a spatial lattice both in order to avoid regularization problems and with an eye on applications to theories of high- $T_{\mathrm{c}}$ superconductors. The time variable will remain continuous. This choice simplifies the formalism without any significant loss of generality. The model can also be defined rigorously on a space-time lattice (Fröhlich and Marchetti, 1988). The results have much wider applications than our derivation may suggest. For instance, as a byproduct, we will derive a Jordan-Wigner transformation for systems in two space dimensions. This transformation is of great use for the study of 2D quantum magnets. The theory can also be considered in the continuum, although some care has to be exercised at short distances. Chen, Wilczek, Witten, and Halperin (Chen et al., 1989) considered the continuum non-relativistic theory in great detail. In this section, I discuss the
problem on a 2D square lattice, following the results of Fradkin (1989), which were expanded and clarified (and corrected) by Eliezer and Semenoff (1992a, 1992b).

In the model that we consider, the anyons are free in the sense that the Hamiltonian contains only a nearest-neighbor hopping term. However, the anyons will be assumed to have hard cores. This requirement is essential to the whole construction, since otherwise the anyon worldlines can cross and the notion of braids falls apart.

Let us now show that the problem of a gas of $N_{\mathrm{a}}$ anyons with hard cores on a square lattice is equivalent to a gas of $N_{\mathrm{f}}=N_{\mathrm{a}}$ fermions, on the square lattice, coupled to a Chern-Simons gauge field defined on the links of that lattice. To be more precise, let $a^{\dagger}(\vec{x})$ and $a(\vec{x})$ be a set of anyon-creation and -annihilation operators defined on the sites $\{\vec{x}\}$ of the square lattice that satisfy the generalized equal-time commutation relations

$$
\begin{equation*}
a(\vec{x}) a^{\dagger}(\vec{y})=\delta_{\vec{x}, \vec{y}}-e^{i \delta} a^{\dagger}(\vec{y}) a(\vec{x}) \tag{10.161}
\end{equation*}
$$

The angle $\delta$ indicates that we are dealing with fractional statistics. The choice of sign is such that for $\delta=0$ we have fermions, whereas for $\delta=\pi$ we have bosons. The hard-core condition implies that, when acting on physical states, these operators obey

$$
\begin{equation*}
a^{\dagger}(\vec{x}) a^{\dagger}(\vec{x})=a(\vec{x}) a(\vec{x})=0 \tag{10.162}
\end{equation*}
$$

The second quantized Hamiltonian is simply given by

$$
\begin{equation*}
H=\sum_{\langle\vec{x}, \vec{y}\rangle} a^{\dagger}(\vec{x}) a(\vec{y})+\text { h.c. } \tag{10.163}
\end{equation*}
$$

where $\langle\vec{x}, \vec{y}\rangle$ are nearest-neighboring sites on the square lattice.
Consider now a set of fermion-creation and -annihilation operators $c^{\dagger}(\vec{x})$ and $c(\vec{x})$ on the same square lattice. Let $A_{j}(\vec{x})$ be a set of boson operators defined on the links of the lattice $\left\{\left(\vec{x}, \vec{x}+e_{j}\right)\right\}$ (with $j=1,2$ ) representing statistical gauge fields. A naive transcription of the commutation relations of the Chern-Simons gauge theory in the continuum to a discrete lattice would lead to the requirement that the gauge fields defined on the links of the lattice must satisfy equal-time commutation relations of the form

$$
\begin{equation*}
\left[A_{1}(\vec{x}), A_{2}(\vec{y})\right]=\frac{i}{\theta} \delta_{\vec{x}, \vec{y}} \tag{10.164}
\end{equation*}
$$

Notice that, at every point $\vec{x}$ of the lattice, the component of the vector potential along the direction $x_{1}$ is the canonical pair of the component along the direction $x_{2}$. We will see below that these commutation relations are not quite correct, and that this leads to inconsistencies.

The dynamics of the system is governed by the Hamiltonian

$$
\begin{equation*}
H_{\mathrm{f}}=\sum_{\vec{x}, j} c^{\dagger}(\vec{x}) e^{i A_{j}(\vec{x})} c\left(\vec{x}+e_{j}\right)+\text { h.c. } \tag{10.165}
\end{equation*}
$$

and the physical states $\{|\mathrm{Phys}\rangle\}$ are required to satisfy a local constraint ("Gauss's law") between the fermion density $\rho(\vec{x})$ and the local magnetic flux $B(\vec{x})$ of the statistical gauge fields,

$$
\begin{equation*}
(\rho(\vec{x})-\theta B(\vec{x})) \mid \text { Phys }\rangle=0 \tag{10.166}
\end{equation*}
$$

This constraint implies that a fluxoid of strength $1 / \theta$ is attached to each particle at the level of the lattice scale. The local statistical flux $B(\vec{x})$ is given by the usual formula

$$
\begin{equation*}
B(\vec{x})=\Delta_{1} A_{2}(\vec{x})-\Delta_{2} A_{1}(\vec{x}) \tag{10.167}
\end{equation*}
$$

where $\Delta_{j}$ is the finite-difference operator in the direction $j$. The flux thus defined effectively exists only on the dual lattice. This formulation has the additional advantage that the particles are not allowed to get "inside" the flux.

However, we must now check that the Gauss-law generators $G(\vec{x})$ defined by Eq. (10.166) commute with each other at all lattice points

$$
\begin{equation*}
[G(\vec{x}), G(\vec{y})]=0 \tag{10.168}
\end{equation*}
$$

This condition, a requirement for the consistency of a gauge theory, is not satisfied with the naive commutation relations we assumed in Eq. (10.164). There is, however, a consistent set of commutation relations compatible with the Gauss-law constraints, which can be derived from the following lattice action (in continuous time) for the Chern-Simons gauge field (Eliezer and Semenoff, 1992a, 1992b) ( $i, j=1,2$ ):

$$
\begin{equation*}
S_{\mathrm{CS}}[A]=\int d t \sum_{\vec{x}} A_{0}(\vec{x}, t) \epsilon^{i j} A_{j}(\vec{x}, t)-\frac{1}{2} \int d t \sum_{\vec{x}} A_{i}(\vec{x}, t) L_{i j} \partial_{t} A_{j}(\vec{x}, t) \tag{10.169}
\end{equation*}
$$

where $L_{i j}$ is the following lattice operator:

$$
L_{i j}=-\frac{1}{2}\left(\begin{array}{cc}
\Delta_{2}^{+}+\Delta_{2}^{-} & -2-2 \Delta_{1}^{+}+2 \Delta_{2}^{-}+\Delta_{2}^{-} \Delta_{1}^{+}  \tag{10.170}\\
2+2 \Delta_{2}^{+}-2 \Delta_{1}^{-}-\Delta_{1}^{-} \Delta_{2}^{+} & -\Delta_{1}^{+}-\Delta_{2}^{-}
\end{array}\right)
$$

where $\Delta_{i}^{ \pm}$are the forward (+) and backward (-) difference operators along direction $i: \Delta_{i}^{ \pm} f(\vec{x})=f\left(\vec{x} \pm e_{i}\right)-f(\vec{x})$, with $e_{i}$ the lattice unit vector along direction $i$. The second term of this action defines the canonical commutation relations, which, although they are less local than the naive ones of Eq. (10.164), lead to compatible constraints.

The Hamiltonian $H$, together with the constraint and the commutation relations, follows from the canonical quantization in the gauge $A_{0}=0$ of the lattice action (again with continuous time)

$$
\begin{equation*}
S=\int d t \sum_{\vec{x}} c^{\dagger}(\vec{x}, t)\left(i \partial_{0}+A_{0}+\mu\right) c(\vec{x}, t)-\int d t H_{\mathrm{f}}\left(c^{\dagger}, c, \vec{A}\right)-S_{\mathrm{CS}}[A] \tag{10.171}
\end{equation*}
$$

Here $H_{\mathrm{f}}$ is the fermion Hamiltonian of Eq. (10.165), $\mu$ is the chemical potential, $x=(\vec{x}, t)$, and $S_{\mathrm{CS}}$ is the Chern-Simons action of Eq. (10.169). This action is explicitly invariant under local, time-dependent, gauge transformations.

The equivalence between the anyon Hamiltonian and the Chern-Simons gauge theory coupled to fermions is established by solving the constraint Eq. (10.166), the flux-attachment condition that relates the local flux to the local density. This can be accomplished by fixing the remaining invariance under local time-independent gauge transformations. We will choose the Coulomb or anyon gauge $\vec{\nabla} \cdot \vec{A}(\vec{x})=0$. The statistical vector potential $\vec{A}(\vec{x})$ which is the solution of the constraint in this gauge is an explicit function only of the local particle density. Thus it may appear that there are no gauge degrees of freedom left. This, however, is not generally the case. Whether or not there are any gauge degrees of freedom left depends on the boundary conditions. On a torus, there are global gauge degrees of freedom that are not affected by the local fixing of the gauge.

We now have to solve the constraint, Eq. (10.166), for a square lattice with the topology of a torus. Let $L_{1}$ and $L_{2}$ be the linear dimensions of the lattice along directions 1 and 2, respectively. It is impossible to eliminate all the gauge degrees of freedom by solving the constraint equation no matter what gauge is chosen unless large gauge transformations that wrap around the torus along direction 1 or 2 are included. Following our discussion in Chapter 9, let us consider the circulation of the statistical vector potential on a non-contractible closed loop wrapping around the torus along one of its large circles $\mathcal{C}_{j}(j=1,2)$. Any local time-independent gauge transformation shifts the spatial components of the vector potential $A_{k}$ by the gradient of a smooth function of the coordinates $\Lambda(\vec{x})$, i.e. $A_{k}(\vec{x}, t) \rightarrow A_{k}(\vec{x}, t)+$ $\Delta_{k} \Lambda(\vec{x})$. Thus, the circulation $\Gamma_{j}$, with $\Gamma_{j}=\oint_{\mathcal{C}_{j}} d \vec{x} \cdot \vec{A}(\vec{x})$ (which can be defined on the square lattice in an obvious way), is unchanged since $\Lambda$ is a smooth and single-valued function of $\vec{x}$. Notice that this is the case even in the absence of fermions! Thus, the circulations $\Gamma_{j}$, or non-integrable phases, are global degrees of freedom of the gauge field. A consistent treatment of this problem must take into account their dynamics.

There is a simple way to take care of both global and local gauge degrees of freedom. The local gauge degrees of freedom are non-local functions of the local particle density $\rho(\vec{x}, t)$ given by the solution of the local constraint equation in
some particular gauge. The global degrees of freedom are the non-integrable phases $\Gamma_{j}$. To make any further progress it is necessary to fix the gauge. At the level of the functional integral, we first observe that the component $A_{0}$ of the statistical gauge field can always be integrated out, giving rise to the local constraint at all times. We next write the spatial components of the statistical vector potential $A_{j}$ in the form

$$
\begin{equation*}
A_{j}(x)=\mathcal{A}_{j}(x)+\bar{A}_{j}(x) \tag{10.172}
\end{equation*}
$$

where $\mathcal{A}_{j}$ is a particular solution of the constraint equation and $\bar{A}_{j}$ generates the non-integrable phases which are solutions to the homogeneous constraint equation (i.e. without fermions). We can completely determine all of these fields by choosing a particular gauge.

Let us consider first the local gauge degrees of freedom. In the Coulomb gauge, the inhomogeneous solution for the constraint equation is given in terms of the scalar field $\Phi(\vec{r})$ :

$$
\begin{equation*}
\mathcal{A}_{j}(\vec{x})=\epsilon_{j k} \Delta_{k} \Phi(\vec{r}) \tag{10.173}
\end{equation*}
$$

where $\vec{r}$ are the sites of the dual lattice (Fradkin, 1989). Here the scalar field $\Phi$ is the solution to the equation (see Eq. (10.166) and Eq. (10.167))

$$
\begin{equation*}
\Delta^{2} \Phi(\vec{r})=-\frac{1}{\theta} \rho(\vec{x}) \tag{10.174}
\end{equation*}
$$

where $\vec{r}$ is the site on the dual lattice located northeast of the site $\vec{x}$ on the direct lattice and $\Delta^{2}$ is the lattice Laplacian.

In this approach, fluxes are on the dual lattice while particles are on the direct lattice. Particles and fluxes never sit on top of each other and we have no ambiguities. On the other hand, we could have chosen to put the flux southeast of the particle, or some other similar prescription. These different prescriptions are related to the possible existence of a self-linking number and an anomalous spin. We will not explore these issues any further. Let us simply note that this lattice regularization provides a natural way to separate particles and fluxes while keeping all the relevant symmetries intact. Also note the close analogy with the order-disorder operator construction for 2D classical statistical-mechanical systems. This feature is also present in the 2D classical Ising model and it reflects the fact that the Onsager fermions are two-component spinors (Kadanoff and Ceva, 1971).

We now use the lattice Green function $G\left(\vec{r}, \vec{r}^{\prime}\right)$, that is, the solution of the partial-difference equation

$$
\begin{equation*}
\Delta_{\vec{r}}^{2} G\left(\vec{r}, \vec{r}^{\prime}\right)=\delta_{\vec{r}, \vec{r}^{\prime}}-\frac{1}{L_{1} L_{2}} \tag{10.175}
\end{equation*}
$$

The last term of this equation, while unimportant in the thermodynamic limit, is necessary in order to define the Green function in a finite system without
boundaries, no matter how large it is. The solution for the scalar field has the form

$$
\begin{equation*}
\Phi(\vec{r})=\frac{1}{\theta} \sum_{\vec{r}^{\prime}} G\left(\vec{r}, \vec{r}^{\prime}\right) \rho\left(\vec{x}^{\prime}\right) \tag{10.176}
\end{equation*}
$$

Thus, by inserting Eq. (10.176) into Eq. (10.173), we can write the vector potentials $\mathcal{A}_{j}$ in the form

$$
\begin{equation*}
\mathcal{A}_{j}(\vec{x})=\frac{1}{\theta} \epsilon_{j k} \Delta_{k} \sum_{\vec{r}^{\prime}} G\left(\vec{r}, \vec{r}^{\prime}\right) \rho\left(\vec{x}^{\prime}\right) \tag{10.177}
\end{equation*}
$$

Let us define the multivalued function $\Theta\left(\vec{x}, \vec{r}^{\prime}\right)$ as the solution for the lattice version of the Cauchy-Riemann equation

$$
\begin{equation*}
-\Delta_{j} G\left(\vec{r}, \vec{r}^{\prime}\right)=\epsilon_{j k} \Delta_{k} \Theta\left(\vec{x}, \vec{r}^{\prime}\right) \tag{10.178}
\end{equation*}
$$

The function $\Theta\left(\vec{x}, \vec{r}^{\prime}\right)$ is found by integrating the Cauchy-Riemann equation along a path $\Gamma\left(\vec{x}, \vec{x}^{\prime}\right)$, on the direct lattice, going from $\vec{x}$ to $\vec{x}^{\prime}$ which leaves the point $\vec{r}$ to its left. For a finite system, the function $\Theta\left(\vec{x}, \vec{r}^{\prime}\right)$ obtained by this procedure is path-dependent. Moreover, along a closed path $\Gamma$ on the direct lattice, which has the point $\vec{r}$ of the dual lattice in its interior region, the function $\Theta$ has a discontinuity $(\Delta \Theta)_{\Gamma}$. We can compute this discontinuity by using the Cauchy-Riemann equation

$$
\begin{equation*}
(\Delta \Theta)_{\Gamma}=\sum_{\Gamma} s_{j}(\Gamma) \Delta_{j} \Theta=\sum_{\Gamma} s_{j}(\Gamma) \epsilon_{j k} \Delta_{k} G \tag{10.179}
\end{equation*}
$$

where $s_{j}(\Gamma)$ is a vector field that is equal to unity on the path $\Gamma$ and zero everywhere else. The last "line integral" in this equation can be computed by first using a discrete version of Gauss's theorem and then inserting Eq. (10.175) to yield

$$
\begin{equation*}
(\Delta \Theta)_{\Gamma}=\sum_{\bar{\Gamma}} \Delta^{2} G=1-\frac{\mathcal{A}(\bar{\Gamma})}{L_{1} L_{2}} \tag{10.180}
\end{equation*}
$$

where $\bar{\Gamma}$ is the region of the dual lattice inside the closed path $\Gamma$ and $\mathcal{A}(\bar{\Gamma})$ is its area. Thus, in the thermodynamic limit, the function $\Theta$ has a jump equal to unity as a closed path $\Gamma$ is traversed. Equivalently, we can say that $\Theta$ is a multivalued function that has a branch cut representing a jump by one unit. Using the same line of reasoning, one can show that the following important identity holds:

$$
\begin{equation*}
\Theta\left(\vec{x}, \vec{r}^{\prime}\right)-\Theta\left(\vec{x}^{\prime}, \vec{r}\right)=\frac{1}{2} \tag{10.181}
\end{equation*}
$$

This equation can be derived by using the following geometric construction. Draw a rectangle centered at $\vec{x}$ that has corners at $\vec{x}+\vec{R}$ and $\vec{x}-\vec{R}$ along a diagonal.

We now consider the paths $\Gamma_{1}, \vec{x}+\vec{R} \rightarrow \vec{x}-\vec{R}$ without crossing the cut, and $\Gamma_{2}$, $\vec{x}+\vec{R} \rightarrow \vec{x}-\vec{R}$ crossing the cut. By symmetry, we have

$$
\begin{equation*}
(\Theta(\vec{x}-\vec{R}, \vec{r})-\Theta(\vec{x}+\vec{R}, \vec{r}))_{\Gamma_{1}}=(\Theta(\vec{x}+\vec{R}, \vec{r})-\Theta(\vec{x}-\vec{R}, \vec{r}))_{\Gamma_{2}} \tag{10.182}
\end{equation*}
$$

Since the total discontinuity of $\Theta$ is unity, $[\Delta \Theta]_{\Gamma_{1}+\Gamma_{2}}=1$, we get just half that result for a "half-way trip."

We can now use the Cauchy-Riemann equation, Eq. (10.178), to write the vector potential $\mathcal{A}_{j}$ in Eq. (10.177) as the gradient of a scalar "function" $\phi(\vec{x})$ :

$$
\begin{equation*}
\mathcal{A}_{j}(\vec{x})=\Delta_{j} \phi(\vec{x}) \tag{10.183}
\end{equation*}
$$

where $\phi$ is given by

$$
\begin{equation*}
\phi(\vec{x})=\frac{1}{\theta} \sum_{\vec{x}^{\prime}} \Theta\left(\vec{x}, \vec{r}^{\prime}\right) \rho\left(\vec{x}^{\prime}\right) \tag{10.184}
\end{equation*}
$$

Therefore, the vector potentials associated with the local gauge degrees of freedom are pure gradients, and they can be "eliminated" by means of the (singular) "gauge transformation"

$$
\begin{equation*}
a(\vec{x})=e^{-i \phi(\vec{x})} c(\vec{x}) \tag{10.185}
\end{equation*}
$$

However, since $\phi$ is a function of the local density $\rho(\vec{x})$, the phase factor $e^{-i \phi}$ is not a c-number but an operator. This operator creates a coherent state of vector potentials, which represents the flux attached to the particles. The operators $a(\vec{x})$ so defined satisfy the anyon commutation relations and the hard-core condition. Indeed, after some straightforward algebra we get that the operators $a(\vec{x})$ satisfy the commutation relations

$$
\begin{equation*}
\hat{a}(\vec{x}) \hat{a}^{\dagger}(\vec{y})=\delta_{\vec{x}, \vec{y}}-e^{i \delta} \hat{a}^{\dagger}(\vec{y}) \hat{a}(\vec{x}) \tag{10.186}
\end{equation*}
$$

where the statistical phase $\delta$ is given by

$$
\begin{equation*}
\delta=\frac{1}{\theta}\left(\Theta\left(\vec{x}, \vec{r}^{\prime}\right)-\Theta\left(\vec{x}^{\prime}, \vec{r}\right)\right)=\frac{1}{2 \theta} \tag{10.187}
\end{equation*}
$$

The hard-core condition $a(\vec{x})^{2}=0$ is a consequence of the fact that the operator $c(\vec{x})$ is a fermion. Thus, the operators $a(\vec{x})$ and $a^{\dagger}(\vec{x})$ are anyon-destruction and -creation operators. The statistical angle $\delta$ and the Chern-Simons coupling constant $\theta$ are related by

$$
\begin{equation*}
\delta=\frac{1}{2 \theta} \tag{10.188}
\end{equation*}
$$

This is the same result as that we derived in Section 10.5 by considering a firstquantized path-integral approach.

It is clear that much of what was done above for a lattice theory can also be done in the continuum case. Thus, the identification of anyons with either fermions or bosons coupled to Chern-Simons gauge fields is also valid for continuum systems (Semenoff, 1988), but with one caveat. The notion of attaching fluxes to particles in the continuum is a very tricky one. We remarked in Section 10.5 that, in addition to fractional statistics, the particles may acquire a fractional induced spin depending on the definition of the problem at short distances. For example, if the particle and the charge literally "sit on top of each other," there is no relative winding and no extra phase can possibly appear. But, if the particle and the flux are separated by some distance, they can wind around each other. As a result an extra phase may appear in the propagation amplitudes. This extra phase can be interpreted as an induced fractional spin. The lattice theory that we have discussed above does separate particles from fluxes in a natural and gauge-invariant way. We then expect that lattice anyons should have an induced fractional spin.

### 10.12 The Jordan-Wigner transformation in two dimensions

The identity

$$
\begin{equation*}
\hat{a}(\vec{x}) \hat{a}^{\dagger}(\vec{y})=\delta_{\vec{x}, \vec{y}}-e^{i \delta} \hat{a}^{\dagger}(\vec{y}) \hat{a}(\vec{x}) \tag{10.189}
\end{equation*}
$$

leads to the 2D analog of the Jordan-Wigner transformation discussed in Chapter 5. In particular, for $\theta=1 /(2 \pi m)$ we get $\delta=\pi m$. Hence, for $m$ odd the operators $a(\vec{x})$ obey equal-time boson commutation relations and a hard-core condition. If we recall the mapping in Section 10.6 between bosons with hard cores and spin-1/2 Pauli operators:

$$
\begin{equation*}
\sigma^{+}(\vec{x})=a^{\dagger}(\vec{x}), \quad \sigma^{-}(\vec{x})=a(\vec{x}), \quad \sigma_{3}(\vec{x})=2 a^{\dagger}(\vec{x}) a(\vec{x})-1 \tag{10.190}
\end{equation*}
$$

we get from Eq. (10.185)

$$
\begin{equation*}
\sigma^{+}(\vec{x})=c^{\dagger}(\vec{x}) e^{+i \phi(\vec{x})}, \quad \sigma^{-}(\vec{x})=e^{-i \phi(\vec{x})} c(\vec{x}), \quad \sigma_{3}(\vec{x})=2 c^{\dagger}(\vec{x}) c(\vec{x})-1 \tag{10.191}
\end{equation*}
$$

These equations tell us that the 2D quantum Heisenberg antiferromagnet on a square lattice is exactly equivalent to a theory of spinless fermions on the same lattice coupled to a Chern-Simons gauge field. In addition, there is a direct densitydensity repulsive force among nearest neighbors. Thus, unlike the familiar results from one dimension, in which the fermions are free (see Chapter 5) in the $X Y$ limit, there is a long-range gauge interaction in two dimensions even in the $X Y$ limit. This property is due to the fact that, in one dimension, the only possible flux that the fermions can feel is a global effect determined by the boundary conditions. In two dimensions, the fermions feel both a local and a global flux.

As we will see next, even the global flux is non-trivial. Although the resulting fermion theory is not free, approximations and perturbation theory in one scheme still turn into a non-perturbative feature in the other. The approach employing the Jordan-Wigner transformation, combined with an average field approximation (and quantum corrections), has been applied with success to the case of the 2D spin-1/2 antiferromagnet (López et al., 1994). At the mean-field (average-field) level it has also been applied to the quantum antiferromagnet on some frustrated lattices (Yang et al., 1993; Misguich et al., 2001).

## 11

## Anyon superconductivity

### 11.1 Anyon superconductivity

In this chapter we will consider the problem of predicting the behavior of an assembly of particles obeying fractional statistics. We have already considered the problem of the quantum mechanics of systems of anyons. However, we did not consider what new phenomena may arise if the system has a macroscopic number of anyons present. At the time of writing, the physical reality of this problem is still unclear. However, this is such a fascinating problem that we will discuss it despite the lack of firm experimental support for the model.

There are two different physical situations in which the problem of anyons at finite density is important. Halperin (1984) observed that the quasiparticles of the Laughlin state for the FQHE obeyed fractional statistics (i.e. they are anyons). In Chapter 13 we will discuss Halperin's theory. Furthermore, Halperin and Haldane suggested that, for filling fractions of a Landau level different from the $1 / m$ Laughlin sequence, the ground state of a 2 D electron gas in a strong magnetic field could be understood as a Laughlin state of anyons. Shortly afterwards, Arovas, Schrieffer, Wilczek, and Zee (Arovas et al., 1985) studied the high-temperature behavior of a gas of anyons and calculated the second virial coefficient.

Much of the original interest in this problem was connected to its possible relevance to high-temperature superconductors. Since anyons "interpolate" between fermions and bosons, it is natural to ask whether an assembly of anyons at finite density is more "fermion-like" or "boson-like." Fermions have non-condensed ground states with Fermi surfaces, whereas bosons undergo Bose condensation and are superfluids. In two remarkable papers, Laughlin (1988a, 1988b) argued that anyons generally form "condensates" in the sense that their ground states exhibit superfluid properties. Fetter, Hanna, and Laughlin (Fetter et al., 1989) developed a mean-field theory for the free-anyon gas in the continuum that has generally confirmed these conjectures. They argued that, if one represents anyons in terms of
fermions coupled to fractional fluxoids, then the fermions feel an effective average flux determined by the particle density. A quantum-Hall-effect-like picture could then be used, at least within mean-field theory. In a sense this is a very surprising result since a quantum-Hall-effect system is incompressible and, thus, does not have any low-energy modes. However, the flux is uniform only on average since the constraints force it to fluctuate together with the particle density. Fetter, Hanna, and Laughlin showed that this was indeed the case. They did a calculation with the flavor of a random-phase approximation (RPA) and found a Goldstone pole in the (fermion) current-current correlation function. Hence, the fluctuations restore the compressibility which is necessary in order for the system to behave like a condensate. They argued that this pole implies the presence of a Meissner effect for an external electromagnetic field. This picture relies on two crucial assumptions: (1) the fermions can effectively be stripped of their fluxes and (2) the Goldstone pole is robust against fluctuations.

The predictions of Fetter, Hanna, and Laughlin have, to some extent, been confirmed by extensive numerical calculations (Canright et al., 1989). Chen, Wilczek, Witten, and Halperin (Chen et al., 1989) offered an argument to explain why the Goldstone pole is exact that is based on the $f$-sum rule, which is a consequence of gauge invariance (see Chapter 12). For a nice derivation see, for instance, the book by Martin (1967).

Wen and Zee (1990), Lee and Fisher (1989), and Kitazawa and Murayama (1990) considered this problem from a bosonic point of view. In this language, one focuses more directly on the role of vortices, anyons binding into "Cooper bound states," etc. The emerging picture is complementary to the fermion description. Local operators in one language are non-local "disorder" operators in the other. It is worth noting that a similar picture has been developed for the FQHE (Girvin and MacDonald, 1987; Read, 1989; Zhang et al., 1989), as we will see in Chapter 13.

In our discussion here, I will follow my own work, which is based on the path-integral approach for fermions coupled to the Chern-Simons theory (Fradkin, 1990a) (see also Randjbar-Daemi et al. (1990) and Hosotani and Chakravarty (1990)). In this approach, the exactness of the Goldstone modes follows from the topological invariance of an effective Hall conductance. In Chapters 12 and 13, we discuss these issues of topological invariance and quantization at great length within the framework of the theory of the quantum Hall effect.

### 11.2 The functional-integral formulation of the Chern-Simons theory

In this section I consider the functional-integral formalism for a system of $\mathcal{N}_{\mathrm{a}}$ anyons at zero temperature. I will use the fermion formalism discussed above. I will
work with a chemical potential $\mu$, which will be determined later from the requirement that the density $\rho$ be equal to $\mathcal{N}_{\mathrm{a}} / L^{2}$ for a system with $L^{2}$ sites (I assume a square lattice of $L^{2}$ sites with lattice constant $a_{0}=1$ ).

The functional-integral representation for the partition function of this system at zero temperature (in real time) with chemical potential $\mu$ and background electromagnetic fields $A_{\mu}(\mu=0,1,2)$ is given by

$$
\begin{equation*}
Z=\int \mathcal{D} \bar{\psi} \mathcal{D} \psi \mathcal{D} \mathcal{A} e^{i \int d t L} \tag{11.1}
\end{equation*}
$$

where $\psi$ and $\bar{\psi}$ are Grassmann fields and some gauge-fixing procedure is implicitly assumed. This functional integral has to be understood as a coherent-state path integral. Let us consider the gauge-field sector for the moment. The fermion sector is already known to be a coherent-state path integral. In Section 10.9, I showed, with some caveats, that $\mathcal{A}_{1}$ and $\theta \mathcal{A}_{2}$ form a canonical pair. Notice that $\mathcal{A}_{1}$ resides on the link $\left(\vec{x}, \vec{x}+\hat{e}_{1}\right)$, whereas $\theta \mathcal{A}_{2}$ resides on the orthogonal link $\left(\vec{x}, \vec{x}+\hat{e}_{2}\right)$. In the derivation of the path integral one has to introduce complete sets of states at every intermediate time of the evolution. However, since $\mathcal{A}_{1}$ and $\mathcal{A}_{2}$ do not commute, we cannot define a complete set of states in which both are diagonal. Let us say we choose a basis in which $\mathcal{A}_{1}$ is diagonal and that we now insert a complete set of such states at every intermediate time. In addition, the states have to be restricted so as to satisfy the local constraint. This is implemented by means of a Lagrange multiplier $\mathcal{A}_{0}(\vec{x}, t)$ at every lattice site and at all times. The matrix elements of the time-evolution operator for an infinitesimal time $\delta t$ are not easy to compute in such a basis. Thus, it is convenient to introduce also a complete set of states in which $\mathcal{A}_{2}$ is diagonal. It is easy to show that, in addition to a term of the form $\theta \mathcal{A}_{0} \mathcal{B}$ that arises from the constraint, we get an extra term of the form $\theta \sum_{\vec{x}} \mathcal{A}_{2}(\vec{x}) \partial_{0} \mathcal{A}_{1}(\vec{x})$ in the Lagrangian. This term is generated by the overlaps of $\mathcal{A}_{1}$ and $\mathcal{A}_{2}$ states on neighboring time slices. The two sets of terms can be condensed into a single expression: the Chern-Simons Lagrangian. Hence, the functional integral is just the phase-space integral for the canonical pair $\mathcal{A}_{1}$ and $\theta \mathcal{A}_{2}$.

The anyons are coupled to the electromagnetic field via the minimal-coupling prescription. Thus, all we need to do in order to include the chemical potential $\mu$ and the electromagnetic fields $A_{\mu}$ is to modify the derivatives and amplitudes in the usual manner:

$$
\begin{align*}
D_{0} & =\partial_{0}-i \mathcal{A}_{0} \rightarrow \partial_{0}-i\left(\mathcal{A}_{0}+A_{0}+\mu\right) \\
e^{i \mathcal{A}_{j}(x)} & \rightarrow e^{i\left(\mathcal{A}_{j}(x)+A_{j}(x)\right)} \tag{11.2}
\end{align*}
$$

Notice that, as usual, the chemical potential $\mu$ can be regarded as a constant shift of $A_{0}$. The integration measures are invariant measures.

### 11.3 Correlation functions

The response of the system to slowly varying electromagnetic fields can be studied in terms of the current correlation functions. In addition, we will be interested also in correlations that probe other features of the spectrum of the system. In particular, it is of interest to study the gauge-invariant fermion propagator

$$
\begin{equation*}
G_{\Gamma}\left(x, x^{\prime}\right)=\left\langle\bar{\psi}(x) e^{i \int_{\Gamma} \mathcal{A}} \psi\left(x^{\prime}\right)\right\rangle \tag{11.3}
\end{equation*}
$$

where $\int_{\Gamma} \mathcal{A}$ is shorthand for the line integral of the statistical vector potentials along some path $\Gamma$. Likewise the pair correlation function can be calculated in terms of the gauge-invariant four-point function, and so on. Other probes of interest are Wilson loops for the statistical vector potential $\mathcal{A}$ along a closed path $\Gamma$ :

$$
\begin{equation*}
W_{\mathcal{A}}[\Gamma]=\left\langle e^{i \oint_{\Gamma} \mathcal{A}}\right\rangle \tag{11.4}
\end{equation*}
$$

In particular a space-like Wilson loop for a closed path $\Gamma$ on the square lattice must represent, as a result of the constraint, the fluctuation in the number of fermions $\mathcal{N}_{\mathrm{a}}(\Sigma)$ (and hence anyons) inside the region $\Sigma$ bounded by the loop $\Gamma$ :

$$
\begin{equation*}
W_{\text {space }}[\Gamma=\partial \Sigma]=\left\langle e^{i \oint_{\Gamma} \mathcal{A}}\right\rangle=\left\langle e^{\frac{i}{\theta} \int_{\Sigma} j_{0}(x)}\right\rangle \equiv\left\langle e^{\frac{i}{\theta} \mathcal{N}_{a}(\Sigma)}\right\rangle \tag{11.5}
\end{equation*}
$$

In the case of a time-like loop $\Gamma$, the constraint implies that a static particle has been added at one point and subtracted at another point. Thus $\left\langle e^{i \oint_{\Gamma}} \mathcal{A}\right\rangle$ for timelike loops roughly represents the energy cost for adding a particle, say at $\vec{r}$, and removing it at $\vec{r}^{\prime}$. This is the standard interpretation of the Wilson loop. Notice, however, that now a particle is added without adding a flux. Hence we are creating a mismatch between charge and flux.

Analogously, we can create a coherent state that represents a (static) flux piercing a given plaquette at a dual site $\vec{r}$. The operator which creates this state is

$$
\begin{equation*}
K(\vec{x}) \equiv e^{i \theta \sum_{\vec{x}^{\prime}} \epsilon_{j k} \mathcal{A}_{k}\left(\vec{x}^{\prime}\right) \mathcal{A}_{j}^{\mathrm{c}}\left(\vec{x}^{\prime}\right)} \tag{11.6}
\end{equation*}
$$

where $\mathcal{A}_{j}^{\mathrm{c}}\left(\vec{x}^{\prime}\right)$ is a background static vector potential with a curl equal to the flux. For $\mathcal{A}_{j}^{\text {c }}\left(\vec{x}^{\prime}\right)$ to represent a flux we must demand that $\mathcal{A}_{j}^{\mathrm{c}}\left(\vec{x}^{\prime}\right)=(1 / \theta) \Delta_{j} \Theta\left(\vec{x}^{\prime}, \vec{r}\right)$. It is easy to show that this operator $K(\vec{x})$ is precisely identical to the operator $e^{i \phi}$ defined in Eq. (10.184). Indeed, using Gauss's law, Eq. (10.166),

$$
\begin{equation*}
\theta \epsilon_{j k} \Delta_{j} \mathcal{A}_{k}-j_{0}=0 \tag{11.7}
\end{equation*}
$$

one finds (up to boundary terms)

$$
\begin{align*}
\theta \sum_{\vec{x}^{\prime}} \epsilon_{j k} \mathcal{A}_{k}\left(\vec{x}^{\prime}\right) \mathcal{A}_{j}^{\mathrm{c}}\left(\vec{x}^{\prime}\right) & =\sum_{\vec{x}^{\prime}} \epsilon_{j k} \mathcal{A}_{k}\left(\vec{x}^{\prime}\right) \Delta_{j} \Theta\left(\vec{x}^{\prime}, \vec{r}\right) \\
& =-\sum_{\vec{x}^{\prime}} \epsilon_{j k}\left(\Delta_{j} \mathcal{A}_{k}\left(\vec{x}^{\prime}\right)\right) \Theta\left(\vec{x}^{\prime}, \vec{r}\right) \\
& =-\frac{1}{\theta} \sum_{\vec{x}^{\prime}} j_{0}\left(\vec{x}^{\prime}\right) \Theta\left(\vec{x}^{\prime}, \vec{r}\right) \tag{11.8}
\end{align*}
$$

By means of the identity (see Eq. (10.181))

$$
\begin{equation*}
\Theta\left(\vec{x}, \vec{r}^{\prime}\right)-\Theta\left(\vec{x}^{\prime}, \vec{r}\right)=\frac{1}{2} \tag{11.9}
\end{equation*}
$$

one finds

$$
\begin{align*}
\theta \sum_{\vec{x}^{\prime}} \epsilon_{j k} \mathcal{A}_{k}\left(\vec{x}^{\prime}\right) \mathcal{A}_{j}^{\mathrm{c}}\left(\vec{x}^{\prime}\right) & =\frac{1}{2 \theta} \sum_{\vec{x}^{\prime}} j_{0}\left(\vec{x}^{\prime}\right)-\frac{1}{\theta} \sum_{\vec{x}} j_{0}\left(\vec{x}^{\prime}\right) \Theta\left(\vec{x}, \vec{r}^{\prime}\right) \\
& \equiv+\frac{1}{2 \theta} \mathcal{N}_{\mathrm{a}}-\phi(\vec{x}) \tag{11.10}
\end{align*}
$$

Hence

$$
\begin{equation*}
K(\vec{x})=e^{\frac{i}{2 \theta} \mathcal{N}_{\mathrm{a}}} e^{-i \phi(\vec{x})} \tag{11.11}
\end{equation*}
$$

Clearly $K(\vec{x})$ is not invariant under local gauge transformation of the statistical gauge field. Indeed, for a gauge transformation $\mathcal{A}_{j}(\vec{x}) \rightarrow \mathcal{A}_{j}(\vec{x})+\Delta_{j} \varphi(\vec{x})$, we get

$$
\begin{equation*}
\theta \sum_{\vec{x}^{\prime}} \epsilon_{j k} \mathcal{A}_{k}\left(\vec{x}^{\prime}\right) \mathcal{A}_{j}^{\mathrm{c}}\left(\vec{x}^{\prime}\right) \rightarrow \theta \sum_{\vec{x}^{\prime}} \epsilon_{j k} \mathcal{A}_{k}\left(\vec{x}^{\prime}\right) \mathcal{A}_{j}^{\mathrm{c}}\left(\vec{x}^{\prime}\right)+\theta \sum_{\vec{x}^{\prime}} \epsilon_{j k} \Delta_{k} \varphi(\vec{x}) \mathcal{A}_{j}^{\mathrm{c}}(\vec{x}) \tag{11.12}
\end{equation*}
$$

By integrating by parts and with the help of Eq. (10.178) and Eq. (10.175) one finds

$$
\begin{equation*}
K(\vec{x}) \rightarrow K(\vec{x}) e^{+i \varphi(\vec{x})} \tag{11.13}
\end{equation*}
$$

and thus the product

$$
\begin{equation*}
a(\vec{x})=K(\vec{x}) c(\vec{x}) \tag{11.14}
\end{equation*}
$$

is gauge-invariant. Obviously the operator $a(\vec{x})$ is nothing other than the anyon operator.

### 11.4 The semi-classical approximation

We are interested in studying the physical properties of the partition function of a gas of anyons. In particular we want to understand the following issues: (1)
the spectrum of low-lying excitations, (2) the statistics of the quasiparticles, (3) whether it exhibits superfluidity, (4) whether there is a Meissner effect, and (5) the behavior of correlation functions.

I will study this problem by treating the functional integral within the semiclassical (saddle-point) expansion. Formally this requires the presence of a large coefficient in front of the action $S=\int d t L$. This system does not have such a coefficient (apart from $1 / \hbar$ itself). It is plausible that at large densities the saddle-point approximation may become accurate. Such is the case for the (weakly interacting) electron gas, for which the RPA works very well. Since the statistical angle $\delta$ happens to be equal to $1 /(2 \theta)$ one expects that this approximation may also work for large values of $\theta$ (i.e. almost a fermion). This is the limit studied by Chen, Wilczek, Witten, and Halperin. In the Bose limit $(\theta=1 /(2 \pi))$ the results depend crucially on the density. In fact it is well known that the hardcore Bose gas, at moderate densities, can be treated within the RPA due to the effective softening of the hard cores at such densities. At high densities on a lattice, this approximation breaks down and the hard cores cause the existence of crystalline states or off-diagonal long-range order (ODLRO) for the spin onehalf $X Y$ model. However, it is conceivable that there may exist regimes of Bose systems for which the results of a fermion mean-field theory may still be qualitatively correct. The results of Lee and Fisher (1989) suggest that this may be the case.

The saddle-point approximation (SPA) may also be formally justified by considering a system of $M$ species of anyons (each with $\mathcal{N}_{\mathrm{a}}$ particles), which are "free" in the sense that there is no explicit interaction term in the Hamiltonian. The requirement of fractional statistics, of course, amounts to an interaction since it is equivalent to the statement that all $M$ species of fermions interact through the same statistical vector potential $\mathcal{A}_{\mu}$. At large $M$, with $\theta=\theta_{0} M$, the SPA is formally correct. For the sake of simplicity I will consider only $M=1$ and assume that the approximation is, at least, qualitatively correct.

The SPA is now carried out in the usual fashion. One first observes that the action is a bilinear form in fermion variables. Thus the fermions can be integrated out explicitly. The result is naturally a determinant,

$$
\begin{equation*}
\int \mathcal{D} \bar{\psi} \mathcal{D} \psi e^{i S_{\mathrm{F}}}=\operatorname{det}\left[i D_{0}-h\left[\mathcal{A}_{j}+A_{j}\right]\right] \tag{11.15}
\end{equation*}
$$

where $S_{\mathrm{F}}$ is the fermion part of the action,

$$
\begin{equation*}
S_{\mathrm{F}}=\int d t \sum_{\vec{x}, \vec{x}^{\prime}} \bar{\psi}(x)\left(i D_{0} \delta_{\bar{x}, \overrightarrow{x^{\prime}}}-h\left[\mathcal{A}_{j}+A_{j}\right]\right) \psi\left(x^{\prime}\right) \tag{11.16}
\end{equation*}
$$

and the one-particle Hamiltonian $h[\mathcal{A}]$ is

$$
\begin{equation*}
h\left[\mathcal{A}_{j}\right]=\tau \sum_{j=1,2} e^{i \mathcal{A}_{j}(x)} \delta_{\vec{x}^{\prime}, \vec{x}+\hat{e}_{j}} \tag{11.17}
\end{equation*}
$$

The condition $\mathcal{A}_{j}(x)=-\mathcal{A}_{-j}\left(x+e_{j}\right)$ guarantees the hermiticity of the Hamiltonian.

Therefore, the statistical vector potentials $\mathcal{A}_{\mu}$ have the effective action $S_{\text {eff }}$ given by

$$
\begin{equation*}
S_{\mathrm{eff}}\left[\mathcal{A}_{\mu}, A_{\mu}\right]=-i \operatorname{tr} \ln \left(i D_{0}-h[\mathcal{A}+A]\right)-i \frac{\theta}{4} S_{\mathrm{CS}}[\mathcal{A}] \tag{11.18}
\end{equation*}
$$

We can use the invariance of the measure to shift the statistical vector potentials $\mathcal{A}_{\mu}+A_{\mu} \rightarrow \mathcal{A}_{\mu}$. The result is that the effective action now reads

$$
\begin{equation*}
S_{\mathrm{eff}}\left[\mathcal{A}_{\mu}, A_{\mu}\right]=-i \operatorname{tr} \ln \left(i D_{0}+\mu-h[\mathcal{A}]\right)-i \frac{\theta}{4} S_{\mathrm{CS}}[\mathcal{A}-A] \tag{11.19}
\end{equation*}
$$

where we have pulled the chemical potential $\mu$ out of the definition of $D_{0}$. In this form, the electromagnetic fields appear only in the Chern-Simons term which is quadratic in the fields. We can thus write

$$
\begin{equation*}
S_{\mathrm{CS}}[\mathcal{A}-A]=S_{\mathrm{CS}}[\mathcal{A}]+S_{\mathrm{CS}}[A]-\epsilon_{\mu \nu \lambda}\left(\mathcal{A}^{\mu} F^{\nu \lambda}+A^{\mu} \mathcal{F}^{\nu \lambda}\right) \tag{11.20}
\end{equation*}
$$

We will assume that the electromagnetic field $A_{\mu}$ is small and has zero average strength. In this case we may treat $A_{\mu}$ as a perturbation (i.e. linear-response theory). Note that a non-zero uniform external magnetic field cannot be treated in perturbation theory. This is crucial for the correct study of the Meissner effect. Let us consider, for the moment, the SPA in the absence of external electromagnetic fields.

We demand that $S_{\text {eff }}$ be stationary around some configuration $\mathcal{A}_{\mu}$, which is assumed to be time independent (i.e. zero "electrical" statistical field $\overline{\mathcal{E}}$ ) and with uniform statistical "magnetic" field $\overline{\mathcal{B}}$. Thus

$$
\begin{equation*}
\left.\frac{\delta S_{\mathrm{eff}}}{\delta \mathcal{A}_{\mu}}\right|_{\overline{\mathcal{A}}_{\mu}}=0 \tag{11.21}
\end{equation*}
$$

yields the saddle-point equation (SPE)

$$
\begin{equation*}
\left\langle j_{\mu}^{\mathrm{F}}\right\rangle_{\overline{\mathcal{A}}}=\frac{\theta}{2} \epsilon_{\mu \nu \lambda}\left(\overline{\mathcal{F}}^{\nu \lambda}-F^{\nu \lambda}\right) \tag{11.22}
\end{equation*}
$$

where $\left\langle j_{\mu}^{\mathrm{F}}\right\rangle$ is the gauge-invariant fermion current.
Since the electromagnetic field will be assumed to be small and with zero average, we will set $F^{\nu \lambda}=0$ in the SPE for the rest of this section. In this case, and for solutions with $\overline{\mathcal{B}}=$ constant, $\overline{\mathcal{E}}=0$, we find

$$
\begin{equation*}
\rho=\theta \overline{\mathcal{B}} \tag{11.23}
\end{equation*}
$$

where $\rho$ is the fermion density.

The requirement that there should be $\mathcal{N}_{\mathrm{a}}$ particles is met by requiring

$$
\begin{equation*}
-\frac{i}{Z} \frac{\partial Z}{\partial \mu}=\mathcal{N}_{\mathrm{a}} \tag{11.24}
\end{equation*}
$$

Since $\mu$ is nothing but a constant shift of $\mathcal{A}_{0}$, one finds

$$
\begin{equation*}
\mathcal{N}_{\mathrm{a}}=\theta \Phi \tag{11.25}
\end{equation*}
$$

where $\Phi$ is the total flux

$$
\begin{equation*}
\Phi=\overline{\mathcal{B}} L^{2} \tag{11.26}
\end{equation*}
$$

Thus, we find

$$
\begin{equation*}
\theta \overline{\mathcal{B}}=\frac{\mathcal{N}_{\mathrm{a}}}{L^{2}} \tag{11.27}
\end{equation*}
$$

which is Laughlin's result. Thus, at the saddle-point level, the fermions feel an effective flux $\overline{\mathcal{B}}$ per plaquette.

The spectrum of this problem was studied by Hofstadter, and its properties are summarized in Chapter 12. He found that, if the number of particles is fixed, then as $\overline{\mathcal{B}}$ varies the spectrum of the effective one-particle Hamiltonian is very rich and complex and, as a function of $\overline{\mathcal{B}}$, it has a fractal structure. However, in the problem at hand, $\overline{\mathcal{B}}$ is determined by the number of particles. In fact, for a system of $\mathcal{N}_{\mathrm{a}}$ anyons on a lattice with $L^{2}$ sites, the density $\rho$ is $\mathcal{N}_{\mathrm{a}} / L^{2}$ and therefore can be written as a ratio of two relatively prime integers $r$ and $q$, i.e.

$$
\begin{equation*}
\rho=\frac{r}{q} \tag{11.28}
\end{equation*}
$$

Similarly, we can also write the statistical phase $\delta$ in the form of an irreducible fraction in terms of two relatively prime integers $n$ and $m$,

$$
\begin{equation*}
\delta=\pi \frac{n}{m} \tag{11.29}
\end{equation*}
$$

Equivalently, the Chern-Simons coupling constant $\theta$ is given by

$$
\begin{equation*}
\theta=\frac{m}{2 \pi n} \tag{11.30}
\end{equation*}
$$

The effective field $\overline{\mathcal{B}}$ is a fraction of the flux quantum, $2 \pi$,

$$
\begin{equation*}
\overline{\mathcal{B}}=2 \pi \frac{P}{Q} \tag{11.31}
\end{equation*}
$$

where the two relatively prime integers $P$ and $Q$ are given from Eq. (11.27) by

$$
\begin{equation*}
2 \pi \frac{P}{Q}=\frac{\rho}{\theta} \tag{11.32}
\end{equation*}
$$

Hence, we can write

$$
\begin{equation*}
\frac{P}{Q}=\frac{n r}{m q} \tag{11.33}
\end{equation*}
$$

The spectrum of one-particle states, the Hofstadter problem, for rational fluxes $\overline{\mathcal{B}}=$ $2 \pi P / Q$, consists of $q$ Landau bands each with $L^{2} / Q$ degenerate states (see Section 12.2). In the continuum limit, these bands become the usual Landau levels. If we denote by $f$ the fraction of occupied Landau bands, then $f$ must be $\mathcal{N}_{\mathrm{a}} \times Q / L^{2}$ since there is a total of $\mathcal{N}_{\mathrm{a}}$ particles. The density is then $f / Q$. Using Eq. (11.28), we get $f=(r / q) Q$. Thus, $f$ is an integer if and only if $q$ is a factor of $Q$.

Let $(a, b)$ denote the largest common factor of the pair of integers $a$ and $b$. Let $k$ and $l$ be two integers defined satisfying $k=(n, q)$ and $l=(m, r)$. Hence, there exist four integers $\bar{n}, \bar{m}, \bar{r}$, and $\bar{q}$ such that

$$
\begin{align*}
n & =k \bar{n}, & & q=k \bar{q} \\
m & =l \bar{m}, & & r=l \bar{r}  \tag{11.34}\\
(\bar{n}, \bar{q}) & =1, & & (\bar{m}, \bar{r})=1 \\
(\bar{n}, \bar{m}) & =1, & & (\bar{r}, \bar{q})=1
\end{align*}
$$

Thus,

$$
\begin{equation*}
\frac{P}{Q}=\frac{\bar{n} \bar{r}}{\bar{m} \bar{q}} \tag{11.35}
\end{equation*}
$$

and

$$
\begin{equation*}
P=\bar{n} \bar{r}, \quad Q=\bar{m} \bar{q} \tag{11.36}
\end{equation*}
$$

Therefore, the fraction $f$ of occupied Landau bands is

$$
\begin{equation*}
f=\frac{r}{q} Q=\frac{l}{k} \bar{r} \bar{m} \tag{11.37}
\end{equation*}
$$

It is easy to show that $k$ does not have any common factors with any one of $l, \bar{r}$, and $\bar{m}$. In general, $f$ is an irreducible fraction, unless one of the following conditions is satisfied:

$$
\begin{equation*}
(n, q)=1, \quad(n, q)=\frac{m}{(m, r)}, \quad(n, q)=\frac{r}{(m, r)} \tag{11.38}
\end{equation*}
$$

If $f$ is not an integer, then there is no gap. Fluctuation effects should overwhelm the saddle-point results and this theory will generally be unstable. Hence, whenever possible, one must have $f$ integer since, except for one special case, there is always a gap. In summary, for arbitrary density $\rho$ and Chern-Simons coupling constant $\theta$, it is not always possible to require $f$ to be an integer. On the other hand, for the "happy fractions" listed above $f$ is an integer and we have an integer number $f$ of filled Landau bands. The physical behavior of the system will depend on which of the conditions listed above is realized. Thus, the physics of this problem
is determined not just by the density and the statistics, but also by number-theoretic conditions, i.e. commensurability conditions.
Of particular importance will be the sequence $\theta=m /(2 \pi)$, i.e. $n=1$. In this case we have $k=(n, q)=1$ and $f$ is indeed an integer, $f=m r /(m, r)$. For this sequence, we have an integer number $f$ of Landau bands filled for a system with arbitrary density $\rho=r / q$ and statistical parameter $\delta=\pi / m$. This is the case considered by Chen, Wilczek, Witten, and Halperin. The saddle-point approximation is expected to work for $\theta$ large (i.e. large $m$ ), which is the limit in which the anyons are almost fermions. The case of semions has $m=2$.

An exceptional case occurs if $\rho=\frac{1}{2}$ (i.e. for half-filling) and $\theta=m /(2 \pi n)$, with $n$ an odd integer. In this case we get $P=n, Q=2 m$, and $f=m$. This means that all states with energy less than zero are filled and that the Fermi level is at $E=0$. It has been known since Hofstadter's work that, in this case, there is a band crossing in the spectrum (see Chapter 12). These bands cross at $E=0$ at $Q$ points of the Brillouin zone. In fact the case $m=1$ and $\rho=\frac{1}{2}$ corresponds to a "flux phase" with $\overline{\mathcal{B}}=\pi$ (i.e. half-flux quantum per plaquette). In this case the fermion spectrum is effectively relativistic. In fact, it has long been recognized that hopping in a frustrated lattice is an efficient way to set up the Dirac equation on a lattice. In general one finds $Q$ species of Dirac fermions. Fluctuations in the statistical gauge fields may open up a gap in the spectrum. It is possible that this may be done in a manner in which time-reversal invariance is violated explicitly, or it may be spontaneously broken by fluctuations. In the field-theory language, one is asking whether a parity anomaly is present. This problem is exactly the same as the one we have already encountered in our study of the chiral spin liquid in Chapter 10. For lattice systems one has to deal with the "fermion-doubling" problem (here it is $Q$-fold!). In most cases one expects no anomalies unless a perturbation that breaks time reversal is explicitly introduced. We are going to see in the next section that these issues are quite relevant for our problem.

Thus, the SPA to the partition function yields Laughlin's result that the meanfield theory for the anyon system should be equivalent to a system of particles (say fermions) moving in an effective magnetic field determined by their density. It is clear that this approximation assumes that the flux subsystem is rigid in the sense that the average field, determined at the saddle-point level, will not be modified by the fluctuations. In this high-density-like approximation, the fluctuations around the average field $\overline{\mathcal{B}}$ should be small in order for this approximation to be stable. The local value of the field is, however, still being determined by local fluctuations of the density. In this sense, the system is compressible. If the local fluctuations are massive, the spectrum should have a gap and the system will truly be rigid. But, if the fluctuations have a gapless state, the system will not be rigid. Indeed, this "fluctuation-induced compressibility" is the very origin of the superfluidity.

### 11.5 Effective action and topological invariance

### 11.5.1 Effective action

In the previous section we discussed the SPA to the path integral for the anyon gas. Fetter, Hanna, and Laughlin claimed that the fluctuations around the state with average flux $\overline{\mathcal{B}}=2 \pi / Q$ induce a pole in the current-current correlation function, which, in turn, is responsible for the superfluidity. This is the Fetter-Hanna-Laughlin Goldstone boson. At first sight, this result seems to be quite surprising. In fact, fermions in a background magnetic field always lead to a spectrum with a gap, as in quantum-Hall-effect systems. What is different here is that the magnetic fields do not constitute a fixed background, since they are generated by the particles themselves. The fluctuations of the system retain this character. The SPA fixes only the average field, not its fluctuations, and one is led to study the effects of fluctuations of the statistical gauge fields about the mean field. It is natural to compute the effective action of the statistical gauge fields including the effects of fermion loops. In this sense this calculation is close to the standard RPA.

Purely on the grounds of gauge and translation invariance, we can assert that the effective action for the statistical gauge fields at low energies and long distances (i.e. to leading order in a gradient expansion) should only be a function of the fluctuating part of $\mathcal{F}_{\mu \nu}$ (with the smallest number of gradients) plus a term with the same form as the bare Chern-Simons term. Banks and Lykken (1990) argued that, if the effective action has an induced Chern-Simons term that happens to cancel out the bare one, then the Goldstone boson is found, and it is nothing other than the massless transverse component of the fluctuating statistical vector potential. However, it is necessary to explain why this crucial cancellation, present to leading order, survives renormalization. This is in fact far from obvious, since the coefficients of the other terms do get renormalized.

Let us now investigate how the Goldstone pole appears within this path-integral framework. We will see that the exactness of the Goldstone boson is a consequence of the topological invariance of the quantized Hall conductance for this system of fermions. Thus our problem is naturally related to the integer quantum Hall effect (IQHE) on lattices. In fact, we are going to be using many results of the theory of the quantum Hall effect. Most of these results are discussed in Chapter 12.

Let us first consider the quadratic (i.e. Gaussian) fluctuations around the mean field. The effective action for the fluctuating part of the statistical gauge fields, hereafter denoted by $\mathcal{A}_{\mu}$, to quadratic order, $S^{(2)}$, is given by

$$
\begin{equation*}
S^{(2)}\left[\mathcal{A}_{\mu}\right]=\sum_{x, x^{\prime}} \frac{\delta^{2} S_{\mathrm{eff}}}{\delta \mathcal{A}_{\mu}(x) \delta \mathcal{A}_{v}\left(x^{\prime}\right)} \mathcal{A}_{\mu}(x) \mathcal{A}_{v}\left(x^{\prime}\right) \tag{11.39}
\end{equation*}
$$

where $x \equiv(\vec{x}, t)$ and $x^{\prime} \equiv\left(\vec{x}^{\prime}, t^{\prime}\right), \vec{x}$ and $\vec{x}^{\prime}$ take values on the square lattice, and $t$ and $t^{\prime}$ are continuous (time) variables. Since $S_{\text {eff }}$ is a sum of a fermionic part and a

Chern-Simons term, $S^{(2)}$ also is a sum of two terms. The first term, which comes from the fermion loops, is nothing but the polarization operator $\Pi_{\mu \nu}\left(x, x^{\prime}\right)$. The second term is just the Chern-Simons term itself,

$$
\begin{equation*}
S^{(2)}\left[\mathcal{A}_{\mu}\right]=\sum_{x, x^{\prime}} \Pi_{\mu \nu}\left(x, x^{\prime}\right) \mathcal{A}_{\mu}(x) \mathcal{A}_{v}\left(x^{\prime}\right)-\frac{\theta}{4} S_{\mathrm{CS}}\left[\mathcal{A}_{\mu}\right] \tag{11.40}
\end{equation*}
$$

where $\Pi_{\mu \nu}\left(x, x^{\prime}\right)$ is the polarization operator for a system of fermions on a lattice in the presence of the background magnetic field $\overline{\mathcal{B}}$. Thus it is just the usual linear-response-theory kernel, the current-current correlation function of fermions.

However, the polarization tensor $\Pi_{\mu \nu}$ of the fermions in this mean-field state should not be confused with the actual polarization tensor of the full theory, which we will denote by $K_{\mu \nu}$. While $\Pi_{\mu \nu}$ is the current-correlation function of the fermions of the mean-field theory, $K_{\mu \nu}$ is the current-correlation function of the anyon system. These two tensors are not the same and their properties are quite different. We will discuss their different behaviors in detail in Chapter 13, where we will discuss the fermion Chern-Simons theory of the FQHE, in which context similar questions arise. For the purposes of our discussion of the anyon system, it will be sufficient to note that, while a system of fermions in a magnetic field has an explicitly broken time-reversal invariance and a finite Hall conductance, a system of anyons at finite density (in zero external field) is time-reversal invariant and should not have a "zero-field" Hall conductance (i.e. in the absence of an external magnetic field). We will postpone the discussion of the electrodynamic properties of the anyon system to Chapter 13, where it will be discussed together with the theory of the FQHE. Here we will just derive an effective action for the low-energy modes.

The polarization operator $\Pi_{\mu \nu}$ has an interesting structure, whose form is strongly constrained by gauge invariance and translation invariance. This structure will be discussed in detail in Chapter 13. Here we will use a few important features of its structure. The long-distance, low-energy behavior of $S^{(2)}$ can be obtained simply by noting that it has to satisfy the requirements of translation and gauge invariance. If there is a gap in the spectrum, $\Pi_{\mu \nu}$ is also local and it has a gradient expansion. Thus the effective action for fluctuations at distances larger than the inter-particle separation and energies less than the gap has the form

$$
\begin{equation*}
S^{(2)}[\mathcal{A}] \approx \int d^{2} x d t\left[\frac{\epsilon}{2} \overrightarrow{\mathcal{E}}^{2}(\vec{x}, t)-\frac{\chi}{2} \mathcal{B}^{2}(\vec{x}, t)+\frac{1}{4}\left(\sigma_{x y}-\theta\right) \epsilon_{\mu \nu \lambda} \mathcal{A}^{\mu} \mathcal{F}^{\nu \lambda}\right]+\text { h.o.t. } \tag{11.41}
\end{equation*}
$$

where $\epsilon, \chi$, and $\sigma_{x y}$ are the (long-wavelength, low-frequency) dielectric constant, diamagnetic susceptibility, and Hall conductance of the Fermi system, respectively. Note that the term which contains the Hall conductance has the same form as but opposite sign to the bare Chern-Simons term which determines the statistics of the
anyons. This effective action is correct in the limit in which the frequencies of the modes are small while their momentum is held fixed, but not in the opposite limit of small momentum and fixed frequency.

The parameters ( $\epsilon, \chi$, and $\sigma_{x y}$ ) are in principle determined by integrating out all fluctuations from the highest energies allowed in this problem down to the only physical scale this system has: the gap. One expects that these coefficients will be heavily renormalized away from their saddle-point values. For the "almostfermion" limit of large $\theta$, the renormalizations are expected to be small, of order $1 / \theta$. Thus, although explicit expressions for these coefficients can be found (they are given by various pieces of the polarization operator $\Pi_{\mu \nu}$ ), their precise form is not in principle very important due to the above-mentioned renormalization effects.

While these considerations apply to $\epsilon$ and $\chi$, as well as to the higher-order terms in the effective action which we have neglected, the value of $\sigma_{x y}$ is completely determined already at the saddle-point level. This is so because $\sigma_{x y}$ is the Hall conductance for a system of fermions on a lattice, with an integer number $f$ of Landau bands exactly filled, which has been shown to be quantized.

### 11.5.2 Quantized Hall conductance and compressibility

The quantization of $\sigma_{x y}$ has been studied extensively in the context of the quantum Hall effect. Thouless, Kohmoto, Nightingale, and den Nijs (TKNN) (Thouless et al., 1982) showed that the $\sigma_{x y}$ associated with the Hofstadter problem is quantized in terms of an integer $t$ in the range $-Q / 2<t<Q / 2$, which, in turn, is determined by a Diophantine equation. The theory of TKNN is discussed in Chapter 12. The following results are relevant to our problem. If $j$ denotes the $j$ th gap of a Hofstadter problem with $\overline{\mathcal{B}}=2 \pi P / Q$, there exist two integers $t_{j}$ and $s_{j}$ (with $t_{j}$ in the same range as $t$ and $s_{j}$ unconstrained) such that

$$
\begin{equation*}
j=Q s_{j}+P t_{j} \tag{11.42}
\end{equation*}
$$

If the Fermi energy lies in the $f$ th gap, the Hall conductance is given by

$$
\begin{equation*}
\sigma_{x y}=\frac{e^{2}}{\hbar} \sum_{j=1}^{f}\left(t_{j}-t_{j-1}\right) \tag{11.43}
\end{equation*}
$$

with $t_{0}=0$. Thus, in units in which $e^{2}=\hbar=1$, we find

$$
\begin{equation*}
\sigma_{x y}=\frac{t_{f}}{2 \pi} \tag{11.44}
\end{equation*}
$$

where $t_{f}$ is the solution of the Diophantine equation for the $f$ th gap. We may now combine these results to get

$$
\begin{equation*}
\sigma_{x y}=\theta\left(1-\frac{s_{f}}{\rho}\right) \tag{11.45}
\end{equation*}
$$

The Diophantine equation has solutions in the form of a pair of integers $\left(s_{f}, t_{f}\right)$. The solution is, in most cases, unique and, in general, both $s_{f}$ and $t_{f}$ will be different from zero. Under special circumstances, we will find families of solutions with $s_{f}=0$. Also, in some special cases, the solution is not unique. The solutions with $s_{f}=0$ play a special role for, as we will see, they represent the compressible states.

Let us first consider the sequence $\theta=m /(2 \pi)$ and $\rho$ arbitrary. The mean-field theory yields the values $P=r /(m, r), Q=m q /(m, r)$ and it requires that exactly $f=m r /(m, r)$ Landau bands are filled. The Diophantine equation has, for $j=f$, the unique solution

$$
s_{f}=\left\{\begin{array}{lll}
0, & t_{f}=m, & \text { if }|m|<m q /(2(m, r))  \tag{11.46}\\
r /(m, r), & t_{f}=m-m q /(m, r), & \text { if }|m|>m q /(2(m, r))
\end{array}\right.
$$

There are degenerate solutions whenever $|m|=m q /(2(m, r))$. In this case both solutions are possible and the value of $t_{f}$ is ambiguous. It is easy to see that a degeneracy occurs whenever $m=m q /(2(m, r))$, i.e. for $q=2(m, r)$ and $q$ even. This includes the half-filled even-denominator case $\rho=\frac{1}{2}$. Which solution is realized depends on how this degeneracy is lifted by additional terms in the Hamiltonian. It is natural to assume that it is always possible to find terms that will remove this degeneracy. The physical properties of the system will depend on the way we choose to render the system non-degenerate.

Thus, in the absence of degeneracies, the solution is unique and one finds $t_{f}=m$ and $s_{f}=0$ if $q>2(m, r)$. Hence, we get

$$
\begin{equation*}
\sigma_{x y}=\frac{m}{2 \pi} \tag{11.47}
\end{equation*}
$$

which is exactly identical to $\theta$ ! We then conclude that, at least at the level of the SPA and in the absence of degeneracies, $\sigma_{x y}=\theta$ and the Chern-Simons term in the effective action for the fluctuating statistical gauge fields is cancelled out provided that $q>2(m, r)$. As Banks and Lykken observed, this is a sufficient condition for the existence of the Goldstone boson. Conversely, for $q<2(m, r)$, the solution has $s_{f}=r /(m, r) \neq 0$, and there is no cancellation and no Goldstone boson.

For other sequences, such as $n \neq 1$, it is not possible to find a solution of the Diophantine equation with $s_{f}=0$. It is easy to check that this solution exists only if $n$ is a factor of $m$, which is impossible since $(n, m)=1$ except for the case $n=1$. Thus, the other sequences do not exhibit superfluidity. These non-superfluid states cannot be found in the continuum theory. They are the result of diffraction effects generated by the underlying lattice. It is clear that, in the low-density limit, these
effects do not impose an overwhelming constraint, provided that the Fermi energy lies in one of the main energy gaps. In this case, there is a smooth continuum limit at low densities. However, if the Fermi energy is in one of the lower gaps, we will not get a cancellation, even in the low-density limit. Thus, the continuum limit is tricky to get. We should then expect that the properties of the ground state should depend on some details of the behavior of the system at short distances. This problem will come back when we consider the role of higher-order fluctuations.

### 11.5.3 Stability of the mean-field state

One might wonder about the stability of this crucial result once fluctuations about mean-field theory are considered. Two problems naturally arise. First of all, one must worry about infinite renormalizations. In continuum relativistic-field theories it is known that the Chern-Simons term does not acquire infinite renormalizations (Semenoff et al., 1989). Non-relativistic theories are not expected to be any more singular. Thus divergent renormalizations of $\sigma_{x y}$ are not to be expected. However, finite renormalizations are not excluded by such arguments. The stability of the Goldstone boson requires no renormalization at all, neither infinite nor finite.

No-renormalization theorems usually follow from symmetry considerations or as a result of topology (or both). For the case of the lattice system, Kohmoto, and Avron, Seiler, and Simon, showed that $\sigma_{x y}$ is a topological invariant (see Chapter 12). The topological invariance of $\sigma_{x y}$ follows from the fact that the Brillouin zone of a 2D system with periodic boundary conditions is a 2-torus. The integer $t_{m}$ is the first Chern number of the fiber bundle associated with the Berry connection induced by the wave functions on the 2-torus. Small changes in the microscopic Hamiltonian will not change this number, provided that no band crossings occur as a result of such changes. Qualitatively speaking, fluctuations about a solution with a finite gap are expected to have the same effect. After all, the fluctuations, configuration by configuration, will modulate the gap. Since each configuration yields the same value for $\sigma_{x y}$, the final result should be the same, provided that the sum over configurations makes sense. Once again, this argument requires the existence of a non-zero energy gap. Niu, Thouless, and Wu have also given an argument for the stability of the quantization of $\sigma_{x y}$ including many-body effects (i.e. fluctuations). They showed that, if the many-body wave function for the ground state winds by the phases $\alpha$ and $\beta$ along the $x_{1}$ and $x_{2}$ directions, then the value of $\sigma_{x y}^{\mathrm{av}}$, averaged over $\alpha$ and $\beta$, is a topological invariant and hence it is quantized in the full theory. For a system with specific boundary conditions, say periodic, they showed that $\sigma_{x y}^{\mathrm{pbc}}$ differs from $\sigma_{x y}^{\mathrm{av}}$ by terms that vanish exponentially fast in the thermodynamic limit, provided that the system has a non-zero energy gap. For more details, see the discussion in Chapter 12.

I thus conclude that the topological invariance of $\sigma_{x y}$ guarantees that the Goldstone boson is stable to all orders in perturbation theory.

### 11.5.4 Low-energy spectrum

We must then conclude that the anyon gas can exist in only one of two possible states, each defined by a low-energy effective action of the form of a QED-type theory with possibly a Chern-Simons term with some effective coupling. For the case of the "happy fractions," $\theta=m /(2 \pi)$ and $\rho=r / q$, the effective action does not have a net Chern-Simons term. The effective action has the form

$$
\begin{equation*}
S^{(2)}[\mathcal{A}]=\int d^{2} x d t\left[\frac{\epsilon}{2} \overrightarrow{\mathcal{E}}^{2}(\vec{x}, t)-\frac{\chi}{2} \mathcal{B}^{2}(\vec{x}, t)\right]+\text { h.o.t. } \tag{11.48}
\end{equation*}
$$

which is the action of free "Maxwell" electrodynamics in $(2+1)$ dimensions. Here I have neglected terms that vanish in the infrared limit.

Let us now consider the dual of this theory. Here we understand duality in the statistical-mechanical sense in which a gauge theory in $(2+1)$ dimensions is dual to a theory with a global symmetry. Since the gauge field of this problem, the statistical gauge field, has a $\mathrm{U}(1)$ symmetry, its dual is a phase field. Let $\Lambda_{\mu \nu}(\vec{x}, t)$ be a real antisymmetric tensor field. Since we are dealing with an anisotropic theory, it is convenient to define $\Lambda_{0 i}=\vec{e}_{i}$ and $\Lambda_{i j}=\epsilon_{i j} b$, where $\vec{e}_{i}$ and $b$ are real functions of space and time.

Consider now the modified action $S^{\prime}$

$$
\begin{equation*}
S^{\prime}=\int d t d^{2} x\left(-\frac{1}{2 \epsilon} \vec{e}^{2}+\frac{1}{2 \chi} b^{2}+\frac{1}{2} \Lambda_{\mu \nu} \mathcal{F}^{\mu \nu}\right) \tag{11.49}
\end{equation*}
$$

We can identify the path integrals with actions $S$ and $S^{\prime}$ after a shift of the Gaussian variables $\Lambda_{\mu \nu}$, except for an irrelevant constant. The fluctuating statistical gauge fields $\mathcal{A}_{\mu}$ can now be integrated out, yielding the constraint on the $\Lambda_{\mu \nu}$ fields

$$
\begin{equation*}
\partial^{\mu} \Lambda_{\mu \nu}=0 \tag{11.50}
\end{equation*}
$$

This constraint can be solved by means of the phase field $\omega$ defined by

$$
\begin{equation*}
\Lambda_{\mu \nu}=\frac{1}{2 \pi} \epsilon_{\mu \nu \lambda} \partial^{\lambda} \omega \tag{11.51}
\end{equation*}
$$

By substituting back into the effective action, we get the effective Lagrangian density in terms of the $\omega$ field

$$
\begin{equation*}
\mathcal{L}=\frac{1}{8 \pi^{2} \chi}\left(\partial_{0} \omega+m A_{0}\right)^{2}-\frac{1}{8 \pi^{2} \epsilon}\left(\partial_{i} \omega+m A_{i}\right)^{2}+\text { h.o.t. } \tag{11.52}
\end{equation*}
$$

which has the same form as in a conventional superfluid. This effective Lagrangian was first obtained by Banks and Lykken. In this derivation I used the fact that $\theta=m /(2 \pi)$.

This theory has only one transverse degree of freedom, the "photon." Note that this has nothing to do with the real electromagnetic field. It originates from the fluxes associated with the anyons. This "photon" is the only massless excitation of this theory. It is precisely the Goldstone boson. It is responsible both for the phase mode necessary for superconductivity and for a direct Coulomb-like static interaction among sources (or excitations) that couple to the statistical gauge field. At long distances, the $(2+1)$-dimensional Coulomb interaction goes like $\ln R$, where $R$ is the separation between two sources of the field $\mathcal{A}$. Thus, the energy necessary to create a fermion diverges logarithmically with the size of the system. The same happens with the energy required in order to add a flux to the system.

An anyon, however, is a gauge-invariant state. As such it couples only weakly to the fluctuations of the statistical gauge field since it is neutral but not quite pointlike. Thus, we expect the energy of an anyon-like excitation to be finite and its value to be determined primarily by short-distance effects. Let us consider an operator that creates an anyon at point $\vec{x}$. It is easy to compute correlation functions of these gauge-invariant operators in the Coulomb (or anyon) gauge. In this gauge, we can write

$$
\begin{equation*}
\mathcal{A}_{j}(\vec{x}, t)=\epsilon_{j k} \Delta_{k} \phi(\vec{x}, t) \tag{11.53}
\end{equation*}
$$

where $\phi$ also obeys periodic boundary conditions. If we now substitute Eq. (11.53) back into Eq. (11.6) then, after an integration by parts of the argument of the exponential, we find

$$
\begin{equation*}
K(\vec{x}, t)=e^{i \theta \Sigma_{\vec{y}} \phi(\vec{y}, t) \Delta_{j} \mathcal{A}_{j}^{c}(\vec{y})} \tag{11.54}
\end{equation*}
$$

If we also choose the Coulomb gauge to describe the classical fluxes, i.e. $\Delta_{j} \mathcal{A}_{j}^{\mathrm{c}}=0$, we see that, in this gauge, $K(\vec{x}, t)$ is equivalent to the identity operator. Thus, the correlation function for anyon operators is, in the Coulomb gauge, the same as the (gauge-dependent) fermion propagator evaluated in the same gauge. In the Coulomb gauge, the fermion propagator has the following properties: (a) it is multivalued and (b) it is short-ranged. It is multivalued, since the one-particle wave functions are multivalued in this gauge. It is short-ranged, since the ground state has filled Landau bands and the only possible one-particle states available are in the next unfilled Landau band. These states are separated from the ground state by the energy gap between Landau bands, which is finite.

In contrast, the elementary fermion excitations have a logarithmically divergent self-energy. This is so because the operators that create these states are not gaugeinvariant, reflecting the fact that these are not neutral states. A gauge-invariant
fermion operator can be defined. This is achieved by inserting the usual exponential of the line integral, along some path $\Gamma$, of the statistical vector potential between a pair of fermion-creation and -annihilation operators some distance apart from each other:

$$
\begin{equation*}
c^{\dagger}(\vec{x}, t) \exp \left(i \int_{\Gamma} \mathcal{A}_{\mu} d x^{\mu}\right)_{c\left(\vec{x}^{\prime}, t^{\prime}\right)} \tag{11.55}
\end{equation*}
$$

The massless "photon" gives rise to a logarithmically divergent fermion selfenergy. A similar treatment can be given to flux states. The operator $K$ which creates fluxes is not gauge-invariant. A way to make it invariant is to multiply this operator by a fermion operator that represents anyons, not fermions or fluxes. However, it is still possible to multiply $K(\vec{x}, t)$ by a line integral, just as in the fermion case. The resulting operator is a boson, and it is manifestly gauge-invariant. The one-particle states created by these operators also have logarithmically divergent energy and exactly for the same reason: the exchange of massless "photons."

Let us end this section by briefly considering the state in which the effective action has a non-zero effective Chern-Simons term. I will call this phase the quantum Hall state. The effective Chern-Simons coupling constant $\bar{\theta}$ equals

$$
\begin{equation*}
\bar{\theta}=-s_{f} \frac{\theta}{\rho} \tag{11.56}
\end{equation*}
$$

Thus, a non-zero $s_{f}$ means $\bar{\theta} \neq 0$. A theory with a non-zero Chern-Simons coupling constant is known to contain a massive photon. The mass of the photon is proportional to $\bar{\theta}$ and hence it is determined by $s_{f}$. Thus, the quantum Hall state has short-range gauge interactions mediated by the statistical gauge field. These fluctuations are effectively suppressed and the state is effectively incompressible.

## 12

## Topology and the quantum Hall effect

In this chapter I discuss the problem of electrons moving on a plane in the presence of an external uniform magnetic field perpendicular to the system. This is a subject of great interest from the point of view of both theory and experiment. The explanation of the remarkable quantization of the Hall conductance observed in MOSFETs and in heterostructures has demanded a great deal of theoretical sophistication. Concepts drawn from branches of mathematics, such as topology and differential geometry, have become essential to the understanding of this phenomenon. In this chapter I will consider only the quantum Hall effect in non-interacting systems. This is the theory of the integer Hall effect. The fractional quantum Hall effect (FQHE) is discussed in Chapter 13. The related subject of topological insulators is discussed in Chapter 16.

The chapter begins with a description of the one-electron states, both in the continuum and on a 2D lattice, followed by a summary of the observed phenomenology of the quantum Hall effect. A brief discussion of linear-response theory is also presented. The rest of the chapter is devoted to the problem of topological quantization of the Hall conductance.

### 12.1 Quantum mechanics of charged particles in magnetic fields

Let us review the Landau problem of the states of charged particles moving on a plane in the presence of a perpendicular uniform magnetic field $B$. We will consider both continuum and lattice versions of the problem.

We consider first the continuum problem. Let us think of a spinless particle of mass $M$ and charge $-e$. The one-particle Hamiltonian which describes the dynamics of this system is

$$
\begin{equation*}
\mathcal{H}=\frac{1}{2 M}\left[\left(-i \hbar \frac{\partial}{\partial x_{1}}-\frac{e}{c} A_{1}\right)^{2}+\left(-i \hbar \frac{\partial}{\partial x_{2}}-\frac{e}{c} A_{2}\right)^{2}\right] \tag{12.1}
\end{equation*}
$$

The vector potential $\vec{A}$ is such that its curl is equal to $B$, the perpendicular component of the field,

$$
\begin{equation*}
B=\epsilon_{i j} \partial_{i} A_{j} \tag{12.2}
\end{equation*}
$$

If the linear size of the plane is $L$, the total flux $\Phi$ is

$$
\begin{equation*}
\Phi=B L^{2} \tag{12.3}
\end{equation*}
$$

In what follows, I will assume that there is an exact integer number $N_{\phi}$ of flux quanta $\phi_{0}$ piercing the plane

$$
\begin{equation*}
\Phi=N_{\phi} \phi_{0} \equiv N_{\phi} \frac{h c}{e} \tag{12.4}
\end{equation*}
$$

If we choose units such that $\hbar=e=c=1$, the flux quantum $\phi_{0}$ is just equal to $2 \pi$. In these units we can write $\Phi=2 \pi N_{\phi}$. Also, we are going to measure lengths in units of the magnetic length $l_{0}$ defined to be $l_{0}=B^{-1 / 2}$.

We will work in the isotropic gauge

$$
\begin{equation*}
A_{i}=-\frac{1}{2} B \epsilon_{i j} x_{j} \tag{12.5}
\end{equation*}
$$

In this gauge, it is convenient to work in complex coordinates $z=x_{1}+i x_{2}$. Let us factor an exponentially decaying function of $|z|^{2}$ out of the wave function. This procedure automatically introduces an apparently special point, the origin $z=0$. Since the location of the origin must be arbitrary, there should exist an operator that will remove this arbitrariness. We will see that this is the case. As a byproduct, we will also find not only that the energy eigenvalues, the Landau levels, are degenerate but also that this degeneracy is generated by a special group of transformations, the group of magnetic translations (Zak, 1964). If we are dealing with a rotationally invariant system, such as a disk, it is convenient to write the wave functions in the form

$$
\begin{equation*}
\Psi(z, \bar{z})=f(z, \bar{z}) e^{-\lambda|z|^{2}} \tag{12.6}
\end{equation*}
$$

which decays exponentially fast at infinity. For this Hilbert space, the disk is topologically equivalent to a 2 -sphere.

If we now choose for $\lambda$ the value

$$
\begin{equation*}
\lambda=\frac{e|B|}{4 \hbar c}=\left(\frac{e}{\hbar c}\right) \frac{|B|}{4} \equiv \frac{1}{4 l_{0}^{2}} \tag{12.7}
\end{equation*}
$$

(where we introduced the magnetic length $l_{0}$ ), the function $f(z, \bar{z})$ is found to satisfy an equation that, in complex coordinates, has the form

$$
\begin{equation*}
-\frac{2 \hbar^{2}}{M} \partial_{z} \partial_{\bar{z}} f+\frac{e|B| \hbar}{M c} \bar{z} \partial_{\bar{z}} f+\frac{e|B| \hbar}{2 M c} f=E f \tag{12.8}
\end{equation*}
$$

for $B>0$. For $B<0$ we must replace $z$ by $\bar{z}$. In Eq. (12.8), we have introduced the operators $\partial_{z}$ and $\partial_{\bar{z}}$ defined by

$$
\begin{equation*}
\partial_{z}=\frac{1}{2}\left(\partial_{1}-i \partial_{2}\right), \quad \partial_{\bar{z}}=\frac{1}{2}\left(\partial_{1}+i \partial_{2}\right) \tag{12.9}
\end{equation*}
$$

It will be sufficient to discuss the case of $B>0$.
Any analytic function $f(z)$ is a solution of Eq. (12.8). A complete basis $\left\{f_{n}(z)\right\}$ has the form

$$
\begin{equation*}
f_{n}=z^{n} \tag{12.10}
\end{equation*}
$$

which are also eigenstates of the angular-momentum operator $L_{z}$

$$
\begin{equation*}
L_{z}=-i \hbar\left(x_{1} \partial_{2}-x_{2} \partial_{1}\right) \equiv+\hbar\left(z \partial_{z}-\bar{z} \partial_{\bar{z}}\right) \tag{12.11}
\end{equation*}
$$

with energy and angular-momentum eigenvalues

$$
\begin{equation*}
E_{0}=\frac{\hbar \omega_{\mathrm{c}}}{2}, \quad L_{z}=n \hbar \tag{12.12}
\end{equation*}
$$

An antianalytic function, $\bar{z}^{m}$ is an eigenstate of the $m$ th Landau level with energy

$$
\begin{equation*}
E_{m}=\hbar \omega_{\mathrm{c}}\left(m+\frac{1}{2}\right) \tag{12.13}
\end{equation*}
$$

where

$$
\begin{equation*}
\omega_{\mathrm{c}}=\frac{e B \hbar}{M c} \tag{12.14}
\end{equation*}
$$

is the cyclotron frequency. The Landau levels have a huge degeneracy, which is the same for all the Landau levels and is equal to $N_{\phi}$.

In order to make this degeneracy more apparent, let us introduce the operators of magnetic translation and the group of transformations induced by them. Let $\vec{a}$ and $\vec{b}$ be two vectors on the plane. For a system in a magnetic field $B(B>0)$, the canonical momentum operator $\vec{P}$ is given by the usual minimal-coupling definition

$$
\begin{align*}
\vec{P} & =-i \hbar \vec{\nabla}-\frac{e}{c} \vec{A}  \tag{12.15}\\
B & =\epsilon_{i j} \partial_{i} A_{j}
\end{align*}
$$

The generator of infinitesimal magnetic translations $\vec{k}$ (Zak, 1964) is

$$
\begin{equation*}
k_{i}=P_{i}-\frac{e B}{c} \epsilon_{i j} x_{j} \equiv P_{i}(-B) \tag{12.16}
\end{equation*}
$$

A finite magnetic translation by a vector $\vec{a}$ is represented by the operator $\hat{t}(\vec{a})$,

$$
\begin{equation*}
\hat{t}(\vec{a})=e^{i \vec{a} \cdot \frac{\vec{k}}{\hbar}} \tag{12.17}
\end{equation*}
$$

These magnetic translation operators obey the so-called magnetic algebra

$$
\begin{equation*}
\hat{t}(\vec{a}) \hat{t}(\vec{b})=\exp \left(-i(\vec{a} \times \vec{b}) \cdot \frac{\hat{z}}{l_{0}^{2}}\right) \hat{t}(\vec{b}) \hat{t}(\vec{a}) \tag{12.18}
\end{equation*}
$$

where $\hat{z}$ is a unit vector normal to the plane.
The magnetic translations form a group in the sense that the operators $\hat{t}(\vec{a})$ obey the composition law

$$
\begin{equation*}
\hat{t}(\vec{a}) \hat{t}(\vec{b})=\exp \left(\frac{i}{2 l_{0}^{2}}(\vec{a} \times \vec{b}) \cdot \hat{z}\right) \hat{t}(\vec{b}+\vec{a}) \tag{12.19}
\end{equation*}
$$

Thus, the operators $\hat{t}(\vec{a})$ form a representation of the group of magnetic translations. Equation (12.19) has an extra phase factor that is not present in the usual group composition law. The existence of this phase, which is known in mathematics as a cocycle, indicates that the operators $\hat{t}(\vec{a})$ form a ray representation of the group of magnetic translations.

The Hamiltonian for a charged particle moving in a magnetic field can now be written in the standard form, $H=\vec{P}^{2} /(2 M)$. The canonical momentum operators $\vec{P}$ and the generators of magnetic translations $\vec{k}$ commute with each other,

$$
\begin{equation*}
\left[k_{i}, P_{j}\right]=0 \tag{12.20}
\end{equation*}
$$

although the different components of $\vec{k}$ (and $\vec{P}$ ) do not commute among themselves,

$$
\begin{equation*}
\left[k_{i}, k_{j}\right]=-\left[P_{i}, P_{j}\right]=i \frac{e \hbar B}{c} \epsilon_{i j} \tag{12.21}
\end{equation*}
$$

Thus, the two components of $\vec{k}$ commute with the Hamiltonian,

$$
\begin{equation*}
\left[k_{i}, H\right]=\frac{1}{2 M}\left[k_{i}, \vec{P}^{2}\right]=0 \tag{12.22}
\end{equation*}
$$

and are constants of motion. However, since $k_{1}$ and $k_{2}$ do not commute with each other, they cannot be diagonalized simultaneously. We can then use $k_{1}$ or $k_{2}$, or some linear combination thereof, to label the degenerate states. Which combination is convenient depends on the choice of boundary conditions.

Let us assume, for the moment, that the system has the shape of a rectangle with linear dimensions $L_{1}$ and $L_{2}$ along the (orthogonal) directions $\hat{e}_{1}$ and $\hat{e}_{2}$, respectively $\left(\hat{e}_{i} \cdot \hat{e}_{j}=\delta_{i j}, i=1,2\right)$. The total flux $\Phi$ passing through the rectangle is $\Phi=B L_{1} L_{2}$. In units of the flux quantum $\phi_{0}=h c / e$, the total flux is an integer $N_{\phi}=\Phi / \phi_{0}$. Alternatively, $N_{\phi}$ can be given in terms of the magnetic length $l_{0}$ and the area of the system $L_{1} L_{2}$ in the equivalent form

$$
\begin{equation*}
\frac{L_{1} L_{2}}{l_{0}^{2}}=2 \pi N_{\phi} \tag{12.23}
\end{equation*}
$$

Let us now consider the operators $\hat{T}_{1}$ and $\hat{T}_{2}$ which represent magnetic translations by $L_{1} / N_{\phi}$ and $L_{2} / N_{\phi}$ along the directions $\hat{e}_{1}$ and $\hat{e}_{2}$, respectively:

$$
\begin{align*}
& \hat{T}_{1} \equiv \hat{t}\left(\frac{L_{1}}{N_{\phi}} \hat{e}_{1}\right) \\
& \hat{T}_{2} \equiv \hat{t}\left(\frac{L_{2}}{N_{\phi}} \hat{e}_{2}\right) \tag{12.24}
\end{align*}
$$

The operators $\hat{T}_{1}$ and $\hat{T}_{2}$ obey the algebra

$$
\begin{equation*}
\hat{T}_{1} \hat{T}_{2}=e^{-i \frac{2 \pi}{N_{\phi}}} \hat{T}_{2} \hat{T}_{1} \tag{12.25}
\end{equation*}
$$

which is often also referred to as the magnetic algebra. In Chapter 10 we discussed this algebra in the context of the commutation relations for anyon operators.

Let us now assume that we have a state $\Psi_{n, 0}$ that is an eigenstate of the Hamiltonian in the $n$th Landau level and that it is also an eigenstate of, say, $\hat{T}_{1}$, i.e.

$$
\begin{align*}
& \hat{H} \Psi_{n, 0}=E_{n} \Psi_{n, 0}  \tag{12.26}\\
& \hat{T}_{1} \Psi_{n, 0}=e^{i \lambda_{0}} \Psi_{n, 0}
\end{align*}
$$

where $E_{n}$ and $\lambda_{0}$ are the eigenvalues. Consider now the state $\Psi_{n, m}$,

$$
\begin{equation*}
\Psi_{n, m}=\hat{T}_{2}^{m} \Psi_{n, 0} \tag{12.27}
\end{equation*}
$$

Since both $\hat{T}_{1}$ and $\hat{T}_{2}$ commute with $\hat{H}$, it follows that all the states $\Psi_{n, m}$ have energy $E_{n}$,

$$
\begin{equation*}
\hat{H} \Psi_{n, m}=\hat{H} \hat{T}_{2}^{m} \Psi_{n, 0}=\hat{T}_{2}^{m} \hat{H} \Psi_{n, 0}=E_{n} \Psi_{n, m} \tag{12.28}
\end{equation*}
$$

However, the states $\Psi_{n, m}$ have different eigenvalues of $\hat{T}_{1}$,

$$
\begin{equation*}
\hat{T}_{1} \Psi_{n, m}=e^{-i 2 \pi \frac{m}{N_{\phi}}+i \lambda_{0}} \Psi_{n, m} \tag{12.29}
\end{equation*}
$$

Thus, there are exactly $N_{\phi}$ linearly independent degenerate eigenstates of the Hamiltonian in a given Landau level. For a system with wave functions vanishing at spatial infinity (i.e. a "disk") the operators $k_{1}$ and $k_{2}$ are replaced by their counterparts in complex coordinates, $k$ and $\bar{k}$,

$$
\begin{align*}
k & =\frac{i}{2 \hbar}\left(k_{1}-i k_{2}\right)=\partial_{z}-\frac{\bar{z}}{4 l_{0}^{2}} \\
\bar{k} & =\frac{i}{2 \hbar}\left(k_{1}+i k_{2}\right)=\partial_{\bar{z}}+\frac{z}{4 l_{0}^{2}} \tag{12.30}
\end{align*}
$$

which also commute with the momenta (in complex coordinates) $P$ and $\bar{P}$,

$$
\begin{align*}
P & =\frac{i}{2 \hbar}\left(P_{1}+i P_{2}\right)=\partial_{\bar{z}}-\frac{z}{4 l_{0}^{2}}  \tag{12.31}\\
\bar{P} & =\frac{i}{2 \hbar}\left(P_{1}-i P_{2}\right)=\partial_{z}+\frac{\bar{z}}{4 l_{0}^{2}}
\end{align*}
$$

The complex-coordinate analogs of $\hat{T}_{1}$ and $\hat{T}_{2}$, namely $T$ and $\bar{T}$, are defined by

$$
\begin{align*}
& T=e^{\frac{2 L}{N_{\phi}} k} \\
& \bar{T}=e^{i \frac{L}{N_{\phi}} \bar{k}} \tag{12.32}
\end{align*}
$$

for a system with $L_{1}=L_{2}=L$. The operators $T$ and $\bar{T}$ also satisfy the magnetic algebra Eq. (12.25). The operator $\bar{k}$ annihilates the wave function $\Psi_{n}(z, \bar{z})$ :

$$
\begin{equation*}
\bar{k} \Psi_{n}=0 \quad \text { with } \quad \Psi_{n}=c_{n} z^{n} e^{-\frac{|z|^{2}}{4 l_{0}^{2}}} \tag{12.33}
\end{equation*}
$$

Thus, $\Psi_{n}$ is an eigenstate of $\bar{T}$ with unit eigenvalue

$$
\begin{equation*}
\bar{T} \Psi_{n}=e^{i \frac{L}{N_{\phi}} \bar{k}} \Psi_{n}=\Psi_{n} \tag{12.34}
\end{equation*}
$$

A complete set of eigenstates of the $n$th Landau level $\left\{\Psi_{n, m}\right\}$ can now be constructed quite easily $\left(m=1, \ldots, N_{\phi}\right)$ :

$$
\begin{equation*}
\Psi_{n, m}(z, \bar{z})=T^{m} \Psi_{n}(z, \bar{z}) \equiv C_{n, m} e^{+2 L \frac{m}{N_{\phi}} k} \Psi_{n}(z, \bar{z}) \tag{12.35}
\end{equation*}
$$

The states in the set $\left\{\Psi_{n, m}(z, \bar{z})\right\}$ have eigenvalues

$$
\begin{align*}
H \Psi_{n, m}(z, \bar{z}) & =E_{n} \Psi_{n, m}(z, \bar{z}) \\
\bar{T} \Psi_{n, m}(z, \bar{z}) & =e^{-i 2 \pi \frac{m}{N_{\phi}}} \Psi_{n, m}(z, \bar{z}) \tag{12.36}
\end{align*}
$$

with

$$
\begin{equation*}
H=\frac{2 \hbar^{2}}{M}\left[-P \bar{P}+\frac{e B}{4 \hbar c}\right] \tag{12.37}
\end{equation*}
$$

If instead of open (or vanishing) boundary conditions we want to consider a system on a torus, i.e. periodic boundary conditions along the directions $\hat{e}_{1}$ and $\hat{e}_{2}$ of a rectangle, the wave functions will have to satisfy a periodicity condition. It is customary to demand that

$$
\begin{equation*}
\Psi\left(x_{1}, x_{2}\right)=\Psi\left(x_{1}+L_{1}, x_{2}\right)=\Psi\left(x_{1}, x_{2}+L_{2}\right) \tag{12.38}
\end{equation*}
$$

However, it is not possible to satisfy this condition if a non-zero magnetic field is present. The vector potential violates translation invariance. Thus, the wave functions cannot obey periodic boundary conditions (PBCs) since no flux could
possibly go through the system if PBCs are to be obeyed. In such a case, the circulation of $\vec{A}$ around the boundary equals zero. In order to accommodate a non-zero external flux, the vector potentials and the wave functions have to change by a large gauge transformation as we traverse the system (Haldane and Rezayi, 1985),

$$
\begin{align*}
& A_{i}\left(x_{1}+L_{1}, x_{2}\right)=A_{i}\left(x_{1}, x_{2}\right)+\partial_{i} \beta_{1}\left(x_{1}, x_{2}\right) \\
& A_{i}\left(x_{1}, x_{2}+L_{2}\right)=A_{i}\left(x_{1}, x_{2}\right)+\partial_{i} \beta_{2}\left(x_{1}, x_{2}\right) \tag{12.39}
\end{align*}
$$

such that the circulation around the boundary $\Gamma$ equals the flux $\Phi$. This requirement implies that $\beta_{1}$ and $\beta_{2}$ must satisfy the condition

$$
\begin{equation*}
\left[\beta_{2}\left(x_{1}+L_{1}, x_{2}\right)-\beta_{2}\left(x_{1}, x_{2}\right)\right]-\left[\beta_{1}\left(x_{1}, x_{2}+L_{2}\right)-\beta_{1}\left(x_{1}, x_{2}\right)\right]=\Phi \tag{12.40}
\end{equation*}
$$

It is sufficient to give just one solution to this equation, which we choose to be

$$
\begin{equation*}
\beta_{i}=-\frac{1}{2} \Phi \epsilon_{i j} \frac{x_{j}}{L_{j}} \tag{12.41}
\end{equation*}
$$

The requirement of gauge invariance forces the wave functions $\Psi\left(x_{1}, x_{2}\right)$ to transform as

$$
\begin{equation*}
\Psi\left(x_{1}, x_{2}\right) \rightarrow \exp \left(-i \frac{e}{\hbar c} \Lambda\left(x_{1}, x_{2}\right)\right) \Psi\left(x_{1}, x_{2}\right) \tag{12.42}
\end{equation*}
$$

under a gauge transformation in which $A_{i}$ changes by $\partial_{i} \Lambda\left(x_{1}, x_{2}\right)$.
Thus, under the large gauge transformation of Eq. (12.39), the wave functions must change like

$$
\begin{align*}
& \Psi\left(x_{1}+L_{1}, x_{2}\right)=e^{i \frac{e}{\hbar c} \beta_{1}\left(x_{1}, x_{2}\right)} \Psi\left(x_{1}, x_{2}\right) \\
& \Psi\left(x_{1}, x_{2}+L_{2}\right)=e^{i \frac{e}{\hbar c} \beta_{2}\left(x_{1}, x_{2}\right)} \Psi\left(x_{1}, x_{2}\right) \tag{12.43}
\end{align*}
$$

The boundary conditions of Eq. (12.39) and Eq. (12.43) are consistent provided that the translations $\left(x_{1}, x_{2}\right) \rightarrow\left(x_{1}+L_{1}, x_{2}\right) \rightarrow\left(x_{1}+L_{1}, x_{2}+L_{2}\right)$ and $\left(x_{1}, x_{2}\right) \rightarrow\left(x_{1}, x_{2}+L_{2}\right) \rightarrow\left(x_{1}+L_{1}, x_{2}+L_{2}\right)$ lead to the same value of the wave function. It is easy to check that this consistency condition leads to the flux quantization $\Phi=N_{\phi} \phi_{0}$. This result should come as no surprise, since we are in the situation of the Aharonov-Bohm effect. In other words, the system has singlevalued wave functions on the torus only if the flux is quantized. The (single-valued) wave functions constructed with this prescription are (doubly) periodic and form $N_{\phi}$-fold-degenerate multiplets. If the flux is not quantized (e.g. a rational multiple of $\phi_{0}$ ) the wave functions are multivalued and have branch cuts.

### 12.2 The Hofstadter wave functions

In the last section we considered the quantum-mechanical motion of charged particles moving in a plane in the presence of an external magnetic field perpendicular
to the plane. There are many physical situations in which the presence of a lattice cannot be ignored. In most cases these effects are quite small. Magnetic fields are relativistic effects and, if we want to pass a sizable fraction of the flux quantum $\phi$ through a plaquette of a physical lattice (with spacing $a_{0} \approx 10 \AA$ ), astronomically large magnetic fields are required. Thus, for problems such as electrons in a heterostructure, lattice effects are, in practice, negligible. However, when we are dealing with a chiral spin state, we discover the existence of dynamically generated gauge fields with large fluxes. Here, of course, lattice effects become dominant.

The problem of the quantum motion on 2D lattices in external magnetic fields was first studied by Hofstadter (1976). He considered the problem of a particle of charge $e$ hopping on a square lattice, with hopping amplitude $t$, in the presence of an external uniform magnetic field $B$. Let $|\vec{x}\rangle$ denote the (Wannier) state localized at site $\vec{x}$ of the square lattice. The hopping (tight-binding) Hamiltonian $H$ is

$$
\begin{equation*}
H=-t \sum_{\vec{x}, j=1,2}|\vec{x}\rangle e^{i \frac{e}{\hbar c} A_{j}(\vec{x})}\left\langle\vec{x}+e_{j}\right|+\text { h.c. } \tag{12.44}
\end{equation*}
$$

The vector potentials $A_{j}(\vec{x})$ reside on the links and represent the external flux. The total flux $\Phi$ going through any individual plaquette (with lattice spacing $a_{0}=1$ ) is $B$,

$$
\begin{equation*}
\sum A_{j}=\Delta_{1} A_{2}-\Delta_{2} A_{1}=B \tag{12.45}
\end{equation*}
$$

If we demand that the system be a torus, it is customary to work in the Landau gauge

$$
\begin{equation*}
A_{1}=-B x_{2}, \quad A_{2}=0 \tag{12.46}
\end{equation*}
$$

where $x_{1}$ and $x_{2}$ are integers $\left(0 \leq x_{i} \leq L_{i}, i=1,2\right)$. From now on, I will assume that $B a^{2}=(p / q) \phi_{0}$, with $p$ and $q$ a pair of relatively prime integers. In other words, the flux going through an elementary plaquette is a finite fraction $(p / q)$ of the flux quantum $\phi_{0}$.

The eigenstates $|\Psi\rangle$ of the system can be expanded in terms of a set of site (or Wannier) states

$$
\begin{equation*}
|\Psi\rangle=\sum_{\vec{x}} \Psi(\vec{x})|\vec{x}\rangle \tag{12.47}
\end{equation*}
$$

and obey the discrete Schrödinger equation

$$
\begin{align*}
-t\{ & \left.e^{-i 2 \pi \frac{p}{q} x_{2}} \Psi\left(x_{1}+1, x_{2}\right)+e^{+i 2 \pi \frac{p}{q} x_{2}} \Psi\left(x_{1}-1, x_{2}\right)\right\} \\
& -t\left\{\Psi\left(x_{1}, x_{2}+1\right)+\Psi\left(x_{1}, x_{2}-1\right)\right\}=E \Psi\left(x_{1}, x_{2}\right) \tag{12.48}
\end{align*}
$$

This Hamiltonian is not invariant under translations by one lattice spacing. However, in the Landau gauge, it is invariant under the translations

$$
\begin{align*}
& \left(x_{1}, x_{2}\right) \rightarrow\left(x_{1}+q, x_{2}\right)  \tag{12.49}\\
& \left(x_{1}, x_{2}\right) \rightarrow\left(x_{1}, x_{2}+1\right)
\end{align*}
$$

Hence, the unit cell has $q$ elementary plaquettes. With the present choice of gauge, the unit cell is $1 \times q$. The total flux passing through the unit cell is

$$
\begin{equation*}
\Phi_{\text {cell }}=q \Phi_{\text {plaquette }}=p \tag{12.50}
\end{equation*}
$$

which is an integer. Naturally, this is not an accident.
The gauge-invariant operator for translations $e^{i \hat{P}_{j}}$ is (in units such that $e=\hbar=$ $c=a_{0}=1$ )

$$
\begin{equation*}
e^{i \hat{P}_{j}}=\sum_{\vec{x}}|\vec{x}\rangle e^{i A_{j}(\vec{x})}\left\langle\vec{x}+\hat{e}_{j}\right| \tag{12.51}
\end{equation*}
$$

These operators satisfy the algebra

$$
\begin{equation*}
e^{i \hat{P}_{1}} e^{i \hat{P}_{2}}=e^{i 2 \pi \frac{p}{q}} e^{i \hat{P}_{2}} e^{i \hat{P}_{1}} \tag{12.52}
\end{equation*}
$$

and, hence, do not generally commute with each other. But $e^{i n_{1} \hat{P}_{1}}$ and $e^{i n_{2} \hat{P}_{2}}$ do commute with each other if

$$
\begin{equation*}
\frac{p}{q} n_{1} n_{2} \in \mathbb{Z} \tag{12.53}
\end{equation*}
$$

Thus, the translations $e^{i n_{1} \hat{P}_{1}}$ and $e^{i n_{2} \hat{P}_{2}}$ commute if and only if the flux passing through the rectangle with edges $n_{1}$ and $n_{2}$ is an integer multiple of the flux quantum. The smallest rectangle satisfying Eq. (12.53) is known as the magnetic unit cell.

The hopping Hamiltonian can now be written in terms of the operators $e^{i \hat{P}_{j}}$ in the form

$$
\begin{equation*}
H=-t \sum_{j=1,2}\left(e^{i \hat{P}_{j}}+e^{-i \hat{P}_{j}}\right) \tag{12.54}
\end{equation*}
$$

The eigenstates of $H$ are eigenstates not of $e^{i P_{j}}$, but of the operators $e^{i \hat{k}_{j}}$ which generate finite (i.e. lattice) magnetic translations. The operators $e^{i \hat{k}_{j}}$ are defined by

$$
\begin{equation*}
e^{i \hat{k}_{j}} \equiv \sum_{\vec{x}}|\vec{x}\rangle e^{i A_{j}^{\prime}(\vec{x})}\left\langle\vec{x}+\hat{e}_{j}\right| \tag{12.55}
\end{equation*}
$$

where the vector potentials $A_{j}^{\prime}(\vec{x})$ have to be chosen so that the magnetic translation operators $e^{i \hat{k}_{j}}$ commute with the elementary lattice translations $e^{i \hat{P}_{j}}$ and, hence, with the Hamiltonian $H$. These conditions are met if we choose $(j \neq k)$ $\Delta_{j} A_{k}^{\prime}(\vec{x})=\Delta_{k} A_{j}(\vec{x})$.

So, once again, we find

$$
\begin{equation*}
\hat{k}_{j}=\hat{P}_{j}(-B) \tag{12.56}
\end{equation*}
$$

but in the specific choice of gauge:

$$
\begin{equation*}
A_{1}^{\prime}(\vec{x})=0, \quad A_{2}^{\prime}(\vec{x})=-2 \pi \frac{p}{q} x_{1} \tag{12.57}
\end{equation*}
$$

The operators $e^{i \hat{k}_{j}}$ do not commute with each other. Rather, they obey

$$
\begin{equation*}
e^{i \hat{k}_{1}} e^{i \hat{k}_{2}}=e^{i 2 \pi \frac{p}{q}} e^{i \hat{k}_{2}} e^{i \hat{k}_{1}} \tag{12.58}
\end{equation*}
$$

Consider now the magnetic translations by $n_{1}$ steps along $x_{1}$ and $n_{2}$ steps along $x_{2}$ (no sum over $j$ ),

$$
\begin{equation*}
\hat{T}_{j}^{n_{j}}=e^{i n_{j} \hat{k}_{j}} \tag{12.59}
\end{equation*}
$$

These operators commute with each other if $n_{1}$ and $n_{2}$ satisfy Eq. (12.53).
Thus, the eigenstates of $H$ are also eigenstates of $\hat{T}_{1}^{n_{1}}$ and $\hat{T}_{2}^{n_{2}}$. With the choice of Eq. (12.57), we see that $\hat{T}_{1}$ and $\hat{T}_{2}^{q}$ satisfy

$$
\begin{equation*}
\left[\hat{T}_{1}, \hat{T}_{2}^{q}\right]=\left[\hat{T}_{1}, \hat{H}\right]=\left[\hat{T}_{2}^{q}, H\right]=0 \tag{12.60}
\end{equation*}
$$

and their eigenstates can be used to label the eigenstates of $H$. The eigenstates of $\hat{T}_{1}$ and $\hat{T}_{2}^{q}$ are of the form $\left|k_{1}, k_{2}\right\rangle$ :

$$
\begin{align*}
\hat{T}_{1}\left|k_{1}, k_{2}\right\rangle & =e^{i k_{1}}\left|k_{1}, k_{2}\right\rangle  \tag{12.61}\\
\hat{T}_{2}^{q}\left|k_{1}, k_{2}\right\rangle & =e^{i q k_{2}}\left|k_{1}, k_{2}\right\rangle
\end{align*}
$$

and must satisfy periodic boundary conditions

$$
\begin{align*}
\hat{T}_{1}^{L_{1}}\left|k_{1}, k_{2}\right\rangle & =\left|k_{1}, k_{2}\right\rangle \\
\left(\hat{T}_{2}^{q}\right)^{L_{2} / q}\left|k_{1}, k_{2}\right\rangle & =\left|k_{1}, k_{2}\right\rangle \tag{12.62}
\end{align*}
$$

These conditions can be met only if ( $k_{1}, k_{2}$ ) belongs to the magnetic Brillouin zone ( $-\pi \leq k_{1}<\pi$ and $-\pi / q \leq k_{2}<\pi / q$ ). Clearly, these boundary conditions can be imposed only if $L_{2}$ is an integer multiple of $q$. That is to say, the total flux $\Phi$ going through the entire system has to be an integer $N_{\phi}$ multiple of the flux quantum $\phi_{0}$, with $N_{\phi}=(p / q) L_{1} L_{2}$.

The magnetic Brillouin zone labels a total of $L_{1} L_{2} / q$ states. We will see now that this system has $q$ Landau (or Hofstadter) bands, each with $L_{1} L_{2} / q$ states. This is the discrete version of the degeneracy of the continuum problem.

Let us now expand the states $\Psi(\vec{x})$ in terms of magnetic-translation eigenstates:

$$
\begin{equation*}
\Psi\left(x_{1}, x_{2}\right)=\frac{1}{q} \sum_{r=1}^{q} \int_{-\pi}^{\pi} \frac{d k_{1}}{2 \pi} \int_{-\frac{\pi}{q}}^{\frac{\pi}{q}} \frac{d k_{2}}{2 \pi / q} e^{i\left(k_{1} x_{1}+k_{2} x_{2}\right)} \Psi\left(k_{1}, k_{2}+2 \pi \frac{p}{q} r\right) \tag{12.63}
\end{equation*}
$$

It is now convenient to define the $q$-component vector, $\Psi_{r}\left(k_{1}, k_{2}\right)$, as

$$
\begin{equation*}
\Psi_{r}\left(k_{1}, k_{2}\right) \equiv \Psi\left(k_{1}, k_{2}+2 \pi \frac{p}{q} r\right), \quad r=1, \ldots, q \tag{12.64}
\end{equation*}
$$

We recognize in this vector a generalization of the spinons used to study the flux phase, where $p / q=\frac{1}{2}$. The (discrete) Schrödinger equation now reads

$$
\begin{align*}
& -t\left[e^{i k_{1}} \Psi_{r+1}\left(k_{1}, k_{2}\right)+e^{-i k_{1}} \Psi_{r-1}\left(k_{1}, k_{2}\right)\right]-2 t \cos \left(k_{2}+2 \pi \frac{p}{q} r\right) \Psi_{r}\left(k_{1}, k_{2}\right) \\
& \quad=E\left(k_{1}, k_{2}\right) \Psi_{r}\left(k_{1}, k_{2}\right) \tag{12.65}
\end{align*}
$$

This equation is also known as the Harper equation and plays an important role in the theory of the electronic structure of incommensurate systems. The amplitudes $\Psi_{r}\left(r_{1}, r_{2}\right)$ are periodic functions on the magnetic Brillouin zone and thus satisfy

$$
\begin{align*}
\Psi_{r}\left(k_{1}+2 \pi n_{1}, k_{2}\right) & =\Psi_{r}\left(k_{1}, k_{2}\right) \\
\Psi_{r}\left(k_{1}, k_{2}+\frac{2 \pi}{q} n_{2}\right) & =\Psi_{r+n_{2}}\left(k_{1}, k_{2}\right)  \tag{12.66}\\
\Psi_{r+q}\left(k_{1}, k_{2}\right) & =\Psi_{r}\left(k_{1}, k_{2}\right)
\end{align*}
$$

where $n_{1}$ and $n_{2}$ are integers. Equation (12.66) implies that the magnetic Brillouin zone has the topology of a 2-torus. The amplitudes $\Psi_{r}\left(k_{1}, k_{2}\right)$, which are solutions of Eq. (12.65), form an $r$-component complex vector field that is continuous on the torus.

For arbitrary values of the integers $p$ and $q$ ( $p$ and $q$ relatively prime), the spectrum determined from Eq. (12.65) has a very complex structure. For instance, if $p$ and $q$ are chosen to belong to some infinite sequence such that, in the limit, $p / q$ becomes arbitrarily close to an irrational number, the spectrum becomes a Cantor set (Hofstadter, 1976) and the wave functions exhibit self-similar behavior (Kohmoto, 1983). Even if the problem is restricted to commensurate flux only ( $\left.\Phi=2 \pi(p / q) \phi_{0}\right)$, the spectrum has energy gaps that, as $q$ is increased, exhibit a hierarchical structure. We will not consider these issues here. Rather, we will consider only the broad qualitative properties of the spectrum and wave functions. In general, Eq. (12.65) has to be solved numerically.

For generic values of $p$ and $q$, the spectrum has $q$ bands. For any arbitrary pair of relatively prime integers $p$ and $q$, the Hamiltonian $\mathcal{H}\left(k_{1}, k_{2}\right)$ associated with the Schrödinger equation Eq. (12.65) has a number of symmetries (Wen and Zee, 1989). Let $\hat{A}$ and $\hat{B}$ be a pair of $q \times q$ matrices defined by

$$
\begin{equation*}
\hat{A}_{j k}=\omega^{k} \delta_{j k}, \quad \hat{B}_{j k}=\delta_{j, k-1} \tag{12.67}
\end{equation*}
$$

where $j, k=1, \ldots, q$ and $\omega=e^{-i 2 \pi p / q}$, satisfying the algebra $A B=e^{i 2 \pi \frac{p}{q}} B A$. The Hamiltonian $\mathcal{H}\left(k_{1}, k_{2}\right)$ is given by

$$
\begin{equation*}
\mathcal{H}\left(k_{1}, k_{2}\right)=e^{-i k_{2}} \hat{A}+e^{+i k_{1}} \hat{B}+\text { h.c. } \tag{12.68}
\end{equation*}
$$

Given $p$ and $q$, we can always find a pair of (relatively prime) integers $n$ and $m$ such that $1=n p+m q$. It is easy to check that the matrices $\tilde{A} \equiv \hat{A}^{n}$ and $\tilde{B} \equiv \hat{B}^{m}$ satisfy the following identities:

$$
\begin{align*}
\tilde{A} \mathcal{H}\left(k_{1}, k_{2}\right) \tilde{A}^{-1} & =\mathcal{H}\left(k_{1}+\frac{2 \pi}{q} n, k_{2}\right)  \tag{12.69}\\
\tilde{B} \mathcal{H}\left(k_{1}, k_{2}\right) \tilde{B}^{-1} & =\mathcal{H}\left(k_{1}, k_{2}+\frac{2 \pi}{q}\right)  \tag{12.70}\\
\mathcal{H}\left(k_{1}+\frac{2 \pi}{q}-2 \pi m, k_{2}\right) & =\mathcal{H}\left(k_{1}+\frac{2 \pi}{q}, k_{2}\right)  \tag{12.71}\\
\tilde{A} \tilde{B} & =e^{-i 2 \pi p \frac{n^{2}}{q}} \tilde{B} \tilde{A} \tag{12.72}
\end{align*}
$$

Thus, if $\Psi\left(k_{1}, k_{2}\right)$ is an eigenstate of $\mathcal{H}\left(k_{1}, k_{2}\right)$ with energy $E\left(k_{1}, k_{2}\right)$, the state $\Psi^{\prime}\left(k_{1}, k_{2}\right)$,

$$
\begin{equation*}
\Psi^{\prime}\left(k_{1}, k_{2}\right)=\tilde{A} \Psi\left(k_{1}, k_{2}\right) \tag{12.73}
\end{equation*}
$$

is an eigenstate of $\mathcal{H}^{\prime}\left(k_{1}, k_{2}\right)=\mathcal{H}\left(k_{1}+2 \pi / q, k_{2}\right)$ with the same eigenvalue $E\left(k_{1}, k_{2}\right)$. In other words, there is a one-to-one correspondence between the spectrum at $\left(k_{1}, k_{2}\right)$ and that at $\left(k_{1}+2 \pi / q, k_{2}\right)$. An analogous argument shows that the spectra at $\left(k_{1}, k_{2}+2 \pi / q\right)$ and $\left(k_{1}, k_{2}\right)$ are also identical to each other. In addition, under the translation $\left(k_{1}, k_{2}\right) \rightarrow\left(k_{1}+\pi, k_{2}+\pi\right)$, the Hamiltonian changes sign, i.e. $\mathcal{H}\left(k_{1}+\pi, k_{2}+\pi\right)=-\mathcal{H}\left(k_{1}, k_{2}\right)$, and $E\left(k_{1}+\pi, k_{2}+\pi\right)=-E\left(k_{1}, k_{2}\right)$. For $q$ even, this operation is a particular case of Eq. (12.69). Thus, if $q$ is even, then, for each eigenstate of $\mathcal{H}$ with energy $E$, there exists an eigenstate with energy $-E$. The operator that connects states with opposite signs of the energy, let us call it $\Gamma$, must anti-commute with $\mathcal{H}$ and be hermitian. It is easy to check that the matrix $\Gamma_{j k}$,

$$
\begin{equation*}
\Gamma_{j k}=(-1)^{j} i^{q / 2} \delta_{k, j+q / 2} \tag{12.74}
\end{equation*}
$$

has the desired properties

$$
\begin{equation*}
\{\mathcal{H}, \Gamma\}=0, \quad \Gamma^{2}=I \tag{12.75}
\end{equation*}
$$

and that $\Gamma$ also anti-commutes with $\hat{A}, \hat{B}, \tilde{A}$, and $\tilde{B}$.
Furthermore, it is possible to show that, for $q$ even, there are at least $q$ eigenstates of $\mathcal{H}$ with zero energy (Wen and Zee, 1989). The argument uses the topology of the torus in an essential way. It can be regarded as a generalization of the NielsenNinomiya theorem for the absence of Weyl fermions in lattice systems (Nielsen
and Ninomiya, 1981; Friedan, 1984). The magnetic Brillouin zone is locally isomorphic to the complex plane ( $w=k_{1}+i k_{2}$ ) and globally equivalent to a torus. Let us consider a point $w$ on the magnetic Brillouin zone and assume that the eigenstates of $\mathcal{H}$ at $w=k_{1}+i k_{2}$ are all different from zero. It is possible to choose a basis of states in which $\Gamma$ is diagonal. In this basis we can write

$$
\Gamma=\left(\begin{array}{cc}
I & 0  \tag{12.76}\\
0 & -I
\end{array}\right), \quad \mathcal{H}=\left(\begin{array}{cc}
0 & h^{+} \\
h & 0
\end{array}\right)
$$

where $h$ is a $q / 2 \times q / 2$ matrix and $h^{+}$is its adjoint. In other words, $\mathcal{H}$ has the same structure as the Dirac Hamiltonian in the chiral basis. If in the neighborhood of $w$ there are no zero energy eigenvalues of $\mathcal{H}$, the determinant

$$
\begin{equation*}
\operatorname{det} \mathcal{H}=-|\operatorname{det} h| \neq 0 \tag{12.77}
\end{equation*}
$$

is non-zero. Let us denote by $D$ the determinant of $h, D=\operatorname{det} h . D$ is locally an analytic function of $w$. Thus, it is possible to define the vector field $\mathcal{A}_{i}(i=1,2)$,

$$
\begin{equation*}
\mathcal{A}_{i}=D^{-1} \frac{\partial}{\partial k_{i}} D \tag{12.78}
\end{equation*}
$$

that, in fiber-bundle terminology, is a 1 -form, a connection. In any neighborhood of $w$ free of zero-energy eigenvalues, the 1 -form $\mathcal{A}_{i}$ is closed, i.e.

$$
\begin{equation*}
\epsilon_{i j} \partial_{i} \mathcal{A}_{j}=\epsilon_{i j} \partial_{i} \partial_{j} \ln D=0 \tag{12.79}
\end{equation*}
$$

but, in general, it is not exact. The circulation $v$ of $\overrightarrow{\mathcal{A}}$ on an arbitrary contour $\mathcal{C}$ of the magnetic Brillouin zone

$$
\begin{equation*}
v=\frac{1}{2 \pi} \oint_{\mathcal{C}} d \vec{k} \cdot \overrightarrow{\mathcal{A}} \neq 0 \tag{12.80}
\end{equation*}
$$

is in general different from zero.
If $v$ is not zero, the determinant $D(\vec{k})=\operatorname{det} h(\vec{k})$ must have a zero at some point $\vec{k}_{0}$ somewhere inside $\mathcal{C}$. We now follow Wen and Zee (1989), and consider a path $\mathcal{C}$ that is a rectangle with corners at $\left(k_{1}, k_{2}\right),\left(k_{1}+2 \pi / q, k_{2}\right)$, $\left(k_{1}+2 \pi / q, k_{2}+2 \pi / q\right)$, and $\left(k_{1}, k_{2}+2 \pi / q\right)$. From the symmetries of $\mathcal{H}$, it is possible to show that $D\left(k_{1}, k_{2}\right)$ satisfies

$$
\begin{align*}
D\left(k_{1}, k_{2}\right) & =-D^{*}\left(k_{1}+\frac{2 \pi}{q}, k_{2}\right)=-D\left(k_{1}+\frac{2 \pi}{q}, k_{2}+\frac{2 \pi}{q}\right) \\
& =D^{*}\left(k_{1}, k_{2}+\frac{2 \pi}{q}\right) \tag{12.81}
\end{align*}
$$

Equation (12.81) implies that the phase of $D$ must wind as the path $\mathcal{C}$ is traversed. In general, $D(\vec{k})$, being a complex number, will trace a closed path $\mathcal{D}$ on the complex plane as $\vec{k}$ traces the path $\mathcal{C}$. If $D$ does not have a zero inside $\mathcal{C}$, the winding
number $v$ will vanish and $\mathcal{C}$, and hence $\mathcal{D}$, can be smoothly shrunk to zero. If there is a zero, $D$ will have a singularity and $\mathcal{C}$ cannot be deformed to zero. The path $\mathcal{D}$ will now wind around the origin $\mathcal{D}=0$ a number of times before closing. The winding number $v$ of Eq. (12.80) is precisely this winding number. Since $D(\vec{k})$ is not a constant, we conclude that it must have zeros at certain isolated locations. However, the translation symmetries of Eq. (12.69) require that, if $\vec{k}_{0}$ is a zero of $\mathcal{H}$, then $\vec{k}_{0}+(2 \pi / q)\left(n_{1} \hat{e}_{1}+n_{2} \hat{e}_{2}\right)$ must also be zeros of $\mathcal{H}$. This lattice of zeros of $\mathcal{H}$ must be periodic. The only values of $\vec{k}_{0}$ consistent with these demands are $\vec{k}_{0}=(\pi / 2, \pi / 2)$ and its translations.

There are exactly $q$ distinct points in this lattice. Thus, for $q$ even, the Hamiltonian has exactly $q$ zeros. Note that the flux phase is a particular case of this problem. The doubling of spinon species that we found there is a particular case of the $q$-fold multiplicity discussed in this section.

### 12.3 The quantum Hall effect

In this section we will discuss the most qualitative features of a very fascinating problem: the quantum Hall effect. It is not within the scope of this book to give an exhaustive review on this subject. Reviews are widely available, in particular the excellent volume by R. Prange and S. Girvin (Prange and Girvin, 1990).

However, there are very close analogies and connections between the theories of the fractional and integer quantum Hall effects and the theories of chiral spin liquids. We will devote considerable attention to these analogies.

In 1980, K. von Klitzing, G. Dorda, and M. Pepper (von Klitzing et al., 1980) announced the discovery of very unusual transport properties of a 2 D electron gas in a high magnetic field. They were studying the Hall conductance of 2D inversion layers or MOSFETs. In these systems, the electrons of a semiconductor move on quantum states that are localized within atomic scales of the layer. They are almost free to move inside the layer. Von Klitzing and his collaborators noticed that, when they measured the Hall conductance $\sigma_{x y}$ of the layer at very low temperatures, the conductance had a stepwise dependence on the external magnetic field. At the same time, the longitudinal conductivity, $\sigma_{x x}$, appeared to be essentially zero when $\sigma_{x y}$ was nearly constant, the so-called plateaus. For values of the field at which $\sigma_{x y}$ varied, $\sigma_{x x}$ was non-zero.

What was very unusual was the values that $\sigma_{x y}$ attained at the plateaus. It appeared to be quantized at integer multiples of $e^{2} / h$. Furthermore, the quantization appeared to be sharper at lower temperatures and, oddly enough, for the more disordered samples. This phenomenon is known today as the integer quantum Hall effect.

In 1982, D. Tsui, H. Stormer, and A. Gossard (Tsui et al., 1982), performed a similar series of experiments but on highly pure GaAs-AlAs heterojunctions. Here too, the electrons are bound to a surface and are essentially free to move inside the surface. They found a fractional quantum Hall effect. In fact, their results were very similar to what von Klitzing et al. had seen, except that $\sigma_{x y}$ was not an integer multiple of $e^{2} / h$ but a fraction. In particular, they were able to observe the fractions $\frac{1}{3}, \frac{2}{5}$, and others. It is a simple matter to argue that, if a Landau level is completely filled, the Hall conductance has to be quantized. In the case of a translationally invariant system a simple argument can be made. Let us imagine that we have an external magnetic field $B$ perpendicular to the sample and that there is an external electric field $\vec{E}$ parallel to the sample. By coupling the system to a source and a sink of electrons, a current is established. In such a situation, there is a Lorentz force that pushes all the electrons sideways. Also, if some of the Landau levels are completely filled, leaving all others empty, there cannot be any component of the current parallel to $\vec{E}$ since it would require processes that are suppressed by an energy gap equal to $\hbar \omega_{\mathrm{c}}$. If the electric field is small, and the system is translationally invariant, there is a reference frame moving at a velocity $\vec{v}$ relative to the laboratory such that $\vec{v} / c \times \vec{B}=-\vec{E}$. In this frame the electric field is absent. A completely filled Landau level has $N=N_{\phi}$ electrons. If there are $n$ Landau levels that are filled, the total charge $Q$ is $Q=n N_{\phi}$. The current $\vec{J}$ is then equal to $\vec{J}=+Q e \vec{v}$. Putting it all together, we conclude that the current density, $\vec{j}=\vec{J} / L^{2}$, has components

$$
\begin{equation*}
j_{i}=\frac{Q e}{L^{2}} v_{i}=\left(\frac{Q e c}{B L^{2}}\right) \epsilon_{i j} E_{j} \tag{12.82}
\end{equation*}
$$

From Eq. (12.82) we conclude that the Hall conductance $\sigma_{x y}$, i.e. the coefficient of $E_{j}$, is equal to $Q e c / B L^{2}$. By using the fact that there are $n$ filled Landau levels and that the flux $B L^{2}$ is equal to $N_{\phi}$ times the flux quantum $h c / e$, we get

$$
\begin{equation*}
\sigma_{x y}=\frac{Q e c}{B L^{2}}=\frac{n N_{\phi} e c}{(h c / e) N_{\phi}}=n \frac{e^{2}}{h} \tag{12.83}
\end{equation*}
$$

Notice that $h$, and hence quantum mechanics, enters only through the flux quantum $h c / e$.

This is an appealing argument, but it is deceptive. First of all, it does not apply to systems that are not translationally invariant. However, a detailed calculation shows that Eq. (12.83) is valid even in that case. The second and most serious problem with this argument is that it cannot predict the existence of the fractional values of $\sigma_{x y}$. In fact, the absence of the parallel, or dissipative, component of the current was argued by recalling the fact that, if an integer number of levels is exactly filled, no scattering is possible. If some level is only partially filled, there
are states available for scattering and the argument seems to fall apart. Thirdly, this argument alone cannot explain the fact that the effect is actually observed. It cannot explain either the incredible accuracy to which the quantization is measured (one part per million for the integer steps). In the experimental setup, the charge density or the external magnetic field can be varied. In either case, the chemical potential must lie between Landau levels in order for one Landau level to be filled and the next one to be empty. As the density increases, the chemical potential (i.e. Fermi energy) jumps discontinuously from Landau level to Landau level. It remains fixed at the energy of a given level until the level is completely filled. This argument suggests that $\sigma_{x y}$ should be a monotonically increasing function of the electron density. So, why do we see steps?

The resolution of all of these paradoxes has required a significant amount of theoretical effort. The explanation of the observability of the steps in $\sigma_{x y}$ (i.e. the plateaus) involves the presence both of impurities and of states at the edge of the sample. The accuracy of the effect turned out to be connected to the topological properties of the quantum states. The fractional effect required the discovery of a new condensed state of matter, the Laughlin state.

The in-depth study of all these issues lies far from the main scope of this book. Besides, excellent reviews are widely available. I will hence not discuss the role of disorder beyond giving a very qualitative description. The role of topology and the Laughlin wave function will be discussed in the next sections.

### 12.4 The quantum Hall effect and disorder

Let us briefly discuss the role of disorder. In part for the sake of simplicity, but also because the problem is not fully understood, we will focus just on the noninteracting problem. It is widely suspected that disorder is as essential to the observability of the fractional effect as it is to the integer effect. So, we wish to understand why the integer quantum Hall effect is observed in the more disordered samples. We saw above that a simple model of free electrons in Landau levels does not explain the plateaus which are characteristics of the integer Hall effect. The reason behind the monotonic increase was the fact that the Fermi level jumps from one Landau level to the next as the level gets filled up. If there were extra states "in the gap" (i.e. "between Landau levels"), the Fermi energy would have to progress through those levels until they too became filled. However, these extra states should not contribute to the value of $\sigma_{x y}$ for the plateaus to remain sharp.

Disorder offers a natural way to generate states "between Landau levels." First of all, any degree of randomness, usually represented by a random potential $V(\vec{x})$, will lift the degeneracy of each Landau level, making them become narrow bands. From studies of electron states in random potentials one expects that at least some
states should become localized (Anderson, 1958). In the absence of a magnetic field, it is widely believed that all electronic states of 2D disordered systems are localized (Abrahams et al., 1979). The arguments involve both scaling ideas and a mapping of the problem onto a special type of non-linear sigma model (Wegner, 1979). If the electrons move in the presence of a weak magnetic field, the same arguments apply. It turns out that the presence of the field has only two effects: (1) the symmetry of the non-linear sigma model is unitary (which reflects the fact that, in the presence of the field, there is no time-reversal invariance) and (2) the presence of a topological term in the effective action (Levine et al., 1983; Pruisken, 1984). There is an excellent review by Pruisken on this subject in the book by Prange and Girvin (1990).

The non-linear sigma model represents the physics of the diffusive modes in the presence of the external field. It is a correct description if the elastic mean-free path $\lambda$ is short compared with the magnetic length $l_{0}, \lambda \ll l_{0}$. This condition can be achieved only in the weak-field limit. The diffusive modes are represented in the replica formalism, by $2 N \times 2 N$ hermitian matrices $Q_{i \alpha, j \beta}(x)$, where $i, j=$ $1, \ldots, N$ and $\alpha, \beta= \pm$. The Latin indices $i$ and $j$ represent the "replicas" and the Greek indices, $\alpha$ and $\beta$, represent the particle and hole channels. The non-linear sigma model has the effective Lagrangian (Levine et al., 1983)

$$
\begin{equation*}
\mathcal{L}=-\frac{\sigma_{x x}^{0}}{8} \operatorname{tr}\left[\partial_{\mu} Q \partial_{\mu} Q\right]+\frac{\sigma_{x y}^{0}}{8}(B) \operatorname{tr}\left[\epsilon_{\mu \nu} Q \partial_{\mu} Q \partial_{\nu} Q\right] \tag{12.84}
\end{equation*}
$$

valid in the replica limit, $N \rightarrow 0$.
The coefficients in this Lagrangian $\sigma_{x x}^{0}$ and $\sigma_{x y}^{0}(B)$ represent the values of the longitudinal $\left(\sigma_{x x}^{0}\right)$ and Hall ( $\sigma_{x y}^{0}$ ) conductance at the length scales of the elastic mean-free path (i.e. their Boltzmann values). This non-linear sigma model is invariant under global unitary transformations in the coset $\mathrm{U}(2 N) / \mathrm{U}(N) \times \mathrm{U}(N)$. Notice that the topological term in Eq. (12.84) has the same structure as the topological terms that we discussed for antiferromagnets in Chapter 7. At scales $l$ that are long compared with $\lambda$ but short compared with $l_{0}$, the effective values of $\sigma_{x x}(l)$ and $\sigma_{x y}(l)$ are strongly renormalized. The non-linear sigma model of Eq. (12.84) is asymptotically free, which means that $\sigma_{x x}(l) \rightarrow 0$ for $l \ll \lambda$. In this infrared limit $\sigma_{x y}(l)$ is quantized, $\sigma_{x y}(l) \rightarrow(n /(2 \pi))\left(e^{2} / \hbar\right)$. This quantization has the same topological origin as the quantization of spin and of the coefficients of the topological terms, which we discussed in Chapter 7.

Thus, this calculation shows that $\sigma_{x y}$ is indeed quantized and that $\sigma_{x x}$ is zero whenever the magnetic field $B$ is in a plateau of the Hall conductivity $\sigma_{x y}$. However, the replica limit obscures the physical mechanism by which all of this takes place. It almost seems like magic! Moreover, the actual mechanism by which the system manages even to support a Hall current is very obscure in this picture. But it does point to the fact that it is the physics of localization that makes the effect
observable in the first place and that the topological properties of the quantum states are responsible for the exact quantization of $\sigma_{x y}$.

If topology is to be the source both of the quantization and of the accuracy of the quantum Hall effect, it appears that the mechanism which supports the Hall current should not be linked to disorder in an essential way. Halperin proposed that the states which carry the Hall current reside at the edge of the system (Halperin, 1982). Roughly speaking, the electrons are kept inside the sample by a potential that rises towards the physical edge of the system. On some set of points close to the edge, the potential is equal to the Fermi energy. This set of points constitutes a closed curve. The edge states are the waves of the electron liquid spilling over this curve. The presence of disorder complicates the picture. The landscape of the potential can be quite rough. Semi-classically the ground state can be viewed as a set of equipotential curves. In the high-field limit, equipotential curves will generally be closed, and enclose regions that are quite small and are occupied by electrons. As the field is lowered, these regions will begin to merge and, at some critical value $B_{\mathrm{c}}$ of the field, a percolation phenomenon occurs (Trugman, 1983). At $B_{\mathrm{c}}$ there is at least one curve that percolates throughout the system. This curve is a "new edge," which is thus capable of carrying current. The electron states associated with these "edges" have a very special property: they are "chiral" (Wen, 1991b). What this means is that the electrons have to drift in the field, and hence the direction of their motion is determined by the sign of the magnetic field. Roughly, the electrons move at the drift velocity $c E / B$. Since the electrons in the edge states move in only one direction, the only possible effect of impurities on them is just a phase shift of the wave propagating forwards. There are no backward-scattering processes. Localization is due to a multiple-scattering process in which forwardand backward-scattering events interfere so much that the electron is unable to propagate. In the absence of backward scattering, there are no localized states. The edge states carry the full current.

### 12.5 Linear-response theory and correlation functions

In this section, we derive a set of formulas that will enable us to calculate the Hall conductance, as well as other response functions, in terms of the Green functions of the system. In the next section it will be shown that these formulas, when used to compute $\sigma_{x y}$ for a system with an energy gap, have a hidden topological structure.

Let us consider the system of fermions coupled to an external electromagnetic field. We will consider cases of the fermions moving in free space and on a lattice in the tight-binding limit. In both cases, the generating functional of the fermion Green functions is a functional integral $\mathcal{Z}\left[A_{\mu}\right]$, which is a functional of the external electromagnetic field $A_{\mu}$. Let us further assume that $A_{\mu}$ is a small fluctuating component of the external field. The average field $\left\langle A_{\mu}\right\rangle$ is absorbed into the definition
of the system. Under such circumstances, it makes sense to determine $\mathcal{Z}[A]$ in perturbation theory, i.e. as a series expansion in powers of $A_{\mu}$. The leading term in this expansion is known as linear-response theory (Fetter and Walecka, 1971). This series can be written in the exponentiated form

$$
\begin{equation*}
\mathcal{Z}\left[A_{\mu}\right]=\mathcal{Z}[0] \exp \left\{\frac{i}{2} \int d^{D} x \int d^{D} y A_{\mu}(x) \Pi_{\mu \nu}(x, y) A_{\nu}(y)+\cdots\right\} \tag{12.85}
\end{equation*}
$$

where $\Pi_{\mu \nu}(x, y)$ is the polarization tensor and $D=d+1$, with $d$ being the dimension of the space. For a tight-binding model the spatial integrals are replaced by sums.

The underlying fermion system is gauge-invariant. Thus, upon an arbitrary local gauge transformation $\phi(x)$,

$$
\begin{align*}
A_{\mu} & =A_{\mu}^{\prime}+\partial_{\mu} \phi(x)  \tag{12.86}\\
\psi(x) & =e^{i \frac{e}{\hbar c} \phi(x)} \psi^{\prime}(x)
\end{align*}
$$

the functional $\mathcal{Z}[A]$ is invariant. Thus, the linear-response term must also be gauge-invariant. This is possible only if the polarization tensor $\Pi_{\mu \nu}(x, y)$ is transverse, i.e.

$$
\begin{equation*}
\partial_{\mu}^{x} \Pi_{\mu \nu}(x, y)=0 \tag{12.87}
\end{equation*}
$$

To be more precise, we consider either a system without boundaries or one in which only "small" gauge transformations are allowed, i.e. those transformations which vanish at the boundaries, $\lim _{|x| \rightarrow \infty} \phi(x)=0$. If the actual boundaries are to be taken into account, such as in cases in which the system is physically coupled to external leads of batteries or measuring instruments, then the values of the gauge transformations at the boundaries become physical degrees of freedom, i.e. the voltage of a battery. Similarly, for a system without boundaries, the circulations of the vector potential $A_{\mu}$ around closed loops $\Gamma$ that wrap around the system are gauge-invariant operators. These gauge-invariant operators are physical degrees of freedom. An example are the loops $\Gamma$ which are topologically equivalent to the large circles of a torus. The line integrals $\oint_{\Gamma} d x_{\mu} A_{\mu}$ are the so-called holonomies of the gauge fields on the torus.

The transversality condition Eq. (12.87) then follows from a simple algebraic manipulation of the exponent in Eq. (12.85):

$$
\begin{align*}
I & =\frac{i}{2} \int d^{D} x \int d^{D} y A_{\mu}(x) \Pi_{\mu \nu}(x, y) A_{\nu}(y) \\
& =\frac{i}{2} \int d^{D} x \int d^{D} y\left[A_{\mu}^{\prime}(x)+\partial_{\mu} \phi(x)\right] \Pi_{\mu \nu}(x, y)\left[A_{\nu}^{\prime}(y)+\partial_{\nu} \phi(y)\right] \\
& =\frac{i}{2} \int d^{D} x \int d^{D} y A_{\mu}^{\prime}(x) \Pi_{\mu \nu}(x, y) A_{\nu}^{\prime}(y)+\delta I \tag{12.88}
\end{align*}
$$

where the change $\delta I$ is given by

$$
\begin{align*}
\delta I= & \frac{i}{2} \int d^{D} x \int d^{D} y\left\{\partial_{\mu} \phi(x) \Pi_{\mu \nu}(x, y) A_{\nu}^{\prime}(y)\right. \\
& \left.+A_{\mu}^{\prime}(x) \Pi_{\mu \nu}(x, y) \partial_{\nu} \phi(y)+\partial_{\mu} \phi(x) \Pi_{\mu \nu}(x, y) \partial_{\nu} \phi(y)\right\} \tag{12.89}
\end{align*}
$$

Then $\mathcal{Z}[A]$ is gauge-invariant if and only if $\delta I \equiv 0$. Upon integration by parts we get

$$
\begin{align*}
\delta I= & -\frac{i}{2} \int d^{D} x \int d^{D} y\left\{\phi(x) \partial_{\mu}^{x} \Pi_{\mu \nu}(x, y) A_{\nu}^{\prime}(y)\right. \\
& \left.+A_{\mu}^{\prime}(x) \partial_{v}^{y} \Pi_{\mu \nu}(x, y) \phi(y)-\phi(x) \partial_{\mu}^{x} \partial_{\nu}^{y} \Pi_{\mu \nu}(x, y) \phi(y)\right\} \\
& + \text { surface terms } \tag{12.90}
\end{align*}
$$

Since $\phi(x)$ is arbitrary, $\delta I$ vanishes identically if and only if $\Pi_{\mu \nu}(x, y)$ is transverse. The surface terms are zero since either $\phi$ vanishes at the surface or there are no boundaries.

It is possible to relate $\Pi_{\mu \nu}$ to a fermion-current-correlation function. The gaugeinvariant fermion current $J_{\mu}(x)$ is

$$
\begin{equation*}
J_{\mu}(x)=\frac{\delta S}{\delta A_{\mu}(x)} \tag{12.91}
\end{equation*}
$$

where $S$ is the total action of the system. The current $J_{\mu}$ is gauge-invariant because the action $S$ itself is invariant. For the problem of fermions in free space, $J_{\mu}$ is just the usual fermion current with the diamagnetic term included (the spin is omitted):

$$
\begin{align*}
J_{0} & =e \psi^{\dagger} \psi \\
J_{j} & =\frac{e \hbar}{2 i m c}\left[\psi^{\dagger}\left(\partial_{j} \psi\right)-\left(\partial_{j} \psi^{\dagger}\right) \psi\right]-\frac{e^{2}}{m c^{2}} A_{j} \psi^{\dagger} \psi \tag{12.92}
\end{align*}
$$

The spatial components of the current can be written in the more manifestly gaugeinvariant form

$$
\begin{equation*}
J_{j}=\frac{e \hbar}{2 m i c}\left[\psi^{\dagger} D_{j} \psi-\left(D_{j} \psi\right)^{\dagger} \psi\right] \tag{12.93}
\end{equation*}
$$

where $D_{j}$ is, once again, the covariant derivative

$$
\begin{equation*}
D_{j}=\partial_{j}-\frac{i e}{\hbar c} A_{j} \tag{12.94}
\end{equation*}
$$

and $e$ is the (negative) electron charge.
For a lattice system, $J_{j}$ has the form

$$
\begin{equation*}
J_{j}(\vec{x})=\frac{t}{2 i}\left[\psi^{\dagger}(x) \exp \left(i \frac{e}{\hbar c} \int_{\vec{x}}^{\vec{x}+\hat{e}_{j}} \vec{A}(\vec{z}) \cdot d \vec{z}\right) \psi\left(\vec{x}+\hat{e}_{j}\right)-\text { h.c. }\right] \tag{12.95}
\end{equation*}
$$

where $t$ is a hopping amplitude and $\hat{e}_{j}$ is the vector difference of the positions of two lattice sites along the direction $j$ on the lattice.

Since $J_{\mu}=\delta S / \delta A_{\mu}$, we can compute expectation values of products of currents by functional differentiation of $\mathcal{Z}[A]$. The average current $\left\langle J_{\mu}(x)\right\rangle$ is given by

$$
\begin{equation*}
\left\langle J_{\mu}(x)\right\rangle=\frac{-i}{\hbar} \frac{1}{\mathcal{Z}[A]} \frac{\delta \mathcal{Z}[A]}{\delta A_{\mu}(x)} \tag{12.96}
\end{equation*}
$$

The polarization tensor $\Pi_{\mu \nu}(x, y)$ can be computed from its definition. We get

$$
\begin{equation*}
\Pi_{\mu \nu}(x, y)=-i \hbar \frac{\delta^{2}}{\delta A_{\mu}(x) \delta A_{v}(y)} \ln \mathcal{Z}[A] \tag{12.97}
\end{equation*}
$$

A straightforward algebraic manipulation yields the expression

$$
\begin{align*}
\Pi_{\mu \nu}(x, y)= & -i \hbar \frac{\delta}{\delta A_{\mu}(x)}\left(\frac{1}{\mathcal{Z}[A]} \frac{\delta \mathcal{Z}[A]}{\delta A_{v}(y)}\right) \\
= & i \hbar\left(\frac{1}{\mathcal{Z}[A]} \frac{\delta \mathcal{Z}[A]}{\delta A_{\mu}(x)}\right)\left(\frac{1}{\mathcal{Z}[A]} \frac{\delta \mathcal{Z}[A]}{\delta A_{v}(y)}\right) \\
& -i \hbar \frac{1}{\mathcal{Z}} \frac{\delta^{2} \mathcal{Z}[A]}{\delta A_{\mu}(x) \delta A_{v}(y)} \tag{12.98}
\end{align*}
$$

Hence, we get

$$
\begin{equation*}
\Pi_{\mu \nu}(x, y)=\frac{i}{\hbar}\left\langle J_{\mu}(x) J_{v}(y)\right\rangle_{\mathrm{c}}+\left\langle\frac{\delta J_{\mu}(x)}{\delta A_{v}(y)}\right\rangle \tag{12.99}
\end{equation*}
$$

where $\left\langle J_{\mu}(x) J_{\nu}(y)\right\rangle_{\mathrm{c}}$ is the connected time-ordered current-current correlation function $D_{\mu \nu}(x, y)$ defined by

$$
\begin{equation*}
\frac{\hbar}{i} D_{\mu \nu}(x, y) \equiv\left\langle J_{\mu}(x) J_{v}(y)\right\rangle_{\mathrm{c}}=\left\langle J_{\mu}(x) J_{v}(y)\right\rangle-\left\langle J_{\mu}(x)\right\rangle\left\langle J_{v}(y)\right\rangle \tag{12.100}
\end{equation*}
$$

The last term in Eq. (12.99) is usually called the "tadpole" term and follows from the diamagnetic piece of the current.

Since $\Pi_{\mu \nu}$ has to be transverse in order for the system to be gauge-invariant, $D_{\mu \nu}$ must obey a similar conservation law. However, $D_{\mu \nu}$ is not quite transverse because of the presence of the tadpole term in Eq. (12.99). Indeed, from the transversality of $\Pi_{\mu \nu}$ we get the equation

$$
\begin{equation*}
0=\partial_{\mu}^{x} \Pi_{\mu \nu}(x, y)=\partial_{\mu}^{x} D_{\mu \nu}(x, y)+\partial_{\mu}^{x}\left\langle\frac{\delta J_{\mu}(x)}{\delta A_{v}(y)}\right\rangle \tag{12.101}
\end{equation*}
$$

Thus the divergence of $D_{\mu \nu}$ is

$$
\begin{equation*}
\partial_{\mu}^{x} D_{\mu \nu}(x, y)=-\partial_{\mu}^{x}\left\langle\frac{\delta J_{\mu}(x)}{\delta A_{v}(y)}\right\rangle \tag{12.102}
\end{equation*}
$$

Since $D_{\mu \nu}$ is time-ordered and $J_{\nu}$ is conserved ( $\partial_{\mu} J_{\mu}=0$ ), we can write the 1.h.s. of Eq. (12.98) as

$$
\begin{align*}
\partial_{\mu}^{x} D_{\mu \nu}(x, y) & =\frac{i}{\hbar} \partial_{\mu}^{x}\left\langle T J_{\mu}(x) J_{v}(y)\right\rangle \\
& =\frac{i}{\hbar} \partial_{\mu}^{x}\left(\theta\left(x_{0}-y_{0}\right)\left\langle J_{\mu}(x) J_{v}(y)\right\rangle+\theta\left(y_{0}-x_{0}\right)\left\langle J_{v}(y) J_{\mu}(x)\right\rangle\right) \\
& =\frac{i}{\hbar} \delta\left(x_{0}-y_{0}\right)\left\langle\left[J_{0}(x), J_{v}(y)\right]\right\rangle+\frac{i}{\hbar}\left\langle T \partial_{\mu}^{x} J_{\mu}(x) J_{v}(y)\right\rangle \\
& =\frac{i}{\hbar} \delta\left(x_{0}-y_{0}\right)\left\langle\left[J_{0}(x), J_{v}(y)\right]\right\rangle \tag{12.103}
\end{align*}
$$

The r.h.s. of Eq. (12.102) is equal to

$$
\begin{align*}
\partial_{\mu}^{x}\left\langle\frac{\delta J_{\mu}(x)}{\delta A_{0}(y)}\right\rangle & =0 \\
\partial_{\mu}^{x}\left\langle\frac{\delta J_{\mu}(x)}{\delta A_{l}(y)}\right\rangle & =\partial_{k}^{x}\left\langle\frac{\delta J_{k}(x)}{\delta A_{l}(y)}\right\rangle=-\frac{e}{m c^{2}} \partial_{k}^{x}\left[\delta(x-y)\left\langle J_{0}(x)\right\rangle\right] \tag{12.104}
\end{align*}
$$

On collecting terms, we get the following identities for the ground-state equaltime expectation value of the commutators:

$$
\begin{align*}
& \delta\left(x_{0}-y_{0}\right)\left\langle\left[J_{0}(x), J_{k}(y)\right]\right\rangle=\frac{i e}{\hbar m c^{2}} \partial_{k}^{x}\left[\delta(x-y)\left\langle J_{0}(x)\right\rangle\right]  \tag{12.105}\\
& \delta\left(x_{0}-y_{0}\right)\left\langle\left[J_{0}(x), J_{0}(y)\right]\right\rangle=0
\end{align*}
$$

which are the Ward identities for this system. These identities are the key to the derivation of the $f$-sum rule (Kadanoff and Martin, 1961). These identities show that, even though $D_{\mu \nu}(x, y)$ is a correlation function of conserved currents, $D_{\mu \nu}$ itself it is not conserved:

$$
\begin{align*}
& \partial_{\mu}^{x} D_{\mu 0}(x, y)=0 \\
& \partial_{\mu}^{x} D_{\mu k}(x, y)=\frac{i e}{\hbar m c^{2}} \partial_{k}^{x}\left[\delta(x-y)\left\langle J_{0}(x)\right\rangle\right] \tag{12.106}
\end{align*}
$$

On the other hand, $\Pi_{\mu \nu}$ is strictly conserved, since $\partial_{\mu}^{x} \Pi_{\mu \nu}=0$. The nonvanishing r.h.s. of Eq. (12.106) is an example of what in quantum field theory is commonly called a Schwinger term. We have already encountered a Schwinger term in Section 5.6.1. There, the Schwinger term resulted from the lack of chiral symmetry in a gauge-invariant theory of 1D relativistic fermions. In a sense, it is due to an effect produced by the "bottom" of the Fermi sea. In the problem discussed in the present section it follows from the definition of the current.

The results of this section are valid in the most general condensed matter systems. They hold regardless of the statistics of the charge carriers. In the derivation that is usually presented in textbooks (Pines and Nozières, 1966; Mahan, 1990), the
proof is done within the framework of Fermi-liquid theory. The argument presented here is more general and follows in spirit the discussion by Kadanoff and Martin (1961). These conservation laws and sum rules are, in fact, a direct consequence of local gauge invariance. In other words, they follow from local charge conservation. It is important to stress that they also hold in phases with "spontaneously broken gauge invariance," such as superconducting states. The quotation marks are meant to stress that local gauge invariance cannot be spontaneously broken, as dictated by Elitzur's theorem (see Chapter 9). In superconducting states the global phase invariance (a subgroup of local gauge transformations) is spontaneously broken in the absence of an electromagnetic gauge field. The sum rules are a statement about the system as a whole, and they hold provided that both the normal and the superfluid contributions are taken into account.

Let us now find an explicit expression for $\Pi_{\mu \nu}(x, y)$ for a simple system. For the sake of simplicity I will discuss only the non-interacting fermion case. Interactions can be introduced in the standard fashion. Let us discuss the problem of non-interacting electrons moving in free space coupled to an external electromagnetic field $A_{\mu}$. Once again, $A_{\mu}$ represents a small fluctuating component with vanishing average. All averages $\left\langle A_{\mu}\right\rangle$ are absorbed in the definition of the otherwise non-interacting fermions. The action for this system is (ignoring spin)

$$
\begin{equation*}
S\left[\psi^{*}, \psi, A\right]=\int d^{d} x \psi^{*}\left(i D_{0}+\mu-h\left[\left\langle A_{\mu}\right\rangle+A_{\mu}\right]\right) \psi \tag{12.107}
\end{equation*}
$$

where $h\left[A_{\mu}\right]$ is a one-particle Hamiltonian that describes the dynamics of particles coupled to a gauge field. For free fermions in the continuum (no lattice) it is simply given by

$$
\begin{equation*}
h\left[A_{\mu}\right]=-\frac{\hbar^{2} \vec{D}_{j}^{2}}{2 m} \tag{12.108}
\end{equation*}
$$

and $D_{0}$ and $D_{j}$ are covariant derivatives. The generating functional of the currentcorrelation functions $\mathcal{Z}[A]$ is given by

$$
\begin{equation*}
\mathcal{Z}[A]=\int \mathcal{D} \psi^{*} \mathcal{D} \psi \exp \left(\frac{i}{\hbar} S\left[\psi^{*}, \psi, A\right]\right) \tag{12.109}
\end{equation*}
$$

Since the $\psi$ fields represent fermions, we get (after setting $\hbar=1$ )

$$
\begin{equation*}
\mathcal{Z}[A]=\operatorname{det}\left(i D_{0}+\mu-h[A]\right) \tag{12.110}
\end{equation*}
$$

Thus, the effective action for the gauge field $A_{\mu}$ due to the motion of the charged particles is

$$
\begin{equation*}
S_{\mathrm{eff}}[A]=-i \operatorname{tr} \ln \left(i D_{0}+\mu-h[A]\right) \tag{12.111}
\end{equation*}
$$

We have encountered expressions of this sort several times in the previous sections of this book. We will deal with it in exactly the same way here.

If $A_{\mu}$ is small, $S_{\text {eff }}\left[A_{\mu}\right]$ can be expanded in powers of $A_{\mu}$; and, if $A_{\mu}$ has zero average, the first non-zero term is quadratic in $A_{\mu}$. A straightforward calculation yields the following expressions for $\Pi_{\mu \nu}(x, y)$ in terms of the fermion propagator (the one-particle fermion Green function) in a background gauge field $G(x, y)$. $G(x, y)$ satisfies the equation of motion

$$
\begin{equation*}
\left(i D_{0}+\mu-h[\langle A\rangle]\right)_{x} G(x, y)=\delta(x-y) \tag{12.112}
\end{equation*}
$$

that is,

$$
\begin{equation*}
G(x, y)=\langle x| \frac{1}{i D_{0}+\mu-h[\langle A\rangle]}|y\rangle \tag{12.113}
\end{equation*}
$$

The components of the polarization tensor $\Pi_{\mu \nu}(x, y)$ can now be written as (again with $\hbar=1$ )

$$
\begin{align*}
\Pi_{00}(x, y)= & i G(x, y) G(y, x) \\
\Pi_{0 j}(x, y)= & \frac{1}{2 m}\left\{G(x, y) D_{j}^{y} G(y, x)-G(y, x) D_{j}^{y \dagger} G(x, y)\right\} \\
\Pi_{j 0}(x, y)= & \frac{1}{2 m}\left\{-G(x, y) D_{j}^{x \dagger} G(y, x)+G(y, x) D_{j}^{x} G(x, y)\right\} \\
\Pi_{j k}(x, y)= & \frac{i}{m} \delta(x-y) \delta_{j k} G(x, y)-\frac{i}{4 m^{2}}\left(D_{j}^{x} G(x, y)\right)\left(D_{k}^{y} G(y, x)\right)  \tag{12.114}\\
& -\frac{i}{4 m^{2}}\left(D_{j}^{x \dagger} G(y, x)\right)\left(D_{k}^{y \dagger} G(x, y)\right) \\
& +\frac{i}{4 m^{2}} G(y, x)\left(D_{j}^{x} D_{k}^{y \dagger} G(x, y)\right) \\
& +\frac{i}{4 m^{2}}\left(D_{j}^{x \dagger} D_{k}^{y} G(y, x)\right) G(x, y)
\end{align*}
$$

These formulas, in addition to satisfying the requirements of gauge invariance, are also translation-invariant if the external fields are uniform.

In the next section we will make use of these formulas, particularly that for $\Pi_{0 j}$, to compute the Hall conductance. Notice that all the expressions in this section hold for time-ordered correlation functions. In order to compute the conductivities it is necessary to go to retarded functions (Fetter and Walecka, 1971). Fortunately, the static limit of the Hall conductance can also be calculated directly from the time-ordered functions.

The tight-binding case (on a cubic or square lattice) can be treated using a similar line of argument. In fact, the polarization tensor $\Pi_{\mu \nu}$ for the lattice case can be obtained in the following manner. First the spatial integrals are replaced by sums
over lattice sites $\{\vec{x}\}$. The covariant derivatives are replaced by covariant differences according to the rule

$$
\begin{equation*}
D_{j}^{x} G(x, y) \rightarrow \Delta_{j}^{x} G(x, y) \equiv G\left(x+e_{j}, y\right) \exp \left(i \int_{x}^{x+e_{j}} \vec{A} \cdot \vec{d} l\right)-G(x, y) \tag{12.115}
\end{equation*}
$$

and the hopping amplitude $t$ and the mass $m$ are related by $1 / t=m a_{0}^{2}$, where $a_{0}$ is the lattice constant. Once these identifications have been made, the continuum result becomes valid for the lattice case.

We will be interested primarily in the low-frequency, long-wave-length limit of the effective action. On the basis of gauge and translation invariance we can write the effective action $S_{\text {eff }}[A]$ in terms of an expansion in powers of the gradients of $A_{\mu}$. The leading-order terms are (in two space dimensions)

$$
\begin{equation*}
S_{\mathrm{eff}}\left[A_{\mu}\right]=\int d^{2} x d t\left(\frac{\epsilon}{2} \vec{E}^{2}-\frac{\chi}{2} B^{2}+\gamma(\vec{\nabla} \cdot \vec{E}) B+\frac{\sigma_{x y}}{4} \epsilon_{\mu \nu \lambda} A_{\mu} F_{\nu \lambda}+\cdots\right) \tag{12.116}
\end{equation*}
$$

where $\vec{E}$ and $B$ are the fluctuating pieces of the external electromagnetic field. The coefficients $\epsilon, \chi, \gamma$, and $\sigma_{x y}$ can be determined from $\Pi_{\mu \nu}$. In particular, $\epsilon$ and $\chi$ are the static dielectric constant and diamagnetic susceptibility of the system, and $\sigma_{x y}$ is the static Hall conductance. Notice that the Hall term is precisely the ChernSimons term that we encountered in Section 10.4. Indeed, the last term gives a contribution to the average current $\left\langle J_{k}\right\rangle_{x y}$,

$$
\begin{equation*}
\left\langle J_{k}\right\rangle_{x y}=\sigma_{x y} \epsilon_{k l} E_{l} \tag{12.117}
\end{equation*}
$$

which has precisely the correct form for the Hall current. The static Hall conductance $\sigma_{x y}$ can be obtained from the Fourier transform $\Pi_{\mu \nu}(Q)$ of the polarization tensor,

$$
\begin{equation*}
\sigma_{x y}=\lim _{Q \rightarrow 0} \frac{i}{} \frac{\epsilon^{\mu \nu \lambda} Q_{\lambda}}{Q^{2}} \Pi_{\mu \nu}(Q)=\lim _{Q_{0} \rightarrow 0} \frac{i}{Q_{0}} \Pi_{x y}\left(Q_{0}, \vec{Q}=0\right) \tag{12.118}
\end{equation*}
$$

where $Q=\left(Q_{0}, \vec{Q}\right)$. Thus, the Hall conductivity is determined from the $\vec{Q}=0$ limit of the $x y$ component of the current-current correlation function.

### 12.6 The Hall conductance and topological invariance

The most remarkable feature of the quantum Hall effect is the quantization of the Hall conductance, i.e. the very existence of the effect itself! The arguments of the previous section show that $\sigma_{x y}$ is determined from $\Pi_{\mu \nu}$. However, the coefficients of the gradient expansion of the effective action $S_{\text {eff }}[A]$ are usually renormalized
away from the values predicted by a theory of weakly interacting fermions. In effect, the $\Pi_{\mu \nu}$ of the last section is just the leading-order (RPA) approximation to the full $\Pi_{\mu \nu}$. Furthermore, the higher-order terms of the gradient expansion are also expected to give contributions at lower orders. This is so since the higherorder terms are important for wave vectors $|\vec{Q}|$ larger than the inverse cyclotron length and frequencies $Q_{0}$ larger than the inverse Landau gap. The effective lowenergy (hydrodynamic) theory is determined by integrating out (or summing over) the high-momentum and high-frequency modes. All these processes will contribute with effective (usually finite) renormalization of the parameters $\epsilon, \chi, \sigma_{x y}$, and $\gamma$. On these grounds, it is not obvious why $\sigma_{x y}$ should be given exactly by some integer (or fractional) multiple of $e^{2} / \hbar$.

In the general case (i.e. arbitrary density and arbitrary external field) $\sigma_{x y}$ does get renormalized. However, there is a special, but very important, case in which $\sigma_{x y}$ does not get renormalized. This happens whenever the ground state and the lower-energy excitations of the system are separated by a non-zero energy gap.

We will show now, following the arguments due to Thouless, Kohmoto, Nightingale, and den Nijs (Thouless et al., 1982), that in this case $\sigma_{x y}$ is not renormalized by fluctuations. The key to the argument is the observation that $\sigma_{x y}$ is determined by a topological invariant. We will follow the arguments first presented by M. Kohmoto (Kohmoto, 1985) and by Q. Niu, D. J. Thouless, and Y. S. Wu (Niu et al., 1985). In this section I will discuss the topological invariance in terms of the more general problem of boundary conditions in a many-body system with an energy gap.

### 12.6.1 The Kubo formula

Let us consider a system that is in its ground state $\left|\Psi_{0}\right\rangle$ and for which there is a gap to all excitations. Let us assume that, in addition to a uniform magnetic field $B$, the system is allowed to interact with a small, slowly varying external electromagnetic field. In this limit, perturbation theory reduces to the adiabatic approximation or Born-Oppenheimer approximation. To first order in the time derivative, the perturbed eigenstates are

$$
\begin{equation*}
\left|\Psi_{\alpha}(t)\right\rangle=\exp \left(-\frac{i}{\hbar} \int_{0}^{t} d t^{\prime} \epsilon_{\alpha}\left(t^{\prime}\right)\right)\left[|\alpha(t)\rangle+i \hbar \sum_{\beta \neq \alpha} \frac{|\beta(t)\rangle\langle\beta(t)| \partial_{t}|\alpha(t)\rangle}{\varepsilon_{\beta}(t)-\varepsilon_{\alpha}(t)}\right] \tag{12.119}
\end{equation*}
$$

where $|\alpha(t)\rangle$ is an instantaneous eigenstate of the time-dependent Schrödinger equation

$$
\begin{equation*}
H(t)|\alpha(t)\rangle=\varepsilon_{\alpha}(t)|\alpha(t)\rangle \tag{12.120}
\end{equation*}
$$

which is a parametric function of time $t$. If we choose the gauge $A_{0}=0$, time enters into the Hamiltonian $\hat{H}$ only through the space components of the vector potential, which have now the extra term $\delta \vec{A}$,

$$
\begin{equation*}
\delta \vec{A}=\vec{E}(t) t \tag{12.121}
\end{equation*}
$$

where $\vec{E}$ is a very weak, slowly varying electric field. The expectation value of an arbitrary operator $\hat{M}$ in this state is

$$
\begin{equation*}
\left\langle\Psi_{\alpha}(t)\right| \hat{M}\left|\Psi_{\alpha}(t)\right\rangle=i \hbar \sum_{\beta \neq \alpha} \frac{\langle\alpha| \hat{M}|\beta\rangle\langle\beta| \partial / \partial t|\alpha\rangle+\langle\alpha| \partial / \partial t|\beta\rangle\langle\beta| \hat{M}|\alpha\rangle}{\varepsilon_{\beta}(t)-\varepsilon_{\alpha}(t)} \tag{12.122}
\end{equation*}
$$

Let us compute the expectation value of the current operator $\hat{J}_{k}(x)$. We recall that the states $\{|\alpha\rangle\}$ obey the time-dependent Schrödinger equation. The expectation value $\langle\alpha| \partial_{t}|\beta\rangle$ is given by

$$
\begin{equation*}
\langle\alpha| \partial_{t}|\beta\rangle=\frac{\langle\alpha| \partial_{t} \hat{H}|\beta\rangle}{\varepsilon_{\beta}(t)-\varepsilon_{\alpha}(t)} \tag{12.123}
\end{equation*}
$$

The Hamiltonian $\hat{H}$ is a slowly varying function of time. But time only enters into $\hat{H}$ through its dependence on the vector potential $\hat{A}$. From this observation, and from the definition of the current as the functional derivative of the Hamiltonian $\hat{H}$, it follows that the Hall conductance $\sigma_{x y}$ can be written in the form

$$
\begin{equation*}
\left(\sigma_{x y}\right)_{\alpha}=-i \hbar L_{1} L_{2} \sum_{\beta \neq \alpha} \frac{\langle\alpha| \hat{J}_{1}|\beta\rangle\langle\beta| \hat{J}_{2}|\alpha\rangle-\langle\alpha| \hat{J}_{2}|\beta\rangle\langle\beta| \hat{J}_{1}|\alpha\rangle}{\left(\varepsilon_{\beta}(t)-\varepsilon_{\alpha}(t)\right)^{2}} \tag{12.124}
\end{equation*}
$$

This expression is known as the Kubo formula for the Hall conductance $\sigma_{x y}$. Analogous formulas can be derived for other components of the conductivity tensor as well as for other transport properties. It is important to stress that the states $\{|\alpha\rangle\}$ are the exact eigenstates of the full many-body system described by $\hat{H}$ and that $\left\{\varepsilon_{\alpha}(t)\right\}$ are the exact energy levels. They should not be confused with the one-particle states and levels of the non-interacting system, which are quite different.

### 12.6.2 Generalized toroidal boundary conditions

There is an alternative approach that yields a more suggestive and useful expression for $\sigma_{x y}$. Let us use the Schrödinger equation to write an equivalent expression for the Hall conductance. Let us imagine that the system under consideration has $N$ particles inside a rectangle of sides $L_{1}$ and $L_{2}$. Since the external (weak) electric field is taken to be uniform in space, we can write the associated electrostatic potential $U(\vec{x})$ in the form

$$
\begin{equation*}
U(\vec{x})=\vec{E} \cdot \vec{x} \tag{12.125}
\end{equation*}
$$

and $\vec{E}=\vec{\nabla} U$. Thus, the extra term in the vector potential $\delta \vec{A}$ is simply

$$
\begin{equation*}
\delta \vec{A}=\vec{E} t=\vec{\nabla}[U(\vec{x}) t] \tag{12.126}
\end{equation*}
$$

Since $\delta \vec{A}$ is a pure gradient, it can be eliminated by a suitable gauge transformation of the fermion operator of the form

$$
\begin{equation*}
\Psi(\vec{x}) \rightarrow \exp \left(i \frac{e}{\hbar c} U(\vec{x}) t\right) \Psi(\vec{x}) \tag{12.127}
\end{equation*}
$$

Notice, however, that such local gauge transformations cannot change the value of the circulation of the vector potential $\delta \vec{A}$ on closed non-contractible loops. More specifically, the line integrals $I_{j}$,

$$
\begin{equation*}
I_{j}=\oint_{\Gamma_{j}} \delta \vec{A} \cdot d \vec{l}=t \oint_{\Gamma_{j}} \vec{E} \cdot d \vec{l} \equiv t E_{j} L_{j} \tag{12.128}
\end{equation*}
$$

on paths $\Gamma_{j}$ which wrap around the system along the $x_{1}$ and $x_{2}$ directions, respectively, are gauge-invariant if the fermions move on the torus. Thus, although the vector potential $\delta \vec{A}$ disappears from the problem, the holonomies do not. In fact, they enter into the boundary conditions. Line integrals of a gauge field on non-contractible loops in space (or space-time) are called the holonomies of the gauge field.

The problem of assigning boundary conditions to quantum-mechanical systems on a closed manifold is a very subtle one. For instance, if the fermions move on a torus and no magnetic field is present, it is perfectly consistent to use periodic or twisted boundary conditions, which, for an $N$-particle system, are

$$
\begin{equation*}
\Psi\left(\vec{x}_{1}, \ldots, \vec{x}_{N}\right)=e^{-i \vec{\theta} \cdot \vec{L}} \Psi\left(\vec{x}_{1}+\vec{L}, \ldots, \vec{x}_{N}+\vec{L}\right) \tag{12.129}
\end{equation*}
$$

where $\vec{\theta}$ is an arbitrary two-component vector and $\vec{L}$ is a displacement along $x_{1}$ by a distance $L_{1}$ or along $x_{2}$ by a distance $L_{2}$. These boundary conditions are perfectly consistent since, in the absence of a magnetic field, the total momentum $\vec{P}$ is a constant of motion. The momentum of the only eigenstate compatible with the boundary conditions is $\vec{\theta} /|\vec{L}|$. But, if a magnetic field is present, the situation is somewhat different. In Section 12.1 we introduced the magnetic translation operators. These operators commute with the one-particle Hamiltonian. In fact, they also commute with the Hamiltonian of the full interacting system. In Section 12.1, we also found that the only consistent boundary conditions for the wave functions (generalized now to the $N$-particle case) for charged particles moving on a torus in the presence of a non-zero magnetic field $B$ are

$$
\begin{aligned}
& A_{1}\left(x_{1}, x_{2}+L_{2}\right)=A_{1}\left(x_{1}, x_{2}\right)+\partial_{1} \beta_{2}\left(x_{1}, x_{2}\right) \\
& A_{2}\left(x_{1}+L_{1}, x_{2}\right)=A_{2}\left(x_{1}, x_{2}\right)+\partial_{2} \beta_{1}\left(x_{1}, x_{2}\right)
\end{aligned}
$$

$$
\begin{align*}
\Psi\left(\left\{x_{1}^{(j)}+L_{1}\right\} ;\left\{x_{2}^{(j)}\right\}\right)= & \exp \left(\frac{-i e}{\hbar c} \sum_{j=1}^{N} \beta_{1}\left(x_{1}^{(j)} ; x_{2}^{(j)}\right)+i \theta_{1}\right) \\
& \times \Psi\left(\left\{x_{1}^{(j)}\right\} ;\left\{x_{2}^{(j)}\right\}\right)  \tag{12.130}\\
\Psi\left(\left\{x_{1}^{(j)}\right\} ;\left\{x_{2}^{(j)}+L_{2}\right\}\right)= & \exp \left(\frac{-i e}{\hbar c} \sum_{j=1}^{N} \beta_{2}\left(x_{1}^{(j)} ; x_{2}^{(j)}\right)+i \theta_{2}\right) \\
& \times \Psi\left(\left\{x_{1}^{(j)}\right\} ;\left\{x_{2}^{(j)}\right\}\right)
\end{align*}
$$

where we have included the effect of the electric fields through the angles $\theta_{1}$ and $\theta_{2}$. The boundary phases $\theta_{1}$ and $\theta_{2}$ are related to the electric field by

$$
\begin{equation*}
\theta_{j}=\frac{e t}{\hbar c} E_{j} L_{j} \equiv \frac{e}{\hbar c} I_{j} \tag{12.131}
\end{equation*}
$$

Thus, in addition to the phase twist $\vec{\theta}$, the requirement that the states be eigenstates of the magnetic translation operator leads naturally to the generalized boundary conditions. We will see below that the additional phase factors arise from the impossibility of defining the phase of the wave function globally and smoothly on the torus. The wave functions for particles on a torus in the presence of a magnetic field form a fiber bundle. The conditions, or rather the requirement that the states be eigenstates of the magnetic translations, define the fiber bundle. We will see below that a similar difficulty arises when one tries to define the dependence of the phase of the wave function on the twist angles $\vec{\theta}$.

### 12.6.3 The Kubo formula for $\sigma_{x y}$ and the first Chern number

From now on, we will assume that the vector $\vec{\theta}$ represents two constant angles. In any case, all of the time dependence of the states enters through $\vec{\theta}$. All time derivatives become derivatives relative to the phase $\theta_{j}$. The Kubo formulas can now be written in the form $\left(\partial_{j} \equiv \partial_{\theta_{j}}\right)$

$$
\begin{equation*}
\left(\sigma_{x y}\right)_{\alpha}=\frac{i e^{2}}{\hbar}\left[\partial_{1}\langle\alpha| \partial_{2}|\alpha\rangle-\partial_{2}\langle\alpha| \partial_{1}|\alpha\rangle\right] \tag{12.132}
\end{equation*}
$$

In this form, this formula was first derived by Niu, Thouless, and Wu (Niu et al., 1985), who also considered the average $\left\langle\left(\sigma_{x y}\right)\right\rangle$ over the torus of boundary conditions

$$
\begin{align*}
\left\langle\left(\sigma_{x y}\right)_{\alpha}\right\rangle & =\int_{0}^{2 \pi} \frac{d \theta_{1}}{2 \pi} \int_{0}^{2 \pi} \frac{d \theta_{2}}{2 \pi}\left(\sigma_{x y}\right)_{\alpha} \\
& =\frac{e^{2}}{i \hbar} \int_{0}^{2 \pi} \int_{0}^{2 \pi} \frac{d \theta_{1}}{2 \pi} \frac{d \theta_{2}}{2 \pi}\left[\partial_{2}\langle\alpha| \partial_{1}|\alpha\rangle-\partial_{1}\langle\alpha| \partial_{2}|\alpha\rangle\right] \tag{12.133}
\end{align*}
$$

What matters to our discussion is the fact that $\left\langle\left(\sigma_{x y}\right)_{\alpha}\right\rangle$ is proportional to a quantity known as the first Chern number, $C_{1}$, which is a topological invariant. A similar expression also appears in the tight-binding case, which will be discussed below.

Before we consider what the average conductance is, we must face the fact that in any physically relevant situation the boundary conditions are fixed. Thus it might appear that, while $\left\langle\left(\sigma_{x y}\right)_{\alpha}\right\rangle$ may be an interesting quantity to compute, it is not directly relevant. This is true. However, we are considering a special situation in which there is a finite energy gap between the ground state and the first excited state. It is easy to argue that, if the gap is finite, then the difference of the measured value of $\left(\sigma_{x y}\right)_{\alpha}^{\theta}$, with fixed boundary conditions, and $\left\langle\left(\sigma_{x y}\right)_{\alpha}\right\rangle$ vanishes in the thermodynamic limit, at least like $1 / L$.

Let us consider the differential change

$$
\begin{equation*}
\frac{\partial\left(\sigma_{x y}\right)_{\alpha}^{\theta}}{\partial \theta_{1}} \tag{12.134}
\end{equation*}
$$

The dependence of the conductance on the phase angles $\theta_{1}$ and $\theta_{2}$ enters through the Hamiltonian $\hat{H}$. But $\hat{H}$ is a function of $\theta_{1} / L_{1}$ and $\theta_{2} / L_{2}$ only. Thus, all changes must be of the form $(j=1,2)$

$$
\begin{equation*}
\frac{1}{L_{j}} \frac{\partial\left(\sigma_{x y}\right)_{\alpha}}{\partial\left(\theta_{j} / L_{j}\right)} \tag{12.135}
\end{equation*}
$$

Since there is a non-vanishing gap, all small changes in the parameters of the Hamiltonian $\hat{H}$ must lead to changes of order unity in all local quantities. This includes changes in the energies and wave functions of local excitations. Thus, the derivatives $\partial\left(\sigma_{x y}\right)_{\alpha} / \partial\left(\theta_{j} / L_{j}\right)$ must have finite limits for thermodynamically large systems. Hence, $\partial\left(\sigma_{x y}\right)_{\alpha} / \partial \theta_{j} \propto$ constant $/ L_{1}$ for asymptotically large systems. This justifies the use of the conductance averaged over all boundary conditions (Niu et al., 1985).

### 12.6.4 Fiber bundles and the quantum Hall conductance

Let us now turn to the issue of the topological invariance of $\left\langle\left(\sigma_{x y}\right)_{\alpha}\right\rangle$. The argument goes as follows. The boundary-condition angles $\theta_{1}$ and $\theta_{2}$, being phases, are defined modulo $2 \pi$. Each choice of a boundary condition amounts to a choice of a point $\vec{\theta}$ on the torus $S_{1} \times S_{1}$ of boundary conditions. For each point $\vec{\theta}$ we have a unique eigenstate $\Psi_{\alpha}(\{\vec{x}\} ; \vec{\theta})$ of the full many-body Hamiltonian $\hat{H}$. In mathematical jargon, we have a fiber bundle. The wave function has an amplitude and a phase that are smooth functions of $\vec{\theta}$. Now, the total phase of the wave function is not a physical observable. But changes of the phase are. In particular, let us imagine that, at some initial time $t_{0}$, we have defined an initial boundary condition $\vec{\theta}\left(t_{0}\right)$
with a phase for the state $\arg \left[\Psi\left(\theta\left(t_{0}\right)\right)\right]$. The external electromagnetic field is now allowed to couple to the system in such a way that the boundary conditions change as a function $\vec{\theta}(t)$ and return to the initial value $\vec{\theta}\left(t_{0}\right)$ after some very long time $T$. During this process the vector $\vec{\theta}(t)$ traces a closed curve $\Gamma$ on the torus $S_{1} \times S_{1}$. At the same time, the phase of the wave function changes by an amount $\delta_{\Gamma}$,

$$
\begin{equation*}
\delta_{\Gamma}=\Delta \arg [\Psi]=\Delta \operatorname{Im} \ln [\Psi]=\arg \left[\Psi\left(\theta\left(t_{0}+T\right)\right)\right]-\arg \left[\Psi\left(\theta\left(t_{0}\right)\right)\right] \tag{12.136}
\end{equation*}
$$

If $\Psi$ is an analytic non-vanishing function of $\vec{\theta}$, the phase change, $\delta_{\Gamma}$ must be zero. This is so because, in such a case the contour can be deformed to zero. However, the only analytic function on a torus is a constant. Thus, a non-vanishing adiabatic phase change $\delta_{\Gamma}$ requires that the function $\ln \Psi$ be non-analytic on the torus of boundary conditions. In this case, closed contours that enclose singularities of $\ln [\Psi]$ are non-contractible and $\delta_{\Gamma}$ is non-zero for such contours. Non-zero adiabatic changes of the phases of wave functions of quantum-mechanical systems are known as Berry phases (Simon, 1983; Berry, 1984). Since the wave function $\Psi_{\alpha}\left(\vec{x}_{1}, \ldots, \vec{x}_{N} ; \vec{\theta}\right)$ is a smooth function of its arguments, a non-analyticity in $\ln \Psi$ amounts to zeros of $\Psi$ for some values of $\vec{\theta}$. Smoothness requires that the zeros be isolated points on the torus $S_{1} \times S_{1}$. The Berry phase $\delta_{\Gamma}$ counts the number of zeros of $\Psi$ enclosed by the contour $\Gamma$.

How is the phase of the wave function $\Psi^{(\alpha)}(\{\vec{x}\} ; \vec{\theta})$ related to the Hall conductance? In order to investigate this issue, let us introduce the following suggestive notation which was originally introduced by Kohmoto. Let $\mathcal{A}_{k}^{(\alpha)}\left(\theta_{1}, \theta_{2}\right)$ be on a vector field on the torus $S_{1} \times S_{1}$ defined by

$$
\begin{equation*}
\mathcal{A}_{k}^{(\alpha)}=i\langle\alpha| \frac{\partial}{\partial \theta_{k}}|\alpha\rangle \equiv i\left\langle\Psi_{\vec{\theta}}^{(\alpha)}\right| \frac{\partial}{\partial \theta_{k}}\left|\Psi_{\vec{\theta}}^{(\alpha)}\right\rangle \tag{12.137}
\end{equation*}
$$

With this notation, the (averaged) Hall conductance is

$$
\begin{equation*}
\left\langle\left(\sigma_{x y}\right)_{\alpha}\right\rangle=\frac{e^{2}}{\hbar} \int_{0}^{2 \pi} \frac{d \theta_{1}}{2 \pi} \int_{0}^{2 \pi} \frac{d \theta_{2}}{2 \pi}\left(\partial_{1} \mathcal{A}_{2}-\partial_{2} \mathcal{A}_{1}\right) \tag{12.138}
\end{equation*}
$$

This is the Niu-Thouless-Wu formula (Niu et al., 1985). In other words, $\left\langle\left(\sigma_{x y}\right)_{\alpha}\right\rangle$ is the flux through the torus $S_{1} \times S_{1}$ of the vector field $\overrightarrow{\mathcal{A}}(\vec{\theta})$.

Furthermore, the states $\left|\Psi^{(\alpha)}(\vec{\theta})\right\rangle$ are defined up to an overall phase factor. Thus, the states $\left|\Psi^{(\alpha)}(\vec{\theta})\right\rangle$ and $e^{i f(\vec{\theta})}\left|\Psi^{(\alpha)}(\vec{\theta})\right\rangle$ are physically equivalent. Notice that the phase factor does not modify the boundary conditions. Under a phase change, the vector field $\overrightarrow{\mathcal{A}}(\vec{\theta})$ transforms like a gauge transformation,

$$
\begin{equation*}
\mathcal{A}_{k}(\vec{\theta})=i\langle\alpha| \partial_{k}|\alpha\rangle \rightarrow i\langle\alpha| \partial_{k}|\alpha\rangle-\partial_{k} f(\vec{\theta}) \tag{12.139}
\end{equation*}
$$

Thus phase factors in the wave functions translate into a gauge transformation for the vector field $\mathcal{A}_{k}$ defined on the torus of boundary conditions. We can now use

Stokes' theorem to write the averaged Hall conductance in the form

$$
\begin{equation*}
\left\langle\left(\sigma_{x y}\right)_{\alpha}\right\rangle=\frac{e^{2}}{\hbar} \oint_{\bar{\Gamma}} \mathcal{A}_{k}(\vec{\theta}) d \theta_{k} \tag{12.140}
\end{equation*}
$$

where $\bar{\Gamma}$ is the rectangular contour with corners at $\left(\theta_{1}, \theta_{2}\right),\left(\theta_{1}+2 \pi, \theta_{2}\right),\left(\theta_{1}, \theta_{2}+\right.$ $2 \pi)$, and $\left(\theta_{1}+2 \pi, \theta_{2}+2 \pi\right)$. A non-zero Hall conductance means that the vector field $\overrightarrow{\mathcal{A}}$ cannot be a periodic function on the torus $S_{1} \times S_{1}$ of boundary conditions. This, in turn, implies that along non-contractible closed contours $\Gamma_{1}$ and $\Gamma_{2}$, which wrap around the torus along the $\theta_{1}$ and $\theta_{2}$ directions, respectively, $\mathcal{A}_{k}$ and the wave functions must change as follows:

$$
\begin{align*}
\mathcal{A}_{k}\left(\theta_{1}+2 \pi, \theta_{2}\right) & =\mathcal{A}_{k}\left(\theta_{1}, \theta_{2}\right)+\partial_{k} f_{1}\left(\theta_{1}, \theta_{2}\right) \\
\mathcal{A}_{k}\left(\theta_{1}, \theta_{2}+2 \pi\right) & =\mathcal{A}_{k}\left(\theta_{1}, \theta_{2}\right)+\partial_{k} f_{2}\left(\theta_{1}, \theta_{2}\right) \\
\Psi^{(\alpha)}\left(\{\vec{x}\} ; \theta_{1}+2 \pi, \theta_{2}\right) & =e^{i f_{1}\left(\theta_{1}, \theta_{2}\right)} \Psi^{(\alpha)}\left(\{\vec{x}\} ; \theta_{1}, \theta_{2}\right)  \tag{12.141}\\
\Psi^{(\alpha)}\left(\{\vec{x}\} ; \theta_{1}, \theta_{2}+2 \pi\right) & =e^{i f_{2}\left(\theta_{1}, \theta_{2}\right)} \Psi^{(\alpha)}\left(\{\vec{x}\} ; \theta_{1}, \theta_{2}\right)
\end{align*}
$$

This topological structure is strongly reminiscent of the Wu-Yang construction for the wave functions of charged particles moving in the presence of a Dirac magnetic monopole (Eguchi et al., 1980; Nash and Sen, 1983). We can make the analogy even sharper. Let us suppose that we have a wave function $\Psi_{\alpha}(\{\vec{x}\}, \vec{\theta})$, which satisfies boundary conditions determined by the point $\vec{\theta}$ on $S_{1} \times S_{1}$. Now, given $\Psi_{\alpha}(\{\vec{x}\}, \vec{\theta})$, can we unambiguously and completely determine $\Psi_{\alpha}\left(\{\vec{x}\}, \vec{\theta}^{\prime}\right)$ for some other arbitrary point $\vec{\theta}^{\prime}$ on $S_{1} \times S_{1}$ ? The answer to this question is no. The phase of $\Psi_{\alpha}$ cannot be determined uniquely and smoothly over the boundarycondition torus unless the Hall conductance is equal to zero. This is so because at the zeros of $\Psi_{\alpha}$ its phase is undefined.
Let us consider the simpler case of a wave function that vanishes at just one point $\vec{\theta}_{0}$ on $S_{1} \times S_{1}$. We now split the torus $T \equiv S_{1} \times S_{1}$ into two disjoint subsets (or patches) $T_{\mathrm{I}}$ and $T_{\mathrm{II}}$ such that $\vec{\theta}_{0}$ is in $T_{\mathrm{I}}$, as shown in Fig. 12.1. Since $T_{\mathrm{II}}$ does not contain point $\vec{\theta}_{0}$ where $\Psi_{\alpha}$ is zero, the phase of $\Psi_{\alpha}$ can be determined globally on $T_{\text {II }}$. For instance, we can choose to make $\Psi_{\alpha}$ real on $T_{\text {II }}$. However, on $T_{\mathrm{I}}$ there is a point $\vec{\theta}_{0}$ where $\Psi_{\alpha}\left(\vec{\theta}_{0}\right)=0$. We can always define the phase of $\Psi_{\alpha}$ at $\vec{\theta}=\vec{\theta}_{0}$ to be some arbitrarily chosen value. Once a value has been chosen, the phase of $\Psi_{\alpha}$ can be defined by continuity in an arbitrary neighborhood of $\vec{\theta}_{0}$ that is not equal to the whole torus $T$.

Thus we have two different definitions of the phase of $\Psi_{\alpha}$ on $T_{\mathrm{I}}$ and $T_{\mathrm{II}}$. Obviously these definitions must amount to a gauge transformation, i.e.

$$
\begin{equation*}
\Psi_{\alpha}^{\mathrm{I}}(\{\vec{x}\}, \vec{\theta})=e^{i f(\vec{\theta})} \Psi_{\alpha}^{\mathrm{II}}(\{\vec{x}\}, \vec{\theta}) \tag{12.142}
\end{equation*}
$$

where $f(\vec{\theta})$ is a smooth function on the closed curve $\gamma$ (the boundary between $T_{\mathrm{I}}$ and $T_{\text {II }}$, and it is known as the transition function. Similarly, the vector field $\mathcal{A}_{k}$
![](https://cdn.mathpix.com/cropped/2025_02_21_8c6677f87cb2cf5c3b27g-482.jpg?height=436&width=464&top_left_y=207&top_left_x=628)

Figure 12.1 $T=S_{1} \times S_{2}=\left\{0 \leq \theta_{1}<2 \pi, 0 \leq \theta_{2}<2 \pi\right\}$ is the torus of boundary conditions for wave functions on a spatial torus. The wave function $\Psi_{\alpha}(\vec{\theta})$ with boundary condition $\vec{\theta}=\left(\theta_{1}, \theta_{2}\right)$ is well defined on the region (patch) $T_{\mathrm{I}}$ but not on the full torus, and vanishes at $\vec{\theta}_{0} . T_{\mathrm{II}}$ is the complement of $T_{\mathrm{I}}$ on the torus. The oriented path $\gamma$ is their common boundary. See the text.
also has two different definitions on $T_{\mathrm{I}}$ and $T_{\mathrm{II}}$, which, again, differ by a gauge transformation

$$
\begin{equation*}
\mathcal{A}_{k}^{\mathrm{I}}(\vec{\theta})-\mathcal{A}_{k}^{\mathrm{II}}(\vec{\theta})=\partial_{k} f(\vec{\theta}) \tag{12.143}
\end{equation*}
$$

We conclude that the Hall conductance reduces to a sum of two contributions, one from $T_{\mathrm{I}}$ and the other from $T_{\mathrm{II}}$. Since the regions $T_{\mathrm{I}}$ and $T_{\mathrm{II}}$ share a common boundary, $\gamma$, we can readily use Stokes' theorem to write

$$
\begin{align*}
\left\langle\left(\sigma_{x y}\right)_{\alpha}\right\rangle \equiv & \frac{e^{2}}{(2 \pi)^{2} \hbar}\left\{\int_{T_{\mathrm{I}}} d \theta_{1} d \theta_{2}\left(\partial_{1} \mathcal{A}_{2}-\partial_{2} \mathcal{A}_{1}\right)\right. \\
& \left.+\int_{T_{\mathrm{II}}} d \theta_{1} d \theta_{2}\left(\partial_{1} \mathcal{A}_{2}-\partial_{2} \mathcal{A}_{1}\right)\right\} \\
= & \frac{e^{2}}{(2 \pi)^{2} \hbar}\left\{\int_{\gamma} \overrightarrow{\mathcal{A}}_{\mathrm{I}} \cdot d \vec{\theta}-\int_{\gamma} \overrightarrow{\mathcal{A}}_{\mathrm{II}} \cdot d \vec{\theta}\right\} \tag{12.144}
\end{align*}
$$

where we have used the fact that the boundaries of $T_{\mathrm{I}}$ and $T_{\mathrm{II}}$ have opposite orientations. Thus, we find

$$
\begin{equation*}
\left\langle\left(\sigma_{x y}\right)_{\alpha}\right\rangle=\frac{e^{2}}{(2 \pi)^{2} \hbar} \int_{\gamma}\left(\overrightarrow{\mathcal{A}}_{I}-\overrightarrow{\mathcal{A}}_{I I}\right) \cdot d \vec{\theta}=\frac{e^{2}}{(2 \pi)^{2} \hbar} \int_{\gamma} \vec{\partial} f \cdot d \vec{\theta} \tag{12.145}
\end{equation*}
$$

Thus, $\left\langle\left(\sigma_{x y}\right)_{\alpha}\right\rangle$ counts the number of times the gauge transformation $f(\vec{\theta})$ winds by $2 \pi$ as $\vec{\theta}$ traces the closed loop $\gamma$. The winding number

$$
\begin{equation*}
C_{1}=\frac{1}{2 \pi} \int_{\gamma} \vec{\partial} f \cdot d \vec{\theta} \tag{12.146}
\end{equation*}
$$

is a topological invariant known as the first Chern number. It is a topological invariant since it cannot change upon any smooth deformation of the contour $\gamma$. However, if, under a deformation, one or more additional zeros of $\Psi_{\alpha}$ cross the boundary into region $T_{\mathrm{I}}$, the winding number will jump by integer amounts. These processes correspond to crossings of energy levels.

The fiber bundle associated with this problem can be defined in the following way (Kohmoto, 1985). With every point $\vec{\theta}$ on $T$ we associate a state $\Psi_{\alpha}(\vec{\theta})$. States $\Psi_{\alpha}^{\prime}(\vec{\theta})$, which differ from $\Psi_{\alpha}(\vec{\theta})$ by a gauge transformation, $f(\vec{\theta})$, are physically equivalent. Thus, at every point $\vec{\theta} \in T$ we have associated the ray or bundle of states related to $\Psi_{\alpha}(\vec{\theta})$ by a gauge transformation. The torus $T$ is partitioned into a union of sets $T_{\mathrm{I}}, T_{\mathrm{II}}, \ldots$ each containing at most one zero of $\Psi_{\alpha}$. The phase of $\Psi_{\alpha}$ is defined for each set, which results in a set of state vectors $\Psi_{\alpha}^{\mathrm{I}}, \Psi_{\alpha}^{\mathrm{II}}, \ldots$ whose phases are smoothly defined on $T_{\mathrm{I}}, T_{\mathrm{II}}, \ldots$

These state vectors differ from each other just by gauge transformations that are smooth functions $f(\vec{\theta})$ on the overlap between two regions, say $T_{\mathrm{I}}$ and $T_{\mathrm{II}}$. The transition function $f(\vec{\theta})$ is a smooth map from the closed curve $\gamma \subset T_{\mathrm{I}} \cap T_{\mathrm{II}}$ to the group $\mathrm{U}(1)$ of phases $e^{i f(\vec{\theta})}$. Since $\gamma$ is isomorphic to $\mathrm{U}(1)$, the transition function is a smooth map from $\mathrm{U}(1)$ onto $\mathrm{U}(1)$. These maps can be classified into homotopy classes, with each class defined by the winding number $C_{1}$ of Eq. (12.146). This map is known as the principal $U(1)$ bundle over the torus $T$. The vector field $\mathcal{A}_{k}(\vec{\theta})$ defines a connection.

Let's define now the 1 -form $d \mathcal{A}=\mathcal{A}_{k} d \theta_{k}$. A connection 1-form can be written as $\Omega=\mathcal{A}+d \mathcal{A}$. The transition functions act on fibers (i.e. state vectors) by multiplication. Once a connection $\mathcal{A}_{k}$ has been given, a curvature 2-form $F=d \mathcal{A}$ can be defined, and it is known as the first Chern form. The integral of this 2-form is the first Chern number.

Let us now note the following interesting analogy. In Section 12.1 we discussed the problem of the quantization of the motion of a charged particle in a uniform magnetic field with the particle constrained to move on the surface of a torus in space. There, we found how the wave functions transform under magnetic translations. In this section, we showed how to construct the wave function on different patches of the torus of boundary conditions. The relation between the wave functions on different patches is analogous to the way in which the wave functions transform under magnetic translations. However, here we are discussing phases of many-body wave functions on the torus of boundary conditions! At the root of this analogy is the fact that the many-body wave functions are also representations of the group of magnetic translations. Here too, if the wave functions $\Psi^{(\alpha)}(\{\vec{x}\}, \vec{\theta})$ are required to be single-valued functions on the torus $S_{1} \times S_{1}$, the same consistency condition as that discussed in Section 12.1 implies that the total flux through the torus should be an integer $n$ multiple of $2 \pi$. Otherwise different paths from
$\vec{\theta}=(0,0)$ to, say, $\vec{\theta}=(2 \pi, 2 \pi)$ would lead to inequivalent phases for the wave function $\Psi^{(\alpha)}$. We conclude that, in this case, the averaged Hall conductance is quantized to be an integer multiple of $e^{2} / h$.

This argument is actually much too strong. In fact, it appears to require that $\left\langle\left(\sigma_{x y}\right)_{\alpha}\right\rangle$ should always be an integer multiple of $e^{2} / h$. The experimental observation of the fractional quantum Hall effect, as well as the success of Laughlin's theory, indicates that this argument cannot be literally correct. Indeed, the observation of the FQHE , which has $\sigma_{x y}=\left(e^{2} / h\right)(n / m)$, requires that, for the case of toroidal boundary conditions, the wave functions $\Psi^{(\alpha)}(\{\vec{x}\} ; \vec{\theta})$ must be multivalued functions on the torus of boundary conditions. This means that the eigenstates of $\hat{H}$ must have several components and behave like vectors under periodic changes of boundary conditions.

Hence, rather than requiring that $\Psi_{\alpha}(\{\vec{x}\} ; \vec{\theta})$ be single-valued on the torus $S_{1} \times$ $S_{1}$, we should demand that $\Psi_{\alpha}$ must have $m$ components (where $m$ is some integer). The wave function returns to its initial value only after the torus has been covered $m$ times. In this case the averaged Hall conductance is equal to $\left(e^{2} / h\right)(n / m)$. We saw in Chapter 9 that the ground state on a torus of a theory of a topological phase does indeed have a finite degeneracy that is characteristic of this phase. In Chapter 13 we will see that the quantum Hall fluid in a state with a fractional Hall conductivity is indeed an example of a topological phase: the ground-state wave function has several components or, equivalently, it has a finite ground-state degeneracy of a torus (Wen and Niu, 1990).

The integers $n$ and $m$ cannot be determined by topological arguments alone. They have to be calculated from some microscopic theory. In the next sections we will discuss a few examples: (a) free electrons filling up one Landau level, (b) the tight-binding Hofstadter problem, and (c) Laughlin's theory of the FQHE. In each case $n$ and $m$ turn out to be different. However, the importance of the topological argument is that, for the specific task of computing $\sigma_{x y}$, it suffices to consider just some simple limit in which the calculation can be done easily. The topological invariance of $\left\langle\sigma_{x y}\right\rangle$ insures that it cannot change under smooth deformations of the underlying Hamiltonian (unless, of course, during this process there is a level crossing).

### 12.6.5 How many components does the wave function have?

Let us point out that subtle, but important, differences in the behavior of the system arise depending on the choice of boundary conditions. In this section we have considered mainly the case of generalized periodic boundary conditions (GPBCs). These GPBCs require that the fermions move on a 2D torus in space. While this choice is convenient from the point of view of the mathematics, it is not very natural from an experimental standpoint.

Experimentally, the natural choice is a rectangle coupled to a four-point probe, which is a set of sources and sinks of charge. In practice this means taking charge from one point on the edge of the sample (the sink) and injecting it back into the system at another point (the source). Typically this process involves the use of wires, batteries, etc. In a sense the measuring devices implement the GPBCs. The voltage drop across the device is proportional to the boundary-condition angles $\theta_{1}$ and $\theta_{2}$. Yet, another physically relevant situation is a disk without wires. If the disk is isotropic and thermodynamically large, then the wave function vanishes exponentially fast as the difference of the particle coordinates becomes large. This can happen due to the presence of an isotropic potential that confines the particles inside some region of the disk. In this case the points on the edge of the disk are asymptotically equivalent to each other. The thermodynamic limit of this case is thus identical to that of a set of particles moving on the surface of a sphere with uniform radial magnetic field, i.e. a magnetic monopole (Haldane, 1983b).

Niu, Thouless, and Wu (Niu et al., 1985) observed that GPBCs require multicomponent wave functions. Spherical (or disk-like) boundary conditions have only one-component wave functions (Laughlin, 1983; Haldane, 1983b). This issue has caused a great deal of confusion, which was partly due to the fact that the components of the wave functions for GPBCs were originally thought of as resulting from the spontaneous breakdown of some unknown discrete symmetry. Indeed, in systems in which a global discrete symmetry is spontaneously broken, there is a finite number of degenerate ground states, which are related by a symmetry operation.

This phenomenon is quite common in magnetic systems with spontaneously broken discrete global symmetries. The most common example is the Ising model, which we discussed in Chapter 5, whose discrete global symmetry is a global spin flip. Multiple ground states are also present in commensurate charge-density-wave systems, such as polyacetylene, which will be discussed in Section 16.7, where they result from the spontaneous breaking of discrete global translation symmetries. However, these analogies are quite misleading. In the case of quantum Hall systems, the multi-component structure is a feature of the entire Hilbert space, not just of the ground state. The Hilbert space is split into a number of disconnected pieces that are not related by a symmetry operation. In other words, this structure is not the result of the spontaneous breakdown of any symmetry. Rather, this feature of the Hilbert space merely reflects the global non-triviality of the manifold on which the particles move.

As a matter of fact, the number of components of the wave functions is different on different manifolds (Wen, 1990c; Wen and Niu, 1990). For example, instead of a torus, let us consider a sphere. All closed loops on the surface of a sphere are contractible. Thus, all the holonomies are trivial. The wave functions for charged particles moving on the surface of the sphere in the presence of a uniform radial magnetic field (i.e. a magnetic monopole) still form a non-trivial fiber bundle,
known as the monopole bundle ( Wu and Yang, 1975). But the arguments given above indicate that the states are now non-degenerate.

What is the physical significance of this degeneracy? There are two schools of thought on this issue. According to one school, the degeneracy should not be regarded as being physical since it changes with the boundary conditions. According to this point of view, the degeneracy merely reflects the fact that the location of the center of mass is quantized if the system is placed on a torus. Indeed, Haldane (1985a) undertook a detailed study of the symmetries of the states on the torus and showed that the degeneracy arises from the magnetic translations of the center of mass independently of the physical properties of the system. He further showed that, in general, there are no additional degeneracies and that the states for the relative coordinates are generally non-degenerate. But, by the same token, it is clear that there are no states on a sphere that can carry a current.

Thus, if we wish to have a state with a non-vanishing current we must put the system on a torus. This statement naturally applies only to systems on closed surfaces. All experimental systems have edges, sources, and drains, and, as we well know, can have a steady current. Wen $(1989,1990 c)$ gave a very general argument showing that if the surface on which the fermions move has $g$ handles (a genus- $g$ Riemann surface) the degeneracy is $k^{g}$, if $k$ is the degeneracy on the torus. (See the discussion on topological phases in gauge theory in Chapter 9.) From this point of view, the topological degeneracy is a fundamental qualitative feature of the system.

### 12.7 Quantized Hall conductance of a non-interacting system

In this section we will discuss the fairly simple but interesting problem of the computation of the Hall conductance for an assembly of non-interacting electrons moving freely on a torus. We will assume that the external magnetic field and the electron density are such that there is an integer number of completely filled Landau levels.

Let us begin by discussing the nature of the one-particle states. Let $\vec{x}$ denote the coordinate of a particle of charge $e$ and mass $m$. The magnetic field is $B$ and the torus has linear dimensions $L_{1}$ and $L_{2}$ along its main circles. In Section 12.1 we constructed the single-particle states for the case of an isotropic disk. For simplicity we will restrict our discussion to the case of particles on the lowest Landau level. In Section 12.1 we found that the single-particle states for the lowest Landau level $\Psi(z, \bar{z})$ have the form

$$
\begin{equation*}
\Psi(z, \bar{z})=f(z, \bar{z}) e^{-|z|^{2} /\left(\left.4\right|_{0} ^{2}\right)} \tag{12.147}
\end{equation*}
$$

where $f(z, \bar{z})$ is an analytic function, i.e. $\partial_{\bar{z}} f=0$.

A basis of (analytic) functions is constituted by the powers $z^{m}$. For a system with $N_{\phi}$ flux quanta there are $N_{\phi}$ linearly independent states. Thus, an arbitrary state in the lowest Landau level is a polynomial in $z$ of degree $N_{\phi}$ times the exponential factor.

Let us consider now the case of a system with exactly $N=N_{\phi}$ electrons in a magnetic field B with $N_{\phi}$ flux quanta. The ground-state wave function $\Psi_{N}$ for the $N$-particle system is the Slater determinant

$$
\Psi_{N}\left(z_{1}, \ldots, z_{N}\right)=\left|\begin{array}{ccc}
1 & \ldots & 1  \tag{12.148}\\
z_{1} & \ldots & z_{N} \\
\vdots & \vdots & \vdots \\
z_{1}^{N} & \ldots & z_{N}^{N}
\end{array}\right| \exp \left(-\frac{1}{4 l_{0}^{2}} \sum_{j=1}^{N}\left|z_{j}\right|^{2}\right)
$$

This determinant has the form of a Vandermonde determinant. By application of a standard algebraic identity, the wave function $\Psi_{N}$ can be written in the form

$$
\begin{equation*}
\Psi_{N}\left(z_{1}, \ldots, z_{N}\right)=\prod_{1 \leq j<k \leq N}\left(z_{j}-z_{k}\right) \times \exp \left(-\frac{1}{4 l_{0}^{2}} \sum_{j=1}^{N}\left|z_{j}\right|^{2}\right) \tag{12.149}
\end{equation*}
$$

We want to compute the Hall conductance for this system. We will use the Niu-Thouless-Wu formula. However, in order to use that formula we need to write down a wave function that is an explicit function of the boundary-condition angles $\theta_{1}$ and $\theta_{2}$. What we need is to generalize the state for a system on a torus (instead of a disk) of linear dimensions $L_{1}$ and $L_{2}$ satisfying the GPBCs of Haldane (Haldane and Rezayi, 1985), whose work we follow here.

Since toroidal boundary conditions break rotational invariance, it is more natural to work in the axial (or Landau) gauge $A_{1}=-B x_{2}, A_{2}=0$. It can be easily checked that the wave functions for the states in the lowest Landau level have the form

$$
\begin{equation*}
\Psi\left(x_{1}, x_{2}\right)=f(z) \exp \left(-\frac{x_{2}^{2}}{2 l_{0}^{2}}\right) \tag{12.150}
\end{equation*}
$$

where $z=x_{1}+i x_{2}$ and $f(z)$ is an analytic function.
The GPBCs imply that $f(z)$ must satisfy the consistency conditions

$$
\begin{align*}
f\left(z+L_{1}\right) & =e^{i \theta_{1}} f(z) \\
f\left(z+i L_{2}\right) & =\exp \left[i \theta_{2}-i \pi N_{\phi}\left(\frac{2 z}{L_{1}}+\tau\right)\right] f(z) \tag{12.151}
\end{align*}
$$

where $\tau=i L_{2} / L_{1}$ is the modular parameter of the torus. The analytic function $f(z)$ must have zeros inside the rectangle with vertices at $\left(L_{1} / 2\right)( \pm 1 \pm \tau)$. Thus, $f(z)$ must have $N_{\phi}$ zeros. Indeed, the integral

$$
\begin{equation*}
\int_{\gamma} d z \frac{f^{\prime}(z)}{f(z)}=N_{\phi} \tag{12.152}
\end{equation*}
$$

where $\gamma$ is the path around the edges of the rectangle of sides $L_{1}$ and $L_{2}$, is equal to $N_{\phi}$ since the total change of the phase of $f(z)$ around the edges of the rectangle is $2 \pi N_{\phi}$.

A fundamental theorem of the theory of complex functions tells us that functions $f(z)$ which are analytic inside the rectangle and satisfy the consistency conditions must be analytic functions with exactly $N_{\phi}$ zeros. The most general form that $f(z)$ can take is (Haldane and Rezayi, 1985)

$$
\begin{equation*}
f(z)=e^{i k z} \prod_{j=1}^{N_{\phi}} \vartheta_{1}\left(\left.\frac{z-z_{j}}{L_{1}} \right\rvert\, \tau\right) \tag{12.153}
\end{equation*}
$$

where $\vartheta_{1}(u \mid \tau)$ is the first odd elliptic theta function (Erdélyi, 1953),

$$
\begin{equation*}
\vartheta_{1}(u \mid \tau)=i \sum_{n=-\infty}^{+\infty}(-1)^{n} \exp \left[i \pi \tau\left(n-\frac{1}{2}\right)^{2}+i \pi(2 n-1) u\right] \tag{12.154}
\end{equation*}
$$

The parameter $k$ is a real number in the range $0 \leq|k| \leq \pi N_{\phi} L_{2} / L_{1}^{2}$. The solutions are thus parametrized by the set of $N_{\phi}$ complex numbers $\left\{z_{j}\right\}$ that determine the locations of the zeros of the function $f(z)$ and by $k$. By direct substitution we find that $k$ and $z_{0} \equiv \sum_{j=1}^{N_{\phi}} z_{j}$ are the solutions to the set of equations

$$
\begin{align*}
e^{i \theta_{1}} & =\exp \left[i k L_{1}(-1)^{N_{\phi}}\right] \\
e^{i \theta_{2}} & =\exp \left(-k L_{2}+i \pi \frac{z_{0}}{L_{1}}\right) \tag{12.155}
\end{align*}
$$

which have the unique solution

$$
\begin{equation*}
k=\frac{\theta_{1}+\pi N_{\phi}}{L_{1}}, \quad z_{0}=\frac{\theta_{2} L_{1}}{\pi}-i k \frac{L_{1} L_{2}}{\pi} \tag{12.156}
\end{equation*}
$$

The locations of the zeros are determined by requiring that the wave functions $f(z)$ form a complete set of orthogonal wave functions that are eigenstates of the magnetic translation operators. A simple way to construct such a set (i.e. a basis for the Hilbert space of the lowest Landau levels) is to choose a set of zeros, $\left\{z_{j}\right\}$, that satisfies $z_{j+i}=z_{j}+L_{1} / N_{\phi}$. Thus the dimension of the Hilbert space equals $N_{\phi}$, as it should be.

The $N$-particle states are constructed in very much the same fashion. Here we consider the case of $N=N_{\phi}$ particles and, once again, we have filled up the lowest Landau level. The only difference here is that we will separate the coordinates $z=\sum_{j=1}^{N} z_{j}$ for the center of mass (CM) of the system from the set of relative
coordinates $\left\{z_{j}-z_{k}\right\}$. The antisymmetric (fermionic!) $N$-particle wave function $\Psi_{N}$ in the lowest Landau level has the form

$$
\begin{equation*}
\Psi_{N}=\mathcal{N} \Psi_{\mathrm{CM}}(z)\left[\prod_{1 \leq j<k \leq N} f\left(z_{j}-z_{k}\right)\right] \times \exp \left(-\sum_{j=1}^{N} \frac{\left(x_{2}^{j}\right)^{2}}{2 l_{0}^{2}}\right) \tag{12.157}
\end{equation*}
$$

where $x_{2}^{j}$ is the $x_{2}$ coordinate of the $j$ th particle and $\mathcal{N}$ is a normalization constant. The wave functions $\Psi_{\mathrm{CM}}$ and $f(z)$ for the center-of-mass and relative coordinates are determined by demanding that $\Psi_{N}$ satisfy the GPBCs. The "pair wave functions" $f\left(z_{j}-z_{k}\right)$ do not change if all particles are (magnetically) translated simultaneously. Only the center-of-mass wave function $\Psi_{\mathrm{CM}}$ is sensitive to a uniform translation of the system as a whole. On the other hand, if a particle (say the $j$ th particle) is transported around the torus exactly once, then the wave function must change by a sign determined by its antisymmetry property. These conditions can be met by requiring $\Psi_{\mathrm{CM}}(z)$ and $f(z)$ to satisfy

$$
\begin{align*}
f\left(z+L_{1}\right) & =f(z) \\
f\left(z+i L_{2}\right) & =f(z) \exp \left[i \pi\left(\frac{2 z}{L_{1}}+\tau\right)\right] \\
\Psi_{\mathrm{CM}}\left(z+L_{1}\right) & =e^{i \theta_{1}}(-1)^{N-1} \Psi_{\mathrm{CM}}(z)  \tag{12.158}\\
\Psi_{\mathrm{CM}}\left(z+i L_{2}\right) & =e^{i \theta_{2}}(-1)^{N-1} \exp \left[-i \pi\left(\frac{2 z}{L_{1}}+\tau\right)\right] \Psi_{\mathrm{CM}}(z)
\end{align*}
$$

The conditions of Eqs. (12.158) imply that both $f(z)$ and $\Psi_{\mathrm{CM}}(z)$ are entire (doubly) periodic functions with just one zero in the principal region. The solution is again the odd elliptic theta function

$$
\begin{equation*}
f\left(z_{j}-z_{k}\right)=\vartheta_{1}\left(\left.\frac{z_{j}-z_{k}}{L_{1}} \right\rvert\, \tau\right) \tag{12.159}
\end{equation*}
$$

The wave function $\Psi_{\mathrm{CM}}(z)$ can also be written in terms of a theta function

$$
\begin{equation*}
\Psi_{\mathrm{CM}}(z)=e^{i k z} \vartheta_{1}\left(\left.\frac{z-z_{0}}{L_{1}} \right\rvert\, \tau\right) \tag{12.160}
\end{equation*}
$$

This solution has three parameters ( $k$ and $z_{0}$, the coordinates of the zero of $\Psi_{\mathrm{CM}}$ ), which are determined by the set of consistency conditions

$$
\begin{align*}
e^{i k L_{1}} & =(-1)^{N} e^{i \theta_{1}} \\
\exp \left(i 2 \pi \frac{z_{0}}{L_{1}}\right) & =(-1)^{N} e^{i \theta_{2}+k L_{2}} \tag{12.161}
\end{align*}
$$

which has the unique solution

$$
\begin{equation*}
k=\frac{\pi N}{L_{1}}+\frac{\theta_{1}}{L_{1}}, \quad z_{0}=L_{1}\left(\frac{\theta_{2}}{2 \pi}+\frac{N}{2}\right)-i L_{2}\left(\frac{N}{2}+\frac{\theta_{1}}{2 \pi}\right) \tag{12.162}
\end{equation*}
$$

Therefore the wave function for one filled Landau level on a torus is unique. Notice that, in contrast, the single-particle states have an $N$-fold degeneracy.

One important feature of the wave function $\Psi_{N}$ is the fact that the twist angles $\theta_{1}$ and $\theta_{2}$ affect the wave function of the center of mass only through $\Psi_{\mathrm{CM}}(z)$. The wave function $\Psi_{\mathrm{CM}}(z)$ can be viewed as the wave function for a single particle located at $z$ with charge $-N e$ moving on a torus in the presence of a uniform external magnetic field with $N_{\phi}=N$ units of flux. Thus, the center of mass carries the full current. The Niu-Thouless-Wu formula can now be used to yield the result

$$
\begin{align*}
\left\langle\sigma_{x y}\right\rangle & =\frac{e^{2}}{i h} \oint \frac{d \theta_{j}}{2 \pi}\left\langle\Psi_{N}\right| \frac{\partial}{\partial \theta_{j}}\left|\Psi_{N}\right\rangle \\
& \equiv \frac{e^{2}}{i h} \oint \frac{d \theta_{j}}{2 \pi} \int_{0}^{L_{1}} d x_{1} \int_{0}^{L_{1}} d x_{2}\left|\Psi_{N}\right|^{2} \frac{\partial}{\partial \theta_{j}} \ln \Psi_{\mathrm{CM}}(z, \vec{\theta}) \tag{12.163}
\end{align*}
$$

Therefore, the average Hall conductance on a torus is determined by the average change of the phase of the wave function for the center of mass on a closed loop on the edges of the torus of boundary conditions. Since $\Psi_{\mathrm{CM}}(z, \vec{\theta})$ is an entire function with exactly one zero in the principal region of the elliptic theta function, the theory of functions of complex variables tells us that the integral has the value

$$
\begin{equation*}
\oint d \theta_{j} \frac{\partial}{\partial \theta_{j}} \ln \Psi_{\mathrm{CM}}(z, \vec{\theta})=2 \pi i \tag{12.164}
\end{equation*}
$$

Thus we find that the Hall conductivity $\sigma_{x y}$ (averaged over all boundary conditions on the torus) is

$$
\begin{equation*}
\left\langle\sigma_{x y}\right\rangle=\frac{e^{2}}{h} \cdot 1 \tag{12.165}
\end{equation*}
$$

This is the result we expected to get. As we can see, it reflects the fact that the wave function for a full Landau level on a torus is unique.

### 12.8 Quantized Hall conductance of Hofstadter bands

We now turn to the far less trivial question of computing the value of $\sigma_{x y}$ for the problem of charged particles moving on a square lattice in the presence of a uniform commensurate magnetic field, namely the Hofstadter problem. In Section 12.2 we presented a description of its single-particle states. Let us recall that, if the flux per plaquette is $(p / q) \phi_{0}$, there are $q$ single-particle Landau bands, each with $L_{1} L_{2} / q$ states. In principle, if we solve the Schrödinger equation, we can
construct all the wave functions, whence we can compute anything we wish. These equations are very complicated and yield only to numerical solution. However, the computation of $\sigma_{x y}$ is considerably simplified by the fact that, here too, it is related to a topological invariant. Thus, we can calculate $\sigma_{x y}$ within some approximate scheme and still get the exact answer.

Let us first derive an expression for $\sigma_{x y}$ for a lattice system with periodic boundary conditions. Unlike the continuum case of the last section, the lattice problem is considerably simpler since the main effect of the magnetic field is to generate a sublattice structure. Indeed, in Section 12.2 we saw that the requirement that there should be an integer number of flux quanta piercing the lattice means that either $L_{1}$ or $L_{2}$ must be an integer multiple of $q$. Since the magnetic unit cell has $q$ plaquettes, there are $L_{1} L_{2} / q$ magnetic unit cells. We have $q$ sublattices and a Schrödinger equation satisfied by the $q$ sublattices. Hence, unlike in the continuum case, we can apply periodic boundary conditions directly. The reason is that for this lattice problem what matters is not the vector potential $A_{j}(\vec{r})$ on the link $\left(\vec{r}, \vec{r}+\hat{e}_{j}\right)$ but rather the phase $e^{i A_{j}(\vec{r})}$, which is invariant under the shifts $A_{j}(\vec{r}) \rightarrow A_{j}(\vec{r})+2 \pi l_{j}(\vec{r})$, where $\left\{l_{j}(\vec{r})\right\}$ is a set of arbitrary integers.

Furthermore, in Section 12.2 we saw that, even though the discrete magnetic translations do not commute with each other, there is a subset of discrete magnetic translations (i.e. those generated by $\hat{T}_{1}$ and $\hat{T}_{2}^{q}$ ) that commute among themselves and with the Hamiltonian. This subset, which defines the magnetic Brillouin zone, consists of the set of translations by integer numbers of magnetic unit cells. Thus, in units of the magnetic unit cell, the Hamiltonian is translationally invariant. It is then perfectly consistent to impose conventional periodic boundary conditions since the wave functions in real space are globally defined. However, they are not globally defined on the momentum-space torus, the magnetic Brillouin zone $\left(-\pi \leq k_{1}<\pi,-\pi / q \leq k_{2}<\pi / q\right)$.

Let us derive a version of the Niu-Thouless-Wu formula for the case of a tightbinding system (Kohmoto, 1985; Fradkin and Kohmoto, 1987). In the case of a tight-binding system, the current operator $\hat{J}_{k}(\vec{r})$ flowing on the link $\left(\vec{r}, \vec{r}+\hat{e}_{j}\right)$ can be obtained by differentiation of the Hamiltonian

$$
\begin{equation*}
\hat{J}_{k}(\vec{r})=\frac{\delta H}{\delta A_{k}(\vec{r})} \tag{12.166}
\end{equation*}
$$

where $H$ is an arbitrary (generally interacting) tight-binding Hamiltonian. We will assume here that the external vector potential $A_{k}(\vec{r})$ enters only in the kineticenergy term of the Hamiltonian, which in momentum space generally has the form

$$
\begin{equation*}
H_{\mathrm{kin}}=\int_{\vec{k}, \vec{k}^{\prime}} c^{\dagger}(\vec{k}) h_{\mathrm{kin}}\left(\vec{k}, \vec{k}^{\prime}\right) c\left(\vec{k}^{\prime}\right) \tag{12.167}
\end{equation*}
$$

where $c(\vec{r})$ and $c^{\dagger}(\vec{r})$ are fermion-destruction and -creation operators at site $\vec{r}$ (the spin indices are omitted), and $h_{\text {kin }}\left(\vec{k}, \vec{k}^{\prime}\right)$ is the (hermitian) one-particle noninteracting Hamiltonian. This kinetic-energy term applies equally for fermions and bosons. Here we are interested in the fermionic case.

In the case of a system coupled to an external electric field $\vec{E}$, the vector potential $\vec{A}$ gets shifted by $\vec{E} t$. It is easy to show that, when $\vec{E}$ is not zero, the kinetic part of the one-particle Hamiltonian $h_{\text {kin }}$ takes the form

$$
\begin{equation*}
h_{\mathrm{kin}}\left(\vec{k}, \vec{k}^{\prime} ; \vec{E}\right) \equiv h_{\mathrm{kin}}\left(\vec{k}+\frac{e}{\hbar c} \vec{E} t, \vec{k}^{\prime}+\frac{e}{\hbar c} \vec{E} t\right) \tag{12.168}
\end{equation*}
$$

Thus, the external uniform electric field $\vec{E}$ (or a twist $\vec{\theta} \equiv(e t /(\hbar c)) \vec{E})$ is equivalent to a shift of the momentum of each particle by $(e t /(\hbar c)) \vec{E}$.

The Kubo formula can be written in the following simple form $(j, l=1,2)$ :

$$
\begin{equation*}
\left(\sigma_{x y}\right)_{\alpha}=-i \hbar L_{1} L_{2} \epsilon_{k l} \frac{\delta}{\delta A_{j}}\langle\alpha| \frac{\delta}{\delta A_{l}}|\alpha\rangle \tag{12.169}
\end{equation*}
$$

For the case of a non-interacting system this expression reduces to a sum over all the occupied one-particle states $\{|n\rangle\}$, i.e. with single-particle energy $E_{n}<E_{\mathrm{F}}$, where $E_{\mathrm{F}}$ is the Fermi energy,

$$
\begin{equation*}
\left(\sigma_{x y}\right)_{\alpha}=\frac{e^{2}}{\hbar} \sum_{\{n\}} \epsilon_{j l} \frac{\partial}{\partial k_{j}}\langle n| \frac{\partial}{\partial k_{l}}|n\rangle \tag{12.170}
\end{equation*}
$$

The one-particle states $\{|n\rangle\}$ are labeled by a band index $r(1 \leq r \leq q-1)$ and by a momentum label $\vec{k}$, where $\vec{k}$ lies in the magnetic Brillouin zone. $\Psi_{r}(\vec{k})$ are the eigenstates of the Schrödinger equation which satisfy the boundary condition $\Psi_{r+q}(\vec{k})=\Psi_{r}(\vec{k})$. Let $\lambda$ be a small parameter $(\lambda \rightarrow 1)$ that we will use to define (formally) a perturbation theory. This parameter enters into the Schrödinger equation in the form of a Harper equation,

$$
\begin{align*}
& -\lambda t\left[e^{i k_{1}} \Psi_{r+1}\left(k_{1}, k_{2}\right)+e^{-i k_{1}} \Psi_{r-1}\left(k_{1}, k_{2}\right)\right] \\
& -2 t \cos \left(k_{2}+2 \pi \frac{p}{q} r\right) \Psi_{r}\left(k_{1}, k_{2}\right)=E\left(k_{1}, k_{2}\right) \Psi_{r}\left(k_{1}, k_{2}\right) \tag{12.171}
\end{align*}
$$

This equation has a set of $q$ linearly independent solutions $\left\{\Psi_{r}^{(j)}\right\}(\vec{k})(j=$ $1, \ldots, q)$. Each solution $\Psi_{r}^{(j)}(\vec{k})$ has an eigenvalue $E_{j}(\vec{k})$. These are the LandauHofstadter bands.

Let us now consider the case in which the number of particles $N$ is such that there is an integer number $r$ of exactly filled Landau-Hofstadter bands. This requirement
defines the state $|\alpha\rangle$. The Hall conductance $\left(\sigma_{x y}\right)_{\alpha}$ is then a sum of contributions, one from each filled band, of the form

$$
\begin{equation*}
\left(\sigma_{x y}\right)_{\alpha}=\frac{e^{2}}{i \hbar} \sum_{n=1}^{r} \int_{-\pi}^{\pi} \frac{d k_{1}}{2 \pi} \int_{-\frac{\pi}{q}}^{\frac{\pi}{q}} \frac{d k_{2}}{2 \pi} \sum_{p=1}^{q} \epsilon_{j l} \partial_{k_{j}} \Psi_{p}^{(n)^{*}}(\vec{k}) \partial_{k_{l}} \Psi_{p}^{(n)}(\vec{k}) \tag{12.172}
\end{equation*}
$$

We can define a vector field $\mathcal{A}_{j}^{(n)}(\vec{k})$, for $\vec{k}$ on the magnetic Brillouin zone, to be

$$
\begin{equation*}
\mathcal{A}_{j}^{(n)}(\vec{k})=\sum_{p=1}^{q} \Psi_{p}^{(n)^{*}}(\vec{k})(-i) \partial_{k_{j}} \Psi_{p}^{(n)}(\vec{k}) \tag{12.173}
\end{equation*}
$$

The Hall conductance is essentially the flux of $\mathcal{A}_{j}^{(n)}$ through the magnetic Brillouin zone,

$$
\begin{equation*}
\left(\sigma_{x y}\right)_{\alpha}=\frac{e^{2}}{\hbar} \sum_{n=1}^{r} \int_{-\pi}^{\pi} \frac{d k_{1}}{2 \pi} \int_{-\frac{\pi}{q}}^{\frac{\pi}{q}} \frac{d k_{2}}{2 \pi} \epsilon_{j l} \partial_{k_{j}} \mathcal{A}_{l}^{(n)}(\vec{k}) \tag{12.174}
\end{equation*}
$$

Once again, $\left(\sigma_{x y}\right)_{\alpha}$ is identified with a Chern number, which counts the winding number of the phase of the wave functions as $\vec{k}$ traces the boundary of the magnetic Brillouin zone. Let us denote by $I_{n}$ the Chern number for the $n$th band. $I_{n}$ is given by

$$
\begin{equation*}
I_{n}=\frac{1}{2 \pi} \int_{-\pi}^{\pi} d k_{1} \int_{-\frac{\pi}{q}}^{\frac{\pi}{q}} d k_{2} \epsilon_{j l} \sum_{p=1}^{q} \partial_{k_{j}} \Psi_{p}^{(n)^{*}}(\vec{k}) \partial_{k_{l}} \Psi_{p}^{(n)}(\vec{k}) \tag{12.175}
\end{equation*}
$$

Since the Chern numbers $I_{n}$ are topological invariants, we can compute their exact values by considering a smooth deformation of the Schrödinger equation. For instance, we can compute the integers $I_{n}$ in the limit $\lambda \rightarrow 0$ (or rather a perturbative expansion in powers of $\lambda$ ). If, as $\lambda$ is varied from $\lambda=0$ to $\lambda=1$, there are no band crossings, the integers $I_{n}$ will not change.

Let us now discuss the qualitative features of a (degenerate) perturbation theory in $\lambda$. At $\lambda=0$ the eigenstates $\Psi_{p}^{(n)}(\vec{k})$ are $(n=1, \ldots, q)$

$$
\begin{equation*}
\Psi_{p}^{(n)}(\vec{k})=\delta_{p n} \tag{12.176}
\end{equation*}
$$

with eigenvalues $E_{n}^{(0)}(\vec{k})$

$$
\begin{equation*}
E_{n}^{(0)}(\vec{k})=-2 t \cos \left(k_{2}+2 \pi \frac{p}{q} n\right) \tag{12.177}
\end{equation*}
$$

The spectrum then has $q$ generally non-degenerate bands with dispersion laws $E_{n}^{(0)}(\vec{k})$.

On the magnetic Brillouin zone ( $-\pi \leq k_{1}<\pi,-\pi / q \leq k_{2}<\pi / q$ ), the unperturbed bands of Eq. (12.177) cross at $\vec{k}=(k, 0)$ and $\vec{k}=\left(k_{1}, \pi / q\right)$. For example, the lowest band $(n=1)$ crosses the next $(n=2)$ band at $k_{2}=\pi / q$. The second band crosses the third one $(n=3)$ at $k_{2}=0$, etc. In general, the $n$th band (for $n$ even) crosses the $(n-1)$ th band at $k_{2}=\pi / q$ (the bottom of the $n$th band) and the $(n+1)$ th band at $k_{2}=0$ (the top of the $n$th band).

Conversely, for $n$ odd, the top of the $n$th band is at $k_{2}=0$ (where it crosses the $(n+1)$ th band), while the bottom is at $k_{2}=\pi / q$ (where it crosses the $(n-1)$ th band). The integer $n$ labels the bands as well as the gaps. The top band ( $n=q$ ) has only one crossing of the band with $n=q-1$ at $k_{2}=0\left(q\right.$ even) or $k_{2}=\pi / q$ ( $q$ odd).

The integers $I_{n}$ are determined by the changes of the phases of the wave function as $\vec{k}$ passes through the degeneracy points. We can determine these phases by using Brillouin-Wigner perturbation theory (see Section 2.3.1). The $n$th band (for $p$ and $q$ fixed) crosses the $m$ th band if $m=n-l_{n}$, where the integer $l\left(\left|l_{n}\right| \leq q / 2\right)$ is the solution of the Diophantine equation

$$
\begin{equation*}
n=q s_{n}+p l_{n} \tag{12.178}
\end{equation*}
$$

a result first derived by Thouless, Kohmoto, Nightingale, and den Nijs (Thouless et al., 1982).

The Schrödinger equation mixes $\Psi^{(n)}$ only with $\Psi^{(n \pm 1)}$. Thus, it takes $l_{n}$ orders of perturbation theory to $\operatorname{mix} \Psi^{(n)}$ and $\Psi^{(n-l)}$. For $\vec{k}$ close to the degeneracy points, the eigenstates will have almost all of their weight in $\Psi^{(n)}$ and $\Psi^{(n-l)}$. Thus, we get an effective Schrödinger equation of the form

$$
\begin{align*}
E_{n}^{(0)} \Psi_{n}+V_{n, n-l} \Psi_{n-l} & =E \Psi_{n} \\
V_{n, n-l} \Psi_{n}+E_{n-l}^{(0)} \Psi_{n-l} & =E \Psi_{n-l} \tag{12.179}
\end{align*}
$$

The matrix element $V_{n, n-l}$ is (approximately) equal to

$$
\begin{equation*}
V_{n, n-l}=V_{n-l, n}^{*} \simeq\left(-\lambda t e^{-i k_{1}}\right) \prod_{r=n-l+1}^{n-1}\left[\frac{-\lambda t e^{-i k_{1}}}{\frac{1}{2}\left(E_{n}^{(0)}+E_{n-l}^{(0)}\right)-E_{r}^{(0)}}\right] \tag{12.180}
\end{equation*}
$$

where $E_{n}^{(0)}(\vec{k})=-2 t \cos \left(k_{2}+2 \pi(p / q) n\right)$ are the unperturbed energy bands.
The eigenvalues of Eq. (12.179) are

$$
\begin{equation*}
E^{ \pm}(\vec{k})=\frac{1}{2}\left(E_{n}^{(0)}+E_{n-l}^{(0)}\right) \pm \sqrt{\frac{\left(E_{n}^{(0)}-E_{n-l}^{(0)}\right)^{2}}{2}+\left|V_{n, n-l}\right|^{2}} \tag{12.181}
\end{equation*}
$$

The eigenstates have amplitudes $\left(\Psi_{n}^{( \pm)}, \Psi_{n-l_{n}}^{ \pm}\right)$of the form

$$
\begin{equation*}
\Psi_{n}^{( \pm)}=\left|\Psi_{n}^{( \pm)}\right| e^{i \theta_{n}^{( \pm)}} \tag{12.182}
\end{equation*}
$$

with a similar expression for $\Psi_{n-l_{n}}^{( \pm)}$. The amplitudes $\left|\Psi_{n}^{( \pm)}\right|$are

$$
\begin{align*}
\left|\Psi_{n}^{( \pm)}\right| & =\frac{\left|V_{n, n_{l}}\right|}{\sqrt{\left|E^{( \pm)}-E_{n}^{(0)}\right|^{2}+\left|V_{n, n-l_{n}}\right|^{2}}} \\
\left|\Psi_{n-l_{n}}^{( \pm)}\right| & =\frac{\left|E^{( \pm)}-E_{n}^{(0)}\right|}{\sqrt{\left|E^{( \pm)}-E_{n}^{(0)}\right|^{2}+\left|V_{n, n-l_{n}}\right|^{2}}} \tag{12.183}
\end{align*}
$$

The phases $\theta_{n}^{( \pm)}$are given by

$$
\begin{align*}
& \theta_{n}^{(+)}-\theta_{n-l_{n}}^{(+)}=\arg \left(V_{n, n-l_{n}}\right)+\pi=-k_{1} l_{n}-\left(l_{n}-1\right) \pi  \tag{12.184}\\
& \theta_{n}^{(-)}-\theta_{n-l_{n}}^{(-)}=\arg \left(V_{n, n-l_{n}}\right)=-k_{1} l_{n}-l_{n} \pi
\end{align*}
$$

Let us consider the $n$th band with $n$ even. The result is the same for $n$ odd. At $k_{2}=\pi / q$ it crosses the $(n+1)$ th band. At this degeneracy we have to choose the solution $E^{(-)}$for the top of the $n$th band. Conversely, at $k_{2}=0$, the $n$th band crosses the $(n-1)$ th band. Thus, we have to choose the solution $E^{(+)}$for the bottom of the $n$th band.

Let us compute the circulation of the vector field $\mathcal{A}_{j}^{(n)}(\vec{k})$ for the $n$th band for $\vec{k}=\left(k_{1}, k_{2}\right)$ along the closed contour $\gamma$ (which encloses half of the magnetic Brillouin zone):

$$
\begin{equation*}
\gamma:(0,0) \rightarrow(\pi, 0) \rightarrow(\pi, \pi / q) \rightarrow(0, \pi / q) \rightarrow(0,0) \tag{12.185}
\end{equation*}
$$

On the first and third segments of the contour $\gamma, k_{2}$ is constant, while $k_{1}$ changes from zero to $\pi$ and from $\pi$ to zero, respectively. The component $\mathcal{A}_{1}^{(n)}$ is then equal to

$$
\begin{align*}
\left.\mathcal{A}_{1}^{(n)}\right|_{k_{2}=\pi / q} & =\left.\frac{\partial}{\partial k_{1}} \arg \left[V_{n, n-l_{n}}\right]\right|_{k_{2}=\pi / q}=-l_{n} \\
\left.\mathcal{A}_{1}^{(n)}\right|_{k_{2}=0} & =\left.\frac{\partial}{\partial k_{1}} \arg \left[V_{n-1, n-1-l_{n-1}}\right]\right|_{k_{2}=0}=-l_{n-1} \tag{12.186}
\end{align*}
$$

For the second and fourth segments we need to compute $\mathcal{A}_{2}^{(n)}$. Since the phases have no essential dependence on $k_{2}$, we get

$$
\begin{equation*}
\left.\mathcal{A}_{2}^{(n)}\right|_{k_{1}=0, \pi}=0 \tag{12.187}
\end{equation*}
$$

The results summarized by Eq. (12.184) and Eq. (12.186) show that the circulation of $\mathcal{A}_{j}^{(n)}$ on the contour $\gamma$ of Eq. (12.185) is

$$
\begin{equation*}
I_{n}=\frac{1}{2 \pi} \oint_{\gamma} \mathcal{A}_{j}^{(n)} d k_{j}=\int_{0}^{\pi} \frac{d k_{1}}{2 \pi}\left[\mathcal{A}_{1}^{(n)}\left(k_{1}, 0\right)-\mathcal{A}_{1}^{(n)}\left(k_{1}, \frac{\pi}{q}\right)\right] \tag{12.188}
\end{equation*}
$$

Thus, $I_{n}$ of the $n$th band is

$$
\begin{equation*}
I_{n}=l_{n}-l_{n-1} \tag{12.189}
\end{equation*}
$$

Therefore, the contribution from the $n$th band to the Hall conductance is

$$
\begin{equation*}
\left(\sigma_{x y}\right)^{(n)}=\frac{e^{2}}{h}\left(l_{n}-l_{n-1}\right) \tag{12.190}
\end{equation*}
$$

For a problem with $r$ filled bands we have

$$
\begin{equation*}
\left(\sigma_{x y}\right)=\frac{e^{2}}{h} \sum_{n=1}^{r}\left(l_{n}-l_{n-1}\right)=\frac{e^{2}}{h}\left(l_{r}-l_{0}\right) \equiv \frac{e^{2}}{h} l_{r} \tag{12.191}
\end{equation*}
$$

where we have used the definition $l_{0}=0$.
This result, which was originally derived by Thouless, Kohmoto, Nightingale, and den Nijs (Thouless et al., 1982), shows that $\sigma_{x y}$ is determined by the topological invariant $I_{n}$ which characterizes the Landau-Hofstadter bands. This integer is the solution of the Diophantine equation. The integers $l_{n}$ may be positive or negative and are restricted to be in the range $|l| \leq q / 2$. Thus, in contrast to the continuum result, the quantized Hall conductance of a filled Landau-Hofstadter band may be positive or negative. This surprising result is a Bragg-scattering effect due to the magnetic unit cells. Let us consider an example with $p=11$ and $q=7$. There are seven bands. Let us use the notation $\left(s_{n}, l_{n}\right)$ for the two integers which solve the Diophantine equation. The solutions are $(-3,2),(-6,4),(2,-1),(-1,1),(7,-4),(4,-2)$, and $(1,0)$ for $n$ ranging from $n=1$ up to $n=7$. Notice that the bands with $n=3,5$, and 6 have $l=-1,-4$, and -2 , respectively, and carry negative Hall conductance.

The Diophantine equation has a unique solution for $q$ odd. For $q$ even, the band with index $n=q / 2$ has two possible solutions, namely $((1-p) / 2, q / 2)$ and $((1+p) / 2,-q / 2)$. What happens here is that, for $q$ even and $n=q / 2$, the Landau-Hofstadter bands have a degeneracy, which we have already discussed in Section 12.2. Depending on how this degeneracy is removed, the conductance is $+q / 2,-q / 2$, or even zero. This observation is important to the physics of
flux phases. Let us finally remark that the solutions of the Diophantine equation, Eq. (12.178), $\sum_{n=1}^{q} s_{n}$ and $\sum_{n=1}^{q} l_{n}$ obey the sum rules

$$
\begin{equation*}
\sum_{n=1}^{q} s_{n}=\frac{q+1}{2}, \quad \sum_{n=1}^{q} l_{n}=0 \tag{12.192}
\end{equation*}
$$

for $q$ odd, and

$$
\begin{equation*}
\sum_{n=1}^{q} s_{n}=\frac{q+1 \mp p}{2}, \quad \sum_{n=1}^{q} l_{n}= \pm \frac{q}{2} \tag{12.193}
\end{equation*}
$$

for $q$ even. The ambiguity in the sum rule is due precisely to the double solution at $n=q / 2$ ( $q$ even).
