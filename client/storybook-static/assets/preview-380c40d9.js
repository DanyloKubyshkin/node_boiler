import{_ as a}from"./iframe-11bb873a.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-7720a057.js"),["./DocsRenderer-K4EAMTCU-7720a057.js","./iframe-11bb873a.js","./index-f1f2c4b1.js","./react-18-5dbe1ec7.js","./index-c74c9f7f.js","./index-cfdce2b1.js","./inheritsLoose-2b32064c.js","./index-d8983a70.js","./index-68f0473f.js","./index-356e4a49.js"],import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
