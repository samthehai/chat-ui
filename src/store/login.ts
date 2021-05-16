import { ActionTree, MutationTree, GetterTree } from 'vuex';
import { RootState } from '.';

export type State = {
  user: unknown;
};

export const state = (): State => ({
  user: null,
});

enum MUTATION_TYPES {
  SET_USER = 'SET_USER',
}

export const mutations: MutationTree<State> = {
  [MUTATION_TYPES.SET_USER](localState: State, user: unknown): void {
    localState.user = user;
  },
};

export enum GETTER_TYPES {
  IS_LOGGED_IN = 'IS_LOGGED_IN',
}

export const getters: GetterTree<State, RootState> = {
  [GETTER_TYPES.IS_LOGGED_IN](localState: State): boolean {
    return !!localState.user;
  },
};

export enum ACTION_TYPES {
  ON_AUTH_STATE_CHANGED = 'ON_AUTH_STATE_CHANGED',
  SIGN_IN_WITH_FACEBOOK = 'SIGN_IN_WITH_FACEBOOK',
  LOGOUT = 'LOGOUT',
}

export const actions: ActionTree<State, RootState> = {
  [ACTION_TYPES.ON_AUTH_STATE_CHANGED]({ commit }, { authUser, claims }) {
    if (!authUser) {
      commit(MUTATION_TYPES.SET_USER, null);

      return;
    }

    const { uid, email, emailVerified, displayName, photoURL } = authUser;

    commit(MUTATION_TYPES.SET_USER, {
      uid,
      email,
      emailVerified,
      displayName,
      photoURL, // results in photoURL being undefined for server auth
      // use custom claims to control access (see https://firebase.google.com/docs/auth/admin/custom-claims)
      isAdmin: claims.custom_claim,
    });
  },
  async [ACTION_TYPES.SIGN_IN_WITH_FACEBOOK]() {
    const provider = new this.$fireModule.auth.FacebookAuthProvider();
    await this.$fire.auth.signInWithRedirect(provider);
  },
  async [ACTION_TYPES.LOGOUT]({ commit }) {
    try {
      await this.$fire.auth.signOut();
    } catch (e) {
    } finally {
      commit(MUTATION_TYPES.SET_USER, null);
    }
  },
};
