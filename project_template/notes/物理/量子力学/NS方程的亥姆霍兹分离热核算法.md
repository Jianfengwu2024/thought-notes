# NS方程的亥姆霍兹分离热核算法

## 1. 热核求解的原理

我们考虑**自伴**算子$\hat L$ 对应的热核方程：
$$
(\partial_t + \hat L)u(t,{\bf x}) = h({t,\bf x})\\
u(0,{\bf x}) = f({\bf x}) \label{heat-kernel-equation}
$$
将 $h(t,{\bf x})$ 看作是一个密度分布（源分布）。那么无源方程
$$
(\partial_t + \hat L)\hat U = 0
$$
的算子形式解为：
$$
\hat U(t,t')= e^{-(t-t')\hat L}
$$
我们选定 $\hat L$ 的本征矢:
$$
\hat L|n \rangle  = \lambda_n |n\rangle,\quad \langle n|\hat L = \langle n|\lambda_n\quad \langle n|m\rangle = \delta_{n,m}
$$
这里就体现了自伴性的重要作用，左态和右态在 $\hat L$ 作用下得到的本征值是一样的。如果 $\hat L$ 不是一个自伴算符，必须第一步将其转化为自伴算符才能进行热核求解。将上面这些本征基矢转换到位形空间，得到在位形空间的本征矢：
$$
\varphi_n({\bf x}) = \langle {\bf x}|n\rangle,\quad \varphi^*_n({\bf x}) =  \langle n|{\bf x}\rangle
$$
其正交归一关系为：
$$
\int d^dx'\varphi^*_n({\bf x}) \varphi_m({\bf x'}) =\delta_{n,m}\delta^d({\bf x} -{\bf x'})
$$
其中上标 $d$ 是空间维度，在这里是指的二维。因此，我们可以知道 $\hat U$ 在坐标表象下的表达式：
$$
\begin{aligned}
U(t,{\bf x}\vert t' ,{\bf x'}) &= \sum_{n,m} \langle {\bf x'}|n\rangle \langle n| e^{-(t-t')\hat L}|m\rangle\langle m|{\bf x'}\rangle \\
&=\sum_n \langle {\bf x'}|n\rangle e^{-(t-t')\lambda_n}\langle n|{\bf x'}\rangle \\&= \sum_n e^{-(t-t')\lambda_n}\varphi_n^*({\bf x'})\varphi_n({\bf x})
\end{aligned}
$$
有了这个坐标表象表达，$(\ref{heat-kernel-equation})$ 的有源解就可以用格林函数法表达出来：
$$
\begin{aligned}
u(t,{\bf x}) &= \int d^d x' U(t,{\bf x}|0,{\bf x'}) f(\bf x') \\
& + \int_0^t dt'\int d^dx' U(t,{\bf x}|t',{\bf x'}) h(t',{\bf x'})
\end{aligned}
$$

## 2. NS 方程的热核求解

$$
\hat L = -\alpha^{ij}(x)\partial_i\partial_j + \beta^j(x)\partial_j + \gamma(x) \label{self-adjoint-operator}
$$

在NS运动方程下，对应的二阶算子的系数为：
$$
\alpha_{i,j} = \nu \delta_{i,j}, \quad \beta^i = u^i(x,y)
$$
对 $(\ref{self-adjoint-operator})$ 做两次分步积分，就可以得到其伴随算子：
$$
\hat L^* = -\alpha^{ij}\partial_i\partial_j + \tilde{\beta}^j\partial_j + \tilde\gamma
$$
其中：
$$
\begin{aligned}\tilde{\beta}^j &= -\bar\beta^j - 2\mu^{-1}\partial_i(\mu\alpha^{ij})\\
\tilde \gamma &= \bar \gamma - \mu^{-1}\partial_i\partial_j(\mu\alpha^{ij}) - \mu^{-1}\partial_i(\mu\bar\beta^i)
\end{aligned}
$$
要使得自伴能够实现
$$
\tilde\beta = \beta,\quad \tilde\gamma = \gamma
$$
因此，简单验证可知在NS方程的情形下，$\mu$ 不能是一个常数。 $\beta^i = u^{i}(x,y)$ 是一个实函数。因此根据 $(4)$ ，可知：
$$
2 u_i = -2 \nu \delta^{i,j} \partial_j(\ln \mu)
$$
也即 
$$
{\bf u} = -\nu {\bf \nabla}(\ln \mu)
$$
上式代表的是一个无旋速度场，这说明如果强行要将NS方程改写为自伴算符（消除左右作用不对称），再应用热核展开的话，只能得到NS方程的无旋解。因此对于完整的速度场 $\bf u$ ，我们可以做如下的分解：
$$
{\bf u } = -\nu {\bf \nabla} (\ln \mu) + \tilde {\bf u} \label{velocity-decomposition}
$$
$\tilde{\bf u}$ 代表的是速度的有旋部分。在流质没有发生变化的情况下，${\bf \nabla}\cdot {\bf u} = 0$ 。我们可以让 $\tilde{\bf u}$ 取为某个矢量场的旋度，即：
$$
\tilde {\bf u} = {\bf \nabla} \times \bf{A}
$$
我们同样定义标势 
$$
\phi = -\nu\ln\mu
$$
那么$(\ref{velocity-decomposition})$ 就可以写成一个非常类似于电磁场的形式：
$$
{\bf u } = {\bf u}_{\text{E}} + {\bf u}_{\text{B}}\\
{\bf u}_{\text{E}} = {\bf \nabla} \phi,\quad {\bf u}_{\text{B}}={\bf \nabla} \times {\bf A}
$$
我们可以分别写下 ${\bf u}_{\text{E}},{\bf u}_{\text{B}}$ 所满足的运动方程：
$$
\begin{aligned}
&{\bf \nabla}\cdot {\bf u}_{\text{E}} = 0\\
&{\bf \nabla\cdot{\bf u}_{\text{B}}} =0\\
&\left(\partial_t-\nu {\bf\nabla}^2+{\bf u}_{\text{E}}\cdot{\bf \nabla}\right){\bf u} = -\frac{{\bf \nabla }p}{\rho} +{\bf g}\\
&\left(\partial_t-\nu {\bf\nabla}^2+{\bf u_{\text{E}}}\cdot{\bf \nabla}\right){\bf w} ={\bf \nabla}\times{\bf g}
\end{aligned}\label{Maxwell-NS-equation}
$$
注意上式即 $(\ref{Maxwell-NS-equation})$ 的第三个分式左边的微分算子作用在整个 $\bf u$ 上，而不仅仅是 ${\bf u}_{\text{E}}$ 上。由于梯度旋度完全分离，所以
$$
{\bf u}_\text{B}\cdot{\bf \nabla} = ({\bf \nabla \times A})\cdot{\bf\nabla}=0 \,.
$$
我们将 $(\ref{Maxwell-NS-equation})$ 称为MNS方程组（Maxwell-Navier-Stokes equations）。求解MNS 方程组的起点是首先求解MNS方程组的最后一个方程，也就是涡量方程。由它解得的速度磁分量 ${\bf u}_{\text{B}}$ , 代入到MNS方程组的第三个方程中，且令：
$$
{\bf u}_{\text{E}} = -\mu^{-1}{\bf \nabla} \mu,\quad \gamma = {\bf u}_{\text{E}}\cdot{\bf \nabla} {\bf u}_{\text{B}}
$$
由于
$$
\begin{aligned}
{\bf\nabla}\cdot {\bf u}_{\text{E}} &= 0 ,\quad \alpha^{ij} = \delta_{i,j},\quad {\bf \beta} = {\bf u}_{\text{E}}\quad \Rightarrow\\
\gamma-\bar\gamma &= - \mu^{-1}\partial_i\partial_j(\mu\alpha^{ij}) - \mu^{-1}\partial_i(\mu\bar\beta^i)\\
& = -{\bf u}_{\text{E}}\cdot{\bf u}_{\text{E}}+{\bf u}_{\text{E}}\cdot{\bf u}_{\text{E}}\equiv 0
\end{aligned}
$$
因此MNS方程组的第三个方程的算子自伴性能够严格得到满足！因此MNS第三第四方程都能够用热核展开来近似求解。但是我们实际求解中，由于并不清楚 ${\bf u}_{\text{E}}$ 是多少，所以MNS方程的求解从一开始就会遇到困难。但是实际上，MNS方程可以继续简化，其第四个方程可以直接扔掉 ${\bf u}_{\text{E}}$ 求解。即我们求解
$$
\left(\partial_t-\nu{\bf \nabla}^2\right){\bf w} = {\bf \nabla\times g} \label{MNS4}
$$
这相当于让 ${\bf u}_\text{E} = 0$ 求解其涡量方程，对于涡量 ${\bf w=\nabla\times u}$ 来说，有没有 ${\bf u}_{\text{E}}$ 没有任何影响。上式是一个典型的热传导方程。其热核为：
$$
U(t,x,y) = \frac{1}{4\pi \nu t}e^{-\frac{x^2+y^2}{4\nu t}}
$$
令
$$
{\bf w}(0,x,y) = {\bf \nabla}\times {\bf u}(t_0,x,y)
$$
那么方程 $(\ref{MNS4})$ 严格解为：
$$
\begin{aligned}{\bf w}(t,x,y) &= \int U(t,x-x',y-y') {\bf w}(0,x',y') dx'dy'\\
&+ \int_0^t\int U(t-\tau,x-x',y-y')\left({\bf \nabla\times g}(\tau,x',y')\right)d\tau dx'dy'\label{vorticity-equation}\end{aligned}
$$

## 附录A: 标度变换后的热核

我们将 $\nu{\bf\nabla}^2$ 项重标度为 $\tilde{\bf\nabla}^2$ , 即令：
$$
\partial_{\tilde x} = \sqrt{\nu}\partial_x,\quad\partial_{\tilde y} = \sqrt \nu \partial_y
$$
因此由内积关系：
$$
\langle\partial_{\tilde x},d\tilde x\rangle = \langle\partial_{\tilde y},d\tilde y\rangle = 1
$$
得到：
$$
d\tilde x =\frac{1}{\sqrt{\nu}} d x,\quad d\tilde y = \frac{1}{\sqrt\nu} dy
$$
相应的热核为：
$$
U(t,\tilde x,\tilde y) = \frac{1}{4\pi t}\exp\left(-\frac{\tilde x^2+\tilde y^2}{4t}\right)
$$
将 ${\bf u}_{\text B}(t,x,y)$ 的初值，即 ${\bf u}_{\text B}(0,x,y)$ 代入到热核解中，
$$
{\bf w}_{\text B}(t,x,y) = \int_{-\pi/\sqrt\nu}^{\pi/\sqrt\nu} d\tilde x \int_{-\pi/\sqrt\nu}^{\pi/\sqrt\nu} d\tilde y\frac{1}{4\pi t}\left[\exp\left(-\frac{\tilde x^2+\tilde y^2}{4t}\right) {\bf w}_{\text B}(0,x,y)\right]
$$
要想计算上面的积分，可以将其返回到 $(x,y)$ 平面，但这样做问题就回到了原点。所以只能将 ${\bf w}_{\text B}(0,x,y)$ 转化为${\bf w}_{\text B}(0,\tilde x,\tilde y)$, 在 $(\tilde x, \tilde y)$ 积分。求得积分值之后再做逆变换。在 $(\tilde x, \tilde y)$ 平面上，任何一个点处的 ${\bf w}_{\text B}(0,\tilde x,\tilde y)$ 都必须通过$x = \sqrt\nu \tilde x, y = \sqrt \nu \tilde y$ 来拖回到 $(x,y)$ 平面的定义值 ${\bf w}_{\text B}(t,x,y)$ 上，这其实意味着要将原先的格子加密 $1/\nu$ 倍！

## 附录B: 自伴性的协变形式

对于NS方程而言，其椭圆微分算符为：
$$
L = -\nu{\bf\nabla}^2 + {\bf u}\cdot{\bf \nabla} \label{ns-elliptic-operator}
$$
按照标准的自伴算符写法 $(\ref{self-adjoint-operator})$ ，我们得到：天6
$$
\alpha^{ij} = \nu\delta^{ij},\quad \beta^j = u^j,\quad j\in\{1,2\}
$$
单纯的按照[^IGA]的方法来做的话，会得到如下的条件约束：
$$
{\bf u} = -\nu{\bf \nabla} \ln \mu
$$
其中 $\mu(x,y)$ 为积分测度，可以将它看作是一个背景标量场。在求积分时作要对所有被积函数乘上这个测度再积分。这意味着速度场只能是一个梯度场，这显然是违反物理的。因此我们引入一个矢量场 $\bf A$ 来扩展微分的定义，即将微分算子$\bf \partial$ 改写为：
$$
{\bf \partial} \rightarrow {\bf \mathcal D} = {\bf \partial} -{\bf A}
$$
借由这个矢量场 $\bf A$ 解析出 $\bf u$ 的非梯度贡献。容易证明
$$
\tilde L = -\sum_{i,j=1}^2 \mu^{-1}\mathcal D_i\mu\alpha^{ij}\mathcal D_j + Q, \quad Q\in \mathbb R \label{cov-self-adj}
$$
一定是一个自伴算符。由于现在存在一个额外的矢量场 $\bf A$ 自由度，我们可以将单纯梯度场无法解析出来的物理用 $\bf A $ 解析出来。将 $(\ref{cov-self-adj})$ 展开得到：
$$
\begin{aligned}
\tilde L &= -\nu \sum_{i=1}^2 \mu^{-1}\mathcal{D}_i[\mu\mathcal{D}_i\cdot] + Q \\
&= -\nu \sum_{i=1}^2\mu^{-1}(\partial_i-A_i)[\mu(\partial_i-A_i)\cdot] +Q
\\ & = -\nu\left[(\mu^{-1}\partial_i\mu) \partial^i-(\mu^{-1}\partial_i\mu) A^i -2A_i\partial^i \right. \\&\left.\qquad+A_iA^i +\partial_i\partial^i-\partial_iA^i \right] +Q\\
& 
\end{aligned}
$$
与 $(\ref{ns-elliptic-operator})$ 比较，可得如下的分解约束方程：
$$
u_i = -\nu \partial_i\ln \mu +2\nu A_i\\
Q = -\nu \mu^{-1}\partial_i(\mu A^i)  + A_i^2 \label{constraint-eq}
$$
由于对 $Q$ 的约束仅仅是它必须是实函数，我们这里是自动满足的。所以 $(\ref{constraint-eq})$ 只是两个约束方程，但我们有三个未知场，因此需要第三个约束方程来完全约束。对于不可压缩流体，我们有：
$$
\partial_i u^i = 0
$$
因此完全的约束方程为：
$$
u_i = -\nu \partial_i\ln \mu +2\nu A_i \\
\partial_i\partial^i\ln \mu = 2\partial_i A^i
$$
注意，上面的约束方程并不能完全确定 $\mu$ 和 $\bf A$ 。原因在于$\bf A$ 可以相差一个规范项 ${\bf \nabla}\varphi$，即: 
$$
{\bf A} \rightarrow {\bf A} + {\bf \nabla}\varphi,\quad{\bf \nabla}^2 \varphi = 0
$$
具体如何固定到某个$\varphi$ ，需要边界条件和初始条件共同确定。

## 参考文献

[^IGA]: Ivan G. Avramidi Heat Kernel Method and its Applications. Birkhauser Express,(2015), ISBN 978-3-319-26265-9, DOI: [https://doi.org/10.1007/978-3-319-26266-6](https://doi.org/10.1007/978-3-319-26266-6), 

