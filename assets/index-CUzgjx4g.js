import{z as C,r as d,j as e,l as j,A as $,B as F,C as L,q as G}from"./index-lG--m1G-.js";import{S,g as I,a as B,b as E}from"./EventPage-BlugXNTq.js";import{U as v,d as m,aw as r,ax as b,ay as k,ae as c,az as T,aA as z,aB as V,K as f,aC as W,I as P,ao as q,aD as w,aE as A,aF as N,aG as U,j as H,aH as D,aI as O,aJ as K,ap as J,aK as Q,g as Y,aL as X,at as Z,L as ee,aM as te,aN as ne}from"./App-DEb2AZmf.js";import{R as oe}from"./RouteView-tV7zDZ1C.js";import"./DiscoveryLayout-gLtZoKVG.js";import"./PortsInput-BQlCFTvP.js";import"./TagOutline-XBcSsV4H.js";import"./search-Cs4vK_mk.js";import"./TextInput-BJt4rVlJ.js";import"./transform-DxSsZRCH.js";import"./color-9lF95FHy.js";import"./select-C5KTakZX.js";import"./Header-Xy3QA87U.js";const se=C(d.createElement("path",{d:"M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z"})),ie=C(d.createElement("path",{fillRule:"evenodd",d:"M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"}));function ae({source:t,children:n}){const o=t==null?void 0:t.metadata;return e.jsx(v,{interactive:!0,title:e.jsx(r,{icon:e.jsx(S,{disableTooltip:!0,type:t==null?void 0:t.type,fontSize:"small"}),label:t==null?void 0:t.type}),content:{Github:e.jsx(y,{metadata:o,type:"Github"}),Bitbucket:e.jsx(y,{metadata:o,type:"Bitbucket"}),TerraformCloud:e.jsx(pe,{metadata:o})}[t==null?void 0:t.type]||e.jsx(m,{color:"textSecondary",variant:"body2",children:"No metadata"}),children:n})}function y({metadata:t,type:n}){const{branch:o,base_branch:s,pr_id:a,commit_hash:l,commit_message:i,user_name:u,repository:h}=t||{},x=e.jsxs(e.Fragment,{children:[o&&s&&e.jsx(M,{branch:o,baseBranch:s}),a&&e.jsx(le,{type:n,pr_id:a,repository:h}),l&&e.jsx(ce,{type:n,hash:l,repository:h}),i&&e.jsx(ue,{message:i}),u&&e.jsx(R,{userName:u})]});return j.compact(x.props.children).length>0?x:e.jsx(r,{labelColor:"textSecondary",icon:e.jsx(b,{fontSize:"small",color:"action"}),label:"No metadata"})}function M({branch:t,baseBranch:n}){return e.jsx(r,{icon:e.jsx(c,{title:"Branch",children:e.jsx(b,{fontSize:"small",color:"action"})}),label:`${t}${n?` -> ${n}`:""}`})}function le({type:t,pr_id:n,repository:o}){var a;const s=`#${n}`;return e.jsx(r,{icon:e.jsx(c,{title:"Pull Request",children:e.jsx(T,{fontSize:"small",color:"action"})}),label:o?e.jsx("a",{href:(a=I[t])==null?void 0:a.getPRLink(o,n),target:"_blank",rel:"noreferrer",children:s}):s})}function re({pr_url:t}){const n=`#${t.split("/").pop()}`;return e.jsx(r,{icon:e.jsx(c,{title:"Pull Request",children:e.jsx(T,{fontSize:"small",color:"action"})}),label:e.jsx("a",{href:t,target:"_blank",rel:"noreferrer",children:n})})}function ce({type:t,hash:n,repository:o}){var s;return e.jsx(r,{disableTooltip:!0,icon:e.jsx(c,{title:"Commit",children:e.jsx(z,{fontSize:"small",color:"action"})}),label:n&&e.jsx(c,{title:n,children:e.jsx("a",{href:(s=I[t])==null?void 0:s.getCommitLink(o,n),target:"_blank",rel:"noreferrer",children:`${n.slice(0,7)}`})})})}function me({commit_url:t}){const n=t.split("/").pop();return e.jsx(r,{disableTooltip:!0,icon:e.jsx(c,{title:"Commit",children:e.jsx(z,{fontSize:"small",color:"action"})}),label:n&&e.jsx(c,{title:n,children:e.jsx("a",{href:t,target:"_blank",rel:"noreferrer",children:`${n.slice(0,7)}`})})})}function ue({message:t}){return e.jsx(r,{icon:e.jsx(c,{title:"Commit Message",children:e.jsx(k,{fontSize:"small",color:"action"})}),label:`${t}`})}function R({userName:t}){return e.jsx(r,{icon:e.jsx(c,{title:"Username",children:e.jsx(V,{fontSize:"small",color:"action"})}),label:`${t}`})}function pe({metadata:t}){const{branch:n,user_name:o,run_app_url:s,workspace_name:a,workspace_app_url:l,run_id:i,run_message:u,commit_url:h,pull_request_url:x}=t||{},g=e.jsxs(e.Fragment,{children:[n&&e.jsx(M,{branch:n}),x&&e.jsx(re,{pr_url:x}),a&&l&&e.jsx(_,{name:"Terraform Cloud Workspace",label:a,url:l,Icon:ie}),i&&s&&e.jsx(_,{name:"Terraform Cloud Run",label:i,url:s,Icon:se}),h&&e.jsx(me,{commit_url:h}),u&&e.jsx(_,{name:"Run message",Icon:k,label:u}),o&&e.jsx(R,{userName:o})]});return j.compact(g.props.children).length>0?g:e.jsx(r,{labelColor:"textSecondary",icon:e.jsx(b,{fontSize:"small",color:"action"}),label:"No metadata"})}function _({Icon:t,name:n,label:o,url:s}){return e.jsx(r,{icon:n&&e.jsx(c,{title:n,children:e.jsx(t,{fontSize:"small",color:"action"})}),label:s?e.jsx("a",{href:s,target:"_blank",rel:"noreferrer",children:o}):o})}function he(){return e.jsxs(f,{column:!0,fullHeight:!0,children:[e.jsxs(f,{header:!0,paper:!0,children:[e.jsx(W,{color:"action"}),e.jsx(m,{variant:"h5",children:"IaC Governance"}),e.jsx(f,{grow:!0}),e.jsx(c,{title:"Documentation",children:e.jsx(P,{href:"https://docs.streamsec.io/docs/simulation-screen-overview",target:"_blank",children:e.jsx(q,{fontSize:"small"})})})]}),e.jsx(xe,{})]})}function xe(){const[t,n,o]=$("f"),s=w(),a=d.useCallback(i=>s({eventId:i._id,simulation:!0}),[s]),l=A(ke);return e.jsx(N,{headerTitle:"IaC Governance",badgeId:"simulations",screen:F.Simulations,HeaderIcon:W,EmptyMessage:je,Filters:de,SavedViews:U,columns:l,query:ge,defaultFilterValues:null,filterValues:t,onFilterValuesChange:n,onRowClick:a,getLink:o})}function je(){return e.jsxs(e.Fragment,{children:[e.jsx(m,{component:"span",children:"No simulations, "}),e.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://docs.streamsec.io/docs/github-action",children:"enable integration"}),"."]})}function de({values:t,onChange:n}){const o=K();return e.jsx(J,{filters:o,filterValues:t,onChange:n})}function be({data:t}){return t!=null&&t.status?e.jsx(Q,{status:t==null?void 0:t.status}):e.jsx(p,{})}function fe({data:t}){return e.jsx(Y,{children:e.jsx(m,{noWrap:!0,children:X(t==null?void 0:t.timestamp)})})||e.jsx(p,{})}function _e({data:t}){const n=t==null?void 0:t.source;return n?e.jsx(ae,{source:n,children:e.jsx(r,{disableTooltip:!0,icon:(n==null?void 0:n.type)&&e.jsx(S,{disableTooltip:!0,type:n.type,fontSize:"small"}),label:(n==null?void 0:n.metadata)&&{TerraformCloud:"Terraform Cloud",Github:n.metadata.branch&&n.metadata.base_branch?e.jsx(r,{disableTooltip:!0,icon:e.jsx(b,{fontSize:"small",color:"action"}),label:`${n.metadata.branch} -> ${n.metadata.base_branch}`}):"Github",Bitbucket:n.metadata.branch&&n.metadata.base_branch?e.jsx(r,{disableTooltip:!0,icon:e.jsx(b,{fontSize:"small",color:"action"}),label:`${n.metadata.branch} -> ${n.metadata.base_branch}`}):"Bitbucket"}[n==null?void 0:n.type]})}):e.jsx(p,{})}const ge=H`
  query Simulations($skip: Int, $limit: Int, $filters: EventFilters) {
    events(skip: $skip, limit: $limit, filters: $filters, simulation: true) {
      totalCount
      results {
        _id
        timestamp
        status
        account_ids
        impact_types
        violations_by_violated_rules_severity
        predicted_cost
        source {
          type
          format
          ... on GithubSource {
            metadata {
              base_branch
              branch
              pr_id
              commit_hash
              commit_message
              user_name
              repository
            }
          }
          ... on BitbucketSource {
            metadata {
              base_branch
              branch
              pr_id
              commit_hash
              commit_message
              user_name
              repository
            }
          }
          ... on TerraformCloudSource {
            metadata {
              user_name
              run_app_url
              workspace_name
              workspace_app_url
              run_id
              task_result_enforcement_level
              run_message
              organization_name
              branch
              commit_url
              pull_request_url
            }
          }
        }
        sub_events {
          cloud_provider
          account_id
          is_base
          region
          resources: entities {
            id
            type
            display_name
          }
          action_type
        }
      }
    }
  }
`;function ye({data:t}){var n,o;return(n=t==null?void 0:t.source)!=null&&n.format?e.jsx(B,{format:(o=t==null?void 0:t.source)==null?void 0:o.format,fontSize:"small"}):e.jsx(p,{})}function Ce({data:t}){var n;return((n=t==null?void 0:t.account_ids)==null?void 0:n.length)>0?e.jsx(Z,{id:t==null?void 0:t.account_ids[0]}):e.jsx(p,{})}function Se({data:t}){const n="resource",o="action_type",s=d.useMemo(()=>j.chain(t==null?void 0:t.sub_events).map(({resources:l,action_type:i})=>l.map(u=>({[n]:u,[o]:i}))).flatten().groupBy(o).mapValues(l=>l.map(i=>i[n])).value(),[t==null?void 0:t.sub_events]),a=d.useMemo(()=>j.chain(s).reduce((l,i)=>l+i.length,0).value(),[s]);return a>0?e.jsx(v,{title:"Resources to be changed",content:e.jsx(ee,{gap:1,children:j.map(s,(l,i)=>e.jsx(r,{icon:e.jsx(te,{type:i}),label:e.jsxs(e.Fragment,{children:[e.jsx(m,{component:"span",children:L(i)}),e.jsxs(m,{component:"span",color:"textSecondary",children:[" (",l.length,")"]})]})},i))}),children:e.jsx(m,{style:{fontWeight:"bold"},children:a})}):e.jsx(p,{})}function Ie({data:t}){var n,o;return e.jsxs(ve,{style:{justifyContent:"flex-end"},children:[!((n=t==null?void 0:t.impact_types)!=null&&n.length)&&e.jsx(p,{}),(o=t==null?void 0:t.impact_types)==null?void 0:o.map((s,a)=>e.jsx(ne,{type:s},a))]})}const p=()=>e.jsx(m,{color:"textSecondary",children:"--"}),ve=G.div.withConfig({displayName:"SimulationsPage__IconsContainer",componentId:"sc-197x0oi-0"})(({theme:t})=>({display:"flex",alignItems:"center","& > *":{marginRight:t.spacing(1)},"& > *:last-of-type":{marginRight:t.spacing(0)}})),ke=[{title:"Status",Component:be,style:{minWidth:100,maxWidth:100}},{title:"Timestamp",Component:fe,style:{maxWidth:200,minWidth:180}},{key:"source",title:"Source",Component:_e,style:{maxWidth:250,minWidth:180}},{title:"Format",Component:ye,style:{maxWidth:60,minWidth:50}},{title:"Account",Component:Ce,style:{maxWidth:180,minWidth:150}},{title:"Region",Component:D,style:{maxWidth:100,minWidth:100}},{title:"Resources",Component:Se,style:{minWidth:80,maxWidth:100}},{title:"Violations",Component:O,style:{minWidth:180,maxWidth:200}},{title:"Impacts",Component:Ie,style:{minWidth:200}}];function qe(){return e.jsx(oe,{ListComponent:he,DetailsComponent:E})}export{qe as Simulation,qe as default};
