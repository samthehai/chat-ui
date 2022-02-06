import { Context } from '@nuxt/types';
import { GETTER_TYPES as AUTH_GETTER_TYPES } from '@/store/auth';

const LOGIN_PATH = 'login';

export default ({ redirect, store: { getters }, route }: Context): void => {
  const isLoggedIn = getters[`auth/${AUTH_GETTER_TYPES.IS_LOGGED_IN}`];
  if (!isLoggedIn) {
    redirect('/login');

    return;
  }

  const [, firstSubPath] = route.path.split('/');
  if (firstSubPath === LOGIN_PATH) {
    redirect('/');
  }
};
