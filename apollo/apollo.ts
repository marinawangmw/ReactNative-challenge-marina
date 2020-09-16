import {InMemoryCache, ApolloClient} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export const queries = {
  characters: `
    query getCollection($name: String!, $type: String!, $page: Int!) {
      characters(page: $page, filter: {name: $name, type: $type}) {
        info {
          pages
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
            }
            results{
                id
                name
                dimension
                residents{
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
            }
            results{
                id
                name
                air_date
                episode
                characters{
                name
                image
                }
            }
        }
    }`,
};
