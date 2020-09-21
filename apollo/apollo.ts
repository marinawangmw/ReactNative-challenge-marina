import {ApolloClient, InMemoryCache, makeVar} from '@apollo/client';

const initialCacheData = {
  __typename: '',
  info: {},
  results: [],
};

export const isScrolling = makeVar(false);

export const isTyping = makeVar(false);

export const isFetchingMore = makeVar(false);

const mergeDataInCacheFromApi = (incoming: any, existing: any) => {
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
          },
          read(characters) {
            return characters;
          },
        },
        locations: {
          keyArgs: ['filter'],
          merge(existing = initialCacheData, incoming) {
            if (isTyping()) {
              return incoming;
            }
            if (isScrolling()) {
              const {results: newLocations} = incoming;
              const {results: oldLocations} = existing;
              return {
                info: incoming.info,
                results: [...oldLocations, ...newLocations],
              };
            }
          },
          read(locations) {
            return locations;
          },
        },
        episodes: {
          keyArgs: ['filter'],
          merge(existing = initialCacheData, incoming) {
            if (isTyping()) {
              return incoming;
            }
            if (isScrolling()) {
              const {results: newEpisodes} = incoming;
              const {results: oldEpisodes} = existing;
              return {
                info: incoming.info,
                results: [...oldEpisodes, ...newEpisodes],
              };
            }
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
