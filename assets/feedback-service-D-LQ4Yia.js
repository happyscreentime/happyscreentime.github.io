import{X as a}from"./index-CEFEth8S.js";const t={triggerRequest:e=>a({...e,server:"db",collectionName:"feedback"}),create:({data:e})=>t.triggerRequest({method:"create",data:{...e,createdAt:new Date}}),getList:({data:e,...r}={})=>t.triggerRequest({method:"get",data:e,...r})};export{t as f};
