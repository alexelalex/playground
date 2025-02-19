import{i as m,j as _,Y as f,Z as h}from"./App-ChMHXrZS.js";import{e as k,s as L}from"./index-D3dvFTON.js";function F(){const[l,d]=m(_`
      mutation Login($credentials: Credentials) {
        login(credentials: $credentials) {
          access_token
          refresh_token
          two_factor_state
          user {
            _id
            full_name
            default_customer_id
            organization_admin
            email
          }
        }
      }
    `,{errorPolicy:"none"}),{onUserChange:n,onSessionChange:o}=k(),u=f();return[(...t)=>{const[{variables:{credentials:{email:c,password:g}}}]=t,e=u&&h(c,g);return e?(n(e.user),o({access_token:e.access_token,refresh_token:e.refresh_token,demo:!0}),Promise.resolve({data:{login:e}})):l(...t).then(({data:{login:{access_token:i,refresh_token:s,two_factor_state:a,user:r}}})=>(n(r),o({access_token:i,refresh_token:s,two_factor_state:a}),L(r),{data:{login:{access_token:i,refresh_token:s,two_factor_state:a}}}))},d]}export{F as u};
