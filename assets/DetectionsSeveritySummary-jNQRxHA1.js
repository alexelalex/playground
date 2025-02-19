import{D as y,r as c,f as g,j as a,l as p}from"./index-Z48k0RZH.js";import{a0 as x,a1 as v,a2 as b,a3 as j,K as m,a4 as d,B as _,a5 as h,g as D,d as E,a6 as k}from"./App-XcBPpDfQ.js";function T(e={}){var s,u;return x({query:$,getResults:c.useCallback(r=>{var t;return(t=r==null?void 0:r.group_detections)==null?void 0:t.results},[]),getTotalCount:c.useCallback(r=>{var t;return(t=r==null?void 0:r.group_detections)==null?void 0:t.total_count},[]),limit:100,...e,variables:{group_by:((s=e==null?void 0:e.variables)==null?void 0:s.group_by)??y.ResourceType,...e==null?void 0:e.variables,filters:v((u=e==null?void 0:e.variables)==null?void 0:u.filters)}})}const $=g(`
  query DetectionsGroups($group_by: DetectionsGroupBy!, $filters: DetectionsFilters, $skip: Int, $limit: Int) {
    group_detections(group_by: $group_by, filters: $filters, skip: $skip, limit: $limit) {
      total_count
      results {
        group
        quantity
        resource_type
      }
    }
  }
`);function C({filterValuesState:e}){var i;const s=b(),[,u]=e||s,{results:r,loading:t}=T({variables:{filters:{...s[0],...e==null?void 0:e[0],anomaly_severity:void 0},group_by:y.AnomalySeverity}}),n=j(r,"group");return a.jsxs(m,{row:!0,center:!0,gap:2,children:[d.sort((l,o)=>o-l).map(l=>{var o;return a.jsx(R,{severity:l,count:(o=n[l])==null?void 0:o.quantity,loading:t,filterValuesState:e||s},l)}),((i=s[0])==null?void 0:i.anomaly_severity)&&a.jsx(_,{size:"small",variant:"text",color:"primary",onClick:()=>u({...s[0],anomaly_severity:void 0}),children:"Reset"})]})}function R({severity:e,count:s,loading:u,filterValuesState:r}){var l;const[t,n]=r,i=(l=t==null?void 0:t.anomaly_severity)==null?void 0:l.includes(e);return a.jsx(_,{size:"small",variant:"text",selected:i,onClick:()=>n({...t,anomaly_severity:i?p.without(t.anomaly_severity,e):[...t.anomaly_severity||[],e]}),children:a.jsxs(m,{row:!0,center:!0,gap:!0,children:[a.jsx(h,{severity:e}),a.jsx(D,{children:a.jsx(E,{noWrap:!0,children:u?a.jsx(k,{width:10}):s||"--"})})]})})}export{C as D,T as u};
