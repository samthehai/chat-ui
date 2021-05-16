import { ActionTree, MutationTree, GetterTree } from 'vuex';
import { ACTION_TYPES as LOGIN_ACTION_TYPES } from '@/store/login';

export type RootState = {
  isDebugMode: boolean;
  isRenderedByServer: boolean;
};

export const state = (): RootState => ({
  isDebugMode: false,
  isRenderedByServer: false,
});

enum MUTATION_TYPES {
  SET_DEBUG_MODE = 'SET_DEBUG_MODE',
  SET_IS_RENDERED_BY_SERVER = 'SET_IS_RENDERED_BY_SERVER',
}

export const mutations: MutationTree<RootState> = {
  [MUTATION_TYPES.SET_DEBUG_MODE](
    localState: RootState,
    isDebugMode: boolean,
  ): void {
    localState.isDebugMode = isDebugMode;
  },
  [MUTATION_TYPES.SET_IS_RENDERED_BY_SERVER](
    localState: RootState,
    isRenderedByServer: boolean,
  ): void {
    localState.isRenderedByServer = isRenderedByServer;
  },
};

export enum GETTER_TYPES {
  IS_DEBUG_MODE = 'IS_DEBUG_MODE',
  IS_RENDERED_BY_SERVER = 'IS_RENDERED_BY_SERVER',
}

export const getters: GetterTree<RootState, RootState> = {
  [GETTER_TYPES.IS_DEBUG_MODE](localState: RootState): boolean {
    return localState.isDebugMode;
  },
  [GETTER_TYPES.IS_RENDERED_BY_SERVER](localState: RootState): boolean {
    return localState.isRenderedByServer;
  },
};

export enum ACTION_TYPES {
  SET_IS_RENDERED_BY_SERVER = 'SET_IS_RENDERED_BY_SERVER',
}

export const actions: ActionTree<RootState, RootState> = {
  [ACTION_TYPES.SET_IS_RENDERED_BY_SERVER]({ commit }, isRenderedByServer) {
    commit(MUTATION_TYPES.SET_IS_RENDERED_BY_SERVER, isRenderedByServer);
  },
  async nuxtServerInit({ dispatch }, ctx) {
    if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
      const { allClaims: claims, ...authUser } = ctx.res.locals.user;

      await dispatch(
        `login/${LOGIN_ACTION_TYPES.ON_AUTH_STATE_CHANGED}`,
        {
          authUser,
          claims,
        },
        {
          root: true,
        },
      );
    }
  },
};
