# Symmetric Functions and Hall Polynomials I 

SECOND EDITION

I. G. MACDONALD

OXFORD SCIENCE PUBLICATIONS

# OXFORD MATHEMATICAL MONOGRAPHS 

## Series Editors

J. M. Ball E. M. Friedlander I. G. Macdonald<br>L. Nirenberg R. Penrose J. T. Stuart

## OXFORD MATHEMATICAL MONOGRAPHS

A. Belleni-Moranti: Applied semigroups and evolution equations
A. M. Arthurs: Complementary variational principles 2 nd edition
M. Rosenblum and J. Rovnyak: Hardy classes and operator theory
J. W. P. Hirschfeld: Finite projective spaces of three dimensions
A. Pressley and G. Segal: Loop groups
D. E. Edmunds and W. D. Evans: Spectral theory and differential operators

Wang Jianhua: The theory of games
S. Omatu and J. H. Seinfeld: Distributed parameter systems: theory and applications
J. Hilgert, K. H. Hofmann, and J. D. Lawson: Lie groups, convex cones, and semigroups
S. Dineen: The Schwarz lemma
S. K. Donaldson and P. B. Kronheimer: The geometry of four-manifolds
D. W. Robinson: Elliptic operators and Lie groups
A. G. Werschulz: The computational complexity of differential and integral equations
L. Evens: Cohomology of groups
G. Effinger and D. R. Hayes: Additive number theory of polynomials
J. W. P. Hirschfeld and J. A. Thas: General Galois geometries
P. N. Hoffman and J. F. Humphreys: Projective representations of the symmetric groups
I. Györi and G. Ladas: The oscillation theory of delay differential equations
J. Heinonen, T. Kilpelainen, and O. Martio: Non-linear potential theory
B. Amberg, S. Franciosi, and F. de Giovanni: Products of groups
M. E. Gurtin: Thermomechanics of evolving phase boundaries in the plane
I. Ionescu and M. F. Sofonea: Functional and numerical methods in viscoplasticity
N. Woodhouse: Geometric quantization 2nd edition
U. Grenander: General pattern theory
J. Faraut and A. Koranyi: Analysis on symmetric cones
I. G. Macdonald: Symmetric functions and Hall polynomials 2nd edition
B. L. R. Shawyer and B. B. Watson: Borel's methods of summability
D. McDuff and D. Salamon: Introduction to symplectic topology
M. Holschneider: Wavelets: an analysis tool

Jacques Thévenaz: G-algebras and modular representation theory
Hans-Joachim Baues: Homotopy type and homology
P. D. D'Eath: Black holes: gravitational interactions
R. Lowen: Approach spaces: the missing link in the topology-uniformity-metric triad

Nguyen Dinh Cong: Topological dynamics of random dynamical systems
J. W. P. Hirschfeld: Projective geometries over finite fields 2nd edition
K. Matsuzaki and M. Taniguchi: Hyperbolic manifolds and Kleinian groups

David E. Evans and Yasuyuki Kawahigashi: Quantum symmetries on operator algebras
Norbert Klingen: Arithmetical similarities: prime decomposition and finite group theory
Isabelle Catto, Claude Le Bris, and Pierre-Louis Lions: The mathematical theory of thermodynamic limits: Thomas-Fermi type models

# Symmetric Functions and Hall Polynomials Second Edition 

I. G. MACDONALD<br>Queen Mary and Westfield College<br>University of London

## Oxford New York

Athens Auckland Bangkok Bombay
Calcutta Cape Town Dar es Salaam Delhi
Florence Hong Kong Istanbul Karachi
Kuala Lumpur Madras Madrid Melbourne
Mexico City Nairobi Paris Singapore
Taipei Tokyo Toronto
and associated companies in
Berlin Ibadan
Oxford is a trade mark of Oxford University Press
Published in the United States
by Oxford University Press Inc., New York
(c) I. G. Macdonald, 1979, 1995

First edition published 1979
Second edition published 1995
Reprinted 1995, First printed in paperback, 1998
All rights reserved. No part of this publication may be reproduced, stored in a retrieval system, or transmitted, in any form or by any means, without the prior permission in writing of Oxford University Press. Within the UK, exceptions are allowed in respect of any fair dealing for the purpose of research or private study, or criticism or review, as permitted under the Copyright, Designs and Patents Act, 1988, or in the case of reprographic reproduction in accordance with the terms of licences issued by the Copyright Licensing Agency. Enquiries concerning reproduction outside those terms and in other countries should be sent to the Rights Department, Oxford University Press, at the address above.

This book is sold subject to the condition that it shall not, by way of trade or otherwise, be lent, re-sold, hired out, or otherwise circulated without the publisher's prior consent in any form of binding or cover other than that in which it is published and without a similar
condition including this condition being imposed on the subsequent purchaser.

A catalogue record for this book is available from the British Library
Library of Congress Cataloging in Publication Data
Macdonald, I. G. (Ian Grant)
Symmetric functions and Hall polynomials / I. G. Macdonald. - 2nd ed.
(Oxford mathematical monographs)
Includes bibliographical references and index.

1. Abelian groups. 2. Finite groups. 3. Hall polynomials.
2. Symmetric functions. I. Title. II. Series.

QA180.M33 1995 512'.2-dc20 94.27392 CIP
ISBN $0198534892 \mathrm{~h} / \mathrm{b}$
0198504500 p/b
Typeset by
Technical Typesetting Ireland
Printed in Great Britain by
Bookcraft (Bath) Ltd., Midsomer Norton, Avon

## Preface to the second edition

The first edition of this book was translated into Russian by A. Zelevinsky in 1984, and for the Russian version both the translator and the author furnished additional material, both text and examples. Thus the original purpose of this second edition was to make this additional material accessible to Western readers. However, in the intervening years other developments in this area of mathematics have occurred, some of which I have attempted to take account of: the result, I am afraid, is a much longer book than its predecessor. Much of this extra bulk is due to two new chapters (VI and VII) about which I shall say something below.

For readers acquainted with the first edition, it may be of use to indicate briefly the main additions and new features of this second edition. The text of Chapter I remains largely unchanged, except for a discussion of transition matrices involving the power-sums in §6, and of the internal (or inner) product of symmetric functions in $\S 7$. On the other hand, there are more examples at the ends of the various sections than there were before. To the appendix on polynomial functors I have added an account of the related theory of polynomial representations of the general linear groups (always in characteristic zero), partly for its own sake and partly with the aim of rendering the account of zonal polynomials in Chapter VII selfcontained. I have also included, as Appendix B to Chapter I, an account, following Specht's thesis, of the characters of wreath products $G \sim S_{n}$ ( $G$ any finite group), along the same lines as the account of the characters of the symmetric groups in Chapter I, §7: this may serve the reader as a sort of preparation for the more difficult Chapter IV on the characters of the finite general linear groups.

In Chapter II, one new feature is that the formula for the Hall polynomial (or, more precisely, for the polynomial $g_{S}(t)(4.1)$ ) is now made completely explicit in (4.11). The chapter is also enhanced by the appendix, written by A. Zelevinsky for the Russian edition.

The main addition to Chapter III is a section ( $\S 8$ ) on Schur's $Q$ functions, which are the case $t=-1$ of the Hall-Littlewood symmetric functions. In this context I have stopped short of Schur's theory of the projective representations of the symmetric groups, for which he introduced these symmetric functions, since (a) there are now several recent accounts of this theory available, among them the monograph of P . Hoffman and J. F. Humphreys in this series, and (b) this book is already long enough.

Chapters IV and V are unchanged, and require no comment.
Chapter VI is new, and contains an extended account of a family of symmetric functions $P_{\lambda}(x ; q, t)$, indexed as usual by partitions $\lambda$, and depending rationally on two parameters $q$ and $t$. These symmetric functions include as particular cases many of those encountered earlier in the book: for example, when $q=0$ they are the Hall-Littlewood functions of Chapter III, and when $q=t$ they are the Schur functions of Chapter I. They also include, as a limiting case, Jack's symmetric functions depending on a parameter $\alpha$. Many of the properties of the Schur functions generalize to these two-parameter symmetric functions, but the proofs (at present) are usually more elaborate.

Finally, Chapter VII (which was originally intended as an appendix to Chapter VI, but outgrew that format) is devoted to a study of the zonal polynomials, long familiar to statisticians. From one point of view, they are a special case of Jack's symmetric functions (the parameter $\alpha$ being equal to 2), but their combinatorial and group-theoretic connections make them worthy of study in their own right. This chapter can be read independently of Chapter VI.

London, 1995
I. G. M.

## Preface to the first edition

This monograph is the belated fulfilment of an undertaking made some years ago to publish a self-contained account of Hall polynomials and related topics.

These polynomials were defined by Philip Hall in the 1950s, originally as follows. If $M$ is a finite abelian $p$-group, it is a direct sum of cyclic subgroups, of orders $p^{\lambda_{1}}, p^{\lambda_{2}}, \ldots, p^{\lambda_{r}}$ say, where we may suppose that $\lambda_{1} \geqslant \lambda_{2} \geqslant \ldots \geqslant \lambda_{r}$. The sequence of exponents $\lambda=\left(\lambda_{1}, \ldots, \lambda_{r}\right)$ is a partition, called the type of $M$, which describes $M$ up to isomorphism. If now $\mu$ and $\nu$ are partitions, let $g_{\mu \nu}^{\lambda}(p)$ denote the number of subgroups $N$ of $M$ such that $N$ has type $\mu$ and $M / N$ has type $\nu$. Hall showed that $g_{\mu \nu}^{\lambda}(p)$ is a polynomial function of $p$, with integer coefficients, and was able to determine its degree and leading coefficient. These polynomials are the Hall polynomials.

More generally, in place of finite abelian p-groups we may consider modules of finite length over a discrete valuation ring 0 with finite residue field: in place of $g_{\mu \nu}^{\lambda}(p)$ we have $g_{\mu \nu}^{\lambda}(q)$ where $q$ is the number of elements in the residue field.

Next, Hall used these polynomials to construct an algebra which reflects the lattice structure of the finite p -modules. Let $H(q)$ be a free $\mathbf{Z}$-module with basis $\left(u_{\lambda}\right)$ indexed by the set of all partitions $\lambda$, and define a multiplication in $H(q)$ by using the $g_{\mu \nu}^{\lambda}(q)$ as structure constants, i.e.

$$
u_{\mu} u_{\nu}=\sum_{\lambda} g_{\mu \nu}^{\lambda}(q) u_{\lambda}
$$

It is not difficult to show (see Chapter II for the details) that $H(q)$ is a commutative, associative ring with identity, which is freely generated (as $\mathbf{Z}$-algebra) by the generators $u_{\left(1^{\prime}\right)}$ corresponding to the elementary D modules.

Symmetric functions now come into the picture in the following way. The ring of symmetric polynomials in $n$ independent variables is a polynomial ring $\mathbf{Z}\left[e_{1}, \ldots, e_{n}\right]$ generated by the elementary symmetric functions $e_{1}, \ldots, e_{n}$. By passing to the limit with respect to $n$, we obtain a ring $\Lambda=\mathbf{Z}\left[e_{1}, e_{2}, \ldots\right]$ of symmetric functions in infinitely many variables. We might therefore map $H(q)$ isomorphically onto $\Lambda$ by sending each generator $u_{\left(1^{\prime}\right)}$ to the elementary symmetric function $e_{r}$. However, it turns out that a better choice is to define a homomorphism $\psi: H(q) \rightarrow \Lambda \otimes \mathbf{Q}$ by $\psi\left(u_{\left(1^{\prime}\right)}\right)=q^{-r(r-1) / 2} e_{r}$ for each $r \geqslant 1$. In this way we obtain a family of
symmetric functions $\psi\left(u_{\lambda}\right)$, indexed by partitions. These symmetric functions are essentially the Hall-Littlewood functions, which are the subject of Chapter III. Thus the combinatorial lattice properties of finite D modules are reflected in the multiplication of Hall-Littlewood functions.

The formalism of symmetric functions therefore underlies Hall's theory, and Chapter I is an account of this formalism-the various types of symmetric functions, especially the Schur functions ( $S$-functions), and the relations between them. The character theory of the symmetric groups, as originally developed by Frobenius, enters naturally in this context. In an appendix we show how the $S$-functions arise 'in nature' as the traces of polynomial functors on the category of finite-dimensional vector spaces over a field of characteristic 0 .

In the past few years, the combinatorial substructure, based on the 'jeu de taquin', which underlies the formalism of $S$-functions and in particular the Littlewood-Richardson rule (Chapter I, §9), has become much better understood. I have not included an account of this, partly from a desire to keep the size of this monograph within reasonable bounds, but also because Schützenberger, the main architect of this theory, has recently published a complete exposition [S7].

The properties of the Hall polynomials and the Hall algebra are developed in Chapter II, and of the Hall-Littlewood symmetric functions in Chapter III. These are symmetric functions involving a parameter $t$, which reduce to $S$-functions when $t=0$ and to monomial symmetric functions when $t=1$. Many of their properties generalize known properties of $S$-functions.

Finally, Chapters IV and V apply the formalism developed in the previous chapters. Chapter IV is an account of J. A. Green's work [G11] on the characters of the general linear groups over a finite field, and we have sought to bring out, as in the case of the character theory of the symmetric groups, the role played by symmetric functions. Chapter V is also about general linear groups, but this time over a non-archimedean local field rather than a finite field, and instead of computing characters we compute spherical functions. In both these contexts Hall's theory plays a decisive part.

## Contents

I. SYMMETRIC FUNCTIONS

1. Partitions ..... 1
2. The ring of symmetric functions ..... 17
3. Schur functions ..... 40
4. Orthogonality ..... 62
5. Skew Schur functions ..... 69
6. Transition matrices ..... 99
7. The characters of the symmetric groups ..... 112
8. Plethysm ..... 135
9. The Littlewood-Richardson rule ..... 142
Appendix A: Polynomial functors and polynomial representations ..... 149
Appendix B: Characters of wreath products ..... 169
II. HALL POLYNOMIALS
10. Finite 0 -modules ..... 179
11. The Hall algebra ..... 182
12. The $L R$-sequence of a submodule ..... 184
13. The Hall polynomial ..... 187
Appendix (by A. Zelevinsky): Another proof of Hall's theorem ..... 199
III. HALL-LITTLEWOOD SYMMETRIC FUNCTIONS
14. The symmetric polynomials $R_{\lambda}$ ..... 204
15. Hall-Littlewood functions ..... 208
16. The Hall algebra again ..... 215
17. Orthogonality ..... 222
18. Skew Hall-Littlewood functions ..... 226
19. Transition matrices ..... 238
20. Green's polynomials ..... 246
21. Schur's $Q$-functions ..... 250
IV. THE CHARACTERS OF $G L_{n}$ OVER A FINITE FIELD
22. The groups $L$ and $M$ ..... 269
23. Conjugacy classes ..... 270
24. Induction from parabolic subgroups ..... 273
25. The characteristic map ..... 276
26. Construction of the characters ..... 280
27. The irreducible characters ..... 284
Appendix: proof of (5.1) ..... 291
V. THE HECKE RING OF $G L_{n}$ OVER A LOCAL FIELD
28. Local fields ..... 292
29. The Hecke ring $H(G, K)$ ..... 293
30. Spherical functions ..... 298
31. Hecke series and zeta functions for $G L_{n}(F)$ ..... 300
32. Hecke series and zeta functions for $G S p_{2 n}(F)$ ..... 302
VI. SYMMETRIC FUNCTIONS WITH TWO PARAMETERS
33. Introduction ..... 305
34. Orthogonality ..... 309
35. The operators $D_{n}^{r}$ ..... 315
36. The symmetric functions $P_{\lambda}(x ; q, t)$ ..... 321
37. Duality ..... 327
38. Pieri formulas ..... 331
39. The skew functions $P_{\lambda / \mu}, Q_{\lambda / \mu}$ ..... 343
40. Integral forms ..... 352
41. Another scalar product ..... 368
42. Jack's symmetric functions ..... 376
VII. ZONAL POLYNOMIALS
43. Gelfand pairs and zonal spherical functions ..... 388
44. The Gelfand pair ( $S_{2 n}, H_{n}$ ) ..... 401
45. The Gelfand pair $\left(G L_{n}(\mathbf{R}), O(n)\right)$ ..... 414
46. Integral formulas ..... 424
47. The complex case ..... 440
48. The quaternionic case ..... 446
BIBLIOGRAPHY ..... 457
NOTATION ..... 467
INDEX ..... 473

## I

## SYMMETRIC FUNCTIONS

## 1. Partitions

Many of the objects we shall consider in this book will turn out to be parametrized by partitions. The purpose of this section is to lay down some notation and terminology which will be used throughout, and to collect together some elementary results on orderings of partitions which will be used later.

## Partitions

A partition is any (finite or infinite) sequence

$$
\begin{equation*}
\lambda=\left(\lambda_{1}, \lambda_{2}, \ldots, \lambda_{r}, \ldots\right) \tag{1.1}
\end{equation*}
$$

of non-negative integers in decreasing order:

$$
\lambda_{1} \geqslant \lambda_{2} \geqslant \ldots \geqslant \lambda_{r} \geqslant \ldots
$$

and containing only finitely many non-zero terms. We shall find it convenient not to distinguish between two such sequences which differ only by a string of zeros at the end. Thus, for example, we regard $(2,1),(2,1,0)$, $(2,1,0,0, \ldots)$ as the same partition.

The non-zero $\lambda_{i}$ in (1.1) are called the parts of $\lambda$. The number of parts is the length of $\lambda$, denoted by $l(\lambda)$; and the sum of the parts is the weight of $\lambda$, denoted by $|\lambda|$ :

$$
|\lambda|=\lambda_{1}+\lambda_{2}+\ldots
$$

If $|\lambda|=n$ we say that $\lambda$ is a partition of $n$. The set of all partitions of $n$ is denoted by $\mathscr{P}_{n}$, and the set of all partitions by $\mathscr{P}$. In particular, $\mathscr{P}_{0}$ consists of a single element, the unique partition of zero, which we denote by 0 .

Sometimes it is convenient to use a notation which indicates the number of times each integer occurs as a part:

$$
\lambda=\left(1^{m_{1}} 2^{m_{2}} \ldots r^{m_{r}} \ldots\right)
$$

means that exactly $m_{i}$ of the parts of $\lambda$ are equal to $i$. The number

$$
\begin{equation*}
m_{i}=m_{i}(\lambda)=\operatorname{Card}\left\{j: \lambda_{j}=i\right\} \tag{1.2}
\end{equation*}
$$

is called the multiplicity of $i$ in $\lambda$.

## Diagrams

The diagram of a partition $\lambda$ may be formally defined as the set of points $(i, j) \in \mathbf{Z}^{2}$ such that $1 \leqslant j \leqslant \lambda_{i}$. In drawing such diagrams we shall adopt the convention, as with matrices, that the first coordinate $i$ (the row index) increases as one goes downwards, and the second coordinate $j$ (the column index) increases as one goes from left to right. $\dagger$ For example, the diagram of the partition (5441) is
consisting of 5 points or nodes in the top row, 4 in the second row, 4 in the third row, and 1 in the fourth row. More often it is convenient to replace the nodes by squares, in which case the diagram is
![](https://cdn.mathpix.com/cropped/2024_12_08_1df2f08562f6a73c5373g-013.jpg?height=278&width=335&top_left_y=867&top_left_x=555)

We shall usually denote the diagram of a partition $\lambda$ by the same symbol $\lambda$.

The conjugate of a partition $\lambda$ is the partition $\lambda^{\prime}$ whose diagram is the transpose of the diagram $\lambda$, i.e. the diagram obtained by reflection in the main diagonal. Hence $\lambda_{i}^{\prime}$ is the number of nodes in the $i$ th column of $\lambda$, or equivalently

$$
\begin{equation*}
\lambda_{i}^{\prime}=\operatorname{Card}\left\{j: \lambda_{j} \geqslant i\right\} . \tag{1.3}
\end{equation*}
$$

In particular, $\lambda_{1}^{\prime}=l(\lambda)$ and $\lambda_{1}=l\left(\lambda^{\prime}\right)$. Obviously $\lambda^{\prime \prime}=\lambda$.
For example, the conjugate of (5441) is (43331).
From (1.2) and (1.3) we have

$$
\begin{equation*}
m_{i}(\lambda)=\lambda_{i}^{\prime}-\lambda_{i+1}^{\prime} . \tag{1.4}
\end{equation*}
$$

$\dagger$ Some authors (especially Francophones) prefer the convention of coordinate geometry (in which the first coordinate increases from left to right and the second coordinate from bottom to top) and define the diagram of $\lambda$ to be the set of $(i, j) \in \mathbf{Z}^{2}$ such that $1 \leqslant i \leqslant \lambda_{j}$. Readers who prefer this convention should read this book upside down in a mirror.

For each partition $\lambda$ we define

$$
\begin{equation*}
n(\lambda)=\sum_{i \geqslant 1}(i-1) \lambda_{i} \tag{1.5}
\end{equation*}
$$

so that $n(\lambda)$ is the sum of the numbers obtained by attaching a zero to each node in the top row of the diagram of $\lambda$, a 1 to each node in the second row, and so on. Adding up the numbers in each column, we see that

$$
\begin{equation*}
n(\lambda)=\sum_{i \geqslant 1}\binom{\lambda_{i}^{\prime}}{2} \tag{1.6}
\end{equation*}
$$

Another notation for partitions which is occasionally useful is the following, due to Frobenius. Suppose that the main diagonal of the diagram of $\lambda$ consists of $r$ nodes $(i, i)(1 \leqslant i \leqslant r)$. Let $\alpha_{i}=\lambda_{i}-i$ be the number of nodes in the $i$ th row of $\lambda$ to the right of $(i, i)$, for $1 \leqslant i \leqslant r$, and let $\beta_{i}=\lambda_{i}^{\prime}-i$ be the number of nodes in the $i$ th column of $\lambda$ below $(i, i)$, for $1 \leqslant i \leqslant r$. We have $\alpha_{1}>\alpha_{2}>\ldots>\alpha_{r} \geqslant 0$ and $\beta_{1}>\beta_{2}>\ldots>$ $\beta_{r} \geqslant 0$, and we denote the partition $\lambda$ by

$$
\lambda=\left(\alpha_{1}, \ldots, \alpha_{r} \mid \beta_{1}, \ldots, \beta_{r}\right)=(\alpha \mid \beta) .
$$

Clearly the conjugate of $(\alpha \mid \beta)$ is $(\beta \mid \alpha)$.
For example, if $\lambda=(5441)$ we have $\alpha=(421)$ and $\beta=(310)$.
(1.7) Let $\lambda$ be a partition and let $m \geqslant \lambda_{1}, n \geqslant \lambda_{1}^{\prime}$. Then the $m+n$ numbers

$$
\lambda_{i}+n-i \quad(1 \leqslant i \leqslant n), \quad n-1+j-\lambda_{j}^{\prime} \quad(1 \leqslant j \leqslant m)
$$

are a permutation of $\{0,1,2, \ldots, m+n-1\}$.
Proof. The diagram of $\lambda$ is contained in the diagram of ( $m^{n}$ ), which is an $n \times m$ rectangle. Number the successive segments of the boundary line between $\lambda$ and its complement in $\left(m^{n}\right)$ (marked thickly in the picture) with the numbers $0,1, \ldots, m+n-1$, starting at the bottom. The numbers attached to the vertical segments are $\lambda_{i}+n-i(1 \leqslant i \leqslant n)$, and by transposition those attached to the horizontal segments are

$$
(m+n-1)-\left(\lambda_{j}^{\prime}+m-j\right)=n-1+j-\lambda_{j}^{\prime} \quad(1 \leqslant j \leqslant m) .
$$

![](https://cdn.mathpix.com/cropped/2024_12_08_1df2f08562f6a73c5373g-015.jpg?height=446&width=532&top_left_y=120&top_left_x=463)

Let

$$
f_{\lambda, n}(t)=\sum_{i=1}^{n} t^{\lambda_{i}+n-i}
$$

Then (1.7) is equivalent to the identity

$$
f_{\lambda, n}(t)+t^{m+n-1} f_{\lambda^{\prime}, m}\left(t^{-1}\right)=\left(1-t^{m+n}\right) /(1-t)
$$

## Skew diagrams and tableaux

If $\lambda, \mu$ are partitions, we shall write $\lambda \supset \mu$ to mean that the diagram of $\lambda$ contains the diagram of $\mu$, i.e. that $\lambda_{i} \geqslant \mu_{i}$ for all $i \geqslant 1$. The set-theoretic difference $\theta=\lambda-\mu$ is called a skew diagram. For example, if $\lambda=(5441)$ and $\mu=$ (432), the skew diagram $\lambda-\mu$ is the shaded region in the picture below:
![](https://cdn.mathpix.com/cropped/2024_12_08_1df2f08562f6a73c5373g-015.jpg?height=281&width=343&top_left_y=1229&top_left_x=559)

A path in a skew diagram $\theta$ is a sequence $x_{0}, x_{1}, \ldots, x_{m}$ of squares in $\theta$ such that $x_{i-1}$ and $x_{i}$ have a common side, for $1 \leqslant i \leqslant m$. A subset $\varphi$ of $\theta$ is said to be connected if any two squares in $\varphi$ can be connected by a path in $\varphi$. The maximal connected subsets of $\theta$ are themselves skew diagrams, called the connected components of $\theta$. In the example above, there are three connected components.

The conjugate of a skew diagram $\theta=\lambda-\mu$ is $\theta^{\prime}=\lambda^{\prime}-\mu^{\prime}$. Let $\theta_{i}=$ $\lambda_{i}-\mu_{i}, \theta_{i}^{\prime}=\lambda_{i}^{\prime}-\mu_{i}^{\prime}$, and

$$
|\theta|=\sum \theta_{i}=|\lambda|-|\mu| .
$$

A skew diagram $\theta$ is a horizontal $m$-strip (resp. a vertical m-strip) if $|\theta|=m$ and $\theta_{i}^{\prime} \leqslant 1$ (resp. $\theta_{i} \leqslant 1$ ) for each $i \geqslant 1$. In other words, a horizontal (resp. vertical) strip has at most one square in each column (resp. row).

If $\theta=\lambda-\mu$, a necessary and sufficient condition for $\theta$ to be a horizontal strip is that the sequences $\lambda$ and $\mu$ are interlaced, in the sense that $\lambda_{1} \geqslant \mu_{1} \geqslant \lambda_{2} \geqslant \mu_{2} \geqslant \ldots$.

A skew diagram $\theta$ is a border strip (also called a skew hook by some authors, and a ribbon by others) if $\theta$ is connected and contains no $2 \times 2$ block of squares, so that successive rows (or columns) of $\theta$ overlap by exactly one square. The length of a border strip $\theta$ is the total number $|\theta|$ of squares it contains, and its height is defined to be one less than the number of rows it occupies. If we think of a border strip $\theta$ as a set of nodes rather than squares, then by joining contiguous nodes by horizontal or vertical line segments of unit length we obtain a sort of staircase, and the height of $\theta$ is the number of vertical line segments or 'risers' in the staircase.

If $\lambda=\left(\alpha_{1}, \ldots, \alpha_{r} \mid \beta_{1}, \ldots, \beta_{r}\right)$ and $\mu=\left(\alpha_{2}, \ldots, \alpha_{r} \mid \beta_{2}, \ldots, \beta_{r}\right)$, then $\lambda-\mu$ is a border strip, called the border (or rim) of $\lambda$.

A (column-strict) tableau $T$ is a sequence of partitions

$$
\mu=\lambda^{(0)} \subset \lambda^{(1)} \subset \ldots \subset \lambda^{(r)}=\lambda
$$

such that each skew diagram $\theta^{(i)}=\lambda^{(i)}-\lambda^{(i-1)}(1 \leqslant i \leqslant r)$ is a horizontal strip. Graphically, $T$ may be described by numbering each square of the skew diagram $\theta^{(i)}$ with the number $i$, for $1 \leqslant i \leqslant r$, and we shall often think of a tableau as a numbered skew diagram in this way. The numbers inserted in $\lambda-\mu$ must increase strictly down each column (which explains the adjective 'column-strict') and weakly from left to right along each row. The skew diagram $\lambda-\mu$ is called the shape of the tableau $T$, and the sequence $\left(\left|\theta^{(1)}\right|, \ldots,\left|\theta^{(r)}\right|\right)$ is the weight of $T$.

We might also define row-strict tableaux by requiring strict increase along the rows and weak increase down the columns, but we shall have no use for them; and throughout this book a tableau (unqualified) will mean a column-strict tableau, as defined above.

A standard tableau is a tableau $T$ which contains each number $1,2, \ldots, r$ exactly once, so that its weight is $(1,1, \ldots, 1)$.

## Addition and multiplication of partitions

Let $\lambda, \mu$ be partitions. We define $\lambda+\mu$ to be the sum of the sequences $\lambda$ and $\mu$ :

$$
(\lambda+\mu)_{i}=\lambda_{i}+\mu_{i}
$$

Also we define $\lambda \cup \mu$ to be the partition whose parts are those of $\lambda$ and $\mu$, arranged in descending order. For example, if $\lambda=$ (321) and $\mu=(22)$, then $\lambda+\mu=(541)$ and $\lambda \cup \mu=$ (32221).

Next, we define $\lambda \mu$ to be the componentwise product of the sequences $\lambda, \mu$ :

$$
(\lambda \mu)_{i}=\lambda_{i} \mu_{i} .
$$

Also we define $\lambda \times \mu$ to be the partition whose parts are $\min \left(\lambda_{i}, \mu_{j}\right)$ for all $i \leqslant l(\lambda)$ and $j \leqslant l(\mu)$, arranged in descending order.

The operations + and $U$ are dual to each other, and so are the two multiplications:

$$
\begin{align*}
& (\lambda \cup \mu)^{\prime}=\lambda^{\prime}+\mu^{\prime},  \tag{1.8}\\
& (\lambda \times \mu)^{\prime}=\lambda^{\prime} \mu^{\prime} .
\end{align*}
$$

Proof. The diagram of $\lambda \cup \mu$ is obtained by taking the rows of the diagrams of $\lambda$ and $\mu$ and reassembling them in order of decreasing length. Hence the length of the $k$ th column of $\lambda \cup \mu$ is the sum of the lengths of the $k$ th columns of $\lambda$ and of $\mu$, i.e. $(\lambda \cup \mu)_{k}^{\prime}=\lambda_{k}^{\prime}+\mu_{k}^{\prime}$.

Next, the length of the $k$ th column of $\lambda \times \mu$ is equal to the number of pairs ( $i, j$ ) such that $\lambda_{i} \geqslant k$ and $\mu_{j} \geqslant k$, hence it is equal to $\lambda_{k}^{\prime} \mu_{k}^{\prime}$. Consequently $(\lambda \times \mu)_{k}^{\prime}=\lambda_{k}^{\prime} \mu_{k}^{\prime}$. I

## Orderings

Let $L_{n}$ denote the reverse lexicographic ordering on the set $\mathscr{P}_{n}$ of partitions of $n$ : that is to say, $L_{n}$ is the subset of $\mathscr{P}_{n} \times \mathscr{P}_{n}$ consisting of all $(\lambda, \mu)$ such that either $\lambda=\mu$ or the first non-vanishing difference $\lambda_{i}-\mu_{i}$ is positive. $L_{n}$ is a total ordering. For example, when $n=5, L_{5}$ arranges $\mathscr{P}_{5}$ in the sequence

$$
(5),(41),(32),\left(31^{2}\right),\left(2^{2} 1\right),\left(21^{3}\right),\left(1^{5}\right)
$$

Another total ordering on $\mathscr{P}_{n}$ is $L_{n}^{\prime}$, the set of all $(\lambda, \mu)$ such that either $\lambda=\mu$ or else the first non-vanishing difference $\lambda_{i}^{*}-\mu_{i}^{*}$ is negative, where $\lambda_{i}^{*}=\lambda_{n+1-i}$. The orderings $L_{n}, L_{n}^{\prime}$ are distinct as soon as $n \geqslant 6$. For example, if $\lambda=\left(31^{3}\right)$ and $\mu=\left(2^{3}\right)$ we have $(\lambda, \mu) \in L_{6}$ and $(\mu, \lambda) \in L_{6}^{\prime}$.
(1.9) Let $\lambda, \mu \in \mathscr{P}_{n}$. Then

$$
(\lambda, \mu) \in L_{n}^{\prime} \Leftrightarrow\left(\mu^{\prime}, \lambda^{\prime}\right) \in L_{n}
$$

Proof. Suppose that $(\lambda, \mu) \in L_{n}^{\prime}$ and $\lambda \neq \mu$. Then for some integer $i \geqslant 1$ we have $\lambda_{i}<\mu_{i}$, and $\lambda_{j}=\mu_{j}$ for $j>i$. If we put $k=\lambda_{i}$ and consider the diagrams of $\lambda$ and $\mu$, we see immediately that $\lambda_{j}^{\prime}=\mu_{j}^{\prime}$ for $1 \leqslant j \leqslant k$, and that $\lambda_{k+1}^{\prime}<\mu_{k+1}^{\prime}$, so that $\left(\mu^{\prime}, \lambda^{\prime}\right) \in L_{n}$. The converse is proved similarly.

An ordering which is more important than either $L_{n}$ or $L_{n}^{\prime}$ is the natural (partial) ordering $N_{n}$ on $\mathscr{P}_{n}$ (also called the dominance partial ordering by some authors), which is defined as follows:

$$
(\lambda, \mu) \in N_{n} \Leftrightarrow \lambda_{1}+\ldots+\lambda_{i} \geqslant \mu_{1}+\ldots+\mu_{i} \text { for all } i \geqslant 1 .
$$

As soon as $n \geqslant 6, N_{n}$ is not a total ordering. For example, the partitions $\left(31^{3}\right)$ and $\left(2^{3}\right)$ are incomparable with respect to $N_{6}$.

We shall write $\lambda \geqslant \mu$ in place of $(\lambda, \mu) \in N_{n}$.
(1.10) Let $\lambda, \mu \in \mathscr{P}_{n}$. Then

$$
\lambda \geqslant \mu \Rightarrow(\lambda, \mu) \in L_{n} \cap L_{n}^{\prime} .
$$

Proof. Suppose that $\lambda \geqslant \mu$. Then either $\lambda_{1}>\mu_{1}$, in which case $(\lambda, \mu) \in L_{n}$, or else $\lambda_{1}=\mu_{1}$. In that case either $\lambda_{2}>\mu_{2}$, in which case again $(\lambda, \mu) \in L_{n}$, or else $\lambda_{2}=\mu_{2}$. Continuing in this way, we see that $(\lambda, \mu) \in L_{n}$.

Also, for each $i \geqslant 1$, we have

$$
\begin{aligned}
\lambda_{i+1}+\lambda_{i+2}+\ldots & =n-\left(\lambda_{1}+\ldots+\lambda_{i}\right) \\
& \leqslant n-\left(\mu_{1}+\ldots+\mu_{i}\right) \\
& =\mu_{i+1}+\mu_{i+2}+\ldots
\end{aligned}
$$

Hence the same reasoning as before shows that $(\lambda, \mu) \in L_{n}^{\prime}$. |
Remark. It is not true in general that $N_{n}=L_{n} \cap L_{n}^{\prime}$. For example, when $n=12$ and $\lambda=\left(63^{2}\right), \mu=\left(5^{2} 1^{2}\right)$ we have $(\lambda, \mu) \in L_{12} \cap L_{12}^{\prime}$, but $(\lambda, \mu) \notin$ $N_{12}$.
(1.11) Let $\lambda, \mu \in \mathscr{P}_{n}$. Then

$$
\lambda \geqslant \mu \Leftrightarrow \mu^{\prime} \geqslant \lambda^{\prime} .
$$

Proof. Clearly it is enough to prove one implication. Suppose then that $\mu^{\prime} \ngtr \lambda^{\prime}$. Then for some $i \geqslant 1$ we have

$$
\lambda_{1}^{\prime}+\ldots+\lambda_{j}^{\prime} \leqslant \mu_{1}^{\prime}+\ldots+\mu_{j}^{\prime} \quad(1 \leqslant j \leqslant i-1)
$$

and

$$
\begin{equation*}
\lambda_{1}^{\prime}+\ldots+\lambda_{i}^{\prime}>\mu_{1}^{\prime}+\ldots+\mu_{i}^{\prime} \tag{1}
\end{equation*}
$$

from which it follows that $\lambda_{i}^{\prime}>\mu_{i}^{\prime}$.
Let $l=\lambda_{i}^{\prime}, m=\mu_{i}^{\prime}$. From (1) it follows that

$$
\begin{equation*}
\lambda_{i+1}^{\prime}+\lambda_{i+2}^{\prime}+\ldots<\mu_{i+1}^{\prime}+\mu_{i+2}^{\prime}+\ldots \tag{2}
\end{equation*}
$$

Now $\lambda_{i+1}^{\prime}+\lambda_{i+2}^{\prime}+\ldots$ is equal to the number of nodes in the diagram of $\lambda$ which lie to the right of the $i$ th column, and therefore

$$
\lambda_{i+1}^{\prime}+\lambda_{i+2}^{\prime}+\ldots=\sum_{j=1}^{l}\left(\lambda_{j}-i\right)
$$

Likewise

$$
\mu_{i+1}^{\prime}+\mu_{i+2}^{\prime}+\ldots=\sum_{j=1}^{m}\left(\mu_{j}-i\right)
$$

Hence from (2) we have

$$
\begin{equation*}
\sum_{j=1}^{m}\left(\mu_{j}-i\right)>\sum_{j=1}^{l}\left(\lambda_{j}-i\right) \geqslant \sum_{j=1}^{m}\left(\lambda_{j}-i\right) \tag{3}
\end{equation*}
$$

in which the right-hand inequality holds because $l>m$ and $\lambda_{j} \geqslant i$ for $1 \leqslant j \leqslant l$. From ( 3 ) we have

$$
\mu_{1}+\ldots+\mu_{m}>\lambda_{1}+\ldots+\lambda_{m}
$$

and therefore $\lambda \ngtr \mu$. |

## Raising operators

In this subsection we shall work not with partitions but with integer vectors $a=\left(a_{1}, \ldots, a_{n}\right) \in \mathbf{Z}^{n}$. The symmetric group $S_{n}$ acts on $\mathbf{Z}^{n}$ by permuting the coordinates, and the set

$$
P_{n}=\left\{b \in \mathbf{Z}^{n}: b_{1} \geqslant b_{2} \geqslant \ldots \geqslant b_{n}\right\}
$$

is a fundamental domain for this action, i.e. the $S_{n}$-orbit of each $a \in \mathbf{Z}^{n}$ meets $P_{n}$ in exactly one point, which we denote by $a^{+}$. Thus $a^{+}$is obtained by rearranging $a_{1}, \ldots, a_{n}$ in descending order of magnitude.

For $a, b \in \mathbf{Z}^{n}$ we define $a \geqslant b$ as before to mean

$$
a_{1}+\ldots+a_{i} \geqslant b_{1}+\ldots+b_{i} \quad(1 \leqslant i \leqslant n) .
$$

(1.12) Let $a \in \mathbf{Z}^{n}$. Then

$$
a \in P_{n} \Leftrightarrow a \geqslant w a \quad \text { for all } w \in S_{n} .
$$

Proof. Suppose that $a \in P_{n}$, i.e. $a_{1} \geqslant \ldots \geqslant a_{n}$. If $w a=b$, then $\left(b_{1}, \ldots, b_{n}\right)$ is a permutation of $\left(a_{1}, \ldots, a_{n}\right)$, and therefore

$$
a_{1}+\ldots+a_{i} \geqslant b_{1}+\ldots+b_{i} \quad(1 \leqslant i \leqslant n)
$$

so that $a \geqslant b$.

Conversely, if $a \geqslant w a$ for all $w \in S_{n}$ we have in particular

$$
\left(a_{1}, \ldots, a_{n}\right) \geqslant\left(a_{1}, \ldots, a_{i-1}, a_{i+1}, a_{i}, a_{i+2}, \ldots, a_{n}\right)
$$

for $1 \leqslant i \leqslant n-1$, from which it follows that

$$
a_{1}+\ldots+a_{i-1}+a_{i} \geqslant a_{1}+\ldots+a_{i-1}+a_{i+1}
$$

i.e. $a_{i} \geqslant a_{i+1}$. Hence $a \in P_{n}$. |

Let $\delta=(n-1, n-2, \ldots, 1,0) \in P_{n}$.
(1.13) Let $a \in P_{n}$. Then for each $w \in S_{n}$ we have $(a+\delta-w \delta)^{+} \geqslant a$.

Proof. Since $\delta \in P_{n}$ we have $\delta \geqslant w \delta$ by (1.12), hence

$$
a+\delta-w \delta \geqslant a .
$$

Let $b=(a+\delta-w \delta)^{+}$. Then again by (1.12) we have

$$
b \geqslant a+\delta-w \delta .
$$

Hence $b \geqslant a$. |
For each pair of integers $i, j$ such that $1 \leqslant i<j \leqslant n$ define $R_{i j}: \mathbf{Z}^{n} \rightarrow \mathbf{Z}^{n}$ by

$$
R_{i j}(a)=\left(a_{1}, \ldots, a_{i}+1, \ldots, a_{j}-1, \ldots, a_{n}\right) .
$$

Any product $R=\Pi_{i<j} R_{i j}^{r_{i j}}$ is called a raising operator. The order of the terms in the product is immaterial, since they commute with each other.
(1.14) Let $a \in \mathbf{Z}^{n}$ and let $R$ be a raising operator. Then

$$
R a \geqslant a .
$$

For we may assume that $R=R_{i j}$, in which case the result is obvious.
Conversely:
(1.15) Let $a, b \in \mathbf{Z}^{n}$ be such that $a \leqslant b$ and $a_{1}+\ldots+a_{n}=b_{1}+\ldots+b_{n}$. Then there exists a raising operator $R$ such that $b=R a$.

Proof. We may take

$$
R=\prod_{k=1}^{n-1} R_{k, k+1}^{r_{k}}
$$

where

$$
r_{k}=\sum_{i=1}^{k}\left(b_{i}-a_{i}\right) \geqslant 0
$$

(1.16) If $\lambda, \mu$ are partitions of $n$ such that $\lambda>\mu$, and if $\lambda, \mu$ are adjacent for the natural ordering (so that $\lambda \geqslant \nu \geqslant \mu$ implies either $\nu=\lambda$ or $\nu=\mu$ ), then $\lambda=R_{i j} \mu$ for some $i<j$.

Proof. Suppose first that $\lambda_{1}>\mu_{1}$, and let $i \geqslant 2$ be the least integer for which $\lambda_{1}+\ldots+\lambda_{i}=\mu_{1}+\ldots+\mu_{i}$. Then we have $\mu_{i}>\lambda_{i} \geqslant \lambda_{i+1} \geqslant \mu_{i+1}$, so that $\mu_{i}>\mu_{i+1}$. Consequently $\nu=R_{1 i} \mu$ is a partition, and one sees immediately that $\lambda \geqslant \nu$. Hence $\lambda=\nu=R_{1 i} \mu$.

If now $\lambda_{1}=\mu_{1}$, then for some $j>1$ we have $\lambda_{k}=\mu_{k}$ for $k<j$ and $\lambda_{j}>\mu_{j}$. The preceding argument may now be applied to the partitions $\left(\lambda_{j}, \lambda_{j+1}, \ldots\right.$ ) and $\left(\mu_{j}, \mu_{j+1}, \ldots\right)$. |

Remark. This proposition leads directly to an alternative proof of (1.11); for it shows that it is enough to prove (1.11) in the case that $\lambda=R_{i j} \mu$, in which case it is obvious.

## Examples

1. Let $\lambda$ be a partition. The hook-length of $\lambda$ at $x=(i, j) \in \lambda$ is defined to be

$$
h(x)=h(i, j)=\lambda_{i}+\lambda_{j}^{\prime}-i-j+1
$$

From (1.7'), with $\lambda$ and $\lambda^{\prime}$ interchanged, and $m=\lambda_{1}$, we have

$$
\sum_{j=1}^{\lambda_{1}} t^{\lambda_{j}^{\prime}+\lambda_{1}-j}+\sum_{j=1}^{n} t^{\lambda_{1}-1+j-\lambda_{j}}=\sum_{j=0}^{\lambda_{1}+n-1} t^{j}
$$

or, putting $\mu_{i}=\lambda_{i}+n-i(1 \leqslant i \leqslant n)$,

$$
\begin{equation*}
\sum_{j=1}^{\lambda_{1}} t^{h(1, j)}+\sum_{j=2}^{n} t^{\mu_{1}-\mu_{j}}=\sum_{j=1}^{\mu_{1}} t^{j} \tag{1}
\end{equation*}
$$

By writing down this identity for the partition $\left(\lambda_{i}, \lambda_{i+1}, \ldots\right)$ and then summing over $i=1,2, \ldots, l(\lambda)$ we obtain

$$
\begin{equation*}
\sum_{x \in \lambda} t^{h(x)}+\sum_{i<j} t^{\mu_{i}-\mu_{j}}=\sum_{i \geqslant 1} \sum_{j=1}^{\mu_{i}} t^{j} . \tag{2}
\end{equation*}
$$

From (2) it follows that

$$
\begin{equation*}
\prod_{x \in \lambda}\left(1-t^{h(x)}\right)=\frac{\prod_{i \geqslant 1} \prod_{j=1}^{\mu_{i}}\left(1-t^{j}\right)}{\prod_{i<j}\left(1-t^{\mu_{i}-\mu_{j}}\right)} \tag{3}
\end{equation*}
$$

and in particular, by dividing both sides of (3) by $(1-t)^{|\lambda|}$ and then setting $t=1$, that

$$
\begin{equation*}
\prod_{x \in \lambda} h(x)=\frac{\prod_{i>1} \mu_{i}!}{\prod_{i<j}\left(\mu_{i}-\mu_{j}\right)} . \tag{4}
\end{equation*}
$$

2. The sum of the hook-lengths of $\lambda$ is

$$
\sum_{x \in \lambda} h(x)=n(\lambda)+n\left(\lambda^{\prime}\right)+|\lambda| .
$$

3. For each $x=(i, j) \in \lambda$, the content of $x$ is defined to be $c(x)=j-i$. We have

$$
\sum_{x \in \lambda} c(x)=n\left(\lambda^{\prime}\right)-n(\lambda)
$$

If $n$ is any integer $\geq l(\lambda)$, the numbers $n+c(x)$ for $x$ in the $i$ th row of $\lambda$ are $n-i+1, \ldots, n-i+\lambda_{i}$, and therefore

$$
\prod_{x \in \lambda}\left(1-t^{n+c(x)}\right)=\prod_{i \geqslant 1} \frac{\varphi_{\lambda_{i}+n-i}(t)}{\varphi_{n-i}(t)}
$$

where $\varphi_{r}(t)=(1-t)\left(1-t^{2}\right) \ldots\left(1-t^{r}\right)$.
4. If $\lambda=\left(\lambda_{1}, \ldots, \lambda_{n}\right)=\left(\alpha_{1}, \ldots, \alpha_{r} \mid \beta_{1}, \ldots, \beta_{r}\right)$ in Frobenius notation, then

$$
\sum_{i=1}^{n} t^{i}\left(1-t^{-\lambda_{i}}\right)=\sum_{j=1}^{r}\left(t^{\beta_{j}+1}-t^{-a_{j}}\right)
$$

5. For any partition $\lambda$,

$$
\sum_{x \in \lambda}\left(h(x)^{2}-c(x)^{2}\right)=|\lambda|^{2}
$$

6. Let $\lambda$ be a partition and let $r, s$ be positive integers. Then $\lambda_{i}-\lambda_{i+r} \geqslant s$ for all $i \leqslant l(\lambda)$ if and only if $\lambda_{j}^{\prime}-\lambda_{j+s}^{\prime} \leqslant r$ for all $j \leqslant l\left(\lambda^{\prime}\right)$.
7. The set $\mathscr{P}_{n}$ of partitions of $n$ is a lattice with respect to the natural ordering: in other words, each pair $\lambda, \mu$ of partitions of $n$ has a least upper bound $\sigma=\sup (\lambda, \mu)$ and a greatest lower bound $\tau=\inf (\lambda, \mu)$. (Show that $\tau$ defined by

$$
\sum_{i=1}^{r} \tau_{i}=\min \left(\sum_{i=1}^{r} \lambda_{i}, \sum_{i=1}^{r} \mu_{i}\right)
$$

for all $r \geqslant 1$ is indeed a partition; this establishes the existence of $\inf (\lambda, \mu)$. Then define $\sigma=\sup (\lambda, \mu)$ by $\sigma^{\prime}=\inf \left(\lambda^{\prime}, \mu^{\prime}\right)$. The example $\lambda=\left(31^{3}\right), \mu=\left(2^{3}\right), \sigma=(321)$ shows that it is not always true that

$$
\left.\sum_{i=1}^{r} \sigma_{i}=\max \left(\sum_{i=1}^{r} \lambda_{i}, \sum_{i=1}^{r} \mu_{i}\right) \cdot\right)
$$

8. Let $p$ be an integer $\geqslant 2$.
(a) Let $\lambda, \mu$ be partitions of length $\leqslant m$ such that $\lambda \supset \mu$, and such that $\lambda-\mu$ is a border strip of length $p$. Let $\delta_{m}=(m-1, m-2, \ldots, 1,0)$ and let $\xi=\lambda+\delta_{m}$, $\eta=\mu+\delta_{m}$. Show that $\eta$ is obtained from $\xi$ by subtracting $p$ from some part $\xi_{i}$ of $\boldsymbol{\xi}$ and rearranging in descending order. (Consider the diagrams of $\boldsymbol{\xi}$ and $\boldsymbol{\eta}$.)
(b) With the same notation, suppose that $\xi$ has $m_{r}$ parts $\xi_{i}$ congruent to $r$ modulo $p$, for each $r=0,1, \ldots, p-1$. These $\xi_{i}$ may be written in the form $p \xi_{k}^{(r)}+r$ $\left(1 \leqslant k \leqslant m_{r}\right)$, where $\xi_{1}^{(r)}>\xi_{2}^{(r)}>\ldots>\xi_{m_{r}}^{(r)} \geqslant 0$. Let $\lambda_{k}^{(r)}=\xi_{k}^{(r)}-m_{r}+k$, so that $\lambda^{(r)}=\left(\lambda_{1}^{(r)}, \ldots, \lambda_{m r}^{(r)}\right)$ is a partition. The collection $\lambda^{*}=\left(\lambda^{(0)}, \lambda^{(1)}, \ldots, \lambda^{(p-1)}\right)$ is called the $p$-quotient of the partition $\lambda$. The effect of changing $m \geqslant l(\lambda)$ is to permute the $\lambda^{(r)}$ cyclically, so that $\lambda^{*}$ should perhaps be thought of as a 'necklace' of partitions.

The $m$ numbers $p s+r$, where $0 \leqslant s \leqslant m_{r}-1$ and $0 \leqslant r \leqslant p-1$, are all distinct. Let us arrange them in descending order, say $\tilde{\xi}_{1}>\ldots>\tilde{\xi}_{m}$, and define a partition $\tilde{\lambda}$ by $\tilde{\lambda}_{i}=\tilde{\xi}_{i}-m+i(1 \leqslant i \leqslant m)$. This partition $\tilde{\lambda}$ is called the $p$-core (or p-residue) of $\lambda$. Both $\tilde{\lambda}$ and $\lambda^{*}$ (up to cyclic permutation) are independent of $m$, provided that $m \geqslant l(\lambda)$.

If $\lambda=\tilde{\lambda}$ (i.e. if $\lambda^{*}$ is empty), the partition $\lambda$ is called a $p$-core. For example, the only 2-cores are the 'staircase' partitions $\delta_{m}=(m-1, m-2, \ldots, 1)$.

Following G. D. James, we may conveniently visualize this construction in terms of an abacus. The runners of the abacus are the half-lines $x \geqslant 0, y=r$ in the plane $\mathbf{R}^{2}$, where $r=0,1,2, \ldots, p-1$, and $\lambda$ is represented by the set of beads at the points with coordinates $\left(\xi_{k}^{(r)}, r\right)$ in the notation used above. The removal of a border strip of length $p$ from $\lambda$ is recorded on the abacus by moving some bead one unit to the left on its runner, and hence the passage from $\lambda$ to its $p$-core corresponds to moving all the beads on the abacus as far left as they will go.

This arithmetical construction of the $p$-quotient and $p$-core is an analogue for partitions of the division algorithm for integers (to which it reduces if the partition has only one part).
(c) The $p$-core of a partition $\lambda$ may be obtained graphically as follows. Remove a border strip of length $p$ from the diagram of $\lambda$ in such a way that what remains is the diagram of a partition, and continue removing border strips of length $p$ in this way as long as possible. What remains at the end of this process is the $p$-core $\tilde{\lambda}$ of $\lambda$, and it is independent of the sequence of border strips removed. For by (a) above, the removal of a border strip of length $p$ from $\lambda$ corresponds to subtracting $p$ from some part of $\xi$ and then rearranging the resulting sequence in descending order; the only restriction is that the resulting set of numbers should be all distinct and non-negative.
(d) The $p$-quotient of $\lambda$ can also be read off from the diagram of $\lambda$, as follows. For $s, t=0,1, \ldots, p-1$ let

$$
\begin{aligned}
R_{s} & =\left\{(i, j) \in \lambda: \lambda_{i}-i \equiv s(\bmod p)\right\}, \\
C_{i} & =\left\{(i, j) \in \lambda: j-\lambda_{j}^{\prime} \equiv t(\bmod p)\right\}
\end{aligned}
$$

so that $R_{s}$ consists of the rows of $\lambda$ whose right-hand node has content (Example 3) congruent to $s$ modulo $p$, and likewise for $C_{l}$. If now $(i, j) \in R_{s} \cap C_{b}$, the hook-length at $(i, j)$ is

$$
h(i, j)=\lambda_{i}+\lambda_{j}^{\prime}-i-j+1 \equiv s-t+1(\bmod p)
$$

and therefore $p$ divides $h(i, j)$ if and only if $t \equiv s+1(\bmod p)$.
On the other hand, if $\xi_{i}=p \xi_{k}^{(r)}+r$ as in (b) above, the hook lengths of $\lambda$ in the $i$ th row are the elements of the sequence $\left(1,2, \ldots, \xi_{i}\right)$ after deletion of $\xi_{i}-$ $\xi_{i+1}, \ldots, \xi_{i}-\xi_{m}$. Hence those divisible by $p$ are the elements of the sequence $\left(p, 2 p, \ldots, p \xi_{k}^{(r)}\right)$ after deletion of $p\left(\xi_{k}^{(r)}-\xi_{k+1}^{(r)}\right), \ldots, p\left(\xi_{k}^{(r)}-\xi_{m}^{(r)}\right)$. They are therefore $p$ times the hook lengths in the $k$ th row of $\lambda^{(r)}$, and in particular there are $\lambda_{k}^{(r)}$ of them.
It follows that each $\lambda^{(r)}$ is embedded in $\lambda$ as $R_{s} \cap C_{s+1}$, where $s \equiv r-m(\bmod p)$, and that the hook lengths in $\lambda^{(r)}$ are those of the corresponding nodes in $R_{s} \cap C_{s+1}$, divided by $p$. In particular, if $m$ is a multiple of $p$ (which we may assume without loss of generality) then $\lambda^{(r)}=\lambda \cap R_{r} \cap C_{r+1}$ for each $r$ (where $C_{p}=C_{0}$ ).
(e) From (c) and (d) it follows that the $p$-core (resp. $p$-quotient) of the conjugate partition $\lambda^{\prime}$ is the conjugate of the $p$-core (resp. $p$-quotient) of $\lambda$.
(f) For any two partitions $\lambda, \mu$ we shall write

$$
\lambda \sim_{p} \mu
$$

to mean that $\tilde{\lambda}=\tilde{\mu}$, i.e. that $\lambda$ and $\mu$ have the same $p$-core. As above, let $\xi=\lambda+\delta_{m}, \eta=\mu+\delta_{m}$, where $m \geqslant \max (l(\lambda), l(\mu))$. Then it follows from (a) and (b) that $\lambda \sim_{p} \mu$ if and only if $\eta \equiv w \xi(\bmod p)$ for some permutation $w \in S_{m}$. Also, from (e) above it follows that $\lambda \sim_{p} \mu$ if and only if $\lambda^{\prime} \sim_{p} \mu^{\prime}$.
(g) From the definitions in (b) it follows that a partition $\lambda$ is uniquely determined by its $p$-core $\tilde{\lambda}$ and its $p$-quotient $\lambda^{*}$. Since $|\lambda|=|\tilde{\lambda}|+p\left|\lambda^{*}\right|$, the generating function for partitions with a given $p$-core $\bar{\lambda}$ is

$$
\sum_{\tilde{\mu}=\bar{\lambda}} t^{|\mu|}=t^{|\bar{\lambda}|} P\left(t^{p}\right)^{p}
$$

where $P(t)=\Pi_{n>1}\left(1-t^{n}\right)^{-1}$ is the partition generating function. Hence the generating function for $p$-cores is

$$
\begin{aligned}
\sum t^{|\bar{\lambda}|} & =P(t) / P\left(t^{p}\right)^{p} \\
& =\prod_{n \geqslant 1} \frac{\left(1-t^{n p}\right)^{p}}{1-t^{n}} .
\end{aligned}
$$

In particular, when $p=2$ we obtain the identity

$$
\begin{equation*}
\sum_{m \geqslant 1} t^{m(m-1) / 2}=\prod_{n \geqslant 1} \frac{1-t^{2 n}}{1-t^{2 n-1}} . \tag{*}
\end{equation*}
$$

We shall leave it to the interested reader to write down the corresponding identity for $p>2$. It turns out to be a specialization of the 'denominator formula' for the affine Lie algebra of type $A_{p-1}^{(1)}[\mathrm{K} 1]$. Thus in particular (*) is a specialization of Jacobi's triple product identity.
9. (a) A partition is strict if all its parts are distinct. If $\mu=\left(\mu_{1}, \ldots, \mu_{r}\right)$ is a strict partition of length $r$ (so that $\mu_{1}>\mu_{2}>\ldots>\mu_{r}>0$ ), the double of $\mu$ is the partition $\lambda=\left(\mu_{1}, \ldots, \mu_{r} \mid \mu_{1}-1, \ldots, \mu_{r}-1\right)$ in Frobenius notation, and the diagram of $\lambda$ is called the double diagram $D(\mu)$ of $\mu$. The part of $D(\mu)$ that lies above the main diagonal is called the shifted diagram $S(\mu)$ of $\mu$; it is obtained from the usual diagram of $\mu$ by moving the $i$ th row ( $i-1$ ) squares to the right, for each $i>1$. Thus $D(\mu)$ consists of $S(\mu)$ dovetailed into its reflection in the diagonal.

Let $m \geqslant l(\lambda)=\mu_{1}$, and let $\xi=\lambda+\delta_{m}$ where $\delta_{m}=(m-1, m-2, \ldots, 1,0)$ as in Example 8. The first $r$ parts of $\xi$ are $\mu_{1}+m, \ldots, \mu_{r}+m$, and since the partition $\left(\lambda_{r+1}, \ldots, \lambda_{m}\right.$ ) is the conjugate of $\left(\mu_{1}-r, \ldots, \mu_{r}-1\right)$, it follows from (1.7) that $\xi$ is obtained from the sequence ( $\mu_{1}+m, \mu_{2}+m, \ldots, \mu_{r}+m, m-1, m-2, \ldots, 1,0$ ) by deleting the numbers $m-\mu_{r}, \ldots, m-\mu_{1}$. Hence $\boldsymbol{\xi}$ satisfies the following condition:
(*) an integer $j$ between 0 and $2 m$ occurs in $\boldsymbol{\xi}$ if and only if $2 m-j$ does not.
Conversely, if $\boldsymbol{\xi}$ satisfies this condition, then $\boldsymbol{\lambda}$ is the double of a strict partition.
(b) Let $p$ be an integer $\geqslant 2$, and consider the $p$-quotient and $p$-core (Example 8) of $\lambda$. Without loss of generality we may assume that $m$ is a multiple of $p$, so that $2 m=(n+1) p$ with $n$ odd. As in Example 8, suppose that for each $r=0,1, \ldots, p-1$ the $\xi_{i}$ congruent to $r$ modulo $p$ are $p \xi_{k}^{(r)}+r\left(1 \leqslant k \leqslant m_{r}\right)$, where $\xi_{1}^{(r)}>\ldots>$ $\xi_{m_{r}}^{(r)} \geqslant 0$. Since $p \xi_{k}^{(r)}+r \leqslant 2 m=(n+1) p$, it follows that $\xi_{k}^{(r)} \leqslant n$ if $r \neq 0$, and that $\xi_{k}^{(0)} \leqslant n+1$.

Suppose first that $r \neq 0$, and let $s=p-r$. From above, for each $k=1,2, \ldots, m_{r}$ the number $2 m-\left(p \xi_{k}^{(r)}+r\right)=p\left(n-\xi_{k}^{(r)}\right)+s$ does not occur in $\xi$. Hence the numbers $n-\xi_{k}^{(r)}\left(1 \leqslant k \leqslant m_{r}\right)$ and $\xi_{k}^{(s)}\left(1 \leqslant k \leqslant m_{s}\right)$ fill the interval [0, $n$ ] of $\mathbf{Z}$, from which it follows first that $m_{r}+m_{s}=n+1$, and second (by (1.7)) that the components $\lambda^{(r)}$ and $\lambda^{(s)}$ of the $p$-quotient of $\lambda$ are conjugate partitions. In particular, if $p$ is even, $\lambda^{(p / 2)}$ is self-conjugate.

Next, if $r=0$ we have $2 m-p \xi_{k}^{(0)}=p\left(n+1-\xi_{k}^{(0)}\right.$ ) and therefore the sequence $\xi^{(0)}=\left(\xi_{1}^{(0)}, \ldots, \xi_{m_{0}}^{(0)}\right)$ satisfies the condition (*), so that $2 m_{0}=n+1$ and $\lambda^{(0)}$ is the double of a strict partition.

Finally, it follows from the definition of the p-core in Example 8(b) and the fact that $m_{r}+m_{s}=n+1$ when $r+s \equiv 0(\bmod p)$ that the sequence $\bar{\xi}$ (loc. cit.) satisfies the condition (*), and hence the $p$-core $\tilde{\lambda}$ is the double of a strict partition.
(c) Let $\mu$ as before be a strict partition of length $r$. If $(i, j) \in \mu$ and $k \geqslant i$, an $(i, j)_{k}-b a r$ of $\mu$ consists of the squares $(a, b) \in \mu$ such that $a=i$ or $k$ and $b \geqslant j$, and is defined only when the diagram obtained by the removal of these squares has no two rows of equal length; so that (i) if $k>i$ there is an $(i, j)_{k}$-bar only when $j=1$, in which case it consists of the $i$ th and $k$ th rows of $\mu$; and (ii) when $k=i$ there is an $(i, j)_{k}$-bar only when $j-1$ is not equal to any of $\mu_{i+1}, \ldots, \mu_{r}$. The length of a bar is the number of squares it contains.

Show that for each $i \geqslant 1$ the lengths of the $(i, j)_{k}$-bars of $\mu$ are the hook lengths in the double diagram $D(\mu)$ at the squares $(i, k)$ with $k>i$, that is to say at the squares in the $i$ th row of the shifted diagram $S(\mu)$.
Let $\nu$ be the strict partition whose diagram is obtained from that of $\mu$ by removing a bar of length $p>1$ and then rearranging the rows in descending order of length. Thus $\nu$ is obtained from $\mu$ in case (i) by deleting $\mu_{i}$ and $\mu_{k}$, where $\mu_{i}+\mu_{k}=p$, and in case (ii) by replacing $\mu_{i}$ by $\mu_{i}-p$ and rearranging. Show that the double diagram of $\nu$ is obtained from that of $\mu$ by removing two border strips of length $p$, one of which lies in rows $i, i+1, \ldots$, and the other in columns $i, i+1, \ldots$.
(d) A strict partition is a $p$-bar core if it contains no bars of length $p$. By starting with a strict partition $\mu$, removing a bar of length $p$, rearranging the rows if necessary, then repeating the process as often as necessary, we shall end up with a strict partition $\bar{\mu}$ called the $p$-bar core of $\mu$. It follows from above that the double of $\bar{\mu}$ is the $p$-core (Example 8) of the double of $\mu$, and that $\bar{\mu}$ is independent of the sequence of moves described above to reach it.
10. For any partition $\lambda$, let

$$
h(\lambda)=\prod_{x \in \lambda} h(x)
$$

denote the product of the hook-lengths of $\lambda$ (Example 1). With the notation of Example 8, we have

$$
h(\lambda)=p^{\left|\lambda^{*}\right|} h\left(\lambda^{*}\right) h^{\prime}(\lambda),
$$

where $h\left(\lambda^{*}\right)=\prod_{r=0}^{p-1} h\left(\lambda^{(r)}\right)$, and $h^{\prime}(\lambda)$ is the product of the hook-lengths $h(x)$ that are not multiples of $p$. (Use formula (4) of Example 1.)
If, moreover, $p$ is prime, then

$$
h^{\prime}(\lambda) \equiv \sigma_{\lambda} h(\bar{\lambda}) \quad(\bmod p)
$$

where $\sigma_{\lambda}= \pm 1$. Hence in particular, when $p$ is prime; $\lambda$ is a $p$-core if and only if $h(\lambda)$ is prime to $p$.
11. Let $\lambda$ be a partition. The content polynomial of $\lambda$ is the polynomial

$$
c_{\lambda}(X)=\prod_{x \in \lambda}(X+c(x))
$$

(see §3, Example 4) where $X$ is an indeterminate.
(a) Let $m \geqslant l(\lambda)$ and let $\xi_{i}=\lambda_{i}+m-i(1 \leqslant i \leqslant m)$ as in Example 8. Then

$$
\frac{c_{\lambda}(X+m)}{c_{\lambda}(X+m-1)}=\prod_{i=1}^{m} \frac{X+\xi_{i}}{X+m-i} .
$$

(b) Let $p$ be a prime number. If $\theta$ is a border strip of length $p$, the contents $c(x)$, $x \in \theta$ are $p$ consecutive integers, hence are congruent modulo $p$ to $0,1, \ldots, p-1$ in some order. If $\theta=\lambda-\mu$, it follows that

$$
c_{\lambda}(X) \equiv c_{\mu}(X)\left(X^{p}-X\right) \quad(\bmod p)
$$

Hence, for any partition $\lambda$,

$$
c_{\lambda}(X) \equiv c_{\lambda}(X)\left(X^{p}-X\right)^{\left|\lambda^{\bullet}\right|}(\bmod p)
$$

where (Example 8) $\bar{\lambda}$ and $\lambda^{*}$ are respectively the $p$-core and $p$-quotient of $\lambda$.
(c) From (a) and (b) it follows that if $p$ is prime and $|\lambda|=|\mu|$, then

$$
\lambda \sim_{p} \mu \Leftrightarrow c_{\lambda}(X) \equiv c_{\mu}(X) \quad(\bmod p)
$$

12. Let $\mathscr{P}_{n}$ denote the set of partitions of $n$, and $\mathrm{N}^{+}$the set of positive integers. For each $r \geqslant 1$ let

$$
\begin{aligned}
& a(r, n)=\operatorname{Card}\left\{(\lambda, i) \in \mathscr{P}_{n} \times \mathrm{N}^{+}: \lambda_{i}=r\right\}, \\
& b(r, n)=\operatorname{Card}\left\{(\lambda, i) \in \mathscr{P}_{n} \times \mathrm{N}^{+}: m_{i}(\lambda) \geqslant r\right\} .
\end{aligned}
$$

Show that

$$
a(r, n)=b(r, n)=p(n-r)+p(n-2 r)+\ldots
$$

where $p(m)$ is the number of partitions of $m$.
Deduce that

$$
\prod_{\lambda \in \mathscr{P}_{n}}\left(\prod_{i>1} i^{m_{i}(\lambda)}\right)=\prod_{\lambda \in \mathscr{P}_{n}}\left(\prod_{i>1} m_{i}(\lambda)!\right)
$$

Let $h(r, n)=\operatorname{Card}\{(\lambda, x):|\lambda|=n, x \in \lambda$ and $h(x)=r\}$, where $($ Example 1) $h(x)$ is the hook-length of $\lambda$ at $x$. Show that

$$
h(r, n)=r a(r, n)
$$

13. A matrix of non-negative real numbers is said to be doubly stochastic if its row and column sums are all equal to 1 .
Let $\lambda, \mu$ be partitions of $n$. Show that $\lambda \geqslant \mu$ if and only if there exists a doubly stochastic $n \times n$ matrix $M$ such that $M \lambda=\mu$ (where $\lambda, \mu$ are regarded as column vectors of length $n$ ). (If $\lambda \geqslant \mu$ we may by (1.16) assume that $\lambda=R_{i j} \mu$. Now define $M=\left(m_{r s}\right)$ by

$$
m_{i i}=m_{j j}=\left(\lambda_{i}-\lambda_{j}-1\right) /\left(\lambda_{i}-\lambda_{j}\right), \quad m_{i j}=m_{j i}=1 /\left(\lambda_{i}-\lambda_{j}\right)
$$

and $m_{r s}=\delta_{r s}$ otherwise. Then $M$ is doubly stochastic and $M \lambda=\mu$.)
14. Let $\lambda$ be a partition. If $s=(i, j)$, with $i, j \geqslant 1$, is any square in the first quadrant, we define the hook-length of $\lambda$ at $s$ to be $h(s)=\lambda_{i}+\lambda_{j}^{\prime}-i-j+1$. When $s \in \lambda$ this agrees with the previous definition, and when $s \notin \lambda$ it is negative. For each $r \in \mathbf{Z}$ let $u_{r}(\lambda)$ denote the number of squares $s$ in the first quadrant such that $h(s)=r$. Show that $u_{-r}(\lambda)=u_{r}(\lambda)+r$ for all $r \in \mathbf{Z}$.
If $u_{r}(\lambda)=u_{r}(\mu)$ for all $r \in \mathbf{Z}$, does it follow that $\lambda=\mu$ or $\lambda=\mu^{\prime}$ ?
15. (a) Let $\lambda$ be a partition, thought of as an infinite sequence, and let $\sigma$ be the sequence $\left(\frac{1}{2}-i\right)_{i>1}$. Show that $\lambda+\sigma$ and $-\left(\lambda^{\prime}+\sigma\right)$ are complementary subsequences of $\mathbf{Z}+\frac{1}{2}$.
(b) Let $g_{\lambda}(t)=(1-t) \sum_{i>1} t^{\lambda_{i}-i}$, which is a polynomial in $t$ and $t^{-1}$. Show that $g_{\lambda}(t)=g_{\lambda^{\prime}}\left(t^{-1}\right)$.
16. Let $\lambda, \mu, \nu, \pi$ be partitions such that $\lambda \geqslant \nu$ and $\mu \geqslant \pi$. Show that $\lambda+\mu \geqslant$ $\nu+\pi, \lambda \cup \mu \geqslant \nu \cup \pi, \lambda \mu \geqslant \nu \pi$, and $\lambda \times \mu \geqslant \nu \times \pi$.
17. Let $\lambda=\left(\lambda_{1}, \ldots, \lambda_{n}\right)$ be a partition of length $\leqslant n$ with $\lambda_{1} \leqslant n$, so that $\lambda \subset\left(n^{n}\right)$. The complement of $\lambda$ in $\left(n^{n}\right)$ is the partition $\hat{\lambda}=\left(\hat{\lambda}_{1}, \ldots, \hat{\lambda}_{n}\right)$ defined by $\hat{\lambda}_{i}=n-$ $\lambda_{n+1-i}$, so that the diagram of $\hat{\lambda}$ is obtained by giving the complement of the diagram of $\lambda$ in ( $n^{n}$ ) a half-turn.

Suppose now that $\lambda=(\alpha \mid \beta)$ in Frobenius notation. Show that $\hat{\lambda}=(\hat{\beta} \mid \hat{\alpha})$, where $\hat{\alpha}$ (resp. $\hat{\beta}$ ) is the complement in $[0, n-1]$ of the sequence $\alpha$ (resp. $\beta$ ).
18. For $\lambda, \mu$ partitions of $n$, let $\pi_{n}$ be the probability that $\lambda \geqslant \mu$. Does $\pi_{n} \rightarrow 0$ as $n \rightarrow \infty$ ?

## Notes and references

The idea of representing a partition by its diagram goes back to Ferrers and Sylvester, and the diagram of a partition is called by some authors the Ferrers diagram or graph, and by others the Young diagram. Tableaux and raising operators were introduced by Alfred Young in his series of papers on quantitative substitutional analysis [Y2].

Example 8. The notion of the $p$-core of a partition was introduced by Nakayama [N1], and the p-quotient by Robinson [R6] and Littlewood [L10].
Example 9. The notions of a bar and of the $p$-bar core are due to A. O. Morris [M14]. See also Morris and Yaseen [M16] and Humphreys [H12].

## 2. The ring of symmetric functions

Consider the ring $\mathbf{Z}\left[x_{1}, \ldots, x_{n}\right]$ of polynomials in $n$ independent variables $x_{1}, \ldots, x_{n}$ with rational integer coefficients. The symmetric group $S_{n}$ acts on this ring by permuting the variables, and a polynomial is symmetric if it is invariant under this action. The symmetric polynomials form a subring

$$
\Lambda_{n}=\mathbf{Z}\left[x_{1}, \ldots, x_{n}\right]^{S_{n}}
$$

$\Lambda_{n}$ is a graded ring: we have

$$
\Lambda_{n}=\underset{k>0}{\oplus} \Lambda_{n}^{k}
$$

where $\Lambda_{n}^{k}$ consists of the homogeneous symmetric polynomials of degree $k$, together with the zero polynomial.

For each $\alpha=\left(\alpha_{1}, \ldots, \alpha_{n}\right) \in \mathbf{N}^{n}$ we denote by $x^{\alpha}$ the monomial

$$
x^{\alpha}=x_{1}^{\alpha_{1}} \ldots x_{n}^{\alpha_{n}}
$$

Let $\lambda$ be any partition of length $\leqslant n$. The polynomial

$$
\begin{equation*}
m_{\lambda}\left(x_{1}, \ldots, x_{n}\right)=\sum x^{\alpha} \tag{2.1}
\end{equation*}
$$

summed over all distinct permutations $\alpha$ of $\lambda=\left(\lambda_{1}, \ldots, \lambda_{n}\right)$, is clearly symmetric, and the $m_{\lambda}$ (as $\lambda$ runs through all partitions of length $\leqslant n$ ) form a Z-basis of $\Lambda_{n}$. Hence the $m_{\lambda}$ such that $l(\lambda) \leqslant n$ and $|\lambda|=k$ form a Z-basis of $\Lambda_{n}^{k}$; in particular, as soon as $n \geqslant k$, the $m_{\lambda}$ such that $|\lambda|=k$ form a Z-basis of $\Lambda_{n}^{k}$.

In the theory of symmetric functions, the number of variables is usually irrelevant, provided only that it is large enough, and it is often more convenient to work with symmetric functions in infinitely many variables. To make this idea precise, let $m \geqslant n$ and consider the homomorphism

$$
\mathbf{Z}\left[x_{1}, \ldots, x_{m}\right] \rightarrow \mathbf{Z}\left[x_{1}, \ldots, x_{n}\right]
$$

which sends each of $x_{n+1}, \ldots, x_{m}$ to zero and the other $x_{i}$ to themselves. On restriction to $\Lambda_{m}$ this gives a homomorphism

$$
\rho_{m, n}: \Lambda_{m} \rightarrow \Lambda_{n}
$$

whose effect on the basis $\left(m_{\lambda}\right)$ is easily described; it sends $m_{\lambda}\left(x_{1}, \ldots, x_{m}\right)$ to $m_{\lambda}\left(x_{1}, \ldots, x_{n}\right)$ if $l(\lambda) \leqslant n$, and to 0 if $l(\lambda)>n$. It follows that $\rho_{m, n}$ is surjective. On restriction to $\Lambda_{m}^{k}$ we have homomorphisms

$$
\rho_{m, n}^{k}: \Lambda_{m}^{k} \rightarrow \Lambda_{n}^{k}
$$

for all $k \geqslant 0$ and $m \geqslant n$, which are always surjective, and are bijective for $m \geqslant n \geqslant k$.

We now form the inverse limit

$$
\Lambda^{k}=\underset{n}{\lim } \Lambda_{n}^{k}
$$

of the $\mathbf{Z}$-modules $\Lambda_{n}^{k}$ relative to the homomorphisms $\rho_{m, n}^{k}$ : an element of $\Lambda^{k}$ is by definition a sequence $f=\left(f_{n}\right)_{n>0}$, where each $f_{n}=f_{n}\left(x_{1}, \ldots, x_{n}\right)$ is a homogeneous symmetric polynomial of degree $k$ in $x_{1}, \ldots, x_{n}$, and $f_{m}\left(x_{1}, \ldots, x_{n}, 0, \ldots, 0\right)=f_{n}\left(x_{1}, \ldots, x_{n}\right)$ whenever $m \geqslant n$. Since $\rho_{m, n}^{k}$ is an isomorphism for $m \geqslant n \geqslant k$, it follows that the projection

$$
\rho_{n}^{k}: \Lambda^{k} \rightarrow \Lambda_{n}^{k}
$$

which sends $f$ to $f_{n}$, is an isomorphism for all $n \geqslant k$, and hence that $\Lambda^{k}$ has a Z-basis consisting of the monomial symmetric functions $m_{\lambda}$ (for all partitions $\lambda$ of $k$ ) defined by

$$
\rho_{n}^{k}\left(m_{\lambda}\right)=m_{\lambda}\left(x_{1}, \ldots, x_{n}\right)
$$

for all $n \geqslant k$. Hence $\Lambda^{k}$ is a free $\mathbf{Z}$-module of rank $p(k)$, the number of partitions of $k$.
Now let

$$
\Lambda=\underset{k>0}{\bigoplus} \Lambda^{k}
$$

so that $\Lambda$ is the free $\mathbf{Z}$-module generated by the $m_{\lambda}$ for all partitions $\lambda$. We have surjective homomorphisms

$$
\rho_{n}=\bigoplus_{k>0} \rho_{n}^{k}: \Lambda \rightarrow \Lambda_{n}
$$

for each $n \geqslant 0$, and $\rho_{n}$ is an isomorphism in degrees $k \leqslant n$.
It is clear that $\Lambda$ has a structure of a graded ring such that the $\rho_{n}$ are ring homomorphisms. The graded ring $\Lambda$ thus defined is called the ring of symmetric functions $\dagger$ in countably many independent variables $x_{1}, x_{2}, \ldots$.

Remarks. $1 . \Lambda$ is not the inverse limit (in the category of rings) of the rings $\Lambda_{n}$ relative to the homomorphisms $\rho_{m, n}$. This inverse limit, $\hat{\Lambda}$ say, contains for example the infinite product $\prod_{i-1}^{\infty}\left(1+x_{i}\right)$, which does not belong to $\Lambda$, since the elements of $\Lambda$ are by definition finite sums of monomial symmetric functions $m_{\lambda}$. However, $\Lambda$ is the inverse limit of the $\Lambda_{n}$ in the category of graded rings.
2. We could use any commutative ring $A$ in place of $\mathbf{Z}$ as coefficient ring; in place of $\Lambda$ we should obtain $\Lambda_{A} \cong \Lambda \otimes_{\mathrm{Z}} A$.

## Elementary symmetric functions

For each integer $r \geqslant 0$ the $r$ th elementary symmetric function $e_{r}$ is the sum of all products of $r$ distinct variables $x_{i}$, so that $e_{0}=1$ and

$$
e_{r}=\sum_{i_{1}<i_{2}<\ldots<i_{r}} x_{i_{1}} x_{i_{2}} \ldots x_{i_{r}}=m_{\left(1^{\prime}\right)}
$$

for $r \geqslant 1$. The generating function for the $e_{r}$ is

$$
\begin{equation*}
E(t)=\sum_{r>0} e_{r} t^{r}=\prod_{i>1}\left(1+x_{i} t\right) \tag{2.2}
\end{equation*}
$$

$\dagger$ The elements of $\Lambda$ (unlike those of $\Lambda_{n}$ ) are no longer polynomials: they are formal infinite sums of monomials. We have therefore reverted to the older terminology of 'symmetric functions'.
( $t$ being another variable), as one sees by multiplying out the product on the right. (If the number of variables is finite, say $n$, then $e_{r}$ (i.e. $\rho_{n}\left(e_{r}\right)$ ) is zero for all $r>n$, and (2.2) then takes the form

$$
\sum_{r=0}^{n} e_{r} t^{r}=\prod_{i=1}^{n}\left(1+x_{i} t\right)
$$

both sides now being elements of $\Lambda_{n}[t]$. Similar remarks will apply to many subsequent formulas, and we shall usually leave it to the reader to make the necessary (and obvious) adjustments.)

For each partition $\lambda=\left(\lambda_{1}, \lambda_{2}, \ldots\right)$ define

$$
e_{\lambda}=e_{\lambda_{1}} e_{\lambda_{2}} \ldots
$$

(2.3) Let $\lambda$ be a partition, $\lambda^{\prime}$ its conjugate. Then

$$
e_{\lambda^{\prime}}=m_{\lambda}+\sum_{\mu} a_{\lambda \mu} m_{\mu}
$$

where the $a_{\lambda \mu}$ are non-negative integers, and the sum is over partitions $\mu<\lambda$ in the natural ordering.

Proof. When we multiply out the product $e_{\lambda^{\prime}}=e_{\lambda_{1}^{\prime}} e_{\lambda_{2}^{\prime}} \ldots$, we shall obtain a sum of monomials, each of which is of the form

$$
\left(x_{i_{1}} x_{i_{2}} \ldots\right)\left(x_{j_{1}} x_{j_{2}} \ldots\right) \ldots=x^{\alpha}
$$

say, where $i_{1}<i_{2}<\ldots<i_{\lambda_{1}^{\prime}}, j_{1}<j_{2}<\ldots<j_{\lambda_{2}}$, and so on. If we now enter the numbers $i_{1}, i_{2}, \ldots, i_{\lambda_{1}^{\prime}}$ in order down the first column of the diagram of $\lambda$, then the numbers $j_{1}, j_{2}, \ldots, j_{\lambda^{\prime}}$ in order down the second column, and so on, it is clear that for each $r \geqslant 1$ all the symbols $\leqslant r$ so entered in the diagram of $\lambda$ must occur in the top $r$ rows. Hence $\alpha_{1}+\ldots+\alpha_{r} \leqslant$ $\lambda_{1}+\ldots+\lambda_{r}$ for each $r \geqslant 1$, i.e. we have $\alpha \leqslant \lambda$. By (1.12) it follows that

$$
e_{\lambda^{\prime}}=\sum_{\mu<\lambda} a_{\lambda \mu} m_{\mu}
$$

with $a_{\lambda \mu} \geqslant 0$ for each $\mu \geqslant \lambda$, and the argument above also shows that the monomial $x^{\lambda}$ occurs exactly once, so that $a_{\lambda \lambda}=1$. I
(2.4) We have

$$
\Lambda=\mathbf{Z}\left[e_{1}, e_{2}, \ldots\right]
$$

and the $e_{r}$ are algebraically independent over $\mathbf{Z}$.

Proof. The $m_{\lambda}$ form a $\mathbf{Z}$-basis of $\Lambda$, and (2.3) shows that the $e_{\lambda}$ form another $\mathbf{Z}$-basis: in other words, every element of $\Lambda$ is uniquely expressible as a polynomial in the $e_{r}$.

Remark. When there are only finitely many variables $x_{1}, \ldots, x_{n}$, states that $\Lambda_{n}=\mathbf{Z}\left[e_{1}, \ldots, e_{n}\right]$, and that $e_{1}, \ldots, e_{n}$ are algebraically independent. This is the usual statement of the 'fundamental theorem on symmetric functions'.

## Complete symmetric functions

For each $r \geqslant 0$ the $r$ th complete symmetric function $h_{r}$ is the sum of all monomials of total degree $r$ in the variables $x_{1}, x_{2}, \ldots$, so that

$$
h_{r}=\sum_{|\lambda|=r} m_{\lambda} .
$$

In particular, $h_{0}=1$ and $h_{1}=e_{1}$. It is convenient to define $h_{r}$ and $e_{r}$ to be zero for $r<0$.

The generating function for the $h_{r}$ is

$$
\begin{equation*}
H(t)=\sum_{r \geqslant 0} h_{r} t^{r}=\prod_{i>1}\left(1-x_{i} t\right)^{-1} \tag{2.5}
\end{equation*}
$$

To see this, observe that

$$
\left(1-x_{i} t\right)^{-1}=\sum_{k>0} x_{i}^{k} t^{k},
$$

and multiply these geometric series together.
From (2.2) and (2.5) we have

$$
\begin{equation*}
H(t) E(-t)=1 \tag{2.6}
\end{equation*}
$$

or, equivalently,

$$
\sum_{r=0}^{n}(-1)^{r} e_{r} h_{n-r}=0
$$

for all $n \geqslant 1$.
Since the $e_{r}$ are algebraically independent (2.4), we may define a homomorphism of graded rings

$$
\omega: \Lambda \rightarrow \Lambda
$$

by

$$
\omega\left(e_{r}\right)=h_{r}
$$

for all $r \geqslant 0$. The symmetry of the relations (2.6') as between the $e$ 's and the $h$ 's shows that
(2.7) $\omega$ is an involution, i.e. $\omega^{2}$ is the identity map. ।

It follows that $\omega$ is an automorphism of $\Lambda$, and hence from (2.4) that
(2.8) We have

$$
\Lambda=\mathrm{Z}\left[h_{1}, h_{2}, \ldots\right]
$$

and the $h_{r}$ are algebraically independent over $\mathbf{Z}$. |
Remark. If the number of variables is finite, say $n$ (so that $e_{r}=0$ for $r>n$ ) the mapping $\omega: \Lambda_{n} \rightarrow \Lambda_{n}$ is defined by $\omega\left(e_{r}\right)=h_{r}$ for $1 \leqslant r \leqslant n$, and is still an involution by reason of ( $2.6^{\prime}$ ); we have $\Lambda_{n}=\mathbf{Z}\left[h_{1}, \ldots, h_{n}\right]$ with $h_{1}, \ldots, h_{n}$ algebraically independent, but $h_{n+1}, h_{n+2}, \ldots$ are non-zero polynomials in $h_{1}, \ldots, h_{n}$ (or in $e_{1}, \ldots, e_{n}$ ).

As in the case of the $e$ 's, we define

$$
h_{\lambda}=h_{\lambda_{1}} h_{\lambda_{2}} \ldots
$$

for any partition $\lambda=\left(\lambda_{1}, \lambda_{2}, \ldots\right)$. By (2.8), the $h_{\lambda}$ form a Z-basis of $\Lambda$. We now have three $\mathbf{Z}$-bases, all indexed by partitions: the $m_{\lambda}$, the $e_{\lambda}$, and the $h_{\lambda}$, the last two of which correspond under the involution $\omega$. If we define

$$
f_{\lambda}=\omega\left(m_{\lambda}\right)
$$

for each partition $\lambda$, the $f_{\lambda}$ form a fourth Z-basis of $\Lambda$. (The $f_{\lambda}$ are the 'forgotten' symmetric functions: they have no particularly simple direct description.)

The relations (2.6') lead to a determinant identity which we shall make use of later. Let $N$ be a positive integer and consider the matrices of $N+1$ rows and columns

$$
H=\left(h_{i-j}\right)_{0<i, j<N}, \quad E=\left((-1)^{i-j} e_{i-j}\right)_{0<i, j<N}
$$

with the convention mentioned earlier that $h_{r}=e_{r}=0$ for $r<0$. Both $H$ and $E$ are lower triangular, with 1's down the diagonal, so that det $H=$ $\operatorname{det} E=1$; moreover the relations ( $2.6^{\prime}$ ) show that they are inverses of each other. It follows that each minor of $H$ is equal to the complementary cofactor of $E^{\prime}$, the transpose of $E$.

Let $\lambda, \mu$ be two partitions of length $\leqslant p$, such that $\lambda^{\prime}$ and $\mu^{\prime}$ have length $\leqslant q$, where $p+q=N+1$. Consider the minor of $H$ with row indices $\lambda_{i}+p-i(1 \leqslant i \leqslant p)$ and column indices $\mu_{i}+p-i(1 \leqslant i \leqslant p)$. By
(1.7) the complementary cofactor of $E^{\prime}$ has row indices $p-1+j-\lambda_{j}^{\prime}$ $(1 \leqslant j \leqslant q)$ and column indices $p-1+j-\mu_{j}^{\prime}(1 \leqslant j \leqslant q)$. Hence we have

$$
\operatorname{det}\left(h_{\lambda_{1}-\mu_{j}-i+j}\right)_{1<i, j<p}=(-1)^{|\lambda|+|\mu|} \operatorname{det}\left((-1)^{\lambda_{i}^{\prime}-\mu_{j}^{\prime}-i+j} e_{\lambda_{i}^{\prime}-\mu_{j}^{\prime}-i+j}\right)_{1<i, j<q} .
$$

The minus signs cancel out, and therefore we have (Aitken [A1])

$$
\begin{equation*}
\operatorname{det}\left(h_{\lambda_{i}-\mu_{j}-i+j}\right)_{1<i, j<p}=\operatorname{det}\left(e_{\lambda_{i}-\mu_{j}^{\prime}-i+j}\right)_{1<i, j<q} . \tag{2.9}
\end{equation*}
$$

In particular, taking $\mu=0$ :

$$
\operatorname{det}\left(h_{\lambda_{1}-i+j}\right)=\operatorname{det}\left(e_{\lambda_{i}-i+j}\right)
$$

Power sums
For each $r \geqslant 1$ the $r$ th power sum is

$$
p_{r}=\sum x_{i}^{r}=m_{(r)}
$$

The generating function for the $p_{r}$ is

$$
\begin{aligned}
P(t) & =\sum_{r>1} p_{r} t^{r-1}=\sum_{i>1} \sum_{r>1} x_{i}^{r} t^{r-1} \\
& =\sum_{i>1} \frac{x_{i}}{1-x_{i} t} \\
& =\sum_{i>1} \frac{\mathrm{~d}}{\mathrm{~d} t} \log \frac{1}{1-x_{i} t}
\end{aligned}
$$

so that
(2.10) $P(t)=\frac{\mathrm{d}}{\mathrm{d} t} \log \prod_{i>1}\left(1-x_{i} t\right)^{-1}=\frac{\mathrm{d}}{\mathrm{d} t} \log H(t)=H^{\prime}(t) / H(t)$.

Likewise we have

$$
P(-t)=\frac{\mathrm{d}}{\mathrm{~d} t} \log E(t)=E^{\prime}(t) / E(t)
$$

From (2.10) and (2.10') we obtain

$$
\begin{align*}
n h_{n} & =\sum_{r=1}^{n} p_{r} h_{n-r}  \tag{2.11}\\
n e_{n} & =\sum_{r=1}^{n}(-1)^{r-1} p_{r} e_{n-r}
\end{align*}
$$

for $n \geqslant 1$, and these equations enable us to express the $h$ 's and the $e$ 's in terms of the $p$ 's, and vice versa. The equations (2.11') are due to Isaac Newton, and are known as Newton's formulas. From (2.11) it is clear that $h_{n} \in \mathbf{Q}\left[p_{1}, \ldots, p_{n}\right]$ and $p_{n} \in \mathbf{Z}\left[h_{1}, \ldots, h_{n}\right]$, and hence that

$$
\mathrm{Q}\left[p_{1}, \ldots, p_{n}\right]=\mathrm{Q}\left[h_{1}, \ldots, h_{n}\right]
$$

Since the $h_{r}$ are algebraically independent over $\mathbf{Z}$, and hence also over $\mathbf{Q}$, it follows that
(2.12) We have

$$
\Lambda_{\mathbf{Q}}=\Lambda \otimes_{\mathbf{Z}} \mathbf{Q}=\mathbf{Q}\left[p_{1}, p_{2}, \ldots\right]
$$

and the $p_{r}$ are algebraically independent over $\mathbf{Q}$. |
Hence, if we define

$$
p_{\lambda}=p_{\lambda_{1}} p_{\lambda_{2}} \cdots
$$

for each partition $\lambda=\left(\lambda_{1}, \lambda_{2}, \ldots\right)$, then the $p_{\lambda}$ form a $\mathbf{Q}$-basis of $\Lambda_{\mathbf{Q}}$. But they do not form a Z-basis of $\Lambda$ : for example, $h_{2}=\frac{1}{2}\left(p_{1}^{2}+p_{2}\right)$ does not have integral coefficients when expressed in terms of the $p_{\lambda}$.

Since the involution $\omega$ interchanges $E(t)$ and $H(t)$ it follows from (2.10) and (2.10') that

$$
\omega\left(p_{n}\right)=(-1)^{n-1} p_{n}
$$

for all $n \geqslant 1$, and hence that for any partition $\lambda$ we have

$$
\begin{equation*}
\omega\left(p_{\lambda}\right)=\varepsilon_{\lambda} p_{\lambda} \tag{2.13}
\end{equation*}
$$

where $\varepsilon_{\lambda}=(-1)^{|\lambda|-l(\lambda)}$.
Finally, we shall express $h_{n}$ and $e_{n}$ as linear combinations of the $p_{\lambda}$. For any partition $\lambda$, define

$$
z_{\lambda}=\prod_{i>1} i^{m_{i}} \cdot m_{i}!
$$

where $m_{i}=m_{i}(\lambda)$ is the number of parts of $\lambda$ equal to $i$. Then we have

$$
\begin{align*}
& H(t)=\sum_{\lambda} z_{\lambda}^{-1} p_{\lambda} t^{|\lambda|},  \tag{2.14}\\
& E(t)=\sum_{\lambda} \varepsilon_{\lambda} z_{\lambda}^{-1} p_{\lambda} t^{|\lambda|}
\end{align*}
$$

or equivalently

$$
\begin{align*}
& h_{n}=\sum_{|\lambda|-n} z_{\lambda}^{-1} p_{\lambda} \\
& e_{n}=\sum_{|\lambda|-n} \varepsilon_{\lambda} z_{\lambda}^{-1} p_{\lambda} .
\end{align*}
$$

Proof. It is enough to prove the first of the identities (2.14), since the second then follows by applying the involution $\omega$ and using (2.13). From (2.10) we have

$$
\begin{aligned}
H(t) & =\exp \sum_{r \geqslant 1} p_{r} t^{r} / r \\
& =\prod_{r \geqslant 1} \exp \left(p_{r} t^{r} / r\right) \\
& =\prod_{r \geqslant 1} \sum_{m_{r}=0}^{\infty}\left(p_{r} t^{r}\right)^{m_{r}} / r^{m_{r}} \cdot m_{r}! \\
& =\sum_{\lambda} z_{\lambda}^{-1} p_{\lambda} t^{|\lambda|} \cdot \mid
\end{aligned}
$$

(2.15) Remark. In the language of $\lambda$-rings [B5], [K13]) the ring $\Lambda$ is the 'free $\lambda$-ring in one variable' (or, more precisely, is the underlying ring). Consequently all the formulas and identities in this Chapter can be translated into this language. It is not our intention to write a text on the theory of $\lambda$-rings: we shall merely provide a brief dictionary.
If $R$ is any $\lambda$-ring and $x$ any element of $R$, there exists a unique $\lambda$-homomorphism $\Lambda \rightarrow R$ under which $e_{1}\left(=h_{1}=p_{1}\right)$ is mapped to $x$. Under this homomorphism
$e_{r}$ is mapped to $\lambda^{r}(x) \quad(r$ th exterior power)
$h_{r} \quad \sigma^{r}(x)=(-1)^{r} \lambda^{r}(-x) \quad(r$ th symmetric power)
$E(t) \quad \lambda_{t}(x)$
$H(t) \quad \sigma_{t}(x)=\lambda_{-t}(-x)$
$p_{r} \quad \psi^{r}(x) \quad$ (Adams operations)
and the involution $\omega$ corresponds in $R$ to $x \mapsto-x$. So, for example, (2.14') becomes

$$
\sigma^{n}(x)=\sum_{|\lambda|=n} z_{\lambda}^{-1} \psi^{\lambda}(x)
$$

valid for any element $x$ of any $\lambda$-ring (where of course $\psi^{\lambda}(x)=$ $\left.\psi^{\lambda_{1}}(x) \psi^{\lambda_{2}}(x) \ldots\right)$.

## Examples

1. (a) Let $x_{1}=\cdots=x_{n}=1, x_{n+1}=x_{n+2}=\ldots=0$. Then $E(t)=(1+t)^{n}$ and $H(t)$ $=(1-t)^{-n}$, so that

$$
e_{r}=\binom{n}{r}, \quad h_{r}=\binom{n+r-1}{r}
$$

and $p_{r}=n$ for all $n \geqslant 1$. Also

$$
m_{\lambda}=u_{\lambda}\binom{n}{l(\lambda)}
$$

where

$$
u_{\lambda}=\frac{l(\lambda)!}{\prod_{i>1} m_{i}(\lambda)!}
$$

(b) More generally, let $X$ be an indeterminate, and define a homomorphism $\varepsilon_{X}: \Lambda_{\mathbf{Q}} \rightarrow \mathbf{Q}[X]$ by $\varepsilon_{X}\left(p_{r}\right)=X$ for all $r \geqslant 1$. Then we have

$$
\varepsilon_{X}\left(e_{r}\right)=\binom{X}{r}, \quad \varepsilon_{X}\left(h_{r}\right)=\binom{X+r-1}{r}=(-1)^{r}\binom{-X}{r},
$$

for all $r \geqslant 1$, and

$$
\varepsilon_{X}\left(m_{\lambda}\right)=u_{\lambda}\binom{X}{l(\lambda)} .
$$

For these formulas are correct when $X$ is replaced by any positive integer $n$, by (a) above. Hence they are true identically.
2. Let $x_{i}=1 / n$ for $1 \leqslant i \leqslant n, x_{i}=0$ for $i>n$, and then let $n \rightarrow \infty$. From Example 1 we have

$$
e_{r}=\lim _{n \rightarrow \infty} \frac{1}{n^{r}}\binom{n}{r}=\frac{1}{r!}
$$

and likewise $h_{r}=1 / r$ !, so that $E(t)=H(t)=e^{t}$. We have $p_{1}=1$ and $p_{r}=0$ for $r>1$; more generally, $m_{\lambda}=0$ for all partitions $\lambda$ except $\lambda=\left(1^{r}\right)(r \geqslant 0)$.
3. Let $x_{i}=q^{i-1}$ for $1 \leqslant i \leqslant n$, and $x_{i}=0$ for $i>n$, where $q$ is an indeterminate. Then

$$
E(t)=\prod_{i=0}^{n-1}\left(1+q^{i} t\right)=\sum_{r=0}^{n} q^{r(r-1) / 2}\left[\begin{array}{l}
n \\
r
\end{array}\right] t^{r}
$$

where $\left[\begin{array}{l}n \\ r\end{array}\right]$ denotes the ' $q$-binomial coefficient' or Gaussian polynomial

$$
\left[\begin{array}{l}
n \\
r
\end{array}\right]=\frac{\left(1-q^{n}\right)\left(1-q^{n-1}\right) \ldots\left(1-q^{n-r+1}\right)}{(1-q)\left(1-q^{2}\right) \ldots\left(1-q^{r}\right)}
$$

and

$$
H(t)=\prod_{i=0}^{n-1}\left(1-q^{i} t\right)^{-1}=\sum_{r=0}^{\infty}\left[\begin{array}{c}
n+r-1 \\
r
\end{array}\right] t^{r}
$$

These identities are easily proved by induction on $\boldsymbol{n}$. It follows that

$$
e_{r}=q^{r(r-1) / 2}\left[\begin{array}{l}
n \\
r
\end{array}\right], \quad h_{r}=\left[\begin{array}{c}
n+r-1 \\
r
\end{array}\right]
$$

$h_{r}$ is the generating function for partitions $\lambda$ such that $l(\lambda) \leqslant r$ and $l\left(\lambda^{\prime}\right) \leqslant n-1$, and $e_{r}$ is the generating function for such partitions with all parts distinct.
4. Let $n \rightarrow \infty$ in Example 3, i.e. let $x_{i}=q^{i-1}$ for all $i \geqslant 1$. Then

$$
\begin{aligned}
& E(t)=\prod_{i=0}^{\infty}\left(1+q^{i} t\right)=\sum_{r=0}^{\infty} q^{r(r-1) / 2} t^{r} / \varphi_{r}(q), \\
& H(t)=\prod_{i=0}^{\infty}\left(1-q^{i} t\right)^{-1}=\sum_{r=0}^{\infty} t^{r} / \varphi_{r}(q),
\end{aligned}
$$

where

$$
\varphi_{r}(q)=(1-q)\left(1-q^{2}\right) \ldots\left(1-q^{r}\right)
$$

Hence in this case

$$
e_{r}=q^{r(r-1) / 2} / \varphi_{r}(q), \quad h_{r}=1 / \varphi_{r}(q)
$$

and $p_{r}=\left(1-q^{r}\right)^{-1}$.
5. Since the $h_{r}$ are algebraically independent we may specialize them in any way, and forget about the original variables $x_{i}$ : in other words, we may take $H(t)$ (or $E(t))$ to be any power series in $t$ with constant term 1 . (We have already done this in Example 2 above, where $H(t)=e^{t}$.) Let $a, b, q$ be variables and take

$$
H(t)=\prod_{i=0}^{\infty} \frac{1-b q^{i} t}{1-a q^{i} t}
$$

Then we have

$$
h_{r}=\prod_{i=1}^{r} \frac{a-b q^{i-1}}{1-q^{i}}, \quad e_{r}=\prod_{i=1}^{r} \frac{a q^{i-1}-b}{1-q^{i}}
$$

(see e.g. Andrews [A3], Chapter II.) Also $p_{r}=\left(a^{r}-b^{r}\right) /\left(1-q^{r}\right)$.
6. Take $H(t)=\Pi_{n-1}^{\infty}\left(1-t^{n}\right)^{-1}$, so that $h_{n}=p(n)$, the number of partitions of $n$. Then $E(-t)=\prod_{n-1}^{\infty}\left(1-t^{n}\right)$, and so by Euler's pentagonal number theorem $e_{n}=0$ unless $n$ is a pentagonal number, i.e. of the form $\frac{1}{2} m(3 m+1)$ for some $m \in \mathbf{Z}$; and $e_{n}=(-1)^{m(m+1) / 2}$ if $n=\frac{1}{2} m(3 m+1)$.

From (2.10) we obtain $p_{r}=\sigma(r)$, the sum of the divisors of $r$. Hence (2.11) gives in this case

$$
\begin{equation*}
p(n)=\frac{1}{n} \sum_{r=1}^{n} \sigma(r) p(n-r) . \tag{1}
\end{equation*}
$$

7. Take $H(t)=\Pi_{n=1}^{\infty}\left(1-t^{n}\right)^{-n}$, so that $h_{n}=p_{2}(n)$, the number of plane partitions of $n$ (§5, Example 13). From (2.10) we obtain $p_{r}=\sigma_{2}(r)$, the sum of the squares of the divisors of $r$. Hence by (2.11)

$$
\begin{equation*}
p_{2}(n)=\frac{1}{n} \sum_{r=1}^{n} \sigma_{2}(r) p_{2}(n-r) \tag{2}
\end{equation*}
$$

It is perhaps only fair to warn the reader that the obvious generalization of (1) and (2) to $m$-dimensional partitions ( $m>2$ ) is false.
8. By solving the equations (2.6') for $e_{n}$ we obtain

$$
e_{n}=\operatorname{det}\left(h_{1-i+j}\right)_{1<i, j<n}
$$

and dually

$$
h_{n}=\operatorname{det}\left(e_{1-i+j}\right)_{1<i, j \leqslant n}
$$

Likewise from (2.11) we obtain the determinant formulas

$$
\begin{aligned}
p_{n} & =\left|\begin{array}{cccc}
e_{1} & 1 & 0 & 0 \\
2 e_{2} & e_{1} & 1 & 0 \\
\vdots & \vdots & \vdots & \vdots \\
n e_{n} & e_{n-1} & e_{n-2} & e_{1}
\end{array}\right| \\
n!e_{n} & =\left|\begin{array}{cccc}
p_{1} & 1 & 0 & 0 \\
p_{2} & p_{1} & 2 & 0 \\
\vdots & \vdots & \vdots & \vdots \\
p_{n-1} & p_{n-2} & . & n-1 \\
p_{n} & p_{n-1} & . & p_{1}
\end{array}\right|
\end{aligned}
$$

and dually

$$
\begin{aligned}
(-1)^{n-1} p_{n} & =\left|\begin{array}{ccccc}
h_{1} & 1 & 0 & & 0 \\
2 h_{2} & h_{1} & 1 & & 0 \\
\vdots & \vdots & \vdots & & \vdots \\
n h_{n} & h_{n-1} & h_{n-2} & h_{1}
\end{array}\right| \\
n!h_{n} & =\left|\begin{array}{ccccc}
p_{1} & -1 & 0 & 0 \\
p_{2} & p_{1} & -2 & & 0 \\
\vdots & \vdots & \vdots & & \vdots \\
p_{n-1} & p_{n-2} & . & \ldots & -n+1 \\
p_{n} & p_{n-1} & . & \cdots & p_{1}
\end{array}\right|
\end{aligned}
$$

9. (a) Let $G$ be any subgroup of the symmetric group $S_{n}$. The cycle indicator of $G$ is the symmetric function

$$
c(G)=\frac{1}{|G|} \sum_{p} n_{G}(\rho) p_{\rho}
$$

where $n_{G}(\rho)$ is the number of elements in $G$ of cycle-type $\rho$, and the sum is over all partitions $\rho$ of $n$. In particular,

$$
c\left(S_{n}\right)=\sum_{|\rho|=n} z_{\rho}^{-1} p_{\rho}=h_{n}
$$

by (2.14'), and for the alternating group $A_{n}$ we have

$$
c\left(A_{n}\right)=h_{n}+e_{n}
$$

(b) If $G$ is a subgroup of $S_{n}$ and $H$ a subgroup of $S_{m}$, then $G \times H$ is a subgroup of $S_{n} \times S_{m} \subset S_{n+m}$, and we have

$$
c(G \times H)=c(G) c(H)
$$

(c) Let $G$ be a subgroup of $S_{n}$ and let $\Sigma$ be the set of all sequences $\alpha=\left(\alpha_{1}, \ldots, \alpha_{n}\right)$ of $n$ positive integers. For each such sequence $\alpha$, define $x_{\alpha}=x_{\alpha_{1}} \ldots x_{\alpha_{n}}$. The group $G$ acts on $\Sigma$ by permuting the terms of these sequences, and the function $\alpha \mapsto x_{\alpha}$ is constant on each $G$-orbit. Show that

$$
\begin{equation*}
c(G)=\sum_{\alpha} x_{\alpha} \tag{1}
\end{equation*}
$$

where $\alpha$ runs through a set of representatives of the orbits of $G$ in $\Sigma$ (Polya's theorem). (Let

$$
X=|G|^{-1} \sum_{(g, \alpha)} x_{\alpha}
$$

summed over all $(g, \alpha) \in G \times \Sigma$ such that $g \alpha=\alpha$, and show that $X$ is equal to either side of (1).)
10. From Examples 8 and 9 it follows that the number of elements of cycle-type $\rho$ in $S_{n}$ is equal to the coefficient of $p_{\rho}$ in the determinant

$$
d_{n}=n!h_{n}=\left|\begin{array}{cccc}
p_{1} & -1 & 0 & 0 \\
p_{2} & p_{1} & -2 & 0 \\
\vdots & \vdots & \vdots & \vdots \\
p_{n-1} & p_{n-2} & . & -n+1 \\
p_{n} & p_{n-1} & . & p_{1}
\end{array}\right|
$$

Let $l$ be a prime number. We may use this formula to count the number of conjugacy classes in $S_{n}$ in which the number of elements is prime to $l$, by reducing the determinant $d_{n}$ modulo $l$. Suppose that $n=a_{0}+n_{1} l$, where $0 \leqslant a_{0} \leqslant l-1$.

Then since the multiples of $l$ above the diagonal in $d_{n}$ become zero on reduction, it follows that

$$
d_{n} \equiv d_{l}^{n_{1}} d_{a_{0}} \quad(\bmod . l)
$$

Now it is clear from the original definition of $d_{n}=n!c\left(S_{n}\right)$ that

$$
d_{l} \equiv p_{1}^{\prime}-p_{l} \quad(\bmod . l)
$$

and therefore we have

$$
\begin{equation*}
d_{n} \equiv\left(p_{1}^{\prime}-p_{l}\right)^{n_{1}} \cdot d_{a_{0}} \quad(\bmod . l) \tag{1}
\end{equation*}
$$

Hence if $n=a_{0}+a_{1} l+a_{2} l^{2}+\ldots$, with $0 \leqslant a_{i} \leqslant l-1$ for all $i \geqslant 0$, it follows from (1) that

$$
d_{n} \equiv d_{a_{0}} \prod_{i>1}\left(p_{1}^{l^{i}}-p_{l}^{l-1}\right)^{a_{i}} \quad(\bmod . l)
$$

Consequently, if $\mu_{l}\left(S_{n}\right)$ denotes the number of conjugacy classes in $S_{n}$ of order prime to $l$, we have

$$
\begin{aligned}
\mu_{l}\left(S_{n}\right) & =\mu_{l}\left(S_{a_{0}}\right) \prod_{i>1}\left(a_{i}+1\right) \\
& =p\left(a_{0}\right) \prod_{i>1}\left(a_{i}+1\right)
\end{aligned}
$$

where $p\left(a_{0}\right)$ is the number of partitions of $a_{0}$. In particular, if $l=2$, we see that $\mu_{2}\left(S_{n}\right)$ is always a power of 2 , because each $a_{i}$ is then either 0 or 1 : namely $\mu_{2}\left(S_{n}\right)=2^{r}$ if $[n / 2]$ is a sum of $r$ distinct powers of 2 .
11. Let

$$
f(t)=\sum_{n=0}^{\infty} \frac{f_{n} t^{n}}{n!}, \quad g(t)=\sum_{n=0}^{\infty} \frac{g_{n} t^{n}}{n!}
$$

be formal power series (with coefficients in a commutative $\mathbf{Q}$-algebra) such that $g(0)=0$. We may substitute $g(t)$ for $t$ in $f(t)$, and obtain say

$$
H(t)=f(g(t))=\sum_{0}^{\infty} \frac{H_{n} t^{n}}{n!} .
$$

Clearly each coefficient $H_{n}$ is of the form

$$
H_{n}=\sum_{k=1}^{n} f_{k} B_{n, k}(g)
$$

where the $B_{n, k}$ are polynomials in the coefficients of $g$, called the partial Bell polynomials. Since each $H_{n}$ is linear in the coefficients of $f$, in order to compute the polynomials $B_{n, k}$ we may take $f_{k}=a^{k}$, so that $f(t)=e^{a l}$. Writing

$$
H(t)=\sum_{n=0}^{\infty} h_{n} t^{n}
$$

as usual, we have $H(t)=\exp (a g(t))$ and therefore by (2.10)

$$
P(t)=\frac{\mathrm{d}}{\mathrm{~d} t} \log H(t)=a g^{\prime}(t)=\sum_{1}^{\infty} \frac{a g_{n} t^{n-1}}{(n-1)!},
$$

so that $p_{n}=a g_{n} /(n-1)$ ! for all $n \geqslant 1$. Hence by ( $2.14^{\prime}$ )

$$
H_{n}=n!h_{n}=\sum_{|\lambda|=n} \frac{n!}{z_{\lambda}} p_{\lambda}
$$

and consequently

$$
B_{n, k}=\sum_{\lambda} \frac{n!}{z_{\lambda}} p_{\lambda}=\sum_{\lambda} c_{\lambda} g_{\lambda}
$$

where the sum is over partitions $\lambda$ of $n$ such that $l(\lambda)=k$, and

$$
g_{\lambda}=g_{\lambda_{1}} g_{\lambda_{2}} \ldots, \quad c_{\lambda}=n!/ \prod_{i>1} r_{i}!(i!)^{r_{i}}
$$

if $\lambda=\left(1^{r_{1}} 2^{r_{2}} \ldots\right)$. These coefficients $c_{\lambda}$ are integers, because $c_{\lambda}$ is the number of decompositions of a set of $n$ elements into disjoint subsets containing $\lambda_{1}, \lambda_{2}, \ldots$ elements. Hence each $B_{n, k}$ is a polynomial in the $g_{n}$ with integer coefficients.
Particular cases:
(a) if $g(t)=\log (1+t)$, then $B_{n, k}=s(n, k)$ are the Stirling numbers of the first kind; $(-1)^{n-k} s(n, k)$ is the number of elements of $S_{n}$ which are products of $k$ disjoint cycles. We have

$$
\sum_{n, k>0} s(n, k) \frac{t^{n}}{n!} a^{k}=(1+t)^{a}=\sum_{n>0}\binom{a}{n} t^{n}
$$

from which it follows that

$$
\sum_{k=0}^{n} s(n, k) a^{k}=a(a-1) \ldots(a-n+1)
$$

and hence that $s(n, k)$ is the $(n-k)$ th elementary symmetric function of $-1,-2, \ldots,-n+1$.
(b) if $g(t)=e^{t}-1$, so that $g_{n}=1$ for all $n \geqslant 1$, then $B_{n, k}=S(n, k)$ are the Stirling numbers of the second kind; $S(n, k)$ is the number of decompositions of a set of $n$ elements into $k$ disjoint subsets, and is also the ( $n-k$ )th complete symmetric function of $1,2, \ldots, k$.
12. Deduce from Example 11 that if $f$ and $g$ are $n$ times differentiable functions of a real variable, and if $f_{k}, g_{k},(f \circ g)_{k}$ denote the $k$ th derivatives of $f, g$, and $f \circ g$, then

$$
(f \circ g)_{n}=\sum_{k=1}^{n} B_{n, k}\left(g_{1}, g_{2}, \ldots\right)\left(f_{k} \circ g\right)
$$

13. If $H(t)=\left(1-t^{r}\right) /(1-t)^{r}$, we have

$$
h_{n}=\binom{n+r-1}{r-1}-\binom{n-1}{r-1}
$$

and by (2.10) we find that $p_{n}=r$ if $n \equiv \equiv(\bmod r)$, whereas $p_{n}=0$ if $n \equiv 0(\bmod r)$. Hence from (2.14')

$$
\sum_{\lambda} z_{\lambda}^{-1} r^{l(\lambda)}=\binom{n+r-1}{r-1}-\binom{n-1}{r-1} \quad(r \geqslant 2)
$$

where the sum on the left is over partitions $\lambda$ of $n$ none of whose parts is divisible by $r$.

In particular $(r=2)$

$$
\sum_{\lambda} z_{\lambda}^{-1} 2^{l(\lambda)}=2
$$

summed over all partitions of $n$ into odd parts.
14. Suppose that $p_{n}=a n^{n} / n!$ for $n \geqslant 1$. Then

$$
h_{n}=a(a+n)^{n-1} / n!, \quad e_{n}=a(a-n)^{n-1} / n!.
$$

(Let $t=x e^{-x}$ and use Lagrange's reversion formula to show that $P(t)=$ $a e^{x} /(1-x)$.)
15. Show that

$$
\sum_{\rho} z_{\rho}^{-1}=\sum_{\sigma} z_{\sigma}^{-1}=\frac{1 \cdot 3 \cdot 5 \ldots(2 n-1)}{2 \cdot 4 \cdot 6 \ldots 2 n}
$$

where the first sum is over all partitions $\rho$ of $2 n$ with all parts even, and the second sum is over all partitions $\sigma$ of $2 n$ with all parts odd.
16. Suppose that $e_{n}=p_{n}$ for each $n \geqslant 1$. Show that

$$
h_{n}=\frac{a^{n}}{(n+1)!}, \quad e_{n}=\frac{(-1)^{n} a^{n} B_{n}}{n!}
$$

for some $a$, where $B_{n}$ is the $n$th Bernoulli number.
17. If $h_{n}=n$ for each $n \geqslant 1$, the sequence $\left(e_{n}\right)_{n>1}$ is periodic with period 3 , and the sequence $\left(p_{n}\right)_{n>1}$ is periodic with period 6 .
18. (Muirhead's inequalities.) For each partition $\lambda$ of $n$, the $\lambda$-mean of $x=$ $\left(x_{1}, x_{1}, \ldots, x_{n}\right)$ is defined to be

$$
M_{\lambda}(x)=\frac{1}{n!} \sum_{w \in S_{n}} w\left(x^{\lambda}\right)
$$

In particular, $M_{(n)}(x)$ is the arithmetic mean of $x_{1}^{n}, \ldots, x_{n}^{n}$, and $M_{\left(\left(^{n}\right)\right.}(x)$ is their geometric mean.

Let $\lambda, \mu$ be partitions of $n$. Then the following statements are equivalent;
(i) $\lambda \geqslant \mu$; (ii) $M_{\lambda}(x) \geqslant M_{\mu}(x)$ for all $x=\left(x_{1}, \ldots, x_{n}\right) \in \mathbf{R}_{+}^{n}$.
(To show that (i) implies (ii), we may assume by (1.16) that $\lambda=R_{i j} \mu$, in which case it is enough to show that

$$
x_{i}^{\lambda_{i}} x_{j}^{\lambda_{j}}+x_{j}^{\lambda_{i}} x_{i}^{\lambda_{j}} \geqslant x_{i}^{\mu_{i}} x_{j}^{\mu_{j}}+x_{j}^{\mu_{i}} x_{i}^{\mu_{j}} .
$$

To show that (ii) implies (i), set $x_{1}=\ldots=x_{r}=X$ and $x_{r+1}=\ldots=x_{n}=1$, where $X$ is large, and deduce that $\lambda_{1}+\ldots+\lambda_{r} \geqslant \mu_{1}+\ldots+\mu_{r}$.)
19. Let $p_{n}^{(r)}=\sum m_{\lambda}$, summed over all partitions $\lambda$ of $n$ of length $r$ (so that $p_{n}^{(1)}=p_{n}$ ). Show that

$$
\sum_{n, r} p_{n}^{(r)} t^{n-r} u^{r}=E(u-t) H(t)
$$

and that

$$
\sum_{n \geqslant r} p_{n}^{(r)} t^{n-r}=\frac{(-1)^{r}}{r!} E^{(r)}(-t) H(t)
$$

where $E^{(r)}(t)$ is the $r$ th derivative of $E(t)$ with respect to $t$. Deduce that

$$
p_{n}^{(r)}=\sum_{a+b=n}(-1)^{a-r}\binom{a}{r} e_{a} h_{b}
$$

and that (if $n \geqslant r$ ) $p_{n}^{(r)}$ is equal to the determinant of the matrix $\left(a_{i j}\right)_{0 \leqslant i, j \leqslant n-r}$, where $a_{i 0}=\binom{r+i}{r} e_{r+i}$ and $a_{i j}=e_{i-j+1}$ if $j \geqslant 1$.
20. For any partition $\lambda$, let $u_{\lambda}=l(\lambda)!/ \Pi_{i>1} m_{i}(\lambda)$ !, as in Example 1(a). Show that

$$
\begin{aligned}
p_{n} & =n \sum_{|\lambda|=n} \frac{(-1)^{l(\lambda)-1}}{l(\lambda)} u_{\lambda} h_{\lambda} \\
& =-n \sum_{|\lambda|=n} \frac{\varepsilon_{\lambda}}{l(\lambda)} u_{\lambda} e_{\lambda}
\end{aligned}
$$

and that

$$
e_{n}=\sum_{|\lambda|=n} \varepsilon_{\lambda} u_{\lambda} h_{\lambda}
$$

(Let $H^{+}(t)=\Sigma_{n>1} h_{n} t^{n}$, and pick out the coefficients of $t^{n}$ in $\log \left(1+H^{+}(t)\right)$ and $\left(1+H^{+}(t)\right)^{-1}$, expanded in powers of $H^{+}(t)$.)
21. Let $x_{n}=1 / n^{2}$ for each $n \geqslant 1$. Then

$$
\begin{equation*}
E\left(-t^{2}\right)=\prod_{n>1}\left(1-\frac{t^{2}}{n^{2}}\right)=\frac{\sin \pi t}{\pi t} \tag{1}
\end{equation*}
$$

so that $e_{n}=\pi^{2 n} /(2 n+1)$ ! for each $n \geqslant 0$. We have

$$
p_{r}=\sum_{n>1} \frac{1}{n^{2 r}}=\zeta(2 r)
$$

where $\zeta$ is Riemann's zeta function. Deduce from (1) that

$$
-2 t^{2} P\left(t^{2}\right)=t \frac{d}{d t} \log E\left(-t^{2}\right)=\pi t \cot \pi t-1
$$

and hence that

$$
\zeta(2 r)=(-1)^{r-1} 2^{2 r-1} \pi^{2 r} B_{2 r} /(2 r)!
$$

where $B_{2 r}$ is the $2 r$ th Bernoulli number.
22. (a) From Jacobi's triple product identity

$$
\sum_{n \in \mathbf{Z}} t^{n^{2}} u^{n}=\prod_{n>1}\left(1-t^{2 n}\right)\left(1+t^{2 n-1} u\right)\left(1+t^{2 n-1} u^{-1}\right)
$$

by setting $u=-1$ we obtain

$$
\sum_{n \in \mathrm{Z}}(-1)^{n} t^{n^{2}}=\prod_{n>1} \frac{1-t^{n}}{1+t^{n}}
$$

Deduce that if

$$
\begin{equation*}
E(t)=\prod_{n>1} \frac{1+t^{n}}{1-t^{n}} \tag{1}
\end{equation*}
$$

then $h_{n}=2$ or 0 according as $n \geqslant 1$ is a square or not.
(b) Deduce from (1) and (2.10') that

$$
p_{n}=2(-1)^{n-1} \sigma^{\prime}(n),
$$

where $\sigma^{\prime}(n)$ is the sum of the divisors $d \geqslant 1$ of $n$ such that $n / d$ is odd.
(c) Let $N_{r}(n)$ denote the number of representations of $n$ as a sum of $r$ squares, that is to say the number of integer vectors $\left(x_{1}, \ldots, x_{r}\right) \in \mathbf{Z}^{r}$ such that $x_{1}^{2}+\ldots+$ $x_{r}^{2}=n$. Deduce from (b) above and Example 8 that

$$
N_{r}(n)=\frac{(2 r)^{n}}{n!}\left|\begin{array}{cccc}
\sigma^{\prime}(1) & 1 / 2 r & 0 & 0 \\
\sigma^{\prime}(2) & \sigma^{\prime}(1) & 2 / 2 r & 0 \\
\vdots & \vdots & & \vdots \\
\sigma^{\prime}(n-1) & \sigma^{\prime}(n-2) & & (n-1) / 2 r \\
\sigma^{\prime}(n) & \sigma^{\prime}(n-1) & \ldots & \sigma^{\prime}(1)
\end{array}\right| .
$$

23. If $G$ is a finite group and $d$ is a positive integer, let $w_{d}(G)$ denote the number of solutions of $x^{d}=1$ in $G$. Show that

$$
\begin{equation*}
\sum_{n>0} \frac{1}{n!} w_{d}\left(S_{n}\right) t^{n}=\exp \left(\sum_{r \mid d} \frac{1}{r} t^{r}\right) \tag{1}
\end{equation*}
$$

(If $x \in S_{n}$ has cycle-type $\lambda$, then $x^{d}=1$ if and only if all the parts of the partition $\lambda$ divide $d$. Hence

$$
\begin{equation*}
w_{d}\left(S_{n}\right) / n!=\sum z_{\lambda}^{-1} \tag{2}
\end{equation*}
$$

summed over such partitions $\lambda$ of $n$. Let $\varphi_{d}: \Lambda_{\mathbf{Q}} \rightarrow \mathbf{Z}$ be the homomorphism defined by $\varphi_{d}\left(p_{r}\right)=1$ or 0 according as $r$ does or does not divide $d$. Then the right-hand side of (2) is by (2.14') equal to $\varphi_{d}\left(h_{n}\right)$ and hence the generating function (1) is $\varphi_{d}(H(t))$.)
24. Another involution on the ring $\Lambda$ may be defined as follows. Let

$$
\begin{equation*}
u=t H(t)=t+h_{1} t^{2}+h_{2} t^{3}+\ldots \tag{1}
\end{equation*}
$$

Then $t$ can be expressed as a power series in $u$, say

$$
\begin{equation*}
t=u+h_{1}^{*} u^{2}+h_{2}^{*} u^{3}+\ldots \tag{2}
\end{equation*}
$$

with coefficients $h_{r}^{*} \in \Lambda^{r}$ for each $r \geqslant 1$. The formulas (1) and (2) show that the ring homomorphism $\psi: \Lambda \rightarrow \Lambda$ defined by $\psi\left(h_{r}\right)=h_{r}^{*}$ for each $r \geqslant 1$ is an involution on $\Lambda$.

For each $f \in \Lambda$, let $f^{*}=\psi(f)$. Thus for example $h_{\lambda}^{*}=h_{\lambda_{1}}^{*} h_{\lambda_{2}}^{*} \ldots$ for each partition $\lambda=\left(\lambda_{1}, \lambda_{2}, \ldots\right)$, and the $h_{\lambda}^{*}$ form a Z-basis of $\Lambda$.
(a) To calculate $h_{n}^{*}$ explicitly, we may argue as follows. From (2) we have

$$
\mathrm{d} t=\sum_{n>0}(n+1) h_{n}^{*} u^{n} \mathrm{~d} u
$$

and therefore $(n+1) h_{n}^{*}$ is the residue of the differential

$$
\mathrm{d} t / u^{n+1}=\mathrm{d} t / t^{n+1} H(t)^{n+1}
$$

hence is equal to the coefficient of $t^{n}$ in the expansion of $H(t)^{-n-1}$ in powers of $t$. Writing $H(t)=1+H^{+}(t)$ as in Example 20, it follows that

$$
(n+1) h_{n}^{*}=\sum_{|\lambda|=n}(-1)^{l(\lambda)}\binom{n+l(\lambda)}{n} u_{\lambda} h_{\lambda}
$$

with $u_{\lambda}$ as in Example 20.
(b) Show likewise that

$$
p_{n}^{*}=\sum_{|\lambda|=n} z_{\lambda}^{-1}(-n)^{l(\lambda)} p_{\lambda}
$$

and that

$$
(n-1) e_{n}^{*}=-\sum_{|\lambda|=n}\binom{n-1}{l(\lambda)} u_{\lambda} e_{\lambda} .
$$

25. Let $f(x), g(x) \in \mathbf{Z}[[x]]$ be formal power series with constant term 1. Let $t=x f(x)$ and express $g(x)$ as a power series in $t$ :

$$
g(x)=H(t)=\sum_{n>0} h_{n} t^{n}
$$

Let $\varphi_{n}(f, g)$ denote the coefficient of $x^{n}$ in $\left(f+x f^{\prime}\right) g / f^{n+1}$, where $f^{\prime}$ is the derivative of $f$. Then we have

$$
h_{n}=\varphi_{n}(f, g), \quad e_{n}=(-1)^{n} \varphi_{n}\left(f, g^{-1}\right)
$$

and (with the notation of Example 24)

$$
h_{n}^{*}=\varphi_{n}\left(f g, g^{-1}\right), \quad e_{n}^{*}=(-1)^{n} \varphi_{n}(f g, g) .
$$

Moreover, if $\psi_{n}(f, g)$ is the coefficient of $x^{n-1}$ in $g^{\prime} / f^{n} g$, we have

$$
p_{n}=\psi_{n}(f, g), \quad p_{n}^{*}=\psi_{n}\left(f g, g^{-1}\right) .
$$

(a) Take $f(x)=(1+x)^{-\alpha}$ and $g(x)=(1+x)^{\beta}$. Then

$$
\varphi_{n}(f, g)=\frac{\beta}{n \alpha+\beta}\binom{n \alpha+\beta}{n}=u_{n}(\alpha, \beta),
$$

say, and therefore

$$
\begin{array}{ll}
h_{n}=u_{n}(\alpha, \beta), & e_{n}=u_{n}(1-\alpha, \beta), \\
h_{n}^{*}=u_{n}(\alpha-\beta,-\beta), & e_{n}^{*}=u_{n}(1-\alpha+\beta,-\beta),
\end{array}
$$

and

$$
p_{n}=\frac{\beta}{\alpha}\binom{n \alpha}{n}, \quad \quad p_{n}^{*}=\frac{\beta}{\beta-\alpha}\binom{n \alpha-n \beta}{n} .
$$

In particular, $u_{n}(2,1)$ is the $n$th Catalan number $C_{n}=(n+1)^{-1}\binom{2 n}{n}$, and $u_{n}(2,2)=C_{n+1}, u_{n}(2,-1)=-C_{n-1}$. Hence when $p_{n}=a\binom{2 n}{n}$ with $a=\frac{1}{2}, 1,-\frac{1}{2}$ we have respectively $h_{n}=C_{n}, C_{n+1},-C_{n-1}$, and $h_{n}^{*}=-\delta_{1 n},(-1)^{n}(n+1)$, $n^{-1}\binom{3 n}{n-1}$.
(b) Take $f(x)=e^{-\alpha x}, g(x)=e^{\beta x}$. Then

$$
\varphi_{n}(f, g)=\beta(n \alpha+\beta)^{n-1} / n!=v_{n}(\alpha, \beta),
$$

say, and hence

$$
\begin{array}{ll}
h_{n}=v_{n}(\alpha, \beta), & e_{n}=v_{n}(-\alpha, \beta), \\
h_{n}^{*}=v_{n}(\alpha-\beta,-\beta), & e_{n}^{*}=v_{n}(\beta-\alpha,-\beta),
\end{array}
$$

and

$$
p_{n}=\frac{\beta(n \alpha)^{n-1}}{(n-1)!}, \quad p_{n}^{*}=\frac{-\beta(n \alpha-n \beta)^{n-1}}{(n-1)!} .
$$

26. Let $k$ be a finite field with $q$ elements, and let $V$ be a $k$-vector space of dimension $n$. Let $\mathbf{S}=\mathbf{S}(V)$ be the symmetric algebra of $V$ over $k$ (so that if $x_{1}, \ldots, x_{n}$ is any $k$-basis of $V$, then $\left.\mathbf{S}=k\left[x_{1}, \ldots, x_{n}\right]\right)$. Let

$$
f_{V}(t)=\prod_{v \in V}(t+v),
$$

a polynomial in $\mathbf{S}[t]$.
(a) Show that

$$
f(a t+b u)=a f(t)+b f(u)
$$

for all $a, b \in k$ and indeterminates $t, u$. (If $a \in k, a \neq 0$ we have

$$
\begin{aligned}
f(a t) & =\prod_{v \in V}(a t+v)=a^{q^{n}} \prod_{v \in V}\left(t+a^{-1} v\right) \\
& =a f(t) .
\end{aligned}
$$

Next, let

$$
f(t+u)-f(t)-f(u)=\sum_{r>0} t^{r} g_{r}(u)
$$

with $g_{r}(u) \in \mathbf{S}[u]$; since $f(t+v)=f(t)$ and $f(v)=0$ for all $v \in V$, it follows that $g_{r}(v)=0$ for all $v \in V$. Since $g_{r}$ has degree $<q^{n}$, we conclude that $g_{r}=0$ for each $r$, and hence that $f(t+u)=f(t)+f(u)$.)
(b) Deduce from (a) that $f_{V}(t)$ is of the form

$$
f_{V}(t)=t^{q^{n}}+a_{1}(V) t^{q^{n-1}}+\ldots+a_{n}(V) t
$$

where each $a_{r}(V) \in \mathbf{S}$, and in particular $a_{n}(V)$ is the product of the non-zero vectors in $V$.
Show that

$$
\begin{equation*}
\sum_{L<V} a_{1}(L)=0 \tag{1}
\end{equation*}
$$

where the sum is over all lines (i.e. one-dimensional subspaces) $L$ in $V$. (Since each $v \neq 0$ in $V$ lies in a unique line $L=k v$, it follows that

$$
f_{V}(t)=t \prod_{L<V} t^{-1} f_{L}(t)=t \prod_{L<V}\left(t^{q-1}+a_{1}(L)\right)
$$

and therefore the sum (1) is equal to the coefficient of $t^{q^{n-1}}$ in $f_{V}(t)$, which is clearly zero.)
(c) Let $U$ be a vector subspace of $V$. The mapping $v \mapsto f_{U}(v)$ of $V$ into $\mathbf{S}$ is $k$-linear, by (a) above, and its kernel is $U$. Hence its image $f_{U}(V)$ is isomorphic to the quotient of $V$ by $U$, and we shall denote it by $V / U$. Each element of $V / U$ is a product of the form $\Pi_{u \in U}(v+u)$ for some $v \in V$, i.e. it is the product in $\mathbf{S}$ of the elements of a coset of $U$ in $V$.

Show that

$$
f_{V}(t)=f_{V / U}\left(f_{U}(t)\right)
$$

and that if $T$ is a vector subspace of $U$ then

$$
V / U=(V / T) /(U / T)
$$

(d) Show that for $1 \leqslant r \leqslant n-1$ we have

$$
\begin{equation*}
a_{r}(V)=\sum_{L<V} a_{r}(V / L) \tag{2}
\end{equation*}
$$

summed as before over all lines $L$ in $V$. (From (c) above we have $f_{V}(t)=f_{V / L}\left(f_{L}(t)\right.$ ), from which it follows that

$$
a_{r}(V)=a_{r}(V / L)+a_{r-1}(V / L) a_{1}(L)^{q^{n-1}} .
$$

Since the number of lines $L$ in $V$ is $1+q+\ldots+q^{n-1} \equiv 1(\bmod . q)$, it follows that

$$
\begin{equation*}
a_{r}(V)=\sum_{L} a_{r}(V / L)+\sum_{L} a_{r-1}(V / L) a_{1}(L)^{q^{n-1}} \tag{3}
\end{equation*}
$$

By induction on $n=\operatorname{dim} V$ we may assume that

$$
\begin{equation*}
a_{r-1}(V / L)=\sum_{M} a_{r-1}(V / M) \tag{4}
\end{equation*}
$$

summed over all two-dimensional subspaces $M$ in $V$ that contain $L$. The second term on the right-hand side of (3) is therefore equal to

$$
\sum_{M} a_{r-1}(V / M)\left(\sum_{L<M} a_{1}(L)\right)^{q^{n-r}}
$$

which is zero by (1) above.)
(e) Deduce from (d) that

$$
a_{r}(V)=\sum_{U} a_{r}(V / U)
$$

summed over all subspaces $U$ of $V$ of dimension $n-r$, where $a_{r}(V / U)$ is the product of the vectors $v \in V$ such that $v \notin U$.
27. As in Example 26, let $k$ be a finite field with $q$ elements, let $x_{1}, \ldots, x_{n}$ be independent indeterminates over $k$, and let $k[x]=k\left[x_{1}, \ldots, x_{n}\right]$. Let $V$ be the $k$-vector space spanned by $x_{1}, \ldots, x_{n}$, and let

$$
\begin{equation*}
f_{V}(t)=t^{q^{n}}+a_{1} t^{q^{n-1}}+\ldots+a_{n} t \tag{1}
\end{equation*}
$$

be the monic polynomial whose roots are the elements of $V$. Let $k[a]=$ $k\left[a_{1}, \ldots, a_{n}\right] \subset k[x]$.
(a) The coefficients $a_{1}, \ldots, a_{n}$ in (1) are algebraically independent over $k$. (Let $b_{1}, \ldots, b_{n}$ be independent indeterminates over $k$, and let $W$ be the set of roots of the polynomial

$$
g(t)=t^{q^{n}}+b_{1} t^{q^{n-1}}+\ldots+b_{n} t
$$

in a splitting field. The roots are all distinct, since $g^{\prime}(t)=b_{n} \neq 0$, and since $g(\alpha t+\beta u)=\alpha g(t)+\beta g(u)$ for $\alpha, \beta \in k$ it follows that $W$ is a $k$-vector space of dimension $n$. Choose a basis $\left(y_{1}, \ldots, y_{n}\right)$ of $W$ and let $\theta: k[x] \rightarrow k[y]$ be the $k$-algebra homomorphism that sends $x_{i}$ to $y_{i}(1 \leqslant i \leqslant n)$. Then $\theta\left(a_{i}\right)=b_{i}(1 \leqslant i \leqslant n)$; since the $b_{i}$ are algebraically independent over $k$, so are the $a_{i}$.)
(b) Let $G=G L(V) \cong G L_{n}(k)$ be the group of automorphisms of the vector space $V$. Then $G$ acts on the algebra $k[x]$; let $k[x]^{G}$ denote the subalgebra of $G$ invariants. Since $G$ permutes the roots of the polynomial $f_{\nu}(t)$, it fixes each of the coefficients $a_{i}$, so that $k[a] \subset k[x]^{G}$. In fact (see (d) below) $k[a]=k[x]^{G}$.
(c) $k[x]$ is a free $k[a]$-module with basis $\left(x^{\alpha}\right)_{\alpha \in E}$, where

$$
E=\left\{\alpha=\left(\alpha_{1}, \ldots, \alpha_{n}\right): 0 \leqslant \alpha_{i} \leqslant q^{n}-q^{i-1}-1\right\} .
$$

(Let $V_{r}$ denote the subspace of $V$ spanned by $x_{1}, \ldots, x_{r}$, for $0 \leqslant r \leqslant n-1$ (so that $V_{0}=0$ ). The polynomial $g_{r}(t)=f_{V}(t) / f_{V_{r}}(t)$ is monic of degree $q^{n}-q^{r}$, has coefficients in the ring $k\left[a, x_{1}, \ldots, x_{r}\right]$, and has $x_{r+1}$ as a root.
Now let $h \in k[x]$. Use the polynomial $g_{n-1}$ to reduce the degree of $h$ in $x_{n}$ below $q^{n}-q^{n-1}$. Then use $g_{n-2}$ to reduce the degree of $h$ in $x_{n-1}$ below $q^{n}-q^{n-2}$, and so on. In the end we shall obtain say

$$
\begin{equation*}
h=\sum_{\alpha \in E} h_{\alpha} x^{\alpha} \tag{2}
\end{equation*}
$$

with coefficients $h_{\alpha} \in k[a] \subset k[x]^{G}$.
Hence the $x^{\alpha}, \alpha \in E$, span $k[x]$ as $k[x]^{G}$-module. They therefore also span the field $k(x)=k\left(x_{1}, \ldots, x_{n}\right)$ as vector space over $k(x)^{G}$, since every element of $k(x)$ can be written in the form $u / v$ with $u \in k[x]$ and $v \in k[x]^{G}$. But by Galois theory the dimension of $k(x)$ over $k(x)^{G}$ is

$$
|G|=\prod_{i=1}^{n}\left(q^{n}-q^{i-1}\right)=|E| ;
$$

hence $\left(x^{\alpha}\right)_{\alpha \in E}$ is a basis of $k(x)$ over $k(x)^{G}$, i.e. the expression (2) for $h \in k[x]$ is unique.)
(d) Suppose now that $h \in k[x]^{G}$. Then in (2) we must have $h_{\alpha}=0$ if $\alpha \neq(0, \ldots, 0)$, and $h=h_{0, \ldots, 0} \in k[a]$. Hence $k[x]^{G}=k[a]$ (Dickson's theorem).

## Notes and references

Example 11. For more information on Bell polymomials, Stirling numbers etc., see for example L. Comtet's book [C3].
Example 13. This example is due to A. O. Morris [M15].
Example 27. The proof of Dickson's theorem given here I learnt from R. Steinberg.

## 3. Schur functions

Suppose to begin with that the number of variables is finite, say $x_{1}, \ldots, x_{n}$. Let $x^{\alpha}=x_{1}^{\alpha_{1}} \ldots x_{n}^{\alpha_{n}}$ be a monomial, and consider the polynomial $a_{\alpha}$ obtained by antisymmetrizing $x^{\alpha}$ : that is to say,

$$
a_{\alpha}=a_{\alpha}\left(x_{1}, \ldots, x_{n}\right)=\sum_{w \in S_{n}} \varepsilon(w) \cdot w\left(x^{\alpha}\right)
$$

where $\varepsilon(w)$ is the $\operatorname{sign}( \pm 1)$ of the permutation $w$. This polynomial $a_{\alpha}$ is skew-symmetric, i.e. we have

$$
w\left(a_{\alpha}\right)=\varepsilon(w) a_{\alpha}
$$

for any $w \in S_{n}$; in particular, therefore, $a_{\alpha}$ vanishes unless $\alpha_{1}, \ldots, \alpha_{n}$ are all distinct. Hence we may as well assume that $\alpha_{1}>\alpha_{2}>\ldots>\alpha_{n} \geqslant 0$, and therefore we may write $\alpha=\lambda+\delta$, where $\lambda$ is a partition of length $\leqslant n$, and $\delta=(n-1, n-2, \ldots, 1,0)$. Then

$$
a_{\alpha}=a_{\lambda+\delta}=\sum_{w} \varepsilon(w) \cdot w\left(x^{\lambda+\delta}\right)
$$

which can be written as a determinant:

$$
a_{\lambda+\delta}=\operatorname{det}\left(x_{i}^{\lambda_{j}+n-j}\right)_{1 \leqslant i, j \leqslant n} .
$$

This determinant is divisible in $\mathrm{Z}\left[x_{1}, \ldots, x_{n}\right]$ by each of the differences $x_{i}-x_{j}(1 \leqslant i<j \leqslant n)$, and hence by their product, which is the Vandermonde determinant

$$
\prod_{1<i<j \leqslant n}\left(x_{i}-x_{j}\right)=\operatorname{det}\left(x_{i}^{n-j}\right)=a_{\delta} .
$$

So $a_{\lambda+\delta}$ is divisible by $a_{\delta}$ in $\mathbf{Z}\left[x_{1}, \ldots, x_{n}\right]$, and the quotient

$$
\begin{equation*}
s_{\lambda}=s_{\lambda}\left(x_{1}, \ldots, x_{n}\right)=a_{\lambda+\delta} / a_{\delta} \tag{3.1}
\end{equation*}
$$

is symmetric, i.e. is in $\Lambda_{n}$. It is called the Schur function in the variables $x_{1}, \ldots, x_{n}$, corresponding to the partition $\lambda$ (where $l(\lambda) \leqslant n$ ), and is homogeneous of degree $|\lambda|$.

Notice that the definition (3.1) makes sense for any integer vector $\lambda \in \mathbf{Z}^{n}$ such that $\lambda+\delta$ has no negative parts. If the numbers $\lambda_{i}+n-i$ $(1 \leqslant i \leqslant n)$ are not all distinct, then $s_{\lambda}=0$. If they are all distinct, then we have $\lambda+\delta=w(\mu+\delta)$ for some $w \in S_{n}$ and some partition $\mu$, and $s_{\lambda}=$ $\varepsilon(w) s_{\mu}$.

The polynomials $a_{\lambda+\delta}$, where $\lambda$ runs through all partitions of length $\leqslant n$, form a basis of the Z-module $A_{n}$ of skew-symmetric polynomials in $x_{1}, \ldots, x_{n}$. Multiplication by $a_{\delta}$ is an isomorphism of $\Lambda_{n}$ onto $A_{n}$ (i.e. $A_{n}$ is the free $\Lambda_{n}$-module generated by $a_{\delta}$, and therefore
(3.2) The Schur functions $s_{\lambda}\left(x_{1}, \ldots, x_{n}\right)$, where $l(\lambda) \leqslant n$, form a Z-basis of $\Lambda_{n}$.

Now let us consider the effect of increasing the number of variables. If $l(\alpha) \leqslant n$, it is clear that $a_{\alpha}\left(x_{1}, \ldots, x_{n}, 0\right)=a_{\alpha}\left(x_{1}, \ldots, x_{n}\right)$. Hence

$$
\rho_{n+1, n}\left(s_{\lambda}\left(x_{1}, \ldots, x_{n+1}\right)\right)=s_{\lambda}\left(x_{1}, \ldots, x_{n}\right)
$$

in the notation of $\S 2$. It follows that for each partition $\lambda$ the polynomials $s_{\lambda}\left(x_{1}, \ldots, x_{n}\right)$, as $n \rightarrow \infty$, define a unique element $s_{\lambda} \in \Lambda$, homogeneous of degree $|\lambda|$. From (3.2) we have immediately:
(3.3) The $s_{\lambda}$ form a Z-basis of $\Lambda$, and for each $k \geqslant 0$ the $s_{\lambda}$ such that $|\lambda|=k$ form a Z-basis of $\Lambda^{k}$.

From (2.4) and (2.8) it follows that each Schur function $s_{\lambda}$ can be expressed as a polynomial in the elementary symmetric functions $e_{r}$, and as a polynomial in the complete symmetric functions $h_{r}$. The formulas are:

$$
\begin{equation*}
s_{\lambda}=\operatorname{det}\left(h_{\lambda_{i}-i+j}\right)_{1<i, j<n} \tag{3.4}
\end{equation*}
$$

where $n \geqslant l(\lambda)$, and

$$
\begin{equation*}
s_{\lambda}=\operatorname{det}\left(e_{\lambda_{i}^{\prime}-i+j}\right)_{1<i, j<m} \tag{3.5}
\end{equation*}
$$

where $m \geqslant l\left(\lambda^{\prime}\right)$.
By (2.9'), it is enough to prove one of these formulas, say (3.4). We shall work with $n$ variables $x_{1}, \ldots, x_{n}$. For $1 \leqslant k \leqslant n$ let $e_{r}^{(k)}$ denote the elementary symmetric functions of $x_{1}, \ldots, x_{k-1}, x_{k+1}, \ldots, x_{n}$ (omitting $x_{k}$ ), and let $M$ denote the $n \times n$ matrix

$$
M=\left((-1)^{n-i} e_{n-i}^{(k)}\right)_{1 \leqslant i, k \leqslant n}
$$

The formula (3.4) will be a consequence of
(3.6) For any $\alpha=\left(\alpha_{1}, \ldots, \alpha_{n}\right) \in \mathbf{N}^{n}$, let

$$
A_{\alpha}=\left(x_{j}^{\alpha_{i}}\right), \quad H_{\alpha}=\left(h_{\alpha_{i}-n+j}\right)
$$

( $n \times n$ matrices). Then $A_{\alpha}=H_{\alpha} M$.
Proof. Let

$$
E^{(k)}(t)=\sum_{r=0}^{n-1} e_{r}^{(k)} t^{r}=\prod_{i \neq k}\left(1+x_{i} t\right)
$$

Then

$$
H(t) E^{(k)}(-t)=\left(1-x_{k} t\right)^{-1} .
$$

By picking out the coefficient of $t^{\alpha_{i}}$ on either side, we obtain

$$
\sum_{j=1}^{n} h_{\alpha_{i}-n+j} \cdot(-1)^{n-j} e_{n-j}^{(k)}=x_{k}^{\alpha_{i}}
$$

and hence $H_{\alpha} M=A_{\alpha} . \quad$.
Now take determinants in (3.6): we obtain

$$
a_{\alpha}=\operatorname{det}\left(A_{\alpha}\right)=\operatorname{det}\left(H_{\alpha}\right) \operatorname{det}(M)
$$

for any $\alpha \in \mathbf{N}^{n}$, and in particular $\operatorname{det} M=a_{\delta}$, since $\operatorname{det}\left(H_{\delta}\right)=1$. Hence

$$
\begin{equation*}
a_{\alpha}=a_{\delta} \operatorname{det}\left(H_{\alpha}\right) \tag{3.7}
\end{equation*}
$$

or equivalently

$$
\begin{equation*}
a_{\alpha}=a_{\delta} \sum_{w \in S_{n}} \varepsilon(w) h_{\alpha-w \delta} \tag{3.7'}
\end{equation*}
$$

for any $\alpha \in \mathbf{N}^{n}$. Taking $\alpha=\lambda+\delta$ in (3.7), we obtain (3.4), or equivalently from (3.7')

$$
s_{\lambda}=\sum_{w \in S_{n}} \varepsilon(w) h_{\lambda+\delta-w \delta}
$$

From (3.4) and (3.5) it follows that

$$
\begin{equation*}
\omega\left(s_{\lambda}\right)=s_{\lambda^{\prime}} \tag{3.8}
\end{equation*}
$$

for all partitions $\lambda$.
Also from (3.4) and (3.5) we obtain, in particular,

$$
\begin{equation*}
s_{(n)}=h_{n}, \quad s_{\left(1^{n}\right)}=e_{n} \tag{3.9}
\end{equation*}
$$

Finally, the formula (3.4) or (3.4') which expresses $s_{\lambda}$ as a polynomial in the $h$ 's can also be expressed in terms of raising operators ( $\$ 1$ ):

$$
\begin{equation*}
s_{\lambda}=\prod_{i<j}\left(1-R_{i j}\right) h_{\lambda} \tag{3.4"}
\end{equation*}
$$

where, for any raising operator $R, R h_{\lambda}$ means $h_{R \lambda} \cdot \dagger$
$\dagger$ It should be remarked that if $R, R^{\prime}$ are raising operators, $R R^{\prime} h_{\lambda}=h_{R R^{\prime} \lambda}$ is not necessarily equal to $R\left(R^{\prime} h_{\lambda}\right)$. For it may well happen that $R^{\prime} \lambda$ has a negative component, but $R R^{\prime} \lambda$ does not, in which case $R^{\prime} h_{\lambda}=0$ but $R R^{\prime} h_{\lambda} \neq 0$. See [G3] for a discussion of this point.

Proof. In the ring $\mathbf{Z}\left[x_{1}^{ \pm 1}, \ldots, x_{n}^{ \pm 1}\right]$ we have

$$
\begin{aligned}
\sum_{w \in S_{n}} \varepsilon(w) x^{\lambda+\delta-w \delta} & =x^{\lambda+\delta} a_{-\delta}=x^{\lambda+\delta} \prod_{i<j}\left(x_{i}^{-1}-x_{j}^{-1}\right) \\
& =\prod_{i<j}\left(1-x_{i} x_{j}^{-1}\right) \cdot x^{\lambda} \\
& =\prod_{i<j}\left(1-R_{i j}\right) x^{\lambda}
\end{aligned}
$$

where $R\left(x^{\lambda}\right)=x^{R \lambda}$ for any raising operator $R$. If we now apply the Z -linear map $\varphi: \mathbf{Z}\left[x_{1}^{ \pm 1}, \ldots, x_{n}^{ \pm 1}\right] \rightarrow \Lambda_{n}$ defined by $\varphi\left(x^{\alpha}\right)=h_{\alpha}$ for all $\alpha \in$ $\mathbf{Z}^{n}$, we see that

$$
\sum_{w \in S_{n}} \varepsilon(w) h_{\lambda+\delta-w \delta}=\prod_{i<j}\left(1-R_{i j}\right) h_{\lambda}
$$

and therefore (3.4') follows from (3.4'). |
(3.10) Remark. In view of (2.15) we may use (3.4) or (3.5) to define 'Schur operations' in any $\lambda$-ring $R$. If $\mu$ is any partition and $x$ is any element of $R$, we define

$$
\begin{aligned}
S^{\mu}(x) & =\operatorname{det}\left(\sigma^{\mu_{i}-i+j}(x)\right)_{1<i, j<n} \\
& =\operatorname{det}\left(\lambda^{\mu_{i}^{\prime}-i+j}(x)\right)_{1<i, j<m}
\end{aligned}
$$

where $n \geqslant l(\mu)$ and $m \geqslant l\left(\mu^{\prime}\right)$. We have

$$
S^{\mu}(-x)=(-1)^{|\mu|} S^{\mu^{\prime}}(x)
$$

and in particular

$$
S^{(n)}(x)=\sigma^{n}(x), \quad S^{\left(1^{n}\right)}(x)=\lambda^{n}(x) .
$$

For example, the results of Examples 1-3 below evaluate $S^{\lambda}(1+$ $\left.q+\ldots+q^{n-1}\right), S^{\lambda}\left((1-q)^{-1}\right)$ and $S^{\lambda}((a-b) /(1-q))$, where $a, b, q$ are elements of rank 1 in a $\lambda$-ring $R$ such that $1-q$ is a unit in $R$.

Since each $f \in \Lambda$ is an integral linear combination of the $s_{\mu}$, say

$$
f=\sum a_{\mu} s_{\mu},
$$

it follows that $f$ determines a 'natural operation'

$$
F=\sum a_{\mu} S^{\mu}
$$

on the category of $\lambda$-rings. $F$ is natural in the sense that it commutes with all $\lambda$-homomorphisms (because it is a polynomial in the $\lambda^{r}$ ). Conversely, any natural operation $F$ arises in this way, from $f=F\left(e_{1}\right)$.

## Examples

1. Take $x_{i}=q^{i-1}(1 \leqslant i \leqslant n)$ as in $\S 2$, Example 3. If $\lambda$ is any partition of length $\leqslant n$, we have

$$
a_{\lambda+\delta}=\operatorname{det}\left(q^{(i-1)\left(\lambda_{j}+n-j\right)}\right)_{1<i, j<n}
$$

which is a Vandermonde determinant in the variables $q^{\lambda_{j}+n-j}(1 \leqslant j \leqslant n)$, so that

$$
\begin{aligned}
a_{\lambda+\delta} & =\prod_{i<j}\left(q^{\lambda_{j}+n-j}-q^{\lambda_{i}+n-i}\right) \\
& =q^{n(\lambda)+n(n-1)(n-2) / 6} \prod_{i<j}\left(1-q^{\lambda_{i}-\lambda_{j}-i+j}\right)
\end{aligned}
$$

which by use of $\S 1$, Example 1 is equal to

$$
\frac{q^{n(\lambda)+n(n-1)(n-2) / 6} \prod_{i>1} \varphi_{\lambda_{i}+n-i}(q)}{\prod_{x \in \lambda}\left(1-q^{h(x)}\right)}
$$

where $h(x)$ is the hook-length at $x \in \lambda$, and $\varphi_{r}(q)=(1-q) \ldots\left(1-q^{r}\right)$. Hence ( $\S 1$, Example 3)

$$
s_{\lambda}=a_{\lambda+\delta} / a_{\delta}=q^{n(\lambda)} \prod_{x \in \lambda} \frac{1-q^{n+c(x)}}{1-q^{h(x)}}
$$

where $c(x)$ is the content ( $\$ 1$, Example 3 ) of $x \in \lambda$.
For any partition $\lambda$ define

$$
\left[\begin{array}{l}
n \\
\lambda
\end{array}\right]=\prod_{x \in \lambda} \frac{1-q^{n-c(x)}}{1-q^{h(x)}}
$$

(which when $\lambda=(r)$ agrees with the notation $\left[\begin{array}{l}n \\ r\end{array}\right]$ for the $q$-binomial coefficients introduced in §2, Example 3). Then we have

$$
s_{\lambda}\left(1, q, \ldots, q^{n-1}\right)=q^{n(\lambda)}\left[\begin{array}{c}
n \\
\lambda^{\prime}
\end{array}\right] .
$$

$\left[\begin{array}{l}n \\ \lambda\end{array}\right]$ is a polynomial in $q$, of degree

$$
d=\sum_{x \in \lambda}(n-c(x)-h(x))=\sum_{i=1}^{n}(n+1-2 i) \lambda_{i}^{\prime}
$$

by using $\S 1$, Examples 2 and 3 . If $a_{i}$ is the coefficient of $q^{i}$ in $\left[\begin{array}{l}n \\ \lambda\end{array}\right]$ for $0 \leqslant i \leqslant d$, then clearly $a_{i}=a_{d-i}$. We shall show in $\S 8$, Example 4 that $\left[\begin{array}{l}n \\ \lambda\end{array}\right]$ is unimodal (or 'spindle-shaped'), i.e. that $a_{0} \leqslant a_{1} \leqslant \ldots \leqslant a_{[d / 2]}$.

Finally, we can express $\left[\begin{array}{l}n \\ \lambda\end{array}\right]$ as a determinant in the $q$-binomial coefficients $\left[\begin{array}{l}n \\ r\end{array}\right]$, by using (3.5).
2. Let $n \rightarrow \infty$ in Example 1 , so that $H(t)=\prod_{i-0}^{\infty}\left(1-q^{i} t\right)^{-1}$. From Example 1 we have

$$
s_{\lambda}=q^{n(\lambda)} \prod_{x \in \lambda}\left(1-q^{h(x)}\right)^{-1}=q^{n(\lambda)} H_{\lambda}(q)^{-1}
$$

where $H_{\lambda}(q)$ is the 'hook polynomial' $\Pi_{x \in \lambda}\left(1-q^{h(x)}\right)$.
3. More generally, let

$$
H(t)=\prod_{i=0}^{\infty} \frac{1-b q^{i} t}{1-a q^{i} t}
$$

as in §2, Example 5. Then

$$
\begin{equation*}
s_{\lambda}=q^{n(\lambda)} \prod_{x \in \lambda} \frac{a-b q^{c(x)}}{1-q^{h(x)}} \tag{*}
\end{equation*}
$$

For if we replace $t$ by $a^{-1} t$, the effect is to replace $s_{\lambda}$ by $a^{-|\lambda|} s_{\lambda}$. Hence we may assume that $a=1$. Both sides of (*) are then polynomials in $b$, hence it is enough to show that they are equal for infinitely many values of $b$. But when $b=q^{n}$ and $a=1$ we are back in the situation of Example 1, and (*) is therefore true for $b=q^{n}$.
4. Suppose $x_{i}=1(1 \leqslant i \leqslant n), x_{i}=0$ for $i>n$. Then $E(t)=(1+t)^{n}$, and

$$
s_{\lambda}=\prod_{x \in \lambda} \frac{n+c(x)}{h(x)}
$$

by setting $q=1$ in Example 1.
More generally, if $E(t)=(1+t)^{X}$, where $X$ need not be a positive integer, then

$$
s_{\lambda}=\prod_{x \in \lambda} \frac{X+c(x)}{h(x)}
$$

for the same reason as in Example 3: both sides are polynomials in $X$ which take the same values at all positive integers.

These polynomials may be regarded as generalized binomial coefficients, and they take integer values whenever $X$ is an integer. For any partition $\lambda$ define

$$
\binom{X}{\lambda}=\prod_{x \in \lambda} \frac{X-c(x)}{h(x)}
$$

(which is consistent with the usual notation for binomial coefficients). Then

$$
\binom{X}{\lambda}=\operatorname{det}\left(\binom{X}{\lambda_{i}-i+j}\right)
$$

by (3.5). Also

$$
\binom{-X}{\lambda}=(-1)^{|\lambda|}\binom{X}{\lambda^{\prime}}
$$

5. As in §2, Example 2, take $x_{i}=1 / n$ for $1 \leqslant i \leqslant n, x_{i}=0$ for $i>n$, and let $n \rightarrow \infty$. Then $E(t)=H(t)=e^{t}$, and from Example 4 we have

$$
\begin{aligned}
s_{\lambda} & =\lim _{n \rightarrow \infty} \frac{1}{n^{|\lambda|}} \prod_{x \in \lambda} \frac{n+c(x)}{h(x)} \\
& =\prod_{x \in \lambda} h(x)^{-1} .
\end{aligned}
$$

6. Let $p(n)$ denote the number of partitions of $n$. Then

$$
\operatorname{det}(p(i-j+1))_{1<i, j<n}
$$

is equal to $\pm 1$ or 0 according as $n$ is or is not a pentagonal number. (Use $\S 2$, Example 6 together with (3.4).)
7. Let $m$ be a positive integer. Then

$$
\begin{aligned}
\prod_{1<i<j<n} \frac{x_{i}^{m}-x_{j}^{m}}{x_{i}-x_{j}} & =\frac{a_{m \delta}}{a_{\delta}}=s_{(m-1) \delta} \\
& =\operatorname{det}\left(h_{(m-1)(n-i)-i+j}\right)_{1<i, j<n} \\
& =\operatorname{det}\left(h_{m i-j}\right)_{1<i, j<n-1} .
\end{aligned}
$$

In particular,

$$
\prod_{i<j}\left(x_{i}+x_{j}\right)=\operatorname{det}\left(h_{2 i-j}\right) .
$$

8. Consider the ring $Q_{n}=\mathrm{Q}\left[x_{1}^{ \pm 1}, \ldots, x_{n}^{ \pm 1}\right]$ of polynomials in $x_{1}, \ldots, x_{n}$ and their inverses. For each $\alpha \in \mathbf{Z}^{n}$ the monomial $x^{\alpha}=x_{1}^{\alpha_{1}} \ldots x_{n}^{\alpha_{n}}$ generates a symmetric function

$$
\tilde{m}_{\alpha}=\sum_{w \in S_{n}} x^{w \alpha}
$$

and the $\tilde{m}_{\alpha}$ such that $\alpha_{1} \geqslant \alpha_{2} \geqslant \ldots \geqslant \alpha_{n}$ form a basis of $Q_{n}^{S_{n}}$.
Define a linear mapping $\varphi: Q_{n}^{S_{n}} \rightarrow \Lambda_{n} \otimes \mathbf{Q}$ by $\varphi\left(\tilde{m}_{\alpha}\right)=h_{\alpha}$ (with the usual convention that $h_{\alpha}=0$ if any $\alpha_{i}$ is negative).
(a) For all $\alpha, \beta \in \mathbf{Z}^{n}$ we have

$$
\varphi\left(a_{\alpha} a_{\beta}\right)=\operatorname{det}\left(h_{\alpha_{i}+\beta_{i}}\right)_{1<i, j<n} .
$$

For

$$
\begin{aligned}
a_{\alpha} a_{\beta} & =\sum_{w_{1}, w_{2} \in S_{n}} \varepsilon\left(w_{1} w_{2}\right) x^{w_{1} \alpha+w_{2} \beta} \\
& =\sum_{w \in S_{n}} \varepsilon(w) \sum_{w_{1} \in S_{n}} x^{w_{1}(\alpha+w \beta)} \\
& =\sum_{w \in S_{n}} \varepsilon(w) \tilde{m}_{\alpha+w \beta}
\end{aligned}
$$

so that

$$
\varphi\left(a_{\alpha} a_{\beta}\right)=\sum_{w \in S_{n}} \varepsilon(w) h_{\alpha+w \beta}=\operatorname{det}\left(h_{\alpha_{i}+\beta_{j}}\right)
$$

(b) In particular, if $\lambda$ is any partition of length $\leqslant n$, we have

$$
\varphi\left(s_{\lambda} a_{\delta} a_{-\delta}\right)=\varphi\left(a_{\lambda+\delta} a_{-\delta}\right)=\operatorname{det}\left(h_{\lambda_{1}-i+j}\right)=s_{\lambda}
$$

by (3.4). Since the $s_{\lambda}$ form a Z-basis of $\Lambda_{n}$, it follows that $\varphi\left(f a_{\delta} a_{-\delta}\right)=f$ for all $f \in \Lambda_{n}$.
(c) Let $\alpha, \beta \in \mathrm{N}^{n}$ and let $\bar{\beta}=\left(\beta_{n}, \ldots, \beta_{1}\right)$ be the reverse of $\beta$. Then $s_{\bar{\beta}}=a_{\beta-\delta} / a_{-\delta}$, and hence from (a), (b) we have

$$
s_{\alpha} s_{\bar{\beta}}=\varphi\left(a_{\alpha+\delta} a_{\beta-\delta}\right)=\operatorname{det}\left(h_{a_{i}+\beta_{j}-i+j}\right)_{1<i, j \leqslant n},
$$

a formula which expresses the product of two Schur functions (in a finite number of variables) as a determinant in the $h_{r}$.
9. Let $a, b \geqslant 0$, then $(a \mid b)$ is the Frobenius notation ( $\S 1$ ) for the partition $\left(a+1,1^{b}\right)$. From the determinant formula (3.4) we have

$$
s_{(a \mid b)}=h_{a+1} e_{b}-h_{a+2} e_{b-1}+\ldots+(-1)^{b} h_{a+b+1}
$$

If $a$ or $b$ is negative, we define $s_{(a \mid b)}$ by this formula. It follows that (when $a$ or $b$ is negative) $s_{(a \mid b)}=0$ except when $a+b=-1$, in which case $s_{(a \mid b)}=(-1)^{b}$.

Now let $\lambda$ be any partition of length $\leqslant n$. By multiplying the matrix $\left(h_{\lambda_{l}-i+j}\right)_{1<i, j<n}$ on the right by the matrix $\left((-1)^{j-1} e_{n+1-j-k}\right)_{1<j, k<n}$, we obtain the matrix $\left(s_{\left(\lambda_{i}-i \mid n-k\right)}\right)_{1<i, k<n}$. By taking determinants and using $\S 1$, Example 4 we arrive at the formula

$$
s_{(\alpha \mid \beta)}=\operatorname{det}\left(s_{\left(\alpha_{i} \mid \beta_{j}\right)}\right)_{1<i, j<r}
$$

where $(\alpha \mid \beta)=\left(\alpha_{1}, \ldots, \alpha_{r} \mid \beta_{1}, \ldots, \beta_{r}\right)$.
10.

$$
s_{\lambda}\left(1+x_{1}, 1+x_{2}, \ldots, 1+x_{n}\right)=\sum_{\mu} d_{\lambda \mu} s_{\mu}\left(x_{1}, \ldots, x_{n}\right)
$$

summed over all partitions $\mu \subset \lambda$, where

$$
d_{\lambda \mu}=\operatorname{det}\left(\binom{\lambda_{i}+n-i}{\mu_{j}+n-j}\right)_{1<i, j \leqslant n}
$$

(Calculate $a_{\lambda+\delta}\left(1+x_{1}, \ldots, 1+x_{n}\right)$ and observe that $a_{\delta}\left(1+x, \ldots, 1+x_{n}\right)=$ $a_{\delta}\left(x_{1}, \ldots, x_{n}\right)$.)

This formula can be used to calculate the Chern classes of the exterior square $\Lambda^{2} E$ and symmetric square $\mathbf{S}^{2} E$ of a vector bundle $E$. If $c(E)=\prod_{i=1}^{m}\left(1+x_{i}\right)$ is the total Chern class of $E$, then

$$
\begin{aligned}
c\left(\Lambda^{2} E\right) & =\prod_{i<j}\left(1+x_{i}+x_{j}\right) \\
& =2^{-m(m-1) / 2} \prod_{i<j}\left(1+2 x_{i}+1+2 x_{j}\right) \\
& =2^{-m(m-1) / 2} s_{\delta}\left(1+2 x_{1}, \ldots, 1+2 x_{m}\right)
\end{aligned}
$$

by Example 7 , where $\delta=(m-1, m-2, \ldots, 0)$, and therefore

$$
c\left(\wedge^{2} E\right)=2^{-m(m-1) / 2} \sum_{\mu \in \delta} d_{\delta \mu} 2^{|\mu|} s_{\mu}\left(x_{1}, \ldots, x_{m}\right)
$$

Likewise

$$
\begin{aligned}
c\left(\mathbf{S}^{2} E\right) & =\prod_{i<j}\left(1+x_{i}+x_{j}\right) \\
& =2^{-m(m-1) / 2} \sum_{\nu \subset_{\varepsilon}} d_{s \nu} 2^{|\nu|} s_{\nu}\left(x_{1}, \ldots, x_{m}\right)
\end{aligned}
$$

where $\varepsilon=(m, m-1, \ldots, 1)$.
11. Let $\mu=\left(\mu_{1}, \ldots, \mu_{n}\right)$ be a partition of length $\leqslant n$, and $r$ a positive integer. Then, the variables being $x_{1}, \ldots, x_{n}$, we have

$$
\begin{equation*}
a_{\mu+\delta} p_{r}=\sum_{q=1}^{n} a_{\mu+\delta+r \varepsilon_{q}} \tag{1}
\end{equation*}
$$

where $\varepsilon_{q}$ is the sequence with 1 in the $q$ th place and 0 elsewhere. We shall rearrange the sequence $\mu+\delta+r \varepsilon_{q}$ in descending order. If it has two terms equal, it will contribute nothing to (1). We may therefore assume that for some $p \leqslant q$ we have

$$
\mu_{p-1}+n-p+1>\mu_{q}+n-q+r>\mu_{p}+n-p
$$

in which case $a_{\mu+\delta+r \varepsilon_{q}}=(-1)^{q-p} a_{\lambda+\delta}$, where $\lambda$ is the partition

$$
\lambda=\left(\mu_{1}, \ldots, \mu_{p-1}, \mu_{q}+p-q+r, \mu_{p}+1, \ldots, \mu_{q-1}+1, \mu_{q+1}, \ldots, \mu_{n}\right),
$$

and therefore $\theta=\lambda-\mu$ is a border strip of length $r$. Recall ( $\$ 1$ ) that the height $\mathrm{ht}(\theta)$ of a border strip $\theta$ is one less than the number of rows it occupies. With this terminology, the preceding discussion shows that

$$
\begin{equation*}
s_{\mu} p_{r}=\sum_{\lambda}(-1)^{\mathrm{ht}(\lambda-\mu)} s_{\lambda} \tag{2}
\end{equation*}
$$

summed over all partitions $\lambda \supset \mu$ such that $\lambda-\mu$ is a border strip of length $r$.

From (2) it follows that, for any partitions $\lambda, \mu, \rho$ such that $|\lambda|=|\mu|+|\rho|$, the coefficient of $s_{\lambda}$ in $s_{\mu} p_{\rho}$ is

$$
\sum_{S}(-1)^{\mathrm{ht}(S)}
$$

summed over all sequences of partitions $S=\left(\lambda^{(0)}, \lambda^{(1)}, \ldots, \lambda^{(m)}\right)$ such that $\mu=$ $\lambda^{(0)} \subset \lambda^{(1)} \subset \ldots \subset \lambda^{(m)}=\lambda$, with each $\lambda^{(i)}-\lambda^{(i-1)}$ a border strip of length $\rho_{i}$, and

$$
h t(S)=\sum_{i} h t\left(\lambda^{(i)}-\lambda^{(i-1)}\right)
$$

12. Let $\sigma: \mathbf{Z}\left[x_{1}, \ldots, x_{n}\right] \rightarrow \Lambda_{n}$ be the $\mathbb{Z}$-linear mapping defined by $\sigma\left(x^{\alpha}\right)=s_{\alpha}$ for all $\alpha \in \mathrm{N}^{n}$. Then $\sigma$ is $\Lambda_{n}$-linear, i.e. $\sigma(f g)=f \sigma(g)$ for $f \in \Lambda_{n}$ and $g \in$ $\mathrm{Z}\left[x_{1}, \ldots, x_{n}\right]$. For $\sigma\left(x^{\alpha}\right)=a_{\delta}^{-1} a\left(x^{\alpha+\delta}\right)$, where

$$
a=\sum_{w \in S_{n}} \varepsilon(w) w
$$

is the antisymmetrization operator. By linearity it follows that $\sigma(g)=a_{\delta}^{-1} a\left(g x^{\delta}\right)$ for all $g \in \mathbf{Z}\left[x_{1}, \ldots, x_{n}\right]$, and the result follows from the fact that $a$ is $\Lambda_{n}$-linear.
13. If $a, b \geqslant 0$ we have

$$
(a+b+1) a!b!s_{(a \mid b)}=\left|\begin{array}{cccc}
p_{1} & c_{1} & 0 & 0 \\
p_{2} & p_{1} & c_{2} & 0 \\
\vdots & & & \vdots \\
p_{a+b} & & & c_{a+b} \\
p_{a+b+1} & & & p_{1}
\end{array}\right|
$$

where $\left(c_{1}, \ldots, c_{a+b}\right)=(-1,-2, \ldots,-a, b, b-1, \ldots, 1)$.
(Use the relation $s_{(a \mid b)}+s_{(a+1 \mid b-1)}=h_{a+1} e_{b}$ which follows from the first formula in Example 9, together with the determinant formulas of §2, Example 8, and induction on $b$.)
14.

$$
\prod \frac{1+u x_{i}}{1-t x_{i}}=E(u) H(t)=1+(t+u) \sum_{a, b \geqslant 0} s_{(a \mid b)} t^{a} u^{b}
$$

15. Let $M$ be an $n \times n$ matrix with eigenvalues $x_{1}, \ldots, x_{n}$. Then for each integer $r \geqslant 0$ we have

$$
M^{n+r}=\sum_{p=0}^{n-1}(-1)^{p} s_{(r \mid p)}\left(x_{1}, \ldots, x_{n}\right) M^{n-p-1}
$$

(If $M^{n+r}=\sum a_{p} M^{n-p-1}$, we have $x_{i}^{n+r}=\sum a_{p} x_{i}^{n-p-1}$ for $1 \leqslant i \leqslant n$; now solve these equations for $a_{0}, \ldots, a_{p-1}$.)
16. Let $\lambda, \mu$ be partitions of length $\leqslant n$, and let

$$
P_{n}(\lambda, \mu)=\operatorname{det}\left(p_{\lambda_{i}+\mu_{j}+2 n-i-j}\right)_{1<i, j<n}
$$

with the understanding that $p_{0}=n$. Then in $\Lambda_{n}$ we have

$$
\begin{aligned}
s_{\lambda} & =P_{n}(\lambda, \mu) / P_{n}(0, \mu), \\
s_{\lambda} s_{\mu} & =P_{n}(\lambda, \mu) / P_{n}(0,0)
\end{aligned}
$$

(Observe that $P_{n}(\lambda, \mu)=a_{\lambda+\delta} a_{\mu+\delta}$, by multiplication of determinants.)
17. (a) Let $p$ be an integer $\geqslant 2$ and let $\omega=e^{2 \pi i / p}$. If $\lambda$ is any partition of length $\leqslant p$, we have

$$
\begin{equation*}
s_{\lambda}\left(1, \omega, \ldots, \omega^{p-1}\right)=\prod_{1<j<k<p} \frac{\omega^{\lambda_{j}+p-j}-\omega^{\lambda_{k}+p-k}}{\omega^{p-j}-\omega^{p-k}} \tag{*}
\end{equation*}
$$

from which it follows that $s_{\lambda}\left(1, \omega, \ldots, \omega^{p-1}\right)= \pm 1$ if $\lambda \sim_{p} 0(\$ 1$, Example $8(f))$ and is zero otherwise. More precisely, if $\lambda \sim_{p} 0$ we have $s_{\lambda}\left(1, \omega, \ldots, \omega^{p-1}\right)=\sigma_{p}(\lambda)$, where $\sigma_{p}(\lambda)$ is the sign $\varepsilon(w)$ of the unique permutation $w \in S_{p}$ such that $\lambda+\delta_{p} \equiv$ $w \delta_{p}$ (mod. $p$ ), where $\delta_{p}=(p-1, p-2, \ldots, 1,0)$.
(b) Assume from now on that $p$ is an odd prime. Then

$$
\begin{aligned}
E(t) & =\prod_{r=1}^{p}\left(1+\omega^{r-1} t\right)=1+t^{p} \\
& \left.\equiv(1+t)^{p} \quad \text { (mod. } p\right)
\end{aligned}
$$

and therefore

$$
s_{\lambda}\left(1, \omega, \ldots, \omega^{p-1}\right) \equiv s_{\lambda}(1, \ldots, 1) \quad(\bmod . p)
$$

(1)

$$
=\binom{p}{\lambda^{\prime}}
$$

(Example 4). Hence $\binom{p}{\lambda} \equiv 0(\bmod . p)$ unless $\lambda \sim{ }_{p} 0$
(c) Let $q \neq p$ be another odd prime and let $\lambda=(q-1) \delta_{p}$. Then

$$
\begin{equation*}
s_{\lambda}\left(x_{1}, \ldots, x_{p}\right)=\prod_{i<j}\left(x_{i}^{q}-x_{j}^{q}\right) /\left(x_{i}-x_{j}\right) \tag{2}
\end{equation*}
$$

from which it follows that

$$
\begin{equation*}
s_{\lambda}(1, \ldots, 1)=q^{p(p-1) / 2} \equiv\left(\frac{q}{p}\right) \quad(\bmod . p) \tag{3}
\end{equation*}
$$

where $\left(\frac{q}{p}\right)$ is the Legendre symbol, equal to +1 or -1 according as $q$ is or is not a square modulo $p$. From (1) and (3) we deduce that

$$
\begin{equation*}
s_{\lambda}\left(1, \omega, \ldots, \omega^{p-1}\right)=\left(\frac{q}{p}\right) \tag{4}
\end{equation*}
$$

(d) Let $G_{p}$ (resp. $G_{q}$ ) denote the set of complex $p$ th (resp. $q$ th) roots of unity, and choose $S \subset G_{p}$ and $T \subset G_{q}$ such that

$$
\begin{aligned}
& \left(x^{p}-1\right) /(x-1)=\prod_{\sigma \in S}(x-\sigma)\left(x-\sigma^{-1}\right), \\
& \left(x^{q}-1\right) /(x-1)=\prod_{\tau \in T}(x-\tau)\left(x-\tau^{-1}\right) .
\end{aligned}
$$

From (2) and (4) we have

$$
\begin{equation*}
\left(\frac{q}{p}\right)=\prod\left(\alpha^{q}-\beta^{q}\right) /(\alpha-\beta) \tag{5}
\end{equation*}
$$

the product being taken over all two-element subsets $\{\alpha, \beta\}$ of $G_{p}$, where we may assume that $\alpha^{-1} \beta \in S$. We have
(6)

$$
\begin{aligned}
\left(\alpha^{q}-\beta^{q}\right) /(\alpha-\beta) & =\prod_{\tau \in T}(\alpha-\beta \tau)\left(\alpha-\beta \tau^{-1}\right) \\
& =\prod_{\tau \in T} \alpha \beta(1-\sigma \tau)\left(\sigma^{-1}-\tau^{-1}\right)
\end{aligned}
$$

where $\sigma=\alpha^{-1} \beta \in S$. Deduce from (5) and (6) that

$$
\begin{equation*}
\left(\frac{q}{p}\right)=\prod_{\sigma, \tau}(1-\sigma \tau)\left(\sigma^{-1}-\tau^{-1}\right) \tag{7}
\end{equation*}
$$

(product over all $\sigma \in S, \tau \in T$ ). (Observe that $\Pi \alpha \beta=1$, that each $\sigma \in S$ arises as $\alpha^{-1} \beta$ from $p$ subsets $\{\alpha, \beta\}$, and that $(1-\sigma \tau)\left(\sigma^{-1}-\tau^{-1}\right)$ is a real number.)

By interchanging $q$ and $p$ we have likewise

$$
\begin{equation*}
\left(\frac{p}{q}\right)=\prod_{\sigma, \tau}(1-\sigma \tau)\left(\tau^{-1}-\sigma^{-1}\right) \tag{7'}
\end{equation*}
$$

and therefore

$$
\left(\frac{p}{q}\right)=(-1)^{(p-1)(q-1) / 4}\left(\frac{q}{p}\right)
$$

(the law of quadratic reciprocity).
18. Let $k$ be a finite field with $q$ elements, let $x_{1}, \ldots, x_{n}$ be independent indeterminates over $k$, and let $k[x]=k\left[x_{1}, \ldots, x_{n}\right]$. Let $\alpha=\left(\alpha_{1}, \ldots, \alpha_{n}\right) \in \mathrm{N}^{n}$, let $q^{\alpha}=$ ( $q^{\alpha_{1}}, \ldots, q^{\alpha_{n}}$ ), and let $A_{\alpha} \in k[x]$ be the polynomial obtained by antisymmetrizing the monomial $x^{q^{\alpha}}$, so that

$$
\begin{equation*}
A_{\alpha}=A_{\alpha}\left(x_{1}, \ldots, x_{n}\right)=\operatorname{det}\left(x_{i}^{q^{a_{j}}}\right)_{1<i, j<n} . \tag{1}
\end{equation*}
$$

As in the text, we may assume that $\alpha_{1}>\alpha_{2}>\ldots>\alpha_{n} \geqslant 0$, so that $\alpha=\lambda+\delta$, where $\lambda$ is a partition of length $\leqslant n$.
(a) As in $\S 2$, Example 26 , let $V$ denote the $k$-vector space spanned by $x_{1}, \ldots, x_{n}$ in $k[x]$, and let $G=G L(V) \cong G L_{n}(k)$, acting on $k[x]$. Show that

$$
\begin{equation*}
g A_{\alpha}=(\operatorname{det} g) A_{\alpha} \tag{2}
\end{equation*}
$$

for $g \in G$, and deduce that $A_{\alpha}$ is divisible in $k[x]$ by each non-zero $v \in V$. (The definition (1) shows that $A_{\alpha}$ is divisible by each $x_{i}$, and $G$ acts transitively on $V-\{0\}$.)
(b) Consider in particular the case $\lambda=0$, i.e. $\alpha=\delta=(n-1, n-2, \ldots, 1,0)$. The polynomial $A_{\delta}$ is homogeneous of degree

$$
q^{n-1}+q^{n-2}+\ldots+1=\left(q^{n}-1\right) /(q-1)
$$

and has leading term $x^{q^{\delta}}$. Let $V_{0}$ denote the set of all non-zero vectors $v=\Sigma a_{i} x_{i}$ in $V$ for which the first nonvanishing coefficient $a_{i}$ is equal to 1 . Then we have

$$
A_{\delta}=\prod_{v \in V_{0}} v
$$

and each $A_{\alpha}$ is divisible in $k[x]$ by $A_{\delta}$.
(c) Now define, for any partition $\lambda$ of length $\leqslant n$,

$$
\begin{equation*}
S_{\lambda}=S_{\lambda}\left(x_{1}, \ldots, x_{n}\right)=A_{\lambda+\delta} / A_{\delta} \tag{3}
\end{equation*}
$$

From (2) above it follows that $S_{\lambda}$ is $G$-invariant, and hence depends only on $\lambda$ and $V$, not on the particular basis $\left(x_{1}, \ldots, x_{n}\right)$ of $V$. Accordingly we shall write $S_{\lambda}(V)$ in place of $S_{\lambda}\left(x_{1}, \ldots, x_{n}\right)$. It is a homogeneous polynomial of degree $\sum_{i-1}^{n}\left(q^{\lambda_{i}}-1\right) q^{n-i}$.
(d) If $t$ is another indeterminate, we have from (b) above

$$
\begin{aligned}
A_{\delta_{n+1}}\left(t, x_{1}, \ldots, x_{n}\right) & =A_{\delta_{n}}\left(x_{1}, \ldots, x_{n}\right) \prod_{v \in V}(t+v) \\
& =A_{\delta_{n}}\left(x_{1}, \ldots, x_{n}\right) f_{V}(t)
\end{aligned}
$$

in the notation of $\S 2$, Example 25 . By expanding the determinant $A_{\delta_{n+1}}\left(t, x_{1}, \ldots, x_{n}\right)$ along the top row, show that

$$
f_{V}(t)=t^{q}-E_{1}(V) t^{q^{n-1}}+\ldots+(-1)^{n} E_{n}(V) t
$$

where

$$
E_{r}(V)=S_{\left(1^{\prime}\right)}(V) \quad(1 \leqslant r \leqslant n)
$$

The $E_{r}(V)$ are the analogues of the elementary symmetric functions, and in the notation of §2, Example 26 we have

$$
\begin{aligned}
E_{r}(V) & =(-1)^{r} a_{r}(V) \\
& =(-1)^{r} \sum_{U} a_{r}(V / U)
\end{aligned}
$$

summed over subspaces $U$ of $V$ of codimension $r$.
19. In continuation of Example 18, let

$$
H_{r}(V)=S_{(r)}(V)
$$

with the usual convention that $H_{r}(V)=0$ if $r<0$. (Likewise we define $E_{r}(V)$ to be zero if $r<0$ or $r>n$.) Let $\mathbf{S}(V)(=k[x])$ be the symmetric algebra of $V$ over $k$, and let $\varphi: \mathbf{S}(V) \rightarrow \mathbf{S}(V)$ denote the Frobenius map $u \rightarrow u^{q}$, which is a $k$-algebra endomorphism of $\mathbf{S}(V)$, its image being $k\left[x_{1}^{q}, \ldots, x_{n}^{q}\right]$. Since we shall later encounter negative powers of $\varphi$, it is convenient to introduce

$$
\hat{\mathbf{s}}(V)=\bigcup_{r \geqslant 0} \mathbf{S}(V)^{q^{-r}},
$$

where $\mathbf{S}(V)^{q^{-r}}=k\left[x_{1}^{q^{-r}}, \ldots, x_{n}^{q^{-r}}\right]$. On $\hat{\mathbf{S}}(V), \varphi$ is an automorphism.
(a) Let $E(V), H(V)$ denote the (infinite) matrices

$$
\begin{aligned}
& H(V)=\left(\varphi^{i+1} H_{j-i}(V)\right)_{i, j \in \mathbf{Z}} \\
& E(V)=\left((-1)^{j-i} \varphi^{j} E_{j-i}(V)\right)_{i, j \in \mathbf{Z}}
\end{aligned}
$$

Both are upper triangular, with 1's on the diagonal. Show that

$$
E(V)=H(V)^{-1}
$$

(We have to show that

$$
\sum_{j}(-1)^{k-j} \varphi^{k}\left(E_{k-j}\right) \varphi^{i+1}\left(H_{j-i}\right)=\delta_{i k}
$$

for all $i, k$. This is clear if $i \geqslant k$. If $i<k$, we may argue as follows: since $f_{V}\left(x_{i}\right)=0$ it follows from Example 18 that

$$
\varphi^{n}\left(x_{i}\right)-E_{1} \varphi^{n-1}\left(x_{i}\right)+\ldots+(-1)^{n} E_{n} x_{i}=0
$$

and hence that

$$
\begin{equation*}
\varphi^{n+r-1}\left(x_{i}\right)-\varphi^{r-1}\left(E_{1}\right) \varphi^{n+r-2}\left(x_{i}\right)+\ldots+(-1)^{n} \varphi^{r-1}\left(E_{n}\right) \varphi^{r-1}\left(x_{i}\right)=0 \tag{1}
\end{equation*}
$$

for all $r \geqslant 0$ and $1 \leqslant i \leqslant n$. On the other hand, by expanding the determinant $A_{(r)+\delta}$ down the first column, it is clear that $H_{r}=H_{r}(V)$ is of the form

$$
\begin{equation*}
H_{r}=\sum_{i=1}^{n} u_{i} \varphi^{n+r-1}\left(x_{i}\right) \tag{2}
\end{equation*}
$$

with coefficients $u_{i} \in k(x)$ independent of $r$. From (1) and (2) it follows that

$$
\begin{equation*}
H_{r}-\varphi^{r-1}\left(E_{1}\right) H_{r-1}+\ldots+(-1)^{n} \varphi^{r-1}\left(E_{n}\right) H_{r-n}=0 \tag{3}
\end{equation*}
$$

for each $r \geqslant 0$. Putting $r=k-i$ and operating on (3) with $\varphi^{i+1}$, we obtain the desired relation.)
(b) Let $\lambda$ be a partition of length $\leqslant n$. Then

$$
\begin{aligned}
S_{\lambda}(V) & =\operatorname{det}\left(\varphi^{1-j} H_{\lambda_{i}-i+j}(V)\right) \\
& =\operatorname{det}\left(\varphi^{j-1} E_{\lambda_{i}-i+j}(V)\right)
\end{aligned}
$$

in strict analogy with (3.4) and (3.5). (Let $\alpha=\left(\alpha_{1}, \ldots, \alpha_{n}\right) \in \mathbf{N}^{n}$. From equation (2) above we have

$$
\varphi^{1-j}\left(H_{\alpha_{i}-n+j}\right)=\sum_{i=1}^{n} \varphi^{\alpha_{i}}\left(x_{k}\right) \varphi^{1-j}\left(u_{k}\right)
$$

which shows that the matrix $\left(\varphi^{1-j} H_{\alpha_{i}-n+j}\right)_{i, j}$ is the product of the matrices $\left(\varphi^{\alpha_{i}} x_{k}\right)_{i, k}$ and $\left(\varphi^{1-j} u_{k}\right)_{k, j}$-all three matrices having $n$ rows and $n$ columns. On taking determinants it follows that

$$
\begin{equation*}
\operatorname{det}\left(\varphi^{1-j} H_{\alpha_{i}-n+j}\right)=A_{\alpha} B \tag{4}
\end{equation*}
$$

where $B=\operatorname{det}\left(\varphi^{1-j} u_{k}\right)$. In particular, taking $\alpha=\delta$ (so that $\left.\alpha_{i}-n+j=j-i\right)$ the left-hand side of (4) becomes equal to 1 , so that $A_{\delta} B=1$ and therefore

$$
\operatorname{det}\left(\varphi^{1-j} H_{\alpha_{i}-n+j}\right)=A_{\alpha} / A_{\delta}
$$

for all $\alpha \in \mathbf{N}^{n}$. Taking $\alpha=\lambda+\delta$, we obtain the first formula. The second (involying the $E$ 's) is then deduced from it and the result of (a) above, exactly as in the text.)
20. Let $R$ be any commutative ring and let $a=\left(a_{n}\right)_{n \in Z}$ be any (doubly infinite) sequence of elements of $R$. For each $r \in \mathbf{Z}$ we define $\tau^{\prime} a$ to be the sequence whose $n$th term is $a_{n+r}$. Let

$$
(x \mid a)^{r}=\left(x+a_{1}\right) \ldots\left(x+a_{r}\right)
$$

for each $r \geqslant 0$.
Now let $x=\left(x_{1}, \ldots, x_{n}\right)$ be a sequence of independent indeterminates over $R$, and for each $\alpha=\left(\alpha_{1}, \ldots, \alpha_{n}\right) \in \mathbf{N}^{n}$ define

$$
\begin{equation*}
A_{\alpha}(x \mid a)=\operatorname{det}\left(\left(x_{i} \mid a\right)^{\alpha}\right)_{1<i, j<n} . \tag{1}
\end{equation*}
$$

In particular, when $\alpha=\delta=\left(n-1, n-2, \ldots, 1,0\right.$ ), since $\left(x_{i} \mid a\right)^{n-j}$ is a monic polynomial in $x_{i}$ of degree $n-j$, it follows that

$$
\begin{equation*}
A_{\delta}(x \mid a)=\operatorname{det}\left(x_{i}^{n-j}\right)=a_{\delta}(x) \tag{2}
\end{equation*}
$$

is the Vandermonde determinant, independent of the sequence $a$. Since $A_{\alpha}(x \mid a)$ is a skew-symmetric polynomial in $x_{1}, \ldots, x_{n}$, it is therefore divisible by $A_{\delta}(x \mid a)$ in $R\left[x_{1}, \ldots, x_{n}\right]$. As in the text, we may assume that $\alpha_{1}>\alpha_{2}>\ldots>\alpha_{n} \geqslant 0$, i.e. that $\alpha=\lambda+\delta$ where $\lambda$ is a partition of length $\leqslant n$. It follows therefore that

$$
\begin{equation*}
s_{\lambda}(x \mid a)=A_{\lambda+\delta}(x \mid a) / A_{\delta}(x \mid a) \tag{3}
\end{equation*}
$$

is a symmetric (but not homogeneous) polynomial in $x_{1}, \ldots, x_{n}$ with coefficients in $R$. Moreover it is clear from the definitions that

$$
A_{\lambda+\delta}(x \mid a)=a_{\lambda+\delta}(x)+\text { lower terms, }
$$

and hence that

$$
s_{\lambda}(x \mid a)=s_{\lambda}(x)+\text { lower terms. }
$$

Hence the $s_{\lambda}(x \mid a)$ form an $R$-basis of the ring $\Lambda_{n, R}$.
When $\lambda=(r)$ we shall write

$$
h_{r}(x \mid a)=s_{(r)}(x \mid a)
$$

with the usual convention that $h_{r}(x \mid a)=0$ if $r<0$; and when $\lambda=\left(1^{r}\right)(0 \leqslant r \leqslant n)$ we shall write

$$
e_{r}(x \mid a)=s_{\left(1^{\prime}\right)}(x \mid a)
$$

with the convention that $e_{r}(x \mid a)=0$ if $r<0$ or $r>n$.
(a) Let $t$ be another indeterminate and let

$$
f(t)=\prod_{i=1}^{n}\left(t-x_{i}\right)
$$

Show that

$$
\begin{equation*}
f(t)=\sum_{r=0}^{n}(-1)^{r} e_{r}(x \mid a)(t \mid a)^{n-r} \tag{4}
\end{equation*}
$$

(From (2) above it follows that

$$
f(t)=A_{\delta_{n+1}}\left(t, x_{1}, \ldots, x_{n} \mid a\right) / A_{\delta_{n}}\left(x_{1}, \ldots, x_{n} \mid a\right)
$$

now expand the determinant $A_{\delta_{n+1}}$ along the top row.)
(b) Let $E(x \mid a), H(x \mid a)$ be the (infinite) matrices

$$
\begin{aligned}
& H(x \mid a)=\left(h_{j-i}\left(x \mid \tau^{i+1} a\right)\right)_{i, j \in \mathbf{Z}} \\
& E(x \mid a)=\left((-1)^{j-i} e_{j-i}\left(x \mid \tau^{j} a\right)\right)_{i, j \in Z}
\end{aligned}
$$

Both are upper triangular, with 1's on the diagonal. Show that

$$
E(x \mid a)=H(x \mid a)^{-1}
$$

(We have to show that

$$
\sum_{j}(-1)^{k-j} e_{k-j}\left(x \mid \tau^{k} a\right) h_{j-i}\left(x \mid \tau^{i+1} a\right)=\delta_{i k}
$$

for all $i, k$. This is clear if $i \geqslant k$, so we may assume $i<k$. Since $f\left(x_{i}\right)=0$ it follows from (4) above that

$$
\sum_{r=0}^{n}(-1)^{r} e_{r}(x \mid a)\left(x_{i} \mid a\right)^{n-r}=0
$$

and hence, replacing $a$ by $\tau^{s-1} a$ and multiplying by $\left(x_{i} \mid a\right)^{s-1}$, that

$$
\begin{equation*}
\sum_{r=0}^{n}(-1)^{r} e_{r}\left(x \mid \tau^{s-1} a\right)\left(x_{i} \mid a\right)^{n-r+s-1}=0 \tag{5}
\end{equation*}
$$

for all $s>0$ and $1 \leqslant i \leqslant n$. Now it is clear, by expanding the determinant $A_{(m)+\delta}(x \mid a)$ down the first column, that $h_{m}(x \mid a)$ is of the form

$$
\begin{equation*}
h_{m}(x \mid a)=\sum_{i=1}^{n}\left(x_{i} \mid a\right)^{m+n-1} u_{i}(x) \tag{6}
\end{equation*}
$$

with coefficients $u_{i}(x)$ rational functions of $x_{1}, \ldots, x_{n}$ independent of $m$. (In fact, $\left.u_{i}(x)=1 / f^{\prime}\left(x_{i}\right).\right)$
From (5) and (6) it follows that

$$
\sum_{r=0}^{n}(-1)^{r} e_{r}\left(x \mid \tau^{s-1} a\right) h_{s-r}(x \mid a)=0
$$

for each $s>0$. Putting $s=k-i$ and replacing $a$ by $\tau^{i+1} a$, we obtain the desired relation.)
(c) Let $\lambda$ be a partition of length $\leqslant n$. Then

$$
\begin{aligned}
s_{\lambda}(x \mid a) & =\operatorname{det}\left(h_{\lambda_{i}-i+j}\left(x \mid \tau^{1-j} a\right)\right), \\
& =\operatorname{det}\left(e_{\lambda_{i}-i+j}\left(x \mid \tau^{j-1} a\right)\right),
\end{aligned}
$$

again in strict analogy with (3.4) and (3.5). (Let $\alpha=\left(\alpha_{1}, \ldots, \alpha_{n}\right) \in \mathbf{N}^{n}$. From (6) above we have

$$
\begin{aligned}
h_{\alpha_{l}-n+j}\left(x \mid \tau^{1-j} a\right) & =\sum_{k=1}^{n}\left(x_{k} \mid \tau^{1-j} a\right)^{\alpha_{i}+j-1} u_{k}(x) \\
& =\sum_{k=1}^{n}\left(x_{k} \mid a\right)^{\alpha_{i}}\left(x_{k} \mid \tau^{1-j} a\right)^{j-1} u_{k}(x)
\end{aligned}
$$

which shows that the matrix $H_{\alpha}=\left(h_{\alpha_{i}-n+j}\left(x \mid \tau^{1-j} a\right)\right)_{i, j}$ is the product of the matrices $\left(\left(x_{k} \mid a\right)^{\alpha_{1}}\right)_{i, k}$ and $B=\left(\left(x_{k} \mid \tau^{1-j} a\right)^{j-1} u_{k}(x)\right)_{k, j}$. On taking determinants it follows that

$$
\operatorname{det}\left(H_{\alpha}\right)=A_{\alpha} \operatorname{det}(B)
$$

In particular, when $\alpha=\delta$ the matrix $H_{\delta}$ is unitriangular and hence has determinant equal to 1 . It follows that $A_{\delta} \operatorname{det}(B)=1$ and hence that $\operatorname{det}\left(H_{\alpha}\right)=A_{\alpha} / A_{\delta}$ for
all $\alpha \in \mathbf{N}^{n}$. Taking $\alpha=\lambda+\delta$, we obtain the first formula. The second formula, involving the $e$ 's, is then deduced from it and the result of (b) above, exactly as in the text.)
The results of this Example, and their proofs, should be compared with those of Example 19. It should also be remarked that when $a$ is the zero sequence ( $a_{n}=0$ for all $n$ ) then $s_{\lambda}(x \mid a)$ is the Schur function $s_{\lambda}(x)$.
21. Let $R$ be a commutative ring and let $S=R\left[h_{r s}: r \geqslant 1, s \in \mathbf{Z}\right]$, where the $h_{r s}$ are independent indeterminates over $R$. Also, for convenience, define $h_{0 s}=1$ and $h_{r s}=0$ for $r<0$ and all $s \in \mathbf{Z}$. Let $\varphi: S \rightarrow S$ be the automorphism defined by $\varphi\left(h_{r s}\right)=h_{r, s+1}$. Thus $h_{r s}=\varphi^{s}\left(h_{r}\right)$, where $h_{r}=h_{r 0}$, and we shall use this notation henceforth.

For any partition $\lambda$ we define

$$
\begin{equation*}
\tilde{s}_{\lambda}=\operatorname{det}\left(\varphi^{-j+1} h_{\lambda_{i}-i+j}\right)_{1<i, j<n} \tag{1}
\end{equation*}
$$

where $n \geqslant l(\lambda)$. These 'Schur functions' include as special cases the symmetric functions of the last two Examples: in Example 19 we take $R=k$ and specialize $h_{r s}$ to $\varphi^{s} H_{r}(V)$, and in Example 20 we specialize $h_{r s}$ to $h_{r}\left(x \mid \tau^{s} a\right)$.

From (1) it follows that $h_{r}=\tilde{s}_{(r)}$. We define

$$
e_{r}=\tilde{s}_{\left(1^{\prime}\right)}
$$

for all $r \geqslant 0$, and set $e_{r}=0$ for $r<0$.
(a) Let $E, H$ be the (infinite) matrices

$$
\begin{aligned}
& H=\left(\varphi^{i+1} h_{j-i}\right)_{i, j \in \mathbf{Z}} \\
& E=\left((-1)^{j-i} \varphi^{j} e_{j-i}\right)_{i, j \in \mathbf{Z}}
\end{aligned}
$$

Both are upper triangular with 1's on the diagonal. Show that

$$
E=H^{-1}
$$

(We have to show that

$$
\begin{equation*}
\sum_{j}(-1)^{j-i} \varphi^{j}\left(e_{j-i}\right) \varphi^{j+1}\left(h_{k-j}\right)=\delta_{i k} \tag{2}
\end{equation*}
$$

for all $i, k$. This is obvious if $i \geqslant k$, so assume $i<k$ and let $r=k-i$. Then (2) is equivalent to

$$
\sum_{s=0}^{r}(-1)^{s} \varphi^{-s}\left(e_{r-s}\right) \varphi^{-s+1}\left(h_{s}\right)=0
$$

which follows from $e_{r}=\operatorname{det}\left(\varphi^{1-j} h_{1-i+j}\right)_{1<i, j<r}$ by expanding the determinant along the top row.)
(b) Deduce from (a) that

$$
\tilde{s}_{\lambda}=\operatorname{det}\left(\varphi^{j-1} e_{\lambda_{i}^{\prime}-i+j}\right)
$$

(c) Let $\omega: S \rightarrow S$ be the $R$-algebra homomorphism that maps $\varphi^{s} h_{r}$ to $\varphi^{-s} e_{r}$ for all $r, s$. Then $\omega$ is an involution and $\omega \tilde{S}_{\lambda}=\tilde{s}_{\lambda^{\prime}}$ for all partitions $\lambda$.
(d) Let $\lambda=\left(\alpha_{1}, \ldots, \alpha_{r} \mid \beta_{1}, \ldots, \beta_{r}\right)$ in Frobenius notation (81). Show that with $\tilde{s}_{\lambda}$ as defined in (1) we have

$$
\tilde{s}_{\lambda}=\operatorname{det}\left(\tilde{s}_{\left(\alpha_{i} \mid \beta_{j}\right)}\right)_{1<i, j<r} .
$$

(Copy the proof in Example 9 above.)
22. Let $x_{1}, \ldots, x_{n}, u_{1}, \ldots, u_{n}$ be independent indeterminates over $\mathbf{Z}$, and let $f(t)=$ $\left(t-x_{1}\right) \ldots\left(t-x_{n}\right)$. For each $r \in \mathbf{Z}$ let

$$
H_{r}=\sum_{i=1}^{n} u_{i} x_{i}^{n+r-1} / f^{\prime}\left(x_{i}\right)
$$

and for each sequence $\alpha=\left(\alpha_{1}, \ldots, \alpha_{r}\right) \in \mathbf{Z}^{r}$, where $r \leqslant n$, let $M_{\alpha}$ denote the $n \times n$ matrix

$$
M_{\alpha}=\left(u_{i j} x_{i}^{\alpha_{j}+n-j}\right)
$$

where $u_{i j}=u_{i}$ if $1 \leqslant j \leqslant r, u_{i j}=1$ if $j>r$, and $\alpha_{j}=0$ if $j>r$. Then let

$$
S_{\alpha}=a_{\delta}(x)^{-1} \operatorname{det}\left(M_{\alpha}\right) .
$$

Show that

$$
S_{\alpha}=\operatorname{det}\left(H_{\alpha_{i}-i+j}\right)_{1<i, j<r} .
$$

(Multiply the matrix $M_{\alpha}$ on the left by the matrix whose ( $i, j$ ) element is $x_{j}^{i-1} / f^{\prime}\left(x_{j}\right)$ if $i \leqslant r$, and is $\delta_{i j}$ if $i>r$.)
23. The ring $\Lambda_{n}$ of symmetric polynomials in $n$ variables $x_{1}, \ldots, x_{n}$ is the image of $\Lambda$ under the homomorphism $\rho_{n}$ of $\S 2$, which maps the formal power series $E(t)=\sum_{r>0} e_{r} t^{r}$ to the polynomial $\prod_{i-1}^{n}\left(1+x_{i} t\right)$ of degree $n$. More generally, we may specialize $E(t)$ to a rational function of $t$, say
(*)

$$
E_{x / y}(t)=\prod_{i=1}^{m}\left(1+x_{i} t\right) / \prod_{j=1}^{n}\left(1+y_{j} t\right)
$$

(In the language of $\lambda$-rings, this amounts to considering the difference $x-y$, where $x$ has rank $m$ and $y$ has rank $n$.)

Let $x^{(m)}=\left(x_{1}, \ldots, x_{m}\right), y^{(n)}=\left(y_{1}, \ldots, y_{n}\right)$ and let $s_{\lambda}\left(x^{(m)} / y^{(n)}\right)$ (or just $s_{\lambda}(x / y)$ ) denote the image of the Schur function $s_{\lambda}$ under this specialization. From (*) we have

$$
e_{r}\left(x^{(m)} / y^{(n)}\right)=\sum_{i+j-r}(-1)^{j} e_{i}(x) h_{j}(y)
$$

and the formula (3.5) shows that $s_{\lambda}\left(x^{(m)} / y^{(n)}\right)$ is a polynomial in the $x$ 's and the $y$ 's, symmetric in each set of variables separately.

These polynomials have the following properties:
(1) (homogeneity) $s_{\lambda}\left(x^{(m)} / y^{(n)}\right)$ is homogeneous of degree $|\lambda|$.
(2) (restriction) The result of setting $x_{m}=0$ (resp. $y_{n}=0$ ) in $s_{\lambda}\left(x^{(m)} / y^{(n)}\right.$ ) is $s_{\lambda}\left(x^{(m-1)} / y^{(n)}\right)\left(\right.$ resp. $s_{\lambda}\left(x^{(m)} / y^{(n-1)}\right)$.
(3) (cancellation) The result of setting $x_{m}=y_{n}$ in $s_{\lambda}\left(x^{(m)} / y^{(n)}\right)$ is $s_{\lambda}\left(x^{(m-1)} / y^{(n-1)}\right)$ (if $m, n \geqslant 1$ ).
(4) (factorization) If the partition $\lambda$ satisfies $\lambda_{m} \geqslant n \geqslant \lambda_{m+1}$, so that $\lambda$ can be written in the form $\lambda=\left(\left(n^{m}\right)+\alpha\right) \cup \beta^{\prime}$, where $\alpha$ (resp. $\beta$ ) is a partition of length $\leqslant m$ (resp. $\leqslant n$ ), then

$$
s_{\lambda}\left(x^{(m)} / y^{(n)}\right)=(-1)^{|\beta|} R\left(x^{(m)}, y^{(n)}\right) s_{\alpha}\left(x^{(m)}\right) s_{\beta}\left(y^{(n)}\right)
$$

where $R\left(x^{(m)}, y^{(n)}\right)$ is the product of the $m n$ factors $x_{i}-y_{j}(1 \leqslant i \leqslant m, 1 \leqslant j \leqslant n)$.
It is clear from the definition that the $s_{\lambda}$ satisfy (1), (2), and (3), and it may be shown directly that they satisfy (4) (see the notes and references at the end of this section). We shall not stop to give a direct proof here, because this property (4) will be a consequence of the results of this Example and the next.

Moreover, these four properties characterize the $s_{\lambda}(x / y)$. More precisely, let $\Lambda_{m, n}\left(\cong \Lambda_{m} \otimes \Lambda_{n}\right.$ ) denote the ring $\mathrm{Z}\left[x_{1}, \ldots, x_{m}, y_{1}, \ldots, y_{n}\right]_{m} \times S_{n}$ of polynomials in the $x$ 's and $y$ 's that are symmetric in each set of variables separately, and suppose that we are given polynomials $s_{\lambda}^{*}\left(x^{(m)} / y^{(n)}\right) \in \Lambda_{m, n}$ for each partition $\lambda$ and each pair of non-negative integers $m, n$, satisfying the conditions ( $\left.1^{*}\right)-\left(4^{*}\right)$ obtained from (1)-(4) by replacing $s_{\lambda}$ by $s_{\lambda}^{*}$ throughout. Then $s_{\lambda}^{*}\left(x^{(m)} / y^{(n)}\right)=s_{\lambda}\left(x^{(m)} / y^{(n)}\right)$ for all $\lambda, m, n$.
(a) First of all, when $n=0$ it follows from (4*) that

$$
\begin{equation*}
s_{\lambda}^{*}\left(x^{(m)} / \varnothing\right)=s_{\lambda}\left(x^{(m)}\right) \tag{5}
\end{equation*}
$$

for partitions $\lambda$ of length $\leqslant m$, and likewise when $n=0$ that

$$
s_{\lambda^{\prime}}^{*}\left(\varnothing / y^{(n)}\right)=(-1)^{|\lambda|} s_{\lambda}\left(y^{(n)}\right)
$$

for partitions $\lambda$ of length $\leqslant n$.
(b) Next, let $\Lambda_{m / n}$ denote the subring of $\Lambda_{m, n}$ consisting of the polynomials $f$ in which the result of setting $x_{m}=y_{n}=t$ is independent of $t$. It follows from (3*) that $s_{\lambda}^{*}\left(x^{(m)} / y^{(n)}\right) \in \Lambda_{m / n}$.

Let $\Gamma_{m, n}$ be the set of lattice points $(i, j) \in \mathbf{Z}^{2}$ such that $i \geqslant 1, j \geqslant 1$ and either $i \leqslant m$ or $j \leqslant n$. We shall show that

$$
\begin{equation*}
\text { the } s_{\lambda}^{*}\left(x^{(m)} / y^{(n)}\right) \text { such that } \lambda \subset \Gamma_{m, n} \text { span } \Lambda_{m / n} \tag{6}
\end{equation*}
$$

This is true when $m=0$ or $n=0$, by (5) and ( 5 ') above. Assume then that $m, n \geqslant 1$ and that (6) is true for $m-1, n-1$. Let $f \in \Lambda_{m / n}$ and let $f_{0}=\left.f\right|_{x_{m}=y_{n}=0}$, so that $f_{0} \in \Lambda_{m-1 / n-1}$ and therefore is of the form

$$
f_{0}=\sum_{\lambda} a_{\lambda} s_{\lambda}^{*}\left(x^{(m-1)} / y^{(m-1)}\right)
$$

summed over partitions $\lambda \subset \Gamma_{m-1, n-1}$, with coefficients $a_{\lambda} \in \mathbf{Z}$. Let

$$
\begin{equation*}
g=f-\sum_{\lambda} a_{\lambda} s_{\lambda}^{*}\left(x^{(m)} / y^{(n)}\right) \tag{7}
\end{equation*}
$$

Then $g \in \Lambda_{m / n}$, so that $\left.g\right|_{x_{m}-y_{n}}=\left.g\right|_{x_{m}-y_{n}=0}=0$. Consequently $g$ is divisible in $\Lambda_{m, n}$ by $x_{m}-y_{n}$ and hence (by symmetry) by $R\left(x^{(m)}, y^{(n)}\right.$ ): say $g=R h$ where $h \in \Lambda_{m, n}$. By writing $h$ in the form

$$
h=\sum_{\alpha, \beta} b_{\alpha, \beta} s_{\alpha}\left(x^{(m)}\right) s_{\beta}\left(y^{(n)}\right)
$$

summed over partitions $\alpha, \beta$ such that $l(\alpha) \leqslant m$ and $l(\beta) \leqslant n$, it follows from (4*) that $g=R h$ is a linear combination of the $s_{\mu}^{*}\left(x^{(m)}, y^{(n)}\right)$ such that $\left(n^{m}\right) \subset \mu \subset \Gamma_{m, n}$. In view of (7) above, this establishes (6).
(c) Now let $\lambda$ be any partition. In order to show that $s_{\lambda}^{*}\left(x^{(m)} / y^{(n)}\right)=s_{\lambda}\left(x^{(m)} / y^{(n)}\right)$ we may, by virtue of (2) and (2*), assume that $m$ and $n$ are large, and in particular that $m \geqslant|\lambda|$. Since $s_{\lambda}\left(x^{(m)} / y^{(n)}\right) \in \Lambda_{m / n}$ by (3), it follows from (6) above that we may write

$$
\begin{equation*}
s_{\lambda}\left(x^{(m)} / y^{(n)}\right)=\sum_{\mu} c_{\mu} s_{\mu}^{*}\left(x^{(m)} / y^{(n)}\right) \tag{8}
\end{equation*}
$$

where (by (1) and ( $\left.1^{*}\right)$ ) the sum is over partitions $\mu$ such that $|\mu|=|\lambda|$ and hence $l(\mu) \leqslant m$ (since $|\lambda| \leqslant m)$. If we now set $y_{1}=\ldots=y_{n}=0$ in (8), we obtain

$$
s_{\lambda}\left(x^{(m)}\right)=\sum_{\mu} c_{\mu} s_{\mu}\left(x^{(m)}\right)
$$

by virtue of (2), (2*), and (5). Hence $c_{\mu}=\delta_{\lambda \mu}$ and finally $s_{\lambda}=s_{\lambda}^{*}$.
24. (a) Let $x=\left(x_{1}, \ldots, x_{m}\right), y=\left(y_{1}, \ldots, y_{n}\right)$. If $\lambda$ is any partition let

$$
f_{\lambda}(x, y)=\prod_{(i, j) \in \lambda}\left(x_{i}-y_{j}\right)
$$

with the understanding that $x_{i}=0$ if $i>m$, and $y_{j}=0$ if $j>n$. Also let

$$
\Delta(x)=\prod_{1<i<j<m}\left(1-x_{i}^{-1} x_{j}\right), \quad \Delta(y)=\prod_{1<i<j \leqslant n}\left(1-y_{i}^{-1} y_{j}\right) .
$$

Then we have

$$
\begin{equation*}
s_{\lambda}(x / y)=\sum_{w \in S_{m} \times S_{n}} w\left(f_{\lambda}(x, y) / \Delta(x) \Delta(y)\right) . \tag{1}
\end{equation*}
$$

In this formula, $S_{m}$ permutes the $x$ 's and $S_{n}$ permutes the $y$ 's.
(Let $s_{\lambda}^{*}(x / y)$ denote the right-hand side of (1). We have

$$
\begin{equation*}
s_{\lambda}^{*}(x / y)=a_{\delta_{m}}(x)^{-1} a_{\delta_{n}}(y)^{-1} \sum_{w \in S_{m} \times S_{n}} \varepsilon(w) \cdot w\left(x^{\delta_{m}} y^{\delta_{n}} f_{\lambda}(x, y)\right) \tag{2}
\end{equation*}
$$

from which it is clear that $s_{\lambda}^{*} \in \Lambda_{m, n}$, in the notation of Example 23, and it is enough to verify that $s_{\lambda}^{*}$ has the properties $\left(1^{*}\right)-\left(4^{*}\right)$, loc. cit. Of these, all but the
cancellation property (3*) are obviously satisfied. As to (3*), let $\varphi(u)=$ $\left.s_{\lambda}^{*}(x / y)\right|_{x_{m}-y_{n}-u}$, which is a polynomial in $u$ of degree say $d$. It will be enough to show that $\varphi(u)=\varphi(0)$, i.e. that $d=0$. If $w \in S_{m} \times S_{n}$, let $w^{-1}\left(x_{m}\right)=x_{i}$ and $w^{-1}\left(y_{n}\right)=y_{j}$. If $(i, j) \in \lambda$, then $x_{m}-y_{n}=w\left(x_{i}-y_{j}\right)$ is a factor of $w f_{\lambda}(x, y)$, which therefore vanishes when $x_{m}=y_{n}=u$. Hence $\varphi(u)$ is a sum over those $w \in S_{m} \times S_{n}$ such that $(i, j) \notin \lambda$, that is to say $i>\lambda_{j}^{\prime}$ and $j>\lambda_{i}$. For such a permutation $w$, the degree in $u$ of $\left.w\left(x^{\delta_{m}} y^{\delta_{n}} f_{\lambda}(x, y)\right)\right|_{x_{m}-y_{n}-u}$ is

$$
m-i+n-j+\lambda_{i}+\lambda_{j}^{\prime} \leqslant m+n-2
$$

on the other hand, the degree in $u$ of $\left.a_{\delta_{m}}(x) a_{\delta_{n}}(y)\right|_{x_{m}-y_{n}-u}$ is $(m-1)+(n-1)=$ $m+n-2$. It now follows from (2) that $d=0$, as required.)
(b) When $n=0$, we have $f_{\lambda}(x, y)=x^{\lambda}$, and the formula (1) reduces to the definition (3.1) of $s_{\lambda}(x)$. Next, when $m=0$, it follows from the definition (Example 23) that $s_{\lambda}(x / y)$ becomes $(-1)^{|\lambda|} \omega s_{\lambda}(y)$. On the other hand, $f_{\lambda}(x, y)$ becomes $(-1)^{|\lambda|} y^{\lambda^{\prime}}$, so that the formula (1) in the case $m=0$ reduces to (3.8). Finally, as we have already remarked, the factorization property (4) of Example 23 is an immediate consequence of (1), and so is the fact that $s_{\lambda}(x / y)=0$ unless $\lambda \subset \Gamma_{m, n}$.
(c) The $s_{\lambda}(x / y)$ such that $\lambda \subset \Gamma_{m, n}$ form a $\mathbf{Z}$-basis of the ring $\Lambda_{m / n}$ defined in Example 23(b). (It follows from Example 23 that the $s_{\lambda}(x / y)$ such that $\lambda \subset \Gamma_{m, n}$ span $\Lambda_{m / n}$, and it remains to be shown that they are linearly independent. This is clearly true if $m=0$ or $n=0$, by (3.2) and (3.8). Hence we may assume $m \geqslant 1$ and $n \geqslant 1$ and the result true when either $m$ is replaced by $m-1$, or $n$ by $n-1$. Suppose then that

$$
\sum_{\lambda} a_{\lambda} s_{\lambda}(x / y)=0
$$

where the sum is over partitions $\lambda \subset \Gamma_{m, n}$. By setting $x_{m}=0$ (resp. $y_{n}=0$ ) we see that $a_{\lambda}=0$ for $\lambda \subset \Gamma_{m-1, n}$ (resp. $\lambda \subset \Gamma_{m, n-1}$ ). Since $\Gamma_{m, n}$ is the union of $\Gamma_{m-1, n}$ and $\Gamma_{m, n-1}$, it follows that $a_{\lambda}=0$ for all $\lambda \in \Gamma_{m, n}$, as required.)

## Notes and references

Schur functions, despite their name, were first considered by Jacobi [J3], as quotients of skew-symmetric polynomials by the polynomial $a_{\delta}$, just as we have introduced them. Their relevance to the representation theory of the symmetric groups and the general linear groups, which we shall describe later, was discovered by Schur [S4] much later. The identity (3.4) which expresses $s_{\lambda}$ in terms of the $h$ 's is due originally to Jacobi (loc. cit.), and is often called the Jacobi-Trudi identity.

The results of Examples 1-4 may be found in Littlewood [L9], Chapter VII, which gives other results of the same sort. The formula in Example 8 for the product of two Schur functions as a determinant in the $h$ 's is essentially due to Jacobi (loc. cit.), though rediscovered since. The result of Example 9 is due to Giambelli [G8]. Example 10 is due to A. Lascoux [L1]. The proof of the law of quadratic reciprocity sketched in Example 17 is
essentially Eisenstein's proof (see Serre [S13], Chapter I). The presentation here is due to V. G. Kac [K1].

For Examples 18-21 see [M8]. For Examples 23 and 24, and the history of the Sergeev-Pragacz formula (i.e., formula (1) of Example 24), see [P3], also [P2] and [S27]. Other proofs of this formula, in the context of Schubert polynomials, are due to A. Lascoux (see for example [M7]). The factorization property (4) in Example 23 (which is a special case of the Sergeev-Pragacz formula) is due to Berele and Regev [B2].

## 4. Orthogonality

Let $x=\left(x_{1}, x_{2}, \ldots\right)$ and $y=\left(y_{1}, y_{2}, \ldots\right)$ be two finite or infinite sequences of independent variables. We shall denote the symmetric functions of the $x$ 's by $s_{\lambda}(x), p_{\lambda}(x)$, etc., and the symmetric functions of the $y$ 's by $s_{\lambda}(y), p_{\lambda}(y)$, etc.

We shall give three series expansions for the product

$$
\prod_{i, j}\left(1-x_{i} y_{i}\right)^{-1}
$$

The first of these is

$$
\begin{equation*}
\prod_{i, j}\left(1-x_{i} y_{j}\right)^{-1}=\sum_{\lambda} z_{\lambda}^{-1} p_{\lambda}(x) p_{\lambda}(y) \tag{4.1}
\end{equation*}
$$

summed over all partitions $\lambda$.
This follows from (2.14), applied to the set of variables $x_{i} y_{j}$.
Next we have

$$
\begin{equation*}
\prod_{i, j}\left(1-x_{i} y_{j}\right)^{-1}=\sum_{\lambda} h_{\lambda}(x) m_{\lambda}(y)=\sum_{\lambda} m_{\lambda}(x) h_{\lambda}(y) \tag{4.2}
\end{equation*}
$$

summed over all partitions $\lambda$.
Proof. We have $\prod_{i, j}\left(1-x_{i} y_{j}\right)^{-1}=\prod_{j} H\left(y_{j}\right)$

$$
\begin{aligned}
& =\prod_{j} \sum_{r=0}^{\infty} h_{r}(x) y_{j}^{r} \\
& =\sum_{\alpha} h_{\alpha}(x) y^{\alpha} \\
& =\sum_{\lambda} h_{\lambda}(x) m_{\lambda}(y)
\end{aligned}
$$

where $\alpha$ runs through all sequences ( $\alpha_{1}, \alpha_{2}, \ldots$ ) of non-negative integers such that $\sum \alpha_{i}<\infty$, and $\lambda$ runs through all partitions.

The third identity is

$$
\begin{equation*}
\prod_{i, j}\left(1-x_{i} y_{j}\right)^{-1}=\sum_{\lambda} s_{\lambda}(x) s_{\lambda}(y) \tag{4.3}
\end{equation*}
$$

summed over all partitions $\lambda$.
Proof. This is a consequence of (4.2) and (3.7'). Let $x=\left(x_{1}, \ldots, x_{n}\right)$, $y=\left(y_{1}, \ldots, y_{n}\right)$ be two finite sets of variables, and as usual let $\delta=(n-1$, $n-2, \ldots, 0$ ). Then from (4.2) we have

$$
\begin{equation*}
a_{\delta}(x) a_{\delta}(y) \prod_{i, j=1}^{n}\left(1-x_{i} y_{j}\right)^{-1}=a_{\delta}(x) \sum_{\alpha, w} h_{\alpha}(x) \varepsilon(w) y^{\alpha+w \delta} \tag{4.4}
\end{equation*}
$$

summed over $\alpha \in \mathbf{N}^{n}$ and $w \in S_{n}$,

$$
\begin{aligned}
& =a_{\delta}(x) \sum_{\beta, w} \varepsilon(w) h_{\beta-w \delta}(x) y^{\beta} \\
& =\sum_{\beta} a_{\beta}(x) y^{\beta}
\end{aligned}
$$

by (3.7'). Since $a_{w \beta}=\varepsilon(w) a_{\beta}$, it follows that this last sum is equal to $\sum a_{\gamma}(x) a_{\gamma}(y)$ summed over $\gamma_{1}>\gamma_{2}>\ldots>\gamma_{n} \geqslant 0$, i.e. to

$$
\sum_{\lambda} a_{\lambda+\delta}(x) a_{\lambda+\delta}(y)
$$

summed over partitions $\lambda$ of length $\leqslant n$. This proves (4.3) in the case of $n$ variables $x_{i}$ and $n$ variables $y_{i}$; now let $n \rightarrow \infty$ as usual.

We now define a scalar product on $\Lambda$, i.e. a $\mathbf{Z}$-valued bilinear form $\langle u, v\rangle$, by requiring that the bases $\left(h_{\lambda}\right)$ and $\left(m_{\lambda}\right)$ should be dual to each other:

$$
\begin{equation*}
\left\langle h_{\lambda}, m_{\mu}\right\rangle=\delta_{\lambda \mu} \tag{4.5}
\end{equation*}
$$

for all partitions $\lambda, \mu$, where $\delta_{\lambda \mu}$ is the Kronecker delta.
(4.6) For each $n \geqslant 0$, let $\left(u_{\lambda}\right),\left(v_{\lambda}\right)$ be Q -bases of $\Lambda_{\mathrm{Q}}^{n}$, indexed by the partitions of $n$. Then the following conditions are equivalent:
(a) $\left\langle u_{\lambda}, v_{\mu}\right\rangle=\delta_{\lambda \mu}$ for all $\lambda, \mu$;
(b) $\sum_{\lambda} u_{\lambda}(x) v_{\lambda}(y)=\Pi_{i, j}\left(1-x_{i} y_{j}\right)^{-1}$.

Proof. Let

$$
u_{\lambda}=\sum_{\rho} a_{\lambda \rho} h_{\rho}, \quad v_{\mu}=\sum_{\sigma} b_{\mu \sigma} m_{\sigma}
$$

Then

$$
\left\langle u_{\lambda}, v_{\mu}\right\rangle=\sum_{\rho} a_{\lambda \rho} b_{\mu \rho}
$$

so that (a) is equivalent to
( $\mathrm{a}^{\prime}$ )

$$
\sum_{\rho} a_{\lambda \rho} b_{\mu \rho}=\delta_{\lambda \mu}
$$

Also (b) is equivalent to the identity

$$
\sum_{\lambda} u_{\lambda}(x) v_{\lambda}(y)=\sum_{\rho} h_{\rho}(x) m_{\rho}(y)
$$

by (4.2), hence is equivalent to

$$
\sum_{\lambda} a_{\lambda \rho} b_{\lambda \sigma}=\delta_{\rho \sigma} .
$$

Since ( $a^{\prime}$ ) and ( $b^{\prime}$ ) are equivalent, so are (a) and (b). |
From (4.6) and (4.1) it follows that

$$
\begin{equation*}
\left\langle p_{\lambda}, p_{\mu}\right\rangle=\delta_{\lambda \mu} z_{\lambda} \tag{4.7}
\end{equation*}
$$

so that the $p_{\lambda}$ form an orthogonal basis of $\Lambda_{\mathbf{Q}}$. Likewise from (4.6) and (4.3) we have

$$
\begin{equation*}
\left\langle s_{\lambda}, s_{\mu}\right\rangle=\delta_{\lambda \mu} \tag{4.8}
\end{equation*}
$$

so that the $s_{\lambda}$ form an orthonormal basis of $\Lambda$, and the $s_{\lambda}$ such that $|\lambda|=n$ form an orthonormal basis of $\Lambda^{n}$. Any other orthonormal basis of $\Lambda^{n}$ must therefore be obtained from the basis ( $s_{\lambda}$ ) by transformation by an orthogonal integer matrix. The only such matrices are signed permutation matrices, and therefore (4.8) characterizes the $s_{\lambda}$, up to order and sign.

Also from (4.7) or (4.8) we see that
(4.9) The bilinear form $\langle u, v\rangle$ is symmetric and positive definite.
(4.10) The involution $\omega$ is an isometry, i.e. $\langle\omega u, \omega v\rangle=\langle u, v\rangle$.

Proof. From (2.13) we have $\omega\left(p_{\lambda}\right)= \pm p_{\lambda}$, hence by (4.7)

$$
\left\langle\omega\left(p_{\lambda}\right), \omega\left(p_{\mu}\right)\right\rangle=\left\langle p_{\lambda}, p_{\mu}\right\rangle
$$

which proves (4.10), since the $p_{\lambda}$ form a $\mathbf{Q}$-basis of $\Lambda_{\mathbf{Q}}$ (2.12). |

Finally, from (4.10) and (4.5) we have

$$
\left\langle e_{\lambda}, f_{\mu}\right\rangle=\delta_{\lambda \mu}
$$

where $f_{\mu}=\omega\left(m_{\mu}\right)$, i.e. $\left(e_{\lambda}\right)$ and $\left(f_{\lambda}\right)$ are dual bases of $\Lambda$.
Remarks. 1. By applying the involution $\omega$ to the symmetric functions of the $x$ variables we obtain from (4.1), (4.2), and (4.3) three series expansions for the product $\Pi_{i, j}\left(1+x_{i} y_{i}\right)$, namely

$$
\prod_{i, j}\left(1+x_{i} y_{j}\right)=\sum_{\lambda} \varepsilon_{\lambda} z_{\lambda}^{-1} p_{\lambda}(x) p_{\lambda}(y)
$$

$$
\begin{align*}
& \prod_{i, j}\left(1+x_{i} y_{j}\right)=\sum_{\lambda} m_{\lambda}(x) e_{\lambda}(y)=\sum_{\lambda} e_{\lambda}(x) m_{\lambda}(y), \\
& \prod_{i, j}\left(1+x_{i} y_{i}\right)=\sum_{\lambda} s_{\lambda}(x) s_{\lambda^{\prime}}(y),
\end{align*}
$$

the last by virtue of (3.8).
2. If $x, y$ are elements of a $\lambda$-ring $R$, we have

$$
\begin{aligned}
\sigma_{t}(x y) & =\sum_{\lambda} z_{\lambda}^{-1} \psi^{\lambda}(x) \psi^{\lambda}(y) t^{|\lambda|} \\
& =\sum_{\lambda} S^{\lambda}(x) S^{\lambda}(y) t^{\lambda \mid}
\end{aligned}
$$

from (4.1) and (4.3), and

$$
\begin{aligned}
\lambda_{t}(x y) & =\sum_{\lambda} \varepsilon_{\lambda} z_{\lambda}^{-1} \psi^{\lambda}(x) \psi^{\lambda}(y) t^{|\lambda|} \\
& =\sum_{\lambda} S^{\lambda}(x) S^{\lambda^{\prime}}(y) t^{|\lambda|}
\end{aligned}
$$

from (4.1') and (4.3').

## Examples

1. If we take $y_{1}=\ldots=y_{n}=t, y_{n+1}=y_{n+2}=\ldots=0$ in (4.3'), we obtain

$$
\begin{aligned}
E(t)^{n} & =\sum_{\lambda} s_{\lambda}(x) s_{\lambda^{\prime}}(y) \\
& =\sum_{\lambda}\binom{n}{\lambda} s_{\lambda}(x) t^{|\lambda|}
\end{aligned}
$$

in the notation of $\S 3$, Example 4.

The coefficients of the powers of $t$ on each side are polynomials in $n$ (with coefficients in $\Lambda$ ) which are equal for all positive integral values of $n$, and hence identically equal. Consequently we have

$$
E(t)^{X}=\sum_{\lambda}\binom{X}{\lambda} s_{\lambda} t^{|\lambda|}
$$

for all $X$. By replacing $X, t$ by $-X,-t$ we obtain

$$
H(t)^{X}=\sum_{\lambda}\binom{X}{\lambda^{\prime}} s_{\lambda} t^{[\lambda \mid}
$$

These identities generalize the binomial theorem.
2. Let $y_{i}=q^{i-1}$ for $1 \leqslant i \leqslant n$, and $y_{i}=0$ for $i>n$. From (4.3) we obtain

$$
\prod_{i=1}^{n} E\left(q^{i-1}\right)=\sum_{\lambda} q^{n\left(\lambda^{\prime}\right)}\left[\begin{array}{l}
n \\
\lambda
\end{array}\right] s_{\lambda}
$$

in the notation of §3, Example 1. Likewise, from (4.3),

$$
\prod_{i=1}^{n} H\left(q^{i-1}\right)=\sum_{\lambda} q^{n(\lambda)}\left[\begin{array}{c}
n \\
\lambda^{\prime}
\end{array}\right] s_{\lambda} .
$$

In these formulas we may let $n \rightarrow \infty$ and obtain

$$
\begin{gathered}
\prod_{i, j>1}\left(1+x_{j} q^{i-1}\right)=\sum_{\lambda} \frac{q^{n\left(\lambda^{\prime}\right)}}{H_{\lambda}(q)} s_{\lambda}(x), \\
\prod_{i, j>1}\left(1-x_{j} q^{i-1}\right)^{-1}=\sum_{\lambda} \frac{q^{n(\lambda)}}{H_{\lambda}(q)} s_{\lambda}(x),
\end{gathered}
$$

where $H_{\lambda}(q)=\Pi_{x \in \lambda}\left(1-q^{h(x)}\right)$ is the hook-length polynomial corresponding to the partition $\lambda$.
3. Let $y_{1}=\ldots=y_{n}=t / n, y_{n+1}=y_{n+2}=\ldots=0$, and then let $n \rightarrow \infty$. We have

$$
\prod_{i}\left(1+\frac{x_{i} t}{n}\right)^{n} \rightarrow \prod_{i} \exp \left(x_{i} t\right)=\exp \left(e_{1} t\right)
$$

and

$$
\frac{1}{n^{(\lambda)}}\binom{n}{\lambda} \rightarrow \prod_{x \in \lambda} h(x)^{-1}=h(\lambda)^{-1}
$$

where $h(\lambda)$ is the product of the hook-lengths of $\lambda$. Hence from (4.3') we obtain

$$
\exp \left(e_{1} t\right)=\sum_{\lambda} \frac{s_{\lambda}}{h(\lambda)} t^{|\lambda|}
$$

and therefore

$$
e_{1}^{n}=\sum_{|\lambda|=n} \frac{n!}{h(\lambda)} s_{\lambda}
$$

or equivalently

$$
\left\langle e_{1}^{n}, s_{\lambda}\right\rangle=n!/ h(\lambda) .
$$

4. From (2.14') and (4.7) we have

$$
\left\langle h_{n}, p_{\lambda}\right\rangle=1
$$

for all partitions $\lambda$ of $n$. Dually,
5.

$$
\begin{gathered}
\left\langle e_{n}, p_{\lambda}\right\rangle=\varepsilon_{\lambda} . \\
\prod_{i=1}^{m} \prod_{j=1}^{n}\left(x_{i}+y_{j}\right)=\sum_{\lambda} s_{\lambda}(x) s_{\lambda^{\prime}}(y)
\end{gathered}
$$

summed over all partitions $\lambda=\left(\lambda_{1}, \ldots, \lambda_{m}\right)$ such that $\lambda_{1} \leqslant n$ (i.e. $\lambda \subset\left(n^{m}\right)$ ), where $\tilde{\lambda}^{\prime}=\left(m-\lambda_{n}^{\prime}, \ldots, m-\lambda_{1}^{\prime}\right)$. (Replace $y_{i}$ by $y_{i}^{-1}$ in (4.3'), and clear of fractions.)
Hence from §3, Example 10 we have

$$
\prod_{i=1}^{m} \prod_{j=1}^{n}\left(1+x_{i}+y_{j}\right)=\sum_{\lambda, \mu} d_{\lambda \mu} s_{\mu}(x) s_{\lambda^{\prime}}(y)
$$

summed over pairs of partitions $\lambda, \mu$ such that $\mu \subset \lambda \subset\left(n^{m}\right)$. (This formula gives the Chern classes of a tensor product $E \otimes F$ of vector bundles, since if $c(E)=$ $\Pi\left(1+x_{i}\right)$ and $c(F)=\Pi\left(1+y_{j}\right)$ are the total Chern classes of $E$ and $F$, we have $\left.c(E \otimes F)=\Pi\left(1+x_{i}+y_{i}\right).\right)$
6. Let $\Delta=\operatorname{det}\left(\left(1-x_{i} y_{j}\right)^{-1}\right)_{1<i, j<n}$ (Cauchy's determinant). Then

$$
\Delta=a_{\delta}(x) a_{\delta}(y) \prod_{i, j=1}^{n}\left(1-x_{i} y_{j}\right)^{-1}
$$

For if we multiply each element of the $i$ th row of the matrix $\left(\left(1-x_{i} y_{j}\right)^{-1}\right)$ by $\Pi_{j-1}^{n}\left(1-x_{i} y_{j}\right)$, we shall obtain a matrix $D$ whose $(i, j)$ element is

$$
\prod_{r+j}\left(1-x_{i} y_{r}\right)=\sum_{k=1}^{n} x_{i}^{n-k} \cdot(-1)^{n-k} e_{n-k}^{(j)}(y)
$$

in the notation of (3.6). This shows that $D=A_{\delta}(x) M(y)$, so that $\operatorname{det}(D)=$ $a_{\delta}(x) a_{8}(y)$. On the other hand, it is clear from the definition of $D$ that $\operatorname{det}(D)=$ $\Delta . \Pi\left(1-x_{i} y_{j}\right)$.
Since also

$$
\begin{aligned}
\Delta & =\operatorname{det}\left(1+x_{i} y_{j}+x_{i}^{2} y_{j}^{2}+\ldots\right) \\
& =\sum_{\alpha} \operatorname{det}\left(x_{i}^{\alpha} y_{j}^{\alpha}\right) \\
& =\sum_{\alpha} a_{\alpha}(x) y^{\alpha}
\end{aligned}
$$

the summation being over all $\alpha=\left(\alpha_{1}, \ldots, \alpha_{n}\right) \in \mathbf{N}^{n}$, it follows that

$$
\Delta=\sum_{\lambda} a_{\lambda+\delta}(x) a_{\lambda+\delta}(y)
$$

summed over all partitions $\lambda$ of length $\leqslant n$. Hence we have another proof of (4.3).
7. Likewise the identity (4.3') can be proved directly, without recourse to duality. Consider the Vandermonde determinant $a_{\delta}(x, y)$ in $2 n$ variables $x_{1}, \ldots, x_{n}, y_{1}, \ldots, y_{n}$; on the one hand, this is equal to $a_{\delta}(x) a_{\delta}(y) \Pi\left(x_{i}-y_{j}\right)$; on the other hand, expanding the determinant by Laplace's rule, we see that it is equal to

$$
\begin{equation*}
\sum_{\mu}(-1)^{e(\mu)} a_{\mu}(x) a_{\bar{\mu}}(y), \tag{1}
\end{equation*}
$$

summed over $\mu \in \mathbf{N}^{n}$ such that $2 n-1 \geqslant \mu_{1}>\mu_{2}>\ldots>\mu_{n} \geqslant 0$, where $\bar{\mu}$ is the strictly decreasing sequence consisting of the integers in $[0,2 n-1]$ not equal to any of the $\mu_{i}$, and $e(\mu)=\sum\left(2 n-i-\mu_{i}\right)$. By writing $\mu=\lambda+\delta$ and using (1.7), we see that (1) is equal to

$$
(-1)^{n}\left(y_{1} \ldots y_{n}\right)^{2 n-1} \sum_{\lambda} a_{\lambda+\delta}(x) a_{\lambda^{\prime}+\delta}\left(-y^{-1}\right)
$$

summed over all partitions $\lambda$ such that $l(\lambda) \leqslant n$ and $l\left(\lambda^{\prime}\right) \leqslant n$. If we now replace each $y_{i}$ by $y_{i}^{-1}$, we obtain (4.3').
8. Let $M$ be a module over a commutative ring $A$, and let $\varphi: M \times M \rightarrow A$ be an $A$-bilinear form on $M$. The standard extension of $\varphi$ to the symmetric algebra $\mathbf{S}(M)$ is the bilinear form defined on each $\mathbf{S}^{n}(M)$ by

$$
\Phi(u, v)=\sum_{w \in S_{n}} \prod_{i=1}^{n} \varphi\left(u_{i}, v_{w(i)}\right)
$$

where $u=u_{1} \ldots u_{n}, v=v_{1} \ldots v_{n}$ and the $u_{i}, v_{j}$ are elements of $M$. In other words, $\Phi(u, v)$ is the permanent of the $n \times n$ matrix $\left(\varphi\left(u_{i}, v_{j}\right)\right.$.

In particular, let $A=\mathbf{Q}$ and let $M$ be the $\mathbf{Q}$-vector space with basis $p_{1}, p_{2}, \ldots$, so that $\mathbf{S}(M)=\mathrm{Q}\left[p_{1}, p_{2}, \ldots\right]=\Lambda_{\mathbf{Q}}$. Define $\varphi\left(p_{r}, p_{s}\right)=r \delta_{r s}$ for all $r, s \geqslant 1$. Then the scalar product (4.5) on $\Lambda_{\mathbf{Q}}$ is the standard extension of $\varphi$.
9. Let $C(x, y)=\prod_{i, j}\left(1-x_{i} y_{j}\right)^{-1}$. Then for all $f \in \Lambda$ we have

$$
\langle C(x, y), f(x)\rangle=f(y)
$$

where the scalar product is taken in the $x$ variables. (By linearity, it is enough to prove this when $f=s_{\lambda}$, and then it follows from (4.3) and (4.8).)

In other words, $C(x, y)$ is a 'reproducing kernel' for the scalar product.
10. Let $p_{n}^{(r)}=\sum m_{\lambda}$ summed over partitions $\lambda$ of $n$ of length $r$, as in $\S 2$, Example 19. Show that

$$
p_{n}^{(r)}=\sum_{a+b=n}(-1)^{b+r-1}\binom{b}{r-1} s_{\left(a, 1^{b}\right)}
$$

(Under the specialization $h_{r} \rightarrow X$ for all $r \geqslant 1$, the Jacobi-Trudi formula (3.4) shows that $s_{\lambda} \rightarrow 0$ if $\lambda_{2}>1$, that is to say if $\lambda$ is not a hook; and if $\lambda=\left(a, 1^{b}\right)$ it is easily shown that $s_{\lambda} \rightarrow X(X-1)^{b}$. Hence from the identity ((4.2), (4.3))

$$
\sum m_{\lambda}(x) h_{\lambda}(y)=\sum s_{\lambda}(x) s_{\lambda}(y)
$$

we obtain

$$
\sum m_{\lambda}(x) X^{l(\lambda)}=\sum_{a, b>0} s_{\left(a, l^{b}\right)}(x) X(X-1)^{b}
$$

from which the result follows.)
11. (a) Let $\lambda$ be a partition of $n$. Show that when $m_{\lambda}$ is expressed as a polynomial in $p_{1}, \ldots, p_{n}$, the coefficient of $p_{n}$ is non-zero. (The coefficient in question is $n^{-1}\left\langle p_{n}, m_{\lambda}\right\rangle$, which is also the coefficient of $h_{\lambda}$ in $n^{-1} p_{n}$ expressed as a polynomial in the $h$ 's, and is given explicitly in $\S 2$, Example 20.)
(b) For each integer $r \geqslant 1$ let $u_{r}$ be a monomial symmetric function of degree $r$ (i.e. $u_{r}=m_{\lambda}$ for some partition $\lambda$ of $r$ ). Show that the $u_{r}$ are algebraically independent over $\mathbf{Q}$ and that $\Lambda_{\mathbf{Q}}=\mathbf{Q}\left[u_{1}, u_{2}, \ldots\right]$. (From (a) above we have $u_{r}=c_{r} p_{r}+$ a polynomial in $p_{1}, \ldots, p_{r-1}$, where $c_{r} \neq 0$. This shows by induction on $r$ that $\mathrm{Q}\left[u_{1}, \ldots, u_{r}\right]=\mathrm{Q}\left[p_{1}, \ldots, p_{r}\right]$ for each $r \geqslant 1$. Hence for each $m \geqslant 1$ the monomials of degree $m$ in the $u$ variables span $\Lambda_{\mathbf{Q}}^{m}$, and are therefore linearly independent over $\mathbf{Q}$.

## Notes and references

The scalar product on $\Lambda$ was apparently first introduced by Redfield [R1] and later popularized by P. Hall [H3]. Example 5 is due to A. Lascoux [L1], and Example 11 to D. G. Mead [M10].

## 5. Skew Schur functions

Any symmetric function $f \in \Lambda$ is uniquely determined by its scalar products with the $s_{\lambda}$ : namely

$$
f=\sum_{\lambda}\left\langle f, s_{\lambda}\right\rangle s_{\lambda}
$$

since the $s_{\lambda}$ form an orthonormal basis of $\Lambda$ (4.8).
Let $\lambda, \mu$ be partitions, and define a symmetric function $s_{\lambda / \mu}$ by the relations

$$
\begin{equation*}
\left\langle s_{\lambda / \mu}, s_{\nu}\right\rangle=\left\langle s_{\lambda}, s_{\mu} s_{\nu}\right\rangle \tag{5.1}
\end{equation*}
$$

for all partitions $\nu$. The $s_{\lambda / \mu}$ are called skew Schur functions. Equivalently, if $c_{\mu \nu}^{\lambda}$ are the integers defined by

$$
\begin{equation*}
s_{\mu} s_{\nu}=\sum_{\lambda} c_{\mu \nu}^{\lambda} s_{\lambda}, \tag{5.2}
\end{equation*}
$$

then we have

$$
\begin{equation*}
s_{\lambda / \mu}=\sum_{\nu} c_{\mu \nu}^{\lambda} s_{\nu} \tag{5.3}
\end{equation*}
$$

In particular, it is clear that $s_{\lambda / 0}=s_{\lambda}$, where 0 denotes the zero partition. Also $c_{\mu \nu}^{\lambda}=0$ unless $|\lambda|=|\mu|+|\nu|$, so that $s_{\lambda / \mu}$ is homogeneous of degree $|\lambda|-|\mu|$, and is zero if $|\lambda|<|\mu|$. (We shall see shortly that $s_{\lambda / \mu}=0$ unless $\lambda \supset \mu$.)
Now let $x=\left(x_{1}, x_{2}, \ldots\right)$ and $y=\left(y_{1}, y_{2}, \ldots\right)$ be two sets of variables. Then

$$
\begin{aligned}
\sum_{\lambda} s_{\lambda / \mu}(x) s_{\lambda}(y) & =\sum_{\lambda, \nu} c_{\mu \nu}^{\lambda} s_{\nu}(x) s_{\lambda}(y) \\
& =\sum_{\nu} s_{\nu}(x) s_{\mu}(y) s_{\nu}(y)
\end{aligned}
$$

by (5.2) and (5.3), and therefore

$$
\sum_{\lambda} s_{\lambda / \mu}(x) s_{\lambda}(y)=s_{\mu}(y) \sum_{\nu} h_{\nu}(x) m_{\nu}(y)
$$

by (4.2) and (4.3). Now suppose that $y=\left(y_{1}, \ldots, y_{n}\right)$, so that the sums above are restricted to partitions $\lambda$ and $\nu$ of length $\leqslant n$. Then the previous equation can be rewritten in the form

$$
\begin{aligned}
\sum_{\lambda} s_{\lambda / \mu}(x) a_{\lambda+\delta}(y) & =\sum_{\nu} h_{\nu}(x) m_{\nu}(y) a_{\mu+\delta}(y) \\
& =\sum_{\alpha} h_{\alpha}(x) \sum_{w \in S_{n}} \varepsilon(w) y^{\alpha+w(\mu+\delta)}
\end{aligned}
$$

summed over $\alpha \in \mathrm{N}^{n}$. Hence $s_{\lambda / \mu}(x)$ is equal to the coefficient of $y^{\lambda+\delta}$ in this sum, i.e. we have

$$
s_{\lambda / \mu}=\sum_{w \in S_{n}} \varepsilon(w) h_{\lambda+\delta-w(\mu+\delta)}
$$

with the usual convention that $h_{\alpha}=0$ if any component $\alpha_{i}$ of $\alpha$ is negative. This formula can also be written as a determinant

$$
\begin{equation*}
s_{\lambda / \mu}=\operatorname{det}\left(h_{\lambda_{i}-\mu_{j}-i+j}\right)_{1<i, j<n} \tag{5.4}
\end{equation*}
$$

where $n \geqslant l(\lambda)$.
When $\mu=0$, (5.4) becomes (3.4).

From (5.4) and (2.9) we have also

$$
\begin{equation*}
s_{\lambda / \mu}=\operatorname{det}\left(e_{\lambda_{i}^{\prime}-\mu_{j}^{\prime}-i+j}\right)_{1<i, j<m} \tag{5.5}
\end{equation*}
$$

where $m \geqslant l\left(\lambda^{\prime}\right)$, and therefore

$$
\begin{equation*}
\omega\left(s_{\lambda / \mu}\right)=s_{\lambda^{\prime} / \mu^{\prime}} \tag{5.6}
\end{equation*}
$$

From (5.4) it follows that $s_{\lambda / \mu}=0$ unless $\lambda_{i} \geqslant \mu_{i}$ for all $i$, i.e. unless $\lambda \supset \mu$. For if $\lambda_{r}<\mu_{r}$ for some $r$, we have $\lambda_{i} \leqslant \lambda_{r}<\mu_{r} \leqslant \mu_{j}$ for $1 \leqslant j \leqslant r \leqslant i$ $\leqslant n$, and therefore $\lambda_{i}-\mu_{j}-i+j<0$ for this range of values of $(i, j)$. Consequently the matrix ( $h_{\lambda_{1}-\mu_{j}-i+j}$ ) has an $(n-r+1) \times r$ block of zeros in the bottom left-hand corner, and therefore its determinant vanishes.
The same considerations show that if $\lambda \supset \mu$ and $\mu_{r} \geqslant \lambda_{r+1}$ for some $r<n$, the matrix $\left(h_{\lambda_{t}-\mu_{j}-i+j}\right)$ is of the form $\left(\begin{array}{cc}A & C \\ 0 & B\end{array}\right)$, where $A$ has $r$ rows and columns, and $B$ has $n-r$ rows and columns, so that its determinant is equal to $\operatorname{det}(A) \operatorname{det}(B)$. Hence if the skew diagram $\lambda-\mu$ consists of two disjoint pieces $\theta, \varphi$ (each of which is a skew diagram), then we have $s_{\lambda / \mu}=s_{\theta} . s_{\varphi}$. To summarize:
(5.7) The skew Schur function $s_{\lambda / \mu}$ is zero unless $\lambda \supset \mu$, in which case it depends only on the skew diagram $\lambda-\mu$. If $\theta_{i}$ are the components (§1) of $\lambda-\mu$, we have $s_{\lambda / \mu}=\Pi s_{\theta_{i}}$.
If the number of variables $\boldsymbol{x}_{\boldsymbol{i}}$ is finite, we can say more:
(5.8) We have $s_{\lambda / \mu}\left(x_{1}, \ldots, x_{n}\right)=0$ unless $0 \leqslant \lambda_{i}^{\prime}-\mu_{i}^{\prime} \leqslant n$ for all $i \geqslant 1$.

Proof. Suppose that $\lambda_{r}^{\prime}-\mu_{r}^{\prime}>n$ for some $r \geqslant 1$. Since $e_{n+1}=e_{n+2}=\ldots=$ 0 , it follows as above that the matrix ( $e_{\lambda_{i}^{\prime}-\mu_{j}^{\prime}-i+j}$ ) has a rectangular block of zeros in the top right-hand corner, with one vertex of the rectangle on the main diagonal, hence its determinant vanishes.

Now let $x=\left(x_{1}, x_{2}, \ldots\right), y=\left(y_{1}, y_{2}, \ldots\right), z=\left(z_{1}, z_{2}, \ldots\right)$ be three sets of independent variables. Then by (5.2) we have
(a)

$$
\sum_{\lambda, \mu} s_{\lambda / \mu}(x) s_{\lambda}(z) s_{\mu}(y)=\sum_{\mu} s_{\mu}(y) s_{\mu}(z) \cdot \prod_{i, k}\left(1-x_{i} z_{k}\right)^{-1}
$$

which by (4.3) is equal to

$$
\prod_{i, k}\left(1-x_{i} z_{k}\right)^{-1} \cdot \prod_{j, k}\left(1-y_{j} z_{k}\right)^{-1}
$$

and therefore also equal to

$$
\begin{equation*}
\sum_{\lambda} s_{\lambda}(x, y) s_{\lambda}(z) \tag{b}
\end{equation*}
$$

where $s_{\lambda}(x, y)$ denotes the Schur function corresponding to $\lambda$ in the set of variables $\left(x_{1}, x_{2}, \ldots, y_{1}, y_{2}, \ldots\right.$ ). From the equality of (a) and (b) we conclude that

$$
\begin{align*}
s_{\lambda}(x, y) & =\sum_{\mu} s_{\lambda / \mu}(x) s_{\mu}(y) \\
& =\sum_{\mu, \nu} c_{\mu \nu}^{\lambda} s_{\mu}(y) s_{\nu}(x) . \tag{5.9}
\end{align*}
$$

More generally, we have

$$
\begin{equation*}
s_{\lambda / \mu}(x, y)=\sum_{\nu} s_{\lambda / \nu}(x) s_{\nu / \mu}(y) \tag{5.10}
\end{equation*}
$$

summed over partitions $\nu$ such that $\lambda \supset \nu \supset \mu$.
Proof. From (5.9) we have

$$
\begin{aligned}
\sum_{\mu} s_{\lambda / \mu}(x, y) s_{\mu}(z) & =s_{\lambda}(x, y, z) \\
& =\sum_{\nu} s_{\lambda / \nu}(x) s_{\nu}(y, z) \\
& =\sum_{\mu, \nu} s_{\lambda / \nu}(x) s_{\nu / \mu}(y) s_{\mu}(z)
\end{aligned}
$$

by (5.9) again; now equate the coefficients of $s_{\mu}(z)$ at either end of this chain of equalities.

The formula (5.10) may clearly be generalized, as follows. Let $x^{(1)}, \ldots, x^{(n)}$ be $n$ sets of variables, and let $\lambda, \mu$ be partitions. Then

$$
\begin{equation*}
s_{\lambda / \mu}\left(x^{(1)}, \ldots, x^{(n)}\right)=\sum_{(\nu)} \prod_{i=1}^{n} s_{\nu^{(i)} / \nu^{(i-1)}}\left(x^{(i)}\right) \tag{5.11}
\end{equation*}
$$

summed over all sequences $(\nu)=\left(\nu^{(0)}, \nu^{(1)}, \ldots, \nu^{(n)}\right)$ of partitions, such that $\nu^{(0)}=\mu, \nu^{(n)}=\lambda$, and $\nu^{(0)} \subset \nu^{(1)} \subset \ldots \subset \nu^{(n)}$. |

We shall apply (5.11) in the case where each set of variables $x^{(i)}$ consists of a single variable $x_{i}$. For a single $x$, it follows from (5.8) that $s_{\lambda / \mu}(x)=0$ unless $\lambda-\mu$ is a horizontal strip ( $\S 1$ ), in which case $s_{\lambda / \mu}(x)=x^{|\lambda-\mu|}$. Hence each of the products in the sum on the right-hand side of (5.11) is a monomial $x_{1}^{\alpha_{1}} \ldots x_{n}^{\alpha_{n}}$, where $\alpha_{i}=\left|\nu^{(i)}-\nu^{(i-1)}\right|$, and hence we have $s_{\lambda / \mu}\left(x_{1}, \ldots, x_{n}\right)$ expressed as a sum of monomials $x^{\alpha}$, one for each tableau
(§1) $T$ of shape $\lambda-\mu$. If the weight of $T$ is $\alpha=\left(\alpha_{1}, \ldots, \alpha_{n}\right)$, we shall write $x^{T}$ for $x^{\alpha}$. Then:

$$
\begin{equation*}
s_{\lambda / \mu}=\sum_{T} x^{T} \tag{5.12}
\end{equation*}
$$

summed over all tableaux $T$ of shape $\lambda-\mu . \mid$
For each partition $\nu$ such that $|\nu|=|\lambda-\mu|$, let $K_{\lambda-\mu, \nu}$ denote the number of tableaux of shape $\lambda-\mu$ and weight $\nu$. From (5.12) we have

$$
\begin{equation*}
s_{\lambda / \mu}=\sum_{\nu} K_{\lambda-\mu, \nu} m_{\nu} \tag{5.13}
\end{equation*}
$$

and therefore

$$
\begin{equation*}
K_{\lambda-\mu, \nu}=\left\langle s_{\lambda / \mu}, h_{\nu}\right\rangle=\left\langle s_{\lambda}, s_{\mu} h_{\nu}\right\rangle \tag{5.14}
\end{equation*}
$$

so that

$$
\begin{equation*}
s_{\mu} h_{\nu}=\sum_{\lambda} K_{\lambda-\mu, \nu} s_{\lambda} . \tag{5.15}
\end{equation*}
$$

In particular, suppose that $\nu=(r)$, a partition with only one non-zero part. Then $K_{\lambda-\mu,(r)}$ is 1 or 0 according as $\lambda-\mu$ is or is not a horizontal $r$-strip, and therefore from (5.15) we have

$$
\begin{equation*}
\text { (Pieri's formula) } \quad s_{\mu} h_{r}=\sum_{\lambda} s_{\lambda} \tag{5.16}
\end{equation*}
$$

summed over all partitions $\lambda$ such that $\lambda-\mu$ is a horizontal $r$-strip. $\mid$
By applying the involution $\omega$ to (5.16), we obtain

$$
\begin{equation*}
s_{\mu} e_{r}=\sum_{\lambda} s_{\lambda} \tag{5.17}
\end{equation*}
$$

summed over all partitions $\lambda$ such that $\lambda-\mu$ is a vertical $r$-strip. |
Remarks. 1. It is easy to give a direct proof of (5.17). Consider (for a finite set of variables $x_{1}, \ldots, x_{n}$ ) the product

$$
\begin{aligned}
a_{\mu+\delta} e_{r} & =\sum_{w \in S_{n}} \varepsilon(w) x^{w(\mu+\delta)} \sum_{\alpha} x^{\alpha} \\
& =\sum_{\alpha} a_{\mu+\alpha+\delta}
\end{aligned}
$$

where the sum is over all $\alpha \in \mathbf{N}^{n}$ such that each $\alpha_{i}$ is 0 or 1 , and $\Sigma \alpha_{i}=r$. For each such $\alpha$, the sequence

$$
\mu+\alpha+\delta=\left(\mu_{1}+\alpha_{1}+n-1, \mu_{2}+\alpha_{2}+n-2, \ldots, \mu_{n}+\alpha_{n}\right)
$$

is in descending order, so that we have only to reject those $\alpha$ for which two consecutive terms are equal. We are then left with those $\alpha$ for which $\lambda=\mu+\alpha$ is a partition, i.e. such that $\lambda-\mu$ is a vertical $r$-strip. This proves (5.17), hence also (5.16) by duality. We can now play back the rest of the argument: (5.16) implies (5.15) by induction on the length of $\nu$, hence (5.14), which in turn is merely a restatement of (5.13).
2. Proposition (5.12) is the origin of the application of Schur functions to enumeration of plane partitions (see the examples at the end of this section). For this reason, combinatorialists often prefer to take (5.12) as the definition of Schur functions (see e.g. Stanley [S23]). This approach has the advantage of starting directly with a simple explicit definition, but it is not clear a priori why one should be led to make such a definition in the first place.
3. In any $\lambda$-ring we can define operations $S^{\lambda / \mu}$ by the formula (5.3):

$$
S^{\lambda / \mu}=\sum_{\nu} c_{\mu \nu}^{\lambda} S^{\nu}
$$

Then (5.9), for example, takes the form of an addition theorem:

$$
S^{\lambda}(x+y)=\sum_{\mu} S^{\lambda / \mu}(x) S^{\mu}(y)
$$

for any two elements $x, y$ of a $\lambda$-ring. Similarly for the other formulas in this section.
4. The formula (5.4) shows that the skew Schur functions $s_{\lambda / \mu}(x)$, where $\lambda$ and $\mu$ are partitions of length $\leqslant p$, are the $p \times p$ minors of the matrix $H_{x}=\left(h_{i-j}(x)\right.$ ), i.e. they are the entries in the $p$ th exterior power $\Lambda^{p}\left(H_{x}\right)$. The relation (5.10) is therefore equivalent to

$$
\Lambda^{p}\left(H_{x, y}\right)=\Lambda^{p}\left(H_{x}\right) \Lambda^{p}\left(H_{y}\right)
$$

Thus it is a consequence of the functoriality of $\Lambda^{p}$, since $H_{x, y}=H_{x} H_{y}$.

## Examples

1. Let $\lambda-\mu$ be a horizontal strip. Then $s_{\lambda / \mu}=h_{\nu}=h_{\nu_{1}} h_{\nu_{2}} \ldots$ where the integers $\nu_{i}$ are the lengths of the components of the strip. (Use (5.7).) Likewise, if $\lambda-\mu$ is a vertical strip, we have $s_{\lambda / \mu}=e_{\nu} e_{\nu_{2}} \ldots$, where again the $\nu_{i}$ are the lengths of the components of the strip.
2. (a) Let $\lambda$ be a partition of $n$. Then the number of standard tableaux of shape $\lambda$ is

$$
K_{\lambda,\left(1^{n}\right)}=\left\langle s_{\lambda}, h_{1}^{n}\right\rangle
$$

by (5.14). By §4, Example 3 it follows that the number of standard tableaux of shape $\lambda$ is equal to $n!/ h(\lambda)$, where $h(\lambda)$ is the product of the hook-lengths of $\lambda$.

This result is true more generally if $\lambda$ is a skew diagram all of whose connected components are right diagrams (i.e. diagrams of partitions).
(b) Let $p$ be a positive integer and let $\lambda$ be a partition, $\tilde{\lambda}$ its $p$-core ( $\S 1$, Example 8). A $p$-tableau of shape $\lambda-\tilde{\lambda}$ is a sequence of partitions

$$
\tilde{\lambda}=\mu^{(0)} \subset \mu^{(1)} \subset \ldots \subset \mu^{(m)}=\lambda
$$

such that $\mu^{(i)}-\mu^{(i-1)}$ is a border strip of length $p$, for $1 \leqslant i \leqslant m$. (Thus when $p=1$, a $p$-tableau is just a standard tableau (and $\lambda=0$ ); when $p=2$, it is also called a domino tableau.)
Let $\lambda^{*}$ be the $p$-quotient of $\lambda$, thought of as a skew diagram with components $\lambda^{(i)}(0 \leqslant i \leqslant p-1)$, and let $h\left(\lambda^{*}\right)=\Pi h\left(\lambda^{(i)}\right)$ be the product of the hook-lengths of $\lambda^{*}$. From $\S 1$, Example 8 it follows that the $p$-tableaux of shape $\lambda-\tilde{\lambda}$ are in one-one correspondence with the standard tableaux of shape $\lambda^{*}$, and hence by (a) above the number of $p$-tableaux of shape $\lambda-\bar{\lambda}$ is equal to $m!/ h\left(\lambda^{*}\right)$, where $m=\left|\lambda^{*}\right|$. This number is also equal to $p^{m} m!/ h_{p}(\lambda)$, where $h_{p}(\lambda)$ is the product of the hook-lengths of $\lambda$ that are divisible by $p$ ( $\$ 1$, Example 8(d)).
3. For each symmetric function $f \in \Lambda$, let $f^{\perp}: \Lambda \rightarrow \Lambda$ be the adjoint of multiplication by $f$, i.e.

$$
\left\langle f^{\perp} u, v\right\rangle=\langle u, f v\rangle
$$

for all $u, v \in \Lambda$. Then $f \mapsto f^{\perp}: \Lambda \rightarrow \operatorname{End}(\Lambda)$ is a ring homomorphism.
(a) Since $\left\langle s_{\mu}^{1} s_{\lambda}, s_{\nu}\right\rangle=\left\langle s_{\lambda}, s_{\mu} s_{\nu}\right\rangle=\left\langle s_{\lambda / \mu}, s_{\nu}\right\rangle$ for all partitions $\lambda, \mu, \nu$, it follows that $s_{\mu}^{\perp} s_{\lambda}=s_{\lambda / \mu}$. Hence from (5.9) we have

$$
s_{\lambda}(x, y)=\sum_{\mu} s_{\mu}^{\perp} s_{\lambda}(x) \cdot s_{\mu}(y)
$$

and therefore, for any $f \in \Lambda$,

$$
f(x, y)=\sum_{\mu} s_{\mu}^{\perp} f(x) . s_{\mu}(y) .
$$

(b) We have $h_{\lambda}^{\perp} m_{\mu}=0$ unless $\mu=\lambda \cup \nu$ for some partition $\nu$, and in that case $h_{\lambda}^{\perp} m_{\mu}=m_{\nu}$. For

$$
\left\langle h_{\lambda}^{\perp} m_{\mu}, h_{\nu}\right\rangle=\left\langle m_{\mu}, h_{\lambda} h_{\nu}\right\rangle=\left\langle m_{\mu}, h_{\lambda \cup \nu}\right\rangle
$$

which is zero unless $\mu=\lambda \cup \nu$.
In particular, $h_{n}^{\perp} m_{\mu}=0$ if $n$ is not a part of $\mu$, and $h_{n}{ }^{\perp} m_{\mu}=m_{\nu}$ if $n$ is a part of $\mu$, where $\nu$ is the partition obtained by removing one part $n$ from $\mu$. It follows that for every $f\left(x_{0}, x_{1}, x_{2}, \ldots\right) \in \Lambda,\left(h_{n}^{\perp} f\right)\left(x_{1}, \ldots, x_{n}\right)$ is the coefficient of $x_{0}^{n}$ in $f$.
(c) Next consider $p_{n}{ }^{\perp}$. If $N \geqslant n$ we have

$$
\left\langle p_{n}{ }^{\perp} h_{N}, p_{\lambda}\right\rangle=\left\langle h_{N}, p_{n} p_{\lambda}\right\rangle=\left\langle h_{N-n}, p_{\lambda}\right\rangle
$$

for all partitions $\lambda$ of $N-n$, by $\S 4$, Example 4. Hence

$$
p_{n}^{\perp} h_{N}=h_{N-n}
$$

and therefore

$$
p_{n}^{\perp}=\sum_{r>0} h_{r} \partial / \partial h_{n+r}
$$

acting on symmetric functions expressed as polynomials in the $h$ 's.
Dually

$$
p_{n}^{\perp}=(-1)^{n-1} \sum_{r>0} e_{r} \partial / \partial e_{n+r}
$$

acting on symmetric functions expressed as polynomials in the $e$ 's.
Further, we have $\left\langle p_{n}{ }^{\perp} p_{\lambda}, p_{\mu}\right\rangle=\left\langle p_{\lambda}, p_{n} p_{\mu}\right\rangle$, which is zero if $\lambda \neq \mu \cup(n)$, and is equal to $z_{\lambda}$ if $\lambda=\mu \cup(n)$. It follows that $p_{n}^{\perp} p_{\lambda}=z_{\lambda} z_{\mu}^{-1} p_{\mu}$ if $n$ is a part of $\lambda$, and $\mu$ is the partition obtained by removing one part $n$ from $\lambda$. From the definition of $z_{\lambda}$ it follows that $z_{\lambda} z_{\mu}^{-1}=n \cdot m_{n}(\lambda)$, where $m_{n}(\lambda)$ is the multiplicity of $n$ as a part of $\lambda$, and therefore

$$
p_{n}{ }^{\perp}=n \partial / \partial p_{n}
$$

acting on symmetric functions expressed as polynomials in the $p$ 's. In particular, each $p_{n}{ }^{1}$ is a derivation of $\Lambda$.

Since each $f \in \Lambda$ can be expressed as a polynomial $\varphi\left(p_{1}, p_{2}, \ldots\right)$ with rational coefficients, it follows that

$$
f^{\perp}=\varphi\left(\partial / \partial p_{1}, 2 \partial / \partial p_{2}, \ldots\right)
$$

is a linear differential operator with constant coefficients.
(d) For each $n \in \mathbf{Z}$, let $\pi_{n}: \Lambda \rightarrow \Lambda$ be the operator defined as follows: if $n \geqslant 1, \pi_{n}$ is multiplication by $p_{n}$; if $n \leqslant-1$, then $\pi_{n}=p_{-n}^{\perp}$; and $\pi_{0}$ is the identity. Then we have

$$
\left[\pi_{m}, \pi_{n}\right]=n \delta_{m+n, 0} \pi_{0}
$$

for all $m, n \in \mathbf{Z}$, so that the linear span of the $\pi_{n}$ is a Heisenberg Lie algebra.
4. We have

$$
\sum_{\lambda} s_{\lambda}=\prod_{i}\left(1-x_{i}\right)^{-1} \prod_{i<j}\left(1-x_{i} x_{j}\right)^{-1}
$$

where the sum on the left is over all partitions $\lambda$.
It is enough to prove this for a finite set of variables $x_{1}, \ldots, x_{n}$. Let $\Phi\left(x_{1}, \ldots, x_{n}\right)$ denote $\Sigma_{\lambda} s_{\lambda}\left(x_{1}, \ldots, x_{n}\right)$, which is now a sum over partitions $\lambda$ of length $\leqslant n$. By induction on $n$, it is enough to show that

$$
\Phi\left(x_{1}, \ldots, x_{n}, y\right)=\Phi\left(x_{1}, \ldots, x_{n}\right)(1-y)^{-1} \prod_{i=1}^{n}\left(1-x_{i} y\right)^{-1}
$$

From (5.9) it follows that

$$
\Phi\left(x_{1}, \ldots, x_{n}, y\right)=\sum_{\lambda, \mu} y^{|\lambda-\mu|} s_{\mu}\left(x_{1}, \ldots, x_{n}\right)
$$

where the sum on the right is over all pairs of partitions $\lambda \supset \mu$ such that $l(\mu) \leqslant n$ and $\lambda-\mu$ is a horizontal strip. For each such pair $\lambda, \mu$, define $\nu \subset \mu$ by $\mu_{i}-\nu_{i}=\lambda_{i+1}-\mu_{i+1}(i \geqslant 1)$, so that $|\lambda-\mu|=\lambda_{1}-\mu_{1}+|\mu-\nu|$. Then $\lambda$ can be reconstructed from $\mu, \nu$, and the integer $\lambda_{1}-\mu_{1}$, and hence

$$
\begin{equation*}
\sum_{\lambda, \mu} y^{|\lambda-\mu|} s_{\mu}\left(x_{1}, \ldots, x_{n}\right)=\sum_{\mu, \nu} y^{|\mu-\nu|}(1-y)^{-1} s_{\mu}\left(x_{1}, \ldots, x_{n}\right), \tag{*}
\end{equation*}
$$

the sum on the right being over pairs of partitions $\mu \supset \nu$ such that $l(\mu) \leqslant n$ and $\mu-\nu$ is a horizontal strip. By (5.16), the right-hand side of (*) is equal to

$$
\sum_{\nu, r} y^{r}(1-y)^{-1} h_{r}\left(x_{1}, \ldots, x_{n}\right) s_{\nu}\left(x_{1}, \ldots, x_{n}\right)
$$

summed over all partitions $\nu$ of length $\leqslant n$, and all integers $r \geqslant 0$; and this last sum is equal to $(1-y)^{-1} \Pi_{i-1}^{n}\left(1-x_{i} y\right)^{-1} \Phi\left(x_{1}, \ldots, x_{n}\right)$, as required.
5. (a) We have

$$
\sum_{\mu \mathrm{cvcn}} s_{\mu}=\prod_{i}\left(1-x_{i}^{2}\right)^{-1} \prod_{i<j}\left(1-x_{i} x_{j}\right)^{-1}
$$

where the sum on the left is over all even partitions $\mu$ (i.e. with all parts $\mu_{i}$ even).
Each partition $\lambda$ can be reduced to an even partition $\mu$ by removing a vertical strip, in exactly one way: we take $\mu_{i}=\lambda_{i}$ if $\lambda_{i}$ is even, and $\mu_{i}=\lambda_{i}-1$ if $\lambda_{i}$ is odd. From this observation and (5.17) it follows that

$$
\left(\sum_{\mu \mathrm{cven}} s_{\mu}\right)\left(\sum_{r>0} e_{r}\right)=\sum_{\lambda} s_{\lambda},
$$

the sum on the right being over all partitions $\lambda$. Since $\sum e_{r}=\Pi\left(1+x_{i}\right)$, the result now follows from Example 4.
(b) We have

$$
\sum_{\nu^{\prime} \mathrm{evcn}} s_{\nu}=\prod_{i<j}\left(1-x_{i} x_{j}\right)^{-1}
$$

The proof is dual to that of (a): each partition $\lambda$ can be reduced to one with even columns by removing a horizontal strip, in exactly one way. From this observation and (5.16) it follows that

$$
\left(\sum_{\nu} \sum_{\text {even }} s_{\nu}\right)\left(\sum_{r>0} h_{r}\right)=\sum_{\lambda} s_{\lambda},
$$

and since $\Sigma_{r>0} h_{r}=\Pi\left(1-x_{i}\right)^{-1}$, the result again follows from Example 4.

The involution $\omega$ interchanges the identities in (a) and (b).
6. We have

$$
\sum_{\lambda}(-1)^{n(\lambda)} s_{\lambda}=\prod_{i}\left(1-x_{i}\right)^{-1} \prod_{i<j}\left(1+x_{i} x_{j}\right)^{-1} .
$$

For if we replace each variable $x_{i}$ by $\sqrt{-1} . x_{i}$ in Example 5(b), we shall obtain

$$
\prod_{i<j}\left(1+x_{i} x_{j}\right)^{-1}=\sum_{\nu}(-1)^{|\nu| / 2} s_{\nu}
$$

summed over partitions $\nu$ with all columns of even length. Each partition $\lambda$ is obtained uniquely from such a partition $\nu$ by adjoining a horizontal strip, and therefore

$$
\begin{aligned}
\prod_{i}\left(1-x_{i}\right)^{-1} \prod_{i<j}\left(1+x_{i} x_{j}\right)^{-1} & =\sum_{r>0} \sum_{\nu}(-1)^{|\nu| / 2} s_{\nu} h_{r} \\
& =\sum_{\lambda}(-1)^{f(\lambda)} s_{\lambda}
\end{aligned}
$$

where $f(\lambda)=\Sigma_{i>1}\left[\frac{1}{2} \lambda_{i}^{\prime}\right]$ (and $[x]$ is the greatest integer $\leqslant x$ ). Since $\left[\frac{r}{2}\right] \equiv\binom{r}{2}(\bmod 2)$, it follows from $(1.6)$ that $f(\lambda) \equiv n(\lambda)(\bmod 2)$.
7. The same argument as in Example 5(b) shows that

$$
\sum_{\lambda} t^{c(\lambda) s_{\lambda}}=\prod_{i}\left(1-t x_{i}\right)^{-1} \prod_{i<j}\left(1-x_{i} x_{j}\right)^{-1}
$$

where the sum is over all partitions $\lambda$, and $c(\lambda)$ is the number of columns of odd length in $\lambda$. This includes the identities of Example 4 (when $t=1$ ) and Example 5(b) (when $t=0$ ).
8. By applying the involution $\omega$ to Example 7 we obtain

$$
\sum_{\lambda} t^{r(\lambda)} s_{\lambda}=\prod_{i} \frac{1+t x_{i}}{1-x_{i}^{2}} \prod_{i<j} \frac{1}{1-x_{i} x_{j}}
$$

where the sum is over all partitions $\lambda$, and $r(\lambda)$ is the number of rows of odd length in $\lambda$. When $t=1$ this reduces to Example 4, and when $t=0$ it reduces to Example 5(a).
9. The products

$$
\prod_{i<j}\left(1-x_{i} x_{j}\right), \quad \prod_{i}\left(1-x_{i}\right) \prod_{i<j}\left(1-x_{i} x_{j}\right), \quad \prod_{i}\left(1-x_{i}^{2}\right) \prod_{i<j}\left(1-x_{i} x_{j}\right) .
$$

(i.e. the reciprocals of those of Examples 4, 5(a) and 5(b)) can also be expanded as series of Schur functions. The expansions may be derived from Weyl's identity for the root-systems of types $D_{n}, B_{n}, C_{n}$ respectively. (If $R$ is a root system with Weyl group $W, R^{+}$a system of positive roots, $\rho$ half the sum of the positive roots, then Weyl's identity ([B8], p. 185) is

$$
\begin{equation*}
\sum_{w \in W} \varepsilon(w) e^{w \rho}=\prod_{\alpha \in R^{+}}\left(e^{\alpha / 2}-e^{-\alpha / 2}\right) \tag{*}
\end{equation*}
$$

where $\varepsilon(w)$ is the sign of $w \in W$, and the $e$ 's are formal exponentials.)
(a) When $R$ is of type $D_{n}$, the identity (*) leads to

$$
\sum_{\pi}(-1)^{|\pi| / 2} s_{\pi}\left(x_{1}, \ldots, x_{n}\right)=\prod_{i<j}\left(1-x_{i} x_{j}\right)
$$

summed over all partitions $\pi=\left(\alpha_{1}-1, \ldots, \alpha_{p}-1 \mid \alpha_{1}, \ldots, \alpha_{p}\right)$ in Frobenius notation, where $\alpha_{1} \leqslant n-1$.
(b) When $R$ is of type $C_{n}$, we obtain from (*)

$$
\sum_{\rho}(-1)^{|\rho| / 2} s_{\rho}\left(x_{1}, \ldots, x_{n}\right)=\prod_{i}\left(1-x_{i}^{2}\right) \prod_{i<j}\left(1-x_{i} x_{j}\right)
$$

summed over all partitions $\rho=\left(\alpha_{1}+1, \ldots, \alpha_{p}+1 \mid \alpha_{1}, \ldots, \alpha_{p}\right)$, where $\alpha_{1} \leqslant n-1$.
(c) When $R$ is of type $B_{n}$, we obtain from (*)

$$
\sum_{\sigma}(-1)^{(|\sigma|+p(\sigma)) / 2} s_{\sigma}\left(x_{1}, \ldots, x_{n}\right)=\prod_{i}\left(1-x_{i}\right) \prod_{i<j}\left(1-x_{i} x_{j}\right)
$$

summed over all self-conjugate partitions $\sigma=\left(\alpha_{1}, \ldots, \alpha_{p} \mid \alpha_{1}, \ldots, \alpha_{p}\right)$ such that $\alpha_{1} \leqslant n-1$, where $p(\sigma)=p$.
10. In the language of $\lambda$-rings, the identities of Examples $5(\mathrm{a}), 5(\mathrm{~b})$, and 9 give series expansions (in terms of Schur operations) for $\sigma_{t}\left(\sigma^{2}(x)\right), \sigma_{t}\left(\lambda^{2}(x)\right), \lambda_{t}\left(\sigma^{2}(x)\right)$, and $\lambda_{t}\left(\lambda^{2}(x)\right)$, namely

$$
\begin{aligned}
\sigma_{t}\left(\sigma^{2}(x)\right) & =\sum_{\mu \mathrm{even}} S^{\mu}(x) t^{|\mu| / 2}, \\
\sigma_{t}\left(\lambda^{2}(x)\right) & =\sum_{\nu^{\prime} \mathrm{even}} S^{\nu}(x) t^{|\nu| / 2}, \\
\lambda_{t}\left(\sigma^{2}(x)\right) & =\sum_{\rho} S^{\pi}(x) t^{|\rho| / 2}, \\
\lambda_{t}\left(\lambda^{2}(x)\right) & =\sum_{\pi} S^{\pi}(x) t^{|\pi| / 2},
\end{aligned}
$$

the last two summations being over partitions $\rho=\left(\alpha_{1}+1, \ldots, \alpha_{\rho}+1 \mid \alpha_{1}, \ldots, \alpha_{p}\right)$ and $\pi=\left(\alpha_{1}-1, \ldots, \alpha_{p}-1 \mid \alpha_{1}, \ldots, \alpha_{p}\right)$.
11. Let $x_{1}=\ldots=x_{N}=t, x_{N+1}=x_{N+2}=\ldots=0$ in the formula of Example 4. Then $s_{\lambda}=\binom{N}{\lambda^{\prime}} t^{[\lambda]}(\S 3$, Example 4) and hence, for each $n \geqslant 0$,

$$
\begin{aligned}
\sum_{|\lambda|=n}\binom{N}{\lambda} & =\text { coefficient of } t^{n} \text { in }(1-t)^{-N}\left(1-t^{2}\right)^{-N(N-1) / 2} \\
& =\text { coefficient of } t^{n} \text { in }(1-t)^{-N(N+1) / 2}(1+t)^{-N(N-1) / 2}
\end{aligned}
$$

Since this is true for all positive integers $N$, it is a polynomial identity, i.e.

$$
\sum_{|\lambda|=n}\binom{X}{\lambda}=\text { coefficient of } t^{n} \text { in }(1-t)^{-x(X+1) / 2}(1+t)^{-X(x-1) / 2}
$$

12. Let $x_{1}=\ldots=x_{N}=t / N, x_{N+1}=x_{N+2}=\ldots=0$ in the identity of Example 4, and let $N \rightarrow \infty$. Then from Example 11 we obtain

$$
\sum_{|\lambda|=n} h(\lambda)^{-1}=\text { coefficient of } t^{n} \text { in } \exp \left(t+\frac{1}{2} t^{2}\right)
$$

where (\$4, Example 3 ) $h(\lambda)$ is the product of the hook lengths of $\lambda$. From Example 2 it follows that the total number of standard tableaux of weight $\left(1^{n}\right)$ is equal to $n!$ multiplied by the coefficient of $t^{n}$ in $\exp \left(t+\frac{1}{2} t^{2}\right)$. This number is also the number of permutations $w \in S_{n}$ such that $w^{2}=1$.
13. Let $\lambda$ be a partition. A plane partition of shape $\lambda$ is a mapping $\pi$ from (the diagram of) $\lambda$ to the positive integers such that $\pi\left(x_{1}\right) \geqslant \pi\left(x_{2}\right)$ whenever $x_{2}$ lies below or to the right of $x_{1}$ in $\lambda$. The numbers $\pi(x)$ are the parts of $\pi$, and

$$
|\pi|=\sum_{x \in \lambda} \pi(x)
$$

is called the weight of $\pi$. Any plane partition $\pi$ determines a sequence $\lambda=\lambda^{(0)}$ ว $\lambda^{(1)} \supset \ldots$ of (linear) partitions such that $\pi^{-1}(i)=\lambda^{(i-1)}-\lambda^{(i)}$ for each $i \geqslant 1$.

If $\pi\left(x_{1}\right)>\pi\left(x_{2}\right)$ whenever $x_{2}$ lies directly below $x_{1}$ (i.e. if the parts of $\pi$ decrease strictly down each column) then $\pi$ is said to be column-strict. Clearly $\pi$ is column-strict if and only if each skew diagram $\pi^{-1}(i)=\lambda^{(i-1)}-\lambda^{(i)}$ is a horizontal strip.
A plane partition $\pi$ has a three-dimensional diagram, consisting of the points ( $i, j, k$ ) with integer coordinates such that $(i, j) \in \lambda$ and $1 \leqslant k \leqslant \pi(i, j)$. Alternatively, we may think of the diagram of $\pi$ as a set of unit cubes, such that $\pi(x)$ cubes are stacked vertically on each square $x \in \lambda$. As in the case of ordinary (linear) partitions, we shall use the same symbol $\pi$ to denote a plane partition and its diagram.

If $S$ is any set of plane partitions, the generating function of $S$ is the polynomial or formal power series

$$
\sum_{\pi \in S} q^{|\pi|}
$$

in which the coefficient of $q^{n}$ is the number of plane partitions of weight $n$ which belong to $S$.
(a) Consider column-strict plane partitions of shape $\lambda$, with all parts $\leqslant n$. By (5.12) the generating function for these is $s_{\lambda}\left(q^{n}, q^{n-1}, \ldots, q\right)$, which by $\S 3$, Example 1 is

$$
q^{|\lambda|+n(\lambda)} \prod_{x \in \lambda} \frac{1-q^{n+c(x)}}{1-q^{h(x)}}
$$

(b) Let $l, m, n$ be three positive integers, and consider the set of plane partitions $\pi$ with all parts $\leqslant n$ and shape $\lambda$ such that $l(\lambda) \leqslant l$ and $l\left(\lambda^{\prime}\right) \leqslant m$ : that is, the set of three-dimensional diagrams $\pi$ which fit inside a box $B$ with side-lengths $l, m, n$. By adding $l+1-i$ to each part in the $i$ th row of $\pi$, for $1 \leqslant i \leqslant l$, we convert $\pi$
into a column-strict plane partition of shape $(m, \ldots, m)=\left(m^{l}\right)$ and largest part $\leqslant l+n$. From (a) above, the generating function for the plane partitions $\pi \subset B$ is therefore

$$
\begin{equation*}
\prod_{x \in\left(m^{\prime}\right)} \frac{1-q^{l+n+c(x)}}{1-q^{h(x)}} \tag{1}
\end{equation*}
$$

In this form the result does not display the symmetry which it must have as a function of $l, m$, and $n$. It may be rewritten as follows: for each $y=(i, j, k) \in B$, define the height of $y$ to be $\mathrm{ht}(y)=i+j+k-2$ (so that the point $(1,1,1)$ has height 1 ). Then the generating function (1) may be written in the form

$$
\begin{equation*}
\sum_{\pi \subset B} q^{|\pi|}=\prod_{y \in B} \frac{1-q^{1+\mathrm{ht}(y)}}{1-q^{\mathrm{ht}(y)}} \tag{2}
\end{equation*}
$$

(c) We may now let any or all of $l, m, n$ become infinite. The most striking result is obtained by letting all of $l, m, n$ tend to $\infty$ : the box $B$ is then replaced by the positive octant, and for each $n \geqslant 1$ the number of lattice points ( $i, j, k$ ) with $i+j+k-2=n$ and $i, j, k \geqslant 1$ is equal to the coefficient of $t^{n-1}$ in $(1-t)^{-3}$, hence to $\frac{1}{2} n(n+1)$. It follows that the generating function for all plane partitions is

$$
\begin{equation*}
\prod_{n=1}^{\infty}\left(\frac{1-q^{n+1}}{1-q^{n}}\right)^{n(n+1) / 2}=\prod_{n=1}^{\infty}\left(1-\dot{q}^{n}\right)^{-n} \tag{3}
\end{equation*}
$$

(d) Likewise, the generating function for all plane partitions with largest part $\leqslant m$ is

$$
\begin{equation*}
\prod_{n=1}^{\infty}\left(1-q^{n}\right)^{-\min (m, n)} \tag{4}
\end{equation*}
$$

14. From Example 13(a), by letting $n \rightarrow \infty$, the generating function for all columnstrict plane partitions of shape $\lambda$ is

$$
\begin{equation*}
q^{|\lambda|+n(\lambda)} H_{\lambda}(q)^{-1} \tag{1}
\end{equation*}
$$

where $H_{\lambda}(q)=\Pi_{x \in \lambda}\left(1-q^{h(x)}\right)$.
Another way of obtaining this generating function is as follows. Let $\pi$ be a column-strict plane partition of shape $\lambda$, and let $S$ be the set of pairs $(\pi(i, j), j)$ where $(i, j) \in \lambda$. The elements of $S$ are all distinct, because $\pi$ is column-strict. We order $S$ as follows: $(r, j)$ precedes ( $r^{\prime}, j^{\prime}$ ) if either $r>r^{\prime}$, or $r=r^{\prime}$ and $j<j^{\prime}$. This is a linear ordering of $S$. Define a standard tableau $T(\pi)$ of shape $\lambda$ as follows: $T(i, j)=k \Leftrightarrow(\pi(i, j), j)$ is the $k$ th element of $S$ in the linear ordering defined above. For example, if $\pi$ is
then $S$ is the ordered set

$$
(3,1),(3,2),(2,1),(2,2),(2,3),(1,1),(1,4),(1,5)
$$

and $T(\pi)$ is the standard tableau

$$
12578
$$

34
6
Conversely, let $T$ be a standard tableau of shape $\lambda$, and let $\pi$ be a column-strict plane partition such that $T(\pi)=T$. Let $|\lambda|=n$, and for $1 \leqslant k \leqslant n$ let $a_{k}$ be the part of $\pi$ in the square occupied by $k$ in $T$. Then $a_{1} \geqslant \ldots \geqslant a_{n} \geqslant 1$ and $a_{k}>a_{k+1}$ whenever $k \in R(T)$, where $R(T)$ is the set of integers $k \in[1, n-1]$ such that $k+1$ lies in a lower row than $k$ in the tableau $T$. Now let

$$
b_{k}=\left\{\begin{array}{lll}
a_{k}-a_{k+1} & \text { if } & k \notin R(T) \\
a_{k}-a_{k+1}-1 & \text { if } & k \in R(T) \\
a_{n}-1 & \text { if } & k=n
\end{array} \text { and } k \neq n\right.
$$

so that $b_{k} \geqslant 0$ for $k=1,2, \ldots, n$. Then we have

$$
\sum_{k=1}^{n} a_{k}=n+r(T)+\sum_{k=1}^{n} k b_{k}
$$

where

$$
r(T)=\sum\{k: k+1 \text { lies in a lower row than } k \text { in } T\}
$$

and therefore the generating function for the column-strict plane partitions $\pi$ such that $T(\pi)=T$ is

$$
q^{n+r(T)} \varphi_{n}(q)^{-1}
$$

where as usual $\varphi_{n}(q)=(1-q) \ldots\left(1-q^{n}\right)$.
Hence the generating function for column-strict plane partitions of shape $\lambda$ is

$$
\begin{equation*}
q^{n}\left(\sum_{T} q^{r(T)}\right) / \varphi_{n}(q) \tag{2}
\end{equation*}
$$

summed over all standard tableaux $T$ of shape $\lambda$.
From (1) and (2) it follows that

$$
\begin{equation*}
\sum_{T} q^{r(T)}=q^{n(\lambda)} \varphi_{n}(q) / H_{\lambda}(q) . \tag{3}
\end{equation*}
$$

15. Let $S$ be any set of positive integers. From (5.12) and Example 4 it follows that the generating function for column-strict plane partitions all of whose parts belong to $S$ is

$$
\prod_{i \in S}\left(1-q^{i}\right)^{-1} \prod_{\substack{i, j \in S \\ i<j}}\left(1-q^{i+j}\right)^{-1} .
$$

(a) Take $S$ to consist of all the positive integers. Then the generating function for all column-strict plane partitions, of arbitrary shape, is

$$
\begin{equation*}
\prod_{n=1}^{\infty}\left(1-q^{n}\right)^{-[(n+1) / 2]} \tag{1}
\end{equation*}
$$

(b) Take $S$ to consist of all the odd positive integers. We obtain the generating function

$$
\begin{equation*}
\prod_{n=1}^{\infty}\left(1-q^{2 n-1}\right)^{-1}\left(1-q^{2 n}\right)^{-[n / 2]} \tag{2}
\end{equation*}
$$

Now the column-strict plane partitions with all parts odd are in one-to-one correspondence with the symmetrical plane partitions $\pi$ (i.e. such that $\pi(i, j)=$ $\pi(j, i)$ ). For the diagram of a symmetrical plane partition may be thought of as a sequence of diagrams of symmetrical (linear) partitions $\pi^{(1)} \supset \pi^{(2)} \supset \ldots$, piled one on top of the other; each $\pi^{(i)}$ is of the form ( $\alpha_{1}, \ldots, \alpha_{p} \mid \alpha_{1}, \ldots, \alpha_{p}$ ) in Frobenius notation, and hence determines a linear partition $\sigma^{(i)}=\left(2 \alpha_{1}+1, \ldots, 2 \alpha_{p}+1\right)$ with odd parts, all distinct; and the $\sigma^{(i)}$ can be taken as the columns of a column-strict plane partition with odd parts. It follows that (2) is the generating function for the set of all symmetrical plane partitions.
16. Let $\Phi\left(x_{1}, \ldots, x_{n}\right)=\Pi_{i}\left(1-x_{i}\right)^{-1} \Pi_{i<j}\left(1-x_{i} x_{j}\right)^{-1}$ as in Example 4. By setting $t=0$ in the identity of Chapter III, §5, Example 5 we obtain

$$
\begin{equation*}
\sum_{m, \lambda} u^{m} s_{\lambda}\left(x_{1}, \ldots, x_{n}\right)=\sum_{\varepsilon} \Phi\left(x_{1}^{\varepsilon_{1}}, \ldots, x_{n}^{\varepsilon_{n}}\right) /\left(1-u \prod x_{i}^{\left(1-\varepsilon_{i}\right) / 2}\right) \tag{1}
\end{equation*}
$$

where the sum on the left is over all partitions $\lambda=\left(\lambda_{1}, \ldots, \lambda_{n}\right)$ of length $\leqslant n$, and integers $m \geqslant \lambda_{1}$; and the sum on the right is over all $\varepsilon=\left(\varepsilon_{1}, \ldots, \varepsilon_{n}\right)$ with each $\varepsilon_{i}= \pm 1$.
We shall rewrite (1) in the notation of root-systems. Let $v_{1}, \ldots, v_{n}$ be the standard basis of $\mathbf{R}^{\boldsymbol{n}}$. Then the set of vectors

$$
R=\left\{ \pm v_{i}(1 \leqslant i \leqslant n), \pm v_{i} \pm v_{j}(1 \leqslant i<j \leqslant n)\right\}
$$

is a root-system of type $B_{n}$, for which

$$
R^{+}=\left\{v_{i}(1 \leqslant i \leqslant n), v_{i} \pm v_{j}(1 \leqslant i<j \leqslant n)\right\}
$$

is a system of positive roots, so that

$$
\rho=\frac{1}{2}\left((2 n-1) v_{1}+(2 n-3) v_{2}+\ldots+v_{n}\right)
$$

is half the sum of the positive roots. The subset $R_{0}$ of $R$ defined by

$$
R_{0}=\left\{v_{i}-v_{j}: i \neq j\right\}
$$

is a subsystem of $R$ of type $A_{n-1}$, and $R_{0}^{+}=R^{+} \cap R_{0}$ is a system of positive roots for $R_{0}$. The Weyl group $W_{0}$ of $R_{0}$ is the symmetric group $S_{n}$, acting by permutations of $v_{1}, \ldots, v_{n}$, and the Weyl group $W$ of $R$ is the semidirect product of $W_{0}$
with the group (of order $2^{n}$ ) of transformations $w_{\varepsilon}: v_{i} \mapsto \varepsilon_{i} v_{i}(1 \leqslant i \leqslant n)$, where as before $\varepsilon=\left(\varepsilon_{1}, \ldots, \varepsilon_{n}\right)$ and each $\varepsilon_{i}$ is $\pm 1$. In this notation,

$$
\begin{aligned}
\Phi\left(e^{-v_{1}}, \ldots, e^{-v_{n}}\right) & =\prod_{\alpha \in R_{0}^{+}}\left(1-e^{-\alpha}\right) / \prod_{\alpha \in R^{+}}\left(1-e^{-\alpha}\right) \\
& =\left(\sum_{w \in W_{0}} \varepsilon(w) e^{w \rho}\right) /\left(\sum_{w \in W} \varepsilon(w) e^{w_{\rho}}\right),
\end{aligned}
$$

by virtue of Weyl's identity (Example 9). It follows that the right-hand side of (1) (with $x_{i}$ replaced by $e^{-v_{i}}$ ) may be written as a sum over $W$, and by equating the coefficients of $u^{m}$ on either side of (1) we arrive at the identity

$$
\begin{equation*}
\sum_{\lambda} s_{\lambda}\left(e^{-v_{1}}, \ldots, e^{-v_{n}}\right)=e^{-m \theta} J(m \theta+\rho) / J(\rho) \tag{2}
\end{equation*}
$$

where $\theta=\frac{1}{2}\left(v_{1}+\ldots+v_{n}\right)$, and for any vector $v$

$$
J(v)=\sum_{w \in W} \varepsilon(w) e^{w v},
$$

and the sum on the left is over all partitions $\lambda$ such that $l(\lambda) \leqslant n$ and $l\left(\lambda^{\prime}\right) \leqslant m$ (i.e. such that $\lambda \subset\left(m^{n}\right)$ ).
(If preferred, the right-hand side of (2) can be written as a quotient of determinants:

$$
\sum_{\lambda} s_{\lambda}\left(x_{1}, \ldots, x_{n}\right)=D_{m} / D_{0}
$$

where $D_{m}=\operatorname{det}\left(x_{j}^{m+2 n-i}-x_{j}^{i-1}\right)_{1<i, j<n}$, and the summation is as before over partitions $\lambda \subset\left(m^{n}\right)$.)

This identity (2) is a polynomial identity in $n$ independent variables $e^{-v_{i}}$. We may therefore specialize it to obtain identities in one variable $q$, by replacing each $e^{-v_{i}}$ by $q^{f_{i}}$, where the $f_{i}$ are arbitrary integers. This means that each exponential $e^{-v}$ is replaced by $q^{\langle v, f\rangle}$, where $f=\sum f_{i} v_{i}$ and $\langle v, f\rangle$ is the standard scalar product on $\mathbf{R}^{n}$. In this way we obtain

$$
\begin{equation*}
\sum_{\lambda} s_{\lambda}\left(q^{f_{i}}, \ldots, q^{f_{n}}\right)=q^{m\langle\theta, f\rangle} \frac{\sum \varepsilon(w) q^{-\langle m \theta+\rho, w f\rangle}}{\sum \varepsilon(w) q^{-\langle\rho, w f\rangle}} \tag{3}
\end{equation*}
$$

the sum on the left being over all partitions $\lambda \subset\left(m^{n}\right)$.
17. In formula (3) of Example 16 let us take $f=2 \rho$, the sum of the positive roots of $R$, so that $f_{i}=2 n-2 i+1$. On the right-hand side, the alternating sum

$$
\sum \varepsilon(w) q^{-\langle m \theta+\rho, 2 w \rho\rangle}
$$

is by Weyl's identity (Example 9) equal to the product

$$
\prod_{\alpha \in R^{+}}\left(q^{-\langle m \theta+\rho, \alpha\rangle}-q^{\langle m \theta+\rho, \alpha\rangle}\right)
$$

and therefore the right-hand side of (3) is equal to

$$
\prod_{\alpha \in R^{+}} \frac{q^{\langle 2 m \theta+2 \rho, \alpha\rangle}-1}{q^{\langle 2 \rho, \alpha\rangle}-1}
$$

In this product the positive roots $v_{i}-v_{j}(i<j)$ make no contribution, because they are orthogonal to $\theta=\frac{1}{2} \Sigma v_{i}$. Hence we obtain the identity
(4)

$$
\sum_{\lambda c\left(m^{n}\right)} s_{\lambda}\left(q^{2 n-1}, q^{2 n-3}, \ldots, q\right)=\prod_{i=1}^{n} \frac{q^{m+2 i-1}-1}{q^{2 i-1}-1} \prod_{1<i<j<n} \frac{q^{2(m+i+j-1)}-1}{q^{2(i+j-1)}-1}
$$

The left-hand side of (4) is the generating function for column-strict plane partitions with odd parts $\leqslant 2 n-1$, and with at most $m$ columns and at most $n$ rows; or equivalently (Example 15) it is the generating function for symmetrical plane partitions $\pi$ whose diagrams are contained in the box $B=B_{(n, n, m)}=$ $\{(i, j, k): 1 \leqslant i, j \leqslant n, 1 \leqslant k \leqslant m\}$.
The right-hand side of (4) can be rewritten in a form analogous to that of Example 13, formula (2), as follows. Let $G_{2}$ be the group of two elements consisting of the identity and the mapping $(i, j, k) \rightarrow(j, i, k)$, so that the box $B$ is stable under $G_{2}$. For each orbit $\eta$ of $G_{2}$ in $B$ let $|\eta|(=1$ or 2$)$ be the number of elements of $\eta$, and let

$$
h t(\eta)=\sum_{y \in \eta} h t(y)
$$

where $\mathrm{ht}(i, j, k)=i+j+k-2$ as in Example 13. Then the generating function for symmetrical plane partitions $\pi \subset B$ is

$$
\begin{equation*}
\prod_{\eta \in B / G_{2}} \frac{1-q^{\mathrm{ht}(\eta)+|\eta|}}{1-q^{\mathrm{ht}(\eta)}} . \tag{5}
\end{equation*}
$$

18. Let $G_{3}$ be the group of three elements generated by $(i, j, k) \mapsto(j, k, i)$ and let $C_{n}$ be the cube $\{(i, j, k): 1 \leqslant i, j, k \leqslant n\}$. The formula (5) of Example 17 suggests the following conjecture: the generating function for cyclically symmetric plane partitions $\pi$ (i.e. those whose diagrams are stable under $G_{3}$ ) contained in the cube $C_{n}$ should be

$$
\begin{equation*}
\prod_{\eta \in C_{n} / G_{3}} \frac{1-q^{\mathrm{h}(\eta)+|\eta|}}{1-q^{\mathrm{h}(\eta)}} \tag{6}
\end{equation*}
$$

This conjecture has since been proved by Mills, Robbins, and Rumsey [M11].
Next, let $G_{6}$ be the group of all permutations of ( $i, j, k$ ), and call a plane partition completely symmetric if its diagram is stable under $G_{6}$. The obvious analogue of (5) and (6) for $G_{6}$ is trivially false, because the rational function

$$
\prod_{\eta \in C_{n} / G_{6}} \frac{1-q^{\mathrm{h}(\eta)+|\eta|}}{1-q^{\mathrm{h}(\eta)}}
$$

is not a polynomial if $n \geqslant 3$. However, it seems likely $\dagger$ that the number of completely symmetric plane partitions with all parts $\leqslant n$ is correctly given by setting $q=1$ in this expression, i.e. it is equal to

$$
\prod_{\eta \in C_{n} / G_{6}} \frac{\mathrm{ht}(\eta)+|\eta|}{\mathrm{ht}(\eta)} .
$$

19. With the notation of Example 16, the set of vectors

$$
R_{1}=\left\{ \pm 2 v_{i}(1 \leqslant i \leqslant n), \pm v_{i} \pm v_{j}(1 \leqslant i<j \leqslant n)\right\}
$$

is a root system of type $C_{n}$, for which

$$
R_{1}^{+}=\left\{2 v_{i}(1 \leqslant i \leqslant n), v_{i} \pm v_{j}(1 \leqslant i<j \leqslant n)\right\}
$$

is a system of positive roots, so that

$$
\rho_{1}=n v_{1}+(n-1) v_{2}+\ldots+v_{n}
$$

is half the sum of the positive roots. The Weyl group is the same group $W$ as in Example 16.

We shall take $f=\rho_{1}$ in formula (3) of Example 16, so that $e^{-v_{i}}$ is replaced by $q^{n-i+1}$. As in Example 17, by virtue of Weyl's identity we have

$$
\sum \varepsilon(w) q^{-\left\langle m \theta+\rho, w \rho_{1}\right\rangle}=\prod_{\alpha \in R_{1}^{+}}\left(q^{-\langle m \theta+\rho, \alpha / 2\rangle}-q^{\langle m \theta+\rho, \alpha / 2\rangle}\right)
$$

and therefore the right-hand side of (3) is equal to

$$
\prod_{\alpha \in R_{1}^{+}} \frac{q^{\langle m \theta+\rho, \alpha\rangle}-1}{q^{\langle\rho, \alpha\rangle}-1} .
$$

Again the roots $v_{i}-v_{j}(i<j)$ make no contribution to this product, and hence we obtain

$$
\begin{equation*}
\sum_{\lambda \in\left(m^{n}\right)} s_{\lambda}\left(q^{n}, \ldots, q\right)=\prod_{1<i<j<n} \frac{q^{m+i+j-1}-1}{q^{i+j-1}-1} . \tag{7}
\end{equation*}
$$

The left-hand side of (7) is the generating function for column-strict plane partitions with largest part $\leqslant n$ and at most $m$ columns, and the right-hand side can be written in terms of the height function introduced in Example 13, namely as

$$
\begin{equation*}
\prod_{y \in D} \frac{1-q^{\mathrm{h}(y)+1}}{1-q^{\mathrm{h}(y)}} \tag{8}
\end{equation*}
$$

where $D$ is the prism $\{(i, j, k): 1 \leqslant i \leqslant j \leqslant n, 1 \leqslant k \leqslant m\}$.
$\dagger$ This conjecture has recently been proved by J. Stembridge [S30].
20. (a) Let $A=\left(a_{i j}\right)$ and $B=\left(b_{i j}\right)$ be $n \times n$ matrices such that $\operatorname{det} A=1$. Let $c_{i j}$ be the determinant of the matrix obtained from $A$ by replacing its $i$ th column by the $j$ th column of $B$, so that

$$
c_{i j}=\sum_{k=1}^{n} a^{i k} b_{k j}
$$

where $a^{i k}$ is the cofactor of $a_{k i}$ in $A$, which since $\operatorname{det} A=1$ is equal to the ( $i, k$ ) element of $A^{-1}$. It follows that $c_{i j}$ is the $(i, j)$ element of $A^{-1} B$, and hence that $\operatorname{det}\left(c_{i j}\right)=\operatorname{det} B$.

Now let $r<n$ and suppose that for each $j>r$ the $j$ th column of $A$ is equal to the $j$ th column of $B$. Then $c_{i j}=\delta_{i j}$ whenever $j>r$, and hence we have

$$
\begin{equation*}
\operatorname{det}\left(c_{i j}\right)_{1<i, j<r}=\operatorname{det} B \tag{1}
\end{equation*}
$$

(b) Let $\lambda=\left(\alpha_{1}, \ldots, \alpha_{r} \mid \beta_{1}, \ldots, \beta_{r}\right)$ be a partition of length $\leqslant n$, in Frobenius notation, and let

$$
\lambda^{(i, j)}=\left(\alpha_{1}, \ldots, \hat{\alpha}_{i}, \ldots, \alpha_{r} \mid \beta_{1}, \ldots, \hat{\beta}_{j}, \ldots, \beta_{r}\right)
$$

for $i, j=1,2, \ldots, r$, where the circumflexes indicate that the symbols they cover are to be omitted. Then the skew diagram $\left[\alpha_{i} \mid \beta_{j}\right]=\lambda-\lambda^{(i, j)}$ (which of course depends on $\lambda$ as well as $\alpha_{i}, \beta_{j}$ ) is a border strip, and more precisely is that part of the border of $\lambda$ consisting of the squares $(h, k)$ such that $h \geqslant i$ and $k \geqslant j$. With this notation established, we have

$$
\begin{equation*}
s_{\lambda}=\operatorname{det}\left(s_{\left[\alpha_{i} \mid \beta_{j}\right]}\right)_{1<i, j<r} \tag{2}
\end{equation*}
$$

(Let $\xi_{k}=k-\lambda_{k}(1 \leqslant k \leqslant n)$. The sequence $\xi=\left(\xi_{k}\right)$ is obtained from the sequence $\left(-\alpha_{1}, \ldots,-\alpha_{r}, 1,2, \ldots, n\right)$ by deletion of $\beta_{r}+1, \ldots, \beta_{1}+1$. Hence the corresponding sequence for the partition $\lambda^{(i, j)}$ is obtained from $\boldsymbol{\xi}$ by deleting $-\alpha_{i}$ and inserting $\beta_{j}+1$. It follows that, up to sign, $s_{\left[\alpha_{i}, \beta_{j}\right]}$ is equal to the determinant $c_{i j}$ of the $n \times n$ matrix obtained from $A=\left(h_{-\xi_{i}+\xi_{j}}\right)$ by replacing its $i$ th column by the $\left(\beta_{j}+1\right)$ th column of the matrix $B=\left(h_{\lambda_{i}-i+j}\right)=\left(h_{-\xi_{i}+j}\right)$. Moreover, the sign involved is $(-1)^{\beta_{i}-i+j}$, so that we have

$$
\begin{equation*}
\operatorname{det}\left(s_{\left[\alpha_{i} \mid \beta_{j}\right]}\right)=(-1)^{|\beta|} \operatorname{det}\left(c_{i j}\right) \tag{3}
\end{equation*}
$$

On the other hand, by (1) above, $\operatorname{det}\left(c_{i j}\right)$ is equal to the determinant of the matrix obtained from $B$ by rearranging its columns in the sequence $\left(\beta_{1}+1, \ldots, \beta_{r}+1\right.$, $1,2, \ldots, n)$, and therefore

$$
\begin{equation*}
\operatorname{det}\left(c_{i j}\right)=(-1)^{|\beta|} \operatorname{det} B=(-1)^{|\beta|} s_{\lambda} . \tag{4}
\end{equation*}
$$

The formula (2) now follows from (3) and (4).)
21. Let $\theta, \varphi$ be two skew diagrams. Let $a$ be the rightmost square in the top row of $\theta$, and let $b$ be the leftmost square in the bottom row of $\varphi$. Let $\varphi^{\nu}$ (resp. $\varphi^{h}$ )
denote the diagram obtained from $\varphi$ by a shift sending $b$ to the square immediately above $a$ (resp. immediately to the right of $a$ ) and let $\theta \underset{v}{*} \varphi$ (resp. $\theta_{h}^{*} \varphi$ ) denote the skew diagram $\theta \cup \varphi^{\nu}$ (resp. $\theta \cup \varphi^{h}$ ).
(a) Show that

$$
\begin{equation*}
s_{\theta} s_{\varphi}=s_{\theta * \dot{v}}+s_{\theta * \varphi} \tag{1}
\end{equation*}
$$

(From (5.12) it follows that

$$
s_{\theta} s_{\varphi}=\sum_{T, U} x^{T} x^{U}
$$

summed over all pairs of tableaux $T, U$ of respective shapes $\theta, \varphi$. Split up the set of these pairs ( $T, U$ ) into two subsets according as $T(a) \leqslant U(b)$ or $T(a)>U(b)$, where $T(a)$ is the symbol occupying the square $a$ in $T$, and likewise for $U(b)$.)
(b) In view of (5.7), the repeated use of (1) enables us to express any skew Schur function as a sum of skew Schur functions corresponding to connected diagrams. In particular, we have

$$
\begin{equation*}
h_{1}^{n}=\sum_{\theta} s_{\theta} \tag{2}
\end{equation*}
$$

summed over the $2^{n-1}$ border strips (or ribbons) of length $n$. Taking the coefficient of $x_{1} \ldots x_{n}$ in both sides of (2) (or, equivalently, the scalar product with $h_{1}^{n}$ ) we see that this decomposition describes the partition of the symmetric group $S_{n}$ into the subsets of permutations having a given set of descents.
(c) Let $\lambda=(\alpha \mid \beta)=\left(\alpha_{1}, \ldots, \alpha_{r} \mid \beta_{1}, \ldots, \beta_{r}\right)$ be a partition in Frobenius notation, and let $S_{(\alpha \mid \beta)}, S_{[\alpha \mid \beta]}$ denote the $r \times r$ matrices

$$
S_{(\alpha \mid \beta)}=\left(s_{\left(\alpha_{i} \mid \beta_{j}\right)}\right), \quad S_{[\alpha \mid \beta]}=\left((-1)^{i+j} s_{\left[\alpha_{i} \mid \beta_{j}\right]}\right)
$$

in the notation introduced in Example 20. Show that

$$
\begin{equation*}
S_{(\alpha \mid \beta)}=H_{\alpha} S_{[\alpha \mid \beta]} E_{\beta} \tag{3}
\end{equation*}
$$

where $H_{\alpha}=\left(h_{\alpha_{i}-\alpha_{j}}\right), E_{\beta}=\left(e_{\beta_{j}-\beta_{i}}\right)$. (Use (1) above.)
By taking determinants in (3) and using §3, Example 9, we obtain another proof of the formula (2) of Example 20.
22. (a) Let $\lambda=\left(\alpha_{1}, \ldots, \alpha_{r} \mid \beta_{1}, \ldots, \beta_{r}\right), \mu=\left(\gamma_{1}, \ldots, \gamma_{s} \mid \varepsilon_{1}, \ldots, \varepsilon_{s}\right)$ be two partitions in Frobenius notation. Define matrices

$$
\begin{aligned}
S_{(\alpha \mid \beta)} & =\left(s_{\left(\alpha_{i} \mid \beta_{j}\right)}\right)_{1<i, j \leqslant r}, \\
H_{\alpha, \gamma} & =\left(h_{\alpha_{i}-\gamma_{j}}\right)_{1<i<r, 1<j \leqslant s}, \\
E_{\beta, \varepsilon} & =\left(e_{\beta_{j}-\varepsilon_{i}}\right)_{1<i<s, 1<j<r} .
\end{aligned}
$$

Then we have

$$
s_{\lambda / \mu}=(-1)^{s} \operatorname{det}\left(\begin{array}{cc}
S_{(\alpha \mid \beta)} & H_{\alpha, \gamma}  \tag{1}\\
E_{\beta, \varepsilon} & 0
\end{array}\right)
$$

When $\mu=0$ (so that $s=0$ ) this formula reduces to that of $\S 3$, Example 9.
(Choose $n \geqslant \max \left(l(\lambda), l(\mu)\right.$ ) and let $I=\left(-\alpha_{1}, \ldots,-\alpha_{r}, 1,2, \ldots, n\right), J=$ $\left(-\gamma_{1}, \ldots,-\gamma_{s}, 1,2, \ldots, n\right)$. Then the sequence $\left(i-\lambda_{i}\right)_{1<i<n}$ is obtained from the sequence $I$ by deleting the terms $\beta_{i}+1(1 \leqslant i \leqslant r)$, and likewise the sequence $\left(j-\mu_{j}\right)_{1<j \leqslant n}$ is obtained from $J$ by deleting the terms $\varepsilon_{j}+1(1 \leqslant j \leqslant s)$. Hence the matrix $\left(h_{\lambda_{i}-\mu_{j}-i+j}\right)$ is obtained from the matrix $M=\left(h_{j-i}\right)_{(i, j) \in I \times J}$ by deleting the rows with indices $r+\beta_{i}+1(1 \leqslant i \leqslant r)$ and the columns with indices $s+\varepsilon_{j}+1$ $(1 \leqslant j \leqslant s)$. Hence if $U$ is the matrix of $n+r$ rows and $r$ columns which has 1 's in the positions $\left(r+\beta_{i}+1, i\right)(1 \leqslant i \leqslant r)$ and zeros elsewhere, and if $V$ is the matrix of $s$ rows and $n+s$ columns that has 1 's in the positions $\left(j, s+\varepsilon_{j}+1\right)(1 \leqslant j \leqslant s)$ and zeros elsewhere, we shall have

$$
s_{\lambda / \mu}=\operatorname{det}\left(h_{\lambda_{i}-\mu_{j}-i+j}\right)=(-1)^{k} \operatorname{det} B
$$

where $B$ is the matrix (of $N=n+r+s$ rows and columns) $\left(\begin{array}{cc}0 & V \\ U & M\end{array}\right)$, and $k=r^{2}+r s+s^{2}+|\beta|+|\varepsilon|$.

Now let $A$ be the $N \times N$ matrix whose first $r+s$ rows are those of the unit matrix $1_{N}$, and whose last $n$ rows coincide with the last $n$ rows of the matrix $B$. From the definition of $M$ it follows that $\operatorname{det} A=1$. We now apply the method of Example 20(a) (but with rows replacing columns): if $c_{i j}$ denotes the determinant of the matrix obtained by replacing the $j$ th row of $A$ by the $i$ th row of $B$, for $1 \leqslant i, j \leqslant r+s$, then $\operatorname{det} B=\operatorname{det}\left(c_{i j}\right)$. By calculating the $c_{i j}$ and paying careful attention to the signs involved, we obtain the desired formula (1).)
(b) Let $H_{\alpha}=\left(h_{\alpha_{i}-\alpha_{j}}\right), E_{\beta}=\left(e_{\beta_{j}-\beta_{i}}\right)$ as in Example 21(c). From (1) it follows that

$$
s_{\lambda / \mu}=(-1)^{s} \operatorname{det}\left(\begin{array}{cc}
H_{\alpha}^{-1} S_{(\alpha \mid \beta)} E_{\beta}^{-1} & H_{\alpha}^{-1} H_{\alpha, \gamma}  \tag{2}\\
E_{\beta, \varepsilon} E_{\beta}^{-1} & 0
\end{array}\right) .
$$

From Example 21(c) we have

$$
H_{\alpha}^{-1} S_{(\alpha \mid \beta)} E_{\beta}^{-1}=\left((-1)^{i+j} s_{\left[\alpha_{i} \mid \beta_{j}\right]}\right)_{1<i, j<r}
$$

Consider the matrix $H_{\alpha}^{-1} H_{\alpha, \gamma}$. Its $(i, j)$ element, say $c_{i j}$, is equal to the determinant of the matrix obtained from $H_{\alpha}$ by replacing its $i$ th column by the $j$ th column of $H_{\alpha, \gamma}$. There are three possibilities:
(i) if $\gamma_{j}=\alpha_{k}$ for some $k$, then $c_{i j}=\delta_{i k}$;
(ii) if $\gamma_{j}$ is not equal to any $\alpha_{k}$, and $\alpha_{i}<\gamma_{j}$, then $c_{i j}=0$;
(iii) if $\gamma_{j}$ is not equal to any $\alpha_{k}$, and $\alpha_{i} \geqslant \gamma_{j}$, then $c_{i j}$ is (up to sign) the Schur function corresponding to the border strip consisting of those squares ( $a, b$ ) in the border of $\lambda$ such that $\gamma_{j}<b-a \leqslant \alpha_{i}$.

Similar considerations apply to the matrix $E_{\beta, \epsilon} E_{\beta}^{-1}$. Hence (2) leads to an expression for the skew Schur function $s_{\lambda / \mu}$ as a determinant of Schur functions of border strips. We shall leave the precise formulation as an exercise to the reader. 23. As in $\S 3$, Example 21, let $s_{\lambda}(x / y)$ denote the Schur functions associated with the rational function

$$
E_{x / y}(t)=\sum_{r>0} e_{r}(x / y) t^{r}=\prod_{i=1}^{m}\left(1+x_{i} t\right) \prod_{j=1}^{n}\left(1+y_{j} t\right)^{-1}
$$

If $\omega_{y}$ denotes the involution $\omega$ acting on symmetric functions of the $y$ variables, then $s_{\lambda}(x / y)$ is obtained from $\omega_{y} s_{\lambda}(x, y)$ by replacing each $y_{j}$ by $-y_{j}$. Hence by (5.9) and (5.6) we have

$$
\begin{equation*}
s_{\lambda}(x / y)=\sum_{\mu}(-1)^{|\lambda-\mu|} s_{\mu}(x) s_{\lambda^{\prime} / \mu^{\prime}}(y) \tag{1}
\end{equation*}
$$

and

$$
\begin{equation*}
s_{\lambda}(y / x)=(-1)^{|\lambda|} s_{\lambda^{\prime}}(x / y) \tag{2}
\end{equation*}
$$

(a) Let $\Gamma_{m, n}$ denote the set of lattice points $(i, j) \in \mathbf{Z}^{2}$ such that $i, j \geqslant 1$ and either $i \leqslant m$ or $j \leqslant n$. By (5.8) and (1) above, $s_{\lambda}(x / y) \neq 0$ if and only if there is a partition $\mu \subset \lambda$ such that $l(\mu) \leqslant m$ and $\lambda_{i}-\mu_{i} \leqslant n$ for all $i \geqslant 1$, and this condition is equivalent to $\lambda \subset \Gamma_{m, n}$.
(b) A bitableau $T$ of type $(m, n)$ and shape $\lambda-\mu$ (where $\lambda \supset \mu$ ) is a sequence of partitions

$$
\begin{equation*}
\mu=\lambda^{(0)} \subset \lambda^{(1)} \subset \ldots \subset \lambda^{(m+n)}=\lambda \tag{3}
\end{equation*}
$$

such that the skew diagram $\theta^{(i)}=\lambda^{(i)}-\lambda^{(i-1)}$ is a horizontal strip for $1 \leqslant i \leqslant m$ and a vertical strip for $m+1 \leqslant i \leqslant m+n$. Graphically, $T$ may be described by filling each square of $\theta^{(i)}$ with the symbol $i$, for $1 \leqslant i \leqslant m$, and each square of $\theta^{(m+j)}$ with the symbol $j^{\prime}$, for $1 \leqslant j \leqslant n$. Thus the symbols follow the order $1<2<\ldots<m<1^{\prime}<2^{\prime}<\ldots<n^{\prime}$, and the conditions on $T$ are
(i) in each row (resp. column) of $T$ the symbols increase in the weak sense from left to right (resp. from top to bottom);
(ii) there is at most one marked symbol $j^{\prime}$ in each row, and at most one unmarked symbol $i$ in each column.

With each such bitableau $T$ we associate a monomial $(x / y)^{T}$ obtained by replacing each symbol $i$ (resp. $j^{\prime}$ ) by $x_{i}$ (resp. $-y_{j}$ ) and then forming the product of all these $x$ 's and $-y$ 's. It follows then from (2) above and (5.12) that

$$
\begin{equation*}
s_{\lambda / \mu}(x / y)=\sum_{T}(x / y)^{T} \tag{4}
\end{equation*}
$$

summed over all bitableaux $T$ of type ( $m, n$ ) and shape $\lambda-\mu$.
(c) In (b) above the symbols followed the order $1<2<\ldots<m<1^{\prime}<2^{\prime}<\ldots<n^{\prime}$. Show that (4) will remain true if this order is replaced by any other total ordering
of the set $\left\{1,2, \ldots, m, 1^{\prime}, 2^{\prime}, \ldots, n^{\prime}\right\}$. (In $\lambda$-ring terms, this is simply the observation that the summands in $x_{1}+\ldots+x_{m}-y_{1}-\ldots-y_{n}$ may be permuted in any way.)
24. (a) Let $p$ be an integer $\geqslant 2$ and let $\varphi_{p}: \Lambda \rightarrow \Lambda$ be the ring homomorphism defined as follows: $\varphi_{p}\left(h_{n}\right)=h_{n / p}$ if $p$ divides $n$, and $\varphi_{p}\left(h_{n}\right)=0$ otherwise. (The effect of $\varphi_{p}$ is to replace each variable $x_{i}$ by its set of $p$ th roots.)
If $\lambda$ is a partition of length $\leqslant n$, let $\lambda^{*}=\left(\lambda^{(r)}\right)_{0<r<p-1}$ denote its $p$-quotient, as in §1, Example 8. If $\mu \subset \lambda$ let

$$
s_{\lambda^{*} / \mu^{*}}=\prod_{r=0}^{p-1} s_{\lambda^{(r)} / \mu^{(r)}}
$$

Show that $\varphi_{p}\left(s_{\lambda_{/ \mu}}\right)= \pm s_{\lambda^{*} / \mu^{*}}$ if $\lambda, \mu$ have the same $p$-core, and that $\varphi_{p}\left(s_{\lambda / \mu}\right)=0$ otherwise. (Even when $\lambda$ and $\mu$ have the same $p$-core, we do not necessarily have $\mu^{(r)} \subset \lambda^{(r)}$, so that $s_{\lambda^{*} / \mu^{*}}$ may be zero also in this case.)
(Let $\xi=\lambda+\delta, \eta=\mu+\delta$, where $\delta=(n-1, n-2, \ldots, 1,0)$, so that $s_{\lambda / \mu}=$ $\operatorname{det}\left(h_{\xi_{i}-\eta_{j}}\right.$ ) by (5.4). For each $r=0,1, \ldots, p-1$ let $A_{r}$ (resp. $B_{r}$ ) be the set of indices $i$ between 1 and $n$ such that $\xi_{i} \equiv r(\bmod p)\left(\right.$ resp. $\eta_{i} \equiv r(\bmod p)$ ). Then $\varphi_{p}\left(s_{1 / \mu}\right)$ is equal to $\pm \operatorname{det} M$, where $M$ is the matrix which is the diagonal sum of the (not necessarily square) matrices $M_{r}=\left(h_{\left(\xi_{i}-\eta_{j}\right) / p}\right),(i, j) \in A_{r} \times B_{r}$. It follows that $\varphi_{p}\left(s_{\lambda / \mu}\right)=0$ unless $\left|A_{r}\right|=\left|B_{r}\right|$ for each $r$, i.e. unless $\lambda$ and $\mu$ have the same $p$-core. If this condition is satisfied, then $\left.\varphi_{p}\left(s_{\lambda / \mu}\right)= \pm \Pi \operatorname{det} M_{r}= \pm s_{\lambda^{\circ} / \mu^{\circ}}.\right)$
(b) Let $\omega=e^{2 \pi i / p}$. Deduce from (a) that $s_{\lambda / \mu}\left(1, \omega, \ldots, \omega^{p-1}\right)$ is zero unless
(i) $\lambda$ and $\mu$ have the same $p$-core;
(ii) $\lambda^{(r)} \supset \mu^{(r)}$ for $r=0,1, \ldots, p-1$;
(iii) each $\lambda^{(r)}-\mu^{(r)}$ is a horizontal strip.

Conditions ( $\mathbf{i}$ ) and (ii) together mean that $\lambda-\mu$ is a union of border strips of length $p$. We shall write $\lambda \approx_{p} \mu$ to mean that conditions (i)-(iii) are satisfied.
If $\lambda \approx_{p} \mu$ then $s_{\lambda / \mu}\left(1, \omega, \ldots, \omega^{p-1}\right)= \pm 1$. The sign, $\sigma_{p}(\lambda / \mu)$ say, may be determined as follows. Let $r_{i} \in[0, p-1]$ be the remainder when $\xi_{i}=\lambda_{i}+n-i$ is divided by $p$, and rearrange the sequence $\xi=\left(\xi_{1}, \ldots, \xi_{n}\right)$ so that $\xi_{i}$ precedes $\xi_{j}$ if and only if either $r_{i}<r_{j}$, or $r_{i}=r_{j}$ and $\xi_{i}>\xi_{j}$. Let $\varepsilon_{p}(\lambda)$ be the sign of the corresponding permutation, and define $\varepsilon_{p}(\mu)$ likewise. Then $\sigma_{p}(\lambda / \mu)=$ $\varepsilon_{p}(\lambda) \varepsilon_{p}(\mu)$.
25. We shall identify the elements of the ring $\Lambda \otimes_{\mathrm{Z}} \Lambda$ with the functions of two sets of variables ( $x$ ) and ( $y$ ), symmetric in each set separately: thus $f \otimes g$ corresponds to $f(x) g(y)$. Clearly, for any $f \in \Lambda$ the function $f(x, y)$ lies in $\Lambda \otimes \Lambda$, and we define the diagonal map (or comultiplication) $\Delta: \Lambda \rightarrow \Lambda \otimes \Lambda$ by

$$
(\Delta f)(x, y)=f(x, y) .
$$

Also the counit $\varepsilon: \Lambda \rightarrow \mathbf{Z}$ is the linear mapping which vanishes on $\Lambda^{n}$ for each $n \geqslant 1$ and is such that $\varepsilon(1)=1$ (so that $\varepsilon(f)$ is the constant term of $f$ ).
It is easy to verify that this comultiplication and counit endows $\Lambda$ with the structure of a cocommutative Hopf algebra over $\mathbf{Z}$ (for the definition of such an object see, for example, [Z2]; the most important axiom is that $\Delta$ is a ring homomorphism).
(a) The definitions at once imply that

$$
\begin{gathered}
\Delta h_{n}=\sum_{p+q=n} h_{p} \otimes h_{q}, \quad \Delta e_{n}=\sum_{p+q=n} e_{p} \otimes e_{q}, \\
\Delta p_{n}=p_{n} \otimes 1+1 \otimes p_{n} \quad(n \geqslant 1) .
\end{gathered}
$$

This last relation signifies that the $p_{n}$ are primitive elements of $\Lambda$.
(b) From (5.9) we have

$$
\Delta s_{\lambda}=\sum_{\mu} s_{\lambda / \mu} \otimes s_{\mu}
$$

for any partition $\lambda$. Hence, with the notation of Example 3,

$$
\Delta f=\sum_{\mu} s_{\mu}^{\perp} f \otimes s_{\mu}
$$

for any $f \in \Lambda$, and more generally

$$
\Delta f=\sum_{\mu} u_{\mu}^{\perp} f \otimes v_{\mu}
$$

whenever $\left(u_{\mu}\right),\left(v_{\mu}\right)$ are dual bases of $\Lambda$.
(c) The ring $\Lambda \otimes \Lambda$ carries a scalar product, defined by

$$
\left\langle f_{1} \otimes g_{1}, f_{2} \otimes g_{2}\right\rangle=\left\langle f_{1}, f_{2}\right\rangle\left\langle g_{1}, g_{2}\right\rangle
$$

for $f_{1}, f_{2}, g_{1}, g_{2} \in \Lambda$. With respect to this scalar product, the diagonal map $\Delta: \Lambda \rightarrow$ $\Lambda \otimes \Lambda$ is the adjoint of the multiplication map $\Lambda \otimes \Lambda \rightarrow \Lambda$ (i.e. $f \otimes g \rightarrow f g$ ). In other words,

$$
\langle\Delta f, g \otimes h\rangle=\langle f, g h\rangle
$$

for all $f, g, h \in \Lambda$. (By linearity it is enough to check that $\left\langle\Delta s_{\lambda}, s_{\mu} \otimes s_{\nu}\right\rangle=\left\langle s_{\lambda}, s_{\mu} s_{\nu}\right\rangle$, which follows from (b) above together with (5.1) and (4.8).) Also the counit $\varepsilon: \Lambda \rightarrow \mathbf{Z}$ is the adjoint of the natural embedding $e: \mathbf{Z} \rightarrow \Lambda$ with respect to the scalar product $\langle m, n\rangle=m n$ on $\mathbf{Z}$.
These properties signify that the Hopf algebra $\Lambda$ is self-dual.
(d) It follows easily from (c) that if $f \in \Lambda$ and $\Delta f=\sum a_{i} \otimes b_{i}$ then

$$
f^{\perp}(g h)=\sum_{i} a_{i}^{\perp}(g) b_{i}^{\perp}(h)
$$

for all $g, h \in \Lambda$. In particular,

$$
s_{\lambda}^{\perp}(g h)=\sum_{\mu, \nu} c_{\mu \nu}^{\lambda} s_{\mu}^{\perp}(g) s_{\nu}^{\perp}(h)
$$

(e) From (c) it also follows that an element $p \in \Lambda^{n}(n \geqslant 1)$ is primitive (i.e. $\Delta p=p \otimes 1+1 \otimes p$ ) if and only if $p$ is orthogonal to all products $f g$, where $f, g \in \Lambda$ are homogeneous of positive degree. In particular, $\left\langle p, h_{\lambda}\right\rangle=0$ for all partitions $\lambda$
of $n$ except $\lambda=(n)$. Since $\left(h_{\lambda}\right)$ and $\left(m_{\lambda}\right)$ are dual bases of $\Lambda$, it follows that $p$ is a scalar multiple of $p_{n}$. Hence the $p_{n}(n \geqslant 1)$ are a $\mathbf{Z}$-basis of the space of primitive elements of $\Lambda$.
26. The identities (4.3) and (4.3') can be generalized as follows: for any two partitions $\lambda, \mu$ we have

$$
\begin{align*}
\sum_{\rho} s_{\rho / \lambda}(x) s_{\rho / \mu}(y) & =\prod_{i, j}\left(1-x_{i} y_{j}\right)^{-1} \sum_{\tau} s_{\mu / \tau}(x) s_{\lambda / \tau}(y)  \tag{1}\\
\sum_{\rho} s_{\rho / \lambda^{\prime}}(x) s_{\rho^{\prime} / \mu}(y) & =\prod_{i, j}\left(1+x_{i} y_{j}\right) \sum_{\tau} s_{\mu^{\prime} / \tau}(x) s_{\lambda / \tau^{\prime}}(y) \tag{2}
\end{align*}
$$

(By applying the involution $\omega$ to the symmetric functions of the $x$ variables we see that (2) follows from (1), so it is enough to prove (1). Let $P(x, y)=\Pi_{i, j}\left(1-x_{i} y_{j}\right)^{-1}$ and let $(x),(y),(z)$, and $(u)$ be four sets of independent variables. We shall decompose the product

$$
P=P(x, y) P(x, u) P(z, y) P(z, u)
$$

in two different ways.
Firstly, from (4.3) and (5.9) we have
(a)

$$
P=\sum_{\rho} s_{\rho}(x, z) s_{\rho}(y, u)=\sum_{\rho, \lambda, \mu} s_{\rho / \lambda}(x) s_{\rho / \mu}(y) s_{\lambda}(z) s_{\mu}(u) .
$$

On the other hand, using (4.3) and (5.9) we see that
(b)

$$
\begin{aligned}
P & =P(x, y) \sum_{\sigma, \nu, \tau} s_{\sigma}(x) s_{\sigma}(u) s_{\nu}(y) s_{\nu}(z) s_{\tau}(z) s_{\tau}(u) \\
& =P(x, y) \sum_{\sigma, \nu, \tau, \lambda, \mu} c_{\sigma \tau}^{\mu} s_{\sigma}(x) c_{\nu \tau}^{\lambda} s_{\nu}(y) s_{\lambda}(z) s_{\mu}(u) \\
& =P(x, y) \sum_{\tau, \lambda, \mu} s_{\mu / \tau}(x) s_{\lambda / \tau}(y) s_{\lambda}(z) s_{\mu}(u) .
\end{aligned}
$$

Now compare the coefficients of $s_{\lambda}(z) s_{\mu}(u)$ in (a) and (b).)
In view of Example 25 we may say that (1) is obtained from (4.3) by applying the diagonal map $\Delta$.
27. (a) By applying the same arguments as in Example 26 to the identities of Examples 4 and 5 we obtain

$$
\begin{align*}
\sum_{\rho} s_{\rho / \lambda} & =\prod_{i}\left(1-x_{i}\right)^{-1} \prod_{i<j}\left(1-x_{i} x_{j}\right)^{-1} \sum_{\tau} s_{\lambda / \tau}  \tag{3}\\
\sum_{\rho \text { even }} s_{\rho / \lambda} & =\prod_{i<j}\left(1-x_{i} x_{j}\right)^{-1} \sum_{\tau \text { even }} s_{\lambda / \tau},  \tag{4}\\
\sum_{\rho^{\prime} \text { even }} s_{\rho / \lambda} & =\prod_{i<j}\left(1-x_{i} x_{j}\right)^{-1} \sum_{\tau^{\prime} \text { even }} s_{\lambda / \tau} . \tag{5}
\end{align*}
$$

(b) Likewise, from the identities of Example 9 we obtain

$$
\begin{align*}
\sum_{\pi} s_{\pi / \lambda} & =\prod_{i<j}\left(1+x_{i} x_{j}\right) \sum_{\rho} s_{\lambda^{\prime} / \rho},  \tag{6}\\
\sum_{\rho} s_{\rho / \lambda} & =\prod_{i<j}\left(1+x_{i} x_{j}\right) \sum_{\pi} s_{\lambda^{\prime} / \pi},  \tag{7}\\
\sum_{\sigma} a_{\sigma} s_{\sigma / \lambda}(x) & =\prod_{i<j}\left(1-x_{i}\right) \prod_{i<j}\left(1-x_{i} x_{j}\right) \sum_{\sigma} a_{\sigma} s_{\lambda^{\prime} / \sigma}(-x) . \tag{8}
\end{align*}
$$

Here, as in Example 9, $\pi$ runs through partitions of the form ( $\alpha_{i}-1, \ldots, \alpha_{p}-1$ $\alpha_{1}, \ldots, \alpha_{p}$ ) in Frobenius notation; $\rho$ through partitions of the form ( $\alpha_{1}, \ldots, \alpha_{\rho} \mid$ $\alpha_{1}-1, \ldots, \alpha_{p}-1$ ); $\sigma$ through self-conjugate partitions ( $\alpha_{1}, \ldots, \alpha_{p} \mid \alpha_{1}, \ldots, \alpha_{p}$ ); and finally $a_{\sigma}=(-1)^{(|\sigma|+p) / 2}$.
28. Show that
(a)

$$
\sum_{p, \lambda} q^{|\rho|} s_{\rho / \lambda}(x) s_{\rho / \lambda}(y)=\prod_{i>1}\left(\left(1-q^{i}\right)^{-1} \prod_{j, k}\left(1-q^{i} x_{j} y_{k}\right)^{-1}\right)
$$

(b)

$$
\sum_{\rho, \lambda} q^{|\rho|} s_{\rho^{\prime} / \lambda}(x) s_{\rho / \lambda^{\prime}}(y)=\prod_{i>1}\left(\left(1-q^{i}\right)^{-1} \prod_{j, k}\left(1+q^{i} x_{j} y_{k}\right)\right),
$$

(c)

$$
\sum_{\rho, \lambda} q^{|\rho|} s_{\rho / \lambda}(x) s_{\rho^{\prime} / \lambda}(y)=\prod_{i>1}\left(\left(1+q^{2 i-1}\right) \prod_{j, k} \frac{1+q^{2 i-1} x_{j} y_{k}}{1-q^{2 i} x_{j} y_{k}}\right) .
$$

(Let $F(x, y)$ denote the left-hand side of (a). Then it follows from equation (1) in Example 26 that

$$
F(x, y)=\prod_{j, k}\left(1-q x_{j} y_{k}\right)^{-1} \cdot F(q x, y)
$$

and hence that

$$
F(x, y)=\prod_{i>1} \prod_{j, k}\left(1-q^{i} x_{j} y_{k}\right)^{-1} \cdot F(0, y) .
$$

But

$$
\begin{aligned}
F(0, y) & =\sum_{\rho, \lambda} q^{|\rho|} s_{\rho / \lambda}(0) s_{\rho / \lambda}(y)=\sum_{\rho} q^{|\rho|} \\
& =\prod_{i>1}\left(1-q^{i}\right)^{-1}
\end{aligned}
$$

and (a) is proved.
The identity (b) follows from (a) by applying the involution $\omega$ to the symmetric functions of the $x$ 's.

Finally, let $G(x, y)$ denote the left-hand side of (c). Again from Example 26 we obtain

$$
G(x, y)=\prod_{j, k}\left(1+q x_{j} y_{k}\right) \cdot \omega_{y} G(q x, y)
$$

where $\omega_{y}$ is the involution $\omega$ acting on symmetric functions in the $y$ variables, and hence

$$
G(x, y)=\prod_{j, k} \frac{1+q x_{j} y_{k}}{1-q^{2} x_{j} y_{k}} \cdot G\left(q^{2} x, y\right)
$$

The proof may now be completed as in (a) above.)
29. With the notation of Example 3, let

$$
\begin{aligned}
& E^{\perp}(t)=\sum_{n>0} e_{n}^{\perp} t^{n} \\
& H^{\perp}(t)=\sum_{n>0} h_{n}^{\perp} t^{n}
\end{aligned}
$$

Both $E^{\perp}(t)$ and $H^{\perp}(t)$ map $\Lambda$ into $\Lambda[t]$, and $H^{\perp}(t) \omega=\omega E^{\perp}(t)$.
(a) Show that $E^{\perp}(t)$ and $H^{\perp}(t)$ are ring homomorphisms. (Use Example 25(a), (d).)
(b) Since $h_{m}^{\perp}\left(h_{n}\right)=h_{n-m}$ (with the usual convention that $h_{r}=0$ if $r<0$ ) it follows that

$$
\begin{align*}
H^{\perp}(t)(H(u)) & =\sum_{m, n>0} h_{n-m} t^{m} u^{n}  \tag{1}\\
& =(1-t u)^{-1} H(u)
\end{align*}
$$

and hence, using (a) above, that

$$
H^{\perp}(t)(H(u) f)=(1-t u)^{-1} H(u) H^{\perp}(t) f
$$

for all $f \in \Lambda$, so that

$$
\begin{equation*}
H^{\perp}(t) \circ H(u)=(1-t u)^{-1} H(u) \circ H^{\perp}(t) \tag{2}
\end{equation*}
$$

where $H(u)$ is regarded as a multiplication operator.
Show likewise that

$$
\begin{equation*}
H^{\perp}(t) \circ E(u)=(1+t u) E(u) \circ H^{\perp}(t), \tag{3}
\end{equation*}
$$

$$
\begin{equation*}
E^{\perp}(t) \circ E(u)=(1-t u)^{-1} E(u) \circ E^{\perp}(t) \tag{4}
\end{equation*}
$$

$$
\begin{equation*}
E^{\perp}(t) \circ H(u)=(1+t u) H(u) \circ E^{\perp}(t) . \tag{5}
\end{equation*}
$$

(c) For all $f \in \Lambda$ we have

$$
H^{\perp}(t) f\left(x_{1}, x_{2}, \ldots\right)=f\left(t, x_{1}, x_{2}, \ldots\right)
$$

(By (a) above, it is enough to prove this when $f=h_{n}$, in which case it follows from (1).)
(d) Now define

$$
\begin{aligned}
B(t) & =\sum_{n \in \mathrm{Z}} B_{n} t^{n}=H(t) \circ E^{\perp}\left(-t^{-1}\right) \\
B^{\perp}(t) & =\sum_{n \in \mathrm{Z}} B_{n}^{\perp} t^{n}=E\left(-t^{-1}\right) \circ H^{\perp}(t)
\end{aligned}
$$

so that

$$
\begin{aligned}
& B_{n}=\sum_{r \geqslant 0}(-1)^{r} h_{n+r} \circ e_{r}^{\perp}, \\
& B_{n}^{\perp}=\sum_{r \geqslant 0}(-1)^{r} e_{r} \circ h_{n+r}^{\perp} .
\end{aligned}
$$

Each $B_{n}$ is a linear endomorphism of $\Lambda$, and $B_{n}{ }^{\perp}$ is the adjoint of $B_{n}$ with respect to the usual scalar product on $\Lambda$. Also $B_{n}^{\perp}=(-1)^{n} \omega B_{n} \omega$ for all $n \in \mathbf{Z}$.

Since

$$
\begin{aligned}
H(t) & =\exp \left(\sum_{n>1} \frac{1}{n} p_{n} t^{n}\right) \\
E(t) & =\exp \left(\sum_{n>1} \frac{(-1)^{n-1}}{n} p_{n} t^{n}\right)
\end{aligned}
$$

we have

$$
\begin{equation*}
B(t)=\exp \left(\sum_{n>1} \frac{1}{n} p_{n} t^{n}\right) \circ \exp \left(\sum_{n>1} \frac{-1}{n} p_{n}^{\perp} t^{-n}\right) \tag{6}
\end{equation*}
$$

More generally, if $t_{1}, \ldots, t_{n}$ are independent variables, let

$$
B\left(t_{1}, \ldots, t_{n}\right)=H\left(t_{1}\right) \ldots H\left(t_{n}\right) E^{\perp}\left(-t_{1}^{-1}\right) \ldots E^{\perp}\left(-t_{n}^{-1}\right)
$$

Deduce from (5) that

$$
B\left(t_{1}\right) \ldots B\left(t_{n}\right)=\prod_{i<j}\left(1-t_{i}^{-1} t_{j}\right) \cdot B\left(t_{1}, \ldots, t_{n}\right)
$$

and hence that

$$
\begin{equation*}
B\left(t_{1}\right) \ldots B\left(t_{n}\right) 1=\prod_{i<j}\left(1-t_{i}^{-1} t_{j}\right) H\left(t_{1}\right) \ldots H\left(t_{n}\right) \tag{7}
\end{equation*}
$$

Let $\lambda$ be a partition of length $\leqslant n$. By equating the coefficients of $t^{\lambda}$ on either side of (7), show that

$$
B_{\lambda_{1}} \ldots B_{\lambda_{n}}(1)=\prod_{i<j}\left(1-R_{i j}\right) h_{\lambda}
$$

and hence by (3.4") that

$$
s_{\lambda}=B_{\lambda_{1}} \ldots B_{\lambda_{n}}(1)
$$

(e) Let $\varphi(t u)=\Sigma_{n \in \mathbf{z}} t^{n} u^{n}$. Show that

$$
\begin{equation*}
H(t) E\left(-u^{-1}\right) \varphi(t u)=\varphi(t u) \tag{8}
\end{equation*}
$$

and deduce from (2), (4), and (8) that

$$
B(t) B^{\perp}(u)+t u B^{\perp}(u) B(t)=\varphi(t u)
$$

or equivalently

$$
B_{r} B_{s}^{\perp}+B_{s-1}^{\perp} B_{r-1}=\delta_{r s}
$$

for all $r, s \in \mathbf{Z}$.
30. With the notation of $\S 3$, Example 21 define, for any two partitions $\lambda$ and $\mu$

$$
\tilde{s}_{\lambda / \mu}=\operatorname{det}\left(\varphi^{\mu_{j}-j+1}\left(h_{\lambda_{i}-\mu_{j}-i+j}\right)\right)_{1 \leqslant i, j \leqslant m}
$$

where $m \geqslant \max (l(\lambda), l(\mu))$. (Thus $\tilde{s}_{\lambda / 0}=\tilde{s}_{\lambda}$ as defined loc. cit.). Show that $\tilde{s}_{\lambda / \mu}=0$ unless $\lambda \supset \mu$.
(a) Assume then that $\lambda \supset \mu$, and let $\theta=\lambda-\mu$. The function $\tilde{s}_{\theta}=\tilde{s}_{\lambda / \mu}$ depends not only on the skew shape $\theta$, but also on its location in the lattice plane. For each $(p, q) \in \mathbf{Z}^{2}$ let $\tau_{p, q}$ denote the translation $(i, j) \mapsto(i+p, j+q)$. Show that

$$
\tilde{s}_{\tau_{0,1}(\theta)}=\varphi \tilde{s}_{\theta}, \quad \tilde{s}_{\tau_{1,0}(\theta)}=\varphi^{-1} \tilde{s}_{\theta}
$$

and hence that

$$
\tilde{s}_{\tau_{p, q}(\theta)}=\varphi^{q-p} \tilde{s}_{\theta}
$$

In particular, $\tilde{s}_{\theta}$ is invariant under diagonal translation $(p=q)$.
(b) Let $\hat{\theta}$ be the result of rotating $\theta$ through $180^{\circ}$ about a point on the main diagonal. Show that $\tilde{s}_{\hat{\theta}}=\varepsilon \tilde{s}_{\theta}$, where $\varepsilon$ is the involution defined by $\varphi^{s} h_{r} \mapsto \varphi^{1-r-s} h_{r}$.
(c) Let $\theta^{\prime}=\lambda^{\prime}-\mu^{\prime}$ be the reflection of $\theta$ in the main diagonal. Show that $\tilde{s}_{\theta^{\prime}}=\omega \tilde{s}_{\theta}$, where $\omega$ is the involution (§3, Example $21(\mathrm{c})$ ) defined by $\omega\left(\varphi^{s} h_{r}\right.$ ) $=\varphi^{-s} e_{r}$ for all $r, s$. Equivalently,

$$
s_{\lambda / \mu}=\operatorname{det}\left(\varphi^{-\mu_{j}^{\prime}+j-1}\left(e_{\lambda_{i}^{\prime}-\mu_{j}^{\prime}-i+j}\right)\right)
$$

(The proof is the same as that of (2.9), using the relation $E=H^{-1}$ of $\S 3$, Example 21(a).)
(d) Extend the results of Examples 20, 21, and 22 to the present situation. (Example 20 goes through unchanged; so does Example 21(a), provided that the contents (§1) of the squares $a, b$ are related by $c(b)=c(a)+1$. In Example 21(c), the matrices $H_{\alpha}$ and $E_{\beta}$ should now read

$$
H_{\alpha}=\left(\varphi^{\alpha_{j}+1} h_{\alpha_{i}-\alpha_{j}}\right), \quad E_{\beta}=\left(\varphi^{-\beta_{i}-1} e_{\beta_{j}-\beta_{i}}\right)
$$

In Example 22(a), the matrices $H_{\alpha, \gamma}$ and $E_{\beta, \varepsilon}$ should now read

$$
\left.H_{\alpha, \gamma}=\left(\varphi^{\gamma+1} h_{\alpha_{i}-\gamma_{j}}\right), \quad E_{\beta, \varepsilon}=\left(\varphi^{-\varepsilon_{i}-1} e_{\beta_{j}-\varepsilon_{1}}\right) .\right)
$$

31. As usual let $H(t)=\Sigma_{n>0} h_{n} t^{n}$, and assume that the $h_{n}$ are real numbers (with $h_{0}=1$ ). The power series $H(t)$ is called a $P$-series if $s_{\lambda}=\operatorname{det}\left(h_{\lambda_{i}-i+j}\right) \geqslant 0$ for all partitions $\lambda$. In particular, the coefficients $h_{n}$ are $\geqslant 0$.
(a) If $H(t)$ is a $P$-series, so also is $H(-t)^{-1}$.
(b) The product of $P$-series is a $P$-series. (Use (5.9) and the fact that the coefficients $c_{\mu \nu}^{\lambda}$ are $\geqslant 0$.)
(c) If $H(t)$ is a $P$-series and $h_{n}=0$ for some $n$, then $H(t)$ is a polynomial of degree $<n$. (For $h_{n+1} \leqslant h_{1} h_{n}$ since $s_{(n, 1)} \geqslant 0$, and hence $h_{n+1}=0$.)
(d) Every $P$-series has a positive radius of convergence. (We may assume that $H(t)$ is not a polynomial, hence $h_{n}>0$ for all $n \geqslant 1$, by (c) above. Since $s_{\left(n^{2}\right)} \geqslant 0$ we have $h_{n+1} / h_{n} \leqslant h_{n} / h_{n-1}$, and hence the sequence of positive real numbers $h_{n+1} / h_{n}$ converges.)
(e) Let $\Sigma_{n>1} x_{n}$ be a convergent series of positive real numbers. Then $H(t)=$ $\Pi\left(1-x_{n} t\right)^{-1}$ is a $P$-series (by (5.12)).
(f) If $a>0, e^{a t}$ is a $P$-series. (For $s_{\lambda}=a^{|\lambda|} / h(\lambda)>0$, by $\S 3$, Example 5.)

From (a), (b), (e), and (f) it follows that any $H(t)$ of the form

$$
H(t)=e^{a t} \prod_{n=1}^{\infty} \frac{1+x_{n} t}{1-y_{n} t}
$$

where $a>0$ and $\Sigma x_{n}, \Sigma y_{n}$ are convergent series of positive terms, is a $P$-series. Conversely, every $P$-series is of this form (but this is harder to prove: see [T3]).

## Notes and references

Example 2. The fact that the number of standard tableaux of shape $\lambda$ is equal to $n!/ h(\lambda)$ is due to Frame, Robinson, and Thrall [F8]. For a purely combinatorial proof, see [F9], and for a probabilistic proof see [G15] or [S2].

Example 3. The operators $e_{n}^{\perp}, h_{n}^{\perp}$ were introduced by Hammond [H4], and the $s_{\lambda}^{\perp}$ by Foulkes [F5], in both cases defined as differential operators. See also Foulkes [F7].

Example 4. This identity is usually ascribed to Littlewood [L9], p. 238; however, in an equivalent form it was stated by Schur in 1918 (Ges. Abhandlungen, vol. 3, p. 456). Bender and Knuth found an elegant combinatorial proof (reproduced in [S23], p. 177), using the properties of Knuth's correspondence.

Examples 5 and 9. These identities are all due to Littlewood [L9]. The observation that the identities of Example 9 follow naturally from Weyl's identity for the classical root systems is, I believe, new.

Examples 13, 14, and 15. Plane partitions were first investigated by MacMahon [M9], and the generating functions (1), (3), and (4) of Example 13 are due originally to him, but proved differently. The application of Schur functions to these problems is due to Stanley [S23], who gives more details and references.
Examples 16 and 17. MacMahon [M9] conjectured the generating function (Example 17, (4)) for symmetrical plane partitions, but was unable to prove it. It remained a conjecture until proved by Andrews [A4].

Example 18. For an account of recent developments in the study of generating functions of plane partitions satisfying prescribed symmetry conditions, see Stembridge [S31] and the references given there.

Example 19. The generating function (7) was established by Gordon (see Stanley [S23], p. 265) who did not publish his proof. It too was proved by Andrews [A4].
Examples 20, 21, and 22. These results are due to A. Lascoux and P. Pragacz [L2], [L3]. Examples 21(a) and (b) were contributed by A. Zelevinsky to the Russian translation of the first edition of this book.

Examples 25, 26, and 27. These examples were also contributed by A. Zelevinsky. The Hopf algebra structure on $\Lambda$ (Example 25) is discussed in [G6], and it is shown in [Z2] that the whole theory of symmetric functions can be systematically derived from this structure. The results of Examples 26 and 27 appear to have been discovered independently by various people (Lascoux, Towber, Stanley, Zelevinsky).
Example 29. The operators $B_{n}$ were introduced by J. N. Bernstein (see [Z2], p. 69).

