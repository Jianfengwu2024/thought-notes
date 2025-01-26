## 4  The scaling hypothesis

标度假说，核心为何？

==**同质假设，关联发散，小千世界，自相似性。**==

==**重整化群，高斯模型，临界指数，各显其义。**==



### 4.1 The homogeneity assumption

In the previous chapters the singular behavior in the vicinity of a continuous transition was characterized by a set of critical exponents $\{\alpha, \beta, \gamma, \delta, \nu, \eta, \cdots\}$. **==The saddle-point estimates of these exponents were found to be unreliable due to the importance of fluctuations.==** Since the various thermodynamic quantities are related, these exponents can not be independent of each other. The goal of this chapter is to discover the relationships between them, and to **find the minimum number of independent exponents needed to describe the critical point.**

Fig. 4.1 The vicinity of the critical point in the $(t, h)$ plane, with crossover boundaries indicated by dashed lines.
![](https://cdn.mathpix.com/cropped/2024_12_27_3657433bbdebf76e536dg-065.jpg?height=277&width=507&top_left_y=1353&top_left_x=858)

The non-analytical structure is a coexistence line for $t<0$ and $h=0$ that terminates at the critical point $t=h=0$. The various exponents describe the leading singular behavior of a thermodynamic quantity $Q(t, h)$, in the vicinity of this point. A basic quantity in the canonical ensemble is the free energy, which in the saddle point approximation is given by

$$
f(t, h)=\min \left[\frac{t}{2} m^{2}+u m^{4}-h . m\right]_{m}=\left\{\begin{array}{cl}
-\frac{1}{16} \frac{t^{2}}{u} & \text { for } h=0, t<0  \tag{4.1}\\
-\frac{3}{4^{4 / 3}} \frac{h^{4 / 3}}{u^{1 / 3}} & \text { for } h \neq 0, t=0 .
\end{array}\right.
$$

The singularities in the free energy can in fact be described by a single homogeneous function in $t$ and $h$, as ${ }^{1}$

$$
\begin{equation*}
f(t, h)=|t|^{2} g_{f}\left(h /|t|^{\Delta}\right) \tag{4.2}
\end{equation*}
$$

The function $g_{f}$ only depends on the combination $x \equiv h /|t|^{\Delta}$, where $\Delta$ is known as the gap exponent. The asymptotic behavior of $g_{f}$ is easily obtained by comparing Eqs. (4.1) and (4.2). The $h=0$ limit is recovered if $\lim _{x \rightarrow 0} g_{f}(x) \sim 1 / u$, while to get the proper power of $h$, we must set $\lim _{x \rightarrow \infty} g_{f}(x) \sim x^{4 / 3} / u^{1 / 3}$. The latter implies $f \sim|t|^{2} h^{4 / 3} /\left(u^{1 / 3}|t|^{4 \Delta / 3}\right)$. Since $f$ can have no $t$ dependence along $t=0$, the gap exponent (corresponding to Eq. 4.1) has the value

$$
\begin{equation*}
\Delta=\frac{3}{2} . \tag{4.3}
\end{equation*}
$$

The assumption of homogeneity is that, on going beyond the saddle point approximation, the singular form of the free energy (and any other thermodynamic quantity) retains the homogeneous form

$$
\begin{equation*}
f_{\text {sing }}(t, h)=|t|^{2-\alpha} g_{f}\left(h /|t|^{\Delta}\right) \tag{4.4}
\end{equation*}
$$

The actual exponents $\alpha$ and $\Delta$ depend on the critical point being considered. The dependence on $t$ is chosen to reproduce the heat capacity singularity at $h=0$. The singular part of the energy is obtained from (say for $t>0$ )

$$
\begin{align*}
E_{\text {sing }} & \sim \frac{\partial f}{\partial t} \sim(2-\alpha)|t|^{1-\alpha} g_{f}\left(h /|t|^{\Delta}\right)-\Delta h|t|^{1-\alpha-\Delta} g_{f}^{\prime}\left(h /|t|^{\Delta}\right) \\
& \sim|t|^{1-\alpha}\left[(2-\alpha) g_{f}\left(h /|t|^{\Delta}\right)-\frac{\Delta h}{|t|^{\Delta}} g_{f}^{\prime}\left(h /|t|^{\Delta}\right)\right] \equiv|t|^{1-\alpha} g_{E}\left(h /|t|^{\Delta}\right) . \tag{4.5}
\end{align*}
$$

Thus the derivative of one homogeneous function is another. Similarly, the second derivative takes the form (again for $t>0$ )

$$
\begin{equation*}
C_{\text {sing }} \sim-\frac{\partial^{2} f}{\partial t^{2}} \sim|t|^{-\alpha} g_{C}\left(h /|t|^{\Delta}\right) \tag{4.6}
\end{equation*}
$$

reproducing the scaling $C_{\text {sing }} \sim|t|^{-\alpha}$, as $h \rightarrow 0$.
It may appear that we have the freedom to postulate a more general form

$$
\begin{equation*}
C_{ \pm}(t, h)=|t|^{-\alpha_{ \pm}} g_{ \pm}\left(h /|t|^{\Delta_{ \pm}}\right) \tag{4.7}
\end{equation*}
$$

with different functions and exponents for $t>0$ and $t<0$ that match at $t=0$. However, this is ruled out by the condition that the free energy is analytic everywhere except on the coexistence line for $h=0$ and $t<0$, as shown as[^5]follows: Consider a point at $t=0$ and finite $h$. By assumption, the function $C$ is perfectly analytic in the vicinity of this point, expandable in a Taylor series,
$$
\begin{equation*}
C\left(t \ll h^{\Delta}\right)=\mathcal{A}(h)+t \mathcal{B}(h)+\mathcal{O}\left(t^{2}\right) \tag{4.8}
\end{equation*}
$$

Furthermore, the same expansion should be obtained from both $C_{+}$and $C_{-}$. But Eq. (4.7) leads to the expansions,

$$
\begin{equation*}
C_{ \pm}=|t|^{-\alpha_{ \pm}}\left[A_{ \pm}\left(\frac{h}{|t|^{\Delta_{ \pm}}}\right)^{p_{ \pm}}+B_{ \pm}\left(\frac{h}{|t|^{\Delta_{ \pm}}}\right)^{q_{ \pm}}+\cdots\right] \tag{4.9}
\end{equation*}
$$

where $\left\{p_{ \pm}, q_{ \pm}\right\}$are the leading powers in asymptotic expansions of $g_{ \pm}$for large arguments, and $\left\{A_{ \pm}, B_{ \pm}\right\}$are the corresponding prefactors. Matching to the Taylor series in Eq. (4.8) requires $p_{ \pm} \Delta_{ \pm}=-\alpha_{ \pm}$and $q_{ \pm} \Delta_{ \pm}=-\left(1+\alpha_{ \pm}\right)$, and leads to

$$
\begin{equation*}
C_{ \pm}\left(t \ll h^{\Delta}\right)=A_{ \pm} h^{-\alpha_{ \pm} / \Delta_{ \pm}}+B_{ \pm} h^{-\left(1+\alpha_{ \pm}\right) / \Delta_{ \pm}}|t|+\cdots \tag{4.10}
\end{equation*}
$$

Continuity at $t=0$ now forces $\alpha_{+} / \Delta_{+}=\alpha_{-} / \Delta_{-}$, and $\left(1+\alpha_{+}\right) / \Delta_{+}=$ $\left(1+\alpha_{-}\right) / \Delta_{-}$, which in turn implies

$$
\left\{\begin{array}{l}
\alpha_{+}=\alpha_{-} \equiv \alpha  \tag{4.11}\\
\Delta_{+}=\Delta_{-} \equiv \Delta
\end{array}\right.
$$

Despite using $|t|$ in the postulated scaling form, we can still ensure the analyticity of the function at $t=0$ for finite $h$ by appropriate choice of parameters, e.g. by setting $B_{-}=-B_{+}$to match Eq. (4.10) to the analytic form in Eq. (4.8). Having established this result, we can be somewhat careless henceforth in replacing $|t|$ in the scaling equations with $t$. Naturally these arguments apply to any quantity $Q(t, h)$.

Starting from the free energy in Eq. (4.4), we can compute the singular parts of other quantities of interest:

- The magnetization is obtained from

$$
\begin{equation*}
m(t, h) \sim \frac{\partial f}{\partial h} \sim|t|^{2-\alpha-\Delta} g_{m}\left(h /|t|^{\Delta}\right) . \tag{4.12}
\end{equation*}
$$

In the limit $x \rightarrow 0, g_{m}(x)$ is a constant, and

$$
\begin{equation*}
m(t, h=0) \sim|t|^{2-\alpha-\Delta}, \quad \Longrightarrow \quad \beta=2-\alpha-\Delta \tag{4.13}
\end{equation*}
$$

On the other hand, if $x \rightarrow \infty, g_{m}(x) \sim x^{p}$, and

$$
\begin{equation*}
m(t=0, h) \sim|t|^{2-\alpha-\Delta}\left(\frac{h}{|t|^{\Delta}}\right)^{p} \tag{4.14}
\end{equation*}
$$

Since this limit is independent of $t$, we must have $p \Delta=2-\alpha-\Delta$. Hence

$$
\begin{equation*}
m(t, h=0) \sim h^{(2-\alpha-\Delta) / \Delta} \quad \Longrightarrow \delta=\Delta /(2-\alpha-\Delta)=\Delta / \beta \tag{4.15}
\end{equation*}
$$

- Similarly, the susceptibility is computed as

$$
\begin{align*}
\chi(t, h) \sim \frac{\partial m}{\partial h} \sim|t|^{2-\alpha-2 \Delta} g_{\chi}\left(h /|t|^{\Delta}\right) & \Rightarrow \chi(t, h=0) \sim|t|^{2-\alpha-2 \Delta}  \tag{4.16}\\
& \Rightarrow \gamma=2 \Delta-2+\alpha .
\end{align*}
$$

Thus, the consequences of the homogeneity assumption are:
(1) The singular parts of all critical quantities $Q(t, h)$ are homogeneous, with the same exponents above and below the transition.
(2) Because of the interconnections via thermodynamic derivatives, the same gap exponent, $\Delta$, occurs for all such quantities.
(3) All (bulk) critical exponents can be obtained from only two independent ones, e.g. $\alpha$ and $\Delta$.
(4) As a result of the above, there are a number of exponent identities. For example, Eqs. (4.13), (4.15), and (4.16) imply

$$
\begin{align*}
& \alpha+2 \beta+\gamma=\alpha+2(2-\alpha-\Delta)+(2 \Delta-2+\alpha)=2 \\
& \delta-1=\frac{\Delta}{2-\alpha-\Delta}-1=\frac{2 \Delta-2+\alpha}{2-\alpha-\Delta}=\frac{\gamma}{\beta} \quad \text { (Wushbrooke's identity), }  \tag{4.17}\\
& \text { (Widom's identity). }
\end{align*}
$$

These identities can be checked against the following table of critical exponents. The first three rows are based on a number of theoretical estimates in $d=3$; the last row comes from an exact solution in $d=2$. The exponent identities are completely consistent with these values, as well as with all reliable experimental data.

|       | $\alpha$ | $\beta$ | $\gamma$ | $\delta$ | $\nu$ | $\eta$  |
| :---- | :------: | :-----: | :------: | :------: | :---: | :-----: |
| $n=1$ |   0.11   |  0.32   |   1.24   |   4.9    | 0.63  |  0.04   |
| $n=2$ |  -0.01   |  0.35   |   1.32   |   4.7    | 0.67  |  0.04   |
| $n=3$ |  -0.11   |  0.36   |   1.39   |   4.9    | 0.70  |  0.04   |
| $n=1$ |    0     | $1 / 8$ | $7 / 4$  |    15    |   1   | $1 / 4$ |

### 4.2 Divergence of the correlation length

The homogeneity assumption relates to the free energy and quantities derived from it. It says nothing about the behavior of correlation functions. An important property of a critical point is the divergence of the correlation length which is responsible for, and can be deduced from, diverging response functions. In

Fig. 4.2 A system of linear size $L$, presented as (approximately) independent components of size $\xi$, the correlation length.
order to obtain an identity involving the exponent $\nu$ for the divergence of the correlation length, we replace the homogeneity assumption for the free energy with the following two conditions:
(1) The correlation length $\xi$ is a homogeneous function,

$$
\begin{equation*}
\xi(t, h) \sim|t|^{-\nu} g\left(h /|t|^{\Delta}\right) . \tag{4.18}
\end{equation*}
$$

(For $t=0, \xi$ diverges as $h^{-\nu_{h}}$ with $\nu_{h}=\nu / \Delta$.)
(2) Close to criticality, the correlation length $\xi$ is the most important length in the system, and is solely responsible for singular contributions to thermodynamic quantities.
![](https://cdn.mathpix.com/cropped/2024_12_27_3657433bbdebf76e536dg-069.jpg?height=288&width=281&top_left_y=773&top_left_x=969)

The second condition determines the singular part of the free energy. Since $\ln Z(t, h)$ is extensive and dimensionless, it must take the form

$$
\begin{equation*}
\ln Z=\left(\frac{L}{\xi}\right)^{d} \times g_{s}+\cdots+\left(\frac{L}{a}\right)^{d} \times g_{a}, \tag{4.19}
\end{equation*}
$$

where $g_{s}$ and $g_{a}$ are non-singular functions of dimensionless parameters ( $a$ is an appropriate microscopic length). The leading singular part of the free energy comes from the first term, and behaves as

$$
\begin{equation*}
f_{\text {sing }}(t, h) \sim \frac{\ln Z}{L^{d}} \sim \xi^{-d} \sim|t|^{d v} g_{f}\left(h /|t|^{\Delta}\right) . \tag{4.20}
\end{equation*}
$$

A simple interpretation of the above result is obtained by dividing the system into units of the size of the correlation length. Each unit is then regarded as an independent random variable, contributing a constant factor to the critical free energy. The number of units grows as $(L / \xi)^{d}$, leading to Eq. (4.19).
The consequences of the above assumptions are:
(1) The homogeneity of $f_{\text {sing }}(t, h)$ emerges naturally.
(2) We obtain the additional exponent relation

$$
\begin{equation*}
2-\alpha=d \nu \quad \text { (Joshephson's identity). } \tag{4.21}
\end{equation*}
$$

Identities obtained from the generalized homogeneity assumption involve the space dimension $d$, and are known as hyperscaling relations. The relation between $\alpha$ and $\nu$ is consistent with the exponents in the above table. However, it does not agree with the saddle point values, $\alpha=0$ and $\nu=1 / 2$, which are
valid for $d>4$. Any theory of critical behavior must thus account for the validity of this relation in low dimensions, and its breakdown for $d>4$.

### 4.3 Critical correlation functions and self-similarity

One exponent that has not so far been accounted for is $\eta$, describing the decay of correlation functions at criticality. Exactly at the critical point, the correlation length is infinite, and there is no other length scale (except sample size) to cut off the decay of correlation functions. Thus all correlations decay as a power of the separation. As discussed in the previous chapter, the magnetization correlations fall off as

$$
\begin{equation*}
G_{m, m}^{c}(\mathbf{x}) \equiv\langle m(\mathbf{x}) m(\mathbf{0})\rangle-\langle m\rangle^{2} \sim 1 /|\mathbf{x}|^{d-2+\eta} . \tag{4.22}
\end{equation*}
$$

Similarly, we can define an exponent $\eta^{\prime}$ for the decay of energy-energy correlations as

$$
\begin{equation*}
G_{E, E}^{c}(\mathbf{x})=\langle\mathcal{H}(\mathbf{x}) \mathcal{H}(\mathbf{0})\rangle-\langle\mathcal{H}\rangle^{2} \sim 1 /|\mathbf{x}|^{d-2+\eta^{\prime}} \tag{4.23}
\end{equation*}
$$

Away from criticality, the power laws are cut off for distances $|\mathbf{x}| \gg \xi$. As the response functions can be obtained from integrating the connected correlation functions, there are additional exponent identities, such as (Fisher's identity)

$$
\begin{equation*}
\chi \sim \int \mathrm{d}^{d} \mathbf{x} G_{m m}^{c}(\mathbf{x}) \sim \int^{\xi} \frac{\mathrm{d}^{d} x}{|x|^{d-2+\eta}} \sim \xi^{2-\eta} \sim|t|^{-\nu(2-\eta)} \quad \Longrightarrow \quad \gamma=(2-\eta) \nu . \tag{4.24}
\end{equation*}
$$

Similarly, for the heat capacity,
$C \sim \int \mathrm{~d}^{d} \mathbf{x} G_{E E}^{c}(\mathbf{x}) \sim \int^{\xi} \frac{\mathrm{d}^{d} x}{|x|^{d-2+\eta^{\prime}}} \sim \xi^{2-\eta^{\prime}} \sim|t|^{-\nu\left(2-\eta^{\prime}\right)}, \quad \Longrightarrow \alpha=\left(2-\eta^{\prime}\right) \nu$.
As before, two independent exponents are sufficient to describe all singular critical behavior.

An important consequence of these scaling ideas is that the critical system has an additional dilation symmetry. Under a change of scale, the critical correlation functions behave as

$$
\begin{equation*}
G_{\text {critical }}(\lambda \mathbf{x})=\lambda^{p} G_{\text {critical }}(\mathbf{x}) \tag{4.26}
\end{equation*}
$$

This implies a scale invariance or self-similarity: if a snapshot of the critical system is blown up by a factor of $\lambda$, apart from a change of contrast (multiplication by $\lambda^{p}$ ), the resulting snapshot is statistically similar to the original one. Such statistical self-similarity is the hallmark of fractal geometry. As discussed by Mandelbrot, many naturally occurring forms (clouds, shore-lines, river basins, etc.) exhibit such behavior. The Landau-Ginzburg probability was constructed on the basis of local symmetries such as rotation invariance. If we could add to the list of constraints the requirement of dilation symmetry, the resulting probability would indeed describe the critical point. Unfortunately,
it is not possible to directly see how such a requirement constrains the effective Hamiltonian. One notable exception is in $d=2$, where dilation symmetry implies conformal invariance, and a lot of information can be obtained by constructing conformally invariant theories. We shall instead prescribe a less direct route of following the effects of the dilation operation on the effective energy: the renormalization group procedure.

### 4.4 The renormalization group (conceptual)

Success of the scaling theory in correctly predicting various exponent identities strongly supports the assumption that close to the critical point the correlation length, $\xi$, is the only important length scale, and that microscopic length scales are irrelevant. The critical behavior is dominated by fluctuations that are selfsimilar up to the scale $\xi$. The self-similarity is of course only statistical, in that a magnetization configuration is generated with a weight $W[\vec{m}(\mathbf{x})] \propto$ $\exp \{-\beta \mathcal{H}[\vec{m}(\mathbf{x})]\}$. Kadanoff suggested taking advantage of the self-similarity of the fluctuations to gradually eliminate the correlated degrees of freedom at length scales $x \ll \xi$, until one is left with the relatively simple, uncorrelated degrees of freedom at scale $\xi$. This is achieved through a procedure called the renormalization group (RG), whose conceptual foundation is the three steps outlined in this section.
(1) Coarse grain: There is an implicit short distance length cutoff scale $a$ for allowed variations of $\vec{m}(\mathbf{x})$ in the system. This is the lattice spacing for a model of spins, or the coarse graining scale that underlies the Landau-Ginzburg Hamiltonian. In a digital picture of the system, $a$ corresponds to the pixel size. The first step of the RG is to decrease the resolution by changing this minimum scale to $b a(b>1)$. The coarse-grained magnetization is then given by

$$
\begin{equation*}
m_{i}(\mathbf{x})=\frac{1}{b^{d}} \int_{\text {Cell centered at } \mathbf{x}} \mathrm{d}^{d} \mathbf{x}^{\prime} m_{i}\left(\mathbf{x}^{\prime}\right) \tag{4.27}
\end{equation*}
$$

(2) Rescale: Due to the change in resolution, the coarse grained "picture" is grainier than the original. The original resolution of $a$ can be restored by decreasing all length scales by a factor of $b$, i.e. by setting

$$
\begin{equation*}
\mathbf{x}_{\mathrm{new}}=\frac{\mathbf{x}_{\text {old }}}{b} \tag{4.28}
\end{equation*}
$$

(3) Renormalize: The variations of fluctuations in the rescaled magnetization profile is in general different from the original, i.e. there is a difference in contrast between the pictures. This can be remedied by introducing a change of contrast by a factor $\zeta$, through defining a renormalized magnetization

$$
\begin{equation*}
\vec{m}_{\text {new }}\left(\mathbf{x}_{\text {new }}\right)=\frac{1}{\zeta b^{d}} \int_{\text {Cell centered at } b \mathbf{x}_{\text {new }}} \mathrm{d}^{d} \mathbf{x}^{\prime} \vec{m}\left(\mathbf{x}^{\prime}\right) \tag{4.29}
\end{equation*}
$$

By following these steps, for each configuration $\vec{m}_{\text {old }}(\mathbf{x})$, we generate a renormalized configuration $\vec{m}_{\text {new }}(\mathbf{x})$. Equation (4.29) can be regarded as a mapping from one set of random variables to another, and can be used to construct the probability distribution, or weight $W_{b}\left[\vec{m}_{\text {new }}(\mathbf{x})\right] \equiv \exp \left\{-\beta \mathcal{H}_{b}\left[\vec{m}_{\text {new }}(\mathbf{x})\right]\right\}$. Kadanoff's insight was that since on length scales less than $\xi$, the renormalized configurations are statistically similar to the original ones, they may be distributed by a Hamiltonian $\beta \mathcal{H}_{b}$ that is also "close" to the original. In particular, the original Hamiltonian becomes critical by tuning the two parameters $t$ and $h$ to zero: at this point the original configurations are statistically similar to those of the rescaled system. The critical Hamiltonian should thus be invariant under rescaling and renormalization. In the original problem, one moves away from criticality for finite $t$ and $h$. Kadanoff postulated that the corresponding renormalized Hamiltonian is similarly described by non-zero $t_{\text {new }}$ and/or $h_{\text {new }}$.

The assumption that the closeness of the original and renormalized Hamiltonians to criticality is described by the two parameters $t$ and $h$ greatly simplifies the analysis. The effect of the RG transformation on the probability of configurations is now described by the two parameter mappings $t_{\text {new }} \equiv t_{b}\left(t_{\text {old }}, h_{\text {old }}\right)$ and $h_{\text {new }} \equiv h_{b}\left(t_{\text {old }}, h_{\text {old }}\right)$. The next step is to note that since the transformation only involves changes at the shortest length scales, it cannot cause any singularities. The renormalized parameters must be analytic functions of the original ones, and hence expandable as

$$
\left\{\begin{array}{l}
t_{b}(t, h)=A(b) t+B(b) h+\cdots  \tag{4.30}\\
h_{b}(t, h)=C(b) t+D(b) h+\cdots
\end{array}\right.
$$

Note that there are no constant terms in the above Taylor expansions. This expresses the condition that if $\beta \mathcal{H}$ is at its critical point $(t=h=0)$, then $\beta \mathcal{H}_{b}$ is also at criticality, and $t_{\text {new }}=h_{\text {new }}=0$. Furthermore, due to rotational symmetry, under the combined transformation $(m(x) \mapsto-m(x), h \mapsto-h, t \mapsto$ $t)$ the weight of a configuration is unchanged. As this symmetry is preserved by the RG, the coefficients $B$ and $C$ in the above expression must be zero, leading to the further simplifications

$$
\left\{\begin{array}{l}
t_{b}(t, h)=A(b) t+\cdots  \tag{4.31}\\
h_{b}(t, h)=D(b) h+\cdots
\end{array}\right.
$$

The remaining coefficients $A(b)$ and $D(b)$ depend on the (arbitrary) rescaling factor $b$, and trivially $A(1)=D(1)=1$ for $b=1$. Since the above transformations can be carried out in sequence, and the net effect of rescalings of $b_{1}$ and $b_{2}$ is a change of scale by $b_{1} b_{2}$, the RG procedure is sometimes referred to as a semi-group. The term applies to the action of RG on the space of configurations: each magnetization profile is mapped uniquely to one at larger scale, but the inverse process is non-unique as some short scale information is lost in the coarse graining. (There is in fact no problem with inverting the transformation in the space of the parameters of the Hamiltonian.) The dependence of $A$ and
$D$ in Eqs. (4.31) on $b$ can be deduced from this group property. Since at $b=1$, $A=D=1$, and $t\left(b_{1} b_{2}\right) \approx A\left(b_{1}\right) A\left(b_{2}\right) t \approx A\left(b_{1} b_{2}\right) t$, we must have $A(b)=b^{y_{t}}$, and similarly $D(b)=b^{y_{h}}$, yielding

$$
\left\{\begin{align*}
t^{\prime} & \equiv t_{b}=b^{y_{t}} t+\cdots  \tag{4.32}\\
h^{\prime} & \equiv h_{b}=b^{y_{h}} h+\cdots
\end{align*}\right.
$$

If $\beta \mathcal{H}_{\text {old }}$ is slightly away from criticality, it is described by a large but finite correlation length $\xi_{\text {old }}$. After the RG transformation, due to the rescaling in Eq. (4.28), the new correlation length is smaller by a factor of $b$. Hence the renormalized Hamiltonian is less critical, and the RG procedure moves the parameters further away from the origin, i.e. the exponents $y_{t}$ and $y_{h}$ must be positive.

We can now explore some consequences of the assumptions leading to Eqs. (4.32).
(1) The free energy: The RG transformation is a many to one map of the original configurations to new ones. Since the weight of a new configuration, $W^{\prime}\left(\left[m^{\prime}\right]\right)$, is the sum of the weights $W([m])$, of old configurations, the partition function is preserved, i.e.

$$
\begin{equation*}
Z=\int D m W([m])=\int D m^{\prime} W^{\prime}\left(\left[m^{\prime}\right]\right)=Z^{\prime} \tag{4.33}
\end{equation*}
$$

Hence $\ln Z=\ln Z^{\prime}$, and the corresponding free energies are related by

$$
\begin{equation*}
V f(t, h)=V^{\prime} f\left(t^{\prime}, h^{\prime}\right) \tag{4.34}
\end{equation*}
$$

In $d$ dimensions, the rescaled volume is smaller by a factor of $b^{d}$, and

$$
\begin{equation*}
f(t, h)=b^{-d} f\left(b^{y_{t}} t, b^{y_{t}} h\right), \tag{4.35}
\end{equation*}
$$

where we have made use of the assumption that the two free energies are obtained from the same Hamiltonian in which only the parameters $t$ and $h$ have changed according to Eqs. (4.32). Equation (4.35) describes a homogeneous function of $t$ and $h$. This is made apparent by choosing a rescaling factor $b$ such that $b^{y_{t}}$ is a constant, say unity, i.e. $b=t^{-1 / y_{t}}$, leading to

$$
\begin{equation*}
f(t, h)=t^{d / y_{t}} f\left(1, h / t^{y_{h} / y_{t}}\right) \equiv t^{d / y_{t}} g_{f}\left(h / t^{y_{h} / y_{t}}\right) . \tag{4.36}
\end{equation*}
$$

We have thus recovered the scaling form in Eq. (4.4), and can identify the exponents as

$$
\begin{equation*}
2-\alpha=d / y_{t}, \quad \Delta=y_{h} / y_{t} . \tag{4.37}
\end{equation*}
$$

(2) Correlation length: All length scales are reduced by a factor of $b$ during the RG transformation. This is also true of the correlation length, $\xi^{\prime}=\xi / b$, implying

$$
\begin{equation*}
\xi(t, h)=b \xi\left(b^{y_{t}} t, b^{y_{h}} h\right)=t^{-1 / y_{t}} \xi\left(1, h / t^{y_{h} / y_{t}}\right) \sim t^{-\nu} . \tag{4.38}
\end{equation*}
$$

This identifies $\nu=1 / y_{t}$, and using Eq. (4.37) the hyperscaling relation, $2-\alpha=d \nu$, is recovered.
(3) Magnetization: From the homogenous form of the free energy (Eq. 4.36), we can obtain other bulk quantities such as magnetization. Alternatively, from the RG results for $Z, V$, and $h$, we may directly conclude

$$
\begin{equation*}
m(t, h)=-\frac{1}{V} \frac{\partial \ln Z(t, h)}{\partial h}=-\frac{1}{b^{d} V^{\prime}} \frac{\partial \ln Z^{\prime}\left(t^{\prime}, h^{\prime}\right)}{b^{-y_{h}} \partial h^{\prime}}=b^{y_{h}-d} m\left(b^{y_{t}} t, b^{y_{h}} h\right) . \tag{4.39}
\end{equation*}
$$

Choosing $b=t^{-1 / y_{t}}$, we obtain $\beta=\left(y_{h}-d\right) / y_{t}$, and $\Delta=y_{h} / y_{t}$ as before.
It is thus apparent that quite generally, the singular part of any quantity $X$ has a homogeneous form

$$
\begin{equation*}
X(t, h)=b^{y_{X}} X\left(b^{y_{t}} t, b^{y_{h}} h\right) . \tag{4.40}
\end{equation*}
$$

For any conjugate pair of variables, contributing a term $\int \mathrm{d}^{d} \mathbf{x} F \cdot X$ to the Hamiltonian, the scaling dimensions are related by $y_{X}=y_{F}-d$, where $F^{\prime}=b^{y_{F}} F$ under RG.

### 4.5 The renormalization group (formal)

In the previous section we noted that all critical properties can be obtained from the recursion relations in Eqs. (4.32). Though conceptually appealing, it is not clear how such a procedure can be formally carried out. In particular, why should the forms of the two Hamiltonians be identical, and why are two parameters $t$ and $h$ sufficient to describe the transformation? In this section we outline a more formal procedure for identifying the effects of the dilation operation on the Hamiltonian. The various steps of the program are as follows:
(1) Start with the most general Hamiltonian allowed by symmetries. For example, in the presence of rotational symmetry,

$$
\begin{equation*}
\beta \mathcal{H}=\int \mathrm{d}^{d} \mathbf{x}\left[\frac{t}{2} m^{2}+u m^{4}+v m^{6}+\cdots+\frac{K}{2}(\nabla m)^{2}+\frac{L}{2}\left(\nabla^{2} m\right)^{2}+\cdots\right] . \tag{4.41}
\end{equation*}
$$

A particular system with such symmetry is therefore completely specified by a point in the (infinite-dimensional) parameter space $S \equiv(t, u, v, \cdots, K, L, \cdots)$.
(2) Apply the three steps of renormalization in configuration space: (i) coarse grain by $b$; (ii) rescale, $\mathbf{x}^{\prime}=\mathbf{x} / b$; and (iii) renormalize, $m^{\prime}=m / \zeta$. This accomplishes the change of variables,

$$
\begin{equation*}
m^{\prime}\left(\mathbf{x}^{\prime}\right)=\frac{1}{\zeta b^{d}} \int_{\text {Cell of size } b \text { centered at } b \mathbf{x}^{\prime}} \mathrm{d}^{d} \mathbf{x} m(\mathbf{x}) \tag{4.42}
\end{equation*}
$$

Given the probabilities $\mathcal{P}[m(\mathbf{x})] \propto \exp (-\beta \mathcal{H}[m(\mathbf{x})])$, for the original configurations, we can use the above change of variables to construct the corresponding probabilities $\mathcal{P}^{\prime}\left[m^{\prime}\left(\mathbf{x}^{\prime}\right)\right]$, for the new configurations. Naturally this is the most difficult step in the program.
(3) Since rotational symmetry is preserved by the RG procedure, the rescaled Hamiltonian must also be described by a point in the parameter space of Eq. (4.41), i.e.

$$
\begin{align*}
\beta \mathcal{H}^{\prime}\left[m^{\prime}\left(\mathbf{x}^{\prime}\right)\right] \equiv & \ln \mathcal{P}^{\prime}\left[m^{\prime}\left(\mathbf{x}^{\prime}\right)\right]=f_{b}+\int \mathrm{d}^{d} \mathbf{x}^{\prime}\left[\frac{t^{\prime}}{2} m^{\prime 2}+u^{\prime} m^{\prime 4}\right. \\
& \left.+v^{\prime} m^{\prime 6}+\cdots+\frac{K^{\prime}}{2}\left(\nabla m^{\prime}\right)^{2}+\frac{L^{\prime}}{2}\left(\nabla^{2} m^{\prime}\right)^{2}+\cdots\right] . \tag{4.43}
\end{align*}
$$

The renormalized parameters are functions of the original ones, i.e. $t^{\prime}=t_{b}(t, u, \ldots)$; $u^{\prime}=u_{b}(t, u, \ldots)$, etc., defining a mapping $S^{\prime}=\Re_{b} S$ in parameter space.
(4) The operation $\Re_{b}$ describes the effects of dilation on the Hamiltonian of the system. Hamiltonians that describe statistically self-similar configurations must thus correspond to fixed points $S^{*}$, such that $\Re_{b} S^{*}=S^{*}$. Since the correlation length, a function of Hamiltonian parameters, is reduced by $b$ under the RG operation (i.e. $\xi(S)=b \xi\left(\Re_{b} S\right)$ ), the correlation length at a fixed point must be zero or infinity. Fixed points with $\xi^{*}=0$ describe independent fluctuations at each point and correspond to complete disorder (infinite temperature), or complete order (zero temperature). A fixed point with $\xi^{*}=\infty$ describes a critical point $\left(T=T_{c}\right)$.
![](https://cdn.mathpix.com/cropped/2024_12_27_3657433bbdebf76e536dg-075.jpg?height=533&width=509&top_left_y=1201&top_left_x=857)
(5) Equations (4.32) represent a simplified case in which the parameter space is two dimensional. The point $t=h=0$ is a fixed point, and the lowest order terms in these equations describe the behavior in its neighborhood. In general, we can study the stability of a fixed point by linearizing the recursion relations in its vicinity: Under RG, a point $S^{*}+\delta S$ is transformed to

$$
\begin{equation*}
S_{\alpha}^{*}+\delta S_{\alpha}^{\prime}=S_{\alpha}^{*}+\left(\Re_{b}^{L}\right)_{\alpha \beta} \delta S_{\beta}+\cdots, \quad \text { where }\left.\quad\left(\Re_{b}^{L}\right)_{\alpha \beta} \equiv \frac{\partial S_{\alpha}^{\prime}}{\partial S_{\beta}}\right|_{S^{*}} \tag{4.44}
\end{equation*}
$$

We now diagonalize the matrix $\left(\mathfrak{R}_{b}^{L}\right)_{\alpha \beta}$ to get the eigenvectors $\mathcal{O}_{i}$, and corresponding eigenvalues $\lambda(b)_{i}$. Because of the group property ${ }^{2}$,

$$
\begin{equation*}
\mathfrak{R}_{b}^{L} \mathfrak{R}_{b^{\prime}}^{L} \mathcal{O}_{i}=\lambda(b)_{i} \lambda\left(b^{\prime}\right)_{i} \mathcal{O}_{i}=\Re_{b b^{\prime}}^{L} \mathcal{O}_{i}=\lambda\left(b b^{\prime}\right)_{i} \mathcal{O}_{i} \tag{4.45}
\end{equation*}
$$

Together with the condition $\lambda(1)_{i}=1$, the above equation implies

$$
\begin{equation*}
\lambda(b)_{i}=b^{y_{i}} . \tag{4.46}
\end{equation*}
$$

The vectors $\mathcal{O}_{i}$ are called scaling directions associated with the fixed point $S^{*}$, and $y_{i}$ are the corresponding anomalous dimensions. Any Hamiltonian in the vicinity of the fixed point is described by a point $S=S^{*}+\Sigma_{i} g_{i} \mathcal{O}_{i}$. The renormalized Hamiltonian has interaction parameters $S^{\prime}=S^{*}+\Sigma_{i} g_{i} b^{y_{i}} \mathcal{O}_{i}$. The following terminology is used to classify the eigenoperators:

- If $y_{i}>0, g_{i}$ increases under scaling, and $\mathcal{O}_{i}$ is a relevant operator.
- If $y_{i}<0, g_{i}$ decreases under scaling, and $\mathcal{O}_{i}$ is an irrelevant operator.
- If $y_{i}=0, g_{i}$ is called a marginal operator, and higher order terms are necessary to track its behavior.

The subspace spanned by the irrelevant operators is the basin of attraction of the fixed point $S^{*}$. Since $\xi$ always decreases under RG , and $\xi\left(S^{*}\right)=\infty$, then $\xi$ is also infinite for any point on the basin of attraction of $S^{*}$. For a general point in the vicinity of $S^{*}$, the correlation length satisfies

$$
\begin{equation*}
\xi\left(g_{1}, g_{2}, \cdots\right)=b \xi\left(b^{y_{1}} g_{1}, b^{y_{2}} g_{2}, \cdots\right) \tag{4.47}
\end{equation*}
$$

For a sufficiently large $b$, all the irrelevant operators scale to zero. The leading singularities of $\xi$ are then determined by the remaining set of relevant operators. In particular, if the operators are indexed in order of decreasing dimensions, we can choose $b$ such that $b^{y_{1}} g_{1}=1$. In this case, Eq. (4.47) implies

$$
\begin{equation*}
\xi\left(g_{1}, g_{2}, \cdots\right)=g_{1}^{-1 / y_{1}} f\left(g_{2} / g_{1}^{y_{2} / y_{1}}, \cdots\right) \tag{4.48}
\end{equation*}
$$

We have thus obtained an exponent $\nu_{1}=1 / y_{1}$, for the divergence of $\xi$, and a generalized set of gap exponents $\Delta_{\alpha}=y_{\alpha} / y_{1}$, associated with $g_{\alpha}$.

Let us imagine that the fixed point $S^{*}$ describes the critical point of the magnet in Eq. (4.41) at zero magnetic field. As the temperature, or some other control parameter, is changed, the coefficients of the effective Hamiltonian are altered, and the point $S$ moves along a trajectory in parameter space. Except for a single point (at the critical temperature) the magnet has a finite correlation length. This can be achieved if the trajectory taken by the point $S$ intersects the basis of attraction of $S^{*}$ only at one point. To achieve this, the basin of attraction must have co-dimension one, i.e. the fixed point $S^{*}$ must have one and only one relevant operator. This

2 The group property $\mathfrak{R}_{b}^{L} \mathfrak{R}_{b^{\prime}}^{L}=\mathfrak{R}_{b b^{\prime}}^{L}=\mathfrak{R}_{b^{\prime}}^{L} \mathfrak{R}_{b}^{L}$ also implies that the linearized matrices for different $b$ commute. It is thus possible to diagonalize them simultaneously, implying that the eigenvectors $\left\{\mathcal{O}_{i}\right\}$ are independent of $b$.
provides an explanation of universality, in that the very many microscopic details of the system make up the huge space of irrelevant operators comprising the basin of attraction. In the presence of a magnetic field, two system parameters must be adjusted to reach the critical point ( $T=T_{c}$ and $h=0$ ). Thus the magnetic field corresponds to an additional relevant operator at $S^{*}$. Again, other "odd" interactions, such as $\left\{m^{3}, m^{5}, \cdots\right\}$, should not lead to any other relevant operators.

Although the formal procedure outlined in this section is quite rigorous, it suffers from some quite obvious shortcomings: How do we actually implement the RG transformations of step (2) analytically? There are an infinite number of interactions allowed by symmetry, and hence the space of parameters $S$ is inconveniently large. How do we know a priori that there are fixed points for the RG transformation; that $\Re_{b}$ can be linearized; that relevant operators are few, etc.? Following the initial formulation of RG by Kadanoff, there was a period of uncertainty until Wilson showed how these steps can be implemented (at least perturbatively) in the Landau-Ginzburg model.

### 4.6 The Gaussian model (direct solution)

The RG approach will be applied to the Gaussian model in the next section. For the sake of later comparison, here we provide the direct solution of this problem. The Gaussian model is obtained by keeping only the quadratic terms in the Landau-Ginzburg expansion. The resulting partition function is

$$
\begin{equation*}
Z=\int \mathcal{D} \vec{m}(\mathbf{x}) \exp \left\{-\int \mathrm{d}^{d} \mathbf{x}\left[\frac{t}{2} m^{2}+\frac{K}{2}(\nabla m)^{2}+\frac{L}{2}\left(\nabla^{2} m\right)^{2}+\cdots-\vec{h} \cdot \vec{m}\right]\right\} \tag{4.49}
\end{equation*}
$$

Clearly the model is well defined only for $t \geq 0$, since there is no $m^{4}$ term to insure its stability for $t<0$. The partition function still has a singularity at $t=0$, and we can regard this as representing approaching a phase transition from the disordered side.

The quadratic form is easily evaluated by the usual rules of Gaussian integration. The kernel is first diagonalized by the Fourier modes: The allowed $\mathbf{q}$ values are discretized in a finite system of size $L$, with spacing of $2 \pi / L$. The largest $\mathbf{q}$ are limited by the lattice spacing, and confined to a Brillouin zone whose shape is determined by the underlying lattice. We shall in fact use a slightly different normalization for the Fourier modes, and keep careful track of the volume factors, by setting

$$
\left\{\begin{array}{l}
\vec{m}(\mathbf{q})=\int \mathrm{d}^{d} \mathbf{x} \mathrm{e}^{\mathrm{i} \mathbf{q} \cdot \mathbf{x}} \vec{m}(\mathbf{x})  \tag{4.50}\\
\vec{m}(\mathbf{x})=\sum_{\mathbf{q}} \frac{\mathrm{e}^{-\mathrm{i} \mathbf{q} \cdot \mathbf{x}}}{V} \vec{m}(\mathbf{q})=\int \frac{\mathrm{d}^{d} \mathbf{q}}{(2 \pi)^{d}} \mathrm{e}^{-\mathrm{i} \mathbf{q} \cdot \mathbf{x}} \vec{m}(\mathbf{q})
\end{array}\right.
$$

(We should really use a different symbol, such as $\tilde{m}_{i}(\mathbf{q})$ to indicate the Fourier modes. For the sake of brevity we use the same symbol, but explicitly include the argument $\mathbf{q}$ as the indicator of the Fourier transformed function.) The last transformation applies to the infinite size limit $(L \rightarrow \infty)$, and $V$ is the system volume.

In re-expressing the Hamiltonian in terms of Fourier modes, we encounter expressions such as

$$
\begin{equation*}
\int \mathrm{d}^{d} \mathbf{x} m(\mathbf{x})^{2}=\int \mathrm{d}^{d} \mathbf{x} \sum_{\mathbf{q}, \mathbf{q}^{\prime}} \frac{\mathrm{e}^{-\mathrm{i}\left(\mathbf{q}+\mathbf{q}^{\prime}\right): \mathbf{x}}}{V^{2}} \vec{m}(\mathbf{q}) \cdot \vec{m}\left(\mathbf{q}^{\prime}\right)=\sum_{\mathbf{q}} \frac{\vec{m}(\mathbf{q}) \cdot \vec{m}(-\mathbf{q})}{V} . \tag{4.51}
\end{equation*}
$$

The last expression follows from the vanishing of the integral over $\mathbf{x}$ unless $\mathbf{q}+\mathbf{q}^{\prime}=\mathbf{0}$, in which case it equals the system volume. Similar manipulations lead to the Hamiltonian

$$
\begin{equation*}
\beta \mathcal{H}=\sum_{\mathbf{q}}\left(\frac{t+K q^{2}+L q^{4}+\cdots}{2 V}\right)|m(\mathbf{q})|^{2}-\vec{h} \cdot \vec{m}(\mathbf{q}=\mathbf{0}) \tag{4.52}
\end{equation*}
$$

With the choice of the normalization in Eq. (4.50), the Jacobian of the transformation to Fourier modes is $1 / \sqrt{V}$ per mode, and the partition function equals

$$
\begin{equation*}
Z=\prod_{\mathbf{q}} V^{-n / 2} \int \mathrm{~d} \vec{m}(\mathbf{q}) \exp \left[-\frac{t+K q^{2}+L q^{4}+\cdots}{2 V}|m(\mathbf{q})|^{2}+\vec{h} \cdot \vec{m}(\mathbf{q}=0)\right] \tag{4.53}
\end{equation*}
$$

The integral for $\mathbf{q}=\mathbf{0}$ is

$$
\begin{equation*}
Z_{0}=V^{-n / 2} \int_{-\infty}^{\infty} \mathrm{d} \vec{m}(\mathbf{0}) \exp \left[-\frac{t}{2 V}|m(\mathbf{0})|^{2}+\vec{h} \cdot \vec{m}(\mathbf{0})\right]=\left(\frac{2 \pi}{t}\right)^{n / 2} \exp \left[\frac{V h^{2}}{2 t}\right] \tag{4.54}
\end{equation*}
$$

After performing the integrations for $\mathbf{q} \neq \mathbf{0}$, we obtain

$$
\begin{equation*}
Z=\exp \left[\frac{V h^{2}}{2 t}\right]_{\mathbf{q}}\left(\frac{2 \pi}{t+K q^{2}+L q^{4}+\cdots}\right)^{n / 2} \tag{4.55}
\end{equation*}
$$

The total number of modes, $N$, equals the number of original lattice points. Apart from a constant factor resulting from $(2 \pi)^{n N / 2}$, the free energy is

$$
\begin{equation*}
f(t, h)=-\frac{\ln Z}{V}=\frac{n}{2} \int_{B Z} \frac{\mathrm{~d}^{d} \mathbf{q}}{(2 \pi)^{d}} \ln \left(t+K q^{2}+L q^{4}+\cdots\right)-\frac{h^{2}}{2 t} . \tag{4.56}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2024_12_27_3657433bbdebf76e536dg-078.jpg?height=317&width=366&top_left_y=1585&top_left_x=558)

Fig. 4.4 The Brillouin zone is approximated by a hypersphere of radius $\Lambda$, which is then reduced by a factor of $b$ in this RG scheme.

The integral in Eq. (4.56) is over the Brillouin zone, which for a hypercubic lattice of spacing $a$, is a cube of side $2 \pi / a$ centered on the origin. However, we expect the singularities to originate from the long wavelength modes close to $\mathbf{q}=\mathbf{0}$. The contributions from the vicinity of the Brillouin zone edge are clearly analytic, since the logarithm can be simply expanded in powers of $t$ for
a finite $q^{2}$. Thus to simplify the extraction of the singular behavior as $t \rightarrow 0$, we approximate the shape of the Brillouin zone by a hypersphere of radius $\Lambda \approx \pi / a$. The spherical symmetry of the integrand then allows us to write

$$
\begin{equation*}
f_{\text {sing }}(t, h)=\frac{n}{2} K_{d} \int_{0}^{\Lambda} \mathrm{d} q q^{d-1} \ln \left(t+K q^{2}+L q^{4}+\cdots\right)-\frac{h^{2}}{2 t}, \tag{4.57}
\end{equation*}
$$

where $K_{d} \equiv S_{d} /(2 \pi)^{d}$, and $S_{d}$ is the $d$-dimensional solid angle. The leading dependence of the integral on $t$ can be extracted after rescaling $q$ by a factor of $\sqrt{t / K}$, as

$$
\begin{align*}
f_{\text {sing }}(t, h)= & \frac{n}{2} K_{d}\left(\frac{t}{K}\right)^{d / 2} \int_{0}^{\Lambda \sqrt{K} / \sqrt{t}} \mathrm{~d} x x^{d-1}  \tag{4.58}\\
& \times\left[\ln t+\ln \left(1+x^{2}+L t x^{4} / K^{2}+\cdots\right)\right]-\frac{h^{2}}{2 t} .
\end{align*}
$$

Ignoring analytic contributions in $t$, the leading singular dependence of the free energy can be written as

$$
\begin{equation*}
f_{\text {sing }}(t, h)=-t^{d / 2}\left[A+\frac{h^{2}}{2 t^{1+d / 2}}\right] \equiv t^{2-\alpha} g_{f}\left(h / t^{\Lambda}\right) . \tag{4.59}
\end{equation*}
$$

Note that the higher order gradients, i.e. terms proportional to $L, \cdots$, do not effect the singular behavior in Eq. (4.59). On approaching the point $h=0$ for $t=0^{+}$, the singular part of the free energy is described by a homogeneous scaling form, with exponents

$$
\begin{equation*}
\alpha_{+}=2-d / 2, \quad \Delta=1 / 2+d / 4 \tag{4.60}
\end{equation*}
$$

Since the ordered phase for $t<0$ is not stable, the exponent $\beta$ is undefined. The susceptibility $\chi \propto \partial^{2} f / \partial h^{2} \propto 1 / t$, however, diverges with the exponent $\gamma_{+}=1$.

### 4.7 The Gaussian model (renormalization group)

The renormalization of the Gaussian model is most conveniently performed in terms of the Fourier modes. The goal is to evaluate the partition function

$$
\begin{equation*}
Z \sim \int \mathcal{D} \vec{m}(\mathbf{q}) \exp \left[-\int_{0}^{\Lambda} \frac{\mathrm{d}^{d} \mathbf{q}}{(2 \pi)^{d}}\left(\frac{t+K q^{2}+L q^{4}+\cdots}{2}\right)|m(\mathbf{q})|^{2}+\vec{h} \cdot \vec{m}(\mathbf{0})\right] \tag{4.61}
\end{equation*}
$$

indirectly via the three steps of RG. Note that the Brillouin zone is approximated by a hypersphere of radius $\Lambda$.
(1) Coarse grain: Eliminating fluctuations at scales $a<x<b a$ is similar to removing Fourier modes with wavenumbers $\Lambda / b<q<\Lambda$. We thus break up the momenta into two subsets,

$$
\begin{equation*}
\{\vec{m}(\mathbf{q})\}=\left\{\vec{\sigma}\left(\mathbf{q}^{>}\right)\right\} \oplus\left\{\tilde{\vec{m}}\left(\mathbf{q}^{<}\right)\right\}, \tag{4.62}
\end{equation*}
$$

and write

$$
\begin{equation*}
Z=\int \mathcal{D} \tilde{\vec{m}}\left(\mathbf{q}^{<}\right) \int \mathcal{D} \vec{\sigma}\left(\mathbf{q}^{>}\right) \mathrm{e}^{-\beta \mathcal{H}[\tilde{\tilde{m}}, \vec{\sigma}]} \tag{4.63}
\end{equation*}
$$

Since the two sets of modes are decoupled in the Gaussian model, the integration is trivial, and

$$
\begin{align*}
Z & \sim \exp \left[-\frac{n}{2} V \int_{\Lambda / b}^{\Lambda} \frac{\mathrm{d}^{d} \mathbf{q}}{(2 \pi)^{d}} \ln \left(t+K q^{2}+L q^{4}+\cdots\right)\right] \times \int \mathcal{D} \tilde{\tilde{m}}\left(\mathbf{q}^{<}\right)  \tag{4.64}\\
& \times \exp \left[-\int_{0}^{\Lambda / b} \frac{\mathrm{~d}^{d} \mathbf{q}}{(2 \pi)^{d}}\left(\frac{t+K q^{2}+L q^{4}+\cdots}{2}\right)|\tilde{m}(\mathbf{q})|^{2}+\vec{h} \cdot \tilde{\vec{m}}(\mathbf{0})\right] .
\end{align*}
$$

(2) Rescale: The partition function for the modes $\tilde{\vec{m}}\left(\mathbf{q}^{<}\right)$is similar to the original, except that the upper cutoff has decreased to $\Lambda / b$, reflecting the coarsening in resolution. The rescaling $\mathbf{x}^{\prime}=\mathbf{x} / b$ in real space is equivalent to $\mathbf{q}^{\prime}=b \mathbf{q}$ in momentum space, and restores the cutoff to its original value. The rescaled partition function is

$$
\begin{align*}
Z= & \mathrm{e}^{-V \delta f_{b}(t)} \times \int \mathcal{D} \tilde{\tilde{m}}\left(\mathbf{q}^{\prime}\right) \times \exp \left[-\int_{0}^{\Lambda} \frac{\mathrm{d}^{d} \mathbf{q}^{\prime}}{(2 \pi)^{d}} b^{-d}\right. \\
& \left.\times\left(\frac{t+K b^{-2} q^{\prime 2}+L b^{-4} q^{\prime 4}+\cdots}{2}\right)\left|\tilde{m}\left(\mathbf{q}^{\prime}\right)\right|^{2}+\vec{h} \cdot \tilde{\vec{m}}(\mathbf{0})\right] \tag{4.65}
\end{align*}
$$

(3) Renormalize: The final step of RG in real space is the renormalization of magnetization, $\vec{m}^{\prime}\left(\mathbf{x}^{\prime}\right)=\underset{\vec{m}}{\tilde{\sim}}\left(\mathbf{x}^{\prime}\right) / \zeta$. Alternatively, we can renormalize the Fourier modes according to $\vec{m}^{\prime}\left(\mathbf{q}^{\prime}\right)=\tilde{\vec{m}}\left(\mathbf{q}^{\prime}\right) / z$, resulting in

$$
\begin{align*}
Z= & \mathrm{e}^{-V \delta f_{b}(t)} \times \int \mathcal{D} \vec{m}^{\prime}\left(\mathbf{q}^{\prime}\right) \times \exp \left[-\int_{0}^{\Lambda} \frac{\mathrm{d}^{d} \mathbf{q}^{\prime}}{(2 \pi)^{d}} b^{-d} z^{2}\right. \\
& \left.\times\left(\frac{t+K b^{-2} q^{\prime 2}+L b^{-4} q^{\prime 4}+\cdots}{2}\right)\left|m^{\prime}\left(\mathbf{q}^{\prime}\right)\right|^{2}+z \vec{h} \cdot \vec{m}^{\prime}(\mathbf{0})\right] \tag{4.66}
\end{align*}
$$

(Note that the factors $\zeta$ and $z$, for rescalings of magnetization in real and Fourier space, are different.)

Equation (4.66) indicates the renormalized modes are distributed according to a Gaussian Hamiltonian, with renormalized parameters,

$$
\left\{\begin{array}{l}
t^{\prime}=z^{2} b^{-d} t  \tag{4.67}\\
h^{\prime}=z h \\
K^{\prime}=z^{2} b^{-d-2} K \\
L^{\prime}=z^{2} b^{-d-4} L \\
\cdots
\end{array}\right.
$$

The singular point $t=h=0$ is mapped onto itself as expected. To make the fluctuations scale invariant at this point, we must insure that the remaining Hamiltonian stays fixed. This is achieved by the choice of $z=b^{1+d / 2}$, which sets $K^{\prime}=K$, and makes the remaining parameters $L, \cdots$ scale to zero. Away from criticality, the two relevant directions now scale as

$$
\left\{\begin{array} { l } 
{ t ^ { \prime } = b ^ { 2 } t }  \tag{4.68}\\
{ h ^ { \prime } = b ^ { 1 + d / 2 } h }
\end{array} \Longrightarrow \left\{\begin{array}{l}
y_{t}=2 \\
y_{h}=1+d / 2
\end{array}\right.\right.
$$

Using the results of Section 3.4, we can identify the critical exponents,

$$
\begin{aligned}
& \nu=1 / y_{t}=1 / 2 \\
& \Delta=\frac{y_{h}}{y_{t}}=\frac{1+d / 2}{2}=\frac{1}{2}+\frac{d}{4}, \\
& \alpha=2-d \nu=2-d / 2
\end{aligned}
$$

in agreement with the direct solution in the previous section.
The fixed point Hamiltonian $\left(t^{*}=h^{*}=L^{*}=\cdots=0\right)$ in real space is

$$
\begin{equation*}
\beta \mathcal{H}^{*}=\frac{K}{2} \int_{a} \mathrm{~d}^{d} \mathbf{x}(\nabla m)^{2} \tag{4.69}
\end{equation*}
$$

(The subscript $a$ is placed on the integral as a reminder of the implicit short distance cutoff.) Under a simple rescaling $\mathbf{x} \mapsto \mathbf{x}^{\prime}$, and $\vec{m}(\mathbf{x}) \mapsto \zeta \vec{m}^{\prime}\left(\mathbf{x}^{\prime}\right) ; K \mapsto K^{\prime}=b^{d-2} \zeta^{2} K$. Scale invariance is achieved with the choice $\zeta=b^{1-d / 2}$. Forgetting the coarsegraining step, a general power of $\vec{m}(\mathbf{x})$, added as a small perturbation to $(\beta \mathcal{H})^{*}$, behaves as

$$
\begin{equation*}
\beta \mathcal{H}^{*}+u_{n} \int \mathrm{~d}^{d} \mathbf{x} m^{n} \quad \mapsto \quad \beta \mathcal{H}^{*}+u_{n} b^{d} \zeta^{n} \int \mathrm{~d}^{d} \mathbf{x}^{\prime} m^{\prime n} \tag{4.70}
\end{equation*}
$$

suggesting that such perturbations scale as

$$
\begin{equation*}
u_{n}^{\prime}=b^{d} b^{n\left(\frac{2-d}{2}\right)} u_{n}, \quad \Longrightarrow \quad y_{n}=n-d\left(\frac{n}{2}-1\right) \tag{4.71}
\end{equation*}
$$

The values $y_{1}=1+d / 2$, and $y_{2}=2$, reproduce the exponents for $y_{h}$ and $y_{t}$ in Eq. (4.68). The operators with higher powers are less relevant. The next most important operator in a system with spherical symmetry is $y_{4}=4-d$, which is irrelevant for $d>4$ but relevant for $d<4 ; y_{6}=6-2 d$ is relevant only for $d<3$. Indeed the majority of operators are irrelevant at the Gaussian fixed point for $d>2$.

## Problems for chapter 4

1. Scaling in fluids: Near the liquid-gas critical point, the free energy is assumed to take the scaling form $F / N=t^{2-\alpha} g\left(\delta \rho / t^{\beta}\right)$, where $t=\left|T-T_{c}\right| / T_{c}$ is the reduced temperature, and $\delta \rho=\rho-\rho_{c}$ measures deviations from the critical point density. The leading singular behavior of any thermodynamic parameter $Q(t, \delta \rho)$ is of the form $t^{x}$ on approaching the critical point along the isochore $\rho=\rho_{c}$; or $\delta \rho^{y}$ for a path along the isotherm $T=T_{c}$. Find the exponents $x$ and $y$ for the following quantities:
   (a) The internal energy per particle $\langle H\rangle / N$, and the entropy per particle $s=S / N$.
   (b) The heat capacities $C_{V}=T \partial s /\left.\partial T\right|_{V}$, and $C_{P}=T \partial s /\left.\partial T\right|_{P}$.
   (c) The isothermal compressibility $\kappa_{T}=\partial \rho /\left.\partial P\right|_{T} / \rho$, and the thermal expansion coefficient $\alpha=\partial V /\left.\partial T\right|_{P} / V$.

Check that your results for parts (b) and (c) are consistent with the thermodynamic identity $C_{P}-C_{V}=T V \alpha^{2} / \kappa_{T}$.
(d) Sketch the behavior of the latent heat per particle $L$ on the coexistence curve for $T<T_{c}$, and find its singularity as a function of $t$.

2. The Ising model: The differential recursion relations for temperature $T$, and magnetic field $h$, of the Ising model in $d=1+\epsilon$ dimensions are (for $\mathrm{b}=\mathrm{e}^{\ell}$ )

$$
\left\{\begin{array}{l}
\frac{\mathrm{d} T}{\mathrm{~d} \ell}=-\epsilon T+\frac{1}{2} T^{2} \\
\frac{\mathrm{~d} h}{\mathrm{~d} \ell}=d h .
\end{array}\right.
$$

(a) Sketch the renormalization group flows in the ( $T, h$ ) plane (for $\epsilon>0$ ), marking the fixed points along the $h=0$ axis.
(b) Calculate the eigenvalues $y_{t}$ and $y_{h}$, at the critical fixed point, to order of $\epsilon$.
(c) Starting from the relation governing the change of the correlation length $\xi$ under renormalization, show that $\xi(t, h)=t^{-\nu} g_{\xi}\left(h /|t|^{\Delta}\right)$ (where $t=T / T_{c}-1$ ), and find the exponents $\nu$ and $\Delta$.
(d) Use a hyperscaling relation to find the singular part of the free energy $f_{\text {sing }}(t, h)$, and hence the heat capacity exponent $\alpha$.
(e) Find the exponents $\beta$ and $\gamma$ for the singular behaviors of the magnetization and susceptibility, respectively.
(f) Starting with the relation between susceptibility and correlations of local magnetizations, calculate the exponent $\eta$ for the critical correlations $(\langle m \mathbf{( 0 )} m(\mathbf{x})\rangle \sim$ $\left.|\mathbf{x}|^{-(d-2+\eta)}\right)$.
(g) How does the correlation length diverge as $T \rightarrow 0$ (along $h=0$ ) for $d=1$ ?

3. The nonlinear $\sigma$ model describes $n$ component unit spins. As we shall demonstrate later, in $d=2$ dimensions, the recursion relations for temperature $T$, and magnetic field $h$, are (for $\mathrm{b}=\mathrm{e}^{\ell}$ )

$$
\left\{\begin{array}{l}
\frac{\mathrm{d} T}{\mathrm{~d} \ell}=\frac{(n-2)}{2 \pi} T^{2} \\
\frac{\mathrm{~d} h}{\mathrm{~d} \ell}=2 h .
\end{array}\right.
$$

(a) How does the correlation length diverge as $T \rightarrow 0$ ?
(b) Write down the singular form of the free energy as $T, h \rightarrow 0$.
(c) How does the susceptibility $\chi$ diverge as $T \rightarrow 0$ for $h=0$ ?

4. Coupled scalars: Consider the Hamiltonian

$$
\beta \mathcal{H}=\int \mathrm{d}^{d} \mathbf{x}\left[\frac{t}{2} m^{2}+\frac{K}{2}(\nabla m)^{2}-h m+\frac{L}{2}\left(\nabla^{2} \phi\right)^{2}+v \nabla m \cdot \nabla \phi\right],
$$

coupling two one-component fields $m$ and $\phi$.
(a) Write $\beta \mathcal{H}$ in terms of the Fourier transforms $m(\mathbf{q})$ and $\phi(\mathbf{q})$.
(b) Construct a renormalization group transformation as in the text, by rescaling distances such that $\mathbf{q}^{\prime}=b \mathbf{q}$; and the fields such that $m^{\prime}\left(\mathbf{q}^{\prime}\right)=\tilde{m}(\mathbf{q}) / z$ and $\phi^{\prime}\left(\mathbf{q}^{\prime}\right)=\tilde{\phi}(\mathbf{q}) / y$. Do not evaluate the integrals that just contribute a constant additive term.
(c) There is a fixed point such that $K^{\prime}=K$ and $L^{\prime}=L$. Find $y_{t}, y_{h}$ and $y_{v}$ at this fixed point.
(d) The singular part of the free energy has a scaling from $f(t, h, v)=$ $t^{2-\alpha} g\left(h / t^{\Delta}, v / t^{\omega}\right)$ for $t, h, v$ close to zero. Find $\alpha, \Delta$, and $\omega$.
(e) There is another fixed point such that $t^{\prime}=t$ and $L^{\prime}=L$. What are the relevant operators at this fixed point, and how do they scale?