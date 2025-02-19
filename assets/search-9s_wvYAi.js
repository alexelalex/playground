import{a as h,l as $,f as g}from"./index-CaQltE5E.js";function m(a){var t,l;const{phrase:e,filters:i,page:n=1,limit:r=10,skipQuery:o}=a,{data:s,loading:u,error:c}=h(g(`
      query ResourceInventorySearch(
        $includeTags: Boolean!
        $phrase: String
        $filters: SearchFilters
        $skip: Int
        $limit: Int
      ) {
        search(phrase: $phrase, filters: $filters, skip: $skip, limit: $limit) {
          totalCount
          results {
            id
            type
            display_name
            addresses
            is_public
            state
            network_interfaces {
              id
              addresses
            }
            tags @include(if: $includeTags) {
              Key
              Value
            }
            cloud_tags @include(if: $includeTags) {
              Key
              Value
            }
          }
        }
      }
    `),{skip:o||!e&&!i,variables:{includeTags:!!e,phrase:e,filters:$.omitBy(i,f=>f===""),skip:(n-1)*r,limit:r}}),p=(t=s==null?void 0:s.search)==null?void 0:t.results,d={error:c,loading:u,totalCount:(l=s==null?void 0:s.search)==null?void 0:l.totalCount};return[p,d]}export{m as u};
