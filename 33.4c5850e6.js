webpackJsonp([33],{ANo0:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[[a("h1",[s._v("菜单项")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("插入一个复杂的右键菜单")]),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(2),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:s.center,zoom:s.zoom}},[a("bm-context-menu",[a("bm-context-menu-item",{attrs:{callback:s.gotoBeijing,text:"去北京"}}),s._v(" "),a("bm-context-menu-item",{attrs:{callback:s.gotoShanghai,text:"去上海",iconUrl:"http://lbsyun.baidu.com/skins/MySkin/resources/img/red.png"}}),s._v(" "),a("bm-context-menu-item",{attrs:{seperator:""}}),s._v(" "),a("bm-context-menu-item",{attrs:{disabled:"",text:"去深圳"}})],1)],1)],1)]],2)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("code",[s._v("BmContextMenuItem")]),s._v(" 菜单项是右键菜单的子组件，请勿在其他组件中使用。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("callback")]),s._v(" "),a("td",[s._v("Function")]),s._v(" "),a("td",[s._v("new Function")]),s._v(" "),a("td",[s._v("点击菜单时执行的回调函数，第一个参数为 {BMap, map, target, pixel, point}")])]),s._v(" "),a("tr",[a("td",[s._v("text")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("指定此菜单项的文本")])]),s._v(" "),a("tr",[a("td",[s._v("iconUrl")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("指定此菜单项的icon URL（大小为17px*17px）")])]),s._v(" "),a("tr",[a("td",[s._v("disabled")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("false")]),s._v(" "),a("td",[s._v("是否禁用菜单项")])]),s._v(" "),a("tr",[a("td",[s._v("seperator")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("false")]),s._v(" "),a("td",[s._v("是否是分隔线（此属性为真时，其它属性会被忽略）")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"map"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":center")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"center"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":zoom")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"zoom"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":callback")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"gotoBeijing"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("text")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"去北京"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu-item")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":callback")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"gotoShanghai"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("text")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"去上海"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("iconUrl")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"http://lbsyun.baidu.com/skins/MySkin/resources/img/red.png"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu-item")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("seperator")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu-item")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("disabled")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("text")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"去深圳"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu-item")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-context-menu")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("center")]),s._v(": {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("116.404")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("39.915")]),s._v("\n      },\n      "),a("span",{staticClass:"hljs-attr"},[s._v("zoom")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("15")]),s._v("\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    gotoBeijing (e) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".center = {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("116.404")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("39.915")]),s._v("\n      }\n    },\n    gotoShanghai (e) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".center = {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("121.473354")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("31.238413")]),s._v("\n      }\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])}]}},RR4k:function(s,t,a){var n=a("VU/8")(a("omkK"),a("ANo0"),null,null);s.exports=n.exports},UUw7:function(s,t,a){s.exports=a("RR4k")},omkK:function(s,t,a){var n,_,v;!function(a,l){_=[s,t],n=l,void 0!==(v="function"==typeof n?n.apply(t,_):n)&&(s.exports=v)}(0,function(s,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{center:{lng:116.404,lat:39.915},zoom:15}},methods:{gotoBeijing:function(s){this.center={lng:116.404,lat:39.915}},gotoShanghai:function(s){this.center={lng:121.473354,lat:31.238413}}}},s.exports=t.default})}});