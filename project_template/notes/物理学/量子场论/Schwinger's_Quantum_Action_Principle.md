#  Schwinger's Quantum Action Principle 
## Kimball A. Milton

## Schwinger's Quantum Action Principle: From Dirac's Formulation Through Feynman's Path Integrals, the SchwingerKeldysh Method,Quantum Field Theory, to Source Theory

Springer

# SpringerBriefs in Physics 

## Editorial Board

Egor Babaev, University of Massachusetts, Massachusetts, USA Malcolm Bremer, University of Bristol, Bristol, UK Xavier Calmet, University of Sussex, Sussex, UK Francesca Di Lodovico, Queen Mary University of London, London, UK Maarten Hoogerland, University of Auckland, Auckland, New Zealand Eric Le Ru, Victoria University of Wellington, Wellington, New Zealand Hans-Joachim Lewerenz, California Institute of Technology, Pasadena, USA James Overduin, Towson University, Towson, USA<br>Vesselin Petkov, Concordia University, Concordia, Canada<br>Charles H.-T. Wang, University of Aberdeen, Aberdeen, UK<br>Andrew Whitaker, Queen's University Belfast, Belfast, UK

More information about this series at http://www.springer.com/series/8902

Kimball A. Milton

# Schwinger's Quantum Action Principle 

From Dirac's Formulation Through
Feynman's Path Integrals, the Schwinger-Keldysh Method, Quantum Field Theory, to Source Theory

Springer

Kimball A. Milton<br>Homer L. Dodge Department of Physics and Astronomy<br>The University of Oklahoma<br>Norman<br>USA

ISSN 2191-5423
SpringerBriefs in Physics
ISBN 978-3-319-20127-6
DOI 10.1007/978-3-319-20128-3

Library of Congress Control Number: 2015941137
Springer Cham Heidelberg New York Dordrecht London © The Author(s) 2015
This work is subject to copyright. All rights are reserved by the Publisher, whether the whole or part of the material is concerned, specifically the rights of translation, reprinting, reuse of illustrations, recitation, broadcasting, reproduction on microfilms or in any other physical way, and transmission or information storage and retrieval, electronic adaptation, computer software, or by similar or dissimilar methodology now known or hereafter developed.
The use of general descriptive names, registered names, trademarks, service marks, etc. in this publication does not imply, even in the absence of a specific statement, that such names are exempt from the relevant protective laws and regulations and therefore free for general use.
The publisher, the authors and the editors are safe to assume that the advice and information in this book are believed to be true and accurate at the date of publication. Neither the publisher nor the authors or the editors give a warranty, express or implied, with respect to the material contained herein or for any errors or omissions that may have been made.

Printed on acid-free paper
Springer International Publishing AG Switzerland is part of Springer Science+Business Media (www.springer.com)

## Abstract

Starting from the earlier notions of stationary action principles, we show how Julian Schwinger's Quantum Action Principle descended from Dirac's formulation, which independently led Feynman to his path-integral formulation of quantum mechanics. The connection between the two is brought out, and applications are discussed. The Keldysh-Schwinger time-cycle method of extracting matrix elements in nonequilibrium situations is described. The variational formulation of quantum field theory and the development of source theory constitute the latter part of this work. In this document, derived from Schwinger's lectures over four decades, the continuity of concepts, such as that of Green's functions, becomes apparent.

## Contents

1 Historical Introduction ..... 1
2 Review of Classical Action Principles ..... 3
2.1 Lagrangian Viewpoint ..... 4
2.2 Hamiltonian Viewpoint ..... 6
2.3 A Third, Schwingerian, Viewpoint ..... 7
2.4 Invariance and Conservation Laws ..... 9
2.5 Nonconservation Laws: The Virial Theorem ..... 13
3 Classical Field Theory-Electrodynamics. ..... 15
3.1 Action of Particle in Field ..... 15
3.2 Electrodynamic Action ..... 16
3.3 Energy ..... 19
3.4 Momentum and Angular Momentum Conservation ..... 21
3.5 Gauge Invariance and the Conservation of Charge ..... 24
3.6 Gauge Invariance and Local Conservation Laws ..... 26
4 Quantum Action Principle ..... 31
4.1 Harmonic Oscillator ..... 37
4.2 Forced Harmonic Oscillator ..... 40
4.3 Feynman Path Integral Formulation ..... 44
4.3.1 Example ..... 46
4.4 Toward Source Theory ..... 49
5 Time-Cycle or Schwinger-Keldysh Formulation ..... 51
6 Relativistic Theory of Fields ..... 63
6.1 Inference of Particle Properties ..... 70
6.2 The Connection Between Spin and Statistics ..... 72
6.3 Fermi-Dirac Fields of Spin $1 / 2$ ..... 74
6.4 Spin Zero and One ..... 76
6.5 Spin Zero ..... 78
6.6 Spin One ..... 79
6.7 Electromagnetic Field ..... 81
6.8 Introduction of Charge ..... 83
6.9 Quantum Electrodynamics ..... 87
7 Nonrelativistic Source Theory ..... 91
7.1 Interactions ..... 102
7.2 Bound States ..... 109
8 Concluding Remarks ..... 113
References ..... 115

## Chapter 1 Historical Introduction

Variational principles for dynamical systems have a long history. Although precursors go back at least to Leibnitz (see for example (Euler 1752)) and Euler (1744) the "principle of least action" was given modern form by de Maupertuis $(1744,1746)$. We will not attempt to trace the history here; a brief useful account is given in Sommerfeld's lectures (Sommerfeld 1964). The most important names in the history of the development of dynamical systems, or at least those that will bear most directly on the following discussion, are those of Lagrange (1788) and Hamilton $(1834,1835)$.

Here we are concentrating on the work of Julian Schwinger (1918-1994), who had profound and pervasive influence on 20th century physics, and whose many students have become leaders in diverse fields. ${ }^{1}$ For biographical information about his life and work see (Mehra 2000; Milton 2007). Therefore, we will take up the story in the modern era. Shortly after Dirac's work with Fock and Podolsky (Dirac 1932), in which the demonstration of the equivalence between his theory of quantum electrodynamics, and that of Heisenberg and Pauli (Heisenberg 1929), P. A. M. Dirac wrote a paper on "The Lagrangian in Quantum Mechanics" (Dirac 1933). This paper had a profound influence on Richard Feynman's doctoral dissertation at Princeton on "The Principles of Least Action in Quantum Mechanics" (Feynman 1942), and on his later work on the formulations of the "Space-Time Approach to Quantum Electrodynamics" (Feynman 1949). Dirac's paper further formed the basis for Schwinger's development of the quantum action principle, which first appeared in his final operator field formulation of quantum field theory (Schwinger 1951b), which we will describe in Chap. 6.

The response of Feynman and Schwinger to Dirac's inspiring paper was completely different. Feynman was to give a global "solution" to the problem of

[^0]determining the transformation function, the probability amplitude connecting the state of the system at one time to that at a later time, in terms of a sum over classical trajectories, the famous path integral. Schwinger, instead, derived (initially postulated) a differential equation for that transformation function in terms of a quantum action functional. This differential equation possessed Feynman's path integral as a formal solution, which remained poorly defined; but Schwinger believed throughout his life that his approach was "more general, more elegant, more useful, and more tied to the historical line of development as the quantum transcription of Hamilton's action principle" (Schwinger 1973).

Later, in a tribute to Feynman, Schwinger commented further. Dirac, of course, was the father of transformation theory (Dirac 1927). The transformation function from a description of the system at time $t_{2}$ to a description at time $t_{1}$ is "the product of all the transformations functions associated with the successive infinitesimal increments in time." Dirac said the latter, that is, the transformation function from time $t$ to time $t+d t$ corresponds to $\exp [(i / \hbar) d t L]$, where $L$ is the Lagrangian expressed in terms of the coordinates at the two times. For the transformation function between $t_{2}$ and $t_{1}$ "the integrand is $\exp [(i / \hbar) W]$. where $W=\int_{t_{2}}^{t_{1}} d t L$." "Now we know, and Dirac surely knew, that to within a constant factor the 'correspondence,' for infinitesimal $d t$, is an equality when we deal with a system of nonrelativistic particles possessing a coordinate-dependent potential energy $V \ldots$. Why then, did Dirac not make a more precise, if less general statement? Because he was interested in a general question: What, in quantum mechanics, corresponds to the classical principle of stationary action?"
"Why, in the decade that followed, didn't someone pick up the computational possibilities offered by this integral approach to the time transformation function? To answer this question bluntly, perhaps no one needed it-until Feynman came along." (Schwinger 1989a).

But Schwinger followed the differential route, and starting in early 1950 began a new, his third, formulation of quantum electrodynamics, based on a variational approach. This was first published in 1951 (Schwinger 1951b). A bit later he started developing a new formulation of quantum kinematics, which he called Measurement Algebra, which got its first public presentation at École de Physique des Houches in the summer of 1955. There were several short notes in the Proceedings of the US National Academy published in 1960, explaining both the quantum kinematical approach and the dynamical action principle (Schwinger 1960a-d), but although he often promised to write a book on the subject (as he also promised a book on quantum field theory) nothing came of it. Les Houches lectures, based on notes taken by Robert Kohler, eventually appeared in 1970 (Schwinger 1970a). Lectures based on a UCLA course on quantum mechanics by Schwinger were eventually published under Englert's editorship (Schwinger 2001). The incompleteness of the written record may be partly alleviated by the present essay.

We start on a classical footing.

## Chapter 2 Review of Classical Action Principles

This section grew out of lectures given by Schwinger at UCLA around 1974, which were substantially transformed into Chap. 8 of Classical Electrodynamics (Schwinger 1998). (Remarkably, considering his work on waveguide theory during World War II, now partially recorded in Ref. (Milton 2006), he never gave lectures on this subject at Harvard after 1947.)

We start by reviewing and generalizing the Lagrange-Hamilton principle for a single particle. The action, $W_{12}$, is defined as the time integral of the Lagrangian, $L$, where the integration extends from an initial configuration or state at time $t_{2}$ to a final state at time $t_{1}$ :

$$
\begin{equation*}
W_{12}=\int_{t_{2}}^{t_{1}} d t L \tag{2.1}
\end{equation*}
$$

The integral refers to any path, any line of time development, from the initial to the final state, as shown in Fig. 2.1. The actual time evolution of the system is selected by the principle of stationary action: In response to infinitesimal variations of the integration path, the action $W_{12}$ is stationary-does not have a corresponding infinitesimal change-for variations about the correct path, provided the initial and final configurations are held fixed,

$$
\begin{equation*}
\delta W_{12}=0 . \tag{2.2}
\end{equation*}
$$

This means that, if we allow infinitesimal changes at the initial and final times, including alterations of those times, the only contribution to $\delta W_{12}$ then comes from the endpoint variations, or

$$
\begin{equation*}
\delta W_{12}=G_{1}-G_{2}, \tag{2.3}
\end{equation*}
$$

where $G_{a}, a=1$ or 2 , is a function, called the generator, depending on dynamical variables only at time $t_{a}$. In the following, we will consider three different realizations

Fig. 2.1 A possible path from initial state to final state
![](https://cdn.mathpix.com/cropped/2025_02_21_13f260749f40b979ea80g-012.jpg?height=437&width=459&top_left_y=193&top_left_x=882)
of the action principle, where, for simplicity, we will restrict our attention to a single particle.

### 2.1 Lagrangian Viewpoint

The nonrelativistic motion of a particle of mass $m$ moving in a potential $V(\mathbf{r}, t)$ is described by the Lagrangian

$$
\begin{equation*}
L=\frac{1}{2} m\left(\frac{d \mathbf{r}}{d t}\right)^{2}-V(\mathbf{r}, t) \tag{2.4}
\end{equation*}
$$

Here, the independent variables are $\mathbf{r}$ and $t$, so that two kinds of variations can be considered. First, a particular motion is altered infinitesimally, that is, the path is changed by an amount $\delta \mathbf{r}$ :

$$
\begin{equation*}
\mathbf{r}(t) \rightarrow \mathbf{r}(t)+\delta \mathbf{r}(t) . \tag{2.5}
\end{equation*}
$$

Second, the final and initial times can be altered infinitesimally, by $\delta t_{1}$ and $\delta t_{2}$, respectively. It is more convenient, however, to think of these time displacements as produced by a continuous variation of the time parameter, $\delta t(t)$,

$$
\begin{equation*}
t \rightarrow t+\delta t(t) \tag{2.6}
\end{equation*}
$$

so chosen that, at the endpoints,

$$
\begin{equation*}
\delta t\left(t_{1}\right)=\delta t_{1}, \quad \delta t\left(t_{2}\right)=\delta t_{2} \tag{2.7}
\end{equation*}
$$

The corresponding change in the time differential is

$$
\begin{equation*}
d t \rightarrow d(t+\delta t)=\left(1+\frac{d \delta t}{d t}\right) d t \tag{2.8}
\end{equation*}
$$

which implies the transformation of the time derivative,

$$
\begin{equation*}
\frac{d}{d t} \rightarrow\left(1-\frac{d \delta t}{d t}\right) \frac{d}{d t} \tag{2.9}
\end{equation*}
$$

Because of this redefinition of the time variable, the limits of integration in the action,

$$
\begin{equation*}
W_{12}=\int_{2}^{1}\left[\frac{1}{2} m \frac{(d \mathbf{r})^{2}}{d t}-d t V\right] \tag{2.10}
\end{equation*}
$$

are not changed, the time displacement being produced through $\delta t(t)$ subject to (2.7). The resulting variation in the action is now

$$
\begin{align*}
\delta W_{12}= & \int_{2}^{1} d t\left\{m \frac{d \mathbf{r}}{d t} \cdot \frac{d}{d t} \delta \mathbf{r}-\delta \mathbf{r} \cdot \nabla V-\frac{d \delta t}{d t}\left[\frac{1}{2} m\left(\frac{d \mathbf{r}}{d t}\right)^{2}+V\right]-\delta t \frac{\partial}{\partial t} V\right\} \\
= & \int_{2}^{1} d t\left\{\frac{d}{d t}\left[m \frac{d \mathbf{r}}{d t} \cdot \delta \mathbf{r}-\left(\frac{1}{2} m\left(\frac{d \mathbf{r}}{d t}\right)^{2}+V\right) \delta t\right]\right. \\
& \left.+\delta \mathbf{r} \cdot\left[-m \frac{d^{2}}{d t^{2}} \mathbf{r}-\nabla V\right]+\delta t\left(\frac{d}{d t}\left[\frac{1}{2} m\left(\frac{d \mathbf{r}}{d t}\right)^{2}+V\right]-\frac{\partial}{\partial t} V\right)\right\} \tag{2.11}
\end{align*}
$$

where, in the last form, we have integrated by parts in order to isolate $\delta \mathbf{r}$ and $\delta t$.
Because $\delta \mathbf{r}$ and $\delta t$ are independent variations, the principle of stationary action implies that the actual motion is governed by

$$
\begin{gather*}
m \frac{d^{2}}{d t^{2}} \mathbf{r}=-\nabla V  \tag{2.12a}\\
\frac{d}{d t}\left[\frac{1}{2} m\left(\frac{d \mathbf{r}}{d t}\right)^{2}+V\right]=\frac{\partial}{\partial t} V \tag{2.12b}
\end{gather*}
$$

while the total time derivative gives the change at the endpoints,

$$
\begin{equation*}
G=\mathbf{p} \cdot \delta \mathbf{r}-E \delta t \tag{2.12c}
\end{equation*}
$$

with

$$
\begin{equation*}
\text { momentum }=\mathbf{p}=m \frac{d \mathbf{r}}{d t}, \quad \text { energy }=E=\frac{1}{2} m\left(\frac{d \mathbf{r}}{d t}\right)^{2}+V \tag{2.12d}
\end{equation*}
$$

Therefore, we have derived Newton's second law [the equation of motion in secondorder form], (2.12a), and, for a static potential, $\partial V / \partial t=0$, the conservation of energy, (2.12b). The significance of (2.12c) will be discussed later in Sect. 2.4.

### 2.2 Hamiltonian Viewpoint

Using the above definition of the momentum, we can rewrite the Lagrangian as

$$
\begin{equation*}
L=\mathbf{p} \cdot \frac{d \mathbf{r}}{d t}-H(\mathbf{r}, \mathbf{p}, t), \tag{2.13}
\end{equation*}
$$

where we have introduced the Hamiltonian

$$
\begin{equation*}
H=\frac{p^{2}}{2 m}+V(\mathbf{r}, t) \tag{2.14}
\end{equation*}
$$

We are here to regard $\mathbf{r}, \mathbf{p}$, and $t$ as independent variables in

$$
\begin{equation*}
W_{12}=\int_{2}^{1}[\mathbf{p} \cdot d \mathbf{r}-d t H] . \tag{2.15}
\end{equation*}
$$

The change in the action, when $\mathbf{r}, \mathbf{p}$, and $t$ are all varied, is

$$
\begin{align*}
\delta W_{12}= & \int_{2}^{1} d t\left[\mathbf{p} \cdot \frac{d}{d t} \delta \mathbf{r}-\delta \mathbf{r} \cdot \frac{\partial H}{\partial \mathbf{r}}+\delta \mathbf{p} \cdot \frac{d \mathbf{r}}{d t}-\delta \mathbf{p} \cdot \frac{\partial H}{\partial \mathbf{p}}-\frac{d \delta t}{d t} H-\delta t \frac{\partial H}{\partial t}\right] \\
= & \int_{2}^{1} d t\left[\frac{d}{d t}(\mathbf{p} \cdot \delta \mathbf{r}-H \delta t)+\delta \mathbf{r} \cdot\left(-\frac{d \mathbf{p}}{d t}-\frac{\partial H}{\partial \mathbf{r}}\right)\right. \\
& \left.+\delta \mathbf{p} \cdot\left(\frac{d \mathbf{r}}{d t}-\frac{\partial H}{\partial \mathbf{p}}\right)+\delta t\left(\frac{d H}{d t}-\frac{\partial H}{\partial t}\right)\right] \tag{2.16}
\end{align*}
$$

The action principle then implies

$$
\begin{align*}
\frac{d \mathbf{r}}{d t} & =\frac{\partial H}{\partial \mathbf{p}}=\frac{\mathbf{p}}{m}  \tag{2.17a}\\
\frac{d \mathbf{p}}{d t} & =-\frac{\partial H}{\partial \mathbf{r}}=-\nabla V  \tag{2.17b}\\
\frac{d H}{d t} & =\frac{\partial H}{\partial t}  \tag{2.17c}\\
G & =\mathbf{p} \cdot \delta \mathbf{r}-H \delta t \tag{2.17d}
\end{align*}
$$

In contrast with the Lagrangian differential equations of motion, which involve second derivatives, these Hamiltonian equations contain only first derivatives; they are called first-order equations. They describe the same physical system, because when (2.17a) is substituted into (2.17b), we recover the Lagrangian-Newtonian equation (2.12a). Furthermore, if we insert (2.17a) into the Hamiltonian (2.14), we identify $H$ with $E$. The third equation (2.17c) is then identical with (2.12b). We also note the equivalence of the two versions of $G$.

But probably the most direct way of seeing that the same physical system is involved comes by writing the Lagrangian in the Hamiltonian viewpoint as

$$
\begin{equation*}
L=\frac{m}{2}\left(\frac{d \mathbf{r}}{d t}\right)^{2}-V-\frac{1}{2 m}\left(\mathbf{p}-m \frac{d \mathbf{r}}{d t}\right)^{2} . \tag{2.18}
\end{equation*}
$$

The result of varying $\mathbf{p}$ in the stationary action principle is to produce

$$
\begin{equation*}
\mathbf{p}=m \frac{d \mathbf{r}}{d t} . \tag{2.19}
\end{equation*}
$$

But, if we accept this as the definition of $\mathbf{p}$, the corresponding term in $L$ disappears and we explicitly regain the Lagrangian description. We are justified in completely omitting the last term on the right side of (2.18), despite its dependence on the variables $\mathbf{r}$ and $t$, because of its quadratic structure. Its explicit contribution to $\delta L$ is

$$
\begin{equation*}
-\frac{1}{m}\left(\mathbf{p}-m \frac{d \mathbf{r}}{d t}\right) \cdot\left(\delta \mathbf{p}-m \frac{d}{d t} \delta \mathbf{r}+m \frac{d \mathbf{r}}{d t} \frac{d \delta t}{d t}\right) \tag{2.20}
\end{equation*}
$$

and the equation supplied by the stationary action principle for $\mathbf{p}$ variations, (2.19), also guarantees that there is no contribution here to the results of $\mathbf{r}$ and $t$ variations.

### 2.3 A Third, Schwingerian, Viewpoint

Here we take $\mathbf{r}, \mathbf{p}$, and the velocity, $\mathbf{v}$, as independent variables, so that the Lagrangian is written in the form

$$
\begin{equation*}
L=\mathbf{p} \cdot\left(\frac{d \mathbf{r}}{d t}-\mathbf{v}\right)+\frac{1}{2} m v^{2}-V(\mathbf{r}, t) \equiv \mathbf{p} \cdot \frac{d \mathbf{r}}{d t}-H(\mathbf{r}, \mathbf{p}, \mathbf{v}, t), \tag{2.21}
\end{equation*}
$$

where

$$
\begin{equation*}
H(\mathbf{r}, \mathbf{p}, \mathbf{v}, t)=\mathbf{p} \cdot \mathbf{v}-\frac{1}{2} m v^{2}+V(\mathbf{r}, t) . \tag{2.22}
\end{equation*}
$$

The variation of the action is now

$$
\begin{aligned}
\delta W_{12}= & \delta \int_{2}^{1}[\mathbf{p} \cdot d \mathbf{r}-H d t] \\
= & \int_{2}^{1} d t\left[\delta \mathbf{p} \cdot \frac{d \mathbf{r}}{d t}+\mathbf{p} \cdot \frac{d}{d t} \delta \mathbf{r}-\delta \mathbf{r} \cdot \frac{\partial H}{\partial \mathbf{r}}-\delta \mathbf{p} \cdot \frac{\partial H}{\partial \mathbf{p}}-\delta \mathbf{v} \cdot \frac{\partial H}{\partial \mathbf{v}}\right. \\
& \left.-\delta t \frac{\partial H}{\partial t}-H \frac{d \delta t}{d t}\right]
\end{aligned}
$$

$$
\begin{align*}
= & \int_{2}^{1} d t\left[\frac{d}{d t}(\mathbf{p} \cdot \delta \mathbf{r}-H \delta t)-\delta \mathbf{r} \cdot\left(\frac{d \mathbf{p}}{d t}+\frac{\partial H}{\partial \mathbf{r}}\right)\right. \\
& \left.+\delta \mathbf{p} \cdot\left(\frac{d \mathbf{r}}{d t}-\frac{\partial H}{\partial \mathbf{p}}\right)-\delta \mathbf{v} \cdot \frac{\partial H}{\partial \mathbf{v}}+\delta t\left(\frac{d H}{d t}-\frac{\partial H}{\partial t}\right)\right] \tag{2.23}
\end{align*}
$$

so that the action principle implies

$$
\begin{align*}
\frac{d \mathbf{p}}{d t} & =-\frac{\partial H}{\partial \mathbf{r}}=-\nabla V  \tag{2.24a}\\
\frac{d \mathbf{r}}{d t} & =\frac{\partial H}{\partial \mathbf{p}}=\mathbf{v}  \tag{2.24b}\\
\mathbf{0} & =-\frac{\partial H}{\partial \mathbf{v}}=-\mathbf{p}+m \mathbf{v}  \tag{2.24c}\\
\frac{d H}{d t} & =\frac{\partial H}{\partial t}  \tag{2.24d}\\
G & =\mathbf{p} \cdot \delta \mathbf{r}-H \delta t \tag{2.24e}
\end{align*}
$$

Notice that there is no equation of motion for $\mathbf{v}$ since $d \mathbf{v} / d t$ does not occur in the Lagrangian, nor is it multiplied by a time derivative. Consequently, (2.24c) refers to a single time and is an equation of constraint.

From this third approach, we have the option of returning to either of the other two viewpoints by imposing an appropriate restriction. Thus, if we write (2.22) as

$$
\begin{equation*}
H(\mathbf{r}, \mathbf{p}, \mathbf{v}, t)=\frac{p^{2}}{2 m}+V(\mathbf{r}, t)-\frac{1}{2 m}(\mathbf{p}-m \mathbf{v})^{2} \tag{2.25}
\end{equation*}
$$

and we adopt

$$
\begin{equation*}
\mathbf{v}=\frac{1}{m} \mathbf{p} \tag{2.26}
\end{equation*}
$$

as the definition of $\mathbf{v}$, we recover the Hamiltonian description, (2.13) and (2.14). Alternatively, we can present the Lagrangian (2.21) as

$$
\begin{equation*}
L=\frac{m}{2}\left(\frac{d \mathbf{r}}{d t}\right)^{2}-V+(\mathbf{p}-m \mathbf{v}) \cdot\left(\frac{d \mathbf{r}}{d t}-\mathbf{v}\right)-\frac{m}{2}\left(\frac{d \mathbf{r}}{d t}-\mathbf{v}\right)^{2} \tag{2.27}
\end{equation*}
$$

Then, if we adopt the following as definitions,

$$
\begin{equation*}
\mathbf{v}=\frac{d \mathbf{r}}{d t}, \quad \mathbf{p}=m \mathbf{v} \tag{2.28}
\end{equation*}
$$

the resultant form of $L$ is that of the Lagrangian viewpoint, (2.4). It might seem that only the definition $\mathbf{v}=d \mathbf{r} / d t$, inserted in (2.27), suffices to regain the Lagrangian description. But then the next to last term in (2.27) would give the following additional contribution to $\delta L$, associated with the variation $\delta \mathbf{r}$ :

$$
\begin{equation*}
(\mathbf{p}-m \mathbf{v}) \cdot \frac{d}{d t} \delta \mathbf{r} \tag{2.29}
\end{equation*}
$$

In the next Chapter, where the action formulation of electrodynamics is considered, we will see the advantage of adopting this third approach, which is characterized by the introduction of additional variables, similar to $\mathbf{v}$, for which there are no equations of motion.

### 2.4 Invariance and Conservation Laws

There is more content to the principle of stationary action than equations of motion. Suppose one considers a variation such that

$$
\begin{equation*}
\delta W_{12}=0, \tag{2.30}
\end{equation*}
$$

independently of the choice of initial and final times. We say that the action, which is left unchanged, is invariant under this alteration of path. Then the stationary action principle (2.3) asserts that

$$
\begin{equation*}
\delta W_{12}=G_{1}-G_{2}=0, \tag{2.31}
\end{equation*}
$$

or, there is a quantity $G(t)$ that has the same value for any choice of time $t$; it is conserved in time. A differential statement of that is

$$
\begin{equation*}
\frac{d}{d t} G(t)=0 . \tag{2.32}
\end{equation*}
$$

The $G$ functions, which are usually referred to as generators, express the interrelation between conservation laws and invariances of the system.

Invariance implies conservation, and vice versa. A more precise statement is the following:

If there is a conservation law, the action is stationary under an infinitesimal transformation in an appropriate variable.

The converse of this statement is also true.
If the action $W$ is invariant under an infinitesimal transformation (that is, $\delta W=0$ ), then there is a corresponding conservation law.

This is the celebrated theorem of Amalie Emmy Noether (Noether 1918).
Here are some examples. Suppose the Hamiltonian of (2.13) does not depend explicitly on time, or

$$
\begin{equation*}
W_{12}=\int_{2}^{1}[\mathbf{p} \cdot d \mathbf{r}-H(\mathbf{r}, \mathbf{p}) d t] . \tag{2.33}
\end{equation*}
$$

Fig. 2.2 $\delta \omega \times \mathbf{r}$ is
perpendicular to $\delta \boldsymbol{\omega}$ and $\mathbf{r}$,
and represents an
infinitesimal rotation of $\mathbf{r}$ about the $\delta \boldsymbol{\omega}$ axis
![](https://cdn.mathpix.com/cropped/2025_02_21_13f260749f40b979ea80g-018.jpg?height=387&width=288&top_left_y=204&top_left_x=1049)

Then the variation (which as a rigid displacement in time, amounts to a shift in the time origin)

$$
\begin{equation*}
\delta t=\text { constant } \tag{2.34}
\end{equation*}
$$

will give $\delta W_{12}=0$ [see the first line of (2.16), with $\delta \mathbf{r}=0, \delta \mathbf{p}=0, d \delta t / d t=0$, $\partial H / \partial t=0]$. The conclusion is that $G$ in $(2.17 \mathrm{~d})$, which here is just

$$
\begin{equation*}
G_{t}=-H \delta t \tag{2.35}
\end{equation*}
$$

is a conserved quantity, or that

$$
\begin{equation*}
\frac{d H}{d t}=0 . \tag{2.36}
\end{equation*}
$$

This inference, that the Hamiltonian-the energy-is conserved, if there is no explicit time dependence in $H$, is already present in (2.17c). But now a more general principle is at work.

Next, consider an infinitesimal, rigid rotation, one that maintains the lengths and scalar products of all vectors. Written explicitly for the position vector $\mathbf{r}$, it is

$$
\begin{equation*}
\delta \mathbf{r}=\delta \boldsymbol{\omega} \times \mathbf{r}, \tag{2.37}
\end{equation*}
$$

where the constant vector $\delta \boldsymbol{\omega}$ gives the direction and magnitude of the rotation (see Fig. 2.2). Now specialize (2.14) to

$$
\begin{equation*}
H=\frac{p^{2}}{2 m}+V(r), \tag{2.38}
\end{equation*}
$$

where $r=|\mathbf{r}|$, a rotationally invariant structure. Then

$$
\begin{equation*}
W_{12}=\int_{2}^{1}[\mathbf{p} \cdot d \mathbf{r}-H d t] \tag{2.39}
\end{equation*}
$$

is also invariant under the rigid rotation, implying the conservation of

$$
\begin{equation*}
G_{\delta \omega}=\mathbf{p} \cdot \delta \mathbf{r}=\delta \boldsymbol{\omega} \cdot \mathbf{r} \times \mathbf{p} \tag{2.40}
\end{equation*}
$$

This is the conservation of angular momentum,

$$
\begin{equation*}
\mathbf{L}=\mathbf{r} \times \mathbf{p}, \quad \frac{d}{d t} \mathbf{L}=\mathbf{0} . \tag{2.41}
\end{equation*}
$$

Of course, this is also contained within the equation of motion,

$$
\begin{equation*}
\frac{d}{d t} \mathbf{L}=-\mathbf{r} \times \nabla V=-\mathbf{r} \times \hat{\mathbf{r}} \frac{\partial V}{\partial r}=\mathbf{0} \tag{2.42}
\end{equation*}
$$

since $V$ depends only on $|\mathbf{r}|$.
Conservation of linear momentum appears analogously when there is invariance under a rigid translation. For a single particle, (2.17b) tells us immediately that $\mathbf{p}$ is conserved if $V$ is a constant, say zero. Then, indeed, the action

$$
\begin{equation*}
W_{12}=\int_{2}^{1}\left[\mathbf{p} \cdot d \mathbf{r}-\frac{p^{2}}{2 m} d t\right] \tag{2.43}
\end{equation*}
$$

is invariant under the displacement

$$
\begin{equation*}
\delta \mathbf{r}=\delta \boldsymbol{\epsilon}=\mathrm{constant}, \tag{2.44}
\end{equation*}
$$

and

$$
\begin{equation*}
G_{\delta}=\mathbf{p} \cdot \delta \boldsymbol{\epsilon} \tag{2.45}
\end{equation*}
$$

is conserved. But the general principle acts just as easily for, say, a system of two particles, $a$ and $b$, with Hamiltonian

$$
\begin{equation*}
H=\frac{p_{a}^{2}}{2 m_{a}}+\frac{p_{b}^{2}}{2 m_{b}}+V\left(\mathbf{r}_{a}-\mathbf{r}_{b}\right) \tag{2.46}
\end{equation*}
$$

This Hamiltonian and the associated action

$$
\begin{equation*}
W_{12}=\int_{2}^{1}\left[\mathbf{p}_{a} \cdot d \mathbf{r}_{a}+\mathbf{p}_{b} \cdot d \mathbf{r}_{b}-H d t\right] \tag{2.47}
\end{equation*}
$$

are invariant under the rigid translation

$$
\begin{equation*}
\delta \mathbf{r}_{a}=\delta \mathbf{r}_{b}=\delta \boldsymbol{\epsilon} \tag{2.48}
\end{equation*}
$$

with the implication that

$$
\begin{equation*}
G_{\delta \epsilon}=\mathbf{p}_{a} \cdot \delta \mathbf{r}_{a}+\mathbf{p}_{b} \cdot \delta \mathbf{r}_{b}=\left(\mathbf{p}_{a}+\mathbf{p}_{b}\right) \cdot \delta \boldsymbol{\epsilon} \tag{2.49}
\end{equation*}
$$

is conserved. This is the conservation of the total linear momentum,

$$
\begin{equation*}
\mathbf{P}=\mathbf{p}_{a}+\mathbf{p}_{b}, \quad \frac{d}{d t} \mathbf{P}=\mathbf{0} . \tag{2.50}
\end{equation*}
$$

Something a bit more general appears when we consider a rigid translation that grows linearly in time:

$$
\begin{equation*}
\delta \mathbf{r}_{a}=\delta \mathbf{r}_{b}=\delta \mathbf{v} t \tag{2.51}
\end{equation*}
$$

using the example of two particles. This gives each particle the common additional velocity $\delta \mathbf{v}$, and therefore must also change their momenta,

$$
\begin{equation*}
\delta \mathbf{p}_{a}=m_{a} \delta \mathbf{v}, \quad \delta \mathbf{p}_{b}=m_{b} \delta \mathbf{v} . \tag{2.52}
\end{equation*}
$$

The response of the action (2.47) to this variation is

$$
\begin{align*}
\delta W_{12} & =\int_{2}^{1}\left[\left(\mathbf{p}_{a}+\mathbf{p}_{b}\right) \cdot \delta \mathbf{v} d t+\delta \mathbf{v} \cdot\left(m_{a} d \mathbf{r}_{a}+m_{b} d \mathbf{r}_{b}\right)-\left(\mathbf{p}_{a}+\mathbf{p}_{b}\right) \cdot \delta \mathbf{v} d t\right] \\
& =\int_{2}^{1} d\left[\left(m_{a} \mathbf{r}_{a}+m_{b} \mathbf{r}_{b}\right) \cdot \delta \mathbf{v}\right] \tag{2.53}
\end{align*}
$$

The action is not invariant; its variation has end-point contributions. But there is still a conservation law, not of $G=\mathbf{P} \cdot \delta \mathbf{v} t$, but of $\mathbf{N} \cdot \delta \mathbf{v}$, where

$$
\begin{equation*}
\mathbf{N}=\mathbf{P} t-\left(m_{a} \mathbf{r}_{a}+m_{b} \mathbf{r}_{b}\right) \tag{2.54}
\end{equation*}
$$

Written in terms of the center-of-mass position vector

$$
\begin{equation*}
\mathbf{R}=\frac{m_{a} \mathbf{r}_{a}+m_{b} \mathbf{r}_{b}}{M}, \quad M=m_{a}+m_{b} \tag{2.55}
\end{equation*}
$$

the statement of conservation of

$$
\begin{equation*}
\mathbf{N}=\mathbf{P} t-M \mathbf{R} \tag{2.56}
\end{equation*}
$$

namely

$$
\begin{equation*}
\mathbf{0}=\frac{d \mathbf{N}}{d t}=\mathbf{P}-M \frac{d \mathbf{R}}{d t} \tag{2.57}
\end{equation*}
$$

is the familiar fact that the center of mass of an isolated system moves at the constant velocity given by the ratio of the total momentum to the total mass of that system.

### 2.5 Nonconservation Laws: The Virial Theorem

The action principle also supplies useful nonconservation laws. Consider, for constant $\delta \lambda$,

$$
\begin{equation*}
\delta \mathbf{r}=\delta \lambda \mathbf{r}, \quad \delta \mathbf{p}=-\delta \lambda \mathbf{p} \tag{2.58}
\end{equation*}
$$

which leaves $\mathbf{p} \cdot d \mathbf{r}$ invariant,

$$
\begin{equation*}
\delta(\mathbf{p} \cdot d \mathbf{r})=(-\delta \lambda \mathbf{p}) \cdot d \mathbf{r}+\mathbf{p} \cdot(\delta \lambda d \mathbf{r})=0 \tag{2.59}
\end{equation*}
$$

But the response of the Hamiltonian

$$
\begin{equation*}
H=T(p)+V(\mathbf{r}), \quad T(p)=\frac{p^{2}}{2 m} \tag{2.60}
\end{equation*}
$$

is given by the noninvariant form

$$
\begin{equation*}
\delta H=\delta \lambda(-2 T+\mathbf{r} \cdot \nabla V) \tag{2.61}
\end{equation*}
$$

Therefore we have, for an arbitrary time interval, for the variation of the action (2.15),

$$
\begin{equation*}
\delta W_{12}=\int_{2}^{1} d t[\delta \lambda(2 T-\mathbf{r} \cdot \nabla V)]=G_{1}-G_{2}=\int_{2}^{1} d t \frac{d}{d t}(\mathbf{p} \cdot \delta \lambda \mathbf{r}) \tag{2.62}
\end{equation*}
$$

or, the theorem

$$
\begin{equation*}
\frac{d}{d t} \mathbf{r} \cdot \mathbf{p}=2 T-\mathbf{r} \cdot \nabla V \tag{2.63}
\end{equation*}
$$

For the particular situation of the Coulomb potential between charges, $V=$ constant $/ r$, where

$$
\begin{equation*}
\mathbf{r} \cdot \nabla V=r \frac{d}{d r} V=-V \tag{2.64}
\end{equation*}
$$

the virial theorem asserts that

$$
\begin{equation*}
\frac{d}{d t}(\mathbf{r} \cdot \mathbf{p})=2 T+V \tag{2.65}
\end{equation*}
$$

We apply this to a bound system produced by a force of attraction. On taking the time average of (2.65) the time derivative term disappears. That is because, over an arbitrarily long time interval $\tau=t_{1}-t_{2}$, the value of $\mathbf{r} \cdot \mathbf{p}\left(t_{1}\right)$ can differ by only a finite amount from $\mathbf{r} \cdot \mathbf{p}\left(t_{2}\right)$, and
as $\tau \rightarrow \infty$. The conclusion, for time averages,

$$
\begin{equation*}
2 \bar{T}=-\bar{V} \tag{2.67}
\end{equation*}
$$

is familiar in elementary discussions of motion in a $1 / r$ potential.
Here is one more example of a nonconservation law: Consider the variations

$$
\begin{align*}
& \delta \mathbf{r}=\delta \lambda \frac{\mathbf{r}}{r}  \tag{2.68a}\\
& \delta \mathbf{p}=-\delta \lambda\left(\frac{\mathbf{p}}{r}-\frac{\mathbf{r} \mathbf{p} \cdot \mathbf{r}}{r^{3}}\right)=\delta \lambda \frac{\mathbf{r} \times(\mathbf{r} \times \mathbf{p})}{r^{3}} . \tag{2.68b}
\end{align*}
$$

Again $\mathbf{p} \cdot d \mathbf{r}$ is invariant:

$$
\begin{equation*}
\delta(\mathbf{p} \cdot d \mathbf{r})=-\delta \lambda\left(\frac{\mathbf{p}}{r}-\frac{\mathbf{r} \mathbf{p} \cdot \mathbf{r}}{r^{3}}\right) \cdot d \mathbf{r}+\mathbf{p} \cdot\left(\delta \lambda \frac{d \mathbf{r}}{r}-\delta \lambda \mathbf{r} \frac{\mathbf{r} \cdot d \mathbf{r}}{r^{3}}\right)=0 \tag{2.69}
\end{equation*}
$$

and the change of the Hamiltonian (2.60) is now

$$
\begin{equation*}
\delta H=\delta \lambda\left[-\frac{\mathbf{L}^{2}}{m r^{3}}+\frac{\mathbf{r}}{r} \cdot \nabla V\right] \tag{2.70}
\end{equation*}
$$

The resulting theorem, for $V=V(r)$, is

$$
\begin{equation*}
\frac{d}{d t}\left(\frac{\mathbf{r}}{r} \cdot \mathbf{p}\right)=\frac{\mathbf{L}^{2}}{m r^{3}}-\frac{d V}{d r} \tag{2.71}
\end{equation*}
$$

which, when applied to the Coulomb potential, gives the bound-state time average relation

$$
\begin{equation*}
\frac{L^{2}}{m} \overline{\left(\frac{1}{r^{3}}\right)}=-\overline{\left(\frac{V}{r}\right)} \tag{2.72}
\end{equation*}
$$

This relation is significant in hydrogen fine-structure calculations (for example, see (Schwinger 2001)).

## Chapter 3 <br> Classical Field Theory-Electrodynamics

This chapter again grew out of Schwinger's UCLA lectures. These evolved, torturously, into Chap. 9 of Classical Electrodynamics (Schwinger 1998). Here we use Gaussian units.

### 3.1 Action of Particle in Field

It was stated in our review of mechanical action principles in the previous chapter that the third viewpoint, which employs the variables $\mathbf{r}, \mathbf{p}$, and $\mathbf{v}$, was particularly convenient for describing electromagnetic forces on charged particles. With the explicit, and linear, appearance of $\mathbf{v}$ in what plays the role of the potential function when magnetic fields are present, we begin to see the basis for that remark. Indeed, we have only to consult (2.21) to find the appropriate Lagrangian:

$$
\begin{equation*}
L=\mathbf{p} \cdot\left(\frac{d \mathbf{r}}{d t}-\mathbf{v}\right)+\frac{1}{2} m v^{2}-e \phi+\frac{e}{c} \mathbf{v} \cdot \mathbf{A} \tag{3.1}
\end{equation*}
$$

where $\phi$ and $\mathbf{A}$ are the scalar and vector potentials, respectively. To recapitulate, the equations resulting from variations of $\mathbf{p}, \mathbf{r}$, and $\mathbf{v}$ are, respectively,

$$
\begin{align*}
\frac{d \mathbf{r}}{d t} & =\mathbf{v}  \tag{3.2a}\\
\frac{d}{d t} \mathbf{p} & =-e \nabla\left[\phi-\frac{1}{c} \mathbf{v} \cdot \mathbf{A}\right],  \tag{3.2b}\\
\mathbf{p} & =m \mathbf{v}+\frac{e}{c} \mathbf{A} . \tag{3.2c}
\end{align*}
$$

We can now move to either the Lagrangian or the Hamiltonian formulation. For the first, we simply adopt $\mathbf{v}=d \mathbf{r} / d t$ as a definition (but see the discussion in Sect. 2.3) and get

$$
\begin{equation*}
L=\frac{1}{2} m\left(\frac{d \mathbf{r}}{d t}\right)^{2}-e \phi+\frac{e}{c} \frac{d \mathbf{r}}{d t} \cdot \mathbf{A} \tag{3.3}
\end{equation*}
$$

Alternatively, we use (3.2c) to define

$$
\begin{equation*}
\mathbf{v}=\frac{1}{m}\left(\mathbf{p}-\frac{e}{c} \mathbf{A}\right) \tag{3.4}
\end{equation*}
$$

and find

$$
\begin{align*}
L & =\mathbf{p} \cdot \frac{d \mathbf{r}}{d t}-H  \tag{3.5a}\\
H & =\frac{1}{2 m}\left(\mathbf{p}-\frac{e}{c} \mathbf{A}\right)^{2}+e \phi \tag{3.5b}
\end{align*}
$$

### 3.2 Electrodynamic Action

The electromagnetic field is a mechanical system. It contributes its variables to the action, to the Lagrangian of the whole system of charges and fields. In contrast with the point charges, the field is distributed in space. Its Lagrangian should therefore be, not a summation over discrete points, but an integration over all spatial volume elements,

$$
\begin{equation*}
L_{\text {field }}=\int(d \mathbf{r}) \mathcal{L}_{\text {field }} \tag{3.6}
\end{equation*}
$$

this introduces the Lagrange function, or Lagrangian density, $\mathcal{L}$. The total Lagrangian must be the sum of the particle part, (3.1), and the field part, (3.6), where the latter must be chosen so as to give the Maxwell equations, in Gaussian units:

$$
\begin{align*}
\nabla \times \mathbf{B} & =\frac{1}{c} \frac{\partial}{\partial t} \mathbf{E}+\frac{4 \pi}{c} \mathbf{j}, & \nabla \cdot \mathbf{E}=4 \pi \rho,  \tag{3.7a}\\
-\nabla \times \mathbf{E} & =\frac{1}{c} \frac{\partial}{\partial t} \mathbf{B}, & \nabla \cdot \mathbf{B}=0 . \tag{3.7b}
\end{align*}
$$

The homogeneous equations here are equivalent to the construction of the electromagnetic field in term of potentials, or,

$$
\begin{align*}
\frac{1}{c} \frac{\partial}{\partial t} \mathbf{A} & =-\mathbf{E}-\nabla \phi  \tag{3.8a}\\
\mathbf{B} & =\nabla \times \mathbf{A} \tag{3.8b}
\end{align*}
$$

Thus, we recognize that $\mathbf{A}(\mathbf{r}, t), \mathbf{E}(\mathbf{r}, t)$, in analogy with $\mathbf{r}(t), \mathbf{p}(t)$, obey equations of motion while $\phi(\mathbf{r}, t), \mathbf{B}(\mathbf{r}, t)$, as analogues of $\mathbf{v}(t)$, do not. There are enough clues here to give the structure of $\mathcal{L}_{\text {field }}$, apart from an overall factor. The anticipated complete Lagrangian for microscopic electrodynamics is

$$
\begin{align*}
L= & \sum_{a}\left[\mathbf{p}_{a} \cdot\left(\frac{d \mathbf{r}_{a}}{d t}-\mathbf{v}_{a}\right)+\frac{1}{2} m_{a} v_{a}^{2}-e_{a} \phi\left(\mathbf{r}_{a}\right)+\frac{e_{a}}{c} \mathbf{v}_{a} \cdot \mathbf{A}\left(\mathbf{r}_{a}\right)\right] \\
& +\frac{1}{4 \pi} \int(d \mathbf{r})\left[\mathbf{E} \cdot\left(-\frac{1}{c} \frac{\partial}{\partial t} \mathbf{A}-\nabla \phi\right)-\mathbf{B} \cdot \nabla \times \mathbf{A}+\frac{1}{2}\left(B^{2}-E^{2}\right)\right] . \tag{3.9}
\end{align*}
$$

The terms that are summed in (3.9) describe the behavior of charged particles under the influence of the fields, while the terms that are integrated describe the field behavior. The independent variables are

$$
\begin{equation*}
\mathbf{r}_{a}(t), \quad \mathbf{v}_{a}(t), \quad \mathbf{p}_{a}(t), \quad \phi(\mathbf{r}, t), \quad \mathbf{A}(\mathbf{r}, t), \quad \mathbf{E}(\mathbf{r}, t), \quad \mathbf{B}(\mathbf{r}, t), \quad t . \tag{3.10}
\end{equation*}
$$

We now look at the response of the Lagrangian to variations in each of these variables separately, starting with the particle part:

$$
\begin{align*}
& \delta \mathbf{r}_{a}: \quad \delta L=\frac{d}{d t}\left(\delta \mathbf{r}_{a} \cdot \mathbf{p}_{a}\right)+\delta \mathbf{r}_{a} \cdot\left[-\frac{d \mathbf{p}_{a}}{d t}-\nabla_{a} e_{a}\left(\phi\left(\mathbf{r}_{a}\right)-\frac{\mathbf{v}_{a}}{c} \cdot \mathbf{A}\left(\mathbf{r}_{a}\right)\right)\right],  \tag{3.11a}\\
& \delta \mathbf{v}_{a}: \quad \delta L=\delta \mathbf{v}_{a} \cdot\left[-\mathbf{p}_{a}+m_{a} \mathbf{v}_{a}+\frac{e_{a}}{c} \mathbf{A}\left(\mathbf{r}_{a}\right)\right],  \tag{3.11b}\\
& \delta \mathbf{p}_{a}: \quad \delta L=\delta \mathbf{p}_{a} \cdot\left(\frac{d \mathbf{r}_{a}}{d t}-\mathbf{v}_{a}\right) . \tag{3.11c}
\end{align*}
$$

The stationary action principle now implies the equations of motion

$$
\begin{align*}
\frac{d \mathbf{p}_{a}}{d t} & =-e_{a} \nabla_{a}\left(\phi\left(\mathbf{r}_{a}\right)-\frac{\mathbf{v}_{a}}{c} \cdot \mathbf{A}\left(\mathbf{r}_{a}\right)\right),  \tag{3.12a}\\
m_{a} \mathbf{v}_{a} & =\mathbf{p}_{a}-\frac{e_{a}}{c} \mathbf{A}\left(\mathbf{r}_{a}\right),  \tag{3.12b}\\
\mathbf{v}_{a} & =\frac{d \mathbf{r}_{a}}{d t} \tag{3.12c}
\end{align*}
$$

which are the known results, (3.2a)-(3.2c).
The real work now lies in deriving the equations of motion for the fields. In order to cast all the field-dependent terms into integral form, we introduce charge and current densities,

$$
\begin{align*}
\rho(\mathbf{r}, t) & =\sum_{a} e_{a} \delta\left(\mathbf{r}-\mathbf{r}_{a}(t)\right)  \tag{3.13a}\\
\mathbf{j}(\mathbf{r}, t) & =\sum_{a} e_{a} \mathbf{v}_{a}(t) \delta\left(\mathbf{r}-\mathbf{r}_{a}(t)\right), \tag{3.13b}
\end{align*}
$$

so that

$$
\begin{equation*}
\sum_{a}\left[-e_{a} \phi\left(\mathbf{r}_{a}\right)+\frac{e_{a}}{c} \mathbf{v}_{a} \cdot \mathbf{A}\left(\mathbf{r}_{a}\right)\right]=\int(d \mathbf{r})\left[-\rho \phi+\frac{1}{c} \mathbf{j} \cdot \mathbf{A}\right] \tag{3.14}
\end{equation*}
$$

The volume integrals extend over sufficiently large regions to contain all the fields of interest. Consequently, we can integrate by parts and ignore the surface terms. The responses of the Lagrangian (3.9) to field variations, and the corresponding equations of motion deduced from the action principle are

$$
\begin{align*}
\delta \phi: \quad \delta L & =\frac{1}{4 \pi} \int(d \mathbf{r}) \delta \phi(\nabla \cdot \mathbf{E}-4 \pi \rho),  \tag{3.15a}\\
\nabla \cdot \mathbf{E} & =4 \pi \rho,  \tag{3.15b}\\
\delta \mathbf{A}: \quad \delta L & =-\frac{1}{4 \pi c} \frac{d}{d t} \int(d \mathbf{r}) \delta \mathbf{A} \cdot \mathbf{E} \\
& +\frac{1}{4 \pi} \int(d \mathbf{r}) \delta \mathbf{A} \cdot\left(\frac{1}{c} \frac{\partial \mathbf{E}}{\partial t}+\frac{4 \pi}{c} \mathbf{j}-\nabla \times \mathbf{B}\right),  \tag{3.15c}\\
\nabla \times \mathbf{B}= & \frac{1}{c} \frac{\partial}{\partial t} \mathbf{E}+\frac{4 \pi}{c} \mathbf{j},  \tag{3.15d}\\
\delta \mathbf{E}: \quad \delta L & =\frac{1}{4 \pi} \int(d \mathbf{r}) \delta \mathbf{E} \cdot\left(-\frac{1}{c} \frac{\partial}{\partial t} \mathbf{A}-\nabla \phi-\mathbf{E}\right),  \tag{3.15e}\\
\mathbf{E} & =-\frac{1}{c} \frac{\partial}{\partial t} \mathbf{A}-\nabla \phi,  \tag{3.15f}\\
\delta \mathbf{B}: \quad \delta L & =\frac{1}{4 \pi} \int(d \mathbf{r}) \delta \mathbf{B} \cdot(-\nabla \times \mathbf{A}+\mathbf{B}),  \tag{3.15~g}\\
\mathbf{B} & =\nabla \times \mathbf{A} . \tag{3.15h}
\end{align*}
$$

We therefore recover Maxwell's equations, two of which are implicit in the construction of $\mathbf{E}$ and $\mathbf{B}$ in terms of potentials. By making a time variation of the action [variations due to the time dependence of the fields vanish by virtue of the stationary action principle-that is, they are already subsumed in Eqs. (3.15)],

$$
\begin{equation*}
\delta t: \quad \delta W=\int d t\left[\frac{d}{d t}(-H \delta t)+\delta t \frac{d H}{d t}\right] \tag{3.16}
\end{equation*}
$$

we identify the Hamiltonian of the system to be

$$
\begin{align*}
H= & \sum_{a}\left[\left(\mathbf{p}_{a}-\frac{e_{a}}{c} \mathbf{A}\left(\mathbf{r}_{a}\right)\right) \cdot \mathbf{v}_{a}-\frac{1}{2} m_{a} v_{a}^{2}+e_{a} \phi\left(\mathbf{r}_{a}\right)\right] \\
& +\frac{1}{4 \pi} \int(d \mathbf{r})\left[\mathbf{E} \cdot \nabla \phi+\mathbf{B} \cdot \nabla \times \mathbf{A}+\frac{1}{2}\left(E^{2}-B^{2}\right)\right] \tag{3.17}
\end{align*}
$$

which is a constant of the motion, $d H / d t=0$. The generators are inferred from the total time derivative terms in (3.11a), (3.15c), and (3.16),

$$
\begin{equation*}
\delta W_{12}=G_{1}-G_{2}, \tag{3.18a}
\end{equation*}
$$

to be

$$
\begin{equation*}
G=\sum_{a} \delta \mathbf{r}_{a} \cdot \mathbf{p}_{a}-\frac{1}{4 \pi c} \int(d \mathbf{r}) \mathbf{E} \cdot \delta \mathbf{A}-H \delta t . \tag{3.18b}
\end{equation*}
$$

### 3.3 Energy

Notice that the total Lagrangian (3.9) can be presented as

$$
\begin{equation*}
L=\sum_{a} \mathbf{p}_{a} \cdot \frac{d \mathbf{r}_{a}}{d t}-\frac{1}{4 \pi c} \int(d \mathbf{r}) \mathbf{E} \cdot \frac{\partial}{\partial t} \mathbf{A}-H \tag{3.19}
\end{equation*}
$$

where the Hamiltonian is given by (3.17). The narrower, Hamiltonian, description is reached by eliminating all variables that do not obey equations of motion, and, correspondingly, do not appear in $G$. Those "superfluous" variables are the $\mathbf{v}_{a}$ and the fields $\phi$ and $\mathbf{B}$, which are eliminated by using (3.12b), (3.15b), and (3.15h), the equations without time derivatives, resulting, first, in the intermediate form

$$
\begin{equation*}
H=\sum_{a}\left(\frac{1}{2 m_{a}}\left(\mathbf{p}_{a}-\frac{e_{a}}{c} \mathbf{A}\left(\mathbf{r}_{a}\right)\right)^{2}+e_{a} \phi\left(\mathbf{r}_{a}\right)\right)+\int(d \mathbf{r})\left[\frac{E^{2}+B^{2}}{8 \pi}-\rho \phi\right] \tag{3.20}
\end{equation*}
$$

The first term here is the energy of the particles moving in the field [particle energysee (3.5b)], so we might call the second term the field energy. The ambiguity of these terms (whether the potential energy of particles is attributed to them or to the fields, or to both) is evident from the existence of a simpler form of the Hamiltonian

$$
\begin{equation*}
H=\sum_{a} \frac{1}{2 m_{a}}\left(\mathbf{p}_{a}-\frac{e_{a}}{c} \mathbf{A}\left(\mathbf{r}_{a}\right)\right)^{2}+\int(d \mathbf{r}) \frac{E^{2}+B^{2}}{8 \pi}, \quad \mathbf{B}=\nabla \times \mathbf{A} \tag{3.21}
\end{equation*}
$$

where we have used the equivalence of the two terms involving $\phi$, given in (3.14).
This apparently startling result suggests that the scalar potential has disappeared from the dynamical description. But, in fact, it has not. If we vary the Lagrangian (3.19), where $H$ is given by (3.21), with respect to $\mathbf{E}$ we find

$$
\begin{equation*}
\delta L=-\frac{1}{4 \pi} \int(d \mathbf{r}) \delta \mathbf{E} \cdot\left(\frac{1}{c} \frac{\partial}{\partial t} \mathbf{A}+\mathbf{E}\right)=0 \tag{3.22}
\end{equation*}
$$

Do we conclude that $\frac{1}{c} \frac{\partial}{\partial t} \mathbf{A}+\mathbf{E}=\mathbf{0}$ ? That would be true if the $\delta \mathbf{E}(\mathbf{r}, t)$ were arbitrary. They are not; $\mathbf{E}$ is subject to the restriction-the constraint-(3.15b), which means that any change in $\mathbf{E}$ must obey

$$
\begin{equation*}
\nabla \cdot \delta \mathbf{E}=0 \tag{3.23}
\end{equation*}
$$

The proper conclusion is that the vector multiplying $\delta \mathbf{E}$ in (3.22) is the gradient of a scalar function, just as in (3.15f),

$$
\begin{equation*}
\frac{1}{c} \frac{\partial}{\partial t} \mathbf{A}+\mathbf{E}=-\nabla \phi \tag{3.24}
\end{equation*}
$$

for that leads to

$$
\begin{equation*}
\delta L=-\frac{1}{4 \pi} \int(d \mathbf{r})(\nabla \cdot \delta \mathbf{E}) \phi=0 \tag{3.25}
\end{equation*}
$$

as required.
The fact that the energy is conserved,

$$
\begin{equation*}
\frac{d H}{d t}=0 \tag{3.26}
\end{equation*}
$$

where

$$
\begin{equation*}
H=\sum_{a} \frac{1}{2} m_{a} v_{a}^{2}+\int(d \mathbf{r}) U, \quad U=\frac{E^{2}+B^{2}}{8 \pi} \tag{3.27}
\end{equation*}
$$

is a simple sum of particle kinetic energy and integrated field energy density, can be verified directly by taking the time derivative of (3.20). The time rate of change of the particle energy is computed directly:

$$
\begin{equation*}
\frac{d}{d t} \sum_{a}\left(\frac{1}{2} m_{a} v_{a}^{2}+e_{a} \phi\left(\mathbf{r}_{a}\right)\right)=\sum_{a} \frac{\partial}{\partial t}\left(e_{a} \phi\left(\mathbf{r}_{a}\right)-\frac{e_{a}}{c} \mathbf{v}_{a} \cdot \mathbf{A}\left(\mathbf{r}_{a}\right)\right) . \tag{3.28}
\end{equation*}
$$

We can compute the time derivative of the field energy by using the equation of energy conservation,

$$
\begin{equation*}
\frac{d}{d t} \int(d \mathbf{r}) U=-\int(d \mathbf{r}) \mathbf{j} \cdot \mathbf{E} \tag{3.29}
\end{equation*}
$$

to be

$$
\frac{d}{d t} \int(d \mathbf{r})\left(\frac{E^{2}+B^{2}}{8 \pi}-\rho \phi\right)=\int(d \mathbf{r})\left[-\mathbf{j} \cdot \mathbf{E}-\phi \frac{\partial}{\partial t} \rho-\rho \frac{\partial}{\partial t} \phi\right]
$$

$$
\begin{align*}
& =-\int(d \mathbf{r})\left[\rho \frac{\partial}{\partial t} \phi-\frac{1}{c} \mathbf{j} \cdot \frac{\partial}{\partial t} \mathbf{A}\right] \\
& =-\sum_{a} e_{a}\left(\frac{\partial}{\partial t} \phi\left(\mathbf{r}_{a}\right)-\frac{1}{c} \mathbf{v}_{a} \cdot \frac{\partial}{\partial t} \mathbf{A}\left(\mathbf{r}_{a}\right)\right) . \tag{3.30}
\end{align*}
$$

Here we have used (3.15f), and have noted that

$$
\begin{equation*}
\int(d \mathbf{r})\left[\mathbf{j} \cdot \nabla \phi-\phi \frac{\partial}{\partial t} \rho\right]=0 \tag{3.31}
\end{equation*}
$$

by charge conservation. Observe that (3.28) and (3.30) are equal in magnitude and opposite in sign, so that their sum is zero. This proves the statement of energy conservation (3.26).

### 3.4 Momentum and Angular Momentum Conservation

The action principle not only provides us with the field equations, particle equations of motion, and expressions for the energy, but also with the generators (3.18b). The generators provide a connection between conservation laws and invariances of the action (recall Sect.2.4). Here we will further illustrate this connection by deriving momentum and angular momentum conservation from the invariance of the action under rigid coordinate translations and rotations, respectively. [In a similar way we could derive energy conservation, (3.26), from the invariance under time displacements-see also Sect.3.6].

Under an infinitesimal rigid coordinate displacement, $\delta \boldsymbol{\epsilon}$, a given point which is described by $\mathbf{r}$ in the old coordinate system is described by $\mathbf{r}+\delta \boldsymbol{\epsilon}$ in the new one. (See Fig. 3.1.) The response of the particle term in (3.18b) is simple: $\delta \boldsymbol{\epsilon} \cdot \sum_{a} \mathbf{p}_{a}$; for the field part, we require the change, $\delta \mathbf{A}$, of the vector potential induced by the rigid

Fig. 3.1 Rigid coordinate displacement, where the new coordinate system is displaced by a rigid translation $-\delta \boldsymbol{\epsilon}$ relative to the old coordinate system
![](https://cdn.mathpix.com/cropped/2025_02_21_13f260749f40b979ea80g-029.jpg?height=421&width=500&top_left_y=1624&top_left_x=848)
coordinate displacement. The value of a field $\mathcal{F}$ at a physical point $P$ is unchanged under such a displacement, so that if $\mathbf{r}$ and $\mathbf{r}+\delta \boldsymbol{\epsilon}$ are the coordinates of $P$ in the two frames, there are corresponding functions $F$ and $\bar{F}$ such that

$$
\begin{equation*}
\mathcal{F}(P)=F(\mathbf{r})=\bar{F}(\mathbf{r}+\delta \boldsymbol{\epsilon}) \tag{3.32}
\end{equation*}
$$

that is, the new function $\bar{F}$ of the new coordinate equals the old function $F$ of the old coordinate. The change in the function $F$ at the same coordinate is given by

$$
\begin{equation*}
\bar{F}(\mathbf{r})=F(\mathbf{r})+\delta F(\mathbf{r}) \tag{3.33}
\end{equation*}
$$

so that

$$
\begin{equation*}
\delta F(\mathbf{r})=F(\mathbf{r}-\delta \boldsymbol{\epsilon})-F(\mathbf{r})=-\delta \boldsymbol{\epsilon} \cdot \nabla F(\mathbf{r}), \tag{3.34}
\end{equation*}
$$

for a rigid translation (not a rotation).
As an example, consider the charge density

$$
\begin{equation*}
\rho(\mathbf{r})=\sum_{a} e_{a} \delta\left(\mathbf{r}-\mathbf{r}_{a}\right) \tag{3.35}
\end{equation*}
$$

If the positions of all the particles, the $\mathbf{r}_{a}$, are displaced by $\delta \boldsymbol{\epsilon}$, the charge density changes to

$$
\begin{equation*}
\rho(\mathbf{r})+\delta \rho(\mathbf{r})=\sum_{a} e_{a} \delta\left(\mathbf{r}-\mathbf{r}_{a}-\delta \boldsymbol{\epsilon}\right) \tag{3.36}
\end{equation*}
$$

where

$$
\begin{equation*}
\delta\left(\mathbf{r}-\mathbf{r}_{a}-\delta \boldsymbol{\epsilon}\right)=\delta\left(\mathbf{r}-\mathbf{r}_{a}\right)-\delta \boldsymbol{\epsilon} \cdot \nabla_{r} \delta\left(\mathbf{r}-\mathbf{r}_{a}\right), \tag{3.37}
\end{equation*}
$$

and therefore

$$
\begin{equation*}
\delta \rho(\mathbf{r})=-\delta \boldsymbol{\epsilon} \cdot \nabla \rho(\mathbf{r}) \tag{3.38}
\end{equation*}
$$

in agreement with (3.34).
So the field part of $G$ in (3.18b) is

$$
\begin{align*}
-\int(d \mathbf{r}) \frac{1}{4 \pi c} \mathbf{E} \cdot \delta \mathbf{A} & =\frac{1}{4 \pi c} \int(d \mathbf{r}) E_{i}(\delta \boldsymbol{\epsilon} \cdot \nabla) A_{i} \\
& =-\frac{1}{c} \sum_{a} e_{a} \delta \boldsymbol{\epsilon} \cdot \mathbf{A}\left(\mathbf{r}_{a}\right)+\frac{1}{4 \pi c} \int(d \mathbf{r})(\mathbf{E} \times \mathbf{B}) \cdot \delta \boldsymbol{\epsilon}, \tag{3.39}
\end{align*}
$$

where the last rearrangement makes use of (3.15b) and (3.15h), and the vector identity

$$
\begin{equation*}
\delta \boldsymbol{\epsilon} \times(\nabla \times \mathbf{A})=\nabla(\delta \boldsymbol{\epsilon} \cdot \mathbf{A})-(\delta \boldsymbol{\epsilon} \cdot \nabla) \mathbf{A} \tag{3.40}
\end{equation*}
$$

Including the particle part from (3.18b) we find the generator corresponding to a rigid coordinate displacement can be written as

$$
\begin{equation*}
G=\delta \boldsymbol{\epsilon} \cdot \mathbf{P} \tag{3.41}
\end{equation*}
$$

where

$$
\begin{equation*}
\mathbf{P}=\sum_{a}\left(\mathbf{p}_{a}-\frac{e_{a}}{c} \mathbf{A}\left(\mathbf{r}_{a}\right)\right)+\frac{1}{4 \pi c} \int(d \mathbf{r}) \mathbf{E} \times \mathbf{B} \equiv \sum_{a} m_{a} \mathbf{v}_{a}+\int(d \mathbf{r}) \mathbf{G} \tag{3.42}
\end{equation*}
$$

with $\mathbf{G}$ the momentum density. Since the action is invariant under a rigid displacement,

$$
\begin{equation*}
0=\delta W=G_{1}-G_{2}=\left(\mathbf{P}_{1}-\mathbf{P}_{2}\right) \cdot \delta \mathbf{r} \tag{3.43}
\end{equation*}
$$

we see that

$$
\begin{equation*}
\mathbf{P}_{1}=\mathbf{P}_{2} \tag{3.44}
\end{equation*}
$$

that is, the total momentum, $\mathbf{P}$, is conserved. This, of course, can also be verified by explicit calculation:

$$
\begin{align*}
\frac{d}{d t} \int(d \mathbf{r}) \frac{1}{4 \pi c} \mathbf{E} \times \mathbf{B} & =-\int(d \mathbf{r})\left[\rho \mathbf{E}+\frac{1}{c} \mathbf{j} \times \mathbf{B}\right] \\
& =-\sum_{a} e_{a}\left(\mathbf{E}\left(\mathbf{r}_{a}\right)+\frac{1}{c} \mathbf{v}_{a} \times \mathbf{B}\left(\mathbf{r}_{a}\right)\right) \tag{3.45}
\end{align*}
$$

from which the constancy of $\mathbf{P}$ follows.
Similar arguments can be carried out for a rigid rotation for which the change in the coordinate vector is

$$
\begin{equation*}
\delta \mathbf{r}=\delta \omega \times \mathbf{r} \tag{3.46}
\end{equation*}
$$

with $\delta \omega$ constant. The corresponding change in a vector function is

$$
\begin{equation*}
\overline{\mathbf{A}}(\mathbf{r}+\delta \mathbf{r})=\mathbf{A}(\mathbf{r})+\delta \omega \times \mathbf{A}(\mathbf{r}) \tag{3.47}
\end{equation*}
$$

since a vector transforms in the same way as $\mathbf{r}$, so the new function at the initial numerical values of the coordinates is

$$
\begin{equation*}
\overline{\mathbf{A}}(\mathbf{r})=\mathbf{A}(\mathbf{r})-(\delta \mathbf{r} \cdot \nabla) \mathbf{A}(\mathbf{r})+\delta \omega \times \mathbf{A}(\mathbf{r}) . \tag{3.48}
\end{equation*}
$$

The change in the vector potential is

$$
\begin{equation*}
\delta \mathbf{A}=-(\delta \mathbf{r} \cdot \nabla) \mathbf{A}+\delta \omega \times \mathbf{A} \tag{3.49}
\end{equation*}
$$

The generator can now be written in the form

$$
\begin{equation*}
G=\delta \omega \cdot \mathbf{J} \tag{3.50}
\end{equation*}
$$

where the total angular momentum, $\mathbf{J}$, is found to be

$$
\begin{equation*}
\mathbf{J}=\sum_{a} \mathbf{r}_{a} \times m_{a} \mathbf{v}_{a}+\int(d \mathbf{r}) \mathbf{r} \times\left(\frac{1}{4 \pi c} \mathbf{E} \times \mathbf{B}\right) \tag{3.51}
\end{equation*}
$$

which again is a constant of the motion.

### 3.5 Gauge Invariance and the Conservation of Charge

An electromagnetic system possesses a conservation law, that of electric charge, which has no place in the usual mechanical framework. It is connected to a further invariance of the electromagnetic fields-the potentials are not uniquely defined in that if we let

$$
\begin{equation*}
\mathbf{A} \rightarrow \mathbf{A}+\nabla \lambda, \quad \phi \rightarrow \phi-\frac{1}{c} \frac{\partial}{\partial t} \lambda, \tag{3.52}
\end{equation*}
$$

the electric and magnetic fields defined by (3.15f) and (3.15h) remain unaltered, for an arbitrary function $\lambda$. This is called gauge invariance; the corresponding substitution (3.52) is a gauge transformation. [The term has its origin in a now obsolete theory of Hermann Weyl (1885-1955) (Weyl 1919).]

This invariance of the action must imply a corresponding conservation law. To determine what is conserved, we compute the change in the Lagrangian, (3.9), explicitly. Trivially, the field part of $L$ remains unchanged. In considering the change of the particle part, we recognize that (3.52) is incomplete; since $\mathbf{v}$ is a physical quantity, $\mathbf{p}-(e / c) \mathbf{A}$ must be invariant under a gauge transformation, which will only be true if (3.52) is supplemented by

$$
\begin{equation*}
\mathbf{p} \rightarrow \mathbf{p}+\frac{e}{c} \nabla \lambda . \tag{3.53}
\end{equation*}
$$

Under the transformation (3.52) and (3.53), the Lagrangian becomes

$$
\begin{align*}
L \rightarrow \bar{L} & \equiv L+\sum_{a}\left[\frac{e_{a}}{c} \nabla \lambda \cdot\left(\frac{d \mathbf{r}_{a}}{d t}-\mathbf{v}_{a}\right)+\frac{e_{a}}{c} \frac{\partial}{\partial t} \lambda+\frac{e_{a}}{c} \mathbf{v}_{a} \cdot \nabla \lambda\right] \\
& =L+\sum_{a} \frac{e_{a}}{c}\left(\frac{\partial}{\partial t} \lambda+\frac{d \mathbf{r}_{a}}{d t} \cdot \nabla \lambda\right) \\
& =L+\frac{d}{d t} w \tag{3.54}
\end{align*}
$$

where

$$
\begin{equation*}
w=\sum_{a} \frac{e_{a}}{c} \lambda\left(\mathbf{r}_{a}, t\right) . \tag{3.55}
\end{equation*}
$$

What is the physical consequence of adding a total time derivative to a Lagrangian? It does not change the equations of motion, so the system is unaltered. Since the entire change is in the end point behavior,

$$
\begin{equation*}
\bar{W}_{12}=W_{12}+\left(w_{1}-w_{2}\right), \tag{3.56}
\end{equation*}
$$

the whole effect is a redefinition of the generators, $G$,

$$
\begin{equation*}
\bar{G}=G+\delta w . \tag{3.57}
\end{equation*}
$$

This alteration reflects the fact that the Lagrangian itself is ambiguous up to a total time derivative term. [This term may also be seen as arising from the field term in the generator (3.18b).]

To ascertain the implication of gauge invariance, we rewrite the change in the Lagrangian given in the first line of (3.54) by use of (3.12c),

$$
\begin{equation*}
\bar{L}-L=\frac{1}{c} \int(d \mathbf{r})\left[\rho \frac{\partial}{\partial t} \lambda+\mathbf{j} \cdot \nabla \lambda\right] \tag{3.58}
\end{equation*}
$$

and apply this result to an infinitesimal gauge transformation, $\lambda \rightarrow \delta \lambda$. The change in the action is then

$$
\begin{equation*}
\delta W_{12}=G_{\delta \lambda_{1}}-G_{\delta \lambda_{2}}-\int_{t_{2}}^{t_{1}} d t \int(d \mathbf{r}) \frac{1}{c} \delta \lambda\left(\frac{\partial}{\partial t} \rho+\nabla \cdot \mathbf{j}\right) \tag{3.59}
\end{equation*}
$$

with the generator being

$$
\begin{equation*}
G_{\delta \lambda}=\int(d \mathbf{r}) \frac{1}{c} \rho \delta \lambda \tag{3.60}
\end{equation*}
$$

In view of the arbitrary nature of $\delta \lambda(\mathbf{r}, t)$, the stationary action principle now demands that, at every point,

$$
\begin{equation*}
\frac{\partial}{\partial t} \rho+\nabla \cdot \mathbf{j}=0 \tag{3.61}
\end{equation*}
$$

that is, gauge invariance implies local charge conservation. (Of course, this same result follows from Maxwell's equations.) Then, the special situation $\delta \lambda=$ constant, where $\delta \mathbf{A}=\delta \phi=0$, and $W_{12}$ is certainly invariant, implies a conservation law, that of

$$
\begin{equation*}
G_{\delta \lambda}=\frac{1}{c} \delta \lambda Q, \tag{3.62}
\end{equation*}
$$

in which

$$
\begin{equation*}
Q=\int(d \mathbf{r}) \rho \tag{3.63}
\end{equation*}
$$

is the conserved total charge.

### 3.6 Gauge Invariance and Local Conservation Laws

We have just derived the local conservation law of electric charge. Electric charge is a property carried only by the particles, not by the electromagnetic field. In contrast, the mechanical properties of energy, linear momentum, and angular momentum are attributes of both particles and fields. For these we have conservation laws of total quantities. What about local conservation laws? The usual development of electrodynamics refers to local non-conservation laws; they concentrated on the fields and characterized the charged particles as sources (or sinks) of field mechanical properties. It is natural to ask for a more even-handed treatment of both charges and fields. We shall supply it, in the framework of a particular example. The property of gauge invariance will be both a valuable guide, and an aid to simplifying the calculations.

The time displacement of a complete physical system identifies its total energy. This suggests that time displacement of a part of the system provides energetic information about that portion. The ultimate limit of this spatial subdivision, a local description, should appear in response to an (infinitesimal) time displacement that varies arbitrarily in space as well as in time, $\delta t(\mathbf{r}, t)$.

Now we need a clue. How do fields, and potentials, respond to such coordinatedependent displacements? This is where the freedom of gauge transformations enters: The change of the vector and scalar potentials, by $\nabla \lambda(\mathbf{r}, t),-(1 / c)(\partial / \partial t) \lambda(\mathbf{r}, t)$, respectively, serves as a model for the potentials themselves. The advantage here is that the response of the scalar $\lambda(\mathbf{r}, t)$ to the time displacement can be reasonably taken to be

$$
\begin{equation*}
(\lambda+\delta \lambda)(\mathbf{r}, t+\delta t)=\lambda(\mathbf{r}, t) \tag{3.64a}
\end{equation*}
$$

or

$$
\begin{equation*}
\delta \lambda(\mathbf{r}, t)=-\delta t(\mathbf{r}, t) \frac{\partial}{\partial t} \lambda(\mathbf{r}, t) \tag{3.64b}
\end{equation*}
$$

Then we derive

$$
\begin{align*}
\delta(\nabla \lambda) & =-\delta t \frac{\partial}{\partial t}(\nabla \lambda)+\left(-\frac{1}{c} \frac{\partial}{\partial t} \lambda\right) c \nabla \delta t  \tag{3.65a}\\
\delta\left(-\frac{1}{c} \frac{\partial}{\partial t} \lambda\right) & =-\delta t\left(-\frac{1}{c} \frac{\partial^{2}}{\partial t^{2}} \lambda\right)-\left(-\frac{1}{c} \frac{\partial}{\partial t} \lambda\right) \frac{\partial}{\partial t} \delta t \tag{3.65b}
\end{align*}
$$

which is immediately generalized to

$$
\begin{align*}
\delta \mathbf{A} & =-\delta t \frac{\partial}{\partial t} \mathbf{A}+\phi c \boldsymbol{\nabla} \delta t  \tag{3.66a}\\
\delta \phi & =-\delta t \frac{\partial}{\partial t} \phi-\phi \frac{\partial}{\partial t} \delta t \tag{3.66b}
\end{align*}
$$

or, equivalently,

$$
\begin{align*}
\delta \mathbf{A} & =c \delta t \mathbf{E}+\nabla(\phi c \delta t)  \tag{3.67a}\\
\delta \phi & =-\frac{1}{c} \frac{\partial}{\partial t}(\phi c \delta t) \tag{3.67b}
\end{align*}
$$

In the latter form we recognize a gauge transformation, produced by the scalar $\phi c \delta t$, which will not contribute to the changes of field strengths. Accordingly, for that calculation we have, effectively, $\delta \mathbf{A}=c \delta t \mathbf{E}, \delta \phi=0$, leading to

$$
\begin{align*}
& \delta \mathbf{E}=-\frac{1}{c} \frac{\partial}{\partial t}(c \delta t \mathbf{E})=-\delta t \frac{\partial}{\partial t} \mathbf{E}-\mathbf{E} \frac{\partial}{\partial t} \delta t  \tag{3.68a}\\
& \delta \mathbf{B}=\nabla \times(c \delta t \mathbf{E})=-\delta t \frac{\partial}{\partial t} \mathbf{B}-\mathbf{E} \times \nabla c \delta t \tag{3.68b}
\end{align*}
$$

the last line employs the field equation $\nabla \times \mathbf{E}=-(1 / c)(\partial \mathbf{B} / \partial t)$.
In the following we adopt a viewpoint in which such homogeneous field equations are accepted as consequences of the definition of the fields in terms of potentials. That permits the field Lagrange function (3.9) to be simplified:

$$
\begin{equation*}
\mathcal{L}_{\text {field }}=\frac{1}{8 \pi}\left(E^{2}-B^{2}\right) \tag{3.69}
\end{equation*}
$$

Then we can apply the field variation (3.68b) directly, and get

$$
\begin{align*}
\delta \mathcal{L}_{\text {field }} & =-\delta t \frac{\partial}{\partial t} \mathcal{L}_{\text {field }}-\frac{1}{4 \pi} E^{2} \frac{\partial}{\partial t} \delta t-\frac{c}{4 \pi} \mathbf{E} \times \mathbf{B} \cdot \nabla \delta t \\
& =-\frac{\partial}{\partial t}\left(\delta t \mathcal{L}_{\text {field }}\right)-\frac{1}{8 \pi}\left(E^{2}+B^{2}\right) \frac{\partial}{\partial t} \delta t-\frac{c}{4 \pi} \mathbf{E} \times \mathbf{B} \cdot \nabla \delta t \tag{3.70}
\end{align*}
$$

Before commenting on these last, not unfamiliar, field structures, we turn to the charged particles and put them on a somewhat similar footing in terms of a continuous, rather than a discrete, description.

We therefore present the Lagrangian of the charges in (3.9) in terms of a corresponding Lagrange function,

$$
\begin{equation*}
L_{\text {charges }}=\int(d \mathbf{r}) \mathcal{L}_{\text {charges }}, \tag{3.71a}
\end{equation*}
$$

where

$$
\begin{equation*}
\mathcal{L}_{\text {charges }}=\sum_{a} \mathcal{L}_{a} \tag{3.71b}
\end{equation*}
$$

and

$$
\begin{equation*}
\mathcal{L}_{a}=\delta\left(\mathbf{r}-\mathbf{r}_{a}(t)\right)\left[\frac{1}{2} m_{a} v_{a}(t)^{2}-e_{a} \phi\left(\mathbf{r}_{a}, t\right)+\frac{e_{a}}{c} \mathbf{v}_{a}(t) \cdot \mathbf{A}\left(\mathbf{r}_{a}, t\right)\right] \tag{3.71c}
\end{equation*}
$$

the latter adopts the Lagrangian viewpoint, with $\mathbf{v}_{a}=d \mathbf{r}_{a} / d t$ accepted as a definition. Then, the effect of the time displacement on the variables $\mathbf{r}_{a}(t)$, taken as

$$
\begin{align*}
\left(\mathbf{r}_{a}+\delta \mathbf{r}_{a}\right)(t+\delta t) & =\mathbf{r}_{a}(t)  \tag{3.72a}\\
\delta \mathbf{r}_{a}(t) & =-\delta t\left(\mathbf{r}_{a}, t\right) \mathbf{v}_{a}(t) \tag{3.72b}
\end{align*}
$$

implies the velocity variation

$$
\begin{equation*}
\delta \mathbf{v}_{a}(t)=-\delta t\left(\mathbf{r}_{a}, t\right) \frac{d}{d t} \mathbf{v}_{a}(t)-\mathbf{v}_{a}(t)\left[\frac{\partial}{\partial t} \delta t+\mathbf{v}_{a} \cdot \nabla \delta t\right] ; \tag{3.73}
\end{equation*}
$$

the last step exhibits both the explicit and the implicit dependences of $\delta t\left(\mathbf{r}_{a}, t\right)$ on $t$. In computing the variation of $\phi\left(\mathbf{r}_{a}, t\right)$, for example, we combine the potential variation given in (3.66b) with the effect of $\delta \mathbf{r}_{a}$ :

$$
\begin{equation*}
\delta \phi\left(\mathbf{r}_{a}(t), t\right)=-\delta t \frac{\partial}{\partial t} \phi-\phi \frac{\partial}{\partial t} \delta t-\delta t \mathbf{v}_{a} \cdot \nabla_{a} \phi=-\delta t \frac{d}{d t} \phi-\phi \frac{\partial}{\partial t} \delta t \tag{3.74a}
\end{equation*}
$$

and, similarly,

$$
\begin{equation*}
\delta \mathbf{A}\left(\mathbf{r}_{a}(t), t\right)=-\delta t \frac{\partial}{\partial t} \mathbf{A}+\phi c \nabla \delta t-\delta t \mathbf{v}_{a} \cdot \nabla_{a} \mathbf{A}=-\delta t \frac{d}{d t} \mathbf{A}+\phi c \nabla \delta t \tag{3.74b}
\end{equation*}
$$

The total effect of these variations on $\mathcal{L}_{a}$ is thus
$\delta \mathcal{L}_{a}=-\delta t \frac{d}{d t} \mathcal{L}_{a}+\delta\left(\mathbf{r}-\mathbf{r}_{a}(t)\right)\left(-m_{a} v_{a}^{2}-\frac{e_{a}}{c} \mathbf{A} \cdot \mathbf{v}_{a}+e_{a} \phi\right)\left(\frac{\partial}{\partial t} \delta t+\mathbf{v}_{a} \cdot \nabla \delta t\right)$,
or

$$
\begin{equation*}
\delta \mathcal{L}_{a}=-\frac{d}{d t}\left(\delta t \mathcal{L}_{a}\right)-\delta\left(\mathbf{r}-\mathbf{r}_{a}(t)\right) E_{a}\left(\frac{\partial}{\partial t} \delta t+\mathbf{v}_{a} \cdot \nabla \delta t\right) \tag{3.75a}
\end{equation*}
$$

where we see the kinetic energy of the charged particle,

$$
\begin{equation*}
E_{a}=\frac{1}{2} m_{a} v_{a}^{2} \tag{3.76}
\end{equation*}
$$

We have retained the particle symbol $d / d t$ to the last, but now, being firmly back in the field, space-time viewpoint, it should be written as $\partial / \partial t$, referring to all $t$ dependence, with $\mathbf{r}$ being held fixed. The union of these various contributions to the variation of the total Lagrange function is

$$
\begin{equation*}
\delta \mathcal{L}_{\mathrm{tot}}=-\frac{\partial}{\partial t}\left(\delta t \mathcal{L}_{\mathrm{tot}}\right)-U_{\mathrm{tot}} \frac{\partial}{\partial t} \delta t-\mathbf{S}_{\mathrm{tot}} \cdot \nabla \delta t \tag{3.77}
\end{equation*}
$$

where, from (3.70) and (3.75b),

$$
\begin{equation*}
U_{\mathrm{tot}}=\frac{1}{8 \pi}\left(E^{2}+B^{2}\right)+\sum_{a} \delta\left(\mathbf{r}-\mathbf{r}_{a}(t)\right) E_{a} \tag{3.78a}
\end{equation*}
$$

and

$$
\begin{equation*}
\mathbf{S}_{\mathrm{tot}}=\frac{c}{4 \pi} \mathbf{E} \times \mathbf{B}+\sum_{a} \delta\left(\mathbf{r}-\mathbf{r}_{a}(t)\right) E_{a} \mathbf{v}_{a} \tag{3.78b}
\end{equation*}
$$

are physically transparent forms for the total energy density and total energy flux vector.

To focus on what is new in this development, we ignore boundary effects in the stationary action principle, by setting the otherwise arbitrary $\delta t(\mathbf{r}, t)$ equal to zero at $t_{1}$ and $t_{2}$. Then, through partial integration, we conclude that

$$
\begin{equation*}
\delta W_{12}=\int_{t_{2}}^{t_{1}} d t \int(d \mathbf{r}) \delta t\left(\frac{\partial}{\partial t} U_{\mathrm{tot}}+\nabla \cdot \mathbf{S}_{\mathrm{tot}}\right)=0 \tag{3.79}
\end{equation*}
$$

from which follows the local statement of total energy conservation,

$$
\begin{equation*}
\frac{\partial}{\partial t} U_{\mathrm{tot}}+\nabla \cdot \mathbf{S}_{\mathrm{tot}}=0 \tag{3.80}
\end{equation*}
$$

## Chapter 4 <br> Quantum Action Principle

This Chapter, and the following one, are based on lectures given by the author in quantum field theory courses at the University of Oklahoma over several years, based in turn largely on lectures given by Schwinger at Harvard in the late 1960s.

After the above reminder of classical variational principles, we now turn to the dynamics of quantum mechanics. We begin by considering the transformation function $\left\langle a^{\prime}, t+d t \mid b^{\prime}, t\right\rangle$. Here $\left|b^{\prime}, t\right\rangle$ is a state specified by the values $b^{\prime}=\left\{b^{\prime}\right\}$ of a complete set of dynamical variables $B(t)$, while $\left|a^{\prime}, t+d t\right\rangle$ is a state specified by values $a^{\prime}=\left\{a^{\prime}\right\}$ of a (different) complete set of dynamical variables $A(t+d t)$, defined at a slightly later time. ${ }^{1}$ We suppose that $A$ and $B$ do not possess any explicit time dependence-that is, their definition does not depend upon $t$. Here

$$
\begin{equation*}
\left\langle a^{\prime}, t+d t\right|=\left\langle a^{\prime}, t\right| U \tag{4.1}
\end{equation*}
$$

where the infinitesimal time translation operator is related to the generator of time translations as follows,

$$
\begin{equation*}
U=1+i G=1-i d t H \tag{4.2}
\end{equation*}
$$

The Hamiltonian $H$ is a function of dynamical variables, which we write generically as $\chi(t)$, and of $t$ explicitly. Thus

$$
\begin{equation*}
\left\langle a^{\prime}, t+d t \mid b^{\prime}, t\right\rangle=\left\langle a^{\prime}, t\right| 1-i d t H(\chi(t), t)\left|b^{\prime}, t\right\rangle \tag{4.3}
\end{equation*}
$$

[^1]We next translate states and operators to time zero:

$$
\begin{align*}
\left\langle a^{\prime}, t\right| & =\left\langle a^{\prime}\right| U(t), \quad\left|b^{\prime}, t\right\rangle=U^{-1}(t)\left|b^{\prime}\right\rangle,  \tag{4.4a}\\
\chi(t) & =U^{-1}(t) \chi U(t), \tag{4.4b}
\end{align*}
$$

where $\chi=\chi(0)$, etc. Then,

$$
\begin{equation*}
\left\langle a^{\prime}, t+d t \mid b^{\prime}, t\right\rangle=\left\langle a^{\prime}\right| 1-i d t H(\chi, t)\left|b^{\prime}\right\rangle \tag{4.5}
\end{equation*}
$$

or, as a differential equation

$$
\begin{align*}
\delta_{\mathrm{dyn}}\left\langle a^{\prime}, t+d t \mid b^{\prime}, t\right\rangle & =i\left\langle a^{\prime}\right| \delta_{\mathrm{dyn}}[-d t H]\left|b^{\prime}\right\rangle \\
& =i\left\langle a^{\prime}, t+d t\right| \delta_{\mathrm{dyn}}[-d t H(\chi(t), t)]\left|b^{\prime}, t\right\rangle, \tag{4.6}
\end{align*}
$$

where $\delta_{\mathrm{dyn}}$ corresponds to changes in initial and final times, $\delta t_{2}$ and $\delta t_{1}$, and in the structure of $H, \delta H$. [By reintroducing $d t$ in the state on the left in the second line, we make a negligible error of $\mathcal{O}\left(d t^{2}\right)$.]

However, we can also consider kinematical changes. To understand these, consider a system defined by coordinates and momenta, $\left\{q_{a}(t)\right\},\left\{p_{a}(t)\right\}, a=1, \ldots, n$, which satisfy the canonical commutation relations,

$$
\begin{gather*}
{\left[q_{a}(t), p_{b}(t)\right]=i \delta_{a b}, \quad(\hbar=1)}  \tag{4.7a}\\
{\left[q_{a}(t), q_{b}(t)\right]=\left[p_{a}(t), p_{b}(t)\right]=0 .} \tag{4.7b}
\end{gather*}
$$

A spatial displacement $\delta q_{a}$ is induced by

$$
\begin{equation*}
U=1+i G_{q}, \quad G_{q}=\sum_{a=1}^{n} p_{a} \delta q_{a} \tag{4.8}
\end{equation*}
$$

In fact ( $\delta q_{a}$ is a number, not an operator),

$$
\begin{align*}
U^{-1} q_{a} U & =q_{a}-\frac{1}{i}\left[q_{a}, G_{q}\right] \\
& =q_{a}-\delta q_{a} \tag{4.9}
\end{align*}
$$

while

$$
\begin{equation*}
U^{-1} p_{a} U=p_{a}-\frac{1}{i}\left[p_{a}, G_{q}\right]=p_{a} \tag{4.10}
\end{equation*}
$$

The (dual) symmetry between position and momentum,

$$
\begin{equation*}
q \rightarrow p, \quad p \rightarrow-q, \tag{4.11}
\end{equation*}
$$

gives us the form for the generator of a displacement in $p$ :

$$
\begin{equation*}
G_{p}=-\sum_{a} q_{a} \delta p_{a} \tag{4.12}
\end{equation*}
$$

A kinematic variation in the states is given by the generators
so, for example, under a $\delta q$ variation, the transformation function changes by

$$
\begin{equation*}
\delta_{q}\left\langle a^{\prime}, t+d t \mid b^{\prime}, t\right\rangle=i\left\langle a^{\prime}, t+d t\right| \sum_{a}\left[p_{a}(t+d t) \delta q_{a}(t+d t)-p_{a}(t) \delta q_{a}(t)\right]\left|b^{\prime}, t\right\rangle \tag{4.14}
\end{equation*}
$$

Now the dynamical variables at different times are related by Hamilton's equations,

$$
\begin{align*}
\frac{d p_{a}(t)}{d t} & =\frac{1}{i}\left[p_{a}(t), H(q(t), p(t), t)\right] \\
& =-\frac{\partial H}{\partial q_{a}}(t) \tag{4.15}
\end{align*}
$$

so

$$
\begin{equation*}
p_{a}(t+d t)-p_{a}(t)=d t \frac{d p_{a}(t)}{d t}=-d t \frac{\partial H}{\partial q_{a}}(t) \tag{4.16}
\end{equation*}
$$

Similarly, the other Hamilton's equation

$$
\begin{equation*}
\frac{d q_{a}}{d t}=\frac{\partial H}{\partial p_{a}} \tag{4.17}
\end{equation*}
$$

implies that

$$
\begin{equation*}
q_{a}(t+d t)-q_{a}(t)=d t \frac{\partial H}{\partial p_{a}}(t) \tag{4.18}
\end{equation*}
$$

From this we deduce first the $q$ variation of the transformation function,

$$
\begin{align*}
& \delta_{q}\left\langle a^{\prime}, t+d t \mid b^{\prime}, t\right\rangle \\
= & i\left\langle a^{\prime}, t+d t\right| \sum_{a} p_{a}(t)\left[\delta q_{a}(t+d t)-\delta q_{a}(t)\right]-d t \frac{\partial H}{\partial q_{a}} \delta q_{a}(t)+\mathcal{O}\left(d t^{2}\right)\left|b^{\prime}, t\right\rangle \\
= & i\left\langle a^{\prime}, t+d t\right| \delta_{q}\left[\sum_{a} p_{a}(t) \cdot\left[q_{a}(t+d t)-q_{a}(t)\right]-d t H(q(t), p(t), t)\right]\left|b^{\prime}, t\right\rangle, \tag{4.19}
\end{align*}
$$

where the dot denotes symmetric multiplication of the $p$ and $q$ operators.
For $p$ variations we have a similar result:

$$
\begin{align*}
& \delta_{p}\left\langle a^{\prime}, t+d t \mid b^{\prime}, t\right\rangle \\
= & -i\left\langle a^{\prime}, t+d t\right| \sum_{a}\left[q_{a}(t+d t) \delta p_{a}(t+d t)-q_{a}(t) \delta p_{a}(t)\right]\left|b^{\prime}, t\right\rangle \\
= & -i\left\langle a^{\prime}, t+d t\right| \sum_{a} q_{a}(t)\left[\delta p_{a}(t+d t)-\delta p_{a}(t)\right]+d t \frac{\partial H}{\partial p_{a}}(t) \delta p_{a}(t)\left|b^{\prime}, t\right\rangle \\
= & i\left\langle a^{\prime}, t+d t\right| \delta_{p}\left[-\sum_{a} q_{a}(t) \cdot\left(p_{a}(t+d t)-p_{a}(t)\right)-d t H(q(t), p(t), t)\right]\left|b^{\prime}, t\right\rangle . \tag{4.20}
\end{align*}
$$

That is, for $q$ variations

$$
\begin{equation*}
\delta_{q}\left\langle a^{\prime}, t+d t \mid b^{\prime}, t\right\rangle=i\left\langle a^{\prime}, t+d t\right| \delta_{q}\left[d t L_{q}\right]\left|b^{\prime}, t\right\rangle \tag{4.21a}
\end{equation*}
$$

with the quantum Lagrangian

$$
\begin{equation*}
L_{q}=\sum_{a} p_{a} \cdot \dot{q}_{a}-H(q, p, t) \tag{4.21b}
\end{equation*}
$$

while for $p$ variations

$$
\begin{equation*}
\delta_{p}\left\langle a^{\prime}, t+d t \mid b^{\prime}, t\right\rangle=i\left\langle a^{\prime}, t+d t\right| \delta_{p}\left[d t L_{p}\right]\left|b^{\prime}, t\right\rangle, \tag{4.22a}
\end{equation*}
$$

with the quantum Lagrangian

$$
\begin{equation*}
L_{p}=-\sum_{a} q_{a} \cdot \dot{p}_{a}-H(q, p, t) \tag{4.22b}
\end{equation*}
$$

We see here two alternative forms of the quantum Lagrangian. Note that the two forms differ by a total time derivative,

$$
\begin{equation*}
L_{q}-L_{p}=\frac{d}{d t} \sum_{a} p_{a} \cdot q_{a} \tag{4.23}
\end{equation*}
$$

We now can unite the kinematic transformations considered here with the dynamic ones considered earlier, in Eq. (4.6):

$$
\begin{equation*}
\delta=\delta_{\mathrm{dyn}}+\delta_{\mathrm{kin}}: \quad \delta\left\langle a^{\prime}, t+d t \mid b^{\prime}, d t\right\rangle=i\left\langle a^{\prime}, t+d t\right| \delta[d t L]\left|b^{\prime}, t\right\rangle \tag{4.24}
\end{equation*}
$$

Suppose, for concreteness, that our states are defined by values of $q$, so that

$$
\begin{equation*}
\delta_{p}\left\langle a^{\prime}, t+d t \mid b^{\prime} t\right\rangle=0 \tag{4.25}
\end{equation*}
$$

This is consistent, as a result of Hamilton's equations,

$$
\begin{equation*}
\delta_{p} L_{q}=\sum_{a} \delta p_{a}\left(\dot{q}_{a}-\frac{\partial H}{\partial p_{a}}\right)=0 . \tag{4.26}
\end{equation*}
$$

In the following we will use $L_{q}$.
It is immediately clear that we can iterate the infinitesimal version (4.24) of the quantum action principle by inserting at each time step a complete set of intermediate states (to simplify the notation, we ignore their quantum numbers):

$$
\begin{equation*}
\left\langle t_{1} \mid t_{2}\right\rangle=\left\langle t_{1} \mid t_{1}-d t\right\rangle\left\langle t_{1}-d t \mid t_{1}-2 d t\right\rangle \cdots\left\langle t_{2}+2 d t \mid t_{2}+d t\right\rangle\left\langle t_{2}+d t \mid t_{2}\right\rangle \tag{4.27}
\end{equation*}
$$

So in this way we deduce the general form of Schwinger's quantum action principle:

$$
\begin{equation*}
\delta\left\langle t_{1} \mid t_{2}\right\rangle=i\left\langle t_{1}\right| \delta \int_{t_{2}}^{t_{1}} d t L\left|t_{2}\right\rangle \tag{4.28}
\end{equation*}
$$

This summarizes all the properties of the system.
Suppose the dynamical system is given, that is, the structure of $H$ does not change. Then

$$
\begin{equation*}
\delta\left\langle t_{1} \mid t_{2}\right\rangle=i\left\langle t_{1}\right| G_{1}-G_{2}\left|t_{2}\right\rangle, \tag{4.29}
\end{equation*}
$$

where the generator $G_{a}$ depends on $p$ and $q$ at time $t_{a}$. Comparing with the action principle (4.28) we see

$$
\begin{equation*}
\delta \int_{t_{2}}^{t_{1}} d t L=G_{1}-G_{2} \tag{4.30}
\end{equation*}
$$

which has exactly the form of the classical action principle (2.3), except that the Lagrangian $L$ and the generators $G$ are now operators. If no changes occur at the endpoints, we have the principle of stationary action,

$$
\begin{equation*}
\delta \int_{t_{2}}^{t_{1}}\left(\sum_{a} p_{a} \cdot d q_{a}-H d t\right)=0 \tag{4.31}
\end{equation*}
$$

As in the classical case, let us introduce a time parameter $\tau, t=t(\tau)$, such that $\tau_{2}$ and $\tau_{1}$ are fixed. Calling the new time parameter by the original name, the above variation reads

$$
\begin{align*}
& \sum_{a}\left[\delta p_{a} \cdot d q_{a}+p_{a} \cdot d \delta q_{a}-\delta H d t-H d \delta t\right] \\
= & d\left[\sum_{a} p_{a} \cdot \delta q_{a}-H \delta t\right]+\sum_{a}\left[\delta p_{a} \cdot d q_{a}-d p_{a} \cdot \delta q_{a}\right]-\delta H d t+d H \delta t, \tag{4.32}
\end{align*}
$$

so the action principle says

$$
\begin{align*}
G & =\sum_{a} p_{a} \cdot \delta q_{a}-H \delta t  \tag{4.33a}\\
\delta H & =\frac{d H}{d t} \delta t+\sum_{a}\left(\delta p_{a} \cdot \frac{d q_{a}}{d t}-\delta q_{a} \cdot \frac{d p_{a}}{d t}\right) . \tag{4.33b}
\end{align*}
$$

We will again assume $\delta p_{a}, \delta q_{a}$ are not operators (that is, they are proportional to the unit operator); then we recover Hamilton's equations,

$$
\begin{align*}
\frac{\partial H}{\partial t} & =\frac{d H}{d t}  \tag{4.34a}\\
\frac{\partial H}{\partial p_{a}} & =\frac{d q_{a}}{d t}  \tag{4.34b}\\
\frac{\partial H}{\partial q_{a}} & =-\frac{d p_{a}}{d t} \tag{4.34c}
\end{align*}
$$

(Schwinger also explored the possibility of operator variations, see, for example, his les Houches lectures (Schwinger 1970a).) We learn from the generators,

$$
\begin{equation*}
G_{t}=-H \delta t, \quad G_{q}=\sum_{a} p_{a} \delta q_{a} \tag{4.35}
\end{equation*}
$$

that the change in some function $F$ of the dynamical variable is

$$
\begin{equation*}
\delta F=\frac{d F}{d t} \delta t+\frac{1}{i}[F, G], \tag{4.36}
\end{equation*}
$$

so we deduce

$$
\begin{align*}
\frac{d F}{d t} & =\frac{\partial F}{\partial t}+\frac{1}{i}[F, H]  \tag{4.37a}\\
\frac{\partial F}{\partial q_{a}} & =\frac{1}{i}\left[F, p_{a}\right] \tag{4.37b}
\end{align*}
$$

Note that from this the canonical commutation relations follow,

$$
\begin{equation*}
\left[q_{a}, p_{b}\right]=i \delta_{a b}, \quad\left[p_{a}, p_{b}\right]=0 \tag{4.38}
\end{equation*}
$$

as well as Newton's law,

$$
\begin{equation*}
\dot{p}_{a}=-\frac{1}{i}\left[H, p_{a}\right]=-\frac{\partial H}{\partial q_{a}} . \tag{4.39}
\end{equation*}
$$

If we had used $L_{p}$ instead of $L_{q}$, we would have obtained the same equations of motion, but in place of $G_{q}$, we would have obtained

$$
\begin{equation*}
G_{p}=-\sum_{a} q_{a} \delta p_{a} \tag{4.40}
\end{equation*}
$$

which implies

$$
\begin{equation*}
\frac{\partial F}{\partial p_{a}}=-\frac{1}{i}\left[F, q_{a}\right] . \tag{4.41}
\end{equation*}
$$

From this can be deduced the remaining canonical commutator,

$$
\begin{equation*}
\left[q_{a}, q_{b}\right]=0 \tag{4.42}
\end{equation*}
$$

as well as the remaining Hamilton equation,

$$
\begin{equation*}
\dot{q}_{a}=\frac{1}{i}\left[q_{a}, H\right]=\frac{\partial H}{\partial p_{a}} . \tag{4.43}
\end{equation*}
$$

It is easy to show that the effect of changing the Lagrangian by a total time derivative (which is what is done in passing from $L_{q}$ to $L_{p}$ ) is to change the generators.

We now turn to examples.

### 4.1 Harmonic Oscillator

The harmonic oscillator is defined in terms of creation and annihilation operators, ${ }^{2}$ $y^{\dagger}$ and $y$, and the corresponding Hamiltonian $H$,

$$
\begin{align*}
{\left[y, y^{\dagger}\right] } & =1  \tag{4.44a}\\
H & =\omega\left(y^{\dagger} y+\frac{1}{2}\right) . \tag{4.44b}
\end{align*}
$$

The equations of motion are

$$
\begin{align*}
\frac{d y}{d t} & =\frac{1}{i}[y, H]=\frac{1}{i} \omega y,  \tag{4.45a}\\
\frac{d y^{\dagger}}{d t} & =\frac{1}{i}\left[y^{\dagger}, H\right]=-\frac{1}{i} \omega y^{\dagger} . \tag{4.45b}
\end{align*}
$$

Eigenstates of $y$ and $y^{\dagger}$ exist, as right and left vectors, respectively,[^2]

$$
\begin{align*}
y\left|y^{\prime}\right\rangle & =y^{\prime}\left|y^{\prime}\right\rangle  \tag{4.46a}\\
\left\langle y^{\dagger \prime}\right| y^{\dagger} & =y^{\dagger \prime}\left\langle y^{\dagger \prime}\right| \tag{4.46b}
\end{align*}
$$

while $\left\langle y^{\prime}\right|$ and $\left|y^{\dagger \prime}\right\rangle$ do not exist. ${ }^{3}$ These are the famous "coherent states," to whom the name Roy Glauber (1963) is invariably attached, although they were discovered by Erwin Schrödinger (1926), and Glauber's approach, as he acknowledged, followed that of his mentor, Schwinger (1953).

The transformation function we seek is therefore

$$
\begin{equation*}
\left\langle y^{\dagger \prime}, t_{1} \mid y^{\prime \prime}, t_{2}\right\rangle . \tag{4.48}
\end{equation*}
$$
If we regard $y$ as a "coordinate," the corresponding "momentum" is $i y^{\dagger}$ :
$$
\begin{equation*}
\dot{y}=\frac{1}{i} \omega y=\frac{\partial H}{\partial i y^{\dagger}}, \quad i \dot{y}^{\dagger}=-\omega y^{\dagger}=-\frac{\partial H}{\partial y} . \tag{4.49}
\end{equation*}
$$
The corresponding Lagrangian is therefore ${ }^{4}$
$$
\begin{equation*}
L=i y^{\dagger} \cdot \dot{y}-H \tag{4.51}
\end{equation*}
$$
Because we use $y$ as our state variable at the initial time, and $y^{\dagger}$ at the final time, we must exploit our freedom to redefine our generators to write
$$
\begin{equation*}
W_{12}=\int_{2}^{1} d t L-i y^{\dagger}\left(t_{1}\right) \cdot y\left(t_{1}\right) \tag{4.52}
\end{equation*}
$$
Then the variation of the action is
$$
\begin{align*}
\delta W_{12} & =-i \delta\left(y_{1}^{\dagger} \cdot y_{1}\right)+G_{1}-G_{2} \\
& =-i \delta y_{1}^{\dagger} \cdot y_{1}-i y_{1}^{\dagger} \cdot \delta y_{1}+i y_{1}^{\dagger} \cdot \delta y_{1}-i y_{2}^{\dagger} \cdot \delta y_{2}-H \delta t_{1}+H \delta t_{2} \\
& =-i \delta y_{1}^{\dagger} \cdot y_{1}-i y_{2}^{\dagger} \cdot \delta y_{2}-H\left(\delta t_{1}-\delta t_{2}\right) \tag{4.53}
\end{align*}
$$

$$
\begin{align*}
& { }^{3} \text { If }\left\langle y^{\prime}\right| y=y^{\prime}\left\langle y^{\prime}\right| \text { then we would have an evident contradiction: } \\
& \qquad 1=\left\langle y^{\prime}\right|\left[y, y^{\dagger}\right]\left|y^{\prime}\right\rangle=y^{\prime}\left\langle y^{\prime}\right| y^{\dagger}\left|y^{\prime}\right\rangle-\left\langle y^{\prime}\right| y^{\dagger}\left|y^{\prime}\right\rangle y^{\prime}=0 . \tag{4.47}
\end{align*}
$$
${ }^{4}$ We might note that in terms of (dimensionless) position and momentum operators
$$
\begin{equation*}
i y^{\dagger} \cdot \dot{y}=\frac{i}{2}(q-i p) \cdot(\dot{q}+i \dot{p})=\frac{1}{2}(p \cdot \dot{q}-q \cdot \dot{p})+\frac{i}{4} \frac{d}{d t}\left(q^{2}+p^{2}\right) \tag{4.50}
\end{equation*}
$$
where the first term in the final form is the average of the Legendre transforms in $L_{q}$ and $L_{p}$.

Then the quantum action principle says
$$
\begin{equation*}
\delta\left\langle y^{\dagger \prime}, t_{1} \mid y^{\prime \prime}, t_{2}\right\rangle=i\left\langle y^{\dagger \prime}, t_{1}\right|-i \delta y_{1}^{\dagger^{\prime}} y_{1}-i y_{2}^{\dagger} \delta y_{2}^{\prime \prime}-\omega y_{1}^{\dagger \prime} y_{1}\left(\delta t_{1}-\delta t_{2}\right)\left|y^{\prime \prime}, t_{2}\right\rangle, \tag{4.54}
\end{equation*}
$$
since by assumption the variations in the dynamical variables are numerical:
$$
\begin{equation*}
\left[\delta y_{1}^{\dagger}, y_{1}\right]=\left[y_{2}^{\dagger}, \delta y_{2}\right] \tag{4.55}
\end{equation*}
$$
and we have dropped the zero-point energy. Now use the equations of motion (4.45a) and (4.45b) to deduce that
$$
\begin{equation*}
y_{1}=e^{-i \omega\left(t_{1}-t_{2}\right)} y_{2}, \quad y_{2}^{\dagger}=e^{-i \omega\left(t_{1}-t_{2}\right)} y_{1}^{\dagger} \tag{4.56}
\end{equation*}
$$
and hence
$$
\begin{align*}
\delta\left\langle y^{\dagger \prime}, t_{1} \mid y^{\prime \prime}, t_{2}\right\rangle= & \left\langle y^{\dagger^{\prime}}, t_{1}\right| \delta y^{\dagger \prime} e^{-i \omega\left(t_{1}-t_{2}\right)} y^{\prime \prime}+y^{\dagger \prime} e^{-i \omega\left(t_{1}-t_{2}\right)} \delta y^{\prime \prime} \\
& -i \omega y^{\dagger \prime} e^{-i \omega\left(t_{1}-t_{2}\right)}\left(\delta t_{1}-\delta t_{2}\right) y^{\prime \prime}\left|y^{\prime \prime}, t_{2}\right\rangle \\
= & \left\langle y^{\dagger \prime}, t_{1} \mid y^{\prime \prime}, t_{2}\right\rangle \delta\left[y^{\dagger \prime} e^{-i \omega\left(t_{1}-t_{2}\right)} y^{\prime \prime}\right] . \tag{4.57}
\end{align*}
$$
From this we can deduce that the transformation function has the exponential form
$$
\begin{equation*}
\left\langle y^{\dagger \prime}, t_{1} \mid y^{\prime \prime}, t_{2}\right\rangle=\exp \left[y^{\dagger \prime} e^{-i \omega\left(t_{1}-t_{2}\right)} y^{\prime \prime}\right], \tag{4.58}
\end{equation*}
$$
which has the correct boundary condition at $t_{1}=t_{2}$; and in particular, $\langle 0 \mid 0\rangle=1$.
On the other hand,
$$
\begin{equation*}
\left\langle y^{\dagger \prime}, t_{1} \mid y^{\prime \prime}, t_{2}\right\rangle=\left\langle y^{\dagger \prime}\right| e^{-i H\left(t_{1}-t_{2}\right)}\left|y^{\prime \prime}\right\rangle, \tag{4.59}
\end{equation*}
$$
where both states are expressed at the common time $t_{2}$, so, upon inserting a complete set of energy eigenstates, we obtain $\left(t=t_{1}-t_{2}\right)$
$$
\begin{equation*}
\sum_{E}\left\langle y^{\dagger \prime} \mid E\right\rangle e^{-i E t}\left\langle E \mid y^{\prime \prime}\right\rangle, \tag{4.60}
\end{equation*}
$$
which we compare to the Taylor expansion of the previous formula,
$$
\begin{equation*}
\sum_{n=0}^{\infty} \frac{\left(y^{\dagger \prime}\right)^{n}}{\sqrt{n!}} e^{-i n \omega t} \frac{\left(y^{\prime \prime}\right)^{n}}{\sqrt{n!}} \tag{4.61}
\end{equation*}
$$
This gives all the eigenvectors and eigenvalues:
$$
\begin{align*}
E_{n} & =n \omega, \quad n=0,1,2, \ldots,  \tag{4.62a}\\
\left\langle y^{\dagger \prime} \mid E_{n}\right\rangle & =\frac{\left(y^{\prime \prime}\right)^{n}}{\sqrt{n!}}  \tag{4.62b}\\
\left\langle E_{n} \mid y^{\prime \prime}\right\rangle & =\frac{\left(y^{\prime \prime}\right)^{n}}{\sqrt{n!}} . \tag{4.62c}
\end{align*}
$$
These correspond to the usual construction of the eigenstates from the ground state:
$$
\begin{equation*}
\left|E_{n}\right\rangle=\frac{\left(y^{\dagger}\right)^{n}}{\sqrt{n!}}|0\rangle \tag{4.63}
\end{equation*}
$$
### 4.2 Forced Harmonic Oscillator

Now we add a driving term to the Hamiltonian,
$$
\begin{equation*}
H=\omega y^{\dagger} y+y K^{*}(t)+y^{\dagger} K(t) \tag{4.64}
\end{equation*}
$$
where $K(t)$ is an external force (Kraft is force in German). The equation of motion is
$$
\begin{equation*}
i \frac{d y}{d t}=\frac{\partial H}{\partial y^{\dagger}}=[y, H]=\omega y+K(t) \tag{4.65}
\end{equation*}
$$
while $y^{\dagger}$ satisfies the adjoint equation. In the presence of $K(t)$, we wish to compute the transformation function $\left\langle y^{\dagger \prime}, t_{1} \mid y^{\prime \prime}, t_{2}\right\rangle^{K}$.

Consider a variation of $K$. According to the action principle
$$
\begin{align*}
\delta_{K}\left\langle y^{\dagger \prime}, t_{1} \mid y^{\prime \prime}, t_{2}\right\rangle^{K} & =\left\langle y^{\dagger \prime}, t_{1}\right| i \delta_{K} W_{12}\left|y^{\prime \prime}, t_{2}\right\rangle^{K} \\
& =-i\left\langle y^{\dagger \prime}, t_{1}\right| \int_{t_{2}}^{t_{1}} d t\left[\delta K y^{\dagger}+\delta K^{*} y\right]\left|y^{\prime \prime}, t_{2}\right\rangle^{K} . \tag{4.66}
\end{align*}
$$
We can solve this differential equation by noting that the equation of motion (4.65) can be rewritten as
$$
\begin{equation*}
i \frac{d}{d t}\left[e^{i \omega t} y(t)\right]=e^{i \omega t} K(t) \tag{4.67}
\end{equation*}
$$
which is integrated to read
$$
\begin{equation*}
e^{i \omega t} y(t)-e^{i \omega t_{2}} y\left(t_{2}\right)=-i \int_{t_{2}}^{t} d t^{\prime} e^{i \omega t^{\prime}} K\left(t^{\prime}\right) \tag{4.68}
\end{equation*}
$$
or
$$
\begin{equation*}
y(t)=e^{-i \omega\left(t-t_{2}\right)} y_{2}-i \int_{t_{2}}^{t} d t^{\prime} e^{-i \omega\left(t-t^{\prime}\right)} K\left(t^{\prime}\right), \tag{4.69}
\end{equation*}
$$
and the adjoint [^5]
$$
\begin{equation*}
y^{\dagger}(t)=e^{-i \omega\left(t_{1}-t\right)} y_{1}^{\dagger}-i \int_{t}^{t_{1}} d t^{\prime} e^{-i \omega\left(t^{\prime}-t\right)} K^{*}\left(t^{\prime}\right) \tag{4.72}
\end{equation*}
$$
Thus our differential equation (4.66) reads
$$
\begin{align*}
& \frac{\delta_{K}\left\langle y^{\dagger \prime}, t_{1} \mid y^{\prime \prime}, t_{2}\right\rangle^{K}}{\left\langle y^{\dagger \prime}, t_{1} \mid y^{\prime \prime}, t_{2}\right\rangle^{K}}=\delta_{K} \ln \left\langle y^{\dagger \prime}, t_{1} \mid y^{\prime \prime}, t_{2}\right\rangle^{K} \\
= & -i \int_{t_{2}}^{t_{1}} d t \delta K(t)\left[y^{\dagger \prime} e^{-i \omega\left(t_{1}-t\right)}-i \int_{t}^{t_{1}} d t^{\prime} e^{-i \omega\left(t^{\prime}-t\right)} K^{*}\left(t^{\prime}\right)\right] \\
& -i \int_{t_{2}}^{t_{1}} d t \delta K^{*}(t)\left[e^{-i \omega\left(t-t_{2}\right)} y^{\prime \prime}-i \int_{t_{2}}^{t} d t^{\prime} e^{-i \omega\left(t-t^{\prime}\right)} K\left(t^{\prime}\right)\right] . \tag{4.73}
\end{align*}
$$
Notice that in the terms bilinear in $K$ and $K^{*}, K$ always occurs earlier than $K^{*}$. Therefore, these terms can be combined to read
$$
\begin{equation*}
-\delta_{K} \int_{t_{2}}^{t_{1}} d t d t^{\prime} K^{*}(t) \eta\left(t-t^{\prime}\right) e^{-i \omega\left(t-t^{\prime}\right)} K\left(t^{\prime}\right) \tag{4.74}
\end{equation*}
$$
where the step function is
$$
\eta(t)=\left\{\begin{array}{l}
1, t>0,  \tag{4.75}\\
0, t<0
\end{array}\right.
$$
Since we already know the $K=0$ value from Eq. (4.58), we may now immediately integrate our differential equation:[^3]which is Eq. (4.72).

$$
\begin{align*}
\left\langle y^{\dagger \prime}, t_{1} \mid y^{\prime \prime}, t_{2}\right\rangle^{K}= & \exp \left[y^{\dagger \prime} e^{-i \omega\left(t_{1}-t_{2}\right)} y^{\prime \prime}\right. \\
& -i y^{\dagger \prime} \int_{t_{2}}^{t_{1}} d t e^{-i \omega\left(t_{1}-t\right)} K(t)-i \int_{t_{2}}^{t_{1}} d t e^{-i \omega\left(t-t_{2}\right)} K^{*}(t) y^{\prime \prime} \\
& \left.-\int_{t_{2}}^{t_{1}} d t d t^{\prime} K^{*}(t) \eta\left(t-t^{\prime}\right) e^{-i \omega\left(t-t^{\prime}\right)} K\left(t^{\prime}\right)\right] \tag{4.76}
\end{align*}
$$
The ground state is defined by $y^{\prime \prime}=y^{\dagger \prime}=0$, so
$$
\begin{equation*}
\left\langle 0, t_{1} \mid 0, t_{2}\right\rangle^{K}=\exp \left[-\int_{-\infty}^{\infty} d t d t^{\prime} K^{*}(t) \eta\left(t-t^{\prime}\right) e^{-i \omega\left(t-t^{\prime}\right)} K\left(t^{\prime}\right)\right], \tag{4.77}
\end{equation*}
$$
where we now suppose that the forces turn off at the initial and final times, $t_{2}$ and $t_{1}$, respectively.

A check of this result is obtained by computing the probability of the system remaining in the ground state:
$$
\begin{align*}
\left|\left\langle 0, t_{1} \mid 0, t_{2}\right\rangle^{K}\right|^{2}= & \exp \left\{-\int_{-\infty}^{\infty} d t d t^{\prime} K^{*}(t) e^{-i \omega\left(t-t^{\prime}\right)}\right. \\
& \left.\times\left[\eta\left(t-t^{\prime}\right)+\eta\left(t^{\prime}-t\right)\right] K\left(t^{\prime}\right)\right\} \\
= & \exp \left[-\int_{-\infty}^{\infty} d t d t^{\prime} K^{*}(t) e^{-i \omega\left(t-t^{\prime}\right)} K\left(t^{\prime}\right)\right] \\
= & \exp \left[-|K(\omega)|^{2}\right] \tag{4.78}
\end{align*}
$$
where the Fourier transform of the force is
$$
\begin{equation*}
K(\omega)=\int_{-\infty}^{\infty} d t e^{i \omega t} K(t) \tag{4.79}
\end{equation*}
$$
The probability requirement
$$
\begin{equation*}
\left|\left\langle 0, t_{1} \mid 0, t_{2}\right\rangle^{K}\right|^{2} \leq 1 \tag{4.80}
\end{equation*}
$$
is thus satisfied. We see here a resonance effect: If the oscillator is driven close to its natural frequency, so $K(\omega)$ is large, there is a large probability of finding the system in an excited state, and therefore of not remaining in the ground state. Let us calculate this transition amplitude to an excited state. By setting $y^{\prime \prime}=0$ in Eq. (4.76) we obtain
$$
\begin{align*}
\left\langle y^{\dagger \prime}, t_{1} \mid 0, t_{2}\right\rangle^{K} & =\exp \left[-i y^{\dagger \prime} \int_{-\infty}^{\infty} d t e^{-i \omega\left(t_{1}-t\right)} K(t)\right]\left\langle 0, t_{1} \mid 0, t_{2}\right\rangle^{K} \\
& =\sum_{n}\left\langle y^{\dagger \prime}, t_{1} \mid n, t_{1}\right\rangle\left\langle n, t_{1} \mid 0, t_{2}\right\rangle^{K} \tag{4.81}
\end{align*}
$$
where we have inserted a sum over a complete set of energy eigenstates, which possess the amplitude [see Eq. (4.62b)]
$$
\begin{equation*}
\left\langle y^{\dagger \prime} \mid n\right\rangle=\frac{\left(y^{\dagger \prime}\right)^{n}}{\sqrt{n!}} . \tag{4.82}
\end{equation*}
$$
If we expand the first line of Eq. (4.81) in powers of $y^{\dagger \prime}$, we find
$$
\begin{equation*}
\left\langle n, t_{1} \mid 0, t_{2}\right\rangle^{K}=\frac{(-i)^{n}}{\sqrt{n!}} e^{-i n \omega t_{1}}[K(\omega)]^{n}\left\langle 0, t_{1} \mid 0, t_{2}\right\rangle^{K} . \tag{4.83}
\end{equation*}
$$
The corresponding probability is
$$
\begin{equation*}
p(n, 0)^{K}=\left|\left\langle n, t_{1} \mid 0, t_{2}\right\rangle^{K}\right|^{2}=\frac{|K(\omega)|^{2 n}}{n!} e^{-|K(\omega)|^{2}}, \tag{4.84}
\end{equation*}
$$
which is a Poisson distribution ${ }^{6}$ with mean $\bar{n}=|K(\omega)|^{2}$.
Finally, let us define the Green's function for this problem by
$$
\begin{equation*}
G\left(t-t^{\prime}\right)=-i \eta\left(t-t^{\prime}\right) e^{-i \omega\left(t-t^{\prime}\right)} \tag{4.86}
\end{equation*}
$$
It satisfies the differential equation
$$
\begin{equation*}
\left(i \frac{d}{d t}-\omega\right) G\left(t-t^{\prime}\right)=\delta\left(t-t^{\prime}\right) \tag{4.87}
\end{equation*}
$$
as it must because [see Eq. (4.65)]
$$
\begin{equation*}
\left(i \frac{d}{d t}-\omega\right) y(t)=K(t) \tag{4.88}
\end{equation*}
$$
where $y(t)$ is given by [see Eq. (4.69)][^4]

$$
\begin{equation*}
y(t)=e^{-i \omega\left(t-t_{2}\right)} y_{2}+\int_{-\infty}^{\infty} d t^{\prime} G\left(t-t^{\prime}\right) K\left(t^{\prime}\right) \tag{4.89}
\end{equation*}
$$
Similarly, from Eq. (4.72)
$$
\begin{equation*}
y^{\dagger}(t)=e^{-i \omega\left(t_{1}-t\right)} y_{1}^{\dagger}+\int_{-\infty}^{\infty} d t^{\prime} G\left(t^{\prime}-t\right) K^{*}\left(t^{\prime}\right) \tag{4.90}
\end{equation*}
$$
We can now write the ground-state persistence amplitude (4.77) as
$$
\begin{equation*}
\left\langle 0, t_{1} \mid 0, t_{2}\right\rangle^{K}=\exp \left[-i \int_{-\infty}^{\infty} d t d t^{\prime} K^{*}(t) G\left(t-t^{\prime}\right) K\left(t^{\prime}\right)\right], \tag{4.91}
\end{equation*}
$$
and the general amplitude (4.76) as
$$
\begin{align*}
\left\langle y^{\dagger \prime}, t_{1} \mid y^{\prime \prime}, t_{2}\right\rangle^{K}= & \exp \left\{-i \int_{-\infty}^{\infty} d t d t^{\prime}\left[K^{*}(t)+i y^{\dagger \prime} \delta\left(t-t_{1}\right)\right]\right. \\
& \left.\times G\left(t-t^{\prime}\right)\left[K\left(t^{\prime}\right)+i y^{\prime \prime} \delta\left(t^{\prime}-t_{2}\right)\right]\right\} \tag{4.92}
\end{align*}
$$
which demonstrates that knowledge of $\left\langle 0, t_{1} \mid 0, t_{2}\right\rangle^{K}$ for all $K$ determines everything:
$$
\begin{equation*}
\left\langle y^{\dagger \prime}, t_{1} \mid y^{\prime \prime}, t_{2}\right\rangle^{K}=\left\langle 0, t_{1} \mid 0, t_{2}\right\rangle^{K(t)+i y^{\prime \prime} \delta\left(t-t_{2}\right)+i y^{\dagger \prime} \delta\left(t-t_{1}\right)} \tag{4.93}
\end{equation*}
$$
### 4.3 Feynman Path Integral Formulation

Although much more familiar, the path integral formulation of quantum mechanics (Feynman 1942, 1949, 1965) is rather vaguely defined. We will here provide a formal "derivation" based on the Schwinger principle, in the harmonic oscillator context. Consider a forced oscillator, defined by the Lagrangian (note in this section, $H$ does not include the source terms)
$$
\begin{equation*}
L=i y^{\dagger} \cdot \dot{y}-H\left(y, y^{\dagger}\right)-K y^{\dagger}-K^{*} y \tag{4.94}
\end{equation*}
$$
As in the preceding section, the action principle says
$$
\begin{equation*}
\delta_{K}\left\langle 0, t_{1} \mid 0, t_{2}\right\rangle^{K}=-i\left\langle 0, t_{1}\right| \int_{t_{2}}^{t_{1}} d t\left[\delta K y^{\dagger}+\delta K^{*} y\right]\left|0, t_{2}\right\rangle^{K}, \tag{4.95}
\end{equation*}
$$
or for $t_{2}<t<t_{1}$,
$$
\begin{align*}
i \frac{\delta}{\delta K(t)}\left\langle 0, t_{1} \mid 0, t_{2}\right\rangle^{K} & =\left\langle 0, t_{1}\right| y^{\dagger}(t)\left|0, t_{2}\right\rangle^{K},  \tag{4.96a}\\
i \frac{\delta}{\delta K^{*}(t)}\left\langle 0, t_{1} \mid 0, t_{2}\right\rangle^{K} & =\left\langle 0, t_{1}\right| y(t)\left|0, t_{2}\right\rangle^{K}, \tag{4.96b}
\end{align*}
$$
where we have introduced the concept of the functional derivative. The equation of motion
$$
\begin{equation*}
i \dot{y}-\frac{\partial H}{\partial y^{\dagger}}-K=0, \quad-i \dot{y}^{\dagger}-\frac{\partial H}{\partial y}-K^{*}=0, \tag{4.97}
\end{equation*}
$$
is thus equivalent to the functional differential equation,
$$
\begin{equation*}
0=\left\{i\left[K(t), W\left[i \frac{\delta}{\delta K^{*}}, i \frac{\delta}{\delta K}\right]\right]-K(t)\right\}\left\langle 0, t_{1} \mid 0, t_{2}\right\rangle^{K}, \tag{4.98}
\end{equation*}
$$
where (the square brackets indicate functional dependence)
$$
\begin{equation*}
W\left[y, y^{\dagger}\right]=\int_{t_{2}}^{t_{1}} d t\left[i y^{\dagger}(t) \cdot \dot{y}(t)-H\left(y(t), y^{\dagger}(t)\right)\right] \tag{4.99}
\end{equation*}
$$
The reason Eq. (4.98) holds is that by definition
$$
\begin{equation*}
\frac{\delta}{\delta K(t)} K\left(t^{\prime}\right)=\delta\left(t-t^{\prime}\right) \tag{4.100}
\end{equation*}
$$
so
$$
\begin{gather*}
i\left[K(t), \int_{t_{2}}^{t_{1}} d t^{\prime}\left(i \frac{i \delta}{\delta K\left(t^{\prime}\right)} \cdot \frac{d}{d t^{\prime}} \frac{i \delta}{\delta K^{*}\left(t^{\prime}\right)}-H\left(\frac{i \delta}{\delta K^{*}\left(t^{\prime}\right)}, \frac{i \delta}{\delta K\left(t^{\prime}\right)}\right)\right)\right] \\
\quad=i \frac{d}{d t} \frac{i \delta}{\delta K^{*}(t)}-\frac{\partial}{\partial(i \delta / \delta K(t))} H\left(\frac{i \delta}{\delta K^{*}(t)}, \frac{i \delta}{\delta K(t)}\right) \tag{4.101}
\end{gather*}
$$
which corresponds to the first two terms in the equation of motion (4.97), under the correspondence
$$
\begin{equation*}
y \leftrightarrow i \frac{\delta}{\delta K^{*}}, \quad y^{\dagger} \leftrightarrow i \frac{\delta}{\delta K} . \tag{4.102}
\end{equation*}
$$
Since $[[K, W], W]=0$, we can write the functional equation (4.98) as
$$
\begin{equation*}
0=e^{i W\left[i \delta / \delta K^{*}, i \delta / \delta K\right]} K e^{-i W\left[i \delta / \delta K^{*}, i \delta / \delta K\right]}\left\langle 0, t_{1} \mid 0, t_{2}\right\rangle^{K} . \tag{4.103}
\end{equation*}
$$
The above equation has a solution (up to a constant), because both equations (4.97) must hold,
$$
\begin{equation*}
\left\langle 0, t_{1} \mid 0, t_{2}\right\rangle^{K}=e^{i W\left[i \delta / \delta K^{*}, i \delta / \delta K\right]} \delta[K] \delta\left[K^{*}\right], \tag{4.104}
\end{equation*}
$$
where $\delta[K], \delta\left[K^{*}\right]$ are functional delta functions. The latter have functional Fourier decompositions (up to a multiplicative constant),
$$
\begin{align*}
\delta[K] & =\int\left[d y^{\dagger}\right] e^{-i \int d t K(t) y^{\dagger}(t)}  \tag{4.105a}\\
\delta\left[K^{*}\right] & =\int[d y] e^{-i \int d t K^{*}(t) y(t)} \tag{4.105b}
\end{align*}
$$
where [dy] represents an element of integration over all (numerical-valued) functions $y(t)$, and so we finally have
$$
\begin{align*}
& \left\langle 0, t_{1} \mid 0, t_{2}\right\rangle^{K, K^{*}} \\
& \quad=\int[d y]\left[d y^{\dagger}\right] \exp \left(-i \int_{t_{2}}^{t_{1}} d t\left[K(t) y^{\dagger}(t)+K^{*}(t) y(t)\right]+i W\left[y, y^{\dagger}\right]\right) \\
& \quad=\int[d y]\left[d y^{\dagger}\right] \exp \left(i \int_{t_{2}}^{t_{1}} d t\left[i y^{\dagger} \dot{y}-H\left(y, y^{\dagger}\right)-K y^{\dagger}-K^{*} y\right]\right) \tag{4.106}
\end{align*}
$$
where $y, y^{\dagger}$ are now numerical, and the functional integration is over all possible functions, over all possible "paths." Of course, the classical paths, the ones for which $W-\int d t\left(K y^{\dagger}+K^{*} y\right)$ is an extremum, receive the greatest weight, at least in the classical limit, where $\hbar \rightarrow 0$.

### 4.3.1 Example

Consider the harmonic oscillator Hamiltonian, $H=\omega y^{\dagger} y$. Suppose we wish to calculate, once again, the ground state persistence amplitude, $\left\langle 0, t_{1} \mid 0, t_{2}\right\rangle^{K}$. It is perhaps easiest to perform a Fourier transform,
$$
\begin{equation*}
y(v)=\int_{-\infty}^{\infty} d t e^{i v t} y(t), \quad y^{*}(-v)=\int_{-\infty}^{\infty} d t e^{-i v t} y^{\dagger}(t) \tag{4.107}
\end{equation*}
$$
Then
$$
\begin{align*}
\int_{-\infty}^{\infty} d t y^{\dagger}(t) y(t) & =\int_{-\infty}^{\infty} \frac{d v}{2 \pi} y(v) y^{*}(-v)  \tag{4.108a}\\
\int_{-\infty}^{\infty} d t i y^{\dagger}(t) \dot{y}(t) & =\int_{-\infty}^{\infty} \frac{d v}{2 \pi} v y(v) y^{*}(-v) \tag{4.108b}
\end{align*}
$$
Thus Eq. (4.106) becomes
$$
\begin{align*}
& \left\langle 0, t_{1} \mid 0, t_{2}\right\rangle^{K, K^{*}} \\
= & \int[d y]\left[d y^{*}\right] \exp \left\{i \int \frac { d v } { 2 \pi } \left[y(v)(v-\omega) y^{*}(-v)\right.\right. \\
& \left.\left.-y^{*}(-v) K(\nu)-y(\nu) K^{*}(-v)\right]\right\} \\
= & \int[d y]\left[d y^{*}\right] \exp \left\{i \int \frac{d v}{2 \pi}\left[y(v)-\frac{K(v)}{v-\omega}\right](v-\omega)\left[y^{*}(-v)-\frac{K^{*}(-v)}{v-\omega}\right]\right. \\
& \left.-i \int \frac{d v}{2 \pi} K(v) \frac{1}{v-\omega} K^{*}(-v)\right\} \\
= & \int[d y]\left[d y^{*}\right] \exp \left\{i \int \frac{d v}{2 \pi} y(v)(v-\omega) y^{*}(-v)\right\} \\
& \times \exp \left\{-i \int \frac{d v}{2 \pi} K(v) \frac{1}{v-\omega} K^{*}(-v)\right\} \\
= & \exp \left\{-i \int \frac{d v}{2 \pi} K(v) \frac{1}{v-\omega} K^{*}(-v)\right\}, \tag{4.109}
\end{align*}
$$
since the functional integral in the third equality, obtained by shifting the integration variable,
$$
\begin{gather*}
y(v)-\frac{K(v)}{v-\omega} \rightarrow y(v),  \tag{4.110a}\\
y^{*}(-v)-\frac{K^{*}(-v)}{v-\omega} \rightarrow y^{*}(-v), \tag{4.110b}
\end{gather*}
$$
is $\left\langle 0, t_{1} \mid 0, t_{2}\right\rangle^{K=K^{*}=0}=1$. How do we interpret the singularity at $v=\omega$ in the remaining integral? We should have inserted a convergence factor in the original functional integral:
$$
\begin{equation*}
\exp \left(i \int \frac{d v}{2 \pi}[\ldots]\right) \rightarrow \exp \left(i \int \frac{d v}{2 \pi}\left[\cdots+i \epsilon y(v) y^{*}(-v)\right]\right) \tag{4.111}
\end{equation*}
$$
where $\epsilon$ goes to zero through positive values. Thus we have, in effect, $v-\omega \rightarrow$ $v-\omega+i \epsilon$ and so we have for the ground-state persistence amplitude
$$
\begin{equation*}
\left\langle 0, t_{1} \mid 0, t_{2}\right\rangle^{K, K^{*}}=e^{-i \int d t d t^{\prime} K^{*}(t) G\left(t-t^{\prime}\right) K\left(t^{\prime}\right)} \tag{4.112}
\end{equation*}
$$
which has the form of Eq. (4.91), with
$$
\begin{equation*}
G\left(t-t^{\prime}\right)=\int_{-\infty}^{\infty} \frac{d v}{2 \pi} \frac{e^{-i v\left(t-t^{\prime}\right)}}{v-\omega+i \epsilon} \tag{4.113}
\end{equation*}
$$
which is evaluated by closing the $v$ contour in the upper half plane if $t-t^{\prime}<0$, and in the lower half plane when $t-t^{\prime}>0$. Since the pole is in the lower half plane we get
$$
\begin{equation*}
G\left(t-t^{\prime}\right)=-i \eta\left(t-t^{\prime}\right) e^{-i \omega\left(t-t^{\prime}\right)} \tag{4.114}
\end{equation*}
$$
which is exactly what we found in Eq. (4.86).
Now, let us rewrite the path integral (4.106) in terms of coördinates and momenta:
$$
\begin{align*}
& q=\frac{1}{\sqrt{2 \omega}}\left(y+y^{\dagger}\right), \quad p=\sqrt{\frac{\omega}{2}} \frac{1}{i}\left(y-y^{\dagger}\right),  \tag{4.115a}\\
& y=\sqrt{\frac{\omega}{2}}\left(q+\frac{i p}{\omega}\right), \quad y^{\dagger}=\sqrt{\frac{\omega}{2}}\left(q-\frac{i p}{\omega}\right) . \tag{4.115b}
\end{align*}
$$
Then the numerical Lagrangian appearing in (4.106) may be rewritten as (see footnote 4 above)
$$
\begin{align*}
L= & i y^{\dagger} \dot{y}-\omega y^{\dagger} y-K y^{\dagger}-K^{*} y \\
= & i \frac{\omega}{2}\left(q-i \frac{p}{\omega}\right)\left(\dot{q}+i \frac{\dot{p}}{\omega}\right)-\frac{\omega^{2}}{2}\left(q^{2}+\frac{p^{2}}{\omega^{2}}\right) \\
& -\sqrt{\frac{\omega}{2}} K\left(q-\frac{i p}{\omega}\right)-\sqrt{\frac{\omega}{2}} K^{*}\left(q+\frac{i p}{\omega}\right) \\
= & i \frac{\omega}{4} \frac{d}{d t}\left(q^{2}+\frac{p^{2}}{\omega^{2}}\right)+p \dot{q}-\frac{1}{2} \frac{d}{d t}(p q)-\frac{1}{2}\left(p^{2}+\omega^{2} q^{2}\right) \\
& -\sqrt{\frac{2}{\omega}} \Re K q-\sqrt{\frac{2}{\omega}} \Im K p \\
= & \frac{d}{d t} w+L(q, \dot{q}, t) \tag{4.116}
\end{align*}
$$
where, if we set $\dot{q}=p$, the Lagrangian is
$$
\begin{equation*}
L(q, \dot{q}, t)=\frac{1}{2} \dot{q}^{2}-\frac{1}{2} \omega^{2} q^{2}+F q \tag{4.117}
\end{equation*}
$$
if
$$
\begin{equation*}
\Im K=0, \quad F=-\sqrt{2 \omega} \Re K . \tag{4.118}
\end{equation*}
$$
In the path integral
$$
\begin{equation*}
[d y]\left[d y^{\dagger}\right]=[d q][d p]\left|\frac{\partial\left(y, y^{\dagger}\right)}{\partial(q, p)}\right| \tag{4.119}
\end{equation*}
$$
where the Jacobian is
$$
\left|\frac{\partial\left(y, y^{\dagger}\right)}{\partial(q, p)}\right|=\left|\begin{array}{cc}
\sqrt{\frac{\omega}{2}} & \sqrt{\frac{\omega}{2}}  \tag{4.120}\\
\frac{i}{\sqrt{2 \omega}} & -\frac{i}{\sqrt{2 \omega}}
\end{array}\right|=1
$$
and so from the penultimate line of Eq. (4.116), the path integral (4.106) becomes
$$
\begin{align*}
& \left\langle 0, t_{1} \mid 0, t_{2}\right\rangle^{F}=\int[d y]\left[d y^{\dagger}\right] \exp \left[i \int_{t_{2}}^{t_{1}} d t L\left(y, y^{\dagger}\right)\right] \\
& \quad=\int[d q][d p] \exp \left[i \int_{t_{2}}^{t_{1}} d t\left(p \dot{q}-\frac{1}{2} p^{2}-\frac{1}{2} \omega^{2} q^{2}+F q\right)\right] . \tag{4.121}
\end{align*}
$$
Now we can carry out the $p$ integration, since it is Gaussian:
$$
\begin{align*}
\int[d p] e^{i \int d t\left[-\frac{1}{2} p^{2}+p \dot{q}\right]} & =\int[d p] e^{i \int d t\left[-\frac{1}{2}(p-\dot{q})^{2}+\frac{1}{2} \dot{q}^{2}\right]} \\
& =e^{i \int d t \frac{1}{2} \dot{q}^{2}} \prod_{i} \int_{-\infty}^{\infty} d p_{i} e^{-\frac{1}{2} i p_{i}^{2} \Delta t} \tag{4.122}
\end{align*}
$$
Here we have discretized time so that $p\left(t_{i}\right)=p_{i}$, so the final functional integral over $p$ is just an infinite product of constants, each one of which equals $e^{-i \pi / 4} \sqrt{2 \pi / \Delta t}$. Thus we arrive at the form originally written down by Feynman [Feynman 1965],
$$
\begin{equation*}
\left\langle 0, t_{1} \mid 0, t_{2}\right\rangle^{F}=\int[d q] \exp \left\{i \int_{t_{2}}^{t_{1}} d t L(q, \dot{q}, t)\right\}, \tag{4.123}
\end{equation*}
$$
with the Lagrangian given by Eq. (4.117), where an infinite normalization constant has been absorbed into the measure.

### 4.4 Toward Source Theory

Let us return to the action principle. Recall from Eq. (4.112)
$$
\begin{equation*}
\left\langle 0 t_{1} \mid 0 t_{2}\right\rangle^{K}=e^{-i \int d t d t^{\prime} K^{*}(t) G\left(t-t^{\prime}\right) K\left(t^{\prime}\right)} . \tag{4.124}
\end{equation*}
$$
The action principle says
$$
\begin{equation*}
\delta\left\langle t_{1} \mid t_{2}\right\rangle=i\left\langle t_{1}\right| \delta\left[W=\int d t L\right]\left|t_{2}\right\rangle . \tag{4.125}
\end{equation*}
$$
In a general sense, the exponent in Eq. (4.124) is an integrated form of the action. In solving the equation of motion, we found in Eq. (4.89)
$$
\begin{equation*}
y(t)=e^{-i \omega\left(t-t_{2}\right)} y\left(t_{2}\right)+\int d t^{\prime} G\left(t-t^{\prime}\right) K\left(t^{\prime}\right) \tag{4.126}
\end{equation*}
$$
where the first term is effectively zero here. The net effect is to replace an operator by a number:
$$
\begin{equation*}
y^{\prime}(t)=\int d t^{\prime} G\left(t-t^{\prime}\right) K\left(t^{\prime}\right) \tag{4.127}
\end{equation*}
$$
Then Eq. (4.124) can be written as
$$
\begin{equation*}
\left\langle 0 t_{1} \mid 0 t_{2}\right\rangle^{K}=e^{-i \int d t K^{*}(t) y^{\prime}(t)} \tag{4.128}
\end{equation*}
$$
Recall that the action was was the integral of the Lagrangian (4.94), or
$$
\begin{equation*}
W=\int d t\left[y^{\dagger} i \frac{\partial}{\partial t} y-\omega y^{\dagger} y-y^{\dagger} K(t)-y K^{*}(t)\right] \tag{4.129}
\end{equation*}
$$
so we see one term in Eq. (4.128) here, and the equation of motion (4.65) cancels out the rest! So let's add something which gives the equation for $y^{\prime}$ :
$$
\begin{equation*}
\left\langle 0 t_{1} \mid 0 t_{2}\right\rangle^{K}=e^{i \int d t\left[y^{\dagger} i \frac{d}{d t} y^{\prime}-\omega y^{\dagger} y^{\prime}-y^{\dagger} K-y^{\prime} K^{*}\right]}=e^{i W} \tag{4.130}
\end{equation*}
$$
Now insist that $W$ is stationary with respect to variations of $y^{\prime}, y^{\dagger \prime}$, and we recover the equation of motion,
$$
\begin{equation*}
\left(i \frac{d}{d t}-\omega\right) y^{\prime}(t)=K(t) \tag{4.131}
\end{equation*}
$$
This is the starting point for the development of source theory, which will be treated in Chap. 7.

## Chapter 5 <br> Time-Cycle or Schwinger-Keldysh Formulation

A further utility of the action principle is the time-cycle or Schwinger-Keldysh formalism, which allows one to calculate matrix elements and consider nonequilibrium systems. Schwinger's original work on this was his famous paper (Schwinger 1961); Keldysh's paper appeared three years later (Keldysh 1964), and, rather mysteriously, cites the Martin-Schwinger equilibrium paper (Martin 1959), but not the nonequilibrium one (Schwinger 1961). The following was extracted from notes from Schwinger's lectures given in 1968 at Harvard, as taken by the author.

Consider the expectation value of some physical property $F(t)$ at a particular time $t_{1}$ in a state $\left|b, t_{2}\right\rangle$ :
$$
\begin{equation*}
\left\langle F\left(t_{1}\right)\right\rangle_{b^{\prime} t_{2}}=\sum_{a^{\prime} a^{\prime \prime}}\left\langle b^{\prime} t_{2} \mid a^{\prime} t_{1}\right\rangle\left\langle a^{\prime}\right| F\left|a^{\prime \prime}\right\rangle\left\langle a^{\prime \prime} t_{1} \mid b^{\prime} t_{2}\right\rangle, \tag{5.1}
\end{equation*}
$$
which expresses the expectation value in terms of the matrix elements of the operator $F$ in a complete set of states defined at time $t_{1},\left\{\left|a^{\prime} t_{1}\right\rangle\right\}$. Suppose the operator $F$ has no explicit time dependence. Then we can use the action principle to write
$$
\begin{equation*}
\delta\left\langle a^{\prime} t_{1} \mid b^{\prime} t_{2}\right\rangle=i\left\langle a^{\prime} t_{1}\right| \delta\left[\int_{t_{2}}^{t_{1}} d t L\right]\left|b^{\prime} t_{2}\right\rangle \tag{5.2a}
\end{equation*}
$$
and so
$$
\begin{equation*}
\delta\left\langle b^{\prime} t_{2} \mid a^{\prime} t_{1}\right\rangle=-i\left\langle b^{\prime} t_{2}\right| \delta\left[\int_{t_{2}}^{t_{1}} d t L\right]\left|a^{\prime} t_{1}\right\rangle \tag{5.2b}
\end{equation*}
$$
which can be obtained from the first equation by merely exchanging labels,
$$
\begin{equation*}
\int_{t_{2}}^{t_{1}}=-\int_{t_{1}}^{t_{2}} \tag{5.3}
\end{equation*}
$$
Fig. 5.1 A "time-cycle," in which a system advances forward in time from time $t_{2}$ to time $t_{1}$ under the influence of a Lagrangian $L_{+}$, and then backward in time from time $t_{1}$ back to time $t_{2}$ under the influence of Lagrangian $L_{-}$
![](https://cdn.mathpix.com/cropped/2025_02_21_13f260749f40b979ea80g-059.jpg?height=346&width=383&top_left_y=202&top_left_x=965)

If we consider
$$
\begin{equation*}
\left\langle b^{\prime} t_{2} \mid b^{\prime} t_{2}\right\rangle=\sum_{a^{\prime}}\left\langle b^{\prime} t_{2} \mid a^{\prime} t_{1}\right\rangle\left\langle a^{\prime} t_{1} \mid b^{\prime} t_{2}\right\rangle, \tag{5.4}
\end{equation*}
$$
the above variational equations indeed asserts that
$$
\begin{equation*}
\delta\left\langle b^{\prime} t_{2} \mid b^{\prime} t_{2}\right\rangle=0 \tag{5.5}
\end{equation*}
$$
We can interpret the above as a cycle in time, going from time $t_{2}$ to $t_{1}$ and then back again, as shown in Fig. 5.1. But, now imagine that the dynamics is different on the forward and return trips, described by different Lagrangians $L_{+}$and $L_{-}$. Then
$$
\begin{equation*}
\delta\left\langle b^{\prime} t_{2} \mid b^{\prime} t_{2}\right\rangle=i\left\langle b^{\prime} t_{2}\right| \delta\left[\int_{t_{2}}^{t_{1}} d t L_{+}-\int_{t_{2}}^{t_{1}} d t L_{-}\right]\left|b^{\prime} t_{2}\right\rangle \tag{5.6}
\end{equation*}
$$
In particular, consider a perturbation of the form,
$$
\begin{equation*}
H=H_{0}+\lambda(t) F \tag{5.7}
\end{equation*}
$$
where $\lambda(t)$ is some time-varying parameter. If we have an infinitesimal change, and, for example, $\delta \lambda_{+} \neq 0, \delta \lambda_{-}=0$, then
$$
\begin{equation*}
\delta_{\lambda_{+}}\left\langle b^{\prime} t_{2} \mid b^{\prime} t_{2}\right\rangle^{\lambda_{+} \lambda_{-}}=-i\left\langle b^{\prime} t_{2}\right| \int_{t_{2}}^{t_{1}} d t \delta \lambda_{+} F\left|b^{\prime} t_{2}\right\rangle \tag{5.8}
\end{equation*}
$$
If we choose $\delta \lambda_{+}$to be an impulse,
$$
\begin{equation*}
\delta \lambda_{+}=\delta \lambda \delta\left(t-t^{\prime}\right) \tag{5.9}
\end{equation*}
$$
in this way we obtain the expectation value of $F\left(t^{\prime}\right)$.

Fig. 5.2 A time cycle in which the harmonic oscillator evolves from time $t_{2}$ to time $t_{1}$ under the influence of a force $K_{+}$, and then from $t_{1}$ back to time $t_{2}$ under a force $K_{-}$
![](https://cdn.mathpix.com/cropped/2025_02_21_13f260749f40b979ea80g-060.jpg?height=330&width=367&top_left_y=210&top_left_x=973)

Let's illustrate this with a driven harmonic oscillator, as described by Eq. (4.64), so now
$$
\begin{align*}
& H_{+}=\omega y^{\dagger} y+K_{+}^{*}(t) y+K_{+}(t) y^{\dagger},  \tag{5.10a}\\
& H_{-}=\omega y^{\dagger} y+K_{-}^{*}(t) y+K_{-}(t) y^{\dagger}, \tag{5.10b}
\end{align*}
$$
which describes the oscillator evolving forward in time from $t_{2}$ to $t_{1}$ under the influence of the force $K_{+}$, and backward in time from $t_{1}$ to $t_{2}$ under the influence of $K_{-}$, as shown in Fig. 5.2. From the variational principle we can learn all about $y$ and $y^{\dagger}$. We have already solved this problem by a more laborious method above, in Sect.4.2.

It suffices to solve this problem with initial and final ground states. If we consider only a $K^{*}$ variation,
$$
\begin{equation*}
\delta_{K^{*}}\left\langle 0 t_{2} \mid 0 t_{2}\right\rangle^{K_{+}, K_{-}}=-i\left\langle 0 t_{2}\right| \int_{t_{2}}^{t_{1}} d t\left[\delta K_{+}^{*}(t) y_{+}(t)-\delta K_{-}^{*}(t) y_{-}(t)\right]\left|0 t_{2}\right\rangle \tag{5.11}
\end{equation*}
$$
Now we must solve the equations of motion, so since effectively $y\left(t_{2}\right) \rightarrow 0$, we have from Eq. (4.69),
$$
\begin{align*}
& y_{+}(t)=-i \int_{t_{2}}^{t} d t^{\prime} e^{-i \omega\left(t-t^{\prime}\right)} K_{+}\left(t^{\prime}\right),  \tag{5.12a}\\
& y_{-}(t)=-i \int_{t_{2}}^{t_{1}} d t^{\prime} e^{-i \omega\left(t-t^{\prime}\right)} K_{+}\left(t^{\prime}\right)-i \int_{t_{1}}^{t} d t^{\prime} e^{-i \omega\left(t-t^{\prime}\right)} K_{-}\left(t^{\prime}\right) . \tag{5.12b}
\end{align*}
$$
The last term in the second equation is
$$
\begin{equation*}
i \int_{t_{2}}^{t_{1}} d t^{\prime} e^{-i \omega\left(t-t^{\prime}\right)} K_{-}\left(t^{\prime}\right) \eta\left(t^{\prime}-t\right) \tag{5.13}
\end{equation*}
$$
so naming the advanced and retarded Green's functions by extending the definition in Eq. (4.86),
$$
G_{a, r}\left(t, t^{\prime}\right)=i e^{-i \omega\left(t-t^{\prime}\right)}\left\{\begin{array}{c}
\eta\left(t^{\prime}-t\right)  \tag{5.14}\\
-\eta\left(t-t^{\prime}\right)
\end{array}\right\},
$$
which satisfy the same differential equation (4.87), we effectively have
$$
\begin{align*}
& y_{+}(t)=\int_{t_{2}}^{t_{1}} d t^{\prime} G_{r}\left(t-t^{\prime}\right) K_{+}\left(t^{\prime}\right)  \tag{5.15a}\\
& y_{-}(t)=-i \int_{t_{2}}^{t_{1}} d t^{\prime} e^{-i \omega\left(t-t^{\prime}\right)} K_{+}(t)+\int_{t_{2}}^{t_{1}} d t^{\prime} G_{a}\left(t-t^{\prime}\right) K_{-}\left(t^{\prime}\right), \tag{5.15b}
\end{align*}
$$
The solution to the variational equation (5.11) is now
$$
\begin{align*}
\left\langle 0 t_{2} \mid 0 t_{2}\right\rangle^{K_{+}, K_{-}}= & e^{-i \int d t d t^{\prime} K_{+}^{*}(t) G_{r}\left(t-t^{\prime}\right) K_{+}\left(t^{\prime}\right)} \\
& \times e^{i \int d t d t^{\prime} K_{-}^{*}(t) G_{a}\left(t-t^{\prime}\right) K_{-}\left(t^{\prime}\right)} e^{\int d t d t^{\prime} K_{-}^{*}(t) e^{-i \omega\left(t-t^{\prime}\right)} K_{+}\left(t^{\prime}\right)} . \tag{5.16}
\end{align*}
$$
This should reduce to 1 when $K_{+}=K_{-}=K$, so
$$
\begin{equation*}
-i G_{r}\left(t-t^{\prime}\right)+i G_{a}\left(t-t^{\prime}\right)+e^{-i \omega\left(t-t^{\prime}\right)}=0 \tag{5.17}
\end{equation*}
$$
which is, indeed, true.
As an example, consider $K_{-}(t)=K(t), K_{+}(t)=K(t+T)$, that is, the second source is displaced forward by a time $T$. This is sketched in Fig. 5.3. What does this mean? From a causal analysis, in terms of energy eigenstates, reading from right to left,
$$
\begin{equation*}
\left\langle 0 t_{2} \mid 0 t_{2}\right\rangle^{K_{-}, K_{+}}=\sum_{n}\left\langle 0 t_{2} \mid n t_{1}\right\rangle^{K_{-}=K(t)}\left\langle n t_{1} \mid 0 t_{2}\right\rangle^{K_{+}=K(t+T)} . \tag{5.18}
\end{equation*}
$$
The effect on the second transformation function is the same as moving the $n, t_{1}$ state to a later time,
$$
\begin{equation*}
\left\langle n t_{1} \mid 0 t_{2}\right\rangle^{K(t+T)}=\left\langle n t_{1}+T \mid 0 t_{2}\right\rangle^{K(t)}=e^{-i n \omega T}\left\langle n t_{1} \mid 0 t_{2}\right\rangle^{K(t)}, \tag{5.19}
\end{equation*}
$$
Fig. 5.3 Time cycle in which $K_{-}(t)=K(t)$, $K_{+}(t)=K(t+T)$, that is, the forces are the same on the two legs, but displaced in time
![](https://cdn.mathpix.com/cropped/2025_02_21_13f260749f40b979ea80g-061.jpg?height=356&width=407&top_left_y=1647&top_left_x=937)
so this says that
$$
\begin{equation*}
\left\langle 0 t_{2} \mid 0 t_{2}\right\rangle^{K_{-} K_{+}}=\sum_{n} e^{-i n \omega T} p(n, 0)^{K}, \tag{5.20}
\end{equation*}
$$
which gives us the probabilities directly. From the formula (5.16) we have, using Eq. (5.17),
$$
\begin{align*}
\left\langle 0 t_{2} \mid 0 t_{2}\right\rangle^{K_{-} K_{+}} & =e^{\int d t d t^{\prime} K^{*}(t) e^{-i \omega\left(t-t^{\prime}\right)}\left[K\left(t^{\prime}+T\right)-K\left(t^{\prime}\right)\right]} \\
& =e^{\left.\int d t d t^{\prime} K^{*}(t) e^{-i \omega\left(t-t^{\prime}\right)}\left[e^{-i \omega T}-1\right] K\left(t^{\prime}\right)\right]} \\
& =e^{|\gamma|^{2}\left(e^{-i \omega T}-1\right)} \tag{5.21}
\end{align*}
$$
where
$$
\begin{equation*}
\gamma=\int d t e^{i \omega t} K(t) \tag{5.22}
\end{equation*}
$$
Thus we immediately obtain Eq. (4.84), or
$$
\begin{equation*}
p(n, 0)^{K}=e^{-|\gamma|^{2}} \frac{\left(|\gamma|^{2}\right)^{n}}{n!} . \tag{5.23}
\end{equation*}
$$
The above Eq. (5.21) can be directly used to find certain average values. For example,
$$
\begin{equation*}
\left\langle e^{-i n \omega T}\right\rangle_{0}^{K}=e^{|\gamma|^{2}\left(e^{-i \omega T}-1\right)} \tag{5.24}
\end{equation*}
$$
Expand this for small $\omega T$ and we find
$$
\begin{equation*}
\langle n\rangle_{0}^{K}=|\gamma|^{2} . \tag{5.25}
\end{equation*}
$$
In a bit more systematic way we obtain the dispersion:
$$
\begin{equation*}
\left\langle e^{-i(n-\langle n\rangle) \omega T}\right\rangle=e^{\mid \gamma \gamma^{2}\left(e^{-i \omega T}-1+i \omega T\right)} . \tag{5.26}
\end{equation*}
$$
Expanding this to second order in $\omega T$ we get
$$
\begin{equation*}
\left\langle(n-\langle n\rangle)^{2}\right\rangle=\left\langle n^{2}\right\rangle-\langle n\rangle^{2} \equiv(\Delta n)^{2}=|\gamma|^{2}=\langle n\rangle, \tag{5.27}
\end{equation*}
$$
or
$$
\begin{equation*}
\frac{\Delta n}{\langle n\rangle}=\frac{1}{\sqrt{\langle n\rangle}} . \tag{5.28}
\end{equation*}
$$
For large quantum numbers, which corresponds to the classical limit, the fluctuations become relatively small.

Now consider a more general variational statement than in Eq. (5.11),
$$
\begin{equation*}
\delta\langle\mid\rangle^{K_{-} K_{+}}=-i\langle | \int d t\left[\delta K_{+}^{*} y_{+}-\delta K_{-}^{*} y_{-}+\delta K_{+} y_{+}^{\dagger}-\delta K_{-} y_{-}^{\dagger}| \rangle^{K_{ \pm}}\right. \tag{5.29}
\end{equation*}
$$
we see that since we can change the source functions at will, and make very localized changes, it makes sense to define the variational derivatives
$$
\begin{align*}
& i \frac{\delta}{\delta K_{+}^{*}(t)}\langle\mid\rangle^{K_{ \pm}}=\langle | y_{+}(t)| \rangle^{K_{ \pm}}  \tag{5.30a}\\
& -i \frac{\delta}{\delta K_{-}(t)}\langle\mid\rangle^{K_{ \pm}}=\langle | y_{-}^{\dagger}(t)| \rangle^{K_{ \pm}} \tag{5.30b}
\end{align*}
$$
All expectation values of operator products at any time can be obtained in this wayin particular, correlation functions. Repeating this operation we get
$$
\begin{align*}
(-i) \frac{\delta}{\delta K_{-}(t)} i \frac{\delta}{\delta K_{+}^{*}\left(t^{\prime}\right)}\left\langle t_{2} \mid t_{2}\right\rangle^{K_{ \pm}} & =-i \frac{\delta}{\delta K_{-}(t)}\left\langle t_{2}\right| y_{+}\left(t^{\prime}\right)\left|t_{2}\right\rangle^{K_{ \pm}} \\
& =\left\langle t_{2}\right| y_{-}^{\dagger}(t) y_{+}\left(t^{\prime}\right)\left|t_{2}\right\rangle^{K_{ \pm}} . \tag{5.31}
\end{align*}
$$
The operators are multiplied in the order of the time development. The only place where $K_{-}$appears is in the latter part of the time development. See Fig. 5.4.

The distinction between $\pm$ disappears if we now set $K_{+}=K_{-}$:
$$
\begin{equation*}
\left.\frac{\delta}{\delta K_{-}(t)} \frac{\delta}{\delta K_{+}^{*}\left(t^{\prime}\right)}\left\langle 0 t_{2} \mid 0 t_{2}\right\rangle^{K_{ \pm}}\right|_{K_{+}=K_{-}=K}=\left\langle 0 t_{2}\right| y^{\dagger}(t) y\left(t^{\prime}\right)\left|0 t_{2}\right\rangle^{K} \tag{5.32}
\end{equation*}
$$
As an example, set $t=t^{\prime}=t_{1}$; then, from Eq. (5.16), this reads for the number operator $N(t)=y^{\dagger}(t) y(t)$,
$$
\begin{align*}
\left\langle N\left(t_{1}\right)\right\rangle_{0}^{K} & =\int d t K^{*}(t) G_{a}\left(t-t_{1}\right) \int d t^{\prime} G_{r}\left(t_{1}-t^{\prime}\right) K\left(t^{\prime}\right) \\
& =i \int d t e^{-i \omega\left(t-t_{1}\right)} K^{*}(t)(-i) \int d t^{\prime} e^{-i \omega\left(t_{1}-t^{\prime}\right)} K\left(t^{\prime}\right)=|\gamma|^{2} \tag{5.33}
\end{align*}
$$
Fig. 5.4 Variational derivatives pick out operators at definite times $t$ and $t^{\prime}$
![](https://cdn.mathpix.com/cropped/2025_02_21_13f260749f40b979ea80g-063.jpg?height=349&width=379&top_left_y=1739&top_left_x=967)
![](https://cdn.mathpix.com/cropped/2025_02_21_13f260749f40b979ea80g-064.jpg?height=344&width=440&top_left_y=194&top_left_x=539)

Fig. 5.5 Time cycle with different forces, $K_{+}$and $K_{-}$. on the forward and backward moving segments. Now the initial time of the time cycle, $t_{2}$, is different from the final time of the time cycle, $t_{2}^{\prime}$, with $\tau=t_{2}^{\prime}-t_{2}$. It is assumed that the time $t_{1}$ is later than both $t_{2}$ and $t_{2}^{\prime}$, and that the forces are localized as shown
as before, Eq. (5.25).
We would like to use more general starting and ending states than the ground state. We can obtain these by use of impulsive forces. It is convenient to deal with all states at once, as in the generating function for $p(n, 0)^{K}$ considered above. Think of a time cycle starting at time $t_{2}$, advancing forward to time $t_{1}$, during which time the force $K_{+}$acts, then moving back in time to a time $t_{2}^{\prime}$, under the influence of the force $K_{-} —$ See Fig. 5.5.
Let $t_{2}^{\prime}=t_{2}+\tau$. This displacement injects energy information. Consider
$$
\begin{equation*}
\sum_{n}\left\langle n t_{2}^{\prime} \mid n t_{2}\right\rangle^{K_{ \pm}} \equiv \operatorname{tr}\left\langle t_{2}^{\prime} \mid t_{2}\right\rangle^{K_{ \pm}}=\sum_{n} e^{-i n \omega \tau}\left\langle n t_{2} \mid n t_{2}\right\rangle^{K_{ \pm}}, \tag{5.34}
\end{equation*}
$$
which uses (no force acts between times $t_{2}^{\prime}$ and $t_{2}$ )
$$
\begin{equation*}
\left\langle n t_{2}^{\prime}\right|=\left\langle n t_{2}\right| e^{-i n \omega \tau} . \tag{5.35}
\end{equation*}
$$
Analysis of this formula will yield individual transformation functions.
Now we must solve the dynamical equations subject to boundary conditions. Let us compare $\operatorname{tr}\left\langle t_{2}^{\prime}\right| y_{+}\left(t_{2}\right)\left|t_{2}\right\rangle$ with $\operatorname{tr}\left\langle t_{2}^{\prime}\right| y_{-}\left(t_{2}^{\prime}\right)\left|t_{2}\right\rangle$. The first is
$$
\begin{equation*}
\operatorname{tr}\left\langle t_{2}^{\prime}\right| y_{+}\left(t_{2}\right)\left|t_{2}\right\rangle=\sum_{n}\left\langle n t_{2}^{\prime}\right| y_{+}\left(t_{2}\right)\left|n t_{2}\right\rangle=\sum_{n n^{\prime}}\left\langle n t_{2}^{\prime} \mid n^{\prime} t_{2}\right\rangle\left\langle n^{\prime}\right| y|n\rangle, \tag{5.36a}
\end{equation*}
$$
while the second appears as
$$
\begin{equation*}
\operatorname{tr}\left\langle t_{2}^{\prime}\right| y_{-}\left(t_{2}^{\prime}\right)\left|t_{2}\right\rangle=\sum_{n^{\prime}}\left\langle n^{\prime} t_{2}^{\prime}\right| y_{-}\left(t_{2}^{\prime}\right)\left|n^{\prime} t_{2}\right\rangle=\sum_{n n^{\prime}}\left\langle n^{\prime}\right| y|n\rangle\left\langle n t_{2}^{\prime} \mid n^{\prime} t_{2}\right\rangle . \tag{5.36b}
\end{equation*}
$$
Here, by introducing a complete set of states at the time of the operator, we have expressed the formula in terms of the matrix elements of stationary operators.

Remarkably, we see that the two expressions are equal; in effect, there is a periodicity present here:
$$
\begin{equation*}
y_{+}\left(t_{2}\right)=y_{-}\left(t_{2}^{\prime}\right) \tag{5.37}
\end{equation*}
$$
as far as traces are concerned. Now, the equations of motion (4.65) for the operators read
$$
\begin{equation*}
\left(i \frac{d}{d t}-\omega\right) y(t)=K(t) \tag{5.38}
\end{equation*}
$$
which has solution (5.12b) with the addition of the initial term, or
$$
\begin{align*}
y_{-}(t)= & e^{-i \omega\left(t-t_{2}\right)} y_{+}\left(t_{2}\right)-i \int_{t_{2}}^{t_{1}} d t^{\prime} e^{-i \omega\left(t-t^{\prime}\right)} K_{+}\left(t^{\prime}\right) \\
& +i \int_{t}^{t_{1}} d t^{\prime} e^{-i \omega\left(t-t^{\prime}\right)} K_{-}\left(t^{\prime}\right) \tag{5.39}
\end{align*}
$$
In particular,
$$
\begin{equation*}
y_{-}\left(t_{2}^{\prime}\right)=e^{-i \omega \tau} y_{+}\left(t_{2}\right)-i \int d t^{\prime} e^{-i \omega\left(t_{2}+\tau-t^{\prime}\right)}\left(K_{+}-K_{-}\right)\left(t^{\prime}\right) \tag{5.40}
\end{equation*}
$$
Note that the integrals sweep over the full force history. Let us let $t_{2}=0$ for simplicity, although we will keep the label. Because of the periodicity condition (5.37) this reads
$$
\begin{equation*}
\left(e^{i \omega \tau}-1\right) y_{+}\left(t_{2}\right)=-i \int d t e^{i \omega t}\left(K_{+}-K_{-}\right)(t)=-i\left(\gamma_{+}-\gamma_{-}\right) \tag{5.41}
\end{equation*}
$$
or
$$
\begin{equation*}
y_{+}\left(t_{2}\right)=\frac{1}{e^{i \omega \tau}-1}(-i)\left(\gamma_{+}-\gamma_{-}\right) \tag{5.42}
\end{equation*}
$$
What we are interested in is
$$
\begin{equation*}
\frac{\operatorname{tr}\left\langle t_{2}^{\prime} \mid t_{2}\right\rangle^{K_{ \pm}}}{\operatorname{tr}\left\langle t_{2}^{\prime} \mid t_{2}\right\rangle} \tag{5.43}
\end{equation*}
$$
The denominator, which refers to the free harmonic oscillator, is immediately evaluated as
$$
\begin{equation*}
\operatorname{tr}\left\langle t_{2}^{\prime} \mid t_{2}\right\rangle=\sum_{n=0}^{\infty} e^{-i n \omega \tau}=\frac{1}{1-e^{-i \omega \tau}} \tag{5.44}
\end{equation*}
$$
(If $\tau$ be imaginary, we have thermodynamic utility.) We have then the variational equation
$$
\begin{equation*}
\delta_{K_{ \pm}^{*}}\left[\frac{\operatorname{tr}\left\langle t_{2}^{\prime} \mid t_{2}\right\rangle^{K_{ \pm}}}{\operatorname{tr}\left\langle t_{2}^{\prime} \mid t_{2}\right\rangle}\right]=\frac{-i \operatorname{tr}\left\langle t_{2}^{\prime}\right| \int d t\left(\delta K_{+}^{*} y_{+}-\delta K_{-}^{*} y_{-}\right)\left|t_{2}\right\rangle^{K_{ \pm}}}{\operatorname{tr}\left\langle t_{2}^{\prime} \mid t_{2}\right\rangle} . \tag{5.45}
\end{equation*}
$$
Exactly as before, we get an equation for the logarithm-looking at the previous calculation leading to Eq. (5.16), we see an additional term, referring to the $y_{+}\left(t_{2}\right)$ boundary term in Eq. (5.40). The periodic boundary condition then gives
$$
\begin{equation*}
-\frac{1}{e^{i \omega \tau}-1} \delta\left(\gamma_{+}^{*}-\gamma_{-}^{*}\right)\left(\gamma_{+}-\gamma_{-}\right) . \tag{5.46}
\end{equation*}
$$
Therefore, to convert $\left\langle 0 t_{2} \mid 0 t_{2}\right\rangle^{K_{ \pm}}$in Eq. (5.16) to
$$
\begin{equation*}
\frac{\operatorname{tr}\left\langle t_{2}^{\prime} \mid t_{2}\right\rangle^{K_{ \pm}}}{\operatorname{tr}\left\langle t_{2}^{\prime} \mid t_{2}\right\rangle}=\frac{\sum e^{-i n \omega \tau}\left\langle n t_{2} \mid n t_{2}\right\rangle^{K_{ \pm}}}{\sum e^{-i n \omega \tau}} \tag{5.47}
\end{equation*}
$$
we must multiply by
$$
\begin{equation*}
\exp \left[-\frac{1}{e^{i \omega \tau}-1}\left|\gamma_{+}-\gamma_{-}\right|^{2}\right] \tag{5.48}
\end{equation*}
$$
This holds identically in $\tau$; in particular, in the limit where $\tau \rightarrow-i \infty$, which corresponds to absolute zero temperature, we recover $\left\langle 0 t_{2} \mid 0 t_{2}\right\rangle^{K_{ \pm}}$.

We find, generalizing Eq. (5.16)
$$
\begin{align*}
& \frac{\sum_{n} e^{-i n \omega \tau}\left\langle n t_{2} \mid n t_{2}\right\rangle_{ \pm}}{\sum_{n} e^{-i n \omega \tau}}=e^{-i \int d t d t^{\prime} K_{+}^{*}(t) G_{r}\left(t-t^{\prime}\right) K_{+}\left(t^{\prime}\right)} \\
& \times e^{i \int d t d t^{\prime} K_{-}^{*}(t) G_{a}\left(t-t^{\prime}\right) K_{-}\left(t^{\prime}\right)} e^{\int d t d t^{\prime} K_{-}^{*}(t) e^{-i \omega\left(t-t^{\prime}\right)} K_{+}\left(t^{\prime}\right)} \\
& \times e^{-\left(e^{i \omega \tau}-1\right)^{-1} \int d t d t^{\prime}\left(K_{+}^{*}-K_{-}^{*}\right)(t) e^{-i \omega\left(t-t^{\prime}\right)\left(K_{+}-K_{-}\right)\left(t^{\prime}\right)},} \tag{5.49}
\end{align*}
$$
which is the exponential of a bilinear structure. This is a generating function for the amplitudes $\left\langle n t_{2} \mid n t_{2}\right\rangle^{K_{ \pm}}$. But it is useful as it stands.

Put $\tau=-i \beta$; then this describes a thermodynamic average over a thermal mixture at temperature $T$, where $\beta=1 / k T$ in terms of Boltzmann's constant,
$$
\begin{equation*}
\frac{\sum_{n} e^{-\beta n \omega}\langle\mid\rangle_{n}}{\sum_{n} e^{-\beta n \omega}} \tag{5.50}
\end{equation*}
$$
In terms of this replacement,
$$
\begin{equation*}
\frac{1}{e^{i \omega \tau}-1} \rightarrow \frac{1}{e^{\beta \omega}-1}=\langle n\rangle_{\beta}, \tag{5.51}
\end{equation*}
$$
because
$$
\begin{equation*}
\frac{\sum_{n} n e^{-i n \omega \tau}}{\sum_{n} e^{-i n \omega \tau}}=\frac{\partial}{\partial(-i \omega \tau)} \ln \left(\sum_{n} e^{-i n \omega \tau}\right)=\frac{\partial}{\partial(-i \omega \tau)} \ln \frac{1}{1-e^{-i \omega \tau}}=\frac{1}{e^{i \omega \tau}-1} . \tag{5.52}
\end{equation*}
$$
Now consider a time cycle with displacement $T$ : the system evolves from time $t_{2}$ to time $t_{1}$ under the influence of the force $K_{+}(t)$, and backwards in time from $t_{1}$ to $t_{2}^{\prime}$ under the force $K_{-}(t)$ :
$$
\begin{equation*}
K_{-}(t)=K(t), \quad K_{+}(t)=K(t+T) . \tag{5.53}
\end{equation*}
$$
This is again as illustrated in Fig. 5.5, with these replacements. What is the physical meaning of this? Insert in Eq. (5.49) a complete set of states at time $t_{1}$ :
$$
\begin{equation*}
\left\langle n t_{2} \mid n t_{2}\right\rangle^{K_{ \pm}}=\sum_{n^{\prime}}\left\langle n t_{2} \mid n^{\prime} t_{1}\right\rangle^{K_{-}}\left\langle n^{\prime} t_{1} \mid n t_{2}\right\rangle^{K_{+}} . \tag{5.54}
\end{equation*}
$$
We did this before for the ground state. The effect is the same as moving the starting and ending times. Appearing here is
$$
\begin{equation*}
\left\langle n^{\prime} t_{1} \mid n t_{2}\right\rangle^{K(t+T)}=\left\langle n^{\prime} t_{1}+T \mid n t_{2}+T\right\rangle^{K(t)}=e^{-i n^{\prime} \omega T}\left\langle n^{\prime} t_{1} \mid n t_{2}\right\rangle^{K(t)} e^{i n \omega T} . \tag{5.55}
\end{equation*}
$$
Therefore,
$$
\begin{equation*}
\left\langle n t_{2} \mid n t_{2}\right\rangle^{K(t), K(t+T)}=\sum_{n^{\prime}} e^{-i\left(n^{\prime}-n\right) \omega T} p\left(n^{\prime}, n\right)^{K}=\left\langle e^{-i(N-n) \omega T}\right\rangle_{n}^{K} . \tag{5.56}
\end{equation*}
$$
Therefore, as a generalization for finite $\tau$ of Eq. (5.26), we have from Eq. (5.49)
$$
\begin{align*}
& \left(\sum_{n^{\prime}} e^{-i n^{\prime} \omega \tau}\right)^{-1} \sum_{n} e^{-i n \omega \tau}\left\langle e^{-i(N-n) \omega T}\right\rangle_{n}^{K} \\
= & \exp \left[\left(e^{-i \omega T}-1\right)|\gamma|^{2}-\frac{1}{e^{i \omega \tau}-1}\left(e^{i \omega T}-1\right)\left(e^{-i \omega T}-1\right)|\gamma|^{2}\right], \tag{5.57}
\end{align*}
$$
where $T$ gives the final state, and $\tau$ the initial state. This used the observation
$$
\begin{equation*}
\int d t e^{i \omega t} K(t+T)=e^{-i \omega T} \int d t e^{i \omega t} K(t) \tag{5.58}
\end{equation*}
$$
Expand both sides of Eq. (5.57) in powers of $T$, and we learn
$$
\begin{equation*}
-i \omega T \sum_{n}\langle N-n\rangle_{n}^{K} \frac{e^{-i n \omega \tau}}{\sum_{n^{\prime}} e^{-i n^{\prime} \omega \tau}}=-i \omega T|\gamma|^{2}, \tag{5.59}
\end{equation*}
$$
or
$$
\begin{equation*}
\langle N-n\rangle_{\beta}^{K}=|\gamma|^{2}, \tag{5.60}
\end{equation*}
$$
which generalizes the earlier result (5.25). Now apply Eq. (5.59) as a generating function,
$$
\begin{equation*}
\langle N-n\rangle_{n}^{K}=|\gamma|^{2}, \tag{5.61}
\end{equation*}
$$
which reflects the linear nature of the system.
We can rewrite the above generating function more conveniently, by multiplying by
$$
\begin{equation*}
e^{i\langle N-n\rangle \omega T}=e^{i \omega T|\gamma|^{2}}, \tag{5.62}
\end{equation*}
$$
that is, Eq , (5.57) can be written as
$$
\begin{align*}
& \frac{1}{\sum e^{-i n \omega \tau}} \sum e^{-i n \omega \tau}\left\langle e^{-i(N-\langle N\rangle) \omega T}\right\rangle_{n}^{K} \\
= & \exp \left[\left(e^{-i \omega T}-1+i \omega T\right)|\gamma|^{2}-\frac{1}{e^{i \omega \tau}-1}\left(e^{-i \omega T}-1\right)\left(e^{i \omega T}-1\right)|\gamma|^{2}\right] . \tag{5.63}
\end{align*}
$$
Now pick off the coefficient of $-(\omega T)^{2} / 2$ :
$$
\begin{equation*}
\frac{1}{\sum e^{-i n \omega \tau}} \sum e^{-i n \omega \tau}\left\langle(N-\langle N\rangle)^{2}\right\rangle_{n}^{K}=|\gamma|^{2}+2 \frac{1}{e^{i \omega \tau}-1}|\gamma|^{2}, \tag{5.64}
\end{equation*}
$$
or
$$
\begin{equation*}
\left\langle(N-\langle N\rangle)^{2}\right\rangle_{\beta}^{K}=|\gamma|^{2}\left[1+2\langle n\rangle_{\beta}\right] . \tag{5.65}
\end{equation*}
$$
If, instead, we multiply Eq. (5.64) through by $\sum_{n} e^{-i n \omega \tau}$, we can use this as a generating function, and learn from Eq. (5.52) that
$$
\begin{equation*}
\left\langle(N-\langle N\rangle)^{2}\right\rangle_{n}^{K}=|\gamma|^{2}(1+2 n) . \tag{5.66}
\end{equation*}
$$
Note the simplicity of the derivation of this result, which does not involve complicated functions like Laguerre polynomials.

## Chapter 6 Relativistic Theory of Fields

This section is an adaptation of Chap. 5 of lectures given at Stanford by Schwinger in 1956 (Schwinger 1956).

A state of a physical system is defined in terms of the maximum number of compatible measurements which can be made upon the system. If the state were defined on a space-like surface (one in which all points are in space-like relation: $\left.(\Delta x)^{2}-(\Delta t)^{2}>0\right)$ then a measurement at any point is compatible with one made at any other point, since the disturbances introduced by the measurements cannot propagate faster than $c$, and hence cannot interfere. Thus, a state can be specified as an eigenvector of a complete set of commuting, Hermitian operators $\underline{a}$, associated with a definite space-like surface $\sigma:\left|a^{\prime}, \sigma\right\rangle$. There always exists a coordinate system in which the space-like surface $\sigma$ is all of three-dimensional space at a given time; in this particular Lorentz frame the state vector is just: $\left|a^{\prime}, t\right\rangle$. The problem of relativistic dynamics is to find the transformation function
$$
\begin{equation*}
\left\langle a_{1}^{\prime} \sigma_{1} \mid a_{2}^{\prime \prime} \sigma_{2}\right\rangle \tag{6.1}
\end{equation*}
$$
As in the non-relativistic case, we assume the existence of an action operator $W_{12}$ such that
$$
\begin{equation*}
\delta\left\langle a_{1}^{\prime} \sigma_{1} \mid a_{2}^{\prime \prime} \sigma_{2}\right\rangle=i\left\langle a_{1}^{\prime} \sigma_{1}\right| \delta\left[W_{12}\right]\left|a_{2}^{\prime \prime} \sigma_{2}\right\rangle . \tag{6.2}
\end{equation*}
$$
The contributions to the action operator are now given by
$$
\begin{equation*}
W_{12}=\sum_{\sigma} W_{\sigma+d \sigma, \sigma} \tag{6.3}
\end{equation*}
$$
![](https://cdn.mathpix.com/cropped/2025_02_21_13f260749f40b979ea80g-070.jpg?height=101&width=466&top_left_y=189&top_left_x=526)

Fig. 6.1 Spacetime volume bounded by two spacelike surfaces, $\sigma$ and $\sigma+d \sigma$. Points in the blue and green shaded regions cannot interfere

Since measurements made at points in the space-like shell $d \sigma$ cannot interfere (e.g., in the two shaded areas, shown in Fig. 6.1) their contribution to $W_{12}$ is additive,
$$
\begin{equation*}
W_{12}=\int_{\sigma_{2}}^{\sigma_{1}}(d x) \mathcal{L}(x)=\int_{\sigma_{2}}^{\sigma_{1}}(d x) \mathcal{L}\left[\chi_{a}(x)\right], \tag{6.4}
\end{equation*}
$$
where the $\chi_{a}(x)=\chi_{a}(x, y, z, t)$ are the dynamical variables of the system, necessarily Hermitian operators; the relativistic requirements automatically introduce the concept of fields. The relativistic notation used has the form
$$
\begin{align*}
x^{0} & =t=-x_{0}, \quad x^{k}=x_{k}, \text { where } k=1,2,3, \\
(d x) & =d x^{0} d x_{1} d x_{2} d x_{3}, \quad \partial_{\mu}=\frac{\partial}{\partial x^{\mu}} \tag{6.5}
\end{align*}
$$
where the metric used is
$$
g_{\mu \nu}=\left(\begin{array}{cccc}
-1 & 0 & 0 & 0  \tag{6.6}\\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{array}\right)
$$
The action principle again states that for a given dynamical system, the variations arise only from the end-point, that is,
$$
\begin{equation*}
\delta W_{12}=G_{1}\left(\sigma_{1}\right)-G_{2}\left(\sigma_{2}\right) \tag{6.7}
\end{equation*}
$$
As before, from this requirement follow the equations of motion and the generators of infinitesimal transformations which yield the commutation relations of the field operators. The Lagrangian density $\mathcal{L}$ which will yield first order field equations is
$$
\begin{equation*}
\mathcal{L}=\frac{1}{2}\left(\chi A^{\mu} \partial_{\mu} \chi-\partial_{\mu} \chi A^{\mu} \chi\right)-\mathcal{H}(\chi) \tag{6.8}
\end{equation*}
$$
where the $A^{\mu}$ are a set of four numerical matrices, and space and time derivatives appear on a symmetric basis. The symmetrization of the kinematical term relates to the possibility of adding to $\mathcal{L}$ the relativistic analogue of our previous total time derivative, a four dimensional divergence. If
$$
\begin{equation*}
\overline{\mathcal{L}}=\mathcal{L}-\partial_{\mu} f^{\mu} \tag{6.9}
\end{equation*}
$$
then
$$
\begin{equation*}
\bar{W}_{12}=W_{12}-\int_{\sigma_{2}}^{\sigma_{1}}(d x) \partial_{\mu} f^{\mu}=W_{12}-\int_{\sigma_{1}} d \sigma_{\mu} f^{\mu}+\int_{\sigma_{2}} d \sigma_{\mu} f^{\mu} \tag{6.10}
\end{equation*}
$$
and
$$
\begin{equation*}
\bar{G}\left(\sigma_{1}\right)=G\left(\sigma_{1}\right)-\int_{\sigma_{1}} d \sigma_{\mu} f^{\mu}, \quad \bar{G}\left(\sigma_{2}\right)=G\left(\sigma_{2}\right)-\int_{\sigma_{2}} d \sigma_{\mu} f^{\mu} \tag{6.11}
\end{equation*}
$$
As before, the equation of motion is unchanged. Since $\mathcal{L}$ is to be Hermitian, we require
$$
\begin{equation*}
A^{\mu \dagger}=-A^{\mu}, \quad \text { so } \quad \mathcal{H}^{\dagger}=\mathcal{H} \tag{6.12}
\end{equation*}
$$
The rank of $A^{\mu}$ is that of the number of independent fields. Note that the variation $\delta\left\langle a_{1}^{\prime} \sigma_{1} \mid a_{2}^{\prime \prime} \sigma_{2}\right\rangle$ is independent of any coordinate system, since $\mathcal{L}$ is a Lorentz scalar.

We can now infer some fundamental properties from the requirement of invariance of $\mathcal{L}$. Consider the coordinate transformation (Poincaré transformation)
$$
\begin{equation*}
\bar{x}^{\mu}=\ell^{\mu}{ }_{v} x^{\nu}-\ell^{\mu} \tag{6.13}
\end{equation*}
$$
where
$$
\begin{equation*}
g_{\mu \nu} \ell^{\mu}{ }_{\lambda} \ell^{\nu}{ }_{\kappa}=g_{\lambda \kappa}, \quad \ell_{\mu}{ }^{\lambda} \ell^{\mu}{ }_{\kappa}=\delta^{\lambda}{ }_{\kappa} . \tag{6.14}
\end{equation*}
$$
We can divide the transformations into two subsets by considering the effect of (6.13) on $g_{00}$,
$$
\begin{equation*}
-g_{00}=1=\left(\ell_{0}^{0}\right)^{2}-\sum_{k=1}^{3}\left(\ell_{0}^{k}\right)^{2} \quad\left(\ell_{0}^{0}\right)^{2}=1+\sum_{k}\left(\ell_{0}^{k}\right)^{2} \geq 1 \tag{6.15}
\end{equation*}
$$
Since $\ell^{0}{ }_{0}=\frac{\partial \bar{x}^{0}}{\partial x^{0}}$ it follows that we can never make a continuous change from a positive to a negative sense of time, i.e., generate an improper transformation continuously. We shall consider only the group of continuous proper Lorentz transformations.

Under such a coordinate change, the fields $\chi_{a}(x)$ change to new ones $\bar{\chi}_{a}(\bar{x})$ connected by a real linear transformation:
$$
\begin{equation*}
\bar{\chi}(\bar{x})=L \chi(x) . \tag{6.16}
\end{equation*}
$$
Using $\bar{\partial}_{\mu}=\ell^{\nu}{ }_{\mu} \partial_{\nu}$, and writing the scalar $\mathcal{L}$ in the new frame we find
$$
\begin{align*}
\mathcal{L} & =\frac{1}{2}\left(\bar{\chi} A^{\mu} \bar{\partial}_{\mu} \bar{\chi}-\bar{\partial}_{\mu} \bar{\chi} A^{\mu} \bar{\chi}\right)-\mathcal{H}(\bar{\chi}) \\
& =\frac{1}{2}\left[\chi\left(L^{\mathrm{T}} A^{\mu} \ell^{\nu}{ }_{\mu} L\right) \partial_{\nu} \chi-\partial_{\nu} \chi\left(\ell^{\nu}{ }_{\mu} L^{\mathrm{T}} A^{\mu} L\right) \chi\right]-\mathcal{H}(L \chi) . \tag{6.17}
\end{align*}
$$
Thus
$$
\begin{equation*}
L^{\mathrm{T}} A^{\mu} L=\ell^{\mu}{ }_{\nu} A^{\nu}, \quad \mathcal{H}(L \chi)=\mathcal{H}(\chi) \tag{6.18}
\end{equation*}
$$
If we choose for $\mathcal{H}$ the special form
$$
\begin{equation*}
\mathcal{H}=\chi B \chi=\chi L^{\mathrm{T}} B L \chi \tag{6.19}
\end{equation*}
$$
where $B$ is Hermitian and non-singular, then $L^{T}=B L^{-1} B^{-1}$. From the first of Eq. (6.18), we then obtain
$$
\begin{equation*}
L^{-1}\left(B^{-1} A^{\mu}\right) L=\ell_{v}^{\mu}\left(B^{-1} A^{v}\right) \tag{6.20}
\end{equation*}
$$
showing that the combination $B^{-1} A^{\mu}$ transforms like a vector; this is implied by the required invariance of the kinematical term of $\mathcal{L}$.

Consider now a general inhomogeneous infinitesimal Lorentz transformation, of the form
$$
\begin{equation*}
\bar{x}^{\mu}=x^{\mu}-\epsilon^{\mu}+\epsilon_{\nu}^{\mu} x^{\nu}, \tag{6.21}
\end{equation*}
$$
where the $\epsilon^{\mu}$ and $\epsilon^{\mu}{ }_{\nu}$ are infinitesimals, and the rotational nature of the $\epsilon^{\mu \nu}$ is expressed by the relations $\epsilon_{\mu \nu}=-\epsilon_{\nu \mu}$. Then $L$ can be written as $L=1+\frac{i}{2} \epsilon_{\mu \nu} S^{\mu \nu}$, where only the rotational $\epsilon_{\mu \nu}$ terms appear, since the translations $\epsilon^{\mu}$ do not effect the gradient operators $\partial_{\nu}$, and no corresponding changes in the $\chi_{\alpha}$ are required to keep $\mathcal{L}$ invariant. The $S^{\mu \nu}$ are (imaginary) operators, acting on the field variable, which will express the spin character of the fields.

The variation $\delta W_{\alpha}$ allows us to change the field components at each space-time point (call these changes $\delta_{\alpha} \chi_{\alpha}$ ), and to change the region of integration by displacing the boundary surfaces $\sigma_{1}$ and $\sigma_{2}$. In the previous non-relativistic treatment, instead of varying the end-point times $t_{1}$ and $t_{2}$, we used $t(\tau)$. Proceeding similarly here, we can express the variation of a space-like surface by varying the space-time coordinates under an infinitesimal Lorentz transformation ( $\delta x_{\mu}=\epsilon_{\mu}-\epsilon_{\mu \nu} x^{\nu}$ ) so chosen that on $\sigma_{1}$ and $\sigma_{2}$ the required displacement is obtained. The change in the action is
$$
\delta W_{12}=\delta_{0} \int_{\sigma_{2}}^{\sigma_{1}}(d x)\left[\frac{1}{2}\left(\chi A^{\mu} \partial_{\mu} \chi-\partial_{\mu} \chi A^{\mu} \chi\right)-\mathcal{H}\right]
$$

$$
\begin{align*}
& +\int_{\sigma_{1}} d \sigma_{\mu} \delta x^{\mu} \mathcal{L}-\int_{\sigma_{2}} d \sigma_{\mu} \delta_{0} x^{\mu} \mathcal{L} \\
= & \int_{\sigma_{2}}^{\sigma_{1}}(d x)\left[\delta_{0} \chi A^{\mu} \partial_{\mu} \chi-\partial_{\mu} \chi A^{\mu} \delta_{0} \chi-\delta_{0} \mathcal{H}\right] \\
& +\frac{1}{2} \int_{\sigma_{2}}^{\sigma_{1}}(d x) \partial_{\mu}\left(\chi A^{\mu} \delta_{0} \chi-\delta_{0} \chi A^{\mu} \chi\right) \\
& +\int_{\sigma_{1}}^{\sigma_{1}} d \sigma_{\mu} \delta x^{\mu} \mathcal{L}-\int_{\sigma_{2}} d \sigma_{\mu} \delta x^{\mu} \mathcal{L} \\
= & \int_{\sigma_{2}}(d x) \delta_{0} \mathcal{L}+\int_{\sigma_{1}} d \sigma_{\mu}\left\{\delta x^{\mu} \mathcal{L}+\frac{1}{2}\left(\chi A^{\mu} \delta_{0} \chi-\delta_{0} \chi A^{\mu} \chi\right)\right\} \\
& -\int_{\sigma_{2}} d \sigma_{\mu}\left\{\delta x^{\mu} \mathcal{L}+\frac{1}{2}\left(\chi A^{\mu} \delta_{0} \chi-\delta_{0} \chi A^{\mu} \chi\right)\right\} . \tag{6.22}
\end{align*}
$$
Applying the action principle, the interior variation $\delta_{0} \mathcal{L}$ must vanish, giving the field equations of motion. What remains is the difference of two generators, $G\left(\sigma_{1}\right)-$ $G\left(\sigma_{2}\right)$, where
$$
\begin{equation*}
G(\sigma)=\int_{\sigma} d \sigma_{\mu}\left\{\delta x^{\mu} \mathcal{L}+\frac{1}{2}\left(\chi A^{\mu} \delta_{0} \chi-\delta_{0} \chi A^{\mu} \chi\right)\right\} \tag{6.23}
\end{equation*}
$$
To re-write (6.23) we recognize that the total change in the fields is due to both the $\delta_{0}$ variation of the fields at a given space-time point on $\sigma$, and also to the variation induced by the infinitesimal Lorentz transformation of coordinates as $\sigma$ is displaced to $\sigma+d \sigma$; the latter is obtained from
$$
\begin{equation*}
\bar{\chi}(\bar{x})=L \chi(x)=\chi(x)+\frac{i}{2} \epsilon_{\mu \nu} S^{\mu v} \chi(x) \tag{6.24}
\end{equation*}
$$
But
$$
\begin{equation*}
\bar{\chi}(\bar{x})=\bar{\chi}(x)-\delta x^{\mu} \partial_{\mu} \chi(x), \tag{6.25}
\end{equation*}
$$
and therefore
$$
\begin{equation*}
\bar{\chi}(x)-\chi(x)=\delta x^{\mu} \partial_{\mu} \chi(x)+\frac{i}{2} \epsilon_{\mu \nu} S^{\mu v} \chi(x) \tag{6.26}
\end{equation*}
$$
The right hand side of (6.26) is then the variation induced in the $\chi_{\alpha}$ by the coordinate transformation; the total variation of the fields is then
$$
\begin{equation*}
\delta \chi(x)=\delta_{0} \chi(x)+\delta x^{\mu} \partial_{\mu} \chi(x)+\frac{i}{2} \epsilon_{\mu \nu} S^{\mu \nu} \chi(x) \tag{6.27}
\end{equation*}
$$
Solving for $\delta_{0} \chi$, and substituting into (6.23), we obtain for the generator
$$
\begin{align*}
G(\sigma)= & \int d \sigma_{\mu}\left\{\delta x^{\mu} \mathcal{L}+\frac{1}{2}\left(\chi A^{\mu} \delta \chi-\delta \chi A^{\mu} \chi\right)\right\} \\
& -\frac{1}{2} \int d \sigma_{\mu}\left\{\left(\chi A^{\mu} \partial^{\nu} \chi-\partial^{v} \chi A^{\mu} \chi\right) \delta x_{v}\right. \\
& \left.-\frac{i}{4} \epsilon_{\lambda v}\left(\chi A^{\mu} S^{\lambda v} \chi-S^{\lambda v} \chi A^{\mu} \chi\right)\right\} \tag{6.28}
\end{align*}
$$
Adding a surface term, it is possible to bring $G(\sigma)$ into the form:
$$
\begin{equation*}
G(\sigma)=\int d \sigma_{\mu} \frac{1}{2}\left(\chi A^{\mu} \delta \chi-\delta \chi A^{\mu} \chi\right)+\int d \sigma_{\mu} \delta x_{v} T^{\mu \nu} \tag{6.29}
\end{equation*}
$$
where $T^{\mu \nu}$ is the symmetric stress-tensor operator
$$
\begin{align*}
T^{\mu \nu}= & g^{\mu \nu} \mathcal{L}-\frac{1}{4}\left[\chi A^{\{\mu} \partial^{\nu\}} \chi-\partial^{\{\nu} \chi A^{\mu\}} \chi\right] \\
& -\frac{i}{4} \partial_{\lambda}\left[\chi A^{\{\nu} S^{\mu\} \lambda} \chi-S^{\{\mu \lambda} A^{\nu\}} \chi\right], \tag{6.30}
\end{align*}
$$
and the brackets $\}$ represent symmetrization with respect to $\mu$ and $\nu$.
Applying the stationary action principle to the variation $\delta x_{v}$, taken as arbitrary, we note that the invariance of the action operator implies the conservation law:
$$
\begin{equation*}
\int_{\sigma_{1}} d \sigma_{\mu} T^{\mu \nu}=\int_{\sigma_{2}} d \sigma_{\mu} T^{\mu \nu} \tag{6.31}
\end{equation*}
$$
which, in turn, implies the corresponding differential conservation law
$$
\begin{equation*}
\partial_{\mu} T^{\mu \nu}=0 . \tag{6.32}
\end{equation*}
$$
The generator (6.29) can be split into two parts, one representing changes induced by the coordinate variation, and the other giving the variation induced by a change in the field variables,
$$
\begin{align*}
G_{\chi} & =\int d \sigma_{\mu} \frac{1}{2}\left(\chi A^{\mu} \delta \chi-\delta \chi A^{\mu} \chi\right)  \tag{6.33a}\\
G_{x} & =\int d \sigma_{\mu} T^{\mu v} \delta x_{v}=\epsilon_{v} P^{v}+\frac{1}{2} \epsilon_{\mu v} J^{\mu v} \tag{6.33b}
\end{align*}
$$
where
$$
\begin{equation*}
P^{\nu} \equiv \int d \sigma_{\mu} T^{\mu \nu}, \quad J^{\mu \nu} \equiv \int d \sigma_{\lambda}\left[x^{\mu} T^{\lambda \nu}-x^{\nu} T^{\lambda \mu}\right] \tag{6.34}
\end{equation*}
$$
$P^{\nu}$ and $J^{\mu \nu}$ are the generators for translations and rotations, respectively, and their commutation relations are determined by the group of transformations they represent. Specifically, $P^{\nu}$ is recognized as the 4-momentum operator, and $J^{\mu \nu}$ as the relativistic generalization of the angular momentum operator.

The field equations are obtained by the vanishing of $\delta_{0} \mathcal{L}$ in (6.22),
$$
\begin{equation*}
2 A^{\mu} \partial_{\mu} \chi=\frac{\partial_{\ell} \mathcal{H}}{\partial \chi} \quad \text { or }-2 A^{\mu \mathrm{T}} \partial_{\mu} \chi=\frac{\partial_{r} \mathcal{H}}{\partial \chi} \tag{6.35}
\end{equation*}
$$
in terms of left and right derivatives, corresponding to the two equivalent ways of writing $G_{\chi}$ :
$$
\begin{equation*}
G_{\chi}=\int d \sigma_{\mu} \chi A^{\mu} \delta \chi, \quad \text { or } \quad G_{\chi}=-\int d \sigma_{\mu} \delta \chi A^{\mu} \chi \tag{6.36}
\end{equation*}
$$
If we continued with these two pairs of expressions, we would obtain two forms for the commutation rules of $\chi$; their equivalence then leads to the requirement that the $A^{\mu}$ and $\chi$ must decompose:
$$
\begin{equation*}
\chi=\phi+\psi, \quad A^{\mu}=a^{\mu}+s^{\mu}, \tag{6.37}
\end{equation*}
$$
where the $a^{\mu}$ are anti-symmetric and real, the $s^{\mu}$ are symmetric and imaginary, and the $\phi$ and $\psi$ represent the kinematically independent fields of the Bose-Einstein and Fermi-Dirac types, respectively. The field equations are then
$$
\begin{align*}
& 2 a^{\mu} \partial_{\mu} \phi=\frac{\partial_{\ell} \mathcal{H}}{\partial \phi}=\frac{\partial_{r} \mathcal{H}}{\partial \phi}  \tag{6.38a}\\
& 2 s^{\mu} \partial_{\mu} \psi=\frac{\partial_{\ell} \mathcal{H}}{\partial \psi}=-\frac{\partial_{r} \mathcal{H}}{\partial \psi} \tag{6.38b}
\end{align*}
$$
Similarly, $G_{\chi}$ can be. divided into its $\phi$ and $\psi$ parts, $G_{\chi}=G_{\phi}+G_{\psi}$,
$$
\begin{align*}
G_{\phi} & =\int d \sigma_{\mu} \phi a^{\mu} \delta \phi=\int d \sigma_{\mu}\left(a^{\mu} \delta \phi\right) \phi \\
G_{\psi} & =\int d \sigma_{\mu} \psi s^{\mu} \delta \psi=\int d \sigma^{\mu}\left(s^{\mu} \delta \psi\right) \psi \tag{6.39}
\end{align*}
$$
Again, we find (where $\{$,$\} denotes an anticommutator)$
$$
\begin{align*}
\left\{\delta \psi_{\alpha}(x), \psi_{\beta}\left(x^{\prime}\right)\right\} & =0, \\
{\left[\delta \phi_{\alpha}(x), \phi_{k}\left(x^{\prime}\right)\right]=\left[\delta \phi_{k}(x), \psi_{\alpha}\left(x^{\prime}\right)\right] } & =\left[\delta \psi_{\alpha}(x), \phi_{k}\left(x^{\prime}\right)\right]=0 . \tag{6.40}
\end{align*}
$$
The first of Eq. (6.40) combined with Eq.(6.38b) implies that $\mathcal{H}$ must be an even function of $\psi$.

The field equations may be written as equations of motion by singling out the time differentiation,
$$
\begin{equation*}
2 A^{0} \partial_{0} \chi=\frac{\partial_{\ell} \mathcal{H}}{\partial \chi}-2 A^{k} \partial_{k} \chi \tag{6.41}
\end{equation*}
$$
If we took $A^{0}$ to be non-singular, we would be able to solve (6.41) for $\partial_{0} \chi$. More generally, we now recognize the existence of the following possible situations:

1. $A^{0}$ is non-singular. In this case, all of the variables are kinematically independent. An example of this situation is the Dirac-Majorana spin- $\frac{1}{2}$ field.
2. $A^{0}$ is singular, but there are enough relations among the variables to determine all of them. Here, only those variables which possess equations of motion are kinematically independent, but the non-independent fields are determined from the independent fields. Examples of this are the spin zero and spin one fields.
3. $A^{0}$ is singular, and there are not enough relations among the variables to determine all the fields, as in case 2 . The classic example of this is the spin 1, zero mass, electromagnetic field, where the lack of determination corresponds to the possibility of introducing a gauge transformation.

### 6.1 Inference of Particle Properties

We now consider the generators of infinitesimal coordinate (Lorentz) transformations $G_{k}$ and the commutation relations they imply. From (6.33b) we have
$$
\begin{equation*}
G_{x}=\epsilon_{\nu} P^{\nu}+\frac{1}{2} \epsilon_{\mu \nu} J^{\mu \nu} \tag{6.42}
\end{equation*}
$$
which, when applied to the space-time coordinates $x_{\mu}$, generates the new $\bar{x}_{\mu}$,
$$
\begin{equation*}
\bar{x}^{\prime}=x^{\mu}-\epsilon^{\mu}+\epsilon_{\nu}^{\mu} x^{\nu}, \tag{6.43}
\end{equation*}
$$
which is Eq. (6.21). Accompanying this transformation, we have the apparent change in the fields given by (6.26),
$$
\begin{equation*}
-\delta \chi(x)=\bar{\chi}(x)-\chi(x)=\delta x^{\mu} \partial_{\mu} \chi(x)+\frac{i}{2} \epsilon_{\mu \nu} S^{\mu \nu} \chi(x), \tag{6.44a}
\end{equation*}
$$
or
$$
\begin{equation*}
-\delta \chi(x)=\left[\epsilon^{\mu} \partial_{\mu}+\frac{1}{2} \epsilon_{\mu \nu}\left(x^{\mu} \partial^{\nu}-x^{\nu} \partial^{\mu}-i S^{\mu \nu}\right)\right] \chi(x), \tag{6.44b}
\end{equation*}
$$
using $\epsilon_{\mu \nu}=-\epsilon_{\nu \mu}$. Comparing with $\left[\chi, G_{x}\right]=-i \delta \chi$, for arbitrary translations $\left(\epsilon_{\mu}\right)$ and rotations $\left(\epsilon_{\mu \nu}\right)$, we obtain
$$
\begin{align*}
{\left[\chi, P^{\nu}\right] } & =-i \partial^{\nu} \chi  \tag{6.45a}\\
{\left[\chi, J^{\mu \nu}\right] } & =-i\left(x^{\mu} \partial^{\nu}-x^{\nu} \partial^{\mu}+i S^{\mu \nu}\right) \chi \tag{6.45b}
\end{align*}
$$
From (6.45b) the identification of $S^{\mu \nu}$ with the intrinsic spin characteristics of the particle is evident. Considering the time component (6.45a) we obtain the standard commutator equation of motion
$$
\begin{equation*}
\left[\chi, P^{0}\right]=-i \partial^{0} \chi=i \partial_{0} \chi=i \frac{\partial \chi}{\partial t} \tag{6.46}
\end{equation*}
$$
To determine the manner in which the particle interpretation enters, we now represent the fields by Fourier integrals,
$$
\begin{equation*}
\chi(x)=\int(d p) e^{i x^{\mu} p_{\mu}} \chi(p) \tag{6.47}
\end{equation*}
$$
where the $\chi(p)$ are operator functions of the numbers $p_{\mu}$. Substituting into (6.45a) and equating coefficients, we obtain
$$
\begin{equation*}
\left[\chi(p), P^{\nu}\right]=p^{\nu} \chi(p) \tag{6.48a}
\end{equation*}
$$
or
$$
\begin{equation*}
P^{\nu} \chi(p)=\chi(p)\left(P^{\nu}-p^{\nu}\right) . \tag{6.48b}
\end{equation*}
$$
Since the 4 operators $P^{v}$ all commute, we can have simultaneous eigenstates $\left|P^{\prime}\right\rangle$, where $P^{\nu}\left|p^{\prime}\right\rangle=P^{\nu \prime}\left|p^{\prime}\right\rangle$. Applying (6.48a) to these states
$$
\begin{equation*}
P^{\nu} \chi\left|p^{\prime}\right\rangle=\chi\left(P^{\nu \prime}-p^{\nu}\right)\left|P^{\prime}\right\rangle=\left(P^{\nu \prime}-p^{\nu}\right) \chi\left|P^{\prime}\right\rangle \tag{6.49}
\end{equation*}
$$
or writing $\chi\left|P^{\prime}\right\rangle$ as some new eigenvector $\left|P^{\prime}-p\right\rangle$,
$$
\begin{equation*}
P^{\nu}\left|P^{\prime}-p\right\rangle=\left(P^{\nu \prime}-p^{\nu}\right)\left|P^{\prime}-p\right\rangle, \tag{6.50}
\end{equation*}
$$
which shows that the effect of $\chi$ on $\left|P^{\prime}\right\rangle$ is to produce a state whose momentum eigenvalue has been changed by $-p^{\nu}$, indicating the capacity of the field to absorb or emit $p^{\nu}$. Specifically, considering the time component $v=0$, we have two possible situations, depending on whether $p^{0}$ is greater than or less than zero. If $p^{0}>0$, application of $\chi$ on $\left|P^{\prime}\right\rangle$ yields a state with lower energy ( $P^{0 \prime}-p^{0 \prime}$ ), and conversely
if $p^{0}<0$. Since $\chi$ is Hermitian, $\chi$ can be split, in a Lorentz covariant way, into two parts, $\chi=\chi^{(+)}+\chi^{(-)}$, where the superscripts indicate the positive and negative nature of the $p^{0}$ terms which enter in the respective Fourier transforms, and where $\left(\chi^{(+)}\right)^{\dagger}=\chi^{(-)}$. Then $\chi^{(+)}$applied to a state of definite energy acts as an energy annihilation operator, and $\chi^{(-)}$as an energy creation operator.

The $\chi^{(+)}$and $\chi^{(-)}$can then be used to create any physical state from the vacuum state, where we take the latter as the unique lowest-energy state. This vacuum state must necessarily correspond to the eigenvalue $P^{k \prime}=0,(k=1,2,3)$, since if one of the $P^{k \prime}$ were not zero, a rotation of the coordinate system could yield three non-zero momentum components, requiring (a super-position of) the corresponding eigenvectors for its description. But this precludes a description of the vacuum by a single non-degenerate state; we must therefore require that each $P^{k \prime}=0$. Since the vacuum is to have the lowest energy possible, and we may arbitrarily take this to be zero, we then characterize the vacuum state as that unique state for which $P^{\mu \prime}=0$, where $\chi^{(+)}|0\rangle=0$.

So far we have considered $\chi$ as representing general fields; to introduce particle properties consider the Fourier transform of $\chi$, and imagine the numbers $p_{\mu}$ related by the relation:
$$
\begin{equation*}
-p_{\mu} p^{\mu}=m^{2}, \quad p^{0}= \pm \sqrt{m^{2}+\mathbf{p}^{2}} \tag{6.51}
\end{equation*}
$$
Then $\chi^{(+)}$, for example, remains an operator which annihilates energy, but now is correlated with a momentum decrease. This is just the usual particle interpretation; if $\chi^{(+)}$has this character it may be spoken of as a particle annihilation operator, and conversely for $\chi^{(-)}$.

### 6.2 The Connection Between Spin and Statistics

We consider the simplest system, corresponding to linear field equations. Taking $\mathcal{H}=\chi B \chi$, this becomes for our two types of fields $\mathcal{H}=\phi B^{(1)} \phi+\psi B^{(2)} \psi$, where $\phi, \psi$ represent fields of the $1^{s t}$ and $2^{\text {nd }}$ kinds, respectively, meaning bosonic and fermionic fields. (Note that $\mathcal{H}$ must be even in $\psi$, and therefore, as noted below Eq. (6.40), no term of the form $\phi \psi$ can occur.) The matrix $B$ (and therefore $B^{(1)}$ and $\left.B^{(2)}\right)$ is Hermitian. Writing
$$
\begin{equation*}
\delta_{\phi} \mathcal{H}=\delta \phi B^{(1)} \phi+\phi B^{(1)} \delta \phi=\delta \phi\left(B^{(1)} \phi+B^{(1) \mathrm{T}} \phi\right), \tag{6.52}
\end{equation*}
$$
and since
$$
\begin{equation*}
\frac{\partial_{\ell} \mathcal{H}}{\partial \phi}=\frac{\partial_{r} \mathcal{H}}{\partial \phi} \tag{6.53}
\end{equation*}
$$
for these variations of fields of the first kind, both terms in the above bracket must be equivalent, implying that $B^{(1)}=B^{(1) \mathrm{T}}$. Since $B^{(1)}$ is also Hermitian, it is real.

For $\delta \psi$ variations, the identical argument shows that $B^{(2)}=-B^{(2) \mathrm{T}}$, i.e., $B^{(2)}$ is imaginary. It is precisely here that the connection between spin and statistics arises: We can construct matrices for $B^{-1} a^{\mu}$ only for particles of integral spin, and for $B^{-1} S^{\mu}$ only when the particle spin is an integer plus one-half. [See Eq. (6.37).]

Writing the equations of motion (6.35) for either field
$$
\begin{equation*}
2 A^{\mu} \partial_{\mu} \chi=\frac{\partial_{\ell} \mathcal{H}}{\partial \chi}=2 B \chi \tag{6.54}
\end{equation*}
$$
and assuming-as the simplest case-that $B$ is non-singular, we obtain
$$
\begin{equation*}
B^{-1} A^{\mu} \partial_{\mu} \chi(x)=\chi(x) \tag{6.55}
\end{equation*}
$$
Going to the momentum representation $\chi(p)$ as before, this becomes
$$
\begin{equation*}
i B^{-1} A^{\mu} p_{\mu} \chi(p)=\chi(p) \tag{6.56}
\end{equation*}
$$
Now consider the matrix (of finite order) $i B^{-1} A^{\mu} p_{\mu} \equiv M$, which must satisfy its algebraic minimal characteristic equation $M^{n}+a_{1} M^{n-1}+\cdots+a_{n}=0$, where the $a_{n}$ are numbers. From Eq. (6.20) we know that $L^{-1}\left(B^{-1} A^{\mu}\right) L=\ell^{\mu}{ }_{v}\left(B^{-1} A^{v}\right)$. If we insert the proper combinations $L^{-1} L$ in each term, and use the relation
$$
\begin{equation*}
L^{-1}\left(B^{-1} A^{\mu} p_{\mu}\right) L=B^{-1} A^{\nu} \ell_{\nu}^{\mu} p_{\mu}=B^{-1} A^{\mu} \bar{p}_{\nu} \tag{6.57}
\end{equation*}
$$
then the result of a Lorentz transformation, giving us back the identical minimal equation (as it must), shows that the $a_{j}$ are Lorentz invariants, or functions of invariants. Since the only 4 -vectors available are the $p_{\mu}$, we take $a_{j}=a_{j}\left(-p_{\mu} p^{\mu}\right)$. Furthermore, the minimal equation must be valid independently of the value of the numbers $p_{\mu}$, i.e., it must be an algebraic identity in $p_{\mu}$; the coefficients $a_{j}\left(-p^{\mu} p_{\mu}\right)$ must then be of the form $\left(-p^{\mu} p_{\mu}\right)^{j}$ times a numerical factor $c_{j}$, which is independent of the $p_{\mu}$. We can identify the two possible cases, corresponding to the degree of the minimal equation being either even $(n=2 k)$ or odd ( $n=2 k+1$ ); in either case the power to which $\left(B^{-1} A^{\mu} p_{\mu}\right)$ is raised must decrease in steps of two,
$$
\begin{align*}
n= & 2 k: \quad\left(i B^{-1} A^{\mu} p_{\mu}\right)^{2 k}+\left(-p_{\mu} p^{\mu}\right) c_{1}\left(i B^{-1} A^{\mu} p_{\mu}\right)^{2 k-2}+\ldots \\
& +\left(-p_{\mu} p^{\mu}\right)^{k} c_{k}=0  \tag{6.58a}\\
n= & 2 k+1: \quad\left(i B^{-1} A^{\mu} p_{\mu}\right)^{2 k+1}+\left(-p_{\mu} p^{\mu}\right) c_{1}\left(i B^{-1} A^{\mu} p_{\mu}\right)^{2 k-1}+\ldots \\
& +\left(-p_{\mu} p^{\mu}\right)^{k} c_{k}\left(i B^{-1} A^{\mu} p_{\mu}\right)=0 . \tag{6.58b}
\end{align*}
$$
Note also that the numbers $c_{j}$ must be real, since
$$
\begin{align*}
& B^{\dagger}=B, \quad\left(i A^{\mu}\right)^{\dagger}=i A^{\mu},  \tag{6.59a}\\
& \text { and }\left(i B^{-1} A^{\mu} p_{\mu}\right)^{\dagger}=i A^{\mu} B^{-1} p_{\mu}=B\left(i B^{-1} A^{\mu} p_{\mu}\right) B^{-1} \text {. } \tag{6.59b}
\end{align*}
$$
Taking the adjoint of the minimal equation then corresponds to making a similarity transformation on the matrices and complex conjugating every $c_{j}$ term. Since each $B$ can be combined with a $B^{-1}$ term, and since we must still have the same unique minimal equation, it follows that each $c_{j}=c_{j}^{*}$. All of the above is a direct inference from the requirement of Lorentz invariance.

If we now apply (6.58a) and (6.58b) to the field $\chi(p)$, and use (6.56) we obtain for either case
$$
\begin{equation*}
\left[1+\left(-p_{\mu} p^{\mu}\right) c_{1}+\left(-p_{\mu} p^{\mu}\right)^{2} c_{2}+\cdots+\left(-p_{\mu} p^{\mu}\right)^{k} c_{k}\right] \chi(p)=0 \tag{6.60}
\end{equation*}
$$
### 6.3 Fermi-Dirac Fields of Spin 1/2

Consider now only the simplest case of $k=1$, which corresponds to a minimal equation of degree 2. Then Eq. (6.60) becomes
$$
\begin{equation*}
\left[1+\left(-p_{\mu} p^{\mu}\right) c_{1}\right] \chi=0 \tag{6.61}
\end{equation*}
$$
and interpreting $c_{1}$ as $-m^{-2}$, for a non-vanishing $\chi$ we have the familiar relation $p_{\mu} p^{\mu}+m^{2}=0$.

We now go to the simplest case of all, that for which $n=2$ in Eq. (6.58a); this then becomes
$$
\begin{equation*}
\left(i B^{-1} A^{\mu} p_{\mu}\right)^{2}+\frac{p_{\mu} p^{\mu}}{m^{2}}=0 \tag{6.62}
\end{equation*}
$$
Writing
$$
\begin{equation*}
B=m \beta, \quad A^{\mu}=i \alpha^{\mu}, \text { and } \beta^{-1} \alpha^{\mu}=\gamma^{\mu} \tag{6.63}
\end{equation*}
$$
then $\alpha^{\mu}$ is Hermitian, and $\gamma^{\mu \dagger}=\beta \gamma^{\mu} \beta^{-1}$. Eq. (6.62) becomes
$$
\begin{equation*}
\left(\gamma^{\mu} p_{\mu}\right)^{2}=-p_{\mu} p^{\mu}=-g^{\mu \nu} p_{\mu} p_{v}=\gamma^{\mu} \gamma^{\nu} p_{\mu} p_{\nu} \tag{6.64}
\end{equation*}
$$
and since only the symmetric combination $p_{\mu} p_{\nu}$ enters here, we have
$$
\begin{equation*}
\frac{1}{2}\left\{\gamma^{\mu}, \gamma^{\nu}\right\}=-g^{\mu \nu} \tag{6.65}
\end{equation*}
$$
as a necessary condition for Eq. (6.62) to be satisfied algebraically by $p_{\mu}$.
Before proceeding further, we remark that the construction of 5 matrices, satisfying (6.65), each of a definite symmetry (to represent the $\gamma^{\mu}$ and $\gamma^{5}=\gamma^{0} \gamma^{1} \gamma^{2} \gamma^{3}$ ),
can be achieved in only one way: Three of the matrices must be symmetric, and the remaining two antisymmetric. This statement, which is easily verified, together with (6.62) shows that we can construct matrices satisfying (6.65) only for Fermi-DIrac fields, as follows: Since $\alpha^{\mu}$ is real, and $\beta$ imaginary, $\alpha^{\mu}=\beta \gamma^{\mu}=-\beta \gamma^{\mu *}$, i.e., all the $\gamma^{\mu}$ are imaginary. From (6.65) we note that
$$
\begin{equation*}
\left(\gamma^{0}\right)^{2}=-g^{00}=+1 \quad\left(\gamma^{k}\right)^{2}=-g^{k k}=-1 \tag{6.66}
\end{equation*}
$$
Defining $\gamma^{\mu}=i \Gamma^{\mu}$ where the $\Gamma^{\mu}$ are then real, it follows that
$$
\begin{align*}
\left(\Gamma^{0}\right)^{2} & =-1, \quad\left(\Gamma^{k}\right)^{2}=+1 \\
\sum_{n} \Gamma_{j n}^{0} \Gamma_{n \ell}^{0} & =-\delta_{j \ell}, \quad \sum_{n} \Gamma_{j n}^{k} \Gamma_{n \ell}^{k}=\delta_{j \ell} \tag{6.67}
\end{align*}
$$
We are looking for matrices of definite symmetry; equating $j$ and $\ell$, (6.67) can be satisfied only if $\Gamma_{n j}^{0}=-\Gamma_{j n}^{0}, \Gamma_{n j}^{k}=+\Gamma_{j n}^{k}$; i.e., $\gamma^{0}$ is antisymmetric (and imaginary, and therefore Hermitian), and the three $\gamma^{k}$. are symmetric (and imaginary, and therefore skew-Hermitian). $\gamma^{5}$ is then antisymmetric and real. It then follows that $\left\{\beta, \gamma^{k}\right\}=\left[\beta, \gamma^{0}\right]=0$, and since $\beta$ and $\gamma^{0}$ have the same properties, we may identify them: $\beta=\gamma^{0}$.

If we now attempt to repeat this for Bose-Einstein fields, then the $\alpha^{\mu}$ are antisymmetric and imaginary, $\beta$ is symmetric and real, all the $\gamma^{\mu}$ are the same as for the Fermi-Dirac case, and again $\left\{\beta, \gamma^{k}\right\}=0$. But this is a direct violation of the requirements that there be but three independent symmetric matrices, satisfying (6.66). Equation (6.65), from which the spin $\frac{1}{2}$ formalism is obtained, therefore refers only to Fermi-Dirac fields.

The Lagrangian for the Fermi-Dirac spin $\frac{1}{2}$ field is then
$$
\begin{equation*}
\mathcal{L}=\frac{1}{2}\left[\psi, i \alpha^{\mu} \partial_{\mu} \psi\right]-\frac{m}{2}[\psi, \beta \psi] . \tag{6.68}
\end{equation*}
$$
More precisely, this is the Lagrangian for the uncharged Dirac-Majorana field-in order to represent charge we shall later have to double the number of components of $\psi$. For notation, we introduce the use of the dot - to symbolize the proper symmetrization brackets to be used for Fermi-Dirac or Bose-Einstein fields. Then
$$
\begin{equation*}
\mathcal{L}=\psi \cdot i \alpha^{\mu} \partial_{\mu} \psi-m \psi \cdot \beta \psi \tag{6.69}
\end{equation*}
$$
The field equations are then the familiar ones
$$
\begin{equation*}
\left(\frac{1}{i} \alpha^{\mu} \partial_{\mu}+m \beta\right) \psi=0 \tag{6.70}
\end{equation*}
$$
where, since $\psi$ is Hermitian, the adjoint of these equations must, and do, yield identical equations.

To obtain the commutation relations, we use:
$$
\begin{equation*}
G_{\psi}=\int d \sigma_{\mu} \chi A^{\mu} \delta \chi \rightarrow \int d \sigma_{0} \psi s^{0} \delta \psi \tag{6.71}
\end{equation*}
$$
where $s^{0}=i \alpha^{0}=i\left(\beta=\gamma^{0}\right)$, and form
$$
\begin{equation*}
\left[\chi, G_{\chi}\right]=\frac{i}{2} \delta \psi(x), \tag{6.72}
\end{equation*}
$$
or
$$
\begin{equation*}
\int d \sigma_{0}\left\{\psi(x), \psi\left(x^{\prime}\right) s^{0}\right\} \delta \psi\left(x^{\prime}\right)=\frac{i}{2} \delta \psi(x), \tag{6.73}
\end{equation*}
$$
where the factor $\frac{1}{2}$ enters because the $\psi$ are "non-canonical," and [] $\rightarrow\}$ since $\delta \psi$ anti-commutes with $\psi$. This then yields
$$
\begin{equation*}
\left\{\psi(x), \psi\left(x^{\prime}\right)\right\}=\frac{i}{2}\left(s^{0}\right)^{-1} \delta^{(0)}\left(x-x_{0}\right), \tag{6.74}
\end{equation*}
$$
or
$$
\begin{equation*}
\left\{\psi_{\alpha}(x), \psi_{\beta}\left(x^{\prime}\right)\right\}=\frac{1}{2} \delta_{\alpha \beta} \delta^{(0)}\left(x-x^{\prime}\right), \tag{6.75}
\end{equation*}
$$
where $x$ and $x^{\prime}$ are points on the same space-like surface, and $\left(s^{0}\right)^{-1}=-i$.

### 6.4 Spin Zero and One

Let us return to the characteristic Eq. (6.58b) of the matrix $\left(i B^{-1} A^{\mu} p_{\mu}\right)$. We will choose $k=1$, and examine the odd polynomial in $\left(i B^{-1} A^{\mu} p_{\mu}\right)$, which gives the possibility of describing a particle of zero mass. This is necessary to describe the electromagnetic field.

Define the four vector $\beta^{\mu} \equiv \operatorname{im} B^{-1} A^{\mu}$. Then we have
$$
\begin{align*}
\left(\beta^{\mu} p_{\mu}\right)^{3}+p^{v} p_{v}\left(\beta^{\mu} p_{\mu}\right) & =0 \\
\text { or } \quad\left(\beta^{\mu} \beta^{\sigma} \beta^{\nu}+g^{\mu v} \beta^{\sigma}\right) p_{\mu} p_{\sigma} p_{v} & =0 . \tag{6.76}
\end{align*}
$$
From this equation, which is an identity in $p_{\mu}$, we can make statements only about the symmetric part of the matrix products. If we completely symmetrize the matrix factor with respect to $\mu, \sigma$, and $\nu$, it must vanish. This is the sum of three terms of the form
$$
\begin{equation*}
\beta^{\mu} \beta^{\sigma} \beta^{\nu}+\beta^{\nu} \beta^{\sigma} \beta^{\mu}=-g^{\mu \sigma} \beta^{\nu}-g^{\nu \sigma} \beta^{\mu}, \tag{6.77}
\end{equation*}
$$
which are the familiar Kemmer-Duffin commutation relations (Petiau 1936; Duffin 1938; Kemmer 1939) which are used to describe a particle of spin zero and one. All the $\beta$ matrices are singular. These matrices have 126 independent elements and hence are reducible to three sub-matrices of dimensionality 10,5 , and 1 ; the sub-matrix of dimensionality 1 is trivially the null matrix; the one of dimensionality 5 and rank 2 describes a particle of spin 0 ; the matrix of dimensionality 10 and rank 6 describes a particle of spin 1 .

The Lagrangian can be written, by choosing $B=m$, as
$$
\begin{equation*}
\mathcal{L}=\phi . i \beta^{\mu} \partial_{\mu} \phi-m \phi . \phi, \tag{6.78}
\end{equation*}
$$
which yields the equation of motion,
$$
\begin{equation*}
\left(\beta^{\mu} \frac{1}{i} \partial_{\mu}+m\right) \phi=0 \tag{6.79}
\end{equation*}
$$
Multiplying through by $\beta^{\sigma} \beta^{\nu} \frac{1}{i} \partial_{\sigma} \frac{1}{i} \partial_{\nu}$, and symmetrizing with respect to $\sigma$ and $\mu$, using the commutation relations to reduce the triple matrix products and using the wave equation, we finally find
$$
\begin{equation*}
\left[\frac{1}{i} \partial_{\nu} \frac{1}{i} \partial^{\nu}+m^{2}\right] \phi=0, \tag{6.80}
\end{equation*}
$$
which verifies what has been put into the theory as the connection between energy and momentum. Thus each component of $\phi$ satisfies the Klein-Gordon equation.

The generator is
$$
\begin{equation*}
G_{\phi}=-i \int d \sigma_{0} \phi \beta^{0} \delta \phi \tag{6.81}
\end{equation*}
$$
The commutation relations are developed from
$$
\begin{equation*}
\left[\phi(x), \int d \sigma_{0} \phi\left(x^{\prime}\right) \beta^{0} \delta \phi\left(x^{\prime}\right)\right]=-\delta \phi(x) \tag{6.82}
\end{equation*}
$$
which yields
$$
\begin{equation*}
\left[\phi_{a}(x),\left(\beta^{0} \phi\left(x^{\prime}\right)\right)_{b}\right]=-\delta_{a b}^{\prime} \delta^{(0)}\left(x-x^{\prime}\right) \tag{6.83}
\end{equation*}
$$
where $\delta_{a b}^{\prime}$ is a diagonal matrix having six ones and four zeros along the diagonal, which refer to the independent and dependent components, respectively. This equation cannot be solved for the commutation relations because $\beta^{0}$ is a singular matrix. It eliminates the dependent components of $\phi$ from the commutation relations.

If we multiply the field equation by $\left(1-\left(\beta^{0}\right)^{2}\right)$ and use the commutation relations, we find
$$
\begin{equation*}
\left[\beta^{k} \beta^{0} \beta^{0} \partial_{k}+i m\left(1-\beta^{0} \beta^{0}\right)\right] \phi=0 \tag{6.84}
\end{equation*}
$$
which is independent of time, and is the equation expressing the dependent components of $\phi$ in terms of the independent components.

Let us re-examine the spin zero and spin one fields. Integral spin fields may be described in terms of ordinary tensors. They do not require the special spinor properties of the half-integral spin fields. We have seen that the spin zero representation of the Kenner-Duffin algebra has a dimensionality of five. If the only tensor in addition to the field components which is introduced to form bilinear products in a scalar Lagrangian is the four-divergence, we must describe the field with tensors differing in rank by one. We shall construct the spin zero field with a scalar and four-vector as the necessary 5 components, and the spin one field with a four-vector and an anti-symmetrical second rank tensor as representing the 10 components.

### 6.5 Spin Zero

The Lagrangian for a spin zero field is
$$
\begin{equation*}
\mathcal{L}=\frac{1}{2}\left(\phi \cdot \partial_{\mu} \phi^{\mu}-\phi^{\mu} \partial_{\mu} \phi\right)-\frac{m}{2}\left(\phi^{2}-\phi_{\mu} \phi^{\mu}\right) . \tag{6.85}
\end{equation*}
$$
The field equations are determined by varying $\phi$ and $\phi^{\mu}$,
$$
\begin{equation*}
\partial_{\mu} \phi^{\mu}=m \phi, \quad \partial_{\mu} \phi=m \phi_{\mu}, \tag{6.86}
\end{equation*}
$$
which imply
$$
\begin{equation*}
\partial^{\mu} \partial_{\mu} \phi=m \partial^{\mu} \phi_{\mu}=m^{2} \phi, \quad \partial^{\mu} \partial_{\mu} \phi^{\nu}=\frac{1}{m} \partial^{\nu} \partial^{\mu} \partial_{\mu} \phi=m^{2} \phi^{\nu}, \tag{6.87}
\end{equation*}
$$
again yielding the Klein-Gordon equation.
The generator is
$$
\begin{equation*}
G=\int d \sigma_{\mu} \frac{1}{2}\left(\phi \delta \phi^{\mu}-\phi^{\mu} \delta \phi\right) \rightarrow \int d \sigma_{0} \frac{1}{2}\left(\phi \delta \phi^{0}-\phi^{0} \delta \phi\right) . \tag{6.88}
\end{equation*}
$$
Thus only $\phi$ and $\phi^{0}$ are independent variables. This is reflected in the fact that the Klein-Gordon equation is second order, and hence we must specify both the wave function and its time derivative.

The equations of motion have to be examined to see if the other components of the field are determined. We have from the field equations, as equations of motion,
$$
\begin{equation*}
\partial_{0} \phi=m \phi_{0} \quad \partial_{0} \phi^{0}=m \phi-\partial_{k} \phi^{k}, \tag{6.89}
\end{equation*}
$$
and the following which is not an equation of motion, but does show that the $\phi^{k}$ are determined in terms of the two independent components,
$$
\begin{equation*}
\partial_{k} \phi=m \phi_{k} \tag{6.90}
\end{equation*}
$$
From the generator we see that we have one set of canonically conjugate variables, $\phi$ and $\phi_{0}$. This means that the field has only one internal degree of freedom, and must be a spin zero field. This pair of conjugate variables must obey the canonical commutation relations (at equal times), as is easily verified by using the generators for their respective change
$$
\begin{equation*}
\left[\phi(x), \phi\left(x^{\prime}\right)\right]=\left[\phi^{0}(x), \phi^{0}\left(x^{\prime}\right)\right]=0, \quad\left[\phi^{0}(x), \phi\left(x^{\prime}\right)\right]=i \delta^{(0)}\left(x-x^{\prime}\right) \tag{6.91}
\end{equation*}
$$
where $\delta^{(0)}\left(x-x^{\prime}\right)$ means $\delta\left(\mathbf{r}-\mathbf{r}^{\prime}\right)$ on $\sigma_{0}$. The commutation relations obeyed by the dependent field components are derived from the field equations and these; for instance
$$
\begin{equation*}
\frac{1}{i}\left[\phi^{0}(x), \phi_{k}\left(x^{\prime}\right)\right]=-\frac{1}{m} \partial_{k} \delta^{(0)}\left(x-x^{\prime}\right) \tag{6.92}
\end{equation*}
$$
These commutation relations can be written by inspection in a form not referring to any particular coordinate system (where now $\delta^{(\mu)}\left(x-x^{\prime}\right)$ means $\delta\left(\mathbf{r}-\mathbf{r}^{\prime}\right)$ on $\sigma_{\mu}$ ), on the spacelike surface $\sigma_{\mu}$,
$$
\begin{align*}
{\left[\phi(x), \phi\left(x^{\prime}\right)\right] } & =0 \quad \frac{1}{i}\left[\phi^{\mu}(x), \phi\left(x^{\prime}\right)\right]=\delta^{(\mu)}\left(x-x^{\prime}\right) \\
\frac{1}{i}\left[\phi^{\mu}(x), \phi^{\nu}\left(x^{\prime}\right)\right] & =-\frac{1}{m}\left[\partial^{\mu} \delta^{(\nu)}\left(x-x^{\prime}\right)+\partial^{\nu} \delta^{(\mu)}\left(x-x^{\prime}\right)\right] . \tag{6.93}
\end{align*}
$$
### 6.6 Spin One

The description of a spin one field requires the use of a ten-component wave function. As we shall see, not all of these components are independent. We shall use a fourvector and an anti-symmetrical tensor of rank two. The Lagrangian is chosen to be
$$
\begin{equation*}
\mathcal{L}=\frac{1}{2}\left(\phi_{\nu} \cdot \partial_{\mu} G^{\mu \nu}-G^{\mu \nu} . \partial_{\mu} \phi_{\nu}\right)-\frac{m}{2}\left(\phi^{\mu} \phi_{\mu}-\frac{1}{2} G^{\mu \nu} G_{\mu \nu}\right) . \tag{6.94}
\end{equation*}
$$
The factor of $1 / 2$ in the last term is inserted because the unrestricted sum over $\mu$ and $v$ counts each component twice. The field equations are
$$
\begin{equation*}
\partial_{\mu} \phi_{\nu}-\partial_{\nu} \phi_{\mu}=m G_{\mu \nu}, \quad \partial_{\mu} G^{\mu \nu}=m \phi^{\nu} \tag{6.95}
\end{equation*}
$$
The generator is
$$
\begin{equation*}
G=\int d \sigma_{0} \frac{1}{2}\left(\phi_{k} \delta G^{0 k}-G^{0 k} \delta \phi_{k}\right) . \tag{6.96}
\end{equation*}
$$
Thus only six of the ten components can be varied independently, $\phi_{k}$ and $G^{0 k}$. Let us see if they have equations of motion and if the other 4 components are determined in terms of the independent ones. The equations of motion are
$$
\begin{equation*}
\partial_{0} \phi_{k}=\partial_{k} \phi_{0}+m G_{0 k}, \quad \partial_{0} G^{0 k}=m \phi^{k}-\partial_{l} G^{l k} \tag{6.97}
\end{equation*}
$$
for the independent field components. Also
$$
\begin{equation*}
\partial_{k} \phi_{\ell}-\partial_{\ell} \phi_{k}=m G_{k \ell}, \quad m \phi^{0}=\partial_{k} G^{k 0}=-\partial_{k} G^{0 k} \tag{6.98}
\end{equation*}
$$
which determine the four dependent field components. Thus all ten components of the field are determined.

From the generator we see that we have 3 sets of canonically conjugate field variables; thus the field has 3 internal degrees of freedom. This corresponds to the three sub-states of a spin one field.

The commutation relations obeyed by the field components are obviously the canonically conjugate relations,
$$
\begin{align*}
{\left[\phi^{k}(x), \phi^{\ell}\left(x^{\prime}\right)\right] } & =\left[G^{0 k}(x), G^{0 \ell}\left(x^{\prime}\right)\right]=0, \\
\frac{1}{i}\left[G^{0 k}(x), \phi_{\ell}\left(x^{\prime}\right)\right] & =\delta_{\ell}^{k} \delta^{(0)}\left(x-x^{\prime}\right) . \tag{6.99}
\end{align*}
$$
The commutation relations obeyed by the dependent components can be realized from the above, by using their definitions in terms of the independent components. For instance,
$$
\begin{equation*}
\frac{1}{i}\left[\phi^{0}(x), \phi_{\ell}\left(x^{\prime}\right)\right]=-\frac{1}{m} \delta_{\ell}^{k} \partial_{k} \delta^{(0)}\left(x-x^{\prime}\right)=-\frac{1}{m} \partial_{\ell} \delta^{(0)}\left(x-x^{\prime}\right) . \tag{6.100}
\end{equation*}
$$
These relations can be generalized to refer to an arbitrary coordinate system,
$$
\begin{align*}
\frac{1}{i}\left[\phi^{\mu}(x), \phi^{\nu}\left(x^{\prime}\right)\right] & =-\frac{1}{m}\left[\partial^{\mu} \delta^{(\nu)}\left(x-x^{\prime}\right)+\partial^{\nu} \delta^{(\mu)}\left(x-x^{\prime}\right)\right] \\
\frac{1}{i}\left[G^{\mu \nu}(x), \phi_{\lambda}\left(x^{\prime}\right)\right] & =-\delta_{\lambda}^{\nu} \delta^{(\mu)}\left(x-x^{\prime}\right)-\delta_{\lambda}^{\mu} \delta^{(\nu)}\left(x-x^{\prime}\right), \\
\frac{1}{i}\left[G^{\mu \nu}(x), G^{\lambda \kappa}\left(x^{\prime}\right)\right] & =-\frac{1}{m}\left\{g^{\mu \lambda}\left(\partial^{\nu} \delta^{(\kappa)}\left(x-x^{\prime}\right)+\partial^{\kappa} \delta^{(\nu)}\left(x-x^{\prime}\right)\right)\right\} \tag{6.101}
\end{align*}
$$
plus antisymmetrical terms....

### 6.7 Electromagnetic Field

The electromagnetic field is a spin one, massless field. A re-definition of the field variables in the limit as the mass approaches zero will be made in the spin-one Lagrangian. Set
$$
\begin{equation*}
\sqrt{m} G^{\mu \nu} \equiv F^{\mu \nu}, \quad \frac{1}{\sqrt{m}} \phi_{v} \equiv A_{v} \tag{6.102}
\end{equation*}
$$
Then the Lagrangian (6.94) becomes
$$
\begin{equation*}
\mathcal{L}=\frac{1}{2}\left(A_{\nu \cdot} \cdot \partial_{\mu} F^{\mu \nu}-F^{\mu \nu} \partial_{\mu} A_{\nu}\right)+\frac{1}{4} F^{\mu \nu} F_{\mu \nu} . \tag{6.103}
\end{equation*}
$$
The field equations are
$$
\begin{equation*}
\partial_{\mu} A_{\nu}-\partial_{\nu} A_{\mu}=F_{\mu \nu}, \quad \partial_{\mu} F^{\mu \nu}=0 \tag{6.104}
\end{equation*}
$$
and the generator becomes, in the local coordinate system,
$$
\begin{equation*}
G=\int d \sigma \frac{1}{2}\left(A_{k} \delta F^{0 k}-F^{0 k} \delta A_{k}\right) \tag{6.105}
\end{equation*}
$$
Thus, as in the case of a spin one non-zero mass field, only six of the field components can be varied independently. Their equations of motion are
$$
\begin{equation*}
\partial_{0} A_{k}=\partial_{k} A_{0}+F_{0 k}, \quad \partial_{0} F^{0 k}=-\partial_{\ell} F^{\ell k} \tag{6.106}
\end{equation*}
$$
We must now examine the rest of the field equations to see if the dependent components are determined,
$$
\begin{equation*}
\partial_{k} A_{\ell}-\partial_{\ell} A_{k}=F_{k \ell}, \quad \partial_{k} F^{0 k}=0 \tag{6.107}
\end{equation*}
$$
Thus $F^{k l}$ is determined, but because of the vanishing of the photon mass, $A_{0}$ is not determined and a further restriction is placed on the electric field, $F^{0 k}$. This is exactly the freedom of making a gauge transformation, which is allowed by the vanishing of the photon mass. That is,
$$
\begin{equation*}
A_{\mu} \rightarrow A_{\mu}+\partial_{\mu} \Lambda \tag{6.108}
\end{equation*}
$$
It is convenient to split the vector part of $A_{\mu}$ into a longitudinal part, which is the gradient of a scalar, and a transverse part, which is the curl of a vector. Thus we see that the gauge transformation affects only the longitudinal part of $A_{k} . F^{0 k}$ is purely transverse because it has no divergence.

The equations of motion also break up into longitudinal and transverse components,
$$
\begin{equation*}
\partial_{0} A_{k}^{\mathrm{L}}=\partial_{k} A_{0} \quad \partial_{0} A_{k}^{\mathrm{T}}=F_{0 k} \tag{6.109}
\end{equation*}
$$
The first equation is entirely consistent with the possibility of making a gauge transformation which implies
$$
\begin{equation*}
A_{k}^{\mathrm{L}}=\partial_{k} \Lambda, \quad A_{0}=\partial_{0} \Lambda \tag{6.110}
\end{equation*}
$$
By setting
$$
\begin{equation*}
A_{k}=\partial_{k} \Lambda+A_{k}^{\mathrm{T}} \tag{6.111}
\end{equation*}
$$
in the generators and integrating by parts, or equivalently adding a surface term to the Lagrangian, we see that only the transverse components of $A_{k}$ appear in the generator,
$$
\begin{equation*}
G=\int d \sigma_{0} \frac{1}{2}\left(A_{k}^{\mathrm{T}} \delta F^{0 k}-F^{0 k} \delta A_{k}^{\mathrm{T}}\right) \tag{6.112}
\end{equation*}
$$
Since $F^{0 k}$ and $A_{k}^{\mathrm{T}}$ appear as canonical variables, we can impose the canonical commutation relations
$$
\begin{align*}
{\left[A_{k}^{\mathrm{T}}(x), A_{\ell}^{\mathrm{T}}\left(x^{\prime}\right)\right] } & =\left[F^{0 k}(x), F^{0 l}\left(x^{\prime}\right)\right]=0,  \tag{6.113a}\\
{\left[F^{0 k}(x), A_{\ell}^{\mathrm{T}}\left(x^{\prime}\right)\right] } & =\delta_{\ell}^{k}\left(\delta^{(0)}\left(x-x^{\prime}\right)\right)^{\mathrm{T}} \tag{6.113b}
\end{align*}
$$
where only the transverse component of the term on the right side of (6.113b) can appear. If we define a term that subtracts off the longitudinal part of the delta function, the commutation relation can be written as
$$
\begin{equation*}
\left[F^{0 k}(x), A_{\ell}^{\mathrm{T}}\left(x^{\prime}\right)\right]=\delta_{\ell}^{k} \delta^{(0)}\left(x-x^{\prime}\right)-\partial^{k} \partial_{\ell}^{\prime} \mathcal{D}^{0}\left(x-x^{\prime}\right) \tag{6.114}
\end{equation*}
$$
The divergence of this purely transverse equation must vanish, hence
$$
\begin{equation*}
\delta_{\ell}^{k} \partial_{k} \delta^{(0)}\left(x-x^{\prime}\right)=-\partial^{k} \partial_{k} \partial_{\ell} \mathcal{D}^{0}\left(x-x^{\prime}\right) \tag{6.115}
\end{equation*}
$$
which can be satisfied if
$$
\begin{equation*}
\nabla^{2} \mathcal{D}^{0}\left(x-x^{\prime}\right)=-\delta^{(0)}\left(x-x^{\prime}\right) \tag{6.116}
\end{equation*}
$$
or
$$
\begin{equation*}
\mathcal{D}^{0}\left(x-x^{\prime}\right)=\frac{1}{4 \pi\left|\mathbf{x}-\mathbf{x}^{\prime}\right|} \tag{6.117}
\end{equation*}
$$
which shows that the longitudinal part of $A_{k}$ is intimately connected with the Coulomb potential.

### 6.8 Introduction of Charge

It was previously mentioned that the description of charge requires a doubling of the number of component fields $\chi$.

The simplest case to consider is the case of one internal degree of freedom. Calling the two basic fields $\chi_{(1)}$ and $\chi_{(2)}, \mathcal{L}$ [Eq. (6.8)] becomes
$$
\begin{equation*}
\mathcal{L}=\chi_{(1)} \cdot A^{\mu} \partial_{\mu} \chi_{(1)}+\chi_{(2)} \cdot A^{\mu} \partial_{\mu} \chi_{(2)}-\mathcal{H}\left(\chi_{(1)}, \chi_{(2)}\right) . \tag{6.118}
\end{equation*}
$$
Since both $\chi_{(1)}$ and $\chi_{(2)}$ have identical space-time properties, the kinematical portion of $\mathcal{L}$ is invariant under rotations and reflections in a new two-dimensional space composed of the components $\chi_{(1)}$ and $\chi_{(2)}$ in accordance with the sum-of-squares notation of (6.118). The rotations in this space, given by
$$
\begin{equation*}
\bar{\chi}_{(1)}=\cos \lambda \chi_{(1)}+\sin \lambda \chi_{(2)}, \quad \bar{\chi}_{(2)}=-\sin \lambda \chi_{(1)}+\cos \lambda \chi_{(2)}, \tag{6.119}
\end{equation*}
$$
may be concisely expressed as
$$
\begin{equation*}
\bar{\chi}=e^{i \lambda q} \chi \tag{6.120}
\end{equation*}
$$
where
$$
\chi=\binom{\chi_{(1)}}{\chi_{(2)}} \quad q=\left(\begin{array}{cc}
0 & -i  \tag{6.121}\\
i & 0
\end{array}\right) .
$$
The basic improper transformation (reflections) can be taken either as
$$
\begin{equation*}
\bar{\chi}_{(1)}=\chi_{(2)}, \quad \bar{\chi}_{(2)}=\chi_{(1)} \tag{6.122}
\end{equation*}
$$
or
$$
\begin{equation*}
\bar{\chi}_{(1)}=\chi_{(2)}, \quad \bar{\chi}_{(2)}=-\chi_{(1)} . \tag{6.123}
\end{equation*}
$$
Re-defining $A^{\mu}$ as
$$
\left(\begin{array}{cc}
A^{\mu} & 0  \tag{6.124}\\
0 & A^{\mu}
\end{array}\right)
$$
allows us to write (6.118) in matrix notation
$$
\begin{equation*}
\mathcal{L}=\chi \cdot A^{\mu} \partial_{\mu} \chi-\mathcal{H}(\chi), \tag{6.125}
\end{equation*}
$$
where we have assumed that $\mathcal{H}$ has the required invariance under reflections and rotations in this space. Use of (6.120) and $q^{\mathrm{T}}=-q$ is then sufficient to guarantee the invariance of $\mathcal{L}$ under rotations. The reflection transformations in (6.122) can be compactly written as
$$
\begin{equation*}
\bar{\chi}=C e^{i \frac{\pi}{2} q} \chi \quad \bar{\chi}=C \chi \tag{6.126}
\end{equation*}
$$
where
$$
C=\left(\begin{array}{ll}
0 & 1  \tag{6.127}\\
1 & 0
\end{array}\right)
$$
Then the relations $C^{\mathrm{T}}=C^{-1}=C$ show that $\mathcal{L}$ is invariant under reflections.
The proper transformation (6.120) can be evolved from a sequence of infinitesimal transformations of the form
$$
\begin{equation*}
\bar{\chi}=(1+i \delta \lambda q) \chi=\chi-\delta \chi \quad \delta \chi=-i \delta \lambda q \chi \tag{6.128}
\end{equation*}
$$
and incorporating this infinitesimal variation into the action principle will yield a quantity which is conserved. The notation will suggest the interpretation of this quantity as electrical charge, but until the manner in which it appears in interactions between the various fields is specified, the nature of this charge is irrelevant.

If we now imagine that $\delta \lambda$ of (6.128) is a continuous function of space time, the finite change in $\lambda$ which builds up between an initial $t\left(\sigma_{2}\right)$ and final $t\left(\sigma_{1}\right)$ times corresponds to different successive choices of $\chi$. The stipulated invariance of $\mathcal{L}$ then implies that $\delta_{\lambda} \mathcal{L}=0$. If $\delta \lambda$ were constant, $\delta_{\lambda} \mathcal{L}$ would vanish trivially, in accordance with (6.120) and (6.126); we obtain something new since the dependence of $\delta \lambda$ on $x^{\mu}$ introduces terms depending on $\partial_{\mu} \delta \lambda$ :
$$
\begin{equation*}
\delta_{\lambda} \mathcal{L}=-i \chi \cdot A^{\mu} q \chi \partial_{\mu} \delta \lambda \equiv j^{\mu} \partial_{\mu} \delta \lambda=\partial_{\mu}\left[j^{\mu} \delta \lambda\right]-\delta \lambda \partial_{\mu} j^{\mu} \tag{6.129}
\end{equation*}
$$
where
$$
\begin{equation*}
j^{\mu} \equiv-i \chi \cdot A^{\mu} q \chi=-i \chi A^{\mu} q \chi=\chi_{(2)} A^{\mu} \chi_{(1)}-\chi_{(1)} A^{\mu} \chi_{(2)} \tag{6.130}
\end{equation*}
$$
The action principle now requires that the coefficient of $\delta \lambda$ vanish, yielding the differential conservation law
$$
\begin{equation*}
\partial_{\mu} j^{\mu}=0 \tag{6.131}
\end{equation*}
$$
The term $\partial_{\mu}\left[j^{\mu} \delta \lambda\right]$ gives the generator for changes on the boundary space-like surfaces $\sigma_{1} . \sigma_{2}$. Taking $\delta \lambda$ as constant over each surface, which corresponds to different, but definite, choices of the $\chi$ on $\sigma_{1,2}$, we have
$$
\begin{equation*}
G_{\lambda}=\delta \lambda \int d \sigma_{\mu} j^{\mu} \equiv Q \delta \lambda \tag{6.132}
\end{equation*}
$$
Further, if $\delta \lambda\left(\sigma_{1}\right)=\delta \lambda\left(\sigma_{2}\right)$ then it is obvious that we get the same description as we would have obtained with $\delta \lambda=0$ in both surfaces, i.e.,
$$
\begin{equation*}
\left[Q\left(\sigma_{2}\right)-Q\left(\sigma_{1}\right)\right] \delta \lambda=0, \quad \text { and therefore } \quad Q\left(\sigma_{1}\right)=Q\left(\sigma_{2}\right) \tag{6.133}
\end{equation*}
$$
This result also follows from (6.131); the quantity $Q$, called the "charge", is therefore conserved.

Obtaining the commutation relations, from (6.128) and (6.132) we have
$$
\begin{equation*}
\delta \chi=\frac{1}{i}[\chi, G]=\frac{1}{i}[\chi, Q \delta \lambda]=-i q \chi \delta \lambda, \tag{6.134}
\end{equation*}
$$
or
$$
\begin{equation*}
[\chi, Q]=q \chi, \tag{6.135a}
\end{equation*}
$$
or
$$
\begin{equation*}
\left[\chi_{(1)}, Q\right]=-i \chi_{(2)}, \quad\left[\chi_{(2)}, Q\right]=i \chi_{(1)} . \tag{6.135b}
\end{equation*}
$$
The generalization of (6.134) for a finite rotation is
$$
\begin{equation*}
e^{-i \lambda Q} \chi e^{i \lambda Q}=e^{i \lambda q} \chi \tag{6.136}
\end{equation*}
$$
which is analogous to translation induced by the momentum operator $P_{\nu}$,
$$
\begin{align*}
{\left[\chi, P_{\nu}\right] } & =\frac{1}{i} \partial_{\nu} \chi \\
e^{-i \alpha \cdot P} \chi(x) e^{i \alpha \cdot P} & =e^{\alpha^{\nu} \partial_{\nu}} \chi(x)=\chi(x+a) . \tag{6.137}
\end{align*}
$$
There must also exist a unitary operator, in analogy with (6.136), which accomplishes the improper transformations of Eq. (6.123):
$$
\mathcal{C}^{-1} \chi \mathcal{C}=c \chi, \quad \text { or } \quad\left\{\begin{array}{l}
\mathcal{C}^{-1} \chi_{(1)} \mathcal{C}=\chi_{(1)}  \tag{6.138}\\
\mathcal{C}^{-1} \chi_{(2)} \mathcal{C}=-\chi_{(2)}
\end{array}\right.
$$
From (6.132) and (6.130) we then have
$$
\begin{equation*}
\mathcal{C}^{-1} Q \mathcal{C}=-Q . \tag{6.139}
\end{equation*}
$$
Thus, $\mathcal{C}$ has the interpretation of a charge reflection operator. Since $\mathcal{C}^{2}=+1$, its eigenvalues are $\mathcal{C}= \pm 1$. From (6.139) we see that $[Q, \mathcal{C}] \neq 0$ and the two operators cannot be simultaneously diagonalized, (in the representation of $\chi_{(1)}, \chi_{(2)}, \mathcal{C}$ is diagonal) except for states of zero charge. If we arbitrarily assign the vacuum state the eigenvalue $\mathcal{C}^{\prime}=+1$, then this state of zero charge, $Q^{\prime}=0$, has both a definite charge and charge symmetry.

To obtain a state (other than $Q^{\prime}=0$ ) of definite charge, where the operator $Q$ is diagonalized, we must utilize non-Hermitian operators. Define
$$
\begin{equation*}
\chi_{+} \equiv \chi_{(1)}-i \chi_{(2)}, \quad \chi_{-}=\chi_{(1)}+i \chi_{(2)} \tag{6.140}
\end{equation*}
$$
and then a simple calculation shows that
$$
\begin{equation*}
\left[\chi_{+}, Q\right]=\chi_{+}, \quad\left[\chi_{-}, Q\right]=-\chi_{-} \tag{6.141}
\end{equation*}
$$
indicating that in this representation $Q$ is diagonal. However, $\mathcal{C}$ is no longer diagonal:
$$
\begin{equation*}
\mathcal{C}^{-1} \chi_{ \pm} \mathcal{C}=\chi_{\mp} . \tag{6.142}
\end{equation*}
$$
From (6.141) we see that if we have a state $\left|Q^{\prime}\right\rangle$ representing a definite charge, then
$$
\begin{align*}
& Q\left(\chi+\left|Q^{\prime}\right\rangle\right)=\left(Q^{\prime}-1\right)\left(\chi_{+}\left|Q^{\prime}\right\rangle\right) \\
& Q\left(\chi-\left|Q^{\prime}\right\rangle\right)=\left(Q^{\prime}+1\right)\left(\chi_{-}\left|Q^{\prime}\right\rangle\right) \tag{6.143}
\end{align*}
$$
showing that $\chi_{+}$creates a state for which the eigenvalue of $Q$ is $Q^{\prime}-1$, and conversely for $\chi$ - These, then, represent charge annihilation and creation operators respectively. If we imagine that every physical state can be created by the action of these operators on the vacuum $\left|Q^{\prime}=0\right\rangle$ then the only possible values of $Q^{\prime}$ are $0, \pm 1, \pm 2, \ldots$ etc. (Note that charge annihilation represents the destruction of positive charge or the creation of negative charge, and vice versa.) To connect this with our previous particle description in Sect. 6.1, where we had $\chi^{(+)}$and $\chi^{(-)}$, we now obviously have the four possibilities:

- $\chi_{+}^{(+)}$destroys a particle and decreases charge by 1 ,
- $\chi_{-}^{(-)}$creates a particle and increases charge by 1 .

These are inverse operations: $\left(\chi_{-}^{(-)}\right)^{\dagger}=\chi_{+}^{(+)}$.

- $\chi_{-}^{(+)}$destroys a particle but increases charge by 1 .
- $\chi_{+}^{(-)}$creates a particle but decreases charge by 1 .

These are also inverse operations: $\left(\chi_{-}^{(+)}\right)^{\dagger}=\chi_{+}^{(-)}$. This exhaustive description permits us to describe particles that carry charge.

In terms of the non-Hermitian variables defined by (6.140), the Lagrangian (6.118) becomes
$$
\begin{equation*}
\mathcal{L}=\frac{1}{2}\left[\chi_{-} . A^{\mu} \partial_{\mu} \chi_{+}+\chi_{+} . A^{\mu} \partial_{\mu} \chi_{-}\right]-\mathcal{H}, \tag{6.144}
\end{equation*}
$$
and the generator is
$$
\begin{equation*}
G=\int d \sigma_{\mu} \frac{1}{2}\left[\chi_{-} A^{\mu} \delta \chi_{+}+\chi_{+} A^{\mu} \delta \chi_{-}\right] \tag{6.145}
\end{equation*}
$$
which shows that $\chi_{+}$and $\chi_{-}$are a canonically conjugate set of field variables. The current (6.130) is
$$
\begin{equation*}
j^{\mu}=\frac{i}{2}\left[\chi_{+} A^{\mu} \chi_{-}-\chi_{-} A^{\mu} \chi_{+}\right] \tag{6.146}
\end{equation*}
$$
For variables of the second kind the commutation rules are
$$
\begin{align*}
\left\{\chi_{+}(x), \chi_{-}\left(x^{\prime}\right)\right\} A^{0} & =i \delta^{(0)}\left(x-x^{\prime}\right) \\
\left\{\chi_{ \pm}(x), \chi_{ \pm}\left(x^{\prime}\right)\right\} & =0 . \tag{6.147}
\end{align*}
$$
### 6.9 Quantum Electrodynamics

As an illustration of the use of non-Hermitian fields, we now consider the ordinary charged Dirac field. We start with $\psi_{(1)}$ and $\psi_{(2)}$ as the two 4-component Hermitian fields which form the simplest charged field. Let
$$
\begin{align*}
& \psi_{(1)}-i \psi_{(2)}=\psi_{+} \equiv \psi  \tag{6.148a}\\
& \psi_{(1)}+i \psi_{(2)}=\psi_{-} \equiv \psi^{\dagger} \tag{6.148b}
\end{align*}
$$
There is an artificial asymmetry here depending on what is defined as $\psi$ and $\psi^{\dagger}$. The commutation rules are now
$$
\begin{align*}
& \left\{\psi_{\alpha}(x), \psi_{\beta}^{\dagger}\left(x^{\prime}\right)\right\}=\delta_{\alpha \beta} \delta^{(0)}\left(x-x^{\prime}\right) \\
& \left\{\psi_{\alpha}(x), \psi_{\beta}\left(x^{\prime}\right)\right\}=0=\left\{\psi_{\alpha}^{\dagger}(x), \psi_{\beta}^{\dagger}\left(x^{\prime}\right)\right\} \tag{6.149}
\end{align*}
$$
Since in this case, $A^{0}=i$, the Lagrangian becomes:
$$
\begin{equation*}
\mathcal{L}=\frac{1}{2}\left[\psi_{.}^{\dagger} \alpha^{\mu} i\left(\partial_{\mu} \psi\right)-i\left(\partial_{\mu} \psi^{\dagger}\right) \alpha^{\mu} \psi\right]-m \psi_{.}^{\dagger} \beta \psi \tag{6.150}
\end{equation*}
$$
The current is then
$$
\begin{equation*}
j^{\mu}=\psi_{\cdot}^{\dagger} \alpha^{\mu} \psi \tag{6.151}
\end{equation*}
$$
Setting
$$
\begin{equation*}
\alpha^{\mu}=\beta \gamma^{\mu}, \quad \psi^{\dagger} \beta=\bar{\psi} \tag{6.152}
\end{equation*}
$$
the Lagrangian is
$$
\begin{equation*}
\mathcal{L}=\frac{1}{2}\left[\bar{\psi} \cdot \gamma^{\mu} i \partial_{\mu} \psi-i \partial_{\mu} \bar{\psi} \cdot \gamma^{\mu} \psi\right]-m \bar{\psi} \cdot \psi \tag{6.153}
\end{equation*}
$$
If we wish to interpret $j^{\mu}$ as the electric current, we can write down the Lagrangian for the electromagnetic field plus the charged Dirac field and specify the coupling so that the usual field equations arise, in which $j^{\mu}$ acts as the source for the vector potential. The form of the coupling term is of course limited by Lorentz invariance and the spin $\frac{1}{2}$ and spin 1 algebra. Thus the most general Lagrangian which can be formed in this case is
$$
\begin{align*}
\mathcal{L}= & \frac{1}{2}\left[\bar{\psi} \cdot \gamma^{\mu} i \partial_{\mu} \psi-i \partial_{\mu} \bar{\psi} \cdot \gamma^{\mu} \psi\right]-m \bar{\psi} \cdot \psi \\
& +\left[A_{\nu} \cdot \partial_{\mu} F^{\mu \nu}-F^{\mu \nu} \partial_{\mu} A_{\nu}\right]+\frac{1}{4} F^{\mu \nu} F_{\mu \nu} \\
& +e A_{\cdot}^{\mu} j_{\mu}+\frac{1}{2} \mu F^{\mu \nu}\left(\bar{\psi} \cdot \sigma_{\mu \nu} \psi\right) . \tag{6.154}
\end{align*}
$$
The symmetrization between $A_{\mu}$ and $j^{\mu}$ is necessary because in general, the sources for the $A^{\mu}$ are partly the $j_{\mu}$ and hence these need not commute. The last term, a Pauli moment, even though it appears covariant, may, in fact, not be covariant due to its operator properties. These show up only in higher order terms in the perturbation expansion.

The Lagrangian given by Eq. (6.154) is invariant under the rotation and reflection of $\chi_{(1)}$ and $\chi_{(2)}$, which correspond to the replacements
$$
\begin{equation*}
\psi \rightarrow e^{i \lambda(x)} \psi, \quad \bar{\psi} \rightarrow e^{-i \lambda(x)} \bar{\psi}, \quad A_{\mu} \rightarrow A_{\mu}+\frac{1}{e} \partial_{\mu} \lambda(x), \tag{6.155}
\end{equation*}
$$
and to the interchange of $\psi$ and $\bar{\psi}$, respectively. Note that in the second case-that of reflection-we must also replace $A_{\mu} \rightarrow-A_{\mu}, F_{\mu \nu} \rightarrow-F_{\mu \nu}$, in order to have $\mathcal{L}$ unaltered.

We obtain the equations of motion and generators by variations
$$
\begin{align*}
\delta \bar{\psi}: & {\left[\gamma^{\mu}\left(\frac{1}{i} \partial_{\mu}-e A_{\mu}\right)+m\right] \psi=0, }  \tag{6.156a}\\
\delta \psi: & \bar{\psi}\left[\gamma^{\mu}\left(i \partial_{\mu}^{T}-e A_{\mu}\right)+m\right]=0,  \tag{6.156b}\\
\delta F_{\mu \nu}: & \partial_{\mu} A_{\nu}-\partial_{\nu} A_{\mu}=F_{\mu \nu},  \tag{6.156c}\\
\delta A_{\mu}: & \partial_{\nu} F^{\mu \nu}=e \bar{\psi} \cdot \gamma^{\mu} \psi \equiv j^{\mu} . \tag{6.156d}
\end{align*}
$$
The generators are
$$
\begin{equation*}
G=\int d \sigma_{\mu} \frac{1}{2}\left[\bar{\psi} i \gamma^{\mu} \delta \psi-\delta \bar{\psi} i \gamma^{\mu} \psi-A_{\nu} \delta F^{\mu \nu}-F^{\mu v} \delta A_{\nu}\right], \tag{6.157}
\end{equation*}
$$
and by adding appropriate 4-divergences, this becomes
$$
\begin{equation*}
G=\int d \sigma_{\mu}\left[\bar{\psi} i \gamma^{\mu} \delta \psi-F^{\mu v} \delta A_{v}\right]=\int d \sigma_{0}\left[\bar{\psi} i \gamma^{0} \delta \psi-F^{0 k} \delta A_{k}\right], \tag{6.158}
\end{equation*}
$$
in a local coordinate system. In this form, the independent variables appear to be only $\psi$ and the $A_{k} . \psi$ is definitely an independent variable; its equation of motion is Eq. (6.156a). To re-examine the electromagnetic field, we write Eqs. (6.156c) and (6.156d) as
$$
\begin{align*}
\partial_{0} A_{k} & =\partial_{k} A_{0}+F_{0 k}, & & F_{k \ell}=\partial_{k} A_{\ell}-\partial_{\ell} A_{k}, \\
\partial_{0} F^{k 0} & =j^{k}-\partial_{\ell} F^{k 0}, & & \partial_{k} F^{0 k}=j^{0} . \tag{6.159}
\end{align*}
$$
Since we have the freedom of making a gauge transformation, wherein the longitudinal components of $A^{\mu}$ are then arbitrary, it is advantageous to re-write equations (6.159) in terms of transverse ( T ) and longitudinal (L) components:
(1) $\partial_{0} A_{k}^{\mathrm{T}}=F_{0 k}^{\mathrm{T}}$,
(2) $\partial_{0} F^{k 0 \mathrm{~T}}=j^{k \mathrm{~T}}-\partial_{\ell} F^{k \ell}$,
(3) $F_{k \ell}=F_{k \ell}^{\mathrm{L}}=\partial_{k} A_{\ell}-\partial_{\ell} A_{k}$, (4) $\partial_{0} A_{k}^{\mathrm{L}}=\partial_{k} A_{0}+F_{0 k}^{\mathrm{L}}$,
(5) $\partial_{0} F^{k 0 \mathrm{~L}}=j^{k \mathrm{~L}}$,
(6) $\partial_{k} F^{0 k L}=j^{0}$.

Here, $F_{0 k}^{\mathrm{L}} \neq 0$ since the electric field is no longer divergence-free. The solution of item (6) is immediately
$$
\begin{equation*}
F^{0 k \mathrm{~L}}=-\partial^{k} \int d \sigma^{(0)} \mathcal{D}_{(0)}\left(x-x^{\prime}\right) j^{0}\left(x^{\prime}\right) \tag{6.161}
\end{equation*}
$$
demonstrating that the longitudinal part of the electromagnetic field is not a kinematically independent quantity, but depends on the $j^{0}$ of all the charged particles present. Note that item (5) is not an independent statement, since it is the result of the conservation law for $j^{\mu}(x)$. Since $A_{k}^{\mathrm{L}}=\partial_{k} \Lambda(x)$, using item (5) shows that
$$
\begin{equation*}
A_{0}=\partial_{0} \Lambda(x)+\int d \sigma^{\prime} \mathcal{D}^{(0)}\left(x-x^{\prime}\right) j_{0}\left(x^{\prime}\right) \tag{6.162}
\end{equation*}
$$
i.e., $A_{0}$ is completely arbitrary, corresponding to the freedom of choice of $\Lambda(x)$.

The generator in Eq. (6.158) can now be written as
$$
\begin{equation*}
G=\int d \sigma\left[\bar{\psi}^{i} \gamma^{0} \delta \psi-F^{0 k \mathrm{~T}} \delta A_{k}^{\mathrm{T}}-F^{0 k \mathrm{~L}} \delta A_{k}^{\mathrm{L}}\right] \tag{6.163}
\end{equation*}
$$
By the addition of a surface term, the last term in the integrand in (6.163) becomes equal to $=j^{0} \delta \Lambda$, which does not refer to the kinematically independent part of the electromagnetic field, and gives the generator for the change in the Dirac field when an infinitesimal gauge transformation is made-See Eq. (6.132). The electromagnetic field commutation rules are again as given in equations (6.113a) and (6.113b); the anti-commutation relation for the Dirac fields works out to be
$$
\begin{equation*}
\left\{\psi(x), \bar{\psi}\left(x^{\prime}\right)\right\}=\gamma^{0} \delta^{(0)}\left(x-x^{\prime}\right)=-\gamma_{0} \delta^{(0)}\left(x-x^{\prime}\right) \rightarrow-\gamma_{\mu} \delta^{(\mu)}\left(x-x^{\prime}\right) \tag{6.164}
\end{equation*}
$$
Using the non-Hermitian $\psi, \bar{\psi}$, the effect of the charge reflection operator $\mathcal{C}$ is to interchange the fields:
$$
\begin{equation*}
\mathcal{C}^{-1} \psi \mathcal{C}=\psi^{\dagger}, \quad \mathcal{C}^{-1} \psi^{\dagger} \mathcal{C}=\psi \tag{6.165}
\end{equation*}
$$
In order to maintain the invariance of $\mathcal{L}$, we must now also require that this unitary operator reverse the sign of the $A_{\mu}$.
$$
\begin{equation*}
\mathcal{C}^{-1} A^{\mu} \mathcal{C}=-A^{\mu} \tag{6.166}
\end{equation*}
$$
Again, $\mathcal{C}^{2}=+1$, and therefore its eigenvalues are $\mathcal{C}= \pm 1$. From the arguments of the preceding section, use of the transformation:
$$
\begin{equation*}
\mathcal{C}^{-1} Q \mathcal{C}=-Q \tag{6.167}
\end{equation*}
$$
permits a classification, in terms of the quantum number $c^{\prime}$, for systems of zero net charge. For example, consider the production of photons by repeated application of the operator $A$ (actually $A^{(-)}$, a photon creation operator) to the vacuum state $|0\rangle$, characterized by $c^{\prime}=+1$, and assume that no coupling terms are present in $\mathcal{L}$ (i.e., $e=0$ ). If $A$ is applied $n$ times to $|0\rangle$ then by (6.166)
$$
\begin{equation*}
\mathcal{C}(A \cdots A)|0\rangle=(-1)^{n}(A \cdots A)|0\rangle \tag{6.168}
\end{equation*}
$$
and we have a state $\left|\left(A^{\prime} \cdots A^{\prime}\right)\right\rangle$ whose eigenvalue of $\mathcal{C}$ depends on the (even or odd) number of photons present: $C^{\prime}=(-1)^{n}= \pm 1$. Whichever +1 or -1 eigenvalue of $c^{\prime}$ we begin with persists as the coupling is turned on, even though what is now called the state of $n$ photons is a superposition of many different states.

As an example of this, let us consider the decay of positronium. In the absence of the coupling term between $A_{\mu}$ and $\psi$ (i.e., $e=0$ ), the system of ( $e^{+}+e^{-}$) is stable, and has a definite eigenvalue $c^{\prime}$. When the coupling is introduced, the only permitted final states will be those of the same eigenvalue. From our previous interpretation, $\psi$ is the operator which creates a particle $e^{-}$and annihilates $e^{+}$, and conversely for $\psi^{\dagger}$. To obtain a state with $e^{-}$at $x$ and $e^{+}$at $x^{\prime}$, we form $\left(\psi^{\dagger}(x) \cdot \psi\left(x^{\prime}\right)\right)|0\rangle$, and recognize that the actual state is a superposition of these with the amplitude wave function $\psi\left(x, x^{\prime}\right)$. Using (6.165) we then have
$$
\begin{align*}
\mathcal{C}\left|e^{+} e^{-}\right\rangle & =\mathcal{C} \iint(d x)\left(d x^{\prime}\right) \psi\left(x, x^{\prime}\right)\left(\psi^{\dagger}(x) \cdot \psi\left(x^{\prime}\right)\right)|0\rangle \\
& =-\iint(d x)\left(d x^{\prime}\right) \psi\left(x, x^{\prime}\right)\left(\psi^{\dagger}\left(x^{\prime}\right) \cdot \psi(x)\right)|0\rangle \\
& =-\iint(d x)\left(d x^{\prime}\right) \psi\left(x^{\prime}, x\right)\left(\psi^{\dagger}(x) \cdot \psi\left(x^{\prime}\right)\right)|0\rangle . \tag{6.169}
\end{align*}
$$
If the wave function $\psi\left(x, x^{\prime}\right)$ is symmetric, then $c^{\prime}=-1$; if $\psi\left(x, x^{\prime}\right)$ is antisymmetric, $c^{\prime}=+1$. As the coupling is now turned on, this no longer remains the exact state, but the $c^{\prime}$ value remains the same. Thus we have the selection rule for positronium: from a ${ }^{1} S$ state it can decay only into an even number of photons ( $c^{\prime}=+1, \psi\left(x, x^{\prime}\right)$ is antisymmetric), from a ${ }^{3} S$ state it can decay only in to an odd number of photons ( $c^{\prime}=-1, \psi\left(x, x^{\prime}\right)$ is symmetric).

## Chapter 7 <br> Nonrelativistic Source Theory

The following is based on lectures given at Schwinger by Harvard in Spring 1969, as transcribed by the author. The goal was to construct a general theory of particles, in a nonrelativistic context. As such, this provides a transition between nonrelativistic quantum mechanics and source theory, the general development of which was given later in Schwinger's three-volume treatise (Schwinger 1970b, 1973, 1989a).

The measurement symbol, or projection operator, which forms the basis for Schwinger's approach to quantum mechanics (Schwinger 2001),
$$
\begin{equation*}
\left|a^{\prime}, b^{\prime}\right|=\left|a^{\prime}\right\rangle\left\langle b^{\prime}\right| \tag{7.1}
\end{equation*}
$$
represents a idealized process in which the state $b^{\prime}$ is annihilated and a new state $a^{\prime}$ is produced. Wouldn't it be useful to separate these processes? Recall how oscillator states, as discussed in Chap. 4, were created by forces. We generalize to sources which can create and destroy particles. A scattering process, which occurs in a more or less localized scattering region, can be abstracted into a two-stage process, in which first an incoming particle is absorbed, and then a new particle is created, as sketched in Fig. 7.1. In the individual processes the source $K$ acts to create or annihilate the particle.

What does this mean quantum mechanically? We must describe the processes by probability amplitudes; we want to construct everything from the one particle production mechanism,
$$
\begin{equation*}
\left\langle 1_{\mathbf{p}+\mid} \mid 0_{-}\right\rangle^{K}, \quad\left\langle 0_{+} \mid 1_{\mathbf{p}-}\right\rangle^{K}, \tag{7.2}
\end{equation*}
$$
where the first amplitude represents the process in which a single particle state of momentum $\mathbf{p}$ is created, where before the source acts only the vacuum state is present, while the second represents the process in which a single particle of momentum $\mathbf{p}$ is absorbed after which the vacuum state is present.

Because the processes occur in space and time, the source must be a function $K(\mathbf{r}, t)$, which exhibits a certain degree of localizability. How does the effectiveness

Fig. 7.1 A scattering process in which a particle of momentum $\mathbf{p}_{2}$ scatters into a state of a particle with momentum $\mathbf{p}_{1}$ can be thought of as a combination of two processes: One in which the particle is created by a source $K$ in the state $\mathbf{p}_{1}$ and a second in which the particle of momentum $\mathbf{p}_{2}$ is absorbed by the source $K$
![](https://cdn.mathpix.com/cropped/2025_02_21_13f260749f40b979ea80g-098.jpg?height=512&width=514&top_left_y=198&top_left_x=827)
of the source vary with different degrees of freedom? The complementary measure is the corresponding function in momentum space $K(\mathbf{p}, E)$, where, nonrelativistically, $E=p^{2} /(2 m)$. We expect the relationship between the production amplitude and the source function to be, at least for a weak source,
$$
\begin{equation*}
\left\langle 1_{\mathbf{p}+} \mid 0_{-}\right\rangle^{K}=\sqrt{\frac{(d \mathbf{p})}{(2 \pi)^{3}}}(-i) K(\mathbf{p}) . \tag{7.3}
\end{equation*}
$$
Here $(d \mathbf{p})=d p_{1} d p_{2} d p_{3}$. The $-i$ factor is purely conventional for later convenience. The square root of the momentum-space element is present to properly account for the density of states in the continuum picture. To compute the annihilation amplitude $\left\langle 0_{+} \mid 1_{\mathbf{p}-}\right\rangle$, we can use orthogonality, $\left\langle 1_{\mathbf{p}-} \mid 0_{-}\right\rangle=0$. This must be maintained by the dynamics. The completeness relation
$$
\begin{equation*}
1=\left|0_{+}\right\rangle\left\langle 0_{+}\right|+\sum_{\mathbf{p}}\left|1_{\mathbf{p}+}\right\rangle\left\langle 1_{\mathbf{p}+}\right|+\sum_{\mathbf{p}, \mathbf{p}^{\prime}}\left|1_{\mathbf{p}+} 1_{\mathbf{p}^{\prime}+}\right\rangle\left\langle 1_{\mathbf{p}+1^{\prime}} 1_{\mathbf{p}^{\prime}+}\right|+\ldots, \tag{7.4}
\end{equation*}
$$
implies
$$
\begin{equation*}
0=\left\langle 1_{\mathbf{p}-} \mid 0_{+}\right\rangle^{K}\left\langle 0_{+} \mid 0_{-}\right\rangle^{K}+\sum_{\mathbf{p}^{\prime}}\left\langle 1_{\mathbf{p}-} \mid 1_{\mathbf{p}^{\prime}+}\right\rangle^{K}\left\langle 1_{\mathbf{p}^{\prime}+} \mid 0_{-}\right\rangle^{K}+\ldots, \tag{7.5}
\end{equation*}
$$
where we shall consider a weak source, so we will drop the higher terms. To lowest order (in powers of the source)
$$
\begin{equation*}
\left\langle 0_{+} \mid 0_{-}\right\rangle^{0}=1, \quad\left\langle 1_{\mathbf{p}-} \mid 1_{\mathbf{p}^{\prime}+}\right\rangle^{0}=\delta_{\mathbf{p p}^{\prime}}, \tag{7.6}
\end{equation*}
$$
so
$$
\begin{equation*}
0=\left\langle 1_{\mathbf{p}-} \mid 0_{+}\right\rangle^{K}+\left\langle 1_{\mathbf{p}+} \mid 0_{-}\right\rangle^{K}, \tag{7.7}
\end{equation*}
$$
or
$$
\begin{equation*}
\left\langle 0_{+} \mid 1_{\mathbf{p}-}\right\rangle^{K}=-\left[\left\langle 1_{\mathbf{p}+} \mid 0_{-}\right\rangle^{K}\right]^{*} \tag{7.8}
\end{equation*}
$$
Therefore, the effectiveness of producing or absorbing a particle by a weak source is
$$
\begin{equation*}
\left\langle 1_{\mathbf{p}+} \mid 0_{-}\right\rangle^{K}=\sqrt{\frac{(d \mathbf{p})}{(2 \pi)^{3}}}(-i) K(\mathbf{p}), \quad\left\langle 0_{+} \mid 1_{\mathbf{p}-}\right\rangle^{K}=\sqrt{\frac{(d \mathbf{p})}{(2 \pi)^{3}}}(-i) K(\mathbf{p})^{*} . \tag{7.9}
\end{equation*}
$$
These equations, in fact, define what we mean by a source.
Now we need to seek the relation to the space-time description. What happens when a source is displaced,
$$
\begin{equation*}
\bar{K}(\mathbf{r}, t)=K(\mathbf{r}+\mathbf{R}, t+T) \tag{7.10}
\end{equation*}
$$
Relativity (here Galilean) means that the same effect occurs by displacing the spacetime coordinate system to which the initial and final states are referred, the generator of such an infinitesimal displacement being
$$
\begin{equation*}
G=\mathbf{P} \cdot \delta \boldsymbol{\epsilon}-H \delta t \tag{7.11}
\end{equation*}
$$
which implies that the displacement operator is
$$
\begin{equation*}
U=e^{i \mathbf{P} \cdot \mathbf{R}-i H T} \tag{7.12}
\end{equation*}
$$
Thus the 1 particle states change according to
$$
\begin{equation*}
\left\langle 1_{\mathbf{p}}\right| \rightarrow\left\langle 1_{\mathbf{p}}\right| e^{i \mathbf{P} \cdot \mathbf{R}-i H T}=e^{i \mathbf{p} \cdot \mathbf{R}-i E T}\left\langle 1_{\mathbf{p}}\right|, \tag{7.13}
\end{equation*}
$$
while the vacuum state is unchanged,
$$
\begin{equation*}
\left\langle 0_{+}\right| \rightarrow\left\langle 0_{+}\right| . \tag{7.14}
\end{equation*}
$$
Thus if the one particle amplitude is proportional to $K(\mathbf{p})$,
$$
\begin{equation*}
\left\langle 1_{\mathbf{p}+} \mid 0_{-}\right\rangle^{K} \sim K(\mathbf{p}) \tag{7.15}
\end{equation*}
$$
that of the displaced source is
$$
\begin{equation*}
\left\langle 1_{\mathbf{p}+} \mid 0_{-}\right\rangle^{\bar{K}} \sim e^{i \mathbf{p} \cdot \mathbf{R}-i E T} K(\mathbf{p}) \sim \bar{K}(\mathbf{p}) \tag{7.16}
\end{equation*}
$$
This implies that $K(\mathbf{p})$ is obtained by Fourier transforming $K(\mathbf{r}, t)$,
$$
\begin{equation*}
K(\mathbf{p})=K(\mathbf{p}, E)=\int(d \mathbf{r}) d t e^{-i \mathbf{p} \cdot \mathbf{r}+i E t} K(\mathbf{r}, t) \tag{7.17}
\end{equation*}
$$
Fig. 7.2 Exchange of a particle between a source $K_{2}$ and a source $K_{1}$, where the latter is localized later than the former. Before the first source acts, the system is in the vacuum state, as it is after the second source acts. Time is imagined as plotted vertically in these "causal" diagrams
![](https://cdn.mathpix.com/cropped/2025_02_21_13f260749f40b979ea80g-100.jpg?height=419&width=505&top_left_y=211&top_left_x=832)

In general, one wants to remove the connection between $E$ and $\mathbf{p}$.
What about strong sources? Remember for the oscillator, the most basic object was the ground-state persistence amplitude $\left\langle 0_{+} \mid 0_{-}\right\rangle^{K}$. The latter contains the process of the exchange of particles between temporally separated sources, as illustrated in Fig. 7.2. Here a single particle is emitted by source $K_{2}$ and absorbed later by the source $K_{1}$. Before and after either source acts, the system is in the vacuum, noparticle, state. We imagine the total source to be the sum of the two components,
$$
\begin{equation*}
K(x)=K_{1}(x)+K_{2}(x) . \tag{7.18}
\end{equation*}
$$
The decomposition shown is called a causal arrangement. Because we are so far considering weak sources, when we insert a complete set of states at an intermediate time between the action of the two sources, the vacuum persistence amplitude is
$$
\begin{equation*}
\left\langle 0_{+} \mid 0_{-}\right\rangle^{K}=\left\langle 0_{+} \mid 0_{-}\right\rangle^{K_{1}}\left\langle 0_{+} \mid 0_{-}\right\rangle^{K_{2}}+\sum_{\mathbf{p}}\left\langle 0_{+} \mid 1_{\mathbf{p}-}\right\rangle^{K_{1}}\left\langle 1_{\mathbf{p}+\mid} \mid 0_{-}\right\rangle^{K_{2}}+\ldots . \tag{7.19}
\end{equation*}
$$
Now using the one-particle creation and annihilation amplitudes (7.9), together with the Fourier transform (7.17) we see that the one-particle exchange term here is
$$
\begin{equation*}
-i \int(d \mathbf{r}) d t\left(d \mathbf{r}^{\prime}\right) d t^{\prime} K_{1}^{*}(\mathbf{r}, t)\left[-i \int \frac{(d \mathbf{p})}{(2 \pi)^{3}} e^{i \mathbf{p} \cdot\left(\mathbf{r}-\mathbf{r}^{\prime}\right)-i E\left(t-t^{\prime}\right)}\right] K_{2}\left(\mathbf{r}^{\prime}, t^{\prime}\right) \tag{7.20}
\end{equation*}
$$
But the source is a unitary whole-results can depend only on the total source $K$ and not its parts. This is a statement of the uniformity of space and time. This will introduce terms that will refer to each component source separately; what we don't want is a term that involves $K_{2}^{*}$ and $K_{1}$; therefore, we define the retarded Green's function
$$
\begin{equation*}
G\left(\mathbf{r}-\mathbf{r}^{\prime}, t-t^{\prime}\right)=-i \eta\left(t-t^{\prime}\right) \int \frac{(d \mathbf{p})}{(2 \pi)^{3}} e^{i \mathbf{p} \cdot\left(\mathbf{r}-\mathbf{r}^{\prime}\right)-i E\left(t-t^{\prime}\right)}, \tag{7.21}
\end{equation*}
$$
Fig. 7.3 Exchange of noninteracting particles between spatially nonoverlapping sources. Particles emitted by the lower source of $K^{(\alpha)}$ are only detected by the upper source of the same set. It is arranged that there is no cross-coupling
![](https://cdn.mathpix.com/cropped/2025_02_21_13f260749f40b979ea80g-101.jpg?height=331&width=593&top_left_y=316&top_left_x=666)
in terms of which we infer
$$
\begin{equation*}
\left\langle 0_{+} \mid 0_{-}\right\rangle^{K}=1-i \int(d \mathbf{r}) d t\left(d \mathbf{r}^{\prime}\right) d t^{\prime} K^{*}(\mathbf{r}, t) G\left(\mathbf{r}-\mathbf{r}^{\prime}, t-t^{\prime}\right) K\left(\mathbf{r}^{\prime}, t^{\prime}\right) \tag{7.22}
\end{equation*}
$$
The Green's function satisfies the differential equation
$$
\begin{equation*}
\left[i \frac{\partial}{\partial t}-\frac{\left(\frac{1}{i} \nabla\right)^{2}}{2 m}\right] G\left(\mathbf{r}-\mathbf{r}^{\prime}, t-t^{\prime}\right)=\delta\left(t-t^{\prime}\right) \delta\left(\mathbf{r}-\mathbf{r}^{\prime}\right) \tag{7.23}
\end{equation*}
$$
Now we want to remove the restriction to weak sources. Suppose we have a beam of noninteracting particles, detected for example by spatially separated sources, as illustrated in Fig. 7.3. Each particle is produced and detected by a single pair of weak sources $K^{(\alpha)}, \alpha=1,2,3, \ldots$. There is no interaction between different pairs of sources. Thus the vacuum persistence amplitude for this arrangement is
$$
\begin{equation*}
\left\langle 0_{+} \mid 0_{-}\right\rangle^{K}=\prod_{\alpha}\left[1-i \int(d \mathbf{r}) d t\left(d \mathbf{r}^{\prime}\right) d t^{\prime} K^{*}(\mathbf{r}, t) G\left(\mathbf{r}-\mathbf{r}^{\prime}, t-t^{\prime}\right) K\left(\mathbf{r}^{\prime}, t^{\prime}\right)\right]^{(\alpha)} \tag{7.24}
\end{equation*}
$$
because each source is weak. But only $K$, not $K^{(\alpha)}$ should enter; physics shouldn't depend on the channel. So
$$
\begin{equation*}
\left\langle 0_{+} \mid 0_{-}\right\rangle^{K}=\prod_{\alpha} e^{-i \int\left(K^{*} G K\right)^{(\alpha)}}=e^{-i \sum_{\alpha} \int K^{(\alpha) *} G K^{(\alpha)}}=e^{-i \int K^{*} G K} \tag{7.25}
\end{equation*}
$$
where the last step depends upon the arrangement that prohibits cross coupling between the component sources. This looks just like the structure we saw for the harmonic oscillator (4.91), except now the integrals are over space as well as time:

Fig. 7.4 Exchange of noninteracting particles between causally separated sources, $K_{2}$ and $K_{1}$
![](https://cdn.mathpix.com/cropped/2025_02_21_13f260749f40b979ea80g-102.jpg?height=308&width=229&top_left_y=320&top_left_x=1013)
$$
\begin{equation*}
\left\langle 0_{+} \mid 0_{-}\right\rangle^{K}=e^{-i \int(d \mathbf{r}) d t\left(d \mathbf{r}^{\prime}\right) d t^{\prime} K^{*}(\mathbf{r}, t) G\left(\mathbf{r}-\mathbf{r}^{\prime}, t-t^{\prime}\right) K\left(\mathbf{r}^{\prime}, t^{\prime}\right)} \tag{7.26}
\end{equation*}
$$
We will apply this to generalized (not weak) emission and absorption processes, but still assuming that the particles are not interacting.

Figure 7.4 shows the exchange of noninteracting particles between causally separated sources, $K=K_{1}+K_{2}$. The total vacuum persistence amplitude is
$$
\begin{equation*}
\left\langle 0_{+} \mid 0_{-}\right\rangle^{K}=\left\langle 0_{+} \mid 0_{-}\right\rangle^{K_{1}}\left\langle 0_{+} \mid 0_{-}\right\rangle^{K_{2}} e^{-i \int K_{1}^{*} G K_{2}} . \tag{7.27}
\end{equation*}
$$
The fact that there is a causal relation between the two sources means that
$$
\begin{equation*}
G\left(\mathbf{r}-\mathbf{r}^{\prime}, t-t^{\prime}\right)=-i \int \frac{(d \mathbf{p})}{(2 \pi)^{3}} e^{i \mathbf{p} \cdot\left(\mathbf{r}-\mathbf{r}^{\prime}\right)-i E\left(t-t^{\prime}\right)} \tag{7.28}
\end{equation*}
$$
Define the discrete specification of the source in momentum space as
$$
\begin{equation*}
K_{p}=\sqrt{\frac{(d \mathbf{p})}{(2 \pi)^{3}}} K(p) . \tag{7.29}
\end{equation*}
$$
Then the final exponential term in Eq. (7.27) is
$$
\begin{equation*}
e^{\sum_{p}\left(-i K_{1 p}\right)^{*}\left(i K_{2 p}\right)} \tag{7.30}
\end{equation*}
$$
On the other hand, if we insert a complete set of multiparticle states at an intermediate time, we have
$$
\begin{equation*}
\left\langle 0_{+} \mid 0_{-}\right\rangle^{K}=\sum_{\{n\}}\left\langle 0_{+} \mid\{n\}\right\rangle^{K_{1}}\left\langle\{n\} \mid 0_{-}\right\rangle^{K_{2}} \tag{7.31}
\end{equation*}
$$
Compare this with the expansion of Eq. (7.27):
$$
\begin{equation*}
\left\langle 0_{+} \mid 0_{-}\right\rangle^{K}=\left\langle 0_{+} \mid 0_{-}\right\rangle^{K_{1}} \prod_{\mathbf{p}} \sum_{n_{\mathbf{p}}=0}^{\infty} \frac{\left(-i K_{1 p}^{*}\right)^{n_{\mathbf{p}}}}{\sqrt{n_{\mathbf{p}}!}} \frac{\left(-i K_{2 p}^{*}\right)^{n_{\mathbf{p}}}}{\sqrt{n_{\mathbf{p}}!}}\left\langle 0_{+} \mid 0_{-}\right\rangle^{K_{2}} \tag{7.32}
\end{equation*}
$$
where the occupation numbers in a given momentum cell are given by $\{n\}=\left\{n_{\mathbf{p}}\right\}$. From this we infer the probability amplitudes for producing and absorbing particles by a strong source:
$$
\begin{align*}
& \left\langle\{n\} \mid 0_{-}\right\rangle^{K}=\prod_{\mathbf{p}} \frac{\left(-i K_{\mathbf{p}}\right)^{n_{\mathbf{p}}}}{\sqrt{n_{\mathbf{p}}!}}\left\langle 0_{+} \mid 0_{-}\right\rangle^{K},  \tag{7.33a}\\
& \left\langle 0_{+} \mid\{n\}\right\rangle^{K}=\prod_{\mathbf{p}} \frac{\left(-i K_{\mathbf{p}}^{*}\right)^{n_{\mathbf{p}}}}{\sqrt{n_{\mathbf{p}}!}}\left\langle 0_{+} \mid 0_{-}\right\rangle^{K} . \tag{7.33b}
\end{align*}
$$
As a check of this, we verify that the total probability must be unity:
$$
\begin{equation*}
1=\sum_{\{n\}} p(\{n\}, 0)^{K}=\left|\left\langle 0_{+} \mid 0_{-}\right\rangle^{K}\right|^{2} e^{\sum_{\mathbf{p}}\left|K_{\mathbf{p}}\right|^{2}} \tag{7.34}
\end{equation*}
$$
Independently,
$$
\begin{align*}
\left|\left\langle 0_{+} \mid 0_{-}\right\rangle^{K}\right|^{2}= & \exp \left[-\int(d \mathbf{r}) d t\left(\mathbf{r}^{\prime}\right) d t^{\prime} K^{*}(\mathbf{r}, t) i G\left(\left(\mathbf{r}-\mathbf{r}^{\prime}, t-t^{\prime}\right) K\left(\mathbf{r}^{\prime}, t^{\prime}\right)\right.\right. \\
& -\int(d \mathbf{r}) d t\left(\mathbf{r}^{\prime}\right) d t^{\prime} K^{*}(\mathbf{r}, t)\left[i G\left(\left(\mathbf{r}^{\prime}-\mathbf{r}, t^{\prime}-t\right)\right]^{*} K\left(\mathbf{r}^{\prime}, t^{\prime}\right)\right] \tag{7.35}
\end{align*}
$$
But the combinations of Green's functions appearing here is
$$
\begin{equation*}
i G\left(\left(\mathbf{r}-\mathbf{r}^{\prime}, t-t^{\prime}\right)+\left[i G\left(\left(\mathbf{r}^{\prime}-\mathbf{r}, t^{\prime}-t\right)\right]^{*}=\int \frac{(d \mathbf{p})}{(2 \pi)^{3}} e^{i \mathbf{p} \cdot\left(\mathbf{r}-\mathbf{r}^{\prime}\right)-i E\left(t-t^{\prime}\right)}\right.\right. \tag{7.36}
\end{equation*}
$$
which is a solution of the homogeneous equation, so indeed
$$
\begin{equation*}
\left|\left\langle 0_{+} \mid 0_{-}\right\rangle^{K}\right|^{2}=e^{-\sum_{\mathbf{p}}\left|K_{\mathbf{p}}\right|^{2}} \tag{7.37}
\end{equation*}
$$
so the probability condition (7.34) is satisfied.
The description so far of the exchange of particles between sources is a sort of action at a distance picture. We are often concerned with excitations produced by a source-a more local description. A test source is used to measure effects. So let us add an additional infinitesimal source,
$$
\begin{equation*}
K(\mathbf{r}, t) \rightarrow K(\mathbf{r}, t)+\delta K(\mathbf{r}, t) \tag{7.38}
\end{equation*}
$$
which results in the following infinitesimal change in the action,
$$
\begin{equation*}
\delta W=-\int(d \mathbf{r}) d t\left[\delta K^{*}(\mathbf{r}, t) \psi(\mathbf{r}, t)+\delta K(\mathbf{r}, t) \psi^{*}(\mathbf{r}, t)\right] \tag{7.39}
\end{equation*}
$$
which defines new objects which refer to the pre-existing situation. Here
$$
\begin{align*}
\psi(\mathbf{r}, t) & =\int\left(d \mathbf{r}^{\prime}\right) d t^{\prime} G\left(\mathbf{r}-\mathbf{r}^{\prime}, t-t^{\prime}\right) K\left(\mathbf{r}^{\prime}, t\right)  \tag{7.40}\\
\psi^{*}(\mathbf{r}, t) & =\int\left(d \mathbf{r}^{\prime}\right) d t^{\prime} K^{*}\left(\mathbf{r}^{\prime}, t\right) G\left(\mathbf{r}^{\prime}-\mathbf{r}, t^{\prime}-t\right) K\left(\mathbf{r}^{\prime}, t^{\prime}\right) \tag{7.41}
\end{align*}
$$
the latter is not the complex conjugate of $\psi$, because
$$
\begin{equation*}
G\left(\mathbf{r}-\mathbf{r}^{\prime}, t-t^{\prime}\right)^{*} \neq G\left(\mathbf{r}^{\prime}-\mathbf{r}, t^{\prime}-t\right), \tag{7.42}
\end{equation*}
$$
$G$ being the retarded Green's function. The differential equation satisfied by the Green's function (7.23) is
$$
\begin{equation*}
\left(i \frac{\partial}{\partial t}-T\right) G\left(\mathbf{r}-\mathbf{r}^{\prime}, t-t^{\prime}\right)=\delta\left(\mathbf{r}-\mathbf{r}^{\prime}\right) \delta\left(t-t^{\prime}\right) \tag{7.43}
\end{equation*}
$$
where $T=-\nabla^{2} /(2 m)$ is the kinetic energy differential operator. Therefore, the field $\psi$ satisfies
$$
\begin{equation*}
\left(i \frac{\partial}{\partial t}-T\right) \psi(\mathbf{r}, t)=K(\mathbf{r}, t) \tag{7.44}
\end{equation*}
$$
This is analogous to the equation satisfied by the harmonic oscillator variable (4.65), or
$$
\begin{equation*}
\left(i \frac{d}{d t}-\omega\right) y(t)=K(t) \tag{7.45}
\end{equation*}
$$
Now because
$$
\begin{equation*}
\left(-i \frac{\partial}{\partial t}-T\right) G\left(\mathbf{r}^{\prime}-\mathbf{r}, t^{\prime}-t\right)=\delta\left(\mathbf{r}-\mathbf{r}^{\prime}\right) \delta\left(t-t^{\prime}\right) \tag{7.46}
\end{equation*}
$$
the field $\psi^{*}$ satisfies
$$
\begin{equation*}
\left(-i \frac{\partial}{\partial t}-T\right) \psi^{*}(\mathbf{r}, t)=K^{*}(\mathbf{r}, t) \tag{7.47}
\end{equation*}
$$
which is the complex conjugate equation. The boundary conditions are different in the two cases: $\psi$ is a retarded solution, while $\psi^{*}$ is an advanced solution.

What does $W$ have to do with action? Let us write the alternative forms
$$
\begin{align*}
W & =-\int(d \mathbf{r}) d t K^{*}(\mathbf{r}, t) \psi(\mathbf{r}, t)=-\int(d \mathbf{r}) d t \psi^{*}(\mathbf{r}, t) K(\mathbf{r}, t) \\
& =-\int(d \mathbf{r}) d t \psi^{*}(\mathbf{r}, t)\left(i \frac{\partial}{\partial t}-T\right) \psi(\mathbf{r}, t) \tag{7.48}
\end{align*}
$$
Combining these forms appropriately, we can write
$$
\begin{equation*}
W=\int(d \mathbf{r}) d t\left[\psi^{*}\left(i \frac{\partial}{\partial t}-T\right) \psi-K^{*} \psi-\psi^{*} K\right] . \tag{7.49}
\end{equation*}
$$
Think of this last as a functional of $K, K^{*}, \psi$, and $\psi^{*}$, so
$$
\begin{equation*}
\delta W=\int(d \mathbf{r}) d t\left[-\delta K^{*} \psi-\psi^{*} \delta K\right]+\delta_{\psi, \psi^{*} W} \tag{7.50}
\end{equation*}
$$
But the definition (7.40) of $\psi$ and $\psi^{*}$ shows that the last variation is zero, which is a statement of the stationary action principle:
$$
\begin{align*}
\delta_{\psi, \psi^{*} W}= & \int(d \mathbf{r}) d t \delta \psi^{*}\left[\left(i \frac{\partial}{\partial t}-T\right) \psi-K\right] \\
& +\int(d \mathbf{r}) d t \delta \psi\left[\left(-i \frac{\partial}{\partial t}-T\right) \psi^{*}-K^{*}\right]=0 \tag{7.51}
\end{align*}
$$
That is, the stationary action principle, that $W$ is unchanged under infinitesimal field variations, supplies the equations of motion (7.44) and (7.47).

Fundamental to physics is the notion of the uniformity of space and time, that the laws of physics are independent of the locale. This is reflected in the indistinguishability of identical particles, which, in turn, is reflected in the probability amplitude of a source producing a multi-particle distribution, Eq. (7.33a), which says all that is possible. Experimentally, we know of two kinds of statistics. Here $n_{\mathbf{p}}$ is unlimited, so this cannot refer to Fermi-Dirac statistics. In the Bose-Einstein case we have stimulated emission. Let us see this.

Figure 7.5 shows the interchange of noninteracting particles between sources $K_{2}$ and $K_{1}$, but now with a weak source $K_{0}$ in between. The total source is composed of three causally separated pieces,
$$
\begin{equation*}
K=K_{1}+K_{0}+K_{2} . \tag{7.52}
\end{equation*}
$$
Using this causal arrangement, the vacuum persistence amplitude is
$$
\begin{align*}
\left\langle 0_{+} \mid 0_{-}\right\rangle^{K} & =e^{-i \int K^{*} G K} \\
& =\left\langle 0_{+} \mid 0_{-}\right\rangle^{K_{1}+K_{2}}\left\langle 0_{+} \mid 0_{-}\right\rangle^{K_{0}} e^{-i\left[\int K_{1}^{*} G K_{0}+\int K_{0}^{*} G K_{2}\right]} \tag{7.53}
\end{align*}
$$
Fig. 7.5 Effect of a weak source $K_{0}$ acting at an intermediate time between strong sources $K_{2}$ and $K_{1}$
![](https://cdn.mathpix.com/cropped/2025_02_21_13f260749f40b979ea80g-106.jpg?height=525&width=254&top_left_y=307&top_left_x=1000)

Here, because the disturbance by $K_{0}$ is regarded as weak, we approximate $\left\langle 0_{+} \mid 0_{-}\right\rangle^{K_{0}} \approx 1$, and the exponential term is expanded to first order in $K_{0}$ :
$$
\begin{align*}
\left\langle 0_{+} \mid 0_{-}\right\rangle^{K} \approx & \sum_{\{n\}}\left\langle 0_{+} \mid\{n\}\right\rangle^{K_{1}}\left\langle\{n\} \mid 0_{-}\right\rangle^{K_{2}} \\
& \times\left\{1+\sum_{\mathbf{p}}\left[\left(-i K_{1 \mathbf{p}}^{*}\right)\left(-i K_{0 \mathbf{p}}\right)+\left(-i K_{0 \mathbf{p}}^{*}\right)\left(-i K_{2 \mathbf{p}}\right)\right]\right\} \tag{7.54}
\end{align*}
$$
Compare this with the multi-particle exchange description between the three sources,
$$
\begin{equation*}
\left\langle 0_{+} \mid 0_{-}\right\rangle^{K}=\sum_{\{n\}\{n\}^{\prime}}\left\langle 0_{+} \mid\{n\}_{-}\right\rangle^{K_{1}}\left\langle\{n\}_{+} \mid\{n\}_{-}^{\prime}\right\rangle^{K_{0}}\left\langle\{n\}_{+}^{\prime} \mid 0_{-}\right\rangle^{K_{2}} . \tag{7.55}
\end{equation*}
$$
Now recall the connection between $K_{p}$ and $\left\langle\{n\} \mid 0_{-}\right\rangle^{K}$, Eq. (7.33b), so we infer
$$
\begin{equation*}
\left\langle 0_{+} \mid\{n\}\right\rangle^{K_{1}}\left(-i K_{1 \mathbf{p}}^{*}\right)=\sqrt{n_{\mathbf{p}}+1}\left\langle 0_{+} \mid\{n\}+1_{\mathbf{p}}\right\rangle^{K_{1}} . \tag{7.56}
\end{equation*}
$$
Therefore, for a weak source,
$$
\begin{equation*}
\left\langle\left\{n+1_{\mathbf{p}}\right\} \mid\{n\}\right\rangle^{K}=-i K_{\mathbf{p}} \sqrt{n_{\mathbf{p}}+1} . \tag{7.57}
\end{equation*}
$$
The corresponding probability of creating 1 more particle with momentum $\mathbf{p}$ is
$$
\begin{equation*}
\left|\left\langle\left\{n+1_{\mathbf{p}}\right\} \mid\{n\}\right\rangle^{K}\right|^{2}=\left|K_{\mathbf{p}}\right|^{2}\left(n_{\mathbf{p}}+1\right) \tag{7.58}
\end{equation*}
$$
In the last factor, the 1 represents spontaneous emission, and the $n_{\mathbf{p}}$ is the enhancement effect of stimulated emission.

The corresponding analysis in the absorption case gives
$$
\begin{equation*}
\left\langle\{n\} \mid\left\{n+1_{\mathbf{p}}\right\}\right\rangle^{K}=-i K_{\mathbf{p}}^{*} \sqrt{n_{\mathbf{p}}+1} \tag{7.59}
\end{equation*}
$$
or
$$
\begin{equation*}
\left\langle\left\{n-1_{\mathbf{p}}\right\} \mid\{n\}\right\rangle^{K}=-i K_{\mathbf{p}}^{*} \sqrt{n_{\mathbf{p}}} \tag{7.60}
\end{equation*}
$$
that is, the probability of absorbing one particle is proportional to the incident intensity.

Let us come back to space and time. Adopting a more telegraphic notation, we can write the vacuum persistence amplitude as
$$
\begin{align*}
& \left\langle 0_{+} \mid 0_{-}\right\rangle^{K}=e^{-i \int K^{*} G K}=1-i \int d 1 d 1^{\prime} K^{*}(1) G\left(1-1^{\prime}\right) K\left(1^{\prime}\right) \\
& \quad-\frac{1}{2} \int d 1 d 1^{\prime} d 2 d 2^{\prime} K^{*}(1) K^{*}(2) G\left(1-1^{\prime}\right) G\left(2-2^{\prime}\right) K\left(1^{\prime}\right) K\left(2^{\prime}\right)+\ldots \tag{7.61}
\end{align*}
$$
Here the numbers represent space-time points, $1=\mathbf{r}_{1}, t_{1}$, etc. Because the product of sources is symmetrical, we can replace
$$
\begin{equation*}
G\left(1-1^{\prime}\right) G\left(2-2^{\prime}\right) \rightarrow \frac{1}{2}\left[G\left(1-1^{\prime}\right) G\left(2-2^{\prime}\right)+G\left(1-2^{\prime}\right) G\left(2-1^{\prime}\right)\right] \tag{7.62}
\end{equation*}
$$
Diagrammatically, the two terms can be represented as in Fig. 7.6. This builds in the symmetry in the labels. The third term in Eq. (7.61) is
$$
\begin{equation*}
-\frac{1}{2} \int d 1 d 2 K^{*}(1) K^{*}(2) \psi(1) \psi(2), \quad \psi(1) \psi(2)=\psi(1,2)=\psi(2,1) \tag{7.63}
\end{equation*}
$$
![](https://cdn.mathpix.com/cropped/2025_02_21_13f260749f40b979ea80g-107.jpg?height=279&width=767&top_left_y=1564&top_left_x=466)

Fig. 7.6 Exchange of two particles between spatially and temporally separated sources. BoseEinstein symmetry implies that the particles are exchanged between either spatially separated source. No interaction is to be inferred where the lines cross
which exhibits another characteristic of Bose-Einstein statistics. The field $\psi$, the generalization of the wavefunction, must be totally symmetric under interchange of the particles.

### 7.1 Interactions

Real particles interact with each other. Thus we should have processes such as sketched in Fig.7.7. The particles emitted by the sources are scattered by interactions represented by the black box labeled $T$. Let us begin with a simpler situation, scattering from a fixed center, for example, a heavy nucleus. This process can be represented with only two sources, as shown in Fig. 7.8. This diagram schematically represents the tracks of particles as seen in a detector. In the absence of interactions
$$
\begin{equation*}
W=-\int K^{*} G^{0} K \tag{7.64}
\end{equation*}
$$
where now we have used the superscript 0 to designate the free particle propagator or Green's function previously denoted simply by $G$. This process in represented by the dotted line in Fig.7.8. Now we want to add something to this, the scattering process, represented generically by T . From a source point of view, both processes contribute to the vacuum amplitude
$$
\begin{equation*}
W=-\int K^{*} G^{0} K-\int K^{*} G^{0} \mathrm{~T} G^{0} K \tag{7.65}
\end{equation*}
$$
Fig. 7.7 Two particles produced by the two earlier sources scatter by the processes labeled T and the scattered particles are detected by the two later sources
![](https://cdn.mathpix.com/cropped/2025_02_21_13f260749f40b979ea80g-108.jpg?height=678&width=286&top_left_y=1328&top_left_x=1063)

Fig. 7.8 Diagram
representing scattering of a particle off a fixed center.
Here the heavy vertical line represents the fixed center or nucleus, the dotted line represents the exchange of a particle directly between the sources, and the solid lines represent the production of a particle by the first source, its scattering off the fixed center, by the process represented by the black box T , and finally its absorption by the second source
![](https://cdn.mathpix.com/cropped/2025_02_21_13f260749f40b979ea80g-109.jpg?height=706&width=403&top_left_y=196&top_left_x=937)
where the last term means
$$
\begin{align*}
& -\int K^{*}(1) G^{0}\left(1-1^{\prime}\right) \mathrm{T}\left(1^{\prime}, 1^{\prime \prime}\right) G^{0}\left(1^{\prime \prime}-1^{\prime \prime \prime}\right) K\left(1^{\prime \prime \prime}\right) \\
& \quad=-\int \psi^{0 *}\left(1^{\prime}\right) \mathrm{T}\left(1^{\prime}, 1^{\prime \prime}\right) \psi^{0}\left(1^{\prime \prime}\right) \tag{7.66}
\end{align*}
$$
The vacuum persistence amplitude is expressed as
$$
\begin{equation*}
\left\langle 0_{+} \mid 0_{-}\right\rangle=e^{i W} \tag{7.67}
\end{equation*}
$$
for the same reason as before. Because we have a well-defined causal situation,
$$
\begin{equation*}
\psi^{0}(1)=\int G^{0}\left(1-1^{\prime}\right) K\left(1^{\prime}\right), \quad t_{1}>t_{1^{\prime}} \tag{7.68}
\end{equation*}
$$
we can write
$$
\begin{equation*}
\psi^{0}(\mathbf{r}, t)=\sum_{\mathbf{p}} \sqrt{\frac{(d \mathbf{p})}{(2 \pi)^{3}}} e^{i \mathbf{p} \cdot \mathbf{r}-i E t}(-i) K_{\mathbf{p}} \equiv \sum_{\mathbf{p}} \psi_{\mathbf{p}}(\mathbf{r}, t)(-i) K_{\mathbf{p}} \tag{7.69}
\end{equation*}
$$
Similarly,
$$
\begin{equation*}
\psi^{0 *}(1)=\int K^{*}\left(1^{\prime}\right) G^{9}\left(1^{\prime}-1\right), \quad t_{1}<t_{1^{\prime}} \tag{7.70}
\end{equation*}
$$
Fig. 7.9 Multiple-scattering resolution of the scattering operator T. Here the diagram represents repetitions of elementary scattering processes each described by a potential $V$
![](https://cdn.mathpix.com/cropped/2025_02_21_13f260749f40b979ea80g-110.jpg?height=710&width=274&top_left_y=194&top_left_x=1074)
implies
$$
\begin{equation*}
\psi^{0 *}(\mathbf{r}, t)=\sum_{\mathbf{p}} \sqrt{\frac{(d \mathbf{p})}{(2 \pi)^{3}}} e^{-i \mathbf{p} \cdot \mathbf{r}+i E t}(-i) K_{\mathbf{p}}^{*} \equiv \sum_{\mathbf{p}} \psi_{\mathbf{p}}^{*}(\mathbf{r}, t)(-i) K_{\mathbf{p}}^{*} \tag{7.71}
\end{equation*}
$$
The term $i W$ is the only term which describes the process being considered. The vacuum amplitude includes
$$
\begin{equation*}
\sum_{\mathbf{p}}\left\langle 0_{+} \mid 1_{\mathbf{p}}\right\rangle^{K^{*}}\left\langle 1_{\mathbf{p}+} \mid 1_{\mathbf{p}^{\prime}-}\right\rangle\left\langle 1_{\mathbf{p}^{\prime}+} \mid 0\right\rangle^{K} \approx \sum_{\mathbf{p}}\left(-i K_{\mathbf{p}}^{*}\right)\left\langle 1_{\mathbf{p}+} \mid 1_{\mathbf{p}^{\prime}-}\right\rangle\left(-i K_{\mathbf{p}^{\prime}}\right) . \tag{7.72}
\end{equation*}
$$
So, picking out the coefficients of $-i K_{\mathbf{p}^{\prime}},-i K_{\mathbf{p}}^{*}$, we infer
$$
\begin{equation*}
\left\langle 1_{\mathbf{p}} \mid 1_{\mathbf{p}^{\prime}}\right\rangle=-i \int \psi_{\mathbf{p}}(1) \mathrm{T}\left(1,1^{\prime}\right) \psi_{\mathbf{p}^{\prime}}\left(1^{\prime}\right) \tag{7.73}
\end{equation*}
$$
so if we knew $T$ we could compute the scattering amplitude by taking matrix elements in this way.

Let us analyze the scattering process in more detail, by going into processes which occur in a definite time. That is, we break up the extended process, represented by the black box in Fig. 7.8 by viewing it as a repetition of elementary processes represented by a potential $V$, as sketched in Fig. 7.9. To describe this, we extend the idea of the field. The vacuum amplitude is given in terms of
$$
\begin{equation*}
W=-\int K^{*}\left[G^{0} K+G^{0} \mathbf{T} G^{0} K\right] \tag{7.74}
\end{equation*}
$$
where the quantity in square brackets is regarded as the field,
$$
\begin{equation*}
\psi=\psi^{0}+\int G^{0} T \psi^{0} \tag{7.75}
\end{equation*}
$$
where $\psi^{0}=\int G^{0} K$ and $\mathrm{T} \psi^{0}$ may be thought of as an effective source. In this way we get a superposition of effects. Alternatively, we may emphasize the last scattering act,
$$
\begin{equation*}
\psi=\psi^{0}+\int G^{0} V \psi \tag{7.76}
\end{equation*}
$$
where, as above, $\psi$ is due to an infinite number of elementary scattering acts. This decomposition is self-consistent, because we may write
$$
\begin{align*}
\psi & =\psi^{0}+\int G^{0} V \psi \\
& =\psi^{0}+\int G^{0} V \psi^{0}+\int G^{0} V G^{0} V \psi^{0}+\int G^{0} V G^{0} V G^{0} V \psi+\ldots \tag{7.77}
\end{align*}
$$
So if the expansion makes sense
$$
\begin{equation*}
\mathrm{T}=V+V G^{0} V+V G^{0} V G^{0} V+\ldots \tag{7.78}
\end{equation*}
$$
The differential equation corresponding to Eq. (7.76) is
$$
\begin{equation*}
\left(i \frac{\partial}{\partial t}-T\right) \psi=K+V \psi \tag{7.79}
\end{equation*}
$$
or
$$
\begin{equation*}
\left(i \frac{\partial}{\partial t}-T-V\right) \psi=K \tag{7.80}
\end{equation*}
$$
So we see, indeed, that $V$ is the potential energy. Thus, we indeed have a multiple scattering process.

This also generalizes the concept of the Green's function. If we write
$$
\begin{equation*}
\psi=\int G K \tag{7.81}
\end{equation*}
$$
where the Green's function satisfies
$$
\begin{equation*}
\left(i \frac{\partial}{\partial t}-T-V\right) G\left(1,1^{\prime}\right)=\delta\left(1,1^{\prime}\right) \tag{7.82}
\end{equation*}
$$
and the action can be written as
$$
\begin{equation*}
W=-\int K^{*} \psi-\int K \psi^{*}+\int \psi^{*}\left(i \frac{\partial}{\partial t}-T-V\right) \psi \tag{7.83}
\end{equation*}
$$
which in value is equal to
$$
\begin{equation*}
W=-i \int K^{*} G K \tag{7.84}
\end{equation*}
$$
The Green's functions include the possibility of bound states.
More generally, think of 2-particle scattering, represented in Fig.7.7. Singleparticle exchange is represented by
$$
\begin{equation*}
W_{2}=-\int K^{*} G^{0} K \tag{7.85}
\end{equation*}
$$
But here, the particles do their thing, and the scattering is represented by
$$
\begin{equation*}
W_{4}=-\frac{1}{2} \int\left(K^{*} G^{0}\right)_{1}\left(K^{*} G^{0}\right)_{2} \mathrm{~T}\left(12,1^{\prime} 2^{\prime}\right)\left(G^{0} K\right)_{1^{\prime}}\left(G^{0} K\right)_{2^{\prime}} \tag{7.86}
\end{equation*}
$$
Again, the scattering amplitude $\left\langle 1_{\mathbf{p}_{1}} 1_{\mathbf{p}_{1}} \mid 1_{\mathbf{p}_{1^{\prime}}} 1_{\mathbf{p}_{2^{\prime}}}\right\rangle$ is given simply in terms of T . Moreover, we want to analyze the scattering in terms of elementary processes, as sketched in Fig.7.10. The terms in the vacuum amplitude of interest are contained in $e^{i\left(W_{2}+W_{4}\right)}$ which when expanded contains the following terms with four sources:
$$
\begin{align*}
-\frac{1}{2} W_{2}^{2}+i W_{4} & =-\frac{1}{2} \int K^{*} \psi^{0} K^{*} \psi^{0}-\frac{i}{2} \int\left(K^{*} G^{0}\right)\left(K^{*} G^{0}\right) \mathrm{T}\left(G^{0} K\right)\left(G^{0} K\right) \\
& =-\frac{1}{2} \int K^{*}(1) K^{*}\left(1^{\prime}\right) \psi(1,2) \tag{7.87}
\end{align*}
$$
Fig. 7.10 Scattering process described in terms of multiple scattering
![](https://cdn.mathpix.com/cropped/2025_02_21_13f260749f40b979ea80g-112.jpg?height=622&width=302&top_left_y=1435&top_left_x=1037)
where
$$
\begin{equation*}
\psi(1,2)=\psi^{0}(1) \psi^{0}(2)+i \int G_{1}^{0} G_{2}^{0} \top \psi^{0} \psi^{0} \tag{7.88}
\end{equation*}
$$
This says that the source detects what comes directly, and what comes from the scattering process. On the other hand, we can look at this from the last scattering point of view,
$$
\begin{equation*}
\psi(1,2)=\psi^{0}(1) \psi^{0}(2)+i \int G_{1}^{0} G_{2}^{0} V \psi\left(1^{\prime}, 2^{\prime}\right) \tag{7.89}
\end{equation*}
$$
where $V$ is the measure of the single-scattering process. Again one can iterate. Look at the corresponding differential equation,
$$
\begin{equation*}
\left(i \frac{\partial}{\partial t_{1}}-T_{1}\right)\left(i \frac{\partial}{\partial t_{2}}-T_{2}\right) \psi(1,2)=K(1) K(2)+i(V \psi)(1,2) \tag{7.90}
\end{equation*}
$$
where a matrix notation is used in the last term. This can be written as
$$
\begin{equation*}
\left[\left(i \frac{\partial}{\partial t_{1}}-T_{1}\right)\left(i \frac{\partial}{\partial t_{2}}-T_{2}\right)-i V\right] \psi(1,2)=K(1) K(2) . \tag{7.91}
\end{equation*}
$$
Now make explicit the time localization of the potential:
$$
\begin{equation*}
V\left(1,2 ; 1^{\prime}, 2^{\prime}\right)=\delta\left(t_{1}-t_{2}\right) \delta\left(t_{1^{\prime}}-t_{2^{\prime}}\right) \delta\left(t_{1}-t_{1^{\prime}}\right) V_{12}\left(\mathbf{r}_{1}-\mathbf{r}_{2}, \mathbf{r}_{1^{\prime}}-\mathbf{r}_{2^{\prime}}\right) \tag{7.92}
\end{equation*}
$$
It might also be that the potential is localized in space:
$$
\begin{equation*}
V_{12}\left(\mathbf{r}_{1}-\mathbf{r}_{2}, \mathbf{r}_{1^{\prime}}-\mathbf{r}_{2^{\prime}}\right)=\delta\left(\left(\mathbf{r}_{1}-\mathbf{r}_{2}\right)-\left(\mathbf{r}_{1^{\prime}}-\mathbf{r}_{2^{\prime}}\right)\right) V\left(\mathbf{r}_{1}-\mathbf{r}_{2}\right), \tag{7.93}
\end{equation*}
$$
but we won't assume this in the following. Then the Green's function defined by
$$
\begin{equation*}
\psi(1,2)=\int G\left(1,2 ; 1^{\prime}, 2^{\prime}\right) K\left(1^{\prime}\right) K(2) \tag{7.94}
\end{equation*}
$$
satisfies
$$
\begin{equation*}
\left[\left(i \frac{\partial}{\partial t_{1}}-T_{1}\right)\left(i \frac{\partial}{\partial t_{2}}-T_{2}\right)-i V\right] G=\left(\delta\left(1-1^{\prime}\right) \delta\left(2-2^{\prime}\right)\right)_{\mathrm{sym}} \tag{7.95}
\end{equation*}
$$
where the subscript denotes symmetrization. Now because of Eq. (7.89), the integral equation for the Green's function is (symmetrization suppressed)
$$
\begin{equation*}
G=G_{1}^{0} G_{2}^{0}+i G^{0} G^{0} V G \tag{7.96}
\end{equation*}
$$
The assumption of an instantaneous $V$ means that we can look at the equal-time Green's function,
$$
\begin{equation*}
G\left(\mathbf{r}_{1}, \mathbf{r}_{2}, t ; \mathbf{r}_{1}^{\prime}, \mathbf{r}_{2}^{\prime}, t^{\prime}\right), \quad t=t_{1}=t_{2}, \quad t^{\prime}=t_{1}^{\prime}=t_{2}^{\prime} \tag{7.97}
\end{equation*}
$$
Appearing in Eq. (7.96) is
$$
\begin{align*}
& i G^{0}\left(\mathbf{r}_{1}, t ; \mathbf{r}_{1}^{\prime}, t^{\prime}\right) G^{0}\left(\mathbf{r}_{2}, t ; \mathbf{r}_{2}^{\prime}, t^{\prime}\right)=-i \eta\left(t-t^{\prime}\right) \int \frac{\left(d \mathbf{p}_{1}\right)}{(2 \pi)^{3}} \frac{\left(d \mathbf{p}_{2}\right)}{(2 \pi)^{3}} \\
& \quad \times \exp \left[i \left(\mathbf{p}_{1} \cdot\left(\mathbf{r}_{1}-\mathbf{r}_{1}^{\prime}\right)+i\left(\mathbf{p}_{2} \cdot\left(\mathbf{r}_{2}-\mathbf{r}_{2}^{\prime}\right)-i\left(E_{1}+E_{2}\right)\left(t-t^{\prime}\right)\right]\right.\right. \tag{7.98}
\end{align*}
$$
a Green's function with energy $E_{1}+E_{2}$. This obeys the equation
$$
\begin{equation*}
\left(i \frac{\partial}{\partial t}-T_{1}-T_{2}\right)\left(i G^{0} G^{0}\right)=\delta\left(t-t^{\prime}\right) \delta\left(\mathbf{r}_{1}-\mathbf{r}_{1}^{\prime}\right) \delta\left(\mathbf{r}_{2}-\mathbf{r}_{2}^{\prime}\right) \tag{7.99}
\end{equation*}
$$
the conventional Green's function equation. Then
$$
\begin{equation*}
\left(i \frac{\partial}{\partial t}-T_{1}-T_{2}\right) i G=\delta\left(t-t^{\prime}\right) \delta\left(\mathbf{r}_{1}-\mathbf{r}_{1}^{\prime}\right) \delta\left(\mathbf{r}_{2}-\mathbf{r}_{2}^{\prime}\right)+V_{12}(i G) \tag{7.100}
\end{equation*}
$$
which is what we would expect.
Now we write the vacuum amplitude as
$$
\begin{align*}
\left\langle 0_{+} \mid 0_{-}\right\rangle^{K} & =1-i \int K^{*} G^{0} K-\frac{1}{2} \int K^{*} K^{*} \psi(12)+\ldots \\
& =e^{-i \int K^{*} G^{0} K-\frac{1}{2} \int K^{*} K^{*}[\psi(12)-\psi(1) \psi(2)]}+\ldots \tag{7.101}
\end{align*}
$$
where in the last three-particle and higher interactions have been omitted. Here we include in the second term only the effects of interaction, through
$$
\begin{equation*}
\chi(1,2)=\psi(1,2)-\psi(1) \psi(2) \tag{7.102}
\end{equation*}
$$
The integral equation (7.96) written in terms of the last interaction can also be written in term of the first interaction,
$$
\begin{equation*}
G=G^{0} G^{0}+G i V G^{0} G^{0} \tag{7.103}
\end{equation*}
$$
Symbolically we can solve for $G$,
$$
\begin{equation*}
G=\frac{1}{1-G^{0} G^{0} i V} G^{0} G^{0}=G^{0} G^{0} \frac{1}{1-i V G^{0} G^{0}} \tag{7.104}
\end{equation*}
$$
which are formally identical. This assumes the instantaneous interaction given by Eq. (7.92). Let us write
$$
\begin{equation*}
G^{0} G^{0}=-i G_{1+2}^{0}, \quad i G=G_{1+2} \tag{7.105}
\end{equation*}
$$
then our integral equation reads
$$
\begin{equation*}
G_{1+2}=G_{1+2}^{0}+G_{1+2}^{0} V_{12} G_{1+2} \tag{7.106}
\end{equation*}
$$
which satisfies the differential equation (7.100), or
$$
\begin{equation*}
\left(i \frac{\partial}{\partial t}-T_{1}-T_{2}-V_{12}\right) G_{1+2}=\delta\left(t-t^{\prime}\right) \delta\left(\mathbf{r}_{1}-\mathbf{r}_{1^{\prime}}\right) \delta\left(\mathbf{r}_{2}-\mathbf{r}_{2^{\prime}}\right) \tag{7.107}
\end{equation*}
$$
We might be interested in non-instantaneous initial and final states, even though we are assuming an instantaneous interaction. Then we could write
$$
\begin{equation*}
G=i G^{0}\left(t_{>}-t_{<}\right) G_{12}\left(t_{<}-t_{>}^{\prime}\right) G^{0}\left(t_{>}^{\prime}-t_{<}^{\prime}\right), \tag{7.108}
\end{equation*}
$$
where
$$
\begin{equation*}
G^{0}\left(t-t^{\prime}\right) \rightarrow-i \delta\left(\mathbf{r}-\mathbf{r}^{\prime}\right) \text { as } t \rightarrow t^{\prime}+0 \tag{7.109}
\end{equation*}
$$
hence the factor of $i$ is supplied by comparison with the instantaneous limit, $t_{1}=t_{2}$, $t_{1}^{\prime}=t_{2}^{\prime}$.

### 7.2 Bound States

Sources must be able to create composite structures. We could have started with composite particles, after all, so this is a aspect of self-consistency. Write the integral equation for $G$ symmetrically,
$$
\begin{align*}
G= & G^{0} G^{0}+G^{0} G^{0} i V\left[G^{0} G^{0}+G i V G^{0} G^{0}\right]=G^{0} G^{0}+G^{0} G^{0} i V G^{0} G^{0} \\
& +G^{0} G^{0} i V G i V G^{0} G^{0} . \tag{7.110}
\end{align*}
$$
We are still working with the instantaneous interaction approximation. So $G$ has the property of depending on two times. Write again
$$
\begin{equation*}
G=-i G_{1+2}, \quad V \rightarrow V_{12} \tag{7.111}
\end{equation*}
$$
The description of the bound states is contained in $G_{1+2}$. The part of the vacuum amplitude involving $G_{1+2}$ is
$$
\begin{equation*}
\left\langle 0_{+} \mid 0_{-}\right\rangle=e^{-\frac{i}{2} \int K^{*} K^{*} G^{0} G^{0} V_{12} G_{1+2} V_{12} G^{0} G^{0} K K} \tag{7.112}
\end{equation*}
$$
This involves all interactions.
Now introduce the coordinates for the two-particle system, where we assume that the two particles have the same mass,
$$
\begin{equation*}
\mathbf{R}=\frac{1}{2}\left(\mathbf{r}_{1}+\mathbf{r}_{2}\right), \quad \mathbf{r}=\mathbf{r}_{1}-\mathbf{r}_{2} \tag{7.113}
\end{equation*}
$$
The Green's function equation (7.107) becomes
$$
\begin{equation*}
\left(i \frac{\partial}{\partial t}-\frac{\mathbf{P}^{2}}{2 M}-\frac{\mathbf{p}^{2}}{2 \mu}-V(\mathbf{r})\right) G\left(\mathbf{r}, \mathbf{R}, t ; \mathbf{r}^{\prime}, \mathbf{R}^{\prime}, t^{\prime}\right)=\delta(t-t) \delta\left(\mathbf{r}-\mathbf{r}^{\prime}\right) \delta\left(\mathbf{R}-\mathbf{R}^{\prime}\right) \tag{7.114}
\end{equation*}
$$
where we see the appearance of the total mass $M$, the reduced mass $\mu$, the total momentum $\mathbf{P}$ and the relative momentum $\mathbf{p}$. We are interested in the motion of the center of mass. Let the internal motion be described by an eigenfunction $\phi_{k}$ governed by a Schrödinger equation,
$$
\begin{equation*}
\left(E_{k}-\frac{p^{2}}{2 \mu}-V\right) \phi_{k}(\mathbf{r})=0 \tag{7.115}
\end{equation*}
$$
so multiplying Eq. (7.114) by $\phi_{n}^{*}(\mathbf{r})$ and integrating over $\mathbf{r}$ we obtain
$$
\begin{align*}
& \left(i \frac{\partial}{\partial t}-\frac{P^{2}}{2 M}-E_{n}\right) \int(d \mathbf{r}) \phi^{*}(\mathbf{r}) G\left(\mathbf{r}, \mathbf{R}, t ; \mathbf{r}^{\prime}, \mathbf{R}^{\prime}, t^{\prime}\right) \\
& \quad=\delta\left(t-t^{\prime}\right) \delta\left(\mathbf{R}-\mathbf{R}^{\prime}\right) \phi^{*}\left(\mathbf{r}^{\prime}\right) \tag{7.116}
\end{align*}
$$
The Green's function can be expanded, therefore, in terms of a single-particle Green's functions depending on the state $n$ :
$$
\begin{equation*}
G\left(\mathbf{r}, \mathbf{R}, t ; \mathbf{r}^{\prime}, \mathbf{R}^{\prime}, t^{\prime}\right)=\sum_{n} \phi_{n}(\mathbf{r}) G_{n}\left(\mathbf{R}-\mathbf{R}^{\prime}, t-t^{\prime}\right) \phi_{n}^{*}\left(\mathbf{r}^{\prime}\right) \tag{7.117}
\end{equation*}
$$
Now from Eq. (7.112) we identify the effective source for an atomic state
$$
\begin{align*}
K_{n}(\mathbf{R}, t)= & \frac{1}{\sqrt{2}} \int(d \mathbf{r}) \phi^{*}(\mathbf{r}) V_{12}(\mathbf{r}) G^{0}\left(\mathbf{R}+\frac{\mathbf{r}}{2}-\mathbf{r}_{1}, t-t_{1}\right) \\
& \times G^{0}\left(\mathbf{R}-\frac{\mathbf{r}}{2}-\mathbf{r}_{2}, t-t_{2}\right) K\left(\mathbf{r}_{1}, t_{1}\right) K\left(\mathbf{r}_{2}, t_{2}\right) d 1 d 2 \tag{7.118}
\end{align*}
$$
We must be very explicit that $E_{n}<0$, meaning that the sources are extended: They must put out less energy than two free particles would have. So $G^{0}$ does not refer to the propagation of a free particle, but rather it propagates an excitation which does
not get very far. As a result, the Green's functions become real in effect, by virtue of the integration, and
$$
\begin{equation*}
K_{n}^{*}(\mathbf{R}, t)=\frac{1}{\sqrt{2}} \int K^{*} K^{*} G^{0} G^{0} V_{12} \phi_{n} \tag{7.119}
\end{equation*}
$$
is actually the complex conjugate of Eq. (7.118). The consistency of the vacuum persistence amplitude
$$
\begin{equation*}
\left\langle 0_{+} \mid 0_{-}\right\rangle=e^{-i \sum_{n} \int K_{n}^{*}(\mathbf{R}, t) G_{n}\left(\mathbf{R}-\mathbf{R}^{\prime}, t-t^{\prime}\right) K_{n}\left(\mathbf{R}^{\prime}, t^{\prime}\right)} \tag{7.120}
\end{equation*}
$$
demands that $K_{n}^{*}$ really be the complex conjugate of $K_{n}$,
Perhaps this remark is clarified by looking at the Fourier transform of the free Green's function,
$$
\begin{equation*}
\frac{1}{E-T+i \epsilon} \tag{7.121}
\end{equation*}
$$
When $E<0$ there is no singularity and the Green's function is real.
The formalism is flexible: it can deal with bound states whether analyzed or not, which is especially useful in high energy physics.

Can we write down a formalism that expresses the dynamics and supplies the field equations? The affirmative answer is supplied by writing
$$
\begin{equation*}
\left\langle 0_{+} \mid 0_{-}\right\rangle=e^{i W} \tag{7.122}
\end{equation*}
$$
with
$$
\begin{align*}
W= & \int\left\{\psi^{*}\left(i \frac{\partial}{\partial t}-T\right) \psi-K^{*} \psi-\psi^{*} K-\frac{1}{2} \psi^{*} \psi^{*} V \psi \psi\right. \\
& -\frac{1}{2} \psi^{*} \psi^{*} V \chi-\frac{1}{2} \chi^{*} V \psi \psi \\
& \left.-\frac{i}{2} \chi^{*}\left[\left(i \frac{\partial}{\partial t}-T\right)\left(i \frac{\partial}{\partial t}-T\right)-i V\right] \chi\right\} \tag{7.123}
\end{align*}
$$
Here we have introduce the 2-particle field $\chi$. What does this imply under field variations? Varying with respect to $\psi^{*}$ gives
$$
\begin{equation*}
\left(i \frac{\partial}{\partial t}-T\right) \psi=K+\psi^{*} V(\psi \psi+\chi) \tag{7.124}
\end{equation*}
$$
where in the last we see a realistic representation of a single-particle source in the interaction with the other fields. Varying with respect to $\chi^{*}$ yields
$$
\begin{equation*}
\left[\left(\frac{\partial}{\partial t}-T\right)\left(i \frac{\partial}{\partial t}-T\right)-i V\right] \chi=i V \psi \psi \tag{7.125}
\end{equation*}
$$
This says that $\chi$ is the part of the two-particle field that has interacted at least once, thus
$$
\begin{equation*}
\chi=G i V \psi \psi \tag{7.126}
\end{equation*}
$$
If we use these equations to evaluate $W$ we recover the previous result (7.112).
We have here two independent field $\psi$ and $\chi$, coupled by interaction. This is the essence of the many-particle situation in high energy physics. Essentially, we may regard the $-\frac{1}{2} \chi^{*} V \psi \psi$ as a phenomenological coupling between particles.

This nonrelativistic development of source theory was written down after the relativistic formulation was developed, which is explicated in great detail in Schwinger's three volume treatise (Schwinger 1989a).

## Chapter 8 Concluding Remarks

We have traced Schwinger's development of action formulations from classical systems of particles and fields, to the description of quantum dynamics through the Quantum Action Principle. In the latter, we have described quantum mechanical systems, especially the driven harmonic oscillator. This is ahistorical, since Schwinger first developed his quantum dynamical principle in the context of quantum electrodynamics in the early 1950s, and only nearly a decade later applied it to quantum mechanics, which is field theory in one dimension-time. At roughly the same time he was thinking about quantum statistical systems (Martin 1959), and it was natural to turn to a description of nonequilibrium systems, which was the motivation of the time-cycle method, although Schwinger put it in a general, although simplified, context. The time cycle method was immediately applied to quantum field theory by his students, K. T. Mahanthappa and P. M. Bakshi (Mahanthappa 1962; Bakshi 1963). Then we give a sketch of the application of these methods to quantum field theory, based on Schwinger's 1956 Stanford lectures, and to what Schwinger perceived as the successor to field theory, Source Theory. The latter appeared shortly after he received his Nobel prize in 1963. In fact the present document, which includes components of Julian Schwinger's thinking over nearly four decades, shows that these developments proceeding organically, and that the action principle and Green's functions ${ }^{1}$ played central roles throughout his remarkable career in physics. In fact, it has been argued (Mehra 2000) that the first "source theory" paper was in fact his most cited one, written in 1951 (Schwinger 1951a).

[^5]Acknowledgments I thank the Laboratoire Kastler Brossel, ENS, UPMC, CNRS, for its hospitality during the completion of the first part of manuscript. I especially thank Astrid Lambrecht and Serge Reynaud. The work was supported in part with funding from the Simons Foundation, CNRS, and the Julian Schwinger Foundation. I thank my many students at the University of Oklahoma, where much of the material reported here was used as the basis of lectures in electrodynamics, quantum mechanics, and quantum field theory. I especially thank Herb Fried for permission to use his transcription of Schwinger's 1956 lectures as the basis for Chap. 6 here, and Walter Becker for his $\mathrm{LAT}_{\mathrm{E}} \mathrm{X}$ conversion of those notes.

## References

P.M. Bakshi, K.T. Mahanthappa, Expectation value formalism in quantum field theory. J. Math. Phys. 4, 1 (1963)
P.A.M. Dirac, The physical interpretation of the quantum dynamics. Proc. Roy. Soc. Lond. A 113(765), 621-641 (1927)
P.A.M. Dirac, V.A. Fock, B. Podolsky, On quantum electrodynamics. Phys. Zeits. Sowjetunion 2, 468 (1932)
P.A.M. Dirac, The Lagrangian in quantum mechanics. Phys. Zeits. Sowjetunion 3, 64 (1933)
R.J. Duffin, On The characteristic matrices of covariant systems. Phys. Rev. 54, 1114 (1938). doi:10. 1103/PhysRev.54.1114
L. Euler, Methodus Inveniendi Lineas Curvas Maximi Minive Proprietate Gaudentes (Bousquet, Lausanne and Geneva, 1744)
L. Euler, Investigation of the letter, allegedly written by Leibniz, translated by Wikisource (1752), http://en.wikisource.org/wiki/Investigation_of_the_letter_of_Leibniz
R.P. Feynman, The principles of least action in quantum mechanics. Ph.D dissertation, Princeton University, Princeton, NJ. (University Microfilms, Ann Arbor, Publications No. 2948) (1942)
R.P. Feynman, Space-time approach to quantum electrodynamics. Phys. Rev. 76, 769 (1949)
R.P. Feynman, A.R. Hibbs, Quantum Mechanics and Path Integrals (McGraw-Hill, New York, 1965)
R.J. Glauber, Coherent and incoherent states of radiation field. Phys. Rev. 131, 2766-2788 (1963)
W.R. Hamilton, On a general method in dynamics. Part I. Phil. Trans. Roy. Soc. 124, 247-308 (1834)
W.R. Hamilton, On a general method in dynamics. Part II. Phil. Trans. Roy. Soc. 125, 95-144 (1835)
W. Heisenberg, W. Pauli, Zur Quantendynamik der Wellenfelder. Z. Phys. 56, 1-61 (1929)
L.V. Keldysh, Diagram technique for nonequilibrium processes. Zh. Eksp. Teor. Fiz. 47, 1515-1527 (1964) (English translation: Soviet Physics JETP 20: 1018-1026 (1965).)
N. Kemmer, The particle aspect of meson theory. Proc. Roy. Soc. A 173, 91-116 (1939). doi:10. 1098/rspa. 1939.0131
J.-L. Lagrange, Méchanique Analytique. p. 226 (1788)
K.T. Mahanthappa, Multiple production of photons in quantum electrodynamics. Phys. Rev. 126, 329 (1962)
P.C. Martin, J. Schwinger, Theory of many-particle systems. Phys. Rev. 115, 1342 (1959)
P.L.M. de Maupertuis, Accord de différentes lois de la nature qui avaient jusqu'ici paru incompatibles". Mém. As. Sc. Paris p. 417 (1744)
P.L.M. de Maupertuis, Le lois de mouvement et du repos, déduites d'un principe de métaphysique. Mém. Ac. Berlin, p. 267 (1746)
J. Mehra, K.A. Milton, Climbing the Mountain: The Scientific Biography of Julian Schwinger (Oxford University Press, Oxford, 2000)
K.A. Milton, J. Schwinger, Electromagnetic Radiation: Variational Methods. Waveguides and Accelerators (Springer, Berlin, 2006)
K.A. Milton, In Appreciation Julian Schwinger: From nuclear physics and quantum electrodynamics to source theory and beyond. Phys. Persp. 9, 70-114 (2007). http://arxiv.org/abs/physics/0610054physics/0610054
E. Noether, Invariante Variationsprobleme. Nachr. König. Gesellsch. Wiss. Göttingen. Math-phys. Klasse, 235-257 (1918)
G. Petiau, University of Paris thesis. Acad. Roy. de Belg., A. Sci. Mem. Collect. 16(2), 1 (1936)
E. Schrödinger, Der stetige Übergang von der Mikro- zur Makromechanik. Naturwissenschaften 14, 664-666 (1926)
J. Schwinger, On gauge invariance and vacuum polarization. Phys. Rev. 82, 664 (1951)
J. Schwinger, The theory of quantized fields. I. Phys. Rev. 82, 914 (1951)
J. Schwinger, Theory of quantized fields. III. Phys. Rev. 91, 728-740 (1953)
J. Schwinger, Differential Equations of Quantum Field Theory, lectures transcribed by R. Blankenbecler, H. Fried, J. Tiemann, issued by Stanford Research Institute, and transcribed into LaTeX by W. Becker (1956)
J. Schwinger, The geometry of quantum states. Proc. Natl. Acad. Sci. USA 46, 257 (1960)
J. Schwinger, Unitary operator bases. Proc. Natl. Acad. Sci. USA 46, 570 (1960)
J. Schwinger, Unitary transformations and the action principle. Proc. Natl. Acad. Sci. USA 46, 883 (1960)
J. Schwinger, The special canonical group. Proc. Natl. Acad. Sci. USA 46, 1401 (1960)
J. Schwinger, Brownian motion of a quantum oscillator. J. Math. Phys. 2, 407 (1961)
J. Schwinger, Quantum Kinematics and Dynamics (Benjamin, New York, 1970)
J. Schwinger, Particles, Sources, and Fields (Addison-Wesley, Reading, 1970)
J. Schwinger, A Report on quantum electrodynamics, in J. Mehra, The Physicist's Conception of Nature (Reidel, Dordrecht, 1973)
J. Schwinger, Particles, Sources, and Fields, vol. II (Addison-Wesley, Reading, 1973)
J. Schwinger, Particles, Sources, and Fields, vol. I-III. (Addison-Wesley, Redwood City, 1989)
J. Schwinger, A path to quantum electrodynamics. Phys. Today (1989) [Reprinted in Most of the Good Stuff: Memories of Richard Feynman. (eds. L. M. Brown, J.S. Rigden) (AIP, New York, 1993)]
J. Schwinger, The Greening of quantum field theory: George and I (1993), http://arxiv.org/abs/hep-ph/9310283arXiv:hep-ph/9310283 (Published in J. Schwinger, The Physicist, the Teacher, and the Man, ed. Y. J. Ng (World Scientific, Singapore 1996), pp. 13-27
J. Schwinger, L.L. DeRaad Jr, K.A. Milton, W.-y. Tsai, Classical Electrodynamics (Perseus/Westview, New York, 1998)
J. Schwinger, Quantum Mechanics: Symbolism of Atomic Measurements (Springer, Berlin, 2001)
A. Sommerfeld, Mechanics-Lectures on Theoretical Physics, vol. I (Academic Press, New York, 1964)
D. Toms, The Schwinger Action Principle and Effective Action (Cambridge Monographs on Mathematical Physics, 2007)
H. Weyl, Eine neue Erweiterung der Retativitätstheorie. Ann. der Phys. 59, 101-133 (1919)


[^0]:    ${ }^{1}$ For complex reasons, Schwinger's influence on modern physics is not widely appreciated. His contributions to our current understanding of nature are underrepresented in textbooks, with some notable exceptions (Toms 2007).

[^1]:    ${ }^{1}$ Here Schwinger is using his standard notation, designating eigenvalues by primes.

[^2]:    ${ }^{2}$ We follow Schwinger's usage of $y$ for the annihilation operator, instead of the more usual $a$.

[^3]:    ${ }^{5}$ The consistency of these two equations follows from

$$
\begin{equation*}
    e^{i \omega t_{1}} y_{1}=e^{i \omega t_{2}} y_{2}-i \int_{t_{2}}^{t_{1}} d t^{\prime} e^{i \omega t^{\prime}} K\left(t^{\prime}\right), \tag{4.70}
\end{equation*}
$$

so that the adjoint of Eq. (4.69) is
    
$$
\begin{align*}
    {[y(t)]^{\dagger} } & =e^{i \omega t}\left[e^{-i \omega t_{1}} y_{1}^{\dagger}-i \int_{t_{2}}^{t_{1}} d t^{\prime} e^{-i \omega t^{\prime}} K^{*}\left(t^{\prime}\right)\right]+i \int_{t_{2}}^{t} d t^{\prime} e^{-i \omega\left(t^{\prime}-t\right)} K^{*}\left(t^{\prime}\right) \\
    & =e^{i \omega\left(t-t_{1}\right)} y_{1}^{\dagger}+i \int_{t_{1}}^{t} d t^{\prime} e^{-i \omega\left(t^{\prime}-t\right)} K^{*}\left(t^{\prime}\right), \tag{4.71}
\end{align*}
$$

[^4]:    ${ }^{6}$ A Poisson probability distribution has the form $p(n)=\lambda^{n} e^{-\lambda} / n!$. The mean value of $n$ for this distribution is

$$
\begin{equation*}
    \bar{n}=\sum_{n=0}^{\infty} n p(n)=\sum_{n=0}^{\infty} \frac{\lambda^{n} e^{-\lambda}}{(n-1)!}=\lambda \sum_{n=0}^{\infty} p(n)=\lambda . \tag{4.85}
\end{equation*}
$$

[^5]:    ${ }^{1}$ One of Schwinger's last publications (Schwinger 1993) described the centrality of Green's functions to his life work.

