import{f as $,j as e,q as f,o as B,a as z,E as q,F as Q,r as C,R as W,B as A,G}from"./index-lG--m1G-.js";import{H as Y}from"./Header-Xy3QA87U.js";import{aO as K,K as o,ae as I,ah as T,aP as O,aQ as X,aR as F,aS as j,aT as N,aU as Z,aV as R,aW as J,aX as ee,aY as m,q as L,aZ as D,a_ as te,a$ as se,b0 as re,b1 as oe,b2 as ae,b3 as ie,b4 as ne,b5 as le,b6 as ce,b7 as de,b8 as ue,b9 as pe,ba as he,bb as ge,aF as _e,bc as xe,bd as be,be as ye,n as me,I as Ce,bf as fe,u as U,d as ve}from"./App-DEb2AZmf.js";const je=$(`
  query CVEsMainQuery($filters: CVEFilters, $skip: Int, $limit: Int, $sort_by: CVESortField, $sort_order: Int) {
    cves(filters: $filters, skip: $skip, limit: $limit, sort_by: $sort_by, sort_order: $sort_order) {
      total_count
      results {
        attack_vector
        cve_id
        cve_sources
        severity
        cvss_score
        packages
        exploit_available
        internet_exposed
        affected_resources_count
        affected_images_count
        fix_available
        fixed_in_version
        epss_score
        cisa_kev {
        action
        date_added
        due_date
        }
        published_date
        discovery_timestamp
        high_exposure_risk
      }
    }
  }
`),we=f.div.withConfig({displayName:"CVEFocusFilter__Root",componentId:"sc-z0djlh-0"})(({theme:t})=>({display:"flex",gap:8,backgroundColor:t.palette.type==="dark"?B("rgb(30,147,255)",.2):"#E9F4FF",height:48,padding:t.spacing(0,2),alignItems:"center",borderRadius:t.shape.borderRadius,border:"1px solid rgba(30, 147, 255, 0.20)"})),ke=f.p.withConfig({displayName:"CVEFocusFilter__ParagraphStyled",componentId:"sc-z0djlh-1"})(({theme:t})=>({color:t.palette.primary.main})),Ee=f(O).withConfig({displayName:"CVEFocusFilter__SwitchStyled",componentId:"sc-z0djlh-2"})(({theme:t})=>({padding:8,"& .MuiIconButton-root:hover":{backgroundColor:B(t.palette.common.white,0)},"& .MuiSwitch-track":{backgroundColor:t.palette.common.gray,borderRadius:22/2,opacity:1},"& .MuiSwitch-thumb":{boxShadow:"none",width:16,height:16,margin:2,backgroundColor:t.palette.common.white},"& .MuiSwitch-switchBase.Mui-checked":{color:t.palette.common.white,"& + .MuiSwitch-track":{backgroundColor:t.palette.primary.main,opacity:1,border:0}}})),Se=({total:t})=>{const[i,l]=P(),s=()=>{l({risk_focus_enabled:!i.risk_focus_enabled})};return e.jsxs(we,{children:[e.jsx(K,{}),e.jsx(ke,{children:"Risk focus"}),e.jsxs(o,{row:!0,center:!0,children:[e.jsx(Ee,{checked:i.risk_focus_enabled||!1,onChange:s}),e.jsx(I,{title:e.jsx(o,{grow:!0,children:'Risk Focus identifies and filters critical or high-severity vulnerabilities with a network attack vector, targeting internet-exposed workloads with known exploits, or those listed in the CISA KEV catalog, or possessing a High EPSS score exceeding 10%".'}),children:e.jsx(T,{fontSize:"small",color:"action",style:{fontSize:12}})})]})]})};function Ve({period:t,filterValues:i}){return z(Fe,{variables:{filters:i,group_by:q.Severity,period:t}})}const Fe=$(`
  query CVEsTrends($filters: CVEFilters, $group_by: CVEsGroupByField, $period: StatsTimeframe) {
    cve_trends(filters: $filters, group_by: $group_by, period: $period) {
      total_count
      results {
        day
        severity
        value
      }
    }
  }
`);function Re({filters:t}){return z(Ie,{variables:{filters:t,group_by:q.Severity}})}const Ie=$(`
  query CVEsGroupedOccurrences($filters: CVEFilters, $group_by: CVEsGroupByField) {
    cves_grouped_occurrences(filters: $filters, group_by: $group_by) {
      total_count
      results {
        group_key
        total_count
      }
    }
  }
`);ie.register(ne,le);function Te({filters:t={}}){const i=Q(),[l]=X(),[s,V]=C.useState(!0),{data:g,loading:_}=Ve({period:l,filterValues:t}),{data:x,loading:w}=Re({filters:t}),y=C.useMemo(()=>{var h;if(!((h=x==null?void 0:x.cves_grouped_occurrences)!=null&&h.results))return{labels:[],datasets:[]};const r=x.cves_grouped_occurrences.results.reduce((d,a)=>{if(!(a!=null&&a.group_key)||!(a!=null&&a.total_count))return d;const S=F(Number(a.group_key));return d[S??""]={value:a.total_count,severity:Number(a.group_key)},d},{}),c=Object.entries(r).sort((d,a)=>(j[a[0]]||0)-(j[d[0]]||0));return{labels:c.map(([d])=>d),datasets:[{data:c.map(([d,a])=>a.value),backgroundColor:c.map(([d,a])=>N(i,a.severity)),borderWidth:0}]}},[x,i]),k=C.useMemo(()=>{var a,S;const r=Z(l);if(!((S=(a=g==null?void 0:g.cve_trends)==null?void 0:a.results)!=null&&S.length))return{labels:r,datasets:[R("Total",r.map(()=>0),i.palette.primary.main)]};const c=g.cve_trends.results.reduce((n,p)=>{const u=J(p.day,l);if(u!==p.day.split("T")[0])return n;const v=F(p.severity);return n[u]||(n[u]={}),n[u][v??""]||(n[u][v??""]=0),n[u][v??""]+=p.value||0,n},{}),h=ee(c,r,{}),d=[...new Set(g.cve_trends.results.map(n=>F(n.severity)||""))].sort((n,p)=>(j[p]||0)-(j[n]||0));if(!s){const n=r.map(p=>Object.values(h[p]||{}).reduce((u,v)=>u+(v||0),0));return{labels:r,datasets:[R("Total",n,i.palette.primary.main)]}}return{labels:r,datasets:d.map(n=>R(n,r.map(p=>{var u;return(u=h[p])==null?void 0:u[n]}),N(i,j[n])))}},[g,s,i,l]),E=C.useMemo(()=>{var r;return((r=y.datasets[0])==null?void 0:r.data.reduce((c,h)=>c+h,0))||0},[y]);return e.jsxs(o,{row:!0,gap:2,pad:2,style:{maxHeight:350},children:[e.jsxs(o,{round:!0,border:!0,paper:!0,column:!0,pad:2,relative:!0,children:[e.jsxs(o,{pad:2,row:!0,center:!0,gap:1,children:[e.jsx(m,{variant:"h6",children:"Vulnerabilities"}),e.jsx(I,{title:e.jsx(o,{style:{maxWidth:250},children:"Shows total unique CVE counts by severity across all workloads"}),children:e.jsx(T,{fontSize:"small",color:"action",style:{fontSize:12}})})]}),w?e.jsx(L,{children:e.jsx(D,{})}):e.jsxs(o,{column:!0,gap:3,pad:2,children:[e.jsxs(o,{row:!0,fullHeight:!0,style:{margin:"auto",position:"relative"},children:[e.jsx(te,{style:{zIndex:1},data:y,options:{cutout:"85%",plugins:{legend:{display:!1},tooltip:{displayColors:!1,callbacks:{label:r=>{const c=r.raw,h=(c/E*100).toFixed(2);return`${c} (${h}% of total)`},title:()=>{}}}}}}),e.jsxs($e,{children:[e.jsx(m,{variant:"h3",children:E}),e.jsx(m,{variant:"caption",color:"textSecondary",noWrap:!0,children:"Total Vulnerabilities"})]})]}),e.jsx(se,{datasets:y.datasets})]})]}),e.jsxs(o,{round:!0,border:!0,paper:!0,column:!0,pad:!0,grow:!0,children:[e.jsxs(o,{pad:2,row:!0,center:!0,style:{justifyContent:"space-between"},children:[e.jsxs(o,{row:!0,center:!0,gap:2,children:[e.jsxs(o,{row:!0,center:!0,gap:1,children:[e.jsx(m,{variant:"h6",noWrap:!0,children:"Vulnerabilities Over Time"}),e.jsx(I,{title:e.jsx(o,{style:{maxWidth:250},children:"Tracks total unique CVE counts by severity over time across all workloads"}),children:e.jsx(T,{fontSize:"small",color:"action",style:{fontSize:12}})})]}),e.jsx(Ne,{datasets:k.datasets})]}),e.jsxs(o,{row:!0,gap:1,center:!0,children:[e.jsx(O,{size:"small",color:"primary",checked:s,onChange:()=>V(r=>!r)}),e.jsx(m,{variant:"caption",noWrap:!0,children:"Breakdown"}),e.jsx(re,{})]})]}),e.jsx(o,{pad:2,fullHeight:!0,children:_?e.jsx(L,{children:e.jsx(D,{})}):e.jsx(oe,{data:k,options:ae(i,l)})})]})]})}const $e=f.div.withConfig({displayName:"CVETrends__Totals",componentId:"sc-7g8g06-0"})(({theme:t})=>({position:"absolute",display:"flex",flexDirection:"column",gap:t.spacing(1),top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",maxWidth:100,"& > *":{lineHeight:1}})),Ne=({datasets:t})=>e.jsx(o,{row:!0,gap:1,style:{marginLeft:"auto"},children:t.map((i,l)=>e.jsxs(o,{row:!0,center:!0,gap:1,children:[e.jsx("div",{style:{width:6,height:6,borderRadius:"50%",backgroundColor:i.borderColor}}),e.jsx(m,{variant:"caption",children:i.label})]},l))}),H={};function Ue(){const[t,i]=ce("cves-page-show-chart",!0),{inspect:l}=de(),[s,V,g]=P(),[_,x]=De(),[,w]=ue(),{download:y}=pe(),k=C.useCallback(({cve_id:r})=>{l({cveId:r}),(s!=null&&s.internet_exposed||s!=null&&s.account_id)&&w({internet_exposed:s==null?void 0:s.internet_exposed,account_id:s==null?void 0:s.account_id})},[l,s==null?void 0:s.internet_exposed,s==null?void 0:s.account_id,w]),E=C.useCallback(async()=>{await y(s,he.MAIN)},[y,s]);return e.jsxs(Me,{children:[e.jsx(Y,{Icon:ge,title:"Vulnerabilities"}),e.jsx(Be,{children:e.jsx(_e,{topSection:t&&e.jsx(o,{style:{width:"100%",minHeight:350},children:e.jsx(Te,{filters:s})}),toolBarComponent:e.jsxs(o,{row:!0,gap:!0,center:!0,children:[e.jsx(Se,{}),e.jsx(ye,{onClick:E}),e.jsx(me,{}),e.jsx(Ce,{selected:t,onClick:()=>{i(!t)},children:e.jsx(fe,{fontSize:"small"})})]}),screen:A.Vulnerabilities,query:je,columns:be,EmptyMessage:Le,Filters:xe,filtersProps:{hideCheckbox:["high_exposure_risk"]},filterValues:s,defaultFilterValues:H,onFilterValuesChange:V,getLink:g,onRowClick:k,onColumnClick:W.useCallback((r,c)=>x({sort_by:r,sort_order:c}),[x]),sort_by:_==null?void 0:_.sort_by,sort_order:(_==null?void 0:_.sort_order)==="asc"?1:-1})})]})}function Le(){return e.jsx(ve,{children:"No CVEs found"})}function P(){return U("f",H,{internet_exposed:b,fix_available:b,exploit_available:b,severity:Number,cvss_score:M,epss_score:M,cisa_kev:b,attack_vector:b,high_epss:b,high_exposure_risk:b,risk_focus_enabled:b})}function b(t){return t?t==="true":void 0}function De(){return U("sort",{sort_by:G.CvssScore,sort_order:"desc"})}function M(t){return t?{value:Number(t.value),operator:t.operator}:null}const Me=f.div.withConfig({displayName:"page__Container",componentId:"sc-19gvmvj-0"})(["display:flex;flex-direction:column;height:100%;"]),Be=f.div.withConfig({displayName:"page__Content",componentId:"sc-19gvmvj-1"})(["display:flex;flex-direction:column;flex-grow:1;overflow:auto;& > *{flex-grow:1;}"]);export{Ue as default,P as useCVEFilterValues};
