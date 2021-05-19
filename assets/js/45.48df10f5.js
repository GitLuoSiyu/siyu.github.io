(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{459:function(n,v,_){"use strict";_.r(v);var p=_(25),t=Object(p.a)({},(function(){var n=this,v=n.$createElement,_=n._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[_("h1",{attrs:{id:"贪心算法的局限性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#贪心算法的局限性"}},[n._v("#")]),n._v(" 贪心算法的局限性")]),n._v(" "),_("p",[n._v("任何算法都有它的局限性，贪心算法也如此，那么贪心算法能解决哪些问题呢？")]),n._v(" "),_("p",[n._v("问题：给定 n 种不同面值的硬币，分别记为 c[0], c[1], c[2], … c[n]，同时还有一个总金额\nk，编写一个函数计算出最少需要几枚硬币凑出这个金额 k？每种硬币的个数不限，且如果\n没有任何一种硬币组合能组成总金额时，返回 -1。")]),n._v(" "),_("p",[n._v("题目中有一个醒目的提示词，那就是“最少”。嗯，看起来这是一个求最值的问题，其实\n也好理解，如果题目不在这里设定这一条件，那么所求结果就不唯一了。")]),n._v(" "),_("p",[n._v("举个简单的例子，按照示例 1 的题设，有三种不同面值的硬币，分别为 c1=1, c2=2,\nc3=5，在没有“最少”这一前提条件下你能罗列出几种不同的答案？我在这里随意列出几\n个：")]),n._v(" "),_("p",[n._v("解1：输出：5，因为 5 + 2 + 2 + 2 + 1 = 12。\n解2：输出：6，因为 2 + 2 + 2 + 2 + 2 + 2 = 12。\n解3：输出：12，因为 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 = 12。")]),n._v(" "),_("p",[n._v("所以，这是一个求最值的问题。那么求最值的核心问题是什么呢？嗯，无非就是穷举，显\n然，就是把所有可能的凑硬币方法都穷举出来，然后找找看最少需要多少枚硬币，那么最\n少的凑法，就是这道题目的答案。")]),n._v(" "),_("p",[n._v("在面试中，一般来说穷举从来都不是一个好方法。除非你要的结果就是所有的不同组合，\n而不是一个最值。但即便是求所有的不同组合，在计算的过程中也仍然会出现重复计算的\n问题，我们将这种现象称之为重叠子问题。\n请你记住这个关键概念，它是动态规划当中的一个重要概念。但现在你只需要知道所谓重\n叠子问题就是：我们在罗列所有可能答案的过程中，可能存在重复计算的情况。我会在后\n续课程中与你深入探讨这个概念。")]),n._v(" "),_("p",[n._v("贪心算法")]),n._v(" "),_("p",[n._v("所谓贪心算法，就是指它的每一步计算作出的都是在当前看起来最好的选择，也就是说它\n所作出的选择只是在某种意义上的局部最优选择，并不从整体最优考虑。在这里，我把这\n两种选择的思路称作局部最优解和整体最优解。")]),n._v(" "),_("p",[n._v("因此，我们可以得到贪心算法的基本思路：")]),n._v(" "),_("p",[n._v("1.根据问题来建立数学模型，一般面试题会定义一个简单模型；")]),n._v(" "),_("p",[n._v("2.把待求解问题划分成若干个子问题，对每个子问题进行求解，得到子问题的局部最优\n解；")]),n._v(" "),_("p",[n._v("3.把子问题的局部最优解进行合并，得到最后基于局部最优解的一个解，即原问题的答\n案。")]),n._v(" "),_("p",[n._v("解题思路\n既然这道题问的是最少需要几枚硬币凑出金额 k，那么是否可以尝试使用贪心的思想来解\n这个问题呢？从面值最大的硬币开始兑换，最后得出的硬币总数很有可能就是最少的。")]),n._v(" "),_("p",[n._v("我用一个例子，带你看下整个贪心算法求解的过程，我们从 c[0]=5, c[1]=3 且 k=11 的情\n况下寻求最少硬币数。按照“贪心原则”，我们先挑选面值最大的，即为 5 的硬币放入钱\n包。接着，还有 6 元待解（即 11-5 = 6）。这时，我们再次“贪心”，放入 5 元面值的硬\n币。")]),n._v(" "),_("p",[n._v("这段代码就是简单地从最大的面值开始尝试，每次都会把当前面值的硬币尽量用光，然后\n才会尝试下一种面值的货币。")]),n._v(" "),_("p",[n._v("嗯。。。你有没有发现问题？那就是还剩 1 元零钱待找，但是我们只有 c[0]=5, c[1]=3 两\n种面值的硬币，怎么办？这个问题无解了，该返回 -1 了吗？显然不是。\n我们把第 2 步放入的 5 元硬币取出，放入面值为 3 元的硬币试试看。这时，你就会发现，\n我们还剩 3 元零钱待找。\n正好我们还有 c[1]=3 的硬币可以使用，因此解是 c[0]=5, c[1]=3, c[1]=3，即最少使用三\n枚硬币凑出了 k=11 这个金额。")]),n._v(" "),_("p",[n._v("我们对贪心算法做了改进，引入了回溯来解决前面碰到的“过于贪心”的问题。同样地，\n我把改进后的代码贴在这，你可以再看看跟之前算法实现的区别。")]),n._v(" "),_("p",[n._v("改进后的算法实现在之前的基础上增加上了一个回溯过程。简单地说就是多了一个递归，\n不断尝试用更少的当前面值来拼凑。只要有一个组合成功，我们就返回总数，如果所有组\n合都尝试失败，就返回 -1。\n嗯，这样就没问题了，对硬币找零问题来说，我们得到了理想的结果。")]),n._v(" "),_("p",[n._v("贪心算法的局限性")]),n._v(" "),_("p",[n._v("从上面这个例子我们可以看出，如果只是简单采用贪心的思路，那么到用完 2 个 5 元硬币\n的时候我们就已经黔驴技穷了——因为剩下的 1 元无论如何都没法用现在的硬币凑出来。\n这是什么问题导致的呢？\n这就是贪心算法所谓的局部最优导致的问题，因为我们每一步都尽量多地使用面值最大的\n硬币，因为这样数量肯定最小，但是有的时候我们就进入了死胡同，就好比上面这个例\n子。")]),n._v(" "),_("p",[n._v("所谓局部最优，就是只考虑“当前”的最大利益，既不向前多看一步，也不向后多看一\n步，导致每次都只用当前阶段的最优解。\n那么如果纯粹采用这种策略我们就永远无法达到整体最优，也就无法求得题目的答案了。\n至于能得到答案的情况那就是我们走狗屎运了。\n虽然纯粹的贪心算法作用有限，但是这种求解局部最优的思路在方向上肯定是对的，毕竟\n所谓的整体最优肯定是从很多个局部最优中选择出来的，因此所有最优化问题的基础都是\n贪心算法。\n回到前面的例子，我只不过是在贪心的基础上加入了失败后的回溯，稍微牺牲一点当前利\n益，仅仅是希望通过下一个硬币面值的局部最优达到最终可行的整体最优。")]),n._v(" "),_("p",[n._v("所有贪心的思路就是我们最优化求解的根本思想，所有的方法只不过是针对贪心思路的改\n进和优化而已。回溯解决的是正确性问题，而动态规划则是解决时间复杂度的问题。\n贪心算法是求解整体最优的真正思路源头，这就是为什么我们要在课程的一开始就从贪心\n算法讲起。")]),n._v(" "),_("p",[n._v("总结")]),n._v(" "),_("p",[n._v("硬币找零问题本质上是求最值问题。事实上，动态规划问题的一般形式就是求最值，而求\n最值的核心思想是穷举。这是因为只要我们能够找到所有可能的答案，从中挑选出最优的\n解就是算法问题的结果。\n在没有优化的情况下，穷举从来就不算是一个好方法。所以我带你使用了贪心算法来解\n题，它是一种使用局部最优思想解题的算法（即从问题的某一个初始解出发逐步逼近给定\n的目标，以尽可能快的速度去求得更好的解，当达到算法中的某一步不能再继续前进时，\n算法停止）。\n但是通过硬币找零问题，我们也发现了贪心算法本身的局限性：")]),n._v(" "),_("p",[n._v("不能保证求得的最后解是最佳的；")]),n._v(" "),_("p",[n._v("不能用来求最大或最小解问题；\n只能求满足某些约束条件的可行解的范围。")]),n._v(" "),_("p",[n._v("我们往往需要使用回溯来优化贪心算法，否则就会导致算法失效。因此，在求解最值问题\n时，我们需要更好的方法来解。在后面课程讲到递归和穷举优化问题的时候，我会讲到解\n决最值问题的正确思路和方法：考虑整体最优的问题。")]),n._v(" "),_("p",[n._v("们学习了贪心算法，提出了硬币找零的问题，发现了贪心算法的局限性。与此同\n时，我还提出了一个重要概念，那就是局部最优与整体最优的概念，即最优化问题。今\n天，我们就从最优化问题开始聊起，引出学习动态规划时的另一重要概念：递归。\n我们之前说过，贪心算法是求解整体最优的真正思路源头，这是为什么我们要在这门课程\n的一开始从贪心算法讲起。现在，你应该已经意识到贪心算法是有局限性的，它只能在局\n部最优的思想下工作，那么当贪心算法失效了怎么办？\n接下来我们就带着这个问题，开始学习今天的内容：递归！看看它能否更进一步地解决我\n们遇到的棘手问题，从整体最优的角度来解决算法问题。")]),n._v(" "),_("p",[n._v("从最优化问题到递归")]),n._v(" "),_("p",[n._v("贪心算法失效的很大一个原因在于它明显的局限性：它几乎只考虑局部最优解。所谓局部\n最优，就是只考虑当前的最大利益，既不向前多看一步，也不向后多看一步，导致每次都\n只用当前阶段的最优解。")]),n._v(" "),_("p",[n._v("因此在绝大多数情况下，贪心算法不能得到整体最优解，但它的解是最优解的一个很好近\n似。同时，也是所有讨论最优化问题的核心基础。")]),n._v(" "),_("p",[n._v("既然无法通过贪心算法达到整体最优，我们就得换一个思路了：我们得从整体最优的层面\n上解决这个难缠的算法问题。那么从何说起呢？我认为你应该先理解最优化问题的本质，\n然后再把这个思考扩展到递归问题上。话不多说，我们这就开始吧！")])])}),[],!1,null,null,null);v.default=t.exports}}]);