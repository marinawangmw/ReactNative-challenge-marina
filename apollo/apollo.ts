import {ApolloClient, InMemoryCache} from '@apollo/client';
import {
  concatPagination,
  offsetLimitPagination,
  Reference,
  relayStylePagination,
} from '@apollo/client/utilities';

const initialCharacters = {
  __typename: {
    info: {},
    results: [],
  },
};

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: false,
            merge(existing = {results: []}, incoming) {
              const {results: newCharacters} = incoming;
              const {results: oldCharacters} = existing;
              return {
                ...incoming,
                results: [...oldCharacters, ...newCharacters],
              };
            },
          },
          locations: {
            keyArgs: false,
            merge(existing = {results: []}, incoming) {
              const {results: newLocations} = incoming;
              const {results: oldLocations} = existing;
              return {
                ...incoming,
                results: [...oldLocations, ...newLocations],
              };
            },
          },
          episodes: {
            keyArgs: false,
            merge(existing = {results: []}, incoming) {
              const {results: newEpisides} = incoming;
              const {results: oldEpisodes} = existing;
              return {
                ...incoming,
                results: [...oldEpisodes, ...newEpisides],
              };
            },
          },
        },
      },
    },
  }),
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
