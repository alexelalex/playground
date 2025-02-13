import{j as e,x as O,v as de,r as f,U as xe,D as d,p as R,V as je,d as A,f as m,l as K,a as q,q as he,h as E,S as Q,i as w,W as _,Y as U,Z as pe,$ as ye,c as me,a0 as S}from"./index-Ba6YVotX.js";import{N as be,O as I,bp as Y,bq as fe,br as ge,bs as Z,B as j,bt as De,bu as L,M as p,bv as y,bw as ve,bx as we,a3 as g,by as _e,bz as Re,K as o,bA as ke,d as c,C as Ce,bB as Se,bC as Ie,n as k,bD as Te,g as b,bE as $,bF as Ae,bG as Ee,bH as J,q as X,s as ee,bI as Le,w as $e,bJ as Be,as as Fe,bK as te,aR as ze,at as We,bL as Ve,bM as Ne,bN as re,bO as v,bP as He,bQ as Me,bR as Pe,bS as Ge,bT as Oe,af as Ke,bU as qe,u as ne,b6 as Qe,ae as h,bV as Ue,bW as M,bX as P,bY as Ye,bZ as Ze,b_ as Je,b$ as Xe,c0 as et,ag as tt,A as rt,z as se,i as ie,I as B,bg as oe,c1 as ae,T as nt,c2 as st,c3 as it,c4 as ot,c5 as G,c6 as at,c7 as ct,c8 as lt}from"./App-CM6DQiPl.js";import{D as ut,u as dt}from"./DetectionsSeveritySummary-CSOOCv2a.js";function xt(){return e.jsxs(be,{...jt(),children:[e.jsx(I,{value:"detections",label:"Detections"}),e.jsx(I,{value:"investigator",label:"Investigator"}),e.jsx(I,{value:"detection_rules",label:"Rules"})]})}function jt(){const t=O(),r=de();return{value:t.split("/").pop(),onChange:f.useCallback((n,s)=>{r.push(`/${s}`)},[r])}}function ht(){const[t,r]=Y(),n=f.useRef(null),s=fe({onComplete(){r([])}}),{onSubmit:l}=ge({ids:t,type:xe.Detection,resourceIds:t});return e.jsx(Z,{trigger:e.jsx(j,{ref:n,disabled:t.length===0,variant:"outlined",size:"small",startIcon:e.jsx(De,{fontSize:"small"}),children:"Actions"}),menu:({handleMenuClose:u,...i})=>e.jsxs(L,{...i,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:[e.jsx(p,{onClick:()=>{u(),s({acknowledge:!0,detections_ids:t,reason:""})},children:e.jsx(y,{primary:"Acknowledge"})}),e.jsx(p,{onClick:()=>{u(),s({acknowledge:!1,detections_ids:t})},children:e.jsx(y,{primary:"Revoke Acknowledge"})}),e.jsx(ve,{onSubmit:l,resourceIds:t,summary:`[Stream Security] - ${t.length>1?"Multiple":""} threat detections`,inMenu:!0,variant:"text"})]})})}function pt(){const[t,r]=we(),[n]=g();return e.jsx(j,{size:"small",variant:"outlined",active:t,selected:Object.keys(n||{}).length>1,startIcon:e.jsx(_e,{}),onClick:()=>r(!t),children:"Filters"})}function yt(){const[t]=g(),{totalCount:r,error:n,loading:s}=Re({variables:{filters:t}}),[l,u]=Y();return n?e.jsxs(o,{row:!0,center:!0,gap:!0,children:[e.jsx(ke,{color:"error"}),e.jsx(c,{color:"error",children:"Error"})]}):s?e.jsxs(o,{row:!0,center:!0,gap:!0,children:[e.jsx(Ce,{size:15}),e.jsx(c,{color:"textSecondary",children:"Loading..."})]}):r?e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"subtitle1",noWrap:!0,children:`Showing ${r} Detections`}),l.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(c,{noWrap:!0,variant:"subtitle1",color:"primary",children:`${l.length} selected`}),e.jsx(j,{variant:"text",size:"small",onClick:()=>u([]),children:"Clear"})]})]}):e.jsx(c,{color:"textSecondary",noWrap:!0,children:"No Detections Found"})}function mt(){return e.jsx(Se,{children:e.jsxs(o,{row:!0,fullHeight:!0,children:[e.jsx(Ie,{}),e.jsxs(o,{paper:!0,grow:!0,column:!0,children:[e.jsxs(o,{header:!0,children:[e.jsx(yt,{}),e.jsx(k,{orientation:"vertical",flexItem:!0}),e.jsx(ut,{}),e.jsx(o,{grow:!0}),e.jsx(bt,{}),e.jsx(pt,{}),e.jsx(k,{orientation:"vertical",flexItem:!0}),e.jsx(ft,{}),e.jsx(k,{orientation:"vertical",flexItem:!0}),e.jsx(ht,{})]}),e.jsx(gt,{MainView:Dt,GroupByView:vt})]})]})})}function bt(){const[t,r]=g(),n=typeof(t==null?void 0:t.acknowledged)<"u"&&(t==null?void 0:t.acknowledged)!==!1;return e.jsxs(o,{row:!0,center:!0,gap:!0,children:[e.jsx(Te,{size:"small",checked:n,onChange:s}),e.jsx(b,{children:e.jsx(c,{noWrap:!0,children:"Show Acknowledged"})})]});function s(){r({...t,acknowledged:!n})}}function ft(){const[t,r]=$();return e.jsx(Z,{trigger:e.jsxs(j,{variant:"outlined",size:"small",selected:!!t,startIcon:e.jsx(Ae,{color:"action"}),endIcon:e.jsx(Ee,{color:"action",fontSize:"small"}),children:["Group By",t&&e.jsxs(e.Fragment,{children:[":"," ",e.jsx(c,{color:"primary",children:T(t)})]})]}),menu:({handleMenuClose:n,...s})=>e.jsxs(L,{...s,PaperProps:{style:{maxHeight:400}},anchorOrigin:{vertical:"bottom",horizontal:"left"},children:[e.jsx(p,{disabled:!t,onClick:()=>{r(null),n()},children:e.jsx(y,{secondary:"None"})}),Object.values(d).map(l=>e.jsx(p,{disabled:t===l,onClick:()=>{r(l),n()},children:e.jsx(y,{primary:T(l)})},l))]})})}function T(t){switch(t){case d.AccountId:return"Cloud Account";case d.ActivityType:return"Detection Type";case d.AnomalySeverity:return"Detection Severity";case d.Region:return"Region";case d.ResourceId:return"Resource";case d.ResourceType:return"Resource Type"}}function gt({MainView:t,GroupByView:r}){return $()[0]?e.jsx(r,{}):e.jsx(t,{})}function Dt(){const[t]=g();return e.jsx(J,{filters:t})}function vt(){const[t]=$(),[r]=g(),{results:n,error:s,loading:l}=dt({variables:{group_by:t,filters:r}});return e.jsx(o,{scroll:!0,margin:2,children:s?e.jsx(X,{children:e.jsx(ee,{error:s})}):l?e.jsx(Le,{}):n==null?void 0:n.map((u,i)=>e.jsx(wt,{group:u,groupBy:t},i))})}function wt({group:t,groupBy:r}){const[n,s]=f.useState(!1),[l]=g(),u=f.useMemo(()=>({...l,[r]:t.group?r===d.AnomalySeverity?Number(t.group):String(t.group):null}),[t,r,l]),i=n?Ve:Ne;return e.jsxs(e.Fragment,{children:[e.jsxs(o,{row:!0,center:!0,bg:!0,mb:!0,sticky:!0,gap:2,round:!0,pad:!0,hover:!0,onClick:()=>s(!n),style:{height:40},children:[e.jsx(i,{color:"action",fontSize:"small"}),e.jsx(b,{children:e.jsx(c,{component:"div",style:{width:"100%",maxWidth:200},noWrap:!0,children:e.jsx(_t,{group:t,groupBy:r})})}),e.jsx(k,{light:!0,orientation:"vertical",flexItem:!0}),e.jsxs(c,{noWrap:!0,children:[e.jsx("b",{children:t.quantity})," ",e.jsx(c,{color:"textSecondary",component:"span",children:"detections"})]})]}),e.jsx($e,{in:n,children:e.jsx(o,{mb:!0,children:e.jsx(J,{filters:u,skipQuery:!n,totalCount:t.quantity??void 0})})})]})}function _t({group:t,groupBy:r}){const{group:n,resource_type:s}=t;if(!n)return e.jsx(c,{color:"textSecondary",children:`No ${T(r)}`});switch(r){case d.AccountId:return e.jsx(We,{id:n});case d.AnomalySeverity:return e.jsxs(o,{row:!0,center:!0,gap:!0,children:[e.jsx(te,{severity:n}),e.jsx(c,{children:ze(n)})]});case d.ResourceId:return e.jsx(Fe,{id:n,resourceType:s||void 0});case d.ResourceType:return e.jsx(Be,{resource_type:n});case d.ActivityType:return e.jsx(c,{children:R(n)});default:return e.jsx(c,{children:n})}}function F({onCompleted:t}={}){const r=je(),n=A(),s=re();return f.useCallback(async(l,u)=>{switch(l){case"enable":if(await Rt(s))try{await St(r,u),n("Detection rule enabled","success")}catch(i){n(i.message||"Failed to enable detection rule","error")}break;case"disable":if(await kt(s))try{await It(r,u),n("Detection rule disabled","success")}catch(i){n(i.message||"Failed to disable detection rule","error")}break;case"edit":s.open(i=>e.jsx(le,{rule:u,...i}),{size:"xl"});break;case"delete":if(await Ct(s))try{await Tt(r,u),n("Detection rule deleted","success")}catch(i){n(i.message||"Failed to delete detection rule","error")}break;case"copy":s.open(i=>e.jsx(ce,{template:C(u),...i}),{size:"xl"});break}t==null||t()},[r,s,n,t])}function Rt(t){return t.confirm({title:"Enable Detection Rule",text:"Are you sure you want to enable this detection rule?",confirmText:"Enable",declineText:"Cancel",actionsLayout:"row",inputText:{disabled:!0}})}function kt(t){return t.confirm({title:"Disable Detection Rule",text:"Are you sure you want to disable this detection rule?",confirmText:"Disable",declineText:"Cancel",actionsLayout:"row",confirmRed:!0,inputText:{disabled:!0}})}function Ct(t){return t.confirm({title:"Delete Detection Rule",text:"Are you sure you want to delete this detection rule?",confirmText:"Delete",declineText:"Cancel",actionsLayout:"row",confirmRed:!0,inputText:{disabled:!0}})}function St(t,r){return t.mutate({mutation:m(`
          mutation EnableDetectionRule($id: ID, $input: DetectionRuleInput) {
              editDetectionRule(id: $id, input: $input)
          }
      `),variables:{id:r._id,input:{...C(r),enabled:!0}},update(n){n.evict({fieldName:"detection_rules"})}})}function It(t,r){return t.mutate({mutation:m(`
          mutation DisableDetectionRule($id: ID, $input: DetectionRuleInput) {
              editDetectionRule(id: $id, input: $input)
          }
      `),variables:{id:r._id,input:{...C(r),enabled:!1}},update(n){n.evict({fieldName:"detection_rules"})}})}function Tt(t,r){return t.mutate({mutation:m(`
              mutation DeleteDetectionRule($id: ID) {
                  deleteDetectionRule(id: $id) 
              }
          `),variables:{id:r._id},update(n){n.evict({fieldName:"detection_rules"})}})}function C(t){return K.omit(t,"_id","created_by","created_at","modified_at")}function At({rule:t,...r}){const n=F({onCompleted:()=>{var s;return(s=r.onClose)==null?void 0:s.call(r,{},"escapeKeyDown")}});return e.jsxs(L,{...r,children:[t!=null&&t.enabled?e.jsxs(p,{onClick:s=>n("disable",t),children:[e.jsx(v,{children:e.jsx(He,{})}),e.jsx(y,{primary:"Disable"})]}):e.jsxs(p,{onClick:s=>n("enable",t),children:[e.jsx(v,{children:e.jsx(Me,{})}),e.jsx(y,{primary:"Enable"})]}),e.jsxs(p,{onClick:s=>n("edit",t),children:[e.jsx(v,{children:e.jsx(Pe,{})}),e.jsx(y,{primary:"Edit"})]}),e.jsxs(p,{onClick:s=>n("copy",t),children:[e.jsx(v,{children:e.jsx(Ge,{})}),e.jsx(y,{primary:"Copy as template"})]}),e.jsxs(p,{onClick:s=>n("delete",t),children:[e.jsx(v,{children:e.jsx(Oe,{})}),e.jsx(y,{primary:"Delete"})]})]})}function z(t){return q(Et,t)}const Et=m(`
  query DetectionRules {
    detection_rules {
      _id
      name
      created_at
      modified_at
      created_by
      description
      severity
      type
      enabled
      labels
      condition {
        main_filter {
          operand
          filters {
            field
            match_type
            value
            operand
            tag {
              key
              match_type
              value
            }
            filters {
              field
              match_type
              value
            }
          }
        }
        exclude {
          operand
          filters {
            field
            match_type
            value
            operand
            tag {
              key
              match_type
              value
            }
            filters {
              field
              match_type
              value
            }
          }
        }
      }
      notification_channels {
        id
        type
      }
      custom_config {
        log_type
        detection_field
      }
      identityml_config {
        match_type
        action
      }
    }
  }
`);function Lt(){const{path:t}=E();return e.jsxs(Q,{children:[e.jsx(w,{path:`${t}/:rule_id`,component:$t}),e.jsx(w,{path:t,exact:!0,component:Bt})]})}function $t(){var u;const{rule_id:t}=E().params,{data:r,loading:n,error:s}=z(),l=(u=r==null?void 0:r.detection_rules)==null?void 0:u.find(i=>(i==null?void 0:i._id)===t);return e.jsx(o,{fullHeight:!0,paper:!0,loading:n,error:s,children:e.jsx(le,{rule:l})})}function Bt(){return e.jsx(o,{fullHeight:!0,row:!0,children:e.jsxs(o,{column:!0,grow:!0,children:[e.jsxs(o,{header:!0,paper:!0,sticky:!0,children:[e.jsx(Ft,{}),e.jsx(o,{grow:!0}),e.jsx(Pt,{}),e.jsx(Mt,{})]}),e.jsx(o,{scroll:!0,grow:!0,children:e.jsx(zt,{})})]})})}function Ft(){var r;const{data:t}=z();return e.jsxs(c,{variant:"subtitle1",children:[(r=t==null?void 0:t.detection_rules)==null?void 0:r.length," Detection Rules Found"]})}function zt(){var V,N;const t=F(),[r]=ne("search",""),n=Qe("detection_rules_table_columns",[]),{data:s,loading:l,error:u}=z(),[i,ue]=f.useState({sort_by:"created_at",sort_order:-1});if(!l&&u)return e.jsx(X,{children:e.jsx(ee,{error:u})});if(!l&&((V=s==null?void 0:s.detection_rules)==null?void 0:V.length)===0)return e.jsx(e.Fragment,{});const W=K.sortBy((N=s==null?void 0:s.detection_rules)==null?void 0:N.filter(a=>!r||a.name.toLocaleLowerCase().includes(r.toLocaleLowerCase())||a.severity.toLocaleLowerCase().includes(r.toLocaleLowerCase())),a=>{var x,D,H;return(i==null?void 0:i.sort_by)==="name"?a.name.toLowerCase():(i==null?void 0:i.sort_by)==="created_by"?(x=a.created_by)==null?void 0:x.toLowerCase():(i==null?void 0:i.sort_by)==="type"?(D=a.type)==null?void 0:D.toLowerCase():(i==null?void 0:i.sort_by)==="labels"?(H=a.labels)==null?void 0:H.join(",").toLowerCase():(i==null?void 0:i.sort_by)==="enabled"?a.enabled:(i==null?void 0:i.sort_by)==="severity"?{[_.Critical]:4,[_.High]:3,[_.Medium]:2,[_.Low]:1}[a.severity]:a.created_at});return(i==null?void 0:i.sort_order)===-1&&W.reverse(),e.jsxs(Ht,{stickyHeader:!0,data:W,sortOptions:i,onSortChange:ue,loading:l,columnOptions:{storage:n},menu:(a,{menuProps:x})=>e.jsx(At,{rule:a,...x}),onClick:a=>t("edit",a),children:[e.jsx(h,{style:{maxWidth:5},render:a=>e.jsx(Ue,{severity:M(a.severity)})}),e.jsx(h,{sortKey:"name",header:"Name",grow:2,render:a=>e.jsxs(o,{column:!0,children:[e.jsx(b,{children:e.jsx(c,{noWrap:!0,children:a.name})}),e.jsx(b,{children:e.jsx(c,{color:"textSecondary",noWrap:!0,children:a.description})})]})}),e.jsx(h,{sortKey:"severity",header:"Severity",render:a=>e.jsxs(o,{row:!0,center:!0,gap:!0,children:[e.jsx(te,{severity:M(a.severity)}),e.jsx(c,{children:R(a.severity)})]})}),e.jsx(h,{sortKey:"created_by",header:"Owner",grow:2,render:a=>e.jsx(Wt,{rule:a})}),e.jsx(h,{sortKey:"created_at",header:"Created",grow:2,render:a=>e.jsx(P,{color:"textSecondary",value:a.created_at})}),e.jsx(h,{sortKey:"modified_at",header:"Modified",grow:2,render:a=>e.jsx(P,{color:"textSecondary",value:a.modified_at})}),e.jsx(h,{sortKey:"type",header:"Type",render:a=>{var x;return e.jsx(b,{children:e.jsx(c,{noWrap:!0,children:a.type===U.Custom?R((x=a.custom_config)==null?void 0:x.log_type):R(a.type)})})}}),e.jsx(h,{sortKey:"labels",header:"Labels",grow:2,render:a=>{var x;return e.jsxs(o,{row:!0,gap:!0,center:!0,children:[e.jsx(Ye,{color:"action",fontSize:"small"}),e.jsx(Ze,{width:300,children:(x=a.labels)==null?void 0:x.filter(Boolean).map(D=>e.jsx(o,{round:!0,border:!0,bg:!0,pad:!0,style:{minWidth:30,maxWidth:80},children:e.jsx(b,{children:e.jsx(c,{color:"textSecondary",noWrap:!0,children:D})})},D))})]})}}),e.jsx(h,{sortKey:"enabled",header:"Status",render:a=>e.jsx(Nt,{rule:a}),style:{minWidth:120}})]})}function Wt({rule:t}){var n,s;const{data:r}=Vt({variables:{id:t.created_by}});return e.jsxs(o,{row:!0,gap:!0,center:!0,children:[e.jsx(Je,{children:e.jsx(c,{children:Xe((n=r==null?void 0:r.userDetails)==null?void 0:n.full_name)||"--"})}),e.jsx(c,{color:"textSecondary",children:(s=r==null?void 0:r.userDetails)==null?void 0:s.full_name})]})}function Vt(t){return q(m(`
        query User($id: ID!) {
            userDetails(id: $id) {
                full_name
            }
        }
    `),t)}function Nt({rule:t}){const r=F();return e.jsxs(o,{row:!0,center:!0,gap:!0,onClick:n=>{n.stopPropagation(),t.enabled?r("disable",t):r("enable",t)},children:[e.jsx(et,{size:"small",checked:t.enabled}),e.jsx(c,{color:"textSecondary",children:t.enabled?"Enabled":"Disabled"})]})}const Ht=he(tt).withConfig({displayName:"page__StyledTable",componentId:"sc-1v5oij1-0"})(({theme:t})=>({padding:t.spacing(2),[Ke]:{background:t.palette.background.paper,marginBottom:t.spacing(1)},[qe]:{borderRadius:0,background:t.palette.background.default}}));function Mt(){const t=re();return e.jsx(j,{variant:"text",size:"small",startIcon:e.jsx(rt,{fontSize:"small"}),onClick:()=>t.open(ce,{size:"xl"}),children:"New Rule"})}function ce({template:t,onClose:r}){const n=A(),s=se({defaultValues:{labels:[],notification_channels:[],type:U.Custom,custom_config:{log_type:pe.Audit},...t}}),[l,{loading:u}]=ie(m(`
        mutation CreateDetectionRule($input: DetectionRuleInput!) {
            createDetectionRule(input: $input)
        }    
    `),{onCompleted(){n("Detection rule created","success"),r()},onError(i){n(i.message||"Failed to create detection rule","error")},update(i){i.evict({fieldName:"detection_rules"})}});return e.jsxs(o,{column:!0,fullHeight:!0,children:[e.jsxs(o,{header:!0,children:[e.jsx(c,{variant:"h6",children:"Create Detection Rule"}),e.jsx(o,{grow:!0}),e.jsx(B,{onClick:r,children:e.jsx(oe,{})})]}),e.jsx(o,{grow:!0,children:e.jsx(ae,{form:s})}),e.jsxs(o,{footer:!0,children:[e.jsx(o,{grow:!0}),e.jsx(j,{variant:"text",onClick:r,children:"Cancel"}),e.jsx(j,{color:"primary",disabled:u||!s.formState.isValid,onClick:()=>{l({variables:{input:s.getValues()}})},children:"Create"})]})]})}function le({rule:t,onClose:r}){const n=A(),s=se({defaultValues:C(t)}),[l,{loading:u}]=ie(m(`
          mutation EditDetectionRule($id: ID, $input: DetectionRuleInput!) {
              editDetectionRule(id: $id, input: $input)
          }    
      `),{onCompleted(){n("Detection rule edited","success"),r==null||r()},onError(i){n(i.message||"Failed to edit detection rule","error")},update(i){i.evict({fieldName:"detection_rules"})}});return e.jsxs(o,{column:!0,fullHeight:!0,children:[e.jsxs(o,{header:!0,children:[!r&&e.jsx(Gt,{}),e.jsx(c,{variant:"h6",children:"Edit Detection Rule"}),e.jsx(o,{grow:!0}),r&&e.jsx(B,{onClick:r,children:e.jsx(oe,{})})]}),e.jsx(o,{grow:!0,children:e.jsx(ae,{form:s})}),e.jsxs(o,{footer:!0,children:[e.jsx(o,{grow:!0}),r&&e.jsx(j,{variant:"text",onClick:r,children:"Cancel"}),e.jsx(j,{color:"primary",disabled:u||!s.formState.isValid,onClick:()=>{t&&l({variables:{id:t._id,input:s.getValues()}})},children:"Save"})]})]})}function Pt(){const[t,r]=ne("search",""),n=ye(r,500);return e.jsx(nt,{variant:"outlined",size:"small",defaultValue:t,style:{width:260},placeholder:"Search by rule name or severity",onChange:s=>n(s.target.value),InputProps:{endAdornment:e.jsx(st,{color:"action",fontSize:"small"})}})}function Gt(){const{url:t}=E(),r=me();return e.jsx(B,{onClick:()=>r.push(t.split("/").slice(0,-1).join("/")),children:e.jsx(it,{})})}function Qt(){const t=O();return e.jsxs(o,{fullHeight:!0,column:!0,children:[e.jsxs(o,{paper:!0,header:!0,style:{paddingTop:0,paddingBottom:0},children:[e.jsx(ot,{color:"action"}),e.jsx(c,{variant:"h5",children:"Detections"}),e.jsx(xt,{}),e.jsx(o,{grow:!0}),t===G.path[0]&&e.jsx(j,{variant:"text",startIcon:e.jsx(at,{}),component:"a",href:"https://docs.streamsec.io/docs/threat-detections",target:"_blank",children:e.jsx(c,{color:"textSecondary",children:"Learn about Detections"})})]}),e.jsx(o,{grow:!0,children:e.jsxs(Q,{children:[e.jsx(w,{path:S(G.path[0]),component:mt}),e.jsx(w,{path:S(lt.path),component:ct}),e.jsx(w,{path:S("/detection_rules"),component:Lt})]})})]})}export{Qt as default};
