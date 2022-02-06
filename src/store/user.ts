import { ActionTree, MutationTree, GetterTree } from 'vuex';
import { RootState } from '@/store/index';
import { Context } from '@nuxt/types';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'vue-apollo';
import meQuery from '@/api/graphql/queries/me.gql';

export type State = {
  me: Maybe<User>;
};

export const state = (): State => ({
  me: null,
});

const getMe = async (
  client: ApolloClient<Record<string, unknown>>,
  variables: MeQueryVariables,
): Promise<MeQuery> => {
  const { data } = await client.query<MeQuery, MeQueryVariables>({
    query: meQuery,
    errorPolicy: 'all',
    variables,
  });

  if (!data) {
    throw new Error('failed to get my information');
  }

  return data;
};

enum MUTATION_TYPES {
  SET_ME = 'SET_ME',
}

export const mutations: MutationTree<State> = {
  [MUTATION_TYPES.SET_ME](localState: State, user: User): void {
    localState.me = user;
  },
};

export enum GETTER_TYPES {
  ME = 'ME',
}

export const getters: GetterTree<State, RootState> = {
  [GETTER_TYPES.ME](localState: State): Maybe<User> {
    return localState.me;
  },
};

export enum ACTION_TYPES {
  GET_ME = 'GET_ME',
}

export const actions: ActionTree<State, RootState> = {
  async [ACTION_TYPES.GET_ME]({ commit }, { app }: Context) {
    const defaultClient = (app.apolloProvider as ApolloProvider)?.defaultClient;
    const data = await getMe(defaultClient, {});

    commit(MUTATION_TYPES.SET_ME, data.me);
  },
};
