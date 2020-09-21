import {ApolloClient, InMemoryCache, makeVar} from '@apollo/client';
import {NavigationScreenProp} from 'react-navigation';
import {Filter} from '../types/types';

const initialCacheData = {
  __typename: '',
  info: {},
  results: [],
};

export const isScrolling = makeVar(false);

export const isTyping = makeVar(false);

export const filter = makeVar(Filter.characters);

export const navReference = makeVar<NavigationScreenProp<any>>(null);

const mergeDataInCacheFromApi = (existing: any, incoming: any) => {
  if (isTyping()) {
    return incoming;
  }
  if (isScrolling()) {
    const {results: newCharacters} = incoming;
    const {results: oldCharacters} = existing;
    return {
      info: incoming.info,
      results: [...oldCharacters, ...newCharacters],
    };
  }
};

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        characters: {
          keyArgs: ['filter'],
          merge(existing = initialCacheData, incoming) {
            return mergeDataInCacheFromApi(existing, incoming);
          },
          read(characters) {
            return characters;
          },
        },
        locations: {
          keyArgs: ['filter'],
          merge(existing = initialCacheData, incoming) {
            return mergeDataInCacheFromApi(existing, incoming);
          },
          read(locations) {
            return locations;
          },
        },
        episodes: {
          keyArgs: ['filter'],
          merge(existing = initialCacheData, incoming) {
            return mergeDataInCacheFromApi(existing, incoming);
          },
          read(episodes) {
            return episodes;
          },
        },
      },
    },
  },
});

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache,
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
