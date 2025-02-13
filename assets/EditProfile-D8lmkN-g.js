import{q as x,k as N,d as $,r as n,a as k,j as a}from"./index-Ba6YVotX.js";import{m as q,k as P,j as m,i as S,$ as T,X as w,d as F,n as A,T as p}from"./App-CM6DQiPl.js";const C=x.div.withConfig({displayName:"EditProfile__InfoLayout",componentId:"sc-jq52kc-0"})(["display:flex;"]),W=x.div.withConfig({displayName:"EditProfile__UserInfo",componentId:"sc-jq52kc-1"})(["display:flex;flex-direction:column;justify-content:center;margin-left:","px;"],t=>t.theme.spacing(2)),M=q(t=>({container:{display:"flex",flexDirection:"column","& > *:not(:last-child)":{marginBottom:t.spacing(3)}}})),B=({setLoading:t,handleNext:h})=>{const i=N(),y=M(),l=$(),o=n.useRef(!1),[s,_,u]=P(""),[j,v]=n.useState(""),[c,E]=n.useState({}),{data:{userDetails:e}={},loading:d}=k(m`
      query userDetails($id: ID) {
        userDetails(id: $id) {
          _id
          email
          full_name
        }
      }
    `,{variables:{id:i._id}});n.useEffect(()=>{t(d)},[d,t]),n.useEffect(()=>{u(e==null?void 0:e.full_name),v(e==null?void 0:e.email)},[u,e==null?void 0:e.email,e==null?void 0:e.full_name]);const[b]=S(m`
    mutation UpdateUser($id: ID, $input: UpdateUserInput) {
      updateUser(id: $id, input: $input) {
        _id
        full_name
      }
    }
  `);n.useEffect(()=>{o.current||e||(o.current=!0,t(!0))},[t,e]);const I=()=>{let r=null;return s.match(/\d/)&&(r={...r,full_name:"Full name cannot contain numbers"}),r},g=async r=>{r.preventDefault();const f=I();if(f){E(f);return}t(!0);try{await b({variables:{id:i._id,input:{full_name:s}}}),l("Profile edited successfully","success"),h()}catch(U){l(U.message,"error"),t(!1)}};return a.jsxs("form",{className:y.container,onSubmit:g,id:"wizard-form",noValidate:!0,children:[a.jsxs(C,{children:[a.jsx(T,{children:w(s)||"N/A"}),a.jsx(W,{children:s&&a.jsx(F,{variant:"subtitle1",children:s})})]}),a.jsx(A,{light:!0}),a.jsx(p,{label:"Full name",fullWidth:!0,variant:"outlined",..._,inputProps:{maxLength:100},error:!!c.full_name,helperText:c.full_name}),a.jsx(p,{label:"Work Email",fullWidth:!0,variant:"outlined",value:j,disabled:!0,inputProps:{maxLength:100}})]})};export{B as default};
