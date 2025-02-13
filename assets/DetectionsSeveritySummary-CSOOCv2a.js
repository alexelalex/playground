import{f as g,r as c,D as y,j as a,l as p}from"./index-Ba6YVotX.js";import{a1 as x,a2 as b,a3 as v,a4 as d,K as m,a5 as j,B as _,a6 as h,g as D,d as E,a7 as f}from"./App-CM6DQiPl.js";function k(e={}){var s,l;return x({query:T,getResults:c.useCallback(r=>{var t;return(t=r==null?void 0:r.group_detections)==null?void 0:t.results},[]),getTotalCount:c.useCallback(r=>{var t;return(t=r==null?void 0:r.group_detections)==null?void 0:t.total_count},[]),limit:100,...e,variables:{group_by:((s=e==null?void 0:e.variables)==null?void 0:s.group_by)??y.ResourceType,...e==null?void 0:e.variables,filters:b((l=e==null?void 0:e.variables)==null?void 0:l.filters)}})}const T=g(`
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
`);function C({filterValuesState:e}){var n;const s=v(),[,l]=e||s,{results:r,loading:t}=k({variables:{filters:{...s[0],...e==null?void 0:e[0],anomaly_severity:void 0},group_by:y.AnomalySeverity}}),o=d(r,"group");return a.jsxs(m,{row:!0,center:!0,gap:2,children:[j.sort((u,i)=>i-u).map(u=>{var i;return a.jsx($,{severity:u,count:(i=o[u])==null?void 0:i.quantity,loading:t,filterValuesState:e||s},u)}),((n=s[0])==null?void 0:n.anomaly_severity)&&a.jsx(_,{size:"small",variant:"text",color:"primary",onClick:()=>l({...s[0],anomaly_severity:void 0}),children:"Reset"})]})}function $({severity:e,count:s,loading:l,filterValuesState:r}){var u;const[t,o]=r,n=(u=t==null?void 0:t.anomaly_severity)==null?void 0:u.includes(e);return a.jsx(_,{size:"small",variant:"text",selected:n,onClick:()=>o({...t,anomaly_severity:n?p.without(t.anomaly_severity,e):[...t.anomaly_severity||[],e]}),children:a.jsxs(m,{row:!0,center:!0,gap:!0,children:[a.jsx(h,{severity:e}),a.jsx(D,{children:a.jsx(E,{noWrap:!0,children:l?a.jsx(f,{width:10}):s||"--"})})]})})}export{C as D,k as u};
