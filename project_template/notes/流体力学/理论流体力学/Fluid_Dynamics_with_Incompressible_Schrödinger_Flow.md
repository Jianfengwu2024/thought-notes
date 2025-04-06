# Fluid Dynamics with Incompressible Schrödinger Flow 

Thesis by
Albert Chern

In Partial Fulfillment of the Requirements for the degree of
Doctor of Philosophy

CALIFORNIA INSTITUTE OF TECHNOLOGY
Pasadena, California

2017
Defended May 23, 2017
(C) 2017

Albert Chern
ORCID: 0000-0002-9802-3619
All rights reserved

## ACKNOWLEDGEMENTS

It is a great honor for me to work on and contribute in such an exciting research topic. Besides my own work, the success is due to many who provided the supports, advices, and the opportunities.

First of all, I would like to thank my family. My parents provided me tremendous support in pursuing academic career, and built the fundation of my interests in art and science. In mathematical studies, my father as an applied mathematician gave me precious insights in very broad areas in math and science. My brother also gave me great support during my PhD study, especially from his knowledge in software engineering, and generally the supports in life.

To all my friends in the CMS department at Caltech: it has been a pleasant time studying and taking classes with you. From the discussion over the years I learned a lot from different research areas.

To all my old friends from the math departement at National Taiwan University: thank you for your supports, persistence in contacting me, and the fun discussions about math and life.

To all my friends and their associates in the Association of Caltech Taiwanese: thank you for the incredible supports, assistents, and the time we spent together during the five years. I am also very grateful to have those valuable discussion and seminars to learn the knowledge in physics, applied physics, chemistry, biology, electrical engineering, material science, and medical engineering, which I would not have a chance to learn so much if there were not you.

To all the faculties in ACM/CMS at Caltech: thank you for the admission to Caltech, and all the advices during the five years. The discussions related to the research also provided new insights and directions for this thesis work. I am also very honored and grateful to be awarded from this committee the W.P. Carey \& Co. Inc. Prize in ACM.

I want to thank especially Professor Thomas Hou, Houman Owhadi, Anthony Leonard, Dan Meiron for the guidance, insights and the supports to my work over the past few years.

I would like to thank Professor Mathieu Desbrun for your care during the time I am at Caltech, and for all the feedbacks on the work I have been doing. I enjoyed those discussion and I also learned a lot about the current studies in computer graphics from you.

To all the faculties and coworkers at TU Berlin: thank you for the care and the interesting discussions during my visit in Berlin.

I want to thank the coworkers on this work, Felix Knöppel and Steffen Weißmann. I learned a lot of different ways of thinking in the work and many related subjects in differential geometry. I also enjoyed the time we explore the Houdini software and turn it into our major computation and visualization tool. I would also like to thank Steffen Weißmann especially for filming the dry ice vapor.

Special thanks to Alessandro Pepe at Framestore LA. I learned tremendous knowledge from you of using Houdini, especially on managing the network and rendering smoke. This technique was an important turning point that took a mathematical idea into a visually plausible work. Our YouTube video on this work would not have so much attention from the public if we did not have this technique.

Special thanks to Junshi Wang and Professor Haibo Dong at University of Virginia for the beautiful fluid dataset of the flow around a hummingbird. It is this dataset combining with our research that becomes an eye-catcher which draws more public attention to our work.

I would also like to thank Professor Olof Runborg at KTH Royal Institute of Technology, Dr. Demosthenes Kivotides at University of Strathclyde, Professor Richard Tsai and Etienne Vouga at UT Austin, Professor Chiu-Yen Kao at Claremont Mckenna College, Professor Shouhong Wang at Indiana University, Professor Joseph Terran at UCLA, Professor Jack Xin at UC Irvine, Professor Hang Si at Weierstrass Institute, Professor Keh-Ming Shyue and Weichung Wang at National Taiwan University, and Professor Ming-Chih Lai and Chin-Tien Wu at National Chiao Tung University. I am very honored and grateful to visit you and have deep discussions over the work. The feedbacks and insights during the discussions are truly important in this research.

I would like to thank Keenan Crane. Although we did not have much
overlap at Caltech, the few discussions with you was the key reason why I am working with Peter. Afterwards, I learned a lot from how you present your work, which greatly influenced me in not only giving talk and teaching, but also in artistic designs for slides, illustrations, and mathematical visualizations.

To Professor Ulrich Pinkall, I am very lucky to work with and learn from you. Your open mind and broad knowledge have brought so many interesting things together. Those include the frontier of differential geometry, discrete differential geometry, computational mathematics, quantum physics, astronomy, fluid dynamics, mathematical visualizations, computer graphics, and even game industry. Of course there are still a lot that I have not mentioned. The way you can find deep connections to seemingly unrelated subjects and provide accurate insights across them was the main driving force to the creativity to the research.

Finally, to my advisor Professor Peter Schröder, I am very lucky to be advised by you. It is not only due to your great help and support in academics but also in other aspects in life. Besides the knowledge in mathematics and computer science, one of the most valuable things I learned from you is your philosophy in presentation. This influences not only my academic presentation and teaching skills but also the way I think of presenting art and music. You like to restate everything to a very simple formalism, which turns a lot of abstract concepts into concrete geometric ideas. It is this attitude of presenting the simplicity that leads to the revelation of beautiful mathematics.


#### Abstract

This thesis introduces a new way of looking at incompressible fluid dynamics. Specifically, we formulate and simulate classical fluids using a $\mathbb{C}^{2}$-valued Schrödinger equation subject to an incompressibility constraint. We call such a fluid flow an incompressible Schrödinger flow (ISF). The approach is motivated by Madelung's hydrodynamical form of quantum mechanics, and we show that it can simulate classical fluids with particular advantage in its simplicity and its ability of capturing thin vortex dynamics. The effective dynamics under an ISF is shown to be an Euler equation modified with a Landau-Lifshitz term. We show that the modifying term not only enhances the dynamics of vortex filaments, but also regularizes the potentially singular behavior of incompressible flows.

Another contribution of this thesis is the elucidation of a general, geometric notion of Clebsch variables. A geometric Clebsch variable is useful for analyzing the dynamics of ISF, as well as representing vortical structures in a general flow field. We also develop an algorithm of approximating a "spherical" Clebsch map for an arbitrarily given flow field, which leads to a new tool for visualizing, analyzing, and processing the vortex structure in a fluid data.


## PUBLISHED CONTENT AND CONTRIBUTIONS

Chern, Albert, Felix Knöppel, Ulrich Pinkall, and Peter Schröder (2017). "Inside Fluids: Clebsch Maps for Visualization and Processing". In: ACM Trans. Graph. 36.4, 142:1-142:11. DoI: 10.1145/3072959.3073591.
Albert Chern participated in the theoretical developments, proposed the vortex visualization application, contributed the main algorithm, numerical programing, numerical examples and renderings.

Chern, Albert, Felix Knöppel, Ulrich Pinkall, Peter Schröder, and Steffen Weißmann (2016). "Schrödinger's Smoke". In: ACM Trans. Graph. 35-4. DOI: 10.1145/2897824. 2925868.
Albert Chern participated in the early theoretical developments, and contributed the numerical programing, numerical examples and renderings.

## CONTENTS

Acknowledgements ..... iii
Abstract ..... vi
Published Content and Contributions ..... vii
Contents ..... viii
List of Figures ..... xii
List of Tables ..... xiv
I Introduction \& Preliminaries ..... 1
Chapter I: Introduction ..... 2
1.1 Hydrodynamics and Quantum Mechanics ..... 3
1.2 Incompressible Schrödinger Equations ..... 4
1.3 Basic Algorithm ..... 5
1.4 Numerical Results ..... 7
Vortex Filaments ..... 7
Velocity Constraints ..... 10
Arbitrary Initial Conditions ..... 11
Gravity and Buoyancy ..... 12
General Domain ..... 14
1.5 Significance and Related Work ..... 15
Quantum Mechanics and Superfluids ..... 17
Clebsch Variables ..... 18
Theoretical Euler's Equation ..... 20
1.A Madelung Transform ..... 20
1.B Implementation Details ..... 22
1.C Discrete Circulation ..... 24
1.D Wavefunctions for Vortex Filaments ..... 25
1.E Volume Penalization for Wavefunctions ..... 26
Chapter II: Preliminary: Classical Fluid Dynamics ..... 28
2.1 Euler Equations ..... 28
Derivation ..... 29
Incompressible Flow ..... 30
2.2 Lagrange's 1-form ..... 31
Law of Motion in Lagrangian Coordinates ..... 31
Lagrangian Hydrodynamics ..... 32
Lie Advection of Velocity 1-form ..... 33
2.3 Pressure Projection ..... 34
2.4 Cauchy's Invariants ..... 36
2.5 Hankel-Kelvin Circulation Theorem ..... 37
2.6 Helmholtz's Theorems ..... 37
Vorticity Equation ..... 38
Vortex Tubes ..... 39
2.7 Velocity from Vorticity ..... 40
2.8 Clebsch Variables ..... 42
Clebsch Representation ..... 42
Equations of Motion ..... 43
Lagrangian Interpretation ..... 43
Clebsch's Action ..... 44
II Geometric Clebsch Maps ..... 46
Chapter III: Clebsch Variables Revisited ..... 47
Chapter IV: Geometric Clebsch Variables ..... 50
4.1 Contact Geometry ..... 51
Group Actions on Contact Manifolds ..... 52
4.2 Prequantum Bundle ..... 52
Wavefunctions ..... 53
4.3 Hopf Fibration ..... 53
4.4 Velocity Clebsch Map ..... 56
Classical Clebsch Variables ..... 57
Madelung Transform ..... 57
4.5 Pressure Projection for Wavefunctions ..... 58
Chapter V: *More on Geometric Clebsch Maps ..... 61
5.1 Connections and Curvatures ..... 62
5.2 Pullback of the Prequantum Bundle ..... 65
5.3 Lifting Condition ..... 67
Chapter VI: Spherical Clebsch Maps ..... 69
6.1 Why $\mathrm{S}^{3} \rightarrow \mathrm{~S}^{2}$ ? ..... 69
6.2 Helicity ..... 70
6.3 Quantized Helicity ..... 72
6.4 Finding a Spherical Clebsch Map ..... 73
6.5 Ginzburg-Landau Energy with Berger Metric ..... 74
Covariant Derivative ..... 74
Berger Metric ..... 75
Ginzburg-Landau Model ..... 76
Summary ..... 76
6.6 Berger Metric in terms of Pauli Matrices ..... 77
6.7 Minimizing Flow ..... 78
6.8 Implementation for the Minimizing Flow ..... 79
*6.9 More on Berger-Spherical Ginzburg-Landau Flow ..... 80
Precession Term ..... 81
Equation for $s$ ..... 83
Relation to the Cauchy-Riemann Equation ..... 84
6.A The Magnetic Laplacian ..... 84
Chapter VII: Applications of Spherical Clebsch Maps ..... 87
7.1 Validation ..... 88
2D Example ..... 88
Presence of Isolated Zeros ..... 90
Non-Closed Vortex Lines ..... 90
Quantized Helicity ..... 91
7.2 Vorticity Visualization ..... 92
7.3 Initial Data for Incompressible Schrödinger Flow ..... 94
7.4 Flow Processing ..... 95
7.A Rational Maps for Flow Processing ..... 97
IIIIncompressible Schrödinger Flow ..... 99
Chapter VIII: Euler Equation with Geometric Clebsch Variables ..... 100
A Summary of Geometric Clebsch Maps ..... 100
8.1 Symplectic Manifolds for Incompressible Flows ..... 101
8.2 Hamiltonian Formulation for the Euler Equation ..... 103
*8.3 Gauge Symmetries from Hamiltonian Group Actions on $\Sigma$ ..... 105
Hamiltonian Group Actions on $\Sigma$ ..... 105
Moment Map ..... 105
Noether's Invariants ..... 106
Hamiltonian Group Actions on $\mathcal{S}$ ..... 107
Gauge Invariance ..... 109
Chapter IX: Dynamics of ISF ..... 111
9.1 Evolution of $s$ ..... 112
9.2 Hamiltonian Formulation of ISF ..... 113
9.3 ISF with Berger Metric ..... 116
9.4 Momentum Equation ..... 119
9.5 ISF in Advection Form ..... 121
*9.6 Broken Gauge Symmetry ..... 123
Chapter X: Landau-Lifshitz Modified Fluid ..... 124
10.1 Scaling Laws ..... 127
10.2 Landau-Lifshitz Regularization ..... 130
10.3 Vortex Filaments Motion ..... 130
Construction of $s$ ..... 131
Properties of Stereographic Projection ..... 132
Tubular Neighborhood Coordinate ..... 134
Landau-Lifshitz Velocity ..... 136
10.4 Effective Vortex Radius ..... 138
Chapter XI: Special Forces ..... 140
11.1 Coriolis Effect by Magnetic Field ..... 140
11.2 Buoyancy by Stern-Gerlach Effect ..... 143
Chapter XII: Conclusion ..... 146
Bibliography ..... 148
Appendix A: Exterior Calculus ..... 155
A. 1 Differential Forms ..... 156
Alternating Forms ..... 156
Wedge Product ..... 157
Exterior Derivative ..... 158
Pullback Operators ..... 158
A. 2 Metric Induced Dualities ..... 159
Musical Isomorphisms ..... 159
Hodge Stars ..... 160
Inner Products between Forms ..... 160
A. 3 Levi-Civita Connection ..... 161
Covariant Derivative of Differential Forms ..... 162
Derivatives on Vector-valued Differential Forms ..... 162
A. 4 Interior Products ..... 163
Duality with Wedge Products ..... 164
Examples of Interior Products and Wedge Products ..... 164
Projection and Rejection ..... 165
Extrusion ..... 165
A. 5 A Short Summary ..... 167
A. 6 Lie Derivatives of Differential Forms ..... 168
Divergence of a Vector Field ..... 169
Notes on Material Derivatives ..... 169
Special Cases of Lie Derivatives ..... 170
A. 7 General Variation Formula for Pullback Forms ..... 172
A. 8 Codifferential and Laplacian ..... 173
Appendix B: Quaternions ..... 174
B. 1 The Basics ..... 174
B. 2 3D Rotations ..... 175
B. 3 Hopf Map ..... 175
B. 4 Quaternions and $\mathbb{C}^{2}$ Vectors ..... 176

## LIST OF FIGURES

Number Page
1.1 Leapfrogging vortex rings, comparing HJWENO/MacCormack and ISF ..... 8
1.2 Evolution of a trefoil knot with ISF ..... 9
1.3 Comparison of different methods for vortex ring collision at different resolutions ..... 9
1.4 Teapot bunny collision with ISF ..... 10
1.5 Jet simulation with ISF ..... 11
1.6 Von Kármán vortex street ..... 11
1.7 Flow past a sphere ..... 12
1.8 Example of a moving obstacle ..... 12
1.9 ISF initialized with a rigid rotating volume ..... 13
1.10 Buoyant jet ..... 13
1.11 Cigarette smoke simulated with ISF ..... 15
1.12 Dry ice vapor ..... 16
1.13 ISF on a general surface ..... 17
1.14 Data stored on a computation grid ..... 22
6.1 Example of two linked curves ..... 71
7.1 An $\mathrm{S}^{2}$-valued vorticity Clebsch map for a 2 D vortex patch ..... 89
7.2 Convergence of the Clebsch map ..... 89
7.3 Clebsch map approximating a vorticity field with an isolated zero ..... 90
7.4 Clebsch map for a vorticity field with non-closed vortex lines ..... 91
7.5 Clebsch map for a vorticity field with varying helicity ..... 92
7.6 Clebsch map for a Delta Wing dataset ..... 93
7.7 Comparison of vortex tubes from the vorticity Clebsch map with original vortex lines ..... 94
7.8 Clebsch map for a Hummingbird flow dataset ..... 95
7.9 Jet simulation processed by rearranging vortex distribution ..... 96
7.10 Flow processing used for Fig. 7.9 ..... 97
7.11 A degree-4 rational map on $\mathrm{S}^{2}$ ..... 98
10.1 Cross section of a vortex filament ..... 124
10.2 Energy plot for an ISF simulation . . . . . . . . . . . . . . . . . 126
10.3 Comparing simulations using HJWENO/MacCormack, Lagrangian vortex filaments, and ISF . . . . . . . . . . . . . . . . . 127
10.4 Vorticity Clebsch maps with different choices of $\hbar$. . . . . . . 128
11.1 Flow on a rotating planet simulated by magnetic ISF . . . . . . 141

## LIST OF TABLES

Number ..... Page1.1 Parameters for ISF simulations . . . . . . . . . . . . . . . . . . . 77.1 Performance statistics for finding Clebsch maps . . . . . . . . . 87

## Part I

## Introduction and Preliminaries

## Chapter 1

## INTRODUCTION

This thesis is based on the work I did since 2015 Summer with the associated publications [Chern, Knöppel, Pinkall, Schröder, and Weißmann, 2016] and [Chern, Knöppel, Pinkall, and Schröder, 2017].

In the first paper, Schrödinger's Smoke, we proposed a novel method for fluid simulations by solving a Schrödinger equation. The relation between hydrodynamics and quantum mechanics was long known since Madelung [1926], but this relation had not been turned into a numerical approach for computing classical fluids. Through collaborative mathematical derivations, we settled the framework of Incompressible Schrödinger Flow (ISF) presented in the paper and in this thesis. The paper showed that Madelung's hydrodynamical form of quantum mechanics can be practically used in fluid simulations. Besides its simplicity and intriguing relation to quantum physics, ISF is particularly competitive in simulating vortex dynamics.

On the theoretical aspect, ISF reveals a deep relation between Clebsch variables in hydrodynamics and spins in quantum mechanics. Their dynamics under ISF is an Euler equation modified with a Landau-Lifshitz term. This modifying term for the Euler equation had not been considered in the fluid dynamics literature. In this thesis I give the analysis of the impact of this modifying term on the Euler equation, which explains the numerical quality empirically observed in the Schrödinger's Smoke paper.

One important fact about Clebsch variables is that they can be used to visualize the vortical structures in a fluid naturally. This idea was published in the second paper, Inside Fluids: Clebsch Maps for Visualization and Processing, where we proposed a novel method of finding a Clebsch map from any given flow data and thereby we provided new tools for analyzing and visualizing the dataset.

In this thesis, I will first present the basic formulation and numerical results of ISF. In Part II, I will develop the mathematical framework for general, geometric Clebsch variables. The application of this new notion of Clebsch variables is presented in the end of Part II. In Part III, I will talk about the
mathematical theory about the dynamics of the Clebsch variables. In particular, the Landau-Lifshitz term is revealed in the discussion. With a better understanding on comparing a Schrödinger equation and the Euler equation through the dynamics of the Clebsch variables, I give a few examples on how to apply special forces (Coriolis force and buoyancy force) on the fluid in the end of Part III.

To manage the abstract definition of Clebsch variables in Part II and the derivations in Part III, I employ the formalism of exterior calculus. I give a note on exterior calculus in Appendix A collecting the important operators and identities for the context of fluids. Using it, I give a preliminary note (Chapter 2) on the important facts in classical fluids.

### 1.1 Hydrodynamics and Quantum Mechanics

An incompressible, nearly inviscid fluid is modeled as a continuum governed by the incompressible Euler equations

$$
\left\{\begin{array}{l}
\frac{\partial}{\partial t} \mathbf{u}+(\mathbf{u} \cdot \nabla) \mathbf{u}=-\nabla p  \tag{1.1}\\
\operatorname{div} \mathbf{u}=\mathrm{o}
\end{array}\right.
$$

where $\mathbf{u}$ is the velocity vector field and $p$ the pressure. One can understand this equation as the consequence of

- the law of inertia. Without forces, the velocity $\mathbf{u}$ is purely transported by the velocity itself $\frac{\partial}{\partial t} \mathbf{u}+(\mathbf{u} \cdot \nabla) \mathbf{u}=\mathrm{o}$;
- the only existing force in the fluid is a potential force $-\nabla p$; i.e. no friction.
- the fluid is incompressibile: $\operatorname{div} \mathbf{u}=0$.

The potential (pressure) force $-\nabla p$ is given uniquely to fulfill the incompressibility constraint.

The inertial- and pressure-driven motion of the fluid is the macroscopic phenomenon arising from the numerous flowing and colliding molecules. When the number of fluid particles is fewer, such as in a rarified gas or at a mesoscopic scale, the fluid is no longer a continuum and is modeled by kinetic models or many-body Newtonian mechanics. Surprisingly, when one goes further down to the quantum mechanical level, the inertial- and
pressure-driven dynamics reappears with a different physical reason but a similar mathematical form.

In quantum mechanics, a single particle at the atomic scale is modeled as a complex-valued wavefunction $\psi$ which satisfies the Schrödinger equation

$$
\begin{equation*}
i \hbar \frac{\partial}{\partial t} \psi=-\frac{\hbar^{2}}{2} \Delta \psi+p \psi \tag{1.2}
\end{equation*}
$$

The linear equation $i \hbar \frac{\partial}{\partial t} \psi=-\frac{\hbar^{2}}{2} \Delta \psi$ is a dispersive wave equation. That is, waves with different wavelengths travel at different speeds. The group velocity for the Schrödinger equation is given by $v=\hbar k$ where $k=\nabla \arg \psi$ is the wavenumber. Physically, the amplitude squared of the wavefunction $q=|\psi|^{2}$ represents the probability density of the location of the particle, and the group velocity $\hbar \nabla \arg \psi$ represents the particle velocity field. Both the velocity field (wave frequency) and the density (amplitude) are carried along by the group velocity, and therefore we obtain an inertial motion similar to a fluid. The term $p \psi$ in (1.2) represents the potential energy, which generates a potential force $-\nabla p$ that acts on the velocity field. This fluid analogy of quantum mechanics was first pursued by Madelung [Madelung, 1926; Madelung, 1927] in an effort to elucidate the then new quantum mechanics. The derivation can be found in Appendix 1.A

An important fact one can already see is that the inertial motion in the Euler equation is described by a nonlinear equation $\frac{\partial}{\partial t} \mathbf{u}+(\mathbf{u} \cdot \nabla) \mathbf{u}=\mathrm{o}$, whereas its counterpart in the Schrödinger equation is a linear equation $i \hbar \frac{\partial}{\partial t} \psi=\frac{\hbar^{2}}{2} \Delta \psi$. This gives us motivation to study and numerically simulate the fluid equations using a Schrödinger equation.

### 1.2 Incompressible Schrödinger Equations

Since the Schrödinger equation corresponds to a compressible fluid, we need to impose incompressibility $\nabla \cdot \mathbf{u}=\mathrm{o}$ and $q=1$. Moreover the velocity is represented by $\mathbf{u}=\hbar \nabla \theta$, which means that there will be no vorticity $\mathbf{w}=\nabla \times \mathbf{u}$ anywhere except where $q=\mathrm{o}$ (and $\nabla \theta$ is singular). If we impose $q=1$, the only flow in a Schrödinger system would be potential flow.

To include vorticity we consider a 2-component ( $\mathbb{C}^{2}$-valued) wavefunction.* For a $\mathbb{C}^{2}$-valued wavefunction $\Psi=\left(r_{1} e^{i \theta_{1}}, r_{2} e^{i \theta_{2}}\right)^{\top}$, the hydrodynamical vari-
*The physical interpretation for such a wavefunction is that it describes a spin-1/2 particle.
ables are given by

$$
\begin{aligned}
& q=r_{1}^{2}+r_{2}^{2}=|\Psi|^{2}=\bar{\Psi}^{\top} \Psi \\
& \mathbf{u}=\frac{r_{1}^{2} \hbar \nabla \theta_{1}+r_{2}^{2} \hbar \nabla \theta_{2}}{r_{1}^{2}+r_{2}^{2}}=\frac{1}{q} \hbar \operatorname{Re}\left(-\bar{\Psi}^{\top} i \nabla \Psi\right)
\end{aligned}
$$

Since $\mathbf{u}$ is no longer a pure gradient of a function, it admits nontrivial vorticity.

The Schrödinger equation for a $\mathbb{C}^{2}$-valued wavefunction is given similar to the one-component case

$$
i \hbar \frac{\partial}{\partial t} \Psi=\frac{\hbar^{2}}{2} \Delta \Psi+p \Psi
$$

Finally, just as in the incompressible Euler equation, we let the potential $p$ be chosen so that the fluid is incompressible; that is, $\nabla \cdot \mathbf{u}=0$ and $q=1$. In terms of $\Psi$ the condition $\nabla \cdot \mathbf{u}=\mathrm{o}$ can be written as ${ }^{\dagger}$

$$
\operatorname{Re}\left(\bar{\Psi}^{\top} i \Delta \Psi\right)=\mathrm{o}
$$

We therefore write down the Schrödinger equation with an incompressibility constraint:

$$
\left\{\begin{array}{l}
i \hbar \frac{\partial}{\partial t} \Psi=\frac{\hbar^{2}}{2} \Delta \Psi+p \Psi  \tag{1.3}\\
\operatorname{Re}\left(\bar{\Psi}^{\top} i \Delta \Psi\right)=0 .
\end{array}\right.
$$

If the initial condition for this equation satisfies the uniform density condition, $q=|\Psi|^{2}=1$, one can see that $|\Psi|^{2}=1$ holds at all later times because

$$
\frac{\partial}{\partial t}|\Psi|^{2}=2 \operatorname{Re}\left(\bar{\Psi}^{\top} \frac{\partial}{\partial t} \Psi\right)=2 \operatorname{Re}\left(\bar{\Psi}^{\top} \frac{i \hbar}{2} \Delta \Psi-\frac{i}{\hbar} p|\Psi|^{2}\right)=0
$$

where in the last equality we used the condition $\operatorname{Re}\left(\bar{\Psi}^{\top} i \Delta \Psi\right)=0$ and the fact that $i|\Psi|^{2}$ is purely imaginary.

We call (1.3) the incompressible Schrödinger equations and the corresponding flow the incompressible Schrödinger flow (ISF).

### 1.3 Basic Algorithm

ISF is computationally very attractive. Using a splitting method for time integration, each step requires only linear Schrödinger evolution for a short time period $\Delta t$,

$$
\frac{\partial}{\partial t} \Psi=\frac{i \hbar}{2} \Delta \Psi
$$

[^0]followed by a phase shift $\Psi \leftarrow e^{-i \varphi / \hbar} \Psi$ for some real-valued function $\varphi$, i.e. a general solution to

$$
\frac{\partial}{\partial t} \Psi=-\frac{i}{\hbar} p \psi
$$

Observe that applying a phase shift $\Psi=e^{-i \varphi / \hbar} \tilde{\Psi}$ results in a change in the velocity by

$$
\mathbf{u}=\tilde{\mathbf{u}}-\nabla \varphi
$$

Therefore for an arbitrary $\tilde{\Psi}$ one can find a unique (up to a global constant) $\varphi$ so that the velocity after the phase shift $\Psi=e^{-i \varphi / \hbar} \tilde{\Psi}$ is divergence-free $\nabla \cdot \mathbf{u}=\mathrm{o}$. This phase function $\varphi$ is found by solving a Poisson problem

$$
\begin{equation*}
\Delta \varphi=\nabla \cdot \tilde{\mathbf{u}} \tag{1.4}
\end{equation*}
$$

The process of taking an arbitrary $\tilde{\Psi}$, solving (1.4) and returning $\Psi=$ $e^{-i \varphi / \hbar} \tilde{\Psi}$ is called the pressure projection.

The overall algorithm for ISF is alternating between a linear Schrödinger flow and a pressure projection (Alg. 1). Though in the smooth theory $|\Psi|=1$ is always maintained in ISF, in discrete time stepping $|\Psi|$ may drift away from 1. We therefore supply a normalization step between the Schrödinger step and the pressure projection step.

```
Algorithm 1 Basic ISF
Input: $\Psi^{(0)}, \Delta t, \hbar \quad \triangleright$ Initial state and parameters
    for $j \leftarrow 0,1,2, \ldots$ do
        $\Psi^{\mathrm{tmp}} \leftarrow$ SCHRÖDINGER $\left(\Psi^{(j)}, \Delta t, \hbar\right) \quad \triangleright$ Appendix 1.B
        $\Psi^{\mathrm{tmp}} \leftarrow \Psi^{\mathrm{tmp}} /\left|\Psi^{\mathrm{tmp}}\right| \quad \triangleright$ Normalization
        $\Psi^{(j+1)} \leftarrow \operatorname{PressureProject}\left(\Psi^{\mathrm{tmp}}\right) \quad \triangleright$ Appendix 1.B
    end for
```

All inertial motion of the fluid happens within the Schrödinger evolution, no separate nonlinear advection step is needed. For time integration for the Schrödinger evolution, we adopt the spectral method if the domain is a regular grid, and solve the diagonalized system in the Fourier domain exactly. If the domain does not allow a straightforward spectral method, we discretize the Laplacian and adopt the Crank-Nicolson method to march in time. The resulting algorithm is unconditionally stable and straightforward to implement.

| Fig. | resolution | size $\left(\mathrm{m}^{3}\right)$ | $\Delta t(\mathrm{~s})$ | $\hbar\left(\mathrm{m}^{2} / \mathrm{s}\right)$ | Video |
| ---: | :---: | :---: | :---: | :--- | :---: |
| 1.1 | $128 \times 64 \times 64$ | $10 \times 5 \times 5$ | $1 / 24$ | 0.1 | $00: 05$ |
| 1.2 | $64^{3}$ | $2^{3}$ | $1 / 24$ | 0.01 | $01: 17$ |
| 1.3 | $64^{3}$ resp. $128^{3}$ | $5^{3}$ | $1 / 24$ | 0.05 | $00: 39$ |
| 1.4 | $128^{3}$ | $4^{3}$ | $1 / 48$ | 0.02 | $01: 42$ |
| 1.5 | $128 \times 64 \times 64$ | $4 \times 2 \times 2$ | $1 / 48$ | $0.02-0.04$ | $02: 18$ |
| 1.6 | $512 \times 12 \times 208$ | $20 \times 1 / 2 \times 8$ | $1 / 48$ | 0.03 | $02: 48$ |
| 1.7 | $192 \times 64 \times 64$ | $6 \times 2 \times 2$ | $1 / 48$ | 0.015 | $03: 41$ |
| 1.8 | $192 \times 64 \times 64$ | $6 \times 2 \times 2$ | $1 / 48$ | 0.015 | $03: 56$ |
| 1.10 | $96 \times 192 \times 96$ | $3 \times 6 \times 3$ | $1 / 48$ | 0.02 | $04: 09$ |
| 1.12 | 1283 | $5^{3}$ | $1 / 48$ | 0.03 | $04: 48$ |

Table 1.1: Parameters for simulations.

### 1.4 Numerical Results

With the basic algorithm in place, we now discuss its use, beginning with simple benchmark simulations and building up a set of straightforward tools capable of describing a large set of interesting simulation scenarios. ${ }^{\ddagger}$ Parameters and the video pointers ${ }^{\S}$ for the simulations are listed in Table 1.1. Performance is controlled by the cost of the FFT. A single step of Alg. 1 takes less than 1 s at $128^{3}$ resolution and less than 95 at $256^{3}$ on a 3.5 GHz i7 iMac.

## Vortex Filaments

We perform a few benchmark tests simulating the dynamics of vortex filaments, i.e. flows with vorticity concentrated in space curves. Initialization for $\Psi$ representing vortex filaments is given in Appendix 1.D.

Leapfrogging Vortex Rings A classic example of interesting filament dynamics are the leapfrogging vortex rings [Lim, 1997]. Two closely spaced circular vortex filaments will alternately leapfrog one another. This phenomenon is typically very hard to reproduce in standard fluid solvers but runs without difficulty in our method. Fig. 1.1 shows a comparison between a state of the art $5^{\text {th }}$ order HJWENO [Osher and Fedkiw, 2003,

[^1]Ch. 3.4] velocity advection method with $2^{\text {nd }}$ order MacCormack time stepping [Selle et al., 2008], and our ISF. HJWENO/MacCormack is never able to complete even the first leapfrog cycle, quickly yielding only a merged, single vortex ring while our method goes through the correct cycle and is still proceeding after 2000 time steps (approx. four cycles).
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-022.jpg?height=1044&width=1264&top_left_y=600&top_left_x=403)

Figure 1.1: Leapfrogging vortex rings using HJWENO/MacCormack (top) and ISF (bottom). Left to right: iteration 45, 360, 2000 (cmp. to [Lim, 1997, Video]).

Knotted Vortex Filament Producing an initial condition $\Psi$ as described in Appendix 1.D we can simulate the evolution of the trefoil knot (Fig. 1.2). We correctly replicate the reconnection event which occurs when the initial filament crosses itself. This produces two separate filaments with the smaller one moving off and matches experiments [Kleckner and Irvine, 2013, Video].

Oblique Collision A further example of vortex filament dynamics, which are challenging to simulate, are the obliquely colliding vortex rings [Lim, 1989, Videos front \& top]. Fig. 1.3 compares our method with stable fluids
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-023.jpg?height=516&width=1378&top_left_y=265&top_left_x=365)

Figure 1.2: Evolution of a trefoil knot with ISF showing frames 50, 100, 210 (cmp. to [Kleckner and Irvine, 2013, Video]).
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-023.jpg?height=638&width=1218&top_left_y=941&top_left_x=405)

Figure 1.3: Comparison of methods for oblique smoke ring collision at resolution $64^{3}$ (top) and $128^{3}$ (bottom) showing from left to right the initial configuration, stable fluids with RK4 back trace, HJWENO/MacCormack, and ISF, each at frame 600. The vortex filaments have strength $2 \pi \hbar$ for $\hbar=0.05 \mathrm{~m}^{2} / \mathrm{s}$, they are of radius 0.6 m making an angle of $\pm 45^{\circ}$ to the domain with their centers separated by 2 m (cmp. to [Lim, 1989, Videos front $\mathcal{E}$ top]).
and HJWENO/MacCormack at two resolutions. Stable fluids, due to its excessive numerical diffusion cannot reproduce this experiment. HJWENO/MacCormack does better and successfully reproduces the reconnection event, but only at high resolutions. ISF on the other hand produces the correct dynamics already at a moderate resolution $64^{3}$.
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-024.jpg?height=746&width=830&top_left_y=245&top_left_x=645)

Figure 1.4: Two regions of red and blue ink are initialized to constant velocities pointing towards each other. Running ISF with this initial condition produces the corresponding inertial motion dynamics (left to right, top to bottom) at frames 1, 25, 85, and 270. The Bunny and Teapot centers were 2 m apart, each moving towards the other at $1 \mathrm{~m} / \mathrm{s}$.

## Velocity Constraints

Being able to prescribe velocity in a particular region is a basic tool for the construction of initial conditions as well as while a simulation is running. To accomplish this we adopt the volume penalization method [Arquis and Caltagirone, 1984; Angot et al., 1999; Carbou and Fabrie, 2003; Jause-Labert et al., 2012]. This method was devised for standard fluid simulation methods. ${ }^{\text {TI }}$ As shown in Appendix 1.E the method can be translated into our context involving wavefunction $\Psi$.

Consider now the scenario of setting up an initial, divergence free, velocity field with two regions, say the Bunny and the Teapot, each having some constant but different velocity, e.g., pointing at one another. Using the corresponding $\Psi$ as initial condition, we can simulate the consequent inertial motion dynamics (Fig. 1.4).

By enforcing a fixed nonzero velocity in a fixed region, we can simulate a jet (Fig. 1.5). Fig. 1.5 shows the resulting simulation also illustrating the

[^2]![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-025.jpg?height=514&width=1322&top_left_y=247&top_left_x=396)

Figure 1.5: Jet of $1 \mathrm{~m} / \mathrm{s}$ velocity and a nozzle opening radius of 0.3 m . Left to right the parameter $\hbar=0.04,0.03,0.02 \mathrm{~m}^{2} / \mathrm{s}$, illustrating the finer vortical structures with decreasing $\hbar$ due to more plentiful and narrowly spaced vortex filaments. The bottom row visualizes filaments as level set surfaces $\left|\psi_{1}\right|^{2}-\left|\psi_{2}\right|^{2}=0$.
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-025.jpg?height=319&width=1375&top_left_y=1063&top_left_x=375)

Figure 1.6: Von Kármán vortex street forming behind a cylindrical obstacle at frame 1050.
effect of different values for $\hbar$. With decreasing $\hbar$ the strength of each vortex filament is lowered and correspondingly their number increased, resulting in higher nucleation rate of vortices (and thus more turbulence) in the flow. This can also be seen in the direct visualization of the filaments as level set surfaces.

Maintaining a velocity constraint for some region $\Omega$ can also be used to incorporate obstacles into our simulation. In that case $\eta_{\Omega}=\mathrm{o}$ while $\Omega$ may or may not be a function of time. Fig. 1.6 and Fig. 1.7 show examples of a stationary obstacle in a background flow while Fig. 1.8 shows a moving obstacle.

## Arbitrary Initial Conditions

Prescribing velocity using the method mentioned above (Appendix 1.E) is limited to setting constant velocity in a region. In Chapter 6 and Chap-
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-026.jpg?height=299&width=798&top_left_y=241&top_left_x=647)

Figure 1.7: Frame 600 of a spherical obstacle of radius 0.4 m in a $1 \mathrm{~m} / \mathrm{s}$ flow.
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-026.jpg?height=901&width=749&top_left_y=677&top_left_x=704)

Figure 1.8: Example of a moving obstacle at frames 1, 100, and 240.
ter 7 we describe a method to construct a wavefunction $\Psi$ that represents an arbitrarily given velocity. Fig. 1.9 shows an ISF simulation with initial velocity set to be a rigid body rotation (constant vorticity field) in a general region. Unlike the relation between constant velocities and plane waves, a rigid rotating flow does not admit a closed form expression for the wavefunction. Therefore the technique explained in Chapter 6 is required for this example.

## Gravity and Buoyancy

Both gravity and buoyancy are important forces in simulations. A simple way to include two phases of heavy and light fluids is to let $\left|\psi_{1}\right|^{2}$ (resp. $\left|\psi_{2}\right|^{2}$ ) indicate the density of the light (resp. heavy) fluid. Note that ISF is
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-027.jpg?height=972&width=1177&top_left_y=365&top_left_x=455)

Figure 1.9: Fluid simulation by ISF with initial $\Psi$ derived from a general $\mathbf{u}$. Here $\mathbf{u}$ is the divergence-free projection of a rigid-body rotation interior to the bunny (and zero velocity else). The corresponding initial vorticity is uniform in the bunny driving a rigid rotation, and has a concentrated vortex sheet on the surface giving rise to a Kelvin-Helmholtz instability.
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-027.jpg?height=476&width=844&top_left_y=1822&top_left_x=635)

Figure 1.10: A jet subject to a buoyancy force which "bends" it upwards from its tilted initial trajectory at frame 150,350, and 500.
invariant under unitary transforms of $\mathbb{C}^{2}$. " We exploit this gauge symmetry by assigning physical meaning to the component densities $\left|\psi_{1}\right|^{2},\left|\psi_{2}\right|^{2}$.

Now buoyancy and gravity enter at the level of the Schrödinger equation as linearly varying potentials applied differently to each component

$$
i \hbar \frac{\partial}{\partial t} \Psi=-\frac{\hbar^{2}}{2} \Delta \Psi+p \Psi+\left[\begin{array}{cc}
\langle\mathbf{g}, \mathbf{x}\rangle & 0  \tag{1.5}\\
0 & -\langle\mathbf{g}, \mathbf{x}\rangle
\end{array}\right]\left[\begin{array}{l}
\psi_{1} \\
\psi_{2}
\end{array}\right]
$$

with the vector $\mathbf{g} \in \mathbb{R}^{3}$ controlling magnitude and direction while $\mathbf{x} \in \mathbb{R}^{3}$ is the spacial coordinate.

A mathematical justification for the model equation (1.5) is presented in Section 11.2. Before going there, let us discuss it phenomenologically.

The vortices generated at the interface of the two fluids tend to form vortex filaments in each fluid component. Due to the nature of how vortex filaments are represented by $\Psi$ (this will be clear in a later part of this thesis), in the part where $\left|\psi_{1}\right|^{2}$ is mostly 1 (light fluid), the vortex cores are the locations when $\left|\psi_{1}\right|^{2}$ "dips down" to zero. Therefore, our model (1.5) will treat these vortex filaments as heavy/buoyant vortex filament, which agrees with the model proposed in [Saffman, 1992, Sec. 5.8] in the context of classical fluid dynamics.

Since the new potential term in (1.5) does not depend on time, integration is straightforward and amounts to multiplying each component of $\Psi$ with the plane wave (with wave number $\pm \mathrm{g} / \hbar$ ) after normalization but before pressure projection in Alg. 1.

Fig. 1.10 shows an example of a jet with buoyancy causing a gentle upward bend. Fig. 1.11 shows a swirling cigarette smoke whose vortices are developed due to the buoyancy. Fig. 1.12 shows a simulation of heavy dry ice vapor (middle) and the location of vortex filaments visualized as the level-set $\left|\psi_{1}\right|^{2}=\left|\psi_{2}\right|^{2}$ (bottom).

## General Domain

Note that the only spatial operator involved in the incompressible Schrödinger equation is the Laplacian. Laplacian can be defined for a very "weak" domain such as for a manifold, a graph or even a point cloud. One can

[^3]![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-029.jpg?height=741&width=516&top_left_y=231&top_left_x=802)

Figure 1.11: A swirling cigarette smoke simulated with ISF driven by a buoyancy force.
talk about and simulate fluids on these domains without additional effort. Fig. 1.13 shows an example of simulating fluid dynamics on a curved surface using ISF, where the Laplacian is given by the cotan-Laplacian [Pinkall and Polthier, 1993] (or the finite element stiffness matrix) for the triangulated mesh.

### 1.5 Significance and Related Work

Simulations of nearly inviscid incompressible fluids has been a challenge due to a number of reasons. First, fluid equations involve a nonlinear term $\mathbf{u} \cdot \nabla \mathbf{u}$ which requires a carefully designed numerical scheme. In addition, vorticity tends to concentrate in thin filaments [Saffman, 1992] whose dynamics is sensitive to the resolution of the computation grid (ibid, p. 201).

We propose a new approach of approximating fluid dynamics using an incompressible Schrödinger flow (ISF). In ISF the nonlinear advection is replaced by a linear Schrödinger equation. As shown in Section 1.4, ISF is able to capture thin vortex dynamics on a relatively coarse computation grid. ISF also provides a new mathematical framework of describing fluid dynamics, which may give additional insight to the nature of fluid dynamics. Finally, our study of ISF gives a profound theory that connects many different fields of science.
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-030.jpg?height=1879&width=1126&top_left_y=345&top_left_x=494)

Figure 1.12: Comparing experiment (dry ice vapor, top) with ISF simulation (middle), followed by a visualization of the underlying wave function $\psi$. Vorticity is concentrated within the green region.
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-031.jpg?height=793&width=1392&top_left_y=235&top_left_x=361)

Figure 1.13: ISF simulated on a general surface.

## Quantum Mechanics and Superfluids

The hydrodynamical form of quantum mechanics was first discovered by Madelung [1926]. He described that the one-component ( $\mathbb{C}$-valued) Schrödinger equation is equivalent to a quantum Euler equation. The Madelung transform is then applied to $m$-component Schrödinger equation by Schönberg [1954]. Sorokin [2001] gave a version of a $\mathbb{C}^{2}$-valued Schrödinger equation (with non-linear potential) so that it recovers the classical barotropic Euler equation. Madelung's quantum hydrodynamics was not paid much attention in fluid mechanics, whereas quantum physicists' attention were drawn to a similar theory called Bohmian mechanics [Tsekov, 2009].

Another instance where Schrödinger equation arises in the context of fluids is in the study of superfluids. A superfluid is a condensed state of a bunch of bosonic atoms such as liquid helium-II. In it the vortices are topological features their vortex dynamics similar to those of ordinary fluids [K. W. Schwarz, 1985; Stagg et al., 2014]. Due to the "topological protection" the filaments are far more persistent and computationally resolvable even at relatively modest resolutions. This feature about superfluids was also a motivation of ISF.

Early on in the history of the study of superfluids it was recognized that they carry quantized vorticity in atomic scale filaments [Onsager, 1949;

Feynman, 1955]. A mathematical model for the observed physics of superfluids was developed by Gross [1961] and Pitaevskii [1961] (and earlier Ginsburg and Pitaevskii [1958]). This model is now known as the GrossPitaevskii (GP) equation, or simply the non-linear Schrödinger (NLS) equation

$$
i \hbar \frac{\partial}{\partial t} \psi=-\frac{\hbar^{2}}{2} \Delta \psi+\frac{1}{a^{2}}\left(|\psi|^{2}-1\right) \psi
$$

for $\psi: M \rightarrow \mathbb{C}$ and a parameter $a>0$ which for us corresponds to the core radius of vortex filaments. The non-linear (cubic) term acts as a potential opposing the deviation of the density $q=|\psi|^{2}$ from 1 . Indeed, in the solutions to the GP equation the density is near 1 in most of the domain, save for the zero set of $\psi$ in whose vicinity the density smoothly decreases to zero [Stagg et al., 2014]. Taking the limit $a \rightarrow$ o one expects the non-linear term to converge to the incompressible limit and hence the GP equation to recover the Euler equations for its hydrodynamical variables. In 2D this has been rigorously established [Lin and Xin, 1999; Jerrard and Spirn, 2015].

So why not simulate fluids using the GP equation? As a practical matter, choosing a small $a$ in the cubic term leads to very stiff numerical problems. Since we are only interested in the incompressible setting, we can replace the cubic non-linearity with the incompressibility constraints. For single component wave functions the uniform density constraint $|\psi|^{2}=1$ yields singular $\psi$ and allows for irrotational velocity fields only. Using instead a two-component wave function $\Psi: M \rightarrow \mathbb{C}^{2}$ leaves $\Psi$ smooth under the constraint $|\Psi|^{2}=1$. Additionally it allows for smoothly varying vorticity [Schönberg, 1954; Sorokin, 2001].

Two threads from Physics have influenced our work. On one hand the hydrodynamical form of quantum physics and on the other the GP equation for the modeling of superfluids. In our work we use a $\mathbb{C}^{2}$-valued wavefunction and impose an incompressibility constraint with pressure projection. It turns out that by going to $\mathbb{C}^{2}$ there reveals a fundamental connection between the spin in the Schrödinger equation and the Clebsch variables in classical fluids.

## Clebsch Variables

In the study of hydrodynamics, Alfred Clebsch in 1859 proposed what is now known as the Clebsch representation [Clebsch, 1859]. It encodes the
fluid velocity field $\mathbf{u}$ with the aid of scalar functions $\lambda, \mu, \varphi$, writing

$$
\mathbf{u}=\lambda \operatorname{grad} \mu-\operatorname{grad} \varphi
$$

The vorticity vector field $\mathbf{w}$, in turn, is represented by

$$
\mathbf{w}=\operatorname{curl} \mathbf{u}=\operatorname{grad} \lambda \times \operatorname{grad} \mu
$$

A set of Clebsch variables $\lambda, \mu, \varphi$ is shown to be important variables describing the Euler fluid flow as a Hamiltonian system [Jerrold Marsden and Weinstein, 1983]. In addition, by the way vorticity fields are encoded, Clebsch variables are useful for flow visualization Kotiuga, 1991, analysis Jeong and Hussain, 1995, simulation He and Yang, 2016; Yang and Pullin, 2010; Brandenburg, 2010; Cartes et al., 2007, and enhancement among others.

However, the Clebsch representation can only represent fields with zero helicity. This problem is usually addressed with multi-component Clebsch variables [Cartes et al., 2007; Graham and Henyey, 2000; Zakharov and Kutznetsov, 1997]. Unfortunately, the vorticity is no longer represented in a way useful for understanding the vortex structure (this requires $(\lambda, \mu)$ together be 2-dimensional-valued).

Kuznetsov and Mikhailov [1980] proposed a different type of generalized Clebsch variables. In the original Clebsch variables, vorticity is represented using $(\lambda, \mu)$ together as an $\mathbb{R}^{2}$-valued map. Kuznetsov and Mikhailov considered an $\mathbb{S}^{2}$-valued map in place of $\mathbb{R}^{2}$. Such spherical Clebsch maps are proven capable of representing fields with non-zero helicity. At the same time spherical Clebsch maps is 2-dimensional-valued and hence it is potentially useful for flow visualization and analysis. However, there had not been a numerical approach finding an approximated spherical Clebsch map for the latter purpose.

Now the threads of quantum physics connect to Clebsch variables in fluid dynamics. The spin vector (also known as the Bloch vector) in a $\mathbb{C}^{2}$-valued wavefunction is a spherical Clebsch variable. In other words, the variables for ISF are also useful for visualize vortex structures by extracting their spin vectors. While it is easy to extract the velocity from the wavefunction, the solution to its inverse problem is not that obvious. Our work also include a practical algorithm for approximating a wavefunction, and therefore a spherical Clebsch map, for an arbitrary given flow data.

## Theoretical Euler's Equation

Understanding the nature of incompressible flow is a long standing mathematical problem. In particular, at the PDE level the Euler equation is known to have singular nature. For example the weak solution to the Euler equation is not unique [Shnirelman, 1997]. Moreover, there are strong evidences that a finite time blow up solution can occur even for smooth initial condition [Luo and Hou, 2014; Hou et al., 2017]. A standard way to proceed approaching such a singular equation is to perturb the equation by a regularization term. An obvious choice of such a modifying term is a diffusion term (viscosity force). However, the regularity problem on the resulting Navier-Stokes equation is not simpler. Besides, most modifying term will not maintain the vortex structures in the fluid. For example the viscosity term diffuses vortex cores and slows down their motion.

We show that ISF is an Euler equation modified with a Landau-Lifshitz term. More precisely, there is an additional variable, the spin, which is subject to not only an equation that gives rise to an Euler flow, but also a gyromagnetic force that appears in the theory of Landau-Lifshitz ferromagnetism. This Landau-Lifshitz term essentially turns the Euler equation into a Schrödinger equation, with straightforward a priori estimate on the regularity of the spin vectors due to conservation of energy. Moreover, the additional Landau-Lifshitz term will not only maintain but enhance the vortex structure in the fluid. The vortex filaments in an ISF will move slightly faster than the same ones in an Euler fluid, as if they are vortex filaments in an Euler fluid but with a smaller vortex radius (a more concentrated vortex).

These qualities of ISF may also lead to an approach for understanding Euler equation at a fundamental level.

## 1.A Madelung Transform

The Schrödinger equation for a $\mathbb{C}$-valued wavefunction $\psi$ is given in (1.2), or equivalently

$$
\begin{equation*}
\frac{\partial}{\partial t} \psi=\frac{i \hbar}{2} \Delta \psi-\frac{i}{\hbar} p \psi \tag{1.6}
\end{equation*}
$$

Write $\psi=r e^{i \theta}$. Let $q=r^{2}$ and $\mathbf{u}=\hbar \nabla \theta$ which represents fluid density and velocity respectively. Now, in terms of $r$ and $\theta$ the derivatives of $\psi$ are
given by

$$
\begin{aligned}
& \nabla \psi=\nabla r e^{i \theta}+i r \nabla \theta e^{i \theta} \\
& \frac{\partial}{\partial t} \psi=\frac{\partial r}{\partial t} e^{i \theta}+i r \frac{\partial \theta}{\partial t} e^{i \theta} \\
& \Delta \psi=\nabla \cdot(\nabla \psi)=\Delta r e^{i \theta}+2 i \nabla r \cdot \nabla \theta e^{i \theta}+i r \Delta \theta e^{i \theta}-r|\nabla \theta|^{2} e^{i \theta}
\end{aligned}
$$

Therefore the Schrödinger equation (1.6) becomes

$$
\begin{equation*}
\frac{\partial r}{\partial t}+i r \frac{\partial \theta}{\partial t}=\frac{i \hbar}{2} \Delta r-\hbar \nabla r \cdot \nabla \theta-\frac{\hbar}{2} r \Delta \theta-\frac{i \hbar}{2} r|\nabla \theta|^{2}-\frac{i}{\hbar} p r \tag{1.7}
\end{equation*}
$$

where we have eliminated the common factor $e^{i \theta}$. Now the real and the imaginary parts of (1.7) read

$$
\begin{align*}
& \frac{\partial}{\partial t} r=-\hbar \nabla r \cdot \nabla \theta-\frac{\hbar}{2} r \Delta \theta  \tag{1.8}\\
& r \frac{\partial}{\partial t} \theta=\frac{\hbar}{2} \Delta r-\frac{\hbar}{2} r|\nabla \theta|^{2}-\frac{1}{\hbar} p r . \tag{1.9}
\end{align*}
$$

Multiply $2 r$ to (1.8), make the substitutions $q=r^{2}, \mathbf{u}=\hbar \nabla \theta$, and use the fact that $2 r \nabla r=\nabla\left(r^{2}\right)$ and $2 r \frac{\partial}{\partial t} r=\frac{\partial}{\partial t}\left(r^{2}\right)$ to obtain

$$
\frac{\partial}{\partial t} q=-\mathbf{u} \cdot \nabla q-q \nabla \cdot \mathbf{u}
$$

which can be rewritten as

$$
\begin{equation*}
\frac{\partial}{\partial t} q+\nabla \cdot(q \mathbf{u})=0 \tag{1.10}
\end{equation*}
$$

Divide (1.9) by $r$, take $\hbar \nabla$, and make the same substitutions to obtain

$$
\begin{align*}
\frac{\partial}{\partial t} \mathbf{u} & =\nabla\left(\frac{\hbar^{2}}{2} \frac{\Delta \sqrt{q}}{\sqrt{q}}\right)-\frac{1}{2} \nabla|u|^{2}-\nabla p \\
& =\nabla\left(-p+\frac{\hbar^{2}}{2} \frac{\Delta \sqrt{q}}{\sqrt{q}}\right)-\mathbf{u} \cdot \nabla \mathbf{u} . \tag{1.11}
\end{align*}
$$

Combining the continuity equation (1.10) and the momentum equation (1.11), one concludes that under the Schrödinger flow, the hydrodynamics variables $q$ and $\mathbf{u}$ satisfy

$$
\left\{\begin{array}{l}
\frac{\partial}{\partial t} q+\nabla \cdot(q \mathbf{u})=0,  \tag{1.12}\\
\frac{\partial}{\partial t} \mathbf{u}+(\mathbf{u} \cdot \nabla) \mathbf{u}=-\nabla\left(p-\frac{\hbar^{2}}{2} \frac{\Delta \sqrt{q}}{\sqrt{q}}\right)
\end{array}\right.
$$

Equation (1.12) is also called the quantum Euler equation. The term $-\frac{\hbar^{2}}{2} \frac{\Delta \sqrt{q}}{\sqrt{q}}$ is called the Bohm potential.

Here we only show the $\mathbb{C}$-valued Madelung transform. In our work we use the $\mathbb{C}^{2}$-valued Madelung transform, in which the effect of the Bohm potential is eliminated by imposing $q=1$.
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-036.jpg?height=640&width=1367&top_left_y=298&top_left_x=374)

Figure 1.14: In all, 9 reals are stored at vertices: $\Psi_{v}, \xi_{v}, q_{v}$, and the three circulations $\left(\eta_{1}, \eta_{2}, \eta_{3}\right)_{\mathrm{v}}^{\top}$ associated with the edges emanating in the positive coordinate directions. The divergence $\xi_{\mathrm{v}}$ is the normalized sum of the face fluxes $\frac{A_{\mathrm{vw}}}{\ell_{\mathrm{vw}}} \eta_{\mathrm{vw}}$ on the enclosing cube.

## 1.B Implementation Details

Here we include the implementation details for ISF (Algorithm 1) on a regular 3D grid.

A typical simulation is performed on a 3D lattice with vertex set $\mathcal{V}=$ $\left\{0, \ldots, \mathcal{N}_{x}-1\right\} \times\left\{0, \ldots, \mathcal{N}_{y}-1\right\} \times\left\{0, \ldots, \mathcal{N}_{z}-1\right\}$. For a periodic domain, indices are taken modulo their respective dimension. The set of directed edges $\mathcal{E}$ consists of ordered adjacent vertices $\mathrm{vw} \in \mathcal{E}$. Vertices, $\mathrm{v} \in \mathcal{V}$, need to store samples of the wave function $\Psi_{v} \in \mathbb{C}^{2}$, the real-valued potential $\varphi_{v} \in \mathbb{R}$, and the real-valued divergence $\xi_{v} \in \mathbb{R}$. The discrete velocity is stored as the circulation along directed edges $\mathrm{vw} \in \mathcal{E}$

$$
\begin{equation*}
\eta_{\mathrm{vw}}:=\hbar \arg \left(\bar{\Psi}_{\mathrm{v}}^{\top} \Psi_{\mathrm{w}}\right) \approx \int_{\mathrm{v}}^{\mathrm{w}} \mathbf{u} \cdot d \boldsymbol{\ell} \tag{1.13}
\end{equation*}
$$

with $\eta_{\mathrm{vw}}=-\eta_{\mathrm{wv}}$ (App. 1.C).
The discrete divergence, $\xi=\operatorname{div} \mathbf{u}$, is the usual signed sum over incident edges, weighted by the quotient of dual facet area $A_{\mathrm{vw}}$ to edge length $\ell_{\mathrm{vw}}$ and normalized by dual cell volume $V_{\mathrm{v}}$ (Fig. 1.14)

$$
\begin{equation*}
\xi_{\mathrm{v}}=\frac{1}{V_{\mathrm{v}}} \sum_{\mathrm{vw} \in \mathcal{E}} \frac{A_{\mathrm{vw}}}{\ell_{\mathrm{vw}}} \eta_{\mathrm{vw}} \tag{1.14}
\end{equation*}
$$

following standard Discrete Exterior Calculus (DEC) conventions [Desbrun et al., 2008; Crane et al., 2013].

Schrödinger integration diagonalizes in the Fourier domain, leading us to use the FFT (on periodic domains). In a closed box, the no-through boundary condition $\mathbf{u} \cdot \mathbf{n}=\mathrm{o}$ is described with the Neumann boundary condition $\frac{\partial}{\partial \mathbf{n}} \Psi=\mathbf{0}$, which is achieved with the discrete cosine transform (DCT). Here $\lambda_{\mathrm{v}}$ are the eigenvalues of the continuous ${ }_{3} \mathrm{D}$ Laplace operator.**

```
Algorithm 2 Time integration of Schrödinger equation
    function SchröDINGER $(\Psi, \Delta t, \hbar)$
        $\hat{\Psi} \leftarrow \mathrm{FFT}_{3} \mathrm{D}(\Psi)$
        $\hat{\Psi} \leftarrow e^{i \lambda \Delta t \hbar / 2} \hat{\Psi}$
        return $\operatorname{InvFFT} 3 \mathrm{D}(\hat{\Psi})$
    end function
```

Pressure projection requires solving the Poisson problem (1.4). We use an FFT (or DCT) to invert the Poisson problem using eigenvalues $\tilde{\lambda}_{\mathrm{v}}$ of the discrete Laplacian (1.15) for discretely divergence free velocity fields. ${ }^{+\dagger}$

[^4]```
Algorithm 3 Divergence free constraint
    function PressureProject( $\Psi$ )
        for each $\mathrm{vw} \in \mathcal{E}$ do $\quad \triangleright$ Velocity circulation on edges
            $\tilde{\eta}_{\mathrm{vw}}=\hbar \arg \left(\bar{\Psi}_{\mathrm{v}}^{\top} \Psi_{\mathrm{w}}\right)$
        end for
        for each $v \in \mathcal{V}$ do $\quad \triangleright$ Divergence at vertices
            $\xi_{\mathrm{v}}=\frac{1}{V_{\mathrm{v}}} \sum_{\mathrm{vw} \in \mathcal{E}} \frac{A_{\mathrm{vw}}}{\ell_{\mathrm{vw}}} \tilde{\eta}_{\mathrm{vw}} \quad \triangleright(1.14)$
        end for
        $\hat{\xi} \leftarrow \mathrm{FFT}_{3} \mathrm{D}(\xi)$
        $\hat{\varphi} \leftarrow \hat{\xi} \cdot \begin{cases}1 / \tilde{\lambda} & \text { if } \tilde{\lambda} \neq 0 \\ 0 & \end{cases}$
        $\varphi \leftarrow \operatorname{InvFFT3D}(\hat{\varphi})$
        return $e^{-i \varphi / \hbar} \Psi$
    end function
```

This completes the description of the basic algorithm. While we make extensive use of the FFT (or DCT) the method is not tied to regular grids. For example, once the Laplacian is discretized the Schrödinger integration could use the Crank-Nicolson method or other matrix exponential methods [Al-Mohy and Higham, 2011], while the pressure projection step might employ [McAdams et al., 2010].

## 1.C Discrete Circulation

Here we prove that the discrete velocity 1 -form is given by

$$
\eta_{\mathrm{vw}}=\hbar \arg \left(\bar{\Psi}_{\mathrm{v}}^{\top} \Psi_{\mathrm{w}}\right)
$$

and arises, as is standard, from computing the circulation of the smooth velocity 1 -form along the straight edge vw

$$
\eta_{\mathrm{vw}}=\hbar \int_{\mathrm{vw}} \operatorname{Re}\left(-\bar{\Psi}^{\top} i d \Psi\right)
$$

This formula presupposes that we have chosen along vw a curve $\gamma:[\mathrm{O}, \mathrm{I}] \rightarrow$ $\mathbb{C}^{2},|\gamma(t)|^{2}=1$ that interpolates between $\Psi_{v}$ and $\Psi_{w}$. We will assume $\bar{\Psi}_{\mathrm{v}}^{\top} \Psi_{\mathrm{w}} \neq \mathrm{O}$, so there is a unique shortest geodesic path $c:[0,1] \rightarrow \mathbb{C} \mathbb{P}^{1} \cong \mathbb{S}^{2}$ with $c(\mathrm{o})=\left[\Psi_{\mathrm{v}}\right]$ and $c(1)=\left[\Psi_{\mathrm{w}}\right]$ where $[\cdot]: \mathbb{C}^{2} \rightarrow \mathbb{C P}^{1}$ is the canonical projection, or the Hopf map presented in later chapters. We will construct $\gamma$ in such a way that $[\gamma]=c$.

We distinguish two cases: (1) $\Psi_{\mathrm{v}}$ and $\Psi_{w}$ are linearly dependent or (2) independent, and construct $\gamma$ explicitly in each case.

Suppose they are dependent, i.e., $\Psi_{w}$ is a complex scalar multiple of $\Psi_{\mathrm{v}}$, then in fact $\Psi_{\mathrm{w}}=e^{i \eta_{\mathrm{vw}}} \Psi_{\mathrm{v}}$. Letting $\alpha:[\mathrm{O}, \mathrm{I}] \rightarrow \mathbb{R}$ with $\alpha(\mathrm{o})=\mathrm{o}$ and $\alpha(1)=$ $\eta_{\mathrm{vw}}, \gamma(t):=e^{i \alpha(t)} \Psi_{\mathrm{v}}$ will serve our purposes and

$$
\begin{equation*}
\hbar \int_{0}^{1} \operatorname{Re}\left(-\bar{\gamma}^{\top} i d \gamma\right)=\hbar \int_{0}^{1} d \alpha=\eta_{\mathrm{vw}}=\hbar \arg \left(\bar{\Psi}_{\mathrm{v}}^{\top} \Psi_{\mathrm{w}}\right) . \tag{1.17}
\end{equation*}
$$

Suppose now that $\Psi_{\mathrm{v}}$ and $\Psi_{\mathrm{w}}$ are independent, i.e., $\bar{\Psi}_{\mathrm{v}}^{\top} \Psi_{\mathrm{w}}=\cos (\beta) e^{i \eta_{\mathrm{vw}}}$, with $\eta_{\mathrm{vw}} \in(-\pi, \pi)$ and $\beta \in(0, \pi / 2)$. Define $\Phi:=\csc (\beta)\left(e^{-i \eta_{\mathrm{vw}}} \Psi_{\mathrm{w}}-\cos (\beta) \Psi_{\mathrm{v}}\right)$. One easily checks that $\bar{\Psi}_{\mathrm{v}}^{\top} \Phi=0,|\Phi|^{2}=1$ and

$$
\Psi_{\mathrm{w}}=e^{i \eta_{\mathrm{vw}}}\left(\cos (\beta) \Psi_{\mathrm{v}}+\sin (\beta) \Phi\right)
$$

Let now $\gamma(t):=e^{i \alpha(t)}\left(\cos (\beta t) \Psi_{\mathrm{v}}+\sin (\beta t) \Phi\right)$ and substitute in (1.17) to find the desired result.

## 1.D Wavefunctions for Vortex Filaments

To simulate interacting vortex filaments we need an initial $\Psi$ which represents one or more vortex filaments. Since $\Psi$ for multiple filaments are just the componentwise product of single filament $\Psi$ functions, we begin by describing a simple method for the construction of $\Psi$ for a single filament curve $\gamma$.

Suppose $\gamma$ is the boundary of an embedded topological disk, $\gamma=\partial \Sigma$. We first construct a complex function $e^{i \theta}$ which has $\gamma$ as its branch singularity. Consider the volume created by a positive and negative offset of the oriented surface $\Sigma$ along
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-039.jpg?height=267&width=411&top_left_y=1558&top_left_x=1334)
its normal direction for distance $r>0$ (see inset). In this "slab" of thickness $2 r$ with $\Sigma$ as its middle surface, set

$$
\theta=\pi\left(1+\frac{d}{r}\right)
$$

for $d$ the signed distance function of $\Sigma$. Letting $\theta=0$ outside the slab, we define $\Psi=\left(e^{i \theta}, c\right)$ for a small constant $c$ (say $c=0.01$ ). At this step $\Psi$ corresponds to a flow field that has an impulse velocity pointing normal to $\Sigma$ and supported on the slab. Pointwise normalizing and pressure projecting $\Psi$ then gives us the desired wavefunction encoding the divergence-free velocity field with its curl concentrated on the curve $\gamma=\partial \Sigma$.

This method also works for far more complex filaments since there always exists a Seifert surface, i.e., an embedded, oriented surface $\Sigma$, which is bounded by the closed curve $\gamma$ [Seifert, 1935]. Software to construct it is readily available [van Wijk and
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-040.jpg?height=356&width=562&top_left_y=207&top_left_x=1199)

Cohen, 2005, SeifertView]. The inset shows the Seifert surface for the trefoil knot.

## 1.E Volume Penalization for Wavefunctions

Incorporating obstacles and building initial conditions for simulations such as Fig. 1.4 require prescribing constant velocity in certain regions. In the context of our wavefunction $\Psi$ this amounts to enforcing a plane wave in a particular region. Given a wave vector $\mathbf{k} \in \mathbb{R}^{3}$, a plane wave is given by the function

$$
\xi^{\mathbf{k}, t, \hbar}=\exp \left(i \mathbf{k} \cdot \mathbf{x}-i \hbar / 2|\mathbf{k}|^{2} t\right)
$$

$\Psi(\mathbf{x}, t)=\xi^{\mathbf{k}, t, \hbar}\left(c_{1}, c_{2}\right)^{\top}$ (for any constants $c_{1}, c_{2} \in \mathbb{C}$ with $\left|c_{1}\right|^{2}+\left|c_{2}\right|^{2}=1$ ) is then a solution of ISF corresponding to the constant velocity field $\mathbf{u}=\hbar \mathbf{k}$.

Formally, we seek a $\Psi$ corresponding to a divergence free $\mathbf{u}$, constrained to have $\mathbf{u}_{\Omega}$ in some subset $\Omega$ of the fluid domain.

$$
\begin{equation*}
\left.\mathbf{u}\right|_{\Omega}=\mathbf{u}_{\Omega} \quad \text { and } \quad \operatorname{div} \mathbf{u}=\mathrm{o} . \tag{1.18}
\end{equation*}
$$

$\Omega$ may have several connected components, and $\mathbf{u}_{\Omega}$ correspondingly specify a velocity for each component representing translating objects. We construct a (1.18)-satisfying u through alternating projection, which enforces the velocity constraint and subsequently ensures vanishing divergence through pressure projection.

```
Algorithm 4 Velocity constraint projection
    function ConstraintProjection $(\Psi, \Omega, \mathbf{k}, \hbar, t)$
        $\Psi^{\mathrm{tmp}} \leftarrow \Psi$
        $\left.\Psi^{\mathrm{tmp}}\right|_{\Omega} \leftarrow \xi^{\mathrm{k}, t, \hbar}\left(\left|\psi_{1}\right|,\left|\psi_{2}\right|\right)^{\top}$
        return PressureProject（ $\Psi^{\mathrm{tmp}}$ )
    end function
```

Starting with an initial guess with $\Psi_{\Omega}=\left(c_{1}, c_{2}\right)^{\top}$, iterating Alg. 4 is guaranteed to converge [Cheney and Goldstein, 1959]. We find that 5-10 iterations are sufficient in practice.

The volume penalization method includes one or a few calls of Alg. 4 in each time step of the fluid simulation. In the context of a standard NavierStokes equation solver, one effectively solves

$$
\frac{\partial}{\partial t} \mathbf{u}+(\mathbf{u} \cdot \nabla) \mathbf{u}=v \Delta \mathbf{u}-\nabla p-\frac{1}{\alpha} \chi_{\Omega}\left(\mathbf{u}-\mathbf{u}_{\Omega}\right) \quad \text { and } \quad \operatorname{div} \mathbf{u}=0
$$

Here $v$ is the kinematic viscosity and $\chi_{\Omega}$ the characteristic function of $\Omega$. For the parameter $\alpha \rightarrow 0$ the solution converges to a solution of the NavierStokes equation which respects the constraints [Angot et al., 1999; Carbou and Fabrie, 2003]. By adopting the implicit Euler method for integrating $\frac{\partial}{\partial t} \mathbf{u}=-\frac{1}{\alpha} \xi_{\Omega}\left(\mathbf{u}-\mathbf{u}_{\Omega}\right)$ [Jause-Labert et al., 2012], we can take the limit of $\alpha \rightarrow$ o directly. In terms of $\Psi$, it amounts to a single call of Alg. 4.

## PRELIMINARY: CLASSICAL FLUID DYNAMICS

In this chapter we take a journey through a brief history of the Euler equation during the 18th and 19th century. We exposit the results for hydrodynamics from that time, but we write them in the language of modern differential geometry. We also take this chance to introduce the notations used in this dissertation.

Most of the historical reference follows [Frisch and Villone, 2014] and the original papers by the mentioned scientists.

### 2.1 Euler Equations

In a series of memoirs published in the 1750s [Euler, 1755; Frisch, 2008], Leonhard Euler (1707-1783) gave the equations of motion for inviscid, incompressible fluids in $\mathbb{R}^{3}$

$$
\left\{\begin{array}{l}
\frac{\partial}{\partial t} \mathbf{u}+(\mathbf{u} \cdot \nabla) \mathbf{u}=-\nabla p+\mathbf{g}  \tag{2.1}\\
\nabla \cdot \mathbf{u}=\mathrm{o}
\end{array}\right.
$$

and the compressible one

$$
\left\{\begin{array}{l}
\frac{\partial}{\partial t} q+\nabla \cdot(q \mathbf{u})=0  \tag{2.2}\\
\frac{\partial}{\partial t} \mathbf{u}+(\mathbf{u} \cdot \nabla) \mathbf{u}=-\frac{1}{q} \nabla p+\mathbf{g} .
\end{array}\right.
$$

Here the time-dependent vector field $\mathbf{u}: \mathbb{R}^{3} \rightarrow \mathbb{R}^{3}$ denotes the velocity, $\mathbf{g}: \mathbb{R}^{3} \rightarrow \mathbb{R}^{3}$ the external acceleration, and $q: \mathbb{R}^{3} \rightarrow \mathbb{R}$ the fluid density. The scalar function $p: \mathbb{R}^{3} \rightarrow \mathbb{R}$ is the fluid pressure giving the internal potential force.

Euler derived (2.1), (2.2) by tracing a fluid element flowing with the fluid in an infinitesimal time period, and applying Newton's law of motion. We follow Euler's arguments in his original memoir but encapsulate his coordinate notations into coordinate-free forms. By doing so the fluid equations can be derived on a Riemannian manifold $M$ with an arbitrary dimension.

## Derivation

Let time-dependent vector fields $u_{t} \in \Gamma(T M)$ and $g_{t} \in \Gamma(T M)$ represent the observed velocity field and external acceleration respectively. Let timedependent functions $p_{t}, q_{t}: M \rightarrow \mathbb{R}$ be the pressure and the density respectively. For each time $t \in[\mathrm{O}, \epsilon]$ let $\phi_{t}: M \rightarrow M$ be the flow map integrated from the velocity:

$$
\begin{equation*}
\phi_{0}(x)=x, \quad \frac{\partial}{\partial t} \phi_{t}(x)=u_{t}\left(\phi_{t}(x)\right) . \tag{2.3}
\end{equation*}
$$

Then a flowing particle with time-dependent position $\phi_{t}(x)$ experiences an acceleration at $t=0$ given by

$$
\begin{equation*}
\left.\frac{\partial^{2}}{\partial t^{2}}\right|_{t=0} \phi_{t}(x)=\left.\frac{\partial}{\partial t}\right|_{t=0}\left(u_{t} \circ \phi_{t}(x)\right)=\dot{u}_{0}(x)+\nabla_{u_{0}} u_{0}(x) \tag{2.4}
\end{equation*}
$$

where $\nabla$ is the Levi-Civita connection (covariant derivative) for spacial derivatives of tangent vector fields.

Now we seek for the forces acting on an small volume element (Euler took an infinitesimal parallelpiped) around the above accelerating particle. In the modern language we look at the top-dimensional differential forms. The mass of a volume element is given by

$$
\begin{equation*}
\rho=\star q \tag{2.5}
\end{equation*}
$$

where $\star$ is the Hodge star on $M$. In $\mathbb{R}^{3}, \rho=q d x d y d z$. Let $\Omega$ be a small neighborhood of $x$ whose mass is given as $\int_{\Omega} \rho$. The total force $f_{p}$ due to pressure acting on $\Omega$ is given by the integral of $-p N$ over the surface $\partial \Omega$ where $N$ is the surface unit outer normal.

Note that there is a subtlety that the integrand $p N$ are vectors at different locations on a manifold and there is no meaningful way of summing them. To get around this problem we project the force onto an auxilieary vector field.

For each direction $X \in T_{x} M$ we extend $X$ to a vector field on $\Omega$ so that $\operatorname{div}(X)=0$. (In $\mathbb{R}^{3} X$ is usually taken as a constant vector e.g. a coordinate axis). The total force $f_{p}$ on $\Omega$ projected in the direction $X$ is given by

$$
\begin{equation*}
\left\langle f_{p}, X\right\rangle=-\int_{\partial \Omega} p\langle N, X\rangle\left(\star_{\partial \Omega} 1\right)=-\int_{\partial \Omega} p \iota_{X}(\star 1) \tag{2.6}
\end{equation*}
$$

where $\star_{\partial \Omega}$ is the Hodge star on the submanifold $\partial \Omega$ and $\iota_{X}$ is the interior product with $X$. By Stokes' Theorem,

$$
\begin{aligned}
\left\langle f_{p}, X\right\rangle & =-\int_{\Omega} d\left(p \iota_{X}(\star 1)\right)=-\int_{\Omega} d p \wedge \iota_{X}(\star 1)-\int_{\Omega} p d \iota_{X}(\star 1) \\
& =-\int_{\Omega}\left(\iota_{X} d p\right) \star 1-\int_{\Omega} p \underbrace{\mathcal{L}_{X}(\star 1)}_{\star \operatorname{div} X=0} \\
& =\int_{\Omega}-\langle\operatorname{grad} p, X\rangle \star 1 .
\end{aligned}
$$

Together with the external acceleration $g$, the acceleration at $x$ in the direction $X$ is given by

$$
\lim _{\Omega \rightarrow\{x\}} \frac{\int_{\Omega}-\langle\operatorname{grad} p, X\rangle \star 1}{\int_{\Omega} \rho}+\langle g, X\rangle=\left\langle-\frac{1}{q} \operatorname{grad} p+g, X\right\rangle .
$$

Therefore the acceleration vector at $x$ equals to $-\frac{1}{q} \operatorname{grad} p+g$. Finally one equates this acceleration with the observed acceleration (2.4) and gets the momentum equation

$$
\begin{equation*}
\dot{u}+\nabla_{u} u=-\frac{1}{q} \operatorname{grad} p+g . \tag{2.7}
\end{equation*}
$$

For the continuity equation, Euler computed that the rate of change in density along particle path $\dot{q}+d q(u)$ equals to $-q \operatorname{div} u$, since $q$ is inversely proportional to the volume, and $\mathcal{L}_{u}(\star 1)=(\operatorname{div} u) \star 1$. Using

$$
\begin{aligned}
\star \operatorname{div}(q u) & =\mathcal{L}_{q u}(\star 1)=d\left(q \iota_{u}(\star 1)\right) \\
& =d q \wedge \iota_{u}(\star 1)+q(\operatorname{div} u) \star 1 \\
& =\left(\left(\iota_{u} d q\right)+q \operatorname{div} u\right) \star 1
\end{aligned}
$$

one has

$$
\begin{equation*}
\dot{q}+\operatorname{div}(q u)=0 \tag{2.8}
\end{equation*}
$$

## Incompressible Flow

If the fluid is incompressible, there is no change in volume $\mathcal{L}_{u}(\star 1)=\mathrm{o}$ along the flow. In this case, we have

$$
\begin{equation*}
\operatorname{div} u=0 \tag{2.9}
\end{equation*}
$$

Divergence free vector field is also called solenoidal, meaning "as if flowing in a pipe." Such flow property was first described by d'Alembert. We
also use the term "solenoidal" for coclosed 1-forms, the differential form counterpart of divergence-free vector fields.

From now on we consider only incompressible fluids with homogeneous density:

$$
\left\{\begin{array}{l}
\dot{u}+\nabla_{u} u=-\frac{1}{q} \operatorname{grad} p+g  \tag{2.10}\\
\operatorname{div} u=0 .
\end{array}\right.
$$

Euler mentioned in his memoir that the community at the time only knew how to deal with potential forces and potential flows, and there were no mature analytical tools beyond it. He gave multiple non-potential flow examples such as rotating flow and shear flow satisfying his fluid equation.
"...it is not the laws of Mechanics that we lack in order to pursue this research but only the Analysis, which has not yet been sufficiently developed for this purpose. It is therefore clearly apparent what discoverties we still need to make in this branch of Science before we can arrive at a more perfect Theory of the motion of fluids."

- Leonhard Euler, 1755
translated by Uriel Frisch


### 2.2 Lagrange's 1-form

Lagrange (1736-1813) introduced a different viewpoint for describing continuum mechanics and derived with it the incompressible Euler equation in his book published in 1788 [Lagrange, 1788]. High level speaking, Lagrange's description uses differential forms (co-vectors) instead of vectors.

For a continuum a deformation is described by a map $\phi_{t}: M_{0} \rightarrow M_{t}$ where $t$ indicates time. Instead of formulating the law of motion on $M_{t}$ at each instance of time (Eulerian coordinate), Lagrange described the law of motion for the deformation $\phi_{t}$ as a function on the domain $M_{\mathrm{O}}$ (Lagrangian coordinate).

## Law of Motion in Lagrangian Coordinates

Suppose $f_{t} \in \Gamma\left(T M_{t}\right)$ is an accleration field due to external force. Let $a \in M_{\mathrm{o}}$ be a point in the Lagrangian coordinate. Let $A \subset M_{\mathrm{o}}$ be a small neighborhood of $a$ viewed as a volume element. Now, for each vector $X \in T_{a} M_{\mathrm{o}}$, we
extend it to a continuous vector field on $A$. Using this auxiliary vector field $X$, we examine how the external acceleration acts on the deforming body $\phi_{t}(A)$. Let us further denote $q_{t}: M_{t} \rightarrow \mathbb{R}$ as the material density and $\star_{t} \mathrm{I}$ as the volume form at time $t$. Let $\rho_{t}=q_{t}\left(\star_{t} 1\right) \in \Omega^{n}\left(M_{t}\right)$ be the density form. Then the total force acting on the deformed vector $d \phi_{t}(X)$ in the deforming body $\phi_{t}(A)$ is given by

$$
\int_{\phi_{t}(A)}\left\langle f_{t}, d \phi_{t}(X)\right\rangle \rho_{t}=\int_{A}\left\langle f_{t} \circ \phi_{t}, d \phi_{t}(X)\right\rangle \phi_{t}^{*} \rho_{t}
$$

where $\phi_{t}^{*}$ is the pullback operator. By the conservation of mass, for any region $\Omega \subset M_{\mathrm{O}}$ one has $\int_{\Omega} \phi_{t}^{*} \rho_{t}=\int_{\phi_{t}(\Omega)} \rho_{t}=\int_{\Omega} \rho_{\mathrm{o}}$. Therefore $\phi_{t}^{*} \rho_{t}=\rho_{\mathrm{O}}=$ $q_{0} \star_{0} 1$. Now, with the limit $A \rightarrow\{a\}$ the total force on the deforming body per unit volume at $a$ is given by

$$
\lim _{A \rightarrow\{a\}} \frac{\int_{A}\left\langle f_{t} \circ \phi_{t}, d \phi_{t}(X)\right\rangle \rho_{0}}{\int_{A} \star_{\mathrm{o}} \mathrm{I}}=\left\langle f_{t} \circ \phi_{t}, d \phi_{t}(X)\right\rangle q_{\mathrm{o}}
$$

In terms of the 1 -form $f_{t}^{b} \in \Omega^{1}(M ; \mathbb{R})$ associated with $f_{t} \in \Gamma\left(T M_{t}\right)$, this force per volume is written as $q_{0} \phi_{t}^{*}\left(f_{t}^{b}\right)(X)$. Now one can drop the auxiliary vector $X$ and describe the force as a 1-form on $M_{0}$ :

$$
\begin{equation*}
q_{\mathrm{o}} \phi_{t}^{*}\left(f_{t}^{b}\right) \in \Omega^{1}\left(M_{0} ; \mathbb{R}\right) \tag{2.11}
\end{equation*}
$$

Similarly, the force (per volume) due to inertia (fictitious force) experienced in the Lagrangian coordinate is given by

$$
-q_{\mathrm{o}} \phi_{t}^{*}\left(\left(\ddot{\phi}_{t}\right)^{\mathrm{b}}\right) \in \Omega^{1}\left(M_{\mathrm{o}} ; \mathbb{R}\right)
$$

By Newton's law of motion, or by the least action principle, the equation of motion for a deforming body on $M_{0}$ is given by

$$
\begin{equation*}
-q_{\mathrm{o}} \phi_{t}^{*}\left(\left(\ddot{\phi}_{t}\right)^{b}\right)+q_{\mathrm{o}} \phi_{t}^{*}\left(f_{t}^{b}\right)=0 \tag{2.12}
\end{equation*}
$$

## Lagrangian Hydrodynamics

Now one applies Lagrange's Law of Motion to incompressible fluids with $q_{\mathrm{o}}=1$. In this case, one has $f_{t}^{b}=\left(-\operatorname{grad} p_{t}+g_{t}\right)^{b}=-d p_{t}+g_{t}^{\mathrm{b}}$. Let $u_{t} \circ \phi_{t}=\dot{\phi}_{t}$ be the velocity field which takes values in $\Gamma\left(T M_{t}\right)$. Denote its associated 1form by

$$
\eta_{t}=u_{t}^{b} \in \Omega^{1}\left(M_{t} ; \mathbb{R}\right)
$$

Then

$$
\phi_{t}^{*} \eta_{t}=\left\langle u_{t} \circ \phi_{t}, d \phi_{t}\right\rangle=\left\langle\dot{\phi}_{t}, d \phi_{t}\right\rangle \in \Omega^{1}\left(M_{0} ; \mathbb{R}\right) .
$$

Now the rate of change of $\phi_{t}^{*} \eta_{t}$ with respect to time is

$$
\begin{aligned}
\frac{\partial}{\partial t}\left(\phi_{t}^{*} \eta_{t}\right) & =\left\langle\ddot{\phi}_{t}, d \phi_{t}\right\rangle+\left\langle\dot{\phi}_{t}, \phi_{t}^{*}\left(\nabla u_{t}\right)\right\rangle \\
& =\phi_{t}^{*}\left(\left(\ddot{\phi}_{t}\right)^{b}+\frac{1}{2} d\left|u_{t}\right|^{2}\right) .
\end{aligned}
$$

$\operatorname{Using}$ (2.12) and $f_{t}^{b}=-d p_{t}+g_{t}$, one has

$$
\begin{equation*}
\frac{\partial}{\partial t}\left(\phi_{t}^{*} \eta_{t}\right)=d\left(-p_{t} \circ \phi_{t}+\frac{1}{2}\left|u_{t} \circ \phi_{t}\right|^{2}\right)+\phi_{t}^{*} g_{t}^{b} \tag{2.13}
\end{equation*}
$$

where we used the fact that $\phi_{t}^{*}$ commutes with $d$. In the case that $g_{t}^{b}$ is just a differential of a potential, $g_{t}^{\mathrm{b}}=d \lambda_{t}$, then we find

$$
\begin{equation*}
\frac{\partial}{\partial t}\left(\phi_{t}^{*} \eta_{t}\right)=d\left(\left(-p_{t}+\frac{1}{2}\left|u_{t}\right|^{2}+\lambda_{t}\right) \circ \phi_{t}\right) . \tag{2.14}
\end{equation*}
$$

The new pressure term $\left(-p_{t}+\frac{1}{2}\left|u_{t}\right|^{2}+\lambda_{t}\right)$ is recognized as the Lagrangian pressure.

Equation (2.14) is coupled with the incompressible condition, which is written straightforward

$$
\begin{equation*}
\frac{\partial}{\partial t}\left(\phi_{t}^{*}\left(\star_{t} 1\right)\right)=0 \tag{2.15}
\end{equation*}
$$

## Lie Advection of Velocity 1-form

Lagrange's momentum equation (2.14) can be written in a form more appealing to Eulerians. By the definition of Lie derivatives, $\frac{\partial}{\partial t}\left(\phi_{t}^{*} \eta_{t}\right)=$ $\phi_{t}^{*}\left(\dot{\eta}_{t}+\mathcal{L}_{u_{t}} \eta_{t}\right)$. Dropping the pullback operator, we write (2.14) as

$$
\begin{equation*}
\dot{\eta}+\mathcal{L}_{u} \eta=-d\left(p-\frac{1}{2}|u|^{2}\right)+g^{\mathrm{b}} \tag{2.16}
\end{equation*}
$$

Similarly, the incompressible condition (2.15) becomes

$$
\begin{equation*}
\star 1+\star(\operatorname{div} u)=0 \tag{2.17}
\end{equation*}
$$

or

$$
\begin{equation*}
d \star \eta=-\star 1 \tag{2.18}
\end{equation*}
$$

In most cases $\star$ is fixed in time and thus $d \star \eta=$ o, i.e. $\eta$ is coclosed, or solenoidal.

Note that one can recover Euler's momentum equation from (2.16) by applying Lemma A.2, which gives

$$
\mathcal{L}_{u} \eta=\left(\nabla_{u} u\right)^{b}-\langle\nabla u, u\rangle=\left(\nabla_{u} u\right)^{b}-\frac{1}{2} d|u|^{2} .
$$

Therefore (2.16) reads

$$
\left(\dot{u}+\nabla_{u} u=-d p+g\right)^{b} .
$$

### 2.3 Pressure Projection

From (2.14) or (2.16) we see that if the external force acting on the fluid is only a potential, the quantity $\phi_{t}^{*}\left(\eta_{t}\right)$ varies only by an exact differential $d\left(\phi_{t}^{*}\left(-\dot{\varphi}_{t}\right)\right.$ ) where $\dot{\varphi}_{t}=p_{t}-\frac{1}{2}\left|u_{t}\right|^{2}$ is uniquely determined (up to the kernel of $d$ ) so that the flow is incompressible at all space and time. This process also determines the pressure $p_{t}$.

Rephrasing it, we may just go ahead and say $\phi_{t}^{*}\left(\eta_{t}\right)$ is invariant modulo exact differentials. The pressure term $-d \dot{\varphi}$ is added to retrieve the actual velocity from the modulo. This differential $-d \dot{\varphi}$ is determined using the information of incompressibility and boundary conditions. The process of finding the differential $-d \dot{\varphi}$ is called pressure projection widely used in numerical methods since Chorin [1968].
"Pressure projection" originally means projecting a vector field (not necessarily divergence-free) onto the space of divergence-free vector fields orthogonally in the $L^{2}$ space of vector fields. It is usually interpreted as finding the closest divergence-free vector field from a given one. Here we make a subtlely different interpretation: the pressure projection serves the purpose of velocity retrieval from the space where we find useful conservation laws.

At each time $t$ let $M_{t}$ be the fluid body. The equation $\frac{\partial}{\partial t}\left(\phi_{t}^{*} \eta_{t}\right)=-d\left(\phi_{t}^{*} \dot{\varphi}_{t}\right)$ suggests that the quantity $\phi_{t}^{*} \eta_{t} \in \Omega^{1}\left(M_{0} ; \mathbb{R}\right)$ never leaves the affine space

$$
\eta_{\mathrm{o}}+d \Omega^{\mathrm{o}}\left(M_{\mathrm{o}} ; \mathbb{R}\right) \in \frac{\Omega^{1}\left(M_{\mathrm{o}} ; \mathbb{R}\right)}{d \Omega^{\mathrm{o}}\left(M_{\mathrm{o}} ; \mathbb{R}\right)}
$$

where the subspace $d \Omega^{\circ}\left(M_{0} ; \mathbb{R}\right) \subset \Omega^{1}\left(M_{0} ; \mathbb{R}\right)$ denotes the image of $\Omega^{\circ}\left(M_{0} ; \mathbb{R}\right)$ under $d$, i.e. exact 1-forms. Let us denote the element in the quotient space $\Omega^{1}\left(M_{0} ; \mathbb{R}\right) / d \Omega^{0}\left(M_{0} ; \mathbb{R}\right)$ associated to $\alpha_{t} \in \Omega^{1}\left(M_{t} ; \mathbb{R}\right)$ by

$$
\left[\alpha_{t}\right]:=\alpha_{t}+d \Omega^{\circ}\left(M_{t} ; \mathbb{R}\right)
$$

Then $\left[\phi_{t}^{*} \eta_{t}\right]$ is invariant in an Euler fluid:

$$
\begin{equation*}
\frac{\partial}{\partial t}\left[\phi_{t}^{*} \eta_{t}\right]=[\mathrm{o}] . \tag{2.19}
\end{equation*}
$$

Written in the Eulerian framework

$$
\begin{equation*}
\frac{\partial}{\partial t}[\eta]+\mathcal{L}_{u}[\eta]=[\mathrm{o}] \tag{2.20}
\end{equation*}
$$

using the fact that $d$ commutes with pullbacks and Lie derivatives.
The conservation law (2.19) or (2.20) describes the fluid using the state $[\eta]$ instead of $\eta$. Each of these conservation law equation would fully describe the Euler equation if we can reconstruct the velocity $\eta$ or $u$ from the state of fluid $[\eta]$, which is essential for telling how $\phi_{t}$ evolves or defining the operator $\mathcal{L}_{u}$.

Theorem 2.1 (Velocity retrieval). Let $f \in \Omega^{\circ}(M ; \mathbb{R})$ and $g \in \Omega^{0}(\partial M ; \mathbb{R})$ be functions on $M$ and $\partial M$ satisfying the condition that for any connected component $M_{i}$ of $M$,

$$
\int_{M_{i}} \star f=\oint_{\partial M_{i}} \star_{\partial} g
$$

Then for each $[\tilde{\eta}] \in \Omega^{1}(M ; \mathbb{R}) / d \Omega^{0}(M ; \mathbb{R})$ there exists a unique representative $\eta \in[\tilde{\eta}]$ such that

$$
\begin{cases}d \star \eta=\star f & \text { in } M  \tag{2.21}\\ \iota_{N} \eta=g & \text { on } \partial M\end{cases}
$$

where $N$ is the unit outer normal of $\partial M$.
Proof. We prove the theorem using the full Hodge-Morrey-Friedrich decomposition [G. Schwarz, 1995, Corollary 2.4.9], which states that each $\tilde{\eta} \in[\tilde{\eta}]$ can be uniquely and orthogonally decomposed into

$$
\tilde{\eta}=d \tilde{\varphi}+d^{\dagger} \beta+d \tilde{\xi}+\zeta
$$

for

$$
\begin{array}{ll}
\tilde{\varphi} \in \Omega^{\mathrm{o}}(M), & \left.\tilde{\varphi}\right|_{\partial M}=\mathrm{o}, \\
\beta \in \Omega^{2}(M), & \left.\iota_{N} \beta\right|_{\partial M}=\mathrm{o}, \\
\tilde{\xi} \in \Omega^{\mathrm{o}}(M), & d^{\dagger} d \tilde{\xi}=\mathrm{o}, \\
\zeta \in \Omega^{1}(M), & d \zeta=\mathrm{o}, d^{\dagger} \zeta=\mathrm{o}, \iota_{N} \zeta=\mathrm{o} .
\end{array}
$$

By "unique," we mean that the value of $d \tilde{\varphi}, d^{\dagger} \beta, d \tilde{\xi}, \zeta$ are unique, but of course $\tilde{\varphi}$ itself may not be unique by $\operatorname{ker}(d)$ with zero Dirichlet boundary condition. Note that a 1 -form is in $[\tilde{\eta}]$ if and only if it shares the same $d^{\dagger} \beta$ and $\zeta$ component with $\tilde{\eta}$. Now all we have to do is to determine a new exact component $d(\varphi+\xi)$ so that

$$
\eta=d \varphi+d^{\dagger} \beta+d \xi+\zeta \in[\tilde{\eta}]
$$

satisfies the desired condition (2.21). This problem is solved by [G. Schwarz, 1995, Corollary 3.1.3] where our $d(\varphi+\xi)$ is the exact component of their $\omega$.

### 2.4 Cauchy's Invariants

In 1813 French Academy of Sciences set up a mathematics prize for "the problem of waves on the surface of a liquid of arbitrary depth." Cauchy (1789-1857) sent a manuscript [Cauchy, 1815] to the Academy in 1815 and was rewarded the prize 1815 Grand Prix.

Cauchy tackled the problem using Lagrangian formulation and arrived at (2.14). He not only described the dynamics of the free surface of liquid requested by the prize, but also obtained important results for the fluid interior. The latter includes the discovery of the invariance of vorticity 2-form, which is now known as Kelvin's Circulation Theorem though Cauchy had a version of it 54 years earlier than Kelvin.

Cauchy found that the right-hand side of Eq. (2.14) is a total derivative. So, if one takes another exterior derivative (or a curl in $\mathbb{R}^{3}$ ), one obtains

$$
\frac{\partial}{\partial t}\left(\phi_{t}^{*} d \eta_{t}\right)=\mathrm{o}
$$

Here we used $d$ commutes with pullback operators, and $d \circ d=0$. The quantity $\omega_{t}:=d \eta_{t} \in \Omega^{2}\left(M_{t} ; \mathbb{R}\right)$ is the vorticity 2-form. Remarkably $\phi_{t}^{*} \omega_{t} \in$ $\Omega^{2}\left(M_{0} ; \mathbb{R}\right)$ is invariant under Euler fluid flow.

Recall that $\phi_{t}^{*} \eta_{t}=\left\langle u_{t} \circ \phi_{t}, d \phi_{t}\right\rangle$. Taking $d$ Cauchy expressed

$$
\begin{equation*}
\phi_{t}^{*} \omega_{t}=\left\langle\phi_{t}^{*}\left(\nabla u_{t}\right) \wedge d \phi_{t}\right\rangle \tag{2.22}
\end{equation*}
$$

This quantity, Cauchy's invariant, is also a special case of a Clebsch representation for vorticity explained in Sec. 2.8.

Using the invariance of $\phi_{t}^{*} \omega_{t}$, Cauchy also proved that if an Euler fluid is initially a potential flow, it stays potential for all time.

### 2.5 Hankel-Kelvin Circulation Theorem

Cauchy's discovery of vortex dynamics in 1815 is nevertheless almost forgotten. Hermann Hankel (1839-1897) was one of the few mathematicians who acknowledged Cauchy's result.

Without noticing Cauchy's vortex dynamics, in 1858 Helmholtz (1821-1894) established vortex dynamics written in the Eulerian framework (which will be discussed in Sec. 2.6). Many scientists were intrigued by Helmholtz's results and asked for the corresponding theory in the Lagrangian framework. The question was answered by Hankel [1861], who connected Cauchy's invariant to Helmholtz's vorticity. He applied Stokes Theorem and arrived at what is now known as Kelvin's Circulation Theorem [Thomson, 1868].

Using exterior calculus, the circulation theorem is just one step ahead from Cauchy's invariant equation $\frac{\partial}{\partial t}\left(\phi_{t}^{*} \omega_{t}\right)=\mathrm{o}$. Take each 2-dimensional surface $S \subset M_{\mathrm{o}}$ and integrate $\phi_{t}^{*} \omega_{t}$ over $S$ :

$$
\mathrm{o}=\frac{d}{d t} \int_{S} \phi_{t}^{*} \omega_{t}=\frac{d}{d t} \int_{\phi_{t}(S)} \omega_{t} .
$$

This says that the vorticity flux over an advected surface $\phi_{t}(S)$ stays constant in time. Applying Stokes' Theorem, with $\omega_{t}=d \eta_{t}$, one has

$$
\mathrm{o}=\frac{d}{d t} \int_{\phi_{t}(S)} d \eta_{t}=\frac{d}{d t} \oint_{\partial \phi_{t}(S)} \eta_{t}=\frac{d}{d t} \oint_{\phi_{t}(\partial S)} \eta_{t}
$$

That is, the circulation of the velocity along an advected closed loop initialized as $C=\partial S$ is constant in time.

### 2.6 Helmholtz's Theorems

Hermann Helmholtz (1821-1894) published a paper in 1858 "On Integrals of the Hydrodynamical Equation, which express Vortex-motion" that laid down the foundation of vortex dynamics [Helmholtz:1858:VM]. In the paper he introduced (independently from Cauchy) the vorticity field, and derived the vorticity equation. He introduced the notion of vortex lines and vortex filaments (vortex tubes.) He also described how to reconstruct the divergence-free velocity from the vorticity through stream functions (vectors) and Helmholtz decomposition. He also made the analogy that such velocity from vortices is similar to the magnetic field rising from an electric current. He introduced the idea of potential flows of the second class, which are irrotational fields in non-simply-connected domain regarded as the differential of multivalued potential functions.

In a 3-manifold a vortex line is an integral curve of of the vorticity (pseudo)vector field $w:=(\star \omega)^{\#}$. In other words, a vortex line is a curve $\gamma$ such that its tangent vectors $\gamma^{\prime}$ satisfies $\iota_{\gamma^{\prime}} \omega=0$.

A vortex tube is the union of a collection of vortex lines $U=\bigsqcup_{x \in S} C_{x}$ where $S$ is a cross section surface, and $C_{x}$ is the vortex line passing through $x$. Slender tubes are also called vortex filaments. To avoid possible trouble, at the moment assume $w$ is nowhere vanishing. Also note that $w$ is divergence free since $d \omega=0$. Moreover $\phi_{t}^{*}\left(\omega_{t}\right)$ is constant during advection. This gives Helmholtz's $3 \mathrm{rd}^{*}$ Theorem: (assuming that forces acting on the fluid have a potential)

The product of the section and the angular velocity of an infinitely thin vortex filament [that is, the strength $\int_{\Omega} \omega$ where $\Omega$ is a crosssectional surface of the vortex tube] is constant throughout its whole length, and retains the same value during all displacement of the filament. Hence vortex filaments must either be closed curves, or must have their ends in the bounding surface of the fluid.

Helmholtz's 1st (resp. 2nd) Theorem states that if the fluid is initially irrotational (resp. belonging to a vortex line), then it stays irrotational (resp. on a vortex line) for all later time. This was proven by Cauchy earlier.

## Vorticity Equation

Helmholtz derived the vorticity equation directly from the Euler equation in the Eulerian coordinate. Here we derive it using Cauchy's invariant $\frac{\partial}{\partial t}\left(\phi_{t}^{*} \omega_{t}\right)=\mathrm{o}$, which gives us

$$
\begin{equation*}
\dot{\omega}+\mathcal{L}_{u} \omega=\mathrm{o} \tag{2.23}
\end{equation*}
$$

Note that (2.23) holds in any dimension. The version of vorticity equation Helmholtz and most fluid mechanics texts present is written in terms of the vorticity pseudovector field $w=(\star \omega)^{\#}$ in ${ }_{3} \mathrm{D}$. By Lemma A. 3 with $u$ divergence free, we have (2.23) written in vectors as

$$
\begin{equation*}
\dot{w}+\nabla_{u} w=\nabla_{w} u \tag{2.24}
\end{equation*}
$$

The right-hand side $\nabla_{w} u$ is known as the vortex stretching term.

[^5]Note Today Equation (2.24) is more well-known to fluid mechanics community in which exterior calculus is not in the standard curriculum. However, the 2 -form $\omega$ is a much more natural object here than the vector $w$ in the following sense. First of all, (2.23) reveals the conservation law of vorticity better than (2.24). And (2.23) works in any dimension, whereas (2.24) works only in 3D. Moreover, if one treats both velocity and vorticity as vectors, they together violate the parity (reflection) symmetry of the law of fluid dynamics. This forces one to call the vorticity vector a pseudovector, which is a good indication that it requires a framework involving a graded exterior algebra.

## Vortex Tubes

Given the characterization of vortex tubes by Helmholtz, we may redefine vortex tubes as the following.

Definition 2.1. Suppose $\eta$ is a 1-form on a 3-manifold $M$, and $\omega=d \eta$. A vortex tube is a 3-dimensional region of the fluid $U \subset M$ such that $j_{\partial U \backslash \partial M}^{*} \omega=\mathrm{o}$ where $j_{\partial U \backslash \partial M}: \partial U \backslash \partial M \hookrightarrow M$ denotes the inclusion map.

In short, a vortex tube is any region so that vorticity does not "escape" through the boundary of the region except for its interface with $\partial M$. This definition allow vortex tubes to have branches and complicated topology. However for vortex tubes with complicated topology it becomes unclear how to measure the vortex strength since there is no unique cross section of the tube. For such a vortex tube, we define the stength as a function of the 1 st homology classes of the tube boundary:

Definition 2.2. The strength of a vortex tube $U$ is a homomorphism

$$
\kappa_{U}: H_{1}(\partial U \backslash \partial M ; \mathbb{Z}) \rightarrow \mathbb{R}
$$

defined by

$$
\kappa_{U}([C]):=\oint_{C} \eta .
$$

Here $H_{1}(. ; \mathbb{Z})$ is the first $\mathbb{Z}$-coefficient homology group. Thus $C$ are typically non-contractable loops around the vortex tube. The well-definedness of the above strength functional is analogous to Helmholtz's 3rd Theorem.

Theorem 2.2 (Helmholtz's Theorem). $\kappa_{U}$ is well-defined.

Proof. Given two curves $C_{1}, C_{2}$ as representitives of the same homology class, i.e. $\left[C_{1}-C_{2}\right]=\mathrm{o}$ in $H_{1}(\partial U \backslash \partial M ; \mathbb{Z})$, there is a 2-chain $\Sigma \in C_{2}(\partial U \backslash$ $\partial M ; \mathbb{Z})$ such that $\partial \Sigma=C_{1}-C_{2}$. Thus, $\oint_{C_{1}} \eta-\oint_{C_{2}} \eta=\oint_{C_{1}-C_{2}} \eta=\oint_{\partial \Sigma} \eta=$ $\int_{\Sigma} d \eta=\mathrm{o}$ using $j_{\partial U \backslash \partial M}^{*} \omega=\mathrm{o}$.

### 2.7 Velocity from Vorticity

The vorticity equation (2.23) would fully describe the motion of a fluid, with $\omega$ being the primary variable, if we can reconstruct $u$ (or $\eta$ ) from $\omega$. Retrieving velocity $\eta$ from $\omega=d \eta$ is in analogy with Section 2.3. Helmholtz solved the problem of finding the velocity from vorticity in the same 1858 vortex theory paper. His method is now known as Helmholtz decomposition.

Helmholtz also found the analogy that the reconstructed velocity from a given vorticity field is the same as the magnetic field rising from a electric current. He thought of the distant interaction of vortex filaments is related to the electromagnetic action of current-conducting wires (Biot-Savart 1820). He also described the flow between filaments as the differential of a multivalued potential with infinite number of branches. He called such a flow a potential flow of the second class (and the regular potential flow is classified as the first class).

In our exposition we use the full Helmholtz-Hodge-Morrey-Friedrich decomposition [G. Schwarz, 1995] that takes care of general topology and boundary conditions. Using this decomposition the velocity 1-form can be uniquely written as

$$
\begin{equation*}
\eta=d \alpha+d^{\dagger} \beta+d \varphi+\gamma \tag{2.25}
\end{equation*}
$$

where $\alpha \in \Omega_{D}^{\mathrm{o}}(M ; \mathbb{R}), \beta \in \Omega_{N}^{2}(M ; \mathbb{R}), \varphi \in \Omega^{\mathrm{o}}(M ; \mathbb{R})$ satisfying $d^{\dagger} d \varphi=\mathrm{o}$, and $\gamma \in \mathcal{H}_{N}^{1}(M ; \mathbb{R}) \cong H^{1}(M ; \mathbb{R})$. Applying $d$ to Eq (2.25) we get

$$
\omega=d d^{\dagger} \beta
$$

Together with the boundary condition $\beta \in \Omega_{N}^{2}(M ; \mathbb{R})$ and fixing the Coulomb
gauge in the kernel of $d^{\dagger}$, we solve

$$
\begin{cases}\left(d d^{\dagger}+d^{\dagger} d\right) \beta=\omega & \text { in } M,  \tag{2.26}\\ j_{\partial M}^{*} \star \beta=\mathrm{o} & \text { on } \partial M, \\ j_{\partial M}^{*} d \beta=\mathrm{o} & \text { on } \partial M, \\ \langle\beta, \xi\rangle=\mathrm{o} & \forall \xi \in \mathcal{H}_{N}^{2}(M ; \mathbb{R})\end{cases}
$$

The solution to (2.26) produces a velocity field $d^{\dagger} \beta$ that may differ from $\eta$ by an exact form $d(\alpha+\varphi)$ and a Neumann harmonic field $\gamma \in \mathcal{H}_{N}^{1}(M ; \mathbb{R})$. The exact form $d(\alpha+\varphi)$ can be identified using the pressure projection, namely Theorem 2.1, for a given boundary data $\iota_{N} \eta$ and a desired value of $d^{\dagger} \eta$.

Harmonic Component Unfortunately, the Neumann harmonic component $\gamma$ cannot be determined from the quantities $\omega, d^{\dagger} \eta$ in $M$ and $\iota_{N} \eta$ on $\partial M$. Therefore, in order to recover the velocity field, one needs not only the above quantities but also the circulations $\oint_{C_{i}} \eta$ along a set of generators $C_{i}$ for $H_{1}(M ; \mathbb{R})$. The harmonic field $\gamma$ is added to the reconstruced velocity to match the desired values of the circulations. Note that although we still have Hankel-Kelvin Circulation Theorem along the generators, the harmonic component $\gamma$ may vary in time depending on how the generator curves are advected.

Biot-Savart Law Suppose $M$ is a simply-connected region in $\mathbb{R}^{3}$, and suppose $\omega$ is supported in a region $U \subset M$. Picture $U$ be the set of vortex filaments. Using the cartesian coordinate in $\mathbb{R}^{3}$ one writes $\eta=\sum_{k=1}^{3} u_{k} d x_{k}$, $\omega=\sum_{k=1}^{3} w_{k} \star d x_{k}$, and $\beta=\sum_{k=1}^{3} b_{k} \star d x_{k}$. Then the solution to the Poisson equation (2.26) can be explicitly written as the integral using the Green's function in $\mathbb{R}^{3}$ : at each $\mathbf{r} \in \mathbb{R}^{3}$

$$
\begin{equation*}
b_{k}(\mathbf{r})=-\frac{1}{4 \pi} \int_{U} \frac{w_{k}(\tilde{\mathbf{r}})}{|\mathbf{r}-\tilde{\mathbf{r}}|}(\star 1)_{\tilde{\mathbf{r}}} \tag{2.27}
\end{equation*}
$$

and thus, by $\eta=d(\alpha+\varphi)+d^{\dagger} \beta$ and by calling $P=\alpha+\varphi$,

$$
\begin{equation*}
\mathbf{u}(\mathbf{r})=\operatorname{grad} P+\operatorname{curl} \mathbf{b}=\operatorname{grad} P+\frac{1}{4 \pi} \int_{U} \frac{\mathbf{w} \times(\mathbf{r}-\tilde{\mathbf{r}})}{|\mathbf{r}-\tilde{\mathbf{r}}|^{3}}(\star 1)_{\tilde{\mathbf{r}}} . \tag{2.28}
\end{equation*}
$$

Here $d^{\dagger} \eta=\operatorname{div} \mathbf{u}=\mathrm{o}$, which implies the potential is harmonic $\Delta P=\mathrm{o}$

### 2.8 Clebsch Variables

A year after Helmholtz's 1858 paper, Alfred Clebsch (1833-1872) published a paper in the same journal with a similar title "On the Integration of the Hydrodynamic Equations." Although Clebsch did not mention Cauchy, he gave a framework describing fluid dynamics wheih we view as a generalization of Cauchy's invariant, and is written entirely in differential forms.

## Clebsch Representation

Clebsch started off by saying $\eta=\left\langle u, d \phi_{0}\right\rangle$ may not be a complete differential $-d \varphi$ (potential flow), but in general

$$
\begin{equation*}
\eta=-d \varphi+\langle\boldsymbol{\lambda}, d \boldsymbol{\mu}\rangle \tag{2.29}
\end{equation*}
$$

for some scalar function $\varphi: M \rightarrow \mathbb{R}$ and $\mathbb{R}^{m}$-valued functions $\lambda, \mu: M \rightarrow$ $\mathbb{R}^{m}$ where $m$ is some dimension of choice that does not need to be the dimension of $M .^{\dagger}$ Clebsch took a $d$ to (2.29) to eliminate $d \varphi$ and made a remark that the result is related to the vorticity introduced by Helmholtz:

$$
\begin{equation*}
\omega=\langle d \boldsymbol{\lambda} \wedge d \boldsymbol{\mu}\rangle \tag{2.30}
\end{equation*}
$$

Using the viewpoint from Section 2.3, one may also rephrase (2.29) by saying that $\eta$ is the pressure projection of $[\langle\boldsymbol{\lambda}, d \boldsymbol{\mu}\rangle] \in \frac{\Omega^{1}(M ; \mathbb{R})}{d \Omega^{0}(M ; \mathbb{R})}$ (using Theorem 2.1).

Clebsch commented in his footnote that when $M$ is ${ }_{3} \mathrm{D}$ it is enough to use 1 dimensional $(\lambda, \mu)$ pair, i.e. $\eta=-d \varphi+\lambda d \mu$, and the task of finding $(\lambda, \mu)$ for a given $\eta$ is known as a Pfaffian problem. However it is known today that for general $\eta$ in ${ }_{3} \mathrm{D} \eta=-d \varphi+\lambda d \mu$ may not be solvable globally or even locally [Graham and Henyey, 2000]. Despite that, in Clebsch's original 1859 paper all results are stated in the general case using arbitrary dimensional $(\lambda, \mu)$.

Clebsch's general statement using multicomponent ( $\boldsymbol{\lambda}, \boldsymbol{\mu}$ ) seems to be long forgotten. Today Clebsch representation is often referred as $\eta=-d \varphi+$ $\lambda d \mu$. The multicomponent Clebsch representation was reproposed in recent years and is nowadays called generalized Clebsch representation.

[^6]
## Equations of Motion

Clebsch substitutes his representation (2.29) and (2.30) into the Euler equation of the form (??) with

$$
\begin{aligned}
& \iota_{u} \omega=\iota_{u}\langle d \boldsymbol{\lambda} \wedge d \boldsymbol{\mu}\rangle=\left\langle d_{u} \boldsymbol{\lambda}, d \boldsymbol{\mu}\right\rangle-\left\langle d \boldsymbol{\lambda}, d_{u} \boldsymbol{\mu}\right\rangle, \\
& \dot{\eta}=-d \dot{\varphi}+\langle\dot{\boldsymbol{\lambda}}, d \boldsymbol{\mu}\rangle+\langle\boldsymbol{\lambda}, d \dot{\boldsymbol{\mu}}\rangle
\end{aligned}
$$

and obtains

$$
\begin{align*}
\mathrm{o} & =\dot{\eta}+\iota_{u} \omega+d\left(p+\frac{1}{2}|u|^{2}\right) \\
& =\left\langle\dot{\boldsymbol{\lambda}}+d_{u} \lambda, d \boldsymbol{\mu}\right\rangle-\left\langle d \boldsymbol{\lambda}, d_{u} \boldsymbol{\mu}\right\rangle+\langle\boldsymbol{\lambda}, d \dot{\boldsymbol{\mu}}\rangle+d\left(-\dot{\varphi}+p+\frac{1}{2}|u|^{2}\right) \\
& =\left\langle\dot{\boldsymbol{\lambda}}+d_{u} \lambda, d \boldsymbol{\mu}\right\rangle-\left\langle d \boldsymbol{\lambda}, \dot{\boldsymbol{\mu}}+d_{u} \boldsymbol{\mu}\right\rangle+d\left(-\dot{\varphi}+p+\frac{1}{2}|u|^{2}+\langle\lambda, \dot{\boldsymbol{\mu}}\rangle\right) . \tag{2.31}
\end{align*}
$$

From it Clebsch sees that an obvious equation of motion for $\lambda, \mu$ that solves (2.31) is pure advection

$$
\left\{\begin{array}{l}
\dot{\lambda}+d_{u} \boldsymbol{\lambda}=\mathbf{0}  \tag{2.32}\\
\dot{\boldsymbol{\mu}}+d_{u} \boldsymbol{\mu}=\mathbf{o}
\end{array}\right.
$$

in which case $\varphi=\int d t\left(p+\frac{1}{2}|u|^{2}+\langle\lambda, \dot{\boldsymbol{\mu}}\rangle\right)$ or equivalently any potential that keeps $\eta=-d \varphi+\langle\boldsymbol{\lambda}, d \boldsymbol{\mu}\rangle$ solenoidal.

Clebsch also gave the full general alternative equations of motion. Let $\Pi: \mathbb{R}^{m} \times \mathbb{R}^{m} \rightarrow \mathbb{R}$ be an arbitrary function (could be time dependent). Then $d(\Pi(\boldsymbol{\lambda}, \boldsymbol{\mu}))=\left\langle D_{1} \Pi, d \boldsymbol{\lambda}\right\rangle+\left\langle D_{2} \Pi, d \boldsymbol{\mu}\right\rangle$ where $D_{1} \Pi\left(\right.$ resp. $\left.D_{2} \Pi\right)$ denotes the vector in $\mathbb{R}^{m}$ by taking the gradient with respect to the 1st (resp. 2nd) argument of $\Pi$. Hence if

$$
\left\{\begin{array}{l}
\dot{\lambda}+d_{u} \lambda=D_{2} \Pi  \tag{2.33}\\
\dot{\mu}+d_{u} \mu=-D_{1} \Pi
\end{array}\right.
$$

then the first two terms of (2.31) becomes $d \Pi$, and in this case (2.31) is solved by constructing $\varphi=\int d t\left(p+\frac{1}{2}|u|^{2}+\langle\lambda, \dot{\boldsymbol{\mu}}\rangle+\Pi(\lambda, \mu)\right)$. Note that any choice of the function $\Pi$ would have (2.33) equivalent to the Euler equation.

## Lagrangian Interpretation

The equations of motions (2.32) and (2.33) were derived by inspecting the rewrite of the Euler equation (2.31). Here we give a Lagrangian interpretation to these equations. Though this section is not part of Clebsch's original paper, but the additional geometric view would give us better intuition for these evolution models.

Let $(\mathbf{p}, \mathbf{q})$ be the coordinate of $\mathbb{R}^{m} \times \mathbb{R}^{m}$, which gives rise to a symplectic form $\sigma=\langle d \mathbf{p} \wedge d \mathbf{q}\rangle$ on $\mathbb{R}^{m} \times \mathbb{R}^{m}$ and a symplectic potential $\vartheta=\langle\mathbf{p}, d \mathbf{q}\rangle$ satisfying $d \vartheta=\omega$. Now let $s=(\boldsymbol{\lambda}, \boldsymbol{\mu}): M \rightarrow \mathbb{R}^{m} \times \mathbb{R}^{m}$. Then Clebsch's representation for vorticity (2.30) (resp. velocity (2.29)) is the pullback of the symplectic form (resp. the tautological form up to an exact differential)

$$
\omega=s^{*}(\sigma), \quad \eta=s^{*}(\vartheta)-d \varphi
$$

The pure advection model (2.32) says that, in the Lagrangian point of view, $\phi_{t}^{*}\left(s_{t}\right)=s_{t} \circ \phi_{t}$ is time invariant, which implies $\phi_{t}^{*}\left(\omega_{t}\right)=\phi_{t}^{*} s_{t}^{*}(\sigma)=$ $\left(s_{t} \circ \phi_{t}\right)^{*}(\sigma)$ is time invariant. Therefore we recover (2.23), or equivalently the Hankel-Kelvin circulation property. The same argument applies to the velocity: $\frac{\partial}{\partial t}\left(\phi_{t}^{*}\left(\eta_{t}\right)\right)=\frac{\partial}{\partial t}\left(s_{t} \circ \phi_{t}\right)^{*}(\vartheta)$ is an exact differential, and therefore recovers (2.14) or equivalently the incompressible Euler equation.

One may have already noticed that what is needed for recovering the Euler equation is the time-invariance of $\phi_{t}^{*} s_{t}^{*}(\sigma)$ or $\phi_{t}^{*} s_{t}^{*}(\vartheta)$ up to an exact form. In particular one may post-compose a flow $\tilde{s}_{t}=\xi_{t} \circ s_{t}$ for some $\xi_{t}: \mathbb{R}^{m} \times \mathbb{R}^{m} \rightarrow \mathbb{R}^{m} \times \mathbb{R}^{m}$. In that case the time-invariance of $\phi_{t}^{*} \tilde{s}_{t}^{*}(\sigma)=$ $\phi_{t}^{*} s_{t}^{*} \xi_{t}^{*}(\sigma)$ can be achieved by requesting $\xi_{t}^{*}(\sigma)=\sigma$ is time invariant. That is, $\xi_{t}$ is a symplectomorphism; in the case of $n=1, \xi_{t}$ is an area-preserving diffeomorphism on $\mathbb{R}^{1} \times \mathbb{R}^{1}$. Since $\mathbb{R}^{m} \times \mathbb{R}^{m}$ is simply-connected, symplectomorphisms coincide with symplectic flows (Liouville's Theorem and its converse), giving rise to the right-hand sides of (2.33) with a generic Hamiltonian $\Pi: \mathbb{R}^{m} \times \mathbb{R}^{m} \rightarrow \mathbb{R}$.

## Clebsch's Action

Let us switch back to Clebsch's original paper. Clebsch described that (2.33) is the Euler-Lagrange equation whose solution extremizes the action

$$
\begin{equation*}
\mathcal{S}=\int_{0}^{T} d t \int_{M}\left(\langle\lambda, \dot{\boldsymbol{\mu}}\rangle+\frac{1}{2}|u|^{2}+\Pi(\lambda, \boldsymbol{\mu})-\dot{\varphi}\right) \star 1 . \tag{2.34}
\end{equation*}
$$

The term $\int_{M} \star\langle\lambda, \dot{\mu}\rangle$ is the canonical action corresponding to a Hamiltonian flow. The term $\int_{M} \frac{1}{2}|u|^{2} \star 1=\int_{M} \frac{1}{2}(\langle\lambda, d \boldsymbol{\mu}\rangle-d \varphi) \wedge \star(\langle\lambda, d \boldsymbol{\mu}\rangle-d \varphi)$ is the kinetic energy of the fluid. The final two terms do not affect the motion of the fluid; $\int_{M} \Pi(\lambda, \mu) \star 1$ is an additional potential energy on the values of $(\lambda, \mu)$, and $\int_{M} \dot{\varphi} \star 1$ is a complete time derivative which does not contribute to the action. By keeping only the essential terms, the motion of the fluid
extremizes the action

$$
\begin{equation*}
\mathcal{S}=\int_{0}^{T} d t \int_{M}\left(\langle\lambda, \dot{\boldsymbol{\mu}}\rangle+\frac{1}{2}|u|^{2}\right) \star 1 \tag{2.35}
\end{equation*}
$$

where $u$ is retrived from $[\langle\lambda, d \boldsymbol{\mu}\rangle] \in \frac{\Omega^{1}(M ; \mathbb{R})}{d \Omega^{0}(M ; \mathbb{R})}$ using Theorem 2.1.

## Part II

## Geometric Clebsch Maps

Chapter 3

## CLEBSCH VARIABLES REVISITED

The state of an incompressible flow on a domain $M$ is often represented by the velocity field $u \in \Gamma(T M)$ or its associated 1-form $\eta \in \Omega^{1}(M ; \mathbb{R})$. It is also common that the fluid state is represented by its vorticity 2 -form $\omega=d \eta$ or the vorticity pseudovector field $w=\operatorname{curl} u$, which is based on the fact that when $M$ is simply-connected the solenoidal velocity $\eta$ is uniquely recovered by the vorticity $\omega=d \eta$ (Section 2.7).

Clebsch' formulation for hydrodynamics (Section 2.8) gives yet another type of representation for fluid states. In 1859 Clebsch proposed to use maps $(\boldsymbol{\lambda}, \boldsymbol{\mu}): M \rightarrow \mathbb{R}^{m} \times \mathbb{R}^{m}$ to represent $\eta$ as

$$
\eta=\langle\lambda, d \boldsymbol{\mu}\rangle-d \varphi
$$

where $\langle\cdot, \cdot\rangle$ is the standard scalar product on $\mathbb{R}^{m}$, and $\varphi$ is some scalar function that ensures $\eta$ is solenoidal.

Clebsch' representation provides fundamental insights to fluid dynamics. For instance, the dynamics of an Euler fluid can be written as a Hamiltonian system, where the variables $(\lambda, \mu)$ are the generalized coordinate and its associated momentum [Jerrold Marsden and Weinstein, 1983]. Another important element of Clebsch' representation is that the Clebsch variables are functions (o-forms), as opposed to other geometric objects such as vector $u \in \Gamma(T M)$, pseudovector $w=\operatorname{curl} u$, 1-form $\eta \in \Omega^{1}(M ; \mathbb{R})$, and 2-form $\omega \in \Omega^{2}(M ; \mathbb{R})$. In a convection process, the advection of a multicomponent function is simpler than advection of a single higher-degree tensor.

In the special case when $n=\operatorname{dim}(M)=3$ and $m=1$, which is the case "Clebsch variable" usually refers to, a Clebsch variable is a codimension-2 level set function for the vortex lines. We see in this case the Clebsch variables are a pair of functions $s:=(\lambda, \mu): M \rightarrow \mathbb{R} \times \mathbb{R}$ representing velocity as $\eta=\lambda d \mu-d \varphi$. It follows that the vorticity 2 -form is given by

$$
\omega=d \lambda \wedge d \mu
$$

Suppose $\sigma_{\mathbb{R}^{2}}=d x \wedge d y$ is the standard area 2 -form on $\mathbb{R}^{2}$. Then $\omega=$ $s^{*} \sigma_{\mathbb{R}^{2}}$. Thus computing vorticity flux through a surface $\Sigma \subset M$ amounts to
computing the (signed) area (with multiplicity) of the image of the surface under $s$ :

$$
\int_{\Sigma} \omega=\int_{\Sigma} s^{*} \sigma_{\mathbb{R}^{2}}=\int_{s(\Sigma)} \sigma_{\mathbb{R}^{2}}
$$

In particular, given an open set $\Omega \subset \mathbb{R}^{2}$, the preimage $U:=s^{-1}(\Omega) \subset M$ is a Helmholtz vortex tube. And the preimage $s^{-1}(\{p\})$ of a point $p \in \mathbb{R}^{2}$ is a vortex line. This level set property of Clebsch variables is therefore valuable for vortex detection, visualization [Kotiuga, 1991] and analysis [Jeong and Hussain, 1995].

However, representation of the fluid state via Clebsch variables has drawn less attention in the literature. There are several reasons for that. First of all, for more than a century the Clebsch variable is only known for $m=1$ (and $n=3$ ). When $m=1$, namely $\eta=\lambda d \mu-d \varphi$, the total helicity $\int_{M} \eta \wedge \omega$ must vanish in a closed system with $\omega$ having compact support (Theorem 6.1). Helicity becomes a topological obstruction for the classical $(m=1)$ Clebsch representation. In other words, the field a classical Clebsch variable can represent is largely limited. Moreover, near points of vanishing vorticity, smooth $(\lambda, \mu)$ do not exist even locally [Graham and Henyey, 2000]. In addition to the theoretical limitation, another obstacle for the use of a classical Clebsch representation is the difficulty of finding Clebsch variables given a velocity field.

The above challenges can be solved by considering $m>1$. For instance, for $M$ being a subset of $\mathbb{R}^{3}$, one may simply choose $\lambda=\mathbf{u}$ and $\boldsymbol{\mu}=\mathbf{x}$. This consideration goes back to Lagrange and Cauchy, $\eta=\langle\mathbf{u}, d \mathbf{x}\rangle-d \varphi$, $\omega=\langle d \mathbf{u} \wedge d \mathbf{x}\rangle$ (cf. Eq. 2.22). Unfortunately, most of these "Generalized Clebsch variables" ( $m>1$ ) no longer yield a level set representation for vortex lines.

In the coming chapters, we no longer consider Clebsch variables limited to the form $(\boldsymbol{\lambda}, \boldsymbol{\mu}): M \rightarrow \mathbb{R}^{m} \times \mathbb{R}^{m}$ with different choices of $m$. In Chapter 4 we generalize Clebsch variables as maps taking values in some arbitrary symplectic manifold in place of $\mathbb{R}^{2 m}$. A special case of these Clebsch maps take values in $\mathrm{S}^{2}$, which we call spherical Clebsch maps discussed in Chapter 6. The spherical Clebsch map still yields the level set representation for vortex lines, and it is able to represent 3D flow with nonzero helicity. Upon these desirable properties, for an arbitrarily given velocity, the associated Clebsch map can be approximated by minimizing a Ginzburg-Landau en-
ergy. We show numerical examples of finding a spherical Clebsch map and various applications in 3 D vortex detection. What is more, the evolution of the spherical Clebsch maps can be approximated by an incompressible Schrödinger flow discussed in Part III.

## GEOMETRIC CLEBSCH VARIABLES

Throughout this chapter, $M$ is an $n$-dimensional oriented Riemannian manifold, $\eta \in \Omega^{1}(M ; \mathbb{R})$ is a solenoidal velocity 1-form and $\omega=d \eta \in \Omega^{2}(M ; \mathbb{R})$ is the vorticity 2-form.

Definition 4.1 (Vorticity Clebsch map). Suppose $\Sigma$ is a symplectic manifold with symplectic form $\sigma_{\Sigma}$. Then a map $s: M \rightarrow \Sigma$ is called a vorticity Clebsch $\operatorname{map}$ if $\omega=s^{*} \sigma_{\Sigma}$.

For example, in the classical Clebsch map, $\Sigma=\mathbb{R}^{2}$ has a symplectic form $\sigma_{\mathbb{R}^{2}}=d x \wedge d y$. A classical Clebsch map $s=(\lambda, \mu): M \rightarrow \mathbb{R}^{2}$ has the property $\omega=s^{*} \sigma_{\mathbb{R}^{2}}$.

One also finds that $\sigma_{\mathbb{R}^{2}}$ has a symplectic potential $\vartheta_{\mathbb{R}^{2}}=x d y$ so that $\sigma_{\mathbb{R}^{2}}=$ $d \vartheta_{\mathbb{R}^{2}}$. Note that the classical Clebsch map satisfies not only $\omega=s^{*} \sigma_{\mathbb{R}^{2}}$ but also $\eta=s^{*} \vartheta_{\mathbb{R}^{2}}+d \varphi$ for some pressure projection factor $d \varphi$. When $M$ is not simply-connected, the latter condition is strictly stronger than the former.

This suggests that we should define a "velocity Clebsch map" $s: M \rightarrow \Sigma$ satisfying the criterion $\eta=s^{*} \vartheta_{\Sigma}+d \varphi$ where $\vartheta_{\Sigma}$ is a symplectic potential, i.e. $d \vartheta_{\Sigma}=\sigma_{\Sigma}$. However, for a generic symplectic manifold $\Sigma$ there may not exist a symplectic potential globally defined on $\Sigma$; i.e. $\sigma_{\Sigma}$ may not be exact.

Fortunately, there is an alternative way to approach a velocity Clebsch map without relying on the existence of a symplectic potential. Instead of viewing the classical Clebsch representation $\eta=\lambda d \mu+d \varphi$ as $\eta=s^{*} \vartheta_{\mathbb{R}^{2}}+d \varphi$, we write

$$
\eta=\psi^{*} \vartheta_{\mathbb{R}^{3}}
$$

where $\psi=(\lambda, \mu, \varphi): M \rightarrow \mathbb{R}^{3}$ and $\vartheta_{\mathbb{R}^{3}}=x d y+d z$ is 1 -form on $\mathbb{R}^{3}$. We call $\psi$ a velocity Clebsch map. Note that $\psi$ takes value in a space $\left(\mathbb{R}^{3}\right)$ one dimension higher than the space $\left(\mathbb{R}^{2}\right)$ where the vorticity Clebsch map takes values. To relate the velocity Clebsch map to the vorticity Clebsch map, consider the projection $\pi: \mathbb{R}^{3} \rightarrow \mathbb{R}^{2},(x, y, z) \mapsto(x, y)$. Then $d \vartheta_{\mathbb{R}^{3}}=$
$d x \wedge d y=\pi^{*} \sigma_{\mathbb{R}^{2}}$. Thus one discovers that the vorticity

$$
\omega=d \eta=\psi^{*} d \vartheta_{\mathbb{R}^{3}}=\psi^{*} \pi^{*} \sigma_{\mathbb{R}^{2}}=(\pi \circ \psi)^{*} \sigma_{\mathbb{R}^{2}}
$$

where we used the fact that $d$ commutes with the pullback operator. Therefore if $\psi$ is a velocity Clebsch map, then $s=\pi \circ \psi$ is a vorticity Clebsch map. The 1-form $\vartheta_{\mathbb{R}^{3}}=x d y+d z$ is called a contact 1-form on $\mathbb{R}^{3}$ studied in contact geometry. Contact geometry provides a natural generalization of a velocity Clebsch map that may take value in a more general manifold.

### 4.1 Contact Geometry

The classical subject studied in contact geometry is the 1-form

$$
\begin{equation*}
\vartheta=\sum_{i=1}^{m} x_{i} d y_{i}+d z \tag{4.1}
\end{equation*}
$$

in $\mathbb{R}^{2 m+1}$ where $\left(x_{1}, \ldots, x_{m}, y_{1}, \ldots, y_{m}, z\right)$ are the coordinate functions. In short, the main geometric interest of the form (4.1) is in the hyperplane field $\operatorname{ker}(\vartheta)$. The hyperplane field associated to the form (4.1) is nowhere Frobenius integrable [Geiges, 2006], i.e. the hyperplane field cannot be assembled into foliation of hypersurfaces. See [Delphenich, 2017] for the use of (4.1) in various topics in classical physics.

We now take the lens of contact geometry to look at Clebsch variables in hydrodynamics.

Definition 4.2 (Contact structure). Let $Q$ be a $(2 m+1)$-dimensional oriented manifold. A contact structure is a 1 -form $\vartheta \in \Omega^{1}(Q ; \mathbb{R})$ such that $\vartheta \wedge(d \vartheta)^{m}$ is nowhere vanishing. An odd dimensional manifold $Q$ with a contact structure is called a contact manifold.

Definition 4.3 (Contactomorphism). Suppose $(Q, \vartheta)$ is a contact manifold. A diffeomorphism $g: Q \rightarrow Q$ is called a contactomorphism if $g^{*} \vartheta=\vartheta$.

Take (4.1) as an example: any uniform translation in the $z$ direction is a contactomorphism.

Definition 4.4 (Contact vector field). A vector field $X \in \Gamma(T Q)$ on a contact manifold $(Q, \vartheta)$ is called a contact vector field if $\mathcal{L}_{X} \vartheta=0$.

A contact vector field is viewed as an infinitesimal contactomorphism, since the flow $\phi_{t}: Q \rightarrow Q$ generated by a contact vector field $X$ satisfies $\frac{\partial}{\partial t} \phi_{t}^{*} \vartheta=\phi_{t}^{*}\left(\mathcal{L}_{X} \vartheta\right)=\mathrm{o}$ and thus $\phi_{t}^{*} \vartheta=\vartheta$. For example, for the contact structure (4.1) on $\mathbb{R}^{2 m+1}$, any uniform $z$-direction vector field $X=c \frac{\partial}{\partial z}$ ( $c$ is a constant) is a contact vector field.

Definition 4.5 (Reeb vector field). $A$ Reeb vector field $V \in \Gamma(T Q)$ on a contact manifold $(Q, \vartheta)$ is a contact vector field which satisfies $\vartheta(V)=1$.

In the example of (4.1), the unit parallel vector field $V=\frac{\partial}{\partial z}$ is a Reeb vector field. One may view a Reeb vector field as a "vertical direction" in $Q$.

## Group Actions on Contact Manifolds

A Reeb vector field $V$ on a contact manifold $(Q, \vartheta)$ generates a one-parameter family of contactomorphisms. In the example of $Q=\mathbb{R}^{2 m+1}$ with contact form (4.1), the Reeb vector field $V=\frac{\partial}{\partial z}$ generates all translations in the $z$ direction.

In general there is a one-dimensional Lie group $G$ which acts on $Q$ by $G \times$ $Q \rightarrow Q$, denoted by $(g \in G, q \in Q) \mapsto g \cdot q$, and each group element acts on $Q$ as a contactomorphism $(g \cdot)^{*} \vartheta=\vartheta$. Let $\mathfrak{g} \cong \mathbb{R}$ be the Lie algebra associated to $G$, where we denote $i: \mathbb{R} \xrightarrow{\cong} \mathfrak{g}$ as the isomorphism. Let $\exp : \mathfrak{g} \rightarrow G$ be the exponential map. Hence each element in $G$ can be written as $\exp (i t)$ for some $t \in \mathbb{R}$. This group action is related to the Reeb vector field $V$ by that for each $q \in Q$

$$
\left.\frac{d}{d t}\right|_{t=0} \exp (i t) \cdot q=V_{q}
$$

From each $q \in Q$ the orbit $\{g \cdot q \mid g \in G\}$ is a vertical fiber. Next, we will consider that $Q$ is a fiber bundle with one dimensional fibers being the orbits of the group action associated with a Reeb vector field.

### 4.2 Prequantum Bundle

We observe that the classic example (4.1) has the structure that $d \vartheta=$ $\sum_{i=1}^{m} d x_{i} \wedge d y_{i}$, which is the symplectic form of $\mathbb{R}^{2 m}$ with coordinate functions $\left(x_{1}, \ldots, x_{m}, y_{1}, \ldots, y_{m}\right)$. The dimension that is dropped from $\mathbb{R}^{2 m+1}$ is the $z$ direction, a Reeb vector field.

This motivates us to consider the following setup.

Definition 4.6 (Prequantum bundle). Suppose $Q \xrightarrow{\pi} \Sigma$ is a fiber bundle, where $(Q, \vartheta)$ is a $(2 m+1)$-dimensional contact manifold, and $(\Sigma, \sigma)$ is a $(2 m)$-dimensional symplectic manifold. Then the bundle $Q \xrightarrow{\pi} \Sigma$ is called a prequantum bundle or prequantization if there is a one-dimensional Lie group $G$ acting on $Q$ as contactomorphisms such that

1. $G$ preserves the fibers. That is, $\pi(g \cdot q)=\pi(q)$ for all $g \in G$ and $q \in Q$;
2. $G$ acts freely and transtive on each fiber. That is, for any $q, \tilde{q} \in Q$ on the same fiber $\pi(q)=\pi(\tilde{q})$, there exists a unique $g \in G$ such that $\tilde{q}=g \cdot q$;
3. the vector field $V \in \Gamma(T Q)$ rising from the generator $V_{q}=\left.\frac{d}{d t}\right|_{t=0} \exp (i t) \cdot q$ is a Reeb vector field;
4. $d \vartheta=\pi^{*} \sigma$.

In other words, a prequantum bundle $\pi: Q \rightarrow \Sigma$ is a principal $G$-bundle (condition 1. and 2.) with an Ehresmann connection $\vartheta$ (condition 3.) whose corresponding curvature form on the base manifold $\Sigma$ equals to the symplectic form (condition 4.).

The name "prequantization" is borrowed from geometric quantization, a process which turns a classical mechanical system into a quantum mechanical system. Definition 4.6 is a fundamental building block not only in geometric quantization but also in geometric Clebsch variables.

## Wavefunctions

What is the intuition behind the bundle $Q$ over $\Sigma$ ? You can think of that each point $q \in Q$ has the information of its base point $\pi(q)$ in $\Sigma$ with an additional information about its location on the 1 D fiber. The location on the fiber is referred as the phase. The structure group $G$ underneath the bundle $Q$ is the group of phase shifts.

By interpreting elements in $Q$ as an object in $\Sigma$ with an additional phase information, we call a $Q$-valued function $\psi: M \rightarrow Q$ a wavefunction. Here $M$ can be an arbitrary domain of interest.

### 4.3 Hopf Fibration

In the previous sections, we only looked at $Q=\mathbb{R}^{2 m+1}, \vartheta=\sum_{i=1}^{m} x_{i} d y_{i}+d z$, $\Sigma=\mathbb{R}^{2 m}, \sigma=\sum_{i=1}^{m} d x_{i} \wedge d y_{i}$ as an example of prequantum bundle. In this section, we give another example of prequantum bundle.

Let $\Sigma=S^{2}$ with the symplectic form

$$
\begin{equation*}
\sigma=\frac{1}{2} \hbar \sigma_{\mathbb{S}^{2}} \tag{4.2}
\end{equation*}
$$

where $\sigma_{\mathbb{S}^{2}}$ is the standard area form on $\mathbb{S}^{2}$. The scaling factor $\frac{1}{2} \hbar$ makes it so that the total effective area of the sphere is $2 \pi \hbar$ computed using the 2-form $\sigma$.

This is an example that the symplectic form is not exact.
Let $Q=\mathrm{S}^{3}$ be the set of unit quaternions

$$
\mathrm{S}^{3}=\{q \in \mathbb{H}| | q \mid=1\}
$$

We define $f: \mathrm{S}^{3} \rightarrow \mathrm{~S}^{3}$ as the identity map, which is useful to define the following functions. Define

$$
\pi=\bar{f} i f
$$

which always takes value in purely imaginary quaternions with norm 1; i.e. $\pi: S^{3} \rightarrow S^{2}$. For that being said, we also treat elements in $S^{2}$ as quaternions. The projection $\pi$ is known as the Hopf map.

Next we see that the 3 -sphere $\mathbb{S}^{3}$ is a principal $U(1)$-bundle over $\mathbb{S}^{2}$, where the group $U(1)=\left\{e^{i \varphi / \hbar} \mid \varphi \in \mathbb{R}\right\}$. The group action on $\mathrm{S}^{3}$ is the left quaternionic multiplication. One checks that $U(1)$ preserves the fibers and it acts freely and transitively on the fibers:

- For $q \in \mathrm{~S}^{3}$ and $e^{i \varphi / \hbar} \in U(1), \pi\left(e^{i \varphi / \hbar} q\right)=\bar{q} e^{-i \varphi / \hbar} i e^{i \varphi / \hbar} q=\bar{q} i q=\pi(q)$. That is, $e^{i \varphi / \hbar} q$ stays on the same fiber with $q$.
- Suppose $\tilde{q} \in \mathbb{S}^{3}$ is another element on the fiber of q, i.e. $\pi(\tilde{q})=\pi(q)$. We claim that there is a unique $e^{i \varphi / \hbar} \in U(1)$ such that $\tilde{q}=e^{i \varphi / \hbar} q$. First we write $\overline{\tilde{q}} i \tilde{q}=\bar{q} i q$. This implies $i \tilde{q} \bar{q}=\tilde{q} \bar{q} i$, i.e. the quaternion $\tilde{q} \bar{q}$ commutes with $i$. Hence $\tilde{q} \bar{q}$ as a unit quaternion has no $j, k$ component, so $\tilde{q} \bar{q}=e^{i \varphi / \hbar}$ for some unique $e^{i \varphi / \hbar} \in U(1)$. Therefore $\tilde{q}=e^{i \varphi / \hbar} q$, which proves our claim.

Therefore, $\pi: \mathbb{S}^{3} \rightarrow \mathbb{S}^{2}$ is a principal $U(1)$-bundle.
Note that the vector field $V$ corresponding to the generator is given by $V_{q}=\left.\frac{d}{d t}\right|_{t=0} e^{i t / \hbar} q=i \frac{1}{\hbar} q$. In terms of the identity map we have

$$
V=i \frac{1}{\hbar} f
$$

For quaternions $a, b \in \mathbb{H}$, we denote $\langle a, b\rangle=\operatorname{Re}(\bar{a} b)$ as the real inner product, which is the same as treating $a, b$ as $\mathbb{R}^{4}$ vectors. This Euclidean metric of $\mathbb{R}^{4}$ induces a metric $\langle\cdot, \cdot\rangle$ on the tangent spaces of $\mathbb{S}^{3} \subset \mathbb{R}^{4}$. Using this metric we construct the following 1 -form

$$
\begin{equation*}
\vartheta=\hbar^{2} V^{b}=\hbar\langle i f, d f\rangle \in \Omega^{1}\left(S^{3} ; \mathbb{R}\right) \tag{4.3}
\end{equation*}
$$

The scaling factor $\hbar$ is put in such a way that $\vartheta(V)=1$. Now, one checks that $\vartheta$ is a contact form, that is $\vartheta \wedge d \vartheta \neq 0$.

Proposition 4.1. $\vartheta \wedge d \vartheta=2 \hbar^{2} \cdot\left(\right.$ the volume form of $\mathrm{S}^{3}$ ).

Proof. Using the orthonormal basis $\{i f, j f, k f\}$ for $T S^{3}$ we express the vector(tangent to $\mathrm{S}^{3}$ )-valued 1-form $d f$ as

$$
d f=\tilde{\vartheta} i f+\alpha j f+\beta k f
$$

where the real-valued 1-form $\tilde{\vartheta}=\langle i f, d f\rangle$ as defined earlier without the factor $\hbar$, and the other real-valued 1-forms are defined analogously $\alpha=$ $\langle j f, d f\rangle, \beta=\langle k f, d f\rangle$. Since $d f$ is the identity map, the volume form of $\mathrm{S}^{3}$ written in this basis is given by $\tilde{\vartheta} \wedge \alpha \wedge \beta$. Now

$$
\begin{aligned}
d \tilde{\vartheta} & =\langle i d f \wedge d f\rangle \\
& =\operatorname{Re}(-d \bar{f} \wedge i d f)
\end{aligned}
$$

where $i d f=(-\tilde{\vartheta}-\beta j+\alpha k) f$ and $-d \bar{f}=\bar{f}(\tilde{\vartheta} i+\alpha j+\beta k)$. Therefore

$$
\begin{aligned}
d \tilde{\vartheta} & =\operatorname{Re}(\bar{f}((\tilde{\vartheta} i+\alpha j+\beta k) \wedge(-\tilde{\vartheta}-\beta j+\alpha k)) f) \\
& =\operatorname{Re}((\tilde{\vartheta} i+\alpha j+\beta k) \wedge(-\tilde{\vartheta}-\beta j+\alpha k)) \\
& =2 \alpha \wedge \beta,
\end{aligned}
$$

where we used the fact that a similarity transform $\cdot \mapsto \bar{f}(\cdot) f$ preserves the real and imaginary splitting. Hence $\tilde{\vartheta} \wedge d \tilde{\vartheta}=2 \tilde{\vartheta} \wedge \alpha \wedge \beta$ is two times the volume form on $\mathrm{S}^{3}$. The proof then follows with $\vartheta=\hbar \tilde{\vartheta}$.

One also checks that the $U(1)$ group actions are contactomorphisms with respect to the contact form $\vartheta$ on $\mathbb{S}^{3}$. For each fixed $e^{i \varphi_{0} / \hbar} \in U(1)$,

$$
\left(e^{i \varphi_{0} / \hbar} .\right)^{*} \vartheta(X)=\hbar\left\langle i e^{i \varphi_{0} / \hbar} f, e^{i \varphi_{0} / \hbar} d f\right\rangle=\hbar\langle i f, d f\rangle=\vartheta(X)
$$

where we used the fact that application of $e^{i \varphi_{0} / \hbar}$ is just a linear rotation and that $i$ commutes with $e^{i \varphi_{0} / \hbar}$. We also find that $\vartheta(V)=1$ by construction. Therefore the generator vector field $V$ is a Reeb vector field with respect to $\vartheta$.

Finally, we show that $\left(S^{3}, \vartheta\right)$ is a prequantization of $\left(\mathbb{S}^{2}, \sigma\right)$.
Theorem 4.1. For $\vartheta$ defined in (4.3) and $\sigma$ defined in (4.2), we have $d \vartheta=\pi^{*} \sigma$.

Proof. First of all one discovers that

$$
\begin{aligned}
d \pi & =d(\bar{f} i f)=d \bar{f} i f+\bar{f} i d f \\
& =\overline{\bar{f}}(-i) d f+\bar{f} i d f=2 \operatorname{Im}(\bar{f} i d f) .
\end{aligned}
$$

On the other hand the real part of the similar expression

$$
\operatorname{Re}(-\bar{f} i d f)=\langle i f, d f\rangle=\frac{1}{\hbar} \vartheta
$$

Therefore the quaternion-valued 1-form $\mu:=-\bar{f} i d f$ has the real and imaginary part splitting as

$$
\mu=\frac{1}{\hbar} \vartheta-\frac{1}{2} d \pi .
$$

Now observe that $d \vartheta=\hbar d \mu$ and

$$
\pi d \mu=-\bar{f} i \underbrace{f d \bar{f}}_{=-d f \bar{f}} \wedge i d f=\bar{f} i d f \wedge \bar{f} i d f=\mu \wedge \mu=\frac{1}{4} d \pi \wedge d \pi .
$$

Because $\pi$ takes on values in $\mathrm{S}^{2}$ we have $d \pi \wedge d \pi=2 \pi\left(\pi^{*} \sigma_{\mathbb{S}^{2}}\right)$. Explicitly, for $X, Y \in T \mathbb{S}^{3}$,

$$
\pi^{*} \sigma_{\mathbb{S}^{2}}(X, Y)=\sigma_{\mathbb{S}^{2}}(d \pi(X), d \pi(Y))=\frac{1}{2}\langle\pi, d \pi \wedge d \pi\rangle(X, Y)
$$

Hence $d \vartheta=\hbar d \mu=\frac{\hbar}{2} \pi^{*} \sigma_{\mathbb{S}^{2}}=\pi^{*} \sigma$.

### 4.4 Velocity Clebsch Map

Recall Definition 4.1 that a vorticity Clebsch map is a function $s: M \rightarrow \Sigma$, where $(\Sigma, \sigma)$ is symplectic manifold, so that the vorticity $\omega=s^{*} \sigma$. Since the symplectic form $\sigma$ may not be exact, a Clebsch representation for the velocity 1-form $\eta=s^{*} \vartheta_{\Sigma}$ may not be available. We therefore introduce prequantization (Section 4.2), a separate manifold $Q$ that has a projection $\pi: Q \rightarrow \Sigma$ and a 1 -form $\vartheta \in \Omega^{1}(Q ; \mathbb{R})$ so that $d \vartheta=\pi^{*} \sigma$. We demonstrate in Section 4.3 that a prequantization is possible even when $\sigma$ is not exact.

Definition 4.7 (Velocity Clebsch Map). Let $M$ be the fluid domain and $\eta \in$ $\Omega^{1}(M ; \mathbb{R})$ be the velocity 1-form. Suppose $(Q, \vartheta)$ is a prequantization over a symplectic manifold $(\Sigma, \sigma)$. Then a (wave)function $\psi: M \rightarrow Q$ is called a velocity Clebsch map if $\eta=\psi^{*} \vartheta$.

Proposition 4.2. Suppose $(Q, \vartheta)$ with $\pi: Q \rightarrow \Sigma$ is a prequantization over $(\Sigma, \sigma)$. If $\psi: M \rightarrow L$ is a velocity Clebsch map, then $s=(\pi \circ \psi): M \rightarrow \Sigma$ is a vorticity Clebsch map.

Proof. Taking $d$ on $\eta=\psi^{*} \vartheta$, we have $\omega=\psi^{*} d \vartheta=\psi^{*} \pi^{*} \sigma=(\pi \circ \psi)^{*} \sigma=$ $s^{*} \sigma$.

For each wavefunction $\psi: M \rightarrow Q$, we call its phase differential $\psi^{*} \vartheta$ the velocity 1-form associated to $\psi$, which is the velocity for which $\psi$ is the velocity Clebsch map.

Here are a few examples for velocity Clebsch maps.

## Classical Clebsch Variables

Clebsch's original Clebsch variable fits into our framework. Let $\Sigma=\mathbb{R}^{m} \times$ $\mathbb{R}^{m}$ with coordinate functions $(\mathbf{p}, \mathbf{q})$ and symplectic form $\sigma=\langle d \mathbf{p} \wedge d \mathbf{q}\rangle$. Let $Q=\Sigma \times \mathbb{R}$ with coordinate function $(\mathbf{p}, \mathbf{q}, z$ ) and connection 1-form $\vartheta=$ $\langle\mathbf{p}, d \mathbf{q}\rangle+d z$. Now, a wavefunction $\psi: M \rightarrow Q$ can be written in components $\psi=(\lambda, \mu, \varphi)$, each of which takes values in a component of $Q=\mathbb{R}^{m} \times \mathbb{R}^{m} \times$ $\mathbb{R}$. Then the velocity associated to $\psi$ is the classical Clebsch representation $\psi^{*} \vartheta=\langle\lambda, d \boldsymbol{\mu}\rangle+d \varphi$.

## Madelung Transform

Another example for a geometric velocity Clebsch map is in the hydrodynamic form of quantum mechanics. In Chapter 1 we talked about that the state of a quantum particle is described by a $\mathbb{C}$-valued wave function $\psi_{1}: M \rightarrow \mathbb{C}$. The function $\psi_{1}$ encodes the probability density of the location of the particle in its squared amplitude $\left|\psi_{1}\right|^{2}$, and the probability flow velocity in its wave vector measured by the gradient of the phase: $\eta=\hbar d \arg \left(\psi_{1}\right)=\frac{\hbar}{\left|\psi_{1}\right|^{2}} \operatorname{Re}\left(\overline{i \psi_{1}} d \psi_{1}\right)$. Note that under the condition $\left|\psi_{1}\right|^{2} \neq 0$, the vorticity $d \eta$ must vanish.

As introduced in Chapter 1, we consider a two-component wavefunctions $\Psi=\left(\psi_{1}, \psi_{2}\right)^{\top}$ to include vorticity. Its madelung transform takes a similar
form: the density is given by $|\Psi|^{2}=\left|\psi_{1}\right|^{2}+\left|\psi_{2}\right|^{2}$ and the velocity is given by $\eta=\frac{\hbar}{|\psi|^{2}} \operatorname{Re}\left(\overline{i \Psi^{\top}} d \Psi\right)$. In expansion one sees that

$$
\eta=\frac{\hbar}{|\psi|^{2}}\left(\left|\psi_{1}\right|^{2} d \arg \left(\psi_{1}\right)+\left|\psi_{2}\right|^{2} d \arg \left(\psi_{2}\right)\right)
$$

is no longer a pure gradient, and hence it allows nontrivial vorticity.
The $\mathbb{C}^{2}$-valued wavefunction $\Psi$ can be identified with a quaternion-valued function $\psi$ by $\psi=\psi_{1}+\psi_{2} j$ introduced in Section B.4. In particular this identification respects multiplication of $e^{i \varphi}$ from the left. In terms of quaternions, the Madelung transform for velocity is written as $\eta=\frac{\hbar}{|\psi|^{2}}\langle i \psi, d \psi\rangle$. Here $\langle\cdot, \cdot\rangle$ is the Euclidean inner product in $\mathbb{H} \cong \mathbb{R}^{4}$ (see Section 4.3 and Section B.4).

For a wavefunction corresponding to a flow with constant density, $\psi$ is an $\mathrm{S}^{3}$-valued function. Then one sees that the Madelung transform $\eta=$ $\hbar\langle i \psi, d \psi\rangle$ is a Clebsch representation using the Hopf fibration (Section 4•3) as the prequantization. That is, $\Sigma=\mathrm{S}^{2}$. Let the symplectic form on $\Sigma$ be $\sigma=$ $\frac{\hbar}{2} \sigma_{\mathrm{S}^{2}}$ where $\sigma_{\mathrm{S}^{2}}$ is the area form on the unit sphere. The prequantization is given by $Q=\mathrm{S}^{3}$ with $\vartheta=\hbar\langle i f, d f\rangle$ where $f: \mathrm{S}^{3} \rightarrow \mathrm{~S}^{3}$ is the identity map. Then, the velocity rising from a wavefunction $\psi: M \rightarrow \mathrm{~S}^{3}$ coincides with the Madelung transform $\psi^{*} \vartheta=\hbar\langle i \psi, d \psi\rangle$.

### 4.5 Pressure Projection for Wavefunctions

The one-dimensional Lie group structure in the prequantum bundle $(Q, \vartheta)$ makes it natural to talk about pressure projection for wavefunctions.

Recall the notations that the Lie algebra associated to the Lie group $G$ is $\mathfrak{g} \cong \mathbb{R}$ with the exponential map $\exp : \mathfrak{g} \rightarrow G$ and the isomorphism $i: \mathbb{R} \xrightarrow{\cong} \mathrm{g}$. Let $\psi: M \rightarrow Q$ be a wavefunction with its associated velocity $\psi^{*} \vartheta$ 。

First we observe that for a fixed constant $\varphi_{o} \in \mathbb{R}$, the constant phase shift $\tilde{\psi}:=\exp \left(i \varphi_{\mathrm{o}}\right) \cdot \psi$ leaves the velocity invariant $\tilde{\psi}^{*} \vartheta=\psi^{*} \vartheta$. This is because the group acts on $Q$ as contactomorphisms $\vartheta=\left(\exp \left(i \varphi_{0}\right) \cdot\right)^{*} \vartheta$. However, if the phase factor $\varphi$ is a function that varies over $M, \varphi: M \rightarrow \mathbb{R}$, the transformation $\tilde{\psi}:=\exp (i \varphi) \cdot \psi$ modifies the velocity by $\tilde{\psi}^{*} \vartheta=\psi^{*} \vartheta+d \varphi$ as shown in the following lemma. Addition of an exact differential is exactly the degree of freedom for pressure projection for a velocity field (see Section 2.3).

This correspondence allow us to apply pressure projection on the level of wavefunctions.

Lemma 4.1. Let $\psi: M \rightarrow Q$ and $\varphi: M \rightarrow \mathbb{R}$. Then

$$
(\exp (i \varphi) \cdot \psi)^{*} \vartheta=\psi^{*} \vartheta+d \varphi
$$

Proof. To show the equality of 1 -forms we stick in a vector. Let $x_{\mathrm{O}} \in M$, $X \in T_{x_{0}} M$, and let $\gamma_{(\cdot)}:(-\epsilon, \epsilon) \rightarrow M$ be a curve so that $\gamma_{\mathrm{o}}=x_{\mathrm{o}}$ and $\gamma_{\mathrm{O}}^{\prime}=X$. Let us denote $\varphi_{\mathrm{o}}=\varphi\left(x_{\mathrm{o}}\right) \in \mathbb{R}, \psi_{\mathrm{o}}=\psi\left(x_{\mathrm{o}}\right) \in Q$, and $\tilde{\psi}_{\mathrm{o}}=\exp \left(i \varphi_{\mathrm{o}}\right) \cdot \psi_{\mathrm{o}} \in Q$. Then

$$
\begin{aligned}
& \left((\exp (i \varphi) \cdot \psi)^{*} \vartheta\right)(X) \\
& =\vartheta(d(\exp (i \varphi) \cdot \psi)(X)) \\
& =\vartheta\left(\left.\frac{d}{d t}\right|_{t=0} \exp \left(i \varphi\left(\gamma_{t}\right)\right) \cdot \psi\left(\gamma_{t}\right)\right) \\
& =\vartheta\left(\left.\frac{d}{d t}\right|_{t=0} \exp \left(i \varphi\left(\gamma_{t}\right)\right) \cdot \psi_{\mathrm{o}}\right)+\vartheta\left(\left.\frac{d}{d t}\right|_{t=0} \exp \left(i \varphi_{\mathrm{o}}\right) \cdot \psi\left(\gamma_{t}\right)\right) \\
& =\vartheta\left(\left.d \varphi(X) V\right|_{\tilde{\psi}_{\mathrm{o}}}\right)+\left(\left(\exp \left(i \varphi_{\mathrm{o}}\right) \cdot \psi\right)^{*} \vartheta\right)(X) \\
& =d \varphi(X)+\left(\psi^{*} \vartheta\right)(X)
\end{aligned}
$$

At the last equality, we used the fact that $\vartheta(V)=1$ in the first term, and we observed that $\exp \left(i \varphi_{0}\right) \cdot \psi$ in the second term is a constant phase shift of the function $\psi$.

In analogy with Section 2.3, define an equivalence relation $\sim$ on $C^{\infty}(M ; Q)$ by

$$
\psi \sim \tilde{\psi} \quad \text { if and only if } \tilde{\psi}=\exp (i \varphi) \cdot \psi \text { for some } \varphi \in C^{\infty}(M ; \mathbb{R})
$$

Note that two wavefunctions are equivalent $\psi \sim \tilde{\psi}$ implies that they project to the same $s=\pi \circ \psi=\pi \circ \tilde{\psi}$. The converse is true when $M$ is simply connected. In general, there might be elements from different equivalence classes projecting to the same $s$. This phenomenon is analogous to that velocities with different harmonic components may correspond to the same vorticity, but their difference is not a pure differential.

Now, let the space of equivalent classes be

$$
\mathcal{M}:=C^{\infty}(M ; Q) / \sim .
$$

Each element $[\psi] \in \mathcal{M}$ is a set of wavefunctions $\tilde{\psi} \in[\psi]$ whose velocity $\tilde{\psi}^{*} \vartheta$ differs from $\psi^{*} \vartheta$ only by an exact differential.

Theorem 4.2 (Wavefunction retrieval). Suppose $M$ is a connected domain. Let $f \in \Omega^{\circ}(M ; \mathbb{R})$ and $g \in \Omega^{\circ}(\partial M ; \mathbb{R})$ be functions on $M$ and $\partial M$ satisfying the condition that

$$
\int_{M} \star f=\oint_{\partial M} \star_{\partial} g
$$

Then for each $[\tilde{\psi}] \in \mathcal{M}$ there exists a representative $\psi \in[\tilde{\psi}], \psi: M \rightarrow Q$, such that the corresponding velocity $\eta=\vartheta^{*} \psi$ satisfies

$$
\begin{cases}d \star \eta=\star f & \text { in } M \\ \iota_{N} \eta=g & \text { on } \partial M,\end{cases}
$$

where $N$ is the unit outer normal of $\partial M$. This representative $\psi$ is unique up to a global phase $\psi \mapsto \exp (i c) \cdot \psi(c$ is a constant).

Corollary 4.1. Let $g \in \Omega^{\circ}(\partial M ; \mathbb{R})$ describe the in flow and out flow at the boundary of a connected domain $M$. Assume $\int_{\partial M} \star_{\partial M} g=0$. Then for each wavefunction $\tilde{\psi}: M \rightarrow Q$ there exists a phase factor $\varphi: M \rightarrow \mathbb{R}$ unique up to an additive constant, such that $\psi=\exp (i \varphi) \tilde{\psi}$ has a velocity $\eta=\psi^{*} \vartheta$ that is solenoidal $d \star \eta=\mathrm{o}$ and matches the in/out flow requirement $\iota_{N} \eta=g$ on $\partial M$.

## Chapter 5

## *MORE ON GEOMETRIC CLEBSCH MAPS

In Chapter 4 we introduced geometric Clebsch maps representing a flow field on a fluid domain $M$. To set up, one requires a prequantum bundle $\pi:(Q, \vartheta) \rightarrow(\Sigma, \sigma)$ where the contact 1-form $\vartheta$ and the symplectic 2-form $\sigma$ are related by $d \vartheta=\pi^{*} \sigma$. The velocity 1-form on the fluid domain, $\eta$, is then represented by a map $\psi: M \rightarrow Q$ via pullback $\eta=\psi^{*} \vartheta$. With $\psi$ in hand, the vorticity field $\omega=d \eta$ can be represented by the map $s=\pi \circ \psi$ by $\omega=s^{*} \sigma$. The function $\psi$ is called a wavefunction and a velocity Clebsch map. The function $s$ is called a vorticity Clebsch map.
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-075.jpg?height=215&width=307&top_left_y=1112&top_left_x=909)

In order to talk about pressure projection, we also imposed a structure group $G$ which acts on $Q$ representing phase shifts.

The prequantum bundle can be viewed as a geometric generalization of Clebsch' original consideration - the velocity $\eta$ is the pullback of the contact form $\vartheta=\langle\mathbf{x}, d \mathbf{y}\rangle+d z$ on $Q=\mathbb{R}^{2 m+1}$ through the map $\psi=(\boldsymbol{\mu}, \boldsymbol{\mu}, \varphi)$, and the vorticity is represented only using $\langle\mathbf{x} \wedge \mathbf{y}\rangle$ on $\Sigma$. On the other hand the prequantum bundle can be viewed as a principal $G$-bundle with $\vartheta$ being an Ehresmann connection. In this chapter we elaborate the latter geometric picture.

As mentioned above, every velocity Clebsch map $\psi: M \rightarrow Q$ gives rise to a vorticity Clebsch map $s=\pi \circ \psi$. The converse is not that obvious. In Section 5.3 we show an important result that every vorticity Clebsch map $s: M \rightarrow \Sigma$ (with $s^{*} \sigma$ being exact) admits a velocity Clebsch map $\psi: M \rightarrow Q$ such that $s=\pi \circ \psi$. The geometric picture elaborated in this chapter is used to show this result.

### 5.1 Connections and Curvatures

In this section we briefly introduce the standard notion of connections and curvatures on principal bundles. Since we only consider the case that the structure Lie group $G$ is one-dimensional, many definitions here are simplified versions of the full theory one would find in a text book of the related subject.

Principal Bundle For a one-dimensional Lie group $G$, let $i: \mathbb{R} \xrightarrow{\cong} \mathfrak{g}$ be the isomorphism between $\mathbb{R}$ and the Lie algebra $\mathfrak{g}$, and let $\exp : \mathfrak{g} \rightarrow G$ be the exponential map. Then we call a fiber bundle $Q \xrightarrow{\pi} \Sigma$ a principal $G$-bundle if there is a group action $G \times Q \rightarrow Q$ that preserves the fibers and acts freely and transitively along the fibers; (see Definition 4.6 Conditions 1. and 2.)

Ehresmann Connection The group action generates a vertical (tangent-to-fiber) vector field $V \in \Gamma(T Q)$ defined by

$$
V(q)=\left.\frac{d}{d t}\right|_{t=0} \exp (i t) \cdot q
$$

for each $q \in Q$. A real-valued 1-form $\alpha \in \Omega^{1}(Q ; \mathbb{R})$ is an Ehresmann connection on $Q$ if

1. $\alpha$ is equivariant; that is, $(g \cdot)^{*} \alpha=\alpha$;
2. $\alpha(V)=1$.

An Ehresmann connection induces a connection derivative (or simply connection) $\nabla^{\alpha}$ acting on local sections of $Q$. For an open set $U \subset \Sigma$ a local section $F$ is a smooth function $F: U \rightarrow Q$ such that $\pi \circ F=\left.\mathrm{id}\right|_{U}$. For each local section the connection derivative $\nabla^{\alpha} F$ is defined by the $\mathfrak{g}$-valued 1 -form

$$
\nabla^{\alpha} F:=i F^{*} \alpha \in \Omega^{1}(U ; \mathfrak{g}) .
$$

Explicitly, for a tangent vector $X \in T_{p} \Sigma$ at a point $p \in U, \nabla_{X}^{\alpha} F=i \alpha(d F(X))$ measures the "vertical" change in $F$ as an element of $\mathfrak{g}$.

Local Phase Shifts of Sections Suppose a local section $F: U \rightarrow Q, \pi \circ F=$ id $\left.\right|_{U}$, is shifted by a phase $\tilde{F}:=\exp (i \varphi) \cdot F$ for some $\varphi: U \rightarrow \mathbb{R}$. Then the resulting connection derivative changes according to

$$
\begin{equation*}
\nabla^{\alpha} \tilde{F}=\nabla^{\alpha} F+i d \varphi \tag{5.1}
\end{equation*}
$$

This can be seen by following the proof of Lemma 4.1 with $M=U$ and $\psi=F$.

Change in Connections One can also modify a given connection $\alpha$ through a 1 -form on $\Sigma$. Suppose $\xi \in \Omega^{1}(\Sigma ; \mathbb{R})$ is a 1 -form. Then $\tilde{\alpha}=\alpha+\pi^{*} \xi \in$ $\Omega^{1}(Q ; \mathbb{R})$ is another Ehresmann connection. This is because for each $g \in G$ the group action $(g$.$) preserves the fiber, i.e. \pi \circ(g)=.\pi$, and therefore $(g \cdot)^{*} \pi^{*} \xi=(\pi \circ(g \cdot))^{*} \xi=\pi^{*} \xi$. By the same reason one has $d \pi(V)=0$, and therefore $\pi^{*} \xi(V)=0$. Thus the 1-form $\tilde{\alpha}$ indeed satisfies $(g \cdot)^{*} \tilde{\alpha}=\tilde{\alpha}$ and $\tilde{\alpha}(V)=1$.

Conversely, any change in connection always takes the form $\tilde{\alpha}=\alpha+\pi^{*} \xi$ for some $\xi \in \Omega^{1}(\Sigma ; \mathbb{R})$. The 1 -form $\xi$ can be constructed by that at each $p \in \Sigma$ choose an arbitrary local section $F$ on $U \ni p$, and let $\xi_{p}:=\left.F^{*}(\tilde{\alpha}-\alpha)\right|_{p}$. Any different choice of local section $\tilde{F}=\exp (i \varphi) \cdot F$ for some $\varphi: U \rightarrow \mathbb{R}$ gives rise to the same result

$$
\tilde{F}^{*}(\tilde{\alpha}-\alpha) \stackrel{(5.1)}{=} F^{*} \tilde{\alpha}+d \varphi-F^{*} \alpha-d \varphi=F^{*}(\tilde{\alpha}-\alpha)
$$

The effect of modifying a connection $\tilde{\alpha}=\alpha+\pi^{*} \xi$ on the level of the operator $\nabla^{\alpha}$ is that

$$
\nabla^{\tilde{\alpha}} F=\nabla^{\alpha} F+i \xi
$$

for each local section $F: U \subset \Sigma \rightarrow Q, \pi \circ F=\left.\mathrm{id}\right|_{U}$. One may check it by a direct substitution:

$$
\nabla^{\tilde{\alpha}} F=i F^{*} \tilde{\alpha}=i F^{*} \alpha+i F^{*} \pi^{*} \xi=i F^{*} \alpha+i(\pi \circ F)^{*} \xi=\nabla^{\alpha} F+i \xi
$$

Parallel Transport The connection $\nabla^{\alpha}$ induces a parallel transport $\Pi$. Given a path $\gamma:[0,1] \rightarrow \Sigma$, the parallel transport associated to $\gamma$ is a $t \in[0,1]$ parameterized family of maps between fibers

$$
\Pi_{\gamma}^{t}: \pi^{-1}(\gamma(\mathrm{o})) \rightarrow \pi^{-1}(\gamma(t))
$$

defined so that

$$
\alpha\left(\frac{\partial}{\partial t} \Pi_{\gamma}^{t} q\right)=\mathrm{o} \quad \text { for all } t \in[\mathrm{O}, \mathbf{1}], q \in \pi^{-1}(\gamma(\mathrm{o}))
$$

That is, for a section $F$ satisfying $F(\gamma(t))=\Pi_{\gamma}^{t} F(\gamma(\mathrm{o}))$, one has $\nabla_{\dot{\gamma}}^{\alpha} F=\mathrm{o}$ along the path.

The existence and uniqueness of the parallel transport follows from the unique existence of ODEs. Since $\alpha(V)=1$, the fiber is always transversal to the hyperplane field $\operatorname{ker}(\alpha)$ (called horizontal subspaces). Thus for a given tangent vector $\dot{\gamma} \in T_{\gamma} \Sigma$, there is a unique vector $X_{q}$ at every point $q \in \pi^{-1}(\gamma)$ in the fiber so that $\alpha\left(X_{q}\right)=\mathrm{o}$ and $d \pi\left(X_{q}\right)=\dot{\gamma}$. Finally one observes that $t \mapsto \Pi_{\gamma}^{t} q$ is just the integral curve of the vector field $X$.

As a map between fibers, the map $\Pi_{\gamma}^{t}$ commutes with group action:

$$
\Pi_{\gamma}^{t} \circ(g \cdot)=(g \cdot) \circ \Pi_{\gamma}^{t}
$$

This is a consequence of equivariance of the connection.
One may also ask what happens to the parallel transport under a change in the connection $\tilde{\alpha}=\alpha+\pi^{*} \xi$ for some 1-form $\xi \in \Omega^{1}(\Sigma ; \mathbb{R})$. Let $\tilde{\Pi}$ be the parallel transport associated to $\tilde{\alpha}$. Then for each path $\gamma:[0,1] \rightarrow \Sigma$

$$
\tilde{\Pi}_{\gamma}^{t} q=\exp \left(-i \int_{\gamma([0, t])} \xi\right) \cdot \Pi_{\gamma}^{t} q
$$

One checks that $\frac{\partial}{\partial t} \tilde{\Pi}_{\gamma}^{t} q=\frac{\partial}{\partial t} \Pi_{\gamma}^{t} q-\left.\xi(\dot{\gamma}) V\right|_{\Pi_{\gamma}^{t} q}$, and therefore

$$
\tilde{\alpha}\left(\frac{\partial}{\partial t} \tilde{\Pi}_{\gamma}^{t} q\right)=\left(\alpha+\pi^{*} \xi\right)\left(\frac{\partial}{\partial t} \Pi_{\gamma}^{t} q\right)-\xi(\dot{\gamma})=\mathrm{o}+\xi(\dot{\gamma})-\xi(\dot{\gamma})=\mathrm{o}
$$

Holonomy When the path $\gamma:[0,1] \rightarrow \Sigma$ is a closed curve, the parallel transport $\Pi_{\gamma}^{1}$ is a map from the fiber $\pi^{-1}(\gamma(\mathrm{o}))$ to itself. The map $\Pi_{\gamma}^{1}$ is a group action, where the group element is given by the unique $g_{0} \in G$ so that $\Pi_{\gamma}^{1} q=g_{0} \cdot q$; this $g_{0}$ is independent of the choice of $q$ using the fact that $\Pi_{\gamma}^{1} \circ(g \cdot)=(g \cdot) \circ \Pi_{\gamma}^{1}$ for all $g \in G$, and that $G$ is abelian. The group action $\Pi_{\gamma}^{1}$ is called the holonomy.

The holonomy can also be computed in the following way. Let $F: \gamma([0,1]) \rightarrow$ $Q$ be a section supported on the closed curve. Then

$$
\Pi_{\gamma}^{1}=\exp \left(-\int_{\gamma} \nabla^{\alpha} F\right) .
$$

Curvature An Ehresmann connection $\alpha$ also gives rise to a curvature $R^{\alpha} \in$ $\Omega^{2}(\Sigma ; \mathfrak{g})$ defined by the following. At each point $p \in \Sigma$, let $U \ni p$ be a neighborhood and $F: U \rightarrow Q, \pi \circ F=\left.\mathrm{id}\right|_{U}$, be a local section. Then one defines

$$
\begin{equation*}
\left.R^{\alpha}\right|_{p}:=i\left(F^{*} d \alpha\right)_{p}=\left(d \nabla^{\alpha} F\right)_{p} \tag{5.2}
\end{equation*}
$$

The well-definedness follows from that any other local section $\tilde{F}$ can be written as $\tilde{F}=\exp (i \varphi) \cdot F$ for some phase function $\varphi: U \rightarrow \mathbb{R}$. Hence replacing $F$ by $\tilde{F}$ leaves $d \nabla^{\alpha} F$ unchanged due to (5.1) and the fact that $d \circ d=0$.

The curvature and the holonomy are related by the Gauss-Bonnet Theorem. Suppose $D \subset \Sigma$ is a contractable 2-dimensional surface and let $\gamma=\partial D$ be its boundary loop. Let $F$ be a local section on $D$. Since $\gamma$ is a closed path, its parallel transport is the holonomy $\Pi_{\gamma}^{1}=\exp \left(-\int_{\gamma} \nabla^{\alpha} F\right)$. By Stokes' Theorem

$$
\Pi_{\gamma}^{1}=\exp \left(-\int_{D} d \nabla^{\alpha} F\right)=\exp \left(-\int_{D} R^{\alpha}\right) .
$$

Note that although the curvature (5.2) appears to be the differential of some one form $\nabla^{\alpha} F$, the function $F$ is defined only locally; so $R^{\alpha}$ is not necessarily exact. If there exists a global section $F: \Sigma \rightarrow Q$, then $R^{\alpha}$ is exact.

Let us look at how curvature responds to a change in the connection $\tilde{\alpha}=$ $\alpha+\pi^{*} \xi$ for some $\xi \in \Omega^{1}(\Sigma, \mathbb{R})$. Given a local section $F$,

$$
R^{\tilde{\alpha}}=i F^{*} d\left(\alpha+\pi^{*} \xi\right)=R^{\alpha}+i d(\pi \circ F)^{*} \xi=R^{\alpha}+i d \xi .
$$

Therefore the curvature after a change in the connection is shifted by an exact 2-form

$$
R^{\tilde{\alpha}}=R^{\alpha}+i d \xi
$$

Prequantum Bundle One readily sees that a prequantum bundle (Definition 4.6) $(Q, \vartheta) \xrightarrow{\pi}(\Sigma, \sigma)$ is a principal $G$-bundle over a symplectic manifold $(\Sigma, \sigma)$ with an Ehresmann connection $\vartheta$ that satisfies

$$
R^{\vartheta}=i \sigma
$$

### 5.2 Pullback of the Prequantum Bundle

Suppose $M$ is the fluid domain and let $(Q, \vartheta) \xrightarrow{\pi}(\Sigma, \sigma)$ be a prequantum bundle. Now let $s: M \rightarrow \Sigma$ be a smooth map, and let us define $\omega=$ $s^{*} \sigma$. That is, $s$ is a Clebsch representation to the closed 2-form $\omega \in \Omega^{2}$ (closedness comes from the fact that $\sigma$ is closed.)

Note that the 2-form $\omega$ is closed but $\omega$ may not be exact. Since a legitimate vorticity $\omega=d \eta$ must be exact, we cannot really say that $s$ is a "vorticity" Clebsch map. Nonetheless in this and the next section we still call $\omega$ a vorticity, and we call $s$ a vorticity Clebsch map for $\omega$.
The map $s$ to the base manifold $\Sigma$ of a fiber bundle $Q \xrightarrow{\pi} \Sigma$ induces a pullback bundle $P:=s^{*} Q$ over $M$ with a projection $\pi_{1}: P \rightarrow M$. Each fiber $\pi_{1}^{-1}(x)$ attached to $x \in M$ is a copy of the fiber $\pi^{-1}(s(x))$ in $Q$. That is, there is an identification map $j: P \rightarrow Q$ (identity map on each fiber) such that the following diagram commutes:
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-080.jpg?height=209&width=223&top_left_y=855&top_left_x=948)

Since the fibers of $P$ are just fibers of $Q$, the structure group $G$ acting on the fibers of $Q$ also acts on the fibers $P$ in the same way. Therefore, $P \xrightarrow{\pi_{1}} M$ is a principal $G$-bundle with

$$
\begin{equation*}
(g \cdot) \circ j=j \circ(g \cdot), \quad \text { for each } g \in G \tag{5.4}
\end{equation*}
$$

The Ehresmann connection $\vartheta$ on $Q$ also gives rise to an Ehresmann connection $j^{*} \vartheta$ on $P$. To see this one checks that for each $g \in G$, one has equivariance $(g \cdot)^{*}\left(j^{*} \vartheta\right)=j^{*} \vartheta$ and $\left(j^{*} \vartheta\right)(V)=1$ where $V$ is the unit vertical vector field generated by the group action. The latter fact follows from that $j$ is fiberwise an identity map. The former fact is also easily checked:

$$
(g \cdot)^{*}\left(j^{*} \vartheta\right)=(j \circ(g \cdot))^{*} \vartheta \stackrel{(5 \cdot 4)}{=}((g \cdot) \circ j)^{*} \vartheta=j^{*}(g \cdot)^{*} \vartheta=j^{*} \vartheta .
$$

The last equality is due to the equivariance of $\vartheta$ on $Q$.
Now we look at the curvature $R^{j^{*} \vartheta}$ associated to the connection $j^{*} \vartheta$ on $P$. It turns out that when $Q \rightarrow \Sigma$ is a prequantum bundle $\left(d \vartheta=\pi^{*} \sigma\right)$, the curvature $R^{j^{*} \vartheta}=i \omega$ becomes the vorticity 2-form.

To see this, consider any local section $F: U \subset M \rightarrow P$ with $\pi_{1} \circ F=\left.\mathrm{id}\right|_{U}$. Then the curvature is given by

$$
\begin{aligned}
R^{j^{*} \vartheta} & =i d F^{*} j^{*} \vartheta=i(j \circ F)^{*} d \vartheta=i(j \circ F)^{*} \pi^{*} \sigma \\
& =i(\pi \circ j \circ F)^{*} \sigma \stackrel{(5 \cdot 3)}{=} i(s \circ \underbrace{\pi_{1} \circ F}_{\text {id }\left.\right|_{U}})^{*} \sigma=i s^{*} \sigma=i \omega .
\end{aligned}
$$

Viewing the vorticity $\omega=s^{*} \sigma$ as the curvature (up to $i$ ) of the pullback bundle $P=s^{*} Q$ is a fundamental step to show the theorem in the next section.

### 5.3 Lifting Condition

Here we discuss a topological question about geometric Clebsch maps.
Any wavefunction $\psi: M \rightarrow Q$ can be viewed as a velocity Clebsch map of its own associated velocity, i.e. $\eta=\psi^{*} \vartheta$. By composing with the projection $\pi: Q \rightarrow \Sigma$ we also obtain a vorticity map $s=\pi \circ \psi$, i.e. $\omega=d \eta=s^{*} \sigma$.
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-081.jpg?height=190&width=199&top_left_y=870&top_left_x=958)

Now we can ask the converse question. Given any vorticity Clesbch map $s: M \rightarrow \Sigma$, does there exist a map $\psi: M \rightarrow Q$ so that $s=\pi \circ \psi$ ? Namely, does there exist a lift $\psi$ that makes the diagram (5.5) commute?

The answer is not always true. For example if $M=\Sigma=\mathrm{S}^{2}$ and $s$ is given as the identity map. Then the existence of $\psi$ would become the existence of a global section of the Hopf fibration $S^{3} \xrightarrow{\pi} S^{2}$. However, $S^{3} \xrightarrow{\pi} S^{2}$ is a non-trivial bundle, i.e. there is no global section. ${ }^{*}$ Hence in that case $\psi$ does not exist. Therefore a natural question to ask is what is the class of $s$ that allows the existence of $\psi$ ? The following theorem answers this question.

Theorem 5.1 (Lifting Condition). A continuous function $s: M \rightarrow \Sigma$ admits a lift $\psi: M \rightarrow Q$ in (5.5) if and only if the closed 2-form $\omega=s^{*} \sigma \in \Omega^{2}(M ; \mathbb{R})$ is exact.

The vorticity in a fluid flow $\omega=d \eta$ is always exact. Hence if $s$ is a legitimate vorticity Clebsch map $\omega=s^{*} \sigma$, by Theorem 5.1, $\psi$ always exists.

Proof of Theorem 5.1. First of all consider the pullback bundle $P=s^{*} Q$ over $M$ as in Section 5.2. We use the same notations summarized in the com-

[^7]mutative diagram
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-082.jpg?height=215&width=229&top_left_y=348&top_left_x=948)

Now, a lift $\psi: M \rightarrow Q$ is a function such that $\pi \circ \psi=s$; in particular for each $x \in M, \psi(x)$ takes value in the fiber $\pi^{-1}(s(x))$. Hence each lift $\psi$ can be identified as a global section $F: M \rightarrow P, F(x) \in j^{-1}\left(\pi^{-1}(s(x))\right)$, by $F=j^{-1} \circ \psi$. Conversely any global section $F: M \rightarrow P$ with $\pi_{1} \circ F=\left.\mathrm{id}\right|_{M}$ corresponds to a lift $\psi=j \circ F$, where one finds $\pi \circ \psi=\pi \circ j \circ F \stackrel{(5.6)}{=}$ $s \circ \pi_{1} \circ F=s$. Hence the existence of a lift is the same as the existence of a global section of the pullback bundle $P \xrightarrow{\pi_{1}} M$.

If there exists a global section $F \in \Gamma(P)$, then the curvature $R^{j^{*} \vartheta}=i \omega$ can be expressed as

$$
R^{j^{*} \vartheta}=i d\left(F^{*} j^{*} \vartheta\right)
$$

Therefore $\omega$ is exact.
Now we show the converse statement in Theorem 5.1. Suppose $\omega$ is exact. Then there exists a 1 -form $\eta \in \Omega^{1}(M ; \mathbb{R})$ such that $\omega=d \eta$. Define an Ehresmann connection $\alpha=j^{*} \vartheta-\pi_{1}^{*} \eta$ on $P$. Then the associated curvature vanishes

$$
R^{\alpha}=R^{j^{*} \vartheta}-i d \eta=0
$$

As a result the holonomy is trivial $\Pi_{\gamma}=$ id for every boundary curves $\gamma$. This gives rise to a group homomorphism $h: H_{1}(M) \rightarrow G$ given by $h([\gamma])=$ $\Pi_{\gamma}$. Now let $\zeta$ be a closed 1-form on $M$ so that $h([\gamma])=\exp \left(i \int_{\gamma} \zeta\right)$ for all $[\zeta] \in H_{1}(M)$. Using $\zeta$ we further modify the connection $\alpha$ as $\tilde{\alpha}=\alpha-\pi_{1}^{*} \zeta$. The curvature $R^{\tilde{\alpha}}$ remains o; what is more, the parallel transport along each global loop $\gamma$ is also trivial

$$
\tilde{\Pi}_{\gamma}=\exp \left(-i \int_{\gamma} \zeta\right) \cdot \Pi_{\gamma}=\exp \left(-i \int_{\gamma} \zeta\right) \cdot h([\gamma])=\mathrm{id}
$$

Therefore we can construct a global parallel section $F: M \rightarrow P$. This completes the proof.

## Chapter 6

## SPHERICAL CLEBSCH MAPS

Clebsch maps encode velocity fields through wavefunctions $\psi: M \rightarrow Q$. These functions contain valuable information about the velocity field. For example, when $M$ is 3-dimensional and $\Sigma$ is 2-dimensional, the vortex lines are the level lines of the vorticity Clebsch map $s=\pi \circ \psi$. This makes Clebsch maps useful for visualization and fluid dynamics analysis.

Though Clebsch maps have proven important in the theoretical study of the equations of fluid flow [Zakharov and Kutznetsov, 1997], and certain generalizations have found use in numerical studies [He and Yang, 2016; Yang and Pullin, 2010; Brandenburg, 2010; Cartes et al., 2007], a major obstacle to their more widespread use in numerical practice is the difficulty of finding a Clebsch map for a given velocity field.

In this chapter we describe an algorithm which produces spherical Clebsch maps $\psi$, namely with $Q=S^{3}$ and $\Sigma=\mathbb{S}^{2}$ as described in Section 4.3 , which approximate a numerically given velocity 1-form $\eta$ on a 2- or 3-dimensional $M$. The desired $\psi$ is found through minimization of a Dirichlet energy encapsulating both a fidelity and a smoothness term with a variable tradeoff between the two. The minimization is performed with straightforward gradient descent. We apply our algorithm to benchmark problems and demonstrate its utility with example applications.

Throughout this chapter we assume $M$ is 2- or 3-dimensional, and we use the setup in Section 4.3. Specifically we have $f: \mathrm{S}^{3} \hookrightarrow \mathbb{H}$ be the identity map written as quaternions, which expresses $\pi: S^{3} \rightarrow \mathbb{S}^{2}$ as $\pi=\bar{f} i f$. The contact form on $\mathrm{S}^{3}$ and the symplectic form on $\mathrm{S}^{2}$ are given by $\vartheta=\hbar\langle i f, d f\rangle$ and $\sigma=\frac{\hbar}{2} \sigma_{\mathrm{S}^{2}}$, where $\sigma_{\mathrm{S}^{2}}$ is the standard area form on $\mathrm{S}^{2}$.

### 6.1 Why $S^{3} \rightarrow S^{2}$ ?

Most applications take place on a 3-dimensional domain $M$. One important use of a (vorticity) Clebsch map $s: M \rightarrow \Sigma$ is to represent vortex lines as the pre-images of points on $\Sigma$ via the map $s$. To have such accessibility of vortex lines we require $\operatorname{dim}(\Sigma)=2$.

Clebsch' original proposal [Clebsch, 1859] uses $\pi: Q=\mathbb{R}^{3} \rightarrow \Sigma=\mathbb{R}^{2}$ with $\vartheta=x d y+d z, \sigma=d x \wedge d y$, and $\pi(x, y, z)=(x, y)$. However it can only represent fields with zero helicity when the vorticity has compact support in $M$. This problem is solved with higher dimensional $Q=\mathbb{R}^{2 m+1}$ and $\Sigma=\mathbb{R}^{2 m}$. Unfortunately these no longer yield a level set representation for vortex lines.

A spherical Clebsch map uses $\pi: Q=\mathrm{S}^{3} \rightarrow \Sigma=\mathrm{S}^{2}$ which maintains the low dimensions of $Q$ and $\Sigma$ so that it recovers vortex lines as pre-images of points. What is more, it approximates velocity fields of nontrivial helicity. The representation of velocity and vorticity Clebsch map can also be compactly expressed through quaternions: $\eta=\hbar\langle i \psi, d \psi\rangle, s=\bar{\psi} i \psi$.

### 6.2 Helicity

Consider a vorticity field $\omega \in \Omega^{2}(M ; \mathbb{R})$ (an exact 2-form) on a 3-dimensional manifold $M$. Then there is a 1 -form $\eta \in \Omega^{1}(M ; \mathbb{R})$ such that $d \eta=\omega$. Suppose further that there is no vorticity flux through the boundary, i.e. $j_{\partial M}^{*} \omega=$ o where $j: \partial M \hookrightarrow M$ is the inclusion map. Then the quantity

$$
\operatorname{Hel}(\omega):=\int_{M} \eta \wedge \omega
$$

is called the helicity of $\omega$, which depends only on the cohomology class of $\eta$. In particular, the value of $\operatorname{Hel}(\omega)$ is unique when $M$ is simply-connected. To see the dependency on the cohomology class, consider another element $\tilde{\eta}=\eta+d \varphi$ which also has $d \tilde{\omega}$ and belongs to the same cohomology class of $\eta$. Then

$$
\begin{aligned}
\int_{M} \tilde{\eta} \wedge \omega & =\int_{M}(\eta+d \varphi) \wedge \omega \\
& =\int_{M} \eta \wedge \omega+\int_{\partial M} \varphi \omega-\int_{M} \varphi d \omega=\int_{M} \eta \wedge \omega
\end{aligned}
$$

by $j_{\partial M}^{*} \omega=\mathrm{o}$ and $d \omega=\mathrm{o}$.
Helicity is first introduced by Woltjer [1958] in the context of magnetic fields in a plasma fluid (with $\omega$ resp. $\eta$ being the magnetic field resp. vector potential). The name helicity is given by Moffatt [1969] in the context of Euler fluids. Helicity is an important quantity since (as shown by Woltjer [1958]) the helicity is a conserved quantity in a system where $\dot{\eta}+\mathcal{L}_{X} \eta=$ $-d p$ for any smooth vector field $X$. (The conservation of helicity can be
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-085.jpg?height=410&width=421&top_left_y=245&top_left_x=841)

Figure 6.1: Example of two linked curves (linking number -4).
checked easily by realizing that $\eta \wedge \omega$ is Lie-advected.) Moffatt further describes that the helicity is a measure of knottedness of vortex lines. See also [Arnold and Khesin, 1998, Ch. III].

To understand the geometric meaning of helicity consider two closed vortex lines, one through $x \in M$ and the other through $x^{\prime} \in M$. Let $\operatorname{lk}\left(x, x^{\prime}\right)$ denote their linking number [Gauß, 1833, p. 605], an integer indicating how often one vortex line winds around the other (Fig. 6.1). For arbitrary $x, x^{\prime} \in M$, whether the vortex lines through $x$ and $x^{\prime}$ close up or not, one can still define $\operatorname{lk}\left(x, x^{\prime}\right)$ even though it is no longer an integer [Arnold and Khesin, 1998, Chapter III, §1]. As before, $\operatorname{lk}\left(x, x^{\prime}\right)$ measures the amount by which the two curves "spiral around each other."

The relevant fact for us is that helicity can be expressed in terms of these (generalized) linking numbers

$$
\operatorname{Hel}(\omega)=\int_{M} \int_{M} \operatorname{lk}\left(x, x^{\prime}\right)
$$

So we see that helicity measures the average linking of vortex lines in a field. This reveals the main reason that classical Clebsch maps are of limited use:

Theorem 6.1 (Vanishing Helicity). If $\omega$ satisfying $j_{\partial M}^{*} \omega=0$ can be represented by an $\mathbb{R}^{2}$-valued Clebsch map then $\operatorname{Hel}(\omega)=0$.

Proof. Suppose $\omega$ comes from a classical Clebsch map, i.e., $\eta=\lambda d \mu-d \phi$, $\omega=d \lambda \wedge d \mu$ then

$$
\operatorname{Hel}(\omega)=\int_{M}-d \phi \wedge d \lambda \wedge d \mu=\int_{M}-d(\phi d \lambda \wedge d \mu)=\int_{\partial M}-\phi \omega=0
$$

proving the theorem.

On the other hand, for $\mathbb{S}^{2}$-valued Clebsch maps helicity can be non-zero, but is quantized, as shown in the next section.

### 6.3 Quantized Helicity

The consideration of topological charges of a spherical function can be traced back to Faddeev [1976] on generalized sine-Gordon models. Kuznetsov and Mikhailov [1980] then brought the representation $\omega=\frac{\hbar}{4}\langle s, d s \wedge d s\rangle$ (i.e. $\omega=s^{*} \sigma$ ) from [Faddeev, 1976] into the context of incompressible fluids. They show that in the case of $M=\mathbb{R}^{3}$, using $\omega=\frac{\hbar}{2}\langle s, d s \wedge d s\rangle$ produces nontrivial helicity (with the boundary condition $s \rightarrow$ constant at infinity).

Theorem 6.2 (Kuznetsov and Mikhailov 1980). Suppose a flow $\eta \in \Omega^{1}\left(\mathbb{R}^{3} ; \mathbb{R}\right)$ on $\mathbb{R}^{3}$ has its vorticity $\omega=d \eta$ represented by a spherical Clebsch map $s: \mathbb{R}^{3} \rightarrow \mathbb{S}^{2}$ with $\omega=d \eta=s^{*} \sigma$. Assume that $|\eta| \rightarrow 0$ and $s \rightarrow p$ (a constant) rapidly for $|x| \rightarrow \infty$ on $\mathbb{R}^{3}$. Then there is an integer $n \in \mathbb{Z}$ so that the helicity

$$
\operatorname{Hel}(\omega)=n \cdot h^{2}, \quad h:=2 \pi \hbar
$$

Proof. For the given class of flow $\mathbb{R}^{3}$ is isomorphic to $\mathbb{S}^{3}$. Now, since $\omega=$ $s^{*} \sigma$ is exact by Theorem 5.1 there exists $\psi: \mathbb{S}^{3} \rightarrow \mathbb{S}^{3}$ so that $s=\pi \circ \psi$; in particular $\tilde{\eta}=\psi^{*} \vartheta$ produces the same vorticity $d \tilde{\eta}=\omega$. Note that the classification of smooth maps $\mathbb{S}^{3} \rightarrow \mathbb{S}^{3}$ is given by the mapping degree $\pi_{3}\left(\mathbb{S}^{3}\right)=\mathbb{Z}$. Now, $\operatorname{Hel}(\omega)=\int_{\mathbb{S}^{3}} \psi^{*}(\vartheta \wedge d \vartheta)$. By Prop 4.1, $\vartheta \wedge d \vartheta=2 \hbar^{2} \mu_{\mathrm{S}^{3}}$ where $\mu_{\mathrm{S}^{3}}$ is the standard volume form of $\mathrm{S}^{3}$. Thus $\operatorname{Hel}(\omega)=2 \hbar^{2} n \cdot\left(2 \pi^{2}\right)$, where $n$ is the mapping degree of $\psi: \mathbb{S}^{3} \rightarrow \mathbb{S}^{3}$ and $\left(2 \pi^{2}\right)$ is the total volume of $\mathrm{S}^{3}$.

A version of Theorem 6.2 also works in a bounded region without the assumption that $s$ tends to a constant at infinity (or on the boundary).

Theorem 6.3. Suppose $M$ is simply-connected volumetric region with smooth boundary in $\mathbb{R}^{3}$ on which a vorticity field $\omega=d \eta$ does not escape the boundary, i.e. $j_{\partial M}^{*} \omega=$ o where $j_{\partial M}: \partial M \hookrightarrow M$ is the inclusion map. If $\omega$ can be represented by a spherical Clebsch map $\omega=s^{*} \sigma$, then there is an integer $n$ such that $\operatorname{Hel}(\omega)=$ $n \cdot h^{2}, h=2 \pi \hbar$.

Proof. Since $M$ is simply-connected, the helicity depends only on the vorticity $\omega$ and thus is determined by $s$. The goal here is to design an extension $s: \mathbb{R}^{3} \cup\{\infty\} \rightarrow \mathbb{S}^{2}$ of $s: M \rightarrow \mathbb{S}^{2}$ with no vorticity exterior to $M$; after
that the rest of the proof follows from Theorem 6.2. Since the pullback $\omega=s^{*} \sigma$ of the area form of $\mathrm{S}^{2}$ vanishes on $\partial M$, the derivative of the map $\hat{s}_{\mathrm{O}}:=\left.s\right|_{\partial M}: \partial M \rightarrow \mathbb{S}^{2}$ does not have full rank anywhere. Sard's Lemma [Milnor, 1965, §2] then asserts that there is a point $p \in \mathrm{~S}^{2}$ that is not in the image of $\hat{s}$. Therefore we can smoothly homotope $\hat{s}_{O}$ to the constant map $\hat{s}_{1}=-p$ through $\hat{s}_{t}=m_{t} \circ \hat{s}_{\mathrm{O}}$ with a family of Möbius transforms $\left\{m_{t}\right\}_{t \in[0,1]}$ that flow every point except for $p$ on $\mathrm{S}^{2}$ to $-p$. Enlarge $M$ on the outside of $\partial M$ by a collar diffeomorphic to $\partial M \times[0,1]$ and extend $s$ in $\partial M \times[0,1]$ by $s(x, t)=\hat{s}_{t}(x)$. Finally we can extend $s$ to $\mathbb{R}^{3} \cup\{\infty\}$ by assigning $s=-p$ everywhere else, and recover the case of Theorem 6.2.

Remark 6.1. Both Theorem 6.2 and Theorem 6.3 state the quantization of helicity provided some conditions on the vorticity representable by $\mathbb{S}^{2}$-valued maps. Both theorems require that the vorticity flux vanishes at the boundary (or at infinity) and the domain is simply-connected, since only then the helicity is uniquely determined by the vorticity. The helicity can still take continuous values by letting vortex lines escape through the boundary or by adding harmonic velocity fields from the 1st cohomology.

### 6.4 Finding a Spherical Clebsch Map

Now let us set out to numerically find a spherical Clebsch map $\psi$ for a given velocity field $\eta_{0}$ such that

$$
\begin{equation*}
\eta:=\psi^{*} \vartheta=\eta_{\mathrm{o}} . \tag{6.1}
\end{equation*}
$$

Note that such an algorithm will also provide a vorticity Clebsch map $s=\pi \circ \psi$.

However, any solution $\psi$ to (6.1) gives rise to infinitely many more solutions $\tilde{\psi}$. This is because if $\xi: \mathbb{S}^{2} \rightarrow \mathbb{S}^{2}$ is any area-preserving map, then $\tilde{s}=\xi \circ \pi \circ \psi$ is also a Clebsch map for $\omega=d \eta$. By Theorem 5.1 there is another Clebsch map $\tilde{\psi}$ for $\eta$ (up to harmonic fields) with $\pi \circ \tilde{\psi}=\tilde{s}$. To fix this degree of freedom we seek a solution $\psi$ for (6.1) which minimizes the Dirichlet energy of $s$

$$
\begin{equation*}
\min _{\psi: M \rightarrow \mathrm{~S}^{3}} \frac{1}{2} \int_{M}|d s|^{2} \quad \text { s.t. } \quad \eta=\eta_{\mathrm{o}} \tag{6.2}
\end{equation*}
$$

Many numerical approaches to this type of constrained optimization problem are based on iteratively searching for the minimum while keeping the
iterant in the constraint set. Those include barrier methods (interior point methods) and methods that couple unconstrained optimization with constraint projection. However in our case finding one point in the constraint set is just our original challenge.

We therefore use a method based on Lagrange multipliers. Introduce a parameter $\epsilon>0$ and subsequently solving a sequence of unconstrained problems

$$
\begin{equation*}
\min _{\psi: M \rightarrow S_{3}} E^{\epsilon}(\psi) \quad \text { where } \quad E^{\epsilon}:=\int_{M} \frac{1}{2 \hbar^{2}}\left|\eta-\eta_{\mathrm{o}}\right|^{2}+\frac{\epsilon^{2}}{8}|d s|^{2} \tag{6.3}
\end{equation*}
$$

for decreasing $\epsilon$. Here the constraint is written as $\int_{M} \frac{1}{2}\left|\eta-\eta_{0}\right|^{2}=0$ and $\frac{1}{\epsilon^{2}}$ serves as a Lagrange multiplier for the constraint. This leads to the basic algorithm (Algorithm 5).

```
Algorithm 5 Optimization scheme for (6.2)
Input: $\eta_{\mathrm{o}} \in \Omega^{1}(M ; \mathbb{R})$ and $\hbar>0$.
    Randomize $\psi^{(0)}: M \rightarrow \mathrm{~S}^{3}$;
    $\epsilon^{(0)}=1$;
    for $k=0,1,2, \ldots$ do
        $\psi^{(k+1)} \leftarrow \operatorname{argmin}_{\psi} E^{\epsilon^{(k)}}(\psi)$ with initial guess $\psi^{(k)}$.
        $\epsilon^{(k+1)} \leftarrow \epsilon^{(k)} / 10$.
    end for
```


### 6.5 Ginzburg-Landau Energy with Berger Metric

The remaining problem in Algorithm 5 is to find the minimizer of $E^{\epsilon}$ for each given $\epsilon \geq 0$. Simply substituting the definitions $\eta=\psi^{*} \vartheta$ and $s=\bar{\psi} i \psi$ into (6.3) and minimizing the resulting expression over $\mathbb{S}^{3}$-valued functions $\psi$ appears at first sight to be rather unpleasant. Below we will show that $E^{\epsilon}$ is nothing but a Dirichlet energy for $\psi$ under a suitable choice of connection and metric.

## Covariant Derivative

In a first step we use the 1 -form $\eta_{0}$ to define the covariant derivative $\nabla^{\eta_{0}}$ for $\mathrm{S}^{3}$-valued functions $\psi$ as

$$
\begin{equation*}
\nabla{ }^{\eta_{0}} \psi:=d \psi-i \frac{1}{\hbar} \eta_{\mathrm{o}} \psi \tag{6.4}
\end{equation*}
$$

In short $\nabla^{\eta_{0}}=d-i \frac{1}{\hbar} \eta_{0}$. We will now split $\nabla^{\eta_{0}}$ into two parts which will give rise to the two summands in $E^{\epsilon}$.

Observe that $\nabla^{\eta_{0}} \psi \in \Omega^{1}(M ; \mathbb{H})$ is a quaternion-valued 1-form. In particular at a point $x \in M,\left(\nabla^{\eta_{0}} \psi\right)_{x}$ is a linear map from $T_{x} M$ to $T_{\psi(x)} \mathrm{S}^{3} \subset \mathbb{H}$. For each fixed $q \in \mathbb{S}^{3} \subset \mathbb{H}$, use $\{q, i q, j q, k q\}$ as an orthonormal basis for $\mathbb{H}$. Note that $T_{q} \mathbb{S}^{3}=\operatorname{Span}\{i q, j q, k q\}_{x}$. Now split $\mathbb{H}$ into the orthogonal sum of the two subspaces

$$
\mathbb{C} q:=\operatorname{Span}\{q, i q\} \quad \text { and } \quad \mathbb{C} j q:=\operatorname{Span}\{j q, k q\}
$$

Now project $\left(\nabla^{\eta_{0}} \psi\right)_{x}$, which takes values in $T_{\psi(x)} \mathrm{S}^{3} \subset \mathbb{H}$, into these subspaces

$$
\begin{equation*}
\left(\nabla^{\eta_{0}} \psi\right)_{x}=P_{\mathrm{C} \psi_{x}}\left(\nabla^{\eta_{0}} \psi\right)_{x}+P_{\mathrm{C} j \psi_{x}}\left(\nabla^{\eta_{0}} \psi\right)_{x} \tag{6.5}
\end{equation*}
$$

Observe that from $s=\bar{\psi} i \psi$ we have $d s=2 \operatorname{Im}(\bar{\psi} i d \psi)$; on the other hand $\eta=\hbar\langle i \psi, d \psi\rangle=-\hbar \operatorname{Re}(\bar{\psi} i d \psi)$. Hence $-\bar{\psi} i d \psi=\frac{1}{\hbar} \eta-\frac{1}{2} s$. Using the definition $\nabla \eta_{\mathrm{o}}=d-\frac{i}{\hbar} \eta_{\mathrm{o}}$ we see that

$$
-\bar{\psi} i \nabla^{\eta_{0}} \psi=-\bar{\psi} i d \psi-\frac{1}{\hbar} \eta_{\mathrm{o}}=\frac{1}{\hbar}\left(\eta-\eta_{\mathrm{o}}\right)-\frac{1}{2} d s
$$

and thus

$$
\begin{equation*}
\nabla{ }^{\eta_{0}} \psi=\frac{1}{\hbar}\left(\eta-\eta_{0}\right) i \psi-\frac{1}{2} i \psi d s \tag{6.6}
\end{equation*}
$$

Evidently the first summand takes values in $\mathbb{C} \psi=\operatorname{Span}\{\psi, i \psi\}$. The second summand takes values in $(\mathbb{C} \psi)^{\perp}=\mathbb{C} j \psi$ since

$$
\begin{aligned}
& \langle\psi, i \psi d s\rangle=\operatorname{Re}(\bar{\psi} i \psi d s)=\operatorname{Re}(s d s)=-\frac{1}{2} d|s|^{2}=0, \\
& \langle i \psi, i \psi d s\rangle=\operatorname{Re}(d s)=0
\end{aligned}
$$

Hence (6.6) is the orthogonal splitting of $\nabla^{\eta_{0}} \psi$ onto the subspaces $\mathbb{C} \psi$ and Cj $\psi$ in (6.5). That is,

$$
P_{\mathrm{C} \psi}\left(\nabla^{\eta_{o}} \psi\right)=\frac{1}{\hbar}\left(\eta-\eta_{0}\right) i \psi \quad \text { and } \quad P_{\mathrm{C} j \psi}\left(\nabla^{\eta_{0}} \psi\right)=-\frac{1}{2} i \psi d s
$$

## Berger Metric

To recover the integrand of (6.3), we only need an anisotropic metric on $\mathrm{S}^{3}$. At each point $q \in \mathbb{S}^{3}$ define a norm on tangent vectors $X \in T_{q} \mathbb{S}^{3} \subset \mathbb{H}$ as

$$
\begin{equation*}
|X|_{\epsilon}^{2}:=\left|P_{\mathrm{C} q}(X)\right|^{2}+\epsilon^{2}\left|P_{\mathrm{C} j q}(X)\right|^{2} \tag{6.7}
\end{equation*}
$$

Such a metric on $\mathrm{S}^{3}$, with an anisotropy along the $i \psi$ direction, is known as a Berger metric and $\mathbb{S}^{3}$ with such a metric as the Berger sphere.

In conclusion, the energy $E^{\epsilon}$ can be expressed as

$$
\begin{equation*}
E^{\epsilon}(\psi)=\int_{M} \frac{1}{2}\left|\nabla^{\eta_{0}} \psi\right|_{\epsilon}^{2} \tag{6.8}
\end{equation*}
$$

and hence $E^{\epsilon}$ is the Dirichlet energy of $\psi$ using the covariant derivative $\nabla^{\eta_{0}}$ and the Berger metric (see Section 6.8 for implementation details).

## Ginzburg-Landau Model

The energy (6.8) is closely related to the Ginzburg-Landau energy of condensed matter physics

$$
E_{\mathrm{GL}}(\psi)=\int_{M} \frac{1}{2}\left|\nabla^{\eta_{0}} \psi\right|^{2}+c\left(1-|\psi|^{2}\right)^{2}
$$

which models the coherent collective behavior of particles at low temperatures through an $E_{\mathrm{GL}}-$ minimizing $\psi$. In that setting $\psi$ is called the order parameter whose norm $|\psi|$ indicates whether the matter at the site is in coherent condensed state $(|\psi|=1)$ or in disorder $(|\psi|=0)$. Examples of condensed states are electron pairs in a super conductor, and helium atoms in a liquid helium superfluid. The 1-form $\eta_{\mathrm{o}}$ in the covariant derivative in the Ginzburg-Landau model is the "vector" potential of a magnetic field (or in general a gauge field). The quartic nonlinear term $c\left(1-|\psi|^{2}\right)^{2}$ penalizes or encourages the deviation of $|\psi|^{2}$ from 1 depending on the temperature. In a perfect coherent state $|\psi|^{2}=1$ the remaining phase degree of freedom in $\psi$ form patterns called "texture" affected by the field $\eta_{0}$.

For an introduction to the Ginzburg-Landau theory in physics see [Pismen, 1999]. Minimizing a Ginzburg-Landau-type energy has also been used in computer graphics. In the case when the phase of $\psi$ takes values in $\mathbb{S}^{1}$ (texture space), it is used for vector field designs [Knöppel et al., 2013] and stripe pattern syntheses [Knöppel et al., 2015] on 2D surfaces, and for extracting vortex filaments from a fluid velocity data on 3 D domains [Weißmann, Pinkall, and Schröder, 2014].

Eq. (6.8) can be understood as a Ginzburg-Landau energy with the texture space being a Berger sphere, and with the quartic nonlinear term replaced by the constraint $|\psi|^{2}=1$.

## Summary

We cast the problem of finding spherical Clebsch maps, which approximate user supplied velocity fields $\eta_{\mathrm{o}}$, as a minimization problem. The objective
is the Dirichlet energy of $\psi$ using the covariant derivative induced by $\eta_{\mathrm{o}}$ employing a Berger metric. The metric anisotropy parameter $\epsilon$ controls how much of the regularizer $|d s|^{2}$ is added to the fidelity term $\left|\eta-\eta_{\mathrm{o}}\right|^{2}$. For each fixed $\epsilon$, in a decreasing sequence, we approximate the minimum of the objective through gradient descent steps (the corresponding flow is known as a time-dependent Ginzburg-Landau flow) which will be introduced in Section 6.7. This requires a discrete version of the energy, detailed in Section 6.8, and a sparse linear solver for Poisson problems with magnetic Laplacians.

### 6.6 Berger Metric in terms of Pauli Matrices

For implementation (Section 6.8) it turns out to be convenient to realize quaternions $\psi \in \mathbb{H}$ as $\mathbb{C}^{2}$-vectors $\Psi=\left(\psi_{1}, \psi_{2}\right)^{\top}$ through the relation $\psi=$ $\psi_{1}+\psi_{2} j$ explained in Section B.4.

Using $\Psi=\left(\mathbb{H} \rightarrow \mathbb{C}^{2}\right) \psi$ as our representation, the projectors $P_{\mathbb{C} \psi}$ resp. $P_{\mathbb{C} j \psi}$ can be expressed in terms of the Pauli matrices $\sigma_{1}, \sigma_{2}, \sigma_{3}$ given in (B.1):

$$
\sigma_{1}:=\left[\begin{array}{ll}
0 & 1 \\
1 & 0
\end{array}\right], \quad \sigma_{2}:=\left[\begin{array}{cc}
0 & -i \\
i & 0
\end{array}\right], \quad \sigma_{3}:=\left[\begin{array}{cc}
1 & 0 \\
0 & -1
\end{array}\right] .
$$

Even though the projectors appear to be functions of $\psi$, they are in fact only functions of $s=\bar{\psi} i \psi=s_{1} i+s_{2} j+s_{3} k$. Recall (B.3) that $\left(s_{1}, s_{2}, s_{3}\right)^{\top}$ are related to the Bloch vector $\left(z_{1}, z_{2}, z_{3}\right)^{\top}$ with $z_{i}:=\bar{\Psi}^{\top} \sigma_{i} \Psi, i=1,2,3$, as

$$
\begin{aligned}
& s_{1}=z_{3}=\left|\psi_{1}\right|^{2}-\left|\psi_{2}\right|^{2}, \\
& s_{2}=-z_{2}=2 \operatorname{Re}\left(i \bar{\psi}_{1} \psi_{2}\right), \\
& s_{3}=z_{1}=2 \operatorname{Re}\left(\bar{\psi}_{1} \psi_{2}\right) .
\end{aligned}
$$

To find the $\mathbb{C}^{2 \times 2}$ representation of $P_{\mathbb{C} \psi}$ we note that the underlying subspace is spanned by complex multiples of $\Psi=\left(\psi_{1}, \psi_{2}\right)^{\top}$ and hence

$$
P_{\mathrm{C} \psi}=\Psi \bar{\Psi}^{\top}=\left[\begin{array}{ll}
\left|\psi_{1}\right|^{2} & \psi_{1} \bar{\psi}_{2}  \tag{6.9}\\
\bar{\psi}_{1} \psi_{2} & \left|\psi_{2}\right|^{2}
\end{array}\right]=\frac{1}{2}\left(I+z_{1} \sigma_{1}+z_{2} \sigma_{2}+z_{3} \sigma_{3}\right)
$$

where $I$ is the $\mathbb{C}^{2 \times 2}$ identity matrix. Due to their orthogonality, $P_{\mathbb{C}_{j \psi}}$ is just the residual

$$
\begin{equation*}
P_{\mathrm{C} j \psi}=I-P_{\mathrm{C} \psi}=\frac{1}{2}\left(I-z_{1} \sigma_{1}-z_{2} \sigma_{2}-z_{3} \sigma_{3}\right) . \tag{6.10}
\end{equation*}
$$

We use the boldface symbols $\mathbf{z} \cdot \boldsymbol{\sigma}$ (not to confuse with the symplectic form $\sigma$ ) to denote the Hermitian matrix

$$
\mathbf{z} \cdot \boldsymbol{\sigma}=z_{1} \sigma_{1}+z_{2} \sigma_{2}+z_{3} \sigma_{3} \in \mathbb{C}^{2 \times 2}
$$

It is then convenient to combine both projectors* as

$$
\begin{equation*}
P_{s}^{\epsilon}:=P_{\mathbb{C} \psi}+\epsilon P_{\mathbb{C} j \psi}=\frac{1}{2}((1+\epsilon) I+(1-\epsilon) \mathbf{z} \cdot \sigma) \tag{6.11}
\end{equation*}
$$

and rewrite (6.7) for a vector $X \in T_{\psi} \mathrm{S}^{3} \subset \mathbb{H}$ as

$$
\begin{equation*}
|X|_{\epsilon}^{2}=\left|P_{s}^{\epsilon} X\right|^{2} . \tag{6.12}
\end{equation*}
$$

Therefore the energy (6.8) can be expressed as

$$
\begin{align*}
E^{\epsilon}(\psi) & =\int_{M} \frac{1}{2}\left|P_{s}^{\epsilon} \nabla^{\eta_{0}} \psi\right|^{2}  \tag{6.13}\\
& =\int_{M} \frac{1}{8}\left|((1+\epsilon) I+(1-\epsilon) \mathbf{z} \cdot \sigma) \nabla^{\eta_{0}} \Psi\right|^{2} .
\end{align*}
$$

### 6.7 Minimizing Flow

To seek for a minimizer for $E^{\epsilon}$ we consider the gradient flow of $E^{\epsilon}$. Similar to a heat equation, which is the gradient flow to a standard Dirichlet energy, the gradient flow of $E^{\epsilon}$ is given by:

$$
\begin{equation*}
\frac{\partial}{\partial t} \psi=\Delta_{\epsilon}^{\eta_{0}} \psi-U \psi \tag{6.14}
\end{equation*}
$$

This is obtained by taking variation to the expression (6.13). Here $U$ is a real scalar function that ensures $|\psi|=1$ pointwise at all time. The magnetic Laplacian in Berger metric $\Delta_{\epsilon}^{\eta_{0}}$ is given by

$$
\begin{aligned}
\Delta_{\epsilon}^{\eta_{0}} \psi & =-\left(P_{s}^{\epsilon} \nabla^{\eta_{0}}\right)^{\dagger}\left(P_{s}^{\epsilon} \nabla^{\eta_{0}}\right) \psi \\
& =\star\left(\left(d-i \frac{1}{\hbar} \eta_{\mathrm{o}} \wedge\right) \star\left(P_{s}^{\epsilon}\right)^{2}\left(d \psi-i \frac{1}{\hbar} \eta_{\mathrm{o}} \psi\right)\right)
\end{aligned}
$$

where $(\cdot)^{\dagger}$ denotes the adjoint operator with respect to the inner product for differential forms. In particular we have used $d^{\dagger} \alpha=-\star d \star \alpha$ and $\left(\eta_{\mathrm{o}} \wedge\right)^{\dagger} \alpha=\iota_{\eta_{\mathrm{o}}^{\sharp}} \alpha=\star\left(\eta_{\mathrm{o}} \wedge\right) \star \alpha$ when $\alpha$ is a 1 -form, and $i^{\dagger}=-i$. We also used the fact that $P_{s}^{\epsilon}$ is Hermitian.

We call (6.14) a Berger-spherical Ginzburg-Landau flow.

[^8]Note that $\Delta_{\epsilon}^{\eta_{0}}$ is an operator that depends on $\psi$ itself since $P_{s}^{\epsilon}$ does. Therefore (6.14) is still a nonlinear equation in the diffusion term $\Delta_{\epsilon}^{\eta_{0}} \psi$ whenever $\epsilon \neq 1$. In the case $\epsilon=1$ the Berger metric reduces to the standard metric, and $\Delta_{1}^{\eta_{0}}$ becomes the standard magnetic Laplacian.

Here the normalization term $U \psi$ is also a nonlinear term which is relatively simpler. In practice $U \psi$ is replaced by a normalization in each iteration in numerical implementation.

### 6.8 Implementation for the Minimizing Flow

In this section we give all the necessary details for the numerical implementation for Algorithm 5.

We use a standard discrete exterior calculus (DEC) [Crane et al., 2013] discretization for the energy (6.8). It requires a graph $\mathcal{G}=(\mathcal{V}, \mathcal{E})$ where $\mathcal{V}$ is the set of vertices and $\mathcal{E}$ the set of directed edges. All examples in this thesis take $\mathcal{G}$ as the 1-skeleton of a 2 D or ${ }_{3} \mathrm{D}$ lattice. Each vertex $\mathrm{i} \in \mathcal{V}$ has a vertex weight $w_{\mathrm{i}}>0$ and each edge $\mathrm{ij} \in \mathcal{E}$ has an edge weight $w_{\mathrm{ij}}>0$. Functions (o-forms) are discretized as values per vertex, e.g., $f_{\mathrm{i}}=f\left(x_{\mathrm{i}}\right)$ while 1-forms $\alpha$ are discretized as values per directed edge $\alpha_{\mathrm{ij}}=\int_{\mathrm{ij}} \alpha$.
The vertex weights and edge weights are designed to give the approximation

$$
\int_{M}|f|^{2} \approx \sum_{\mathrm{i} \in \mathcal{V}} w_{\mathrm{i}}\left|f_{\mathrm{i}}\right|^{2}, \quad \int_{M}|\alpha|^{2} \approx \sum_{\mathrm{i} \in \mathcal{E}} w_{\mathrm{ij}}\left|\alpha_{\mathrm{ij}}\right|^{2}
$$

On a regular ${ }_{3} \mathrm{D}$ lattice $w_{\mathrm{i}}=V_{\mathrm{i}}$ and $w_{\mathrm{ij}}=\frac{A_{\mathrm{ij}}}{\ell_{\mathrm{ij}}}$ where $V_{\mathrm{i}}$ is the volume of the dual cell surrounding $x_{\mathrm{i}}, A_{\mathrm{ij}}$ the area of the face dual to ij , and $\ell_{\mathrm{ij}}$ the length of the edge $x_{j}-y_{i}$.

Covariant Derivative Given a $\mathbb{C}^{2}$-valued function $\Psi=\left(\psi_{1}, \psi_{2}\right)^{\top}$ on vertices and an $\mathbb{R}$-valued 1-form $\eta_{0}$ on edges, the $\mathbb{C}^{2}$-valued discrete 1-form $\nabla^{\eta_{0}} \Psi$ is given [Weißmann, Pinkall, and Schröder, 2014, Eq. 10] by the difference

$$
\begin{equation*}
\left(\nabla^{\eta_{o}} \Psi\right)_{\mathrm{ij}}=e^{-i \frac{\left(\eta_{\mathrm{O}}\right)_{\mathrm{ij}}}{2 \hbar}} \Psi_{\mathrm{j}}-e^{i \frac{\left(\eta_{\mathrm{o}}\right)_{\mathrm{j}}}{2 \hbar}} \Psi_{\mathrm{i}} \tag{6.15}
\end{equation*}
$$

The basic idea of $(6.15)$ is that $\left(\nabla^{\eta_{0}} \Psi\right)_{\mathrm{ij}}$ measures the difference at the midpoint of the edge ij , while the values $\Psi_{\mathrm{i}}, \Psi_{\mathrm{j}}$ from each end of the edge are
parallel transported to the midpoint. Here, a function $\Psi$ defined along ij is called parallel if $\left(\nabla^{\eta_{0}} \Psi\right)=d \Psi-\frac{i}{\hbar} \eta_{\mathrm{o}} \Psi=\mathrm{o}$ along ij . Therefore, the parallel transport of $\Psi_{i}$ from i to the midpoint of ij is given by $e^{i \frac{\left.\eta_{0}\right)_{j j}}{2 \hbar}} \Psi_{i}$.

Projection Operators Using $\left(\psi_{1}, \psi_{2}\right)^{\top}$ as our representation, the projector $P_{s}^{\epsilon}$ can be expressed as (6.11), and the energy $E^{\epsilon}$ is given by (6.13). Note that $P_{s}^{\epsilon}$ depends only on the variable $s$. Since $\nabla^{\eta_{0}} \Psi$ is a 1 -form on edges, we need $P_{s_{\mathrm{ij}}}^{\epsilon}$ for $s_{\mathrm{ij}}=\frac{s_{\mathrm{i}}+s_{\mathrm{j}}}{\left|s_{\mathrm{i}}+s_{\mathrm{j}}\right|}$ the edge midpoint value of $s$.

The Discrete Energy Using (6.13) we arrive at the discrete energy in terms of the vector $\vec{\Psi}=\left(\Psi_{\mathrm{i}}\right)_{\mathrm{i} \in \mathcal{V}}$

$$
\mathrm{E}^{\epsilon}(\vec{\Psi})=\sum_{\mathrm{ij} \in \mathcal{E}} w_{\mathrm{ij}}\left|P_{s_{\mathrm{ij}}}^{\epsilon}\left(\left(\nabla^{\eta_{0}} \vec{\Psi}\right)_{\mathrm{ij}}\right)\right|^{2}=\overline{\vec{\Psi}}^{\top} L \vec{\Psi}
$$

Here the quadratic form $L$ is a $|\mathcal{V}| \times|\mathcal{V}|$ sparse matrix of $2 \times 2$ complex blocks. Each edge $\mathrm{ij} \in \mathcal{E}$ gives rises to four blocks which are accumulated into the global $L$, summing over all edges

$$
\begin{array}{ll}
\mathrm{L}_{\mathrm{ii}}=w_{\mathrm{ij}}\left(P_{s_{\mathrm{ij}}}^{\epsilon}\right)^{2} & \mathrm{~L}_{\mathrm{ij}}=-w_{\mathrm{ij}} e^{-i \frac{\left(\eta_{0}\right)_{\mathrm{ij}}}{\hbar}}\left(P_{s_{\mathrm{ij}}}^{\epsilon}\right)^{2} \\
\mathrm{~L}_{\mathrm{ji}}=-w_{\mathrm{ij}} e^{i \frac{\left(\eta_{0} \mathrm{oj}\right.}{\hbar}}\left(P_{s_{\mathrm{ij}}}^{\epsilon}\right)^{2} & \mathrm{~L}_{\mathrm{jj}}=w_{\mathrm{ij}}\left(P_{s_{\mathrm{ij}}}^{\epsilon}\right)^{2} .
\end{array}
$$

Minimization To minimize the discrete energy for a given $\epsilon$, we use a semi-implicit gradient descent step followed by pointwise normalization of $\vec{\Psi}$, as an integrator for Equation (6.14). Each gradient step is the solution $\vec{\Psi}^{(k+1)}$ to

$$
\left(\mathrm{M}_{\mathcal{V}}+\Delta t \mathrm{~L}^{(k)}\right) \vec{\Psi}^{(k+1)}=\mathrm{M}_{\mathcal{V}} \vec{\Psi}^{(k)}
$$

with $\mathrm{M}_{\mathcal{V}}$ the vertex mass matrix and step size $\Delta t>0$. We typically take 10 steps with $0.1<\Delta t<1$ before decreasing $\epsilon$ (Alg. 5).

## 6.9* More on Berger-Spherical Ginzburg-Landau Flow

We mentioned in Section 6.7 that the Berger-spherical Ginzburg-Landau flow (6.14) $\frac{\partial}{\partial t} \psi=\Delta_{\epsilon}^{\eta_{0}} \psi-U \psi$ is a diffusion via a nonlinear $(\epsilon \neq 1)$ differential operator $\Delta_{\epsilon}^{\eta_{0}}$. A straightforward way to understand this nonlinear flow is by viewing it as the gradient flow for minimizing (6.3)

$$
E^{\epsilon}(\psi)=\int_{M} \frac{1}{2 \hbar}\left|\eta-\eta_{\mathrm{o}}\right|^{2}+\frac{\epsilon^{2}}{8}|d s|^{2}
$$

Under (6.14) the wavefunction $\psi$ relaxes to an equilibrium between fidelity $\eta \approx \eta_{\mathrm{o}}$ and regularity $|d s|^{2} \approx 0$. The operator $\Delta_{\epsilon}^{\eta_{0}}$ also has a straightforward discretization (Section 6.8) that can be used directly for applications (Chapter 7).

Yet, from a physical point of view the operator $\Delta_{\epsilon}^{\eta_{0}}$ may still look obscure. In this section we rewrite the flow (6.14) in terms of standard operators. Many of those turn out to generate complicated dynamics and are numerically challenging to approach. Therefore it is important to keep in mind on the way that the resulting equation is still equivalent to the original variational problem which we know how to simulate robustly.

## Precession Term

Comparing $\nabla^{\eta_{0}} \psi$ in the standard metric $|\cdot|^{2}$ and a Berger metric $|\cdot|_{\epsilon}^{2}$

$$
\begin{aligned}
& \left|\nabla^{\eta_{0}} \psi\right|^{2}=\frac{1}{\hbar^{2}}\left|\eta-\eta_{\mathrm{o}}\right|^{2}+\frac{1}{4}|d s|^{2}, \\
& \left|\nabla^{\eta_{0}} \psi\right|_{\epsilon}^{2}=\frac{1}{\hbar^{2}}\left|\eta-\eta_{\mathrm{O}}\right|^{2}+\frac{\epsilon^{2}}{4}|d s|^{2},
\end{aligned}
$$

we can write

$$
\left|\nabla^{\eta_{0}} \psi\right|_{\epsilon}^{2}=\left|\nabla^{\eta_{0}} \psi\right|^{2}-\frac{1-\epsilon^{2}}{4}|d s|^{2}
$$

Therefore one may express the negative gradient (the flow direction) of $\int_{M} \frac{1}{2}\left|\nabla^{\eta_{0}} \psi\right|_{\epsilon}^{2}$ as the combination of the negative gradient of the standard magnetic Dirichlet energy $\int_{M} \frac{1}{2}\left|\nabla^{\eta_{0}} \psi\right|^{2}$ and the negative Dirichlet energy $-\int_{M} \frac{1}{2}|d s|^{2}$ of $s$ with a weight $\frac{1-\epsilon^{2}}{4}$.
The gradient flow for the part $\int_{M} \frac{1}{2}\left|\nabla \nabla^{\eta_{0}} \psi\right|^{2}$ is the Ginzburg-Landau flow in the standard metric

$$
\begin{equation*}
\dot{\psi}=\Delta^{\eta_{0}} \psi-U \psi \tag{6.16}
\end{equation*}
$$

where $U \psi$ again indicates that $\psi$ is kept $S^{3}$-valued, and the magnetic Laplacian $\Delta^{\eta_{0}}$ is given by

$$
\Delta^{\eta_{0}} \psi=\left(\nabla^{\eta_{0}}\right)^{\dagger}\left(\nabla^{\eta_{0}}\right) \psi=\left(\star d \star-\frac{i}{\hbar} \iota_{u_{0}}\right)\left(d \psi-\frac{i}{\hbar} \eta_{0} \psi\right) .
$$

To obtain the gradient flow for $-\int_{M} \frac{1}{2}|d s|^{2}$ we take the variation of the functional in a direction $\psi$ of the variable $\psi$. We only consider the variation direction $\psi$ that keeps $\psi \mathbb{S}^{3}$-valued; that is $\bar{\psi} \dot{\psi} \in \operatorname{Im} \mathbb{H}$. In the following we
will denote $d^{\nabla}$ the exterior derivative of tangent vectors of $\mathbb{S}^{2}$ using the Levi-Civita connection on $\mathbb{S}^{2}$. Namely $d^{\nabla}$ is the standard $d$ for $\mathbb{R}^{3}$-valued forms followed by a projection onto the tangent plane of $\mathbb{S}^{2}$ at the point. Now, using the definition $s=\bar{\psi} i \psi$, the variation is given by

$$
\begin{aligned}
\left(-\int_{M} \frac{1}{2}|d s|^{2}\right)^{\circ} & =-\int_{M}\langle d \stackrel{\circ}{s} \star d s\rangle=\int_{M}\langle\stackrel{\stackrel{s}{s}, \underbrace{d^{\nabla} \star d}_{=: \star \Delta^{S^{2}}} s\rangle}{ }=\int_{M} \star\langle 2 \operatorname{Im}(\underbrace{\bar{\psi}}_{s \bar{\psi}} i \stackrel{\circ}{\psi}), \Delta^{S^{2}} s\rangle=\int_{M} 2 \star\left\langle s \times(\bar{\psi} \stackrel{\circ}{\psi}), \Delta^{S^{2}} s\right\rangle \\
& =\int_{M}-2 \star\left\langle\bar{\psi} \stackrel{\circ}{\psi}, s \times \Delta^{S^{2}} s\right\rangle=\int_{M}-2 \star \operatorname{Re}\left(\frac{\circ}{\psi} \psi\left(s \times \Delta^{S^{2}} s\right)\right) \\
& =\int_{M} \star\langle\stackrel{\circ}{\psi},-2 \psi(s \times \Delta s)\rangle .
\end{aligned}
$$

The inner product of the last equality is the standard $\mathbb{R}^{4}$ inner product on $\mathbb{H}$. And we replaced $s \times \Delta^{\mathrm{S}^{2}} s$ by $s \times \Delta s$ since $s \times(\cdot)$ gets rid of the vector component in $\Delta s$ orthogonal to $T_{s} \mathrm{~S}^{2}$. Therefore the functional gradient

$$
\frac{\delta}{\delta \psi}\left(-\int_{M} \frac{1}{2}|d s|^{2}\right)=-2 \psi(s \times \Delta s) .
$$

Note that the expression $-2 \psi(s \times \Delta s)$ lies in $T_{\psi} \mathrm{S}^{3}$, which is why we need not add a $U \psi$ term (cf. (6.16)). Thus the corresponding gradient flow is given by

$$
\begin{equation*}
\dot{\psi}=2 \psi(s \times \Delta s) \tag{6.17}
\end{equation*}
$$

Now by combining (6.16) and (6.17) we obtain the alternative expression for the Berger-spherical Ginzburg-Landau flow (6.14).

Theorem 6.4. The Berger-spherical Ginzburg-Landau flow

$$
\frac{\partial}{\partial t} \psi=\Delta_{\epsilon}^{\eta_{0}} \psi-U \psi
$$

can be rewritten as

$$
\begin{equation*}
\frac{\partial}{\partial t} \psi=\Delta^{\eta_{0}} \psi+\frac{1-\epsilon^{2}}{2} \psi(s \times \Delta s)-U \psi \tag{6.18}
\end{equation*}
$$

The term $U \psi \in \mathbb{R} \psi$ in each equation keeps $\psi \mathrm{S}^{3}$-valued.

Proof. See derivations above.
Corollary 6.1. Representing $\psi$ by $\mathbb{C}^{2}$-valued function $\Psi,(6.18)$ can be written as

$$
\begin{equation*}
\frac{\partial}{\partial t} \Psi=\Delta^{\eta_{0}} \Psi+\frac{1-\epsilon^{2}}{2}(\mathbf{z} \times \Delta \mathbf{z}) \cdot \sigma \Psi-U \Psi \tag{6.19}
\end{equation*}
$$

Proof. By (B.2), for each $B \in \mathbb{R}^{3}$ the quaternion multiplication $\psi B$ in $\mathbb{C}^{2}$ form is given by $\tilde{B} \cdot \sigma \Psi$ with the transformation $\tilde{B}_{1}=B_{3}, \tilde{B}_{2}=-B_{2}$ and $\tilde{B}_{3}=$ $B_{1}$. Note that this transformation is an orientation preserving isometry (a rotation), and it transforms $s$ into $\mathbf{z}$. Therefore it transforms $s \times \Delta s$ into $\mathbf{z} \times \Delta \mathbf{z}$.

The type of equations like (6.17) can be viewed as a precession motion. ${ }^{\dagger}$ For each $\mathbb{R}^{3}$ vector $B$, the equation $\dot{\psi}=\frac{1}{2} \psi B$ generates a motion in $s$ as a precession clockwise about $B$

$$
\dot{s}=s \times B
$$

One can see this by a direct substitution $\dot{s}=2 \operatorname{Im}(\bar{\psi} i \psi)=\operatorname{Im}(\bar{\psi} i \psi B)=s \times B$. Now we substitute $B=\left(1-\epsilon^{2}\right)(s \times \Delta s)$ and observe that the term $\dot{\psi}=$ $\frac{1-\epsilon^{2}}{2} \psi(s \times \Delta s)$ in (6.18) gives rise to an anti-diffusion in $s$ :

$$
\begin{equation*}
\frac{\partial}{\partial t} s=\left(1-\epsilon^{2}\right) s \times s \times \Delta s=-\left(1-\epsilon^{2}\right) \Delta^{S^{2}} s . \tag{6.20}
\end{equation*}
$$

Here we assumed the typical range $o<\epsilon<1$ for $\epsilon$.
The standard Ginzburg-Landau flow $\dot{\psi}=\Delta^{\eta_{0}} \psi-U \psi$ is the minimizing flow for $\int \frac{1}{2 \hbar^{2}}\left|\eta-\eta_{\mathrm{o}}\right|^{2}+\frac{1}{8}|d s|^{2}$, in which $\int \frac{1}{8}|d s|^{2}$ induces a diffusion in $s$. The precession term $\frac{1-\epsilon^{2}}{2} \psi(s \times \Delta s)$ in (6.18) effectively generates an antidiffusion that counteracts the diffusion in $s$.

## Equation for $s$

In (6.18) the Berger-spherical Ginzburg-Landau flow is written in terms of a standard Ginzburg-Landau flow with an additional precession term. Here we rewrite the equation as a time evolution for the spin vector $s$.

Theorem 6.5. Under the Berger-spherical Ginzburg-Landau flow (6.14) or equivalently (6.18), the spin vector s satisfies

$$
\begin{equation*}
\frac{\partial}{\partial t} s=\frac{2}{\hbar} s \times \mathcal{L}_{u-u_{0}} s+\epsilon^{2} \Delta^{S^{2}} s . \tag{6.21}
\end{equation*}
$$

[^9]Proof. From the definition $s=\bar{\psi} i \psi$ and (6.18) we have

$$
\begin{aligned}
\frac{\partial}{\partial t} s & =2 \operatorname{Im}\left(\underset{=s \bar{\psi}}{\bar{\psi} i} \frac{\partial}{\partial t} \psi\right) \\
& =2 \operatorname{Im}\left(s \bar{\psi}\left(\Delta^{\eta_{0}} \psi+\frac{1-\epsilon^{2}}{2} \psi(s \times \Delta s)-U \psi\right)\right)
\end{aligned}
$$

where $U \psi \in \mathbb{R} \psi$ is given so that $\bar{\psi}\left(\Delta^{\eta_{0}} \psi+\frac{1-\epsilon^{2}}{2} \psi(s \times \Delta s)-U \psi\right)$ is purely imaginary (i.e. $\left\langle\psi, \frac{\partial}{\partial t} \psi\right\rangle=0$.) Therefore the above expression can be rewritten as

$$
\frac{\partial}{\partial t} s=2 s \times \operatorname{Im}\left(\bar{\psi} \Delta^{\eta_{0}} \psi+\frac{1-\epsilon^{2}}{2} s \times \Delta s\right) .
$$

Now apply Lemma 6.1 in Appendix 6.A and use $s \times(s \times \Delta s)=-\Delta^{S^{2}} s$ to obtain

$$
\begin{aligned}
\frac{\partial}{\partial t} s & =2 s \times\left(\frac{1}{\hbar} \mathcal{L}_{u-u_{0}} s+\frac{1}{\hbar} \operatorname{div}\left(u-u_{0}\right) s-\frac{\epsilon^{2}}{2} s \times \Delta s\right) \\
& =\frac{2}{\hbar} s \times \mathcal{L}_{u-u_{0}} s+\epsilon^{2} \Delta^{S^{2}} s .
\end{aligned}
$$

## Relation to the Cauchy-Riemann Equation

To understand the nature of (6.21), particularly the term

$$
\frac{\partial}{\partial t} s=s \times \mathcal{L}_{u-u_{0}} s,
$$

one may consider a simplified version of the equation. Suppose $M=\mathbb{R}$, and hence $s=s(x, t)$ is just an $\mathbb{S}^{2}$-valued function of the spacetime $\mathbb{R} \times \mathbb{R}$. To study the local behavior one further replaces $\left(u-u_{0}\right.$ ) with a real scalar constant $a$. That is,

$$
\begin{equation*}
\frac{\partial}{\partial t} s=a s \times \frac{\partial}{\partial x} s . \tag{6.22}
\end{equation*}
$$

Now one recognizes that (6.22) is the Cauchy-Riemann equation for meromorphicity of $s: \mathbb{R} \times \mathbb{R} \rightarrow \mathbb{S}^{2}$. Here we identify the domain $\mathbb{R} \times \mathbb{R} \cong \mathbb{C}$ by $(x, t) \leftrightarrow x+i a t$, and identify the range $\mathbb{S}^{2} \cong \mathbb{C} \cup\{\infty\}$ with a stereographic projection (i.e. $\mathrm{S}^{2}$ is the Riemann sphere).

## 6.A The Magnetic Laplacian

Here we collect an algebraic fact about the magnetic Laplacian $\Delta^{\eta_{0}}$. Recall that for an $\mathbb{S}^{3} \subset \mathbb{H}$-valued wavefunction $\psi$, the associated velocity and spin
vector are given by $\eta=\hbar\langle i \psi, d \psi\rangle$ and $s=\bar{\psi} i \psi$. For an arbitrary real 1-form $\eta_{0}$, the magnetic Laplacian is given by

$$
\Delta^{\eta_{0}} \psi=\left(\nabla^{\eta_{0}}\right)^{\dagger}\left(\nabla^{\eta_{0}}\right) \psi=\left(\star d \star-\frac{i}{\hbar} \iota_{u_{0}}\right)\left(d \psi-\frac{i}{\hbar} \eta_{0} \psi\right)
$$

Here $u$ (resp. $u_{\mathrm{o}}$ ) is the associated vector to the 1 -form $\eta$ (resp. $\eta_{0}$ ).
Lemma 6.1. The quaternionic product $\bar{\psi} \Delta^{\eta_{0}} \psi$ can be written in terms of $s$ and $\left(u-u_{0}\right)$ as

$$
\begin{align*}
\bar{\psi} \Delta^{\eta_{0}} \psi= & -\frac{1}{2} s \times \Delta s+\frac{1}{\hbar} \mathcal{L}_{u-u_{0}} s+\frac{1}{\hbar} \operatorname{div}\left(u-u_{0}\right) s \\
& -\frac{1}{\hbar^{2}}\left|u-u_{0}\right|^{2}-\frac{1}{4}|d s|^{2} . \tag{6.23}
\end{align*}
$$

Proof. First we observe from $\bar{\psi}(-i) d \psi=\frac{1}{\hbar} \eta-\frac{1}{2} d s$ that

$$
\begin{equation*}
d \psi=i \psi\left(\frac{1}{\hbar} \eta-\frac{1}{2} d s\right) \tag{6.24}
\end{equation*}
$$

Now expand $\Delta^{\eta_{0}} \psi$ with (6.24)

$$
\begin{aligned}
\Delta^{\eta_{0}} \psi= & \left(\star d \star-\frac{i}{\hbar} \iota_{u_{0}}\right)\left(i \psi\left(\frac{1}{\hbar} \eta-\frac{1}{2} d s\right)-\frac{i}{\hbar} \eta_{\mathrm{o}} \psi\right) \\
= & \star d\left(i \psi \star\left(\frac{1}{\hbar}\left(\eta-\eta_{\mathrm{o}}\right)-\frac{1}{2} d s\right)\right)+\frac{1}{\hbar}\left\langle u, u_{\mathrm{o}}\right\rangle \psi-\frac{1}{2 \hbar} \psi \mathcal{L}_{u_{\mathrm{o}}} s-\frac{1}{\hbar^{2}}\left|u_{\mathrm{o}}\right|^{2} \psi \\
= & \star\left(i d \psi \wedge \star\left(\frac{1}{\hbar}\left(\eta-\eta_{\mathrm{o}}\right)-\frac{1}{2} d s\right)\right)+i \psi \star d \star\left(\frac{1}{\hbar}\left(\eta-\eta_{\mathrm{o}}\right)-\frac{1}{2} d s\right) \\
& +\frac{1}{\hbar}\left\langle u, u_{\mathrm{o}}\right\rangle \psi-\frac{1}{2 \hbar} \psi \mathcal{L}_{u_{\mathrm{o}}} s-\frac{1}{\hbar^{2}}\left|u_{\mathrm{O}}\right|^{2} \psi
\end{aligned}
$$

Now write $\star d \star\left(\eta-\eta_{\mathrm{o}}\right)=\operatorname{div}\left(u-u_{\mathrm{o}}\right)$ and $\star d \star d s=\Delta s$ in the second summand, and replace $d \psi$ once again by (6.24) in the first summand:

$$
\begin{aligned}
\Delta^{\eta_{0}} \psi= & \star\left(-\psi\left(\frac{1}{\hbar} \eta-\frac{1}{2} d s\right) \wedge \star\left(\frac{1}{\hbar}\left(\eta-\eta_{\mathrm{o}}\right)-\frac{1}{2} d s\right)\right) \\
& +i \psi \frac{\operatorname{div}\left(u-u_{0}\right)}{\hbar}-i \psi \frac{1}{2} \Delta s+\frac{1}{\hbar}\left\langle u, u_{0}\right\rangle \psi-\frac{1}{2 \hbar} \psi \mathcal{L}_{u_{0}} s-\frac{1}{\hbar^{2}}\left|u_{0}\right|^{2} \psi \\
= & \psi\left(-\frac{1}{\hbar^{2}}|u|^{2}+\frac{1}{\hbar^{\hbar}}\left\langle u, u_{0}\right\rangle+\frac{1}{2 \hbar} \mathcal{L}_{u} s+\frac{1}{2 \hbar} \mathcal{L}_{u} s-\frac{1}{2 \hbar} \mathcal{L}_{u_{0}} s+\frac{1}{4}|d s|^{2}\right) \\
& +i \psi \frac{\operatorname{div}\left(u-u_{0}\right)}{\hbar}-i \psi \frac{1}{2} \Delta s+\frac{1}{\hbar}\left\langle u, u_{0}\right\rangle \psi-\frac{1}{2 \hbar} \psi \mathcal{L}_{u_{0}} s-\frac{1}{\hbar^{2}}\left|u_{0}\right|^{2} \psi
\end{aligned}
$$

using the fact $|d s|^{2}=\star\langle d s \wedge \star d s\rangle=-\star(d s \wedge \star d s)$. By rearranging the terms we have

$$
\begin{aligned}
\Delta^{\eta_{0}} \psi= & \psi\left(-\frac{1}{\hbar^{2}}\left|u-u_{\mathrm{o}}\right|^{2}+\frac{1}{\hbar} \mathcal{L}_{u-u_{0}} s+\frac{1}{4}|d s|^{2}\right) \\
& +i \psi\left(\frac{1}{\hbar} \operatorname{div}\left(u-u_{\mathrm{O}}\right)-\frac{1}{2} \Delta s\right) .
\end{aligned}
$$

Now multiply $\bar{\psi}$ from the left and obtain

$$
\bar{\psi} \Delta^{\eta_{0}} \psi=-\frac{1}{\hbar^{2}}\left|u-u_{\mathrm{o}}\right|^{2}+\frac{1}{\hbar} \mathcal{L}_{u-u_{\mathrm{o}}} s+\frac{1}{4}|d s|^{2}+\frac{1}{\hbar} \operatorname{div}\left(u-u_{\mathrm{O}}\right) s-\frac{1}{2} s \Delta s
$$

Finally, split the last term $-\frac{1}{2} s \Delta s$ into the real and imaginary parts followed by a product rule:

$$
\begin{aligned}
-\frac{1}{2} s \Delta s & =\frac{1}{2}\langle s, \Delta s\rangle-\frac{1}{2} s \times \Delta s \\
& =\frac{1}{2} \star d \star\langle s, d s\rangle-\frac{1}{2} \star\langle d s \wedge \star d s\rangle-\frac{1}{2} s \times \Delta s \\
& =-\frac{1}{2}|d s|^{2}-\frac{1}{2} s \times \Delta s
\end{aligned}
$$

where we used the fact that $\langle s, d s\rangle=0$ for an $S^{2}$-valued function $s$. Therefore,

$$
\bar{\psi} \Delta^{\eta_{0}} \psi=-\frac{1}{\hbar^{2}}\left|u-u_{\mathrm{O}}\right|^{2}-\frac{1}{4}|d s|^{2}-\frac{1}{2} s \times \Delta s+\frac{1}{\hbar} \mathcal{L}_{u-u_{0}} s+\frac{1}{\hbar} \operatorname{div}\left(u-u_{\mathrm{O}}\right) s .
$$

Lemma 6.1 is particularly useful when we need to derive the time evolution equation for $s$ when $\psi$ is subject to a time evolution equation involving a Laplacian or a magnetic Laplacian. We will use this formula (6.23) in several places including Section 6.9, Section 9.1, and Section 11.1.

## Chapter 7

## APPLICATIONS OF SPHERICAL CLEBSCH MAPS

In Chapter 6 we introduced a method for finding a spherical Clebsch map $\psi, s$ for a given velocity field $\eta_{0}$. This problem has been reduced to finding a minimizer of the Dirichlet energy of $\psi$ using a covariant derivative $\nabla^{\eta_{0}}$ (Eq. (6.8)). While we can hope for good approximations there are theoretical obstacles to finding exact solutions:

1. Isolated zeros in the vorticity field cannot be recovered by a spherical Clebsch map.
2. Vortex lines for $\mathrm{S}^{2}$-valued Clebsch maps are always closed (or begin and end on the domain boundary) with a finite length, while generically they do not.
3. Spherical Clebsch maps have quantized helicity, while general velocity fields can have arbitrary helicity.

In Section 7.1 we demonstrate that these theoretical limitations do not stand in the way of the practical utility of the approximate maps we compute.

| Fig. | Resolution | \#(steps) | time | $\frac{\left\\|\eta-\eta_{0}\right\\|_{L^{2}}}{\left\\|\eta_{0}\right\\|_{L^{2}}}$ |
| ---: | :---: | ---: | ---: | :---: |
| 7.1 | $128^{2}$ | 100 | $1: 08$ | $1.8 \times 10^{-4}$ |
| $7 \cdot 3$ | $50^{3}$ | 130 | $6: 10$ | $1.9 \times 10^{-2}$ |
| $7 \cdot 4$ | $64^{3}$ | 150 | $20: 00$ | $5.4 \times 10^{-2}$ |
| 7.5 | $64^{2} \times 48$ | 30 | $2: 12$ | $1.6 \times 10^{-1}$ |
| 7.6 | $81 \times 41^{2}$ | 100 | $6: 04$ | $3.0 \times 10^{-2}$ |
| 7.8 | $64^{3}$ | 120 | $9: 55$ | $1.8 \times 10^{-1}$ |
| 1.9 | $64^{3}$ | 100 | $8: 00$ | $8.4 \times 10^{-2}$ |
| 7.10 | $64 \times 32^{2}$ | 120 | $1: 25$ | $1.3 \times 10^{-2}$ |

Table 7.1: Performance statistics. Time is given in units of minutes on a MacBook Pro, while "steps" gives the number of time discrete steps taken by the minimizer.

### 7.1 Validation

Before discussing benchmark problems we briefly describe our approach to visualization.

To visualize Clebsch maps we use pre-images of sets on $\mathbb{S}^{2}$ under $s$. For individual points $p \in \mathrm{~S}^{2}, s^{-1}(\{p\}) \subset M$ gives vortex lines, while pre-images of regions $\Omega \subset \mathbb{S}^{2}$ yield vortex tubes.

To construct $s^{-1}(\{p\})$ we represent $s$ as a complex function $\zeta: M \rightarrow \mathbb{C}$ through stereographic projection from the antipode $-p$. The set $\{x \in M \mid s(x)=$ $p\}$ is then given by the zeros of $\zeta$ and extracted as in [Weißmann, Pinkall, and Schröder, 2014, Sec. 3].

To visualize a vortex tube $s^{-1}(\Omega) \subset M$ we take some level set function on $\mathbb{S}^{2}$, $\chi: \mathrm{S}^{2} \rightarrow \mathbb{R}$ with $\chi=\mathrm{o}$ on $\partial \Omega$. Extracting the zero iso-contour of $\chi \circ s$ then yields the vortex tube surface in $M$. For the images of vortex tubes shown in this chapter we used $s=\left(s_{1}, s_{2}, s_{3}\right)^{\top}$ directly, drawing $s_{1}=0.8$ in gold and $s_{1}=-0.8$ in blue. The opacity of the vortex tube was set proportional to vorticity magnitude, making it inversely proportional to the cross-sectional area of the vortex tube. Treating $p=( \pm 1,0,0)^{\top}$ as the north resp. south pole of $\mathrm{S}^{2}$, the longitude angle $\arg \left(\psi_{1}\right)-\arg \left(\psi_{2}\right)$ for $\psi=\left(\psi_{1}, \psi_{2}\right)^{\top}$ was used as a texture coordinate on the vortex tube surfaces for a brush texture, making the brush "lines" tangent to vortex lines.

## 2D Example

Fig. $7 \cdot 1$ shows a velocity field and its $\mathrm{S}^{2}$-valued vorticity Clebsch map. The disk, rotating rigidly, has constant, non-zero vorticity. This forces the Clebsch map to wrap the central disk multiply around a small ( $\hbar=0.15$ ) 2-sphere in an area-preserving manner. Simultaneously, the map is as conformal as possible, since the Dirichlet energy of $s$ is the same as the conformal energy, up to a constant area term [Hutchinson, 1991]. Outside the central disk, due to vanishing vorticity, the map is (nearly) constant, i.e., it "covers" no area. This shows that our minimizers are not necessarily smooth. However, they appear (empirically) to be Lipschitz and smooth away from finitely many points. Fig. 7.2 shows the convergence plot for Fig. 7.1 which is typical of all the examples shown in this chapter.
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-103.jpg?height=787&width=1383&top_left_y=273&top_left_x=371)

Figure 7.1: A velocity field on a square (left) and its S$^{2}$-valued vorticity Clebsch map (right; visualized via an earth texture). The velocity field has non-zero, constant vorticity in the gray disk and zero vorticity outside.
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-103.jpg?height=901&width=1180&top_left_y=1374&top_left_x=467)

Figure 7.2: Convergence of the Clebsch map in Fig. 7.1 as a function of gradient descent iterations with $\Delta t=1$ and $\epsilon^{(0)}=1(0-20), \epsilon^{(1)}=0.1(20-40), \epsilon^{(2)}=0.01$ $(40-60), \epsilon^{(3)}=0.001(60-80)$, and $\epsilon^{(4)}=\mathrm{o}(>80)$.
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-104.jpg?height=649&width=1286&top_left_y=239&top_left_x=474)

Figure 7.3: On the left vortex lines traced in the vorticty vector field $\mathbf{w}=$ $(x, y,-2 z)^{\top}$ on a cube with side length three. On the right the pre-image of ten points on $\mathbf{S}^{2}$ for our Clebsch map approximating $\mathbf{w}(\hbar=0.05)$.

## Presence of Isolated Zeros

[Graham and Henyey, 2000] proved that a vorticity field $\mathbf{w}$ with an isolated zero at some point $x \in M$ does not admit an $\mathbb{R}^{2}$ valued Clebsch representation in the vicinity of $x$. Their argument also applies to $\mathbb{S}^{2}$ valued Clebsch maps. In our case the presence of the regularizer ensures that an approximate solution is found nevertheless. Fig. $7 \cdot 3$ shows a Clebsch map for a linear vorticity field on $\mathbb{R}^{3}$, and we see that our algorithm deals gracefully with the isolated zero at the origin.

Even though no exact Clebsch map (at least not a smooth one) can exist for this field at the origin, we still get meaningful approximations of the field, as visualized with the vorticity integral curves.

## Non-Closed Vortex Lines

In a generic flow most vortex lines are not closed. But Clebsch maps with target space $\mathbb{R}^{2}$ or $\mathbb{S}^{2}$ possess only closed (or beginning and ending on the boundary) vortex lines. Hence flows with vortex lines that neither close nor hit the boundary do not possess such a Clebsch map [Hadamard, 1903, §68].

By the Poincaré recurrence theorem [Poincaré, 1890], almost every such vortex line will return arbitrarily closely to its initial point, making it "almost closed." Our Clebsch maps approximate these almost closed vortex
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-105.jpg?height=619&width=1300&top_left_y=261&top_left_x=443)

Figure 7.4: Clebsch map for a vorticity field $\mathbf{w}=1.5 \mathbf{w}_{1}+\mathbf{w}_{2}$, confined to a ball, with $\mathbf{w}_{1}=\left(x z, y z, 1-2\left(x^{2}+y^{2}\right)-z^{2}\right)^{\top}$ and $\mathbf{w}_{2}=(-y, x, 0)^{\top}$. Both $\mathbf{w}_{1}, \mathbf{w}_{2}$ have closed vortex lines, but the ratio of their respective periods is irrational, ensuring that most vortex lines of $\mathbf{w}$ are non-closed. The field generated by the Clebsch map, visualized as pre-images of areas on $\mathrm{S}^{2}$ (left, blue tubes), approximates the field $\mathbf{w}$ (left, green trails) in a way that each vortex line is closed (right, two such vortex lines, i.e., pre-images of two points on $\mathrm{S}^{2}$ ).
lines by closed ones. Note that this "closure" depends on the resolution of the data. Fig. $7 \cdot 4$ gives an example of such a situation where most vortex lines of the original field do not close up, while the vortex lines of the field corresponding to the Clebsch maps are all closed.

Even though no exact Clebsch map exists for such fields, we still get a meaningful approximation with our method.

## Quantized Helicity

In Section 6.3 we showed that $S^{2}$-valued Clebsch maps can take non-zero but quantized helicity. Even though the helicity is quantized to integer multiples of $(2 \pi \hbar)^{2}$ (usually small), it does not present a practical obstacle to the approximation of fields with arbitrary helicity (Fig. 7-5).

Summary In this section we demonstrated that spherical Clebsch maps perform well in practice even in the presence of otherwise challenging input fields. Specifically, they yield good approximations in the presence of isolated zeros, gracefully approximate non-closed vortex lines, and work well with fields carrying non-zero helicity.
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-106.jpg?height=1004&width=1335&top_left_y=268&top_left_x=387)

Figure 7.5: Clebsch maps for vorticity fields, supported in the interior of a torus, with increasing helicity and a fixed $\hbar=0.2$. The graph shows the helicity recovered by the Clebsch map and the $L^{2}$ error in velocity. Each cross section of the torus is passed by 5 vortex tubes for each of the two colors. In this case the linking number between any two tubes must be a multiple of 5 [Bush et al., 2017], giving rise to the gaps $5(2 \pi \hbar)^{2} \approx 7.9$ in each jump discontinuity in the plot of helicity. Note that vortex lines connecting to the boundary allow continuous helicity; such events occur at large given helicity.

### 7.2 Vorticity Visualization

Vorticity fields are of great interest in the study of low Mach number flows because the evolution of vorticity reveals much about the underlying flow dynamics [Saffman, 1992]. One way to visualize vorticity is through vortex lines. A challenge in using vortex lines is the difficulty of selecting seed points so that the vortex lines have a spatial density proportional to vorticity magnitude. For $\mathrm{S}^{2}$-valued vorticity Clebsch maps this is achieved by picking points on $\mathrm{S}^{2}$ equidistributed with respect to area.

More specialized methods try to identify regions associated with vortices (for a comprehensive review see [Jiang et al., 2005]). One such method visualizes level sets of the vorticity norm $|\mathbf{w}|$ to capture regions of high
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-107.jpg?height=1041&width=1420&top_left_y=225&top_left_x=358)

Figure 7.6: Vorticity visualized through a $|\mathbf{w}|$ iso-surface (top-left), the $\lambda_{2}$ method (top-right), and a Clebsch map (bottom) for the Delta Wing data set [Ekaterinaris and Schiff, 1990] ( $40^{\circ}$ angle of attack, Mach 0.3, Reynolds number 10 ${ }^{6}$ ). Gray lines in the background are integral curves of the velocity field to give an overall sense of the flow.
vorticity (Fig. 7.6, upper left). Since directional information is ignored the resulting surfaces are misaligned in general, no longer being tangent to the vorticity field. A more sophisticated approach, the so-called $\lambda_{2}-$ method [Jeong and Hussain, 1995], analyses the velocity gradient tensor, but can still yield results which do not correctly represent the underlying vortex lines (Fig. 7.6; cf. Fig. 7.7). In contrast, with a vorticity Clebsch map one can draw the pre-image of one or several closed curves on $\mathrm{S}^{2}$, yielding proper vortex tubes (Figs. 7.6 and 7.8).

The Parameter $\hbar$ Since the parameter $\hbar$ shows up as the factor in $\omega=$ $\frac{\hbar}{2} s^{*} \sigma_{\mathbb{S}^{2}}$, the vortex tubes drawn by the pre-image $s^{-1}(\Omega)$ of a region $\Omega \subset \mathbb{S}^{2}$ have strength $\frac{\hbar}{2} \operatorname{Area}(\Omega)$. For a given flow and a region $\Omega$, the parameter $\hbar$ controls the spatial frequency of visualized vortex tubes, increasing them as $\hbar$ is lowered. To avoid aliasing artifacts $\hbar$ must be chosen relative to the
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-108.jpg?height=619&width=1221&top_left_y=252&top_left_x=487)

Figure 7.7: Comparison of vortex tubes from the vorticity Clebsch map with traced integral curves of the original vorticity field (seeded at the wing edges), verifying the Clebsch map result (cf. Fig. 7.6; bottom).
sampling rate $\Delta x$ (inverse grid resolution) and velocity magnitude $\|\mathbf{u}\|_{\infty}$ to satisfy $\pi \hbar>2 \Delta x\|\mathbf{u}\|_{\infty}$ ( $\hbar$ has physical dimension $\mathrm{m}^{2} / \mathrm{s}$ ).

Time Coherence We visualize pre-images of fixed sets in $\mathrm{S}^{2}$. However, the vorticity Clebsch map $s$ arising from the minimizers $\psi$ of (6.8) are only unique up to a global rotation of $S^{2}$. Hence, the locations of the selected vortex geometries depend on the initial guess $\psi^{(0)}$ in Algorithm 5. For a discrete time sequence of flow data sets one can ensure time coherence by initializing Algorithm 5 with the time advected minimizer from the previous time step.

### 7.3 Initial Data for Incompressible Schrödinger Flow

In Chapter 1 we introduced ISF as a method for simulating incompressible fluids. In ISF the velocity $\eta$ is encoded in a $\mathbb{C}^{2}$-valued function $\Psi$ as $\eta=$ $\hbar \operatorname{Re}\left(\bar{\Psi}^{\top}(-i) d \Psi\right)$. One major challenge in setting up an ISF simulation is to craft an initial $\Psi$ that represent a desired initial velocity field.

Now identify $\Psi: M \rightarrow \mathbb{C}^{2}$ with $\psi: M \rightarrow \mathbb{H}$ using Section B.4. Then we see that the velocity in ISF $\eta=\hbar\langle i \psi, d \psi\rangle=\psi^{*} \vartheta$ is represented by $\psi$ as a spherical Clebsch map. Our method for searching a spherical Clebsch map can then provide an initial condition for ISF, which is an optimally close representation for an arbitrary input velocity field (Fig. 1.9).
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-109.jpg?height=1250&width=1394&top_left_y=237&top_left_x=363)

Figure 7.8: Visualization of the vorticity field produced by the flapping wings of a Hummingbird. Flow data and photogrammetrically acquired bird geometry courtesy Haibo Dong, Flow Simulation Research Group, University of Virginia [Ren et al., 2016].

## 7-4 Flow Processing

A vorticity Clebsch map encodes vortex lines as level sets of $s$. This makes it easy to "rearrange" the vortex lines through manipulating $\psi$ (and thus $s)$, enabling a whole new class of flow processing approaches.

An example of this is post-composition $\tilde{\psi}:=\Xi \circ \psi$ with a map $\Xi: \mathrm{S}^{3} \rightarrow \mathrm{~S}^{3}$. Here we only consider maps $\Xi$ with a corresponding $\xi: \mathbb{S}^{2} \rightarrow \mathbb{S}^{2}$ satisfying $\pi \circ \Xi=\xi \circ \pi$. Under this assumption the modification of $\psi$ corresponds to a modification $\tilde{s}:=\xi \circ s$ of $s$.

An interesting example of $\xi: \mathbb{S}^{2} \rightarrow \mathbb{S}^{2}$ "wraps" $\mathrm{S}^{2}$ multiple times over itself (Appendix 7.A gives an explicit example of a multiple, branched covering).
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-110.jpg?height=1020&width=697&top_left_y=298&top_left_x=668)

Figure 7.9: Top: Jet simulation using RK4 backward advection and MacCormack time marching. Middle: the same scheme with an additional flow processing step (Section 7.4) at an earlier time to represent finer vortical structures aligned with coarse ones. Bottom: the result of adding isotropic turbulence at an earlier step. All simulations on a $256 \times 128 \times 128$ grid while the Clebsch map finder used a resolution of $64 \times 32 \times 32$ (due to performance reasons) which was interpolated to the high resolution grid.

The number of times $\xi$ wraps around $\mathrm{S}^{2}$ is called the mapping degree

$$
m_{\xi}:=\frac{\operatorname{Area}\left(\xi\left(\mathrm{S}^{2}\right)\right)}{\operatorname{Area}\left(\mathrm{S}^{2}\right)}
$$

where Area( $\cdot$ ) computes the signed area with multiplicity. The mapping degree $m_{\xi}$ shows up as a renormalization when reading off the processed velocity $\tilde{\eta}:=\frac{\hbar}{m_{\xi}}\langle d \tilde{\psi}, i \psi\rangle$, ensuring the overall vorticity flux remains unchanged.

In Fig. 7.9 we modify a velocity field at a single frame of a jet simulation by Algorithm 6 with a degree four map $\xi=\xi_{\text {mobius }} \circ \xi_{\text {tetra }}$ (Appendix 7.A). This particular modification cascades each vortex into four finer ones, and then concentrates the vorticity in the fine scale as shown in Fig. 7.10. Effectively this adds small eddies aligned with the large scale vortex direction in

```
Algorithm 6 Flow Processing
Input: $\eta_{0}, \hbar, \Xi$
    $\psi \leftarrow$ Find Clebsch map $\left(\eta_{0}, \hbar\right)$
    $\tilde{\psi} \leftarrow \Xi \circ \psi$
    $\tilde{\eta} \leftarrow \frac{\hbar}{m_{\xi}}\langle d \tilde{\psi}, i \tilde{\psi}\rangle$
    return PressureProject ( $\tilde{\eta}$ )
```

![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-111.jpg?height=323&width=1276&top_left_y=657&top_left_x=362)

Figure 7.10: A Clebsch map $s$ (left) obtained from the velocity data of a jet simulation is modified (right) by $\tilde{s}=\xi \circ s$ with a sphere map $\xi: \mathbb{S}^{2} \rightarrow \mathbb{S}^{2}$ that effectively concentrates vorticity. This flow processing is used for Fig. 7.9 middle.
a vorticity conserving fashion (Fig. 7-9, middle) as predicted by the KelvinHelmholtz instability that is otherwise not captured at the current resolution of the simulation (top) or by adding isotropic turbulence [Bridson et al., 2007] (bottom).

## 7•A Rational Maps for Flow Processing

Any map $\xi: \mathbb{S}^{2} \rightarrow \mathbb{S}^{2}$ can be written as a function on the extended complex plane by identifying $S^{2} \cong \mathbb{C} \cup\{\infty\}$ through stereographic projection $s \mapsto \zeta=$ $\frac{s_{2}}{1-s_{1}}+\frac{s_{3}}{1-s_{1}} i$ and its inverse $s=(1+|\zeta|)^{-1}(-1+|\zeta|, 2 \operatorname{Re} \zeta,-2 \operatorname{Re}(i \zeta))$. Similarly, each map $\Xi: \mathbb{S}^{3} \rightarrow \mathbb{S}^{3}$ is a map $\Xi: \mathbb{C}^{2} \rightarrow \mathbb{C}^{2}, \Xi\left(\zeta_{1}, \zeta_{2}\right)=\left(Q_{1}\left(\zeta_{1}, \zeta_{2}\right), Q_{2}\left(\zeta_{1}, \zeta_{2}\right)\right)$ where $\zeta_{1}, \zeta_{2} \in \mathbb{C}$. Thus designing a sphere map for Section 7.4 amounts to finding functions $\xi$ on the extended complex plane and $\Xi$ on $\mathbb{C}^{2}$ so that $\pi \circ \Xi=\xi \circ \pi$.

For our purpose good candidates for $\xi$ are the rational functions $\xi(\zeta)=$ $P_{1}(\zeta)\left(P_{2}(\zeta)\right)^{-1}$ where $P_{1}, P_{2}$ are polynomials without common divisor. Rational functions give all the conformal maps $\mathrm{S}^{2} \rightarrow \mathrm{~S}^{2}$. The mapping degree $m_{\xi}$ is given by $\max \left\{\operatorname{deg}\left(P_{1}\right), \operatorname{deg}\left(P_{2}\right)\right\}$. For each rational function $\xi$ a function $\Xi=\left(Q_{1}, Q_{2}\right)$ with $\pi \circ \Xi=\xi \circ \pi$ is easily found with both $Q_{1}, Q_{2}: \mathbb{C}^{2} \rightarrow \mathbb{C}$ homogeneous polynomials: $\xi(\zeta)=Q_{1}(\zeta, 1)\left(Q_{2}(\zeta, 1)\right)^{-1}$. Simple examples are scaling, $\xi_{\text {mobius }}(\zeta)=a \zeta$,
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-112.jpg?height=676&width=695&top_left_y=253&top_left_x=712)

Figure 7.11: A degree-4 rational map on $\mathrm{S}^{2}$ visualized with a world map texture.
corresponding to $\Xi_{\text {mobius }}\left(\zeta_{1}, \zeta_{2}\right)=\left(a \zeta_{1}, \zeta_{2}\right)$, and squaring $\xi_{\mathrm{sq}}(\zeta)=\zeta^{2}$ with $\Xi_{\mathrm{sq}}\left(\zeta_{1}, \zeta_{2}\right)=\left(\zeta_{1}^{2}, \zeta_{2}^{2}\right)$. Belyi gave a gallery of functions that have particular discrete symmetries. For instance,

$$
\Xi_{\text {tetra }}\left(\zeta_{1}, \zeta_{2}\right)=\binom{2 \sqrt{2} \zeta_{2}^{4}+8 \zeta_{1}^{3} \zeta_{2}}{2 \sqrt{2} \zeta_{1}^{4}-8 \zeta_{1} \zeta_{2}^{3}}
$$

gives $\xi_{\text {tetra }}$ that maps the four vertices of a tetrahedron on $\mathrm{S}^{2}$ to the same point [Magot and Zvonkin, 2000]. Fig. 7.11 shows the result of applying $\xi_{\text {tetra }}$ to a world map on $\mathrm{S}^{2}$.

To randomize the choice of the scrambling map with rotational symmetry, given a desired mapping degree $m$, one can choose $\Xi=\left(Q_{1}, Q_{2}\right)$ with

$$
Q_{j}\left(\zeta_{1}, \zeta_{2}\right)=\sum_{k=0}^{m} \frac{Z_{j k}}{\sqrt{k!(m-k)!}} \zeta_{1}^{k} \zeta_{2}^{m-k}
$$

where $Z_{j k} \in \mathbb{C}$ are independent, normally distributed random numbers for $j=1,2$ and $k=0 \ldots m$ [Woit, 2017, Sec. 8.2].

## Part III

## Incompressible Schrödinger <br> Flow

## EULER EQUATION WITH GEOMETRIC CLEBSCH VARIABLES

In Part II (Chapter 3-7), we introduced geometric Clebsch variables encoding a fluid state (a velocity 1 -form $\eta$ on a fluid domain $M$ ) through function maps into a prequantization.

In this chapter, we move on to the discussion on the time evolution equations for these Clebsch variables.

## A Summary of Geometric Clebsch Maps

Let us briefly recall what a prequantization is. One first prescribes a principal bundle $Q \xrightarrow{\pi} \Sigma$ over a symplectic manifold $(\Sigma, \sigma)$. The structure group for the bundle $Q$ is a one-dimensional Lie group written as $G=\{\exp (i \varphi) \mid \varphi \in \mathbb{R}\}$. Here $i: \mathbb{R} \xrightarrow{\cong} \mathfrak{g}$ where $\mathfrak{g}$ is the Lie algebra of $G$. Each Lie group element acts on $G$ in a way that the orbits are exactly the fibers $\left\{\pi^{-1}\{p\} \mid p \in \Sigma\right\}$. The generator of the group action is a vector field $V \in \Gamma(T Q)$, tangent to each fiber, given by $V_{q}=\left.\frac{d}{d t}\right|_{t=0} \exp (i t) \cdot q$. Upon the prescription of the bundle $Q$, we further request a 1 -form $\vartheta \in \Omega^{1}(Q)$ so that $d \vartheta=\pi^{*} \sigma$. As a normalization, we also impose $\vartheta(V)=1$. The structure $(Q, \vartheta) \xrightarrow{\pi}(\Sigma, \sigma)$ meeting the above conditions is called a prequantization.

Now, a velocity Clebsch variable is a map $\psi: M \rightarrow Q$ that represents the velocity 1-form $\eta$ by $\eta=\psi^{*} \vartheta$. A velocity Clebsch variable also gives rise to a vorticity Clebsch variable $s: M \rightarrow \Sigma$ by function composition $s=\pi \circ \psi$. The vorticity Clebsch variable represents the vorticity 2-form $\omega=d \eta$ as $\omega=s^{*} \sigma$.

The above definition of geometric Clebsch maps is a coordinate-free generalization to Clebsch' original proposal where $Q=\mathbb{R}^{2 m+1}, \Sigma=\mathbb{R}^{2 m}, \vartheta=$ $\langle\mathbf{x}, d \mathbf{y}\rangle+d z$ and $\sigma=\langle d \mathbf{x} \wedge d \mathbf{y}\rangle$. In addition, the notion of geometric Clebsch maps unifies the Madelung transform for multi-component wavefunctions. We focus on the spherical Clebsch maps where $Q=\mathrm{S}^{3} \subset \mathbb{H}$ with inclusion map $f: \mathbb{S}^{3} \hookrightarrow \mathbb{H}, \Sigma=\mathbb{S}^{2}, \vartheta=\hbar\langle i f, d f\rangle, \pi=\bar{f}$, and $\sigma=\frac{\hbar}{2} \sigma_{\mathrm{S}^{2}}$ where $\sigma_{\mathrm{S}^{2}}$ is the standard area form on $\mathrm{S}^{2}$. In particular $\eta=$
$\psi^{*} \vartheta=\hbar\langle i \psi, d \psi\rangle$ is Madelung's representation for the velocity, and $s=\bar{\psi} i \psi$ is the spin (Bloch) vector.

### 8.1 Symplectic Manifolds for Incompressible Flows

In this section we describe the symplectic structure for the space of geometric Clebsch maps that give rise to incompressible flows. This is the preparation for describing the Hamiltonian formulation for the Euler equation in the next section.

An arbitrary function $\psi: M \rightarrow Q$ can represent a 1-form $\eta=\psi^{*} \vartheta$ on $M$. However, to talk about incompressible fluids, we only need those velocity 1-forms that are solenoidal. To narrow down to incompressible Clebsch maps, we recall Section 4.5. As a summary, define the equivalence relation $\sim$ on $C^{\infty}(M ; Q)$ as that $\psi \sim \tilde{\psi}$ if and only if $\tilde{\psi}=\exp (i \varphi) \psi$ for some $\varphi \in$ $C^{\infty}(M ; \mathbb{R})$. Then define

$$
\mathcal{M}:=C^{\infty}(M ; Q) / \sim .
$$

By Theorem 4.2 (Section 4.5), or its special case Corollary 4.1, each equivalence class $[\psi] \in \mathcal{M}$ admits a representative $\psi$ so that $\eta=\psi^{*} \vartheta$ is solenoidal and satisfies a prescribed in-flow/out-flow boundary conditions. Such a representative $\psi$ is unique up to a constant phase shift $\psi \mapsto \exp \left(i \varphi_{0}\right) \cdot \psi$, and the associated solenoidal $\eta$ is unique.

Since each element $[\psi] \in \mathcal{M}$ exactly represents a solenoidal velocity 1-form $\eta$ (meeting the boundary conditions), we use $\mathcal{M}$ as the phase space of the fluid dynamical system. In fact, $\mathcal{M}$ is a symplectic manifold.

Let us begin with some notations. Let $\psi_{t}$ be a $t$-dependent function on $C^{\infty}\left(M ; \mathbb{S}^{3}\right)$ and let $\dot{\psi}=\left.\frac{\partial}{\partial t}\right|_{t=0} \psi_{t} \in T_{\psi} C^{\infty}\left(M ; \mathbb{S}^{3}\right)$ be a variation about $\psi_{0}$. Then we denote the induced variation on $\mathcal{M}$ by

$$
[\dot{\psi}]_{*}:=\left.\frac{\partial}{\partial t}\right|_{t=\mathrm{o}}\left[\psi_{t}\right] \in T_{\left[\psi_{\mathrm{o}}\right]} \mathcal{M} .
$$

The notation $[\cdot]_{*}$ is the pushforward of the quotient map $[\cdot]: C^{\infty}\left(M ; \mathrm{S}^{3}\right) \rightarrow$ $\mathcal{M}$.

To introduce the symplectic structure on $\mathcal{M}$, it is convenient to first look at the space of vorticity Clebsch maps

$$
\mathcal{S}:=C^{\infty}(M ; \Sigma) .
$$

Using the symplectic structure $\sigma$ of $\Sigma$, we have a symplectic structure on the function space $\mathcal{S}$. At each $s \in \mathcal{S}$, given two variations $\dot{s}, \stackrel{o}{s} \in T_{S} \mathcal{S}$, define

$$
\sigma^{\mathcal{S}}(\dot{s}, \mathfrak{s}):=\int_{M} \sigma(\dot{s}, \mathfrak{s}) \star 1
$$

Here $\dot{s}, \stackrel{\circ}{s}$ are sections of the pullback bundle $s^{*} T \Sigma$, i.e. $T \Sigma$-valued functions with $\dot{s}(x), \stackrel{s}{s}(x) \in T_{s(x)} \Sigma$. The expression $\sigma(\dot{s}, \stackrel{s}{s})$ in the integrand is a realvalued function on $M$, whose value at $x \in M$ is given by $\left.\sigma\right|_{s(x)}(\dot{s}(x), \stackrel{s}{(x)})$.

We will use the symplectic structure $\sigma^{\mathcal{S}}$ on $\mathcal{S}$ to define a symplectic structure $\sigma^{\mathcal{M}}$ on $\mathcal{M}$.

Note that there is a natural projection $\Pi: \mathcal{M} \rightarrow \mathcal{S}$ defined by that for each $[\psi] \in \mathcal{M}$,

$$
\Pi([\psi])=\pi \circ \psi
$$

where $\psi$ is any representative of the equivalence class $[\psi]$. Though the definition $\Pi$ involves a choice of representative, it is well-defined since $\pi \circ(\exp (i \varphi) \psi)=\pi \circ \psi$ using the fact that the group action $\exp (i \varphi) \cdot$ preserves the fibers of $Q \xrightarrow{\pi} \Sigma$.

Now for $s=\Pi([\psi])$, any variation $[\dot{\psi}]_{*} \in T_{[\psi]} \mathcal{M}$ induces a variation $\dot{s} \in T_{s} \mathcal{S}$ through the tangent map of $\Pi$, i.e. $\dot{s}=d \Pi\left([\dot{\psi}]_{*}\right)$. Written explicitly in terms of a representative, if a variation $\dot{\psi}$ gives rise to a variation $[\dot{\psi}]_{*}$ in its equivalence class, then $\dot{s}=d \Pi\left([\dot{\psi}]_{*}\right)=d \pi(\dot{\psi})$. Now define for every two variations $[\dot{\psi}]_{*},[\dot{\psi}]_{*} \in T_{[\psi]} \mathcal{M}$

$$
\sigma^{\mathcal{M}}\left([\dot{\psi}]_{*},[\dot{\psi}]_{*}\right)=\sigma^{\mathcal{S}}\left(d \Pi\left([\dot{\psi}]_{*}\right), d \Pi\left([\dot{\psi}]_{*}\right)\right)=\sigma^{\mathcal{S}}(\dot{s}, \stackrel{o}{s})
$$

as the symplectic form on $\mathcal{M}$.
With this construction of $\sigma^{\mathcal{M}}$, we only need to check $\sigma^{\mathcal{M}}$ is non-degenerate. Since $\sigma^{\mathcal{S}}$ is non-degenerate, the non-degeneracy of $\sigma^{\mathcal{M}}$ amounts to the non-degeneracy of $d \Pi$. Suppose $d \Pi$ is degenerate; that is, there exists a variation $[\dot{\psi}]_{*}$, given rise from a variation of a representative $\dot{\psi}$, so that $\dot{s}=d \Pi\left([\dot{\psi}]_{*}\right)=d \pi(\dot{\psi})=\mathrm{o}$. But $d \pi(\dot{\psi}(x))=\mathrm{o}$ implies that $\dot{\psi}(x) \in T_{\psi(x)} Q$ is vertical, so for each $x \in M$ there exists $\varphi(x) \in \mathbb{R}$ such that $\dot{\psi}(x)=$ $\left.\varphi(x) V\right|_{\psi(x)}$. With it we can generate a path, parameterized by $t \in[-\varepsilon, \varepsilon]$, $\psi_{t}(x)=\exp (i \varphi(x)) \cdot \psi(x)$ that recovers the variation $\dot{\psi}=\left.\frac{\partial}{\partial t}\right|_{t=0} \psi_{t}$. Clearly the corresponding variation in its equivalence class $\frac{\partial}{\partial t}\left[\psi_{t}\right]=\frac{\partial}{\partial t}[\psi]=0$. Therefore, $d \Pi$ is non-degenerate, and thus $\sigma^{\mathcal{M}}$ is non-degenerate.

Summary In this section, we defined the infinite dimensional manifold $\mathcal{M}$ as the space of states for incompressible flows. We also found a symplectic form $\sigma^{\mathcal{M}}$ on $\mathcal{M}$. To show that the given symplectic structure is useful, we next demonstrate that it gives rise to the Euler equation.

### 8.2 Hamiltonian Formulation for the Euler Equation

Here we present that the Euler equation is the symplectic gradient flow of the following Hamiltonian on $\mathcal{M}$ :

$$
\mathcal{E}_{\text {Euler }}: \mathcal{M} \rightarrow \mathbb{R}, \quad \mathcal{E}_{\text {Euler }}([\psi])=\int_{M} \frac{1}{2} \eta \wedge \star \eta
$$

where $\eta=\psi^{*} \vartheta$ is the unique solenoidal 1-form for the equivalence class $[\psi]$. Physically, $\mathcal{E}_{\text {Euler }}$ is the total kinetic energy.

Theorem 8.1. Under the symplectic gradient flow of $\mathcal{E}_{\text {Euler }}$ on $\left(\mathcal{M}, \sigma^{\mathcal{M}}\right)$, the vorticity Clebsch map $s=\Pi([\psi])$ satisfies

$$
\begin{equation*}
\dot{s}+\mathcal{L}_{u} s=\mathrm{o} \tag{8.1}
\end{equation*}
$$

where $u=\eta^{\sharp}$ is the velocity vector field.
Proof. Let us take the variation of $\mathcal{E}_{\text {Euler }}$ with respecto to a variation $\psi$ about a representative $\psi \in[\psi]$ that expresses the solenoidal velocity $\eta=\psi^{*} \vartheta$ :

$$
\stackrel{\circ}{\mathcal{E}}_{\text {Euler }}=\int_{M} \stackrel{\eta}{\wedge \star \eta . ~}
$$

Now, since $\eta=\psi^{*} \vartheta$, its variation is given by

$$
\begin{aligned}
\grave{\eta} & =d\left(\psi^{*} \iota_{\dot{\psi}} \vartheta\right)+\psi^{*} \iota_{\dot{\psi}} d \vartheta \\
& =d(\vartheta(\dot{\psi}))+\psi^{*} \iota_{\psi} \pi^{*} \sigma \\
& =d(\vartheta(\dot{\psi}))+\psi^{*} \pi^{*} \iota_{d \pi(\dot{\psi})} \sigma \\
& =d(\vartheta(\dot{\psi}))+s^{*} \iota_{\xi} \sigma .
\end{aligned}
$$

Therefore, using integration by parts we have

$$
\begin{aligned}
\stackrel{\circ}{\mathcal{E}}_{\text {Euler }} & =\int_{M} d(\vartheta(\stackrel{\circ}{\psi})) \wedge \star \eta+s^{*} \iota_{\varsigma} \sigma \wedge \star \eta \\
& =-\int_{M} \vartheta(\stackrel{\circ}{\psi}) \wedge \underbrace{d \star \eta}_{=0}+\iota_{u} s^{*} \iota_{\varsigma} \sigma \star 1 \\
& =\int_{M} \sigma(\stackrel{\circ}{s}, d s(u)) \star 1 \\
& =\sigma^{\mathcal{S}}(\stackrel{\circ}{s}, d s(u))=: \sigma^{\mathcal{M}}\left([\stackrel{\circ}{\psi}]_{*}, \operatorname{sgrad} \mathcal{E}_{\text {Euler }}\right)
\end{aligned}
$$

That is, the symplectic gradient, sgrad $\mathcal{E}_{\text {Euler }}$, satisfies

$$
d \Pi\left(\operatorname{sgrad} \mathcal{E}_{\text {Euler }}\right)=d s(u)=\mathcal{L}_{u} s
$$

Now, suppose $[\psi]$ evolves under the symplectic gradient flow

$$
[\dot{\psi}]_{*}=-\operatorname{sgrad} \mathcal{E}_{\text {Euler }}
$$

Then by applying $d \Pi$ to both sides of the equation, we obtain

$$
\dot{s}=-\mathcal{L}_{u} s
$$

The evolution equation (8.1) for the vorticity Clebsch map can then be used to show that $\eta$ satisfies the Euler Equation.

Theorem 8.2. Under the symplectic gradient flow of $\mathcal{E}_{\text {Euler }}$ on $\left(\mathcal{M}, \sigma^{\mathcal{M}}\right)$, the velocity 1-form $\eta$ satisfies

$$
\dot{\eta}+\mathcal{L}_{u} \eta=-d p
$$

for some exact 1-form $d p$.

Proof. Along the time-dependent $[\psi]$, let $\psi$ be a representative of $[\psi]$ so that $\eta=\psi^{*} \vartheta$ is the solenoidal 1-form. Now take the time derivative of $\eta$

$$
\begin{aligned}
\dot{\eta} & =d\left(\psi^{*} \iota_{\dot{\psi}} \vartheta\right)+\psi^{*} \iota_{\psi} d \vartheta \\
& =d \underbrace{(\vartheta(\dot{\psi}))}_{=:-\tilde{p}}+\psi^{*} \iota_{\psi} \pi^{*} \sigma \\
& =-d \tilde{p}+\psi^{*} \pi^{*} \iota_{d \pi(\dot{\psi})} \sigma \\
& =-d \tilde{p}+s^{*} \iota_{\dot{s}} \sigma .
\end{aligned}
$$

By Theorem 8.1, $s$ satisfies $\dot{s}=-\mathcal{L}_{u} s=-d s(u)$. Therefore,

$$
\begin{aligned}
\dot{\eta} & =-d \tilde{p}-s^{*} \iota_{d s(u)} \sigma \\
& =-d \tilde{p}-\iota_{u} s^{*} \sigma \\
& =-d \tilde{p}-\iota_{u} d \eta \\
& =\underbrace{-d \tilde{p}+d\left(|u|^{2}\right)}_{=:-d p}-\mathcal{L}_{u} \eta .
\end{aligned}
$$

## 8.3* Gauge Symmetries from Hamiltonian Group Actions on $\Sigma$

A physically observed fluid state is a solenoidal 1-form $\eta$, which is determined by the vorticity $\omega=d \eta$ and the harmonic component of $\eta$. As we represent these physical quantities using Clebsch variables, we have introduced additional gauge symmetries. For example, the vorticity is represented as $\omega=s^{*} \sigma$. If we post-compose $s$ by a symplectomorphism $\tau: \Sigma \rightarrow \Sigma, \tau^{*} \sigma=\sigma$, then $(\tau \circ s)^{*} \sigma=s^{*} \tau^{*} \sigma=s^{*} \sigma=\omega$ still represents the same physically observed vorticity. When the domain $M$ and the space $\Sigma$ have non-trivial topology, invariance of vorticity itself may not be enough. In this section, we discuss the gauge symmetries in the fluid system represented by Clebsch variables with general topology, and their associated conserved quantities.

## Hamiltonian Group Actions on $\Sigma$

We begin with the group $\operatorname{Symp}(\Sigma, \sigma)$, the group of symplectic diffeomorphisms (i.e. symplectomorphisms) acting on $\Sigma$. That is, each element $\tau \in$ $\operatorname{Symp}(\Sigma, \sigma)$ is a smooth map $\tau: \Sigma \rightarrow \Sigma$ that satisfies $\tau^{*} \sigma=\sigma$. Let $\mathfrak{s y m p}^{2}(\Sigma, \sigma)$ be the Lie algebra associated to $\operatorname{Symp}(\Sigma, \sigma)$. Then the condition $\tau^{*} \sigma=\sigma$ for $\tau \in \operatorname{Symp}(\Sigma, \sigma)$ can be described infinitesimally by

$$
\mathcal{L}_{X^{\xi}} \sigma=0 \quad \text { for all } \xi \in \mathfrak{s y m p}(\Sigma, \sigma)
$$

where $X^{\xi}$ is the tangent vector field on $\Sigma$ generated by $\xi$, i.e. for each $p \in \Sigma$, $X^{\xi}(p):=\left.\frac{\partial}{\partial t}\right|_{t=0} \exp (t \xi) \cdot p$. Since $o=\mathcal{L}_{X^{\xi}} \sigma=d \iota_{X^{\xi}} \sigma+\iota_{X^{\xi}} d \sigma=d \iota_{X}{ }^{\xi} \sigma$, one sees that $\iota_{X \xi} \sigma$ is always closed.

In the case that $\iota_{X}{ }^{\xi} \sigma$ is not only closed but also exact, the vector field $X^{\xi}$ is said to be Hamiltonian. The Lie algebra elements $\xi \in \mathfrak{s y m p}(\Sigma, \sigma)$ that produce Hamiltonian vector fields $X^{\xi}$ form a subalgebra $\mathfrak{h a m}(\Sigma, \sigma) \subset$ $\mathfrak{s y m p}(\Sigma, \sigma)$. And ham $(\Sigma, \sigma)$ generates the group of Hamiltonian group actions $\operatorname{Ham}(\Sigma, \sigma) \subset \operatorname{Symp}(\Sigma, \sigma)$. See [Polterovich, 2012] for more discussion on the groups $\operatorname{Symp}(\Sigma, \sigma)$ and $\operatorname{Ham}(\Sigma, \sigma)$.

## Moment Map

For each $\xi \in \operatorname{ham}(\Sigma, \sigma), \iota_{X} \sigma \sigma$ is exact. Therefore for each $\xi$ there exists a function $U_{\xi}: \Sigma \rightarrow \mathbb{R}$ so that $d U_{\xi}=\iota_{X} \sigma \sigma$. In fact, the values of $U_{\xi}$ can be chosen so that they are linear in $\xi \in \mathfrak{h a m}(\Sigma, \sigma)$. That is, there is a
$\mathfrak{h a m}{ }^{*}(\Sigma, \sigma)$-valued function

$$
\mu^{\Sigma}: \Sigma \rightarrow \mathfrak{h a m}^{*}(\Sigma, \sigma)
$$

that expresses $U_{\xi}$ as $\left.U_{\xi}\right|_{p}=\left\langle\left.\mu^{\Sigma}\right|_{p}, \xi\right\rangle$, where $\langle\cdot, \cdot\rangle$ denotes the pairing between $\mathfrak{h a m}^{*}(\Sigma, \sigma)$ and $\mathfrak{h a m}(\Sigma, \sigma)$. In other words, $\mu^{\Sigma}$ satisfies

$$
\begin{equation*}
d\left\langle\mu^{\Sigma}, \xi\right\rangle=\iota_{X} \sigma . \tag{8.2}
\end{equation*}
$$

(In some context $\mu^{\Sigma}$ is further required to be equivariant under the coadjoint actions of $\operatorname{Ham}(\Sigma, \sigma)$ on $\mathfrak{h a m *}(\Sigma, \sigma)$ ). A function $\mu^{\Sigma}: \Sigma \rightarrow \mathfrak{h a m}(\Sigma, \sigma)$ satisfying (8.2) is called a moment map.

The values of a moment map $\left\langle\mu^{\Sigma}, \xi\right\rangle$, or simply $U_{\xi}$, are the possible conserved quantities associated to $\xi \in \mathfrak{h a m}(\Sigma, \sigma)$.

## Noether's Invariants

Although our dynamical system happens on function spaces $\mathcal{M}$ and $\mathcal{S}$, in order to make a simpler explanation of Noether's invariants, let us consider dynamical systems on the finite dimensional space $\Sigma$. Suppose $H: \Sigma \rightarrow \mathbb{R}$ is a Hamiltonian giving rise to the Hamiltonian flow on $(\Sigma, \sigma)$

$$
\dot{p}=-\left.\operatorname{sgrad} H\right|_{p}
$$

for time-dependent $p$ on $\Sigma$. Here the symplectic gradient sgrad $H$ is defined by $d H=\sigma(\cdot, \operatorname{sgrad} H)$. Now, suppose the Hamiltonian $H$ is invariant under a Hamiltonian group action, i.e. there is $\xi \in \mathfrak{h a m}(\Sigma, \sigma)$ so that

$$
\mathcal{L}_{X^{\xi}} H=\mathrm{o} .
$$

Then under the Hamiltonian flow $\dot{p}=-\operatorname{sgrad} H$ the value $U_{\xi}=\left\langle\mu^{\Sigma}, \xi\right\rangle$ is an integral of motion.

To see this, take the time derivative of $U_{\xi}$. Using the fact that $d U_{\xi}=\iota_{X}{ }^{\xi} \sigma$ we have

$$
\begin{aligned}
\dot{U}_{\xi} & =d U_{\xi}(\dot{p})=-d U_{\xi}(\operatorname{sgrad} H)=-\left(\iota_{X^{\xi}} \sigma\right)(\operatorname{sgrad} H) \\
& =-\sigma\left(X^{\xi}, \operatorname{sgrad} H\right)=d H\left(X^{\xi}\right)=\mathcal{L}_{X^{\xi}} H=0 .
\end{aligned}
$$

Therefore $U_{\xi}$ is conserved along the Hamiltonian flow of $H$ whenever $H$ has the symmetry $\mathcal{L}_{X^{\xi}} H=0$.

## Hamiltonian Group Actions on $\mathcal{S}$

Our dynamical system for fluids happens on the symplectic manifold ( $\mathcal{M}, \sigma^{\mathcal{M}}$ ), whose symplectic structure is given by $\left(\mathcal{S}, \sigma^{\mathcal{S}}\right)$. We have seen that Hamiltonian group actions on $\Sigma$ have an associated moment map that represents the candidates for conserved quantities. These notions on $(\Sigma, \sigma)$ can be carried along to $\left(\mathcal{S}, \sigma^{\mathcal{S}}\right)$. As a quick reminder, note that $\mathcal{S}$ consists of functions $s$ mapping into $\Sigma$, and the symplectic structure $\sigma^{\mathcal{S}}$ is given by $\sigma^{\mathscr{S}}(\dot{s}, \stackrel{\circ}{s})=\int_{M} \sigma(\dot{s}, \stackrel{s}{s}) \star 1$.

Now, each Hamiltonian group action $\tau \in \operatorname{Ham}(\Sigma, \sigma)$ gives rise to a symplectomorphism on ( $\mathcal{S}, \sigma^{\mathcal{S}}$ ) by post-composition. Explicitly, let us denote $j: \operatorname{Ham}(\Sigma, \sigma) \hookrightarrow \operatorname{Symp}\left(\mathcal{S}, \sigma^{\mathcal{S}}\right)$ defined by that for each $\tau \in \operatorname{Ham}(\Sigma, \sigma)$, the action $j(\tau): \mathcal{S} \rightarrow \mathcal{S}$ is given by

$$
j(\tau) \cdot s:=\tau \circ s, \quad s \in \mathcal{S}
$$

Here we check that $j(\tau)$ is indeed a symplectomorphism. For each $\dot{s}, \dot{s} \in$ $T_{s} \mathcal{S}$, by chain rule the resulting variations mapped by the tangent map of the action $j(\tau)$ are

$$
d(j(\tau) \cdot)(\dot{s})=d \tau(\dot{s}), \quad d(j(\tau) \cdot)(\stackrel{s}{s})=d \tau(\stackrel{s}{s})
$$

Therefore,

$$
\begin{aligned}
\left((j(\tau) \cdot)^{*} \sigma^{\mathscr{S}}\right)(\dot{s}, \stackrel{̊}{s}) & =\sigma^{\mathfrak{S}}(d(j(\tau) \cdot) \dot{s}, d(j(\tau) \cdot) \stackrel{\wp}{)}) \\
& =\int_{M} \sigma(d \tau(\dot{s}), d \tau(\mathfrak{s})) \star 1 \\
& =\int_{M} \sigma(\dot{s}, \stackrel{s}{s}) \star 1=\sigma^{\S}(\dot{s}, \mathfrak{s})
\end{aligned}
$$

Next, we show that elements of $j(\operatorname{Ham}(\Sigma, \sigma))$ are not only symplectomorphisms on $\mathcal{S}$ but furthermore Hamiltonian actions. That is, $j(\operatorname{Ham}(\Sigma, \sigma)) \subset$ $\operatorname{Ham}\left(\mathcal{S}, \sigma^{\mathcal{S}}\right)$. We show it by directly constructing the associated moment map for $j(\operatorname{Ham}(\Sigma, \sigma))$.

Let $j_{*}(\mathfrak{h a m}(\Sigma, \sigma)) \subset \mathfrak{s y m p}\left(\mathcal{S}, \sigma^{\mathcal{S}}\right)$ be the Lie algebra for $j(\operatorname{Ham}(\Sigma, \sigma))$ expressed by pushforwards. Let $\langle\| \cdot, \cdot\rangle$ be the pairing between $j_{*}(\mathfrak{h a m}(\Sigma, \sigma))$ and its dual space.

Theorem 8.3. The map

$$
\begin{aligned}
& \mu^{\mathcal{S}}: \mathcal{S} \rightarrow\left(j_{*}(\mathfrak{h a m}(\Sigma, \sigma))\right)^{*} \\
& \left\langle\mu^{\left.\left.\mathcal{S}, j_{*} \xi\right\rangle\right\rangle:=\int_{M} s^{*}\left\langle\mu^{\Sigma}, \xi\right\rangle \star 1, \quad \text { for } \xi \in \mathfrak{h a m}(\Sigma, \sigma),}\right.
\end{aligned}
$$

is a moment map for the symplectomorphisms $j(\operatorname{Ham}(\Sigma, \sigma))$, which are therefore Hamiltonian actions.

Proof. We need to check that the variation of $\left\langle\left\langle\mu^{\mathcal{S}}, j_{*} \xi\right\rangle\right.$ with respect to a variation $s \in T_{s} \mathcal{S}$ is $\sigma^{\mathcal{S}}\left(X^{j_{*} \xi}, \mathcal{s}\right)$. Here, the vector $\left.X^{j_{*} \xi}\right|_{s} \in T_{s} \mathcal{S}$ is given by the variation

$$
\begin{aligned}
\left.X^{j_{*} \xi}\right|_{s} & =\left.\frac{\partial}{\partial t}\right|_{t=0}(j(\exp (t \xi)) \cdot s) \\
& =\left.\frac{\partial}{\partial t}\right|_{t=0}((\exp (t \xi) \cdot) \circ s) \\
& =X^{\xi} \circ s .
\end{aligned}
$$

Now let us take the variation of $\left\langle\left\langle\mu^{\mathcal{S}}, j_{*} \xi\right\rangle\right\rangle=\int_{M} s^{*}\left\langle\mu^{\Sigma}, \xi\right\rangle \star 1$ :

$$
\begin{aligned}
\left\langle\left\langle\mu^{\mathcal{S}}, j_{*} \xi\right\rangle\right\rangle & =\int_{M} s^{*} \iota_{s}\left(d\left\langle\mu^{\Sigma}, \xi\right\rangle\right) \star 1 \\
& =\int_{M} s^{*}\left(\iota_{s} \iota_{X} \xi \sigma\right) \star 1 \\
& =\int_{M} \sigma\left(X^{\xi} \circ s, \stackrel{s}{ }\right) \star 1 \\
& =\sigma^{\mathcal{S}}\left(X^{j_{*} \xi}, \stackrel{\circ}{s}\right) .
\end{aligned}
$$

Corollary 8.1. Suppose $\mathcal{E}: \mathcal{S} \rightarrow \mathbb{R}$ is a Hamiltonian with the symmetry that $\dot{\varepsilon}=$ o under the variation $\AA=X^{\xi} \circ s$ for some $\xi \in \mathfrak{h a m}(\Sigma, \sigma)$. Then $\int_{M} s^{*}\left\langle\mu^{\Sigma}, \xi\right\rangle \star 1$ is an integral of motion under the Hamiltonian flow of $\mathcal{E}$ on $\left(\mathcal{S}, \sigma^{\mathcal{S}}\right)$.

Proof. It follows from Noether's invariants.
Corollary 8.2. Let $\mathcal{E}: \mathcal{M} \rightarrow \mathbb{R}$ be a Hamiltonian defined on $\mathcal{M}$, and let $\xi \in$ bam $(\Sigma, \sigma)$. Suppose $\varepsilon$ has the symmetry that $\dot{\varepsilon}=$ o under any variation $[\dot{\psi}]_{*}$ satisfying $\AA=d \Pi\left([\dot{\psi}]_{*}\right)=X^{\xi} \circ s$. Then

$$
\int_{M} s^{*}\left\langle\mu^{\Sigma}, \xi\right\rangle \star 1
$$

is an integral of motion under the Hamiltonian flow of $\mathcal{\varepsilon}$ on $\left(\mathcal{M}, \sigma^{\mathcal{M}}\right)$.

## Gauge Invariance

Now we show that $\mathcal{E}_{\text {Euler }}$ has the symmetry described in Corollary 8.2.
Theorem 8.4 (Gauge invariance). Suppose $\eta$ is the solenoidal 1-form associated to a given $[\psi] \in \mathcal{M}$. Then for every $\xi \in \mathfrak{h a m}(\Sigma, \sigma), \eta$ is invariant under any variation $[\dot{\psi}]_{*}$ with $d \Pi\left([\circ]_{*}\right)=X^{\xi} \circ s$.

Proof. Let $\tilde{\eta}=\psi^{*} \vartheta$ be the velocity 1 -form given by any representative $\psi \in$ $[\psi]$. That is, $\tilde{\eta}=\eta+d \varphi$ for some $\varphi: M \rightarrow \mathbb{R}$ where $\eta$ is the solenoidal $1-$ form associated to $[\psi]$. Now take a variation $\dot{\psi}$ such that the corresponding variation $\stackrel{s}{=} d \pi(\dot{\psi})$ is $\stackrel{\circ}{s} X^{\xi} \circ s$. Then the variation in $\tilde{\eta}=\psi^{*} \vartheta$ is

$$
\begin{aligned}
& \stackrel{\circ}{\eta}=d\left(\psi^{*} \iota_{\dot{\psi}} \vartheta\right)+\psi^{*} \iota_{\dot{\psi}} d \vartheta \\
& =d(\vartheta(\dot{\psi}))+\psi^{*} \iota_{\dot{\psi}} \pi^{*} \sigma \\
& =d(\vartheta(\stackrel{\psi}{\psi}))+\psi^{*} \pi^{*} \iota_{d \pi(\hat{\psi})} \sigma \\
& =d(\vartheta(\mathcal{\psi}))+s^{*} \iota_{\S} \sigma \\
& =d(\vartheta(\psi))+s^{*} \iota_{X} \xi \sigma .
\end{aligned}
$$

Now using the moment map we have $\iota_{X} \xi \sigma=d\left\langle\mu^{\Sigma}, \xi\right\rangle$. Therefore

$$
\stackrel{\AA}{\eta}=d\left(\vartheta(\dot{\psi})+s^{*}\left\langle\mu^{\Sigma}, \xi\right\rangle\right)
$$

That is, $\tilde{\eta}$ stays in the same cohomology class under such a variation. Thus the solenoidal representative $\eta$ stays invariant.

Remark 8.1. Theorem 8.4 is true for $\xi \in \mathfrak{h a m}(\Sigma, \sigma)$ but not for $\xi \in \mathfrak{s y m p}(\Sigma, \sigma)$ in general. For example, if $\iota_{X} \sigma$ is closed but not exact on $\Sigma$, then

$$
\stackrel{\circ}{\eta}=d(\vartheta(\stackrel{\psi}{\psi}))+s^{*} \iota_{X} \xi \sigma
$$

leaves the cohomology class. The effect of such a variation is that the vorticity field $d \eta$ still stays invariant, but the circulations $\int_{\Gamma} \eta$ along global loops $\Gamma$ do not.
One the other hand, if any of $M$ and $\Sigma$ is simply-connected, then Theorem 8.4 holds for all $\xi \in \mathfrak{s y m p}(\Sigma, \sigma)$.

Corollary 8.3 (Conservation Laws associated with the Gauge Invariance). When an Euler fluid flow is formulated as a Hamiltonian flow of $\mathcal{E}_{\text {Euler }}([\psi])=$ $\frac{1}{2} \int \eta \wedge \star \eta$ on $\left(\mathcal{M}, \sigma^{\mathcal{M}}\right),(\eta$ is the solenoidal 1-form associated to $[\psi]$,

$$
\int_{M} U(s) \star 1
$$

is a conserved quantity for any smooth function $U: \Sigma \rightarrow \mathbb{R}$.

Proof. By Corollary 8.2, the quantity $\int_{M} s^{*}\left\langle\mu^{\Sigma}, \xi\right\rangle \star 1$ is conserved for all $\xi \in \operatorname{ham}(\Sigma, \sigma)$. By writing $U_{\xi}=\left\langle\mu^{\Sigma}, \xi\right\rangle: \Sigma \rightarrow \mathbb{R}$, we see $\int_{M} U_{\xi}(s) \star 1$ is conserved. Up to additive constants on connected components of $\Sigma$, the function $U_{\xi}$ is characterized by its derivative $d U_{\xi}=\iota_{X}{ }^{\xi} \sigma$. Now, allowing $\xi$ be arbitrary element in $\mathfrak{h a m}(\Sigma, \sigma)$ yields $X^{\xi}$ be arbitrary function Hamiltonian vector field. In particular $d U_{\xi}$ can be the differential of an arbitrary function on $\Sigma$. That is, for any smooth function $U: \Sigma \rightarrow \mathbb{R}$, there exists $\xi \in \mathfrak{h a m}(\Sigma, \sigma)$ and some $C: \Sigma \rightarrow \mathbb{R}$ constant per connected component of $\Sigma$, so that $U=U_{\xi}+C$. By the conservation of $\int_{M} U_{\xi}(s) \star 1$ and the continuity of $s$ with respect to time, we have the conservation of $\int U(s) \star 1$.

Note that Corollary 8.3 is also obvious from the evolution equation (8.1) for $s$ from Theorem 8.1. The equation $\dot{s}+\mathcal{L}_{u} s=$ o suggests that the values of $s$ is just being advected. Therefore the "statistics" $\int_{M} U(s) \star 1$ is conserved for arbitrary $U: \Sigma \rightarrow \mathbb{R}$.

This section gives an insight that this conservation law of $s$ is associated with the gauge invariance of the physical fluid state $\eta$ under postcomposition of $s$ by Hamiltonian group actions on $\Sigma$.

Such a relation between the conservation of $s$ and the gauge invariance was described in [Jerrold Marsden and Weinstein, 1983] with the classical setting $\Sigma=\mathbb{R}^{2}$. since $\mathbb{R}^{2}$ is simply-connected, Marsden and Weinstein describe the gauge group by $\operatorname{Symp}\left(\mathbb{R}^{2}, \sigma_{\mathbb{R}^{2}}\right)$. We clarify that the gauge group should be narrowed down to $\operatorname{Ham}(\Sigma, \sigma) \subset \operatorname{Symp}(\Sigma, \sigma)$ when $\Sigma$ has a more general topology.

## Chapter 9

## DYNAMICS OF ISF

In Section 1.4 we observe empirically that the incompressible Schrödinger equation (1.3)

$$
\left\{\begin{array}{l}
\frac{\partial}{\partial t} \Psi=i \frac{\hbar}{2} \Delta \Psi-i \frac{1}{\hbar} p \Psi  \tag{9.1}\\
\operatorname{Re}\left(\bar{\Psi}^{\top} i \Delta \Psi\right)=0
\end{array}\right.
$$

generates dynamics similar to those of classical fluids. Here the timedependent function $\Psi: M \rightarrow \mathbb{C}^{2}$ has $|\Psi|=1$ at all point of space and time. The (time-dependent) scalar function $p: M \rightarrow \mathbb{R}$ gives infinitesimal pressure projection in the time evolution so that $\Psi$ is kept solenoidal $\left(\operatorname{Re}\left(\bar{\Psi}^{\top} i \Delta \Psi\right)=0\right)$. The physical velocity 1 -form $\eta$ is encoded in $\Psi$ as $\eta=\hbar \operatorname{Re}\left(\bar{\Psi}^{\top}(-i) d \Psi\right)$.

Using the identification between $\mathbb{C}^{2}$ and $\mathbb{H}$, (see Section B.4,) we may rewrite (9.1) in terms of $\psi: M \rightarrow \mathrm{~S}^{3} \subset \mathbb{H}$

$$
\left\{\begin{array}{l}
\frac{\partial}{\partial t} \psi=i \frac{\hbar}{2} \Delta \psi-i \frac{1}{\hbar} p \psi  \tag{9.2}\\
\langle i \psi, \Delta \psi\rangle=0
\end{array}\right.
$$

where $\langle\cdot, \cdot\rangle$ is the real inner product of $\mathbb{H} \cong \mathbb{R}^{4}$. The velocity 1 -form is given by $\eta=\hbar\langle i \psi, d \psi\rangle$. Such a representation for the velocity is a geometric Clebsch representation. Specifically, $Q=\mathrm{S}^{3} \stackrel{f}{\hookrightarrow} \mathbb{H}, \vartheta=\hbar\langle i f, f\rangle \in \Omega^{1}\left(\mathrm{~S}^{3} ; \mathbb{R}\right)$, and $\eta=\psi^{*} \vartheta$. Using the Hopf map (Section 4.3) $\pi=\bar{f}$ if: $\mathrm{S}^{3} \rightarrow \mathbb{S}^{2}$, which satisfies $d \vartheta=\pi^{*} \sigma$ for $\sigma=\frac{\hbar}{2} \sigma_{S^{2}}$, the wavefunction $\psi$ representation of fluids also comes with a vorticity Clebsch map $s=\pi \circ \psi=\bar{\psi} i \psi: M \rightarrow \mathbb{S}^{2}$. In particular, $\omega=d \eta=s^{*} \sigma$.

In (9.2), $\Delta \psi$ is the ordinary componentwise Laplacian for the $\mathbb{H}\left(\cong \mathbb{R}^{4}\right)$ valued function $\psi$. Note that $\Delta \psi$ is different from $\Delta^{S^{3}} \psi$, which is the projection

$$
\Delta^{S^{3}} \psi=\Delta \psi-\langle\psi, \Delta \psi\rangle \psi
$$

so that the value of $\Delta^{S^{3}} \psi$ is always tangent to $\mathbb{S}^{3}$ at $\psi$. Since $\psi$ is naturally regarded as an $\mathrm{S}^{3}$-valued function, it is more natural to discuss the intrinsic Laplacian $\Delta^{S^{3}} \psi$. For those discussions, we replace the Laplacians in (9.2) by
$\Delta^{S^{3}}$ by having the normal component $\langle\psi, \Delta \psi\rangle \psi$ absorbed into the pressure term, and by $\langle i \psi, \psi\rangle=0$ :

$$
\left\{\begin{array}{l}
\frac{\partial}{\partial t} \psi=i \frac{\hbar}{2} \Delta^{S 3} \psi-i\left(\frac{1}{\hbar} p-\frac{\hbar}{2}\langle\psi, \Delta \psi\rangle\right) \psi  \tag{9.3}\\
\left\langle i \psi, \Delta^{S 3} \psi\right\rangle=\mathrm{o}
\end{array}\right.
$$

### 9.1 Evolution of $s$

It is instructive to look at the evolution of the vorticity Clebsch variable $s$ in order to understand the dynamics underneath an incompressible Schrödinger flow (ISF).

Theorem 9.1. If a time-dependent $\psi: M \rightarrow \mathbb{S}^{3}$ satisfies (9.2), then $s=\bar{\psi} i \psi$ satisfies

$$
\begin{equation*}
\frac{\partial}{\partial t} s+\mathcal{L}_{u} s=\frac{\hbar}{2} s \times \Delta s \tag{9.4}
\end{equation*}
$$

That is, $s$ satisfies the Euler equation $\frac{\partial}{\partial t} s+\mathcal{L}_{u} s=$ o modified with a LandauLifshitz equation $\frac{\partial}{\partial t} s=\frac{\hbar}{2} s \times \Delta s$.

Proof. We give a quick derivation by applying Lemma 6.1 from Appendix 6.A. Taking time derivative of $s=\bar{\psi} i \psi$, we have

$$
\dot{s}=2 \operatorname{Im}(\bar{\psi} i \dot{\psi})=2 \operatorname{Im}\left(\bar{\psi} i\left(i \frac{\hbar}{2} \Delta \psi-i \frac{1}{\hbar} p \psi\right)\right)=-\hbar \operatorname{Im}(\bar{\psi} \Delta \psi)
$$

Now by taking the imaginary part of Lemma 6.1 with $\eta_{0}=0$, and with $\operatorname{div}(u)=0$, we have

$$
\dot{s}=-\hbar\left(-\frac{1}{2} s \times \Delta s+\frac{1}{\hbar} \mathcal{L}_{u} s\right)=-\mathcal{L}_{u} s+\frac{\hbar}{2} s \times \Delta s
$$

In Section 9.4, we will further derive the evolution of the velocity $\eta$ using (9.4). In Chapter 10 we will discuss the effect of the Landau-Lifshitz term $\frac{\hbar}{2} s \times \Delta s$ in the modified Euler equation (9.4). It turns out that the LandauLifshitz term regularizes the Euler equation in a way that the motion of vortex filaments (in the case when $M$ is 3 D ) are "enhanced" with an additional localized induction. The latter phenomenon is used to explain the benchmark reproduction of the leapfrogging vortex rings (Figure 1.1) even on a coarse computation grid.

Before going down that path, let us rederive the equivalence (9.3) and (9.4) in a Hamiltonian picture. The Hamiltonian formulation is important for a generalization for ISF presented in 9.3, where $s$ satisfies

$$
\frac{\partial}{\partial t} s+\mathcal{L}_{u} s=\frac{\epsilon^{2} \hbar}{2} s \times \Delta s
$$

where $\epsilon$ is a parameter controlling the amount of the Landau-Lifshitz perturbation while keeping the parameter $\hbar$ fixed.

### 9.2 Hamiltonian Formulation of ISF

The state $\psi$ of ISF is a function $\psi: M \rightarrow \mathrm{~S}^{3}$ whose associated velocity $\eta=$ $\psi^{*} \vartheta$ is solenoidal. Such a $\psi$ is uniquely determined (up to a global phase) by the equivalence class $[\psi]$ as a member in $\mathcal{M}$. In this section we will describe ISF as a Hamiltonian system on the symplectic manifold $\mathcal{M}$.

Recall that the symplectic structure $\sigma^{\mathcal{M}}$ is given by

$$
\sigma^{\mathcal{M}}\left([\dot{\psi}]_{*},[\dot{\psi}]_{*}\right)=\sigma^{\mathcal{S}}(\dot{s}, \dot{s})=\int_{M} \sigma(\dot{s}, \stackrel{s}{s}) \star 1
$$

for each pair of variations $[\dot{\psi}]_{*},[\dot{\psi}]_{*} \in T_{[\psi]} \mathcal{M}$. Note that using $\dot{\psi}, \dot{\psi} \in$ $T_{\psi} C^{\infty}\left(M ; \mathrm{S}^{3}\right)$ that represent $[\dot{\psi}]_{*}$ and $[\dot{\psi}]_{*}$, we have $\dot{s}=d \pi(\dot{\psi})$ and $\stackrel{\circ}{s}=d \pi(\dot{\psi})$. Thus one may also express

$$
\begin{aligned}
\sigma^{\mathcal{M}}\left([\dot{\psi}]_{*},[\circ]_{*}\right) & =\int_{M} \sigma(\dot{s}, \stackrel{s}{s}) \star 1 \\
& =\int_{M}\left(\pi^{*} \sigma\right)(\dot{\psi}, \stackrel{\circ}{\psi}) \star 1=\int_{M}(d \vartheta)(\dot{\psi}, \stackrel{\circ}{\psi}) \star 1 .
\end{aligned}
$$

On $\mathrm{S}^{3}, \vartheta=\hbar\langle i f, d f\rangle$ (where $f: \mathbb{S}^{3} \hookrightarrow \mathbb{H}$ ), and so $d \vartheta=\hbar\langle i d f \wedge d f\rangle$. Therefore

$$
\sigma^{\mathcal{M}}\left([\dot{\psi}]_{*},[\dot{\psi}]_{*}\right)=\int_{M} \hbar(\langle i \dot{\psi}, \dot{\psi}\rangle-\langle i \dot{\psi}, \dot{\psi}\rangle) \star 1=\int_{M} 2 \hbar\langle i \dot{\psi}, \dot{\psi}\rangle \star 1 .
$$

Now, we may rewrite ISF (9.3) as the following flow on $\mathcal{M}$

$$
\left\{\begin{array}{l}
{[\dot{\psi}]_{*}=\left[i \frac{\hbar}{2} \Delta^{S^{3}} \psi\right]_{*^{\prime}}}  \tag{9.5}\\
\psi \in[\psi] \text { is the solenoidal representative. }
\end{array}\right.
$$

by applying $[\cdot]_{*}$ to (9.3). This flow can then be characterized by the following Hamiltonian flow.

Theorem 9.2. The incompressible Schrödinger flow (9.5) is the Hamiltonian flow on $\mathcal{M}$ with respect to the Hamiltonian $\mathcal{E}_{\mathrm{ISF}}: \mathcal{M} \rightarrow \mathbb{R}$

$$
\mathcal{E}_{\mathrm{ISF}}([\psi]):=\int_{M} \frac{\hbar^{2}}{2}|d \psi|^{2} \star 1
$$

where $\psi$ is a representative (which is unique up to constant phase and therefore $\mathcal{E}_{\text {ISF }}$ is well-defined) of $[\psi]$ such that $\eta=\psi^{*} \vartheta$ is solenoidal.

Proof. To derive the Hamiltonian flow of $\mathcal{E}_{\text {ISF }}$ we take its variation with respect to a variation $[\dot{\psi}]_{*} \in T_{[\psi]} \mathcal{M}$. We consider a representative $(\psi, \dot{\psi}) \in$ $T C^{\infty}\left(M ; \mathrm{S}^{3}\right)$ so that $\eta=\psi^{*} \vartheta$ is solenoidal. Note that $\dot{\psi}$ can be replaced arbitrarily by the form $\dot{\psi}+\frac{i}{\hbar} p \psi$, where $p: M \rightarrow \mathbb{R}$ is arbitrary, since $[\dot{\psi}+$ $\left.\frac{i}{\hbar} p \psi\right]_{*}=[\stackrel{\circ}{\psi}]_{*}$. Under such a variation,

$$
\begin{aligned}
\stackrel{8}{\mathcal{I}}_{\mathrm{ISF}} & =\int_{M} \hbar^{2}\langle d \dot{\psi} \wedge \star d \psi\rangle \\
& =-\int_{M} \hbar^{2}\langle\dot{\psi}, \underbrace{d^{\nabla} \star d}_{\star \Delta^{S^{3}}} \psi\rangle
\end{aligned}
$$

using integration by parts. We ignore the boundary term by considering only interior variations. Here $d^{\nabla}$ is the covariant exterior derivative for $T S^{3}$-valued $(n-1)$-form $\star d \psi$ using the Levi-Civita connection on $T \mathrm{~S}^{3}$. To match an expression with the symplectic form $\sigma^{\mathcal{M}}$, we write

$$
\begin{aligned}
\stackrel{8}{\mathcal{E}}_{\text {ISF }} & =-\int_{M} \hbar^{2}\left\langle\dot{\psi}, \Delta^{S^{3}} \psi\right\rangle \star 1 \\
& =\int_{M} \hbar^{2}\left\langle i \dot{\psi},-i \Delta^{S^{3}} \psi\right\rangle \star 1 \\
& =\frac{\hbar}{2} \sigma^{\mathcal{M}}\left([\dot{\circ}]_{*}\left[-i \Delta^{S^{3}} \psi\right]_{*}\right) .
\end{aligned}
$$

That is,

$$
\operatorname{sgrad} \mathcal{E}_{\mathrm{ISF}}=-\frac{\hbar}{2}\left[i \Delta^{S^{3}} \psi\right]_{*} .
$$

Therefore the symplectic gradient flow $[\dot{\psi}]_{*}=-\operatorname{sgrad} \mathcal{E}_{\text {ISF }}$ gives (9.5).

Next, we recall (Eq. (6.6) in Section 6.5 with $\eta_{0}=0$ ) that $d \psi$ has the orthogonal splitting

$$
d \psi=\frac{1}{\hbar} \eta i \psi-\frac{1}{2} i \psi d s
$$

In particular,

$$
\begin{equation*}
|d \psi|^{2}=\frac{1}{\hbar^{2}}|u|^{2}+\frac{1}{4}|d s|^{2} \tag{9.6}
\end{equation*}
$$

Therefore, the energy $\mathcal{E}_{\text {ISF }}$ can be split into

Theorem 9.3. Define for each $[\psi] \in \mathcal{M}$ the Landau-Lifshitz energy

$$
\mathcal{E}_{\mathrm{LL}}([\psi])=\int_{M} \frac{\hbar^{2}}{8}|d s|^{2} \star 1
$$

Then under the Hamiltonian flow of $\mathcal{E}_{\mathrm{LL}}$ on $\left(\mathcal{M}, \sigma^{\mathcal{M}}\right), s=\Pi([\psi])$ satisfies the Landau-Lifshitz equation

$$
\dot{s}=\frac{\hbar}{2} s \times \Delta s
$$

Proof. For a variation $[\dot{\psi}]_{*}$ which gives rise to a variation $\AA \in T_{S} \mathcal{S}$, the variation in the energy is given by

$$
\begin{aligned}
\stackrel{\circ}{\mathcal{E}}_{\mathrm{LL}} & =\int_{M} \frac{\hbar^{2}}{4}\langle d \stackrel{\circ}{\wedge} \star d s\rangle \\
& =-\int_{M} \frac{\hbar^{2}}{4}\langle\stackrel{\circ}{s}, \underbrace{d^{\nabla} \star d}_{\star \Delta^{s^{2}}} s\rangle
\end{aligned}
$$

Note that the symplectic form $\sigma^{\complement}$ is given by that

$$
\begin{aligned}
\sigma^{\delta}(\dot{s}, \dot{s}) & =\int_{M} \sigma(\dot{s}, \dot{s}) \star 1=\int_{M} \frac{\hbar}{2} \sigma_{\mathrm{S}^{2}}(\dot{s}, \dot{s}) \star 1 \\
& =\int_{M} \frac{\hbar}{2}\langle s, \dot{s} \times \dot{s}\rangle \star 1=-\int_{M} \frac{\hbar}{2}\langle\dot{s}, s \times \stackrel{\circ}{s}\rangle \star 1
\end{aligned}
$$

So

$$
\begin{aligned}
\stackrel{\circ}{\mathcal{E}}_{\mathrm{LL}} & =-\int_{M} \frac{\hbar^{2}}{4}\left\langle\stackrel{̊}{s}, \Delta^{S^{2}} s\right\rangle \star 1 \\
& =-\int_{M} \frac{\hbar^{2}}{4}\langle\stackrel{s}{s},-s \times(s \times \Delta s)\rangle \star 1 \\
& =\sigma^{\mathcal{S}}(\stackrel{s}{s},-s \times \Delta s)
\end{aligned}
$$

Therefore $d \Pi\left(\operatorname{sgrad} \mathcal{E}_{\mathrm{LL}}\right)=-s \times \Delta s$. Hence, by taking $d \Pi$ on both sides of the symplectic gradient flow $[\dot{\psi}]_{*}=-\operatorname{sgrad} \mathcal{E}_{\text {LL }}$ we obtain

$$
\dot{s}=\frac{\hbar}{2} s \times \Delta s
$$

Corollary 9.1. By the orthogonal splitting (9.7), one observes that under an ISF (which is the symplectic gradient flow of $\mathcal{E}_{\mathrm{ISF}}$ according to Theorem 9.2), the vorticity Clebsch variable s satisfies (9.4) as a consequence of Theorem 8.1 and Theorem 9.3.

### 9.3 ISF with Berger Metric

In Section 9.1 we discover that under an ISF $s$ satisfies a modified Euler equation

$$
\dot{s}+\mathcal{L}_{u} s=\frac{\hbar}{2} s \times \Delta s
$$

The constant $\hbar$ appears to be the parameter for the perturbation of the Landau-Lifshitz term. However, as we vary the parameter $\hbar$ with a fixed state $[\psi]$, we have a change not only in the coefficient in front of $s \times \Delta s$, but also the value of $u=\eta^{\sharp}=\hbar\left(\psi^{*} \vartheta\right)^{\sharp}$.

An ideal form for the Landau-Lifshitz-modified Euler equation would be

$$
\begin{equation*}
\dot{s}+\mathcal{L}_{u} s=\frac{\epsilon^{2} \hbar}{2} s \times \Delta s \tag{9.8}
\end{equation*}
$$

with an additional parameter $\epsilon \geq 0$ independent of $\hbar$. In that case, one may vary the parameter $\epsilon$ and leave the values of $\psi, s, \hbar$ and $\eta$ intact. When $\epsilon=0$ (9.8) becomes the Euler equation. When $\epsilon=1$ it recovers ISF. When $\epsilon \rightarrow$ $\infty$ the Landau-Lifshitz part dominates the dynamics, and (9.8) becomes a Landau-Lifshitz equation after a proper time rescaling. For other values of $\epsilon$ (9.8) gives a dynamics interpolating among the Euler equation, LandauLifshitz equation, and ISF.

Now, using what we learn from Section 9.2, (9.8) is the symplectic gradient flow of

$$
\begin{align*}
\mathcal{E}_{\mathrm{ISF}}^{\epsilon}([\psi]) & :=\mathcal{E}_{\text {Euler }}([\psi])+\epsilon^{2} \mathcal{E}_{\mathrm{LL}}([\psi]) \\
& =\int_{M} \frac{1}{2}|u|^{2} \star 1+\int_{M} \frac{\epsilon^{2} \hbar^{2}}{8}|d s|^{2} \star 1 . \tag{9.9}
\end{align*}
$$

As introduced in Section 6.5 (with the special case $\eta_{\mathrm{o}}=0$ ) the energy $\mathcal{E}_{\text {ISF }}^{\epsilon}$ can be expressed using a Berger metric (6.7) on $\mathbb{S}^{3}$

$$
\mathcal{E}_{\mathrm{ISF}}^{\epsilon}([\psi])=\int_{M} \frac{\hbar^{2}}{2}|d \psi|_{\epsilon}^{2} \star 1 .
$$

Hence we call the flow (9.8) a Berger-ISF.
Next we derive the evolution equation for $\psi$ under a Berger-ISF.

Lemma 9.1. Let $\nabla^{\eta} \psi=d \psi-i \frac{1}{\hbar} \eta \psi$ where $\eta=\psi^{*} \vartheta=u^{b}$ is solenoidal. Then

$$
\begin{equation*}
\left|\nabla^{\eta} \psi\right|^{2}=\frac{1}{4}|d s|^{2} \tag{9.10}
\end{equation*}
$$

Proof. By direct expansion

$$
\begin{aligned}
\left|\nabla^{\eta} \psi\right|^{2} \star 1 & =\operatorname{Re}\left(\overline{\left(d \psi-i \frac{1}{\hbar} \eta \psi\right)} \wedge \star\left(d \psi-i \frac{1}{\hbar} \eta \psi\right)\right) \\
& =\operatorname{Re}\left(\left(d \bar{\psi}+\frac{1}{\hbar} \eta \bar{\psi} i\right) \wedge \star\left(d \psi-i \frac{1}{\hbar} \eta \psi\right)\right) \\
& =\operatorname{Re}(d \bar{\psi} \wedge \star d \psi)+2 \frac{1}{\hbar} \eta \wedge \star \underbrace{\operatorname{Re}(\bar{\psi} i d \psi)}_{-\eta / \hbar}+\frac{1}{\hbar^{2}} \eta \wedge \star \eta \\
& =|d \psi|^{2} \star 1-\frac{1}{\hbar^{2}}|u|^{2} \star 1 .
\end{aligned}
$$

Finally, by (9.6), $|d \psi|^{2}-\frac{1}{\hbar^{2}}|u|^{2}=\frac{1}{4}|d s|^{2}$.
Now, by Lemma 9.1,

$$
\frac{\hbar^{2}}{2} \int_{M}\left|\nabla^{\eta} \psi\right|^{2} \star 1=\mathcal{E}_{\mathrm{LL}}
$$

Hence we may rearrange the terms in (9.9) as

$$
\begin{align*}
\mathcal{E}_{\mathrm{ISF}}^{\epsilon} & =\mathcal{E}_{\mathrm{Euler}}+\epsilon^{2} \mathcal{E}_{\mathrm{LL}} \\
& =\underbrace{\mathcal{E}_{\text {Euler }}+\mathcal{\varepsilon}_{\mathrm{LL}}}_{\mathcal{\varepsilon}_{\mathrm{ISF}}}-\left(1-\epsilon^{2}\right) \mathcal{E}_{\mathrm{LL}} \\
& =\frac{\hbar^{2}}{2} \int_{M}|d \psi|^{2} \star 1-\left(1-\epsilon^{2}\right) \frac{\hbar^{2}}{2} \int_{M}\left|\nabla^{\eta} \psi\right|^{2} \star 1 \tag{9.11}
\end{align*}
$$

By a similar derivation as in the proof of Theorem 9.2, the symplectic gradient flow of $\mathcal{E}_{\text {ISF }}^{\epsilon}$ on $\left(\mathcal{M}, \sigma^{\mathcal{M}}\right)$ is characterized by the following evolution of a solenoidal $\psi$

$$
\left\{\begin{array}{l}
\dot{\psi}=i \frac{\hbar}{2} \Delta \psi-i\left(1-\epsilon^{2}\right) \frac{\hbar}{2} \Delta^{\eta} \psi-i \frac{1}{\hbar} p \psi  \tag{9.12}\\
\langle i \psi, \Delta \psi\rangle=\mathrm{o}
\end{array}\right.
$$

Note that $i \Delta^{S^{3}} \psi$ in the proof of Theorem 9.2 is replaced by $i \Delta \psi$ by letting their difference absorbed into the $i \frac{1}{\hbar} p \psi$ term. A similar argument applies to $i\left(\Delta^{\eta}\right)^{\mathrm{S}^{3}}$.

Now expand

$$
\begin{aligned}
\Delta^{\eta} \psi & =-\left(d-\frac{i}{\hbar} \eta \wedge\right)^{\dagger}\left(d-\frac{i}{\hbar} \eta\right) \psi \\
& =\left(\star d \star-\frac{i}{\hbar} \iota_{u}\right)\left(d \psi-\frac{i}{\hbar} \eta \psi\right) \\
& =\Delta \psi-2 i \frac{1}{\hbar} \mathcal{L}_{u} \psi-\frac{1}{\hbar^{2}}|u|^{2} \psi-\frac{i}{\hbar} \underbrace{(\star d \star \eta)}_{=0} \psi .
\end{aligned}
$$

Hence the time evolution equation (9.12) becomes

$$
\begin{aligned}
\dot{\psi} & =i \frac{\hbar}{2} \Delta \psi-i\left(1-\epsilon^{2}\right) \frac{\hbar}{2} \Delta \psi-\left(1-\epsilon^{2}\right) \mathcal{L}_{u} \psi+i\left(1-\epsilon^{2}\right) \frac{1}{2 \hbar}|u|^{2}-i \frac{1}{\hbar} p \psi \\
& =i \epsilon^{2} \frac{\hbar}{2} \Delta \psi-\left(1-\epsilon^{2}\right) \mathcal{L}_{u} \psi-i \frac{1}{\hbar}\left(p-\left(1-\epsilon^{2}\right) \frac{|u|^{2}}{2}\right) \psi .
\end{aligned}
$$

From here we conclude the following theorem.
Theorem 9.4. For each $\epsilon \geq 0$, the symplectic gradient flow of $\mathcal{E}_{\mathrm{ISF}}^{\epsilon}=\mathcal{E}_{\text {Euler }}+$ $\epsilon^{2} \mathcal{E}_{\mathrm{LL}}$ on $\left(\mathcal{M}, \sigma^{\mathcal{M}}\right)$ is described by

$$
\left\{\begin{array}{l}
\frac{\partial}{\partial t} \psi+\left(1-\epsilon^{2}\right) \mathcal{L}_{u} \psi=i \epsilon^{2} \frac{\hbar}{2} \Delta \psi-i \frac{1}{\hbar}\left(p-\left(1-\epsilon^{2}\right) \frac{|u|^{2}}{2}\right) \psi  \tag{9.13}\\
\langle i \psi, \Delta \psi\rangle=0
\end{array}\right.
$$

where $u=\eta^{\#}=\hbar\langle i \psi, d \psi\rangle^{\#}$. Under this flow, the vorticity Clebsch variable $s=$ $\bar{\psi} i \psi$ satisfies

$$
\begin{equation*}
\frac{\partial}{\partial t} s+\mathcal{L}_{u} s=\epsilon^{2} \frac{\hbar}{2} s \times \Delta s \tag{9.14}
\end{equation*}
$$

Proof. See the derivation above.

One may replace the pressure term $\left(p-\left(1-\epsilon^{2}\right)|u|^{2} / 2\right)$ by another scalar function $\tilde{p}$ since the term serves only as the pressure projection. However, we keep the expression for the following discussion.

When $\epsilon^{2}=1$, (9.13) becomes the incompressible Schrödinger equation. In particular, the non-linear self-advection term $\mathcal{L}_{u} \psi$ vanishes. Importantly, up to the pressure projection (which determines $p$ ) the equation is linear

$$
\frac{\partial}{\partial t} \psi=i \frac{\hbar}{2} \Delta \psi-i \frac{1}{\hbar} p \psi
$$

Even so, the advection effect $\mathcal{L}_{u} s$ in the $s$ equation (9.14) remains intact.
At this choice of parameter $\epsilon^{2}=1$, the pressure term consists only of $p$. In the context of quantum mechanics, the term $p$ is a physical potential
defined on an Eulerian coordinate, as opposed to the Lagrangian pressure $\left(p-|u|^{2} / 2\right)$ seen from a Lagrangian coordinate.
When $\epsilon^{2}=0$, the first line of $(9.13)$ becomes

$$
\begin{equation*}
\frac{\partial}{\partial t} \psi+\mathcal{L}_{u} \psi=-i \frac{1}{\hbar}\left(p-\frac{|u|^{2}}{2}\right) \psi . \tag{9.15}
\end{equation*}
$$

The vorticity Clebsch variable is purely advected by the velocity

$$
\frac{\partial}{\partial t} s+\mathcal{L}_{u} s=\mathrm{o}
$$

and the phase of $\psi$ is shifted in the rate of the Lagrangian pressure ( $p-|u|^{2} / 2$ ). To see the Lagrangian nature of (9.15), consider the flow map $\phi_{t}$ generated by $u$. Then on the Lagrangian coordinate, the pulled-back variables satisfy

$$
\frac{\partial}{\partial t}\left(s \circ \phi_{t}\right)=0, \quad \frac{\partial}{\partial t}\left(\psi \circ \phi_{t}\right)=\left(-i \frac{1}{\hbar}\left(p-\frac{|u|^{2}}{2}\right) \psi\right) \circ \phi_{t} .
$$

The latter implies that the pullback 1-form $\phi_{t}^{*} \eta$ satisfies

$$
\frac{\partial}{\partial t}\left(\phi_{t}^{*} \eta\right)=\frac{\partial}{\partial t}\left(\phi_{t}^{*} \psi^{*} \vartheta\right)=\frac{\partial}{\partial t}\left(\left(\psi \circ \phi_{t}\right)^{*} \vartheta\right)=-d\left(\left(p-\frac{|u|^{2}}{2}\right) \circ \phi_{t}\right)
$$

and recovers Lagrange's equation (2.14).
Remark 9.1. As $\epsilon$ is tuned from o to 1 , the Euler equation represented by velocity Clebsch map (9.15) blends into a Schrödinger equation. At the same time, the pressure term changes from a Lagrangian pressure to an Eulerian pressure. Meanwhile, the evolution equation of $s$ is modified by an increasing Landau-Lifshitz term.

### 9.4 Momentum Equation

In this section, we derive the evolution equation for $\eta$ under an incompressible Schrödinger flow. To keep generality we consider a Berger-ISF with parameter $\epsilon$. Its evolution equation is given by (9.13), and the corresponding evolution equation for $s$ is given by (9.14). The original ISF is the special case of $\epsilon=1$.

Theorem 9.5 (Momentum equation). Under the Berger-ISF (9.13), the velocity 1-form $\eta$ satisfies

$$
\begin{equation*}
\frac{\partial}{\partial t} \eta+\mathcal{L}_{u} \eta=-\epsilon^{2} \frac{\hbar^{2}}{4}\langle\Delta s, d s\rangle-d\left(p-\frac{|u|^{2}}{2}+\epsilon^{2} \frac{\hbar^{2}}{8}|d s|^{2}\right), \quad d \star \eta=0 \tag{9.16}
\end{equation*}
$$

where s satisfies (9.14). In terms of the velocity vector $u$ the momentum equation is given by

$$
\frac{\partial}{\partial t} u+\nabla_{u} u=-\epsilon^{2} \frac{\hbar^{2}}{4}\langle\Delta s, \operatorname{grad} s\rangle-\operatorname{grad}\left(p+\epsilon^{2} \frac{\hbar^{2}}{8}|d s|^{2}\right), \quad \operatorname{div} u=0
$$

Proof. To study the time evolution of $\eta$ we take the time derivative to $\eta=$ $\psi^{*} \vartheta$ :

$$
\begin{align*}
\dot{\eta} & =d\left(\psi^{*} \iota_{\dot{\psi}} \vartheta\right)+\psi^{*} \iota_{\dot{\psi}}(d \vartheta)=d\left(\vartheta_{\psi}(\dot{\psi})\right)+\psi^{*} \iota_{\dot{\psi}}\left(\pi^{*} \sigma\right) \\
& =d\left(\vartheta_{\psi}(\dot{\psi})\right)+\psi^{*} \pi^{*} \iota_{\dot{j}} \sigma=d\left(\vartheta_{\psi}(\dot{\psi})\right)+s^{*} \iota_{\dot{s}} \sigma \tag{9.18}
\end{align*}
$$

Now we substitute (9.13) and (9.14) for $\dot{\psi}$ and $\dot{s}$. Note that $\vartheta_{\psi}(\dot{\psi})=\hbar\langle i \psi, \dot{\psi}\rangle$, and therefore

$$
\begin{aligned}
\vartheta_{\psi}(\dot{\psi}) & =-\left(1-\epsilon^{2}\right) \underbrace{\hbar\left\langle i \psi, \mathcal{L}_{u} \psi\right\rangle}_{\hbar\langle i \psi, d \psi\rangle(u)=|u|^{2}}+\epsilon^{2} \frac{\hbar^{2}}{2} \underbrace{\langle i \psi, i \Delta \psi\rangle}_{\langle\psi, \Delta \psi\rangle}-p+\left(1-\epsilon^{2}\right) \frac{1}{2}|u|^{2} \\
& =-\left(p+\left(1-\epsilon^{2}\right) \frac{|u|^{2}}{2}-\epsilon^{2} \frac{\hbar^{2}}{2}\langle\psi, \Delta \psi\rangle\right) .
\end{aligned}
$$

Now, for the $s^{*} \iota_{\dot{s}} \sigma$ we have

$$
s^{*} \iota_{\dot{s}} \sigma=s^{*} \iota_{-\mathcal{L}_{u}} \sigma \sigma+\epsilon^{2} \frac{\hbar}{2} s^{*} \iota_{s \times \Delta s} \sigma .
$$

The first summand is

$$
s^{*} \iota_{-\mathcal{L}_{u} s} \sigma=-s^{*} \iota_{d s(u)} \sigma=-\iota_{u} s^{*} \sigma=-\iota_{u} d \eta ;
$$

and the second summand can be written as

$$
\begin{aligned}
\epsilon^{2} \frac{\hbar}{2} s^{*} \iota_{s \times \Delta s} \sigma & =\epsilon^{2} \frac{\hbar^{2}}{4} s^{*} \iota_{s \times \Delta s} \sigma_{\mathbb{S}^{2}} \\
& =\epsilon^{2} \frac{\hbar^{2}}{4}\langle s,(s \times \Delta s) \times d s\rangle \\
& =-\epsilon^{2} \frac{\hbar^{2}}{4}\langle s \times \Delta s, s \times d s\rangle \\
& =-\epsilon^{2} \frac{\hbar^{2}}{4}\langle\Delta s, d s\rangle .
\end{aligned}
$$

Note that $-\iota_{u} d \eta$ can be written as $-\iota_{u} d \eta-d\left(\iota_{u} \eta\right)+d\left(\iota_{u} \eta\right)=-\mathcal{L}_{u} \eta+d|u|^{2}$. Combining the terms we obtain the evolution equation of $\eta$

$$
\frac{\partial}{\partial t} \eta+\mathcal{L}_{u} \eta=-\epsilon^{2} \frac{\hbar^{2}}{4}\langle\Delta s, d s\rangle-d\left(p-\left(1+\epsilon^{2}\right) \frac{|u|^{2}}{2}-\epsilon^{2} \frac{\hbar^{2}}{2}\langle\psi, \Delta \psi\rangle\right) .
$$

Now apply Lemma 6.1 in Appendix 6.A (with $\eta_{0}=0$ ) to get

$$
-\epsilon^{2} \frac{\hbar^{2}}{2}\langle\psi, \Delta \psi\rangle=-\epsilon^{2} \frac{\hbar^{2}}{2} \operatorname{Re}(\bar{\psi} \Delta \psi)=\epsilon^{2} \frac{1}{2}|u|^{2}+\epsilon^{2} \frac{\hbar^{2}}{8}|d s|^{2} .
$$

Therefore

$$
\frac{\partial}{\partial t} \eta+\mathcal{L}_{u} \eta=-\epsilon^{2} \frac{\hbar^{2}}{4}\langle\Delta s, d s\rangle-d\left(p-\frac{|u|^{2}}{2}+\epsilon^{2} \frac{\hbar^{2}}{8}|d s|^{2}\right) .
$$

The actual modifying term in momentum equation (9.16) that differs from the Euler equation is $-\epsilon^{2} \frac{\hbar^{2}}{4}\langle\Delta s, d s\rangle$. The exact differential term $-d(p-$ $|u|^{2} / 2+\epsilon^{2} \hbar^{2} / 8|d s|^{2}$ ) is determined by the incompressibility constraint.

### 9.5 ISF in Advection Form

In this section, we transform both (9.14) and (9.16) into alternative expressions that may provide more insight in their dynamics. In the end of this section, we will obtain that the equations of motion are given by pure advections

$$
\left\{\begin{array}{l}
\frac{\partial}{\partial t} \eta+\mathcal{L}_{\hat{u}} \eta=-d \tilde{p}, \quad d \star \eta=0 \\
\frac{\partial}{\partial t} s+\mathcal{L}_{\hat{u}} s=0
\end{array}\right.
$$

with a suitably chosen vector field $\hat{u}$ perturbed from $u=\eta^{\sharp}$.
The transformation we will make requires $s: M \rightarrow \mathbb{S}^{2}$ be a submersion. Let us briefly state the requirement.

Consider that the dimension of the domain $\operatorname{dim}(M) \geq \operatorname{dim}\left(\mathbb{S}^{2}\right)=2$. Let $s: M \rightarrow \mathbb{S}^{2}$ be a smooth map. A point $x \in M$ is called a regular point if the linear map $\left.d s\right|_{x}: T_{x} M \rightarrow T_{S(x)} \mathrm{S}^{2}$ has full rank $\operatorname{dim}\left(\mathrm{S}^{2}\right)=2$. The map $s$ is said to be a submersion on an open set $U \subset M$ if every point in $U$ is a regular point.

For each regular point $x \in M$, consider the $p$ seudo-inverse $\left(d s^{-1}\right)_{x}$ defined such that

1. $(d s)_{x} \circ\left(d s^{-1}\right)_{x}$ is the identity map on $T_{S(x)} \mathrm{S}^{2}$, and
2. $\operatorname{im}\left(d s^{-1}\right)_{x} \subset T_{x} M$ is the orthogonal complement of $\operatorname{ker}(d s)_{x}$.

The second condition is equivalent to that $\operatorname{im}\left(d s^{-1}\right)$ is orthogonal to the vortex directions (subspace) $\left\{\mathbf{w} \in T_{x} M \mid \iota_{\mathbf{w}} \omega=\mathrm{o}\right\}$. The first condition allows us to perform commutation of pullback and interior product with the aid of the pseudo-inverse

$$
s^{*} \iota_{\S} \alpha=\iota_{d s^{-1}(\S)} s^{*} \alpha
$$

for each $\AA \in \Gamma\left(s^{*} T \mathbb{S}^{2}\right)$ (i.e. $\left.\stackrel{\circ}{s}(x) \in T_{S(x)} \mathbb{S}^{2}\right)$ and $\alpha \in \Omega^{k}\left(\mathbb{S}^{2}\right)$.
Remark 9.2. The target space $\mathrm{S}^{2}$ can be replaced by a general manifold $\Sigma$ (with $\operatorname{dim}(\Sigma) \leq \operatorname{dim}(M))$ and the above definitions and arguments still follow.

Theorem 9.6. Under a Berger-ISF (9.13) with parameter $\epsilon$, at each regular point of $s$ on $M$ the velocity 1-form $\eta$ and $s$ satisfy

$$
\left\{\begin{array}{l}
\frac{\partial}{\partial t} \eta+\mathcal{L}_{\hat{u}} \eta=-d \tilde{p}, \quad d \star \eta=0  \tag{9.19}\\
\frac{\partial}{\partial t} s+\mathcal{L}_{\hat{u}} s=0
\end{array}\right.
$$

where

$$
\begin{equation*}
\hat{u}:=u-\epsilon^{2} \frac{\hbar}{2} d s^{-1}(s \times \Delta s) . \tag{9.20}
\end{equation*}
$$

Proof. Recall that under a Berger-ISF (9.13), $s$ satisfies Equation (9.14)

$$
\dot{s}+\mathcal{L}_{u} s=\epsilon^{2} \frac{\hbar}{2} s \times \Delta s
$$

By inserting an identity $(d s) \circ\left(d s^{-1}\right)$ on the right-hand side, we have

$$
\begin{aligned}
\dot{s}+\mathcal{L}_{u} s & =\epsilon^{2} \frac{\hbar}{2} d s\left(d s^{-1}(s \times \Delta s)\right) \\
& =\epsilon^{2} \frac{\hbar}{2} \mathcal{L}_{d s^{-1}(s \times \Delta s)} s .
\end{aligned}
$$

Therefore, using (9.20) we obtain

$$
\dot{s}+\mathcal{L}_{\hat{u}} s=0
$$

For the velocity equation, we follow (9.18) and obtain the time derivative of $\eta$

$$
\dot{\eta}=-d \tilde{\tilde{p}}+s^{*} \iota_{\dot{s}} \sigma
$$

for some exact differential $d \tilde{\tilde{p}}$. Using $\dot{s}+\mathcal{L}_{\hat{u}} s=\mathrm{o}$ we have

$$
\begin{aligned}
\dot{\eta} & =-d \tilde{\tilde{p}}+s^{*} \iota_{-} d s(\hat{u}) \\
& =-d \tilde{\tilde{p}}-\iota_{\hat{u}} d \eta=-d \tilde{\tilde{p}}-\iota_{\hat{u}} \eta
\end{aligned}
$$

for some exact differential $\tilde{p}$.

Note that the description of (Berger-)ISF using (9.19) is valid only on regular points of $s$. It is not clear to what extent $\hat{u}$ can be understood at the point of vanishing vorticity that occurs in crossing or branching vortex tubes. Nevertheless, in a vortex tube consisting of regular points, (9.19) is an informative description that tells us how the dynamics of the vortex is modified.

Corollary 9.2. The vorticity 2-form $\omega=d \eta=s^{*} \sigma$ is Lie advected

$$
\begin{equation*}
\frac{\partial}{\partial t} \omega+\mathcal{L}_{\hat{u}} \omega=\mathrm{o} \tag{9.21}
\end{equation*}
$$

by the modified velocity $\hat{u}$ (9.20) determined by $u$ and the underlying vorticity Clebsch variable s. For a vortex filament where vorticity is concentrated along a thin curve $\gamma: \mathrm{S}^{1} \rightarrow M$, the filament is advected by the modified velocity $\hat{u}$

$$
\begin{equation*}
\frac{\partial}{\partial t} \gamma=\left.\hat{u}\right|_{\gamma} . \tag{9.22}
\end{equation*}
$$

## 9.6* Broken Gauge Symmetry

In this section we return to the discussion on the gauge symmetry in a Clebsch representation (Section 8.3). As discussed in Section 8.3, the Hamiltonian for the Euler flow is gauge invariant under the gauge group $\operatorname{Ham}\left(\mathbb{S}^{2}, \sigma\right)$ acting on $\mathcal{S}=C^{\infty}\left(M ; \mathbb{S}^{2}\right)$ by post-composition $s \mapsto \tau \circ s$, for $\tau \in \operatorname{Ham}\left(\mathbb{S}^{2}, \sigma\right)$. However, these gauge symmetries are redundant for Euler fluids [Jerrold Marsden and Weinstein, 1983], and their associated conservation laws give no more integrals of motion at the level of $\eta$. In an ISF, due to the additional Landau-Lifshitz energy in the Hamiltonian, most of the above gauge symmetries are no longer present.

In Section 8.3, we see that under the group action of $\operatorname{Ham}\left(\mathcal{S}^{2}, \sigma\right)$ on $\mathcal{S}$, the solenoidal velocity 1 -form $\eta$ remains invariant. Since the Hamiltonian $\mathcal{E}_{\text {Euler }}=\int_{M} \frac{1}{2} \eta \wedge \star \eta$ for an Euler flow is written only in terms of $\eta$, it is also $\operatorname{Ham}\left(\mathrm{S}^{2}, \sigma\right)$-gauge invariant. The gauge invariance gives rise to the conservation of $\int_{M}(U \circ s) \star 1$ for every smooth function $U: S^{2} \rightarrow \mathbb{R}$ (Corollary 8.3). However, these integrals of motion only amount to the fact that the hidden variable $s$ is advected by the flow, revealing no new integrals of motion for the Euler equation at the level of physical variable $\eta$. The variable $s$ has a large degree of freedom in representing fluid states that is redundant.
The additional Landau-Lifshitz energy $\mathcal{E}_{\mathrm{LL}}=\frac{\hbar^{2}}{8} \int_{M}|d s|^{2} \star 1$ breaks most of the above gauge symmetries. A generic post-composition $s \mapsto \tau \circ s$ with a $\operatorname{map} \tau \in \operatorname{Ham}\left(\mathbb{S}^{2}, \sigma\right)$ changes the Dirichlet energy $\int_{M}|d s|^{2} \star 1$. Accordingly, for an arbitrary function $U \in C^{\infty}\left(\mathbb{S}^{2}, \mathbb{R}\right)$, the integral $\int_{M}(U \circ s) \star 1$ no longer need to be invariant.

The Euler equation Clebsch variable $s$ is hidden in the Euler equation, whose momentum equation is written only in terms $\eta$. On the contrary, the momentum equation for ISF needs to be coupled with the evolution equation for $s$; otherwise ISF would have the same gauge symmetry $\eta$ has. The Clebsch variable $s$ is no longer a hidden variable but an additional quantity that interacts with $\eta$.

Although most of the gauge symmetries from $\operatorname{Ham}\left(\mathbb{S}^{2}, \sigma\right)$ are broken in an ISF, there are still remaining symmetries. The Dirichlet energy $\int_{M}|d s|^{2} \star 1$ is invariant under rigid rotations on $\mathrm{S}^{2}$. The associated conserved quantities are $\int_{M}\langle a, s\rangle \star 1$ for arbitrary constant $\mathbb{R}^{3}$ vectors $a$.

## LANDAU-LIFSHITZ MODIFIED FLUID

In Chapter 9 we showed that the dynamics of ISF arise from the standard kinetic energy of $\eta$, which would correspond to an ideal fluid, with an $\frac{\hbar^{2}}{8}$ multiple of the Dirichlet energy of $s$ added in. The latter by itself would have resulted in Landau-Lifshitz dynamics. What is the impact of this modification from the point of view of incompressible fluid simulation? We begin with some basic observations.

Vorticity in actual 3D low-viscous fluid dynamics has the tendency to concentrate in one-dimensional filaments. Hence for a large set of interesting simulation scenarios, the vorticity vanishes in most portions of the fluid domain exterior to a small neighborhood of vortex filaments.

The initial data $\left.\psi\right|_{t=0}$ for ISF capturing such a scenario must have the as-
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-138.jpg?height=746&width=847&top_left_y=1405&top_left_x=642)

Figure 10.1: A slice of a 3D domain with a vortex filament moving to the left. The color on the plane visualizes s according to the color map on the sphere. Large regions of the plane are nearly the same color, i.e., covering a small area on the sphere $=$ little vorticity. As the filament translates the gridded region maps to an ever larger area on the sphere. The preimage of the equator (the level set $\left|\psi_{1}\right|^{2}-$ $\left|\psi_{2}\right|^{2}=$ o) visualizes the vortex tube (see also Fig. 1.5).
sociated vorticity Clebsch map $s$ satisfy $s^{*} \sigma=\mathrm{o}$ on most parts of the fluid domain. With an additional request that $|d s|$ should be as small as possible, $s$ would be asymptotically constant for most part of the domain where the vorticity vanishes.

ISF is invariant under $S U(2)$ transformations on $\Psi=\left(\psi_{1}, \psi_{2}\right)^{\top} \in \mathbb{C}^{2}$. (In terms of quaternions the system is invariant under multiplying unit quaternions on $\psi$ from the right.) Consequently the system is invariant under the $S O(3)$ actions on $s$. We exploit this symmetry by initializing the simulations with $\left|\psi_{1}\right|^{2}=1$ and $\left|\psi_{2}\right|^{2}=0$, i.e. $s=(1,0,0)$, for most part of the domain exterior to vortices. Only near the zero set of $\psi_{1}$, which generically consists of closed curves in ${ }_{3} \mathrm{D}$ (or curves beginning and ending on the boundary), does $\left|\psi_{2}\right|$ take up significant mass due to $|\psi|^{2}=1$. Near those points where $\psi_{1}=0$ the spin vector $s$ moves toward ( $-1,0,0$ ). In between, $s$ sweeps over the entire sphere $\mathbb{S}^{2}$ (Fig. 10.1), representing a vortex with strength $\frac{\hbar}{2} \operatorname{Area}\left(\mathrm{~S}^{2}\right)=2 \pi \hbar$. In particular, under such a construction filaments in ISF carry vorticity quantized to $2 \pi \hbar$.

This characterization of $s$ continues to hold as the simulation progresses since the mean of each component of $s$ is an invariant of the flow. This invariance follows from the $S O$ (3) gauge symmetry on $s$ (Section 9.6).

But what does this imply for the Landau-Lifshitz energy? Since the Dirichlet integrand is bounded below by the absolute value of the area density, $\omega=s^{*} \sigma$ implies

$$
\frac{1}{2}|d s|^{2} \geq \frac{2}{\hbar}|\mathbf{w}|,
$$

with equality achieved for a conformal map $s$. Here $|\mathbf{w}|$ is the norm of the corresponding vorticity vector field $\mathbf{w}=(\star \omega)^{\sharp}$. In practice we observe that the Landau-Lifshitz energy is near this minimum and hence the Dirichlet integrand supported mostly in the vicinity of the filaments, with an integral over a surface transversal to the filament yielding approximately $2 \pi \hbar$ independent of the thickness of the filament. Consequently, the integral of the Dirichlet energy for a tubular neighborhood of a filament $\Gamma$ yields $\approx 4 \pi$ Length $(\Gamma)$.

What then are the dynamics consequences of the Landau-Lifshitz energy term? In examples of ISF we observe phenomena which are difficult to reproduce using grid simulations without excessively high resolution (Figs. 1.1,
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-140.jpg?height=500&width=1321&top_left_y=254&top_left_x=397)

Figure 10.2: Energy plot for the leapfrogging vortex filaments (Fig. 1.1). The kinetic energy tracks closely between HJWENO/MacCormack and ISF. The additional Landau-Lifshitz component in the latter stays nearly constant, keeping the vortex filaments "alive" in ISF.
10.3, 1.3). Since such phenomena arise from vortex filaments whose thickness is comparable to the grid resolution, a velocity or vorticity representation of fluids tends to lose the energy contained in the vortex cores, directly impacting the dynamics of the coherent vortical structures. For ISF the Landau-Lifshitz energy, proportional to the total length of the filaments independent of their thickness, maintains this otherwise lost energy. Fig. 10.2 demonstrates this quantitatively for the simple example of the leapfrogging vortex filaments of Fig. 1.1.

Additionally, Length( $\Gamma$ ) of filaments is also the Hamiltonian of the local induction approximation (LIA) for the motion of thin vortex filaments [Rios, 1906; Hasimoto, 1972] (see [Saffman, 1992, Ch. 11] for a modern exposition). This hints at a deeper relation between the LIA and the LandauLifshitz term in ISF. Fig. 10.3 shows the simulation of the Teapot/Bunny collision using Eulerian HJWENO/MacCormack (top left) and a Lagrangian filament method [Weißmann and Pinkall, 2010] (top center), comparing it to our ISF (top right; see also Fig. 1.4 bottom right). Remarkably, the Lagrangian filament simulation which uses sub-grid scale vortex thickness and explicitly includes the LIA forces, yields qualitatively the same results as our Eulerian ISF method.

In Section 10.1 we analyse the effect of the Landau-Lifshitz term in the scale of $\hbar$. In particular we show that ISF is a regular perturbation to the Euler equation when approximating a smooth vorticity field. In Section 10.3 we
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-141.jpg?height=1438&width=1343&top_left_y=257&top_left_x=399)

Figure 10.3: Frame 270 from colliding Teapot/Bunny simulation using Eulerian HJWENO/MacCormack (top left), Lagrangian vortex filaments [Weißmann and Pinkall, 2010] (top center), and our Eulerian ISF (top right). The center bottom shows the filaments of Weißmann and Pinkall which, at thickness 0.017 m , are below the grid size of the ISF simulation. ISF vortex tubes $\left(\left|\psi_{1}\right|^{2}-\left|\psi_{2}\right|^{2}=0\right)$ and their cores $\left(\psi_{1}=0\right)$ are shown on the bottom right.
study the effect of the Landau-Lifshitz term to vortex dynamics with a finite $\hbar$, giving a precise statement about the LIA effect mentioned above .

### 10.1 Scaling Laws

Under ISF the velocity $\eta$ satisfies (9.16), which is the Euler equation modified by a term involving $s$. Let us consider the case $\epsilon=1$ which is the case
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-142.jpg?height=560&width=1378&top_left_y=235&top_left_x=376)

Figure 10.4: The velocity field of Fig. 7.1 on a $2 D$ domain (left) and its S$^{2}$-valued vorticity Clebsch map $s$ with $\hbar=0.15$ (middle) and $\hbar=0.05$ (right). The map s is visualized via an earth texture on $\mathrm{S}^{2}$. When $\hbar$ is scaled down by a factor of 3 , the number of copies of each continent is tripled, whereas the shapes of each continent is kept roughly similar in each copy at each scale.
for all performed simulations:

$$
\begin{equation*}
\frac{\partial}{\partial t} \eta+\mathcal{L}_{u} \eta=-\frac{\hbar^{2}}{4}\langle\Delta s, d s\rangle-d \tilde{p}, \quad d \star \eta=0 \tag{10.1}
\end{equation*}
$$

coupled with

$$
\begin{equation*}
\frac{\partial}{\partial t} s+\mathcal{L}_{u} s=\frac{\hbar}{2} s \times \Delta s \tag{10.2}
\end{equation*}
$$

The modifying term $\frac{\hbar^{2}}{4}\langle\Delta s, d s\rangle$ on the right-hand side of (10.1) has an $\hbar^{2}$ coefficient, which seems to vanish as $\hbar \rightarrow 0$. However, as $\hbar \rightarrow 0$, the velocity $\hbar\langle i \psi, d \psi\rangle$ would also scale down to zero. To obtain a more interesting limit, one has to fix the scale of $\eta$ as $\hbar \rightarrow 0$. To achieve this, $\psi$ and $s$ must depend on $\hbar$. In particular, on each small 2 dimensional surface $\Omega \subset M$, since the vorticity flux $\int_{\Omega} \omega=\frac{\hbar}{2} \int_{\Omega} s^{*} \sigma_{\mathbb{S}^{2}}$ is fixed, $s: \Omega \rightarrow \mathbb{S}^{2}$ must "wrap" around $\mathrm{S}^{2}$ more times as $\hbar$ gets smaller. Therefore $s$ picks up higher spatial frequency, and the right-hand side of (10.1) and (10.2) require careful scaling analysis.

The vorticity field at a regular vortex tube (without branching) can be considered as a 2 D vorticity field locally cross section

For each given $\hbar$, a smooth vorticity field on a 2 D domain can be represented by $\omega=\frac{\hbar}{2} s^{*} \sigma_{\mathrm{S}^{2}}$ with area preserving maps onto $\mathrm{S}^{2}$. Such a map can be obtained by the method presented in Chapter 6. For a generic point in 3 D a similar structure is constructed by extending the 2 D vortex patch along the vortex direction.

As demonstrated in Figure 10.4, as $\hbar$ is scaled down, the mapping degree of $s$ on a 2 D vortex patch (or a cross section of a ${ }_{3} \mathrm{D}$ vortex tube) increases in the order of $N \sim O(1 / \hbar)$. Importantly, the map $s$ at different values of $\hbar$ is similar shown by the texture in Figure 10.4. Namely, each branch image of $s^{-1}\left(\mathrm{~S}^{2}\right)$ takes a similar shape with area scale $O(1 / N) \sim O(\hbar)$, and therefore with length scale $O(\sqrt{\hbar})$. Consequently, the derivatives of $s$ scales like $d s \sim O(1 / \sqrt{\hbar})$ and $\Delta s \sim O(1 / \hbar)$. Hence, the above construction of the $\hbar-$ dependent $s$, the right-hand side of (10.1)

$$
\frac{\hbar^{2}}{4}\langle\Delta s, d s\rangle \sim O(\sqrt{\hbar}) .
$$

Therefore the modification term in the momentum equation (10.1) is only a regular perturbation to the Euler equation at regions on smooth vortex tube.

Note that the above argument may not hold near the event of vortex reconnection, branching vortices, or with singular vorticity field.

While the modification term in the momentum equation converges to o , the Landau-Lifshitz term in the $s$-equation (10.2) does not:

$$
\frac{\hbar}{2} s \times \Delta s \sim \hbar O(1 / \hbar) \sim O(1) .
$$

While the momentum equation (10.1) converges to the Euler equation in the limit $\hbar \rightarrow$ o, the right-hand side of (10.2) picks up a non-negligible process which "rearranges vortex lines."

Since the preimage of each point $s^{-1}(\{p\}), p \in \mathbb{S}^{2}$, are vortex lines, one may view the values of $s$ as the "labels" for vortex lines. A pure advection $\dot{s}+\mathcal{L}_{u} s=$ o describes that vortex lines are "frozen" in the flow. But $\dot{s}+\mathcal{L}_{u} s=$ o is not the only way to describe such a vortex dynamics. Note that the associated vorticity field represented by $s$ is invariant under relabeling of vortex lines (Section 8.3).

Without vortex relabeling, the value of the Dirichlet energy $\int_{M}|d s| \star 1$ can be arbitrarily large under pure advection of $s$ (initially close can be separated with arbitrarily large distance under an incompressible flow). But with however small $\hbar>$ o included in the Hamiltonian $\mathcal{E}_{\text {ISF }}=\mathcal{E}_{\text {Euler }}+$ $\frac{\hbar^{2}}{8} \int_{M}|d s|^{2} \star 1$, since $\mathcal{E}_{\text {ISF }}$ is conserved in the flow, $\int_{M}|d s|^{2} \star 1$ is bounded above at all time. A non-negligible vortex relabeling process must take place whenever $\hbar>0$.

### 10.2 Landau-Lifshitz Regularization

From the arguments made in the last section, Landau-Lifshitz term can be viewed as a regularization for the Euler equation. Here we consider a general Berger-ISF (9.13).

Theorem 10.1 (A Priori Estimate). Let $M$ be a smooth compact manifold. Suppose a time-dependent function $\psi_{t} \in W^{1,2}(M ; \mathbb{H})$ with $|\psi|^{2}=1$ satisfies (9.13) with $\mathrm{O}<\epsilon \leq 1$ for $t \in[\mathrm{O}, T]$; i.e. $\psi_{t}$ satisfies the symplectic flow of

$$
\mathcal{E}_{\mathrm{ISF}}^{\epsilon}=\mathcal{E}_{\text {Euler }}+\epsilon^{2} \mathcal{E}_{\mathrm{LL}}
$$

Then

$$
\begin{equation*}
\int_{M}\left|d \psi_{t=T}\right|^{2} \star 1 \leq \frac{1}{\epsilon^{2}} \int_{M}\left|d \psi_{t=\mathrm{o}}\right|^{2} \star 1 \tag{10.3}
\end{equation*}
$$

is uniformly bounded by the $W^{1,2}$-norm of the initial condition.
Proof. Since $\psi_{t}$ is a symplectic flow of $\mathcal{E}_{\mathrm{ISF}}^{\epsilon}=\frac{1}{2} \int_{M} \eta \wedge \star \eta+\frac{\epsilon^{2} \hbar^{2}}{8} \int|d s|^{2} \star 1$, the value $\mathcal{E}_{\mathrm{ISF}}^{\epsilon}\left(\left[\psi_{t}\right]\right)$ is invariant due to [Chernoff and J.E. Marsden, 1975]. Therefore

$$
\begin{aligned}
\int_{M}\left|d \psi_{t=T}\right|^{2} \star 1 & \stackrel{(9.6)}{=} \int_{M} \frac{1}{\hbar^{2}}\left|\eta_{t=T}^{2}\right| \star 1+\int_{M} \frac{1}{4}\left|d s_{t=T}\right|^{2} \star 1 \\
& \leq \frac{1}{(\epsilon \leq 1)} \frac{1}{\epsilon^{2}}\left(\int \frac{1}{\hbar^{2}}\left|\eta_{t=T}\right|^{2} \star 1+\int_{M} \frac{\epsilon^{2}}{4}\left|d s_{t=T}\right|^{2} \star 1\right) \\
& =\frac{1}{\epsilon^{2}}\left(\int \frac{1}{\hbar^{2}}\left|\eta_{t=\mathrm{o}}\right|^{2} \star 1+\int_{M} \frac{\epsilon^{2}}{4}\left|d s_{t=\mathrm{o}}\right|^{2} \star 1\right) \\
& \leq \frac{1}{\epsilon^{2}} \int_{M}\left|d \psi_{t=\mathrm{o}}\right|^{2} \star 1 .
\end{aligned}
$$

Note that the control (10.3) on $W^{1,2}$-norm of $\psi$ is present only when $\epsilon>0$.
Remark 10.1. If a short time existence of solution in $W^{1,2}$ space for Berger-ISF can be shown for all $W^{1,2}$ initial condition $\psi$, then by Theorem 10.1 we would have all time existence.

### 10.3 Vortex Filaments Motion

From Section 10.1 we learn that the dynamics generated from ISF converges to those generated from the Euler equation in regular vortices when $\hbar \rightarrow 0$.

However $\hbar$ is never set to zero in an actual simulation. In this section we investigate the contribution of the Landau-Lifshitz term to the motion of a vortex filament.

Recall (Section 9.5) that under a (Berger-)ISF, at each regular point of $s, \eta$ and $s$ satisfies

$$
\left\{\begin{array}{l}
\frac{\partial}{\partial t} \eta+\mathcal{L}_{\hat{u}} \eta=-d \tilde{p}, \quad d \star \eta=0 \\
\frac{\partial}{\partial t} s+\mathcal{L}_{\hat{u}} s=0
\end{array}\right.
$$

where the perturbed velocity is given by

$$
\begin{equation*}
\hat{u}:=u-\epsilon^{2} \frac{\hbar}{2} d s^{-1}(s \times \Delta s) . \tag{10.4}
\end{equation*}
$$

The value of $\hat{u}$ at a point on the vortex core reveals the velocity of the moving filament.

In the following calculation we take $M$ as a region in $\mathbb{R}^{3}$, and we assume that the vortex filament has a similar structure as in Fig. 10.1. In particular, $s$ has a constant value away from the vortex tube, which has a radius much smaller than the curvature radius of the vortex core. On each orthogonal cross section of the vortex tube, $s$ is a conformal map covering the entire $\mathrm{S}^{2}$ once.

## Construction of $s$

Such a function $s$ can be written explicitly in terms of a centroid curve and a stereographic projection from the normal plane of the curve to $\mathbb{S}^{2}$. Let $\Gamma \subset M$ be a space curve arclength-parameterized by $\gamma: I \subset \mathbb{R} \rightarrow \Gamma \subset \mathbb{R}^{3}$, with the Frenet frame $(T, N, B)$, the curvature $\kappa$ and the torsion $\tau$ defined through

$$
T=\gamma^{\prime}, \quad T^{\prime}=\kappa N, \quad B=T \times N, \quad N^{\prime}=-\kappa T+\tau B
$$

Let $U$ be a tubular neighborhood of $\Gamma$

$$
U:=\{x \in M \mid \operatorname{dist}(x, \Gamma)<R\}, \quad R \ll 1 / \kappa, \quad R \ll 1 / \tau
$$

Define the closest point projection cp: $U \rightarrow \Gamma$

$$
\operatorname{cp}(x):=\underset{\gamma(\ell) \in \Gamma}{\operatorname{argmin}} \operatorname{dist}(x, \gamma(\ell))
$$

which makes $U \xrightarrow{\mathrm{cp}} \Gamma$ a disk bundle. Using the closest point projection, extend the frame $(T, N, B)$ to an orthonormal basis defined on $U$ :

$$
T:=T \circ \mathrm{cp}, \quad N:=N \circ \mathrm{cp}, \quad B:=B \circ \mathrm{cp} .
$$

There are also unique functions $r: U \rightarrow \mathbb{R}$ and $\theta: U \rightarrow \mathbb{R} /(2 \pi)$ such that each $x \in U$ is expressed by

$$
x=\mathrm{cp}(x)+r(x) \cos (\theta(x)) N+r(x) \sin (\theta(x)) B
$$

Now, let $F: \mathbb{C} \rightarrow \mathbb{S}^{2}$ be the stereographic projection

$$
F: z \in \mathbb{C} \mapsto\left(2 \arctan \frac{1}{|z|}, \arg (z)\right) \in \mathbb{S}^{2}
$$

where the right-hand side is written in spherical coordinates. By function composition, we construct $s: U \rightarrow \mathrm{~S}^{2}$ as

$$
s=F \circ Z
$$

where $Z: U \rightarrow \mathbb{C}$ is an identification of each normal plane $\mathrm{cp}^{-1}(\gamma(\ell))$ with the complex plane:

$$
\begin{equation*}
Z(x):=\frac{r(x)}{r_{1}} e^{i(\theta(x)+(\varphi \circ \mathrm{cp})(x)-(\alpha \circ \mathrm{cp})(x))} \tag{10.5}
\end{equation*}
$$

Here $r_{1}$ is a constant with $r_{1}<R$ parameterizing the thickness of the vortex filament. In particular the set $\left\{\left|\psi_{1}\right|^{2}=\left|\psi_{2}\right|^{2}\right\}$ visualized in Fig. 10.1 agrees with the set $\left\{r=r_{1}\right\}$. The angle-valued function $\varphi: \Gamma \rightarrow \mathbb{R} /(2 \pi)$ is given by $\varphi=\int^{\ell} \tau$, which is angle between $N$ and a parallel normal vector field of $\Gamma$. The angle-valued function $\alpha: \Gamma \rightarrow \mathbb{R} /(2 \pi)$ is the angle the real axis $Z^{-1}(1)$ made with a parallel normal vector field. In other words, $\alpha$ is a parameter such that $\alpha^{\prime}$ describes the amount of twist of vortex lines.

## Properties of Stereographic Projection

To compute the perturbed velocity (10.4) we need to evaluate $\Delta s$, rotate 90 degree, and take the inverse map $d s^{-1}$. For a first step we compute the Laplacian $\Delta s$. By the chain rule for Laplacian, we have

$$
\begin{aligned}
\Delta s & =\Delta(F \circ Z) \\
& =\sum_{X \in\{T, N, B\}}(\operatorname{Hess} F)_{Z}(d Z(X), d Z(X))+(d F)_{Z}(\Delta Z) .
\end{aligned}
$$

Therefore,

$$
s \times \Delta s=\left.\sum_{X \in\{T, N, B\}} F\right|_{Z} \times(\operatorname{Hess} F)_{Z}(d Z(X), d Z(X))+\left.F\right|_{Z} \times(d F)_{Z}(\Delta Z)
$$

This expression can be largely simplified using the following properties of the stereographic projection $F$.

First of all, $F$ is conformal, which implies that

$$
\begin{equation*}
\left.F\right|_{Z} \times d F(\Delta Z)=d F(i \Delta Z) \tag{10.7}
\end{equation*}
$$

Another fact is that $F: \mathbb{C} \rightarrow \mathbb{S}^{2}$ is harmonic. That is, treating $F$ as an $\mathbb{R}^{3}$ valued function, one has

$$
\Delta F=-|d F|^{2} F
$$

In particular, after projecting the result onto the tangent space of $\mathrm{S}^{2}$,

$$
\Delta^{S^{2}} F=\mathrm{o}, \quad F \times \Delta F=0
$$

By writing the Laplacian in terms of the Hessian, one also has

$$
\begin{equation*}
\left.F\right|_{Z} \times\left((\operatorname{Hess} F)_{Z}(\zeta, \zeta)+(\operatorname{Hess} F)_{Z}(i \zeta, i \zeta)\right)=0 \tag{10.8}
\end{equation*}
$$

for any $\zeta \in \mathbb{C}$.
Later, we will also need to evaluate $\left.F\right|_{Z} \times(\operatorname{Hess} F)_{Z}(i Z, i Z)$. This quantity is the 2nd derivative of $F$ with respect to the angle of the polar coordinate on $\mathbb{C}$.

Lemma 10.1. $\left.F\right|_{Z} \times(\operatorname{Hess} F)_{Z}(i Z, i Z)=(d F)_{Z}\left(\frac{1-|Z|^{2}}{1+|Z|^{2}} i Z\right)$.
Proof. With the spherical coordinate $(A, B) \mapsto(\cos A, \sin A \cos B, \sin A \sin B)$ the stereographic projection $F(Z)$ is represented by $A(Z)=2 \arctan \frac{1}{|Z|}$ and $B(Z)=\arg (Z)$. In particular, the variation $i Z \in T_{Z} \mathbb{C}$ is mapped to $(d F)_{Z}(i Z)=\frac{\partial}{\partial B} F$. Hence

$$
(d F)_{Z}(i Z)=\frac{\partial}{\partial B} F=(0,-\sin A \sin B, \sin A \cos B)
$$

$$
(\text { Hess } F)_{Z}(i Z, i Z)=\frac{\partial^{2}}{\partial B^{2}} F=(0,-\sin A \cos B,-\sin A \sin B) \text {. }
$$

Therefore

$$
\begin{aligned}
\left.F\right|_{Z} \times(\operatorname{Hess} F)_{Z}(i Z, i Z)= & (\cos A, \sin A \cos B, \sin A \sin B) \\
& \times(0,-\sin A \cos B,-\sin A \sin B) \\
= & (0, \cos A \sin A \sin B,-\cos A \sin A \cos B) \\
= & -\cos A(d F)_{Z}(i Z) .
\end{aligned}
$$

The proof follows after one applies the identity $\cos \left(2 \arctan \frac{1}{|Z|}\right)=\frac{|Z|^{2}-1}{|Z|^{2}+1}$.

## Tubular Neighborhood Coordinate

As later we will compute the derivatives of $Z$ (10.5) in (10.6) that is written in the coordinate functions $c p, r$ and $\theta$, we give some useful formulas involving these coordinate functions.

Lemma 10.2. The derivatives of $\mathrm{cp}, r$ and $\theta$ are

$$
\begin{aligned}
& d \mathrm{cp}=\frac{1}{1-\kappa r \cos (\theta)} T T^{\mathrm{b}}, \\
& d r=\cos (\theta) N^{\mathrm{b}}+\sin (\theta) B^{\mathrm{b}} \\
& d \theta=-\frac{\tau}{1-\kappa r \cos (\theta)} T^{\mathrm{b}}-\frac{1}{r} \sin (\theta) N^{\mathrm{b}}+\frac{1}{r} \cos (\theta) B^{\mathrm{b}}
\end{aligned}
$$

Proof. These derivatives are obtained by taking directional derivatives of $\mathrm{cp}, r$, and $\theta$ in the directions $T, N, B$. Since cp projects orthogonally to $\Gamma$, one has $d \operatorname{cp}(N)=d \operatorname{cp}(B)=0$. Now, as one moves infinitesimally along the curve, the normal plane $\gamma(\ell)+\mathbb{R} N(\ell)+\mathbb{R} B(\ell)$ turns about a hinge, which is a line parallel to $B$ and passing through the center of the osculating circle. In particular, as $\ell$ moves forward by $\Delta \ell$, a point on the normal plane is lifted by $(1-\kappa r \cos (\theta)) \Delta \ell$ in the $T$ direction, depending on the relative position $(r, \theta)$ on the normal plane. Therefore, $d \operatorname{cp}(T)=\frac{1}{1-\kappa r \cos (\theta)} T$.

The derivative $d r$, and the $N^{b}, B^{b}$ components of $d \theta$ follow from the standard cylindrical coordinate. For $d \theta(T)$, note that the coordinate vector $N$ turns positively in the rate of $\tau$ with respect to the arclength on $\Gamma$. Hence the value of $\theta$ varies negatively in the rate of $\tau$ with respect to arclength. Thus by chain rule $d \theta(T)=-\tau\langle T, d \mathrm{cp}(T)\rangle=-\frac{\tau}{1-\kappa r \cos (\theta)}$.

Lemma 10.3. The covector fields $T^{b}, N^{b}, B^{b}$ satisfy

$$
\star d \star T^{b}=\mathrm{o}, \quad \star d \star N^{b}=-\frac{k}{1-\kappa r \cos (\theta)}, \quad \star d \star B^{b}=0
$$

Proof. Each of these codifferential quantities is the divergence of the associated vector field. At the level of vectors, we compute the derivatives (in the following the connection $\nabla^{\mathbb{R}^{3}}$ on $\mathbb{R}^{3}$ is just the usual $d$ )

$$
\nabla^{\mathbb{R}^{3}} T=d(T \circ \mathrm{cp})=\left(\frac{\partial}{\partial \ell} T\right)\langle T, d \mathrm{cp}\rangle=\frac{\kappa}{1-\kappa r \cos (\theta)} N T^{b} .
$$

Similarly

$$
\begin{aligned}
& \nabla^{\mathbb{R}^{3}} N=-\frac{\kappa}{1-\kappa r \cos (\theta)} T T^{b}+\frac{\tau}{1-\kappa r \cos (\theta)} B T^{b}, \\
& \nabla^{\mathbb{R}^{3}} B=-\frac{\tau}{1-\kappa \cos (\theta)} N T^{b} .
\end{aligned}
$$

As a result, the divergence

$$
\begin{aligned}
& \operatorname{div} T=\operatorname{tr}\left(\nabla^{\mathbb{R}^{3}} T\right)=\sum_{X \in\{T, N, B\}}\left\langle X, \nabla^{\mathbb{R}^{3}} T(X)\right\rangle=0, \\
& \operatorname{div} N=\sum_{X \in\{T, N, B\}}\left\langle X, \nabla^{\mathbb{R}^{3}} N(X)\right\rangle=-\frac{\kappa}{1-\kappa r \cos (\theta)} \\
& \operatorname{div} B=\sum_{X \in\{T, N, B\}}\left\langle X, \nabla^{\mathbb{R}^{3}} B(X)\right\rangle=0 .
\end{aligned}
$$

Lemma 10.4. The differential of $Z$ defined in (10.5) is given by

$$
d Z=\left(-i \frac{\alpha^{\prime}}{1-\kappa r \cos (\theta)} T^{b}+\frac{1}{r} e^{-i \theta} N^{b}+\frac{1}{r} i e^{-i \theta} B^{b}\right) Z
$$

Proof. With the aid of Lemma 10.2,

$$
\begin{aligned}
d Z= & \frac{1}{r_{1}} d r e^{i(\theta+\varphi \circ \mathrm{cp}-\alpha \circ \mathrm{cp})}+\frac{r}{r_{1}} i\left(d \theta+\left(\varphi^{\prime}-\alpha^{\prime}\right)\langle T, d \mathrm{cp}\rangle\right) e^{i(\theta+\varphi \circ \mathrm{cp}-\alpha \circ \mathrm{cp})} \\
= & \left(\frac{1}{r}\left(\cos (\theta) N^{\mathrm{b}}+\sin (\theta) B^{\mathrm{b}}\right)\right. \\
& \left.+i\left(-\frac{\alpha^{\prime}}{1-\kappa r \cos (\theta)} T^{b}-\frac{1}{r} \sin (\theta) N^{\mathrm{b}}+\frac{1}{r} \cos (\theta) B^{\mathrm{b}}\right)\right) Z \\
= & \left(-i \frac{\alpha^{\prime}}{1-\kappa r \cos (\theta)} T^{b}+\frac{1}{r}(\cos (\theta)-i \sin (\theta)) N^{\mathrm{b}}+\frac{1}{r}(\sin (\theta)+i \cos (\theta)) B^{\mathrm{b}}\right) Z \\
= & \left(-i \frac{\alpha^{\prime}}{1-\kappa r \cos (\theta)} T^{b}+\frac{1}{r} e^{-i \theta} N^{\mathrm{b}}+\frac{1}{r} i e^{-i \theta} B^{b}\right) Z
\end{aligned}
$$

Lemma 10.5. The Laplacian of $Z$ defined in (10.5) is given by

$$
\begin{aligned}
& \Delta Z=\left(-\frac{\kappa}{1-\kappa r \cos (\theta)} \frac{e^{-i \theta}}{r}-\frac{\alpha^{\prime 2}+i \alpha^{\prime \prime}}{(1-\kappa r \cos (\theta))^{2}}\right. \\
&\left.-i \frac{\alpha^{\prime} \kappa^{\prime} \cos (\theta)+\alpha^{\prime} \kappa \tau \sin (\theta)}{(1-\kappa r \cos (\theta))^{3}} r\right) Z
\end{aligned}
$$

Proof. From Lemma 10.4 we have

$$
\star d Z=\left(-i \frac{\alpha^{\prime}}{1-\kappa r \cos (\theta)} \star T^{b}+\frac{1}{r} e^{-i \theta}\left(\star N^{b}+i \star B^{b}\right)\right) Z .
$$

Therefore,

$$
d \star d Z=Z^{-1} d Z \wedge \star d Z+d\left(-i \frac{\alpha^{\prime}}{1-\kappa r \cos (\theta)} \star T^{b}+\frac{1}{r} e^{-i \theta}\left(\star N^{b}+i \star B^{b}\right)\right) Z
$$

The first part

$$
\begin{aligned}
Z^{-1} d Z \wedge \star d Z & =\left(\left(-i \frac{\alpha^{\prime}}{1-\kappa r \cos (\theta)}\right)^{2}+\left(\frac{1}{r} e^{-i \theta}\right)^{2}+\left(\frac{1}{r} i e^{-i \theta}\right)^{2}\right) Z \\
& =-\frac{\alpha^{\prime 2}}{(1-\kappa r \cos (\theta))^{2}} Z
\end{aligned}
$$

and for the second part we note that only $d \star N^{b}$ among $d \star T^{b}, d \star N^{b}, d \star$ $B^{b}$ is non-zero:

$$
\begin{aligned}
& d\left(-i \frac{\alpha^{\prime}}{1-\kappa r \cos (\theta)} \star T^{b}+\frac{1}{r} e^{-i \theta}\left(\star N^{b}+i \star B^{b}\right)\right) Z \\
& =(\frac{e^{-i \theta}}{r} d \star N^{b}-i \frac{\alpha^{\prime \prime}}{(1-\kappa r \cos (\theta))^{2}} T^{b} \wedge \star T^{b}-i \frac{\alpha^{\prime}}{(1-\kappa r \cos (\theta))^{2}} \underbrace{d(\kappa r \cos \theta) \wedge \star T^{b}}_{\frac{\kappa^{\prime} r \cos \theta+\kappa r \tau \sin \theta}{1-k r \cos \theta} \star 1} \\
& -\frac{e^{-i \theta}}{r} i\left(-\frac{\tau}{1-\kappa r \cos (\theta)} T^{b}-\frac{\sin (\theta)}{r} N^{\mathrm{b}}+\frac{\cos (\theta)}{r} B^{b}\right) \wedge \star\left(N^{b}+i B^{b}\right) \\
& \left.-\frac{e^{-i \theta}}{r^{2}}\left(\cos (\theta) N^{b}+\sin (\theta) B^{b}\right) \wedge \star\left(N^{b}+i B^{b}\right)\right) Z \\
& =\left(-\frac{e^{-i \theta}}{r} \frac{\kappa}{1-\kappa r \cos (\theta)}-i \frac{\alpha^{\prime \prime}}{(1-\kappa r \cos (\theta))^{2}}-i \frac{\alpha^{\prime} \kappa^{\prime} \cos (\theta)+\alpha^{\prime} \kappa \tau \sin (\theta)}{(1-\kappa r \cos (\theta))^{3}} r\right. \\
& +\underbrace{\frac{e^{-i \theta}}{r^{2}} i \sin (\theta)+\frac{e^{-i \theta}}{r^{2}} \cos (\theta)-\frac{e^{-i \theta}}{r^{2}} \cos (\theta)-\frac{e^{-i \theta}}{r^{2}} i \sin (\theta)}_{=0}) Z
\end{aligned}
$$

The result follows when the two terms are combined.

## Landau-Lifshitz Velocity

Now we are ready to evaluate $d s^{-1}(s \times \Delta s)$.
We continue from (10.6), which gives

$$
s \times \Delta s=\left.\sum_{X \in\{T, N, B\}} F\right|_{Z} \times(\operatorname{Hess} F)_{Z}(d Z(X), d Z(X))+(d F)_{Z}(i \Delta Z),
$$

where we have applied (10.7). Using the formula for $d Z$ from Lemma 10.4, the Hessian term

$$
\begin{aligned}
& \left.\sum_{X \in\{T, N, B\}} F\right|_{Z} \times(\operatorname{Hess} F)_{Z}(d Z(X), d Z(X)) \\
= & \left.F\right|_{Z} \times(\operatorname{Hess} F)_{Z}\left(-i \frac{\alpha^{\prime}}{1-\kappa r \cos (\theta)} Z,-i \frac{\alpha^{\prime}}{1-\kappa r \cos (\theta)} Z\right) \\
+ & \left.F\right|_{Z} \times(\operatorname{Hess} F)_{Z}\left(\frac{1}{r} e^{-i \theta} Z, \frac{1}{r} e^{-i \theta} Z\right) \\
+ & \left.F\right|_{Z} \times(\operatorname{Hess} F)_{Z}\left(\frac{1}{r} i e^{-i \theta} Z, \frac{1}{r} i e^{-i \theta} Z\right) .
\end{aligned}
$$

By (10.8) the last two summand combines to zero. Now, by Lemma 10.1 the first summand becomes

$$
=\frac{\alpha^{\prime 2}}{(1-\kappa r \cos (\theta))^{2}}(d F)_{Z}\left(\frac{1-\left(r / r_{1}\right)^{2}}{1+\left(r / r_{1}\right)^{2}} i Z\right) .
$$

Therefore, with Lemma 10.5 applied, the expression $s \times \Delta s$ becomes

$$
\begin{aligned}
s \times \Delta s=(d F)_{Z} & \left(-i \frac{\kappa}{1-\kappa r \cos (\theta)} \frac{e^{-i \theta}}{r} Z+\frac{i \alpha^{\prime \prime}}{(1-\kappa r \cos (\theta))^{2}} Z\right. \\
& \left.+\frac{\alpha^{\prime} \kappa^{\prime} \cos (\theta)+\alpha^{\prime} \kappa \tau \sin (\theta)}{(1-\kappa r \cos (\theta))^{3}} r Z-i \frac{\alpha^{\prime 2}}{(1-\kappa r \cos (\theta))^{2}} \frac{r^{2}}{r^{2}+r_{1}^{2}} Z\right) .
\end{aligned}
$$

Since we are interested in the value of this expression near the vortex core $r=\mathrm{o}$, let us study the first order asymptotic value for $r \rightarrow 0$. Using the definition of $Z$ (10.5), we have

$$
s \times \Delta s \sim(d F)_{Z}\left(-i \kappa \frac{1}{r_{1}}+O(r)\right)
$$

Now,

$$
\begin{aligned}
d s^{-1}(s \times \Delta s) & =\left(d Z^{-1}\right)\left(d F^{-1}\right)(s \times \Delta s) \\
& \sim d Z^{-1}\left(-i \kappa \frac{1}{r_{1}}+O(r)\right) .
\end{aligned}
$$

At $r=0$, the pseudo-inverse $d Z^{-1}$ takes value in the normal plane $\operatorname{Span}\{N, B\}$. Now, from Lemma 10.4, the restriction of $d Z$ on $\operatorname{Span}\{N, B\}$ is given by

$$
\begin{aligned}
\left(\iota_{T} \circ T^{b} \wedge\right) d Z & =\left(\frac{1}{r} e^{-i \theta} N^{b}+\frac{1}{r} i e^{-i \theta} B^{b}\right) Z \\
& =\frac{1}{r_{1}} N^{b}+\frac{1}{r_{1}} i B^{b} .
\end{aligned}
$$

Therefore

$$
d s^{-1}(s \times \Delta s) \sim-\kappa B+O(r)
$$

We conclude the calculation in this section by the following theorem.
Theorem 10.2. Let $\Gamma$ be a space curve in $M \subset \mathbb{R}^{3}$, and let $U$ be a tubular neighborhood of $\Gamma$ with a radius $R$ smaller than the curvature radius of $\Gamma$. Suppose $s: U \rightarrow \mathbb{S}^{2}$ wraps around $\mathbb{S}^{2}$ once conformally on each normal cross section of $U$ within a sufficiently small radius, then

$$
\left.d s^{-1}(s \times \Delta s)\right|_{x} \sim-\kappa B+O(\operatorname{dist}(x, \Gamma))
$$

where $\kappa$ is the curvature and $B$ is the binormal of the curve.

The above description about $s$ is made precise by the following construction. Let $(r, \tilde{\theta})$ be a polar coordinate for each normal cross section of $U$ with $\tilde{\theta}$ given relative to a smooth reference normal vector field of $\Gamma$. Identify each cross section of $U$ with $\mathbb{C}$ by $Z: U \rightarrow \mathbb{C}, Z:=\frac{r}{r_{1}} e^{i \tilde{\theta}}$ with some $r_{1} \ll R$. Then $s: U \rightarrow \mathrm{~S}^{2}$ is considered to be $s=F \circ Z$ where $F: \mathbb{C} \rightarrow \mathbb{S}^{2}$ is the stereographic projection.

Remark 10.2. Note that the asymptotic value $d s^{-1}(s \times \Delta s) \sim-\kappa B$ is independent of the choice of the vortex thickness $r_{1}$.

Corollary 10.1. Under the assumptions in Theorem 10.2, the perturbed velocity (10.4) near the vortex core is given by

$$
\hat{u} \sim u+\epsilon^{2} \frac{\hbar}{2} \kappa B .
$$

### 10.4 Effective Vortex Radius

For a classical fluid in $\mathbb{R}^{3}$ consisting of vortex filaments $\Gamma$ of strength $h$, the motion of the filaments can be described using the Biot-Savart integrals. Let $x \in \Gamma$ be a point on the vortex and suppose the vortex has a thickness $r_{1}$ at $x$. Then the velocity at $x$ is given by

$$
u(x)=\frac{h}{4 \pi} \int_{\Gamma \backslash B_{r_{1}}(x)}-\frac{x-\tilde{x}}{|x-\tilde{x}|} \times d \ell_{\tilde{x}} .
$$

The integral blows up when $r_{1} \rightarrow$ o with an order of $\log \left(r_{1}\right)$. To study the asymptotic behavior of in the variable $r_{1}$, we focus on the integral only near $x$.

A standard procedure is that one chooses another larger distance $r_{2}>$ $r_{1}$, which is still sufficiently small $r_{2} \ll \frac{1}{\kappa}$ so that the curve $\Gamma$ in the $r_{2}{ }^{-}$ neighborhood of $x$ can be approximated by an arc of curvature $к$. Then one breaks the integral into the "far field" part and a "near field" part:

$$
u(x)=\frac{h}{4 \pi} \int_{\Gamma \backslash B_{r_{2}}(x)}-\frac{x-\tilde{x}}{|x-\tilde{x}|} \times d \ell_{\tilde{x}}+\frac{h}{4 \pi} \int_{\Gamma \cap\left(B_{r_{2}}(x) \backslash B_{r_{1}}(x)\right)}-\frac{x-\tilde{x}}{|x-\tilde{x}|} \times d \ell_{\tilde{x}}
$$

Replacing the near field integration domain by the arcs from the osculating circle, one can evaluate the integral and obtain

$$
\begin{equation*}
u(x) \sim \frac{h}{4 \pi} \int_{\Gamma \backslash r_{r_{2}}(x)}-\frac{x-\tilde{x}}{|x-\tilde{x}|} \times d \ell_{\tilde{x}}+\frac{h}{4 \pi} \log \left(r_{2}\right) \kappa B-\frac{h}{4 \pi} \log \left(r_{1}\right) \kappa B \tag{10.9}
\end{equation*}
$$

Note that the last term $-\frac{h}{4 \pi} \log \left(r_{1}\right) \kappa B$, which will dominate all other terms when $r_{1} \rightarrow \mathrm{o}$, is called the localized induction approximation (LIA) first discovered by Da Rios [Rios, 1906].

Now, according to Corollary 10.1, in a (Berger-)ISF simulation the vortex core has the following modified velocity

$$
\hat{u}(x) \sim u(x)+\epsilon^{2} \frac{h}{4 \pi} \kappa B
$$

where we have used the fact that $h=2 \pi \hbar$ is the strength of a vortex represented by $s$ sweeping the entire $S^{2}$ once. Combining our $\hat{u}$ formula with (10.9), we obtain

$$
\begin{aligned}
\hat{u}(x) & \sim \frac{h}{4 \pi} \int_{\Gamma \backslash B_{r_{2}}(x)}-\frac{x-\tilde{x}}{|x-\tilde{x}|} \times d \ell_{\tilde{x}}+\frac{h}{4 \pi} \log \left(r_{2}\right) \kappa B-\frac{h}{4 \pi} \log \left(r_{1}\right) \kappa B+\epsilon^{2} \frac{h}{4 \pi} \kappa B \\
& =\frac{h}{4 \pi} \int_{\Gamma \backslash B_{r_{2}}(x)}-\frac{x-\tilde{x}}{|x-\tilde{x}|} \times d \ell_{\tilde{x}}+\frac{h}{4 \pi} \log \left(r_{2}\right) \kappa B-\frac{h}{4 \pi} \log \left(\frac{r_{1}}{e^{\epsilon^{2}}}\right) \kappa B .
\end{aligned}
$$

Comparing (10.10) and (10.9), the modified velocity $\hat{u}$ is effectively the velocity that arises from a vortex of a different thickness $\hat{r}_{1}=r_{1} / e^{\epsilon^{2}}$. Importantly, the effective vortex thickness is always thinner than the actual vortex thickness.

The dynamics of a vortex in an actual fluid is contributed from far field interaction (Biot-Savart integral) and a local induction term reflecting its vortex thickness. In an ISF simulation $\left(\epsilon^{2}=1\right)$, the vortex dynamics faithfully reproduces the far field interaction. As for the local induction part, a vortex will move faster than it is suppose to move at that vortex thickness. A vortex in ISF moves at a speed as if the vortex is $1 / e$ thinner than its actual thickness. This property of ISF allows one to simulate intricate vortex dynamics on a relatively coarse grid even when the vortex cores are not well-resolved on the grid.

## SPECIAL FORCES

A fluid simulation using ISF can benefit from its numerical simplicity and its ability to capture thin vortex dynamics. Yet, one drawback in ISF is that it is not clear how to add external forces to the system. When computing the classical Euler equation, one would just add an additional acceleration to the velocity field followed by a pressure projection. However, this procedure does not directly translate to fluids represented by a wavefunction. For a Schrödinger equation in quantum mechanics, the straightforward forces that can be added arbitrarily to a wavefunction are the forces coming from the potential term. However these potential forces will be eliminated during the pressure projection.

While there is not yet a general formula for adding external force to ISF, there are methods for adding a few physically meaningful forces. Here, we present how to add a Coriolis force for fluids on a rotating body, and a buoyancy force when there is a mixture of buoyant/heavy fluid.

### 11.1 Coriolis Effect by Magnetic Field

Fluids modeled with Coriolis force are important for studying the atmospherical flow on a rotating planet.

A moving particle in a rotating frame will experience a fictitious force called the Coriolis force. If a particle is moving at a velocity $u \in \mathbb{R}^{3}$ while the background angular momentum is given by $\Omega \in \mathbb{R}^{3}$, then the Coriolis force is given by $2 u \times \Omega$. Suppose $2 \Omega=B=\operatorname{curl} A$ where $A$ is twice vector field describing the background motion. Then the force exerting on the moving particle is also written as $u \times \operatorname{curl} A=u \times B$. Note that we assume $A$ is time-independent, and we do ignore the centrifugal force because it will be eliminated by the pressure projection when we talk about incompressible fluids.

Interestingly, this is a force with the same expression as the Lorentz force $u \times B$ for an electrically charged particle moving at a velocity $u$ in a magnetic field $B$ [Royer, 2011].
![](https://cdn.mathpix.com/cropped/2024_12_09_1cc46a253f183a74d833g-155.jpg?height=993&width=1386&top_left_y=241&top_left_x=364)

Figure 11.1: Flow on a rotating planet simulated by magnetic ISF. The background $\alpha$ is given by the rigid rotation $\alpha=d \varphi$ where $\varphi$ is the longitude angle of the planet.

We therefore simulate the Coriolis force by simulating a Schrödinger equation for a charged particle subject to a (possibly time-dependent) magnetic field set to be the background angular momentum. For our 2-component Schrödinger equation, the resulting system is known as the Pauli equation (non-relativistic Dirac equation) describing the dynamics of a charged spin1/2 particle in a magnetic field [W. Pauli, 1927]. If one ignores the effect of the spin-magnetic field interaction, the system is called the magnetic Schrödinger equation.

The Coriolis/Lorentz force $u \times B$ has a more general expression that works on manifolds other than $\mathbb{R}^{3}$. Expressed using exterior calculus, the angular momentum resp. magnetic field should be an exact 2-form $\beta=d \alpha \in$ $\Omega^{2}(M ; \mathbb{R})$. We let $A=\alpha^{\sharp}$. In the special case of $M=\mathbb{R}^{3}$, the (pseudo)vector $B$ is given by $B=(\star \beta)^{\sharp}=\operatorname{curl} A$. In terms of $\beta$ on a general Riemannian manifold $M$, the Coriolis/Lorentz force is given by the 1 -form $-\iota_{u} \beta$. The $1-$ form potential $\alpha$ is chosen solenoidal (Coulomb gauge), and in the context of Coriolis force $\alpha$ is the velocity of the background rotating body.

Now let us consider the Pauli equation written in terms of quaternionvalued $\psi$ :

$$
\begin{equation*}
\frac{\partial}{\partial t} \psi=i \frac{\hbar}{2} \Delta^{\alpha} \psi-i p \psi \underbrace{-\frac{1}{2} \psi B}_{\text {S.G. term }} \tag{11.1}
\end{equation*}
$$

Here $\Delta^{\alpha}=-\left(\nabla^{\alpha}\right)^{\dagger}\left(\nabla^{\alpha}\right)$ is the magnetic Laplacian, where the covariant derivative $\nabla^{\alpha}=\left(d-i \frac{1}{\hbar} \alpha\right)$ (Appendix 6.A). The term $-\frac{\hbar}{2} \psi B$ in (11.1) is called the Stern-Gerlach term that gives rise to the precession of a spinning electron. Here $B$ is the $\mathbb{R}^{3} \cong \operatorname{Im} \mathbb{H}$ representation for $\beta$, and the product $\psi B$ is a quanternion product.* While the Stern-Gerlach term gives important physics for the interaction between the spin of the charged particle and the background magnetic field, one may choose to drop this term in the context of fluid simulations since it does not contribute to the Lorentz force exerting on the linear momentum. We will mark the Stern-Gerlach term in the following equations to keep track of the effect of keeping or dropping the term.

Now impose the incompressible constraint and obtain an incompressible Pauli equation (or magnetic ISF)

$$
\left\{\begin{array}{l}
\frac{\partial}{\partial t} \psi=i \frac{\hbar}{2} \Delta^{\alpha} \psi-i p \psi-\frac{1}{2} \psi B  \tag{11.2}\\
\langle i \psi, \Delta \psi\rangle=0 .
\end{array}\right.
$$

Following the straightforward proof of Theorem 9.1 using Lemma 6.1, we obtain the corresponding evolution equation for $s$ :

$$
\begin{align*}
\frac{\partial}{\partial t} s+\mathcal{L}_{u-A} s & =\frac{\hbar}{2} s \times \Delta s+\underbrace{B \times s}_{\text {S.G. term }} \\
& =\frac{\hbar}{2} s \times(\Delta \underbrace{-\frac{2}{\hbar} B}_{\text {S.G. term }}) . \tag{11.3}
\end{align*}
$$

Then by a similar derivation as for Theorem 9.5, we have the momentum equation for the incompressible Pauli equation (magnetic ISF)

$$
\begin{equation*}
\frac{\partial}{\partial t} \eta+\mathcal{L}_{u-A} \eta=-\frac{\hbar^{2}}{4}\langle\Delta s \underbrace{-\frac{2}{\hbar} B}_{\text {S.G. term }}, d s\rangle-d \tilde{p}, \quad d \star \eta=0 \tag{11.4}
\end{equation*}
$$

Now, introduce a new velocity

$$
\tilde{\eta}=\eta-\alpha, \quad \tilde{u}=u-A
$$

[^10]which is the velocity relative to the background velocity $\alpha$. In the context of quantum mechanics with magnetic field, $\tilde{\eta}=\hbar\left\langle i \psi, \nabla^{\alpha} \psi\right\rangle$ is the covariant momentum. In terms of $\tilde{\eta},(11.4)$ becomes

$$
\frac{\partial}{\partial t} \tilde{\eta}+\mathcal{L}_{\tilde{u}} \tilde{\eta}=-\mathcal{L}_{\tilde{u}} \alpha-\frac{\hbar^{2}}{4}\langle\Delta s \underbrace{-\frac{2}{\hbar} B}_{\text {S.G. term }}, d s\rangle-d \tilde{p}, \quad d \star \eta=\mathrm{o},
$$

which is a Landau-Lifshitz modified Euler equation with the fictitious force $-\frac{\partial}{\partial t} \alpha-\iota_{\tilde{u}} \beta$

$$
\begin{equation*}
\frac{\partial}{\partial t} \tilde{\eta}+\mathcal{L}_{\tilde{u}} \tilde{\eta}=\underbrace{-\iota_{\tilde{u}} \beta}_{\text {Coriolis force }}-\frac{\hbar^{2}}{4}\langle\Delta s \underbrace{-\frac{2}{\hbar} B}_{\text {S.G. term }}, d s\rangle-d \tilde{p}, \quad d \star \eta=0 . \tag{11.5}
\end{equation*}
$$

As a conclusion, to simulate an incompressible fluid with Coriolis effect, all one has to solve is the incompressible Pauli equation (magnetic ISF) (11.2) and extract the velocity by $\tilde{\eta}=\hbar\left\langle i \psi, \nabla^{\alpha} \psi\right\rangle$. The resulting velocity field will satisfy a Landau-Lifshitz modified Euler equation subject to a Coriolis force. Fig. 11.1 shows an example of such a simulation.

### 11.2 Buoyancy by Stern-Gerlach Effect

In Section 1.4 we have already demonstrated how to add buoyancy/gravity force to an ISF simulation. Specifically one adds an extra "componentdependent" potential to the Schrödinger equation as in (1.5). Here we explain this treatment more geometrically. First of all, note that in terms of quaternionic $\psi$, (1.5) can be written as

$$
\left\{\begin{array}{l}
\frac{\partial}{\partial t} \psi=i \frac{\hbar}{2} \Delta \psi-i p \psi-\frac{1}{\hbar} U(x) \psi i  \tag{11.6}\\
\langle i \psi, \Delta \psi\rangle=\mathrm{o}
\end{array}\right.
$$

where $U(x)$ is a gravitational potential. Here we have used that the quaternion representation for $i \sigma_{3} \Psi$ is $\psi i$ (Eq. (B.2)). In the case presented in Section 1.4 we wrote $U(x)=\langle g, x\rangle$ where $g$ is the vector of gravitational acceleration. In particular, the term $U(x) \psi i$, with an imaginary quaternion $i$ multiplied from the right, is a Stern-Gerlach term appeared in Section 11.1. It generates precession in the spin vectors $s$ with a space-dependent Larmor frequency $\frac{2}{\hbar} U(x)$. Before returning to (11.6), let us talk about the scenario of buoyant fluid that we want to simulate, and see how (11.6) naturally arises. A full physical model for buoyancy of a hot air requires considering fluids with non-constant density. But one may omit this fact and dealing only
with constant density by adopting Boussinesq approximation. In this model, an acceleration due to gravity $-d U$ is applied to the velocity weighted differently depending on, for example, the temperature. Now let a function $\mu: M \rightarrow[-1,1]$ denote this temperature parameter. Under no-dissipation assumption, in an Euler fluid, this parameter is just being advected

$$
\begin{equation*}
\frac{\partial}{\partial t} \mu+\mathcal{L}_{u} \mu=0 \tag{11.7}
\end{equation*}
$$

In terms of $\mu$, the Euler equation with a buoyancy force is given by

$$
\frac{\partial}{\partial t} \eta+\mathcal{L}_{u} \eta=-\mu d U-d p, \quad d \star \eta=0
$$

By taking $d$ we obtain the corresponding vorticity equation

$$
\frac{\partial}{\partial t} \omega+\mathcal{L}_{u} \omega=-d \mu \wedge d U
$$

This vorticity equation suggests that if the fluid is driven only by the buoyancy, then $\omega$ admits a Clebsch representation

$$
\omega=d \lambda \wedge d \mu
$$

where $\lambda: M \rightarrow \mathbb{R}$ satisfies

$$
\begin{equation*}
\frac{\partial}{\partial t} \lambda+\mathcal{L}_{u} \lambda=U . \tag{11.8}
\end{equation*}
$$

Now let us "wrap" the $(\lambda, \mu)$-coordinate onto $\mathbb{S}^{2}$ by the Lambert cylindrical projection $\xi: \mathbb{R} \times[-1,1] \rightarrow \mathrm{S}^{2}$,

$$
\xi(\lambda, \mu):=\left(\mu, \sqrt{1-\mu^{2}} \cos (2 \lambda / \hbar), \sqrt{1-\mu^{2}} \sin (2 \lambda / \hbar)\right) .
$$

One can check that

$$
d \lambda \wedge d \mu=\frac{\hbar}{2} \xi^{*} \sigma_{\mathbb{S}^{2}}
$$

Therefore, the fluid state is represented by a spherical Clebsch map $s: M \rightarrow$ $S^{2}$. In particular $s$ has the cosine of its polar angle (ranging $[0, \pi]$ ) represent the temperature $\mu$ (which equals to $\left|\psi_{1}\right|^{2}-\left|\psi_{2}\right|^{2}$ ) and the azimuthal (longitude) angle represent the parameter $\frac{2}{\hbar} \lambda$ (which equals to $\arg \psi_{1}-\arg \psi_{2}$ ). Hence, the equation for $s$ that captures both (11.7) and (11.8) is

$$
\frac{\partial}{\partial t} s+\mathcal{L}_{u} s=\frac{2}{\hbar} U i \times s
$$

The right-hand side is a precession with angular frequency $\frac{2}{\hbar} U$.
Now we return to (11.6). The evolution equation for $s$ under (11.6) is exactly the one for ISF with an additional precession term

$$
\frac{\partial}{\partial t} s+\mathcal{L}_{u} s=\underbrace{\frac{2}{\hbar} U i \times s}_{\text {buoyancy }}+\frac{\hbar}{2} s \times \Delta s
$$

which effectively gives the buoyancy.

Chapter 12

## CONCLUSION

In this thesis we presented the theory and application of describing fluids using ISF.

On the application side, ISF is simple to implement without the need to take care of nonlinear advection term in a standard description of fluids. ISF is also capable of capturing thin vortex dynamics on a relatively coarse computation grid. Clebsch variables for the fluid represented by ISF also comes naturally in the variables used in ISF. With a numerical method for finding a wavefunction from a given velocity field, we also develop a tool for visualizing vortex structure of a flow data through Clebsch maps.

On the theory side, we proposed a general mathematical framework for geometric Clebsch maps. Using it, the dynamics of Euler fluid and ISF is then written as symplectic flows of their respective Hamiltonians. A Berger-ISF is also proposed as a dynamical system that interpolates ISF and Euler flow. ISF is a Landau-Lifshitz-modified Euler equation. A preliminary analysis for the Landau-Lifshitz term in ISF was carried out. In particular we showed that at a regular vortex core, the effect of the Landau-Lifshitz term on the vortex velocity is an additional localized induction. Effectively the dynamics of a vortex in ISF is similar to that in an Euler flow but with a thinner vortex core. We also argued that the Landau-Lifshitz is a regularizer in the sense that the regularity of the spin vector is uniformly estimated in time.

Beyond the scope of this thesis, there are still many open questions. We have a prior estimation for ISF, but the complete well-posedness of ISF has not been shown. If it is established, does it help to understand the nature of the Euler equation?

We only investigated the behavior of a vortex core when the vortex is a regular tube away from the critical points of the vorticity Clebsch map. What happens at those critical points under an ISF, and what are their limiting behavior as $\hbar \rightarrow \mathrm{o}$ ?

How well does ISF serves beyond simulating vortex dynamics? Does it capture and give more insight to turbulence? Can one simulate a slightly viscous fluid with a desired Reynolds number? How to add arbitrary forces, couple with solids, or couple with other physics such as for magnetohydrodynamics? Can the ideas in ISF work for compressible fluids or even general conservation laws?

The numerical method for finding a Clebsch map is suffer from the inefficiency. A better preconditioner for magnetic Laplacians needs to be developed. Numerical simulation of ISF also suffers from numerical error due to the time splitting. A better numerical scheme is to be explored.

We are only at the beginning stage of exploring this whole new approach of looking at fluids. It is hopeful that some of these open questions will be answered in the near future, and new mathematical, physical, and simulation tools will spring from it.

## BIBLIOGRAPHY

Angot, Philippe, Charles-Henri Bruneau, and Pierre Fabrie (1999). "A Penalization Method to Take into account Obstacles in Incompressible Viscous Flows". In: Num. Math. 81.4, pp. 497-520.

Arnold, Vladimir I. and Boris A. Khesin (1998). Topological Methods in Hydrodynamics. App. Math. Sc. Springer.
Arquis, Eric and Jean-Paul Caltagirone (1984). "Sur les conditions hydrodynamiques au voisinage d'une interface milieu fluide-mileu poreux: application á convection naturelle". In: CR Acad. Sci. Paris, Série II 299.1, pp. 1-4.
Brandenburg, Axel (2010). "Magnetic Field Evolution in Simulations with Euler Potentials". In: MNRAS 401.1, pp. 347-354.

Bridson, Robert, Jim Houriham, and Marcus Nordenstam (2007). "CurlNoise for Procedural Flow". In: ACM Trans. Graph. 26.3, 46:1-3.

Bush, Michael A., Katelyn R. French, and Joseph R. H. Smith (2017). "Total Linking Numbers of Torus Links and Klein Links". In: RH Underg. Math. J. 15.1, pp. 72-92.

Carbou, Gilles and Pierre Fabrie (2003). "Boundary Layer for a Penalization Method for Viscous Incompressible Flow". In: Adv. Diff. Eq. 8.12, pp. 1453-1480.

Cartes, Carlos, Miguel D. Bustamente, and Marc E. Brachet (2007). "Generalized Eulerian-Lagrangian Description of Navier-Stokes Dynamics". In: Phys. Fluids 19.7, 077101:1-7.

Cauchy, Augustin-Louis (1815). "Théorie de la Propagation des Ondes a la Surface d'un Fluide Pesant d'une Profondeur Indéfinie". In: Oeuvres Complètes d'Augustin Cauchy. Vol. 1. Presented to the French Academy in 1815 (published in 1827). Imprimerie Royale.
Cheney, Ward and Allen A. Goldstein (1959). "Proximity Maps for Convex Sets". In: Proc. AMS 10.3, pp. 448-450.
Chern, Albert, Felix Knöppel, Ulrich Pinkall, and Peter Schröder (2017). "Inside Fluids: Clebsch Maps for Visualization and Processing". In: ACM Trans. Graph. 36.4, 142:1-142:11. DOI: 10.1145/3072959.3073591.

Chern, Albert, Felix Knöppel, Ulrich Pinkall, Peter Schröder, and Steffen Weißmann (2016). "Schrödinger's Smoke". In: ACM Trans. Graph. 35-4. DOI: 10.1145/2897824. 2925868.

Chernoff, P.R. and J.E. Marsden (1975). "Some Basic Properties of Infinite Dimensional Hamiltonian Systems". In: Géométrie symplectique et physique mathématique.

Chorin, Alexandre Joel (1968). "Numerical Solution of the Navier-Stokes Equations". In: Mathematics of computation 22.104, pp. 745-762.
Clebsch, A. (1859). "Ueber die Integration der hydrodynamischen Gleichungen". In: J. Reine Angew. Math. 56. English translation by D. H. Delphenich, http://www.neo-classical-physics.info/uploads/3/ 4/3/6/34363841/clebsch_-_clebsch_variables.pdf, pp. 1-10.
Crane, Keenan, Fernando de Goes, Mathieu Desbrun, and Peter Schröder (2013). "Digital Geometry Processing with Discrete Exterior Calculus". In: Courses. ACM SIGGRAPH.

Delphenich, David (2017). "The Role of Integrability in a large Class of Physical Systems". https://arxiv.org/abs/1210.4976.

Desbrun, Mathieu, Eva Kanso, and Yiying Tong (2008). "Discrete Differential Forms for Computational Modeling". In: Discrete Differential Geometry. Ed. by Alexander I. Bobenko, Peter Schröder, John M. Sullivan, and Günther M. Ziegler. Vol. 38. Oberwolfach Seminars. Birkhäuser Verlag.
Ekaterinaris, John A. and Lewis B. Schiff (1990). "Vortical Flows over Delta Wings and Numerical Prediction of Vortex Breakdown". In: 28th Aerosp. Sc. Meet. AIAA.

Euler, Leonhard (1755). "Principes Généraux du Mouvement des Fluides". In: Mémoires de l'Académie des Sciences de Berlin. Printed in 1757. For an English translation see [Frisch, 2008].
Faddeev, LD (1976). "Some Comments on the Many-Dimensional Solitons". In: Letters in Mathematical Physics 1.4, pp. 289-293.
Feynman, Richard P. (1955). "Application of Quantum Mechanics to Liquid Helium". In: vol. 1. Progress in Low Temperature Physics. NorthHolland. Chap. II, pp. 17-53.
Frisch, Uriel (2008). "Translation of Leonhard Euler's: General Principles of the Motion of Fluids". Preprint arXiv:0802.2383v1.
Frisch, Uriel and Barbara Villone (2014). "Cauchy's almost Forgotten Lagrangian Formulation of the Euler Equation for 3D Incompressible Flow". In: Eu. Phy. J. H 39.3, pp. 325-351.
Gauß, Carl Friedrich (1833). "Zur mathematischen Theorie der elektrodynamischen Wirkungen". In: vol. 5. Werke. Published 1877. Göttingen: Königliche Gesellschaft der Wissenschaften. Chap. Handschriftlicher Nachlass.

Geiges, Hanjörg (2006). "Handbook of Differential Geometry". In: vol. 2. North-Holland. Chap. Contact Geometry, pp. 315-382.

Ginsburg, V. L. and L. P. Pitaevskii (1958). "On the Theory of Superfluidity". In: J. Exp. Theor. Phys. 7.5, pp. 858-861.

Graham, C. Robin and Frank S. Henyey (2000). "Clebsch Representation near Points where the Vorticity Vanishes". In: Phys. Fluids 12.4, pp. 744746.

Gross, E. P. (1961). "Structure of a Quantized Vortex in Boson Systems". In: Il Nuovo Cimento 20.3, pp. 454-477.
Hadamard, Jacques (1903). Leçons sur la Propagation des Ondes et les Équations de l'Hydrodynamique. Paris: Librairie Scientifique A. Hermann.

Hankel, Hermann (1861). Zur allgemeinen Theorie der Bewegung der Flüssigkeiten. Göttingen: Dieterichsche Univ.-Buchdruckerei.

Hasimoto, Hidenori (1972). "A Soliton on a Vortex Filament". In: J. Fl. Mech. 51.3, pp. 477-485.

He, Pengyu and Yue Yang (2016). "Construction of Initial Vortex-Surface Fields and Clebsch Potentials for Flows with High-Symmetry using First Integrals". In: Phys. Fluids 28.3, 037101:1-13.
Helmholtz, Hermann von (1858). "Über Integrale der hydrodynamischen Gleichungen, welche den Wirbelbewegungen entsprechen". In: J. Reine Angew. Math. 55. English translation by P.G. Tait, 1867, http://www . biodiversitylibrary.org/item/121849\#page/499/mode/1up, pp. 2555.

Hou, Thomas Y, Tianling Jin, and Pengfei Liu (2017). "Potential Singularity for a Family of Models of the Axisymmetric Incompressible Flow". In: Journal of Nonlinear Science, pp. 1-31.

Hutchinson, John E. (1991). "Computing Conformal Maps and Minimal Surfaces". In: Theoretical and Numerical Aspects of Geometric Variational Problems. Ed. by Gerd Dziuk, Gerhard Huisken, and John Hutchinson. Vol. 26. Proc. Cent. Math. and Appl. Pp. 140-161.

Jause-Labert, C., F. S. Godeferd, and B. Favier (2012). "Numerical Validation of the Volume Penalization Method in Three-Dimensional PseudoSpectral Simulations". In: Comp. E Fl. 67, pp. 41-56.

Jeong, Jinhee and Fazle Hussain (1995). "On the Identification of a Vortex". In: J. Fl. Mech. 285, pp. 69-94.

Jerrard, Robert L. and Daniel Spirn (2015). "Hydrodynamic Limit of the Gross-Pitaevskii Equation". In: Comm. Par. Diff. Eq. 40.2, pp. 135-190.

Jiang, Ming, Raghu Machiraju, and David Thompson (2005). "The Visualization Handbook". In: Elsevier. Chap. Detection and Visualization of Vortices, pp. 295-312.

Kleckner, Dustin and William T. M. Irvine (2013). "Creation and Dynamics of Knotted Vortices". In: Nature Physics 9. Video at http://www.nature. com/nphys/journal/v9/n4/extref/nphys2560-s7.mov, pp. 253-258.

Knöppel, Felix, Keenan Crane, Ulrich Pinkall, and Peter Schröder (2013). "Globally Optimal Direction Fields". In: ACM Trans. Graph. 32.4, 59:1-10.

- (2015). "Stripe Patterns on Surfaces". In: ACM Trans. Graph. 34.4, 39:1-11.

Kotiuga, P. Robert (1991). "Clebsch Potentials and the Visualization of Three-Dimensional Solenoidal Vector Fields". In: IEEE Trans. Magn. 27.5, pp. 3986-3989.
Kuznetsov, E. A. and A. V. Mikhailov (1980). "On the Topological meaning of Canonical Clebsch Variables". In: Phys. Lett. A 77.1, pp. 37-38.

Lagrange, JL (1788). Méchanique Analitique. A Paris, Chez La Veuve Desaint.
Lim, T. T. (1989). "An Experimental Study of a Vortex Ring Interacting with an Inclined Wall". In: Exp. in Fl. 77. Videos at http://serve.me. nus.edu.sg/limtt/video/Oblique_collison_front.mpg and http: //serve.me.nus.edu.sg/limtt/video/Oblique_collison_top.mpg, pp. 453-463.

- (1997). "A Note on the Leapfrogging between two Coaxial Vortex Rings at low Reynolds Number". In: Phys. Fluids 9.1. Video at http://serve. me.nus.edu.sg/limtt/video/leapfrog.mpeg, pp. 239-241.
Lin, F.-H. and J. X. Xin (1999). "On the Incompressible Fluid Limit and the Vortex Motion Law of the Nonlinear Schrödinger Equation". In: Comm. Math. Phys. 200.2, pp. 249-274.
Luo, Guo and Thomas Y Hou (2014). "Potentially Singular Solutions of the 3D Axisymmetric Euler Equations". In: Proceedings of the National Academy of Sciences 111.36, pp. 12968-12973.
Madelung, Erwin (1926). "Eine anschauliche Deutung der Gleichung von Schrödinger". In: Nat. Wiss. 14.45, pp. 1004-1004.
- (1927). "Quantentheorie in hydrodynamischer Form". In: Z. Phys. 40.3-4. English translation by D. H. Delphenich,http://www . neo-classical-physics.info/uploads/3/0/6/5/3065888/madelung_-_hydrodynamical_ interp. .pdf, pp. 322-326.

Magot, Nicolas and Alexander Zvonkin (2000). "Belyi Functions for Archimedean Solids". In: Disc. Math. 217.1-3, pp. 249-271.

Marsden, Jerrold and Alan Weinstein (1983). "Coadjoint Orbits, Vortices, and Clebsch Variables for Incompressible Fluids". In: Physica D: Nonlinear Phenomena 7.1, pp. 305-323.

McAdams, A., E. Sifakis, and J. Teran (2010). "A Parallel Multigrid Poisson Solver for Fluids Simulation on large Grids". In: Proc. Symp. Comp. Anim. ACM SIGGRAPH/Eurographics, pp. 65-74.

Milnor, John W. (1965). Topology from the Differentiable Viewpoint. U. P. Virginia.
Moffatt, Henry Keith (1969). "The Degree of Knottedness of Tangled Vortex Lines". In: Journal of Fluid Mechanics 35.01, pp. 117-129.
Al-Mohy, Awad H. and Nicholas J. Higham (2011). "Computing the Action of the Matrix Exponential with an Application to Exponential Integrators". In: SIAM J. Sci. Comp. 33.2, pp. 488-511.
Mullen, Patrick, Alexander McKenzie, Dmitry Pavlov, Luke Durant, Yiying Tong, Eva Kanso, Jerrold E Marsden, and Mathieu Desbrun (2011). "Discrete Lie Advection of Differential Forms". In: Foundations of Computational Mathematics 11.2, pp. 131-149.
Onsager, Lars (1949). "Statistical Hydrodynamics". In: Il Nuovo Cimento 6.2. Footnote (1), pp. 279-287.

Osher, Stanley and Ronald Fedkiw (2003). Level Set Methods and Dynamic Implicit Surfaces. Vol. 153. Appl. Math. Sci. Springer.
Pinkall, Ulrich and Konrad Polthier (1993). "Computing discrete minimal surfaces and their conjugates". In: Experimental mathematics 2.1, pp. 1536.

Pismen, Len M (1999). Vortices in Nonlinear Fields: From Liquid Crystals to Superfluids, from Non-equilibrium Patterns to Cosmic Strings. Vol. 100. Oxford University Press.
Pitaevskii, L. P. (1961). "Vortex Lines in an Imperfect Bose Gas". In: J. Exp. Theor. Phys. 13.2, pp. 451-454.
Poincaré, Henri (1890). "Sur le Problème des Trois Corps et les Équations de la Dynamique". In: Acta Math. 13, pp. 1-270.
Polterovich, Leonid (2012). The Geometry of the Group of Symplectic Diffeomorphism. Birkhäuser.
Ren, Yan, Haibo Dong, Xinyan Deng, and Bret Tobalske (2016). "Turning on a Dime: Asymmetric Vortex Formation in Hummingbird Maneuvering Flight". In: Phys. R. Fl. 1.5.
Rios, Luigi Santa Da (1906). "Sul moto d'un liquido indefinito con un filetto vorticoso di forma qualunque". In: Rend. Cir. Mat. Pal. 22.1, pp. 177-135.

Royer, Antoine (2011). "Why is the Magnetic Force Similar to a Coriolis Force?" In: arXiv preprint arXiv:1109.3624.

Saffman, Philip Geoffrey (1992). Vortex Dynamics. Cam. U. Press.
Schönberg, M. (1954). "On the Hydrodynamical Model of the Quantum Mechanics". In: Il Nuovo Cimento 12.1, pp. 103-133.
Schwarz, Günter (1995). Hodge Decomposition - A Method for Solving Boundary Value Problems. L28 1607. Springer-Verlag Berlin Heidelberg. Isbn: 978-3-540-49403-4.
Schwarz, K. W. (1985). "Three-Dimensional Vortex Dyanmics in Superfluid 4He: Line-Line and Line-Boundary Interactions". In: Phys. R. B 31.9, pp. 5782-5804.
Seifert, H. (1935). "Über das Geschlecht von Knoten". In: Math. Ann. 110.1, pp. 571-592.
Selle, Andrew, Ronald Fedkiw, ByungMoon Kim, and Jarek Rossignac (2008). "An Unconditionally Stable MacCormack Method". In: J. Sci. Comp. 35.23, pp. 350-371.
Shnirelman, Alexander (1997). "On the Nonuniqueness of Weak Solution of the Euler Equation". In: Communications on Pure and Applied Mathematics 50.12, pp. 1261-1286.

Sorokin, A. L. (2001). "Madelung Transformation for Vortex Flows of a Perfect Liquid". In: Doklady Physics 46.8, pp. 576-578.
Stagg, G. W., N. G. Parker, and C. F. Barenghi (2014). "Quantum Analogues of Classical Wakes in Bose-Einstein Condensates". In: J. Phys. B: At. Mol. Opt. Phys. 47.9, 095304 (8pp).
Thomson, William (1868). "On Vortex Motion". In: Trans. Roy. Soc. Edin. 25.1, pp. 217-260.

Tsekov, Roumen (2009). "Bohmian Mechanics versus Madelung Quantum Hydrodynamics". In: arXiv preprint arXiv:0904.0723.
van Wijk, Jarke J. and Arjeh M. Cohen (2005). Visualization of Seifert Surface.
W. Pauli, Jr. (1927). "Zur Quantenmechanik des magnetischen Elektrons". In: Zeit.f. Phys. 43. English translation by D. H. Delphenich, http://neo-classical-physics.info/uploads/3/4/3/6/34363841/pauli_-_the_ magnetic_electron.pdf, pp. 601-623.
Weißmann, Steffen and Ulrich Pinkall (2010). "Filament-Based Smoke with Vortex Shedding and Variational Reconnection". In: ACM Trans. Graph. 29.4, 115:1-12.

Weißmann, Steffen, Ulrich Pinkall, and Peter Schröder (2014). "Smoke Rings from Smoke". In: ACM Trans. Graph. 33.4, 140:1-8.

Woit, Peter (2017). "Quantum Theory, Groups and Representations: An Introduction". https://www.math.columbia.edu/ woit/QM/qmbook.pdf.

Woltjer, Lodewijk (1958). "A Theorem on Force-free Magnetic Fields". In: Proceedings of the National Academy of Sciences 44.6, pp. 489-491.

Yang, Yue and Dale I. Pullin (2010). "On Lagrangian and Vortex-Surface Fields for Flows with Taylor-Green and Kida-Pelz Initial Conditions". In: J. Fl. Mech. 661, pp. 446-481.

Zakharov, V. E. and Evgenii A. Kutznetsov (1997). "Hamiltonian Formalism for Nonlinear Waves". In: Physics-Uspekhi 40.11, pp. 1087-1116.

## Appendix A

## EXTERIOR CALCULUS

The mathematical formulation for fluid mechanics is usually based on vector calculus. Vector calculus is the multivariable calculus involving vector fields on $\mathbb{R}^{2}$ or $\mathbb{R}^{3}$. Though it appears to be straightforward formulating classical mechanics using vector calculus in $\mathbb{R}^{3}$, it becomes exceedingly complicated when one expresses vector identities in higher dimensional spaces or on a deformed coordinate system.

Exterior calculus uses coordinate-free notations that generalize identities of vector analysis to arbitrary manifolds. It also unifies many vector identities with much fewer exterior calculus identities and simpler expressions. At a more fundamental level, exterior calculus reveals deeper geometric and topological insights that were not present with the vector calculus counterpart.

My exposition for the most part of the thesis is heavily based on exterior calculus. In this appendix I give the essential identities from exterior calculus. The reader can then go over Chapter 2 to see exterior calculus in use for an introduction of classical fluids.

Throughout we assume the domain $M$ is an $n$-dimensional oriented smooth manifold. For each $p \in M$ we let $T_{p} M$ denote the $n$-dimensional tangent space of $M$ at $p$. Notationwise, a tangent vector field $X$ is denoted as an element $X \in \Gamma(T M)$. Briefly speaking, $T M \cong \bigsqcup_{p \in M} T_{p} M$ is the formal collection of all tangent spaces, and is called the tangent bundle. Each element $X \in \Gamma(T M)$ is called a section of the tangent bundle, which is a function $X \in M \rightarrow T M$ that satisfies $X(p) \in T_{p} M$. Depending on the surrounding expressions we may use $\left.X\right|_{p}$ or $X_{p}$ for representing the value $X(p)$. Although in many applications $M=\mathbb{R}^{n}$ and one writes $p \in \mathbb{R}^{n}$ and $X_{p} \in T_{p} \mathbb{R}^{n} \cong \mathbb{R}^{n}$, one should draw a distinction between points $p \in M$ and vectors $X_{p} \in T_{p} M$. A vector $X_{p}$ is a geometric object that represents an infinitesimal displacement about $p$.

## A. 1 Differential Forms

A differential form is a field on $M$ that is "to be integrated". That is, a differential $k$-form $\alpha$ (for an integer $\mathrm{o} \leq k \leq n$ ), for which we write $\alpha \in$ $\Omega^{k}(M)$, can be evaluated on each oriented $k$-dimensional submanifold $\Sigma \subset$ $M$ denoted by

$$
\int_{\Sigma} \alpha
$$

For $k=\mathrm{o}$, a o-form $f$ is just a smooth function defined on $M$, which can be evaluated at every point $p \in M, \int_{p} f=f(p)$. For that being said, a tangent vector field $X \in \Gamma(T M)$ is also regarded as a $T M$-valued o-form (or vector-valued o-form). The integration $\int_{(\cdot)}(\cdot)$ as a pairing between $k$ dimensional geometries and $k$-forms is bilinear. That is, $c_{1} \int_{\Sigma} \alpha_{1}+c_{2} \int_{\Sigma} \alpha_{2}=$ $\int_{\Sigma}\left(c_{1} \alpha_{1}+c_{2} \alpha_{2}\right)$, and $\int_{n_{1} \Sigma_{1}+n_{2} \Sigma_{2}} \alpha=n_{1} \int_{\Sigma_{1}} \alpha+n_{2} \int_{\Sigma_{2}} \alpha$, where $\alpha_{1}, \alpha_{2}$ are $k-$ forms, $\Sigma_{1}, \Sigma_{2}$ are oriented $k$-dimensional surfaces, $c_{1}, c_{2}$ are scalars, $n_{1}, n_{2}$ are signed integers, and $n_{1} \Sigma_{1}+n_{2} \Sigma_{2}$ is a chain representing the formal linear combinations of surfaces.

For example, a mass density $\rho$ is a mass-valued $n$-form. We denote it by $\rho \in \Omega^{n}(M ; \mathbb{R} \mathrm{kg})$. The mass density is defined by assigning values to $\int_{V} \rho \in \mathbb{R} \mathrm{~kg}$ for every volume $V \subset M$. For another example, a mass flux $\sigma$ of a flow is an ( $n-1$ )-form taking values in $\mathbb{R} \mathrm{kg} / \mathrm{s}$ (i.e., $\sigma \in \Omega^{n-1}(M ; \mathbb{R} \mathrm{kg} / \mathrm{s})$.) The value $\int_{\Sigma} \sigma$ can represent the amount of matter passing through a hypersurface $\Sigma$ per unit time.

## Alternating Forms

To formally define differential forms, one considers the infinitesimal version of the above integral quantities. Under some smoothness conditions, if we let a $k$-dimensional surface $\Sigma$ shrink to a infinitesimal parallelepiped $\Sigma^{\varepsilon}$ about a point $p$ with diameter $O(\varepsilon)$, we have that the integral $\int_{\Sigma^{\varepsilon}} \alpha \sim O\left(\varepsilon^{k}\right)$. In this linearized regime, the value $\lim _{\varepsilon \rightarrow 0} \frac{1}{\varepsilon^{k}} \int_{\Sigma^{\varepsilon}} \alpha$ is linear in the orientation and the shrinking rate of the parallelepiped $\Sigma^{\varepsilon}$. Such a $\Sigma^{\varepsilon}$ can be represented by

$$
\left(\varepsilon X_{1}, \ldots, \varepsilon X_{k}\right)=\varepsilon^{k}\left(X_{1}, \ldots, X_{k}\right)
$$

where $\left(X_{1}, \ldots, X_{k}\right)$ is the parallelepiped spanned by the $k$ vectors $X_{1}, \ldots, X_{k} \in$ $T_{p} M$ at $p \in M .^{*}$ The object $\left(X_{1}, \ldots, X_{k}\right)$ is defined to be linear in each argu-

[^11]ment. Interchanging the arguments flips the orientations:

$$
\left(X_{1}, \ldots, X_{i}, \ldots, X_{j}, \ldots, X_{k}\right)=-\left(X_{1}, \ldots, X_{j}, \ldots, X_{i}, \ldots, X_{k}\right)
$$

Now, one denotes for a $k$-form $\alpha$

$$
\left.\alpha\right|_{p}\left(X_{1}, \ldots, X_{k}\right) \equiv \lim _{\varepsilon \rightarrow 0} \frac{1}{\varepsilon^{k}} \int_{\Sigma^{\varepsilon}} \alpha, \quad \Sigma^{\varepsilon} \sim \varepsilon^{k}\left(X_{1}, \ldots, X_{k}\right) .
$$

That is, a differential form $\alpha$ at a point $p$ is just a linear functional on $\left\{\left(X_{1}, \ldots, X_{k}\right) \mid X_{1}, \ldots, X_{k} \in T_{p} M\right\}$. In short, a differential $k$-form is an alternating $k$-linear form depending smoothly on the location $p \in M$. Conversely, once such an alternating $k$-linear form field is defined, its integral over a finite surface $\Sigma$ is given by the limit of the Riemann sums. More precisely, take partitions $\Sigma=\bigsqcup_{j=1}^{N} \Sigma_{j}$ and approximate $\Sigma_{j}$ by $\left(Y_{1}^{(j)}, \ldots, Y_{k}^{(j)}\right)$ at some point $p^{(j)} \in \Sigma_{j}$; then

$$
\left.\int_{\Sigma} \alpha \equiv \lim _{\substack{\text { partition } \\ \text { refines }}} \sum_{j=1}^{N} \alpha\right|_{p^{(j)}}\left(Y_{1}^{(j)}, \ldots, Y_{k}^{(j)}\right)
$$

## Wedge Product

The wedge product $\wedge$ is an associative product between alternating multilinear forms. Let $\left.\alpha\right|_{p}$ be an alternating $k$-linear form and $\left.\beta\right|_{p}$ be an alternating $\ell$-linear form. Then $\left.\left.\alpha\right|_{p} \wedge \beta\right|_{p}$ is a $(k+\ell)$-linear form given by

$$
\begin{aligned}
\left(\left.\alpha\right|_{p}\right. & \left.\left.\wedge \beta\right|_{p}\right)\left(X_{1}, \ldots, X_{k+\ell}\right) \\
& =\left.\left.\sum_{\sigma \in \mathrm{Sh}_{k, \ell}} \operatorname{sgn}(\sigma) \alpha\right|_{p}\left(X_{\sigma(1)}, \ldots, X_{\sigma(k)}\right) \beta\right|_{p}\left(X_{\sigma(k+1)}, \ldots, X_{\sigma(k+\ell)}\right)
\end{aligned}
$$

where $\mathrm{Sh}_{k, \ell}$ (called the set of $(k, \ell)$-shuffles) is the subset of all permutations $\sigma$ of $(1, \ldots, k+\ell)$ satisfying $\sigma(1)<\cdots<\sigma(k)$ and $\sigma(k+1)<\cdots<\sigma(k+\ell)$.

A wedge product can also be built upon a more general multiplication. For example if $\alpha$ and $\beta$ are vector-valued $k$ - and $\ell$-form, and suppose $\langle\cdot, \cdot\rangle$ denotes the inner product on the vector space in which $\alpha$ and $\beta$ can take value. Then $\langle\alpha \wedge \beta\rangle$ is a scalar-valued ( $k+\ell$ )-form defined analogously

$$
\begin{aligned}
& \langle\alpha \wedge \beta\rangle\left(X_{1}, \ldots, X_{k+\ell}\right) \\
& \quad=\sum_{\sigma \in \operatorname{Sh}_{k, \ell}} \operatorname{sgn}(\sigma)\left\langle\alpha\left(X_{\sigma(1)}, \ldots, X_{\sigma(k)}\right), \beta\left(X_{\sigma(k+1)}, \ldots, X_{\sigma(k+\ell)}\right)\right\rangle .
\end{aligned}
$$

## Exterior Derivative

The exterior derivative is an operator $d: \Omega^{k}(M) \rightarrow \Omega^{k+1}(M)$, which can be best understood in integral form. For a $k$-form $\alpha$, the $(k+1)$-form $d \alpha$ is defined so that

$$
\begin{equation*}
\int_{\Sigma} d \alpha=\int_{\partial \Sigma} \alpha \tag{A.1}
\end{equation*}
$$

for every $(k+1)$-dimensional surface $\Sigma$. Here $\partial$ is the boundary operator. Using the infinitesimal alternating multilinear form point of view for a differential form, $d$ satisfies the following axioms

1. $d \circ d=\mathrm{o}$;
2. $d(\alpha \wedge \beta)=d \alpha \wedge \beta+(-1)^{k} \alpha \wedge d \beta$ when $\alpha$ is a $k$-form (Leibniz rule);
3. for a o-form $f$, the 1-form $d f$ satisfies $d f(X)=X f$ for each tangent vector $X$. Here $X f$ denotes the directional derivative of $f$ along $X$.

Depending on the context, we may use the notation $X f, d_{X} f$ or $d f(X)$ for the directional derivative of a function.

Starting from these axioms, one can also show (A.1) known as Stokes Theorem.

Tangent Maps Here is a special case of exterior derivative. Given a smooth map $\phi: M \rightarrow N$ between two manifolds $M$ and $N$ (i.e., $\phi$ is an $N$-valued o-form on $M), d \phi$ is called the tangent map. The counterpart of $d \phi$ in vector calculus is the Jacobian matrix. $d \phi$ is a vector-valued 1-form. At each point $p \in M,(d \phi)_{p}: T_{p} M \rightarrow T_{\phi(p)} N$ is a linear map, such that for each curve $\gamma:[-\varepsilon, \varepsilon] \rightarrow M$ one has the chain rule

$$
\frac{d}{d t}(\phi \circ \gamma)=d \phi\left(\frac{d}{d t} \gamma\right) .
$$

## Pullback Operators

Given a smooth map $\phi: M \rightarrow N$ between two manifolds $M$ and $N$, and a differential form $\eta \in \Omega^{k}(N)$, the pullback of $\eta$ through the map $\phi$ is denoted by $\phi^{*} \eta \in \Omega^{k}(M)$. Its definition is given formally in the integral form:

$$
\begin{equation*}
\int_{\Sigma} \phi^{*} \eta=\int_{\phi(\Sigma)} \phi \tag{A.2}
\end{equation*}
$$

for all $k$-dimensional $\Sigma$. This corresponds to change of coordinate for integrals in vector calculus. In the multilinear-form picture for differential forms, the pullback is defined by that for $X_{1}, \ldots, X_{k} \in T_{p} M$

$$
\left.\phi^{*} \eta\right|_{p}\left(X_{1}, \ldots, X_{k}\right):=\left.\eta\right|_{\phi(p)}\left(d \phi\left(X_{1}\right), \ldots, d \phi\left(X_{k}\right)\right) .
$$

In the special case of applying to a o-form $f \in \Omega^{\circ}(N)$, the pullback is simply $\phi^{*} f=f \circ \phi$. Note that the pullback operator $\phi^{*}$ commutes with $d$ and distributes over $\wedge$ 's

$$
d\left(\phi^{*} \eta\right)=\phi^{*}(d \eta) ; \quad \phi^{*}(\alpha \wedge \beta)=\left(\phi^{*} \alpha\right) \wedge\left(\phi^{*} \beta\right)
$$

## A. 2 Metric Induced Dualities

A metric is a symmetric positive-definite bilinear form $\langle\cdot, \cdot\rangle_{p}$ defined on each tangent space $T_{p} M$ that smoothly depends on $p \in M$. Note that the operators defined above - the wedge product $\wedge$, the exterior derivative $d$, and the pullback operators $\phi^{*}$ - do not depend on or require a metric on the domain $M$. Here we take a look at a few operators rising from a metric $\langle\cdot, \cdot\rangle$.

A manifold with a metric is called a Riemannian manifold.

## Musical Isomorphisms

A 1 -form $\alpha \in \Omega^{1}(M)$ is an object to be integrated along a curve $\int_{\Gamma} \alpha$. Such an oriented line integral can be interpreted as a circulation of a vector field. In fact, using vector calculus notation, there is a unique vector field A such that the circulation $\int_{\Gamma} \mathbf{A} \cdot d \boldsymbol{\ell}=\int_{\Gamma} \alpha$ for all smooth curve $\Gamma$. The isomorphism between 1-forms and vectors are the musical isomorphisms, which include the flat operator b and the sharp operator $\#$.

In the picture where differential forms are multilinear forms, the flat operator is defined pointwise $(\cdot)^{b}: T_{p} M \rightarrow \Omega_{p}^{1}(M)=T_{p}^{*} M$ by that

$$
A^{b}(X)=\langle A, X\rangle_{p} \quad \text { for all } X \in T_{p} M
$$

and the sharp operator is its inverse $(\cdot)^{\sharp}: \Omega_{p}^{1}(M) \rightarrow T_{p} M$. That is, $\left.\alpha\right|_{p} ^{\sharp}$ is the unique vector in $T_{p} M$ so that

$$
\left\langle\left.\alpha\right|_{p} ^{\sharp}, X\right\rangle_{p}=\left.\alpha\right|_{p}(X) \quad \text { for all } X \in T_{p} M
$$

Let $\phi_{0}=\mathrm{id}: M \rightarrow M$ be the identity map, and let $d \phi_{0}$ be its tangent map. Note that $d \phi_{\mathrm{o}}$ is just the identity vector-valued 1 -form $d \phi_{0}(X)=X$. Using $d \phi_{0}$, we can also write

$$
A^{b}=\left\langle A, d \phi_{0}\right\rangle .
$$

From this we see that the circulation of a vector field $A$ over a curve $\Gamma$ is indeed

$$
\int_{\Gamma}\left\langle A, d \phi_{0}\right\rangle=\int_{\Gamma} A^{b}=\int_{\Gamma} \alpha
$$

## Hodge Stars

The Hodge star $\star$ is defined pointwise $\star: \Omega_{p}^{k}(M) \rightarrow \Omega_{p}^{n-k}(M)$ so that for each positively oriented orthonormal frame $\left(X_{1}, \ldots, X_{n}\right)$ for $T_{p} M$,

$$
\left(\left.\star \alpha\right|_{p}\right)\left(X_{1}, \ldots, X_{n-k}\right)=\left.\alpha\right|_{p}\left(X_{n-k+1}, \ldots, X_{n}\right)
$$

It is convenient to use the Hodge star to express the following measures. When $\star$ is applied on 1 , we obtain the volume form $\star 1 \in \Omega^{n}(M)$; i.e., $\int_{V} \star 1$ is the volume of $V$ under the current metric. If $X$ is a vector field, then $\star X^{b} \in \Omega^{n-1}(M)$ is the flux form of $X$. That is, given a oriented hypersurface $\Sigma$, the flux of $X$ through $\Sigma$ is $\int_{\Sigma}\langle X, N\rangle d A=\int_{\Sigma} \star X^{b}$, where $N$ is the unit normal vector of $\Sigma$.

We list some notes for calculations involving $\star^{\prime}$ s. First, $\star$ "passes through" o-forms. If $f$ is a o-form and $\alpha$ is a $k$-form, then $\star(f \alpha)=f \star \alpha$. Another useful fact is that $\star \star \alpha=(-1)^{k(n-k)} \alpha$ for each $k$-form $\alpha$. In particular $\star^{-1}=(-1)^{k(n-k)} \star$.

## Inner Products between Forms

Observe that for vectors $X, Y \in T_{p} M$, we have

$$
\langle X, Y\rangle \star 1=X^{b} \wedge \star Y^{b} .
$$

This can be seen by plugging in an orthonormal basis $\left(e_{1}, \ldots, e_{n}\right)$ for $T_{p} M$ and using the definitions of $\wedge$ and $\star$ :

$$
\begin{aligned}
\left(X^{b} \wedge \star Y^{b}\right)\left(e_{1}, \ldots, e_{n}\right) & =\sum_{j=1}^{n} X^{b}\left(e_{j}\right) Y^{b}\left(e_{j}\right) \\
& =\sum_{j=1}^{n}\left\langle e_{j}, X\right\rangle\left\langle e_{j}, Y\right\rangle=\langle X, Y\rangle .
\end{aligned}
$$

We define the inner product between the co-vectors (1-forms) $X^{b}, Y^{b}$ by $\left\langle X^{b}, Y^{b}\right\rangle:=\langle X, Y\rangle=\star\left(X^{b} \wedge \star Y^{b}\right)$. The inner product between forms $\star(\cdot \wedge \star \cdot)$ can be extended to higher degree forms. For $\alpha, \beta \in \Omega^{k}(M)$, define

$$
\langle\alpha, \beta\rangle:=\star(\alpha \wedge \star \beta) .
$$

Expressed with an orthonormal basis $\left(e_{1}, \ldots, e_{n}\right)$ for $T_{p} M$,

$$
\begin{aligned}
\langle\alpha, \beta\rangle & =(\alpha \wedge \star \beta)\left(e_{1}, \ldots, e_{n}\right) \\
& =\sum_{\sigma \in \operatorname{Sh}_{k, n-k}} \alpha\left(e_{\sigma(1)}, \ldots, e_{\sigma(k)}\right) \beta\left(e_{\sigma(1)}, \ldots, e_{\sigma(k)}\right) .
\end{aligned}
$$

While $\langle\alpha, \beta\rangle$ is the pointwise inner product between forms, we define the $L^{2}$-inner product by

$$
\langle\langle\alpha, \beta\rangle\rangle=\int_{M} \alpha \wedge \star \beta
$$

## A. 3 Levi-Civita Connection

We have talked mostly about operations on scalar-valued differential forms. What about vector-valued differential forms? In this section we talk about how to take a general spatial derivative of vectors, differential forms, and vector-valued differential forms when a metric is assigned to the manifold.

Since each tangent space $T_{p} M$ at different $p \in M$ is a different linear space, there is no obvious way to take spatial derivative of a vector field. In fact, in order to take derivative to a vector-valued form, one has to introduce a new notion called connection denoted by $\nabla$. For a vector field $Y \in \Gamma(T M)$, $\nabla Y$ is a vector-valued 1-form such that in a direction $X$, the vector $\nabla_{X} Y$ represents how much $Y$ deviates from being parallel. A canonical choice for a connection on $T M$ is the Levi-Civita connection defined uniquely by the following axioms

1. $\nabla_{f X} Y=f \nabla_{X} Y$ and $\nabla_{X}(f Y)=\left(d_{X} f\right) Y+f \nabla_{X} Y$ for each $X, Y \in \Gamma(T M)$ and $f \in \Omega^{\circ}(M)$. (Affine)
2. $d\langle X, Y\rangle=\langle\nabla X, Y\rangle+\langle X, \nabla Y\rangle$. (Compatible with metric)
3. $\nabla_{X} Y-\nabla_{Y} X=[X, Y]$. (Torsion free)

Here the Lie bracket $[X, Y]$ is the vector so that $[X, Y] f=X Y f-Y X f$ for each function $f$ where $X f$ denote the directional derivative.

## Covariant Derivative of Differential Forms

The Levi-Civita connection also induces a covariant derivative, also denoted by $\nabla$, on (scalar-valued) differential forms on $M$. For each $Y \in \Gamma(T M)$, define

$$
\begin{align*}
& \nabla_{Y}: \Omega^{k}(M ; \mathbb{R}) \rightarrow \Omega_{k}(M ; \mathbb{R}) \\
& \left(\nabla_{Y} \alpha\right)\left(X_{1}, \ldots, X_{k}\right):=d_{Y}\left(\alpha\left(X_{1}, \ldots, X_{k}\right)\right)-\sum_{j=1}^{k} \alpha\left(X_{1}, \ldots, \nabla_{Y} X_{j}, \ldots, X_{k}\right) \tag{A.3}
\end{align*}
$$

One can check that $\left(\nabla_{Y} \alpha\right)\left(X_{1}, \ldots, X_{k}\right)$ only depends on the pointwise value of $X_{1}, \ldots, X_{k}$ as a differential form does. One can also show that $\nabla$ on $\Omega(M ; \mathbb{R})$ is also compatibile with the inner product $\langle\alpha, \beta\rangle=\star(\alpha \wedge \star \beta)$ :

$$
\nabla\langle\alpha, \beta\rangle=\langle\nabla \alpha, \beta\rangle+\langle\alpha, \nabla \beta\rangle
$$

In particular,

$$
\nabla(\star \alpha)=\star(\nabla \alpha), \quad \nabla(\star 1)=0 .
$$

Using the torsion-free condition of the Levi-Civita connection, one would also find the the exterior derivative can be expressed

$$
(d \alpha)\left(X_{0}, \ldots, X_{k}\right)=\sum_{j=0}^{k}(-1)^{j}\left(\nabla_{X_{j}} \alpha\right)\left(X_{0}, \ldots, \widehat{X}_{j}, \ldots, X_{k}\right)
$$

That is, $d \alpha$ is the anti-symmetrization of tensor $\nabla \alpha$.

## Derivatives on Vector-valued Differential Forms

Suppose now $\xi$ is a vector-valued differential form, denoted by $\xi \in \Omega^{k}(M ; T M)$. Then its covariant derivative is given analogously to (A.3)

$$
\left(\nabla_{Y} \xi\right)\left(X_{1}, \ldots, X_{k}\right):=\nabla_{Y}\left(\xi\left(X_{1}, \ldots, X_{k}\right)\right)-\sum_{j=1}^{k} \xi\left(X_{1}, \ldots, \nabla_{Y} X_{j}, \ldots, X_{k}\right)
$$

In particular for vector-valued forms $\xi$ one also has

$$
\nabla(\star \xi)=\star(\nabla \xi)
$$

Now, using the Levi-Civita connection, one can consider the covariant exterior derivative $d^{\nabla}$

$$
d^{\nabla}: \Omega^{k}(M ; T M) \rightarrow \Omega^{k+1}(M ; T M)
$$

by that

1. $d^{\nabla}(\alpha \wedge \xi)=d \alpha \wedge \xi+(-1)^{k} \alpha \wedge d^{\nabla} \xi$ for $\alpha \in \Omega^{k}(M ; \mathbb{R})$ and $\xi \in \Omega^{\ell}(M ; \mathbb{R})$.
2. $d^{\nabla}=\nabla$ when applied on a vector field (vector-valued o-form).

Again, by the torsion-free condition of a Levi-Civita connection, $d^{\nabla} \xi$ for $\xi \in \Omega^{k}(M ; T M)$ is also the anti-symmetrization of $\nabla \xi$ :

$$
(d \xi)\left(X_{0}, \ldots, X_{k}\right)=\sum_{j=0}^{k}(-1)^{j}\left(\nabla_{X_{j}} \xi\right)\left(X_{0}, \ldots, \widehat{X}_{j}, \ldots, X_{k}\right)
$$

Let us list down some important facts regarding to the covariant exterior calculus on vector-valued differential forms.

- $d\langle\xi \wedge \tau\rangle=\left\langle d^{\nabla} \xi \wedge \tau\right\rangle+(-1)^{k}\left\langle\xi \wedge d^{\nabla} \tau\right\rangle$ for $\xi \in \Omega^{k}(M ; T M)$ and $\tau \in$ $\Omega^{\ell}(M ; T M)$.
- Let $\phi_{0}: M \rightarrow M$ be the identity map, and $d \phi_{0}$ be the identity tangent map. Then $d^{\nabla} d \phi_{\mathrm{o}}=\mathrm{o}$ and $d^{\nabla} \star d \phi_{\mathrm{o}}=\mathrm{o}$.
- $d^{\nabla} \circ d^{\nabla}$ is not necessarily zero. Its value is related to the Riemannian curvature.


## A. 4 Interior Products

Interior products form another fundamental building block for exterior calculus. Given a metric $\langle\cdot, \cdot\rangle$ for $T_{p} M$ and a vector $X \in T_{p} M$, the interior product is a pointwise linear operator $\iota_{X}: \Omega_{p}^{k+1}(M) \rightarrow \Omega_{p}^{k}(M)$ which satisfies

1. $\iota_{X} \circ \iota_{X}=0$;
2. $\iota_{X}(\alpha \wedge \beta)=\left(\iota_{X} \alpha\right) \wedge \beta+(-1)^{k} \alpha \wedge\left(\iota_{X} \beta\right)$ where $\alpha \in \Omega_{p}^{k}(M)$ (Leibniz rule);
3. for $Y^{b} \in \Omega_{p}^{1}(M), \iota_{X} Y^{b}=\langle X, Y\rangle$.

Since $\iota_{X}$ satisfies the same 1 st and 2 nd axioms as those for $d$, an interior product is also called an interior derivative. However, no differentiation is taken when applying $\iota_{X}$. Effectively, for each $\alpha \in \Omega_{p}^{k+1}(M)$,

$$
\left(\iota_{X} \alpha\right)\left(X_{1}, \ldots, X_{k}\right)=\alpha\left(X, X_{1}, \ldots, X_{k}\right)
$$

for all $X_{1}, \ldots, X_{k} \in T_{p} M$.

## Duality with Wedge Products

An important identity for the interior products is that if $\alpha \in \Omega_{p}^{k}(M)$ then

$$
\begin{equation*}
(-1)^{k} \iota_{X} \star \alpha=\star\left(X^{b} \wedge \alpha\right) \tag{A.4}
\end{equation*}
$$

To check this, consider $X=X_{0}$ be part of an orthonormal basis $\left\{X_{0}, X_{1}, \ldots\right.$, $\left.X_{n-1}\right\}$ for $T_{p} M$. Also consider its dual basis $\left\{X_{0}^{b}, X_{1}^{b}, \ldots, X_{n-1}^{b}\right\}$ for $\Omega_{p}^{1}(M)$. Then $\alpha$ can be represented by a linear combination of $X_{\sigma(\mathrm{o})}^{\mathrm{b}} \wedge \cdots \wedge X_{\sigma(k-1)}^{\mathrm{b}}$ for $\sigma \in \mathrm{Sh}_{k, n-k}$, and we only need to check (A.4) for basis elements. There are two types of basis elements, the ones involving $X_{0}^{b}$ and the ones without. For a basis of the former kind, say $\alpha=X^{b} \wedge X_{1}^{b} \cdots \wedge X_{k-1}^{b}$, then we have the right-hand side of (A.4) obviously zero; and so is the left-hand side since $\iota_{X}(\star \alpha)=\iota_{X}\left(X_{k}^{b} \wedge \cdots \wedge X_{n-1}^{b}\right)=0$ using Leibniz rule. Now, for a basis element not involving $X^{b}$, let us consider $X_{1}^{b} \wedge \cdots \wedge X_{k}^{b}$. Then the right-hand side of (A.4) is

$$
\star\left(X^{b} \wedge X_{1}^{b} \wedge \cdots \wedge X_{k}^{b}\right)=X_{k+1}^{b} \wedge \cdots \wedge X_{n-1}^{b}
$$

which agrees with the left-hand side:

$$
\begin{aligned}
(-1)^{k} \iota_{X} \star\left(X_{1}^{b} \wedge \cdots \wedge X_{k}^{b}\right) & =\iota_{X}\left(X^{b} \wedge X_{k+1}^{b} \wedge \cdots \wedge X_{n-1}^{b}\right) \\
& =X_{k+1}^{b} \wedge \cdots \wedge X_{n-1}^{b}
\end{aligned}
$$

The identity (A.4) also implies that for each $\alpha \in \Omega_{p}^{k+1}(M)$ and $\beta \in \Omega_{p}^{k}(M)$

$$
\left(\iota_{X} \alpha\right) \wedge \star \beta=\alpha \wedge \star\left(X^{b} \wedge \beta\right)
$$

since

$$
\begin{aligned}
\left(\iota_{X} \alpha\right) \wedge \star \beta & =\iota_{X}(\underbrace{\alpha \wedge \star \beta}_{(n+1) \text {-form }=0})-(-1)^{k+1} \alpha \wedge \iota_{X} \star \beta \\
& =(-1)^{k} \alpha \wedge \star \star^{-1} \iota_{X} \star \beta=\alpha \wedge \star\left(X^{b} \wedge \beta\right) .
\end{aligned}
$$

Therefore $\iota_{X}$ is regarded as the dual operator of $X^{b} \wedge$ under the pairing $(\cdot) \wedge \star(\cdot)$.

## Examples of Interior Products and Wedge Products

We list down a few useful special cases of interior products and wedge products. All of them can be easily checked using their definitions and (A.4).

- If $f$ is a o-form and $\alpha$ is a $k$-form, then $\iota_{X}(f \alpha)=f \iota_{X} \alpha$.
- If $\star 1$ is the volume form, then $\iota_{X}(\star 1)=\star X^{b}$.
- Suppose $M=\mathbb{R}^{3}$. Let $\alpha$ be a 1 -form associated with $A=\alpha^{\sharp}$. Then $\iota_{X} \alpha=\langle X, A\rangle$ and $X^{b} \wedge \alpha=\star(X \times A)^{b}$. Here $\times$ is the cross product on $\mathbb{R}^{3}$.
- Suppose $M=\mathbb{R}^{3}$. Let $\beta$ be a 2 -form, which is associated with a vector $B$ by $B=(\star \beta)^{\#}$. Then $\iota_{X} \beta=-(X \times B)^{b}$ and $X^{b} \wedge \beta=\star\langle X, B\rangle$.
- The Leibniz rule $\iota_{X}\left(A^{b} \wedge B^{b}\right)=\left(\iota_{X} A^{b}\right) B^{b}-A^{b}\left(\iota_{X} B^{b}\right)$ is translated to the vector identity $-X \times(A \times B)=\langle X, A\rangle B-\langle X, B\rangle A$.


## Projection and Rejection

Using the interior products and wedge products together one can express the projection of $k$-forms onto the orthogonal complement of $X \in T_{p} M$. Suppose $|X|=1$. Then $\iota_{X} \circ\left(X^{\mathrm{b}} \wedge\right)$ is a projection so that for each $\alpha \in \Omega_{p}^{k}$ and $Y_{1}, \ldots, Y_{k} \in T_{p} M$

$$
\iota_{X}\left(X^{b} \wedge \alpha\right)\left(Y_{1}, \ldots, Y_{k}\right)=\alpha\left(P_{X^{\perp}} Y_{1}, \ldots P_{X^{\perp}} Y_{k}\right)
$$

where $P_{X^{\perp}}$ is the orthogonal projection to the orthogonal complement $X^{\perp}$. The remainder of the projection, i.e. the rejection, is given by $\left(X^{b} \wedge\right) \circ \iota_{X}$ by checking that

$$
\iota_{X} \circ\left(X^{\mathrm{b}} \wedge\right)+\left(X^{\mathrm{b}} \wedge\right) \circ \iota_{X}=\mathrm{id}
$$

There is a special scenario when the projection and rejection operators are useful. Suppose $\partial M$ denotes the boundary of $M$ viewed as an $(n-1)-$ dimensional submanifold using the inclusion map $j_{\partial M}: \partial M \hookrightarrow M$. Let $N$ be the unit normal vector of $\partial M$. Then $\mathbf{t}=\iota_{N} \circ\left(N^{\mathrm{b}} \wedge\right)$ and $\mathbf{n}=\left(N^{\mathrm{b}} \wedge\right) \circ \iota_{N}$ respectively extract the tangent and normal components at the boundary, as introduced in [G. Schwarz, 1995, pp. 27]. In particular $\mathbf{t}$ is often identified with the pullback $j_{\partial M}^{*}$.

## Extrusion

Interior products applied on a differential form can also be understood in the framework where differential forms are treated as integrated objects [Mullen et al., 2011]. It turns out that the interior products are the dual of extrusion. Extrusion means "growing" a point into a curve, a curve into a surface, or a surface into a volume along a vector field. Let $X \in \Gamma(T M)$
be a vector field, and let $\phi_{t}^{X}$ be a flow $\phi_{t}^{X}: M \rightarrow M$ satisfying the initial condition

$$
\phi_{\mathrm{o}}^{X}=\mathrm{id},\left.\quad \frac{\partial}{\partial t}\right|_{t=0} \phi_{t}^{X}=X
$$

For each $k$-dimensional surface $\Sigma$ we denote $\phi_{t}^{X}(\Sigma)$ the resulting surface transported by the flow map $\phi_{t}^{X}$. Now, let $\operatorname{ext}_{\varepsilon}^{X}(\Sigma)$ denote the trajectory of the flowing geometry

$$
\operatorname{ext}_{\varepsilon}^{X}(\Sigma):=\bigcup_{o \leq t \leq \varepsilon} \phi_{t}^{X}(\Sigma)
$$

and we call it an extrusion (with $\varepsilon$ amount) of $\Sigma$ with initial velocity $X$. One may also think of $\phi^{X}$ as a map on an extended domain that includes the time variable

$$
\phi^{X}: \Sigma \times[0, \varepsilon] \rightarrow M
$$

which serves as a homotopy between $\Sigma=\phi^{X}(\Sigma \times\{0\})$ and $\phi_{\varepsilon}^{X}(\Sigma)=\phi^{X}(\Sigma \times$ $\{\varepsilon\})$. Then the extrusion is simply the $(k+1)$-dimensional image

$$
\operatorname{ext}_{\varepsilon}^{X}(\Sigma)=\phi^{X}(\Sigma \times[0, \varepsilon])
$$

In particular, using the natural orientation

$$
\begin{aligned}
\partial(\Sigma \times[\mathrm{o}, \varepsilon]) & =-\partial \Sigma \times[\mathrm{o}, \varepsilon]+\Sigma \times \partial([\mathrm{o}, \varepsilon]) \\
& =-\partial \Sigma \times[\mathrm{o}, \varepsilon]+\Sigma \times\{\varepsilon\}-\Sigma \times\{\mathrm{o}\}
\end{aligned}
$$

we have the relation

$$
\begin{equation*}
\phi_{\varepsilon}^{X}(\Sigma)-\Sigma=\partial\left(\operatorname{ext}_{\varepsilon}^{X}(\Sigma)\right)+\operatorname{ext}_{\varepsilon}^{X}(\partial \Sigma) \tag{A.5}
\end{equation*}
$$

Now, turning back to the interior product. The geometric meaning of the interior product $\iota_{X}: \Omega^{k+1}(M) \rightarrow \Omega^{k}(M)$ can be described using an extrusion operator. For every $(k+1)$-form $\alpha$ and every $k$-dimensional surface $\Sigma$, the evaluation of $\iota_{X} \alpha$ on $\Sigma$ can be written as

$$
\begin{equation*}
\int_{\Sigma} \iota_{X} \alpha=\lim _{\varepsilon \rightarrow 0} \frac{1}{\varepsilon} \int_{\operatorname{ext}_{\varepsilon}^{X}(\Sigma)} \alpha \tag{A.6}
\end{equation*}
$$

for any extrusion $\operatorname{ext}_{\varepsilon}^{X}$ with initial velocity $X$.
Take $\iota_{X}(\star 1)$ on the volume form $(\star 1)$ for example. We know previously that $\iota_{X}(\star 1)=\star X^{b}$ is the $(n-1)$-form describing the flux of $X$. One can
visualize this relation by that over an $(n-1)$-dimensional surface $\Sigma$, the total flux of the flow generated by $X$ is "the amount of volume passing through $\Sigma$ per unit time." This is indeed given by $\lim _{\varepsilon \rightarrow 0} \frac{1}{\varepsilon} \operatorname{Vol}\left(\operatorname{ext}_{\varepsilon}^{X}(\Sigma)\right)$ which equals to $\int_{\Sigma} \iota_{X}(\star 1)=\int_{\Sigma} \star X^{b}$ by (A.6).

## A. 5 A Short Summary

Up to now, we have introduced all the fundamental operations we need on differential forms. They include metric-independent operations, which are wedge products $\wedge$, exterior derivatives $d$ and pullback operators $\phi^{*}$. There are also metric-dependent operations such as the musical isomorphisms $\#$, $b$, the Hodge dual $\star$, and the interior product $\iota_{X}$. When a differential form is vector-valued, one uses the Levi-Civita connection $\nabla$ and its associated covariant exterior derivative $d^{\nabla}$.

Here we collect some useful identities. Below the greek letters represent some $\alpha \in \Omega^{k}(M ; \mathbb{R}), \beta \in \Omega^{\ell}(M ; \mathbb{R}), \xi \in \Omega^{k}(M ; T M)$ and $\tau \in \Omega^{\ell}(M ; T M)$.

First there are identities in the duality with respect to the paring $\int_{(\cdot)}(\cdot)$ :

- $\int_{\Sigma} d \alpha=\int_{\partial M} \alpha$. (Stokes Theorem, (A.1).)
- $\int_{\Sigma} \phi^{*} \alpha=\int_{\phi(\Sigma)} \phi$. (Eq. (A.2).)
- $\int_{\Sigma} \iota_{X} \alpha=\lim _{\varepsilon \rightarrow 0} \frac{1}{\varepsilon} \int_{\operatorname{ext}_{\varepsilon}^{X}(\Sigma)} \alpha$. (Eq. (A.6).)

Next, there are the closedness rules and the Leibniz rules:

- $d \circ d=0$.
- $\iota_{X} \circ \iota_{X}=0$.
- $d^{\nabla} d \phi_{\mathrm{o}}=\mathrm{o}$ and $d^{\nabla} \star d \phi_{\mathrm{o}}=\mathrm{o}$.
- $d(\alpha \wedge \beta)=d \alpha \wedge \beta+(-1)^{k} \alpha \wedge d \beta$.
- $\iota_{X}(\alpha \wedge \beta)=\iota_{X} \alpha \wedge \beta+(-1)^{k} \alpha \wedge \iota_{X} \beta$.
- $d\langle\xi, \tau\rangle=\left\langle d^{\nabla} \xi \wedge \tau\right\rangle+(-1)^{k}\left\langle\xi \wedge d^{\nabla} \tau\right\rangle$.

The following facts about pullback operators are also important:

- $\left(\phi_{1} \circ \phi_{2}\right)^{*}=\phi_{2}^{*} \phi_{1}^{*}$.
- $d \circ \phi^{*}=\phi^{*} \circ d$.
- $\phi^{*}(\alpha \wedge \beta)=\left(\phi^{*} \alpha\right) \wedge\left(\phi^{*} \beta\right)$.
- $\iota_{X}\left(\phi^{*} \alpha\right)=\phi^{*}\left(\iota_{d \phi(X)} \alpha\right)$.

There is a duality of between interior products and wedge products:

- $X^{b} \wedge \alpha=(-1)^{k} \star^{-1} \iota_{X} \star \alpha$.
- $\left(X^{\mathrm{b}} \wedge\right) \circ \iota_{X}+\iota_{X} \circ\left(X^{\mathrm{b}} \wedge\right)=|X|^{2} \mathrm{id}$.

Finally, there are dualities between vectors and differential forms. For the items involving $B$ we assume $M=\mathbb{R}^{3}$, otherwise $M$ is an arbitrary Riemannian manifold:

- $A^{b}=\left\langle A, d \phi_{0}\right\rangle$.
- $\iota_{X} A^{b}=\langle X, A\rangle$.
- $\iota_{X}\left(\star B^{b}\right)=-(X \times B)^{b}$.
- $X^{b} \wedge B^{b}=\star(X \times B)^{b}$.
- $X^{b} \wedge\left(\star A^{b}\right)=\langle X, A\rangle$.
- $\iota_{X}(\star 1)=\star X^{b}$.

Using these operators and their identities, the rest of the discussion can be written free of coordinate.

## A. 6 Lie Derivatives of Differential Forms

A Lie Derivatives appears when taking the time derivative to an expression involving a time-dependent pullback operator. Suppose $X \in \Gamma(T M)$ is a vector field, and let $\phi_{t}$ be its associated flow. Then for each $k$-form $\alpha \in$ $\Omega^{k}(M)$, its Lie derivative along $X$ is defined by

$$
\mathcal{L}_{X} \alpha:=\left.\frac{\partial}{\partial t}\right|_{t=0}\left(\phi_{t}^{*} \alpha\right) .
$$

Lie derivatives are useful when measuring the rate of change of a differential form evaluated on a moving geometry. Specifically, suppose $\Sigma$ is a $k$-dimensional submanifold, which is then advected by the flow $\phi_{t}(\Sigma)$. Then

$$
\left.\frac{d}{d t}\right|_{t=0} \int_{\phi_{t}(\Sigma)} \alpha=\int_{\Sigma} \mathcal{L}_{X} \alpha
$$

Using (A.5), (A.6) and (A.1) one finds that

$$
\begin{aligned}
\left.\frac{d}{d t}\right|_{t=0} \int_{\phi_{t}(\Sigma)} \alpha & =\lim _{\varepsilon \rightarrow 0} \frac{1}{\varepsilon}\left(\int_{\phi_{t}(\Sigma)}-\int_{\Sigma}\right) \alpha \\
& =\lim _{\varepsilon \rightarrow 0} \frac{1}{\varepsilon}\left(\int_{\mathrm{ext}_{\varepsilon}^{X}(\partial \Sigma)} \alpha+\int_{\partial\left(\mathrm{ext}_{\varepsilon}^{X}(\Sigma)\right)} \alpha\right) \\
& =\int_{\Sigma}\left(d\left(\iota_{X} \alpha\right)+\iota_{X}(d \alpha)\right)
\end{aligned}
$$

For this to be true for every $\Sigma$, we obtain Cartan's homotopy formula (or Cartan's magic formula)

$$
\begin{equation*}
\mathcal{L}_{X}=d \circ \iota_{X}+\iota_{X} \circ d \tag{A.7}
\end{equation*}
$$

## Divergence of a Vector Field

The divergence of a vector field is the rate of change of the volume of an infinitesimal region advected by $X$. This geometric description can be written in terms of $\mathcal{L}_{X}$ :

$$
(\operatorname{div} X) \star 1:=\mathcal{L}_{X}(\star 1)
$$

By (A.7)

$$
\star(\operatorname{div} X)=d\left(\iota_{X} \star 1\right)=d \star X^{b}, \quad \text { or } \quad \operatorname{div} X=\star d \star X^{b} .
$$

Using $X^{b}=\left\langle X, d \phi_{0}\right\rangle$ one also finds

$$
\operatorname{div} X=\star d\left\langle X, \star d \phi_{0}\right\rangle=\star\left\langle\nabla X \wedge \star d \phi_{0}\right\rangle
$$

which is the trace of $\nabla X$. (One can see this by expressing it with an orthonormal basis $\left.\left\{e_{i}\right\}_{i=1}^{n} \star\left\langle\nabla X \wedge \star d \phi_{0}\right\rangle=\sum_{i=1}^{n}\left\langle\nabla_{e_{i}} X, e_{i}\right\rangle.\right)$

## Notes on Material Derivatives

If $\alpha$ is time dependent, then

$$
\left.\frac{\partial}{\partial t}\right|_{t=0}\left(\phi_{t}^{*} \alpha\right)=\left.\frac{\partial}{\partial t}\right|_{t=0} \alpha+\mathcal{L}_{X} \alpha
$$

or in integral form

$$
\left.\frac{d}{d t}\right|_{t=\mathrm{o}} \int_{\phi_{t}(\Sigma)} \alpha=\int_{\Sigma}\left(\frac{\partial}{\partial t}+\mathcal{L}_{X}\right) \alpha
$$

When the geometry $\Sigma$ on which we evaluate forms is just a point $(k=0)$, and when $\alpha$ is a o-form, then $\left(\frac{\partial}{\partial t}+\mathcal{L}_{X}\right)$ is also called the material derivative.

Explicitly, if $f$ is a o-form, then $\mathcal{L}_{X} f=d f(X)$ is just the directional derivative. While material derivatives play a central role in continuum mechanics, their counterpart $\left(\frac{\partial}{\partial t}+\mathcal{L}_{X}\right)$ for higher degree forms are not widely known to the community. Instead, $\left(\frac{\partial}{\partial t}+\mathcal{L}_{X}\right) \alpha$ is usually expressed in terms of the material derivatives of o-forms for the coefficients of $\alpha$ under a coordinate basis, supplied with extra correction terms.

In the following, we demonstrate that some frequently seen directional derivatives with correction terms are just Lie derivatives $\mathcal{L}_{X}$ applied on forms of some nonzero degrees.

## Special Cases of Lie Derivatives

Here we give the formula for the Lie derivatives applied on forms of various degrees in terms of the associated vector expressions.

Lemma A. 1 (Lie Derivative on o-forms). If $f$ is $a$ o-form, then

$$
\mathcal{L}_{X} f=d f(X) .
$$

Proof. $\mathcal{L}_{X} f=\iota_{X}(d f)=d f(X)$.
Lemma A. 2 (Lie Derivative of 1-forms). Suppose $\alpha$ is a 1-form associated with a vector field $A$ by $\alpha=A^{b}$. Then

$$
\mathcal{L}_{X} \alpha=\left(\nabla_{X} A\right)^{b}+\langle A, \nabla X\rangle
$$

Proof. Using the identity tangent map $d \phi_{0}$, we can write $\alpha=\left\langle A, d \phi_{0}\right\rangle$. Then by Leibniz rule for both $\iota_{X}$ and $d$, we have

$$
\begin{aligned}
\mathcal{L}_{X} \alpha & =d\left(\iota_{X}\left\langle A, d \phi_{0}\right\rangle\right)+\iota_{X}\left(d\left\langle A, d \phi_{0}\right\rangle\right) \\
& =d\langle A, X\rangle+\iota_{X}\left\langle\nabla A \wedge d \phi_{0}\right\rangle \\
& =\langle\nabla A, X\rangle+\langle A, \nabla X\rangle+\left\langle\nabla_{X} A, d \phi_{0}\right\rangle-\langle\nabla A, X\rangle \\
& =\langle A, \nabla X\rangle+\left(\nabla_{X} A\right)^{b} .
\end{aligned}
$$

Lemma A. 3 (Lie Derivative of 2-forms on a 3-manifold). Suppose $\beta$ is a 2 -form on a 3 -manifold $M$. Let $B=(\star \beta)^{\#}$ be its associated vector field. Then

$$
\star \mathcal{L}_{X} \beta=\left(\nabla_{X} B-\nabla_{B} X+(\operatorname{div} X) B\right)^{b}
$$

Proof. First observe from

$$
\star\left(B^{b} \wedge X^{b}\right)=-\iota_{B} \star X^{b}=\iota_{X} \star B^{b}
$$

that

$$
\begin{align*}
\left\langle B, \iota_{X} \star d \phi_{0}\right\rangle & =\iota_{X}\left\langle B, \star d \phi_{0}\right\rangle=\iota_{X} \star B^{b} \\
& =-\iota_{B} \star X^{b}=-\left\langle X, \iota_{B} \star d \phi_{0}\right\rangle \tag{A.8}
\end{align*}
$$

Now, writing $\beta=\left\langle B, \star d \phi_{0}\right\rangle$, the Lie derivative becomes

$$
\begin{aligned}
\mathcal{L}_{X} \beta & =d\left(\iota_{X} \star B^{b}\right)+\iota_{X}\left(d \star B^{b}\right) \\
& =d(\underbrace{\left\langle B, \iota_{X} \star d \phi_{0}\right\rangle}_{-\left\langle X, \iota_{B} \star d \phi_{0}\right\rangle})+\iota_{X}(\star \operatorname{div} B)
\end{aligned}
$$

where the first term under derivative has two alternative expressions due to (A.8). We use this fact when we take the derivative as the sum of partial derivatives varying only one of $X$ and $B$ :

$$
d\left(\left\langle B, \iota_{X} \star d \phi_{0}\right\rangle\right)=\left\langle\nabla B \wedge \iota_{X} \star d \phi_{0}\right\rangle-\left\langle\nabla X \wedge \iota_{B} \star d \phi_{0}\right\rangle
$$

Using the Leibniz rule for interior products, we further have

$$
\begin{aligned}
d\left(\left\langle B, \iota_{X} \star d \phi_{0}\right\rangle\right)= & -\iota_{X}\left\langle\nabla B \wedge \star d \phi_{0}\right\rangle+\left\langle\nabla_{X} B, \star d \phi_{0}\right\rangle \\
& +\iota_{B}\left\langle\nabla X \wedge \star d \phi_{0}\right\rangle-\left\langle\nabla_{B} X, \star d \phi_{0}\right\rangle \\
= & -(\operatorname{div} B) \star X^{b}+\star\left(\nabla_{X} B\right)^{b}+(\operatorname{div} X) \star B^{b}-\star\left(\nabla_{B} X\right)^{b} .
\end{aligned}
$$

Therefore,

$$
\mathcal{L}_{X} \beta=\star\left(\nabla_{X} B-\nabla_{B} X+(\operatorname{div} X) B\right)^{b}
$$

Lemma A. 4 (Lie Derivative of $n$-forms). Let $\rho$ be an $n$-form associated with a $o$-form q by $\rho=\star q$. Then

$$
\star \mathcal{L}_{X} \rho=d q(X)+(\operatorname{div} X) q .
$$

Proof. Using Cartan's formula, we have

$$
\begin{aligned}
\mathcal{L}_{X}(\star q) & =d\left(\iota_{X} \star q\right)+\iota_{X} \underbrace{(d \star q)}_{=0} \\
& =d\left(q \star X^{b}\right)=\underbrace{d q \wedge \star X^{b}}_{\star \iota_{X} d q}+q \underbrace{d \star X^{b}}_{\star(\operatorname{div} X)}
\end{aligned}
$$

and the proof follows.

## A. 7 General Variation Formula for Pullback Forms

In this section we introduce a formula for the variation of a pullback of a differential form, which is similar but more general to Cartan's formula for Lie derivatives. Suppose $M$ and $N$ are manifolds (possibly with different dimension) and suppose $N$ is Riemannian. Let $\left\{\psi_{t}\right\}_{t \in[0,1]}$ be a family of smooth map $\psi_{t}: M \rightarrow N$ smoothly depending on $t$, and let $\alpha \in \Omega^{k}(N ; \mathbb{R})$ be a fixed $k$-form on $N$. Now, we are interested in the variation

$$
\left.\frac{\partial}{\partial t}\right|_{t=0}\left(\psi_{t}^{*} \alpha\right)
$$

of the $t$-dependent form $\psi_{t}^{*} \alpha \in \Omega^{k}(M ; \mathbb{R})$.
Let us write $\dot{\psi}_{t}=\frac{\partial}{\partial \hat{t}_{\tilde{t}}=t} \psi_{\tilde{t}}$, which is a function

$$
\dot{\psi}_{t}: M \rightarrow T N \quad \text { such that } \quad \dot{\psi}_{t}(x) \in T_{\psi_{t}(x)} N
$$

Then the variation formula is given by

$$
\begin{equation*}
\left.\frac{\partial}{\partial t}\right|_{t=\mathrm{o}}\left(\psi_{t}^{*} \alpha\right)=d\left(\psi_{\mathrm{o}}^{*} \iota_{\psi_{\mathrm{o}}} \alpha\right)+\psi_{\mathrm{o}}^{*} \iota_{\psi_{\mathrm{o}}} d \alpha . \tag{A.9}
\end{equation*}
$$

To see this is true, first we let the time variable be part of an extended domain, and write $\psi$ as a smooth function $\psi: M \times[\mathrm{O}, \mathrm{I}] \rightarrow N$. In particular, for each $k$-dimensional submanifold $\Sigma \subset M$ and $t \in[0,1]$, the restriction $\left.\psi\right|_{\Sigma \times[0, t]}$ serves as the homotopy between $\left.\psi\right|_{\Sigma \times\{0\}}$ and $\left.\psi\right|_{\Sigma \times\{t\}}$. In particular one has

$$
\begin{equation*}
\partial(\psi(\Sigma \times[\mathrm{o}, t]))=\psi(\Sigma \times\{t\})-\psi(\Sigma \times\{\mathrm{o}\})-\psi(\partial \Sigma \times[\mathrm{o}, t]) \tag{A.10}
\end{equation*}
$$

We also recognize that

$$
\psi(\Sigma \times[\mathrm{o}, t])=\operatorname{ext}_{t}\left(\psi_{\mathrm{o}}(\Sigma)\right), \quad \psi(\partial \Sigma \times[\mathrm{o}, t])=\operatorname{ext}_{t}\left(\psi_{\mathrm{o}}(\partial \Sigma)\right)
$$

where $\operatorname{ext}_{t}$ is an extrusion operator on $N$ with initial velocity $\dot{\psi}_{\mathrm{o}}$. Now we can compute

$$
\begin{aligned}
& \int_{\Sigma} \frac{\partial}{\partial t}\left(\psi_{t}^{*} \alpha\right)=\left.\frac{\partial}{\partial t}\right|_{t=0} \int_{\Sigma} \psi_{t}^{*} \alpha=\lim _{\varepsilon \rightarrow 0} \frac{1}{\varepsilon}\left(\int_{\psi_{t}(\Sigma)} \alpha-\int_{\psi_{0}(\Sigma)} \alpha\right) \\
& \stackrel{(\mathrm{A} \cdot 10)}{=} \lim _{\varepsilon \rightarrow 0} \frac{1}{\varepsilon}\left(\int_{\operatorname{ext}_{t}\left(\psi_{0}(\partial \Sigma)\right)} \alpha+\int_{\partial\left(\operatorname{ext}_{t}\left(\psi_{0}(\Sigma)\right)\right)} \alpha\right)
\end{aligned}
$$

and now using $\int_{\Sigma} d \alpha=\int_{\partial \Sigma} \alpha, \int_{\Sigma} \psi_{0}^{*} \alpha=\int_{\psi_{0}(\Sigma)} \alpha$ and $\int_{\Sigma} \iota_{\psi_{0}} \alpha=\lim _{\varepsilon \rightarrow \mathrm{o}} \frac{1}{\varepsilon} \int_{\operatorname{ext}_{\varepsilon}(\Sigma)} \alpha$, we get

$$
\int_{\Sigma} \frac{\partial}{\partial t}\left(\psi_{t}^{*} \alpha\right)=\int_{\Sigma}\left(d\left(\psi_{\mathrm{o}}^{*} \iota_{\psi_{0}} \alpha\right)+\psi_{\mathrm{o}}^{*} \iota_{\psi_{\mathrm{o}}} d \alpha\right)
$$

and hence (A.9).

## A. 8 Codifferential and Laplacian

As the last topic on exterior calculus, let us briefly talk about codifferential and Laplacian. Using Leibniz rule, we have that for $\alpha \in \Omega^{k-1}(M)$ and $\beta \in \Omega^{k}(M)$,

$$
\begin{aligned}
d(\alpha \wedge \star \beta) & =(d \alpha) \wedge \star \beta+(-1)^{k-1} \alpha \wedge d \star \beta \\
& =(d \alpha) \wedge \star \beta-(-1)^{k} \alpha \wedge \star\left(\star^{-1} d \star \beta\right)
\end{aligned}
$$

Taking the integral over $M$ we get

$$
\underbrace{\oint_{\partial M} \alpha \wedge \star \beta}_{\int_{M} d(\alpha \wedge \star \beta)}=\left\langle\langle d \alpha, \beta\rangle-\left\langle\left\langle\alpha,(-1)^{k} \star^{-1} d \star \beta\right\rangle\right\rangle .\right.
$$

Therefore, up to a boundary condition so that $\int_{\partial M} \alpha \wedge \star \beta=\mathrm{o}$, the adjoint of $d$ with respect to $\langle\langle\cdot, \cdot\rangle$ is

$$
d^{\dagger}=(-1)^{k} \star^{-1} d \star
$$

when applied to a $k$-form. The operator $d^{\dagger}$ is called the codifferential.
Using the exterior derivative and the codifferential operator, the Dirichlet energy of a $k$-form $\alpha$ is defined by

$$
\mathcal{E}_{\mathrm{D}}(\alpha):=\frac{1}{2}\langle\langle d \alpha, d \alpha\rangle\rangle+\frac{1}{2}\left\langle\left\langle d^{\dagger} \alpha, d^{\dagger} \alpha\right\rangle .\right.
$$

If one takes a variation ${ }^{\circ}$ in $\alpha$, then the variation of the Dirichlet energy is given by

$$
\begin{align*}
\stackrel{\circ}{\varepsilon}_{\mathrm{D}} & =\langle\langle d \stackrel{\circ}{\alpha}, d \alpha\rangle\rangle+\left\langle\left\langle d^{\dagger} \stackrel{\circ}{\alpha}, d^{\dagger} \alpha\right\rangle\right. \\
& =\left\langle\left\langle\stackrel{\circ}{\alpha}, d^{\dagger} d \alpha\right\rangle+\left\langle\left\langle\stackrel{\circ}{\alpha}, d d^{\dagger} \alpha\right\rangle+\oint_{\partial M} \stackrel{\circ}{\alpha} \wedge \star d \alpha-\oint_{\partial M} d^{\dagger} \alpha \wedge \star \stackrel{\circ}{\alpha}\right.\right. \tag{A.11}
\end{align*}
$$

which motivates the consideration of the negative (semi-)definite operator called Laplacian

$$
\Delta=-\left(d^{\dagger} d+d d^{\dagger}\right)
$$

We will not go further to the Hodge decomposition, which is usually the next after the Laplacian is introduced. Hodge decomposition is important in hydrodynamics. In fact it was first proposed by Helmholtz [1858] discussing hydrodynamics. We refer the reader to [G. Schwarz, 1995] for a full theory written in exterior calculus.

## Appendix B

## QUATERNIONS

Since quaternion numbers will be largely used in Section 4.3, the entire Chapter 6 and onward, we make a note on quaternion algebra for those unfamiliar with it.

## B. 1 The Basics

The space of quaternions $\mathbb{H}$ is $\mathbb{R}^{4}$ equipped with a multiplication. We write $\mathbb{R}^{4}=\mathbb{R} \oplus \mathbb{R}^{3}$, that is $\left(\alpha, v_{1}, v_{2}, v_{3}\right) \in \mathbb{R}^{4}$ is identified as $\alpha+\left(v_{1}, v_{2}, v_{3}\right)=$ $\alpha+\mathbf{v} \in \mathbb{R} \oplus \mathbb{R}^{3}$. The multiplication assigned to $\mathbb{R}^{4}$ vectors is defined by

$$
\begin{aligned}
& (\alpha+\mathbf{v})(\beta+\mathbf{w})=\alpha \beta+\alpha \mathbf{w}+\beta \mathbf{v}+\mathbf{v w}, \text { where } \\
& \mathbf{v w}:=-\langle\mathbf{v}, \mathbf{w}\rangle+\mathbf{v} \times \mathbf{w} \quad \text { for } \mathbf{v}, \mathbf{w} \in \mathbb{R}^{3} .
\end{aligned}
$$

Equivalently one writes

$$
\mathbb{H}=\left\{\alpha+v_{1} i+v_{2} j+v_{3} k \mid \alpha, v_{1}, v_{2}, v_{3} \in \mathbb{R}\right\}
$$

with the multiplication rules

$$
i^{2}=j^{2}=k^{2}=-1, \quad i j=-j i=k, \quad j k=-k j=i, \quad k i=-i k=j
$$

Define also the following notions analogous to those for complex numbers: for $q=\alpha+\mathbf{v} \in \mathbb{H}$,

$$
\begin{aligned}
& \operatorname{Re}(q):=\alpha \in \mathbb{R}, \quad \operatorname{Im}(q):=\mathbf{v} \in \mathbb{R}^{3}, \quad \bar{q}:=\alpha-\mathbf{v} \in \mathbb{H}, \\
& |q|^{2}:=|\alpha|^{2}+|\mathbf{v}|^{2}=q \bar{q}=\bar{q} q \geq 0, \\
& e^{q}:=e^{\alpha}\left(\cos (|\mathbf{v}|)+\sin (|\mathbf{v}|) \frac{\mathbf{v}}{|\mathbf{v}|}\right)
\end{aligned}
$$

and for $p, q \in \mathbb{H}$

$$
\langle p, q\rangle=\langle q, p\rangle:=\operatorname{Re}(\bar{p} q)
$$

which coincides with the Euclidean $\mathbb{R}^{4}$ inner product when we view $p, q \in$ $\mathbb{R}^{4}$.

One also checks the following facts

- $q^{-1}=\frac{1}{|q|^{2}} \bar{q}$.
- For $p, q \in \mathbb{H},|p q|=|p||q|$.
- For $p, q \in \mathbb{H}, \overline{p q}=\bar{q} \bar{p}$.
- The quaternionic multiplication is associative. That is $(p q) r=p(q r)$ for $p, q, r \in \mathbb{H}$.


## B. 2 3D Rotations

Quaternions can represent 3 D rotations in the following way. Suppose $\mathbf{v} \in \mathbb{R}^{3},|\mathbf{v}|=1$ is a rotation axis and $\theta \in \mathbb{R}$. Then the rotation about $\mathbf{v}$ by angle $\theta$ is given by*

$$
\mathbf{y} \mapsto \bar{q} \mathbf{y} q, \quad \text { where } q=e^{-(\theta / 2) \mathbf{v}}=\cos \left(\frac{\theta}{2}\right)-\sin \left(\frac{\theta}{2}\right) \mathbf{v}
$$

One can check that $\mathbf{y} \mapsto \bar{q} \mathbf{y} q$ is a linear map from $\mathbb{R}^{3}$ to $\mathbb{R}^{3}$, an isometry $|\mathbf{y}|=|\bar{q} \mathbf{y} q|$ with $\operatorname{det}(\mathbf{y} \mapsto \bar{q} \mathbf{y} q)=1, \bar{q} \mathbf{v} q=\mathbf{v}$, and every $\mathbf{w} \perp \mathbf{v}$ is sent to $\bar{q} \mathbf{w} q=\cos (\theta) \mathbf{w}-\sin (\theta) \mathbf{v} \times \mathbf{w}$.

As a corollary, every unit quaternion $q \in \mathbb{H},|q|=1$, gives rise to a ${ }_{3} \mathrm{D}$ rotation $\mathbf{y} \mapsto \bar{q} \mathbf{y} q$ since unit quaternions always take the form $q=$ $\cos (\theta / 2)-\sin (\theta / 2) \mathbf{v}$ for some $\theta \in \mathbb{R}$ and unit vector $\mathbf{v} \in \mathbb{R}^{3}$.

## B. 3 Hopf Map

The space of unit quaternions is precisely $\mathrm{S}^{3}$, the set of unit vectors in $\mathbb{R}^{4} \cong \mathbb{H}$. Now using the first unit imaginary $i \in \mathbb{R}^{3}$ consider

$$
\begin{aligned}
\pi: \mathbb{S}^{3} & \rightarrow \mathbb{S}^{2} \\
q & \mapsto \bar{q} i q .
\end{aligned}
$$

The map $\pi$ is called the Hopf map. The Hopf map has the property that $\pi\left(e^{i \theta} q\right)=\pi(q)$ for all $q \in \mathbb{S}^{3}$ and $\theta \in \mathbb{R}$. Conversely if $\pi(p)=\pi(q)$ for $p, q \in \mathbb{S}^{3}$, there exists a unique $e^{i \theta} \in \mathbb{S}^{1}$ such that $p=e^{i \theta} q$. This turns $\mathbb{S}^{3}$ into a fiber bundle over $\mathrm{S}^{2}$ with the Hopf map being the projection map $\mathrm{S}^{3} \xrightarrow{\pi} \mathrm{~S}^{2}$. Each fiber of the bundle $\mathrm{S}^{3} \xrightarrow{\pi} \mathrm{~S}^{2}$ is a circle parameterized by the action $e^{i \theta}$. More details of this Hopf fibration are given in Section 4.3.

[^12]
## B. 4 Quaternions and $\mathbb{C}^{2}$ Vectors

Since complex numbers are more well-acquainted in most science community and more accessible in most numerical libraries, it is often convenient to realize quaternions $a+b i+c j+d k \in \mathbb{H}$ as elements $(a+b i, c+d i)^{\top}$ of $\mathbb{C}^{2}$. By identifying the $i$ in $\mathbb{H}$ with the $i$ in $\mathbb{C}$, the correspondence $\mathbb{H} \cong \mathbb{C}^{2}$ can be expressed as

$$
\begin{aligned}
& \left(\mathbb{C}^{2} \rightarrow \mathbb{H}\right): \Psi=\left[\begin{array}{l}
\psi_{1} \\
\psi_{2}
\end{array}\right] \mapsto \psi=\psi_{1}+\psi_{2} j, \\
& \left(\mathbb{H} \rightarrow \mathbb{C}^{2}\right):=\left(\mathbb{C}^{2} \rightarrow \mathbb{H}\right)^{-1}
\end{aligned}
$$

Note that this choice of identification respects complex linearity from the left:

$$
\left(\mathbb{C}^{2} \rightarrow \mathbb{H}\right)(a+b i) \Psi=(a+b i) \psi \quad \text { for } a+b i \in \mathbb{C}
$$

Inner Products Suppose $\Phi, \Psi \in \mathbb{C}^{2}$ correspond to $\phi, \psi \in \mathbb{H}$ respectively. Then the real inner product

$$
\langle\phi, \psi\rangle=\operatorname{Re}(\bar{\phi} \psi)=\operatorname{Re}\left(\bar{\Phi}^{\top} \Psi\right)
$$

We also define a complex inner product $\langle\cdot, \cdot\rangle_{\mathrm{C}}: \mathbb{H} \times \mathbb{H} \rightarrow \mathbb{C}$ by

$$
\langle\phi, \psi\rangle_{\mathrm{C}}:=\bar{\Phi}^{\top} \Psi=\langle\phi, \psi\rangle+\langle i \phi, \psi\rangle i
$$

with the complex Hermitian property $\langle\phi, \psi\rangle_{\mathrm{C}}=\overline{\langle\psi, \phi\rangle_{\mathrm{C}}}$.

Pauli Matrices The quaternion multiplication from the right $\psi \mapsto \psi i$, $\psi \mapsto \psi j, \psi \mapsto \psi k$ still leaves the expression having the property that $\psi$ is complex linear from the left. Therefore each of $\psi i, \psi j, \psi k$ written in $\mathbb{C}^{2}$ is an expression linear in $\Psi$ in the linear algebra over $\mathbb{C}$. Hence each of them can be written in the form of $A \psi$ for some $\mathbb{C}^{2 \times 2}$ matrix $A$. In physics the Pauli matrices $\sigma_{1}, \sigma_{2}, \sigma_{3}$ are the Hermitian $2 \times 2$ matrices given by

$$
\sigma_{1}:=\left[\begin{array}{ll}
0 & 1  \tag{B.I}\\
1 & 0
\end{array}\right], \quad \sigma_{2}:=\left[\begin{array}{cc}
0 & -i \\
i & 0
\end{array}\right], \quad \sigma_{3}:=\left[\begin{array}{cc}
1 & 0 \\
0 & -1
\end{array}\right] .
$$

Now one may check (by expanding and comparing the terms) that

$$
\begin{align*}
& \left(\mathbb{H} \rightarrow \mathbb{C}^{2}\right) \psi i=i \sigma_{3} \Psi  \tag{B.2a}\\
& \left(\mathbb{H} \rightarrow \mathbb{C}^{2}\right) \psi j=-i \sigma_{2} \Psi  \tag{B.2b}\\
& \left(\mathbb{H} \rightarrow \mathbb{C}^{2}\right) \psi k=i \sigma_{1} \Psi . \tag{B.2c}
\end{align*}
$$

Pauli Spin Vector Given a unit quaternion $\psi \in \mathrm{S}^{3}$ its image under the Hopf map $s=\pi(\psi)=\bar{\psi} i \psi \in \mathbb{S}^{2}$ is called the spin vector. In physics, the Bloch vector $z=\left(z_{1}, z_{2}, z_{3}\right)^{\top}$ rising from $\Psi \in \mathbb{C}^{2},|\Psi|^{2}=1$, is also an $\mathbb{S}^{2}$-valued vector. The Bloch vector $\left(z_{1}, z_{2}, z_{3}\right)^{\top}$ is given by

$$
z_{i}=\bar{\Psi}^{\top} \sigma_{i} \Psi, \quad i=1,2,3
$$

Now one can check that the two notions of spin vectors $s=\left(s_{1}, s_{2}, s_{3}\right)^{\top}$ and $z=\left(z_{1}, z_{2}, z_{3}\right)^{\top}$ are related by

$$
\begin{equation*}
s_{1}=z_{3}, \quad s_{2}=-z_{2}, \quad s_{3}=z_{1} . \tag{B.3}
\end{equation*}
$$

To see this, use $s_{1}=\langle i, s\rangle=\operatorname{Re}(-i \bar{\psi} i \psi)=\operatorname{Re}(\overline{(\psi i)} i \psi)$ and (B.2) to obtain

$$
s_{1}=\operatorname{Re}\left({\overline{\left(i \sigma_{3} \Psi\right)}}^{\top} i \Psi\right)=\bar{\Psi}^{\top} \sigma_{3} \Psi=z_{3} .
$$

The rest of (B.3) can be shown similarly.


[^0]:    ${ }^{\dagger}$ When $q=1$ the velocity is given by $\mathbf{u}=\hbar \operatorname{Re}\left(-\bar{\Psi}^{\top} i \nabla \Psi\right) . \quad$ Therefore $\nabla \cdot \mathbf{u}=$ $\hbar \operatorname{Re}\left(-i|\nabla \Psi|^{2}-\bar{\Psi}^{\top} i \Delta \Psi\right)=-\hbar \operatorname{Re}\left(\bar{\Psi}^{\top} i \Delta \Psi\right)$.

[^1]:    $\ddagger$ All examples used our native implementation in Houdini 15.
    §The videos for the simulations can be found at https://youtu.be/5C9BLAXCe1I

[^2]:    ${ }^{\mathbb{I}}$ When using the volume penalization method one treats solid objects as part of the fluid with a velocity constraint. Since objects do not introduce a new boundary for the simulation, this method is favored by spectral-method-based fluid solvers.

[^3]:    ${ }^{11}$ This symmetry leads to conservation of spin angular momentum $\bar{\Psi}^{\top} \sigma_{i} \Psi$ for $i=1,2,3$ where $\sigma_{i}{ }^{\prime}$ s are the Pauli matrices. This is an additional conservation law that is not present in the classical fluid (Section 8.3 and 9.6).

[^4]:    ${ }^{* *}$ Letting the index of a vertex be $v=(x, y, z)$, the spatial resolution becomes a triple of edge lengths $\ell=\left(\ell_{x}, \ell_{y}, \ell_{z}\right)$, and the overall cube measures $L=\left(\ell_{x} \mathcal{N}_{x}, \ell_{y} \mathcal{N}_{y}, \ell_{z} \mathcal{N}_{z}\right)$. The eigenvalues for the discrete ( $\tilde{\lambda}$ ) resp. continuous ( $\lambda$ ) Laplacian on a periodic domain are

    $$
    \begin{align*}
    & \tilde{\lambda}_{\mathrm{v}}=-\frac{4}{l_{\mathrm{x}}^{2}} \sin ^{2}\left(\frac{\pi \mathrm{x}}{\mathcal{N}_{x}}\right)-\frac{4}{\ell_{\mathrm{y}}^{2}} \sin ^{2}\left(\frac{\pi \mathrm{y}}{\mathcal{N}_{y}}\right)-\frac{4}{\ell_{\mathrm{z}}^{2}} \sin ^{2}\left(\frac{\pi \mathrm{z}}{\mathcal{N}_{z}}\right)  \tag{1.15}\\
    & \lambda_{\mathrm{v}}=-(2 \pi)^{2}\left(\frac{\mathrm{x}^{2}}{L_{\mathrm{x}}^{2}}+\frac{\mathrm{y}^{2}}{L_{\mathrm{y}}^{2}}+\frac{\mathrm{z}^{2}}{L_{\mathrm{z}}^{2}}\right) \tag{1.16}
    \end{align*}
    $$

    The corresponding eigenvalues for the 3D Laplacian with Neumann boundary conditions, i.e., flow tangential to the wall, arise from Eqs. (1.15) and (1.16) by replacing $L \leftarrow 2 L$. In that case the DCT replaces the FFT in Algs. 2 and 3.

    In the continuous case (1.16) can be checked by direct differentiation of the Fourier basis, while (1.15) uses a centered second difference and some straightforward trigonometric identities.
    ${ }^{\dagger \dagger}$ Note that the result of Algorithm 3 is independent of the choice of the constant $\hbar$. One sees this by rewriting Algorithm 3 in terms of the variables $\tilde{\eta} / \hbar, \xi / \hbar, \varphi / \hbar$ instead of $\eta, \xi, \varphi$. In practice we set $\hbar=1$ in Algorithm 3.

[^5]:    *We use Helmholtz's original labels of the theorems.

[^6]:    ${ }^{\dagger}$ Clebsch wrote in his $\S 2$ with the symbols and signs $\sum_{k} u_{k} \delta x_{k}=\delta \varphi+\sum_{r} m_{r} \delta \varphi_{r}$ with arbitrary dimensions on $u$ and $\left(m_{r}\right),\left(\varphi_{r}\right)$. Here $\delta$ is our $d$.

[^7]:    ${ }^{*}$ Non-existence of a global section of the Hopf fibration bundle $\mathbb{S}^{3} \rightarrow \mathbb{S}^{2}$ can be seen by the following. Suppose there were a continuous map $\psi: \mathrm{S}^{2} \rightarrow \mathrm{~S}^{3}$ with $\pi \circ \psi=\mathrm{id}$. Then $\bar{\psi}(x) i \psi(x)=x$ for each $x \in \mathbb{S}^{2}$. As a result, using the imaginary quaternion $j$, the unit imaginary quaternion $\bar{\psi}(x) j \psi(x)$ is always orthogonal to $x$ in $\mathbb{R}^{3}$. Therefore $x \mapsto \bar{\psi}(x) j \psi(x)$ is a continuous unit vector field on $\mathbb{S}^{2}$, which is a contradiction to the hairy ball theorem.

[^8]:    ${ }^{*}$ Both the matrix $P_{\mathrm{C} \psi}=\Psi \bar{\Psi}^{\top}$ and $\left(I-P_{\mathrm{C} j \psi}\right)$ are known as density matrices of pure states in quantum statistical mechanics. The combined matrix (6.11) is known as the density matrix (up to a trace 1 normalization) of a mixed state.

[^9]:    ${ }^{+}$Precessions of spin due to a magnetic field are called the Larmor precession. Its equation of motion is known as the Bloch equation. Written in terms of $\psi$ the associated term is also recognized as a Stern-Gerlach term.

[^10]:    ${ }^{*}$ Using Section B. 4 the product $\psi B$ can be translated into $\sum_{j=1}^{3} B_{j} \sigma_{j} \Psi$ up to a global axis rotation, where $\sigma_{j}^{\prime}$ s are the Pauli matrices.

[^11]:    *Keyword: Grassmann algebra.

[^12]:    *One may find a different convention that the rotation is written as $\mathbf{y} \mapsto q \mathbf{y} \bar{q}$ with $q=e^{(\theta / 2) \mathbf{v}}$. We choose the convention $\mathbf{y} \mapsto \bar{q} \mathbf{y} q$ to keep the expression $\bar{q} \mathbf{y} q$ linear in $q$ from the right and antilinear (conjugate-linear) in $q$ from the left.

