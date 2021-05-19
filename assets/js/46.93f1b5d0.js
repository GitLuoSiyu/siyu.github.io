(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{461:function(n,t,s){"use strict";s.r(t);var e=s(25),i=Object(e.a)({},(function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"贪心算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#贪心算法"}},[n._v("#")]),n._v(" 贪心算法")]),n._v(" "),s("h2",{attrs:{id:"_1-什么是贪心"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是贪心"}},[n._v("#")]),n._v(" 1. 什么是贪⼼")]),n._v(" "),s("p",[n._v("贪⼼的本质是选择每⼀阶段的局部最优，从⽽达到全局最优。")]),n._v(" "),s("blockquote",[s("p",[n._v("例如，有⼀堆钞票，你可以拿⾛⼗张，如果想达到最⼤的⾦额，你要怎么拿？指定每次拿最⼤的，最终结果就是拿⾛最⼤数额的钱。\n每次拿最⼤的就是局部最优，最后拿⾛最⼤数额的钱就是推出全局最优。\n再举⼀个例⼦如果是 有⼀堆盒⼦，你有⼀个背包体积为n，如何把背包尽可能装满，如果还每次选最⼤的盒⼦，就不⾏了。这时候就需要动态规划。")])]),n._v(" "),s("h2",{attrs:{id:"_2-贪心的套路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-贪心的套路"}},[n._v("#")]),n._v(" 2. 贪⼼的套路")]),n._v(" "),s("p",[n._v("贪⼼算法并没有固定的套路。所以唯⼀的难点就是如何通过局部最优，推出整体最优。最好⽤的策略就是举反例，如果想不到反例，那么就试⼀试贪⼼吧。")]),n._v(" "),s("h2",{attrs:{id:"_3-贪心一般解题步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-贪心一般解题步骤"}},[n._v("#")]),n._v(" 3. 贪⼼⼀般解题步骤")]),n._v(" "),s("p",[n._v("贪⼼算法⼀般分为如下四步：")]),n._v(" "),s("ul",[s("li",[n._v("将问题分解为若⼲个⼦问题")]),n._v(" "),s("li",[n._v("找出适合的贪⼼策略")]),n._v(" "),s("li",[n._v("求解每⼀个⼦问题的最优解")]),n._v(" "),s("li",[n._v("将局部最优解堆叠成全局最优解")])]),n._v(" "),s("h2",{attrs:{id:"_4-实战"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-实战"}},[n._v("#")]),n._v(" 4. 实战")]),n._v(" "),s("h4",{attrs:{id:"_4-1-455-分发饼干"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-455-分发饼干"}},[n._v("#")]),n._v(" 4.1 455.分发饼⼲")]),n._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[n._v("TIP")]),n._v(" "),s("p",[n._v("题⽬链接：https://leetcode-cn.com/problems/assign-cookies/\n"),s("br"),n._v("\n假设你是⼀位很棒的家⻓，想要给你的孩⼦们⼀些⼩饼⼲。但是，每个孩⼦最多只能给⼀块饼⼲。\n对每个孩⼦ i，都有⼀个胃⼝值 g[i]，这是能让孩⼦们满⾜胃⼝的饼⼲的最⼩尺⼨；并且每块饼⼲ j，都\n有⼀个尺⼨ s[j] 。如果 s[j] >= g[i]，我们可以将这个饼⼲ j 分配给孩⼦ i ，这个孩⼦会得到满⾜。你的⽬\n标是尽可能满⾜越多数量的孩⼦，并输出这个最⼤数值。")])]),n._v(" "),s("p",[n._v("为了了满⾜更多的⼩孩，就不要造成饼⼲尺⼨的浪费。⼤尺⼨的饼⼲既可以满⾜胃⼝⼤的孩⼦也可以满⾜胃⼝⼩的孩⼦，那么就应该优先满⾜胃⼝⼤的。\n这⾥的局部最优就是⼤饼⼲喂给胃⼝⼤的，充分利⽤饼⼲尺⼨喂饱⼀个，全局最优就是喂饱尽可能多的⼩孩。\n可以尝试使⽤贪⼼策略，先将饼⼲数组和⼩孩数组排序。然后从后向前遍历⼩孩数组，⽤⼤饼⼲优先满⾜胃⼝⼤的，并统计满⾜⼩孩数量。")]),n._v(" "),s("div",{staticClass:"language-c++ extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("class Solution {\npublic:\n    int findContentChildren(vector<int>& g, vector<int>& s) {\n        sort(g.begin(),g.end());\n        sort(s.begin(),s.end());\n        int index = 0;\n        for(int i = 0;i < s.size();++i){\n            if (index < g.size() && g[index] <= s[i]){\n                index++;\n            }\n        }\n        return index;\n    }\n};\n")])])]),s("div",{staticClass:"language-c++ extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("// 时间复杂度：O(nlogn)\n// 空间复杂度：O(1)\nclass Solution {\npublic:\n    int findContentChildren(vector<int>& g, vector<int>& s) {\n        sort(g.begin(), g.end());\n        sort(s.begin(), s.end());\n        int index = s.size() - 1; // 饼⼲数组的下表\n        int result = 0;\n        for (int i = g.size() - 1; i >= 0; i--) {\n            if (index >= 0 && s[index] >= g[i]) {\n                result++;\n                index--;\n            }\n        }\n        return result;\n    }\n};\n")])])]),s("h4",{attrs:{id:"_4-2-376-摆动序列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-376-摆动序列"}},[n._v("#")]),n._v(" 4.2 376. 摆动序列")]),n._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[n._v("TIP")]),n._v(" "),s("p",[n._v("题⽬链接：https://leetcode-cn.com/problems/wiggle-subsequence/\n"),s("br"),n._v("\n如果连续数字之间的差严格地在正数和负数之间交替，则数字序列称为摆动序列。第⼀个差（如果存在\n的话）可能是正数或负数。少于两个元素的序列也是摆动序列。")])]),n._v(" "),s("div",{staticClass:"language-c++ extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("class Solution {\npublic:\n    int wiggleMaxLength(vector<int>& nums) {\n        if (nums.size() <= 1) return nums.size();\n        int curDiff = 0; // 当前⼀对差值\n        int preDiff = 0; // 前⼀对差值\n        int result = 1; // 记录峰值个数，序列默认序列最右边有⼀个峰值\n        for (int i = 0; i < nums.size() - 1; i++) {\n            curDiff = nums[i + 1] - nums[i];\n            // 出现峰值\n            if ((curDiff > 0 && preDiff <= 0) || (preDiff >= 0 && curDiff < 0))={\n                result++;\n                preDiff = curDiff;\n            }\n        }\n        return result;\n    }\n};\n")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);