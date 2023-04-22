"use strict";(self.webpackChunktinkoffcup=self.webpackChunktinkoffcup||[]).push([[38],{7713:function(e,t,i){i.d(t,{W:function(){return s}});var n=i(184);function s(e){var t=e.name,i=e.label,s=e.helpText,l=e.error,o=e.maxWidth,r=e.children;return(0,n.jsxs)("div",{className:"flex flex-column gap-2",style:{maxWidth:o},children:[(0,n.jsx)("label",{htmlFor:t,children:i}),r,s?(0,n.jsx)("small",{id:"".concat(t,"-help"),children:s}):null,l?(0,n.jsx)("small",{id:"".concat(t,"-error"),className:"p-error",children:l}):null]})}},4038:function(e,t,i){i.r(t),i.d(t,{CostsForm:function(){return p}});var n=i(7257),s={},l=i(5705),o=i(9439),r=i(7713),a=i(5103),c=i(8218),u=i(919),d=i(7689),h=i(2625),f=i(4461),v=i(4573),g=i(2791),m=i(5533),y=i(184),x=(0,n.Pi)((function(){var e=(0,d.s0)(),t=(0,l.u6)(),i=t.values,n=t.errors,s=t.touched,x=t.setFieldValue,C=t.handleChange,p=t.handleBlur,k=t.resetForm,b=(0,g.useState)(v.V.categories),D=(0,o.Z)(b,2),j=D[0],F=D[1];return(0,y.jsxs)(l.l0,{children:[(0,y.jsx)(r.W,{name:"title",label:"Title",error:s.title?n.title:void 0,maxWidth:"500px",children:(0,y.jsx)(a.o,{id:"title",name:"title",value:i.title,onChange:C,onBlur:p})}),(0,y.jsx)(r.W,{name:"description",label:"Description",children:(0,y.jsx)(c.g,{id:"description",name:"description",value:i.description,onChange:C,onBlur:p})}),(0,y.jsx)(r.W,{name:"date",label:"Date",maxWidth:"200px",children:(0,y.jsx)(h.f,{showIcon:!0,dateFormat:"dd.mm.yy",id:"date",name:"date",value:i.date,onChange:C,onBlur:p})}),(0,y.jsx)(r.W,{name:"category",label:"Category",maxWidth:"500px",children:(0,y.jsx)(f.Q,{id:"category",name:"category",field:"title",value:i.category,suggestions:j,completeMethod:function(e){var t=e.query;F(v.V.findCategories(t))},onChange:C,dropdown:!0})}),(0,y.jsx)(r.W,{name:"cost",label:"Cost",error:s.cost?n.cost:void 0,maxWidth:"500px",children:(0,y.jsx)(m.R,{id:"cost",name:"cost",value:i.cost,onChange:function(e){var t=e.value;x("cost",t)},onBlur:p,minFractionDigits:0,maxFractionDigits:2})}),(0,y.jsxs)("div",{className:"flex",children:[(0,y.jsx)(u.z,{type:"button",label:"Cancel",className:"p-button-secondary",onClick:function(){k(),e("/")}}),(0,y.jsx)(u.z,{type:"submit",label:"Submit"})]})]})})),C=i(4905);var p=(0,n.Pi)((function(){var e=(0,d.UO)().id;(0,g.useEffect)((function(){e&&"new"!==e&&C.L.fetchCost(e)}));var t=function(){var e,t,i,n,s,l,o,r,a,c,u,h,f=(0,d.s0)();return{initialValue:{id:null!==(e=null===(t=C.L.cost)||void 0===t?void 0:t.id)&&void 0!==e?e:"",title:null!==(i=null===(n=C.L.cost)||void 0===n?void 0:n.title)&&void 0!==i?i:"",description:null!==(s=null===(l=C.L.cost)||void 0===l?void 0:l.description)&&void 0!==s?s:"",date:null!==(o=null===(r=C.L.cost)||void 0===r?void 0:r.date)&&void 0!==o?o:new Date,category:null!==(a=null===(c=C.L.cost)||void 0===c?void 0:c.category)&&void 0!==a?a:null,cost:null!==(u=null===(h=C.L.cost)||void 0===h?void 0:h.cost)&&void 0!==u?u:0},validate:function(e){var t={};return e.title||(t.title="Title is required"),e.date||(t.date="Date is required"),e.cost?e.cost>1e12?t.cost="Cost cannot be more 1000000000000":e.cost<=0&&(t.cost="Cost cannot be less or equal zero"):t.cost="Cost is required",t},handleSubmit:function(e,t){var i=t.setSubmitting,n=t.resetForm;e.category=v.V.ensureCategory(e.category),C.L.cost?C.L.updateCost(e):C.L.createCost(e),i(!1),n(),f("/")}}}(),i=t.initialValue,n=t.validate,o=t.handleSubmit;return(0,y.jsx)("div",{className:s.self,children:(0,y.jsx)(l.J9,{initialValues:i,validate:n,onSubmit:o,enableReinitialize:!0,children:(0,y.jsx)(x,{})})})}))},4573:function(e,t,i){i.d(t,{V:function(){return r}});var n=i(5671),s=i(3144),l=i(4098),o=i(4261),r=new(function(){function e(){(0,n.Z)(this,e),this.categories=[],this.categoriesModalVisible=!1,(0,l.ky)(this)}return(0,s.Z)(e,[{key:"findCategories",value:function(e){return this.categories.filter((function(t){return t.title.includes(e)}))}},{key:"ensureCategory",value:function(e){if("string"===typeof e){var t=this.categories.find((function(t){return t.title===e}));if(!t){var i={id:(0,o.Z)(),title:e};return this.categories.push(i),i}return t}return e}},{key:"showCategoriesModal",value:function(){this.categoriesModalVisible=!0}},{key:"hideCategoriesModal",value:function(){this.categoriesModalVisible=!1}}]),e}())},4905:function(e,t,i){i.d(t,{L:function(){return a}});var n=i(5671),s=i(3144),l=i(4098),o=i(4261),r=i(4573),a=new(function(){function e(){(0,n.Z)(this,e),this.categoriesStore=r.V,this.costs=[],this.cost=void 0,this.filteredCosts=[],this.searchFilter="",this.startDate=null,this.endDate=null,this.categoriesFilter=null,this.deleteItemId=null,(0,l.ky)(this)}return(0,s.Z)(e,[{key:"fetchCost",value:function(e){this.cost=this.costs.find((function(t){return t.id===e}))}},{key:"setCost",value:function(e){this.cost=e}},{key:"createCost",value:function(e){return e.id=(0,o.Z)(),this.costs.push(e),e}},{key:"updateCost",value:function(e){var t=this.costs.findIndex((function(t){return t.id===e.id}));return t>-1&&(this.costs[t]=e),e}},{key:"deleteCost",value:function(e){var t=this.costs.findIndex((function(t){return t.id===e}));t>-1&&(this.costs.splice(t,1),this.filter())}},{key:"filterCost",value:function(e){this.searchFilter=e,this.filter()}},{key:"filterByStartDate",value:function(e){this.startDate=e,this.filter()}},{key:"filterByEndDate",value:function(e){this.endDate=e,this.filter()}},{key:"filterByCategories",value:function(e){this.categoriesFilter=e,this.filter()}},{key:"filter",value:function(){var e=this;this.filteredCosts=this.costs.filter((function(t){var i,n=!0;if(e.searchFilter&&(n=n&&t.title.includes(e.searchFilter)),e.startDate&&(n=n&&t.date.getTime()>e.startDate.getTime()),e.endDate){var s=new Date(e.endDate);s.setDate(e.endDate.getDate()+1),n=n&&t.date.getTime()<s.getTime()}e.categoriesFilter&&(n=n&&(null===(i=t.category)||void 0===i?void 0:i.id)===e.categoriesFilter);return n})).sort((function(e,t){return e.date>t.date?-1:1}))}},{key:"resetFilter",value:function(){this.searchFilter="",this.startDate=null,this.endDate=null,this.categoriesFilter=null}},{key:"showDeleteModal",value:function(e){this.deleteItemId=e}},{key:"hideDeleteModal",value:function(){this.deleteItemId=null}}]),e}())}}]);
//# sourceMappingURL=38.85508af6.chunk.js.map