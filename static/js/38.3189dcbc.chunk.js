"use strict";(self.webpackChunktinkoffcup=self.webpackChunktinkoffcup||[]).push([[38],{7713:function(t,e,i){i.d(e,{W:function(){return r}});var n=i(184);function r(t){var e=t.name,i=t.label,r=t.helpText,o=t.error,s=t.maxWidth,a=t.children;return(0,n.jsxs)("div",{className:"flex flex-column gap-2",style:{maxWidth:s},children:[(0,n.jsx)("label",{htmlFor:e,children:i}),a,r?(0,n.jsx)("small",{id:"".concat(e,"-help"),children:r}):null,o?(0,n.jsx)("small",{id:"".concat(e,"-error"),className:"p-error",children:o}):null]})}},4038:function(t,e,i){i.r(e),i.d(e,{CostsForm:function(){return p}});var n=i(7257),r={},o=i(5705),s=i(9439),a=i(7713),l=i(5103),c=i(8218),u=i(919),d=i(7689),h=i(2625),f=i(4461),v=i(4573),g=i(2791),m=i(5533),y=i(184),C=(0,n.Pi)((function(){var t=(0,d.s0)(),e=(0,o.u6)(),i=e.values,n=e.errors,r=e.touched,C=e.setFieldValue,x=e.handleChange,p=e.handleBlur,b=e.resetForm,k=(0,g.useState)(v.V.categories),D=(0,s.Z)(k,2),j=D[0],F=D[1];return(0,y.jsxs)(o.l0,{children:[(0,y.jsx)(a.W,{name:"title",label:"Title",error:r.title?n.title:void 0,maxWidth:"500px",children:(0,y.jsx)(l.o,{id:"title",name:"title",value:i.title,onChange:x,onBlur:p})}),(0,y.jsx)(a.W,{name:"description",label:"Description",children:(0,y.jsx)(c.g,{id:"description",name:"description",value:i.description,onChange:x,onBlur:p})}),(0,y.jsx)(a.W,{name:"date",label:"Date",maxWidth:"200px",children:(0,y.jsx)(h.f,{showIcon:!0,dateFormat:"dd.mm.yy",id:"date",name:"date",value:i.date,onChange:x,onBlur:p})}),(0,y.jsx)(a.W,{name:"category",label:"Category",maxWidth:"500px",children:(0,y.jsx)(f.Q,{id:"category",name:"category",field:"title",value:i.category,suggestions:j,completeMethod:function(t){var e=t.query;F(v.V.findCategories(e))},onChange:x,dropdown:!0})}),(0,y.jsx)(a.W,{name:"cost",label:"Cost",error:r.cost?n.cost:void 0,maxWidth:"500px",children:(0,y.jsx)(m.R,{id:"cost",name:"cost",value:i.cost,onChange:function(t){var e=t.value;C("cost",e)},onBlur:p,minFractionDigits:0,maxFractionDigits:2})}),(0,y.jsxs)("div",{className:"flex",children:[(0,y.jsx)(u.z,{type:"button",label:"Cancel",className:"p-button-secondary",onClick:function(){b(),t("/costs")}}),(0,y.jsx)(u.z,{type:"submit",label:"Submit"})]})]})})),x=i(5778);var p=(0,n.Pi)((function(){var t=(0,d.UO)().id;(0,g.useEffect)((function(){t&&"new"!==t&&x.L.fetchCost(t)}));var e=function(){var t,e,i,n,r,o,s,a,l,c,u,h,f=(0,d.s0)();return{initialValue:{id:null!==(t=null===(e=x.L.cost)||void 0===e?void 0:e.id)&&void 0!==t?t:"",title:null!==(i=null===(n=x.L.cost)||void 0===n?void 0:n.title)&&void 0!==i?i:"",description:null!==(r=null===(o=x.L.cost)||void 0===o?void 0:o.description)&&void 0!==r?r:"",date:null!==(s=null===(a=x.L.cost)||void 0===a?void 0:a.date)&&void 0!==s?s:new Date,category:null!==(l=null===(c=x.L.cost)||void 0===c?void 0:c.category)&&void 0!==l?l:null,cost:null!==(u=null===(h=x.L.cost)||void 0===h?void 0:h.cost)&&void 0!==u?u:0},validate:function(t){var e={};return t.title||(e.title="Title is required"),t.date||(e.date="Date is required"),t.cost?t.cost>1e12?e.cost="Cost cannot be more 1000000000000":t.cost<=0&&(e.cost="Cost cannot be less or equal zero"):e.cost="Cost is required",e},handleSubmit:function(t,e){var i=e.setSubmitting,n=e.resetForm;t.category=v.V.ensureCategory(t.category),x.L.cost?x.L.updateCost(t):x.L.createCost(t),i(!1),n(),f("/costs")}}}(),i=e.initialValue,n=e.validate,s=e.handleSubmit;return(0,y.jsx)("div",{className:r.self,children:(0,y.jsx)(o.J9,{initialValues:i,validate:n,onSubmit:s,enableReinitialize:!0,children:(0,y.jsx)(C,{})})})}))},4573:function(t,e,i){i.d(e,{V:function(){return a}});var n=i(5671),r=i(3144),o=i(4098),s=i(4261),a=new(function(){function t(){(0,n.Z)(this,t),this.categories=[],(0,o.ky)(this)}return(0,r.Z)(t,[{key:"findCategories",value:function(t){return this.categories.filter((function(e){return e.title.includes(t)}))}},{key:"ensureCategory",value:function(t){if("string"===typeof t){var e=this.categories.find((function(e){return e.title===t}));if(!e){var i={id:(0,s.Z)(),title:t};return this.categories.push(i),i}return e}return t}}]),t}())},5778:function(t,e,i){i.d(e,{L:function(){return l}});var n=i(5671),r=i(3144),o=i(4098),s=i(4261),a=i(4573);var l=new(function(){function t(){(0,n.Z)(this,t),this.categoriesStore=a.V,this.costs=[],this.cost=void 0,this.filteredCosts=[],this.chartData=null,this.searchFilter="",this.startDate=null,this.endDate=null,this.categoriesFilter=null,this.chartModalVisible=!1,(0,o.ky)(this)}return(0,r.Z)(t,[{key:"fetchCost",value:function(t){this.cost=this.costs.find((function(e){return e.id===t}))}},{key:"setCost",value:function(t){this.cost=t}},{key:"createCost",value:function(t){return t.id=(0,s.Z)(),this.costs.push(t),t}},{key:"updateCost",value:function(t){var e=this.costs.findIndex((function(e){return e.id===t.id}));return e>-1&&(this.costs[e]=t),t}},{key:"deleteCost",value:function(t){var e=this.costs.findIndex((function(e){return e.id===t}));e>-1&&this.costs.splice(e,1)}},{key:"filterCost",value:function(t){this.searchFilter=t,this.filter()}},{key:"filterByStartDate",value:function(t){this.startDate=t,this.filter()}},{key:"filterByEndDate",value:function(t){this.endDate=t,this.filter()}},{key:"filterByCategories",value:function(t){this.categoriesFilter=t,this.filter()}},{key:"filter",value:function(){var t=this;this.filteredCosts=this.costs.filter((function(e){var i,n=!0;if(t.searchFilter&&(n=n&&e.title.includes(t.searchFilter)),t.startDate&&(n=n&&e.date.getTime()>t.startDate.getTime()),t.endDate){var r=new Date(t.endDate);r.setDate(t.endDate.getDate()+1),n=n&&e.date.getTime()<r.getTime()}t.categoriesFilter&&(n=n&&(null===(i=e.category)||void 0===i?void 0:i.id)===t.categoriesFilter);return n})).sort((function(t,e){return t.date>e.date?-1:1}))}},{key:"resetFilter",value:function(){this.searchFilter="",this.startDate=null,this.endDate=null,this.categoriesFilter=null}},{key:"showChartModal",value:function(){this.chartModalVisible=!0}},{key:"hideChartModal",value:function(){this.chartModalVisible=!1}},{key:"calculateChartData",value:function(){var t=this,e=this.filteredCosts.some((function(t){return!t.category})),i=this.categoriesStore.categories.map((function(t){return t.title}));e&&i.push("uncategorized");var n=this.categoriesStore.categories.map((function(e){var i=e.id;return t.filteredCosts.filter((function(t){var e=t.category;return i===(null===e||void 0===e?void 0:e.id)})).reduce((function(t,e){return t+e.cost}),0)}));e&&n.push(this.filteredCosts.filter((function(t){return!t.category})).reduce((function(t,e){return t+e.cost}),0)),this.chartData={labels:i,datasets:[{data:this.categoriesStore.categories.map((function(e){var i=e.id;return t.filteredCosts.filter((function(t){var e=t.category;return i===(null===e||void 0===e?void 0:e.id)})).reduce((function(t,e){return t+e.cost}),0)})),backgroundColor:this.categoriesStore.categories.map((function(){return function(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t}()}))}]}}}]),t}())}}]);
//# sourceMappingURL=38.3189dcbc.chunk.js.map