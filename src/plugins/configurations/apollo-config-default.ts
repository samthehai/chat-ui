import { Context } from '@nuxt/types';

type ApolloConfigDefault = {
  httpEndpoint: string;
  wsEndpoint: string;
  websocketsOnly: boolean;
};

export default function ({
  env: { httpEndpoint, wsEndpoint },
}: Context): ApolloConfigDefault {
  return {
    httpEndpoint,
    wsEndpoint,
    websocketsOnly: true,
  };
}
