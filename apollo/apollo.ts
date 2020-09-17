import {ApolloClient, InMemoryCache} from '@apollo/client';
import {relayStylePagination} from '@apollo/client/utilities';

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(), //{
  //   typePolicies: {
  //     Query: {
  //       fields: {
  //         characters: relayStylePagination(['query']),
  //       },
  //     },
  //   },
  // }
});

export const queries = {
  characters: `
    query getCollection($name: String!, $type: String!, $page: Int!) {
      characters(page: $page, filter: {name: $name, type: $type}) {
        info {
          pages
          next
        }
        results {
          id
          name
          type
          species
          gender
          image
        }
      }
    }
    `,
  locations: `
    query getCollection($name:String!,$type:String!, $page:Int!) {
        locations(page:$page,filter:{name:$name, type:$type}){
            info{
              pages
              next
            }
            results{
                id
                name
                dimension
                residents{
                    id
                    name
                    image
                }
            }
        }
    }`,
  episodes: `
    query getCollection($name:String!, $page:Int!) {
        episodes(page:$page,filter:{name:$name}){
            info{
              pages
              next
            }
            results{
                id
                name
                air_date
                episode
                characters{
                  id
                  name
                  image
                }
            }
        }
    }`,
};
