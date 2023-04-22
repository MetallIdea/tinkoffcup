"use strict";(self.webpackChunktinkoffcup=self.webpackChunktinkoffcup||[]).push([[38],{7713:function(t,e,i){i.d(e,{W:function(){return s}});var n=i(184);function s(t){var e=t.name,i=t.label,s=t.helpText,o=t.error,l=t.maxWidth,r=t.children;return(0,n.jsxs)("div",{className:"flex flex-column gap-2",style:{maxWidth:l},children:[(0,n.jsx)("label",{htmlFor:e,children:i}),r,s?(0,n.jsx)("small",{id:"".concat(e,"-help"),children:s}):null,o?(0,n.jsx)("small",{id:"".concat(e,"-error"),className:"p-error",children:o}):null]})}},4038:function(t,e,i){i.r(e),i.d(e,{CostsForm:function(){return D}});var n=i(7257),s="CostsForm_self__Y3nBm",o="CostsForm_buttons__weLMG",l=i(5705),r=i(9439),a=i(7713),c=i(5103),u=i(8218),d=i(919),h=i(7689),f=i(2625),v=i(4461),m=i(4573),g=i(2791),y=i(5533),x=i(1694),C=i.n(x),p=i(184),b=(0,n.Pi)((function(){var t=(0,h.s0)(),e=(0,l.u6)(),i=e.values,n=e.errors,s=e.touched,x=e.setFieldValue,b=e.handleChange,k=e.handleBlur,D=e.resetForm,j=(0,g.useState)(m.V.categories),F=(0,r.Z)(j,2),w=F[0],L=F[1];return(0,p.jsxs)(l.l0,{children:[(0,p.jsx)(a.W,{name:"title",label:"Title",error:s.title?n.title:void 0,maxWidth:"500px",children:(0,p.jsx)(c.o,{id:"title",name:"title",value:i.title,onChange:b,onBlur:k})}),(0,p.jsx)(a.W,{name:"cost",label:"Cost",error:s.cost?n.cost:void 0,maxWidth:"500px",children:(0,p.jsx)(y.R,{id:"cost",name:"cost",value:i.cost,onChange:function(t){var e=t.value;x("cost",e)},onBlur:k,minFractionDigits:0,maxFractionDigits:2})}),(0,p.jsx)(a.W,{name:"date",label:"Date",maxWidth:"200px",children:(0,p.jsx)(f.f,{showIcon:!0,dateFormat:"dd.mm.yy",id:"date",name:"date",value:i.date,onChange:b,onBlur:k})}),(0,p.jsx)(a.W,{name:"category",label:"Category",maxWidth:"500px",children:(0,p.jsx)(v.Q,{id:"category",name:"category",field:"title",value:i.category,suggestions:w,completeMethod:function(t){var e=t.query;L(m.V.findCategories(e))},onChange:b,dropdown:!0})}),(0,p.jsx)(a.W,{name:"description",label:"Description",children:(0,p.jsx)(u.g,{id:"description",name:"description",value:i.description,onChange:b,onBlur:k})}),(0,p.jsxs)("div",{className:C()("flex justify-content-end gap-2",o),children:[(0,p.jsx)(d.z,{type:"button",label:"Cancel",className:"p-button-secondary",onClick:function(){D(),t("/")}}),(0,p.jsx)(d.z,{type:"submit",label:"Submit"})]})]})})),k=i(4905);var D=(0,n.Pi)((function(){var t=(0,h.UO)().id;(0,g.useEffect)((function(){t&&"new"!==t&&k.L.fetchCost(t)}));var e=function(){var t,e,i,n,s,o,l,r,a,c,u,d,f=(0,h.s0)();return{initialValue:{id:null!==(t=null===(e=k.L.cost)||void 0===e?void 0:e.id)&&void 0!==t?t:"",title:null!==(i=null===(n=k.L.cost)||void 0===n?void 0:n.title)&&void 0!==i?i:"",description:null!==(s=null===(o=k.L.cost)||void 0===o?void 0:o.description)&&void 0!==s?s:"",date:null!==(l=null===(r=k.L.cost)||void 0===r?void 0:r.date)&&void 0!==l?l:new Date,category:null!==(a=null===(c=k.L.cost)||void 0===c?void 0:c.category)&&void 0!==a?a:null,cost:null!==(u=null===(d=k.L.cost)||void 0===d?void 0:d.cost)&&void 0!==u?u:0},validate:function(t){var e={};return t.title||(e.title="Title is required"),t.date||(e.date="Date is required"),t.cost?t.cost>1e12?e.cost="Cost cannot be more 1000000000000":t.cost<=0&&(e.cost="Cost cannot be less or equal zero"):e.cost="Cost is required",e},handleSubmit:function(t,e){var i=e.setSubmitting,n=e.resetForm;t.category=m.V.ensureCategory(t.category),k.L.cost?k.L.updateCost(t):k.L.createCost(t),i(!1),n(),f("/")}}}(),i=e.initialValue,n=e.validate,o=e.handleSubmit;return(0,p.jsx)("div",{className:s,children:(0,p.jsx)(l.J9,{initialValues:i,validate:n,onSubmit:o,enableReinitialize:!0,children:(0,p.jsx)(b,{})})})}))},4573:function(t,e,i){i.d(e,{V:function(){return r}});var n=i(5671),s=i(3144),o=i(4098),l=i(4261),r=new(function(){function t(){(0,n.Z)(this,t),this.categories=[],this.categoriesModalVisible=!1,(0,o.ky)(this)}return(0,s.Z)(t,[{key:"findCategories",value:function(t){return this.categories.filter((function(e){return e.title.includes(t)}))}},{key:"ensureCategory",value:function(t){if("string"===typeof t){var e=this.categories.find((function(e){return e.title===t}));if(!e){var i={id:(0,l.Z)(),title:t};return this.categories.push(i),i}return e}return t}},{key:"showCategoriesModal",value:function(){this.categoriesModalVisible=!0}},{key:"hideCategoriesModal",value:function(){this.categoriesModalVisible=!1}}]),t}())},4905:function(t,e,i){i.d(e,{L:function(){return a}});var n=i(5671),s=i(3144),o=i(4098),l=i(4261),r=i(4573),a=new(function(){function t(){(0,n.Z)(this,t),this.categoriesStore=r.V,this.costs=[],this.cost=void 0,this.filteredCosts=[],this.searchFilter="",this.startDate=null,this.endDate=null,this.categoriesFilter=null,this.deleteItemId=null,(0,o.ky)(this)}return(0,s.Z)(t,[{key:"fetchCost",value:function(t){this.cost=this.costs.find((function(e){return e.id===t}))}},{key:"setCost",value:function(t){this.cost=t}},{key:"createCost",value:function(t){return t.id=(0,l.Z)(),this.costs.push(t),t}},{key:"updateCost",value:function(t){var e=this.costs.findIndex((function(e){return e.id===t.id}));return e>-1&&(this.costs[e]=t),t}},{key:"deleteCost",value:function(t){var e=this.costs.findIndex((function(e){return e.id===t}));e>-1&&(this.costs.splice(e,1),this.filter())}},{key:"filterCost",value:function(t){this.searchFilter=t,this.filter()}},{key:"filterByStartDate",value:function(t){this.startDate=t,this.filter()}},{key:"filterByEndDate",value:function(t){this.endDate=t,this.filter()}},{key:"filterByCategories",value:function(t){this.categoriesFilter=t,this.filter()}},{key:"filter",value:function(){var t=this;this.filteredCosts=this.costs.filter((function(e){var i,n=!0;if(t.searchFilter&&(n=n&&e.title.includes(t.searchFilter)),t.startDate&&(n=n&&e.date.getTime()>t.startDate.getTime()),t.endDate){var s=new Date(t.endDate);s.setDate(t.endDate.getDate()+1),n=n&&e.date.getTime()<s.getTime()}t.categoriesFilter&&(n=n&&(null===(i=e.category)||void 0===i?void 0:i.id)===t.categoriesFilter);return n})).sort((function(t,e){return t.date>e.date?-1:1}))}},{key:"resetFilter",value:function(){this.searchFilter="",this.startDate=null,this.endDate=null,this.categoriesFilter=null}},{key:"showDeleteModal",value:function(t){this.deleteItemId=t}},{key:"hideDeleteModal",value:function(){this.deleteItemId=null}}]),t}())}}]);
//# sourceMappingURL=38.bc18eefa.chunk.js.map