import { ActionTree, MutationTree, GetterTree } from 'vuex';
import { RootState } from '@/store/index';
import { ApolloClient } from 'apollo-client';
import { FireAuthServerUser } from '@nuxtjs/firebase/types';
import loginMutation from '@/api/graphql/mutations/login.gql';

export type State = {
  authUser: Maybe<{ uid: string }>;
};

export const state = (): State => ({
  authUser: null,
});

const login = async (
  client: ApolloClient<Record<string, unknown>>,
  variables: LoginMutationVariables,
): Promise<LoginMutation> => {
  const { data } = await client.mutate<LoginMutation, LoginMutationVariables>({
    mutation: loginMutation,
    errorPolicy: 'all',
    variables,
  });

  if (!data) {
    throw new Error('failed to login');
  }

  return data;
};

enum MUTATION_TYPES {
  SET_AUTH_USER = 'SET_AUTH_USER',
}

export const mutations: MutationTree<State> = {
  [MUTATION_TYPES.SET_AUTH_USER](
    localState: State,
    authUser: FireAuthServerUser,
  ): void {
    localState.authUser = authUser;
  },
};

export enum GETTER_TYPES {
  IS_LOGGED_IN = 'IS_LOGGED_IN',
}

export const getters: GetterTree<State, RootState> = {
  [GETTER_TYPES.IS_LOGGED_IN](localState: State): boolean {
    return !!localState.authUser;
  },
};

export enum ACTION_TYPES {
  ON_AUTH_STATE_CHANGED = 'ON_AUTH_STATE_CHANGED',
  LOG_IN_WITH_FACEBOOK = 'LOG_IN_WITH_FACEBOOK',
  LOG_IN_WITH_GOGGLE = 'LOG_IN_WITH_GOGGLE',
  LOGOUT = 'LOGOUT',
}

export const actions: ActionTree<State, RootState> = {
  async [ACTION_TYPES.ON_AUTH_STATE_CHANGED]({ commit }, { authUser }) {
    if (!authUser) {
      commit(MUTATION_TYPES.SET_AUTH_USER, null);

      return;
    }

    if (authUser && authUser.getIdToken) {
      try {
        const idToken = await authUser.getIdToken(true);
        await this.app.$apolloHelpers.onLogin(idToken);

        const defaultClient = this.app.apolloProvider?.defaultClient;
        if (!defaultClient) {
          // TODO
          return;
        }

        await login(defaultClient, {});
      } catch (e) {
        // TODO
      }
    }

    const { uid } = authUser;

    commit(MUTATION_TYPES.SET_AUTH_USER, {
      uid,
    });
  },
  async [ACTION_TYPES.LOG_IN_WITH_FACEBOOK]() {
    const provider = new this.$fireModule.auth.FacebookAuthProvider();
    await this.$fire.auth.signInWithRedirect(provider);
  },
  async [ACTION_TYPES.LOG_IN_WITH_GOGGLE]() {
    const provider = new this.$fireModule.auth.GoogleAuthProvider();
    await this.$fire.auth.signInWithRedirect(provider);
  },
  async [ACTION_TYPES.LOGOUT]({ commit }) {
    try {
      await this.$fire.auth.signOut();
      await this.app.$apolloHelpers.onLogout();
    } catch (e) {
    } finally {
      commit(MUTATION_TYPES.SET_AUTH_USER, null);
    }
  },
};
